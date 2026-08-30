import { createEffect, on, createSignal, batch, Show, For, onCleanup } from "solid-js";
import { ElementNode, activeElement, renderer, Config } from "@solidtv/solid";
import { LazyRow, LazyColumn, useFocusStack, resetCounter } from "@solidtv/solid/primitives";
import { Hero, TitleRow, AssetPanel, SHOW_TEXT, DISPLAY_SIZE } from "../components";
import styles from "../styles";
import { setGlobalBackground } from "../state";
import ContentBlock from "../components/ContentBlock";
import { debounce } from "@solid-primitives/scheduled";
import type { FpsUpdatePayload, RendererCapabilities } from "@solidtv/renderer";
// Histogram layout comes from the renderer so the page cannot drift from the
// buckets the payload was actually built with.
import { FRAME_TIME_BUCKET_COUNT, frameTimeBucketLowerBound } from "@solidtv/renderer";

const TOTAL_CYCLES = 2;
const NAV_DELAY_MS = 500; // delay between simulated key presses

/**
 * Returns the number of image workers configured for the renderer.
 */
function getImageWorkersCount(): number {
  try {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const param = urlParams.get("numImageWorkers");
      if (param !== null) {
        const parsed = parseInt(param, 10);
        if (!isNaN(parsed)) return parsed;
      }
    }
    const root = renderer as any;
    if (root?.stage?.options?.numImageWorkers !== undefined) {
      return root.stage.options.numImageWorkers;
    }
    if (root?.settings?.numImageWorkers !== undefined) {
      return root.settings.numImageWorkers;
    }
    if ((Config as any)?.rendererOptions?.numImageWorkers !== undefined) {
      return (Config as any).rendererOptions.numImageWorkers;
    }
  } catch (e) {
    // fallback
  }
  return (typeof window !== "undefined" && (window as any).createImageBitmap) ? 1 : 0;
}

/**
 * Returns the texture processing time limit in milliseconds configured for the renderer.
 */
function getTextureProcessingTimeLimit(): number {
  try {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const param = urlParams.get("textureProcessingTimeLimit");
      if (param !== null) {
        const parsed = parseFloat(param);
        if (!isNaN(parsed)) return parsed;
      }
    }
    const root = renderer as any;
    if (root?.stage?.options?.textureProcessingTimeLimit !== undefined) {
      return root.stage.options.textureProcessingTimeLimit;
    }
    if (root?.settings?.textureProcessingTimeLimit !== undefined) {
      return root.settings.textureProcessingTimeLimit;
    }
    if ((Config as any)?.rendererOptions?.textureProcessingTimeLimit !== undefined) {
      return (Config as any).rendererOptions.textureProcessingTimeLimit;
    }
  } catch (e) {
    // fallback
  }
  // Matches the renderer's own default; the app no longer pins this.
  return 10;
}

/**
 * Returns the number of logical CPU cores on the device, if exposed by the browser.
 */
function getDeviceCores(): string {
  try {
    if (typeof navigator !== "undefined" && typeof navigator.hardwareConcurrency === "number" && navigator.hardwareConcurrency > 0) {
      return `${navigator.hardwareConcurrency} cores`;
    }
  } catch (e) {
    // fallback
  }
  return "cores ?";
}

/**
 * Returns the device logical and physical pixel ratios configured for the renderer.
 */
function getPixelRatios(): { logical: number; physical: number; dpr: number } {
  let logical = typeof window !== "undefined" ? window.innerHeight / 1080 : 1;
  let physical = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;

  try {
    const root = renderer as any;
    if (root?.stage?.options?.deviceLogicalPixelRatio !== undefined) {
      logical = root.stage.options.deviceLogicalPixelRatio;
    } else if ((Config as any)?.rendererOptions?.deviceLogicalPixelRatio !== undefined) {
      logical = (Config as any).rendererOptions.deviceLogicalPixelRatio;
    }

    if (root?.stage?.options?.devicePhysicalPixelRatio !== undefined) {
      physical = root.stage.options.devicePhysicalPixelRatio;
    } else if ((Config as any)?.rendererOptions?.devicePhysicalPixelRatio !== undefined) {
      physical = (Config as any).rendererOptions.devicePhysicalPixelRatio;
    }
  } catch (e) {
    // fallback
  }

  return { logical, physical, dpr };
}

/**
 * Creates a zero-filled array compatible with legacy JS engines without Array.prototype.fill
 */
function createZeroArray(length: number): number[] {
  const arr = new Array<number>(length);
  for (let i = 0; i < length; i++) {
    arr[i] = 0;
  }
  return arr;
}

/**
 * Approximate a percentile (e.g. 0.95 for p95, 0.99 for p99) from an fpsUpdate frame time histogram.
 */
function percentileMs(buckets: number[], fraction: number): number {
  if (!buckets || buckets.length === 0) return 0;
  let total = 0;
  for (let i = 0; i < buckets.length; i++) {
    total += buckets[i] || 0;
  }
  if (total === 0) return 0;

  const target = total * fraction;
  let seen = 0;
  for (let i = 0; i < buckets.length; i++) {
    seen += buckets[i] || 0;
    if (seen >= target) {
      return frameTimeBucketLowerBound(i);
    }
  }
  return frameTimeBucketLowerBound(buckets.length - 1);
}

export interface KeyPressSample {
  /** 1-based sequence across the whole run. */
  press: number;
  /** 1-based cycle number. */
  cycle: number;
  direction: "down" | "up";
  /** 1-based row step within this direction's sweep. */
  index: number;
  /** Synchronous `dispatchEvent` only. */
  handlerMs: number;
  /** Handler plus the microtask tail it scheduled. The real cost. */
  taskMs: number;
}

export interface BenchmarkPerformanceStats {
  // FPS & Frame counts
  avgFps: number;
  minFps: number;
  maxFps: number;
  totalRenderedFrames: number;
  totalRenderedMs: number;
  totalIdleTicks: number;

  // Animation smoothness
  avgAnimatedFps: number;
  totalAnimatedFrames: number;
  totalAnimatedMs: number;
  animP95: number;
  animP99: number;
  animMaxFrameTime: number;

