(function() {
    function _regenerator() {
        var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag";
        function i(r, n, o, i) {
            var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype);
            return _regeneratorDefine2(u, "_invoke", function(r, n, o) {
                var i, c, u, f = 0, p = o || [], y = !1, G = {
                    p: 0,
                    n: 0,
                    v: e,
                    a: d,
                    f: d.bind(e, 4),
                    d: function d(t, r) {
                        return i = t, c = 0, u = e, G.n = r, a;
                    }
                };
                function d(r, n) {
                    for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) {
                        var o, i = p[t], d = G.p, l = i[2];
                        r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, 
                        G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, 
                        G.n = l, c = 0));
                    }
                    if (o || r > 1) return a;
                    throw y = !0, n;
                }
                return function(o, p, l) {
                    if (f > 1) throw TypeError("Generator is already running");
                    for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y; ) {
                        i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);
                        try {
                            if (f = 2, i) {
                                if (c || (o = "next"), t = i[o]) {
                                    if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object");
                                    if (!t.done) return t;
                                    u = t.value, c < 2 && (c = 0);
                                } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), 
                                c = 1);
                                i = e;
                            } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;
                        } catch (t) {
                            i = e, c = 1, u = t;
                        } finally {
                            f = 1;
                        }
                    }
                    return {
                        value: t,
                        done: y
                    };
                };
            }(r, o, i), !0), u;
        }
        var a = {};
        function Generator() {}
        function GeneratorFunction() {}
        function GeneratorFunctionPrototype() {}
        t = Object.getPrototypeOf;
        var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function() {
            return this;
        }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
        function f(e) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, 
            _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), 
            e;
        }
        return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), 
        _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), 
        GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), 
        _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function() {
            return this;
        }), _regeneratorDefine2(u, "toString", function() {
            return "[object Generator]";
        }), (_regenerator = function _regenerator() {
            return {
                w: i,
                m: f
            };
        })();
    }
    function _regeneratorDefine2(e, r, n, t) {
        var i = Object.defineProperty;
        try {
            i({}, "", {});
        } catch (e) {
            i = 0;
        }
        _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) {
            function o(r, n) {
                _regeneratorDefine2(e, r, function(e) {
                    return this._invoke(r, n, e);
                });
            }
            r ? i ? i(e, r, {
                value: n,
                enumerable: !t,
                configurable: !t,
                writable: !t
            }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2));
        }, _regeneratorDefine2(e, r, n, t);
    }
    function asyncGeneratorStep(n, t, e, r, o, a, c) {
        try {
            var i = n[a](c), u = i.value;
        } catch (n) {
            return void e(n);
        }
        i.done ? t(u) : Promise.resolve(u).then(r, o);
    }
    function _asyncToGenerator(n) {
        return function() {
            var t = this, e = arguments;
            return new Promise(function(r, o) {
                var a = n.apply(t, e);
                function _next(n) {
                    asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
                }
                function _throw(n) {
                    asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
                }
                _next(void 0);
            });
        };
    }
    function _typeof(o) {
        "@babel/helpers - typeof";
        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
            return typeof o;
        } : function(o) {
            return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
        }, _typeof(o);
    }
    function _slicedToArray(r, e) {
        return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
    }
    function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(r, a) {
        if (r) {
            if ("string" == typeof r) return _arrayLikeToArray(r, a);
            var t = {}.toString.call(r).slice(8, -1);
            return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
        }
    }
    function _arrayLikeToArray(r, a) {
        (null == a || a > r.length) && (a = r.length);
        for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
        return n;
    }
    function _iterableToArrayLimit(r, l) {
        var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
        if (null != t) {
            var e, n, i, u, a = [], f = !0, o = !1;
            try {
                if (i = (t = t.call(r)).next, 0 === l) {
                    if (Object(t) !== t) return;
                    f = !1;
                } else for (;!(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) ;
            } catch (r) {
                o = !0, n = r;
            } finally {
                try {
                    if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
                } finally {
                    if (o) throw n;
                }
            }
            return a;
        }
    }
    function _arrayWithHoles(r) {
        if (Array.isArray(r)) return r;
    }
    System.register([ "./render-legacy-C75jKPoW.js", "./Lazy-legacy-DkANv7ac.js", "./FPSCounter-legacy-D9IRnl8z.js", "./ContentBlock-legacy-BLx9sAkJ.js", "./createFocusStack-legacy-wB_0AOqr.js", "./components-legacy-5cOYbkqA.js", "./styles-legacy-BOzjtbic.js", "./state-legacy-DghrRWJ1.js", "./dist-legacy-g1QDJ07U.js" ], function(_export, _context) {
        "use strict";
        var For, Config, batch, Show, activeElement, onCleanup, createEffect, on, createElement, effect, memo, use, createComponent, insert, setProp, createSignal, createTextNode, insertNode, renderer, LazyRow, LazyColumn, resetCounter, ContentBlock, useFocusStack, Hero, DISPLAY_SIZE, SHOW_TEXT, AssetPanel, TitleRow, styles_default, setGlobalBackground, debounce, TOTAL_CYCLES, NAV_DELAY_MS, FRAME_TIME_SPLIT_MS, FRAME_TIME_FINE_MS, FRAME_TIME_COARSE_MS, FRAME_TIME_BUCKET_COUNT, Benchmark;
        function getImageWorkersCount() {
            try {
                var _root$stage, _root$settings, _Config$rendererOptio;
                if (typeof window !== "undefined") {
                    var param = new URLSearchParams(window.location.search).get("numImageWorkers");
                    if (param !== null) {
                        var parsed = parseInt(param, 10);
                        if (!isNaN(parsed)) return parsed;
                    }
                }
                var root = renderer;
                if ((root == null || (_root$stage = root.stage) == null || (_root$stage = _root$stage.options) == null ? void 0 : _root$stage.numImageWorkers) !== void 0) return root.stage.options.numImageWorkers;
                if ((root == null || (_root$settings = root.settings) == null ? void 0 : _root$settings.numImageWorkers) !== void 0) return root.settings.numImageWorkers;
                if ((Config == null || (_Config$rendererOptio = Config.rendererOptions) == null ? void 0 : _Config$rendererOptio.numImageWorkers) !== void 0) return Config.rendererOptions.numImageWorkers;
            } catch (e) {}
            return typeof window !== "undefined" && window.createImageBitmap ? 1 : 0;
        }
        function getTextureProcessingTimeLimit() {
            try {
                var _root$stage2, _root$settings2, _Config$rendererOptio2;
                if (typeof window !== "undefined") {
                    var param = new URLSearchParams(window.location.search).get("textureProcessingTimeLimit");
                    if (param !== null) {
                        var parsed = parseFloat(param);
                        if (!isNaN(parsed)) return parsed;
                    }
                }
                var root = renderer;
                if ((root == null || (_root$stage2 = root.stage) == null || (_root$stage2 = _root$stage2.options) == null ? void 0 : _root$stage2.textureProcessingTimeLimit) !== void 0) return root.stage.options.textureProcessingTimeLimit;
                if ((root == null || (_root$settings2 = root.settings) == null ? void 0 : _root$settings2.textureProcessingTimeLimit) !== void 0) return root.settings.textureProcessingTimeLimit;
                if ((Config == null || (_Config$rendererOptio2 = Config.rendererOptions) == null ? void 0 : _Config$rendererOptio2.textureProcessingTimeLimit) !== void 0) return Config.rendererOptions.textureProcessingTimeLimit;
            } catch (e) {}
            return 4;
        }
        function getDeviceCores() {
            try {
                if (typeof navigator !== "undefined" && typeof navigator.hardwareConcurrency === "number" && navigator.hardwareConcurrency > 0) return "".concat(navigator.hardwareConcurrency, " cores");
            } catch (e) {}
            return "cores ?";
        }
        function getPixelRatios() {
            var logical = typeof window !== "undefined" ? window.innerHeight / 1080 : 1;
            var physical = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
            var dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
            try {
                var _root$stage3, _Config$rendererOptio3, _root$stage4, _Config$rendererOptio4;
                var root = renderer;
                if ((root == null || (_root$stage3 = root.stage) == null || (_root$stage3 = _root$stage3.options) == null ? void 0 : _root$stage3.deviceLogicalPixelRatio) !== void 0) logical = root.stage.options.deviceLogicalPixelRatio; else if ((Config == null || (_Config$rendererOptio3 = Config.rendererOptions) == null ? void 0 : _Config$rendererOptio3.deviceLogicalPixelRatio) !== void 0) logical = Config.rendererOptions.deviceLogicalPixelRatio;
                if ((root == null || (_root$stage4 = root.stage) == null || (_root$stage4 = _root$stage4.options) == null ? void 0 : _root$stage4.devicePhysicalPixelRatio) !== void 0) physical = root.stage.options.devicePhysicalPixelRatio; else if ((Config == null || (_Config$rendererOptio4 = Config.rendererOptions) == null ? void 0 : _Config$rendererOptio4.devicePhysicalPixelRatio) !== void 0) physical = Config.rendererOptions.devicePhysicalPixelRatio;
            } catch (e) {}
            return {
                logical: logical,
                physical: physical,
                dpr: dpr
            };
        }
        function createZeroArray(length) {
            var arr = new Array(length);
            for (var i = 0; i < length; i++) arr[i] = 0;
            return arr;
        }
        function frameTimeBucketLowerBound(index) {
            return index < FRAME_TIME_SPLIT_MS ? index * FRAME_TIME_FINE_MS : FRAME_TIME_SPLIT_MS + (index - FRAME_TIME_SPLIT_MS) * FRAME_TIME_COARSE_MS;
        }
        function percentileMs(buckets, fraction) {
            if (!buckets || buckets.length === 0) return 0;
            var total = 0;
            for (var i = 0; i < buckets.length; i++) total += buckets[i] || 0;
            if (total === 0) return 0;
            var target = total * fraction;
            var seen = 0;
            for (var _i = 0; _i < buckets.length; _i++) {
                seen += buckets[_i] || 0;
                if (seen >= target) return frameTimeBucketLowerBound(_i);
            }
            return frameTimeBucketLowerBound(buckets.length - 1);
        }
        return {
            setters: [ function(_renderLegacy001Js) {
                For = _renderLegacy001Js.A;
                Config = _renderLegacy001Js.D;
                batch = _renderLegacy001Js.I;
                Show = _renderLegacy001Js.N;
                activeElement = _renderLegacy001Js.O;
                onCleanup = _renderLegacy001Js.Q;
                createEffect = _renderLegacy001Js.V;
                on = _renderLegacy001Js.Z;
                createElement = _renderLegacy001Js.a;
                effect = _renderLegacy001Js.c;
                memo = _renderLegacy001Js.d;
                use = _renderLegacy001Js.g;
                createComponent = _renderLegacy001Js.i;
                insert = _renderLegacy001Js.l;
                setProp = _renderLegacy001Js.m;
                createSignal = _renderLegacy001Js.q;
                createTextNode = _renderLegacy001Js.s;
                insertNode = _renderLegacy001Js.u;
                renderer = _renderLegacy001Js.x;
            }, function(_LazyLegacy006Js) {
                LazyRow = _LazyLegacy006Js.n;
                LazyColumn = _LazyLegacy006Js.t;
            }, function(_FPSCounterLegacy00aJs) {
                resetCounter = _FPSCounterLegacy00aJs.n;
            }, function(_ContentBlockLegacy00bJs) {
                ContentBlock = _ContentBlockLegacy00bJs.t;
            }, function(_createFocusStackLegacy00cJs) {
                useFocusStack = _createFocusStackLegacy00cJs.n;
            }, function(_componentsLegacy00dJs) {
                Hero = _componentsLegacy00dJs.a;
                DISPLAY_SIZE = _componentsLegacy00dJs.i;
                SHOW_TEXT = _componentsLegacy00dJs.s;
                AssetPanel = _componentsLegacy00dJs.t;
                TitleRow = _componentsLegacy00dJs.u;
            }, function(_stylesLegacy00hJs) {
                styles_default = _stylesLegacy00hJs.r;
            }, function(_stateLegacy00iJs) {
                setGlobalBackground = _stateLegacy00iJs.n;
            }, function(_distLegacy00jJs) {
                debounce = _distLegacy00jJs.t;
            } ],
            execute: function execute() {
                TOTAL_CYCLES = 2;
                NAV_DELAY_MS = 300;
                FRAME_TIME_SPLIT_MS = 32;
                FRAME_TIME_FINE_MS = 1;
                FRAME_TIME_COARSE_MS = 8;
                FRAME_TIME_BUCKET_COUNT = 45;
                _export("default", Benchmark = function Benchmark(props) {
                    var cancelled = false;
                    onCleanup(function() {
                        cancelled = true;
                    });
                    var _createSignal = createSignal({}), _createSignal2 = _slicedToArray(_createSignal, 2), heroContent = _createSignal2[0], setHeroContent = _createSignal2[1];
                    var _createSignal3 = createSignal(false), _createSignal4 = _slicedToArray(_createSignal3, 2), openPanel = _createSignal4[0], setOpenPanel = _createSignal4[1];
                    var _useFocusStack = useFocusStack(), storeFocus = _useFocusStack.storeFocus, restoreFocus = _useFocusStack.restoreFocus;
                    var contentBlock, solidLogo, firstRun = true;
                    var columnRef;
                    var relaunchBtnRef;
                    var bundleType = typeof window !== "undefined" && window.bundleType ? String(window.bundleType) : "unknown";
                    var _createSignal5 = createSignal("Waiting for data..."), _createSignal6 = _slicedToArray(_createSignal5, 2), benchmarkStatus = _createSignal6[0], setBenchmarkStatus = _createSignal6[1];
                    var _createSignal7 = createSignal(false), _createSignal8 = _slicedToArray(_createSignal7, 2), benchmarkRunning = _createSignal8[0], setBenchmarkRunning = _createSignal8[1];
                    var _createSignal9 = createSignal(false), _createSignal0 = _slicedToArray(_createSignal9, 2), benchmarkDone = _createSignal0[0], setBenchmarkDone = _createSignal0[1];
                    var _createSignal1 = createSignal(false), _createSignal10 = _slicedToArray(_createSignal1, 2), dataLoaded = _createSignal10[0], setDataLoaded = _createSignal10[1];
                    var _createSignal11 = createSignal(null), _createSignal12 = _slicedToArray(_createSignal11, 2), renderTime = _createSignal12[0], setRenderTime = _createSignal12[1];
                    var _createSignal13 = createSignal(null), _createSignal14 = _slicedToArray(_createSignal13, 2), capabilities = _createSignal14[0], setCapabilities = _createSignal14[1];
                    var _createSignal15 = createSignal(null), _createSignal16 = _slicedToArray(_createSignal15, 2), perfStats = _createSignal16[0], setPerfStats = _createSignal16[1];
                    var _createSignal17 = createSignal(null), _createSignal18 = _slicedToArray(_createSignal17, 2), drawStats = _createSignal18[0], setDrawStats = _createSignal18[1];
                    var _createSignal19 = createSignal(null), _createSignal20 = _slicedToArray(_createSignal19, 2), contextSpy = _createSignal20[0], setContextSpy = _createSignal20[1];
                    var fpsValues = [];
                    var animatedFpsValues = [];
                    var cumulativeAllBuckets = createZeroArray(FRAME_TIME_BUCKET_COUNT);
                    var cumulativeAnimBuckets = createZeroArray(FRAME_TIME_BUCKET_COUNT);
                    var totalRenderedFrames = 0;
                    var totalRenderedMs = 0;
                    var totalIdleTicks = 0;
                    var totalAnimatedFrames = 0;
                    var totalAnimatedMs = 0;
                    var worstMaxFrameTime = 0;
                    var worstAnimatedMaxFrameTime = 0;
                    var totalUpdateMs = 0;
                    var totalRenderMs = 0;
                    var totalUploadMs = 0;
                    var worstMaxUpdateMs = 0;
                    var worstMaxRenderMs = 0;
                    var worstMaxUploadMs = 0;
                    var totalUploadedTextures = 0;
                    var totalUploadFrames = 0;
                    var worstMaxUploadQueueSize = 0;
                    var activeAnimationsSamples = [];
                    var worstMaxActiveAnimations = 0;
                    var maxRenderOps = 0;
                    var maxQuads = 0;
                    var totalKeyDispatchMs = 0;
                    var worstKeyDispatchMs = 0;
                    var keyDispatchCount = 0;
                    var keyPressSamples = [];
                    var lastContextSpy = null;
                    var fpsListenerAttached = false;
                    function safeFetchCapabilities() {
                        try {
                            var root = renderer;
                            if (root && typeof root.getCapabilities === "function" && !capabilities()) {
                                var caps = root.getCapabilities();
                                if (caps) setCapabilities(caps);
                            }
                        } catch (e) {
                            console.warn("Unable to fetch capabilities:", e);
                        }
                    }
                    function attachFpsListener() {
                        if (fpsListenerAttached) return;
                        var root = renderer;
                        if (!root || typeof root.on !== "function") return;
                        fpsListenerAttached = true;
                        safeFetchCapabilities();
                        root.on("fpsUpdate", function(_target, fpsData) {
                            var fps = typeof fpsData === "number" ? fpsData : fpsData == null ? void 0 : fpsData.fps;
                            if ((fpsData == null ? void 0 : fpsData.capabilities) && !capabilities()) setCapabilities(fpsData.capabilities);
                            if (typeof fps === "number" && fps > 5 && benchmarkRunning()) {
                                fpsValues.push(fps);
                                if (_typeof(fpsData) === "object" && fpsData !== null) {
                                    var payload = fpsData;
                                    if (typeof payload.animatedFps === "number" && payload.animatedFrames > 0) animatedFpsValues.push(payload.animatedFps);
                                    if (Array.isArray(payload.frameTimeBuckets)) for (var i = 0; i < Math.min(payload.frameTimeBuckets.length, cumulativeAllBuckets.length); i++) cumulativeAllBuckets[i] += payload.frameTimeBuckets[i] || 0;
                                    if (Array.isArray(payload.animatedFrameTimeBuckets)) for (var _i2 = 0; _i2 < Math.min(payload.animatedFrameTimeBuckets.length, cumulativeAnimBuckets.length); _i2++) cumulativeAnimBuckets[_i2] += payload.animatedFrameTimeBuckets[_i2] || 0;
                                    totalRenderedFrames += payload.renderedFrames || 0;
                                    totalRenderedMs += payload.renderedMs || 0;
                                    totalIdleTicks += payload.idleTicks || 0;
                                    totalAnimatedFrames += payload.animatedFrames || 0;
                                    totalAnimatedMs += payload.animatedMs || 0;
                                    if (typeof payload.maxFrameTime === "number") worstMaxFrameTime = Math.max(worstMaxFrameTime, payload.maxFrameTime);
                                    if (typeof payload.animatedMaxFrameTime === "number") worstAnimatedMaxFrameTime = Math.max(worstAnimatedMaxFrameTime, payload.animatedMaxFrameTime);
                                    totalUpdateMs += payload.updateMs || 0;
                                    totalRenderMs += payload.renderMs || 0;
                                    totalUploadMs += payload.uploadMs || 0;
                                    if (typeof payload.maxUpdateMs === "number") worstMaxUpdateMs = Math.max(worstMaxUpdateMs, payload.maxUpdateMs);
                                    if (typeof payload.maxRenderMs === "number") worstMaxRenderMs = Math.max(worstMaxRenderMs, payload.maxRenderMs);
                                    if (typeof payload.maxUploadMs === "number") worstMaxUploadMs = Math.max(worstMaxUploadMs, payload.maxUploadMs);
                                    totalUploadedTextures += payload.uploadedTextures || 0;
                                    totalUploadFrames += payload.uploadFrames || 0;
                                    if (typeof payload.maxUploadQueueSize === "number") worstMaxUploadQueueSize = Math.max(worstMaxUploadQueueSize, payload.maxUploadQueueSize);
                                    if (typeof payload.meanActiveAnimations === "number") activeAnimationsSamples.push(payload.meanActiveAnimations);
                                    if (typeof payload.maxActiveAnimations === "number") worstMaxActiveAnimations = Math.max(worstMaxActiveAnimations, payload.maxActiveAnimations);
                                    if (typeof payload.renderOps === "number") maxRenderOps = Math.max(maxRenderOps, payload.renderOps);
                                    if (typeof payload.quads === "number") maxQuads = Math.max(maxQuads, payload.quads);
                                    if (payload.contextSpyData) lastContextSpy = payload.contextSpyData;
                                }
                            }
                        });
                    }
                    function simulateKeyDown(key, cycle, index) {
                        try {
                            var event = document.createEvent("Event");
                            event.initEvent("keydown", true, true);
                            Object.defineProperty(event, "key", {
                                value: key,
                                enumerable: true,
                                configurable: true
                            });
                            Object.defineProperty(event, "code", {
                                value: key === "ArrowDown" ? "ArrowDown" : "ArrowUp",
                                enumerable: true,
                                configurable: true
                            });
                            var dispatchStart = performance.now();
                            document.dispatchEvent(event);
                            var dispatchMs = performance.now() - dispatchStart;
                            totalKeyDispatchMs += dispatchMs;
                            keyDispatchCount++;
                            if (dispatchMs > worstKeyDispatchMs) worstKeyDispatchMs = dispatchMs;
                            keyPressSamples.push({
                                press: keyDispatchCount,
                                cycle: cycle,
                                direction: key === "ArrowDown" ? "down" : "up",
                                index: index,
                                ms: dispatchMs
                            });
                        } catch (e) {
                            console.error("Failed to simulate key down:", e);
                        }
                    }
                    function sleep(ms) {
                        return new Promise(function(resolve) {
                            return setTimeout(resolve, ms);
                        });
                    }
                    function runBenchmark() {
                        return _runBenchmark.apply(this, arguments);
                    }
                    function _runBenchmark() {
                        _runBenchmark = _asyncToGenerator(_regenerator().m(function _callee() {
                            var _props$data, _currentCaps$webGlVer, _currentCaps$vertexAr, totalRows, cycle, i, _i3, avgAnimatedFps, avgFps, minFps, maxFps, animP95, animP99, allP95, allP99, avgActiveAnims, meanUploadCost, meanKeyDispatch, worstKeyPresses, calculatedStats, currentCaps, benchmarkResultsJson, prior, animRateStr;
                            return _regenerator().w(function(_context2) {
                                while (1) switch (_context2.n) {
                                  case 0:
                                    resetCounter();
                                    totalRows = ((_props$data = props.data) == null || (_props$data = _props$data.rows) == null ? void 0 : _props$data.length) || 0;
                                    if (!(totalRows === 0)) {
                                        _context2.n = 1;
                                        break;
                                    }
                                    setBenchmarkStatus("No rows to benchmark");
                                    return _context2.a(2);

                                  case 1:
                                    fpsValues = [];
                                    animatedFpsValues = [];
                                    cumulativeAllBuckets = createZeroArray(FRAME_TIME_BUCKET_COUNT);
                                    cumulativeAnimBuckets = createZeroArray(FRAME_TIME_BUCKET_COUNT);
                                    totalRenderedFrames = 0;
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
                                    activeAnimationsSamples = [];
                                    worstMaxActiveAnimations = 0;
                                    maxRenderOps = 0;
                                    maxQuads = 0;
                                    totalKeyDispatchMs = 0;
                                    worstKeyDispatchMs = 0;
                                    keyDispatchCount = 0;
                                    keyPressSamples = [];
                                    lastContextSpy = null;
                                    setPerfStats(null);
                                    setDrawStats(null);
                                    setContextSpy(null);
                                    setBenchmarkRunning(true);
                                    setBenchmarkDone(false);
                                    attachFpsListener();
                                    setBenchmarkStatus("Starting benchmark...");
                                    _context2.n = 2;
                                    return sleep(1500);

                                  case 2:
                                    cycle = 0;

                                  case 3:
                                    if (!(cycle < TOTAL_CYCLES)) {
                                        _context2.n = 14;
                                        break;
                                    }
                                    if (!cancelled) {
                                        _context2.n = 4;
                                        break;
                                    }
                                    return _context2.a(2);

                                  case 4:
                                    i = 0;

                                  case 5:
                                    if (!(i < totalRows - 1)) {
                                        _context2.n = 8;
                                        break;
                                    }
                                    if (!cancelled) {
                                        _context2.n = 6;
                                        break;
                                    }
                                    return _context2.a(2);

                                  case 6:
                                    setBenchmarkStatus("Cycle ".concat(cycle + 1, "/").concat(TOTAL_CYCLES, " - Down ").concat(i + 1, "/").concat(totalRows - 1));
                                    simulateKeyDown("ArrowDown", cycle + 1, i + 1);
                                    _context2.n = 7;
                                    return sleep(NAV_DELAY_MS);

                                  case 7:
                                    i++;
                                    _context2.n = 5;
                                    break;

                                  case 8:
                                    if (!cancelled) {
                                        _context2.n = 9;
                                        break;
                                    }
                                    return _context2.a(2);

                                  case 9:
                                    _i3 = 0;

                                  case 10:
                                    if (!(_i3 < totalRows - 1)) {
                                        _context2.n = 13;
                                        break;
                                    }
                                    if (!cancelled) {
                                        _context2.n = 11;
                                        break;
                                    }
                                    return _context2.a(2);

                                  case 11:
                                    setBenchmarkStatus("Cycle ".concat(cycle + 1, "/").concat(TOTAL_CYCLES, " - Up ").concat(_i3 + 1, "/").concat(totalRows - 1));
                                    simulateKeyDown("ArrowUp", cycle + 1, _i3 + 1);
                                    _context2.n = 12;
                                    return sleep(NAV_DELAY_MS);

                                  case 12:
                                    _i3++;
                                    _context2.n = 10;
                                    break;

                                  case 13:
                                    cycle++;
                                    _context2.n = 3;
                                    break;

                                  case 14:
                                    if (!cancelled) {
                                        _context2.n = 15;
                                        break;
                                    }
                                    return _context2.a(2);

                                  case 15:
                                    avgAnimatedFps = totalAnimatedMs > 0 && totalAnimatedFrames > 0 ? totalAnimatedFrames / (totalAnimatedMs / 1e3) : animatedFpsValues.length > 0 ? animatedFpsValues.reduce(function(a, b) {
                                        return a + b;
                                    }, 0) / animatedFpsValues.length : 0;
                                    avgFps = totalRenderedMs > 0 && totalRenderedFrames > 0 ? totalRenderedFrames / (totalRenderedMs / 1e3) : fpsValues.length > 0 ? fpsValues.reduce(function(a, b) {
                                        return a + b;
                                    }, 0) / fpsValues.length : 0;
                                    minFps = fpsValues.length > 0 ? Math.min.apply(null, fpsValues) : 0;
                                    maxFps = fpsValues.length > 0 ? Math.max.apply(null, fpsValues) : 0;
                                    animP95 = percentileMs(cumulativeAnimBuckets, .95);
                                    animP99 = percentileMs(cumulativeAnimBuckets, .99);
                                    allP95 = percentileMs(cumulativeAllBuckets, .95);
                                    allP99 = percentileMs(cumulativeAllBuckets, .99);
                                    avgActiveAnims = activeAnimationsSamples.length > 0 ? activeAnimationsSamples.reduce(function(a, b) {
                                        return a + b;
                                    }, 0) / activeAnimationsSamples.length : 0;
                                    meanUploadCost = totalUploadedTextures > 0 ? totalUploadMs / totalUploadedTextures : 0;
                                    meanKeyDispatch = keyDispatchCount > 0 ? totalKeyDispatchMs / keyDispatchCount : 0;
                                    worstKeyPresses = keyPressSamples.slice().sort(function(a, b) {
                                        return b.ms - a.ms;
                                    }).slice(0, 5);
                                    calculatedStats = {
                                        avgFps: avgFps,
                                        minFps: minFps,
                                        maxFps: maxFps,
                                        totalRenderedFrames: totalRenderedFrames,
                                        totalRenderedMs: totalRenderedMs,
                                        totalIdleTicks: totalIdleTicks,
                                        avgAnimatedFps: avgAnimatedFps,
                                        totalAnimatedFrames: totalAnimatedFrames,
                                        totalAnimatedMs: totalAnimatedMs,
                                        animP95: animP95,
                                        animP99: animP99,
                                        animMaxFrameTime: worstAnimatedMaxFrameTime,
                                        p95: allP95,
                                        p99: allP99,
                                        maxFrameTime: worstMaxFrameTime,
                                        totalUpdateMs: totalUpdateMs,
                                        totalRenderMs: totalRenderMs,
                                        totalUploadMs: totalUploadMs,
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
                                        totalKeyDispatchMs: totalKeyDispatchMs,
                                        maxKeyDispatchMs: worstKeyDispatchMs,
                                        meanKeyDispatchMs: meanKeyDispatch,
                                        worstKeyPresses: worstKeyPresses
                                    };
                                    safeFetchCapabilities();
                                    currentCaps = capabilities();
                                    benchmarkResultsJson = {
                                        benchmark: {
                                            bundleType: bundleType,
                                            initialRenderTimeMs: renderTime() !== null ? parseFloat(renderTime().toFixed(2)) : null,
                                            totalCycles: TOTAL_CYCLES,
                                            navDelayMs: NAV_DELAY_MS
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
                                            totalIdleTicks: calculatedStats.totalIdleTicks
                                        },
                                        frameWorkSplit: {
                                            totalUpdateMs: parseFloat(calculatedStats.totalUpdateMs.toFixed(2)),
                                            maxUpdateMs: parseFloat(calculatedStats.maxUpdateMs.toFixed(2)),
                                            totalRenderMs: parseFloat(calculatedStats.totalRenderMs.toFixed(2)),
                                            maxRenderMs: parseFloat(calculatedStats.maxRenderMs.toFixed(2)),
                                            totalUploadMs: parseFloat(calculatedStats.totalUploadMs.toFixed(2)),
                                            maxUploadMs: parseFloat(calculatedStats.maxUploadMs.toFixed(2))
                                        },
                                        inputDispatch: {
                                            keyPresses: calculatedStats.keyPresses,
                                            totalMs: parseFloat(calculatedStats.totalKeyDispatchMs.toFixed(2)),
                                            maxMs: parseFloat(calculatedStats.maxKeyDispatchMs.toFixed(2)),
                                            meanMs: parseFloat(calculatedStats.meanKeyDispatchMs.toFixed(2)),
                                            worstPresses: calculatedStats.worstKeyPresses.map(function(sample) {
                                                return {
                                                    press: sample.press,
                                                    cycle: sample.cycle,
                                                    direction: sample.direction,
                                                    index: sample.index,
                                                    ms: parseFloat(sample.ms.toFixed(2))
                                                };
                                            })
                                        },
                                        assetsAnimationsGeometry: {
                                            drawCalls: calculatedStats.renderOps,
                                            quads: calculatedStats.quads,
                                            uploadedTextures: calculatedStats.uploadedTextures,
                                            uploadFrames: calculatedStats.uploadFrames,
                                            meanUploadCostMs: parseFloat(calculatedStats.meanUploadCostMs.toFixed(2)),
                                            maxUploadQueueSize: calculatedStats.maxUploadQueueSize,
                                            avgActiveAnimations: parseFloat(calculatedStats.avgActiveAnimations.toFixed(2)),
                                            maxActiveAnimations: calculatedStats.maxActiveAnimations
                                        },
                                        sceneConfig: {
                                            displaySize: DISPLAY_SIZE,
                                            showText: SHOW_TEXT
                                        },
                                        glCallsPerInterval: lastContextSpy || null,
                                        rendererCapabilities: currentCaps ? {
                                            renderMode: currentCaps.renderMode,
                                            webGlVersion: (_currentCaps$webGlVer = currentCaps.webGlVersion) !== null && _currentCaps$webGlVer !== void 0 ? _currentCaps$webGlVer : null,
                                            vertexArrayObject: (_currentCaps$vertexAr = currentCaps.vertexArrayObject) !== null && _currentCaps$vertexAr !== void 0 ? _currentCaps$vertexAr : null,
                                            maxTextureSize: currentCaps.maxTextureSize,
                                            maxTextureUnits: currentCaps.maxTextureUnits,
                                            pixelRatio: {
                                                physical: parseFloat(getPixelRatios().physical.toFixed(2)),
                                                logical: parseFloat(getPixelRatios().logical.toFixed(2)),
                                                windowDpr: parseFloat(getPixelRatios().dpr.toFixed(2))
                                            },
                                            textureProcessingTimeLimitMs: getTextureProcessingTimeLimit(),
                                            imageWorkers: getImageWorkersCount(),
                                            deviceCores: getDeviceCores()
                                        } : {
                                            pixelRatio: {
                                                physical: parseFloat(getPixelRatios().physical.toFixed(2)),
                                                logical: parseFloat(getPixelRatios().logical.toFixed(2)),
                                                windowDpr: parseFloat(getPixelRatios().dpr.toFixed(2))
                                            },
                                            textureProcessingTimeLimitMs: getTextureProcessingTimeLimit(),
                                            imageWorkers: getImageWorkersCount(),
                                            deviceCores: getDeviceCores()
                                        }
                                    };
                                    console.log("=== BENCHMARK PERFORMANCE RESULTS (JSON) ===");
                                    console.log(JSON.stringify(benchmarkResultsJson, null, 2));
                                    try {
                                        prior = JSON.parse(localStorage.getItem("benchmarkRuns") || "[]");
                                        prior.push({
                                            url: window.location.search,
                                            results: benchmarkResultsJson
                                        });
                                        localStorage.setItem("benchmarkRuns", JSON.stringify(prior.slice(-12)));
                                    } catch (e) {}
                                    batch(function() {
                                        setPerfStats(calculatedStats);
                                        setDrawStats({
                                            renderOps: maxRenderOps,
                                            quads: maxQuads
                                        });
                                        setContextSpy(lastContextSpy);
                                        setBenchmarkDone(true);
                                        setBenchmarkRunning(false);
                                    });
                                    setTimeout(function() {
                                        if (relaunchBtnRef && typeof relaunchBtnRef.focus === "function") relaunchBtnRef.focus();
                                    }, 100);
                                    if (fpsValues.length > 0 || totalRenderedFrames > 0) {
                                        animRateStr = avgAnimatedFps > 0 ? "".concat(avgAnimatedFps.toFixed(1), " FPS") : "".concat(avgFps.toFixed(1), " FPS");
                                        setBenchmarkStatus("Anim: ".concat(animRateStr, " (p95: ").concat(animP95, "ms, max: ").concat(worstAnimatedMaxFrameTime.toFixed(0), "ms) | All: ").concat(avgFps.toFixed(1), " FPS"));
                                    } else setBenchmarkStatus("Done - No FPS samples collected");

                                  case 16:
                                    return _context2.a(2);
                                }
                            }, _callee);
                        }));
                        return _runBenchmark.apply(this, arguments);
                    }
                    createEffect(function() {
                        var _props$data2, _rows$;
                        var rows = (_props$data2 = props.data) == null ? void 0 : _props$data2.rows;
                        if (!rows || rows.length === 0) return;
                        var firstItems = ((_rows$ = rows[0]) == null ? void 0 : _rows$.items) ? rows[0].items() : null;
                        if (firstItems && firstItems.length > 0) {
                            if (!dataLoaded()) {
                                var startTime = performance.now();
                                setDataLoaded(true);
                                if (renderer && typeof renderer.on === "function") renderer.on("idle", function() {
                                    if (renderTime() === null) setRenderTime(performance.now() - startTime);
                                });
                            }
                            if (!benchmarkDone() && !benchmarkRunning()) {
                                attachFpsListener();
                                var timeoutId = setTimeout(function() {
                                    if (!cancelled) runBenchmark();
                                }, 2e3);
                                onCleanup(function() {
                                    return clearTimeout(timeoutId);
                                });
                            }
                        }
                    });
                    var delayedBackgrounds = debounce(setGlobalBackground, 800);
                    var delayedHero = debounce(function(content) {
                        return setHeroContent(content || {});
                    }, 600);
                    createEffect(on(activeElement, function(elm) {
                        if (!elm) return;
                        var item = elm.item || {};
                        if (firstRun) {
                            item.backdrop && setGlobalBackground(item.backdrop);
                            item.heroContent && setHeroContent(item.heroContent);
                            firstRun = false;
                        } else {
                            item.backdrop && delayedBackgrounds(item.backdrop);
                            item.heroContent && delayedHero(item.heroContent);
                        }
                    }, {
                        defer: true
                    }));
                    function onRowChanged(selectedIndex, column, row, lastIndex) {
                        if (selectedIndex === lastIndex) return;
                        var values = selectedIndex === 0 ? {
                            y: 300,
                            alpha: 1
                        } : {
                            y: 200,
                            alpha: 0
                        };
                        contentBlock.animate(values, {
                            duration: 300,
                            easing: "ease-in-out"
                        }).start();
                        var values2 = selectedIndex === 0 ? {
                            y: 80,
                            alpha: 1
                        } : {
                            y: 0,
                            alpha: 0
                        };
                        solidLogo.animate(values2, {
                            duration: 300,
                            easing: "ease-in-out"
                        }).start();
                    }
                    var overlayBgStyle = {
                        width: 700,
                        height: 140,
                        color: 204,
                        borderRadius: 12
                    };
                    var overlayTitleStyle = {
                        fontFamily: "Roboto",
                        fontSize: 28,
                        color: 4294967295,
                        lineHeight: 34
                    };
                    var overlayStatusStyle = {
                        fontFamily: "Roboto",
                        fontSize: 22,
                        lineHeight: 28
                    };
                    var resultsBgStyle = {
                        color: 245,
                        borderRadius: 12
                    };
                    var OVERLAY_WIDTH = 700;
                    var ROW_H = 26;
                    var resultsHeaderStyle = {
                        fontFamily: "Roboto",
                        fontSize: 16,
                        lineHeight: 22,
                        color: 14221311
                    };
                    var resultsLabelStyle = {
                        fontFamily: "Roboto",
                        fontSize: 17,
                        lineHeight: 24,
                        color: 2661195519
                    };
                    var resultsValueStyle = {
                        fontFamily: "Roboto",
                        fontSize: 17,
                        lineHeight: 24,
                        color: 4294967295
                    };
                    var ResultRow = function ResultRow(rowProps) {
                        return function() {
                            var _el$ = createElement("view"), _el$2 = createElement("text"), _el$3 = createElement("text");
                            insertNode(_el$, _el$2);
                            insertNode(_el$, _el$3);
                            setProp(_el$2, "x", 28);
                            setProp(_el$2, "style", resultsLabelStyle);
                            insert(_el$2, function() {
                                return rowProps.label;
                            });
                            setProp(_el$3, "x", 350);
                            setProp(_el$3, "style", resultsValueStyle);
                            insert(_el$3, function() {
                                return rowProps.value;
                            });
                            effect(function(_$p) {
                                return setProp(_el$, "y", rowProps.y, _$p);
                            });
                            return _el$;
                        }();
                    };
                    var SectionHeader = function SectionHeader(headerProps) {
                        return function() {
                            var _el$4 = createElement("view"), _el$5 = createElement("text");
                            insertNode(_el$4, _el$5);
                            setProp(_el$5, "x", 28);
                            setProp(_el$5, "style", resultsHeaderStyle);
                            insert(_el$5, function() {
                                return headerProps.title;
                            });
                            effect(function(_$p) {
                                return setProp(_el$4, "y", headerProps.y, _$p);
                            });
                            return _el$4;
                        }();
                    };
                    var SectionDivider = function SectionDivider(divProps) {
                        return function() {
                            var _el$6 = createElement("view");
                            setProp(_el$6, "width", OVERLAY_WIDTH - 56);
                            setProp(_el$6, "height", 1);
                            setProp(_el$6, "x", 28);
                            setProp(_el$6, "color", 4294967074);
                            effect(function(_$p) {
                                return setProp(_el$6, "y", divProps.y, _$p);
                            });
                            return _el$6;
                        }();
                    };
                    var webGlLabel = function webGlLabel(caps) {
                        var _caps$webGlVersion;
                        return caps.renderMode === "webgl" ? "WebGL ".concat((_caps$webGlVersion = caps.webGlVersion) !== null && _caps$webGlVersion !== void 0 ? _caps$webGlVersion : "?") : "Canvas2D";
                    };
                    var glEntries = function glEntries() {
                        var spy = contextSpy();
                        if (!spy) return [];
                        var entries = [];
                        for (var key in spy) if (Object.prototype.hasOwnProperty.call(spy, key)) entries.push([ key, spy[key] || 0 ]);
                        return entries.sort(function(a, b) {
                            return b[1] - a[1];
                        });
                    };
                    var relaunchBtnStyle = {
                        width: 320,
                        height: 44,
                        color: 858993663,
                        borderRadius: 8,
                        $focus: {
                            color: 14221311
                        }
                    };
                    var relaunchBtnTextStyle = {
                        fontFamily: "Roboto",
                        fontSize: 18,
                        lineHeight: 24,
                        color: 4294967295,
                        $focus: {
                            color: 255
                        }
                    };
                    var SEC_GL_Y = 486;
                    var glStartY = 512;
                    var glRowsCount = function glRowsCount() {
                        return glEntries().length;
                    };
                    var glRowsHeight = function glRowsHeight() {
                        return glRowsCount() > 0 ? glRowsCount() * ROW_H : ROW_H;
                    };
                    var dividerCapsY = function dividerCapsY() {
                        return glStartY + glRowsHeight() + 6;
                    };
                    var secCapsY = function secCapsY() {
                        return dividerCapsY() + 10;
                    };
                    var capsStartY = function capsStartY() {
                        return secCapsY() + 26;
                    };
                    var relaunchBtnY = function relaunchBtnY() {
                        return capsStartY() + 8 * ROW_H + 16;
                    };
                    var overlayHeight = function overlayHeight() {
                        return relaunchBtnY() + 44 + 18;
                    };
                    return createComponent(Show, {
                        get when() {
                            return dataLoaded();
                        },
                        get fallback() {
                            return function() {
                                var _el$25 = createElement("text");
                                insertNode(_el$25, createTextNode("Loading Data..."));
                                setProp(_el$25, "x", 960);
                                setProp(_el$25, "y", 540);
                                setProp(_el$25, "fontSize", 40);
                                setProp(_el$25, "color", 4294967295);
                                setProp(_el$25, "mount", .5);
                                return _el$25;
                            }();
                        },
                        get children() {
                            var _el$7 = createElement("view"), _el$8 = createElement("view"), _el$9 = createElement("text"), _el$1 = createElement("view"), _el$10 = createElement("view"), _el$11 = createElement("text"), _el$13 = createElement("view"), _el$14 = createElement("text"), _el$16 = createElement("text"), _el$17 = createElement("text"), _el$18 = createElement("text");
                            insertNode(_el$7, _el$8);
                            insertNode(_el$7, _el$13);
                            setProp(_el$7, "forwardFocus", 2);
                            insertNode(_el$8, _el$9);
                            insertNode(_el$8, _el$1);
                            insertNode(_el$8, _el$10);
                            insertNode(_el$8, _el$11);
                            var _ref$ = solidLogo;
                            typeof _ref$ === "function" ? use(_ref$, _el$8) : solidLogo = _el$8;
                            setProp(_el$8, "width", 300);
                            setProp(_el$8, "height", 150);
                            setProp(_el$8, "x", 162);
                            setProp(_el$8, "y", 80);
                            setProp(_el$8, "zIndex", 105);
                            insertNode(_el$9, createTextNode("Built With:"));
                            setProp(_el$9, "x", 80);
                            setProp(_el$9, "fontSize", 28);
                            setProp(_el$9, "color", 4143380121);
                            setProp(_el$1, "y", 32);
                            setProp(_el$1, "src", "./assets/solidWord.png");
                            setProp(_el$1, "width", 280);
                            setProp(_el$1, "height", 52);
                            setProp(_el$10, "x", 0);
                            setProp(_el$10, "y", 110);
                            setProp(_el$10, "src", "./assets/tmdb.png");
                            setProp(_el$10, "width", 80);
                            setProp(_el$10, "height", 41);
                            insertNode(_el$11, createTextNode("This product uses the TMDB API but is not endorsed or certified by TMDB."));
                            setProp(_el$11, "x", 90);
                            setProp(_el$11, "y", 110);
                            setProp(_el$11, "contain", "width");
                            setProp(_el$11, "width", 160);
                            setProp(_el$11, "fontSize", 12);
                            setProp(_el$11, "color", 4143380121);
                            insert(_el$7, createComponent(ContentBlock, {
                                ref: function ref(r$) {
                                    var _ref$2 = contentBlock;
                                    typeof _ref$2 === "function" ? _ref$2(r$) : contentBlock = r$;
                                },
                                y: 300,
                                x: 162,
                                get content() {
                                    return heroContent();
                                }
                            }), _el$13);
                            insert(_el$7, createComponent(LazyColumn, {
                                ref: function ref(r$) {
                                    var _ref$3 = columnRef;
                                    typeof _ref$3 === "function" ? _ref$3(r$) : columnRef = r$;
                                },
                                y: 500,
                                upCount: 3,
                                get each() {
                                    var _props$data3;
                                    return ((_props$data3 = props.data) == null ? void 0 : _props$data3.rows) || [];
                                },
                                id: "BenchmarkColumn",
                                onSelectedChanged: onRowChanged,
                                onEnter: function onEnter() {
                                    return setOpenPanel(true);
                                },
                                get autofocus() {
                                    return memo(function() {
                                        var _props$data4;
                                        return !!((_props$data4 = props.data) == null || (_props$data4 = _props$data4.rows) == null || (_props$data4 = _props$data4[0]) == null ? void 0 : _props$data4.items);
                                    })() ? props.data.rows[0].items() : void 0;
                                },
                                gap: 40,
                                throttleInput: 250,
                                get style() {
                                    return styles_default.Column;
                                },
                                children: function children(row) {
                                    return row().type === "Hero" ? createComponent(LazyRow, {
                                        gap: 80,
                                        upCount: 2,
                                        bufferSize: 1,
                                        scroll: "center",
                                        centerScroll: true,
                                        get each() {
                                            return row().items();
                                        },
                                        y: 50,
                                        get height() {
                                            return row().height;
                                        },
                                        children: function children(item) {
                                            return createComponent(Hero, {
                                                get item() {
                                                    return item();
                                                }
                                            });
                                        }
                                    }) : createComponent(TitleRow, {
                                        get row() {
                                            return row();
                                        },
                                        get title() {
                                            return row().title;
                                        },
                                        get height() {
                                            return row().height;
                                        },
                                        get items() {
                                            return row().items();
                                        }
                                    });
                                }
                            }), _el$13);
                            insertNode(_el$13, _el$14);
                            insertNode(_el$13, _el$16);
                            insertNode(_el$13, _el$17);
                            insertNode(_el$13, _el$18);
                            setProp(_el$13, "x", 610);
                            setProp(_el$13, "y", 20);
                            setProp(_el$13, "zIndex", 200);
                            setProp(_el$13, "style", overlayBgStyle);
                            insertNode(_el$14, createTextNode("Benchmark (version: 1.8.0-3)"));
                            setProp(_el$14, "x", 20);
                            setProp(_el$14, "y", 16);
                            setProp(_el$14, "style", overlayTitleStyle);
                            setProp(_el$16, "x", 360);
                            setProp(_el$16, "y", 20);
                            setProp(_el$16, "width", 320);
                            setProp(_el$16, "contain", "width");
                            setProp(_el$16, "textAlign", "right");
                            setProp(_el$16, "fontSize", 24);
                            insert(_el$16, bundleType);
                            setProp(_el$17, "x", 20);
                            setProp(_el$17, "y", 54);
                            setProp(_el$17, "contain", "width");
                            setProp(_el$17, "width", 660);
                            setProp(_el$17, "style", overlayStatusStyle);
                            insert(_el$17, benchmarkStatus);
                            setProp(_el$18, "x", 20);
                            setProp(_el$18, "y", 92);
                            setProp(_el$18, "style", overlayStatusStyle);
                            setProp(_el$18, "color", 16746751);
                            insert(_el$18, function() {
                                var _c$ = memo(function() {
                                    return renderTime() !== null;
                                });
                                return function() {
                                    var _renderTime;
                                    return _c$() ? "Initial Render: ".concat((_renderTime = renderTime()) == null ? void 0 : _renderTime.toFixed(2), "ms") : "Rendering...";
                                };
                            }());
                            insert(_el$7, createComponent(Show, {
                                get when() {
                                    return benchmarkDone();
                                },
                                get children() {
                                    var _el$19 = createElement("view"), _el$20 = createElement("text"), _el$22 = createElement("view"), _el$23 = createElement("text");
                                    insertNode(_el$19, _el$20);
                                    insertNode(_el$19, _el$22);
                                    setProp(_el$19, "x", 610);
                                    setProp(_el$19, "y", 175);
                                    setProp(_el$19, "zIndex", 8e3);
                                    setProp(_el$19, "width", OVERLAY_WIDTH);
                                    setProp(_el$19, "style", resultsBgStyle);
                                    insertNode(_el$20, createTextNode("Performance Breakdown"));
                                    setProp(_el$20, "x", 28);
                                    setProp(_el$20, "y", 14);
                                    setProp(_el$20, "style", overlayTitleStyle);
                                    insert(_el$19, createComponent(SectionHeader, {
                                        y: 50,
                                        title: "FRAME RATE & SMOOTHNESS"
                                    }), _el$22);
                                    insert(_el$19, createComponent(ResultRow, {
                                        y: 74,
                                        label: "Animated FPS",
                                        get value() {
                                            return memo(function() {
                                                return !!perfStats();
                                            })() ? "".concat(perfStats().avgAnimatedFps.toFixed(1), " FPS") : "—";
                                        }
                                    }), _el$22);
                                    insert(_el$19, createComponent(ResultRow, {
                                        y: 100,
                                        label: "Anim p95 / p99",
                                        get value() {
                                            return memo(function() {
                                                return !!perfStats();
                                            })() ? "".concat(perfStats().animP95, "ms / ").concat(perfStats().animP99, "ms") : "—";
                                        }
                                    }), _el$22);
                                    insert(_el$19, createComponent(ResultRow, {
                                        y: 126,
                                        label: "Worst Anim Frame",
                                        get value() {
                                            return memo(function() {
                                                return !!perfStats();
                                            })() ? "".concat(perfStats().animMaxFrameTime.toFixed(1), "ms") : "—";
                                        }
                                    }), _el$22);
                                    insert(_el$19, createComponent(ResultRow, {
                                        y: 152,
                                        label: "Overall Rendered FPS",
                                        get value() {
                                            return memo(function() {
                                                return !!perfStats();
                                            })() ? "".concat(perfStats().avgFps.toFixed(1), " FPS (").concat(perfStats().totalRenderedFrames, "f)") : "—";
                                        }
                                    }), _el$22);
                                    insert(_el$19, createComponent(ResultRow, {
                                        y: 178,
                                        label: "All p95 / p99 / Max",
                                        get value() {
                                            return memo(function() {
                                                return !!perfStats();
                                            })() ? "".concat(perfStats().p95, "ms / ").concat(perfStats().p99, "ms / ").concat(perfStats().maxFrameTime.toFixed(1), "ms") : "—";
                                        }
                                    }), _el$22);
                                    insert(_el$19, createComponent(ResultRow, {
                                        y: 204,
                                        label: "Frames / Idle Polls",
                                        get value() {
                                            return memo(function() {
                                                return !!perfStats();
                                            })() ? "".concat(perfStats().totalRenderedFrames, " drew / ").concat(perfStats().totalIdleTicks, " idle") : "—";
                                        }
                                    }), _el$22);
                                    insert(_el$19, createComponent(SectionDivider, {
                                        y: 232
                                    }), _el$22);
                                    insert(_el$19, createComponent(SectionHeader, {
                                        y: 242,
                                        title: "FRAME WORK SPLIT (INTERVAL / PEAK)"
                                    }), _el$22);
                                    insert(_el$19, createComponent(ResultRow, {
                                        y: 266,
                                        label: "Scene Update (upd)",
                                        get value() {
                                            return memo(function() {
                                                return !!perfStats();
                                            })() ? "".concat(perfStats().totalUpdateMs.toFixed(1), "ms total | ").concat(perfStats().maxUpdateMs.toFixed(1), "ms peak") : "—";
                                        }
                                    }), _el$22);
                                    insert(_el$19, createComponent(ResultRow, {
                                        y: 292,
                                        label: "Render Pass (rnd)",
                                        get value() {
                                            return memo(function() {
                                                return !!perfStats();
                                            })() ? "".concat(perfStats().totalRenderMs.toFixed(1), "ms total | ").concat(perfStats().maxRenderMs.toFixed(1), "ms peak") : "—";
                                        }
                                    }), _el$22);
                                    insert(_el$19, createComponent(ResultRow, {
                                        y: 318,
                                        label: "Texture Upload (upl)",
                                        get value() {
                                            return memo(function() {
                                                return !!perfStats();
                                            })() ? "".concat(perfStats().totalUploadMs.toFixed(1), "ms total | ").concat(perfStats().maxUploadMs.toFixed(1), "ms peak") : "—";
                                        }
                                    }), _el$22);
                                    insert(_el$19, createComponent(SectionDivider, {
                                        y: 346
                                    }), _el$22);
                                    insert(_el$19, createComponent(SectionHeader, {
                                        y: 356,
                                        title: "ASSETS, ANIMATIONS & GEOMETRY"
                                    }), _el$22);
                                    insert(_el$19, createComponent(ResultRow, {
                                        y: 380,
                                        label: "Draw Calls / Quads",
                                        get value() {
                                            return memo(function() {
                                                return !!drawStats();
                                            })() ? "".concat(drawStats().renderOps, " draws / ").concat(drawStats().quads, " quads") : "—";
                                        }
                                    }), _el$22);
                                    insert(_el$19, createComponent(ResultRow, {
                                        y: 406,
                                        label: "Texture Uploads",
                                        get value() {
                                            return memo(function() {
                                                return !!perfStats();
                                            })() ? "".concat(perfStats().uploadedTextures, " tex / ").concat(perfStats().uploadFrames, "f (").concat(perfStats().meanUploadCostMs.toFixed(1), "ms avg)") : "—";
                                        }
                                    }), _el$22);
                                    insert(_el$19, createComponent(ResultRow, {
                                        y: 432,
                                        label: "Upload Queue Peak",
                                        get value() {
                                            return memo(function() {
                                                return !!perfStats();
                                            })() ? "q <= ".concat(perfStats().maxUploadQueueSize) : "—";
                                        }
                                    }), _el$22);
                                    insert(_el$19, createComponent(ResultRow, {
                                        y: 458,
                                        label: "Active Animations",
                                        get value() {
                                            return memo(function() {
                                                return !!perfStats();
                                            })() ? "".concat(perfStats().avgActiveAnimations.toFixed(1), " avg | ").concat(perfStats().maxActiveAnimations, " peak") : "—";
                                        }
                                    }), _el$22);
                                    insert(_el$19, createComponent(SectionDivider, {
                                        y: 486
                                    }), _el$22);
                                    insert(_el$19, createComponent(SectionHeader, {
                                        y: SEC_GL_Y,
                                        title: "GL CALLS / INTERVAL"
                                    }), _el$22);
                                    insert(_el$19, createComponent(Show, {
                                        get when() {
                                            return glEntries().length > 0;
                                        },
                                        get fallback() {
                                            return function() {
                                                var _el$27 = createElement("text");
                                                insertNode(_el$27, createTextNode("off (?contextSpy=true)"));
                                                setProp(_el$27, "x", 350);
                                                setProp(_el$27, "y", SEC_GL_Y);
                                                setProp(_el$27, "style", resultsValueStyle);
                                                return _el$27;
                                            }();
                                        },
                                        get children() {
                                            return createComponent(For, {
                                                get each() {
                                                    return glEntries();
                                                },
                                                children: function children(_ref, i) {
                                                    var _ref2 = _slicedToArray(_ref, 2), name = _ref2[0], count = _ref2[1];
                                                    return createComponent(ResultRow, {
                                                        get y() {
                                                            return glStartY + i() * ROW_H;
                                                        },
                                                        label: name,
                                                        value: "".concat(count)
                                                    });
                                                }
                                            });
                                        }
                                    }), _el$22);
                                    insert(_el$19, createComponent(SectionDivider, {
                                        get y() {
                                            return dividerCapsY();
                                        }
                                    }), _el$22);
                                    insert(_el$19, createComponent(SectionHeader, {
                                        get y() {
                                            return secCapsY();
                                        },
                                        title: "RENDERER CAPABILITIES"
                                    }), _el$22);
                                    insert(_el$19, createComponent(Show, {
                                        get when() {
                                            return capabilities();
                                        },
                                        get fallback() {
                                            return function() {
                                                var _el$29 = createElement("text");
                                                insertNode(_el$29, createTextNode("Capabilities unavailable"));
                                                setProp(_el$29, "x", 28);
                                                setProp(_el$29, "style", resultsLabelStyle);
                                                effect(function(_$p) {
                                                    return setProp(_el$29, "y", capsStartY(), _$p);
                                                });
                                                return _el$29;
                                            }();
                                        },
                                        get children() {
                                            return [ createComponent(ResultRow, {
                                                get y() {
                                                    return capsStartY();
                                                },
                                                label: "Render Mode",
                                                get value() {
                                                    return capabilities().renderMode;
                                                }
                                            }), createComponent(ResultRow, {
                                                get y() {
                                                    return capsStartY() + ROW_H;
                                                },
                                                label: "WebGL Version",
                                                get value() {
                                                    return webGlLabel(capabilities());
                                                }
                                            }), createComponent(ResultRow, {
                                                get y() {
                                                    return capsStartY() + 2 * ROW_H;
                                                },
                                                label: "Vertex Array Obj (VAO)",
                                                get value() {
                                                    return capabilities().vertexArrayObject ? "Enabled (on)" : "Disabled (off)";
                                                }
                                            }), createComponent(ResultRow, {
                                                get y() {
                                                    return capsStartY() + 3 * ROW_H;
                                                },
                                                label: "Max Texture Size",
                                                get value() {
                                                    return "".concat(capabilities().maxTextureSize, "px");
                                                }
                                            }), createComponent(ResultRow, {
                                                get y() {
                                                    return capsStartY() + 4 * ROW_H;
                                                },
                                                label: "Max Texture Units",
                                                get value() {
                                                    return "".concat(capabilities().maxTextureUnits, " units");
                                                }
                                            }), createComponent(ResultRow, {
                                                get y() {
                                                    return capsStartY() + 5 * ROW_H;
                                                },
                                                label: "Pixel Ratio (Phys / Log)",
                                                get value() {
                                                    return "".concat(getPixelRatios().physical.toFixed(2), "x / ").concat(getPixelRatios().logical.toFixed(2), "x");
                                                }
                                            }), createComponent(ResultRow, {
                                                get y() {
                                                    return capsStartY() + 6 * ROW_H;
                                                },
                                                label: "Image Workers",
                                                get value() {
                                                    return "".concat(getImageWorkersCount(), " (").concat(getDeviceCores(), ")");
                                                }
                                            }), createComponent(ResultRow, {
                                                get y() {
                                                    return capsStartY() + 7 * ROW_H;
                                                },
                                                label: "Tex Process Limit",
                                                get value() {
                                                    return "".concat(getTextureProcessingTimeLimit(), "ms");
                                                }
                                            }) ];
                                        }
                                    }), _el$22);
                                    insertNode(_el$22, _el$23);
                                    var _ref$4 = relaunchBtnRef;
                                    typeof _ref$4 === "function" ? use(_ref$4, _el$22) : relaunchBtnRef = _el$22;
                                    setProp(_el$22, "x", (OVERLAY_WIDTH - 320) / 2);
                                    setProp(_el$22, "style", relaunchBtnStyle);
                                    setProp(_el$22, "forwardStates", true);
                                    setProp(_el$22, "autofocus", true);
                                    setProp(_el$22, "onEnter", function() {
                                        document.location.reload();
                                        return true;
                                    });
                                    insertNode(_el$23, createTextNode("Relaunch Benchmark"));
                                    setProp(_el$23, "x", 160);
                                    setProp(_el$23, "y", 22);
                                    setProp(_el$23, "mount", .5);
                                    setProp(_el$23, "style", relaunchBtnTextStyle);
                                    effect(function(_p$) {
                                        var _v$ = overlayHeight(), _v$2 = relaunchBtnY();
                                        _v$ !== _p$.e && (_p$.e = setProp(_el$19, "height", _v$, _p$.e));
                                        _v$2 !== _p$.t && (_p$.t = setProp(_el$22, "y", _v$2, _p$.t));
                                        return _p$;
                                    }, {
                                        e: void 0,
                                        t: void 0
                                    });
                                    return _el$19;
                                }
                            }), null);
                            insert(_el$7, createComponent(AssetPanel, {
                                onFocus: storeFocus,
                                close: function close() {
                                    setOpenPanel(false);
                                    restoreFocus();
                                    return true;
                                },
                                get open() {
                                    return openPanel();
                                },
                                get item() {
                                    return heroContent();
                                }
                            }), null);
                            effect(function(_p$) {
                                var _v$3 = bundleType.indexOf("LEGACY") !== -1 ? 4291559679 : 16746751, _v$4 = benchmarkDone() ? 16746751 : benchmarkRunning() ? 4291559679 : 2863311615;
                                _v$3 !== _p$.e && (_p$.e = setProp(_el$16, "color", _v$3, _p$.e));
                                _v$4 !== _p$.t && (_p$.t = setProp(_el$17, "color", _v$4, _p$.t));
                                return _p$;
                            }, {
                                e: void 0,
                                t: void 0
                            });
                            return _el$7;
                        }
                    });
                });
            }
        };
    });
})();