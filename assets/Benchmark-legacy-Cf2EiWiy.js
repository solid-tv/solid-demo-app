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
    function _toConsumableArray(r) {
        return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
    }
    function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _iterableToArray(r) {
        if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
    }
    function _arrayWithoutHoles(r) {
        if (Array.isArray(r)) return _arrayLikeToArray(r);
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
    System.register([ "./render-legacy-CAqcHxfG.js", "./Lazy-legacy-EwhyBzpS.js", "./FPSCounter-legacy-BhUGeBEH.js", "./ContentBlock-legacy-CPp-Akn0.js", "./createFocusStack-legacy-CHM3F__c.js", "./components-legacy-BePOWnfK.js", "./styles-legacy-BOzjtbic.js", "./state-legacy-xc5BISXR.js", "./dist-legacy-BPFoSfrd.js" ], function(_export, _context) {
        "use strict";
        var For, batch, Show, activeElement, onCleanup, createEffect, on, createElement, effect, memo, use, createComponent, insert, setProp, createSignal, createTextNode, insertNode, renderer, LazyRow, LazyColumn, resetCounter, ContentBlock, useFocusStack, TitleRow, Hero, AssetPanel, styles_default, setGlobalBackground, debounce, TOTAL_CYCLES, NAV_DELAY_MS, Benchmark;
        return {
            setters: [ function(_renderLegacy001Js) {
                For = _renderLegacy001Js.A;
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
                TitleRow = _componentsLegacy00dJs.c;
                Hero = _componentsLegacy00dJs.i;
                AssetPanel = _componentsLegacy00dJs.t;
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
                _export("default", Benchmark = function Benchmark(props) {
                    var _window$bundleType;
                    var cancelled = false;
                    onCleanup(function() {
                        cancelled = true;
                    });
                    var _createSignal = createSignal({}), _createSignal2 = _slicedToArray(_createSignal, 2), heroContent = _createSignal2[0], setHeroContent = _createSignal2[1];
                    var _createSignal3 = createSignal(false), _createSignal4 = _slicedToArray(_createSignal3, 2), openPanel = _createSignal4[0], setOpenPanel = _createSignal4[1];
                    var _useFocusStack = useFocusStack(), storeFocus = _useFocusStack.storeFocus, restoreFocus = _useFocusStack.restoreFocus;
                    var contentBlock, solidLogo, firstRun = true;
                    var columnRef;
                    var bundleType = (_window$bundleType = window.bundleType) !== null && _window$bundleType !== void 0 ? _window$bundleType : "unknown";
                    var _createSignal5 = createSignal("Waiting for data..."), _createSignal6 = _slicedToArray(_createSignal5, 2), benchmarkStatus = _createSignal6[0], setBenchmarkStatus = _createSignal6[1];
                    var _createSignal7 = createSignal(false), _createSignal8 = _slicedToArray(_createSignal7, 2), benchmarkRunning = _createSignal8[0], setBenchmarkRunning = _createSignal8[1];
                    var _createSignal9 = createSignal(false), _createSignal0 = _slicedToArray(_createSignal9, 2), benchmarkDone = _createSignal0[0], setBenchmarkDone = _createSignal0[1];
                    var _createSignal1 = createSignal(false), _createSignal10 = _slicedToArray(_createSignal1, 2), dataLoaded = _createSignal10[0], setDataLoaded = _createSignal10[1];
                    var _createSignal11 = createSignal(null), _createSignal12 = _slicedToArray(_createSignal11, 2), renderTime = _createSignal12[0], setRenderTime = _createSignal12[1];
                    var _createSignal13 = createSignal(null), _createSignal14 = _slicedToArray(_createSignal13, 2), capabilities = _createSignal14[0], setCapabilities = _createSignal14[1];
                    var _createSignal15 = createSignal(null), _createSignal16 = _slicedToArray(_createSignal15, 2), drawStats = _createSignal16[0], setDrawStats = _createSignal16[1];
                    var _createSignal17 = createSignal(null), _createSignal18 = _slicedToArray(_createSignal17, 2), contextSpy = _createSignal18[0], setContextSpy = _createSignal18[1];
                    var fpsValues = [];
                    var maxRenderOps = 0;
                    var maxQuads = 0;
                    var lastContextSpy = null;
                    var fpsListenerAttached = false;
                    function attachFpsListener() {
                        if (fpsListenerAttached) return;
                        var root = renderer;
                        if (!root) return;
                        fpsListenerAttached = true;
                        root.on("fpsUpdate", function(_target, fpsData) {
                            var fps = typeof fpsData === "number" ? fpsData : fpsData.fps;
                            if (fps > 5 && benchmarkRunning()) {
                                fpsValues.push(fps);
                                if (_typeof(fpsData) === "object" && fpsData) {
                                    if (typeof fpsData.renderOps === "number") maxRenderOps = Math.max(maxRenderOps, fpsData.renderOps);
                                    if (typeof fpsData.quads === "number") maxQuads = Math.max(maxQuads, fpsData.quads);
                                    if (fpsData.contextSpyData) {
                                        lastContextSpy = fpsData.contextSpyData;
                                        console.log(lastContextSpy);
                                    }
                                    if (fpsData.capabilities && !capabilities()) setCapabilities(fpsData.capabilities);
                                }
                            }
                        });
                    }
                    function simulateKeyDown(key) {
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
                            document.dispatchEvent(event);
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
                            var totalRows, cycle, i, _i, avg, min, max;
                            return _regenerator().w(function(_context2) {
                                while (1) switch (_context2.n) {
                                  case 0:
                                    resetCounter();
                                    totalRows = props.data.rows.length;
                                    if (!(totalRows === 0)) {
                                        _context2.n = 1;
                                        break;
                                    }
                                    setBenchmarkStatus("No rows to benchmark");
                                    return _context2.a(2);

                                  case 1:
                                    fpsValues = [];
                                    maxRenderOps = 0;
                                    maxQuads = 0;
                                    lastContextSpy = null;
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
                                    simulateKeyDown("ArrowDown");
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
                                    _i = 0;

                                  case 10:
                                    if (!(_i < totalRows - 1)) {
                                        _context2.n = 13;
                                        break;
                                    }
                                    if (!cancelled) {
                                        _context2.n = 11;
                                        break;
                                    }
                                    return _context2.a(2);

                                  case 11:
                                    setBenchmarkStatus("Cycle ".concat(cycle + 1, "/").concat(TOTAL_CYCLES, " - Up ").concat(_i + 1, "/").concat(totalRows - 1));
                                    simulateKeyDown("ArrowUp");
                                    _context2.n = 12;
                                    return sleep(NAV_DELAY_MS);

                                  case 12:
                                    _i++;
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
                                    batch(function() {
                                        setBenchmarkDone(true);
                                        setBenchmarkRunning(false);
                                    });
                                    setDrawStats({
                                        renderOps: maxRenderOps,
                                        quads: maxQuads
                                    });
                                    setContextSpy(lastContextSpy);
                                    if (fpsValues.length > 0) {
                                        avg = fpsValues.reduce(function(a, b) {
                                            return a + b;
                                        }, 0) / fpsValues.length;
                                        min = Math.min.apply(Math, _toConsumableArray(fpsValues));
                                        max = Math.max.apply(Math, _toConsumableArray(fpsValues));
                                        setBenchmarkStatus("Avg: ".concat(avg.toFixed(1), " FPS  |  Min: ").concat(min.toFixed(1), "  |  Max: ").concat(max.toFixed(1), "  |  Samples: ").concat(fpsValues.length));
                                    } else setBenchmarkStatus("Done - No FPS samples collected");

                                  case 16:
                                    return _context2.a(2);
                                }
                            }, _callee);
                        }));
                        return _runBenchmark.apply(this, arguments);
                    }
                    createEffect(function() {
                        var _props$data;
                        var rows = (_props$data = props.data) == null ? void 0 : _props$data.rows;
                        if (!rows || rows.length === 0) return;
                        var firstItems = rows[0].items();
                        if (firstItems && firstItems.length > 0) {
                            if (!dataLoaded()) {
                                var startTime = performance.now();
                                setDataLoaded(true);
                                renderer.on("idle", function() {
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
                        color: 255,
                        borderRadius: 12
                    };
                    var OVERLAY_WIDTH = 560;
                    var ROW_H = 28;
                    var resultsLabelStyle = {
                        fontFamily: "Roboto",
                        fontSize: 20,
                        lineHeight: 28,
                        color: 2863311615
                    };
                    var resultsValueStyle = {
                        fontFamily: "Roboto",
                        fontSize: 20,
                        lineHeight: 28,
                        color: 4294967295
                    };
                    var ResultRow = function ResultRow(rowProps) {
                        return function() {
                            var _el$ = createElement("view"), _el$2 = createElement("text"), _el$3 = createElement("text");
                            insertNode(_el$, _el$2);
                            insertNode(_el$, _el$3);
                            setProp(_el$2, "x", 20);
                            setProp(_el$2, "style", resultsLabelStyle);
                            insert(_el$2, function() {
                                return rowProps.label;
                            });
                            setProp(_el$3, "x", 340);
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
                    var webGlLabel = function webGlLabel(caps) {
                        var _caps$webGlVersion;
                        return caps.renderMode === "webgl" ? "WebGL ".concat((_caps$webGlVersion = caps.webGlVersion) !== null && _caps$webGlVersion !== void 0 ? _caps$webGlVersion : "?") : "Canvas2D";
                    };
                    var glEntries = function glEntries() {
                        var spy = contextSpy();
                        if (!spy) return [];
                        return Object.entries(spy).sort(function(a, b) {
                            return b[1] - a[1];
                        });
                    };
                    var GL_HEADER_Y = 116;
                    var glStartY = 144;
                    var glRowsHeight = function glRowsHeight() {
                        return Math.max(glEntries().length, 1) * ROW_H;
                    };
                    var dividerY = function dividerY() {
                        return glStartY + glRowsHeight() + 8;
                    };
                    var capsStartY = function capsStartY() {
                        return dividerY() + 16;
                    };
                    var overlayHeight = function overlayHeight() {
                        return capsStartY() + 5 * ROW_H + 16;
                    };
                    return createComponent(Show, {
                        get when() {
                            return dataLoaded();
                        },
                        get fallback() {
                            return function() {
                                var _el$22 = createElement("text");
                                insertNode(_el$22, createTextNode("Loading Data..."));
                                setProp(_el$22, "x", 960);
                                setProp(_el$22, "y", 540);
                                setProp(_el$22, "fontSize", 40);
                                setProp(_el$22, "color", 4294967295);
                                setProp(_el$22, "mount", .5);
                                return _el$22;
                            }();
                        },
                        get children() {
                            var _el$4 = createElement("view"), _el$5 = createElement("view"), _el$6 = createElement("text"), _el$8 = createElement("view"), _el$9 = createElement("view"), _el$0 = createElement("text"), _el$10 = createElement("view"), _el$11 = createElement("text"), _el$13 = createElement("text"), _el$14 = createElement("text"), _el$15 = createElement("text");
                            insertNode(_el$4, _el$5);
                            insertNode(_el$4, _el$10);
                            setProp(_el$4, "forwardFocus", 2);
                            insertNode(_el$5, _el$6);
                            insertNode(_el$5, _el$8);
                            insertNode(_el$5, _el$9);
                            insertNode(_el$5, _el$0);
                            var _ref$ = solidLogo;
                            typeof _ref$ === "function" ? use(_ref$, _el$5) : solidLogo = _el$5;
                            setProp(_el$5, "width", 300);
                            setProp(_el$5, "height", 150);
                            setProp(_el$5, "x", 162);
                            setProp(_el$5, "y", 80);
                            setProp(_el$5, "zIndex", 105);
                            insertNode(_el$6, createTextNode("Built With:"));
                            setProp(_el$6, "x", 80);
                            setProp(_el$6, "fontSize", 28);
                            setProp(_el$6, "color", 4143380121);
                            setProp(_el$8, "y", 32);
                            setProp(_el$8, "src", "./assets/solidWord.png");
                            setProp(_el$8, "width", 280);
                            setProp(_el$8, "height", 52);
                            setProp(_el$9, "x", 0);
                            setProp(_el$9, "y", 110);
                            setProp(_el$9, "src", "./assets/tmdb.png");
                            setProp(_el$9, "width", 80);
                            setProp(_el$9, "height", 41);
                            insertNode(_el$0, createTextNode("This product uses the TMDB API but is not endorsed or certified by TMDB."));
                            setProp(_el$0, "x", 90);
                            setProp(_el$0, "y", 110);
                            setProp(_el$0, "contain", "width");
                            setProp(_el$0, "width", 160);
                            setProp(_el$0, "fontSize", 12);
                            setProp(_el$0, "color", 4143380121);
                            insert(_el$4, createComponent(ContentBlock, {
                                ref: function ref(r$) {
                                    var _ref$2 = contentBlock;
                                    typeof _ref$2 === "function" ? _ref$2(r$) : contentBlock = r$;
                                },
                                y: 300,
                                x: 162,
                                get content() {
                                    return heroContent();
                                }
                            }), _el$10);
                            insert(_el$4, createComponent(LazyColumn, {
                                ref: function ref(r$) {
                                    var _ref$3 = columnRef;
                                    typeof _ref$3 === "function" ? _ref$3(r$) : columnRef = r$;
                                },
                                y: 500,
                                upCount: 3,
                                get each() {
                                    return props.data.rows;
                                },
                                id: "BenchmarkColumn",
                                onSelectedChanged: onRowChanged,
                                onEnter: function onEnter() {
                                    return setOpenPanel(true);
                                },
                                get autofocus() {
                                    return props.data.rows[0].items();
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
                            }), _el$10);
                            insertNode(_el$10, _el$11);
                            insertNode(_el$10, _el$13);
                            insertNode(_el$10, _el$14);
                            insertNode(_el$10, _el$15);
                            setProp(_el$10, "x", 610);
                            setProp(_el$10, "y", 20);
                            setProp(_el$10, "zIndex", 200);
                            setProp(_el$10, "style", overlayBgStyle);
                            insertNode(_el$11, createTextNode("Benchmark (version: ###)"));
                            setProp(_el$11, "x", 20);
                            setProp(_el$11, "y", 16);
                            setProp(_el$11, "style", overlayTitleStyle);
                            setProp(_el$13, "x", 360);
                            setProp(_el$13, "y", 20);
                            setProp(_el$13, "width", 320);
                            setProp(_el$13, "contain", "width");
                            setProp(_el$13, "textAlign", "right");
                            setProp(_el$13, "fontSize", 24);
                            insert(_el$13, bundleType);
                            setProp(_el$14, "x", 20);
                            setProp(_el$14, "y", 54);
                            setProp(_el$14, "contain", "width");
                            setProp(_el$14, "width", 660);
                            setProp(_el$14, "style", overlayStatusStyle);
                            insert(_el$14, benchmarkStatus);
                            setProp(_el$15, "x", 20);
                            setProp(_el$15, "y", 92);
                            setProp(_el$15, "style", overlayStatusStyle);
                            setProp(_el$15, "color", 16746751);
                            insert(_el$15, function() {
                                var _c$ = memo(function() {
                                    return renderTime() !== null;
                                });
                                return function() {
                                    var _renderTime;
                                    return _c$() ? "Initial Render: ".concat((_renderTime = renderTime()) == null ? void 0 : _renderTime.toFixed(2), "ms") : "Rendering...";
                                };
                            }());
                            insert(_el$4, createComponent(Show, {
                                get when() {
                                    return benchmarkDone();
                                },
                                get children() {
                                    var _el$16 = createElement("view"), _el$17 = createElement("text"), _el$19 = createElement("text"), _el$21 = createElement("view");
                                    insertNode(_el$16, _el$17);
                                    insertNode(_el$16, _el$19);
                                    insertNode(_el$16, _el$21);
                                    setProp(_el$16, "x", 40);
                                    setProp(_el$16, "y", 20);
                                    setProp(_el$16, "zIndex", 8e3);
                                    setProp(_el$16, "width", OVERLAY_WIDTH);
                                    setProp(_el$16, "style", resultsBgStyle);
                                    insertNode(_el$17, createTextNode("Test Results"));
                                    setProp(_el$17, "x", 20);
                                    setProp(_el$17, "y", 16);
                                    setProp(_el$17, "style", overlayTitleStyle);
                                    insert(_el$16, createComponent(ResultRow, {
                                        y: 60,
                                        label: "Draw Calls",
                                        get value() {
                                            return memo(function() {
                                                return !!drawStats();
                                            })() ? "".concat(drawStats().renderOps) : "—";
                                        }
                                    }), _el$19);
                                    insert(_el$16, createComponent(ResultRow, {
                                        y: 88,
                                        label: "Quads",
                                        get value() {
                                            return memo(function() {
                                                return !!drawStats();
                                            })() ? "".concat(drawStats().quads) : "—";
                                        }
                                    }), _el$19);
                                    insertNode(_el$19, createTextNode("GL Calls / frame"));
                                    setProp(_el$19, "x", 20);
                                    setProp(_el$19, "y", GL_HEADER_Y);
                                    setProp(_el$19, "style", resultsLabelStyle);
                                    insert(_el$16, createComponent(Show, {
                                        get when() {
                                            return glEntries().length > 0;
                                        },
                                        get fallback() {
                                            return function() {
                                                var _el$24 = createElement("text");
                                                insertNode(_el$24, createTextNode("off (?contextSpy=true)"));
                                                setProp(_el$24, "x", 200);
                                                setProp(_el$24, "y", GL_HEADER_Y);
                                                setProp(_el$24, "style", resultsValueStyle);
                                                return _el$24;
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
                                    }), _el$21);
                                    setProp(_el$21, "width", OVERLAY_WIDTH - 40);
                                    setProp(_el$21, "height", 1);
                                    setProp(_el$21, "x", 20);
                                    setProp(_el$21, "color", 4294967091);
                                    insert(_el$16, createComponent(Show, {
                                        get when() {
                                            return capabilities();
                                        },
                                        get fallback() {
                                            return function() {
                                                var _el$26 = createElement("text");
                                                insertNode(_el$26, createTextNode("Capabilities unavailable"));
                                                setProp(_el$26, "x", 20);
                                                setProp(_el$26, "style", resultsLabelStyle);
                                                effect(function(_$p) {
                                                    return setProp(_el$26, "y", capsStartY(), _$p);
                                                });
                                                return _el$26;
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
                                                label: "Vertex Array Obj",
                                                get value() {
                                                    return capabilities().vertexArrayObject ? "Yes" : "No";
                                                }
                                            }), createComponent(ResultRow, {
                                                get y() {
                                                    return capsStartY() + 3 * ROW_H;
                                                },
                                                label: "Max Texture Size",
                                                get value() {
                                                    return "".concat(capabilities().maxTextureSize);
                                                }
                                            }), createComponent(ResultRow, {
                                                get y() {
                                                    return capsStartY() + 4 * ROW_H;
                                                },
                                                label: "Max Texture Units",
                                                get value() {
                                                    return "".concat(capabilities().maxTextureUnits);
                                                }
                                            }) ];
                                        }
                                    }), null);
                                    effect(function(_p$) {
                                        var _v$ = overlayHeight(), _v$2 = dividerY();
                                        _v$ !== _p$.e && (_p$.e = setProp(_el$16, "height", _v$, _p$.e));
                                        _v$2 !== _p$.t && (_p$.t = setProp(_el$21, "y", _v$2, _p$.t));
                                        return _p$;
                                    }, {
                                        e: void 0,
                                        t: void 0
                                    });
                                    return _el$16;
                                }
                            }), null);
                            insert(_el$4, createComponent(AssetPanel, {
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
                                var _v$3 = bundleType.includes("LEGACY") ? 4291559679 : 16746751, _v$4 = benchmarkDone() ? 16746751 : benchmarkRunning() ? 4291559679 : 2863311615;
                                _v$3 !== _p$.e && (_p$.e = setProp(_el$13, "color", _v$3, _p$.e));
                                _v$4 !== _p$.t && (_p$.t = setProp(_el$14, "color", _v$4, _p$.t));
                                return _p$;
                            }, {
                                e: void 0,
                                t: void 0
                            });
                            return _el$4;
                        }
                    });
                });
            }
        };
    });
})();
//# sourceMappingURL=Benchmark-legacy-Cf2EiWiy.js.map