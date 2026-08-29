/**
 * Shared instrumentation for the image performance pages.
 *
 * These pages exist to answer two questions that the main Benchmark page
 * cannot: whether batching image requests beats a worker pool, and whether
 * more image workers help at all. The Benchmark scene spends about 1% of its
 * wall time on texture upload, which is far too little to separate those.
 *
 * What this adds over the pages' original `console.log`:
 *
 * - Cache busting, so a repeated run is a real cold fetch instead of an HTTP
 *   cache hit. Without it only the first run of a series measures anything,
 *   and the second arm of an A/B silently inherits the first arm's cache.
 *   Disable with `?cachebust=0` to measure the warm path (decode plus upload,
 *   no network), which is the regime where dispatch strategy shows up most.
 * - Renderer telemetry captured across the load window only, so upload cost
 *   and any jank are attributed to the loading burst rather than to the
 *   whole session.
 * - Persistence to `localStorage`, so a run can be captured with devtools
 *   detached. Attaching them inflates renderer JavaScript by 2-8x on the TV,
 *   which is enough to invert conclusions.
 */
import { renderer } from "@solidtv/solid";
import type { FpsUpdatePayload } from "@solidtv/renderer";

const STORAGE_KEY = "imageRuns";
// Held open after the last image so the final partial telemetry interval lands.
// Must exceed the app's `fpsUpdateInterval` (300ms).
const TELEMETRY_DRAIN_MS = 700;
const MAX_STORED = 24;

// Mirrors the renderer's frame time histogram layout: 1ms buckets up to 32ms,
// then 8ms buckets.
const SPLIT_MS = 32;
const COARSE_MS = 8;
const BUCKET_COUNT = 45;

function bucketUpperBound(index: number): number {
  return index < SPLIT_MS ? index : SPLIT_MS + (index - SPLIT_MS) * COARSE_MS;
}

function percentile(buckets: number[], q: number): number {
  let total = 0;
  for (let i = 0; i < buckets.length; i++) total += buckets[i]!;
  if (total === 0) return 0;
  const target = total * q;
  let seen = 0;
  for (let i = 0; i < buckets.length; i++) {
    seen += buckets[i]!;
    if (seen >= target) return bucketUpperBound(i + 1);
  }
  return bucketUpperBound(buckets.length);
}

function quantile(sorted: number[], q: number): number {
  if (sorted.length === 0) return 0;
  const i = Math.min(sorted.length - 1, Math.floor(sorted.length * q));
  return sorted[i]!;
}

function zeros(n: number): number[] {
  const a = new Array<number>(n);
  for (let i = 0; i < n; i++) a[i] = 0;
  return a;
}

function readOption(name: string): number | null {
  const params = new URLSearchParams(window.location.search);
  const raw = params.get(name);
  if (raw !== null) {
    const parsed = parseFloat(raw);
    if (!isNaN(parsed)) return parsed;
  }
  const stage = (renderer as any)?.stage;
  if (stage && stage.options && stage.options[name] !== undefined) {
    return stage.options[name];
  }
  return null;
}

export interface ImagePerfHandle {
  /** Append the cache-busting token to an image URL. */
  bust(url: string): string;
  /** Call immediately before the images are handed to the scene graph. */
  start(): void;
  /** Call once per image `loaded` event. */
  onLoaded(): void;
  /** True once every image has reported. */
  isDone(): boolean;
  /** Total wall time of the load, in ms. Zero until done. */
  totalMs(): number;
}

