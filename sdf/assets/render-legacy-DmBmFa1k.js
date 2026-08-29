(function() {
    function _superPropSet(t, e, o, r, p, f) {
        return _set(_getPrototypeOf(f ? t.prototype : t), e, o, r, p);
    }
    function set(e, r, t, o) {
        return set = "undefined" != typeof Reflect && Reflect.set ? Reflect.set : function(e, r, t, o) {
            var f, i = _superPropBase(e, r);
            if (i) {
                if ((f = Object.getOwnPropertyDescriptor(i, r)).set) return f.set.call(o, t), !0;
                if (!f.writable) return !1;
            }
            if (f = Object.getOwnPropertyDescriptor(o, r)) {
                if (!f.writable) return !1;
                f.value = t, Object.defineProperty(o, r, f);
            } else _defineProperty(o, r, t);
            return !0;
        }, set(e, r, t, o);
    }
    function _set(e, r, t, o, f) {
        if (!set(e, r, t, o || e) && f) throw new TypeError("failed to set property");
        return t;
    }
    function _wrapNativeSuper(t) {
        var r = "function" == typeof Map ? new Map : void 0;
        return _wrapNativeSuper = function _wrapNativeSuper(t) {
            if (null === t || !_isNativeFunction(t)) return t;
            if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== r) {
                if (r.has(t)) return r.get(t);
                r.set(t, Wrapper);
            }
            function Wrapper() {
                return _construct(t, arguments, _getPrototypeOf(this).constructor);
            }
            return Wrapper.prototype = Object.create(t.prototype, {
                constructor: {
                    value: Wrapper,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), _setPrototypeOf(Wrapper, t);
        }, _wrapNativeSuper(t);
    }
    function _construct(t, e, r) {
        if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
        var o = [ null ];
        o.push.apply(o, e);
        var p = new (t.bind.apply(t, o));
        return r && _setPrototypeOf(p, r.prototype), p;
    }
    function _isNativeFunction(t) {
        try {
            return -1 !== Function.toString.call(t).indexOf("[native code]");
        } catch (n) {
            return "function" == typeof t;
        }
    }
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
    function _typeof(o) {
        "@babel/helpers - typeof";
        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
            return typeof o;
        } : function(o) {
            return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
        }, _typeof(o);
    }
    System.register([], function(_export, _context) {
        "use strict";
        var ENABLE_INSPECTOR, DIRTY_QUAD_BUFFER, EMIT_BOUNDS_EVENTS, premultiplyRGB, nextId, EventEmitter, TextureType, Texture, PROTOCOL_REGEX, IS_FILE_PROTOCOL, getNormalizedRgbaComponents, Matrix3d, tempMatrix, RenderCoords, degree, getTimingBezier, timingMapping, timingLookup, defaultTiming, parseCubicBezier, getTimingFunction, sortByZIndexStable, findChildIndexById, _removeChild, VERTICES_PER_QUAD, BYTES_PER_VERTEX, BYTES_PER_QUAD, WORDS_PER_QUAD, UV_QUANT_MAX, UNIT_TEXTURE_COORDS, MAX_QUADS, MAX_QUAD_BUFFER_SIZE, CoreNodeRenderState, NO_CLIPPING_RECT, UpdateType, CoreNode, AnimationManager, ImageWorkerManager, ColorTexture, PVR_MAGIC, PVR_TO_GL_INTERNAL_FORMAT, ASTC_MAGIC, ASTC_TO_GL_INTERNAL_FORMAT, KTX_IDENTIFIER, loadCompressedTexture, loadASTC, EXT_ASTC, EXT_S3TC, EXT_ETC1, EXT_ETC, EXT_PVRTC, EXT_NONE, requiredExtensionsForFormat, ensureCompressedFormatEnabled, uploadASTC, loadKTX, uploadKTX, loadPVR, uploadPVR, BLOCK_4x4x8, BLOCK_4x4x16, BLOCK_5x5x16, BLOCK_6x6x16, BLOCK_8x4x8, BLOCK_8x8x16, BLOCK_10x10x16, BLOCK_12x12x16, blockInfoMap, uploadCompressedTexture, loadSvg, ImageTexture, NoiseTexture, subTextureId, SubTexture, STRAIGHT_ALPHA_TEST_PNG, TextureErrorCode, defaultMessages, TextureError, TextureUploadQueue, ConcurrencyGate, CoreTextureManager, CoreShaderNode, CoreShaderManager, spaceRegex, defaultFontMetrics, CAP_HEIGHT_FALLBACK_RATIO, X_HEIGHT_FALLBACK_RATIO, normalizeFontMetrics, baselineMode, setBaselineMode, mapTextLayout, measureLines, wrapText, wrapLine, getWrapStrategy, overflow, breakWord, breakAll, truncateLineEnd, truncateWord, splitWord, ContextSpy, TextureMemoryManager, TextConstraint, CoreTextNode, EMPTY_TEXTURE_OPTIONS, Stage, Platform, WebPlatform, noop, normalizeBoundsMargin$1, RendererMain, sdfPrefetch, canvasPrefetch, orNull, normalizeSdfData, prefetchFont, takeSdfPrefetch, takeCanvasPrefetch, sharedConfig, equalFn, $PROXY, SUPPORTS_PROXY, $TRACK, signalOptions, ERROR, runEffects, STALE, PENDING, UNOWNED, NO_INIT, Owner, Transition, Scheduler, ExternalSourceConfig, Listener, Updates, Effects, ExecCount, transPending, setTransPending, SuspenseContext, FALLBACK, hydrationEnabled, propTraps, narrowedError, Errors, SuspenseListContext, activeElement, _setActiveElement, isDev, DOM_RENDERING, SHADERS_ENABLED, isDomRendererActive, Config, NodeType, TextNode, isFunction, hasFocus, colorToRgba, _document$documentEle, _styleRef, supportsObjectFit, supportsObjectPosition, supportsMixBlendMode, supportsStandardMask, supportsWebkitMask, supportsCssMask, animationTasks, animationFrameRequested, AnimationController, elMap, textNodesToMeasure, containTextNodes, fontLoadingListenerSetup, defaultShader, lastNodeId, CoreNodeRenderStateMap, DOMNode, DOMText, DOMRendererMain, renderer$1, pendingFontLoads, States, _signalWrapper, keyMapEntries, keyOf, flattenKeyMap, needFocusDebugStyles, addFocusDebug, MAX_FOCUS_HISTORY, focusHistory, elementFocusData, _pendingHistoryKey, getElementLabel, recordFocusHistory, printFocusHistory, setActiveElementCore, focusPath, setFocusPath, updateFocusPath, lastGlobalKeyPressTime, lastInputKey, isElementThrottled, runCapturePhase, runBubblePhase, propagateKeyPress, UNIDENTIFIED, keyIdentities, suppressedKeys, findSuppression, liftSuppression, handleKeyEvents, useFocusManager, installed, calculateFlex, postMutationQueued, nextActiveElement, deferredFocusElement, layoutQueue, elementDeleteQueue, _fontTemplate, _fontFamilyIdx, _fontFamilyWithWeight, EFFECT_SHADER_KEYS, parseAndAssignShaderProps, LightningRendererNumberProps, LightningRendererNonAnimatingProps, ElementNode, memo$1, solidOpts_default, solidRenderer, renderer, rootNode, render, effect, memo, createComponent, createElement, createTextNode, insertNode, insert, spread, setProp, use, taskQueue, tasksEnabled, View, Text;
        function createWebGLContext(canvas) {
            var forceWebGL2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var contextSpy = arguments.length > 2 ? arguments[2] : undefined;
            var config = {
                alpha: true,
                antialias: false,
                depth: false,
                stencil: false,
                desynchronized: false,
                powerPreference: "high-performance",
                premultipliedAlpha: true,
                preserveDrawingBuffer: false
            };
            var gl = canvas.getContext(forceWebGL2 ? "webgl2" : "webgl", config) || canvas.getContext("experimental-webgl", config);
            if (!gl) throw new Error("Unable to create WebGL context");
            if (contextSpy) {
                var handler = {
                    get: function get(target, prop) {
                        var value = target[prop];
                        if (typeof value !== "function") return value;
                        contextSpy.increment(String(prop));
                        var fn = value;
                        if (prop === "getExtension") return function() {
                            for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
                                args[_key2] = arguments[_key2];
                            }
                            var ext = fn.apply(target, args);
                            if (ext !== null && _typeof(ext) === "object") return new Proxy(ext, handler);
                            return ext;
                        };
                        return fn.bind(target);
                    }
                };
                return new Proxy(gl, handler);
            }
            return gl;
        }
        function assertTruthy(condition, message) {}
        function mergeColorProgress(rgba1, rgba2, p) {
            var r1 = Math.trunc(rgba1 >>> 24);
            var g1 = Math.trunc(rgba1 >>> 16 & 255);
            var b1 = Math.trunc(rgba1 >>> 8 & 255);
            var a1 = Math.trunc(rgba1 & 255);
            var r2 = Math.trunc(rgba2 >>> 24);
            var g2 = Math.trunc(rgba2 >>> 16 & 255);
            var b2 = Math.trunc(rgba2 >>> 8 & 255);
            var a2 = Math.trunc(rgba2 & 255);
            var r = Math.round(r2 * p + r1 * (1 - p));
            var g = Math.round(g2 * p + g1 * (1 - p));
            var b = Math.round(b2 * p + b1 * (1 - p));
            var a = Math.round(a2 * p + a1 * (1 - p));
            return (r << 24 | g << 16 | b << 8 | a) >>> 0;
        }
        function setPremultiplyMode(mode) {
            premultiplyRGB = mode === "webgl";
        }
        function premultiplyColorABGR(rgba, alpha) {
            var a = (rgba & 255) / 255 * alpha;
            var m = premultiplyRGB ? a : 1;
            return ((a * 255 | 0) << 24 | ((rgba >>> 8 & 255) * m | 0) << 16 | ((rgba >>> 16 & 255) * m | 0) << 8 | ((rgba >>> 24) * m | 0)) >>> 0;
        }
        function getNewId() {
            return nextId++;
        }
        function createBound(x1, y1, x2, y2, out) {
            if (out) {
                out.x1 = x1;
                out.y1 = y1;
                out.x2 = x2;
                out.y2 = y2;
                return out;
            }
            return {
                x1: x1,
                y1: y1,
                x2: x2,
                y2: y2
            };
        }
        function intersectRect(a, b, out) {
            var x = Math.max(a.x, b.x);
            var y = Math.max(a.y, b.y);
            var w = Math.min(a.x + a.w, b.x + b.w) - x;
            var h = Math.min(a.y + a.h, b.y + b.h) - y;
            if (w > 0 && h > 0) {
                if (out) {
                    out.x = x;
                    out.y = y;
                    out.w = w;
                    out.h = h;
                    return out;
                }
                return {
                    x: x,
                    y: y,
                    w: w,
                    h: h
                };
            }
            if (out) {
                out.x = 0;
                out.y = 0;
                out.w = 0;
                out.h = 0;
                return out;
            }
            return {
                x: 0,
                y: 0,
                w: 0,
                h: 0
            };
        }
        function copyRect(a, out) {
            if (out) {
                out.x = a.x;
                out.y = a.y;
                out.w = a.w;
                out.h = a.h;
                return out;
            }
            return {
                x: a.x,
                y: a.y,
                w: a.w,
                h: a.h
            };
        }
        function compareRect(a, b) {
            if (a === b) return true;
            if (a === null || b === null) return false;
            var aValid = a.valid;
            var bValid = b.valid;
            if (aValid === false && bValid === false) return true;
            if (aValid !== bValid) return false;
            return a.x === b.x && a.y === b.y && a.w === b.w && a.h === b.h;
        }
        function convertUrlToAbsolute(url) {
            var hasProtocol = PROTOCOL_REGEX.test(url);
            if (IS_FILE_PROTOCOL === true && hasProtocol === false) {
                var path = self.location.pathname.split("/");
                path.pop();
                var basePath = path.join("/");
                var baseUrl = self.location.protocol + "//" + basePath;
                if (url.charAt(0) === ".") url = url.slice(1);
                if (url.charAt(0) === "/") url = url.slice(1);
                return baseUrl + "/" + url;
            }
            if (hasProtocol === true) return url;
            return new URL(url, self.location.href).href;
        }
        function isBase64Image(src) {
            return src.startsWith("data:") === true;
        }
        function calcFactoredRadiusArray(radius, width, height) {
            var result = [ radius[0], radius[1], radius[2], radius[3] ];
            var factor = Math.min(Math.min(Math.min(width / Math.max(width, radius[0] + radius[1]), width / Math.max(width, radius[2] + radius[3])), Math.min(height / Math.max(height, radius[0] + radius[3]), height / Math.max(height, radius[1] + radius[2]))), 1);
            result[0] *= factor;
            result[1] *= factor;
            result[2] *= factor;
            result[3] *= factor;
            return result;
        }
        function dataURIToBlob(dataURI) {
            var _dataURI$match;
            dataURI = dataURI.replace(/^data:/, "");
            var type = ((_dataURI$match = dataURI.match(/image\/[^;]+/)) == null ? void 0 : _dataURI$match[0]) || "";
            var base64 = dataURI.replace(/^[^,]+,/, "");
            var sliceSize = 1024;
            var byteCharacters = atob(base64);
            var bytesLength = byteCharacters.length;
            var slicesCount = Math.ceil(bytesLength / sliceSize);
            var byteArrays = new Array(slicesCount);
            for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
                var begin = sliceIndex * sliceSize;
                var end = Math.min(begin + sliceSize, bytesLength);
                var bytes = new Array(end - begin);
                for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
                    var _byteCharacters$offse;
                    bytes[i] = (_byteCharacters$offse = byteCharacters[offset]) == null ? void 0 : _byteCharacters$offse.charCodeAt(0);
                }
                byteArrays[sliceIndex] = new Uint8Array(bytes);
            }
            return new Blob(byteArrays, {
                type: type
            });
        }
        function fetchJson(url) {
            var responseType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
            return new Promise(function(resolve, reject) {
                var xhr = new XMLHttpRequest;
                xhr.responseType = responseType;
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == XMLHttpRequest.DONE) if (xhr.status === 0 || xhr.status === 200) resolve(xhr.response); else reject(xhr.statusText);
                };
                xhr.open("GET", url, true);
                xhr.send(null);
            });
        }
        function clampUnit(value) {
            if (value < 0) return 0;
            if (value > 1) return 1;
            return value;
        }
        function bytesToMb(bytes) {
            return (bytes / 1024 / 1024).toFixed(2);
        }
        function createAnimation(manager, node, props, settings) {
            var _settings$delay, _settings$duration, _settings$loop, _settings$repeat, _settings$stopMethod;
            var easing = settings.easing || "linear";
            var delay = (_settings$delay = settings.delay) !== null && _settings$delay !== void 0 ? _settings$delay : 0;
            var propValues = null;
            var shaderPropValues = null;
            var propKeys = null;
            var propList = null;
            var shaderPropKeys = null;
            var shaderPropList = null;
            for (var key in props) if (key !== "shaderProps") {
                if (!propValues) {
                    propValues = {};
                    propKeys = [];
                    propList = [];
                }
                var value = {
                    start: node[key] || 0,
                    target: props[key],
                    isColor: key.indexOf("color") !== -1
                };
                propValues[key] = value;
                propKeys.push(key);
                propList.push(value);
            } else if (key === "shaderProps" && node.shader !== null) {
                if (!shaderPropValues) {
                    shaderPropValues = {};
                    shaderPropKeys = [];
                    shaderPropList = [];
                }
                for (var shaderKey in props.shaderProps) {
                    var start = node.shader.props[shaderKey];
                    if (Array.isArray(start)) start = start[0];
                    var _value = {
                        start: start,
                        target: props.shaderProps[shaderKey],
                        isColor: shaderKey.indexOf("color") !== -1
                    };
                    shaderPropValues[shaderKey] = _value;
                    shaderPropKeys.push(shaderKey);
                    shaderPropList.push(_value);
                }
            }
            var timingFunction = typeof easing === "string" ? getTimingFunction(easing) : easing;
            return {
                manager: manager,
                node: node,
                duration: (_settings$duration = settings.duration) !== null && _settings$duration !== void 0 ? _settings$duration : 0,
                delay: delay,
                delayFor: delay,
                progress: 0,
                loop: (_settings$loop = settings.loop) !== null && _settings$loop !== void 0 ? _settings$loop : false,
                repeat: (_settings$repeat = settings.repeat) !== null && _settings$repeat !== void 0 ? _settings$repeat : 0,
                stopMethod: (_settings$stopMethod = settings.stopMethod) !== null && _settings$stopMethod !== void 0 ? _settings$stopMethod : false,
                timingFunction: timingFunction,
                state: "stopped",
                props: propValues,
                shaderProps: shaderPropValues,
                propKeys: propKeys,
                propList: propList,
                shaderPropKeys: shaderPropKeys,
                shaderPropList: shaderPropList,
                stoppedResolve: null,
                stoppedPromise: null,
                lastRunTime: settings.adaptiveDuration ? performance.now() : 0,
                start: function start() {
                    var _this = this;
                    if (this.state !== "running" && this.state !== "scheduled") {
                        if (!this.stoppedPromise) this.stoppedPromise = new Promise(function(resolve) {
                            _this.stoppedResolve = resolve;
                        });
                        this.manager.registerAnimation(this);
                        this.state = "scheduled";
                    }
                    return this;
                },
                stop: function stop() {
                    this.manager.unregisterAnimation(this);
                    if (this.stoppedResolve) {
                        this.stoppedResolve();
                        this.stoppedResolve = null;
                    }
                    this.progress = 0;
                    this.delayFor = this.delay;
                    this.state = "stopped";
                    return this;
                },
                pause: function pause() {
                    this.manager.unregisterAnimation(this);
                    this.state = "paused";
                    return this;
                },
                restore: function restore() {
                    this.stoppedResolve = null;
                    this.stop();
                    if (this.props) {
                        var entries = Object.entries(this.props);
                        for (var i = 0; i < entries.length; i++) {
                            var _entries$i = _slicedToArray(entries[i], 2), k = _entries$i[0], v = _entries$i[1];
                            this.node[k] = v.start;
                        }
                    }
                    if (this.shaderProps && this.node.shader) {
                        var _entries = Object.entries(this.shaderProps);
                        for (var _i = 0; _i < _entries.length; _i++) {
                            var _entries$_i = _slicedToArray(_entries[_i], 2), _k = _entries$_i[0], _v2 = _entries$_i[1];
                            this.node.shader.props[_k] = _v2.start;
                        }
                    }
                    return this;
                },
                waitUntilStopped: function waitUntilStopped() {
                    if (!this.stoppedPromise) this.stoppedPromise = Promise.resolve();
                    return this.stoppedPromise;
                }
            };
        }
        function quantizeUv(n) {
            var i = n * UV_QUANT_MAX + .5 | 0;
            if (i < 0) return 0;
            if (i > UV_QUANT_MAX) return UV_QUANT_MAX;
            return i;
        }
        function packTextureCoords(tc) {
            var u1 = quantizeUv(tc.x1);
            var u2 = quantizeUv(tc.x2);
            var v1 = quantizeUv(tc.y1);
            var v2 = quantizeUv(tc.y2);
            tc.qTl = (v1 << 16 | u1) >>> 0;
            tc.qTr = (v1 << 16 | u2) >>> 0;
            tc.qBl = (v2 << 16 | u1) >>> 0;
            tc.qBr = (v2 << 16 | u2) >>> 0;
            return tc;
        }
        function createTextureCoords(x1, y1, x2, y2) {
            return packTextureCoords({
                x1: x1,
                y1: y1,
                x2: x2,
                y2: y2,
                qTl: 0,
                qTr: 0,
                qBl: 0,
                qBr: 0
            });
        }
        function createIndexBuffer(glw) {
            var indices = new Uint16Array(MAX_QUADS * 6);
            for (var i = 0, j = 0; i < MAX_QUADS * 6; i += 6, j += 4) {
                indices[i] = j;
                indices[i + 1] = j + 1;
                indices[i + 2] = j + 2;
                indices[i + 3] = j + 2;
                indices[i + 4] = j + 1;
                indices[i + 5] = j + 3;
            }
            var buffer = glw.createBuffer();
            glw.elementArrayBufferData(buffer, indices, glw.STATIC_DRAW);
            return buffer;
        }
        function isHTMLImageElement(obj) {
            return obj !== null && (_typeof(obj) === "object" && obj.constructor && obj.constructor.name === "HTMLImageElement" || typeof HTMLImageElement !== "undefined" && obj instanceof HTMLImageElement);
        }
        function createImageWorker() {
            function hasAlphaChannel(mimeType) {
                return mimeType.indexOf("image/png") !== -1;
            }
            function getImage(src, premultiplyAlpha, x, y, width, height, options) {
                return new Promise(function(resolve, reject) {
                    var supportsOptionsCreateImageBitmap = options.supportsOptionsCreateImageBitmap;
                    var supportsFullCreateImageBitmap = options.supportsFullCreateImageBitmap;
                    var premultiplyAlphaHonored = options.premultiplyAlphaHonored;
                    var xhr = new XMLHttpRequest;
                    xhr.open("GET", src, true);
                    xhr.responseType = "blob";
                    xhr.onload = function() {
                        if (xhr.status !== 200 && xhr.status !== 0) return reject(new Error("Image loading failed. HTTP status code: ".concat(xhr.status || "N/A", ". URL: ").concat(src)));
                        var blob = xhr.response;
                        var withAlphaChannel = premultiplyAlpha !== void 0 && premultiplyAlpha !== null ? premultiplyAlpha : hasAlphaChannel(blob.type);
                        var useGlPremultiply = withAlphaChannel === true && premultiplyAlphaHonored === false;
                        var bitmapMode = withAlphaChannel === true && useGlPremultiply === false ? "premultiply" : "none";
                        if (supportsFullCreateImageBitmap === true && width !== null && height !== null) {
                            createImageBitmap(blob, x || 0, y || 0, width, height, {
                                premultiplyAlpha: bitmapMode,
                                colorSpaceConversion: "none",
                                imageOrientation: "none"
                            }).then(function(data) {
                                resolve({
                                    data: data,
                                    premultiplyAlpha: useGlPremultiply
                                });
                            }).catch(function(error) {
                                reject(error);
                            });
                            return;
                        } else if (supportsOptionsCreateImageBitmap === false && supportsFullCreateImageBitmap === false) createImageBitmap(blob).then(function(data) {
                            resolve({
                                data: data,
                                premultiplyAlpha: useGlPremultiply
                            });
                        }).catch(function(error) {
                            reject(error);
                        }); else createImageBitmap(blob, {
                            premultiplyAlpha: bitmapMode,
                            colorSpaceConversion: "none",
                            imageOrientation: "none"
                        }).then(function(data) {
                            resolve({
                                data: data,
                                premultiplyAlpha: useGlPremultiply
                            });
                        }).catch(function(error) {
                            reject(error);
                        });
                    };
                    xhr.onerror = function() {
                        reject(new Error("Network error occurred while trying to fetch the image."));
                    };
                    xhr.send();
                });
            }
            var supportsOptionsCreateImageBitmap = false;
            var supportsFullCreateImageBitmap = false;
            var premultiplyAlphaHonored = false;
            self.onmessage = function(event) {
                if (event.data.init === true) {
                    supportsOptionsCreateImageBitmap = event.data.supportsOptionsCreateImageBitmap;
                    supportsFullCreateImageBitmap = event.data.supportsFullCreateImageBitmap;
                    premultiplyAlphaHonored = event.data.premultiplyAlphaHonored;
                    return;
                }
                var src = event.data.src;
                var id = event.data.id;
                var premultiplyAlpha = event.data.premultiplyAlpha;
                var x = event.data.sx;
                var y = event.data.sy;
                var width = event.data.sw;
                var height = event.data.sh;
                getImage(src, premultiplyAlpha, x, y, width, height, {
                    supportsOptionsCreateImageBitmap: supportsOptionsCreateImageBitmap,
                    supportsFullCreateImageBitmap: supportsFullCreateImageBitmap,
                    premultiplyAlphaHonored: premultiplyAlphaHonored
                }).then(function(data) {
                    self.postMessage({
                        id: id,
                        src: src,
                        data: data
                    }, [ data.data ]);
                }).catch(function(error) {
                    self.postMessage({
                        id: id,
                        src: src,
                        error: error.message
                    });
                });
            };
        }
        function isCompressedTextureContainer(src) {
            return /\.(ktx|pvr)$/.test(src);
        }
        function readUint24(view, offset) {
            return view.getUint8(offset) + (view.getUint8(offset + 1) << 8) + (view.getUint8(offset + 2) << 16);
        }
        function pvrtcMipSize(width, height, bpp) {
            return Math.max(width, bpp === 2 ? 16 : 8) * Math.max(height, 8) * bpp / 8;
        }
        function isSvgImage(url) {
            return /\.(svg)(\?.*)?$/.test(url);
        }
        function validateCreateImageBitmap(_x) {
            return _validateCreateImageBitmap.apply(this, arguments);
        }
        function _validateCreateImageBitmap() {
            _validateCreateImageBitmap = _asyncToGenerator(_regenerator().m(function _callee15(platform) {
                var _bitmap$close, pngBinaryData, support, blob, bitmap, _bitmapWithOptions$cl, bitmapWithOptions, _bitmapWithFullOption, bitmapWithFullOptions, _t11, _t12;
                return _regenerator().w(function(_context16) {
                    while (1) switch (_context16.p = _context16.n) {
                      case 0:
                        pngBinaryData = new Uint8Array([ 137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, 0, 1, 0, 0, 0, 1, 1, 3, 0, 0, 0, 37, 219, 86, 202, 0, 0, 0, 3, 80, 76, 84, 69, 0, 0, 0, 167, 122, 61, 218, 0, 0, 0, 1, 116, 82, 78, 83, 0, 64, 230, 216, 102, 0, 0, 0, 10, 73, 68, 65, 84, 8, 215, 99, 96, 0, 0, 0, 2, 0, 1, 226, 33, 188, 51, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130 ]);
                        support = {
                            basic: false,
                            options: false,
                            full: false,
                            premultiplyHonored: null
                        };
                        blob = new Blob([ pngBinaryData ], {
                            type: "image/png"
                        });
                        _context16.n = 1;
                        return platform.createImageBitmap(blob);

                      case 1:
                        bitmap = _context16.v;
                        (_bitmap$close = bitmap.close) == null || _bitmap$close.call(bitmap);
                        support.basic = true;
                        _context16.p = 2;
                        _context16.n = 3;
                        return platform.createImageBitmap(blob, {
                            premultiplyAlpha: "none"
                        });

                      case 3:
                        bitmapWithOptions = _context16.v;
                        (_bitmapWithOptions$cl = bitmapWithOptions.close) == null || _bitmapWithOptions$cl.call(bitmapWithOptions);
                        support.options = true;
                        _context16.n = 5;
                        break;

                      case 4:
                        _context16.p = 4;
                        _t11 = _context16.v;

                      case 5:
                        _context16.p = 5;
                        _context16.n = 6;
                        return platform.createImageBitmap(blob, 0, 0, 1, 1, {
                            premultiplyAlpha: "none"
                        });

                      case 6:
                        bitmapWithFullOptions = _context16.v;
                        (_bitmapWithFullOption = bitmapWithFullOptions.close) == null || _bitmapWithFullOption.call(bitmapWithFullOptions);
                        support.full = true;
                        _context16.n = 8;
                        break;

                      case 7:
                        _context16.p = 7;
                        _t12 = _context16.v;

                      case 8:
                        return _context16.a(2, support);
                    }
                }, _callee15, null, [ [ 5, 7 ], [ 2, 4 ] ]);
            }));
            return _validateCreateImageBitmap.apply(this, arguments);
        }
        function detectPremultiplyAlphaHonored(_x2) {
            return _detectPremultiplyAlphaHonored.apply(this, arguments);
        }
        function _detectPremultiplyAlphaHonored() {
            _detectPremultiplyAlphaHonored = _asyncToGenerator(_regenerator().m(function _callee16(platform) {
                var _bitmap$close3, _gl$getExtension, bitmap, blob, canvas, gl, _bitmap$close2, tex, fb, result, px, _t13;
                return _regenerator().w(function(_context17) {
                    while (1) switch (_context17.p = _context17.n) {
                      case 0:
                        _context17.p = 0;
                        blob = new Blob([ STRAIGHT_ALPHA_TEST_PNG ], {
                            type: "image/png"
                        });
                        _context17.n = 1;
                        return platform.createImageBitmap(blob, {
                            premultiplyAlpha: "premultiply",
                            colorSpaceConversion: "none",
                            imageOrientation: "none"
                        });

                      case 1:
                        bitmap = _context17.v;
                        _context17.n = 3;
                        break;

                      case 2:
                        _context17.p = 2;
                        _t13 = _context17.v;
                        return _context17.a(2, null);

                      case 3:
                        canvas = platform.createCanvas();
                        canvas.width = 1;
                        canvas.height = 1;
                        gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
                        if (!(gl === null)) {
                            _context17.n = 4;
                            break;
                        }
                        (_bitmap$close2 = bitmap.close) == null || _bitmap$close2.call(bitmap);
                        return _context17.a(2, null);

                      case 4:
                        tex = gl.createTexture();
                        gl.bindTexture(gl.TEXTURE_2D, tex);
                        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
                        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
                        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, bitmap);
                        fb = gl.createFramebuffer();
                        gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
                        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
                        result = null;
                        if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) === gl.FRAMEBUFFER_COMPLETE) {
                            px = new Uint8Array(4);
                            gl.readPixels(0, 0, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, px);
                            result = px[0] < 192;
                        }
                        gl.deleteFramebuffer(fb);
                        gl.deleteTexture(tex);
                        (_bitmap$close3 = bitmap.close) == null || _bitmap$close3.call(bitmap);
                        (_gl$getExtension = gl.getExtension("WEBGL_lose_context")) == null || _gl$getExtension.loseContext();
                        return _context17.a(2, result);
                    }
                }, _callee16, null, [ [ 0, 2 ] ]);
            }));
            return _detectPremultiplyAlphaHonored.apply(this, arguments);
        }
        function isAdvancedShaderProp(obj) {
            return obj !== null && _typeof(obj) === "object" && obj.default !== void 0;
        }
        function resolveShaderProps(props, propsConfig) {
            for (var key in propsConfig) {
                if (!isAdvancedShaderProp(propsConfig[key]) && props[key] === void 0) {
                    props[key] = propsConfig[key];
                    continue;
                }
                var pConfig = propsConfig[key];
                var hasValue = props[key] !== void 0;
                if (pConfig.resolve !== void 0) {
                    props[key] = pConfig.resolve(props[key], props);
                    continue;
                }
                if (hasValue && pConfig.set !== void 0) {
                    pConfig.set(props[key], props);
                    continue;
                }
                if (hasValue) continue;
                if (props[key] === void 0 && pConfig.get === void 0) {
                    var def = pConfig.default;
                    props[key] = Array.isArray(def) === true ? def.slice() : def;
                    continue;
                }
                props[key] = pConfig.get(props);
            }
        }
        function santizeCustomDataMap(d) {
            var validTypes = {
                boolean: true,
                string: true,
                number: true,
                undefined: true
            };
            var keys = Object.keys(d);
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                if (!key) continue;
                var value = d[key];
                var valueType = _typeof(value);
                if (valueType === "string" && value.length > 2048) {
                    console.warn("Custom Data value for ".concat(key, " is too long, it will be truncated to 2048 characters"));
                    d[key] = value.substring(0, 2048);
                }
                if (!validTypes[valueType]) {
                    console.warn("Custom Data value for ".concat(key, " is not a boolean, string, or number, it will be ignored"));
                    delete d[key];
                }
            }
            return d;
        }
        function _getContextId(count) {
            var num = String(count), len = num.length - 1;
            return sharedConfig.context.id + (len ? String.fromCharCode(96 + len) : "") + num;
        }
        function setHydrateContext(context) {
            sharedConfig.context = context;
        }
        function nextHydrateContext() {
            return _objectSpread(_objectSpread({}, sharedConfig.context), {}, {
                id: sharedConfig.getNextContextId(),
                count: 0
            });
        }
        function createRoot(fn, detachedOwner) {
            var listener = Listener, owner = Owner, unowned = fn.length === 0, current = detachedOwner === void 0 ? owner : detachedOwner, root = unowned ? UNOWNED : {
                owned: null,
                cleanups: null,
                context: current ? current.context : null,
                owner: current
            }, updateFn = unowned ? fn : function() {
                return fn(function() {
                    return untrack(function() {
                        return cleanNode(root);
                    });
                });
            };
            Owner = root;
            Listener = null;
            try {
                return runUpdates(updateFn, true);
            } finally {
                Listener = listener;
                Owner = owner;
            }
        }
        function createSignal(value, options) {
            options = options ? Object.assign({}, signalOptions, options) : signalOptions;
            var s = {
                value: value,
                observers: null,
                observerSlots: null,
                comparator: options.equals || void 0
            };
            var setter = function setter(value) {
                if (typeof value === "function") if (Transition && Transition.running && Transition.sources.has(s)) value = value(s.tValue); else value = value(s.value);
                return writeSignal(s, value);
            };
            return [ readSignal.bind(s), setter ];
        }
        function createComputed(fn, value, options) {
            var c = createComputation(fn, value, true, STALE);
            if (Scheduler && Transition && Transition.running) Updates.push(c); else updateComputation(c);
        }
        function createRenderEffect(fn, value, options) {
            var c = createComputation(fn, value, false, STALE);
            if (Scheduler && Transition && Transition.running) Updates.push(c); else updateComputation(c);
        }
        function createEffect(fn, value, options) {
            runEffects = runUserEffects;
            var c = createComputation(fn, value, false, STALE), s = SuspenseContext && useContext(SuspenseContext);
            if (s) c.suspense = s;
            if (!options || !options.render) c.user = true;
            Effects ? Effects.push(c) : updateComputation(c);
        }
        function createMemo(fn, value, options) {
            options = options ? Object.assign({}, signalOptions, options) : signalOptions;
            var c = createComputation(fn, value, true, 0);
            c.observers = null;
            c.observerSlots = null;
            c.comparator = options.equals || void 0;
            if (Scheduler && Transition && Transition.running) {
                c.tState = STALE;
                Updates.push(c);
            } else updateComputation(c);
            return readSignal.bind(c);
        }
        function isPromise(v) {
            return v && _typeof(v) === "object" && "then" in v;
        }
        function createResource(pSource, pFetcher, pOptions) {
            var source;
            var fetcher;
            var options;
            if (typeof pFetcher === "function") {
                source = pSource;
                fetcher = pFetcher;
                options = pOptions || {};
            } else {
                source = true;
                fetcher = pSource;
                options = pFetcher || {};
            }
            var pr = null, initP = NO_INIT, id = null, loadedUnderTransition = false, scheduled = false, resolved = "initialValue" in options, dynamic = typeof source === "function" && createMemo(source);
            var contexts = new Set, _ref0 = (options.storage || createSignal)(options.initialValue), _ref1 = _slicedToArray(_ref0, 2), value = _ref1[0], setValue = _ref1[1], _createSignal = createSignal(void 0), _createSignal2 = _slicedToArray(_createSignal, 2), error = _createSignal2[0], setError = _createSignal2[1], _createSignal3 = createSignal(void 0, {
                equals: false
            }), _createSignal4 = _slicedToArray(_createSignal3, 2), track = _createSignal4[0], trigger = _createSignal4[1], _createSignal5 = createSignal(resolved ? "ready" : "unresolved"), _createSignal6 = _slicedToArray(_createSignal5, 2), state = _createSignal6[0], setState = _createSignal6[1];
            if (sharedConfig.context) {
                id = sharedConfig.getNextContextId();
                if (options.ssrLoadFrom === "initial") initP = options.initialValue; else if (sharedConfig.load && sharedConfig.has(id)) initP = sharedConfig.load(id);
            }
            function loadEnd(p, v, error, key) {
                if (pr === p) {
                    pr = null;
                    key !== void 0 && (resolved = true);
                    if ((p === initP || v === initP) && options.onHydrated) queueMicrotask(function() {
                        return options.onHydrated(key, {
                            value: v
                        });
                    });
                    initP = NO_INIT;
                    if (Transition && p && loadedUnderTransition) {
                        Transition.promises.delete(p);
                        loadedUnderTransition = false;
                        runUpdates(function() {
                            Transition.running = true;
                            completeLoad(v, error);
                        }, false);
                    } else completeLoad(v, error);
                }
                return v;
            }
            function completeLoad(v, err) {
                runUpdates(function() {
                    if (err === void 0) setValue(function() {
                        return v;
                    });
                    setState(err !== void 0 ? "errored" : resolved ? "ready" : "unresolved");
                    setError(err);
                    var _iterator = _createForOfIteratorHelper(contexts.keys()), _step;
                    try {
                        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                            var c = _step.value;
                            c.decrement();
                        }
                    } catch (err) {
                        _iterator.e(err);
                    } finally {
                        _iterator.f();
                    }
                    contexts.clear();
                }, false);
            }
            function read() {
                var c = SuspenseContext && useContext(SuspenseContext), v = value(), err = error();
                if (err !== void 0 && !pr) throw err;
                if (Listener && !Listener.user && c) createComputed(function() {
                    track();
                    if (pr) {
                        if (c.resolved && Transition && loadedUnderTransition) Transition.promises.add(pr); else if (!contexts.has(c)) {
                            c.increment();
                            contexts.add(c);
                        }
                    }
                });
                return v;
            }
            function load() {
                var refetching = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
                if (refetching !== false && scheduled) return;
                scheduled = false;
                var lookup = dynamic ? dynamic() : source;
                loadedUnderTransition = Transition && Transition.running;
                if (lookup == null || lookup === false) {
                    loadEnd(pr, untrack(value));
                    return;
                }
                if (Transition && pr) Transition.promises.delete(pr);
                var error;
                var p = initP !== NO_INIT ? initP : untrack(function() {
                    try {
                        return fetcher(lookup, {
                            value: value(),
                            refetching: refetching
                        });
                    } catch (fetcherError) {
                        error = fetcherError;
                    }
                });
                if (error !== void 0) {
                    loadEnd(pr, void 0, castError(error), lookup);
                    return;
                } else if (!isPromise(p)) {
                    loadEnd(pr, p, void 0, lookup);
                    return p;
                }
                pr = p;
                if ("v" in p) {
                    if (p.s === 1) loadEnd(pr, p.v, void 0, lookup); else loadEnd(pr, void 0, castError(p.v), lookup);
                    return p;
                }
                scheduled = true;
                queueMicrotask(function() {
                    return scheduled = false;
                });
                runUpdates(function() {
                    setState(resolved ? "refreshing" : "pending");
                    trigger();
                }, false);
                return p.then(function(v) {
                    return loadEnd(p, v, void 0, lookup);
                }, function(e) {
                    return loadEnd(p, void 0, castError(e), lookup);
                });
            }
            Object.defineProperties(read, {
                state: {
                    get: function get() {
                        return state();
                    }
                },
                error: {
                    get: function get() {
                        return error();
                    }
                },
                loading: {
                    get: function get() {
                        var s = state();
                        return s === "pending" || s === "refreshing";
                    }
                },
                latest: {
                    get: function get() {
                        if (!resolved) return read();
                        var err = error();
                        if (err && !pr) throw err;
                        return value();
                    }
                }
            });
            var owner = Owner;
            if (dynamic) createComputed(function() {
                return owner = Owner, load(false);
            }); else load(false);
            return [ read, {
                refetch: function refetch(info) {
                    return runWithOwner(owner, function() {
                        return load(info);
                    });
                },
                mutate: setValue
            } ];
        }
        function createSelector(source) {
            var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : equalFn;
            var options = arguments.length > 2 ? arguments[2] : undefined;
            var subs = new Map;
            var node = createComputation(function(p) {
                var v = source();
                var _iterator2 = _createForOfIteratorHelper(subs.entries()), _step2;
                try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                        var _step2$value = _slicedToArray(_step2.value, 2), key = _step2$value[0], val = _step2$value[1];
                        if (fn(key, v) !== fn(key, p)) {
                            var _iterator3 = _createForOfIteratorHelper(val.values()), _step3;
                            try {
                                for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                                    var c = _step3.value;
                                    c.state = STALE;
                                    if (c.pure) Updates.push(c); else Effects.push(c);
                                }
                            } catch (err) {
                                _iterator3.e(err);
                            } finally {
                                _iterator3.f();
                            }
                        }
                    }
                } catch (err) {
                    _iterator2.e(err);
                } finally {
                    _iterator2.f();
                }
                return v;
            }, void 0, true, STALE);
            updateComputation(node);
            return function(key) {
                var listener = Listener;
                if (listener) {
                    var l;
                    if (l = subs.get(key)) l.add(listener); else subs.set(key, l = new Set([ listener ]));
                    onCleanup(function() {
                        l.delete(listener);
                        !l.size && subs.delete(key);
                    });
                }
                return fn(key, Transition && Transition.running && Transition.sources.has(node) ? node.tValue : node.value);
            };
        }
        function batch(fn) {
            return runUpdates(fn, false);
        }
        function untrack(fn) {
            if (!ExternalSourceConfig && Listener === null) return fn();
            var listener = Listener;
            Listener = null;
            try {
                if (ExternalSourceConfig) return ExternalSourceConfig.untrack(fn);
                return fn();
            } finally {
                Listener = listener;
            }
        }
        function on(deps, fn, options) {
            var isArray = Array.isArray(deps);
            var prevInput;
            var defer = options && options.defer;
            return function(prevValue) {
                var input;
                if (isArray) {
                    input = Array(deps.length);
                    for (var i = 0; i < deps.length; i++) input[i] = deps[i]();
                } else input = deps();
                if (defer) {
                    defer = false;
                    return prevValue;
                }
                var result = untrack(function() {
                    return fn(input, prevInput, prevValue);
                });
                prevInput = input;
                return result;
            };
        }
        function onMount(fn) {
            createEffect(function() {
                return untrack(fn);
            });
        }
        function onCleanup(fn) {
            if (Owner === null) ; else if (Owner.cleanups === null) Owner.cleanups = [ fn ]; else Owner.cleanups.push(fn);
            return fn;
        }
        function getListener() {
            return Listener;
        }
        function getOwner() {
            return Owner;
        }
        function runWithOwner(o, fn) {
            var prev = Owner;
            var prevListener = Listener;
            Owner = o;
            Listener = null;
            try {
                return runUpdates(fn, true);
            } catch (err) {
                handleError(err);
            } finally {
                Owner = prev;
                Listener = prevListener;
            }
        }
        function startTransition(fn) {
            if (Transition && Transition.running) {
                fn();
                return Transition.done;
            }
            var l = Listener;
            var o = Owner;
            return Promise.resolve().then(function() {
                Listener = l;
                Owner = o;
                var t;
                if (Scheduler || SuspenseContext) {
                    t = Transition || (Transition = {
                        sources: new Set,
                        effects: [],
                        promises: new Set,
                        disposed: new Set,
                        queue: new Set,
                        running: true
                    });
                    t.done || (t.done = new Promise(function(res) {
                        return t.resolve = res;
                    }));
                    t.running = true;
                }
                runUpdates(fn, false);
                Listener = Owner = null;
                return t ? t.done : void 0;
            });
        }
        function resumeEffects(e) {
            Effects.push.apply(Effects, e);
            e.length = 0;
        }
        function createContext(defaultValue, options) {
            var id = Symbol("context");
            return {
                id: id,
                Provider: createProvider(id),
                defaultValue: defaultValue
            };
        }
        function useContext(context) {
            var value;
            return Owner && Owner.context && (value = Owner.context[context.id]) !== void 0 ? value : context.defaultValue;
        }
        function children(fn) {
            var children = createMemo(fn);
            var memo = createMemo(function() {
                return resolveChildren(children());
            });
            memo.toArray = function() {
                var c = memo();
                return Array.isArray(c) ? c : c != null ? [ c ] : [];
            };
            return memo;
        }
        function getSuspenseContext() {
            return SuspenseContext || (SuspenseContext = createContext());
        }
        function readSignal() {
            var _this2 = this;
            var runningTransition = Transition && Transition.running;
            if (this.sources && (runningTransition ? this.tState : this.state)) if ((runningTransition ? this.tState : this.state) === STALE) updateComputation(this); else {
                var updates = Updates;
                Updates = null;
                runUpdates(function() {
                    return lookUpstream(_this2);
                }, false);
                Updates = updates;
            }
            if (Listener) {
                var sSlot = this.observers ? this.observers.length : 0;
                if (!Listener.sources) {
                    Listener.sources = [ this ];
                    Listener.sourceSlots = [ sSlot ];
                } else {
                    Listener.sources.push(this);
                    Listener.sourceSlots.push(sSlot);
                }
                if (!this.observers) {
                    this.observers = [ Listener ];
                    this.observerSlots = [ Listener.sources.length - 1 ];
                } else {
                    this.observers.push(Listener);
                    this.observerSlots.push(Listener.sources.length - 1);
                }
            }
            if (runningTransition && Transition.sources.has(this)) return this.tValue;
            return this.value;
        }
        function writeSignal(node, value, isComp) {
            var current = Transition && Transition.running && Transition.sources.has(node) ? node.tValue : node.value;
            if (!node.comparator || !node.comparator(current, value)) {
                if (Transition) {
                    var TransitionRunning = Transition.running;
                    if (TransitionRunning || !isComp && Transition.sources.has(node)) {
                        Transition.sources.add(node);
                        node.tValue = value;
                    }
                    if (!TransitionRunning) node.value = value;
                } else node.value = value;
                if (node.observers && node.observers.length) runUpdates(function() {
                    for (var i = 0; i < node.observers.length; i += 1) {
                        var o = node.observers[i];
                        var _TransitionRunning = Transition && Transition.running;
                        if (_TransitionRunning && Transition.disposed.has(o)) continue;
                        if (_TransitionRunning ? !o.tState : !o.state) {
                            if (o.pure) Updates.push(o); else Effects.push(o);
                            if (o.observers) markDownstream(o);
                        }
                        if (!_TransitionRunning) o.state = STALE; else o.tState = STALE;
                    }
                    if (Updates.length > 1e6) {
                        Updates = [];
                        throw new Error;
                    }
                }, false);
            }
            return value;
        }
        function updateComputation(node) {
            if (!node.fn) return;
            cleanNode(node);
            var time = ExecCount;
            runComputation(node, Transition && Transition.running && Transition.sources.has(node) ? node.tValue : node.value, time);
            if (Transition && !Transition.running && Transition.sources.has(node)) queueMicrotask(function() {
                runUpdates(function() {
                    Transition && (Transition.running = true);
                    Listener = Owner = node;
                    runComputation(node, node.tValue, time);
                    Listener = Owner = null;
                }, false);
            });
        }
        function runComputation(node, value, time) {
            var nextValue;
            var owner = Owner, listener = Listener;
            Listener = Owner = node;
            try {
                nextValue = node.fn(value);
            } catch (err) {
                if (node.pure) if (Transition && Transition.running) {
                    node.tState = STALE;
                    node.tOwned && node.tOwned.forEach(cleanNode);
                    node.tOwned = void 0;
                } else {
                    node.state = STALE;
                    node.owned && node.owned.forEach(cleanNode);
                    node.owned = null;
                }
                node.updatedAt = time + 1;
                return handleError(err);
            } finally {
                Listener = listener;
                Owner = owner;
            }
            if (!node.updatedAt || node.updatedAt <= time) {
                if (node.updatedAt != null && "observers" in node) writeSignal(node, nextValue, true); else if (Transition && Transition.running && node.pure) {
                    Transition.sources.add(node);
                    node.tValue = nextValue;
                } else node.value = nextValue;
                node.updatedAt = time;
            }
        }
        function createComputation(fn, init, pure) {
            var state = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : STALE;
            var options = arguments.length > 4 ? arguments[4] : undefined;
            var c = {
                fn: fn,
                state: state,
                updatedAt: null,
                owned: null,
                sources: null,
                sourceSlots: null,
                cleanups: null,
                value: init,
                owner: Owner,
                context: Owner ? Owner.context : null,
                pure: pure
            };
            if (Transition && Transition.running) {
                c.state = 0;
                c.tState = state;
            }
            if (Owner === null) ; else if (Owner !== UNOWNED) if (Transition && Transition.running && Owner.pure) {
                if (!Owner.tOwned) Owner.tOwned = [ c ]; else Owner.tOwned.push(c);
            } else if (!Owner.owned) Owner.owned = [ c ]; else Owner.owned.push(c);
            if (ExternalSourceConfig && c.fn) {
                var _createSignal7 = createSignal(void 0, {
                    equals: false
                }), _createSignal8 = _slicedToArray(_createSignal7, 2), track = _createSignal8[0], trigger = _createSignal8[1];
                var ordinary = ExternalSourceConfig.factory(c.fn, trigger);
                onCleanup(function() {
                    return ordinary.dispose();
                });
                var triggerInTransition = function triggerInTransition() {
                    return startTransition(trigger).then(function() {
                        return inTransition.dispose();
                    });
                };
                var inTransition = ExternalSourceConfig.factory(c.fn, triggerInTransition);
                c.fn = function(x) {
                    track();
                    return Transition && Transition.running ? inTransition.track(x) : ordinary.track(x);
                };
            }
            return c;
        }
        function runTop(node) {
            var runningTransition = Transition && Transition.running;
            if ((runningTransition ? node.tState : node.state) === 0) return;
            if ((runningTransition ? node.tState : node.state) === PENDING) return lookUpstream(node);
            if (node.suspense && untrack(node.suspense.inFallback)) return node.suspense.effects.push(node);
            var ancestors = [ node ];
            while ((node = node.owner) && (!node.updatedAt || node.updatedAt < ExecCount)) {
                if (runningTransition && Transition.disposed.has(node)) return;
                if (runningTransition ? node.tState : node.state) ancestors.push(node);
            }
            for (var i = ancestors.length - 1; i >= 0; i--) {
                node = ancestors[i];
                if (runningTransition) {
                    var top = node, prev = ancestors[i + 1];
                    while ((top = top.owner) && top !== prev) if (Transition.disposed.has(top)) return;
                }
                if ((runningTransition ? node.tState : node.state) === STALE) updateComputation(node); else if ((runningTransition ? node.tState : node.state) === PENDING) {
                    var updates = Updates;
                    Updates = null;
                    runUpdates(function() {
                        return lookUpstream(node, ancestors[0]);
                    }, false);
                    Updates = updates;
                }
            }
        }
        function runUpdates(fn, init) {
            if (Updates) return fn();
            var wait = false;
            if (!init) Updates = [];
            if (Effects) wait = true; else Effects = [];
            ExecCount++;
            try {
                var res = fn();
                completeUpdates(wait);
                return res;
            } catch (err) {
                if (!wait) Effects = null;
                Updates = null;
                handleError(err);
            }
        }
        function completeUpdates(wait) {
            if (Updates) {
                if (Scheduler && Transition && Transition.running) scheduleQueue(Updates); else runQueue(Updates);
                Updates = null;
            }
            if (wait) return;
            var res;
            if (Transition) {
                if (!Transition.promises.size && !Transition.queue.size) {
                    var sources = Transition.sources;
                    var disposed = Transition.disposed;
                    Effects.push.apply(Effects, Transition.effects);
                    res = Transition.resolve;
                    var _iterator4 = _createForOfIteratorHelper(Effects), _step4;
                    try {
                        for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
                            var _e = _step4.value;
                            "tState" in _e && (_e.state = _e.tState);
                            delete _e.tState;
                        }
                    } catch (err) {
                        _iterator4.e(err);
                    } finally {
                        _iterator4.f();
                    }
                    Transition = null;
                    runUpdates(function() {
                        var _iterator5 = _createForOfIteratorHelper(disposed), _step5;
                        try {
                            for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
                                var d = _step5.value;
                                cleanNode(d);
                            }
                        } catch (err) {
                            _iterator5.e(err);
                        } finally {
                            _iterator5.f();
                        }
                        var _iterator6 = _createForOfIteratorHelper(sources), _step6;
                        try {
                            for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
                                var v = _step6.value;
                                v.value = v.tValue;
                                if (v.owned) for (var i = 0, len = v.owned.length; i < len; i++) cleanNode(v.owned[i]);
                                if (v.tOwned) v.owned = v.tOwned;
                                delete v.tValue;
                                delete v.tOwned;
                                v.tState = 0;
                            }
                        } catch (err) {
                            _iterator6.e(err);
                        } finally {
                            _iterator6.f();
                        }
                        setTransPending(false);
                    }, false);
                } else if (Transition.running) {
                    Transition.running = false;
                    Transition.effects.push.apply(Transition.effects, Effects);
                    Effects = null;
                    setTransPending(true);
                    return;
                }
            }
            var e = Effects;
            Effects = null;
            if (e.length) runUpdates(function() {
                return runEffects(e);
            }, false);
            if (res) res();
        }
        function runQueue(queue) {
            for (var i = 0; i < queue.length; i++) runTop(queue[i]);
        }
        function scheduleQueue(queue) {
            var _loop = function _loop() {
                var item = queue[i];
                var tasks = Transition.queue;
                if (!tasks.has(item)) {
                    tasks.add(item);
                    Scheduler(function() {
                        tasks.delete(item);
                        runUpdates(function() {
                            Transition.running = true;
                            runTop(item);
                        }, false);
                        Transition && (Transition.running = false);
                    });
                }
            };
            for (var i = 0; i < queue.length; i++) {
                _loop();
            }
        }
        function runUserEffects(queue) {
            var i, userLength = 0;
            for (i = 0; i < queue.length; i++) {
                var e = queue[i];
                if (!e.user) runTop(e); else queue[userLength++] = e;
            }
            if (sharedConfig.context) {
                if (sharedConfig.count) {
                    var _sharedConfig$effects;
                    sharedConfig.effects || (sharedConfig.effects = []);
                    (_sharedConfig$effects = sharedConfig.effects).push.apply(_sharedConfig$effects, _toConsumableArray(queue.slice(0, userLength)));
                    return;
                }
                setHydrateContext();
            }
            if (sharedConfig.effects && (sharedConfig.done || !sharedConfig.count)) {
                queue = [].concat(_toConsumableArray(sharedConfig.effects), _toConsumableArray(queue));
                userLength += sharedConfig.effects.length;
                delete sharedConfig.effects;
            }
            for (i = 0; i < userLength; i++) runTop(queue[i]);
        }
        function lookUpstream(node, ignore) {
            var runningTransition = Transition && Transition.running;
            if (runningTransition) node.tState = 0; else node.state = 0;
            for (var i = 0; i < node.sources.length; i += 1) {
                var source = node.sources[i];
                if (source.sources) {
                    var state = runningTransition ? source.tState : source.state;
                    if (state === STALE) {
                        if (source !== ignore && (!source.updatedAt || source.updatedAt < ExecCount)) runTop(source);
                    } else if (state === PENDING) lookUpstream(source, ignore);
                }
            }
        }
        function markDownstream(node) {
            var runningTransition = Transition && Transition.running;
            for (var i = 0; i < node.observers.length; i += 1) {
                var o = node.observers[i];
                if (runningTransition ? !o.tState : !o.state) {
                    if (runningTransition) o.tState = PENDING; else o.state = PENDING;
                    if (o.pure) Updates.push(o); else Effects.push(o);
                    o.observers && markDownstream(o);
                }
            }
        }
        function cleanNode(node) {
            var i;
            if (node.sources) while (node.sources.length) {
                var source = node.sources.pop(), index = node.sourceSlots.pop(), obs = source.observers;
                if (obs && obs.length) {
                    var n = obs.pop(), s = source.observerSlots.pop();
                    if (index < obs.length) {
                        n.sourceSlots[s] = index;
                        obs[index] = n;
                        source.observerSlots[index] = s;
                    }
                }
            }
            if (node.tOwned) {
                for (i = node.tOwned.length - 1; i >= 0; i--) cleanNode(node.tOwned[i]);
                delete node.tOwned;
            }
            if (Transition && Transition.running && node.pure) reset(node, true); else if (node.owned) {
                for (i = node.owned.length - 1; i >= 0; i--) cleanNode(node.owned[i]);
                node.owned = null;
            }
            if (node.cleanups) {
                for (i = node.cleanups.length - 1; i >= 0; i--) node.cleanups[i]();
                node.cleanups = null;
            }
            if (Transition && Transition.running) node.tState = 0; else node.state = 0;
        }
        function reset(node, top) {
            if (!top) {
                node.tState = 0;
                Transition.disposed.add(node);
            }
            if (node.owned) for (var i = 0; i < node.owned.length; i++) reset(node.owned[i]);
        }
        function castError(err) {
            if (err instanceof Error) return err;
            return new Error(typeof err === "string" ? err : "Unknown error", {
                cause: err
            });
        }
        function runErrors(err, fns, owner) {
            try {
                var _iterator7 = _createForOfIteratorHelper(fns), _step7;
                try {
                    for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
                        var f = _step7.value;
                        f(err);
                    }
                } catch (err) {
                    _iterator7.e(err);
                } finally {
                    _iterator7.f();
                }
            } catch (e) {
                handleError(e, owner && owner.owner || null);
            }
        }
        function handleError(err) {
            var owner = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Owner;
            var fns = ERROR && owner && owner.context && owner.context[ERROR];
            var error = castError(err);
            if (!fns) throw error;
            if (Effects) Effects.push({
                fn: function fn() {
                    runErrors(error, fns, owner);
                },
                state: STALE
            }); else runErrors(error, fns, owner);
        }
        function resolveChildren(children) {
            if (typeof children === "function" && !children.length) return resolveChildren(children());
            if (Array.isArray(children)) {
                var results = [];
                for (var i = 0; i < children.length; i++) {
                    var result = resolveChildren(children[i]);
                    Array.isArray(result) ? results.push.apply(results, result) : results.push(result);
                }
                return results;
            }
            return children;
        }
        function createProvider(id, options) {
            return function provider(props) {
                var res;
                createRenderEffect(function() {
                    return res = untrack(function() {
                        Owner.context = _objectSpread(_objectSpread({}, Owner.context), {}, _defineProperty({}, id, props.value));
                        return children(function() {
                            return props.children;
                        });
                    });
                }, void 0);
                return res;
            };
        }
        function dispose(d) {
            for (var i = 0; i < d.length; i++) d[i]();
        }
        function mapArray(list, mapFn) {
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var items = [], mapped = [], disposers = [], len = 0, indexes = mapFn.length > 1 ? [] : null;
            onCleanup(function() {
                return dispose(disposers);
            });
            return function() {
                var newItems = list() || [], newLen = newItems.length, i, j;
                newItems[$TRACK];
                return untrack(function() {
                    var newIndices, newIndicesNext, temp, tempdisposers, tempIndexes, start, end, newEnd, item;
                    if (newLen === 0) {
                        if (len !== 0) {
                            dispose(disposers);
                            disposers = [];
                            items = [];
                            mapped = [];
                            len = 0;
                            indexes && (indexes = []);
                        }
                        if (options.fallback) {
                            items = [ FALLBACK ];
                            mapped[0] = createRoot(function(disposer) {
                                disposers[0] = disposer;
                                return options.fallback();
                            });
                            len = 1;
                        }
                    } else if (len === 0) {
                        mapped = new Array(newLen);
                        for (j = 0; j < newLen; j++) {
                            items[j] = newItems[j];
                            mapped[j] = createRoot(mapper);
                        }
                        len = newLen;
                    } else {
                        temp = new Array(newLen);
                        tempdisposers = new Array(newLen);
                        indexes && (tempIndexes = new Array(newLen));
                        for (start = 0, end = Math.min(len, newLen); start < end && items[start] === newItems[start]; start++) ;
                        for (end = len - 1, newEnd = newLen - 1; end >= start && newEnd >= start && items[end] === newItems[newEnd]; end--, 
                        newEnd--) {
                            temp[newEnd] = mapped[end];
                            tempdisposers[newEnd] = disposers[end];
                            indexes && (tempIndexes[newEnd] = indexes[end]);
                        }
                        newIndices = new Map;
                        newIndicesNext = new Array(newEnd + 1);
                        for (j = newEnd; j >= start; j--) {
                            item = newItems[j];
                            i = newIndices.get(item);
                            newIndicesNext[j] = i === void 0 ? -1 : i;
                            newIndices.set(item, j);
                        }
                        for (i = start; i <= end; i++) {
                            item = items[i];
                            j = newIndices.get(item);
                            if (j !== void 0 && j !== -1) {
                                temp[j] = mapped[i];
                                tempdisposers[j] = disposers[i];
                                indexes && (tempIndexes[j] = indexes[i]);
                                j = newIndicesNext[j];
                                newIndices.set(item, j);
                            } else disposers[i]();
                        }
                        for (j = start; j < newLen; j++) if (j in temp) {
                            mapped[j] = temp[j];
                            disposers[j] = tempdisposers[j];
                            if (indexes) {
                                indexes[j] = tempIndexes[j];
                                indexes[j](j);
                            }
                        } else mapped[j] = createRoot(mapper);
                        mapped = mapped.slice(0, len = newLen);
                        items = newItems.slice(0);
                    }
                    return mapped;
                });
                function mapper(disposer) {
                    disposers[j] = disposer;
                    if (indexes) {
                        var _createSignal9 = createSignal(j), _createSignal0 = _slicedToArray(_createSignal9, 2), s = _createSignal0[0], set = _createSignal0[1];
                        indexes[j] = set;
                        return mapFn(newItems[j], s);
                    }
                    return mapFn(newItems[j]);
                }
            };
        }
        function indexArray(list, mapFn) {
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var items = [], mapped = [], disposers = [], signals = [], len = 0, i;
            onCleanup(function() {
                return dispose(disposers);
            });
            return function() {
                var newItems = list() || [], newLen = newItems.length;
                newItems[$TRACK];
                return untrack(function() {
                    if (newLen === 0) {
                        if (len !== 0) {
                            dispose(disposers);
                            disposers = [];
                            items = [];
                            mapped = [];
                            len = 0;
                            signals = [];
                        }
                        if (options.fallback) {
                            items = [ FALLBACK ];
                            mapped[0] = createRoot(function(disposer) {
                                disposers[0] = disposer;
                                return options.fallback();
                            });
                            len = 1;
                        }
                        return mapped;
                    }
                    if (items[0] === FALLBACK) {
                        disposers[0]();
                        disposers = [];
                        items = [];
                        mapped = [];
                        len = 0;
                    }
                    for (i = 0; i < newLen; i++) if (i < items.length && items[i] !== newItems[i]) signals[i](function() {
                        return newItems[i];
                    }); else if (i >= items.length) mapped[i] = createRoot(mapper);
                    for (;i < items.length; i++) disposers[i]();
                    len = signals.length = disposers.length = newLen;
                    items = newItems.slice(0);
                    return mapped = mapped.slice(0, len);
                });
                function mapper(disposer) {
                    disposers[i] = disposer;
                    var _createSignal1 = createSignal(newItems[i]), _createSignal10 = _slicedToArray(_createSignal1, 2), s = _createSignal10[0], set = _createSignal10[1];
                    signals[i] = set;
                    return mapFn(s, i);
                }
            };
        }
        function createComponent$1(Comp, props) {
            if (hydrationEnabled) {
                if (sharedConfig.context) {
                    var c = sharedConfig.context;
                    setHydrateContext(nextHydrateContext());
                    var r = untrack(function() {
                        return Comp(props || {});
                    });
                    setHydrateContext(c);
                    return r;
                }
            }
            return untrack(function() {
                return Comp(props || {});
            });
        }
        function trueFn() {
            return true;
        }
        function resolveSource(s) {
            return !(s = typeof s === "function" ? s() : s) ? {} : s;
        }
        function resolveSources() {
            for (var i = 0, length = this.length; i < length; ++i) {
                var v = this[i]();
                if (v !== void 0) return v;
            }
        }
        function mergeProps() {
            for (var _len2 = arguments.length, sources = new Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
                sources[_key3] = arguments[_key3];
            }
            var proxy = false;
            for (var i = 0; i < sources.length; i++) {
                var s = sources[i];
                proxy = proxy || !!s && $PROXY in s;
                sources[i] = typeof s === "function" ? (proxy = true, createMemo(s)) : s;
            }
            if (SUPPORTS_PROXY && proxy) return new Proxy({
                get: function get(property) {
                    for (var _i2 = sources.length - 1; _i2 >= 0; _i2--) {
                        var v = resolveSource(sources[_i2])[property];
                        if (v !== void 0) return v;
                    }
                },
                has: function has(property) {
                    for (var _i3 = sources.length - 1; _i3 >= 0; _i3--) if (property in resolveSource(sources[_i3])) return true;
                    return false;
                },
                keys: function keys() {
                    var keys = [];
                    for (var _i4 = 0; _i4 < sources.length; _i4++) keys.push.apply(keys, _toConsumableArray(Object.keys(resolveSource(sources[_i4]))));
                    return _toConsumableArray(new Set(keys));
                }
            }, propTraps);
            var sourcesMap = {};
            var defined = Object.create(null);
            for (var _i5 = sources.length - 1; _i5 >= 0; _i5--) {
                var source = sources[_i5];
                if (!source) continue;
                var sourceKeys = Object.getOwnPropertyNames(source);
                var _loop2 = function _loop2() {
                    var key = sourceKeys[_i6];
                    if (key === "__proto__" || key === "constructor") return 1;
                    var desc = Object.getOwnPropertyDescriptor(source, key);
                    if (!defined[key]) defined[key] = desc.get ? {
                        enumerable: true,
                        configurable: true,
                        get: resolveSources.bind(sourcesMap[key] = [ desc.get.bind(source) ])
                    } : desc.value !== void 0 ? desc : void 0; else {
                        var _sources = sourcesMap[key];
                        if (_sources) {
                            if (desc.get) _sources.push(desc.get.bind(source)); else if (desc.value !== void 0) _sources.push(function() {
                                return desc.value;
                            });
                        }
                    }
                };
                for (var _i6 = sourceKeys.length - 1; _i6 >= 0; _i6--) {
                    if (_loop2()) continue;
                }
            }
            var target = {};
            var definedKeys = Object.keys(defined);
            for (var _i7 = definedKeys.length - 1; _i7 >= 0; _i7--) {
                var key = definedKeys[_i7], desc = defined[key];
                if (desc && desc.get) Object.defineProperty(target, key, desc); else target[key] = desc ? desc.value : void 0;
            }
            return target;
        }
        function splitProps(props) {
            for (var _len3 = arguments.length, keys = new Array(_len3 > 1 ? _len3 - 1 : 0), _key4 = 1; _key4 < _len3; _key4++) {
                keys[_key4 - 1] = arguments[_key4];
            }
            if (SUPPORTS_PROXY && $PROXY in props) {
                var blocked = new Set(keys.length > 1 ? keys.flat() : keys[0]);
                var res = keys.map(function(k) {
                    return new Proxy({
                        get: function get(property) {
                            return k.includes(property) ? props[property] : void 0;
                        },
                        has: function has(property) {
                            return k.includes(property) && property in props;
                        },
                        keys: function keys() {
                            return k.filter(function(property) {
                                return property in props;
                            });
                        }
                    }, propTraps);
                });
                res.push(new Proxy({
                    get: function get(property) {
                        return blocked.has(property) ? void 0 : props[property];
                    },
                    has: function has(property) {
                        return blocked.has(property) ? false : property in props;
                    },
                    keys: function keys() {
                        return Object.keys(props).filter(function(k) {
                            return !blocked.has(k);
                        });
                    }
                }, propTraps));
                return res;
            }
            var otherObject = {};
            var objects = keys.map(function() {
                return {};
            });
            var _iterator8 = _createForOfIteratorHelper(Object.getOwnPropertyNames(props)), _step8;
            try {
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
                    var propName = _step8.value;
                    var desc = Object.getOwnPropertyDescriptor(props, propName);
                    var isDefaultDesc = !desc.get && !desc.set && desc.enumerable && desc.writable && desc.configurable;
                    var _blocked = false;
                    var objectIndex = 0;
                    var _iterator9 = _createForOfIteratorHelper(keys), _step9;
                    try {
                        for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
                            var k = _step9.value;
                            if (k.includes(propName)) {
                                _blocked = true;
                                isDefaultDesc ? objects[objectIndex][propName] = desc.value : Object.defineProperty(objects[objectIndex], propName, desc);
                            }
                            ++objectIndex;
                        }
                    } catch (err) {
                        _iterator9.e(err);
                    } finally {
                        _iterator9.f();
                    }
                    if (!_blocked) isDefaultDesc ? otherObject[propName] = desc.value : Object.defineProperty(otherObject, propName, desc);
                }
            } catch (err) {
                _iterator8.e(err);
            } finally {
                _iterator8.f();
            }
            return [].concat(_toConsumableArray(objects), [ otherObject ]);
        }
        function For(props) {
            var fallback = "fallback" in props && {
                fallback: function fallback() {
                    return props.fallback;
                }
            };
            return createMemo(mapArray(function() {
                return props.each;
            }, props.children, fallback || void 0));
        }
        function Index(props) {
            var fallback = "fallback" in props && {
                fallback: function fallback() {
                    return props.fallback;
                }
            };
            return createMemo(indexArray(function() {
                return props.each;
            }, props.children, fallback || void 0));
        }
        function Show(props) {
            var keyed = props.keyed;
            var conditionValue = createMemo(function() {
                return props.when;
            }, void 0, void 0);
            var condition = keyed ? conditionValue : createMemo(conditionValue, void 0, {
                equals: function equals(a, b) {
                    return !a === !b;
                }
            });
            return createMemo(function() {
                var c = condition();
                if (c) {
                    var child = props.children;
                    return typeof child === "function" && child.length > 0 ? untrack(function() {
                        return child(keyed ? c : function() {
                            if (!untrack(condition)) throw narrowedError("Show");
                            return conditionValue();
                        });
                    }) : child;
                }
                return props.fallback;
            }, void 0, void 0);
        }
        function Switch(props) {
            var chs = children(function() {
                return props.children;
            });
            var switchFunc = createMemo(function() {
                var ch = chs();
                var mps = Array.isArray(ch) ? ch : [ ch ];
                var func = function func() {
                    return void 0;
                };
                var _loop3 = function _loop3() {
                    var index = i;
                    var mp = mps[i];
                    var prevFunc = func;
                    var conditionValue = createMemo(function() {
                        return prevFunc() ? void 0 : mp.when;
                    }, void 0, void 0);
                    var condition = mp.keyed ? conditionValue : createMemo(conditionValue, void 0, {
                        equals: function equals(a, b) {
                            return !a === !b;
                        }
                    });
                    func = function func() {
                        return prevFunc() || (condition() ? [ index, conditionValue, mp ] : void 0);
                    };
                };
                for (var i = 0; i < mps.length; i++) {
                    _loop3();
                }
                return func;
            });
            return createMemo(function() {
                var sel = switchFunc()();
                if (!sel) return props.fallback;
                var _sel = _slicedToArray(sel, 3), index = _sel[0], conditionValue = _sel[1], mp = _sel[2];
                var child = mp.children;
                return typeof child === "function" && child.length > 0 ? untrack(function() {
                    return child(mp.keyed ? conditionValue() : function() {
                        var _untrack;
                        if (((_untrack = untrack(switchFunc)()) == null ? void 0 : _untrack[0]) !== index) throw narrowedError("Match");
                        return conditionValue();
                    });
                }) : child;
            }, void 0, void 0);
        }
        function Match(props) {
            return props;
        }
        function resetErrorBoundaries() {
            Errors && _toConsumableArray(Errors).forEach(function(fn) {
                return fn();
            });
        }
        function Suspense(props) {
            var counter = 0, show, ctx, p, flicker, error;
            var _createSignal11 = createSignal(false), _createSignal12 = _slicedToArray(_createSignal11, 2), inFallback = _createSignal12[0], setFallback = _createSignal12[1], SuspenseContext = getSuspenseContext(), store = {
                increment: function increment() {
                    if (++counter === 1) setFallback(true);
                },
                decrement: function decrement() {
                    if (--counter === 0) setFallback(false);
                },
                inFallback: inFallback,
                effects: [],
                resolved: false
            }, owner = getOwner();
            if (sharedConfig.context && sharedConfig.load) {
                var key = sharedConfig.getContextId();
                var ref = sharedConfig.load(key);
                if (ref) if (_typeof(ref) !== "object" || ref.s !== 1) p = ref; else sharedConfig.gather(key);
                if (p && p !== "$$f") {
                    var _createSignal13 = createSignal(void 0, {
                        equals: false
                    }), _createSignal14 = _slicedToArray(_createSignal13, 2), s = _createSignal14[0], set = _createSignal14[1];
                    flicker = s;
                    p.then(function() {
                        if (sharedConfig.done) return set();
                        sharedConfig.gather(key);
                        setHydrateContext(ctx);
                        set();
                        setHydrateContext();
                    }, function(err) {
                        error = err;
                        set();
                    });
                }
            }
            var listContext = useContext(SuspenseListContext);
            if (listContext) show = listContext.register(store.inFallback);
            var dispose;
            onCleanup(function() {
                return dispose && dispose();
            });
            return createComponent$1(SuspenseContext.Provider, {
                value: store,
                get children() {
                    return createMemo(function() {
                        if (error) throw error;
                        ctx = sharedConfig.context;
                        if (flicker) {
                            flicker();
                            flicker = void 0;
                            return;
                        }
                        if (ctx && p === "$$f") setHydrateContext();
                        var rendered = createMemo(function() {
                            return props.children;
                        });
                        return createMemo(function(prev) {
                            var inFallback = store.inFallback(), _ref15 = show ? show() : {}, _ref15$showContent = _ref15.showContent, showContent = _ref15$showContent === void 0 ? true : _ref15$showContent, _ref15$showFallback = _ref15.showFallback, showFallback = _ref15$showFallback === void 0 ? true : _ref15$showFallback;
                            if ((!inFallback || p && p !== "$$f") && showContent) {
                                store.resolved = true;
                                dispose && dispose();
                                dispose = ctx = p = void 0;
                                resumeEffects(store.effects);
                                return rendered();
                            }
                            if (!showFallback) return;
                            if (dispose) return prev;
                            return createRoot(function(disposer) {
                                dispose = disposer;
                                if (ctx) {
                                    setHydrateContext({
                                        id: ctx.id + "F",
                                        count: 0
                                    });
                                    ctx = void 0;
                                }
                                return props.fallback;
                            }, owner);
                        });
                    });
                }
            });
        }
        function hasDebug(node) {
            return isObject(node) && node.debug;
        }
        function log(msg, node) {
            if (false) {
                var _console;
                for (var _len4 = arguments.length, args = new Array(_len4 > 2 ? _len4 - 2 : 0), _key5 = 2; _key5 < _len4; _key5++) {
                    args[_key5 - 2] = arguments[_key5];
                }
                if (Config.debug || hasDebug(node) || hasDebug(args[0])) (_console = console).log.apply(_console, [ msg, node ].concat(args));
            }
        }
        function isObject(item) {
            return item !== null && _typeof(item) === "object";
        }
        function isArray(item) {
            return Array.isArray(item);
        }
        function isString(item) {
            return typeof item === "string";
        }
        function isInteger(item) {
            return Number.isInteger(item);
        }
        function isINode(node) {
            return "destroy" in node && typeof node.destroy === "function";
        }
        function isElementNode(node) {
            return node instanceof ElementNode;
        }
        function isElementText(node) {
            return node._type === NodeType.TextNode;
        }
        function isTextNode(node) {
            return node._type === NodeType.Text;
        }
        function keyExists(obj, keys) {
            var _iterator0 = _createForOfIteratorHelper(keys), _step0;
            try {
                for (_iterator0.s(); !(_step0 = _iterator0.n()).done; ) {
                    var key = _step0.value;
                    if (key in obj) return true;
                }
            } catch (err) {
                _iterator0.e(err);
            } finally {
                _iterator0.f();
            }
            return false;
        }
        function spliceItem(arr, item, deleteCount) {
            var index = arr.indexOf(item);
            for (var _len5 = arguments.length, insert = new Array(_len5 > 3 ? _len5 - 3 : 0), _key6 = 3; _key6 < _len5; _key6++) {
                insert[_key6 - 3] = arguments[_key6];
            }
            if (index > -1) arr.splice.apply(arr, [ index, deleteCount ].concat(insert));
            return index;
        }
        function logRenderTree(node) {
            var tree = [ node ];
            var parent = node.parent;
            while (parent) {
                tree.push(parent);
                parent = parent.parent;
            }
            tree.reverse();
            var output = "\nfunction convertEffectsToShader(styleEffects) {\n  const effects = [];\n  let index = 0;\n\n  for (const [type, props] of Object.entries(styleEffects)) {\n    effects.push({ type, props });\n    index++;\n  }\n  return createShader('DynamicShader', { effects });\n}\n";
            tree.forEach(function(node, i) {
                if (!node._rendererProps) return;
                node._rendererProps.parent = void 0;
                node._rendererProps.shader = void 0;
                var props = JSON.stringify(node._rendererProps, null, 2);
                var effects = node._effects ? "props".concat(i, ".shader = convertEffectsToShader(").concat(JSON.stringify(node._effects, null, 2), ");") : "";
                var parent = i === 0 ? "rootNode" : "node".concat(i - 1);
                output += "\nconst props".concat(i, " = ").concat(props, ";\nprops").concat(i, ".parent = ").concat(parent, ";\n").concat(effects, "\nconst node").concat(i, " = renderer.createNode(props").concat(i, ");\n");
            });
            return output;
        }
        function isFocused(el) {
            var _el$states;
            return el == null || (_el$states = el.states) == null ? void 0 : _el$states.has(Config.focusStateKey);
        }
        function buildGradientStops(colors, stops) {
            if (!Array.isArray(colors) || colors.length === 0) return "";
            var positions = [];
            if (Array.isArray(stops) && stops.length === colors.length) {
                var _iterator1 = _createForOfIteratorHelper(stops), _step1;
                try {
                    for (_iterator1.s(); !(_step1 = _iterator1.n()).done; ) {
                        var v = _step1.value;
                        if (typeof v !== "number" || !isFinite(v)) {
                            positions.push(0);
                            continue;
                        }
                        var pct = v <= 1 ? v * 100 : v;
                        if (pct < 0) pct = 0;
                        if (pct > 100) pct = 100;
                        positions.push(pct);
                    }
                } catch (err) {
                    _iterator1.e(err);
                } finally {
                    _iterator1.f();
                }
            } else {
                var lastIndex = colors.length - 1;
                for (var i = 0; i < colors.length; i++) positions.push(lastIndex === 0 ? 0 : i / lastIndex * 100);
            }
            if (positions.length !== colors.length) while (positions.length < colors.length) positions.push(positions.length === 0 ? 0 : 100);
            return colors.map(function(color, idx) {
                return "".concat(colorToRgba(color), " ").concat(positions[idx].toFixed(2), "%");
            }).join(", ");
        }
        function getNodeLineHeight(props) {
            return props.lineHeight || Config.fontSettings.lineHeight || 1.2 * props.fontSize;
        }
        function computeLegacyObjectFit(node, img, resizeMode, clipX, clipY, srcPos, supportsObjectFit, supportsObjectPosition) {
            if (supportsObjectFit && supportsObjectPosition) return;
            var containerW = node.props.w || img.naturalWidth;
            var containerH = node.props.h || img.naturalHeight;
            var naturalW = img.naturalWidth || 1;
            var naturalH = img.naturalHeight || 1;
            var fitType = (resizeMode == null ? void 0 : resizeMode.type) || (srcPos ? "none" : "fill");
            var drawW = naturalW;
            var drawH = naturalH;
            switch (fitType) {
              case "cover":
                {
                    var scale = Math.max(containerW / naturalW, containerH / naturalH);
                    drawW = naturalW * scale;
                    drawH = naturalH * scale;
                    break;
                }

              case "contain":
                {
                    var _scale = Math.min(containerW / naturalW, containerH / naturalH);
                    drawW = naturalW * _scale;
                    drawH = naturalH * _scale;
                    break;
                }

              case "fill":
                drawW = containerW;
                drawH = containerH;
                break;
            }
            var offsetX = (containerW - drawW) * clipX;
            var offsetY = (containerH - drawH) * clipY;
            if (srcPos) {
                offsetX = -srcPos.x;
                offsetY = -srcPos.y;
            }
            var styleParts = [ "position: absolute", "width: ".concat(Math.round(drawW), "px"), "height: ".concat(Math.round(drawH), "px"), "left: ".concat(Math.round(offsetX), "px"), "top: ".concat(Math.round(offsetY), "px"), "display: block", "pointer-events: none" ];
            img.style.removeProperty("object-fit");
            img.style.removeProperty("object-position");
            if ((resizeMode == null ? void 0 : resizeMode.type) === "none") {
                styleParts[1] = "width: ".concat(naturalW, "px");
                styleParts[2] = "height: ".concat(naturalH, "px");
            }
            img.setAttribute("style", styleParts.join("; ") + ";");
        }
        function applySubTextureScaling(node, img, srcPos) {
            var _node$props$srcWidth, _node$props$srcHeight;
            if (!srcPos) return;
            var regionW = (_node$props$srcWidth = node.props.srcWidth) !== null && _node$props$srcWidth !== void 0 ? _node$props$srcWidth : srcPos.w;
            var regionH = (_node$props$srcHeight = node.props.srcHeight) !== null && _node$props$srcHeight !== void 0 ? _node$props$srcHeight : srcPos.h;
            if (!regionW || !regionH) return;
            var targetW = node.props.w || regionW;
            var targetH = node.props.h || regionH;
            var naturalW = img.naturalWidth || regionW;
            var naturalH = img.naturalHeight || regionH;
            var scaleX = targetW / regionW;
            var scaleY = targetH / regionH;
            img.style.width = naturalW + "px";
            img.style.height = naturalH + "px";
            img.style.objectFit = "none";
            img.style.objectPosition = "0 0";
            img.style.transformOrigin = "0 0";
            var translateX = Math.round(-srcPos.x * scaleX);
            var translateY = Math.round(-srcPos.y * scaleY);
            img.style.transform = "translate(".concat(translateX, "px, ").concat(translateY, "px) scale(").concat(scaleX, ", ").concat(scaleY, ")");
            img.style.setProperty("-webkit-transform", img.style.transform);
            if (node.divBg) {
                var styleEl = node.divBg.style;
                if (styleEl.maskImage || styleEl.webkitMaskImage || /mask-image:/.test(node.divBg.getAttribute("style") || "")) {
                    var _styleEl$setProperty, _styleEl$setProperty2, _styleEl$setProperty3, _styleEl$setProperty4;
                    img.style.display = "none";
                    var maskW = Math.round(naturalW * scaleX);
                    var maskH = Math.round(naturalH * scaleY);
                    var maskPosX = translateX;
                    var maskPosY = translateY;
                    (_styleEl$setProperty = styleEl.setProperty) == null || _styleEl$setProperty.call(styleEl, "mask-size", "".concat(maskW, "px ").concat(maskH, "px"));
                    (_styleEl$setProperty2 = styleEl.setProperty) == null || _styleEl$setProperty2.call(styleEl, "mask-position", "".concat(maskPosX, "px ").concat(maskPosY, "px"));
                    (_styleEl$setProperty3 = styleEl.setProperty) == null || _styleEl$setProperty3.call(styleEl, "-webkit-mask-size", "".concat(maskW, "px ").concat(maskH, "px"));
                    (_styleEl$setProperty4 = styleEl.setProperty) == null || _styleEl$setProperty4.call(styleEl, "-webkit-mask-position", "".concat(maskPosX, "px ").concat(maskPosY, "px"));
                }
            }
        }
        function applyEasing(easing, progress) {
            if (isFunction(easing)) return easing(progress);
            switch (easing) {
              case "linear":
              default:
                return progress;

              case "ease-in":
                return progress * progress;

              case "ease-out":
                return progress * (2 - progress);

              case "ease-in-out":
                return progress < .5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;
            }
        }
        function interpolate(start, end, t) {
            return start + (end - start) * t;
        }
        function interpolateColor(start, end, t) {
            return (interpolate(start >> 24 & 255, end >> 24 & 255, t) << 24 | interpolate(start >> 16 & 255, end >> 16 & 255, t) << 16 | interpolate(start >> 8 & 255, end >> 8 & 255, t) << 8 | interpolate(start & 255, end & 255, t)) >>> 0;
        }
        function interpolateProp(name, start, end, t) {
            return name.startsWith("color") ? interpolateColor(start, end, t) : interpolate(start, end, t);
        }
        function compactString(input) {
            return input.replace(/\s*\n\s*/g, " ");
        }
        function isRenderStateInBounds(state) {
            return state === 4 || state === 8;
        }
        function nodeHasTextureSource(node) {
            var _node$props$texture;
            var textureType = (_node$props$texture = node.props.texture) == null ? void 0 : _node$props$texture.type;
            return !!node.props.src || textureType === TextureType.image || textureType === TextureType.subTexture;
        }
        function normalizeBoundsMargin(margin) {
            if (margin == null) return [ 0, 0, 0, 0 ];
            if (typeof margin === "number") return [ margin, margin, margin, margin ];
            if (Array.isArray(margin) && margin.length === 4) {
                var _margin$, _margin$2, _margin$3, _margin$4;
                return [ (_margin$ = margin[0]) !== null && _margin$ !== void 0 ? _margin$ : 0, (_margin$2 = margin[1]) !== null && _margin$2 !== void 0 ? _margin$2 : 0, (_margin$3 = margin[2]) !== null && _margin$3 !== void 0 ? _margin$3 : 0, (_margin$4 = margin[3]) !== null && _margin$4 !== void 0 ? _margin$4 : 0 ];
            }
            return [ 0, 0, 0, 0 ];
        }
        function computeRenderStateForNode(node) {
            var _stageRoot$props$w, _stageRoot$props$h, _node$props$boundsMar, _node$props$w, _node$props$h;
            var stageRoot = node.stage.root;
            if (!stageRoot || stageRoot === node) return null;
            var rootWidth = (_stageRoot$props$w = stageRoot.props.w) !== null && _stageRoot$props$w !== void 0 ? _stageRoot$props$w : 0;
            var rootHeight = (_stageRoot$props$h = stageRoot.props.h) !== null && _stageRoot$props$h !== void 0 ? _stageRoot$props$h : 0;
            if (rootWidth <= 0 || rootHeight <= 0) return 4;
            var rootLeft = stageRoot.absX;
            var rootTop = stageRoot.absY;
            var rootRight = rootLeft + rootWidth;
            var rootBottom = rootTop + rootHeight;
            var _normalizeBoundsMargi = normalizeBoundsMargin((_node$props$boundsMar = node.props.boundsMargin) !== null && _node$props$boundsMar !== void 0 ? _node$props$boundsMar : node.stage.renderer.boundsMargin), _normalizeBoundsMargi2 = _slicedToArray(_normalizeBoundsMargi, 4), marginTop = _normalizeBoundsMargi2[0], marginRight = _normalizeBoundsMargi2[1], marginBottom = _normalizeBoundsMargi2[2], marginLeft = _normalizeBoundsMargi2[3];
            var width = (_node$props$w = node.props.w) !== null && _node$props$w !== void 0 ? _node$props$w : 0;
            var height = (_node$props$h = node.props.h) !== null && _node$props$h !== void 0 ? _node$props$h : 0;
            var left = node.absX;
            var top = node.absY;
            var right = left + width;
            var bottom = top + height;
            var expandedLeft = rootLeft - marginLeft;
            var expandedTop = rootTop - marginTop;
            var expandedRight = rootRight + marginRight;
            var expandedBottom = rootBottom + marginBottom;
            if (!(right >= expandedLeft && left <= expandedRight && bottom >= expandedTop && top <= expandedBottom)) return 2;
            if (right >= rootLeft && left <= rootRight && bottom >= rootTop && top <= rootBottom) return 8;
            return 4;
        }
        function requestAnimationUpdate() {
            if (!animationFrameRequested && animationTasks.length > 0) {
                animationFrameRequested = true;
                requestAnimationFrame(updateAnimations);
            }
        }
        function updateAnimations(time) {
            animationFrameRequested = false;
            for (var i = 0; i < animationTasks.length; i++) {
                var task = animationTasks[i];
                if (task.pausedTime != null) continue;
                var elapsed = time - task.timeStart;
                if (elapsed < task.settings.delay) {
                    requestAnimationUpdate();
                    continue;
                }
                var activeTime = elapsed - task.settings.delay;
                if (activeTime >= task.settings.duration) {
                    if (task.settings.loop || task.iteration < task.settings.repeat - 1) {
                        task.iteration++;
                        task.timeStart = time - task.settings.delay;
                        requestAnimationUpdate();
                    } else {
                        Object.assign(task.node.props, task.propsEnd);
                        task.node.boundsDirty = true;
                        task.node.markChildrenBoundsDirty();
                        updateNodeStyles(task.node);
                        task.stop();
                        i--;
                    }
                    continue;
                }
                var t = activeTime / task.settings.duration;
                t = applyEasing(task.settings.easing, t);
                for (var prop in task.propsEnd) {
                    var start = task.propsStart[prop];
                    var end = task.propsEnd[prop];
                    task.node.props[prop] = interpolateProp(prop, start, end, t);
                }
                updateNodeStyles(task.node);
            }
            requestAnimationUpdate();
        }
        function animate(props, settings) {
            return new AnimationController(this, props, settings);
        }
        function updateNodeParent(node) {
            var parent = node.props.parent;
            if (parent instanceof DOMNode) elMap.get(parent).appendChild(node.div); else {
                var _node$div$parentNode;
                (_node$div$parentNode = node.div.parentNode) == null || _node$div$parentNode.removeChild(node.div);
            }
        }
        function buildTransformCSS(props) {
            var transforms = [];
            var x = props.x, y = props.y;
            var hasMountX = props.mountX != null && props.mountX !== 0;
            var hasMountY = props.mountY != null && props.mountY !== 0;
            if (x !== 0) transforms.push("translateX(".concat(x, "px)"));
            if (hasMountX) transforms.push("translateX(".concat(-props.mountX * 100, "%)"));
            if (y !== 0) transforms.push("translateY(".concat(y, "px)"));
            if (hasMountY) transforms.push("translateY(".concat(-props.mountY * 100, "%)"));
            if (props.rotation !== 0) transforms.push("rotate(".concat(props.rotation, "rad)"));
            if (props.scale !== 1 && props.scale != null) transforms.push("scale(".concat(props.scale, ")")); else {
                if (props.scaleX !== 1) transforms.push("scaleX(".concat(props.scaleX, ")"));
                if (props.scaleY !== 1) transforms.push("scaleY(".concat(props.scaleY, ")"));
            }
            return transforms.join(" ");
        }
        function updateTransformOnly(node) {
            var transform = buildTransformCSS(node.props);
            var s = node.div.style;
            if (transform.length > 0) s.transform = "".concat(transform); else s.transform = "";
            updateRenderStateIfNeeded(node);
        }
        function updateRenderStateIfNeeded(node) {
            if (!(node instanceof DOMNode) || node === node.stage.root) return;
            var hasTextureSrc = nodeHasTextureSource(node);
            if (hasTextureSrc && node.boundsDirty) {
                var next = computeRenderStateForNode(node);
                if (next != null) node.updateRenderState(next);
                node.boundsDirty = false;
            } else if (!hasTextureSrc) node.boundsDirty = false;
        }
        function applyLegacyObjectFit(node, img, srcPos) {
            var _node$props$textureOp;
            var resizeMode = (_node$props$textureOp = node.props.textureOptions) == null ? void 0 : _node$props$textureOp.resizeMode;
            computeLegacyObjectFit(node, img, resizeMode, (resizeMode == null ? void 0 : resizeMode.type) !== "contain" && (resizeMode == null ? void 0 : resizeMode.clipX) ? resizeMode == null ? void 0 : resizeMode.clipX : .5, (resizeMode == null ? void 0 : resizeMode.type) !== "contain" && (resizeMode == null ? void 0 : resizeMode.clipY) ? resizeMode == null ? void 0 : resizeMode.clipY : .5, srcPos, supportsObjectFit, supportsObjectPosition);
        }
        function updateNodeStyles(node) {
            var props = node.props;
            var style = "position: absolute; z-index: ".concat(props.zIndex, ";");
            if (props.alpha !== 1) style += "opacity: ".concat(props.alpha, ";");
            if (props.clipping) style += "overflow: hidden;";
            {
                var transform = buildTransformCSS(props);
                if (transform.length > 0) style += "transform: ".concat(transform, ";");
            }
            if (node instanceof DOMText) {
                var textProps = node.props;
                if (textProps.color != null && textProps.color !== 0) style += "color: ".concat(colorToRgba(textProps.color), ";");
                if (textProps.fontFamily) style += "font-family: ".concat(textProps.fontFamily, ";");
                if (textProps.fontSize) style += "font-size: ".concat(textProps.fontSize, "px;");
                if (textProps.fontStyle !== "normal") style += "font-style: ".concat(textProps.fontStyle, ";");
                if (textProps.fontWeight !== "normal") style += "font-weight: ".concat(textProps.fontWeight, ";");
                if (textProps.fontStretch && textProps.fontStretch !== "normal") style += "font-stretch: ".concat(textProps.fontStretch, ";");
                if (textProps.lineHeight) style += "line-height: ".concat(textProps.lineHeight, "px;");
                if (textProps.letterSpacing) style += "letter-spacing: ".concat(textProps.letterSpacing, "px;");
                if (textProps.textAlign !== "left") style += "text-align: ".concat(textProps.textAlign, ";");
                var maxLines = textProps.maxLines || Infinity;
                switch (textProps.contain) {
                  case "width":
                    if (textProps.maxWidth && textProps.maxWidth > 0) {
                        if (node.textAlign === "center") style += "width: ".concat(textProps.maxWidth, "px;"); else style += "max-width: ".concat(textProps.maxWidth, "px;");
                        style += "overflow: hidden;";
                    } else style += "width: 100%;";
                    break;

                  case "both":
                    {
                        var lineHeight = getNodeLineHeight(textProps);
                        var widthConstraint = textProps.maxWidth && textProps.maxWidth > 0 ? "".concat(textProps.maxWidth, "px") : "100%";
                        var height = (textProps.maxHeight && textProps.maxHeight > 0 ? textProps.maxHeight : props.h) || 0;
                        if (height > 0) {
                            var maxLinesByHeight = Math.max(1, Math.floor(height / lineHeight));
                            maxLines = Math.min(maxLines, maxLinesByHeight);
                            height = Math.max(lineHeight, maxLines * lineHeight);
                        } else {
                            maxLines = Number.isFinite(maxLines) ? Math.max(1, maxLines) : 1;
                            height = maxLines * lineHeight;
                        }
                        style += "width: ".concat(widthConstraint, "; height: ").concat(height, "px; overflow: hidden;");
                        break;
                    }

                  case "none":
                    style += "width: -webkit-max-content;";
                    style += "width: max-content;";
                    break;
                }
                style += "white-space: pre-wrap;";
                if (maxLines !== Infinity) style += "display: -webkit-box;\n        overflow: hidden;\n        -webkit-line-clamp: ".concat(maxLines, ";\n        line-clamp: ").concat(maxLines, ";\n        -webkit-box-orient: vertical;");
                if (textProps.offsetY != null && textProps.offsetY !== 0) style += "margin-top: ".concat(textProps.offsetY, "px;");
                if (textProps.wordBreak) {
                    var wb = textProps.wordBreak;
                    if (wb !== "normal") if (wb === "break-all") style += "word-break: break-all;"; else if (wb === "keep-all") style += "word-break: keep-all;"; else if (wb === "break-word") style += "word-wrap: break-word; overflow-wrap: break-word;"; else style += "overflow-wrap: break-word;";
                }
            } else {
                var _props$shader;
                if (props.w !== 0) style += "width: ".concat(props.w < 0 ? 0 : props.w, "px;");
                if (props.h !== 0) style += "height: ".concat(props.h, "px;");
                var vGradient = props.colorBottom !== props.colorTop ? "linear-gradient(to bottom, ".concat(colorToRgba(props.colorTop), ", ").concat(colorToRgba(props.colorBottom), ")") : null;
                var hGradient = props.colorLeft !== props.colorRight ? "linear-gradient(to right, ".concat(colorToRgba(props.colorLeft), ", ").concat(colorToRgba(props.colorRight), ")") : null;
                var gradient = vGradient && hGradient ? "".concat(vGradient, ", ").concat(hGradient) : vGradient || hGradient;
                var srcImg = null;
                var srcPos = null;
                var rawImgSrc = null;
                if (props.texture != null && props.texture.type === TextureType.subTexture) {
                    var texture = props.texture;
                    srcPos = texture.props;
                    rawImgSrc = texture.props.texture.props.src;
                } else if (props.src) rawImgSrc = props.src;
                if (rawImgSrc) srcImg = "url(".concat(rawImgSrc, ")");
                var bgStyle = "";
                var borderStyle = "";
                var radiusStyle = "";
                var maskStyle = "";
                var needsBackgroundLayer = false;
                var imgStyle = "";
                var hasDivBgTint = false;
                var hasTint = false;
                if (rawImgSrc) {
                    var _props$textureOptions;
                    hasTint = props.color !== 4294967295 && props.color !== 0;
                    if (hasTint) {
                        bgStyle += "background-color: ".concat(colorToRgba(props.color), ";");
                        if (srcImg) {
                            maskStyle += "mask-image: ".concat(srcImg, ";");
                            if (srcPos !== null) maskStyle += "mask-position: -".concat(srcPos.x, "px -").concat(srcPos.y, "px;"); else maskStyle += "mask-size: 100% 100%;";
                            hasDivBgTint = true;
                        }
                    } else {
                        if (gradient) maskStyle += "mask-image: ".concat(gradient, ";");
                        if (props.placeholderColor !== 0) bgStyle += "background-color: ".concat(colorToRgba(props.placeholderColor), ";");
                    }
                    var imgStyleParts = [ "position: absolute", "top: 0", "left: 0", "right: 0", "bottom: 0", "display: block", "pointer-events: none", "opacity: ".concat(node.imageLoading ? 0 : 1), "transition: opacity 100ms linear" ];
                    if ((_props$textureOptions = props.textureOptions.resizeMode) == null ? void 0 : _props$textureOptions.type) {
                        var _resizeMode$clipX, _resizeMode$clipY;
                        var resizeMode = props.textureOptions.resizeMode;
                        imgStyleParts.push("width: 100%");
                        imgStyleParts.push("height: 100%");
                        imgStyleParts.push("object-fit: ".concat(resizeMode.type));
                        var clipX = (_resizeMode$clipX = resizeMode.clipX) !== null && _resizeMode$clipX !== void 0 ? _resizeMode$clipX : .5;
                        var clipY = (_resizeMode$clipY = resizeMode.clipY) !== null && _resizeMode$clipY !== void 0 ? _resizeMode$clipY : .5;
                        imgStyleParts.push("object-position: ".concat(clipX * 100, "% ").concat(clipY * 100, "%"));
                    } else if (srcPos !== null) {
                        imgStyleParts.push("width: auto");
                        imgStyleParts.push("height: auto");
                        imgStyleParts.push("object-fit: none");
                        imgStyleParts.push("object-position: -".concat(srcPos.x, "px -").concat(srcPos.y, "px"));
                    } else if (props.w && !props.h) {
                        imgStyleParts.push("width: 100%");
                        imgStyleParts.push("height: auto");
                    } else if (props.h && !props.w) {
                        imgStyleParts.push("width: auto");
                        imgStyleParts.push("height: 100%");
                    } else {
                        imgStyleParts.push("width: 100%");
                        imgStyleParts.push("height: 100%");
                        imgStyleParts.push("object-fit: fill");
                    }
                    if (hasTint) if (supportsMixBlendMode) imgStyleParts.push("mix-blend-mode: multiply"); else imgStyleParts.push("opacity: 1");
                    imgStyle = imgStyleParts.join("; ") + ";";
                } else if (gradient) {
                    bgStyle += "background-image: ".concat(gradient, ";");
                    bgStyle += "background-repeat: no-repeat;";
                    bgStyle += "background-size: 100% 100%;";
                } else if (props.color !== 0) bgStyle += "background-color: ".concat(colorToRgba(props.color), ";");
                if (((_props$shader = props.shader) == null ? void 0 : _props$shader.props) != null) {
                    var _shaderProps$borderG, _shaderProps$borderA;
                    var shaderProps = props.shader.props;
                    var borderWidth = shaderProps["border-w"];
                    var borderColor = shaderProps["border-color"];
                    var borderGap = (_shaderProps$borderG = shaderProps["border-gap"]) !== null && _shaderProps$borderG !== void 0 ? _shaderProps$borderG : 0;
                    var borderAlign = (_shaderProps$borderA = shaderProps["border-align"]) !== null && _shaderProps$borderA !== void 0 ? _shaderProps$borderA : "inside";
                    var radius = shaderProps["radius"];
                    var borderWidthIsNumber = typeof borderWidth === "number";
                    var borderWidthIsArray = Array.isArray(borderWidth);
                    if ((borderWidthIsNumber && borderWidth !== 0 || borderWidthIsArray && borderWidth.some(function(w) {
                        return typeof w === "number" && w !== 0;
                    })) && typeof borderColor === "number" && borderColor !== 0) {
                        var rgbaColor = colorToRgba(borderColor);
                        if (borderWidthIsNumber) {
                            var insideWidth = 0;
                            var outsideWidth = 0;
                            if (borderAlign === "inside") insideWidth = borderWidth; else if (borderAlign === "center") {
                                insideWidth = borderWidth / 2;
                                outsideWidth = borderWidth / 2;
                            } else outsideWidth = borderWidth;
                            outsideWidth += borderGap;
                            insideWidth -= borderGap;
                            if (insideWidth < 0) {
                                outsideWidth += insideWidth;
                                insideWidth = 0;
                            }
                            if (outsideWidth < 0) {
                                insideWidth += outsideWidth;
                                outsideWidth = 0;
                            }
                            var shadows = [];
                            if (outsideWidth > 0) shadows.push("0 0 0 ".concat(outsideWidth, "px ").concat(rgbaColor));
                            if (insideWidth > 0) shadows.push("inset 0 0 0 ".concat(insideWidth, "px ").concat(rgbaColor));
                            if (shadows.length > 0) borderStyle += "box-shadow: ".concat(shadows.join(", "), ";");
                        } else if (borderWidthIsArray) {
                            var _shaderProps$borderT, _shaderProps$borderR, _shaderProps$borderB, _shaderProps$borderL;
                            var widths = [ (_shaderProps$borderT = shaderProps["border-top"]) !== null && _shaderProps$borderT !== void 0 ? _shaderProps$borderT : borderWidth[0], (_shaderProps$borderR = shaderProps["border-right"]) !== null && _shaderProps$borderR !== void 0 ? _shaderProps$borderR : borderWidth[1], (_shaderProps$borderB = shaderProps["border-bottom"]) !== null && _shaderProps$borderB !== void 0 ? _shaderProps$borderB : borderWidth[2], (_shaderProps$borderL = shaderProps["border-left"]) !== null && _shaderProps$borderL !== void 0 ? _shaderProps$borderL : borderWidth[3] ];
                            var sides = [ "top", "right", "bottom", "left" ];
                            for (var i = 0; i < sides.length; i++) {
                                var width = widths[i];
                                if (typeof width === "number" && width !== 0) borderStyle += "border-".concat(sides[i], ": ").concat(width, "px solid ").concat(rgbaColor, ";");
                            }
                        }
                    }
                    if (typeof radius === "number" && radius > 0) radiusStyle += "border-radius: ".concat(radius, "px;"); else if (Array.isArray(radius) && radius.length === 4) radiusStyle += "border-radius: ".concat(radius[0], "px ").concat(radius[1], "px ").concat(radius[2], "px ").concat(radius[3], "px;");
                    if ("radial" in shaderProps) {
                        var rg = shaderProps.radial;
                        var colors = Array.isArray(rg == null ? void 0 : rg.colors) ? rg.colors : [];
                        var stops = Array.isArray(rg == null ? void 0 : rg.stops) ? rg.stops : void 0;
                        var pivot = Array.isArray(rg == null ? void 0 : rg.pivot) ? rg.pivot : [ .5, .5 ];
                        var _width = typeof (rg == null ? void 0 : rg.w) === "number" ? rg.w : props.w || 0;
                        var _height = typeof (rg == null ? void 0 : rg.h) === "number" ? rg.h : _width;
                        if (colors.length > 0) {
                            var gradientStops = buildGradientStops(colors, stops);
                            if (gradientStops) if (colors.length === 1) {
                                if (srcImg || gradient) maskStyle += "mask-image: linear-gradient(".concat(gradientStops, ");"); else bgStyle += "background-color: ".concat(colorToRgba(colors[0]), ";");
                            } else {
                                var _pivot$, _pivot$2;
                                var isEllipse = _width > 0 && _height > 0 && _width !== _height;
                                var pivotX = ((_pivot$ = pivot[0]) !== null && _pivot$ !== void 0 ? _pivot$ : .5) * 100;
                                var pivotY = ((_pivot$2 = pivot[1]) !== null && _pivot$2 !== void 0 ? _pivot$2 : .5) * 100;
                                var sizePart = "";
                                if (_width > 0 && _height > 0) {
                                    if (!isEllipse && _width === _height) sizePart = "".concat(Math.round(_width), "px"); else sizePart = "".concat(Math.round(_width), "px ").concat(Math.round(_height), "px");
                                } else sizePart = "closest-side";
                                var radialGradient = "radial-gradient(".concat(isEllipse ? "ellipse" : "circle", " ").concat(sizePart, " at ").concat(pivotX.toFixed(2), "% ").concat(pivotY.toFixed(2), "%, ").concat(gradientStops, ")");
                                if (srcImg || gradient) maskStyle += "mask-image: ".concat(radialGradient, ";"); else {
                                    bgStyle += "background-image: ".concat(radialGradient, ";");
                                    bgStyle += "background-repeat: no-repeat;";
                                    bgStyle += "background-size: 100% 100%;";
                                }
                            }
                        }
                    }
                    if ("linear" in shaderProps) {
                        var lg = shaderProps.linear;
                        var _colors = Array.isArray(lg == null ? void 0 : lg.colors) ? lg.colors : [];
                        var _stops = Array.isArray(lg == null ? void 0 : lg.stops) ? lg.stops : void 0;
                        var angleRad = typeof (lg == null ? void 0 : lg.angle) === "number" ? lg.angle : 0;
                        if (_colors.length > 0) {
                            var _gradientStops = buildGradientStops(_colors, _stops);
                            if (_gradientStops) if (_colors.length === 1) {
                                if (srcImg || gradient) maskStyle += "mask-image: linear-gradient(".concat(_gradientStops, ");"); else bgStyle += "background-color: ".concat(colorToRgba(_colors[0]), ";");
                            } else {
                                var linearGradient = "linear-gradient(".concat((180 * (angleRad / Math.PI - 1)).toFixed(2), "deg, ").concat(_gradientStops, ")");
                                if (srcImg || gradient) maskStyle += "mask-image: ".concat(linearGradient, ";"); else {
                                    bgStyle += "background-image: ".concat(linearGradient, ";");
                                    bgStyle += "background-repeat: no-repeat;";
                                    bgStyle += "background-size: 100% 100%;";
                                }
                            }
                        }
                    }
                }
                if (maskStyle !== "") {
                    if (!supportsStandardMask && supportsWebkitMask) maskStyle = maskStyle.replace(/mask-/g, "-webkit-mask-"); else if (!supportsCssMask) maskStyle = "";
                    if (maskStyle !== "") needsBackgroundLayer = true;
                }
                if (!needsBackgroundLayer && rawImgSrc) needsBackgroundLayer = hasTint || !!gradient || srcPos !== null || radiusStyle !== "" || bgStyle !== "";
                style += radiusStyle;
                if (needsBackgroundLayer) {
                    if (node.divBg == null) {
                        node.divBg = document.createElement("div");
                        node.div.insertBefore(node.divBg, node.div.firstChild);
                    } else if (node.divBg.parentElement !== node.div) node.div.insertBefore(node.divBg, node.div.firstChild);
                    if (rawImgSrc != null && srcPos != null && !!node.imgEl && node.imgEl.complete && node.imgEl.dataset.rawSrc === rawImgSrc) node.imageLoading = true;
                    var bgLayerStyle = "position: absolute; top:0; left:0; right:0; bottom:0; z-index: -1; pointer-events: none;";
                    if ((srcPos !== null || radiusStyle !== "") && !hasDivBgTint) bgLayerStyle += "overflow: hidden;";
                    if (bgStyle) bgLayerStyle += bgStyle;
                    if (maskStyle) bgLayerStyle += maskStyle;
                    if (hasDivBgTint && srcPos != null && node.imageLoading) bgLayerStyle += "opacity: 0;";
                    node.divBg.setAttribute("style", bgLayerStyle + radiusStyle);
                    if (rawImgSrc) {
                        if (!node.imgEl) {
                            node.imgEl = document.createElement("img");
                            node.imgEl.alt = "";
                            node.imgEl.setAttribute("aria-hidden", "true");
                            node.imgEl.setAttribute("loading", "lazy");
                            node.imgEl.removeAttribute("src");
                            node.imgEl.addEventListener("load", function() {
                                var payload = {
                                    type: "texture",
                                    dimensions: {
                                        w: node.imgEl.naturalWidth,
                                        h: node.imgEl.naturalHeight
                                    }
                                };
                                node.imgEl.style.display = "";
                                applySubTextureScaling(node, node.imgEl, node.lazyImageSubTextureProps);
                                if (!node.lazyImageSubTextureProps) applyLegacyObjectFit(node, node.imgEl, null);
                                if (node.imgEl) {
                                    node.imageLoading = false;
                                    node.imgEl.style.opacity = "1";
                                }
                                node.showBackgroundLayer();
                                node.emit("loaded", payload);
                            });
                            node.imgEl.addEventListener("error", function() {
                                var _node$imgEl;
                                node.imageLoading = false;
                                node.showBackgroundLayer();
                                if (node.imgEl) {
                                    node.imgEl.removeAttribute("src");
                                    node.imgEl.style.display = "none";
                                    node.imgEl.removeAttribute("data-rawSrc");
                                }
                                var failedSrc = ((_node$imgEl = node.imgEl) == null ? void 0 : _node$imgEl.dataset.pendingSrc) || node.lazyImagePendingSrc || "";
                                var payload = {
                                    type: "texture",
                                    error: new Error("Failed to load image: ".concat(failedSrc))
                                };
                                node.emit("failed", payload);
                            });
                        }
                        node.lazyImagePendingSrc = rawImgSrc;
                        node.lazyImageSubTextureProps = srcPos;
                        node.imgEl.dataset.pendingSrc = rawImgSrc;
                        if (node.imgEl.parentElement !== node.divBg) node.divBg.appendChild(node.imgEl);
                        node.imgEl.setAttribute("style", imgStyle + radiusStyle);
                        if (hasDivBgTint) node.imgEl.style.visibility = "hidden";
                        if (isRenderStateInBounds(node.renderState)) node.applyPendingImageSrc(); else if (!node.imgEl.dataset.rawSrc) node.imgEl.removeAttribute("src");
                        if (srcPos && node.imgEl.complete && node.imgEl.dataset.rawSrc === rawImgSrc) {
                            applySubTextureScaling(node, node.imgEl, srcPos);
                            if (node.imageLoading) {
                                node.imageLoading = false;
                                node.imgEl.style.opacity = "1";
                                node.showBackgroundLayer();
                            }
                        }
                        if (!srcPos && node.imgEl.complete && (!supportsObjectFit || !supportsObjectPosition) && node.imgEl.dataset.rawSrc === rawImgSrc) applyLegacyObjectFit(node, node.imgEl, srcPos);
                    } else {
                        node.lazyImagePendingSrc = null;
                        node.lazyImageSubTextureProps = null;
                        if (node.imgEl) {
                            node.imgEl.remove();
                            node.imgEl = void 0;
                        }
                    }
                } else if (rawImgSrc) {
                    if (node.divBg) {
                        node.divBg.remove();
                        node.divBg = void 0;
                    }
                    if (srcPos != null && !!node.imgEl && node.imgEl.complete && node.imgEl.dataset.rawSrc === rawImgSrc) node.imageLoading = true;
                    if (!node.imgEl) {
                        node.imgEl = document.createElement("img");
                        node.imgEl.alt = "";
                        node.imgEl.setAttribute("aria-hidden", "true");
                        node.imgEl.setAttribute("loading", "lazy");
                        node.imgEl.removeAttribute("src");
                        node.imgEl.addEventListener("load", function() {
                            var payload = {
                                type: "texture",
                                dimensions: {
                                    w: node.imgEl.naturalWidth,
                                    h: node.imgEl.naturalHeight
                                }
                            };
                            node.imgEl.style.display = "";
                            applySubTextureScaling(node, node.imgEl, node.lazyImageSubTextureProps);
                            if (!node.lazyImageSubTextureProps) applyLegacyObjectFit(node, node.imgEl, null);
                            if (node.imgEl) {
                                node.imageLoading = false;
                                node.imgEl.style.opacity = "1";
                            }
                            node.emit("loaded", payload);
                        });
                        node.imgEl.addEventListener("error", function() {
                            var _node$imgEl2;
                            node.imageLoading = false;
                            if (node.imgEl) {
                                node.imgEl.removeAttribute("src");
                                node.imgEl.style.display = "none";
                                node.imgEl.removeAttribute("data-rawSrc");
                            }
                            var failedSrc = ((_node$imgEl2 = node.imgEl) == null ? void 0 : _node$imgEl2.dataset.pendingSrc) || node.lazyImagePendingSrc || "";
                            var payload = {
                                type: "texture",
                                error: new Error("Failed to load image: ".concat(failedSrc))
                            };
                            node.emit("failed", payload);
                        });
                    }
                    node.lazyImagePendingSrc = rawImgSrc;
                    node.lazyImageSubTextureProps = srcPos;
                    node.imgEl.dataset.pendingSrc = rawImgSrc;
                    if (node.imgEl.parentElement !== node.div) node.div.appendChild(node.imgEl);
                    node.imgEl.setAttribute("style", imgStyle + radiusStyle);
                    if (isRenderStateInBounds(node.renderState)) node.applyPendingImageSrc(); else if (!node.imgEl.dataset.rawSrc) node.imgEl.removeAttribute("src");
                    if (srcPos && node.imgEl.complete && node.imgEl.dataset.rawSrc === rawImgSrc) {
                        applySubTextureScaling(node, node.imgEl, srcPos);
                        if (node.imageLoading) {
                            node.imageLoading = false;
                            node.imgEl.style.opacity = "1";
                        }
                    }
                    if (!srcPos && node.imgEl.complete && (!supportsObjectFit || !supportsObjectPosition) && node.imgEl.dataset.rawSrc === rawImgSrc) applyLegacyObjectFit(node, node.imgEl, srcPos);
                } else {
                    node.lazyImagePendingSrc = null;
                    node.lazyImageSubTextureProps = null;
                    if (node.imgEl) {
                        node.imgEl.remove();
                        node.imgEl = void 0;
                    }
                    if (node.divBg) {
                        node.divBg.remove();
                        node.divBg = void 0;
                    }
                    style += bgStyle;
                }
                if (needsBackgroundLayer && maskStyle !== "") {
                    if (node.divBorder == null) {
                        node.divBorder = document.createElement("div");
                        node.div.appendChild(node.divBorder);
                    }
                } else if (node.divBorder) {
                    node.divBorder.remove();
                    node.divBorder = void 0;
                }
                if (node.divBorder == null) style += borderStyle; else {
                    var borderLayerStyle = "position: absolute; top:0; left:0; right:0; bottom:0; z-index: -1; pointer-events: none;";
                    borderLayerStyle += borderStyle;
                    node.divBorder.setAttribute("style", borderLayerStyle + radiusStyle);
                }
            }
            var newStyle = compactString(style);
            if (node._lastStyleStr !== newStyle) {
                node._lastStyleStr = newStyle;
                node.div.setAttribute("style", newStyle);
            }
            updateRenderStateIfNeeded(node);
        }
        function getElSize(node) {
            var _Config$rendererOptio, _Config$rendererOptio2;
            var rawRect = node.div.getBoundingClientRect();
            var dpr = (_Config$rendererOptio = (_Config$rendererOptio2 = Config.rendererOptions) == null ? void 0 : _Config$rendererOptio2.deviceLogicalPixelRatio) !== null && _Config$rendererOptio !== void 0 ? _Config$rendererOptio : 1;
            var width = rawRect.width / dpr;
            var height = rawRect.height / dpr;
            for (;;) {
                if (node.props.scale != null && node.props.scale !== 1) {
                    width /= node.props.scale;
                    height /= node.props.scale;
                } else {
                    width /= node.props.scaleX;
                    height /= node.props.scaleY;
                }
                if (node.parent instanceof DOMNode) node = node.parent; else break;
            }
            return {
                width: width,
                height: height
            };
        }
        function updateDOMTextSize(node) {
            var emitLoaded = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            var size;
            var dimensionsChanged = false;
            switch (node.contain) {
              case "width":
                size = getElSize(node);
                if (node.props.w !== size.width) {
                    node.w = size.width;
                    dimensionsChanged = true;
                }
                if (node.props.h !== size.height) {
                    node.h = size.height;
                    dimensionsChanged = true;
                }
                break;

              case "none":
                size = getElSize(node);
                if (node.props.h !== size.height || node.props.w !== size.width) {
                    node.w = size.width;
                    node.h = size.height;
                    dimensionsChanged = true;
                }
                break;
            }
            if (emitLoaded && (!node.loaded || dimensionsChanged)) {
                var payload = {
                    type: "text",
                    dimensions: {
                        w: node.w,
                        h: node.h
                    }
                };
                node.emit("loaded", payload);
                node.loaded = true;
            }
        }
        function updateDOMTextMeasurements() {
            textNodesToMeasure.forEach(function(node) {
                return updateDOMTextSize(node);
            });
            textNodesToMeasure.clear();
        }
        function shouldTrackContainTextNode(node) {
            return node.contain === "width" || node.contain === "none";
        }
        function syncContainTextNodeTracking(node) {
            if (shouldTrackContainTextNode(node)) containTextNodes.add(node); else containTextNodes.delete(node);
        }
        function scheduleContainTextNodesMeasurement() {
            if (containTextNodes.size === 0) return;
            containTextNodes.forEach(function(node) {
                if (node.div.isConnected) textNodesToMeasure.add(node);
            });
            if (textNodesToMeasure.size > 0) setTimeout(updateDOMTextMeasurements);
        }
        function setupFontLoadingListeners() {
            if (fontLoadingListenerSetup) return;
            if (typeof document === "undefined" || !document.fonts) return;
            var fonts = document.fonts;
            if (typeof fonts.addEventListener === "function") fonts.addEventListener("loadingdone", scheduleContainTextNodesMeasurement);
            fontLoadingListenerSetup = true;
        }
        function scheduleUpdateDOMTextMeasurement(node) {
            setupFontLoadingListeners();
            if (textNodesToMeasure.size === 0) if (typeof document !== "undefined" && "fonts" in document) {
                var fonts = document.fonts;
                if (fonts.status === "loaded") setTimeout(updateDOMTextMeasurements); else if (fonts.ready != null && typeof fonts.ready.then === "function") fonts.ready.then(updateDOMTextMeasurements); else setTimeout(updateDOMTextMeasurements, 500);
            } else setTimeout(updateDOMTextMeasurements, 500);
            textNodesToMeasure.add(node);
        }
        function updateNodeData(node) {
            var data = node.data;
            for (var key in data) {
                var keyValue = data[key];
                if (keyValue === void 0) node.div.removeAttribute("data-" + key); else node.div.setAttribute("data-" + key, String(keyValue));
            }
        }
        function resolveNodeDefaults(props) {
            var _props$color, _props$x, _props$y, _props$w, _props$h, _props$alpha, _props$ignoreParentAl, _props$autosize, _props$boundsMargin, _props$clipping, _props$colorTop, _props$colorBottom, _props$colorLeft, _props$colorRight, _ref, _ref2, _props$colorBl, _ref3, _ref4, _props$colorBr, _ref5, _ref6, _props$colorTl, _ref7, _ref8, _props$colorTr, _props$zIndex, _props$parent, _props$texture, _props$textureOptions2, _props$shader2, _props$src, _props$scale, _ref9, _props$scaleX, _ref10, _props$scaleY, _props$mount, _ref11, _props$mountX, _ref12, _props$mountY, _props$pivot, _ref13, _props$pivotX, _ref14, _props$pivotY, _props$rotation, _props$rtt, _props$placeholderCol;
            var color = (_props$color = props.color) !== null && _props$color !== void 0 ? _props$color : 0;
            return {
                x: (_props$x = props.x) !== null && _props$x !== void 0 ? _props$x : 0,
                y: (_props$y = props.y) !== null && _props$y !== void 0 ? _props$y : 0,
                w: (_props$w = props.w) !== null && _props$w !== void 0 ? _props$w : 0,
                h: (_props$h = props.h) !== null && _props$h !== void 0 ? _props$h : 0,
                alpha: (_props$alpha = props.alpha) !== null && _props$alpha !== void 0 ? _props$alpha : 1,
                ignoreParentAlpha: (_props$ignoreParentAl = props.ignoreParentAlpha) !== null && _props$ignoreParentAl !== void 0 ? _props$ignoreParentAl : false,
                autosize: (_props$autosize = props.autosize) !== null && _props$autosize !== void 0 ? _props$autosize : false,
                boundsMargin: (_props$boundsMargin = props.boundsMargin) !== null && _props$boundsMargin !== void 0 ? _props$boundsMargin : null,
                clipping: (_props$clipping = props.clipping) !== null && _props$clipping !== void 0 ? _props$clipping : false,
                color: color,
                colorTop: (_props$colorTop = props.colorTop) !== null && _props$colorTop !== void 0 ? _props$colorTop : color,
                colorBottom: (_props$colorBottom = props.colorBottom) !== null && _props$colorBottom !== void 0 ? _props$colorBottom : color,
                colorLeft: (_props$colorLeft = props.colorLeft) !== null && _props$colorLeft !== void 0 ? _props$colorLeft : color,
                colorRight: (_props$colorRight = props.colorRight) !== null && _props$colorRight !== void 0 ? _props$colorRight : color,
                colorBl: (_ref = (_ref2 = (_props$colorBl = props.colorBl) !== null && _props$colorBl !== void 0 ? _props$colorBl : props.colorBottom) !== null && _ref2 !== void 0 ? _ref2 : props.colorLeft) !== null && _ref !== void 0 ? _ref : color,
                colorBr: (_ref3 = (_ref4 = (_props$colorBr = props.colorBr) !== null && _props$colorBr !== void 0 ? _props$colorBr : props.colorBottom) !== null && _ref4 !== void 0 ? _ref4 : props.colorRight) !== null && _ref3 !== void 0 ? _ref3 : color,
                colorTl: (_ref5 = (_ref6 = (_props$colorTl = props.colorTl) !== null && _props$colorTl !== void 0 ? _props$colorTl : props.colorTop) !== null && _ref6 !== void 0 ? _ref6 : props.colorLeft) !== null && _ref5 !== void 0 ? _ref5 : color,
                colorTr: (_ref7 = (_ref8 = (_props$colorTr = props.colorTr) !== null && _props$colorTr !== void 0 ? _props$colorTr : props.colorTop) !== null && _ref8 !== void 0 ? _ref8 : props.colorRight) !== null && _ref7 !== void 0 ? _ref7 : color,
                zIndex: (_props$zIndex = props.zIndex) !== null && _props$zIndex !== void 0 ? _props$zIndex : 0,
                parent: (_props$parent = props.parent) !== null && _props$parent !== void 0 ? _props$parent : null,
                texture: (_props$texture = props.texture) !== null && _props$texture !== void 0 ? _props$texture : null,
                textureOptions: (_props$textureOptions2 = props.textureOptions) !== null && _props$textureOptions2 !== void 0 ? _props$textureOptions2 : {},
                shader: (_props$shader2 = props.shader) !== null && _props$shader2 !== void 0 ? _props$shader2 : defaultShader,
                src: (_props$src = props.src) !== null && _props$src !== void 0 ? _props$src : null,
                srcHeight: props.srcHeight,
                srcWidth: props.srcWidth,
                srcX: props.srcX,
                srcY: props.srcY,
                scale: (_props$scale = props.scale) !== null && _props$scale !== void 0 ? _props$scale : null,
                scaleX: (_ref9 = (_props$scaleX = props.scaleX) !== null && _props$scaleX !== void 0 ? _props$scaleX : props.scale) !== null && _ref9 !== void 0 ? _ref9 : 1,
                scaleY: (_ref10 = (_props$scaleY = props.scaleY) !== null && _props$scaleY !== void 0 ? _props$scaleY : props.scale) !== null && _ref10 !== void 0 ? _ref10 : 1,
                mount: (_props$mount = props.mount) !== null && _props$mount !== void 0 ? _props$mount : 0,
                mountX: (_ref11 = (_props$mountX = props.mountX) !== null && _props$mountX !== void 0 ? _props$mountX : props.mount) !== null && _ref11 !== void 0 ? _ref11 : 0,
                mountY: (_ref12 = (_props$mountY = props.mountY) !== null && _props$mountY !== void 0 ? _props$mountY : props.mount) !== null && _ref12 !== void 0 ? _ref12 : 0,
                pivot: (_props$pivot = props.pivot) !== null && _props$pivot !== void 0 ? _props$pivot : .5,
                pivotX: (_ref13 = (_props$pivotX = props.pivotX) !== null && _props$pivotX !== void 0 ? _props$pivotX : props.pivot) !== null && _ref13 !== void 0 ? _ref13 : .5,
                pivotY: (_ref14 = (_props$pivotY = props.pivotY) !== null && _props$pivotY !== void 0 ? _props$pivotY : props.pivot) !== null && _ref14 !== void 0 ? _ref14 : .5,
                rotation: (_props$rotation = props.rotation) !== null && _props$rotation !== void 0 ? _props$rotation : 0,
                rtt: (_props$rtt = props.rtt) !== null && _props$rtt !== void 0 ? _props$rtt : false,
                placeholderColor: (_props$placeholderCol = props.placeholderColor) !== null && _props$placeholderCol !== void 0 ? _props$placeholderCol : 0,
                data: {},
                imageType: props.imageType
            };
        }
        function resolveTextNodeDefaults(props) {
            var _props$text, _props$textRendererOv, _props$fontSize, _props$fontFamily, _props$fontStyle, _props$fontWeight, _props$forceLoad, _props$textAlign, _props$contain, _props$offsetY, _props$letterSpacing, _props$lineHeight, _props$maxLines, _props$maxWidth, _props$maxHeight, _props$verticalAlign, _props$overflowSuffix, _props$wordBreak;
            return _objectSpread(_objectSpread({}, resolveNodeDefaults(props)), {}, {
                text: (_props$text = props.text) !== null && _props$text !== void 0 ? _props$text : "",
                textRendererOverride: (_props$textRendererOv = props.textRendererOverride) !== null && _props$textRendererOv !== void 0 ? _props$textRendererOv : null,
                fontSize: (_props$fontSize = props.fontSize) !== null && _props$fontSize !== void 0 ? _props$fontSize : 16,
                fontFamily: (_props$fontFamily = props.fontFamily) !== null && _props$fontFamily !== void 0 ? _props$fontFamily : "sans-serif",
                fontStyle: (_props$fontStyle = props.fontStyle) !== null && _props$fontStyle !== void 0 ? _props$fontStyle : "normal",
                fontWeight: (_props$fontWeight = props.fontWeight) !== null && _props$fontWeight !== void 0 ? _props$fontWeight : "normal",
                forceLoad: (_props$forceLoad = props.forceLoad) !== null && _props$forceLoad !== void 0 ? _props$forceLoad : false,
                textAlign: (_props$textAlign = props.textAlign) !== null && _props$textAlign !== void 0 ? _props$textAlign : "left",
                contain: (_props$contain = props.contain) !== null && _props$contain !== void 0 ? _props$contain : "none",
                offsetY: (_props$offsetY = props.offsetY) !== null && _props$offsetY !== void 0 ? _props$offsetY : 0,
                letterSpacing: (_props$letterSpacing = props.letterSpacing) !== null && _props$letterSpacing !== void 0 ? _props$letterSpacing : 0,
                lineHeight: (_props$lineHeight = props.lineHeight) !== null && _props$lineHeight !== void 0 ? _props$lineHeight : 0,
                maxLines: (_props$maxLines = props.maxLines) !== null && _props$maxLines !== void 0 ? _props$maxLines : 0,
                maxWidth: (_props$maxWidth = props.maxWidth) !== null && _props$maxWidth !== void 0 ? _props$maxWidth : 0,
                maxHeight: (_props$maxHeight = props.maxHeight) !== null && _props$maxHeight !== void 0 ? _props$maxHeight : 0,
                verticalAlign: (_props$verticalAlign = props.verticalAlign) !== null && _props$verticalAlign !== void 0 ? _props$verticalAlign : "middle",
                overflowSuffix: (_props$overflowSuffix = props.overflowSuffix) !== null && _props$overflowSuffix !== void 0 ? _props$overflowSuffix : "...",
                wordBreak: (_props$wordBreak = props.wordBreak) !== null && _props$wordBreak !== void 0 ? _props$wordBreak : "overflow"
            });
        }
        function updateRootPosition() {
            var _settings$deviceLogic, _settings$appHeight, _settings$appWidth;
            var canvas = this.canvas, settings = this.settings;
            var rect = canvas.getBoundingClientRect();
            var top = document.documentElement.scrollTop + rect.top;
            var left = document.documentElement.scrollLeft + rect.left;
            var dpr = (_settings$deviceLogic = settings.deviceLogicalPixelRatio) !== null && _settings$deviceLogic !== void 0 ? _settings$deviceLogic : 1;
            var height = Math.ceil((_settings$appHeight = settings.appHeight) !== null && _settings$appHeight !== void 0 ? _settings$appHeight : 1080 / dpr);
            var width = Math.ceil((_settings$appWidth = settings.appWidth) !== null && _settings$appWidth !== void 0 ? _settings$appWidth : 1920 / dpr);
            this.root.div.style.left = "".concat(left, "px");
            this.root.div.style.top = "".concat(top, "px");
            this.root.div.style.width = "".concat(width, "px");
            this.root.div.style.height = "".concat(height, "px");
            this.root.div.style.position = "absolute";
            this.root.div.style.transformOrigin = "0 0 0";
            this.root.div.style.transform = "scale(".concat(dpr, ", ").concat(dpr, ")");
            this.root.div.style.overflow = "hidden";
        }
        function loadFontToDom(font) {
            if (typeof document === "undefined" || !("fonts" in document) || typeof FontFace === "undefined" || !font.fontUrl) return;
            var fontSet = document.fonts;
            var names = Array.isArray(font.fontFamily) ? font.fontFamily : [ font.fontFamily ];
            for (var i = 0; i < names.length; i++) {
                var _fontSet$add;
                var fontFace = new FontFace(names[i], "url(".concat(font.fontUrl, ")"));
                (_fontSet$add = fontSet.add) == null || _fontSet$add.call(fontSet, fontFace);
                fontFace.load().then(scheduleContainTextNodesMeasurement).catch(function() {});
            }
        }
        function startLightningRenderer(options) {
            var rootId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "app";
            _export("x", renderer$1 = DOM_RENDERING && Config.domRendererEnabled ? new DOMRendererMain(options, rootId) : new RendererMain(options, rootId));
            flushPendingFonts();
            return renderer$1;
        }
        function attachFonts(fonts) {
            var enableDomRenderer = DOM_RENDERING && Config.domRendererEnabled;
            var hasCanvas = !enableDomRenderer && "textRenderers" in renderer$1.stage && !!renderer$1.stage.textRenderers.canvas;
            return Promise.all(fonts.map(function(font) {
                if (renderer$1.stage.renderer.mode === "webgl" && "type" in font && (font.type === "msdf" || font.type === "ssdf")) return renderer$1.stage.loadFont("sdf", font);
                if ("fontUrl" in font) {
                    if (enableDomRenderer) loadFontToDom(font); else if (hasCanvas) return renderer$1.stage.loadFont("canvas", font);
                }
            }));
        }
        function mayUseSdf() {
            var _Config$rendererOptio;
            var engines = (_Config$rendererOptio = Config.rendererOptions) == null ? void 0 : _Config$rendererOptio.fontEngines;
            if (engines === void 0 || engines.length === 0) return true;
            return engines.some(function(engine) {
                return engine.type === "sdf";
            });
        }
        function flushPendingFonts() {
            if (pendingFontLoads.length === 0) return;
            var queued = pendingFontLoads.splice(0, pendingFontLoads.length);
            var _loop4 = function _loop4() {
                var pending = queued[i];
                attachFonts(pending.fonts).then(function() {
                    return pending.resolve();
                }, pending.reject);
            };
            for (var i = 0; i < queued.length; i++) {
                _loop4();
            }
        }
        function loadFonts(_x3) {
            return _loadFonts.apply(this, arguments);
        }
        function _loadFonts() {
            _loadFonts = _asyncToGenerator(_regenerator().m(function _callee17(fonts) {
                var enableDomRenderer, preferSdf, deferred, i, font;
                return _regenerator().w(function(_context18) {
                    while (1) switch (_context18.n) {
                      case 0:
                        if (!(renderer$1 !== void 0)) {
                            _context18.n = 2;
                            break;
                        }
                        _context18.n = 1;
                        return attachFonts(fonts);

                      case 1:
                        return _context18.a(2);

                      case 2:
                        enableDomRenderer = DOM_RENDERING && Config.domRendererEnabled;
                        preferSdf = mayUseSdf();
                        deferred = [];
                        i = 0;

                      case 3:
                        if (!(i < fonts.length)) {
                            _context18.n = 6;
                            break;
                        }
                        font = fonts[i];
                        if (!enableDomRenderer) {
                            _context18.n = 4;
                            break;
                        }
                        if ("fontUrl" in font) loadFontToDom(font);
                        return _context18.a(3, 5);

                      case 4:
                        prefetchFont(preferSdf ? font : _objectSpread(_objectSpread({}, font), {}, {
                            type: "canvas"
                        }));
                        deferred.push(font);

                      case 5:
                        i++;
                        _context18.n = 3;
                        break;

                      case 6:
                        if (!(deferred.length === 0)) {
                            _context18.n = 7;
                            break;
                        }
                        return _context18.a(2);

                      case 7:
                        _context18.n = 8;
                        return new Promise(function(resolve, reject) {
                            pendingFontLoads.push({
                                fonts: deferred,
                                resolve: resolve,
                                reject: reject
                            });
                        });

                      case 8:
                        return _context18.a(2);
                    }
                }, _callee17);
            }));
            return _loadFonts.apply(this, arguments);
        }
        function getArrayValue(val, index) {
            var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            var _result;
            if (val === void 0) return defaultValue;
            if (typeof val === "number") return val;
            var len = val.length;
            var result;
            if (len === 2) result = index % 2 === 0 ? val[0] : val[1]; else if (len === 3) result = index === 0 ? val[0] : index === 2 ? val[2] : val[1]; else result = val[index];
            return (_result = result) !== null && _result !== void 0 ? _result : defaultValue;
        }
        function flexLayout_default(node) {
            var _node$paddingTop, _node$paddingRight, _node$paddingBottom, _node$paddingLeft;
            var direction = node.flexDirection || "row";
            var isRow = direction === "row" || direction === "row-reverse";
            var isReverse = direction === "row-reverse" || direction === "column-reverse";
            var dimension = isRow ? "width" : "height";
            var crossDimension = isRow ? "height" : "width";
            var nodePadding = node.padding;
            var paddingTop = (_node$paddingTop = node.paddingTop) !== null && _node$paddingTop !== void 0 ? _node$paddingTop : getArrayValue(nodePadding, 0);
            var paddingRight = (_node$paddingRight = node.paddingRight) !== null && _node$paddingRight !== void 0 ? _node$paddingRight : getArrayValue(nodePadding, 1);
            var paddingBottom = (_node$paddingBottom = node.paddingBottom) !== null && _node$paddingBottom !== void 0 ? _node$paddingBottom : getArrayValue(nodePadding, 2);
            var paddingLeft = (_node$paddingLeft = node.paddingLeft) !== null && _node$paddingLeft !== void 0 ? _node$paddingLeft : getArrayValue(nodePadding, 3);
            var paddingStart = isRow ? paddingLeft : paddingTop;
            var paddingEnd = isRow ? paddingRight : paddingBottom;
            var paddingCrossStart = isRow ? paddingTop : paddingLeft;
            var paddingCrossEnd = isRow ? paddingBottom : paddingRight;
            var nodePaddingTotal = paddingStart + paddingEnd;
            var minDimension = isRow ? "minWidth" : "minHeight";
            var crossMinDimension = isRow ? "minHeight" : "minWidth";
            var children = node.children;
            var numChildren = children.length;
            if (numChildren === 0) return false;
            var processableChildrenIndices = [];
            var hasOrder = false;
            var totalFlexGrow = 0;
            var totalFlexShrink = 0;
            for (var i = 0; i < numChildren; i++) {
                var c = children[i];
                if (isElementText(c) && c.text && !(c.width || c.height)) return false;
                if (isTextNode(c) || c.flexItem === false) continue;
                if (c.flexOrder !== void 0) hasOrder = true;
                var flexGrow = c.flexGrow;
                if (flexGrow !== void 0 && flexGrow > 0) totalFlexGrow += flexGrow;
                var flexShrink = c.flexShrink;
                if (flexShrink !== void 0 && flexShrink > 0) totalFlexShrink += flexShrink;
                if (c[minDimension] && (c[dimension] || 0) < c[minDimension]) c[dimension] = c[minDimension];
                if (c[crossMinDimension] && (c[crossDimension] || 0) < c[crossMinDimension]) c[crossDimension] = c[crossMinDimension];
                processableChildrenIndices.push(i);
            }
            if (hasOrder) processableChildrenIndices.sort(function(aIdx, bIdx) {
                var a = children[aIdx];
                var b = children[bIdx];
                return (a.flexOrder || 0) - (b.flexOrder || 0);
            });
            if (isReverse || node.direction === "rtl") processableChildrenIndices.reverse();
            var numProcessedChildren = processableChildrenIndices.length;
            if (numProcessedChildren === 0) return false;
            var prop = isRow ? "x" : "y";
            var crossProp = isRow ? "y" : "x";
            var containerSize = Math.max(node[dimension] || 0, node[minDimension] || 0, 0);
            var containerCrossSize = Math.max(node[crossDimension] || 0, node[crossMinDimension] || 0, 0);
            var isWrapReverse = node.flexWrap === "wrap-reverse";
            var gap = node.gap || 0;
            var justify = node.justifyContent || "flexStart";
            var align = node.alignItems || (node.flexWrap ? "flexStart" : void 0);
            var containerUpdated = false;
            var childMainSizes = new Float32Array(numProcessedChildren);
            var childMarginStarts = new Float32Array(numProcessedChildren);
            var childMarginEnds = new Float32Array(numProcessedChildren);
            var childTotalMainSizes = new Float32Array(numProcessedChildren);
            var childCrossSizes = new Float32Array(numProcessedChildren);
            var childMarginCrossStarts = new Float32Array(numProcessedChildren);
            var childMarginCrossEnds = new Float32Array(numProcessedChildren);
            var sumOfFlexBaseSizesWithMargins = 0;
            for (var idx = 0; idx < numProcessedChildren; idx++) {
                var _c2 = children[processableChildrenIndices[idx]];
                var marginArray = _c2.margin;
                var flexBasis = _c2.flexBasis;
                var isBasisAuto = flexBasis === void 0 || flexBasis === "auto";
                var computedBasis = isBasisAuto ? _c2[dimension] || 0 : flexBasis;
                var baseMainSize = isBasisAuto ? computedBasis : Math.max(computedBasis, _c2[minDimension] || 0);
                var marginStart = isRow ? _c2.marginLeft || getArrayValue(marginArray, 3) : _c2.marginTop || getArrayValue(marginArray, 0);
                var marginEnd = isRow ? _c2.marginRight || getArrayValue(marginArray, 1) : _c2.marginBottom || getArrayValue(marginArray, 2);
                var marginCrossStart = isRow ? _c2.marginTop || getArrayValue(marginArray, 0) : _c2.marginLeft || getArrayValue(marginArray, 3);
                var marginCrossEnd = isRow ? _c2.marginBottom || getArrayValue(marginArray, 2) : _c2.marginRight || getArrayValue(marginArray, 1);
                childMainSizes[idx] = baseMainSize;
                childMarginStarts[idx] = marginStart;
                childMarginEnds[idx] = marginEnd;
                childTotalMainSizes[idx] = baseMainSize + marginStart + marginEnd;
                childCrossSizes[idx] = _c2[crossDimension] || 0;
                childMarginCrossStarts[idx] = marginCrossStart;
                childMarginCrossEnds[idx] = marginCrossEnd;
                sumOfFlexBaseSizesWithMargins += childTotalMainSizes[idx];
            }
            if ((totalFlexGrow > 0 || totalFlexShrink > 0) && numProcessedChildren > 1) {
                node.flexBoundary = node.flexBoundary || "fixed";
                var totalGapSpace = numProcessedChildren > 0 ? gap * (numProcessedChildren - 1) : 0;
                var availableSpace = containerSize - sumOfFlexBaseSizesWithMargins - totalGapSpace;
                if (availableSpace > 0 && totalFlexGrow > 0) {
                    for (var _idx2 = 0; _idx2 < numProcessedChildren; _idx2++) {
                        var _c3 = children[processableChildrenIndices[_idx2]];
                        var flexGrowValue = _c3.flexGrow || 0;
                        if (flexGrowValue > 0) {
                            var shareOfSpace = flexGrowValue / totalFlexGrow * availableSpace;
                            var newMainSize = childMainSizes[_idx2] + shareOfSpace;
                            _c3[dimension] = newMainSize;
                            childMainSizes[_idx2] = newMainSize;
                            childTotalMainSizes[_idx2] = newMainSize + childMarginStarts[_idx2] + childMarginEnds[_idx2];
                        }
                    }
                    node._containsFlexGrow = node._containsFlexGrow ? null : true;
                } else if (availableSpace < 0 && totalFlexShrink > 0) {
                    var totalScaledShrinkFactor = 0;
                    for (var _idx3 = 0; _idx3 < numProcessedChildren; _idx3++) {
                        var flexShrinkValue = children[processableChildrenIndices[_idx3]].flexShrink || 0;
                        totalScaledShrinkFactor += flexShrinkValue * childMainSizes[_idx3];
                    }
                    if (totalScaledShrinkFactor > 0) for (var _idx4 = 0; _idx4 < numProcessedChildren; _idx4++) {
                        var _c4 = children[processableChildrenIndices[_idx4]];
                        var _flexShrinkValue = _c4.flexShrink || 0;
                        if (_flexShrinkValue > 0) {
                            var sizeReduction = _flexShrinkValue * childMainSizes[_idx4] / totalScaledShrinkFactor * Math.abs(availableSpace);
                            var _newMainSize = childMainSizes[_idx4] - sizeReduction;
                            var minBound = _c4[minDimension] || 0;
                            if (_newMainSize < minBound) _newMainSize = minBound;
                            _c4[dimension] = _newMainSize;
                            childMainSizes[_idx4] = _newMainSize;
                            childTotalMainSizes[_idx4] = _newMainSize + childMarginStarts[_idx4] + childMarginEnds[_idx4];
                        }
                    }
                    node._containsFlexGrow = node._containsFlexGrow ? null : true;
                } else if (node._containsFlexGrow) node._containsFlexGrow = null;
            }
            var totalItemSize = 0;
            if (justify === "center" || justify === "spaceBetween" || justify === "spaceEvenly" || justify === "spaceAround") for (var _idx5 = 0; _idx5 < numProcessedChildren; _idx5++) totalItemSize += childTotalMainSizes[_idx5];
            var doCrossAlign = containerCrossSize ? function(c, idx) {
                var crossCurrentPos = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                var alignSelf = c.alignSelf || align;
                if (!alignSelf) return;
                if (alignSelf === "flexStart") c[crossProp] = crossCurrentPos + childMarginCrossStarts[idx]; else if (alignSelf === "center") c[crossProp] = crossCurrentPos + (containerCrossSize - childCrossSizes[idx]) / 2 + childMarginCrossStarts[idx]; else if (alignSelf === "flexEnd") c[crossProp] = crossCurrentPos + containerCrossSize - childCrossSizes[idx] - childMarginCrossEnds[idx];
            } : function(_c, _idx) {
                var _crossCurrentPos = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            };
            if (isRow && node._calcHeight && !node.flexCrossBoundary) {
                var maxHeight = 0;
                for (var _idx6 = 0; _idx6 < numProcessedChildren; _idx6++) if (childCrossSizes[_idx6] > maxHeight) maxHeight = childCrossSizes[_idx6];
                var newHeight = maxHeight || node.height;
                if (newHeight !== node.height) {
                    containerUpdated = true;
                    node.height = containerCrossSize = newHeight;
                }
            }
            var currentPos = paddingStart;
            if (justify === "flexStart") {
                if (node.flexWrap === "wrap") {
                    var _node$columnGap, _node$rowGap;
                    var childCrossSizeVar = numProcessedChildren > 0 ? childCrossSizes[0] : containerCrossSize;
                    var crossCurrentPos = isWrapReverse ? containerCrossSize - paddingCrossEnd - childCrossSizeVar : paddingCrossStart;
                    var crossGap = isRow ? (_node$columnGap = node.columnGap) !== null && _node$columnGap !== void 0 ? _node$columnGap : gap : (_node$rowGap = node.rowGap) !== null && _node$rowGap !== void 0 ? _node$rowGap : gap;
                    for (var _idx7 = 0; _idx7 < numProcessedChildren; _idx7++) {
                        var _c5 = children[processableChildrenIndices[_idx7]];
                        if (currentPos + childTotalMainSizes[_idx7] > containerSize && currentPos > paddingStart) {
                            currentPos = paddingStart;
                            crossCurrentPos += isWrapReverse ? -(childCrossSizeVar + crossGap) : childCrossSizeVar + crossGap;
                        }
                        _c5[prop] = currentPos + childMarginStarts[_idx7];
                        currentPos += childTotalMainSizes[_idx7] + gap;
                        doCrossAlign(_c5, _idx7, crossCurrentPos);
                    }
                    var finalCrossSize = isWrapReverse ? containerCrossSize - crossCurrentPos + paddingCrossStart : crossCurrentPos + childCrossSizeVar + paddingCrossEnd;
                    if (node[crossDimension] !== finalCrossSize) {
                        node["preFlex".concat(crossDimension)] = node[crossDimension];
                        node[crossDimension] = finalCrossSize;
                        containerUpdated = true;
                    }
                } else for (var _idx8 = 0; _idx8 < numProcessedChildren; _idx8++) {
                    var _c6 = children[processableChildrenIndices[_idx8]];
                    _c6[prop] = currentPos + childMarginStarts[_idx8];
                    currentPos += childTotalMainSizes[_idx8] + gap;
                    doCrossAlign(_c6, _idx8, paddingCrossStart);
                }
                if (node.flexBoundary !== "fixed" && node.flexWrap !== "wrap") {
                    var calculatedSize = currentPos - gap + paddingEnd;
                    var minSize = node[minDimension] || 0;
                    if (calculatedSize < minSize) calculatedSize = minSize;
                    if (calculatedSize !== (node[dimension] || 0)) {
                        node["preFlex".concat(dimension)] = containerSize;
                        node[dimension] = calculatedSize;
                        return true;
                    }
                }
            } else if (justify === "flexEnd") {
                currentPos = containerSize - paddingEnd;
                for (var _idx9 = numProcessedChildren - 1; _idx9 >= 0; _idx9--) {
                    var _c7 = children[processableChildrenIndices[_idx9]];
                    _c7[prop] = currentPos - childMainSizes[_idx9] - childMarginEnds[_idx9];
                    currentPos -= childTotalMainSizes[_idx9] + gap;
                    doCrossAlign(_c7, _idx9, paddingCrossStart);
                }
            } else if (justify === "center") {
                currentPos = (containerSize - (totalItemSize + gap * (numProcessedChildren - 1))) / 2 + paddingStart;
                for (var _idx0 = 0; _idx0 < numProcessedChildren; _idx0++) {
                    var _c8 = children[processableChildrenIndices[_idx0]];
                    _c8[prop] = currentPos + childMarginStarts[_idx0];
                    currentPos += childTotalMainSizes[_idx0] + gap;
                    doCrossAlign(_c8, _idx0, paddingCrossStart);
                }
            } else if (justify === "spaceBetween") {
                var spaceBetween = numProcessedChildren > 1 ? (containerSize - totalItemSize - nodePaddingTotal) / (numProcessedChildren - 1) : 0;
                currentPos = paddingStart;
                for (var _idx1 = 0; _idx1 < numProcessedChildren; _idx1++) {
                    var _c9 = children[processableChildrenIndices[_idx1]];
                    _c9[prop] = currentPos + childMarginStarts[_idx1];
                    currentPos += childTotalMainSizes[_idx1] + spaceBetween;
                    doCrossAlign(_c9, _idx1, paddingCrossStart);
                }
            } else if (justify === "spaceAround") {
                var spaceAround = numProcessedChildren > 0 ? (containerSize - totalItemSize - nodePaddingTotal) / numProcessedChildren : 0;
                currentPos = paddingStart + spaceAround / 2;
                for (var _idx10 = 0; _idx10 < numProcessedChildren; _idx10++) {
                    var _c0 = children[processableChildrenIndices[_idx10]];
                    _c0[prop] = currentPos + childMarginStarts[_idx10];
                    currentPos += childTotalMainSizes[_idx10] + spaceAround;
                    doCrossAlign(_c0, _idx10, paddingCrossStart);
                }
            } else if (justify === "spaceEvenly") {
                var spaceEvenly = (containerSize - totalItemSize - nodePaddingTotal) / (numProcessedChildren + 1);
                currentPos = spaceEvenly + paddingStart;
                for (var _idx11 = 0; _idx11 < numProcessedChildren; _idx11++) {
                    var _c1 = children[processableChildrenIndices[_idx11]];
                    _c1[prop] = currentPos + childMarginStarts[_idx11];
                    currentPos += childTotalMainSizes[_idx11] + spaceEvenly;
                    doCrossAlign(_c1, _idx11, paddingCrossStart);
                }
            }
            return containerUpdated;
        }
        function findDeepestAtPosition(root, x, y) {
            var _Config$rendererOptio;
            var precision = ((_Config$rendererOptio = Config.rendererOptions) == null ? void 0 : _Config$rendererOptio.deviceLogicalPixelRatio) || 1;
            var px = x / precision;
            var py = y / precision;
            var current = root;
            while (true) {
                var best = void 0;
                var bestZ = -Infinity;
                var _iterator10 = _createForOfIteratorHelper(current.children), _step10;
                try {
                    for (_iterator10.s(); !(_step10 = _iterator10.n()).done; ) {
                        var child = _step10.value;
                        var _child$zIndex;
                        if (!isElementNode(child) || child.alpha === 0) continue;
                        var cx = child.lng.absX || 0;
                        var cy = child.lng.absY || 0;
                        var cw = child.width || 0;
                        var ch = child.height || 0;
                        if (px < cx || px > cx + cw || py < cy || py > cy + ch) continue;
                        var z = (_child$zIndex = child.zIndex) !== null && _child$zIndex !== void 0 ? _child$zIndex : -1;
                        if (z >= bestZ) {
                            bestZ = z;
                            best = child;
                        }
                    }
                } catch (err) {
                    _iterator10.e(err);
                } finally {
                    _iterator10.f();
                }
                if (!best) return current;
                current = best;
            }
        }
        function handleClick(event) {
            if (!event.altKey) return;
            var target = event.target;
            while (target && !target.element) target = target.parentElement;
            var hit = target == null ? void 0 : target.element;
            if (!hit) return;
            var root = hit;
            while (root.parent) root = root.parent;
            var el = findDeepestAtPosition(root, event.clientX, event.clientY);
            event.preventDefault();
            event.stopPropagation();
            var lng = el.lng;
            var label = el.componentName || el._type;
            var loc = el.componentLocation ? " @ ".concat(el.componentLocation) : "";
            console.log("%c[SolidTV Inspector] %c".concat(label).concat(loc), "color: magenta; font-weight: bold;", "color: inherit; font-weight: normal;", {
                element: el,
                div: lng.div,
                lng: lng,
                states: el._states ? Array.from(el._states) : [],
                position: {
                    x: lng == null ? void 0 : lng.x,
                    y: lng == null ? void 0 : lng.y,
                    w: lng == null ? void 0 : lng.w,
                    h: lng == null ? void 0 : lng.h
                },
                parent: el.parent,
                children: el.children
            });
            globalThis.$el = el;
            console.log("Pinned to $el — try $el.parent, $el.setFocus()");
        }
        function initClickInspector() {
            if (installed || !false || typeof document === "undefined") return;
            installed = true;
            document.addEventListener("click", handleClick, true);
        }
        function enqueueDelete(node, n) {
            if (node._queueDelete === void 0) {
                node._queueDelete = n;
                if (elementDeleteQueue.push(node) === 1) schedulePostMutation();
            } else node._queueDelete += n;
        }
        function schedulePostMutation() {
            if (postMutationQueued) return;
            postMutationQueued = true;
            if ("reprocessUpdates" in renderer$1.stage && renderer$1.stage.reprocessUpdates) renderer$1.stage.reprocessUpdates(runPostMutation);
            queueMicrotask(runPostMutation);
        }
        function runPostMutation() {
            postMutationQueued = false;
            if (elementDeleteQueue.length > 0) {
                var _iterator11 = _createForOfIteratorHelper(elementDeleteQueue), _step11;
                try {
                    for (_iterator11.s(); !(_step11 = _iterator11.n()).done; ) {
                        var el = _step11.value;
                        var _el$_queueDelete;
                        if (((_el$_queueDelete = el._queueDelete) !== null && _el$_queueDelete !== void 0 ? _el$_queueDelete : 0) < 0) el.destroy();
                        el._queueDelete = void 0;
                    }
                } catch (err) {
                    _iterator11.e(err);
                } finally {
                    _iterator11.f();
                }
                elementDeleteQueue.length = 0;
            }
            while (layoutQueue.size > 0) {
                var queue = _toConsumableArray(layoutQueue);
                layoutQueue.clear();
                for (var i = queue.length - 1; i >= 0; i--) queue[i].updateLayout();
            }
            if (deferredFocusElement !== null) {
                var _el = deferredFocusElement;
                deferredFocusElement = null;
                _el.setFocus();
            } else if (nextActiveElement !== null) {
                var element = nextActiveElement;
                nextActiveElement = null;
                setActiveElementCore(element);
            }
        }
        function addToLayoutQueue(node) {
            layoutQueue.add(node);
            schedulePostMutation();
        }
        function buildFontTemplate() {
            var tpl = [];
            var fs = Config.fontSettings;
            if (fs) for (var key in fs) {
                if (key === "fontFamily") {
                    _fontFamilyIdx = tpl.length;
                    _fontFamilyWithWeight = "".concat(fs.fontFamily).concat(fs.fontWeight || "");
                }
                tpl.push([ key, fs[key] ]);
            }
            _fontTemplate = tpl;
        }
        function convertToShader(_node, v) {
            var type = "rounded";
            if (v.border) type += "WithBorder";
            if (v.shadow) type += "WithShadow";
            return renderer$1.createShader(type, v);
        }
        function getPropertyAlias(name) {
            if (name === "w") return "width";
            if (name === "h") return "height";
            return name;
        }
        function createRawShaderAccessor(key) {
            return {
                set: function set(value) {
                    this.shader = [ key, value ];
                },
                get: function get() {
                    return this.shader;
                }
            };
        }
        function shaderAccessor(key) {
            return {
                set: function set(value) {
                    var _this$lng$shader2;
                    var target = this.lng.shader || {};
                    this._effects = this._effects || {};
                    this._effects[key] = value;
                    var animationSettings;
                    if ((_this$lng$shader2 = this.lng.shader) == null ? void 0 : _this$lng$shader2.props) {
                        target = this.lng.shader.props;
                        var transitionKey = key === "rounded" ? "borderRadius" : key;
                        if (this.transition && (this.transition === true || this.transition[transitionKey])) {
                            target = {};
                            animationSettings = this.transition === true || this.transition[transitionKey] === true ? void 0 : this.transition[transitionKey];
                        }
                    }
                    if (key === "rounded" || typeof value === "number") target.radius = value; else parseAndAssignShaderProps(key, value, target);
                    this._writeShaderTarget(target);
                    if (animationSettings) this.animate({
                        shaderProps: target
                    }, animationSettings).start();
                },
                get: function get() {
                    var _this$_effects;
                    return (_this$_effects = this._effects) == null ? void 0 : _this$_effects[key];
                }
            };
        }
        function createRenderer$1(_ref16) {
            var createElement = _ref16.createElement, createTextNode = _ref16.createTextNode, isTextNode = _ref16.isTextNode, replaceText = _ref16.replaceText, insertNode = _ref16.insertNode, removeNode = _ref16.removeNode, setProperty = _ref16.setProperty, getParentNode = _ref16.getParentNode, getFirstChild = _ref16.getFirstChild, getNextSibling = _ref16.getNextSibling;
            function insert(parent, accessor, marker, initial) {
                if (marker !== void 0 && !initial) initial = [];
                if (typeof accessor !== "function") return insertExpression(parent, accessor, initial, marker);
                createRenderEffect(function(current) {
                    return insertExpression(parent, accessor(), current, marker);
                }, initial);
            }
            function insertExpression(parent, value, current, marker, unwrapArray) {
                while (typeof current === "function") current = current();
                if (value === current) return current;
                var t = _typeof(value), multi = marker !== void 0;
                if (t === "string" || t === "number") {
                    if (t === "number") value = value.toString();
                    if (multi) {
                        var node = current[0];
                        if (node && isTextNode(node)) replaceText(node, value); else node = createTextNode(value);
                        current = cleanChildren(parent, current, marker, node);
                    } else if (current !== "" && typeof current === "string") replaceText(getFirstChild(parent), current = value); else {
                        cleanChildren(parent, current, marker, createTextNode(value));
                        current = value;
                    }
                } else if (value == null || t === "boolean") current = cleanChildren(parent, current, marker); else if (t === "function") {
                    createRenderEffect(function() {
                        var v = value();
                        while (typeof v === "function") v = v();
                        current = insertExpression(parent, v, current, marker);
                    });
                    return function() {
                        return current;
                    };
                } else if (Array.isArray(value)) {
                    var array = [];
                    if (normalizeIncomingArray(array, value, unwrapArray)) {
                        createRenderEffect(function() {
                            return current = insertExpression(parent, array, current, marker, true);
                        });
                        return function() {
                            return current;
                        };
                    }
                    if (array.length === 0) {
                        var replacement = cleanChildren(parent, current, marker);
                        if (multi) return current = replacement;
                    } else if (Array.isArray(current)) {
                        if (current.length === 0) appendNodes(parent, array, marker); else reconcileArrays(parent, current, array);
                    } else if (current == null || current === "") appendNodes(parent, array); else reconcileArrays(parent, multi && current || [ getFirstChild(parent) ], array);
                    current = array;
                } else {
                    if (Array.isArray(current)) {
                        if (multi) return current = cleanChildren(parent, current, marker, value);
                        cleanChildren(parent, current, null, value);
                    } else if (current == null || current === "" || !getFirstChild(parent)) insertNode(parent, value); else replaceNode(parent, value, getFirstChild(parent));
                    current = value;
                }
                return current;
            }
            function normalizeIncomingArray(normalized, array, unwrap) {
                var dynamic = false;
                for (var i = 0, len = array.length; i < len; i++) {
                    var item = array[i], t = void 0;
                    if (item == null || item === true || item === false) ; else if (Array.isArray(item)) dynamic = normalizeIncomingArray(normalized, item) || dynamic; else if ((t = _typeof(item)) === "string" || t === "number") normalized.push(createTextNode(item)); else if (t === "function") {
                        if (unwrap) {
                            while (typeof item === "function") item = item();
                            dynamic = normalizeIncomingArray(normalized, Array.isArray(item) ? item : [ item ]) || dynamic;
                        } else {
                            normalized.push(item);
                            dynamic = true;
                        }
                    } else normalized.push(item);
                }
                return dynamic;
            }
            function reconcileArrays(parentNode, a, b) {
                var bLength = b.length, aEnd = a.length, bEnd = bLength, aStart = 0, bStart = 0, after = getNextSibling(a[aEnd - 1]), map = null;
                while (aStart < aEnd || bStart < bEnd) {
                    if (a[aStart] === b[bStart]) {
                        aStart++;
                        bStart++;
                        continue;
                    }
                    while (a[aEnd - 1] === b[bEnd - 1]) {
                        aEnd--;
                        bEnd--;
                    }
                    if (aEnd === aStart) {
                        var node = bEnd < bLength ? bStart ? getNextSibling(b[bStart - 1]) : b[bEnd - bStart] : after;
                        while (bStart < bEnd) insertNode(parentNode, b[bStart++], node);
                    } else if (bEnd === bStart) while (aStart < aEnd) {
                        if (!map || !map.has(a[aStart])) removeNode(parentNode, a[aStart]);
                        aStart++;
                    } else if (a[aStart] === b[bEnd - 1] && b[bStart] === a[aEnd - 1]) {
                        var _node2 = getNextSibling(a[--aEnd]);
                        insertNode(parentNode, b[bStart++], getNextSibling(a[aStart++]));
                        insertNode(parentNode, b[--bEnd], _node2);
                        a[aEnd] = b[bEnd];
                    } else {
                        if (!map) {
                            map = new Map;
                            var i = bStart;
                            while (i < bEnd) map.set(b[i], i++);
                        }
                        var index = map.get(a[aStart]);
                        if (index != null) {
                            if (bStart < index && index < bEnd) {
                                var _i8 = aStart, sequence = 1, t = void 0;
                                while (++_i8 < aEnd && _i8 < bEnd) {
                                    if ((t = map.get(a[_i8])) == null || t !== index + sequence) break;
                                    sequence++;
                                }
                                if (sequence > index - bStart) {
                                    var _node3 = a[aStart];
                                    while (bStart < index) insertNode(parentNode, b[bStart++], _node3);
                                } else replaceNode(parentNode, b[bStart++], a[aStart++]);
                            } else aStart++;
                        } else removeNode(parentNode, a[aStart++]);
                    }
                }
            }
            function cleanChildren(parent, current, marker, replacement) {
                if (marker === void 0) {
                    var removed;
                    while (removed = getFirstChild(parent)) removeNode(parent, removed);
                    replacement && insertNode(parent, replacement);
                    return "";
                }
                var node = replacement || createTextNode("");
                if (current.length) {
                    var inserted = false;
                    for (var i = current.length - 1; i >= 0; i--) {
                        var el = current[i];
                        if (node !== el) {
                            var isParent = getParentNode(el) === parent;
                            if (!inserted && !i) isParent ? replaceNode(parent, node, el) : insertNode(parent, node, marker); else isParent && removeNode(parent, el);
                        } else inserted = true;
                    }
                } else insertNode(parent, node, marker);
                return [ node ];
            }
            function appendNodes(parent, array, marker) {
                for (var i = 0, len = array.length; i < len; i++) insertNode(parent, array[i], marker);
            }
            function replaceNode(parent, newNode, oldNode) {
                insertNode(parent, newNode, oldNode);
                removeNode(parent, oldNode);
            }
            function spreadExpression(node, props) {
                var prevProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                var skipChildren = arguments.length > 3 ? arguments[3] : undefined;
                props || (props = {});
                if (!skipChildren) createRenderEffect(function() {
                    return prevProps.children = insertExpression(node, props.children, prevProps.children);
                });
                createRenderEffect(function() {
                    return props.ref && props.ref(node);
                });
                createRenderEffect(function() {
                    for (var prop in props) {
                        if (prop === "children" || prop === "ref") continue;
                        var value = props[prop];
                        if (value === prevProps[prop]) continue;
                        setProperty(node, prop, value, prevProps[prop]);
                        prevProps[prop] = value;
                    }
                });
                return prevProps;
            }
            return {
                render: function render(code, element) {
                    var disposer;
                    createRoot(function(dispose) {
                        disposer = dispose;
                        insert(element, code());
                    });
                    return disposer;
                },
                insert: insert,
                spread: function spread(node, accessor, skipChildren) {
                    if (typeof accessor === "function") createRenderEffect(function(current) {
                        return spreadExpression(node, accessor(), current, skipChildren);
                    }); else spreadExpression(node, accessor, void 0, skipChildren);
                },
                createElement: createElement,
                createTextNode: createTextNode,
                insertNode: insertNode,
                setProp: function setProp(node, name, value, prev) {
                    setProperty(node, name, value, prev);
                    return value;
                },
                mergeProps: mergeProps,
                effect: createRenderEffect,
                memo: memo$1,
                createComponent: createComponent$1,
                use: function use(fn, element, arg) {
                    return untrack(function() {
                        return fn(element, arg);
                    });
                }
            };
        }
        function createRenderer$2(options) {
            var renderer = createRenderer$1(options);
            renderer.mergeProps = mergeProps;
            return renderer;
        }
        function createRenderer(rendererOptions, node) {
            renderer = startLightningRenderer(rendererOptions || Config.rendererOptions, node || "app");
            rootNode.lng = renderer.root;
            rootNode.rendered = true;
            renderer.on("idle", function() {
                tasksEnabled = true;
                processTasks();
            });
            return {
                renderer: renderer,
                rootNode: rootNode,
                render: render
            };
        }
        function scheduleTask(callback) {
            var priority = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "low";
            if (priority === "high") taskQueue.unshift(callback); else taskQueue.push(callback);
            processTasks();
        }
        function processTasks() {
            if (tasksEnabled && taskQueue.length) setTimeout(function() {
                var task = taskQueue.shift();
                if (task) {
                    task();
                    processTasks();
                }
            }, Config.taskDelay || 50);
        }
        function Dynamic(props) {
            var _splitProps = splitProps(props, [ "component" ]), _splitProps2 = _slicedToArray(_splitProps, 2), p = _splitProps2[0], others = _splitProps2[1];
            var cached = createMemo(function() {
                return p.component;
            });
            return createMemo(function() {
                var component = cached();
                switch (_typeof(component)) {
                  case "function":
                    return untrack(function() {
                        return component(others);
                    });

                  case "string":
                    {
                        var el = createElement(component);
                        el.componentName = component;
                        spread(el, others);
                        return el;
                    }

                  default:
                    break;
                }
            });
        }
        _export({
            $: onMount,
            A: For,
            B: createContext,
            C: isElementNode,
            Ct: compareRect,
            Dt: assertTruthy,
            E: isInteger,
            F: Switch,
            G: createRoot,
            H: createMemo,
            I: batch,
            J: getListener,
            K: createSelector,
            L: children,
            M: Match,
            N: Show,
            Ot: createWebGLContext,
            P: Suspense,
            Q: onCleanup,
            R: createComponent$1,
            St: clampUnit,
            U: createRenderEffect,
            V: createEffect,
            W: createResource,
            X: mergeProps,
            Y: getOwner,
            Z: on,
            at: useContext,
            b: loadFonts,
            bt: isHTMLImageElement,
            et: resetErrorBoundaries,
            it: untrack,
            j: Index,
            o: createRenderer,
            p: scheduleTask,
            q: createSignal,
            rt: startTransition,
            t: Dynamic,
            tt: runWithOwner,
            vt: createIndexBuffer,
            w: isFocused,
            xt: calcFactoredRadiusArray,
            yt: createTextureCoords,
            z: createComputed,
            Tt: void 0,
            pt: void 0,
            x: void 0
        });
        return {
            setters: [],
            execute: function execute() {
                var _createSignal15, _createSignal16, _createSignal17, _createSignal18, _createSignal19, _createSignal20, _solidRenderer;
                ENABLE_INSPECTOR = typeof __enableInspector__ !== "undefined" ? __enableInspector__ : false;
                _export("Et", DIRTY_QUAD_BUFFER = typeof __dirtyQuadBuffer__ !== "undefined" ? __dirtyQuadBuffer__ : true);
                EMIT_BOUNDS_EVENTS = typeof __emitBoundsEvents__ !== "undefined" ? __emitBoundsEvents__ : false;
                premultiplyRGB = true;
                nextId = 1;
                EventEmitter = function() {
                    function EventEmitter() {
                        this.eventListeners = null;
                    }
                    return _createClass(EventEmitter, [ {
                        key: "on",
                        value: function on(event, listener) {
                            var map = this.eventListeners;
                            if (map === null) map = this.eventListeners = {};
                            var listeners = map[event];
                            if (listeners === void 0) {
                                listeners = [];
                                map[event] = listeners;
                            }
                            listeners.push(listener);
                        }
                    }, {
                        key: "off",
                        value: function off(event, listener) {
                            var map = this.eventListeners;
                            if (map === null) return;
                            var listeners = map[event];
                            if (listeners === void 0) return;
                            if (listener === void 0) {
                                map[event] = void 0;
                                return;
                            }
                            var index = listeners.indexOf(listener);
                            if (index >= 0) listeners.splice(index, 1);
                        }
                    }, {
                        key: "once",
                        value: function once(event, listener) {
                            var _this3 = this;
                            var _onceListener = function onceListener(target, data) {
                                _this3.off(event, _onceListener);
                                listener(target, data);
                            };
                            this.on(event, _onceListener);
                        }
                    }, {
                        key: "emit",
                        value: function emit(event, data) {
                            var map = this.eventListeners;
                            if (map === null) return;
                            var listeners = map[event];
                            if (listeners === void 0) return;
                            var len = listeners.length;
                            if (len === 1) {
                                listeners[0](this, data);
                                return;
                            }
                            var snapshot = listeners.slice();
                            for (var i = 0; i < len; i++) snapshot[i](this, data);
                        }
                    }, {
                        key: "hasListeners",
                        value: function hasListeners() {
                            var map = this.eventListeners;
                            if (map === null) return false;
                            for (var event in map) {
                                var listeners = map[event];
                                if (listeners !== void 0 && listeners.length > 0) return true;
                            }
                            return false;
                        }
                    }, {
                        key: "removeAllListeners",
                        value: function removeAllListeners() {
                            this.eventListeners = null;
                        }
                    } ]);
                }();
                (function(TextureType) {
                    TextureType[TextureType["generic"] = 0] = "generic";
                    TextureType[TextureType["color"] = 1] = "color";
                    TextureType[TextureType["image"] = 2] = "image";
                    TextureType[TextureType["noise"] = 3] = "noise";
                    TextureType[TextureType["subTexture"] = 4] = "subTexture";
                })(TextureType || _export("Tt", TextureType = {}));
                Texture = function(_EventEmitter) {
                    function Texture(txManager) {
                        var _this4;
                        _this4 = _callSuper(this, Texture);
                        _this4.txManager = void 0;
                        _this4._dimensions = null;
                        _this4._error = null;
                        _this4.state = "initial";
                        _this4.renderableOwners = new Set;
                        _this4.renderable = false;
                        _this4.type = TextureType.generic;
                        _this4.preventCleanup = false;
                        _this4.ctxTexture = void 0;
                        _this4.textureData = null;
                        _this4.cacheKey = null;
                        _this4.memUsed = 0;
                        _this4.retryCount = 0;
                        _this4.maxRetryCount = void 0;
                        _this4.createdAt = Date.now();
                        _this4.gracePeriodExpired = false;
                        _this4.freeTextureDataTask = function() {
                            _this4.textureData = null;
                        };
                        _this4.releaseTask = function() {
                            _this4.release();
                        };
                        _this4.txManager = txManager;
                        _this4.maxRetryCount = _this4.txManager.maxRetryCount;
                        return _this4;
                    }
                    _inherits(Texture, _EventEmitter);
                    return _createClass(Texture, [ {
                        key: "dimensions",
                        get: function get() {
                            return this._dimensions;
                        }
                    }, {
                        key: "error",
                        get: function get() {
                            return this._error;
                        }
                    }, {
                        key: "isWithinStartupGracePeriod",
                        value: function isWithinStartupGracePeriod() {
                            if (this.gracePeriodExpired === true) return false;
                            if (Date.now() - this.createdAt >= Texture.STARTUP_GRACE_PERIOD) {
                                this.gracePeriodExpired = true;
                                return false;
                            }
                            return true;
                        }
                    }, {
                        key: "canBeCleanedUp",
                        value: function canBeCleanedUp() {
                            if (this.preventCleanup) return false;
                            if (this.isWithinStartupGracePeriod()) return false;
                            if (this.state === "loading") return false;
                            if (this.renderable === true) return false;
                            if (this.renderableOwners.size > 0) return false;
                            return true;
                        }
                    }, {
                        key: "setRenderableOwner",
                        value: function setRenderableOwner(owner, renderable) {
                            var owners = this.renderableOwners;
                            if (renderable === true) {
                                if (owners.has(owner) === true) return;
                                owners.add(owner);
                                if (owners.size === 1) {
                                    var _this$onChangeIsRende;
                                    this.renderable = true;
                                    (_this$onChangeIsRende = this.onChangeIsRenderable) == null || _this$onChangeIsRende.call(this, true);
                                    this.load();
                                }
                            } else {
                                if (owners.delete(owner) === false) return;
                                if (owners.size === 0) {
                                    var _this$onChangeIsRende2;
                                    this.renderable = false;
                                    (_this$onChangeIsRende2 = this.onChangeIsRenderable) == null || _this$onChangeIsRende2.call(this, false);
                                }
                            }
                        }
                    }, {
                        key: "load",
                        value: function load() {
                            if (this.retryCount > this.maxRetryCount) return;
                            this.txManager.loadTexture(this);
                        }
                    }, {
                        key: "loadCtxTexture",
                        value: function loadCtxTexture() {
                            if (this.ctxTexture === void 0) this.ctxTexture = this.txManager.renderer.createCtxTexture(this);
                            return this.ctxTexture;
                        }
                    }, {
                        key: "free",
                        value: function free() {
                            var _this$ctxTexture;
                            (_this$ctxTexture = this.ctxTexture) == null || _this$ctxTexture.free();
                            this.ctxTexture = void 0;
                        }
                    }, {
                        key: "release",
                        value: function release() {
                            var _this$ctxTexture2;
                            (_this$ctxTexture2 = this.ctxTexture) == null || _this$ctxTexture2.release();
                            this.ctxTexture = void 0;
                            this.freeTextureData();
                        }
                    }, {
                        key: "destroy",
                        value: function destroy() {
                            if (this.state === "loaded") this.free();
                            this.freeTextureData();
                            this.removeAllListeners();
                        }
                    }, {
                        key: "freeTextureData",
                        value: function freeTextureData() {
                            queueMicrotask(this.freeTextureDataTask);
                        }
                    }, {
                        key: "setState",
                        value: function setState(state, errorOrDimensions) {
                            if (this.state === state) return;
                            var payload = null;
                            if (state === "loaded") {
                                if (errorOrDimensions !== void 0 && "w" in errorOrDimensions === true && "h" in errorOrDimensions === true && errorOrDimensions.w !== void 0 && errorOrDimensions.h !== void 0) this._dimensions = errorOrDimensions;
                                payload = this._dimensions;
                            } else if (state === "failed") {
                                this._error = errorOrDimensions;
                                payload = this._error;
                                this.retryCount += 1;
                                queueMicrotask(this.releaseTask);
                            } else if (state === "loading") {
                                this._error = null;
                                this._dimensions = null;
                            } else this._error = null;
                            this.state = state;
                            this.emit(state, payload);
                        }
                    }, {
                        key: "getTextureData",
                        value: function() {
                            var _getTextureData = _asyncToGenerator(_regenerator().m(function _callee() {
                                return _regenerator().w(function(_context2) {
                                    while (1) switch (_context2.n) {
                                      case 0:
                                        if (!(this.textureData === null)) {
                                            _context2.n = 2;
                                            break;
                                        }
                                        _context2.n = 1;
                                        return this.getTextureSource();

                                      case 1:
                                        this.textureData = _context2.v;

                                      case 2:
                                        return _context2.a(2, this.textureData);
                                    }
                                }, _callee, this);
                            }));
                            function getTextureData() {
                                return _getTextureData.apply(this, arguments);
                            }
                            return getTextureData;
                        }()
                    } ], [ {
                        key: "makeCacheKey",
                        value: function makeCacheKey(props) {
                            return false;
                        }
                    }, {
                        key: "resolveDefaults",
                        value: function resolveDefaults(props) {
                            return {};
                        }
                    } ]);
                }(EventEmitter);
                Texture.STARTUP_GRACE_PERIOD = 2e3;
                PROTOCOL_REGEX = /^(data|ftps?|https?):/;
                IS_FILE_PROTOCOL = typeof self !== "undefined" && self.location.protocol === "file:";
                _export("wt", getNormalizedRgbaComponents = function getNormalizedRgbaComponents(rgba) {
                    var r = rgba >>> 24;
                    var g = rgba >>> 16 & 255;
                    var b = rgba >>> 8 & 255;
                    var a = rgba & 255;
                    return [ r / 255, g / 255, b / 255, a / 255 ];
                });
                Matrix3d = function() {
                    function Matrix3d() {
                        this.ta = void 0;
                        this.tb = void 0;
                        this.tx = void 0;
                        this.tc = void 0;
                        this.td = void 0;
                        this.ty = void 0;
                        this.ta = 0;
                        this.tb = 0;
                        this.tx = 0;
                        this.tc = 0;
                        this.td = 0;
                        this.ty = 0;
                    }
                    return _createClass(Matrix3d, [ {
                        key: "translate",
                        value: function translate(x, y) {
                            this.tx = this.ta * x + this.tb * y + this.tx;
                            this.ty = this.tc * x + this.td * y + this.ty;
                            return this;
                        }
                    }, {
                        key: "setTranslate",
                        value: function setTranslate(x, y) {
                            this.tx = x;
                            this.ty = y;
                        }
                    }, {
                        key: "scale",
                        value: function scale(sx, sy) {
                            this.ta = this.ta * sx;
                            this.tb = this.tb * sy;
                            this.tc = this.tc * sx;
                            this.td = this.td * sy;
                            return this;
                        }
                    }, {
                        key: "rotate",
                        value: function rotate(angle) {
                            if (angle === 0) return this;
                            var cos = Math.cos(angle);
                            var sin = Math.sin(angle);
                            var e0 = this.ta * cos + this.tb * sin;
                            var e1 = this.tb * cos - this.ta * sin;
                            var e3 = this.tc * cos + this.td * sin;
                            var e4 = this.td * cos - this.tc * sin;
                            this.ta = e0;
                            this.tb = e1;
                            this.tc = e3;
                            this.td = e4;
                            return this;
                        }
                    }, {
                        key: "multiply",
                        value: function multiply(other) {
                            return Matrix3d.multiply(this, other, this);
                        }
                    }, {
                        key: "translateOrMultiply",
                        value: function translateOrMultiply(other) {
                            if (other.ta === 1 && other.td === 1 && other.tb === 0 && other.tc === 0) return this.translate(other.tx, other.ty);
                            return this.multiply(other);
                        }
                    } ], [ {
                        key: "temp",
                        get: function get() {
                            return tempMatrix;
                        }
                    }, {
                        key: "multiply",
                        value: function multiply(a, b, out) {
                            var e0 = a.ta * b.ta + a.tb * b.tc;
                            var e1 = a.ta * b.tb + a.tb * b.td;
                            var e2 = a.ta * b.tx + a.tb * b.ty + a.tx;
                            var e3 = a.tc * b.ta + a.td * b.tc;
                            var e4 = a.tc * b.tb + a.td * b.td;
                            var e5 = a.tc * b.tx + a.td * b.ty + a.ty;
                            if (!out) out = new Matrix3d;
                            out.ta = e0;
                            out.tb = e1;
                            out.tx = e2;
                            out.tc = e3;
                            out.td = e4;
                            out.ty = e5;
                            return out;
                        }
                    }, {
                        key: "identity",
                        value: function identity(out) {
                            if (!out) out = new Matrix3d;
                            out.ta = 1;
                            out.tb = 0;
                            out.tx = 0;
                            out.tc = 0;
                            out.td = 1;
                            out.ty = 0;
                            return out;
                        }
                    }, {
                        key: "translate",
                        value: function translate(x, y, out) {
                            if (!out) out = new Matrix3d;
                            out.ta = 1;
                            out.tb = 0;
                            out.tx = x;
                            out.tc = 0;
                            out.td = 1;
                            out.ty = y;
                            return out;
                        }
                    }, {
                        key: "scale",
                        value: function scale(sx, sy, out) {
                            if (!out) out = new Matrix3d;
                            out.ta = sx;
                            out.tb = 0;
                            out.tx = 0;
                            out.tc = 0;
                            out.td = sy;
                            out.ty = 0;
                            return out;
                        }
                    }, {
                        key: "rotate",
                        value: function rotate(angle, out) {
                            if (out === void 0) out = new Matrix3d;
                            if (angle === 0) {
                                out.ta = 1;
                                out.tb = 0;
                                out.tx = 0;
                                out.tc = 0;
                                out.td = 1;
                                out.ty = 0;
                                return out;
                            }
                            var cos = Math.cos(angle);
                            var sin = Math.sin(angle);
                            out.ta = cos;
                            out.tb = -sin;
                            out.tx = 0;
                            out.tc = sin;
                            out.td = cos;
                            out.ty = 0;
                            return out;
                        }
                    }, {
                        key: "copy",
                        value: function copy(src, dst) {
                            if (!dst) dst = new Matrix3d;
                            dst.ta = src.ta;
                            dst.tc = src.tc;
                            dst.tb = src.tb;
                            dst.td = src.td;
                            dst.tx = src.tx;
                            dst.ty = src.ty;
                            return dst;
                        }
                    } ]);
                }();
                tempMatrix = new Matrix3d;
                RenderCoords = function() {
                    function RenderCoords(x1, y1, x2, y2, x3, y3, x4, y4) {
                        this.x1 = void 0;
                        this.y1 = void 0;
                        this.x2 = void 0;
                        this.y2 = void 0;
                        this.x3 = void 0;
                        this.y3 = void 0;
                        this.x4 = void 0;
                        this.y4 = void 0;
                        this.x1 = x1;
                        this.y1 = y1;
                        this.x2 = x2;
                        this.y2 = y2;
                        this.x3 = x3;
                        this.y3 = y3;
                        this.x4 = x4;
                        this.y4 = y4;
                    }
                    return _createClass(RenderCoords, null, [ {
                        key: "translate",
                        value: function translate(x1, y1, x2, y2, x3, y3, x4, y4, out) {
                            if (out === void 0) return new RenderCoords(x1, y1, x2, y2, x3, y3, x4, y4);
                            out.x1 = x1;
                            out.y1 = y1;
                            out.x2 = x2;
                            out.y2 = y2;
                            out.x3 = x3;
                            out.y3 = y3;
                            out.x4 = x4;
                            out.y4 = y4;
                            return out;
                        }
                    } ]);
                }();
                degree = Math.PI / 180;
                getTimingBezier = function getTimingBezier(a, b, c, d) {
                    var xc = 3 * a;
                    var xb = 3 * (c - a) - xc;
                    var xa = 1 - xc - xb;
                    var yc = 3 * b;
                    var yb = 3 * (d - b) - yc;
                    var ya = 1 - yc - yb;
                    return function(time) {
                        if (time >= 1) return 1;
                        if (time <= 0) return 0;
                        var t = .5, cbx, cbxd, dx;
                        for (var it = 0; it < 20; it++) {
                            cbx = t * (t * (t * xa + xb) + xc);
                            dx = time - cbx;
                            if (dx > -1e-8 && dx < 1e-8) return t * (t * (t * ya + yb) + yc);
                            cbxd = t * (t * (3 * xa) + 2 * xb) + xc;
                            if (cbxd > 1e-10 && cbxd < 1e-10) break;
                            t += dx / cbxd;
                        }
                        var minT = 0;
                        var maxT = 1;
                        for (var _it = 0; _it < 20; _it++) {
                            t = .5 * (minT + maxT);
                            cbx = t * (t * (t * xa + xb) + xc);
                            dx = time - cbx;
                            if (dx > -1e-8 && dx < 1e-8) return t * (t * (t * ya + yb) + yc);
                            if (dx < 0) maxT = t; else minT = t;
                        }
                        return time;
                    };
                };
                timingMapping = {};
                timingLookup = {
                    ease: [ .25, .1, .25, 1 ],
                    "ease-in": [ .42, 0, 1, 1 ],
                    "ease-out": [ 0, 0, .58, 1 ],
                    "ease-in-out": [ .42, 0, .58, 1 ],
                    "ease-in-sine": [ .12, 0, .39, 0 ],
                    "ease-out-sine": [ .12, 0, .39, 0 ],
                    "ease-in-out-sine": [ .37, 0, .63, 1 ],
                    "ease-in-cubic": [ .32, 0, .67, 0 ],
                    "ease-out-cubic": [ .33, 1, .68, 1 ],
                    "ease-in-out-cubic": [ .65, 0, .35, 1 ],
                    "ease-in-circ": [ .55, 0, 1, .45 ],
                    "ease-out-circ": [ 0, .55, .45, 1 ],
                    "ease-in-out-circ": [ .85, 0, .15, 1 ],
                    "ease-in-back": [ .36, 0, .66, -.56 ],
                    "ease-out-back": [ .34, 1.56, .64, 1 ],
                    "ease-in-out-back": [ .68, -.6, .32, 1.6 ]
                };
                defaultTiming = function defaultTiming(t) {
                    return t;
                };
                parseCubicBezier = function parseCubicBezier(str) {
                    var match = str.match(/-?\d*\.?\d+/g);
                    if (match) {
                        var _match = _slicedToArray(match, 4), num1 = _match[0], num2 = _match[1], num3 = _match[2], num4 = _match[3];
                        var timing = getTimingBezier(parseFloat(num1 || "0.42"), parseFloat(num2 || "0"), parseFloat(num3 || "1"), parseFloat(num4 || "1"));
                        timingMapping[str] = timing;
                        return timing;
                    }
                    console.warn("Unknown cubic-bezier timing: " + str);
                    return defaultTiming;
                };
                getTimingFunction = function getTimingFunction(str) {
                    if (str === "linear") return defaultTiming;
                    if (timingMapping[str] !== void 0) return timingMapping[str] || defaultTiming;
                    if (str === "step-start") return function() {
                        return 1;
                    };
                    if (str === "step-end") return function(time) {
                        return time === 1 ? 1 : 0;
                    };
                    var lookup = timingLookup[str];
                    if (lookup !== void 0) {
                        var _lookup = _slicedToArray(lookup, 4), a = _lookup[0], b = _lookup[1], c = _lookup[2], d = _lookup[3];
                        var timing = getTimingBezier(a, b, c, d);
                        timingMapping[str] = timing;
                        return timing;
                    }
                    if (str.startsWith("cubic-bezier")) return parseCubicBezier(str);
                    console.warn("Unknown timing function: " + str);
                    return defaultTiming;
                };
                sortByZIndexStable = function sortByZIndexStable(nodes) {
                    var len = nodes.length;
                    for (var i = 1; i < len; i++) {
                        var node = nodes[i];
                        var z = node.props.zIndex;
                        var j = i - 1;
                        while (j >= 0 && nodes[j].props.zIndex > z) {
                            nodes[j + 1] = nodes[j];
                            j--;
                        }
                        nodes[j + 1] = node;
                    }
                };
                findChildIndexById = function findChildIndexById(node, children) {
                    for (var i = 0; i < children.length; i++) if (children[i]._id === node._id) return i;
                    return -1;
                };
                _removeChild = function removeChild(node, children) {
                    var index = findChildIndexById(node, children);
                    if (index !== -1) children.splice(index, 1);
                };
                VERTICES_PER_QUAD = 4;
                BYTES_PER_VERTEX = 16;
                BYTES_PER_QUAD = 16 * 4;
                _export("_t", WORDS_PER_QUAD = 64 / Uint32Array.BYTES_PER_ELEMENT);
                UV_QUANT_MAX = 65535;
                _export("gt", UNIT_TEXTURE_COORDS = createTextureCoords(0, 0, 1, 1));
                _export("mt", MAX_QUADS = 16384);
                _export("ht", MAX_QUAD_BUFFER_SIZE = MAX_QUADS * 64);
                (function(CoreNodeRenderState) {
                    CoreNodeRenderState[CoreNodeRenderState["Init"] = 0] = "Init";
                    CoreNodeRenderState[CoreNodeRenderState["OutOfBounds"] = 2] = "OutOfBounds";
                    CoreNodeRenderState[CoreNodeRenderState["InBounds"] = 4] = "InBounds";
                    CoreNodeRenderState[CoreNodeRenderState["InViewport"] = 8] = "InViewport";
                })(CoreNodeRenderState || (CoreNodeRenderState = {}));
                NO_CLIPPING_RECT = {
                    x: 0,
                    y: 0,
                    w: 0,
                    h: 0,
                    valid: false
                };
                (function(UpdateType) {
                    UpdateType[UpdateType["Children"] = 1] = "Children";
                    UpdateType[UpdateType["Local"] = 2] = "Local";
                    UpdateType[UpdateType["Global"] = 4] = "Global";
                    UpdateType[UpdateType["Clipping"] = 8] = "Clipping";
                    UpdateType[UpdateType["SortZIndexChildren"] = 16] = "SortZIndexChildren";
                    UpdateType[UpdateType["PremultipliedColors"] = 32] = "PremultipliedColors";
                    UpdateType[UpdateType["WorldAlpha"] = 64] = "WorldAlpha";
                    UpdateType[UpdateType["IsRenderable"] = 128] = "IsRenderable";
                    UpdateType[UpdateType["RecalcUniforms"] = 256] = "RecalcUniforms";
                    UpdateType[UpdateType["All"] = 511] = "All";
                })(UpdateType || _export("pt", UpdateType = {}));
                CoreNode = function(_EventEmitter2) {
                    function CoreNode(stage, props) {
                        var _this5;
                        _this5 = _callSuper(this, CoreNode);
                        _this5.stage = void 0;
                        _this5.children = [];
                        _this5._id = getNewId();
                        _this5.props = void 0;
                        _this5._animations = null;
                        _this5.renderOpBufferIdx = 0;
                        _this5.numQuads = 0;
                        _this5.renderOpTexture = null;
                        _this5.quadBufferIndex = -1;
                        _this5.isQuadDirty = true;
                        _this5.hasShaderUpdater = false;
                        _this5.hasShaderTimeFn = false;
                        _this5.hasColorProps = false;
                        _this5.textureLoaded = false;
                        _this5.textureOwnership = false;
                        _this5.placeholderActive = false;
                        _this5.updateType = 0;
                        _this5.childUpdateType = 0;
                        _this5.globalTransform = void 0;
                        _this5.localTransform = void 0;
                        _this5.renderCoords = void 0;
                        _this5.renderBound = void 0;
                        _this5.clippingRect = NO_CLIPPING_RECT;
                        _this5.textureCoords = void 0;
                        _this5.updateShaderUniforms = false;
                        _this5.isRenderable = false;
                        _this5.renderState = CoreNodeRenderState.Init;
                        _this5.isSimple = true;
                        _this5._localIsTranslate = true;
                        _this5._hasContainResize = false;
                        _this5._hasMount = false;
                        _this5._globalIsTranslate = true;
                        _this5.worldAlpha = 1;
                        _this5.premultipliedColorTl = 0;
                        _this5.premultipliedColorTr = 0;
                        _this5.premultipliedColorBl = 0;
                        _this5.premultipliedColorBr = 0;
                        _this5.calcZIndex = 0;
                        _this5.destroyed = false;
                        _this5.loadTextureTask = function() {
                            var _this$props$textureOp, _this$props$textureOp2;
                            var texture = _this5.props.texture;
                            if (texture === null) return;
                            if (_this5.textureOptions.preload === true) _this5.stage.txManager.loadTexture(texture);
                            texture.preventCleanup = (_this$props$textureOp = (_this$props$textureOp2 = _this5.props.textureOptions) == null ? void 0 : _this$props$textureOp2.preventCleanup) !== null && _this$props$textureOp !== void 0 ? _this$props$textureOp : false;
                            texture.on("loaded", _this5.onTextureLoaded);
                            texture.on("failed", _this5.onTextureFailed);
                            texture.on("freed", _this5.onTextureFreed);
                            if (texture.state === "loaded") _this5.onTextureLoaded(texture, texture.dimensions); else if (texture.state === "failed") _this5.onTextureFailed(texture, texture.error); else if (texture.state === "freed") _this5.onTextureFreed(texture);
                        };
                        _this5.onTextureLoaded = function(_, dimensions) {
                            var _this$props$textureOp3;
                            _this5.applyAutosizeDimensions(dimensions.w, dimensions.h);
                            _this5.textureLoaded = true;
                            _this5.updatePlaceholderActive();
                            _this5.setUpdateType(UpdateType.IsRenderable);
                            _this5.stage.requestRender();
                            if (dimensions.w > 1 && dimensions.h > 1) _this5.emit("loaded", {
                                type: "texture",
                                dimensions: dimensions
                            });
                            if (_this5.stage.calculateTextureCoord === true && _this5.props.textureOptions !== null) _this5.textureCoords = _this5.stage.renderer.getTextureCoords(_this5);
                            if (((_this$props$textureOp3 = _this5.props.textureOptions) == null || (_this$props$textureOp3 = _this$props$textureOp3.resizeMode) == null ? void 0 : _this$props$textureOp3.type) === "contain") _this5.setUpdateType(UpdateType.Local);
                        };
                        _this5.onTextureFailed = function(_, error) {
                            _this5.textureLoaded = false;
                            _this5.isRenderable = false;
                            _this5.updatePlaceholderActive();
                            _this5.updateTextureOwnership(false);
                            _this5.setUpdateType(UpdateType.IsRenderable);
                            if (_this5.texture !== null && _this5.texture.retryCount > _this5.texture.maxRetryCount) _this5.emit("failed", {
                                type: "texture",
                                error: error
                            });
                        };
                        _this5.onTextureFreed = function() {
                            _this5.textureLoaded = false;
                            _this5.isRenderable = false;
                            _this5.updatePlaceholderActive();
                            _this5.updateTextureOwnership(false);
                            _this5.setUpdateType(UpdateType.IsRenderable);
                            _this5.emit("freed", {
                                type: "texture"
                            });
                        };
                        _this5.stage = stage;
                        _this5.localTransform = Matrix3d.identity();
                        _this5.globalTransform = Matrix3d.identity();
                        var initialUpdateType = UpdateType.Local | UpdateType.Clipping | UpdateType.WorldAlpha;
                        var texture = props.texture, shader = props.shader, src = props.src, parent = props.parent;
                        var p = _this5.props = props;
                        p.texture = null;
                        p.shader = null;
                        p.src = null;
                        p.scale = null;
                        _this5.hasColorProps = _this5.computeHasColorProps();
                        if (p.zIndex !== 0) _this5.zIndex = p.zIndex;
                        if (parent !== null) parent.addChild(_this5);
                        if (texture !== null) _this5.texture = texture;
                        if (shader === null || shader === _this5.stage.defShaderNode) p.shader = _this5.stage.defShaderNode; else _this5.shader = shader;
                        if (src !== null) _this5.src = src;
                        _this5.setUpdateType(initialUpdateType);
                        var dt = _this5.stage.defaultTexture;
                        if (dt !== null && dt.state !== "loaded") dt.once("loaded", function() {
                            return _this5.setUpdateType(UpdateType.IsRenderable);
                        });
                        _this5.updateIsSimple();
                        return _this5;
                    }
                    _inherits(CoreNode, _EventEmitter2);
                    return _createClass(CoreNode, [ {
                        key: "updatePlaceholderActive",
                        value: function updatePlaceholderActive() {
                            var active = this.props.placeholderColor !== 0 && this.props.texture !== null && this.textureLoaded === false;
                            if (active !== this.placeholderActive) {
                                this.placeholderActive = active;
                                this.setUpdateType(UpdateType.PremultipliedColors | UpdateType.IsRenderable);
                            }
                        }
                    }, {
                        key: "loadTexture",
                        value: function loadTexture() {
                            if (this.props.texture === null) return;
                            queueMicrotask(this.loadTextureTask);
                        }
                    }, {
                        key: "unloadTexture",
                        value: function unloadTexture() {
                            if (this.texture === null) return;
                            var texture = this.texture;
                            texture.off("loaded", this.onTextureLoaded);
                            texture.off("failed", this.onTextureFailed);
                            texture.off("freed", this.onTextureFreed);
                            texture.setRenderableOwner(this._id, false);
                            this.textureOwnership = false;
                        }
                    }, {
                        key: "applyAutosizeDimensions",
                        value: function applyAutosizeDimensions(w, h) {
                            var props = this.props;
                            if (props.autosize === false) return;
                            if (props.w === w && props.h === h) return;
                            props.w = w;
                            props.h = h;
                            if (props.texture !== null && this.stage.calculateTextureCoord === true && props.textureOptions !== null) this.textureCoords = this.stage.renderer.getTextureCoords(this);
                            this.setUpdateType(UpdateType.Local | UpdateType.RecalcUniforms);
                        }
                    }, {
                        key: "setUpdateType",
                        value: function setUpdateType(type) {
                            this.updateType |= type;
                            var parent = this.props.parent;
                            if (!parent || parent.updateType & UpdateType.Children) return;
                            parent.setUpdateType(UpdateType.Children);
                        }
                    }, {
                        key: "updateLocalTransform",
                        value: function updateLocalTransform() {
                            var p = this.props;
                            var x = p.x, y = p.y;
                            if (this.isSimple) {
                                var tx = x;
                                var ty = y;
                                if (this._hasMount === true) {
                                    tx = x - p.mountX * p.w;
                                    ty = y - p.mountY * p.h;
                                }
                                if (this._localIsTranslate === true) {
                                    this.localTransform.setTranslate(tx, ty);
                                    return;
                                }
                                this.localTransform = Matrix3d.translate(tx, ty, this.localTransform);
                                this._localIsTranslate = true;
                                return;
                            }
                            var w = p.w, h = p.h;
                            var mountTranslateX = p.mountX * w;
                            var mountTranslateY = p.mountY * h;
                            var rotation = p.rotation;
                            var scaleX = p.scaleX;
                            var scaleY = p.scaleY;
                            if (rotation !== 0) {
                                var scaleRotate = Matrix3d.rotate(rotation, Matrix3d.temp).scale(scaleX, scaleY);
                                var pivotTranslateX = p.pivotX * w;
                                var pivotTranslateY = p.pivotY * h;
                                this.localTransform = Matrix3d.translate(x - mountTranslateX + pivotTranslateX, y - mountTranslateY + pivotTranslateY, this.localTransform).multiply(scaleRotate).translate(-pivotTranslateX, -pivotTranslateY);
                            } else if (scaleX !== 1 || scaleY !== 1) {
                                var _pivotTranslateX = p.pivotX * w;
                                var _pivotTranslateY = p.pivotY * h;
                                this.localTransform = Matrix3d.translate(x - mountTranslateX + _pivotTranslateX, y - mountTranslateY + _pivotTranslateY, this.localTransform).scale(scaleX, scaleY).translate(-_pivotTranslateX, -_pivotTranslateY);
                            } else this.localTransform = Matrix3d.translate(x - mountTranslateX, y - mountTranslateY, this.localTransform);
                            var texture = p.texture;
                            if (this._hasContainResize === true && texture !== null && texture.dimensions !== null) {
                                var resizeModeScaleX = 1;
                                var resizeModeScaleY = 1;
                                var extraX = 0;
                                var extraY = 0;
                                var _texture$dimensions = texture.dimensions, tw = _texture$dimensions.w, th = _texture$dimensions.h;
                                if (tw / th > w / h) {
                                    var scaledTxHeight = th * (w / tw);
                                    extraY = (h - scaledTxHeight) / 2;
                                    resizeModeScaleY = scaledTxHeight / h;
                                } else {
                                    var scaledTxWidth = tw * (h / th);
                                    extraX = (w - scaledTxWidth) / 2;
                                    resizeModeScaleX = scaledTxWidth / w;
                                }
                                this.localTransform.translate(extraX, extraY).scale(resizeModeScaleX, resizeModeScaleY);
                            }
                            this._localIsTranslate = false;
                        }
                    }, {
                        key: "updateIsSimple",
                        value: function updateIsSimple() {
                            var _p$textureOptions;
                            var p = this.props;
                            this._hasContainResize = p.texture !== null && ((_p$textureOptions = p.textureOptions) == null || (_p$textureOptions = _p$textureOptions.resizeMode) == null ? void 0 : _p$textureOptions.type) === "contain";
                            this._hasMount = p.mountX !== 0 || p.mountY !== 0;
                            this.isSimple = p.rotation === 0 && p.scaleX === 1 && p.scaleY === 1 && this._hasContainResize === false;
                        }
                    }, {
                        key: "update",
                        value: function update(delta, parentClippingRect) {
                            var props = this.props;
                            var parent = props.parent;
                            var newRenderState = null;
                            var checkRenderState = false;
                            var updateType = this.updateType;
                            var childUpdateType = this.childUpdateType;
                            this.updateType = 0;
                            this.childUpdateType = 0;
                            if (updateType & UpdateType.Local) {
                                this.updateLocalTransform();
                                updateType |= UpdateType.Global;
                            }
                            if (updateType & UpdateType.Global) {
                                var lt = this.localTransform;
                                var gt = this.globalTransform;
                                var parentGT = parent.globalTransform;
                                if (this.isSimple === true && parent._globalIsTranslate === true) {
                                    if (this._globalIsTranslate === false) {
                                        gt.ta = 1;
                                        gt.tb = 0;
                                        gt.tc = 0;
                                        gt.td = 1;
                                        this._globalIsTranslate = true;
                                    }
                                    gt.setTranslate(parentGT.tx + lt.tx, parentGT.ty + lt.ty);
                                } else {
                                    Matrix3d.copy(parentGT, gt);
                                    this._globalIsTranslate = false;
                                    if (this.isSimple === true) gt.translate(lt.tx, lt.ty); else gt.translateOrMultiply(lt);
                                }
                                this.updateGlobalGeometry();
                                checkRenderState = true;
                                updateType |= UpdateType.Children;
                                childUpdateType |= UpdateType.Global;
                                if (props.clipping !== false) updateType |= UpdateType.Clipping;
                            }
                            if (updateType & UpdateType.Clipping) {
                                this.calculateClippingRect(parentClippingRect);
                                updateType |= UpdateType.Children;
                                childUpdateType |= UpdateType.Clipping;
                                checkRenderState = true;
                            }
                            if (checkRenderState === true) {
                                newRenderState = this.checkRenderBounds();
                                if (newRenderState !== this.renderState) {
                                    updateType |= UpdateType.IsRenderable;
                                    if (newRenderState !== CoreNodeRenderState.OutOfBounds) this.updateRenderState(newRenderState);
                                } else newRenderState = null;
                            }
                            if (updateType & UpdateType.RecalcUniforms) updateType |= UpdateType.IsRenderable;
                            if (updateType & UpdateType.WorldAlpha) {
                                this.worldAlpha = props.ignoreParentAlpha === true ? props.alpha : parent.worldAlpha * props.alpha;
                                updateType |= UpdateType.PremultipliedColors | UpdateType.Children | UpdateType.IsRenderable;
                                childUpdateType |= UpdateType.WorldAlpha;
                            }
                            if (updateType & UpdateType.IsRenderable) this.updateIsRenderable();
                            if (updateType & UpdateType.PremultipliedColors) {
                                var alpha = this.worldAlpha;
                                if (this.placeholderActive === true) {
                                    var merged = premultiplyColorABGR(props.placeholderColor, alpha);
                                    this.premultipliedColorTl = this.premultipliedColorTr = this.premultipliedColorBl = this.premultipliedColorBr = merged;
                                } else {
                                    var tl = props.colorTl;
                                    var tr = props.colorTr;
                                    var bl = props.colorBl;
                                    var br = props.colorBr;
                                    var same = tl === tr && tl === bl && tl === br;
                                    var _merged = premultiplyColorABGR(tl, alpha);
                                    this.premultipliedColorTl = _merged;
                                    if (same === true) this.premultipliedColorTr = this.premultipliedColorBl = this.premultipliedColorBr = _merged; else {
                                        this.premultipliedColorTr = premultiplyColorABGR(tr, alpha);
                                        this.premultipliedColorBl = premultiplyColorABGR(bl, alpha);
                                        this.premultipliedColorBr = premultiplyColorABGR(br, alpha);
                                    }
                                }
                            }
                            if (this.renderState === CoreNodeRenderState.OutOfBounds) {
                                this.updateType = updateType & (UpdateType.RecalcUniforms | UpdateType.Children | UpdateType.SortZIndexChildren);
                                this.childUpdateType = childUpdateType;
                                return;
                            }
                            if (updateType & UpdateType.RecalcUniforms && this.hasShaderUpdater === true) this.updateShaderUniforms = true;
                            if (this.isRenderable === true && this.updateShaderUniforms === true) {
                                this.updateShaderUniforms = false;
                                this.shader.update();
                            }
                            if (updateType & UpdateType.Children && this.children.length > 0) {
                                var childClippingRect = this.clippingRect;
                                var _children = this.children;
                                var length = _children.length;
                                if (childUpdateType !== 0) for (var i = 0; i < length; i++) {
                                    var child = _children[i];
                                    child.updateType |= childUpdateType;
                                    if (child.updateType === 0) continue;
                                    child.update(delta, childClippingRect);
                                } else for (var _i9 = 0; _i9 < length; _i9++) {
                                    var _child = _children[_i9];
                                    if (_child.updateType === 0) continue;
                                    _child.update(delta, childClippingRect);
                                }
                            }
                            if (updateType & UpdateType.SortZIndexChildren) this.sortChildren();
                            if (newRenderState === CoreNodeRenderState.OutOfBounds) {
                                this.updateRenderState(newRenderState);
                                this.updateIsRenderable();
                            }
                            if (updateType & (UpdateType.Global | UpdateType.PremultipliedColors)) this.isQuadDirty = true;
                        }
                    }, {
                        key: "checkRenderBounds",
                        value: function checkRenderBounds() {
                            var stage = this.stage;
                            var x1 = 0;
                            var y1 = 0;
                            var x2 = stage.viewportW;
                            var y2 = stage.viewportH;
                            var cr = this.clippingRect;
                            if (cr.valid === true) {
                                if (cr.x > x1) x1 = cr.x;
                                if (cr.y > y1) y1 = cr.y;
                                var crX2 = cr.x + cr.w;
                                if (crX2 < x2) x2 = crX2;
                                var crY2 = cr.y + cr.h;
                                if (crY2 < y2) y2 = crY2;
                            }
                            var rb = this.renderBound;
                            if (rb.x1 <= x2 && rb.x2 >= x1 && rb.y1 <= y2 && rb.y2 >= y1) return CoreNodeRenderState.InViewport;
                            var m = stage.boundsMargin;
                            if (rb.x1 <= x2 + m && rb.x2 >= x1 - m && rb.y1 <= y2 + m && rb.y2 >= y1 - m) return CoreNodeRenderState.InBounds;
                            if (this.parent !== null && (this.props.w === 0 || this.props.h === 0)) return this.parent.renderState;
                            return CoreNodeRenderState.OutOfBounds;
                        }
                    }, {
                        key: "updateRenderState",
                        value: function updateRenderState(renderState) {
                            if (renderState === this.renderState) return;
                            var previous = this.renderState;
                            this.renderState = renderState;
                            if (renderState === CoreNodeRenderState.OutOfBounds || previous === CoreNodeRenderState.OutOfBounds) this.stage.requestRenderListUpdate();
                            if (EMIT_BOUNDS_EVENTS) {
                                if (renderState === CoreNodeRenderState.InViewport) this.emit("inViewport", {
                                    previous: previous,
                                    current: renderState
                                }); else if (previous === CoreNodeRenderState.InViewport) this.emit("outOfViewport", {
                                    previous: previous,
                                    current: renderState
                                });
                            }
                        }
                    }, {
                        key: "checkBasicRenderability",
                        value: function checkBasicRenderability() {
                            if (this.worldAlpha === 0 || this.isOutOfBounds() === true) return false; else return true;
                        }
                    }, {
                        key: "updateIsRenderable",
                        value: function updateIsRenderable() {
                            var newIsRenderable = false;
                            var needsTextureOwnership = false;
                            if (this.checkBasicRenderability() === false) {
                                this.updateTextureOwnership(false);
                                this.setRenderable(false);
                                return;
                            }
                            var texture = this.props.texture;
                            if (texture !== null) {
                                if (texture.retryCount > texture.maxRetryCount) {
                                    this.updateTextureOwnership(false);
                                    this.setRenderable(this.placeholderActive === true && this.renderState === CoreNodeRenderState.InViewport);
                                    return;
                                }
                                needsTextureOwnership = true;
                                newIsRenderable = this.textureLoaded === true || this.placeholderActive === true;
                            } else if ((this.props.shader !== this.stage.defShaderNode || this.hasColorProps === true) && this.hasDimensions() === true) newIsRenderable = true;
                            if (newIsRenderable === true && this.renderState !== CoreNodeRenderState.InViewport) newIsRenderable = false;
                            this.updateTextureOwnership(needsTextureOwnership);
                            this.setRenderable(newIsRenderable);
                        }
                    }, {
                        key: "setRenderable",
                        value: function setRenderable(isRenderable) {
                            var previousIsRenderable = this.isRenderable;
                            this.isRenderable = isRenderable;
                            if (previousIsRenderable !== isRenderable) {
                                this.stage.requestRenderListUpdate();
                                if (EMIT_BOUNDS_EVENTS) this.emit("renderable", {
                                    type: "renderable",
                                    isRenderable: isRenderable
                                });
                            }
                        }
                    }, {
                        key: "updateTextureOwnership",
                        value: function updateTextureOwnership(isRenderable) {
                            var _this$texture;
                            if (this.textureOwnership === isRenderable) return;
                            this.textureOwnership = isRenderable;
                            (_this$texture = this.texture) == null || _this$texture.setRenderableOwner(this._id, isRenderable);
                        }
                    }, {
                        key: "isOutOfBounds",
                        value: function isOutOfBounds() {
                            return this.renderState <= CoreNodeRenderState.OutOfBounds;
                        }
                    }, {
                        key: "hasDimensions",
                        value: function hasDimensions() {
                            return this.props.w !== 0 && this.props.h !== 0;
                        }
                    }, {
                        key: "updateGlobalGeometry",
                        value: function updateGlobalGeometry() {
                            var _this$props = this.props, w = _this$props.w, h = _this$props.h;
                            var g = this.globalTransform;
                            var tx = g.tx;
                            var ty = g.ty;
                            var tb = g.tb;
                            var tc = g.tc;
                            if (tb === 0 && tc === 0) {
                                var maxX = tx + w * g.ta;
                                var maxY = ty + h * g.td;
                                this.renderCoords = RenderCoords.translate(tx, ty, maxX, ty, maxX, maxY, tx, maxY, this.renderCoords);
                                this.renderBound = createBound(tx, ty, maxX, maxY, this.renderBound);
                                return;
                            }
                            var x2 = tx + w * g.ta;
                            var y2 = ty + w * tc;
                            var x3 = x2 + h * tb;
                            var y3 = y2 + h * g.td;
                            var x4 = tx + h * tb;
                            var y4 = ty + h * g.td;
                            this.renderCoords = RenderCoords.translate(tx, ty, x2, y2, x3, y3, x4, y4, this.renderCoords);
                            this.renderBound = createBound(Math.min(tx, x2, x3, x4), Math.min(ty, y2, y3, y4), Math.max(tx, x2, x3, x4), Math.max(ty, y2, y3, y4), this.renderBound);
                        }
                    }, {
                        key: "calculateClippingRect",
                        value: function calculateClippingRect(parentClippingRect) {
                            var props = this.props, gt = this.globalTransform;
                            var clipping = props.clipping;
                            var isRotated = gt.tb !== 0 || gt.tc !== 0;
                            var nodeClips = clipping !== false && isRotated === false;
                            if (nodeClips === false && parentClippingRect.valid === false) {
                                this.clippingRect = NO_CLIPPING_RECT;
                                return;
                            }
                            var clippingRect = this.clippingRect;
                            if (clippingRect === NO_CLIPPING_RECT) clippingRect = this.clippingRect = {
                                x: 0,
                                y: 0,
                                w: 0,
                                h: 0,
                                valid: false
                            };
                            if (nodeClips === true) {
                                var mT = 0;
                                var mR = 0;
                                var mB = 0;
                                var mL = 0;
                                if (Array.isArray(clipping) === true) {
                                    mT = clipping[0];
                                    mR = clipping[1];
                                    mB = clipping[2];
                                    mL = clipping[3];
                                }
                                clippingRect.x = gt.tx - mL;
                                clippingRect.y = gt.ty - mT;
                                clippingRect.w = this.props.w * gt.ta + mL + mR;
                                clippingRect.h = this.props.h * gt.td + mT + mB;
                                clippingRect.valid = true;
                            } else clippingRect.valid = false;
                            if (parentClippingRect.valid === true && clippingRect.valid === true) intersectRect(parentClippingRect, clippingRect, clippingRect); else if (parentClippingRect.valid === true) {
                                copyRect(parentClippingRect, clippingRect);
                                clippingRect.valid = true;
                            }
                        }
                    }, {
                        key: "destroy",
                        value: function destroy() {
                            var isChild = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                            if (this.destroyed === true || this.preventDestroy === true) {
                                if (isChild && this.preventDestroy === true) this.props.parent = null;
                                return;
                            }
                            this.destroyed = true;
                            if (isChild === false) {
                                var parent = this.parent;
                                if (parent !== null) parent.removeChild(this);
                                this.props.parent = null;
                                this.stage.requestRender();
                            }
                            this.removeAllListeners();
                            this.unloadTexture();
                            this.isRenderable = false;
                            if (this.hasShaderTimeFn === true) this.stage.untrackTimedNode(this);
                            var shader = this.props.shader;
                            if (shader !== null && shader !== this.stage.defShaderNode) shader.detachNode();
                            for (var i = 0, n = this.children.length; i < n; i++) this.children[i].destroy(true);
                            this.children.length = 0;
                            this.props.texture = null;
                        }
                    }, {
                        key: "renderQuads",
                        value: function renderQuads(renderer) {
                            var texture = this.renderTexture;
                            if (texture.state !== "loaded") return;
                            renderer.addQuad(this, texture);
                        }
                    }, {
                        key: "renderTexture",
                        get: function get() {
                            if (this.placeholderActive === true) return this.stage.defaultTexture;
                            return this.props.texture || this.stage.defaultTexture;
                        }
                    }, {
                        key: "renderTextureCoords",
                        get: function get() {
                            return this.textureCoords || this.stage.renderer.defaultTextureCoords;
                        }
                    }, {
                        key: "width",
                        get: function get() {
                            return this.props.w;
                        }
                    }, {
                        key: "height",
                        get: function get() {
                            return this.props.h;
                        }
                    }, {
                        key: "time",
                        get: function get() {
                            if (this.hasShaderTimeFn === true) return this.getTimerValue();
                            return 0;
                        }
                    }, {
                        key: "getTimerValue",
                        value: function getTimerValue() {
                            if (typeof this.shader.time === "function") return this.shader.time(this.stage);
                            return this.stage.elapsedTime;
                        }
                    }, {
                        key: "sortChildren",
                        value: function sortChildren() {
                            sortByZIndexStable(this.children);
                            this.stage.requestRenderListUpdate();
                        }
                    }, {
                        key: "removeChild",
                        value: function removeChild(node) {
                            _removeChild(node, this.children);
                            this.stage.requestRenderListUpdate();
                        }
                    }, {
                        key: "addChild",
                        value: function addChild(node) {
                            var children = this.children;
                            children.push(node);
                            var lastIndex = children.length - 1;
                            var shouldSort = node.zIndex !== 0;
                            if (shouldSort === false && lastIndex > 0) {
                                var first = children[0];
                                var last = children[lastIndex - 1];
                                shouldSort = first.zIndex !== 0 || last.zIndex !== 0;
                            }
                            if (shouldSort) this.setUpdateType(UpdateType.SortZIndexChildren);
                            this.setUpdateType(UpdateType.Children);
                            this.stage.requestRenderListUpdate();
                        }
                    }, {
                        key: "id",
                        get: function get() {
                            return this._id;
                        }
                    }, {
                        key: "data",
                        get: function get() {
                            return this.props.data;
                        },
                        set: function set(d) {
                            this.props.data = d;
                        }
                    }, {
                        key: "x",
                        get: function get() {
                            return this.props.x;
                        },
                        set: function set(value) {
                            if (this.props.x !== value) {
                                this.props.x = value;
                                this.setUpdateType(UpdateType.Local);
                            }
                        }
                    }, {
                        key: "absX",
                        get: function get() {
                            var _this$props$parent, _this$props$parent2;
                            return this.props.x + -this.props.w * this.props.mountX + (((_this$props$parent = this.props.parent) == null ? void 0 : _this$props$parent.absX) || ((_this$props$parent2 = this.props.parent) == null || (_this$props$parent2 = _this$props$parent2.globalTransform) == null ? void 0 : _this$props$parent2.tx) || 0);
                        }
                    }, {
                        key: "absY",
                        get: function get() {
                            var _this$props$parent$ab, _this$props$parent3;
                            return this.props.y + -this.props.h * this.props.mountY + ((_this$props$parent$ab = (_this$props$parent3 = this.props.parent) == null ? void 0 : _this$props$parent3.absY) !== null && _this$props$parent$ab !== void 0 ? _this$props$parent$ab : 0);
                        }
                    }, {
                        key: "y",
                        get: function get() {
                            return this.props.y;
                        },
                        set: function set(value) {
                            if (this.props.y !== value) {
                                this.props.y = value;
                                this.setUpdateType(UpdateType.Local);
                            }
                        }
                    }, {
                        key: "w",
                        get: function get() {
                            return this.props.w;
                        },
                        set: function set(value) {
                            var props = this.props;
                            if (props.w !== value) {
                                props.w = value;
                                var updateType = UpdateType.Local | UpdateType.RecalcUniforms;
                                if (props.texture !== null && this.stage.calculateTextureCoord === true && props.textureOptions !== null) this.textureCoords = this.stage.renderer.getTextureCoords(this);
                                this.setUpdateType(updateType);
                            }
                        }
                    }, {
                        key: "h",
                        get: function get() {
                            return this.props.h;
                        },
                        set: function set(value) {
                            var props = this.props;
                            if (props.h !== value) {
                                props.h = value;
                                var updateType = UpdateType.Local | UpdateType.RecalcUniforms;
                                if (props.texture !== null && this.stage.calculateTextureCoord === true && props.textureOptions !== null) this.textureCoords = this.stage.renderer.getTextureCoords(this);
                                this.setUpdateType(updateType);
                            }
                        }
                    }, {
                        key: "scale",
                        get: function get() {
                            return this.scaleX;
                        },
                        set: function set(value) {
                            this.scaleX = value;
                            this.scaleY = value;
                            this.updateIsSimple();
                        }
                    }, {
                        key: "scaleX",
                        get: function get() {
                            return this.props.scaleX;
                        },
                        set: function set(value) {
                            if (this.props.scaleX !== value) {
                                this.props.scaleX = value;
                                this.setUpdateType(UpdateType.Local);
                                this.updateIsSimple();
                            }
                        }
                    }, {
                        key: "scaleY",
                        get: function get() {
                            return this.props.scaleY;
                        },
                        set: function set(value) {
                            if (this.props.scaleY !== value) {
                                this.props.scaleY = value;
                                this.setUpdateType(UpdateType.Local);
                                this.updateIsSimple();
                            }
                        }
                    }, {
                        key: "mount",
                        get: function get() {
                            return this.props.mount;
                        },
                        set: function set(value) {
                            if (this.props.mountX !== value || this.props.mountY !== value) {
                                this.props.mountX = value;
                                this.props.mountY = value;
                                this.props.mount = value;
                                this.setUpdateType(UpdateType.Local);
                                this.updateIsSimple();
                            }
                        }
                    }, {
                        key: "mountX",
                        get: function get() {
                            return this.props.mountX;
                        },
                        set: function set(value) {
                            if (this.props.mountX !== value) {
                                this.props.mountX = value;
                                this.setUpdateType(UpdateType.Local);
                                this.updateIsSimple();
                            }
                        }
                    }, {
                        key: "mountY",
                        get: function get() {
                            return this.props.mountY;
                        },
                        set: function set(value) {
                            if (this.props.mountY !== value) {
                                this.props.mountY = value;
                                this.setUpdateType(UpdateType.Local);
                                this.updateIsSimple();
                            }
                        }
                    }, {
                        key: "pivot",
                        get: function get() {
                            return this.props.pivot;
                        },
                        set: function set(value) {
                            if (this.props.pivotX !== value || this.props.pivotY !== value) {
                                this.props.pivotX = value;
                                this.props.pivotY = value;
                                this.props.pivot = value;
                                this.setUpdateType(UpdateType.Local);
                            }
                        }
                    }, {
                        key: "pivotX",
                        get: function get() {
                            return this.props.pivotX;
                        },
                        set: function set(value) {
                            if (this.props.pivotX !== value) {
                                this.props.pivotX = value;
                                this.setUpdateType(UpdateType.Local);
                            }
                        }
                    }, {
                        key: "pivotY",
                        get: function get() {
                            return this.props.pivotY;
                        },
                        set: function set(value) {
                            if (this.props.pivotY !== value) {
                                this.props.pivotY = value;
                                this.setUpdateType(UpdateType.Local);
                            }
                        }
                    }, {
                        key: "rotation",
                        get: function get() {
                            return this.props.rotation;
                        },
                        set: function set(value) {
                            if (this.props.rotation !== value) {
                                this.props.rotation = value;
                                this.setUpdateType(UpdateType.Local);
                                this.updateIsSimple();
                            }
                        }
                    }, {
                        key: "alpha",
                        get: function get() {
                            return this.props.alpha;
                        },
                        set: function set(value) {
                            if (this.props.alpha === value) return;
                            this.props.alpha = value;
                            this.setUpdateType(UpdateType.WorldAlpha);
                        }
                    }, {
                        key: "ignoreParentAlpha",
                        get: function get() {
                            return this.props.ignoreParentAlpha;
                        },
                        set: function set(value) {
                            if (this.props.ignoreParentAlpha === value) return;
                            this.props.ignoreParentAlpha = value;
                            this.setUpdateType(UpdateType.WorldAlpha);
                        }
                    }, {
                        key: "autosize",
                        get: function get() {
                            return this.props.autosize;
                        },
                        set: function set(value) {
                            if (this.props.autosize === value) return;
                            this.props.autosize = value;
                            if (value === true) {
                                var texture = this.props.texture;
                                if (texture !== null && texture.dimensions !== null) {
                                    var _texture$dimensions2 = texture.dimensions, w = _texture$dimensions2.w, h = _texture$dimensions2.h;
                                    this.applyAutosizeDimensions(w, h);
                                }
                            }
                        }
                    }, {
                        key: "clipping",
                        get: function get() {
                            return this.props.clipping;
                        },
                        set: function set(value) {
                            if (this.props.clipping === value) return;
                            this.props.clipping = value;
                            this.setUpdateType(UpdateType.Clipping);
                        }
                    }, {
                        key: "color",
                        get: function get() {
                            return this.props.color;
                        },
                        set: function set(value) {
                            var p = this.props;
                            if (p.color === value) return;
                            p.color = value;
                            p.colorTop = value;
                            p.colorBottom = value;
                            p.colorLeft = value;
                            p.colorRight = value;
                            p.colorTl = value;
                            p.colorTr = value;
                            p.colorBl = value;
                            p.colorBr = value;
                            this.updateHasColorProps();
                            this.setUpdateType(UpdateType.PremultipliedColors);
                        }
                    }, {
                        key: "computeHasColorProps",
                        value: function computeHasColorProps() {
                            var p = this.props;
                            return p.colorTl > 0 || p.colorTr > 0 || p.colorBl > 0 || p.colorBr > 0;
                        }
                    }, {
                        key: "updateHasColorProps",
                        value: function updateHasColorProps() {
                            var has = this.computeHasColorProps();
                            if (has === this.hasColorProps) return;
                            this.hasColorProps = has;
                            this.setUpdateType(UpdateType.IsRenderable);
                        }
                    }, {
                        key: "placeholderColor",
                        get: function get() {
                            return this.props.placeholderColor;
                        },
                        set: function set(value) {
                            var p = this.props;
                            if (p.placeholderColor === value) return;
                            p.placeholderColor = value;
                            this.updatePlaceholderActive();
                            if (this.placeholderActive === true) this.setUpdateType(UpdateType.PremultipliedColors);
                        }
                    }, {
                        key: "colorTop",
                        get: function get() {
                            return this.props.colorTop;
                        },
                        set: function set(value) {
                            var p = this.props;
                            if (p.colorTl !== value || p.colorTr !== value) {
                                p.colorTl = value;
                                p.colorTr = value;
                            }
                            p.colorTop = value;
                            this.updateHasColorProps();
                            this.setUpdateType(UpdateType.PremultipliedColors);
                        }
                    }, {
                        key: "colorBottom",
                        get: function get() {
                            return this.props.colorBottom;
                        },
                        set: function set(value) {
                            var p = this.props;
                            if (p.colorBl !== value || p.colorBr !== value) {
                                p.colorBl = value;
                                p.colorBr = value;
                            }
                            p.colorBottom = value;
                            this.updateHasColorProps();
                            this.setUpdateType(UpdateType.PremultipliedColors);
                        }
                    }, {
                        key: "colorLeft",
                        get: function get() {
                            return this.props.colorLeft;
                        },
                        set: function set(value) {
                            var p = this.props;
                            if (p.colorTl !== value || p.colorBl !== value) {
                                p.colorTl = value;
                                p.colorBl = value;
                            }
                            p.colorLeft = value;
                            this.updateHasColorProps();
                            this.setUpdateType(UpdateType.PremultipliedColors);
                        }
                    }, {
                        key: "colorRight",
                        get: function get() {
                            return this.props.colorRight;
                        },
                        set: function set(value) {
                            var p = this.props;
                            if (p.colorTr !== value || p.colorBr !== value) {
                                p.colorTr = value;
                                p.colorBr = value;
                            }
                            p.colorRight = value;
                            this.updateHasColorProps();
                            this.setUpdateType(UpdateType.PremultipliedColors);
                        }
                    }, {
                        key: "colorTl",
                        get: function get() {
                            return this.props.colorTl;
                        },
                        set: function set(value) {
                            this.props.colorTl = value;
                            this.updateHasColorProps();
                            this.setUpdateType(UpdateType.PremultipliedColors);
                        }
                    }, {
                        key: "colorTr",
                        get: function get() {
                            return this.props.colorTr;
                        },
                        set: function set(value) {
                            this.props.colorTr = value;
                            this.updateHasColorProps();
                            this.setUpdateType(UpdateType.PremultipliedColors);
                        }
                    }, {
                        key: "colorBl",
                        get: function get() {
                            return this.props.colorBl;
                        },
                        set: function set(value) {
                            this.props.colorBl = value;
                            this.updateHasColorProps();
                            this.setUpdateType(UpdateType.PremultipliedColors);
                        }
                    }, {
                        key: "colorBr",
                        get: function get() {
                            return this.props.colorBr;
                        },
                        set: function set(value) {
                            this.props.colorBr = value;
                            this.updateHasColorProps();
                            this.setUpdateType(UpdateType.PremultipliedColors);
                        }
                    }, {
                        key: "zIndex",
                        get: function get() {
                            return this.props.zIndex;
                        },
                        set: function set(value) {
                            var sanitizedValue = value;
                            if (isNaN(sanitizedValue) || Number.isFinite(sanitizedValue) === false) {
                                console.warn("zIndex was set to an invalid value: ".concat(value, ", defaulting to 0"));
                                sanitizedValue = 0;
                            }
                            if (sanitizedValue > Number.MAX_SAFE_INTEGER) sanitizedValue = 1e3; else if (sanitizedValue < Number.MIN_SAFE_INTEGER) sanitizedValue = -1e3;
                            if (this.props.zIndex === sanitizedValue) return;
                            this.props.zIndex = sanitizedValue;
                            var parent = this.parent;
                            if (parent !== null) parent.setUpdateType(UpdateType.SortZIndexChildren);
                        }
                    }, {
                        key: "parent",
                        get: function get() {
                            return this.props.parent;
                        },
                        set: function set(newParent) {
                            var oldParent = this.props.parent;
                            if (oldParent === newParent) return;
                            this.props.parent = newParent;
                            if (oldParent !== null) oldParent.removeChild(this);
                            if (newParent !== null) newParent.addChild(this);
                            this.setUpdateType(UpdateType.Global | UpdateType.Clipping | UpdateType.WorldAlpha);
                        }
                    }, {
                        key: "preventDestroy",
                        get: function get() {
                            return this.props.preventDestroy;
                        },
                        set: function set(value) {
                            this.props.preventDestroy = value;
                        }
                    }, {
                        key: "shader",
                        get: function get() {
                            return this.props.shader;
                        },
                        set: function set(shader) {
                            if (shader === null) {
                                var def = this.stage.defShaderNode;
                                if (this.props.shader === def) return;
                                this.hasShaderUpdater = false;
                                this.hasShaderTimeFn = false;
                                this.stage.untrackTimedNode(this);
                                this.props.shader = def;
                                this.setUpdateType(UpdateType.IsRenderable);
                                return;
                            }
                            if (this.props.shader === shader) return;
                            this.hasShaderUpdater = shader.update !== void 0;
                            this.hasShaderTimeFn = shader.time !== void 0;
                            if (shader.shaderKey !== "default") shader.attachNode(this);
                            if (this.hasShaderTimeFn === true) this.stage.trackTimedNode(this); else this.stage.untrackTimedNode(this);
                            this.props.shader = shader;
                            this.setUpdateType(UpdateType.IsRenderable | UpdateType.RecalcUniforms);
                        }
                    }, {
                        key: "src",
                        get: function get() {
                            return this.props.src;
                        },
                        set: function set(imageUrl) {
                            if (this.props.src === imageUrl) return;
                            this.props.src = imageUrl;
                            if (!imageUrl) {
                                this.texture = null;
                                return;
                            }
                            if (true === false && typeof imageUrl !== "string" && (this.props.srcKey === null || this.props.srcKey === void 0)) console.warn("[CoreNode] A non-string `src` needs a `srcKey` to be cached. Set one before `src`.");
                            this.texture = this.stage.txManager.createTexture("ImageTexture", {
                                src: imageUrl,
                                key: this.props.srcKey,
                                w: this.props.w,
                                h: this.props.h,
                                type: this.props.imageType,
                                sx: this.props.srcX,
                                sy: this.props.srcY,
                                sw: this.props.srcWidth,
                                sh: this.props.srcHeight
                            });
                        }
                    }, {
                        key: "srcKey",
                        get: function get() {
                            var _this$props$srcKey;
                            return (_this$props$srcKey = this.props.srcKey) !== null && _this$props$srcKey !== void 0 ? _this$props$srcKey : null;
                        },
                        set: function set(value) {
                            this.props.srcKey = value;
                        }
                    }, {
                        key: "imageType",
                        get: function get() {
                            return this.props.imageType || null;
                        },
                        set: function set(type) {
                            if (this.props.imageType === type) return;
                            this.props.imageType = type;
                        }
                    }, {
                        key: "srcHeight",
                        get: function get() {
                            return this.props.srcHeight;
                        },
                        set: function set(value) {
                            this.props.srcHeight = value;
                        }
                    }, {
                        key: "srcWidth",
                        get: function get() {
                            return this.props.srcWidth;
                        },
                        set: function set(value) {
                            this.props.srcWidth = value;
                        }
                    }, {
                        key: "srcX",
                        get: function get() {
                            return this.props.srcX;
                        },
                        set: function set(value) {
                            this.props.srcX = value;
                        }
                    }, {
                        key: "srcY",
                        get: function get() {
                            return this.props.srcY;
                        },
                        set: function set(value) {
                            this.props.srcY = value;
                        }
                    }, {
                        key: "texture",
                        get: function get() {
                            return this.props.texture;
                        },
                        set: function set(value) {
                            var _this$texture2;
                            if (this.props.texture === value) return;
                            if (this.props.texture) this.unloadTexture();
                            this.textureCoords = void 0;
                            this.props.texture = value;
                            this.textureLoaded = value !== null && value.state === "loaded";
                            this.updatePlaceholderActive();
                            if (value !== null) {
                                value.setRenderableOwner(this._id, this.isRenderable);
                                this.textureOwnership = this.isRenderable;
                                this.loadTexture();
                            }
                            if (((_this$texture2 = this.texture) == null ? void 0 : _this$texture2.type) === TextureType.subTexture && this.textureLoaded) this.isQuadDirty = true;
                            this.setUpdateType(UpdateType.IsRenderable);
                            this.updateIsSimple();
                        }
                    }, {
                        key: "textureOptions",
                        get: function get() {
                            return this.props.textureOptions;
                        },
                        set: function set(value) {
                            this.props.textureOptions = value;
                            if (this.stage.calculateTextureCoord === true && value !== null) this.textureCoords = this.stage.renderer.getTextureCoords(this);
                            this.updateIsSimple();
                        }
                    }, {
                        key: "componentName",
                        get: function get() {
                            return this.props.componentName;
                        }
                    }, {
                        key: "componentLocation",
                        get: function get() {
                            return this.props.componentLocation;
                        }
                    }, {
                        key: "animate",
                        value: function animate(props, settings) {
                            return createAnimation(this.stage.animationManager, this, props, settings);
                        }
                    }, {
                        key: "animateProp",
                        value: function animateProp(name, value, settings) {
                            var animations = this._animations;
                            if (animations !== null) {
                                var existing = animations[name];
                                if (existing && existing.settings === settings) {
                                    var _controller = existing.controller;
                                    var values = _controller.props ? _controller.props[name] : null;
                                    if (values) {
                                        var _this$name;
                                        values.start = (_this$name = this[name]) !== null && _this$name !== void 0 ? _this$name : 0;
                                        values.target = value;
                                        _controller.progress = 0;
                                        if (settings.adaptiveDuration === true) {
                                            var _settings$duration;
                                            var now = performance.now();
                                            var elapsed = now - _controller.lastRunTime;
                                            _controller.lastRunTime = now;
                                            var duration = (_settings$duration = settings.duration) !== null && _settings$duration !== void 0 ? _settings$duration : _controller.duration;
                                            _controller.duration = elapsed < duration ? elapsed : duration;
                                        }
                                        return _controller.start();
                                    }
                                }
                            } else animations = this._animations = {};
                            var animationProps = _defineProperty({}, name, value);
                            var controller = createAnimation(this.stage.animationManager, this, animationProps, settings);
                            animations[name] = {
                                controller: controller,
                                settings: settings
                            };
                            return controller.start();
                        }
                    }, {
                        key: "animateToTarget",
                        value: function animateToTarget(prop) {
                            var _animation$controller;
                            var animations = this._animations;
                            if (animations === null) return;
                            var animation = animations[prop];
                            if (!animation) return;
                            return (_animation$controller = animation.controller.props) == null || (_animation$controller = _animation$controller[prop]) == null ? void 0 : _animation$controller.target;
                        }
                    }, {
                        key: "flush",
                        value: function flush() {}
                    }, {
                        key: "draw",
                        value: function draw(renderer) {
                            var glw = renderer.glw, stage = renderer.stage;
                            var shader = this.props.shader;
                            renderer.useShader(shader.program);
                            shader.program.bindRenderOp(this, renderer.quadBufferCollection);
                            if (this.clippingRect.valid === true) {
                                var pixelRatio = stage.pixelRatio;
                                var clipX = Math.round(this.clippingRect.x * pixelRatio);
                                var clipWidth = Math.round(this.clippingRect.w * pixelRatio);
                                var clipHeight = Math.round(this.clippingRect.h * pixelRatio);
                                var clipY = Math.round(glw.canvasH - clipHeight - this.clippingRect.y * pixelRatio);
                                glw.setScissorTest(true);
                                glw.scissor(clipX, clipY, clipWidth, clipHeight);
                            } else glw.setScissorTest(false);
                            var quadIdx = this.renderOpBufferIdx / WORDS_PER_QUAD * 6 * 2;
                            glw.drawElements(glw.TRIANGLES, 6 * this.numQuads, glw.UNSIGNED_SHORT, quadIdx);
                        }
                    } ]);
                }(EventEmitter);
                AnimationManager = function() {
                    function AnimationManager() {
                        this.activeAnimations = [];
                    }
                    return _createClass(AnimationManager, [ {
                        key: "registerAnimation",
                        value: function registerAnimation(animation) {
                            if (!this.activeAnimations.includes(animation)) this.activeAnimations.push(animation);
                        }
                    }, {
                        key: "unregisterAnimation",
                        value: function unregisterAnimation(animation) {
                            var idx = this.activeAnimations.indexOf(animation);
                            if (idx !== -1) this.activeAnimations.splice(idx, 1);
                        }
                    }, {
                        key: "update",
                        value: function update(dt) {
                            for (var i = this.activeAnimations.length - 1; i >= 0; i--) {
                                var anim = this.activeAnimations[i];
                                if (!anim) continue;
                                if (anim.node.destroyed) {
                                    anim.stop();
                                    continue;
                                }
                                var duration = anim.duration, loop = anim.loop;
                                var remainingDt = dt;
                                if (anim.delayFor > 0) {
                                    anim.delayFor -= remainingDt;
                                    if (anim.delayFor >= 0) continue; else {
                                        remainingDt = -anim.delayFor;
                                        anim.delayFor = 0;
                                    }
                                }
                                if (anim.progress === 0 && anim.state === "scheduled") anim.state = "running";
                                if (duration === 0) anim.progress = 1; else anim.progress += remainingDt / duration;
                                var isFinished = false;
                                if (anim.progress >= 1) if (loop) {
                                    anim.progress = anim.progress % 1;
                                    anim.delayFor = anim.delay;
                                } else {
                                    anim.progress = 1;
                                    isFinished = true;
                                }
                                this.applyValues(anim);
                                if (isFinished) if (anim.stopMethod === "reverse") {
                                    this.reverseValues(anim);
                                    anim.progress = 0;
                                    anim.delayFor = anim.delay;
                                } else anim.stop();
                            }
                        }
                    }, {
                        key: "applyValues",
                        value: function applyValues(anim) {
                            var progress = anim.progress;
                            var easedProgress = anim.timingFunction(progress) || progress;
                            var propKeys = anim.propKeys;
                            if (propKeys !== null) this.writeValues(anim.node, propKeys, anim.propList, progress, easedProgress);
                            var shaderPropKeys = anim.shaderPropKeys;
                            if (shaderPropKeys !== null && anim.node.shader !== null) this.writeValues(anim.node.shader.props, shaderPropKeys, anim.shaderPropList, progress, easedProgress);
                        }
                    }, {
                        key: "writeValues",
                        value: function writeValues(target, keys, values, progress, easedProgress) {
                            var len = keys.length;
                            if (progress === 1) {
                                for (var i = 0; i < len; i++) target[keys[i]] = values[i].target;
                                return;
                            }
                            if (progress === 0) {
                                for (var _i0 = 0; _i0 < len; _i0++) target[keys[_i0]] = values[_i0].start;
                                return;
                            }
                            for (var _i1 = 0; _i1 < len; _i1++) {
                                var value = values[_i1];
                                var start = value.start;
                                if (value.isColor === true) target[keys[_i1]] = mergeColorProgress(start, value.target, easedProgress); else target[keys[_i1]] = start + (value.target - start) * easedProgress;
                            }
                        }
                    }, {
                        key: "reverseValues",
                        value: function reverseValues(anim) {
                            if (anim.props) for (var key in anim.props) {
                                var v = anim.props[key];
                                var t = v.start;
                                v.start = v.target;
                                v.target = t;
                            }
                            if (anim.shaderProps) for (var _key7 in anim.shaderProps) {
                                var _v3 = anim.shaderProps[_key7];
                                var _t = _v3.start;
                                _v3.start = _v3.target;
                                _v3.target = _t;
                            }
                            if (!anim.loop) anim.stopMethod = false;
                        }
                    } ]);
                }();
                ImageWorkerManager = function() {
                    function ImageWorkerManager(numImageWorkers, createImageBitmapSupport) {
                        var _this6 = this;
                        this.messageManager = new Map;
                        this.workers = [];
                        this.workerLoad = [];
                        this.nextId = 0;
                        this.maxWorkers = void 0;
                        this.workerBlob = null;
                        this.createImageBitmapSupport = void 0;
                        this.maxWorkers = numImageWorkers;
                        this.createImageBitmapSupport = createImageBitmapSupport;
                        setTimeout(function() {
                            try {
                                _this6.spawnWorkers();
                            } catch (e) {}
                        }, 0);
                    }
                    return _createClass(ImageWorkerManager, [ {
                        key: "spawnWorkers",
                        value: function spawnWorkers() {
                            if (this.workers.length > 0) return;
                            this.workerBlob = this.createWorkerBlob();
                            for (var i = 0; i < this.maxWorkers; i++) this.spawnWorker();
                        }
                    }, {
                        key: "handleMessage",
                        value: function handleMessage(event, workerIndex) {
                            var _event$data = event.data, id = _event$data.id, data = _event$data.data, error = _event$data.error;
                            var msg = this.messageManager.get(id);
                            if (this.workerLoad[workerIndex]) this.workerLoad[workerIndex]--;
                            if (msg !== void 0) {
                                var _msg = _slicedToArray(msg, 2), resolve = _msg[0], reject = _msg[1];
                                this.messageManager.delete(id);
                                if (error) reject(new Error(error)); else resolve(data);
                            }
                        }
                    }, {
                        key: "handleWorkerError",
                        value: function handleWorkerError(event, workerIndex) {
                            var message = event instanceof ErrorEvent && event.message ? event.message : "Image worker encountered an unrecoverable error";
                            var _iterator12 = _createForOfIteratorHelper(this.messageManager), _step12;
                            try {
                                for (_iterator12.s(); !(_step12 = _iterator12.n()).done; ) {
                                    var _step12$value = _slicedToArray(_step12.value, 2), id = _step12$value[0], msg = _step12$value[1];
                                    var _msg2 = _slicedToArray(msg, 2), reject = _msg2[1];
                                    this.messageManager.delete(id);
                                    reject(new Error(message));
                                }
                            } catch (err) {
                                _iterator12.e(err);
                            } finally {
                                _iterator12.f();
                            }
                            this.workerLoad[workerIndex] = 0;
                        }
                    }, {
                        key: "createWorkerBlob",
                        value: function createWorkerBlob() {
                            var workerCode = "(".concat(createImageWorker.toString(), ")()");
                            workerCode = workerCode.replace('"use strict";', "");
                            return new Blob([ workerCode ], {
                                type: "application/javascript"
                            });
                        }
                    }, {
                        key: "spawnWorker",
                        value: function spawnWorker() {
                            var _this7 = this;
                            if (this.workerBlob === null || this.workers.length >= this.maxWorkers) return;
                            var index = this.workers.length;
                            var urlFactory = self.URL ? URL : webkitURL;
                            var blobURL = urlFactory.createObjectURL(this.workerBlob);
                            var worker = new Worker(blobURL);
                            urlFactory.revokeObjectURL(blobURL);
                            worker.onmessage = function(event) {
                                return _this7.handleMessage(event, index);
                            };
                            worker.onerror = function(event) {
                                return _this7.handleWorkerError(event, index);
                            };
                            worker.onmessageerror = function(event) {
                                return _this7.handleWorkerError(event, index);
                            };
                            worker.postMessage({
                                init: true,
                                supportsOptionsCreateImageBitmap: this.createImageBitmapSupport.options,
                                supportsFullCreateImageBitmap: this.createImageBitmapSupport.full,
                                premultiplyAlphaHonored: this.createImageBitmapSupport.premultiplyHonored
                            });
                            this.workers.push(worker);
                            this.workerLoad.push(0);
                            if (this.workers.length >= this.maxWorkers) this.workerBlob = null;
                        }
                    }, {
                        key: "getNextWorkerIndex",
                        value: function getNextWorkerIndex() {
                            if (this.workers.length === 0) return -1;
                            var minLoad = Infinity;
                            var workerIndex = 0;
                            for (var i = 0; i < this.workers.length; i++) {
                                var load = this.workerLoad[i] || 0;
                                if (load === 0) return i;
                                if (load < minLoad) {
                                    minLoad = load;
                                    workerIndex = i;
                                }
                            }
                            return workerIndex;
                        }
                    }, {
                        key: "getImage",
                        value: function getImage(src, premultiplyAlpha, sx, sy, sw, sh) {
                            var _this8 = this;
                            return new Promise(function(resolve, reject) {
                                try {
                                    var nextWorkerIndex = _this8.getNextWorkerIndex();
                                    if (nextWorkerIndex === -1) {
                                        _this8.spawnWorkers();
                                        nextWorkerIndex = _this8.getNextWorkerIndex();
                                    }
                                    if (nextWorkerIndex === -1) {
                                        reject(new Error("No image workers available"));
                                        return;
                                    }
                                    var id = _this8.nextId++;
                                    _this8.messageManager.set(id, [ resolve, reject ]);
                                    var worker = _this8.workers[nextWorkerIndex];
                                    _this8.workerLoad[nextWorkerIndex]++;
                                    worker.postMessage({
                                        id: id,
                                        src: src,
                                        premultiplyAlpha: premultiplyAlpha,
                                        sx: sx,
                                        sy: sy,
                                        sw: sw,
                                        sh: sh
                                    });
                                } catch (error) {
                                    reject(error);
                                }
                            });
                        }
                    } ]);
                }();
                ColorTexture = function(_Texture) {
                    function ColorTexture(txManager, props) {
                        var _this9;
                        _this9 = _callSuper(this, ColorTexture, [ txManager ]);
                        _this9.type = TextureType.color;
                        _this9.props = void 0;
                        _this9.props = props;
                        return _this9;
                    }
                    _inherits(ColorTexture, _Texture);
                    return _createClass(ColorTexture, [ {
                        key: "color",
                        get: function get() {
                            return this.props.color;
                        },
                        set: function set(color) {
                            this.props.color = color;
                        }
                    }, {
                        key: "getTextureSource",
                        value: function() {
                            var _getTextureSource = _asyncToGenerator(_regenerator().m(function _callee2() {
                                var pixelData;
                                return _regenerator().w(function(_context3) {
                                    while (1) switch (_context3.n) {
                                      case 0:
                                        pixelData = new Uint8Array(4);
                                        if (this.color === 4294967295) {
                                            pixelData[0] = 255;
                                            pixelData[1] = 255;
                                            pixelData[2] = 255;
                                            pixelData[3] = 255;
                                        } else {
                                            pixelData[0] = this.color >> 16 & 255;
                                            pixelData[1] = this.color >> 8 & 255;
                                            pixelData[2] = this.color & 255;
                                            pixelData[3] = this.color >>> 24 & 255;
                                        }
                                        this.setState("fetched", {
                                            w: 1,
                                            h: 1
                                        });
                                        return _context3.a(2, {
                                            data: pixelData,
                                            premultiplyAlpha: true
                                        });
                                    }
                                }, _callee2, this);
                            }));
                            function getTextureSource() {
                                return _getTextureSource.apply(this, arguments);
                            }
                            return getTextureSource;
                        }()
                    } ], [ {
                        key: "makeCacheKey",
                        value: function makeCacheKey(props) {
                            return "ColorTexture,".concat(props.color || 4294967295);
                        }
                    }, {
                        key: "resolveDefaults",
                        value: function resolveDefaults(props) {
                            return {
                                color: props.color || 4294967295
                            };
                        }
                    } ]);
                }(Texture);
                ColorTexture.z$__type__Props = void 0;
                PVR_MAGIC = 55727696;
                PVR_TO_GL_INTERNAL_FORMAT = {
                    0: 35841,
                    1: 35843,
                    2: 35840,
                    3: 35842,
                    6: 36196,
                    7: 33776,
                    8: 33778,
                    9: 33778,
                    10: 33779,
                    11: 33779
                };
                ASTC_MAGIC = 1554098963;
                ASTC_TO_GL_INTERNAL_FORMAT = {
                    "4x4": 37808,
                    "5x5": 37809,
                    "6x6": 37810,
                    "8x8": 37811,
                    "10x10": 37812,
                    "12x12": 37813
                };
                KTX_IDENTIFIER = [ 171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10 ];
                loadCompressedTexture = function() {
                    var _ref17 = _asyncToGenerator(_regenerator().m(function _callee3(url) {
                        var arrayBuffer, view, magic, isKTX, i, _t2;
                        return _regenerator().w(function(_context4) {
                            while (1) switch (_context4.p = _context4.n) {
                              case 0:
                                _context4.p = 0;
                                _context4.n = 1;
                                return new Promise(function(resolve, reject) {
                                    var xhr = new XMLHttpRequest;
                                    xhr.open("GET", url, true);
                                    xhr.responseType = "arraybuffer";
                                    xhr.onload = function() {
                                        if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 0) resolve(xhr.response); else reject(new Error("Failed to fetch compressed texture: ".concat(xhr.status, " ").concat(xhr.statusText)));
                                    };
                                    xhr.onerror = function() {
                                        reject(new Error("Network error occurred while trying to fetch the compressed texture."));
                                    };
                                    xhr.send(null);
                                });

                              case 1:
                                arrayBuffer = _context4.v;
                                if (!(arrayBuffer.byteLength < 16)) {
                                    _context4.n = 2;
                                    break;
                                }
                                throw new Error("File too small to be a valid compressed texture (".concat(arrayBuffer.byteLength, " bytes). Expected at least 16 bytes for header inspection."));

                              case 2:
                                view = new DataView(arrayBuffer);
                                magic = view.getUint32(0, true);
                                if (!(magic === PVR_MAGIC)) {
                                    _context4.n = 3;
                                    break;
                                }
                                return _context4.a(2, loadPVR(view));

                              case 3:
                                if (!(magic === ASTC_MAGIC)) {
                                    _context4.n = 4;
                                    break;
                                }
                                return _context4.a(2, loadASTC(view));

                              case 4:
                                isKTX = true;
                                i = 0;

                              case 5:
                                if (!(i < KTX_IDENTIFIER.length)) {
                                    _context4.n = 7;
                                    break;
                                }
                                if (!(view.getUint8(i) !== KTX_IDENTIFIER[i])) {
                                    _context4.n = 6;
                                    break;
                                }
                                isKTX = false;
                                return _context4.a(3, 7);

                              case 6:
                                i++;
                                _context4.n = 5;
                                break;

                              case 7:
                                if (!(isKTX === true)) {
                                    _context4.n = 8;
                                    break;
                                }
                                return _context4.a(2, loadKTX(view));

                              case 8:
                                throw new Error("Unrecognized compressed texture format");

                              case 9:
                                _context4.n = 11;
                                break;

                              case 10:
                                _context4.p = 10;
                                _t2 = _context4.v;
                                throw new Error("Failed to load compressed texture from ".concat(url, ": ").concat(_t2));

                              case 11:
                                return _context4.a(2);
                            }
                        }, _callee3, null, [ [ 0, 10 ] ]);
                    }));
                    return function loadCompressedTexture(_x4) {
                        return _ref17.apply(this, arguments);
                    };
                }();
                loadASTC = function() {
                    var _ref18 = _asyncToGenerator(_regenerator().m(function _callee4(view) {
                        var blockX, blockY, sizeX, sizeY, expected, dataSize, internalFormat, buffer, mipmaps;
                        return _regenerator().w(function(_context5) {
                            while (1) switch (_context5.n) {
                              case 0:
                                blockX = view.getUint8(4);
                                blockY = view.getUint8(5);
                                sizeX = readUint24(view, 7);
                                sizeY = readUint24(view, 10);
                                if (!(sizeX === 0 || sizeY === 0)) {
                                    _context5.n = 1;
                                    break;
                                }
                                throw new Error("Invalid ASTC texture dimensions: ".concat(sizeX, "x").concat(sizeY));

                              case 1:
                                expected = Math.ceil(sizeX / blockX) * Math.ceil(sizeY / blockY) * 16;
                                dataSize = view.byteLength - 16;
                                if (!(expected !== dataSize)) {
                                    _context5.n = 2;
                                    break;
                                }
                                throw new Error("Invalid ASTC texture data size: expected ".concat(expected, ", got ").concat(dataSize));

                              case 2:
                                internalFormat = ASTC_TO_GL_INTERNAL_FORMAT["".concat(blockX, "x").concat(blockY)];
                                if (!(internalFormat === void 0)) {
                                    _context5.n = 3;
                                    break;
                                }
                                throw new Error("Unsupported ASTC block size: ".concat(blockX, "x").concat(blockY));

                              case 3:
                                buffer = view.buffer;
                                mipmaps = [];
                                mipmaps.push(buffer.slice(16));
                                return _context5.a(2, {
                                    data: {
                                        blockInfo: blockInfoMap[internalFormat],
                                        glInternalFormat: internalFormat,
                                        mipmaps: mipmaps,
                                        w: sizeX,
                                        h: sizeY,
                                        type: "astc"
                                    },
                                    premultiplyAlpha: false
                                });
                            }
                        }, _callee4);
                    }));
                    return function loadASTC(_x5) {
                        return _ref18.apply(this, arguments);
                    };
                }();
                EXT_ASTC = [ "WEBGL_compressed_texture_astc" ];
                EXT_S3TC = [ "WEBGL_compressed_texture_s3tc" ];
                EXT_ETC1 = [ "WEBGL_compressed_texture_etc1" ];
                EXT_ETC = [ "WEBGL_compressed_texture_etc" ];
                EXT_PVRTC = [ "WEBGL_compressed_texture_pvrtc", "WEBKIT_WEBGL_compressed_texture_pvrtc" ];
                EXT_NONE = [];
                requiredExtensionsForFormat = function requiredExtensionsForFormat(glInternalFormat) {
                    if (glInternalFormat >= 37808 && glInternalFormat <= 37845) return EXT_ASTC;
                    if (glInternalFormat >= 33776 && glInternalFormat <= 33779) return EXT_S3TC;
                    if (glInternalFormat === 36196) return EXT_ETC1;
                    if (glInternalFormat >= 37492 && glInternalFormat <= 37497) return EXT_ETC;
                    if (glInternalFormat >= 35840 && glInternalFormat <= 35843) return EXT_PVRTC;
                    return EXT_NONE;
                };
                ensureCompressedFormatEnabled = function ensureCompressedFormatEnabled(glw, glInternalFormat) {
                    var names = requiredExtensionsForFormat(glInternalFormat);
                    var len = names.length;
                    if (len === 0) return;
                    for (var i = 0; i < len; i++) if (glw.getExtension(names[i]) !== null) return;
                    throw new Error("Compressed texture format 0x".concat(glInternalFormat.toString(16), " is not supported by this device (requires ").concat(names.join(" or "), ")"));
                };
                uploadASTC = function uploadASTC(glw, texture, data) {
                    var glInternalFormat = data.glInternalFormat, mipmaps = data.mipmaps, w = data.w, h = data.h;
                    ensureCompressedFormatEnabled(glw, glInternalFormat);
                    glw.bindTexture(texture);
                    if (mipmaps === void 0) return;
                    var view = new Uint8Array(mipmaps[0]);
                    glw.compressedTexImage2D(0, glInternalFormat, w, h, 0, view);
                    glw.texParameteri(glw.TEXTURE_WRAP_S, glw.CLAMP_TO_EDGE);
                    glw.texParameteri(glw.TEXTURE_WRAP_T, glw.CLAMP_TO_EDGE);
                    glw.texParameteri(glw.TEXTURE_MAG_FILTER, glw.LINEAR);
                    glw.texParameteri(glw.TEXTURE_MIN_FILTER, glw.LINEAR);
                };
                loadKTX = function() {
                    var _ref19 = _asyncToGenerator(_regenerator().m(function _callee5(view) {
                        var endianness, littleEndian, glType, glFormat, glInternalFormat, width, height, mipmapLevels, bytesOfKeyValueData, mipmaps, buffer, offset, i, imageSize, end;
                        return _regenerator().w(function(_context6) {
                            while (1) switch (_context6.n) {
                              case 0:
                                endianness = view.getUint32(12, true);
                                littleEndian = endianness === 67305985;
                                if (!(littleEndian === false && endianness !== 16909060)) {
                                    _context6.n = 1;
                                    break;
                                }
                                throw new Error("Invalid KTX endianness value");

                              case 1:
                                glType = view.getUint32(16, littleEndian);
                                glFormat = view.getUint32(24, littleEndian);
                                if (!(glType !== 0 || glFormat !== 0)) {
                                    _context6.n = 2;
                                    break;
                                }
                                throw new Error("KTX texture is not compressed (glType: ".concat(glType, ", glFormat: ").concat(glFormat, ")"));

                              case 2:
                                glInternalFormat = view.getUint32(28, littleEndian);
                                if (!(blockInfoMap[glInternalFormat] === void 0)) {
                                    _context6.n = 3;
                                    break;
                                }
                                throw new Error("Unsupported KTX compressed texture format: 0x".concat(glInternalFormat.toString(16)));

                              case 3:
                                width = view.getUint32(36, littleEndian);
                                height = view.getUint32(40, littleEndian);
                                if (!(width === 0 || height === 0)) {
                                    _context6.n = 4;
                                    break;
                                }
                                throw new Error("Invalid KTX texture dimensions: ".concat(width, "x").concat(height));

                              case 4:
                                mipmapLevels = view.getUint32(56, littleEndian);
                                if (!(mipmapLevels === 0)) {
                                    _context6.n = 5;
                                    break;
                                }
                                throw new Error("KTX texture has no mipmap levels");

                              case 5:
                                bytesOfKeyValueData = view.getUint32(60, littleEndian);
                                mipmaps = [];
                                buffer = view.buffer;
                                offset = 64 + bytesOfKeyValueData;
                                if (!(offset > view.byteLength)) {
                                    _context6.n = 6;
                                    break;
                                }
                                throw new Error("Invalid KTX file: key/value data exceeds file size");

                              case 6:
                                for (i = 0; i < mipmapLevels; i++) {
                                    imageSize = view.getUint32(offset, littleEndian);
                                    offset += 4;
                                    end = offset + imageSize;
                                    mipmaps.push(buffer.slice(offset, end));
                                    offset = end;
                                    if (offset % 4 !== 0) offset += 4 - offset % 4;
                                }
                                return _context6.a(2, {
                                    data: {
                                        blockInfo: blockInfoMap[glInternalFormat],
                                        glInternalFormat: glInternalFormat,
                                        mipmaps: mipmaps,
                                        w: width,
                                        h: height,
                                        type: "ktx"
                                    },
                                    premultiplyAlpha: false
                                });
                            }
                        }, _callee5);
                    }));
                    return function loadKTX(_x6) {
                        return _ref19.apply(this, arguments);
                    };
                }();
                uploadKTX = function uploadKTX(glw, texture, data) {
                    var glInternalFormat = data.glInternalFormat, mipmaps = data.mipmaps, width = data.w, height = data.h, blockInfo = data.blockInfo;
                    ensureCompressedFormatEnabled(glw, glInternalFormat);
                    if (mipmaps === void 0) return;
                    glw.bindTexture(texture);
                    var blockWidth = blockInfo.width;
                    var blockHeight = blockInfo.height;
                    var w = width;
                    var h = height;
                    for (var i = 0; i < mipmaps.length; i++) {
                        var view = new Uint8Array(mipmaps[i]);
                        var uploadW = Math.ceil(w / blockWidth) * blockWidth;
                        var uploadH = Math.ceil(h / blockHeight) * blockHeight;
                        var expectedBytes = Math.ceil(w / blockWidth) * Math.ceil(h / blockHeight) * blockInfo.bytes;
                        if (view.byteLength < expectedBytes) {
                            var padded = new Uint8Array(expectedBytes);
                            padded.set(view);
                            view = padded;
                        }
                        glw.compressedTexImage2D(i, glInternalFormat, uploadW, uploadH, 0, view);
                        w = Math.max(1, w >> 1);
                        h = Math.max(1, h >> 1);
                    }
                    glw.texParameteri(glw.TEXTURE_WRAP_S, glw.CLAMP_TO_EDGE);
                    glw.texParameteri(glw.TEXTURE_WRAP_T, glw.CLAMP_TO_EDGE);
                    glw.texParameteri(glw.TEXTURE_MAG_FILTER, glw.LINEAR);
                    glw.texParameteri(glw.TEXTURE_MIN_FILTER, mipmaps.length > 1 ? glw.LINEAR_MIPMAP_LINEAR : glw.LINEAR);
                };
                loadPVR = function() {
                    var _ref20 = _asyncToGenerator(_regenerator().m(function _callee6(view) {
                        var pixelFormatLow, internalFormat, height, width, mipmapLevels, metadataSize, buffer, offset, mipmaps, block, i, declaredSize, max, start, end, bpp, computed, _computed;
                        return _regenerator().w(function(_context7) {
                            while (1) switch (_context7.n) {
                              case 0:
                                pixelFormatLow = view.getUint32(8, true);
                                internalFormat = PVR_TO_GL_INTERNAL_FORMAT[pixelFormatLow];
                                if (!(internalFormat === void 0)) {
                                    _context7.n = 1;
                                    break;
                                }
                                throw new Error("Unsupported PVR pixel format: 0x".concat(pixelFormatLow.toString(16)));

                              case 1:
                                height = view.getInt32(24, true);
                                width = view.getInt32(28, true);
                                if (!(width === 0 || height === 0)) {
                                    _context7.n = 2;
                                    break;
                                }
                                throw new Error("Invalid PVR texture dimensions: ".concat(width, "x").concat(height));

                              case 2:
                                mipmapLevels = view.getInt32(44, true);
                                metadataSize = view.getUint32(48, true);
                                buffer = view.buffer;
                                offset = 52 + metadataSize;
                                if (!(offset > buffer.byteLength)) {
                                    _context7.n = 3;
                                    break;
                                }
                                throw new Error("Invalid PVR file: metadata exceeds file size");

                              case 3:
                                mipmaps = [];
                                block = blockInfoMap[internalFormat];
                                i = 0;

                              case 4:
                                if (!(i < mipmapLevels)) {
                                    _context7.n = 8;
                                    break;
                                }
                                declaredSize = view.getUint32(offset, true);
                                max = buffer.byteLength - (offset + 4);
                                if (!(declaredSize > 0 && declaredSize <= max)) {
                                    _context7.n = 5;
                                    break;
                                }
                                offset += 4;
                                start = offset;
                                end = offset + declaredSize;
                                mipmaps.push(buffer.slice(start, end));
                                offset = end;
                                offset = offset + 3 & -4;
                                return _context7.a(3, 7);

                              case 5:
                                if (!(pixelFormatLow === 0 || pixelFormatLow === 1 || pixelFormatLow === 2 || pixelFormatLow === 3)) {
                                    _context7.n = 6;
                                    break;
                                }
                                bpp = pixelFormatLow === 0 || pixelFormatLow === 1 ? 2 : 4;
                                computed = pvrtcMipSize(width >> i, height >> i, bpp);
                                mipmaps.push(buffer.slice(offset, offset + computed));
                                offset += computed;
                                offset = offset + 3 & -4;
                                return _context7.a(3, 7);

                              case 6:
                                if (block !== void 0) {
                                    _computed = Math.ceil((width >> i) / block.width) * Math.ceil((height >> i) / block.height) * block.bytes;
                                    mipmaps.push(buffer.slice(offset, offset + _computed));
                                    offset += _computed;
                                    offset = offset + 3 & -4;
                                }

                              case 7:
                                i++;
                                _context7.n = 4;
                                break;

                              case 8:
                                return _context7.a(2, {
                                    data: {
                                        blockInfo: blockInfoMap[internalFormat],
                                        glInternalFormat: internalFormat,
                                        mipmaps: mipmaps,
                                        w: width,
                                        h: height,
                                        type: "pvr"
                                    },
                                    premultiplyAlpha: false
                                });
                            }
                        }, _callee6);
                    }));
                    return function loadPVR(_x7) {
                        return _ref20.apply(this, arguments);
                    };
                }();
                uploadPVR = function uploadPVR(glw, texture, data) {
                    var glInternalFormat = data.glInternalFormat, mipmaps = data.mipmaps, width = data.w, height = data.h;
                    ensureCompressedFormatEnabled(glw, glInternalFormat);
                    if (mipmaps === void 0) return;
                    glw.bindTexture(texture);
                    var w = width;
                    var h = height;
                    for (var i = 0; i < mipmaps.length; i++) {
                        glw.compressedTexImage2D(i, glInternalFormat, w, h, 0, new Uint8Array(mipmaps[i]));
                        w = Math.max(1, w >> 1);
                        h = Math.max(1, h >> 1);
                    }
                    glw.texParameteri(glw.TEXTURE_WRAP_S, glw.CLAMP_TO_EDGE);
                    glw.texParameteri(glw.TEXTURE_WRAP_T, glw.CLAMP_TO_EDGE);
                    glw.texParameteri(glw.TEXTURE_MAG_FILTER, glw.LINEAR);
                    glw.texParameteri(glw.TEXTURE_MIN_FILTER, mipmaps.length > 1 ? glw.LINEAR_MIPMAP_LINEAR : glw.LINEAR);
                };
                BLOCK_4x4x8 = {
                    width: 4,
                    height: 4,
                    bytes: 8
                };
                BLOCK_4x4x16 = {
                    width: 4,
                    height: 4,
                    bytes: 16
                };
                BLOCK_5x5x16 = {
                    width: 5,
                    height: 5,
                    bytes: 16
                };
                BLOCK_6x6x16 = {
                    width: 6,
                    height: 6,
                    bytes: 16
                };
                BLOCK_8x4x8 = {
                    width: 8,
                    height: 4,
                    bytes: 8
                };
                BLOCK_8x8x16 = {
                    width: 8,
                    height: 8,
                    bytes: 16
                };
                BLOCK_10x10x16 = {
                    width: 10,
                    height: 10,
                    bytes: 16
                };
                BLOCK_12x12x16 = {
                    width: 12,
                    height: 12,
                    bytes: 16
                };
                blockInfoMap = {
                    33776: BLOCK_4x4x8,
                    33777: BLOCK_4x4x8,
                    33778: BLOCK_4x4x16,
                    33779: BLOCK_4x4x16,
                    36196: BLOCK_4x4x8,
                    37492: BLOCK_4x4x8,
                    37493: BLOCK_4x4x8,
                    37496: BLOCK_4x4x16,
                    37497: BLOCK_4x4x16,
                    35840: BLOCK_4x4x8,
                    35842: BLOCK_4x4x8,
                    35841: BLOCK_8x4x8,
                    35843: BLOCK_8x4x8,
                    37808: BLOCK_4x4x16,
                    37840: BLOCK_4x4x16,
                    37809: BLOCK_5x5x16,
                    37841: BLOCK_5x5x16,
                    37810: BLOCK_6x6x16,
                    37842: BLOCK_6x6x16,
                    37811: BLOCK_8x8x16,
                    37843: BLOCK_8x8x16,
                    37812: BLOCK_10x10x16,
                    37844: BLOCK_10x10x16,
                    37813: BLOCK_12x12x16,
                    37845: BLOCK_12x12x16
                };
                _export("ft", uploadCompressedTexture = {
                    ktx: uploadKTX,
                    pvr: uploadPVR,
                    astc: uploadASTC
                });
                loadSvg = function() {
                    var _ref21 = _asyncToGenerator(_regenerator().m(function _callee7(url, width, height, sx, sy, sw, sh, pixelRatio) {
                        var img, targetW, targetH, ratio, physW, physH, canvas, ctx, _t3, _t4;
                        return _regenerator().w(function(_context8) {
                            while (1) switch (_context8.p = _context8.n) {
                              case 0:
                                img = new Image;
                                if (isBase64Image(url) === false) img.crossOrigin = "anonymous";
                                _context8.n = 1;
                                return new Promise(function(resolve, reject) {
                                    img.onload = function() {
                                        return resolve();
                                    };
                                    img.onerror = function(err) {
                                        reject(err instanceof Error ? err : new Error("SVG loading failed: ".concat(url)));
                                    };
                                    img.src = url;
                                });

                              case 1:
                                targetW = width || sw || img.naturalWidth || img.width;
                                targetH = height || sh || img.naturalHeight || img.height;
                                ratio = pixelRatio > 1 ? pixelRatio : 1;
                                physW = Math.max(1, Math.ceil(targetW * ratio));
                                physH = Math.max(1, Math.ceil(targetH * ratio));
                                canvas = document.createElement("canvas");
                                canvas.width = physW;
                                canvas.height = physH;
                                ctx = canvas.getContext("2d");
                                assertTruthy(ctx);
                                if (sw !== null && sh !== null) ctx.drawImage(img, sx !== null && sx !== void 0 ? sx : 0, sy !== null && sy !== void 0 ? sy : 0, sw, sh, 0, 0, physW, physH); else ctx.drawImage(img, 0, 0, physW, physH);
                                if (!(typeof createImageBitmap === "function")) {
                                    _context8.n = 5;
                                    break;
                                }
                                _context8.p = 2;
                                _context8.n = 3;
                                return createImageBitmap(canvas);

                              case 3:
                                _t3 = _context8.v;
                                return _context8.a(2, {
                                    data: _t3,
                                    premultiplyAlpha: false
                                });

                              case 4:
                                _context8.p = 4;
                                _t4 = _context8.v;

                              case 5:
                                return _context8.a(2, {
                                    data: ctx.getImageData(0, 0, physW, physH),
                                    premultiplyAlpha: true
                                });
                            }
                        }, _callee7, null, [ [ 2, 4 ] ]);
                    }));
                    return function loadSvg(_x8, _x9, _x0, _x1, _x10, _x11, _x12, _x13) {
                        return _ref21.apply(this, arguments);
                    };
                }();
                ImageTexture = function(_Texture2) {
                    function ImageTexture(txManager, props) {
                        var _this0;
                        _this0 = _callSuper(this, ImageTexture, [ txManager ]);
                        _this0.platform = void 0;
                        _this0.props = void 0;
                        _this0.type = TextureType.image;
                        _this0.platform = txManager.platform;
                        _this0.props = props;
                        _this0.maxRetryCount = props.maxRetryCount;
                        return _this0;
                    }
                    _inherits(ImageTexture, _Texture2);
                    return _createClass(ImageTexture, [ {
                        key: "hasAlphaChannel",
                        value: function hasAlphaChannel(mimeType) {
                            return mimeType.indexOf("image/png") !== -1;
                        }
                    }, {
                        key: "loadImageFallback",
                        value: function() {
                            var _loadImageFallback = _asyncToGenerator(_regenerator().m(function _callee8(src, hasAlpha) {
                                var img;
                                return _regenerator().w(function(_context9) {
                                    while (1) switch (_context9.n) {
                                      case 0:
                                        img = new Image;
                                        if (typeof src === "string" && isBase64Image(src) === false) img.crossOrigin = "anonymous";
                                        return _context9.a(2, new Promise(function(resolve, reject) {
                                            var objectUrl = null;
                                            var cleanup = function cleanup() {
                                                if (objectUrl !== null) {
                                                    URL.revokeObjectURL(objectUrl);
                                                    objectUrl = null;
                                                }
                                            };
                                            img.onload = function() {
                                                cleanup();
                                                resolve({
                                                    data: img,
                                                    premultiplyAlpha: hasAlpha
                                                });
                                            };
                                            img.onerror = function(err) {
                                                cleanup();
                                                var errorMessage = err instanceof Error ? err.message : err instanceof Event ? "Image loading failed for ".concat(img.src) : "Unknown image loading error";
                                                reject(new Error("Image loading failed: ".concat(errorMessage)));
                                            };
                                            if (src instanceof Blob) {
                                                objectUrl = URL.createObjectURL(src);
                                                img.src = objectUrl;
                                            } else img.src = src;
                                        }));
                                    }
                                }, _callee8);
                            }));
                            function loadImageFallback(_x14, _x15) {
                                return _loadImageFallback.apply(this, arguments);
                            }
                            return loadImageFallback;
                        }()
                    }, {
                        key: "createImageBitmap",
                        value: function() {
                            var _createImageBitmap = _asyncToGenerator(_regenerator().m(function _callee9(blob, premultiplyAlpha, sx, sy, sw, sh) {
                                var hasAlphaChannel, imageBitmapSupported, useGlPremultiply, bitmapMode, _t5, _t6, _t7, _t8, _t9, _t0;
                                return _regenerator().w(function(_context0) {
                                    while (1) switch (_context0.n) {
                                      case 0:
                                        hasAlphaChannel = premultiplyAlpha !== null && premultiplyAlpha !== void 0 ? premultiplyAlpha : blob.type.includes("image/png");
                                        imageBitmapSupported = this.txManager.imageBitmapSupported;
                                        useGlPremultiply = hasAlphaChannel === true && imageBitmapSupported.premultiplyHonored === false;
                                        bitmapMode = hasAlphaChannel === true && useGlPremultiply === false ? "premultiply" : "none";
                                        if (!(imageBitmapSupported.full === true && sw !== null && sh !== null)) {
                                            _context0.n = 2;
                                            break;
                                        }
                                        _context0.n = 1;
                                        return this.platform.createImageBitmap(blob, sx || 0, sy || 0, sw, sh, {
                                            premultiplyAlpha: bitmapMode,
                                            colorSpaceConversion: "none",
                                            imageOrientation: "none"
                                        });

                                      case 1:
                                        _t5 = _context0.v;
                                        _t6 = useGlPremultiply;
                                        return _context0.a(2, {
                                            data: _t5,
                                            premultiplyAlpha: _t6
                                        });

                                      case 2:
                                        if (!(imageBitmapSupported.options === false && imageBitmapSupported.full === false)) {
                                            _context0.n = 4;
                                            break;
                                        }
                                        _context0.n = 3;
                                        return this.platform.createImageBitmap(blob);

                                      case 3:
                                        _t7 = _context0.v;
                                        _t8 = useGlPremultiply;
                                        return _context0.a(2, {
                                            data: _t7,
                                            premultiplyAlpha: _t8
                                        });

                                      case 4:
                                        _context0.n = 5;
                                        return this.platform.createImageBitmap(blob, {
                                            premultiplyAlpha: bitmapMode,
                                            colorSpaceConversion: "none",
                                            imageOrientation: "none"
                                        });

                                      case 5:
                                        _t9 = _context0.v;
                                        _t0 = useGlPremultiply;
                                        return _context0.a(2, {
                                            data: _t9,
                                            premultiplyAlpha: _t0
                                        });
                                    }
                                }, _callee9, this);
                            }));
                            function createImageBitmap(_x16, _x17, _x18, _x19, _x20, _x21) {
                                return _createImageBitmap.apply(this, arguments);
                            }
                            return createImageBitmap;
                        }()
                    }, {
                        key: "loadImage",
                        value: function() {
                            var _loadImage = _asyncToGenerator(_regenerator().m(function _callee0(src) {
                                var _this$props2, premultiplyAlpha, sx, sy, sw, sh, isBase64, blob, _t1;
                                return _regenerator().w(function(_context1) {
                                    while (1) switch (_context1.n) {
                                      case 0:
                                        _this$props2 = this.props, premultiplyAlpha = _this$props2.premultiplyAlpha, sx = _this$props2.sx, 
                                        sy = _this$props2.sy, sw = _this$props2.sw, sh = _this$props2.sh;
                                        isBase64 = isBase64Image(src);
                                        if (!(this.txManager.hasCreateImageBitmap === true)) {
                                            _context1.n = 5;
                                            break;
                                        }
                                        if (!(isBase64 === false && this.txManager.hasWorker === true && this.txManager.imageWorkerManager !== null)) {
                                            _context1.n = 1;
                                            break;
                                        }
                                        return _context1.a(2, this.txManager.imageWorkerManager.getImage(src, premultiplyAlpha, sx, sy, sw, sh));

                                      case 1:
                                        if (!isBase64) {
                                            _context1.n = 2;
                                            break;
                                        }
                                        _t1 = dataURIToBlob(src);
                                        _context1.n = 4;
                                        break;

                                      case 2:
                                        _context1.n = 3;
                                        return fetchJson(src, "blob");

                                      case 3:
                                        _t1 = _context1.v;

                                      case 4:
                                        blob = _t1;
                                        return _context1.a(2, this.createImageBitmap(blob, premultiplyAlpha, sx, sy, sw, sh));

                                      case 5:
                                        return _context1.a(2, this.loadImageFallback(src, premultiplyAlpha !== null && premultiplyAlpha !== void 0 ? premultiplyAlpha : true));
                                    }
                                }, _callee0, this);
                            }));
                            function loadImage(_x22) {
                                return _loadImage.apply(this, arguments);
                            }
                            return loadImage;
                        }()
                    }, {
                        key: "getTextureSource",
                        value: function() {
                            var _getTextureSource2 = _asyncToGenerator(_regenerator().m(function _callee1() {
                                var _this$txManager$rende, _ref, _resp$premultiplyAlph, _this$props3, src, type, err, resp, _t10;
                                return _regenerator().w(function(_context10) {
                                    while (1) switch (_context10.p = _context10.n) {
                                      case 0:
                                        if (!(true && ((_this$txManager$rende = this.txManager.renderer) == null ? void 0 : _this$txManager$rende.mode) === "canvas")) {
                                            _context10.n = 1;
                                            break;
                                        }
                                        _this$props3 = this.props, src = _this$props3.src, type = _this$props3.type;
                                        if (!(type === "compressed" || typeof src === "string" && isCompressedTextureContainer(src) === true)) {
                                            _context10.n = 1;
                                            break;
                                        }
                                        err = new Error("ImageTexture: Compressed textures are not supported in Canvas2D render mode (src: ".concat(String(src), ")"));
                                        this.setState("failed", err);
                                        return _context10.a(2, {
                                            data: null
                                        });

                                      case 1:
                                        _context10.p = 1;
                                        _context10.n = 2;
                                        return this.determineImageTypeAndLoadImage();

                                      case 2:
                                        resp = _context10.v;
                                        _context10.n = 4;
                                        break;

                                      case 3:
                                        _context10.p = 3;
                                        _t10 = _context10.v;
                                        this.setState("failed", _t10);
                                        return _context10.a(2, {
                                            data: null
                                        });

                                      case 4:
                                        if (!(resp.data === null)) {
                                            _context10.n = 5;
                                            break;
                                        }
                                        this.setState("failed", Error("ImageTexture: No image data"));
                                        return _context10.a(2, {
                                            data: null
                                        });

                                      case 5:
                                        return _context10.a(2, {
                                            data: resp.data,
                                            premultiplyAlpha: (_ref = (_resp$premultiplyAlph = resp.premultiplyAlpha) !== null && _resp$premultiplyAlph !== void 0 ? _resp$premultiplyAlph : this.props.premultiplyAlpha) !== null && _ref !== void 0 ? _ref : true
                                        });
                                    }
                                }, _callee1, this, [ [ 1, 3 ] ]);
                            }));
                            function getTextureSource() {
                                return _getTextureSource2.apply(this, arguments);
                            }
                            return getTextureSource;
                        }()
                    }, {
                        key: "determineImageTypeAndLoadImage",
                        value: function determineImageTypeAndLoadImage() {
                            var _this$props4 = this.props, src = _this$props4.src, premultiplyAlpha = _this$props4.premultiplyAlpha, type = _this$props4.type;
                            if (src === null) return {
                                data: null
                            };
                            if (typeof src !== "string") {
                                if (src instanceof Blob) if (this.txManager.hasCreateImageBitmap === true) {
                                    var _this$props5 = this.props, sx = _this$props5.sx, sy = _this$props5.sy, sw = _this$props5.sw, sh = _this$props5.sh;
                                    return this.createImageBitmap(src, premultiplyAlpha, sx, sy, sw, sh);
                                } else return this.loadImageFallback(src, premultiplyAlpha !== null && premultiplyAlpha !== void 0 ? premultiplyAlpha : true);
                                if (src instanceof ImageData) return {
                                    data: src,
                                    premultiplyAlpha: premultiplyAlpha
                                };
                                return {
                                    data: src(),
                                    premultiplyAlpha: premultiplyAlpha
                                };
                            }
                            var absoluteSrc = convertUrlToAbsolute(src);
                            if (type === "regular") return this.loadImage(absoluteSrc);
                            if (type === "svg" || isSvgImage(src) === true) return loadSvg(absoluteSrc, this.props.w, this.props.h, this.props.sx, this.props.sy, this.props.sw, this.props.sh, this.txManager.pixelRatio);
                            if (true && (type === "compressed" || isCompressedTextureContainer(src) === true)) return loadCompressedTexture(absoluteSrc);
                            return this.loadImage(absoluteSrc);
                        }
                    } ], [ {
                        key: "makeCacheKey",
                        value: function makeCacheKey(props) {
                            var _props$premultiplyAlp, _props$maxRetryCount;
                            var key = props.key || props.src;
                            if (typeof key !== "string") return false;
                            var cacheKey = "ImageTexture,".concat(key, ",").concat((_props$premultiplyAlp = props.premultiplyAlpha) !== null && _props$premultiplyAlp !== void 0 ? _props$premultiplyAlp : true, ",").concat((_props$maxRetryCount = props.maxRetryCount) !== null && _props$maxRetryCount !== void 0 ? _props$maxRetryCount : 5);
                            if (props.sh != null && props.sw != null) {
                                var _props$sx, _props$sy;
                                cacheKey += ",".concat((_props$sx = props.sx) !== null && _props$sx !== void 0 ? _props$sx : "", ",").concat((_props$sy = props.sy) !== null && _props$sy !== void 0 ? _props$sy : "", ",").concat(props.sw || "", ",").concat(props.sh || "");
                            }
                            return cacheKey;
                        }
                    }, {
                        key: "resolveDefaults",
                        value: function resolveDefaults(props) {
                            var _props$src, _props$premultiplyAlp2, _props$key, _props$type, _props$w, _props$h, _props$sx2, _props$sy2, _props$sw, _props$sh, _props$maxRetryCount2;
                            return {
                                src: (_props$src = props.src) !== null && _props$src !== void 0 ? _props$src : "",
                                premultiplyAlpha: (_props$premultiplyAlp2 = props.premultiplyAlpha) !== null && _props$premultiplyAlp2 !== void 0 ? _props$premultiplyAlp2 : true,
                                key: (_props$key = props.key) !== null && _props$key !== void 0 ? _props$key : null,
                                type: (_props$type = props.type) !== null && _props$type !== void 0 ? _props$type : null,
                                w: (_props$w = props.w) !== null && _props$w !== void 0 ? _props$w : null,
                                h: (_props$h = props.h) !== null && _props$h !== void 0 ? _props$h : null,
                                sx: (_props$sx2 = props.sx) !== null && _props$sx2 !== void 0 ? _props$sx2 : null,
                                sy: (_props$sy2 = props.sy) !== null && _props$sy2 !== void 0 ? _props$sy2 : null,
                                sw: (_props$sw = props.sw) !== null && _props$sw !== void 0 ? _props$sw : null,
                                sh: (_props$sh = props.sh) !== null && _props$sh !== void 0 ? _props$sh : null,
                                maxRetryCount: (_props$maxRetryCount2 = props.maxRetryCount) !== null && _props$maxRetryCount2 !== void 0 ? _props$maxRetryCount2 : 5
                            };
                        }
                    } ]);
                }(Texture);
                ImageTexture.z$__type__Props = void 0;
                NoiseTexture = function(_Texture3) {
                    function NoiseTexture(txManager, props) {
                        var _this1;
                        _this1 = _callSuper(this, NoiseTexture, [ txManager ]);
                        _this1.props = void 0;
                        _this1.type = TextureType.noise;
                        _this1.props = props;
                        return _this1;
                    }
                    _inherits(NoiseTexture, _Texture3);
                    return _createClass(NoiseTexture, [ {
                        key: "getTextureSource",
                        value: function() {
                            var _getTextureSource3 = _asyncToGenerator(_regenerator().m(function _callee10() {
                                var _this$props6, w, h, size, pixelData8, i, v;
                                return _regenerator().w(function(_context11) {
                                    while (1) switch (_context11.n) {
                                      case 0:
                                        _this$props6 = this.props, w = _this$props6.w, h = _this$props6.h;
                                        size = w * h * 4;
                                        pixelData8 = new Uint8ClampedArray(size);
                                        for (i = 0; i < size; i += 4) {
                                            v = Math.floor(Math.random() * 256);
                                            pixelData8[i] = v;
                                            pixelData8[i + 1] = v;
                                            pixelData8[i + 2] = v;
                                            pixelData8[i + 3] = 255;
                                        }
                                        return _context11.a(2, {
                                            data: new ImageData(pixelData8, w, h)
                                        });
                                    }
                                }, _callee10, this);
                            }));
                            function getTextureSource() {
                                return _getTextureSource3.apply(this, arguments);
                            }
                            return getTextureSource;
                        }()
                    } ], [ {
                        key: "makeCacheKey",
                        value: function makeCacheKey(props) {
                            if (props.cacheId === void 0) return false;
                            var resolvedProps = NoiseTexture.resolveDefaults(props);
                            return "NoiseTexture,".concat(resolvedProps.w, ",").concat(resolvedProps.h, ",").concat(resolvedProps.cacheId);
                        }
                    }, {
                        key: "resolveDefaults",
                        value: function resolveDefaults(props) {
                            var _props$w, _props$h, _props$cacheId;
                            return {
                                w: (_props$w = props.w) !== null && _props$w !== void 0 ? _props$w : 128,
                                h: (_props$h = props.h) !== null && _props$h !== void 0 ? _props$h : 128,
                                cacheId: (_props$cacheId = props.cacheId) !== null && _props$cacheId !== void 0 ? _props$cacheId : 0
                            };
                        }
                    } ]);
                }(Texture);
                NoiseTexture.z$__type__Props = void 0;
                subTextureId = 0;
                SubTexture = function(_Texture4) {
                    function SubTexture(txManager, props) {
                        var _this10;
                        _this10 = _callSuper(this, SubTexture, [ txManager ]);
                        _this10.props = void 0;
                        _this10.parentTexture = void 0;
                        _this10.type = TextureType.subTexture;
                        _this10.subtextureId = "subtexture-".concat(subTextureId++);
                        _this10.onParentTxLoaded = function() {
                            _this10.setState("loaded", {
                                w: _this10.props.w,
                                h: _this10.props.h
                            });
                        };
                        _this10.onParentTxFailed = function(target, error) {
                            _this10.retryCount = _this10.parentTexture.retryCount - 1;
                            _this10.setState("failed", error);
                        };
                        _this10.onParentTxLoading = function() {
                            _this10.setState("loading");
                        };
                        _this10.onParentTxFreed = function() {
                            _this10.setState("freed");
                        };
                        _this10.props = props;
                        assertTruthy(_this10.props.texture, "SubTexture requires a parent texture");
                        assertTruthy(_this10.props.texture instanceof ImageTexture, "SubTexture requires an ImageTexture parent");
                        _this10.parentTexture = txManager.resolveParentTexture(_this10.props.texture);
                        if (_this10.renderableOwners.size > 0) _this10.parentTexture.setRenderableOwner(_this10.subtextureId, true);
                        queueMicrotask(function() {
                            var parentTx = _this10.parentTexture;
                            if (parentTx.state === "loaded" && parentTx.dimensions !== null) _this10.onParentTxLoaded(parentTx, parentTx.dimensions); else if (parentTx.state === "loading") _this10.onParentTxLoading(); else if (parentTx.state === "failed" && parentTx.error !== null) _this10.onParentTxFailed(parentTx, parentTx.error); else if (parentTx.state === "freed") _this10.onParentTxFreed();
                            parentTx.on("loading", _this10.onParentTxLoading);
                            parentTx.on("loaded", _this10.onParentTxLoaded);
                            parentTx.on("failed", _this10.onParentTxFailed);
                            parentTx.on("freed", _this10.onParentTxFreed);
                        });
                        return _this10;
                    }
                    _inherits(SubTexture, _Texture4);
                    return _createClass(SubTexture, [ {
                        key: "onChangeIsRenderable",
                        value: function onChangeIsRenderable(isRenderable) {
                            this.parentTexture.setRenderableOwner(this.subtextureId, isRenderable);
                        }
                    }, {
                        key: "destroy",
                        value: function destroy() {
                            var parentTx = this.parentTexture;
                            parentTx.off("loading", this.onParentTxLoading);
                            parentTx.off("loaded", this.onParentTxLoaded);
                            parentTx.off("failed", this.onParentTxFailed);
                            parentTx.off("freed", this.onParentTxFreed);
                            _superPropGet(SubTexture, "destroy", this, 3)([]);
                        }
                    }, {
                        key: "getTextureSource",
                        value: function() {
                            var _getTextureSource4 = _asyncToGenerator(_regenerator().m(function _callee11() {
                                var _this11 = this;
                                return _regenerator().w(function(_context12) {
                                    while (1) switch (_context12.n) {
                                      case 0:
                                        return _context12.a(2, new Promise(function(resolve, reject) {
                                            resolve({
                                                data: _this11.props
                                            });
                                        }));
                                    }
                                }, _callee11);
                            }));
                            function getTextureSource() {
                                return _getTextureSource4.apply(this, arguments);
                            }
                            return getTextureSource;
                        }()
                    } ], [ {
                        key: "makeCacheKey",
                        value: function makeCacheKey(props) {
                            return false;
                        }
                    }, {
                        key: "resolveDefaults",
                        value: function resolveDefaults(props) {
                            return {
                                texture: props.texture,
                                x: props.x || 0,
                                y: props.y || 0,
                                w: props.w || 0,
                                h: props.h || 0
                            };
                        }
                    } ]);
                }(Texture);
                SubTexture.z$__type__Props = void 0;
                STRAIGHT_ALPHA_TEST_PNG = new Uint8Array([ 137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, 0, 1, 0, 0, 0, 1, 8, 6, 0, 0, 0, 31, 21, 196, 137, 0, 0, 0, 13, 73, 68, 65, 84, 120, 156, 99, 248, 207, 192, 208, 0, 0, 4, 129, 1, 128, 44, 85, 206, 176, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130 ]);
                (function(TextureErrorCode) {
                    TextureErrorCode["MEMORY_THRESHOLD_EXCEEDED"] = "MEMORY_THRESHOLD_EXCEEDED";
                    TextureErrorCode["TEXTURE_DATA_NULL"] = "TEXTURE_DATA_NULL";
                    TextureErrorCode["TEXTURE_TYPE_NOT_REGISTERED"] = "TEXTURE_TYPE_NOT_REGISTERED";
                    TextureErrorCode["TEXTURE_UPLOAD_FAILED"] = "TEXTURE_UPLOAD_FAILED";
                })(TextureErrorCode || (TextureErrorCode = {}));
                defaultMessages = _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, TextureErrorCode.MEMORY_THRESHOLD_EXCEEDED, "Memory threshold exceeded"), TextureErrorCode.TEXTURE_DATA_NULL, "Texture data is null"), TextureErrorCode.TEXTURE_TYPE_NOT_REGISTERED, "Texture type is not registered"), TextureErrorCode.TEXTURE_UPLOAD_FAILED, "Texture upload failed");
                TextureError = function(_Error) {
                    function TextureError(codeOrMessage, maybeMessage) {
                        var _this12;
                        var isCode = Object.values(TextureErrorCode).includes(codeOrMessage);
                        var code = isCode ? codeOrMessage : void 0;
                        var message;
                        if (isCode && code) message = maybeMessage !== null && maybeMessage !== void 0 ? maybeMessage : defaultMessages[code]; else message = String(codeOrMessage);
                        _this12 = _callSuper(this, TextureError, [ message ]);
                        _this12.code = void 0;
                        _this12.name = (this instanceof TextureError ? this.constructor : void 0).name;
                        if (code) _this12.code = code;
                        return _this12;
                    }
                    _inherits(TextureError, _Error);
                    return _createClass(TextureError);
                }(_wrapNativeSuper(Error));
                TextureUploadQueue = function() {
                    function TextureUploadQueue() {
                        this.list = [];
                        this.membership = new Set;
                        this.head = 0;
                    }
                    return _createClass(TextureUploadQueue, [ {
                        key: "size",
                        get: function get() {
                            return this.membership.size;
                        }
                    }, {
                        key: "has",
                        value: function has(texture) {
                            return this.membership.has(texture);
                        }
                    }, {
                        key: "add",
                        value: function add(texture) {
                            if (this.membership.has(texture)) return;
                            this.membership.add(texture);
                            this.list.push(texture);
                        }
                    }, {
                        key: "delete",
                        value: function _delete(texture) {
                            return this.membership.delete(texture);
                        }
                    }, {
                        key: "shift",
                        value: function shift() {
                            var list = this.list;
                            var membership = this.membership;
                            while (this.head < list.length) {
                                var texture = list[this.head++];
                                if (membership.has(texture)) {
                                    membership.delete(texture);
                                    this.compactIfNeeded();
                                    return texture;
                                }
                            }
                            this.head = 0;
                            list.length = 0;
                        }
                    }, {
                        key: "compactIfNeeded",
                        value: function compactIfNeeded() {
                            if (this.head >= 64 && this.head >= this.list.length >> 1) {
                                this.list = this.list.slice(this.head);
                                this.head = 0;
                            }
                        }
                    } ]);
                }();
                ConcurrencyGate = function() {
                    function ConcurrencyGate(limit) {
                        this.limit = void 0;
                        this.inFlight = 0;
                        this.waiters = [];
                        this.limit = limit;
                    }
                    return _createClass(ConcurrencyGate, [ {
                        key: "acquire",
                        value: function acquire() {
                            var _this13 = this;
                            if (this.inFlight < this.limit) {
                                this.inFlight++;
                                return Promise.resolve();
                            }
                            return new Promise(function(resolve) {
                                _this13.waiters.push(resolve);
                            });
                        }
                    }, {
                        key: "release",
                        value: function release() {
                            var next = this.waiters.shift();
                            if (next !== void 0) {
                                next();
                                return;
                            }
                            this.inFlight--;
                        }
                    } ]);
                }();
                CoreTextureManager = function(_EventEmitter3) {
                    function CoreTextureManager(stage, settings) {
                        var _this14;
                        _this14 = _callSuper(this, CoreTextureManager);
                        _this14.keyCache = new Map;
                        _this14.txConstructors = {};
                        _this14.maxRetryCount = void 0;
                        _this14.uploadTextureQueue = new TextureUploadQueue;
                        _this14.pendingLoads = 0;
                        _this14.initialized = false;
                        _this14.stage = void 0;
                        _this14.numImageWorkers = void 0;
                        _this14.imageDecodeConcurrency = void 0;
                        _this14.decodeGate = null;
                        _this14.platform = void 0;
                        _this14.imageWorkerManager = null;
                        _this14.hasCreateImageBitmap = false;
                        _this14.imageBitmapSupported = {
                            basic: false,
                            options: false,
                            full: false,
                            premultiplyHonored: null
                        };
                        _this14.hasWorker = !!self.Worker;
                        _this14.renderer = void 0;
                        var numImageWorkers = settings.numImageWorkers, createImageBitmapSupport = settings.createImageBitmapSupport, premultiplyAlphaHonored = settings.premultiplyAlphaHonored, maxRetryCount = settings.maxRetryCount, imageDecodeConcurrency = settings.imageDecodeConcurrency;
                        _this14.stage = stage;
                        _this14.platform = stage.platform;
                        _this14.numImageWorkers = numImageWorkers;
                        _this14.maxRetryCount = maxRetryCount;
                        _this14.imageDecodeConcurrency = imageDecodeConcurrency;
                        if (createImageBitmapSupport === "auto") validateCreateImageBitmap(_this14.platform).then(function(result) {
                            _this14.resolvePremultiplyAndInit(result, premultiplyAlphaHonored);
                        }).catch(function() {
                            console.warn("[Lightning] createImageBitmap is not supported on this browser. ImageTexture will be slower.");
                            _this14.initialized = true;
                            _this14.emit("initialized");
                        }); else _this14.resolvePremultiplyAndInit({
                            basic: createImageBitmapSupport === "basic",
                            options: createImageBitmapSupport === "options",
                            full: createImageBitmapSupport === "full",
                            premultiplyHonored: null
                        }, premultiplyAlphaHonored);
                        _this14.registerTextureType("ImageTexture", ImageTexture);
                        _this14.registerTextureType("ColorTexture", ColorTexture);
                        _this14.registerTextureType("NoiseTexture", NoiseTexture);
                        _this14.registerTextureType("SubTexture", SubTexture);
                        return _this14;
                    }
                    _inherits(CoreTextureManager, _EventEmitter3);
                    return _createClass(CoreTextureManager, [ {
                        key: "pixelRatio",
                        get: function get() {
                            return this.stage.pixelRatio;
                        }
                    }, {
                        key: "registerTextureType",
                        value: function registerTextureType(textureType, textureClass) {
                            this.txConstructors[textureType] = textureClass;
                        }
                    }, {
                        key: "resolvePremultiplyAndInit",
                        value: function resolvePremultiplyAndInit(support, premultiplyAlphaHonored) {
                            var _this15 = this;
                            if (premultiplyAlphaHonored !== "auto") {
                                support.premultiplyHonored = premultiplyAlphaHonored;
                                this.initialize(support);
                                return;
                            }
                            if (support.options === false && support.full === false) {
                                support.premultiplyHonored = null;
                                this.initialize(support);
                                return;
                            }
                            detectPremultiplyAlphaHonored(this.platform).then(function(honored) {
                                support.premultiplyHonored = honored;
                                _this15.initialize(support);
                            }).catch(function() {
                                support.premultiplyHonored = null;
                                _this15.initialize(support);
                            });
                        }
                    }, {
                        key: "initialize",
                        value: function initialize(support) {
                            this.hasCreateImageBitmap = support.basic || support.options || support.full;
                            this.imageBitmapSupported = support;
                            if (support.premultiplyHonored === false) console.warn('[Lightning] createImageBitmap premultiplyAlpha:"premultiply" is not honored on this device and images may show alpha ghosting. GL-side premultiply fallback recommended.');
                            if (this.hasCreateImageBitmap === false) console.warn("[Lightning] createImageBitmap is not supported on this browser. ImageTexture will be slower.");
                            if (this.hasCreateImageBitmap === true && this.hasWorker === true && this.numImageWorkers > 0) this.imageWorkerManager = new ImageWorkerManager(this.numImageWorkers, support); else console.warn("[Lightning] Image worker count is 0 or workers are not supported on this browser. Image loading will be slower.");
                            if (this.imageWorkerManager === null && this.imageDecodeConcurrency > 0) this.decodeGate = new ConcurrencyGate(this.imageDecodeConcurrency);
                            this.initialized = true;
                            this.emit("initialized");
                            if (this.uploadTextureQueue.size > 0) this.processUntil(Infinity);
                        }
                    }, {
                        key: "enqueueUploadTexture",
                        value: function enqueueUploadTexture(texture) {
                            if (texture.state === "failed" || texture.state === "freed") return;
                            this.uploadTextureQueue.add(texture);
                        }
                    }, {
                        key: "createTexture",
                        value: function createTexture(textureType, props) {
                            var TextureClass = this.txConstructors[textureType];
                            if (!TextureClass) throw new TextureError(TextureErrorCode.TEXTURE_TYPE_NOT_REGISTERED, 'Texture type "'.concat(textureType, '" is not registered'));
                            var cacheKey = TextureClass.makeCacheKey(props);
                            if (cacheKey) {
                                var cached = this.keyCache.get(cacheKey);
                                if (cached) return cached;
                            }
                            var resolvedProps = TextureClass.resolveDefaults(props);
                            var texture = new TextureClass(this, resolvedProps);
                            if (cacheKey) this.initTextureToCache(texture, cacheKey);
                            return texture;
                        }
                    }, {
                        key: "loadTexture",
                        value: function() {
                            var _loadTexture = _asyncToGenerator(_regenerator().m(function _callee12(texture) {
                                var isImage, gate, textureDataResult;
                                return _regenerator().w(function(_context13) {
                                    while (1) switch (_context13.p = _context13.n) {
                                      case 0:
                                        if (!(texture.type === TextureType.subTexture)) {
                                            _context13.n = 1;
                                            break;
                                        }
                                        return _context13.a(2);

                                      case 1:
                                        if (!(texture.state === "loaded")) {
                                            _context13.n = 2;
                                            break;
                                        }
                                        return _context13.a(2);

                                      case 2:
                                        isImage = texture.type === TextureType.image;
                                        if (!(isImage === true && this.initialized === false)) {
                                            _context13.n = 3;
                                            break;
                                        }
                                        this.uploadTextureQueue.add(texture);
                                        return _context13.a(2);

                                      case 3:
                                        texture.setState("loading");
                                        this.pendingLoads++;
                                        _context13.p = 4;
                                        gate = isImage === true ? this.decodeGate : null;
                                        if (!(gate !== null)) {
                                            _context13.n = 5;
                                            break;
                                        }
                                        _context13.n = 5;
                                        return gate.acquire();

                                      case 5:
                                        _context13.p = 5;
                                        _context13.n = 6;
                                        return texture.getTextureData().catch(function(err) {
                                            console.error(err);
                                            texture.setState("failed", new TextureError(TextureErrorCode.TEXTURE_DATA_NULL));
                                            return null;
                                        });

                                      case 6:
                                        textureDataResult = _context13.v;

                                      case 7:
                                        _context13.p = 7;
                                        if (gate !== null) gate.release();
                                        return _context13.f(7);

                                      case 8:
                                        if (!(textureDataResult === null || texture.state === "failed")) {
                                            _context13.n = 9;
                                            break;
                                        }
                                        return _context13.a(2);

                                      case 9:
                                        if (!(isImage === false)) {
                                            _context13.n = 10;
                                            break;
                                        }
                                        this.uploadTexture(texture);
                                        return _context13.a(2);

                                      case 10:
                                        this.enqueueUploadTexture(texture);

                                      case 11:
                                        _context13.p = 11;
                                        this.pendingLoads--;
                                        return _context13.f(11);

                                      case 12:
                                        return _context13.a(2);
                                    }
                                }, _callee12, this, [ [ 5, , 7, 8 ], [ 4, , 11, 12 ] ]);
                            }));
                            function loadTexture(_x23) {
                                return _loadTexture.apply(this, arguments);
                            }
                            return loadTexture;
                        }()
                    }, {
                        key: "uploadTexture",
                        value: function uploadTexture(texture) {
                            if (this.stage.txMemManager.doNotExceedCriticalThreshold === true && this.stage.txMemManager.criticalCleanupRequested === true) {
                                texture.setState("failed", new TextureError(TextureErrorCode.MEMORY_THRESHOLD_EXCEEDED));
                                return false;
                            }
                            if (texture.state === "failed" || texture.state === "freed") return false;
                            if (texture.state === "loaded") return false;
                            if (texture.textureData === null) {
                                texture.setState("failed", new TextureError(TextureErrorCode.TEXTURE_DATA_NULL, "Texture data is null, cannot upload texture"));
                                return false;
                            }
                            var coreContext = texture.loadCtxTexture();
                            if (coreContext.state === "loaded") {
                                texture.setState("loaded");
                                return false;
                            }
                            coreContext.load();
                            return true;
                        }
                    }, {
                        key: "isProcessingTexture",
                        value: function isProcessingTexture(texture) {
                            return this.uploadTextureQueue.has(texture);
                        }
                    }, {
                        key: "processOne",
                        value: function processOne() {
                            if (this.initialized === false) return 0;
                            var texture = this.uploadTextureQueue.shift();
                            if (texture === void 0) return 0;
                            return this.uploadQueued(texture);
                        }
                    }, {
                        key: "processUntil",
                        value: function processUntil(maxProcessingTime) {
                            if (this.initialized === false) return 0;
                            var platform = this.platform;
                            var startTime = platform.getTimeStamp();
                            var uploaded = 0;
                            while (platform.getTimeStamp() - startTime < maxProcessingTime) {
                                var texture = this.uploadTextureQueue.shift();
                                if (texture === void 0) break;
                                uploaded += this.uploadQueued(texture);
                            }
                            return uploaded;
                        }
                    }, {
                        key: "uploadQueued",
                        value: function uploadQueued(texture) {
                            if (this.isTextureDead(texture)) return 0;
                            if (texture.textureData !== null) return this.uploadTexture(texture) === true ? 1 : 0;
                            this.refetchAndUpload(texture);
                            return 0;
                        }
                    }, {
                        key: "refetchAndUpload",
                        value: function refetchAndUpload(texture) {
                            var _this16 = this;
                            this.pendingLoads++;
                            var gate = texture.type === TextureType.image ? this.decodeGate : null;
                            (gate !== null ? gate.acquire().then(function() {
                                return texture.getTextureData();
                            }) : texture.getTextureData()).then(function() {
                                if (_this16.isTextureDead(texture) || texture.textureData === null) return;
                                _this16.uploadTexture(texture);
                            }).catch(function(error) {
                                console.error("Failed to upload texture:", error);
                            }).then(function() {
                                if (gate !== null) gate.release();
                                _this16.pendingLoads--;
                            });
                        }
                    }, {
                        key: "isTextureDead",
                        value: function isTextureDead(texture) {
                            return texture.state === "failed" || texture.state === "freed";
                        }
                    }, {
                        key: "hasUpdates",
                        value: function hasUpdates() {
                            return this.uploadTextureQueue.size > 0;
                        }
                    }, {
                        key: "uploadQueueSize",
                        get: function get() {
                            return this.uploadTextureQueue.size;
                        }
                    }, {
                        key: "hasPendingLoads",
                        value: function hasPendingLoads() {
                            return this.pendingLoads > 0;
                        }
                    }, {
                        key: "initTextureToCache",
                        value: function initTextureToCache(texture, cacheKey) {
                            this.keyCache.set(cacheKey, texture);
                            texture.cacheKey = cacheKey;
                        }
                    }, {
                        key: "getTextureFromCache",
                        value: function getTextureFromCache(cacheKey) {
                            return this.keyCache.get(cacheKey);
                        }
                    }, {
                        key: "removeTextureFromCache",
                        value: function removeTextureFromCache(texture) {
                            var cacheKey = texture.cacheKey;
                            if (cacheKey !== null) {
                                this.keyCache.delete(cacheKey);
                                texture.cacheKey = null;
                            }
                        }
                    }, {
                        key: "removeTextureFromQueue",
                        value: function removeTextureFromQueue(texture) {
                            this.uploadTextureQueue.delete(texture);
                        }
                    }, {
                        key: "resolveParentTexture",
                        value: function resolveParentTexture(texture) {
                            if (!(texture == null ? void 0 : texture.props)) return texture;
                            var cacheKey = ImageTexture.makeCacheKey(texture.props);
                            var cachedTexture = cacheKey ? this.getTextureFromCache(cacheKey) : void 0;
                            return cachedTexture !== null && cachedTexture !== void 0 ? cachedTexture : texture;
                        }
                    } ]);
                }(EventEmitter);
                _export("dt", CoreShaderNode = function() {
                    function CoreShaderNode(shaderKey, type, stage, props) {
                        this.shaderKey = void 0;
                        this.stage = void 0;
                        this.shaderType = void 0;
                        this.propsConfig = void 0;
                        this.resolvedProps = void 0;
                        this.definedProps = void 0;
                        this.node = null;
                        this.time = void 0;
                        this.update = void 0;
                        this.valueKey = "";
                        this._valueKeyCache = "";
                        this._valueKeyDirty = true;
                        this._lastW = 0;
                        this._lastH = 0;
                        this.shaderKey = shaderKey;
                        this.stage = stage;
                        this.shaderType = type;
                        this.time = type.time;
                        if (props !== void 0) {
                            this.resolvedProps = props;
                            this.defineProps(props);
                        }
                    }
                    return _createClass(CoreShaderNode, [ {
                        key: "defineProps",
                        value: function defineProps(props) {
                            var _this17 = this;
                            var definedProps = {};
                            var _loop5 = function _loop5(key) {
                                var propConfig = _this17.shaderType.props[key];
                                var isAdvancedProp = isAdvancedShaderProp(propConfig);
                                Object.defineProperty(definedProps, key, {
                                    get: function get() {
                                        return _this17.resolvedProps[key];
                                    },
                                    set: function set(value) {
                                        if (isAdvancedProp === true && propConfig.resolve !== void 0) _this17.resolvedProps[key] = propConfig.resolve(value, _this17.resolvedProps); else if (isAdvancedProp === true && propConfig.set !== void 0) propConfig.set(value, _this17.resolvedProps); else _this17.resolvedProps[key] = value;
                                        _this17._valueKeyDirty = true;
                                        if (_this17.update !== void 0 && _this17.node !== null) _this17.node.setUpdateType(UpdateType.RecalcUniforms); else _this17.stage.requestRender();
                                    }
                                });
                            };
                            for (var key in props) {
                                _loop5(key);
                            }
                            this.definedProps = definedProps;
                        }
                    }, {
                        key: "attachNode",
                        value: function attachNode(node) {
                            this.node = node;
                        }
                    }, {
                        key: "detachNode",
                        value: function detachNode() {
                            if (this.valueKey.length > 0) {
                                this.stage.shManager.mutateShaderValueUsage(this.valueKey, -1);
                                this.valueKey = "";
                            }
                            this.node = null;
                        }
                    }, {
                        key: "createValueKey",
                        value: function createValueKey() {
                            if (this._valueKeyDirty === false && this.node !== null && this.node.w === this._lastW && this.node.h === this._lastH) return this._valueKeyCache;
                            var valueKey = "";
                            for (var key in this.resolvedProps) valueKey += "".concat(key, ":").concat(this.resolvedProps[key], ";");
                            valueKey += "node-width:".concat(this.node.w);
                            valueKey += "node-height:".concat(this.node.h);
                            this._valueKeyCache = valueKey;
                            this._valueKeyDirty = false;
                            this._lastW = this.node.w;
                            this._lastH = this.node.h;
                            return valueKey;
                        }
                    }, {
                        key: "props",
                        get: function get() {
                            return this.definedProps;
                        },
                        set: function set(props) {
                            if (props === void 0) return;
                            for (var key in props) this.props[key] = props[key];
                        }
                    } ]);
                }());
                CoreShaderManager = function() {
                    function CoreShaderManager(stage) {
                        this.stage = void 0;
                        this.shTypes = {};
                        this.shCache = new Map;
                        this.valuesCache = new Map;
                        this.valuesCacheUsage = new Map;
                        this.stage = stage;
                    }
                    return _createClass(CoreShaderManager, [ {
                        key: "registerShaderType",
                        value: function registerShaderType(name, shType) {
                            if (this.shTypes[name] !== void 0) {
                                console.warn("ShaderType already exists with the name: ".concat(name, ". Breaking off registration."));
                                return;
                            }
                            if (this.stage.renderer.supportsShaderType(shType) === false) {
                                console.warn("The renderer being used does not support this shader type. Breaking off registration.");
                                return;
                            }
                            this.shTypes[name] = shType;
                        }
                    }, {
                        key: "createShader",
                        value: function createShader(name, props) {
                            var shType = this.shTypes[name];
                            if (shType === void 0) {
                                console.warn("ShaderType not found falling back on renderer default shader");
                                return this.stage.defShaderNode;
                            }
                            var shaderKey = name;
                            if (shType.props !== void 0) {
                                props = props || {};
                                resolveShaderProps(props, shType.props);
                                if (shType.getCacheMarkers !== void 0) shaderKey += "-".concat(shType.getCacheMarkers(props));
                            }
                            if (this.stage.renderer.mode === "canvas") return this.stage.renderer.createShaderNode(shaderKey, shType, props);
                            var shProgram = this.shCache.get(shaderKey);
                            if (shProgram === void 0) try {
                                shProgram = this.stage.renderer.createShaderProgram(shType, props);
                                this.shCache.set(shaderKey, shProgram);
                            } catch (e) {
                                if (this.stage.isContextLost === true) return this.stage.defShaderNode;
                                throw e;
                            }
                            return this.stage.renderer.createShaderNode(shaderKey, shType, props, shProgram);
                        }
                    }, {
                        key: "mutateShaderValueUsage",
                        value: function mutateShaderValueUsage(key, mutation) {
                            var usage = this.valuesCacheUsage.get(key) || 0;
                            this.valuesCacheUsage.set(key, usage + mutation);
                        }
                    }, {
                        key: "getShaderValues",
                        value: function getShaderValues(key) {
                            var values = this.valuesCache.get(key);
                            if (values === void 0) return;
                            this.mutateShaderValueUsage(key, 1);
                            return values;
                        }
                    }, {
                        key: "setShaderValues",
                        value: function setShaderValues(key, values) {
                            this.valuesCache.set(key, values);
                            this.mutateShaderValueUsage(key, 1);
                        }
                    }, {
                        key: "cleanup",
                        value: function cleanup() {
                            var values = _toConsumableArray(this.valuesCacheUsage.entries()).sort(function(entryA, entryB) {
                                if (entryA[1] < entryB[1]) return -1; else if (entryA[1] > entryB[1]) return 1;
                                return 0;
                            });
                            for (var i = 0; i < values.length; i++) {
                                if (values[i][1] > 0) break;
                                this.valuesCacheUsage.delete(values[i][0]);
                                this.valuesCache.delete(values[i][0]);
                            }
                        }
                    } ]);
                }();
                spaceRegex = /[ \u200B]+/g;
                _export("ct", defaultFontMetrics = {
                    ascender: 800,
                    descender: -200,
                    lineGap: 200,
                    unitsPerEm: 1e3
                });
                CAP_HEIGHT_FALLBACK_RATIO = .7;
                X_HEIGHT_FALLBACK_RATIO = .5;
                _export("ut", normalizeFontMetrics = function normalizeFontMetrics(metrics, fontSize) {
                    var scale = fontSize / metrics.unitsPerEm;
                    var capHeightUnits = metrics.capHeight !== void 0 ? metrics.capHeight : metrics.ascender * CAP_HEIGHT_FALLBACK_RATIO;
                    var xHeightUnits = metrics.xHeight !== void 0 ? metrics.xHeight : metrics.ascender * X_HEIGHT_FALLBACK_RATIO;
                    return {
                        ascender: metrics.ascender * scale,
                        descender: metrics.descender * scale,
                        lineGap: metrics.lineGap * scale,
                        capHeight: capHeightUnits * scale,
                        xHeight: xHeightUnits * scale
                    };
                });
                baselineMode = "optical";
                setBaselineMode = function setBaselineMode(mode) {
                    baselineMode = mode;
                };
                _export("lt", mapTextLayout = function mapTextLayout(measureText, metrics, text, textAlign, fontFamily, lineHeight, overflowSuffix, wordBreak, letterSpacing, maxLines, maxWidth, maxHeight) {
                    var bareLineHeight = metrics.ascender - metrics.descender + metrics.lineGap;
                    var lineHeightPx = lineHeight <= 3 ? lineHeight * bareLineHeight : lineHeight;
                    var effectiveMaxLines = maxLines;
                    if (maxHeight > 0) {
                        var maxFromHeight = Math.floor(maxHeight / lineHeightPx);
                        if (maxFromHeight < 1) maxFromHeight = 1;
                        if (effectiveMaxLines === 0 || maxFromHeight < effectiveMaxLines) effectiveMaxLines = maxFromHeight;
                    }
                    var _ref22 = maxWidth > 0 === true ? wrapText(measureText, text, fontFamily, maxWidth, letterSpacing, overflowSuffix, wordBreak, effectiveMaxLines) : measureLines(measureText, text.split("\n"), fontFamily, letterSpacing, effectiveMaxLines), _ref23 = _slicedToArray(_ref22, 3), lines = _ref23[0], remainingLines = _ref23[1], remainingText = _ref23[2];
                    var effectiveLineAmount = lines.length;
                    var effectiveMaxWidth = 0;
                    if (letterSpacing !== 0) for (var i = 0; i < effectiveLineAmount; i++) {
                        var line = lines[i];
                        if (line[0].length > 0) line[1] -= letterSpacing;
                    }
                    if (effectiveLineAmount > 0) {
                        effectiveMaxWidth = lines[0][1];
                        if (effectiveLineAmount > 1) for (var _i10 = 1; _i10 < effectiveLineAmount; _i10++) effectiveMaxWidth = Math.max(effectiveMaxWidth, lines[_i10][1]);
                    }
                    if (textAlign !== "left") for (var _i11 = 0; _i11 < effectiveLineAmount; _i11++) {
                        var _line = lines[_i11];
                        var w = _line[1];
                        _line[3] = textAlign === "right" ? effectiveMaxWidth - w : (effectiveMaxWidth - w) / 2;
                    }
                    var effectiveMaxHeight = effectiveLineAmount * lineHeightPx;
                    var firstBaselineY;
                    if (baselineMode === "cap") firstBaselineY = (lineHeightPx + metrics.capHeight) * .5; else if (baselineMode === "x") firstBaselineY = (lineHeightPx + metrics.xHeight) * .5; else if (baselineMode === "linebox") firstBaselineY = (lineHeightPx - bareLineHeight) * .5 + metrics.ascender; else firstBaselineY = (lineHeightPx + (metrics.capHeight + metrics.xHeight) * .5) * .5;
                    for (var _i12 = 0; _i12 < effectiveLineAmount; _i12++) {
                        var _line2 = lines[_i12];
                        _line2[4] = firstBaselineY + lineHeightPx * _i12;
                    }
                    return [ lines, remainingLines, remainingText, bareLineHeight, lineHeightPx, effectiveMaxWidth, effectiveMaxHeight ];
                });
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
                        var _ref24 = line.length > 0 ? wrapLine(measureText, line, fontFamily, maxWidth, letterSpacing, spaceWidth, overflowSuffix, overflowWidth, wordBreak, remainingLines) : [ [ [ "", 0, false, 0, 0 ] ], remainingLines, i < lines.length - 1 ];
                        var _ref25 = _slicedToArray(_ref24, 3);
                        wrappedLine = _ref25[0];
                        remainingLines = _ref25[1];
                        hasRemainingText = _ref25[2];
                        remainingLines--;
                        for (var j = 0; j < wrappedLine.length; j++) wrappedLines.push(wrappedLine[j]);
                        if (hasMaxLines === true && remainingLines <= 0) {
                            var lastLine = wrappedLines[wrappedLines.length - 1];
                            if (i < lines.length - 1) {
                                if (lastLine[2] === false) {
                                    var _truncateLineEnd = truncateLineEnd(measureText, fontFamily, letterSpacing, lastLine[0], lastLine[1], "", maxWidth, overflowSuffix, overflowWidth), _truncateLineEnd2 = _slicedToArray(_truncateLineEnd, 2), _line3 = _truncateLineEnd2[0], lineWidth = _truncateLineEnd2[1];
                                    lastLine[0] = _line3;
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
                    if (words[0] === "" && words.length > 1) {
                        var _spaces$shift, _words$;
                        var leadingSpace = (_spaces$shift = spaces.shift()) !== null && _spaces$shift !== void 0 ? _spaces$shift : "";
                        words.shift();
                        words[0] = leadingSpace + ((_words$ = words[0]) !== null && _words$ !== void 0 ? _words$ : "");
                    }
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
                                var _ref26 = isLastLine ? truncateWord(measureText, word, wordWidth, maxWidth, fontFamily, letterSpacing, overflowSuffix, overflowWidth) : splitWord(measureText, word, wordWidth, maxWidth, fontFamily, letterSpacing);
                                var _ref27 = _slicedToArray(_ref26, 3);
                                word = _ref27[0];
                                remainingWord = _ref27[1];
                                wordWidth = _ref27[2];
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
                        var effectiveSpaceWidth = space === " " ? spaceWidth : space.length > 0 ? measureText(space, fontFamily, letterSpacing) : 0;
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
                    var _ref28 = truncate ? truncateWord(measureText, word, wordWidth, remainingSpace, fontFamily, letterSpacing, overflowSuffix, overflowWidth) : splitWord(measureText, word, wordWidth, remainingSpace, fontFamily, letterSpacing);
                    var _ref29 = _slicedToArray(_ref28, 3);
                    word = _ref29[0];
                    remainingWord = _ref29[1];
                    wordWidth = _ref29[2];
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
                    for (var _i13 = 0; _i13 < word.length; _i13++) {
                        var _charWidth = measureText(word.charAt(_i13), fontFamily, letterSpacing);
                        if (currentWidth + _charWidth > targetWidth) {
                            var _remainingWord = word.substring(_i13);
                            return [ word.substring(0, _i13) + overflowSuffix, _remainingWord, currentWidth + overflowWidth ];
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
                    for (var _i14 = 0; _i14 < word.length; _i14++) {
                        var _charWidth2 = measureText(word.charAt(_i14), fontFamily, letterSpacing);
                        if (currentWidth + _charWidth2 > maxWidth) {
                            var _remainingWord2 = word.substring(_i14);
                            return [ word.substring(0, _i14), _remainingWord2, currentWidth ];
                        }
                        currentWidth += _charWidth2;
                    }
                    return [ word, "", wordWidth ];
                };
                ContextSpy = function() {
                    function ContextSpy() {
                        this.data = {};
                    }
                    return _createClass(ContextSpy, [ {
                        key: "reset",
                        value: function reset() {
                            this.data = {};
                        }
                    }, {
                        key: "increment",
                        value: function increment(name) {
                            if (!this.data[name]) this.data[name] = 0;
                            this.data[name]++;
                        }
                    }, {
                        key: "getData",
                        value: function getData() {
                            return _objectSpread({}, this.data);
                        }
                    } ]);
                }();
                TextureMemoryManager = function() {
                    function TextureMemoryManager(stage, settings) {
                        this.stage = void 0;
                        this.memUsed = 0;
                        this.loadedTextures = new Set;
                        this.criticalThreshold = 124e6;
                        this.targetThreshold = .5;
                        this.cleanupInterval = 5e3;
                        this.debugLogging = false;
                        this.loggingID = 0;
                        this.lastCleanupTime = -Infinity;
                        this.baselineMemoryAllocation = 26e6;
                        this.hasWarnedAboveCritical = false;
                        this.criticalCleanupRequested = false;
                        this.doNotExceedCriticalThreshold = false;
                        this.frameTime = 0;
                        this.stage = stage;
                        this.updateSettings(settings);
                    }
                    return _createClass(TextureMemoryManager, [ {
                        key: "setTextureMemUse",
                        value: function setTextureMemUse(texture, byteSize) {
                            this.memUsed -= texture.memUsed;
                            if (byteSize === 0) {
                                this.loadedTextures.delete(texture);
                                texture.memUsed = 0;
                                return;
                            } else {
                                texture.memUsed = byteSize;
                                this.memUsed += byteSize;
                                this.loadedTextures.add(texture);
                            }
                            if (this.criticalThreshold > 0 && this.memUsed > this.criticalThreshold) this.criticalCleanupRequested = true;
                        }
                    }, {
                        key: "checkCleanup",
                        value: function checkCleanup() {
                            return this.criticalCleanupRequested || this.criticalThreshold > 0 && this.memUsed > this.targetThreshold && this.frameTime - this.lastCleanupTime >= this.cleanupInterval;
                        }
                    }, {
                        key: "checkCriticalCleanup",
                        value: function checkCriticalCleanup() {
                            return this.criticalThreshold > 0 && this.memUsed > this.criticalThreshold;
                        }
                    }, {
                        key: "freeTexture",
                        value: function freeTexture(texture) {
                            if (this.debugLogging === true) console.log("[TextureMemoryManager] Freeing texture. State: ".concat(texture.state));
                            texture.free();
                            if (this.loadedTextures.has(texture) === true) {
                                this.loadedTextures.delete(texture);
                                this.memUsed -= texture.memUsed;
                                texture.memUsed = 0;
                            }
                        }
                    }, {
                        key: "destroyTexture",
                        value: function destroyTexture(texture) {
                            if (this.debugLogging === true) console.log("[TextureMemoryManager] Destroying texture. State: ".concat(texture.state));
                            this.loadedTextures.delete(texture);
                            var txManager = this.stage.txManager;
                            txManager.removeTextureFromCache(texture);
                            txManager.removeTextureFromQueue(texture);
                            texture.destroy();
                            this.memUsed -= texture.memUsed;
                            texture.memUsed = 0;
                        }
                    }, {
                        key: "cleanup",
                        value: function cleanup() {
                            var full = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                            var critical = this.criticalCleanupRequested;
                            this.lastCleanupTime = this.frameTime;
                            if (critical === true) this.stage.queueFrameEvent("criticalCleanup", {
                                memUsed: this.memUsed,
                                criticalThreshold: this.criticalThreshold
                            });
                            if (this.debugLogging === true) console.log("[TextureMemoryManager] Cleaning up textures. Critical: ".concat(critical, ". Full: ").concat(full));
                            var memTarget = critical ? this.criticalThreshold : this.targetThreshold;
                            var currentMemUsed = this.memUsed;
                            var _iterator13 = _createForOfIteratorHelper(this.loadedTextures), _step13;
                            try {
                                for (_iterator13.s(); !(_step13 = _iterator13.n()).done; ) {
                                    var texture = _step13.value;
                                    if (full === false && currentMemUsed < memTarget) break;
                                    if ((texture.type === TextureType.image || texture.type === TextureType.noise) && texture.canBeCleanedUp() === true) {
                                        var textureMemory = texture.memUsed;
                                        this.freeTexture(texture);
                                        currentMemUsed -= textureMemory;
                                    }
                                }
                            } catch (err) {
                                _iterator13.e(err);
                            } finally {
                                _iterator13.f();
                            }
                            this.evictOrphanedTextures();
                            if (this.memUsed >= this.criticalThreshold) {
                                this.stage.queueFrameEvent("criticalCleanupFailed", {
                                    memUsed: this.memUsed,
                                    criticalThreshold: this.criticalThreshold
                                });
                                if (!this.hasWarnedAboveCritical && (this.debugLogging === true || true === false)) {
                                    console.warn("[TextureMemoryManager] Memory usage above critical threshold after cleanup: ".concat(this.memUsed));
                                    this.hasWarnedAboveCritical = true;
                                }
                            } else {
                                this.criticalCleanupRequested = false;
                                this.hasWarnedAboveCritical = false;
                            }
                        }
                    }, {
                        key: "evictOrphanedTextures",
                        value: function evictOrphanedTextures() {
                            var keyCache = this.stage.txManager.keyCache;
                            var _iterator14 = _createForOfIteratorHelper(keyCache.values()), _step14;
                            try {
                                for (_iterator14.s(); !(_step14 = _iterator14.n()).done; ) {
                                    var texture = _step14.value;
                                    var state = texture.state;
                                    if ((state === "freed" || (state === "initial" || state === "failed") && texture.isWithinStartupGracePeriod() === false) === true && texture.preventCleanup === false && texture.renderableOwners.size === 0 && texture.hasListeners() === false) this.destroyTexture(texture);
                                }
                            } catch (err) {
                                _iterator14.e(err);
                            } finally {
                                _iterator14.f();
                            }
                        }
                    }, {
                        key: "getMemoryInfo",
                        value: function getMemoryInfo() {
                            var renderableTexturesLoaded = 0;
                            var renderableMemUsed = this.baselineMemoryAllocation;
                            var _iterator15 = _createForOfIteratorHelper(this.loadedTextures), _step15;
                            try {
                                for (_iterator15.s(); !(_step15 = _iterator15.n()).done; ) {
                                    var texture = _step15.value;
                                    if (texture && texture.renderable) {
                                        renderableTexturesLoaded += 1;
                                        renderableMemUsed += texture.memUsed;
                                    }
                                }
                            } catch (err) {
                                _iterator15.e(err);
                            } finally {
                                _iterator15.f();
                            }
                            var actualLoadedTextures = this.loadedTextures.size;
                            return {
                                criticalThreshold: this.criticalThreshold,
                                targetThreshold: this.targetThreshold,
                                renderableMemUsed: renderableMemUsed,
                                memUsed: this.memUsed,
                                renderableTexturesLoaded: renderableTexturesLoaded,
                                loadedTextures: actualLoadedTextures,
                                baselineMemoryAllocation: this.baselineMemoryAllocation
                            };
                        }
                    }, {
                        key: "updateSettings",
                        value: function updateSettings(settings) {
                            var _this18 = this;
                            var criticalThreshold = settings.criticalThreshold, doNotExceedCriticalThreshold = settings.doNotExceedCriticalThreshold;
                            this.doNotExceedCriticalThreshold = doNotExceedCriticalThreshold || false;
                            this.criticalThreshold = Math.round(criticalThreshold);
                            if (this.memUsed === 0) this.memUsed = Math.round(settings.baselineMemoryAllocation); else {
                                var memUsedExBaseline = this.memUsed - this.baselineMemoryAllocation;
                                this.memUsed = Math.round(settings.baselineMemoryAllocation + memUsedExBaseline);
                            }
                            this.baselineMemoryAllocation = Math.round(settings.baselineMemoryAllocation);
                            var targetFraction = Math.max(0, Math.min(1, settings.targetThresholdLevel));
                            this.targetThreshold = Math.max(Math.round(criticalThreshold * targetFraction), this.baselineMemoryAllocation);
                            this.cleanupInterval = settings.cleanupInterval;
                            this.debugLogging = settings.debugLogging;
                            if (this.loggingID && !settings.debugLogging) {
                                clearInterval(this.loggingID);
                                this.loggingID = 0;
                            }
                            if (settings.debugLogging && !this.loggingID) {
                                var lastMemUse = 0;
                                this.loggingID = setInterval(function() {
                                    if (lastMemUse !== _this18.memUsed) {
                                        lastMemUse = _this18.memUsed;
                                        console.log("[TextureMemoryManager] Memory used: ".concat(bytesToMb(_this18.memUsed), " mb / ").concat(bytesToMb(_this18.criticalThreshold), " mb (").concat((_this18.memUsed / _this18.criticalThreshold * 100).toFixed(1), "%)"));
                                    }
                                }, 1e3);
                            }
                            if (criticalThreshold === 0) this.setTextureMemUse = function() {};
                        }
                    }, {
                        key: "handleOutOfMemory",
                        value: function handleOutOfMemory() {
                            this.stage.queueFrameEvent("outOfMemory", {
                                memUsed: this.memUsed,
                                criticalThreshold: this.criticalThreshold
                            });
                            this.criticalCleanupRequested = true;
                        }
                    } ]);
                }();
                (function(TextConstraint) {
                    TextConstraint[TextConstraint["none"] = 0] = "none";
                    TextConstraint[TextConstraint["width"] = 1] = "width";
                    TextConstraint[TextConstraint["height"] = 2] = "height";
                    TextConstraint[TextConstraint["both"] = 3] = "both";
                })(TextConstraint || (TextConstraint = {}));
                CoreTextNode = function(_CoreNode) {
                    function CoreTextNode(stage, props, textRenderer) {
                        var _this19;
                        _this19 = _callSuper(this, CoreTextNode, [ stage, props ]);
                        _this19.textRenderer = void 0;
                        _this19.fontHandler = void 0;
                        _this19._layoutGenerated = false;
                        _this19._waitingForFont = false;
                        _this19._containType = TextConstraint.none;
                        _this19._cachedLayout = null;
                        _this19._sdfCache = {
                            vertices: null,
                            glyphCount: 0,
                            color: 0,
                            ta: 0,
                            tc: 0,
                            tb: 0,
                            td: 0,
                            tx: 0,
                            ty: 0,
                            layoutRef: null,
                            lastDx: 0,
                            lastDy: 0
                        };
                        _this19.textProps = void 0;
                        _this19._renderInfo = {
                            width: 0,
                            height: 0
                        };
                        _this19._type = "sdf";
                        _this19.onTextureLoaded = function(_, dimensions) {
                            if (dimensions.w > 1 && dimensions.h > 1) _this19.emit("loaded", {
                                type: "texture",
                                dimensions: dimensions
                            });
                            _this19.textureLoaded = true;
                            _this19.setUpdateType(UpdateType.IsRenderable);
                        };
                        _this19.emitTextLoadedEvent = function() {
                            _this19.emit("loaded", {
                                type: "text",
                                dimensions: {
                                    w: _this19._renderInfo.width,
                                    h: _this19._renderInfo.height
                                }
                            });
                        };
                        _this19.textRenderer = textRenderer;
                        _this19.fontHandler = textRenderer.font;
                        _this19._type = textRenderer.type;
                        _this19.textProps = props;
                        _this19._containType = TextConstraint[props.contain];
                        _this19.setUpdateType(UpdateType.All);
                        return _this19;
                    }
                    _inherits(CoreTextNode, _CoreNode);
                    return _createClass(CoreTextNode, [ {
                        key: "applyAutosizeDimensions",
                        value: function applyAutosizeDimensions() {}
                    }, {
                        key: "allowTextGeneration",
                        value: function allowTextGeneration() {
                            var p = this.props.parent;
                            if (p === null) return false;
                            if (p.worldAlpha > 0 && p.renderState > CoreNodeRenderState.OutOfBounds) return true;
                            return false;
                        }
                    }, {
                        key: "updateLocalTransform",
                        value: function updateLocalTransform() {
                            var p = this.props;
                            var x = p.x, y = p.y, w = p.w, h = p.h;
                            var mountX = p.mountX;
                            var mountY = p.mountY;
                            var mountTranslateX = p.mountX * w;
                            var mountTranslateY = p.mountY * h;
                            var _this$textProps = this.textProps, textAlign = _this$textProps.textAlign, verticalAlign = _this$textProps.verticalAlign, maxWidth = _this$textProps.maxWidth, maxHeight = _this$textProps.maxHeight;
                            var contain = this._containType;
                            var hasMaxWidth = maxWidth > 0;
                            var hasMaxHeight = maxHeight > 0;
                            var containX = 0;
                            var containY = 0;
                            if (contain > 0 && (hasMaxWidth || hasMaxHeight)) {
                                if (contain & TextConstraint.width && hasMaxWidth === true) {
                                    if (textAlign === "right") containX = maxWidth - w; else if (textAlign === "center") containX = (maxWidth - w) * .5;
                                    mountTranslateX = mountX * maxWidth;
                                }
                                if (contain & TextConstraint.height && hasMaxHeight === true) mountTranslateY = mountY * maxHeight;
                            }
                            var intrinsicH = this._renderInfo.height;
                            var slackY = (hasMaxHeight === true ? maxHeight : h) - intrinsicH;
                            if (slackY > 0) {
                                if (verticalAlign === "bottom") containY = slackY; else if (verticalAlign === "middle") containY = slackY * .5;
                            }
                            if (p.rotation !== 0 || p.scaleX !== 1 || p.scaleY !== 1) {
                                var scaleRotate = Matrix3d.rotate(p.rotation, Matrix3d.temp).scale(p.scaleX, p.scaleY);
                                var pivotW = contain & TextConstraint.width && maxWidth > 0 ? maxWidth : w;
                                var pivotH = contain & TextConstraint.height && maxHeight > 0 ? maxHeight : h;
                                var pivotTranslateX = p.pivotX * pivotW;
                                var pivotTranslateY = p.pivotY * pivotH;
                                this.localTransform = Matrix3d.translate(x - mountTranslateX + pivotTranslateX, y - mountTranslateY + pivotTranslateY, this.localTransform).multiply(scaleRotate).translate(-pivotTranslateX, -pivotTranslateY);
                            } else this.localTransform = Matrix3d.translate(x - mountTranslateX, y - mountTranslateY, this.localTransform);
                            if (containX !== 0 || containY !== 0) this.localTransform.translate(containX, containY);
                        }
                    }, {
                        key: "update",
                        value: function update(delta, parentClippingRect) {
                            if (this._layoutGenerated === false && (this.textProps.forceLoad === true || this.allowTextGeneration() === true)) {
                                if (this.fontHandler.isFontLoaded(this.textProps.fontFamily) === true) {
                                    this._waitingForFont = false;
                                    this._cachedLayout = null;
                                    var resp = this.textRenderer.renderText(this.textProps);
                                    this.handleRenderResult(resp);
                                    this._layoutGenerated = true;
                                } else if (this._waitingForFont === false) {
                                    this.fontHandler.waitingForFont(this.textProps.fontFamily, this);
                                    this._waitingForFont = true;
                                }
                            }
                            _superPropGet(CoreTextNode, "update", this, 3)([ delta, parentClippingRect ]);
                        }
                    }, {
                        key: "updateIsRenderable",
                        value: function updateIsRenderable() {
                            if (this._type === "canvas") {
                                _superPropGet(CoreTextNode, "updateIsRenderable", this, 3)([]);
                                return;
                            }
                            this.setRenderable(this.checkBasicRenderability() === true && this._cachedLayout !== null && this.renderState === CoreNodeRenderState.InViewport);
                        }
                    }, {
                        key: "handleRenderResult",
                        value: function handleRenderResult(result) {
                            var textRendererType = this._type;
                            var width = result.width;
                            var height = result.height;
                            if (textRendererType === "canvas") if (result.imageData === void 0) {
                                this.texture = null;
                                this.setRenderable(false);
                            } else {
                                this.texture = this.stage.txManager.createTexture("ImageTexture", {
                                    premultiplyAlpha: true,
                                    src: result.imageData
                                });
                                this.setRenderable(false);
                                if (this.renderState > CoreNodeRenderState.OutOfBounds) this.updateTextureOwnership(true);
                            }
                            this._cachedLayout = result.layout || null;
                            this.props.w = width;
                            this.props.h = height;
                            this.setUpdateType(UpdateType.Local | UpdateType.RecalcUniforms);
                            if (textRendererType === "sdf") this.setRenderable(true);
                            this._renderInfo = result;
                            this.emitTextLoadedEvent();
                        }
                    }, {
                        key: "renderQuads",
                        value: function renderQuads(renderer) {
                            if (this._type === "canvas") {
                                if (this.isQuadDirty === true) {
                                    var white = premultiplyColorABGR(4294967295, this.worldAlpha);
                                    this.premultipliedColorTl = this.premultipliedColorTr = this.premultipliedColorBl = this.premultipliedColorBr = white;
                                }
                                _superPropGet(CoreTextNode, "renderQuads", this, 3)([ renderer ]);
                                return;
                            }
                            if (!this._cachedLayout) return;
                            var props = this.textProps;
                            this.textRenderer.renderQuads(renderer, this._cachedLayout, null, {
                                fontFamily: this.textProps.fontFamily,
                                fontSize: props.fontSize,
                                color: this.props.color || 4294967295,
                                offsetY: props.offsetY,
                                worldAlpha: this.worldAlpha,
                                globalTransform: this.globalTransform,
                                clippingRect: this.clippingRect,
                                width: this.props.w,
                                height: this.props.h,
                                stage: this.stage,
                                sdfCache: this._sdfCache
                            });
                        }
                    }, {
                        key: "destroy",
                        value: function destroy() {
                            var isChild = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                            if (this._waitingForFont === true && this.fontHandler) this.fontHandler.stopWaitingForFont(this.textProps.fontFamily, this);
                            this._cachedLayout = null;
                            this._sdfCache.vertices = null;
                            this._sdfCache.layoutRef = null;
                            this.fontHandler = null;
                            this.textRenderer = null;
                            _superPropGet(CoreTextNode, "destroy", this, 3)([ isChild ]);
                        }
                    }, {
                        key: "w",
                        get: function get() {
                            return this.props.w;
                        },
                        set: function set(value) {
                            this.maxWidth = value;
                        }
                    }, {
                        key: "h",
                        get: function get() {
                            return this.props.h;
                        },
                        set: function set(value) {
                            this.maxHeight = value;
                        }
                    }, {
                        key: "maxWidth",
                        get: function get() {
                            return this.textProps.maxWidth;
                        },
                        set: function set(value) {
                            if (this.textProps.maxWidth !== value) {
                                this.textProps.maxWidth = value;
                                this._layoutGenerated = false;
                                this.setUpdateType(UpdateType.Local);
                            }
                        }
                    }, {
                        key: "maxHeight",
                        get: function get() {
                            return this.textProps.maxHeight;
                        },
                        set: function set(value) {
                            if (this.textProps.maxHeight !== value) {
                                this.textProps.maxHeight = value;
                                this._layoutGenerated = false;
                                this.setUpdateType(UpdateType.Local);
                            }
                        }
                    }, {
                        key: "contain",
                        get: function get() {
                            return this.textProps.contain;
                        },
                        set: function set(value) {
                            if (this.textProps.contain !== value) {
                                this.textProps.contain = value;
                                this._containType = TextConstraint[value];
                                this.setUpdateType(UpdateType.Local);
                            }
                        }
                    }, {
                        key: "text",
                        get: function get() {
                            return this.textProps.text;
                        },
                        set: function set(value) {
                            if (this.textProps.text !== value) {
                                this.textProps.text = value;
                                this._layoutGenerated = false;
                                this.setUpdateType(UpdateType.Local);
                            }
                        }
                    }, {
                        key: "fontSize",
                        get: function get() {
                            return this.textProps.fontSize;
                        },
                        set: function set(value) {
                            if (this.textProps.fontSize !== value) {
                                this.textProps.fontSize = value;
                                this._layoutGenerated = false;
                                this.setUpdateType(UpdateType.Local);
                            }
                        }
                    }, {
                        key: "fontFamily",
                        get: function get() {
                            return this.textProps.fontFamily;
                        },
                        set: function set(value) {
                            if (this.textProps.fontFamily !== value) {
                                if (this._waitingForFont === true) this.fontHandler.stopWaitingForFont(this.textProps.fontFamily, this);
                                this.textProps.fontFamily = value;
                                this._layoutGenerated = false;
                                this.setUpdateType(UpdateType.Local);
                            }
                        }
                    }, {
                        key: "fontStyle",
                        get: function get() {
                            return this.textProps.fontStyle;
                        },
                        set: function set(value) {
                            if (this.textProps.fontStyle !== value) {
                                this.textProps.fontStyle = value;
                                this._layoutGenerated = false;
                                this.setUpdateType(UpdateType.Local);
                            }
                        }
                    }, {
                        key: "textAlign",
                        get: function get() {
                            return this.textProps.textAlign;
                        },
                        set: function set(value) {
                            if (this.textProps.textAlign !== value) {
                                this.textProps.textAlign = value;
                                this._layoutGenerated = false;
                                this.setUpdateType(UpdateType.Local);
                            }
                        }
                    }, {
                        key: "letterSpacing",
                        get: function get() {
                            return this.textProps.letterSpacing;
                        },
                        set: function set(value) {
                            if (this.textProps.letterSpacing !== value) {
                                this.textProps.letterSpacing = value;
                                this._layoutGenerated = false;
                                this.setUpdateType(UpdateType.Local);
                            }
                        }
                    }, {
                        key: "lineHeight",
                        get: function get() {
                            return this.textProps.lineHeight;
                        },
                        set: function set(value) {
                            if (this.textProps.lineHeight !== value) {
                                this.textProps.lineHeight = value;
                                this._layoutGenerated = false;
                                this.setUpdateType(UpdateType.Local);
                            }
                        }
                    }, {
                        key: "maxLines",
                        get: function get() {
                            return this.textProps.maxLines;
                        },
                        set: function set(value) {
                            if (this.textProps.maxLines !== value) {
                                this.textProps.maxLines = value;
                                this._layoutGenerated = false;
                                this.setUpdateType(UpdateType.Local);
                            }
                        }
                    }, {
                        key: "verticalAlign",
                        get: function get() {
                            return this.textProps.verticalAlign;
                        },
                        set: function set(value) {
                            if (this.textProps.verticalAlign !== value) {
                                this.textProps.verticalAlign = value;
                                this._layoutGenerated = false;
                                this.setUpdateType(UpdateType.Local);
                            }
                        }
                    }, {
                        key: "overflowSuffix",
                        get: function get() {
                            return this.textProps.overflowSuffix;
                        },
                        set: function set(value) {
                            if (this.textProps.overflowSuffix !== value) {
                                this.textProps.overflowSuffix = value;
                                this._layoutGenerated = false;
                                this.setUpdateType(UpdateType.Local);
                            }
                        }
                    }, {
                        key: "wordBreak",
                        get: function get() {
                            return this.textProps.wordBreak;
                        },
                        set: function set(value) {
                            if (this.textProps.wordBreak !== value) {
                                this.textProps.wordBreak = value;
                                this._layoutGenerated = false;
                                this.setUpdateType(UpdateType.Local);
                            }
                        }
                    }, {
                        key: "offsetY",
                        get: function get() {
                            return this.textProps.offsetY;
                        },
                        set: function set(value) {
                            if (this.textProps.offsetY !== value) {
                                this.textProps.offsetY = value;
                                this._layoutGenerated = false;
                                this.setUpdateType(UpdateType.Local);
                            }
                        }
                    }, {
                        key: "color",
                        get: function get() {
                            return this.props.color;
                        },
                        set: function set(value) {
                            _superPropSet(CoreTextNode, "color", value, this, 1, 1);
                            if (this._type === "canvas") {
                                this._layoutGenerated = false;
                                this.setUpdateType(UpdateType.Local);
                            }
                        }
                    }, {
                        key: "forceLoad",
                        get: function get() {
                            return this.textProps.forceLoad;
                        },
                        set: function set(value) {
                            if (this.textProps.forceLoad !== value) {
                                this.textProps.forceLoad = value;
                                this.setUpdateType(UpdateType.Local);
                            }
                        }
                    }, {
                        key: "renderInfo",
                        get: function get() {
                            return this._renderInfo;
                        }
                    } ]);
                }(CoreNode);
                EMPTY_TEXTURE_OPTIONS = Object.freeze({});
                Stage = function() {
                    function Stage(options) {
                        var _this20 = this;
                        var _fontEngines$;
                        this.options = void 0;
                        this.animationManager = void 0;
                        this.txManager = void 0;
                        this.txMemManager = void 0;
                        this.textRenderers = {};
                        this.fontHandlers = {};
                        this.shManager = void 0;
                        this.renderer = void 0;
                        this.root = void 0;
                        this.boundsMargin = void 0;
                        this.defShaderNode = null;
                        this.viewportW = void 0;
                        this.viewportH = void 0;
                        this.defaultTexture = null;
                        this.pixelRatio = void 0;
                        this.platform = void 0;
                        this.calculateTextureCoord = void 0;
                        this.targetFrameTime = 0;
                        this.eventBus = void 0;
                        this.isContextLost = false;
                        this.startTime = 0;
                        this.deltaTime = 0;
                        this.lastFrameTime = 0;
                        this.currentFrameTime = 0;
                        this.elapsedTime = 0;
                        this.timedNodes = [];
                        this.clrColor = 0;
                        this.fpsSampleFrames = 0;
                        this.fpsSampleElapsed = 0;
                        this.fpsRenderedFrames = 0;
                        this.fpsIdleTicks = 0;
                        this.fpsIntervalElapsed = 0;
                        this.fpsLastTickRendered = false;
                        this.fpsLastInterval = 0;
                        this.telemetrySegment = "";
                        this.fpsFrameTimeBuckets = new Uint32Array(45);
                        this.fpsMaxFrameTime = 0;
                        this.fpsAnimatedFrames = 0;
                        this.fpsAnimatedElapsed = 0;
                        this.fpsAnimatedBuckets = new Uint32Array(45);
                        this.fpsAnimatedMaxFrameTime = 0;
                        this.fpsAnimationSum = 0;
                        this.fpsMaxAnimations = 0;
                        this.fpsUploadFrames = 0;
                        this.fpsUpdateMs = 0;
                        this.fpsRenderMs = 0;
                        this.fpsUploadMs = 0;
                        this.fpsMaxUpdateMs = 0;
                        this.fpsMaxRenderMs = 0;
                        this.fpsMaxUploadMs = 0;
                        this.fpsUploadedTextures = 0;
                        this.fpsMaxUploadQueue = 0;
                        this.numQuadsRendered = 0;
                        this.numRenderOpsRendered = 0;
                        this.renderRequested = false;
                        this.reprocessFrame = false;
                        this.reprocessCallback = null;
                        this.frameEventQueue = [];
                        this.renderList = [];
                        this.renderListDirty = true;
                        this.hasOnlyOneFontEngine = void 0;
                        this.hasOnlyCanvasFontEngine = void 0;
                        this.hasCanvasEngine = void 0;
                        this.singleFontEngine = null;
                        this.singleFontHandler = null;
                        this.contextSpy = null;
                        this.options = options;
                        var canvas = options.canvas, clearColor = options.clearColor, appWidth = options.appWidth, appHeight = options.appHeight, boundsMargin = options.boundsMargin, enableContextSpy = options.enableContextSpy, forceWebGL2 = options.forceWebGL2, disableVertexArrayObject = options.disableVertexArrayObject, numImageWorkers = options.numImageWorkers, textureMemory = options.textureMemory, renderEngine = options.renderEngine, fontEngines = options.fontEngines, createImageBitmapSupport = options.createImageBitmapSupport, premultiplyAlphaHonored = options.premultiplyAlphaHonored, platform = options.platform, maxRetryCount = options.maxRetryCount, imageDecodeConcurrency = options.imageDecodeConcurrency;
                        assertTruthy(platform !== null, "A CorePlatform is not provided in the options");
                        setBaselineMode(options.textBaselineMode);
                        this.platform = platform;
                        this.startTime = platform.getTimeStamp();
                        this.eventBus = options.eventBus;
                        this.targetFrameTime = options.targetFPS > 0 ? 1e3 / options.targetFPS : 0;
                        this.txManager = new CoreTextureManager(this, {
                            numImageWorkers: numImageWorkers,
                            createImageBitmapSupport: createImageBitmapSupport,
                            premultiplyAlphaHonored: premultiplyAlphaHonored !== null && premultiplyAlphaHonored !== void 0 ? premultiplyAlphaHonored : true,
                            maxRetryCount: maxRetryCount,
                            imageDecodeConcurrency: imageDecodeConcurrency
                        });
                        this.txManager.on("initialized", function() {
                            _this20.requestRender();
                        });
                        this.txMemManager = new TextureMemoryManager(this, textureMemory);
                        this.animationManager = new AnimationManager;
                        this.contextSpy = enableContextSpy ? new ContextSpy : null;
                        this.boundsMargin = boundsMargin;
                        this.viewportW = appWidth;
                        this.viewportH = appHeight;
                        this.clrColor = clearColor;
                        this.pixelRatio = options.devicePhysicalPixelRatio * options.deviceLogicalPixelRatio;
                        this.renderer = new renderEngine({
                            stage: this,
                            canvas: canvas,
                            contextSpy: this.contextSpy,
                            forceWebGL2: forceWebGL2,
                            disableVertexArrayObject: disableVertexArrayObject
                        });
                        this.shManager = new CoreShaderManager(this);
                        this.defShaderNode = this.renderer.getDefaultShaderNode();
                        this.calculateTextureCoord = this.renderer.getTextureCoords !== void 0;
                        var renderMode = this.renderer.mode || "webgl";
                        if (renderMode === "canvas") this.txMemManager.updateSettings(_objectSpread(_objectSpread({}, textureMemory), {}, {
                            criticalThreshold: 0,
                            doNotExceedCriticalThreshold: false
                        }));
                        setPremultiplyMode(renderMode);
                        this.txManager.renderer = this.renderer;
                        this.createDefaultTexture();
                        this.hasOnlyOneFontEngine = fontEngines.length === 1;
                        this.hasOnlyCanvasFontEngine = fontEngines.length === 1 && fontEngines[0].type === "canvas";
                        this.hasCanvasEngine = false;
                        this.singleFontEngine = this.hasOnlyOneFontEngine ? fontEngines[0] : null;
                        this.singleFontHandler = this.hasOnlyOneFontEngine ? (_fontEngines$ = fontEngines[0]) == null ? void 0 : _fontEngines$.font : null;
                        if (this.singleFontEngine === null) fontEngines.filter(function(fontEngine) {
                            var type = fontEngine.type;
                            if (type === "sdf" && renderMode === "canvas") {
                                console.warn("MsdfTextRenderer is not compatible with Canvas renderer. Skipping...");
                                return false;
                            }
                            if (type === "canvas") _this20.hasCanvasEngine = true;
                            return true;
                        }).sort(function(a, b) {
                            if (a.type === "sdf") return -1;
                            if (b.type === "sdf") return 1;
                            if (a.type === "canvas") return 1;
                            if (b.type === "canvas") return -1;
                            return 0;
                        }).forEach(function(fontEngine) {
                            var type = fontEngine.type;
                            _this20.textRenderers[type] = fontEngine;
                            _this20.textRenderers[type].init(_this20);
                            _this20.fontHandlers[type] = fontEngine.font;
                        }); else {
                            var fontEngine = this.singleFontEngine;
                            var type = fontEngine.type;
                            if (type === "sdf" && renderMode === "canvas") console.warn("MsdfTextRenderer is not compatible with Canvas renderer. Skipping..."); else {
                                if (type === "canvas") this.hasCanvasEngine = true;
                                this.textRenderers[type] = fontEngine;
                                this.fontHandlers[type] = fontEngine.font;
                                this.textRenderers[type].init(this);
                            }
                        }
                        if (Object.keys(this.textRenderers).length === 0) console.warn("No text renderers available. Your text will not render.");
                        var rootNode = new CoreNode(this, {
                            x: 0,
                            y: 0,
                            w: appWidth,
                            h: appHeight,
                            alpha: 1,
                            ignoreParentAlpha: false,
                            autosize: false,
                            clipping: false,
                            color: 0,
                            colorTop: 0,
                            colorBottom: 0,
                            colorLeft: 0,
                            colorRight: 0,
                            colorTl: 0,
                            colorTr: 0,
                            placeholderColor: 0,
                            colorBl: 0,
                            colorBr: 0,
                            zIndex: 0,
                            scaleX: 1,
                            scaleY: 1,
                            mountX: 0,
                            mountY: 0,
                            mount: 0,
                            pivot: .5,
                            pivotX: .5,
                            pivotY: .5,
                            rotation: 0,
                            parent: null,
                            texture: null,
                            textureOptions: EMPTY_TEXTURE_OPTIONS,
                            shader: this.defShaderNode,
                            src: null,
                            scale: 1
                        });
                        this.root = rootNode;
                        rootNode.updateLocalTransform();
                        Matrix3d.copy(rootNode.localTransform, rootNode.globalTransform);
                        rootNode.updateGlobalGeometry();
                        rootNode.updateRenderState(CoreNodeRenderState.InViewport);
                        rootNode.updateIsRenderable();
                        rootNode.premultipliedColorTl = rootNode.premultipliedColorTr = rootNode.premultipliedColorBl = rootNode.premultipliedColorBr = 0;
                        this.platform.startLoop(this);
                    }
                    return _createClass(Stage, [ {
                        key: "setClearColor",
                        value: function setClearColor(color) {
                            this.clearColor = color;
                            this.renderer.updateClearColor(color);
                            this.renderRequested = true;
                        }
                    }, {
                        key: "updateTargetFrameTime",
                        value: function updateTargetFrameTime() {
                            this.targetFrameTime = this.options.targetFPS > 0 ? 1e3 / this.options.targetFPS : 0;
                        }
                    }, {
                        key: "updateFrameTime",
                        value: function updateFrameTime(frameTime) {
                            var newFrameTime = frameTime !== void 0 && frameTime > 0 ? frameTime : this.platform.getTimeStamp();
                            this.lastFrameTime = this.currentFrameTime;
                            this.currentFrameTime = newFrameTime;
                            this.elapsedTime = newFrameTime - this.startTime;
                            this.deltaTime = !this.lastFrameTime ? 100 / 6 : newFrameTime - this.lastFrameTime;
                            this.txMemManager.frameTime = newFrameTime;
                            this.eventBus.emit("frameTick", {
                                time: this.currentFrameTime,
                                delta: this.deltaTime
                            });
                        }
                    }, {
                        key: "setContextLost",
                        value: function setContextLost() {
                            if (this.isContextLost === true) return;
                            this.isContextLost = true;
                            this.eventBus.emit("contextLost");
                        }
                    }, {
                        key: "createDefaultTexture",
                        value: function createDefaultTexture() {
                            var _this21 = this;
                            this.defaultTexture = this.txManager.createTexture("ColorTexture", {
                                color: 4294967295
                            });
                            assertTruthy(this.defaultTexture instanceof ColorTexture);
                            this.defaultTexture.once("loaded", function() {
                                _this21.requestRender();
                            });
                            this.defaultTexture.setRenderableOwner("stage", true);
                        }
                    }, {
                        key: "updateAnimations",
                        value: function updateAnimations() {
                            var animationManager = this.animationManager;
                            if (!this.root) return false;
                            var hadAnimations = animationManager.activeAnimations.length > 0;
                            animationManager.update(this.deltaTime);
                            return hadAnimations || animationManager.activeAnimations.length > 0;
                        }
                    }, {
                        key: "hasSceneUpdates",
                        value: function hasSceneUpdates() {
                            return !!this.root.updateType || this.renderRequested || this.txManager.hasUpdates();
                        }
                    }, {
                        key: "cleanupTextRenderers",
                        value: function cleanupTextRenderers() {
                            var textRenderers = this.textRenderers;
                            for (var key in textRenderers) textRenderers[key].cleanup();
                        }
                    }, {
                        key: "drawFrame",
                        value: function drawFrame() {
                            var hasActiveAnimations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                            var renderer = this.renderer, renderRequested = this.renderRequested, root = this.root, platform = this.platform;
                            var sampling = this.options.fpsUpdateInterval > 0;
                            var updateStart = 0;
                            var renderStart = 0;
                            var uploadStart = 0;
                            var uploadEnd = 0;
                            if (sampling === true) updateStart = platform.getTimeStamp();
                            do {
                                var forceUpdate = this.reprocessFrame;
                                this.reprocessFrame = false;
                                if (root.updateType !== 0 || forceUpdate) {
                                    root.updateType = 0;
                                    var childUpdateType = root.childUpdateType;
                                    root.childUpdateType = 0;
                                    for (var i = 0, length = root.children.length; i < length; i++) {
                                        var child = root.children[i];
                                        if (childUpdateType !== 0) child.updateType |= childUpdateType;
                                        if (child.updateType === 0) continue;
                                        child.update(this.deltaTime, root.clippingRect);
                                    }
                                }
                                if (this.reprocessCallback !== null) {
                                    this.reprocessCallback();
                                    this.reprocessCallback = null;
                                }
                            } while (this.reprocessFrame);
                            if (sampling === true) renderStart = platform.getTimeStamp();
                            renderer.reset();
                            if (this.renderListDirty === true) {
                                this.renderList.length = 0;
                                this.buildRenderList(this.root);
                                this.renderListDirty = false;
                            } else {
                                var renderList = this.renderList;
                                for (var _i15 = 0, len = renderList.length; _i15 < len; _i15++) renderList[_i15].renderQuads(renderer);
                            }
                            renderer.render();
                            if (sampling === true) {
                                uploadStart = platform.getTimeStamp();
                                uploadEnd = uploadStart;
                            }
                            if (this.txManager.hasUpdates() === true) {
                                if (sampling === true) {
                                    var queued = this.txManager.uploadQueueSize;
                                    if (queued > this.fpsMaxUploadQueue) this.fpsMaxUploadQueue = queued;
                                }
                                var uploaded;
                                if (hasActiveAnimations === true) uploaded = this.txManager.processOne(); else uploaded = this.txManager.processUntil(this.options.textureProcessingTimeLimit);
                                if (sampling === true) {
                                    uploadEnd = platform.getTimeStamp();
                                    this.fpsUploadFrames++;
                                    this.fpsUploadedTextures += uploaded;
                                }
                            }
                            if (sampling === true) {
                                var activeAnimations = this.animationManager.activeAnimations.length;
                                this.fpsAnimationSum += activeAnimations;
                                if (activeAnimations > this.fpsMaxAnimations) this.fpsMaxAnimations = activeAnimations;
                                var frameUpdateMs = renderStart - updateStart;
                                var frameRenderMs = uploadStart - renderStart;
                                var frameUploadMs = uploadEnd - uploadStart;
                                this.fpsUpdateMs += frameUpdateMs;
                                this.fpsRenderMs += frameRenderMs;
                                this.fpsUploadMs += frameUploadMs;
                                if (frameUpdateMs > this.fpsMaxUpdateMs) this.fpsMaxUpdateMs = frameUpdateMs;
                                if (frameRenderMs > this.fpsMaxRenderMs) this.fpsMaxRenderMs = frameRenderMs;
                                if (frameUploadMs > this.fpsMaxUploadMs) this.fpsMaxUploadMs = frameUploadMs;
                                this.calculateFps(true, hasActiveAnimations === true);
                            }
                            if (true) this.calculateRenderInfo();
                            if (renderRequested === true) this.renderRequested = false;
                            var timedNodes = this.timedNodes;
                            for (var _i16 = 0, _len6 = timedNodes.length; _i16 < _len6; _i16++) if (timedNodes[_i16].isRenderable === true) {
                                this.requestRender();
                                break;
                            }
                            if (this.txMemManager.criticalCleanupRequested === true) this.txMemManager.cleanup();
                        }
                    }, {
                        key: "queueFrameEvent",
                        value: function queueFrameEvent(name, data) {
                            this.frameEventQueue.push([ name, data ]);
                        }
                    }, {
                        key: "flushFrameEvents",
                        value: function flushFrameEvents() {
                            var queue = this.frameEventQueue;
                            var len = queue.length;
                            if (len === 0) return;
                            this.frameEventQueue = [];
                            for (var i = 0; i < len; i++) {
                                var event = queue[i];
                                this.eventBus.emit(event[0], event[1]);
                            }
                        }
                    }, {
                        key: "calculateFps",
                        value: function calculateFps(rendered) {
                            var animating = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                            var fpsUpdateInterval = this.options.fpsUpdateInterval;
                            if (fpsUpdateInterval > 0) {
                                if (fpsUpdateInterval !== this.fpsLastInterval) {
                                    this.fpsLastInterval = fpsUpdateInterval;
                                    this.resetFpsSample();
                                }
                                var delta = this.deltaTime;
                                this.fpsIntervalElapsed += delta;
                                if (rendered === true) {
                                    this.fpsRenderedFrames++;
                                    if (this.fpsLastTickRendered === true) {
                                        this.fpsSampleFrames++;
                                        this.fpsSampleElapsed += delta;
                                        var bucket;
                                        if (delta < 32) bucket = delta | 0; else if (delta < 128) bucket = 32 + ((delta - 32) / 8 | 0); else bucket = 45 - 1;
                                        var buckets = this.fpsFrameTimeBuckets;
                                        buckets[bucket] = buckets[bucket] + 1;
                                        if (delta > this.fpsMaxFrameTime) this.fpsMaxFrameTime = delta;
                                        if (animating === true) {
                                            this.fpsAnimatedFrames++;
                                            this.fpsAnimatedElapsed += delta;
                                            var animatedBuckets = this.fpsAnimatedBuckets;
                                            animatedBuckets[bucket] = animatedBuckets[bucket] + 1;
                                            if (delta > this.fpsAnimatedMaxFrameTime) this.fpsAnimatedMaxFrameTime = delta;
                                        }
                                    }
                                } else this.fpsIdleTicks++;
                                this.fpsLastTickRendered = rendered;
                                if (this.fpsIntervalElapsed >= fpsUpdateInterval) this.emitFpsUpdate();
                            }
                        }
                    }, {
                        key: "setTelemetrySegment",
                        value: function setTelemetrySegment(label) {
                            if (label === this.telemetrySegment) return;
                            if (this.options.fpsUpdateInterval > 0 && (this.fpsRenderedFrames > 0 || this.fpsIdleTicks > 0)) this.emitFpsUpdate();
                            this.telemetrySegment = label;
                        }
                    }, {
                        key: "resetFpsSample",
                        value: function resetFpsSample() {
                            this.fpsSampleFrames = 0;
                            this.fpsSampleElapsed = 0;
                            this.fpsRenderedFrames = 0;
                            this.fpsIdleTicks = 0;
                            this.fpsIntervalElapsed = 0;
                            this.fpsMaxFrameTime = 0;
                            this.fpsAnimatedFrames = 0;
                            this.fpsAnimatedElapsed = 0;
                            this.fpsAnimatedMaxFrameTime = 0;
                            this.fpsAnimationSum = 0;
                            this.fpsMaxAnimations = 0;
                            this.fpsUploadFrames = 0;
                            this.fpsUpdateMs = 0;
                            this.fpsRenderMs = 0;
                            this.fpsUploadMs = 0;
                            this.fpsMaxUpdateMs = 0;
                            this.fpsMaxRenderMs = 0;
                            this.fpsMaxUploadMs = 0;
                            this.fpsUploadedTextures = 0;
                            this.fpsMaxUploadQueue = 0;
                            var buckets = this.fpsFrameTimeBuckets;
                            var animatedBuckets = this.fpsAnimatedBuckets;
                            for (var i = 0; i < 45; i++) {
                                buckets[i] = 0;
                                animatedBuckets[i] = 0;
                            }
                        }
                    }, {
                        key: "emitFpsUpdate",
                        value: function emitFpsUpdate() {
                            var _this$contextSpy$getD, _this$contextSpy, _this$renderer$getRen, _this$renderer$getQua, _this$contextSpy2;
                            var fps = this.fpsSampleElapsed > 0 ? Math.round(this.fpsSampleFrames * 1e3 / this.fpsSampleElapsed) : 0;
                            var sampledFrames = this.fpsSampleFrames;
                            var renderedFrames = this.fpsRenderedFrames;
                            var idleTicks = this.fpsIdleTicks;
                            var renderedMs = this.fpsSampleElapsed;
                            var maxFrameTime = this.fpsMaxFrameTime;
                            var animatedFps = this.fpsAnimatedElapsed > 0 ? Math.round(this.fpsAnimatedFrames * 1e3 / this.fpsAnimatedElapsed) : 0;
                            var animatedFrames = this.fpsAnimatedFrames;
                            var animatedMs = this.fpsAnimatedElapsed;
                            var animatedMaxFrameTime = this.fpsAnimatedMaxFrameTime;
                            var maxActiveAnimations = this.fpsMaxAnimations;
                            var meanActiveAnimations = renderedFrames > 0 ? this.fpsAnimationSum / renderedFrames : 0;
                            var uploadFrames = this.fpsUploadFrames;
                            var updateMs = this.fpsUpdateMs;
                            var renderMs = this.fpsRenderMs;
                            var uploadMs = this.fpsUploadMs;
                            var maxUpdateMs = this.fpsMaxUpdateMs;
                            var maxRenderMs = this.fpsMaxRenderMs;
                            var maxUploadMs = this.fpsMaxUploadMs;
                            var uploadedTextures = this.fpsUploadedTextures;
                            var maxUploadQueueSize = this.fpsMaxUploadQueue;
                            var sourceBuckets = this.fpsFrameTimeBuckets;
                            var sourceAnimated = this.fpsAnimatedBuckets;
                            var frameTimeBuckets = new Array(45);
                            var animatedFrameTimeBuckets = new Array(45);
                            for (var i = 0; i < 45; i++) {
                                frameTimeBuckets[i] = sourceBuckets[i];
                                animatedFrameTimeBuckets[i] = sourceAnimated[i];
                            }
                            this.resetFpsSample();
                            this.queueFrameEvent("fpsUpdate", {
                                fps: fps,
                                sampledFrames: sampledFrames,
                                renderedFrames: renderedFrames,
                                idleTicks: idleTicks,
                                renderedMs: renderedMs,
                                frameTimeBuckets: frameTimeBuckets,
                                maxFrameTime: maxFrameTime,
                                animatedFps: animatedFps,
                                animatedFrames: animatedFrames,
                                animatedMs: animatedMs,
                                animatedFrameTimeBuckets: animatedFrameTimeBuckets,
                                animatedMaxFrameTime: animatedMaxFrameTime,
                                segment: this.telemetrySegment,
                                meanActiveAnimations: meanActiveAnimations,
                                maxActiveAnimations: maxActiveAnimations,
                                updateMs: updateMs,
                                renderMs: renderMs,
                                uploadMs: uploadMs,
                                maxUpdateMs: maxUpdateMs,
                                maxRenderMs: maxRenderMs,
                                maxUploadMs: maxUploadMs,
                                uploadFrames: uploadFrames,
                                uploadedTextures: uploadedTextures,
                                maxUploadQueueSize: maxUploadQueueSize,
                                contextSpyData: (_this$contextSpy$getD = (_this$contextSpy = this.contextSpy) == null ? void 0 : _this$contextSpy.getData()) !== null && _this$contextSpy$getD !== void 0 ? _this$contextSpy$getD : null,
                                renderOps: (_this$renderer$getRen = this.renderer.getRenderOpCount()) !== null && _this$renderer$getRen !== void 0 ? _this$renderer$getRen : 0,
                                quads: (_this$renderer$getQua = this.renderer.getQuadCount()) !== null && _this$renderer$getQua !== void 0 ? _this$renderer$getQua : 0
                            });
                            (_this$contextSpy2 = this.contextSpy) == null || _this$contextSpy2.reset();
                        }
                    }, {
                        key: "calculateRenderInfo",
                        value: function calculateRenderInfo() {
                            var quads = this.renderer.getQuadCount();
                            var renderOps = this.renderer.getRenderOpCount();
                            if (quads && quads !== this.numQuadsRendered || renderOps && renderOps !== this.numRenderOpsRendered) {
                                this.numQuadsRendered = quads || 0;
                                this.numRenderOpsRendered = renderOps || 0;
                                this.queueFrameEvent("renderUpdate", {
                                    quads: this.numQuadsRendered,
                                    renderOps: this.numRenderOpsRendered
                                });
                            }
                        }
                    }, {
                        key: "requestRenderListUpdate",
                        value: function requestRenderListUpdate() {
                            this.requestRender();
                            if (this.renderListDirty === true) return;
                            if (this.renderer.invalidateQuadBuffer !== void 0) this.renderer.invalidateQuadBuffer();
                            this.renderListDirty = true;
                        }
                    }, {
                        key: "buildRenderList",
                        value: function buildRenderList(node) {
                            if (node.isRenderable === true) {
                                node.renderQuads(this.renderer);
                                this.renderList.push(node);
                            }
                            var children = node.children;
                            var len = children.length;
                            for (var i = 0; i < len; i++) {
                                var child = children[i];
                                if (child.worldAlpha === 0 || child.renderState === CoreNodeRenderState.OutOfBounds) continue;
                                this.buildRenderList(child);
                            }
                        }
                    }, {
                        key: "requestRender",
                        value: function requestRender() {
                            this.renderRequested = true;
                        }
                    }, {
                        key: "reprocessUpdates",
                        value: function reprocessUpdates(callback) {
                            this.reprocessFrame = true;
                            if (callback) this.reprocessCallback = callback;
                        }
                    }, {
                        key: "resolveTextRenderer",
                        value: function resolveTextRenderer(trProps) {
                            var textRendererOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                            var _this$fontHandlers$sd;
                            if (textRendererOverride !== null) {
                                var overrideKey = String(textRendererOverride);
                                if (this.textRenderers[overrideKey] === void 0) {
                                    console.warn("Text renderer override '".concat(overrideKey, "' not found."));
                                    return null;
                                }
                                return this.textRenderers[overrideKey];
                            }
                            if (this.singleFontEngine !== null) {
                                var _this$singleFontHandl;
                                if (this.hasOnlyCanvasFontEngine === true) return this.singleFontEngine;
                                if (((_this$singleFontHandl = this.singleFontHandler) == null ? void 0 : _this$singleFontHandl.canRenderFont(trProps)) === true) return this.singleFontEngine;
                                console.warn("Text renderer cannot render font", trProps);
                                return null;
                            }
                            if (((_this$fontHandlers$sd = this.fontHandlers["sdf"]) == null ? void 0 : _this$fontHandlers$sd.canRenderFont(trProps)) === true) return this.textRenderers.sdf || null;
                            if (this.hasCanvasEngine === true) return this.textRenderers.canvas || null;
                            console.warn("No text renderers available. Your text will not render.");
                            return null;
                        }
                    }, {
                        key: "createNode",
                        value: function createNode(props) {
                            var resolved = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                            var resolvedProps = resolved ? props : this.resolveNodeDefaults(props);
                            return new CoreNode(this, resolvedProps);
                        }
                    }, {
                        key: "createTextNode",
                        value: function createTextNode(props) {
                            var resolved = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                            var resolvedProps = resolved ? props : this.resolveTextNodeDefaults(props);
                            var resolvedTextRenderer = this.resolveTextRenderer(resolvedProps, resolvedProps.textRendererOverride);
                            if (!resolvedTextRenderer) throw new Error("No compatible text renderer found for ".concat(resolvedProps.fontFamily));
                            return new CoreTextNode(this, resolvedProps, resolvedTextRenderer);
                        }
                    }, {
                        key: "createNodeProps",
                        value: function createNodeProps(initial) {
                            return this.resolveNodeDefaults(initial !== null && initial !== void 0 ? initial : {});
                        }
                    }, {
                        key: "createTextNodeProps",
                        value: function createTextNodeProps(initial) {
                            return this.resolveTextNodeDefaults(initial !== null && initial !== void 0 ? initial : {});
                        }
                    }, {
                        key: "resolveTextNodeDefaults",
                        value: function resolveTextNodeDefaults(props) {
                            var _props$text, _props$textRendererOv;
                            var fontSize = props.fontSize || 16;
                            var resolvedProps = this.resolveNodeDefaults(props);
                            resolvedProps.text = (_props$text = props.text) !== null && _props$text !== void 0 ? _props$text : "";
                            resolvedProps.textRendererOverride = (_props$textRendererOv = props.textRendererOverride) !== null && _props$textRendererOv !== void 0 ? _props$textRendererOv : null;
                            resolvedProps.fontSize = fontSize;
                            resolvedProps.fontFamily = props.fontFamily || "sans-serif";
                            resolvedProps.fontStyle = props.fontStyle || "normal";
                            resolvedProps.textAlign = props.textAlign || "left";
                            resolvedProps.offsetY = props.offsetY || 0;
                            resolvedProps.letterSpacing = props.letterSpacing || 0;
                            resolvedProps.lineHeight = props.lineHeight || 1.2;
                            resolvedProps.maxLines = props.maxLines || 0;
                            resolvedProps.verticalAlign = props.verticalAlign || "top";
                            resolvedProps.overflowSuffix = props.overflowSuffix || "...";
                            resolvedProps.wordBreak = props.wordBreak || "break-word";
                            resolvedProps.contain = props.contain || "none";
                            resolvedProps.maxWidth = props.maxWidth || 0;
                            resolvedProps.maxHeight = props.maxHeight || 0;
                            resolvedProps.forceLoad = props.forceLoad || false;
                            return resolvedProps;
                        }
                    }, {
                        key: "setBoundsMargin",
                        value: function setBoundsMargin(value) {
                            this.boundsMargin = value;
                            this.updateViewportBounds();
                        }
                    }, {
                        key: "updateViewportBounds",
                        value: function updateViewportBounds() {
                            var _this$options = this.options, appWidth = _this$options.appWidth, appHeight = _this$options.appHeight;
                            this.viewportW = appWidth;
                            this.viewportH = appHeight;
                            this.root.setUpdateType(UpdateType.Children);
                            this.root.childUpdateType |= UpdateType.Clipping;
                        }
                    }, {
                        key: "trackTimedNode",
                        value: function trackTimedNode(node) {
                            var timedNodes = this.timedNodes;
                            for (var i = 0, len = timedNodes.length; i < len; i++) if (timedNodes[i] === node) return;
                            timedNodes.push(node);
                        }
                    }, {
                        key: "untrackTimedNode",
                        value: function untrackTimedNode(node) {
                            var timedNodes = this.timedNodes;
                            var last = timedNodes.length - 1;
                            for (var i = 0; i <= last; i++) if (timedNodes[i] === node) {
                                timedNodes[i] = timedNodes[last];
                                timedNodes.length = last;
                                return;
                            }
                        }
                    }, {
                        key: "resolveNodeDefaults",
                        value: function resolveNodeDefaults(props) {
                            var _props$color, _props$scale, _props$mount, _props$pivot, _props$data, _props$x, _props$y, _props$w, _props$h, _props$alpha, _props$ignoreParentAl, _props$autosize, _props$clipping, _props$placeholderCol, _props$zIndex, _props$parent, _props$texture, _props$textureOptions, _props$shader, _props$src, _ref9, _props$scaleX, _ref10, _props$scaleY, _props$mountX, _props$mountY, _props$pivotX, _props$pivotY, _props$rotation;
                            var color = (_props$color = props.color) !== null && _props$color !== void 0 ? _props$color : 4294967295;
                            var colorTop = color;
                            var colorBottom = color;
                            var colorLeft = color;
                            var colorRight = color;
                            var colorTl = color;
                            var colorTr = color;
                            var colorBl = color;
                            var colorBr = color;
                            if (props.colorTop !== void 0 || props.colorBottom !== void 0 || props.colorLeft !== void 0 || props.colorRight !== void 0 || props.colorTl !== void 0 || props.colorTr !== void 0 || props.colorBl !== void 0 || props.colorBr !== void 0) {
                                var _ref, _ref2, _props$colorTl, _ref3, _ref4, _props$colorTr, _ref5, _ref6, _props$colorBl, _ref7, _ref8, _props$colorBr;
                                var top = props.colorTop, bottom = props.colorBottom, left = props.colorLeft, right = props.colorRight;
                                colorTop = top !== null && top !== void 0 ? top : color;
                                colorBottom = bottom !== null && bottom !== void 0 ? bottom : color;
                                colorLeft = left !== null && left !== void 0 ? left : color;
                                colorRight = right !== null && right !== void 0 ? right : color;
                                colorTl = (_ref = (_ref2 = (_props$colorTl = props.colorTl) !== null && _props$colorTl !== void 0 ? _props$colorTl : top) !== null && _ref2 !== void 0 ? _ref2 : left) !== null && _ref !== void 0 ? _ref : color;
                                colorTr = (_ref3 = (_ref4 = (_props$colorTr = props.colorTr) !== null && _props$colorTr !== void 0 ? _props$colorTr : top) !== null && _ref4 !== void 0 ? _ref4 : right) !== null && _ref3 !== void 0 ? _ref3 : color;
                                colorBl = (_ref5 = (_ref6 = (_props$colorBl = props.colorBl) !== null && _props$colorBl !== void 0 ? _props$colorBl : bottom) !== null && _ref6 !== void 0 ? _ref6 : left) !== null && _ref5 !== void 0 ? _ref5 : color;
                                colorBr = (_ref7 = (_ref8 = (_props$colorBr = props.colorBr) !== null && _props$colorBr !== void 0 ? _props$colorBr : bottom) !== null && _ref8 !== void 0 ? _ref8 : right) !== null && _ref7 !== void 0 ? _ref7 : color;
                            }
                            var scale = (_props$scale = props.scale) !== null && _props$scale !== void 0 ? _props$scale : null;
                            var mount = (_props$mount = props.mount) !== null && _props$mount !== void 0 ? _props$mount : 0;
                            var pivot = (_props$pivot = props.pivot) !== null && _props$pivot !== void 0 ? _props$pivot : .5;
                            var data = !true && this.options.inspector ? santizeCustomDataMap((_props$data = props.data) !== null && _props$data !== void 0 ? _props$data : {}) : {};
                            return {
                                x: (_props$x = props.x) !== null && _props$x !== void 0 ? _props$x : 0,
                                y: (_props$y = props.y) !== null && _props$y !== void 0 ? _props$y : 0,
                                w: (_props$w = props.w) !== null && _props$w !== void 0 ? _props$w : 0,
                                h: (_props$h = props.h) !== null && _props$h !== void 0 ? _props$h : 0,
                                alpha: (_props$alpha = props.alpha) !== null && _props$alpha !== void 0 ? _props$alpha : 1,
                                ignoreParentAlpha: (_props$ignoreParentAl = props.ignoreParentAlpha) !== null && _props$ignoreParentAl !== void 0 ? _props$ignoreParentAl : false,
                                autosize: (_props$autosize = props.autosize) !== null && _props$autosize !== void 0 ? _props$autosize : false,
                                clipping: (_props$clipping = props.clipping) !== null && _props$clipping !== void 0 ? _props$clipping : false,
                                color: color,
                                colorTop: colorTop,
                                colorBottom: colorBottom,
                                colorLeft: colorLeft,
                                colorRight: colorRight,
                                colorTl: colorTl,
                                colorTr: colorTr,
                                colorBl: colorBl,
                                colorBr: colorBr,
                                placeholderColor: (_props$placeholderCol = props.placeholderColor) !== null && _props$placeholderCol !== void 0 ? _props$placeholderCol : 0,
                                zIndex: (_props$zIndex = props.zIndex) !== null && _props$zIndex !== void 0 ? _props$zIndex : 0,
                                parent: (_props$parent = props.parent) !== null && _props$parent !== void 0 ? _props$parent : null,
                                texture: (_props$texture = props.texture) !== null && _props$texture !== void 0 ? _props$texture : null,
                                textureOptions: (_props$textureOptions = props.textureOptions) !== null && _props$textureOptions !== void 0 ? _props$textureOptions : EMPTY_TEXTURE_OPTIONS,
                                shader: (_props$shader = props.shader) !== null && _props$shader !== void 0 ? _props$shader : this.defShaderNode,
                                src: (_props$src = props.src) !== null && _props$src !== void 0 ? _props$src : null,
                                srcKey: props.srcKey,
                                srcHeight: props.srcHeight,
                                srcWidth: props.srcWidth,
                                srcX: props.srcX,
                                srcY: props.srcY,
                                scale: scale,
                                scaleX: (_ref9 = (_props$scaleX = props.scaleX) !== null && _props$scaleX !== void 0 ? _props$scaleX : scale) !== null && _ref9 !== void 0 ? _ref9 : 1,
                                scaleY: (_ref10 = (_props$scaleY = props.scaleY) !== null && _props$scaleY !== void 0 ? _props$scaleY : scale) !== null && _ref10 !== void 0 ? _ref10 : 1,
                                mount: mount,
                                mountX: (_props$mountX = props.mountX) !== null && _props$mountX !== void 0 ? _props$mountX : mount,
                                mountY: (_props$mountY = props.mountY) !== null && _props$mountY !== void 0 ? _props$mountY : mount,
                                pivot: pivot,
                                pivotX: (_props$pivotX = props.pivotX) !== null && _props$pivotX !== void 0 ? _props$pivotX : pivot,
                                pivotY: (_props$pivotY = props.pivotY) !== null && _props$pivotY !== void 0 ? _props$pivotY : pivot,
                                rotation: (_props$rotation = props.rotation) !== null && _props$rotation !== void 0 ? _props$rotation : 0,
                                data: data,
                                imageType: props.imageType,
                                preventDestroy: props.preventDestroy,
                                componentName: props.componentName,
                                componentLocation: props.componentLocation
                            };
                        }
                    }, {
                        key: "cleanup",
                        value: function cleanup() {
                            var full = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                            this.txMemManager.cleanup(full);
                        }
                    }, {
                        key: "clearColor",
                        get: function get() {
                            return this.clrColor;
                        },
                        set: function set(value) {
                            this.renderer.updateClearColor(value);
                            this.renderRequested = true;
                            this.clrColor = value;
                        }
                    }, {
                        key: "loadFont",
                        value: function loadFont(rendererType, options) {
                            var rendererTypeKey = String(rendererType);
                            var fontHandler = this.fontHandlers[rendererTypeKey];
                            if (!fontHandler) return Promise.reject(new Error("Font handler for renderer type '".concat(rendererTypeKey, "' not found. Available types: ").concat(Object.keys(this.fontHandlers).join(", "))));
                            return fontHandler.loadFont(this, options);
                        }
                    } ]);
                }();
                Platform = _createClass(function Platform() {});
                WebPlatform = function(_Platform) {
                    function WebPlatform() {
                        return _callSuper(this, WebPlatform, arguments);
                    }
                    _inherits(WebPlatform, _Platform);
                    return _createClass(WebPlatform, [ {
                        key: "createCanvas",
                        value: function createCanvas() {
                            return document.createElement("canvas");
                        }
                    }, {
                        key: "getElementById",
                        value: function getElementById(id) {
                            return document.getElementById(id);
                        }
                    }, {
                        key: "startLoop",
                        value: function startLoop(stage) {
                            var isIdle = false;
                            var lastFrameTime = 0;
                            var scheduled = false;
                            var buffer = 4;
                            var requestLoop = function requestLoop() {
                                return requestAnimationFrame(_runLoop);
                            };
                            var tick = function tick(currentTime) {
                                if (stage.isContextLost === true) return;
                                var targetFrameTime = stage.targetFrameTime;
                                if (targetFrameTime > 0) {
                                    var elapsed = currentTime - lastFrameTime;
                                    if (elapsed < targetFrameTime) {
                                        var wait = targetFrameTime - elapsed;
                                        if (wait > buffer) setTimeout(requestLoop, wait - buffer); else requestAnimationFrame(_runLoop);
                                        scheduled = true;
                                        return;
                                    }
                                    lastFrameTime = currentTime - elapsed % targetFrameTime;
                                } else lastFrameTime = currentTime;
                                stage.updateFrameTime(currentTime);
                                var hasActiveAnimations = stage.updateAnimations();
                                if (!stage.hasSceneUpdates()) {
                                    stage.calculateFps(false, false);
                                    setTimeout(requestLoop, Math.max(targetFrameTime, 15));
                                    scheduled = true;
                                    if (isIdle === false) {
                                        if (stage.renderer.checkForOutOfMemory() === true) stage.txMemManager.handleOutOfMemory();
                                        stage.shManager.cleanup();
                                        stage.cleanupTextRenderers();
                                        stage.eventBus.emit("idle");
                                        isIdle = true;
                                    }
                                    if (stage.txMemManager.checkCleanup() === true) stage.txMemManager.cleanup();
                                    stage.flushFrameEvents();
                                    return;
                                }
                                isIdle = false;
                                stage.drawFrame(hasActiveAnimations);
                                stage.flushFrameEvents();
                                requestAnimationFrame(_runLoop);
                                scheduled = true;
                            };
                            var _runLoop = function runLoop() {
                                var currentTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                                scheduled = false;
                                try {
                                    tick(currentTime);
                                } catch (error) {
                                    var handleLoopError = stage.options.handleLoopError;
                                    if (handleLoopError !== void 0) handleLoopError(error);
                                    if (scheduled === false) requestAnimationFrame(_runLoop);
                                }
                            };
                            requestAnimationFrame(_runLoop);
                        }
                    }, {
                        key: "createImageBitmap",
                        value: function(_createImageBitmap2) {
                            function createImageBitmap(_x24, _x25, _x26, _x27, _x28, _x29) {
                                return _createImageBitmap2.apply(this, arguments);
                            }
                            createImageBitmap.toString = function() {
                                return _createImageBitmap2.toString();
                            };
                            return createImageBitmap;
                        }(function(blob, sxOrOptions, sy, sw, sh, options) {
                            if (typeof sxOrOptions === "number") return createImageBitmap(blob, sxOrOptions, sy !== null && sy !== void 0 ? sy : 0, sw !== null && sw !== void 0 ? sw : 0, sh !== null && sh !== void 0 ? sh : 0, options); else return createImageBitmap(blob, sxOrOptions);
                        })
                    }, {
                        key: "getTimeStamp",
                        value: function getTimeStamp() {
                            return performance.now();
                        }
                    }, {
                        key: "addFont",
                        value: function addFont(font) {
                            document.fonts.add(font);
                        }
                    } ]);
                }(Platform);
                noop = function noop() {};
                normalizeBoundsMargin$1 = function normalizeBoundsMargin$1(value) {
                    if (Array.isArray(value) === false) return value;
                    var arr = value;
                    var max = 0;
                    for (var i = 0; i < arr.length; i++) if (arr[i] > max) max = arr[i];
                    console.warn("boundsMargin array form is no longer supported, using the largest edge value: ".concat(max));
                    return max;
                };
                RendererMain = function(_EventEmitter4) {
                    function RendererMain(settings, target) {
                        var _this22;
                        var _settings$boundsMargi, _settings$clearColor, _settings$enableClear, _settings$textLayoutC, _settings$enableConte, _settings$forceWebGL, _settings$disableVert, _settings$inspector, _settings$inspectorOp, _settings$quadBufferS, _settings$fontEngines, _settings$textBaselin, _settings$maxRetryCou, _settings$handleLoopE, _settings$maxRetryCou2;
                        _this22 = _callSuper(this, RendererMain);
                        _this22.root = void 0;
                        _this22.canvas = void 0;
                        _this22.stage = void 0;
                        _this22.inspector = null;
                        var resolvedTxSettings = _this22.resolveTxSettings(settings.textureMemory || {});
                        settings = {
                            appWidth: settings.appWidth || 1920,
                            appHeight: settings.appHeight || 1080,
                            textureMemory: resolvedTxSettings,
                            boundsMargin: normalizeBoundsMargin$1((_settings$boundsMargi = settings.boundsMargin) !== null && _settings$boundsMargi !== void 0 ? _settings$boundsMargi : 200),
                            deviceLogicalPixelRatio: settings.deviceLogicalPixelRatio || 1,
                            devicePhysicalPixelRatio: settings.devicePhysicalPixelRatio || _this22.windowDevicePixelRatio() || 1,
                            clearColor: (_settings$clearColor = settings.clearColor) !== null && _settings$clearColor !== void 0 ? _settings$clearColor : 0,
                            fpsUpdateInterval: settings.fpsUpdateInterval || 0,
                            enableClear: (_settings$enableClear = settings.enableClear) !== null && _settings$enableClear !== void 0 ? _settings$enableClear : true,
                            targetFPS: settings.targetFPS || 0,
                            textLayoutCacheSize: (_settings$textLayoutC = settings.textLayoutCacheSize) !== null && _settings$textLayoutC !== void 0 ? _settings$textLayoutC : 250,
                            numImageWorkers: settings.numImageWorkers !== void 0 ? settings.numImageWorkers : 2,
                            imageDecodeConcurrency: settings.imageDecodeConcurrency !== void 0 ? settings.imageDecodeConcurrency : 4,
                            enableContextSpy: (_settings$enableConte = settings.enableContextSpy) !== null && _settings$enableConte !== void 0 ? _settings$enableConte : false,
                            forceWebGL2: (_settings$forceWebGL = settings.forceWebGL2) !== null && _settings$forceWebGL !== void 0 ? _settings$forceWebGL : false,
                            disableVertexArrayObject: (_settings$disableVert = settings.disableVertexArrayObject) !== null && _settings$disableVert !== void 0 ? _settings$disableVert : false,
                            inspector: (_settings$inspector = settings.inspector) !== null && _settings$inspector !== void 0 ? _settings$inspector : false,
                            inspectorOptions: (_settings$inspectorOp = settings.inspectorOptions) !== null && _settings$inspectorOp !== void 0 ? _settings$inspectorOp : {},
                            renderEngine: settings.renderEngine,
                            quadBufferSize: (_settings$quadBufferS = settings.quadBufferSize) !== null && _settings$quadBufferS !== void 0 ? _settings$quadBufferS : 1048576,
                            fontEngines: (_settings$fontEngines = settings.fontEngines) !== null && _settings$fontEngines !== void 0 ? _settings$fontEngines : [],
                            textBaselineMode: (_settings$textBaselin = settings.textBaselineMode) !== null && _settings$textBaselin !== void 0 ? _settings$textBaselin : "optical",
                            textureProcessingTimeLimit: settings.textureProcessingTimeLimit || 10,
                            canvas: settings.canvas,
                            createImageBitmapSupport: settings.createImageBitmapSupport || "auto",
                            premultiplyAlphaHonored: settings.premultiplyAlphaHonored === void 0 ? true : settings.premultiplyAlphaHonored,
                            platform: settings.platform || null,
                            maxRetryCount: (_settings$maxRetryCou = settings.maxRetryCount) !== null && _settings$maxRetryCou !== void 0 ? _settings$maxRetryCou : 5,
                            handleLoopError: (_settings$handleLoopE = settings.handleLoopError) !== null && _settings$handleLoopE !== void 0 ? _settings$handleLoopE : noop
                        };
                        var _settings = settings, appWidth = _settings.appWidth, appHeight = _settings.appHeight, deviceLogicalPixelRatio = _settings.deviceLogicalPixelRatio, devicePhysicalPixelRatio = _settings.devicePhysicalPixelRatio, inspector = _settings.inspector;
                        var platform;
                        if (settings.platform !== void 0 && settings.platform !== null && settings.platform.prototype instanceof Platform === true) platform = new settings.platform; else platform = new WebPlatform;
                        var canvas = settings.canvas || platform.createCanvas();
                        var deviceLogicalWidth = appWidth * deviceLogicalPixelRatio;
                        var deviceLogicalHeight = appHeight * deviceLogicalPixelRatio;
                        _this22.canvas = canvas;
                        canvas.width = deviceLogicalWidth * devicePhysicalPixelRatio;
                        canvas.height = deviceLogicalHeight * devicePhysicalPixelRatio;
                        canvas.style.width = "".concat(deviceLogicalWidth, "px");
                        canvas.style.height = "".concat(deviceLogicalHeight, "px");
                        _this22.stage = new Stage({
                            appWidth: appWidth,
                            appHeight: appHeight,
                            boundsMargin: settings.boundsMargin,
                            clearColor: settings.clearColor,
                            canvas: _this22.canvas,
                            deviceLogicalPixelRatio: deviceLogicalPixelRatio,
                            devicePhysicalPixelRatio: devicePhysicalPixelRatio,
                            enableContextSpy: settings.enableContextSpy,
                            forceWebGL2: settings.forceWebGL2,
                            disableVertexArrayObject: settings.disableVertexArrayObject,
                            fpsUpdateInterval: settings.fpsUpdateInterval,
                            enableClear: settings.enableClear,
                            numImageWorkers: settings.numImageWorkers,
                            imageDecodeConcurrency: settings.imageDecodeConcurrency,
                            renderEngine: settings.renderEngine,
                            textureMemory: resolvedTxSettings,
                            eventBus: _this22,
                            quadBufferSize: settings.quadBufferSize,
                            fontEngines: settings.fontEngines,
                            textBaselineMode: settings.textBaselineMode,
                            inspector: settings.inspector !== null,
                            targetFPS: settings.targetFPS,
                            textLayoutCacheSize: settings.textLayoutCacheSize,
                            textureProcessingTimeLimit: settings.textureProcessingTimeLimit,
                            createImageBitmapSupport: settings.createImageBitmapSupport,
                            premultiplyAlphaHonored: settings.premultiplyAlphaHonored,
                            platform: platform,
                            maxRetryCount: (_settings$maxRetryCou2 = settings.maxRetryCount) !== null && _settings$maxRetryCou2 !== void 0 ? _settings$maxRetryCou2 : 5,
                            handleLoopError: settings.handleLoopError
                        });
                        _this22.root = _this22.stage.root;
                        if (target) {
                            var targetEl;
                            if (typeof target === "string") targetEl = document.getElementById(target); else targetEl = target;
                            if (!targetEl) throw new Error("Could not find target element");
                            targetEl.appendChild(canvas);
                        } else if (settings.canvas !== canvas) throw new Error("New canvas element could not be appended to undefined target");
                        if (inspector && ENABLE_INSPECTOR) _this22.inspector = new inspector(canvas, settings);
                        return _this22;
                    }
                    _inherits(RendererMain, _EventEmitter4);
                    return _createClass(RendererMain, [ {
                        key: "resolveTxSettings",
                        value: function resolveTxSettings(textureMemory) {
                            var _ref, _textureMemory$critic, _ref2, _textureMemory$target, _ref3, _textureMemory$cleanu, _ref4, _textureMemory$debugL, _ref5, _textureMemory$baseli, _ref6, _textureMemory$doNotE;
                            var currentTxSettings = this.stage && this.stage.options.textureMemory || {};
                            return {
                                criticalThreshold: (_ref = (_textureMemory$critic = textureMemory == null ? void 0 : textureMemory.criticalThreshold) !== null && _textureMemory$critic !== void 0 ? _textureMemory$critic : currentTxSettings == null ? void 0 : currentTxSettings.criticalThreshold) !== null && _ref !== void 0 ? _ref : 2e8,
                                targetThresholdLevel: (_ref2 = (_textureMemory$target = textureMemory == null ? void 0 : textureMemory.targetThresholdLevel) !== null && _textureMemory$target !== void 0 ? _textureMemory$target : currentTxSettings == null ? void 0 : currentTxSettings.targetThresholdLevel) !== null && _ref2 !== void 0 ? _ref2 : .8,
                                cleanupInterval: (_ref3 = (_textureMemory$cleanu = textureMemory == null ? void 0 : textureMemory.cleanupInterval) !== null && _textureMemory$cleanu !== void 0 ? _textureMemory$cleanu : currentTxSettings == null ? void 0 : currentTxSettings.cleanupInterval) !== null && _ref3 !== void 0 ? _ref3 : 5e3,
                                debugLogging: (_ref4 = (_textureMemory$debugL = textureMemory == null ? void 0 : textureMemory.debugLogging) !== null && _textureMemory$debugL !== void 0 ? _textureMemory$debugL : currentTxSettings == null ? void 0 : currentTxSettings.debugLogging) !== null && _ref4 !== void 0 ? _ref4 : false,
                                baselineMemoryAllocation: (_ref5 = (_textureMemory$baseli = textureMemory == null ? void 0 : textureMemory.baselineMemoryAllocation) !== null && _textureMemory$baseli !== void 0 ? _textureMemory$baseli : currentTxSettings == null ? void 0 : currentTxSettings.baselineMemoryAllocation) !== null && _ref5 !== void 0 ? _ref5 : 26e6,
                                doNotExceedCriticalThreshold: (_ref6 = (_textureMemory$doNotE = textureMemory == null ? void 0 : textureMemory.doNotExceedCriticalThreshold) !== null && _textureMemory$doNotE !== void 0 ? _textureMemory$doNotE : currentTxSettings == null ? void 0 : currentTxSettings.doNotExceedCriticalThreshold) !== null && _ref6 !== void 0 ? _ref6 : false
                            };
                        }
                    }, {
                        key: "createNode",
                        value: function createNode(props) {
                            var resolved = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                            var node = this.stage.createNode(props, resolved);
                            if (ENABLE_INSPECTOR && this.inspector) return this.inspector.createNode(node);
                            return node;
                        }
                    }, {
                        key: "createNodeProps",
                        value: function createNodeProps(initial) {
                            return this.stage.createNodeProps(initial);
                        }
                    }, {
                        key: "createTextNode",
                        value: function createTextNode(props) {
                            var resolved = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                            var textNode = this.stage.createTextNode(props, resolved);
                            if (ENABLE_INSPECTOR && this.inspector) return this.inspector.createTextNode(textNode);
                            return textNode;
                        }
                    }, {
                        key: "createTextNodeProps",
                        value: function createTextNodeProps(initial) {
                            return this.stage.createTextNodeProps(initial);
                        }
                    }, {
                        key: "destroyNode",
                        value: function destroyNode(node) {
                            if (ENABLE_INSPECTOR && this.inspector) this.inspector.destroyNode(node);
                            return node.destroy();
                        }
                    }, {
                        key: "createTexture",
                        value: function createTexture(textureType, props) {
                            return this.stage.txManager.createTexture(textureType, props);
                        }
                    }, {
                        key: "createShader",
                        value: function createShader(shType, props) {
                            return this.stage.shManager.createShader(shType, props);
                        }
                    }, {
                        key: "getNodeById",
                        value: function getNodeById(id) {
                            var _this$stage;
                            var root = (_this$stage = this.stage) == null ? void 0 : _this$stage.root;
                            if (!root) return null;
                            var _findNode = function findNode(node) {
                                if (node.id === id) return node;
                                var _iterator16 = _createForOfIteratorHelper(node.children), _step16;
                                try {
                                    for (_iterator16.s(); !(_step16 = _iterator16.n()).done; ) {
                                        var child = _step16.value;
                                        var found = _findNode(child);
                                        if (found) return found;
                                    }
                                } catch (err) {
                                    _iterator16.e(err);
                                } finally {
                                    _iterator16.f();
                                }
                                return null;
                            };
                            return _findNode(root);
                        }
                    }, {
                        key: "toggleFreeze",
                        value: function toggleFreeze() {
                            throw new Error("Not implemented");
                        }
                    }, {
                        key: "advanceFrame",
                        value: function advanceFrame() {
                            throw new Error("Not implemented");
                        }
                    }, {
                        key: "getBufferInfo",
                        value: function getBufferInfo() {
                            return this.stage.renderer.getBufferInfo();
                        }
                    }, {
                        key: "getCapabilities",
                        value: function getCapabilities() {
                            return this.stage.renderer.getCapabilities();
                        }
                    }, {
                        key: "setTelemetrySegment",
                        value: function setTelemetrySegment(label) {
                            this.stage.setTelemetrySegment(label);
                        }
                    }, {
                        key: "rerender",
                        value: function rerender() {
                            this.stage.requestRender();
                        }
                    }, {
                        key: "cleanup",
                        value: function cleanup() {
                            this.stage.cleanup();
                        }
                    }, {
                        key: "setClearColor",
                        value: function setClearColor(color) {
                            this.stage.setClearColor(color);
                        }
                    }, {
                        key: "setOptions",
                        value: function setOptions(options) {
                            var stage = this.stage;
                            if (options.textureMemory !== void 0) {
                                var textureMemory = options.textureMemory = this.resolveTxSettings(options.textureMemory);
                                stage.txMemManager.updateSettings(textureMemory);
                                stage.txMemManager.cleanup();
                            }
                            var stageOptions = stage.options;
                            for (var key in options) stageOptions[key] = options[key];
                            if (options.inspector !== void 0 && ENABLE_INSPECTOR) {
                                if (options.inspector === false) {
                                    var _this$inspector;
                                    (_this$inspector = this.inspector) == null || _this$inspector.destroy();
                                    this.inspector = null;
                                } else if (this.inspector === null || this.inspector.constructor !== options.inspector) {
                                    var _this$inspector2;
                                    this.inspector = new options.inspector(this.canvas, stage.options);
                                    (_this$inspector2 = this.inspector) == null || _this$inspector2.createNodes(this.root);
                                }
                            }
                            var needDimensionsUpdate = false;
                            if (options.deviceLogicalPixelRatio || options.devicePhysicalPixelRatio !== void 0) {
                                var _this$inspector3;
                                this.stage.pixelRatio = stageOptions.devicePhysicalPixelRatio * stageOptions.deviceLogicalPixelRatio;
                                (_this$inspector3 = this.inspector) == null || _this$inspector3.updateViewport(stageOptions.appWidth, stageOptions.appHeight, stageOptions.deviceLogicalPixelRatio);
                                needDimensionsUpdate = true;
                            }
                            if (options.appWidth !== void 0 || options.appHeight !== void 0) {
                                var _this$inspector4;
                                (_this$inspector4 = this.inspector) == null || _this$inspector4.updateViewport(stageOptions.appWidth, stageOptions.appHeight, stageOptions.deviceLogicalPixelRatio);
                                needDimensionsUpdate = true;
                            }
                            if (options.boundsMargin !== void 0) this.stage.setBoundsMargin(normalizeBoundsMargin$1(options.boundsMargin));
                            if (options.clearColor !== void 0) this.stage.setClearColor(options.clearColor);
                            if (needDimensionsUpdate) this.updateAppDimensions();
                        }
                    }, {
                        key: "updateAppDimensions",
                        value: function updateAppDimensions() {
                            var _this$stage$options = this.stage.options, appWidth = _this$stage$options.appWidth, appHeight = _this$stage$options.appHeight, deviceLogicalPixelRatio = _this$stage$options.deviceLogicalPixelRatio, devicePhysicalPixelRatio = _this$stage$options.devicePhysicalPixelRatio;
                            var deviceLogicalWidth = appWidth * deviceLogicalPixelRatio;
                            var deviceLogicalHeight = appHeight * deviceLogicalPixelRatio;
                            this.canvas.width = deviceLogicalWidth * devicePhysicalPixelRatio;
                            this.canvas.height = deviceLogicalHeight * devicePhysicalPixelRatio;
                            if (this.canvas.style) {
                                this.canvas.style.width = "".concat(deviceLogicalWidth, "px");
                                this.canvas.style.height = "".concat(deviceLogicalHeight, "px");
                            }
                            this.stage.renderer.updateViewport();
                            this.root.w = appWidth;
                            this.root.h = appHeight;
                            this.stage.updateViewportBounds();
                        }
                    }, {
                        key: "settings",
                        get: function get() {
                            return this.stage.options;
                        }
                    }, {
                        key: "targetFPS",
                        get: function get() {
                            return this.stage.options.targetFPS || 0;
                        },
                        set: function set(fps) {
                            this.stage.options.targetFPS = fps > 0 ? fps : 0;
                            this.stage.updateTargetFrameTime();
                        }
                    }, {
                        key: "windowDevicePixelRatio",
                        value: function windowDevicePixelRatio() {
                            return typeof window !== "undefined" ? window.devicePixelRatio : void 0;
                        }
                    } ]);
                }(EventEmitter);
                sdfPrefetch = new Map;
                canvasPrefetch = new Map;
                orNull = function orNull(promise) {
                    return promise.then(function(value) {
                        return value;
                    }, function() {
                        return null;
                    });
                };
                normalizeSdfData = function normalizeSdfData(response) {
                    var data = response;
                    if (typeof data === "string") try {
                        data = JSON.parse(data);
                    } catch (e) {
                        return null;
                    }
                    if (data === null || _typeof(data) !== "object") return null;
                    return data.chars !== void 0 ? data : null;
                };
                prefetchFont = function prefetchFont(options) {
                    var fontFamily = options.fontFamily, fontUrl = options.fontUrl, atlasUrl = options.atlasUrl, atlasDataUrl = options.atlasDataUrl;
                    var names = Array.isArray(fontFamily) ? fontFamily : [ fontFamily ];
                    var primary = names[0];
                    if (primary === void 0) return;
                    if (atlasDataUrl !== void 0 && options.type !== "canvas") {
                        if (sdfPrefetch.has(primary) === true) return;
                        sdfPrefetch.set(primary, {
                            data: orNull(fetchJson(atlasDataUrl, "json")).then(normalizeSdfData),
                            atlas: atlasUrl !== void 0 ? orNull(fetchJson(atlasUrl, "blob")).then(function(blob) {
                                return blob instanceof Blob ? blob : null;
                            }) : Promise.resolve(null)
                        });
                        return;
                    }
                    if (fontUrl !== void 0) {
                        if (canvasPrefetch.has(primary) === true) return;
                        if (typeof FontFace === "undefined") return;
                        canvasPrefetch.set(primary, orNull(Promise.all(names.map(function(name) {
                            return new FontFace(name, "url(".concat(fontUrl, ")")).load();
                        }))));
                    }
                };
                _export("st", takeSdfPrefetch = function takeSdfPrefetch(fontFamily) {
                    var prefetched = sdfPrefetch.get(fontFamily);
                    if (prefetched !== void 0) sdfPrefetch.delete(fontFamily);
                    return prefetched;
                });
                _export("ot", takeCanvasPrefetch = function takeCanvasPrefetch(fontFamily) {
                    var prefetched = canvasPrefetch.get(fontFamily);
                    if (prefetched !== void 0) canvasPrefetch.delete(fontFamily);
                    return prefetched;
                });
                _export("nt", sharedConfig = {
                    context: void 0,
                    registry: void 0,
                    effects: void 0,
                    done: false,
                    getContextId: function getContextId() {
                        return _getContextId(this.context.count);
                    },
                    getNextContextId: function getNextContextId() {
                        return _getContextId(this.context.count++);
                    }
                });
                equalFn = function equalFn(a, b) {
                    return a === b;
                };
                $PROXY = Symbol("solid-proxy");
                SUPPORTS_PROXY = typeof Proxy === "function";
                _export("k", $TRACK = Symbol("solid-track"));
                signalOptions = {
                    equals: equalFn
                };
                ERROR = null;
                runEffects = runQueue;
                STALE = 1;
                PENDING = 2;
                UNOWNED = {
                    owned: null,
                    cleanups: null,
                    context: null,
                    owner: null
                };
                NO_INIT = {};
                Owner = null;
                Transition = null;
                Scheduler = null;
                ExternalSourceConfig = null;
                Listener = null;
                Updates = null;
                Effects = null;
                ExecCount = 0;
                _createSignal15 = createSignal(false), _createSignal16 = _slicedToArray(_createSignal15, 2), 
                transPending = _createSignal16[0], setTransPending = _createSignal16[1];
                FALLBACK = Symbol("fallback");
                hydrationEnabled = false;
                propTraps = {
                    get: function get(_, property, receiver) {
                        if (property === $PROXY) return receiver;
                        return _.get(property);
                    },
                    has: function has(_, property) {
                        if (property === $PROXY) return true;
                        return _.has(property);
                    },
                    set: trueFn,
                    deleteProperty: trueFn,
                    getOwnPropertyDescriptor: function getOwnPropertyDescriptor(_, property) {
                        return {
                            configurable: true,
                            enumerable: true,
                            get: function get() {
                                return _.get(property);
                            },
                            set: trueFn,
                            deleteProperty: trueFn
                        };
                    },
                    ownKeys: function ownKeys(_) {
                        return _.keys();
                    }
                };
                narrowedError = function narrowedError(name) {
                    return "Stale read from <".concat(name, ">.");
                };
                SuspenseListContext = createContext();
                _createSignal17 = createSignal(void 0), _createSignal18 = _slicedToArray(_createSignal17, 2), 
                activeElement = _createSignal18[0], _setActiveElement = _createSignal18[1], _export("O", activeElement);
                isDev = !!(true, false);
                DOM_RENDERING = typeof SOLIDTV_DOM_RENDERING !== "undefined" && SOLIDTV_DOM_RENDERING === true;
                SHADERS_ENABLED = typeof SOLIDTV_DISABLE_SHADERS === "undefined" || SOLIDTV_DISABLE_SHADERS !== true;
                isDomRendererActive = function isDomRendererActive() {
                    return DOM_RENDERING && Config.domRendererEnabled;
                };
                _export("D", Config = {
                    debug: false,
                    domRendererEnabled: false,
                    focusDebug: false,
                    keyDebug: false,
                    focusHistoryDebug: 0,
                    animationsEnabled: true,
                    animationSettings: {
                        duration: 250,
                        easing: "ease-in-out"
                    },
                    convertToShader: convertToShader,
                    setActiveElement: function setActiveElement(elm) {
                        return _setActiveElement(elm);
                    },
                    fontSettings: {
                        fontFamily: "Ubuntu",
                        fontSize: 100
                    },
                    fontWeightAlias: {
                        thin: 100,
                        light: 300,
                        regular: "",
                        400: "",
                        medium: 500,
                        bold: 700,
                        black: 900
                    },
                    focusStateKey: "$focus",
                    lockStyles: true,
                    rendererOptions: {},
                    stateOrder: []
                });
                NodeType = {
                    Element: "element",
                    TextNode: "textNode",
                    Text: "text"
                };
                TextNode = _createClass(function TextNode(text) {
                    this._type = "text";
                    this.parent = void 0;
                    this.text = void 0;
                    this.text = text;
                });
                _export("T", isFunction = function isFunction(obj) {
                    return typeof obj === "function";
                });
                _export("S", hasFocus = isFocused);
                colorToRgba = function colorToRgba(c) {
                    return "rgba(".concat(c >> 24 & 255, ",").concat(c >> 16 & 255, ",").concat(c >> 8 & 255, ",").concat((c & 255) / 255, ")");
                };
                _styleRef = typeof document !== "undefined" ? ((_document$documentEle = document.documentElement) == null ? void 0 : _document$documentEle.style) || {} : {};
                supportsObjectFit = "objectFit" in _styleRef;
                supportsObjectPosition = "objectPosition" in _styleRef;
                supportsMixBlendMode = "mixBlendMode" in _styleRef;
                supportsStandardMask = "maskImage" in _styleRef;
                supportsWebkitMask = "webkitMaskImage" in _styleRef;
                supportsCssMask = supportsStandardMask || supportsWebkitMask;
                animationTasks = [];
                animationFrameRequested = false;
                AnimationController = function() {
                    function AnimationController(node, props, rawSettings) {
                        var _rawSettings$duration, _rawSettings$delay, _rawSettings$easing, _rawSettings$loop, _rawSettings$repeat, _rawSettings$adaptive;
                        this.node = void 0;
                        this.state = "paused";
                        this.stopPromise = null;
                        this.stopResolve = null;
                        this.propsStart = {};
                        this.propsEnd = {};
                        this.timeStart = performance.now();
                        this.timeEnd = void 0;
                        this.settings = void 0;
                        this.iteration = 0;
                        this.pausedTime = null;
                        this.node = node;
                        this.settings = {
                            duration: (_rawSettings$duration = rawSettings.duration) !== null && _rawSettings$duration !== void 0 ? _rawSettings$duration : 300,
                            delay: (_rawSettings$delay = rawSettings.delay) !== null && _rawSettings$delay !== void 0 ? _rawSettings$delay : 0,
                            easing: (_rawSettings$easing = rawSettings.easing) !== null && _rawSettings$easing !== void 0 ? _rawSettings$easing : "linear",
                            loop: (_rawSettings$loop = rawSettings.loop) !== null && _rawSettings$loop !== void 0 ? _rawSettings$loop : false,
                            repeat: (_rawSettings$repeat = rawSettings.repeat) !== null && _rawSettings$repeat !== void 0 ? _rawSettings$repeat : 1,
                            stopMethod: false,
                            adaptiveDuration: (_rawSettings$adaptive = rawSettings.adaptiveDuration) !== null && _rawSettings$adaptive !== void 0 ? _rawSettings$adaptive : false
                        };
                        this.timeEnd = this.timeStart + this.settings.delay + this.settings.duration;
                        for (var _i17 = 0, _Object$entries = Object.entries(props); _i17 < _Object$entries.length; _i17++) {
                            var _Object$entries$_i = _slicedToArray(_Object$entries[_i17], 2), prop = _Object$entries$_i[0], value = _Object$entries$_i[1];
                            if (value != null && typeof value === "number") {
                                this.propsStart[prop] = node.props[prop];
                                this.propsEnd[prop] = value;
                            }
                        }
                        animationTasks.push(this);
                    }
                    return _createClass(AnimationController, [ {
                        key: "start",
                        value: function start() {
                            if (this.pausedTime != null) {
                                this.timeStart += performance.now() - this.pausedTime;
                                this.pausedTime = null;
                            } else this.timeStart = performance.now();
                            this.state = "running";
                            requestAnimationUpdate();
                            return this;
                        }
                    }, {
                        key: "pause",
                        value: function pause() {
                            this.pausedTime = performance.now();
                            this.state = "paused";
                            return this;
                        }
                    }, {
                        key: "stop",
                        value: function stop() {
                            var index = animationTasks.indexOf(this);
                            if (index !== -1) animationTasks.splice(index, 1);
                            this.state = "stopped";
                            if (this.stopResolve) {
                                this.stopResolve();
                                this.stopResolve = null;
                                this.stopPromise = null;
                            }
                            return this;
                        }
                    }, {
                        key: "restore",
                        value: function restore() {
                            return this;
                        }
                    }, {
                        key: "waitUntilStopped",
                        value: function waitUntilStopped() {
                            var _this23 = this;
                            var _this$stopPromise;
                            (_this$stopPromise = this.stopPromise) !== null && _this$stopPromise !== void 0 || (this.stopPromise = new Promise(function(resolve) {
                                _this23.stopResolve = resolve;
                            }));
                            return this.stopPromise;
                        }
                    }, {
                        key: "on",
                        value: function on() {
                            return this;
                        }
                    }, {
                        key: "once",
                        value: function once() {
                            return this;
                        }
                    }, {
                        key: "off",
                        value: function off() {
                            return this;
                        }
                    }, {
                        key: "emit",
                        value: function emit() {
                            return this;
                        }
                    } ]);
                }();
                elMap = new WeakMap;
                textNodesToMeasure = new Set;
                containTextNodes = new Set;
                fontLoadingListenerSetup = false;
                defaultShader = {
                    shaderType: "",
                    props: void 0
                };
                lastNodeId = 0;
                CoreNodeRenderStateMap = new Map([ [ 0, "init" ], [ 2, "outOfBounds" ], [ 4, "inBounds" ], [ 8, "inViewport" ] ]);
                DOMNode = function(_EventEmitter5) {
                    function DOMNode(stage, props) {
                        var _this24;
                        _this24 = _callSuper(this, DOMNode);
                        _this24.stage = void 0;
                        _this24.props = void 0;
                        _this24.div = document.createElement("div");
                        _this24.divBg = void 0;
                        _this24.divBorder = void 0;
                        _this24.imgEl = void 0;
                        _this24.imageLoading = false;
                        _this24.lazyImagePendingSrc = null;
                        _this24.lazyImageSubTextureProps = null;
                        _this24.boundsDirty = true;
                        _this24.children = new Set;
                        _this24._lastStyleStr = "";
                        _this24.id = ++lastNodeId;
                        _this24.renderState = 0;
                        _this24.preventCleanup = true;
                        _this24.animate = animate;
                        _this24.stage = stage;
                        _this24.props = props;
                        _this24.div._node = _this24;
                        _this24.div.setAttribute("data-id", String(_this24.id));
                        elMap.set(_this24, _this24.div);
                        var parent = _this24.props.parent;
                        if (parent instanceof DOMNode) parent.children.add(_this24);
                        updateNodeParent(_this24);
                        updateNodeStyles(_this24);
                        updateNodeData(_this24);
                        return _this24;
                    }
                    _inherits(DOMNode, _EventEmitter5);
                    return _createClass(DOMNode, [ {
                        key: "destroy",
                        value: function destroy() {
                            var _this$div$parentNode;
                            elMap.delete(this);
                            var parent = this.props.parent;
                            if (parent instanceof DOMNode) parent.children.delete(this);
                            (_this$div$parentNode = this.div.parentNode) == null || _this$div$parentNode.removeChild(this.div);
                        }
                    }, {
                        key: "parent",
                        get: function get() {
                            return this.props.parent;
                        },
                        set: function set(value) {
                            if (this.props.parent === value) return;
                            var prevParent = this.props.parent;
                            if (prevParent instanceof DOMNode) {
                                prevParent.children.delete(this);
                                prevParent.markChildrenBoundsDirty();
                            }
                            this.props.parent = value;
                            if (value instanceof DOMNode) {
                                value.children.add(this);
                                value.markChildrenBoundsDirty();
                            }
                            this.boundsDirty = true;
                            this.markChildrenBoundsDirty();
                            updateNodeParent(this);
                        }
                    }, {
                        key: "markChildrenBoundsDirty",
                        value: function markChildrenBoundsDirty() {
                            var _iterator17 = _createForOfIteratorHelper(this.children), _step17;
                            try {
                                for (_iterator17.s(); !(_step17 = _iterator17.n()).done; ) {
                                    var child = _step17.value;
                                    child.boundsDirty = true;
                                    if (child !== child.stage.root) {
                                        if (nodeHasTextureSource(child)) {
                                            var nextState = computeRenderStateForNode(child);
                                            if (nextState != null) child.updateRenderState(nextState);
                                        }
                                        child.boundsDirty = false;
                                    }
                                    child.markChildrenBoundsDirty();
                                }
                            } catch (err) {
                                _iterator17.e(err);
                            } finally {
                                _iterator17.f();
                            }
                        }
                    }, {
                        key: "updateRenderState",
                        value: function updateRenderState(renderState) {
                            if (renderState === this.renderState) return;
                            var previous = this.renderState;
                            this.renderState = renderState;
                            var event = CoreNodeRenderStateMap.get(renderState);
                            if (isRenderStateInBounds(renderState)) this.applyPendingImageSrc();
                            if (event && event !== "init") this.emit(event, {
                                previous: previous,
                                current: renderState
                            });
                            if (this.imgEl) this.imgEl.dataset.state = event;
                        }
                    }, {
                        key: "showBackgroundLayer",
                        value: function showBackgroundLayer() {
                            if (this.divBg) this.divBg.style.opacity = "1";
                        }
                    }, {
                        key: "hideMaskedBackgroundLayer",
                        value: function hideMaskedBackgroundLayer() {
                            if (this.divBg && (this.divBg.style.maskImage || this.divBg.style.webkitMaskImage)) this.divBg.style.opacity = "0";
                        }
                    }, {
                        key: "applyPendingImageSrc",
                        value: function applyPendingImageSrc() {
                            if (!this.imgEl) return;
                            var pendingSrc = this.lazyImagePendingSrc;
                            if (!pendingSrc) return;
                            if (this.imgEl.dataset.rawSrc === pendingSrc) return;
                            this.imageLoading = true;
                            this.imgEl.style.opacity = "0";
                            this.hideMaskedBackgroundLayer();
                            this.imgEl.style.display = "";
                            this.imgEl.dataset.pendingSrc = pendingSrc;
                            if (pendingSrc.startsWith("data:")) this.imgEl.removeAttribute("crossorigin"); else this.imgEl.crossOrigin = "anonymous";
                            this.imgEl.src = pendingSrc;
                            this.imgEl.dataset.rawSrc = pendingSrc;
                            this.imgEl.dataset.pendingSrc = "";
                        }
                    }, {
                        key: "x",
                        get: function get() {
                            return this.props.x;
                        },
                        set: function set(v) {
                            if (this.props.x === v) return;
                            this.props.x = v;
                            this.boundsDirty = true;
                            this.markChildrenBoundsDirty();
                            updateTransformOnly(this);
                        }
                    }, {
                        key: "y",
                        get: function get() {
                            return this.props.y;
                        },
                        set: function set(v) {
                            if (this.props.y === v) return;
                            this.props.y = v;
                            this.boundsDirty = true;
                            this.markChildrenBoundsDirty();
                            updateTransformOnly(this);
                        }
                    }, {
                        key: "w",
                        get: function get() {
                            return this.props.w;
                        },
                        set: function set(v) {
                            if (this.props.w === v) return;
                            this.props.w = v;
                            this.boundsDirty = true;
                            this.markChildrenBoundsDirty();
                            updateNodeStyles(this);
                        }
                    }, {
                        key: "h",
                        get: function get() {
                            return this.props.h;
                        },
                        set: function set(v) {
                            if (this.props.h === v) return;
                            this.props.h = v;
                            this.boundsDirty = true;
                            this.markChildrenBoundsDirty();
                            updateNodeStyles(this);
                        }
                    }, {
                        key: "width",
                        get: function get() {
                            return this.props.w;
                        },
                        set: function set(v) {
                            if (this.props.w === v) return;
                            this.props.w = v;
                            this.boundsDirty = true;
                            this.markChildrenBoundsDirty();
                            updateNodeStyles(this);
                        }
                    }, {
                        key: "height",
                        get: function get() {
                            return this.props.h;
                        },
                        set: function set(v) {
                            if (this.props.h === v) return;
                            this.props.h = v;
                            this.boundsDirty = true;
                            this.markChildrenBoundsDirty();
                            updateNodeStyles(this);
                        }
                    }, {
                        key: "alpha",
                        get: function get() {
                            return this.props.alpha;
                        },
                        set: function set(v) {
                            this.props.alpha = v;
                            updateNodeStyles(this);
                        }
                    }, {
                        key: "autosize",
                        get: function get() {
                            return this.props.autosize;
                        },
                        set: function set(v) {
                            this.props.autosize = v;
                            updateNodeStyles(this);
                        }
                    }, {
                        key: "clipping",
                        get: function get() {
                            return this.props.clipping;
                        },
                        set: function set(v) {
                            this.props.clipping = v;
                            updateNodeStyles(this);
                        }
                    }, {
                        key: "color",
                        get: function get() {
                            return this.props.color;
                        },
                        set: function set(v) {
                            this.props.color = v;
                            updateNodeStyles(this);
                        }
                    }, {
                        key: "colorTop",
                        get: function get() {
                            return this.props.colorTop;
                        },
                        set: function set(v) {
                            this.props.colorTop = v;
                            updateNodeStyles(this);
                        }
                    }, {
                        key: "colorBottom",
                        get: function get() {
                            return this.props.colorBottom;
                        },
                        set: function set(v) {
                            this.props.colorBottom = v;
                            updateNodeStyles(this);
                        }
                    }, {
                        key: "colorLeft",
                        get: function get() {
                            return this.props.colorLeft;
                        },
                        set: function set(v) {
                            this.props.colorLeft = v;
                            updateNodeStyles(this);
                        }
                    }, {
                        key: "colorRight",
                        get: function get() {
                            return this.props.colorRight;
                        },
                        set: function set(v) {
                            this.props.colorRight = v;
                            updateNodeStyles(this);
                        }
                    }, {
                        key: "colorTl",
                        get: function get() {
                            return this.props.colorTl;
                        },
                        set: function set(v) {
                            this.props.colorTl = v;
                            updateNodeStyles(this);
                        }
                    }, {
                        key: "colorTr",
                        get: function get() {
                            return this.props.colorTr;
                        },
                        set: function set(v) {
                            this.props.colorTr = v;
                            updateNodeStyles(this);
                        }
                    }, {
                        key: "colorBr",
                        get: function get() {
                            return this.props.colorBr;
                        },
                        set: function set(v) {
                            this.props.colorBr = v;
                            updateNodeStyles(this);
                        }
                    }, {
                        key: "colorBl",
                        get: function get() {
                            return this.props.colorBl;
                        },
                        set: function set(v) {
                            this.props.colorBl = v;
                            updateNodeStyles(this);
                        }
                    }, {
                        key: "zIndex",
                        get: function get() {
                            return this.props.zIndex;
                        },
                        set: function set(v) {
                            if (this.props.zIndex === v) return;
                            this.props.zIndex = Math.ceil(v);
                            updateNodeStyles(this);
                        }
                    }, {
                        key: "texture",
                        get: function get() {
                            return this.props.texture;
                        },
                        set: function set(v) {
                            if (this.props.texture === v) return;
                            this.props.texture = v;
                            this.boundsDirty = true;
                            updateNodeStyles(this);
                        }
                    }, {
                        key: "textureOptions",
                        get: function get() {
                            return this.props.textureOptions;
                        },
                        set: function set(v) {
                            this.props.textureOptions = v;
                            updateNodeStyles(this);
                        }
                    }, {
                        key: "src",
                        get: function get() {
                            return this.props.src;
                        },
                        set: function set(v) {
                            if (this.props.src === v) return;
                            this.props.src = v;
                            this.boundsDirty = true;
                            updateNodeStyles(this);
                        }
                    }, {
                        key: "scale",
                        get: function get() {
                            var _this$props$scale;
                            return (_this$props$scale = this.props.scale) !== null && _this$props$scale !== void 0 ? _this$props$scale : 1;
                        },
                        set: function set(v) {
                            if (this.props.scale === v) return;
                            this.props.scale = v;
                            this.boundsDirty = true;
                            this.markChildrenBoundsDirty();
                            updateTransformOnly(this);
                        }
                    }, {
                        key: "scaleX",
                        get: function get() {
                            return this.props.scaleX;
                        },
                        set: function set(v) {
                            if (this.props.scaleX === v) return;
                            this.props.scaleX = v;
                            this.boundsDirty = true;
                            this.markChildrenBoundsDirty();
                            updateTransformOnly(this);
                        }
                    }, {
                        key: "scaleY",
                        get: function get() {
                            return this.props.scaleY;
                        },
                        set: function set(v) {
                            if (this.props.scaleY === v) return;
                            this.props.scaleY = v;
                            this.boundsDirty = true;
                            this.markChildrenBoundsDirty();
                            updateTransformOnly(this);
                        }
                    }, {
                        key: "mount",
                        get: function get() {
                            return this.props.mount;
                        },
                        set: function set(v) {
                            if (this.props.mount === v) return;
                            this.props.mount = v;
                            this.boundsDirty = true;
                            this.markChildrenBoundsDirty();
                            updateTransformOnly(this);
                        }
                    }, {
                        key: "mountX",
                        get: function get() {
                            return this.props.mountX;
                        },
                        set: function set(v) {
                            if (this.props.mountX === v) return;
                            this.props.mountX = v;
                            this.boundsDirty = true;
                            this.markChildrenBoundsDirty();
                            updateTransformOnly(this);
                        }
                    }, {
                        key: "mountY",
                        get: function get() {
                            return this.props.mountY;
                        },
                        set: function set(v) {
                            if (this.props.mountY === v) return;
                            this.props.mountY = v;
                            this.boundsDirty = true;
                            this.markChildrenBoundsDirty();
                            updateTransformOnly(this);
                        }
                    }, {
                        key: "pivot",
                        get: function get() {
                            return this.props.pivot;
                        },
                        set: function set(v) {
                            if (this.props.pivot === v) return;
                            this.props.pivot = v;
                            this.boundsDirty = true;
                            this.markChildrenBoundsDirty();
                            updateNodeStyles(this);
                        }
                    }, {
                        key: "pivotX",
                        get: function get() {
                            return this.props.pivotX;
                        },
                        set: function set(v) {
                            if (this.props.pivotX === v) return;
                            this.props.pivotX = v;
                            this.boundsDirty = true;
                            this.markChildrenBoundsDirty();
                            updateNodeStyles(this);
                        }
                    }, {
                        key: "pivotY",
                        get: function get() {
                            return this.props.pivotY;
                        },
                        set: function set(v) {
                            if (this.props.pivotY === v) return;
                            this.props.pivotY = v;
                            this.boundsDirty = true;
                            this.markChildrenBoundsDirty();
                            updateNodeStyles(this);
                        }
                    }, {
                        key: "rotation",
                        get: function get() {
                            return this.props.rotation;
                        },
                        set: function set(v) {
                            if (this.props.rotation === v) return;
                            this.props.rotation = v;
                            this.boundsDirty = true;
                            this.markChildrenBoundsDirty();
                            updateTransformOnly(this);
                        }
                    }, {
                        key: "rtt",
                        get: function get() {
                            return this.props.rtt;
                        },
                        set: function set(v) {
                            this.props.rtt = v;
                            updateNodeStyles(this);
                        }
                    }, {
                        key: "shader",
                        get: function get() {
                            return this.props.shader;
                        },
                        set: function set(v) {
                            this.props.shader = v;
                            updateNodeStyles(this);
                        }
                    }, {
                        key: "data",
                        get: function get() {
                            return this.props.data;
                        },
                        set: function set(v) {
                            this.props.data = v;
                            updateNodeData(this);
                        }
                    }, {
                        key: "imageType",
                        get: function get() {
                            return this.props.imageType;
                        },
                        set: function set(v) {
                            this.props.imageType = v;
                        }
                    }, {
                        key: "srcWidth",
                        get: function get() {
                            return this.props.srcWidth;
                        },
                        set: function set(v) {
                            this.props.srcWidth = v;
                        }
                    }, {
                        key: "srcHeight",
                        get: function get() {
                            return this.props.srcHeight;
                        },
                        set: function set(v) {
                            this.props.srcHeight = v;
                        }
                    }, {
                        key: "srcX",
                        get: function get() {
                            return this.props.srcX;
                        },
                        set: function set(v) {
                            this.props.srcX = v;
                        }
                    }, {
                        key: "srcY",
                        get: function get() {
                            return this.props.srcY;
                        },
                        set: function set(v) {
                            this.props.srcY = v;
                        }
                    }, {
                        key: "boundsMargin",
                        get: function get() {
                            return this.props.boundsMargin;
                        },
                        set: function set(value) {
                            this.props.boundsMargin = value;
                            this.boundsDirty = true;
                            this.markChildrenBoundsDirty();
                        }
                    }, {
                        key: "ignoreParentAlpha",
                        get: function get() {
                            return this.props.ignoreParentAlpha;
                        },
                        set: function set(v) {
                            this.props.ignoreParentAlpha = v;
                            updateNodeStyles(this);
                        }
                    }, {
                        key: "placeholderColor",
                        get: function get() {
                            return this.props.placeholderColor;
                        },
                        set: function set(v) {
                            this.props.placeholderColor = v;
                            updateNodeStyles(this);
                        }
                    }, {
                        key: "absX",
                        get: function get() {
                            var parent = this.props.parent;
                            return this.x + -this.w * this.mountX + (parent instanceof DOMNode ? parent.absX : 0);
                        }
                    }, {
                        key: "absY",
                        get: function get() {
                            var parent = this.props.parent;
                            return this.y + -this.h * this.mountY + (parent instanceof DOMNode ? parent.absY : 0);
                        }
                    } ]);
                }(EventEmitter);
                DOMText = function(_DOMNode) {
                    function DOMText(stage, props) {
                        var _this25;
                        _this25 = _callSuper(this, DOMText, [ stage, props ]);
                        _this25.props = void 0;
                        _this25.loaded = false;
                        _this25.props = props;
                        _this25.div.innerText = props.text;
                        updateNodeStyles(_this25);
                        updateDOMTextSize(_this25, false);
                        syncContainTextNodeTracking(_this25);
                        scheduleUpdateDOMTextMeasurement(_this25);
                        return _this25;
                    }
                    _inherits(DOMText, _DOMNode);
                    return _createClass(DOMText, [ {
                        key: "destroy",
                        value: function destroy() {
                            textNodesToMeasure.delete(this);
                            containTextNodes.delete(this);
                            _superPropGet(DOMText, "destroy", this, 3)([]);
                        }
                    }, {
                        key: "text",
                        get: function get() {
                            return this.props.text;
                        },
                        set: function set(v) {
                            if (this.props.text === v) return;
                            this.props.text = v;
                            this.div.innerText = v;
                            scheduleUpdateDOMTextMeasurement(this);
                        }
                    }, {
                        key: "fontFamily",
                        get: function get() {
                            return this.props.fontFamily;
                        },
                        set: function set(v) {
                            if (this.props.fontFamily === v) return;
                            this.props.fontFamily = v;
                            updateNodeStyles(this);
                            scheduleUpdateDOMTextMeasurement(this);
                        }
                    }, {
                        key: "fontSize",
                        get: function get() {
                            return this.props.fontSize;
                        },
                        set: function set(v) {
                            if (this.props.fontSize === v) return;
                            this.props.fontSize = v;
                            updateNodeStyles(this);
                            scheduleUpdateDOMTextMeasurement(this);
                        }
                    }, {
                        key: "fontStyle",
                        get: function get() {
                            return this.props.fontStyle;
                        },
                        set: function set(v) {
                            if (this.props.fontStyle === v) return;
                            this.props.fontStyle = v;
                            updateNodeStyles(this);
                            scheduleUpdateDOMTextMeasurement(this);
                        }
                    }, {
                        key: "fontWeight",
                        get: function get() {
                            return this.props.fontWeight;
                        },
                        set: function set(v) {
                            if (this.props.fontWeight === v) return;
                            this.props.fontWeight = v;
                            updateNodeStyles(this);
                            scheduleUpdateDOMTextMeasurement(this);
                        }
                    }, {
                        key: "fontStretch",
                        get: function get() {
                            return this.props.fontStretch;
                        },
                        set: function set(v) {
                            if (this.props.fontStretch === v) return;
                            this.props.fontStretch = v;
                            updateNodeStyles(this);
                            scheduleUpdateDOMTextMeasurement(this);
                        }
                    }, {
                        key: "forceLoad",
                        get: function get() {
                            return this.props.forceLoad;
                        },
                        set: function set(v) {
                            this.props.forceLoad = v;
                        }
                    }, {
                        key: "lineHeight",
                        get: function get() {
                            return this.props.lineHeight;
                        },
                        set: function set(v) {
                            if (this.props.lineHeight === v) return;
                            this.props.lineHeight = v;
                            updateNodeStyles(this);
                            scheduleUpdateDOMTextMeasurement(this);
                        }
                    }, {
                        key: "maxWidth",
                        get: function get() {
                            return this.props.maxWidth;
                        },
                        set: function set(v) {
                            if (this.props.maxWidth === v) return;
                            this.props.maxWidth = v;
                            updateNodeStyles(this);
                            scheduleUpdateDOMTextMeasurement(this);
                        }
                    }, {
                        key: "maxHeight",
                        get: function get() {
                            return this.props.maxHeight;
                        },
                        set: function set(v) {
                            if (this.props.maxHeight === v) return;
                            this.props.maxHeight = v;
                            updateNodeStyles(this);
                            scheduleUpdateDOMTextMeasurement(this);
                        }
                    }, {
                        key: "letterSpacing",
                        get: function get() {
                            return this.props.letterSpacing;
                        },
                        set: function set(v) {
                            if (this.props.letterSpacing === v) return;
                            this.props.letterSpacing = v;
                            updateNodeStyles(this);
                            scheduleUpdateDOMTextMeasurement(this);
                        }
                    }, {
                        key: "textAlign",
                        get: function get() {
                            return this.props.textAlign;
                        },
                        set: function set(v) {
                            if (this.props.textAlign === v) return;
                            this.props.textAlign = v;
                            updateNodeStyles(this);
                        }
                    }, {
                        key: "overflowSuffix",
                        get: function get() {
                            return this.props.overflowSuffix;
                        },
                        set: function set(v) {
                            if (this.props.overflowSuffix === v) return;
                            this.props.overflowSuffix = v;
                            updateNodeStyles(this);
                        }
                    }, {
                        key: "maxLines",
                        get: function get() {
                            return this.props.maxLines;
                        },
                        set: function set(v) {
                            if (this.props.maxLines === v) return;
                            this.props.maxLines = v;
                            updateNodeStyles(this);
                            scheduleUpdateDOMTextMeasurement(this);
                        }
                    }, {
                        key: "contain",
                        get: function get() {
                            return this.props.contain;
                        },
                        set: function set(v) {
                            if (this.props.contain === v) return;
                            this.props.contain = v;
                            syncContainTextNodeTracking(this);
                            updateNodeStyles(this);
                            scheduleUpdateDOMTextMeasurement(this);
                        }
                    }, {
                        key: "verticalAlign",
                        get: function get() {
                            return this.props.verticalAlign;
                        },
                        set: function set(v) {
                            this.props.verticalAlign = v;
                            updateNodeStyles(this);
                        }
                    }, {
                        key: "textRendererOverride",
                        get: function get() {
                            return this.props.textRendererOverride;
                        },
                        set: function set(v) {
                            this.props.textRendererOverride = v;
                            updateNodeStyles(this);
                        }
                    }, {
                        key: "offsetY",
                        get: function get() {
                            return this.props.offsetY;
                        },
                        set: function set(v) {
                            this.props.offsetY = v;
                            updateNodeStyles(this);
                        }
                    }, {
                        key: "wordBreak",
                        get: function get() {
                            return this.props.wordBreak;
                        },
                        set: function set(v) {
                            this.props.wordBreak = v;
                            updateNodeStyles(this);
                        }
                    } ]);
                }(DOMNode);
                DOMRendererMain = function() {
                    function DOMRendererMain(settings, rawTarget) {
                        var _settings$appWidth2, _settings$appHeight2;
                        this.settings = void 0;
                        this.root = void 0;
                        this.canvas = void 0;
                        this.stage = void 0;
                        this.eventListeners = new Map;
                        this.settings = settings;
                        var target;
                        if (typeof rawTarget === "string") {
                            var result = document.getElementById(rawTarget);
                            if (result instanceof HTMLElement) target = result; else throw new Error("Target #".concat(rawTarget, " not found"));
                        } else target = rawTarget;
                        var canvas = document.body.appendChild(document.createElement("canvas"));
                        canvas.style.position = "absolute";
                        canvas.style.top = "0";
                        canvas.style.left = "0";
                        canvas.style.width = "100vw";
                        canvas.style.height = "100vh";
                        this.canvas = canvas;
                        this.stage = {
                            root: null,
                            renderer: {
                                mode: "canvas",
                                boundsMargin: settings.boundsMargin
                            },
                            shManager: {
                                registerShaderType: function registerShaderType() {}
                            },
                            animationManager: {
                                registerAnimation: function registerAnimation(anim) {
                                    console.log("registerAnimation", anim);
                                },
                                unregisterAnimation: function unregisterAnimation(anim) {
                                    console.log("unregisterAnimation", anim);
                                }
                            },
                            loadFont: function() {
                                var _loadFont = _asyncToGenerator(_regenerator().m(function _callee13() {
                                    return _regenerator().w(function(_context14) {
                                        while (1) switch (_context14.n) {
                                          case 0:
                                            return _context14.a(2);
                                        }
                                    }, _callee13);
                                }));
                                function loadFont() {
                                    return _loadFont.apply(this, arguments);
                                }
                                return loadFont;
                            }(),
                            cleanup: function cleanup() {},
                            requestRender: function requestRender() {}
                        };
                        this.root = new DOMNode(this.stage, resolveNodeDefaults({
                            w: (_settings$appWidth2 = settings.appWidth) !== null && _settings$appWidth2 !== void 0 ? _settings$appWidth2 : 1920,
                            h: (_settings$appHeight2 = settings.appHeight) !== null && _settings$appHeight2 !== void 0 ? _settings$appHeight2 : 1080,
                            shader: defaultShader,
                            zIndex: 1
                        }));
                        this.stage.root = this.root;
                        target.appendChild(this.root.div);
                        if (Config.fontSettings.fontFamily) this.root.div.style.fontFamily = Config.fontSettings.fontFamily;
                        if (Config.fontSettings.fontSize) this.root.div.style.fontSize = Config.fontSettings.fontSize + "px";
                        if (Config.fontSettings.lineHeight) this.root.div.style.lineHeight = Config.fontSettings.lineHeight + "px"; else this.root.div.style.lineHeight = "1.2";
                        if (Config.fontSettings.fontWeight) if (typeof Config.fontSettings.fontWeight === "number") this.root.div.style.fontWeight = Config.fontSettings.fontWeight + "px"; else this.root.div.style.fontWeight = Config.fontSettings.fontWeight;
                        updateRootPosition.call(this);
                        new MutationObserver(updateRootPosition.bind(this)).observe(this.canvas, {
                            attributes: true
                        });
                        new ResizeObserver(updateRootPosition.bind(this)).observe(this.canvas);
                        window.addEventListener("resize", updateRootPosition.bind(this));
                    }
                    return _createClass(DOMRendererMain, [ {
                        key: "removeAllListeners",
                        value: function removeAllListeners() {
                            if (this.eventListeners.size === 0) return;
                            this.eventListeners.forEach(function(listeners) {
                                return listeners.clear();
                            });
                            this.eventListeners.clear();
                        }
                    }, {
                        key: "once",
                        value: function once(event, listener) {
                            var _this26 = this;
                            var _wrappedListener = function wrappedListener(target, data) {
                                _this26.off(event, _wrappedListener);
                                listener(target, data);
                            };
                            this.on(event, _wrappedListener);
                        }
                    }, {
                        key: "on",
                        value: function on(name, callback) {
                            var listeners = this.eventListeners.get(name);
                            if (!listeners) {
                                listeners = new Set;
                                this.eventListeners.set(name, listeners);
                            }
                            listeners.add(callback);
                        }
                    }, {
                        key: "off",
                        value: function off(event, listener) {
                            var listeners = this.eventListeners.get(event);
                            if (listeners) {
                                listeners.delete(listener);
                                if (listeners.size === 0) this.eventListeners.delete(event);
                            }
                        }
                    }, {
                        key: "emit",
                        value: function emit(event, targetOrData, maybeData) {
                            var listeners = this.eventListeners.get(event);
                            if (!listeners || listeners.size === 0) return;
                            var hasExplicitTarget = arguments.length === 3;
                            var target = hasExplicitTarget ? targetOrData : this.root;
                            var data = hasExplicitTarget ? maybeData : targetOrData;
                            for (var _i18 = 0, _Array$from = Array.from(listeners); _i18 < _Array$from.length; _i18++) {
                                var listener = _Array$from[_i18];
                                try {
                                    listener(target, data);
                                } catch (error) {
                                    console.error('Error in listener for event "'.concat(event, '"'), error);
                                }
                            }
                        }
                    }, {
                        key: "createNode",
                        value: function createNode(props) {
                            return new DOMNode(this.stage, resolveNodeDefaults(props));
                        }
                    }, {
                        key: "createTextNode",
                        value: function createTextNode(props) {
                            return new DOMText(this.stage, resolveTextNodeDefaults(props));
                        }
                    }, {
                        key: "createShader",
                        value: function createShader() {
                            for (var _len7 = arguments.length, args = new Array(_len7), _key8 = 0; _key8 < _len7; _key8++) {
                                args[_key8] = arguments[_key8];
                            }
                            var shaderType = args[0], props = args[1];
                            return {
                                shaderType: shaderType,
                                props: props,
                                program: {}
                            };
                        }
                    }, {
                        key: "createTexture",
                        value: function createTexture(textureType, props) {
                            var type = TextureType.generic;
                            switch (textureType) {
                              case "SubTexture":
                                type = TextureType.subTexture;
                                break;

                              case "ImageTexture":
                                type = TextureType.image;
                                break;

                              case "ColorTexture":
                                type = TextureType.color;
                                break;

                              case "NoiseTexture":
                                type = TextureType.noise;
                                break;

                              case "RenderTexture":
                                type = TextureType.renderToTexture;
                                break;
                            }
                            return {
                                type: type,
                                props: props
                            };
                        }
                    } ]);
                }();
                pendingFontLoads = [];
                States = function(_Array) {
                    function States(callback) {
                        var _this28 = this;
                        var _this27;
                        var initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                        var _super = function _super() {
                            for (var _len8 = arguments.length, _args = new Array(_len8), _key9 = 0; _key9 < _len8; _key9++) {
                                _args[_key9] = arguments[_key9];
                            }
                            return _this27 = _callSuper(_this28, States, [].concat(_args)), _this27.onChange = void 0, 
                            _assertThisInitialized(_this27);
                        };
                        if (isArray(initialState)) _super.apply(void 0, _toConsumableArray(initialState)); else if (isString(initialState)) _super(initialState); else _super.apply(void 0, _toConsumableArray(Object.entries(initialState).filter(function(_ref30) {
                            var _ref31 = _slicedToArray(_ref30, 2), _key = _ref31[0], value = _ref31[1];
                            return value;
                        }).map(function(_ref32) {
                            var _ref33 = _slicedToArray(_ref32, 1), key = _ref33[0];
                            return key;
                        })));
                        _this27.onChange = callback;
                        return _possibleConstructorReturn(_this27, _assertThisInitialized(_this27));
                    }
                    _inherits(States, _Array);
                    return _createClass(States, [ {
                        key: "has",
                        value: function has(state) {
                            return this.indexOf(state) >= 0 || this.indexOf("$".concat(state)) >= 0;
                        }
                    }, {
                        key: "is",
                        value: function is(state) {
                            return this.indexOf(state) >= 0;
                        }
                    }, {
                        key: "add",
                        value: function add(state) {
                            if (this.has(state)) return;
                            this.push(state);
                            this.onChange();
                        }
                    }, {
                        key: "toggle",
                        value: function toggle(state, force) {
                            if (force === true) this.add(state); else if (force === false) this.remove(state); else if (this.has(state)) this.remove(state); else this.add(state);
                        }
                    }, {
                        key: "merge",
                        value: function merge(newStates) {
                            if (isArray(newStates)) {
                                this.length = 0;
                                this.push.apply(this, _toConsumableArray(newStates));
                            } else if (isString(newStates)) {
                                this.length = 0;
                                this.push(newStates);
                            } else for (var state in newStates) if (newStates[state]) {
                                if (!this.has(state)) this.push(state);
                            } else {
                                var stateIndexToRemove = this.indexOf(state);
                                if (stateIndexToRemove >= 0) this.splice(stateIndexToRemove, 1);
                            }
                            return this;
                        }
                    }, {
                        key: "remove",
                        value: function remove(state) {
                            var stateIndexToRemove = this.indexOf(state);
                            if (stateIndexToRemove >= 0) {
                                this.splice(stateIndexToRemove, 1);
                                this.onChange();
                            }
                        }
                    } ]);
                }(_wrapNativeSuper(Array));
                _signalWrapper = function _signalWrapper(cb) {
                    return cb();
                };
                keyMapEntries = {
                    ArrowLeft: "Left",
                    ArrowRight: "Right",
                    ArrowUp: "Up",
                    ArrowDown: "Down",
                    Enter: "Enter",
                    l: "Last",
                    " ": "Space",
                    Backspace: "Back",
                    Escape: "Escape"
                };
                keyOf = function keyOf(e) {
                    return e.key || e.keyCode;
                };
                flattenKeyMap = function flattenKeyMap(keyMap, targetMap) {
                    var newTargetMap = targetMap;
                    var _loop6 = function _loop6() {
                        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i19], 2), key = _Object$entries2$_i[0], value = _Object$entries2$_i[1];
                        if (Array.isArray(value)) value.forEach(function(v) {
                            newTargetMap[v] = key;
                        }); else if (value === null) delete newTargetMap[key]; else newTargetMap[value] = key;
                    };
                    for (var _i19 = 0, _Object$entries2 = Object.entries(keyMap); _i19 < _Object$entries2.length; _i19++) {
                        _loop6();
                    }
                    return newTargetMap;
                };
                needFocusDebugStyles = true;
                addFocusDebug = function addFocusDebug(prevFocusPath, newFocusPath) {
                    if (needFocusDebugStyles) {
                        var style = document.createElement("style");
                        style.type = "text/css";
                        style.innerHTML = '\n      [data-focus="3"] {\n        border: 2px solid rgba(255, 33, 33, 0.2);\n        border-radius: 5px;\n        transition: border-color 0.3s ease;\n      }\n\n      [data-focus="2"] {\n        border: 2px solid rgba(255, 33, 33, 0.4);\n        border-radius: 5px;\n        transition: border-color 0.3s ease;\n      }\n\n      [data-focus="1"] {\n        border: 4px solid rgba(255, 33, 33, 0.9);\n        border-radius: 5px;\n        transition: border-color 0.5s ease;\n      }\n    ';
                        document.head.appendChild(style);
                        needFocusDebugStyles = false;
                    }
                    prevFocusPath.forEach(function(elm) {
                        elm.data = _objectSpread(_objectSpread({}, elm.data), {}, {
                            focus: void 0
                        });
                    });
                    newFocusPath.forEach(function(elm, i) {
                        elm.data = _objectSpread(_objectSpread({}, elm.data), {}, {
                            focus: i + 1
                        });
                    });
                };
                MAX_FOCUS_HISTORY = 50;
                focusHistory = [];
                elementFocusData = new WeakMap;
                _pendingHistoryKey = {
                    keyPressed: void 0,
                    mappedKey: void 0
                };
                getElementLabel = function getElementLabel(elm) {
                    var _elm$id, _ref;
                    if (!elm) return "None";
                    var id = (_elm$id = elm.id) !== null && _elm$id !== void 0 ? _elm$id : elm._id;
                    return (_ref = id !== null && id !== void 0 ? id : elm.componentName) !== null && _ref !== void 0 ? _ref : "Unknown";
                };
                recordFocusHistory = function recordFocusHistory(next, prev) {
                    if (false && Config.focusHistoryDebug > 0) {
                        var _existing$focusCount;
                        var now = performance.now();
                        var existing = elementFocusData.get(next);
                        elementFocusData.set(next, {
                            focusCount: ((_existing$focusCount = existing == null ? void 0 : existing.focusCount) !== null && _existing$focusCount !== void 0 ? _existing$focusCount : 0) + 1,
                            lastFocusedAt: now
                        });
                        var entry = {
                            timestamp: now,
                            keyPressed: _pendingHistoryKey.keyPressed,
                            mappedKey: _pendingHistoryKey.mappedKey,
                            prev: prev,
                            next: next
                        };
                        focusHistory.push(entry);
                        if (focusHistory.length > MAX_FOCUS_HISTORY) focusHistory.shift();
                        printFocusHistory(Config.focusHistoryDebug);
                    }
                };
                if (false) console.log("DEBUG: Last focus target stored in $f, use inspect($f) to jump to it in the Elements panel. Enable with Config.focusHistoryDebug = n");
                printFocusHistory = function printFocusHistory(count) {
                    var entries = focusHistory.slice(-count);
                    console.table(entries.map(function(e) {
                        var _ref2, _e$mappedKey;
                        return {
                            prev: getElementLabel(e.prev),
                            key: (_ref2 = (_e$mappedKey = e.mappedKey) !== null && _e$mappedKey !== void 0 ? _e$mappedKey : e.keyPressed) !== null && _ref2 !== void 0 ? _ref2 : "—",
                            next: getElementLabel(e.next),
                            nextElm: e.next,
                            nextDiv: e.next.lng.div
                        };
                    }));
                    var lastEntry = entries[entries.length - 1];
                    if (lastEntry) {
                        var _lastEntry$next$lng;
                        var lastElm = (_lastEntry$next$lng = lastEntry.next.lng) == null ? void 0 : _lastEntry$next$lng.div;
                        if (lastElm) window.$f = lastElm;
                    }
                };
                setActiveElementCore = function setActiveElementCore(elm) {
                    var prev = activeElement();
                    if (elm === prev) return;
                    updateFocusPath(elm, prev);
                    recordFocusHistory(elm, prev);
                    _pendingHistoryKey = {
                        keyPressed: void 0,
                        mappedKey: void 0
                    };
                    Config.setActiveElement(elm);
                };
                _createSignal19 = createSignal([]), _createSignal20 = _slicedToArray(_createSignal19, 2), 
                focusPath = _createSignal20[0], setFocusPath = _createSignal20[1], _export("v", focusPath);
                updateFocusPath = function updateFocusPath(currentFocusedElm, prevFocusedElm) {
                    var current = currentFocusedElm;
                    var fp = [];
                    var fpSet = new Set;
                    while (current) {
                        if (!current.states.has(Config.focusStateKey) || current === currentFocusedElm) {
                            var _current$onFocus, _current$onFocusChang;
                            current.states.add(Config.focusStateKey);
                            (_current$onFocus = current.onFocus) == null || _current$onFocus.call(current, currentFocusedElm, prevFocusedElm, current);
                            (_current$onFocusChang = current.onFocusChanged) == null || _current$onFocusChang.call(current, true, currentFocusedElm, prevFocusedElm, current);
                        }
                        fp.push(current);
                        fpSet.add(current);
                        current = current.parent;
                    }
                    var prevFp = focusPath();
                    prevFp.forEach(function(elm) {
                        if (!fpSet.has(elm)) {
                            var _elm$onBlur, _elm$onFocusChanged;
                            elm.states.remove(Config.focusStateKey);
                            (_elm$onBlur = elm.onBlur) == null || _elm$onBlur.call(elm, currentFocusedElm, prevFocusedElm, elm);
                            (_elm$onFocusChanged = elm.onFocusChanged) == null || _elm$onFocusChanged.call(elm, false, currentFocusedElm, prevFocusedElm, elm);
                        }
                    });
                    if (Config.focusDebug) addFocusDebug(prevFp, fp);
                    _signalWrapper(function() {
                        return setFocusPath(fp);
                    });
                };
                lastGlobalKeyPressTime = 0;
                isElementThrottled = function isElementThrottled(elm, sameKey, currentTime) {
                    return elm.throttleInput !== void 0 && sameKey && elm._lastAnyKeyPressTime !== void 0 && currentTime - elm._lastAnyKeyPressTime < elm.throttleInput;
                };
                runCapturePhase = function runCapturePhase(fp, e, mappedEvent, isUp, sameKey, currentTime) {
                    var finalFocusElm = fp[0];
                    var captureEvent = "onCapture".concat(mappedEvent || e.key).concat(isUp ? "Release" : "");
                    var captureKey = isUp ? "onCaptureKeyRelease" : "onCaptureKey";
                    for (var i = fp.length - 1; i >= 0; i--) {
                        var elm = fp[i];
                        if (isElementThrottled(elm, sameKey, currentTime)) return true;
                        var captureHandler = elm[captureEvent] || elm[captureKey];
                        if (isFunction(captureHandler) && captureHandler.call(elm, e, elm, finalFocusElm, mappedEvent) === true) {
                            elm._lastAnyKeyPressTime = currentTime;
                            return true;
                        }
                    }
                    return false;
                };
                runBubblePhase = function runBubblePhase(fp, e, mappedEvent, isUp, sameKey, currentTime) {
                    var finalFocusElm = fp[0];
                    var eventHandlerKey = mappedEvent ? isUp ? "on".concat(mappedEvent, "Release") : "on".concat(mappedEvent) : void 0;
                    var fallbackHandlerKey = isUp ? void 0 : "onKeyPress";
                    var lastHandlerSeen;
                    for (var i = 0; i < fp.length; i++) {
                        var elm = fp[i];
                        if (isElementThrottled(elm, sameKey, currentTime)) return {
                            handled: true,
                            lastHandlerSeen: lastHandlerSeen
                        };
                        var handled = false;
                        if (eventHandlerKey) {
                            var eventHandler = elm[eventHandlerKey];
                            if (isFunction(eventHandler)) {
                                lastHandlerSeen = elm;
                                handled = eventHandler.call(elm, e, elm, finalFocusElm) === true;
                            }
                        }
                        if (!handled && fallbackHandlerKey) {
                            var fallbackHandler = elm[fallbackHandlerKey];
                            if (isFunction(fallbackHandler)) {
                                lastHandlerSeen = elm;
                                handled = fallbackHandler.call(elm, e, mappedEvent, elm, finalFocusElm) === true;
                            }
                        }
                        if (handled) {
                            elm._lastAnyKeyPressTime = currentTime;
                            return {
                                handled: true,
                                lastHandlerSeen: lastHandlerSeen
                            };
                        }
                    }
                    return {
                        handled: false,
                        lastHandlerSeen: lastHandlerSeen
                    };
                };
                propagateKeyPress = function propagateKeyPress(e, mappedEvent) {
                    var isUp = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
                    var currentTime = performance.now();
                    var key = keyOf(e);
                    var sameKey = lastInputKey === key;
                    lastInputKey = key;
                    if (!isUp && Config.throttleInput) {
                        if (sameKey && currentTime - lastGlobalKeyPressTime < Config.throttleInput) {
                            if (false && Config.keyDebug) console.log("Keypress throttled by global Config.throttleInput: ".concat(Config.throttleInput, "ms"));
                            return false;
                        }
                        lastGlobalKeyPressTime = currentTime;
                    }
                    if (!isUp) _pendingHistoryKey = {
                        keyPressed: key,
                        mappedKey: mappedEvent
                    };
                    var fp = focusPath();
                    if (fp.length === 0) return false;
                    if (runCapturePhase(fp, e, mappedEvent, isUp, sameKey, currentTime)) return true;
                    var _runBubblePhase = runBubblePhase(fp, e, mappedEvent, isUp, sameKey, currentTime), handled = _runBubblePhase.handled, lastHandlerSeen = _runBubblePhase.lastHandlerSeen;
                    if (handled) return true;
                    if (false && Config.keyDebug && !isUp) {
                        var detail = 'key="'.concat(e.key, '", mappedEvent=').concat(mappedEvent, ", isUp=").concat(isUp);
                        if (lastHandlerSeen) console.log("Keypress bubbled, ".concat(detail), lastHandlerSeen); else console.log("No event handler available for keypress: ".concat(detail));
                    }
                    return false;
                };
                UNIDENTIFIED = "Unidentified";
                keyIdentities = function keyIdentities(keyOrEvent) {
                    if (_typeof(keyOrEvent) !== "object") return [ keyOrEvent ];
                    var ids = [];
                    if (keyOrEvent.key && keyOrEvent.key !== UNIDENTIFIED) ids.push(keyOrEvent.key);
                    if (keyOrEvent.keyCode) ids.push(keyOrEvent.keyCode);
                    return ids;
                };
                suppressedKeys = new Map;
                findSuppression = function findSuppression(ids) {
                    var _iterator18 = _createForOfIteratorHelper(ids), _step18;
                    try {
                        for (_iterator18.s(); !(_step18 = _iterator18.n()).done; ) {
                            var id = _step18.value;
                            var found = suppressedKeys.get(id);
                            if (found) return found;
                        }
                    } catch (err) {
                        _iterator18.e(err);
                    } finally {
                        _iterator18.f();
                    }
                };
                liftSuppression = function liftSuppression(ids) {
                    var _found$onRelease;
                    var found = findSuppression(ids);
                    if (!found) return;
                    var _iterator19 = _createForOfIteratorHelper(found.ids), _step19;
                    try {
                        for (_iterator19.s(); !(_step19 = _iterator19.n()).done; ) {
                            var id = _step19.value;
                            suppressedKeys.delete(id);
                        }
                    } catch (err) {
                        _iterator19.e(err);
                    } finally {
                        _iterator19.f();
                    }
                    (_found$onRelease = found.onRelease) == null || _found$onRelease.call(found);
                };
                handleKeyEvents = function handleKeyEvents(keydown, keyup) {
                    if (keydown) {
                        var ids = keyIdentities(keydown);
                        if (keydown.repeat) {
                            if (findSuppression(ids)) return;
                        } else liftSuppression(ids);
                        propagateKeyPress(keydown, keyMapEntries[keydown.key] || keyMapEntries[keydown.keyCode]);
                    } else if (keyup) {
                        liftSuppression(keyIdentities(keyup));
                        propagateKeyPress(keyup, keyMapEntries[keyup.key] || keyMapEntries[keyup.keyCode], true);
                    }
                };
                _export("y", useFocusManager = function useFocusManager(userKeyMap) {
                    if (userKeyMap) flattenKeyMap(userKeyMap, keyMapEntries);
                    var owner = getOwner();
                    var ownerContext = function ownerContext(cb) {
                        runWithOwner(owner, cb);
                    };
                    _signalWrapper = ownerContext;
                    Config.setActiveElement = function(elm) {
                        return ownerContext(function() {
                            return _setActiveElement(elm);
                        });
                    };
                    var keyPressHandler = function keyPressHandler(event) {
                        return ownerContext(function() {
                            return handleKeyEvents(event, void 0);
                        });
                    };
                    var keyUpHandler = function keyUpHandler(event) {
                        return ownerContext(function() {
                            return handleKeyEvents(void 0, event);
                        });
                    };
                    document.addEventListener("keydown", keyPressHandler);
                    document.addEventListener("keyup", keyUpHandler);
                    onCleanup(function() {
                        document.removeEventListener("keydown", keyPressHandler);
                        document.removeEventListener("keyup", keyUpHandler);
                        suppressedKeys.clear();
                    });
                });
                installed = false;
                calculateFlex = flexLayout_default;
                postMutationQueued = false;
                nextActiveElement = null;
                deferredFocusElement = null;
                layoutQueue = new Set;
                elementDeleteQueue = [];
                _fontFamilyIdx = -1;
                EFFECT_SHADER_KEYS = [ "border", "borderTop", "borderRight", "borderBottom", "borderLeft", "shadow" ];
                parseAndAssignShaderProps = function parseAndAssignShaderProps(prefix, obj) {
                    var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                    if (!obj) return;
                    var side = {
                        borderBottom: "bottom",
                        borderLeft: "left",
                        borderRight: "right",
                        borderTop: "top"
                    }[prefix];
                    var actualPrefix = side ? "border" : prefix;
                    props[actualPrefix] = obj;
                    Object.entries(obj).forEach(function(_ref34) {
                        var _ref35 = _slicedToArray(_ref34, 2), key = _ref35[0], value = _ref35[1];
                        var transformedKey = key === "width" ? "w" : key;
                        if (side && transformedKey === "w") transformedKey = side;
                        props["".concat(actualPrefix, "-").concat(transformedKey)] = value;
                    });
                };
                LightningRendererNumberProps = [ "alpha", "color", "colorTop", "colorRight", "colorLeft", "colorBottom", "colorTl", "colorTr", "colorBl", "colorBr", "h", "fontSize", "lineHeight", "mount", "mountX", "mountY", "pivot", "pivotX", "pivotY", "rotation", "scale", "scaleX", "scaleY", "w", "worldX", "worldY", "x", "y", "zIndex", "zIndexLocked" ];
                LightningRendererNonAnimatingProps = [ "absX", "absY", "autosize", "clipping", "contain", "componentName", "componentLocation", "data", "destroyed", "forceLoad", "fontStretch", "fontStyle", "group", "ignoreParentAlpha", "imageType", "letterSpacing", "maxHeight", "maxLines", "maxWidth", "offsetY", "overflowSuffix", "placeholderColor", "preventCleanup", "rtt", "scrollable", "scrollY", "srcHeight", "srcWidth", "srcX", "srcY", "strictBounds", "text", "textAlign", "textBaseline", "textOverflow", "texture", "textureOptions", "textRendererOverride", "verticalAlign", "wordBreak", "wordWrap" ];
                initClickInspector();
                _export("_", ElementNode = function() {
                    function ElementNode(name) {
                        this._type = name === "text" ? NodeType.TextNode : NodeType.Element;
                        this.rendered = false;
                        this.lng = {
                            w: void 0,
                            h: void 0,
                            x: void 0,
                            y: void 0,
                            alpha: void 0,
                            color: void 0,
                            shader: void 0,
                            clipping: void 0,
                            text: void 0,
                            ignoreParentAlpha: void 0,
                            placeholderColor: void 0
                        };
                        this.children = [];
                        this._queueDelete = void 0;
                        this._animationQueue = void 0;
                        this._animationQueueSettings = void 0;
                        this._animationRunning = void 0;
                        this._animationSettings = void 0;
                        this._autofocus = void 0;
                        this._calcWidth = void 0;
                        this._calcHeight = void 0;
                        this._containsFlexGrow = void 0;
                        this._hasRenderedChildren = void 0;
                        this._effects = void 0;
                        this._fontFamily = void 0;
                        this._fontWeight = void 0;
                        this._id = void 0;
                        this._parent = void 0;
                        this._states = void 0;
                        this._style = void 0;
                        this._theme = void 0;
                        this._lastAnyKeyPressTime = void 0;
                        this._undoStyles = void 0;
                        this._display = void 0;
                        this._onLayout = void 0;
                        this._requiresLayout = false;
                    }
                    return _createClass(ElementNode, [ {
                        key: "effects",
                        get: function get() {
                            return this.lng.shader;
                        },
                        set: function set(v) {
                            var _this$lng$shader;
                            if (!SHADERS_ENABLED) return;
                            var target = this.lng.shader || {};
                            if ((_this$lng$shader = this.lng.shader) == null ? void 0 : _this$lng$shader.props) target = this.lng.shader.props;
                            if (v.rounded) target.radius = v.rounded.radius;
                            if (v.borderRadius) target.radius = v.borderRadius;
                            var _iterator20 = _createForOfIteratorHelper(EFFECT_SHADER_KEYS), _step20;
                            try {
                                for (_iterator20.s(); !(_step20 = _iterator20.n()).done; ) {
                                    var k = _step20.value;
                                    if (v[k]) parseAndAssignShaderProps(k, v[k], target);
                                }
                            } catch (err) {
                                _iterator20.e(err);
                            } finally {
                                _iterator20.f();
                            }
                            this._writeShaderTarget(target);
                        }
                    }, {
                        key: "_writeShaderTarget",
                        value: function _writeShaderTarget(target) {
                            if (this.rendered) {
                                if (!this.lng.shader) this.lng.shader = Config.convertToShader(this, target); else if (isDomRendererActive()) this.lng.shader = this.lng.shader;
                            } else this.lng.shader = target;
                        }
                    }, {
                        key: "id",
                        get: function get() {
                            return this._id;
                        },
                        set: function set(id) {
                            this._id = id;
                            if (Config.rendererOptions && "inspector" in Config.rendererOptions && Config.rendererOptions.inspector) this.data = _objectSpread(_objectSpread({}, this.data), {}, {
                                testId: id
                            });
                        }
                    }, {
                        key: "parent",
                        get: function get() {
                            return this._parent;
                        },
                        set: function set(p) {
                            this._parent = p;
                            if (this.rendered && (p == null ? void 0 : p.rendered)) {
                                var _p$lng;
                                this.lng.parent = (_p$lng = p.lng) !== null && _p$lng !== void 0 ? _p$lng : null;
                            }
                        }
                    }, {
                        key: "height",
                        get: function get() {
                            return this.maxHeight || this.h;
                        },
                        set: function set(h) {
                            this.h = h;
                        }
                    }, {
                        key: "width",
                        get: function get() {
                            return this.maxWidth || this.w;
                        },
                        set: function set(w) {
                            this.w = w;
                        }
                    }, {
                        key: "fontWeight",
                        get: function get() {
                            return this._fontWeight;
                        },
                        set: function set(v) {
                            var _ref, _Config$fontSettings;
                            if (this._fontWeight === v) return;
                            this._fontWeight = v;
                            var weight = (_ref = Config.fontWeightAlias && Config.fontWeightAlias[v]) !== null && _ref !== void 0 ? _ref : v;
                            this.lng.fontFamily = "".concat(this.fontFamily || ((_Config$fontSettings = Config.fontSettings) == null ? void 0 : _Config$fontSettings.fontFamily)).concat(weight);
                        }
                    }, {
                        key: "fontFamily",
                        get: function get() {
                            return this._fontFamily;
                        },
                        set: function set(v) {
                            this._fontFamily = v;
                            this.lng.fontFamily = v;
                        }
                    }, {
                        key: "insertChild",
                        value: function insertChild(node, beforeNode) {
                            if (node.parent) {
                                node.parent.removeChild(node);
                                if (!this.rendered) this._hasRenderedChildren = true;
                            }
                            node.parent = this;
                            if (beforeNode) {
                                spliceItem(this.children, node, 1);
                                if (spliceItem(this.children, beforeNode, 0, node) > -1) return;
                            }
                            this.children.push(node);
                        }
                    }, {
                        key: "removeChild",
                        value: function removeChild(node) {
                            if (spliceItem(this.children, node, 1) > -1) {
                                if (isElementNode(node) && node.onRemove) node.onRemove.call(node, node);
                                if (this.requiresLayout()) addToLayoutQueue(this);
                            }
                        }
                    }, {
                        key: "selectedNode",
                        get: function get() {
                            var selectedIndex = this.selected || 0;
                            for (var i = selectedIndex; i < this.children.length; i++) {
                                var element = this.children[i];
                                if (isElementNode(element)) {
                                    this.selected = i;
                                    return element;
                                }
                            }
                        }
                    }, {
                        key: "shader",
                        set: function set(shaderProps) {
                            var _renderer$;
                            this.lng.shader = isArray(shaderProps) ? (_renderer$ = renderer$1).createShader.apply(_renderer$, _toConsumableArray(shaderProps)) : shaderProps;
                        }
                    }, {
                        key: "_sendToLightningAnimatable",
                        value: function _sendToLightningAnimatable(name, value) {
                            if (this.rendered && this.transition && Config.animationsEnabled && (this.transition === true || this.transition[name] || this.transition[getPropertyAlias(name)])) {
                                var animationSettings = this.transition === true || this.transition[name] === true ? void 0 : this.transition[name] || this.transition[getPropertyAlias(name)];
                                if (!("animateProp" in this.lng)) {
                                    var animationController = this.animate(_defineProperty({}, name, value), animationSettings);
                                    this._fireAnimationEvents(name, value, animationSettings);
                                    return animationController.start();
                                }
                                var result = this.lng.animateProp(name, value, animationSettings || this.animationSettings || {});
                                this._fireAnimationEvents(name, value, animationSettings);
                                return result;
                            }
                            this.lng[name] = value;
                        }
                    }, {
                        key: "_fireAnimationEvents",
                        value: function _fireAnimationEvents(name, value, animationSettings) {
                            var _this29 = this;
                            if (!this.onAnimation) return;
                            var settings = animationSettings || this.animationSettings;
                            var _this$onAnimation = this.onAnimation, animating = _this$onAnimation.animating, stopped = _this$onAnimation.stopped;
                            if (animating) animating.call(this, name, value);
                            if (stopped) {
                                var _settings$duration, _settings$delay;
                                var total = ((_settings$duration = settings == null ? void 0 : settings.duration) !== null && _settings$duration !== void 0 ? _settings$duration : 0) + ((_settings$delay = settings == null ? void 0 : settings.delay) !== null && _settings$delay !== void 0 ? _settings$delay : 0);
                                setTimeout(function() {
                                    return stopped.call(_this29, name, value);
                                }, total);
                            }
                        }
                    }, {
                        key: "animate",
                        value: function animate(props, animationSettings) {
                            if (false) assertTruthy(this.rendered, "Node must be rendered before animating");
                            return this.lng.animate(props, animationSettings || this.animationSettings || {});
                        }
                    }, {
                        key: "chain",
                        value: function chain(props, animationSettings) {
                            if (this._animationRunning) {
                                this._animationQueue = [];
                                this._animationRunning = false;
                            }
                            if (animationSettings) this._animationQueueSettings = animationSettings; else if (!this._animationQueueSettings) this._animationQueueSettings = animationSettings || this.animationSettings;
                            animationSettings = animationSettings || this._animationQueueSettings;
                            this._animationQueue = this._animationQueue || [];
                            this._animationQueue.push({
                                props: props,
                                animationSettings: animationSettings
                            });
                            return this;
                        }
                    }, {
                        key: "start",
                        value: function() {
                            var _start = _asyncToGenerator(_regenerator().m(function _callee14() {
                                var animation;
                                return _regenerator().w(function(_context15) {
                                    while (1) switch (_context15.n) {
                                      case 0:
                                        animation = this._animationQueue.shift();

                                      case 1:
                                        if (!animation) {
                                            _context15.n = 3;
                                            break;
                                        }
                                        this._animationRunning = true;
                                        _context15.n = 2;
                                        return this.animate(animation.props, animation.animationSettings).start().waitUntilStopped();

                                      case 2:
                                        animation = this._animationQueue.shift();
                                        _context15.n = 1;
                                        break;

                                      case 3:
                                        this._animationRunning = false;
                                        this._animationQueueSettings = void 0;

                                      case 4:
                                        return _context15.a(2);
                                    }
                                }, _callee14, this);
                            }));
                            function start() {
                                return _start.apply(this, arguments);
                            }
                            return start;
                        }()
                    }, {
                        key: "emit",
                        value: function emit(event) {
                            var current = this;
                            var capitalizedEvent = "on".concat(event.charAt(0).toUpperCase()).concat(event.slice(1));
                            for (var _len9 = arguments.length, args = new Array(_len9 > 1 ? _len9 - 1 : 0), _key0 = 1; _key0 < _len9; _key0++) {
                                args[_key0 - 1] = arguments[_key0];
                            }
                            while (current) {
                                var handler = current[capitalizedEvent];
                                if (isFunction(handler)) {
                                    if (handler.call.apply(handler, [ current, this ].concat(args)) === true) return true;
                                }
                                current = current.parent;
                            }
                            return false;
                        }
                    }, {
                        key: "setFocus",
                        value: function setFocus() {
                            if (this.rendered) {
                                if (this.forwardFocus !== void 0) if (isFunction(this.forwardFocus)) {
                                    if (this.forwardFocus.call(this, this) !== false) return;
                                } else {
                                    var focusedIndex = typeof this.forwardFocus === "number" ? this.forwardFocus : null;
                                    var nodes = this.children;
                                    if (focusedIndex !== null && focusedIndex < nodes.length) {
                                        var child = nodes[focusedIndex];
                                        isElementNode(child) && child.setFocus();
                                        return;
                                    }
                                }
                                nextActiveElement = this;
                                schedulePostMutation();
                            } else this._autofocus = true;
                        }
                    }, {
                        key: "_layoutOnLoad",
                        value: function _layoutOnLoad() {
                            var _this30 = this;
                            this.lng.on("loaded", function() {
                                schedulePostMutation();
                                _this30.parent.updateLayout();
                            });
                        }
                    }, {
                        key: "getText",
                        value: function getText() {
                            var len = this.children.length;
                            if (len === 1) return this.children[0].text;
                            if (len === 0) return "";
                            var result = "";
                            for (var i = 0; i < len; i++) result += this.children[i].text;
                            return result;
                        }
                    }, {
                        key: "destroy",
                        value: function destroy() {
                            var _this31 = this;
                            if (this.onDestroy) {
                                var destroyPromise = this.onDestroy(this);
                                if (destroyPromise instanceof Promise) destroyPromise.then(function() {
                                    return _this31._destroy();
                                }); else this._destroy();
                            } else this._destroy();
                        }
                    }, {
                        key: "_destroy",
                        value: function _destroy() {
                            if (isINode(this.lng)) this.lng.destroy();
                        }
                    }, {
                        key: "style",
                        get: function get() {
                            return this._style || {};
                        },
                        set: function set(style) {
                            if (false && this._style) console.warn("Style already set: https://solid-tv.github.io/solid/#/essentials/styling?id=style-patterns-to-avoid");
                            if (Config.lockStyles && this._style) return;
                            if (!style) return;
                            this._style = style;
                            for (var key in this._style) if (this[key] === void 0) this[key] = this._style[key];
                        }
                    }, {
                        key: "theme",
                        get: function get() {
                            this._theme = this._theme || {};
                            return this._theme;
                        },
                        set: function set(styles) {
                            if (!styles) return;
                            this._theme = styles;
                            for (var key in styles) this[key] = styles[key];
                        }
                    }, {
                        key: "hasChildren",
                        get: function get() {
                            return this.children.length > 0;
                        }
                    }, {
                        key: "src",
                        get: function get() {
                            return this.lng.src;
                        },
                        set: function set(src) {
                            if (typeof src === "string") {
                                this.lng.src = src;
                                if (!this.color && this.rendered) this.color = 4294967295;
                            } else this.color = 0;
                        }
                    }, {
                        key: "getChildById",
                        value: function getChildById(id) {
                            return this.children.find(function(c) {
                                return c.id === id;
                            });
                        }
                    }, {
                        key: "searchChildrenById",
                        value: function searchChildrenById(id) {
                            for (var i = 0; i < this.children.length; i++) {
                                var child = this.children[i];
                                if (isElementNode(child)) {
                                    if (child.id === id) return child;
                                    var found = child.searchChildrenById(id);
                                    if (found) return found;
                                }
                            }
                        }
                    }, {
                        key: "states",
                        get: function get() {
                            this._states = this._states || new States(this._stateChanged.bind(this));
                            return this._states;
                        },
                        set: function set(states) {
                            this._states = this._states ? this._states.merge(states) : new States(this._stateChanged.bind(this), states);
                            if (this.rendered) this._stateChanged();
                        }
                    }, {
                        key: "animationSettings",
                        get: function get() {
                            return this._animationSettings || Config.animationSettings;
                        },
                        set: function set(animationSettings) {
                            this._animationSettings = animationSettings;
                        }
                    }, {
                        key: "hidden",
                        get: function get() {
                            return this.alpha === 0;
                        },
                        set: function set(val) {
                            this.alpha = val ? 0 : 1;
                        }
                    }, {
                        key: "preserve",
                        get: function get() {
                            return this._queueDelete === 0;
                        },
                        set: function set(v) {
                            this._queueDelete = v ? 0 : void 0;
                        }
                    }, {
                        key: "autofocus",
                        get: function get() {
                            return this._autofocus;
                        },
                        set: function set(val) {
                            this._autofocus = val;
                            if (val) {
                                deferredFocusElement = this;
                                schedulePostMutation();
                            }
                        }
                    }, {
                        key: "display",
                        get: function get() {
                            return this._display;
                        },
                        set: function set(v) {
                            this._display = v;
                            this._requiresLayout = v === "flex" || this._onLayout !== void 0;
                        }
                    }, {
                        key: "onLayout",
                        get: function get() {
                            return this._onLayout;
                        },
                        set: function set(fn) {
                            this._onLayout = fn;
                            this._requiresLayout = this._display === "flex" || fn !== void 0;
                        }
                    }, {
                        key: "requiresLayout",
                        value: function requiresLayout() {
                            return this._requiresLayout;
                        }
                    }, {
                        key: "updateLayoutOn",
                        get: function get() {
                            return null;
                        },
                        set: function set(_v) {
                            this.updateLayout();
                        }
                    }, {
                        key: "updateLayout",
                        value: function updateLayout() {
                            var _this32 = this;
                            if (this.hasChildren) {
                                if (false) log("Layout: ", this);
                                if (this.display === "flex" && this.flexGrow && this.width === 0) return;
                                var flexChanged = this.display === "flex" && calculateFlex(this);
                                layoutQueue.delete(this);
                                var onLayoutChanged = isFunction(this.onLayout) && this.onLayout.call(this, this);
                                if ((flexChanged || onLayoutChanged) && this.parent) addToLayoutQueue(this.parent);
                                if (this._containsFlexGrow === true) this.children.forEach(function(c) {
                                    if (c.display === "flex" && isElementNode(c)) {
                                        calculateFlex(c);
                                        isFunction(c.onLayout) && c.onLayout.call(c, c);
                                        addToLayoutQueue(_this32);
                                    }
                                });
                            }
                        }
                    }, {
                        key: "_stateChanged",
                        value: function _stateChanged() {
                            var _this33 = this;
                            if (false) log("State Changed: ", this, this.states);
                            if (false) {
                                var _this$lng;
                                var div = (_this$lng = this.lng) == null ? void 0 : _this$lng.div;
                                if (div) if (this.states.length > 0) div.dataset.states = this.states.join(" "); else delete div.dataset.states;
                            }
                            if (this.forwardStates) {
                                var _states = this.states.slice();
                                this.children.forEach(function(c) {
                                    c.states = _states;
                                });
                            }
                            var states = this.states;
                            if (this._undoStyles || keyExists(this, states)) {
                                var stylesToUndo;
                                if (this._undoStyles && this._undoStyles.length) {
                                    stylesToUndo = {};
                                    this._undoStyles.forEach(function(styleKey) {
                                        var fallbackValue = _this33.theme[styleKey];
                                        if (fallbackValue === void 0) fallbackValue = _this33.style[styleKey];
                                        if (false) {
                                            if (fallbackValue === void 0) console.warn("fallback style key not found: ", styleKey);
                                        }
                                        stylesToUndo[styleKey] = fallbackValue;
                                    });
                                }
                                var numStates = states.length;
                                if (numStates === 0) {
                                    Object.assign(this, stylesToUndo);
                                    this._undoStyles = [];
                                    return;
                                }
                                var newStyles;
                                if (numStates === 1) {
                                    newStyles = this[states[0]];
                                    newStyles = stylesToUndo ? _objectSpread(_objectSpread({}, stylesToUndo), newStyles) : newStyles;
                                } else {
                                    var sortedStates = states;
                                    var stateOrder = this.stateOrder || Config.stateOrder;
                                    if (stateOrder && stateOrder.length > 0) sortedStates = states.slice().sort(function(a, b) {
                                        var aIdx = stateOrder.indexOf(a);
                                        var bIdx = stateOrder.indexOf(b);
                                        if (aIdx !== -1 && bIdx === -1) return 1;
                                        if (aIdx === -1 && bIdx !== -1) return -1;
                                        return aIdx - bIdx;
                                    });
                                    newStyles = sortedStates.reduce(function(acc, state) {
                                        var styles = _this33[state];
                                        return styles ? _objectSpread(_objectSpread({}, acc), styles) : acc;
                                    }, stylesToUndo || {});
                                }
                                if (newStyles) {
                                    this._undoStyles = Object.keys(newStyles);
                                    if (newStyles.transition !== void 0) this.transition = newStyles.transition;
                                    Object.assign(this, newStyles);
                                } else this._undoStyles = [];
                            }
                        }
                    }, {
                        key: "render",
                        value: function render(topNode) {
                            var _this$onCreate, _this$onRender2, _node$lng;
                            var node = this;
                            var parent = this.parent;
                            if (!parent) {
                                console.warn("Parent not set - no node created for: ", this);
                                return;
                            }
                            if (!parent.rendered) {
                                console.warn("Parent not rendered yet: ", this);
                                return;
                            }
                            if (parent.requiresLayout()) layoutQueue.add(parent);
                            if (this.rendered) {
                                var _this$onRender;
                                (_this$onRender = this.onRender) == null || _this$onRender.call(this, this);
                                return;
                            }
                            if (this._states) this._stateChanged();
                            var props = node.lng;
                            var parentWidth = parent.w || 0;
                            var parentHeight = parent.h || 0;
                            props.x = props.x || 0;
                            props.y = props.y || 0;
                            props.parent = parent.lng;
                            if (this.right || this.right === 0) {
                                props.x = parentWidth - this.right;
                                props.mountX = 1;
                            }
                            if (this.bottom || this.bottom === 0) {
                                props.y = parentHeight - this.bottom;
                                props.mountY = 1;
                            }
                            if (this.center) this.centerX = this.centerY = true;
                            if (this.centerX) {
                                props.x += parentWidth / 2;
                                props.mountX = .5;
                            }
                            if (this.centerY) {
                                props.y += parentHeight / 2;
                                props.mountY = .5;
                            }
                            if (isElementText(node)) {
                                var textProps = props;
                                if (_fontTemplate === void 0) buildFontTemplate();
                                var tpl = _fontTemplate;
                                if (tpl.length > 0) {
                                    var familyIdx = _fontFamilyIdx;
                                    var familyWithWeight = textProps["fontWeight"] === void 0 ? _fontFamilyWithWeight : void 0;
                                    for (var i = 0; i < tpl.length; i++) {
                                        var entry = tpl[i];
                                        var key = entry[0];
                                        if (textProps[key] === void 0) textProps[key] = i === familyIdx && familyWithWeight !== void 0 ? familyWithWeight : entry[1];
                                    }
                                }
                                textProps.text = textProps.text || node.getText();
                                if (textProps.textAlign && !textProps.contain) console.warn("Text align requires contain: ", node.getText());
                                if (textProps.contain) {
                                    if (textProps.contain === "both") {
                                        var _textProps$maxWidth, _textProps$maxHeight;
                                        textProps.maxWidth = (_textProps$maxWidth = textProps.maxWidth) !== null && _textProps$maxWidth !== void 0 ? _textProps$maxWidth : textProps.w;
                                        textProps.maxHeight = (_textProps$maxHeight = textProps.maxHeight) !== null && _textProps$maxHeight !== void 0 ? _textProps$maxHeight : textProps.h;
                                    } else if (textProps.contain === "width") {
                                        var _textProps$maxWidth2;
                                        textProps.maxWidth = (_textProps$maxWidth2 = textProps.maxWidth) !== null && _textProps$maxWidth2 !== void 0 ? _textProps$maxWidth2 : textProps.w;
                                    }
                                    if (!textProps.h && !textProps.maxHeight) {
                                        var _textProps$maxLines;
                                        textProps.maxLines = (_textProps$maxLines = textProps.maxLines) !== null && _textProps$maxLines !== void 0 ? _textProps$maxLines : 99;
                                    }
                                    if (!textProps.maxWidth) textProps.maxWidth = parentWidth - textProps.x - (textProps.marginRight || 0);
                                    if (textProps.contain === "both" && !textProps.maxHeight) textProps.maxHeight = parentHeight - textProps.y - (textProps.marginBottom || 0); else if (textProps.maxLines === 1) textProps.maxHeight = textProps.maxHeight || textProps.lineHeight || textProps.fontSize;
                                }
                                if (SHADERS_ENABLED && props.shader && !("shaderType" in props.shader)) props.shader = Config.convertToShader(node, props.shader);
                                if (false) log("Rendering: ", this, props);
                                node.lng = renderer$1.createTextNode(props);
                                if (parent.requiresLayout()) {
                                    if (!textProps.maxWidth || !textProps.maxHeight) node._layoutOnLoad();
                                }
                            } else {
                                if (!props.texture) {
                                    if (isNaN(props.w)) {
                                        var flexFitsWidth = false;
                                        if (node.display === "flex") {
                                            var flexDirection = node.flexDirection || "row";
                                            flexFitsWidth = (flexDirection === "row" || flexDirection === "row-reverse") && node.flexBoundary !== "fixed";
                                            if (false && flexFitsWidth) {
                                                if ([ "center", "flex-end", "space-between", "space-around", "space-evenly" ].includes(node.justifyContent)) console.warn("justifyContent '".concat(node.justifyContent, "' requires an explicit width on the flex container; without one it shrinks to fit its children and has no free space to distribute: "), this);
                                            }
                                        }
                                        if (node.flexGrow || flexFitsWidth) props.w = 0; else props.w = parentWidth - props.x;
                                        node._calcWidth = true;
                                    }
                                    if (isNaN(props.h)) {
                                        props.h = parentHeight - props.y;
                                        node._calcHeight = true;
                                    }
                                    if (props.rtt && !props.color) props.color = 4294967295;
                                    if (!props.color && !props.src) props.color = 0;
                                }
                                if (SHADERS_ENABLED && props.shader && !("shaderType" in props.shader)) props.shader = Config.convertToShader(node, props.shader);
                                if (false) log("Rendering: ", this, props);
                                node.lng = renderer$1.createNode(props);
                                if (node._hasRenderedChildren) {
                                    node._hasRenderedChildren = false;
                                    var _iterator21 = _createForOfIteratorHelper(node.children), _step21;
                                    try {
                                        for (_iterator21.s(); !(_step21 = _iterator21.n()).done; ) {
                                            var child = _step21.value;
                                            if (isElementNode(child) && isINode(child.lng)) child.lng.parent = node.lng;
                                        }
                                    } catch (err) {
                                        _iterator21.e(err);
                                    } finally {
                                        _iterator21.f();
                                    }
                                }
                            }
                            node.rendered = true;
                            if (false) node._rendererProps = props;
                            if (node.autosize && parent.requiresLayout()) node._layoutOnLoad();
                            (_this$onCreate = this.onCreate) == null || _this$onCreate.call(this, this);
                            (_this$onRender2 = this.onRender) == null || _this$onRender2.call(this, this);
                            if (node.onEvent) {
                                var _loop7 = function _loop7() {
                                    var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i20], 2), name = _Object$entries3$_i[0], handler = _Object$entries3$_i[1];
                                    if (typeof node.lng.on === "function") node.lng.on(name, function(_inode, data) {
                                        return handler.call(node, node, data);
                                    });
                                };
                                for (var _i20 = 0, _Object$entries3 = Object.entries(node.onEvent); _i20 < _Object$entries3.length; _i20++) {
                                    _loop7();
                                }
                            }
                            var div = (_node$lng = node.lng) == null ? void 0 : _node$lng.div;
                            if (false && div) {
                                div.element = node;
                                if (node._states && node._states.length > 0) div.dataset.states = node._states.join(" ");
                            }
                            if (node._type === NodeType.Element) {
                                var numChildren = node.children.length;
                                for (var _i21 = 0; _i21 < numChildren; _i21++) {
                                    var c = node.children[_i21];
                                    if (false) assertTruthy(c, "Child is undefined");
                                    if (isElementNode(c)) c.render();
                                }
                            }
                            if (topNode) schedulePostMutation();
                            if (node._autofocus) node.setFocus();
                        }
                    } ]);
                }());
                var _iterator22 = _createForOfIteratorHelper(LightningRendererNumberProps), _step22;
                try {
                    var _loop8 = function _loop8() {
                        var key = _step22.value;
                        Object.defineProperty(ElementNode.prototype, key, {
                            get: function get() {
                                return this.lng[key];
                            },
                            set: function set(v) {
                                this._sendToLightningAnimatable(key, v);
                            }
                        });
                    };
                    for (_iterator22.s(); !(_step22 = _iterator22.n()).done; ) {
                        _loop8();
                    }
                } catch (err) {
                    _iterator22.e(err);
                } finally {
                    _iterator22.f();
                }
                var _iterator23 = _createForOfIteratorHelper(LightningRendererNonAnimatingProps), _step23;
                try {
                    var _loop9 = function _loop9() {
                        var key = _step23.value;
                        Object.defineProperty(ElementNode.prototype, key, {
                            get: function get() {
                                return this.lng[key];
                            },
                            set: function set(v) {
                                this.lng[key] = v;
                            }
                        });
                    };
                    for (_iterator23.s(); !(_step23 = _iterator23.n()).done; ) {
                        _loop9();
                    }
                } catch (err) {
                    _iterator23.e(err);
                } finally {
                    _iterator23.f();
                }
                if (false) ElementNode.prototype.lngTree = function() {
                    return logRenderTree(this);
                };
                Object.defineProperties(ElementNode.prototype, {
                    border: shaderAccessor("border"),
                    borderBottom: shaderAccessor("borderBottom"),
                    borderTop: shaderAccessor("borderTop"),
                    borderLeft: shaderAccessor("borderLeft"),
                    borderRight: shaderAccessor("borderRight"),
                    shadow: shaderAccessor("shadow"),
                    rounded: shaderAccessor("rounded"),
                    borderRadius: shaderAccessor("rounded"),
                    linearGradient: createRawShaderAccessor("linearGradient"),
                    radialGradient: createRawShaderAccessor("radialGradient")
                });
                memo$1 = function memo$1(fn) {
                    return createMemo(function() {
                        return fn();
                    });
                };
                solidOpts_default = {
                    createElement: function createElement(name) {
                        return new ElementNode(name);
                    },
                    createTextNode: function createTextNode(text) {
                        return new TextNode(text);
                    },
                    replaceText: function replaceText(node, value) {
                        log("Replace Text: ", node, value);
                        node.text = value;
                        var parent = node.parent;
                        assertTruthy(parent);
                        parent.text = parent.getText();
                    },
                    setProperty: function setProperty(node, name, value) {
                        node[name] = value;
                    },
                    insertNode: function insertNode(parent, node, anchor) {
                        log("INSERT: ", parent, node, anchor);
                        var prevParent = node.parent;
                        parent.insertChild(node, anchor);
                        if (node instanceof ElementNode) {
                            if (node.parent.rendered) node.render(true);
                            if (prevParent !== void 0) enqueueDelete(node, 1);
                        } else if (isElementText(parent)) parent.text = parent.getText();
                    },
                    isTextNode: function isTextNode(node) {
                        return isElementText(node);
                    },
                    removeNode: function removeNode(parent, node) {
                        log("REMOVE: ", parent, node);
                        parent.removeChild(node);
                        if (node instanceof ElementNode) enqueueDelete(node, -1); else if (isElementText(parent)) parent.text = parent.getText();
                    },
                    getParentNode: function getParentNode(node) {
                        return node.parent;
                    },
                    getFirstChild: function getFirstChild(node) {
                        return node.children[0];
                    },
                    getNextSibling: function getNextSibling(node) {
                        var children = node.parent.children || [];
                        var index = children.indexOf(node) + 1;
                        if (index < children.length) return children[index];
                    }
                };
                solidRenderer = createRenderer$2(solidOpts_default);
                _export("f", rootNode = solidOpts_default.createElement("App"));
                render = function render(code) {
                    return solidRenderer.render(code, rootNode);
                };
                _solidRenderer = solidRenderer, effect = _solidRenderer.effect, memo = _solidRenderer.memo, 
                createComponent = _solidRenderer.createComponent, createElement = _solidRenderer.createElement, 
                createTextNode = _solidRenderer.createTextNode, insertNode = _solidRenderer.insertNode, 
                insert = _solidRenderer.insert, spread = _solidRenderer.spread, setProp = _solidRenderer.setProp, 
                use = _solidRenderer.use, _export("c", effect), _export("d", memo), _export("i", createComponent), 
                _export("a", createElement), _export("s", createTextNode), _export("u", insertNode), 
                _export("l", insert), _export("h", spread), _export("m", setProp), _export("g", use);
                taskQueue = [];
                tasksEnabled = false;
                createRoot(function() {
                    createRenderEffect(function() {
                        activeElement();
                        tasksEnabled = false;
                    });
                });
                _export("r", View = function View(props) {
                    var el = createElement("node");
                    spread(el, props, false);
                    return el;
                });
                _export("n", Text = function Text(props) {
                    var el = createElement("text");
                    spread(el, props, false);
                    return el;
                });
            }
        };
    });
})();