  // Frame time percentiles across all frames
  p95: number;
  p99: number;
  maxFrameTime: number;

  // Phase timings (Interval totals)
  totalUpdateMs: number;
  totalRenderMs: number;
  totalUploadMs: number;
  // Per-frame peaks
  maxUpdateMs: number;
  maxRenderMs: number;
  maxUploadMs: number;

  // Texture uploads
  uploadedTextures: number;
  uploadFrames: number;
  meanUploadCostMs: number;
  maxUploadQueueSize: number;

  // Animation load
  avgActiveAnimations: number;
  maxActiveAnimations: number;

  // Draw counts
  renderOps: number;
  quads: number;

  // App-side input cost, all of it outside drawFrame
  keyPresses: number;
  totalKeyHandlerMs: number;
  maxKeyHandlerMs: number;
  totalKeyTaskMs: number;
  maxKeyTaskMs: number;
  meanKeyTaskMs: number;
  worstKeyPresses: KeyPressSample[];
}

const Benchmark = (props) => {
  let cancelled = false;
  onCleanup(() => {
    cancelled = true;
  });

  const [heroContent, setHeroContent] = createSignal({});
  const [openPanel, setOpenPanel] = createSignal(false);
  const { storeFocus, restoreFocus } = useFocusStack();
  let contentBlock,
    solidLogo,
    firstRun = true;
  let columnRef: ElementNode | undefined;
  let relaunchBtnRef: ElementNode | undefined;

  // Which Vite bundle this device loaded — set as a global at startup in src/index.tsx.
  const bundleType = (typeof window !== "undefined" && (window as any).bundleType)
    ? String((window as any).bundleType)
    : "unknown";

  // ── Benchmark state ──
  const [benchmarkStatus, setBenchmarkStatus] = createSignal("Waiting for data...");
  const [benchmarkRunning, setBenchmarkRunning] = createSignal(false);
  const [benchmarkDone, setBenchmarkDone] = createSignal(false);
  const [dataLoaded, setDataLoaded] = createSignal(false);
  const [renderTime, setRenderTime] = createSignal<number | null>(null);

  // ── Renderer telemetry from the fpsUpdate payload ──
  const [capabilities, setCapabilities] = createSignal<RendererCapabilities | null>(null);
  const [perfStats, setPerfStats] = createSignal<BenchmarkPerformanceStats | null>(null);
  const [drawStats, setDrawStats] = createSignal<{ renderOps: number; quads: number } | null>(null);
  // Per-frame WebGL call counts from the last sampled frame of the run
  const [contextSpy, setContextSpy] = createSignal<Record<string, number> | null>(null);

  // FPS tracking & accumulators
  let fpsValues: number[] = [];
  let animatedFpsValues: number[] = [];
  let cumulativeAllBuckets: number[] = createZeroArray(FRAME_TIME_BUCKET_COUNT);
  let cumulativeAnimBuckets: number[] = createZeroArray(FRAME_TIME_BUCKET_COUNT);
  let totalRenderedFrames = 0;
  // The rate's numerator, which is not `renderedFrames`: the renderer drops one
  // frame per rendering burst from both sides of its sample (the frame that
  // resumes after an idle stretch carries the whole idle gap), so pairing every
  // drawn frame with a denominator that excludes some of them overstates the
  // rate. It read ~1.2 FPS high on this app before the split existed.
  let totalSampledFrames = 0;
  let totalRenderedMs = 0;
  let totalIdleTicks = 0;
  let totalAnimatedFrames = 0;
  let totalAnimatedMs = 0;
  let worstMaxFrameTime = 0;
  let worstAnimatedMaxFrameTime = 0;
  let totalUpdateMs = 0;
  let totalRenderMs = 0;
  let totalUploadMs = 0;
  let worstMaxUpdateMs = 0;
  let worstMaxRenderMs = 0;
  let worstMaxUploadMs = 0;
  let totalUploadedTextures = 0;
  let totalUploadFrames = 0;
  let worstMaxUploadQueueSize = 0;
  // Sum of meanActiveAnimations * renderedFrames per interval. The payload's
  // mean is per rendered frame, so weighting by that count and dividing by
  // totalRenderedFrames recovers the exact run-wide mean; averaging the
  // interval means unweighted would let a 3-frame interval count as much as a
  // 20-frame one.
  let activeAnimationsWeightedSum = 0;
  let worstMaxActiveAnimations = 0;
  let maxRenderOps = 0;
  let maxQuads = 0;
  // App-side cost of a simulated key press. `handler` is the synchronous
  // dispatch; `task` adds the microtask tail it schedules. See simulateKeyDown.
  let totalKeyHandlerMs = 0;
  let worstKeyHandlerMs = 0;
  let totalKeyTaskMs = 0;
  let worstKeyTaskMs = 0;
  let keyDispatchCount = 0;
  let keyPressSamples: KeyPressSample[] = [];
  let lastContextSpy: Record<string, number> | null = null;
  let fpsListenerAttached = false;

  function safeFetchCapabilities() {
    try {
      const root = renderer as any;
      if (root && typeof root.getCapabilities === "function" && !capabilities()) {
        const caps = root.getCapabilities();
        if (caps) setCapabilities(caps);
      }
    } catch (e) {
      console.warn("Unable to fetch capabilities:", e);
    }
  }

  function attachFpsListener() {
    if (fpsListenerAttached) return;
    const root = renderer as any;
    if (!root || typeof root.on !== "function") return;
    fpsListenerAttached = true;

    safeFetchCapabilities();

    root.on('fpsUpdate', (_target: any, fpsData: any) => {
      // Only intervals inside the run count. Page load and the post-run screen
      // are excluded here, by time, rather than by guessing from the fps value.
      if (!benchmarkRunning()) return;

      const fps = typeof fpsData === 'number' ? fpsData : fpsData?.fps;

      // Renderer >=1.8.0: `fps` covers continuous rendering time only, so idle
      // polls can no longer drag it down and a low value is a real measurement
      // — a burst of >=200ms frames — exactly what min FPS exists to catch. The
      // old `fps > 5` load filter would have discarded it (and every other
      // field in the same payload, biasing the whole run optimistic). `0`
      // means nothing paired-rendered this interval: no rate to record, not a
      // slow one, so it stays out of min/max.
      if (typeof fps === 'number' && fps > 0) {
        fpsValues.push(fps);
      }

      // Everything else in the payload is accumulated regardless of the
      // interval's fps: idle ticks, the lone burst-resume frames, and the
      // phase totals for them exist only in intervals that report fps 0.
      if (typeof fpsData === 'object' && fpsData !== null) {
        const payload = fpsData as FpsUpdatePayload;

        if (typeof payload.animatedFps === 'number' && payload.animatedFrames > 0) {
          animatedFpsValues.push(payload.animatedFps);
        }

        // Accumulate frame time bucket distributions
        if (Array.isArray(payload.frameTimeBuckets)) {
          for (let i = 0; i < Math.min(payload.frameTimeBuckets.length, cumulativeAllBuckets.length); i++) {
            cumulativeAllBuckets[i] += payload.frameTimeBuckets[i] || 0;
          }
        }
        if (Array.isArray(payload.animatedFrameTimeBuckets)) {
          for (let i = 0; i < Math.min(payload.animatedFrameTimeBuckets.length, cumulativeAnimBuckets.length); i++) {
            cumulativeAnimBuckets[i] += payload.animatedFrameTimeBuckets[i] || 0;
          }
        }

        // Frame counts & duration totals
        totalRenderedFrames += payload.renderedFrames || 0;
        totalSampledFrames += payload.sampledFrames || 0;
        totalRenderedMs += payload.renderedMs || 0;
        totalIdleTicks += payload.idleTicks || 0;
        totalAnimatedFrames += payload.animatedFrames || 0;
        totalAnimatedMs += payload.animatedMs || 0;

        // Worst frame times
        if (typeof payload.maxFrameTime === 'number') {
          worstMaxFrameTime = Math.max(worstMaxFrameTime, payload.maxFrameTime);
        }
        if (typeof payload.animatedMaxFrameTime === 'number') {
          worstAnimatedMaxFrameTime = Math.max(worstAnimatedMaxFrameTime, payload.animatedMaxFrameTime);
        }

        // Frame phase totals & peaks (Scene Update, Render Pass, Texture Upload)
        totalUpdateMs += payload.updateMs || 0;
        totalRenderMs += payload.renderMs || 0;
        totalUploadMs += payload.uploadMs || 0;

        if (typeof payload.maxUpdateMs === 'number') {
          worstMaxUpdateMs = Math.max(worstMaxUpdateMs, payload.maxUpdateMs);
        }
        if (typeof payload.maxRenderMs === 'number') {
          worstMaxRenderMs = Math.max(worstMaxRenderMs, payload.maxRenderMs);
        }
        if (typeof payload.maxUploadMs === 'number') {
          worstMaxUploadMs = Math.max(worstMaxUploadMs, payload.maxUploadMs);
        }

        // Texture upload telemetry
        totalUploadedTextures += payload.uploadedTextures || 0;
        totalUploadFrames += payload.uploadFrames || 0;
        if (typeof payload.maxUploadQueueSize === 'number') {
          worstMaxUploadQueueSize = Math.max(worstMaxUploadQueueSize, payload.maxUploadQueueSize);
        }

        // Animation load metrics
        if (typeof payload.meanActiveAnimations === 'number') {
          activeAnimationsWeightedSum += payload.meanActiveAnimations * (payload.renderedFrames || 0);
        }
        if (typeof payload.maxActiveAnimations === 'number') {
          worstMaxActiveAnimations = Math.max(worstMaxActiveAnimations, payload.maxActiveAnimations);
        }

        // Draw operations & quads
        if (typeof payload.renderOps === 'number') {
          maxRenderOps = Math.max(maxRenderOps, payload.renderOps);
        }
        if (typeof payload.quads === 'number') {
          maxQuads = Math.max(maxQuads, payload.quads);
        }

        // Context spy (WebGL call counts)
        if (payload.contextSpyData) {
          lastContextSpy = payload.contextSpyData;
        }
      }
    });
  }

  // ── Simulated navigation helpers ──
  function simulateKeyDown(key: string, cycle: number, index: number) {
    try {
      const event = document.createEvent("Event");
      event.initEvent("keydown", true, true);
      Object.defineProperty(event, "key", { value: key, enumerable: true, configurable: true });
      Object.defineProperty(event, "code", { value: key === "ArrowDown" ? "ArrowDown" : "ArrowUp", enumerable: true, configurable: true });

      // A key press costs more than the handler that receives it. The
      // synchronous part is focus handling and LazyColumn/LazyRow
      // reconciliation, but the work that part *schedules* lands afterwards in
      // the same microtask checkpoint: solid's post-mutation pass (delete-flush,
      // layout, setActiveElement) and the renderer's queued
      // `CoreNode.loadTextureTask` uploads. A desktop trace of the five row
      // mounts put the handler at 108ms and that tail at another 43ms, so
      // bracketing `dispatchEvent` alone understated a press by about a third.
      //
      // None of it is inside `drawFrame`, so none of it appears in the update /
      // render / upload split; it lands in a frame's unattributed time. Timing
      // it here is what separates "the renderer is slow" from "the frame that
      // carried a key press was slow".
      //
      // The tail is captured with a microtask rather than `setTimeout(0)`: a
      // timer fires in a later task, by which point the browser may have
      // rendered a frame in between and folded it into the number. A microtask
      // queued here runs at the end of the current checkpoint, after everything
      // the handler scheduled, and before any rendering. It misses only work
      // queued by those microtasks themselves, since the queue is FIFO.
      const dispatchStart = performance.now();
      document.dispatchEvent(event);
      const handlerMs = performance.now() - dispatchStart;

      keyDispatchCount++;
      const press = keyDispatchCount;

      totalKeyHandlerMs += handlerMs;
      if (handlerMs > worstKeyHandlerMs) {
        worstKeyHandlerMs = handlerMs;
      }

      // Per-press detail, so the worst transitions can be identified rather
      // than just counted. A single outlier press has accounted for most of the
      // run's worst frame, and the mean alone cannot locate it. Pushed now so
      // the run order is preserved; `taskMs` is filled in below.
      const sample: KeyPressSample = {
        press: press,
        cycle: cycle,
        direction: key === "ArrowDown" ? "down" : "up",
        index: index,
        handlerMs: handlerMs,
        taskMs: handlerMs,
      };
      keyPressSamples.push(sample);

      const closeSample = () => {
        const taskMs = performance.now() - dispatchStart;
        sample.taskMs = taskMs;
        totalKeyTaskMs += taskMs;
        if (taskMs > worstKeyTaskMs) {
          worstKeyTaskMs = taskMs;
        }
      };

      if (typeof queueMicrotask === "function") {
        queueMicrotask(closeSample);
      } else {
        // Chrome 38 predates queueMicrotask. A resolved promise is the same
        // checkpoint wherever Promises are native.
        Promise.resolve().then(closeSample);
      }
    } catch (e) {
      console.error("Failed to simulate key down:", e);
    }
  }

  function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function runBenchmark() {
    // Reset the FPS counter
    resetCounter();

    const totalRows = props.data?.rows?.length || 0;
    if (totalRows === 0) {
      setBenchmarkStatus("No rows to benchmark");
      return;
    }

    // Reset accumulator state
    fpsValues = [];
    animatedFpsValues = [];
    cumulativeAllBuckets = createZeroArray(FRAME_TIME_BUCKET_COUNT);
    cumulativeAnimBuckets = createZeroArray(FRAME_TIME_BUCKET_COUNT);
    totalRenderedFrames = 0;
    totalSampledFrames = 0;
    totalRenderedMs = 0;
    totalIdleTicks = 0;
    totalAnimatedFrames = 0;
    totalAnimatedMs = 0;
    worstMaxFrameTime = 0;
    worstAnimatedMaxFrameTime = 0;
    totalUpdateMs = 0;
    totalRenderMs = 0;
    totalUploadMs = 0;
    worstMaxUpdateMs = 0;
    worstMaxRenderMs = 0;
    worstMaxUploadMs = 0;
    totalUploadedTextures = 0;
    totalUploadFrames = 0;
    worstMaxUploadQueueSize = 0;
    activeAnimationsWeightedSum = 0;
    worstMaxActiveAnimations = 0;
    maxRenderOps = 0;
    maxQuads = 0;
    totalKeyHandlerMs = 0;
    worstKeyHandlerMs = 0;
    totalKeyTaskMs = 0;
    worstKeyTaskMs = 0;
    keyDispatchCount = 0;
    keyPressSamples = [];
    lastContextSpy = null;
    setPerfStats(null);
    setDrawStats(null);
    setContextSpy(null);
    setBenchmarkRunning(true);
    setBenchmarkDone(false);

    // Ensure FPS listener is attached
    attachFpsListener();

    // Small initial delay to let everything settle
    setBenchmarkStatus("Starting benchmark...");
    await sleep(1500);

    for (let cycle = 0; cycle < TOTAL_CYCLES; cycle++) {
      if (cancelled) return;
      // ── Navigate DOWN through all rows ──
      for (let i = 0; i < totalRows - 1; i++) {
        if (cancelled) return;
        setBenchmarkStatus(
          `Cycle ${cycle + 1}/${TOTAL_CYCLES} - Down ${i + 1}/${totalRows - 1}`
        );
        simulateKeyDown("ArrowDown", cycle + 1, i + 1);
        await sleep(NAV_DELAY_MS);
      }

      if (cancelled) return;
      // ── Navigate UP through all rows ──
      for (let i = 0; i < totalRows - 1; i++) {
        if (cancelled) return;
        setBenchmarkStatus(
          `Cycle ${cycle + 1}/${TOTAL_CYCLES} - Up ${i + 1}/${totalRows - 1}`
        );
        simulateKeyDown("ArrowUp", cycle + 1, i + 1);
        await sleep(NAV_DELAY_MS);
      }
    }

    if (cancelled) return;

    // Compute comprehensive performance stats
    const avgAnimatedFps = totalAnimatedMs > 0 && totalAnimatedFrames > 0
      ? (totalAnimatedFrames / (totalAnimatedMs / 1000))
      : (animatedFpsValues.length > 0 ? animatedFpsValues.reduce((a, b) => a + b, 0) / animatedFpsValues.length : 0);

    const avgFps = totalRenderedMs > 0 && totalSampledFrames > 0
      ? (totalSampledFrames / (totalRenderedMs / 1000))
      : (fpsValues.length > 0 ? fpsValues.reduce((a, b) => a + b, 0) / fpsValues.length : 0);

    const minFps = fpsValues.length > 0 ? Math.min.apply(null, fpsValues) : 0;
    const maxFps = fpsValues.length > 0 ? Math.max.apply(null, fpsValues) : 0;

    const animP95 = percentileMs(cumulativeAnimBuckets, 0.95);
    const animP99 = percentileMs(cumulativeAnimBuckets, 0.99);
    const allP95 = percentileMs(cumulativeAllBuckets, 0.95);
    const allP99 = percentileMs(cumulativeAllBuckets, 0.99);

    const avgActiveAnims = totalRenderedFrames > 0
      ? activeAnimationsWeightedSum / totalRenderedFrames
      : 0;

    const meanUploadCost = totalUploadedTextures > 0
      ? totalUploadMs / totalUploadedTextures
      : 0;

    const meanKeyTask = keyDispatchCount > 0
      ? totalKeyTaskMs / keyDispatchCount
      : 0;

    // slice() first so the run-order array is not reordered under us. Ranked by
    // taskMs, not handlerMs: the tail is a third of a press and does not scale
    // with the handler, so the two orderings differ.
    const worstKeyPresses = keyPressSamples
      .slice()
      .sort((a, b) => b.taskMs - a.taskMs)
      .slice(0, 5);

    const calculatedStats: BenchmarkPerformanceStats = {
      avgFps,
      minFps,
      maxFps,
      totalRenderedFrames,
      totalRenderedMs,
      totalIdleTicks,
      avgAnimatedFps,
      totalAnimatedFrames,
      totalAnimatedMs,
      animP95,
      animP99,
      animMaxFrameTime: worstAnimatedMaxFrameTime,
      p95: allP95,
      p99: allP99,
      maxFrameTime: worstMaxFrameTime,
      totalUpdateMs,
      totalRenderMs,
      totalUploadMs,
      maxUpdateMs: worstMaxUpdateMs,
      maxRenderMs: worstMaxRenderMs,
      maxUploadMs: worstMaxUploadMs,
      uploadedTextures: totalUploadedTextures,
      uploadFrames: totalUploadFrames,
      meanUploadCostMs: meanUploadCost,
      maxUploadQueueSize: worstMaxUploadQueueSize,
      avgActiveAnimations: avgActiveAnims,
      maxActiveAnimations: worstMaxActiveAnimations,
      renderOps: maxRenderOps,
      quads: maxQuads,
      keyPresses: keyDispatchCount,
      totalKeyHandlerMs,
      maxKeyHandlerMs: worstKeyHandlerMs,
      totalKeyTaskMs,
      maxKeyTaskMs: worstKeyTaskMs,
      meanKeyTaskMs: meanKeyTask,
      worstKeyPresses,
    };

    safeFetchCapabilities();

    const currentCaps = capabilities();
    const benchmarkResultsJson = {
      benchmark: {
        bundleType: bundleType,
        initialRenderTimeMs: renderTime() !== null ? parseFloat(renderTime()!.toFixed(2)) : null,
        totalCycles: TOTAL_CYCLES,
        navDelayMs: NAV_DELAY_MS,
      },
      frameRateAndSmoothness: {
        avgAnimatedFps: parseFloat(calculatedStats.avgAnimatedFps.toFixed(2)),
        animP95Ms: calculatedStats.animP95,
        animP99Ms: calculatedStats.animP99,
        animMaxFrameTimeMs: parseFloat(calculatedStats.animMaxFrameTime.toFixed(2)),
        totalAnimatedFrames: calculatedStats.totalAnimatedFrames,
        totalAnimatedMs: parseFloat(calculatedStats.totalAnimatedMs.toFixed(2)),
        overallRenderedFps: parseFloat(calculatedStats.avgFps.toFixed(2)),
        minFps: parseFloat(calculatedStats.minFps.toFixed(2)),
        maxFps: parseFloat(calculatedStats.maxFps.toFixed(2)),
        allP95Ms: calculatedStats.p95,
        allP99Ms: calculatedStats.p99,
        allMaxFrameTimeMs: parseFloat(calculatedStats.maxFrameTime.toFixed(2)),
        totalRenderedFrames: calculatedStats.totalRenderedFrames,
        totalRenderedMs: parseFloat(calculatedStats.totalRenderedMs.toFixed(2)),
        totalIdleTicks: calculatedStats.totalIdleTicks,
      },
      frameWorkSplit: {
        totalUpdateMs: parseFloat(calculatedStats.totalUpdateMs.toFixed(2)),
        maxUpdateMs: parseFloat(calculatedStats.maxUpdateMs.toFixed(2)),
        totalRenderMs: parseFloat(calculatedStats.totalRenderMs.toFixed(2)),
        maxRenderMs: parseFloat(calculatedStats.maxRenderMs.toFixed(2)),
        totalUploadMs: parseFloat(calculatedStats.totalUploadMs.toFixed(2)),
        maxUploadMs: parseFloat(calculatedStats.maxUploadMs.toFixed(2)),
      },
      inputDispatch: {
        keyPresses: calculatedStats.keyPresses,
        // The real per-press cost: dispatch plus the microtask tail.
        totalMs: parseFloat(calculatedStats.totalKeyTaskMs.toFixed(2)),
        maxMs: parseFloat(calculatedStats.maxKeyTaskMs.toFixed(2)),
        meanMs: parseFloat(calculatedStats.meanKeyTaskMs.toFixed(2)),
        // Dispatch alone. This is what earlier runs reported as totalMs/maxMs,
        // so compare against those with this pair, not the one above.
        handlerTotalMs: parseFloat(calculatedStats.totalKeyHandlerMs.toFixed(2)),
        handlerMaxMs: parseFloat(calculatedStats.maxKeyHandlerMs.toFixed(2)),
        worstPresses: calculatedStats.worstKeyPresses.map((sample) => ({
          press: sample.press,
          cycle: sample.cycle,
          direction: sample.direction,
          index: sample.index,
          ms: parseFloat(sample.taskMs.toFixed(2)),
          handlerMs: parseFloat(sample.handlerMs.toFixed(2)),
        })),
      },
      assetsAnimationsGeometry: {
        drawCalls: calculatedStats.renderOps,
        quads: calculatedStats.quads,
        uploadedTextures: calculatedStats.uploadedTextures,
        uploadFrames: calculatedStats.uploadFrames,
        meanUploadCostMs: parseFloat(calculatedStats.meanUploadCostMs.toFixed(2)),
        maxUploadQueueSize: calculatedStats.maxUploadQueueSize,
        avgActiveAnimations: parseFloat(calculatedStats.avgActiveAnimations.toFixed(2)),
        maxActiveAnimations: calculatedStats.maxActiveAnimations,
      },
      // The scene the run measured. Recovering an arm from the query string
      // alone failed once already (a two-variable run read as one), and a
      // photographed overlay or a stale localStorage entry carries no URL at
      // all. Cheap enough to always emit.
      sceneConfig: {
        displaySize: DISPLAY_SIZE,
        showText: SHOW_TEXT,
      },
      glCallsPerInterval: lastContextSpy || null,
      rendererCapabilities: currentCaps ? {
        renderMode: currentCaps.renderMode,
        webGlVersion: currentCaps.webGlVersion ?? null,
        vertexArrayObject: currentCaps.vertexArrayObject ?? null,
        maxTextureSize: currentCaps.maxTextureSize,
        maxTextureUnits: currentCaps.maxTextureUnits,
        pixelRatio: {
          physical: parseFloat(getPixelRatios().physical.toFixed(2)),
          logical: parseFloat(getPixelRatios().logical.toFixed(2)),
          windowDpr: parseFloat(getPixelRatios().dpr.toFixed(2)),
        },
        textureProcessingTimeLimitMs: getTextureProcessingTimeLimit(),
        imageWorkers: getImageWorkersCount(),
        deviceCores: getDeviceCores(),
      } : {
        pixelRatio: {
          physical: parseFloat(getPixelRatios().physical.toFixed(2)),
          logical: parseFloat(getPixelRatios().logical.toFixed(2)),
          windowDpr: parseFloat(getPixelRatios().dpr.toFixed(2)),
        },
        textureProcessingTimeLimitMs: getTextureProcessingTimeLimit(),
        imageWorkers: getImageWorkersCount(),
        deviceCores: getDeviceCores(),
      },
    };

    console.log("=== BENCHMARK PERFORMANCE RESULTS (JSON) ===");
    console.log(JSON.stringify(benchmarkResultsJson, null, 2));

    // Also persist, so a run can be captured with devtools detached and read
    // back afterwards. Attaching devtools inflates renderer JavaScript by
    // 2-8x on this device (it leaves the texImage2D driver copy alone), which
    // is large enough to invert conclusions, so any run meant to be trusted
    // has to be captured without it. The query string rides along because the
    // arm of an A/B is otherwise unrecoverable from the results alone.
    // Capped at the last 12 runs; read with
    // `JSON.parse(localStorage.getItem("benchmarkRuns"))`.
    try {
      const prior = JSON.parse(localStorage.getItem("benchmarkRuns") || "[]");
      prior.push({
        url: window.location.pathname + window.location.search,
        results: benchmarkResultsJson,
      });
      localStorage.setItem("benchmarkRuns", JSON.stringify(prior.slice(-12)));
    } catch (e) {
      // Storage disabled or full: the console log above is still the primary
      // path, so a failure here must not take the run down with it.
    }

    batch(() => {
      setPerfStats(calculatedStats);
      setDrawStats({ renderOps: maxRenderOps, quads: maxQuads });
      setContextSpy(lastContextSpy);
      setBenchmarkDone(true);
      setBenchmarkRunning(false);
    });

    setTimeout(() => {
      if (relaunchBtnRef && typeof relaunchBtnRef.focus === "function") {
        relaunchBtnRef.focus();
      }
    }, 100);

    if (fpsValues.length > 0 || totalRenderedFrames > 0) {
      const animRateStr = avgAnimatedFps > 0 ? `${avgAnimatedFps.toFixed(1)} FPS` : `${avgFps.toFixed(1)} FPS`;
      setBenchmarkStatus(
        `Anim: ${animRateStr} (p95: ${animP95}ms, max: ${worstAnimatedMaxFrameTime.toFixed(0)}ms) | All: ${avgFps.toFixed(1)} FPS`
      );
    } else {
      setBenchmarkStatus("Done - No FPS samples collected");
    }
  }

  // ── Kick off benchmark once data has loaded ──
  createEffect(() => {
    const rows = props.data?.rows;
    if (!rows || rows.length === 0) return;

    // Wait for the first row's items to resolve (they are resources)
    const firstItems = rows[0]?.items ? rows[0].items() : null;
    if (firstItems && firstItems.length > 0) {
      if (!dataLoaded()) {
        const startTime = performance.now();
        setDataLoaded(true);
        if (renderer && typeof renderer.on === "function") {
          renderer.on('idle', () => {
            if (renderTime() === null) {
              setRenderTime(performance.now() - startTime);
            }
          });
        }
      }

      if (!benchmarkDone() && !benchmarkRunning()) {
        // Attach FPS listener early
        attachFpsListener();
        // Start the benchmark after a brief setup time
        const timeoutId = setTimeout(() => {
          if (!cancelled) runBenchmark();
        }, 2000);
        onCleanup(() => clearTimeout(timeoutId));
      }
    }
  });

  const delayedBackgrounds = debounce(setGlobalBackground, 800);
  const delayedHero = debounce((content: {}) => setHeroContent(content || {}), 600);

  createEffect(
    on(
      activeElement,
      (elm) => {
        if (!elm) return;
        const item = elm.item || ({} as any);

        if (firstRun) {
          item.backdrop && setGlobalBackground(item.backdrop);
          item.heroContent && setHeroContent(item.heroContent);
          firstRun = false;
        } else {
          item.backdrop && delayedBackgrounds(item.backdrop);
          item.heroContent && delayedHero(item.heroContent);
        }
      },
      { defer: true }
    )
  );

  function onRowChanged(this: ElementNode, selectedIndex, column, row, lastIndex) {
    if (selectedIndex === lastIndex) return;

    const values = selectedIndex === 0 ? { y: 300, alpha: 1 } : { y: 200, alpha: 0 };
    contentBlock.animate(values, { duration: 300, easing: "ease-in-out" }).start();

    const values2 = selectedIndex === 0 ? { y: 80, alpha: 1 } : { y: 0, alpha: 0 };
    solidLogo.animate(values2, { duration: 300, easing: "ease-in-out" }).start();
  }

  // ── Overlay styles ──
  const overlayBgStyle = {
    width: 700,
    height: 140,
    color: 0x000000cc,
    borderRadius: 12,
  };

  const overlayTitleStyle = {
    fontFamily: "Roboto",
    fontSize: 28,
    color: 0xffffffff,
    lineHeight: 34,
  };

  const overlayStatusStyle = {
    fontFamily: "Roboto",
    fontSize: 22,
    lineHeight: 28,
  };

  // ── Results overlay (centered under the main benchmark banner) ──
  const resultsBgStyle = {
    color: 0x000000f5,
    borderRadius: 12,
  };

  const OVERLAY_WIDTH = 700;
  const ROW_H = 26;

  const resultsHeaderStyle = {
    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 22,
    color: 0x00d8ffff,
  };

  const resultsLabelStyle = {
    fontFamily: "Roboto",
    fontSize: 17,
    lineHeight: 24,
    color: 0x9e9e9eff,
  };

  const resultsValueStyle = {
    fontFamily: "Roboto",
    fontSize: 17,
    lineHeight: 24,
    color: 0xffffffff,
  };

  // One label/value row in the results overlay
  const ResultRow = (rowProps: { y: number; label: string; value: string }) => (
    <view y={rowProps.y}>
      <text x={28} style={resultsLabelStyle}>
        {rowProps.label}
      </text>
      <text x={350} style={resultsValueStyle}>
        {rowProps.value}
      </text>
    </view>
  );

  const SectionHeader = (headerProps: { y: number; title: string }) => (
    <view y={headerProps.y}>
      <text x={28} style={resultsHeaderStyle}>
        {headerProps.title}
      </text>
    </view>
  );

  const SectionDivider = (divProps: { y: number }) => (
    <view y={divProps.y} width={OVERLAY_WIDTH - 56} height={1} x={28} color={0xffffff22} />
  );

  const webGlLabel = (caps: RendererCapabilities) =>
    caps.renderMode === "webgl" ? `WebGL ${caps.webGlVersion ?? "?"}` : "Canvas2D";

  // contextSpyData entries (GL call → count for the sampled frame), busiest first.
  const glEntries = (): [string, number][] => {
    const spy = contextSpy();
    if (!spy) return [];
    const entries: [string, number][] = [];
    for (const key in spy) {
      if (Object.prototype.hasOwnProperty.call(spy, key)) {
        entries.push([key, spy[key] || 0]);
      }
    }
    return entries.sort((a, b) => b[1] - a[1]);
  };

  const relaunchBtnStyle = {
    width: 320,
    height: 44,
    color: 0x333333ff,
    borderRadius: 8,
    $focus: {
      color: 0x00d8ffff,
    },
  };

  const relaunchBtnTextStyle = {
    fontFamily: "Roboto",
    fontSize: 18,
    lineHeight: 24,
    color: 0xffffffff,
    $focus: {
      color: 0x000000ff,
    },
  };

  // ── Reactive vertical layout for the results overlay ──
  const SEC_GL_Y = 486;
  const glStartY = SEC_GL_Y + 26;
  const glRowsCount = () => glEntries().length;
  const glRowsHeight = () => (glRowsCount() > 0 ? glRowsCount() * ROW_H : ROW_H);
  const dividerCapsY = () => glStartY + glRowsHeight() + 6;
  const secCapsY = () => dividerCapsY() + 10;
  const capsStartY = () => secCapsY() + 26;
  const relaunchBtnY = () => capsStartY() + 8 * ROW_H + 16;
  const overlayHeight = () => relaunchBtnY() + 44 + 18;

  return (
    <Show when={dataLoaded()} fallback={<text x={960} y={540} fontSize={40} color={0xffffffff} mount={0.5}>Loading Data...</text>}>
      <view forwardFocus={2}>
        <view ref={solidLogo} width={300} height={150} x={162} y={80} zIndex={105}>
          <text x={80} fontSize={28} color={0xf6f6f699}>
            Built With:
          </text>
          <view y={32} src="./assets/solidWord.png" width={280} height={52} />

          <view x={0} y={110} src="./assets/tmdb.png" width={80} height={41} />
          <text x={90} y={110} contain="width" width={160} fontSize={12} color={0xf6f6f699}>
            This product uses the TMDB API but is not endorsed or certified by TMDB.
          </text>
        </view>

        <ContentBlock ref={contentBlock} y={300} x={162} content={heroContent()} />
        <LazyColumn
          ref={columnRef}
          y={500}
          upCount={3}
          each={props.data?.rows || []}
          id="BenchmarkColumn"
          onSelectedChanged={onRowChanged}
          onEnter={() => setOpenPanel(true)}
          autofocus={props.data?.rows?.[0]?.items ? props.data.rows[0].items() : undefined}
          gap={40}
          throttleInput={250}
          delay={250}
          eagerLoad
          style={styles.Column}
        >
          {(row) =>
            row().type === "Hero" ? (
              <LazyRow
                gap={80}
                upCount={2}
                bufferSize={1}
                scroll="center"
                centerScroll
                each={row().items()}
                y={50}
                height={row().height}
              >
                {(item) => <Hero item={item()} />}
              </LazyRow>
            ) : (
              <TitleRow row={row()} title={row().title} height={row().height} items={row().items()} />
            )
          }
        </LazyColumn>

        {/* ── Benchmark Overlay ── */}
        <view x={610} y={20} zIndex={200} style={overlayBgStyle}>
          <text x={20} y={16} style={overlayTitleStyle}>
            Benchmark (version: ###)
          </text>
          <text
            x={360}
            y={20}
            width={320}
            contain="width"
            textAlign="right"
            fontSize={24}
            color={bundleType.indexOf("LEGACY") !== -1 ? 0xffcc00ff : 0x00ff88ff}
          >
            {bundleType}
          </text>
          <text
            x={20}
            y={54}
            contain="width"
            width={660}
            style={overlayStatusStyle}
            color={benchmarkDone() ? 0x00ff88ff : benchmarkRunning() ? 0xffcc00ff : 0xaaaaaaff}
          >
            {benchmarkStatus()}
          </text>
          <text
            x={20}
            y={92}
            style={overlayStatusStyle}
            color={0x00ff88ff}
          >
            {renderTime() !== null ? `Initial Render: ${renderTime()?.toFixed(2)}ms` : "Rendering..."}
          </text>
        </view>

        {/* ── Results Overlay (centered under the Benchmark information banner) ── */}
        <Show when={benchmarkDone()}>
          <view x={610} y={175} zIndex={8000} width={OVERLAY_WIDTH} height={overlayHeight()} style={resultsBgStyle}>
            <text x={28} y={14} style={overlayTitleStyle}>
              Performance Breakdown
            </text>

            {/* ── Section 1: Frame Rate & Smoothness ── */}
            <SectionHeader y={50} title="FRAME RATE & SMOOTHNESS" />
            <ResultRow
              y={74}
              label="Animated FPS"
              value={perfStats() ? `${perfStats()!.avgAnimatedFps.toFixed(1)} FPS` : "—"}
            />
            <ResultRow
              y={100}
              label="Anim p95 / p99"
              value={perfStats() ? `${perfStats()!.animP95}ms / ${perfStats()!.animP99}ms` : "—"}
            />
            <ResultRow
              y={126}
              label="Worst Anim Frame"
              value={perfStats() ? `${perfStats()!.animMaxFrameTime.toFixed(1)}ms` : "—"}
            />
            <ResultRow
              y={152}
              label="Overall Rendered FPS"
              value={perfStats() ? `${perfStats()!.avgFps.toFixed(1)} FPS (${perfStats()!.totalRenderedFrames}f)` : "—"}
            />
            <ResultRow
              y={178}
              label="All p95 / p99 / Max"
              value={perfStats() ? `${perfStats()!.p95}ms / ${perfStats()!.p99}ms / ${perfStats()!.maxFrameTime.toFixed(1)}ms` : "—"}
            />
            <ResultRow
              y={204}
              label="Frames / Idle Polls"
              value={perfStats() ? `${perfStats()!.totalRenderedFrames} drew / ${perfStats()!.totalIdleTicks} idle` : "—"}
            />

            <SectionDivider y={232} />

            {/* ── Section 2: Phase Work Split ── */}
            <SectionHeader y={242} title="FRAME WORK SPLIT (INTERVAL / PEAK)" />
            <ResultRow
              y={266}
              label="Scene Update (upd)"
              value={perfStats() ? `${perfStats()!.totalUpdateMs.toFixed(1)}ms total | ${perfStats()!.maxUpdateMs.toFixed(1)}ms peak` : "—"}
            />
            <ResultRow
              y={292}
              label="Render Pass (rnd)"
              value={perfStats() ? `${perfStats()!.totalRenderMs.toFixed(1)}ms total | ${perfStats()!.maxRenderMs.toFixed(1)}ms peak` : "—"}
            />
            <ResultRow
              y={318}
              label="Texture Upload (upl)"
              value={perfStats() ? `${perfStats()!.totalUploadMs.toFixed(1)}ms total | ${perfStats()!.maxUploadMs.toFixed(1)}ms peak` : "—"}
            />

            <SectionDivider y={346} />

            {/* ── Section 3: Texture, Animation & Draw Telemetry ── */}
            <SectionHeader y={356} title="ASSETS, ANIMATIONS & GEOMETRY" />
            <ResultRow
              y={380}
              label="Draw Calls / Quads"
              value={drawStats() ? `${drawStats()!.renderOps} draws / ${drawStats()!.quads} quads` : "—"}
            />
            <ResultRow
              y={406}
              label="Texture Uploads"
              value={perfStats() ? `${perfStats()!.uploadedTextures} tex / ${perfStats()!.uploadFrames}f (${perfStats()!.meanUploadCostMs.toFixed(1)}ms avg)` : "—"}
            />
            <ResultRow
              y={432}
              label="Upload Queue Peak"
              value={perfStats() ? `q <= ${perfStats()!.maxUploadQueueSize}` : "—"}
            />
            <ResultRow
              y={458}
              label="Active Animations"
              value={perfStats() ? `${perfStats()!.avgActiveAnimations.toFixed(1)} avg | ${perfStats()!.maxActiveAnimations} peak` : "—"}
            />

            <SectionDivider y={486} />

            {/* ── Section 4: WebGL Call Breakdown (contextSpy) ── */}
            <SectionHeader y={SEC_GL_Y} title="GL CALLS / INTERVAL" />
            <Show
              when={glEntries().length > 0}
              fallback={
                <text x={350} y={SEC_GL_Y} style={resultsValueStyle}>
                  off (?contextSpy=true)
                </text>
              }
            >
              <For each={glEntries()}>
                {([name, count], i) => (
                  <ResultRow y={glStartY + i() * ROW_H} label={name} value={`${count}`} />
                )}
              </For>
            </Show>

            <SectionDivider y={dividerCapsY()} />

            {/* ── Section 5: Hardware & Renderer Capabilities ── */}
            <SectionHeader y={secCapsY()} title="RENDERER CAPABILITIES" />
            <Show
              when={capabilities()}
              fallback={
                <text x={28} y={capsStartY()} style={resultsLabelStyle}>
                  Capabilities unavailable
                </text>
              }
            >
              <ResultRow y={capsStartY()} label="Render Mode" value={capabilities()!.renderMode} />
              <ResultRow y={capsStartY() + ROW_H} label="WebGL Version" value={webGlLabel(capabilities()!)} />
              <ResultRow
                y={capsStartY() + 2 * ROW_H}
                label="Vertex Array Obj (VAO)"
                value={capabilities()!.vertexArrayObject ? "Enabled (on)" : "Disabled (off)"}
              />
              <ResultRow
                y={capsStartY() + 3 * ROW_H}
                label="Max Texture Size"
                value={`${capabilities()!.maxTextureSize}px`}
              />
              <ResultRow
                y={capsStartY() + 4 * ROW_H}
                label="Max Texture Units"
                value={`${capabilities()!.maxTextureUnits} units`}
              />
              <ResultRow
                y={capsStartY() + 5 * ROW_H}
                label="Pixel Ratio (Phys / Log)"
                value={`${getPixelRatios().physical.toFixed(2)}x / ${getPixelRatios().logical.toFixed(2)}x`}
              />
              <ResultRow
                y={capsStartY() + 6 * ROW_H}
                label="Image Workers"
                value={`${getImageWorkersCount()} (${getDeviceCores()})`}
              />
              <ResultRow
                y={capsStartY() + 7 * ROW_H}
                label="Tex Process Limit"
                value={`${getTextureProcessingTimeLimit()}ms`}
              />
            </Show>

            {/* ── Section 6: Action Button ── */}
            <view
              ref={relaunchBtnRef}
              x={(OVERLAY_WIDTH - 320) / 2}
              y={relaunchBtnY()}
              style={relaunchBtnStyle}
              forwardStates
              autofocus
              onEnter={() => {
                document.location.reload();
                return true;
              }}
            >
              <text x={160} y={22} mount={0.5} style={relaunchBtnTextStyle}>
                Relaunch Benchmark
              </text>
            </view>
          </view>
        </Show>

        <AssetPanel
          onFocus={storeFocus}
          close={() => {
            setOpenPanel(false);
            restoreFocus();
            return true;
          }}
          open={openPanel()}
          item={heroContent()}
        />
      </view>
    </Show>
  );
};

export default Benchmark;