export function createImagePerfRun(page: string, totalImages: number): ImagePerfHandle {
  const params = new URLSearchParams(window.location.search);
  const bustEnabled = params.get("cachebust") !== "0";
  // Unique per page load: a token shared across runs would let the second arm
  // of an A/B read the first arm's cached bytes.
  const token = String(Date.now()) + "-" + String(Math.floor(Math.random() * 1e6));

  let startTime = 0;
  let loaded = 0;
  let done = false;
  let persisted = false;
  let total = 0;
  const elapsedPerImage: number[] = [];

  // Renderer telemetry, accumulated across the load window only.
  let listening = false;
  let handler: ((target: unknown, payload: unknown) => void) | null = null;
  let uploadMs = 0;
  let uploadedTextures = 0;
  let uploadFrames = 0;
  let maxUploadQueue = 0;
  let maxUploadMs = 0;
  let updateMs = 0;
  let renderMs = 0;
  let renderedFrames = 0;
  let renderedMs = 0;
  let maxFrameTime = 0;
  const buckets = zeros(BUCKET_COUNT);

  function attach() {
    const root = renderer as any;
    if (listening === true || !root || typeof root.on !== "function") return;
    listening = true;
    handler = (_target: unknown, data: unknown) => {
      if (persisted === true || typeof data !== "object" || data === null) return;
      const p = data as FpsUpdatePayload;
      uploadMs += p.uploadMs || 0;
      uploadedTextures += p.uploadedTextures || 0;
      uploadFrames += p.uploadFrames || 0;
      updateMs += p.updateMs || 0;
      renderMs += p.renderMs || 0;
      renderedFrames += p.renderedFrames || 0;
      renderedMs += p.renderedMs || 0;
      if ((p.maxUploadQueueSize || 0) > maxUploadQueue) maxUploadQueue = p.maxUploadQueueSize;
      if ((p.maxUploadMs || 0) > maxUploadMs) maxUploadMs = p.maxUploadMs;
      if ((p.maxFrameTime || 0) > maxFrameTime) maxFrameTime = p.maxFrameTime;
      if (Array.isArray(p.frameTimeBuckets)) {
        const n = Math.min(p.frameTimeBuckets.length, buckets.length);
        for (let i = 0; i < n; i++) buckets[i]! += p.frameTimeBuckets[i] || 0;
      }
    };
    root.on("fpsUpdate", handler);
  }

  function detach() {
    const root = renderer as any;
    if (listening === false || handler === null) return;
    listening = false;
    if (typeof root.off === "function") root.off("fpsUpdate", handler);
    handler = null;
  }

  function persist() {
    const sorted = elapsedPerImage.slice().sort((a, b) => a - b);
    const record = {
      url: window.location.pathname + window.location.search,
      page,
      totalImages,
      cacheBust: bustEnabled,
      config: {
        numImageWorkers: readOption("numImageWorkers"),
        imageDecodeConcurrency: readOption("imageDecodeConcurrency"),
        textureProcessingTimeLimit: readOption("textureProcessingTimeLimit")
      },
      timing: {
        totalMs: Math.round(total * 100) / 100,
        firstMs: Math.round(quantile(sorted, 0) * 100) / 100,
        p50Ms: Math.round(quantile(sorted, 0.5) * 100) / 100,
        p95Ms: Math.round(quantile(sorted, 0.95) * 100) / 100,
        // Mean spacing between successive completions: the throughput signal.
        // A pool that genuinely parallelised would tighten this.
        meanGapMs:
          sorted.length > 1
            ? Math.round(((sorted[sorted.length - 1]! - sorted[0]!) / (sorted.length - 1)) * 100) / 100
            : 0
      },
      renderer: {
        uploadMs: Math.round(uploadMs * 100) / 100,
        maxUploadMs: Math.round(maxUploadMs * 100) / 100,
        uploadedTextures,
        uploadFrames,
        maxUploadQueueSize: maxUploadQueue,
        meanUploadCostMs: uploadedTextures > 0 ? Math.round((uploadMs / uploadedTextures) * 100) / 100 : 0,
        updateMs: Math.round(updateMs * 100) / 100,
        renderMs: Math.round(renderMs * 100) / 100,
        renderedFrames,
        avgFps: renderedMs > 0 ? Math.round((renderedFrames / renderedMs) * 100000) / 100 : 0,
        maxFrameTimeMs: Math.round(maxFrameTime * 100) / 100,
        p95FrameMs: percentile(buckets, 0.95),
        p99FrameMs: percentile(buckets, 0.99)
      }
    };

    console.log("=== IMAGE PERF RESULT (JSON) ===");
    console.log(JSON.stringify(record, null, 2));

    try {
      const prior = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      prior.push(record);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prior.slice(-MAX_STORED)));
    } catch (e) {
      // Storage full or disabled: the console log above is still the record.
    }
  }

  return {
    bust(url: string): string {
      // Leave bundled assets (the fallback image) alone.
      if (bustEnabled === false || url.indexOf("://") === -1) return url;
      return url + (url.indexOf("?") === -1 ? "?" : "&") + "cb=" + token;
    },
    start(): void {
      attach();
      loaded = 0;
      done = false;
      elapsedPerImage.length = 0;
      startTime = performance.now();
    },
    onLoaded(): void {
      if (done === true) return;
      const elapsed = performance.now() - startTime;
      elapsedPerImage.push(elapsed);
      loaded++;
      if (loaded < totalImages) return;
      done = true;
      total = elapsed;
      setTimeout(() => {
        if (persisted === true) return;
        persisted = true;
        detach();
        persist();
      }, TELEMETRY_DRAIN_MS);
    },
    isDone(): boolean {
      return done;
    },
    totalMs(): number {
      return total;
    }
  };
}
