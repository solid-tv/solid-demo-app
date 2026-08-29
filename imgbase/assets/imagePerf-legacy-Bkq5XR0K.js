(function() {
    function _typeof(o) {
        "@babel/helpers - typeof";
        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
            return typeof o;
        } : function(o) {
            return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
        }, _typeof(o);
    }
    System.register([ "./render-legacy-DmBmFa1k.js" ], function(_export, _context) {
        "use strict";
        var renderer, STORAGE_KEY, TELEMETRY_DRAIN_MS, SPLIT_MS, COARSE_MS, BUCKET_COUNT;
        function bucketUpperBound(index) {
            return index < SPLIT_MS ? index : SPLIT_MS + (index - SPLIT_MS) * COARSE_MS;
        }
        function percentile(buckets, q) {
            var total = 0;
            for (var i = 0; i < buckets.length; i++) total += buckets[i];
            if (total === 0) return 0;
            var target = total * q;
            var seen = 0;
            for (var _i = 0; _i < buckets.length; _i++) {
                seen += buckets[_i];
                if (seen >= target) return bucketUpperBound(_i + 1);
            }
            return bucketUpperBound(buckets.length);
        }
        function quantile(sorted, q) {
            if (sorted.length === 0) return 0;
            return sorted[Math.min(sorted.length - 1, Math.floor(sorted.length * q))];
        }
        function zeros(n) {
            var a = new Array(n);
            for (var i = 0; i < n; i++) a[i] = 0;
            return a;
        }
        function readOption(name) {
            var raw = new URLSearchParams(window.location.search).get(name);
            if (raw !== null) {
                var parsed = parseFloat(raw);
                if (!isNaN(parsed)) return parsed;
            }
            var stage = renderer == null ? void 0 : renderer.stage;
            if (stage && stage.options && stage.options[name] !== void 0) return stage.options[name];
            return null;
        }
        function createImagePerfRun(page, totalImages) {
            var bustEnabled = new URLSearchParams(window.location.search).get("cachebust") !== "0";
            var token = String(Date.now()) + "-" + String(Math.floor(Math.random() * 1e6));
            var startTime = 0;
            var loaded = 0;
            var done = false;
            var persisted = false;
            var total = 0;
            var elapsedPerImage = [];
            var listening = false;
            var handler = null;
            var uploadMs = 0;
            var uploadedTextures = 0;
            var uploadFrames = 0;
            var maxUploadQueue = 0;
            var maxUploadMs = 0;
            var updateMs = 0;
            var renderMs = 0;
            var renderedFrames = 0;
            var renderedMs = 0;
            var maxFrameTime = 0;
            var buckets = zeros(BUCKET_COUNT);
            function attach() {
                var root = renderer;
                if (listening === true || !root || typeof root.on !== "function") return;
                listening = true;
                handler = function handler(_target, data) {
                    if (persisted === true || _typeof(data) !== "object" || data === null) return;
                    var p = data;
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
                        var n = Math.min(p.frameTimeBuckets.length, buckets.length);
                        for (var i = 0; i < n; i++) buckets[i] += p.frameTimeBuckets[i] || 0;
                    }
                };
                root.on("fpsUpdate", handler);
            }
            function detach() {
                var root = renderer;
                if (listening === false || handler === null) return;
                listening = false;
                if (typeof root.off === "function") root.off("fpsUpdate", handler);
                handler = null;
            }
            function persist() {
                var sorted = elapsedPerImage.slice().sort(function(a, b) {
                    return a - b;
                });
                var record = {
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
                    var prior = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
                    prior.push(record);
                    localStorage.setItem(STORAGE_KEY, JSON.stringify(prior.slice(-24)));
                } catch (e) {}
            }
            return {
                bust: function bust(url) {
                    if (bustEnabled === false || url.indexOf("://") === -1) return url;
                    return url + (url.indexOf("?") === -1 ? "?" : "&") + "cb=" + token;
                },
                start: function start() {
                    attach();
                    loaded = 0;
                    done = false;
                    elapsedPerImage.length = 0;
                    startTime = performance.now();
                },
                onLoaded: function onLoaded() {
                    if (done === true) return;
                    var elapsed = performance.now() - startTime;
                    elapsedPerImage.push(elapsed);
                    loaded++;
                    if (loaded < totalImages) return;
                    done = true;
                    total = elapsed;
                    setTimeout(function() {
                        if (persisted === true) return;
                        persisted = true;
                        detach();
                        persist();
                    }, TELEMETRY_DRAIN_MS);
                },
                isDone: function isDone() {
                    return done;
                },
                totalMs: function totalMs() {
                    return total;
                }
            };
        }
        _export("t", createImagePerfRun);
        return {
            setters: [ function(_renderLegacy001Js) {
                renderer = _renderLegacy001Js.x;
            } ],
            execute: function execute() {
                STORAGE_KEY = "imageRuns";
                TELEMETRY_DRAIN_MS = 700;
                SPLIT_MS = 32;
                COARSE_MS = 8;
                BUCKET_COUNT = 45;
            }
        };
    });
})();