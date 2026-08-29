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
    function _callSuper(t, o, e) {
        return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
    }
    function _possibleConstructorReturn(t, e) {
        if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        return _assertThisInitialized(t);
    }
    function _assertThisInitialized(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
    }
    function _isNativeReflectConstruct() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        } catch (t) {}
        return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
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
    function _createForOfIteratorHelper(r, e) {
        var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
        if (!t) {
            if (Array.isArray(r) || (t = _unsupportedIterableToArray2(r)) || e && r && "number" == typeof r.length) {
                t && (r = t);
                var _n = 0, F = function F() {};
                return {
                    s: F,
                    n: function n() {
                        return _n >= r.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: r[_n++]
                        };
                    },
                    e: function e(r) {
                        throw r;
                    },
                    f: F
                };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var o, a = !0, u = !1;
        return {
            s: function s() {
                t = t.call(r);
            },
            n: function n() {
                var r = t.next();
                return a = r.done, r;
            },
            e: function e(r) {
                u = !0, o = r;
            },
            f: function f() {
                try {
                    a || null == t.return || t.return();
                } finally {
                    if (u) throw o;
                }
            }
        };
    }
    function _unsupportedIterableToArray2(r, a) {
        if (r) {
            if ("string" == typeof r) return _arrayLikeToArray2(r, a);
            var t = {}.toString.call(r).slice(8, -1);
            return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray2(r, a) : void 0;
        }
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
    function _typeof(o) {
        "@babel/helpers - typeof";
        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
            return typeof o;
        } : function(o) {
            return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
        }, _typeof(o);
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
        var i = _toPrimitive(t, "string");
        return "symbol" == _typeof(i) ? i : i + "";
    }
    function _toPrimitive(t, r) {
        if ("object" != _typeof(t) || !t) return t;
        var e = t[Symbol.toPrimitive];
        if (void 0 !== e) {
            var i = e.call(t, r || "default");
            if ("object" != _typeof(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === r ? String : Number)(t);
    }
    System.register([ "./render-legacy-C75jKPoW.js", "./utils-legacy-k1OK4H3A.js", "./mergeProps-legacy-CDlswesM.js", "./announcer-legacy-BeCRktsl.js", "./web-legacy-Dt_TNc5h.js", "./Lazy-legacy-DkANv7ac.js", "./chainFunctions-legacy-BWcoWg5K.js", "./Column-legacy-CcQuWn8X.js", "./FPSCounter-legacy-D9IRnl8z.js", "./ContentBlock-legacy-BLx9sAkJ.js", "./createFocusStack-legacy-wB_0AOqr.js", "./components-legacy-AAqa399G.js", "./Icon-legacy-Ceh57QC-.js", "./routing-legacy-BMmc0K0N.js", "./theme-legacy-CRa-Zkyx.js", "./styles-legacy-BOzjtbic.js", "./state-legacy-DghrRWJ1.js", "./dist-legacy-g1QDJ07U.js", "./api-legacy-CQ6iaaWY.js", "./ItemFormatter-legacy-DdRxF7y_.js" ], function(_export, _context) {
        "use strict";
        var onMount, isElementNode, compareRect, Config, assertTruthy, DIRTY_QUAD_BUFFER, createRoot, createMemo, batch, getListener, children, Show, activeElement, createWebGLContext, onCleanup, hasFocus, clampUnit, isFunction, TextureType, createEffect, createResource, mergeProps, getOwner, on, ElementNode, WORDS_PER_QUAD, createElement, loadFonts, isHTMLImageElement, effect, defaultFontMetrics, memo, CoreShaderNode, rootNode, uploadCompressedTexture, use, UNIT_TEXTURE_COORDS, spread, MAX_QUAD_BUFFER_SIZE, createComponent, untrack, mergeColorAlpha, insert, mapTextLayout, setProp, MAX_QUADS, sharedConfig, createRenderer, takeCanvasPrefetch, UpdateType, createSignal, createTextNode, takeSdfPrefetch, runWithOwner, insertNode, normalizeFontMetrics, focusPath, createIndexBuffer, getNormalizedRgbaComponents, renderer, calcFactoredRadiusArray, useFocusManager, createTextureCoords, createComputed, combineStyles, clamp, mergeProps$1, createScheduled, throttle, Announcer, voidFn, LazyRow, LazyColumn, withScrolling, navigableForwardFocus, navigableHandleNavigation, chainRefs, chainFunctions, Column, setupFPS, FPSCounter, ContentBlock, useFocusStack, FocusStackProvider, TitleRow, Hero, List, Thumbnail, AssetPanel, Icon, saveCurrentDepth, createRouterContext, setInPreloadFn, useNavigate, notifyIfNotBlocked, keepDepth, createRouteContext, useLocation, createBeforeLeave, RouterContextObj, getIntent, usePreloadRoute, createBranches, getRouteMatches, RouteContextObj, useMatch, theme_default, styles_default, setGlobalBackground, globalBackground, debounce, getImageUrl, api_default, convertItemsToTiles, __vite_style__, __create, __defProp, __getOwnPropDesc, __getOwnPropNames, __getProtoOf, __hasOwnProp, __commonJSMin, __exportAll, __copyProps, __toESM, CoreContextTexture, CoreRenderer, validateArrayLength4, BorderTemplate, HolePunchTemplate, RoundedTemplate, ShadowTemplate, LinearGradientTemplate, RadialGradientTemplate, Default, WebGlShaderNode, WebGlShaderProgram, Rounded, props$2, RoundedWithBorderTemplate, RoundedWithBorder, props$1, RoundedWithBorderAndShadowTemplate, RoundedWithBorderAndShadow, props, RoundedWithShadowTemplate, RoundedWithShadow, HolePunch, LinearGradient, RadialGradient, RadialProgressTemplate, RadialProgress, invisibleChars, SdfFontHandler_exports, MAX_FONT_LOAD_RETRIES, fontCache$1, fontLoadPromises$1, normalizedMetrics$1, nodesWaitingForFont$1, initialized$1, buildKerningTable, buildGlyphMap, processFontData$1, canRenderFont$1, loadFont$1, waitingForFont$1, stopWaitingForFont$1, getFontFamilies$1, init$3, type$3, isFontLoaded$1, getFontMetrics$1, processFontMetrics$1, _getAtlas, _getFontData, _getMaxCharHeight, _getLoadedFonts, _unloadFont, measureText$1, CoreRenderOp, SdfRenderOp, TRANSPARENT_TEXTURE_DATA, WebGlCtxTexture, WebGlCtxSubTexture, BufferCollection, WebGlContextWrapper, GL_OUT_OF_MEMORY, MAX_DRAINED_GL_ERRORS, FULL_UPLOAD_DIRTY_RATIO, FLOATS_PER_GLYPH, SDF_BUFFER_SIZE, MAX_SDF_BUFFER_FLOATS, WebGlRenderer, Sdf, type$2, sdfShader, maxLayoutCacheSize$1, init$2, getSdfShader, font$1, layoutCache$1, getLayoutCacheKey, renderText$1, addQuads$1, renderQuads$1, generateTextLayout, cleanup$1, SdfTextRenderer, CanvasFontHandler_exports, fontFamilies, fontLoadPromises, normalizedMetrics, nodesWaitingForFont, fontCache, initialized, measureContext$1, _canRenderFont, processFontData, _loadFont, _getFontFamilies, init$1, type$1, _isFontLoaded, _waitingForFont, _stopWaitingForFont, _getFontMetrics, _processFontMetrics, _measureText, type, font, canvas, context, measureCanvas, measureContext, layoutCache, maxLayoutCacheSize, init, renderText, clearLayoutCache, cleanup, addQuads, renderQuads, CanvasTextRenderer, WHITE, SCRATCH, CanvasTexture, parsedArgbColors, parsedRgbaColors, CanvasShaderNode, CanvasRenderer, doOnce, useAnnouncer, isClient, isDev, noop, tryOnCleanup, createCallbackStack, PASSIVE, DEFAULT_MOUSE_POSITION, useMousePosition, cursorVisible, setCursorVisible, scrollTimeout, handleScroll, columnScroll, rowStyles, createRouterComponent, createOutlet, Route, SUPPORTS_PROXY, collectDynamicParams, keepAliveElements, keepAliveRouteElements, _storeKeepAlive, storeKeepAlive, storeKeepAliveRoute, createKeepAliveComponent, KeepAlive, KeepAliveRouteInternal, keepAliveRouteCache, KeepAliveRoute, App, Browse, TMDB, Destroy, handleResults, fetchPopular, genreListCache, fetchGenreMovies, NotFound, fonts_default, cache, NavDrawer_styles_default, NavButtonTextStyles, LeftNavWrapper, scriptRel, assetsURL, seen, __vitePreload, Player, Grid, Loops, Infinite, TMDBGrid, Portal, MatrixPage, TextPage, TextPosterPage, CreatePage, ViewportPage, PositioningPage, LayoutPage, FocusBasicsPage, KeyHandlingPage, TransitionsPage, ComponentsPage, FocusHandlingPage, GradientsPage, FlexPage, FlexGrowPage, FlexMenuPage, FlexSizePage, FlexColumnSizePage, FlexColumnPage, ButtonsMaterialPage, SuperFlexPage, Entity, People, FireboltPage, LoginPage, VirtualPage, TagsPage, ImagePerformance, LargeImagePerformance, MixedImagePerformance, TextureCompressionPerformance, ComplexFlexPage, ComplexFlexCapsPage, BenchmarkPage, RendererVersionsPage, TextCenteringPage, CountdownTimerPage, CustomButtonsPage, numImageWorkers, urlParams, numWorkers, screenSize, rendererMode, animationsEnabled, enableContextSpy, forceWebGL2, textBaseline, devicePhysicalPixelRatio, textureProcessingTimeLimitParam;
        function getBorderProps(prefix) {
            var pf = prefix && prefix.length > 0 ? "".concat(prefix, "-") : "";
            var w = pf + "w";
            return _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, w, {
                default: [ 0, 0, 0, 0 ],
                resolve: function resolve(value) {
                    if (value !== void 0) return validateArrayLength4(value);
                    return [].concat(this.default);
                }
            }), pf + "color", 4294967295), pf + "align", {
                default: 1,
                resolve: function resolve(value) {
                    if (!isNaN(value)) return value;
                    if (typeof value === "string") switch (value) {
                      case "inside":
                        return 0;

                      case "center":
                        return .5;

                      case "outside":
                        return 1;
                    }
                    return this.default;
                }
            }), pf + "gap", 0), pf + "top", {
                default: 0,
                set: function set(value, props) {
                    props[w][0] = value;
                },
                get: function get(props) {
                    return props[w][0];
                }
            }), pf + "right", {
                default: 0,
                set: function set(value, props) {
                    props[w][1] = value;
                },
                get: function get(props) {
                    return props[w][1];
                }
            }), pf + "bottom", {
                default: 0,
                set: function set(value, props) {
                    props[w][2] = value;
                },
                get: function get(props) {
                    return props[w][2];
                }
            }), pf + "left", {
                default: 0,
                set: function set(value, props) {
                    props[w][3] = value;
                },
                get: function get(props) {
                    return props[w][3];
                }
            });
        }
        function getShadowProps(prefix) {
            var pf = prefix && prefix.length > 0 ? "".concat(prefix, "-") : "";
            var projection = pf + "projection";
            return _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, pf + "color", 255), projection, {
                default: [ 0, 0, 5, 5 ],
                resolve: function resolve(value) {
                    if (value !== void 0) return validateArrayLength4(value);
                    return [].concat(this.default);
                }
            }), pf + "x", {
                default: 0,
                set: function set(value, props) {
                    props[projection][0] = value;
                },
                get: function get(props) {
                    return props[projection][0];
                }
            }), pf + "y", {
                default: 0,
                set: function set(value, props) {
                    props[projection][1] = value;
                },
                get: function get(props) {
                    return props[projection][1];
                }
            }), pf + "blur", {
                default: 5,
                set: function set(value, props) {
                    props[projection][2] = value;
                },
                get: function get(props) {
                    return props[projection][2];
                }
            }), pf + "spread", {
                default: 5,
                set: function set(value, props) {
                    props[projection][3] = value;
                },
                get: function get(props) {
                    return props[projection][3];
                }
            });
        }
        function createShader(glw, type, source) {
            var shader = glw.createShader(type);
            if (!shader) {
                var glError = glw.getError();
                throw new Error("Unable to create the shader: ".concat(type === glw.VERTEX_SHADER ? "VERTEX_SHADER" : "FRAGMENT_SHADER", ".").concat(glError ? " WebGlContext Error: ".concat(glError) : ""));
            }
            glw.shaderSource(shader, source);
            glw.compileShader(shader);
            if (!!glw.getShaderParameter(shader, glw.COMPILE_STATUS)) return shader;
            console.error(glw.getShaderInfoLog(shader));
            glw.deleteShader(shader);
        }
        function createProgram(glw, vertexShader, fragmentShader) {
            var program = glw.createProgram();
            if (!program) throw new Error("Unable to create program");
            glw.attachShader(program, vertexShader);
            glw.attachShader(program, fragmentShader);
            glw.linkProgram(program);
            if (!!glw.getProgramParameter(program, glw.LINK_STATUS)) return program;
            var infoLog = glw.getProgramInfoLog(program) || "Unknown program link error";
            console.warn(infoLog);
            glw.deleteProgram(program);
            throw new Error("Unable to link shader program: ".concat(infoLog));
        }
        function genGradientColors(stops) {
            var result = "vec4 colorOut = u_colors[0];";
            for (var i = 1; i < stops; i++) result += "\n      colorOut = mix(colorOut, u_colors[".concat(i, "], smoothstep(u_stops[").concat(i - 1, "], u_stops[").concat(i, "], dist));");
            return result;
        }
        function hasZeroWidthSpace(space) {
            return invisibleChars.test(space) === true;
        }
        function _calculateFontMetrics(fontFamily, fontSize) {
            var _ref, _metrics$fontBounding, _ref2, _metrics$fontBounding2, _metrics$emHeightAsce, _metrics$emHeightDesc, _metrics$emHeightAsce2, _metrics$emHeightDesc2;
            var metrics = measureContext$1.measureText("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz");
            console.warn("Font metrics not provided for Canvas Web font ".concat(fontFamily, ". Using fallback values. It is HIGHLY recommended you use the latest version of the Lightning 3 `msdf-generator` tool to extract the default metrics for the font and provide them in the Canvas Web font definition."));
            var ascender = (_ref = (_metrics$fontBounding = metrics.fontBoundingBoxAscent) !== null && _metrics$fontBounding !== void 0 ? _metrics$fontBounding : metrics.actualBoundingBoxAscent) !== null && _ref !== void 0 ? _ref : 0;
            var descender = (_ref2 = (_metrics$fontBounding2 = metrics.fontBoundingBoxDescent) !== null && _metrics$fontBounding2 !== void 0 ? _metrics$fontBounding2 : metrics.actualBoundingBoxDescent) !== null && _ref2 !== void 0 ? _ref2 : 0;
            return {
                ascender: ascender,
                descender: -descender,
                lineGap: ((_metrics$emHeightAsce = metrics.emHeightAscent) !== null && _metrics$emHeightAsce !== void 0 ? _metrics$emHeightAsce : 0) + ((_metrics$emHeightDesc = metrics.emHeightDescent) !== null && _metrics$emHeightDesc !== void 0 ? _metrics$emHeightDesc : 0) - (ascender + descender),
                unitsPerEm: ((_metrics$emHeightAsce2 = metrics.emHeightAscent) !== null && _metrics$emHeightAsce2 !== void 0 ? _metrics$emHeightAsce2 : 0) + ((_metrics$emHeightDesc2 = metrics.emHeightDescent) !== null && _metrics$emHeightDesc2 !== void 0 ? _metrics$emHeightDesc2 : 0)
            };
        }
        function parseColor(abgr) {
            if (abgr === 4294967295) return WHITE;
            SCRATCH.a = (abgr >>> 24 & 255) / 255;
            SCRATCH.b = abgr >>> 16 & 255;
            SCRATCH.g = abgr >>> 8 & 255;
            SCRATCH.r = abgr & 255;
            return SCRATCH;
        }
        function parseToAbgrString(abgr) {
            var a = (abgr >>> 24 & 255) / 255;
            var b = abgr >>> 16 & 255;
            var g = abgr >>> 8 & 255;
            return "rgba(".concat(abgr & 255, ",").concat(g, ",").concat(b, ",").concat(a, ")");
        }
        function parseToRgbaString(rgba) {
            return "rgba(".concat(rgba >>> 24 & 255, ",").concat(rgba >>> 16 & 255, ",").concat(rgba >>> 8 & 255, ",").concat((rgba & 255) / 255, ")");
        }
        function formatRgba(_ref5) {
            var a = _ref5.a, r = _ref5.r, g = _ref5.g, b = _ref5.b;
            return "rgba(".concat(r, ",").concat(g, ",").concat(b, ",").concat(a, ")");
        }
        function normalizeCanvasColor(color) {
            var isRGBA = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var targetCache = isRGBA === true ? parsedRgbaColors : parsedArgbColors;
            var out = targetCache.get(color);
            if (out !== void 0) return out;
            if (isRGBA === true) out = parseToRgbaString(color); else out = parseToAbgrString(color);
            targetCache.set(color, out);
            return out;
        }
        function isObject(value) {
            return value !== null && (_typeof(value) === "object" || typeof value === "function");
        }
        function accessWith(valueOrFn) {
            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
            }
            return typeof valueOrFn === "function" ? valueOrFn.apply(void 0, args) : valueOrFn;
        }
        function makeEventListener(target, type, handler, options) {
            target.addEventListener(type, handler, options);
            return tryOnCleanup(target.removeEventListener.bind(target, type, handler, options));
        }
        function makeEventListenerStack(target, options) {
            if (false) return [ function() {
                return function() {
                    return void 0;
                };
            }, function() {
                return void 0;
            } ];
            var _createCallbackStack = createCallbackStack(), push = _createCallbackStack.push, execute = _createCallbackStack.execute;
            return [ function(type, handler, overwriteOptions) {
                var clear = makeEventListener(target, type, handler, overwriteOptions !== null && overwriteOptions !== void 0 ? overwriteOptions : options);
                push(clear);
                return clear;
            }, onCleanup(execute) ];
        }
        function makeMousePositionListener() {
            var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
            var callback = arguments.length > 1 ? arguments[1] : undefined;
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            if (false) return noop;
            var _options$touch = options.touch, touch = _options$touch === void 0 ? true : _options$touch, _options$followTouch = options.followTouch, followTouch = _options$followTouch === void 0 ? true : _options$followTouch;
            var _makeEventListenerSta = makeEventListenerStack(target, PASSIVE), _makeEventListenerSta2 = _slicedToArray(_makeEventListenerSta, 2), listen = _makeEventListenerSta2[0], clear = _makeEventListenerSta2[1];
            var handleMouse = function handleMouse(e) {
                return callback({
                    x: e.pageX,
                    y: e.pageY,
                    sourceType: "mouse"
                });
            };
            listen("mousemove", handleMouse);
            listen("dragover", handleMouse);
            if (touch) {
                var handleTouch = function handleTouch(e) {
                    if (e.touches.length) callback({
                        x: e.touches[0].clientX,
                        y: e.touches[0].clientY,
                        sourceType: "touch"
                    });
                };
                listen("touchstart", handleTouch);
                if (followTouch) listen("touchmove", handleTouch);
            }
            return clear;
        }
        function makeMouseInsideListener() {
            var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
            var callback = arguments.length > 1 ? arguments[1] : undefined;
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            if (false) return noop;
            var _options$touch2 = options.touch, touch = _options$touch2 === void 0 ? true : _options$touch2;
            var _makeEventListenerSta3 = makeEventListenerStack(target, PASSIVE), _makeEventListenerSta4 = _slicedToArray(_makeEventListenerSta3, 2), listen = _makeEventListenerSta4[0], clear = _makeEventListenerSta4[1];
            var mouseIn = false;
            var touchIn = !touch;
            function handleChange(isInside) {
                this === "mouse" ? mouseIn = isInside : touchIn = isInside;
                callback(mouseIn || touchIn);
            }
            listen("mouseover", handleChange.bind("mouse", true));
            listen("mouseout", handleChange.bind("mouse", false));
            listen("mousemove", handleChange.bind("mouse", true), {
                passive: true,
                once: true
            });
            if (touch) {
                listen("touchstart", handleChange.bind("touch", true));
                listen("touchend", handleChange.bind("touch", false));
            }
            return clear;
        }
        function createSingletonRoot(factory) {
            var detachedOwner = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getOwner();
            var listeners = 0, value, disposeRoot;
            return function() {
                listeners++;
                onCleanup(function() {
                    listeners--;
                    queueMicrotask(function() {
                        if (!listeners && disposeRoot) {
                            disposeRoot();
                            disposeRoot = value = void 0;
                        }
                    });
                });
                if (!disposeRoot) createRoot(function(dispose) {
                    return value = factory(disposeRoot = dispose);
                }, detachedOwner);
                return value;
            };
        }
        function createHydratableSingletonRoot(factory) {
            var owner = getOwner();
            var singleton = createSingletonRoot(factory, owner);
            return function() {
                return false || sharedConfig.context ? createRoot(factory, owner) : singleton();
            };
        }
        function createStaticStore(init) {
            var copy = _objectSpread({}, init), store = _objectSpread({}, init), cache = {};
            var getValue = function getValue(key) {
                var signal = cache[key];
                if (!signal) {
                    if (!getListener()) return copy[key];
                    cache[key] = signal = createSignal(copy[key], {
                        internal: true
                    });
                    delete copy[key];
                }
                return signal[0]();
            };
            var _loop = function _loop(key) {
                Object.defineProperty(store, key, {
                    get: function get() {
                        return getValue(key);
                    },
                    enumerable: true
                });
            };
            for (var key in init) {
                _loop(key);
            }
            var setValue = function setValue(key, value) {
                var signal = cache[key];
                if (signal) return signal[1](value);
                if (key in copy) copy[key] = accessWith(value, copy[key]);
            };
            return [ store, function(a, b) {
                if (isObject(a)) {
                    var entries = untrack(function() {
                        return Object.entries(accessWith(a, store));
                    });
                    batch(function() {
                        var _iterator = _createForOfIteratorHelper(entries), _step;
                        try {
                            var _loop2 = function _loop2() {
                                var _step$value = _slicedToArray(_step.value, 2), key = _step$value[0], value = _step$value[1];
                                setValue(key, function() {
                                    return value;
                                });
                            };
                            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                                _loop2();
                            }
                        } catch (err) {
                            _iterator.e(err);
                        } finally {
                            _iterator.f();
                        }
                    });
                } else setValue(a, b);
                return store;
            } ];
        }
        function createMousePosition(target) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var fallback = _objectSpread(_objectSpread({}, DEFAULT_MOUSE_POSITION), options.initialValue);
            if (false) return fallback;
            var _createStaticStore = createStaticStore(fallback), _createStaticStore2 = _slicedToArray(_createStaticStore, 2), state = _createStaticStore2[0], setState = _createStaticStore2[1];
            var attachListeners = function attachListeners(el) {
                makeMousePositionListener(el, setState, options);
                makeMouseInsideListener(el, setState.bind(void 0, "isInside"), options);
            };
            if (typeof target !== "function") attachListeners(target); else createEffect(function() {
                return attachListeners(target());
            });
            return state;
        }
        function addCustomStateToElement(element, state) {
            var _element$states;
            (_element$states = element.states) == null || _element$states.add(state);
        }
        function removeCustomStateFromElement(element, state) {
            var _element$states2;
            element == null || (_element$states2 = element.states) == null || _element$states2.remove(state);
        }
        function hasCustomState(element, state) {
            var _element$states3;
            return (_element$states3 = element.states) == null ? void 0 : _element$states3.has(state);
        }
        function createKeyboardEvent(key, keyCode) {
            var eventName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "keydown";
            var event = new KeyboardEvent(eventName, {
                key: key,
                keyCode: keyCode,
                which: keyCode,
                ctrlKey: false,
                altKey: false,
                shiftKey: false,
                metaKey: false,
                bubbles: true
            });
            if (event.key !== key || event.keyCode !== keyCode) {
                Object.defineProperty(event, "key", {
                    get: function get() {
                        return key;
                    }
                });
                Object.defineProperty(event, "keyCode", {
                    get: function get() {
                        return keyCode;
                    }
                });
                Object.defineProperty(event, "which", {
                    get: function get() {
                        return keyCode;
                    }
                });
            }
            return event;
        }
        function findElementWithCustomState(myApp, x, y, customState) {
            var path = getChildrenByPosition(myApp, x, y);
            var element;
            for (var i = path.length - 1; i >= 0; i--) if (hasCustomState(path[i], customState)) {
                element = path[i];
                break;
            }
            if (!element) return void 0;
            var p = element.parent;
            while ((p == null ? void 0 : p.forwardStates) && hasCustomState(p, customState)) {
                element = p;
                p = p.parent;
            }
            return element;
        }
        function findElementByActiveElement(e) {
            var _Config$rendererOptio;
            var active = activeElement();
            var precision = ((_Config$rendererOptio = Config.rendererOptions) == null ? void 0 : _Config$rendererOptio.deviceLogicalPixelRatio) || 1;
            var px = e.clientX / precision;
            var py = e.clientY / precision;
            if (active instanceof ElementNode && testCollision(px, py, active.lng.absX || 0, active.lng.absY || 0, active.width || 0, active.height || 0)) return active;
            var parent = active == null ? void 0 : active.parent;
            while (parent) {
                if ((isFunction(parent.onMouseClick) || isFunction(parent.onEnter)) && testCollision(px, py, parent.lng.absX || 0, parent.lng.absY || 0, parent.width || 0, parent.height || 0)) return parent;
                parent = parent.parent;
            }
            return null;
        }
        function applyPressedState(element, pressedState) {
            addCustomStateToElement(element, pressedState);
        }
        function handleElementClick(clickedElement, e, customStates, pressedElementRef) {
            if ((customStates == null ? void 0 : customStates.pressedState) && (pressedElementRef == null ? void 0 : pressedElementRef.current)) {
                removeCustomStateFromElement(pressedElementRef.current, customStates.pressedState);
                pressedElementRef.current = null;
            }
            if (isFunction(clickedElement.onMouseClick)) {
                clickedElement.onMouseClick(e, clickedElement);
                return;
            }
            clickedElement.setFocus();
            setTimeout(function() {
                document.dispatchEvent(createKeyboardEvent("Enter", 13));
                setTimeout(function() {
                    return document.body.dispatchEvent(createKeyboardEvent("Enter", 13, "keyup"));
                }, 1);
            }, 1);
        }
        function createHandleClick(myApp, customStates, pressedElementRef) {
            return function(e) {
                var clickedElement = customStates ? findElementWithCustomState(myApp, e.clientX, e.clientY, customStates.hoverState) : findElementByActiveElement(e);
                if (!clickedElement) return;
                handleElementClick(clickedElement, e, customStates, pressedElementRef);
            };
        }
        function createHandleMouseDown(myApp, customStates, pressedElementRef) {
            return function(e) {
                if (!customStates) return;
                var pressedElement = findElementWithCustomState(myApp, e.clientX, e.clientY, customStates.hoverState);
                if (!pressedElement) return;
                applyPressedState(pressedElement, customStates.pressedState);
                if (pressedElementRef) pressedElementRef.current = pressedElement;
            };
        }
        function testCollision(px, py, cx, cy) {
            var cw = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
            var ch = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
            return px >= cx && px <= cx + cw && py >= cy && py <= cy + ch;
        }
        function isNodeAtPosition(node, x, y) {
            if (!isElementNode(node)) return false;
            return node.alpha !== 0 && !node.skipFocus && testCollision(x, y, node.lng.absX || 0, node.lng.absY || 0, node.width || 0, node.height || 0);
        }
        function getChildrenByPosition(node, x, y) {
            var _Config$rendererOptio2;
            var result = [];
            var precision = ((_Config$rendererOptio2 = Config.rendererOptions) == null ? void 0 : _Config$rendererOptio2.deviceLogicalPixelRatio) || 1;
            var px = x / precision;
            var py = y / precision;
            var current = node;
            while (current && isNodeAtPosition(current, px, py)) {
                result.push(current);
                var best = void 0;
                var bestZ = -Infinity;
                var _iterator2 = _createForOfIteratorHelper(current.children), _step2;
                try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                        var child = _step2.value;
                        var _child$zIndex;
                        if (!isNodeAtPosition(child, px, py)) continue;
                        var z = (_child$zIndex = child.zIndex) !== null && _child$zIndex !== void 0 ? _child$zIndex : -1;
                        if (z >= bestZ) {
                            bestZ = z;
                            best = child;
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
        function useMouse() {
            var myApp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : rootNode;
            var throttleBy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
            var options = arguments.length > 2 ? arguments[2] : undefined;
            var pos = useMousePosition();
            var scheduled = createScheduled(function(fn) {
                return throttle(fn, throttleBy);
            });
            var previousElement = null;
            var pressedElementRef = {
                current: null
            };
            var customStates = options == null ? void 0 : options.customStates;
            var hoverState = customStates == null ? void 0 : customStates.hoverState;
            var handleClick = createHandleClick(myApp, customStates, pressedElementRef);
            var handleMouseDown = createHandleMouseDown(myApp, customStates, pressedElementRef);
            var owner = getOwner();
            var handleClickContext = function handleClickContext(e) {
                runWithOwner(owner, function() {
                    return handleClick(e);
                });
            };
            var handleMouseDownContext = function handleMouseDownContext(e) {
                runWithOwner(owner, function() {
                    return handleMouseDown(e);
                });
            };
            var focusKey = Config.focusStateKey;
            makeEventListener(window, "wheel", handleScroll);
            makeEventListener(window, "click", handleClickContext);
            makeEventListener(window, "mousedown", handleMouseDownContext);
            createEffect(function() {
                if (!scheduled()) return;
                var path = getChildrenByPosition(myApp, pos.x, pos.y);
                var activeElm;
                for (var i = path.length - 1; i >= 0; i--) {
                    var el = path[i];
                    if (el.onEnter || el.onMouseClick || el.onFocus || el[focusKey] || hoverState && el[hoverState]) {
                        activeElm = el;
                        break;
                    }
                }
                if (!activeElm) {
                    if (previousElement && hoverState) {
                        removeCustomStateFromElement(previousElement, hoverState);
                        previousElement = null;
                    }
                    return;
                }
                var p = activeElm.parent;
                while (p == null ? void 0 : p.forwardStates) {
                    activeElm = p;
                    p = p.parent;
                }
                var activeElmParent = activeElm.parent;
                if ((activeElmParent == null ? void 0 : activeElmParent.selected) !== void 0) activeElmParent.selected = activeElmParent.children.indexOf(activeElm);
                if (previousElement && previousElement !== activeElm && hoverState) removeCustomStateFromElement(previousElement, hoverState);
                if (hoverState) addCustomStateToElement(activeElm, hoverState); else activeElm.setFocus();
                previousElement = activeElm;
            });
        }
        function lazy(fn) {
            var comp;
            var p;
            var wrap = function wrap(props) {
                var ctx = sharedConfig.context;
                if (ctx) {
                    var _createSignal = createSignal(), _createSignal2 = _slicedToArray(_createSignal, 2), s = _createSignal2[0], set = _createSignal2[1];
                    sharedConfig.count || (sharedConfig.count = 0);
                    sharedConfig.count++;
                    (p || (p = fn())).then(function(mod) {
                        !sharedConfig.done && (sharedConfig.context = ctx);
                        sharedConfig.count--;
                        set(function() {
                            return mod.default;
                        });
                        sharedConfig.context = void 0;
                    }).catch(function() {});
                    comp = s;
                } else if (!comp) {
                    var _createResource = createResource(function() {
                        return (p || (p = fn())).then(function(mod) {
                            return mod.default;
                        });
                    }), _createResource2 = _slicedToArray(_createResource, 1), _s = _createResource2[0];
                    comp = _s;
                }
                var Comp;
                return createMemo(function() {
                    Comp = comp();
                    return Comp ? untrack(function() {
                        if (!ctx || sharedConfig.done) return Comp(props);
                        var c = sharedConfig.context;
                        sharedConfig.context = ctx;
                        var r = Comp(props);
                        sharedConfig.context = c;
                        return r;
                    }) : null;
                });
            };
            wrap.preload = function() {
                return p || ((p = fn()).then(function(mod) {
                    return comp = function comp() {
                        return mod.default;
                    };
                }), p);
            };
            return wrap;
        }
        function VirtualGrid(props) {
            var _props$selected;
            var bufferSize = function bufferSize() {
                var _props$buffer;
                return (_props$buffer = props.buffer) !== null && _props$buffer !== void 0 ? _props$buffer : 2;
            };
            var _createSignal3 = createSignal((_props$selected = props.selected) !== null && _props$selected !== void 0 ? _props$selected : 0), _createSignal4 = _slicedToArray(_createSignal3, 2), cursor = _createSignal4[0], setCursor = _createSignal4[1];
            var items = createMemo(function() {
                return props.each || [];
            });
            var itemCount = function itemCount() {
                return items().length;
            };
            var itemsPerRow = function itemsPerRow() {
                return props.columns;
            };
            var numberOfRows = function numberOfRows() {
                var _props$rows;
                return (_props$rows = props.rows) !== null && _props$rows !== void 0 ? _props$rows : 1;
            };
            var totalVisibleItems = function totalVisibleItems() {
                return itemsPerRow() * numberOfRows();
            };
            var start = createMemo(function() {
                var perRow = itemsPerRow();
                var rawStart = Math.floor(cursor() / perRow) * perRow - bufferSize() * perRow;
                return Math.max(0, rawStart);
            });
            var end = createMemo(function() {
                var perRow = itemsPerRow();
                var rawEnd = (Math.floor(cursor() / perRow) + bufferSize()) * perRow + totalVisibleItems();
                return Math.min(items().length, rawEnd);
            });
            var _createSignal5 = createSignal(items().slice(start(), end())), _createSignal6 = _slicedToArray(_createSignal5, 2), slice = _createSignal6[0], setSlice = _createSignal6[1];
            var viewRef;
            function onVerticalNav(dir) {
                return function() {
                    var perRow = itemsPerRow();
                    var currentRowIndex = Math.floor(cursor() / perRow);
                    var maxRows = Math.floor(items().length / perRow);
                    if (currentRowIndex === 0 && dir === -1 || currentRowIndex === maxRows && dir === 1) return;
                    var selected = this.selected || 0;
                    var offset = dir * perRow;
                    var newIndex = clamp(selected + offset, 0, items().length - 1);
                    var lastIdx = selected;
                    this.selected = newIndex;
                    var active = this.children[this.selected];
                    if (active instanceof ElementNode) {
                        active.setFocus();
                        chainedOnSelectedChanged.call(this, this.selected, this, active, lastIdx);
                        return true;
                    }
                };
            }
            var onUp = onVerticalNav(-1);
            var onDown = onVerticalNav(1);
            var onSelectedChanged = function onSelectedChanged(_idx, elm, active, _lastIdx) {
                var _this = this;
                var idx = _idx;
                var lastIdx = _lastIdx;
                var perRow = itemsPerRow();
                var newRowIndex = Math.floor(idx / perRow);
                var prevRowIndex = Math.floor((lastIdx || 0) / perRow);
                var prevStart = start();
                setCursor(prevStart + idx);
                if (newRowIndex === prevRowIndex) return;
                setSlice(items().slice(start(), end()));
                var idxCorrection = prevStart - start();
                if (lastIdx) lastIdx += idxCorrection;
                idx += idxCorrection;
                this.selected += idxCorrection;
                if (props.onEndReachedThreshold !== void 0 && cursor() >= items().length - props.onEndReachedThreshold) {
                    var _props$onEndReached;
                    (_props$onEndReached = props.onEndReached) == null || _props$onEndReached.call(props);
                }
                queueMicrotask(function() {
                    var prevRowY = _this.y + active.y;
                    _this.updateLayout();
                    _this.lng.y = prevRowY - active.y;
                    columnScroll(idx, elm, active, lastIdx);
                });
            };
            var chainedOnSelectedChanged = chainFunctions(props.onSelectedChanged, onSelectedChanged);
            var cachedSelected;
            var updateSelected = function updateSelected(_ref6) {
                var _ref7 = _slicedToArray(_ref6, 2), selected = _ref7[0], _items = _ref7[1];
                if (!viewRef || selected == null) return;
                if (cachedSelected !== void 0) {
                    selected = cachedSelected;
                    cachedSelected = void 0;
                }
                if (selected >= items().length && props.onEndReached) {
                    var _props$onEndReached2;
                    (_props$onEndReached2 = props.onEndReached) == null || _props$onEndReached2.call(props);
                    cachedSelected = selected;
                    return;
                }
                var item = items()[selected];
                var active = viewRef.children.find(function(x) {
                    return x.item === item;
                });
                var lastSelected = viewRef.selected;
                if (active instanceof ElementNode) {
                    viewRef.selected = viewRef.children.indexOf(active);
                    if (hasFocus(viewRef)) active.setFocus();
                    chainedOnSelectedChanged.call(viewRef, viewRef.selected, viewRef, active, lastSelected);
                } else {
                    setCursor(selected);
                    setSlice(items().slice(start(), end()));
                    queueMicrotask(function() {
                        viewRef.updateLayout();
                        active = viewRef.children.find(function(x) {
                            return x.item === item;
                        });
                        if (active instanceof ElementNode) {
                            viewRef.selected = viewRef.children.indexOf(active);
                            if (hasFocus(viewRef)) active.setFocus();
                            chainedOnSelectedChanged.call(viewRef, viewRef.selected, viewRef, active, lastSelected);
                        }
                    });
                }
            };
            var scrollToIndex = function scrollToIndex(index) {
                untrack(function() {
                    return updateSelected([ index ]);
                });
            };
            createEffect(on([ function() {
                return props.selected;
            }, items ], updateSelected));
            createEffect(on(items, function(gridItems, _prevGridItems, prevSize) {
                if (!viewRef) return;
                if (cachedSelected !== void 0) {
                    updateSelected([ cachedSelected ]);
                    return gridItems.length;
                }
                if (gridItems.length === 0) {
                    setCursor(0);
                    cachedSelected = void 0;
                    setSlice([]);
                } else if (cursor() >= itemCount()) updateSelected([ Math.max(0, itemCount() - 1) ]); else if (prevSize === 0) updateSelected([ 0 ]); else setSlice(items().slice(start(), end()));
                return gridItems.length;
            }, {
                defer: true
            }));
            return function() {
                var _el$ = createElement("view");
                var _ref$ = chainRefs(function(el) {
                    viewRef = el;
                }, props.ref);
                typeof _ref$ === "function" && use(_ref$, _el$);
                spread(_el$, mergeProps$1(props, {
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
                }), true);
                insert(_el$, createComponent(List, {
                    get each() {
                        return slice();
                    },
                    get children() {
                        return props.children;
                    }
                }));
                return _el$;
            }();
        }
        function Root(props) {
            var location = props.routerState.location;
            var params = props.routerState.params;
            var data = createMemo(function() {
                return props.preload && untrack(function() {
                    setInPreloadFn(true);
                    props.preload({
                        params: params,
                        location: location,
                        intent: getIntent() || "initial"
                    });
                    setInPreloadFn(false);
                });
            });
            return createComponent(Show, {
                get when() {
                    return props.root;
                },
                keyed: true,
                get fallback() {
                    return props.children;
                },
                children: function children(Root) {
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
            if (false) {
                var e = voidFn();
                if (e && e.router && e.router.dataOnly) {
                    dataOnly(e, props.routerState, props.branches);
                    return;
                }
                e && ((e.router || (e.router = {})).matches || (e.router.matches = props.routerState.matches().map(function(_ref8) {
                    var route = _ref8.route, path = _ref8.path, params = _ref8.params;
                    return {
                        path: route.originalPath,
                        pattern: route.pattern,
                        match: path,
                        params: params,
                        info: route.info
                    };
                })));
            }
            var disposers = [];
            var root;
            var routeStates = createMemo(on(props.routerState.matches, function(nextMatches, prevMatches, prev) {
                var equal = prevMatches && nextMatches.length === prevMatches.length;
                var next = [];
                var _loop3 = function _loop3(i) {
                    var prevMatch = prevMatches && prevMatches[i];
                    var nextMatch = nextMatches[i];
                    if (prev && prevMatch && nextMatch.route.key === prevMatch.route.key) next[i] = prev[i]; else {
                        equal = false;
                        if (disposers[i]) disposers[i]();
                        createRoot(function(dispose) {
                            disposers[i] = dispose;
                            next[i] = createRouteContext(props.routerState, next[i - 1] || props.routerState.base, createOutlet(function() {
                                return routeStates()[i + 1];
                            }), function() {
                                var _routeMatches$i;
                                var routeMatches = props.routerState.matches();
                                return (_routeMatches$i = routeMatches[i]) !== null && _routeMatches$i !== void 0 ? _routeMatches$i : routeMatches[0];
                            });
                        });
                    }
                };
                for (var i = 0, len = nextMatches.length; i < len; i++) {
                    _loop3(i);
                }
                disposers.splice(nextMatches.length).forEach(function(dispose) {
                    return dispose();
                });
                if (prev && equal) return prev;
                root = next[0];
                return next;
            }));
            return createOutlet(function() {
                return routeStates() && root;
            })();
        }
        function dataOnly(event, routerState, branches) {
            var url = new URL(event.request.url);
            var prevMatches = getRouteMatches(branches, new URL(event.router.previousUrl || event.request.url).pathname);
            var matches = getRouteMatches(branches, url.pathname);
            for (var match = 0; match < matches.length; match++) {
                if (!prevMatches[match] || matches[match].route !== prevMatches[match].route) event.router.dataOnly = true;
                var _matches$match = matches[match], route = _matches$match.route, params = _matches$match.params;
                route.preload && route.preload({
                    params: params,
                    location: routerState.location,
                    intent: "preload"
                });
            }
        }
        function intercept(_ref9, get, set) {
            var _ref0 = _slicedToArray(_ref9, 2), value = _ref0[0], setValue = _ref0[1];
            return [ get ? function() {
                return get(value());
            } : value, set ? function(v) {
                return setValue(set(v));
            } : setValue ];
        }
        function createRouter(config) {
            var ignore = false;
            var wrap = function wrap(value) {
                return typeof value === "string" ? {
                    value: value
                } : value;
            };
            var signal = intercept(createSignal(wrap(config.get()), {
                equals: function equals(a, b) {
                    return a.value === b.value && a.state === b.state;
                }
            }), void 0, function(next) {
                !ignore && config.set(next);
                if (sharedConfig.registry && !sharedConfig.done) sharedConfig.done = true;
                return next;
            });
            config.init && onCleanup(config.init(function() {
                var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : config.get();
                ignore = true;
                signal[1](wrap(value));
                ignore = false;
            }));
            return createRouterComponent({
                signal: signal,
                create: config.create,
                utils: config.utils
            });
        }
        function Navigate(props) {
            var navigate = useNavigate();
            var location = useLocation();
            var href = props.href, state = props.state;
            navigate(typeof href === "function" ? href({
                navigate: navigate,
                location: location
            }) : href, {
                replace: true,
                state: state
            });
            return null;
        }
        function hashParser(str) {
            var to = str.replace(/^.*?#/, "");
            if (!to.startsWith("/")) {
                var _window$location$hash = window.location.hash.split("#", 2), _window$location$hash2 = _slicedToArray(_window$location$hash, 2), _window$location$hash3 = _window$location$hash2[1], path = _window$location$hash3 === void 0 ? "/" : _window$location$hash3;
                return "".concat(path, "#").concat(to);
            }
            return to;
        }
        function bindEvent(target, type, handler) {
            target.addEventListener(type, handler);
            return function() {
                return target.removeEventListener(type, handler);
            };
        }
        function HashRouter(props) {
            var getSource = function getSource() {
                return window.location.hash.slice(1);
            };
            var beforeLeave = createBeforeLeave();
            return createRouter({
                get: getSource,
                set: function set(_ref1) {
                    var value = _ref1.value, replace = _ref1.replace, state = _ref1.state;
                    if (replace) window.history.replaceState(keepDepth(state), "", "#" + value); else window.history.pushState(state, "", "#" + value);
                    saveCurrentDepth();
                },
                init: function init(notify) {
                    return bindEvent(window, "hashchange", notifyIfNotBlocked(notify, function(delta) {
                        return !beforeLeave.confirm(delta && delta < 0 ? delta : getSource());
                    }));
                },
                utils: {
                    go: function go(delta) {
                        return window.history.go(delta);
                    },
                    renderPath: function renderPath(path) {
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
            var map = new Map;
            var owner = getOwner();
            var target = {};
            var handler = function handler(property) {
                if (!map.has(property)) runWithOwner(owner, function() {
                    return map.set(property, createMemo(function() {
                        return fn()[property];
                    }));
                });
                return map.get(property)();
            };
            (allKeys ? allKeys : Object.keys(fn())).forEach(function(key) {
                Object.defineProperty(target, key, {
                    get: function get() {
                        return handler(key);
                    },
                    enumerable: true,
                    configurable: true
                });
            });
            return target;
        }
        function wrapChildren(props, setIsAlive) {
            var onRemove = chainFunctions(props.onRemove || function(elm) {
                elm.alpha = 0;
            }, function() {
                return setIsAlive == null ? void 0 : setIsAlive(false);
            });
            var onRender = chainFunctions(props.onRender || function(elm) {
                elm.alpha = 1;
            }, function() {
                return setIsAlive == null ? void 0 : setIsAlive(true);
            });
            var transition = props.transition || {
                alpha: true
            };
            return function() {
                var _el$ = createElement("view");
                spread(_el$, mergeProps$1(props, {
                    preserve: true,
                    onRemove: onRemove,
                    onRender: onRender,
                    forwardFocus: 0,
                    transition: transition
                }), false);
                return _el$;
            }();
        }
        function createInfiniteScroll(fetcher) {
            var _createSignal7 = createSignal([]), _createSignal8 = _slicedToArray(_createSignal7, 2), pages = _createSignal8[0], setPages = _createSignal8[1];
            var _createSignal9 = createSignal(1), _createSignal0 = _slicedToArray(_createSignal9, 2), page = _createSignal0[0], setPage = _createSignal0[1];
            var _createSignal1 = createSignal(false), _createSignal10 = _slicedToArray(_createSignal1, 2), end = _createSignal10[0], setEnd = _createSignal10[1];
            var _createResource3 = createResource(page, fetcher), _createResource4 = _slicedToArray(_createResource3, 1), contents = _createResource4[0];
            createComputed(function() {
                var content = contents();
                if (!content) return;
                batch(function() {
                    if (content.length === 0) setEnd(true);
                    setPages(function(p) {
                        return [].concat(_toConsumableArray(p), _toConsumableArray(content));
                    });
                });
            });
            return {
                pages: pages,
                page: page,
                setPage: setPage,
                setPages: setPages,
                end: end,
                setEnd: setEnd
            };
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
            var rows = [];
            var popularMovies = createResource(function() {
                return fetchPopular("movie");
            });
            rows.push({
                title: "Popular Movies",
                items: popularMovies[0],
                setItems: popularMovies[1].mutate,
                type: "Poster",
                height: 328
            });
            rows.push({
                title: "Best Western movies",
                items: createResource(function() {
                    return fetchGenreMovies([ "Western" ]);
                })[0],
                type: "Hero",
                height: 720
            });
            rows.push({
                title: "Best Comedy movies",
                items: createResource(function() {
                    return fetchGenreMovies([ "Comedy" ]);
                })[0],
                type: "PosterTitle",
                height: 400
            });
            rows.push({
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
            rows.push(heroRow);
            rows.push({
                title: "Best Animations",
                items: createResource(function() {
                    return fetchGenreMovies("Animation");
                })[0],
                type: "PosterTitle",
                height: 400
            });
            rows.push({
                title: "Best TV Movie Movies",
                items: createResource(function() {
                    return fetchGenreMovies("TV Movie");
                })[0],
                type: "PosterTitle",
                height: 400
            });
            rows.push({
                title: "Best Science Fiction movies",
                items: createResource(function() {
                    return fetchGenreMovies("Science Fiction");
                })[0],
                type: "Hero",
                height: 720
            });
            rows.push({
                title: "Best War Movies",
                items: createResource(function() {
                    return fetchGenreMovies("War");
                })[0],
                type: "PosterTitle",
                height: 400
            });
            return {
                rows: rows
            };
        }
        function browse_default(filter) {
            return function(pageIndex) {
                var url = "/trending/".concat(filter, "/week?page=").concat(pageIndex);
                if (cache.has(url)) return cache.get(url);
                var result = api_default.get(url).then(function(trending) {
                    return convertItemsToTiles(trending.results.filter(function(r) {
                        return !r.adult;
                    }));
                }).catch(function(err) {
                    console.error("[BROWSE_PROVIDER_ERROR] url:", url, "error:", err.message, err.stack);
                    throw err;
                });
                cache.set(url, result);
                return result;
            };
        }
        function browsePreload(props) {
            var lastFilter = null;
            return createMemo(function(p) {
                var params = props.params;
                if (p && (!params.filter || lastFilter === params.filter)) return p;
                var provider = browse_default(params.filter || "all");
                provider(1);
                lastFilter = params.filter || lastFilter;
                return provider;
            });
        }
        function minutesToHMM(minutes) {
            var hours = Math.floor(minutes / 60);
            var remainingMinutes = minutes % 60;
            return hours + "h " + (remainingMinutes < 10 ? "0" : "") + remainingMinutes + "min";
        }
        function formatDate(dateString) {
            var parts = dateString.split("-");
            return parts[1] + "/" + parts[2] + "/" + parts[0];
        }
        function justYear(dateString) {
            return ((dateString == null ? void 0 : dateString.split("-")) || [])[0] || "";
        }
        function ensureItems(items, minCount) {
            var remainingCount = minCount - items.length;
            if (remainingCount > 0) return items.concat(Array(remainingCount).fill({}));
            return items;
        }
        function getRecommendations(_ref10) {
            var type = _ref10.type, id = _ref10.id;
            return api_default.get("/".concat(type, "/").concat(id, "/recommendations")).then(function(_ref11) {
                var results = _ref11.results;
                if (results.length) return ensureItems(convertItemsToTiles(results.slice(0, 7)), 7);
                return api_default.get("/trending/".concat(type, "/week?page=1")).then(function(_ref12) {
                    var results = _ref12.results;
                    return ensureItems(convertItemsToTiles(results.slice(0, 7)), 7);
                });
            });
        }
        function getCredits(_ref13) {
            var type = _ref13.type, id = _ref13.id;
            return api_default.get("/".concat(type, "/").concat(id, "/credits")).then(function(_ref14) {
                var cast = _ref14.cast;
                return ensureItems(convertItemsToTiles(cast.slice(0, 7)), 7);
            });
        }
        function getInfo(_ref15) {
            var type = _ref15.type, id = _ref15.id;
            var rt = type === "movie" ? {
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
                        metaText: type === "movie" ? minutesToHMM(data.runtime) + "   " + formatDate(data.release_date) : "".concat(justYear(data.first_air_date), " - ").concat(justYear(data.last_air_date)),
                        reviews: rt
                    }
                }, data);
            });
        }
        function entityPreload(_ref16) {
            var params = _ref16.params, intent = _ref16.intent;
            var _createResource5 = createResource(function() {
                return _objectSpread({}, params);
            }, getInfo), _createResource6 = _slicedToArray(_createResource5, 1), entity = _createResource6[0];
            if (intent === "preload") return;
            var _createResource7 = createResource(function() {
                return _objectSpread({}, params);
            }, getCredits), _createResource8 = _slicedToArray(_createResource7, 1), credits = _createResource8[0];
            var _createResource9 = createResource(function() {
                return _objectSpread({}, params);
            }, getRecommendations), _createResource0 = _slicedToArray(_createResource9, 1), recommendations = _createResource0[0];
            return {
                entity: entity,
                credits: credits,
                recommendations: recommendations
            };
        }
        function Background() {
            var disableBG = new URLSearchParams(window.location.search).get("disableBG") === "true";
            var bg1, bg2, heroMask;
            var active = 0;
            var alpha = 1;
            var animationSettings = {
                duration: 550,
                easing: "ease-in-out"
            };
            var bgStyles = {
                alpha: alpha,
                color: 4294967295
            };
            onMount(function() {
                if (disableBG) {
                    heroMask.src = "";
                    heroMask.colorLeft = 255;
                    heroMask.colorRight = 0;
                    return;
                }
            });
            function changeBackgrounds(img) {
                if (disableBG) {
                    heroMask.src = "";
                    heroMask.colorLeft = 255;
                    heroMask.colorRight = 0;
                    return;
                }
                if (typeof img !== "string") {
                    bg1.color = img;
                    bg1.src = "";
                    bg1.alpha = 1;
                    active = 1;
                    bg2.alpha = 0;
                    heroMask.alpha = 0;
                    return;
                } else {
                    bg1.color = 4294967295;
                    heroMask.alpha = 1;
                }
                var currentBg = active === 1 ? bg2 : bg1;
                var nextBg = active === 1 ? bg1 : bg2;
                currentBg.src = img;
                if (active === 0) currentBg.alpha = 1; else {
                    currentBg.alpha = .01;
                    currentBg.animate({
                        alpha: 1
                    }, animationSettings).start();
                }
                nextBg.animate({
                    alpha: .01
                }, animationSettings).start();
                active = active === 1 ? 2 : 1;
            }
            createEffect(on(globalBackground, function(img) {
                changeBackgrounds(img);
            }, {
                defer: true
            }));
            return function() {
                var _el$ = createElement("view"), _el$2 = createElement("view"), _el$3 = createElement("view"), _el$4 = createElement("view");
                insertNode(_el$, _el$2);
                insertNode(_el$, _el$3);
                insertNode(_el$, _el$4);
                setProp(_el$, "width", 1920);
                setProp(_el$, "height", 1080);
                setProp(_el$, "zIndex", -5);
                var _ref$ = bg1;
                typeof _ref$ === "function" ? use(_ref$, _el$2) : bg1 = _el$2;
                setProp(_el$2, "style", bgStyles);
                var _ref$2 = bg2;
                typeof _ref$2 === "function" ? use(_ref$2, _el$3) : bg2 = _el$3;
                setProp(_el$3, "style", bgStyles);
                setProp(_el$3, "alpha", 0);
                var _ref$3 = heroMask;
                typeof _ref$3 === "function" ? use(_ref$3, _el$4) : heroMask = _el$4;
                setProp(_el$4, "src", "./assets/hero-mask-inverted.png");
                setProp(_el$4, "color", 255);
                setProp(_el$4, "width", 1920);
                setProp(_el$4, "height", 1080);
                return _el$;
            }();
        }
        function NavButton(props) {
            return function() {
                var _el$ = createElement("view"), _el$2 = createElement("view"), _el$3 = createElement("text");
                insertNode(_el$, _el$2);
                insertNode(_el$, _el$3);
                spread(_el$, mergeProps$1(props, {
                    forwardStates: true,
                    get style() {
                        return NavDrawer_styles_default.NavButton;
                    }
                }), true);
                setProp(_el$2, "y", -16);
                insert(_el$2, createComponent(Icon, {
                    get color() {
                        return props.iconColor;
                    },
                    scale: .5,
                    get name() {
                        return props.icon;
                    }
                }));
                setProp(_el$3, "style", NavButtonTextStyles);
                insert(_el$3, function() {
                    return props.children;
                });
                return _el$;
            }();
        }
        function NavDrawer(props) {
            var backdrop;
            var navigate = useNavigate();
            function onFocus() {
                backdrop.states.add("$focus");
                this.children.forEach(function(c) {
                    return c.states.add("$active");
                });
                this.children[this.selected || 0].setFocus();
            }
            function onBlur() {
                backdrop.states.remove("$focus");
                this.selected = 0;
                this.children.forEach(function(c) {
                    return c.states.remove("$active");
                });
            }
            function handleNavigate(page) {
                if (useMatch(function() {
                    return page;
                })()) return props.focusPage();
                navigate(page);
            }
            var selectedButton = createMemo(function() {
                if (useMatch(function() {
                    return "/browse/all";
                })()) return 308;
                if (useMatch(function() {
                    return "/browse/movie";
                })()) return 398;
                if (useMatch(function() {
                    return "/browse/tv";
                })()) return 488;
                if (useMatch(function() {
                    return "/examples";
                })()) return 578;
                if (useMatch(function() {
                    return "/benchmark";
                })()) return 668;
                if (useMatch(function() {
                    return "/versions";
                })()) return 758;
                return 308;
            });
            return [ function() {
                var _el$4 = createElement("view"), _el$5 = createElement("text"), _el$7 = createElement("view"), _el$8 = createElement("view"), _el$9 = createElement("text");
                insertNode(_el$4, _el$5);
                insertNode(_el$4, _el$7);
                insertNode(_el$4, _el$8);
                insertNode(_el$4, _el$9);
                setProp(_el$4, "id", "NavDrawer");
                setProp(_el$4, "flexItem", false);
                setProp(_el$4, "width", 300);
                setProp(_el$4, "height", 150);
                setProp(_el$4, "x", 30);
                setProp(_el$4, "y", 15);
                setProp(_el$4, "zIndex", 105);
                insertNode(_el$5, createTextNode("Built With:"));
                setProp(_el$5, "y", 8);
                setProp(_el$5, "x", 80);
                setProp(_el$5, "fontSize", 28);
                setProp(_el$7, "y", 10);
                setProp(_el$7, "src", "./assets/solidWord.png");
                setProp(_el$7, "width", 280);
                setProp(_el$7, "height", 52);
                setProp(_el$7, "textureOptions", {});
                setProp(_el$8, "x", 0);
                setProp(_el$8, "y", 100);
                setProp(_el$8, "src", "./assets/tmdb.png");
                setProp(_el$8, "width", 80);
                setProp(_el$8, "height", 41);
                setProp(_el$8, "textureOptions", {});
                insertNode(_el$9, createTextNode("This product uses the TMDB API but is not endorsed or certified by TMDB."));
                setProp(_el$9, "x", 90);
                setProp(_el$9, "y", 104);
                setProp(_el$9, "contain", "width");
                setProp(_el$9, "width", 160);
                setProp(_el$9, "fontSize", 12);
                effect(function(_p$) {
                    var _v$ = props.showWidgets ? 1 : 0, _v$2 = theme_default.textSecondary, _v$3 = theme_default.textSecondary;
                    _v$ !== _p$.e && (_p$.e = setProp(_el$4, "alpha", _v$, _p$.e));
                    _v$2 !== _p$.t && (_p$.t = setProp(_el$5, "color", _v$2, _p$.t));
                    _v$3 !== _p$.a && (_p$.a = setProp(_el$9, "color", _v$3, _p$.a));
                    return _p$;
                }, {
                    e: void 0,
                    t: void 0,
                    a: void 0
                });
                return _el$4;
            }(), createComponent(Column, mergeProps$1(props, {
                onFocus: onFocus,
                onBlur: onBlur,
                get style() {
                    return NavDrawer_styles_default.Column;
                },
                announce: "Main Menu",
                scroll: "none",
                get children() {
                    return [ createComponent(NavButton, {
                        onEnter: function onEnter() {
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
                        onEnter: function onEnter() {
                            return handleNavigate("/browse/movie");
                        },
                        children: "Movies"
                    }), createComponent(NavButton, {
                        icon: "tv",
                        iconColor: 4294967295,
                        announce: [ "TV Browse", "button" ],
                        onEnter: function onEnter() {
                            return handleNavigate("/browse/tv");
                        },
                        children: "TV"
                    }), createComponent(NavButton, {
                        icon: "experiment",
                        iconColor: 4294967295,
                        announce: [ "Examples", "button" ],
                        onEnter: function onEnter() {
                            return handleNavigate("/examples");
                        },
                        children: "Examples"
                    }), createComponent(NavButton, {
                        icon: "perf",
                        iconColor: 4294967295,
                        announce: [ "Benchmark", "button" ],
                        onEnter: function onEnter() {
                            return handleNavigate("/versions");
                        },
                        children: "Benchmark"
                    }) ];
                }
            })), function() {
                var _el$1 = createElement("view");
                var _ref$ = backdrop;
                typeof _ref$ === "function" ? use(_ref$, _el$1) : backdrop = _el$1;
                setProp(_el$1, "skipFocus", true);
                effect(function(_$p) {
                    return setProp(_el$1, "style", NavDrawer_styles_default.Gradient, _$p);
                });
                return _el$1;
            }(), function() {
                var _el$10 = createElement("view");
                setProp(_el$10, "width", 4);
                setProp(_el$10, "height", 56);
                setProp(_el$10, "color", 4294967295);
                setProp(_el$10, "x", 22);
                setProp(_el$10, "zIndex", 100);
                effect(function(_$p) {
                    return setProp(_el$10, "y", selectedButton(), _$p);
                });
                return _el$10;
            }() ];
        }
        return {
            setters: [ function(_renderLegacy001Js) {
                onMount = _renderLegacy001Js.$;
                isElementNode = _renderLegacy001Js.C;
                compareRect = _renderLegacy001Js.Ct;
                Config = _renderLegacy001Js.D;
                assertTruthy = _renderLegacy001Js.Dt;
                DIRTY_QUAD_BUFFER = _renderLegacy001Js.Et;
                createRoot = _renderLegacy001Js.G;
                createMemo = _renderLegacy001Js.H;
                batch = _renderLegacy001Js.I;
                getListener = _renderLegacy001Js.J;
                children = _renderLegacy001Js.L;
                Show = _renderLegacy001Js.N;
                activeElement = _renderLegacy001Js.O;
                createWebGLContext = _renderLegacy001Js.Ot;
                onCleanup = _renderLegacy001Js.Q;
                hasFocus = _renderLegacy001Js.S;
                clampUnit = _renderLegacy001Js.St;
                isFunction = _renderLegacy001Js.T;
                TextureType = _renderLegacy001Js.Tt;
                createEffect = _renderLegacy001Js.V;
                createResource = _renderLegacy001Js.W;
                mergeProps = _renderLegacy001Js.X;
                getOwner = _renderLegacy001Js.Y;
                on = _renderLegacy001Js.Z;
                ElementNode = _renderLegacy001Js._;
                WORDS_PER_QUAD = _renderLegacy001Js._t;
                createElement = _renderLegacy001Js.a;
                loadFonts = _renderLegacy001Js.b;
                isHTMLImageElement = _renderLegacy001Js.bt;
                effect = _renderLegacy001Js.c;
                defaultFontMetrics = _renderLegacy001Js.ct;
                memo = _renderLegacy001Js.d;
                CoreShaderNode = _renderLegacy001Js.dt;
                rootNode = _renderLegacy001Js.f;
                uploadCompressedTexture = _renderLegacy001Js.ft;
                use = _renderLegacy001Js.g;
                UNIT_TEXTURE_COORDS = _renderLegacy001Js.gt;
                spread = _renderLegacy001Js.h;
                MAX_QUAD_BUFFER_SIZE = _renderLegacy001Js.ht;
                createComponent = _renderLegacy001Js.i;
                untrack = _renderLegacy001Js.it;
                mergeColorAlpha = _renderLegacy001Js.kt;
                insert = _renderLegacy001Js.l;
                mapTextLayout = _renderLegacy001Js.lt;
                setProp = _renderLegacy001Js.m;
                MAX_QUADS = _renderLegacy001Js.mt;
                sharedConfig = _renderLegacy001Js.nt;
                createRenderer = _renderLegacy001Js.o;
                takeCanvasPrefetch = _renderLegacy001Js.ot;
                UpdateType = _renderLegacy001Js.pt;
                createSignal = _renderLegacy001Js.q;
                createTextNode = _renderLegacy001Js.s;
                takeSdfPrefetch = _renderLegacy001Js.st;
                runWithOwner = _renderLegacy001Js.tt;
                insertNode = _renderLegacy001Js.u;
                normalizeFontMetrics = _renderLegacy001Js.ut;
                focusPath = _renderLegacy001Js.v;
                createIndexBuffer = _renderLegacy001Js.vt;
                getNormalizedRgbaComponents = _renderLegacy001Js.wt;
                renderer = _renderLegacy001Js.x;
                calcFactoredRadiusArray = _renderLegacy001Js.xt;
                useFocusManager = _renderLegacy001Js.y;
                createTextureCoords = _renderLegacy001Js.yt;
                createComputed = _renderLegacy001Js.z;
            }, function(_utilsLegacy002Js) {
                combineStyles = _utilsLegacy002Js.n;
                clamp = _utilsLegacy002Js.t;
            }, function(_mergePropsLegacy003Js) {
                mergeProps$1 = _mergePropsLegacy003Js.t;
            }, function(_announcerLegacy004Js) {
                createScheduled = _announcerLegacy004Js.n;
                throttle = _announcerLegacy004Js.r;
                Announcer = _announcerLegacy004Js.t;
            }, function(_webLegacy005Js) {
                voidFn = _webLegacy005Js.t;
            }, function(_LazyLegacy006Js) {
                LazyRow = _LazyLegacy006Js.n;
                LazyColumn = _LazyLegacy006Js.t;
            }, function(_chainFunctionsLegacy007Js) {
                withScrolling = _chainFunctionsLegacy007Js.a;
                navigableForwardFocus = _chainFunctionsLegacy007Js.d;
                navigableHandleNavigation = _chainFunctionsLegacy007Js.f;
                chainRefs = _chainFunctionsLegacy007Js.n;
                chainFunctions = _chainFunctionsLegacy007Js.t;
            }, function(_ColumnLegacy008Js) {
                Column = _ColumnLegacy008Js.t;
            }, function(_FPSCounterLegacy00aJs) {
                setupFPS = _FPSCounterLegacy00aJs.r;
                FPSCounter = _FPSCounterLegacy00aJs.t;
            }, function(_ContentBlockLegacy00bJs) {
                ContentBlock = _ContentBlockLegacy00bJs.t;
            }, function(_createFocusStackLegacy00cJs) {
                useFocusStack = _createFocusStackLegacy00cJs.n;
                FocusStackProvider = _createFocusStackLegacy00cJs.t;
            }, function(_componentsLegacy00dJs) {
                TitleRow = _componentsLegacy00dJs.c;
                Hero = _componentsLegacy00dJs.i;
                List = _componentsLegacy00dJs.l;
                Thumbnail = _componentsLegacy00dJs.o;
                AssetPanel = _componentsLegacy00dJs.t;
            }, function(_IconLegacy00eJs) {
                Icon = _IconLegacy00eJs.t;
            }, function(_routingLegacy00fJs) {
                saveCurrentDepth = _routingLegacy00fJs._;
                createRouterContext = _routingLegacy00fJs.a;
                setInPreloadFn = _routingLegacy00fJs.c;
                useNavigate = _routingLegacy00fJs.d;
                notifyIfNotBlocked = _routingLegacy00fJs.g;
                keepDepth = _routingLegacy00fJs.h;
                createRouteContext = _routingLegacy00fJs.i;
                useLocation = _routingLegacy00fJs.l;
                createBeforeLeave = _routingLegacy00fJs.m;
                RouterContextObj = _routingLegacy00fJs.n;
                getIntent = _routingLegacy00fJs.o;
                usePreloadRoute = _routingLegacy00fJs.p;
                createBranches = _routingLegacy00fJs.r;
                getRouteMatches = _routingLegacy00fJs.s;
                RouteContextObj = _routingLegacy00fJs.t;
                useMatch = _routingLegacy00fJs.u;
            }, function(_themeLegacy00gJs) {
                theme_default = _themeLegacy00gJs.t;
            }, function(_stylesLegacy00hJs) {
                styles_default = _stylesLegacy00hJs.r;
            }, function(_stateLegacy00iJs) {
                setGlobalBackground = _stateLegacy00iJs.n;
                globalBackground = _stateLegacy00iJs.t;
            }, function(_distLegacy00jJs) {
                debounce = _distLegacy00jJs.t;
            }, function(_apiLegacy00kJs) {
                getImageUrl = _apiLegacy00kJs.n;
                api_default = _apiLegacy00kJs.t;
            }, function(_ItemFormatterLegacy00lJs) {
                convertItemsToTiles = _ItemFormatterLegacy00lJs.t;
            } ],
            execute: function execute() {
                var _createSignal11, _createSignal12;
                __vite_style__ = document.createElement("style");
                __vite_style__.textContent = "html,body,*{margin:0;padding:0}html,body{background-color:#000;width:100vw;height:100vh;margin:0;padding:0;overflow:hidden}video{z-index:2;outline:none;position:absolute;top:0;left:0}.center-element{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}#splash{z-index:9999;opacity:1;background-color:#335d92;width:100vw;height:100vh;transition:opacity .3s;position:absolute;top:0;left:0}#splash.fade-out{opacity:0;pointer-events:none}#splash img{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}\n/*$vite$:1*/";
                document.head.appendChild(__vite_style__);
                __create = Object.create;
                __defProp = Object.defineProperty;
                __getOwnPropDesc = Object.getOwnPropertyDescriptor;
                __getOwnPropNames = Object.getOwnPropertyNames;
                __getProtoOf = Object.getPrototypeOf;
                __hasOwnProp = Object.prototype.hasOwnProperty;
                _export("t", __commonJSMin = function __commonJSMin(cb, mod) {
                    return function() {
                        return mod || (cb((mod = {
                            exports: {}
                        }).exports, mod), cb = null), mod.exports;
                    };
                });
                __exportAll = function __exportAll(all, no_symbols) {
                    var target = {};
                    for (var name in all) {
                        __defProp(target, name, {
                            get: all[name],
                            enumerable: true
                        });
                    }
                    if (!no_symbols) {
                        __defProp(target, Symbol.toStringTag, {
                            value: "Module"
                        });
                    }
                    return target;
                };
                __copyProps = function __copyProps(to, from, except, desc) {
                    if (from && _typeof(from) === "object" || typeof from === "function") {
                        for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
                            key = keys[i];
                            if (!__hasOwnProp.call(to, key) && key !== except) {
                                __defProp(to, key, {
                                    get: function(k) {
                                        return from[k];
                                    }.bind(null, key),
                                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                                });
                            }
                        }
                    }
                    return to;
                };
                _export("n", __toESM = function __toESM(mod, isNodeMode, target) {
                    return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
                        value: mod,
                        enumerable: true
                    }) : target, mod);
                });
                (function polyfill() {
                    var relList = document.createElement("link").relList;
                    if (relList && relList.supports && relList.supports("modulepreload")) return;
                    var _iterator3 = _createForOfIteratorHelper(document.querySelectorAll('link[rel="modulepreload"]')), _step3;
                    try {
                        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                            var link = _step3.value;
                            processPreload(link);
                        }
                    } catch (err) {
                        _iterator3.e(err);
                    } finally {
                        _iterator3.f();
                    }
                    new MutationObserver(function(mutations) {
                        var _iterator4 = _createForOfIteratorHelper(mutations), _step4;
                        try {
                            for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
                                var mutation = _step4.value;
                                if (mutation.type !== "childList") continue;
                                var _iterator5 = _createForOfIteratorHelper(mutation.addedNodes), _step5;
                                try {
                                    for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
                                        var node = _step5.value;
                                        if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
                                    }
                                } catch (err) {
                                    _iterator5.e(err);
                                } finally {
                                    _iterator5.f();
                                }
                            }
                        } catch (err) {
                            _iterator4.e(err);
                        } finally {
                            _iterator4.f();
                        }
                    }).observe(document, {
                        childList: true,
                        subtree: true
                    });
                    function getFetchOpts(link) {
                        var fetchOpts = {};
                        if (link.integrity) fetchOpts.integrity = link.integrity;
                        if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
                        if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include"; else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit"; else fetchOpts.credentials = "same-origin";
                        return fetchOpts;
                    }
                    function processPreload(link) {
                        if (link.ep) return;
                        link.ep = true;
                        var fetchOpts = getFetchOpts(link);
                        fetch(link.href, fetchOpts);
                    }
                })();
                CoreContextTexture = function() {
                    function CoreContextTexture(memManager, textureSource) {
                        this.textureSource = void 0;
                        this.memManager = void 0;
                        this.state = "freed";
                        this.memManager = memManager;
                        this.textureSource = textureSource;
                    }
                    return _createClass(CoreContextTexture, [ {
                        key: "setTextureMemUse",
                        value: function setTextureMemUse(byteSize) {
                            this.memManager.setTextureMemUse(this.textureSource, byteSize);
                        }
                    }, {
                        key: "renderable",
                        get: function get() {
                            return this.textureSource.renderable;
                        }
                    } ]);
                }();
                CoreRenderer = _createClass(function CoreRenderer(options) {
                    this.options = void 0;
                    this.mode = void 0;
                    this.defaultTextureCoords = void 0;
                    this.stage = void 0;
                    this.options = options;
                    this.stage = options.stage;
                });
                validateArrayLength4 = function validateArrayLength4(value) {
                    if (!Array.isArray(value)) return [ value, value, value, value ];
                    assertTruthy(value);
                    if (value.length === 4) return value;
                    if (value.length === 3) {
                        value[3] = value[0];
                        return value;
                    }
                    if (value.length === 2) {
                        value[2] = value[0];
                        value[3] = value[1];
                        return value;
                    }
                    value[0] = value[0] || 0;
                    value[1] = value[0];
                    value[2] = value[0];
                    value[3] = value[0];
                    return value;
                };
                BorderTemplate = {
                    props: getBorderProps()
                };
                HolePunchTemplate = {
                    props: {
                        x: 0,
                        y: 0,
                        w: 50,
                        h: 50,
                        radius: {
                            default: [ 0, 0, 0, 0 ],
                            resolve: function resolve(value) {
                                if (value !== void 0) return validateArrayLength4(value);
                                return [].concat(this.default);
                            }
                        }
                    }
                };
                RoundedTemplate = {
                    props: {
                        radius: {
                            default: [ 0, 0, 0, 0 ],
                            resolve: function resolve(value) {
                                if (value !== void 0) return validateArrayLength4(value);
                                return [].concat(this.default);
                            }
                        },
                        "top-left": {
                            default: 0,
                            set: function set(value, props) {
                                props.radius[0] = value;
                            },
                            get: function get(props) {
                                return props.radius[0];
                            }
                        },
                        "top-right": {
                            default: 0,
                            set: function set(value, props) {
                                props.radius[1] = value;
                            },
                            get: function get(props) {
                                return props.radius[1];
                            }
                        },
                        "bottom-right": {
                            default: 0,
                            set: function set(value, props) {
                                props.radius[2] = value;
                            },
                            get: function get(props) {
                                return props.radius[2];
                            }
                        },
                        "bottom-left": {
                            default: 0,
                            set: function set(value, props) {
                                props.radius[3] = value;
                            },
                            get: function get(props) {
                                return props.radius[3];
                            }
                        }
                    }
                };
                ShadowTemplate = {
                    props: getShadowProps()
                };
                LinearGradientTemplate = {
                    props: {
                        colors: {
                            default: [ 255, 4294967295 ],
                            resolve: function resolve(value) {
                                if (value !== void 0 && value.length > 0) return value;
                                return [].concat(this.default);
                            }
                        },
                        stops: {
                            default: [ 0, 1 ],
                            resolve: function resolve(value, props) {
                                if (value !== void 0 && value.length === props.colors.length) return value;
                                if (value === void 0) value = [];
                                var len = props.colors.length;
                                for (var i = 0; i < len; i++) value[i] = i * (1 / (len - 1));
                                return value;
                            }
                        },
                        angle: 0
                    }
                };
                RadialGradientTemplate = {
                    props: {
                        colors: {
                            default: [ 255, 4294967295 ],
                            resolve: function resolve(value) {
                                if (value !== void 0 && value.length > 0) return value;
                                return [].concat(this.default);
                            }
                        },
                        stops: {
                            default: [ 0, 1 ],
                            resolve: function resolve(value, props) {
                                if (value !== void 0 && value.length === props.colors.length) return value;
                                if (value === void 0) value = [];
                                var len = props.colors.length;
                                for (var i = 0; i < len; i++) value[i] = i * (1 / (len - 1));
                                return value;
                            }
                        },
                        w: 50,
                        h: 50,
                        pivot: [ .5, .5 ]
                    }
                };
                Default = {
                    vertex: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    attribute vec2 a_position;\n    attribute vec2 a_textureCoords;\n    attribute vec4 a_color;\n    attribute vec2 a_nodeCoords;\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n    varying vec2 v_nodeCoords;\n\n    void main() {\n      vec2 normalized = a_position * u_pixelRatio / u_resolution;\n      vec2 zero_two = normalized * 2.0;\n      vec2 clip_space = zero_two - 1.0;\n\n      v_color = a_color;\n      v_textureCoords = a_textureCoords;\n      v_nodeCoords = a_nodeCoords;\n\n      gl_Position = vec4(clip_space * vec2(1.0, -1.0), 0, 1);\n    }\n  ",
                    fragment: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    uniform vec2 u_resolution;\n    uniform sampler2D u_texture;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n\n    void main() {\n      gl_FragColor = v_color * texture2D(u_texture, v_textureCoords);\n    }\n  "
                };
                WebGlShaderNode = function(_CoreShaderNode) {
                    function WebGlShaderNode(shaderKey, config, program, stage, props) {
                        var _this2;
                        _this2 = _callSuper(this, WebGlShaderNode, [ shaderKey, config, stage, props ]);
                        _this2.program = void 0;
                        _this2.updater = void 0;
                        _this2.uniforms = {
                            single: {},
                            vec2: {},
                            vec3: {},
                            vec4: {}
                        };
                        _this2.program = program;
                        if (config.update !== void 0) {
                            _this2.updater = config.update;
                            _this2.update = function() {
                                if (_this2.props === void 0) {
                                    _this2.updater(_this2.node, _this2.props);
                                    return;
                                }
                                var prevKey = _this2.valueKey;
                                _this2.valueKey = _this2.createValueKey();
                                if (prevKey === _this2.valueKey) return;
                                if (prevKey.length > 0) _this2.stage.shManager.mutateShaderValueUsage(prevKey, -1);
                                var values = _this2.stage.shManager.getShaderValues(_this2.valueKey);
                                if (values !== void 0) {
                                    _this2.uniforms = values;
                                    return;
                                }
                                _this2.uniforms = {
                                    single: {},
                                    vec2: {},
                                    vec3: {},
                                    vec4: {}
                                };
                                _this2.updater(_this2.node);
                                _this2.stage.shManager.setShaderValues(_this2.valueKey, _this2.uniforms);
                            };
                        }
                        return _this2;
                    }
                    _inherits(WebGlShaderNode, _CoreShaderNode);
                    return _createClass(WebGlShaderNode, [ {
                        key: "uniformRGBA",
                        value: function uniformRGBA(location, value) {
                            this.uniform4fv(location, new Float32Array(getNormalizedRgbaComponents(value)));
                        }
                    }, {
                        key: "uniform1f",
                        value: function uniform1f(location, value) {
                            this.uniforms.single[location] = {
                                method: "uniform1f",
                                value: value
                            };
                        }
                    }, {
                        key: "uniform1fv",
                        value: function uniform1fv(location, value) {
                            this.uniforms.single[location] = {
                                method: "uniform1fv",
                                value: value
                            };
                        }
                    }, {
                        key: "uniform1i",
                        value: function uniform1i(location, value) {
                            this.uniforms.single[location] = {
                                method: "uniform1i",
                                value: value
                            };
                        }
                    }, {
                        key: "uniform1iv",
                        value: function uniform1iv(location, value) {
                            this.uniforms.single[location] = {
                                method: "uniform1iv",
                                value: value
                            };
                        }
                    }, {
                        key: "uniform2f",
                        value: function uniform2f(location, v0, v1) {
                            this.uniforms.vec2[location] = {
                                method: "uniform2f",
                                value: [ v0, v1 ]
                            };
                        }
                    }, {
                        key: "uniform2fv",
                        value: function uniform2fv(location, value) {
                            this.uniforms.single[location] = {
                                method: "uniform2fv",
                                value: value
                            };
                        }
                    }, {
                        key: "uniform2fa",
                        value: function uniform2fa(location, value) {
                            this.uniforms.vec2[location] = {
                                method: "uniform2f",
                                value: value
                            };
                        }
                    }, {
                        key: "uniform2i",
                        value: function uniform2i(location, v0, v1) {
                            this.uniforms.vec2[location] = {
                                method: "uniform2i",
                                value: [ v0, v1 ]
                            };
                        }
                    }, {
                        key: "uniform2iv",
                        value: function uniform2iv(location, value) {
                            this.uniforms.single[location] = {
                                method: "uniform2iv",
                                value: value
                            };
                        }
                    }, {
                        key: "uniform3f",
                        value: function uniform3f(location, v0, v1, v2) {
                            this.uniforms.vec3[location] = {
                                method: "uniform3f",
                                value: [ v0, v1, v2 ]
                            };
                        }
                    }, {
                        key: "uniform3fa",
                        value: function uniform3fa(location, value) {
                            this.uniforms.vec3[location] = {
                                method: "uniform3f",
                                value: value
                            };
                        }
                    }, {
                        key: "uniform3fv",
                        value: function uniform3fv(location, value) {
                            this.uniforms.single[location] = {
                                method: "uniform3fv",
                                value: value
                            };
                        }
                    }, {
                        key: "uniform3i",
                        value: function uniform3i(location, v0, v1, v2) {
                            this.uniforms.vec3[location] = {
                                method: "uniform3i",
                                value: [ v0, v1, v2 ]
                            };
                        }
                    }, {
                        key: "uniform3iv",
                        value: function uniform3iv(location, value) {
                            this.uniforms.single[location] = {
                                method: "uniform3iv",
                                value: value
                            };
                        }
                    }, {
                        key: "uniform4f",
                        value: function uniform4f(location, v0, v1, v2, v3) {
                            this.uniforms.vec4[location] = {
                                method: "uniform4f",
                                value: [ v0, v1, v2, v3 ]
                            };
                        }
                    }, {
                        key: "uniform4fa",
                        value: function uniform4fa(location, value) {
                            this.uniforms.vec4[location] = {
                                method: "uniform4f",
                                value: value
                            };
                        }
                    }, {
                        key: "uniform4fv",
                        value: function uniform4fv(location, value) {
                            this.uniforms.single[location] = {
                                method: "uniform4fv",
                                value: value
                            };
                        }
                    }, {
                        key: "uniform4i",
                        value: function uniform4i(location, v0, v1, v2, v3) {
                            this.uniforms.vec4[location] = {
                                method: "uniform4i",
                                value: [ v0, v1, v2, v3 ]
                            };
                        }
                    }, {
                        key: "uniform4iv",
                        value: function uniform4iv(location, value) {
                            this.uniforms.single[location] = {
                                method: "uniform4iv",
                                value: value
                            };
                        }
                    }, {
                        key: "uniformMatrix2fv",
                        value: function uniformMatrix2fv(location, value) {
                            this.uniforms.single[location] = {
                                method: "uniformMatrix2fv",
                                value: value
                            };
                        }
                    }, {
                        key: "uniformMatrix3fv",
                        value: function uniformMatrix3fv(location, value) {
                            this.uniforms.single[location] = {
                                method: "uniformMatrix3fv",
                                value: value
                            };
                        }
                    }, {
                        key: "uniformMatrix4fv",
                        value: function uniformMatrix4fv(location, value) {
                            this.uniforms.single[location] = {
                                method: "uniformMatrix4fv",
                                value: value
                            };
                        }
                    } ]);
                }(CoreShaderNode);
                WebGlShaderProgram = function() {
                    function WebGlShaderProgram(renderer, config, resolvedProps) {
                        var _this3 = this;
                        this.program = void 0;
                        this.renderer = void 0;
                        this.glw = void 0;
                        this.attributeLocations = void 0;
                        this.uniformLocations = void 0;
                        this.lifecycle = void 0;
                        this.useSystemAlpha = false;
                        this.useSystemDimensions = false;
                        this.useTimeValue = false;
                        this.isDestroyed = false;
                        this.supportsIndexedTextures = false;
                        this.lastBoundUniforms = null;
                        this.lastPixelRatio = -1;
                        this.lastResolutionW = -1;
                        this.lastResolutionH = -1;
                        this.lastAlpha = -1;
                        this.lastDimensionsW = -1;
                        this.lastDimensionsH = -1;
                        this.lastTime = -1;
                        this.vaos = new Map;
                        this.renderer = renderer;
                        var glw = this.glw = renderer.glw;
                        this.supportsIndexedTextures = config.supportsIndexedTextures || this.supportsIndexedTextures;
                        (config.webgl1Extensions || []).forEach(function(extensionName) {
                            if (!glw.getExtension(extensionName)) throw new Error('Shader "'.concat(_this3.constructor.name, '" requires extension "').concat(extensionName, "\" for WebGL 1.0 but wasn't found"));
                        });
                        var vertexSource = config.vertex instanceof Function ? config.vertex(renderer, resolvedProps) : config.vertex;
                        if (vertexSource === void 0) vertexSource = Default.vertex;
                        var fragmentSource = config.fragment instanceof Function ? config.fragment(renderer, resolvedProps) : config.fragment;
                        var vertexShader = createShader(glw, glw.VERTEX_SHADER, vertexSource);
                        if (!vertexShader) throw new Error("Vertex shader creation failed");
                        var fragmentShader = createShader(glw, glw.FRAGMENT_SHADER, fragmentSource);
                        if (!fragmentShader) throw new Error("fragment shader creation failed");
                        var program = createProgram(glw, vertexShader, fragmentShader);
                        this.program = program;
                        this.attributeLocations = glw.getAttributeLocations(program);
                        var uniLocs = this.uniformLocations = glw.getUniformLocations(program);
                        this.useSystemAlpha = uniLocs["u_alpha"] !== void 0;
                        this.useSystemDimensions = uniLocs["u_dimensions"] !== void 0;
                        this.useTimeValue = this.glw.getUniformLocation(program, "u_dimensions") !== null && config.time !== void 0;
                        this.lifecycle = {
                            update: config.update,
                            canBatch: config.canBatch
                        };
                    }
                    return _createClass(WebGlShaderProgram, [ {
                        key: "disableAttribute",
                        value: function disableAttribute(location) {
                            this.glw.disableVertexAttribArray(location);
                        }
                    }, {
                        key: "disableAttributes",
                        value: function disableAttributes() {
                            var glw = this.glw;
                            var attribLen = this.attributeLocations.length;
                            for (var i = 0; i < attribLen; i++) glw.disableVertexAttribArray(i);
                        }
                    }, {
                        key: "reuseRenderOp",
                        value: function reuseRenderOp(node, currentRenderOp) {
                            if (this.lifecycle.canBatch !== void 0) return this.lifecycle.canBatch(node, currentRenderOp);
                            if (this.useTimeValue === true) {
                                if (node.time !== currentRenderOp.time) return false;
                            }
                            if (this.useSystemAlpha === true) {
                                if (node.worldAlpha !== currentRenderOp.worldAlpha) return false;
                            }
                            if (this.useSystemDimensions === true) {
                                if (node.w !== currentRenderOp.w || node.h !== currentRenderOp.h) return false;
                            }
                            var shader = node.props.shader;
                            var opShader = currentRenderOp.shader;
                            if (shader === opShader) return true;
                            if (shader === null || opShader === null) return false;
                            if (shader.uniforms === opShader.uniforms) return true;
                            var shaderPropsA = shader.resolvedProps;
                            var shaderPropsB = opShader.resolvedProps;
                            if (shaderPropsA === void 0 && shaderPropsB !== void 0 || shaderPropsA !== void 0 && shaderPropsB === void 0) return false;
                            if (shaderPropsA !== void 0 && shaderPropsB !== void 0) {
                                for (var key in shaderPropsA) if (shaderPropsA[key] !== shaderPropsB[key]) return false;
                            }
                            return true;
                        }
                    }, {
                        key: "bindRenderOp",
                        value: function bindRenderOp(renderOp, buffer) {
                            this.bindTexture(renderOp.renderOpTexture);
                            this.bindBufferCollection(buffer);
                            var pixelRatio = renderOp.stage.pixelRatio;
                            var resolutionW = this.glw.canvasW;
                            var resolutionH = this.glw.canvasH;
                            if (pixelRatio !== this.lastPixelRatio) {
                                this.glw.uniform1f("u_pixelRatio", pixelRatio);
                                this.lastPixelRatio = pixelRatio;
                            }
                            if (resolutionW !== this.lastResolutionW || resolutionH !== this.lastResolutionH) {
                                this.glw.uniform2f("u_resolution", resolutionW, resolutionH);
                                this.lastResolutionW = resolutionW;
                                this.lastResolutionH = resolutionH;
                            }
                            if (this.useTimeValue === true && renderOp.time !== this.lastTime) {
                                this.glw.uniform1f("u_time", renderOp.time);
                                this.lastTime = renderOp.time;
                            }
                            if (this.useSystemAlpha === true && renderOp.worldAlpha !== this.lastAlpha) {
                                this.glw.uniform1f("u_alpha", renderOp.worldAlpha);
                                this.lastAlpha = renderOp.worldAlpha;
                            }
                            if (this.useSystemDimensions === true && (renderOp.w !== this.lastDimensionsW || renderOp.h !== this.lastDimensionsH)) {
                                this.glw.uniform2f("u_dimensions", renderOp.w, renderOp.h);
                                this.lastDimensionsW = renderOp.w;
                                this.lastDimensionsH = renderOp.h;
                            }
                            var shader = renderOp.shader;
                            if (shader.props !== void 0) {
                                var uniforms = shader.uniforms;
                                if (uniforms === this.lastBoundUniforms) return;
                                this.lastBoundUniforms = uniforms;
                                for (var key in uniforms.single) {
                                    var _uniforms$single$key = uniforms.single[key], method = _uniforms$single$key.method, value = _uniforms$single$key.value;
                                    this.glw[method](key, value);
                                }
                                for (var _key2 in uniforms.vec2) {
                                    var _uniforms$vec2$_key = uniforms.vec2[_key2], _method = _uniforms$vec2$_key.method, _value = _uniforms$vec2$_key.value;
                                    this.glw[_method](_key2, _value[0], _value[1]);
                                }
                                for (var _key3 in uniforms.vec3) {
                                    var _uniforms$vec3$_key = uniforms.vec3[_key3], _method2 = _uniforms$vec3$_key.method, _value2 = _uniforms$vec3$_key.value;
                                    this.glw[_method2](_key3, _value2[0], _value2[1], _value2[2]);
                                }
                                for (var _key4 in uniforms.vec4) {
                                    var _uniforms$vec4$_key = uniforms.vec4[_key4], _method3 = _uniforms$vec4$_key.method, _value3 = _uniforms$vec4$_key.value;
                                    this.glw[_method3](_key4, _value3[0], _value3[1], _value3[2], _value3[3]);
                                }
                            }
                        }
                    }, {
                        key: "bindBufferCollection",
                        value: function bindBufferCollection(buffer) {
                            var glw = this.glw;
                            if (glw.canUseVertexArrayObject === true) {
                                var vao = this.vaos.get(buffer);
                                if (vao === void 0) {
                                    vao = this.createVao(buffer);
                                    this.vaos.set(buffer, vao);
                                }
                                if (vao !== null) {
                                    glw.bindVertexArray(vao);
                                    return;
                                }
                                glw.bindVertexArray(null);
                            }
                            this.bindAttributes(buffer);
                        }
                    }, {
                        key: "bindAttributes",
                        value: function bindAttributes(buffer) {
                            var glw = this.glw;
                            var attribs = this.attributeLocations;
                            var attribLen = attribs.length;
                            for (var i = 0; i < attribLen; i++) {
                                var name = attribs[i];
                                var resolvedBuffer = buffer.getBuffer(name);
                                var resolvedInfo = buffer.getAttributeInfo(name);
                                if (resolvedBuffer === void 0 || resolvedInfo === void 0) continue;
                                glw.enableVertexAttribArray(i);
                                glw.vertexAttribPointer(resolvedBuffer, i, resolvedInfo.size, resolvedInfo.type, resolvedInfo.normalized, resolvedInfo.stride, resolvedInfo.offset);
                            }
                        }
                    }, {
                        key: "createVao",
                        value: function createVao(buffer) {
                            var glw = this.glw;
                            var vao = glw.createVertexArray();
                            if (vao === null) return null;
                            glw.bindVertexArray(vao);
                            this.bindAttributes(buffer);
                            glw.bindElementArrayBuffer(this.renderer.indexBuffer);
                            return vao;
                        }
                    }, {
                        key: "bindTexture",
                        value: function bindTexture(texture) {
                            if (texture === null || texture === void 0) return;
                            this.glw.activeTexture(0);
                            this.glw.bindTexture(texture.ctxTexture);
                        }
                    }, {
                        key: "attach",
                        value: function attach() {
                            if (this.isDestroyed === true) return;
                            this.glw.useProgram(this.program, this.uniformLocations);
                        }
                    }, {
                        key: "detach",
                        value: function detach() {
                            if (this.glw.canUseVertexArrayObject === true) return;
                            this.disableAttributes();
                        }
                    }, {
                        key: "destroy",
                        value: function destroy() {
                            if (this.isDestroyed === true) return;
                            var glw = this.glw;
                            this.detach();
                            var _iterator6 = _createForOfIteratorHelper(this.vaos.values()), _step6;
                            try {
                                for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
                                    var vao = _step6.value;
                                    if (vao !== null) glw.deleteVertexArray(vao);
                                }
                            } catch (err) {
                                _iterator6.e(err);
                            } finally {
                                _iterator6.f();
                            }
                            this.vaos.clear();
                            glw.deleteProgram(this.program);
                            this.program = null;
                            this.uniformLocations = null;
                            var attribs = this.attributeLocations;
                            var attribLen = this.attributeLocations.length;
                            for (var i = 0; i < attribLen; i++) this.glw.deleteBuffer(attribs[i]);
                        }
                    } ]);
                }();
                Rounded = {
                    props: RoundedTemplate.props,
                    update: function update(node) {
                        this.uniform4fa("u_radius", calcFactoredRadiusArray(this.props.radius, node.w, node.h));
                    },
                    vertex: "\n  # ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  # else\n  precision mediump float;\n  # endif\n\n  attribute vec2 a_position;\n  attribute vec2 a_textureCoords;\n  attribute vec4 a_color;\n  attribute vec2 a_nodeCoords;\n\n  uniform vec2 u_resolution;\n  uniform float u_pixelRatio;\n\n  varying vec4 v_color;\n  varying vec2 v_textureCoords;\n  varying vec2 v_nodeCoords;\n\n  void main() {\n    vec2 normalized = a_position * u_pixelRatio;\n    vec2 screenSpace = vec2(2.0 / u_resolution.x, -2.0 / u_resolution.y);\n\n    v_color = a_color;\n    v_nodeCoords = a_nodeCoords;\n    v_textureCoords = a_textureCoords;\n\n    gl_Position = vec4(\n      normalized.x * screenSpace.x - 1.0,\n      normalized.y * -abs(screenSpace.y) + 1.0,\n      0.0,\n      1.0\n    );\n  }\n",
                    fragment: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    uniform vec2 u_dimensions;\n    uniform float u_alpha;\n    uniform float u_pixelRatio;\n    uniform sampler2D u_texture;\n    uniform vec4 u_radius;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n    varying vec2 v_nodeCoords;\n\n    void main() {\n      vec2 halfDimensions = u_dimensions * 0.5;\n      vec2 boxUv = v_nodeCoords * u_dimensions - halfDimensions;\n\n      // Branchless radius selection based on quadrant\n      // x: TL, y: TR, z: BR, w: BL\n      vec2 stepVal = step(vec2(0.0), boxUv);\n      float r = mix(\n        mix(u_radius.x, u_radius.y, stepVal.x),\n        mix(u_radius.w, u_radius.z, stepVal.x),\n        stepVal.y\n      );\n\n      vec2 q = abs(boxUv) - halfDimensions + r;\n      float d = min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r;\n\n      float edgeWidth = 1.0 / u_pixelRatio;\n      float alpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, d);\n\n      vec4 color = texture2D(u_texture, v_textureCoords) * v_color;\n      gl_FragColor = color * alpha * u_alpha;\n    }\n  "
                };
                props$2 = Object.assign({}, RoundedTemplate.props, getBorderProps("border"), {
                    "border-fill": 0
                });
                RoundedWithBorderTemplate = {
                    props: props$2
                };
                RoundedWithBorder = {
                    props: RoundedWithBorderTemplate.props,
                    update: function update(node) {
                        this.uniformRGBA("u_borderColor", this.props["border-color"]);
                        this.uniformRGBA("u_fillColor", this.props["border-fill"]);
                        this.uniform4fa("u_borderWidth", this.props["border-w"]);
                        this.uniform1f("u_borderGap", this.props["border-gap"]);
                        this.uniform1f("u_borderAlign", this.props["border-align"]);
                        this.uniform4fa("u_radius", calcFactoredRadiusArray(this.props.radius, node.w, node.h));
                    },
                    vertex: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    attribute vec2 a_position;\n    attribute vec2 a_textureCoords;\n    attribute vec4 a_color;\n    attribute vec2 a_nodeCoords;\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n    uniform vec2 u_dimensions;\n\n    uniform vec4 u_radius;\n    uniform vec4 u_borderWidth;\n    uniform float u_borderGap;\n    uniform float u_borderAlign;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n    varying vec2 v_nodeCoords;\n\n    varying vec2 v_innerSize;\n    varying vec2 v_outerSize;\n    varying vec2 v_outerBorderUv;\n    varying vec2 v_innerBorderUv;\n    varying vec4 v_innerBorderRadius;\n    varying vec4 v_outerBorderRadius;\n    varying vec2 v_halfDimensions;\n\n    void main() {\n      vec2 vertexPos = a_position * u_pixelRatio;\n      vec2 screenSpace = vec2(2.0 / u_resolution.x, -2.0 / u_resolution.y);\n      vec2 edge = clamp(a_nodeCoords * 2.0 - vec2(1.0), -1.0, 1.0);\n      vec2 edgeOffset = vec2(0.0);\n      float borderZero = 1.0 - step(0.001, dot(abs(u_borderWidth), vec4(1.0)));\n\n      v_innerSize = vec2(0.0);\n      v_outerSize = vec2(0.0);\n\n      // Defaults for the zero-border case. The fragment shader returns before\n      // reading these, so this is belt-and-braces — but an unwritten varying\n      // is undefined in GLSL ES 1.0 and would render garbage on Mali if a\n      // future edit moved a border SDF above that early return.\n      v_outerBorderUv = vec2(0.0);\n      v_innerBorderUv = vec2(0.0);\n      v_outerBorderRadius = u_radius;\n      v_innerBorderRadius = u_radius;\n\n      if(borderZero == 0.0) {\n        vec4 adjustedBorderWidth = u_borderWidth - 1.0 + clamp(u_borderWidth, -1.0, 1.0);\n\n        float borderTop = adjustedBorderWidth.x;\n        float borderRight = adjustedBorderWidth.y;\n        float borderBottom = adjustedBorderWidth.z;\n        float borderLeft = adjustedBorderWidth.w;\n\n        vec2 borderSize = vec2(borderRight + borderLeft, borderTop + borderBottom);\n        vec2 extraSize = borderSize * u_borderAlign;\n        float gapLeft = step(0.001, borderLeft) * u_borderGap;\n        float gapRight = step(0.001, borderRight) * u_borderGap;\n        float gapTop = step(0.001, borderTop) * u_borderGap;\n        float gapBottom = step(0.001, borderBottom) * u_borderGap;\n        vec2 gapSize = vec2(gapLeft + gapRight, gapTop + gapBottom);\n\n        v_outerSize = (u_dimensions + gapSize + extraSize) * 0.5;\n        v_innerSize = v_outerSize - borderSize * 0.5;\n\n        // Use sign() to avoid branching\n        vec2 borderDiff = vec2(borderRight - borderLeft, borderBottom - borderTop);\n        vec2 signDiff = sign(borderDiff);\n        borderDiff = abs(borderDiff);\n\n        vec2 gapDiff = vec2(gapRight - gapLeft, gapBottom - gapTop);\n        vec2 signGapDiff = sign(gapDiff);\n        gapDiff = abs(gapDiff);\n\n        v_outerBorderUv = -signDiff * borderDiff * u_borderAlign * 0.5 - signGapDiff * gapDiff * 0.5;\n        v_innerBorderUv = v_outerBorderUv + signDiff * borderDiff * 0.5;\n\n        v_outerBorderRadius = vec4(\n          max(0.0, u_radius.x + max(borderTop * u_borderAlign + u_borderGap, borderLeft * u_borderAlign + u_borderGap)),\n          max(0.0, u_radius.y + max(borderTop * u_borderAlign + u_borderGap, borderRight * u_borderAlign + u_borderGap)),\n          max(0.0, u_radius.z + max(borderBottom * u_borderAlign + u_borderGap, borderRight * u_borderAlign + u_borderGap)),\n          max(0.0, u_radius.w + max(borderBottom * u_borderAlign + u_borderGap, borderLeft * u_borderAlign + u_borderGap))\n        );\n\n        v_innerBorderRadius = vec4(\n          max(0.0, v_outerBorderRadius.x - max(borderTop, borderLeft)),\n          max(0.0, v_outerBorderRadius.y - max(borderTop, borderRight)),\n          max(0.0, v_outerBorderRadius.z - max(borderBottom, borderRight)),\n          max(0.0, v_outerBorderRadius.w - max(borderBottom, borderLeft))\n        );\n\n        vec2 edgeOffsetExtra = step(u_dimensions * 0.5, v_outerSize) * edge * (extraSize + u_borderGap);\n        edgeOffset = edgeOffsetExtra;\n\n        vertexPos = (a_position + edge + edgeOffset) * u_pixelRatio;\n      }\n\n      gl_Position = vec4(vertexPos.x * screenSpace.x - 1.0, -sign(screenSpace.y) * (vertexPos.y * -abs(screenSpace.y)) + 1.0, 0.0, 1.0);\n\n      v_color = a_color;\n      v_nodeCoords = a_nodeCoords + (screenSpace + edgeOffset) / (u_dimensions);\n      v_textureCoords = a_textureCoords + (screenSpace + edgeOffset) / (u_dimensions);\n\n      v_halfDimensions = u_dimensions * 0.5;\n    }\n  ",
                    fragment: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n    uniform float u_alpha;\n    uniform vec2 u_dimensions;\n    uniform sampler2D u_texture;\n\n    uniform vec4 u_radius;\n    uniform vec4 u_borderWidth;\n    uniform vec4 u_borderColor;\n    uniform vec4 u_fillColor;\n    uniform float u_borderGap;\n    uniform float u_borderAlign;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n    varying vec2 v_nodeCoords;\n\n    varying vec2 v_innerSize;\n    varying vec2 v_outerSize;\n    varying vec2 v_outerBorderUv;\n    varying vec2 v_innerBorderUv;\n    varying vec4 v_innerBorderRadius;\n    varying vec4 v_outerBorderRadius;\n    varying vec2 v_halfDimensions;\n\n    // Branchless quadrant radius select (r: x TL, y TR, z BR, w BL). This one\n    // is driven by the fragment's own position, so it genuinely diverges per\n    // fragment -- it must stay arithmetic, ternaries included.\n    float quadRadius(vec2 p, vec4 r) {\n      vec2 stepVal = step(vec2(0.0), p);\n      return mix(mix(r.x, r.y, stepVal.x), mix(r.w, r.z, stepVal.x), stepVal.y);\n    }\n\n    float roundedBox(vec2 p, vec2 s, vec4 r) {\n      float rad = quadRadius(p, r);\n      vec2 q = abs(p) - s + rad;\n      return (min(max(q.x, q.y), 0.0) + length(max(q, 0.0))) - rad;\n    }\n\n    void main() {\n      vec4 color = texture2D(u_texture, v_textureCoords) * v_color;\n      vec2 boxUv = v_nodeCoords.xy * u_dimensions - v_halfDimensions;\n      float borderZero = 1.0 - step(0.001, dot(abs(u_borderWidth), vec4(1.0)));\n      float edgeWidth = 1.0 / u_pixelRatio;\n\n      // Degenerate case: no border. Every fragment in the draw call takes this\n      // path -- the condition is uniform-driven, so there is no divergence to\n      // serialize, and skipping the two border SDFs saves two length()/sqrt\n      // evaluations per fragment on what is the most common quad in a TV rail.\n      if (borderZero == 1.0) {\n        float nodeDist = roundedBox(boxUv, v_halfDimensions - edgeWidth, u_radius);\n        float nodeAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, nodeDist);\n        gl_FragColor = (color * nodeAlpha) * u_alpha;\n        return;\n      }\n\n      float outerDist = roundedBox(boxUv + v_outerBorderUv, v_outerSize - edgeWidth, v_outerBorderRadius);\n      float innerDist = roundedBox(boxUv + v_innerBorderUv, v_innerSize - edgeWidth, v_innerBorderRadius);\n      float innerAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, innerDist);\n\n      // Second uniform-driven degenerate case: a border with no gap composites\n      // straight from the outer and inner SDFs and never needs the node SDF.\n      // outerAlpha lives in here because only this path uses it.\n      if (abs(u_borderGap) < 0.0001) {\n        float outerAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, outerDist);\n        vec4 resNoGap = mix(vec4(0.0), u_borderColor, outerAlpha * u_borderColor.a);\n        resNoGap = mix(resNoGap, color, innerAlpha);\n        gl_FragColor = resNoGap * u_alpha;\n        return;\n      }\n\n      float nodeDist = roundedBox(boxUv, v_halfDimensions - edgeWidth, u_radius);\n      float nodeAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, nodeDist);\n\n      float gapAlpha = max(0.0, innerAlpha - nodeAlpha);\n      float borderDist = max(-innerDist, outerDist);\n      float borderAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, borderDist);\n\n      vec4 resGap = (color * nodeAlpha) + (u_fillColor * gapAlpha);\n      resGap = mix(resGap, u_borderColor, borderAlpha * u_borderColor.a);\n      gl_FragColor = resGap * u_alpha;\n    }\n  "
                };
                props$1 = Object.assign({}, RoundedTemplate.props, getBorderProps("border"), getShadowProps("shadow"));
                RoundedWithBorderAndShadowTemplate = {
                    props: props$1
                };
                RoundedWithBorderAndShadow = {
                    props: RoundedWithBorderAndShadowTemplate.props,
                    update: function update(node) {
                        var props = this.props;
                        this.uniformRGBA("u_borderColor", props["border-color"]);
                        this.uniform4fa("u_borderWidth", props["border-w"]);
                        this.uniform1f("u_borderGap", this.props["border-gap"]);
                        this.uniform1f("u_borderAlign", this.props["border-align"]);
                        this.uniformRGBA("u_shadowColor", props["shadow-color"]);
                        this.uniform4fa("u_shadow", props["shadow-projection"]);
                        this.uniform4fa("u_radius", calcFactoredRadiusArray(props.radius, node.w, node.h));
                    },
                    vertex: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    attribute vec2 a_position;\n    attribute vec2 a_textureCoords;\n    attribute vec4 a_color;\n    attribute vec2 a_nodeCoords;\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n    uniform vec2 u_dimensions;\n\n    uniform vec4 u_shadow;\n    uniform vec4 u_radius;\n    uniform vec4 u_borderWidth;\n    uniform float u_borderGap;\n    uniform float u_borderAlign;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n    varying vec2 v_nodeCoords;\n\n    varying vec2 v_innerSize;\n    varying vec2 v_outerSize;\n    varying vec2 v_outerBorderUv;\n    varying vec2 v_innerBorderUv;\n    varying vec4 v_innerBorderRadius;\n    varying vec4 v_outerBorderRadius;\n    varying vec2 v_halfDimensions;\n\n    void main() {\n      vec2 screenSpace = vec2(2.0 / u_resolution.x,  -2.0 / u_resolution.y);\n      vec2 edge = clamp(a_nodeCoords * 2.0 - vec2(1.0), -1.0, 1.0);\n      float borderZero = 1.0 - step(0.001, dot(abs(u_borderWidth), vec4(1.0)));\n\n      vec2 edgeOffset = edge * ((u_shadow.w * 2.0)+ u_shadow.z) + u_shadow.xy;\n      vec2 vertexPos = (a_position + edge + edgeOffset) * u_pixelRatio;\n\n      v_innerSize = vec2(0.0);\n      v_outerSize = vec2(0.0);\n\n      // Defaults for the zero-border case. The fragment shader returns before\n      // reading these, so this is belt-and-braces — but an unwritten varying\n      // is undefined in GLSL ES 1.0 and would render garbage on Mali if a\n      // future edit moved a border SDF above that early return.\n      v_outerBorderUv = vec2(0.0);\n      v_innerBorderUv = vec2(0.0);\n      v_outerBorderRadius = u_radius;\n      v_innerBorderRadius = u_radius;\n\n      if(borderZero == 0.0) {\n        vec4 adjustedBorderWidth = u_borderWidth - 1.0 + clamp(u_borderWidth, -1.0, 1.0);\n\n        float borderTop = adjustedBorderWidth.x;\n        float borderRight = adjustedBorderWidth.y;\n        float borderBottom = adjustedBorderWidth.z;\n        float borderLeft = adjustedBorderWidth.w;\n\n        vec2 borderSize = vec2(borderRight + borderLeft, borderTop + borderBottom);\n        vec2 extraSize = borderSize * u_borderAlign;\n        float gapLeft = step(0.001, borderLeft) * u_borderGap;\n        float gapRight = step(0.001, borderRight) * u_borderGap;\n        float gapTop = step(0.001, borderTop) * u_borderGap;\n        float gapBottom = step(0.001, borderBottom) * u_borderGap;\n        vec2 gapSize = vec2(gapLeft + gapRight, gapTop + gapBottom);\n\n        v_outerSize = (u_dimensions + gapSize + extraSize) * 0.5;\n        v_innerSize = v_outerSize - borderSize * 0.5;\n\n        // Use sign() to avoid branching\n        vec2 borderDiff = vec2(borderRight - borderLeft, borderBottom - borderTop);\n        vec2 signDiff = sign(borderDiff);\n        borderDiff = abs(borderDiff);\n\n        vec2 gapDiff = vec2(gapRight - gapLeft, gapBottom - gapTop);\n        vec2 signGapDiff = sign(gapDiff);\n        gapDiff = abs(gapDiff);\n\n        v_outerBorderUv = -signDiff * borderDiff * u_borderAlign * 0.5 - signGapDiff * gapDiff * 0.5;\n        v_innerBorderUv = v_outerBorderUv + signDiff * borderDiff * 0.5;\n\n        v_outerBorderRadius = vec4(\n          max(0.0, u_radius.x + max(borderTop * u_borderAlign + u_borderGap, borderLeft * u_borderAlign + u_borderGap)),\n          max(0.0, u_radius.y + max(borderTop * u_borderAlign + u_borderGap, borderRight * u_borderAlign + u_borderGap)),\n          max(0.0, u_radius.z + max(borderBottom * u_borderAlign + u_borderGap, borderRight * u_borderAlign + u_borderGap)),\n          max(0.0, u_radius.w + max(borderBottom * u_borderAlign + u_borderGap, borderLeft * u_borderAlign + u_borderGap))\n        );\n\n        v_innerBorderRadius = vec4(\n          max(0.0, v_outerBorderRadius.x - max(borderTop, borderLeft)),\n          max(0.0, v_outerBorderRadius.y - max(borderTop, borderRight)),\n          max(0.0, v_outerBorderRadius.z - max(borderBottom, borderRight)),\n          max(0.0, v_outerBorderRadius.w - max(borderBottom, borderLeft))\n        );\n\n        vec2 edgeOffsetExtra = step(u_dimensions * 0.5, v_outerSize) * edge * (extraSize + u_borderGap);\n        edgeOffset += edgeOffsetExtra;\n\n        vertexPos = (a_position + edge + edgeOffset) * u_pixelRatio;\n      }\n\n      gl_Position = vec4(vertexPos.x * screenSpace.x - 1.0, -sign(screenSpace.y) * (vertexPos.y * -abs(screenSpace.y)) + 1.0, 0.0, 1.0);\n\n      v_halfDimensions = u_dimensions * 0.5;\n      v_color = a_color;\n      v_nodeCoords = a_nodeCoords + (screenSpace + edgeOffset) / (u_dimensions);\n      v_textureCoords = a_textureCoords + (screenSpace + edgeOffset) / (u_dimensions);\n    }\n  ",
                    fragment: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n    uniform float u_alpha;\n    uniform vec2 u_dimensions;\n    uniform sampler2D u_texture;\n\n    uniform vec4 u_radius;\n    uniform vec4 u_borderWidth;\n    uniform vec4 u_borderColor;\n    uniform vec4 u_shadowColor;\n    uniform vec4 u_shadow;\n    uniform float u_borderGap;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n    varying vec2 v_nodeCoords;\n\n    varying vec2 v_innerSize;\n    varying vec2 v_outerSize;\n    varying vec2 v_outerBorderUv;\n    varying vec2 v_innerBorderUv;\n    varying vec4 v_innerBorderRadius;\n    varying vec4 v_outerBorderRadius;\n    varying vec2 v_halfDimensions;\n\n    // Branchless quadrant radius select (r: x TL, y TR, z BR, w BL) --\n    // Mali 400-class fragment pipelines serialize any branch, ternaries included.\n    float quadRadius(vec2 p, vec4 r) {\n      vec2 stepVal = step(vec2(0.0), p);\n      return mix(mix(r.x, r.y, stepVal.x), mix(r.w, r.z, stepVal.x), stepVal.y);\n    }\n\n    float roundedBox(vec2 p, vec2 s, vec4 r) {\n      float rad = quadRadius(p, r);\n      vec2 q = abs(p) - s + rad;\n      return (min(max(q.x, q.y), 0.0) + length(max(q, 0.0))) - rad;\n    }\n\n    float shadowBox(vec2 p, vec2 s, vec4 r) {\n      float rad = quadRadius(p, r);\n      vec2 q = abs(p) - s + rad;\n      float dist = min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - rad;\n      return 1.0 - smoothstep(-u_shadow.w, u_shadow.w + u_shadow.z, dist);\n    }\n\n    void main() {\n      vec4 color = texture2D(u_texture, v_textureCoords) * v_color;\n      vec2 boxUv = v_nodeCoords.xy * u_dimensions - v_halfDimensions;\n      float borderZero = 1.0 - step(0.001, dot(abs(u_borderWidth), vec4(1.0)));\n      float edgeWidth = 1.0 / u_pixelRatio;\n\n      // Degenerate case: no border. Uniform-driven, so the whole draw call\n      // takes it together -- no divergence to serialize -- and it drops the\n      // two border SDFs, halving the length()/sqrt count per fragment.\n      if (borderZero == 1.0) {\n        float nodeDist = roundedBox(boxUv, v_halfDimensions - edgeWidth, u_radius);\n        float nodeAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, nodeDist);\n        float shadowAlpha = shadowBox(\n          boxUv - u_shadow.xy,\n          v_halfDimensions + u_shadow.w - edgeWidth,\n          u_radius + u_shadow.z\n        );\n        gl_FragColor = mix(u_shadowColor * shadowAlpha, color, nodeAlpha) * u_alpha;\n        return;\n      }\n\n      // Shadow geometry select, branchless: when the border grows the quad\n      // beyond the node (outer size exceeds half dimensions on either axis)\n      // the shadow hugs the outer border box, otherwise the node box. Kept as\n      // a step()/mix() parameter select into ONE shadowBox call -- it picks\n      // arguments rather than skipping work, so a branch would buy nothing.\n      float outerSel = max(\n        step(v_halfDimensions.x, v_outerSize.x),\n        step(v_halfDimensions.y, v_outerSize.y)\n      );\n      float shadowAlpha = shadowBox(\n        boxUv + v_outerBorderUv * outerSel - u_shadow.xy,\n        mix(v_halfDimensions, v_outerSize, outerSel) + u_shadow.w - edgeWidth,\n        mix(u_radius, v_outerBorderRadius, outerSel) + u_shadow.z\n      );\n      vec4 shadowBase = u_shadowColor * shadowAlpha;\n\n      float outerDist = roundedBox(boxUv + v_outerBorderUv, v_outerSize - edgeWidth, v_outerBorderRadius);\n      float innerDist = roundedBox(boxUv + v_innerBorderUv, v_innerSize - edgeWidth, v_innerBorderRadius);\n\n      // Second uniform-driven degenerate case: a border with no gap never\n      // needs the node SDF. The edge alphas live in here because the gap path\n      // below composites from the raw distances instead.\n      if (abs(u_borderGap) < 0.0001) {\n        float outerAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, outerDist);\n        float innerAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, innerDist);\n        vec4 resNoGap = mix(shadowBase, u_borderColor, outerAlpha * u_borderColor.a);\n        resNoGap = mix(resNoGap, color, innerAlpha);\n        gl_FragColor = resNoGap * u_alpha;\n        return;\n      }\n\n      float nodeDist = roundedBox(boxUv, v_halfDimensions - edgeWidth, u_radius);\n      float nodeAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, nodeDist);\n\n      float borderDist = max(-innerDist, outerDist);\n      float borderAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, borderDist);\n\n      vec4 resFill = mix(shadowBase, color, nodeAlpha);\n      vec4 resGap = mix(resFill, u_borderColor, borderAlpha * u_borderColor.a);\n      gl_FragColor = resGap * u_alpha;\n    }\n  "
                };
                props = Object.assign({}, RoundedTemplate.props, getShadowProps("shadow"));
                RoundedWithShadowTemplate = {
                    props: props
                };
                RoundedWithShadow = {
                    props: RoundedWithShadowTemplate.props,
                    update: function update(node) {
                        this.uniformRGBA("u_shadow_color", this.props["shadow-color"]);
                        this.uniform4fa("u_shadow", this.props["shadow-projection"]);
                        this.uniform4fa("u_radius", calcFactoredRadiusArray(this.props.radius, node.w, node.h));
                    },
                    vertex: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    attribute vec2 a_position;\n    attribute vec2 a_textureCoords;\n    attribute vec4 a_color;\n    attribute vec2 a_nodeCoords;\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n    uniform vec2 u_dimensions;\n\n    uniform vec4 u_shadow;\n    uniform vec4 u_radius;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n\n    varying vec2 v_boxUv;\n    varying vec2 v_boxSize;\n    varying vec2 v_boxSmooth;\n    varying vec2 v_shadowBox;\n    varying vec2 v_shadowSize;\n    varying vec4 v_shadowRadius;\n    varying vec2 v_shadowSmooth;\n\n    void main() {\n      vec2 screenSpace = vec2(2.0 / u_resolution.x,  -2.0 / u_resolution.y);\n      vec2 outerEdge = clamp(a_nodeCoords * 2.0 - vec2(1.0), -1.0, 1.0);\n\n      vec2 padding = vec2(max(0.0, u_shadow.w) + u_shadow.z);\n      vec2 offsetShift = mix(min(vec2(0.0), u_shadow.xy), max(vec2(0.0), u_shadow.xy), (outerEdge + 1.0) * 0.5);\n      vec2 shadowEdge = outerEdge * padding + offsetShift;\n\n      vec2 vertexPos = (a_position + outerEdge + shadowEdge) * u_pixelRatio;\n      gl_Position = vec4(vertexPos.x * screenSpace.x - 1.0, -sign(screenSpace.y) * (vertexPos.y * -abs(screenSpace.y)) + 1.0, 0.0, 1.0);\n\n      v_color = a_color;\n      v_textureCoords = a_textureCoords + (screenSpace + shadowEdge) / (u_dimensions);\n\n      float edgeWidth = 1.0 / u_pixelRatio;\n      vec2 halfDimensions = u_dimensions * 0.5;\n\n      v_boxUv = (a_nodeCoords + (screenSpace + shadowEdge) / (u_dimensions)) * u_dimensions - halfDimensions;\n      v_boxSize = halfDimensions - edgeWidth;\n      v_boxSmooth = vec2(-0.5 * edgeWidth, 0.5 * edgeWidth);\n\n      v_shadowBox = v_boxUv - u_shadow.xy;\n      v_shadowSize = halfDimensions + u_shadow.w - edgeWidth;\n      v_shadowRadius = max(vec4(0.0), u_radius + u_shadow.w);\n      v_shadowSmooth = vec2(-u_shadow.z, u_shadow.z + 0.001);\n    }\n  ",
                    fragment: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    uniform float u_alpha;\n    uniform sampler2D u_texture;\n\n    uniform vec4 u_shadow_color;\n    uniform vec4 u_radius;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n\n    varying vec2 v_boxUv;\n    varying vec2 v_boxSize;\n    varying vec2 v_boxSmooth;\n    varying vec2 v_shadowBox;\n    varying vec2 v_shadowSize;\n    varying vec4 v_shadowRadius;\n    varying vec2 v_shadowSmooth;\n\n    // Branchless quadrant radius select (r: x TL, y TR, z BR, w BL) --\n    // Mali 400-class fragment pipelines serialize any branch, ternaries included.\n    float quadRadius(vec2 p, vec4 r) {\n      vec2 stepVal = step(vec2(0.0), p);\n      return mix(mix(r.x, r.y, stepVal.x), mix(r.w, r.z, stepVal.x), stepVal.y);\n    }\n\n    float roundedBox(vec2 p, vec2 s, vec4 r) {\n      float rad = quadRadius(p, r);\n      vec2 q = abs(p) - s + rad;\n      return (min(max(q.x, q.y), 0.0) + length(max(q, 0.0))) - rad;\n    }\n\n    float shadowBox(vec2 p, vec2 s, vec4 r) {\n      float rad = quadRadius(p, r);\n      vec2 q = abs(p) - s + rad;\n      float dist = min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - rad;\n      return 1.0 - smoothstep(v_shadowSmooth.x, v_shadowSmooth.y, dist);\n    }\n\n    void main() {\n      vec4 color = texture2D(u_texture, v_textureCoords) * v_color;\n\n      float boxDist = roundedBox(v_boxUv, v_boxSize, u_radius);\n      float roundedAlpha = 1.0 - smoothstep(v_boxSmooth.x, v_boxSmooth.y, boxDist);\n\n      // Uniform-driven gate: a fully transparent shadow contributes nothing,\n      // so skip its SDF entirely rather than multiplying the result by zero.\n      // The condition is the same for every fragment in the draw call.\n      vec4 resColor = vec4(0.0);\n      if (u_shadow_color.a >= 0.0001) {\n        float shadowAlpha = shadowBox(v_shadowBox, v_shadowSize, v_shadowRadius);\n        resColor = u_shadow_color * shadowAlpha;\n      }\n\n      resColor = mix(resColor, color, min(color.a, roundedAlpha));\n      gl_FragColor = resColor * u_alpha;\n    }\n  "
                };
                HolePunch = {
                    props: HolePunchTemplate.props,
                    update: function update() {
                        var props = this.props;
                        this.uniform2f("u_pos", props.x, props.y);
                        this.uniform2f("u_size", props.w * .5, props.h * .5);
                        this.uniform4fa("u_radius", calcFactoredRadiusArray(props.radius, props.w, props.h));
                    },
                    getCacheMarkers: function getCacheMarkers(props) {
                        return "radiusArray:".concat(Array.isArray(props.radius));
                    },
                    fragment: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    uniform float u_alpha;\n    uniform float u_pixelRatio;\n    uniform vec2 u_dimensions;\n    uniform sampler2D u_texture;\n\n    uniform vec2 u_size;\n    uniform vec2 u_pos;\n\n    uniform vec4 u_radius;\n\n    uniform vec4 u_color;\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n\n    void main() {\n      vec4 color = texture2D(u_texture, v_textureCoords) * v_color;\n      vec2 p = (v_textureCoords.xy * u_dimensions.xy - u_pos) - u_size;\n\n      // Branchless radius selection based on quadrant\n      // x: TL, y: TR, z: BR, w: BL\n      vec2 stepVal = step(vec2(0.0), p);\n      float r = mix(\n        mix(u_radius.x, u_radius.y, stepVal.x),\n        mix(u_radius.w, u_radius.z, stepVal.x),\n        stepVal.y\n      );\n\n      p = abs(p) - u_size + r;\n      float dist = min(max(p.x, p.y), 0.0) + length(max(p, 0.0)) - r + 2.0;\n      float roundedAlpha = 1.0 - smoothstep(0.0, u_pixelRatio, dist);\n      gl_FragColor = mix(color, vec4(0.0), min(color.a, roundedAlpha));\n    }\n  "
                };
                LinearGradient = {
                    props: LinearGradientTemplate.props,
                    update: function update(node) {
                        var props = this.props;
                        var angle = props.angle - Math.PI / 180 * 90;
                        var c = Math.cos(angle);
                        var s = Math.sin(angle);
                        var w = node.w;
                        var h = node.h;
                        var lineDist = Math.abs(w * c) + Math.abs(h * s);
                        var gx = -lineDist * c;
                        var gy = -lineDist * s;
                        var gg = gx * gx + gy * gy;
                        var invGG = gg > 0 ? 1 / gg : 0;
                        var fx = lineDist * .5 * c + w * .5;
                        var fy = lineDist * .5 * s + h * .5;
                        this.uniform2f("u_grad_a", w * gx * invGG, h * gy * invGG);
                        this.uniform1f("u_grad_b", -(fx * gx + fy * gy) * invGG);
                        this.uniform1fv("u_stops", new Float32Array(props.stops));
                        var colors = [];
                        for (var i = 0; i < props.colors.length; i++) {
                            var norm = getNormalizedRgbaComponents(props.colors[i]);
                            colors.push(norm[0], norm[1], norm[2], norm[3]);
                        }
                        this.uniform4fv("u_colors", new Float32Array(colors));
                    },
                    getCacheMarkers: function getCacheMarkers(props) {
                        return "colors:".concat(props.colors.length);
                    },
                    fragment: function fragment(renderer, props) {
                        return "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    #define MAX_STOPS ".concat(props.colors.length, "\n\n    uniform float u_alpha;\n\n    uniform sampler2D u_texture;\n\n    uniform vec2 u_grad_a;\n    uniform float u_grad_b;\n    uniform float u_stops[MAX_STOPS];\n    uniform vec4 u_colors[MAX_STOPS];\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n\n    vec4 getGradientColor(float dist) {\n      dist = clamp(dist, 0.0, 1.0);\n      ").concat(genGradientColors(props.colors.length), "\n      return colorOut;\n    }\n\n    void main() {\n      vec4 color = texture2D(u_texture, v_textureCoords) * v_color;\n      float dist = dot(v_textureCoords, u_grad_a) + u_grad_b;\n      vec4 colorOut = getGradientColor(dist);\n      color = mix(color, colorOut, clamp(colorOut.a, 0.0, 1.0));\n      gl_FragColor = color * u_alpha;\n    }\n  ");
                    }
                };
                RadialGradient = {
                    props: RadialGradientTemplate.props,
                    update: function update(node) {
                        var props = this.props;
                        this.uniform2f("u_projection", props.pivot[0] * node.w, props.pivot[1] * node.h);
                        this.uniform2f("u_size", props.w, props.h);
                        this.uniform1fv("u_stops", new Float32Array(props.stops));
                        var colors = [];
                        for (var i = 0; i < props.colors.length; i++) {
                            var norm = getNormalizedRgbaComponents(props.colors[i]);
                            colors.push(norm[0], norm[1], norm[2], norm[3]);
                        }
                        this.uniform4fv("u_colors", new Float32Array(colors));
                    },
                    getCacheMarkers: function getCacheMarkers(props) {
                        return "colors:".concat(props.colors.length);
                    },
                    fragment: function fragment(renderer, props) {
                        return "\n      # ifdef GL_FRAGMENT_PRECISION_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      #define MAX_STOPS ".concat(props.colors.length, "\n\n      uniform float u_alpha;\n      uniform vec2 u_dimensions;\n\n      uniform sampler2D u_texture;\n\n      uniform vec2 u_projection;\n      uniform vec2 u_size;\n\n      uniform float u_stops[MAX_STOPS];\n      uniform vec4 u_colors[MAX_STOPS];\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoords;\n      varying vec2 v_nodeCoords;\n\n      vec4 getGradientColor(float dist) {\n        dist = clamp(dist, 0.0, 1.0);\n        ").concat(genGradientColors(props.colors.length), "\n        return colorOut;\n      }\n\n      void main() {\n        vec4 color = texture2D(u_texture, v_textureCoords) * v_color;\n        vec2 point = v_nodeCoords.xy * u_dimensions;\n        float dist = length((point - u_projection) / u_size);\n\n        vec4 colorOut = getGradientColor(dist);\n        color = mix(color, colorOut, clamp(colorOut.a, 0.0, 1.0));\n        gl_FragColor = color * u_alpha;\n      }\n    ");
                    }
                };
                RadialProgressTemplate = {
                    props: {
                        width: 8,
                        radius: 0,
                        progress: {
                            default: 1,
                            resolve: function resolve(value) {
                                if (value === void 0) return this.default;
                                if (value < 0) return 0;
                                if (value > 1) return 1;
                                return value;
                            }
                        },
                        startAngle: -Math.PI / 2,
                        direction: 1,
                        colors: {
                            default: [ 4294967295 ],
                            resolve: function resolve(value) {
                                if (value !== void 0 && value.length > 0) return value;
                                return [].concat(this.default);
                            }
                        },
                        stops: {
                            default: [ 0 ],
                            resolve: function resolve(value, props) {
                                if (value !== void 0 && value.length === props.colors.length) return value;
                                if (value === void 0) value = [];
                                var len = props.colors.length;
                                if (len === 1) {
                                    value[0] = 0;
                                    value.length = 1;
                                    return value;
                                }
                                for (var i = 0; i < len; i++) value[i] = i * (1 / (len - 1));
                                value.length = len;
                                return value;
                            }
                        },
                        trackColor: 0,
                        cap: 1,
                        duration: {
                            default: 0,
                            resolve: function resolve(value) {
                                if (value === void 0) return this.default;
                                if (value < 0) return 0;
                                return value;
                            }
                        },
                        countdown: 1
                    }
                };
                RadialProgress = {
                    props: RadialProgressTemplate.props,
                    time: true,
                    update: function update(node) {
                        var props = this.props;
                        var autoRadius = Math.min(node.w, node.h) * .5 - props.width * .5;
                        var radius = props.radius > 0 ? props.radius : autoRadius;
                        this.uniform2f("u_center", node.w * .5, node.h * .5);
                        this.uniform1f("u_radius", radius);
                        this.uniform1f("u_width", props.width);
                        this.uniform1f("u_progress", props.progress);
                        this.uniform1f("u_startAngle", props.startAngle);
                        this.uniform1f("u_direction", props.direction);
                        this.uniform1f("u_duration", props.duration);
                        this.uniform1f("u_countdown", props.countdown);
                        this.uniform1fv("u_stops", new Float32Array(props.stops));
                        var colors = [];
                        for (var i = 0; i < props.colors.length; i++) {
                            var norm = getNormalizedRgbaComponents(props.colors[i]);
                            colors.push(norm[0], norm[1], norm[2], norm[3]);
                        }
                        this.uniform4fv("u_colors", new Float32Array(colors));
                        var trackNorm = getNormalizedRgbaComponents(props.trackColor);
                        this.uniform4f("u_trackColor", trackNorm[0], trackNorm[1], trackNorm[2], trackNorm[3]);
                    },
                    getCacheMarkers: function getCacheMarkers(props) {
                        return "colors:".concat(props.colors.length, "|cap:").concat(props.cap, "|track:").concat(props.trackColor !== 0 ? 1 : 0);
                    },
                    fragment: function fragment(renderer, props) {
                        var maxStops = Math.max(props.colors.length, 1);
                        return "\n      # ifdef GL_FRAGMENT_PRECISION_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      #define MAX_STOPS ".concat(maxStops, "\n      #define CAP_ROUND ").concat(props.cap, "\n      #define HAS_TRACK ").concat(props.trackColor !== 0 ? 1 : 0, "\n\n      #define TWO_PI 6.28318530717958647692\n\n      uniform float u_alpha;\n      uniform float u_time;\n      uniform vec2 u_dimensions;\n      uniform sampler2D u_texture;\n\n      uniform vec2 u_center;\n      uniform float u_radius;\n      uniform float u_width;\n      uniform float u_progress;\n      uniform float u_startAngle;\n      uniform float u_direction;\n      uniform float u_duration;\n      uniform float u_countdown;\n\n      uniform float u_stops[MAX_STOPS];\n      uniform vec4 u_colors[MAX_STOPS];\n      uniform vec4 u_trackColor;\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoords;\n      varying vec2 v_nodeCoords;\n\n      vec4 getGradientColor(float dist) {\n        dist = clamp(dist, 0.0, 1.0);\n        ").concat(genGradientColors(maxStops), "\n        return colorOut;\n      }\n\n      // Coverage of a disc centered at `c` with radius `r` at pixel `p` (with 1px AA)\n      float discCoverage(vec2 p, vec2 c, float r) {\n        return 1.0 - smoothstep(r - 1.0, r + 1.0, length(p - c));\n      }\n\n      void main() {\n        vec4 base = texture2D(u_texture, v_textureCoords) * v_color;\n\n        // Effective progress: when u_duration > 0 the shader self-animates from\n        // u_time, otherwise we use the static u_progress prop. countdown == 1\n        // drains (1 -> 0), countdown == 0 fills (0 -> 1).\n        // Branchless (Mali 400 serializes uniform branches): the mix()-guarded\n        // denominator keeps the division finite when u_duration == 0 -- a\n        // max()-clamped epsilon would overflow fp16 mediump to Inf/NaN.\n        float hasDuration = step(0.0001, u_duration);\n        float cyclePos = fract(u_time / mix(1.0, u_duration, hasDuration)) * hasDuration;\n        float animProgress = mix(cyclePos, 1.0 - cyclePos, step(0.5, u_countdown));\n        float progress = mix(u_progress, animProgress, hasDuration);\n\n        vec2 p = v_nodeCoords.xy * u_dimensions - u_center;\n        float dist = length(p);\n        float halfW = u_width * 0.5;\n\n        // Ring coverage: 1 inside the stroke band, 0 outside (with 1px AA on both edges)\n        float ringCoverage =\n          smoothstep(u_radius - halfW - 1.0, u_radius - halfW + 1.0, dist) *\n          (1.0 - smoothstep(u_radius + halfW - 1.0, u_radius + halfW + 1.0, dist));\n\n        // Angle along the arc, normalized to [0, 1) starting at u_startAngle\n        float ang = atan(p.y, p.x);\n        float t = mod((ang - u_startAngle) * u_direction, TWO_PI) / TWO_PI;\n\n        // Filled arc coverage (1 if in filled arc, else 0). When progress >= 1 the\n        // whole ring is filled regardless of `t` -- guards against the mod() seam.\n        float arcCoverage = max(step(1.0, progress), step(t, progress));\n        float fillCoverage = ringCoverage * arcCoverage;\n\n        #if CAP_ROUND\n          // Round caps: discs of radius halfW at the start and head of the arc\n          float a0 = u_startAngle;\n          float a1 = u_startAngle + u_direction * progress * TWO_PI;\n          vec2 cap0 = vec2(cos(a0), sin(a0)) * u_radius;\n          vec2 cap1 = vec2(cos(a1), sin(a1)) * u_radius;\n          float capMask = max(discCoverage(p, cap0, halfW), discCoverage(p, cap1, halfW));\n          // Caps only visible when there's something to cap (progress > 0 and < 1).\n          float capGate = step(0.0001, progress) * step(progress, 0.9999);\n          fillCoverage = max(fillCoverage, capMask * capGate);\n        #endif\n\n        // Sample gradient. Normalize `t` to the *filled* portion so the gradient\n        // spans the visible arc end-to-end regardless of progress. mix()-guarded\n        // denominator: safe at progress == 0 without fp16 overflow.\n        float hasProgress = step(0.000001, progress);\n        float gradT = clamp(t / mix(1.0, progress, hasProgress), 0.0, 1.0) * hasProgress;\n        vec4 fillCol = getGradientColor(gradT);\n\n        // Composite: track under fill (if track enabled), both gated by ringCoverage.\n        // We work in PREMULTIPLIED-alpha space here so AA edges composite cleanly\n        // against `base` -- mix(base.rgb, layer.rgb, la) with a coverage-scaled\n        // `layer` would multiply layer.rgb by coverage a second time and darken\n        // the AA falloff (see issue #36). The renderer's blend func is\n        // (ONE, ONE_MINUS_SRC_ALPHA), which expects premultiplied output.\n        vec4 fillPM = vec4(fillCol.rgb * fillCol.a, fillCol.a);\n        vec4 layer = vec4(0.0);\n        #if HAS_TRACK\n          vec4 trackPM = vec4(u_trackColor.rgb * u_trackColor.a, u_trackColor.a);\n          float trackCoverage = ringCoverage * (1.0 - fillCoverage);\n          layer = trackPM * trackCoverage + fillPM * fillCoverage;\n        #else\n          layer = fillPM * fillCoverage;\n        #endif\n\n        // Apply node opacity to the introduced ring/track colors. They come\n        // from u_colors / u_trackColor and do not carry worldAlpha, so without\n        // this a fading RadialProgress node would keep its ring fully opaque.\n        // `base` already includes worldAlpha (via v_color), so it is left as-is\n        // to avoid double-applying. Scaling a premultiplied layer is valid.\n        layer *= u_alpha;\n\n        // Premultiplied \"over\": out = src + dst*(1 - src.a). The output stays\n        // visible on a fully-transparent `base` because layer brings its own alpha.\n        float la = clamp(layer.a, 0.0, 1.0);\n        vec3 blended = base.rgb * (1.0 - la) + layer.rgb;\n        float outA = base.a + la * (1.0 - base.a);\n        gl_FragColor = vec4(blended, outA);\n      }\n    ");
                    }
                };
                invisibleChars = /[\u200B\u200C\u200D\uFEFF\u00AD\u2060]/g;
                SdfFontHandler_exports = __exportAll({
                    MAX_FONT_LOAD_RETRIES: function MAX_FONT_LOAD_RETRIES() {
                        return 3;
                    },
                    canRenderFont: function canRenderFont() {
                        return canRenderFont$1;
                    },
                    getAtlas: function getAtlas() {
                        return _getAtlas;
                    },
                    getFontData: function getFontData() {
                        return _getFontData;
                    },
                    getFontFamilies: function getFontFamilies() {
                        return getFontFamilies$1;
                    },
                    getFontMetrics: function getFontMetrics() {
                        return getFontMetrics$1;
                    },
                    getLoadedFonts: function getLoadedFonts() {
                        return _getLoadedFonts;
                    },
                    getMaxCharHeight: function getMaxCharHeight() {
                        return _getMaxCharHeight;
                    },
                    init: function init() {
                        return init$3;
                    },
                    isFontLoaded: function isFontLoaded() {
                        return isFontLoaded$1;
                    },
                    loadFont: function loadFont() {
                        return loadFont$1;
                    },
                    measureText: function measureText() {
                        return measureText$1;
                    },
                    processFontMetrics: function processFontMetrics() {
                        return processFontMetrics$1;
                    },
                    stopWaitingForFont: function stopWaitingForFont() {
                        return stopWaitingForFont$1;
                    },
                    type: function type() {
                        return "sdf";
                    },
                    unloadFont: function unloadFont() {
                        return _unloadFont;
                    },
                    waitingForFont: function waitingForFont() {
                        return waitingForFont$1;
                    }
                });
                MAX_FONT_LOAD_RETRIES = 3;
                fontCache$1 = new Map;
                fontLoadPromises$1 = new Map;
                normalizedMetrics$1 = new Map;
                nodesWaitingForFont$1 = Object.create(null);
                initialized$1 = false;
                buildKerningTable = function buildKerningTable(kernings) {
                    var kerningTable = {};
                    var i = 0;
                    var length = kernings.length;
                    while (i < length) {
                        var kerning = kernings[i];
                        i++;
                        if (kerning === void 0) continue;
                        var second = kerning.second;
                        var firsts = kerningTable[second];
                        if (firsts === void 0) {
                            firsts = {};
                            kerningTable[second] = firsts;
                        }
                        firsts[kerning.first] = kerning.amount;
                    }
                    return kerningTable;
                };
                buildGlyphMap = function buildGlyphMap(chars) {
                    var glyphMap = new Map;
                    var maxCharHeight = 0;
                    var i = 0;
                    var length = chars.length;
                    while (i < length) {
                        var glyph = chars[i];
                        i++;
                        if (glyph === void 0) continue;
                        glyphMap.set(glyph.id, glyph);
                        var charHeight = glyph.yoffset + glyph.height;
                        if (charHeight > maxCharHeight) maxCharHeight = charHeight;
                    }
                    return glyphMap;
                };
                processFontData$1 = function processFontData$1(fontFamily, fontData, atlasTexture, metrics) {
                    var glyphMap = buildGlyphMap(fontData.chars);
                    var kernings = buildKerningTable(fontData.kernings);
                    var maxCharHeight = 0;
                    var i = 0;
                    var length = fontData.chars.length;
                    while (i < length) {
                        var glyph = fontData.chars[i];
                        if (glyph !== void 0) {
                            var charHeight = glyph.yoffset + glyph.height;
                            if (charHeight > maxCharHeight) maxCharHeight = charHeight;
                        }
                        i++;
                    }
                    if (metrics === void 0 && fontData.lightningMetrics === void 0) console.warn("Font metrics not found for SDF font ".concat(fontFamily, ". Make sure you are using the latest version of the Lightning 3 msdf-generator tool to generate your SDF fonts. Using default metrics."));
                    metrics = metrics || fontData.lightningMetrics || {
                        ascender: 800,
                        descender: -200,
                        lineGap: 200,
                        unitsPerEm: 1e3
                    };
                    if (metrics.capHeight === void 0) {
                        var capGlyph = glyphMap.get(72);
                        if (capGlyph !== void 0) {
                            var capHeightAtlasPx = fontData.common.base - capGlyph.yoffset;
                            metrics = _objectSpread(_objectSpread({}, metrics), {}, {
                                capHeight: capHeightAtlasPx / fontData.info.size * metrics.unitsPerEm
                            });
                        }
                    }
                    if (metrics.xHeight === void 0) {
                        var xGlyph = glyphMap.get(120);
                        if (xGlyph !== void 0) {
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
                };
                canRenderFont$1 = function canRenderFont$1(trProps) {
                    return isFontLoaded$1(trProps.fontFamily) || fontLoadPromises$1.has(trProps.fontFamily);
                };
                loadFont$1 = function loadFont$1(stage, options) {
                    var fontFamily = options.fontFamily, atlasUrl = options.atlasUrl, atlasDataUrl = options.atlasDataUrl, metrics = options.metrics;
                    var names = Array.isArray(fontFamily) ? fontFamily : [ fontFamily ];
                    var primary = names[0];
                    var prefetched = takeSdfPrefetch(primary);
                    if (fontCache$1.get(primary) !== void 0) return Promise.resolve();
                    var existingPromise = fontLoadPromises$1.get(primary);
                    if (existingPromise !== void 0) return existingPromise;
                    if (atlasDataUrl === void 0) return Promise.reject(new Error("Atlas data URL must be provided for SDF font: ".concat(primary)));
                    for (var i = 0; i < names.length; i++) {
                        var name = names[i];
                        if (nodesWaitingForFont$1[name] === void 0) nodesWaitingForFont$1[name] = [];
                    }
                    var fetchFontData = function fetchFontData() {
                        return new Promise(function(resolve, reject) {
                            var xhr = new XMLHttpRequest;
                            xhr.open("GET", atlasDataUrl, true);
                            xhr.responseType = "json";
                            xhr.onload = function() {
                                if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 0) {
                                    var data = xhr.response;
                                    if (typeof data === "string") try {
                                        data = JSON.parse(data);
                                    } catch (e) {
                                        reject(new Error("Failed to parse font data JSON"));
                                        return;
                                    }
                                    resolve(data);
                                } else reject(new Error("Failed to load font data: ".concat(xhr.statusText)));
                            };
                            xhr.onerror = function() {
                                reject(new Error("Network error occurred while trying to load the font data."));
                            };
                            xhr.send(null);
                        });
                    };
                    var loadAtlas = function loadAtlas(fontData, atlasBlob) {
                        if (!fontData || !fontData.chars) return Promise.reject(new Error("Invalid SDF font data format"));
                        if (!atlasUrl) return Promise.reject(new Error("Atlas texture must be provided for SDF fonts"));
                        return new Promise(function(resolve, reject) {
                            var atlasTexture = stage.txManager.createTexture("ImageTexture", {
                                src: atlasBlob !== null ? atlasBlob : atlasUrl,
                                key: atlasUrl,
                                premultiplyAlpha: false
                            });
                            for (var _i = 0; _i < names.length; _i++) atlasTexture.setRenderableOwner(names[_i], true);
                            atlasTexture.preventCleanup = true;
                            var onLoaded = function onLoaded() {
                                processFontData$1(primary, fontData, atlasTexture, metrics);
                                var cached = fontCache$1.get(primary);
                                for (var _i2 = 1; _i2 < names.length; _i2++) fontCache$1.set(names[_i2], cached);
                                for (var _i3 = 0; _i3 < names.length; _i3++) {
                                    var _name = names[_i3];
                                    var list = nodesWaitingForFont$1[_name];
                                    if (list !== void 0) {
                                        for (var key in list) list[key].setUpdateType(UpdateType.Local);
                                        delete nodesWaitingForFont$1[_name];
                                    }
                                }
                                resolve();
                            };
                            if (atlasTexture.state === "loaded") {
                                onLoaded();
                                return;
                            }
                            atlasTexture.on("loaded", onLoaded);
                            atlasTexture.on("failed", function(_target, error) {
                                for (var _i4 = 0; _i4 < names.length; _i4++) atlasTexture.setRenderableOwner(names[_i4], false);
                                stage.txManager.removeTextureFromCache(atlasTexture);
                                reject(error);
                            });
                        });
                    };
                    var loadPromise = _asyncToGenerator(_regenerator().m(function _callee() {
                        var lastError, attempt, _ref, fontData, atlasBlob, _i5, _i6, _t, _t2, _t3, _t4, _t5, _t6;
                        return _regenerator().w(function(_context2) {
                            while (1) switch (_context2.p = _context2.n) {
                              case 0:
                                attempt = 0;

                              case 1:
                                if (!(attempt <= 3)) {
                                    _context2.n = 16;
                                    break;
                                }
                                _context2.p = 2;
                                if (!(attempt === 0 && prefetched !== void 0)) {
                                    _context2.n = 4;
                                    break;
                                }
                                _context2.n = 3;
                                return prefetched.data;

                              case 3:
                                _t2 = _context2.v;
                                _context2.n = 5;
                                break;

                              case 4:
                                _t2 = null;

                              case 5:
                                _t3 = _ref = _t2;
                                _t = _t3 !== null;
                                if (!_t) {
                                    _context2.n = 6;
                                    break;
                                }
                                _t = _ref !== void 0;

                              case 6:
                                if (!_t) {
                                    _context2.n = 7;
                                    break;
                                }
                                _t4 = _ref;
                                _context2.n = 9;
                                break;

                              case 7:
                                _context2.n = 8;
                                return fetchFontData();

                              case 8:
                                _t4 = _context2.v;

                              case 9:
                                fontData = _t4;
                                if (!(attempt === 0 && prefetched !== void 0)) {
                                    _context2.n = 11;
                                    break;
                                }
                                _context2.n = 10;
                                return prefetched.atlas;

                              case 10:
                                _t5 = _context2.v;
                                _context2.n = 12;
                                break;

                              case 11:
                                _t5 = null;

                              case 12:
                                atlasBlob = _t5;
                                _context2.n = 13;
                                return loadAtlas(fontData, atlasBlob);

                              case 13:
                                for (_i5 = 0; _i5 < names.length; _i5++) fontLoadPromises$1.delete(names[_i5]);
                                return _context2.a(2);

                              case 14:
                                _context2.p = 14;
                                _t6 = _context2.v;
                                lastError = _t6;
                                if (attempt < 3) console.warn('SDF font "'.concat(primary, '" failed to load (attempt ').concat(attempt + 1, " of 4), retrying."), _t6);

                              case 15:
                                attempt++;
                                _context2.n = 1;
                                break;

                              case 16:
                                for (_i6 = 0; _i6 < names.length; _i6++) {
                                    fontLoadPromises$1.delete(names[_i6]);
                                    fontCache$1.delete(names[_i6]);
                                }
                                console.error("Failed to load SDF font: ".concat(primary), lastError);
                                throw lastError;

                              case 17:
                                return _context2.a(2);
                            }
                        }, _callee, null, [ [ 2, 14 ] ]);
                    }))();
                    for (var _i7 = 0; _i7 < names.length; _i7++) fontLoadPromises$1.set(names[_i7], loadPromise);
                    return loadPromise;
                };
                waitingForFont$1 = function waitingForFont$1(fontFamily, node) {
                    if (nodesWaitingForFont$1[fontFamily] === void 0) return;
                    nodesWaitingForFont$1[fontFamily][node.id] = node;
                };
                stopWaitingForFont$1 = function stopWaitingForFont$1(fontFamily, node) {
                    if (nodesWaitingForFont$1[fontFamily] === void 0) return;
                    delete nodesWaitingForFont$1[fontFamily][node.id];
                };
                getFontFamilies$1 = function getFontFamilies$1() {
                    return {};
                };
                init$3 = function init$3(c) {
                    if (initialized$1 === true) return;
                    initialized$1 = true;
                };
                type$3 = "sdf";
                isFontLoaded$1 = function isFontLoaded$1(fontFamily) {
                    return fontCache$1.has(fontFamily);
                };
                getFontMetrics$1 = function getFontMetrics$1(fontFamily, fontSize) {
                    var label = fontFamily + "_" + fontSize;
                    var metricsCache = normalizedMetrics$1.get(label);
                    if (metricsCache !== void 0) return metricsCache;
                    var metrics = fontCache$1.get(fontFamily).metrics;
                    return processFontMetrics$1(fontFamily, fontSize, metrics);
                };
                processFontMetrics$1 = function processFontMetrics$1(fontFamily, fontSize, metrics) {
                    var label = fontFamily + "_" + fontSize;
                    var normalized = normalizeFontMetrics(metrics, fontSize);
                    normalizedMetrics$1.set(label, normalized);
                    return normalized;
                };
                _getAtlas = function _getAtlas(fontFamily) {
                    var cache = fontCache$1.get(fontFamily);
                    return cache !== void 0 ? cache.atlasTexture : null;
                };
                _getFontData = function _getFontData(fontFamily) {
                    return fontCache$1.get(fontFamily);
                };
                _getMaxCharHeight = function _getMaxCharHeight(fontFamily) {
                    var cache = fontCache$1.get(fontFamily);
                    return cache !== void 0 ? cache.maxCharHeight : 0;
                };
                _getLoadedFonts = function _getLoadedFonts() {
                    return Array.from(fontCache$1.keys());
                };
                _unloadFont = function _unloadFont(fontFamily) {
                    var cache = fontCache$1.get(fontFamily);
                    if (cache !== void 0) {
                        if (typeof cache.atlasTexture.free === "function") cache.atlasTexture.free();
                        fontCache$1.delete(fontFamily);
                    }
                };
                measureText$1 = function measureText$1(text, fontFamily, letterSpacing) {
                    var cache = fontCache$1.get(fontFamily);
                    if (cache === void 0) return 0;
                    var glyphMap = cache.glyphMap;
                    var kernings = cache.kernings;
                    var fallbackGlyphId = true ? 32 : 63;
                    var textLength = text.length;
                    if (textLength === 1) {
                        var codepoint = text.codePointAt(0);
                        if (codepoint === 8203) return 0;
                        var char = text[0];
                        if (hasZeroWidthSpace(char) === true) return 0;
                        var glyph = glyphMap.get(codepoint);
                        if (glyph === void 0) {
                            glyph = glyphMap.get(fallbackGlyphId);
                            if (glyph === void 0) return 0;
                        }
                        return glyph.xadvance + letterSpacing;
                    }
                    var width = 0;
                    var prevGlyphId = 0;
                    for (var i = 0; i < textLength; i++) {
                        var _codepoint = text.codePointAt(i);
                        if (_codepoint > 65535) i++;
                        if (_codepoint === 8203) continue;
                        var _char = text[i];
                        if (hasZeroWidthSpace(_char) === true) continue;
                        var _glyph = glyphMap.get(_codepoint);
                        if (_glyph === void 0) {
                            _glyph = glyphMap.get(fallbackGlyphId);
                            if (_glyph === void 0) continue;
                        }
                        var advance = _glyph.xadvance;
                        if (prevGlyphId !== 0) {
                            var seconds = kernings[_glyph.id];
                            if (seconds !== void 0) {
                                var amount = seconds[prevGlyphId];
                                if (amount !== void 0) advance += amount;
                            }
                        }
                        width += advance + letterSpacing;
                        prevGlyphId = _glyph.id;
                    }
                    return width;
                };
                CoreRenderOp = _createClass(function CoreRenderOp() {});
                SdfRenderOp = function(_CoreRenderOp) {
                    function SdfRenderOp(renderer, shader, quadBufferCollection, renderOpTexture, worldAlpha, clippingRect, w, h) {
                        var _this4;
                        _this4 = _callSuper(this, SdfRenderOp);
                        _this4.renderer = void 0;
                        _this4.shader = void 0;
                        _this4.quadBufferCollection = void 0;
                        _this4.renderOpTexture = void 0;
                        _this4.worldAlpha = void 0;
                        _this4.clippingRect = void 0;
                        _this4.w = void 0;
                        _this4.h = void 0;
                        _this4.numQuads = 0;
                        _this4.time = 0;
                        _this4.stage = void 0;
                        _this4.startQuad = 0;
                        _this4.renderer = renderer;
                        _this4.shader = shader;
                        _this4.quadBufferCollection = quadBufferCollection;
                        _this4.renderOpTexture = renderOpTexture;
                        _this4.worldAlpha = worldAlpha;
                        _this4.clippingRect = clippingRect;
                        _this4.w = w;
                        _this4.h = h;
                        _this4.stage = renderer.stage;
                        return _this4;
                    }
                    _inherits(SdfRenderOp, _CoreRenderOp);
                    return _createClass(SdfRenderOp, [ {
                        key: "draw",
                        value: function draw() {
                            var _this$renderer = this.renderer, glw = _this$renderer.glw, stage = _this$renderer.stage;
                            this.renderer.useShader(this.shader.program);
                            this.shader.program.bindRenderOp(this, this.quadBufferCollection);
                            if (this.clippingRect.valid === true) {
                                var pixelRatio = stage.pixelRatio;
                                var clipX = Math.round(this.clippingRect.x * pixelRatio);
                                var clipWidth = Math.round(this.clippingRect.w * pixelRatio);
                                var clipHeight = Math.round(this.clippingRect.h * pixelRatio);
                                var clipY = Math.round(glw.canvasH - clipHeight - this.clippingRect.y * pixelRatio);
                                glw.setScissorTest(true);
                                glw.scissor(clipX, clipY, clipWidth, clipHeight);
                            } else glw.setScissorTest(false);
                            var byteOffset = this.startQuad * 6 * 2;
                            glw.drawElements(glw.TRIANGLES, 6 * this.numQuads, glw.UNSIGNED_SHORT, byteOffset);
                        }
                    } ]);
                }(CoreRenderOp);
                TRANSPARENT_TEXTURE_DATA = new Uint8Array([ 0, 0, 0, 0 ]);
                WebGlCtxTexture = function(_CoreContextTexture) {
                    function WebGlCtxTexture(glw, memManager, textureSource) {
                        var _this5;
                        _this5 = _callSuper(this, WebGlCtxTexture, [ memManager, textureSource ]);
                        _this5.glw = void 0;
                        _this5._nativeCtxTexture = null;
                        _this5._w = 0;
                        _this5._h = 0;
                        _this5.txCoords = UNIT_TEXTURE_COORDS;
                        _this5.glw = glw;
                        return _this5;
                    }
                    _inherits(WebGlCtxTexture, _CoreContextTexture);
                    return _createClass(WebGlCtxTexture, [ {
                        key: "checkGLError",
                        value: function checkGLError() {
                            if (this.state === "failed") return true;
                            if (true === false) {
                                var error = this.glw.getError();
                                if (error !== 0) {
                                    this.state = "failed";
                                    this.textureSource.setState("failed", new Error("WebGL Error: ".concat(error)));
                                    return true;
                                }
                            }
                            return false;
                        }
                    }, {
                        key: "ctxTexture",
                        get: function get() {
                            if (this.state === "freed") {
                                this.load();
                                return null;
                            }
                            return this._nativeCtxTexture;
                        }
                    }, {
                        key: "w",
                        get: function get() {
                            return this._w;
                        }
                    }, {
                        key: "h",
                        get: function get() {
                            return this._h;
                        }
                    }, {
                        key: "load",
                        value: function load() {
                            if (this.state === "loading" || this.state === "loaded") return;
                            this.state = "loading";
                            this.textureSource.setState("loading");
                            this._nativeCtxTexture = this.createNativeCtxTexture();
                            if (this._nativeCtxTexture === null) {
                                this.state = "failed";
                                var error = new Error("Could not create WebGL Texture");
                                this.textureSource.setState("failed", error);
                                console.error("Could not create WebGL Texture");
                                return;
                            }
                            try {
                                var _this$onLoadRequest = this.onLoadRequest(), w = _this$onLoadRequest.w, h = _this$onLoadRequest.h;
                                if (this.state === "freed") return;
                                this.state = "loaded";
                                this._w = w;
                                this._h = h;
                                this.textureSource.setState("loaded", {
                                    w: w,
                                    h: h
                                });
                                this.textureSource.freeTextureData();
                            } catch (err) {
                                if (this.state === "freed") return;
                                this.state = "failed";
                                var _error = err instanceof Error ? err : new Error(String(err));
                                this.textureSource.setState("failed", _error);
                                this.textureSource.freeTextureData();
                                console.error(err);
                            }
                        }
                    }, {
                        key: "onLoadRequest",
                        value: function onLoadRequest() {
                            var glw = this.glw;
                            var textureData = this.textureSource.textureData;
                            if (textureData === null || this._nativeCtxTexture === null) throw new Error("Texture data or native texture is null " + this.textureSource.type);
                            var w = 0;
                            var h = 0;
                            glw.activeTexture(0);
                            var tdata = textureData.data;
                            var format = glw.RGBA;
                            var formatBytes = 4;
                            var memoryPadding = 1.1;
                            if (typeof ImageBitmap !== "undefined" && tdata instanceof ImageBitmap || tdata instanceof ImageData || isHTMLImageElement(tdata) === true) {
                                w = tdata.width;
                                h = tdata.height;
                                glw.bindTexture(this._nativeCtxTexture);
                                glw.pixelStorei(glw.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !!textureData.premultiplyAlpha);
                                glw.texImage2D(0, format, format, glw.UNSIGNED_BYTE, tdata);
                                if (this.checkGLError() === true) throw this.textureSource.error || new Error("WebGL Error");
                                this.setTextureMemUse(h * w * formatBytes * memoryPadding);
                            } else if (tdata === null) {
                                w = 0;
                                h = 0;
                                glw.bindTexture(this._nativeCtxTexture);
                                glw.texImage2D(0, format, 1, 1, 0, format, glw.UNSIGNED_BYTE, TRANSPARENT_TEXTURE_DATA);
                                this.setTextureMemUse(TRANSPARENT_TEXTURE_DATA.byteLength);
                            } else if (true && "mipmaps" in tdata && tdata.mipmaps) {
                                var _mipmaps$0$byteLength, _mipmaps$;
                                var mipmaps = tdata.mipmaps, _type = tdata.type, blockInfo = tdata.blockInfo;
                                uploadCompressedTexture[_type](glw, this._nativeCtxTexture, tdata);
                                if (this.checkGLError() === true) throw this.textureSource.error || new Error("WebGL Error");
                                w = tdata.w;
                                h = tdata.h;
                                this.txCoords = createTextureCoords(0, 0, w / (Math.ceil(w / blockInfo.width) * blockInfo.width), h / (Math.ceil(h / blockInfo.height) * blockInfo.height));
                                this.setTextureMemUse((_mipmaps$0$byteLength = (_mipmaps$ = mipmaps[0]) == null ? void 0 : _mipmaps$.byteLength) !== null && _mipmaps$0$byteLength !== void 0 ? _mipmaps$0$byteLength : 0);
                            } else if (tdata && tdata instanceof Uint8Array) {
                                w = 1;
                                h = 1;
                                glw.bindTexture(this._nativeCtxTexture);
                                glw.pixelStorei(glw.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !!textureData.premultiplyAlpha);
                                glw.texImage2D(0, format, w, h, 0, format, glw.UNSIGNED_BYTE, tdata);
                                if (this.checkGLError() === true) throw this.textureSource.error || new Error("WebGL Error");
                                this.setTextureMemUse(w * h * formatBytes);
                            } else throw new Error("WebGlCoreCtxTexture.onLoadRequest: Unexpected textureData returned");
                            return {
                                w: w,
                                h: h
                            };
                        }
                    }, {
                        key: "free",
                        value: function free() {
                            if (this.state === "freed") return;
                            this.state = "freed";
                            this.textureSource.setState("freed");
                            this.release();
                        }
                    }, {
                        key: "release",
                        value: function release() {
                            this._w = 0;
                            this._h = 0;
                            if (this._nativeCtxTexture !== null) {
                                this.glw.deleteTexture(this._nativeCtxTexture);
                                this.setTextureMemUse(0);
                                this._nativeCtxTexture = null;
                            }
                            this.textureSource.freeTextureData();
                        }
                    }, {
                        key: "createNativeCtxTexture",
                        value: function createNativeCtxTexture() {
                            var glw = this.glw;
                            var nativeTexture = glw.createTexture();
                            if (!nativeTexture) return null;
                            glw.activeTexture(0);
                            glw.bindTexture(nativeTexture);
                            glw.texParameteri(glw.TEXTURE_MAG_FILTER, glw.LINEAR);
                            glw.texParameteri(glw.TEXTURE_MIN_FILTER, glw.LINEAR);
                            glw.texParameteri(glw.TEXTURE_WRAP_S, glw.CLAMP_TO_EDGE);
                            glw.texParameteri(glw.TEXTURE_WRAP_T, glw.CLAMP_TO_EDGE);
                            return nativeTexture;
                        }
                    } ]);
                }(CoreContextTexture);
                WebGlCtxSubTexture = function(_WebGlCtxTexture) {
                    function WebGlCtxSubTexture(glw, memManager, textureSource) {
                        return _callSuper(this, WebGlCtxSubTexture, [ glw, memManager, textureSource ]);
                    }
                    _inherits(WebGlCtxSubTexture, _WebGlCtxTexture);
                    return _createClass(WebGlCtxSubTexture, [ {
                        key: "onLoadRequest",
                        value: function onLoadRequest() {
                            var props = this.textureSource.textureData;
                            assertTruthy(props, "SubTexture must have texture data");
                            if (props.data instanceof Uint8Array) return {
                                w: 1,
                                h: 1
                            };
                            return this.extractDimensions(props.data);
                        }
                    }, {
                        key: "extractDimensions",
                        value: function extractDimensions(data) {
                            if (data === null) return {
                                w: 0,
                                h: 0
                            };
                            if (this.hasWidthHeight(data) === true) return {
                                w: data.width,
                                h: data.height
                            };
                            if (this.hasWH(data) === true) return {
                                w: data.w,
                                h: data.h
                            };
                            return {
                                w: 0,
                                h: 0
                            };
                        }
                    }, {
                        key: "hasWidthHeight",
                        value: function hasWidthHeight(data) {
                            return typeof data.width === "number" && typeof data.height === "number";
                        }
                    }, {
                        key: "hasWH",
                        value: function hasWH(data) {
                            return typeof data.w === "number" && typeof data.h === "number";
                        }
                    } ]);
                }(WebGlCtxTexture);
                BufferCollection = function() {
                    function BufferCollection(config) {
                        this.config = void 0;
                        this._lookup = new Map;
                        this.config = config;
                        var _iterator7 = _createForOfIteratorHelper(config), _step7;
                        try {
                            for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
                                var item = _step7.value;
                                for (var attrName in item.attributes) if (item.attributes[attrName] && !this._lookup.has(attrName)) this._lookup.set(attrName, item);
                            }
                        } catch (err) {
                            _iterator7.e(err);
                        } finally {
                            _iterator7.f();
                        }
                    }
                    return _createClass(BufferCollection, [ {
                        key: "getBuffer",
                        value: function getBuffer(attributeName) {
                            var _this$_lookup$get;
                            return (_this$_lookup$get = this._lookup.get(attributeName)) == null ? void 0 : _this$_lookup$get.buffer;
                        }
                    }, {
                        key: "getAttributeInfo",
                        value: function getAttributeInfo(attributeName) {
                            var _this$_lookup$get2;
                            return (_this$_lookup$get2 = this._lookup.get(attributeName)) == null ? void 0 : _this$_lookup$get2.attributes[attributeName];
                        }
                    } ]);
                }();
                WebGlContextWrapper = function() {
                    function WebGlContextWrapper(gl) {
                        var disableVertexArrayObject = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                        this.gl = void 0;
                        this.activeTextureUnit = 0;
                        this.texture2dUnits = void 0;
                        this.texture2dParams = new WeakMap;
                        this.scissorEnabled = void 0;
                        this.scissorX = void 0;
                        this.scissorY = void 0;
                        this.scissorWidth = void 0;
                        this.scissorHeight = void 0;
                        this.blendEnabled = void 0;
                        this.blendSrcRgb = void 0;
                        this.blendDstRgb = void 0;
                        this.blendSrcAlpha = void 0;
                        this.blendDstAlpha = void 0;
                        this.boundArrayBuffer = void 0;
                        this.boundElementArrayBuffer = void 0;
                        this.curProgram = void 0;
                        this.curUniformLocations = {};
                        this.gl2 = void 0;
                        this.boundVertexArray = null;
                        this.vaoExt = void 0;
                        this.canUseVertexArrayObject = void 0;
                        this.isWebGl2 = void 0;
                        this.canvas = void 0;
                        this.canvasW = void 0;
                        this.canvasH = void 0;
                        this.MAX_RENDERBUFFER_SIZE = void 0;
                        this.MAX_TEXTURE_SIZE = void 0;
                        this.MAX_VIEWPORT_DIMS = void 0;
                        this.MAX_VERTEX_TEXTURE_IMAGE_UNITS = void 0;
                        this.MAX_TEXTURE_IMAGE_UNITS = void 0;
                        this.MAX_COMBINED_TEXTURE_IMAGE_UNITS = void 0;
                        this.MAX_VERTEX_ATTRIBS = void 0;
                        this.MAX_VARYING_VECTORS = void 0;
                        this.MAX_VERTEX_UNIFORM_VECTORS = void 0;
                        this.MAX_FRAGMENT_UNIFORM_VECTORS = void 0;
                        this.TEXTURE_MAG_FILTER = void 0;
                        this.TEXTURE_MIN_FILTER = void 0;
                        this.TEXTURE_WRAP_S = void 0;
                        this.TEXTURE_WRAP_T = void 0;
                        this.LINEAR = void 0;
                        this.LINEAR_MIPMAP_LINEAR = void 0;
                        this.CLAMP_TO_EDGE = void 0;
                        this.RGB = void 0;
                        this.RGBA = void 0;
                        this.UNSIGNED_BYTE = void 0;
                        this.UNPACK_PREMULTIPLY_ALPHA_WEBGL = void 0;
                        this.UNPACK_FLIP_Y_WEBGL = void 0;
                        this.FLOAT = void 0;
                        this.TRIANGLES = void 0;
                        this.UNSIGNED_SHORT = void 0;
                        this.ONE = void 0;
                        this.ONE_MINUS_SRC_ALPHA = void 0;
                        this.VERTEX_SHADER = void 0;
                        this.FRAGMENT_SHADER = void 0;
                        this.STATIC_DRAW = void 0;
                        this.COMPILE_STATUS = void 0;
                        this.LINK_STATUS = void 0;
                        this.DYNAMIC_DRAW = void 0;
                        this.INVALID_ENUM = void 0;
                        this.INVALID_OPERATION = void 0;
                        this.gl = gl;
                        this.activeTextureUnit = 0;
                        var maxTextureUnits = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);
                        this.texture2dUnits = new Array(maxTextureUnits).fill(null);
                        this.scissorEnabled = false;
                        this.scissorX = 0;
                        this.scissorY = 0;
                        this.scissorWidth = gl.drawingBufferWidth;
                        this.scissorHeight = gl.drawingBufferHeight;
                        this.blendEnabled = false;
                        this.blendSrcRgb = gl.ONE;
                        this.blendDstRgb = gl.ZERO;
                        this.blendSrcAlpha = gl.ONE;
                        this.blendDstAlpha = gl.ZERO;
                        this.boundArrayBuffer = null;
                        this.boundElementArrayBuffer = null;
                        this.curProgram = null;
                        this.gl2 = self.WebGL2RenderingContext && gl instanceof self.WebGL2RenderingContext ? gl : null;
                        this.vaoExt = this.gl2 === null && disableVertexArrayObject !== true ? gl.getExtension("OES_vertex_array_object") : null;
                        this.canUseVertexArrayObject = disableVertexArrayObject !== true && (this.gl2 !== null || this.vaoExt !== null);
                        this.isWebGl2 = this.gl2 !== null;
                        this.canvas = gl.canvas;
                        this.canvasW = gl.canvas.width;
                        this.canvasH = gl.canvas.height;
                        this.MAX_RENDERBUFFER_SIZE = gl.MAX_RENDERBUFFER_SIZE;
                        this.MAX_TEXTURE_SIZE = gl.MAX_TEXTURE_SIZE;
                        this.MAX_VIEWPORT_DIMS = gl.MAX_VIEWPORT_DIMS;
                        this.MAX_VERTEX_TEXTURE_IMAGE_UNITS = gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS;
                        this.MAX_TEXTURE_IMAGE_UNITS = gl.MAX_TEXTURE_IMAGE_UNITS;
                        this.MAX_COMBINED_TEXTURE_IMAGE_UNITS = gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS;
                        this.MAX_VERTEX_ATTRIBS = gl.MAX_VERTEX_ATTRIBS;
                        this.MAX_VARYING_VECTORS = gl.MAX_VARYING_VECTORS;
                        this.MAX_VERTEX_UNIFORM_VECTORS = gl.MAX_VERTEX_UNIFORM_VECTORS;
                        this.MAX_FRAGMENT_UNIFORM_VECTORS = gl.MAX_FRAGMENT_UNIFORM_VECTORS;
                        this.TEXTURE_MAG_FILTER = gl.TEXTURE_MAG_FILTER;
                        this.TEXTURE_MIN_FILTER = gl.TEXTURE_MIN_FILTER;
                        this.TEXTURE_WRAP_S = gl.TEXTURE_WRAP_S;
                        this.TEXTURE_WRAP_T = gl.TEXTURE_WRAP_T;
                        this.LINEAR = gl.LINEAR;
                        this.LINEAR_MIPMAP_LINEAR = gl.LINEAR_MIPMAP_LINEAR;
                        this.CLAMP_TO_EDGE = gl.CLAMP_TO_EDGE;
                        this.RGB = gl.RGB;
                        this.RGBA = gl.RGBA;
                        this.UNSIGNED_BYTE = gl.UNSIGNED_BYTE;
                        this.UNPACK_PREMULTIPLY_ALPHA_WEBGL = gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL;
                        this.UNPACK_FLIP_Y_WEBGL = gl.UNPACK_FLIP_Y_WEBGL;
                        this.FLOAT = gl.FLOAT;
                        this.TRIANGLES = gl.TRIANGLES;
                        this.UNSIGNED_SHORT = gl.UNSIGNED_SHORT;
                        this.ONE = gl.ONE;
                        this.ONE_MINUS_SRC_ALPHA = gl.ONE_MINUS_SRC_ALPHA;
                        this.VERTEX_SHADER = gl.VERTEX_SHADER;
                        this.FRAGMENT_SHADER = gl.FRAGMENT_SHADER;
                        this.STATIC_DRAW = gl.STATIC_DRAW;
                        this.COMPILE_STATUS = gl.COMPILE_STATUS;
                        this.LINK_STATUS = gl.LINK_STATUS;
                        this.DYNAMIC_DRAW = gl.DYNAMIC_DRAW;
                        this.INVALID_ENUM = gl.INVALID_ENUM;
                        this.INVALID_OPERATION = gl.INVALID_OPERATION;
                    }
                    return _createClass(WebGlContextWrapper, [ {
                        key: "activeTexture",
                        value: function activeTexture(textureUnit) {
                            if (this.activeTextureUnit !== textureUnit) {
                                this.gl.activeTexture(textureUnit + this.gl.TEXTURE0);
                                this.activeTextureUnit = textureUnit;
                            }
                        }
                    }, {
                        key: "bindTexture",
                        value: function bindTexture(texture) {
                            if (this.texture2dUnits[this.activeTextureUnit] === texture) return;
                            this.texture2dUnits[this.activeTextureUnit] = texture;
                            this.gl.bindTexture(this.gl.TEXTURE_2D, texture);
                        }
                    }, {
                        key: "_getActiveTexture",
                        value: function _getActiveTexture() {
                            return this.texture2dUnits[this.activeTextureUnit];
                        }
                    }, {
                        key: "texParameteri",
                        value: function texParameteri(pname, param) {
                            var activeTexture = this._getActiveTexture();
                            if (!activeTexture) throw new Error("No active texture");
                            var textureParams = this.texture2dParams.get(activeTexture);
                            if (!textureParams) {
                                textureParams = {};
                                this.texture2dParams.set(activeTexture, textureParams);
                            }
                            if (textureParams[pname] === param) return;
                            textureParams[pname] = param;
                            this.gl.texParameteri(this.gl.TEXTURE_2D, pname, param);
                        }
                    }, {
                        key: "texImage2D",
                        value: function texImage2D(level, internalFormat, widthOrFormat, heightOrType, borderOrSource, format, type, pixels) {
                            if (format) this.gl.texImage2D(this.gl.TEXTURE_2D, level, internalFormat, widthOrFormat, heightOrType, borderOrSource, format, type, pixels); else this.gl.texImage2D(this.gl.TEXTURE_2D, level, internalFormat, widthOrFormat, heightOrType, borderOrSource);
                        }
                    }, {
                        key: "compressedTexImage2D",
                        value: function compressedTexImage2D(level, internalformat, width, height, border, data) {
                            this.gl.compressedTexImage2D(this.gl.TEXTURE_2D, level, internalformat, width, height, border, data);
                        }
                    }, {
                        key: "pixelStorei",
                        value: function pixelStorei(pname, param) {
                            this.gl.pixelStorei(pname, param);
                        }
                    }, {
                        key: "generateMipmap",
                        value: function generateMipmap() {
                            this.gl.generateMipmap(this.gl.TEXTURE_2D);
                        }
                    }, {
                        key: "createTexture",
                        value: function createTexture() {
                            return this.gl.createTexture();
                        }
                    }, {
                        key: "deleteTexture",
                        value: function deleteTexture(texture) {
                            if (texture) this.texture2dParams.delete(texture);
                            this.gl.deleteTexture(texture);
                        }
                    }, {
                        key: "viewport",
                        value: function viewport(x, y, width, height) {
                            this.gl.viewport(x, y, width, height);
                        }
                    }, {
                        key: "updateCanvasDimensions",
                        value: function updateCanvasDimensions() {
                            this.canvasW = this.canvas.width;
                            this.canvasH = this.canvas.height;
                        }
                    }, {
                        key: "clearColor",
                        value: function clearColor(red, green, blue, alpha) {
                            this.gl.clearColor(red, green, blue, alpha);
                        }
                    }, {
                        key: "setScissorTest",
                        value: function setScissorTest(enable) {
                            if (enable === this.scissorEnabled) return;
                            if (enable) this.gl.enable(this.gl.SCISSOR_TEST); else this.gl.disable(this.gl.SCISSOR_TEST);
                            this.scissorEnabled = enable;
                        }
                    }, {
                        key: "scissor",
                        value: function scissor(x, y, width, height) {
                            if (x !== this.scissorX || y !== this.scissorY || width !== this.scissorWidth || height !== this.scissorHeight) {
                                this.gl.scissor(x, y, width, height);
                                this.scissorX = x;
                                this.scissorY = y;
                                this.scissorWidth = width;
                                this.scissorHeight = height;
                            }
                        }
                    }, {
                        key: "setBlend",
                        value: function setBlend(blend) {
                            if (blend === this.blendEnabled) return;
                            if (blend) this.gl.enable(this.gl.BLEND); else this.gl.disable(this.gl.BLEND);
                            this.blendEnabled = blend;
                        }
                    }, {
                        key: "blendFunc",
                        value: function blendFunc(src, dst) {
                            if (src !== this.blendSrcRgb || dst !== this.blendDstRgb || src !== this.blendSrcAlpha || dst !== this.blendDstAlpha) {
                                this.gl.blendFunc(src, dst);
                                this.blendSrcRgb = src;
                                this.blendDstRgb = dst;
                                this.blendSrcAlpha = src;
                                this.blendDstAlpha = dst;
                            }
                        }
                    }, {
                        key: "createBuffer",
                        value: function createBuffer() {
                            return this.gl.createBuffer();
                        }
                    }, {
                        key: "clear",
                        value: function clear() {
                            this.gl.clear(this.gl.COLOR_BUFFER_BIT);
                        }
                    }, {
                        key: "arrayBufferData",
                        value: function arrayBufferData(buffer, data, usage) {
                            if (this.boundArrayBuffer !== buffer) {
                                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
                                this.boundArrayBuffer = buffer;
                            }
                            this.gl.bufferData(this.gl.ARRAY_BUFFER, data, usage);
                        }
                    }, {
                        key: "arrayBufferSubData",
                        value: function arrayBufferSubData(buffer, dstByteOffset, data) {
                            if (this.boundArrayBuffer !== buffer) {
                                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
                                this.boundArrayBuffer = buffer;
                            }
                            this.gl.bufferSubData(this.gl.ARRAY_BUFFER, dstByteOffset, data);
                        }
                    }, {
                        key: "elementArrayBufferData",
                        value: function elementArrayBufferData(buffer, data, usage) {
                            if (this.boundElementArrayBuffer !== buffer) {
                                this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, buffer);
                                this.boundElementArrayBuffer = buffer;
                            }
                            this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, data, usage);
                        }
                    }, {
                        key: "vertexAttribPointer",
                        value: function vertexAttribPointer(buffer, index, size, type, normalized, stride, offset) {
                            if (this.boundArrayBuffer !== buffer) {
                                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
                                this.boundArrayBuffer = buffer;
                            }
                            this.gl.vertexAttribPointer(index, size, type, normalized, stride, offset);
                        }
                    }, {
                        key: "bindElementArrayBuffer",
                        value: function bindElementArrayBuffer(buffer) {
                            this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, buffer);
                            this.boundElementArrayBuffer = buffer;
                        }
                    }, {
                        key: "createVertexArray",
                        value: function createVertexArray() {
                            if (this.gl2 !== null) return this.gl2.createVertexArray();
                            if (this.vaoExt !== null) return this.vaoExt.createVertexArrayOES();
                            return null;
                        }
                    }, {
                        key: "bindVertexArray",
                        value: function bindVertexArray(vertexArray) {
                            if (this.boundVertexArray === vertexArray) return;
                            if (this.gl2 !== null) {
                                this.gl2.bindVertexArray(vertexArray);
                                this.boundVertexArray = vertexArray;
                                return;
                            }
                            if (this.vaoExt !== null) {
                                this.vaoExt.bindVertexArrayOES(vertexArray);
                                this.boundVertexArray = vertexArray;
                            }
                        }
                    }, {
                        key: "deleteVertexArray",
                        value: function deleteVertexArray(vertexArray) {
                            if (this.boundVertexArray === vertexArray) this.boundVertexArray = null;
                            if (this.gl2 !== null) {
                                this.gl2.deleteVertexArray(vertexArray);
                                return;
                            }
                            if (this.vaoExt !== null) this.vaoExt.deleteVertexArrayOES(vertexArray);
                        }
                    }, {
                        key: "getUniformLocations",
                        value: function getUniformLocations(program) {
                            var gl = this.gl;
                            var length = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
                            var result = {};
                            for (var i = 0; i < length; i++) {
                                var name = gl.getActiveUniform(program, i).name.replace(/\[.*?\]/g, "");
                                result[name] = gl.getUniformLocation(program, name);
                            }
                            return result;
                        }
                    }, {
                        key: "getAttributeLocations",
                        value: function getAttributeLocations(program) {
                            var gl = this.gl;
                            var length = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);
                            var result = [];
                            for (var i = 0; i < length; i++) {
                                var _gl$getActiveAttrib = gl.getActiveAttrib(program, i), name = _gl$getActiveAttrib.name;
                                result[gl.getAttribLocation(program, name)] = name;
                            }
                            return result;
                        }
                    }, {
                        key: "useProgram",
                        value: function useProgram(program, uniformLocations) {
                            if (this.curProgram === program) return;
                            this.gl.useProgram(program);
                            this.curProgram = program;
                            this.curUniformLocations = uniformLocations;
                        }
                    }, {
                        key: "uniform1f",
                        value: function uniform1f(location, v0) {
                            this.gl.uniform1f(this.curUniformLocations[location] || null, v0);
                        }
                    }, {
                        key: "uniform1fv",
                        value: function uniform1fv(location, value) {
                            this.gl.uniform1fv(this.curUniformLocations[location] || null, value);
                        }
                    }, {
                        key: "uniform1i",
                        value: function uniform1i(location, v0) {
                            this.gl.uniform1i(this.curUniformLocations[location] || null, v0);
                        }
                    }, {
                        key: "uniform1iv",
                        value: function uniform1iv(location, value) {
                            this.gl.uniform1iv(this.curUniformLocations[location] || null, value);
                        }
                    }, {
                        key: "uniform2f",
                        value: function uniform2f(location, v0, v1) {
                            this.gl.uniform2f(this.curUniformLocations[location] || null, v0, v1);
                        }
                    }, {
                        key: "uniform2fa",
                        value: function uniform2fa(location, value) {
                            this.gl.uniform2f(this.curUniformLocations[location] || null, value[0], value[1]);
                        }
                    }, {
                        key: "uniform2fv",
                        value: function uniform2fv(location, value) {
                            this.gl.uniform2fv(this.curUniformLocations[location] || null, value);
                        }
                    }, {
                        key: "uniform2i",
                        value: function uniform2i(location, v0, v1) {
                            this.gl.uniform2i(this.curUniformLocations[location] || null, v0, v1);
                        }
                    }, {
                        key: "uniform2iv",
                        value: function uniform2iv(location, value) {
                            this.gl.uniform2iv(this.curUniformLocations[location] || null, value);
                        }
                    }, {
                        key: "uniform3f",
                        value: function uniform3f(location, v0, v1, v2) {
                            this.gl.uniform3f(this.curUniformLocations[location] || null, v0, v1, v2);
                        }
                    }, {
                        key: "uniform3fa",
                        value: function uniform3fa(location, value) {
                            this.gl.uniform3f(this.curUniformLocations[location] || null, value[0], value[1], value[2]);
                        }
                    }, {
                        key: "uniform3fv",
                        value: function uniform3fv(location, value) {
                            this.gl.uniform3fv(this.curUniformLocations[location] || null, value);
                        }
                    }, {
                        key: "uniform3i",
                        value: function uniform3i(location, v0, v1, v2) {
                            this.gl.uniform3i(this.curUniformLocations[location] || null, v0, v1, v2);
                        }
                    }, {
                        key: "uniform3iv",
                        value: function uniform3iv(location, value) {
                            this.gl.uniform3iv(this.curUniformLocations[location] || null, value);
                        }
                    }, {
                        key: "uniform4f",
                        value: function uniform4f(location, v0, v1, v2, v3) {
                            this.gl.uniform4f(this.curUniformLocations[location] || null, v0, v1, v2, v3);
                        }
                    }, {
                        key: "uniform4fa",
                        value: function uniform4fa(location, value) {
                            this.gl.uniform4f(this.curUniformLocations[location] || null, value[0], value[1], value[2], value[3]);
                        }
                    }, {
                        key: "uniform4fv",
                        value: function uniform4fv(location, value) {
                            this.gl.uniform4fv(this.curUniformLocations[location] || null, value);
                        }
                    }, {
                        key: "uniform4i",
                        value: function uniform4i(location, v0, v1, v2, v3) {
                            this.gl.uniform4i(this.curUniformLocations[location] || null, v0, v1, v2, v3);
                        }
                    }, {
                        key: "uniform4iv",
                        value: function uniform4iv(location, value) {
                            this.gl.uniform4iv(this.curUniformLocations[location] || null, value);
                        }
                    }, {
                        key: "uniformMatrix2fv",
                        value: function uniformMatrix2fv(location, value) {
                            this.gl.uniformMatrix2fv(this.curUniformLocations[location] || null, false, value);
                        }
                    }, {
                        key: "uniformMatrix3fv",
                        value: function uniformMatrix3fv(location, value) {
                            this.gl.uniformMatrix3fv(this.curUniformLocations[location] || null, false, value);
                        }
                    }, {
                        key: "uniformMatrix4fv",
                        value: function uniformMatrix4fv(location, value) {
                            this.gl.uniformMatrix4fv(this.curUniformLocations[location] || null, false, value);
                        }
                    }, {
                        key: "getParameter",
                        value: function getParameter(pname) {
                            return this.gl.getParameter(pname);
                        }
                    }, {
                        key: "drawElements",
                        value: function drawElements(mode, count, type, offset) {
                            this.gl.drawElements(mode, count, type, offset);
                        }
                    }, {
                        key: "drawArrays",
                        value: function drawArrays(mode, first, count) {
                            this.gl.drawArrays(mode, first, count);
                        }
                    }, {
                        key: "getExtension",
                        value: function getExtension(name) {
                            return this.gl.getExtension(name);
                        }
                    }, {
                        key: "getError",
                        value: function getError() {
                            return this.gl.getError();
                        }
                    }, {
                        key: "isContextLost",
                        value: function isContextLost() {
                            return this.gl.isContextLost();
                        }
                    }, {
                        key: "getAttribLocation",
                        value: function getAttribLocation(program, name) {
                            return this.gl.getAttribLocation(program, name);
                        }
                    }, {
                        key: "getUniformLocation",
                        value: function getUniformLocation(program, name) {
                            return this.gl.getUniformLocation(program, name);
                        }
                    }, {
                        key: "enableVertexAttribArray",
                        value: function enableVertexAttribArray(index) {
                            this.gl.enableVertexAttribArray(index);
                        }
                    }, {
                        key: "disableVertexAttribArray",
                        value: function disableVertexAttribArray(index) {
                            this.gl.disableVertexAttribArray(index);
                        }
                    }, {
                        key: "createShader",
                        value: function createShader(type) {
                            return this.gl.createShader(type);
                        }
                    }, {
                        key: "compileShader",
                        value: function compileShader(shader) {
                            this.gl.compileShader(shader);
                        }
                    }, {
                        key: "attachShader",
                        value: function attachShader(program, shader) {
                            this.gl.attachShader(program, shader);
                        }
                    }, {
                        key: "linkProgram",
                        value: function linkProgram(program) {
                            this.gl.linkProgram(program);
                        }
                    }, {
                        key: "deleteProgram",
                        value: function deleteProgram(shader) {
                            this.gl.deleteProgram(shader);
                        }
                    }, {
                        key: "getShaderParameter",
                        value: function getShaderParameter(shader, pname) {
                            return this.gl.getShaderParameter(shader, pname);
                        }
                    }, {
                        key: "getShaderInfoLog",
                        value: function getShaderInfoLog(shader) {
                            return this.gl.getShaderInfoLog(shader);
                        }
                    }, {
                        key: "createProgram",
                        value: function createProgram() {
                            return this.gl.createProgram();
                        }
                    }, {
                        key: "getProgramParameter",
                        value: function getProgramParameter(program, pname) {
                            return this.gl.getProgramParameter(program, pname);
                        }
                    }, {
                        key: "getProgramInfoLog",
                        value: function getProgramInfoLog(program) {
                            return this.gl.getProgramInfoLog(program);
                        }
                    }, {
                        key: "shaderSource",
                        value: function shaderSource(shader, source) {
                            this.gl.shaderSource(shader, source);
                        }
                    }, {
                        key: "deleteShader",
                        value: function deleteShader(shader) {
                            this.gl.deleteShader(shader);
                        }
                    }, {
                        key: "deleteBuffer",
                        value: function deleteBuffer(buffer) {
                            var gl = this.gl;
                            gl.deleteBuffer(buffer);
                            if (this.boundArrayBuffer === buffer) this.boundArrayBuffer = null;
                        }
                    }, {
                        key: "checkError",
                        value: function checkError(operation) {
                            var error = this.getError();
                            if (error !== 0) {
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
                                    break;
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
                }();
                GL_OUT_OF_MEMORY = 1285;
                MAX_DRAINED_GL_ERRORS = 8;
                FULL_UPLOAD_DIRTY_RATIO = .4;
                FLOATS_PER_GLYPH = 24;
                SDF_BUFFER_SIZE = 256 * 1024;
                MAX_SDF_BUFFER_FLOATS = 1024 * 1024 / Float32Array.BYTES_PER_ELEMENT;
                WebGlRenderer = function(_CoreRenderer) {
                    function WebGlRenderer(options) {
                        var _this6;
                        _this6 = _callSuper(this, WebGlRenderer, [ options ]);
                        _this6.glw = void 0;
                        _this6.quadBuffer = void 0;
                        _this6.fQuadBuffer = void 0;
                        _this6.uiQuadBuffer = void 0;
                        _this6.renderOps = [];
                        _this6.coreTextRenderOps = [];
                        _this6.curBufferIdx = 0;
                        _this6.curRenderOp = null;
                        _this6.attachedShader = null;
                        _this6.sdfBuffer = void 0;
                        _this6.fSdfBuffer = void 0;
                        _this6.uiSdfBuffer = void 0;
                        _this6.sdfBufferIdx = 0;
                        _this6.sdfQuadCount = 0;
                        _this6.sdfQuadBufferCollection = void 0;
                        _this6.curSdfRenderOp = null;
                        _this6.sdfBufferChanged = true;
                        _this6.lastUploadedSdfSize = 0;
                        _this6.sdfWriteSig = 0;
                        _this6.lastUploadedSdfSig = 0;
                        _this6.needsFullUpload = true;
                        _this6.defaultTextureCoords = UNIT_TEXTURE_COORDS;
                        _this6.defaultShaderNode = null;
                        _this6.quadBufferCollection = void 0;
                        _this6.indexBuffer = null;
                        _this6.clearColor = {
                            raw: 0,
                            normalized: [ 0, 0, 0, 0 ]
                        };
                        _this6.quadBufferUsage = 0;
                        _this6.numQuadsRendered = 0;
                        _this6.quadBufferSize = void 0;
                        _this6.lastUploadedBufferSize = 0;
                        _this6.dirtyQuadCount = 0;
                        _this6.quadBufferSize = Math.min(_this6.stage.options.quadBufferSize, MAX_QUAD_BUFFER_SIZE);
                        _this6.quadBuffer = new ArrayBuffer(_this6.quadBufferSize);
                        _this6.fQuadBuffer = new Float32Array(_this6.quadBuffer);
                        _this6.uiQuadBuffer = new Uint32Array(_this6.quadBuffer);
                        _this6.sdfBuffer = new ArrayBuffer(SDF_BUFFER_SIZE);
                        _this6.fSdfBuffer = new Float32Array(_this6.sdfBuffer);
                        _this6.uiSdfBuffer = new Uint32Array(_this6.sdfBuffer);
                        _this6.mode = "webgl";
                        var gl = createWebGLContext(options.canvas, options.forceWebGL2, options.contextSpy);
                        var glw = _this6.glw = new WebGlContextWrapper(gl, options.disableVertexArrayObject);
                        glw.viewport(0, 0, glw.canvasW, glw.canvasH);
                        _this6.attachContextLossListeners(options.canvas);
                        _this6.updateClearColor(_this6.stage.clearColor);
                        glw.setBlend(true);
                        glw.blendFunc(glw.ONE, glw.ONE_MINUS_SRC_ALPHA);
                        _this6.indexBuffer = createIndexBuffer(glw);
                        var nodeCoords = new Float32Array(MAX_QUADS * 8);
                        for (var i = 0; i < MAX_QUADS * 8; i += 8) {
                            nodeCoords[i] = 0;
                            nodeCoords[i + 1] = 0;
                            nodeCoords[i + 2] = 1;
                            nodeCoords[i + 3] = 0;
                            nodeCoords[i + 4] = 0;
                            nodeCoords[i + 5] = 1;
                            nodeCoords[i + 6] = 1;
                            nodeCoords[i + 7] = 1;
                        }
                        var nodeCoordsBuffer = glw.createBuffer();
                        glw.arrayBufferData(nodeCoordsBuffer, nodeCoords, glw.STATIC_DRAW);
                        var quadBuffer = glw.createBuffer();
                        var stride = 16;
                        _this6.quadBufferCollection = new BufferCollection([ {
                            buffer: quadBuffer,
                            attributes: {
                                a_position: {
                                    name: "a_position",
                                    size: 2,
                                    type: glw.FLOAT,
                                    normalized: false,
                                    stride: stride,
                                    offset: 0
                                },
                                a_textureCoords: {
                                    name: "a_textureCoords",
                                    size: 2,
                                    type: glw.UNSIGNED_SHORT,
                                    normalized: true,
                                    stride: stride,
                                    offset: 8
                                },
                                a_color: {
                                    name: "a_color",
                                    size: 4,
                                    type: glw.UNSIGNED_BYTE,
                                    normalized: true,
                                    stride: stride,
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
                                    normalized: false,
                                    stride: 2 * Float32Array.BYTES_PER_ELEMENT,
                                    offset: 0
                                }
                            }
                        } ]);
                        var sdfWebGlBuffer = glw.createBuffer();
                        var sdfStride = 6 * Float32Array.BYTES_PER_ELEMENT;
                        _this6.sdfQuadBufferCollection = new BufferCollection([ {
                            buffer: sdfWebGlBuffer,
                            attributes: {
                                a_position: {
                                    name: "a_position",
                                    size: 2,
                                    type: glw.FLOAT,
                                    normalized: false,
                                    stride: sdfStride,
                                    offset: 0
                                },
                                a_textureCoords: {
                                    name: "a_textureCoords",
                                    size: 2,
                                    type: glw.FLOAT,
                                    normalized: false,
                                    stride: sdfStride,
                                    offset: 2 * Float32Array.BYTES_PER_ELEMENT
                                },
                                a_color: {
                                    name: "a_color",
                                    size: 4,
                                    type: glw.UNSIGNED_BYTE,
                                    normalized: true,
                                    stride: sdfStride,
                                    offset: 4 * Float32Array.BYTES_PER_ELEMENT
                                },
                                a_distRange: {
                                    name: "a_distRange",
                                    size: 1,
                                    type: glw.FLOAT,
                                    normalized: false,
                                    stride: sdfStride,
                                    offset: 5 * Float32Array.BYTES_PER_ELEMENT
                                }
                            }
                        } ]);
                        return _this6;
                    }
                    _inherits(WebGlRenderer, _CoreRenderer);
                    return _createClass(WebGlRenderer, [ {
                        key: "attachContextLossListeners",
                        value: function attachContextLossListeners(canvas) {
                            var _this7 = this;
                            if ("addEventListener" in canvas === false) return;
                            canvas.addEventListener("webglcontextlost", function() {
                                _this7.stage.setContextLost();
                            });
                        }
                    }, {
                        key: "reset",
                        value: function reset() {
                            var glw = this.glw;
                            if (DIRTY_QUAD_BUFFER) {} else this.curBufferIdx = 0;
                            this.curRenderOp = null;
                            this.curSdfRenderOp = null;
                            this.dirtyQuadCount = 0;
                            this.sdfBufferIdx = 0;
                            this.sdfQuadCount = 0;
                            this.sdfWriteSig = 0;
                            this.renderOps.length = 0;
                            this.coreTextRenderOps.length = 0;
                            glw.setScissorTest(false);
                            if (this.stage.options.enableClear !== false) glw.clear();
                        }
                    }, {
                        key: "createShaderProgram",
                        value: function createShaderProgram(shaderType, props) {
                            try {
                                return new WebGlShaderProgram(this, shaderType, props);
                            } catch (e) {
                                if (this.glw.isContextLost() === true) this.stage.setContextLost();
                                throw e;
                            }
                        }
                    }, {
                        key: "createShaderNode",
                        value: function createShaderNode(shaderKey, shaderType, props, program) {
                            return new WebGlShaderNode(shaderKey, shaderType, program, this.stage, props);
                        }
                    }, {
                        key: "supportsShaderType",
                        value: function supportsShaderType(shaderType) {
                            return shaderType.fragment !== void 0;
                        }
                    }, {
                        key: "createCtxTexture",
                        value: function createCtxTexture(textureSource) {
                            if (textureSource.type === TextureType.subTexture) return new WebGlCtxSubTexture(this.glw, this.stage.txMemManager, textureSource);
                            return new WebGlCtxTexture(this.glw, this.stage.txMemManager, textureSource);
                        }
                    }, {
                        key: "addQuad",
                        value: function addQuad(node, texture) {
                            var f = this.fQuadBuffer;
                            var u = this.uiQuadBuffer;
                            if (true === true && node.props.zIndex) this.flushTextRenderOps();
                            if (true === false) this.curSdfRenderOp = null;
                            var props = node.props;
                            var tx = texture !== void 0 ? texture : node.placeholderActive === true ? this.stage.defaultTexture : props.texture || this.stage.defaultTexture;
                            if (tx.type === TextureType.subTexture) tx = tx.parentTexture;
                            var ctx = tx.ctxTexture;
                            if (ctx === void 0) return;
                            var reuse = this.reuseRenderOp(node);
                            if (DIRTY_QUAD_BUFFER) {
                                if (node.quadBufferIndex === -1) {
                                    node.quadBufferIndex = this.curBufferIdx;
                                    this.curBufferIdx += WORDS_PER_QUAD;
                                }
                            } else {
                                node.quadBufferIndex = this.curBufferIdx;
                                this.curBufferIdx += WORDS_PER_QUAD;
                            }
                            var i = node.quadBufferIndex;
                            if (reuse === false) this.newRenderOp(node, i);
                            var curOp = this.curRenderOp;
                            if (curOp.renderOpTexture === null) curOp.renderOpTexture = ctx; else if (curOp.renderOpTexture !== ctx) {
                                this.newRenderOp(node, i);
                                node.renderOpTexture = ctx;
                            }
                            if (!DIRTY_QUAD_BUFFER || node.isQuadDirty) {
                                if (DIRTY_QUAD_BUFFER && node.isQuadDirty === true) this.dirtyQuadCount++;
                                var rc = node.renderCoords;
                                var tc = node.textureCoords || this.defaultTextureCoords;
                                var cTl = node.premultipliedColorTl;
                                var cTr = node.premultipliedColorTr;
                                var cBl = node.premultipliedColorBl;
                                var cBr = node.premultipliedColorBr;
                                f[i] = rc.x1;
                                f[i + 1] = rc.y1;
                                u[i + 2] = tc.qTl;
                                u[i + 3] = cTl;
                                f[i + 4] = rc.x2;
                                f[i + 5] = rc.y2;
                                u[i + 6] = tc.qTr;
                                u[i + 7] = cTr;
                                f[i + 8] = rc.x4;
                                f[i + 9] = rc.y4;
                                u[i + 10] = tc.qBl;
                                u[i + 11] = cBl;
                                f[i + 12] = rc.x3;
                                f[i + 13] = rc.y3;
                                u[i + 14] = tc.qBr;
                                u[i + 15] = cBr;
                            }
                            this.curRenderOp.numQuads++;
                        }
                    }, {
                        key: "newRenderOp",
                        value: function newRenderOp(node, bufferIdx) {
                            var curRenderOp = node;
                            curRenderOp.renderOpBufferIdx = bufferIdx;
                            curRenderOp.numQuads = 0;
                            curRenderOp.renderOpTexture = null;
                            this.curRenderOp = curRenderOp;
                            this.renderOps.push(curRenderOp);
                        }
                    }, {
                        key: "reuseRenderOp",
                        value: function reuseRenderOp(node) {
                            var curRenderOp = this.curRenderOp;
                            if (curRenderOp === null) return false;
                            if (compareRect(curRenderOp.clippingRect, node.clippingRect) === false) return false;
                            var shader = node.props.shader;
                            var curShader = curRenderOp.shader;
                            if (curShader.shaderKey === "default" && shader.shaderKey === "default") return true;
                            if (curShader !== shader) {
                                if (curShader.program !== shader.program || curShader.uniforms !== shader.uniforms) return false;
                            }
                            if (curShader.program.reuseRenderOp(node, curRenderOp) === false) return false;
                            return true;
                        }
                    }, {
                        key: "addRenderOp",
                        value: function addRenderOp(renderable) {
                            if (true === true) {
                                this.coreTextRenderOps.push(renderable);
                                return;
                            }
                            this.renderOps.push(renderable);
                            this.curRenderOp = null;
                        }
                    }, {
                        key: "flushTextRenderOps",
                        value: function flushTextRenderOps() {
                            var len = this.coreTextRenderOps.length;
                            if (len === 0) return;
                            for (var i = 0; i < len; i++) this.renderOps.push(this.coreTextRenderOps[i]);
                            this.coreTextRenderOps.length = 0;
                            this.curRenderOp = null;
                            this.curSdfRenderOp = null;
                        }
                    }, {
                        key: "addSdfQuads",
                        value: function addSdfQuads(glyphs, glyphCount, fontScale, transform, color, worldAlpha, distanceRange, atlasTexture, clippingRect, width, height, sdfShader) {
                            if (glyphCount === 0) return;
                            this.sdfBufferChanged = true;
                            var idx = this.sdfBufferIdx;
                            if (this.ensureSdfBufferCapacity(idx + glyphCount * FLOATS_PER_GLYPH) === false) return;
                            var f = this.fSdfBuffer;
                            var u = this.uiSdfBuffer;
                            var mergedColor = mergeColorAlpha(color, worldAlpha);
                            var r = mergedColor >>> 24;
                            var g = mergedColor >>> 16 & 255;
                            var b = mergedColor >>> 8 & 255;
                            var packedColor = ((mergedColor & 255) << 24 | b << 16 | g << 8 | r) >>> 0;
                            var m0 = transform.ta * fontScale;
                            var m1 = transform.tc * fontScale;
                            var m3 = transform.tb * fontScale;
                            var m4 = transform.td * fontScale;
                            var m6 = transform.tx;
                            var m7 = transform.ty;
                            var startQuad = this.sdfQuadCount;
                            var go = 0;
                            for (var gi = 0; gi < glyphCount; gi++) {
                                var gx1 = glyphs[go];
                                var gy1 = glyphs[go + 1];
                                var gx2 = gx1 + glyphs[go + 2];
                                var gy2 = gy1 + glyphs[go + 3];
                                var u1 = glyphs[go + 4];
                                var v1 = glyphs[go + 5];
                                var u2 = u1 + glyphs[go + 6];
                                var v2 = v1 + glyphs[go + 7];
                                go += 8;
                                var wx_tl = m0 * gx1 + m3 * gy1 + m6;
                                var wy_tl = m1 * gx1 + m4 * gy1 + m7;
                                var wx_tr = m0 * gx2 + m3 * gy1 + m6;
                                var wy_tr = m1 * gx2 + m4 * gy1 + m7;
                                var wx_bl = m0 * gx1 + m3 * gy2 + m6;
                                var wy_bl = m1 * gx1 + m4 * gy2 + m7;
                                var wx_br = m0 * gx2 + m3 * gy2 + m6;
                                var wy_br = m1 * gx2 + m4 * gy2 + m7;
                                f[idx] = wx_tl;
                                f[idx + 1] = wy_tl;
                                f[idx + 2] = u1;
                                f[idx + 3] = v1;
                                u[idx + 4] = packedColor;
                                f[idx + 5] = distanceRange;
                                idx += 6;
                                f[idx] = wx_tr;
                                f[idx + 1] = wy_tr;
                                f[idx + 2] = u2;
                                f[idx + 3] = v1;
                                u[idx + 4] = packedColor;
                                f[idx + 5] = distanceRange;
                                idx += 6;
                                f[idx] = wx_bl;
                                f[idx + 1] = wy_bl;
                                f[idx + 2] = u1;
                                f[idx + 3] = v2;
                                u[idx + 4] = packedColor;
                                f[idx + 5] = distanceRange;
                                idx += 6;
                                f[idx] = wx_br;
                                f[idx + 1] = wy_br;
                                f[idx + 2] = u2;
                                f[idx + 3] = v2;
                                u[idx + 4] = packedColor;
                                f[idx + 5] = distanceRange;
                                idx += 6;
                            }
                            this.sdfBufferIdx = idx;
                            this.sdfQuadCount += glyphCount;
                            this.finalizeSdfBatch(startQuad, glyphCount, atlasTexture, clippingRect, worldAlpha, width, height, sdfShader);
                        }
                    }, {
                        key: "addSdfCachedQuads",
                        value: function addSdfCachedQuads(cachedVertices, numGlyphs, atlasTexture, clippingRect, worldAlpha, width, height, sdfShader) {
                            if (numGlyphs === 0) return;
                            var startQuad = this.sdfQuadCount;
                            if (this.ensureSdfBufferCapacity(this.sdfBufferIdx + cachedVertices.length) === false) return;
                            this.fSdfBuffer.set(cachedVertices, this.sdfBufferIdx);
                            this.sdfBufferIdx += cachedVertices.length;
                            this.sdfQuadCount += numGlyphs;
                            this.finalizeSdfBatch(startQuad, numGlyphs, atlasTexture, clippingRect, worldAlpha, width, height, sdfShader);
                        }
                    }, {
                        key: "addSdfTranslatedQuads",
                        value: function addSdfTranslatedQuads(cachedVertices, numGlyphs, dx, dy, atlasTexture, clippingRect, worldAlpha, width, height, sdfShader) {
                            if (numGlyphs === 0) return;
                            this.sdfBufferChanged = true;
                            var startQuad = this.sdfQuadCount;
                            var idx = this.sdfBufferIdx;
                            if (this.ensureSdfBufferCapacity(idx + cachedVertices.length) === false) return;
                            var f = this.fSdfBuffer;
                            f.set(cachedVertices, idx);
                            var end = idx + cachedVertices.length;
                            for (var i = idx; i < end; i += 6) {
                                f[i] = f[i] + dx;
                                f[i + 1] = f[i + 1] + dy;
                            }
                            this.sdfBufferIdx = end;
                            this.sdfQuadCount += numGlyphs;
                            this.finalizeSdfBatch(startQuad, numGlyphs, atlasTexture, clippingRect, worldAlpha, width, height, sdfShader);
                        }
                    }, {
                        key: "finalizeSdfBatch",
                        value: function finalizeSdfBatch(startQuad, glyphCount, atlasTexture, clippingRect, worldAlpha, width, height, sdfShader) {
                            this.sdfWriteSig = this.sdfWriteSig * 31 + glyphCount | 0;
                            var opList = true === true ? this.coreTextRenderOps : this.renderOps;
                            var cur = this.curSdfRenderOp;
                            var canBatch = false;
                            if (cur !== null) {
                                if (cur.renderOpTexture === atlasTexture) {
                                    if (compareRect(cur.clippingRect, clippingRect)) canBatch = true;
                                }
                            }
                            if (canBatch && cur !== null) cur.numQuads += glyphCount; else {
                                var op = new SdfRenderOp(this, sdfShader, this.sdfQuadBufferCollection, atlasTexture, worldAlpha, clippingRect, width, height);
                                op.startQuad = startQuad;
                                op.numQuads = glyphCount;
                                opList.push(op);
                                this.curSdfRenderOp = op;
                                this.curRenderOp = null;
                            }
                        }
                    }, {
                        key: "ensureSdfBufferCapacity",
                        value: function ensureSdfBufferCapacity(requiredSize) {
                            var currentSize = this.fSdfBuffer.length;
                            if (requiredSize <= currentSize) return true;
                            if (requiredSize > MAX_SDF_BUFFER_FLOATS) return false;
                            var newCapacity = currentSize * 2;
                            while (newCapacity < requiredSize) newCapacity *= 2;
                            if (newCapacity > MAX_SDF_BUFFER_FLOATS) newCapacity = MAX_SDF_BUFFER_FLOATS;
                            var sdfBufSize = newCapacity * Float32Array.BYTES_PER_ELEMENT;
                            var newBuffer = new ArrayBuffer(sdfBufSize);
                            var newFSdfBuffer = new Float32Array(newBuffer);
                            var newUiSdfBuffer = new Uint32Array(newBuffer);
                            newFSdfBuffer.set(this.fSdfBuffer);
                            this.sdfBuffer = newBuffer;
                            this.fSdfBuffer = newFSdfBuffer;
                            this.uiSdfBuffer = newUiSdfBuffer;
                            this.sdfBufferChanged = true;
                            return true;
                        }
                    }, {
                        key: "useShader",
                        value: function useShader(program) {
                            if (this.attachedShader === program) return;
                            if (this.attachedShader !== null) this.attachedShader.detach();
                            program.attach();
                            this.attachedShader = program;
                        }
                    }, {
                        key: "render",
                        value: function render() {
                            var surface = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "screen";
                            if (true === true) this.flushTextRenderOps();
                            var glw = this.glw, quadBuffer = this.quadBuffer;
                            var buffer = this.quadBufferCollection.getBuffer("a_position") || null;
                            var BYTES = Float32Array.BYTES_PER_ELEMENT;
                            if (DIRTY_QUAD_BUFFER) {
                                var renderList = this.stage.renderList;
                                var len = renderList.length;
                                var fullUpload = this.needsFullUpload || this.curBufferIdx > this.lastUploadedBufferSize;
                                if (fullUpload === false) fullUpload = this.dirtyQuadCount > len * FULL_UPLOAD_DIRTY_RATIO;
                                if (fullUpload === true) {
                                    var arr = new Float32Array(quadBuffer, 0, this.curBufferIdx);
                                    glw.arrayBufferData(buffer, arr, glw.DYNAMIC_DRAW);
                                    this.needsFullUpload = false;
                                    this.lastUploadedBufferSize = this.curBufferIdx;
                                    for (var i = 0; i < len; i++) renderList[i].isQuadDirty = false;
                                } else if (this.dirtyQuadCount > 0) {
                                    var runStart = -1;
                                    var runWords = 0;
                                    for (var _i8 = 0; _i8 < len; _i8++) {
                                        var node = renderList[_i8];
                                        var idx = node.quadBufferIndex;
                                        if (idx === -1) continue;
                                        var dirty = node.isQuadDirty === true;
                                        if (dirty === true && runStart !== -1 && idx === runStart + runWords) {
                                            runWords += WORDS_PER_QUAD;
                                            node.isQuadDirty = false;
                                            continue;
                                        }
                                        if (runStart !== -1) {
                                            var byteOffset = runStart * BYTES;
                                            glw.arrayBufferSubData(buffer, byteOffset, new Float32Array(quadBuffer, byteOffset, runWords));
                                            runStart = -1;
                                            runWords = 0;
                                        }
                                        if (dirty === true) {
                                            runStart = idx;
                                            runWords = WORDS_PER_QUAD;
                                            node.isQuadDirty = false;
                                        }
                                    }
                                    if (runStart !== -1) {
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
                            this.quadBufferUsage = this.curBufferIdx * Float32Array.BYTES_PER_ELEMENT;
                            this.numQuadsRendered = this.quadBufferUsage / 64;
                        }
                    }, {
                        key: "uploadSdfBuffer",
                        value: function uploadSdfBuffer() {
                            if (this.sdfBufferIdx === 0) {
                                this.lastUploadedSdfSize = 0;
                                this.lastUploadedSdfSig = 0;
                                return;
                            }
                            if (this.sdfBufferChanged === false && this.sdfBufferIdx === this.lastUploadedSdfSize && this.sdfWriteSig === this.lastUploadedSdfSig) return;
                            var glw = this.glw;
                            var sdfBuf = this.sdfQuadBufferCollection.getBuffer("a_position") || null;
                            var sdfArr = new Float32Array(this.sdfBuffer, 0, this.sdfBufferIdx);
                            glw.arrayBufferData(sdfBuf, sdfArr, glw.DYNAMIC_DRAW);
                            this.lastUploadedSdfSize = this.sdfBufferIdx;
                            this.lastUploadedSdfSig = this.sdfWriteSig;
                            this.sdfBufferChanged = false;
                        }
                    }, {
                        key: "getQuadCount",
                        value: function getQuadCount() {
                            return this.numQuadsRendered;
                        }
                    }, {
                        key: "getRenderOpCount",
                        value: function getRenderOpCount() {
                            return this.renderOps.length;
                        }
                    }, {
                        key: "updateViewport",
                        value: function updateViewport() {
                            this.glw.updateCanvasDimensions();
                            this.glw.viewport(0, 0, this.glw.canvasW, this.glw.canvasH);
                        }
                    }, {
                        key: "getBufferInfo",
                        value: function getBufferInfo() {
                            return {
                                totalAvailable: this.quadBufferSize,
                                totalUsed: this.quadBufferUsage
                            };
                        }
                    }, {
                        key: "getCapabilities",
                        value: function getCapabilities() {
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
                        value: function checkForOutOfMemory() {
                            var glw = this.glw;
                            var outOfMemory = false;
                            for (var i = 0; i < MAX_DRAINED_GL_ERRORS; i++) {
                                var error = glw.getError();
                                if (error === 0) break;
                                if (error === GL_OUT_OF_MEMORY) outOfMemory = true;
                            }
                            return outOfMemory;
                        }
                    }, {
                        key: "getDefaultShaderNode",
                        value: function getDefaultShaderNode() {
                            if (this.defaultShaderNode !== null) return this.defaultShaderNode;
                            this.stage.shManager.registerShaderType("default", Default);
                            this.defaultShaderNode = this.stage.shManager.createShader("default");
                            return this.defaultShaderNode;
                        }
                    }, {
                        key: "getTextureCoords",
                        value: function getTextureCoords(node) {
                            var texture = node.texture;
                            if (texture === null) return;
                            var ctxTexture = texture.parentTexture !== void 0 ? texture.parentTexture.ctxTexture : texture.ctxTexture;
                            if (ctxTexture === void 0) return;
                            var textureOptions = node.props.textureOptions;
                            if (texture.type !== TextureType.subTexture && textureOptions === void 0) return ctxTexture.txCoords;
                            var _ctxTexture$txCoords = ctxTexture.txCoords, x1 = _ctxTexture$txCoords.x1, x2 = _ctxTexture$txCoords.x2, y1 = _ctxTexture$txCoords.y1, y2 = _ctxTexture$txCoords.y2;
                            if (texture.type === TextureType.subTexture) {
                                var _texture$parentTextur = texture.parentTexture.dimensions, parentW = _texture$parentTextur.w, parentH = _texture$parentTextur.h;
                                var _texture$props = texture.props, x = _texture$props.x, y = _texture$props.y, w = _texture$props.w, h = _texture$props.h;
                                x1 = x / parentW;
                                y1 = y / parentH;
                                x2 = x1 + w / parentW;
                                y2 = y1 + h / parentH;
                            }
                            var resizeMode = textureOptions.resizeMode;
                            if (resizeMode !== void 0 && resizeMode.type === "cover" && texture.dimensions !== null) {
                                var dimensions = texture.dimensions;
                                var _w = node.props.w;
                                var _h = node.props.h;
                                var scaleX = _w / dimensions.w;
                                var scaleY = _h / dimensions.h;
                                var scale = Math.max(scaleX, scaleY);
                                var precision = 1 / scale;
                                if (scaleX < scale) {
                                    var _resizeMode$clipX;
                                    var desiredSize = precision * node.props.w;
                                    x1 = (1 - desiredSize / dimensions.w) * clampUnit((_resizeMode$clipX = resizeMode.clipX) !== null && _resizeMode$clipX !== void 0 ? _resizeMode$clipX : .5);
                                    x2 = x1 + desiredSize / dimensions.w;
                                }
                                if (scaleY < scale) {
                                    var _resizeMode$clipY;
                                    var _desiredSize = precision * node.props.h;
                                    y1 = (1 - _desiredSize / dimensions.h) * clampUnit((_resizeMode$clipY = resizeMode.clipY) !== null && _resizeMode$clipY !== void 0 ? _resizeMode$clipY : .5);
                                    y2 = y1 + _desiredSize / dimensions.h;
                                }
                            }
                            if (textureOptions.flipX === true) {
                                var _ref18 = [ x2, x1 ];
                                x1 = _ref18[0];
                                x2 = _ref18[1];
                            }
                            if (textureOptions.flipY === true) {
                                var _ref19 = [ y2, y1 ];
                                y1 = _ref19[0];
                                y2 = _ref19[1];
                            }
                            return createTextureCoords(x1, y1, x2, y2);
                        }
                    }, {
                        key: "invalidateQuadBuffer",
                        value: function invalidateQuadBuffer() {
                            this.sdfBufferChanged = true;
                            if (!DIRTY_QUAD_BUFFER) return;
                            var renderList = this.stage.renderList;
                            for (var i = 0, len = renderList.length; i < len; i++) {
                                renderList[i].quadBufferIndex = -1;
                                renderList[i].isQuadDirty = true;
                            }
                            this.curBufferIdx = 0;
                            this.lastUploadedBufferSize = 0;
                            this.needsFullUpload = true;
                        }
                    }, {
                        key: "updateClearColor",
                        value: function updateClearColor(color) {
                            if (this.clearColor.raw === color) return;
                            var glw = this.glw;
                            var normalizedColor = getNormalizedRgbaComponents(color);
                            glw.clearColor(normalizedColor[0], normalizedColor[1], normalizedColor[2], normalizedColor[3]);
                            this.clearColor = {
                                raw: color,
                                normalized: normalizedColor
                            };
                        }
                    } ]);
                }(CoreRenderer);
                Sdf = {
                    vertex: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    // Pre-transformed world-pixel position\n    attribute vec2 a_position;\n    attribute vec2 a_textureCoords;\n    // Per-vertex color (RGBA, unsigned byte, normalized)\n    attribute vec4 a_color;\n    // Per-vertex SDF distance range\n    attribute float a_distRange;\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n\n    varying vec2 v_texcoord;\n    varying float v_scaledDistRange;\n    varying vec4 v_color;\n\n    void main() {\n      // a_position is already in world pixel space (pre-transformed on CPU)\n      vec2 screenSpace = (a_position * u_pixelRatio / u_resolution * 2.0 - 1.0) * vec2(1, -1);\n\n      gl_Position = vec4(screenSpace, 0.0, 1.0);\n      v_texcoord = a_textureCoords;\n      v_scaledDistRange = a_distRange * u_pixelRatio;\n      v_color = a_color;\n    }\n  ",
                    fragment: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    uniform sampler2D u_texture;\n\n    varying vec2 v_texcoord;\n    varying float v_scaledDistRange;\n    varying vec4 v_color;\n\n    float median(float r, float g, float b) {\n        return clamp(b, min(r, g), max(r, g));\n    }\n\n    void main() {\n        vec3 s = texture2D(u_texture, v_texcoord).rgb;\n        float sigDist = v_scaledDistRange * (median(s.r, s.g, s.b) - 0.5);\n        float opacity = clamp(sigDist + 0.5, 0.0, 1.0) * v_color.a;\n\n        // Premultiply RGB by final opacity\n        gl_FragColor = vec4(v_color.rgb * opacity, opacity);\n    }\n  "
                };
                type$2 = "sdf";
                sdfShader = null;
                maxLayoutCacheSize$1 = 250;
                init$2 = function init$2(stage) {
                    init$3();
                    var configuredCacheSize = stage.options.textLayoutCacheSize;
                    if (configuredCacheSize !== void 0) maxLayoutCacheSize$1 = configuredCacheSize;
                    stage.shManager.registerShaderType("Sdf", Sdf);
                    sdfShader = null;
                };
                getSdfShader = function getSdfShader(stage) {
                    if (sdfShader === null) sdfShader = stage.shManager.createShader("Sdf");
                    return sdfShader;
                };
                font$1 = SdfFontHandler_exports;
                layoutCache$1 = new Map;
                getLayoutCacheKey = function getLayoutCacheKey(props) {
                    return "".concat(props.fontFamily, "-").concat(props.fontStyle, "-").concat(props.fontSize, "-").concat(props.letterSpacing, "-").concat(props.lineHeight, "-").concat(props.maxHeight, "-").concat(props.maxWidth, "-").concat(props.maxLines, "-").concat(props.textAlign, "-").concat(props.wordBreak, "-").concat(props.overflowSuffix, "-").concat(props.text);
                };
                renderText$1 = function renderText$1(props) {
                    if (props.text.length === 0) return {
                        width: 0,
                        height: 0
                    };
                    var cacheKey = getLayoutCacheKey(props);
                    var layout = layoutCache$1.get(cacheKey);
                    if (layout !== void 0) {
                        layoutCache$1.delete(cacheKey);
                        layoutCache$1.set(cacheKey, layout);
                        return {
                            remainingLines: 0,
                            hasRemainingText: false,
                            width: layout.width,
                            height: layout.height,
                            layout: layout
                        };
                    }
                    var fontData = _getFontData(props.fontFamily);
                    if (fontData === void 0) return {
                        width: 0,
                        height: 0
                    };
                    layout = generateTextLayout(props, fontData);
                    layoutCache$1.set(cacheKey, layout);
                    if (layoutCache$1.size > maxLayoutCacheSize$1) {
                        var oldest = layoutCache$1.keys().next().value;
                        layoutCache$1.delete(oldest);
                    }
                    return {
                        remainingLines: 0,
                        hasRemainingText: false,
                        width: layout.width,
                        height: layout.height,
                        layout: layout
                    };
                };
                addQuads$1 = function addQuads$1(_layout) {
                    return null;
                };
                renderQuads$1 = function renderQuads$1(renderer, layout, _vertexBuffer, renderProps) {
                    var fontFamily = renderProps.fontFamily;
                    var atlasTexture = _getAtlas(fontFamily);
                    if (atlasTexture === null) return null;
                    var webGlRenderer = renderer;
                    var cache = renderProps.sdfCache;
                    var ctxTexture = atlasTexture.ctxTexture;
                    var shader = getSdfShader(webGlRenderer.stage);
                    if (cache !== void 0 && cache.vertices !== null) {
                        var t = renderProps.globalTransform;
                        if (cache.layoutRef === layout && cache.color === renderProps.color && cache.alpha === renderProps.worldAlpha && cache.ta === t.ta && cache.tc === t.tc && cache.tb === t.tb && cache.td === t.td) {
                            var dx = t.tx - cache.tx;
                            var dy = t.ty - cache.ty;
                            if (dx === 0 && dy === 0) {
                                if (cache.translated === true) {
                                    webGlRenderer.sdfBufferChanged = true;
                                    cache.translated = false;
                                }
                                webGlRenderer.addSdfCachedQuads(cache.vertices, cache.glyphCount, ctxTexture, renderProps.clippingRect, renderProps.worldAlpha, layout.width, layout.height, shader);
                                return null;
                            }
                            cache.translated = true;
                            webGlRenderer.addSdfTranslatedQuads(cache.vertices, cache.glyphCount, dx, dy, ctxTexture, renderProps.clippingRect, renderProps.worldAlpha, layout.width, layout.height, shader);
                            return null;
                        }
                    }
                    var startIdx = webGlRenderer.sdfBufferIdx;
                    webGlRenderer.addSdfQuads(layout.glyphs, layout.glyphCount, layout.fontScale, renderProps.globalTransform, renderProps.color, renderProps.worldAlpha, layout.distanceRange, ctxTexture, renderProps.clippingRect, layout.width, layout.height, shader);
                    if (cache !== void 0) {
                        var endIdx = webGlRenderer.sdfBufferIdx;
                        var len = endIdx - startIdx;
                        if (len > 0) {
                            if (cache.vertices === null || cache.vertices.length !== len) cache.vertices = new Float32Array(len);
                            cache.vertices.set(webGlRenderer.fSdfBuffer.subarray(startIdx, endIdx));
                            cache.glyphCount = layout.glyphCount;
                            cache.color = renderProps.color;
                            cache.alpha = renderProps.worldAlpha;
                            cache.layoutRef = layout;
                            cache.translated = false;
                            var _t7 = renderProps.globalTransform;
                            cache.ta = _t7.ta;
                            cache.tc = _t7.tc;
                            cache.tb = _t7.tb;
                            cache.td = _t7.td;
                            cache.tx = _t7.tx;
                            cache.ty = _t7.ty;
                        }
                    }
                    return null;
                };
                generateTextLayout = function generateTextLayout(props, fontCache) {
                    var fontSize = props.fontSize;
                    var fontFamily = props.fontFamily;
                    var metrics = getFontMetrics$1(fontFamily, fontSize);
                    var fontData = fontCache.data;
                    var commonFontData = fontData.common;
                    var designFontSize = fontData.info.size;
                    var atlasBase = commonFontData.base;
                    var lineHeight = props.lineHeight;
                    var atlasWidth = commonFontData.scaleW;
                    var atlasHeight = commonFontData.scaleH;
                    var invAtlasWidth = 1 / atlasWidth;
                    var invAtlasHeight = 1 / atlasHeight;
                    var glyphMap = fontCache.glyphMap;
                    var kernings = fontCache.kernings;
                    var fallbackGlyphId = true ? 32 : 63;
                    var fontScale = fontSize / designFontSize;
                    var letterSpacing = props.letterSpacing / fontScale;
                    var maxWidth = props.maxWidth / fontScale;
                    var maxHeight = props.maxHeight;
                    var _mapTextLayout = mapTextLayout(measureText$1, metrics, props.text, props.textAlign, fontFamily, lineHeight, props.overflowSuffix, props.wordBreak, letterSpacing, props.maxLines, maxWidth, maxHeight), _mapTextLayout2 = _slicedToArray(_mapTextLayout, 7), lines = _mapTextLayout2[0], _remainingLines = _mapTextLayout2[1], _hasRemainingText = _mapTextLayout2[2], _bareLineHeight = _mapTextLayout2[3], lineHeightPx = _mapTextLayout2[4], effectiveWidth = _mapTextLayout2[5], effectiveHeight = _mapTextLayout2[6];
                    var lineAmount = lines.length;
                    var maxGlyphs = 0;
                    for (var i = 0; i < lineAmount; i++) maxGlyphs += lines[i][0].length;
                    var glyphs = new Float32Array(maxGlyphs * 8);
                    var glyphIdx = 0;
                    var glyphCount = 0;
                    var currentX = 0;
                    var baselineY = 0;
                    for (var _i0 = 0; _i0 < lineAmount; _i0++) {
                        var line = lines[_i0];
                        var textLine = line[0];
                        var textLineLength = textLine.length;
                        var prevGlyphId = 0;
                        currentX = line[3];
                        baselineY = line[4] / fontScale;
                        for (var j = 0; j < textLineLength; j++) {
                            var codepoint = textLine.codePointAt(j);
                            if (codepoint > 65535) j++;
                            if (codepoint === 8203) continue;
                            var char = textLine[j];
                            if (hasZeroWidthSpace(char) === true) continue;
                            var glyph = glyphMap.get(codepoint);
                            if (glyph === void 0) {
                                glyph = glyphMap.get(fallbackGlyphId);
                                if (glyph === void 0) continue;
                            }
                            var kerning = 0;
                            if (prevGlyphId !== 0) {
                                var seconds = kernings[glyph.id];
                                if (seconds !== void 0) {
                                    var amount = seconds[prevGlyphId];
                                    if (amount !== void 0) kerning = amount;
                                }
                            }
                            currentX += kerning;
                            glyphs[glyphIdx] = currentX + glyph.xoffset;
                            glyphs[glyphIdx + 1] = baselineY + glyph.yoffset - atlasBase;
                            glyphs[glyphIdx + 2] = glyph.width;
                            glyphs[glyphIdx + 3] = glyph.height;
                            glyphs[glyphIdx + 4] = glyph.x * invAtlasWidth;
                            glyphs[glyphIdx + 5] = glyph.y * invAtlasHeight;
                            glyphs[glyphIdx + 6] = glyph.width * invAtlasWidth;
                            glyphs[glyphIdx + 7] = glyph.height * invAtlasHeight;
                            glyphIdx += 8;
                            glyphCount++;
                            currentX += glyph.xadvance + letterSpacing;
                            prevGlyphId = glyph.id;
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
                };
                cleanup$1 = function cleanup$1() {
                    while (layoutCache$1.size > maxLayoutCacheSize$1) {
                        var oldest = layoutCache$1.keys().next().value;
                        layoutCache$1.delete(oldest);
                    }
                };
                SdfTextRenderer = {
                    type: type$2,
                    font: font$1,
                    renderText: renderText$1,
                    addQuads: addQuads$1,
                    renderQuads: renderQuads$1,
                    init: init$2,
                    cleanup: cleanup$1
                };
                CanvasFontHandler_exports = __exportAll({
                    calculateFontMetrics: function calculateFontMetrics() {
                        return _calculateFontMetrics;
                    },
                    canRenderFont: function canRenderFont() {
                        return _canRenderFont;
                    },
                    getFontFamilies: function getFontFamilies() {
                        return _getFontFamilies;
                    },
                    getFontMetrics: function getFontMetrics() {
                        return _getFontMetrics;
                    },
                    init: function init() {
                        return init$1;
                    },
                    isFontLoaded: function isFontLoaded() {
                        return _isFontLoaded;
                    },
                    loadFont: function loadFont() {
                        return _loadFont;
                    },
                    measureText: function measureText() {
                        return _measureText;
                    },
                    processFontMetrics: function processFontMetrics() {
                        return _processFontMetrics;
                    },
                    stopWaitingForFont: function stopWaitingForFont() {
                        return _stopWaitingForFont;
                    },
                    type: function type() {
                        return type$1;
                    },
                    waitingForFont: function waitingForFont() {
                        return _waitingForFont;
                    }
                });
                fontFamilies = {};
                fontLoadPromises = new Map;
                normalizedMetrics = new Map;
                nodesWaitingForFont = Object.create(null);
                fontCache = new Map;
                initialized = false;
                _canRenderFont = function _canRenderFont() {
                    return true;
                };
                processFontData = function processFontData(fontFamily, fontFace, metrics) {
                    metrics = metrics || defaultFontMetrics;
                    fontCache.set(fontFamily, {
                        fontFamily: fontFamily,
                        fontFace: fontFace,
                        metrics: metrics
                    });
                };
                _loadFont = function _loadFont(stage, options) {
                    var fontFamily = options.fontFamily, fontUrl = options.fontUrl, metrics = options.metrics;
                    var names = Array.isArray(fontFamily) ? fontFamily : [ fontFamily ];
                    var primary = names[0];
                    var prefetched = takeCanvasPrefetch(primary);
                    if (fontCache.has(primary) === true) return Promise.resolve();
                    var existingPromise = fontLoadPromises.get(primary);
                    if (existingPromise !== void 0) return existingPromise;
                    for (var i = 0; i < names.length; i++) nodesWaitingForFont[names[i]] = [];
                    var loadPromise = Promise.resolve(prefetched).then(function(faces) {
                        return faces != null && faces.length === names.length ? faces : Promise.all(names.map(function(name) {
                            return new FontFace(name, "url(".concat(fontUrl, ")")).load();
                        }));
                    }).then(function(faces) {
                        for (var _i1 = 0; _i1 < names.length; _i1++) {
                            var loadedFont = faces[_i1];
                            stage.platform.addFont(loadedFont);
                            processFontData(names[_i1], loadedFont, metrics);
                        }
                    }).then(function() {
                        for (var _i10 = 0; _i10 < names.length; _i10++) {
                            var name = names[_i10];
                            fontLoadPromises.delete(name);
                            var nwff = nodesWaitingForFont[name];
                            if (nwff !== void 0) {
                                for (var key in nwff) nwff[key].setUpdateType(UpdateType.Local);
                                delete nodesWaitingForFont[name];
                            }
                        }
                    }).catch(function(error) {
                        for (var _i11 = 0; _i11 < names.length; _i11++) fontLoadPromises.delete(names[_i11]);
                        console.error("Failed to load font: ".concat(primary), error);
                        throw error;
                    });
                    for (var _i12 = 0; _i12 < names.length; _i12++) fontLoadPromises.set(names[_i12], loadPromise);
                    return loadPromise;
                };
                _getFontFamilies = function _getFontFamilies() {
                    return fontFamilies;
                };
                init$1 = function init$1(c, mc) {
                    if (initialized === true) return;
                    if (c === void 0) throw new Error("Canvas context is not provided for font handler initialization");
                    measureContext$1 = mc || c;
                    processFontData("sans-serif", void 0, {
                        ascender: 800,
                        descender: -200,
                        lineGap: 200,
                        unitsPerEm: 1e3
                    });
                    initialized = true;
                };
                type$1 = "canvas";
                _isFontLoaded = function _isFontLoaded(fontFamily) {
                    return fontCache.has(fontFamily);
                };
                _waitingForFont = function _waitingForFont(fontFamily, node) {
                    if (nodesWaitingForFont[fontFamily] === void 0) return;
                    nodesWaitingForFont[fontFamily][node.id] = node;
                };
                _stopWaitingForFont = function _stopWaitingForFont(fontFamily, node) {
                    if (nodesWaitingForFont[fontFamily] === void 0) return;
                    delete nodesWaitingForFont[fontFamily][node.id];
                };
                _getFontMetrics = function _getFontMetrics(fontFamily, fontSize) {
                    var out = normalizedMetrics.get(fontFamily + fontSize);
                    if (out !== void 0) return out;
                    var metrics = fontCache.get(fontFamily).metrics;
                    if (metrics === void 0) metrics = _calculateFontMetrics(fontFamily, fontSize);
                    return _processFontMetrics(fontFamily, fontSize, metrics);
                };
                _processFontMetrics = function _processFontMetrics(fontFamily, fontSize, metrics) {
                    var label = fontFamily + fontSize;
                    var normalized = normalizeFontMetrics(metrics, fontSize);
                    normalizedMetrics.set(label, normalized);
                    return normalized;
                };
                _measureText = function _measureText(text, fontFamily, letterSpacing) {
                    if (letterSpacing === 0) return measureContext$1.measureText(text).width;
                    var width = 0;
                    for (var i = 0, n = text.length; i < n; i++) {
                        var char = text.charAt(i);
                        if (hasZeroWidthSpace(char) === true) continue;
                        width += measureContext$1.measureText(char).width + letterSpacing;
                    }
                    return width;
                };
                type = "canvas";
                font = CanvasFontHandler_exports;
                canvas = null;
                context = null;
                measureCanvas = null;
                measureContext = null;
                layoutCache = new Map;
                maxLayoutCacheSize = 250;
                init = function init(stage) {
                    var dpr = stage.options.devicePhysicalPixelRatio;
                    var configuredCacheSize = stage.options.textLayoutCacheSize;
                    if (configuredCacheSize !== void 0) maxLayoutCacheSize = configuredCacheSize;
                    canvas = stage.platform.createCanvas();
                    context = canvas.getContext("2d", {
                        willReadFrequently: true
                    });
                    context.setTransform(dpr, 0, 0, dpr, 0, 0);
                    context.textRendering = "optimizeSpeed";
                    measureCanvas = stage.platform.createCanvas();
                    measureContext = measureCanvas.getContext("2d");
                    measureContext.setTransform(dpr, 0, 0, dpr, 0, 0);
                    measureContext.textRendering = "optimizeSpeed";
                    measureCanvas.width = 1;
                    measureCanvas.height = 1;
                    init$1(context, measureContext);
                };
                renderText = function renderText(props) {
                    var _props$color;
                    assertTruthy(canvas, "Canvas is not initialized");
                    assertTruthy(context, "Canvas context is not available");
                    assertTruthy(measureContext, "Canvas measureContext is not available");
                    if (props.text.length === 0) return {
                        width: 0,
                        height: 0
                    };
                    var text = props.text, fontFamily = props.fontFamily, fontStyle = props.fontStyle, fontSize = props.fontSize, textAlign = props.textAlign, maxLines = props.maxLines, lineHeight = props.lineHeight, verticalAlign = props.verticalAlign, overflowSuffix = props.overflowSuffix, maxWidth = props.maxWidth, maxHeight = props.maxHeight, wordBreak = props.wordBreak;
                    var font = "".concat(fontStyle, " ").concat(fontSize, "px Unknown, ").concat(fontFamily);
                    measureContext.font = font;
                    measureContext.textBaseline = "alphabetic";
                    var metrics = _getFontMetrics(fontFamily, fontSize);
                    var letterSpacing = props.letterSpacing;
                    var _mapTextLayout3 = mapTextLayout(_measureText, metrics, text, textAlign, fontFamily, lineHeight, overflowSuffix, wordBreak, letterSpacing, maxLines, maxWidth, maxHeight), _mapTextLayout4 = _slicedToArray(_mapTextLayout3, 7), lines = _mapTextLayout4[0], remainingLines = _mapTextLayout4[1], hasRemainingText = _mapTextLayout4[2], bareLineHeight = _mapTextLayout4[3], lineHeightPx = _mapTextLayout4[4], effectiveWidth = _mapTextLayout4[5], effectiveHeight = _mapTextLayout4[6];
                    var lineAmount = lines.length;
                    var canvasW = Math.ceil(effectiveWidth);
                    var canvasH = Math.ceil(effectiveHeight);
                    canvas.width = canvasW;
                    canvas.height = canvasH;
                    var color = (_props$color = props.color) !== null && _props$color !== void 0 ? _props$color : 4294967295;
                    var r = color >>> 24 & 255;
                    var g = color >>> 16 & 255;
                    var b = color >>> 8 & 255;
                    var a = color & 255;
                    context.fillStyle = "rgba(".concat(r, ",").concat(g, ",").concat(b, ",").concat(a / 255, ")");
                    context.font = font;
                    context.textBaseline = "alphabetic";
                    if (fontSize >= 128) {
                        context.globalAlpha = .01;
                        context.fillRect(0, 0, .01, .01);
                        context.globalAlpha = 1;
                    }
                    for (var i = 0; i < lineAmount; i++) {
                        var line = lines[i];
                        var textLine = line[0];
                        var currentX = Math.ceil(line[3]);
                        var currentY = Math.ceil(line[4]);
                        if (letterSpacing === 0) context.fillText(textLine, currentX, currentY); else {
                            var textLineLength = textLine.length;
                            for (var j = 0; j < textLineLength; j++) {
                                var char = textLine.charAt(j);
                                if (hasZeroWidthSpace(char) === true) continue;
                                context.fillText(char, currentX, currentY);
                                currentX += _measureText(char, fontFamily, letterSpacing);
                            }
                        }
                    }
                    var imageData = null;
                    if (canvas.width > 0 && canvas.height > 0) imageData = context.getImageData(0, 0, canvasW, canvasH);
                    return {
                        imageData: imageData,
                        width: effectiveWidth,
                        height: effectiveHeight,
                        remainingLines: remainingLines,
                        hasRemainingText: hasRemainingText
                    };
                };
                clearLayoutCache = function clearLayoutCache() {
                    layoutCache.clear();
                };
                cleanup = function cleanup() {
                    while (layoutCache.size > maxLayoutCacheSize) {
                        var oldest = layoutCache.keys().next().value;
                        layoutCache.delete(oldest);
                    }
                };
                addQuads = function addQuads() {
                    return null;
                };
                renderQuads = function renderQuads() {};
                CanvasTextRenderer = {
                    type: type,
                    font: font,
                    renderText: renderText,
                    addQuads: addQuads,
                    renderQuads: renderQuads,
                    init: init,
                    clearLayoutCache: clearLayoutCache,
                    cleanup: cleanup
                };
                WHITE = {
                    isWhite: true,
                    a: 1,
                    r: 255,
                    g: 255,
                    b: 255
                };
                SCRATCH = {
                    isWhite: false,
                    a: 1,
                    r: 0,
                    g: 0,
                    b: 0
                };
                CanvasTexture = function(_CoreContextTexture2) {
                    function CanvasTexture() {
                        var _this8;
                        for (var _len2 = arguments.length, _args = new Array(_len2), _key5 = 0; _key5 < _len2; _key5++) {
                            _args[_key5] = arguments[_key5];
                        }
                        _this8 = _callSuper(this, CanvasTexture, [].concat(_args));
                        _this8.image = void 0;
                        _this8.tintCache = void 0;
                        return _this8;
                    }
                    _inherits(CanvasTexture, _CoreContextTexture2);
                    return _createClass(CanvasTexture, [ {
                        key: "load",
                        value: function load() {
                            var textureData = this.textureSource.textureData;
                            this.textureSource.setState("loading");
                            try {
                                assertTruthy(textureData == null ? void 0 : textureData.data, "Texture data is null before load");
                                var size = this.onLoadRequest(textureData.data);
                                if (this.textureSource.state === "freed") {
                                    this.image = void 0;
                                    return;
                                }
                                this.textureSource.setState("loaded", size);
                                this.textureSource.freeTextureData();
                                this.updateMemSize();
                            } catch (err) {
                                this.textureSource.setState("failed", err);
                                this.textureSource.freeTextureData();
                            }
                        }
                    }, {
                        key: "release",
                        value: function release() {
                            this.image = void 0;
                            this.tintCache = void 0;
                        }
                    }, {
                        key: "free",
                        value: function free() {
                            this.release();
                            this.textureSource.setState("freed");
                            this.setTextureMemUse(0);
                            this.textureSource.freeTextureData();
                        }
                    }, {
                        key: "updateMemSize",
                        value: function updateMemSize() {
                            var mult = this.tintCache ? 8 : 4;
                            if (this.textureSource.dimensions) this.setTextureMemUse(this.textureSource.dimensions.w * this.textureSource.dimensions.h * mult);
                        }
                    }, {
                        key: "hasImage",
                        value: function hasImage() {
                            return this.image !== void 0;
                        }
                    }, {
                        key: "getImage",
                        value: function getImage(color) {
                            var _this$tintCache;
                            var image = this.image;
                            if (image === void 0) return null;
                            if (color.isWhite) {
                                if (this.tintCache) {
                                    this.tintCache = void 0;
                                    this.updateMemSize();
                                }
                                return image;
                            }
                            var key = formatRgba(color);
                            if (((_this$tintCache = this.tintCache) == null ? void 0 : _this$tintCache.key) === key) return this.tintCache.image;
                            var tintedImage = this.tintTexture(image, key);
                            this.tintCache = {
                                key: key,
                                image: tintedImage
                            };
                            this.updateMemSize();
                            return tintedImage;
                        }
                    }, {
                        key: "tintTexture",
                        value: function tintTexture(source, color) {
                            var width = source.width, height = source.height;
                            var canvas = document.createElement("canvas");
                            canvas.width = width;
                            canvas.height = height;
                            var ctx = canvas.getContext("2d");
                            if (ctx) {
                                ctx.fillStyle = color;
                                ctx.globalCompositeOperation = "copy";
                                ctx.fillRect(0, 0, width, height);
                                ctx.globalCompositeOperation = "multiply";
                                ctx.drawImage(source, 0, 0, width, height, 0, 0, width, height);
                                ctx.globalCompositeOperation = "destination-in";
                                ctx.drawImage(source, 0, 0, width, height, 0, 0, width, height);
                            }
                            return canvas;
                        }
                    }, {
                        key: "onLoadRequest",
                        value: function onLoadRequest(data) {
                            if (data === null) throw new Error("CanvasTexture: Texture data is null");
                            if (_typeof(data) === "object" && "mipmaps" in data) throw new Error("CanvasTexture: Compressed texture data is not supported in Canvas2D render mode");
                            if (data instanceof ImageData) {
                                var _canvas = document.createElement("canvas");
                                _canvas.width = data.width;
                                _canvas.height = data.height;
                                var ctx = _canvas.getContext("2d");
                                if (ctx !== null) ctx.putImageData(data, 0, 0);
                                this.image = _canvas;
                                return {
                                    w: data.width,
                                    h: data.height
                                };
                            } else if (typeof ImageBitmap !== "undefined" && data instanceof ImageBitmap || data instanceof HTMLImageElement) {
                                this.image = data;
                                return {
                                    w: data.width,
                                    h: data.height
                                };
                            }
                            return {
                                w: 0,
                                h: 0
                            };
                        }
                    } ]);
                }(CoreContextTexture);
                parsedArgbColors = new Map;
                parsedRgbaColors = new Map;
                CanvasShaderNode = function(_CoreShaderNode2) {
                    function CanvasShaderNode(shaderKey, config, stage, props) {
                        var _this9;
                        _this9 = _callSuper(this, CanvasShaderNode, [ shaderKey, config, stage, props ]);
                        _this9.updater = void 0;
                        _this9.computed = {};
                        _this9.applySNR = void 0;
                        _this9.render = void 0;
                        _this9.applySNR = config.saveAndRestore || false;
                        _this9.render = config.render;
                        if (config.update !== void 0) {
                            _this9.updater = config.update;
                            if (_this9.props === void 0) {
                                _this9.updater(_this9.node, _this9.props);
                                return _possibleConstructorReturn(_this9);
                            }
                            _this9.update = function() {
                                var prevKey = _this9.valueKey;
                                _this9.valueKey = _this9.createValueKey();
                                if (prevKey === _this9.valueKey) return;
                                if (prevKey.length > 0) _this9.stage.shManager.mutateShaderValueUsage(prevKey, -1);
                                var computed = _this9.stage.shManager.getShaderValues(_this9.valueKey);
                                if (computed !== void 0) {
                                    _this9.computed = computed;
                                    return;
                                }
                                _this9.computed = {};
                                _this9.updater(_this9.node);
                                _this9.stage.shManager.setShaderValues(_this9.valueKey, _this9.computed);
                            };
                        }
                        return _this9;
                    }
                    _inherits(CanvasShaderNode, _CoreShaderNode2);
                    return _createClass(CanvasShaderNode, [ {
                        key: "toColorString",
                        value: function toColorString(rgba) {
                            return normalizeCanvasColor(rgba, true);
                        }
                    } ]);
                }(CoreShaderNode);
                CanvasRenderer = function(_CoreRenderer2) {
                    function CanvasRenderer(options) {
                        var _this0;
                        _this0 = _callSuper(this, CanvasRenderer, [ options ]);
                        _this0.context = void 0;
                        _this0.canvas = void 0;
                        _this0.pixelRatio = void 0;
                        _this0.clearColor = void 0;
                        _this0.clearColorAlpha = void 0;
                        _this0.shaderContextNode = null;
                        _this0.shaderContextTexture = null;
                        _this0.shaderRenderContext = function() {
                            _this0.renderContext(_this0.shaderContextNode, _this0.shaderContextTexture);
                        };
                        _this0.mode = "canvas";
                        var canvas = options.canvas;
                        _this0.canvas = canvas;
                        _this0.context = canvas.getContext("2d");
                        _this0.pixelRatio = _this0.stage.pixelRatio;
                        _this0.clearColor = normalizeCanvasColor(_this0.stage.clearColor);
                        _this0.clearColorAlpha = _this0.stage.clearColor >>> 24 & 255;
                        return _this0;
                    }
                    _inherits(CanvasRenderer, _CoreRenderer2);
                    return _createClass(CanvasRenderer, [ {
                        key: "reset",
                        value: function reset() {
                            var ctx = this.context;
                            var w = this.canvas.width;
                            var h = this.canvas.height;
                            ctx.setTransform(1, 0, 0, 1, 0, 0);
                            ctx.clearRect(0, 0, w, h);
                            if (this.clearColorAlpha !== 0) {
                                ctx.fillStyle = this.clearColor;
                                ctx.fillRect(0, 0, w, h);
                            }
                            ctx.scale(this.pixelRatio, this.pixelRatio);
                        }
                    }, {
                        key: "render",
                        value: function render() {}
                    }, {
                        key: "addQuad",
                        value: function addQuad(node, renderTexture) {
                            var ctx = this.context;
                            var _node$globalTransform = node.globalTransform, tx = _node$globalTransform.tx, ty = _node$globalTransform.ty, ta = _node$globalTransform.ta, tb = _node$globalTransform.tb, tc = _node$globalTransform.tc, td = _node$globalTransform.td;
                            var clippingRect = node.clippingRect;
                            var texture = renderTexture !== void 0 ? renderTexture : node.placeholderActive === true ? this.stage.defaultTexture : node.props.texture || this.stage.defaultTexture;
                            if (texture !== null) {
                                var textureType = texture.type;
                                if (textureType !== TextureType.image && textureType !== TextureType.subTexture && textureType !== TextureType.color && textureType !== TextureType.noise) return;
                            }
                            var hasTransform = ta !== 1 || td !== 1 || tb !== 0 || tc !== 0;
                            var clippingValid = clippingRect.valid === true;
                            if (clippingValid === true && clippingRect.w === 0 && clippingRect.h === 0) return;
                            var hasClipping = clippingValid === true && clippingRect.w !== 0 && clippingRect.h !== 0;
                            var shader = node.props.shader;
                            var hasShader = shader !== null;
                            var saveAndRestore = hasTransform === true || hasClipping === true;
                            if (hasShader === true) saveAndRestore = saveAndRestore || shader.applySNR;
                            if (saveAndRestore) ctx.save();
                            if (hasClipping === true) {
                                ctx.beginPath();
                                ctx.rect(clippingRect.x, clippingRect.y, clippingRect.w, clippingRect.h);
                                ctx.clip();
                            }
                            if (hasTransform === true) {
                                var scale = this.pixelRatio;
                                ctx.setTransform(ta, tc, tb, td, tx * scale, ty * scale);
                                ctx.scale(scale, scale);
                                ctx.translate(-tx, -ty);
                            }
                            if (hasShader === true) {
                                this.shaderContextNode = node;
                                this.shaderContextTexture = texture;
                                shader.render(ctx, node, this.shaderRenderContext);
                                this.shaderContextNode = null;
                                this.shaderContextTexture = null;
                            } else this.renderContext(node, texture);
                            if (saveAndRestore) ctx.restore();
                        }
                    }, {
                        key: "renderContext",
                        value: function renderContext(node, texture) {
                            var color = node.premultipliedColorTl;
                            var textureType = texture.type;
                            var tx = node.globalTransform.tx;
                            var ty = node.globalTransform.ty;
                            var width = node.props.w;
                            var height = node.props.h;
                            if (textureType !== TextureType.color) {
                                var _tintColor$a;
                                var tintColor = parseColor(color);
                                var image;
                                if (textureType === TextureType.subTexture) image = texture.parentTexture.ctxTexture.getImage(tintColor); else image = texture.ctxTexture.getImage(tintColor);
                                if (image === null || image === void 0) return;
                                var imageWidth = image.width;
                                var imageHeight = image.height;
                                if (typeof imageWidth !== "number" || typeof imageHeight !== "number" || imageWidth <= 0 || imageHeight <= 0) return;
                                this.context.globalAlpha = (_tintColor$a = tintColor.a) !== null && _tintColor$a !== void 0 ? _tintColor$a : node.worldAlpha;
                                var txCoords = node.textureCoords;
                                if (txCoords) {
                                    var ix = imageWidth;
                                    var iy = imageHeight;
                                    var sx = txCoords.x1 * ix;
                                    var sy = txCoords.y1 * iy;
                                    var sw = (txCoords.x2 - txCoords.x1) * ix;
                                    var sh = (txCoords.y2 - txCoords.y1) * iy;
                                    var flipX = false;
                                    var flipY = false;
                                    if (sw < 0) {
                                        flipX = true;
                                        sx += sw;
                                        sw = Math.abs(sw);
                                    }
                                    if (sh < 0) {
                                        flipY = true;
                                        sy += sh;
                                        sh = Math.abs(sh);
                                    }
                                    if (flipX || flipY) {
                                        this.context.save();
                                        this.context.translate(tx + (flipX ? width : 0), ty + (flipY ? height : 0));
                                        this.context.scale(flipX ? -1 : 1, flipY ? -1 : 1);
                                        this.context.drawImage(image, sx, sy, sw, sh, 0, 0, width, height);
                                        this.context.restore();
                                    } else this.context.drawImage(image, sx, sy, sw, sh, tx, ty, width, height);
                                } else this.context.drawImage(image, tx, ty, width, height);
                                this.context.globalAlpha = 1;
                                return;
                            }
                            if ((node.premultipliedColorTl !== node.premultipliedColorTr || node.premultipliedColorTl !== node.premultipliedColorBr) === true) {
                                var endX = tx;
                                var endY = ty;
                                var endColor;
                                if (node.premultipliedColorTl === node.premultipliedColorTr) {
                                    endX = tx;
                                    endY = ty + height;
                                    endColor = node.premultipliedColorBr;
                                } else {
                                    endX = tx + width;
                                    endY = ty;
                                    endColor = node.premultipliedColorTr;
                                }
                                var startColor = color;
                                var startAlpha = startColor >>> 24 & 255;
                                var endAlpha = endColor >>> 24 & 255;
                                if (startAlpha === 0 && endAlpha > 0) startColor = (startColor & 4278190080 | endColor & 16777215) >>> 0; else if (endAlpha === 0 && startAlpha > 0) endColor = (endColor & 4278190080 | startColor & 16777215) >>> 0;
                                var gradient = this.context.createLinearGradient(tx, ty, endX, endY);
                                gradient.addColorStop(0, normalizeCanvasColor(startColor));
                                gradient.addColorStop(1, normalizeCanvasColor(endColor));
                                this.context.fillStyle = gradient;
                                this.context.fillRect(tx, ty, width, height);
                            } else {
                                this.context.fillStyle = normalizeCanvasColor(color);
                                this.context.fillRect(tx, ty, width, height);
                            }
                        }
                    }, {
                        key: "renderNodeContent",
                        value: function renderNodeContent(node, target) {
                            var texture = node.props.texture;
                            if (node.placeholderActive === true || texture === null) texture = this.stage.defaultTexture;
                            var prev = this.context;
                            this.context = target;
                            this.renderContext(node, texture);
                            this.context = prev;
                        }
                    }, {
                        key: "createShaderNode",
                        value: function createShaderNode(shaderKey, shaderType, props) {
                            return new CanvasShaderNode(shaderKey, shaderType, this.stage, props);
                        }
                    }, {
                        key: "createShaderProgram",
                        value: function createShaderProgram(_shaderConfig) {
                            return null;
                        }
                    }, {
                        key: "supportsShaderType",
                        value: function supportsShaderType(shaderType) {
                            return shaderType.render !== void 0;
                        }
                    }, {
                        key: "createCtxTexture",
                        value: function createCtxTexture(textureSource) {
                            return new CanvasTexture(this.stage.txMemManager, textureSource);
                        }
                    }, {
                        key: "getBufferInfo",
                        value: function getBufferInfo() {
                            return null;
                        }
                    }, {
                        key: "getQuadCount",
                        value: function getQuadCount() {
                            return null;
                        }
                    }, {
                        key: "getRenderOpCount",
                        value: function getRenderOpCount() {
                            return null;
                        }
                    }, {
                        key: "getCapabilities",
                        value: function getCapabilities() {
                            return {
                                renderMode: "canvas",
                                webGlVersion: null,
                                vertexArrayObject: false,
                                maxTextureSize: 0,
                                maxTextureUnits: 0
                            };
                        }
                    }, {
                        key: "checkForOutOfMemory",
                        value: function checkForOutOfMemory() {
                            return false;
                        }
                    }, {
                        key: "updateClearColor",
                        value: function updateClearColor(color) {
                            this.clearColor = normalizeCanvasColor(color);
                            this.clearColorAlpha = color >>> 24 & 255;
                        }
                    }, {
                        key: "getTextureCoords",
                        value: function getTextureCoords(node) {
                            var texture = node.texture;
                            if (texture === null) return;
                            if ((texture.type === TextureType.subTexture ? texture.parentTexture.ctxTexture : texture.ctxTexture) === void 0) return;
                            var textureOptions = node.props.textureOptions;
                            if (texture.type !== TextureType.subTexture && textureOptions === void 0) return {
                                x1: 0,
                                y1: 0,
                                x2: 1,
                                y2: 1
                            };
                            var x1 = 0, y1 = 0, x2 = 1, y2 = 1;
                            if (texture.type === TextureType.subTexture) {
                                var _texture$parentTextur2 = texture.parentTexture.dimensions, parentW = _texture$parentTextur2.w, parentH = _texture$parentTextur2.h;
                                var _texture$props2 = texture.props, x = _texture$props2.x, y = _texture$props2.y, w = _texture$props2.w, h = _texture$props2.h;
                                x1 = x / parentW;
                                y1 = y / parentH;
                                x2 = x1 + w / parentW;
                                y2 = y1 + h / parentH;
                            }
                            if (textureOptions !== void 0 && textureOptions !== null) {
                                var resizeMode = textureOptions.resizeMode;
                                if (resizeMode !== void 0 && resizeMode.type === "cover" && texture.dimensions !== null) {
                                    var dimensions = texture.dimensions;
                                    var _w2 = node.props.w;
                                    var _h2 = node.props.h;
                                    var scaleX = _w2 / dimensions.w;
                                    var scaleY = _h2 / dimensions.h;
                                    var scale = Math.max(scaleX, scaleY);
                                    var precision = 1 / scale;
                                    if (scaleX < scale) {
                                        var _resizeMode$clipX;
                                        var desiredSize = precision * node.props.w;
                                        x1 = (1 - desiredSize / dimensions.w) * clampUnit((_resizeMode$clipX = resizeMode.clipX) !== null && _resizeMode$clipX !== void 0 ? _resizeMode$clipX : .5);
                                        x2 = x1 + desiredSize / dimensions.w;
                                    }
                                    if (scaleY < scale) {
                                        var _resizeMode$clipY;
                                        var _desiredSize2 = precision * node.props.h;
                                        y1 = (1 - _desiredSize2 / dimensions.h) * clampUnit((_resizeMode$clipY = resizeMode.clipY) !== null && _resizeMode$clipY !== void 0 ? _resizeMode$clipY : .5);
                                        y2 = y1 + _desiredSize2 / dimensions.h;
                                    }
                                }
                                if (textureOptions.flipX === true) {
                                    var _ref20 = [ x2, x1 ];
                                    x1 = _ref20[0];
                                    x2 = _ref20[1];
                                }
                                if (textureOptions.flipY === true) {
                                    var _ref21 = [ y2, y1 ];
                                    y1 = _ref21[0];
                                    y2 = _ref21[1];
                                }
                            }
                            return {
                                x1: x1,
                                y1: y1,
                                x2: x2,
                                y2: y2
                            };
                        }
                    }, {
                        key: "updateViewport",
                        value: function updateViewport() {}
                    }, {
                        key: "getDefaultShaderNode",
                        value: function getDefaultShaderNode() {
                            return null;
                        }
                    } ]);
                }(CoreRenderer);
                doOnce = false;
                useAnnouncer = function useAnnouncer(options) {
                    if (doOnce) return Announcer;
                    doOnce = true;
                    Announcer.setupTimers(options);
                    createEffect(on(focusPath, Announcer.onFocusChange, {
                        defer: true
                    }));
                    return Announcer;
                };
                isClient = !false;
                isDev = isClient && !!void 0;
                noop = function noop() {
                    return void 0;
                };
                tryOnCleanup = isDev ? function(fn) {
                    return getOwner() ? onCleanup(fn) : fn;
                } : onCleanup;
                createCallbackStack = function createCallbackStack() {
                    var stack = [];
                    var clear = function clear() {
                        return stack = [];
                    };
                    return {
                        push: function push() {
                            var _stack;
                            return (_stack = stack).push.apply(_stack, arguments);
                        },
                        execute: function execute(arg0, arg1, arg2, arg3) {
                            stack.forEach(function(cb) {
                                return cb(arg0, arg1, arg2, arg3);
                            });
                            clear();
                        },
                        clear: clear
                    };
                };
                PASSIVE = {
                    passive: true
                };
                DEFAULT_MOUSE_POSITION = {
                    x: 0,
                    y: 0,
                    isInside: false,
                    sourceType: null
                };
                useMousePosition = createHydratableSingletonRoot(createMousePosition.bind(void 0, void 0, void 0));
                _createSignal11 = createSignal(false), _createSignal12 = _slicedToArray(_createSignal11, 2), 
                cursorVisible = _createSignal12[0], setCursorVisible = _createSignal12[1];
                handleScroll = throttle(function(e) {
                    var deltaY = e.deltaY;
                    if (deltaY < 0) document.body.dispatchEvent(createKeyboardEvent("ArrowUp", 38)); else if (deltaY > 0) document.body.dispatchEvent(createKeyboardEvent("ArrowDown", 40));
                    clearTimeout(scrollTimeout);
                    scrollTimeout = setTimeout(function() {
                        document.body.dispatchEvent(createKeyboardEvent("ArrowUp", 38, "keyup"));
                        document.body.dispatchEvent(createKeyboardEvent("ArrowDown", 40, "keyup"));
                    }, 250);
                }, 250);
                columnScroll = withScrolling(false);
                rowStyles = {
                    display: "flex",
                    flexWrap: "wrap",
                    transition: {
                        y: true
                    }
                };
                createRouterComponent = function createRouterComponent(router) {
                    return function(props) {
                        var base = props.base;
                        var routeDefs = children(function() {
                            return props.children;
                        });
                        var branches = createMemo(function() {
                            return createBranches(routeDefs(), props.base || "");
                        });
                        var context;
                        var routerState = createRouterContext(router, branches, function() {
                            return context;
                        }, {
                            base: base,
                            singleFlight: props.singleFlight,
                            transformUrl: props.transformUrl
                        });
                        router.create && router.create(routerState);
                        return createComponent(RouterContextObj.Provider, {
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
                };
                createOutlet = function createOutlet(child) {
                    return function() {
                        return createComponent(Show, {
                            get when() {
                                return child();
                            },
                            keyed: true,
                            children: function children(child) {
                                return createComponent(RouteContextObj.Provider, {
                                    value: child,
                                    get children() {
                                        return child.outlet();
                                    }
                                });
                            }
                        });
                    };
                };
                Route = function Route(props) {
                    var childRoutes = children(function() {
                        return props.children;
                    });
                    return mergeProps(props, {
                        get children() {
                            return childRoutes();
                        }
                    });
                };
                SUPPORTS_PROXY = typeof Proxy === "function";
                collectDynamicParams = function collectDynamicParams(branches) {
                    var dynamicParams = [];
                    branches.forEach(function(branch) {
                        branch.routes.forEach(function(route) {
                            if (route.pattern) {
                                var matches = route.pattern.match(/:(\w+)/g);
                                if (matches) matches.forEach(function(param) {
                                    var p = param.slice(1);
                                    if (!dynamicParams.includes(p)) dynamicParams.push(p);
                                });
                            }
                        });
                    });
                    return dynamicParams;
                };
                keepAliveElements = new Map;
                keepAliveRouteElements = new Map;
                _storeKeepAlive = function _storeKeepAlive(map, element) {
                    var existing = map.get(element.id);
                    if (existing) {
                        Object.assign(existing, element);
                        return existing;
                    }
                    map.set(element.id, element);
                    return element;
                };
                storeKeepAlive = function storeKeepAlive(element) {
                    return _storeKeepAlive(keepAliveElements, element);
                };
                storeKeepAliveRoute = function storeKeepAliveRoute(element) {
                    return _storeKeepAlive(keepAliveRouteElements, element);
                };
                createKeepAliveComponent = function createKeepAliveComponent(map, storeFn) {
                    return function(props) {
                        var _props$shouldDispose;
                        var existing = map.get(props.id);
                        var existingChild = existing == null ? void 0 : existing.children;
                        if (existing && (((_props$shouldDispose = props.shouldDispose) == null ? void 0 : _props$shouldDispose.call(props, props.id)) || (existingChild == null ? void 0 : existingChild.destroyed))) {
                            var _existing$dispose;
                            existingChild == null || existingChild.destroy();
                            (_existing$dispose = existing.dispose) == null || _existing$dispose.call(existing);
                            map.delete(props.id);
                            existing = void 0;
                        }
                        if (!existing || !existing.dispose) return createRoot(function(dispose) {
                            var _ref22 = (existing == null ? void 0 : existing.isAlive) && (existing == null ? void 0 : existing.setIsAlive) ? [ existing.isAlive, existing.setIsAlive ] : createSignal(true), _ref23 = _slicedToArray(_ref22, 2), isAlive = _ref23[0], setIsAlive = _ref23[1];
                            var children = wrapChildren(props, setIsAlive);
                            storeFn({
                                id: props.id,
                                owner: getOwner(),
                                children: children,
                                dispose: dispose,
                                isAlive: isAlive,
                                setIsAlive: setIsAlive
                            });
                            return children;
                        }); else if (!existing.children) {
                            var _existing$owner;
                            existing.children = runWithOwner((_existing$owner = existing.owner) !== null && _existing$owner !== void 0 ? _existing$owner : null, function() {
                                return wrapChildren(props, existing.setIsAlive);
                            });
                        }
                        return existing.children;
                    };
                };
                KeepAlive = createKeepAliveComponent(keepAliveElements, storeKeepAlive);
                KeepAliveRouteInternal = createKeepAliveComponent(keepAliveRouteElements, storeKeepAliveRoute);
                keepAliveRouteCache = new Map;
                KeepAliveRoute = function KeepAliveRoute(props) {
                    var key = props.id || props.path;
                    var cached = keepAliveRouteCache.get(key);
                    if (cached) return cached;
                    var getExisting = function getExisting() {
                        var existing = keepAliveRouteElements.get(key);
                        if (!existing) {
                            var _createSignal13 = createSignal(true), _createSignal14 = _slicedToArray(_createSignal13, 2), isAlive = _createSignal14[0], setIsAlive = _createSignal14[1];
                            existing = {
                                id: key,
                                isAlive: isAlive,
                                setIsAlive: setIsAlive
                            };
                            keepAliveRouteElements.set(key, existing);
                        }
                        return existing;
                    };
                    var onRemove = chainFunctions(props.onRemove, function(elm) {
                        var existing = keepAliveRouteElements.get(key);
                        if (existing) existing.savedFocusedElement = activeElement();
                        elm.alpha = 0;
                    });
                    var onRender = chainFunctions(props.onRender, function(elm) {
                        var existing = keepAliveRouteElements.get(key);
                        var savedFocusedElement = existing == null ? void 0 : existing.savedFocusedElement;
                        if (existing) existing.savedFocusedElement = void 0;
                        var isChild = false;
                        var current = savedFocusedElement;
                        while (current) {
                            if (current === elm) {
                                isChild = true;
                                break;
                            }
                            current = current.parent;
                        }
                        if (isChild && savedFocusedElement) savedFocusedElement.setFocus(); else elm.setFocus();
                        elm.alpha = 1;
                    });
                    var preload = props.preload ? function(preloadProps) {
                        var _props$shouldDispose2;
                        var existing = getExisting();
                        var existingChild = existing.children;
                        if (existingChild && (((_props$shouldDispose2 = props.shouldDispose) == null ? void 0 : _props$shouldDispose2.call(props, key)) || existingChild.destroyed)) {
                            var _existing$dispose2;
                            existingChild.destroy();
                            (_existing$dispose2 = existing.dispose) == null || _existing$dispose2.call(existing);
                            keepAliveRouteElements.delete(key);
                            existing = getExisting();
                        }
                        if (!existing.dispose) return createRoot(function(dispose) {
                            existing.owner = getOwner();
                            existing.dispose = dispose;
                            return props.preload(_objectSpread(_objectSpread({}, preloadProps), {}, {
                                isAlive: existing.isAlive
                            }));
                        }); else if (existing.children) {
                            existing.children.setFocus();
                            return props.preload(_objectSpread(_objectSpread({}, preloadProps), {}, {
                                isAlive: existing.isAlive
                            }));
                        } else return props.preload(_objectSpread(_objectSpread({}, preloadProps), {}, {
                            isAlive: existing.isAlive
                        }));
                    } : void 0;
                    var componentWrapper = function componentWrapper(childProps) {
                        var existing = getExisting();
                        var innerProps = Object.create(childProps, {
                            isAlive: {
                                value: existing.isAlive,
                                enumerable: true,
                                configurable: true
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
                    };
                    var routeElement = createComponent(Route, mergeProps$1(props, {
                        preload: preload,
                        component: componentWrapper
                    }));
                    keepAliveRouteCache.set(key, routeElement);
                    return routeElement;
                };
                App = function App(props) {
                    useFocusManager({
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
                    });
                    useMouse(void 0, 100, {
                        customStates: {
                            hoverState: "$hover",
                            pressedState: "$pressed",
                            pressedStateDuration: 150
                        }
                    });
                    return props.children;
                };
                Browse = function Browse(props) {
                    usePreloadRoute();
                    var _createSignal15 = createSignal({}), _createSignal16 = _slicedToArray(_createSignal15, 2), heroContent = _createSignal16[0], setHeroContent = _createSignal16[1];
                    var navigate = useNavigate();
                    var firstRun = true;
                    var vgRef;
                    onCleanup(function() {
                        console.log("cleanup");
                    });
                    var provider = createMemo(function() {
                        return createInfiniteScroll(props.data());
                    });
                    var delayedBackgrounds = debounce(function(img) {
                        return setGlobalBackground(img);
                    }, 800);
                    var delayedHero = debounce(function(content) {
                        return setHeroContent(content || {});
                    }, 600);
                    function updateContentBlock(_index, _col, elm) {
                        if (!elm) return;
                        var item = elm.item || {};
                        if (firstRun) {
                            if (item.backdrop) setGlobalBackground(item.backdrop);
                            if (item.heroContent) setHeroContent(item.heroContent);
                            firstRun = false;
                            return;
                        }
                        if (item.href) {}
                        if (item.backdrop) delayedBackgrounds(item.backdrop);
                        if (item.heroContent) delayedHero(item.heroContent);
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
                        assertTruthy(entity && ((_entity$item = entity.item) == null ? void 0 : _entity$item.href));
                        navigate(entity.item.href);
                        return true;
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
                                forwardFocus: function forwardFocus() {
                                    return vgRef.setFocus();
                                }
                            }), function() {
                                var _el$ = createElement("view");
                                setProp(_el$, "clipping", true);
                                insert(_el$, createComponent(VirtualGrid, {
                                    y: 24,
                                    x: 160,
                                    id: "BrowseGrid",
                                    ref: function ref(r$) {
                                        var _ref$ = vgRef;
                                        typeof _ref$ === "function" ? _ref$(r$) : vgRef = r$;
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
                                    autofocus: true,
                                    get each() {
                                        return provider().pages();
                                    },
                                    children: function children(item) {
                                        return createComponent(Thumbnail, {
                                            get item() {
                                                return item();
                                            }
                                        });
                                    }
                                }));
                                effect(function(_$p) {
                                    return setProp(_el$, "style", styles_default.itemsContainer, _$p);
                                });
                                return _el$;
                            }() ];
                        }
                    });
                };
                TMDB = function TMDB(props) {
                    var _createSignal17 = createSignal({}), _createSignal18 = _slicedToArray(_createSignal17, 2), heroContent = _createSignal18[0], setHeroContent = _createSignal18[1];
                    var _createSignal19 = createSignal(false), _createSignal20 = _slicedToArray(_createSignal19, 2), openPanel = _createSignal20[0], setOpenPanel = _createSignal20[1];
                    var _useFocusStack = useFocusStack(), storeFocus = _useFocusStack.storeFocus, restoreFocus = _useFocusStack.restoreFocus;
                    var contentBlock, solidLogo, firstRun = true;
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
                    return function() {
                        var _el$ = createElement("view"), _el$2 = createElement("view"), _el$3 = createElement("text"), _el$5 = createElement("view"), _el$6 = createElement("view"), _el$7 = createElement("text");
                        insertNode(_el$, _el$2);
                        setProp(_el$, "forwardFocus", 2);
                        setProp(_el$, "autofocus", true);
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
                        }), null);
                        insert(_el$, createComponent(LazyColumn, {
                            y: 500,
                            upCount: 3,
                            get each() {
                                return props.data.rows;
                            },
                            id: "BrowseColumn",
                            onSelectedChanged: onRowChanged,
                            onEnter: function onEnter() {
                                return setOpenPanel(true);
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
                        }), null);
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
                        return _el$;
                    }();
                };
                Destroy = function Destroy(props) {
                    var _createSignal21 = createSignal(), _createSignal22 = _slicedToArray(_createSignal21, 2), heroContent = _createSignal22[0], setHeroContent = _createSignal22[1];
                    var _createSignal23 = createSignal(0), _createSignal24 = _slicedToArray(_createSignal23, 2), heroIndex = _createSignal24[0], setHeroIndex = _createSignal24[1];
                    onMount(function() {
                        return setGlobalBackground(858993663);
                    });
                    createEffect(on([ props.data.heroRow.items, heroIndex ], function(_ref24) {
                        var _ref25 = _slicedToArray(_ref24, 2), heros = _ref25[0], index = _ref25[1];
                        if (heros) setHeroContent(heros[index]);
                        if (heros && index < heros.length - 1) {
                            var img = new Image;
                            img.crossOrigin = "anonymous";
                            img.src = heros[index + 1].backdrop;
                        }
                    }));
                    function onDown() {
                        if (heroIndex() >= 19) return false;
                        setHeroIndex(function(p) {
                            return p + 1;
                        });
                    }
                    function onUp() {
                        if (heroIndex() === 0) return false;
                        setHeroIndex(function(p) {
                            return p - 1;
                        });
                        return true;
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
                        node.alpha = 0;
                        node.y = -100;
                        return node.animate({
                            y: 0,
                            alpha: 1
                        }, {
                            duration: 500,
                            easing: "ease-in-out"
                        }).start().waitUntilStopped();
                    }
                    return function() {
                        var _el$ = createElement("view"), _el$2 = createElement("view");
                        insertNode(_el$, _el$2);
                        setProp(_el$, "x", 300);
                        setProp(_el$, "y", 200);
                        setProp(_el$, "onDown", onDown);
                        setProp(_el$, "onUp", onUp);
                        setProp(_el$2, "src", "assets/up.svg");
                        setProp(_el$2, "width", 350);
                        setProp(_el$2, "height", 200);
                        setProp(_el$2, "x", 450);
                        setProp(_el$2, "y", -200);
                        insert(_el$, createComponent(Show, {
                            get when() {
                                return heroContent();
                            },
                            keyed: true,
                            get children() {
                                return createComponent(Hero, {
                                    id: "Hero",
                                    autofocus: true,
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
                        }), null);
                        effect(function(_$p) {
                            return setProp(_el$2, "rotation", Math.PI, _$p);
                        });
                        return _el$;
                    }();
                };
                handleResults = function handleResults(response) {
                    return response.then(function(_ref26) {
                        var results = _ref26.results;
                        return convertItemsToTiles(results.filter(function(r) {
                            return !r.adult;
                        }));
                    }).catch(function(err) {
                        console.error("[HANDLE_RESULTS_ERROR] error:", err.message, err.stack);
                        throw err;
                    });
                };
                fetchPopular = function fetchPopular(type) {
                    return handleResults(api_default.get("/".concat(type, "/popular")));
                };
                fetchGenreMovies = function fetchGenreMovies(genres) {
                    var genreList = genreListCache || (genreListCache = api_default.get("/genre/movie/list"));
                    var targetGenre = Array.isArray(genres) ? genres : [ genres ];
                    return genreList.then(function(_ref27) {
                        var genres = _ref27.genres;
                        var targetGenreIds = [];
                        genres.forEach(function(item) {
                            if (targetGenre.includes(item.name)) targetGenreIds.push(item.id);
                        });
                        return handleResults(api_default.get("/discover/movie?with_genres=".concat(targetGenreIds.join())));
                    }).catch(function(err) {
                        console.error("[FETCH_GENRE_MOVIES_ERROR] genres:", genres, "error:", err.message, err.stack);
                        throw err;
                    });
                };
                NotFound = function NotFound() {
                    return function() {
                        var _el$ = createElement("node");
                        setProp(_el$, "style", {
                            width: 1920,
                            height: 1080,
                            color: 868483072
                        });
                        return _el$;
                    }();
                };
                fonts_default = [ {
                    type: "msdf",
                    fontFamily: "Roboto",
                    atlasDataUrl: "/fonts/Roboto-Regular.msdf.json",
                    atlasUrl: "/fonts/Roboto-Regular.msdf.png",
                    metrics: {
                        ascender: 1e3,
                        descender: 100,
                        lineGap: 0,
                        unitsPerEm: 1e3
                    }
                }, {
                    type: "msdf",
                    fontFamily: "Roboto700",
                    atlasDataUrl: "/fonts/Roboto-Bold.msdf.json",
                    atlasUrl: "/fonts/Roboto-Bold.msdf.png",
                    metrics: {
                        ascender: 1e3,
                        descender: 100,
                        lineGap: 0,
                        unitsPerEm: 1e3
                    }
                }, {
                    type: "msdf",
                    fontFamily: "Arial",
                    atlasDataUrl: "/fonts/Roboto-Regular.msdf.json",
                    atlasUrl: "/fonts/Roboto-Regular.msdf.png"
                }, {
                    type: "msdf",
                    fontFamily: "Raleway",
                    atlasDataUrl: "/fonts/Raleway-ExtraBold.msdf.json",
                    atlasUrl: "/fonts/Raleway-ExtraBold.msdf.png"
                }, {
                    fontFamily: "Roboto",
                    fontUrl: "/fonts/Roboto-Regular.ttf"
                }, {
                    fontFamily: "Roboto700",
                    fontUrl: "/fonts/Roboto-Bold.ttf"
                } ];
                cache = new Map;
                NavDrawer_styles_default = {
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
                            alpha: true,
                            width: true
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
                };
                NavButtonTextStyles = {
                    x: 112,
                    fontSize: 38,
                    lineHeight: 70,
                    alpha: 0,
                    color: theme_default.textPrimary,
                    $active: {
                        alpha: 1
                    }
                };
                LeftNavWrapper = function LeftNavWrapper(props) {
                    var navigate = useNavigate();
                    var announcer = useAnnouncer();
                    announcer.debug = true;
                    announcer.enabled = false;
                    var navDrawer, lastFocused;
                    setupFPS({
                        renderer: renderer
                    });
                    function focusNavDrawer() {
                        if (navDrawer.states.has("focus")) return false;
                        lastFocused = activeElement();
                        return navDrawer.setFocus();
                    }
                    var _createSignal25 = createSignal(true), _createSignal26 = _slicedToArray(_createSignal25, 2), showWidgets = _createSignal26[0], setShowWidgets = _createSignal26[1];
                    var location = useLocation();
                    var showOnPaths = [ "/browse", "/entity" ];
                    createEffect(function() {
                        var currentPath = location.pathname;
                        var matchesPartial = showOnPaths.some(function(path) {
                            return currentPath.startsWith(path);
                        });
                        if (currentPath === "/") matchesPartial = true;
                        setShowWidgets(matchesPartial);
                    });
                    var _createSignal27 = createSignal("Last key: undefined"), _createSignal28 = _slicedToArray(_createSignal27, 2), lastKey = _createSignal28[0], setLastKey = _createSignal28[1];
                    var _createSignal29 = createSignal(), _createSignal30 = _slicedToArray(_createSignal29, 2), lastError = _createSignal30[0], setLastError = _createSignal30[1];
                    var keyPressHandler = function keyPressHandler(e) {
                        setLastKey("Last key: ".concat(e.key, ", Code: ").concat(e.keyCode));
                    };
                    document.addEventListener("keydown", keyPressHandler);
                    var displayError = function displayError(e) {
                        setLastError(function(p) {
                            return (p || "") + "\n" + e.message;
                        });
                    };
                    document.addEventListener("onerror", displayError);
                    var windowSize = "".concat(window.innerWidth, "x").concat(window.innerHeight);
                    onCleanup(function() {
                        document.removeEventListener("onerror", displayError);
                        document.removeEventListener("keydown", keyPressHandler);
                    });
                    var pageContainer;
                    return function() {
                        var _el$ = createElement("view"), _el$2 = createElement("view"), _el$3 = createElement("text"), _el$4 = createTextNode("Window Size: "), _el$5 = createElement("text"), _el$6 = createElement("text"), _el$7 = createElement("view");
                        insertNode(_el$, _el$2);
                        insertNode(_el$, _el$6);
                        insertNode(_el$, _el$7);
                        var _ref$ = window.APP;
                        typeof _ref$ === "function" ? use(_ref$, _el$) : window.APP = _el$;
                        setProp(_el$, "onAnnouncer", function() {
                            announcer.enabled = !announcer.enabled;
                            return true;
                        });
                        setProp(_el$, "onLast", function() {
                            history.back();
                            return true;
                        });
                        setProp(_el$, "onMenu", function() {
                            navigate("/");
                            return true;
                        });
                        setProp(_el$, "onBack", function() {
                            if (navDrawer.states.has("focus")) navigate(-1); else focusNavDrawer();
                            return true;
                        });
                        setProp(_el$, "style", {
                            width: 1920,
                            height: 1080
                        });
                        setProp(_el$, "onLeft", function() {
                            focusNavDrawer();
                            return true;
                        });
                        setProp(_el$, "onRight", function() {
                            if (navDrawer.states.has("focus")) {
                                (lastFocused || pageContainer).setFocus();
                                return true;
                            }
                        });
                        insert(_el$, createComponent(Background, {}), _el$2);
                        insert(_el$, createComponent(FPSCounter, {
                            mountX: 1,
                            x: 1910,
                            y: 10,
                            alpha: 1
                        }), _el$2);
                        insertNode(_el$2, _el$3);
                        insertNode(_el$2, _el$5);
                        setProp(_el$2, "mountX", 1);
                        setProp(_el$2, "display", "flex");
                        setProp(_el$2, "flexDirection", "column");
                        setProp(_el$2, "width", 330);
                        setProp(_el$2, "height", 50);
                        setProp(_el$2, "x", 1910);
                        setProp(_el$2, "y", 212);
                        setProp(_el$2, "color", 255);
                        insertNode(_el$3, _el$4);
                        setProp(_el$3, "x", 8);
                        setProp(_el$3, "fontSize", 15);
                        insert(_el$3, windowSize, null);
                        setProp(_el$5, "x", 8);
                        setProp(_el$5, "fontSize", 15);
                        insert(_el$5, lastKey);
                        setProp(_el$6, "x", 270);
                        setProp(_el$6, "y", 20);
                        setProp(_el$6, "fontSize", 24);
                        setProp(_el$6, "contain", "width");
                        setProp(_el$6, "width", 800);
                        insert(_el$6, lastError);
                        insert(_el$, createComponent(NavDrawer, {
                            ref: function ref(r$) {
                                var _ref$2 = navDrawer;
                                typeof _ref$2 === "function" ? _ref$2(r$) : navDrawer = r$;
                            },
                            focusPage: function focusPage() {
                                return lastFocused.setFocus();
                            },
                            get showWidgets() {
                                return showWidgets();
                            }
                        }), _el$7);
                        var _ref$3 = pageContainer;
                        typeof _ref$3 === "function" ? use(_ref$3, _el$7) : pageContainer = _el$7;
                        setProp(_el$7, "id", "pageContainer");
                        setProp(_el$7, "forwardFocus", 0);
                        insert(_el$7, function() {
                            return props.children;
                        });
                        effect(function(_$p) {
                            return setProp(_el$2, "hidden", !showWidgets(), _$p);
                        });
                        return _el$;
                    }();
                };
                scriptRel = "modulepreload";
                assetsURL = function assetsURL(dep) {
                    return "/" + dep;
                };
                seen = {};
                __vitePreload = function preload(baseModule, deps, importerUrl) {
                    var promise = Promise.resolve();
                    if (false && deps && deps.length > 0) {
                        var allSettled = function allSettled(promises) {
                            return Promise.all(promises.map(function(p) {
                                return Promise.resolve(p).then(function(value) {
                                    return {
                                        status: "fulfilled",
                                        value: value
                                    };
                                }, function(reason) {
                                    return {
                                        status: "rejected",
                                        reason: reason
                                    };
                                });
                            }));
                        };
                        var importMetaResolve = function importMetaResolve(specifier) {
                            if (_context.meta.resolve) return _context.meta.resolve(specifier);
                            return new URL(specifier, _context.meta.url).href;
                        };
                        var links = document.getElementsByTagName("link");
                        var cspNonceMeta = document.querySelector("meta[property=csp-nonce]");
                        var cspNonce = (cspNonceMeta == null ? void 0 : cspNonceMeta.nonce) || (cspNonceMeta == null ? void 0 : cspNonceMeta.getAttribute("nonce"));
                        promise = allSettled(deps.map(function(dep) {
                            dep = assetsURL(dep, importerUrl);
                            dep = importMetaResolve(dep);
                            if (dep in seen) return;
                            seen[dep] = true;
                            var isCss = dep.endsWith(".css");
                            for (var i = links.length - 1; i >= 0; i--) {
                                var _link = links[i];
                                if (_link.href === dep && (!isCss || _link.rel === "stylesheet")) return;
                            }
                            var link = document.createElement("link");
                            link.rel = isCss ? "stylesheet" : scriptRel;
                            if (!isCss) link.as = "script";
                            link.crossOrigin = "";
                            link.href = dep;
                            if (cspNonce) link.setAttribute("nonce", cspNonce);
                            document.head.appendChild(link);
                            if (isCss) return new Promise(function(res, rej) {
                                link.addEventListener("load", res);
                                link.addEventListener("error", function() {
                                    return rej(new Error("Unable to preload CSS for ".concat(dep)));
                                });
                            });
                        }));
                    }
                    function handlePreloadError(err) {
                        var e = new Event("vite:preloadError", {
                            cancelable: true
                        });
                        e.payload = err;
                        window.dispatchEvent(e);
                        if (!e.defaultPrevented) throw err;
                    }
                    return promise.then(function(res) {
                        var _iterator8 = _createForOfIteratorHelper(res || []), _step8;
                        try {
                            for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
                                var item = _step8.value;
                                if (item.status !== "rejected") continue;
                                handlePreloadError(item.reason);
                            }
                        } catch (err) {
                            _iterator8.e(err);
                        } finally {
                            _iterator8.f();
                        }
                        return baseModule().catch(handlePreloadError);
                    });
                };
                (function() {
                    var originalGetOwnPropertyNames = Object.getOwnPropertyNames;
                    Object.getOwnPropertyNames = function(obj) {
                        var names = originalGetOwnPropertyNames(obj);
                        if (obj && (typeof obj === "function" || Object.prototype.toString.call(obj) === "[object Arguments]")) return names.filter(function(name) {
                            return name !== "caller" && name !== "callee" && name !== "arguments";
                        });
                        return names;
                    };
                })();
                window.bundleType = true ? "LEGACY (nomodule)" : "MODERN (module)";
                console.log("[bundle] Loaded ".concat(window.bundleType, " build"));
                Player = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Player-legacy-C8KCyO4F.js");
                    }, void 0);
                });
                Grid = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Grid-legacy-CQe0qlSw.js");
                    }, void 0);
                });
                Loops = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Loops-legacy-TxUlUQAp.js");
                    }, void 0);
                });
                Infinite = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Infinite-legacy-C7FjA0Zg.js");
                    }, void 0);
                });
                TMDBGrid = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./TMDBGrid-legacy-Cqkra_NH.js");
                    }, void 0);
                });
                Portal = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Portal-legacy-Dd-AEfZw.js");
                    }, void 0);
                });
                MatrixPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Matrix-legacy-CldyCXut.js");
                    }, void 0);
                });
                TextPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Text-legacy-qFAzFO_d.js");
                    }, void 0);
                });
                TextPosterPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./TextPoster-legacy-DKV7Lsqx.js");
                    }, void 0);
                });
                CreatePage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Create-legacy-DZ5ag9fo.js");
                    }, void 0);
                });
                ViewportPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Viewport-legacy-CuGMqsXX.js");
                    }, void 0);
                });
                PositioningPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Positioning-legacy-DjV5uIA7.js");
                    }, void 0);
                });
                LayoutPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Layout-legacy-0X8dEHeZ.js");
                    }, void 0);
                });
                FocusBasicsPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./FocusBasics-legacy-roYkzfu3.js");
                    }, void 0);
                });
                KeyHandlingPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./KeyHandling-legacy-zGFEVUj1.js");
                    }, void 0);
                });
                TransitionsPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Transitions-legacy-D1rO2UGI.js");
                    }, void 0);
                });
                ComponentsPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Components-legacy-DQE1FbDn.js");
                    }, void 0);
                });
                FocusHandlingPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./FocusHandling-legacy-CTKWiQnG.js");
                    }, void 0);
                });
                GradientsPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Gradients-legacy-BXJJMNBw.js");
                    }, void 0);
                });
                FlexPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Flex-legacy-D0uRI1DE.js");
                    }, void 0);
                });
                FlexGrowPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./FlexGrow-legacy-BdEfJ69j.js");
                    }, void 0);
                });
                FlexMenuPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./FlexMenu-legacy-CSilQdB8.js");
                    }, void 0);
                });
                FlexSizePage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./FlexSize-legacy-CAGpx9Or.js");
                    }, void 0);
                });
                FlexColumnSizePage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./FlexColumnSize-legacy-CRCboWd2.js");
                    }, void 0);
                });
                FlexColumnPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./FlexColumn-legacy-BbX1L1vp.js");
                    }, void 0);
                });
                ButtonsMaterialPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./ButtonsMaterial-legacy-BlLWQ5nu.js");
                    }, void 0);
                });
                SuperFlexPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./SuperFlex-legacy-DiXe4epM.js");
                    }, void 0);
                });
                Entity = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Entity-legacy-BMOvpahJ.js");
                    }, void 0);
                });
                People = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./People-legacy-Dshby-W9.js");
                    }, void 0);
                });
                FireboltPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Firebolt-legacy-WUQ5C0SL.js");
                    }, void 0);
                });
                LoginPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Login-legacy-D8HJfXpg.js");
                    }, void 0);
                });
                VirtualPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Virtual-legacy-UswkvqhP.js");
                    }, void 0);
                });
                TagsPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Tags-legacy-BTYWXLwc.js");
                    }, void 0);
                });
                ImagePerformance = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./ImagePerformance-legacy-RmyG3a8U.js");
                    }, void 0);
                });
                LargeImagePerformance = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./LargeImagePerformance-legacy-CwpdTh81.js");
                    }, void 0);
                });
                MixedImagePerformance = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./MixedImagePerformance-legacy-BXbSjeO0.js");
                    }, void 0);
                });
                TextureCompressionPerformance = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./TextureCompressionPerformance-legacy-ausP9osC.js");
                    }, void 0);
                });
                ComplexFlexPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./ComplexFlex-legacy-CPAVvAdL.js");
                    }, void 0);
                });
                ComplexFlexCapsPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./ComplexFlexCaps-legacy-BEMgeQEZ.js");
                    }, void 0);
                });
                BenchmarkPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Benchmark-legacy-B_qCkbsG.js");
                    }, void 0);
                });
                RendererVersionsPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./RendererVersions-legacy-C_-jGRAg.js");
                    }, void 0);
                });
                TextCenteringPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./TextCentering-legacy-CL0MTqjq.js");
                    }, void 0);
                });
                CountdownTimerPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./CountdownTimer-legacy-DivlCPpY.js");
                    }, void 0);
                });
                CustomButtonsPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./CustomButtons-legacy-DX1fLoO4.js");
                    }, void 0);
                });
                numImageWorkers = typeof window !== "undefined" && window.createImageBitmap ? 1 : 0;
                urlParams = new URLSearchParams(window.location.search);
                numWorkers = urlParams.get("numImageWorkers");
                screenSize = urlParams.get("size") || "default";
                rendererMode = urlParams.get("mode") || "webgl";
                animationsEnabled = urlParams.get("animate") || "true";
                enableContextSpy = urlParams.get("contextSpy") === "true";
                forceWebGL2 = urlParams.get("webgl2") === "true";
                textBaseline = urlParams.get("textBaseline");
                if (numWorkers) numImageWorkers = parseInt(numWorkers);
                devicePhysicalPixelRatio = {
                    low: .666667,
                    medium: .8,
                    high: 1,
                    xhigh: 1.5,
                    ultra: 2,
                    default: window.devicePixelRatio || 1
                }[screenSize];
                Config.debug = false;
                Config.animationsEnabled = animationsEnabled === "true";
                Config.fontSettings.fontFamily = "Roboto";
                Config.fontSettings.color = theme_default.textPrimary;
                Config.fontSettings.fontSize = 32;
                Config.domRendererEnabled = false;
                Config.focusHistoryDebug = 5;
                textureProcessingTimeLimitParam = urlParams.get("textureProcessingTimeLimit");
                Config.rendererOptions = {
                    fpsUpdateInterval: 300,
                    inspector: void 0,
                    textureMemory: {
                        criticalThreshold: 2e8,
                        targetThresholdLevel: .8
                    },
                    textureProcessingTimeLimit: textureProcessingTimeLimitParam ? parseFloat(textureProcessingTimeLimitParam) : 4,
                    numImageWorkers: numImageWorkers,
                    imageDecodeConcurrency: typeof window !== "undefined" && window.createImageBitmap ? 4 : 2,
                    deviceLogicalPixelRatio: window.innerHeight / 1080,
                    devicePhysicalPixelRatio: devicePhysicalPixelRatio !== null && devicePhysicalPixelRatio !== void 0 ? devicePhysicalPixelRatio : 1,
                    createImageBitmapSupport: "auto",
                    boundsMargin: 100,
                    targetFPS: 0,
                    enableClear: true,
                    enableContextSpy: enableContextSpy,
                    forceWebGL2: forceWebGL2
                };
                if (textBaseline) Config.rendererOptions.textBaselineMode = textBaseline;
                if (rendererMode === "canvas") {
                    Config.rendererOptions.fontEngines = [ CanvasTextRenderer ];
                    Config.rendererOptions.renderEngine = CanvasRenderer;
                } else {
                    Config.rendererOptions.fontEngines = [ SdfTextRenderer ];
                    Config.rendererOptions.renderEngine = WebGlRenderer;
                }
                requestAnimationFrame(function() {
                    setTimeout(function() {
                        var _createRenderer = createRenderer(), renderer = _createRenderer.renderer, render = _createRenderer.render;
                        var idleFired = false;
                        renderer.on("idle", function() {
                            if (!idleFired) {
                                idleFired = true;
                                var splash = document.getElementById("splash");
                                if (splash) {
                                    splash.classList.add("fade-out");
                                    setTimeout(function() {
                                        splash.remove();
                                    }, 500);
                                }
                            }
                        });
                        loadFonts(fonts_default);
                        var shManager = renderer.stage.shManager;
                        shManager.registerShaderType("rounded", Rounded);
                        shManager.registerShaderType("roundedWithBorder", RoundedWithBorder);
                        shManager.registerShaderType("roundedWithShadow", RoundedWithShadow);
                        shManager.registerShaderType("roundedWithBorderWithShadow", RoundedWithBorderAndShadow);
                        shManager.registerShaderType("radialGradient", RadialGradient);
                        shManager.registerShaderType("linearGradient", LinearGradient);
                        shManager.registerShaderType("holePunch", HolePunch);
                        shManager.registerShaderType("radialProgress", RadialProgress);
                        render(function() {
                            return createComponent(FocusStackProvider, {
                                get children() {
                                    return createComponent(HashRouter, {
                                        root: function root(props) {
                                            return createComponent(App, props);
                                        },
                                        get children() {
                                            return [ createComponent(Route, {
                                                path: "",
                                                component: LeftNavWrapper,
                                                get children() {
                                                    return [ createComponent(Route, {
                                                        path: "",
                                                        component: function component() {
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
                                                                    return _context.import("./Nested-legacy-BSTrC4nT.js");
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
                                                                    return _context.import("./KeepAlive-legacy-BbOnGr3s.js");
                                                                }, void 0);
                                                            });
                                                        }
                                                    }), createComponent(Route, {
                                                        path: "suspense",
                                                        get component() {
                                                            return lazy(function() {
                                                                return __vitePreload(function() {
                                                                    return _context.import("./suspense-legacy-DYV8cCsQ.js");
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
})();
//# sourceMappingURL=index-legacy-BrjLc_rT.js.map