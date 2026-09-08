!function() {
    function _typeof(o) {
        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
            return typeof o;
        } : function(o) {
            return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
        }, _typeof(o);
    }
    System.register([ "./render-legacy-1jX59Y6X.js" ], function(_export, _context) {
        var renderer, STORAGE_KEY, TELEMETRY_DRAIN_MS, SPLIT_MS, COARSE_MS, BUCKET_COUNT;
        function bucketUpperBound(index) {
            return index < SPLIT_MS ? index : SPLIT_MS + (index - SPLIT_MS) * COARSE_MS;
        }
        function percentile(buckets, q) {
            for (var total = 0, i = 0; i < buckets.length; i++) total += buckets[i];
            if (0 === total) return 0;
            for (var target = total * q, seen = 0, _i = 0; _i < buckets.length; _i++) if ((seen += buckets[_i]) >= target) return bucketUpperBound(_i + 1);
            return bucketUpperBound(buckets.length);
        }
        function quantile(sorted, q) {
            return 0 === sorted.length ? 0 : sorted[Math.min(sorted.length - 1, Math.floor(sorted.length * q))];
        }
        function readOption(name) {
            var raw = new URLSearchParams(window.location.search).get(name);
            if (null !== raw) {
                var parsed = parseFloat(raw);
                if (!isNaN(parsed)) return parsed;
            }
            var stage = null == renderer ? void 0 : renderer.stage;
            return stage && stage.options && void 0 !== stage.options[name] ? stage.options[name] : null;
        }
        return _export("t", function(page, totalImages) {
            var bustEnabled = "0" !== new URLSearchParams(window.location.search).get("cachebust"), token = String(Date.now()) + "-" + String(Math.floor(1e6 * Math.random())), startTime = 0, loaded = 0, done = !1, persisted = !1, total = 0, elapsedPerImage = [], listening = !1, handler = null, uploadMs = 0, uploadedTextures = 0, uploadFrames = 0, maxUploadQueue = 0, maxUploadMs = 0, updateMs = 0, renderMs = 0, renderedFrames = 0, renderedMs = 0, maxFrameTime = 0, buckets = function(n) {
                for (var a = new Array(n), i = 0; i < n; i++) a[i] = 0;
                return a;
            }(BUCKET_COUNT);
            return {
                bust: function(url) {
                    return !1 === bustEnabled || -1 === url.indexOf("://") ? url : url + (-1 === url.indexOf("?") ? "?" : "&") + "cb=" + token;
                },
                start: function() {
                    var root;
                    root = renderer, !0 !== listening && root && "function" == typeof root.on && (listening = !0, 
                    handler = function(_target, data) {
                        if (!0 !== persisted && "object" === _typeof(data) && null !== data) {
                            var p = data;
                            if (uploadMs += p.uploadMs || 0, uploadedTextures += p.uploadedTextures || 0, uploadFrames += p.uploadFrames || 0, 
                            updateMs += p.updateMs || 0, renderMs += p.renderMs || 0, renderedFrames += p.renderedFrames || 0, 
                            renderedMs += p.renderedMs || 0, (p.maxUploadQueueSize || 0) > maxUploadQueue && (maxUploadQueue = p.maxUploadQueueSize), 
                            (p.maxUploadMs || 0) > maxUploadMs && (maxUploadMs = p.maxUploadMs), (p.maxFrameTime || 0) > maxFrameTime && (maxFrameTime = p.maxFrameTime), 
                            Array.isArray(p.frameTimeBuckets)) for (var n = Math.min(p.frameTimeBuckets.length, buckets.length), i = 0; i < n; i++) buckets[i] += p.frameTimeBuckets[i] || 0;
                        }
                    }, root.on("fpsUpdate", handler)), loaded = 0, done = !1, elapsedPerImage.length = 0, 
                    startTime = performance.now();
                },
                onLoaded: function() {
                    if (!0 !== done) {
                        var elapsed = performance.now() - startTime;
                        elapsedPerImage.push(elapsed), ++loaded < totalImages || (done = !0, total = elapsed, 
                        setTimeout(function() {
                            var root;
                            !0 !== persisted && (persisted = !0, root = renderer, !1 !== listening && null !== handler && (listening = !1, 
                            "function" == typeof root.off && root.off("fpsUpdate", handler), handler = null), 
                            function() {
                                var sorted = elapsedPerImage.slice().sort(function(a, b) {
                                    return a - b;
                                }), record = {
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
                                    var prior = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
                                    prior.push(record), localStorage.setItem(STORAGE_KEY, JSON.stringify(prior.slice(-24)));
                                } catch (e) {}
                            }());
                        }, TELEMETRY_DRAIN_MS));
                    }
                },
                isDone: function() {
                    return done;
                },
                totalMs: function() {
                    return total;
                }
            };
        }), {
            setters: [ function(_renderLegacy002Js) {
                renderer = _renderLegacy002Js.x;
            } ],
            execute: function() {
                STORAGE_KEY = "imageRuns", TELEMETRY_DRAIN_MS = 700, SPLIT_MS = 32, COARSE_MS = 8, 
                BUCKET_COUNT = 45;
            }
        };
    });
}();