!function() {
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
                    d: function(t, r) {
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
        }), (_regenerator = function() {
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
        _regeneratorDefine2 = function(e, r, n, t) {
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
    function _callSuper(t, o, e) {
        return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
    }
    function _possibleConstructorReturn(t, e) {
        if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        return function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e;
        }(t);
    }
    function _isNativeReflectConstruct() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        } catch (t) {}
        return (_isNativeReflectConstruct = function() {
            return !!t;
        })();
    }
    function _getPrototypeOf(t) {
        return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t);
        }, _getPrototypeOf(t);
    }
    function _inherits(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(t, "prototype", {
            writable: !1
        }), e && _setPrototypeOf(t, e);
    }
    function _setPrototypeOf(t, e) {
        return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
            return t.__proto__ = e, t;
        }, _setPrototypeOf(t, e);
    }
    function _defineProperties(e, r) {
        for (var t = 0; t < r.length; t++) {
            var o = r[t];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(e, _toPropertyKey(o.key), o);
        }
    }
    function _createClass(e, r, t) {
        return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
            writable: !1
        }), e;
    }
    function _toConsumableArray(r) {
        return function(r) {
            if (Array.isArray(r)) return _arrayLikeToArray(r);
        }(r) || function(r) {
            if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
        }(r) || _unsupportedIterableToArray(r) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
    }
    function _createForOfIteratorHelper(r, e) {
        var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
        if (!t) {
            if (Array.isArray(r) || (t = function(r, a) {
                if (r) {
                    if ("string" == typeof r) return _arrayLikeToArray2(r, a);
                    var t = {}.toString.call(r).slice(8, -1);
                    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray2(r, a) : void 0;
                }
            }(r)) || e && r && "number" == typeof r.length) {
                t && (r = t);
                var _n = 0, F = function() {};
                return {
                    s: F,
                    n: function() {
                        return _n >= r.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: r[_n++]
                        };
                    },
                    e: function(r) {
                        throw r;
                    },
                    f: F
                };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var o, a = !0, u = !1;
        return {
            s: function() {
                t = t.call(r);
            },
            n: function() {
                var r = t.next();
                return a = r.done, r;
            },
            e: function(r) {
                u = !0, o = r;
            },
            f: function() {
                try {
                    a || null == t.return || t.return();
                } finally {
                    if (u) throw o;
                }
            }
        };
    }
    function _arrayLikeToArray2(r, a) {
        (null == a || a > r.length) && (a = r.length);
        for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
        return n;
    }
    function ownKeys(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            r && (o = o.filter(function(r) {
                return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })), t.push.apply(t, o);
        }
        return t;
    }
    function _objectSpread(e) {
        for (var r = 1; r < arguments.length; r++) {
            var t = null != arguments[r] ? arguments[r] : {};
            r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
                _defineProperty(e, r, t[r]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
            });
        }
        return e;
    }
    function _defineProperty(e, r, t) {
        return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[r] = t, e;
    }
    function _toPropertyKey(t) {
        var i = function(t, r) {
            if ("object" != _typeof(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var i = e.call(t, r || "default");
                if ("object" != _typeof(i)) return i;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === r ? String : Number)(t);
        }(t, "string");
        return "symbol" == _typeof(i) ? i : i + "";
    }
    function _slicedToArray(r, e) {
        return function(r) {
            if (Array.isArray(r)) return r;
        }(r) || function(r, l) {
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
        }(r, e) || _unsupportedIterableToArray(r, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
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
    function _typeof(o) {
        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
            return typeof o;
        } : function(o) {
            return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
        }, _typeof(o);
    }
    System.register([ "./rolldown-runtime-legacy-c5pELP7v.js", "./render-legacy-dLzA91Db.js", "./FPSCounter-legacy-CCOet21C.js", "./utils-legacy-KzeN2ceP.js", "./mergeProps-legacy-wREr8h3i.js", "./announcer-legacy-wcWy_wWT.js", "./web-legacy-CZsMP84a.js", "./Lazy-legacy-fV0h1mPk.js", "./chainFunctions-legacy-BvO5JaCH.js", "./Column-legacy-vZ9l9pny.js", "./ContentBlock-legacy-CfNZlu1F.js", "./createFocusStack-legacy-yGNACtiA.js", "./components-legacy-DpfK7YJT.js", "./Icon-legacy-BnnHx1nN.js", "./routing-legacy-DxbRiyoD.js", "./theme-legacy-Bdf29FvE.js", "./styles-legacy--qMSUlWV.js", "./state-legacy-C4TEpoVI.js", "./dist-legacy-DQONkt3w.js", "./api-legacy-BrsqDpuo.js", "./ItemFormatter-legacy-CSpFnyiZ.js" ], function(_export, _context) {
        var __exportAll, onMount, createIndexBuffer, DIRTY_QUAD_BUFFER, isElementNode, Config, MAX_QUAD_BUFFER_SIZE, MAX_QUADS, compareRect, createRoot, createMemo, createWebGLContext, batch, getNormalizedRgbaComponents, getListener, children, isHTMLImageElement, Show, calcFactoredRadiusArray, activeElement, UNIT_TEXTURE_COORDS, clampUnit, onCleanup, TextureType, hasFocus, isFunction, UpdateType, createEffect, createResource, mergeProps, getOwner, on, ElementNode, createElement, loadFonts, effect, takeCanvasPrefetch, memo, rootNode, use, CoreShaderNode, spread, normalizeFontMetrics, createComponent, untrack, createTextureCoords, WORDS_PER_QUAD, insert, takeSdfPrefetch, setProp, mapTextLayout, sharedConfig, createRenderer, defaultFontMetrics, createSignal, createTextNode, runWithOwner, insertNode, focusPath, uploadCompressedTexture, renderer, useFocusManager, createComputed, closeImageBitmap, genGradientColors, LinearGradientTemplate, RoundedTemplate, HolePunchTemplate, WebGlShaderProgram, getBorderProps, Default, setupFPS, RadialGradientTemplate, FPSCounter, getShadowProps, combineStyles, clamp, mergeProps$1, createScheduled, throttle, Announcer, LazyRow, LazyColumn, withScrolling, navigableForwardFocus, navigableHandleNavigation, chainRefs, chainFunctions, Column, ContentBlock, useFocusStack, FocusStackProvider, Hero, TitleRow, Thumbnail, List, AssetPanel, Icon, saveCurrentDepth, createRouterContext, setInPreloadFn, useNavigate, notifyIfNotBlocked, keepDepth, createRouteContext, useLocation, createBeforeLeave, RouterContextObj, getIntent, usePreloadRoute, createBranches, RouteContextObj, useMatch, theme_default, styles_default, setGlobalBackground, globalBackground, debounce, getImageUrl, api_default, convertItemsToTiles, __vite_style__, CoreContextTexture, CoreRenderer, WebGlShaderNode, Rounded, props$2, RoundedWithBorder, props$1, RoundedWithBorderAndShadow, props, RoundedWithShadow, HolePunch, LinearGradient, RadialGradient, RadialProgressTemplate, RadialProgress, invisibleChars, SdfFontHandler_exports, fontCache$1, fontLoadPromises$1, normalizedMetrics$1, nodesWaitingForFont$1, initialized$1, buildKerningTable, buildGlyphMap, processFontData$1, canRenderFont$1, loadFont$1, waitingForFont$1, stopWaitingForFont$1, getFontFamilies$1, init$3, isFontLoaded$1, getFontMetrics$1, processFontMetrics$1, _getAtlas, _getFontData, _getMaxCharHeight, _getLoadedFonts, _unloadFont, measureText$1, SdfRenderOp, TRANSPARENT_TEXTURE_DATA, WebGlCtxTexture, WebGlCtxSubTexture, BufferCollection, WebGlContextWrapper, MAX_SDF_BUFFER_FLOATS, WebGlRenderer, Sdf, sdfShader, maxLayoutCacheSize$1, init$2, getSdfShader, font$1, layoutCache$1, getLayoutCacheKey, renderText$1, renderQuads$1, generateTextLayout, SdfTextRenderer, CanvasFontHandler_exports, fontFamilies, fontLoadPromises, normalizedMetrics, nodesWaitingForFont, fontCache, initialized, measureContext$1, _canRenderFont, processFontData, _loadFont, _getFontFamilies, init$1, type$1, _isFontLoaded, _waitingForFont, _stopWaitingForFont, _getFontMetrics, _processFontMetrics, _measureText, font, canvas, context, measureCanvas, measureContext, layoutCache, maxLayoutCacheSize, renderText, CanvasTextRenderer, WHITE, SCRATCH, CanvasTexture, parsedArgbColors, parsedRgbaColors, CanvasShaderNode, CanvasRenderer, doOnce, useAnnouncer, tryOnCleanup, createCallbackStack, PASSIVE, DEFAULT_MOUSE_POSITION, useMousePosition, scrollTimeout, handleScroll, columnScroll, rowStyles, createRouterComponent, createOutlet, Route, SUPPORTS_PROXY, collectDynamicParams, keepAliveElements, keepAliveRouteElements, _storeKeepAlive, storeKeepAliveRoute, createKeepAliveComponent, KeepAliveRouteInternal, keepAliveRouteCache, KeepAliveRoute, App, Browse, TMDB, Destroy, handleResults, fetchPopular, genreListCache, fetchGenreMovies, NotFound, fonts_default, cache, NavDrawer_styles_default, NavButtonTextStyles, LeftNavWrapper, __vitePreload, _low$medium$high$xhig, Player, Grid, Loops, Infinite, TMDBGrid, Portal, MatrixPage, TextPage, TextPosterPage, CreatePage, ViewportPage, PositioningPage, LayoutPage, FocusBasicsPage, KeyHandlingPage, TransitionsPage, ComponentsPage, FocusHandlingPage, GradientsPage, FlexPage, FlexGrowPage, FlexMenuPage, FlexSizePage, FlexColumnSizePage, FlexColumnPage, ButtonsMaterialPage, SuperFlexPage, Entity, People, FireboltPage, LoginPage, VirtualPage, TagsPage, ImagePerformance, LargeImagePerformance, MixedImagePerformance, TextureCompressionPerformance, ComplexFlexPage, ComplexFlexCapsPage, BenchmarkPage, RendererVersionsPage, TextCenteringPage, CountdownTimerPage, CustomButtonsPage, numImageWorkers, urlParams, numWorkers, screenSize, rendererMode, animationsEnabled, enableContextSpy, forceWebGL2, textBaseline, logicalDPR, devicePixelRatio, physicalDPR, textureProcessingTimeLimitParam;
        function hasZeroWidthSpace(space) {
            return !0 === invisibleChars.test(space);
        }
        function _calculateFontMetrics(fontFamily, fontSize) {
            var _ref, _metrics$fontBounding, _ref2, _metrics$fontBounding2, _metrics$emHeightAsce, _metrics$emHeightDesc, _metrics$emHeightAsce2, _metrics$emHeightDesc2, metrics = measureContext$1.measureText("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz");
            console.warn("Font metrics not provided for Canvas Web font ".concat(fontFamily, ". Using fallback values. It is HIGHLY recommended you use the latest version of the Lightning 3 `msdf-generator` tool to extract the default metrics for the font and provide them in the Canvas Web font definition."));
            var ascender = null !== (_ref = null !== (_metrics$fontBounding = metrics.fontBoundingBoxAscent) && void 0 !== _metrics$fontBounding ? _metrics$fontBounding : metrics.actualBoundingBoxAscent) && void 0 !== _ref ? _ref : 0, descender = null !== (_ref2 = null !== (_metrics$fontBounding2 = metrics.fontBoundingBoxDescent) && void 0 !== _metrics$fontBounding2 ? _metrics$fontBounding2 : metrics.actualBoundingBoxDescent) && void 0 !== _ref2 ? _ref2 : 0;
            return {
                ascender: ascender,
                descender: -descender,
                lineGap: (null !== (_metrics$emHeightAsce = metrics.emHeightAscent) && void 0 !== _metrics$emHeightAsce ? _metrics$emHeightAsce : 0) + (null !== (_metrics$emHeightDesc = metrics.emHeightDescent) && void 0 !== _metrics$emHeightDesc ? _metrics$emHeightDesc : 0) - (ascender + descender),
                unitsPerEm: (null !== (_metrics$emHeightAsce2 = metrics.emHeightAscent) && void 0 !== _metrics$emHeightAsce2 ? _metrics$emHeightAsce2 : 0) + (null !== (_metrics$emHeightDesc2 = metrics.emHeightDescent) && void 0 !== _metrics$emHeightDesc2 ? _metrics$emHeightDesc2 : 0)
            };
        }
        function normalizeCanvasColor(color) {
            var abgr, a, b, g, rgba, isRGBA = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], targetCache = !0 === isRGBA ? parsedRgbaColors : parsedArgbColors, out = targetCache.get(color);
            return void 0 !== out || (!0 === isRGBA ? out = "rgba(".concat((rgba = color) >>> 24 & 255, ",").concat(rgba >>> 16 & 255, ",").concat(rgba >>> 8 & 255, ",").concat((255 & rgba) / 255, ")") : (a = ((abgr = color) >>> 24 & 255) / 255, 
            b = abgr >>> 16 & 255, g = abgr >>> 8 & 255, out = "rgba(".concat(255 & abgr, ",").concat(g, ",").concat(b, ",").concat(a, ")")), 
            targetCache.set(color, out)), out;
        }
        function accessWith(valueOrFn) {
            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) args[_key - 1] = arguments[_key];
            return "function" == typeof valueOrFn ? valueOrFn.apply(void 0, args) : valueOrFn;
        }
        function makeEventListener(target, type, handler, options) {
            return target.addEventListener(type, handler, options), tryOnCleanup(target.removeEventListener.bind(target, type, handler, options));
        }
        function makeEventListenerStack(target, options) {
            var _createCallbackStack = createCallbackStack(), push = _createCallbackStack.push, execute = _createCallbackStack.execute;
            return [ function(type, handler, overwriteOptions) {
                var clear = makeEventListener(target, type, handler, null != overwriteOptions ? overwriteOptions : options);
                return push(clear), clear;
            }, onCleanup(execute) ];
        }
        function createHydratableSingletonRoot(factory) {
            var owner = getOwner(), singleton = function(factory) {
                var value, disposeRoot, detachedOwner = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : getOwner(), listeners = 0;
                return function() {
                    return listeners++, onCleanup(function() {
                        listeners--, queueMicrotask(function() {
                            !listeners && disposeRoot && (disposeRoot(), disposeRoot = value = void 0);
                        });
                    }), disposeRoot || createRoot(function(dispose) {
                        return value = factory(disposeRoot = dispose);
                    }, detachedOwner), value;
                };
            }(factory, owner);
            return function() {
                return sharedConfig.context ? createRoot(factory, owner) : singleton();
            };
        }
        function createStaticStore(init) {
            var copy = _objectSpread({}, init), store = _objectSpread({}, init), cache = {}, _loop = function(key) {
                Object.defineProperty(store, key, {
                    get: function() {
                        return function(key) {
                            var signal = cache[key];
                            if (!signal) {
                                if (!getListener()) return copy[key];
                                cache[key] = signal = createSignal(copy[key], {
                                    internal: !0
                                }), delete copy[key];
                            }
                            return signal[0]();
                        }(key);
                    },
                    enumerable: !0
                });
            };
            for (var key in init) _loop(key);
            var setValue = function(key, value) {
                var signal = cache[key];
                if (signal) return signal[1](value);
                key in copy && (copy[key] = accessWith(value, copy[key]));
            };
            return [ store, function(a, b) {
                if (null === (value = a) || "object" !== _typeof(value) && "function" != typeof value) setValue(a, b); else {
                    var entries = untrack(function() {
                        return Object.entries(accessWith(a, store));
                    });
                    batch(function() {
                        var _step, _iterator = _createForOfIteratorHelper(entries);
                        try {
                            var _loop2 = function() {
                                var _step$value = _slicedToArray(_step.value, 2), key = _step$value[0], value = _step$value[1];
                                setValue(key, function() {
                                    return value;
                                });
                            };
                            for (_iterator.s(); !(_step = _iterator.n()).done; ) _loop2();
                        } catch (err) {
                            _iterator.e(err);
                        } finally {
                            _iterator.f();
                        }
                    });
                }
                var value;
                return store;
            } ];
        }
        function createMousePosition(target) {
            var options = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, fallback = _objectSpread(_objectSpread({}, DEFAULT_MOUSE_POSITION), options.initialValue);
            var _createStaticStore2 = _slicedToArray(createStaticStore(fallback), 2), state = _createStaticStore2[0], setState = _createStaticStore2[1], attachListeners = function(el) {
                !function() {
                    var target = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window, callback = arguments.length > 1 ? arguments[1] : void 0, options = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, _options$touch = options.touch, touch = void 0 === _options$touch || _options$touch, _options$followTouch = options.followTouch, followTouch = void 0 === _options$followTouch || _options$followTouch, _makeEventListenerSta2 = _slicedToArray(makeEventListenerStack(target, PASSIVE), 2), listen = _makeEventListenerSta2[0], clear = _makeEventListenerSta2[1], handleMouse = function(e) {
                        return callback({
                            x: e.pageX,
                            y: e.pageY,
                            sourceType: "mouse"
                        });
                    };
                    if (listen("mousemove", handleMouse), listen("dragover", handleMouse), touch) {
                        var handleTouch = function(e) {
                            e.touches.length && callback({
                                x: e.touches[0].clientX,
                                y: e.touches[0].clientY,
                                sourceType: "touch"
                            });
                        };
                        listen("touchstart", handleTouch), followTouch && listen("touchmove", handleTouch);
                    }
                }(el, setState, options), function() {
                    var target = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window, callback = arguments.length > 1 ? arguments[1] : void 0, _options$touch2 = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).touch, touch = void 0 === _options$touch2 || _options$touch2, _makeEventListenerSta4 = _slicedToArray(makeEventListenerStack(target, PASSIVE), 2), listen = _makeEventListenerSta4[0], clear = _makeEventListenerSta4[1], mouseIn = !1, touchIn = !touch;
                    function handleChange(isInside) {
                        "mouse" === this ? mouseIn = isInside : touchIn = isInside, callback(mouseIn || touchIn);
                    }
                    listen("mouseover", handleChange.bind("mouse", !0)), listen("mouseout", handleChange.bind("mouse", !1)), 
                    listen("mousemove", handleChange.bind("mouse", !0), {
                        passive: !0,
                        once: !0
                    }), touch && (listen("touchstart", handleChange.bind("touch", !0)), listen("touchend", handleChange.bind("touch", !1)));
                }(el, setState.bind(void 0, "isInside"), options);
            };
            return "function" != typeof target ? attachListeners(target) : createEffect(function() {
                return attachListeners(target());
            }), state;
        }
        function addCustomStateToElement(element, state) {
            var _element$states;
            null == (_element$states = element.states) || _element$states.add(state);
        }
        function removeCustomStateFromElement(element, state) {
            var _element$states2;
            null == element || null == (_element$states2 = element.states) || _element$states2.remove(state);
        }
        function hasCustomState(element, state) {
            var _element$states3;
            return null == (_element$states3 = element.states) ? void 0 : _element$states3.has(state);
        }
        function createKeyboardEvent(key, keyCode) {
            var event = new KeyboardEvent(arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "keydown", {
                key: key,
                keyCode: keyCode,
                which: keyCode,
                ctrlKey: !1,
                altKey: !1,
                shiftKey: !1,
                metaKey: !1,
                bubbles: !0
            });
            return event.key === key && event.keyCode === keyCode || (Object.defineProperty(event, "key", {
                get: function() {
                    return key;
                }
            }), Object.defineProperty(event, "keyCode", {
                get: function() {
                    return keyCode;
                }
            }), Object.defineProperty(event, "which", {
                get: function() {
                    return keyCode;
                }
            })), event;
        }
        function findElementWithCustomState(myApp, x, y, customState) {
            for (var element, path = getChildrenByPosition(myApp, x, y), i = path.length - 1; i >= 0; i--) if (hasCustomState(path[i], customState)) {
                element = path[i];
                break;
            }
            if (element) {
                for (var p = element.parent; (null == p ? void 0 : p.forwardStates) && hasCustomState(p, customState); ) element = p, 
                p = p.parent;
                return element;
            }
        }
        function createHandleClick(myApp, customStates, pressedElementRef) {
            return function(e) {
                var clickedElement = customStates ? findElementWithCustomState(myApp, e.clientX, e.clientY, customStates.hoverState) : function(e) {
                    var _Config$rendererOptio, active = activeElement(), precision = (null == (_Config$rendererOptio = Config.rendererOptions) ? void 0 : _Config$rendererOptio.deviceLogicalPixelRatio) || 1, px = e.clientX / precision, py = e.clientY / precision;
                    if (active instanceof ElementNode && testCollision(px, py, active.lng.absX || 0, active.lng.absY || 0, active.width || 0, active.height || 0)) return active;
                    for (var parent = null == active ? void 0 : active.parent; parent; ) {
                        if ((isFunction(parent.onMouseClick) || isFunction(parent.onEnter)) && testCollision(px, py, parent.lng.absX || 0, parent.lng.absY || 0, parent.width || 0, parent.height || 0)) return parent;
                        parent = parent.parent;
                    }
                    return null;
                }(e);
                clickedElement && function(clickedElement, e, customStates, pressedElementRef) {
                    (null == customStates ? void 0 : customStates.pressedState) && (null == pressedElementRef ? void 0 : pressedElementRef.current) && (removeCustomStateFromElement(pressedElementRef.current, customStates.pressedState), 
                    pressedElementRef.current = null), isFunction(clickedElement.onMouseClick) ? clickedElement.onMouseClick(e, clickedElement) : (clickedElement.setFocus(), 
                    setTimeout(function() {
                        document.dispatchEvent(createKeyboardEvent("Enter", 13)), setTimeout(function() {
                            return document.body.dispatchEvent(createKeyboardEvent("Enter", 13, "keyup"));
                        }, 1);
                    }, 1));
                }(clickedElement, e, customStates, pressedElementRef);
            };
        }
        function createHandleMouseDown(myApp, customStates, pressedElementRef) {
            return function(e) {
                if (customStates) {
                    var element, pressedState, pressedElement = findElementWithCustomState(myApp, e.clientX, e.clientY, customStates.hoverState);
                    if (pressedElement) element = pressedElement, pressedState = customStates.pressedState, 
                    addCustomStateToElement(element, pressedState), pressedElementRef && (pressedElementRef.current = pressedElement);
                }
            };
        }
        function testCollision(px, py, cx, cy) {
            return px >= cx && px <= cx + (arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0) && py >= cy && py <= cy + (arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0);
        }
        function isNodeAtPosition(node, x, y) {
            return !!isElementNode(node) && (0 !== node.alpha && !node.skipFocus && testCollision(x, y, node.lng.absX || 0, node.lng.absY || 0, node.width || 0, node.height || 0));
        }
        function getChildrenByPosition(node, x, y) {
            for (var _Config$rendererOptio2, result = [], precision = (null == (_Config$rendererOptio2 = Config.rendererOptions) ? void 0 : _Config$rendererOptio2.deviceLogicalPixelRatio) || 1, px = x / precision, py = y / precision, current = node; current && isNodeAtPosition(current, px, py); ) {
                result.push(current);
                var _step2, best = void 0, bestZ = -1 / 0, _iterator2 = _createForOfIteratorHelper(current.children);
                try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                        var _child$zIndex, child = _step2.value;
                        if (isNodeAtPosition(child, px, py)) {
                            var z = null !== (_child$zIndex = child.zIndex) && void 0 !== _child$zIndex ? _child$zIndex : -1;
                            z >= bestZ && (bestZ = z, best = child);
                        }
                    }
                } catch (err) {
                    _iterator2.e(err);
                } finally {
                    _iterator2.f();
                }
                if (!best) break;
                current = best;
            }
            return result;
        }
        function lazy(fn) {
            var comp, p, wrap = function(props) {
                var Comp, ctx = sharedConfig.context;
                if (ctx) {
                    var _createSignal2 = _slicedToArray(createSignal(), 2), s = _createSignal2[0], set = _createSignal2[1];
                    sharedConfig.count || (sharedConfig.count = 0), sharedConfig.count++, (p || (p = fn())).then(function(mod) {
                        !sharedConfig.done && (sharedConfig.context = ctx), sharedConfig.count--, set(function() {
                            return mod.default;
                        }), sharedConfig.context = void 0;
                    }).catch(function() {}), comp = s;
                } else if (!comp) {
                    var _s = _slicedToArray(createResource(function() {
                        return (p || (p = fn())).then(function(mod) {
                            return mod.default;
                        });
                    }), 1)[0];
                    comp = _s;
                }
                return createMemo(function() {
                    return (Comp = comp()) ? untrack(function() {
                        if (!ctx || sharedConfig.done) return Comp(props);
                        var c = sharedConfig.context;
                        sharedConfig.context = ctx;
                        var r = Comp(props);
                        return sharedConfig.context = c, r;
                    }) : null;
                });
            };
            return wrap.preload = function() {
                return p || ((p = fn()).then(function(mod) {
                    return comp = function() {
                        return mod.default;
                    };
                }), p);
            }, wrap;
        }
        function VirtualGrid(props) {
            var _props$selected, viewRef, bufferSize = function() {
                var _props$buffer;
                return null !== (_props$buffer = props.buffer) && void 0 !== _props$buffer ? _props$buffer : 2;
            }, _createSignal4 = _slicedToArray(createSignal(null !== (_props$selected = props.selected) && void 0 !== _props$selected ? _props$selected : 0), 2), cursor = _createSignal4[0], setCursor = _createSignal4[1], items = createMemo(function() {
                return props.each || [];
            }), itemCount = function() {
                return items().length;
            }, itemsPerRow = function() {
                return props.columns;
            }, totalVisibleItems = function() {
                return itemsPerRow() * (null !== (_props$rows = props.rows) && void 0 !== _props$rows ? _props$rows : 1);
                var _props$rows;
            }, start = createMemo(function() {
                var perRow = itemsPerRow(), rawStart = Math.floor(cursor() / perRow) * perRow - bufferSize() * perRow;
                return Math.max(0, rawStart);
            }), end = createMemo(function() {
                var perRow = itemsPerRow(), rawEnd = (Math.floor(cursor() / perRow) + bufferSize()) * perRow + totalVisibleItems();
                return Math.min(items().length, rawEnd);
            }), _createSignal6 = _slicedToArray(createSignal(items().slice(start(), end())), 2), slice = _createSignal6[0], setSlice = _createSignal6[1];
            function onVerticalNav(dir) {
                return function() {
                    var perRow = itemsPerRow(), currentRowIndex = Math.floor(cursor() / perRow), maxRows = Math.floor(items().length / perRow);
                    if (!(0 === currentRowIndex && -1 === dir || currentRowIndex === maxRows && 1 === dir)) {
                        var selected = this.selected || 0, newIndex = clamp(selected + dir * perRow, 0, items().length - 1), lastIdx = selected;
                        this.selected = newIndex;
                        var active = this.children[this.selected];
                        return active instanceof ElementNode ? (active.setFocus(), chainedOnSelectedChanged.call(this, this.selected, this, active, lastIdx), 
                        !0) : void 0;
                    }
                };
            }
            var cachedSelected, _el$, _ref$, onUp = onVerticalNav(-1), onDown = onVerticalNav(1), chainedOnSelectedChanged = chainFunctions(props.onSelectedChanged, function(_idx, elm, active, _lastIdx) {
                var _this = this, idx = _idx, lastIdx = _lastIdx, perRow = itemsPerRow(), newRowIndex = Math.floor(idx / perRow), prevRowIndex = Math.floor((lastIdx || 0) / perRow), prevStart = start();
                if (setCursor(prevStart + idx), newRowIndex !== prevRowIndex) {
                    setSlice(items().slice(start(), end()));
                    var _props$onEndReached, idxCorrection = prevStart - start();
                    if (lastIdx && (lastIdx += idxCorrection), idx += idxCorrection, this.selected += idxCorrection, 
                    void 0 !== props.onEndReachedThreshold && cursor() >= items().length - props.onEndReachedThreshold) null == (_props$onEndReached = props.onEndReached) || _props$onEndReached.call(props);
                    queueMicrotask(function() {
                        var prevRowY = _this.y + active.y;
                        _this.updateLayout(), _this.lng.y = prevRowY - active.y, columnScroll(idx, elm, active, lastIdx);
                    });
                }
            }), updateSelected = function(_ref4) {
                var _ref5 = _slicedToArray(_ref4, 2), selected = _ref5[0];
                _ref5[1];
                if (viewRef && null != selected) {
                    var _props$onEndReached2;
                    if (void 0 !== cachedSelected && (selected = cachedSelected, cachedSelected = void 0), 
                    selected >= items().length && props.onEndReached) return null == (_props$onEndReached2 = props.onEndReached) || _props$onEndReached2.call(props), 
                    void (cachedSelected = selected);
                    var item = items()[selected], active = viewRef.children.find(function(x) {
                        return x.item === item;
                    }), lastSelected = viewRef.selected;
                    active instanceof ElementNode ? (viewRef.selected = viewRef.children.indexOf(active), 
                    hasFocus(viewRef) && active.setFocus(), chainedOnSelectedChanged.call(viewRef, viewRef.selected, viewRef, active, lastSelected)) : (setCursor(selected), 
                    setSlice(items().slice(start(), end())), queueMicrotask(function() {
                        viewRef.updateLayout(), (active = viewRef.children.find(function(x) {
                            return x.item === item;
                        })) instanceof ElementNode && (viewRef.selected = viewRef.children.indexOf(active), 
                        hasFocus(viewRef) && active.setFocus(), chainedOnSelectedChanged.call(viewRef, viewRef.selected, viewRef, active, lastSelected));
                    }));
                }
            }, scrollToIndex = function(index) {
                untrack(function() {
                    return updateSelected([ index ]);
                });
            };
            return createEffect(on([ function() {
                return props.selected;
            }, items ], updateSelected)), createEffect(on(items, function(gridItems, _prevGridItems, prevSize) {
                if (viewRef) return void 0 !== cachedSelected ? (updateSelected([ cachedSelected ]), 
                gridItems.length) : (0 === gridItems.length ? (setCursor(0), cachedSelected = void 0, 
                setSlice([])) : cursor() >= itemCount() ? updateSelected([ Math.max(0, itemCount() - 1) ]) : 0 === prevSize ? updateSelected([ 0 ]) : setSlice(items().slice(start(), end())), 
                gridItems.length);
            }, {
                defer: !0
            })), _el$ = createElement("view"), "function" == typeof (_ref$ = chainRefs(function(el) {
                viewRef = el;
            }, props.ref)) && use(_ref$, _el$), spread(_el$, mergeProps$1(props, {
                get scroll() {
                    return props.scroll || "always";
                },
                get selected() {
                    return props.selected || 0;
                },
                get cursor() {
                    return cursor();
                },
                onLeft: chainFunctions(props.onLeft, navigableHandleNavigation),
                onRight: chainFunctions(props.onRight, navigableHandleNavigation),
                onUp: chainFunctions(props.onUp, onUp),
                onDown: chainFunctions(props.onDown, onDown),
                forwardFocus: navigableForwardFocus,
                onCreate: props.selected ? chainFunctions(props.onCreate, columnScroll) : props.onCreate,
                scrollToIndex: scrollToIndex,
                onSelectedChanged: chainedOnSelectedChanged,
                style: combineStyles(props.style, rowStyles)
            }), !0), insert(_el$, createComponent(List, {
                get each() {
                    return slice();
                },
                get children() {
                    return props.children;
                }
            })), _el$;
        }
        function Root(props) {
            var location = props.routerState.location, params = props.routerState.params, data = createMemo(function() {
                return props.preload && untrack(function() {
                    setInPreloadFn(!0), props.preload({
                        params: params,
                        location: location,
                        intent: getIntent() || "initial"
                    }), setInPreloadFn(!1);
                });
            });
            return createComponent(Show, {
                get when() {
                    return props.root;
                },
                keyed: !0,
                get fallback() {
                    return props.children;
                },
                children: function(Root) {
                    return createComponent(Root, {
                        params: params,
                        location: location,
                        get data() {
                            return data();
                        },
                        get children() {
                            return props.children;
                        }
                    });
                }
            });
        }
        function Routes(props) {
            var root, disposers = [], routeStates = createMemo(on(props.routerState.matches, function(nextMatches, prevMatches, prev) {
                for (var equal = prevMatches && nextMatches.length === prevMatches.length, next = [], _loop3 = function(i) {
                    var prevMatch = prevMatches && prevMatches[i], nextMatch = nextMatches[i];
                    prev && prevMatch && nextMatch.route.key === prevMatch.route.key ? next[i] = prev[i] : (equal = !1, 
                    disposers[i] && disposers[i](), createRoot(function(dispose) {
                        disposers[i] = dispose, next[i] = createRouteContext(props.routerState, next[i - 1] || props.routerState.base, createOutlet(function() {
                            return routeStates()[i + 1];
                        }), function() {
                            var _routeMatches$i, routeMatches = props.routerState.matches();
                            return null !== (_routeMatches$i = routeMatches[i]) && void 0 !== _routeMatches$i ? _routeMatches$i : routeMatches[0];
                        });
                    }));
                }, i = 0, len = nextMatches.length; i < len; i++) _loop3(i);
                return disposers.splice(nextMatches.length).forEach(function(dispose) {
                    return dispose();
                }), prev && equal ? prev : (root = next[0], next);
            }));
            return createOutlet(function() {
                return routeStates() && root;
            })();
        }
        function createRouter(config) {
            var _ref7, get, set, _ref8, value, setValue, ignore = !1, wrap = function(value) {
                return "string" == typeof value ? {
                    value: value
                } : value;
            }, signal = (_ref7 = createSignal(wrap(config.get()), {
                equals: function(a, b) {
                    return a.value === b.value && a.state === b.state;
                }
            }), get = void 0, set = function(next) {
                return !ignore && config.set(next), sharedConfig.registry && !sharedConfig.done && (sharedConfig.done = !0), 
                next;
            }, _ref8 = _slicedToArray(_ref7, 2), value = _ref8[0], setValue = _ref8[1], [ get ? function() {
                return get(value());
            } : value, set ? function(v) {
                return setValue(set(v));
            } : setValue ]);
            return config.init && onCleanup(config.init(function() {
                var value = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : config.get();
                ignore = !0, signal[1](wrap(value)), ignore = !1;
            })), createRouterComponent({
                signal: signal,
                create: config.create,
                utils: config.utils
            });
        }
        function Navigate(props) {
            var navigate = useNavigate(), location = useLocation(), href = props.href, state = props.state;
            return navigate("function" == typeof href ? href({
                navigate: navigate,
                location: location
            }) : href, {
                replace: !0,
                state: state
            }), null;
        }
        function hashParser(str) {
            var to = str.replace(/^.*?#/, "");
            if (!to.startsWith("/")) {
                var _window$location$hash3 = _slicedToArray(window.location.hash.split("#", 2), 2)[1];
                return "".concat(void 0 === _window$location$hash3 ? "/" : _window$location$hash3, "#").concat(to);
            }
            return to;
        }
        function HashRouter(props) {
            var getSource = function() {
                return window.location.hash.slice(1);
            }, beforeLeave = createBeforeLeave();
            return createRouter({
                get: getSource,
                set: function(_ref9) {
                    var value = _ref9.value, replace = _ref9.replace, state = _ref9.state;
                    replace ? window.history.replaceState(keepDepth(state), "", "#" + value) : window.history.pushState(state, "", "#" + value), 
                    saveCurrentDepth();
                },
                init: function(notify) {
                    return function(target, type, handler) {
                        return target.addEventListener(type, handler), function() {
                            return target.removeEventListener(type, handler);
                        };
                    }(window, "hashchange", notifyIfNotBlocked(notify, function(delta) {
                        return !beforeLeave.confirm(delta && delta < 0 ? delta : getSource());
                    }));
                },
                utils: {
                    go: function(delta) {
                        return window.history.go(delta);
                    },
                    renderPath: function(path) {
                        return "#".concat(path);
                    },
                    parsePath: hashParser,
                    beforeLeave: beforeLeave,
                    queryWrapper: props.forceProxy || !SUPPORTS_PROXY ? function(getQuery) {
                        return createMemoWithoutProxy(getQuery, props.queryParams);
                    } : void 0,
                    paramsWrapper: props.forceProxy || !SUPPORTS_PROXY ? function(buildParams, branches) {
                        return createMemoWithoutProxy(buildParams, collectDynamicParams(branches()));
                    } : void 0
                }
            })(props);
        }
        function createMemoWithoutProxy(fn, allKeys) {
            var map = new Map, owner = getOwner(), target = {};
            return (allKeys || Object.keys(fn())).forEach(function(key) {
                Object.defineProperty(target, key, {
                    get: function() {
                        return property = key, map.has(property) || runWithOwner(owner, function() {
                            return map.set(property, createMemo(function() {
                                return fn()[property];
                            }));
                        }), map.get(property)();
                        var property;
                    },
                    enumerable: !0,
                    configurable: !0
                });
            }), target;
        }
        function wrapChildren(props, setIsAlive) {
            var _el$, onRemove = chainFunctions(props.onRemove || function(elm) {
                elm.alpha = 0;
            }, function() {
                return null == setIsAlive ? void 0 : setIsAlive(!1);
            }), onRender = chainFunctions(props.onRender || function(elm) {
                elm.alpha = 1;
            }, function() {
                return null == setIsAlive ? void 0 : setIsAlive(!0);
            }), transition = props.transition || {
                alpha: !0
            };
            return _el$ = createElement("view"), spread(_el$, mergeProps$1(props, {
                preserve: !0,
                onRemove: onRemove,
                onRender: onRender,
                forwardFocus: 0,
                transition: transition
            }), !1), _el$;
        }
        function destroyData() {
            return {
                heroRow: {
                    title: "Best Adventure and Action movies",
                    items: createResource(function() {
                        return fetchGenreMovies([ "adventure", "action" ]);
                    })[0],
                    type: "Hero",
                    height: 800
                }
            };
        }
        function tmdbData() {
            var rows = [], popularMovies = createResource(function() {
                return fetchPopular("movie");
            });
            rows.push({
                title: "Popular Movies",
                items: popularMovies[0],
                setItems: popularMovies[1].mutate,
                type: "Poster",
                height: 328
            }), rows.push({
                title: "Best Western movies",
                items: createResource(function() {
                    return fetchGenreMovies([ "Western" ]);
                })[0],
                type: "Hero",
                height: 720
            }), rows.push({
                title: "Best Comedy movies",
                items: createResource(function() {
                    return fetchGenreMovies([ "Comedy" ]);
                })[0],
                type: "PosterTitle",
                height: 400
            }), rows.push({
                title: "Popular TV shows",
                items: createResource(function() {
                    return fetchPopular("tv");
                })[0],
                type: "PosterTitle",
                height: 400
            });
            var heroRow = {
                title: "Best Adventure and Action movies",
                items: createResource(function() {
                    return fetchGenreMovies([ "adventure", "action" ]);
                })[0],
                type: "Hero",
                height: 720
            };
            return rows.push(heroRow), rows.push({
                title: "Best Animations",
                items: createResource(function() {
                    return fetchGenreMovies("Animation");
                })[0],
                type: "PosterTitle",
                height: 400
            }), rows.push({
                title: "Best TV Movie Movies",
                items: createResource(function() {
                    return fetchGenreMovies("TV Movie");
                })[0],
                type: "PosterTitle",
                height: 400
            }), rows.push({
                title: "Best Science Fiction movies",
                items: createResource(function() {
                    return fetchGenreMovies("Science Fiction");
                })[0],
                type: "Hero",
                height: 720
            }), rows.push({
                title: "Best War Movies",
                items: createResource(function() {
                    return fetchGenreMovies("War");
                })[0],
                type: "PosterTitle",
                height: 400
            }), {
                rows: rows
            };
        }
        function browsePreload(props) {
            var lastFilter = null;
            return createMemo(function(p) {
                var params = props.params;
                if (p && (!params.filter || lastFilter === params.filter)) return p;
                var filter, provider = (filter = params.filter || "all", function(pageIndex) {
                    var url = "/trending/".concat(filter, "/week?page=").concat(pageIndex);
                    if (cache.has(url)) return cache.get(url);
                    var result = api_default.get(url).then(function(trending) {
                        return convertItemsToTiles(trending.results.filter(function(r) {
                            return !r.adult;
                        }));
                    }).catch(function(err) {
                        throw console.error("[BROWSE_PROVIDER_ERROR] url:", url, "error:", err.message, err.stack), 
                        err;
                    });
                    return cache.set(url, result), result;
                });
                return provider(1), lastFilter = params.filter || lastFilter, provider;
            });
        }
        function justYear(dateString) {
            return ((null == dateString ? void 0 : dateString.split("-")) || [])[0] || "";
        }
        function ensureItems(items, minCount) {
            var remainingCount = minCount - items.length;
            return remainingCount > 0 ? items.concat(Array(remainingCount).fill({})) : items;
        }
        function getRecommendations(_ref0) {
            var type = _ref0.type, id = _ref0.id;
            return api_default.get("/".concat(type, "/").concat(id, "/recommendations")).then(function(_ref1) {
                var results = _ref1.results;
                return results.length ? ensureItems(convertItemsToTiles(results.slice(0, 7)), 7) : api_default.get("/trending/".concat(type, "/week?page=1")).then(function(_ref10) {
                    var results = _ref10.results;
                    return ensureItems(convertItemsToTiles(results.slice(0, 7)), 7);
                });
            });
        }
        function getCredits(_ref11) {
            var type = _ref11.type, id = _ref11.id;
            return api_default.get("/".concat(type, "/").concat(id, "/credits")).then(function(_ref12) {
                var cast = _ref12.cast;
                return ensureItems(convertItemsToTiles(cast.slice(0, 7)), 7);
            });
        }
        function getInfo(_ref13) {
            var type = _ref13.type, id = _ref13.id, rt = "movie" === type ? {
                rtCrit: 86,
                rtFan: 92
            } : {};
            return api_default.get("/".concat(type, "/").concat(id)).then(function(data) {
                return _objectSpread({
                    backgroundImage: getImageUrl(data.backdrop_path, "w1280"),
                    heroContent: {
                        title: data.title || data.name,
                        description: data.overview,
                        badges: [ "HD", "CC" ],
                        voteAverage: data.vote_average,
                        voteCount: data.vote_count,
                        metaText: "movie" === type ? (minutes = data.runtime, remainingMinutes = minutes % 60, 
                        Math.floor(minutes / 60) + "h " + (remainingMinutes < 10 ? "0" : "") + remainingMinutes + "min   " + (dateString = data.release_date, 
                        parts = dateString.split("-"), parts[1] + "/" + parts[2] + "/" + parts[0])) : "".concat(justYear(data.first_air_date), " - ").concat(justYear(data.last_air_date)),
                        reviews: rt
                    }
                }, data);
                var dateString, parts, minutes, remainingMinutes;
            });
        }
        function entityPreload(_ref14) {
            var params = _ref14.params, intent = _ref14.intent, entity = _slicedToArray(createResource(function() {
                return _objectSpread({}, params);
            }, getInfo), 1)[0];
            if ("preload" !== intent) return {
                entity: entity,
                credits: _slicedToArray(createResource(function() {
                    return _objectSpread({}, params);
                }, getCredits), 1)[0],
                recommendations: _slicedToArray(createResource(function() {
                    return _objectSpread({}, params);
                }, getRecommendations), 1)[0]
            };
        }
        function Background() {
            var bg1, bg2, heroMask, disableBG = "true" === new URLSearchParams(window.location.search).get("disableBG"), active = 0, animationSettings = {
                duration: 550,
                easing: "ease-in-out"
            }, bgStyles = {
                alpha: 1,
                color: 4294967295
            };
            return onMount(function() {
                if (disableBG) return heroMask.src = "", heroMask.colorLeft = 255, void (heroMask.colorRight = 0);
            }), createEffect(on(globalBackground, function(img) {
                !function(img) {
                    if (disableBG) return heroMask.src = "", heroMask.colorLeft = 255, void (heroMask.colorRight = 0);
                    if ("string" != typeof img) return bg1.color = img, bg1.src = "", bg1.alpha = 1, 
                    active = 1, bg2.alpha = 0, void (heroMask.alpha = 0);
                    bg1.color = 4294967295, heroMask.alpha = 1;
                    var currentBg = 1 === active ? bg2 : bg1, nextBg = 1 === active ? bg1 : bg2;
                    currentBg.src = img, 0 === active ? currentBg.alpha = 1 : (currentBg.alpha = .01, 
                    currentBg.animate({
                        alpha: 1
                    }, animationSettings).start()), nextBg.animate({
                        alpha: .01
                    }, animationSettings).start(), active = 1 === active ? 2 : 1;
                }(img);
            }, {
                defer: !0
            })), function() {
                var _el$ = createElement("view"), _el$2 = createElement("view"), _el$3 = createElement("view"), _el$4 = createElement("view");
                insertNode(_el$, _el$2), insertNode(_el$, _el$3), insertNode(_el$, _el$4), setProp(_el$, "width", 1920), 
                setProp(_el$, "height", 1080), setProp(_el$, "zIndex", -5);
                "function" == typeof bg1 ? use(bg1, _el$2) : bg1 = _el$2, setProp(_el$2, "style", bgStyles);
                "function" == typeof bg2 ? use(bg2, _el$3) : bg2 = _el$3, setProp(_el$3, "style", bgStyles), 
                setProp(_el$3, "alpha", 0);
                return "function" == typeof heroMask ? use(heroMask, _el$4) : heroMask = _el$4, 
                setProp(_el$4, "src", "./assets/hero-mask-inverted.png"), setProp(_el$4, "color", 255), 
                setProp(_el$4, "width", 1920), setProp(_el$4, "height", 1080), _el$;
            }();
        }
        function NavButton(props) {
            return _el$ = createElement("view"), _el$2 = createElement("view"), _el$3 = createElement("text"), 
            insertNode(_el$, _el$2), insertNode(_el$, _el$3), spread(_el$, mergeProps$1(props, {
                forwardStates: !0,
                get style() {
                    return NavDrawer_styles_default.NavButton;
                }
            }), !0), setProp(_el$2, "y", -16), insert(_el$2, createComponent(Icon, {
                get color() {
                    return props.iconColor;
                },
                scale: .5,
                get name() {
                    return props.icon;
                }
            })), setProp(_el$3, "style", NavButtonTextStyles), insert(_el$3, function() {
                return props.children;
            }), _el$;
            var _el$, _el$2, _el$3;
        }
        function NavDrawer(props) {
            var backdrop, navigate = useNavigate();
            function handleNavigate(page) {
                if (useMatch(function() {
                    return page;
                })()) return props.focusPage();
                navigate(page);
            }
            var _el$10, _el$1, _el$4, _el$5, _el$7, _el$8, _el$9, selectedButton = createMemo(function() {
                return useMatch(function() {
                    return "/browse/all";
                })() ? 308 : useMatch(function() {
                    return "/browse/movie";
                })() ? 398 : useMatch(function() {
                    return "/browse/tv";
                })() ? 488 : useMatch(function() {
                    return "/examples";
                })() ? 578 : useMatch(function() {
                    return "/benchmark";
                })() ? 668 : useMatch(function() {
                    return "/versions";
                })() ? 758 : 308;
            });
            return [ (_el$4 = createElement("view"), _el$5 = createElement("text"), _el$7 = createElement("view"), 
            _el$8 = createElement("view"), _el$9 = createElement("text"), insertNode(_el$4, _el$5), 
            insertNode(_el$4, _el$7), insertNode(_el$4, _el$8), insertNode(_el$4, _el$9), setProp(_el$4, "id", "NavDrawer"), 
            setProp(_el$4, "flexItem", !1), setProp(_el$4, "width", 300), setProp(_el$4, "height", 150), 
            setProp(_el$4, "x", 30), setProp(_el$4, "y", 15), setProp(_el$4, "zIndex", 105), 
            insertNode(_el$5, createTextNode("Built With:")), setProp(_el$5, "y", 8), setProp(_el$5, "x", 80), 
            setProp(_el$5, "fontSize", 28), setProp(_el$7, "y", 10), setProp(_el$7, "src", "./assets/solidWord.png"), 
            setProp(_el$7, "width", 280), setProp(_el$7, "height", 52), setProp(_el$7, "textureOptions", {}), 
            setProp(_el$8, "x", 0), setProp(_el$8, "y", 100), setProp(_el$8, "src", "./assets/tmdb.png"), 
            setProp(_el$8, "width", 80), setProp(_el$8, "height", 41), setProp(_el$8, "textureOptions", {}), 
            insertNode(_el$9, createTextNode("This product uses the TMDB API but is not endorsed or certified by TMDB.")), 
            setProp(_el$9, "x", 90), setProp(_el$9, "y", 104), setProp(_el$9, "contain", "width"), 
            setProp(_el$9, "width", 160), setProp(_el$9, "fontSize", 12), effect(function(_p$) {
                var _v$ = props.showWidgets ? 1 : 0, _v$2 = theme_default.textSecondary, _v$3 = theme_default.textSecondary;
                return _v$ !== _p$.e && (_p$.e = setProp(_el$4, "alpha", _v$, _p$.e)), _v$2 !== _p$.t && (_p$.t = setProp(_el$5, "color", _v$2, _p$.t)), 
                _v$3 !== _p$.a && (_p$.a = setProp(_el$9, "color", _v$3, _p$.a)), _p$;
            }, {
                e: void 0,
                t: void 0,
                a: void 0
            }), _el$4), createComponent(Column, mergeProps$1(props, {
                onFocus: function() {
                    backdrop.states.add("$focus"), this.children.forEach(function(c) {
                        return c.states.add("$active");
                    }), this.children[this.selected || 0].setFocus();
                },
                onBlur: function() {
                    backdrop.states.remove("$focus"), this.selected = 0, this.children.forEach(function(c) {
                        return c.states.remove("$active");
                    });
                },
                get style() {
                    return NavDrawer_styles_default.Column;
                },
                announce: "Main Menu",
                scroll: "none",
                get children() {
                    return [ createComponent(NavButton, {
                        onEnter: function() {
                            return handleNavigate("/browse/all");
                        },
                        iconColor: 4294967295,
                        announce: [ "Trending Browse", "button" ],
                        icon: "trending",
                        children: "Trending"
                    }), createComponent(NavButton, {
                        icon: "movie",
                        iconColor: 4294967295,
                        announce: [ "Movies Browse", "button" ],
                        onEnter: function() {
                            return handleNavigate("/browse/movie");
                        },
                        children: "Movies"
                    }), createComponent(NavButton, {
                        icon: "tv",
                        iconColor: 4294967295,
                        announce: [ "TV Browse", "button" ],
                        onEnter: function() {
                            return handleNavigate("/browse/tv");
                        },
                        children: "TV"
                    }), createComponent(NavButton, {
                        icon: "experiment",
                        iconColor: 4294967295,
                        announce: [ "Examples", "button" ],
                        onEnter: function() {
                            return handleNavigate("/examples");
                        },
                        children: "Examples"
                    }), createComponent(NavButton, {
                        icon: "perf",
                        iconColor: 4294967295,
                        announce: [ "Benchmark", "button" ],
                        onEnter: function() {
                            return handleNavigate("/versions");
                        },
                        children: "Benchmark"
                    }) ];
                }
            })), (_el$1 = createElement("view"), "function" == typeof backdrop ? use(backdrop, _el$1) : backdrop = _el$1, 
            setProp(_el$1, "skipFocus", !0), effect(function(_$p) {
                return setProp(_el$1, "style", NavDrawer_styles_default.Gradient, _$p);
            }), _el$1), (_el$10 = createElement("view"), setProp(_el$10, "width", 4), setProp(_el$10, "height", 56), 
            setProp(_el$10, "color", 4294967295), setProp(_el$10, "x", 22), setProp(_el$10, "zIndex", 100), 
            effect(function(_$p) {
                return setProp(_el$10, "y", selectedButton(), _$p);
            }), _el$10) ];
        }
        return {
            setters: [ function(_rolldownRuntimeLegacy001Js) {
                __exportAll = _rolldownRuntimeLegacy001Js.n;
            }, function(_renderLegacy002Js) {
                onMount = _renderLegacy002Js.$, createIndexBuffer = _renderLegacy002Js.At, DIRTY_QUAD_BUFFER = _renderLegacy002Js.Bt, 
                isElementNode = _renderLegacy002Js.C, Config = _renderLegacy002Js.D, MAX_QUAD_BUFFER_SIZE = _renderLegacy002Js.Dt, 
                MAX_QUADS = _renderLegacy002Js.Et, compareRect = _renderLegacy002Js.Ft, createRoot = _renderLegacy002Js.G, 
                createMemo = _renderLegacy002Js.H, createWebGLContext = _renderLegacy002Js.Ht, batch = _renderLegacy002Js.I, 
                getNormalizedRgbaComponents = _renderLegacy002Js.It, getListener = _renderLegacy002Js.J, 
                children = _renderLegacy002Js.L, isHTMLImageElement = _renderLegacy002Js.Mt, Show = _renderLegacy002Js.N, 
                calcFactoredRadiusArray = _renderLegacy002Js.Nt, activeElement = _renderLegacy002Js.O, 
                UNIT_TEXTURE_COORDS = _renderLegacy002Js.Ot, clampUnit = _renderLegacy002Js.Pt, 
                onCleanup = _renderLegacy002Js.Q, TextureType = _renderLegacy002Js.Rt, hasFocus = _renderLegacy002Js.S, 
                isFunction = _renderLegacy002Js.T, UpdateType = _renderLegacy002Js.Tt, createEffect = _renderLegacy002Js.V, 
                _renderLegacy002Js.Vt, createResource = _renderLegacy002Js.W, mergeProps = _renderLegacy002Js.X, 
                getOwner = _renderLegacy002Js.Y, on = _renderLegacy002Js.Z, ElementNode = _renderLegacy002Js._, 
                createElement = _renderLegacy002Js.a, loadFonts = _renderLegacy002Js.b, effect = _renderLegacy002Js.c, 
                takeCanvasPrefetch = _renderLegacy002Js.ct, memo = _renderLegacy002Js.d, rootNode = _renderLegacy002Js.f, 
                use = _renderLegacy002Js.g, CoreShaderNode = _renderLegacy002Js.gt, spread = _renderLegacy002Js.h, 
                normalizeFontMetrics = _renderLegacy002Js.ht, createComponent = _renderLegacy002Js.i, 
                untrack = _renderLegacy002Js.it, createTextureCoords = _renderLegacy002Js.jt, WORDS_PER_QUAD = _renderLegacy002Js.kt, 
                insert = _renderLegacy002Js.l, takeSdfPrefetch = _renderLegacy002Js.lt, setProp = _renderLegacy002Js.m, 
                mapTextLayout = _renderLegacy002Js.mt, sharedConfig = _renderLegacy002Js.nt, createRenderer = _renderLegacy002Js.o, 
                defaultFontMetrics = _renderLegacy002Js.pt, createSignal = _renderLegacy002Js.q, 
                createTextNode = _renderLegacy002Js.s, runWithOwner = _renderLegacy002Js.tt, insertNode = _renderLegacy002Js.u, 
                focusPath = _renderLegacy002Js.v, uploadCompressedTexture = _renderLegacy002Js.wt, 
                renderer = _renderLegacy002Js.x, useFocusManager = _renderLegacy002Js.y, createComputed = _renderLegacy002Js.z, 
                closeImageBitmap = _renderLegacy002Js.zt;
            }, function(_FPSCounterLegacy003Js) {
                genGradientColors = _FPSCounterLegacy003Js.a, LinearGradientTemplate = _FPSCounterLegacy003Js.c, 
                RoundedTemplate = _FPSCounterLegacy003Js.d, HolePunchTemplate = _FPSCounterLegacy003Js.f, 
                WebGlShaderProgram = _FPSCounterLegacy003Js.i, getBorderProps = _FPSCounterLegacy003Js.m, 
                Default = _FPSCounterLegacy003Js.o, setupFPS = _FPSCounterLegacy003Js.r, RadialGradientTemplate = _FPSCounterLegacy003Js.s, 
                FPSCounter = _FPSCounterLegacy003Js.t, getShadowProps = _FPSCounterLegacy003Js.u;
            }, function(_utilsLegacy004Js) {
                combineStyles = _utilsLegacy004Js.n, clamp = _utilsLegacy004Js.t;
            }, function(_mergePropsLegacy005Js) {
                mergeProps$1 = _mergePropsLegacy005Js.t;
            }, function(_announcerLegacy006Js) {
                createScheduled = _announcerLegacy006Js.n, throttle = _announcerLegacy006Js.r, Announcer = _announcerLegacy006Js.t;
            }, function(_webLegacy007Js) {
                _webLegacy007Js.t;
            }, function(_LazyLegacy008Js) {
                LazyRow = _LazyLegacy008Js.n, LazyColumn = _LazyLegacy008Js.t;
            }, function(_chainFunctionsLegacy009Js) {
                withScrolling = _chainFunctionsLegacy009Js.a, navigableForwardFocus = _chainFunctionsLegacy009Js.d, 
                navigableHandleNavigation = _chainFunctionsLegacy009Js.f, chainRefs = _chainFunctionsLegacy009Js.n, 
                chainFunctions = _chainFunctionsLegacy009Js.t;
            }, function(_ColumnLegacy00aJs) {
                Column = _ColumnLegacy00aJs.t;
            }, function(_ContentBlockLegacy00cJs) {
                ContentBlock = _ContentBlockLegacy00cJs.t;
            }, function(_createFocusStackLegacy00dJs) {
                useFocusStack = _createFocusStackLegacy00dJs.n, FocusStackProvider = _createFocusStackLegacy00dJs.t;
            }, function(_componentsLegacy00eJs) {
                Hero = _componentsLegacy00eJs.a, TitleRow = _componentsLegacy00eJs.d, Thumbnail = _componentsLegacy00eJs.l, 
                List = _componentsLegacy00eJs.p, AssetPanel = _componentsLegacy00eJs.t;
            }, function(_IconLegacy00fJs) {
                Icon = _IconLegacy00fJs.t;
            }, function(_routingLegacy00gJs) {
                saveCurrentDepth = _routingLegacy00gJs._, createRouterContext = _routingLegacy00gJs.a, 
                setInPreloadFn = _routingLegacy00gJs.c, useNavigate = _routingLegacy00gJs.d, notifyIfNotBlocked = _routingLegacy00gJs.g, 
                keepDepth = _routingLegacy00gJs.h, createRouteContext = _routingLegacy00gJs.i, useLocation = _routingLegacy00gJs.l, 
                createBeforeLeave = _routingLegacy00gJs.m, RouterContextObj = _routingLegacy00gJs.n, 
                getIntent = _routingLegacy00gJs.o, usePreloadRoute = _routingLegacy00gJs.p, createBranches = _routingLegacy00gJs.r, 
                _routingLegacy00gJs.s, RouteContextObj = _routingLegacy00gJs.t, useMatch = _routingLegacy00gJs.u;
            }, function(_themeLegacy00hJs) {
                theme_default = _themeLegacy00hJs.t;
            }, function(_stylesLegacy00iJs) {
                styles_default = _stylesLegacy00iJs.r;
            }, function(_stateLegacy00jJs) {
                setGlobalBackground = _stateLegacy00jJs.n, globalBackground = _stateLegacy00jJs.t;
            }, function(_distLegacy00kJs) {
                debounce = _distLegacy00kJs.t;
            }, function(_apiLegacy00lJs) {
                getImageUrl = _apiLegacy00lJs.n, api_default = _apiLegacy00lJs.t;
            }, function(_ItemFormatterLegacy00mJs) {
                convertItemsToTiles = _ItemFormatterLegacy00mJs.t;
            } ],
            execute: function() {
                var _createSignal12, originalGetOwnPropertyNames;
                (__vite_style__ = document.createElement("style")).textContent = "html,body,*{margin:0;padding:0}html,body{background-color:#000;width:100vw;height:100vh;margin:0;padding:0;overflow:hidden}video{z-index:2;outline:none;position:absolute;top:0;left:0}.center-element{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}#splash{z-index:9999;opacity:1;background-color:#335d92;width:100vw;height:100vh;transition:opacity .3s;position:absolute;top:0;left:0}#splash.fade-out{opacity:0;pointer-events:none}#splash img{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}\n/*$vite$:1*/", 
                document.head.appendChild(__vite_style__), function() {
                    var relList = document.createElement("link").relList;
                    if (!(relList && relList.supports && relList.supports("modulepreload"))) {
                        var _step3, _iterator3 = _createForOfIteratorHelper(document.querySelectorAll('link[rel="modulepreload"]'));
                        try {
                            for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                                processPreload(_step3.value);
                            }
                        } catch (err) {
                            _iterator3.e(err);
                        } finally {
                            _iterator3.f();
                        }
                        new MutationObserver(function(mutations) {
                            var _step4, _iterator4 = _createForOfIteratorHelper(mutations);
                            try {
                                for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
                                    var mutation = _step4.value;
                                    if ("childList" === mutation.type) {
                                        var _step5, _iterator5 = _createForOfIteratorHelper(mutation.addedNodes);
                                        try {
                                            for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
                                                var node = _step5.value;
                                                "LINK" === node.tagName && "modulepreload" === node.rel && processPreload(node);
                                            }
                                        } catch (err) {
                                            _iterator5.e(err);
                                        } finally {
                                            _iterator5.f();
                                        }
                                    }
                                }
                            } catch (err) {
                                _iterator4.e(err);
                            } finally {
                                _iterator4.f();
                            }
                        }).observe(document, {
                            childList: !0,
                            subtree: !0
                        });
                    }
                    function processPreload(link) {
                        if (!link.ep) {
                            link.ep = !0;
                            var fetchOpts = function(link) {
                                var fetchOpts = {};
                                return link.integrity && (fetchOpts.integrity = link.integrity), link.referrerPolicy && (fetchOpts.referrerPolicy = link.referrerPolicy), 
                                "use-credentials" === link.crossOrigin ? fetchOpts.credentials = "include" : "anonymous" === link.crossOrigin ? fetchOpts.credentials = "omit" : fetchOpts.credentials = "same-origin", 
                                fetchOpts;
                            }(link);
                            fetch(link.href, fetchOpts);
                        }
                    }
                }(), CoreContextTexture = function() {
                    return _createClass(function(memManager, textureSource) {
                        this.textureSource = void 0, this.memManager = void 0, this.state = "freed", this.memManager = memManager, 
                        this.textureSource = textureSource;
                    }, [ {
                        key: "setTextureMemUse",
                        value: function(byteSize) {
                            this.memManager.setTextureMemUse(this.textureSource, byteSize);
                        }
                    }, {
                        key: "renderable",
                        get: function() {
                            return this.textureSource.renderable;
                        }
                    } ]);
                }(), CoreRenderer = _createClass(function(options) {
                    this.options = void 0, this.mode = void 0, this.defaultTextureCoords = void 0, this.stage = void 0, 
                    this.options = options, this.stage = options.stage;
                }), WebGlShaderNode = function(_CoreShaderNode) {
                    function WebGlShaderNode(shaderKey, config, program, stage, props) {
                        var _this2;
                        return (_this2 = _callSuper(this, WebGlShaderNode, [ shaderKey, config, stage, props ])).program = void 0, 
                        _this2.updater = void 0, _this2.uniforms = {
                            single: {},
                            vec2: {},
                            vec3: {},
                            vec4: {}
                        }, _this2.program = program, void 0 !== config.update && (_this2.updater = config.update, 
                        _this2.update = function() {
                            if (void 0 !== _this2.props) {
                                var prevKey = _this2.valueKey;
                                if (_this2.valueKey = _this2.createValueKey(), prevKey !== _this2.valueKey) {
                                    prevKey.length > 0 && _this2.stage.shManager.mutateShaderValueUsage(prevKey, -1);
                                    var values = _this2.stage.shManager.getShaderValues(_this2.valueKey);
                                    void 0 === values ? (_this2.uniforms = {
                                        single: {},
                                        vec2: {},
                                        vec3: {},
                                        vec4: {}
                                    }, _this2.updater(_this2.node), _this2.stage.shManager.setShaderValues(_this2.valueKey, _this2.uniforms)) : _this2.uniforms = values;
                                }
                            } else _this2.updater(_this2.node, _this2.props);
                        }), _this2;
                    }
                    return _inherits(WebGlShaderNode, _CoreShaderNode), _createClass(WebGlShaderNode, [ {
                        key: "uniformRGBA",
                        value: function(location, value) {
                            this.uniform4fv(location, new Float32Array(getNormalizedRgbaComponents(value)));
                        }
                    }, {
                        key: "uniform1f",
                        value: function(location, value) {
                            this.uniforms.single[location] = {
                                method: "uniform1f",
                                value: value
                            };
                        }
                    }, {
                        key: "uniform1fv",
                        value: function(location, value) {
                            this.uniforms.single[location] = {
                                method: "uniform1fv",
                                value: value
                            };
                        }
                    }, {
                        key: "uniform1i",
                        value: function(location, value) {
                            this.uniforms.single[location] = {
                                method: "uniform1i",
                                value: value
                            };
                        }
                    }, {
                        key: "uniform1iv",
                        value: function(location, value) {
                            this.uniforms.single[location] = {
                                method: "uniform1iv",
                                value: value
                            };
                        }
                    }, {
                        key: "uniform2f",
                        value: function(location, v0, v1) {
                            this.uniforms.vec2[location] = {
                                method: "uniform2f",
                                value: [ v0, v1 ]
                            };
                        }
                    }, {
                        key: "uniform2fv",
                        value: function(location, value) {
                            this.uniforms.single[location] = {
                                method: "uniform2fv",
                                value: value
                            };
                        }
                    }, {
                        key: "uniform2fa",
                        value: function(location, value) {
                            this.uniforms.vec2[location] = {
                                method: "uniform2f",
                                value: value
                            };
                        }
                    }, {
                        key: "uniform2i",
                        value: function(location, v0, v1) {
                            this.uniforms.vec2[location] = {
                                method: "uniform2i",
                                value: [ v0, v1 ]
                            };
                        }
                    }, {
                        key: "uniform2iv",
                        value: function(location, value) {
                            this.uniforms.single[location] = {
                                method: "uniform2iv",
                                value: value
                            };
                        }
                    }, {
                        key: "uniform3f",
                        value: function(location, v0, v1, v2) {
                            this.uniforms.vec3[location] = {
                                method: "uniform3f",
                                value: [ v0, v1, v2 ]
                            };
                        }
                    }, {
                        key: "uniform3fa",
                        value: function(location, value) {
                            this.uniforms.vec3[location] = {
                                method: "uniform3f",
                                value: value
                            };
                        }
                    }, {
                        key: "uniform3fv",
                        value: function(location, value) {
                            this.uniforms.single[location] = {
                                method: "uniform3fv",
                                value: value
                            };
                        }
                    }, {
                        key: "uniform3i",
                        value: function(location, v0, v1, v2) {
                            this.uniforms.vec3[location] = {
                                method: "uniform3i",
                                value: [ v0, v1, v2 ]
                            };
                        }
                    }, {
                        key: "uniform3iv",
                        value: function(location, value) {
                            this.uniforms.single[location] = {
                                method: "uniform3iv",
                                value: value
                            };
                        }
                    }, {
                        key: "uniform4f",
                        value: function(location, v0, v1, v2, v3) {
                            this.uniforms.vec4[location] = {
                                method: "uniform4f",
                                value: [ v0, v1, v2, v3 ]
                            };
                        }
                    }, {
                        key: "uniform4fa",
                        value: function(location, value) {
                            this.uniforms.vec4[location] = {
                                method: "uniform4f",
                                value: value
                            };
                        }
                    }, {
                        key: "uniform4fv",
                        value: function(location, value) {
                            this.uniforms.single[location] = {
                                method: "uniform4fv",
                                value: value
                            };
                        }
                    }, {
                        key: "uniform4i",
                        value: function(location, v0, v1, v2, v3) {
                            this.uniforms.vec4[location] = {
                                method: "uniform4i",
                                value: [ v0, v1, v2, v3 ]
                            };
                        }
                    }, {
                        key: "uniform4iv",
                        value: function(location, value) {
                            this.uniforms.single[location] = {
                                method: "uniform4iv",
                                value: value
                            };
                        }
                    }, {
                        key: "uniformMatrix2fv",
                        value: function(location, value) {
                            this.uniforms.single[location] = {
                                method: "uniformMatrix2fv",
                                value: value
                            };
                        }
                    }, {
                        key: "uniformMatrix3fv",
                        value: function(location, value) {
                            this.uniforms.single[location] = {
                                method: "uniformMatrix3fv",
                                value: value
                            };
                        }
                    }, {
                        key: "uniformMatrix4fv",
                        value: function(location, value) {
                            this.uniforms.single[location] = {
                                method: "uniformMatrix4fv",
                                value: value
                            };
                        }
                    } ]);
                }(CoreShaderNode), Rounded = {
                    props: RoundedTemplate.props,
                    update: function(node) {
                        this.uniform4fa("u_radius", calcFactoredRadiusArray(this.props.radius, node.w, node.h));
                    },
                    vertex: "\n  # ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  # else\n  precision mediump float;\n  # endif\n\n  attribute vec2 a_position;\n  attribute vec2 a_textureCoords;\n  attribute vec4 a_color;\n  attribute vec2 a_nodeCoords;\n\n  uniform vec2 u_resolution;\n  uniform float u_pixelRatio;\n\n  varying vec4 v_color;\n  varying vec2 v_textureCoords;\n  varying vec2 v_nodeCoords;\n\n  void main() {\n    vec2 normalized = a_position * u_pixelRatio;\n    vec2 screenSpace = vec2(2.0 / u_resolution.x, -2.0 / u_resolution.y);\n\n    v_color = a_color;\n    v_nodeCoords = a_nodeCoords;\n    v_textureCoords = a_textureCoords;\n\n    gl_Position = vec4(\n      normalized.x * screenSpace.x - 1.0,\n      normalized.y * -abs(screenSpace.y) + 1.0,\n      0.0,\n      1.0\n    );\n  }\n",
                    fragment: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    uniform vec2 u_dimensions;\n    uniform float u_alpha;\n    uniform float u_pixelRatio;\n    uniform sampler2D u_texture;\n    uniform vec4 u_radius;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n    varying vec2 v_nodeCoords;\n\n    void main() {\n      vec2 halfDimensions = u_dimensions * 0.5;\n      vec2 boxUv = v_nodeCoords * u_dimensions - halfDimensions;\n\n      // Branchless radius selection based on quadrant\n      // x: TL, y: TR, z: BR, w: BL\n      vec2 stepVal = step(vec2(0.0), boxUv);\n      float r = mix(\n        mix(u_radius.x, u_radius.y, stepVal.x),\n        mix(u_radius.w, u_radius.z, stepVal.x),\n        stepVal.y\n      );\n\n      vec2 q = abs(boxUv) - halfDimensions + r;\n      float d = min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r;\n\n      float edgeWidth = 1.0 / u_pixelRatio;\n      float alpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, d);\n\n      vec4 color = texture2D(u_texture, v_textureCoords) * v_color;\n      gl_FragColor = color * alpha * u_alpha;\n    }\n  "
                }, props$2 = Object.assign({}, RoundedTemplate.props, getBorderProps("border"), {
                    "border-fill": 0
                }), RoundedWithBorder = {
                    props: {
                        props: props$2
                    }.props,
                    update: function(node) {
                        this.uniformRGBA("u_borderColor", this.props["border-color"]), this.uniformRGBA("u_fillColor", this.props["border-fill"]), 
                        this.uniform4fa("u_borderWidth", this.props["border-w"]), this.uniform1f("u_borderGap", this.props["border-gap"]), 
                        this.uniform1f("u_borderAlign", this.props["border-align"]), this.uniform4fa("u_radius", calcFactoredRadiusArray(this.props.radius, node.w, node.h));
                    },
                    vertex: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    attribute vec2 a_position;\n    attribute vec2 a_textureCoords;\n    attribute vec4 a_color;\n    attribute vec2 a_nodeCoords;\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n    uniform vec2 u_dimensions;\n\n    uniform vec4 u_radius;\n    uniform vec4 u_borderWidth;\n    uniform float u_borderGap;\n    uniform float u_borderAlign;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n    varying vec2 v_nodeCoords;\n\n    varying vec2 v_innerSize;\n    varying vec2 v_outerSize;\n    varying vec2 v_outerBorderUv;\n    varying vec2 v_innerBorderUv;\n    varying vec4 v_innerBorderRadius;\n    varying vec4 v_outerBorderRadius;\n    varying vec2 v_halfDimensions;\n\n    void main() {\n      vec2 vertexPos = a_position * u_pixelRatio;\n      vec2 screenSpace = vec2(2.0 / u_resolution.x, -2.0 / u_resolution.y);\n      vec2 edge = clamp(a_nodeCoords * 2.0 - vec2(1.0), -1.0, 1.0);\n      vec2 edgeOffset = vec2(0.0);\n      float borderZero = 1.0 - step(0.001, dot(abs(u_borderWidth), vec4(1.0)));\n\n      v_innerSize = vec2(0.0);\n      v_outerSize = vec2(0.0);\n\n      // Defaults for the zero-border case. The fragment shader returns before\n      // reading these, so this is belt-and-braces — but an unwritten varying\n      // is undefined in GLSL ES 1.0 and would render garbage on Mali if a\n      // future edit moved a border SDF above that early return.\n      v_outerBorderUv = vec2(0.0);\n      v_innerBorderUv = vec2(0.0);\n      v_outerBorderRadius = u_radius;\n      v_innerBorderRadius = u_radius;\n\n      if(borderZero == 0.0) {\n        vec4 adjustedBorderWidth = u_borderWidth - 1.0 + clamp(u_borderWidth, -1.0, 1.0);\n\n        float borderTop = adjustedBorderWidth.x;\n        float borderRight = adjustedBorderWidth.y;\n        float borderBottom = adjustedBorderWidth.z;\n        float borderLeft = adjustedBorderWidth.w;\n\n        vec2 borderSize = vec2(borderRight + borderLeft, borderTop + borderBottom);\n        vec2 extraSize = borderSize * u_borderAlign;\n        float gapLeft = step(0.001, borderLeft) * u_borderGap;\n        float gapRight = step(0.001, borderRight) * u_borderGap;\n        float gapTop = step(0.001, borderTop) * u_borderGap;\n        float gapBottom = step(0.001, borderBottom) * u_borderGap;\n        vec2 gapSize = vec2(gapLeft + gapRight, gapTop + gapBottom);\n\n        v_outerSize = (u_dimensions + gapSize + extraSize) * 0.5;\n        v_innerSize = v_outerSize - borderSize * 0.5;\n\n        // Use sign() to avoid branching\n        vec2 borderDiff = vec2(borderRight - borderLeft, borderBottom - borderTop);\n        vec2 signDiff = sign(borderDiff);\n        borderDiff = abs(borderDiff);\n\n        vec2 gapDiff = vec2(gapRight - gapLeft, gapBottom - gapTop);\n        vec2 signGapDiff = sign(gapDiff);\n        gapDiff = abs(gapDiff);\n\n        v_outerBorderUv = -signDiff * borderDiff * u_borderAlign * 0.5 - signGapDiff * gapDiff * 0.5;\n        v_innerBorderUv = v_outerBorderUv + signDiff * borderDiff * 0.5;\n\n        v_outerBorderRadius = vec4(\n          max(0.0, u_radius.x + max(borderTop * u_borderAlign + u_borderGap, borderLeft * u_borderAlign + u_borderGap)),\n          max(0.0, u_radius.y + max(borderTop * u_borderAlign + u_borderGap, borderRight * u_borderAlign + u_borderGap)),\n          max(0.0, u_radius.z + max(borderBottom * u_borderAlign + u_borderGap, borderRight * u_borderAlign + u_borderGap)),\n          max(0.0, u_radius.w + max(borderBottom * u_borderAlign + u_borderGap, borderLeft * u_borderAlign + u_borderGap))\n        );\n\n        v_innerBorderRadius = vec4(\n          max(0.0, v_outerBorderRadius.x - max(borderTop, borderLeft)),\n          max(0.0, v_outerBorderRadius.y - max(borderTop, borderRight)),\n          max(0.0, v_outerBorderRadius.z - max(borderBottom, borderRight)),\n          max(0.0, v_outerBorderRadius.w - max(borderBottom, borderLeft))\n        );\n\n        vec2 edgeOffsetExtra = step(u_dimensions * 0.5, v_outerSize) * edge * (extraSize + u_borderGap);\n        edgeOffset = edgeOffsetExtra;\n\n        vertexPos = (a_position + edge + edgeOffset) * u_pixelRatio;\n      }\n\n      gl_Position = vec4(vertexPos.x * screenSpace.x - 1.0, -sign(screenSpace.y) * (vertexPos.y * -abs(screenSpace.y)) + 1.0, 0.0, 1.0);\n\n      v_color = a_color;\n      v_nodeCoords = a_nodeCoords + (screenSpace + edgeOffset) / (u_dimensions);\n      v_textureCoords = a_textureCoords + (screenSpace + edgeOffset) / (u_dimensions);\n\n      v_halfDimensions = u_dimensions * 0.5;\n    }\n  ",
                    fragment: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n    uniform float u_alpha;\n    uniform vec2 u_dimensions;\n    uniform sampler2D u_texture;\n\n    uniform vec4 u_radius;\n    uniform vec4 u_borderWidth;\n    uniform vec4 u_borderColor;\n    uniform vec4 u_fillColor;\n    uniform float u_borderGap;\n    uniform float u_borderAlign;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n    varying vec2 v_nodeCoords;\n\n    varying vec2 v_innerSize;\n    varying vec2 v_outerSize;\n    varying vec2 v_outerBorderUv;\n    varying vec2 v_innerBorderUv;\n    varying vec4 v_innerBorderRadius;\n    varying vec4 v_outerBorderRadius;\n    varying vec2 v_halfDimensions;\n\n    // Branchless quadrant radius select (r: x TL, y TR, z BR, w BL). This one\n    // is driven by the fragment's own position, so it genuinely diverges per\n    // fragment -- it must stay arithmetic, ternaries included.\n    float quadRadius(vec2 p, vec4 r) {\n      vec2 stepVal = step(vec2(0.0), p);\n      return mix(mix(r.x, r.y, stepVal.x), mix(r.w, r.z, stepVal.x), stepVal.y);\n    }\n\n    float roundedBox(vec2 p, vec2 s, vec4 r) {\n      float rad = quadRadius(p, r);\n      vec2 q = abs(p) - s + rad;\n      return (min(max(q.x, q.y), 0.0) + length(max(q, 0.0))) - rad;\n    }\n\n    void main() {\n      vec4 color = texture2D(u_texture, v_textureCoords) * v_color;\n      vec2 boxUv = v_nodeCoords.xy * u_dimensions - v_halfDimensions;\n      float borderZero = 1.0 - step(0.001, dot(abs(u_borderWidth), vec4(1.0)));\n      float edgeWidth = 1.0 / u_pixelRatio;\n\n      // Degenerate case: no border. Every fragment in the draw call takes this\n      // path -- the condition is uniform-driven, so there is no divergence to\n      // serialize, and skipping the two border SDFs saves two length()/sqrt\n      // evaluations per fragment on what is the most common quad in a TV rail.\n      if (borderZero == 1.0) {\n        float nodeDist = roundedBox(boxUv, v_halfDimensions - edgeWidth, u_radius);\n        float nodeAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, nodeDist);\n        gl_FragColor = (color * nodeAlpha) * u_alpha;\n        return;\n      }\n\n      float outerDist = roundedBox(boxUv + v_outerBorderUv, v_outerSize - edgeWidth, v_outerBorderRadius);\n      float innerDist = roundedBox(boxUv + v_innerBorderUv, v_innerSize - edgeWidth, v_innerBorderRadius);\n      float innerAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, innerDist);\n\n      // Second uniform-driven degenerate case: a border with no gap composites\n      // straight from the outer and inner SDFs and never needs the node SDF.\n      // outerAlpha lives in here because only this path uses it.\n      if (abs(u_borderGap) < 0.0001) {\n        float outerAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, outerDist);\n        vec4 resNoGap = mix(vec4(0.0), u_borderColor, outerAlpha * u_borderColor.a);\n        resNoGap = mix(resNoGap, color, innerAlpha);\n        gl_FragColor = resNoGap * u_alpha;\n        return;\n      }\n\n      float nodeDist = roundedBox(boxUv, v_halfDimensions - edgeWidth, u_radius);\n      float nodeAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, nodeDist);\n\n      float gapAlpha = max(0.0, innerAlpha - nodeAlpha);\n      float borderDist = max(-innerDist, outerDist);\n      float borderAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, borderDist);\n\n      vec4 resGap = (color * nodeAlpha) + (u_fillColor * gapAlpha);\n      resGap = mix(resGap, u_borderColor, borderAlpha * u_borderColor.a);\n      gl_FragColor = resGap * u_alpha;\n    }\n  "
                }, props$1 = Object.assign({}, RoundedTemplate.props, getBorderProps("border"), getShadowProps("shadow")), 
                RoundedWithBorderAndShadow = {
                    props: {
                        props: props$1
                    }.props,
                    update: function(node) {
                        var props = this.props;
                        this.uniformRGBA("u_borderColor", props["border-color"]), this.uniform4fa("u_borderWidth", props["border-w"]), 
                        this.uniform1f("u_borderGap", this.props["border-gap"]), this.uniform1f("u_borderAlign", this.props["border-align"]), 
                        this.uniformRGBA("u_shadowColor", props["shadow-color"]), this.uniform4fa("u_shadow", props["shadow-projection"]), 
                        this.uniform4fa("u_radius", calcFactoredRadiusArray(props.radius, node.w, node.h));
                    },
                    vertex: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    attribute vec2 a_position;\n    attribute vec2 a_textureCoords;\n    attribute vec4 a_color;\n    attribute vec2 a_nodeCoords;\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n    uniform vec2 u_dimensions;\n\n    uniform vec4 u_shadow;\n    uniform vec4 u_radius;\n    uniform vec4 u_borderWidth;\n    uniform float u_borderGap;\n    uniform float u_borderAlign;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n    varying vec2 v_nodeCoords;\n\n    varying vec2 v_innerSize;\n    varying vec2 v_outerSize;\n    varying vec2 v_outerBorderUv;\n    varying vec2 v_innerBorderUv;\n    varying vec4 v_innerBorderRadius;\n    varying vec4 v_outerBorderRadius;\n    varying vec2 v_halfDimensions;\n\n    void main() {\n      vec2 screenSpace = vec2(2.0 / u_resolution.x,  -2.0 / u_resolution.y);\n      vec2 edge = clamp(a_nodeCoords * 2.0 - vec2(1.0), -1.0, 1.0);\n      float borderZero = 1.0 - step(0.001, dot(abs(u_borderWidth), vec4(1.0)));\n\n      vec2 edgeOffset = edge * ((u_shadow.w * 2.0)+ u_shadow.z) + u_shadow.xy;\n      vec2 vertexPos = (a_position + edge + edgeOffset) * u_pixelRatio;\n\n      v_innerSize = vec2(0.0);\n      v_outerSize = vec2(0.0);\n\n      // Defaults for the zero-border case. The fragment shader returns before\n      // reading these, so this is belt-and-braces — but an unwritten varying\n      // is undefined in GLSL ES 1.0 and would render garbage on Mali if a\n      // future edit moved a border SDF above that early return.\n      v_outerBorderUv = vec2(0.0);\n      v_innerBorderUv = vec2(0.0);\n      v_outerBorderRadius = u_radius;\n      v_innerBorderRadius = u_radius;\n\n      if(borderZero == 0.0) {\n        vec4 adjustedBorderWidth = u_borderWidth - 1.0 + clamp(u_borderWidth, -1.0, 1.0);\n\n        float borderTop = adjustedBorderWidth.x;\n        float borderRight = adjustedBorderWidth.y;\n        float borderBottom = adjustedBorderWidth.z;\n        float borderLeft = adjustedBorderWidth.w;\n\n        vec2 borderSize = vec2(borderRight + borderLeft, borderTop + borderBottom);\n        vec2 extraSize = borderSize * u_borderAlign;\n        float gapLeft = step(0.001, borderLeft) * u_borderGap;\n        float gapRight = step(0.001, borderRight) * u_borderGap;\n        float gapTop = step(0.001, borderTop) * u_borderGap;\n        float gapBottom = step(0.001, borderBottom) * u_borderGap;\n        vec2 gapSize = vec2(gapLeft + gapRight, gapTop + gapBottom);\n\n        v_outerSize = (u_dimensions + gapSize + extraSize) * 0.5;\n        v_innerSize = v_outerSize - borderSize * 0.5;\n\n        // Use sign() to avoid branching\n        vec2 borderDiff = vec2(borderRight - borderLeft, borderBottom - borderTop);\n        vec2 signDiff = sign(borderDiff);\n        borderDiff = abs(borderDiff);\n\n        vec2 gapDiff = vec2(gapRight - gapLeft, gapBottom - gapTop);\n        vec2 signGapDiff = sign(gapDiff);\n        gapDiff = abs(gapDiff);\n\n        v_outerBorderUv = -signDiff * borderDiff * u_borderAlign * 0.5 - signGapDiff * gapDiff * 0.5;\n        v_innerBorderUv = v_outerBorderUv + signDiff * borderDiff * 0.5;\n\n        v_outerBorderRadius = vec4(\n          max(0.0, u_radius.x + max(borderTop * u_borderAlign + u_borderGap, borderLeft * u_borderAlign + u_borderGap)),\n          max(0.0, u_radius.y + max(borderTop * u_borderAlign + u_borderGap, borderRight * u_borderAlign + u_borderGap)),\n          max(0.0, u_radius.z + max(borderBottom * u_borderAlign + u_borderGap, borderRight * u_borderAlign + u_borderGap)),\n          max(0.0, u_radius.w + max(borderBottom * u_borderAlign + u_borderGap, borderLeft * u_borderAlign + u_borderGap))\n        );\n\n        v_innerBorderRadius = vec4(\n          max(0.0, v_outerBorderRadius.x - max(borderTop, borderLeft)),\n          max(0.0, v_outerBorderRadius.y - max(borderTop, borderRight)),\n          max(0.0, v_outerBorderRadius.z - max(borderBottom, borderRight)),\n          max(0.0, v_outerBorderRadius.w - max(borderBottom, borderLeft))\n        );\n\n        vec2 edgeOffsetExtra = step(u_dimensions * 0.5, v_outerSize) * edge * (extraSize + u_borderGap);\n        edgeOffset += edgeOffsetExtra;\n\n        vertexPos = (a_position + edge + edgeOffset) * u_pixelRatio;\n      }\n\n      gl_Position = vec4(vertexPos.x * screenSpace.x - 1.0, -sign(screenSpace.y) * (vertexPos.y * -abs(screenSpace.y)) + 1.0, 0.0, 1.0);\n\n      v_halfDimensions = u_dimensions * 0.5;\n      v_color = a_color;\n      v_nodeCoords = a_nodeCoords + (screenSpace + edgeOffset) / (u_dimensions);\n      v_textureCoords = a_textureCoords + (screenSpace + edgeOffset) / (u_dimensions);\n    }\n  ",
                    fragment: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n    uniform float u_alpha;\n    uniform vec2 u_dimensions;\n    uniform sampler2D u_texture;\n\n    uniform vec4 u_radius;\n    uniform vec4 u_borderWidth;\n    uniform vec4 u_borderColor;\n    uniform vec4 u_shadowColor;\n    uniform vec4 u_shadow;\n    uniform float u_borderGap;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n    varying vec2 v_nodeCoords;\n\n    varying vec2 v_innerSize;\n    varying vec2 v_outerSize;\n    varying vec2 v_outerBorderUv;\n    varying vec2 v_innerBorderUv;\n    varying vec4 v_innerBorderRadius;\n    varying vec4 v_outerBorderRadius;\n    varying vec2 v_halfDimensions;\n\n    // Branchless quadrant radius select (r: x TL, y TR, z BR, w BL) --\n    // Mali 400-class fragment pipelines serialize any branch, ternaries included.\n    float quadRadius(vec2 p, vec4 r) {\n      vec2 stepVal = step(vec2(0.0), p);\n      return mix(mix(r.x, r.y, stepVal.x), mix(r.w, r.z, stepVal.x), stepVal.y);\n    }\n\n    float roundedBox(vec2 p, vec2 s, vec4 r) {\n      float rad = quadRadius(p, r);\n      vec2 q = abs(p) - s + rad;\n      return (min(max(q.x, q.y), 0.0) + length(max(q, 0.0))) - rad;\n    }\n\n    float shadowBox(vec2 p, vec2 s, vec4 r) {\n      float rad = quadRadius(p, r);\n      vec2 q = abs(p) - s + rad;\n      float dist = min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - rad;\n      return 1.0 - smoothstep(-u_shadow.w, u_shadow.w + u_shadow.z, dist);\n    }\n\n    void main() {\n      vec4 color = texture2D(u_texture, v_textureCoords) * v_color;\n      vec2 boxUv = v_nodeCoords.xy * u_dimensions - v_halfDimensions;\n      float borderZero = 1.0 - step(0.001, dot(abs(u_borderWidth), vec4(1.0)));\n      float edgeWidth = 1.0 / u_pixelRatio;\n\n      // Degenerate case: no border. Uniform-driven, so the whole draw call\n      // takes it together -- no divergence to serialize -- and it drops the\n      // two border SDFs, halving the length()/sqrt count per fragment.\n      if (borderZero == 1.0) {\n        float nodeDist = roundedBox(boxUv, v_halfDimensions - edgeWidth, u_radius);\n        float nodeAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, nodeDist);\n        float shadowAlpha = shadowBox(\n          boxUv - u_shadow.xy,\n          v_halfDimensions + u_shadow.w - edgeWidth,\n          u_radius + u_shadow.z\n        );\n        gl_FragColor = mix(u_shadowColor * shadowAlpha, color, nodeAlpha) * u_alpha;\n        return;\n      }\n\n      // Shadow geometry select, branchless: when the border grows the quad\n      // beyond the node (outer size exceeds half dimensions on either axis)\n      // the shadow hugs the outer border box, otherwise the node box. Kept as\n      // a step()/mix() parameter select into ONE shadowBox call -- it picks\n      // arguments rather than skipping work, so a branch would buy nothing.\n      float outerSel = max(\n        step(v_halfDimensions.x, v_outerSize.x),\n        step(v_halfDimensions.y, v_outerSize.y)\n      );\n      float shadowAlpha = shadowBox(\n        boxUv + v_outerBorderUv * outerSel - u_shadow.xy,\n        mix(v_halfDimensions, v_outerSize, outerSel) + u_shadow.w - edgeWidth,\n        mix(u_radius, v_outerBorderRadius, outerSel) + u_shadow.z\n      );\n      vec4 shadowBase = u_shadowColor * shadowAlpha;\n\n      float outerDist = roundedBox(boxUv + v_outerBorderUv, v_outerSize - edgeWidth, v_outerBorderRadius);\n      float innerDist = roundedBox(boxUv + v_innerBorderUv, v_innerSize - edgeWidth, v_innerBorderRadius);\n\n      // Second uniform-driven degenerate case: a border with no gap never\n      // needs the node SDF. The edge alphas live in here because the gap path\n      // below composites from the raw distances instead.\n      if (abs(u_borderGap) < 0.0001) {\n        float outerAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, outerDist);\n        float innerAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, innerDist);\n        vec4 resNoGap = mix(shadowBase, u_borderColor, outerAlpha * u_borderColor.a);\n        resNoGap = mix(resNoGap, color, innerAlpha);\n        gl_FragColor = resNoGap * u_alpha;\n        return;\n      }\n\n      float nodeDist = roundedBox(boxUv, v_halfDimensions - edgeWidth, u_radius);\n      float nodeAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, nodeDist);\n\n      float borderDist = max(-innerDist, outerDist);\n      float borderAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, borderDist);\n\n      vec4 resFill = mix(shadowBase, color, nodeAlpha);\n      vec4 resGap = mix(resFill, u_borderColor, borderAlpha * u_borderColor.a);\n      gl_FragColor = resGap * u_alpha;\n    }\n  "
                }, props = Object.assign({}, RoundedTemplate.props, getShadowProps("shadow")), RoundedWithShadow = {
                    props: {
                        props: props
                    }.props,
                    update: function(node) {
                        this.uniformRGBA("u_shadow_color", this.props["shadow-color"]), this.uniform4fa("u_shadow", this.props["shadow-projection"]), 
                        this.uniform4fa("u_radius", calcFactoredRadiusArray(this.props.radius, node.w, node.h));
                    },
                    vertex: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    attribute vec2 a_position;\n    attribute vec2 a_textureCoords;\n    attribute vec4 a_color;\n    attribute vec2 a_nodeCoords;\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n    uniform vec2 u_dimensions;\n\n    uniform vec4 u_shadow;\n    uniform vec4 u_radius;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n\n    varying vec2 v_boxUv;\n    varying vec2 v_boxSize;\n    varying vec2 v_boxSmooth;\n    varying vec2 v_shadowBox;\n    varying vec2 v_shadowSize;\n    varying vec4 v_shadowRadius;\n    varying vec2 v_shadowSmooth;\n\n    void main() {\n      vec2 screenSpace = vec2(2.0 / u_resolution.x,  -2.0 / u_resolution.y);\n      vec2 outerEdge = clamp(a_nodeCoords * 2.0 - vec2(1.0), -1.0, 1.0);\n\n      vec2 padding = vec2(max(0.0, u_shadow.w) + u_shadow.z);\n      vec2 offsetShift = mix(min(vec2(0.0), u_shadow.xy), max(vec2(0.0), u_shadow.xy), (outerEdge + 1.0) * 0.5);\n      vec2 shadowEdge = outerEdge * padding + offsetShift;\n\n      vec2 vertexPos = (a_position + outerEdge + shadowEdge) * u_pixelRatio;\n      gl_Position = vec4(vertexPos.x * screenSpace.x - 1.0, -sign(screenSpace.y) * (vertexPos.y * -abs(screenSpace.y)) + 1.0, 0.0, 1.0);\n\n      v_color = a_color;\n      v_textureCoords = a_textureCoords + (screenSpace + shadowEdge) / (u_dimensions);\n\n      float edgeWidth = 1.0 / u_pixelRatio;\n      vec2 halfDimensions = u_dimensions * 0.5;\n\n      v_boxUv = (a_nodeCoords + (screenSpace + shadowEdge) / (u_dimensions)) * u_dimensions - halfDimensions;\n      v_boxSize = halfDimensions - edgeWidth;\n      v_boxSmooth = vec2(-0.5 * edgeWidth, 0.5 * edgeWidth);\n\n      v_shadowBox = v_boxUv - u_shadow.xy;\n      v_shadowSize = halfDimensions + u_shadow.w - edgeWidth;\n      v_shadowRadius = max(vec4(0.0), u_radius + u_shadow.w);\n      v_shadowSmooth = vec2(-u_shadow.z, u_shadow.z + 0.001);\n    }\n  ",
                    fragment: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    uniform float u_alpha;\n    uniform sampler2D u_texture;\n\n    uniform vec4 u_shadow_color;\n    uniform vec4 u_radius;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n\n    varying vec2 v_boxUv;\n    varying vec2 v_boxSize;\n    varying vec2 v_boxSmooth;\n    varying vec2 v_shadowBox;\n    varying vec2 v_shadowSize;\n    varying vec4 v_shadowRadius;\n    varying vec2 v_shadowSmooth;\n\n    // Branchless quadrant radius select (r: x TL, y TR, z BR, w BL) --\n    // Mali 400-class fragment pipelines serialize any branch, ternaries included.\n    float quadRadius(vec2 p, vec4 r) {\n      vec2 stepVal = step(vec2(0.0), p);\n      return mix(mix(r.x, r.y, stepVal.x), mix(r.w, r.z, stepVal.x), stepVal.y);\n    }\n\n    float roundedBox(vec2 p, vec2 s, vec4 r) {\n      float rad = quadRadius(p, r);\n      vec2 q = abs(p) - s + rad;\n      return (min(max(q.x, q.y), 0.0) + length(max(q, 0.0))) - rad;\n    }\n\n    float shadowBox(vec2 p, vec2 s, vec4 r) {\n      float rad = quadRadius(p, r);\n      vec2 q = abs(p) - s + rad;\n      float dist = min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - rad;\n      return 1.0 - smoothstep(v_shadowSmooth.x, v_shadowSmooth.y, dist);\n    }\n\n    void main() {\n      vec4 color = texture2D(u_texture, v_textureCoords) * v_color;\n\n      float boxDist = roundedBox(v_boxUv, v_boxSize, u_radius);\n      float roundedAlpha = 1.0 - smoothstep(v_boxSmooth.x, v_boxSmooth.y, boxDist);\n\n      // Uniform-driven gate: a fully transparent shadow contributes nothing,\n      // so skip its SDF entirely rather than multiplying the result by zero.\n      // The condition is the same for every fragment in the draw call.\n      vec4 resColor = vec4(0.0);\n      if (u_shadow_color.a >= 0.0001) {\n        float shadowAlpha = shadowBox(v_shadowBox, v_shadowSize, v_shadowRadius);\n        resColor = u_shadow_color * shadowAlpha;\n      }\n\n      resColor = mix(resColor, color, min(color.a, roundedAlpha));\n      gl_FragColor = resColor * u_alpha;\n    }\n  "
                }, HolePunch = {
                    props: HolePunchTemplate.props,
                    update: function() {
                        var props = this.props;
                        this.uniform2f("u_pos", props.x, props.y), this.uniform2f("u_size", .5 * props.w, .5 * props.h), 
                        this.uniform4fa("u_radius", calcFactoredRadiusArray(props.radius, props.w, props.h));
                    },
                    getCacheMarkers: function(props) {
                        return "radiusArray:".concat(Array.isArray(props.radius));
                    },
                    fragment: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    uniform float u_alpha;\n    uniform float u_pixelRatio;\n    uniform vec2 u_dimensions;\n    uniform sampler2D u_texture;\n\n    uniform vec2 u_size;\n    uniform vec2 u_pos;\n\n    uniform vec4 u_radius;\n\n    uniform vec4 u_color;\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n\n    void main() {\n      vec4 color = texture2D(u_texture, v_textureCoords) * v_color;\n      vec2 p = (v_textureCoords.xy * u_dimensions.xy - u_pos) - u_size;\n\n      // Branchless radius selection based on quadrant\n      // x: TL, y: TR, z: BR, w: BL\n      vec2 stepVal = step(vec2(0.0), p);\n      float r = mix(\n        mix(u_radius.x, u_radius.y, stepVal.x),\n        mix(u_radius.w, u_radius.z, stepVal.x),\n        stepVal.y\n      );\n\n      p = abs(p) - u_size + r;\n      float dist = min(max(p.x, p.y), 0.0) + length(max(p, 0.0)) - r + 2.0;\n      float roundedAlpha = 1.0 - smoothstep(0.0, u_pixelRatio, dist);\n      gl_FragColor = mix(color, vec4(0.0), min(color.a, roundedAlpha));\n    }\n  "
                }, LinearGradient = {
                    props: LinearGradientTemplate.props,
                    update: function(node) {
                        var props = this.props, angle = props.angle - Math.PI / 180 * 90, c = Math.cos(angle), s = Math.sin(angle), w = node.w, h = node.h, lineDist = Math.abs(w * c) + Math.abs(h * s), gx = -lineDist * c, gy = -lineDist * s, gg = gx * gx + gy * gy, invGG = gg > 0 ? 1 / gg : 0, fx = .5 * lineDist * c + .5 * w, fy = .5 * lineDist * s + .5 * h;
                        this.uniform2f("u_grad_a", w * gx * invGG, h * gy * invGG), this.uniform1f("u_grad_b", -(fx * gx + fy * gy) * invGG), 
                        this.uniform1fv("u_stops", new Float32Array(props.stops));
                        for (var colors = [], i = 0; i < props.colors.length; i++) {
                            var norm = getNormalizedRgbaComponents(props.colors[i]);
                            colors.push(norm[0], norm[1], norm[2], norm[3]);
                        }
                        this.uniform4fv("u_colors", new Float32Array(colors));
                    },
                    getCacheMarkers: function(props) {
                        return "colors:".concat(props.colors.length);
                    },
                    fragment: function(renderer, props) {
                        return "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    #define MAX_STOPS ".concat(props.colors.length, "\n\n    uniform float u_alpha;\n\n    uniform sampler2D u_texture;\n\n    uniform vec2 u_grad_a;\n    uniform float u_grad_b;\n    uniform float u_stops[MAX_STOPS];\n    uniform vec4 u_colors[MAX_STOPS];\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n\n    vec4 getGradientColor(float dist) {\n      dist = clamp(dist, 0.0, 1.0);\n      ").concat(genGradientColors(props.colors.length), "\n      return colorOut;\n    }\n\n    void main() {\n      vec4 color = texture2D(u_texture, v_textureCoords) * v_color;\n      float dist = dot(v_textureCoords, u_grad_a) + u_grad_b;\n      vec4 colorOut = getGradientColor(dist);\n      color = mix(color, colorOut, clamp(colorOut.a, 0.0, 1.0));\n      gl_FragColor = color * u_alpha;\n    }\n  ");
                    }
                }, RadialGradient = {
                    props: RadialGradientTemplate.props,
                    update: function(node) {
                        var props = this.props;
                        this.uniform2f("u_projection", props.pivot[0] * node.w, props.pivot[1] * node.h), 
                        this.uniform2f("u_size", props.w, props.h), this.uniform1fv("u_stops", new Float32Array(props.stops));
                        for (var colors = [], i = 0; i < props.colors.length; i++) {
                            var norm = getNormalizedRgbaComponents(props.colors[i]);
                            colors.push(norm[0], norm[1], norm[2], norm[3]);
                        }
                        this.uniform4fv("u_colors", new Float32Array(colors));
                    },
                    getCacheMarkers: function(props) {
                        return "colors:".concat(props.colors.length);
                    },
                    fragment: function(renderer, props) {
                        return "\n      # ifdef GL_FRAGMENT_PRECISION_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      #define MAX_STOPS ".concat(props.colors.length, "\n\n      uniform float u_alpha;\n      uniform vec2 u_dimensions;\n\n      uniform sampler2D u_texture;\n\n      uniform vec2 u_projection;\n      uniform vec2 u_size;\n\n      uniform float u_stops[MAX_STOPS];\n      uniform vec4 u_colors[MAX_STOPS];\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoords;\n      varying vec2 v_nodeCoords;\n\n      vec4 getGradientColor(float dist) {\n        dist = clamp(dist, 0.0, 1.0);\n        ").concat(genGradientColors(props.colors.length), "\n        return colorOut;\n      }\n\n      void main() {\n        vec4 color = texture2D(u_texture, v_textureCoords) * v_color;\n        vec2 point = v_nodeCoords.xy * u_dimensions;\n        float dist = length((point - u_projection) / u_size);\n\n        vec4 colorOut = getGradientColor(dist);\n        color = mix(color, colorOut, clamp(colorOut.a, 0.0, 1.0));\n        gl_FragColor = color * u_alpha;\n      }\n    ");
                    }
                }, RadialProgressTemplate = {
                    props: {
                        width: 8,
                        radius: 0,
                        progress: {
                            default: 1,
                            resolve: function(value) {
                                return void 0 === value ? this.default : value < 0 ? 0 : value > 1 ? 1 : value;
                            }
                        },
                        startAngle: -Math.PI / 2,
                        direction: 1,
                        colors: {
                            default: [ 4294967295 ],
                            resolve: function(value) {
                                return void 0 !== value && value.length > 0 ? value : [].concat(this.default);
                            }
                        },
                        stops: {
                            default: [ 0 ],
                            resolve: function(value, props) {
                                if (void 0 !== value && value.length === props.colors.length) return value;
                                void 0 === value && (value = []);
                                var len = props.colors.length;
                                if (1 === len) return value[0] = 0, value.length = 1, value;
                                for (var i = 0; i < len; i++) value[i] = i * (1 / (len - 1));
                                return value.length = len, value;
                            }
                        },
                        trackColor: 0,
                        cap: 1,
                        duration: {
                            default: 0,
                            resolve: function(value) {
                                return void 0 === value ? this.default : value < 0 ? 0 : value;
                            }
                        },
                        countdown: 1
                    }
                }, RadialProgress = {
                    props: RadialProgressTemplate.props,
                    time: !0,
                    update: function(node) {
                        var props = this.props, autoRadius = .5 * Math.min(node.w, node.h) - .5 * props.width, radius = props.radius > 0 ? props.radius : autoRadius;
                        this.uniform2f("u_center", .5 * node.w, .5 * node.h), this.uniform1f("u_radius", radius), 
                        this.uniform1f("u_width", props.width), this.uniform1f("u_progress", props.progress), 
                        this.uniform1f("u_startAngle", props.startAngle), this.uniform1f("u_direction", props.direction), 
                        this.uniform1f("u_duration", props.duration), this.uniform1f("u_countdown", props.countdown), 
                        this.uniform1fv("u_stops", new Float32Array(props.stops));
                        for (var colors = [], i = 0; i < props.colors.length; i++) {
                            var norm = getNormalizedRgbaComponents(props.colors[i]);
                            colors.push(norm[0], norm[1], norm[2], norm[3]);
                        }
                        this.uniform4fv("u_colors", new Float32Array(colors));
                        var trackNorm = getNormalizedRgbaComponents(props.trackColor);
                        this.uniform4f("u_trackColor", trackNorm[0], trackNorm[1], trackNorm[2], trackNorm[3]);
                    },
                    getCacheMarkers: function(props) {
                        return "colors:".concat(props.colors.length, "|cap:").concat(props.cap, "|track:").concat(0 !== props.trackColor ? 1 : 0);
                    },
                    fragment: function(renderer, props) {
                        var maxStops = Math.max(props.colors.length, 1);
                        return "\n      # ifdef GL_FRAGMENT_PRECISION_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      #define MAX_STOPS ".concat(maxStops, "\n      #define CAP_ROUND ").concat(props.cap, "\n      #define HAS_TRACK ").concat(0 !== props.trackColor ? 1 : 0, "\n\n      #define TWO_PI 6.28318530717958647692\n\n      uniform float u_alpha;\n      uniform float u_time;\n      uniform vec2 u_dimensions;\n      uniform sampler2D u_texture;\n\n      uniform vec2 u_center;\n      uniform float u_radius;\n      uniform float u_width;\n      uniform float u_progress;\n      uniform float u_startAngle;\n      uniform float u_direction;\n      uniform float u_duration;\n      uniform float u_countdown;\n\n      uniform float u_stops[MAX_STOPS];\n      uniform vec4 u_colors[MAX_STOPS];\n      uniform vec4 u_trackColor;\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoords;\n      varying vec2 v_nodeCoords;\n\n      vec4 getGradientColor(float dist) {\n        dist = clamp(dist, 0.0, 1.0);\n        ").concat(genGradientColors(maxStops), "\n        return colorOut;\n      }\n\n      // Coverage of a disc centered at `c` with radius `r` at pixel `p` (with 1px AA)\n      float discCoverage(vec2 p, vec2 c, float r) {\n        return 1.0 - smoothstep(r - 1.0, r + 1.0, length(p - c));\n      }\n\n      void main() {\n        vec4 base = texture2D(u_texture, v_textureCoords) * v_color;\n\n        // Effective progress: when u_duration > 0 the shader self-animates from\n        // u_time, otherwise we use the static u_progress prop. countdown == 1\n        // drains (1 -> 0), countdown == 0 fills (0 -> 1).\n        // Branchless (Mali 400 serializes uniform branches): the mix()-guarded\n        // denominator keeps the division finite when u_duration == 0 -- a\n        // max()-clamped epsilon would overflow fp16 mediump to Inf/NaN.\n        float hasDuration = step(0.0001, u_duration);\n        float cyclePos = fract(u_time / mix(1.0, u_duration, hasDuration)) * hasDuration;\n        float animProgress = mix(cyclePos, 1.0 - cyclePos, step(0.5, u_countdown));\n        float progress = mix(u_progress, animProgress, hasDuration);\n\n        vec2 p = v_nodeCoords.xy * u_dimensions - u_center;\n        float dist = length(p);\n        float halfW = u_width * 0.5;\n\n        // Ring coverage: 1 inside the stroke band, 0 outside (with 1px AA on both edges)\n        float ringCoverage =\n          smoothstep(u_radius - halfW - 1.0, u_radius - halfW + 1.0, dist) *\n          (1.0 - smoothstep(u_radius + halfW - 1.0, u_radius + halfW + 1.0, dist));\n\n        // Angle along the arc, normalized to [0, 1) starting at u_startAngle\n        float ang = atan(p.y, p.x);\n        float t = mod((ang - u_startAngle) * u_direction, TWO_PI) / TWO_PI;\n\n        // Filled arc coverage (1 if in filled arc, else 0). When progress >= 1 the\n        // whole ring is filled regardless of `t` -- guards against the mod() seam.\n        float arcCoverage = max(step(1.0, progress), step(t, progress));\n        float fillCoverage = ringCoverage * arcCoverage;\n\n        #if CAP_ROUND\n          // Round caps: discs of radius halfW at the start and head of the arc\n          float a0 = u_startAngle;\n          float a1 = u_startAngle + u_direction * progress * TWO_PI;\n          vec2 cap0 = vec2(cos(a0), sin(a0)) * u_radius;\n          vec2 cap1 = vec2(cos(a1), sin(a1)) * u_radius;\n          float capMask = max(discCoverage(p, cap0, halfW), discCoverage(p, cap1, halfW));\n          // Caps only visible when there's something to cap (progress > 0 and < 1).\n          float capGate = step(0.0001, progress) * step(progress, 0.9999);\n          fillCoverage = max(fillCoverage, capMask * capGate);\n        #endif\n\n        // Sample gradient. Normalize `t` to the *filled* portion so the gradient\n        // spans the visible arc end-to-end regardless of progress. mix()-guarded\n        // denominator: safe at progress == 0 without fp16 overflow.\n        float hasProgress = step(0.000001, progress);\n        float gradT = clamp(t / mix(1.0, progress, hasProgress), 0.0, 1.0) * hasProgress;\n        vec4 fillCol = getGradientColor(gradT);\n\n        // Composite: track under fill (if track enabled), both gated by ringCoverage.\n        // We work in PREMULTIPLIED-alpha space here so AA edges composite cleanly\n        // against `base` -- mix(base.rgb, layer.rgb, la) with a coverage-scaled\n        // `layer` would multiply layer.rgb by coverage a second time and darken\n        // the AA falloff (see issue #36). The renderer's blend func is\n        // (ONE, ONE_MINUS_SRC_ALPHA), which expects premultiplied output.\n        vec4 fillPM = vec4(fillCol.rgb * fillCol.a, fillCol.a);\n        vec4 layer = vec4(0.0);\n        #if HAS_TRACK\n          vec4 trackPM = vec4(u_trackColor.rgb * u_trackColor.a, u_trackColor.a);\n          float trackCoverage = ringCoverage * (1.0 - fillCoverage);\n          layer = trackPM * trackCoverage + fillPM * fillCoverage;\n        #else\n          layer = fillPM * fillCoverage;\n        #endif\n\n        // Apply node opacity to the introduced ring/track colors. They come\n        // from u_colors / u_trackColor and do not carry worldAlpha, so without\n        // this a fading RadialProgress node would keep its ring fully opaque.\n        // `base` already includes worldAlpha (via v_color), so it is left as-is\n        // to avoid double-applying. Scaling a premultiplied layer is valid.\n        layer *= u_alpha;\n\n        // Premultiplied \"over\": out = src + dst*(1 - src.a). The output stays\n        // visible on a fully-transparent `base` because layer brings its own alpha.\n        float la = clamp(layer.a, 0.0, 1.0);\n        vec3 blended = base.rgb * (1.0 - la) + layer.rgb;\n        float outA = base.a + la * (1.0 - base.a);\n        gl_FragColor = vec4(blended, outA);\n      }\n    ");
                    }
                }, invisibleChars = /[\u200B\u200C\u200D\uFEFF\u00AD\u2060]/g, SdfFontHandler_exports = __exportAll({
                    MAX_FONT_LOAD_RETRIES: function() {
                        return 3;
                    },
                    canRenderFont: function() {
                        return canRenderFont$1;
                    },
                    getAtlas: function() {
                        return _getAtlas;
                    },
                    getFontData: function() {
                        return _getFontData;
                    },
                    getFontFamilies: function() {
                        return getFontFamilies$1;
                    },
                    getFontMetrics: function() {
                        return getFontMetrics$1;
                    },
                    getLoadedFonts: function() {
                        return _getLoadedFonts;
                    },
                    getMaxCharHeight: function() {
                        return _getMaxCharHeight;
                    },
                    init: function() {
                        return init$3;
                    },
                    isFontLoaded: function() {
                        return isFontLoaded$1;
                    },
                    loadFont: function() {
                        return loadFont$1;
                    },
                    measureText: function() {
                        return measureText$1;
                    },
                    processFontMetrics: function() {
                        return processFontMetrics$1;
                    },
                    stopWaitingForFont: function() {
                        return stopWaitingForFont$1;
                    },
                    type: function() {
                        return "sdf";
                    },
                    unloadFont: function() {
                        return _unloadFont;
                    },
                    waitingForFont: function() {
                        return waitingForFont$1;
                    }
                }), fontCache$1 = new Map, fontLoadPromises$1 = new Map, normalizedMetrics$1 = new Map, 
                nodesWaitingForFont$1 = Object.create(null), initialized$1 = !1, buildKerningTable = function(kernings) {
                    for (var kerningTable = {}, i = 0, length = kernings.length; i < length; ) {
                        var kerning = kernings[i];
                        if (i++, void 0 !== kerning) {
                            var second = kerning.second, firsts = kerningTable[second];
                            void 0 === firsts && (firsts = {}, kerningTable[second] = firsts), firsts[kerning.first] = kerning.amount;
                        }
                    }
                    return kerningTable;
                }, buildGlyphMap = function(chars) {
                    for (var glyphMap = new Map, maxCharHeight = 0, i = 0, length = chars.length; i < length; ) {
                        var glyph = chars[i];
                        if (i++, void 0 !== glyph) {
                            glyphMap.set(glyph.id, glyph);
                            var charHeight = glyph.yoffset + glyph.height;
                            charHeight > maxCharHeight && (maxCharHeight = charHeight);
                        }
                    }
                    return glyphMap;
                }, processFontData$1 = function(fontFamily, fontData, atlasTexture, metrics) {
                    for (var glyphMap = buildGlyphMap(fontData.chars), kernings = buildKerningTable(fontData.kernings), maxCharHeight = 0, i = 0, length = fontData.chars.length; i < length; ) {
                        var glyph = fontData.chars[i];
                        if (void 0 !== glyph) {
                            var charHeight = glyph.yoffset + glyph.height;
                            charHeight > maxCharHeight && (maxCharHeight = charHeight);
                        }
                        i++;
                    }
                    if (void 0 === metrics && void 0 === fontData.lightningMetrics && console.warn("Font metrics not found for SDF font ".concat(fontFamily, ". Make sure you are using the latest version of the Lightning 3 msdf-generator tool to generate your SDF fonts. Using default metrics.")), 
                    void 0 === (metrics = metrics || fontData.lightningMetrics || {
                        ascender: 800,
                        descender: -200,
                        lineGap: 200,
                        unitsPerEm: 1e3
                    }).capHeight) {
                        var capGlyph = glyphMap.get(72);
                        if (void 0 !== capGlyph) {
                            var capHeightAtlasPx = fontData.common.base - capGlyph.yoffset;
                            metrics = _objectSpread(_objectSpread({}, metrics), {}, {
                                capHeight: capHeightAtlasPx / fontData.info.size * metrics.unitsPerEm
                            });
                        }
                    }
                    if (void 0 === metrics.xHeight) {
                        var xGlyph = glyphMap.get(120);
                        if (void 0 !== xGlyph) {
                            var xHeightAtlasPx = fontData.common.base - xGlyph.yoffset;
                            metrics = _objectSpread(_objectSpread({}, metrics), {}, {
                                xHeight: xHeightAtlasPx / fontData.info.size * metrics.unitsPerEm
                            });
                        }
                    }
                    fontCache$1.set(fontFamily, {
                        data: fontData,
                        glyphMap: glyphMap,
                        kernings: kernings,
                        atlasTexture: atlasTexture,
                        metrics: metrics,
                        maxCharHeight: maxCharHeight
                    });
                }, canRenderFont$1 = function(trProps) {
                    return isFontLoaded$1(trProps.fontFamily) || fontLoadPromises$1.has(trProps.fontFamily);
                }, loadFont$1 = function(stage, options) {
                    var fontFamily = options.fontFamily, atlasUrl = options.atlasUrl, atlasDataUrl = options.atlasDataUrl, metrics = options.metrics, names = Array.isArray(fontFamily) ? fontFamily : [ fontFamily ], primary = names[0], prefetched = takeSdfPrefetch(primary);
                    if (void 0 !== fontCache$1.get(primary)) return Promise.resolve();
                    var existingPromise = fontLoadPromises$1.get(primary);
                    if (void 0 !== existingPromise) return existingPromise;
                    if (void 0 === atlasDataUrl) return Promise.reject(new Error("Atlas data URL must be provided for SDF font: ".concat(primary)));
                    for (var i = 0; i < names.length; i++) {
                        var name = names[i];
                        void 0 === nodesWaitingForFont$1[name] && (nodesWaitingForFont$1[name] = []);
                    }
                    for (var n, fetchFontData = function() {
                        return new Promise(function(resolve, reject) {
                            var xhr = new XMLHttpRequest;
                            xhr.open("GET", atlasDataUrl, !0), xhr.responseType = "json", xhr.onload = function() {
                                if (xhr.status >= 200 && xhr.status < 300 || 0 === xhr.status) {
                                    var data = xhr.response;
                                    if ("string" == typeof data) try {
                                        data = JSON.parse(data);
                                    } catch (e) {
                                        return void reject(new Error("Failed to parse font data JSON"));
                                    }
                                    resolve(data);
                                } else reject(new Error("Failed to load font data: ".concat(xhr.statusText)));
                            }, xhr.onerror = function() {
                                reject(new Error("Network error occurred while trying to load the font data."));
                            }, xhr.send(null);
                        });
                    }, loadAtlas = function(fontData, atlasBlob) {
                        return fontData && fontData.chars ? atlasUrl ? new Promise(function(resolve, reject) {
                            for (var atlasTexture = stage.txManager.createTexture("ImageTexture", {
                                src: null !== atlasBlob ? atlasBlob : atlasUrl,
                                key: atlasUrl,
                                premultiplyAlpha: !1
                            }), _i = 0; _i < names.length; _i++) atlasTexture.setRenderableOwner(names[_i], !0);
                            atlasTexture.preventCleanup = !0;
                            var onLoaded = function() {
                                processFontData$1(primary, fontData, atlasTexture, metrics);
                                for (var cached = fontCache$1.get(primary), _i2 = 1; _i2 < names.length; _i2++) fontCache$1.set(names[_i2], cached);
                                for (var _i3 = 0; _i3 < names.length; _i3++) {
                                    var _name = names[_i3], list = nodesWaitingForFont$1[_name];
                                    if (void 0 !== list) {
                                        for (var key in list) list[key].setUpdateType(UpdateType.Local);
                                        delete nodesWaitingForFont$1[_name];
                                    }
                                }
                                resolve();
                            };
                            "loaded" !== atlasTexture.state ? (atlasTexture.on("loaded", onLoaded), atlasTexture.on("failed", function(_target, error) {
                                for (var _i4 = 0; _i4 < names.length; _i4++) atlasTexture.setRenderableOwner(names[_i4], !1);
                                stage.txManager.removeTextureFromCache(atlasTexture), reject(error);
                            })) : onLoaded();
                        }) : Promise.reject(new Error("Atlas texture must be provided for SDF fonts")) : Promise.reject(new Error("Invalid SDF font data format"));
                    }, loadPromise = (n = _regenerator().m(function _callee() {
                        var lastError, attempt, _ref, fontData, atlasBlob, _i5, _i6, _t, _t2, _t3, _t4, _t5, _t6;
                        return _regenerator().w(function(_context2) {
                            for (;;) switch (_context2.p = _context2.n) {
                              case 0:
                                attempt = 0;

                              case 1:
                                if (!(attempt <= 3)) {
                                    _context2.n = 16;
                                    break;
                                }
                                if (_context2.p = 2, 0 !== attempt || void 0 === prefetched) {
                                    _context2.n = 4;
                                    break;
                                }
                                return _context2.n = 3, prefetched.data;

                              case 3:
                                _t2 = _context2.v, _context2.n = 5;
                                break;

                              case 4:
                                _t2 = null;

                              case 5:
                                if (_t3 = _ref = _t2, !(_t = null !== _t3)) {
                                    _context2.n = 6;
                                    break;
                                }
                                _t = void 0 !== _ref;

                              case 6:
                                if (!_t) {
                                    _context2.n = 7;
                                    break;
                                }
                                _t4 = _ref, _context2.n = 9;
                                break;

                              case 7:
                                return _context2.n = 8, fetchFontData();

                              case 8:
                                _t4 = _context2.v;

                              case 9:
                                if (fontData = _t4, 0 !== attempt || void 0 === prefetched) {
                                    _context2.n = 11;
                                    break;
                                }
                                return _context2.n = 10, prefetched.atlas;

                              case 10:
                                _t5 = _context2.v, _context2.n = 12;
                                break;

                              case 11:
                                _t5 = null;

                              case 12:
                                return atlasBlob = _t5, _context2.n = 13, loadAtlas(fontData, atlasBlob);

                              case 13:
                                for (_i5 = 0; _i5 < names.length; _i5++) fontLoadPromises$1.delete(names[_i5]);
                                return _context2.a(2);

                              case 14:
                                _context2.p = 14, _t6 = _context2.v, lastError = _t6, attempt < 3 && console.warn('SDF font "'.concat(primary, '" failed to load (attempt ').concat(attempt + 1, " of 4), retrying."), _t6);

                              case 15:
                                attempt++, _context2.n = 1;
                                break;

                              case 16:
                                for (_i6 = 0; _i6 < names.length; _i6++) fontLoadPromises$1.delete(names[_i6]), 
                                fontCache$1.delete(names[_i6]);
                                throw console.error("Failed to load SDF font: ".concat(primary), lastError), lastError;

                              case 17:
                                return _context2.a(2);
                            }
                        }, _callee, null, [ [ 2, 14 ] ]);
                    }), function() {
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
                    })(), _i7 = 0; _i7 < names.length; _i7++) fontLoadPromises$1.set(names[_i7], loadPromise);
                    return loadPromise;
                }, waitingForFont$1 = function(fontFamily, node) {
                    void 0 !== nodesWaitingForFont$1[fontFamily] && (nodesWaitingForFont$1[fontFamily][node.id] = node);
                }, stopWaitingForFont$1 = function(fontFamily, node) {
                    void 0 !== nodesWaitingForFont$1[fontFamily] && delete nodesWaitingForFont$1[fontFamily][node.id];
                }, getFontFamilies$1 = function() {
                    return {};
                }, init$3 = function(c) {
                    !0 !== initialized$1 && (initialized$1 = !0);
                }, isFontLoaded$1 = function(fontFamily) {
                    return fontCache$1.has(fontFamily);
                }, getFontMetrics$1 = function(fontFamily, fontSize) {
                    var label = fontFamily + "_" + fontSize, metricsCache = normalizedMetrics$1.get(label);
                    if (void 0 !== metricsCache) return metricsCache;
                    var metrics = fontCache$1.get(fontFamily).metrics;
                    return processFontMetrics$1(fontFamily, fontSize, metrics);
                }, processFontMetrics$1 = function(fontFamily, fontSize, metrics) {
                    var label = fontFamily + "_" + fontSize, normalized = normalizeFontMetrics(metrics, fontSize);
                    return normalizedMetrics$1.set(label, normalized), normalized;
                }, _getAtlas = function(fontFamily) {
                    var cache = fontCache$1.get(fontFamily);
                    return void 0 !== cache ? cache.atlasTexture : null;
                }, _getFontData = function(fontFamily) {
                    return fontCache$1.get(fontFamily);
                }, _getMaxCharHeight = function(fontFamily) {
                    var cache = fontCache$1.get(fontFamily);
                    return void 0 !== cache ? cache.maxCharHeight : 0;
                }, _getLoadedFonts = function() {
                    return Array.from(fontCache$1.keys());
                }, _unloadFont = function(fontFamily) {
                    var cache = fontCache$1.get(fontFamily);
                    void 0 !== cache && ("function" == typeof cache.atlasTexture.free && cache.atlasTexture.free(), 
                    fontCache$1.delete(fontFamily));
                }, measureText$1 = function(text, fontFamily, letterSpacing) {
                    var cache = fontCache$1.get(fontFamily);
                    if (void 0 === cache) return 0;
                    var glyphMap = cache.glyphMap, kernings = cache.kernings, textLength = text.length;
                    if (1 === textLength) {
                        var codepoint = text.codePointAt(0);
                        if (8203 === codepoint) return 0;
                        if (!0 === hasZeroWidthSpace(text[0])) return 0;
                        var glyph = glyphMap.get(codepoint);
                        return void 0 === glyph && void 0 === (glyph = glyphMap.get(32)) ? 0 : glyph.xadvance + letterSpacing;
                    }
                    for (var width = 0, prevGlyphId = 0, i = 0; i < textLength; i++) {
                        var _codepoint = text.codePointAt(i);
                        if (_codepoint > 65535 && i++, 8203 !== _codepoint) if (!0 !== hasZeroWidthSpace(text[i])) {
                            var _glyph = glyphMap.get(_codepoint);
                            if (void 0 !== _glyph || void 0 !== (_glyph = glyphMap.get(32))) {
                                var advance = _glyph.xadvance;
                                if (0 !== prevGlyphId) {
                                    var seconds = kernings[_glyph.id];
                                    if (void 0 !== seconds) {
                                        var amount = seconds[prevGlyphId];
                                        void 0 !== amount && (advance += amount);
                                    }
                                }
                                width += advance + letterSpacing, prevGlyphId = _glyph.id;
                            }
                        }
                    }
                    return width;
                }, SdfRenderOp = function(_CoreRenderOp) {
                    function SdfRenderOp(renderer) {
                        var _this3;
                        return (_this3 = _callSuper(this, SdfRenderOp)).renderer = void 0, _this3.numQuads = 0, 
                        _this3.time = 0, _this3.stage = void 0, _this3.startQuad = 0, _this3.translateX = 0, 
                        _this3.translateY = 0, _this3.shader = void 0, _this3.quadBufferCollection = void 0, 
                        _this3.renderOpTexture = void 0, _this3.worldAlpha = 0, _this3.clippingRect = void 0, 
                        _this3.w = 0, _this3.h = 0, _this3.renderer = renderer, _this3.stage = renderer.stage, 
                        _this3;
                    }
                    return _inherits(SdfRenderOp, _CoreRenderOp), _createClass(SdfRenderOp, [ {
                        key: "init",
                        value: function(shader, quadBufferCollection, renderOpTexture, worldAlpha, clippingRect, w, h, startQuad, numQuads, translateX, translateY) {
                            this.shader = shader, this.quadBufferCollection = quadBufferCollection, this.renderOpTexture = renderOpTexture, 
                            this.worldAlpha = worldAlpha, this.clippingRect = clippingRect, this.w = w, this.h = h, 
                            this.startQuad = startQuad, this.numQuads = numQuads, this.translateX = translateX, 
                            this.translateY = translateY, this.time = 0;
                        }
                    }, {
                        key: "draw",
                        value: function() {
                            var _this$renderer = this.renderer, glw = _this$renderer.glw, stage = _this$renderer.stage;
                            if (this.renderer.useShader(this.shader.program), this.shader.program.bindRenderOp(this, this.quadBufferCollection), 
                            !0 === this.clippingRect.valid) {
                                var pixelRatio = stage.pixelRatio, clipX = Math.round(this.clippingRect.x * pixelRatio), clipWidth = Math.round(this.clippingRect.w * pixelRatio), clipHeight = Math.round(this.clippingRect.h * pixelRatio), clipY = Math.round(glw.canvasH - clipHeight - this.clippingRect.y * pixelRatio);
                                glw.setScissorTest(!0), glw.scissor(clipX, clipY, clipWidth, clipHeight);
                            } else glw.setScissorTest(!1);
                            var byteOffset = 6 * this.startQuad * 2;
                            glw.drawElements(glw.TRIANGLES, 6 * this.numQuads, glw.UNSIGNED_SHORT, byteOffset);
                        }
                    } ]);
                }(_createClass(function() {})), TRANSPARENT_TEXTURE_DATA = new Uint8Array([ 0, 0, 0, 0 ]), 
                WebGlCtxSubTexture = function(_WebGlCtxTexture) {
                    function WebGlCtxSubTexture(glw, memManager, textureSource) {
                        return _callSuper(this, WebGlCtxSubTexture, [ glw, memManager, textureSource ]);
                    }
                    return _inherits(WebGlCtxSubTexture, _WebGlCtxTexture), _createClass(WebGlCtxSubTexture, [ {
                        key: "onLoadRequest",
                        value: function() {
                            var props = this.textureSource.textureData;
                            return props.data instanceof Uint8Array ? {
                                w: 1,
                                h: 1
                            } : this.extractDimensions(props.data);
                        }
                    }, {
                        key: "extractDimensions",
                        value: function(data) {
                            return null === data ? {
                                w: 0,
                                h: 0
                            } : !0 === this.hasWidthHeight(data) ? {
                                w: data.width,
                                h: data.height
                            } : !0 === this.hasWH(data) ? {
                                w: data.w,
                                h: data.h
                            } : {
                                w: 0,
                                h: 0
                            };
                        }
                    }, {
                        key: "hasWidthHeight",
                        value: function(data) {
                            return "number" == typeof data.width && "number" == typeof data.height;
                        }
                    }, {
                        key: "hasWH",
                        value: function(data) {
                            return "number" == typeof data.w && "number" == typeof data.h;
                        }
                    } ]);
                }(WebGlCtxTexture = function(_CoreContextTexture) {
                    function WebGlCtxTexture(glw, memManager, textureSource) {
                        var _this4;
                        return (_this4 = _callSuper(this, WebGlCtxTexture, [ memManager, textureSource ])).glw = void 0, 
                        _this4._nativeCtxTexture = null, _this4._w = 0, _this4._h = 0, _this4.txCoords = UNIT_TEXTURE_COORDS, 
                        _this4.glw = glw, _this4;
                    }
                    return _inherits(WebGlCtxTexture, _CoreContextTexture), _createClass(WebGlCtxTexture, [ {
                        key: "checkGLError",
                        value: function() {
                            return "failed" === this.state;
                        }
                    }, {
                        key: "ctxTexture",
                        get: function() {
                            return "freed" === this.state ? (this.load(), null) : this._nativeCtxTexture;
                        }
                    }, {
                        key: "w",
                        get: function() {
                            return this._w;
                        }
                    }, {
                        key: "h",
                        get: function() {
                            return this._h;
                        }
                    }, {
                        key: "load",
                        value: function() {
                            if ("loading" !== this.state && "loaded" !== this.state) {
                                if (this.state = "loading", this.textureSource.setState("loading"), this._nativeCtxTexture = this.createNativeCtxTexture(), 
                                null === this._nativeCtxTexture) {
                                    this.state = "failed";
                                    var error = new Error("Could not create WebGL Texture");
                                    return this.textureSource.setState("failed", error), void console.error("Could not create WebGL Texture");
                                }
                                try {
                                    var _this$onLoadRequest = this.onLoadRequest(), w = _this$onLoadRequest.w, h = _this$onLoadRequest.h;
                                    if ("freed" === this.state) return;
                                    this.state = "loaded", this._w = w, this._h = h, this.textureSource.setState("loaded", {
                                        w: w,
                                        h: h
                                    }), this.textureSource.freeTextureData();
                                } catch (err) {
                                    if ("freed" === this.state) return;
                                    this.state = "failed";
                                    var _error = err instanceof Error ? err : new Error(String(err));
                                    this.textureSource.setState("failed", _error), this.textureSource.freeTextureData(), 
                                    console.error(err);
                                }
                            }
                        }
                    }, {
                        key: "onLoadRequest",
                        value: function() {
                            var glw = this.glw, textureData = this.textureSource.textureData;
                            if (null === textureData || null === this._nativeCtxTexture) throw new Error("Texture data or native texture is null " + this.textureSource.type);
                            var w = 0, h = 0;
                            glw.activeTexture(0);
                            var tdata = textureData.data, format = glw.RGBA;
                            if ("undefined" != typeof ImageBitmap && tdata instanceof ImageBitmap || tdata instanceof ImageData || !0 === isHTMLImageElement(tdata)) {
                                if (w = tdata.width, h = tdata.height, glw.bindTexture(this._nativeCtxTexture), 
                                glw.pixelStorei(glw.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !!textureData.premultiplyAlpha), 
                                glw.texImage2D(0, format, format, glw.UNSIGNED_BYTE, tdata), !0 === this.checkGLError()) throw this.textureSource.error || new Error("WebGL Error");
                                this.setTextureMemUse(h * w * 4 * 1.1);
                            } else if (null === tdata) w = 0, h = 0, glw.bindTexture(this._nativeCtxTexture), 
                            glw.texImage2D(0, format, 1, 1, 0, format, glw.UNSIGNED_BYTE, TRANSPARENT_TEXTURE_DATA), 
                            this.setTextureMemUse(TRANSPARENT_TEXTURE_DATA.byteLength); else if ("mipmaps" in tdata && tdata.mipmaps) {
                                var _mipmaps$0$byteLength, _mipmaps$, mipmaps = tdata.mipmaps, _type = tdata.type, blockInfo = tdata.blockInfo;
                                if (uploadCompressedTexture[_type](glw, this._nativeCtxTexture, tdata), !0 === this.checkGLError()) throw this.textureSource.error || new Error("WebGL Error");
                                w = tdata.w, h = tdata.h, this.txCoords = createTextureCoords(0, 0, w / (Math.ceil(w / blockInfo.width) * blockInfo.width), h / (Math.ceil(h / blockInfo.height) * blockInfo.height)), 
                                this.setTextureMemUse(null !== (_mipmaps$0$byteLength = null == (_mipmaps$ = mipmaps[0]) ? void 0 : _mipmaps$.byteLength) && void 0 !== _mipmaps$0$byteLength ? _mipmaps$0$byteLength : 0);
                            } else {
                                if (!(tdata && tdata instanceof Uint8Array)) throw new Error("WebGlCoreCtxTexture.onLoadRequest: Unexpected textureData returned");
                                if (w = 1, h = 1, glw.bindTexture(this._nativeCtxTexture), glw.pixelStorei(glw.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !!textureData.premultiplyAlpha), 
                                glw.texImage2D(0, format, w, h, 0, format, glw.UNSIGNED_BYTE, tdata), !0 === this.checkGLError()) throw this.textureSource.error || new Error("WebGL Error");
                                this.setTextureMemUse(w * h * 4);
                            }
                            return {
                                w: w,
                                h: h
                            };
                        }
                    }, {
                        key: "free",
                        value: function() {
                            "freed" !== this.state && (this.state = "freed", this.textureSource.setState("freed"), 
                            this.release());
                        }
                    }, {
                        key: "release",
                        value: function() {
                            this._w = 0, this._h = 0, null !== this._nativeCtxTexture && (this.glw.deleteTexture(this._nativeCtxTexture), 
                            this.setTextureMemUse(0), this._nativeCtxTexture = null), this.textureSource.freeTextureData();
                        }
                    }, {
                        key: "createNativeCtxTexture",
                        value: function() {
                            var glw = this.glw, nativeTexture = glw.createTexture();
                            return nativeTexture ? (glw.activeTexture(0), glw.bindTexture(nativeTexture), glw.texParameteri(glw.TEXTURE_MAG_FILTER, glw.LINEAR), 
                            glw.texParameteri(glw.TEXTURE_MIN_FILTER, glw.LINEAR), glw.texParameteri(glw.TEXTURE_WRAP_S, glw.CLAMP_TO_EDGE), 
                            glw.texParameteri(glw.TEXTURE_WRAP_T, glw.CLAMP_TO_EDGE), nativeTexture) : null;
                        }
                    } ]);
                }(CoreContextTexture)), BufferCollection = function() {
                    return _createClass(function(config) {
                        this.config = void 0, this._lookup = new Map, this.config = config;
                        var _step6, _iterator6 = _createForOfIteratorHelper(config);
                        try {
                            for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
                                var item = _step6.value;
                                for (var attrName in item.attributes) item.attributes[attrName] && !this._lookup.has(attrName) && this._lookup.set(attrName, item);
                            }
                        } catch (err) {
                            _iterator6.e(err);
                        } finally {
                            _iterator6.f();
                        }
                    }, [ {
                        key: "getBuffer",
                        value: function(attributeName) {
                            var _this$_lookup$get;
                            return null == (_this$_lookup$get = this._lookup.get(attributeName)) ? void 0 : _this$_lookup$get.buffer;
                        }
                    }, {
                        key: "getAttributeInfo",
                        value: function(attributeName) {
                            var _this$_lookup$get2;
                            return null == (_this$_lookup$get2 = this._lookup.get(attributeName)) ? void 0 : _this$_lookup$get2.attributes[attributeName];
                        }
                    } ]);
                }(), WebGlContextWrapper = function() {
                    return _createClass(function(gl) {
                        var disableVertexArrayObject = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        this.gl = void 0, this.activeTextureUnit = 0, this.texture2dUnits = void 0, this.texture2dParams = new WeakMap, 
                        this.scissorEnabled = void 0, this.scissorX = void 0, this.scissorY = void 0, this.scissorWidth = void 0, 
                        this.scissorHeight = void 0, this.blendEnabled = void 0, this.blendSrcRgb = void 0, 
                        this.blendDstRgb = void 0, this.blendSrcAlpha = void 0, this.blendDstAlpha = void 0, 
                        this.boundArrayBuffer = void 0, this.boundElementArrayBuffer = void 0, this.curProgram = void 0, 
                        this.curUniformLocations = {}, this.gl2 = void 0, this.boundVertexArray = null, 
                        this.vaoExt = void 0, this.canUseVertexArrayObject = void 0, this.isWebGl2 = void 0, 
                        this.canvas = void 0, this.canvasW = void 0, this.canvasH = void 0, this.MAX_RENDERBUFFER_SIZE = void 0, 
                        this.MAX_TEXTURE_SIZE = void 0, this.MAX_VIEWPORT_DIMS = void 0, this.MAX_VERTEX_TEXTURE_IMAGE_UNITS = void 0, 
                        this.MAX_TEXTURE_IMAGE_UNITS = void 0, this.MAX_COMBINED_TEXTURE_IMAGE_UNITS = void 0, 
                        this.MAX_VERTEX_ATTRIBS = void 0, this.MAX_VARYING_VECTORS = void 0, this.MAX_VERTEX_UNIFORM_VECTORS = void 0, 
                        this.MAX_FRAGMENT_UNIFORM_VECTORS = void 0, this.TEXTURE_MAG_FILTER = void 0, this.TEXTURE_MIN_FILTER = void 0, 
                        this.TEXTURE_WRAP_S = void 0, this.TEXTURE_WRAP_T = void 0, this.LINEAR = void 0, 
                        this.LINEAR_MIPMAP_LINEAR = void 0, this.CLAMP_TO_EDGE = void 0, this.RGB = void 0, 
                        this.RGBA = void 0, this.UNSIGNED_BYTE = void 0, this.UNPACK_PREMULTIPLY_ALPHA_WEBGL = void 0, 
                        this.UNPACK_FLIP_Y_WEBGL = void 0, this.FLOAT = void 0, this.TRIANGLES = void 0, 
                        this.UNSIGNED_SHORT = void 0, this.ONE = void 0, this.ONE_MINUS_SRC_ALPHA = void 0, 
                        this.VERTEX_SHADER = void 0, this.FRAGMENT_SHADER = void 0, this.STATIC_DRAW = void 0, 
                        this.COMPILE_STATUS = void 0, this.LINK_STATUS = void 0, this.DYNAMIC_DRAW = void 0, 
                        this.INVALID_ENUM = void 0, this.INVALID_OPERATION = void 0, this.gl = gl, this.activeTextureUnit = 0;
                        var maxTextureUnits = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);
                        this.texture2dUnits = new Array(maxTextureUnits).fill(null), this.scissorEnabled = !1, 
                        this.scissorX = 0, this.scissorY = 0, this.scissorWidth = gl.drawingBufferWidth, 
                        this.scissorHeight = gl.drawingBufferHeight, this.blendEnabled = !1, this.blendSrcRgb = gl.ONE, 
                        this.blendDstRgb = gl.ZERO, this.blendSrcAlpha = gl.ONE, this.blendDstAlpha = gl.ZERO, 
                        this.boundArrayBuffer = null, this.boundElementArrayBuffer = null, this.curProgram = null, 
                        this.gl2 = self.WebGL2RenderingContext && gl instanceof self.WebGL2RenderingContext ? gl : null, 
                        this.vaoExt = null === this.gl2 && !0 !== disableVertexArrayObject ? gl.getExtension("OES_vertex_array_object") : null, 
                        this.canUseVertexArrayObject = !0 !== disableVertexArrayObject && (null !== this.gl2 || null !== this.vaoExt), 
                        this.isWebGl2 = null !== this.gl2, this.canvas = gl.canvas, this.canvasW = gl.canvas.width, 
                        this.canvasH = gl.canvas.height, this.MAX_RENDERBUFFER_SIZE = gl.MAX_RENDERBUFFER_SIZE, 
                        this.MAX_TEXTURE_SIZE = gl.MAX_TEXTURE_SIZE, this.MAX_VIEWPORT_DIMS = gl.MAX_VIEWPORT_DIMS, 
                        this.MAX_VERTEX_TEXTURE_IMAGE_UNITS = gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS, this.MAX_TEXTURE_IMAGE_UNITS = gl.MAX_TEXTURE_IMAGE_UNITS, 
                        this.MAX_COMBINED_TEXTURE_IMAGE_UNITS = gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS, this.MAX_VERTEX_ATTRIBS = gl.MAX_VERTEX_ATTRIBS, 
                        this.MAX_VARYING_VECTORS = gl.MAX_VARYING_VECTORS, this.MAX_VERTEX_UNIFORM_VECTORS = gl.MAX_VERTEX_UNIFORM_VECTORS, 
                        this.MAX_FRAGMENT_UNIFORM_VECTORS = gl.MAX_FRAGMENT_UNIFORM_VECTORS, this.TEXTURE_MAG_FILTER = gl.TEXTURE_MAG_FILTER, 
                        this.TEXTURE_MIN_FILTER = gl.TEXTURE_MIN_FILTER, this.TEXTURE_WRAP_S = gl.TEXTURE_WRAP_S, 
                        this.TEXTURE_WRAP_T = gl.TEXTURE_WRAP_T, this.LINEAR = gl.LINEAR, this.LINEAR_MIPMAP_LINEAR = gl.LINEAR_MIPMAP_LINEAR, 
                        this.CLAMP_TO_EDGE = gl.CLAMP_TO_EDGE, this.RGB = gl.RGB, this.RGBA = gl.RGBA, this.UNSIGNED_BYTE = gl.UNSIGNED_BYTE, 
                        this.UNPACK_PREMULTIPLY_ALPHA_WEBGL = gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.UNPACK_FLIP_Y_WEBGL = gl.UNPACK_FLIP_Y_WEBGL, 
                        this.FLOAT = gl.FLOAT, this.TRIANGLES = gl.TRIANGLES, this.UNSIGNED_SHORT = gl.UNSIGNED_SHORT, 
                        this.ONE = gl.ONE, this.ONE_MINUS_SRC_ALPHA = gl.ONE_MINUS_SRC_ALPHA, this.VERTEX_SHADER = gl.VERTEX_SHADER, 
                        this.FRAGMENT_SHADER = gl.FRAGMENT_SHADER, this.STATIC_DRAW = gl.STATIC_DRAW, this.COMPILE_STATUS = gl.COMPILE_STATUS, 
                        this.LINK_STATUS = gl.LINK_STATUS, this.DYNAMIC_DRAW = gl.DYNAMIC_DRAW, this.INVALID_ENUM = gl.INVALID_ENUM, 
                        this.INVALID_OPERATION = gl.INVALID_OPERATION;
                    }, [ {
                        key: "activeTexture",
                        value: function(textureUnit) {
                            this.activeTextureUnit !== textureUnit && (this.gl.activeTexture(textureUnit + this.gl.TEXTURE0), 
                            this.activeTextureUnit = textureUnit);
                        }
                    }, {
                        key: "bindTexture",
                        value: function(texture) {
                            this.texture2dUnits[this.activeTextureUnit] !== texture && (this.texture2dUnits[this.activeTextureUnit] = texture, 
                            this.gl.bindTexture(this.gl.TEXTURE_2D, texture));
                        }
                    }, {
                        key: "_getActiveTexture",
                        value: function() {
                            return this.texture2dUnits[this.activeTextureUnit];
                        }
                    }, {
                        key: "texParameteri",
                        value: function(pname, param) {
                            var activeTexture = this._getActiveTexture();
                            if (!activeTexture) throw new Error("No active texture");
                            var textureParams = this.texture2dParams.get(activeTexture);
                            textureParams || (textureParams = {}, this.texture2dParams.set(activeTexture, textureParams)), 
                            textureParams[pname] !== param && (textureParams[pname] = param, this.gl.texParameteri(this.gl.TEXTURE_2D, pname, param));
                        }
                    }, {
                        key: "texImage2D",
                        value: function(level, internalFormat, widthOrFormat, heightOrType, borderOrSource, format, type, pixels) {
                            format ? this.gl.texImage2D(this.gl.TEXTURE_2D, level, internalFormat, widthOrFormat, heightOrType, borderOrSource, format, type, pixels) : this.gl.texImage2D(this.gl.TEXTURE_2D, level, internalFormat, widthOrFormat, heightOrType, borderOrSource);
                        }
                    }, {
                        key: "compressedTexImage2D",
                        value: function(level, internalformat, width, height, border, data) {
                            this.gl.compressedTexImage2D(this.gl.TEXTURE_2D, level, internalformat, width, height, border, data);
                        }
                    }, {
                        key: "pixelStorei",
                        value: function(pname, param) {
                            this.gl.pixelStorei(pname, param);
                        }
                    }, {
                        key: "generateMipmap",
                        value: function() {
                            this.gl.generateMipmap(this.gl.TEXTURE_2D);
                        }
                    }, {
                        key: "createTexture",
                        value: function() {
                            return this.gl.createTexture();
                        }
                    }, {
                        key: "deleteTexture",
                        value: function(texture) {
                            texture && this.texture2dParams.delete(texture), this.gl.deleteTexture(texture);
                        }
                    }, {
                        key: "viewport",
                        value: function(x, y, width, height) {
                            this.gl.viewport(x, y, width, height);
                        }
                    }, {
                        key: "updateCanvasDimensions",
                        value: function() {
                            this.canvasW = this.canvas.width, this.canvasH = this.canvas.height;
                        }
                    }, {
                        key: "clearColor",
                        value: function(red, green, blue, alpha) {
                            this.gl.clearColor(red, green, blue, alpha);
                        }
                    }, {
                        key: "setScissorTest",
                        value: function(enable) {
                            enable !== this.scissorEnabled && (enable ? this.gl.enable(this.gl.SCISSOR_TEST) : this.gl.disable(this.gl.SCISSOR_TEST), 
                            this.scissorEnabled = enable);
                        }
                    }, {
                        key: "scissor",
                        value: function(x, y, width, height) {
                            x === this.scissorX && y === this.scissorY && width === this.scissorWidth && height === this.scissorHeight || (this.gl.scissor(x, y, width, height), 
                            this.scissorX = x, this.scissorY = y, this.scissorWidth = width, this.scissorHeight = height);
                        }
                    }, {
                        key: "setBlend",
                        value: function(blend) {
                            blend !== this.blendEnabled && (blend ? this.gl.enable(this.gl.BLEND) : this.gl.disable(this.gl.BLEND), 
                            this.blendEnabled = blend);
                        }
                    }, {
                        key: "blendFunc",
                        value: function(src, dst) {
                            src === this.blendSrcRgb && dst === this.blendDstRgb && src === this.blendSrcAlpha && dst === this.blendDstAlpha || (this.gl.blendFunc(src, dst), 
                            this.blendSrcRgb = src, this.blendDstRgb = dst, this.blendSrcAlpha = src, this.blendDstAlpha = dst);
                        }
                    }, {
                        key: "createBuffer",
                        value: function() {
                            return this.gl.createBuffer();
                        }
                    }, {
                        key: "clear",
                        value: function() {
                            this.gl.clear(this.gl.COLOR_BUFFER_BIT);
                        }
                    }, {
                        key: "arrayBufferData",
                        value: function(buffer, data, usage) {
                            this.boundArrayBuffer !== buffer && (this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer), 
                            this.boundArrayBuffer = buffer), this.gl.bufferData(this.gl.ARRAY_BUFFER, data, usage);
                        }
                    }, {
                        key: "arrayBufferSubData",
                        value: function(buffer, dstByteOffset, data) {
                            this.boundArrayBuffer !== buffer && (this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer), 
                            this.boundArrayBuffer = buffer), this.gl.bufferSubData(this.gl.ARRAY_BUFFER, dstByteOffset, data);
                        }
                    }, {
                        key: "elementArrayBufferData",
                        value: function(buffer, data, usage) {
                            this.boundElementArrayBuffer !== buffer && (this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, buffer), 
                            this.boundElementArrayBuffer = buffer), this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, data, usage);
                        }
                    }, {
                        key: "vertexAttribPointer",
                        value: function(buffer, index, size, type, normalized, stride, offset) {
                            this.boundArrayBuffer !== buffer && (this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer), 
                            this.boundArrayBuffer = buffer), this.gl.vertexAttribPointer(index, size, type, normalized, stride, offset);
                        }
                    }, {
                        key: "bindElementArrayBuffer",
                        value: function(buffer) {
                            this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, buffer), this.boundElementArrayBuffer = buffer;
                        }
                    }, {
                        key: "createVertexArray",
                        value: function() {
                            return null !== this.gl2 ? this.gl2.createVertexArray() : null !== this.vaoExt ? this.vaoExt.createVertexArrayOES() : null;
                        }
                    }, {
                        key: "bindVertexArray",
                        value: function(vertexArray) {
                            if (this.boundVertexArray !== vertexArray) return null !== this.gl2 ? (this.gl2.bindVertexArray(vertexArray), 
                            void (this.boundVertexArray = vertexArray)) : void (null !== this.vaoExt && (this.vaoExt.bindVertexArrayOES(vertexArray), 
                            this.boundVertexArray = vertexArray));
                        }
                    }, {
                        key: "deleteVertexArray",
                        value: function(vertexArray) {
                            this.boundVertexArray === vertexArray && (this.boundVertexArray = null), null === this.gl2 ? null !== this.vaoExt && this.vaoExt.deleteVertexArrayOES(vertexArray) : this.gl2.deleteVertexArray(vertexArray);
                        }
                    }, {
                        key: "getUniformLocations",
                        value: function(program) {
                            for (var gl = this.gl, length = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS), result = {}, i = 0; i < length; i++) {
                                var name = gl.getActiveUniform(program, i).name.replace(/\[.*?\]/g, "");
                                result[name] = gl.getUniformLocation(program, name);
                            }
                            return result;
                        }
                    }, {
                        key: "getAttributeLocations",
                        value: function(program) {
                            for (var gl = this.gl, length = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES), result = [], i = 0; i < length; i++) {
                                var name = gl.getActiveAttrib(program, i).name;
                                result[gl.getAttribLocation(program, name)] = name;
                            }
                            return result;
                        }
                    }, {
                        key: "useProgram",
                        value: function(program, uniformLocations) {
                            this.curProgram !== program && (this.gl.useProgram(program), this.curProgram = program, 
                            this.curUniformLocations = uniformLocations);
                        }
                    }, {
                        key: "uniform1f",
                        value: function(location, v0) {
                            this.gl.uniform1f(this.curUniformLocations[location] || null, v0);
                        }
                    }, {
                        key: "uniform1fv",
                        value: function(location, value) {
                            this.gl.uniform1fv(this.curUniformLocations[location] || null, value);
                        }
                    }, {
                        key: "uniform1i",
                        value: function(location, v0) {
                            this.gl.uniform1i(this.curUniformLocations[location] || null, v0);
                        }
                    }, {
                        key: "uniform1iv",
                        value: function(location, value) {
                            this.gl.uniform1iv(this.curUniformLocations[location] || null, value);
                        }
                    }, {
                        key: "uniform2f",
                        value: function(location, v0, v1) {
                            this.gl.uniform2f(this.curUniformLocations[location] || null, v0, v1);
                        }
                    }, {
                        key: "uniform2fa",
                        value: function(location, value) {
                            this.gl.uniform2f(this.curUniformLocations[location] || null, value[0], value[1]);
                        }
                    }, {
                        key: "uniform2fv",
                        value: function(location, value) {
                            this.gl.uniform2fv(this.curUniformLocations[location] || null, value);
                        }
                    }, {
                        key: "uniform2i",
                        value: function(location, v0, v1) {
                            this.gl.uniform2i(this.curUniformLocations[location] || null, v0, v1);
                        }
                    }, {
                        key: "uniform2iv",
                        value: function(location, value) {
                            this.gl.uniform2iv(this.curUniformLocations[location] || null, value);
                        }
                    }, {
                        key: "uniform3f",
                        value: function(location, v0, v1, v2) {
                            this.gl.uniform3f(this.curUniformLocations[location] || null, v0, v1, v2);
                        }
                    }, {
                        key: "uniform3fa",
                        value: function(location, value) {
                            this.gl.uniform3f(this.curUniformLocations[location] || null, value[0], value[1], value[2]);
                        }
                    }, {
                        key: "uniform3fv",
                        value: function(location, value) {
                            this.gl.uniform3fv(this.curUniformLocations[location] || null, value);
                        }
                    }, {
                        key: "uniform3i",
                        value: function(location, v0, v1, v2) {
                            this.gl.uniform3i(this.curUniformLocations[location] || null, v0, v1, v2);
                        }
                    }, {
                        key: "uniform3iv",
                        value: function(location, value) {
                            this.gl.uniform3iv(this.curUniformLocations[location] || null, value);
                        }
                    }, {
                        key: "uniform4f",
                        value: function(location, v0, v1, v2, v3) {
                            this.gl.uniform4f(this.curUniformLocations[location] || null, v0, v1, v2, v3);
                        }
                    }, {
                        key: "uniform4fa",
                        value: function(location, value) {
                            this.gl.uniform4f(this.curUniformLocations[location] || null, value[0], value[1], value[2], value[3]);
                        }
                    }, {
                        key: "uniform4fv",
                        value: function(location, value) {
                            this.gl.uniform4fv(this.curUniformLocations[location] || null, value);
                        }
                    }, {
                        key: "uniform4i",
                        value: function(location, v0, v1, v2, v3) {
                            this.gl.uniform4i(this.curUniformLocations[location] || null, v0, v1, v2, v3);
                        }
                    }, {
                        key: "uniform4iv",
                        value: function(location, value) {
                            this.gl.uniform4iv(this.curUniformLocations[location] || null, value);
                        }
                    }, {
                        key: "uniformMatrix2fv",
                        value: function(location, value) {
                            this.gl.uniformMatrix2fv(this.curUniformLocations[location] || null, !1, value);
                        }
                    }, {
                        key: "uniformMatrix3fv",
                        value: function(location, value) {
                            this.gl.uniformMatrix3fv(this.curUniformLocations[location] || null, !1, value);
                        }
                    }, {
                        key: "uniformMatrix4fv",
                        value: function(location, value) {
                            this.gl.uniformMatrix4fv(this.curUniformLocations[location] || null, !1, value);
                        }
                    }, {
                        key: "getParameter",
                        value: function(pname) {
                            return this.gl.getParameter(pname);
                        }
                    }, {
                        key: "drawElements",
                        value: function(mode, count, type, offset) {
                            this.gl.drawElements(mode, count, type, offset);
                        }
                    }, {
                        key: "drawArrays",
                        value: function(mode, first, count) {
                            this.gl.drawArrays(mode, first, count);
                        }
                    }, {
                        key: "getExtension",
                        value: function(name) {
                            return this.gl.getExtension(name);
                        }
                    }, {
                        key: "getError",
                        value: function() {
                            return this.gl.getError();
                        }
                    }, {
                        key: "isContextLost",
                        value: function() {
                            return this.gl.isContextLost();
                        }
                    }, {
                        key: "getAttribLocation",
                        value: function(program, name) {
                            return this.gl.getAttribLocation(program, name);
                        }
                    }, {
                        key: "getUniformLocation",
                        value: function(program, name) {
                            return this.gl.getUniformLocation(program, name);
                        }
                    }, {
                        key: "enableVertexAttribArray",
                        value: function(index) {
                            this.gl.enableVertexAttribArray(index);
                        }
                    }, {
                        key: "disableVertexAttribArray",
                        value: function(index) {
                            this.gl.disableVertexAttribArray(index);
                        }
                    }, {
                        key: "createShader",
                        value: function(type) {
                            return this.gl.createShader(type);
                        }
                    }, {
                        key: "compileShader",
                        value: function(shader) {
                            this.gl.compileShader(shader);
                        }
                    }, {
                        key: "attachShader",
                        value: function(program, shader) {
                            this.gl.attachShader(program, shader);
                        }
                    }, {
                        key: "linkProgram",
                        value: function(program) {
                            this.gl.linkProgram(program);
                        }
                    }, {
                        key: "deleteProgram",
                        value: function(shader) {
                            this.gl.deleteProgram(shader);
                        }
                    }, {
                        key: "getShaderParameter",
                        value: function(shader, pname) {
                            return this.gl.getShaderParameter(shader, pname);
                        }
                    }, {
                        key: "getShaderInfoLog",
                        value: function(shader) {
                            return this.gl.getShaderInfoLog(shader);
                        }
                    }, {
                        key: "createProgram",
                        value: function() {
                            return this.gl.createProgram();
                        }
                    }, {
                        key: "getProgramParameter",
                        value: function(program, pname) {
                            return this.gl.getProgramParameter(program, pname);
                        }
                    }, {
                        key: "getProgramInfoLog",
                        value: function(program) {
                            return this.gl.getProgramInfoLog(program);
                        }
                    }, {
                        key: "shaderSource",
                        value: function(shader, source) {
                            this.gl.shaderSource(shader, source);
                        }
                    }, {
                        key: "deleteShader",
                        value: function(shader) {
                            this.gl.deleteShader(shader);
                        }
                    }, {
                        key: "deleteBuffer",
                        value: function(buffer) {
                            this.gl.deleteBuffer(buffer), this.boundArrayBuffer === buffer && (this.boundArrayBuffer = null);
                        }
                    }, {
                        key: "checkError",
                        value: function(operation) {
                            var error = this.getError();
                            if (0 !== error) {
                                var errorName = "UNKNOWN_ERROR";
                                switch (error) {
                                  case this.INVALID_ENUM:
                                    errorName = "INVALID_ENUM";
                                    break;

                                  case 1281:
                                    errorName = "INVALID_VALUE";
                                    break;

                                  case this.INVALID_OPERATION:
                                    errorName = "INVALID_OPERATION";
                                    break;

                                  case 1285:
                                    errorName = "OUT_OF_MEMORY";
                                    break;

                                  case 37442:
                                    errorName = "CONTEXT_LOST_WEBGL";
                                }
                                var message = "WebGL ".concat(errorName, " (0x").concat(error.toString(16), ") during ").concat(operation);
                                return {
                                    error: error,
                                    errorName: errorName,
                                    message: message
                                };
                            }
                            return null;
                        }
                    } ]);
                }(), MAX_SDF_BUFFER_FLOATS = 1048576 / Float32Array.BYTES_PER_ELEMENT, WebGlRenderer = function(_CoreRenderer) {
                    function WebGlRenderer(options) {
                        var _this5;
                        (_this5 = _callSuper(this, WebGlRenderer, [ options ])).glw = void 0, _this5.quadBuffer = void 0, 
                        _this5.fQuadBuffer = void 0, _this5.uiQuadBuffer = void 0, _this5.renderOps = [], 
                        _this5.coreTextRenderOps = [], _this5.sdfOpPool = [], _this5.sdfOpPoolIdx = 0, _this5.curBufferIdx = 0, 
                        _this5.curRenderOp = null, _this5.attachedShader = null, _this5.sdfBuffer = void 0, 
                        _this5.fSdfBuffer = void 0, _this5.uiSdfBuffer = void 0, _this5.sdfBufferIdx = 0, 
                        _this5.sdfQuadCount = 0, _this5.sdfQuadBufferCollection = void 0, _this5.curSdfRenderOp = null, 
                        _this5.sdfBufferChanged = !0, _this5.lastUploadedSdfSize = 0, _this5.sdfWriteSig = 0, 
                        _this5.lastUploadedSdfSig = 0, _this5.needsFullUpload = !0, _this5.defaultTextureCoords = UNIT_TEXTURE_COORDS, 
                        _this5.defaultShaderNode = null, _this5.quadBufferCollection = void 0, _this5.indexBuffer = null, 
                        _this5.clearColor = {
                            raw: 0,
                            normalized: [ 0, 0, 0, 0 ]
                        }, _this5.quadBufferUsage = 0, _this5.numQuadsRendered = 0, _this5.quadBufferSize = void 0, 
                        _this5.lastUploadedBufferSize = 0, _this5.dirtyQuadCount = 0, _this5.quadBufferSize = Math.min(_this5.stage.options.quadBufferSize, MAX_QUAD_BUFFER_SIZE), 
                        _this5.quadBuffer = new ArrayBuffer(_this5.quadBufferSize), _this5.fQuadBuffer = new Float32Array(_this5.quadBuffer), 
                        _this5.uiQuadBuffer = new Uint32Array(_this5.quadBuffer), _this5.sdfBuffer = new ArrayBuffer(262144), 
                        _this5.fSdfBuffer = new Float32Array(_this5.sdfBuffer), _this5.uiSdfBuffer = new Uint32Array(_this5.sdfBuffer), 
                        _this5.mode = "webgl";
                        var gl = createWebGLContext(options.canvas, options.forceWebGL2, options.contextSpy), glw = _this5.glw = new WebGlContextWrapper(gl, options.disableVertexArrayObject);
                        glw.viewport(0, 0, glw.canvasW, glw.canvasH), _this5.attachContextLossListeners(options.canvas), 
                        _this5.updateClearColor(_this5.stage.clearColor), glw.setBlend(!0), glw.blendFunc(glw.ONE, glw.ONE_MINUS_SRC_ALPHA), 
                        _this5.indexBuffer = createIndexBuffer(glw);
                        for (var nodeCoords = new Float32Array(8 * MAX_QUADS), i = 0; i < 8 * MAX_QUADS; i += 8) nodeCoords[i] = 0, 
                        nodeCoords[i + 1] = 0, nodeCoords[i + 2] = 1, nodeCoords[i + 3] = 0, nodeCoords[i + 4] = 0, 
                        nodeCoords[i + 5] = 1, nodeCoords[i + 6] = 1, nodeCoords[i + 7] = 1;
                        var nodeCoordsBuffer = glw.createBuffer();
                        glw.arrayBufferData(nodeCoordsBuffer, nodeCoords, glw.STATIC_DRAW);
                        var quadBuffer = glw.createBuffer();
                        _this5.quadBufferCollection = new BufferCollection([ {
                            buffer: quadBuffer,
                            attributes: {
                                a_position: {
                                    name: "a_position",
                                    size: 2,
                                    type: glw.FLOAT,
                                    normalized: !1,
                                    stride: 16,
                                    offset: 0
                                },
                                a_textureCoords: {
                                    name: "a_textureCoords",
                                    size: 2,
                                    type: glw.UNSIGNED_SHORT,
                                    normalized: !0,
                                    stride: 16,
                                    offset: 8
                                },
                                a_color: {
                                    name: "a_color",
                                    size: 4,
                                    type: glw.UNSIGNED_BYTE,
                                    normalized: !0,
                                    stride: 16,
                                    offset: 12
                                }
                            }
                        }, {
                            buffer: nodeCoordsBuffer,
                            attributes: {
                                a_nodeCoords: {
                                    name: "a_nodeCoords",
                                    size: 2,
                                    type: glw.FLOAT,
                                    normalized: !1,
                                    stride: 2 * Float32Array.BYTES_PER_ELEMENT,
                                    offset: 0
                                }
                            }
                        } ]);
                        var sdfWebGlBuffer = glw.createBuffer(), sdfStride = 6 * Float32Array.BYTES_PER_ELEMENT;
                        return _this5.sdfQuadBufferCollection = new BufferCollection([ {
                            buffer: sdfWebGlBuffer,
                            attributes: {
                                a_position: {
                                    name: "a_position",
                                    size: 2,
                                    type: glw.FLOAT,
                                    normalized: !1,
                                    stride: sdfStride,
                                    offset: 0
                                },
                                a_textureCoords: {
                                    name: "a_textureCoords",
                                    size: 2,
                                    type: glw.FLOAT,
                                    normalized: !1,
                                    stride: sdfStride,
                                    offset: 2 * Float32Array.BYTES_PER_ELEMENT
                                },
                                a_color: {
                                    name: "a_color",
                                    size: 4,
                                    type: glw.UNSIGNED_BYTE,
                                    normalized: !0,
                                    stride: sdfStride,
                                    offset: 4 * Float32Array.BYTES_PER_ELEMENT
                                },
                                a_distRange: {
                                    name: "a_distRange",
                                    size: 1,
                                    type: glw.FLOAT,
                                    normalized: !1,
                                    stride: sdfStride,
                                    offset: 5 * Float32Array.BYTES_PER_ELEMENT
                                }
                            }
                        } ]), _this5;
                    }
                    return _inherits(WebGlRenderer, _CoreRenderer), _createClass(WebGlRenderer, [ {
                        key: "attachContextLossListeners",
                        value: function(canvas) {
                            var _this6 = this;
                            "addEventListener" in canvas != !1 && canvas.addEventListener("webglcontextlost", function() {
                                _this6.stage.setContextLost();
                            });
                        }
                    }, {
                        key: "reset",
                        value: function() {
                            var glw = this.glw;
                            DIRTY_QUAD_BUFFER || (this.curBufferIdx = 0), this.curRenderOp = null, this.curSdfRenderOp = null, 
                            this.dirtyQuadCount = 0, this.sdfBufferIdx = 0, this.sdfQuadCount = 0, this.sdfWriteSig = 0, 
                            this.renderOps.length = 0, this.coreTextRenderOps.length = 0, this.sdfOpPoolIdx = 0, 
                            glw.setScissorTest(!1), !1 !== this.stage.options.enableClear && glw.clear();
                        }
                    }, {
                        key: "createShaderProgram",
                        value: function(shaderType, props) {
                            try {
                                return new WebGlShaderProgram(this, shaderType, props);
                            } catch (e) {
                                throw !0 === this.glw.isContextLost() && this.stage.setContextLost(), e;
                            }
                        }
                    }, {
                        key: "createShaderNode",
                        value: function(shaderKey, shaderType, props, program) {
                            return new WebGlShaderNode(shaderKey, shaderType, program, this.stage, props);
                        }
                    }, {
                        key: "supportsShaderType",
                        value: function(shaderType) {
                            return void 0 !== shaderType.fragment;
                        }
                    }, {
                        key: "createCtxTexture",
                        value: function(textureSource) {
                            return textureSource.type === TextureType.subTexture ? new WebGlCtxSubTexture(this.glw, this.stage.txMemManager, textureSource) : new WebGlCtxTexture(this.glw, this.stage.txMemManager, textureSource);
                        }
                    }, {
                        key: "addQuad",
                        value: function(node, texture) {
                            var f = this.fQuadBuffer, u = this.uiQuadBuffer;
                            node.props.zIndex && this.flushTextRenderOps();
                            var props = node.props, tx = void 0 !== texture ? texture : !0 === node.placeholderActive ? this.stage.defaultTexture : props.texture || this.stage.defaultTexture;
                            tx.type === TextureType.subTexture && (tx = tx.parentTexture);
                            var ctx = tx.ctxTexture;
                            if (void 0 !== ctx) {
                                var reuse = this.reuseRenderOp(node);
                                DIRTY_QUAD_BUFFER ? -1 === node.quadBufferIndex && (node.quadBufferIndex = this.curBufferIdx, 
                                this.curBufferIdx += WORDS_PER_QUAD) : (node.quadBufferIndex = this.curBufferIdx, 
                                this.curBufferIdx += WORDS_PER_QUAD);
                                var i = node.quadBufferIndex;
                                !1 === reuse && this.newRenderOp(node, i);
                                var curOp = this.curRenderOp;
                                if (null === curOp.renderOpTexture ? curOp.renderOpTexture = ctx : curOp.renderOpTexture !== ctx && (this.newRenderOp(node, i), 
                                node.renderOpTexture = ctx), !DIRTY_QUAD_BUFFER || node.isQuadDirty) {
                                    DIRTY_QUAD_BUFFER && !0 === node.isQuadDirty && this.dirtyQuadCount++;
                                    var rc = node.renderCoords, tc = node.textureCoords || this.defaultTextureCoords, cTl = node.premultipliedColorTl, cTr = node.premultipliedColorTr, cBl = node.premultipliedColorBl, cBr = node.premultipliedColorBr;
                                    f[i] = rc.x1, f[i + 1] = rc.y1, u[i + 2] = tc.qTl, u[i + 3] = cTl, f[i + 4] = rc.x2, 
                                    f[i + 5] = rc.y2, u[i + 6] = tc.qTr, u[i + 7] = cTr, f[i + 8] = rc.x4, f[i + 9] = rc.y4, 
                                    u[i + 10] = tc.qBl, u[i + 11] = cBl, f[i + 12] = rc.x3, f[i + 13] = rc.y3, u[i + 14] = tc.qBr, 
                                    u[i + 15] = cBr;
                                }
                                this.curRenderOp.numQuads++;
                            }
                        }
                    }, {
                        key: "newRenderOp",
                        value: function(node, bufferIdx) {
                            var curRenderOp = node;
                            curRenderOp.renderOpBufferIdx = bufferIdx, curRenderOp.numQuads = 0, curRenderOp.renderOpTexture = null, 
                            this.curRenderOp = curRenderOp, this.renderOps.push(curRenderOp);
                        }
                    }, {
                        key: "reuseRenderOp",
                        value: function(node) {
                            var curRenderOp = this.curRenderOp;
                            if (null === curRenderOp) return !1;
                            if (!1 === compareRect(curRenderOp.clippingRect, node.clippingRect)) return !1;
                            var shader = node.props.shader, curShader = curRenderOp.shader;
                            return "default" === curShader.shaderKey && "default" === shader.shaderKey || (curShader === shader || curShader.program === shader.program && curShader.uniforms === shader.uniforms) && !1 !== curShader.program.reuseRenderOp(node, curRenderOp);
                        }
                    }, {
                        key: "addRenderOp",
                        value: function(renderable) {
                            this.coreTextRenderOps.push(renderable);
                        }
                    }, {
                        key: "flushTextRenderOps",
                        value: function() {
                            var len = this.coreTextRenderOps.length;
                            if (0 !== len) {
                                for (var i = 0; i < len; i++) this.renderOps.push(this.coreTextRenderOps[i]);
                                this.coreTextRenderOps.length = 0, this.curRenderOp = null, this.curSdfRenderOp = null;
                            }
                        }
                    }, {
                        key: "addSdfQuads",
                        value: function(glyphs, glyphCount, fontScale, transform, color, worldAlpha, distanceRange, atlasTexture, clippingRect, width, height, sdfShader) {
                            if (0 !== glyphCount) {
                                this.sdfBufferChanged = !0;
                                var idx = this.sdfBufferIdx;
                                if (!1 !== this.ensureSdfBufferCapacity(idx + 24 * glyphCount)) {
                                    for (var f = this.fSdfBuffer, u = this.uiSdfBuffer, packedColor = ((255 & color) << 24 | (color >>> 8 & 255) << 16 | (color >>> 16 & 255) << 8 | color >>> 24) >>> 0, m0 = transform.ta * fontScale, m1 = transform.tc * fontScale, m3 = transform.tb * fontScale, m4 = transform.td * fontScale, m6 = transform.tx, m7 = transform.ty, startQuad = this.sdfQuadCount, go = 0, gi = 0; gi < glyphCount; gi++) {
                                        var gx1 = glyphs[go], gy1 = glyphs[go + 1], gx2 = gx1 + glyphs[go + 2], gy2 = gy1 + glyphs[go + 3], u1 = glyphs[go + 4], v1 = glyphs[go + 5], u2 = u1 + glyphs[go + 6], v2 = v1 + glyphs[go + 7];
                                        go += 8;
                                        var wx_tl = m0 * gx1 + m3 * gy1 + m6, wy_tl = m1 * gx1 + m4 * gy1 + m7, wx_tr = m0 * gx2 + m3 * gy1 + m6, wy_tr = m1 * gx2 + m4 * gy1 + m7, wx_bl = m0 * gx1 + m3 * gy2 + m6, wy_bl = m1 * gx1 + m4 * gy2 + m7, wx_br = m0 * gx2 + m3 * gy2 + m6, wy_br = m1 * gx2 + m4 * gy2 + m7;
                                        f[idx] = wx_tl, f[idx + 1] = wy_tl, f[idx + 2] = u1, f[idx + 3] = v1, u[idx + 4] = packedColor, 
                                        f[idx + 5] = distanceRange, f[idx += 6] = wx_tr, f[idx + 1] = wy_tr, f[idx + 2] = u2, 
                                        f[idx + 3] = v1, u[idx + 4] = packedColor, f[idx + 5] = distanceRange, f[idx += 6] = wx_bl, 
                                        f[idx + 1] = wy_bl, f[idx + 2] = u1, f[idx + 3] = v2, u[idx + 4] = packedColor, 
                                        f[idx + 5] = distanceRange, f[idx += 6] = wx_br, f[idx + 1] = wy_br, f[idx + 2] = u2, 
                                        f[idx + 3] = v2, u[idx + 4] = packedColor, f[idx + 5] = distanceRange, idx += 6;
                                    }
                                    this.sdfBufferIdx = idx, this.sdfQuadCount += glyphCount, this.finalizeSdfBatch(startQuad, glyphCount, 0, 0, atlasTexture, clippingRect, worldAlpha, width, height, sdfShader);
                                }
                            }
                        }
                    }, {
                        key: "addSdfCachedQuads",
                        value: function(cachedVertices, numGlyphs, dx, dy, atlasTexture, clippingRect, worldAlpha, width, height, sdfShader) {
                            if (0 !== numGlyphs) {
                                var startQuad = this.sdfQuadCount;
                                !1 !== this.ensureSdfBufferCapacity(this.sdfBufferIdx + cachedVertices.length) && (this.fSdfBuffer.set(cachedVertices, this.sdfBufferIdx), 
                                this.sdfBufferIdx += cachedVertices.length, this.sdfQuadCount += numGlyphs, this.finalizeSdfBatch(startQuad, numGlyphs, dx, dy, atlasTexture, clippingRect, worldAlpha, width, height, sdfShader));
                            }
                        }
                    }, {
                        key: "finalizeSdfBatch",
                        value: function(startQuad, glyphCount, dx, dy, atlasTexture, clippingRect, worldAlpha, width, height, sdfShader) {
                            this.sdfWriteSig = 31 * this.sdfWriteSig + glyphCount | 0;
                            var cur = this.curSdfRenderOp;
                            if (null === cur || cur.renderOpTexture !== atlasTexture || cur.translateX !== dx || cur.translateY !== dy || cur.worldAlpha !== worldAlpha || !0 !== compareRect(cur.clippingRect, clippingRect)) {
                                var op, opList = this.coreTextRenderOps;
                                this.sdfOpPoolIdx < this.sdfOpPool.length ? op = this.sdfOpPool[this.sdfOpPoolIdx] : (op = new SdfRenderOp(this), 
                                this.sdfOpPool.push(op)), this.sdfOpPoolIdx++, op.init(sdfShader, this.sdfQuadBufferCollection, atlasTexture, worldAlpha, clippingRect, width, height, startQuad, glyphCount, dx, dy), 
                                opList.push(op), this.curSdfRenderOp = op, this.curRenderOp = null;
                            } else cur.numQuads += glyphCount;
                        }
                    }, {
                        key: "ensureSdfBufferCapacity",
                        value: function(requiredSize) {
                            var currentSize = this.fSdfBuffer.length;
                            if (requiredSize <= currentSize) return !0;
                            if (requiredSize > MAX_SDF_BUFFER_FLOATS) return !1;
                            for (var newCapacity = 2 * currentSize; newCapacity < requiredSize; ) newCapacity *= 2;
                            newCapacity > MAX_SDF_BUFFER_FLOATS && (newCapacity = MAX_SDF_BUFFER_FLOATS);
                            var sdfBufSize = newCapacity * Float32Array.BYTES_PER_ELEMENT, newBuffer = new ArrayBuffer(sdfBufSize), newFSdfBuffer = new Float32Array(newBuffer), newUiSdfBuffer = new Uint32Array(newBuffer);
                            return newFSdfBuffer.set(this.fSdfBuffer), this.sdfBuffer = newBuffer, this.fSdfBuffer = newFSdfBuffer, 
                            this.uiSdfBuffer = newUiSdfBuffer, this.sdfBufferChanged = !0, !0;
                        }
                    }, {
                        key: "useShader",
                        value: function(program) {
                            this.attachedShader !== program && (null !== this.attachedShader && this.attachedShader.detach(), 
                            program.attach(), this.attachedShader = program);
                        }
                    }, {
                        key: "render",
                        value: function() {
                            this.flushTextRenderOps();
                            var glw = this.glw, quadBuffer = this.quadBuffer, buffer = this.quadBufferCollection.getBuffer("a_position") || null, BYTES = Float32Array.BYTES_PER_ELEMENT;
                            if (DIRTY_QUAD_BUFFER) {
                                var renderList = this.stage.renderList, len = renderList.length, fullUpload = this.needsFullUpload || this.curBufferIdx > this.lastUploadedBufferSize;
                                if (!1 === fullUpload && (fullUpload = this.dirtyQuadCount > .4 * len), !0 === fullUpload) {
                                    var arr = new Float32Array(quadBuffer, 0, this.curBufferIdx);
                                    glw.arrayBufferData(buffer, arr, glw.DYNAMIC_DRAW), this.needsFullUpload = !1, this.lastUploadedBufferSize = this.curBufferIdx;
                                    for (var i = 0; i < len; i++) renderList[i].isQuadDirty = !1;
                                } else if (this.dirtyQuadCount > 0) {
                                    for (var runStart = -1, runWords = 0, _i8 = 0; _i8 < len; _i8++) {
                                        var node = renderList[_i8], idx = node.quadBufferIndex;
                                        if (-1 !== idx) {
                                            var dirty = !0 === node.isQuadDirty;
                                            if (!0 !== dirty || -1 === runStart || idx !== runStart + runWords) {
                                                if (-1 !== runStart) {
                                                    var byteOffset = runStart * BYTES;
                                                    glw.arrayBufferSubData(buffer, byteOffset, new Float32Array(quadBuffer, byteOffset, runWords)), 
                                                    runStart = -1, runWords = 0;
                                                }
                                                !0 === dirty && (runStart = idx, runWords = WORDS_PER_QUAD, node.isQuadDirty = !1);
                                            } else runWords += WORDS_PER_QUAD, node.isQuadDirty = !1;
                                        }
                                    }
                                    if (-1 !== runStart) {
                                        var _byteOffset = runStart * BYTES;
                                        glw.arrayBufferSubData(buffer, _byteOffset, new Float32Array(quadBuffer, _byteOffset, runWords));
                                    }
                                }
                            } else {
                                var _arr = new Float32Array(quadBuffer, 0, this.curBufferIdx);
                                glw.arrayBufferData(buffer, _arr, glw.STATIC_DRAW);
                            }
                            this.uploadSdfBuffer();
                            for (var _i9 = 0, length = this.renderOps.length; _i9 < length; _i9++) this.renderOps[_i9].draw(this);
                            this.quadBufferUsage = this.curBufferIdx * Float32Array.BYTES_PER_ELEMENT, this.numQuadsRendered = this.quadBufferUsage / 64;
                        }
                    }, {
                        key: "uploadSdfBuffer",
                        value: function() {
                            if (0 === this.sdfBufferIdx) return this.lastUploadedSdfSize = 0, void (this.lastUploadedSdfSig = 0);
                            if (!1 !== this.sdfBufferChanged || this.sdfBufferIdx !== this.lastUploadedSdfSize || this.sdfWriteSig !== this.lastUploadedSdfSig) {
                                var glw = this.glw, sdfBuf = this.sdfQuadBufferCollection.getBuffer("a_position") || null, sdfArr = new Float32Array(this.sdfBuffer, 0, this.sdfBufferIdx);
                                glw.arrayBufferData(sdfBuf, sdfArr, glw.DYNAMIC_DRAW), this.lastUploadedSdfSize = this.sdfBufferIdx, 
                                this.lastUploadedSdfSig = this.sdfWriteSig, this.sdfBufferChanged = !1;
                            }
                        }
                    }, {
                        key: "getQuadCount",
                        value: function() {
                            return this.numQuadsRendered;
                        }
                    }, {
                        key: "getRenderOpCount",
                        value: function() {
                            return this.renderOps.length;
                        }
                    }, {
                        key: "updateViewport",
                        value: function() {
                            this.glw.updateCanvasDimensions(), this.glw.viewport(0, 0, this.glw.canvasW, this.glw.canvasH);
                        }
                    }, {
                        key: "getBufferInfo",
                        value: function() {
                            return {
                                totalAvailable: this.quadBufferSize,
                                totalUsed: this.quadBufferUsage
                            };
                        }
                    }, {
                        key: "getCapabilities",
                        value: function() {
                            var glw = this.glw;
                            return {
                                renderMode: "webgl",
                                webGlVersion: glw.isWebGl2 ? 2 : 1,
                                vertexArrayObject: glw.canUseVertexArrayObject,
                                maxTextureSize: glw.getParameter(glw.MAX_TEXTURE_SIZE),
                                maxTextureUnits: glw.getParameter(glw.MAX_TEXTURE_IMAGE_UNITS)
                            };
                        }
                    }, {
                        key: "checkForOutOfMemory",
                        value: function() {
                            for (var glw = this.glw, outOfMemory = !1, i = 0; i < 8; i++) {
                                var error = glw.getError();
                                if (0 === error) break;
                                1285 === error && (outOfMemory = !0);
                            }
                            return outOfMemory;
                        }
                    }, {
                        key: "getDefaultShaderNode",
                        value: function() {
                            return null !== this.defaultShaderNode || (this.stage.shManager.registerShaderType("default", Default), 
                            this.defaultShaderNode = this.stage.shManager.createShader("default")), this.defaultShaderNode;
                        }
                    }, {
                        key: "getTextureCoords",
                        value: function(node) {
                            var texture = node.texture;
                            if (null !== texture) {
                                var ctxTexture = void 0 !== texture.parentTexture ? texture.parentTexture.ctxTexture : texture.ctxTexture;
                                if (void 0 !== ctxTexture) {
                                    var textureOptions = node.props.textureOptions;
                                    if (texture.type !== TextureType.subTexture && void 0 === textureOptions) return ctxTexture.txCoords;
                                    var _ctxTexture$txCoords = ctxTexture.txCoords, x1 = _ctxTexture$txCoords.x1, x2 = _ctxTexture$txCoords.x2, y1 = _ctxTexture$txCoords.y1, y2 = _ctxTexture$txCoords.y2;
                                    if (texture.type === TextureType.subTexture) {
                                        var _texture$parentTextur = texture.parentTexture.dimensions, parentW = _texture$parentTextur.w, parentH = _texture$parentTextur.h, _texture$props = texture.props, x = _texture$props.x, y = _texture$props.y;
                                        x2 = (x1 = x / parentW) + _texture$props.w / parentW, y2 = (y1 = y / parentH) + _texture$props.h / parentH;
                                    }
                                    var resizeMode = textureOptions.resizeMode;
                                    if (void 0 !== resizeMode && "cover" === resizeMode.type && null !== texture.dimensions) {
                                        var dimensions = texture.dimensions, _w = node.props.w, _h = node.props.h, scaleX = _w / dimensions.w, scaleY = _h / dimensions.h, scale = Math.max(scaleX, scaleY), precision = 1 / scale;
                                        if (scaleX < scale) {
                                            var _resizeMode$clipX, desiredSize = precision * node.props.w;
                                            x2 = (x1 = (1 - desiredSize / dimensions.w) * clampUnit(null !== (_resizeMode$clipX = resizeMode.clipX) && void 0 !== _resizeMode$clipX ? _resizeMode$clipX : .5)) + desiredSize / dimensions.w;
                                        }
                                        if (scaleY < scale) {
                                            var _resizeMode$clipY, _desiredSize = precision * node.props.h;
                                            y2 = (y1 = (1 - _desiredSize / dimensions.h) * clampUnit(null !== (_resizeMode$clipY = resizeMode.clipY) && void 0 !== _resizeMode$clipY ? _resizeMode$clipY : .5)) + _desiredSize / dimensions.h;
                                        }
                                    }
                                    if (!0 === textureOptions.flipX) {
                                        var _ref16 = [ x2, x1 ];
                                        x1 = _ref16[0], x2 = _ref16[1];
                                    }
                                    if (!0 === textureOptions.flipY) {
                                        var _ref17 = [ y2, y1 ];
                                        y1 = _ref17[0], y2 = _ref17[1];
                                    }
                                    return createTextureCoords(x1, y1, x2, y2);
                                }
                            }
                        }
                    }, {
                        key: "invalidateQuadBuffer",
                        value: function() {
                            if (this.sdfBufferChanged = !0, DIRTY_QUAD_BUFFER) {
                                for (var renderList = this.stage.renderList, i = 0, len = renderList.length; i < len; i++) renderList[i].quadBufferIndex = -1, 
                                renderList[i].isQuadDirty = !0;
                                this.curBufferIdx = 0, this.lastUploadedBufferSize = 0, this.needsFullUpload = !0;
                            }
                        }
                    }, {
                        key: "updateClearColor",
                        value: function(color) {
                            if (this.clearColor.raw !== color) {
                                var glw = this.glw, normalizedColor = getNormalizedRgbaComponents(color);
                                glw.clearColor(normalizedColor[0], normalizedColor[1], normalizedColor[2], normalizedColor[3]), 
                                this.clearColor = {
                                    raw: color,
                                    normalized: normalizedColor
                                };
                            }
                        }
                    } ]);
                }(CoreRenderer), Sdf = {
                    vertex: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    // Pre-transformed world-pixel position\n    attribute vec2 a_position;\n    attribute vec2 a_textureCoords;\n    // Per-vertex color (RGBA, unsigned byte, normalized)\n    attribute vec4 a_color;\n    // Per-vertex SDF distance range\n    attribute float a_distRange;\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n    // Per-render-op translation, written by WebGlShaderProgram.bindRenderOp\n    // (a reserved system uniform, like u_resolution and u_pixelRatio).\n    // Cached glyph vertices stay at their cache-base position; a text node\n    // that moved by pure translation carries the delta here instead of\n    // rewriting every vertex on the CPU, which keeps the shared SDF buffer\n    // byte-stable so its per-frame upload can be skipped.\n    uniform vec2 u_translate;\n    // Per-render-op world alpha (system uniform, see bindRenderOp). Kept out\n    // of the packed vertex colors for the same reason as u_translate: an\n    // alpha fade must not dirty the cached vertex bytes. Applied here rather\n    // than in the fragment shader because a vertex is cheaper than a\n    // fragment and v_color.a interpolates linearly.\n    uniform float u_alpha;\n\n    varying vec2 v_texcoord;\n    varying float v_scaledDistRange;\n    varying vec4 v_color;\n\n    void main() {\n      // a_position is world pixel space at the node's cache base\n      vec2 screenSpace = ((a_position + u_translate) * u_pixelRatio / u_resolution * 2.0 - 1.0) * vec2(1, -1);\n\n      gl_Position = vec4(screenSpace, 0.0, 1.0);\n      v_texcoord = a_textureCoords;\n      v_scaledDistRange = a_distRange * u_pixelRatio;\n      // a_color.a is the node color's own alpha; the fragment shader folds\n      // v_color.a into opacity, which also scales rgb, so this one multiply\n      // applies the world alpha completely.\n      v_color = vec4(a_color.rgb, a_color.a * u_alpha);\n    }\n  ",
                    fragment: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    uniform sampler2D u_texture;\n\n    varying vec2 v_texcoord;\n    varying float v_scaledDistRange;\n    varying vec4 v_color;\n\n    float median(float r, float g, float b) {\n        return clamp(b, min(r, g), max(r, g));\n    }\n\n    void main() {\n        vec3 s = texture2D(u_texture, v_texcoord).rgb;\n        float sigDist = v_scaledDistRange * (median(s.r, s.g, s.b) - 0.5);\n        float opacity = clamp(sigDist + 0.5, 0.0, 1.0) * v_color.a;\n\n        // Premultiply RGB by final opacity\n        gl_FragColor = vec4(v_color.rgb * opacity, opacity);\n    }\n  "
                }, sdfShader = null, maxLayoutCacheSize$1 = 250, init$2 = function(stage) {
                    init$3();
                    var configuredCacheSize = stage.options.textLayoutCacheSize;
                    void 0 !== configuredCacheSize && (maxLayoutCacheSize$1 = configuredCacheSize), 
                    stage.shManager.registerShaderType("Sdf", Sdf), sdfShader = null;
                }, getSdfShader = function(stage) {
                    return null === sdfShader && (sdfShader = stage.shManager.createShader("Sdf")), 
                    sdfShader;
                }, font$1 = SdfFontHandler_exports, layoutCache$1 = new Map, getLayoutCacheKey = function(props) {
                    return "".concat(props.fontFamily, "-").concat(props.fontStyle, "-").concat(props.fontSize, "-").concat(props.letterSpacing, "-").concat(props.lineHeight, "-").concat(props.maxHeight, "-").concat(props.maxWidth, "-").concat(props.maxLines, "-").concat(props.textAlign, "-").concat(props.wordBreak, "-").concat(props.overflowSuffix, "-").concat(props.text);
                }, renderText$1 = function(props) {
                    if (0 === props.text.length) return {
                        width: 0,
                        height: 0
                    };
                    var cacheKey = getLayoutCacheKey(props), layout = layoutCache$1.get(cacheKey);
                    if (void 0 !== layout) return layoutCache$1.delete(cacheKey), layoutCache$1.set(cacheKey, layout), 
                    {
                        remainingLines: 0,
                        hasRemainingText: !1,
                        width: layout.width,
                        height: layout.height,
                        layout: layout
                    };
                    var fontData = _getFontData(props.fontFamily);
                    if (void 0 === fontData) return {
                        width: 0,
                        height: 0
                    };
                    if (layout = generateTextLayout(props, fontData), layoutCache$1.set(cacheKey, layout), 
                    layoutCache$1.size > maxLayoutCacheSize$1) {
                        var oldest = layoutCache$1.keys().next().value;
                        layoutCache$1.delete(oldest);
                    }
                    return {
                        remainingLines: 0,
                        hasRemainingText: !1,
                        width: layout.width,
                        height: layout.height,
                        layout: layout
                    };
                }, renderQuads$1 = function(renderer, layout, _vertexBuffer, renderProps) {
                    var fontFamily = renderProps.fontFamily, atlasTexture = _getAtlas(fontFamily);
                    if (null === atlasTexture) return null;
                    var webGlRenderer = renderer, cache = renderProps.sdfCache, ctxTexture = atlasTexture.ctxTexture, shader = getSdfShader(webGlRenderer.stage);
                    if (void 0 !== cache && null !== cache.vertices) {
                        var t = renderProps.globalTransform;
                        if (cache.layoutRef === layout && cache.color === renderProps.color && cache.ta === t.ta && cache.tc === t.tc && cache.tb === t.tb && cache.td === t.td) {
                            var dx = t.tx - cache.tx, dy = t.ty - cache.ty;
                            if ((0 !== dx || 0 !== dy) && dx === cache.lastDx && dy === cache.lastDy) {
                                for (var vertices = cache.vertices, len = vertices.length, i = 0; i < len; i += 6) vertices[i] = vertices[i] + dx, 
                                vertices[i + 1] = vertices[i + 1] + dy;
                                cache.tx = t.tx, cache.ty = t.ty, webGlRenderer.sdfBufferChanged = !0, dx = 0, dy = 0;
                            }
                            return cache.lastDx = dx, cache.lastDy = dy, webGlRenderer.addSdfCachedQuads(cache.vertices, cache.glyphCount, dx, dy, ctxTexture, renderProps.clippingRect, renderProps.worldAlpha, layout.width, layout.height, shader), 
                            null;
                        }
                    }
                    var startIdx = webGlRenderer.sdfBufferIdx;
                    if (webGlRenderer.addSdfQuads(layout.glyphs, layout.glyphCount, layout.fontScale, renderProps.globalTransform, renderProps.color, renderProps.worldAlpha, layout.distanceRange, ctxTexture, renderProps.clippingRect, layout.width, layout.height, shader), 
                    void 0 !== cache) {
                        var endIdx = webGlRenderer.sdfBufferIdx, _len2 = endIdx - startIdx;
                        if (_len2 > 0) {
                            null !== cache.vertices && cache.vertices.length === _len2 || (cache.vertices = new Float32Array(_len2)), 
                            cache.vertices.set(webGlRenderer.fSdfBuffer.subarray(startIdx, endIdx)), cache.glyphCount = layout.glyphCount, 
                            cache.color = renderProps.color, cache.layoutRef = layout, cache.lastDx = 0, cache.lastDy = 0;
                            var _t7 = renderProps.globalTransform;
                            cache.ta = _t7.ta, cache.tc = _t7.tc, cache.tb = _t7.tb, cache.td = _t7.td, cache.tx = _t7.tx, 
                            cache.ty = _t7.ty;
                        }
                    }
                    return null;
                }, generateTextLayout = function(props, fontCache) {
                    for (var fontSize = props.fontSize, fontFamily = props.fontFamily, metrics = getFontMetrics$1(fontFamily, fontSize), fontData = fontCache.data, commonFontData = fontData.common, designFontSize = fontData.info.size, atlasBase = commonFontData.base, lineHeight = props.lineHeight, invAtlasWidth = 1 / commonFontData.scaleW, invAtlasHeight = 1 / commonFontData.scaleH, glyphMap = fontCache.glyphMap, kernings = fontCache.kernings, fontScale = fontSize / designFontSize, letterSpacing = props.letterSpacing / fontScale, maxWidth = props.maxWidth / fontScale, maxHeight = props.maxHeight, _mapTextLayout2 = _slicedToArray(mapTextLayout(measureText$1, metrics, props.text, props.textAlign, fontFamily, lineHeight, props.overflowSuffix, props.wordBreak, letterSpacing, props.maxLines, maxWidth, maxHeight), 7), lines = _mapTextLayout2[0], lineHeightPx = (_mapTextLayout2[1], 
                    _mapTextLayout2[2], _mapTextLayout2[3], _mapTextLayout2[4]), effectiveWidth = _mapTextLayout2[5], effectiveHeight = _mapTextLayout2[6], lineAmount = lines.length, maxGlyphs = 0, i = 0; i < lineAmount; i++) maxGlyphs += lines[i][0].length;
                    for (var glyphs = new Float32Array(8 * maxGlyphs), glyphIdx = 0, glyphCount = 0, currentX = 0, baselineY = 0, _i0 = 0; _i0 < lineAmount; _i0++) {
                        var line = lines[_i0], textLine = line[0], textLineLength = textLine.length, prevGlyphId = 0;
                        currentX = line[3], baselineY = line[4] / fontScale;
                        for (var j = 0; j < textLineLength; j++) {
                            var codepoint = textLine.codePointAt(j);
                            if (codepoint > 65535 && j++, 8203 !== codepoint) if (!0 !== hasZeroWidthSpace(textLine[j])) {
                                var glyph = glyphMap.get(codepoint);
                                if (void 0 !== glyph || void 0 !== (glyph = glyphMap.get(32))) {
                                    var kerning = 0;
                                    if (0 !== prevGlyphId) {
                                        var seconds = kernings[glyph.id];
                                        if (void 0 !== seconds) {
                                            var amount = seconds[prevGlyphId];
                                            void 0 !== amount && (kerning = amount);
                                        }
                                    }
                                    currentX += kerning, glyphs[glyphIdx] = currentX + glyph.xoffset, glyphs[glyphIdx + 1] = baselineY + glyph.yoffset - atlasBase, 
                                    glyphs[glyphIdx + 2] = glyph.width, glyphs[glyphIdx + 3] = glyph.height, glyphs[glyphIdx + 4] = glyph.x * invAtlasWidth, 
                                    glyphs[glyphIdx + 5] = glyph.y * invAtlasHeight, glyphs[glyphIdx + 6] = glyph.width * invAtlasWidth, 
                                    glyphs[glyphIdx + 7] = glyph.height * invAtlasHeight, glyphIdx += 8, glyphCount++, 
                                    currentX += glyph.xadvance + letterSpacing, prevGlyphId = glyph.id;
                                }
                            }
                        }
                    }
                    return {
                        glyphs: glyphs,
                        glyphCount: glyphCount,
                        distanceRange: fontScale * fontData.distanceField.distanceRange,
                        width: effectiveWidth * fontScale,
                        height: effectiveHeight,
                        fontScale: fontScale,
                        lineHeight: lineHeightPx,
                        fontFamily: fontFamily
                    };
                }, SdfTextRenderer = {
                    type: "sdf",
                    font: font$1,
                    renderText: renderText$1,
                    addQuads: function(_layout) {
                        return null;
                    },
                    renderQuads: renderQuads$1,
                    init: init$2,
                    cleanup: function() {
                        for (;layoutCache$1.size > maxLayoutCacheSize$1; ) {
                            var oldest = layoutCache$1.keys().next().value;
                            layoutCache$1.delete(oldest);
                        }
                    }
                }, CanvasFontHandler_exports = __exportAll({
                    calculateFontMetrics: function() {
                        return _calculateFontMetrics;
                    },
                    canRenderFont: function() {
                        return _canRenderFont;
                    },
                    getFontFamilies: function() {
                        return _getFontFamilies;
                    },
                    getFontMetrics: function() {
                        return _getFontMetrics;
                    },
                    init: function() {
                        return init$1;
                    },
                    isFontLoaded: function() {
                        return _isFontLoaded;
                    },
                    loadFont: function() {
                        return _loadFont;
                    },
                    measureText: function() {
                        return _measureText;
                    },
                    processFontMetrics: function() {
                        return _processFontMetrics;
                    },
                    stopWaitingForFont: function() {
                        return _stopWaitingForFont;
                    },
                    type: function() {
                        return type$1;
                    },
                    waitingForFont: function() {
                        return _waitingForFont;
                    }
                }), fontFamilies = {}, fontLoadPromises = new Map, normalizedMetrics = new Map, 
                nodesWaitingForFont = Object.create(null), fontCache = new Map, initialized = !1, 
                _canRenderFont = function() {
                    return !0;
                }, processFontData = function(fontFamily, fontFace, metrics) {
                    metrics = metrics || defaultFontMetrics, fontCache.set(fontFamily, {
                        fontFamily: fontFamily,
                        fontFace: fontFace,
                        metrics: metrics
                    });
                }, _loadFont = function(stage, options) {
                    var fontFamily = options.fontFamily, fontUrl = options.fontUrl, metrics = options.metrics, names = Array.isArray(fontFamily) ? fontFamily : [ fontFamily ], primary = names[0], prefetched = takeCanvasPrefetch(primary);
                    if (!0 === fontCache.has(primary)) return Promise.resolve();
                    var existingPromise = fontLoadPromises.get(primary);
                    if (void 0 !== existingPromise) return existingPromise;
                    for (var i = 0; i < names.length; i++) nodesWaitingForFont[names[i]] = [];
                    for (var loadPromise = Promise.resolve(prefetched).then(function(faces) {
                        return null != faces && faces.length === names.length ? faces : Promise.all(names.map(function(name) {
                            return new FontFace(name, "url(".concat(fontUrl, ")")).load();
                        }));
                    }).then(function(faces) {
                        for (var _i1 = 0; _i1 < names.length; _i1++) {
                            var loadedFont = faces[_i1];
                            stage.platform.addFont(loadedFont), processFontData(names[_i1], loadedFont, metrics);
                        }
                    }).then(function() {
                        for (var _i10 = 0; _i10 < names.length; _i10++) {
                            var name = names[_i10];
                            fontLoadPromises.delete(name);
                            var nwff = nodesWaitingForFont[name];
                            if (void 0 !== nwff) {
                                for (var key in nwff) nwff[key].setUpdateType(UpdateType.Local);
                                delete nodesWaitingForFont[name];
                            }
                        }
                    }).catch(function(error) {
                        for (var _i11 = 0; _i11 < names.length; _i11++) fontLoadPromises.delete(names[_i11]);
                        throw console.error("Failed to load font: ".concat(primary), error), error;
                    }), _i12 = 0; _i12 < names.length; _i12++) fontLoadPromises.set(names[_i12], loadPromise);
                    return loadPromise;
                }, _getFontFamilies = function() {
                    return fontFamilies;
                }, init$1 = function(c, mc) {
                    if (!0 !== initialized) {
                        if (void 0 === c) throw new Error("Canvas context is not provided for font handler initialization");
                        measureContext$1 = mc || c, processFontData("sans-serif", void 0, {
                            ascender: 800,
                            descender: -200,
                            lineGap: 200,
                            unitsPerEm: 1e3
                        }), initialized = !0;
                    }
                }, type$1 = "canvas", _isFontLoaded = function(fontFamily) {
                    return fontCache.has(fontFamily);
                }, _waitingForFont = function(fontFamily, node) {
                    void 0 !== nodesWaitingForFont[fontFamily] && (nodesWaitingForFont[fontFamily][node.id] = node);
                }, _stopWaitingForFont = function(fontFamily, node) {
                    void 0 !== nodesWaitingForFont[fontFamily] && delete nodesWaitingForFont[fontFamily][node.id];
                }, _getFontMetrics = function(fontFamily, fontSize) {
                    var out = normalizedMetrics.get(fontFamily + fontSize);
                    if (void 0 !== out) return out;
                    var metrics = fontCache.get(fontFamily).metrics;
                    return void 0 === metrics && (metrics = _calculateFontMetrics(fontFamily)), _processFontMetrics(fontFamily, fontSize, metrics);
                }, _processFontMetrics = function(fontFamily, fontSize, metrics) {
                    var label = fontFamily + fontSize, normalized = normalizeFontMetrics(metrics, fontSize);
                    return normalizedMetrics.set(label, normalized), normalized;
                }, _measureText = function(text, fontFamily, letterSpacing) {
                    if (0 === letterSpacing) return measureContext$1.measureText(text).width;
                    for (var width = 0, i = 0, n = text.length; i < n; i++) {
                        var char = text.charAt(i);
                        !0 !== hasZeroWidthSpace(char) && (width += measureContext$1.measureText(char).width + letterSpacing);
                    }
                    return width;
                }, font = CanvasFontHandler_exports, canvas = null, context = null, measureCanvas = null, 
                measureContext = null, layoutCache = new Map, maxLayoutCacheSize = 250, renderText = function(props) {
                    var _props$color;
                    if (0 === props.text.length) return {
                        width: 0,
                        height: 0
                    };
                    var text = props.text, fontFamily = props.fontFamily, fontStyle = props.fontStyle, fontSize = props.fontSize, textAlign = props.textAlign, maxLines = props.maxLines, lineHeight = props.lineHeight, overflowSuffix = (props.verticalAlign, 
                    props.overflowSuffix), maxWidth = props.maxWidth, maxHeight = props.maxHeight, wordBreak = props.wordBreak, font = "".concat(fontStyle, " ").concat(fontSize, "px Unknown, ").concat(fontFamily);
                    measureContext.font = font, measureContext.textBaseline = "alphabetic";
                    var metrics = _getFontMetrics(fontFamily, fontSize), letterSpacing = props.letterSpacing, _mapTextLayout4 = _slicedToArray(mapTextLayout(_measureText, metrics, text, textAlign, fontFamily, lineHeight, overflowSuffix, wordBreak, letterSpacing, maxLines, maxWidth, maxHeight), 7), lines = _mapTextLayout4[0], remainingLines = _mapTextLayout4[1], hasRemainingText = _mapTextLayout4[2], effectiveWidth = (_mapTextLayout4[3], 
                    _mapTextLayout4[4], _mapTextLayout4[5]), effectiveHeight = _mapTextLayout4[6], lineAmount = lines.length, canvasW = Math.ceil(effectiveWidth), canvasH = Math.ceil(effectiveHeight);
                    canvas.width = canvasW, canvas.height = canvasH;
                    var color = null !== (_props$color = props.color) && void 0 !== _props$color ? _props$color : 4294967295, r = color >>> 24 & 255, g = color >>> 16 & 255, b = color >>> 8 & 255, a = 255 & color;
                    context.fillStyle = "rgba(".concat(r, ",").concat(g, ",").concat(b, ",").concat(a / 255, ")"), 
                    context.font = font, context.textBaseline = "alphabetic", fontSize >= 128 && (context.globalAlpha = .01, 
                    context.fillRect(0, 0, .01, .01), context.globalAlpha = 1);
                    for (var i = 0; i < lineAmount; i++) {
                        var line = lines[i], textLine = line[0], currentX = Math.ceil(line[3]), currentY = Math.ceil(line[4]);
                        if (0 === letterSpacing) context.fillText(textLine, currentX, currentY); else for (var textLineLength = textLine.length, j = 0; j < textLineLength; j++) {
                            var char = textLine.charAt(j);
                            !0 !== hasZeroWidthSpace(char) && (context.fillText(char, currentX, currentY), currentX += _measureText(char, fontFamily, letterSpacing));
                        }
                    }
                    var imageData = null;
                    return canvas.width > 0 && canvas.height > 0 && (imageData = context.getImageData(0, 0, canvasW, canvasH)), 
                    {
                        imageData: imageData,
                        width: effectiveWidth,
                        height: effectiveHeight,
                        remainingLines: remainingLines,
                        hasRemainingText: hasRemainingText
                    };
                }, CanvasTextRenderer = {
                    type: "canvas",
                    font: font,
                    renderText: renderText,
                    addQuads: function() {
                        return null;
                    },
                    renderQuads: function() {},
                    init: function(stage) {
                        var dpr = stage.options.devicePhysicalPixelRatio, configuredCacheSize = stage.options.textLayoutCacheSize;
                        void 0 !== configuredCacheSize && (maxLayoutCacheSize = configuredCacheSize), canvas = stage.platform.createCanvas(), 
                        (context = canvas.getContext("2d", {
                            willReadFrequently: !0
                        })).setTransform(dpr, 0, 0, dpr, 0, 0), context.textRendering = "optimizeSpeed", 
                        measureCanvas = stage.platform.createCanvas(), (measureContext = measureCanvas.getContext("2d")).setTransform(dpr, 0, 0, dpr, 0, 0), 
                        measureContext.textRendering = "optimizeSpeed", measureCanvas.width = 1, measureCanvas.height = 1, 
                        init$1(context, measureContext);
                    },
                    clearLayoutCache: function() {
                        layoutCache.clear();
                    },
                    cleanup: function() {
                        for (;layoutCache.size > maxLayoutCacheSize; ) {
                            var oldest = layoutCache.keys().next().value;
                            layoutCache.delete(oldest);
                        }
                    }
                }, WHITE = {
                    isWhite: !0,
                    a: 1,
                    r: 255,
                    g: 255,
                    b: 255
                }, SCRATCH = {
                    isWhite: !1,
                    a: 1,
                    r: 0,
                    g: 0,
                    b: 0
                }, CanvasTexture = function(_CoreContextTexture2) {
                    function CanvasTexture() {
                        for (var _this7, _len3 = arguments.length, _args = new Array(_len3), _key2 = 0; _key2 < _len3; _key2++) _args[_key2] = arguments[_key2];
                        return (_this7 = _callSuper(this, CanvasTexture, [].concat(_args))).image = void 0, 
                        _this7.tintCache = void 0, _this7;
                    }
                    return _inherits(CanvasTexture, _CoreContextTexture2), _createClass(CanvasTexture, [ {
                        key: "load",
                        value: function() {
                            var textureData = this.textureSource.textureData;
                            this.textureSource.setState("loading");
                            try {
                                null == textureData || textureData.data;
                                var size = this.onLoadRequest(textureData.data);
                                if ("freed" === this.textureSource.state) return void (this.image = void 0);
                                this.textureSource.setState("loaded", size), this.textureSource.detachTextureData(), 
                                this.updateMemSize();
                            } catch (err) {
                                this.textureSource.setState("failed", err), this.textureSource.freeTextureData();
                            }
                        }
                    }, {
                        key: "release",
                        value: function() {
                            closeImageBitmap(this.image), this.image = void 0, this.tintCache = void 0;
                        }
                    }, {
                        key: "free",
                        value: function() {
                            this.release(), this.textureSource.setState("freed"), this.setTextureMemUse(0), 
                            this.textureSource.freeTextureData();
                        }
                    }, {
                        key: "updateMemSize",
                        value: function() {
                            var mult = this.tintCache ? 8 : 4;
                            this.textureSource.dimensions && this.setTextureMemUse(this.textureSource.dimensions.w * this.textureSource.dimensions.h * mult);
                        }
                    }, {
                        key: "hasImage",
                        value: function() {
                            return void 0 !== this.image;
                        }
                    }, {
                        key: "getImage",
                        value: function(color) {
                            var _this$tintCache, image = this.image;
                            if (void 0 === image) return null;
                            if (color.isWhite) return this.tintCache && (this.tintCache = void 0, this.updateMemSize()), 
                            image;
                            var _ref3, a, r, g, b, key = (a = (_ref3 = color).a, r = _ref3.r, g = _ref3.g, b = _ref3.b, 
                            "rgba(".concat(r, ",").concat(g, ",").concat(b, ",").concat(a, ")"));
                            if ((null == (_this$tintCache = this.tintCache) ? void 0 : _this$tintCache.key) === key) return this.tintCache.image;
                            var tintedImage = this.tintTexture(image, key);
                            return this.tintCache = {
                                key: key,
                                image: tintedImage
                            }, this.updateMemSize(), tintedImage;
                        }
                    }, {
                        key: "tintTexture",
                        value: function(source, color) {
                            var width = source.width, height = source.height, canvas = document.createElement("canvas");
                            canvas.width = width, canvas.height = height;
                            var ctx = canvas.getContext("2d");
                            return ctx && (ctx.fillStyle = color, ctx.globalCompositeOperation = "copy", ctx.fillRect(0, 0, width, height), 
                            ctx.globalCompositeOperation = "multiply", ctx.drawImage(source, 0, 0, width, height, 0, 0, width, height), 
                            ctx.globalCompositeOperation = "destination-in", ctx.drawImage(source, 0, 0, width, height, 0, 0, width, height)), 
                            canvas;
                        }
                    }, {
                        key: "onLoadRequest",
                        value: function(data) {
                            if (null === data) throw new Error("CanvasTexture: Texture data is null");
                            if ("object" === _typeof(data) && "mipmaps" in data) throw new Error("CanvasTexture: Compressed texture data is not supported in Canvas2D render mode");
                            if (data instanceof ImageData) {
                                var _canvas = document.createElement("canvas");
                                _canvas.width = data.width, _canvas.height = data.height;
                                var ctx = _canvas.getContext("2d");
                                return null !== ctx && ctx.putImageData(data, 0, 0), this.image = _canvas, {
                                    w: data.width,
                                    h: data.height
                                };
                            }
                            return "undefined" != typeof ImageBitmap && data instanceof ImageBitmap || data instanceof HTMLImageElement ? (this.image = data, 
                            {
                                w: data.width,
                                h: data.height
                            }) : {
                                w: 0,
                                h: 0
                            };
                        }
                    } ]);
                }(CoreContextTexture), parsedArgbColors = new Map, parsedRgbaColors = new Map, CanvasShaderNode = function(_CoreShaderNode2) {
                    function CanvasShaderNode(shaderKey, config, stage, props) {
                        var _this8;
                        if ((_this8 = _callSuper(this, CanvasShaderNode, [ shaderKey, config, stage, props ])).updater = void 0, 
                        _this8.computed = {}, _this8.applySNR = void 0, _this8.render = void 0, _this8.applySNR = config.saveAndRestore || !1, 
                        _this8.render = config.render, void 0 !== config.update) {
                            if (_this8.updater = config.update, void 0 === _this8.props) return _this8.updater(_this8.node, _this8.props), 
                            _possibleConstructorReturn(_this8);
                            _this8.update = function() {
                                var prevKey = _this8.valueKey;
                                if (_this8.valueKey = _this8.createValueKey(), prevKey !== _this8.valueKey) {
                                    prevKey.length > 0 && _this8.stage.shManager.mutateShaderValueUsage(prevKey, -1);
                                    var computed = _this8.stage.shManager.getShaderValues(_this8.valueKey);
                                    void 0 === computed ? (_this8.computed = {}, _this8.updater(_this8.node), _this8.stage.shManager.setShaderValues(_this8.valueKey, _this8.computed)) : _this8.computed = computed;
                                }
                            };
                        }
                        return _this8;
                    }
                    return _inherits(CanvasShaderNode, _CoreShaderNode2), _createClass(CanvasShaderNode, [ {
                        key: "toColorString",
                        value: function(rgba) {
                            return normalizeCanvasColor(rgba, !0);
                        }
                    } ]);
                }(CoreShaderNode), CanvasRenderer = function(_CoreRenderer2) {
                    function CanvasRenderer(options) {
                        var _this9;
                        (_this9 = _callSuper(this, CanvasRenderer, [ options ])).context = void 0, _this9.canvas = void 0, 
                        _this9.pixelRatio = void 0, _this9.clearColor = void 0, _this9.clearColorAlpha = void 0, 
                        _this9.shaderContextNode = null, _this9.shaderContextTexture = null, _this9.shaderRenderContext = function() {
                            _this9.renderContext(_this9.shaderContextNode, _this9.shaderContextTexture);
                        }, _this9.mode = "canvas";
                        var canvas = options.canvas;
                        return _this9.canvas = canvas, _this9.context = canvas.getContext("2d"), _this9.pixelRatio = _this9.stage.pixelRatio, 
                        _this9.clearColor = normalizeCanvasColor(_this9.stage.clearColor), _this9.clearColorAlpha = _this9.stage.clearColor >>> 24 & 255, 
                        _this9;
                    }
                    return _inherits(CanvasRenderer, _CoreRenderer2), _createClass(CanvasRenderer, [ {
                        key: "reset",
                        value: function() {
                            var ctx = this.context, w = this.canvas.width, h = this.canvas.height;
                            ctx.setTransform(1, 0, 0, 1, 0, 0), ctx.clearRect(0, 0, w, h), 0 !== this.clearColorAlpha && (ctx.fillStyle = this.clearColor, 
                            ctx.fillRect(0, 0, w, h)), ctx.scale(this.pixelRatio, this.pixelRatio);
                        }
                    }, {
                        key: "render",
                        value: function() {}
                    }, {
                        key: "addQuad",
                        value: function(node, renderTexture) {
                            var ctx = this.context, _node$globalTransform = node.globalTransform, tx = _node$globalTransform.tx, ty = _node$globalTransform.ty, ta = _node$globalTransform.ta, tb = _node$globalTransform.tb, tc = _node$globalTransform.tc, td = _node$globalTransform.td, clippingRect = node.clippingRect, texture = void 0 !== renderTexture ? renderTexture : !0 === node.placeholderActive ? this.stage.defaultTexture : node.props.texture || this.stage.defaultTexture;
                            if (null !== texture) {
                                var textureType = texture.type;
                                if (textureType !== TextureType.image && textureType !== TextureType.subTexture && textureType !== TextureType.color && textureType !== TextureType.noise) return;
                            }
                            var hasTransform = 1 !== ta || 1 !== td || 0 !== tb || 0 !== tc, clippingValid = !0 === clippingRect.valid;
                            if (!0 !== clippingValid || 0 !== clippingRect.w || 0 !== clippingRect.h) {
                                var hasClipping = !0 === clippingValid && 0 !== clippingRect.w && 0 !== clippingRect.h, shader = node.props.shader, hasShader = null !== shader, saveAndRestore = !0 === hasTransform || !0 === hasClipping;
                                if (!0 === hasShader && (saveAndRestore = saveAndRestore || shader.applySNR), saveAndRestore && ctx.save(), 
                                !0 === hasClipping && (ctx.beginPath(), ctx.rect(clippingRect.x, clippingRect.y, clippingRect.w, clippingRect.h), 
                                ctx.clip()), !0 === hasTransform) {
                                    var scale = this.pixelRatio;
                                    ctx.setTransform(ta, tc, tb, td, tx * scale, ty * scale), ctx.scale(scale, scale), 
                                    ctx.translate(-tx, -ty);
                                }
                                !0 === hasShader ? (this.shaderContextNode = node, this.shaderContextTexture = texture, 
                                shader.render(ctx, node, this.shaderRenderContext), this.shaderContextNode = null, 
                                this.shaderContextTexture = null) : this.renderContext(node, texture), saveAndRestore && ctx.restore();
                            }
                        }
                    }, {
                        key: "renderContext",
                        value: function(node, texture) {
                            var color = node.premultipliedColorTl, textureType = texture.type, tx = node.globalTransform.tx, ty = node.globalTransform.ty, width = node.props.w, height = node.props.h;
                            if (textureType === TextureType.color) {
                                var abgr;
                                if (!0 == (node.premultipliedColorTl !== node.premultipliedColorTr || node.premultipliedColorTl !== node.premultipliedColorBr)) {
                                    var endColor, endX = tx, endY = ty;
                                    node.premultipliedColorTl === node.premultipliedColorTr ? (endX = tx, endY = ty + height, 
                                    endColor = node.premultipliedColorBr) : (endX = tx + width, endY = ty, endColor = node.premultipliedColorTr);
                                    var startColor = color, startAlpha = startColor >>> 24 & 255, endAlpha = endColor >>> 24 & 255;
                                    0 === startAlpha && endAlpha > 0 ? startColor = (4278190080 & startColor | 16777215 & endColor) >>> 0 : 0 === endAlpha && startAlpha > 0 && (endColor = (4278190080 & endColor | 16777215 & startColor) >>> 0);
                                    var gradient = this.context.createLinearGradient(tx, ty, endX, endY);
                                    gradient.addColorStop(0, normalizeCanvasColor(startColor)), gradient.addColorStop(1, normalizeCanvasColor(endColor)), 
                                    this.context.fillStyle = gradient, this.context.fillRect(tx, ty, width, height);
                                } else this.context.fillStyle = normalizeCanvasColor(color), this.context.fillRect(tx, ty, width, height);
                            } else {
                                var _tintColor$a, image, tintColor = 4294967295 === (abgr = color) ? WHITE : (SCRATCH.a = (abgr >>> 24 & 255) / 255, 
                                SCRATCH.b = abgr >>> 16 & 255, SCRATCH.g = abgr >>> 8 & 255, SCRATCH.r = 255 & abgr, 
                                SCRATCH);
                                if (null == (image = textureType === TextureType.subTexture ? texture.parentTexture.ctxTexture.getImage(tintColor) : texture.ctxTexture.getImage(tintColor))) return;
                                var imageWidth = image.width, imageHeight = image.height;
                                if ("number" != typeof imageWidth || "number" != typeof imageHeight || imageWidth <= 0 || imageHeight <= 0) return;
                                this.context.globalAlpha = null !== (_tintColor$a = tintColor.a) && void 0 !== _tintColor$a ? _tintColor$a : node.worldAlpha;
                                var txCoords = node.textureCoords;
                                if (txCoords) {
                                    var ix = imageWidth, iy = imageHeight, sx = txCoords.x1 * ix, sy = txCoords.y1 * iy, sw = (txCoords.x2 - txCoords.x1) * ix, sh = (txCoords.y2 - txCoords.y1) * iy, flipX = !1, flipY = !1;
                                    sw < 0 && (flipX = !0, sx += sw, sw = Math.abs(sw)), sh < 0 && (flipY = !0, sy += sh, 
                                    sh = Math.abs(sh)), flipX || flipY ? (this.context.save(), this.context.translate(tx + (flipX ? width : 0), ty + (flipY ? height : 0)), 
                                    this.context.scale(flipX ? -1 : 1, flipY ? -1 : 1), this.context.drawImage(image, sx, sy, sw, sh, 0, 0, width, height), 
                                    this.context.restore()) : this.context.drawImage(image, sx, sy, sw, sh, tx, ty, width, height);
                                } else this.context.drawImage(image, tx, ty, width, height);
                                this.context.globalAlpha = 1;
                            }
                        }
                    }, {
                        key: "renderNodeContent",
                        value: function(node, target) {
                            var texture = node.props.texture;
                            !0 !== node.placeholderActive && null !== texture || (texture = this.stage.defaultTexture);
                            var prev = this.context;
                            this.context = target, this.renderContext(node, texture), this.context = prev;
                        }
                    }, {
                        key: "createShaderNode",
                        value: function(shaderKey, shaderType, props) {
                            return new CanvasShaderNode(shaderKey, shaderType, this.stage, props);
                        }
                    }, {
                        key: "createShaderProgram",
                        value: function(_shaderConfig) {
                            return null;
                        }
                    }, {
                        key: "supportsShaderType",
                        value: function(shaderType) {
                            return void 0 !== shaderType.render;
                        }
                    }, {
                        key: "createCtxTexture",
                        value: function(textureSource) {
                            return new CanvasTexture(this.stage.txMemManager, textureSource);
                        }
                    }, {
                        key: "getBufferInfo",
                        value: function() {
                            return null;
                        }
                    }, {
                        key: "getQuadCount",
                        value: function() {
                            return null;
                        }
                    }, {
                        key: "getRenderOpCount",
                        value: function() {
                            return null;
                        }
                    }, {
                        key: "getCapabilities",
                        value: function() {
                            return {
                                renderMode: "canvas",
                                webGlVersion: null,
                                vertexArrayObject: !1,
                                maxTextureSize: 0,
                                maxTextureUnits: 0
                            };
                        }
                    }, {
                        key: "checkForOutOfMemory",
                        value: function() {
                            return !1;
                        }
                    }, {
                        key: "updateClearColor",
                        value: function(color) {
                            this.clearColor = normalizeCanvasColor(color), this.clearColorAlpha = color >>> 24 & 255;
                        }
                    }, {
                        key: "getTextureCoords",
                        value: function(node) {
                            var texture = node.texture;
                            if (null !== texture && void 0 !== (texture.type === TextureType.subTexture ? texture.parentTexture.ctxTexture : texture.ctxTexture)) {
                                var textureOptions = node.props.textureOptions;
                                if (texture.type !== TextureType.subTexture && void 0 === textureOptions) return {
                                    x1: 0,
                                    y1: 0,
                                    x2: 1,
                                    y2: 1
                                };
                                var x1 = 0, y1 = 0, x2 = 1, y2 = 1;
                                if (texture.type === TextureType.subTexture) {
                                    var _texture$parentTextur2 = texture.parentTexture.dimensions, parentW = _texture$parentTextur2.w, parentH = _texture$parentTextur2.h, _texture$props2 = texture.props, x = _texture$props2.x, y = _texture$props2.y;
                                    x2 = (x1 = x / parentW) + _texture$props2.w / parentW, y2 = (y1 = y / parentH) + _texture$props2.h / parentH;
                                }
                                if (null != textureOptions) {
                                    var resizeMode = textureOptions.resizeMode;
                                    if (void 0 !== resizeMode && "cover" === resizeMode.type && null !== texture.dimensions) {
                                        var dimensions = texture.dimensions, _w2 = node.props.w, _h2 = node.props.h, scaleX = _w2 / dimensions.w, scaleY = _h2 / dimensions.h, scale = Math.max(scaleX, scaleY), precision = 1 / scale;
                                        if (scaleX < scale) {
                                            var _resizeMode$clipX, desiredSize = precision * node.props.w;
                                            x2 = (x1 = (1 - desiredSize / dimensions.w) * clampUnit(null !== (_resizeMode$clipX = resizeMode.clipX) && void 0 !== _resizeMode$clipX ? _resizeMode$clipX : .5)) + desiredSize / dimensions.w;
                                        }
                                        if (scaleY < scale) {
                                            var _resizeMode$clipY, _desiredSize2 = precision * node.props.h;
                                            y2 = (y1 = (1 - _desiredSize2 / dimensions.h) * clampUnit(null !== (_resizeMode$clipY = resizeMode.clipY) && void 0 !== _resizeMode$clipY ? _resizeMode$clipY : .5)) + _desiredSize2 / dimensions.h;
                                        }
                                    }
                                    if (!0 === textureOptions.flipX) {
                                        var _ref18 = [ x2, x1 ];
                                        x1 = _ref18[0], x2 = _ref18[1];
                                    }
                                    if (!0 === textureOptions.flipY) {
                                        var _ref19 = [ y2, y1 ];
                                        y1 = _ref19[0], y2 = _ref19[1];
                                    }
                                }
                                return {
                                    x1: x1,
                                    y1: y1,
                                    x2: x2,
                                    y2: y2
                                };
                            }
                        }
                    }, {
                        key: "updateViewport",
                        value: function() {}
                    }, {
                        key: "getDefaultShaderNode",
                        value: function() {
                            return null;
                        }
                    } ]);
                }(CoreRenderer), doOnce = !1, useAnnouncer = function(options) {
                    return doOnce || (doOnce = !0, Announcer.setupTimers(options), createEffect(on(focusPath, Announcer.onFocusChange, {
                        defer: !0
                    }))), Announcer;
                }, tryOnCleanup = onCleanup, createCallbackStack = function() {
                    var stack = [], clear = function() {
                        return stack = [];
                    };
                    return {
                        push: function() {
                            var _stack;
                            return (_stack = stack).push.apply(_stack, arguments);
                        },
                        execute: function(arg0, arg1, arg2, arg3) {
                            stack.forEach(function(cb) {
                                return cb(arg0, arg1, arg2, arg3);
                            }), clear();
                        },
                        clear: clear
                    };
                }, PASSIVE = {
                    passive: !0
                }, DEFAULT_MOUSE_POSITION = {
                    x: 0,
                    y: 0,
                    isInside: !1,
                    sourceType: null
                }, useMousePosition = createHydratableSingletonRoot(createMousePosition.bind(void 0, void 0, void 0)), 
                _createSignal12 = _slicedToArray(createSignal(!1), 2), _createSignal12[0], _createSignal12[1], 
                handleScroll = throttle(function(e) {
                    var deltaY = e.deltaY;
                    deltaY < 0 ? document.body.dispatchEvent(createKeyboardEvent("ArrowUp", 38)) : deltaY > 0 && document.body.dispatchEvent(createKeyboardEvent("ArrowDown", 40)), 
                    clearTimeout(scrollTimeout), scrollTimeout = setTimeout(function() {
                        document.body.dispatchEvent(createKeyboardEvent("ArrowUp", 38, "keyup")), document.body.dispatchEvent(createKeyboardEvent("ArrowDown", 40, "keyup"));
                    }, 250);
                }, 250), columnScroll = withScrolling(!1), rowStyles = {
                    display: "flex",
                    flexWrap: "wrap",
                    transition: {
                        y: !0
                    }
                }, createRouterComponent = function(router) {
                    return function(props) {
                        var context, base = props.base, routeDefs = children(function() {
                            return props.children;
                        }), branches = createMemo(function() {
                            return createBranches(routeDefs(), props.base || "");
                        }), routerState = createRouterContext(router, branches, function() {
                            return context;
                        }, {
                            base: base,
                            singleFlight: props.singleFlight,
                            transformUrl: props.transformUrl
                        });
                        return router.create && router.create(routerState), createComponent(RouterContextObj.Provider, {
                            value: routerState,
                            get children() {
                                return createComponent(Root, {
                                    routerState: routerState,
                                    get root() {
                                        return props.root;
                                    },
                                    get preload() {
                                        return props.rootPreload || props.rootLoad;
                                    },
                                    get children() {
                                        return [ memo(function() {
                                            return (context = getOwner()) && null;
                                        }), createComponent(Routes, {
                                            routerState: routerState,
                                            get branches() {
                                                return branches();
                                            }
                                        }) ];
                                    }
                                });
                            }
                        });
                    };
                }, createOutlet = function(child) {
                    return function() {
                        return createComponent(Show, {
                            get when() {
                                return child();
                            },
                            keyed: !0,
                            children: function(child) {
                                return createComponent(RouteContextObj.Provider, {
                                    value: child,
                                    get children() {
                                        return child.outlet();
                                    }
                                });
                            }
                        });
                    };
                }, Route = function(props) {
                    var childRoutes = children(function() {
                        return props.children;
                    });
                    return mergeProps(props, {
                        get children() {
                            return childRoutes();
                        }
                    });
                }, SUPPORTS_PROXY = "function" == typeof Proxy, collectDynamicParams = function(branches) {
                    var dynamicParams = [];
                    return branches.forEach(function(branch) {
                        branch.routes.forEach(function(route) {
                            if (route.pattern) {
                                var matches = route.pattern.match(/:(\w+)/g);
                                matches && matches.forEach(function(param) {
                                    var p = param.slice(1);
                                    dynamicParams.includes(p) || dynamicParams.push(p);
                                });
                            }
                        });
                    }), dynamicParams;
                }, keepAliveElements = new Map, keepAliveRouteElements = new Map, _storeKeepAlive = function(map, element) {
                    var existing = map.get(element.id);
                    return existing ? (Object.assign(existing, element), existing) : (map.set(element.id, element), 
                    element);
                }, storeKeepAliveRoute = function(element) {
                    return _storeKeepAlive(keepAliveRouteElements, element);
                }, createKeepAliveComponent = function(map, storeFn) {
                    return function(props) {
                        var _props$shouldDispose, _existing$dispose, _existing$owner, existing = map.get(props.id), existingChild = null == existing ? void 0 : existing.children;
                        existing && ((null == (_props$shouldDispose = props.shouldDispose) ? void 0 : _props$shouldDispose.call(props, props.id)) || (null == existingChild ? void 0 : existingChild.destroyed)) && (null == existingChild || existingChild.destroy(), 
                        null == (_existing$dispose = existing.dispose) || _existing$dispose.call(existing), 
                        map.delete(props.id), existing = void 0);
                        return existing && existing.dispose ? (existing.children || (existing.children = runWithOwner(null !== (_existing$owner = existing.owner) && void 0 !== _existing$owner ? _existing$owner : null, function() {
                            return wrapChildren(props, existing.setIsAlive);
                        })), existing.children) : createRoot(function(dispose) {
                            var _ref21 = _slicedToArray((null == existing ? void 0 : existing.isAlive) && (null == existing ? void 0 : existing.setIsAlive) ? [ existing.isAlive, existing.setIsAlive ] : createSignal(!0), 2), isAlive = _ref21[0], setIsAlive = _ref21[1], children = wrapChildren(props, setIsAlive);
                            return storeFn({
                                id: props.id,
                                owner: getOwner(),
                                children: children,
                                dispose: dispose,
                                isAlive: isAlive,
                                setIsAlive: setIsAlive
                            }), children;
                        });
                    };
                }, createKeepAliveComponent(keepAliveElements, function(element) {
                    return _storeKeepAlive(keepAliveElements, element);
                }), KeepAliveRouteInternal = createKeepAliveComponent(keepAliveRouteElements, storeKeepAliveRoute), 
                keepAliveRouteCache = new Map, KeepAliveRoute = function(props) {
                    var key = props.id || props.path, cached = keepAliveRouteCache.get(key);
                    if (cached) return cached;
                    var getExisting = function() {
                        var existing = keepAliveRouteElements.get(key);
                        if (!existing) {
                            var _createSignal14 = _slicedToArray(createSignal(!0), 2), isAlive = _createSignal14[0], setIsAlive = _createSignal14[1];
                            existing = {
                                id: key,
                                isAlive: isAlive,
                                setIsAlive: setIsAlive
                            }, keepAliveRouteElements.set(key, existing);
                        }
                        return existing;
                    }, onRemove = chainFunctions(props.onRemove, function(elm) {
                        var existing = keepAliveRouteElements.get(key);
                        existing && (existing.savedFocusedElement = activeElement()), elm.alpha = 0;
                    }), onRender = chainFunctions(props.onRender, function(elm) {
                        var existing = keepAliveRouteElements.get(key), savedFocusedElement = null == existing ? void 0 : existing.savedFocusedElement;
                        existing && (existing.savedFocusedElement = void 0);
                        for (var isChild = !1, current = savedFocusedElement; current; ) {
                            if (current === elm) {
                                isChild = !0;
                                break;
                            }
                            current = current.parent;
                        }
                        isChild && savedFocusedElement ? savedFocusedElement.setFocus() : elm.setFocus(), 
                        elm.alpha = 1;
                    }), preload = props.preload ? function(preloadProps) {
                        var _props$shouldDispose2, _existing$dispose2, existing = getExisting(), existingChild = existing.children;
                        existingChild && ((null == (_props$shouldDispose2 = props.shouldDispose) ? void 0 : _props$shouldDispose2.call(props, key)) || existingChild.destroyed) && (existingChild.destroy(), 
                        null == (_existing$dispose2 = existing.dispose) || _existing$dispose2.call(existing), 
                        keepAliveRouteElements.delete(key), existing = getExisting());
                        return existing.dispose ? existing.children ? (existing.children.setFocus(), props.preload(_objectSpread(_objectSpread({}, preloadProps), {}, {
                            isAlive: existing.isAlive
                        }))) : props.preload(_objectSpread(_objectSpread({}, preloadProps), {}, {
                            isAlive: existing.isAlive
                        })) : createRoot(function(dispose) {
                            return existing.owner = getOwner(), existing.dispose = dispose, props.preload(_objectSpread(_objectSpread({}, preloadProps), {}, {
                                isAlive: existing.isAlive
                            }));
                        });
                    } : void 0, routeElement = createComponent(Route, mergeProps$1(props, {
                        preload: preload,
                        component: function(childProps) {
                            var existing = getExisting(), innerProps = Object.create(childProps, {
                                isAlive: {
                                    value: existing.isAlive,
                                    enumerable: !0,
                                    configurable: !0
                                }
                            });
                            return createComponent(KeepAliveRouteInternal, {
                                id: key,
                                onRemove: onRemove,
                                onRender: onRender,
                                get transition() {
                                    return props.transition;
                                },
                                get children() {
                                    return props.component(innerProps);
                                }
                            });
                        }
                    }));
                    return keepAliveRouteCache.set(key, routeElement), routeElement;
                }, App = function(props) {
                    return useFocusManager({
                        Announcer: [ "a" ],
                        Menu: [ "m" ],
                        Escape: [ "Escape", 27 ],
                        Back: [ "Back", "GoBack", "Backspace", "b", 8, 461, 10009, "Escape", 27 ],
                        Left: [ "ArrowLeft", "Left", 37 ],
                        Right: [ "ArrowRight", "Right", 39 ],
                        Up: [ "ArrowUp", "Up", 38 ],
                        Down: [ "ArrowDown", "Down", 40 ],
                        Enter: [ "Enter", 13 ],
                        Play: [ "Play", 415 ],
                        Pause: [ "Pause", 19 ],
                        PlayPause: [ "PlayPause", 10252 ],
                        FastForward: [ "FastForward", 417 ],
                        FastForward10: [ "FastForward10", 10233 ],
                        Rewind: [ "Rewind", 412 ],
                        Rewind10: [ "Rewind10", 10232 ],
                        Stop: [ "Stop", 413 ]
                    }, {
                        userKeyHoldMap: {
                            EnterHold: [ "Enter", 13 ],
                            BackHold: [ "b", 66 ]
                        },
                        holdThreshold: 1e3
                    }), function() {
                        var myApp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rootNode, throttleBy = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, options = arguments.length > 2 ? arguments[2] : void 0, pos = useMousePosition(), scheduled = createScheduled(function(fn) {
                            return throttle(fn, throttleBy);
                        }), previousElement = null, pressedElementRef = {
                            current: null
                        }, customStates = null == options ? void 0 : options.customStates, hoverState = null == customStates ? void 0 : customStates.hoverState, handleClick = createHandleClick(myApp, customStates, pressedElementRef), handleMouseDown = createHandleMouseDown(myApp, customStates, pressedElementRef), owner = getOwner(), focusKey = Config.focusStateKey;
                        makeEventListener(window, "wheel", handleScroll), makeEventListener(window, "click", function(e) {
                            runWithOwner(owner, function() {
                                return handleClick(e);
                            });
                        }), makeEventListener(window, "mousedown", function(e) {
                            runWithOwner(owner, function() {
                                return handleMouseDown(e);
                            });
                        }), createEffect(function() {
                            if (scheduled()) {
                                for (var activeElm, path = getChildrenByPosition(myApp, pos.x, pos.y), i = path.length - 1; i >= 0; i--) {
                                    var el = path[i];
                                    if (el.onEnter || el.onMouseClick || el.onFocus || el[focusKey] || hoverState && el[hoverState]) {
                                        activeElm = el;
                                        break;
                                    }
                                }
                                if (activeElm) {
                                    for (var p = activeElm.parent; null == p ? void 0 : p.forwardStates; ) activeElm = p, 
                                    p = p.parent;
                                    var activeElmParent = activeElm.parent;
                                    void 0 !== (null == activeElmParent ? void 0 : activeElmParent.selected) && (activeElmParent.selected = activeElmParent.children.indexOf(activeElm)), 
                                    previousElement && previousElement !== activeElm && hoverState && removeCustomStateFromElement(previousElement, hoverState), 
                                    hoverState ? addCustomStateToElement(activeElm, hoverState) : activeElm.setFocus(), 
                                    previousElement = activeElm;
                                } else previousElement && hoverState && (removeCustomStateFromElement(previousElement, hoverState), 
                                previousElement = null);
                            }
                        });
                    }(void 0, 100, {
                        customStates: {
                            hoverState: "$hover",
                            pressedState: "$pressed",
                            pressedStateDuration: 150
                        }
                    }), props.children;
                }, Browse = function(props) {
                    usePreloadRoute();
                    var vgRef, _createSignal16 = _slicedToArray(createSignal({}), 2), heroContent = _createSignal16[0], setHeroContent = _createSignal16[1], navigate = useNavigate(), firstRun = !0;
                    onCleanup(function() {
                        console.log("cleanup");
                    });
                    var provider = createMemo(function() {
                        return fetcher = props.data(), _createSignal8 = _slicedToArray(createSignal([]), 2), 
                        pages = _createSignal8[0], setPages = _createSignal8[1], _createSignal0 = _slicedToArray(createSignal(1), 2), 
                        page = _createSignal0[0], setPage = _createSignal0[1], _createSignal10 = _slicedToArray(createSignal(!1), 2), 
                        end = _createSignal10[0], setEnd = _createSignal10[1], contents = _slicedToArray(createResource(page, fetcher), 1)[0], 
                        createComputed(function() {
                            var content = contents();
                            content && batch(function() {
                                0 === content.length && setEnd(!0), setPages(function(p) {
                                    return [].concat(_toConsumableArray(p), _toConsumableArray(content));
                                });
                            });
                        }), {
                            pages: pages,
                            page: page,
                            setPage: setPage,
                            setPages: setPages,
                            end: end,
                            setEnd: setEnd
                        };
                        var fetcher, _createSignal8, pages, setPages, _createSignal0, page, setPage, _createSignal10, end, setEnd, contents;
                    }), delayedBackgrounds = debounce(function(img) {
                        return setGlobalBackground(img);
                    }, 800), delayedHero = debounce(function(content) {
                        return setHeroContent(content || {});
                    }, 600);
                    function updateContentBlock(_index, _col, elm) {
                        if (elm) {
                            var item = elm.item || {};
                            if (firstRun) return item.backdrop && setGlobalBackground(item.backdrop), item.heroContent && setHeroContent(item.heroContent), 
                            void (firstRun = !1);
                            item.href, item.backdrop && delayedBackgrounds(item.backdrop), item.heroContent && delayedHero(item.heroContent);
                        }
                    }
                    function onEndReached() {
                        provider().setPage(function(p) {
                            return p + 1;
                        });
                    }
                    function onEnter() {
                        var _entity$item;
                        this.display = "flex";
                        var entity = this.children.find(function(c) {
                            return c.states.has("focus");
                        });
                        return entity && (null == (_entity$item = entity.item) || _entity$item.href), navigate(entity.item.href), 
                        !0;
                    }
                    return createComponent(Show, {
                        get when() {
                            return provider().pages().length;
                        },
                        get children() {
                            return [ createComponent(ContentBlock, {
                                y: 360,
                                x: 162,
                                get content() {
                                    return heroContent();
                                },
                                forwardFocus: function() {
                                    return vgRef.setFocus();
                                }
                            }), (_el$ = createElement("view"), setProp(_el$, "clipping", !0), insert(_el$, createComponent(VirtualGrid, {
                                y: 24,
                                x: 160,
                                id: "BrowseGrid",
                                ref: function(r$) {
                                    "function" == typeof vgRef ? vgRef(r$) : vgRef = r$;
                                },
                                scroll: "always",
                                get announce() {
                                    return "All Trending ".concat(props.params.filter);
                                },
                                onEnter: onEnter,
                                columns: 7,
                                gap: 50,
                                rows: 2,
                                buffer: 2,
                                onSelectedChanged: updateContentBlock,
                                onEndReached: onEndReached,
                                onEndReachedThreshold: 22,
                                width: 1620,
                                autofocus: !0,
                                get each() {
                                    return provider().pages();
                                },
                                children: function(item) {
                                    return createComponent(Thumbnail, {
                                        get item() {
                                            return item();
                                        }
                                    });
                                }
                            })), effect(function(_$p) {
                                return setProp(_el$, "style", styles_default.itemsContainer, _$p);
                            }), _el$) ];
                            var _el$;
                        }
                    });
                }, TMDB = function(props) {
                    var contentBlock, solidLogo, _createSignal18 = _slicedToArray(createSignal({}), 2), heroContent = _createSignal18[0], setHeroContent = _createSignal18[1], _createSignal20 = _slicedToArray(createSignal(!1), 2), openPanel = _createSignal20[0], setOpenPanel = _createSignal20[1], _useFocusStack = useFocusStack(), storeFocus = _useFocusStack.storeFocus, restoreFocus = _useFocusStack.restoreFocus, firstRun = !0, delayedBackgrounds = debounce(setGlobalBackground, 800), delayedHero = debounce(function(content) {
                        return setHeroContent(content || {});
                    }, 600);
                    function onRowChanged(selectedIndex, column, row, lastIndex) {
                        if (selectedIndex !== lastIndex) {
                            var values = 0 === selectedIndex ? {
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
                            var values2 = 0 === selectedIndex ? {
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
                    }
                    return createEffect(on(activeElement, function(elm) {
                        if (elm) {
                            var item = elm.item || {};
                            firstRun ? (item.backdrop && setGlobalBackground(item.backdrop), item.heroContent && setHeroContent(item.heroContent), 
                            firstRun = !1) : (item.backdrop && delayedBackgrounds(item.backdrop), item.heroContent && delayedHero(item.heroContent));
                        }
                    }, {
                        defer: !0
                    })), function() {
                        var _el$ = createElement("view"), _el$2 = createElement("view"), _el$3 = createElement("text"), _el$5 = createElement("view"), _el$6 = createElement("view"), _el$7 = createElement("text");
                        insertNode(_el$, _el$2), setProp(_el$, "forwardFocus", 2), setProp(_el$, "autofocus", !0), 
                        insertNode(_el$2, _el$3), insertNode(_el$2, _el$5), insertNode(_el$2, _el$6), insertNode(_el$2, _el$7);
                        return "function" == typeof solidLogo ? use(solidLogo, _el$2) : solidLogo = _el$2, 
                        setProp(_el$2, "width", 300), setProp(_el$2, "height", 150), setProp(_el$2, "x", 162), 
                        setProp(_el$2, "y", 80), setProp(_el$2, "zIndex", 105), insertNode(_el$3, createTextNode("Built With:")), 
                        setProp(_el$3, "x", 80), setProp(_el$3, "fontSize", 28), setProp(_el$3, "color", 4143380121), 
                        setProp(_el$5, "y", 32), setProp(_el$5, "src", "./assets/solidWord.png"), setProp(_el$5, "width", 280), 
                        setProp(_el$5, "height", 52), setProp(_el$6, "x", 0), setProp(_el$6, "y", 110), 
                        setProp(_el$6, "src", "./assets/tmdb.png"), setProp(_el$6, "width", 80), setProp(_el$6, "height", 41), 
                        insertNode(_el$7, createTextNode("This product uses the TMDB API but is not endorsed or certified by TMDB.")), 
                        setProp(_el$7, "x", 90), setProp(_el$7, "y", 110), setProp(_el$7, "contain", "width"), 
                        setProp(_el$7, "width", 160), setProp(_el$7, "fontSize", 12), setProp(_el$7, "color", 4143380121), 
                        insert(_el$, createComponent(ContentBlock, {
                            ref: function(r$) {
                                "function" == typeof contentBlock ? contentBlock(r$) : contentBlock = r$;
                            },
                            y: 300,
                            x: 162,
                            get content() {
                                return heroContent();
                            }
                        }), null), insert(_el$, createComponent(LazyColumn, {
                            y: 500,
                            upCount: 3,
                            get each() {
                                return props.data.rows;
                            },
                            id: "BrowseColumn",
                            onSelectedChanged: onRowChanged,
                            onEnter: function() {
                                return setOpenPanel(!0);
                            },
                            get autofocus() {
                                return props.data.rows[0].items();
                            },
                            gap: 40,
                            throttleInput: 250,
                            width: 1760,
                            get style() {
                                return styles_default.Column;
                            },
                            children: function(row) {
                                return "Hero" === row().type ? createComponent(LazyRow, {
                                    gap: 80,
                                    upCount: 2,
                                    bufferSize: 1,
                                    scroll: "center",
                                    centerScroll: !0,
                                    get each() {
                                        return row().items();
                                    },
                                    y: 50,
                                    get height() {
                                        return row().height;
                                    },
                                    children: function(item) {
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
                        }), null), insert(_el$, createComponent(AssetPanel, {
                            onFocus: storeFocus,
                            close: function() {
                                return setOpenPanel(!1), restoreFocus(), !0;
                            },
                            get open() {
                                return openPanel();
                            },
                            get item() {
                                return heroContent();
                            }
                        }), null), _el$;
                    }();
                }, Destroy = function(props) {
                    var _el$, _el$2, _createSignal22 = _slicedToArray(createSignal(), 2), heroContent = _createSignal22[0], setHeroContent = _createSignal22[1], _createSignal24 = _slicedToArray(createSignal(0), 2), heroIndex = _createSignal24[0], setHeroIndex = _createSignal24[1];
                    function onDown() {
                        if (heroIndex() >= 19) return !1;
                        setHeroIndex(function(p) {
                            return p + 1;
                        });
                    }
                    function onUp() {
                        return 0 !== heroIndex() && (setHeroIndex(function(p) {
                            return p - 1;
                        }), !0);
                    }
                    function animateOut(node) {
                        return node.animate({
                            y: 200,
                            alpha: 0
                        }, {
                            duration: 500,
                            easing: "ease-in-out"
                        }).start().waitUntilStopped();
                    }
                    function animateIn(node) {
                        return node.alpha = 0, node.y = -100, node.animate({
                            y: 0,
                            alpha: 1
                        }, {
                            duration: 500,
                            easing: "ease-in-out"
                        }).start().waitUntilStopped();
                    }
                    return onMount(function() {
                        return setGlobalBackground(858993663);
                    }), createEffect(on([ props.data.heroRow.items, heroIndex ], function(_ref22) {
                        var _ref23 = _slicedToArray(_ref22, 2), heros = _ref23[0], index = _ref23[1];
                        if (heros && setHeroContent(heros[index]), heros && index < heros.length - 1) {
                            var img = new Image;
                            img.crossOrigin = "anonymous", img.src = heros[index + 1].backdrop;
                        }
                    })), _el$ = createElement("view"), _el$2 = createElement("view"), insertNode(_el$, _el$2), 
                    setProp(_el$, "x", 300), setProp(_el$, "y", 200), setProp(_el$, "onDown", onDown), 
                    setProp(_el$, "onUp", onUp), setProp(_el$2, "src", "assets/up.svg"), setProp(_el$2, "width", 350), 
                    setProp(_el$2, "height", 200), setProp(_el$2, "x", 450), setProp(_el$2, "y", -200), 
                    insert(_el$, createComponent(Show, {
                        get when() {
                            return heroContent();
                        },
                        keyed: !0,
                        get children() {
                            return createComponent(Hero, {
                                id: "Hero",
                                autofocus: !0,
                                onDestroy: animateOut,
                                onCreate: animateIn,
                                get item() {
                                    return heroContent();
                                },
                                get title() {
                                    return heroContent().title;
                                }
                            });
                        }
                    }), null), effect(function(_$p) {
                        return setProp(_el$2, "rotation", Math.PI, _$p);
                    }), _el$;
                }, handleResults = function(response) {
                    return response.then(function(_ref24) {
                        var results = _ref24.results;
                        return convertItemsToTiles(results.filter(function(r) {
                            return !r.adult;
                        }));
                    }).catch(function(err) {
                        throw console.error("[HANDLE_RESULTS_ERROR] error:", err.message, err.stack), err;
                    });
                }, fetchPopular = function(type) {
                    return handleResults(api_default.get("/".concat(type, "/popular")));
                }, fetchGenreMovies = function(genres) {
                    var genreList = genreListCache || (genreListCache = api_default.get("/genre/movie/list")), targetGenre = Array.isArray(genres) ? genres : [ genres ];
                    return genreList.then(function(_ref25) {
                        var genres = _ref25.genres, targetGenreIds = [];
                        return genres.forEach(function(item) {
                            targetGenre.includes(item.name) && targetGenreIds.push(item.id);
                        }), handleResults(api_default.get("/discover/movie?with_genres=".concat(targetGenreIds.join())));
                    }).catch(function(err) {
                        throw console.error("[FETCH_GENRE_MOVIES_ERROR] genres:", genres, "error:", err.message, err.stack), 
                        err;
                    });
                }, NotFound = function() {
                    return _el$ = createElement("node"), setProp(_el$, "style", {
                        width: 1920,
                        height: 1080,
                        color: 868483072
                    }), _el$;
                    var _el$;
                }, fonts_default = [ {
                    type: "msdf",
                    fontFamily: "Roboto",
                    atlasDataUrl: "/solid-demo-app/183/fonts/Roboto-Regular.msdf.json",
                    atlasUrl: "/solid-demo-app/183/fonts/Roboto-Regular.msdf.png",
                    metrics: {
                        ascender: 1e3,
                        descender: 100,
                        lineGap: 0,
                        unitsPerEm: 1e3
                    }
                }, {
                    type: "msdf",
                    fontFamily: "Roboto700",
                    atlasDataUrl: "/solid-demo-app/183/fonts/Roboto-Bold.msdf.json",
                    atlasUrl: "/solid-demo-app/183/fonts/Roboto-Bold.msdf.png",
                    metrics: {
                        ascender: 1e3,
                        descender: 100,
                        lineGap: 0,
                        unitsPerEm: 1e3
                    }
                }, {
                    type: "msdf",
                    fontFamily: "Arial",
                    atlasDataUrl: "/solid-demo-app/183/fonts/Roboto-Regular.msdf.json",
                    atlasUrl: "/solid-demo-app/183/fonts/Roboto-Regular.msdf.png"
                }, {
                    type: "msdf",
                    fontFamily: "Raleway",
                    atlasDataUrl: "/solid-demo-app/183/fonts/Raleway-ExtraBold.msdf.json",
                    atlasUrl: "/solid-demo-app/183/fonts/Raleway-ExtraBold.msdf.png"
                }, {
                    fontFamily: "Roboto",
                    fontUrl: "/solid-demo-app/183/fonts/Roboto-Regular.ttf"
                }, {
                    fontFamily: "Roboto700",
                    fontUrl: "/solid-demo-app/183/fonts/Roboto-Bold.ttf"
                } ], cache = new Map, NavDrawer_styles_default = {
                    Column: {
                        flexDirection: "column",
                        display: "flex",
                        width: 140,
                        height: 600,
                        y: 300,
                        gap: 20,
                        zIndex: 101,
                        transition: {
                            x: {
                                duration: 250,
                                easing: "ease-in-out"
                            }
                        },
                        x: 24,
                        $focus: {
                            width: 500
                        }
                    },
                    Gradient: {
                        zIndex: 99,
                        color: 255,
                        src: "./assets/sidenav.png",
                        alpha: 0,
                        width: 200,
                        height: 1080,
                        $focus: {
                            alpha: 1,
                            width: 1600
                        },
                        transition: {
                            alpha: !0,
                            width: !0
                        }
                    },
                    NavButton: {
                        zIndex: 102,
                        height: 70,
                        width: 100,
                        borderRadius: 0,
                        color: 0,
                        $focus: {
                            color: theme_default.primaryLight,
                            borderRadius: 8
                        },
                        $active: {
                            width: 328
                        }
                    }
                }, NavButtonTextStyles = {
                    x: 112,
                    fontSize: 38,
                    lineHeight: 70,
                    alpha: 0,
                    color: theme_default.textPrimary,
                    $active: {
                        alpha: 1
                    }
                }, LeftNavWrapper = function(props) {
                    var navDrawer, lastFocused, navigate = useNavigate(), announcer = useAnnouncer();
                    function focusNavDrawer() {
                        return !navDrawer.states.has("focus") && (lastFocused = activeElement(), navDrawer.setFocus());
                    }
                    announcer.debug = !0, announcer.enabled = !1, setupFPS({
                        renderer: renderer
                    });
                    var _createSignal26 = _slicedToArray(createSignal(!0), 2), showWidgets = _createSignal26[0], setShowWidgets = _createSignal26[1], location = useLocation(), showOnPaths = [ "/browse", "/entity" ];
                    createEffect(function() {
                        var currentPath = location.pathname, matchesPartial = showOnPaths.some(function(path) {
                            return currentPath.startsWith(path);
                        });
                        "/" === currentPath && (matchesPartial = !0), setShowWidgets(matchesPartial);
                    });
                    var _createSignal28 = _slicedToArray(createSignal("Last key: undefined"), 2), lastKey = _createSignal28[0], setLastKey = _createSignal28[1], _createSignal30 = _slicedToArray(createSignal(), 2), lastError = _createSignal30[0], setLastError = _createSignal30[1], keyPressHandler = function(e) {
                        setLastKey("Last key: ".concat(e.key, ", Code: ").concat(e.keyCode));
                    };
                    document.addEventListener("keydown", keyPressHandler);
                    var displayError = function(e) {
                        setLastError(function(p) {
                            return (p || "") + "\n" + e.message;
                        });
                    };
                    document.addEventListener("onerror", displayError);
                    var pageContainer, windowSize = "".concat(window.innerWidth, "x").concat(window.innerHeight);
                    return onCleanup(function() {
                        document.removeEventListener("onerror", displayError), document.removeEventListener("keydown", keyPressHandler);
                    }), function() {
                        var _el$ = createElement("view"), _el$2 = createElement("view"), _el$3 = createElement("text"), _el$4 = createTextNode("Window Size: "), _el$5 = createElement("text"), _el$6 = createElement("text"), _el$7 = createElement("view");
                        insertNode(_el$, _el$2), insertNode(_el$, _el$6), insertNode(_el$, _el$7);
                        var _ref$ = window.APP;
                        "function" == typeof _ref$ ? use(_ref$, _el$) : window.APP = _el$, setProp(_el$, "onAnnouncer", function() {
                            return announcer.enabled = !announcer.enabled, !0;
                        }), setProp(_el$, "onLast", function() {
                            return history.back(), !0;
                        }), setProp(_el$, "onMenu", function() {
                            return navigate("/"), !0;
                        }), setProp(_el$, "onBack", function() {
                            return navDrawer.states.has("focus") ? navigate(-1) : focusNavDrawer(), !0;
                        }), setProp(_el$, "style", {
                            width: 1920,
                            height: 1080
                        }), setProp(_el$, "onLeft", function() {
                            return focusNavDrawer(), !0;
                        }), setProp(_el$, "onRight", function() {
                            if (navDrawer.states.has("focus")) return (lastFocused || pageContainer).setFocus(), 
                            !0;
                        }), insert(_el$, createComponent(Background, {}), _el$2), insert(_el$, createComponent(Show, {
                            get when() {
                                return !location.pathname.startsWith("/benchmark");
                            },
                            get children() {
                                return createComponent(FPSCounter, {
                                    mountX: 1,
                                    x: 1910,
                                    y: 10,
                                    alpha: 1
                                });
                            }
                        }), _el$2), insertNode(_el$2, _el$3), insertNode(_el$2, _el$5), setProp(_el$2, "mountX", 1), 
                        setProp(_el$2, "display", "flex"), setProp(_el$2, "flexDirection", "column"), setProp(_el$2, "width", 330), 
                        setProp(_el$2, "height", 50), setProp(_el$2, "x", 1910), setProp(_el$2, "y", 212), 
                        setProp(_el$2, "color", 255), insertNode(_el$3, _el$4), setProp(_el$3, "x", 8), 
                        setProp(_el$3, "fontSize", 15), insert(_el$3, windowSize, null), setProp(_el$5, "x", 8), 
                        setProp(_el$5, "fontSize", 15), insert(_el$5, lastKey), setProp(_el$6, "x", 270), 
                        setProp(_el$6, "y", 20), setProp(_el$6, "fontSize", 24), setProp(_el$6, "contain", "width"), 
                        setProp(_el$6, "width", 800), insert(_el$6, lastError), insert(_el$, createComponent(NavDrawer, {
                            ref: function(r$) {
                                "function" == typeof navDrawer ? navDrawer(r$) : navDrawer = r$;
                            },
                            focusPage: function() {
                                return lastFocused.setFocus();
                            },
                            get showWidgets() {
                                return showWidgets();
                            }
                        }), _el$7);
                        return "function" == typeof pageContainer ? use(pageContainer, _el$7) : pageContainer = _el$7, 
                        setProp(_el$7, "id", "pageContainer"), setProp(_el$7, "forwardFocus", 0), insert(_el$7, function() {
                            return props.children;
                        }), effect(function(_$p) {
                            return setProp(_el$2, "hidden", !showWidgets(), _$p);
                        }), _el$;
                    }();
                }, __vitePreload = function(baseModule, deps, importerUrl) {
                    var promise = Promise.resolve();
                    function handlePreloadError(err) {
                        var e = new Event("vite:preloadError", {
                            cancelable: !0
                        });
                        if (e.payload = err, window.dispatchEvent(e), !e.defaultPrevented) throw err;
                    }
                    return promise.then(function(res) {
                        var _step7, _iterator7 = _createForOfIteratorHelper(res || []);
                        try {
                            for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
                                var item = _step7.value;
                                "rejected" === item.status && handlePreloadError(item.reason);
                            }
                        } catch (err) {
                            _iterator7.e(err);
                        } finally {
                            _iterator7.f();
                        }
                        return baseModule().catch(handlePreloadError);
                    });
                }, originalGetOwnPropertyNames = Object.getOwnPropertyNames, Object.getOwnPropertyNames = function(obj) {
                    var names = originalGetOwnPropertyNames(obj);
                    return !obj || "function" != typeof obj && "[object Arguments]" !== Object.prototype.toString.call(obj) ? names : names.filter(function(name) {
                        return "caller" !== name && "callee" !== name && "arguments" !== name;
                    });
                }, window.bundleType = "LEGACY (nomodule)", console.log("[bundle] Loaded ".concat(window.bundleType, " build")), 
                Player = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Player-legacy-B6dtzVip.js");
                    }, void 0);
                }), Grid = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Grid-legacy-CpWL1AvQ.js");
                    }, void 0);
                }), Loops = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Loops-legacy-C9vIHq97.js");
                    }, void 0);
                }), Infinite = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Infinite-legacy-CDpzQUl3.js");
                    }, void 0);
                }), TMDBGrid = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./TMDBGrid-legacy-CVlFWS2j.js");
                    }, void 0);
                }), Portal = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Portal-legacy-yX32oVxk.js");
                    }, void 0);
                }), MatrixPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Matrix-legacy-BswDDmSm.js");
                    }, void 0);
                }), TextPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Text-legacy-BFx4-41t.js");
                    }, void 0);
                }), TextPosterPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./TextPoster-legacy-qr3Txbor.js");
                    }, void 0);
                }), CreatePage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Create-legacy-2qBI1bwt.js");
                    }, void 0);
                }), ViewportPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Viewport-legacy-CHvJYhFe.js");
                    }, void 0);
                }), PositioningPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Positioning-legacy-Ci3NXE7g.js");
                    }, void 0);
                }), LayoutPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Layout-legacy-Bq5qVvTB.js");
                    }, void 0);
                }), FocusBasicsPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./FocusBasics-legacy-Dn8xxMM5.js");
                    }, void 0);
                }), KeyHandlingPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./KeyHandling-legacy-BMZQhTaP.js");
                    }, void 0);
                }), TransitionsPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Transitions-legacy-CCi_FYoe.js");
                    }, void 0);
                }), ComponentsPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Components-legacy-Dub3ycYG.js");
                    }, void 0);
                }), FocusHandlingPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./FocusHandling-legacy-BNp1waxO.js");
                    }, void 0);
                }), GradientsPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Gradients-legacy-CzS-Clux.js");
                    }, void 0);
                }), FlexPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Flex-legacy-D0-TVXpC.js");
                    }, void 0);
                }), FlexGrowPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./FlexGrow-legacy-DVdtKSnI.js");
                    }, void 0);
                }), FlexMenuPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./FlexMenu-legacy-BA7Lpd1v.js");
                    }, void 0);
                }), FlexSizePage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./FlexSize-legacy-isNfm_iH.js");
                    }, void 0);
                }), FlexColumnSizePage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./FlexColumnSize-legacy-D62zqhvR.js");
                    }, void 0);
                }), FlexColumnPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./FlexColumn-legacy-VL5kj_Mv.js");
                    }, void 0);
                }), ButtonsMaterialPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./ButtonsMaterial-legacy-BwuTjOk5.js");
                    }, void 0);
                }), SuperFlexPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./SuperFlex-legacy-CTSRM4Eq.js");
                    }, void 0);
                }), Entity = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Entity-legacy-ewoPrk0b.js");
                    }, void 0);
                }), People = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./People-legacy-r13iQ2Fs.js");
                    }, void 0);
                }), FireboltPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Firebolt-legacy-BIL90XU4.js");
                    }, void 0);
                }), LoginPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Login-legacy-D-UVS7Su.js");
                    }, void 0);
                }), VirtualPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Virtual-legacy-Dbtcxi3M.js");
                    }, void 0);
                }), TagsPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Tags-legacy-DXUq88PQ.js");
                    }, void 0);
                }), ImagePerformance = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./ImagePerformance-legacy-BjFHcFdu.js");
                    }, void 0);
                }), LargeImagePerformance = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./LargeImagePerformance-legacy-YgkEeLK7.js");
                    }, void 0);
                }), MixedImagePerformance = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./MixedImagePerformance-legacy-LYw32QJY.js");
                    }, void 0);
                }), TextureCompressionPerformance = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./TextureCompressionPerformance-legacy-gT5sUKRR.js");
                    }, void 0);
                }), ComplexFlexPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./ComplexFlex-legacy-CxzT2MK8.js");
                    }, void 0);
                }), ComplexFlexCapsPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./ComplexFlexCaps-legacy-Dt_clrta.js");
                    }, void 0);
                }), BenchmarkPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Benchmark-legacy-BNzDk81W.js");
                    }, void 0);
                }), RendererVersionsPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./RendererVersions-legacy-B8ZIKiP2.js");
                    }, void 0);
                }), TextCenteringPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./TextCentering-legacy-C1w1qD54.js");
                    }, void 0);
                }), CountdownTimerPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./CountdownTimer-legacy-CQbu84nY.js");
                    }, void 0);
                }), CustomButtonsPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./CustomButtons-legacy-BfZllpQa.js");
                    }, void 0);
                }), numImageWorkers = "undefined" != typeof window && window.createImageBitmap ? 1 : 0, 
                urlParams = new URLSearchParams(window.location.search), numWorkers = urlParams.get("numImageWorkers"), 
                screenSize = urlParams.get("size") || "default", rendererMode = urlParams.get("mode") || "webgl", 
                animationsEnabled = urlParams.get("animate") || "true", enableContextSpy = "true" === urlParams.get("contextSpy"), 
                forceWebGL2 = "true" === urlParams.get("webgl2"), textBaseline = urlParams.get("textBaseline"), 
                numWorkers && (numImageWorkers = parseInt(numWorkers)), logicalDPR = window.innerHeight / 1080, 
                devicePixelRatio = window.devicePixelRatio || 1, physicalDPR = null !== (_low$medium$high$xhig = {
                    low: .666667,
                    medium: .8,
                    high: 1,
                    xhigh: 1.5,
                    ultra: 2,
                    default: logicalDPR >= 1 ? 1 : devicePixelRatio
                }[screenSize]) && void 0 !== _low$medium$high$xhig ? _low$medium$high$xhig : 1, 
                Config.debug = !1, Config.animationsEnabled = "true" === animationsEnabled, Config.fontSettings.fontFamily = "Roboto", 
                Config.fontSettings.color = theme_default.textPrimary, Config.fontSettings.fontSize = 32, 
                Config.domRendererEnabled = !1, Config.focusHistoryDebug = 5, textureProcessingTimeLimitParam = urlParams.get("textureProcessingTimeLimit"), 
                Config.rendererOptions = {
                    fpsUpdateInterval: 300,
                    inspector: void 0,
                    textureMemory: {
                        criticalThreshold: 2e8,
                        targetThresholdLevel: .8
                    },
                    textureProcessingTimeLimit: textureProcessingTimeLimitParam ? parseFloat(textureProcessingTimeLimitParam) : void 0,
                    numImageWorkers: numImageWorkers,
                    imageDecodeConcurrency: "undefined" != typeof window && window.createImageBitmap ? 4 : 2,
                    deviceLogicalPixelRatio: logicalDPR,
                    devicePhysicalPixelRatio: physicalDPR,
                    createImageBitmapSupport: "auto",
                    boundsMargin: 475,
                    targetFPS: 0,
                    enableClear: !0,
                    enableContextSpy: enableContextSpy,
                    forceWebGL2: forceWebGL2
                }, textBaseline && (Config.rendererOptions.textBaselineMode = textBaseline), "canvas" === rendererMode ? (Config.rendererOptions.fontEngines = [ CanvasTextRenderer ], 
                Config.rendererOptions.renderEngine = CanvasRenderer) : (Config.rendererOptions.fontEngines = [ SdfTextRenderer ], 
                Config.rendererOptions.renderEngine = WebGlRenderer), requestAnimationFrame(function() {
                    setTimeout(function() {
                        var _createRenderer = createRenderer(), renderer = _createRenderer.renderer, render = _createRenderer.render, idleFired = !1;
                        renderer.on("idle", function() {
                            if (!idleFired) {
                                idleFired = !0;
                                var splash = document.getElementById("splash");
                                splash && (splash.classList.add("fade-out"), setTimeout(function() {
                                    splash.remove();
                                }, 500));
                            }
                        }), loadFonts(fonts_default);
                        var shManager = renderer.stage.shManager;
                        shManager.registerShaderType("rounded", Rounded), shManager.registerShaderType("roundedWithBorder", RoundedWithBorder), 
                        shManager.registerShaderType("roundedWithShadow", RoundedWithShadow), shManager.registerShaderType("roundedWithBorderWithShadow", RoundedWithBorderAndShadow), 
                        shManager.registerShaderType("radialGradient", RadialGradient), shManager.registerShaderType("linearGradient", LinearGradient), 
                        shManager.registerShaderType("holePunch", HolePunch), shManager.registerShaderType("radialProgress", RadialProgress), 
                        render(function() {
                            return createComponent(FocusStackProvider, {
                                get children() {
                                    return createComponent(HashRouter, {
                                        root: function(props) {
                                            return createComponent(App, props);
                                        },
                                        get children() {
                                            return [ createComponent(Route, {
                                                path: "",
                                                component: LeftNavWrapper,
                                                get children() {
                                                    return [ createComponent(Route, {
                                                        path: "",
                                                        component: function() {
                                                            return createComponent(Navigate, {
                                                                href: "/browse/all"
                                                            });
                                                        }
                                                    }), createComponent(Route, {
                                                        path: "examples",
                                                        component: Portal,
                                                        get children() {
                                                            return [ createComponent(Route, {
                                                                path: "/"
                                                            }), createComponent(Route, {
                                                                path: "tmdb",
                                                                component: TMDB,
                                                                preload: tmdbData
                                                            }) ];
                                                        }
                                                    }), createComponent(KeepAliveRoute, {
                                                        id: "browse",
                                                        path: "browse/:filter",
                                                        component: Browse,
                                                        preload: browsePreload
                                                    }), createComponent(Route, {
                                                        path: "loops",
                                                        component: Loops,
                                                        preload: tmdbData
                                                    }), createComponent(Route, {
                                                        path: "infinite",
                                                        component: Infinite,
                                                        preload: tmdbData
                                                    }), createComponent(Route, {
                                                        path: "tmdbgrid",
                                                        component: TMDBGrid,
                                                        preload: tmdbData
                                                    }), createComponent(Route, {
                                                        path: "virtual",
                                                        component: VirtualPage,
                                                        preload: tmdbData
                                                    }), createComponent(Route, {
                                                        path: "destroy",
                                                        component: Destroy,
                                                        preload: destroyData
                                                    }), createComponent(Route, {
                                                        path: "grid",
                                                        component: Grid
                                                    }), createComponent(Route, {
                                                        path: "matrix",
                                                        component: MatrixPage
                                                    }), createComponent(Route, {
                                                        path: "text",
                                                        component: TextPage
                                                    }), createComponent(Route, {
                                                        path: "firebolt",
                                                        component: FireboltPage
                                                    }), createComponent(Route, {
                                                        path: "login",
                                                        component: LoginPage
                                                    }), createComponent(Route, {
                                                        path: "nested",
                                                        get component() {
                                                            return lazy(function() {
                                                                return __vitePreload(function() {
                                                                    return _context.import("./Nested-legacy-D5XrkrrK.js");
                                                                }, void 0);
                                                            });
                                                        }
                                                    }), createComponent(Route, {
                                                        path: "textposter",
                                                        component: TextPosterPage
                                                    }), createComponent(Route, {
                                                        path: "textcentering",
                                                        component: TextCenteringPage
                                                    }), createComponent(Route, {
                                                        path: "countdown",
                                                        component: CountdownTimerPage
                                                    }), createComponent(Route, {
                                                        path: "custombuttons",
                                                        component: CustomButtonsPage
                                                    }), createComponent(Route, {
                                                        path: "positioning",
                                                        component: PositioningPage
                                                    }), createComponent(Route, {
                                                        path: "layout",
                                                        component: LayoutPage
                                                    }), createComponent(Route, {
                                                        path: "focusbasics",
                                                        component: FocusBasicsPage
                                                    }), createComponent(Route, {
                                                        path: "transitions",
                                                        component: TransitionsPage
                                                    }), createComponent(Route, {
                                                        path: "components",
                                                        component: ComponentsPage
                                                    }), createComponent(Route, {
                                                        path: "focushandling",
                                                        component: FocusHandlingPage
                                                    }), createComponent(Route, {
                                                        path: "keyhandling",
                                                        component: KeyHandlingPage
                                                    }), createComponent(Route, {
                                                        path: "gradients",
                                                        component: GradientsPage
                                                    }), createComponent(Route, {
                                                        path: "flex",
                                                        component: FlexPage
                                                    }), createComponent(Route, {
                                                        path: "create",
                                                        component: CreatePage
                                                    }), createComponent(Route, {
                                                        path: "viewport",
                                                        component: ViewportPage
                                                    }), createComponent(Route, {
                                                        path: "flexsize",
                                                        component: FlexSizePage
                                                    }), createComponent(Route, {
                                                        path: "flexmenu",
                                                        component: FlexMenuPage
                                                    }), createComponent(Route, {
                                                        path: "flexcolumnsize",
                                                        component: FlexColumnSizePage
                                                    }), createComponent(Route, {
                                                        path: "flexcolumn",
                                                        component: FlexColumnPage
                                                    }), createComponent(Route, {
                                                        path: "flexgrow",
                                                        component: FlexGrowPage
                                                    }), createComponent(Route, {
                                                        path: "keepalive",
                                                        get component() {
                                                            return lazy(function() {
                                                                return __vitePreload(function() {
                                                                    return _context.import("./KeepAlive-legacy-BHZYHA34.js");
                                                                }, void 0);
                                                            });
                                                        }
                                                    }), createComponent(Route, {
                                                        path: "suspense",
                                                        get component() {
                                                            return lazy(function() {
                                                                return __vitePreload(function() {
                                                                    return _context.import("./suspense-legacy-CQs3TNX6.js");
                                                                }, void 0);
                                                            });
                                                        }
                                                    }), createComponent(Route, {
                                                        path: "superflex",
                                                        component: SuperFlexPage
                                                    }), createComponent(Route, {
                                                        path: "tags",
                                                        component: TagsPage
                                                    }), createComponent(Route, {
                                                        path: "buttonsmaterial",
                                                        component: ButtonsMaterialPage
                                                    }), createComponent(Route, {
                                                        path: "entity/people/:id",
                                                        component: People
                                                    }), createComponent(Route, {
                                                        path: "entity/:type/:id",
                                                        component: Entity,
                                                        preload: entityPreload
                                                    }), createComponent(Route, {
                                                        path: "image-performance",
                                                        component: ImagePerformance
                                                    }), createComponent(Route, {
                                                        path: "large-image-performance",
                                                        component: LargeImagePerformance
                                                    }), createComponent(Route, {
                                                        path: "mixed-image-performance",
                                                        component: MixedImagePerformance
                                                    }), createComponent(Route, {
                                                        path: "texture-compression-performance",
                                                        component: TextureCompressionPerformance
                                                    }), createComponent(Route, {
                                                        path: "complexflex",
                                                        component: ComplexFlexPage
                                                    }), createComponent(Route, {
                                                        path: "complexflexcaps",
                                                        component: ComplexFlexCapsPage
                                                    }), createComponent(Route, {
                                                        path: "benchmark",
                                                        component: BenchmarkPage,
                                                        preload: tmdbData
                                                    }), createComponent(Route, {
                                                        path: "versions",
                                                        component: RendererVersionsPage
                                                    }), createComponent(Route, {
                                                        path: "*all",
                                                        component: NotFound
                                                    }) ];
                                                }
                                            }), createComponent(Route, {
                                                path: "player",
                                                get children() {
                                                    return createComponent(Route, {
                                                        path: ":id",
                                                        component: Player
                                                    });
                                                }
                                            }) ];
                                        }
                                    });
                                }
                            });
                        });
                    }, 0);
                });
            }
        };
    });
}();