import { x as renderer } from "./render-pt2tmeLm.js";

function bucketUpperBound(index) {
    return index < 32 ? index : 32 + 8 * (index - 32);
}

function percentile(buckets, q) {
    let total = 0;
    for (let i = 0; i < buckets.length; i++) total += buckets[i];
    if (0 === total) return 0;
    const target = total * q;
    let seen = 0;
    for (let i = 0; i < buckets.length; i++) if (seen += buckets[i], seen >= target) return bucketUpperBound(i + 1);
    return bucketUpperBound(buckets.length);
}

function quantile(sorted, q) {
    return 0 === sorted.length ? 0 : sorted[Math.min(sorted.length - 1, Math.floor(sorted.length * q))];
}

function readOption(name) {
    const raw = new URLSearchParams(window.location.search).get(name);
    if (null !== raw) {
        const parsed = parseFloat(raw);
        if (!isNaN(parsed)) return parsed;
    }
    const stage = null == renderer ? void 0 : renderer.stage;
    return stage && stage.options && void 0 !== stage.options[name] ? stage.options[name] : null;
}

function createImagePerfRun(page, totalImages) {
    const bustEnabled = "0" !== new URLSearchParams(window.location.search).get("cachebust"), token = String(Date.now()) + "-" + String(Math.floor(1e6 * Math.random()));
    let startTime = 0, loaded = 0, done = !1, persisted = !1, total = 0;
    const elapsedPerImage = [];
    let listening = !1, handler = null, uploadMs = 0, uploadedTextures = 0, uploadFrames = 0, maxUploadQueue = 0, maxUploadMs = 0, updateMs = 0, renderMs = 0, renderedFrames = 0, renderedMs = 0, maxFrameTime = 0;
    const buckets = function(n) {
        const a = new Array(n);
        for (let i = 0; i < n; i++) a[i] = 0;
        return a;
    }(45);
    return {
        bust: url => !1 === bustEnabled || -1 === url.indexOf("://") ? url : url + (-1 === url.indexOf("?") ? "?" : "&") + "cb=" + token,
        start() {
            !function() {
                const root = renderer;
                !0 !== listening && root && "function" == typeof root.on && (listening = !0, handler = (_target, data) => {
                    if (!0 === persisted || "object" != typeof data || null === data) return;
                    const p = data;
                    if (uploadMs += p.uploadMs || 0, uploadedTextures += p.uploadedTextures || 0, uploadFrames += p.uploadFrames || 0, 
                    updateMs += p.updateMs || 0, renderMs += p.renderMs || 0, renderedFrames += p.renderedFrames || 0, 
                    renderedMs += p.renderedMs || 0, (p.maxUploadQueueSize || 0) > maxUploadQueue && (maxUploadQueue = p.maxUploadQueueSize), 
                    (p.maxUploadMs || 0) > maxUploadMs && (maxUploadMs = p.maxUploadMs), (p.maxFrameTime || 0) > maxFrameTime && (maxFrameTime = p.maxFrameTime), 
                    Array.isArray(p.frameTimeBuckets)) {
                        const n = Math.min(p.frameTimeBuckets.length, buckets.length);
                        for (let i = 0; i < n; i++) buckets[i] += p.frameTimeBuckets[i] || 0;
                    }
                }, root.on("fpsUpdate", handler));
            }(), loaded = 0, done = !1, elapsedPerImage.length = 0, startTime = performance.now();
        },
        onLoaded() {
            if (!0 === done) return;
            const elapsed = performance.now() - startTime;
            elapsedPerImage.push(elapsed), loaded++, loaded < totalImages || (done = !0, total = elapsed, 
            setTimeout(() => {
                !0 !== persisted && (persisted = !0, function() {
                    const root = renderer;
                    !1 !== listening && null !== handler && (listening = !1, "function" == typeof root.off && root.off("fpsUpdate", handler), 
                    handler = null);
                }(), function() {
                    const sorted = elapsedPerImage.slice().sort((a, b) => a - b), record = {
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
                            totalMs: Math.round(100 * total) / 100,
                            firstMs: Math.round(100 * quantile(sorted, 0)) / 100,
                            p50Ms: Math.round(100 * quantile(sorted, .5)) / 100,
                            p95Ms: Math.round(100 * quantile(sorted, .95)) / 100,
                            meanGapMs: sorted.length > 1 ? Math.round((sorted[sorted.length - 1] - sorted[0]) / (sorted.length - 1) * 100) / 100 : 0
                        },
                        renderer: {
                            uploadMs: Math.round(100 * uploadMs) / 100,
                            maxUploadMs: Math.round(100 * maxUploadMs) / 100,
                            uploadedTextures: uploadedTextures,
                            uploadFrames: uploadFrames,
                            maxUploadQueueSize: maxUploadQueue,
                            meanUploadCostMs: uploadedTextures > 0 ? Math.round(uploadMs / uploadedTextures * 100) / 100 : 0,
                            updateMs: Math.round(100 * updateMs) / 100,
                            renderMs: Math.round(100 * renderMs) / 100,
                            renderedFrames: renderedFrames,
                            avgFps: renderedMs > 0 ? Math.round(renderedFrames / renderedMs * 1e5) / 100 : 0,
                            maxFrameTimeMs: Math.round(100 * maxFrameTime) / 100,
                            p95FrameMs: percentile(buckets, .95),
                            p99FrameMs: percentile(buckets, .99)
                        }
                    };
                    console.log("=== IMAGE PERF RESULT (JSON) ==="), console.log(JSON.stringify(record, null, 2));
                    try {
                        const prior = JSON.parse(localStorage.getItem("imageRuns") || "[]");
                        prior.push(record), localStorage.setItem("imageRuns", JSON.stringify(prior.slice(-24)));
                    } catch (e) {}
                }());
            }, 700));
        },
        isDone: () => done,
        totalMs: () => total
    };
}

export { createImagePerfRun as t };