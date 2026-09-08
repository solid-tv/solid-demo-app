!function() {
    function _get() {
        return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, t, r) {
            var p = function(t, o) {
                for (;!{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t)); ) ;
                return t;
            }(e, t);
            if (p) {
                var n = Object.getOwnPropertyDescriptor(p, t);
                return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
            }
        }, _get.apply(null, arguments);
    }
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
    System.register([ "./rolldown-runtime-legacy-c5pELP7v.js", "./render-legacy-t4wUAioc.js", "./FPSCounter-legacy-BLjESc_a.js", "./utils-legacy-B35bImB8.js", "./announcer-legacy-C8KbS_0s.js", "./web-legacy-CZsMP84a.js", "./Lazy-legacy-CJM8IInI.js", "./chainFunctions-legacy-iSOIOqjU.js", "./Column-legacy-IFAmq0kZ.js", "./ContentBlock-legacy-CIbTwJhf.js", "./createFocusStack-legacy-DhT0qMPe.js", "./components-legacy-CMcgiR3G.js", "./Icon-legacy-DzZN_vqd.js", "./routing-legacy-N-DqMbax.js", "./theme-legacy-Bdf29FvE.js", "./styles-legacy-ByBLMtKI.js", "./state-legacy-CIkOTHs-.js", "./dist-legacy-CtobM8tC.js", "./api-legacy-BrsqDpuo.js", "./ItemFormatter-legacy-DjkA_he1.js" ], function(_export, _context) {
        var __exportAll, onCleanup, createComputed, hasFocus, UpdateType, isFunction, getNormalizedRgbaComponents, createResource, createEffect, createSignal, createRoot, batch, mergeColorAlpha, Config, TextureType, Show, on, children, renderer, CoreNodeRenderState, compareRect, createMemo, getOwner, getListener, mergeProps$1, use, createElement, untrack, useFocusManager, effect, defaultFontMetrics, memo, CoreShaderNode, onMount, mergeProps, spread, setProp, createComponent, createWebGLContext, activeElement, DIRTY_QUAD_BUFFER, insert, mapTextLayout, runWithOwner, createRenderer, rootNode, sharedConfig, createTextNode, insertNode, normalizeFontMetrics, ElementNode, RenderTexture, isElementNode, calcFactoredRadiusArray, loadFonts, uploadCompressedTexture, focusPath, SubTexture, Default, HolePunchTemplate, WebGlShaderProgram, getShadowProps, RadialGradientTemplate, getBorderProps, setupFPS, LinearGradientTemplate, FPSCounter, RoundedTemplate, combineStyles, clamp, createScheduled, throttle, Announcer, LazyRow, LazyColumn, withScrolling, navigableForwardFocus, navigableHandleNavigation, chainRefs, chainFunctions, Column, ContentBlock, useFocusStack, FocusStackProvider, Hero, TitleRow, Thumbnail, List, AssetPanel, Icon, saveCurrentDepth, createRouterContext, setInPreloadFn, useNavigate, notifyIfNotBlocked, keepDepth, createRouteContext, useLocation, createBeforeLeave, RouterContextObj, getIntent, usePreloadRoute, createBranches, RouteContextObj, useMatch, theme_default, styles_default, setGlobalBackground, globalBackground, debounce, getImageUrl, api_default, convertItemsToTiles, __vite_style__, CoreContextTexture, CoreRenderer, WebGlShaderNode, Rounded, props$2, RoundedWithBorder, props$1, RoundedWithBorderAndShadow, props, RoundedWithShadow, HolePunch, LinearGradient, RadialGradient, RadialProgressTemplate, RadialProgress, invisibleChars, SdfFontHandler_exports, fontCache$1, fontLoadPromises$1, normalizedMetrics$1, nodesWaitingForFont$1, initialized$1, buildKerningTable, buildGlyphMap, processFontData$1, canRenderFont$1, loadFont$1, waitingForFont$1, stopWaitingForFont$1, getFontFamilies$1, init$3, isFontLoaded$1, getFontMetrics$1, processFontMetrics$1, _getAtlas, _getFontData, _getMaxCharHeight, _getLoadedFonts, _unloadFont, measureText$1, SdfRenderOp, TRANSPARENT_TEXTURE_DATA, WebGlCtxTexture, WebGlCtxSubTexture, BufferCollection, WebGlContextWrapper, WebGlCtxRenderTexture, WebGlRenderer, Sdf, sdfShader, maxLayoutCacheSize$1, init$2, getSdfShader, font$1, layoutCache$1, getLayoutCacheKey, renderText$1, renderQuads$1, generateTextLayout, SdfTextRenderer, CanvasFontHandler_exports, fontFamilies, fontLoadPromises, normalizedMetrics, nodesWaitingForFont, fontCache, initialized, measureContext$1, _canRenderFont, processFontData, _loadFont, _getFontFamilies, init$1, type$1, _isFontLoaded, _waitingForFont, _stopWaitingForFont, _getFontMetrics, _processFontMetrics, _measureText, font, canvas, context, measureCanvas, measureContext, layoutCache, maxLayoutCacheSize, renderText, CanvasTextRenderer, WHITE, CanvasTexture, parsedArgbColors, parsedRgbaColors, CanvasShaderNode, CanvasRenderer, doOnce, useAnnouncer, tryOnCleanup, createCallbackStack, PASSIVE, DEFAULT_MOUSE_POSITION, useMousePosition, scrollTimeout, handleScroll, columnScroll, rowStyles, createRouterComponent, createOutlet, Route, SUPPORTS_PROXY, collectDynamicParams, keepAliveElements, keepAliveRouteElements, _storeKeepAlive, storeKeepAliveRoute, createKeepAliveComponent, KeepAliveRouteInternal, keepAliveRouteCache, KeepAliveRoute, App, Browse, TMDB, Destroy, handleResults, fetchPopular, genreListCache, fetchGenreMovies, NotFound, fonts_default, cache, NavDrawer_styles_default, NavButtonTextStyles, LeftNavWrapper, __vitePreload, _low$medium$high$xhig, Player, Grid, Loops, Infinite, TMDBGrid, Portal, MatrixPage, TextPage, TextPosterPage, CreatePage, ViewportPage, PositioningPage, LayoutPage, FocusBasicsPage, KeyHandlingPage, TransitionsPage, ComponentsPage, FocusHandlingPage, GradientsPage, FlexPage, FlexGrowPage, FlexMenuPage, FlexSizePage, FlexColumnSizePage, FlexColumnPage, ButtonsMaterialPage, SuperFlexPage, Entity, People, FireboltPage, LoginPage, VirtualPage, TagsPage, ImagePerformance, LargeImagePerformance, MixedImagePerformance, TextureCompressionPerformance, ComplexFlexPage, ComplexFlexCapsPage, BenchmarkPage, RendererVersionsPage, TextCenteringPage, CountdownTimerPage, CustomButtonsPage, numImageWorkers, urlParams, numWorkers, screenSize, rendererMode, animationsEnabled, enableContextSpy, forceWebGL2, textBaseline, logicalDPR, devicePixelRatio, physicalDPR, textureProcessingTimeLimitParam;
        function hasZeroWidthSpace(space) {
            return !0 === invisibleChars.test(space);
        }
        function isHTMLImageElement(obj) {
            return null !== obj && ("object" === _typeof(obj) && obj.constructor && "HTMLImageElement" === obj.constructor.name || "undefined" != typeof HTMLImageElement && obj instanceof HTMLImageElement);
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
            }, props.ref)) && use(_ref$, _el$), spread(_el$, mergeProps(props, {
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
            return _el$ = createElement("view"), spread(_el$, mergeProps(props, {
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
            insertNode(_el$, _el$2), insertNode(_el$, _el$3), spread(_el$, mergeProps(props, {
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
            }), _el$4), createComponent(Column, mergeProps(props, {
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
                onCleanup = _renderLegacy002Js.$, _renderLegacy002Js.At, createComputed = _renderLegacy002Js.B, 
                hasFocus = _renderLegacy002Js.C, UpdateType = _renderLegacy002Js.Ct, isFunction = _renderLegacy002Js.E, 
                getNormalizedRgbaComponents = _renderLegacy002Js.Et, createResource = _renderLegacy002Js.G, 
                createEffect = _renderLegacy002Js.H, createSignal = _renderLegacy002Js.J, createRoot = _renderLegacy002Js.K, 
                batch = _renderLegacy002Js.L, mergeColorAlpha = _renderLegacy002Js.Mt, Config = _renderLegacy002Js.O, 
                TextureType = _renderLegacy002Js.Ot, Show = _renderLegacy002Js.P, on = _renderLegacy002Js.Q, 
                children = _renderLegacy002Js.R, renderer = _renderLegacy002Js.S, CoreNodeRenderState = _renderLegacy002Js.St, 
                compareRect = _renderLegacy002Js.Tt, createMemo = _renderLegacy002Js.U, getOwner = _renderLegacy002Js.X, 
                getListener = _renderLegacy002Js.Y, mergeProps$1 = _renderLegacy002Js.Z, use = _renderLegacy002Js._, 
                createElement = _renderLegacy002Js.a, untrack = _renderLegacy002Js.at, useFocusManager = _renderLegacy002Js.b, 
                effect = _renderLegacy002Js.c, defaultFontMetrics = _renderLegacy002Js.ct, memo = _renderLegacy002Js.d, 
                CoreShaderNode = _renderLegacy002Js.dt, onMount = _renderLegacy002Js.et, mergeProps = _renderLegacy002Js.f, 
                spread = _renderLegacy002Js.g, setProp = _renderLegacy002Js.h, createComponent = _renderLegacy002Js.i, 
                createWebGLContext = _renderLegacy002Js.jt, activeElement = _renderLegacy002Js.k, 
                DIRTY_QUAD_BUFFER = _renderLegacy002Js.kt, insert = _renderLegacy002Js.l, mapTextLayout = _renderLegacy002Js.lt, 
                runWithOwner = _renderLegacy002Js.nt, createRenderer = _renderLegacy002Js.o, rootNode = _renderLegacy002Js.p, 
                sharedConfig = _renderLegacy002Js.rt, createTextNode = _renderLegacy002Js.s, insertNode = _renderLegacy002Js.u, 
                normalizeFontMetrics = _renderLegacy002Js.ut, ElementNode = _renderLegacy002Js.v, 
                RenderTexture = _renderLegacy002Js.vt, isElementNode = _renderLegacy002Js.w, calcFactoredRadiusArray = _renderLegacy002Js.wt, 
                loadFonts = _renderLegacy002Js.x, uploadCompressedTexture = _renderLegacy002Js.xt, 
                focusPath = _renderLegacy002Js.y, SubTexture = _renderLegacy002Js.yt;
            }, function(_FPSCounterLegacy003Js) {
                Default = _FPSCounterLegacy003Js.a, HolePunchTemplate = _FPSCounterLegacy003Js.d, 
                WebGlShaderProgram = _FPSCounterLegacy003Js.i, getShadowProps = _FPSCounterLegacy003Js.l, 
                RadialGradientTemplate = _FPSCounterLegacy003Js.o, getBorderProps = _FPSCounterLegacy003Js.p, 
                setupFPS = _FPSCounterLegacy003Js.r, LinearGradientTemplate = _FPSCounterLegacy003Js.s, 
                FPSCounter = _FPSCounterLegacy003Js.t, RoundedTemplate = _FPSCounterLegacy003Js.u;
            }, function(_utilsLegacy004Js) {
                combineStyles = _utilsLegacy004Js.n, clamp = _utilsLegacy004Js.t;
            }, function(_announcerLegacy005Js) {
                createScheduled = _announcerLegacy005Js.n, throttle = _announcerLegacy005Js.r, Announcer = _announcerLegacy005Js.t;
            }, function(_webLegacy006Js) {
                _webLegacy006Js.t;
            }, function(_LazyLegacy007Js) {
                LazyRow = _LazyLegacy007Js.n, LazyColumn = _LazyLegacy007Js.t;
            }, function(_chainFunctionsLegacy008Js) {
                withScrolling = _chainFunctionsLegacy008Js.a, navigableForwardFocus = _chainFunctionsLegacy008Js.d, 
                navigableHandleNavigation = _chainFunctionsLegacy008Js.f, chainRefs = _chainFunctionsLegacy008Js.n, 
                chainFunctions = _chainFunctionsLegacy008Js.t;
            }, function(_ColumnLegacy009Js) {
                Column = _ColumnLegacy009Js.t;
            }, function(_ContentBlockLegacy00bJs) {
                ContentBlock = _ContentBlockLegacy00bJs.t;
            }, function(_createFocusStackLegacy00cJs) {
                useFocusStack = _createFocusStackLegacy00cJs.n, FocusStackProvider = _createFocusStackLegacy00cJs.t;
            }, function(_componentsLegacy00dJs) {
                Hero = _componentsLegacy00dJs.a, TitleRow = _componentsLegacy00dJs.d, Thumbnail = _componentsLegacy00dJs.l, 
                List = _componentsLegacy00dJs.p, AssetPanel = _componentsLegacy00dJs.t;
            }, function(_IconLegacy00eJs) {
                Icon = _IconLegacy00eJs.t;
            }, function(_routingLegacy00fJs) {
                saveCurrentDepth = _routingLegacy00fJs._, createRouterContext = _routingLegacy00fJs.a, 
                setInPreloadFn = _routingLegacy00fJs.c, useNavigate = _routingLegacy00fJs.d, notifyIfNotBlocked = _routingLegacy00fJs.g, 
                keepDepth = _routingLegacy00fJs.h, createRouteContext = _routingLegacy00fJs.i, useLocation = _routingLegacy00fJs.l, 
                createBeforeLeave = _routingLegacy00fJs.m, RouterContextObj = _routingLegacy00fJs.n, 
                getIntent = _routingLegacy00fJs.o, usePreloadRoute = _routingLegacy00fJs.p, createBranches = _routingLegacy00fJs.r, 
                _routingLegacy00fJs.s, RouteContextObj = _routingLegacy00fJs.t, useMatch = _routingLegacy00fJs.u;
            }, function(_themeLegacy00gJs) {
                theme_default = _themeLegacy00gJs.t;
            }, function(_stylesLegacy00hJs) {
                styles_default = _stylesLegacy00hJs.r;
            }, function(_stateLegacy00iJs) {
                setGlobalBackground = _stateLegacy00iJs.n, globalBackground = _stateLegacy00iJs.t;
            }, function(_distLegacy00jJs) {
                debounce = _distLegacy00jJs.t;
            }, function(_apiLegacy00kJs) {
                getImageUrl = _apiLegacy00kJs.n, api_default = _apiLegacy00kJs.t;
            }, function(_ItemFormatterLegacy00lJs) {
                convertItemsToTiles = _ItemFormatterLegacy00lJs.t;
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
                    this.rttNodes = [], this.options = options, this.stage = options.stage;
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
                    vertex: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    attribute vec2 a_position;\n    attribute vec2 a_textureCoords;\n    attribute vec4 a_color;\n    attribute vec2 a_nodeCoords;\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n    uniform vec2 u_dimensions;\n\n    uniform vec4 u_radius;\n    uniform vec4 u_borderWidth;\n    uniform float u_borderGap;\n    uniform float u_borderAlign;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n    varying vec2 v_nodeCoords;\n\n    varying vec2 v_innerSize;\n    varying vec2 v_outerSize;\n    varying vec2 v_outerBorderUv;\n    varying vec2 v_innerBorderUv;\n    varying vec4 v_innerBorderRadius;\n    varying vec4 v_outerBorderRadius;\n    varying vec2 v_halfDimensions;\n\n    void main() {\n      vec2 vertexPos = a_position * u_pixelRatio;\n      vec2 screenSpace = vec2(2.0 / u_resolution.x, -2.0 / u_resolution.y);\n      vec2 edge = clamp(a_nodeCoords * 2.0 - vec2(1.0), -1.0, 1.0);\n      vec2 edgeOffset = vec2(0.0);\n      float borderZero = 1.0 - step(0.001, dot(abs(u_borderWidth), vec4(1.0)));\n\n      v_innerSize = vec2(0.0);\n      v_outerSize = vec2(0.0);\n\n      if(borderZero == 0.0) {\n        vec4 adjustedBorderWidth = u_borderWidth - 1.0 + clamp(u_borderWidth, -1.0, 1.0);\n\n        float borderTop = adjustedBorderWidth.x;\n        float borderRight = adjustedBorderWidth.y;\n        float borderBottom = adjustedBorderWidth.z;\n        float borderLeft = adjustedBorderWidth.w;\n\n        v_outerBorderUv = vec2(0.0);\n        v_innerBorderUv = vec2(0.0);\n\n        vec2 borderSize = vec2(borderRight + borderLeft, borderTop + borderBottom);\n        vec2 extraSize = borderSize * u_borderAlign;\n        float gapLeft = step(0.001, borderLeft) * u_borderGap;\n        float gapRight = step(0.001, borderRight) * u_borderGap;\n        float gapTop = step(0.001, borderTop) * u_borderGap;\n        float gapBottom = step(0.001, borderBottom) * u_borderGap;\n        vec2 gapSize = vec2(gapLeft + gapRight, gapTop + gapBottom);\n\n        v_outerSize = (u_dimensions + gapSize + extraSize) * 0.5;\n        v_innerSize = v_outerSize - borderSize * 0.5;\n\n        // Use sign() to avoid branching\n        vec2 borderDiff = vec2(borderRight - borderLeft, borderBottom - borderTop);\n        vec2 signDiff = sign(borderDiff);\n        borderDiff = abs(borderDiff);\n\n        vec2 gapDiff = vec2(gapRight - gapLeft, gapBottom - gapTop);\n        vec2 signGapDiff = sign(gapDiff);\n        gapDiff = abs(gapDiff);\n\n        v_outerBorderUv = -signDiff * borderDiff * u_borderAlign * 0.5 - signGapDiff * gapDiff * 0.5;\n        v_innerBorderUv = v_outerBorderUv + signDiff * borderDiff * 0.5;\n\n        v_outerBorderRadius = vec4(\n          max(0.0, u_radius.x + max(borderTop * u_borderAlign + u_borderGap, borderLeft * u_borderAlign + u_borderGap)),\n          max(0.0, u_radius.y + max(borderTop * u_borderAlign + u_borderGap, borderRight * u_borderAlign + u_borderGap)),\n          max(0.0, u_radius.z + max(borderBottom * u_borderAlign + u_borderGap, borderRight * u_borderAlign + u_borderGap)),\n          max(0.0, u_radius.w + max(borderBottom * u_borderAlign + u_borderGap, borderLeft * u_borderAlign + u_borderGap))\n        );\n\n        v_innerBorderRadius = vec4(\n          max(0.0, v_outerBorderRadius.x - max(borderTop, borderLeft)),\n          max(0.0, v_outerBorderRadius.y - max(borderTop, borderRight)),\n          max(0.0, v_outerBorderRadius.z - max(borderBottom, borderRight)),\n          max(0.0, v_outerBorderRadius.w - max(borderBottom, borderLeft))\n        );\n\n        vec2 edgeOffsetExtra = step(u_dimensions * 0.5, v_outerSize) * edge * (extraSize + u_borderGap);\n        edgeOffset = edgeOffsetExtra;\n\n        vertexPos = (a_position + edge + edgeOffset) * u_pixelRatio;\n      }\n\n      gl_Position = vec4(vertexPos.x * screenSpace.x - 1.0, -sign(screenSpace.y) * (vertexPos.y * -abs(screenSpace.y)) + 1.0, 0.0, 1.0);\n\n      v_color = a_color;\n      v_nodeCoords = a_nodeCoords + (screenSpace + edgeOffset) / (u_dimensions);\n      v_textureCoords = a_textureCoords + (screenSpace + edgeOffset) / (u_dimensions);\n\n      v_halfDimensions = u_dimensions * 0.5;\n    }\n  ",
                    fragment: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n    uniform float u_alpha;\n    uniform vec2 u_dimensions;\n    uniform sampler2D u_texture;\n\n    uniform vec4 u_radius;\n    uniform vec4 u_borderWidth;\n    uniform vec4 u_borderColor;\n    uniform vec4 u_fillColor;\n    uniform float u_borderGap;\n    uniform float u_borderAlign;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n    varying vec2 v_nodeCoords;\n\n    varying vec2 v_innerSize;\n    varying vec2 v_outerSize;\n    varying vec2 v_outerBorderUv;\n    varying vec2 v_innerBorderUv;\n    varying vec4 v_innerBorderRadius;\n    varying vec4 v_outerBorderRadius;\n    varying vec2 v_halfDimensions;\n\n    float roundedBox(vec2 p, vec2 s, vec4 r) {\n      r.xy = (p.x > 0.0) ? r.yz : r.xw;\n      r.x = (p.y > 0.0) ? r.y : r.x;\n      vec2 q = abs(p) - s + r.x;\n      return (min(max(q.x, q.y), 0.0) + length(max(q, 0.0))) - r.x;\n    }\n\n    void main() {\n      vec4 color = texture2D(u_texture, v_textureCoords) * v_color;\n      vec4 resultColor = vec4(0.0);\n      vec2 boxUv = v_nodeCoords.xy * u_dimensions - v_halfDimensions;\n      float borderZero = 1.0 - step(0.001, dot(abs(u_borderWidth), vec4(1.0)));\n      float edgeWidth = 1.0 / u_pixelRatio;\n\n      float nodeDist;\n      float nodeAlpha;\n\n      if(borderZero == 1.0) {\n        nodeDist = roundedBox(boxUv, v_halfDimensions - edgeWidth, u_radius);\n        nodeAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, nodeDist);\n        gl_FragColor = (color * nodeAlpha) * u_alpha;\n        return;\n      }\n\n      float outerDist = roundedBox(boxUv + v_outerBorderUv, v_outerSize - edgeWidth, v_outerBorderRadius);\n      float innerDist = roundedBox(boxUv + v_innerBorderUv, v_innerSize - edgeWidth, v_innerBorderRadius);\n\n      if(u_borderGap == 0.0) {\n        float outerAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, outerDist);\n        float innerAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, innerDist);\n        resultColor = mix(resultColor, u_borderColor, outerAlpha * u_borderColor.a);\n        resultColor = mix(resultColor, color, innerAlpha);\n        gl_FragColor = resultColor * u_alpha;\n        return;\n      }\n\n      nodeDist = roundedBox(boxUv, v_halfDimensions - edgeWidth, u_radius);\n      nodeAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, nodeDist);\n      float innerAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, innerDist);\n      float gapAlpha = max(0.0, innerAlpha - nodeAlpha);\n\n      float borderDist = max(-innerDist, outerDist);\n      float borderAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, borderDist);\n\n      resultColor = (color * nodeAlpha) + (u_fillColor * gapAlpha);\n      resultColor = mix(resultColor, u_borderColor, borderAlpha * u_borderColor.a);\n      gl_FragColor = resultColor * u_alpha;\n    }\n  "
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
                    vertex: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    attribute vec2 a_position;\n    attribute vec2 a_textureCoords;\n    attribute vec4 a_color;\n    attribute vec2 a_nodeCoords;\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n    uniform float u_rtt;\n    uniform vec2 u_dimensions;\n\n    uniform vec4 u_shadow;\n    uniform vec4 u_radius;\n    uniform vec4 u_borderWidth;\n    uniform float u_borderGap;\n    uniform float u_borderAlign;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n    varying vec2 v_nodeCoords;\n\n    varying vec2 v_innerSize;\n    varying vec2 v_outerSize;\n    varying vec2 v_outerBorderUv;\n    varying vec2 v_innerBorderUv;\n    varying vec4 v_innerBorderRadius;\n    varying vec4 v_outerBorderRadius;\n    varying vec2 v_halfDimensions;\n\n    void main() {\n      vec2 screenSpace = vec2(2.0 / u_resolution.x,  -2.0 / u_resolution.y);\n      vec2 edge = clamp(a_nodeCoords * 2.0 - vec2(1.0), -1.0, 1.0);\n      float borderZero = 1.0 - step(0.001, dot(abs(u_borderWidth), vec4(1.0)));\n\n      vec2 edgeOffset = edge * ((u_shadow.w * 2.0)+ u_shadow.z) + u_shadow.xy;\n      vec2 vertexPos = (a_position + edge + edgeOffset) * u_pixelRatio;\n\n      v_innerSize = vec2(0.0);\n      v_outerSize = vec2(0.0);\n\n      if(borderZero == 0.0) {\n        vec4 adjustedBorderWidth = u_borderWidth - 1.0 + clamp(u_borderWidth, -1.0, 1.0);\n\n        float borderTop = adjustedBorderWidth.x;\n        float borderRight = adjustedBorderWidth.y;\n        float borderBottom = adjustedBorderWidth.z;\n        float borderLeft = adjustedBorderWidth.w;\n\n        v_outerBorderUv = vec2(0.0);\n        v_innerBorderUv = vec2(0.0);\n\n        vec2 borderSize = vec2(borderRight + borderLeft, borderTop + borderBottom);\n        vec2 extraSize = borderSize * u_borderAlign;\n        float gapLeft = step(0.001, borderLeft) * u_borderGap;\n        float gapRight = step(0.001, borderRight) * u_borderGap;\n        float gapTop = step(0.001, borderTop) * u_borderGap;\n        float gapBottom = step(0.001, borderBottom) * u_borderGap;\n        vec2 gapSize = vec2(gapLeft + gapRight, gapTop + gapBottom);\n\n        v_outerSize = (u_dimensions + gapSize + extraSize) * 0.5;\n        v_innerSize = v_outerSize - borderSize * 0.5;\n\n        // Use sign() to avoid branching\n        vec2 borderDiff = vec2(borderRight - borderLeft, borderBottom - borderTop);\n        vec2 signDiff = sign(borderDiff);\n        borderDiff = abs(borderDiff);\n\n        vec2 gapDiff = vec2(gapRight - gapLeft, gapBottom - gapTop);\n        vec2 signGapDiff = sign(gapDiff);\n        gapDiff = abs(gapDiff);\n\n        v_outerBorderUv = -signDiff * borderDiff * u_borderAlign * 0.5 - signGapDiff * gapDiff * 0.5;\n        v_innerBorderUv = v_outerBorderUv + signDiff * borderDiff * 0.5;\n\n        v_outerBorderRadius = vec4(\n          max(0.0, u_radius.x + max(borderTop * u_borderAlign + u_borderGap, borderLeft * u_borderAlign + u_borderGap)),\n          max(0.0, u_radius.y + max(borderTop * u_borderAlign + u_borderGap, borderRight * u_borderAlign + u_borderGap)),\n          max(0.0, u_radius.z + max(borderBottom * u_borderAlign + u_borderGap, borderRight * u_borderAlign + u_borderGap)),\n          max(0.0, u_radius.w + max(borderBottom * u_borderAlign + u_borderGap, borderLeft * u_borderAlign + u_borderGap))\n        );\n\n        v_innerBorderRadius = vec4(\n          max(0.0, v_outerBorderRadius.x - max(borderTop, borderLeft)),\n          max(0.0, v_outerBorderRadius.y - max(borderTop, borderRight)),\n          max(0.0, v_outerBorderRadius.z - max(borderBottom, borderRight)),\n          max(0.0, v_outerBorderRadius.w - max(borderBottom, borderLeft))\n        );\n\n        vec2 edgeOffsetExtra = step(u_dimensions * 0.5, v_outerSize) * edge * (extraSize + u_borderGap);\n        edgeOffset += edgeOffsetExtra;\n\n        vertexPos = (a_position + edge + edgeOffset) * u_pixelRatio;\n      }\n\n      gl_Position = vec4(vertexPos.x * screenSpace.x - 1.0, -sign(screenSpace.y) * (vertexPos.y * -abs(screenSpace.y)) + 1.0, 0.0, 1.0);\n\n      v_halfDimensions = u_dimensions * 0.5;\n      v_color = a_color;\n      v_nodeCoords = a_nodeCoords + (screenSpace + edgeOffset) / (u_dimensions);\n      v_textureCoords = a_textureCoords + (screenSpace + edgeOffset) / (u_dimensions);\n    }\n  ",
                    fragment: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n    uniform float u_alpha;\n    uniform vec2 u_dimensions;\n    uniform sampler2D u_texture;\n    uniform float u_rtt;\n\n    uniform vec4 u_radius;\n    uniform vec4 u_borderWidth;\n    uniform vec4 u_borderColor;\n    uniform vec4 u_shadowColor;\n    uniform vec4 u_shadow;\n    uniform float u_borderGap;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n    varying vec2 v_nodeCoords;\n\n    varying vec2 v_innerSize;\n    varying vec2 v_outerSize;\n    varying vec2 v_outerBorderUv;\n    varying vec2 v_innerBorderUv;\n    varying vec4 v_innerBorderRadius;\n    varying vec4 v_outerBorderRadius;\n    varying vec2 v_halfDimensions;\n\n    float roundedBox(vec2 p, vec2 s, vec4 r) {\n      r.xy = (p.x > 0.0) ? r.yz : r.xw;\n      r.x = (p.y > 0.0) ? r.y : r.x;\n      vec2 q = abs(p) - s + r.x;\n      return (min(max(q.x, q.y), 0.0) + length(max(q, 0.0))) - r.x;\n    }\n\n    float shadowBox(vec2 p, vec2 s, vec4 r) {\n      r.xy = (p.x > 0.0) ? r.yz : r.xw;\n      r.x = (p.y > 0.0) ? r.y : r.x;\n      vec2 q = abs(p) - s + r.x;\n      float dist = min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r.x;\n      return 1.0 - smoothstep(-u_shadow.w, u_shadow.w + u_shadow.z, dist);\n    }\n\n    void main() {\n      vec4 color = texture2D(u_texture, v_textureCoords) * v_color;\n      vec4 resultColor = vec4(0.0);\n      vec2 boxUv = v_nodeCoords.xy * u_dimensions - v_halfDimensions;\n      float borderZero = 1.0 - step(0.001, dot(abs(u_borderWidth), vec4(1.0)));\n      float edgeWidth = 1.0 / u_pixelRatio;\n      float nodeDist;\n      float nodeAlpha;\n      float shadowAlpha;\n\n      if(borderZero == 1.0) {\n        nodeDist = roundedBox(boxUv, v_halfDimensions - edgeWidth, u_radius);\n        nodeAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, nodeDist);\n        shadowAlpha = shadowBox(boxUv - u_shadow.xy, v_halfDimensions + u_shadow.w - edgeWidth, u_radius + u_shadow.z);\n        resultColor = mix(resultColor, u_shadowColor, shadowAlpha);\n        gl_FragColor = mix(resultColor, color, nodeAlpha) * u_alpha;\n        return;\n      }\n\n      if(v_outerSize.x > v_halfDimensions.x || v_outerSize.y > v_halfDimensions.y) {\n        shadowAlpha = shadowBox(boxUv + v_outerBorderUv - u_shadow.xy, v_outerSize + u_shadow.w - edgeWidth, v_outerBorderRadius + u_shadow.z);\n      }\n      else {\n        shadowAlpha = shadowBox(boxUv - u_shadow.xy, v_halfDimensions + u_shadow.w - edgeWidth, u_radius + u_shadow.z);\n      }\n\n      float outerDist = roundedBox(boxUv + v_outerBorderUv, v_outerSize - edgeWidth, v_outerBorderRadius);\n      float innerDist = roundedBox(boxUv + v_innerBorderUv, v_innerSize - edgeWidth, v_innerBorderRadius);\n\n      if(u_borderGap == 0.0) {\n        float outerAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, outerDist);\n        float innerAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, innerDist);\n        resultColor = mix(resultColor, u_shadowColor, shadowAlpha);\n        resultColor = mix(resultColor, u_borderColor, outerAlpha * u_borderColor.a);\n        resultColor = mix(resultColor, color, innerAlpha);\n        gl_FragColor = resultColor * u_alpha;\n        return;\n      }\n\n      nodeDist = roundedBox(boxUv, v_halfDimensions - edgeWidth, u_radius);\n      nodeAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, nodeDist);\n      float borderDist = max(-innerDist, outerDist);\n      float borderAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, borderDist);\n      resultColor = mix(resultColor, u_shadowColor, shadowAlpha);\n      resultColor = mix(resultColor, color, nodeAlpha);\n      resultColor = mix(resultColor, u_borderColor, borderAlpha * u_borderColor.a);\n      gl_FragColor = resultColor * u_alpha;\n    }\n  "
                }, props = Object.assign({}, RoundedTemplate.props, getShadowProps("shadow")), RoundedWithShadow = {
                    props: {
                        props: props
                    }.props,
                    update: function(node) {
                        this.uniformRGBA("u_shadow_color", this.props["shadow-color"]), this.uniform4fa("u_shadow", this.props["shadow-projection"]), 
                        this.uniform4fa("u_radius", calcFactoredRadiusArray(this.props.radius, node.w, node.h));
                    },
                    vertex: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    attribute vec2 a_position;\n    attribute vec2 a_textureCoords;\n    attribute vec4 a_color;\n    attribute vec2 a_nodeCoords;\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n    uniform vec2 u_dimensions;\n\n    uniform vec4 u_shadow;\n    uniform vec4 u_radius;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n\n    varying vec2 v_boxUv;\n    varying vec2 v_boxSize;\n    varying vec2 v_boxSmooth;\n    varying vec2 v_shadowBox;\n    varying vec2 v_shadowSize;\n    varying vec4 v_shadowRadius;\n    varying vec2 v_shadowSmooth;\n\n    void main() {\n      vec2 screenSpace = vec2(2.0 / u_resolution.x,  -2.0 / u_resolution.y);\n      vec2 outerEdge = clamp(a_nodeCoords * 2.0 - vec2(1.0), -1.0, 1.0);\n\n      vec2 padding = vec2(max(0.0, u_shadow.w) + u_shadow.z);\n      vec2 offsetShift = mix(min(vec2(0.0), u_shadow.xy), max(vec2(0.0), u_shadow.xy), (outerEdge + 1.0) * 0.5);\n      vec2 shadowEdge = outerEdge * padding + offsetShift;\n\n      vec2 vertexPos = (a_position + outerEdge + shadowEdge) * u_pixelRatio;\n      gl_Position = vec4(vertexPos.x * screenSpace.x - 1.0, -sign(screenSpace.y) * (vertexPos.y * -abs(screenSpace.y)) + 1.0, 0.0, 1.0);\n\n      v_color = a_color;\n      v_textureCoords = a_textureCoords + (screenSpace + shadowEdge) / (u_dimensions);\n\n      float edgeWidth = 1.0 / u_pixelRatio;\n      vec2 halfDimensions = u_dimensions * 0.5;\n\n      v_boxUv = (a_nodeCoords + (screenSpace + shadowEdge) / (u_dimensions)) * u_dimensions - halfDimensions;\n      v_boxSize = halfDimensions - edgeWidth;\n      v_boxSmooth = vec2(-0.5 * edgeWidth, 0.5 * edgeWidth);\n\n      v_shadowBox = v_boxUv - u_shadow.xy;\n      v_shadowSize = halfDimensions + u_shadow.w - edgeWidth;\n      v_shadowRadius = max(vec4(0.0), u_radius + u_shadow.w);\n      v_shadowSmooth = vec2(-u_shadow.z, u_shadow.z + 0.001);\n    }\n  ",
                    fragment: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    uniform float u_alpha;\n    uniform sampler2D u_texture;\n\n    uniform vec4 u_shadow_color;\n    uniform vec4 u_radius;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n\n    varying vec2 v_boxUv;\n    varying vec2 v_boxSize;\n    varying vec2 v_boxSmooth;\n    varying vec2 v_shadowBox;\n    varying vec2 v_shadowSize;\n    varying vec4 v_shadowRadius;\n    varying vec2 v_shadowSmooth;\n\n    float roundedBox(vec2 p, vec2 s, vec4 r) {\n      r.xy = (p.x > 0.0) ? r.yz : r.xw;\n      r.x = (p.y > 0.0) ? r.y : r.x;\n      vec2 q = abs(p) - s + r.x;\n      return (min(max(q.x, q.y), 0.0) + length(max(q, 0.0))) - r.x;\n    }\n\n    float shadowBox(vec2 p, vec2 s, vec4 r) {\n      r.xy = (p.x > 0.0) ? r.yz : r.xw;\n      r.x = (p.y > 0.0) ? r.y : r.x;\n      vec2 q = abs(p) - s + r.x;\n      float dist = min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r.x;\n      return 1.0 - smoothstep(v_shadowSmooth.x, v_shadowSmooth.y, dist);\n    }\n\n    void main() {\n      vec4 color = texture2D(u_texture, v_textureCoords) * v_color;\n\n      float boxDist = roundedBox(v_boxUv, v_boxSize, u_radius);\n      float roundedAlpha = 1.0 - smoothstep(v_boxSmooth.x, v_boxSmooth.y, boxDist);\n\n      vec4 resColor = vec4(0.0);\n      if (u_shadow_color.a > 0.0) {\n        float shadowAlpha = shadowBox(v_shadowBox, v_shadowSize, v_shadowRadius);\n        resColor = u_shadow_color * shadowAlpha;\n      }\n\n      resColor = mix(resColor, color, min(color.a, roundedAlpha));\n      gl_FragColor = resColor * u_alpha;\n    }\n  "
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
                    fragment: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    uniform float u_alpha;\n    uniform float u_pixelRatio;\n    uniform vec2 u_dimensions;\n    uniform sampler2D u_texture;\n\n    uniform vec2 u_size;\n    uniform vec2 u_pos;\n\n    uniform vec4 u_radius;\n\n    uniform vec4 u_color;\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n\n    void main() {\n      vec4 color = texture2D(u_texture, v_textureCoords) * v_color;\n      vec2 p = (v_textureCoords.xy * u_dimensions.xy - u_pos) - u_size;\n      vec4 r = u_radius;\n      r.xy = (p.x > 0.0) ? r.yz : r.xw;\n      r.x = (p.y > 0.0) ? r.y : r.x;\n      p = abs(p) - u_size + r.x;\n      float dist = min(max(p.x, p.y), 0.0) + length(max(p, 0.0)) - r.x + 2.0;\n      float roundedAlpha = 1.0 - smoothstep(0.0, u_pixelRatio, dist);\n      gl_FragColor = mix(color, vec4(0.0), min(color.a, roundedAlpha));\n    }\n  "
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
                        return "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    #define MAX_STOPS ".concat(props.colors.length, "\n    #define LAST_STOP ").concat(props.colors.length - 1, "\n\n    uniform float u_alpha;\n\n    uniform sampler2D u_texture;\n\n    uniform vec2 u_grad_a;\n    uniform float u_grad_b;\n    uniform float u_stops[MAX_STOPS];\n    uniform vec4 u_colors[MAX_STOPS];\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n\n    vec4 getGradientColor(float dist) {\n      dist = clamp(dist, 0.0, 1.0);\n\n      if(dist <= u_stops[0]) {\n        return u_colors[0];\n      }\n\n      if(dist >= u_stops[LAST_STOP]) {\n        return u_colors[LAST_STOP];\n      }\n\n      for(int i = 0; i < LAST_STOP; i++) {\n        float left = u_stops[i];\n        float right = u_stops[i + 1];\n        if(dist >= left && dist <= right) {\n          float lDist = smoothstep(left, right, dist);\n          return mix(u_colors[i], u_colors[i + 1], lDist);\n        }\n      }\n      return u_colors[LAST_STOP];\n    }\n\n    void main() {\n      vec4 color = texture2D(u_texture, v_textureCoords) * v_color;\n      float dist = dot(v_textureCoords, u_grad_a) + u_grad_b;\n      vec4 colorOut = getGradientColor(dist);\n      color = mix(color, colorOut, clamp(colorOut.a, 0.0, 1.0));\n      gl_FragColor = color * u_alpha;\n    }\n  ");
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
                        return "\n      # ifdef GL_FRAGMENT_PRECISION_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      #define MAX_STOPS ".concat(props.colors.length, "\n      #define LAST_STOP ").concat(props.colors.length - 1, "\n\n      uniform float u_alpha;\n      uniform vec2 u_dimensions;\n\n      uniform sampler2D u_texture;\n\n      uniform vec2 u_projection;\n      uniform vec2 u_size;\n\n      uniform float u_stops[MAX_STOPS];\n      uniform vec4 u_colors[MAX_STOPS];\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoords;\n      varying vec2 v_nodeCoords;\n\n      vec4 getGradientColor(float dist) {\n        dist = clamp(dist, 0.0, 1.0);\n\n        if(dist <= u_stops[0]) {\n          return u_colors[0];\n        }\n\n        if(dist >= u_stops[LAST_STOP]) {\n          return u_colors[LAST_STOP];\n        }\n\n        for(int i = 0; i < LAST_STOP; i++) {\n          float left = u_stops[i];\n          float right = u_stops[i + 1];\n          if(dist >= left && dist <= right) {\n            float lDist = smoothstep(left, right, dist);\n            return mix(u_colors[i], u_colors[i + 1], lDist);\n          }\n        }\n\n        return u_colors[LAST_STOP];\n      }\n\n      void main() {\n        vec4 color = texture2D(u_texture, v_textureCoords) * v_color;\n        vec2 point = v_nodeCoords.xy * u_dimensions;\n        float dist = length((point - u_projection) / u_size);\n\n        vec4 colorOut = getGradientColor(dist);\n        color = mix(color, colorOut, clamp(colorOut.a, 0.0, 1.0));\n        gl_FragColor = color * u_alpha;\n      }\n    ");
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
                        return "\n      # ifdef GL_FRAGMENT_PRECISION_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      #define MAX_STOPS ".concat(maxStops, "\n      #define LAST_STOP ").concat(maxStops - 1, "\n      #define CAP_ROUND ").concat(props.cap, "\n      #define HAS_TRACK ").concat(0 !== props.trackColor ? 1 : 0, "\n\n      #define TWO_PI 6.28318530717958647692\n\n      uniform float u_alpha;\n      uniform float u_time;\n      uniform vec2 u_dimensions;\n      uniform sampler2D u_texture;\n\n      uniform vec2 u_center;\n      uniform float u_radius;\n      uniform float u_width;\n      uniform float u_progress;\n      uniform float u_startAngle;\n      uniform float u_direction;\n      uniform float u_duration;\n      uniform float u_countdown;\n\n      uniform float u_stops[MAX_STOPS];\n      uniform vec4 u_colors[MAX_STOPS];\n      uniform vec4 u_trackColor;\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoords;\n      varying vec2 v_nodeCoords;\n\n      vec4 getGradientColor(float dist) {\n        dist = clamp(dist, 0.0, 1.0);\n\n        if (dist <= u_stops[0]) {\n          return u_colors[0];\n        }\n        if (dist >= u_stops[LAST_STOP]) {\n          return u_colors[LAST_STOP];\n        }\n        for (int i = 0; i < LAST_STOP; i++) {\n          float left = u_stops[i];\n          float right = u_stops[i + 1];\n          if (dist >= left && dist <= right) {\n            float lDist = smoothstep(left, right, dist);\n            return mix(u_colors[i], u_colors[i + 1], lDist);\n          }\n        }\n        return u_colors[LAST_STOP];\n      }\n\n      // Coverage of a disc centered at `c` with radius `r` at pixel `p` (with 1px AA)\n      float discCoverage(vec2 p, vec2 c, float r) {\n        return 1.0 - smoothstep(r - 1.0, r + 1.0, length(p - c));\n      }\n\n      void main() {\n        vec4 base = texture2D(u_texture, v_textureCoords) * v_color;\n\n        // Effective progress: when u_duration > 0 the shader self-animates from\n        // u_time, otherwise we use the static u_progress prop. countdown == 1\n        // drains (1 -> 0), countdown == 0 fills (0 -> 1).\n        float cyclePos = u_duration > 0.0 ? fract(u_time / u_duration) : 0.0;\n        float animProgress = u_countdown > 0.5 ? 1.0 - cyclePos : cyclePos;\n        float progress = u_duration > 0.0 ? animProgress : u_progress;\n\n        vec2 p = v_nodeCoords.xy * u_dimensions - u_center;\n        float dist = length(p);\n        float halfW = u_width * 0.5;\n\n        // Ring coverage: 1 inside the stroke band, 0 outside (with 1px AA on both edges)\n        float ringCoverage =\n          smoothstep(u_radius - halfW - 1.0, u_radius - halfW + 1.0, dist) *\n          (1.0 - smoothstep(u_radius + halfW - 1.0, u_radius + halfW + 1.0, dist));\n\n        // Angle along the arc, normalized to [0, 1) starting at u_startAngle\n        float ang = atan(p.y, p.x);\n        float t = mod((ang - u_startAngle) * u_direction, TWO_PI) / TWO_PI;\n\n        // Filled arc coverage (1 if in filled arc, else 0). When progress >= 1 the\n        // whole ring is filled regardless of `t` -- guards against the mod() seam.\n        float arcCoverage = progress >= 1.0 ? 1.0 : step(t, progress);\n        float fillCoverage = ringCoverage * arcCoverage;\n\n        #if CAP_ROUND\n          // Round caps: discs of radius halfW at the start and head of the arc\n          float a0 = u_startAngle;\n          float a1 = u_startAngle + u_direction * progress * TWO_PI;\n          vec2 cap0 = vec2(cos(a0), sin(a0)) * u_radius;\n          vec2 cap1 = vec2(cos(a1), sin(a1)) * u_radius;\n          float capMask = max(discCoverage(p, cap0, halfW), discCoverage(p, cap1, halfW));\n          // Caps only visible when there's something to cap (progress > 0 and < 1).\n          float capGate = step(0.0001, progress) * step(progress, 0.9999);\n          fillCoverage = max(fillCoverage, capMask * capGate);\n        #endif\n\n        // Sample gradient. Normalize `t` to the *filled* portion so the gradient\n        // spans the visible arc end-to-end regardless of progress.\n        float gradT = progress > 0.0 ? clamp(t / progress, 0.0, 1.0) : 0.0;\n        vec4 fillCol = getGradientColor(gradT);\n\n        // Composite: track under fill (if track enabled), both gated by ringCoverage.\n        // We work in PREMULTIPLIED-alpha space here so AA edges composite cleanly\n        // against `base` -- mix(base.rgb, layer.rgb, la) with a coverage-scaled\n        // `layer` would multiply layer.rgb by coverage a second time and darken\n        // the AA falloff (see issue #36). The renderer's blend func is\n        // (ONE, ONE_MINUS_SRC_ALPHA), which expects premultiplied output.\n        vec4 fillPM = vec4(fillCol.rgb * fillCol.a, fillCol.a);\n        vec4 layer = vec4(0.0);\n        #if HAS_TRACK\n          vec4 trackPM = vec4(u_trackColor.rgb * u_trackColor.a, u_trackColor.a);\n          float trackCoverage = ringCoverage * (1.0 - fillCoverage);\n          layer = trackPM * trackCoverage + fillPM * fillCoverage;\n        #else\n          layer = fillPM * fillCoverage;\n        #endif\n\n        // Apply node opacity to the introduced ring/track colors. They come\n        // from u_colors / u_trackColor and do not carry worldAlpha, so without\n        // this a fading RadialProgress node would keep its ring fully opaque.\n        // `base` already includes worldAlpha (via v_color), so it is left as-is\n        // to avoid double-applying. Scaling a premultiplied layer is valid.\n        layer *= u_alpha;\n\n        // Premultiplied \"over\": out = src + dst*(1 - src.a). The output stays\n        // visible on a fully-transparent `base` because layer brings its own alpha.\n        float la = clamp(layer.a, 0.0, 1.0);\n        vec3 blended = base.rgb * (1.0 - la) + layer.rgb;\n        float outA = base.a + la * (1.0 - base.a);\n        gl_FragColor = vec4(blended, outA);\n      }\n    ");
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
                    var fontFamily = options.fontFamily, atlasUrl = options.atlasUrl, atlasDataUrl = options.atlasDataUrl, metrics = options.metrics;
                    if (void 0 !== fontCache$1.get(fontFamily)) return Promise.resolve();
                    var existingPromise = fontLoadPromises$1.get(fontFamily);
                    if (void 0 !== existingPromise) return existingPromise;
                    if (void 0 === atlasDataUrl) return Promise.reject(new Error("Atlas data URL must be provided for SDF font: ".concat(fontFamily)));
                    var nwff = nodesWaitingForFont$1[fontFamily];
                    void 0 === nwff && (nwff = nodesWaitingForFont$1[fontFamily] = []);
                    var fetchFontData = function() {
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
                    }, loadAtlas = function(fontData) {
                        return fontData && fontData.chars ? atlasUrl ? new Promise(function(resolve, reject) {
                            var atlasTexture = stage.txManager.createTexture("ImageTexture", {
                                src: atlasUrl,
                                premultiplyAlpha: !1
                            });
                            atlasTexture.setRenderableOwner(fontFamily, !0), atlasTexture.preventCleanup = !0;
                            var onLoaded = function() {
                                for (var key in processFontData$1(fontFamily, fontData, atlasTexture, metrics), 
                                nwff) nwff[key].setUpdateType(UpdateType.Local);
                                delete nodesWaitingForFont$1[fontFamily], resolve();
                            };
                            "loaded" !== atlasTexture.state ? (atlasTexture.on("loaded", onLoaded), atlasTexture.on("failed", function(_target, error) {
                                atlasTexture.setRenderableOwner(fontFamily, !1), stage.txManager.removeTextureFromCache(atlasTexture), 
                                reject(error);
                            })) : onLoaded();
                        }) : Promise.reject(new Error("Atlas texture must be provided for SDF fonts")) : Promise.reject(new Error("Invalid SDF font data format"));
                    }, loadPromise = _asyncToGenerator(_regenerator().m(function _callee() {
                        var lastError, attempt, _t, _t2;
                        return _regenerator().w(function(_context2) {
                            for (;;) switch (_context2.p = _context2.n) {
                              case 0:
                                attempt = 0;

                              case 1:
                                if (!(attempt <= 3)) {
                                    _context2.n = 7;
                                    break;
                                }
                                return _context2.p = 2, _t = loadAtlas, _context2.n = 3, fetchFontData();

                              case 3:
                                return _context2.n = 4, _t(_context2.v);

                              case 4:
                                return fontLoadPromises$1.delete(fontFamily), _context2.a(2);

                              case 5:
                                _context2.p = 5, _t2 = _context2.v, lastError = _t2, attempt < 3 && console.warn('SDF font "'.concat(fontFamily, '" failed to load (attempt ').concat(attempt + 1, " of 4), retrying."), _t2);

                              case 6:
                                attempt++, _context2.n = 1;
                                break;

                              case 7:
                                throw fontLoadPromises$1.delete(fontFamily), fontCache$1.delete(fontFamily), console.error("Failed to load SDF font: ".concat(fontFamily), lastError), 
                                lastError;

                              case 8:
                                return _context2.a(2);
                            }
                        }, _callee, null, [ [ 2, 5 ] ]);
                    }))();
                    return fontLoadPromises$1.set(fontFamily, loadPromise), loadPromise;
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
                    function SdfRenderOp(renderer, shader, quadBufferCollection, worldAlpha, clippingRect, w, h, rtt, parentHasRenderTexture, framebufferDimensions) {
                        var _this3;
                        return (_this3 = _callSuper(this, SdfRenderOp)).renderer = void 0, _this3.shader = void 0, 
                        _this3.quadBufferCollection = void 0, _this3.worldAlpha = void 0, _this3.clippingRect = void 0, 
                        _this3.w = void 0, _this3.h = void 0, _this3.rtt = void 0, _this3.parentHasRenderTexture = void 0, 
                        _this3.framebufferDimensions = void 0, _this3.numQuads = 0, _this3.isCoreNode = !1, 
                        _this3.renderOpTextures = [], _this3.time = 0, _this3.stage = void 0, _this3.startQuad = 0, 
                        _this3.renderer = renderer, _this3.shader = shader, _this3.quadBufferCollection = quadBufferCollection, 
                        _this3.worldAlpha = worldAlpha, _this3.clippingRect = clippingRect, _this3.w = w, 
                        _this3.h = h, _this3.rtt = rtt, _this3.parentHasRenderTexture = parentHasRenderTexture, 
                        _this3.framebufferDimensions = framebufferDimensions, _this3.stage = renderer.stage, 
                        _this3;
                    }
                    return _inherits(SdfRenderOp, _CoreRenderOp), _createClass(SdfRenderOp, [ {
                        key: "addTexture",
                        value: function(texture) {
                            for (var renderOpTextures = this.renderOpTextures, length = renderOpTextures.length, i = 0; i < length; i++) if (renderOpTextures[i] === texture) return i;
                            return renderOpTextures.push(texture), length;
                        }
                    }, {
                        key: "draw",
                        value: function() {
                            var _this$renderer = this.renderer, glw = _this$renderer.glw, options = _this$renderer.options, stage = _this$renderer.stage;
                            if (stage.shManager.useShader(this.shader.program), this.shader.program.bindRenderOp(this), 
                            !0 === this.clippingRect.valid) {
                                var pixelRatio = this.parentHasRenderTexture ? 1 : stage.pixelRatio, clipX = Math.round(this.clippingRect.x * pixelRatio), clipWidth = Math.round(this.clippingRect.w * pixelRatio), clipHeight = Math.round(this.clippingRect.h * pixelRatio), clipY = Math.round(options.canvas.height - clipHeight - this.clippingRect.y * pixelRatio);
                                this.parentHasRenderTexture && (clipY = this.framebufferDimensions ? this.framebufferDimensions.h - this.h : 0), 
                                glw.setScissorTest(!0), glw.scissor(clipX, clipY, clipWidth, clipHeight);
                            } else glw.setScissorTest(!1);
                            var byteOffset = 6 * this.startQuad * 2;
                            glw.drawElements(glw.TRIANGLES, 6 * this.numQuads, glw.UNSIGNED_SHORT, byteOffset);
                        }
                    } ]);
                }(_createClass(function() {})), TRANSPARENT_TEXTURE_DATA = new Uint8Array([ 0, 0, 0, 0 ]), 
                WebGlCtxTexture = function(_CoreContextTexture) {
                    function WebGlCtxTexture(glw, memManager, textureSource) {
                        var _this4;
                        return (_this4 = _callSuper(this, WebGlCtxTexture, [ memManager, textureSource ])).glw = void 0, 
                        _this4._nativeCtxTexture = null, _this4._w = 0, _this4._h = 0, _this4.txCoords = {
                            x1: 0,
                            y1: 0,
                            x2: 1,
                            y2: 1
                        }, _this4.glw = glw, _this4;
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
                        value: (_load = _asyncToGenerator(_regenerator().m(function _callee2() {
                            var error, _yield$this$onLoadReq, w, h, _error, _t3;
                            return _regenerator().w(function(_context3) {
                                for (;;) switch (_context3.p = _context3.n) {
                                  case 0:
                                    if ("loading" !== this.state && "loaded" !== this.state) {
                                        _context3.n = 1;
                                        break;
                                    }
                                    return _context3.a(2, Promise.resolve());

                                  case 1:
                                    if (this.state = "loading", this.textureSource.setState("loading"), this._nativeCtxTexture = this.createNativeCtxTexture(), 
                                    null !== this._nativeCtxTexture) {
                                        _context3.n = 2;
                                        break;
                                    }
                                    throw this.state = "failed", error = new Error("Could not create WebGL Texture"), 
                                    this.textureSource.setState("failed", error), console.error("Could not create WebGL Texture"), 
                                    error;

                                  case 2:
                                    return _context3.p = 2, _context3.n = 3, this.onLoadRequest();

                                  case 3:
                                    if (_yield$this$onLoadReq = _context3.v, w = _yield$this$onLoadReq.w, h = _yield$this$onLoadReq.h, 
                                    "freed" !== this.state) {
                                        _context3.n = 4;
                                        break;
                                    }
                                    return _context3.a(2);

                                  case 4:
                                    this.state = "loaded", this._w = w, this._h = h, this.textureSource.setState("loaded", {
                                        w: w,
                                        h: h
                                    }), this.textureSource.freeTextureData(), _context3.n = 7;
                                    break;

                                  case 5:
                                    if (_context3.p = 5, _t3 = _context3.v, "freed" !== this.state) {
                                        _context3.n = 6;
                                        break;
                                    }
                                    return _context3.a(2);

                                  case 6:
                                    throw this.state = "failed", _error = _t3 instanceof Error ? _t3 : new Error(String(_t3)), 
                                    this.textureSource.setState("failed", _error), this.textureSource.freeTextureData(), 
                                    console.error(_t3), _error;

                                  case 7:
                                    return _context3.a(2);
                                }
                            }, _callee2, this, [ [ 2, 5 ] ]);
                        })), function() {
                            return _load.apply(this, arguments);
                        })
                    }, {
                        key: "onLoadRequest",
                        value: (_onLoadRequest = _asyncToGenerator(_regenerator().m(function _callee3() {
                            var glw, textureData, w, h, tdata, format, formatBytes, memoryPadding, _mipmaps$0$byteLength, _mipmaps$, mipmaps, _type, blockInfo;
                            return _regenerator().w(function(_context4) {
                                for (;;) switch (_context4.n) {
                                  case 0:
                                    if (glw = this.glw, null !== (textureData = this.textureSource.textureData) && null !== this._nativeCtxTexture) {
                                        _context4.n = 1;
                                        break;
                                    }
                                    throw new Error("Texture data or native texture is null " + this.textureSource.type);

                                  case 1:
                                    if (w = 0, h = 0, glw.activeTexture(0), tdata = textureData.data, format = glw.RGBA, 
                                    formatBytes = 4, memoryPadding = 1.1, !("undefined" != typeof ImageBitmap && tdata instanceof ImageBitmap || tdata instanceof ImageData || !0 === isHTMLImageElement(tdata))) {
                                        _context4.n = 3;
                                        break;
                                    }
                                    if (w = tdata.width, h = tdata.height, glw.bindTexture(this._nativeCtxTexture), 
                                    glw.pixelStorei(glw.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !!textureData.premultiplyAlpha), 
                                    glw.texImage2D(0, format, format, glw.UNSIGNED_BYTE, tdata), !0 !== this.checkGLError()) {
                                        _context4.n = 2;
                                        break;
                                    }
                                    throw this.textureSource.error || new Error("WebGL Error");

                                  case 2:
                                    this.setTextureMemUse(h * w * formatBytes * memoryPadding), _context4.n = 9;
                                    break;

                                  case 3:
                                    if (null !== tdata) {
                                        _context4.n = 4;
                                        break;
                                    }
                                    w = 0, h = 0, glw.bindTexture(this._nativeCtxTexture), glw.texImage2D(0, format, 1, 1, 0, format, glw.UNSIGNED_BYTE, TRANSPARENT_TEXTURE_DATA), 
                                    this.setTextureMemUse(TRANSPARENT_TEXTURE_DATA.byteLength), _context4.n = 9;
                                    break;

                                  case 4:
                                    if (!("mipmaps" in tdata) || !tdata.mipmaps) {
                                        _context4.n = 6;
                                        break;
                                    }
                                    if (mipmaps = tdata.mipmaps, _type = tdata.type, blockInfo = tdata.blockInfo, uploadCompressedTexture[_type](glw, this._nativeCtxTexture, tdata), 
                                    !0 !== this.checkGLError()) {
                                        _context4.n = 5;
                                        break;
                                    }
                                    throw this.textureSource.error || new Error("WebGL Error");

                                  case 5:
                                    w = tdata.w, h = tdata.h, this.txCoords.x2 = w / (Math.ceil(w / blockInfo.width) * blockInfo.width), 
                                    this.txCoords.y2 = h / (Math.ceil(h / blockInfo.height) * blockInfo.height), this.setTextureMemUse(null !== (_mipmaps$0$byteLength = null == (_mipmaps$ = mipmaps[0]) ? void 0 : _mipmaps$.byteLength) && void 0 !== _mipmaps$0$byteLength ? _mipmaps$0$byteLength : 0), 
                                    _context4.n = 9;
                                    break;

                                  case 6:
                                    if (!(tdata && tdata instanceof Uint8Array)) {
                                        _context4.n = 8;
                                        break;
                                    }
                                    if (w = 1, h = 1, glw.bindTexture(this._nativeCtxTexture), glw.pixelStorei(glw.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !!textureData.premultiplyAlpha), 
                                    glw.texImage2D(0, format, w, h, 0, format, glw.UNSIGNED_BYTE, tdata), !0 !== this.checkGLError()) {
                                        _context4.n = 7;
                                        break;
                                    }
                                    throw this.textureSource.error || new Error("WebGL Error");

                                  case 7:
                                    this.setTextureMemUse(w * h * formatBytes), _context4.n = 9;
                                    break;

                                  case 8:
                                    throw new Error("WebGlCoreCtxTexture.onLoadRequest: Unexpected textureData returned");

                                  case 9:
                                    return _context4.a(2, {
                                        w: w,
                                        h: h
                                    });
                                }
                            }, _callee3, this);
                        })), function() {
                            return _onLoadRequest.apply(this, arguments);
                        })
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
                    var _onLoadRequest, _load;
                }(CoreContextTexture), WebGlCtxSubTexture = function(_WebGlCtxTexture) {
                    function WebGlCtxSubTexture(glw, memManager, textureSource) {
                        return _callSuper(this, WebGlCtxSubTexture, [ glw, memManager, textureSource ]);
                    }
                    return _inherits(WebGlCtxSubTexture, _WebGlCtxTexture), _createClass(WebGlCtxSubTexture, [ {
                        key: "onLoadRequest",
                        value: (_onLoadRequest2 = _asyncToGenerator(_regenerator().m(function _callee4() {
                            var props;
                            return _regenerator().w(function(_context5) {
                                for (;;) switch (_context5.n) {
                                  case 0:
                                    if (!((props = this.textureSource.textureData).data instanceof Uint8Array)) {
                                        _context5.n = 1;
                                        break;
                                    }
                                    return _context5.a(2, {
                                        w: 1,
                                        h: 1
                                    });

                                  case 1:
                                    return _context5.a(2, this.extractDimensions(props.data));
                                }
                            }, _callee4, this);
                        })), function() {
                            return _onLoadRequest2.apply(this, arguments);
                        })
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
                    var _onLoadRequest2;
                }(WebGlCtxTexture), BufferCollection = function() {
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
                        this.curUniformLocations = {}, this.gl2 = void 0, this.vaoExt = void 0, this.canUseVertexArrayObject = void 0, 
                        this.isWebGl2 = void 0, this.canvas = void 0, this.MAX_RENDERBUFFER_SIZE = void 0, 
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
                        this.COLOR_ATTACHMENT0 = void 0, this.INVALID_ENUM = void 0, this.INVALID_OPERATION = void 0, 
                        this.gl = gl, this.activeTextureUnit = 0;
                        var maxTextureUnits = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);
                        this.texture2dUnits = new Array(maxTextureUnits).fill(null), this.scissorEnabled = !1, 
                        this.scissorX = 0, this.scissorY = 0, this.scissorWidth = gl.drawingBufferWidth, 
                        this.scissorHeight = gl.drawingBufferHeight, this.blendEnabled = !1, this.blendSrcRgb = gl.ONE, 
                        this.blendDstRgb = gl.ZERO, this.blendSrcAlpha = gl.ONE, this.blendDstAlpha = gl.ZERO, 
                        this.boundArrayBuffer = null, this.boundElementArrayBuffer = null, this.curProgram = null, 
                        this.gl2 = self.WebGL2RenderingContext && gl instanceof self.WebGL2RenderingContext ? gl : null, 
                        this.vaoExt = null === this.gl2 && !0 !== disableVertexArrayObject ? gl.getExtension("OES_vertex_array_object") : null, 
                        this.canUseVertexArrayObject = !0 !== disableVertexArrayObject && (null !== this.gl2 || null !== this.vaoExt), 
                        this.isWebGl2 = null !== this.gl2, this.canvas = gl.canvas, this.MAX_RENDERBUFFER_SIZE = gl.MAX_RENDERBUFFER_SIZE, 
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
                        this.LINK_STATUS = gl.LINK_STATUS, this.DYNAMIC_DRAW = gl.DYNAMIC_DRAW, this.COLOR_ATTACHMENT0 = gl.COLOR_ATTACHMENT0, 
                        this.INVALID_ENUM = gl.INVALID_ENUM, this.INVALID_OPERATION = gl.INVALID_OPERATION;
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
                        key: "deleteFramebuffer",
                        value: function(framebuffer) {
                            this.gl.deleteFramebuffer(framebuffer);
                        }
                    }, {
                        key: "viewport",
                        value: function(x, y, width, height) {
                            this.gl.viewport(x, y, width, height);
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
                        key: "createFramebuffer",
                        value: function() {
                            return this.gl.createFramebuffer();
                        }
                    }, {
                        key: "bindFramebuffer",
                        value: function(framebuffer) {
                            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, framebuffer);
                        }
                    }, {
                        key: "framebufferTexture2D",
                        value: function(attachment, texture, level) {
                            var gl = this.gl;
                            gl.framebufferTexture2D(gl.FRAMEBUFFER, attachment, gl.TEXTURE_2D, texture, level);
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
                            null === this.gl2 ? null !== this.vaoExt && this.vaoExt.bindVertexArrayOES(vertexArray) : this.gl2.bindVertexArray(vertexArray);
                        }
                    }, {
                        key: "deleteVertexArray",
                        value: function(vertexArray) {
                            null === this.gl2 ? null !== this.vaoExt && this.vaoExt.deleteVertexArrayOES(vertexArray) : this.gl2.deleteVertexArray(vertexArray);
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
                }(), WebGlCtxRenderTexture = function(_WebGlCtxTexture2) {
                    function WebGlCtxRenderTexture(glw, memManager, textureSource) {
                        var _this5;
                        return (_this5 = _callSuper(this, WebGlCtxRenderTexture, [ glw, memManager, textureSource ])).framebuffer = null, 
                        _this5.txCoords = {
                            x1: 0,
                            y1: 1,
                            x2: 1,
                            y2: 0
                        }, _this5;
                    }
                    return _inherits(WebGlCtxRenderTexture, _WebGlCtxTexture2), _createClass(WebGlCtxRenderTexture, [ {
                        key: "onLoadRequest",
                        value: (_onLoadRequest3 = _asyncToGenerator(_regenerator().m(function _callee5() {
                            var glw, nativeTexture, _this$textureSource, w, h;
                            return _regenerator().w(function(_context6) {
                                for (;;) switch (_context6.n) {
                                  case 0:
                                    if (glw = this.glw, nativeTexture = this._nativeCtxTexture = this.createNativeCtxTexture()) {
                                        _context6.n = 1;
                                        break;
                                    }
                                    throw new Error("Failed to create native texture for RenderTexture");

                                  case 1:
                                    return _this$textureSource = this.textureSource, w = _this$textureSource.w, h = _this$textureSource.h, 
                                    this.framebuffer = glw.createFramebuffer(), glw.texImage2D(0, glw.RGBA, w, h, 0, glw.RGBA, glw.UNSIGNED_BYTE, null), 
                                    this.setTextureMemUse(w * h * 4), glw.bindFramebuffer(this.framebuffer), glw.framebufferTexture2D(glw.COLOR_ATTACHMENT0, nativeTexture, 0), 
                                    glw.bindFramebuffer(null), _context6.a(2, {
                                        w: w,
                                        h: h
                                    });
                                }
                            }, _callee5, this);
                        })), function() {
                            return _onLoadRequest3.apply(this, arguments);
                        })
                    }, {
                        key: "free",
                        value: function() {
                            var t, o, e, r, p;
                            (t = WebGlCtxRenderTexture, o = "free", e = this, p = _get(_getPrototypeOf(1 & (r = 3) ? t.prototype : t), o, e), 
                            2 & r && "function" == typeof p ? function(t) {
                                return p.apply(e, t);
                            } : p)([]), this.glw.deleteFramebuffer(this.framebuffer), this.framebuffer = null;
                        }
                    } ]);
                    var _onLoadRequest3;
                }(WebGlCtxTexture), WebGlRenderer = function(_CoreRenderer) {
                    function WebGlRenderer(options) {
                        var _this6;
                        (_this6 = _callSuper(this, WebGlRenderer, [ options ])).glw = void 0, _this6.quadBuffer = void 0, 
                        _this6.fQuadBuffer = void 0, _this6.uiQuadBuffer = void 0, _this6.rttQuadBuffer = null, 
                        _this6.fRttQuadBuffer = null, _this6.uiRttQuadBuffer = null, _this6.renderOps = [], 
                        _this6.coreTextRenderOps = [], _this6.curBufferIdx = 0, _this6.curRenderOp = null, 
                        _this6.rttNodes = [], _this6.activeRttNode = null, _this6.sdfBuffer = void 0, _this6.fSdfBuffer = void 0, 
                        _this6.uiSdfBuffer = void 0, _this6.sdfBufferIdx = 0, _this6.sdfQuadCount = 0, _this6.sdfQuadBufferCollection = void 0, 
                        _this6.curSdfRenderOp = null, _this6.needsFullUpload = !0, _this6.defaultTextureCoords = {
                            x1: 0,
                            y1: 0,
                            x2: 1,
                            y2: 1
                        }, _this6.defaultShaderNode = null, _this6.quadBufferCollection = void 0, _this6.indexBuffer = null, 
                        _this6.clearColor = {
                            raw: 0,
                            normalized: [ 0, 0, 0, 0 ]
                        }, _this6.quadBufferUsage = 0, _this6.numQuadsRendered = 0, _this6.lastUploadedBufferSize = 0, 
                        _this6.dirtyQuadCount = 0, _this6.renderToTextureActive = !1, _this6.quadBuffer = new ArrayBuffer(_this6.stage.options.quadBufferSize), 
                        _this6.fQuadBuffer = new Float32Array(_this6.quadBuffer), _this6.uiQuadBuffer = new Uint32Array(_this6.quadBuffer), 
                        _this6.sdfBuffer = new ArrayBuffer(524288), _this6.fSdfBuffer = new Float32Array(_this6.sdfBuffer), 
                        _this6.uiSdfBuffer = new Uint32Array(_this6.sdfBuffer), _this6.mode = "webgl";
                        var gl = createWebGLContext(options.canvas, options.forceWebGL2, options.contextSpy), glw = _this6.glw = new WebGlContextWrapper(gl, options.disableVertexArrayObject);
                        glw.viewport(0, 0, options.canvas.width, options.canvas.height), _this6.attachContextLossListeners(options.canvas), 
                        _this6.updateClearColor(_this6.stage.clearColor), glw.setBlend(!0), glw.blendFunc(glw.ONE, glw.ONE_MINUS_SRC_ALPHA), 
                        _this6.indexBuffer = function(glw, size) {
                            for (var maxQuads = Math.min(~~(size / 80), 16384), indices = new Uint16Array(6 * maxQuads), i = 0, j = 0; i < 6 * maxQuads; i += 6, 
                            j += 4) indices[i] = j, indices[i + 1] = j + 1, indices[i + 2] = j + 2, indices[i + 3] = j + 2, 
                            indices[i + 4] = j + 1, indices[i + 5] = j + 3;
                            var buffer = glw.createBuffer();
                            return glw.elementArrayBufferData(buffer, indices, glw.STATIC_DRAW), buffer;
                        }(glw, _this6.stage.bufferMemory);
                        for (var maxQuads = ~~(_this6.stage.bufferMemory / 80), nodeCoords = new Float32Array(8 * maxQuads), i = 0; i < 8 * maxQuads; i += 8) nodeCoords[i] = 0, 
                        nodeCoords[i + 1] = 0, nodeCoords[i + 2] = 1, nodeCoords[i + 3] = 0, nodeCoords[i + 4] = 0, 
                        nodeCoords[i + 5] = 1, nodeCoords[i + 6] = 1, nodeCoords[i + 7] = 1;
                        var nodeCoordsBuffer = glw.createBuffer();
                        glw.arrayBufferData(nodeCoordsBuffer, nodeCoords, glw.STATIC_DRAW);
                        var quadBuffer = glw.createBuffer(), stride = 5 * Float32Array.BYTES_PER_ELEMENT;
                        _this6.quadBufferCollection = new BufferCollection([ {
                            buffer: quadBuffer,
                            attributes: {
                                a_position: {
                                    name: "a_position",
                                    size: 2,
                                    type: glw.FLOAT,
                                    normalized: !1,
                                    stride: stride,
                                    offset: 0
                                },
                                a_textureCoords: {
                                    name: "a_textureCoords",
                                    size: 2,
                                    type: glw.FLOAT,
                                    normalized: !1,
                                    stride: stride,
                                    offset: 2 * Float32Array.BYTES_PER_ELEMENT
                                },
                                a_color: {
                                    name: "a_color",
                                    size: 4,
                                    type: glw.UNSIGNED_BYTE,
                                    normalized: !0,
                                    stride: stride,
                                    offset: 4 * Float32Array.BYTES_PER_ELEMENT
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
                        return _this6.sdfQuadBufferCollection = new BufferCollection([ {
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
                        } ]), _this6;
                    }
                    return _inherits(WebGlRenderer, _CoreRenderer), _createClass(WebGlRenderer, [ {
                        key: "attachContextLossListeners",
                        value: function(canvas) {
                            var _this7 = this;
                            "addEventListener" in canvas != !1 && canvas.addEventListener("webglcontextlost", function() {
                                _this7.stage.setContextLost();
                            });
                        }
                    }, {
                        key: "reset",
                        value: function() {
                            var glw = this.glw;
                            DIRTY_QUAD_BUFFER || (this.curBufferIdx = 0), this.curRenderOp = null, this.curSdfRenderOp = null, 
                            this.dirtyQuadCount = 0, this.sdfBufferIdx = 0, this.sdfQuadCount = 0, this.renderOps.length = 0, 
                            this.coreTextRenderOps.length = 0, glw.setScissorTest(!1), !1 !== this.stage.options.enableClear && glw.clear();
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
                            return textureSource instanceof SubTexture ? new WebGlCtxSubTexture(this.glw, this.stage.txMemManager, textureSource) : textureSource instanceof RenderTexture ? new WebGlCtxRenderTexture(this.glw, this.stage.txMemManager, textureSource) : new WebGlCtxTexture(this.glw, this.stage.txMemManager, textureSource);
                        }
                    }, {
                        key: "addQuad",
                        value: function(node) {
                            var f = this.fQuadBuffer, u = this.uiQuadBuffer;
                            !0 === this.renderToTextureActive && (null === this.fRttQuadBuffer && (this.rttQuadBuffer = new ArrayBuffer(this.stage.options.quadBufferSize), 
                            this.fRttQuadBuffer = new Float32Array(this.rttQuadBuffer), this.uiRttQuadBuffer = new Uint32Array(this.rttQuadBuffer)), 
                            f = this.fRttQuadBuffer, u = this.uiRttQuadBuffer), node.props.zIndex && this.flushTextRenderOps();
                            var props = node.props, tx = !0 === node.placeholderActive ? this.stage.defaultTexture : props.texture || this.stage.defaultTexture;
                            tx.type === TextureType.subTexture && (tx = tx.parentTexture);
                            var ctx = tx.ctxTexture;
                            if (void 0 !== ctx) {
                                var reuse = this.reuseRenderOp(node), isRTT = this.renderToTextureActive;
                                DIRTY_QUAD_BUFFER && !isRTT ? -1 === node.quadBufferIndex && (node.quadBufferIndex = this.curBufferIdx, 
                                this.curBufferIdx += 20) : (node.quadBufferIndex = this.curBufferIdx, this.curBufferIdx += 20);
                                var i = node.quadBufferIndex;
                                !1 === reuse && this.newRenderOp(node, i);
                                var tidx = this.curRenderOp.addTexture(ctx);
                                if (4294967295 === tidx && (this.newRenderOp(node, i), tidx = this.curRenderOp.addTexture(ctx)), 
                                !DIRTY_QUAD_BUFFER || isRTT || node.isQuadDirty) {
                                    DIRTY_QUAD_BUFFER && !1 === isRTT && !0 === node.isQuadDirty && this.dirtyQuadCount++;
                                    var rc = node.renderCoords, tc = node.textureCoords || this.defaultTextureCoords, cTl = node.premultipliedColorTl, cTr = node.premultipliedColorTr, cBl = node.premultipliedColorBl, cBr = node.premultipliedColorBr;
                                    f[i] = rc.x1, f[i + 1] = rc.y1, f[i + 2] = tc.x1, f[i + 3] = tc.y1, u[i + 4] = cTl, 
                                    f[i + 5] = rc.x2, f[i + 6] = rc.y2, f[i + 7] = tc.x2, f[i + 8] = tc.y1, u[i + 9] = cTr, 
                                    f[i + 10] = rc.x4, f[i + 11] = rc.y4, f[i + 12] = tc.x1, f[i + 13] = tc.y2, u[i + 14] = cBl, 
                                    f[i + 15] = rc.x3, f[i + 16] = rc.y3, f[i + 17] = tc.x2, f[i + 18] = tc.y2, u[i + 19] = cBr;
                                }
                                this.curRenderOp.numQuads++;
                            }
                        }
                    }, {
                        key: "newRenderOp",
                        value: function(node, bufferIdx) {
                            var curRenderOp = node;
                            curRenderOp.renderOpBufferIdx = bufferIdx, curRenderOp.numQuads = 0, curRenderOp.renderOpTextures.length = 0, 
                            this.curRenderOp = curRenderOp, this.renderOps.push(curRenderOp);
                        }
                    }, {
                        key: "reuseRenderOp",
                        value: function(node) {
                            var curRenderOp = this.curRenderOp;
                            if (null === curRenderOp) return !1;
                            if (curRenderOp.parentHasRenderTexture !== node.parentHasRenderTexture || !0 === curRenderOp.rtt != (!0 === node.props.rtt)) return !1;
                            if (!1 === compareRect(curRenderOp.clippingRect, node.clippingRect)) return !1;
                            var shader = node.props.shader, curShader = curRenderOp.shader;
                            if ("default" === curShader.shaderKey && "default" === shader.shaderKey) return !0;
                            if (curShader !== shader) return !1;
                            if (!0 === node.parentHasRenderTexture && null !== node.parentFramebufferDimensions) {
                                var curFbDims = curRenderOp.isCoreNode ? curRenderOp.parentFramebufferDimensions : curRenderOp.framebufferDimensions;
                                if (null === curFbDims || curFbDims.w !== node.parentFramebufferDimensions.w || curFbDims.h !== node.parentFramebufferDimensions.h) return !1;
                            }
                            return !1 !== curShader.program.reuseRenderOp(node, curRenderOp);
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
                        value: function(glyphs, glyphCount, fontScale, transform, color, worldAlpha, distanceRange, atlasTexture, clippingRect, width, height, parentHasRenderTexture, framebufferDimensions, sdfShader) {
                            if (0 !== glyphCount) {
                                var idx = this.sdfBufferIdx;
                                this.ensureSdfBufferCapacity(idx + 24 * glyphCount);
                                for (var f = this.fSdfBuffer, u = this.uiSdfBuffer, mergedColor = mergeColorAlpha(color, worldAlpha), packedColor = ((255 & mergedColor) << 24 | (mergedColor >>> 8 & 255) << 16 | (mergedColor >>> 16 & 255) << 8 | mergedColor >>> 24) >>> 0, m0 = transform[0] * fontScale, m1 = transform[1] * fontScale, m3 = transform[3] * fontScale, m4 = transform[4] * fontScale, m6 = transform[6], m7 = transform[7], startQuad = this.sdfQuadCount, go = 0, gi = 0; gi < glyphCount; gi++) {
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
                                this.sdfBufferIdx = idx, this.sdfQuadCount += glyphCount, this.finalizeSdfBatch(startQuad, glyphCount, atlasTexture, clippingRect, worldAlpha, width, height, parentHasRenderTexture, framebufferDimensions, sdfShader);
                            }
                        }
                    }, {
                        key: "addSdfCachedQuads",
                        value: function(cachedVertices, numGlyphs, atlasTexture, clippingRect, worldAlpha, width, height, parentHasRenderTexture, framebufferDimensions, sdfShader) {
                            if (0 !== numGlyphs) {
                                var startQuad = this.sdfQuadCount;
                                this.ensureSdfBufferCapacity(this.sdfBufferIdx + cachedVertices.length), this.fSdfBuffer.set(cachedVertices, this.sdfBufferIdx), 
                                this.sdfBufferIdx += cachedVertices.length, this.sdfQuadCount += numGlyphs, this.finalizeSdfBatch(startQuad, numGlyphs, atlasTexture, clippingRect, worldAlpha, width, height, parentHasRenderTexture, framebufferDimensions, sdfShader);
                            }
                        }
                    }, {
                        key: "finalizeSdfBatch",
                        value: function(startQuad, glyphCount, atlasTexture, clippingRect, worldAlpha, width, height, parentHasRenderTexture, framebufferDimensions, sdfShader) {
                            var opList = this.coreTextRenderOps, cur = this.curSdfRenderOp, canBatch = !1;
                            if (null !== cur && 1 === cur.renderOpTextures.length && cur.renderOpTextures[0] === atlasTexture && compareRect(cur.clippingRect, clippingRect) && cur.parentHasRenderTexture === parentHasRenderTexture && !1 === cur.rtt && (canBatch = !0), 
                            canBatch && null !== cur) cur.numQuads += glyphCount; else {
                                var op = new SdfRenderOp(this, sdfShader, this.sdfQuadBufferCollection, worldAlpha, clippingRect, width, height, !1, parentHasRenderTexture, framebufferDimensions);
                                op.startQuad = startQuad, op.numQuads = glyphCount, op.addTexture(atlasTexture), 
                                opList.push(op), this.curSdfRenderOp = op, this.curRenderOp = null;
                            }
                        }
                    }, {
                        key: "ensureSdfBufferCapacity",
                        value: function(requiredSize) {
                            if (!(requiredSize <= this.fSdfBuffer.length)) {
                                for (var newCapacity = 2 * this.fSdfBuffer.length; newCapacity < requiredSize; ) newCapacity *= 2;
                                var sdfBufSize = newCapacity * Float32Array.BYTES_PER_ELEMENT, newBuffer = new ArrayBuffer(sdfBufSize), newFSdfBuffer = new Float32Array(newBuffer), newUiSdfBuffer = new Uint32Array(newBuffer);
                                newFSdfBuffer.set(this.fSdfBuffer), this.sdfBuffer = newBuffer, this.fSdfBuffer = newFSdfBuffer, 
                                this.uiSdfBuffer = newUiSdfBuffer;
                            }
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
                                } else for (var _i = 0; _i < len; _i++) {
                                    var node = renderList[_i];
                                    if (node.isQuadDirty && -1 !== node.quadBufferIndex) {
                                        var byteOffset = node.quadBufferIndex * BYTES, view = new Float32Array(quadBuffer, byteOffset, 20);
                                        glw.arrayBufferSubData(buffer, byteOffset, view), node.isQuadDirty = !1;
                                    }
                                }
                            } else {
                                var _arr = new Float32Array(quadBuffer, 0, this.curBufferIdx);
                                glw.arrayBufferData(buffer, _arr, glw.STATIC_DRAW);
                            }
                            if (this.sdfBufferIdx > 0) {
                                var sdfBuf = this.sdfQuadBufferCollection.getBuffer("a_position") || null, sdfArr = new Float32Array(this.sdfBuffer, 0, this.sdfBufferIdx);
                                glw.arrayBufferData(sdfBuf, sdfArr, glw.DYNAMIC_DRAW);
                            }
                            for (var _i2 = 0, length = this.renderOps.length; _i2 < length; _i2++) this.renderOps[_i2].draw(this);
                            var BYTES_PER_ELEMENT = Float32Array.BYTES_PER_ELEMENT;
                            this.quadBufferUsage = this.curBufferIdx * BYTES_PER_ELEMENT;
                            var QUAD_SIZE_IN_BYTES = 5 * BYTES_PER_ELEMENT * 4;
                            this.numQuadsRendered = this.quadBufferUsage / QUAD_SIZE_IN_BYTES;
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
                        key: "renderToTexture",
                        value: function(node) {
                            for (var i = 0; i < this.rttNodes.length; i++) if (this.rttNodes[i] === node) return;
                            this.insertRTTNodeInOrder(node);
                        }
                    }, {
                        key: "insertRTTNodeInOrder",
                        value: function(node) {
                            for (var insertIndex = this.rttNodes.length, currentNode = node; currentNode && currentNode.parent; ) {
                                var parentIndex = this.rttNodes.indexOf(currentNode.parent);
                                if (-1 !== parentIndex) {
                                    insertIndex = parentIndex;
                                    break;
                                }
                                currentNode = currentNode.parent;
                            }
                            var maxChildIndex = this.findMaxChildRTTIndex(node);
                            -1 !== maxChildIndex && (insertIndex = Math.max(insertIndex, maxChildIndex + 1)), 
                            this.rttNodes.splice(insertIndex, 0, node);
                        }
                    }, {
                        key: "findMaxChildRTTIndex",
                        value: function(node) {
                            var _this8 = this, maxIndex = -1, _traverseChildren = function(currentNode) {
                                var currentIndex = _this8.rttNodes.indexOf(currentNode);
                                -1 !== currentIndex && (maxIndex = Math.max(maxIndex, currentIndex));
                                var _step7, _iterator7 = _createForOfIteratorHelper(currentNode.children);
                                try {
                                    for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
                                        var child = _step7.value;
                                        _traverseChildren(child);
                                    }
                                } catch (err) {
                                    _iterator7.e(err);
                                } finally {
                                    _iterator7.f();
                                }
                            };
                            return _traverseChildren(node), maxIndex;
                        }
                    }, {
                        key: "renderRTTNodes",
                        value: function() {
                            for (var glw = this.glw, savedBufferIdx = this.curBufferIdx, i = 0; i < this.rttNodes.length; i++) {
                                var node = this.rttNodes[i];
                                if (void 0 !== node && !1 !== node.hasRTTupdates && (0 !== node.worldAlpha && node.renderState !== CoreNodeRenderState.OutOfBounds && null !== node.texture && "loaded" === node.texture.state)) {
                                    this.activeRttNode = node;
                                    var ctxTexture = node.texture.ctxTexture;
                                    this.renderToTextureActive = !0, glw.bindFramebuffer(ctxTexture.framebuffer), glw.viewport(0, 0, ctxTexture.w, ctxTexture.h), 
                                    glw.clearColor(0, 0, 0, 0), glw.clear(), this.curBufferIdx = 0, this.needsFullUpload = !0, 
                                    this.lastUploadedBufferSize = 0, this.curRenderOp = null, this.curSdfRenderOp = null, 
                                    this.addRTTQuads(node), this.renderRTT(), this.renderOps.length = 0, this.coreTextRenderOps.length = 0, 
                                    node.hasRTTupdates = !1;
                                }
                            }
                            this.curBufferIdx = savedBufferIdx, this.needsFullUpload = !0, this.lastUploadedBufferSize = 0;
                            var clearColor = this.clearColor.normalized;
                            glw.clearColor(clearColor[0], clearColor[1], clearColor[2], clearColor[3]), glw.bindFramebuffer(null), 
                            glw.viewport(0, 0, this.glw.canvas.width, this.glw.canvas.height), this.renderToTextureActive = !1;
                        }
                    }, {
                        key: "addRTTQuads",
                        value: function(node) {
                            for (var children = node.children, i = 0, len = children.length; i < len; i++) {
                                var child = children[i];
                                void 0 !== child && 0 !== child.worldAlpha && child.renderState !== CoreNodeRenderState.OutOfBounds && (!0 === child.isRenderable && child.renderQuads(this), 
                                child.hasRTTupdates = !1, child.props.rtt || this.addRTTQuads(child));
                            }
                        }
                    }, {
                        key: "renderRTT",
                        value: function() {
                            this.flushTextRenderOps();
                            var glw = this.glw, buffer = this.quadBufferCollection.getBuffer("a_position") || null, arr = new Float32Array(this.rttQuadBuffer, 0, this.curBufferIdx);
                            if (glw.arrayBufferData(buffer, arr, glw.STATIC_DRAW), this.sdfBufferIdx > 0) {
                                var sdfBuf = this.sdfQuadBufferCollection.getBuffer("a_position") || null, sdfArr = new Float32Array(this.sdfBuffer, 0, this.sdfBufferIdx);
                                glw.arrayBufferData(sdfBuf, sdfArr, glw.DYNAMIC_DRAW);
                            }
                            for (var i = 0, length = this.renderOps.length; i < length; i++) this.renderOps[i].draw(this);
                        }
                    }, {
                        key: "updateViewport",
                        value: function() {
                            this.glw.viewport(0, 0, this.glw.canvas.width, this.glw.canvas.height);
                        }
                    }, {
                        key: "removeRTTNode",
                        value: function(node) {
                            var index = this.rttNodes.indexOf(node);
                            -1 !== index && this.rttNodes.splice(index, 1);
                        }
                    }, {
                        key: "getBufferInfo",
                        value: function() {
                            return {
                                totalAvailable: this.stage.options.quadBufferSize,
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
                                            x2 = (x1 = (1 - desiredSize / dimensions.w) * (null !== (_resizeMode$clipX = resizeMode.clipX) && void 0 !== _resizeMode$clipX ? _resizeMode$clipX : .5)) + desiredSize / dimensions.w;
                                        }
                                        if (scaleY < scale) {
                                            var _resizeMode$clipY, _desiredSize = precision * node.props.h;
                                            y2 = (y1 = (1 - _desiredSize / dimensions.h) * (null !== (_resizeMode$clipY = resizeMode.clipY) && void 0 !== _resizeMode$clipY ? _resizeMode$clipY : .5)) + _desiredSize / dimensions.h;
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
                                    return {
                                        x1: x1,
                                        y1: y1,
                                        x2: x2,
                                        y2: y2
                                    };
                                }
                            }
                        }
                    }, {
                        key: "invalidateQuadBuffer",
                        value: function() {
                            if (DIRTY_QUAD_BUFFER) {
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
                    vertex: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    // Pre-transformed world-pixel position\n    attribute vec2 a_position;\n    attribute vec2 a_textureCoords;\n    // Per-vertex color (RGBA, unsigned byte, normalized)\n    attribute vec4 a_color;\n    // Per-vertex SDF distance range\n    attribute float a_distRange;\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n\n    varying vec2 v_texcoord;\n    varying float v_scaledDistRange;\n    varying vec4 v_color;\n\n    void main() {\n      // a_position is already in world pixel space (pre-transformed on CPU)\n      vec2 screenSpace = (a_position * u_pixelRatio / u_resolution * 2.0 - 1.0) * vec2(1, -1);\n\n      gl_Position = vec4(screenSpace, 0.0, 1.0);\n      v_texcoord = a_textureCoords;\n      v_scaledDistRange = a_distRange * u_pixelRatio;\n      v_color = a_color;\n    }\n  ",
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
                        var ct = cache.transform, t = renderProps.globalTransform;
                        if (cache.layoutRef === layout && cache.color === renderProps.color && cache.alpha === renderProps.worldAlpha && ct[0] === t[0] && ct[1] === t[1] && ct[2] === t[3] && ct[3] === t[4] && ct[4] === t[6] && ct[5] === t[7]) return webGlRenderer.addSdfCachedQuads(cache.vertices, cache.glyphCount, ctxTexture, renderProps.clippingRect, renderProps.worldAlpha, layout.width, layout.height, renderProps.parentHasRenderTexture, renderProps.framebufferDimensions, shader), 
                        null;
                    }
                    var startIdx = webGlRenderer.sdfBufferIdx;
                    if (webGlRenderer.addSdfQuads(layout.glyphs, layout.glyphCount, layout.fontScale, renderProps.globalTransform, renderProps.color, renderProps.worldAlpha, layout.distanceRange, ctxTexture, renderProps.clippingRect, layout.width, layout.height, renderProps.parentHasRenderTexture, renderProps.framebufferDimensions, shader), 
                    void 0 !== cache) {
                        var endIdx = webGlRenderer.sdfBufferIdx, len = endIdx - startIdx;
                        if (len > 0) {
                            null !== cache.vertices && cache.vertices.length === len || (cache.vertices = new Float32Array(len)), 
                            cache.vertices.set(webGlRenderer.fSdfBuffer.subarray(startIdx, endIdx)), cache.glyphCount = layout.glyphCount, 
                            cache.color = renderProps.color, cache.alpha = renderProps.worldAlpha, cache.layoutRef = layout;
                            var _t4 = renderProps.globalTransform, _ct = cache.transform;
                            _ct[0] = _t4[0], _ct[1] = _t4[1], _ct[2] = _t4[3], _ct[3] = _t4[4], _ct[4] = _t4[6], 
                            _ct[5] = _t4[7];
                        }
                    }
                    return null;
                }, generateTextLayout = function(props, fontCache) {
                    for (var fontSize = props.fontSize, fontFamily = props.fontFamily, metrics = getFontMetrics$1(fontFamily, fontSize), fontData = fontCache.data, commonFontData = fontData.common, designFontSize = fontData.info.size, atlasBase = commonFontData.base, lineHeight = props.lineHeight, invAtlasWidth = 1 / commonFontData.scaleW, invAtlasHeight = 1 / commonFontData.scaleH, glyphMap = fontCache.glyphMap, kernings = fontCache.kernings, fontScale = fontSize / designFontSize, letterSpacing = props.letterSpacing / fontScale, maxWidth = props.maxWidth / fontScale, maxHeight = props.maxHeight, _mapTextLayout2 = _slicedToArray(mapTextLayout(measureText$1, metrics, props.text, props.textAlign, fontFamily, lineHeight, props.overflowSuffix, props.wordBreak, letterSpacing, props.maxLines, maxWidth, maxHeight), 7), lines = _mapTextLayout2[0], lineHeightPx = (_mapTextLayout2[1], 
                    _mapTextLayout2[2], _mapTextLayout2[3], _mapTextLayout2[4]), effectiveWidth = _mapTextLayout2[5], effectiveHeight = _mapTextLayout2[6], lineAmount = lines.length, maxGlyphs = 0, i = 0; i < lineAmount; i++) maxGlyphs += lines[i][0].length;
                    for (var glyphs = new Float32Array(8 * maxGlyphs), glyphIdx = 0, glyphCount = 0, currentX = 0, baselineY = 0, _i3 = 0; _i3 < lineAmount; _i3++) {
                        var line = lines[_i3], textLine = line[0], textLineLength = textLine.length, prevGlyphId = 0;
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
                    var fontFamily = options.fontFamily, fontUrl = options.fontUrl, metrics = options.metrics;
                    if (!0 === fontCache.has(fontFamily)) return Promise.resolve();
                    var existingPromise = fontLoadPromises.get(fontFamily);
                    if (void 0 !== existingPromise) return existingPromise;
                    var nwff = nodesWaitingForFont[fontFamily] = [], loadPromise = new FontFace(fontFamily, "url(".concat(fontUrl, ")")).load().then(function(loadedFont) {
                        for (var key in stage.platform.addFont(loadedFont), processFontData(fontFamily, loadedFont, metrics), 
                        fontLoadPromises.delete(fontFamily), nwff) nwff[key].setUpdateType(UpdateType.Local);
                        delete nodesWaitingForFont[fontFamily];
                    }).catch(function(error) {
                        throw fontLoadPromises.delete(fontFamily), console.error("Failed to load font: ".concat(fontFamily), error), 
                        error;
                    });
                    return fontLoadPromises.set(fontFamily, loadPromise), loadPromise;
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
                    return 0 === letterSpacing ? measureContext$1.measureText(text).width : !1 === hasZeroWidthSpace(text) ? measureContext$1.measureText(text).width + letterSpacing * text.length : text.split("").reduce(function(acc, char) {
                        return !0 === hasZeroWidthSpace(char) ? acc : acc + measureContext$1.measureText(char).width + letterSpacing;
                    }, 0);
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
                }, CanvasTexture = function(_CoreContextTexture2) {
                    function CanvasTexture() {
                        for (var _this9, _len2 = arguments.length, _args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) _args[_key2] = arguments[_key2];
                        return (_this9 = _callSuper(this, CanvasTexture, [].concat(_args))).image = void 0, 
                        _this9.tintCache = void 0, _this9;
                    }
                    return _inherits(CanvasTexture, _CoreContextTexture2), _createClass(CanvasTexture, [ {
                        key: "load",
                        value: (_load2 = _asyncToGenerator(_regenerator().m(function _callee6() {
                            var textureData, size, _t5;
                            return _regenerator().w(function(_context7) {
                                for (;;) switch (_context7.p = _context7.n) {
                                  case 0:
                                    return null == (textureData = this.textureSource.textureData) || textureData.data, 
                                    this.textureSource.setState("loading"), _context7.p = 1, _context7.n = 2, this.onLoadRequest(textureData.data);

                                  case 2:
                                    if (size = _context7.v, "freed" !== this.textureSource.state) {
                                        _context7.n = 3;
                                        break;
                                    }
                                    return this.image = void 0, _context7.a(2);

                                  case 3:
                                    this.textureSource.setState("loaded", size), this.textureSource.freeTextureData(), 
                                    this.updateMemSize(), _context7.n = 5;
                                    break;

                                  case 4:
                                    throw _context7.p = 4, _t5 = _context7.v, this.textureSource.setState("failed", _t5), 
                                    this.textureSource.freeTextureData(), _t5;

                                  case 5:
                                    return _context7.a(2);
                                }
                            }, _callee6, this, [ [ 1, 4 ] ]);
                        })), function() {
                            return _load2.apply(this, arguments);
                        })
                    }, {
                        key: "release",
                        value: function() {
                            this.image = void 0, this.tintCache = void 0;
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
                        value: (_onLoadRequest4 = _asyncToGenerator(_regenerator().m(function _callee7(data) {
                            var _canvas, ctx;
                            return _regenerator().w(function(_context8) {
                                for (;;) switch (_context8.n) {
                                  case 0:
                                    if (null !== data) {
                                        _context8.n = 1;
                                        break;
                                    }
                                    throw new Error("CanvasTexture: Texture data is null");

                                  case 1:
                                    if ("object" !== _typeof(data) || !("mipmaps" in data)) {
                                        _context8.n = 2;
                                        break;
                                    }
                                    throw new Error("CanvasTexture: Compressed texture data is not supported in Canvas2D render mode");

                                  case 2:
                                    if (!(data instanceof ImageData)) {
                                        _context8.n = 3;
                                        break;
                                    }
                                    return (_canvas = document.createElement("canvas")).width = data.width, _canvas.height = data.height, 
                                    null !== (ctx = _canvas.getContext("2d")) && ctx.putImageData(data, 0, 0), this.image = _canvas, 
                                    _context8.a(2, {
                                        w: data.width,
                                        h: data.height
                                    });

                                  case 3:
                                    if (!("undefined" != typeof ImageBitmap && data instanceof ImageBitmap || data instanceof HTMLImageElement)) {
                                        _context8.n = 4;
                                        break;
                                    }
                                    return this.image = data, _context8.a(2, {
                                        w: data.width,
                                        h: data.height
                                    });

                                  case 4:
                                    return _context8.a(2, {
                                        w: 0,
                                        h: 0
                                    });
                                }
                            }, _callee7, this);
                        })), function(_x) {
                            return _onLoadRequest4.apply(this, arguments);
                        })
                    } ]);
                    var _onLoadRequest4, _load2;
                }(CoreContextTexture), parsedArgbColors = new Map, parsedRgbaColors = new Map, CanvasShaderNode = function(_CoreShaderNode2) {
                    function CanvasShaderNode(shaderKey, config, stage, props) {
                        var _this0;
                        if ((_this0 = _callSuper(this, CanvasShaderNode, [ shaderKey, config, stage, props ])).updater = void 0, 
                        _this0.computed = {}, _this0.applySNR = void 0, _this0.render = void 0, _this0.applySNR = config.saveAndRestore || !1, 
                        _this0.render = config.render, void 0 !== config.update) {
                            if (_this0.updater = config.update, void 0 === _this0.props) return _this0.updater(_this0.node, _this0.props), 
                            _possibleConstructorReturn(_this0);
                            _this0.update = function() {
                                var prevKey = _this0.valueKey;
                                if (_this0.valueKey = _this0.createValueKey(), prevKey !== _this0.valueKey) {
                                    prevKey.length > 0 && _this0.stage.shManager.mutateShaderValueUsage(prevKey, -1);
                                    var computed = _this0.stage.shManager.getShaderValues(_this0.valueKey);
                                    void 0 !== computed && (_this0.computed = computed), _this0.computed = {}, _this0.updater(_this0.node), 
                                    _this0.stage.shManager.setShaderValues(_this0.valueKey, _this0.computed);
                                }
                            };
                        }
                        return _this0;
                    }
                    return _inherits(CanvasShaderNode, _CoreShaderNode2), _createClass(CanvasShaderNode, [ {
                        key: "toColorString",
                        value: function(rgba) {
                            return normalizeCanvasColor(rgba, !0);
                        }
                    } ]);
                }(CoreShaderNode), CanvasRenderer = function(_CoreRenderer2) {
                    function CanvasRenderer(options) {
                        var _this1;
                        (_this1 = _callSuper(this, CanvasRenderer, [ options ])).context = void 0, _this1.canvas = void 0, 
                        _this1.pixelRatio = void 0, _this1.clearColor = void 0, _this1.renderToTextureActive = !1, 
                        _this1.activeRttNode = null, _this1.mode = "canvas";
                        var canvas = options.canvas;
                        return _this1.canvas = canvas, _this1.context = canvas.getContext("2d"), _this1.pixelRatio = _this1.stage.pixelRatio, 
                        _this1.clearColor = normalizeCanvasColor(_this1.stage.clearColor), _this1;
                    }
                    return _inherits(CanvasRenderer, _CoreRenderer2), _createClass(CanvasRenderer, [ {
                        key: "reset",
                        value: function() {
                            this.canvas.width = this.canvas.width;
                            var ctx = this.context;
                            this.clearColor && (ctx.fillStyle = this.clearColor, ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)), 
                            ctx.scale(this.pixelRatio, this.pixelRatio);
                        }
                    }, {
                        key: "render",
                        value: function() {}
                    }, {
                        key: "addQuad",
                        value: function(node) {
                            var _this10 = this, ctx = this.context, _node$globalTransform = node.globalTransform, tx = _node$globalTransform.tx, ty = _node$globalTransform.ty, ta = _node$globalTransform.ta, tb = _node$globalTransform.tb, tc = _node$globalTransform.tc, td = _node$globalTransform.td, clippingRect = node.clippingRect, texture = !0 === node.placeholderActive ? this.stage.defaultTexture : node.props.texture || this.stage.defaultTexture;
                            if (null !== texture) {
                                var textureType = texture.type;
                                if (textureType !== TextureType.image && textureType !== TextureType.subTexture && textureType !== TextureType.color && textureType !== TextureType.noise) return;
                            }
                            var hasTransform = 1 !== ta, clippingValid = !0 === clippingRect.valid;
                            if (!0 !== clippingValid || 0 !== clippingRect.w || 0 !== clippingRect.h) {
                                var hasClipping = !0 === clippingValid && 0 !== clippingRect.w && 0 !== clippingRect.h, shader = node.props.shader, hasShader = null !== shader, saveAndRestore = !0 === hasTransform || !0 === hasClipping;
                                if (!0 === hasShader && (saveAndRestore = saveAndRestore || shader.applySNR), saveAndRestore && ctx.save(), 
                                !0 === hasClipping) {
                                    var path = new Path2D, x = clippingRect.x, y = clippingRect.y, w = clippingRect.w, h = clippingRect.h;
                                    path.rect(x, y, w, h), ctx.clip(path);
                                }
                                if (!0 === hasTransform) {
                                    var scale = this.pixelRatio;
                                    ctx.setTransform(ta, tc, tb, td, tx * scale, ty * scale), ctx.scale(scale, scale), 
                                    ctx.translate(-tx, -ty);
                                }
                                if (!0 === hasShader) {
                                    var renderContext = function() {
                                        _this10.renderContext(node, texture);
                                    };
                                    shader.render(ctx, node, renderContext), renderContext = null;
                                } else this.renderContext(node, texture);
                                saveAndRestore && ctx.restore();
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
                                var _tintColor$a, image, tintColor = 4294967295 === (abgr = color) ? WHITE : {
                                    isWhite: !1,
                                    a: (abgr >>> 24 & 255) / 255,
                                    r: 255 & abgr,
                                    g: abgr >>> 8 & 255,
                                    b: abgr >>> 16 & 255
                                };
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
                        key: "renderRTTNodes",
                        value: function() {}
                    }, {
                        key: "removeRTTNode",
                        value: function(_node) {}
                    }, {
                        key: "renderToTexture",
                        value: function(_node) {}
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
                            this.clearColor = normalizeCanvasColor(color);
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
                                            x2 = (x1 = (1 - desiredSize / dimensions.w) * (null !== (_resizeMode$clipX = resizeMode.clipX) && void 0 !== _resizeMode$clipX ? _resizeMode$clipX : .5)) + desiredSize / dimensions.w;
                                        }
                                        if (scaleY < scale) {
                                            var _resizeMode$clipY, _desiredSize2 = precision * node.props.h;
                                            y2 = (y1 = (1 - _desiredSize2 / dimensions.h) * (null !== (_resizeMode$clipY = resizeMode.clipY) && void 0 !== _resizeMode$clipY ? _resizeMode$clipY : .5)) + _desiredSize2 / dimensions.h;
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
                    return mergeProps$1(props, {
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
                    var savedFocusedElement, key = props.id || props.path, cached = keepAliveRouteCache.get(key);
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
                        savedFocusedElement = activeElement(), elm.alpha = 0;
                    }), onRender = chainFunctions(props.onRender, function(elm) {
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
                    } : void 0, routeElement = createComponent(Route, mergeProps(props, {
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
                    atlasDataUrl: "/solid-demo-app/156/fonts/Roboto-Regular.msdf.json",
                    atlasUrl: "/solid-demo-app/156/fonts/Roboto-Regular.msdf.png",
                    metrics: {
                        ascender: 1e3,
                        descender: 100,
                        lineGap: 0,
                        unitsPerEm: 1e3
                    }
                }, {
                    type: "msdf",
                    fontFamily: "Roboto700",
                    atlasDataUrl: "/solid-demo-app/156/fonts/Roboto-Bold.msdf.json",
                    atlasUrl: "/solid-demo-app/156/fonts/Roboto-Bold.msdf.png",
                    metrics: {
                        ascender: 1e3,
                        descender: 100,
                        lineGap: 0,
                        unitsPerEm: 1e3
                    }
                }, {
                    type: "msdf",
                    fontFamily: "Arial",
                    atlasDataUrl: "/solid-demo-app/156/fonts/Roboto-Regular.msdf.json",
                    atlasUrl: "/solid-demo-app/156/fonts/Roboto-Regular.msdf.png"
                }, {
                    type: "msdf",
                    fontFamily: "Raleway",
                    atlasDataUrl: "/solid-demo-app/156/fonts/Raleway-ExtraBold.msdf.json",
                    atlasUrl: "/solid-demo-app/156/fonts/Raleway-ExtraBold.msdf.png"
                }, {
                    fontFamily: "Roboto",
                    fontUrl: "/solid-demo-app/156/fonts/Roboto-Regular.ttf"
                }, {
                    fontFamily: "Roboto700",
                    fontUrl: "/solid-demo-app/156/fonts/Roboto-Bold.ttf"
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
                        var _step8, _iterator8 = _createForOfIteratorHelper(res || []);
                        try {
                            for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
                                var item = _step8.value;
                                "rejected" === item.status && handlePreloadError(item.reason);
                            }
                        } catch (err) {
                            _iterator8.e(err);
                        } finally {
                            _iterator8.f();
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
                        return _context.import("./Player-legacy-Cx0O77zj.js");
                    }, void 0);
                }), Grid = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Grid-legacy-Bgr1NFN_.js");
                    }, void 0);
                }), Loops = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Loops-legacy-DSzCR4M_.js");
                    }, void 0);
                }), Infinite = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Infinite-legacy-BXuT4PmF.js");
                    }, void 0);
                }), TMDBGrid = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./TMDBGrid-legacy-Pkn-igAX.js");
                    }, void 0);
                }), Portal = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Portal-legacy-CeCfN0M3.js");
                    }, void 0);
                }), MatrixPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Matrix-legacy-LGPJR5xi.js");
                    }, void 0);
                }), TextPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Text-legacy-DkmQXCP-.js");
                    }, void 0);
                }), TextPosterPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./TextPoster-legacy-Cg5eMVsR.js");
                    }, void 0);
                }), CreatePage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Create-legacy-BMifLFxg.js");
                    }, void 0);
                }), ViewportPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Viewport-legacy-Y1QhF0Wy.js");
                    }, void 0);
                }), PositioningPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Positioning-legacy-k_MRRnTq.js");
                    }, void 0);
                }), LayoutPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Layout-legacy-BsyvYQoI.js");
                    }, void 0);
                }), FocusBasicsPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./FocusBasics-legacy-DMNYFUfb.js");
                    }, void 0);
                }), KeyHandlingPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./KeyHandling-legacy-CHdpQxoT.js");
                    }, void 0);
                }), TransitionsPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Transitions-legacy-Bu84Qtli.js");
                    }, void 0);
                }), ComponentsPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Components-legacy-lcuuCSIf.js");
                    }, void 0);
                }), FocusHandlingPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./FocusHandling-legacy-D7pGjpwn.js");
                    }, void 0);
                }), GradientsPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Gradients-legacy-BYcGvyr_.js");
                    }, void 0);
                }), FlexPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Flex-legacy-DY4cvrZZ.js");
                    }, void 0);
                }), FlexGrowPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./FlexGrow-legacy-DCtQH7Le.js");
                    }, void 0);
                }), FlexMenuPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./FlexMenu-legacy-Dy5Hbls4.js");
                    }, void 0);
                }), FlexSizePage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./FlexSize-legacy-BDbzjVzX.js");
                    }, void 0);
                }), FlexColumnSizePage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./FlexColumnSize-legacy-DeTCbz4S.js");
                    }, void 0);
                }), FlexColumnPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./FlexColumn-legacy-CJMAJoAk.js");
                    }, void 0);
                }), ButtonsMaterialPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./ButtonsMaterial-legacy-CvvGH8tY.js");
                    }, void 0);
                }), SuperFlexPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./SuperFlex-legacy-Bi_03uuW.js");
                    }, void 0);
                }), Entity = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Entity-legacy-BkDZmwm5.js");
                    }, void 0);
                }), People = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./People-legacy-DCVnrekB.js");
                    }, void 0);
                }), FireboltPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Firebolt-legacy-DXnuiP8h.js");
                    }, void 0);
                }), LoginPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Login-legacy-An0SkN3S.js");
                    }, void 0);
                }), VirtualPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Virtual-legacy-B2kh1XXZ.js");
                    }, void 0);
                }), TagsPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Tags-legacy-mhLH1pmx.js");
                    }, void 0);
                }), ImagePerformance = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./ImagePerformance-legacy-jjLx2peg.js");
                    }, void 0);
                }), LargeImagePerformance = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./LargeImagePerformance-legacy-DBsqFQP-.js");
                    }, void 0);
                }), MixedImagePerformance = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./MixedImagePerformance-legacy-CmWULMKP.js");
                    }, void 0);
                }), TextureCompressionPerformance = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./TextureCompressionPerformance-legacy-BYJW7jHy.js");
                    }, void 0);
                }), ComplexFlexPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./ComplexFlex-legacy-wDwj3Pwa.js");
                    }, void 0);
                }), ComplexFlexCapsPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./ComplexFlexCaps-legacy-Davu2P1J.js");
                    }, void 0);
                }), BenchmarkPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Benchmark-legacy-B66n6qed.js");
                    }, void 0);
                }), RendererVersionsPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./RendererVersions-legacy-CYJUnR3w.js");
                    }, void 0);
                }), TextCenteringPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./TextCentering-legacy-CsKQtB2-.js");
                    }, void 0);
                }), CountdownTimerPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./CountdownTimer-legacy-mp_-pQPW.js");
                    }, void 0);
                }), CustomButtonsPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./CustomButtons-legacy-BbnldS5O.js");
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
                                                                    return _context.import("./Nested-legacy-DCxiSTnz.js");
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
                                                                    return _context.import("./KeepAlive-legacy-R_8P9Tol.js");
                                                                }, void 0);
                                                            });
                                                        }
                                                    }), createComponent(Route, {
                                                        path: "suspense",
                                                        get component() {
                                                            return lazy(function() {
                                                                return __vitePreload(function() {
                                                                    return _context.import("./suspense-legacy-nI5pPJeB.js");
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