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
    System.register([ "./index-legacy-C3CVWM6W.js" ], function(exports, module) {
        "use strict";
        var onCleanup, createSignal, useFocusStack, createEffect, renderer, debounce, setGlobalBackground, on, activeElement, createComponent, Show, createElement, insertNode, setProp, createTextNode, insert, ContentBlock, LazyColumn, LazyRow, Hero, TitleRow, styles, memo, AssetPanel, effect, resetCounter, batch, use;
        return {
            setters: [ function(module) {
                onCleanup = module.U;
                createSignal = module.b;
                useFocusStack = module.J;
                createEffect = module.i;
                renderer = module.aa;
                debounce = module.D;
                setGlobalBackground = module.s;
                on = module.j;
                activeElement = module.G;
                createComponent = module.l;
                Show = module.S;
                createElement = module.c;
                insertNode = module.n;
                setProp = module.a;
                createTextNode = module.p;
                insert = module.k;
                ContentBlock = module.H;
                LazyColumn = module.a5;
                LazyRow = module.L;
                Hero = module.ab;
                TitleRow = module.a6;
                styles = module.O;
                memo = module.N;
                AssetPanel = module.ac;
                effect = module.m;
                resetCounter = module.ad;
                batch = module.f;
                use = module.v;
            } ],
            execute: function execute() {
                var TOTAL_CYCLES = 2;
                var NAV_DELAY_MS = 300;
                var Benchmark = exports("default", function(props) {
                    var cancelled = false;
                    onCleanup(function() {
                        cancelled = true;
                    });
                    var _createSignal = createSignal({}), _createSignal2 = _slicedToArray(_createSignal, 2), heroContent = _createSignal2[0], setHeroContent = _createSignal2[1];
                    var _createSignal3 = createSignal(false), _createSignal4 = _slicedToArray(_createSignal3, 2), openPanel = _createSignal4[0], setOpenPanel = _createSignal4[1];
                    var _useFocusStack = useFocusStack(), storeFocus = _useFocusStack.storeFocus, restoreFocus = _useFocusStack.restoreFocus;
                    var contentBlock, solidLogo, firstRun = true;
                    var columnRef;
                    var _createSignal5 = createSignal("Waiting for data..."), _createSignal6 = _slicedToArray(_createSignal5, 2), benchmarkStatus = _createSignal6[0], setBenchmarkStatus = _createSignal6[1];
                    var _createSignal7 = createSignal(false), _createSignal8 = _slicedToArray(_createSignal7, 2), benchmarkRunning = _createSignal8[0], setBenchmarkRunning = _createSignal8[1];
                    var _createSignal9 = createSignal(false), _createSignal0 = _slicedToArray(_createSignal9, 2), benchmarkDone = _createSignal0[0], setBenchmarkDone = _createSignal0[1];
                    var _createSignal1 = createSignal(false), _createSignal10 = _slicedToArray(_createSignal1, 2), dataLoaded = _createSignal10[0], setDataLoaded = _createSignal10[1];
                    var _createSignal11 = createSignal(null), _createSignal12 = _slicedToArray(_createSignal11, 2), renderTime = _createSignal12[0], setRenderTime = _createSignal12[1];
                    var fpsValues = [];
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
                            }
                        });
                    }
                    function simulateKeyDown(key) {
                        var event = new KeyboardEvent("keydown", {
                            key: key,
                            code: key === "ArrowDown" ? "ArrowDown" : "ArrowUp",
                            bubbles: true,
                            cancelable: true
                        });
                        document.dispatchEvent(event);
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
                            var totalRows, cycle, i, _i, sum, avg, min, max;
                            return _regenerator().w(function(_context) {
                                while (1) switch (_context.n) {
                                  case 0:
                                    resetCounter();
                                    totalRows = props.data.rows.length;
                                    if (!(totalRows === 0)) {
                                        _context.n = 1;
                                        break;
                                    }
                                    setBenchmarkStatus("No rows to benchmark");
                                    return _context.a(2);

                                  case 1:
                                    fpsValues = [];
                                    setBenchmarkRunning(true);
                                    setBenchmarkDone(false);
                                    attachFpsListener();
                                    setBenchmarkStatus("Starting benchmark...");
                                    _context.n = 2;
                                    return sleep(1500);

                                  case 2:
                                    cycle = 0;

                                  case 3:
                                    if (!(cycle < TOTAL_CYCLES)) {
                                        _context.n = 14;
                                        break;
                                    }
                                    if (!cancelled) {
                                        _context.n = 4;
                                        break;
                                    }
                                    return _context.a(2);

                                  case 4:
                                    i = 0;

                                  case 5:
                                    if (!(i < totalRows - 1)) {
                                        _context.n = 8;
                                        break;
                                    }
                                    if (!cancelled) {
                                        _context.n = 6;
                                        break;
                                    }
                                    return _context.a(2);

                                  case 6:
                                    setBenchmarkStatus("Cycle ".concat(cycle + 1, "/").concat(TOTAL_CYCLES, " - Down ").concat(i + 1, "/").concat(totalRows - 1));
                                    simulateKeyDown("ArrowDown");
                                    _context.n = 7;
                                    return sleep(NAV_DELAY_MS);

                                  case 7:
                                    i++;
                                    _context.n = 5;
                                    break;

                                  case 8:
                                    if (!cancelled) {
                                        _context.n = 9;
                                        break;
                                    }
                                    return _context.a(2);

                                  case 9:
                                    _i = 0;

                                  case 10:
                                    if (!(_i < totalRows - 1)) {
                                        _context.n = 13;
                                        break;
                                    }
                                    if (!cancelled) {
                                        _context.n = 11;
                                        break;
                                    }
                                    return _context.a(2);

                                  case 11:
                                    setBenchmarkStatus("Cycle ".concat(cycle + 1, "/").concat(TOTAL_CYCLES, " - Up ").concat(_i + 1, "/").concat(totalRows - 1));
                                    simulateKeyDown("ArrowUp");
                                    _context.n = 12;
                                    return sleep(NAV_DELAY_MS);

                                  case 12:
                                    _i++;
                                    _context.n = 10;
                                    break;

                                  case 13:
                                    cycle++;
                                    _context.n = 3;
                                    break;

                                  case 14:
                                    if (!cancelled) {
                                        _context.n = 15;
                                        break;
                                    }
                                    return _context.a(2);

                                  case 15:
                                    batch(function() {
                                        setBenchmarkDone(true);
                                        setBenchmarkRunning(false);
                                    });
                                    if (fpsValues.length > 0) {
                                        sum = fpsValues.reduce(function(a, b) {
                                            return a + b;
                                        }, 0);
                                        avg = sum / fpsValues.length;
                                        min = Math.min.apply(Math, _toConsumableArray(fpsValues));
                                        max = Math.max.apply(Math, _toConsumableArray(fpsValues));
                                        setBenchmarkStatus("Avg: ".concat(avg.toFixed(1), " FPS  |  Min: ").concat(min.toFixed(1), "  |  Max: ").concat(max.toFixed(1), "  |  Samples: ").concat(fpsValues.length));
                                    } else {
                                        setBenchmarkStatus("Done - No FPS samples collected");
                                    }

                                  case 16:
                                    return _context.a(2);
                                }
                            }, _callee);
                        }));
                        return _runBenchmark.apply(this, arguments);
                    }
                    createEffect(function() {
                        var _props$data;
                        var rows = (_props$data = props.data) === null || _props$data === void 0 ? void 0 : _props$data.rows;
                        if (!rows || rows.length === 0) return;
                        var firstItems = rows[0].items();
                        if (firstItems && firstItems.length > 0) {
                            if (!dataLoaded()) {
                                var startTime = performance.now();
                                setDataLoaded(true);
                                renderer.on("idle", function() {
                                    if (renderTime() === null) {
                                        setRenderTime(performance.now() - startTime);
                                    }
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
                    return createComponent(Show, {
                        get when() {
                            return dataLoaded();
                        },
                        get fallback() {
                            return function() {
                                var _el$12 = createElement("text");
                                insertNode(_el$12, createTextNode("Loading Data..."));
                                setProp(_el$12, "x", 960);
                                setProp(_el$12, "y", 540);
                                setProp(_el$12, "fontSize", 40);
                                setProp(_el$12, "color", 4294967295);
                                setProp(_el$12, "mount", .5);
                                return _el$12;
                            }();
                        },
                        get children() {
                            var _el$ = createElement("view"), _el$2 = createElement("view"), _el$3 = createElement("text"), _el$5 = createElement("view"), _el$6 = createElement("view"), _el$7 = createElement("text"), _el$9 = createElement("view"), _el$0 = createElement("text"), _el$10 = createElement("text"), _el$11 = createElement("text");
                            insertNode(_el$, _el$2);
                            insertNode(_el$, _el$9);
                            setProp(_el$, "forwardFocus", 2);
                            insertNode(_el$2, _el$3);
                            insertNode(_el$2, _el$5);
                            insertNode(_el$2, _el$6);
                            insertNode(_el$2, _el$7);
                            var _ref$ = solidLogo;
                            typeof _ref$ === "function" ? use(_ref$, _el$2) : solidLogo = _el$2;
                            setProp(_el$2, "width", 300);
                            setProp(_el$2, "height", 150);
                            setProp(_el$2, "x", 162);
                            setProp(_el$2, "y", 80);
                            setProp(_el$2, "zIndex", 105);
                            insertNode(_el$3, createTextNode("Built With:"));
                            setProp(_el$3, "x", 80);
                            setProp(_el$3, "fontSize", 28);
                            setProp(_el$3, "color", 4143380121);
                            setProp(_el$5, "y", 32);
                            setProp(_el$5, "src", "./assets/solidWord.png");
                            setProp(_el$5, "width", 280);
                            setProp(_el$5, "height", 52);
                            setProp(_el$6, "x", 0);
                            setProp(_el$6, "y", 110);
                            setProp(_el$6, "src", "./assets/tmdb.png");
                            setProp(_el$6, "width", 80);
                            setProp(_el$6, "height", 41);
                            insertNode(_el$7, createTextNode("This product uses the TMDB API but is not endorsed or certified by TMDB."));
                            setProp(_el$7, "x", 90);
                            setProp(_el$7, "y", 110);
                            setProp(_el$7, "contain", "width");
                            setProp(_el$7, "width", 160);
                            setProp(_el$7, "fontSize", 12);
                            setProp(_el$7, "color", 4143380121);
                            insert(_el$, createComponent(ContentBlock, {
                                ref: function ref(r$) {
                                    var _ref$2 = contentBlock;
                                    typeof _ref$2 === "function" ? _ref$2(r$) : contentBlock = r$;
                                },
                                y: 300,
                                x: 162,
                                get content() {
                                    return heroContent();
                                }
                            }), _el$9);
                            insert(_el$, createComponent(LazyColumn, {
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
                                    return styles.Column;
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
                            }), _el$9);
                            insertNode(_el$9, _el$0);
                            insertNode(_el$9, _el$10);
                            insertNode(_el$9, _el$11);
                            setProp(_el$9, "x", 610);
                            setProp(_el$9, "y", 20);
                            setProp(_el$9, "zIndex", 200);
                            setProp(_el$9, "style", overlayBgStyle);
                            insertNode(_el$0, createTextNode("Benchmark (version: ###)"));
                            setProp(_el$0, "x", 20);
                            setProp(_el$0, "y", 16);
                            setProp(_el$0, "style", overlayTitleStyle);
                            setProp(_el$10, "x", 20);
                            setProp(_el$10, "y", 54);
                            setProp(_el$10, "contain", "width");
                            setProp(_el$10, "width", 660);
                            setProp(_el$10, "style", overlayStatusStyle);
                            insert(_el$10, benchmarkStatus);
                            setProp(_el$11, "x", 20);
                            setProp(_el$11, "y", 92);
                            setProp(_el$11, "style", overlayStatusStyle);
                            setProp(_el$11, "color", 16746751);
                            insert(_el$11, function() {
                                var _c$ = memo(function() {
                                    return renderTime() !== null;
                                });
                                return function() {
                                    var _renderTime;
                                    return _c$() ? "Initial Render: ".concat((_renderTime = renderTime()) === null || _renderTime === void 0 ? void 0 : _renderTime.toFixed(2), "ms") : "Rendering...";
                                };
                            }());
                            insert(_el$, createComponent(AssetPanel, {
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
                            effect(function(_$p) {
                                return setProp(_el$10, "color", benchmarkDone() ? 16746751 : benchmarkRunning() ? 4291559679 : 2863311615, _$p);
                            });
                            return _el$;
                        }
                    });
                });
            }
        };
    });
})();
//# sourceMappingURL=Benchmark-legacy-BnC_B6Bo.js.map
