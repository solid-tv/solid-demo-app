(function() {
    function _superPropGet(t, o, e, r) {
        var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e);
        return 2 & r && "function" == typeof p ? function(t) {
            return p.apply(e, t);
        } : p;
    }
    function _get() {
        return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, t, r) {
            var p = _superPropBase(e, t);
            if (p) {
                var n = Object.getOwnPropertyDescriptor(p, t);
                return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
            }
        }, _get.apply(null, arguments);
    }
    function _superPropBase(t, o) {
        for (;!{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t)); ) ;
        return t;
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
    System.register([ "./render-legacy-D7c8BTw7.js", "./utils-legacy-CzRdMI-Y.js", "./announcer-legacy-B4Af2Msd.js", "./web-legacy-Dt_TNc5h.js", "./Lazy-legacy-DmXT6R7o.js", "./chainFunctions-legacy-BzIdGfsv.js", "./Column-legacy-rnCxnZWI.js", "./FPSCounter-legacy-DpuOJRuc.js", "./ContentBlock-legacy-CBQFqvPZ.js", "./createFocusStack-legacy-BmIgmksf.js", "./components-legacy-CaYNBwMX.js", "./Icon-legacy-IMHkW0Gv.js", "./routing-legacy-CiZuoxoa.js", "./theme-legacy-CRa-Zkyx.js", "./styles-legacy-Bdc4KjXs.js", "./state-legacy-BYRVvbYV.js", "./dist-legacy-YpbyZRo3.js", "./api-legacy-CQ6iaaWY.js", "./ItemFormatter-legacy-WWdSuIiP.js" ], function(_export, _context) {
        "use strict";
        var onCleanup, createComputed, hasFocus, isFunction, createResource, createEffect, createSignal, createRoot, batch, Config, Show, on, children, renderer$1, createMemo, getOwner, getListener, mergeProps$1, use, assertTruthy, createElement, untrack, useFocusManager, effect, CoreShaderNode, memo, CoreNodeRenderState, onMount, mergeProps, UpdateType, spread, TextureType, setProp, getNormalizedRgbaComponents, createComponent, activeElement, insert, RenderTexture, compareRect, runWithOwner, createRenderer, rootNode, calcFactoredRadiusArray, sharedConfig, createTextNode, BufferCollection, insertNode, SubTexture, ElementNode, isElementNode, loadFonts, focusPath, combineStyles, clamp, createScheduled, throttle, Announcer, voidFn, LazyRow, LazyColumn, withScrolling, navigableForwardFocus, navigableHandleNavigation, chainRefs, chainFunctions, Column, setupFPS, FPSCounter, ContentBlock, useFocusStack, FocusStackProvider, Hero, Thumbnail, List, AssetPanel, TitleRow, Icon, saveCurrentDepth, createRouterContext, setInPreloadFn, useNavigate, notifyIfNotBlocked, keepDepth, createRouteContext, useLocation, createBeforeLeave, RouterContextObj, getIntent, usePreloadRoute, createBranches, getRouteMatches, RouteContextObj, useMatch, theme_default, styles_default, setGlobalBackground, globalBackground, debounce, getImageUrl, api_default, convertItemsToTiles, __vite_style__, __create, __defProp, __getOwnPropDesc, __getOwnPropNames, __getProtoOf, __hasOwnProp, __commonJSMin, __exportAll, __copyProps, __toESM, CoreContextTexture, CoreRenderer, validateArrayLength4, BorderTemplate, HolePunchTemplate, RoundedTemplate, ShadowTemplate, LinearGradientTemplate, RadialGradientTemplate, Default, WebGlShaderNode, WebGlShaderProgram, Rounded, props$2, RoundedWithBorderTemplate, RoundedWithBorder, props$1, RoundedWithBorderAndShadowTemplate, RoundedWithBorderAndShadow, props, RoundedWithShadowTemplate, Shadow, RoundedWithShadow, HolePunch, LinearGradient, RadialGradient, invisibleChars, spaceRegex, defaultFontMetrics, normalizeFontMetrics, mapTextLayout, measureLines, wrapText, wrapLine, getWrapStrategy, overflow, breakWord, breakAll, truncateLineEnd, truncateWord, splitWord, SdfFontHandler_exports, fontCache$1, fontLoadPromises$1, normalizedMetrics$1, nodesWaitingForFont$1, initialized$1, buildKerningTable, buildGlyphMap, processFontData$1, canRenderFont$1, loadFont$1, waitingForFont$1, stopWaitingForFont$1, getFontFamilies$1, init$3, type$3, isFontLoaded$1, getFontMetrics$1, processFontMetrics$1, _getGlyph, _getKerning, _getAtlas, _getFontData, _getMaxCharHeight, _getLoadedFonts, _unloadFont, measureText$1, TRANSPARENT_TEXTURE_DATA, WebGlCtxTexture, WebGlCtxSubTexture, WebGlCtxRenderTexture, StencilClip, StencilClipRenderOp, WebGlRenderer, IDENTITY_MATRIX_3x3, SdfPlain, Sdf, CC_LBRACKET, CC_SLASH, CC_ZERO, CC_LC_X, CC_UC_X, CC_EQUALS, TAG_BOLD, TAG_ITALIC, TAG_UNDERLINE, TAG_STRIKETHROUGH, TAG_COLOR, MAX_SPANS, MAX_STACK, namedColors, RichSpan, ParseResult, StyleFrame, _stack, hexDigitVal, parseColorValue, identifyTag, applyTag, flushSpan, stylesEqual, parseRichText, FLOATS_PER_VERTEX_PLAIN, FLOATS_PER_VERTEX_RICH, VERTICES_PER_GLYPH, FLOATS_PER_QUAD_PLAIN, FLOATS_PER_QUAD_RICH, ITALIC_SHEAR, _PACKED_WHITE, _richTextResult$1, type$2, sdfShader, sdfPlainShader, renderer, init$2, font$1, renderInfoCache$1, _packColor, renderText$1, renderQuads$1, _writeDecoQuad, generateTextLayout, clearCache$1, SdfTextRenderer, CanvasFontHandler_exports, fontFamilies, fontLoadPromises, normalizedMetrics, nodesWaitingForFont, fontCache, initialized, measureContext$1, _canRenderFont, processFontData, _loadFont, _getFontFamilies, init$1, type$1, _isFontLoaded, _waitingForFont, _stopWaitingForFont, _getFontMetrics, _processFontMetrics, _measureText, WHITE, parsedArgbColors, parsedRgbaColors, type, font, canvas, context, measureCanvas, measureContext, renderInfoCache, _richTextResult, init, renderText, clearCache, renderQuads, CanvasTextRenderer, CanvasTexture, CanvasShaderNode, CanvasRenderer, doOnce, useAnnouncer, isClient, isDev, noop, tryOnCleanup, createCallbackStack, PASSIVE, DEFAULT_MOUSE_POSITION, useMousePosition, scrollTimeout, handleScroll, columnScroll, rowStyles, createRouterComponent, createOutlet, Route, SUPPORTS_PROXY, collectDynamicParams, keepAliveElements, keepAliveRouteElements, _storeKeepAlive, storeKeepAlive, storeKeepAliveRoute, createKeepAliveComponent, KeepAlive, KeepAliveRouteInternal, keepAliveRouteCache, KeepAliveRoute, App, Browse, TMDB, Destroy, handleResults, fetchPopular, genreListCache, fetchGenreMovies, NotFound, fonts_default, cache, NavDrawer_styles_default, NavButtonTextStyles, LeftNavWrapper, scriptRel, assetsURL, seen, __vitePreload, Player, Grid, Loops, Infinite, TMDBGrid, Portal, MatrixPage, TextPage, TextPosterPage, CreatePage, ViewportPage, PositioningPage, LayoutPage, FocusBasicsPage, KeyHandlingPage, TransitionsPage, ComponentsPage, FocusHandlingPage, GradientsPage, FlexPage, FlexGrowPage, FlexMenuPage, FlexSizePage, FlexColumnSizePage, FlexColumnPage, ButtonsMaterialPage, SuperFlexPage, Entity, People, FireboltPage, LoginPage, VirtualPage, TagsPage, ImagePerformance, LargeImagePerformance, MixedImagePerformance, TextureCompressionPerformance, ComplexFlexPage, ComplexFlexCapsPage, BenchmarkPage, RendererVersionsPage, TextCenteringPage, CountdownTimerPage, CustomButtonsPage, numImageWorkers, urlParams, numWorkers, screenSize, rendererMode, animationsEnabled, enableContextSpy, forceWebGL2, textBaseline, devicePhysicalPixelRatio, textureProcessingTimeLimitParam;
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
                default: 0,
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
                default: [ 0, 0, 5, 5 ]
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
                default: 10,
                set: function set(value, props) {
                    props[projection][2] = value;
                },
                get: function get(props) {
                    return props[projection][2];
                }
            }), pf + "spread", {
                default: 10,
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
        function hasZeroWidthSpace(space) {
            return invisibleChars.test(space) === true;
        }
        function getLayoutCacheKey(props) {
            return "".concat(props.text, "-").concat(props.fontFamily, "-").concat(props.fontSize, "-").concat(props.letterSpacing, "-").concat(props.lineHeight, "-").concat(props.maxHeight, "-").concat(props.maxWidth, "-").concat(props.textAlign, "-").concat(props.wordBreak, "-").concat(props.maxLines, "-").concat(props.overflowSuffix, "-").concat(props.richText);
        }
        function getWebGlParameters(glw) {
            var params = {
                MAX_RENDERBUFFER_SIZE: 0,
                MAX_TEXTURE_SIZE: 0,
                MAX_VIEWPORT_DIMS: 0,
                MAX_VERTEX_TEXTURE_IMAGE_UNITS: 0,
                MAX_TEXTURE_IMAGE_UNITS: 0,
                MAX_COMBINED_TEXTURE_IMAGE_UNITS: 0,
                MAX_VERTEX_ATTRIBS: 0,
                MAX_VARYING_VECTORS: 0,
                MAX_VERTEX_UNIFORM_VECTORS: 0,
                MAX_FRAGMENT_UNIFORM_VECTORS: 0
            };
            Object.keys(params).forEach(function(key) {
                params[key] = glw.getParameter(glw[key]);
            });
            return params;
        }
        function getWebGlExtensions(glw) {
            var extensions = {
                ANGLE_instanced_arrays: null,
                WEBGL_compressed_texture_s3tc: null,
                WEBGL_compressed_texture_astc: null,
                WEBGL_compressed_texture_etc: null,
                WEBGL_compressed_texture_etc1: null,
                WEBGL_compressed_texture_pvrtc: null,
                WEBKIT_WEBGL_compressed_texture_pvrtc: null,
                WEBGL_compressed_texture_s3tc_srgb: null,
                OES_vertex_array_object: null
            };
            Object.keys(extensions).forEach(function(key) {
                extensions[key] = glw.getExtension(key);
            });
            return extensions;
        }
        function createIndexBuffer(glw, size) {
            var maxQuads = ~~(size / 80);
            var indices = new Uint16Array(maxQuads * 6);
            for (var i = 0, j = 0; i < maxQuads; i += 6, j += 4) {
                indices[i] = j;
                indices[i + 1] = j + 1;
                indices[i + 2] = j + 2;
                indices[i + 3] = j + 2;
                indices[i + 4] = j + 1;
                indices[i + 5] = j + 3;
            }
            var buffer = glw.createBuffer();
            glw.elementArrayBufferData(buffer, indices, glw.STATIC_DRAW);
        }
        function isHTMLImageElement(obj) {
            return obj !== null && (_typeof(obj) === "object" && obj.constructor && obj.constructor.name === "HTMLImageElement" || typeof Image !== "undefined" && obj instanceof Image);
        }
        function _calculateFontMetrics(fontFamily) {
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
            var a = (abgr >>> 24 & 255) / 255;
            var b = abgr >>> 16 & 255;
            var g = abgr >>> 8 & 255;
            return {
                isWhite: false,
                a: a,
                r: abgr & 255,
                g: g,
                b: b
            };
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
            return new KeyboardEvent(eventName, {
                key: key,
                keyCode: keyCode,
                which: keyCode,
                ctrlKey: false,
                altKey: false,
                shiftKey: false,
                metaKey: false,
                bubbles: true
            });
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
                if (isFunction(parent.onMouseClick) && testCollision(px, py, parent.lng.absX || 0, parent.lng.absY || 0, parent.width || 0, parent.height || 0)) return parent;
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
            } else if (isFunction(clickedElement.onEnter)) {
                clickedElement.onEnter();
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
                spread(_el$, mergeProps(props, {
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
                spread(_el$, mergeProps(props, {
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
                spread(_el$, mergeProps(props, {
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
            }(), createComponent(Column, mergeProps(props, {
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
                onCleanup = _renderLegacy001Js.$;
                createComputed = _renderLegacy001Js.B;
                hasFocus = _renderLegacy001Js.C;
                isFunction = _renderLegacy001Js.E;
                createResource = _renderLegacy001Js.G;
                createEffect = _renderLegacy001Js.H;
                createSignal = _renderLegacy001Js.J;
                createRoot = _renderLegacy001Js.K;
                batch = _renderLegacy001Js.L;
                Config = _renderLegacy001Js.O;
                Show = _renderLegacy001Js.P;
                on = _renderLegacy001Js.Q;
                children = _renderLegacy001Js.R;
                renderer$1 = _renderLegacy001Js.S;
                createMemo = _renderLegacy001Js.U;
                getOwner = _renderLegacy001Js.X;
                getListener = _renderLegacy001Js.Y;
                mergeProps$1 = _renderLegacy001Js.Z;
                use = _renderLegacy001Js._;
                assertTruthy = _renderLegacy001Js._t;
                createElement = _renderLegacy001Js.a;
                untrack = _renderLegacy001Js.at;
                useFocusManager = _renderLegacy001Js.b;
                effect = _renderLegacy001Js.c;
                CoreShaderNode = _renderLegacy001Js.ct;
                memo = _renderLegacy001Js.d;
                CoreNodeRenderState = _renderLegacy001Js.dt;
                onMount = _renderLegacy001Js.et;
                mergeProps = _renderLegacy001Js.f;
                UpdateType = _renderLegacy001Js.ft;
                spread = _renderLegacy001Js.g;
                TextureType = _renderLegacy001Js.gt;
                setProp = _renderLegacy001Js.h;
                getNormalizedRgbaComponents = _renderLegacy001Js.ht;
                createComponent = _renderLegacy001Js.i;
                activeElement = _renderLegacy001Js.k;
                insert = _renderLegacy001Js.l;
                RenderTexture = _renderLegacy001Js.lt;
                compareRect = _renderLegacy001Js.mt;
                runWithOwner = _renderLegacy001Js.nt;
                createRenderer = _renderLegacy001Js.o;
                rootNode = _renderLegacy001Js.p;
                calcFactoredRadiusArray = _renderLegacy001Js.pt;
                sharedConfig = _renderLegacy001Js.rt;
                createTextNode = _renderLegacy001Js.s;
                BufferCollection = _renderLegacy001Js.st;
                insertNode = _renderLegacy001Js.u;
                SubTexture = _renderLegacy001Js.ut;
                ElementNode = _renderLegacy001Js.v;
                isElementNode = _renderLegacy001Js.w;
                loadFonts = _renderLegacy001Js.x;
                focusPath = _renderLegacy001Js.y;
            }, function(_utilsLegacy002Js) {
                combineStyles = _utilsLegacy002Js.n;
                clamp = _utilsLegacy002Js.t;
            }, function(_announcerLegacy003Js) {
                createScheduled = _announcerLegacy003Js.n;
                throttle = _announcerLegacy003Js.r;
                Announcer = _announcerLegacy003Js.t;
            }, function(_webLegacy004Js) {
                voidFn = _webLegacy004Js.t;
            }, function(_LazyLegacy005Js) {
                LazyRow = _LazyLegacy005Js.n;
                LazyColumn = _LazyLegacy005Js.t;
            }, function(_chainFunctionsLegacy006Js) {
                withScrolling = _chainFunctionsLegacy006Js.a;
                navigableForwardFocus = _chainFunctionsLegacy006Js.d;
                navigableHandleNavigation = _chainFunctionsLegacy006Js.f;
                chainRefs = _chainFunctionsLegacy006Js.n;
                chainFunctions = _chainFunctionsLegacy006Js.t;
            }, function(_ColumnLegacy007Js) {
                Column = _ColumnLegacy007Js.t;
            }, function(_FPSCounterLegacy009Js) {
                setupFPS = _FPSCounterLegacy009Js.r;
                FPSCounter = _FPSCounterLegacy009Js.t;
            }, function(_ContentBlockLegacy00aJs) {
                ContentBlock = _ContentBlockLegacy00aJs.t;
            }, function(_createFocusStackLegacy00bJs) {
                useFocusStack = _createFocusStackLegacy00bJs.n;
                FocusStackProvider = _createFocusStackLegacy00bJs.t;
            }, function(_componentsLegacy00cJs) {
                Hero = _componentsLegacy00cJs.a;
                Thumbnail = _componentsLegacy00cJs.c;
                List = _componentsLegacy00cJs.d;
                AssetPanel = _componentsLegacy00cJs.t;
                TitleRow = _componentsLegacy00cJs.u;
            }, function(_IconLegacy00dJs) {
                Icon = _IconLegacy00dJs.t;
            }, function(_routingLegacy00eJs) {
                saveCurrentDepth = _routingLegacy00eJs._;
                createRouterContext = _routingLegacy00eJs.a;
                setInPreloadFn = _routingLegacy00eJs.c;
                useNavigate = _routingLegacy00eJs.d;
                notifyIfNotBlocked = _routingLegacy00eJs.g;
                keepDepth = _routingLegacy00eJs.h;
                createRouteContext = _routingLegacy00eJs.i;
                useLocation = _routingLegacy00eJs.l;
                createBeforeLeave = _routingLegacy00eJs.m;
                RouterContextObj = _routingLegacy00eJs.n;
                getIntent = _routingLegacy00eJs.o;
                usePreloadRoute = _routingLegacy00eJs.p;
                createBranches = _routingLegacy00eJs.r;
                getRouteMatches = _routingLegacy00eJs.s;
                RouteContextObj = _routingLegacy00eJs.t;
                useMatch = _routingLegacy00eJs.u;
            }, function(_themeLegacy00fJs) {
                theme_default = _themeLegacy00fJs.t;
            }, function(_stylesLegacy00gJs) {
                styles_default = _stylesLegacy00gJs.r;
            }, function(_stateLegacy00hJs) {
                setGlobalBackground = _stateLegacy00hJs.n;
                globalBackground = _stateLegacy00hJs.t;
            }, function(_distLegacy00iJs) {
                debounce = _distLegacy00iJs.t;
            }, function(_apiLegacy00jJs) {
                getImageUrl = _apiLegacy00jJs.n;
                api_default = _apiLegacy00jJs.t;
            }, function(_ItemFormatterLegacy00kJs) {
                convertItemsToTiles = _ItemFormatterLegacy00kJs.t;
            } ],
            execute: function execute() {
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
                CoreRenderer = function() {
                    function CoreRenderer(stage) {
                        this.mode = void 0;
                        this.defaultTextureCoords = void 0;
                        this.stage = void 0;
                        this.rttNodes = [];
                        this.stage = stage;
                    }
                    return _createClass(CoreRenderer, [ {
                        key: "deleteBuffer",
                        value: function deleteBuffer(_buffer) {}
                    }, {
                        key: "beginRoundedClip",
                        value: function beginRoundedClip(_node) {}
                    }, {
                        key: "endRoundedClip",
                        value: function endRoundedClip(_node) {}
                    } ]);
                }();
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
                        _this2.valueKey = "";
                        _this2.uniforms = {
                            hasStoredUniforms: false,
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
                                    _this2.updateUniformUsage();
                                    return;
                                }
                                var prevKey = _this2.valueKey;
                                _this2.valueKey = _this2.createValueKey();
                                if (prevKey === _this2.valueKey) return;
                                if (prevKey.length > 0) stage.shManager.mutateShaderValueUsage(prevKey, -1);
                                var values = stage.shManager.getShaderValues(_this2.valueKey);
                                if (values !== void 0) {
                                    _this2.uniforms = values;
                                    return;
                                }
                                _this2.uniforms = {
                                    hasStoredUniforms: false,
                                    single: {},
                                    vec2: {},
                                    vec3: {},
                                    vec4: {}
                                };
                                _this2.updater(_this2.node);
                                _this2.updateUniformUsage();
                                stage.shManager.setShaderValues(_this2.valueKey, _this2.uniforms);
                            };
                        }
                        return _this2;
                    }
                    _inherits(WebGlShaderNode, _CoreShaderNode);
                    return _createClass(WebGlShaderNode, [ {
                        key: "updateUniformUsage",
                        value: function updateUniformUsage() {
                            for (var _ in this.uniforms.single) {
                                this.uniforms.hasStoredUniforms = true;
                                return;
                            }
                            for (var _2 in this.uniforms.vec2) {
                                this.uniforms.hasStoredUniforms = true;
                                return;
                            }
                            for (var _3 in this.uniforms.vec3) {
                                this.uniforms.hasStoredUniforms = true;
                                return;
                            }
                            for (var _4 in this.uniforms.vec4) {
                                this.uniforms.hasStoredUniforms = true;
                                return;
                            }
                            this.uniforms.hasStoredUniforms = false;
                        }
                    }, {
                        key: "uniformRGBA",
                        value: function uniformRGBA(location, value) {
                            var premultiplyAlpha = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
                            var rgba = getNormalizedRgbaComponents(value);
                            if (premultiplyAlpha === false || rgba[3] === 1) {
                                this.uniform4fa(location, rgba);
                                return;
                            }
                            var a = rgba[3];
                            rgba[0] *= a;
                            rgba[1] *= a;
                            rgba[2] *= a;
                            this.uniform4fa(location, rgba);
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
                        this.vao = void 0;
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
                        this.renderer = renderer;
                        var glw = this.glw = renderer.glw;
                        var webGl2 = glw.isWebGl2();
                        var requiredExtensions = [];
                        this.supportsIndexedTextures = config.supportsIndexedTextures || this.supportsIndexedTextures;
                        requiredExtensions = webGl2 && config.webgl2Extensions || !webGl2 && config.webgl1Extensions || [];
                        var glVersion = webGl2 ? "2.0" : "1.0";
                        requiredExtensions.forEach(function(extensionName) {
                            if (!glw.getExtension(extensionName)) throw new Error('Shader "'.concat(_this3.constructor.name, '" requires extension "').concat(extensionName, '" for WebGL ').concat(glVersion, " but wasn't found"));
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
                            var time = node.time, worldAlpha = node.worldAlpha, w = node.w, h = node.h;
                            if (this.useTimeValue === true) {
                                if (time !== currentRenderOp.time) return false;
                            }
                            if (this.useSystemAlpha === true) {
                                if (worldAlpha !== currentRenderOp.worldAlpha) return false;
                            }
                            if (this.useSystemDimensions === true) {
                                if (w !== currentRenderOp.w || h !== currentRenderOp.h) return false;
                            }
                            var shaderPropsA = void 0;
                            var shaderPropsB = void 0;
                            var shader = node.props.shader;
                            if (shader !== null) shaderPropsA = shader.resolvedProps;
                            var opShader = currentRenderOp.shader;
                            if (opShader !== null) shaderPropsB = opShader.resolvedProps;
                            if (shaderPropsA === void 0 && shaderPropsB !== void 0 || shaderPropsA !== void 0 && shaderPropsB === void 0) return false;
                            if (shaderPropsA !== void 0 && shaderPropsB !== void 0) {
                                for (var key in shaderPropsA) if (shaderPropsA[key] !== shaderPropsB[key]) return false;
                            }
                            return true;
                        }
                    }, {
                        key: "bindRenderOp",
                        value: function bindRenderOp(renderOp) {
                            this.bindTextures(renderOp.renderOpTextures);
                            this.bindBufferCollection(renderOp.quadBufferCollection);
                            var parentHasRenderTexture = renderOp.parentHasRenderTexture;
                            var framebufferDimensions = renderOp.isCoreNode ? renderOp.parentFramebufferDimensions : renderOp.framebufferDimensions;
                            if (renderOp.rtt === true && parentHasRenderTexture === true) return;
                            if (parentHasRenderTexture === true && framebufferDimensions) {
                                var w = framebufferDimensions.w, h = framebufferDimensions.h;
                                this.glw.uniform1f("u_pixelRatio", 1);
                                this.glw.uniform2f("u_resolution", w, h);
                            } else {
                                this.glw.uniform1f("u_pixelRatio", renderOp.stage.pixelRatio);
                                this.glw.uniform2f("u_resolution", this.glw.canvas.width, this.glw.canvas.height);
                            }
                            if (this.useTimeValue === true) this.glw.uniform1f("u_time", renderOp.time);
                            if (this.useSystemAlpha === true) this.glw.uniform1f("u_alpha", renderOp.worldAlpha);
                            if (this.useSystemDimensions === true) this.glw.uniform2f("u_dimensions", renderOp.w, renderOp.h);
                            if (renderOp.isSdfRenderOp === true) {
                                var _opShader$shaderType$;
                                (_opShader$shaderType$ = renderOp.shader.shaderType.onSdfBind) == null || _opShader$shaderType$.call(this.glw, renderOp.sdfShaderProps);
                                return;
                            }
                            var uniforms = renderOp.shader.uniforms;
                            if (uniforms.hasStoredUniforms === true) {
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
                        key: "bindTextures",
                        value: function bindTextures(textures) {
                            var t = textures[0];
                            if (t === void 0) return;
                            this.glw.activeTexture(0);
                            this.glw.bindTexture(t.ctxTexture);
                        }
                    }, {
                        key: "attach",
                        value: function attach() {
                            if (this.isDestroyed === true) return;
                            this.glw.useProgram(this.program, this.uniformLocations);
                            if (this.glw.isWebGl2() && this.vao) this.glw.bindVertexArray(this.vao);
                        }
                    }, {
                        key: "bindForStencil",
                        value: function bindForStencil(bufferCollection) {
                            if (this.isDestroyed === true) return;
                            this.glw.useProgram(this.program, this.uniformLocations);
                            this.bindBufferCollection(bufferCollection);
                        }
                    }, {
                        key: "detach",
                        value: function detach() {
                            this.disableAttributes();
                        }
                    }, {
                        key: "destroy",
                        value: function destroy() {
                            if (this.isDestroyed === true) return;
                            var glw = this.glw;
                            this.detach();
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
                    vertex: "\n  # ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  # else\n  precision mediump float;\n  # endif\n\n  attribute vec2 a_position;\n  attribute vec2 a_textureCoords;\n  attribute vec4 a_color;\n  attribute vec2 a_nodeCoords;\n\n  uniform vec2 u_resolution;\n  uniform float u_pixelRatio;\n  uniform vec2 u_dimensions;\n\n  varying vec4 v_color;\n  varying vec2 v_textureCoords;\n  varying vec2 v_nodeCoords;\n\n  void main() {\n    vec2 normalized = a_position * u_pixelRatio;\n    vec2 screenSpace = vec2(2.0 / u_resolution.x, -2.0 / u_resolution.y);\n\n    v_color = a_color;\n    v_nodeCoords = a_nodeCoords;\n    v_textureCoords = a_textureCoords;\n\n    gl_Position = vec4(normalized.x * screenSpace.x - 1.0, normalized.y * -abs(screenSpace.y) + 1.0, 0.0, 1.0);\n    gl_Position.y = -sign(screenSpace.y) * gl_Position.y;\n  }\n",
                    fragment: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    //renderer applies these uniforms automatically\n    uniform vec2 u_resolution;\n    uniform vec2 u_dimensions;\n    uniform float u_alpha;\n    uniform float u_pixelRatio;\n    uniform sampler2D u_texture;\n\n    //custom uniforms\n    uniform vec4 u_radius;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n    varying vec2 v_nodeCoords;\n\n    float roundedBox(vec2 p, vec2 s, vec4 r) {\n      float sx = step(0.0, p.x);\n      float sy = step(0.0, p.y);\n      r.xy = mix(r.xw, r.yz, sx);\n      r.x = mix(r.x, r.y, sy);\n      vec2 q = abs(p) - s + r.x;\n      return (min(max(q.x, q.y), 0.0) + length(max(q, 0.0))) - r.x;\n    }\n\n    void main() {\n      vec4 color = texture2D(u_texture, v_textureCoords) * v_color;\n      vec2 halfDimensions = (u_dimensions * 0.5);\n\n      vec2 boxUv = v_nodeCoords.xy * u_dimensions - halfDimensions;\n      float boxDist = roundedBox(boxUv, halfDimensions, u_radius);\n\n      float edgeWidth = 1.0 / u_pixelRatio;\n      float roundedAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, boxDist);\n\n      vec4 resColor = vec4(0.0);\n      resColor = mix(resColor, color, roundedAlpha);\n      gl_FragColor = resColor * u_alpha;\n    }\n  "
                };
                props$2 = Object.assign({}, RoundedTemplate.props, getBorderProps("border"));
                RoundedWithBorderTemplate = {
                    props: props$2
                };
                RoundedWithBorder = {
                    props: RoundedWithBorderTemplate.props,
                    update: function update(node) {
                        this.uniformRGBA("u_borderColor", this.props["border-color"]);
                        this.uniform4fa("u_borderWidth", this.props["border-w"]);
                        this.uniform1f("u_borderGap", this.props["border-gap"]);
                        this.uniform1f("u_borderAlign", this.props["border-align"]);
                        this.uniform4fa("u_radius", calcFactoredRadiusArray(this.props.radius, node.w, node.h));
                    },
                    vertex: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    attribute vec2 a_position;\n    attribute vec2 a_textureCoords;\n    attribute vec4 a_color;\n    attribute vec2 a_nodeCoords;\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n    uniform vec2 u_dimensions;\n\n    uniform vec4 u_radius;\n    uniform vec4 u_borderWidth;\n    uniform float u_borderGap;\n    uniform float u_borderAlign;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n    varying vec2 v_nodeCoords;\n\n    varying vec2 v_innerSize;\n    varying vec2 v_outerSize;\n    varying vec2 v_outerBorderUv;\n    varying vec2 v_innerBorderUv;\n    varying vec4 v_innerBorderRadius;\n    varying vec4 v_outerBorderRadius;\n    varying vec2 v_halfDimensions;\n\n    void main() {\n      vec2 vertexPos = a_position * u_pixelRatio;\n      vec2 screenSpace = vec2(2.0 / u_resolution.x, -2.0 / u_resolution.y);\n      vec2 edge = clamp(a_nodeCoords * 2.0 - vec2(1.0), -1.0, 1.0);\n      vec2 edgeOffset = vec2(0.0);\n      float borderZero = 1.0 - step(0.001, dot(abs(u_borderWidth), vec4(1.0)));\n\n      v_innerSize = vec2(0.0);\n      v_outerSize = vec2(0.0);\n\n      // Compute all border values unconditionally — edgeOffset is masked by\n      // (1.0 - borderZero) so geometry is unaffected when no border is present.\n      vec4 adjustedBorderWidth = u_borderWidth - 1.0 + clamp(u_borderWidth, -1.0, 1.0);\n\n      float borderTop = adjustedBorderWidth.x;\n      float borderRight = adjustedBorderWidth.y;\n      float borderBottom = adjustedBorderWidth.z;\n      float borderLeft = adjustedBorderWidth.w;\n\n      v_outerBorderUv = vec2(0.0);\n      v_innerBorderUv = vec2(0.0);\n\n      vec2 borderSize = vec2(borderRight + borderLeft, borderTop + borderBottom);\n      vec2 extraSize = borderSize * u_borderAlign;\n      float gapLeft = step(0.001, borderLeft) * u_borderGap;\n      float gapRight = step(0.001, borderRight) * u_borderGap;\n      float gapTop = step(0.001, borderTop) * u_borderGap;\n      float gapBottom = step(0.001, borderBottom) * u_borderGap;\n      vec2 gapSize = vec2(gapLeft + gapRight, gapTop + gapBottom);\n\n      v_outerSize = (u_dimensions + gapSize + extraSize) * 0.5;\n      v_innerSize = v_outerSize - borderSize * 0.5;\n\n      // Use sign() to avoid branching\n      vec2 borderDiff = vec2(borderRight - borderLeft, borderBottom - borderTop);\n      vec2 signDiff = sign(borderDiff);\n      borderDiff = abs(borderDiff);\n\n      vec2 gapDiff = vec2(gapRight - gapLeft, gapBottom - gapTop);\n      vec2 signGapDiff = sign(gapDiff);\n      gapDiff = abs(gapDiff);\n\n      v_outerBorderUv = -signDiff * borderDiff * u_borderAlign * 0.5 - signGapDiff * gapDiff * 0.5;\n      v_innerBorderUv = v_outerBorderUv + signDiff * borderDiff * 0.5;\n\n      v_outerBorderRadius = vec4(\n        max(0.0, u_radius.x + max(borderTop * u_borderAlign + u_borderGap, borderLeft * u_borderAlign + u_borderGap)),\n        max(0.0, u_radius.y + max(borderTop * u_borderAlign + u_borderGap, borderRight * u_borderAlign + u_borderGap)),\n        max(0.0, u_radius.z + max(borderBottom * u_borderAlign + u_borderGap, borderRight * u_borderAlign + u_borderGap)),\n        max(0.0, u_radius.w + max(borderBottom * u_borderAlign + u_borderGap, borderLeft * u_borderAlign + u_borderGap))\n      );\n\n      v_innerBorderRadius = vec4(\n        max(0.0, v_outerBorderRadius.x - max(borderTop, borderLeft)),\n        max(0.0, v_outerBorderRadius.y - max(borderTop, borderRight)),\n        max(0.0, v_outerBorderRadius.z - max(borderBottom, borderRight)),\n        max(0.0, v_outerBorderRadius.w - max(borderBottom, borderLeft))\n      );\n\n      vec2 edgeOffsetExtra = step(u_dimensions * 0.5, v_outerSize) * edge * (extraSize + u_borderGap);\n      // Mask edgeOffset to zero when no border — replaces the if(borderZero == 0.0) block.\n      edgeOffset = edgeOffsetExtra * (1.0 - borderZero);\n\n      vertexPos = (a_position + edge + edgeOffset) * u_pixelRatio;\n\n      gl_Position = vec4(vertexPos.x * screenSpace.x - 1.0, -sign(screenSpace.y) * (vertexPos.y * -abs(screenSpace.y)) + 1.0, 0.0, 1.0);\n\n      v_color = a_color;\n      v_nodeCoords = a_nodeCoords + (screenSpace + edgeOffset) / (u_dimensions);\n      v_textureCoords = a_textureCoords + (screenSpace + edgeOffset) / (u_dimensions);\n\n      v_halfDimensions = u_dimensions * 0.5;\n    }\n  ",
                    fragment: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n    uniform float u_alpha;\n    uniform vec2 u_dimensions;\n    uniform sampler2D u_texture;\n\n    uniform vec4 u_radius;\n    uniform vec4 u_borderWidth;\n    uniform vec4 u_borderColor;\n    uniform float u_borderGap;\n    uniform float u_borderAlign;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n    varying vec2 v_nodeCoords;\n\n    varying vec2 v_innerSize;\n    varying vec2 v_outerSize;\n    varying vec2 v_outerBorderUv;\n    varying vec2 v_innerBorderUv;\n    varying vec4 v_innerBorderRadius;\n    varying vec4 v_outerBorderRadius;\n    varying vec2 v_halfDimensions;\n\n    float roundedBox(vec2 p, vec2 s, vec4 r) {\n      float sx = step(0.0, p.x);\n      float sy = step(0.0, p.y);\n      r.xy = mix(r.xw, r.yz, sx);\n      r.x = mix(r.x, r.y, sy);\n      vec2 q = abs(p) - s + r.x;\n      return (min(max(q.x, q.y), 0.0) + length(max(q, 0.0))) - r.x;\n    }\n\n    void main() {\n      vec4 color = texture2D(u_texture, v_textureCoords) * v_color;\n      vec4 resultColor = vec4(0.0);\n      vec2 boxUv = v_nodeCoords.xy * u_dimensions - v_halfDimensions;\n      float borderZero = 1.0 - step(0.001, dot(abs(u_borderWidth), vec4(1.0)));\n      float edgeWidth = 1.0 / u_pixelRatio;\n\n      float nodeDist = roundedBox(boxUv, v_halfDimensions - edgeWidth, u_radius);\n      float nodeAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, nodeDist);\n      resultColor = mix(resultColor, color, nodeAlpha);\n\n      float outerDist = roundedBox(boxUv + v_outerBorderUv, v_outerSize - edgeWidth, v_outerBorderRadius);\n      float innerDist = roundedBox(boxUv + v_innerBorderUv, v_innerSize - edgeWidth, v_innerBorderRadius);\n\n      float borderDist = max(-innerDist, outerDist);\n      // Multiply by (1.0 - borderZero) to zero out border contribution when no border\n      // is present — replaces the if(borderZero == 1.0) early return.\n      float borderAlpha = (1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, borderDist)) * u_borderColor.a * (1.0 - borderZero);\n\n      resultColor = mix(resultColor, vec4(u_borderColor.rgb, 1.0), borderAlpha);\n      gl_FragColor = resultColor * u_alpha;\n    }\n  "
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
                    vertex: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    attribute vec2 a_position;\n    attribute vec2 a_textureCoords;\n    attribute vec4 a_color;\n    attribute vec2 a_nodeCoords;\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n    uniform float u_rtt;\n    uniform vec2 u_dimensions;\n\n    uniform vec4 u_shadow;\n    uniform vec4 u_radius;\n    uniform vec4 u_borderWidth;\n    uniform float u_borderGap;\n    uniform float u_borderAlign;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n    varying vec2 v_nodeCoords;\n\n    varying vec2 v_innerSize;\n    varying vec2 v_outerSize;\n    varying vec2 v_outerBorderUv;\n    varying vec2 v_innerBorderUv;\n    varying vec4 v_innerBorderRadius;\n    varying vec4 v_outerBorderRadius;\n    varying vec2 v_halfDimensions;\n\n    void main() {\n      vec2 screenSpace = vec2(2.0 / u_resolution.x,  -2.0 / u_resolution.y);\n      vec2 edge = clamp(a_nodeCoords * 2.0 - vec2(1.0), -1.0, 1.0);\n      float borderZero = 1.0 - step(0.001, dot(abs(u_borderWidth), vec4(1.0)));\n\n      vec2 edgeOffset = edge * ((u_shadow.w * 2.0)+ u_shadow.z) + u_shadow.xy;\n      vec2 vertexPos = (a_position + edge + edgeOffset) * u_pixelRatio;\n\n      v_innerSize = vec2(0.0);\n      v_outerSize = vec2(0.0);\n\n      // Compute all border values unconditionally — edgeOffset extra is masked by\n      // (1.0 - borderZero) so geometry is unaffected when no border is present.\n      vec4 adjustedBorderWidth = u_borderWidth - 1.0 + clamp(u_borderWidth, -1.0, 1.0);\n\n      float borderTop = adjustedBorderWidth.x;\n      float borderRight = adjustedBorderWidth.y;\n      float borderBottom = adjustedBorderWidth.z;\n      float borderLeft = adjustedBorderWidth.w;\n\n      v_outerBorderUv = vec2(0.0);\n      v_innerBorderUv = vec2(0.0);\n\n      vec2 borderSize = vec2(borderRight + borderLeft, borderTop + borderBottom);\n      vec2 extraSize = borderSize * u_borderAlign;\n      float gapLeft = step(0.001, borderLeft) * u_borderGap;\n      float gapRight = step(0.001, borderRight) * u_borderGap;\n      float gapTop = step(0.001, borderTop) * u_borderGap;\n      float gapBottom = step(0.001, borderBottom) * u_borderGap;\n      vec2 gapSize = vec2(gapLeft + gapRight, gapTop + gapBottom);\n\n      v_outerSize = (u_dimensions + gapSize + extraSize) * 0.5;\n      v_innerSize = v_outerSize - borderSize * 0.5;\n\n      // Use sign() to avoid branching\n      vec2 borderDiff = vec2(borderRight - borderLeft, borderBottom - borderTop);\n      vec2 signDiff = sign(borderDiff);\n      borderDiff = abs(borderDiff);\n\n      vec2 gapDiff = vec2(gapRight - gapLeft, gapBottom - gapTop);\n      vec2 signGapDiff = sign(gapDiff);\n      gapDiff = abs(gapDiff);\n\n      v_outerBorderUv = -signDiff * borderDiff * u_borderAlign * 0.5 - signGapDiff * gapDiff * 0.5;\n      v_innerBorderUv = v_outerBorderUv + signDiff * borderDiff * 0.5;\n\n      v_outerBorderRadius = vec4(\n        max(0.0, u_radius.x + max(borderTop * u_borderAlign + u_borderGap, borderLeft * u_borderAlign + u_borderGap)),\n        max(0.0, u_radius.y + max(borderTop * u_borderAlign + u_borderGap, borderRight * u_borderAlign + u_borderGap)),\n        max(0.0, u_radius.z + max(borderBottom * u_borderAlign + u_borderGap, borderRight * u_borderAlign + u_borderGap)),\n        max(0.0, u_radius.w + max(borderBottom * u_borderAlign + u_borderGap, borderLeft * u_borderAlign + u_borderGap))\n      );\n\n      v_innerBorderRadius = vec4(\n        max(0.0, v_outerBorderRadius.x - max(borderTop, borderLeft)),\n        max(0.0, v_outerBorderRadius.y - max(borderTop, borderRight)),\n        max(0.0, v_outerBorderRadius.z - max(borderBottom, borderRight)),\n        max(0.0, v_outerBorderRadius.w - max(borderBottom, borderLeft))\n      );\n\n      vec2 edgeOffsetExtra = step(u_dimensions * 0.5, v_outerSize) * edge * (extraSize + u_borderGap);\n      // Mask extra border offset to zero when no border — replaces if(borderZero == 0.0).\n      edgeOffset += edgeOffsetExtra * (1.0 - borderZero);\n\n      vertexPos = (a_position + edge + edgeOffset) * u_pixelRatio;\n\n      gl_Position = vec4(vertexPos.x * screenSpace.x - 1.0, -sign(screenSpace.y) * (vertexPos.y * -abs(screenSpace.y)) + 1.0, 0.0, 1.0);\n\n      v_halfDimensions = u_dimensions * 0.5;\n      v_color = a_color;\n      v_nodeCoords = a_nodeCoords + (screenSpace + edgeOffset) / (u_dimensions);\n      v_textureCoords = a_textureCoords + (screenSpace + edgeOffset) / (u_dimensions);\n    }\n  ",
                    fragment: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n    uniform float u_alpha;\n    uniform vec2 u_dimensions;\n    uniform sampler2D u_texture;\n    uniform float u_rtt;\n\n    uniform vec4 u_radius;\n    uniform vec4 u_borderWidth;\n    uniform vec4 u_borderColor;\n    uniform vec4 u_shadowColor;\n    uniform vec4 u_shadow;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n    varying vec2 v_nodeCoords;\n\n    varying vec2 v_innerSize;\n    varying vec2 v_outerSize;\n    varying vec2 v_outerBorderUv;\n    varying vec2 v_innerBorderUv;\n    varying vec4 v_innerBorderRadius;\n    varying vec4 v_outerBorderRadius;\n    varying vec2 v_halfDimensions;\n\n    float roundedBox(vec2 p, vec2 s, vec4 r) {\n      float sx = step(0.0, p.x);\n      float sy = step(0.0, p.y);\n      r.xy = mix(r.xw, r.yz, sx);\n      r.x = mix(r.x, r.y, sy);\n      vec2 q = abs(p) - s + r.x;\n      return (min(max(q.x, q.y), 0.0) + length(max(q, 0.0))) - r.x;\n    }\n\n    float shadowBox(vec2 p, vec2 s, vec4 r) {\n      float sx = step(0.0, p.x);\n      float sy = step(0.0, p.y);\n      r.xy = mix(r.xw, r.yz, sx);\n      r.x = mix(r.x, r.y, sy);\n      vec2 q = abs(p) - s + r.x;\n      float dist = min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r.x;\n      return 1.0 - smoothstep(-u_shadow.w, u_shadow.w + u_shadow.z, dist);\n    }\n\n    void main() {\n      vec4 color = texture2D(u_texture, v_textureCoords) * v_color;\n      vec4 resultColor = vec4(0.0);\n      vec2 boxUv = v_nodeCoords.xy * u_dimensions - v_halfDimensions;\n      float borderZero = 1.0 - step(0.001, dot(abs(u_borderWidth), vec4(1.0)));\n      float edgeWidth = 1.0 / u_pixelRatio;\n      float nodeDist = roundedBox(boxUv, v_halfDimensions - edgeWidth, u_radius);\n      float nodeAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, nodeDist);\n\n      // Compute both shadow paths unconditionally and mix on the condition —\n      // replaces the if(borderZero == 1.0) early-return and the varying-driven\n      // if/else that caused warp divergence on Mali 400.\n      float shadowAlphaInner = shadowBox(boxUv - u_shadow.xy, v_halfDimensions + u_shadow.w - edgeWidth, u_radius + u_shadow.z);\n      float shadowAlphaOuter = shadowBox(boxUv + v_outerBorderUv - u_shadow.xy, v_outerSize + u_shadow.w - edgeWidth, v_outerBorderRadius + u_shadow.z);\n      // useOuter: 1.0 when outer border exceeds node half-dimensions AND border exists.\n      float useOuter = step(0.0, max(v_outerSize.x - v_halfDimensions.x, v_outerSize.y - v_halfDimensions.y)) * (1.0 - borderZero);\n      float shadowAlpha = mix(shadowAlphaInner, shadowAlphaOuter, useOuter);\n\n      float outerDist = roundedBox(boxUv + v_outerBorderUv, v_outerSize - edgeWidth, v_outerBorderRadius);\n      float innerDist = roundedBox(boxUv + v_innerBorderUv, v_innerSize - edgeWidth, v_innerBorderRadius);\n      float borderDist = max(-innerDist, outerDist);\n      // Multiply by (1.0 - borderZero) to zero out border contribution when no border\n      // is present — replaces the if(borderZero == 1.0) early return.\n      float borderAlpha = (1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, borderDist)) * u_borderColor.a * (1.0 - borderZero);\n\n      resultColor = mix(resultColor, u_shadowColor, shadowAlpha);\n      resultColor = mix(resultColor, color, nodeAlpha);\n      resultColor = mix(resultColor, vec4(u_borderColor.rgb, 1.0), borderAlpha);\n      gl_FragColor = resultColor * u_alpha;\n    }\n  "
                };
                props = Object.assign({}, RoundedTemplate.props, getShadowProps("shadow"));
                RoundedWithShadowTemplate = {
                    props: props
                };
                Shadow = {
                    props: ShadowTemplate.props,
                    update: function update() {
                        this.uniformRGBA("u_color", this.props.color);
                        this.uniform4fa("u_shadow", this.props.projection);
                    },
                    vertex: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    attribute vec2 a_position;\n    attribute vec2 a_textureCoords;\n    attribute vec4 a_color;\n    attribute vec2 a_nodeCoords;\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n    uniform float u_rtt;\n    uniform vec2 u_dimensions;\n\n    uniform vec4 u_shadow;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n    varying vec2 v_nodeCoords;\n\n    varying float v_edgeWidth;\n    varying vec2 v_halfDimensions;\n\n    void main() {\n      vec2 screenSpace = vec2(2.0 / u_resolution.x,  -2.0 / u_resolution.y);\n      vec2 outerEdge = clamp(a_nodeCoords * 2.0 - vec2(1.0), -1.0, 1.0);\n\n      vec2 shadowEdge = outerEdge * ((u_shadow.w * 2.0)+ u_shadow.z) + u_shadow.xy;\n\n      vec2 vertexPos = (a_position + outerEdge + shadowEdge) * u_pixelRatio;\n      gl_Position = vec4(vertexPos.x * screenSpace.x - 1.0, -sign(screenSpace.y) * (vertexPos.y * -abs(screenSpace.y)) + 1.0, 0.0, 1.0);\n\n      v_color = a_color;\n      v_nodeCoords = a_nodeCoords + (screenSpace + shadowEdge) / (u_dimensions);\n      v_textureCoords = a_textureCoords + (screenSpace + shadowEdge) / (u_dimensions);\n\n      v_halfDimensions = u_dimensions * 0.5;\n      v_edgeWidth = 1.0 / u_pixelRatio;\n    }\n  ",
                    fragment: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n    uniform float u_alpha;\n    uniform vec2 u_dimensions;\n    uniform sampler2D u_texture;\n\n    uniform vec4 u_color;\n    uniform vec4 u_shadow;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n    varying vec2 v_nodeCoords;\n\n    varying vec2 v_halfDimensions;\n    varying float v_edgeWidth;\n\n    float box(vec2 p, vec2 s) {\n      vec2 q = abs(p) - s;\n      return (min(max(q.x, q.y), 0.0) + length(max(q, 0.0))) + 2.0;\n    }\n\n    float shadowBox(vec2 p, vec2 s, float r) {\n      vec2 q = abs(p) - s + r;\n      float dist = min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r;\n      return 1.0 - smoothstep(-u_shadow.w, u_shadow.w + u_shadow.z, dist);\n    }\n\n    void main() {\n      vec4 color = texture2D(u_texture, v_textureCoords) * v_color;\n      vec2 boxUv = v_nodeCoords.xy * u_dimensions - v_halfDimensions;\n      float boxDist = box(boxUv, v_halfDimensions - v_edgeWidth);\n\n      float boxAlpha = 1.0 - smoothstep(0.0, u_pixelRatio, boxDist);\n      float shadowDist = shadowBox(boxUv - u_shadow.xy, v_halfDimensions + u_shadow.w - v_edgeWidth, u_shadow.z);\n\n      vec4 resColor = vec4(0.0);\n      resColor = mix(resColor, u_color, shadowDist);\n      resColor = mix(resColor, color, min(color.a, boxAlpha));\n      gl_FragColor = resColor * u_alpha;\n    }\n  "
                };
                RoundedWithShadow = {
                    props: RoundedWithShadowTemplate.props,
                    update: function update(node) {
                        this.uniformRGBA("u_shadow_color", this.props["shadow-color"]);
                        this.uniform4fa("u_shadow", this.props["shadow-projection"]);
                        this.uniform4fa("u_radius", calcFactoredRadiusArray(this.props.radius, node.w, node.h));
                    },
                    vertex: Shadow.vertex,
                    fragment: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n    uniform float u_alpha;\n    uniform vec2 u_dimensions;\n    uniform sampler2D u_texture;\n\n    uniform vec4 u_shadow_color;\n    uniform vec4 u_shadow;\n    uniform vec4 u_radius;\n\n    uniform int u_asymWidth;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n    varying vec2 v_nodeCoords;\n\n    varying float v_edgeWidth;\n\n    float roundedBox(vec2 p, vec2 s, vec4 r) {\n      float sx = step(0.0, p.x);\n      float sy = step(0.0, p.y);\n      r.xy = mix(r.xw, r.yz, sx);\n      r.x = mix(r.x, r.y, sy);\n      vec2 q = abs(p) - s + r.x;\n      return (min(max(q.x, q.y), 0.0) + length(max(q, 0.0))) - r.x;\n    }\n\n    float shadowBox(vec2 p, vec2 s, vec4 r) {\n      float sx = step(0.0, p.x);\n      float sy = step(0.0, p.y);\n      r.xy = mix(r.xw, r.yz, sx);\n      r.x = mix(r.x, r.y, sy);\n      vec2 q = abs(p) - s + r.x;\n      float dist = min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r.x;\n      return 1.0 - smoothstep(-(u_shadow.w), (u_shadow.w + u_shadow.z), dist);\n    }\n\n    void main() {\n      vec4 color = texture2D(u_texture, v_textureCoords) * v_color;\n      vec2 halfDimensions = (u_dimensions * 0.5);\n\n      vec2 boxUv = v_nodeCoords.xy * u_dimensions - halfDimensions;\n      float boxDist = roundedBox(boxUv, halfDimensions - v_edgeWidth, u_radius);\n\n      float roundedAlpha = 1.0 - smoothstep(-0.5 * v_edgeWidth, 0.5 * v_edgeWidth, boxDist);\n\n      float shadowAlpha = shadowBox(boxUv - u_shadow.xy, halfDimensions + u_shadow.w - v_edgeWidth, u_radius + u_shadow.z);\n\n      vec4 resColor = vec4(0.0);\n      resColor = mix(resColor, u_shadow_color, shadowAlpha);\n      resColor = mix(resColor, color, min(color.a, roundedAlpha));\n      gl_FragColor = resColor * u_alpha;\n    }\n  "
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
                    fragment: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    uniform float u_alpha;\n    uniform float u_pixelRatio;\n    uniform vec2 u_dimensions;\n    uniform sampler2D u_texture;\n\n    uniform vec2 u_size;\n    uniform vec2 u_pos;\n\n    uniform vec4 u_radius;\n\n    uniform vec4 u_color;\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n\n    void main() {\n      vec4 color = texture2D(u_texture, v_textureCoords) * v_color;\n      vec2 p = (v_textureCoords.xy * u_dimensions.xy - u_pos) - u_size;\n      vec4 r = u_radius;\n      float sx = step(0.0, p.x);\n      float sy = step(0.0, p.y);\n      r.xy = mix(r.xw, r.yz, sx);\n      r.x = mix(r.x, r.y, sy);\n      p = abs(p) - u_size + r.x;\n      float dist = min(max(p.x, p.y), 0.0) + length(max(p, 0.0)) - r.x + 2.0;\n      float roundedAlpha = 1.0 - smoothstep(0.0, u_pixelRatio, dist);\n      gl_FragColor = mix(color, vec4(0.0), min(color.a, roundedAlpha));\n    }\n  "
                };
                LinearGradient = {
                    props: LinearGradientTemplate.props,
                    update: function update() {
                        var props = this.props;
                        this.uniform1f("u_angle", props.angle - Math.PI / 180 * 90);
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
                        return "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    #define PI 3.14159265359\n    #define MAX_STOPS ".concat(props.colors.length, "\n    #define LAST_STOP ").concat(props.colors.length - 1, "\n\n    uniform float u_alpha;\n    uniform vec2 u_dimensions;\n\n    uniform sampler2D u_texture;\n\n    uniform float u_angle;\n    uniform float u_stops[MAX_STOPS];\n    uniform vec4 u_colors[MAX_STOPS];\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n\n    vec2 calcPoint(float d, float angle) {\n      return d * vec2(cos(angle), sin(angle)) + (u_dimensions * 0.5);\n    }\n\n    vec4 getGradientColor(float dist) {\n      dist = clamp(dist, 0.0, 1.0);\n      vec4 color = u_colors[0];\n      for(int i = 0; i < LAST_STOP; i++) {\n        float t = smoothstep(u_stops[i], u_stops[i + 1], dist);\n        color = mix(color, mix(u_colors[i], u_colors[i + 1], t), step(u_stops[i], dist));\n      }\n      return color;\n    }\n\n    void main() {\n      vec4 color = texture2D(u_texture, v_textureCoords) * v_color;\n      float a = u_angle;\n      float lineDist = abs(u_dimensions.x * cos(a)) + abs(u_dimensions.y * sin(a));\n      vec2 f = calcPoint(lineDist * 0.5, a);\n      vec2 t = calcPoint(lineDist * 0.5, a + PI);\n      // Scale to avoid mediump float overflow on platforms without highp\n      float s = max(u_dimensions.x, u_dimensions.y);\n      vec2 gradVec = (t - f) / s;\n      float dist = dot((v_textureCoords.xy * u_dimensions - f) / s, gradVec) / dot(gradVec, gradVec);\n      vec4 colorOut = getGradientColor(dist);\n      vec3 blendedRGB = mix(color.rgb, colorOut.rgb, clamp(colorOut.a, 0.0, 1.0));\n      gl_FragColor = vec4(blendedRGB, color.a);\n    }\n  ");
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
                        return "\n      # ifdef GL_FRAGMENT_PRECISION_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      #define MAX_STOPS ".concat(props.colors.length, "\n      #define LAST_STOP ").concat(props.colors.length - 1, "\n\n      uniform float u_alpha;\n      uniform vec2 u_dimensions;\n\n      uniform sampler2D u_texture;\n\n      uniform vec2 u_projection;\n      uniform vec2 u_size;\n\n      uniform float u_stops[MAX_STOPS];\n      uniform vec4 u_colors[MAX_STOPS];\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoords;\n      varying vec2 v_nodeCoords;\n\n      vec4 getGradientColor(float dist) {\n        dist = clamp(dist, 0.0, 1.0);\n        vec4 color = u_colors[0];\n        for(int i = 0; i < LAST_STOP; i++) {\n          float t = smoothstep(u_stops[i], u_stops[i + 1], dist);\n          color = mix(color, mix(u_colors[i], u_colors[i + 1], t), step(u_stops[i], dist));\n        }\n        return color;\n      }\n\n      void main() {\n        vec4 color = texture2D(u_texture, v_textureCoords) * v_color;\n        vec2 point = v_nodeCoords.xy * u_dimensions;\n        float dist = length((point - u_projection) / u_size);\n\n        vec4 colorOut = getGradientColor(dist);\n        vec3 blendedRGB = mix(color.rgb, colorOut.rgb, clamp(colorOut.a, 0.0, 1.0));\n        gl_FragColor = vec4(blendedRGB, color.a);\n      }\n    ");
                    }
                };
                invisibleChars = /[\u200B\u200C\u200D\uFEFF\u00AD\u2060]/g;
                spaceRegex = /[ \u200B]+/g;
                defaultFontMetrics = {
                    ascender: 800,
                    descender: -200,
                    lineGap: 200,
                    unitsPerEm: 1e3
                };
                normalizeFontMetrics = function normalizeFontMetrics(metrics, fontSize) {
                    var scale = fontSize / metrics.unitsPerEm;
                    return {
                        ascender: metrics.ascender * scale,
                        descender: metrics.descender * scale,
                        lineGap: metrics.lineGap * scale
                    };
                };
                mapTextLayout = function mapTextLayout(measureText, metrics, text, textAlign, fontFamily, lineHeight, overflowSuffix, wordBreak, letterSpacing, maxLines, maxWidth, maxHeight) {
                    var bareLineHeight = metrics.ascender - metrics.descender;
                    var lineHeightPx = lineHeight <= 3 ? lineHeight * bareLineHeight : lineHeight;
                    var halfDelta = (lineHeightPx - bareLineHeight) * .5;
                    var effectiveMaxLines = maxLines;
                    if (maxHeight > 0) {
                        var maxFromHeight = Math.floor(maxHeight / lineHeightPx);
                        if (maxFromHeight < 1) maxFromHeight = 1;
                        if (effectiveMaxLines === 0 || maxFromHeight < effectiveMaxLines) effectiveMaxLines = maxFromHeight;
                    }
                    var _ref17 = maxWidth > 0 === true ? wrapText(measureText, text, fontFamily, maxWidth, letterSpacing, overflowSuffix, wordBreak, effectiveMaxLines) : measureLines(measureText, text.split("\n"), fontFamily, letterSpacing, effectiveMaxLines), _ref18 = _slicedToArray(_ref17, 3), lines = _ref18[0], remainingLines = _ref18[1], remainingText = _ref18[2];
                    var effectiveLineAmount = lines.length;
                    var effectiveMaxWidth = 0;
                    if (effectiveLineAmount > 0) {
                        effectiveMaxWidth = lines[0][1];
                        if (effectiveLineAmount > 1) for (var i = 1; i < effectiveLineAmount; i++) effectiveMaxWidth = Math.max(effectiveMaxWidth, lines[i][1]);
                    }
                    if (textAlign !== "left") for (var _i2 = 0; _i2 < effectiveLineAmount; _i2++) {
                        var line = lines[_i2];
                        var w = line[1];
                        line[3] = textAlign === "right" ? effectiveMaxWidth - w : (effectiveMaxWidth - w) / 2;
                    }
                    var effectiveMaxHeight = effectiveLineAmount * lineHeightPx;
                    var startY = halfDelta;
                    for (var _i3 = 0; _i3 < effectiveLineAmount; _i3++) {
                        var _line = lines[_i3];
                        _line[4] = startY + lineHeightPx * _i3;
                    }
                    return [ lines, remainingLines, remainingText, bareLineHeight, lineHeightPx, effectiveMaxWidth, effectiveMaxHeight ];
                };
                measureLines = function measureLines(measureText, lines, fontFamily, letterSpacing, maxLines) {
                    var measuredLines = [];
                    var remainingLines = maxLines > 0 ? maxLines : lines.length;
                    var i = 0;
                    while (remainingLines > 0) {
                        var line = lines[i];
                        i++;
                        remainingLines--;
                        if (line === void 0) continue;
                        var width = measureText(line, fontFamily, letterSpacing);
                        measuredLines.push([ line, width, false, 0, 0 ]);
                    }
                    return [ measuredLines, remainingLines, maxLines > 0 ? lines.length - measuredLines.length > 0 : false ];
                };
                wrapText = function wrapText(measureText, text, fontFamily, maxWidth, letterSpacing, overflowSuffix, wordBreak, maxLines) {
                    var lines = text.split("\n");
                    var wrappedLines = [];
                    var spaceWidth = measureText(" ", fontFamily, letterSpacing);
                    var overflowWidth = measureText(overflowSuffix, fontFamily, letterSpacing);
                    var wrappedLine = [];
                    var remainingLines = maxLines > 0 ? maxLines : 1e3;
                    var hasRemainingText = true;
                    var hasMaxLines = maxLines > 0;
                    for (var i = 0; i < lines.length; i++) {
                        var line = lines[i];
                        if (line === void 0) continue;
                        var _ref19 = line.length > 0 ? wrapLine(measureText, line, fontFamily, maxWidth, letterSpacing, spaceWidth, overflowSuffix, overflowWidth, wordBreak, remainingLines) : [ [ [ "", 0, false, 0, 0 ] ], remainingLines, i < lines.length - 1 ];
                        var _ref20 = _slicedToArray(_ref19, 3);
                        wrappedLine = _ref20[0];
                        remainingLines = _ref20[1];
                        hasRemainingText = _ref20[2];
                        remainingLines--;
                        for (var j = 0; j < wrappedLine.length; j++) wrappedLines.push(wrappedLine[j]);
                        if (hasMaxLines === true && remainingLines <= 0) {
                            var lastLine = wrappedLines[wrappedLines.length - 1];
                            if (i < lines.length - 1) {
                                if (lastLine[2] === false) {
                                    var _truncateLineEnd = truncateLineEnd(measureText, fontFamily, letterSpacing, lastLine[0], lastLine[1], "", maxWidth, overflowSuffix, overflowWidth), _truncateLineEnd2 = _slicedToArray(_truncateLineEnd, 2), _line2 = _truncateLineEnd2[0], lineWidth = _truncateLineEnd2[1];
                                    lastLine[0] = _line2;
                                    lastLine[1] = lineWidth;
                                    lastLine[2] = true;
                                }
                            }
                            break;
                        }
                    }
                    return [ wrappedLines, remainingLines, hasRemainingText ];
                };
                wrapLine = function wrapLine(measureText, line, fontFamily, maxWidth, letterSpacing, spaceWidth, overflowSuffix, overflowWidth, wordBreak, remainingLines) {
                    var words = line.split(spaceRegex);
                    var spaces = line.match(spaceRegex) || [];
                    var wrappedLines = [];
                    var currentLine = "";
                    var currentLineWidth = 0;
                    var hasRemainingText = true;
                    var wrapFn = getWrapStrategy(wordBreak);
                    var wordIdx = 0;
                    var spaceIdx = 0;
                    var pendingWord = "";
                    while ((pendingWord.length > 0 || wordIdx < words.length) && remainingLines > 0) {
                        var word = void 0;
                        var wordWidth = void 0;
                        var remainingWord = "";
                        if (pendingWord.length > 0) {
                            word = pendingWord;
                            pendingWord = "";
                        } else word = words[wordIdx++];
                        wordWidth = measureText(word, fontFamily, letterSpacing);
                        if (currentLineWidth === 0) {
                            if (wordWidth > maxWidth) {
                                remainingLines--;
                                var isLastLine = remainingLines === 0;
                                var lineTruncated = isLastLine;
                                var _ref21 = isLastLine ? truncateWord(measureText, word, wordWidth, maxWidth, fontFamily, letterSpacing, overflowSuffix, overflowWidth) : splitWord(measureText, word, wordWidth, maxWidth, fontFamily, letterSpacing);
                                var _ref22 = _slicedToArray(_ref21, 3);
                                word = _ref22[0];
                                remainingWord = _ref22[1];
                                wordWidth = _ref22[2];
                                if (remainingWord.length > 0) {
                                    if (word.length === 0) {
                                        if (overflowSuffix.length > 0) {
                                            word = overflowSuffix;
                                            wordWidth = overflowWidth;
                                        } else {
                                            word = remainingWord.charAt(0);
                                            if (word.length === 0) break;
                                            wordWidth = measureText(word, fontFamily, letterSpacing);
                                        }
                                        remainingWord = "";
                                        remainingLines = 0;
                                        lineTruncated = true;
                                    }
                                    pendingWord = remainingWord;
                                }
                                wrappedLines.push([ word, wordWidth, lineTruncated, 0, 0 ]);
                            } else if (wordWidth + spaceWidth >= maxWidth) {
                                remainingLines--;
                                wrappedLines.push([ word, wordWidth, false, 0, 0 ]);
                            } else {
                                currentLine = word;
                                currentLineWidth = wordWidth;
                            }
                            continue;
                        }
                        var space = spaces[spaceIdx++] || "";
                        var effectiveSpaceWidth = space === "​" ? 0 : spaceWidth;
                        var totalWidth = currentLineWidth + effectiveSpaceWidth + wordWidth;
                        if (totalWidth < maxWidth) {
                            currentLine += effectiveSpaceWidth > 0 ? space + word : word;
                            currentLineWidth = totalWidth;
                            continue;
                        }
                        remainingLines--;
                        if (totalWidth === maxWidth) {
                            currentLine += effectiveSpaceWidth > 0 ? space + word : word;
                            currentLineWidth = totalWidth;
                            wrappedLines.push([ currentLine, currentLineWidth, false, 0, 0 ]);
                            currentLine = "";
                            currentLineWidth = 0;
                            continue;
                        }
                        var _wrapFn = wrapFn(measureText, word, wordWidth, fontFamily, letterSpacing, wrappedLines, currentLine, currentLineWidth, remainingLines, remainingWord, maxWidth, space, spaceWidth, overflowSuffix, overflowWidth);
                        var _wrapFn2 = _slicedToArray(_wrapFn, 3);
                        currentLine = _wrapFn2[0];
                        currentLineWidth = _wrapFn2[1];
                        remainingWord = _wrapFn2[2];
                        if (remainingWord.length > 0) pendingWord = remainingWord;
                    }
                    if (currentLineWidth > 0 && remainingLines > 0) wrappedLines.push([ currentLine, currentLineWidth, false, 0, 0 ]);
                    return [ wrappedLines, remainingLines, hasRemainingText ];
                };
                getWrapStrategy = function getWrapStrategy(wordBreak) {
                    if (wordBreak === "break-word") return breakWord;
                    if (wordBreak === "break-all") return breakAll;
                    if (wordBreak === "overflow") return overflow;
                    return breakWord;
                };
                overflow = function overflow(measureText, word, wordWidth, fontFamily, letterSpacing, wrappedLines, currentLine, currentLineWidth, remainingLines, remainingWord, maxWidth, space, spaceWidth, overflowSuffix, overflowWidth) {
                    currentLine += space + word;
                    currentLineWidth += spaceWidth + wordWidth;
                    if (remainingLines === 0) {
                        currentLine += overflowSuffix;
                        currentLineWidth += overflowWidth;
                    }
                    wrappedLines.push([ currentLine, currentLineWidth, true, 0, 0 ]);
                    return [ "", 0, "" ];
                };
                breakWord = function breakWord(measureText, word, wordWidth, fontFamily, letterSpacing, wrappedLines, currentLine, currentLineWidth, remainingLines, remainingWord, maxWidth, space, spaceWidth, overflowSuffix, overflowWidth) {
                    remainingWord = word;
                    if (remainingLines === 0) {
                        var _truncateLineEnd3 = truncateLineEnd(measureText, fontFamily, letterSpacing, currentLine, currentLineWidth, remainingWord, maxWidth, overflowSuffix, overflowWidth);
                        var _truncateLineEnd4 = _slicedToArray(_truncateLineEnd3, 3);
                        currentLine = _truncateLineEnd4[0];
                        currentLineWidth = _truncateLineEnd4[1];
                        remainingWord = _truncateLineEnd4[2];
                        wrappedLines.push([ currentLine, currentLineWidth, true, 0, 0 ]);
                    } else {
                        wrappedLines.push([ currentLine, currentLineWidth, false, 0, 0 ]);
                        currentLine = "";
                        currentLineWidth = 0;
                    }
                    return [ currentLine, currentLineWidth, remainingWord ];
                };
                breakAll = function breakAll(measureText, word, wordWidth, fontFamily, letterSpacing, wrappedLines, currentLine, currentLineWidth, remainingLines, remainingWord, maxWidth, space, spaceWidth, overflowSuffix, overflowWidth) {
                    var remainingSpace = maxWidth - currentLineWidth;
                    if (currentLineWidth > 0) remainingSpace -= spaceWidth;
                    var truncate = remainingLines === 0;
                    var _ref23 = truncate ? truncateWord(measureText, word, wordWidth, remainingSpace, fontFamily, letterSpacing, overflowSuffix, overflowWidth) : splitWord(measureText, word, wordWidth, remainingSpace, fontFamily, letterSpacing);
                    var _ref24 = _slicedToArray(_ref23, 3);
                    word = _ref24[0];
                    remainingWord = _ref24[1];
                    wordWidth = _ref24[2];
                    currentLine += space + word;
                    currentLineWidth += spaceWidth + wordWidth;
                    wrappedLines.push([ currentLine, currentLineWidth, truncate, 0, 0 ]);
                    currentLine = "";
                    currentLineWidth = 0;
                    return [ currentLine, currentLineWidth, remainingWord ];
                };
                truncateLineEnd = function truncateLineEnd(measureText, fontFamily, letterSpacing, currentLine, currentLineWidth, remainingWord, maxWidth, overflowSuffix, overflowWidth) {
                    if (currentLineWidth + overflowWidth <= maxWidth) {
                        currentLine += overflowSuffix;
                        currentLineWidth += overflowWidth;
                        remainingWord = "";
                        return [ currentLine, currentLineWidth, remainingWord ];
                    }
                    var truncated = false;
                    for (var i = currentLine.length - 1; i > 0; i--) {
                        var charWidth = measureText(currentLine.charAt(i), fontFamily, letterSpacing);
                        currentLineWidth -= charWidth;
                        if (currentLineWidth + overflowWidth <= maxWidth) {
                            currentLine = currentLine.substring(0, i) + overflowSuffix;
                            currentLineWidth += overflowWidth;
                            remainingWord = currentLine.substring(i) + " " + remainingWord;
                            truncated = true;
                            break;
                        }
                    }
                    if (truncated === false) {
                        currentLine = overflowSuffix;
                        currentLineWidth = overflowWidth;
                        remainingWord = currentLine;
                    }
                    return [ currentLine, currentLineWidth, remainingWord ];
                };
                truncateWord = function truncateWord(measureText, word, wordWidth, maxWidth, fontFamily, letterSpacing, overflowSuffix, overflowWidth) {
                    var targetWidth = maxWidth - overflowWidth;
                    if (targetWidth <= 0) return [ "", word, 0 ];
                    if (wordWidth - targetWidth < wordWidth / 2 === false) {
                        var _currentWidth = wordWidth;
                        for (var i = word.length - 1; i > 0; i--) {
                            var charWidth = measureText(word.charAt(i), fontFamily, letterSpacing);
                            _currentWidth -= charWidth;
                            if (_currentWidth <= targetWidth) {
                                var remainingWord = word.substring(i);
                                return [ word.substring(0, i) + overflowSuffix, remainingWord, _currentWidth + overflowWidth ];
                            }
                        }
                        return [ overflowSuffix, word, overflowWidth ];
                    }
                    var currentWidth = 0;
                    for (var _i4 = 0; _i4 < word.length; _i4++) {
                        var _charWidth = measureText(word.charAt(_i4), fontFamily, letterSpacing);
                        if (currentWidth + _charWidth > targetWidth) {
                            var _remainingWord = word.substring(_i4);
                            return [ word.substring(0, _i4) + overflowSuffix, _remainingWord, currentWidth + overflowWidth ];
                        }
                        currentWidth += _charWidth;
                    }
                    return [ word + overflowSuffix, "", wordWidth + overflowWidth ];
                };
                splitWord = function splitWord(measureText, word, wordWidth, maxWidth, fontFamily, letterSpacing) {
                    if (maxWidth <= 0) return [ "", word, 0 ];
                    if (wordWidth - maxWidth < wordWidth / 2 === false) {
                        var _currentWidth2 = wordWidth;
                        for (var i = word.length - 1; i > 0; i--) {
                            var charWidth = measureText(word.charAt(i), fontFamily, letterSpacing);
                            _currentWidth2 -= charWidth;
                            if (_currentWidth2 <= maxWidth) {
                                var remainingWord = word.substring(i);
                                return [ word.substring(0, i), remainingWord, _currentWidth2 ];
                            }
                        }
                        return [ "", word, 0 ];
                    }
                    var currentWidth = 0;
                    for (var _i5 = 0; _i5 < word.length; _i5++) {
                        var _charWidth2 = measureText(word.charAt(_i5), fontFamily, letterSpacing);
                        if (currentWidth + _charWidth2 > maxWidth) {
                            var _remainingWord2 = word.substring(_i5);
                            return [ word.substring(0, _i5), _remainingWord2, currentWidth ];
                        }
                        currentWidth += _charWidth2;
                    }
                    return [ word, "", wordWidth ];
                };
                SdfFontHandler_exports = __exportAll({
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
                    getGlyph: function getGlyph() {
                        return _getGlyph;
                    },
                    getKerning: function getKerning() {
                        return _getKerning;
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
                loadFont$1 = function() {
                    var _ref25 = _asyncToGenerator(_regenerator().m(function _callee2(stage, options) {
                        var fontFamily, atlasUrl, atlasDataUrl, metrics, existingPromise, nwff, loadPromise;
                        return _regenerator().w(function(_context3) {
                            while (1) switch (_context3.n) {
                              case 0:
                                fontFamily = options.fontFamily, atlasUrl = options.atlasUrl, atlasDataUrl = options.atlasDataUrl, 
                                metrics = options.metrics;
                                if (!(fontCache$1.get(fontFamily) !== void 0)) {
                                    _context3.n = 1;
                                    break;
                                }
                                return _context3.a(2);

                              case 1:
                                existingPromise = fontLoadPromises$1.get(fontFamily);
                                if (!(existingPromise !== void 0)) {
                                    _context3.n = 2;
                                    break;
                                }
                                return _context3.a(2, existingPromise);

                              case 2:
                                if (!(atlasDataUrl === void 0)) {
                                    _context3.n = 3;
                                    break;
                                }
                                throw new Error("Atlas data URL must be provided for SDF font: ".concat(fontFamily));

                              case 3:
                                nwff = nodesWaitingForFont$1[fontFamily] = [];
                                loadPromise = _asyncToGenerator(_regenerator().m(function _callee() {
                                    var response, fontData;
                                    return _regenerator().w(function(_context2) {
                                        while (1) switch (_context2.n) {
                                          case 0:
                                            _context2.n = 1;
                                            return fetch(atlasDataUrl);

                                          case 1:
                                            response = _context2.v;
                                            if (response.ok) {
                                                _context2.n = 2;
                                                break;
                                            }
                                            throw new Error("Failed to load font data: ".concat(response.statusText));

                                          case 2:
                                            _context2.n = 3;
                                            return response.json();

                                          case 3:
                                            fontData = _context2.v;
                                            if (!(!fontData || !fontData.chars)) {
                                                _context2.n = 4;
                                                break;
                                            }
                                            throw new Error("Invalid SDF font data format");

                                          case 4:
                                            if (atlasUrl) {
                                                _context2.n = 5;
                                                break;
                                            }
                                            throw new Error("Atlas texture must be provided for SDF fonts");

                                          case 5:
                                            return _context2.a(2, new Promise(function(resolve, reject) {
                                                var atlasTexture = stage.txManager.createTexture("ImageTexture", {
                                                    src: atlasUrl,
                                                    premultiplyAlpha: false
                                                });
                                                atlasTexture.setRenderableOwner(fontFamily, true);
                                                atlasTexture.preventCleanup = true;
                                                if (atlasTexture.state === "loaded") {
                                                    processFontData$1(fontFamily, fontData, atlasTexture, metrics);
                                                    fontLoadPromises$1.delete(fontFamily);
                                                    for (var key in nwff) nwff[key].setUpdateType(UpdateType.Local);
                                                    delete nodesWaitingForFont$1[fontFamily];
                                                    return resolve();
                                                }
                                                atlasTexture.on("loaded", function() {
                                                    processFontData$1(fontFamily, fontData, atlasTexture, metrics);
                                                    fontLoadPromises$1.delete(fontFamily);
                                                    for (var _key5 in nwff) nwff[_key5].setUpdateType(UpdateType.Local);
                                                    delete nodesWaitingForFont$1[fontFamily];
                                                    resolve();
                                                });
                                                atlasTexture.on("failed", function(error) {
                                                    fontLoadPromises$1.delete(fontFamily);
                                                    if (fontCache$1[fontFamily]) delete fontCache$1[fontFamily];
                                                    console.error("Failed to load SDF font: ".concat(fontFamily), error);
                                                    reject(error);
                                                });
                                            }));
                                        }
                                    }, _callee);
                                }))();
                                fontLoadPromises$1.set(fontFamily, loadPromise);
                                return _context3.a(2, loadPromise);
                            }
                        }, _callee2);
                    }));
                    return function loadFont$1(_x, _x2) {
                        return _ref25.apply(this, arguments);
                    };
                }();
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
                init$3 = function init$3(_c) {
                    if (initialized$1 === true) return;
                    initialized$1 = true;
                };
                type$3 = "sdf";
                isFontLoaded$1 = function isFontLoaded$1(fontFamily) {
                    return fontCache$1.has(fontFamily);
                };
                getFontMetrics$1 = function getFontMetrics$1(fontFamily, fontSize) {
                    var out = normalizedMetrics$1.get(fontFamily);
                    if (out !== void 0) return out;
                    var metrics = fontCache$1.get(fontFamily).metrics;
                    return processFontMetrics$1(fontFamily, fontSize, metrics);
                };
                processFontMetrics$1 = function processFontMetrics$1(fontFamily, fontSize, metrics) {
                    var label = fontFamily + fontSize;
                    var normalized = normalizeFontMetrics(metrics, fontSize);
                    normalizedMetrics$1.set(label, normalized);
                    return normalized;
                };
                _getGlyph = function _getGlyph(fontFamily, codepoint) {
                    var cache = fontCache$1.get(fontFamily);
                    if (cache === void 0) return null;
                    return cache.glyphMap.get(codepoint) || cache.glyphMap.get(63) || null;
                };
                _getKerning = function _getKerning(fontFamily, firstGlyph, secondGlyph) {
                    var cache = fontCache$1.get(fontFamily);
                    if (cache === void 0) return 0;
                    var seconds = cache.kernings[secondGlyph];
                    return seconds ? seconds[firstGlyph] || 0 : 0;
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
                    if (text.length === 0) return 0;
                    var width = 0;
                    var prevGlyphId = 0;
                    var _iterator6 = _createForOfIteratorHelper(text), _step6;
                    try {
                        for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
                            var char = _step6.value;
                            var codepoint = char.codePointAt(0);
                            if (codepoint === void 0) continue;
                            if (hasZeroWidthSpace(char)) continue;
                            var glyph = _getGlyph(fontFamily, codepoint);
                            if (glyph === null) continue;
                            var advance = glyph.xadvance;
                            if (prevGlyphId !== 0) {
                                var kerning = _getKerning(fontFamily, prevGlyphId, glyph.id);
                                advance += kerning;
                            }
                            width += advance + letterSpacing;
                            prevGlyphId = glyph.id;
                        }
                    } catch (err) {
                        _iterator6.e(err);
                    } finally {
                        _iterator6.f();
                    }
                    return width;
                };
                TRANSPARENT_TEXTURE_DATA = new Uint8Array([ 0, 0, 0, 0 ]);
                WebGlCtxTexture = function(_CoreContextTexture) {
                    function WebGlCtxTexture(glw, memManager, textureSource) {
                        var _this4;
                        _this4 = _callSuper(this, WebGlCtxTexture, [ memManager, textureSource ]);
                        _this4.glw = void 0;
                        _this4._nativeCtxTexture = null;
                        _this4._w = 0;
                        _this4._h = 0;
                        _this4.txCoords = {
                            x1: 0,
                            y1: 0,
                            x2: 1,
                            y2: 1
                        };
                        _this4.glw = glw;
                        return _this4;
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
                        value: function() {
                            var _load = _asyncToGenerator(_regenerator().m(function _callee3() {
                                var error, _yield$this$onLoadReq, w, h, _error, _t;
                                return _regenerator().w(function(_context4) {
                                    while (1) switch (_context4.p = _context4.n) {
                                      case 0:
                                        if (!(this.state === "loading" || this.state === "loaded")) {
                                            _context4.n = 1;
                                            break;
                                        }
                                        return _context4.a(2, Promise.resolve());

                                      case 1:
                                        this.state = "loading";
                                        this.textureSource.setState("loading");
                                        this._nativeCtxTexture = this.createNativeCtxTexture();
                                        if (!(this._nativeCtxTexture === null)) {
                                            _context4.n = 2;
                                            break;
                                        }
                                        this.state = "failed";
                                        error = new Error("Could not create WebGL Texture");
                                        this.textureSource.setState("failed", error);
                                        console.error("Could not create WebGL Texture");
                                        throw error;

                                      case 2:
                                        _context4.p = 2;
                                        _context4.n = 3;
                                        return this.onLoadRequest();

                                      case 3:
                                        _yield$this$onLoadReq = _context4.v;
                                        w = _yield$this$onLoadReq.w;
                                        h = _yield$this$onLoadReq.h;
                                        if (!(this.state === "freed")) {
                                            _context4.n = 4;
                                            break;
                                        }
                                        return _context4.a(2);

                                      case 4:
                                        this.state = "loaded";
                                        this._w = w;
                                        this._h = h;
                                        this.textureSource.setState("loaded", {
                                            w: w,
                                            h: h
                                        });
                                        this.textureSource.freeTextureData();
                                        _context4.n = 7;
                                        break;

                                      case 5:
                                        _context4.p = 5;
                                        _t = _context4.v;
                                        if (!(this.state === "freed")) {
                                            _context4.n = 6;
                                            break;
                                        }
                                        return _context4.a(2);

                                      case 6:
                                        this.state = "failed";
                                        _error = _t instanceof Error ? _t : new Error(String(_t));
                                        this.textureSource.setState("failed", _error);
                                        this.textureSource.freeTextureData();
                                        console.error(_t);
                                        throw _error;

                                      case 7:
                                        return _context4.a(2);
                                    }
                                }, _callee3, this, [ [ 2, 5 ] ]);
                            }));
                            function load() {
                                return _load.apply(this, arguments);
                            }
                            return load;
                        }()
                    }, {
                        key: "onLoadRequest",
                        value: function() {
                            var _onLoadRequest = _asyncToGenerator(_regenerator().m(function _callee4() {
                                var glw, textureData, w, h, tdata, format, formatBytes, memoryPadding, isImageBitmap, unpackPremultiply, _textureData$premulti, _mipmaps$0$byteLength, _mipmaps$, mipmaps, _type, blockInfo;
                                return _regenerator().w(function(_context5) {
                                    while (1) switch (_context5.n) {
                                      case 0:
                                        glw = this.glw;
                                        textureData = this.textureSource.textureData;
                                        if (!(textureData === null || this._nativeCtxTexture === null)) {
                                            _context5.n = 1;
                                            break;
                                        }
                                        throw new Error("Texture data or native texture is null " + this.textureSource.type);

                                      case 1:
                                        glw.texImage2D(0, glw.RGBA, 1, 1, 0, glw.RGBA, glw.UNSIGNED_BYTE, null);
                                        this.setTextureMemUse(TRANSPARENT_TEXTURE_DATA.byteLength);
                                        w = 0;
                                        h = 0;
                                        glw.activeTexture(0);
                                        tdata = textureData.data;
                                        format = glw.RGBA;
                                        formatBytes = 4;
                                        memoryPadding = 1.1;
                                        isImageBitmap = typeof ImageBitmap !== "undefined" && tdata instanceof ImageBitmap;
                                        if (!(isImageBitmap || tdata instanceof ImageData || isHTMLImageElement(tdata) === true)) {
                                            _context5.n = 3;
                                            break;
                                        }
                                        w = tdata.width;
                                        h = tdata.height;
                                        glw.bindTexture(this._nativeCtxTexture);
                                        if (isImageBitmap) {
                                            unpackPremultiply = ((_textureData$premulti = textureData.premultiplied) !== null && _textureData$premulti !== void 0 ? _textureData$premulti : true) ? false : !!textureData.premultiplyAlpha;
                                        } else unpackPremultiply = !!textureData.premultiplyAlpha;
                                        glw.pixelStorei(glw.UNPACK_PREMULTIPLY_ALPHA_WEBGL, unpackPremultiply);
                                        glw.texImage2D(0, format, format, glw.UNSIGNED_BYTE, tdata);
                                        if (!(this.checkGLError() === true)) {
                                            _context5.n = 2;
                                            break;
                                        }
                                        return _context5.a(2, {
                                            w: 0,
                                            h: 0
                                        });

                                      case 2:
                                        this.setTextureMemUse(h * w * formatBytes * memoryPadding);
                                        _context5.n = 9;
                                        break;

                                      case 3:
                                        if (!(tdata === null)) {
                                            _context5.n = 4;
                                            break;
                                        }
                                        w = 0;
                                        h = 0;
                                        glw.bindTexture(this._nativeCtxTexture);
                                        glw.texImage2D(0, format, 1, 1, 0, format, glw.UNSIGNED_BYTE, TRANSPARENT_TEXTURE_DATA);
                                        this.setTextureMemUse(TRANSPARENT_TEXTURE_DATA.byteLength);
                                        _context5.n = 9;
                                        break;

                                      case 4:
                                        if (!("mipmaps" in tdata && tdata.mipmaps)) {
                                            _context5.n = 6;
                                            break;
                                        }
                                        mipmaps = tdata.mipmaps, _type = tdata.type, blockInfo = tdata.blockInfo;
                                        glw["upload" + _type](this._nativeCtxTexture, tdata);
                                        if (!(this.checkGLError() === true)) {
                                            _context5.n = 5;
                                            break;
                                        }
                                        return _context5.a(2, {
                                            w: 0,
                                            h: 0
                                        });

                                      case 5:
                                        w = tdata.w;
                                        h = tdata.h;
                                        this.txCoords.x2 = w / (Math.ceil(w / blockInfo.width) * blockInfo.width);
                                        this.txCoords.y2 = h / (Math.ceil(h / blockInfo.height) * blockInfo.height);
                                        this.setTextureMemUse((_mipmaps$0$byteLength = (_mipmaps$ = mipmaps[0]) == null ? void 0 : _mipmaps$.byteLength) !== null && _mipmaps$0$byteLength !== void 0 ? _mipmaps$0$byteLength : 0);
                                        _context5.n = 9;
                                        break;

                                      case 6:
                                        if (!(tdata && tdata instanceof Uint8Array)) {
                                            _context5.n = 8;
                                            break;
                                        }
                                        w = 1;
                                        h = 1;
                                        glw.bindTexture(this._nativeCtxTexture);
                                        glw.pixelStorei(glw.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !!textureData.premultiplyAlpha);
                                        glw.texImage2D(0, format, w, h, 0, format, glw.UNSIGNED_BYTE, tdata);
                                        if (!(this.checkGLError() === true)) {
                                            _context5.n = 7;
                                            break;
                                        }
                                        return _context5.a(2, {
                                            w: 0,
                                            h: 0
                                        });

                                      case 7:
                                        this.setTextureMemUse(w * h * formatBytes);
                                        _context5.n = 9;
                                        break;

                                      case 8:
                                        throw new Error("WebGlCoreCtxTexture.onLoadRequest: Unexpected textureData returned");

                                      case 9:
                                        return _context5.a(2, {
                                            w: w,
                                            h: h
                                        });
                                    }
                                }, _callee4, this);
                            }));
                            function onLoadRequest() {
                                return _onLoadRequest.apply(this, arguments);
                            }
                            return onLoadRequest;
                        }()
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
                        value: function() {
                            var _onLoadRequest2 = _asyncToGenerator(_regenerator().m(function _callee5() {
                                var props;
                                return _regenerator().w(function(_context6) {
                                    while (1) switch (_context6.n) {
                                      case 0:
                                        props = this.textureSource.textureData;
                                        assertTruthy(props, "SubTexture must have texture data");
                                        if (!(props.data instanceof Uint8Array)) {
                                            _context6.n = 1;
                                            break;
                                        }
                                        return _context6.a(2, {
                                            w: 1,
                                            h: 1
                                        });

                                      case 1:
                                        return _context6.a(2, this.extractDimensions(props.data));
                                    }
                                }, _callee5, this);
                            }));
                            function onLoadRequest() {
                                return _onLoadRequest2.apply(this, arguments);
                            }
                            return onLoadRequest;
                        }()
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
                WebGlCtxRenderTexture = function(_WebGlCtxTexture2) {
                    function WebGlCtxRenderTexture(glw, memManager, textureSource) {
                        var _this5;
                        _this5 = _callSuper(this, WebGlCtxRenderTexture, [ glw, memManager, textureSource ]);
                        _this5.framebuffer = null;
                        _this5.txCoords = {
                            x1: 0,
                            y1: 1,
                            x2: 1,
                            y2: 0
                        };
                        return _this5;
                    }
                    _inherits(WebGlCtxRenderTexture, _WebGlCtxTexture2);
                    return _createClass(WebGlCtxRenderTexture, [ {
                        key: "onLoadRequest",
                        value: function() {
                            var _onLoadRequest3 = _asyncToGenerator(_regenerator().m(function _callee6() {
                                var glw, nativeTexture, _this$textureSource, w, h;
                                return _regenerator().w(function(_context7) {
                                    while (1) switch (_context7.n) {
                                      case 0:
                                        glw = this.glw;
                                        nativeTexture = this._nativeCtxTexture = this.createNativeCtxTexture();
                                        if (nativeTexture) {
                                            _context7.n = 1;
                                            break;
                                        }
                                        throw new Error("Failed to create native texture for RenderTexture");

                                      case 1:
                                        _this$textureSource = this.textureSource, w = _this$textureSource.w, h = _this$textureSource.h;
                                        this.framebuffer = glw.createFramebuffer();
                                        glw.texImage2D(0, glw.RGBA, w, h, 0, glw.RGBA, glw.UNSIGNED_BYTE, null);
                                        this.setTextureMemUse(w * h * 4);
                                        glw.bindFramebuffer(this.framebuffer);
                                        glw.framebufferTexture2D(glw.COLOR_ATTACHMENT0, nativeTexture, 0);
                                        glw.bindFramebuffer(null);
                                        return _context7.a(2, {
                                            w: w,
                                            h: h
                                        });
                                    }
                                }, _callee6, this);
                            }));
                            function onLoadRequest() {
                                return _onLoadRequest3.apply(this, arguments);
                            }
                            return onLoadRequest;
                        }()
                    }, {
                        key: "free",
                        value: function free() {
                            _superPropGet(WebGlCtxRenderTexture, "free", this, 3)([]);
                            this.glw.deleteFramebuffer(this.framebuffer);
                            this.framebuffer = null;
                        }
                    } ]);
                }(WebGlCtxTexture);
                StencilClip = {
                    vertex: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    attribute vec2 a_position;\n    attribute vec2 a_nodeCoords;\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n\n    varying vec2 v_nodeCoords;\n\n    void main() {\n      vec2 normalized = a_position * u_pixelRatio;\n      vec2 screenSpace = vec2(2.0 / u_resolution.x, -2.0 / u_resolution.y);\n\n      v_nodeCoords = a_nodeCoords;\n\n      gl_Position = vec4(normalized.x * screenSpace.x - 1.0, normalized.y * -abs(screenSpace.y) + 1.0, 0.0, 1.0);\n      gl_Position.y = -sign(screenSpace.y) * gl_Position.y;\n    }\n  ",
                    fragment: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    uniform vec2 u_dimensions;\n    uniform float u_radius;\n    uniform float u_pixelRatio;\n\n    varying vec2 v_nodeCoords;\n\n    float roundedBox(vec2 p, vec2 s, float r) {\n      vec2 q = abs(p) - s + r;\n      return (min(max(q.x, q.y), 0.0) + length(max(q, 0.0))) - r;\n    }\n\n    void main() {\n      vec2 halfDimensions = u_dimensions * 0.5;\n      vec2 boxUv = v_nodeCoords.xy * u_dimensions - halfDimensions;\n      float boxDist = roundedBox(boxUv, halfDimensions, u_radius);\n\n      float edgeWidth = 1.0 / u_pixelRatio;\n      float alpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, boxDist);\n\n      if (alpha < 0.5) {\n        discard;\n      }\n\n      gl_FragColor = vec4(0.0);\n    }\n  "
                };
                StencilClipRenderOp = _createClass(function StencilClipRenderOp() {
                    this.kind = 0;
                    this.x = 0;
                    this.y = 0;
                    this.w = 0;
                    this.h = 0;
                    this.clipRadius = 0;
                    this.pixelRatio = 1;
                    this.canvasHeight = 0;
                    this.parentHasRenderTexture = false;
                    this.parentFramebufferH = 0;
                    this.stencilRef = 0;
                });
                WebGlRenderer = function(_CoreRenderer) {
                    function WebGlRenderer(stage) {
                        var _this6;
                        _this6 = _callSuper(this, WebGlRenderer, [ stage ]);
                        _this6.glw = void 0;
                        _this6.system = void 0;
                        _this6.quadBuffer = void 0;
                        _this6.fQuadBuffer = void 0;
                        _this6.uiQuadBuffer = void 0;
                        _this6.renderOps = [];
                        _this6.curBufferIdx = 0;
                        _this6.curRenderOp = null;
                        _this6.rttNodes = [];
                        _this6.activeRttNode = null;
                        _this6.defaultTextureCoords = {
                            x1: 0,
                            y1: 0,
                            x2: 1,
                            y2: 1
                        };
                        _this6.defaultShaderNode = null;
                        _this6.quadBufferCollection = void 0;
                        _this6.stencilClipProgram = null;
                        _this6.stencilDepth = 0;
                        _this6.stencilQuadBufferCollection = null;
                        _this6.stencilOpPool = [];
                        _this6.stencilOpPoolIdx = 0;
                        _this6._stencilScratchBuffer = new ArrayBuffer(32 * Float32Array.BYTES_PER_ELEMENT);
                        _this6._stencilScratchF = new Float32Array(_this6._stencilScratchBuffer);
                        _this6._stencilScratchU = new Uint32Array(_this6._stencilScratchBuffer);
                        _this6.clearColor = {
                            raw: 0,
                            normalized: [ 0, 0, 0, 0 ]
                        };
                        _this6.quadBufferUsage = 0;
                        _this6.numQuadsRendered = 0;
                        _this6.renderToTextureActive = false;
                        _this6.quadBuffer = new ArrayBuffer(stage.options.quadBufferSize);
                        _this6.fQuadBuffer = new Float32Array(_this6.quadBuffer);
                        _this6.uiQuadBuffer = new Uint32Array(_this6.quadBuffer);
                        _this6.mode = "webgl";
                        var platform = stage.platform;
                        var canvas = platform.canvas;
                        var glw = _this6.glw = platform.createContext();
                        glw.viewport(0, 0, canvas.width, canvas.height);
                        _this6.updateClearColor(stage.clearColor);
                        glw.setBlend(true);
                        glw.blendFunc(glw.ONE, glw.ONE_MINUS_SRC_ALPHA);
                        createIndexBuffer(glw, stage.bufferMemory);
                        _this6.system = {
                            parameters: getWebGlParameters(_this6.glw),
                            extensions: getWebGlExtensions(_this6.glw)
                        };
                        var quadBuffer = glw.createBuffer();
                        var stride = 8 * Float32Array.BYTES_PER_ELEMENT;
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
                                    type: glw.FLOAT,
                                    normalized: false,
                                    stride: stride,
                                    offset: 2 * Float32Array.BYTES_PER_ELEMENT
                                },
                                a_color: {
                                    name: "a_color",
                                    size: 4,
                                    type: glw.UNSIGNED_BYTE,
                                    normalized: true,
                                    stride: stride,
                                    offset: 4 * Float32Array.BYTES_PER_ELEMENT
                                },
                                a_textureIndex: {
                                    name: "a_textureIndex",
                                    size: 1,
                                    type: glw.FLOAT,
                                    normalized: false,
                                    stride: stride,
                                    offset: 5 * Float32Array.BYTES_PER_ELEMENT
                                },
                                a_nodeCoords: {
                                    name: "a_nodeCoords",
                                    size: 2,
                                    type: glw.FLOAT,
                                    normalized: false,
                                    stride: stride,
                                    offset: 6 * Float32Array.BYTES_PER_ELEMENT
                                }
                            }
                        } ]);
                        var stencilBuf = glw.createBuffer();
                        var stencilStride = 8 * Float32Array.BYTES_PER_ELEMENT;
                        glw.arrayBufferData(stencilBuf, new Float32Array(32), glw.DYNAMIC_DRAW);
                        _this6.stencilQuadBufferCollection = new BufferCollection([ {
                            buffer: stencilBuf,
                            attributes: {
                                a_position: {
                                    name: "a_position",
                                    size: 2,
                                    type: glw.FLOAT,
                                    normalized: false,
                                    stride: stencilStride,
                                    offset: 0
                                },
                                a_nodeCoords: {
                                    name: "a_nodeCoords",
                                    size: 2,
                                    type: glw.FLOAT,
                                    normalized: false,
                                    stride: stencilStride,
                                    offset: 6 * Float32Array.BYTES_PER_ELEMENT
                                }
                            }
                        } ]);
                        return _this6;
                    }
                    _inherits(WebGlRenderer, _CoreRenderer);
                    return _createClass(WebGlRenderer, [ {
                        key: "reset",
                        value: function reset() {
                            var glw = this.glw;
                            this.curBufferIdx = 0;
                            this.curRenderOp = null;
                            this.renderOps.length = 0;
                            this.stencilOpPoolIdx = 0;
                            this.stencilDepth = 0;
                            glw.setScissorTest(false);
                            glw.setStencilTest(false);
                            if (this.stage.options.enableClear !== false) glw.clear();
                        }
                    }, {
                        key: "createShaderProgram",
                        value: function createShaderProgram(shaderType, props) {
                            return new WebGlShaderProgram(this, shaderType, props);
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
                            if (textureSource instanceof SubTexture) return new WebGlCtxSubTexture(this.glw, this.stage.txMemManager, textureSource); else if (textureSource instanceof RenderTexture) return new WebGlCtxRenderTexture(this.glw, this.stage.txMemManager, textureSource);
                            return new WebGlCtxTexture(this.glw, this.stage.txMemManager, textureSource);
                        }
                    }, {
                        key: "addQuad",
                        value: function addQuad(node) {
                            var f = this.fQuadBuffer;
                            var u = this.uiQuadBuffer;
                            var i = this.curBufferIdx;
                            if (this.reuseRenderOp(node) === false) this.newRenderOp(node, i);
                            var tx = node.props.texture || this.stage.defaultTexture;
                            if (tx.type === TextureType.subTexture) tx = tx.parentTexture;
                            var ctx = tx.ctxTexture;
                            if (ctx === void 0) return;
                            var tidx = this.curRenderOp.addTexture(ctx);
                            if (tidx === 4294967295) {
                                this.newRenderOp(node, i);
                                tidx = this.curRenderOp.addTexture(ctx);
                            }
                            var rc = node.renderCoords;
                            var tc = node.textureCoords || this.defaultTextureCoords;
                            var cTl = node.premultipliedColorTl;
                            var cTr = node.premultipliedColorTr;
                            var cBl = node.premultipliedColorBl;
                            var cBr = node.premultipliedColorBr;
                            f[i] = rc.x1;
                            f[i + 1] = rc.y1;
                            f[i + 2] = tc.x1;
                            f[i + 3] = tc.y1;
                            u[i + 4] = cTl;
                            f[i + 5] = tidx;
                            f[i + 6] = 0;
                            f[i + 7] = 0;
                            f[i + 8] = rc.x2;
                            f[i + 9] = rc.y2;
                            f[i + 10] = tc.x2;
                            f[i + 11] = tc.y1;
                            u[i + 12] = cTr;
                            f[i + 13] = tidx;
                            f[i + 14] = 1;
                            f[i + 15] = 0;
                            f[i + 16] = rc.x4;
                            f[i + 17] = rc.y4;
                            f[i + 18] = tc.x1;
                            f[i + 19] = tc.y2;
                            u[i + 20] = cBl;
                            f[i + 21] = tidx;
                            f[i + 22] = 0;
                            f[i + 23] = 1;
                            f[i + 24] = rc.x3;
                            f[i + 25] = rc.y3;
                            f[i + 26] = tc.x2;
                            f[i + 27] = tc.y2;
                            u[i + 28] = cBr;
                            f[i + 29] = tidx;
                            f[i + 30] = 1;
                            f[i + 31] = 1;
                            this.curRenderOp.numQuads++;
                            this.curBufferIdx = i + 32;
                        }
                    }, {
                        key: "newRenderOp",
                        value: function newRenderOp(node, bufferIdx) {
                            var curRenderOp = node;
                            curRenderOp.renderOpBufferIdx = bufferIdx;
                            curRenderOp.numQuads = 0;
                            curRenderOp.renderOpTextures.length = 0;
                            curRenderOp.stencilDepth = this.stencilDepth;
                            this.curRenderOp = curRenderOp;
                            this.renderOps.push(curRenderOp);
                        }
                    }, {
                        key: "reuseRenderOp",
                        value: function reuseRenderOp(node) {
                            var curRenderOp = this.curRenderOp;
                            if (curRenderOp === null) return false;
                            if (curRenderOp instanceof StencilClipRenderOp) return false;
                            if (curRenderOp.stencilDepth !== this.stencilDepth) return false;
                            var shader = node.props.shader;
                            var curShader = curRenderOp.shader;
                            if ((curShader == null ? void 0 : curShader.shaderKey) !== (shader == null ? void 0 : shader.shaderKey)) return false;
                            if (compareRect(curRenderOp.clippingRect, node.clippingRect) === false) return false;
                            var curRtt = curRenderOp.rtt;
                            if (curRenderOp.parentHasRenderTexture !== node.parentHasRenderTexture || curRtt !== (node.props.rtt === true)) return false;
                            if (node.parentHasRenderTexture === true && node.parentFramebufferDimensions !== null) {
                                var curFbDims = curRenderOp.isCoreNode ? curRenderOp.parentFramebufferDimensions : curRenderOp.framebufferDimensions;
                                if (curFbDims === null || curFbDims.w !== node.parentFramebufferDimensions.w || curFbDims.h !== node.parentFramebufferDimensions.h) return false;
                            }
                            if ((curShader == null ? void 0 : curShader.shaderKey) === "default" && (shader == null ? void 0 : shader.shaderKey) === "default") return true;
                            if ((curShader == null ? void 0 : curShader.program.reuseRenderOp(node, curRenderOp)) === false) return false;
                            return true;
                        }
                    }, {
                        key: "addRenderOp",
                        value: function addRenderOp(renderable) {
                            this.renderOps.push(renderable);
                            this.curRenderOp = null;
                        }
                    }, {
                        key: "render",
                        value: function render() {
                            var _surface = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "screen";
                            var glw = this.glw, quadBuffer = this.quadBuffer;
                            var arr = new Float32Array(quadBuffer, 0, this.curBufferIdx);
                            var buffer = this.quadBufferCollection.getBuffer("a_position") || null;
                            glw.arrayBufferData(buffer, arr, glw.STATIC_DRAW);
                            for (var i = 0, length = this.renderOps.length; i < length; i++) {
                                var op = this.renderOps[i];
                                if (op instanceof StencilClipRenderOp) {
                                    if (op.kind === 0) this.drawStencilBegin(op); else this.drawStencilEnd(op);
                                } else op.draw(this);
                            }
                            this.quadBufferUsage = this.curBufferIdx * arr.BYTES_PER_ELEMENT;
                            var QUAD_SIZE_IN_BYTES = 4 * (8 * arr.BYTES_PER_ELEMENT);
                            this.numQuadsRendered = this.quadBufferUsage / QUAD_SIZE_IN_BYTES;
                        }
                    }, {
                        key: "getQuadCount",
                        value: function getQuadCount() {
                            return this.numQuadsRendered;
                        }
                    }, {
                        key: "renderToTexture",
                        value: function renderToTexture(node) {
                            for (var i = 0; i < this.rttNodes.length; i++) if (this.rttNodes[i] === node) return;
                            this.insertRTTNodeInOrder(node);
                        }
                    }, {
                        key: "insertRTTNodeInOrder",
                        value: function insertRTTNodeInOrder(node) {
                            var insertIndex = this.rttNodes.length;
                            var rttNodes = this.rttNodes;
                            var indexMap = new Map;
                            for (var i = 0; i < rttNodes.length; i++) indexMap.set(rttNodes[i].id, i);
                            var currentNode = node;
                            while (currentNode.parent !== null) {
                                var parentIndex = indexMap.get(currentNode.parent.id);
                                if (parentIndex !== void 0) {
                                    insertIndex = parentIndex;
                                    break;
                                }
                                currentNode = currentNode.parent;
                            }
                            var maxChildIndex = this.findMaxChildRTTIndex(node, indexMap);
                            if (maxChildIndex !== -1) insertIndex = Math.max(insertIndex, maxChildIndex + 1);
                            this.rttNodes.splice(insertIndex, 0, node);
                        }
                    }, {
                        key: "findMaxChildRTTIndex",
                        value: function findMaxChildRTTIndex(node, indexMap) {
                            var maxIndex = -1;
                            var stack = [ node ];
                            while (stack.length !== 0) {
                                var current = stack.pop();
                                var idx = indexMap.get(current.id);
                                if (idx !== void 0 && idx > maxIndex) maxIndex = idx;
                                var _children = current.children;
                                for (var i = 0; i < _children.length; i++) stack.push(_children[i]);
                            }
                            return maxIndex;
                        }
                    }, {
                        key: "renderRTTNodes",
                        value: function renderRTTNodes() {
                            var glw = this.glw;
                            for (var i = 0; i < this.rttNodes.length; i++) {
                                var node = this.rttNodes[i];
                                if (node === void 0 || node.hasRTTupdates === false) continue;
                                if (node.worldAlpha === 0 || node.renderState === CoreNodeRenderState.OutOfBounds) continue;
                                if (node.texture === null || node.texture.state !== "loaded") continue;
                                this.activeRttNode = node;
                                var ctxTexture = node.texture.ctxTexture;
                                this.renderToTextureActive = true;
                                glw.bindFramebuffer(ctxTexture.framebuffer);
                                glw.viewport(0, 0, ctxTexture.w, ctxTexture.h);
                                glw.clearColor(0, 0, 0, 0);
                                glw.clear();
                                for (var _i6 = 0; _i6 < node.children.length; _i6++) {
                                    var child = node.children[_i6];
                                    if (child === void 0) continue;
                                    this.stage.addQuads(child);
                                    child.hasRTTupdates = false;
                                }
                                this.render();
                                this.renderOps.length = 0;
                                node.hasRTTupdates = false;
                            }
                            var clearColor = this.clearColor.normalized;
                            glw.clearColor(clearColor[0], clearColor[1], clearColor[2], clearColor[3]);
                            glw.bindFramebuffer(null);
                            glw.viewport(0, 0, this.glw.canvas.width, this.glw.canvas.height);
                            this.renderToTextureActive = false;
                        }
                    }, {
                        key: "updateViewport",
                        value: function updateViewport() {
                            this.glw.viewport(0, 0, this.glw.canvas.width, this.glw.canvas.height);
                        }
                    }, {
                        key: "removeRTTNode",
                        value: function removeRTTNode(node) {
                            var index = this.rttNodes.indexOf(node);
                            if (index === -1) return;
                            this.rttNodes.splice(index, 1);
                        }
                    }, {
                        key: "getBufferInfo",
                        value: function getBufferInfo() {
                            return {
                                totalAvailable: this.stage.options.quadBufferSize,
                                totalUsed: this.quadBufferUsage
                            };
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
                                    x1 = (1 - desiredSize / dimensions.w) * ((_resizeMode$clipX = resizeMode.clipX) !== null && _resizeMode$clipX !== void 0 ? _resizeMode$clipX : .5);
                                    x2 = x1 + desiredSize / dimensions.w;
                                }
                                if (scaleY < scale) {
                                    var _resizeMode$clipY;
                                    var _desiredSize = precision * node.props.h;
                                    y1 = (1 - _desiredSize / dimensions.h) * ((_resizeMode$clipY = resizeMode.clipY) !== null && _resizeMode$clipY !== void 0 ? _resizeMode$clipY : .5);
                                    y2 = y1 + _desiredSize / dimensions.h;
                                }
                            }
                            if (textureOptions.flipX === true) {
                                var _ref27 = [ x2, x1 ];
                                x1 = _ref27[0];
                                x2 = _ref27[1];
                            }
                            if (textureOptions.flipY === true) {
                                var _ref28 = [ y2, y1 ];
                                y1 = _ref28[0];
                                y2 = _ref28[1];
                            }
                            return {
                                x1: x1,
                                y1: y1,
                                x2: x2,
                                y2: y2
                            };
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
                    }, {
                        key: "getStencilClipProgram",
                        value: function getStencilClipProgram() {
                            if (this.stencilClipProgram !== null) return this.stencilClipProgram;
                            this.stencilClipProgram = new WebGlShaderProgram(this, StencilClip, {});
                            return this.stencilClipProgram;
                        }
                    }, {
                        key: "allocStencilOp",
                        value: function allocStencilOp() {
                            var pool = this.stencilOpPool;
                            var idx = this.stencilOpPoolIdx;
                            if (idx >= pool.length) pool.push(new StencilClipRenderOp);
                            this.stencilOpPoolIdx = idx + 1;
                            return pool[idx];
                        }
                    }, {
                        key: "beginRoundedClip",
                        value: function beginRoundedClip(node) {
                            var cr = node.clippingRect;
                            var pixelRatio = node.parentHasRenderTexture ? 1 : this.stage.pixelRatio;
                            var canvas = this.stage.platform.canvas;
                            this.stencilDepth++;
                            var op = this.allocStencilOp();
                            op.kind = 0;
                            op.x = Math.round(cr.x * pixelRatio);
                            op.w = Math.round(cr.w * pixelRatio);
                            op.h = Math.round(cr.h * pixelRatio);
                            op.y = Math.round(canvas.height - op.h - cr.y * pixelRatio);
                            op.clipRadius = cr.clipRadius * pixelRatio;
                            op.pixelRatio = pixelRatio;
                            op.canvasHeight = canvas.height;
                            op.parentHasRenderTexture = node.parentHasRenderTexture;
                            op.parentFramebufferH = node.parentHasRenderTexture && node.parentFramebufferDimensions !== null ? node.parentFramebufferDimensions.h : 0;
                            op.stencilRef = this.stencilDepth;
                            this.curRenderOp = null;
                            this.renderOps.push(op);
                        }
                    }, {
                        key: "endRoundedClip",
                        value: function endRoundedClip(node) {
                            var op = this.allocStencilOp();
                            op.kind = 1;
                            op.stencilRef = this.stencilDepth;
                            this.stencilDepth--;
                            this.renderOps.push(op);
                        }
                    }, {
                        key: "drawStencilBegin",
                        value: function drawStencilBegin(op) {
                            var glw = this.glw;
                            this.getStencilClipProgram().bindForStencil(this.stencilQuadBufferCollection);
                            if (op.parentHasRenderTexture === true && op.parentFramebufferH !== 0) {
                                glw.uniform1f("u_pixelRatio", 1);
                                glw.uniform2f("u_resolution", op.w, op.parentFramebufferH);
                            } else {
                                glw.uniform1f("u_pixelRatio", op.pixelRatio);
                                glw.uniform2f("u_resolution", glw.canvas.width, glw.canvas.height);
                            }
                            glw.uniform2f("u_dimensions", op.w / op.pixelRatio, op.h / op.pixelRatio);
                            glw.uniform1f("u_radius", op.clipRadius / op.pixelRatio);
                            glw.setScissorTest(true);
                            glw.scissor(op.x, op.y, op.w, op.h);
                            glw.setStencilTest(true);
                            glw.stencilMask(255);
                            glw.stencilFunc(glw.ALWAYS, op.stencilRef, 255);
                            glw.stencilOp(glw.KEEP, glw.KEEP, glw.REPLACE);
                            glw.colorMask(false, false, false, false);
                            var f = this._stencilScratchF;
                            var u = this._stencilScratchU;
                            var x1 = op.x / op.pixelRatio;
                            var y1 = op.canvasHeight / op.pixelRatio - op.y / op.pixelRatio - op.h / op.pixelRatio;
                            var x2 = x1 + op.w / op.pixelRatio;
                            var y2 = y1 + op.h / op.pixelRatio;
                            var white = 4294967295;
                            f[0] = x1;
                            f[1] = y1;
                            f[2] = 0;
                            f[3] = 0;
                            u[4] = white;
                            f[5] = 0;
                            f[6] = 0;
                            f[7] = 0;
                            f[8] = x2;
                            f[9] = y1;
                            f[10] = 1;
                            f[11] = 0;
                            u[12] = white;
                            f[13] = 0;
                            f[14] = 1;
                            f[15] = 0;
                            f[16] = x1;
                            f[17] = y2;
                            f[18] = 0;
                            f[19] = 1;
                            u[20] = white;
                            f[21] = 0;
                            f[22] = 0;
                            f[23] = 1;
                            f[24] = x2;
                            f[25] = y2;
                            f[26] = 1;
                            f[27] = 1;
                            u[28] = white;
                            f[29] = 0;
                            f[30] = 1;
                            f[31] = 1;
                            var stencilBuf = this.stencilQuadBufferCollection.getBuffer("a_position") || null;
                            glw.arrayBufferData(stencilBuf, this._stencilScratchF, glw.DYNAMIC_DRAW);
                            glw.drawElements(glw.TRIANGLES, 6, glw.UNSIGNED_SHORT, 0);
                            glw.colorMask(true, true, true, true);
                            glw.stencilMask(0);
                            glw.stencilFunc(glw.EQUAL, op.stencilRef, 255);
                            glw.stencilOp(glw.KEEP, glw.KEEP, glw.KEEP);
                            this.stage.shManager.releaseShader();
                        }
                    }, {
                        key: "drawStencilEnd",
                        value: function drawStencilEnd(op) {
                            var glw = this.glw;
                            if (op.stencilRef <= 1) {
                                glw.setStencilTest(false);
                                glw.stencilMask(255);
                            } else {
                                glw.stencilMask(255);
                                glw.stencilFunc(glw.EQUAL, op.stencilRef - 1, 255);
                                glw.stencilOp(glw.KEEP, glw.KEEP, glw.KEEP);
                                glw.stencilMask(0);
                            }
                        }
                    }, {
                        key: "destroy",
                        value: function destroy() {
                            var loseCtx = this.glw.getExtension("WEBGL_lose_context");
                            loseCtx == null || loseCtx.loseContext();
                        }
                    }, {
                        key: "deleteBuffer",
                        value: function deleteBuffer(buffer) {
                            this.glw.deleteBuffer(buffer);
                        }
                    } ]);
                }(CoreRenderer);
                IDENTITY_MATRIX_3x3 = new Float32Array([ 1, 0, 0, 0, 1, 0, 0, 0, 1 ]);
                SdfPlain = {
                    props: {
                        transform: IDENTITY_MATRIX_3x3,
                        color: 4294967295,
                        size: 16,
                        distanceRange: 1
                    },
                    onSdfBind: function onSdfBind(props) {
                        this.uniformMatrix3fv("u_transform", props.transform);
                        this.uniform4fa("u_color", getNormalizedRgbaComponents(props.color));
                        this.uniform1f("u_size", props.size);
                        this.uniform1f("u_distanceRange", props.distanceRange);
                    },
                    vertex: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n    attribute vec2 a_position;\n    attribute vec2 a_textureCoords;\n\n    uniform vec2 u_resolution;\n    uniform mat3 u_transform;\n    uniform float u_pixelRatio;\n    uniform float u_size;\n    uniform float u_distanceRange;\n\n    varying vec2 v_texcoord;\n    varying float v_scaledDistRange;\n\n    void main() {\n      vec2 scrolledPosition = a_position * u_size;\n      vec2 transformedPosition = (u_transform * vec3(scrolledPosition, 1)).xy;\n\n      // Calculate screen space with pixel ratio\n      vec2 screenSpace = (transformedPosition * u_pixelRatio / u_resolution * 2.0 - 1.0) * vec2(1, -1);\n\n      gl_Position = vec4(screenSpace, 0.0, 1.0);\n      v_texcoord = a_textureCoords;\n      v_scaledDistRange = u_distanceRange * u_pixelRatio;\n    }\n  ",
                    fragment: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n    uniform vec4 u_color;\n    uniform sampler2D u_texture;\n\n    varying vec2 v_texcoord;\n    varying float v_scaledDistRange;\n\n    float median(float r, float g, float b) {\n        return clamp(b, min(r, g), max(r, g));\n    }\n\n    void main() {\n        vec3 sample = texture2D(u_texture, v_texcoord).rgb;\n        float sigDist = v_scaledDistRange * (median(sample.r, sample.g, sample.b) - 0.5);\n        float opacity = clamp(sigDist + 0.5, 0.0, 1.0) * u_color.a;\n\n        // IMPORTANT: We must premultiply the color by the alpha value before returning it.\n        gl_FragColor = vec4(u_color.r * opacity, u_color.g * opacity, u_color.b * opacity, opacity);\n    }\n  "
                };
                Sdf = {
                    props: {
                        transform: IDENTITY_MATRIX_3x3,
                        color: 4294967295,
                        size: 16,
                        distanceRange: 1
                    },
                    onSdfBind: function onSdfBind(props) {
                        this.uniformMatrix3fv("u_transform", props.transform);
                        this.uniform4fa("u_color", getNormalizedRgbaComponents(props.color));
                        this.uniform1f("u_size", props.size);
                        this.uniform1f("u_distanceRange", props.distanceRange);
                    },
                    vertex: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n    // an attribute is an input (in) to a vertex shader.\n    // It will receive data from a buffer\n    attribute vec2 a_position;\n    attribute vec2 a_textureCoords;\n    // Per-vertex span color (UNSIGNED_BYTE normalized). White = no override.\n    attribute vec4 a_color;\n    // Per-vertex style flag: 0.0 = normal, 1.0 = bold.\n    attribute float a_style;\n\n    uniform vec2 u_resolution;\n    uniform mat3 u_transform;\n    uniform float u_pixelRatio;\n    uniform float u_size;\n    uniform float u_distanceRange;\n\n    varying vec2 v_texcoord;\n    varying float v_scaledDistRange;\n    varying vec4 v_color;\n    varying float v_style;\n\n    void main() {\n      vec2 scrolledPosition = a_position * u_size;\n      vec2 transformedPosition = (u_transform * vec3(scrolledPosition, 1)).xy;\n\n      // Calculate screen space with pixel ratio\n      vec2 screenSpace = (transformedPosition * u_pixelRatio / u_resolution * 2.0 - 1.0) * vec2(1, -1);\n\n      gl_Position = vec4(screenSpace, 0.0, 1.0);\n      v_texcoord = a_textureCoords;\n      v_scaledDistRange = u_distanceRange * u_pixelRatio;\n      v_color = a_color;\n      v_style = a_style;\n    }\n  ",
                    fragment: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n    uniform vec4 u_color;\n    uniform sampler2D u_texture;\n\n    varying vec2 v_texcoord;\n    varying float v_scaledDistRange;\n    varying vec4 v_color;\n    varying float v_style;\n\n    float median(float r, float g, float b) {\n        return clamp(b, min(r, g), max(r, g));\n    }\n\n    void main() {\n        // Decoration quads use u = -1.0 as a sentinel for solid-fill (no SDF lookup).\n        // step(0.5, -u): 1.0 when u <= -0.5 — safely catches only the -1.0 sentinel.\n        // Cannot use step(0.0, -u) because that also catches u = 0.0, which is a\n        // valid atlas coordinate for any glyph packed at the left edge of the atlas.\n        float isSolid = step(0.5, -v_texcoord.x);\n\n        // SDF path — runs unconditionally; result is masked out for solid quads via\n        // mix() below. Sampling with u = -1.0 is safe: the atlas uses CLAMP_TO_EDGE\n        // so it returns the leftmost texel column, but the result is zeroed by mix().\n        vec3 s = texture2D(u_texture, v_texcoord).rgb;\n        // Bold shifts the SDF threshold down by 0.05, expanding glyph edges.\n        // v_style: 0.0 = normal, 1.0 = bold.\n        float threshold = 0.5 - v_style * 0.05;\n        float sigDist = v_scaledDistRange * (median(s.r, s.g, s.b) - threshold);\n        // u_color carries node tint + worldAlpha; v_color carries span color override.\n        float opacity = clamp(sigDist + threshold, 0.0, 1.0) * u_color.a * v_color.a;\n        vec3 col = u_color.rgb * v_color.rgb;\n        // IMPORTANT: premultiply before returning.\n        vec4 sdfResult = vec4(col * opacity, opacity);\n\n        // Solid fill path — premultiplied alpha.\n        vec4 fc = u_color * v_color;\n        vec4 solidResult = vec4(fc.rgb * fc.a, fc.a);\n\n        gl_FragColor = mix(sdfResult, solidResult, isSolid);\n    }\n  "
                };
                CC_LBRACKET = 91;
                CC_SLASH = 47;
                CC_ZERO = 48;
                CC_LC_X = 120;
                CC_UC_X = 88;
                CC_EQUALS = 61;
                TAG_BOLD = 1;
                TAG_ITALIC = 2;
                TAG_UNDERLINE = 3;
                TAG_STRIKETHROUGH = 4;
                TAG_COLOR = 5;
                MAX_SPANS = 64;
                MAX_STACK = 8;
                namedColors = Object.create(null);
                namedColors["red"] = 4278190335;
                namedColors["green"] = 16711935;
                namedColors["blue"] = 65535;
                namedColors["white"] = 4294967295;
                namedColors["black"] = 255;
                namedColors["yellow"] = 4294902015;
                namedColors["cyan"] = 16777215;
                namedColors["magenta"] = 4278255615;
                namedColors["orange"] = 4286578943;
                namedColors["purple"] = 2147516671;
                namedColors["pink"] = 4285117695;
                namedColors["brown"] = 2771004159;
                namedColors["gray"] = 2155905279;
                namedColors["grey"] = 2155905279;
                RichSpan = _createClass(function RichSpan() {
                    this.start = 0;
                    this.end = 0;
                    this.bold = false;
                    this.italic = false;
                    this.underline = false;
                    this.strikethrough = false;
                    this.color = 0;
                });
                ParseResult = function() {
                    function ParseResult() {
                        this.stripped = "";
                        this.spanCount = 0;
                        this.spans = void 0;
                        this.spans = new Array(MAX_SPANS);
                        for (var i = 0; i < MAX_SPANS; i++) this.spans[i] = new RichSpan;
                    }
                    return _createClass(ParseResult, [ {
                        key: "reset",
                        value: function reset() {
                            this.stripped = "";
                            this.spanCount = 0;
                        }
                    } ]);
                }();
                StyleFrame = function() {
                    function StyleFrame() {
                        this.bold = false;
                        this.italic = false;
                        this.underline = false;
                        this.strikethrough = false;
                        this.color = 0;
                        this.tagType = 0;
                    }
                    return _createClass(StyleFrame, [ {
                        key: "copyFrom",
                        value: function copyFrom(src) {
                            this.bold = src.bold;
                            this.italic = src.italic;
                            this.underline = src.underline;
                            this.strikethrough = src.strikethrough;
                            this.color = src.color;
                            this.tagType = src.tagType;
                        }
                    } ]);
                }();
                _stack = new Array(MAX_STACK);
                for (var _i = 0; _i < MAX_STACK; _i++) _stack[_i] = new StyleFrame;
                hexDigitVal = function hexDigitVal(code) {
                    if (code >= 48 && code <= 57) return code - 48;
                    if (code >= 97 && code <= 102) return code - 87;
                    if (code >= 65 && code <= 70) return code - 55;
                    return -1;
                };
                parseColorValue = function parseColorValue(text, start, tagEnd) {
                    if (start >= tagEnd) return -1;
                    if (text.charCodeAt(start) === CC_ZERO) {
                        var secondChar = text.charCodeAt(start + 1);
                        if (secondChar === CC_LC_X || secondChar === CC_UC_X) {
                            if (tagEnd - start - 2 === 8) {
                                var v = 0;
                                for (var k = 2; k < 10; k++) {
                                    var d = hexDigitVal(text.charCodeAt(start + k));
                                    if (d === -1) return -1;
                                    v = v * 16 + d;
                                }
                                return v >>> 0;
                            }
                        }
                    }
                    return -1;
                };
                identifyTag = function identifyTag(text, pos, tagEnd) {
                    var firstChar = text.charCodeAt(pos);
                    var tagLen = tagEnd - pos;
                    if (tagLen === 1) {
                        if (firstChar === 98) return TAG_BOLD;
                        if (firstChar === 105) return TAG_ITALIC;
                        if (firstChar === 117) return TAG_UNDERLINE;
                        if (firstChar === 115) return TAG_STRIKETHROUGH;
                        return 0;
                    }
                    if (firstChar === 99 && text.charCodeAt(pos + 1) === 111 && text.charCodeAt(pos + 2) === 108 && text.charCodeAt(pos + 3) === 111 && text.charCodeAt(pos + 4) === 114 && (tagLen === 5 || text.charCodeAt(pos + 5) === CC_EQUALS)) return TAG_COLOR;
                    return 0;
                };
                applyTag = function applyTag(tagType, isClosing, stackDepth, colorValue) {
                    if (isClosing === true) {
                        for (var k = stackDepth; k > 0; k--) if (_stack[k].tagType === tagType) return k - 1;
                        return stackDepth;
                    }
                    if (stackDepth >= MAX_STACK - 1) return stackDepth;
                    var next = stackDepth + 1;
                    _stack[next].copyFrom(_stack[stackDepth]);
                    _stack[next].tagType = tagType;
                    if (tagType === TAG_BOLD) _stack[next].bold = true; else if (tagType === TAG_ITALIC) _stack[next].italic = true; else if (tagType === TAG_UNDERLINE) _stack[next].underline = true; else if (tagType === TAG_STRIKETHROUGH) _stack[next].strikethrough = true; else if (tagType === TAG_COLOR) _stack[next].color = colorValue;
                    return next;
                };
                flushSpan = function flushSpan(spans, spanCount, start, end, style) {
                    if (end <= start) return spanCount;
                    if (spanCount >= MAX_SPANS) return spanCount;
                    var span = spans[spanCount];
                    span.start = start;
                    span.end = end;
                    span.bold = style.bold;
                    span.italic = style.italic;
                    span.underline = style.underline;
                    span.strikethrough = style.strikethrough;
                    span.color = style.color;
                    return spanCount + 1;
                };
                stylesEqual = function stylesEqual(a, b) {
                    return a.bold === b.bold && a.italic === b.italic && a.underline === b.underline && a.strikethrough === b.strikethrough && a.color === b.color;
                };
                parseRichText = function parseRichText(text, out) {
                    out.reset();
                    var textLen = text.length;
                    if (textLen === 0) return;
                    var base = _stack[0];
                    base.bold = false;
                    base.italic = false;
                    base.underline = false;
                    base.strikethrough = false;
                    base.color = 0;
                    base.tagType = 0;
                    var stackDepth = 0;
                    var spanStart = 0;
                    var spanCount = 0;
                    var stripped = "";
                    var runStart = 0;
                    var i = 0;
                    while (i < textLen) {
                        if (text.charCodeAt(i) !== CC_LBRACKET) {
                            i++;
                            continue;
                        }
                        var tagEnd = text.indexOf("]", i + 1);
                        if (tagEnd === -1) {
                            i++;
                            continue;
                        }
                        var pos = i + 1;
                        var isClosing = false;
                        if (text.charCodeAt(pos) === CC_SLASH) {
                            isClosing = true;
                            pos++;
                        }
                        if (pos >= tagEnd) {
                            i++;
                            continue;
                        }
                        var tagType = identifyTag(text, pos, tagEnd);
                        if (tagType === 0) {
                            i++;
                            continue;
                        }
                        var colorValue = 0;
                        if (tagType === TAG_COLOR && isClosing === false) {
                            colorValue = parseColorValue(text, pos + 6, tagEnd);
                            if (colorValue === -1) {
                                i++;
                                continue;
                            }
                        }
                        stripped += text.substring(runStart, i);
                        runStart = tagEnd + 1;
                        var prevDepth = stackDepth;
                        stackDepth = applyTag(tagType, isClosing, stackDepth, colorValue);
                        if (stylesEqual(_stack[prevDepth], _stack[stackDepth]) === false) {
                            spanCount = flushSpan(out.spans, spanCount, spanStart, stripped.length, _stack[prevDepth]);
                            spanStart = stripped.length;
                        }
                        i = tagEnd + 1;
                    }
                    stripped += text.substring(runStart, textLen);
                    spanCount = flushSpan(out.spans, spanCount, spanStart, stripped.length, _stack[stackDepth]);
                    out.stripped = stripped;
                    out.spanCount = spanCount;
                };
                FLOATS_PER_VERTEX_PLAIN = 4;
                FLOATS_PER_VERTEX_RICH = 6;
                VERTICES_PER_GLYPH = 6;
                FLOATS_PER_QUAD_PLAIN = VERTICES_PER_GLYPH * FLOATS_PER_VERTEX_PLAIN;
                FLOATS_PER_QUAD_RICH = VERTICES_PER_GLYPH * FLOATS_PER_VERTEX_RICH;
                ITALIC_SHEAR = Math.tan(14 * Math.PI / 180);
                _PACKED_WHITE = 4294967295;
                _richTextResult$1 = new ParseResult;
                type$2 = "sdf";
                sdfShader = null;
                sdfPlainShader = null;
                renderer = null;
                init$2 = function init$2(stage) {
                    init$3();
                    stage.shManager.registerShaderType("Sdf", Sdf);
                    stage.shManager.registerShaderType("SdfPlain", SdfPlain);
                    sdfShader = stage.shManager.createShader("Sdf");
                    sdfPlainShader = stage.shManager.createShader("SdfPlain");
                    renderer = stage.renderer;
                };
                font$1 = SdfFontHandler_exports;
                renderInfoCache$1 = new Map;
                _packColor = function _packColor(rgba) {
                    var r = rgba >>> 24 & 255;
                    var g = rgba >>> 16 & 255;
                    var b = rgba >>> 8 & 255;
                    var a = rgba & 255;
                    return (r | g << 8 | b << 16 | a << 24) >>> 0;
                };
                renderText$1 = function renderText$1(props) {
                    var cacheKey = getLayoutCacheKey(props);
                    var renderInfo = renderInfoCache$1.get(cacheKey);
                    if (renderInfo !== void 0) return renderInfo;
                    var layout = generateTextLayout(props, _getFontData(props.fontFamily));
                    renderInfo = {
                        type: type$2,
                        layout: layout,
                        width: layout.width,
                        height: layout.height,
                        remainingLines: layout.remainingLines,
                        hasRemainingText: layout.hasRemainingText,
                        atlasTexture: _getAtlas(props.fontFamily).ctxTexture
                    };
                    renderInfoCache$1.set(cacheKey, renderInfo);
                    return renderInfo;
                };
                renderQuads$1 = function renderQuads$1(textNode) {
                    textNode.props.shader = textNode.textProps.richText === true ? sdfShader : sdfPlainShader;
                    renderer.addRenderOp(textNode);
                };
                _writeDecoQuad = function _writeDecoQuad(vb, u32, di, x1, x2, y1, y2, color, shear1, shear2) {
                    vb[di] = x1 + shear1;
                    vb[di + 1] = y1;
                    vb[di + 2] = -1;
                    vb[di + 3] = 0;
                    u32[di + 4] = color;
                    vb[di + 5] = 0;
                    di += 6;
                    vb[di] = x2 + shear1;
                    vb[di + 1] = y1;
                    vb[di + 2] = -1;
                    vb[di + 3] = 0;
                    u32[di + 4] = color;
                    vb[di + 5] = 0;
                    di += 6;
                    vb[di] = x1 + shear2;
                    vb[di + 1] = y2;
                    vb[di + 2] = -1;
                    vb[di + 3] = 0;
                    u32[di + 4] = color;
                    vb[di + 5] = 0;
                    di += 6;
                    vb[di] = x2 + shear1;
                    vb[di + 1] = y1;
                    vb[di + 2] = -1;
                    vb[di + 3] = 0;
                    u32[di + 4] = color;
                    vb[di + 5] = 0;
                    di += 6;
                    vb[di] = x2 + shear2;
                    vb[di + 1] = y2;
                    vb[di + 2] = -1;
                    vb[di + 3] = 0;
                    u32[di + 4] = color;
                    vb[di + 5] = 0;
                    di += 6;
                    vb[di] = x1 + shear2;
                    vb[di + 1] = y2;
                    vb[di + 2] = -1;
                    vb[di + 3] = 0;
                    u32[di + 4] = color;
                    vb[di + 5] = 0;
                    di += 6;
                    return di;
                };
                generateTextLayout = function generateTextLayout(props, fontCache) {
                    var fontSize = props.fontSize;
                    var fontFamily = props.fontFamily;
                    var lineHeight = props.lineHeight;
                    var metrics = getFontMetrics$1(fontFamily, fontSize);
                    var fontData = fontCache.data;
                    var commonFontData = fontData.common;
                    var designFontSize = fontData.info.size;
                    var atlasWidth = commonFontData.scaleW;
                    var atlasHeight = commonFontData.scaleH;
                    var fontScale = fontSize / designFontSize;
                    var letterSpacing = props.letterSpacing / fontScale;
                    var maxWidth = props.maxWidth / fontScale;
                    var maxHeight = props.maxHeight;
                    var richText = props.richText === true;
                    var layoutText = props.text;
                    if (richText === true) {
                        parseRichText(props.text, _richTextResult$1);
                        layoutText = _richTextResult$1.stripped;
                    }
                    var _mapTextLayout = mapTextLayout(measureText$1, metrics, layoutText, props.textAlign, fontFamily, lineHeight, props.overflowSuffix, props.wordBreak, letterSpacing, props.maxLines, maxWidth, maxHeight), _mapTextLayout2 = _slicedToArray(_mapTextLayout, 7), lines = _mapTextLayout2[0], remainingLines = _mapTextLayout2[1], hasRemainingText = _mapTextLayout2[2], bareLineHeight = _mapTextLayout2[3], lineHeightPx = _mapTextLayout2[4], effectiveWidth = _mapTextLayout2[5], effectiveHeight = _mapTextLayout2[6];
                    var base = commonFontData.base;
                    var decoThickness = Math.max(1, Math.round(fontSize / 20)) / fontScale;
                    var decoUnderlineOffset = base + Math.max(1 / fontScale, Math.round(fontSize * .1) / fontScale);
                    var decoStrikeOffset = Math.round(base * .75);
                    var lineAmount = lines.length;
                    if (richText === false) {
                        var _glyphCount = 0;
                        for (var i = 0; i < lineAmount; i++) {
                            var textLine = lines[i][0];
                            var _iterator7 = _createForOfIteratorHelper(textLine), _step7;
                            try {
                                for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
                                    var char = _step7.value;
                                    if (hasZeroWidthSpace(char) === true) continue;
                                    var codepoint = char.codePointAt(0);
                                    if (codepoint === void 0) continue;
                                    if (_getGlyph(fontFamily, codepoint) === null) continue;
                                    _glyphCount++;
                                }
                            } catch (err) {
                                _iterator7.e(err);
                            } finally {
                                _iterator7.f();
                            }
                        }
                        var _vertexBuffer = new Float32Array(_glyphCount * FLOATS_PER_QUAD_PLAIN);
                        var bi = 0;
                        var _currentX = 0;
                        var _currentY = 0;
                        for (var _i7 = 0; _i7 < lineAmount; _i7++) {
                            var line = lines[_i7];
                            var _textLine = line[0];
                            var prevGlyphId = 0;
                            _currentX = line[3];
                            _currentY = line[4] / fontScale;
                            var _iterator8 = _createForOfIteratorHelper(_textLine), _step8;
                            try {
                                for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
                                    var _char = _step8.value;
                                    if (hasZeroWidthSpace(_char) === true) continue;
                                    var _codepoint = _char.codePointAt(0);
                                    if (_codepoint === void 0) continue;
                                    var glyph = _getGlyph(fontFamily, _codepoint);
                                    if (glyph === null) continue;
                                    if (prevGlyphId !== 0) _currentX += _getKerning(fontFamily, prevGlyphId, glyph.id);
                                    var x1 = _currentX + glyph.xoffset;
                                    var y1 = _currentY + glyph.yoffset;
                                    var x2 = x1 + glyph.width;
                                    var y2 = y1 + glyph.height;
                                    var u1 = glyph.x / atlasWidth;
                                    var v1 = glyph.y / atlasHeight;
                                    var u2 = u1 + glyph.width / atlasWidth;
                                    var v2 = v1 + glyph.height / atlasHeight;
                                    _vertexBuffer[bi++] = x1;
                                    _vertexBuffer[bi++] = y1;
                                    _vertexBuffer[bi++] = u1;
                                    _vertexBuffer[bi++] = v1;
                                    _vertexBuffer[bi++] = x2;
                                    _vertexBuffer[bi++] = y1;
                                    _vertexBuffer[bi++] = u2;
                                    _vertexBuffer[bi++] = v1;
                                    _vertexBuffer[bi++] = x1;
                                    _vertexBuffer[bi++] = y2;
                                    _vertexBuffer[bi++] = u1;
                                    _vertexBuffer[bi++] = v2;
                                    _vertexBuffer[bi++] = x2;
                                    _vertexBuffer[bi++] = y1;
                                    _vertexBuffer[bi++] = u2;
                                    _vertexBuffer[bi++] = v1;
                                    _vertexBuffer[bi++] = x2;
                                    _vertexBuffer[bi++] = y2;
                                    _vertexBuffer[bi++] = u2;
                                    _vertexBuffer[bi++] = v2;
                                    _vertexBuffer[bi++] = x1;
                                    _vertexBuffer[bi++] = y2;
                                    _vertexBuffer[bi++] = u1;
                                    _vertexBuffer[bi++] = v2;
                                    _currentX += glyph.xadvance + letterSpacing;
                                    prevGlyphId = glyph.id;
                                }
                            } catch (err) {
                                _iterator8.e(err);
                            } finally {
                                _iterator8.f();
                            }
                        }
                        return {
                            vertexBuffer: _vertexBuffer,
                            glyphCount: _glyphCount,
                            totalQuadCount: _glyphCount,
                            richText: false,
                            distanceRange: fontScale * fontData.distanceField.distanceRange,
                            width: effectiveWidth * fontScale,
                            height: effectiveHeight,
                            fontScale: fontScale,
                            lineHeight: lineHeightPx,
                            fontFamily: fontFamily,
                            remainingLines: remainingLines,
                            hasRemainingText: hasRemainingText
                        };
                    }
                    var glyphCount = 0;
                    var decoQuadCount = 0;
                    var strippedPos = 0;
                    var curSpanIdx = 0;
                    for (var _i8 = 0; _i8 < lineAmount; _i8++) {
                        var _textLine2 = lines[_i8][0];
                        var _iterator9 = _createForOfIteratorHelper(_textLine2), _step9;
                        try {
                            for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
                                var _char2 = _step9.value;
                                if (hasZeroWidthSpace(_char2) === true) {
                                    strippedPos++;
                                    continue;
                                }
                                var _codepoint2 = _char2.codePointAt(0);
                                if (_codepoint2 === void 0) {
                                    strippedPos++;
                                    continue;
                                }
                                if (_getGlyph(fontFamily, _codepoint2) === null) {
                                    strippedPos++;
                                    continue;
                                }
                                glyphCount++;
                                while (curSpanIdx < _richTextResult$1.spanCount - 1 && strippedPos >= _richTextResult$1.spans[curSpanIdx].end) curSpanIdx++;
                                var span = _richTextResult$1.spans[curSpanIdx];
                                if (span.underline === true) decoQuadCount++;
                                if (span.strikethrough === true) decoQuadCount++;
                                strippedPos++;
                            }
                        } catch (err) {
                            _iterator9.e(err);
                        } finally {
                            _iterator9.f();
                        }
                    }
                    var totalQuadCount = glyphCount + decoQuadCount;
                    var vertexBuffer = new Float32Array(totalQuadCount * FLOATS_PER_QUAD_RICH);
                    var u32Buffer = new Uint32Array(vertexBuffer.buffer);
                    var gi = 0;
                    var di = glyphCount * FLOATS_PER_QUAD_RICH;
                    strippedPos = 0;
                    curSpanIdx = 0;
                    var currentX = 0;
                    var currentY = 0;
                    for (var _i9 = 0; _i9 < lineAmount; _i9++) {
                        var _line3 = lines[_i9];
                        var _textLine3 = _line3[0];
                        var _prevGlyphId = 0;
                        currentX = _line3[3];
                        currentY = _line3[4] / fontScale;
                        var baseline = currentY + base;
                        var _iterator0 = _createForOfIteratorHelper(_textLine3), _step0;
                        try {
                            for (_iterator0.s(); !(_step0 = _iterator0.n()).done; ) {
                                var _char3 = _step0.value;
                                if (hasZeroWidthSpace(_char3) === true) {
                                    strippedPos++;
                                    continue;
                                }
                                var _codepoint3 = _char3.codePointAt(0);
                                if (_codepoint3 === void 0) {
                                    strippedPos++;
                                    continue;
                                }
                                var _glyph = _getGlyph(fontFamily, _codepoint3);
                                if (_glyph === null) {
                                    strippedPos++;
                                    continue;
                                }
                                var packedColor = _PACKED_WHITE;
                                var spanUnderline = false;
                                var spanStrikethrough = false;
                                var spanBold = false;
                                var spanItalic = false;
                                while (curSpanIdx < _richTextResult$1.spanCount - 1 && strippedPos >= _richTextResult$1.spans[curSpanIdx].end) curSpanIdx++;
                                var _span = _richTextResult$1.spans[curSpanIdx];
                                packedColor = _span.color !== 0 ? _packColor(_span.color) : _PACKED_WHITE;
                                spanUnderline = _span.underline;
                                spanStrikethrough = _span.strikethrough;
                                spanBold = _span.bold;
                                spanItalic = _span.italic;
                                if (_prevGlyphId !== 0) currentX += _getKerning(fontFamily, _prevGlyphId, _glyph.id);
                                var _x3 = currentX + _glyph.xoffset;
                                var _y = currentY + _glyph.yoffset;
                                var _x4 = _x3 + _glyph.width;
                                var _y2 = _y + _glyph.height;
                                var _u = _glyph.x / atlasWidth;
                                var _v = _glyph.y / atlasHeight;
                                var _u2 = _u + _glyph.width / atlasWidth;
                                var _v2 = _v + _glyph.height / atlasHeight;
                                var decoX1 = currentX;
                                var advance = _glyph.xadvance + letterSpacing;
                                var shearTop = spanItalic ? (baseline - _y) * ITALIC_SHEAR : 0;
                                var shearBot = spanItalic ? (baseline - _y2) * ITALIC_SHEAR : 0;
                                var style = spanBold ? 1 : 0;
                                vertexBuffer[gi] = _x3 + shearTop;
                                vertexBuffer[gi + 1] = _y;
                                vertexBuffer[gi + 2] = _u;
                                vertexBuffer[gi + 3] = _v;
                                u32Buffer[gi + 4] = packedColor;
                                vertexBuffer[gi + 5] = style;
                                gi += 6;
                                vertexBuffer[gi] = _x4 + shearTop;
                                vertexBuffer[gi + 1] = _y;
                                vertexBuffer[gi + 2] = _u2;
                                vertexBuffer[gi + 3] = _v;
                                u32Buffer[gi + 4] = packedColor;
                                vertexBuffer[gi + 5] = style;
                                gi += 6;
                                vertexBuffer[gi] = _x3 + shearBot;
                                vertexBuffer[gi + 1] = _y2;
                                vertexBuffer[gi + 2] = _u;
                                vertexBuffer[gi + 3] = _v2;
                                u32Buffer[gi + 4] = packedColor;
                                vertexBuffer[gi + 5] = style;
                                gi += 6;
                                vertexBuffer[gi] = _x4 + shearTop;
                                vertexBuffer[gi + 1] = _y;
                                vertexBuffer[gi + 2] = _u2;
                                vertexBuffer[gi + 3] = _v;
                                u32Buffer[gi + 4] = packedColor;
                                vertexBuffer[gi + 5] = style;
                                gi += 6;
                                vertexBuffer[gi] = _x4 + shearBot;
                                vertexBuffer[gi + 1] = _y2;
                                vertexBuffer[gi + 2] = _u2;
                                vertexBuffer[gi + 3] = _v2;
                                u32Buffer[gi + 4] = packedColor;
                                vertexBuffer[gi + 5] = style;
                                gi += 6;
                                vertexBuffer[gi] = _x3 + shearBot;
                                vertexBuffer[gi + 1] = _y2;
                                vertexBuffer[gi + 2] = _u;
                                vertexBuffer[gi + 3] = _v2;
                                u32Buffer[gi + 4] = packedColor;
                                vertexBuffer[gi + 5] = style;
                                gi += 6;
                                currentX += advance;
                                _prevGlyphId = _glyph.id;
                                if (spanUnderline === true) {
                                    var dy1 = currentY + decoUnderlineOffset;
                                    var dy2 = dy1 + decoThickness;
                                    var dShear1 = spanItalic ? (baseline - dy1) * ITALIC_SHEAR : 0;
                                    var dShear2 = spanItalic ? (baseline - dy2) * ITALIC_SHEAR : 0;
                                    di = _writeDecoQuad(vertexBuffer, u32Buffer, di, decoX1, decoX1 + advance, dy1, dy2, packedColor, dShear1, dShear2);
                                }
                                if (spanStrikethrough === true) {
                                    var _dy = currentY + decoStrikeOffset;
                                    var _dy2 = _dy + decoThickness;
                                    var _dShear = spanItalic ? (baseline - _dy) * ITALIC_SHEAR : 0;
                                    var _dShear2 = spanItalic ? (baseline - _dy2) * ITALIC_SHEAR : 0;
                                    di = _writeDecoQuad(vertexBuffer, u32Buffer, di, decoX1, decoX1 + advance, _dy, _dy2, packedColor, _dShear, _dShear2);
                                }
                                if (richText === true) strippedPos++;
                            }
                        } catch (err) {
                            _iterator0.e(err);
                        } finally {
                            _iterator0.f();
                        }
                    }
                    return {
                        vertexBuffer: vertexBuffer,
                        glyphCount: glyphCount,
                        totalQuadCount: totalQuadCount,
                        richText: true,
                        distanceRange: fontScale * fontData.distanceField.distanceRange,
                        width: effectiveWidth * fontScale,
                        height: effectiveHeight,
                        fontScale: fontScale,
                        lineHeight: lineHeightPx,
                        fontFamily: fontFamily,
                        remainingLines: remainingLines,
                        hasRemainingText: hasRemainingText
                    };
                };
                clearCache$1 = function clearCache$1() {
                    renderInfoCache$1.clear();
                };
                SdfTextRenderer = {
                    type: type$2,
                    font: font$1,
                    renderText: renderText$1,
                    renderQuads: renderQuads$1,
                    init: init$2,
                    clearCache: clearCache$1
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
                _loadFont = function() {
                    var _ref29 = _asyncToGenerator(_regenerator().m(function _callee7(stage, options) {
                        var fontFamily, fontUrl, metrics, existingPromise, nwff, loadPromise;
                        return _regenerator().w(function(_context8) {
                            while (1) switch (_context8.n) {
                              case 0:
                                fontFamily = options.fontFamily, fontUrl = options.fontUrl, metrics = options.metrics;
                                if (!(fontCache.has(fontFamily) === true)) {
                                    _context8.n = 1;
                                    break;
                                }
                                return _context8.a(2);

                              case 1:
                                existingPromise = fontLoadPromises.get(fontFamily);
                                if (!(existingPromise !== void 0)) {
                                    _context8.n = 2;
                                    break;
                                }
                                return _context8.a(2, existingPromise);

                              case 2:
                                nwff = nodesWaitingForFont[fontFamily] = [];
                                loadPromise = stage.platform.loadFontFace(fontFamily, fontUrl).then(function(loadedFont) {
                                    processFontData(fontFamily, loadedFont !== null && loadedFont !== void 0 ? loadedFont : void 0, metrics);
                                    fontLoadPromises.delete(fontFamily);
                                    for (var key in nwff) nwff[key].setUpdateType(UpdateType.Local);
                                    delete nodesWaitingForFont[fontFamily];
                                }).catch(function(error) {
                                    fontLoadPromises.delete(fontFamily);
                                    console.error("Failed to load font: ".concat(fontFamily), error);
                                    throw error;
                                });
                                fontLoadPromises.set(fontFamily, loadPromise);
                                return _context8.a(2, loadPromise);
                            }
                        }, _callee7);
                    }));
                    return function _loadFont(_x5, _x6) {
                        return _ref29.apply(this, arguments);
                    };
                }();
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
                    if (metrics === void 0) metrics = _calculateFontMetrics(fontFamily);
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
                    if (hasZeroWidthSpace(text) === false) return measureContext$1.measureText(text).width + letterSpacing * text.length;
                    return text.split("").reduce(function(acc, char) {
                        if (hasZeroWidthSpace(char) === true) return acc;
                        return acc + measureContext$1.measureText(char).width + letterSpacing;
                    }, 0);
                };
                WHITE = {
                    isWhite: true,
                    a: 1,
                    r: 255,
                    g: 255,
                    b: 255
                };
                parsedArgbColors = new Map;
                parsedRgbaColors = new Map;
                type = "canvas";
                font = CanvasFontHandler_exports;
                canvas = null;
                context = null;
                measureCanvas = null;
                measureContext = null;
                renderInfoCache = new Map;
                _richTextResult = new ParseResult;
                init = function init(stage) {
                    var dpr = stage.options.devicePhysicalPixelRatio;
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
                    assertTruthy(canvas, "Canvas is not initialized");
                    assertTruthy(context, "Canvas context is not available");
                    assertTruthy(measureContext, "Canvas measureContext is not available");
                    var cacheKey = getLayoutCacheKey(props);
                    var layout = renderInfoCache.get(cacheKey);
                    if (layout !== void 0) return layout;
                    var text = props.text, fontFamily = props.fontFamily, fontStyle = props.fontStyle, fontSize = props.fontSize, textAlign = props.textAlign, maxLines = props.maxLines, lineHeight = props.lineHeight, overflowSuffix = props.overflowSuffix, maxWidth = props.maxWidth, maxHeight = props.maxHeight, wordBreak = props.wordBreak, richText = props.richText, color = props.color;
                    var layoutText = text;
                    if (richText === true) {
                        parseRichText(text, _richTextResult);
                        layoutText = _richTextResult.stripped;
                    }
                    var baseFont = "".concat(fontStyle, " ").concat(fontSize, "px Unknown, ").concat(fontFamily);
                    measureContext.font = baseFont;
                    measureContext.textBaseline = "hanging";
                    var metrics = _getFontMetrics(fontFamily, fontSize);
                    var letterSpacing = props.letterSpacing;
                    var _mapTextLayout3 = mapTextLayout(_measureText, metrics, layoutText, textAlign, fontFamily, lineHeight, overflowSuffix, wordBreak, letterSpacing, maxLines, maxWidth, maxHeight), _mapTextLayout4 = _slicedToArray(_mapTextLayout3, 7), lines = _mapTextLayout4[0], remainingLines = _mapTextLayout4[1], hasRemainingText = _mapTextLayout4[2], _bareLineHeight = _mapTextLayout4[3], _lineHeightPx = _mapTextLayout4[4], effectiveWidth = _mapTextLayout4[5], effectiveHeight = _mapTextLayout4[6];
                    var lineAmount = lines.length;
                    var canvasW = Math.ceil(effectiveWidth);
                    var canvasH = Math.ceil(effectiveHeight);
                    canvas.width = canvasW;
                    canvas.height = canvasH;
                    context.fillStyle = "white";
                    context.font = baseFont;
                    context.textBaseline = "hanging";
                    if (fontSize >= 128) {
                        context.globalAlpha = .01;
                        context.fillRect(0, 0, .01, .01);
                        context.globalAlpha = 1;
                    }
                    if (richText === true) {
                        var spanCount = _richTextResult.spanCount;
                        var spans = _richTextResult.spans;
                        var nodeColor = normalizeCanvasColor(color, true);
                        var strippedPos = 0;
                        var curSpanIdx = 0;
                        var activeFont = baseFont;
                        var activeFillStyle = nodeColor;
                        context.fillStyle = activeFillStyle;
                        var ascenderPx = metrics.ascender;
                        var decoThickness = Math.max(1, Math.round(fontSize / 20));
                        var decoUnderlineBase = Math.ceil(ascenderPx) + Math.max(1, Math.round(fontSize * .08));
                        var decoStrikeBase = Math.ceil(ascenderPx) - Math.round(ascenderPx * .4);
                        for (var i = 0; i < lineAmount; i++) {
                            var line = lines[i];
                            var textLine = line[0];
                            var lineLen = textLine.length;
                            var currentX = Math.ceil(line[3]);
                            var currentY = Math.ceil(line[4]);
                            while (curSpanIdx < spanCount - 1 && strippedPos >= spans[curSpanIdx].end) curSpanIdx++;
                            var segStartJ = 0;
                            var segSpanIdx = curSpanIdx;
                            for (var j = 1; j <= lineLen; j++) {
                                var nextSpanIdx = segSpanIdx;
                                if (j < lineLen) {
                                    while (nextSpanIdx < spanCount - 1 && strippedPos + j >= spans[nextSpanIdx].end) nextSpanIdx++;
                                    curSpanIdx = nextSpanIdx;
                                }
                                if (j === lineLen || nextSpanIdx !== segSpanIdx) {
                                    var span = spans[segSpanIdx];
                                    var spanStyle = span.italic === true ? "italic" : fontStyle;
                                    var spanFont = span.bold === true ? "".concat(spanStyle, " bold ").concat(fontSize, "px Unknown, ").concat(fontFamily) : "".concat(spanStyle, " ").concat(fontSize, "px Unknown, ").concat(fontFamily);
                                    if (spanFont !== activeFont) {
                                        context.font = spanFont;
                                        activeFont = spanFont;
                                    }
                                    var spanFillStyle = span.color !== 0 ? normalizeCanvasColor(span.color, true) : nodeColor;
                                    if (spanFillStyle !== activeFillStyle) {
                                        context.fillStyle = spanFillStyle;
                                        activeFillStyle = spanFillStyle;
                                    }
                                    var segStartX = currentX;
                                    if (letterSpacing === 0) {
                                        var segment = textLine.substring(segStartJ, j);
                                        context.fillText(segment, currentX, currentY);
                                        currentX += _measureText(segment, fontFamily, 0);
                                    } else for (var k = segStartJ; k < j; k++) {
                                        var char = textLine.charAt(k);
                                        if (hasZeroWidthSpace(char) === false) context.fillText(char, currentX, currentY);
                                        currentX += _measureText(char, fontFamily, letterSpacing);
                                    }
                                    if (span.underline === true || span.strikethrough === true) {
                                        var segWidth = currentX - segStartX;
                                        if (segWidth > 0) {
                                            if (span.underline === true) context.fillRect(segStartX, currentY + decoUnderlineBase, segWidth, decoThickness);
                                            if (span.strikethrough === true) context.fillRect(segStartX, currentY + decoStrikeBase, segWidth, decoThickness);
                                        }
                                    }
                                    segStartJ = j;
                                    segSpanIdx = nextSpanIdx;
                                }
                            }
                            strippedPos += lineLen + (i < lineAmount - 1 ? 1 : 0);
                        }
                    } else for (var _i0 = 0; _i0 < lineAmount; _i0++) {
                        var _line4 = lines[_i0];
                        var _textLine4 = _line4[0];
                        var _currentX2 = Math.ceil(_line4[3]);
                        var _currentY2 = Math.ceil(_line4[4]);
                        if (letterSpacing === 0) context.fillText(_textLine4, _currentX2, _currentY2); else {
                            var textLineLength = _textLine4.length;
                            for (var _j = 0; _j < textLineLength; _j++) {
                                var _char4 = _textLine4.charAt(_j);
                                if (hasZeroWidthSpace(_char4) === true) continue;
                                context.fillText(_char4, _currentX2, _currentY2);
                                _currentX2 += _measureText(_char4, fontFamily, letterSpacing);
                            }
                        }
                    }
                    var imageData = null;
                    if (canvas.width > 0 && canvas.height > 0) imageData = context.getImageData(0, 0, canvasW, canvasH);
                    var renderInfo = {
                        type: type,
                        imageData: imageData,
                        width: effectiveWidth,
                        height: effectiveHeight,
                        remainingLines: remainingLines,
                        hasRemainingText: hasRemainingText
                    };
                    renderInfoCache.set(cacheKey, renderInfo);
                    return renderInfo;
                };
                clearCache = function clearCache() {
                    renderInfoCache.clear();
                };
                renderQuads = function renderQuads() {};
                CanvasTextRenderer = {
                    type: type,
                    font: font,
                    renderText: renderText,
                    renderQuads: renderQuads,
                    init: init,
                    clearCache: clearCache
                };
                CanvasTexture = function(_CoreContextTexture2) {
                    function CanvasTexture() {
                        var _this7;
                        for (var _len2 = arguments.length, _args = new Array(_len2), _key6 = 0; _key6 < _len2; _key6++) {
                            _args[_key6] = arguments[_key6];
                        }
                        _this7 = _callSuper(this, CanvasTexture, [].concat(_args));
                        _this7.image = void 0;
                        _this7.tintCache = void 0;
                        return _this7;
                    }
                    _inherits(CanvasTexture, _CoreContextTexture2);
                    return _createClass(CanvasTexture, [ {
                        key: "load",
                        value: function() {
                            var _load2 = _asyncToGenerator(_regenerator().m(function _callee8() {
                                var textureData, size, _t2;
                                return _regenerator().w(function(_context9) {
                                    while (1) switch (_context9.p = _context9.n) {
                                      case 0:
                                        textureData = this.textureSource.textureData;
                                        assertTruthy(textureData == null ? void 0 : textureData.data, "Texture data is null before load");
                                        this.textureSource.setState("loading");
                                        _context9.p = 1;
                                        _context9.n = 2;
                                        return this.onLoadRequest(textureData.data);

                                      case 2:
                                        size = _context9.v;
                                        if (!(this.textureSource.state === "freed")) {
                                            _context9.n = 3;
                                            break;
                                        }
                                        this.image = void 0;
                                        return _context9.a(2);

                                      case 3:
                                        this.textureSource.setState("loaded", size);
                                        this.textureSource.freeTextureData();
                                        this.updateMemSize();
                                        _context9.n = 5;
                                        break;

                                      case 4:
                                        _context9.p = 4;
                                        _t2 = _context9.v;
                                        this.textureSource.setState("failed", _t2);
                                        this.textureSource.freeTextureData();
                                        throw _t2;

                                      case 5:
                                        return _context9.a(2);
                                    }
                                }, _callee8, this, [ [ 1, 4 ] ]);
                            }));
                            function load() {
                                return _load2.apply(this, arguments);
                            }
                            return load;
                        }()
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
                        value: function() {
                            var _onLoadRequest4 = _asyncToGenerator(_regenerator().m(function _callee9(data) {
                                var _canvas, ctx;
                                return _regenerator().w(function(_context0) {
                                    while (1) switch (_context0.n) {
                                      case 0:
                                        if (!(data instanceof ImageData)) {
                                            _context0.n = 1;
                                            break;
                                        }
                                        _canvas = document.createElement("canvas");
                                        _canvas.width = data.width;
                                        _canvas.height = data.height;
                                        ctx = _canvas.getContext("2d");
                                        if (ctx !== null) ctx.putImageData(data, 0, 0);
                                        this.image = _canvas;
                                        return _context0.a(2, {
                                            w: data.width,
                                            h: data.height
                                        });

                                      case 1:
                                        if (!(typeof ImageBitmap !== "undefined" && data instanceof ImageBitmap || data instanceof HTMLImageElement)) {
                                            _context0.n = 2;
                                            break;
                                        }
                                        this.image = data;
                                        return _context0.a(2, {
                                            w: data.width,
                                            h: data.height
                                        });

                                      case 2:
                                        return _context0.a(2, {
                                            w: 0,
                                            h: 0
                                        });
                                    }
                                }, _callee9, this);
                            }));
                            function onLoadRequest(_x7) {
                                return _onLoadRequest4.apply(this, arguments);
                            }
                            return onLoadRequest;
                        }()
                    } ]);
                }(CoreContextTexture);
                CanvasShaderNode = function(_CoreShaderNode2) {
                    function CanvasShaderNode(shaderKey, config, stage, props) {
                        var _this8;
                        _this8 = _callSuper(this, CanvasShaderNode, [ shaderKey, config, stage, props ]);
                        _this8.updater = void 0;
                        _this8.valueKey = "";
                        _this8.computed = {};
                        _this8.applySNR = void 0;
                        _this8.render = void 0;
                        _this8.applySNR = config.saveAndRestore || false;
                        _this8.render = config.render;
                        if (config.update !== void 0) {
                            _this8.updater = config.update;
                            if (_this8.props === void 0) {
                                _this8.updater(_this8.node, _this8.props);
                                return _possibleConstructorReturn(_this8);
                            }
                            _this8.update = function() {
                                var prevKey = _this8.valueKey;
                                _this8.valueKey = _this8.createValueKey();
                                if (prevKey === _this8.valueKey) return;
                                if (prevKey.length > 0) stage.shManager.mutateShaderValueUsage(prevKey, -1);
                                var computed = stage.shManager.getShaderValues(_this8.valueKey);
                                if (computed !== void 0) _this8.computed = computed;
                                _this8.computed = {};
                                _this8.updater(_this8.node);
                                stage.shManager.setShaderValues(_this8.valueKey, _this8.computed);
                            };
                        }
                        return _this8;
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
                    function CanvasRenderer(stage) {
                        var _this9;
                        _this9 = _callSuper(this, CanvasRenderer, [ stage ]);
                        _this9.context = void 0;
                        _this9.canvas = void 0;
                        _this9.pixelRatio = void 0;
                        _this9.clearColor = void 0;
                        _this9.renderToTextureActive = false;
                        _this9.activeRttNode = null;
                        _this9.mode = "canvas";
                        var canvas = stage.platform.canvas;
                        _this9.canvas = canvas;
                        _this9.context = canvas.getContext("2d");
                        _this9.pixelRatio = stage.pixelRatio;
                        _this9.clearColor = normalizeCanvasColor(stage.clearColor);
                        return _this9;
                    }
                    _inherits(CanvasRenderer, _CoreRenderer2);
                    return _createClass(CanvasRenderer, [ {
                        key: "reset",
                        value: function reset() {
                            this.canvas.width = this.canvas.width;
                            var ctx = this.context;
                            if (this.clearColor) {
                                ctx.fillStyle = this.clearColor;
                                ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
                            }
                            ctx.scale(this.pixelRatio, this.pixelRatio);
                        }
                    }, {
                        key: "render",
                        value: function render() {}
                    }, {
                        key: "addQuad",
                        value: function addQuad(node) {
                            var _this0 = this;
                            var ctx = this.context;
                            var _node$globalTransform = node.globalTransform, tx = _node$globalTransform.tx, ty = _node$globalTransform.ty, ta = _node$globalTransform.ta, tb = _node$globalTransform.tb, tc = _node$globalTransform.tc, td = _node$globalTransform.td;
                            var clippingRect = node.clippingRect;
                            var texture = node.props.texture || this.stage.defaultTexture;
                            if (texture !== null) {
                                var textureType = texture.type;
                                if (textureType !== TextureType.image && textureType !== TextureType.subTexture && textureType !== TextureType.color && textureType !== TextureType.noise) return;
                            }
                            var hasTransform = ta !== 1;
                            var clippingValid = clippingRect.valid === true;
                            if (clippingValid === true && clippingRect.w === 0 && clippingRect.h === 0) return;
                            var hasClipping = clippingValid === true && clippingRect.w !== 0 && clippingRect.h !== 0;
                            var shader = node.props.shader;
                            var hasShader = shader !== null;
                            var saveAndRestore = hasTransform === true || hasClipping === true;
                            if (hasShader === true) saveAndRestore = saveAndRestore || shader.applySNR;
                            if (saveAndRestore) ctx.save();
                            if (hasClipping === true) {
                                var path = new Path2D;
                                var x = clippingRect.x, y = clippingRect.y, w = clippingRect.w, h = clippingRect.h, clipRadius = clippingRect.clipRadius;
                                if (clipRadius > 0) {
                                    var r = Math.min(clipRadius, w / 2, h / 2);
                                    path.moveTo(x + r, y);
                                    path.arcTo(x + w, y, x + w, y + h, r);
                                    path.arcTo(x + w, y + h, x, y + h, r);
                                    path.arcTo(x, y + h, x, y, r);
                                    path.arcTo(x, y, x + w, y, r);
                                    path.closePath();
                                } else path.rect(x, y, w, h);
                                ctx.clip(path);
                            }
                            if (hasTransform === true) {
                                var scale = this.pixelRatio;
                                ctx.setTransform(ta, tc, tb, td, tx * scale, ty * scale);
                                ctx.scale(scale, scale);
                                ctx.translate(-tx, -ty);
                            }
                            if (hasShader === true) {
                                var renderContext = function renderContext() {
                                    _this0.renderContext(node, texture);
                                };
                                shader.render(ctx, node, renderContext);
                                renderContext = null;
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
                                var _tintColor$a2;
                                var tintColor = parseColor(color);
                                if (textureType !== TextureType.subTexture) {
                                    var _tintColor$a;
                                    var _image = texture.ctxTexture.getImage(tintColor);
                                    if (_image === null) return;
                                    this.context.globalAlpha = (_tintColor$a = tintColor.a) !== null && _tintColor$a !== void 0 ? _tintColor$a : node.worldAlpha;
                                    this.context.drawImage(_image, tx, ty, width, height);
                                    this.context.globalAlpha = 1;
                                    return;
                                }
                                var image = texture.parentTexture.ctxTexture.getImage(tintColor);
                                if (image === null) return;
                                var _props = texture.props;
                                this.context.globalAlpha = (_tintColor$a2 = tintColor.a) !== null && _tintColor$a2 !== void 0 ? _tintColor$a2 : node.worldAlpha;
                                this.context.drawImage(image, _props.x, _props.y, _props.w, _props.h, tx, ty, width, height);
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
                                var gradient = this.context.createLinearGradient(tx, ty, endX, endY);
                                gradient.addColorStop(0, normalizeCanvasColor(color));
                                gradient.addColorStop(1, normalizeCanvasColor(endColor));
                                this.context.fillStyle = gradient;
                                this.context.fillRect(tx, ty, width, height);
                            } else {
                                this.context.fillStyle = normalizeCanvasColor(color);
                                this.context.fillRect(tx, ty, width, height);
                            }
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
                        key: "renderRTTNodes",
                        value: function renderRTTNodes() {}
                    }, {
                        key: "removeRTTNode",
                        value: function removeRTTNode(_node) {}
                    }, {
                        key: "renderToTexture",
                        value: function renderToTexture(_node) {}
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
                        key: "updateClearColor",
                        value: function updateClearColor(color) {
                            this.clearColor = normalizeCanvasColor(color);
                        }
                    }, {
                        key: "updateViewport",
                        value: function updateViewport() {}
                    }, {
                        key: "getDefaultShaderNode",
                        value: function getDefaultShaderNode() {
                            return null;
                        }
                    }, {
                        key: "destroy",
                        value: function destroy() {
                            this.canvas.width = 0;
                            this.canvas.height = 0;
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
                            var _stack2;
                            return (_stack2 = stack).push.apply(_stack2, arguments);
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
                    return mergeProps$1(props, {
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
                            var _ref30 = (existing == null ? void 0 : existing.isAlive) && (existing == null ? void 0 : existing.setIsAlive) ? [ existing.isAlive, existing.setIsAlive ] : createSignal(true), _ref31 = _slicedToArray(_ref30, 2), isAlive = _ref31[0], setIsAlive = _ref31[1];
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
                    var savedFocusedElement;
                    var getExisting = function getExisting() {
                        var existing = keepAliveRouteElements.get(key);
                        if (!existing) {
                            var _createSignal11 = createSignal(true), _createSignal12 = _slicedToArray(_createSignal11, 2), isAlive = _createSignal12[0], setIsAlive = _createSignal12[1];
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
                        savedFocusedElement = activeElement();
                        elm.alpha = 0;
                    });
                    var onRender = chainFunctions(props.onRender, function(elm) {
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
                    var routeElement = createComponent(Route, mergeProps(props, {
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
                    var _createSignal13 = createSignal({}), _createSignal14 = _slicedToArray(_createSignal13, 2), heroContent = _createSignal14[0], setHeroContent = _createSignal14[1];
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
                    var _createSignal15 = createSignal({}), _createSignal16 = _slicedToArray(_createSignal15, 2), heroContent = _createSignal16[0], setHeroContent = _createSignal16[1];
                    var _createSignal17 = createSignal(false), _createSignal18 = _slicedToArray(_createSignal17, 2), openPanel = _createSignal18[0], setOpenPanel = _createSignal18[1];
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
                    var _createSignal19 = createSignal(), _createSignal20 = _slicedToArray(_createSignal19, 2), heroContent = _createSignal20[0], setHeroContent = _createSignal20[1];
                    var _createSignal21 = createSignal(0), _createSignal22 = _slicedToArray(_createSignal21, 2), heroIndex = _createSignal22[0], setHeroIndex = _createSignal22[1];
                    onMount(function() {
                        return setGlobalBackground(858993663);
                    });
                    createEffect(on([ props.data.heroRow.items, heroIndex ], function(_ref32) {
                        var _ref33 = _slicedToArray(_ref32, 2), heros = _ref33[0], index = _ref33[1];
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
                    return response.then(function(_ref34) {
                        var results = _ref34.results;
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
                    return genreList.then(function(_ref35) {
                        var genres = _ref35.genres;
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
                    atlasDataUrl: "/solid-demo-app/fonts/Roboto-Regular.msdf.json",
                    atlasUrl: "/solid-demo-app/fonts/Roboto-Regular.msdf.png",
                    metrics: {
                        ascender: 1e3,
                        descender: 100,
                        lineGap: 0,
                        unitsPerEm: 1e3
                    }
                }, {
                    type: "msdf",
                    fontFamily: "Roboto700",
                    atlasDataUrl: "/solid-demo-app/fonts/Roboto-Bold.msdf.json",
                    atlasUrl: "/solid-demo-app/fonts/Roboto-Bold.msdf.png",
                    metrics: {
                        ascender: 1e3,
                        descender: 100,
                        lineGap: 0,
                        unitsPerEm: 1e3
                    }
                }, {
                    type: "msdf",
                    fontFamily: "Arial",
                    atlasDataUrl: "/solid-demo-app/fonts/Roboto-Regular.msdf.json",
                    atlasUrl: "/solid-demo-app/fonts/Roboto-Regular.msdf.png"
                }, {
                    type: "msdf",
                    fontFamily: "Raleway",
                    atlasDataUrl: "/solid-demo-app/fonts/Raleway-ExtraBold.msdf.json",
                    atlasUrl: "/solid-demo-app/fonts/Raleway-ExtraBold.msdf.png"
                }, {
                    fontFamily: "Roboto",
                    fontUrl: "/solid-demo-app/fonts/Roboto-Regular.ttf"
                }, {
                    fontFamily: "Roboto700",
                    fontUrl: "/solid-demo-app/fonts/Roboto-Bold.ttf"
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
                        renderer: renderer$1
                    });
                    function focusNavDrawer() {
                        if (navDrawer.states.has("focus")) return false;
                        lastFocused = activeElement();
                        return navDrawer.setFocus();
                    }
                    var _createSignal23 = createSignal(true), _createSignal24 = _slicedToArray(_createSignal23, 2), showWidgets = _createSignal24[0], setShowWidgets = _createSignal24[1];
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
                    var _createSignal25 = createSignal("Last key: undefined"), _createSignal26 = _slicedToArray(_createSignal25, 2), lastKey = _createSignal26[0], setLastKey = _createSignal26[1];
                    var _createSignal27 = createSignal(), _createSignal28 = _slicedToArray(_createSignal27, 2), lastError = _createSignal28[0], setLastError = _createSignal28[1];
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
                    return "/solid-demo-app/" + dep;
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
                        var _iterator1 = _createForOfIteratorHelper(res || []), _step1;
                        try {
                            for (_iterator1.s(); !(_step1 = _iterator1.n()).done; ) {
                                var item = _step1.value;
                                if (item.status !== "rejected") continue;
                                handlePreloadError(item.reason);
                            }
                        } catch (err) {
                            _iterator1.e(err);
                        } finally {
                            _iterator1.f();
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
                        return _context.import("./Player-legacy-C6xNq6aB.js");
                    }, void 0);
                });
                Grid = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Grid-legacy-BgWnQEYX.js");
                    }, void 0);
                });
                Loops = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Loops-legacy-BP03WWDX.js");
                    }, void 0);
                });
                Infinite = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Infinite-legacy-p0xzIZhl.js");
                    }, void 0);
                });
                TMDBGrid = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./TMDBGrid-legacy-DFn50Gkm.js");
                    }, void 0);
                });
                Portal = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Portal-legacy-CcA7rzDa.js");
                    }, void 0);
                });
                MatrixPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Matrix-legacy-BUxjZL-Q.js");
                    }, void 0);
                });
                TextPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Text-legacy-BAA2otPV.js");
                    }, void 0);
                });
                TextPosterPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./TextPoster-legacy-D-yTRfQu.js");
                    }, void 0);
                });
                CreatePage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Create-legacy-BBYrZYoO.js");
                    }, void 0);
                });
                ViewportPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Viewport-legacy-NlBPKoPU.js");
                    }, void 0);
                });
                PositioningPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Positioning-legacy-DzoXV0LJ.js");
                    }, void 0);
                });
                LayoutPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Layout-legacy-RkAN5QDC.js");
                    }, void 0);
                });
                FocusBasicsPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./FocusBasics-legacy-DWOJRayt.js");
                    }, void 0);
                });
                KeyHandlingPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./KeyHandling-legacy-DlkwUOIK.js");
                    }, void 0);
                });
                TransitionsPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Transitions-legacy-C5of6Akj.js");
                    }, void 0);
                });
                ComponentsPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Components-legacy-zdEKkLVo.js");
                    }, void 0);
                });
                FocusHandlingPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./FocusHandling-legacy-D_W5FmyE.js");
                    }, void 0);
                });
                GradientsPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Gradients-legacy-zvrdxot4.js");
                    }, void 0);
                });
                FlexPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Flex-legacy-BQmA2o0i.js");
                    }, void 0);
                });
                FlexGrowPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./FlexGrow-legacy-BCYdUUmn.js");
                    }, void 0);
                });
                FlexMenuPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./FlexMenu-legacy-Ct3AIoc0.js");
                    }, void 0);
                });
                FlexSizePage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./FlexSize-legacy-BQp0y3UY.js");
                    }, void 0);
                });
                FlexColumnSizePage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./FlexColumnSize-legacy-CMdffcgW.js");
                    }, void 0);
                });
                FlexColumnPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./FlexColumn-legacy-Dfe7ywHq.js");
                    }, void 0);
                });
                ButtonsMaterialPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./ButtonsMaterial-legacy-B9nDAnn1.js");
                    }, void 0);
                });
                SuperFlexPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./SuperFlex-legacy-WQM-A72S.js");
                    }, void 0);
                });
                Entity = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Entity-legacy-BwkPfLHH.js");
                    }, void 0);
                });
                People = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./People-legacy-DaROrLqv.js");
                    }, void 0);
                });
                FireboltPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Firebolt-legacy-Bgn9HqHh.js");
                    }, void 0);
                });
                LoginPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Login-legacy-C3ud4TyF.js");
                    }, void 0);
                });
                VirtualPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Virtual-legacy-DyD6jIf3.js");
                    }, void 0);
                });
                TagsPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Tags-legacy-BGHg6Gpx.js");
                    }, void 0);
                });
                ImagePerformance = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./ImagePerformance-legacy-U9bOlUzX.js");
                    }, void 0);
                });
                LargeImagePerformance = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./LargeImagePerformance-legacy-w7gOPGyl.js");
                    }, void 0);
                });
                MixedImagePerformance = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./MixedImagePerformance-legacy-D_Z0zTsx.js");
                    }, void 0);
                });
                TextureCompressionPerformance = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./TextureCompressionPerformance-legacy-DYPt9AN0.js");
                    }, void 0);
                });
                ComplexFlexPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./ComplexFlex-legacy-BFV2h2xz.js");
                    }, void 0);
                });
                ComplexFlexCapsPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./ComplexFlexCaps-legacy-BI0oPVet.js");
                    }, void 0);
                });
                BenchmarkPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./Benchmark-legacy-BJDeGjFK.js");
                    }, void 0);
                });
                RendererVersionsPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./RendererVersions-legacy-CR1hN92H.js");
                    }, void 0);
                });
                TextCenteringPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./TextCentering-legacy-BpwoPXP5.js");
                    }, void 0);
                });
                CountdownTimerPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./CountdownTimer-legacy-C5xZ9kc8.js");
                    }, void 0);
                });
                CustomButtonsPage = lazy(function() {
                    return __vitePreload(function() {
                        return _context.import("./CustomButtons-legacy-CoXklHXk.js");
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
                    textureProcessingTimeLimit: textureProcessingTimeLimitParam ? parseFloat(textureProcessingTimeLimitParam) : void 0,
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
                                                                    return _context.import("./Nested-legacy-C2XsZ-bs.js");
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
                                                                    return _context.import("./KeepAlive-legacy-DcyCufN9.js");
                                                                }, void 0);
                                                            });
                                                        }
                                                    }), createComponent(Route, {
                                                        path: "suspense",
                                                        get component() {
                                                            return lazy(function() {
                                                                return __vitePreload(function() {
                                                                    return _context.import("./suspense-legacy-DfSh-TQ4.js");
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