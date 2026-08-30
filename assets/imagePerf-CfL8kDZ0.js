import { x as renderer } from "./render-D3oWDwIw.js";

var STORAGE_KEY = "imageRuns";

var TELEMETRY_DRAIN_MS = 700;

var SPLIT_MS = 32;

var COARSE_MS = 8;

var BUCKET_COUNT = 45;

function bucketUpperBound(index) {
    return index < SPLIT_MS ? index : SPLIT_MS + (index - SPLIT_MS) * COARSE_MS;
}

function percentile(buckets, q) {
    let total = 0;
    for (let i = 0; i < buckets.length; i++) total += buckets[i];
    if (total === 0) return 0;
    const target = total * q;
    let seen = 0;
    for (let i = 0; i < buckets.length; i++) {
        seen += buckets[i];
        if (seen >= target) return bucketUpperBound(i + 1);
    }
    return bucketUpperBound(buckets.length);
}

function quantile(sorted, q) {
    if (sorted.length === 0) return 0;
    return sorted[Math.min(sorted.length - 1, Math.floor(sorted.length * q))];
}

function zeros(n) {
    const a = new Array(n);
    for (let i = 0; i < n; i++) a[i] = 0;
    return a;
}

function readOption(name) {
    const raw = new URLSearchParams(window.location.search).get(name);
    if (raw !== null) {
        const parsed = parseFloat(raw);
        if (!isNaN(parsed)) return parsed;
    }
    const stage = renderer == null ? void 0 : renderer.stage;
    if (stage && stage.options && stage.options[name] !== void 0) return stage.options[name];
    return null;
}

function createImagePerfRun(page, totalImages) {
    const bustEnabled = new URLSearchParams(window.location.search).get("cachebust") !== "0";
    const token = String(Date.now()) + "-" + String(Math.floor(Math.random() * 1e6));
    let startTime = 0;
    let loaded = 0;
    let done = false;
    let persisted = false;
    let total = 0;
    const elapsedPerImage = [];
    let listening = false;
    let handler = null;
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
        const root = renderer;
        if (listening === true || !root || typeof root.on !== "function") return;
        listening = true;
        handler = (_target, data) => {
            if (persisted === true || typeof data !== "object" || data === null) return;
            const p = data;
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
                for (let i = 0; i < n; i++) buckets[i] += p.frameTimeBuckets[i] || 0;
            }
        };
        root.on("fpsUpdate", handler);
    }
    function detach() {
        const root = renderer;
        if (listening === false || handler === null) return;
        listening = false;
        if (typeof root.off === "function") root.off("fpsUpdate", handler);
        handler = null;
    }
    function persist() {
        const sorted = elapsedPerImage.slice().sort((a, b) => a - b);
        const record = {
            url: window.location.pathname + window.location.search,
            page: page,
            totalImages: totalImages,
            cacheBust: bustEnabled,
            config: {
                numImageWorkers: readOption("numImageWorkers"),
                imageDecodeConcurrency: readOption("imageDecodeConcurrency"),
                textureProcessingTimeLimit: readOption("textureProcessingTimeLimit")
            },
            timing: {
                totalMs: Math.round(total * 100) / 100,
                firstMs: Math.round(quantile(sorted, 0) * 100) / 100,
                p50Ms: Math.round(quantile(sorted, .5) * 100) / 100,
                p95Ms: Math.round(quantile(sorted, .95) * 100) / 100,
                meanGapMs: sorted.length > 1 ? Math.round((sorted[sorted.length - 1] - sorted[0]) / (sorted.length - 1) * 100) / 100 : 0
            },
            renderer: {
                uploadMs: Math.round(uploadMs * 100) / 100,
                maxUploadMs: Math.round(maxUploadMs * 100) / 100,
                uploadedTextures: uploadedTextures,
                uploadFrames: uploadFrames,
                maxUploadQueueSize: maxUploadQueue,
                meanUploadCostMs: uploadedTextures > 0 ? Math.round(uploadMs / uploadedTextures * 100) / 100 : 0,
                updateMs: Math.round(updateMs * 100) / 100,
                renderMs: Math.round(renderMs * 100) / 100,
                renderedFrames: renderedFrames,
                avgFps: renderedMs > 0 ? Math.round(renderedFrames / renderedMs * 1e5) / 100 : 0,
                maxFrameTimeMs: Math.round(maxFrameTime * 100) / 100,
                p95FrameMs: percentile(buckets, .95),
                p99FrameMs: percentile(buckets, .99)
            }
        };
        console.log("=== IMAGE PERF RESULT (JSON) ===");
        console.log(JSON.stringify(record, null, 2));
        try {
            const prior = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
            prior.push(record);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(prior.slice(-24)));
        } catch (e) {}
    }
    return {
        bust(url) {
            if (bustEnabled === false || url.indexOf("://") === -1) return url;
            return url + (url.indexOf("?") === -1 ? "?" : "&") + "cb=" + token;
        },
        start() {
            attach();
            loaded = 0;
            done = false;
            elapsedPerImage.length = 0;
            startTime = performance.now();
        },
        onLoaded() {
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
        isDone() {
            return done;
        },
        totalMs() {
            return total;
        }
    };
}

export { createImagePerfRun as t };