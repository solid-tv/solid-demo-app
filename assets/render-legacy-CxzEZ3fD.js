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
    function _wrapNativeSuper(t) {
        var r = "function" == typeof Map ? new Map : void 0;
        return _wrapNativeSuper = function(t) {
            if (null === t || !function(t) {
                try {
                    return -1 !== Function.toString.call(t).indexOf("[native code]");
                } catch (n) {
                    return "function" == typeof t;
                }
            }(t)) return t;
            if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== r) {
                if (r.has(t)) return r.get(t);
                r.set(t, Wrapper);
            }
            function Wrapper() {
                return function(t, e, r) {
                    if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
                    var o = [ null ];
                    o.push.apply(o, e);
                    var p = new (t.bind.apply(t, o));
                    return r && _setPrototypeOf(p, r.prototype), p;
                }(t, arguments, _getPrototypeOf(this).constructor);
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
    function _isNativeReflectConstruct() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        } catch (t) {}
        return (_isNativeReflectConstruct = function() {
            return !!t;
        })();
    }
    function _setPrototypeOf(t, e) {
        return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
            return t.__proto__ = e, t;
        }, _setPrototypeOf(t, e);
    }
    function _getPrototypeOf(t) {
        return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t);
        }, _getPrototypeOf(t);
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
    function _typeof(o) {
        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
            return typeof o;
        } : function(o) {
            return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
        }, _typeof(o);
    }
    System.register([], function(_export, _context) {
        var normalizeBoundsMargin$1, EventEmitter, TextureErrorCode, defaultMessages, TextureError, ST_VIS_MASK, retryDelay, IdQueue, TextureStore, TextureType, TEXTURE_STATE_NAMES, Texture, ImageTexture, SubTexture, ColorTexture, NoiseTexture, ENABLE_INSPECTOR, EMIT_BOUNDS_EVENTS, same, NodeStore, hasOwn$1, makeCurve, bezierCurve, curves, beziers, resolveBezier, resolveEasing, f64Track, colorTrack, FAST, GROUPS, noWaiter, Animation, EMPTY_TEXTURE_OPTIONS, Node, TextState, DEFAULTS, TextNode$1, orNumber, orString, scratch, depth, ClipStore, ScenePass, MAX_QUADS, VertexStream, OpList, AnimationManager, FrameEvents, clampUnit, quantizeUv, TextureNodes, GlContext, ATTRIBUTES, SYSTEM_UNIFORMS, UniformTable, Program, PRECISION, glslFloat, viewportGlsl, defaultVertex, SHADER, ShaderNode, UniformWriter, UpdateContext, isAdvanced, copyOf, keyOf, ShaderRegistry, PROTOCOL_REGEX, IS_FILE_PROTOCOL, REQUEST_TIMEOUT, getDefaultPlatform, WebPlatform, pool, orNull, isObject$1, texelUnits, GlyphRecord, EMPTY_PAGE, FALLBACK_GLYPH, DEFAULT_METRICS, CAP_HEIGHT_FALLBACK_RATIO, X_HEIGHT_FALLBACK_RATIO, isInvisible, MAX_SIZES, FontRecord, FontRegistry, separators, LayoutEntry, LayoutCache, TextNodes, sdfVertex, SDF_FRAGMENT, TextEmitter, CORE_DEFAULTS, RendererCore, DEFAULT_FRAGMENT, ContextSpy, BLOCK_4x4x8, BLOCK_4x4x16, BLOCK_5x5x16, BLOCK_6x6x16, BLOCK_8x4x8, BLOCK_8x8x16, BLOCK_10x10x16, BLOCK_12x12x16, blockInfoMap, PVR_MAGIC, PVR_TO_GL, ASTC_MAGIC, ASTC_TO_GL, KTX_IDENTIFIER, EXT_ASTC, EXT_S3TC, EXT_ETC1, EXT_ETC, EXT_PVRTC, EXT_NONE, GlBackend, FrameLoop, STRAIGHT_ALPHA_TEST_PNG, ImageWorkerManager, toLoaded, imageData, warned, Loader, Uploader, MemoryManager, Telemetry, positive, runtimeSettings, initial, noop, windowPixelRatio, hasOwn, frameTime, Renderer, sharedConfig, equalFn, $PROXY, SUPPORTS_PROXY, $TRACK, signalOptions, ERROR, runEffects, STALE, PENDING, UNOWNED, NO_INIT, Owner, Transition, Scheduler, ExternalSourceConfig, Listener, Updates, Effects, ExecCount, setTransPending, SuspenseContext, FALLBACK, hydrationEnabled, propTraps, narrowedError, SuspenseListContext, activeElement, _setActiveElement, DOM_RENDERING, SHADERS_ENABLED, isDomRendererActive, Config, NodeType, TextNode, isFunction, colorToRgba, _document$documentEle, _styleRef, supportsObjectFit, supportsObjectPosition, supportsMixBlendMode, supportsStandardMask, supportsWebkitMask, supportsCssMask, animationTasks, animationFrameRequested, AnimationController, elMap, textNodesToMeasure, containTextNodes, fontLoadingListenerSetup, defaultShader, lastNodeId, CoreNodeRenderStateMap, DOMNode, DOMText, DOMRendererMain, renderer$1, pendingFontLoads, States, _signalWrapper, keyMapEntries, flattenKeyMap, mappedHandlerNames, unmappedHandlerNames, needFocusDebugStyles, addFocusDebug, focusHistory, _pendingHistoryKey, getElementLabel, setActiveElementCore, focusPath, setFocusPath, updateFocusPath, lastGlobalKeyPressTime, lastInputKey, isElementThrottled, propagateKeyPress, keyNameId, keyCodeId, suppressedKeys, findSuppression, liftSuppression, handleKeyEvents, _dispatchEvent, dispatchKeyDown, dispatchKeyUp, calculateFlex, postMutationQueued, nextActiveElement, deferredFocusElement, layoutQueue, elementDeleteQueue, _fontTemplate, _fontFamilyIdx, _fontFamilyWithWeight, EFFECT_SHADER_KEYS, hasOwnProperty, borderSideMap, shaderPropNames, parseAndAssignShaderProps, LightningRendererNumberProps, LightningRendererNonAnimatingProps, ElementNode, memo$1, solidOpts_default, solidRenderer, renderer, rootNode, render, effect, memo, createComponent, createElement, createTextNode, insertNode, insert, spread, setProp, use, taskQueue, tasksEnabled;
        function frameTimeBucketIndex(ms) {
            return ms < 32 ? ms < 0 ? 0 : Math.floor(ms) : ms >= 128 ? 44 : 32 + Math.floor((ms - 32) / 8);
        }
        function visibilityOf(state) {
            return (state & ST_VIS_MASK) >>> 14;
        }
        function withVisibility(state, vis) {
            return (-49153 & state | vis << 14) >>> 0;
        }
        function renderStateOf(vis) {
            return 0 === vis ? 0 : 1 << vis;
        }
        function growU8$1(a, n) {
            var b = new Uint8Array(n);
            return void 0 !== a && b.set(a), b;
        }
        function growI32$3(a, n) {
            var b = new Int32Array(n);
            return void 0 !== a && b.set(a), b;
        }
        function growF64$2(a, n) {
            var b = new Float64Array(n);
            return void 0 !== a && b.set(a), b;
        }
        function growSide$1(a, n) {
            for (var i = a.length; i < n; i++) a.push(null);
        }
        function closeData(data) {
            null !== data && "object" === _typeof(data) && "function" == typeof data.close && data.close();
        }
        function liveRecord(store, handle) {
            var id = handle.id;
            return -1 !== id && store.gen[id] === handle._gen ? id : -1;
        }
        function imageKey(src, key, premultiplyAlpha, sx, sy, sw, sh) {
            var id = null != key && "" !== key ? key : src;
            if ("string" != typeof id) return null;
            var out = "ImageTexture,".concat(id, ",").concat(null == premultiplyAlpha || premultiplyAlpha);
            return null != sw && null != sh && (out += ",".concat(null != sx ? sx : "", ",").concat(null != sy ? sy : "", ",").concat(0 === sw ? "" : sw, ",").concat(0 === sh ? "" : sh)), 
            out;
        }
        function recordFor(store, type, props) {
            var kind = 0, key = null;
            if (type === TextureType.subTexture) {
                var parent = props.texture;
                return store.create(3, props, null, textureRecord(store, parent));
            }
            if (type === TextureType.image) {
                var p = props;
                key = imageKey(p.src, p.key, p.premultiplyAlpha, p.sx, p.sy, p.sw, p.sh);
            } else if (type === TextureType.color) kind = 1, key = "ColorTexture,".concat(props.color); else {
                kind = 2;
                var _p = props;
                key = void 0 === _p.cacheId ? null : "NoiseTexture,".concat(_p.w, ",").concat(_p.h, ",").concat(_p.cacheId);
            }
            var cached = null === key ? void 0 : store.cache.get(key);
            return void 0 !== cached ? cached : store.create(kind, type === TextureType.image ? function(store, p) {
                var _p$src, _p$premultiplyAlpha, _p$key, _p$type, _p$w, _p$h, _p$sx, _p$sy, _p$sw, _p$sh, _p$maxRetryCount;
                return {
                    src: null !== (_p$src = p.src) && void 0 !== _p$src ? _p$src : "",
                    premultiplyAlpha: null === (_p$premultiplyAlpha = p.premultiplyAlpha) || void 0 === _p$premultiplyAlpha || _p$premultiplyAlpha,
                    key: null !== (_p$key = p.key) && void 0 !== _p$key ? _p$key : null,
                    type: null !== (_p$type = p.type) && void 0 !== _p$type ? _p$type : null,
                    w: null !== (_p$w = p.w) && void 0 !== _p$w ? _p$w : null,
                    h: null !== (_p$h = p.h) && void 0 !== _p$h ? _p$h : null,
                    sx: null !== (_p$sx = p.sx) && void 0 !== _p$sx ? _p$sx : null,
                    sy: null !== (_p$sy = p.sy) && void 0 !== _p$sy ? _p$sy : null,
                    sw: null !== (_p$sw = p.sw) && void 0 !== _p$sw ? _p$sw : null,
                    sh: null !== (_p$sh = p.sh) && void 0 !== _p$sh ? _p$sh : null,
                    maxRetryCount: null !== (_p$maxRetryCount = p.maxRetryCount) && void 0 !== _p$maxRetryCount ? _p$maxRetryCount : store.maxRetries
                };
            }(store, props) : props, key);
        }
        function textureRecord(store, handle) {
            var id = liveRecord(store, handle);
            return -1 === id ? function(store, handle) {
                var rec = recordFor(store, handle.type, handle.props);
                handle.id = rec, handle._gen = store.gen[rec], null === store.handles[rec] && (store.handles[rec] = handle);
                !0 === handle._keep && store.setPreventCleanup(rec, !0);
                return rec;
            }(store, handle) : id;
        }
        function _createTexture(store, type, props) {
            var textureType, resolved;
            if (store.time = store.now(), "ImageTexture" === type) textureType = TextureType.image, 
            resolved = props; else if ("SubTexture" === type) {
                var _p$x, _p$y, _p$w2, _p$h2, p = props;
                textureType = TextureType.subTexture;
                var parent = p.texture, x = null !== (_p$x = p.x) && void 0 !== _p$x ? _p$x : 0, y = null !== (_p$y = p.y) && void 0 !== _p$y ? _p$y : 0;
                if (parent.type === TextureType.subTexture) {
                    var region = parent.props;
                    x += region.x, y += region.y, parent = region.texture;
                }
                resolved = {
                    texture: parent,
                    x: x,
                    y: y,
                    w: null !== (_p$w2 = p.w) && void 0 !== _p$w2 ? _p$w2 : 0,
                    h: null !== (_p$h2 = p.h) && void 0 !== _p$h2 ? _p$h2 : 0
                };
            } else if ("ColorTexture" === type) {
                var _props$color;
                textureType = TextureType.color;
                var color = null !== (_props$color = props.color) && void 0 !== _props$color ? _props$color : 0;
                resolved = {
                    color: 0 === color ? 4294967295 : color
                };
            } else {
                if ("NoiseTexture" !== type) throw new TextureError(TextureErrorCode.TEXTURE_TYPE_NOT_REGISTERED, 'Texture type "'.concat(String(type), '" is not registered'));
                var _p$w3, _p$h3, _p2 = props;
                textureType = TextureType.noise, resolved = {
                    w: null !== (_p$w3 = _p2.w) && void 0 !== _p$w3 ? _p$w3 : 128,
                    h: null !== (_p$h3 = _p2.h) && void 0 !== _p$h3 ? _p$h3 : 128,
                    cacheId: _p2.cacheId
                };
            }
            var rec = recordFor(store, textureType, resolved), handle = store.handles[rec];
            return null === handle && (handle = new (textureType === TextureType.image ? ImageTexture : textureType === TextureType.subTexture ? SubTexture : textureType === TextureType.color ? ColorTexture : NoiseTexture)(store, rec, textureType, store.props[rec]), 
            store.handles[rec] = handle), handle;
        }
        function growI32$2(a, n) {
            var b = new Int32Array(n);
            return void 0 !== a && b.set(a), b;
        }
        function growSide(a, n) {
            for (var i = a.length; i < n; i++) a.push(null);
        }
        function premultiplyColorABGR(rgba, alpha) {
            var a = (255 & rgba) / 255 * alpha;
            return (255 * a << 24 | (rgba >>> 8 & 255) * a << 16 | (rgba >>> 16 & 255) * a << 8 | (rgba >>> 24) * a) >>> 0;
        }
        function clampByte(value) {
            return value < 0 ? 0 : value > 255 ? 255 : value;
        }
        function mergeColorProgress(rgba1, rgba2, p) {
            var r1 = rgba1 >>> 24, g1 = rgba1 >>> 16 & 255, b1 = rgba1 >>> 8 & 255, a1 = 255 & rgba1, r2 = rgba2 >>> 24, g2 = rgba2 >>> 16 & 255, b2 = rgba2 >>> 8 & 255, a2 = 255 & rgba2, q = 1 - p;
            return (clampByte(Math.round(r2 * p + r1 * q)) << 24 | clampByte(Math.round(g2 * p + g1 * q)) << 16 | clampByte(Math.round(b2 * p + b1 * q)) << 8 | clampByte(Math.round(a2 * p + a1 * q))) >>> 0;
        }
        function shaderPropsOf(node) {
            var shader = node.shader;
            if (null === shader) return null;
            var props = shader.props;
            return null == props ? null : props;
        }
        function definedCount(sp) {
            var n = 0;
            for (var k in sp) void 0 !== sp[k] && n++;
            return n;
        }
        function colorPropsOf(shader) {
            var rec = shader._rec;
            if (null == rec) return null;
            var colors = rec.colors;
            return void 0 === colors ? null : colors;
        }
        function setF(n, field, v, bits) {
            var id = n.id;
            if (-1 !== id) {
                var s = n.renderer.nodes, f64 = s.f64, i = 32 * id + field;
                f64[i] !== v && (f64[i] = v, s.markDirty(id, bits));
            }
        }
        function setC(n, field, v) {
            var id = n.id;
            if (-1 !== id) {
                var uv = v >>> 0, s = n.renderer.nodes, u32 = s.u32, i = 32 * id + field;
                u32[i] !== uv && (u32[i] = uv, s.markDirty(id, 4));
            }
        }
        function textureDirty(n, id, bits) {
            var s = n.renderer.nodes;
            s.markDirty(id, bits), 2048 & s.u32[32 * id + 1] && s.queuePreload(id);
        }
        function extrasOf(n, create) {
            var id = n.id;
            if (-1 === id) return null;
            var s = n.renderer.nodes, e = s.extras[id];
            return null === e && !0 === create && (e = {
                srcX: void 0,
                srcY: void 0,
                srcWidth: void 0,
                srcHeight: void 0,
                imageType: void 0,
                componentName: void 0,
                componentLocation: void 0
            }, s.extras[id] = e), e;
        }
        function stateOf(n) {
            var id = n.id;
            return -1 === id ? DEFAULTS : n.renderer.nodes.texts[id];
        }
        function writable(n) {
            var id = n.id;
            return -1 === id ? null : n.renderer.nodes.texts[id];
        }
        function relayout(n, t) {
            t.stale = !0, n.renderer.nodes.markDirty(n.id, 256);
        }
        function rebox(n) {
            n.renderer.nodes.markDirty(n.id, 256);
        }
        function setSize(n, field, v) {
            var id = n.id, s = n.renderer.nodes, i = 32 * id + field;
            s.f64[i] !== v && (s.f64[i] = v, s.markDirty(id, 33));
        }
        function setTextProp(t, key, value) {
            switch (key) {
              case "text":
                t.text = value;
                break;

              case "fontFamily":
                t.fontFamily = orString(value, "sans-serif");
                break;

              case "fontSize":
                t.fontSize = orNumber(value, 16);
                break;

              case "fontStyle":
                t.fontStyle = orString(value, "normal");
                break;

              case "lineHeight":
                t.lineHeight = orNumber(value, 1.2);
                break;

              case "textAlign":
                t.textAlign = orString(value, "left");
                break;

              case "verticalAlign":
                t.verticalAlign = orString(value, "top");
                break;

              case "contain":
                t.contain = orString(value, "none");
                break;

              case "maxWidth":
                t.maxWidth = orNumber(value, 0);
                break;

              case "maxHeight":
                t.maxHeight = orNumber(value, 0);
                break;

              case "maxLines":
                t.maxLines = orNumber(value, 0);
                break;

              case "overflowSuffix":
                t.overflowSuffix = orString(value, "...");
                break;

              case "wordBreak":
                t.wordBreak = orString(value, "break-word");
                break;

              case "letterSpacing":
                t.letterSpacing = orNumber(value, 0);
                break;

              case "offsetY":
                t.offsetY = orNumber(value, 0);
            }
        }
        function growF64(a, n) {
            var b = new Float64Array(n);
            return void 0 !== a && b.set(a), b;
        }
        function growI32$1(a, n) {
            var b = new Int32Array(n);
            return void 0 !== a && b.set(a), b;
        }
        function growI32(a, n) {
            var b = new Int32Array(n);
            return b.set(a), b;
        }
        function copy(table, block, e, values, count) {
            var offset = table.offsets[e], size = table.sizes[e], n = count;
            count > size && (n = size, !1 === table.warned && (table.warned = !0, console.warn("Shader uniform ".concat(table.names[e], " holds ").concat(size, " values, the size of its first pack; ").concat(count, " were written and the rest is dropped"))));
            for (var k = 0; k < n; k++) block[offset + k] = values[k];
        }
        function facadeProto(names, configs, aliases, aliasConfigs, variantProps) {
            for (var proto = {}, _loop = function() {
                var name = names[i], config = configs[i], resolver = !0 === isAdvanced(config) && void 0 !== config.resolve ? config : null, variant = null !== variantProps && -1 !== variantProps.indexOf(name);
                Object.defineProperty(proto, name, {
                    enumerable: !0,
                    get: function() {
                        var shader = this[SHADER];
                        return void 0 === shader ? void 0 : shader.values[name];
                    },
                    set: function(v) {
                        var shader = this[SHADER], values = shader.values, value = null === resolver ? v : resolver.resolve(v, values);
                        (value !== values[name] || null !== value && "object" === _typeof(value)) && (values[name] = value, 
                        shader._changed(variant));
                    }
                });
            }, i = 0; i < names.length; i++) _loop();
            for (var _loop2 = function() {
                var config = aliasConfigs[_i];
                Object.defineProperty(proto, aliases[_i], {
                    enumerable: !0,
                    get: function() {
                        var shader = this[SHADER];
                        return void 0 === shader || void 0 === config.get ? void 0 : config.get(shader.values);
                    },
                    set: function(v) {
                        var shader = this[SHADER];
                        config.set(v, shader.values), shader._changed(!1);
                    }
                });
            }, _i = 0; _i < aliases.length; _i++) _loop2();
            return proto;
        }
        function assertTruthy(condition, message) {
        }
        function convertUrlToAbsolute(url) {
            var hasProtocol = PROTOCOL_REGEX.test(url);
            if (!0 === IS_FILE_PROTOCOL && !1 === hasProtocol) {
                var path = self.location.pathname.split("/");
                path.pop();
                var baseUrl = self.location.protocol + "//" + path.join("/");
                return "." === url.charAt(0) && (url = url.slice(1)), "/" === url.charAt(0) && (url = url.slice(1)), 
                baseUrl + "/" + url;
            }
            return !0 === hasProtocol || "undefined" == typeof self ? url : new URL(url, self.location.href).href;
        }
        function isBase64Image(src) {
            return 0 === src.lastIndexOf("data:", 0);
        }
        function normalizeSdfData(response) {
            var data = response;
            if ("string" == typeof data) try {
                data = JSON.parse(data);
            } catch (e) {
                return null;
            }
            if (!1 === isObject$1(data)) return null;
            var font = data;
            return !0 === isObject$1(font.chars) && !0 === isObject$1(font.common) && !0 === isObject$1(font.info) && !0 === isObject$1(font.distanceField) ? font : null;
        }
        function startRequest(fetch, url, type) {
            try {
                return fetch(convertUrlToAbsolute(url), type);
            } catch (error) {
                return Promise.reject(error);
            }
        }
        function prefetchFont(options) {
            var family = options.fontFamily, primary = !0 === Array.isArray(family) ? family[0] : family;
            if (void 0 !== primary && "canvas" !== options.type && void 0 !== options.atlasDataUrl && !0 !== pool.has(primary)) {
                var Host = getDefaultPlatform(), platform = null !== Host ? new Host : new WebPlatform, fetch = function(url, type) {
                    return platform.fetch(url, type);
                }, atlasUrl = options.atlasUrl;
                pool.set(primary, {
                    data: orNull(startRequest(fetch, options.atlasDataUrl, "json")).then(normalizeSdfData),
                    atlas: void 0 !== atlasUrl ? orNull(startRequest(fetch, atlasUrl, "blob")).then(function(blob) {
                        return null !== blob && "object" === _typeof(blob) ? blob : null;
                    }) : Promise.resolve(null)
                });
            }
        }
        function metricsAt(font, fontSize) {
            var sizes = font.sizes, m = sizes.get(fontSize);
            return void 0 === m && (sizes.size >= MAX_SIZES && sizes.delete(sizes.keys().next().value), 
            m = function(metrics, fontSize) {
                var scale = fontSize / metrics.unitsPerEm, capHeight = void 0 !== metrics.capHeight ? metrics.capHeight : metrics.ascender * CAP_HEIGHT_FALLBACK_RATIO, xHeight = void 0 !== metrics.xHeight ? metrics.xHeight : metrics.ascender * X_HEIGHT_FALLBACK_RATIO;
                return {
                    ascender: metrics.ascender * scale,
                    descender: metrics.descender * scale,
                    lineGap: metrics.lineGap * scale,
                    capHeight: capHeight * scale,
                    xHeight: xHeight * scale
                };
            }(font.metrics, fontSize), sizes.set(fontSize, m)), m;
        }
        function astralOf(font, code) {
            var glyph = font.astral.get(code);
            return void 0 !== glyph ? glyph : null;
        }
        function measureText(text, font, letterSpacing) {
            return measureRange(text, 0, text.length, font, letterSpacing);
        }
        function measureRange(text, start, end, font, letterSpacing) {
            var pages = font.pages;
            if (end - start === 1) {
                var code = text.charCodeAt(start);
                if (8203 === code || !0 === isInvisible(code)) return 0;
                var glyph = pages[code >> 8][255 & code];
                return null === glyph && null === (glyph = font.fallback) ? 0 : glyph.xadvance + letterSpacing;
            }
            for (var kernAmounts = font.kernAmounts, width = 0, prev = -1, i = start; i < end; i++) {
                var _code = text.charCodeAt(i);
                if (_code >= 55296 && _code <= 56319 && i + 1 < end) {
                    var lo = text.charCodeAt(i + 1);
                    lo >= 56320 && lo <= 57343 && (_code = 1024 * (_code - 55296) + (lo - 56320) + 65536);
                }
                var _glyph = void 0;
                if (_code > 65535) i++, _glyph = astralOf(font, _code); else {
                    if (_code >= 173 && (8203 === _code || !0 === isInvisible(_code))) continue;
                    _glyph = pages[_code >> 8][255 & _code];
                }
                if (null !== _glyph || null !== (_glyph = font.fallback)) {
                    var advance = _glyph.xadvance;
                    if (-1 !== prev) {
                        var row = _glyph.kern;
                        if (null !== row) {
                            var pair = row[prev];
                            0 !== pair && (advance += kernAmounts[pair]);
                        }
                    }
                    width += advance + letterSpacing, prev = _glyph.kernColumn;
                }
            }
            return width;
        }
        function layoutLines(measureText, measureRange, metrics, text, textAlign, font, lineHeight, overflowSuffix, wordBreak, letterSpacing, maxLines, maxWidth, maxHeight, baselineMode) {
            var bareLineHeight = metrics.ascender - metrics.descender + metrics.lineGap, lineHeightPx = lineHeight <= 3 ? lineHeight * bareLineHeight : lineHeight, effectiveMaxLines = maxLines;
            if (maxHeight > 0) {
                var maxFromHeight = Math.floor(maxHeight / lineHeightPx);
                maxFromHeight < 1 && (maxFromHeight = 1), (0 === effectiveMaxLines || maxFromHeight < effectiveMaxLines) && (effectiveMaxLines = maxFromHeight);
            }
            var wrapped = maxWidth > 0 ? function(measureText, measureRange, text, font, maxWidth, letterSpacing, overflowSuffix, wordBreak, maxLines) {
                for (var wrappedLines = [], spaceWidth = measureText(" ", font, letterSpacing), overflowWidth = measureText(overflowSuffix, font, letterSpacing), remainingLines = maxLines > 0 ? maxLines : 1e3, hasRemainingText = !0, hasMaxLines = maxLines > 0, start = 0; ;) {
                    var end = text.indexOf("\n", start), isLast = -1 === end;
                    if (!0 === isLast && (end = text.length), end > start ? (remainingLines = wrapRange(measureText, measureRange, text, start, end, font, maxWidth, letterSpacing, spaceWidth, overflowSuffix, overflowWidth, wordBreak, remainingLines, wrappedLines), 
                    hasRemainingText = !0) : (wrappedLines.push([ "", 0, !1, 0, 0 ]), hasRemainingText = !1 === isLast), 
                    remainingLines--, !0 === hasMaxLines && remainingLines <= 0) {
                        var lastLine = wrappedLines[wrappedLines.length - 1];
                        if (!1 === isLast && !1 === lastLine[2]) {
                            var truncated = truncateLineEnd(measureText, font, letterSpacing, lastLine[0], lastLine[1], "", maxWidth, overflowSuffix, overflowWidth);
                            lastLine[0] = truncated[0], lastLine[1] = truncated[1], lastLine[2] = !0;
                        }
                        break;
                    }
                    if (!0 === isLast) break;
                    start = end + 1;
                }
                return [ wrappedLines, remainingLines, hasRemainingText ];
            }(measureText, measureRange, text, font, maxWidth, letterSpacing, overflowSuffix, wordBreak, effectiveMaxLines) : function(measureText, lines, font, letterSpacing, maxLines) {
                var measuredLines = [], remainingLines = maxLines > 0 ? maxLines : lines.length, i = 0;
                for (;remainingLines > 0 && i < lines.length; ) {
                    var line = lines[i];
                    if (i++, remainingLines--, void 0 !== line) {
                        var width = measureText(line, font, letterSpacing);
                        measuredLines.push([ line, width, !1, 0, 0 ]);
                    }
                }
                return [ measuredLines, remainingLines, maxLines > 0 && lines.length - measuredLines.length > 0 ];
            }(measureText, text.split("\n"), font, letterSpacing, effectiveMaxLines), lines = wrapped[0], effectiveLineAmount = lines.length, effectiveMaxWidth = 0;
            if (0 !== letterSpacing) for (var i = 0; i < effectiveLineAmount; i++) {
                var line = lines[i];
                0 === line[1] && 0 === measureText(line[0], font, 0) || (line[1] -= letterSpacing);
            }
            if (effectiveLineAmount > 0) {
                effectiveMaxWidth = lines[0][1];
                for (var _i5 = 1; _i5 < effectiveLineAmount; _i5++) effectiveMaxWidth = Math.max(effectiveMaxWidth, lines[_i5][1]);
            }
            if ("left" !== textAlign) for (var _i6 = 0; _i6 < effectiveLineAmount; _i6++) {
                var _line = lines[_i6], w = _line[1];
                _line[3] = "right" === textAlign ? effectiveMaxWidth - w : (effectiveMaxWidth - w) / 2;
            }
            var firstBaselineY, effectiveMaxHeight = effectiveLineAmount * lineHeightPx;
            firstBaselineY = "cap" === baselineMode ? .5 * (lineHeightPx + metrics.capHeight) : "x" === baselineMode ? .5 * (lineHeightPx + metrics.xHeight) : "linebox" === baselineMode ? .5 * (lineHeightPx - bareLineHeight) + metrics.ascender : .5 * (lineHeightPx + .5 * (metrics.capHeight + metrics.xHeight));
            for (var _i7 = 0; _i7 < effectiveLineAmount; _i7++) lines[_i7][4] = firstBaselineY + lineHeightPx * _i7;
            return [ lines, wrapped[1], wrapped[2], bareLineHeight, lineHeightPx, effectiveMaxWidth, effectiveMaxHeight ];
        }
        function wrapRange(measureText, measureRange, text, lineStart, lineEnd, font, maxWidth, letterSpacing, spaceWidth, overflowSuffix, overflowWidth, wordBreak, remainingLines, wrappedLines) {
            for (var wrapFn = function(wordBreak) {
                return "break-all" === wordBreak ? breakAll : "overflow" === wordBreak ? overflow : breakWord;
            }(wordBreak), next = lineStart, scan = lineStart; scan < lineEnd; ) {
                var c = text.charCodeAt(scan);
                if (32 !== c && 8203 !== c) break;
                scan++;
            }
            for (var found = 0, used = 0, lineFrom = lineStart, lineTo = lineStart, lineText = null, currentLineWidth = 0, pendingFrom = -1, pendingTo = 0, pendingWidth = 0, pendingMeasured = !1; (-1 !== pendingFrom || -1 !== next) && remainingLines > 0; ) {
                var wordFrom = void 0, wordTo = void 0, wordWidth = void 0;
                if (-1 !== pendingFrom) wordFrom = pendingFrom, wordTo = pendingTo, pendingFrom = -1, 
                wordWidth = !0 === pendingMeasured ? pendingWidth : measureRange(text, wordFrom, wordTo, font, letterSpacing); else {
                    for (wordFrom = next, wordTo = scan; wordTo < lineEnd; ) {
                        var _c2 = text.charCodeAt(wordTo);
                        if (32 === _c2 || 8203 === _c2) break;
                        wordTo++;
                    }
                    if (wordTo === lineEnd) next = -1; else {
                        for (var _sepTo = wordTo + 1; _sepTo < lineEnd; ) {
                            var _c3 = text.charCodeAt(_sepTo);
                            if (32 !== _c3 && 8203 !== _c3) break;
                            _sepTo++;
                        }
                        separators[2 * found] = wordTo, separators[2 * found + 1] = _sepTo, found++, next = _sepTo, 
                        scan = _sepTo;
                    }
                    wordWidth = measureRange(text, wordFrom, wordTo, font, letterSpacing);
                }
                if (0 !== currentLineWidth) {
                    var sepFrom = 0, sepTo = 0;
                    used < found && (sepFrom = separators[2 * used], sepTo = separators[2 * used + 1]), 
                    used++;
                    var isSpace = sepTo - sepFrom === 1 && 32 === text.charCodeAt(sepFrom), effectiveSpaceWidth = !0 === isSpace ? spaceWidth : sepTo > sepFrom ? measureRange(text, sepFrom, sepTo, font, letterSpacing) : 0, totalWidth = currentLineWidth + effectiveSpaceWidth + wordWidth;
                    if (totalWidth <= maxWidth) {
                        if (null === lineText && effectiveSpaceWidth > 0 && sepFrom === lineTo && sepTo === wordFrom ? lineTo = wordTo : lineText = (null === lineText ? text.substring(lineFrom, lineTo) : lineText) + (effectiveSpaceWidth > 0 ? text.substring(sepFrom, sepTo) : "") + text.substring(wordFrom, wordTo), 
                        currentLineWidth = totalWidth, totalWidth < maxWidth) continue;
                        remainingLines--, wrappedLines.push([ null === lineText ? text.substring(lineFrom, lineTo) : lineText, currentLineWidth, !1, 0, 0 ]), 
                        lineText = "", currentLineWidth = 0;
                    } else {
                        remainingLines--;
                        var wrapped = wrapFn(measureText, text.substring(wordFrom, wordTo), wordWidth, font, letterSpacing, wrappedLines, null === lineText ? text.substring(lineFrom, lineTo) : lineText, currentLineWidth, remainingLines, "", maxWidth, !0 === isSpace ? " " : text.substring(sepFrom, sepTo), spaceWidth, overflowSuffix, overflowWidth);
                        lineText = wrapped[0], currentLineWidth = wrapped[1];
                        var rest = wrapped[2].length;
                        rest > 0 && remainingLines > 0 && (pendingFrom = wordTo - rest, pendingTo = wordTo, 
                        pendingMeasured = rest === wordTo - wordFrom, pendingWidth = wordWidth);
                    }
                } else {
                    if (wordWidth > maxWidth == !1) {
                        wordWidth + spaceWidth >= maxWidth ? (remainingLines--, wrappedLines.push([ text.substring(wordFrom, wordTo), wordWidth, !1, 0, 0 ])) : (lineFrom = wordFrom, 
                        lineTo = wordTo, lineText = null, currentLineWidth = wordWidth);
                        continue;
                    }
                    var isLastLine = 0 === --remainingLines, word = text.substring(wordFrom, wordTo), cut = !0 === isLastLine ? truncateWord(measureText, word, wordWidth, maxWidth, font, letterSpacing, overflowSuffix, overflowWidth) : splitWord(measureText, word, wordWidth, maxWidth, font, letterSpacing), head = cut[0], headWidth = cut[2], truncated = isLastLine, _rest = cut[1].length;
                    _rest > 0 && head.length > 0 ? (pendingFrom = wordTo - _rest, pendingTo = wordTo, 
                    pendingMeasured = !1) : _rest > 0 && (remainingLines = 0, truncated = !0, head = overflowSuffix.length > 0 ? overflowSuffix : cut[1].charAt(0), 
                    headWidth = overflowSuffix.length > 0 ? overflowWidth : measureText(head, font, letterSpacing)), 
                    wrappedLines.push([ head, headWidth, truncated, 0, 0 ]);
                }
            }
            return currentLineWidth > 0 && remainingLines > 0 && wrappedLines.push([ null === lineText ? text.substring(lineFrom, lineTo) : lineText, currentLineWidth, !1, 0, 0 ]), 
            remainingLines;
        }
        function overflow(measureText, word, wordWidth, font, letterSpacing, wrappedLines, currentLine, currentLineWidth, remainingLines, remainingWord, maxWidth, space, spaceWidth, overflowSuffix, overflowWidth) {
            return currentLine += space + word, currentLineWidth += spaceWidth + wordWidth, 
            0 === remainingLines && (currentLine += overflowSuffix, currentLineWidth += overflowWidth), 
            wrappedLines.push([ currentLine, currentLineWidth, !0, 0, 0 ]), [ "", 0, "" ];
        }
        function breakWord(measureText, word, wordWidth, font, letterSpacing, wrappedLines, currentLine, currentLineWidth, remainingLines, remainingWord, maxWidth, space, spaceWidth, overflowSuffix, overflowWidth) {
            if (remainingWord = word, 0 === remainingLines) {
                var truncated = truncateLineEnd(measureText, font, letterSpacing, currentLine, currentLineWidth, remainingWord, maxWidth, overflowSuffix, overflowWidth);
                currentLine = truncated[0], currentLineWidth = truncated[1], remainingWord = truncated[2], 
                wrappedLines.push([ currentLine, currentLineWidth, !0, 0, 0 ]);
            } else wrappedLines.push([ currentLine, currentLineWidth, !1, 0, 0 ]), currentLine = "", 
            currentLineWidth = 0;
            return [ currentLine, currentLineWidth, remainingWord ];
        }
        function breakAll(measureText, word, wordWidth, font, letterSpacing, wrappedLines, currentLine, currentLineWidth, remainingLines, remainingWord, maxWidth, space, spaceWidth, overflowSuffix, overflowWidth) {
            var remainingSpace = maxWidth - currentLineWidth;
            currentLineWidth > 0 && (remainingSpace -= spaceWidth);
            var truncate = 0 === remainingLines, cut = truncate ? truncateWord(measureText, word, wordWidth, remainingSpace, font, letterSpacing, overflowSuffix, overflowWidth) : splitWord(measureText, word, wordWidth, remainingSpace, font, letterSpacing);
            return currentLine += space + cut[0], currentLineWidth += spaceWidth + cut[2], wrappedLines.push([ currentLine, currentLineWidth, truncate, 0, 0 ]), 
            [ "", 0, cut[1] ];
        }
        function truncateLineEnd(measureText, font, letterSpacing, currentLine, currentLineWidth, remainingWord, maxWidth, overflowSuffix, overflowWidth) {
            if (currentLineWidth + overflowWidth <= maxWidth) return [ currentLine += overflowSuffix, currentLineWidth += overflowWidth, remainingWord = "" ];
            for (var truncated = !1, i = currentLine.length - 1; i > 0; i--) {
                if ((currentLineWidth -= measureText(currentLine.charAt(i), font, letterSpacing)) + overflowWidth <= maxWidth) {
                    currentLineWidth += overflowWidth, remainingWord = (currentLine = currentLine.substring(0, i) + overflowSuffix).substring(i) + " " + remainingWord, 
                    truncated = !0;
                    break;
                }
            }
            return !1 === truncated && (currentLineWidth = overflowWidth, remainingWord = currentLine = overflowSuffix), 
            [ currentLine, currentLineWidth, remainingWord ];
        }
        function truncateWord(measureText, word, wordWidth, maxWidth, font, letterSpacing, overflowSuffix, overflowWidth) {
            var targetWidth = maxWidth - overflowWidth;
            if (targetWidth <= 0) return [ "", word, 0 ];
            if (wordWidth - targetWidth < wordWidth / 2 == !1) {
                for (var _currentWidth = wordWidth, i = word.length - 1; i > 0; i--) {
                    if ((_currentWidth -= measureText(word.charAt(i), font, letterSpacing)) <= targetWidth) {
                        var remainingWord = word.substring(i);
                        return [ word.substring(0, i) + overflowSuffix, remainingWord, _currentWidth + overflowWidth ];
                    }
                }
                return [ overflowSuffix, word, overflowWidth ];
            }
            for (var currentWidth = 0, _i8 = 0; _i8 < word.length; _i8++) {
                var _charWidth = measureText(word.charAt(_i8), font, letterSpacing);
                if (currentWidth + _charWidth > targetWidth) {
                    var _remainingWord = word.substring(_i8);
                    return [ word.substring(0, _i8) + overflowSuffix, _remainingWord, currentWidth + overflowWidth ];
                }
                currentWidth += _charWidth;
            }
            return [ word + overflowSuffix, "", wordWidth + overflowWidth ];
        }
        function splitWord(measureText, word, wordWidth, maxWidth, font, letterSpacing) {
            if (maxWidth <= 0) return [ "", word, 0 ];
            if (wordWidth - maxWidth < wordWidth / 2 == !1) {
                for (var _currentWidth2 = wordWidth, i = word.length - 1; i > 0; i--) {
                    if ((_currentWidth2 -= measureText(word.charAt(i), font, letterSpacing)) <= maxWidth) {
                        var remainingWord = word.substring(i);
                        return [ word.substring(0, i), remainingWord, _currentWidth2 ];
                    }
                }
                return [ "", word, 0 ];
            }
            for (var currentWidth = 0, _i9 = 0; _i9 < word.length; _i9++) {
                var _charWidth2 = measureText(word.charAt(_i9), font, letterSpacing);
                if (currentWidth + _charWidth2 > maxWidth) {
                    var _remainingWord2 = word.substring(_i9);
                    return [ word.substring(0, _i9), _remainingWord2, currentWidth ];
                }
                currentWidth += _charWidth2;
            }
            return [ word, "", wordWidth ];
        }
        function layoutText(props, font, baselineMode) {
            var data = font.data, fontScale = props.fontSize / data.info.size;
            if (0 === props.text.length) {
                var empty = new ArrayBuffer(0);
                return {
                    f32: new Float32Array(empty),
                    u32: new Uint32Array(empty),
                    glyphCount: 0,
                    width: 0,
                    height: 0,
                    fontScale: fontScale,
                    lineHeight: 0,
                    distanceRange: fontScale * data.distanceField.distanceRange
                };
            }
            for (var atlasBase = data.common.base, letterSpacing = props.letterSpacing / fontScale, layout = layoutLines(measureText, measureRange, metricsAt(font, props.fontSize), props.text, props.textAlign, font, props.lineHeight, props.overflowSuffix, props.wordBreak, letterSpacing, props.maxLines, props.maxWidth / fontScale, props.maxHeight, baselineMode), lines = layout[0], maxGlyphs = 0, i = 0; i < lines.length; i++) maxGlyphs += lines[i][0].length;
            for (var buffer = new ArrayBuffer(8 * maxGlyphs * 4), f32 = new Float32Array(buffer), u32 = new Uint32Array(buffer), pages = font.pages, fallback = font.fallback, kernAmounts = font.kernAmounts, o = 0, glyphCount = 0, _i0 = 0; _i0 < lines.length; _i0++) for (var line = lines[_i0], textLine = line[0], n = textLine.length, prev = -1, x = line[3], baseline = line[4] / fontScale, j = 0; j < n; j++) {
                var code = textLine.charCodeAt(j);
                if (code >= 55296 && code <= 56319 && j + 1 < n) {
                    var lo = textLine.charCodeAt(j + 1);
                    lo >= 56320 && lo <= 57343 && (code = 1024 * (code - 55296) + (lo - 56320) + 65536);
                }
                var glyph = void 0;
                if (code > 65535) j++, glyph = astralOf(font, code); else {
                    if (code >= 173 && (8203 === code || !0 === isInvisible(code))) continue;
                    glyph = pages[code >> 8][255 & code];
                }
                if (null !== glyph || null !== (glyph = fallback)) {
                    if (-1 !== prev) {
                        var row = glyph.kern;
                        if (null !== row) {
                            var pair = row[prev];
                            0 !== pair && (x += kernAmounts[pair]);
                        }
                    }
                    0 !== glyph.width && 0 !== glyph.height ? (f32[o] = x + glyph.xoffset, f32[o + 1] = baseline + glyph.yoffset - atlasBase, 
                    f32[o + 2] = glyph.width, f32[o + 3] = glyph.height, u32[o + 4] = glyph.uvTopLeft, 
                    u32[o + 5] = glyph.uvTopRight, u32[o + 6] = glyph.uvBottomLeft, u32[o + 7] = glyph.uvBottomRight, 
                    o += 8, glyphCount++, x += glyph.xadvance + letterSpacing, prev = glyph.kernColumn) : (x += glyph.xadvance + letterSpacing, 
                    prev = glyph.kernColumn);
                }
            }
            return {
                f32: f32,
                u32: u32,
                glyphCount: glyphCount,
                width: layout[5] * fontScale,
                height: layout[6],
                fontScale: fontScale,
                lineHeight: layout[4],
                distanceRange: fontScale * data.distanceField.distanceRange
            };
        }
        function resolveQuadBufferSize(value) {
            var quads = Math.floor(null != value ? value : CORE_DEFAULTS.quadBufferSize);
            return quads >= 1 == !1 ? 1 : quads > 16383 ? MAX_QUADS : quads;
        }
        function noop$1() {}
        function loadCompressedTexture(platform, url) {
            return platform.fetch(url, "arraybuffer").then(function(buffer) {
                if (buffer.byteLength < 16) throw new Error("Failed to load compressed texture from ".concat(url, ": file too small (").concat(buffer.byteLength, " bytes)"));
                var data, view = new DataView(buffer), magic = view.getUint32(0, !0);
                if (magic === PVR_MAGIC) data = function(view) {
                    var pixelFormat = view.getUint32(8, !0), format = PVR_TO_GL[pixelFormat];
                    if (void 0 === format) throw new Error("Unsupported PVR pixel format: 0x".concat(pixelFormat.toString(16)));
                    var h = view.getInt32(24, !0), w = view.getInt32(28, !0);
                    if (0 === w || 0 === h) throw new Error("Invalid PVR texture dimensions: ".concat(w, "x").concat(h));
                    var levels = view.getInt32(44, !0);
                    if (levels < 1) throw new Error("PVR texture has no mipmap levels");
                    var buffer = view.buffer, offset = 52 + view.getUint32(48, !0);
                    if (offset > buffer.byteLength) throw new Error("Invalid PVR file: metadata exceeds file size");
                    for (var block = blockInfoMap[format], mipmaps = [], i = 0; i < levels; i++) {
                        var lw = Math.max(1, w >> i), lh = Math.max(1, h >> i), size = pixelFormat <= 3 ? pvrtcMipSize(lw, lh, pixelFormat <= 1 ? 2 : 4) : Math.ceil(lw / block.width) * Math.ceil(lh / block.height) * block.bytes;
                        mipmaps.push(buffer.slice(offset, offset + size)), offset += size;
                    }
                    return {
                        blockInfo: block,
                        glInternalFormat: format,
                        mipmaps: mipmaps,
                        w: w,
                        h: h,
                        type: "pvr"
                    };
                }(view); else if (magic === ASTC_MAGIC) data = function(view) {
                    var blockX = view.getUint8(4), blockY = view.getUint8(5), w = readUint24(view, 7), h = readUint24(view, 10);
                    if (0 === w || 0 === h) throw new Error("Invalid ASTC texture dimensions: ".concat(w, "x").concat(h));
                    var expected = Math.ceil(w / blockX) * Math.ceil(h / blockY) * 16;
                    if (expected !== view.byteLength - 16) throw new Error("Invalid ASTC texture data size: expected ".concat(expected, ", got ").concat(view.byteLength - 16));
                    var format = ASTC_TO_GL["".concat(blockX, "x").concat(blockY)];
                    if (void 0 === format) throw new Error("Unsupported ASTC block size: ".concat(blockX, "x").concat(blockY));
                    return {
                        blockInfo: blockInfoMap[format],
                        glInternalFormat: format,
                        mipmaps: [ view.buffer.slice(16) ],
                        w: w,
                        h: h,
                        type: "astc"
                    };
                }(view); else {
                    for (var i = 0; i < KTX_IDENTIFIER.length; i++) if (view.getUint8(i) !== KTX_IDENTIFIER[i]) throw new Error("Failed to load compressed texture from ".concat(url, ": unrecognized format"));
                    data = function(view) {
                        var endianness = view.getUint32(12, !0), little = 67305985 === endianness;
                        if (!1 === little && 16909060 !== endianness) throw new Error("Invalid KTX endianness value");
                        var glType = view.getUint32(16, little), glFormat = view.getUint32(24, little);
                        if (0 !== glType || 0 !== glFormat) throw new Error("KTX texture is not compressed (glType: ".concat(glType, ", glFormat: ").concat(glFormat, ")"));
                        var format = view.getUint32(28, little);
                        if (void 0 === blockInfoMap[format]) throw new Error("Unsupported KTX compressed texture format: 0x".concat(format.toString(16)));
                        var w = view.getUint32(36, little), h = view.getUint32(40, little);
                        if (0 === w || 0 === h) throw new Error("Invalid KTX texture dimensions: ".concat(w, "x").concat(h));
                        var levels = view.getUint32(56, little);
                        if (0 === levels) throw new Error("KTX texture has no mipmap levels");
                        var buffer = view.buffer, offset = 64 + view.getUint32(60, little);
                        if (offset > view.byteLength) throw new Error("Invalid KTX file: key/value data exceeds file size");
                        for (var mipmaps = [], i = 0; i < levels; i++) {
                            var size = view.getUint32(offset, little);
                            offset += 4, mipmaps.push(buffer.slice(offset, offset + size)), (offset += size) % 4 != 0 && (offset += 4 - offset % 4);
                        }
                        return {
                            blockInfo: blockInfoMap[format],
                            glInternalFormat: format,
                            mipmaps: mipmaps,
                            w: w,
                            h: h,
                            type: "ktx"
                        };
                    }(view);
                }
                return {
                    data: data,
                    w: data.w,
                    h: data.h,
                    premultiply: !1
                };
            });
        }
        function readUint24(view, offset) {
            return view.getUint8(offset) + (view.getUint8(offset + 1) << 8) + (view.getUint8(offset + 2) << 16);
        }
        function pvrtcMipSize(w, h, bpp) {
            return Math.max(w, 2 === bpp ? 16 : 8) * Math.max(h, 8) * bpp / 8;
        }
        function enableCompressedFormat(ctx, format) {
            var names = function(format) {
                return format >= 37808 && format <= 37845 ? EXT_ASTC : format >= 33776 && format <= 33779 ? EXT_S3TC : 36196 === format ? EXT_ETC1 : format >= 37492 && format <= 37497 ? EXT_ETC : format >= 35840 && format <= 35843 ? EXT_PVRTC : EXT_NONE;
            }(format);
            if (0 === names.length) return !0;
            for (var i = 0; i < names.length; i++) if (null !== ctx.extension(names[i])) return !0;
            return !1;
        }
        function mipmapped(data) {
            var block = data.blockInfo;
            return data.mipmaps.length > 1 && data.mipmaps.length === function(w, h) {
                if (w & w - 1 || h & h - 1) return 0;
                for (var levels = 1, size = Math.max(w, h); size > 1; size >>= 1) levels++;
                return levels;
            }(data.w, data.h) && ("ktx" !== data.type || data.w % block.width === 0 && data.h % block.height === 0);
        }
        function decodes(decode) {
            var pending;
            try {
                pending = decode();
            } catch (e) {
                return Promise.resolve(!1);
            }
            return pending.then(function(bitmap) {
                var _bitmap$close2;
                return null == (_bitmap$close2 = bitmap.close) || _bitmap$close2.call(bitmap), !0;
            }).catch(function() {
                return !1;
            });
        }
        function detectPremultiplyAlphaHonored(platform) {
            var decoded;
            try {
                var blob = new Blob([ STRAIGHT_ALPHA_TEST_PNG ], {
                    type: "image/png"
                });
                decoded = platform.createImageBitmap(blob, {
                    premultiplyAlpha: "premultiply",
                    colorSpaceConversion: "none",
                    imageOrientation: "none"
                });
            } catch (e) {
                return Promise.resolve(null);
            }
            return decoded.then(function(bitmap) {
                return function(platform, bitmap) {
                    var canvas = platform.createCanvas();
                    canvas.width = 1, canvas.height = 1;
                    var gl = canvas.getContext("webgl");
                    null === gl && (gl = canvas.getContext("experimental-webgl"));
                    if (null === gl) {
                        var _bitmap$close3;
                        return null == (_bitmap$close3 = bitmap.close) || _bitmap$close3.call(bitmap), null;
                    }
                    try {
                        var tex = gl.createTexture();
                        gl.bindTexture(gl.TEXTURE_2D, tex), gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), 
                        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, !1), gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, bitmap);
                        var fb = gl.createFramebuffer();
                        gl.bindFramebuffer(gl.FRAMEBUFFER, fb), gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
                        var result = null;
                        if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) === gl.FRAMEBUFFER_COMPLETE) {
                            var px = new Uint8Array(4);
                            gl.readPixels(0, 0, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, px), result = px[0] < 192;
                        }
                        return gl.deleteFramebuffer(fb), gl.deleteTexture(tex), result;
                    } finally {
                        var _bitmap$close4, _gl$getExtension;
                        null == (_bitmap$close4 = bitmap.close) || _bitmap$close4.call(bitmap), null == (_gl$getExtension = gl.getExtension("WEBGL_lose_context")) || _gl$getExtension.loseContext();
                    }
                }(platform, bitmap);
            }, function() {
                return null;
            });
        }
        function decodeImageBlob(create, createThis, blob, premultiplyAlpha, sx, sy, sw, sh, supportsOptions, supportsFull, premultiplyHonored) {
            var withAlphaChannel = null != premultiplyAlpha ? premultiplyAlpha : -1 !== blob.type.indexOf("image/png"), useGlPremultiply = !0 === withAlphaChannel && !1 === premultiplyHonored, options = {
                premultiplyAlpha: !0 === withAlphaChannel && !1 === useGlPremultiply ? "premultiply" : "none",
                colorSpaceConversion: "none",
                imageOrientation: "none"
            };
            return (!0 === supportsFull && null !== sw && null !== sh ? create.call(createThis, blob, null === sx ? 0 : sx, null === sy ? 0 : sy, sw, sh, options) : !1 === supportsOptions && !1 === supportsFull ? create.call(createThis, blob) : create.call(createThis, blob, options)).then(function(data) {
                return {
                    data: data,
                    premultiplyAlpha: useGlPremultiply
                };
            });
        }
        function createImageWorker(decode) {
            var supportsOptions = !1, supportsFull = !1, premultiplyHonored = !1, timeout = 0, scope = self;
            scope.onmessage = function(event) {
                var request = event.data;
                if (!0 === request.init) return supportsOptions = request.supportsOptions, supportsFull = request.supportsFull, 
                premultiplyHonored = request.premultiplyHonored, void (timeout = request.timeout);
                var id = request.id, src = request.src;
                try {
                    var xhr = new XMLHttpRequest;
                    xhr.open("GET", src, !0), xhr.responseType = "blob", xhr.timeout = timeout, xhr.onload = function() {
                        200 === xhr.status || 0 === xhr.status ? decode(createImageBitmap, void 0, xhr.response, request.premultiplyAlpha, request.sx, request.sy, request.sw, request.sh, supportsOptions, supportsFull, premultiplyHonored).then(function(result) {
                            scope.postMessage({
                                id: id,
                                data: result
                            }, [ result.data ]);
                        }, function(error) {
                            scope.postMessage({
                                id: id,
                                error: error.message
                            });
                        }) : scope.postMessage({
                            id: id,
                            error: "Image loading failed. HTTP status code: " + xhr.status + ". URL: " + src
                        });
                    }, xhr.onerror = function() {
                        scope.postMessage({
                            id: id,
                            error: "Network error occurred while trying to fetch the image."
                        });
                    }, xhr.ontimeout = function() {
                        scope.postMessage({
                            id: id,
                            error: "Image loading timed out after " + timeout + " ms. URL: " + src
                        });
                    }, xhr.send();
                } catch (e) {
                    scope.postMessage({
                        id: id,
                        error: String(e instanceof Error ? e.message : e)
                    });
                }
            };
        }
        function imageWorkerSource() {
            return "(".concat(createImageWorker.toString(), ")(").concat(decodeImageBlob.toString(), ")").replace('"use strict";', "");
        }
        function failAfterTimeout(platform, img, reject, message) {
            var timeout = {
                img: img,
                reject: reject
            };
            return platform.setTimeout(function() {
                !function(timeout, message) {
                    var img = timeout.img, reject = timeout.reject;
                    if (null === img || null === reject) return;
                    settled(timeout), img.onload = null, img.onerror = null, img.src = "", reject(new Error(message));
                }(timeout, message);
            }, REQUEST_TIMEOUT), timeout;
        }
        function settled(timeout) {
            null !== timeout && (timeout.img = null, timeout.reject = null);
        }
        function firstSize(a, b, c, last) {
            return null !== a && a > 0 ? a : null !== b && b > 0 ? b : c > 0 ? c : last;
        }
        function freeCanvas(canvas) {
            canvas.width = 0, canvas.height = 0;
        }
        function loadImage(ctx, props) {
            var _props$premultiplyAlp, src = props.src, premultiply = null === (_props$premultiplyAlp = props.premultiplyAlpha) || void 0 === _props$premultiplyAlp || _props$premultiplyAlp;
            if (null == src || "" === src) return Promise.reject(new TextureError(TextureErrorCode.TEXTURE_DATA_NULL));
            if ("function" == typeof src) {
                var data = src();
                return null === data ? Promise.reject(new TextureError(TextureErrorCode.TEXTURE_DATA_NULL)) : Promise.resolve(imageData(data, premultiply));
            }
            return "string" != typeof src ? "undefined" != typeof Blob && src instanceof Blob ? decodeBlob(ctx, src, props, premultiply) : Promise.resolve(imageData(src, premultiply)) : function(ctx, src, props, premultiply) {
                var _props$type, _props$w, _props$h, _props$sx, _props$sy, _props$sw, _props$sh, base64 = isBase64Image(src), url = !0 === base64 ? src : convertUrlToAbsolute(src), type = null !== (_props$type = props.type) && void 0 !== _props$type ? _props$type : null;
                if ("regular" !== type && ("svg" === type || !0 === function(url) {
                    return /\.(svg)(\?.*)?$/.test(url);
                }(src))) return function(ctx, url, width, height, sx, sy, sw, sh) {
                    var platform = ctx.platform, img = platform.createImage(), remote = !1 === isBase64Image(url);
                    return !0 === remote && (img.crossOrigin = "anonymous"), new Promise(function(resolve, reject) {
                        var timeout = !0 === remote ? failAfterTimeout(platform, img, reject, "SVG loading timed out: ".concat(url)) : null;
                        img.onload = function() {
                            settled(timeout), resolve();
                        }, img.onerror = function() {
                            settled(timeout), reject(new Error("SVG loading failed: ".concat(url)));
                        }, img.src = url;
                    }).then(function() {
                        var targetW = firstSize(width, sw, img.naturalWidth, img.width), targetH = firstSize(height, sh, img.naturalHeight, img.height), ratio = ctx.pixelRatio > 1 ? ctx.pixelRatio : 1, w = Math.max(1, Math.ceil(targetW * ratio)), h = Math.max(1, Math.ceil(targetH * ratio)), canvas = platform.createCanvas();
                        canvas.width = w, canvas.height = h;
                        var c2d = canvas.getContext("2d");
                        null !== sw && null !== sh ? c2d.drawImage(img, null != sx ? sx : 0, null != sy ? sy : 0, sw, sh, 0, 0, w, h) : c2d.drawImage(img, 0, 0, w, h);
                        var imageData = function() {
                            var data = c2d.getImageData(0, 0, w, h);
                            return freeCanvas(canvas), {
                                data: data,
                                w: w,
                                h: h,
                                premultiply: !0
                            };
                        };
                        return null === ctx.support ? imageData() : platform.createImageBitmap(canvas).then(function(bitmap) {
                            return freeCanvas(canvas), {
                                data: bitmap,
                                w: w,
                                h: h,
                                premultiply: !1
                            };
                        }, imageData);
                    });
                }(ctx, url, null !== (_props$w = props.w) && void 0 !== _props$w ? _props$w : null, null !== (_props$h = props.h) && void 0 !== _props$h ? _props$h : null, null !== (_props$sx = props.sx) && void 0 !== _props$sx ? _props$sx : null, null !== (_props$sy = props.sy) && void 0 !== _props$sy ? _props$sy : null, null !== (_props$sw = props.sw) && void 0 !== _props$sw ? _props$sw : null, null !== (_props$sh = props.sh) && void 0 !== _props$sh ? _props$sh : null);
                if ("regular" !== type && ("compressed" === type || !0 === function(src) {
                    return /\.(ktx|pvr)$/.test(src);
                }(src))) return loadCompressedTexture(ctx.platform, url);
                if (null === ctx.support) return loadElement(ctx.platform, url, premultiply);
                var _props$sx2, _props$sy2, _props$sw2, _props$sh2, worker = ctx.worker;
                return !1 === base64 && null !== worker ? worker.getImage(url, premultiply, null !== (_props$sx2 = props.sx) && void 0 !== _props$sx2 ? _props$sx2 : null, null !== (_props$sy2 = props.sy) && void 0 !== _props$sy2 ? _props$sy2 : null, null !== (_props$sw2 = props.sw) && void 0 !== _props$sw2 ? _props$sw2 : null, null !== (_props$sh2 = props.sh) && void 0 !== _props$sh2 ? _props$sh2 : null).then(toLoaded, function(error) {
                    if (!0 === worker.crashed) return fetchAndDecode(ctx, url, props, premultiply);
                    throw error;
                }) : !0 === base64 ? decodeBlob(ctx, function(dataURI) {
                    for (var match = (dataURI = dataURI.replace(/^data:/, "")).match(/image\/[^;]+/), type = null === match ? "" : match[0], byteCharacters = atob(dataURI.replace(/^[^,]+,/, "")), bytes = new Uint8Array(byteCharacters.length), i = 0; i < bytes.length; i++) bytes[i] = byteCharacters.charCodeAt(i);
                    return new Blob([ bytes ], {
                        type: type
                    });
                }(src), props, premultiply) : fetchAndDecode(ctx, url, props, premultiply);
            }(ctx, src, props, premultiply);
        }
        function fetchAndDecode(ctx, url, props, premultiply) {
            return ctx.platform.fetch(url, "blob").then(function(b) {
                return decodeBlob(ctx, b, props, premultiply);
            });
        }
        function decodeBlob(ctx, blob, props, premultiply) {
            var _props$sx3, _props$sy3, _props$sw3, _props$sh3, support = ctx.support;
            if (null === support) return loadElement(ctx.platform, blob, premultiply);
            var platform = ctx.platform;
            return decodeImageBlob(platform.createImageBitmap, platform, blob, premultiply, null !== (_props$sx3 = props.sx) && void 0 !== _props$sx3 ? _props$sx3 : null, null !== (_props$sy3 = props.sy) && void 0 !== _props$sy3 ? _props$sy3 : null, null !== (_props$sw3 = props.sw) && void 0 !== _props$sw3 ? _props$sw3 : null, null !== (_props$sh3 = props.sh) && void 0 !== _props$sh3 ? _props$sh3 : null, support.options, support.full, support.premultiplyHonored).then(toLoaded);
        }
        function loadElement(platform, src, premultiply) {
            var img = platform.createImage(), remote = "string" == typeof src && !1 === isBase64Image(src);
            !0 === remote && (img.crossOrigin = "anonymous");
            var name = "string" == typeof src ? src : "a Blob", loading = new Promise(function(resolve, reject) {
                var timeout = !0 === remote ? failAfterTimeout(platform, img, reject, "Image loading timed out for ".concat(name)) : null;
                img.onload = function() {
                    settled(timeout), resolve();
                }, img.onerror = function() {
                    settled(timeout), reject(new Error("Image loading failed for ".concat(name)));
                };
            }), objectUrl = null;
            return "string" == typeof src ? img.src = src : (objectUrl = URL.createObjectURL(src), 
            img.src = objectUrl), loading.then(function() {
                return revoke(objectUrl), {
                    data: img,
                    w: img.width,
                    h: img.height,
                    premultiply: premultiply
                };
            }, function(error) {
                throw revoke(objectUrl), error;
            });
        }
        function revoke(objectUrl) {
            null !== objectUrl && URL.revokeObjectURL(objectUrl);
        }
        function warnOnce(warning, message) {
            0 === (warned & warning) && (warned |= warning, console.warn(message));
        }
        function tryNoise(w, h) {
            try {
                return function(w, h) {
                    for (var size = w * h * 4, pixels = new Uint8ClampedArray(size), i = 0; i < size; i += 4) {
                        var v = Math.floor(256 * Math.random());
                        pixels[i] = v, pixels[i + 1] = v, pixels[i + 2] = v, pixels[i + 3] = 255;
                    }
                    return new ImageData(pixels, w, h);
                }(w, h);
            } catch (error) {
                return error instanceof Error ? error : new Error(String(error));
            }
        }
        function reportListenerError(handleLoopError, platform, error) {
            try {
                handleLoopError(error);
            } catch (rethrown) {
                platform.setTimeout(function() {
                    throw rethrown;
                }, 0);
            }
        }
        function _getContextId(count) {
            var num = String(count), len = num.length - 1;
            return sharedConfig.context.id + (len ? String.fromCharCode(96 + len) : "") + num;
        }
        function setHydrateContext(context) {
            sharedConfig.context = context;
        }
        function createRoot(fn, detachedOwner) {
            var listener = Listener, owner = Owner, unowned = 0 === fn.length, current = void 0 === detachedOwner ? owner : detachedOwner, root = unowned ? UNOWNED : {
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
            Owner = root, Listener = null;
            try {
                return runUpdates(updateFn, !0);
            } finally {
                Listener = listener, Owner = owner;
            }
        }
        function createSignal(value, options) {
            var s = {
                value: value,
                observers: null,
                observerSlots: null,
                comparator: (options = options ? Object.assign({}, signalOptions, options) : signalOptions).equals || void 0
            };
            return [ readSignal.bind(s), function(value) {
                return "function" == typeof value && (value = Transition && Transition.running && Transition.sources.has(s) ? value(s.tValue) : value(s.value)), 
                writeSignal(s, value);
            } ];
        }
        function createComputed(fn, value, options) {
            var c = createComputation(fn, value, !0, STALE);
            Scheduler && Transition && Transition.running ? Updates.push(c) : updateComputation(c);
        }
        function createRenderEffect(fn, value, options) {
            var c = createComputation(fn, value, !1, STALE);
            Scheduler && Transition && Transition.running ? Updates.push(c) : updateComputation(c);
        }
        function createEffect(fn, value, options) {
            runEffects = runUserEffects;
            var c = createComputation(fn, value, !1, STALE), s = SuspenseContext && useContext(SuspenseContext);
            s && (c.suspense = s), options && options.render || (c.user = !0), Effects ? Effects.push(c) : updateComputation(c);
        }
        function createMemo(fn, value, options) {
            options = options ? Object.assign({}, signalOptions, options) : signalOptions;
            var c = createComputation(fn, value, !0, 0);
            return c.observers = null, c.observerSlots = null, c.comparator = options.equals || void 0, 
            Scheduler && Transition && Transition.running ? (c.tState = STALE, Updates.push(c)) : updateComputation(c), 
            readSignal.bind(c);
        }
        function untrack(fn) {
            if (!ExternalSourceConfig && null === Listener) return fn();
            var listener = Listener;
            Listener = null;
            try {
                return ExternalSourceConfig ? ExternalSourceConfig.untrack(fn) : fn();
            } finally {
                Listener = listener;
            }
        }
        function onCleanup(fn) {
            return null === Owner || (null === Owner.cleanups ? Owner.cleanups = [ fn ] : Owner.cleanups.push(fn)), 
            fn;
        }
        function getOwner() {
            return Owner;
        }
        function runWithOwner(o, fn) {
            var prev = Owner, prevListener = Listener;
            Owner = o, Listener = null;
            try {
                return runUpdates(fn, !0);
            } catch (err) {
                handleError(err);
            } finally {
                Owner = prev, Listener = prevListener;
            }
        }
        function startTransition(fn) {
            if (Transition && Transition.running) return fn(), Transition.done;
            var l = Listener, o = Owner;
            return Promise.resolve().then(function() {
                var t;
                return Listener = l, Owner = o, (Scheduler || SuspenseContext) && ((t = Transition || (Transition = {
                    sources: new Set,
                    effects: [],
                    promises: new Set,
                    disposed: new Set,
                    queue: new Set,
                    running: !0
                })).done || (t.done = new Promise(function(res) {
                    return t.resolve = res;
                })), t.running = !0), runUpdates(fn, !1), Listener = Owner = null, t ? t.done : void 0;
            });
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
            return Owner && Owner.context && void 0 !== (value = Owner.context[context.id]) ? value : context.defaultValue;
        }
        function children(fn) {
            var children = createMemo(fn), memo = createMemo(function() {
                return resolveChildren(children());
            });
            return memo.toArray = function() {
                var c = memo();
                return Array.isArray(c) ? c : null != c ? [ c ] : [];
            }, memo;
        }
        function getSuspenseContext() {
            return SuspenseContext || (SuspenseContext = createContext());
        }
        function readSignal() {
            var _this = this, runningTransition = Transition && Transition.running;
            if (this.sources && (runningTransition ? this.tState : this.state)) if ((runningTransition ? this.tState : this.state) === STALE) updateComputation(this); else {
                var updates = Updates;
                Updates = null, runUpdates(function() {
                    return lookUpstream(_this);
                }, !1), Updates = updates;
            }
            if (Listener) {
                var sSlot = this.observers ? this.observers.length : 0;
                Listener.sources ? (Listener.sources.push(this), Listener.sourceSlots.push(sSlot)) : (Listener.sources = [ this ], 
                Listener.sourceSlots = [ sSlot ]), this.observers ? (this.observers.push(Listener), 
                this.observerSlots.push(Listener.sources.length - 1)) : (this.observers = [ Listener ], 
                this.observerSlots = [ Listener.sources.length - 1 ]);
            }
            return runningTransition && Transition.sources.has(this) ? this.tValue : this.value;
        }
        function writeSignal(node, value, isComp) {
            var current = Transition && Transition.running && Transition.sources.has(node) ? node.tValue : node.value;
            if (!node.comparator || !node.comparator(current, value)) {
                if (Transition) {
                    var TransitionRunning = Transition.running;
                    (TransitionRunning || !isComp && Transition.sources.has(node)) && (Transition.sources.add(node), 
                    node.tValue = value), TransitionRunning || (node.value = value);
                } else node.value = value;
                node.observers && node.observers.length && runUpdates(function() {
                    for (var i = 0; i < node.observers.length; i += 1) {
                        var o = node.observers[i], _TransitionRunning = Transition && Transition.running;
                        _TransitionRunning && Transition.disposed.has(o) || ((_TransitionRunning ? o.tState : o.state) || (o.pure ? Updates.push(o) : Effects.push(o), 
                        o.observers && markDownstream(o)), _TransitionRunning ? o.tState = STALE : o.state = STALE);
                    }
                    if (Updates.length > 1e6) throw Updates = [], new Error;
                }, !1);
            }
            return value;
        }
        function updateComputation(node) {
            if (node.fn) {
                cleanNode(node);
                var time = ExecCount;
                runComputation(node, Transition && Transition.running && Transition.sources.has(node) ? node.tValue : node.value, time), 
                Transition && !Transition.running && Transition.sources.has(node) && queueMicrotask(function() {
                    runUpdates(function() {
                        Transition && (Transition.running = !0), Listener = Owner = node, runComputation(node, node.tValue, time), 
                        Listener = Owner = null;
                    }, !1);
                });
            }
        }
        function runComputation(node, value, time) {
            var nextValue, owner = Owner, listener = Listener;
            Listener = Owner = node;
            try {
                nextValue = node.fn(value);
            } catch (err) {
                return node.pure && (Transition && Transition.running ? (node.tState = STALE, node.tOwned && node.tOwned.forEach(cleanNode), 
                node.tOwned = void 0) : (node.state = STALE, node.owned && node.owned.forEach(cleanNode), 
                node.owned = null)), node.updatedAt = time + 1, handleError(err);
            } finally {
                Listener = listener, Owner = owner;
            }
            (!node.updatedAt || node.updatedAt <= time) && (null != node.updatedAt && "observers" in node ? writeSignal(node, nextValue, !0) : Transition && Transition.running && node.pure ? (Transition.sources.add(node), 
            node.tValue = nextValue) : node.value = nextValue, node.updatedAt = time);
        }
        function createComputation(fn, init, pure) {
            var state = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : STALE, c = {
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
            if (Transition && Transition.running && (c.state = 0, c.tState = state), null === Owner || Owner !== UNOWNED && (Transition && Transition.running && Owner.pure ? Owner.tOwned ? Owner.tOwned.push(c) : Owner.tOwned = [ c ] : Owner.owned ? Owner.owned.push(c) : Owner.owned = [ c ]), 
            ExternalSourceConfig && c.fn) {
                var _createSignal8 = _slicedToArray(createSignal(void 0, {
                    equals: !1
                }), 2), track = _createSignal8[0], trigger = _createSignal8[1], ordinary = ExternalSourceConfig.factory(c.fn, trigger);
                onCleanup(function() {
                    return ordinary.dispose();
                });
                var inTransition = ExternalSourceConfig.factory(c.fn, function() {
                    return startTransition(trigger).then(function() {
                        return inTransition.dispose();
                    });
                });
                c.fn = function(x) {
                    return track(), Transition && Transition.running ? inTransition.track(x) : ordinary.track(x);
                };
            }
            return c;
        }
        function runTop(node) {
            var runningTransition = Transition && Transition.running;
            if (0 !== (runningTransition ? node.tState : node.state)) {
                if ((runningTransition ? node.tState : node.state) === PENDING) return lookUpstream(node);
                if (node.suspense && untrack(node.suspense.inFallback)) return node.suspense.effects.push(node);
                for (var ancestors = [ node ]; (node = node.owner) && (!node.updatedAt || node.updatedAt < ExecCount); ) {
                    if (runningTransition && Transition.disposed.has(node)) return;
                    (runningTransition ? node.tState : node.state) && ancestors.push(node);
                }
                for (var i = ancestors.length - 1; i >= 0; i--) {
                    if (node = ancestors[i], runningTransition) for (var top = node, prev = ancestors[i + 1]; (top = top.owner) && top !== prev; ) if (Transition.disposed.has(top)) return;
                    if ((runningTransition ? node.tState : node.state) === STALE) updateComputation(node); else if ((runningTransition ? node.tState : node.state) === PENDING) {
                        var updates = Updates;
                        Updates = null, runUpdates(function() {
                            return lookUpstream(node, ancestors[0]);
                        }, !1), Updates = updates;
                    }
                }
            }
        }
        function runUpdates(fn, init) {
            if (Updates) return fn();
            var wait = !1;
            init || (Updates = []), Effects ? wait = !0 : Effects = [], ExecCount++;
            try {
                var res = fn();
                return function(wait) {
                    Updates && (Scheduler && Transition && Transition.running ? function(queue) {
                        for (var _loop3 = function() {
                            var item = queue[i], tasks = Transition.queue;
                            tasks.has(item) || (tasks.add(item), Scheduler(function() {
                                tasks.delete(item), runUpdates(function() {
                                    Transition.running = !0, runTop(item);
                                }, !1), Transition && (Transition.running = !1);
                            }));
                        }, i = 0; i < queue.length; i++) _loop3();
                    }(Updates) : runQueue(Updates), Updates = null);
                    if (wait) return;
                    var res;
                    if (Transition) if (Transition.promises.size || Transition.queue.size) {
                        if (Transition.running) return Transition.running = !1, Transition.effects.push.apply(Transition.effects, Effects), 
                        Effects = null, void setTransPending(!0);
                    } else {
                        var sources = Transition.sources, disposed = Transition.disposed;
                        Effects.push.apply(Effects, Transition.effects), res = Transition.resolve;
                        var _step4, _iterator4 = _createForOfIteratorHelper(Effects);
                        try {
                            for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
                                var _e = _step4.value;
                                "tState" in _e && (_e.state = _e.tState), delete _e.tState;
                            }
                        } catch (err) {
                            _iterator4.e(err);
                        } finally {
                            _iterator4.f();
                        }
                        Transition = null, runUpdates(function() {
                            var _step5, _iterator5 = _createForOfIteratorHelper(disposed);
                            try {
                                for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
                                    cleanNode(_step5.value);
                                }
                            } catch (err) {
                                _iterator5.e(err);
                            } finally {
                                _iterator5.f();
                            }
                            var _step6, _iterator6 = _createForOfIteratorHelper(sources);
                            try {
                                for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
                                    var v = _step6.value;
                                    if (v.value = v.tValue, v.owned) for (var i = 0, len = v.owned.length; i < len; i++) cleanNode(v.owned[i]);
                                    v.tOwned && (v.owned = v.tOwned), delete v.tValue, delete v.tOwned, v.tState = 0;
                                }
                            } catch (err) {
                                _iterator6.e(err);
                            } finally {
                                _iterator6.f();
                            }
                            setTransPending(!1);
                        }, !1);
                    }
                    var e = Effects;
                    Effects = null, e.length && runUpdates(function() {
                        return runEffects(e);
                    }, !1);
                    res && res();
                }(wait), res;
            } catch (err) {
                wait || (Effects = null), Updates = null, handleError(err);
            }
        }
        function runQueue(queue) {
            for (var i = 0; i < queue.length; i++) runTop(queue[i]);
        }
        function runUserEffects(queue) {
            var i, userLength = 0;
            for (i = 0; i < queue.length; i++) {
                var e = queue[i];
                e.user ? queue[userLength++] = e : runTop(e);
            }
            if (sharedConfig.context) {
                var _sharedConfig$effects;
                if (sharedConfig.count) return sharedConfig.effects || (sharedConfig.effects = []), 
                void (_sharedConfig$effects = sharedConfig.effects).push.apply(_sharedConfig$effects, _toConsumableArray(queue.slice(0, userLength)));
                setHydrateContext();
            }
            for (!sharedConfig.effects || !sharedConfig.done && sharedConfig.count || (queue = [].concat(_toConsumableArray(sharedConfig.effects), _toConsumableArray(queue)), 
            userLength += sharedConfig.effects.length, delete sharedConfig.effects), i = 0; i < userLength; i++) runTop(queue[i]);
        }
        function lookUpstream(node, ignore) {
            var runningTransition = Transition && Transition.running;
            runningTransition ? node.tState = 0 : node.state = 0;
            for (var i = 0; i < node.sources.length; i += 1) {
                var source = node.sources[i];
                if (source.sources) {
                    var state = runningTransition ? source.tState : source.state;
                    state === STALE ? source !== ignore && (!source.updatedAt || source.updatedAt < ExecCount) && runTop(source) : state === PENDING && lookUpstream(source, ignore);
                }
            }
        }
        function markDownstream(node) {
            for (var runningTransition = Transition && Transition.running, i = 0; i < node.observers.length; i += 1) {
                var o = node.observers[i];
                (runningTransition ? o.tState : o.state) || (runningTransition ? o.tState = PENDING : o.state = PENDING, 
                o.pure ? Updates.push(o) : Effects.push(o), o.observers && markDownstream(o));
            }
        }
        function cleanNode(node) {
            var i;
            if (node.sources) for (;node.sources.length; ) {
                var source = node.sources.pop(), index = node.sourceSlots.pop(), obs = source.observers;
                if (obs && obs.length) {
                    var n = obs.pop(), s = source.observerSlots.pop();
                    index < obs.length && (n.sourceSlots[s] = index, obs[index] = n, source.observerSlots[index] = s);
                }
            }
            if (node.tOwned) {
                for (i = node.tOwned.length - 1; i >= 0; i--) cleanNode(node.tOwned[i]);
                delete node.tOwned;
            }
            if (Transition && Transition.running && node.pure) reset(node, !0); else if (node.owned) {
                for (i = node.owned.length - 1; i >= 0; i--) cleanNode(node.owned[i]);
                node.owned = null;
            }
            if (node.cleanups) {
                for (i = node.cleanups.length - 1; i >= 0; i--) node.cleanups[i]();
                node.cleanups = null;
            }
            Transition && Transition.running ? node.tState = 0 : node.state = 0;
        }
        function reset(node, top) {
            if (top || (node.tState = 0, Transition.disposed.add(node)), node.owned) for (var i = 0; i < node.owned.length; i++) reset(node.owned[i]);
        }
        function castError(err) {
            return err instanceof Error ? err : new Error("string" == typeof err ? err : "Unknown error", {
                cause: err
            });
        }
        function runErrors(err, fns, owner) {
            try {
                var _step7, _iterator7 = _createForOfIteratorHelper(fns);
                try {
                    for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
                        (0, _step7.value)(err);
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
            var owner = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Owner, fns = ERROR && owner && owner.context && owner.context[ERROR], error = castError(err);
            if (!fns) throw error;
            Effects ? Effects.push({
                fn: function() {
                    runErrors(error, fns, owner);
                },
                state: STALE
            }) : runErrors(error, fns, owner);
        }
        function resolveChildren(children) {
            if ("function" == typeof children && !children.length) return resolveChildren(children());
            if (Array.isArray(children)) {
                for (var results = [], i = 0; i < children.length; i++) {
                    var result = resolveChildren(children[i]);
                    Array.isArray(result) ? results.push.apply(results, result) : results.push(result);
                }
                return results;
            }
            return children;
        }
        function createProvider(id, options) {
            return function(props) {
                var res;
                return createRenderEffect(function() {
                    return res = untrack(function() {
                        return Owner.context = _objectSpread(_objectSpread({}, Owner.context), {}, _defineProperty({}, id, props.value)), 
                        children(function() {
                            return props.children;
                        });
                    });
                }, void 0), res;
            };
        }
        function dispose(d) {
            for (var i = 0; i < d.length; i++) d[i]();
        }
        function createComponent$1(Comp, props) {
            if (hydrationEnabled && sharedConfig.context) {
                var c = sharedConfig.context;
                setHydrateContext(_objectSpread(_objectSpread({}, sharedConfig.context), {}, {
                    id: sharedConfig.getNextContextId(),
                    count: 0
                }));
                var r = untrack(function() {
                    return Comp(props || {});
                });
                return setHydrateContext(c), r;
            }
            return untrack(function() {
                return Comp(props || {});
            });
        }
        function trueFn() {
            return !0;
        }
        function resolveSource(s) {
            return (s = "function" == typeof s ? s() : s) ? s : {};
        }
        function resolveSources() {
            for (var i = 0, length = this.length; i < length; ++i) {
                var v = this[i]();
                if (void 0 !== v) return v;
            }
        }
        function mergeProps() {
            for (var _len = arguments.length, sources = new Array(_len), _key2 = 0; _key2 < _len; _key2++) sources[_key2] = arguments[_key2];
            for (var proxy = !1, i = 0; i < sources.length; i++) {
                var s = sources[i];
                proxy = proxy || !!s && $PROXY in s, sources[i] = "function" == typeof s ? (proxy = !0, 
                createMemo(s)) : s;
            }
            if (SUPPORTS_PROXY && proxy) return new Proxy({
                get: function(property) {
                    for (var _i1 = sources.length - 1; _i1 >= 0; _i1--) {
                        var v = resolveSource(sources[_i1])[property];
                        if (void 0 !== v) return v;
                    }
                },
                has: function(property) {
                    for (var _i10 = sources.length - 1; _i10 >= 0; _i10--) if (property in resolveSource(sources[_i10])) return !0;
                    return !1;
                },
                keys: function() {
                    for (var keys = [], _i11 = 0; _i11 < sources.length; _i11++) keys.push.apply(keys, _toConsumableArray(Object.keys(resolveSource(sources[_i11]))));
                    return _toConsumableArray(new Set(keys));
                }
            }, propTraps);
            for (var sourcesMap = {}, defined = Object.create(null), _i12 = sources.length - 1; _i12 >= 0; _i12--) {
                var source = sources[_i12];
                if (source) for (var sourceKeys = Object.getOwnPropertyNames(source), _loop4 = function() {
                    var key = sourceKeys[_i13];
                    if ("__proto__" === key || "constructor" === key) return 1;
                    var desc = Object.getOwnPropertyDescriptor(source, key);
                    if (defined[key]) {
                        var _sources = sourcesMap[key];
                        _sources && (desc.get ? _sources.push(desc.get.bind(source)) : void 0 !== desc.value && _sources.push(function() {
                            return desc.value;
                        }));
                    } else defined[key] = desc.get ? {
                        enumerable: !0,
                        configurable: !0,
                        get: resolveSources.bind(sourcesMap[key] = [ desc.get.bind(source) ])
                    } : void 0 !== desc.value ? desc : void 0;
                }, _i13 = sourceKeys.length - 1; _i13 >= 0; _i13--) _loop4();
            }
            for (var target = {}, definedKeys = Object.keys(defined), _i14 = definedKeys.length - 1; _i14 >= 0; _i14--) {
                var key = definedKeys[_i14], desc = defined[key];
                desc && desc.get ? Object.defineProperty(target, key, desc) : target[key] = desc ? desc.value : void 0;
            }
            return target;
        }
        function isArray(item) {
            return Array.isArray(item);
        }
        function isString(item) {
            return "string" == typeof item;
        }
        function isINode(node) {
            return "destroy" in node && "function" == typeof node.destroy;
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
        function isFocused(el) {
            var _el$states;
            return null == el || null == (_el$states = el.states) ? void 0 : _el$states.has(Config.focusStateKey);
        }
        function buildGradientStops(colors, stops) {
            if (!Array.isArray(colors) || 0 === colors.length) return "";
            var positions = [];
            if (Array.isArray(stops) && stops.length === colors.length) {
                var _step1, _iterator1 = _createForOfIteratorHelper(stops);
                try {
                    for (_iterator1.s(); !(_step1 = _iterator1.n()).done; ) {
                        var v = _step1.value;
                        if ("number" == typeof v && isFinite(v)) {
                            var pct = v <= 1 ? 100 * v : v;
                            pct < 0 && (pct = 0), pct > 100 && (pct = 100), positions.push(pct);
                        } else positions.push(0);
                    }
                } catch (err) {
                    _iterator1.e(err);
                } finally {
                    _iterator1.f();
                }
            } else for (var lastIndex = colors.length - 1, i = 0; i < colors.length; i++) positions.push(0 === lastIndex ? 0 : i / lastIndex * 100);
            if (positions.length !== colors.length) for (;positions.length < colors.length; ) positions.push(0 === positions.length ? 0 : 100);
            return colors.map(function(color, idx) {
                return "".concat(colorToRgba(color), " ").concat(positions[idx].toFixed(2), "%");
            }).join(", ");
        }
        function applySubTextureScaling(node, img, srcPos) {
            var _node$props$srcWidth, _node$props$srcHeight;
            if (srcPos) {
                var regionW = null !== (_node$props$srcWidth = node.props.srcWidth) && void 0 !== _node$props$srcWidth ? _node$props$srcWidth : srcPos.w, regionH = null !== (_node$props$srcHeight = node.props.srcHeight) && void 0 !== _node$props$srcHeight ? _node$props$srcHeight : srcPos.h;
                if (regionW && regionH) {
                    var targetW = node.props.w || regionW, targetH = node.props.h || regionH, naturalW = img.naturalWidth || regionW, naturalH = img.naturalHeight || regionH, scaleX = targetW / regionW, scaleY = targetH / regionH;
                    img.style.width = naturalW + "px", img.style.height = naturalH + "px", img.style.objectFit = "none", 
                    img.style.objectPosition = "0 0", img.style.transformOrigin = "0 0";
                    var translateX = Math.round(-srcPos.x * scaleX), translateY = Math.round(-srcPos.y * scaleY);
                    if (img.style.transform = "translate(".concat(translateX, "px, ").concat(translateY, "px) scale(").concat(scaleX, ", ").concat(scaleY, ")"), 
                    img.style.setProperty("-webkit-transform", img.style.transform), node.divBg) {
                        var styleEl = node.divBg.style;
                        if (styleEl.maskImage || styleEl.webkitMaskImage || /mask-image:/.test(node.divBg.getAttribute("style") || "")) {
                            var _styleEl$setProperty, _styleEl$setProperty2, _styleEl$setProperty3, _styleEl$setProperty4;
                            img.style.display = "none";
                            var maskW = Math.round(naturalW * scaleX), maskH = Math.round(naturalH * scaleY), maskPosX = translateX, maskPosY = translateY;
                            null == (_styleEl$setProperty = styleEl.setProperty) || _styleEl$setProperty.call(styleEl, "mask-size", "".concat(maskW, "px ").concat(maskH, "px")), 
                            null == (_styleEl$setProperty2 = styleEl.setProperty) || _styleEl$setProperty2.call(styleEl, "mask-position", "".concat(maskPosX, "px ").concat(maskPosY, "px")), 
                            null == (_styleEl$setProperty3 = styleEl.setProperty) || _styleEl$setProperty3.call(styleEl, "-webkit-mask-size", "".concat(maskW, "px ").concat(maskH, "px")), 
                            null == (_styleEl$setProperty4 = styleEl.setProperty) || _styleEl$setProperty4.call(styleEl, "-webkit-mask-position", "".concat(maskPosX, "px ").concat(maskPosY, "px"));
                        }
                    }
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
                return progress < .5 ? 2 * progress * progress : (4 - 2 * progress) * progress - 1;
            }
        }
        function interpolate(start, end, t) {
            return start + (end - start) * t;
        }
        function interpolateProp(name, start, end, t) {
            return name.startsWith("color") ? function(start, end, t) {
                return (interpolate(start >> 24 & 255, end >> 24 & 255, t) << 24 | interpolate(start >> 16 & 255, end >> 16 & 255, t) << 16 | interpolate(start >> 8 & 255, end >> 8 & 255, t) << 8 | interpolate(255 & start, 255 & end, t)) >>> 0;
            }(start, end, t) : interpolate(start, end, t);
        }
        function isRenderStateInBounds(state) {
            return 4 === state || 8 === state;
        }
        function nodeHasTextureSource(node) {
            var _node$props$texture, textureType = null == (_node$props$texture = node.props.texture) ? void 0 : _node$props$texture.type;
            return !!node.props.src || textureType === TextureType.image || textureType === TextureType.subTexture;
        }
        function computeRenderStateForNode(node) {
            var _stageRoot$props$w, _stageRoot$props$h, _node$props$w, _node$props$h, stageRoot = node.stage.root;
            if (!stageRoot || stageRoot === node) return null;
            var rootWidth = null !== (_stageRoot$props$w = stageRoot.props.w) && void 0 !== _stageRoot$props$w ? _stageRoot$props$w : 0, rootHeight = null !== (_stageRoot$props$h = stageRoot.props.h) && void 0 !== _stageRoot$props$h ? _stageRoot$props$h : 0;
            if (rootWidth <= 0 || rootHeight <= 0) return 4;
            var rootLeft = stageRoot.absX, rootTop = stageRoot.absY, rootRight = rootLeft + rootWidth, rootBottom = rootTop + rootHeight, margin = function(margin) {
                if (null == margin) return [ 0, 0, 0, 0 ];
                if (!1 === Array.isArray(margin)) {
                    var m = margin || 0;
                    return [ m, m, m, m ];
                }
                var arr = margin;
                return [ arr[0] || 0, arr[1] || 0, arr[2] || 0, arr[3] || 0 ];
            }(node.stage.renderer.boundsMargin), width = null !== (_node$props$w = node.props.w) && void 0 !== _node$props$w ? _node$props$w : 0, height = null !== (_node$props$h = node.props.h) && void 0 !== _node$props$h ? _node$props$h : 0, left = node.absX, top = node.absY, right = left + width, bottom = top + height, expandedLeft = rootLeft - margin[3], expandedTop = rootTop - margin[0], expandedRight = rootRight + margin[1], expandedBottom = rootBottom + margin[2];
            return right >= expandedLeft && left <= expandedRight && bottom >= expandedTop && top <= expandedBottom ? right >= rootLeft && left <= rootRight && bottom >= rootTop && top <= rootBottom ? 8 : 4 : 2;
        }
        function requestAnimationUpdate() {
            !animationFrameRequested && animationTasks.length > 0 && (animationFrameRequested = !0, 
            requestAnimationFrame(updateAnimations));
        }
        function updateAnimations(time) {
            animationFrameRequested = !1;
            for (var i = 0; i < animationTasks.length; i++) {
                var task = animationTasks[i];
                if (null == task.pausedTime) {
                    var elapsed = time - task.timeStart;
                    if (elapsed < task.settings.delay) requestAnimationUpdate(); else {
                        var activeTime = elapsed - task.settings.delay;
                        if (activeTime >= task.settings.duration) task.settings.loop || task.iteration < task.settings.repeat - 1 ? (task.iteration++, 
                        task.timeStart = time - task.settings.delay, requestAnimationUpdate()) : (Object.assign(task.node.props, task.propsEnd), 
                        task.node.boundsDirty = !0, task.node.markChildrenBoundsDirty(), updateNodeStyles(task.node), 
                        task.stop(), i--); else {
                            var t = activeTime / task.settings.duration;
                            for (var prop in t = applyEasing(task.settings.easing, t), task.propsEnd) {
                                var start = task.propsStart[prop], end = task.propsEnd[prop];
                                task.node.props[prop] = interpolateProp(prop, start, end, t);
                            }
                            updateNodeStyles(task.node);
                        }
                    }
                }
            }
            requestAnimationUpdate();
        }
        function animate(props, settings) {
            return new AnimationController(this, props, settings);
        }
        function updateNodeParent(node) {
            var _node$div$parentNode, parent = node.props.parent;
            parent instanceof DOMNode ? elMap.get(parent).appendChild(node.div) : null == (_node$div$parentNode = node.div.parentNode) || _node$div$parentNode.removeChild(node.div);
        }
        function buildTransformCSS(props) {
            var transforms = [], x = props.x, y = props.y, hasMountX = null != props.mountX && 0 !== props.mountX, hasMountY = null != props.mountY && 0 !== props.mountY;
            return 0 !== x && transforms.push("translateX(".concat(x, "px)")), hasMountX && transforms.push("translateX(".concat(100 * -props.mountX, "%)")), 
            0 !== y && transforms.push("translateY(".concat(y, "px)")), hasMountY && transforms.push("translateY(".concat(100 * -props.mountY, "%)")), 
            0 !== props.rotation && transforms.push("rotate(".concat(props.rotation, "rad)")), 
            1 !== props.scale && null != props.scale ? transforms.push("scale(".concat(props.scale, ")")) : (1 !== props.scaleX && transforms.push("scaleX(".concat(props.scaleX, ")")), 
            1 !== props.scaleY && transforms.push("scaleY(".concat(props.scaleY, ")"))), transforms.join(" ");
        }
        function updateTransformOnly(node) {
            var transform = buildTransformCSS(node.props), s = node.div.style;
            transform.length > 0 ? s.transform = "".concat(transform) : s.transform = "", updateRenderStateIfNeeded(node);
        }
        function updateRenderStateIfNeeded(node) {
            if (node instanceof DOMNode && node !== node.stage.root) {
                var hasTextureSrc = nodeHasTextureSource(node);
                if (hasTextureSrc && node.boundsDirty) {
                    var next = computeRenderStateForNode(node);
                    null != next && node.updateRenderState(next), node.boundsDirty = !1;
                } else hasTextureSrc || (node.boundsDirty = !1);
            }
        }
        function applyLegacyObjectFit(node, img, srcPos) {
            var _node$props$textureOp, resizeMode = null == (_node$props$textureOp = node.props.textureOptions) ? void 0 : _node$props$textureOp.resizeMode;
            !function(node, img, resizeMode, clipX, clipY, srcPos, supportsObjectFit, supportsObjectPosition) {
                if (!supportsObjectFit || !supportsObjectPosition) {
                    var containerW = node.props.w || img.naturalWidth, containerH = node.props.h || img.naturalHeight, naturalW = img.naturalWidth || 1, naturalH = img.naturalHeight || 1, drawW = naturalW, drawH = naturalH;
                    switch ((null == resizeMode ? void 0 : resizeMode.type) || (srcPos ? "none" : "fill")) {
                      case "cover":
                        var scale = Math.max(containerW / naturalW, containerH / naturalH);
                        drawW = naturalW * scale, drawH = naturalH * scale;
                        break;

                      case "contain":
                        var _scale = Math.min(containerW / naturalW, containerH / naturalH);
                        drawW = naturalW * _scale, drawH = naturalH * _scale;
                        break;

                      case "fill":
                        drawW = containerW, drawH = containerH;
                    }
                    var offsetX = (containerW - drawW) * clipX, offsetY = (containerH - drawH) * clipY;
                    srcPos && (offsetX = -srcPos.x, offsetY = -srcPos.y);
                    var styleParts = [ "position: absolute", "width: ".concat(Math.round(drawW), "px"), "height: ".concat(Math.round(drawH), "px"), "left: ".concat(Math.round(offsetX), "px"), "top: ".concat(Math.round(offsetY), "px"), "display: block", "pointer-events: none" ];
                    img.style.removeProperty("object-fit"), img.style.removeProperty("object-position"), 
                    "none" === (null == resizeMode ? void 0 : resizeMode.type) && (styleParts[1] = "width: ".concat(naturalW, "px"), 
                    styleParts[2] = "height: ".concat(naturalH, "px")), img.setAttribute("style", styleParts.join("; ") + ";");
                }
            }(node, img, resizeMode, "contain" !== (null == resizeMode ? void 0 : resizeMode.type) && (null == resizeMode ? void 0 : resizeMode.clipX) ? null == resizeMode ? void 0 : resizeMode.clipX : .5, "contain" !== (null == resizeMode ? void 0 : resizeMode.type) && (null == resizeMode ? void 0 : resizeMode.clipY) ? null == resizeMode ? void 0 : resizeMode.clipY : .5, srcPos, supportsObjectFit, supportsObjectPosition);
        }
        function updateNodeStyles(node) {
            var props = node.props, style = "position: absolute; z-index: ".concat(props.zIndex, ";");
            1 !== props.alpha && (style += "opacity: ".concat(props.alpha, ";")), props.clipping && (style += "overflow: hidden;");
            var transform = buildTransformCSS(props);
            if (transform.length > 0 && (style += "transform: ".concat(transform, ";")), node instanceof DOMText) {
                var textProps = node.props;
                null != textProps.color && 0 !== textProps.color && (style += "color: ".concat(colorToRgba(textProps.color), ";")), 
                textProps.fontFamily && (style += "font-family: ".concat(textProps.fontFamily, ";")), 
                textProps.fontSize && (style += "font-size: ".concat(textProps.fontSize, "px;")), 
                "normal" !== textProps.fontStyle && (style += "font-style: ".concat(textProps.fontStyle, ";")), 
                "normal" !== textProps.fontWeight && (style += "font-weight: ".concat(textProps.fontWeight, ";")), 
                textProps.fontStretch && "normal" !== textProps.fontStretch && (style += "font-stretch: ".concat(textProps.fontStretch, ";")), 
                textProps.lineHeight && (style += "line-height: ".concat(textProps.lineHeight, "px;")), 
                textProps.letterSpacing && (style += "letter-spacing: ".concat(textProps.letterSpacing, "px;")), 
                "left" !== textProps.textAlign && (style += "text-align: ".concat(textProps.textAlign, ";"));
                var maxLines = textProps.maxLines || 1 / 0;
                switch (textProps.contain) {
                  case "width":
                    textProps.maxWidth && textProps.maxWidth > 0 ? ("center" === node.textAlign ? style += "width: ".concat(textProps.maxWidth, "px;") : style += "max-width: ".concat(textProps.maxWidth, "px;"), 
                    style += "overflow: hidden;") : style += "width: 100%;";
                    break;

                  case "both":
                    var lineHeight = function(props) {
                        return props.lineHeight || Config.fontSettings.lineHeight || 1.2 * props.fontSize;
                    }(textProps), widthConstraint = textProps.maxWidth && textProps.maxWidth > 0 ? "".concat(textProps.maxWidth, "px") : "100%", height = (textProps.maxHeight && textProps.maxHeight > 0 ? textProps.maxHeight : props.h) || 0;
                    if (height > 0) {
                        var maxLinesByHeight = Math.max(1, Math.floor(height / lineHeight));
                        maxLines = Math.min(maxLines, maxLinesByHeight), height = Math.max(lineHeight, maxLines * lineHeight);
                    } else height = (maxLines = Number.isFinite(maxLines) ? Math.max(1, maxLines) : 1) * lineHeight;
                    style += "width: ".concat(widthConstraint, "; height: ").concat(height, "px; overflow: hidden;");
                    break;

                  case "none":
                    style += "width: -webkit-max-content;", style += "width: max-content;";
                }
                if (style += "white-space: pre-wrap;", maxLines !== 1 / 0 && (style += "display: -webkit-box;\n        overflow: hidden;\n        -webkit-line-clamp: ".concat(maxLines, ";\n        line-clamp: ").concat(maxLines, ";\n        -webkit-box-orient: vertical;")), 
                null != textProps.offsetY && 0 !== textProps.offsetY && (style += "margin-top: ".concat(textProps.offsetY, "px;")), 
                textProps.wordBreak) {
                    var wb = textProps.wordBreak;
                    "normal" !== wb && (style += "break-all" === wb ? "word-break: break-all;" : "keep-all" === wb ? "word-break: keep-all;" : "break-word" === wb ? "word-wrap: break-word; overflow-wrap: break-word;" : "overflow-wrap: break-word;");
                }
            } else {
                var _props$shader;
                0 !== props.w && (style += "width: ".concat(props.w < 0 ? 0 : props.w, "px;")), 
                0 !== props.h && (style += "height: ".concat(props.h, "px;"));
                var vGradient = props.colorBottom !== props.colorTop ? "linear-gradient(to bottom, ".concat(colorToRgba(props.colorTop), ", ").concat(colorToRgba(props.colorBottom), ")") : null, hGradient = props.colorLeft !== props.colorRight ? "linear-gradient(to right, ".concat(colorToRgba(props.colorLeft), ", ").concat(colorToRgba(props.colorRight), ")") : null, gradient = vGradient && hGradient ? "".concat(vGradient, ", ").concat(hGradient) : vGradient || hGradient, srcImg = null, srcPos = null, rawImgSrc = null;
                if (null != props.texture && props.texture.type === TextureType.subTexture) {
                    var texture = props.texture;
                    srcPos = texture.props, rawImgSrc = texture.props.texture.props.src;
                } else "string" == typeof props.src && (rawImgSrc = props.src);
                rawImgSrc && (srcImg = "url(".concat(rawImgSrc, ")"));
                var bgStyle = "", borderStyle = "", radiusStyle = "", maskStyle = "", needsBackgroundLayer = !1, imgStyle = "", hasDivBgTint = !1, hasTint = !1;
                if (rawImgSrc) {
                    var _props$textureOptions;
                    (hasTint = 4294967295 !== props.color && 0 !== props.color) ? (bgStyle += "background-color: ".concat(colorToRgba(props.color), ";"), 
                    srcImg && (maskStyle += "mask-image: ".concat(srcImg, ";"), maskStyle += null !== srcPos ? "mask-position: -".concat(srcPos.x, "px -").concat(srcPos.y, "px;") : "mask-size: 100% 100%;", 
                    hasDivBgTint = !0)) : (gradient && (maskStyle += "mask-image: ".concat(gradient, ";")), 
                    0 !== props.placeholderColor && (bgStyle += "background-color: ".concat(colorToRgba(props.placeholderColor), ";")));
                    var imgStyleParts = [ "position: absolute", "top: 0", "left: 0", "right: 0", "bottom: 0", "display: block", "pointer-events: none", "opacity: ".concat(node.imageLoading ? 0 : 1), "transition: opacity 100ms linear" ];
                    if (null == (_props$textureOptions = props.textureOptions.resizeMode) ? void 0 : _props$textureOptions.type) {
                        var _resizeMode$clipX, _resizeMode$clipY, resizeMode = props.textureOptions.resizeMode;
                        imgStyleParts.push("width: 100%"), imgStyleParts.push("height: 100%"), imgStyleParts.push("object-fit: ".concat(resizeMode.type));
                        var clipX = null !== (_resizeMode$clipX = resizeMode.clipX) && void 0 !== _resizeMode$clipX ? _resizeMode$clipX : .5, clipY = null !== (_resizeMode$clipY = resizeMode.clipY) && void 0 !== _resizeMode$clipY ? _resizeMode$clipY : .5;
                        imgStyleParts.push("object-position: ".concat(100 * clipX, "% ").concat(100 * clipY, "%"));
                    } else null !== srcPos ? (imgStyleParts.push("width: auto"), imgStyleParts.push("height: auto"), 
                    imgStyleParts.push("object-fit: none"), imgStyleParts.push("object-position: -".concat(srcPos.x, "px -").concat(srcPos.y, "px"))) : props.w && !props.h ? (imgStyleParts.push("width: 100%"), 
                    imgStyleParts.push("height: auto")) : props.h && !props.w ? (imgStyleParts.push("width: auto"), 
                    imgStyleParts.push("height: 100%")) : (imgStyleParts.push("width: 100%"), imgStyleParts.push("height: 100%"), 
                    imgStyleParts.push("object-fit: fill"));
                    hasTint && (supportsMixBlendMode ? imgStyleParts.push("mix-blend-mode: multiply") : imgStyleParts.push("opacity: 1")), 
                    imgStyle = imgStyleParts.join("; ") + ";";
                } else gradient ? (bgStyle += "background-image: ".concat(gradient, ";"), bgStyle += "background-repeat: no-repeat;", 
                bgStyle += "background-size: 100% 100%;") : 0 !== props.color && (bgStyle += "background-color: ".concat(colorToRgba(props.color), ";"));
                if (null != (null == (_props$shader = props.shader) ? void 0 : _props$shader.props)) {
                    var _shaderProps$borderG, _shaderProps$borderA, shaderProps = props.shader.props, borderWidth = shaderProps["border-w"], borderColor = shaderProps["border-color"], borderGap = null !== (_shaderProps$borderG = shaderProps["border-gap"]) && void 0 !== _shaderProps$borderG ? _shaderProps$borderG : 0, borderAlign = null !== (_shaderProps$borderA = shaderProps["border-align"]) && void 0 !== _shaderProps$borderA ? _shaderProps$borderA : "inside", radius = shaderProps.radius, borderWidthIsNumber = "number" == typeof borderWidth, borderWidthIsArray = Array.isArray(borderWidth);
                    if ((borderWidthIsNumber && 0 !== borderWidth || borderWidthIsArray && borderWidth.some(function(w) {
                        return "number" == typeof w && 0 !== w;
                    })) && "number" == typeof borderColor && 0 !== borderColor) {
                        var rgbaColor = colorToRgba(borderColor);
                        if (borderWidthIsNumber) {
                            var insideWidth = 0, outsideWidth = 0;
                            "inside" === borderAlign ? insideWidth = borderWidth : "center" === borderAlign ? (insideWidth = borderWidth / 2, 
                            outsideWidth = borderWidth / 2) : outsideWidth = borderWidth, outsideWidth += borderGap, 
                            (insideWidth -= borderGap) < 0 && (outsideWidth += insideWidth, insideWidth = 0), 
                            outsideWidth < 0 && (insideWidth += outsideWidth, outsideWidth = 0);
                            var shadows = [];
                            outsideWidth > 0 && shadows.push("0 0 0 ".concat(outsideWidth, "px ").concat(rgbaColor)), 
                            insideWidth > 0 && shadows.push("inset 0 0 0 ".concat(insideWidth, "px ").concat(rgbaColor)), 
                            shadows.length > 0 && (borderStyle += "box-shadow: ".concat(shadows.join(", "), ";"));
                        } else if (borderWidthIsArray) for (var _shaderProps$borderT, _shaderProps$borderR, _shaderProps$borderB, _shaderProps$borderL, widths = [ null !== (_shaderProps$borderT = shaderProps["border-top"]) && void 0 !== _shaderProps$borderT ? _shaderProps$borderT : borderWidth[0], null !== (_shaderProps$borderR = shaderProps["border-right"]) && void 0 !== _shaderProps$borderR ? _shaderProps$borderR : borderWidth[1], null !== (_shaderProps$borderB = shaderProps["border-bottom"]) && void 0 !== _shaderProps$borderB ? _shaderProps$borderB : borderWidth[2], null !== (_shaderProps$borderL = shaderProps["border-left"]) && void 0 !== _shaderProps$borderL ? _shaderProps$borderL : borderWidth[3] ], sides = [ "top", "right", "bottom", "left" ], i = 0; i < sides.length; i++) {
                            var width = widths[i];
                            "number" == typeof width && 0 !== width && (borderStyle += "border-".concat(sides[i], ": ").concat(width, "px solid ").concat(rgbaColor, ";"));
                        }
                    }
                    if ("number" == typeof radius && radius > 0 ? radiusStyle += "border-radius: ".concat(radius, "px;") : Array.isArray(radius) && 4 === radius.length && (radiusStyle += "border-radius: ".concat(radius[0], "px ").concat(radius[1], "px ").concat(radius[2], "px ").concat(radius[3], "px;")), 
                    "radial" in shaderProps) {
                        var rg = shaderProps.radial, colors = Array.isArray(null == rg ? void 0 : rg.colors) ? rg.colors : [], stops = Array.isArray(null == rg ? void 0 : rg.stops) ? rg.stops : void 0, pivot = Array.isArray(null == rg ? void 0 : rg.pivot) ? rg.pivot : [ .5, .5 ], _width = "number" == typeof (null == rg ? void 0 : rg.w) ? rg.w : props.w || 0, _height = "number" == typeof (null == rg ? void 0 : rg.h) ? rg.h : _width;
                        if (colors.length > 0) {
                            var gradientStops = buildGradientStops(colors, stops);
                            if (gradientStops) if (1 === colors.length) srcImg || gradient ? maskStyle += "mask-image: linear-gradient(".concat(gradientStops, ");") : bgStyle += "background-color: ".concat(colorToRgba(colors[0]), ";"); else {
                                var _pivot$, _pivot$2, isEllipse = _width > 0 && _height > 0 && _width !== _height, pivotX = 100 * (null !== (_pivot$ = pivot[0]) && void 0 !== _pivot$ ? _pivot$ : .5), pivotY = 100 * (null !== (_pivot$2 = pivot[1]) && void 0 !== _pivot$2 ? _pivot$2 : .5), sizePart = "";
                                sizePart = _width > 0 && _height > 0 ? isEllipse || _width !== _height ? "".concat(Math.round(_width), "px ").concat(Math.round(_height), "px") : "".concat(Math.round(_width), "px") : "closest-side";
                                var radialGradient = "radial-gradient(".concat(isEllipse ? "ellipse" : "circle", " ").concat(sizePart, " at ").concat(pivotX.toFixed(2), "% ").concat(pivotY.toFixed(2), "%, ").concat(gradientStops, ")");
                                srcImg || gradient ? maskStyle += "mask-image: ".concat(radialGradient, ";") : (bgStyle += "background-image: ".concat(radialGradient, ";"), 
                                bgStyle += "background-repeat: no-repeat;", bgStyle += "background-size: 100% 100%;");
                            }
                        }
                    }
                    if ("linear" in shaderProps) {
                        var lg = shaderProps.linear, _colors = Array.isArray(null == lg ? void 0 : lg.colors) ? lg.colors : [], _stops = Array.isArray(null == lg ? void 0 : lg.stops) ? lg.stops : void 0, angleRad = "number" == typeof (null == lg ? void 0 : lg.angle) ? lg.angle : 0;
                        if (_colors.length > 0) {
                            var _gradientStops = buildGradientStops(_colors, _stops);
                            if (_gradientStops) if (1 === _colors.length) srcImg || gradient ? maskStyle += "mask-image: linear-gradient(".concat(_gradientStops, ");") : bgStyle += "background-color: ".concat(colorToRgba(_colors[0]), ";"); else {
                                var linearGradient = "linear-gradient(".concat((180 * (angleRad / Math.PI - 1)).toFixed(2), "deg, ").concat(_gradientStops, ")");
                                srcImg || gradient ? maskStyle += "mask-image: ".concat(linearGradient, ";") : (bgStyle += "background-image: ".concat(linearGradient, ";"), 
                                bgStyle += "background-repeat: no-repeat;", bgStyle += "background-size: 100% 100%;");
                            }
                        }
                    }
                }
                if ("" !== maskStyle && (!supportsStandardMask && supportsWebkitMask ? maskStyle = maskStyle.replace(/mask-/g, "-webkit-mask-") : supportsCssMask || (maskStyle = ""), 
                "" !== maskStyle && (needsBackgroundLayer = !0)), !needsBackgroundLayer && rawImgSrc && (needsBackgroundLayer = hasTint || !!gradient || null !== srcPos || "" !== radiusStyle || "" !== bgStyle), 
                style += radiusStyle, needsBackgroundLayer) {
                    null == node.divBg ? (node.divBg = document.createElement("div"), node.div.insertBefore(node.divBg, node.div.firstChild)) : node.divBg.parentElement !== node.div && node.div.insertBefore(node.divBg, node.div.firstChild), 
                    null != rawImgSrc && null != srcPos && node.imgEl && node.imgEl.complete && node.imgEl.dataset.rawSrc === rawImgSrc && (node.imageLoading = !0);
                    var bgLayerStyle = "position: absolute; top:0; left:0; right:0; bottom:0; z-index: -1; pointer-events: none;";
                    null === srcPos && "" === radiusStyle || hasDivBgTint || (bgLayerStyle += "overflow: hidden;"), 
                    bgStyle && (bgLayerStyle += bgStyle), maskStyle && (bgLayerStyle += maskStyle), 
                    hasDivBgTint && null != srcPos && node.imageLoading && (bgLayerStyle += "opacity: 0;"), 
                    node.divBg.setAttribute("style", bgLayerStyle + radiusStyle), rawImgSrc ? (node.imgEl || (node.imgEl = document.createElement("img"), 
                    node.imgEl.alt = "", node.imgEl.setAttribute("aria-hidden", "true"), node.imgEl.setAttribute("loading", "lazy"), 
                    node.imgEl.removeAttribute("src"), node.imgEl.addEventListener("load", function() {
                        var payload = {
                            type: "texture",
                            dimensions: {
                                w: node.imgEl.naturalWidth,
                                h: node.imgEl.naturalHeight
                            }
                        };
                        node.imgEl.style.display = "", applySubTextureScaling(node, node.imgEl, node.lazyImageSubTextureProps), 
                        node.lazyImageSubTextureProps || applyLegacyObjectFit(node, node.imgEl, null), node.imgEl && (node.imageLoading = !1, 
                        node.imgEl.style.opacity = "1"), node.showBackgroundLayer(), node.emit("loaded", payload);
                    }), node.imgEl.addEventListener("error", function() {
                        var _node$imgEl;
                        node.imageLoading = !1, node.showBackgroundLayer(), node.imgEl && (node.imgEl.removeAttribute("src"), 
                        node.imgEl.style.display = "none", node.imgEl.removeAttribute("data-rawSrc"));
                        var failedSrc = (null == (_node$imgEl = node.imgEl) ? void 0 : _node$imgEl.dataset.pendingSrc) || node.lazyImagePendingSrc || "", payload = {
                            type: "texture",
                            error: new Error("Failed to load image: ".concat(failedSrc))
                        };
                        node.emit("failed", payload);
                    })), node.lazyImagePendingSrc = rawImgSrc, node.lazyImageSubTextureProps = srcPos, 
                    node.imgEl.dataset.pendingSrc = rawImgSrc, node.imgEl.parentElement !== node.divBg && node.divBg.appendChild(node.imgEl), 
                    node.imgEl.setAttribute("style", imgStyle + radiusStyle), hasDivBgTint && (node.imgEl.style.visibility = "hidden"), 
                    isRenderStateInBounds(node.renderState) ? node.applyPendingImageSrc() : node.imgEl.dataset.rawSrc || node.imgEl.removeAttribute("src"), 
                    srcPos && node.imgEl.complete && node.imgEl.dataset.rawSrc === rawImgSrc && (applySubTextureScaling(node, node.imgEl, srcPos), 
                    node.imageLoading && (node.imageLoading = !1, node.imgEl.style.opacity = "1", node.showBackgroundLayer())), 
                    srcPos || !node.imgEl.complete || supportsObjectFit && supportsObjectPosition || node.imgEl.dataset.rawSrc !== rawImgSrc || applyLegacyObjectFit(node, node.imgEl, srcPos)) : (node.lazyImagePendingSrc = null, 
                    node.lazyImageSubTextureProps = null, node.imgEl && (node.imgEl.remove(), node.imgEl = void 0));
                } else rawImgSrc ? (node.divBg && (node.divBg.remove(), node.divBg = void 0), null != srcPos && node.imgEl && node.imgEl.complete && node.imgEl.dataset.rawSrc === rawImgSrc && (node.imageLoading = !0), 
                node.imgEl || (node.imgEl = document.createElement("img"), node.imgEl.alt = "", 
                node.imgEl.setAttribute("aria-hidden", "true"), node.imgEl.setAttribute("loading", "lazy"), 
                node.imgEl.removeAttribute("src"), node.imgEl.addEventListener("load", function() {
                    var payload = {
                        type: "texture",
                        dimensions: {
                            w: node.imgEl.naturalWidth,
                            h: node.imgEl.naturalHeight
                        }
                    };
                    node.imgEl.style.display = "", applySubTextureScaling(node, node.imgEl, node.lazyImageSubTextureProps), 
                    node.lazyImageSubTextureProps || applyLegacyObjectFit(node, node.imgEl, null), node.imgEl && (node.imageLoading = !1, 
                    node.imgEl.style.opacity = "1"), node.emit("loaded", payload);
                }), node.imgEl.addEventListener("error", function() {
                    var _node$imgEl2;
                    node.imageLoading = !1, node.imgEl && (node.imgEl.removeAttribute("src"), node.imgEl.style.display = "none", 
                    node.imgEl.removeAttribute("data-rawSrc"));
                    var failedSrc = (null == (_node$imgEl2 = node.imgEl) ? void 0 : _node$imgEl2.dataset.pendingSrc) || node.lazyImagePendingSrc || "", payload = {
                        type: "texture",
                        error: new Error("Failed to load image: ".concat(failedSrc))
                    };
                    node.emit("failed", payload);
                })), node.lazyImagePendingSrc = rawImgSrc, node.lazyImageSubTextureProps = srcPos, 
                node.imgEl.dataset.pendingSrc = rawImgSrc, node.imgEl.parentElement !== node.div && node.div.appendChild(node.imgEl), 
                node.imgEl.setAttribute("style", imgStyle + radiusStyle), isRenderStateInBounds(node.renderState) ? node.applyPendingImageSrc() : node.imgEl.dataset.rawSrc || node.imgEl.removeAttribute("src"), 
                srcPos && node.imgEl.complete && node.imgEl.dataset.rawSrc === rawImgSrc && (applySubTextureScaling(node, node.imgEl, srcPos), 
                node.imageLoading && (node.imageLoading = !1, node.imgEl.style.opacity = "1")), 
                srcPos || !node.imgEl.complete || supportsObjectFit && supportsObjectPosition || node.imgEl.dataset.rawSrc !== rawImgSrc || applyLegacyObjectFit(node, node.imgEl, srcPos)) : (node.lazyImagePendingSrc = null, 
                node.lazyImageSubTextureProps = null, node.imgEl && (node.imgEl.remove(), node.imgEl = void 0), 
                node.divBg && (node.divBg.remove(), node.divBg = void 0), style += bgStyle);
                if (needsBackgroundLayer && "" !== maskStyle ? null == node.divBorder && (node.divBorder = document.createElement("div"), 
                node.div.appendChild(node.divBorder)) : node.divBorder && (node.divBorder.remove(), 
                node.divBorder = void 0), null == node.divBorder) style += borderStyle; else {
                    var borderLayerStyle = "position: absolute; top:0; left:0; right:0; bottom:0; z-index: -1; pointer-events: none;";
                    borderLayerStyle += borderStyle, node.divBorder.setAttribute("style", borderLayerStyle + radiusStyle);
                }
            }
            var newStyle = style.replace(/\s*\n\s*/g, " ");
            node._lastStyleStr !== newStyle && (node._lastStyleStr = newStyle, node.div.setAttribute("style", newStyle)), 
            updateRenderStateIfNeeded(node);
        }
        function getElSize(node) {
            for (var _Config$rendererOptio, _Config$rendererOptio2, rawRect = node.div.getBoundingClientRect(), dpr = null !== (_Config$rendererOptio = null == (_Config$rendererOptio2 = Config.rendererOptions) ? void 0 : _Config$rendererOptio2.deviceLogicalPixelRatio) && void 0 !== _Config$rendererOptio ? _Config$rendererOptio : 1, width = rawRect.width / dpr, height = rawRect.height / dpr; null != node.props.scale && 1 !== node.props.scale ? (width /= node.props.scale, 
            height /= node.props.scale) : (width /= node.props.scaleX, height /= node.props.scaleY), 
            node.parent instanceof DOMNode; ) node = node.parent;
            return {
                width: width,
                height: height
            };
        }
        function updateDOMTextSize(node) {
            var size, emitLoaded = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], dimensionsChanged = !1;
            switch (node.contain) {
              case "width":
                size = getElSize(node), node.props.w !== size.width && (node.w = size.width, dimensionsChanged = !0), 
                node.props.h !== size.height && (node.h = size.height, dimensionsChanged = !0);
                break;

              case "none":
                size = getElSize(node), node.props.h === size.height && node.props.w === size.width || (node.w = size.width, 
                node.h = size.height, dimensionsChanged = !0);
            }
            if (emitLoaded && (!node.loaded || dimensionsChanged)) {
                var payload = {
                    type: "text",
                    dimensions: {
                        w: node.w,
                        h: node.h
                    }
                };
                node.emit("loaded", payload), node.loaded = !0;
            }
        }
        function updateDOMTextMeasurements() {
            textNodesToMeasure.forEach(function(node) {
                return updateDOMTextSize(node);
            }), textNodesToMeasure.clear();
        }
        function syncContainTextNodeTracking(node) {
            !function(node) {
                return "width" === node.contain || "none" === node.contain;
            }(node) ? containTextNodes.delete(node) : containTextNodes.add(node);
        }
        function scheduleContainTextNodesMeasurement() {
            0 !== containTextNodes.size && (containTextNodes.forEach(function(node) {
                node.div.isConnected && textNodesToMeasure.add(node);
            }), textNodesToMeasure.size > 0 && setTimeout(updateDOMTextMeasurements));
        }
        function scheduleUpdateDOMTextMeasurement(node) {
            if (function() {
                if (!fontLoadingListenerSetup && "undefined" != typeof document && document.fonts) {
                    var fonts = document.fonts;
                    "function" == typeof fonts.addEventListener && fonts.addEventListener("loadingdone", scheduleContainTextNodesMeasurement), 
                    fontLoadingListenerSetup = !0;
                }
            }(), 0 === textNodesToMeasure.size) if ("undefined" != typeof document && "fonts" in document) {
                var fonts = document.fonts;
                "loaded" === fonts.status ? setTimeout(updateDOMTextMeasurements) : null != fonts.ready && "function" == typeof fonts.ready.then ? fonts.ready.then(updateDOMTextMeasurements) : setTimeout(updateDOMTextMeasurements, 500);
            } else setTimeout(updateDOMTextMeasurements, 500);
            textNodesToMeasure.add(node);
        }
        function updateNodeData(node) {
            var data = node.data;
            for (var key in data) {
                var keyValue = data[key];
                void 0 === keyValue ? node.div.removeAttribute("data-" + key) : node.div.setAttribute("data-" + key, String(keyValue));
            }
        }
        function resolveNodeDefaults(props) {
            var _props$color, _props$x, _props$y, _props$w, _props$h, _props$alpha, _props$ignoreParentAl, _props$autosize, _props$clipping, _props$colorTop, _props$colorBottom, _props$colorLeft, _props$colorRight, _ref, _ref2, _props$colorBl, _ref3, _ref4, _props$colorBr, _ref5, _ref6, _props$colorTl, _ref7, _ref8, _props$colorTr, _props$zIndex, _props$parent, _props$texture, _props$textureOptions2, _props$shader2, _props$src, _props$scale, _ref9, _props$scaleX, _ref10, _props$scaleY, _props$mount, _ref11, _props$mountX, _ref12, _props$mountY, _props$pivot, _ref13, _props$pivotX, _ref14, _props$pivotY, _props$rotation, _props$placeholderCol, color = null !== (_props$color = props.color) && void 0 !== _props$color ? _props$color : 0;
            return {
                x: null !== (_props$x = props.x) && void 0 !== _props$x ? _props$x : 0,
                y: null !== (_props$y = props.y) && void 0 !== _props$y ? _props$y : 0,
                w: null !== (_props$w = props.w) && void 0 !== _props$w ? _props$w : 0,
                h: null !== (_props$h = props.h) && void 0 !== _props$h ? _props$h : 0,
                alpha: null !== (_props$alpha = props.alpha) && void 0 !== _props$alpha ? _props$alpha : 1,
                ignoreParentAlpha: null !== (_props$ignoreParentAl = props.ignoreParentAlpha) && void 0 !== _props$ignoreParentAl && _props$ignoreParentAl,
                autosize: null !== (_props$autosize = props.autosize) && void 0 !== _props$autosize && _props$autosize,
                clipping: null !== (_props$clipping = props.clipping) && void 0 !== _props$clipping && _props$clipping,
                color: color,
                colorTop: null !== (_props$colorTop = props.colorTop) && void 0 !== _props$colorTop ? _props$colorTop : color,
                colorBottom: null !== (_props$colorBottom = props.colorBottom) && void 0 !== _props$colorBottom ? _props$colorBottom : color,
                colorLeft: null !== (_props$colorLeft = props.colorLeft) && void 0 !== _props$colorLeft ? _props$colorLeft : color,
                colorRight: null !== (_props$colorRight = props.colorRight) && void 0 !== _props$colorRight ? _props$colorRight : color,
                colorBl: null !== (_ref = null !== (_ref2 = null !== (_props$colorBl = props.colorBl) && void 0 !== _props$colorBl ? _props$colorBl : props.colorBottom) && void 0 !== _ref2 ? _ref2 : props.colorLeft) && void 0 !== _ref ? _ref : color,
                colorBr: null !== (_ref3 = null !== (_ref4 = null !== (_props$colorBr = props.colorBr) && void 0 !== _props$colorBr ? _props$colorBr : props.colorBottom) && void 0 !== _ref4 ? _ref4 : props.colorRight) && void 0 !== _ref3 ? _ref3 : color,
                colorTl: null !== (_ref5 = null !== (_ref6 = null !== (_props$colorTl = props.colorTl) && void 0 !== _props$colorTl ? _props$colorTl : props.colorTop) && void 0 !== _ref6 ? _ref6 : props.colorLeft) && void 0 !== _ref5 ? _ref5 : color,
                colorTr: null !== (_ref7 = null !== (_ref8 = null !== (_props$colorTr = props.colorTr) && void 0 !== _props$colorTr ? _props$colorTr : props.colorTop) && void 0 !== _ref8 ? _ref8 : props.colorRight) && void 0 !== _ref7 ? _ref7 : color,
                zIndex: null !== (_props$zIndex = props.zIndex) && void 0 !== _props$zIndex ? _props$zIndex : 0,
                parent: null !== (_props$parent = props.parent) && void 0 !== _props$parent ? _props$parent : null,
                texture: null !== (_props$texture = props.texture) && void 0 !== _props$texture ? _props$texture : null,
                textureOptions: null !== (_props$textureOptions2 = props.textureOptions) && void 0 !== _props$textureOptions2 ? _props$textureOptions2 : {},
                shader: null !== (_props$shader2 = props.shader) && void 0 !== _props$shader2 ? _props$shader2 : defaultShader,
                src: null !== (_props$src = props.src) && void 0 !== _props$src ? _props$src : null,
                srcHeight: props.srcHeight,
                srcWidth: props.srcWidth,
                srcX: props.srcX,
                srcY: props.srcY,
                scale: null !== (_props$scale = props.scale) && void 0 !== _props$scale ? _props$scale : null,
                scaleX: null !== (_ref9 = null !== (_props$scaleX = props.scaleX) && void 0 !== _props$scaleX ? _props$scaleX : props.scale) && void 0 !== _ref9 ? _ref9 : 1,
                scaleY: null !== (_ref10 = null !== (_props$scaleY = props.scaleY) && void 0 !== _props$scaleY ? _props$scaleY : props.scale) && void 0 !== _ref10 ? _ref10 : 1,
                mount: null !== (_props$mount = props.mount) && void 0 !== _props$mount ? _props$mount : 0,
                mountX: null !== (_ref11 = null !== (_props$mountX = props.mountX) && void 0 !== _props$mountX ? _props$mountX : props.mount) && void 0 !== _ref11 ? _ref11 : 0,
                mountY: null !== (_ref12 = null !== (_props$mountY = props.mountY) && void 0 !== _props$mountY ? _props$mountY : props.mount) && void 0 !== _ref12 ? _ref12 : 0,
                pivot: null !== (_props$pivot = props.pivot) && void 0 !== _props$pivot ? _props$pivot : .5,
                pivotX: null !== (_ref13 = null !== (_props$pivotX = props.pivotX) && void 0 !== _props$pivotX ? _props$pivotX : props.pivot) && void 0 !== _ref13 ? _ref13 : .5,
                pivotY: null !== (_ref14 = null !== (_props$pivotY = props.pivotY) && void 0 !== _props$pivotY ? _props$pivotY : props.pivot) && void 0 !== _ref14 ? _ref14 : .5,
                rotation: null !== (_props$rotation = props.rotation) && void 0 !== _props$rotation ? _props$rotation : 0,
                placeholderColor: null !== (_props$placeholderCol = props.placeholderColor) && void 0 !== _props$placeholderCol ? _props$placeholderCol : 0,
                data: {},
                imageType: props.imageType
            };
        }
        function updateRootPosition() {
            var _settings$deviceLogic, _settings$appHeight, _settings$appWidth, canvas = this.canvas, settings = this.settings, rect = canvas.getBoundingClientRect(), top = document.documentElement.scrollTop + rect.top, left = document.documentElement.scrollLeft + rect.left, dpr = null !== (_settings$deviceLogic = settings.deviceLogicalPixelRatio) && void 0 !== _settings$deviceLogic ? _settings$deviceLogic : 1, height = Math.ceil(null !== (_settings$appHeight = settings.appHeight) && void 0 !== _settings$appHeight ? _settings$appHeight : 1080 / dpr), width = Math.ceil(null !== (_settings$appWidth = settings.appWidth) && void 0 !== _settings$appWidth ? _settings$appWidth : 1920 / dpr);
            this.root.div.style.left = "".concat(left, "px"), this.root.div.style.top = "".concat(top, "px"), 
            this.root.div.style.width = "".concat(width, "px"), this.root.div.style.height = "".concat(height, "px"), 
            this.root.div.style.position = "absolute", this.root.div.style.transformOrigin = "0 0 0", 
            this.root.div.style.transform = "scale(".concat(dpr, ", ").concat(dpr, ")"), this.root.div.style.overflow = "hidden";
        }
        function loadFontToDom(font) {
            if ("undefined" != typeof document && "fonts" in document && "undefined" != typeof FontFace && font.fontUrl) for (var fontSet = document.fonts, names = Array.isArray(font.fontFamily) ? font.fontFamily : [ font.fontFamily ], i = 0; i < names.length; i++) {
                var _fontSet$add, fontFace = new FontFace(names[i], "url(".concat(font.fontUrl, ")"));
                null == (_fontSet$add = fontSet.add) || _fontSet$add.call(fontSet, fontFace), fontFace.load().then(scheduleContainTextNodesMeasurement).catch(function() {});
            }
        }
        function startLightningRenderer(options) {
            var rootId = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "app";
            return _export("x", renderer$1 = DOM_RENDERING && Config.domRendererEnabled ? new DOMRendererMain(options, rootId) : new Renderer(options, rootId)), 
            function() {
                if (0 === pendingFontLoads.length) return;
                for (var queued = pendingFontLoads.splice(0, pendingFontLoads.length), _loop6 = function() {
                    var pending = queued[i];
                    attachFonts(pending.fonts).then(function() {
                        return pending.resolve();
                    }, pending.reject);
                }, i = 0; i < queued.length; i++) _loop6();
            }(), renderer$1;
        }
        function attachFonts(fonts) {
            var enableDomRenderer = DOM_RENDERING && Config.domRendererEnabled;
            return Promise.all(fonts.map(function(font) {
                if (!enableDomRenderer && "type" in font && ("msdf" === font.type || "ssdf" === font.type)) return renderer$1.stage.loadFont("sdf", font);
                "fontUrl" in font && enableDomRenderer && loadFontToDom(font);
            }));
        }
        function _loadFonts() {
            return (_loadFonts = _asyncToGenerator(_regenerator().m(function _callee3(fonts) {
                var enableDomRenderer, deferred, i, font;
                return _regenerator().w(function(_context4) {
                    for (;;) switch (_context4.n) {
                      case 0:
                        if (void 0 === renderer$1) {
                            _context4.n = 2;
                            break;
                        }
                        return _context4.n = 1, attachFonts(fonts);

                      case 1:
                        return _context4.a(2);

                      case 2:
                        enableDomRenderer = DOM_RENDERING && Config.domRendererEnabled, deferred = [], i = 0;

                      case 3:
                        if (!(i < fonts.length)) {
                            _context4.n = 6;
                            break;
                        }
                        if (font = fonts[i], !enableDomRenderer) {
                            _context4.n = 4;
                            break;
                        }
                        return "fontUrl" in font && loadFontToDom(font), _context4.a(3, 5);

                      case 4:
                        prefetchFont(font), deferred.push(font);

                      case 5:
                        i++, _context4.n = 3;
                        break;

                      case 6:
                        if (0 !== deferred.length) {
                            _context4.n = 7;
                            break;
                        }
                        return _context4.a(2);

                      case 7:
                        return _context4.n = 8, new Promise(function(resolve, reject) {
                            pendingFontLoads.push({
                                fonts: deferred,
                                resolve: resolve,
                                reject: reject
                            });
                        });

                      case 8:
                        return _context4.a(2);
                    }
                }, _callee3);
            }))).apply(this, arguments);
        }
        function getArrayValue(val, index) {
            var _result, defaultValue = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            if (void 0 === val) return defaultValue;
            if ("number" == typeof val) return val;
            var len = val.length;
            return null !== (_result = 2 === len ? index % 2 == 0 ? val[0] : val[1] : 3 === len ? 0 === index ? val[0] : 2 === index ? val[2] : val[1] : val[index]) && void 0 !== _result ? _result : defaultValue;
        }
        function flexLayout_default(node) {
            var _node$paddingTop, _node$paddingRight, _node$paddingBottom, _node$paddingLeft, direction = node.flexDirection || "row", isRow = "row" === direction || "row-reverse" === direction, isReverse = "row-reverse" === direction || "column-reverse" === direction, dimension = isRow ? "width" : "height", crossDimension = isRow ? "height" : "width", nodePadding = node.padding, paddingTop = null !== (_node$paddingTop = node.paddingTop) && void 0 !== _node$paddingTop ? _node$paddingTop : getArrayValue(nodePadding, 0), paddingRight = null !== (_node$paddingRight = node.paddingRight) && void 0 !== _node$paddingRight ? _node$paddingRight : getArrayValue(nodePadding, 1), paddingBottom = null !== (_node$paddingBottom = node.paddingBottom) && void 0 !== _node$paddingBottom ? _node$paddingBottom : getArrayValue(nodePadding, 2), paddingLeft = null !== (_node$paddingLeft = node.paddingLeft) && void 0 !== _node$paddingLeft ? _node$paddingLeft : getArrayValue(nodePadding, 3), paddingStart = isRow ? paddingLeft : paddingTop, paddingEnd = isRow ? paddingRight : paddingBottom, paddingCrossStart = isRow ? paddingTop : paddingLeft, paddingCrossEnd = isRow ? paddingBottom : paddingRight, nodePaddingTotal = paddingStart + paddingEnd, minDimension = isRow ? "minWidth" : "minHeight", crossMinDimension = isRow ? "minHeight" : "minWidth", children = node.children, numChildren = children.length;
            if (0 === numChildren) return !1;
            for (var processableChildrenIndices = [], hasOrder = !1, totalFlexGrow = 0, totalFlexShrink = 0, i = 0; i < numChildren; i++) {
                var c = children[i];
                if (isElementText(c) && c.text && !c.width && !c.height) return !1;
                if (!isTextNode(c) && !1 !== c.flexItem) {
                    void 0 !== c.flexOrder && (hasOrder = !0);
                    var flexGrow = c.flexGrow;
                    void 0 !== flexGrow && flexGrow > 0 && (totalFlexGrow += flexGrow);
                    var flexShrink = c.flexShrink;
                    void 0 !== flexShrink && flexShrink > 0 && (totalFlexShrink += flexShrink), c[minDimension] && (c[dimension] || 0) < c[minDimension] && (c[dimension] = c[minDimension]), 
                    c[crossMinDimension] && (c[crossDimension] || 0) < c[crossMinDimension] && (c[crossDimension] = c[crossMinDimension]), 
                    processableChildrenIndices.push(i);
                }
            }
            hasOrder && processableChildrenIndices.sort(function(aIdx, bIdx) {
                var a = children[aIdx], b = children[bIdx];
                return (a.flexOrder || 0) - (b.flexOrder || 0);
            }), (isReverse || "rtl" === node.direction) && processableChildrenIndices.reverse();
            var numProcessedChildren = processableChildrenIndices.length;
            if (0 === numProcessedChildren) return !1;
            for (var prop = isRow ? "x" : "y", crossProp = isRow ? "y" : "x", containerSize = Math.max(node[dimension] || 0, node[minDimension] || 0, 0), containerCrossSize = Math.max(node[crossDimension] || 0, node[crossMinDimension] || 0, 0), isWrapReverse = "wrap-reverse" === node.flexWrap, gap = node.gap || 0, justify = node.justifyContent || "flexStart", align = node.alignItems || (node.flexWrap ? "flexStart" : void 0), containerUpdated = !1, childMainSizes = new Float32Array(numProcessedChildren), childMarginStarts = new Float32Array(numProcessedChildren), childMarginEnds = new Float32Array(numProcessedChildren), childTotalMainSizes = new Float32Array(numProcessedChildren), childCrossSizes = new Float32Array(numProcessedChildren), childMarginCrossStarts = new Float32Array(numProcessedChildren), childMarginCrossEnds = new Float32Array(numProcessedChildren), sumOfFlexBaseSizesWithMargins = 0, idx = 0; idx < numProcessedChildren; idx++) {
                var _c4 = children[processableChildrenIndices[idx]], marginArray = _c4.margin, flexBasis = _c4.flexBasis, isBasisAuto = void 0 === flexBasis || "auto" === flexBasis, computedBasis = isBasisAuto ? _c4[dimension] || 0 : flexBasis, baseMainSize = isBasisAuto ? computedBasis : Math.max(computedBasis, _c4[minDimension] || 0), marginStart = isRow ? _c4.marginLeft || getArrayValue(marginArray, 3) : _c4.marginTop || getArrayValue(marginArray, 0), marginEnd = isRow ? _c4.marginRight || getArrayValue(marginArray, 1) : _c4.marginBottom || getArrayValue(marginArray, 2), marginCrossStart = isRow ? _c4.marginTop || getArrayValue(marginArray, 0) : _c4.marginLeft || getArrayValue(marginArray, 3), marginCrossEnd = isRow ? _c4.marginBottom || getArrayValue(marginArray, 2) : _c4.marginRight || getArrayValue(marginArray, 1);
                childMainSizes[idx] = baseMainSize, childMarginStarts[idx] = marginStart, childMarginEnds[idx] = marginEnd, 
                childTotalMainSizes[idx] = baseMainSize + marginStart + marginEnd, childCrossSizes[idx] = _c4[crossDimension] || 0, 
                childMarginCrossStarts[idx] = marginCrossStart, childMarginCrossEnds[idx] = marginCrossEnd, 
                sumOfFlexBaseSizesWithMargins += childTotalMainSizes[idx];
            }
            if ((totalFlexGrow > 0 || totalFlexShrink > 0) && numProcessedChildren > 1) {
                node.flexBoundary = node.flexBoundary || "fixed";
                var availableSpace = containerSize - sumOfFlexBaseSizesWithMargins - (numProcessedChildren > 0 ? gap * (numProcessedChildren - 1) : 0);
                if (availableSpace > 0 && totalFlexGrow > 0) {
                    for (var _idx2 = 0; _idx2 < numProcessedChildren; _idx2++) {
                        var _c5 = children[processableChildrenIndices[_idx2]], flexGrowValue = _c5.flexGrow || 0;
                        if (flexGrowValue > 0) {
                            var shareOfSpace = flexGrowValue / totalFlexGrow * availableSpace, newMainSize = childMainSizes[_idx2] + shareOfSpace;
                            _c5[dimension] = newMainSize, childMainSizes[_idx2] = newMainSize, childTotalMainSizes[_idx2] = newMainSize + childMarginStarts[_idx2] + childMarginEnds[_idx2];
                        }
                    }
                    node._containsFlexGrow = !node._containsFlexGrow || null;
                } else if (availableSpace < 0 && totalFlexShrink > 0) {
                    for (var totalScaledShrinkFactor = 0, _idx3 = 0; _idx3 < numProcessedChildren; _idx3++) {
                        totalScaledShrinkFactor += (children[processableChildrenIndices[_idx3]].flexShrink || 0) * childMainSizes[_idx3];
                    }
                    if (totalScaledShrinkFactor > 0) for (var _idx4 = 0; _idx4 < numProcessedChildren; _idx4++) {
                        var _c6 = children[processableChildrenIndices[_idx4]], _flexShrinkValue = _c6.flexShrink || 0;
                        if (_flexShrinkValue > 0) {
                            var sizeReduction = _flexShrinkValue * childMainSizes[_idx4] / totalScaledShrinkFactor * Math.abs(availableSpace), _newMainSize = childMainSizes[_idx4] - sizeReduction, minBound = _c6[minDimension] || 0;
                            _newMainSize < minBound && (_newMainSize = minBound), _c6[dimension] = _newMainSize, 
                            childMainSizes[_idx4] = _newMainSize, childTotalMainSizes[_idx4] = _newMainSize + childMarginStarts[_idx4] + childMarginEnds[_idx4];
                        }
                    }
                    node._containsFlexGrow = !node._containsFlexGrow || null;
                } else node._containsFlexGrow && (node._containsFlexGrow = null);
            }
            var totalItemSize = 0;
            if ("center" === justify || "spaceBetween" === justify || "spaceEvenly" === justify || "spaceAround" === justify) for (var _idx5 = 0; _idx5 < numProcessedChildren; _idx5++) totalItemSize += childTotalMainSizes[_idx5];
            var doCrossAlign = containerCrossSize ? function(c, idx) {
                var crossCurrentPos = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, alignSelf = c.alignSelf || align;
                alignSelf && ("flexStart" === alignSelf ? c[crossProp] = crossCurrentPos + childMarginCrossStarts[idx] : "center" === alignSelf ? c[crossProp] = crossCurrentPos + (containerCrossSize - childCrossSizes[idx]) / 2 + childMarginCrossStarts[idx] : "flexEnd" === alignSelf && (c[crossProp] = crossCurrentPos + containerCrossSize - childCrossSizes[idx] - childMarginCrossEnds[idx]));
            } : function(_c, _idx) {};
            if (isRow && node._calcHeight && !node.flexCrossBoundary) {
                for (var maxHeight = 0, _idx6 = 0; _idx6 < numProcessedChildren; _idx6++) childCrossSizes[_idx6] > maxHeight && (maxHeight = childCrossSizes[_idx6]);
                var newHeight = maxHeight || node.height;
                newHeight !== node.height && (containerUpdated = !0, node.height = containerCrossSize = newHeight);
            }
            var currentPos = paddingStart;
            if ("flexStart" === justify) {
                if ("wrap" === node.flexWrap) {
                    for (var _node$columnGap, _node$rowGap, childCrossSizeVar = numProcessedChildren > 0 ? childCrossSizes[0] : containerCrossSize, crossCurrentPos = isWrapReverse ? containerCrossSize - paddingCrossEnd - childCrossSizeVar : paddingCrossStart, crossGap = isRow ? null !== (_node$columnGap = node.columnGap) && void 0 !== _node$columnGap ? _node$columnGap : gap : null !== (_node$rowGap = node.rowGap) && void 0 !== _node$rowGap ? _node$rowGap : gap, _idx7 = 0; _idx7 < numProcessedChildren; _idx7++) {
                        var _c7 = children[processableChildrenIndices[_idx7]];
                        currentPos + childTotalMainSizes[_idx7] > containerSize && currentPos > paddingStart && (currentPos = paddingStart, 
                        crossCurrentPos += isWrapReverse ? -(childCrossSizeVar + crossGap) : childCrossSizeVar + crossGap), 
                        _c7[prop] = currentPos + childMarginStarts[_idx7], currentPos += childTotalMainSizes[_idx7] + gap, 
                        doCrossAlign(_c7, _idx7, crossCurrentPos);
                    }
                    var finalCrossSize = isWrapReverse ? containerCrossSize - crossCurrentPos + paddingCrossStart : crossCurrentPos + childCrossSizeVar + paddingCrossEnd;
                    node[crossDimension] !== finalCrossSize && (node["preFlex".concat(crossDimension)] = node[crossDimension], 
                    node[crossDimension] = finalCrossSize, containerUpdated = !0);
                } else for (var _idx8 = 0; _idx8 < numProcessedChildren; _idx8++) {
                    var _c8 = children[processableChildrenIndices[_idx8]];
                    _c8[prop] = currentPos + childMarginStarts[_idx8], currentPos += childTotalMainSizes[_idx8] + gap, 
                    doCrossAlign(_c8, _idx8, paddingCrossStart);
                }
                if ("fixed" !== node.flexBoundary && "wrap" !== node.flexWrap) {
                    var calculatedSize = currentPos - gap + paddingEnd, minSize = node[minDimension] || 0;
                    if (calculatedSize < minSize && (calculatedSize = minSize), calculatedSize !== (node[dimension] || 0)) return node["preFlex".concat(dimension)] = containerSize, 
                    node[dimension] = calculatedSize, !0;
                }
            } else if ("flexEnd" === justify) {
                currentPos = containerSize - paddingEnd;
                for (var _idx9 = numProcessedChildren - 1; _idx9 >= 0; _idx9--) {
                    var _c9 = children[processableChildrenIndices[_idx9]];
                    _c9[prop] = currentPos - childMainSizes[_idx9] - childMarginEnds[_idx9], currentPos -= childTotalMainSizes[_idx9] + gap, 
                    doCrossAlign(_c9, _idx9, paddingCrossStart);
                }
            } else if ("center" === justify) {
                currentPos = (containerSize - (totalItemSize + gap * (numProcessedChildren - 1))) / 2 + paddingStart;
                for (var _idx0 = 0; _idx0 < numProcessedChildren; _idx0++) {
                    var _c0 = children[processableChildrenIndices[_idx0]];
                    _c0[prop] = currentPos + childMarginStarts[_idx0], currentPos += childTotalMainSizes[_idx0] + gap, 
                    doCrossAlign(_c0, _idx0, paddingCrossStart);
                }
            } else if ("spaceBetween" === justify) {
                var spaceBetween = numProcessedChildren > 1 ? (containerSize - totalItemSize - nodePaddingTotal) / (numProcessedChildren - 1) : 0;
                currentPos = paddingStart;
                for (var _idx1 = 0; _idx1 < numProcessedChildren; _idx1++) {
                    var _c1 = children[processableChildrenIndices[_idx1]];
                    _c1[prop] = currentPos + childMarginStarts[_idx1], currentPos += childTotalMainSizes[_idx1] + spaceBetween, 
                    doCrossAlign(_c1, _idx1, paddingCrossStart);
                }
            } else if ("spaceAround" === justify) {
                var spaceAround = numProcessedChildren > 0 ? (containerSize - totalItemSize - nodePaddingTotal) / numProcessedChildren : 0;
                currentPos = paddingStart + spaceAround / 2;
                for (var _idx10 = 0; _idx10 < numProcessedChildren; _idx10++) {
                    var _c10 = children[processableChildrenIndices[_idx10]];
                    _c10[prop] = currentPos + childMarginStarts[_idx10], currentPos += childTotalMainSizes[_idx10] + spaceAround, 
                    doCrossAlign(_c10, _idx10, paddingCrossStart);
                }
            } else if ("spaceEvenly" === justify) {
                var spaceEvenly = (containerSize - totalItemSize - nodePaddingTotal) / (numProcessedChildren + 1);
                currentPos = spaceEvenly + paddingStart;
                for (var _idx11 = 0; _idx11 < numProcessedChildren; _idx11++) {
                    var _c11 = children[processableChildrenIndices[_idx11]];
                    _c11[prop] = currentPos + childMarginStarts[_idx11], currentPos += childTotalMainSizes[_idx11] + spaceEvenly, 
                    doCrossAlign(_c11, _idx11, paddingCrossStart);
                }
            }
            return containerUpdated;
        }
        function enqueueDelete(node, n) {
            void 0 === node._queueDelete ? (node._queueDelete = n, 1 === elementDeleteQueue.push(node) && schedulePostMutation()) : node._queueDelete += n;
        }
        function schedulePostMutation() {
            postMutationQueued || (postMutationQueued = !0, "reprocessUpdates" in renderer$1.stage && renderer$1.stage.reprocessUpdates && renderer$1.stage.reprocessUpdates(runPostMutation), 
            queueMicrotask(runPostMutation));
        }
        function runPostMutation() {
            if (postMutationQueued = !1, elementDeleteQueue.length > 0) {
                var _step11, _iterator11 = _createForOfIteratorHelper(elementDeleteQueue);
                try {
                    for (_iterator11.s(); !(_step11 = _iterator11.n()).done; ) {
                        var _el$_queueDelete, el = _step11.value;
                        (null !== (_el$_queueDelete = el._queueDelete) && void 0 !== _el$_queueDelete ? _el$_queueDelete : 0) < 0 && el.destroy(), 
                        el._queueDelete = void 0;
                    }
                } catch (err) {
                    _iterator11.e(err);
                } finally {
                    _iterator11.f();
                }
                elementDeleteQueue.length = 0;
            }
            for (;layoutQueue.size > 0; ) {
                var queue = _toConsumableArray(layoutQueue);
                layoutQueue.clear();
                for (var i = queue.length - 1; i >= 0; i--) queue[i].updateLayout();
            }
            if (null !== deferredFocusElement) {
                var _el = deferredFocusElement;
                deferredFocusElement = null, _el.setFocus();
            } else if (null !== nextActiveElement) {
                var element = nextActiveElement;
                nextActiveElement = null, setActiveElementCore(element);
            }
        }
        function addToLayoutQueue(node) {
            layoutQueue.add(node), schedulePostMutation();
        }
        function removeItem(arr, item) {
            var index = arr.indexOf(item);
            if (index > -1) {
                for (var last = arr.length - 1, i = index; i < last; i++) arr[i] = arr[i + 1];
                arr.pop();
            }
            return index;
        }
        function convertToShader(_node, v) {
            var type = "rounded";
            return v.border && (type += "WithBorder"), v.shadow && (type += "WithShadow"), renderer$1.createShader(type, v);
        }
        function getPropertyAlias(name) {
            return "w" === name ? "width" : "h" === name ? "height" : name;
        }
        function createRawShaderAccessor(key) {
            return {
                set: function(value) {
                    this.shader = [ key, value ];
                },
                get: function() {
                    return this.shader;
                }
            };
        }
        function shaderAccessor(key) {
            return {
                set: function(value) {
                    var _this$lng$shader2, animationSettings, target = this.lng.shader || {};
                    if (this._effects = this._effects || {}, this._effects[key] = value, null == (_this$lng$shader2 = this.lng.shader) ? void 0 : _this$lng$shader2.props) {
                        target = this.lng.shader.props;
                        var transitionKey = "rounded" === key ? "borderRadius" : key;
                        this.transition && (!0 === this.transition || this.transition[transitionKey]) && (target = {}, 
                        animationSettings = !0 === this.transition || !0 === this.transition[transitionKey] ? void 0 : this.transition[transitionKey]);
                    }
                    "rounded" === key || "number" == typeof value ? target.radius = value : parseAndAssignShaderProps(key, value, target), 
                    this._writeShaderTarget(target), animationSettings && this.animate({
                        shaderProps: target
                    }, animationSettings).start();
                },
                get: function() {
                    var _this$_effects;
                    return null == (_this$_effects = this._effects) ? void 0 : _this$_effects[key];
                }
            };
        }
        function createRenderer$1(_ref16) {
            var createElement = _ref16.createElement, createTextNode = _ref16.createTextNode, isTextNode = _ref16.isTextNode, replaceText = _ref16.replaceText, insertNode = _ref16.insertNode, removeNode = _ref16.removeNode, setProperty = _ref16.setProperty, getParentNode = _ref16.getParentNode, getFirstChild = _ref16.getFirstChild, getNextSibling = _ref16.getNextSibling;
            function insert(parent, accessor, marker, initial) {
                if (void 0 === marker || initial || (initial = []), "function" != typeof accessor) return insertExpression(parent, accessor, initial, marker);
                createRenderEffect(function(current) {
                    return insertExpression(parent, accessor(), current, marker);
                }, initial);
            }
            function insertExpression(parent, value, current, marker, unwrapArray) {
                for (;"function" == typeof current; ) current = current();
                if (value === current) return current;
                var t = _typeof(value), multi = void 0 !== marker;
                if ("string" === t || "number" === t) if ("number" === t && (value = value.toString()), 
                multi) {
                    var node = current[0];
                    node && isTextNode(node) ? replaceText(node, value) : node = createTextNode(value), 
                    current = cleanChildren(parent, current, marker, node);
                } else "" !== current && "string" == typeof current ? replaceText(getFirstChild(parent), current = value) : (cleanChildren(parent, current, marker, createTextNode(value)), 
                current = value); else if (null == value || "boolean" === t) current = cleanChildren(parent, current, marker); else {
                    if ("function" === t) return createRenderEffect(function() {
                        for (var v = value(); "function" == typeof v; ) v = v();
                        current = insertExpression(parent, v, current, marker);
                    }), function() {
                        return current;
                    };
                    if (Array.isArray(value)) {
                        var array = [];
                        if (normalizeIncomingArray(array, value, unwrapArray)) return createRenderEffect(function() {
                            return current = insertExpression(parent, array, current, marker, !0);
                        }), function() {
                            return current;
                        };
                        if (0 === array.length) {
                            var replacement = cleanChildren(parent, current, marker);
                            if (multi) return current = replacement;
                        } else Array.isArray(current) ? 0 === current.length ? appendNodes(parent, array, marker) : reconcileArrays(parent, current, array) : null == current || "" === current ? appendNodes(parent, array) : reconcileArrays(parent, multi && current || [ getFirstChild(parent) ], array);
                        current = array;
                    } else {
                        if (Array.isArray(current)) {
                            if (multi) return current = cleanChildren(parent, current, marker, value);
                            cleanChildren(parent, current, null, value);
                        } else null != current && "" !== current && getFirstChild(parent) ? replaceNode(parent, value, getFirstChild(parent)) : insertNode(parent, value);
                        current = value;
                    }
                }
                return current;
            }
            function normalizeIncomingArray(normalized, array, unwrap) {
                for (var dynamic = !1, i = 0, len = array.length; i < len; i++) {
                    var item = array[i], t = void 0;
                    if (null == item || !0 === item || !1 === item) ; else if (Array.isArray(item)) dynamic = normalizeIncomingArray(normalized, item) || dynamic; else if ("string" === (t = _typeof(item)) || "number" === t) normalized.push(createTextNode(item)); else if ("function" === t) if (unwrap) {
                        for (;"function" == typeof item; ) item = item();
                        dynamic = normalizeIncomingArray(normalized, Array.isArray(item) ? item : [ item ]) || dynamic;
                    } else normalized.push(item), dynamic = !0; else normalized.push(item);
                }
                return dynamic;
            }
            function reconcileArrays(parentNode, a, b) {
                for (var bLength = b.length, aEnd = a.length, bEnd = bLength, aStart = 0, bStart = 0, after = getNextSibling(a[aEnd - 1]), map = null; aStart < aEnd || bStart < bEnd; ) if (a[aStart] !== b[bStart]) {
                    for (;a[aEnd - 1] === b[bEnd - 1]; ) aEnd--, bEnd--;
                    if (aEnd === aStart) for (var node = bEnd < bLength ? bStart ? getNextSibling(b[bStart - 1]) : b[bEnd - bStart] : after; bStart < bEnd; ) insertNode(parentNode, b[bStart++], node); else if (bEnd === bStart) for (;aStart < aEnd; ) map && map.has(a[aStart]) || removeNode(parentNode, a[aStart]), 
                    aStart++; else if (a[aStart] === b[bEnd - 1] && b[bStart] === a[aEnd - 1]) {
                        var _node2 = getNextSibling(a[--aEnd]);
                        insertNode(parentNode, b[bStart++], getNextSibling(a[aStart++])), insertNode(parentNode, b[--bEnd], _node2), 
                        a[aEnd] = b[bEnd];
                    } else {
                        if (!map) {
                            map = new Map;
                            for (var i = bStart; i < bEnd; ) map.set(b[i], i++);
                        }
                        var index = map.get(a[aStart]);
                        if (null != index) if (bStart < index && index < bEnd) {
                            for (var _i15 = aStart, sequence = 1, t = void 0; ++_i15 < aEnd && _i15 < bEnd && null != (t = map.get(a[_i15])) && t === index + sequence; ) sequence++;
                            if (sequence > index - bStart) for (var _node3 = a[aStart]; bStart < index; ) insertNode(parentNode, b[bStart++], _node3); else replaceNode(parentNode, b[bStart++], a[aStart++]);
                        } else aStart++; else removeNode(parentNode, a[aStart++]);
                    }
                } else aStart++, bStart++;
            }
            function cleanChildren(parent, current, marker, replacement) {
                if (void 0 === marker) {
                    for (var removed; removed = getFirstChild(parent); ) removeNode(parent, removed);
                    return replacement && insertNode(parent, replacement), "";
                }
                var node = replacement || createTextNode("");
                if (current.length) for (var inserted = !1, i = current.length - 1; i >= 0; i--) {
                    var el = current[i];
                    if (node !== el) {
                        var isParent = getParentNode(el) === parent;
                        inserted || i ? isParent && removeNode(parent, el) : isParent ? replaceNode(parent, node, el) : insertNode(parent, node, marker);
                    } else inserted = !0;
                } else insertNode(parent, node, marker);
                return [ node ];
            }
            function appendNodes(parent, array, marker) {
                for (var i = 0, len = array.length; i < len; i++) insertNode(parent, array[i], marker);
            }
            function replaceNode(parent, newNode, oldNode) {
                insertNode(parent, newNode, oldNode), removeNode(parent, oldNode);
            }
            function spreadExpression(node, props) {
                var prevProps = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return props || (props = {}), (arguments.length > 3 ? arguments[3] : void 0) || createRenderEffect(function() {
                    return prevProps.children = insertExpression(node, props.children, prevProps.children);
                }), createRenderEffect(function() {
                    return props.ref && props.ref(node);
                }), createRenderEffect(function() {
                    for (var prop in props) if ("children" !== prop && "ref" !== prop) {
                        var value = props[prop];
                        value !== prevProps[prop] && (setProperty(node, prop, value, prevProps[prop]), prevProps[prop] = value);
                    }
                }), prevProps;
            }
            return {
                render: function(code, element) {
                    var disposer;
                    return createRoot(function(dispose) {
                        disposer = dispose, insert(element, code());
                    }), disposer;
                },
                insert: insert,
                spread: function(node, accessor, skipChildren) {
                    "function" == typeof accessor ? createRenderEffect(function(current) {
                        return spreadExpression(node, accessor(), current, skipChildren);
                    }) : spreadExpression(node, accessor, void 0, skipChildren);
                },
                createElement: createElement,
                createTextNode: createTextNode,
                insertNode: insertNode,
                setProp: function(node, name, value, prev) {
                    return setProperty(node, name, value, prev), value;
                },
                mergeProps: mergeProps,
                effect: createRenderEffect,
                memo: memo$1,
                createComponent: createComponent$1,
                use: function(fn, element, arg) {
                    return untrack(function() {
                        return fn(element, arg);
                    });
                }
            };
        }
        function processTasks() {
            tasksEnabled && taskQueue.length && setTimeout(function() {
                var task = taskQueue.shift();
                task && (task(), processTasks());
            }, Config.taskDelay || 50);
        }
        return _export({
            $: function(fn) {
                createEffect(function() {
                    return untrack(fn);
                });
            },
            A: function(props) {
                var fallback = "fallback" in props && {
                    fallback: function() {
                        return props.fallback;
                    }
                };
                return createMemo(function(list, mapFn) {
                    var options = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, items = [], mapped = [], disposers = [], len = 0, indexes = mapFn.length > 1 ? [] : null;
                    return onCleanup(function() {
                        return dispose(disposers);
                    }), function() {
                        var i, j, newItems = list() || [], newLen = newItems.length;
                        return newItems[$TRACK], untrack(function() {
                            var newIndices, newIndicesNext, temp, tempdisposers, tempIndexes, start, end, newEnd, item;
                            if (0 === newLen) 0 !== len && (dispose(disposers), disposers = [], items = [], 
                            mapped = [], len = 0, indexes && (indexes = [])), options.fallback && (items = [ FALLBACK ], 
                            mapped[0] = createRoot(function(disposer) {
                                return disposers[0] = disposer, options.fallback();
                            }), len = 1); else if (0 === len) {
                                for (mapped = new Array(newLen), j = 0; j < newLen; j++) items[j] = newItems[j], 
                                mapped[j] = createRoot(mapper);
                                len = newLen;
                            } else {
                                for (temp = new Array(newLen), tempdisposers = new Array(newLen), indexes && (tempIndexes = new Array(newLen)), 
                                start = 0, end = Math.min(len, newLen); start < end && items[start] === newItems[start]; start++) ;
                                for (end = len - 1, newEnd = newLen - 1; end >= start && newEnd >= start && items[end] === newItems[newEnd]; end--, 
                                newEnd--) temp[newEnd] = mapped[end], tempdisposers[newEnd] = disposers[end], indexes && (tempIndexes[newEnd] = indexes[end]);
                                for (newIndices = new Map, newIndicesNext = new Array(newEnd + 1), j = newEnd; j >= start; j--) item = newItems[j], 
                                i = newIndices.get(item), newIndicesNext[j] = void 0 === i ? -1 : i, newIndices.set(item, j);
                                for (i = start; i <= end; i++) item = items[i], void 0 !== (j = newIndices.get(item)) && -1 !== j ? (temp[j] = mapped[i], 
                                tempdisposers[j] = disposers[i], indexes && (tempIndexes[j] = indexes[i]), j = newIndicesNext[j], 
                                newIndices.set(item, j)) : disposers[i]();
                                for (j = start; j < newLen; j++) j in temp ? (mapped[j] = temp[j], disposers[j] = tempdisposers[j], 
                                indexes && (indexes[j] = tempIndexes[j], indexes[j](j))) : mapped[j] = createRoot(mapper);
                                mapped = mapped.slice(0, len = newLen), items = newItems.slice(0);
                            }
                            return mapped;
                        });
                        function mapper(disposer) {
                            if (disposers[j] = disposer, indexes) {
                                var _createSignal0 = _slicedToArray(createSignal(j), 2), s = _createSignal0[0], set = _createSignal0[1];
                                return indexes[j] = set, mapFn(newItems[j], s);
                            }
                            return mapFn(newItems[j]);
                        }
                    };
                }(function() {
                    return props.each;
                }, props.children, fallback || void 0));
            },
            At: function(index) {
                return index < 32 ? 1 * index : 32 + 8 * (index - 32);
            },
            B: createContext,
            C: isElementNode,
            Dt: function(err) {
                return err instanceof TextureError || "object" === _typeof(err) && null !== err && "TextureError" === err.name && "string" == typeof err.code;
            },
            E: function(item) {
                return Number.isInteger(item);
            },
            F: function(props) {
                var chs = children(function() {
                    return props.children;
                }), switchFunc = createMemo(function() {
                    for (var ch = chs(), mps = Array.isArray(ch) ? ch : [ ch ], func = function() {}, _loop5 = function() {
                        var index = i, mp = mps[i], prevFunc = func, conditionValue = createMemo(function() {
                            return prevFunc() ? void 0 : mp.when;
                        }, void 0, void 0), condition = mp.keyed ? conditionValue : createMemo(conditionValue, void 0, {
                            equals: function(a, b) {
                                return !a == !b;
                            }
                        });
                        func = function() {
                            return prevFunc() || (condition() ? [ index, conditionValue, mp ] : void 0);
                        };
                    }, i = 0; i < mps.length; i++) _loop5();
                    return func;
                });
                return createMemo(function() {
                    var sel = switchFunc()();
                    if (!sel) return props.fallback;
                    var _sel = _slicedToArray(sel, 3), index = _sel[0], conditionValue = _sel[1], mp = _sel[2], child = mp.children;
                    return "function" == typeof child && child.length > 0 ? untrack(function() {
                        return child(mp.keyed ? conditionValue() : function() {
                            var _untrack;
                            if ((null == (_untrack = untrack(switchFunc)()) ? void 0 : _untrack[0]) !== index) throw narrowedError("Match");
                            return conditionValue();
                        });
                    }) : child;
                }, void 0, void 0);
            },
            G: createRoot,
            H: createMemo,
            I: function(fn) {
                return runUpdates(fn, !1);
            },
            J: function() {
                return Listener;
            },
            K: function(source) {
                var fn = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : equalFn, subs = new Map, node = createComputation(function(p) {
                    var _step2, v = source(), _iterator2 = _createForOfIteratorHelper(subs.entries());
                    try {
                        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                            var _step2$value = _slicedToArray(_step2.value, 2), key = _step2$value[0], val = _step2$value[1];
                            if (fn(key, v) !== fn(key, p)) {
                                var _step3, _iterator3 = _createForOfIteratorHelper(val.values());
                                try {
                                    for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                                        var c = _step3.value;
                                        c.state = STALE, c.pure ? Updates.push(c) : Effects.push(c);
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
                }, void 0, !0, STALE);
                return updateComputation(node), function(key) {
                    var l, listener = Listener;
                    listener && ((l = subs.get(key)) ? l.add(listener) : subs.set(key, l = new Set([ listener ])), 
                    onCleanup(function() {
                        l.delete(listener), !l.size && subs.delete(key);
                    }));
                    return fn(key, Transition && Transition.running && Transition.sources.has(node) ? node.tValue : node.value);
                };
            },
            L: children,
            M: function(props) {
                return props;
            },
            N: function(props) {
                var keyed = props.keyed, conditionValue = createMemo(function() {
                    return props.when;
                }, void 0, void 0), condition = keyed ? conditionValue : createMemo(conditionValue, void 0, {
                    equals: function(a, b) {
                        return !a == !b;
                    }
                });
                return createMemo(function() {
                    var c = condition();
                    if (c) {
                        var child = props.children;
                        return "function" == typeof child && child.length > 0 ? untrack(function() {
                            return child(keyed ? c : function() {
                                if (!untrack(condition)) throw narrowedError("Show");
                                return conditionValue();
                            });
                        }) : child;
                    }
                    return props.fallback;
                }, void 0, void 0);
            },
            P: function(props) {
                var show, ctx, p, flicker, error, counter = 0, _createSignal12 = _slicedToArray(createSignal(!1), 2), inFallback = _createSignal12[0], setFallback = _createSignal12[1], SuspenseContext = getSuspenseContext(), store = {
                    increment: function() {
                        1 === ++counter && setFallback(!0);
                    },
                    decrement: function() {
                        0 === --counter && setFallback(!1);
                    },
                    inFallback: inFallback,
                    effects: [],
                    resolved: !1
                }, owner = getOwner();
                if (sharedConfig.context && sharedConfig.load) {
                    var key = sharedConfig.getContextId(), ref = sharedConfig.load(key);
                    if (ref && ("object" !== _typeof(ref) || 1 !== ref.s ? p = ref : sharedConfig.gather(key)), 
                    p && "$$f" !== p) {
                        var _createSignal14 = _slicedToArray(createSignal(void 0, {
                            equals: !1
                        }), 2), s = _createSignal14[0], set = _createSignal14[1];
                        flicker = s, p.then(function() {
                            if (sharedConfig.done) return set();
                            sharedConfig.gather(key), setHydrateContext(ctx), set(), setHydrateContext();
                        }, function(err) {
                            error = err, set();
                        });
                    }
                }
                var dispose, listContext = useContext(SuspenseListContext);
                return listContext && (show = listContext.register(store.inFallback)), onCleanup(function() {
                    return dispose && dispose();
                }), createComponent$1(SuspenseContext.Provider, {
                    value: store,
                    get children() {
                        return createMemo(function() {
                            if (error) throw error;
                            if (ctx = sharedConfig.context, flicker) return flicker(), void (flicker = void 0);
                            ctx && "$$f" === p && setHydrateContext();
                            var rendered = createMemo(function() {
                                return props.children;
                            });
                            return createMemo(function(prev) {
                                var e, inFallback = store.inFallback(), _ref15 = show ? show() : {}, _ref15$showContent = _ref15.showContent, showContent = void 0 === _ref15$showContent || _ref15$showContent, _ref15$showFallback = _ref15.showFallback, showFallback = void 0 === _ref15$showFallback || _ref15$showFallback;
                                return (!inFallback || p && "$$f" !== p) && showContent ? (store.resolved = !0, 
                                dispose && dispose(), dispose = ctx = p = void 0, e = store.effects, Effects.push.apply(Effects, e), 
                                e.length = 0, rendered()) : showFallback ? dispose ? prev : createRoot(function(disposer) {
                                    return dispose = disposer, ctx && (setHydrateContext({
                                        id: ctx.id + "F",
                                        count: 0
                                    }), ctx = void 0), props.fallback;
                                }, owner) : void 0;
                            });
                        });
                    }
                });
            },
            Q: onCleanup,
            R: createComponent$1,
            U: createRenderEffect,
            V: createEffect,
            W: function(pSource, pFetcher, pOptions) {
                var source, fetcher, options;
                "function" == typeof pFetcher ? (source = pSource, fetcher = pFetcher, options = pOptions || {}) : (source = !0, 
                fetcher = pSource, options = pFetcher || {});
                var pr = null, initP = NO_INIT, id = null, loadedUnderTransition = !1, scheduled = !1, resolved = "initialValue" in options, dynamic = "function" == typeof source && createMemo(source), contexts = new Set, _ref1 = _slicedToArray((options.storage || createSignal)(options.initialValue), 2), value = _ref1[0], setValue = _ref1[1], _createSignal2 = _slicedToArray(createSignal(void 0), 2), error = _createSignal2[0], setError = _createSignal2[1], _createSignal4 = _slicedToArray(createSignal(void 0, {
                    equals: !1
                }), 2), track = _createSignal4[0], trigger = _createSignal4[1], _createSignal6 = _slicedToArray(createSignal(resolved ? "ready" : "unresolved"), 2), state = _createSignal6[0], setState = _createSignal6[1];
                function loadEnd(p, v, error, key) {
                    return pr === p && (pr = null, void 0 !== key && (resolved = !0), p !== initP && v !== initP || !options.onHydrated || queueMicrotask(function() {
                        return options.onHydrated(key, {
                            value: v
                        });
                    }), initP = NO_INIT, Transition && p && loadedUnderTransition ? (Transition.promises.delete(p), 
                    loadedUnderTransition = !1, runUpdates(function() {
                        Transition.running = !0, completeLoad(v, error);
                    }, !1)) : completeLoad(v, error)), v;
                }
                function completeLoad(v, err) {
                    runUpdates(function() {
                        void 0 === err && setValue(function() {
                            return v;
                        }), setState(void 0 !== err ? "errored" : resolved ? "ready" : "unresolved"), setError(err);
                        var _step, _iterator = _createForOfIteratorHelper(contexts.keys());
                        try {
                            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                                _step.value.decrement();
                            }
                        } catch (err) {
                            _iterator.e(err);
                        } finally {
                            _iterator.f();
                        }
                        contexts.clear();
                    }, !1);
                }
                function read() {
                    var c = SuspenseContext && useContext(SuspenseContext), v = value(), err = error();
                    if (void 0 !== err && !pr) throw err;
                    return Listener && !Listener.user && c && createComputed(function() {
                        track(), pr && (c.resolved && Transition && loadedUnderTransition ? Transition.promises.add(pr) : contexts.has(c) || (c.increment(), 
                        contexts.add(c)));
                    }), v;
                }
                function load() {
                    var refetching = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    if (!1 === refetching || !scheduled) {
                        scheduled = !1;
                        var lookup = dynamic ? dynamic() : source;
                        if (loadedUnderTransition = Transition && Transition.running, null != lookup && !1 !== lookup) {
                            var error;
                            Transition && pr && Transition.promises.delete(pr);
                            var v, p = initP !== NO_INIT ? initP : untrack(function() {
                                try {
                                    return fetcher(lookup, {
                                        value: value(),
                                        refetching: refetching
                                    });
                                } catch (fetcherError) {
                                    error = fetcherError;
                                }
                            });
                            if (void 0 === error) return (v = p) && "object" === _typeof(v) && "then" in v ? (pr = p, 
                            "v" in p ? (1 === p.s ? loadEnd(pr, p.v, void 0, lookup) : loadEnd(pr, void 0, castError(p.v), lookup), 
                            p) : (scheduled = !0, queueMicrotask(function() {
                                return scheduled = !1;
                            }), runUpdates(function() {
                                setState(resolved ? "refreshing" : "pending"), trigger();
                            }, !1), p.then(function(v) {
                                return loadEnd(p, v, void 0, lookup);
                            }, function(e) {
                                return loadEnd(p, void 0, castError(e), lookup);
                            }))) : (loadEnd(pr, p, void 0, lookup), p);
                            loadEnd(pr, void 0, castError(error), lookup);
                        } else loadEnd(pr, untrack(value));
                    }
                }
                sharedConfig.context && (id = sharedConfig.getNextContextId(), "initial" === options.ssrLoadFrom ? initP = options.initialValue : sharedConfig.load && sharedConfig.has(id) && (initP = sharedConfig.load(id))), 
                Object.defineProperties(read, {
                    state: {
                        get: function() {
                            return state();
                        }
                    },
                    error: {
                        get: function() {
                            return error();
                        }
                    },
                    loading: {
                        get: function() {
                            var s = state();
                            return "pending" === s || "refreshing" === s;
                        }
                    },
                    latest: {
                        get: function() {
                            if (!resolved) return read();
                            var err = error();
                            if (err && !pr) throw err;
                            return value();
                        }
                    }
                });
                var owner = Owner;
                return dynamic ? createComputed(function() {
                    return owner = Owner, load(!1);
                }) : load(!1), [ read, {
                    refetch: function(info) {
                        return runWithOwner(owner, function() {
                            return load(info);
                        });
                    },
                    mutate: setValue
                } ];
            },
            X: mergeProps,
            Y: getOwner,
            Z: function(deps, fn, options) {
                var prevInput, isArray = Array.isArray(deps), defer = options && options.defer;
                return function(prevValue) {
                    var input;
                    if (isArray) {
                        input = Array(deps.length);
                        for (var i = 0; i < deps.length; i++) input[i] = deps[i]();
                    } else input = deps();
                    if (defer) return defer = !1, prevValue;
                    var result = untrack(function() {
                        return fn(input, prevInput, prevValue);
                    });
                    return prevInput = input, result;
                };
            },
            at: useContext,
            b: function(_x) {
                return _loadFonts.apply(this, arguments);
            },
            ct: function() {
                pool.clear();
            },
            et: function() {},
            it: untrack,
            j: function(props) {
                var fallback = "fallback" in props && {
                    fallback: function() {
                        return props.fallback;
                    }
                };
                return createMemo(function(list, mapFn) {
                    var i, options = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, items = [], mapped = [], disposers = [], signals = [], len = 0;
                    return onCleanup(function() {
                        return dispose(disposers);
                    }), function() {
                        var newItems = list() || [], newLen = newItems.length;
                        return newItems[$TRACK], untrack(function() {
                            if (0 === newLen) return 0 !== len && (dispose(disposers), disposers = [], items = [], 
                            mapped = [], len = 0, signals = []), options.fallback && (items = [ FALLBACK ], 
                            mapped[0] = createRoot(function(disposer) {
                                return disposers[0] = disposer, options.fallback();
                            }), len = 1), mapped;
                            for (items[0] === FALLBACK && (disposers[0](), disposers = [], items = [], mapped = [], 
                            len = 0), i = 0; i < newLen; i++) i < items.length && items[i] !== newItems[i] ? signals[i](function() {
                                return newItems[i];
                            }) : i >= items.length && (mapped[i] = createRoot(mapper));
                            for (;i < items.length; i++) disposers[i]();
                            return len = signals.length = disposers.length = newLen, items = newItems.slice(0), 
                            mapped = mapped.slice(0, len);
                        });
                        function mapper(disposer) {
                            disposers[i] = disposer;
                            var _createSignal10 = _slicedToArray(createSignal(newItems[i]), 2), s = _createSignal10[0], set = _createSignal10[1];
                            return signals[i] = set, mapFn(s, i);
                        }
                    };
                }(function() {
                    return props.each;
                }, props.children, fallback || void 0));
            },
            kt: frameTimeBucketIndex,
            lt: prefetchFont,
            o: function(rendererOptions, node) {
                return renderer = startLightningRenderer(rendererOptions || Config.rendererOptions, node || "app"), 
                rootNode.lng = renderer.root, rootNode.rendered = !0, renderer.on("idle", function() {
                    tasksEnabled = !0, processTasks();
                }), {
                    renderer: renderer,
                    rootNode: rootNode,
                    render: render
                };
            },
            p: function(callback) {
                "high" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "low") ? taskQueue.unshift(callback) : taskQueue.push(callback), 
                processTasks();
            },
            q: createSignal,
            rt: startTransition,
            t: function(props) {
                var _splitProps = function(props) {
                    for (var _len2 = arguments.length, keys = new Array(_len2 > 1 ? _len2 - 1 : 0), _key3 = 1; _key3 < _len2; _key3++) keys[_key3 - 1] = arguments[_key3];
                    if (SUPPORTS_PROXY && $PROXY in props) {
                        var blocked = new Set(keys.length > 1 ? keys.flat() : keys[0]), res = keys.map(function(k) {
                            return new Proxy({
                                get: function(property) {
                                    return k.includes(property) ? props[property] : void 0;
                                },
                                has: function(property) {
                                    return k.includes(property) && property in props;
                                },
                                keys: function() {
                                    return k.filter(function(property) {
                                        return property in props;
                                    });
                                }
                            }, propTraps);
                        });
                        return res.push(new Proxy({
                            get: function(property) {
                                return blocked.has(property) ? void 0 : props[property];
                            },
                            has: function(property) {
                                return !blocked.has(property) && property in props;
                            },
                            keys: function() {
                                return Object.keys(props).filter(function(k) {
                                    return !blocked.has(k);
                                });
                            }
                        }, propTraps)), res;
                    }
                    var _step8, otherObject = {}, objects = keys.map(function() {
                        return {};
                    }), _iterator8 = _createForOfIteratorHelper(Object.getOwnPropertyNames(props));
                    try {
                        for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
                            var _step9, propName = _step8.value, desc = Object.getOwnPropertyDescriptor(props, propName), isDefaultDesc = !desc.get && !desc.set && desc.enumerable && desc.writable && desc.configurable, _blocked = !1, objectIndex = 0, _iterator9 = _createForOfIteratorHelper(keys);
                            try {
                                for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) _step9.value.includes(propName) && (_blocked = !0, 
                                isDefaultDesc ? objects[objectIndex][propName] = desc.value : Object.defineProperty(objects[objectIndex], propName, desc)), 
                                ++objectIndex;
                            } catch (err) {
                                _iterator9.e(err);
                            } finally {
                                _iterator9.f();
                            }
                            _blocked || (isDefaultDesc ? otherObject[propName] = desc.value : Object.defineProperty(otherObject, propName, desc));
                        }
                    } catch (err) {
                        _iterator8.e(err);
                    } finally {
                        _iterator8.f();
                    }
                    return [].concat(_toConsumableArray(objects), [ otherObject ]);
                }(props, [ "component" ]), _splitProps2 = _slicedToArray(_splitProps, 2), p = _splitProps2[0], others = _splitProps2[1], cached = createMemo(function() {
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
                        var el = createElement(component);
                        return el.componentName = component, spread(el, others), el;
                    }
                });
            },
            tt: runWithOwner,
            ut: assertTruthy,
            w: isFocused,
            z: createComputed,
            Et: void 0,
            wt: void 0,
            x: void 0
        }), {
            setters: [],
            execute: function() {
                var _createSignal16, _createSignal18, _createSignal20, _solidRenderer;
                _export("jt", normalizeBoundsMargin$1 = function(value) {
                    if (!0 === Array.isArray(value)) {
                        var arr = value;
                        return [ arr[0] || 0, arr[1] || 0, arr[2] || 0, arr[3] || 0 ];
                    }
                    var m = value || 0;
                    return [ m, m, m, m ];
                }), _export("Ot", EventEmitter = function() {
                    return _createClass(function() {
                        this.eventListeners = null;
                    }, [ {
                        key: "on",
                        value: function(event, listener) {
                            var map = this.eventListeners;
                            null === map && (map = this.eventListeners = {});
                            var listeners = map[event];
                            void 0 === listeners && (listeners = [], map[event] = listeners), listeners.push(listener);
                        }
                    }, {
                        key: "off",
                        value: function(event, listener) {
                            var map = this.eventListeners;
                            if (null !== map) {
                                var listeners = map[event];
                                if (void 0 !== listeners) if (void 0 !== listener) {
                                    var index = listeners.indexOf(listener);
                                    if (!(index < 0)) {
                                        for (var next = [], i = 0; i < listeners.length; i++) i !== index && next.push(listeners[i]);
                                        map[event] = next;
                                    }
                                } else map[event] = void 0;
                            }
                        }
                    }, {
                        key: "once",
                        value: function(event, listener) {
                            var _this2 = this, _onceListener = function(target, data) {
                                _this2.off(event, _onceListener), listener(target, data);
                            };
                            this.on(event, _onceListener);
                        }
                    }, {
                        key: "emit",
                        value: function(event, data) {
                            var map = this.eventListeners;
                            if (null !== map) {
                                var listeners = map[event];
                                if (void 0 !== listeners) for (var len = listeners.length, i = 0; i < len; i++) listeners[i](this, data);
                            }
                        }
                    }, {
                        key: "hasListener",
                        value: function(event) {
                            var map = this.eventListeners;
                            if (null === map) return !1;
                            var listeners = map[event];
                            return void 0 !== listeners && listeners.length > 0;
                        }
                    }, {
                        key: "hasListeners",
                        value: function() {
                            var map = this.eventListeners;
                            if (null === map) return !1;
                            for (var event in map) {
                                var listeners = map[event];
                                if (void 0 !== listeners && listeners.length > 0) return !0;
                            }
                            return !1;
                        }
                    }, {
                        key: "removeAllListeners",
                        value: function() {
                            this.eventListeners = null;
                        }
                    } ]);
                }()), function(TextureErrorCode) {
                    TextureErrorCode.MEMORY_THRESHOLD_EXCEEDED = "MEMORY_THRESHOLD_EXCEEDED", TextureErrorCode.TEXTURE_DATA_NULL = "TEXTURE_DATA_NULL", 
                    TextureErrorCode.TEXTURE_TYPE_NOT_REGISTERED = "TEXTURE_TYPE_NOT_REGISTERED", TextureErrorCode.TEXTURE_UPLOAD_FAILED = "TEXTURE_UPLOAD_FAILED";
                }(TextureErrorCode || _export("Et", TextureErrorCode = {})), defaultMessages = _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, TextureErrorCode.MEMORY_THRESHOLD_EXCEEDED, "Memory threshold exceeded"), TextureErrorCode.TEXTURE_DATA_NULL, "Texture data is null"), TextureErrorCode.TEXTURE_TYPE_NOT_REGISTERED, "Texture type is not registered"), TextureErrorCode.TEXTURE_UPLOAD_FAILED, "Texture upload failed"), 
                _export("Tt", TextureError = function(_Error) {
                    function TextureError(codeOrMessage, maybeMessage) {
                        var _this3, isCode = Object.prototype.hasOwnProperty.call(defaultMessages, codeOrMessage), code = isCode ? codeOrMessage : void 0;
                        return (_this3 = _callSuper(this, TextureError, [ isCode && code ? null != maybeMessage ? maybeMessage : defaultMessages[code] : String(codeOrMessage) ])).name = "TextureError", 
                        code && (_this3.code = code), _this3;
                    }
                    return _inherits(TextureError, _Error), _createClass(TextureError);
                }(_wrapNativeSuper(Error))), ST_VIS_MASK = 49152, retryDelay = function(failures) {
                    return 1e3 / 60 * (1 << Math.min(failures - 1, 10));
                }, IdQueue = function() {
                    return _createClass(function() {
                        this.ids = new Int32Array(64), this.head = 0, this.count = 0;
                    }, [ {
                        key: "push",
                        value: function(id) {
                            var ids = this.ids;
                            if (this.count === ids.length) {
                                for (var grown = new Int32Array(2 * ids.length), i = 0; i < this.count; i++) grown[i] = ids[(this.head + i) % ids.length];
                                this.ids = ids = grown, this.head = 0;
                            }
                            ids[(this.head + this.count) % ids.length] = id, this.count++;
                        }
                    }, {
                        key: "first",
                        value: function() {
                            return this.ids[this.head];
                        }
                    }, {
                        key: "shift",
                        value: function() {
                            var id = this.ids[this.head];
                            return this.head = (this.head + 1) % this.ids.length, this.count--, id;
                        }
                    } ]);
                }(), TextureStore = function() {
                    return _createClass(function(nodes) {
                        this.capacity = 0, this.lruHead = -1, this.orphanHead = -1, this.props = [], this.keys = [], 
                        this.data = [], this.errors = [], this.subs = [], this.handles = [], this.cache = new Map, 
                        this.pending = 0, this.maxRetries = 5, this.loadedCount = 0, this.loadedBytes = 0, 
                        this.wantedCount = 0, this.wantedBytes = 0, this.frame = 0, this.now = function() {
                            return 0;
                        }, this.time = 0, this.sink = null, this.onUploaded = function() {}, this.onFailed = function() {}, 
                        this.onFreed = function() {}, this.onHeld = function() {}, this.onQueued = function() {}, 
                        this.schedule = null, this.requestFrame = function() {}, this.viewQueue = new IdQueue, 
                        this.marginQueue = new IdQueue, this.generatedQueue = new IdQueue, this.uploadQueue = new IdQueue, 
                        this.freeHead = -1, this.nodes = nodes, this.resize(64), this.freeHead = this.nextFree[0];
                    }, [ {
                        key: "resize",
                        value: function(capacity) {
                            var old = this.capacity;
                            this.state = growU8$1(this.state, capacity), this.kind = growU8$1(this.kind, capacity), 
                            this.flags = growU8$1(this.flags, capacity), this.w = growF64$2(this.w, capacity), 
                            this.h = growF64$2(this.h, capacity), this.u2 = growF64$2(this.u2, capacity), this.v2 = growF64$2(this.v2, capacity), 
                            this.refCount = growI32$3(this.refCount, capacity), this.wantCount = growI32$3(this.wantCount, capacity), 
                            this.retryCount = growI32$3(this.retryCount, capacity), this.maxRetryCount = growI32$3(this.maxRetryCount, capacity), 
                            this.retryToken = growI32$3(this.retryToken, capacity), this.bytes = growF64$2(this.bytes, capacity), 
                            this.createdAt = growF64$2(this.createdAt, capacity), this.gen = growI32$3(this.gen, capacity), 
                            this.lruPrev = growI32$3(this.lruPrev, capacity), this.lruNext = growI32$3(this.lruNext, capacity), 
                            this.orphanPrev = growI32$3(this.orphanPrev, capacity), this.orphanNext = growI32$3(this.orphanNext, capacity), 
                            this.parent = growI32$3(this.parent, capacity), this.ownerHead = growI32$3(this.ownerHead, capacity), 
                            this.nextFree = growI32$3(this.nextFree, capacity), growSide$1(this.props, capacity), 
                            growSide$1(this.keys, capacity), growSide$1(this.data, capacity), growSide$1(this.errors, capacity), 
                            growSide$1(this.subs, capacity), growSide$1(this.handles, capacity);
                            for (var i = old; i < capacity - 1; i++) this.nextFree[i] = i + 1;
                            this.nextFree[capacity - 1] = this.freeHead, this.freeHead = old, this.capacity = capacity;
                        }
                    }, {
                        key: "create",
                        value: function(kind, props, key) {
                            var parent = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
                            -1 === this.freeHead && this.resize(2 * this.capacity);
                            var rec = this.freeHead;
                            this.freeHead = this.nextFree[rec], this.state[rec] = 0, this.kind[rec] = kind, 
                            this.flags[rec] = 0, this.w[rec] = 0, this.h[rec] = 0, this.u2[rec] = 1, this.v2[rec] = 1, 
                            this.refCount[rec] = 0, this.wantCount[rec] = 0, this.retryCount[rec] = 0, this.bytes[rec] = 0, 
                            this.createdAt[rec] = this.time;
                            var max = props.maxRetryCount;
                            if (this.maxRetryCount[rec] = void 0 === max ? this.maxRetries : max, this.parent[rec] = parent, 
                            this.ownerHead[rec] = -1, this.props[rec] = props, this.keys[rec] = key, this.handles[rec] = null, 
                            this.listAppend(rec, 128), null !== key && this.cache.set(key, rec), -1 !== parent) {
                                this.ref(parent);
                                var subs = this.subs[parent];
                                null === subs && (subs = this.subs[parent] = []), subs.push(rec);
                            }
                            return rec;
                        }
                    }, {
                        key: "pixelsOf",
                        value: function(rec) {
                            return 3 === this.kind[rec] ? this.parent[rec] : rec;
                        }
                    }, {
                        key: "ref",
                        value: function(rec) {
                            var n = this.refCount[rec] + 1;
                            this.refCount[rec] = n, 1 === n && this.listRemove(rec, 128);
                        }
                    }, {
                        key: "unref",
                        value: function(rec) {
                            var n = this.refCount[rec] - 1;
                            this.refCount[rec] = n, 0 === n && this.listAppend(rec, 128);
                        }
                    }, {
                        key: "want",
                        value: function(rec, viewport) {
                            var n = this.wantCount[rec] + 1;
                            this.wantCount[rec] = n;
                            var state = this.state[rec];
                            1 === n && 4 === state && (this.listRemove(rec, 64), this.wantedCount++, this.wantedBytes += this.bytes[rec]), 
                            0 === state || 6 === state ? (this.setPending(rec, 1, !0), this.enqueue(rec, viewport)) : 1 === state && !0 === viewport && this.enqueue(rec, !0);
                        }
                    }, {
                        key: "unwant",
                        value: function(rec) {
                            var n = this.wantCount[rec] - 1;
                            this.wantCount[rec] = n, 0 === n && 4 === this.state[rec] && (this.wantedCount--, 
                            this.wantedBytes -= this.bytes[rec], this.enterLru(rec));
                        }
                    }, {
                        key: "setPreventCleanup",
                        value: function(rec, on) {
                            var flags = this.flags[rec];
                            if (!0 === on) return this.flags[rec] = 1 | flags, void this.listRemove(rec, 64);
                            1 & flags && (this.flags[rec] = -2 & flags, 0 === this.wantCount[rec] && 4 === this.state[rec] && this.enterLru(rec));
                        }
                    }, {
                        key: "enterLru",
                        value: function(rec) {
                            1 === this.kind[rec] || 1 & this.flags[rec] || this.listAppend(rec, 64);
                        }
                    }, {
                        key: "promote",
                        value: function(rec) {
                            1 === this.state[rec] && this.enqueue(rec, !0);
                        }
                    }, {
                        key: "enqueue",
                        value: function(rec, viewport) {
                            var flags = this.flags[rec];
                            0 === this.kind[rec] ? !0 === viewport ? 4 & flags || (this.flags[rec] = 4 | flags, 
                            this.viewQueue.push(rec)) : 8 & flags || (this.flags[rec] = 8 | flags, this.marginQueue.push(rec)) : 4 & flags || (this.flags[rec] = 4 | flags, 
                            this.generatedQueue.push(rec));
                        }
                    }, {
                        key: "nextGenerated",
                        value: function() {
                            for (var queue = this.generatedQueue; queue.count > 0; ) {
                                var rec = queue.shift();
                                if (this.flags[rec] = -5 & this.flags[rec], 1 === this.state[rec]) {
                                    if (0 !== this.wantCount[rec]) return this.state[rec] = 2, rec;
                                    this.setPending(rec, 0, !1);
                                }
                            }
                            return -1;
                        }
                    }, {
                        key: "nextQueued",
                        value: function() {
                            for (;;) {
                                var rec = void 0, view = !1;
                                if (this.viewQueue.count > 0) rec = this.viewQueue.shift(), this.flags[rec] = -5 & this.flags[rec], 
                                view = !0; else {
                                    if (!(this.marginQueue.count > 0)) return -1;
                                    rec = this.marginQueue.shift(), this.flags[rec] = -9 & this.flags[rec];
                                }
                                if (1 === this.state[rec]) {
                                    if (0 !== this.wantCount[rec]) {
                                        this.state[rec] = 2;
                                        var flags = this.flags[rec];
                                        return this.flags[rec] = !0 === view ? 32 | flags : -33 & flags, rec;
                                    }
                                    this.setPending(rec, 0, !1);
                                }
                            }
                        }
                    }, {
                        key: "decoded",
                        value: function(rec, data, w, h, glPremultiply) {
                            if (2 === this.state[rec]) {
                                if (this.w[rec] = w, this.h[rec] = h, 0 === this.wantCount[rec]) return closeData(data), 
                                void this.setPending(rec, 0, !1);
                                this.data[rec] = data;
                                var flags = -3 & this.flags[rec];
                                this.flags[rec] = !0 === glPremultiply ? 2 | flags : flags, this.state[rec] = 3, 
                                this.uploadQueue.push(rec), this.requestFrame();
                            } else closeData(data);
                        }
                    }, {
                        key: "failed",
                        value: function(rec, error) {
                            var _this4 = this;
                            if (2 === this.state[rec]) {
                                this.errors[rec] = error;
                                var failures = this.retryCount[rec] + 1;
                                this.retryCount[rec] = failures;
                                var schedule = this.schedule;
                                if (failures <= this.maxRetryCount[rec] && null !== schedule) {
                                    this.setPending(rec, 5, !0);
                                    var token = this.retryToken[rec] + 1;
                                    return this.retryToken[rec] = token, schedule(function() {
                                        _this4.retry(rec, token);
                                    }, retryDelay(failures)), void this.onFailed(rec, !1);
                                }
                                this.setPending(rec, 5, !1), this.onFailed(rec, !0);
                            }
                        }
                    }, {
                        key: "uploadFailed",
                        value: function(rec, error) {
                            closeData(this.data[rec]), this.data[rec] = null, this.errors[rec] = error, this.setPending(rec, 5, !1), 
                            this.onFailed(rec, !0);
                        }
                    }, {
                        key: "failedForGood",
                        value: function(rec) {
                            return 5 === this.state[rec] && !(16 & this.flags[rec]);
                        }
                    }, {
                        key: "retry",
                        value: function(rec, token) {
                            this.retryToken[rec] === token && 5 === this.state[rec] && (this.errors[rec] = null, 
                            0 !== this.wantCount[rec] ? (this.state[rec] = 1, this.enqueue(rec, !!(32 & this.flags[rec])), 
                            this.onQueued()) : this.setPending(rec, 0, !1));
                        }
                    }, {
                        key: "peekDecoded",
                        value: function() {
                            for (var queue = this.uploadQueue; queue.count > 0; ) {
                                var rec = queue.first();
                                if (3 === this.state[rec]) {
                                    if (0 !== this.wantCount[rec]) return rec;
                                    queue.shift(), closeData(this.data[rec]), this.data[rec] = null, this.setPending(rec, 0, !1);
                                } else queue.shift();
                            }
                            return -1;
                        }
                    }, {
                        key: "releaseUnwantedDecoded",
                        value: function() {
                            for (var queue = this.uploadQueue, n = queue.count; n > 0; n--) {
                                var rec = queue.shift();
                                3 === this.state[rec] && (0 !== this.wantCount[rec] ? (this.onHeld(rec), queue.push(rec)) : (closeData(this.data[rec]), 
                                this.data[rec] = null, this.setPending(rec, 0, !1)));
                            }
                            return queue.count;
                        }
                    }, {
                        key: "nextDecoded",
                        value: function() {
                            var rec = this.peekDecoded();
                            return -1 !== rec && this.uploadQueue.shift(), rec;
                        }
                    }, {
                        key: "rotateDecoded",
                        value: function() {
                            var queue = this.uploadQueue;
                            queue.push(queue.shift());
                        }
                    }, {
                        key: "decodedCount",
                        get: function() {
                            return this.uploadQueue.count;
                        }
                    }, {
                        key: "uploaded",
                        value: function(rec, bytes) {
                            closeData(this.data[rec]), this.data[rec] = null, this.bytes[rec] = bytes, this.loadedCount++, 
                            this.loadedBytes += bytes, this.wantedCount++, this.wantedBytes += bytes, this.setPending(rec, 4, !1), 
                            this.onUploaded(rec);
                        }
                    }, {
                        key: "free",
                        value: function(rec) {
                            this.dropGpu(rec), this.state[rec] = 6, this.onFreed(rec);
                        }
                    }, {
                        key: "destroy",
                        value: function(rec) {
                            this.dropGpu(rec), this.listRemove(rec, 128);
                            var key = this.keys[rec];
                            null !== key && this.cache.get(key) === rec && this.cache.delete(key), closeData(this.data[rec]);
                            var parent = this.parent[rec];
                            if (-1 !== parent) {
                                var subs = this.subs[parent];
                                subs.splice(subs.indexOf(rec), 1), this.unref(parent);
                            }
                            var handle = this.handles[rec];
                            null !== handle && (handle.id = -1), this.data[rec] = null, this.props[rec] = null, 
                            this.keys[rec] = null, this.errors[rec] = null, this.subs[rec] = null, this.handles[rec] = null, 
                            this.state[rec] = 0, this.flags[rec] = 0, this.retryToken[rec] = this.retryToken[rec] + 1, 
                            this.gen[rec] = this.gen[rec] + 1, this.nextFree[rec] = this.freeHead, this.freeHead = rec;
                        }
                    }, {
                        key: "dropGpu",
                        value: function(rec) {
                            if (4 === this.state[rec]) {
                                null !== this.sink && this.sink.deleteTexture(rec);
                                var bytes = this.bytes[rec];
                                this.loadedCount--, this.loadedBytes -= bytes, this.wantCount[rec] > 0 && (this.wantedCount--, 
                                this.wantedBytes -= bytes), this.bytes[rec] = 0, this.listRemove(rec, 64);
                            }
                        }
                    }, {
                        key: "listAppend",
                        value: function(rec, list) {
                            var flags = this.flags[rec];
                            if (0 === (flags & list)) {
                                this.flags[rec] = flags | list;
                                var lru = 64 === list, prev = !0 === lru ? this.lruPrev : this.orphanPrev, next = !0 === lru ? this.lruNext : this.orphanNext, head = !0 === lru ? this.lruHead : this.orphanHead;
                                if (next[rec] = -1, -1 === head) return prev[rec] = rec, void (!0 === lru ? this.lruHead = rec : this.orphanHead = rec);
                                var tail = prev[head];
                                next[tail] = rec, prev[rec] = tail, prev[head] = rec;
                            }
                        }
                    }, {
                        key: "listRemove",
                        value: function(rec, list) {
                            var flags = this.flags[rec];
                            if (0 !== (flags & list)) {
                                this.flags[rec] = flags & ~list;
                                var lru = 64 === list, prev = !0 === lru ? this.lruPrev : this.orphanPrev, next = !0 === lru ? this.lruNext : this.orphanNext, head = !0 === lru ? this.lruHead : this.orphanHead, after = next[rec];
                                if (rec === head) return -1 !== after && (prev[after] = prev[rec]), void (!0 === lru ? this.lruHead = after : this.orphanHead = after);
                                var before = prev[rec];
                                next[before] = after, -1 === after ? prev[head] = before : prev[after] = before;
                            }
                        }
                    }, {
                        key: "addOwner",
                        value: function(rec, id) {
                            var s = this.nodes, head = this.ownerHead[rec];
                            s.i32[32 * id + 22] = -1, s.i32[32 * id + 21] = head, -1 !== head && (s.i32[32 * head + 22] = id), 
                            this.ownerHead[rec] = id;
                        }
                    }, {
                        key: "removeOwner",
                        value: function(rec, id) {
                            var s = this.nodes, prev = s.i32[32 * id + 22], next = s.i32[32 * id + 21];
                            -1 === prev ? this.ownerHead[rec] = next : s.i32[32 * prev + 21] = next, -1 !== next && (s.i32[32 * next + 22] = prev), 
                            s.i32[32 * id + 22] = -1, s.i32[32 * id + 21] = -1;
                        }
                    }, {
                        key: "setPending",
                        value: function(rec, state, pending) {
                            this.state[rec] = state;
                            var flags = this.flags[rec];
                            pending !== !!(16 & flags) && (this.flags[rec] = !0 === pending ? 16 | flags : -17 & flags, 
                            this.pending += !0 === pending ? 1 : -1);
                        }
                    } ]);
                }(), function(TextureType) {
                    TextureType[TextureType.generic = 0] = "generic", TextureType[TextureType.color = 1] = "color", 
                    TextureType[TextureType.image = 2] = "image", TextureType[TextureType.noise = 3] = "noise", 
                    TextureType[TextureType.subTexture = 4] = "subTexture";
                }(TextureType || _export("wt", TextureType = {})), TEXTURE_STATE_NAMES = [ "initial", "loading", "loading", "fetched", "loaded", "failed", "freed" ], 
                _export("Ct", Texture = function(_EventEmitter) {
                    function Texture(store, id, type, props) {
                        var _this5;
                        return (_this5 = _callSuper(this, Texture))._keep = !1, _this5.store = store, _this5.id = id, 
                        _this5._gen = store.gen[id], _this5.type = type, _this5.props = props, _this5;
                    }
                    return _inherits(Texture, _EventEmitter), _createClass(Texture, [ {
                        key: "state",
                        get: function() {
                            var id = liveRecord(this.store, this);
                            return -1 === id ? "freed" : TEXTURE_STATE_NAMES[this.store.state[id]];
                        }
                    }, {
                        key: "dimensions",
                        get: function() {
                            var store = this.store, id = liveRecord(store, this);
                            return -1 === id || 4 !== store.state[id] ? null : {
                                w: store.w[id],
                                h: store.h[id]
                            };
                        }
                    }, {
                        key: "error",
                        get: function() {
                            var id = liveRecord(this.store, this);
                            return -1 === id ? null : this.store.errors[id];
                        }
                    }, {
                        key: "preventCleanup",
                        get: function() {
                            var id = liveRecord(this.store, this);
                            return -1 === id ? this._keep : !!(1 & this.store.flags[id]);
                        },
                        set: function(v) {
                            this._keep = v;
                            var id = liveRecord(this.store, this);
                            -1 !== id && this.store.setPreventCleanup(id, v);
                        }
                    } ]);
                }(EventEmitter)), _export("bt", ImageTexture = function(_Texture) {
                    function ImageTexture() {
                        return _callSuper(this, ImageTexture, arguments);
                    }
                    return _inherits(ImageTexture, _Texture), _createClass(ImageTexture);
                }(Texture)), _export("St", SubTexture = function(_Texture2) {
                    function SubTexture() {
                        return _callSuper(this, SubTexture, arguments);
                    }
                    return _inherits(SubTexture, _Texture2), _createClass(SubTexture, [ {
                        key: "parentTexture",
                        get: function() {
                            return this.props.texture;
                        }
                    }, {
                        key: "state",
                        get: function() {
                            return this.props.texture.state;
                        }
                    }, {
                        key: "dimensions",
                        get: function() {
                            var p = this.props;
                            return "loaded" === p.texture.state ? {
                                w: p.w,
                                h: p.h
                            } : null;
                        }
                    }, {
                        key: "error",
                        get: function() {
                            return this.props.texture.error;
                        }
                    }, {
                        key: "preventCleanup",
                        get: function() {
                            return this.props.texture.preventCleanup;
                        },
                        set: function(v) {
                            this.props.texture.preventCleanup = v;
                        }
                    } ]);
                }(Texture)), _export("yt", ColorTexture = function(_Texture3) {
                    function ColorTexture() {
                        return _callSuper(this, ColorTexture, arguments);
                    }
                    return _inherits(ColorTexture, _Texture3), _createClass(ColorTexture, [ {
                        key: "color",
                        get: function() {
                            return this.props.color;
                        }
                    } ]);
                }(Texture)), _export("xt", NoiseTexture = function(_Texture4) {
                    function NoiseTexture() {
                        return _callSuper(this, NoiseTexture, arguments);
                    }
                    return _inherits(NoiseTexture, _Texture4), _createClass(NoiseTexture);
                }(Texture)), ENABLE_INSPECTOR = "undefined" != typeof __enableInspector__ && __enableInspector__, 
                EMIT_BOUNDS_EVENTS = "undefined" != typeof __emitBoundsEvents__ && __emitBoundsEvents__, 
                same = function(a, b) {
                    return a === b || !0 === Number.isNaN(a) && !0 === Number.isNaN(b);
                }, NodeStore = function() {
                    return _createClass(function() {
                        var capacity = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1024;
                        this.capacity = 0, this.liveCount = 0, this.generation = 0, this.handles = [], this.shaderRefs = [], 
                        this.textureRefs = [], this.srcs = [], this.textureOptions = [], this.clipMargins = [], 
                        this.extras = [], this.data = [], this.animations = [], this.params = [], this.texts = [], 
                        this.childArrays = [], this.preloads = new Int32Array(16), this.preloadCount = 0, 
                        this.anyDirty = !1, this.onDirty = null, this.writes = 0, this.deferFree = !1, this.freeHead = -1, 
                        this.nextUid = 1, this.quarantineHead = -1, this.quarantineTail = -1, this.resize(capacity < 1 ? 1 : capacity);
                    }, [ {
                        key: "resize",
                        value: function(capacity) {
                            var a, b, old = this.capacity;
                            this.f64 = (a = this.f64, b = new Float64Array(32 * capacity), void 0 !== a && b.set(a), 
                            b);
                            var buffer = new ArrayBuffer(32 * capacity * 4), i32 = new Int32Array(buffer);
                            void 0 !== this.i32 && i32.set(this.i32), this.i32 = i32, this.u32 = new Uint32Array(buffer), 
                            this.f32 = new Float32Array(buffer), this.prev = growI32$2(this.prev, capacity), 
                            this.next = growI32$2(this.next, capacity), growSide(this.handles, capacity), growSide(this.shaderRefs, capacity), 
                            growSide(this.textureRefs, capacity), growSide(this.srcs, capacity), growSide(this.textureOptions, capacity), 
                            growSide(this.clipMargins, capacity), growSide(this.extras, capacity), growSide(this.data, capacity), 
                            growSide(this.animations, capacity), growSide(this.params, capacity), growSide(this.texts, capacity), 
                            growSide(this.childArrays, capacity);
                            for (var i = old; i < capacity - 1; i++) i32[32 * i + 27] = i + 1;
                            i32[32 * (capacity - 1) + 27] = this.freeHead, this.freeHead = old, this.capacity = capacity, 
                            this.generation++;
                        }
                    }, {
                        key: "alloc",
                        value: function() {
                            -1 === this.freeHead && this.resize(2 * this.capacity);
                            var id = this.freeHead, i32 = this.i32, u32 = this.u32, f32 = this.f32, o = 32 * id;
                            this.freeHead = i32[o + 27], this.liveCount++, u32[o + 0] = 207, u32[o + 1] = 0, 
                            i32[o + 2] = this.nextUid++, i32[o + 3] = -1, i32[o + 4] = -1, i32[o + 5] = -1, 
                            this.prev[id] = -1, this.next[id] = -1, i32[o + 6] = 0, u32[o + 11] = 0, u32[o + 12] = 4294967295, 
                            i32[o + 13] = 0, i32[o + 14] = -1, u32[o + 15] = 4294967295, u32[o + 16] = 4294967295, 
                            u32[o + 17] = 4294967295, u32[o + 18] = 4294967295, u32[o + 19] = 0, i32[o + 20] = -1, 
                            i32[o + 21] = -1, i32[o + 22] = -1, f32[o + 23] = 0, f32[o + 24] = 0, f32[o + 25] = 1, 
                            f32[o + 26] = 1;
                            var f = this.f64, p = 32 * id;
                            return f[p + 0] = 0, f[p + 1] = 0, f[p + 2] = 0, f[p + 3] = 0, f[p + 4] = 1, f[p + 5] = 0, 
                            f[p + 14] = 0, f[p + 15] = 0, f[p + 16] = 0, f[p + 17] = 0, f[p + 18] = 1, f[p + 19] = 1, 
                            f[p + 20] = 1, f[p + 21] = 0, f[p + 22] = 0, f[p + 23] = 0, f[p + 24] = .5, f[p + 25] = .5, 
                            id;
                        }
                    }, {
                        key: "queuePreload",
                        value: function(id) {
                            var state = this.u32[32 * id + 1];
                            if (!(2097152 & state)) {
                                this.u32[32 * id + 1] = 2097152 | state;
                                var n = this.preloadCount;
                                if (n === this.preloads.length) {
                                    var grown = new Int32Array(2 * n);
                                    grown.set(this.preloads), this.preloads = grown;
                                }
                                this.preloads[n] = id, this.preloadCount = n + 1;
                            }
                        }
                    }, {
                        key: "free",
                        value: function(id) {
                            var i32 = this.i32, u32 = this.u32, o = 32 * id;
                            if (i32[o + 2] = 0, u32[o + 0] = 0, u32[o + 1] = 0, i32[o + 3] = -1, i32[o + 4] = -1, 
                            i32[o + 5] = -1, this.prev[id] = -1, this.next[id] = -1, this.handles[id] = null, 
                            this.shaderRefs[id] = null, this.textureRefs[id] = null, this.srcs[id] = null, this.textureOptions[id] = null, 
                            this.clipMargins[id] = null, this.extras[id] = null, this.data[id] = null, this.animations[id] = null, 
                            this.params[id] = null, this.texts[id] = null, this.childArrays[id] = null, this.liveCount--, 
                            !0 === this.deferFree) return -1 === this.quarantineHead && (this.quarantineTail = id), 
                            i32[o + 27] = this.quarantineHead, void (this.quarantineHead = id);
                            i32[o + 27] = this.freeHead, this.freeHead = id;
                        }
                    }, {
                        key: "endDeferFree",
                        value: function() {
                            this.deferFree = !1;
                            var head = this.quarantineHead;
                            -1 !== head && (this.i32[32 * this.quarantineTail + 27] = this.freeHead, this.freeHead = head, 
                            this.quarantineHead = -1, this.quarantineTail = -1);
                        }
                    }, {
                        key: "markDirty",
                        value: function(id, bits) {
                            if (-1 !== id) {
                                var u32 = this.u32, i32 = this.i32, o = 32 * id;
                                u32[o + 0] = u32[o + 0] | bits, this.writes++;
                                for (var p = i32[o + 3]; -1 !== p; ) {
                                    var q = 32 * p, d = u32[q + 0];
                                    if (512 & d) break;
                                    u32[q + 0] = 512 | d, p = i32[q + 3];
                                }
                                if (!1 === this.anyDirty) {
                                    this.anyDirty = !0;
                                    var onDirty = this.onDirty;
                                    null !== onDirty && onDirty();
                                }
                            }
                        }
                    }, {
                        key: "appendChild",
                        value: function(parent, child) {
                            for (var f64 = this.f64, prev = this.prev, z = f64[32 * child + 5], after = this.i32[32 * parent + 5]; -1 !== after && f64[32 * after + 5] > z; ) after = prev[after];
                            this.insertAfter(parent, child, after);
                        }
                    }, {
                        key: "insertBefore",
                        value: function(parent, child, before) {
                            if (-1 !== before) {
                                for (var f64 = this.f64, prev = this.prev, next = this.next, z = f64[32 * child + 5], after = prev[before]; -1 !== after && f64[32 * after + 5] > z; ) after = prev[after];
                                for (var following = -1 === after ? this.i32[32 * parent + 4] : next[after]; -1 !== following && f64[32 * following + 5] < z; ) after = following, 
                                following = next[following];
                                this.insertAfter(parent, child, after);
                            } else this.appendChild(parent, child);
                        }
                    }, {
                        key: "insertAfter",
                        value: function(parent, child, after) {
                            this.childArrays[parent] = null;
                            var i32 = this.i32, prevs = this.prev, nexts = this.next, p = 32 * parent;
                            i32[32 * child + 3] = parent, prevs[child] = after;
                            var next = -1 === after ? i32[p + 4] : nexts[after];
                            nexts[child] = next, -1 === after ? i32[p + 4] = child : nexts[after] = child, -1 === next ? i32[p + 5] = child : prevs[next] = child;
                        }
                    }, {
                        key: "unlink",
                        value: function(child) {
                            var i32 = this.i32, c = 32 * child, parent = i32[c + 3];
                            if (-1 !== parent) {
                                this.childArrays[parent] = null;
                                var prevs = this.prev, nexts = this.next, p = 32 * parent, prev = prevs[child], next = nexts[child];
                                -1 === prev ? i32[p + 4] = next : nexts[prev] = next, -1 === next ? i32[p + 5] = prev : prevs[next] = prev, 
                                i32[c + 3] = -1, prevs[child] = -1, nexts[child] = -1;
                            }
                        }
                    }, {
                        key: "applySize",
                        value: function(id, w, h) {
                            var f64 = this.f64, o = 32 * id;
                            f64[o + 0] === w && f64[o + 1] === h || (f64[o + 0] = w, f64[o + 1] = h, this.markDirty(id, 33));
                        }
                    }, {
                        key: "applySizeInVisit",
                        value: function(id, w, h) {
                            var f64 = this.f64, o = 32 * id;
                            return !0 === same(f64[o + 0], w) && !0 === same(f64[o + 1], h) ? 0 : (f64[o + 0] = w, 
                            f64[o + 1] = h, 33);
                        }
                    }, {
                        key: "setZIndex",
                        value: function(child, z) {
                            !1 === Number.isFinite(z) && (z = 0);
                            var zi = 32 * child + 5;
                            if (this.f64[zi] !== z) {
                                var parent = this.i32[32 * child + 3];
                                -1 !== parent ? (this.unlink(child), this.f64[zi] = z, this.appendChild(parent, child), 
                                this.markDirty(child, 0)) : this.f64[zi] = z;
                            }
                        }
                    } ]);
                }(), hasOwn$1 = Object.prototype.hasOwnProperty, bezierCurve = function(a, b, c, d) {
                    var xc = 3 * a, xb = 3 * (c - a) - xc, yc = 3 * b, yb = 3 * (d - b) - yc;
                    return makeCurve(1, 1 - xc - xb, xb, xc, 1 - yc - yb, yb, yc);
                }, curves = {
                    linear: (makeCurve = function(kind, xa, xb, xc, ya, yb, yc) {
                        return {
                            kind: kind,
                            xa: xa,
                            xb: xb,
                            xc: xc,
                            ya: ya,
                            yb: yb,
                            yc: yc
                        };
                    })(0, 0, 0, 0, 0, 0, 0),
                    "step-start": makeCurve(2, 0, 0, 0, 0, 0, 0),
                    "step-end": makeCurve(3, 0, 0, 0, 0, 0, 0),
                    ease: bezierCurve(.25, .1, .25, 1),
                    "ease-in": bezierCurve(.42, 0, 1, 1),
                    "ease-out": bezierCurve(0, 0, .58, 1),
                    "ease-in-out": bezierCurve(.42, 0, .58, 1),
                    "ease-in-sine": bezierCurve(.12, 0, .39, 0),
                    "ease-out-sine": bezierCurve(.61, 1, .88, 1),
                    "ease-in-out-sine": bezierCurve(.37, 0, .63, 1),
                    "ease-in-cubic": bezierCurve(.32, 0, .67, 0),
                    "ease-out-cubic": bezierCurve(.33, 1, .68, 1),
                    "ease-in-out-cubic": bezierCurve(.65, 0, .35, 1),
                    "ease-in-circ": bezierCurve(.55, 0, 1, .45),
                    "ease-out-circ": bezierCurve(0, .55, .45, 1),
                    "ease-in-out-circ": bezierCurve(.85, 0, .15, 1),
                    "ease-in-back": bezierCurve(.36, 0, .66, -.56),
                    "ease-out-back": bezierCurve(.34, 1.56, .64, 1),
                    "ease-in-out-back": bezierCurve(.68, -.6, .32, 1.6)
                }, beziers = new Map, resolveBezier = function(str) {
                    var entry = beziers.get(str);
                    if (void 0 !== entry) return entry;
                    var match = str.match(/-?\d*\.?\d+/g);
                    return null === match || match.length < 4 ? (console.warn("Unknown cubic-bezier timing: " + str), 
                    null) : (beziers.size >= 32 && beziers.delete(beziers.keys().next().value), entry = {
                        curve: bezierCurve(parseFloat(match[0]), parseFloat(match[1]), parseFloat(match[2]), parseFloat(match[3])),
                        timing: null
                    }, beziers.set(str, entry), entry);
                }, resolveEasing = function(str) {
                    if (!0 === hasOwn$1.call(curves, str)) return curves[str];
                    if (0 === str.indexOf("cubic-bezier")) {
                        var entry = resolveBezier(str);
                        return null === entry ? null : entry.curve;
                    }
                    return console.warn("Unknown timing function: " + str), null;
                }, colorTrack = function(field) {
                    return {
                        array: "u32",
                        stride: 32,
                        field: field,
                        bits: 4
                    };
                }, FAST = {
                    x: (f64Track = function(field, bits) {
                        return {
                            array: "f64",
                            stride: 32,
                            field: field,
                            bits: bits
                        };
                    })(16, 1),
                    y: f64Track(17, 1),
                    w: f64Track(0, 33),
                    h: f64Track(1, 33),
                    alpha: f64Track(18, 2),
                    scaleX: f64Track(19, 1),
                    scaleY: f64Track(20, 1),
                    rotation: f64Track(21, 1),
                    mountX: f64Track(22, 1),
                    mountY: f64Track(23, 1),
                    pivotX: f64Track(24, 1),
                    pivotY: f64Track(25, 1),
                    colorTl: colorTrack(15),
                    colorTr: colorTrack(16),
                    colorBl: colorTrack(17),
                    colorBr: colorTrack(18)
                }, GROUPS = {
                    scale: [ "scaleX", "scaleY" ],
                    mount: [ "mountX", "mountY" ],
                    pivot: [ "pivotX", "pivotY" ],
                    color: [ "colorTl", "colorTr", "colorBl", "colorBr" ],
                    colorTop: [ "colorTl", "colorTr" ],
                    colorBottom: [ "colorBl", "colorBr" ],
                    colorLeft: [ "colorTl", "colorBl" ],
                    colorRight: [ "colorTr", "colorBr" ]
                }, noWaiter = function() {}, Animation = function() {
                    return _createClass(function(manager, node, props, settings) {
                        var _settings$duration, _settings$delay, _settings$loop, _settings$repeat, _settings$repeatDelay, _settings$stopMethod, _settings$easing, _settings$adaptiveDur;
                        this.state = "stopped", this.progress = 0, this.reversed = !1, this.easeKind = 4, 
                        this.xa = 0, this.xb = 0, this.xc = 0, this.ya = 0, this.yb = 0, this.yc = 0, this.eased = 0, 
                        this.lastRunTime = 0, this.index = -1, this.stepFrame = -1, this.rawStarts = null, 
                        this.rawTargets = null, this.stoppedResolve = null, this.stoppedPromise = null, 
                        this.manager = manager, this.node = node, this.duration = null !== (_settings$duration = settings.duration) && void 0 !== _settings$duration ? _settings$duration : 0, 
                        this.delay = null !== (_settings$delay = settings.delay) && void 0 !== _settings$delay ? _settings$delay : 0, 
                        this.delayFor = this.delay, this.loop = null !== (_settings$loop = settings.loop) && void 0 !== _settings$loop && _settings$loop, 
                        this.repeat = null !== (_settings$repeat = settings.repeat) && void 0 !== _settings$repeat ? _settings$repeat : 0, 
                        this.repeatDelay = null !== (_settings$repeatDelay = settings.repeatDelay) && void 0 !== _settings$repeatDelay ? _settings$repeatDelay : 0, 
                        this.repeatsTotal = (this.repeat > 1 ? this.repeat : 1) - 1, this.repeatsLeft = this.repeatsTotal, 
                        this.stopMethod = null !== (_settings$stopMethod = settings.stopMethod) && void 0 !== _settings$stopMethod && _settings$stopMethod, 
                        this.reverses = "reverse" === this.stopMethod;
                        var easing = null !== (_settings$easing = settings.easing) && void 0 !== _settings$easing ? _settings$easing : "linear";
                        "string" == typeof easing ? (this.timing = null, this.setBuiltInEasing(easing)) : this.timing = easing;
                        var adaptiveDuration = null !== (_settings$adaptiveDur = settings.adaptiveDuration) && void 0 !== _settings$adaptiveDur && _settings$adaptiveDur;
                        this.lastRunTime = !0 === adaptiveDuration ? manager.clock() : 0;
                        var current = shaderPropsOf(node), count = 0, shaderCount = 0;
                        for (var key in props) if ("shaderProps" !== key) {
                            var group = GROUPS[key];
                            count += void 0 === group ? 1 : group.length;
                        } else null !== current && (shaderCount = definedCount(props[key])), count += shaderCount;
                        this.count = count, this.starts = new Float64Array(count), this.targets = new Float64Array(count), 
                        this.ints = new Uint16Array(4 * count), this.refs = new Array(4 * count), this.shaderTracks = 0 === shaderCount ? null : new Uint8Array(count);
                        var i = 0, store = node.renderer.nodes;
                        this.gen = store.generation;
                        var isText = -1 !== node.id && !!(128 & store.u32[32 * node.id + 1]);
                        for (var _key5 in props) if ("shaderProps" !== _key5) {
                            var value = props[_key5], _group = GROUPS[_key5];
                            if (void 0 === _group) this.fillTrack(i++, store, _key5, value, isText); else for (var g = 0; g < _group.length; g++) this.fillTrack(i++, store, _group[g], value, isText);
                        } else null !== current && (i = this.fillShaderTracks(i, current, props[_key5], colorPropsOf(node.shader)));
                    }, [ {
                        key: "setBuiltInEasing",
                        value: function(name) {
                            var curve = resolveEasing(name);
                            null !== curve ? (this.easeKind = curve.kind, this.xa = curve.xa, this.xb = curve.xb, 
                            this.xc = curve.xc, this.ya = curve.ya, this.yb = curve.yb, this.yc = curve.yc) : this.easeKind = 0;
                        }
                    }, {
                        key: "fillTrack",
                        value: function(i, store, key, value, isText) {
                            var fast = FAST[key];
                            if (!0 == (void 0 !== fast && !(!0 === isText && ("w" === key || "h" === key)))) {
                                var arr = store[fast.array], o = 4 * i, ints = this.ints, refs = this.refs;
                                return refs[o + 0] = arr, refs[o + 1] = fast.array, refs[o + 2] = null, refs[o + 3] = null, 
                                ints[o + 1] = fast.stride, ints[o + 2] = fast.field, ints[o + 0] = fast.bits, ints[o + 3] = -1 !== key.indexOf("color") ? 1 : 0, 
                                this.starts[i] = arr[this.node.id * fast.stride + fast.field] || 0, void (this.targets[i] = value);
                            }
                            var target = this.node;
                            this.setSetterTrack(i, target, key, target[key] || 0, value);
                        }
                    }, {
                        key: "fillShaderTracks",
                        value: function(i, current, sp, colorProps) {
                            var at = i;
                            for (var k in sp) {
                                var value = sp[k];
                                if (void 0 !== value) {
                                    var start = current[k];
                                    "number" == typeof value ? (this.shaderTracks[at] = 1, this.setSetterTrack(at, null, k, (!0 === Array.isArray(start) ? start[0] : start) || 0, value), 
                                    null !== colorProps && -1 !== colorProps.indexOf(k) && (this.ints[4 * at + 3] = 1), 
                                    at++) : (this.shaderTracks[at] = 2, this.setRawTrack(at++, k, start, value));
                                }
                            }
                            return at;
                        }
                    }, {
                        key: "setRawTrack",
                        value: function(i, key, start, target) {
                            null === this.rawStarts && (this.rawStarts = new Array(this.count), this.rawTargets = new Array(this.count)), 
                            this.rawStarts[i] = !0 === Array.isArray(start) ? start.slice() : start, this.rawTargets[i] = target, 
                            this.setSetterTrack(i, null, key, 0, 0);
                        }
                    }, {
                        key: "setSetterTrack",
                        value: function(i, target, key, start, value) {
                            var o = 4 * i, refs = this.refs;
                            refs[o + 0] = null, refs[o + 1] = null, refs[o + 2] = target, refs[o + 3] = key, 
                            this.ints[o + 0] = 0, this.ints[o + 3] = -1 !== key.indexOf("color") ? 1 : 0, this.starts[i] = start, 
                            this.targets[i] = value;
                        }
                    }, {
                        key: "start",
                        value: function() {
                            return "running" !== this.state && "scheduled" !== this.state && (null === this.stoppedResolve && (this.stoppedResolve = noWaiter), 
                            this.manager.register(this), this.state = "scheduled"), this;
                        }
                    }, {
                        key: "stop",
                        value: function() {
                            this.manager.unregister(this);
                            var resolve = this.stoppedResolve;
                            return this.stoppedResolve = null, this.stoppedPromise = null, this.progress = 0, 
                            this.delayFor = this.delay, this.repeatsLeft = this.repeatsTotal, !0 === this.reversed && this.reverse(), 
                            this.stopMethod = !0 === this.reverses && "reverse", this.state = "stopped", null !== resolve && resolve(), 
                            this;
                        }
                    }, {
                        key: "pause",
                        value: function() {
                            return this.manager.unregister(this), this.state = "paused", this;
                        }
                    }, {
                        key: "restore",
                        value: function() {
                            return this.stop(), this.eased = 0, this.write(), this;
                        }
                    }, {
                        key: "waitUntilStopped",
                        value: function() {
                            var _this6 = this;
                            return null === this.stoppedResolve ? Promise.resolve() : (null === this.stoppedPromise && (this.stoppedPromise = new Promise(function(resolve) {
                                _this6.stoppedResolve = resolve;
                            })), this.stoppedPromise);
                        }
                    }, {
                        key: "rebind",
                        value: function(store) {
                            if (store.generation !== this.gen) {
                                for (var end = 4 * this.count, refs = this.refs, o = 0; o < end; o += 4) {
                                    var name = refs[o + 1];
                                    null !== name && (refs[o + 0] = store[name]);
                                }
                                this.gen = store.generation;
                            }
                        }
                    }, {
                        key: "retarget",
                        value: function(target) {
                            this.rebind(this.node.renderer.nodes);
                            for (var id = this.node.id, n = this.count, ints = this.ints, refs = this.refs, i = 0; i < n; i++) {
                                var o = 4 * i, arr = refs[o + 0], object = refs[o + 2];
                                null !== arr ? this.starts[i] = arr[id * ints[o + 1] + ints[o + 2]] || 0 : null !== object && (this.starts[i] = object[refs[o + 3]] || 0), 
                                this.targets[i] = target;
                            }
                            this.reversed = !1, this.stopMethod = !0 === this.reverses && "reverse", this.repeatsLeft = this.repeatsTotal;
                        }
                    }, {
                        key: "step",
                        value: function(dt) {
                            var remaining = dt;
                            if (this.delayFor > 0) {
                                if (this.delayFor -= remaining, this.delayFor >= 0) return;
                                remaining = -this.delayFor, this.delayFor = 0;
                            }
                            "scheduled" === this.state && (this.state = "running");
                            var duration = this.duration;
                            0 === duration ? this.progress = 1 : this.progress += remaining / duration;
                            var finished = !1;
                            if (this.progress >= 1 && (!0 === this.loop ? (this.progress = this.progress % 1, 
                            this.delayFor = this.delay, "reverse" === this.stopMethod && this.reverse()) : (this.progress = 1, 
                            finished = !0)), 0 === this.easeKind ? this.eased = this.progress : this.ease(), 
                            this.write(), !1 !== finished) return "reverse" === this.stopMethod ? (this.reverse(), 
                            this.progress = 0, void (this.delayFor = this.delay)) : this.repeatsLeft > 0 ? (this.repeatsLeft--, 
                            this.progress = 0, this.delayFor = this.repeatDelay, void (!0 === this.reverses && (this.reverse(), 
                            this.stopMethod = "reverse"))) : void this.stop();
                        }
                    }, {
                        key: "ease",
                        value: function() {
                            var kind = this.easeKind, time = this.progress;
                            if (4 !== kind) if (2 !== kind) if (3 !== kind) if (time >= 1) this.eased = 1; else if (time <= 0) this.eased = 0; else {
                                for (var xa = this.xa, xb = this.xb, xc = this.xc, t = .5, solved = !1, it = 0; it < 20; it++) {
                                    var dx = time - t * (t * (t * xa + xb) + xc);
                                    if (dx > -1e-8 && dx < 1e-8) {
                                        solved = !0;
                                        break;
                                    }
                                    var slope = t * (t * (3 * xa) + 2 * xb) + xc;
                                    if (slope > -1e-10 && slope < 1e-10) break;
                                    t += dx / slope;
                                }
                                if (!1 === solved) for (var lo = 0, hi = 1, _it = 0; _it < 20; _it++) {
                                    var _dx = time - (t = .5 * (lo + hi)) * (t * (t * xa + xb) + xc);
                                    if (_dx > -1e-8 && _dx < 1e-8) break;
                                    _dx < 0 ? hi = t : lo = t;
                                }
                                this.eased = t * (t * (t * this.ya + this.yb) + this.yc);
                            } else this.eased = 1 === time ? 1 : 0; else this.eased = 1; else this.eased = this.timing(time);
                        }
                    }, {
                        key: "write",
                        value: function() {
                            if (-1 !== this.node.id) {
                                var store = this.node.renderer.nodes;
                                this.rebind(store);
                                for (var progress = this.progress, eased = this.eased, id = this.node.id, n = this.count, starts = this.starts, targets = this.targets, ints = this.ints, refs = this.refs, shaderTracks = this.shaderTracks, shaderProps = null === shaderTracks ? null : shaderPropsOf(this.node), bitsOr = 0, i = 0; i < n; i++) {
                                    var o = 4 * i, shaderTrack = null === shaderTracks ? 0 : shaderTracks[i];
                                    if (2 !== shaderTrack) {
                                        var start = starts[i], target = targets[i], v = void 0;
                                        v = 1 === progress ? target : 0 === progress ? start : 1 === ints[o + 3] ? mergeColorProgress(start, target, eased) : start + (target - start) * eased;
                                        var arr = refs[o + 0];
                                        null !== arr ? (arr[id * ints[o + 1] + ints[o + 2]] = v, bitsOr |= ints[o + 0]) : 1 === shaderTrack ? null !== shaderProps && (shaderProps[refs[o + 3]] = v) : refs[o + 2][refs[o + 3]] = v;
                                    } else null === shaderProps || 1 !== progress && 0 !== progress || (shaderProps[refs[o + 3]] = 1 === progress ? this.rawTargets[i] : this.rawStarts[i]);
                                }
                                0 !== bitsOr && store.markDirty(id, bitsOr);
                            }
                        }
                    }, {
                        key: "reverse",
                        value: function() {
                            for (var n = this.count, i = 0; i < n; i++) {
                                var t = this.starts[i];
                                this.starts[i] = this.targets[i], this.targets[i] = t;
                            }
                            var rawStarts = this.rawStarts;
                            if (null !== rawStarts) for (var rawTargets = this.rawTargets, _i16 = 0; _i16 < n; _i16++) {
                                var _t2 = rawStarts[_i16];
                                rawStarts[_i16] = rawTargets[_i16], rawTargets[_i16] = _t2;
                            }
                            this.reversed = !this.reversed, !1 === this.loop && (this.stopMethod = !1);
                        }
                    } ]);
                }(), EMPTY_TEXTURE_OPTIONS = Object.freeze({}), _export("vt", Node = function(_EventEmitter2) {
                    function Node(renderer, id) {
                        var _this7;
                        return (_this7 = _callSuper(this, Node)).renderer = renderer, _this7.id = id, _this7._uid = renderer.nodes.i32[32 * id + 2], 
                        renderer.nodes.handles[id] = _this7, _this7;
                    }
                    return _inherits(Node, _EventEmitter2), _createClass(Node, [ {
                        key: "uid",
                        get: function() {
                            return this._uid;
                        }
                    }, {
                        key: "destroyed",
                        get: function() {
                            return -1 === this.id;
                        }
                    }, {
                        key: "stage",
                        get: function() {
                            return this.renderer;
                        }
                    }, {
                        key: "x",
                        get: function() {
                            return this.renderer.nodes.f64[32 * this.id + 16];
                        },
                        set: function(v) {
                            setF(this, 16, v, 1);
                        }
                    }, {
                        key: "y",
                        get: function() {
                            return this.renderer.nodes.f64[32 * this.id + 17];
                        },
                        set: function(v) {
                            setF(this, 17, v, 1);
                        }
                    }, {
                        key: "w",
                        get: function() {
                            return this.renderer.nodes.f64[32 * this.id + 0];
                        },
                        set: function(v) {
                            setF(this, 0, v, 33);
                        }
                    }, {
                        key: "h",
                        get: function() {
                            return this.renderer.nodes.f64[32 * this.id + 1];
                        },
                        set: function(v) {
                            setF(this, 1, v, 33);
                        }
                    }, {
                        key: "width",
                        get: function() {
                            return this.w;
                        }
                    }, {
                        key: "height",
                        get: function() {
                            return this.h;
                        }
                    }, {
                        key: "alpha",
                        get: function() {
                            return this.renderer.nodes.f64[32 * this.id + 18];
                        },
                        set: function(v) {
                            setF(this, 18, v, 2);
                        }
                    }, {
                        key: "rotation",
                        get: function() {
                            return this.renderer.nodes.f64[32 * this.id + 21];
                        },
                        set: function(v) {
                            setF(this, 21, v, 1);
                        }
                    }, {
                        key: "scaleX",
                        get: function() {
                            return this.renderer.nodes.f64[32 * this.id + 19];
                        },
                        set: function(v) {
                            setF(this, 19, v, 1);
                        }
                    }, {
                        key: "scaleY",
                        get: function() {
                            return this.renderer.nodes.f64[32 * this.id + 20];
                        },
                        set: function(v) {
                            setF(this, 20, v, 1);
                        }
                    }, {
                        key: "scale",
                        get: function() {
                            return this.renderer.nodes.f64[32 * this.id + 19];
                        },
                        set: function(v) {
                            null !== v && (this.scaleX = v, this.scaleY = v);
                        }
                    }, {
                        key: "mountX",
                        get: function() {
                            return this.renderer.nodes.f64[32 * this.id + 22];
                        },
                        set: function(v) {
                            setF(this, 22, v, 1);
                        }
                    }, {
                        key: "mountY",
                        get: function() {
                            return this.renderer.nodes.f64[32 * this.id + 23];
                        },
                        set: function(v) {
                            setF(this, 23, v, 1);
                        }
                    }, {
                        key: "mount",
                        get: function() {
                            return this.mountX;
                        },
                        set: function(v) {
                            this.mountX = v, this.mountY = v;
                        }
                    }, {
                        key: "pivotX",
                        get: function() {
                            return this.renderer.nodes.f64[32 * this.id + 24];
                        },
                        set: function(v) {
                            setF(this, 24, v, 1);
                        }
                    }, {
                        key: "pivotY",
                        get: function() {
                            return this.renderer.nodes.f64[32 * this.id + 25];
                        },
                        set: function(v) {
                            setF(this, 25, v, 1);
                        }
                    }, {
                        key: "pivot",
                        get: function() {
                            return this.pivotX;
                        },
                        set: function(v) {
                            this.pivotX = v, this.pivotY = v;
                        }
                    }, {
                        key: "color",
                        get: function() {
                            return this.renderer.nodes.u32[32 * this.id + 15];
                        },
                        set: function(v) {
                            setC(this, 15, v), setC(this, 16, v), setC(this, 17, v), setC(this, 18, v);
                        }
                    }, {
                        key: "colorTop",
                        get: function() {
                            return this.renderer.nodes.u32[32 * this.id + 15];
                        },
                        set: function(v) {
                            setC(this, 15, v), setC(this, 16, v);
                        }
                    }, {
                        key: "colorBottom",
                        get: function() {
                            return this.renderer.nodes.u32[32 * this.id + 17];
                        },
                        set: function(v) {
                            setC(this, 17, v), setC(this, 18, v);
                        }
                    }, {
                        key: "colorLeft",
                        get: function() {
                            return this.renderer.nodes.u32[32 * this.id + 15];
                        },
                        set: function(v) {
                            setC(this, 15, v), setC(this, 17, v);
                        }
                    }, {
                        key: "colorRight",
                        get: function() {
                            return this.renderer.nodes.u32[32 * this.id + 16];
                        },
                        set: function(v) {
                            setC(this, 16, v), setC(this, 18, v);
                        }
                    }, {
                        key: "colorTl",
                        get: function() {
                            return this.renderer.nodes.u32[32 * this.id + 15];
                        },
                        set: function(v) {
                            setC(this, 15, v);
                        }
                    }, {
                        key: "colorTr",
                        get: function() {
                            return this.renderer.nodes.u32[32 * this.id + 16];
                        },
                        set: function(v) {
                            setC(this, 16, v);
                        }
                    }, {
                        key: "colorBl",
                        get: function() {
                            return this.renderer.nodes.u32[32 * this.id + 17];
                        },
                        set: function(v) {
                            setC(this, 17, v);
                        }
                    }, {
                        key: "colorBr",
                        get: function() {
                            return this.renderer.nodes.u32[32 * this.id + 18];
                        },
                        set: function(v) {
                            setC(this, 18, v);
                        }
                    }, {
                        key: "placeholderColor",
                        get: function() {
                            return this.renderer.nodes.u32[32 * this.id + 19];
                        },
                        set: function(v) {
                            var id = this.id, s = this.renderer.nodes;
                            if (-1 !== id) {
                                var uv = v >>> 0;
                                s.u32[32 * id + 19] !== uv && (s.u32[32 * id + 19] = uv, s.markDirty(id, 68));
                            }
                        }
                    }, {
                        key: "zIndex",
                        get: function() {
                            return this.renderer.nodes.f64[32 * this.id + 5];
                        },
                        set: function(v) {
                            -1 !== this.id && this.renderer.nodes.setZIndex(this.id, v);
                        }
                    }, {
                        key: "parent",
                        get: function() {
                            var id = this.id;
                            if (-1 === id) return null;
                            var s = this.renderer.nodes, p = s.i32[32 * id + 3];
                            return -1 === p ? null : s.handles[p];
                        },
                        set: function(p) {
                            var id = this.id;
                            if (-1 !== id) {
                                var s = this.renderer.nodes, old = s.i32[32 * id + 3], next = null === p ? -1 : p.id;
                                old !== next && (-1 !== old && (s.unlink(id), s.markDirty(old, 0)), -1 !== next && s.appendChild(next, id), 
                                s.markDirty(id, 192));
                            }
                        }
                    }, {
                        key: "insertBefore",
                        value: function(child, before) {
                            var id = this.id, c = child.id;
                            if (-1 !== id && -1 !== c) {
                                var s = this.renderer.nodes, b = null === before ? -1 : before.id;
                                b === c && (b = s.next[c]), -1 !== b && s.i32[32 * b + 3] !== id && (b = -1);
                                var old = s.i32[32 * c + 3];
                                s.unlink(c), s.insertBefore(id, c, b), old !== id ? (s.markDirty(old, 0), s.markDirty(c, 192)) : s.markDirty(c, 0);
                            }
                        }
                    }, {
                        key: "children",
                        get: function() {
                            var id = this.id;
                            if (-1 === id) return [];
                            var s = this.renderer.nodes, cached = s.childArrays[id];
                            if (null !== cached) return cached;
                            for (var out = [], c = s.i32[32 * id + 4]; -1 !== c; ) out.push(s.handles[c]), c = s.next[c];
                            return s.childArrays[id] = out, out;
                        }
                    }, {
                        key: "clipping",
                        get: function() {
                            var id = this.id;
                            if (-1 === id) return !1;
                            var s = this.renderer.nodes, margins = s.clipMargins[id];
                            return null !== margins ? margins : !!(4 & s.u32[32 * id + 1]);
                        },
                        set: function(v) {
                            var id = this.id;
                            if (-1 !== id) {
                                var s = this.renderer.nodes, clips = !1 !== v, margins = !0 === Array.isArray(v) ? v : null, state = s.u32[32 * id + 1];
                                !!(4 & state) === clips && s.clipMargins[id] === margins || (s.u32[32 * id + 1] = !0 === clips ? 4 | state : -5 & state, 
                                s.clipMargins[id] = margins, s.markDirty(id, 8));
                            }
                        }
                    }, {
                        key: "ignoreParentAlpha",
                        get: function() {
                            return !!(512 & this.renderer.nodes.u32[32 * this.id + 1]);
                        },
                        set: function(v) {
                            !function(n, bit, on, dirty) {
                                var id = n.id;
                                if (-1 !== id) {
                                    var s = n.renderer.nodes, state = s.u32[32 * id + 1], next = !0 === on ? state | bit : state & ~bit;
                                    next !== state && (s.u32[32 * id + 1] = next, s.markDirty(id, dirty));
                                }
                            }(this, 512, v, 2);
                        }
                    }, {
                        key: "autosize",
                        get: function() {
                            return !!(1024 & this.renderer.nodes.u32[32 * this.id + 1]);
                        },
                        set: function(v) {
                            var id = this.id;
                            if (-1 !== id) {
                                var on = !0 === v, s = this.renderer.nodes, state = s.u32[32 * id + 1];
                                !!(1024 & state) !== on && (s.u32[32 * id + 1] = !0 === on ? 4195328 | state : -4195329 & state, 
                                s.markDirty(id, 16));
                            }
                        }
                    }, {
                        key: "data",
                        get: function() {
                            var id = this.id;
                            if (-1 === id) return null;
                            var s = this.renderer.nodes, d = s.data[id];
                            return null === d && (d = {}, s.data[id] = d), d;
                        },
                        set: function(v) {
                            void 0 === v && (v = null), -1 !== this.id && (this.renderer.nodes.data[this.id] = v);
                        }
                    }, {
                        key: "src",
                        get: function() {
                            var id = this.id;
                            return -1 === id ? null : this.renderer.nodes.srcs[id];
                        },
                        set: function(v) {
                            void 0 === v && (v = null);
                            var id = this.id, s = this.renderer.nodes;
                            -1 !== id && s.srcs[id] !== v && (s.srcs[id] = v, null === v || "" === v ? (s.textureRefs[id] = null, 
                            s.u32[32 * id + 1] = -1048577 & s.u32[32 * id + 1]) : s.u32[32 * id + 1] = 1048576 | s.u32[32 * id + 1], 
                            textureDirty(this, id, 16));
                        }
                    }, {
                        key: "texture",
                        get: function() {
                            var id = this.id;
                            return -1 === id ? null : this.renderer.nodes.textureRefs[id];
                        },
                        set: function(v) {
                            void 0 === v && (v = null);
                            var id = this.id;
                            if (-1 !== id) {
                                var s = this.renderer.nodes, state = s.u32[32 * id + 1];
                                (s.textureRefs[id] !== v || 1048576 & state) && (s.textureRefs[id] = v, s.u32[32 * id + 1] = -1048577 & state, 
                                textureDirty(this, id, 16));
                            }
                        }
                    }, {
                        key: "textureOptions",
                        get: function() {
                            var id = this.id;
                            if (-1 === id) return EMPTY_TEXTURE_OPTIONS;
                            var v = this.renderer.nodes.textureOptions[id];
                            return null === v ? EMPTY_TEXTURE_OPTIONS : v;
                        },
                        set: function(v) {
                            void 0 === v && (v = null);
                            var id = this.id;
                            if (-1 !== id) {
                                var s = this.renderer.nodes;
                                s.textureOptions[id] = v;
                                var old = s.u32[32 * id + 1], state = -6145 & old;
                                if (null !== v) {
                                    !0 === v.preload && (state |= 2048);
                                    var mode = v.resizeMode;
                                    null != mode && "contain" === mode.type && (state |= 4096);
                                }
                                s.u32[32 * id + 1] = state, s.markDirty(id, 4096 & (old | state) ? 17 : 16), 2048 & (old | state) && s.queuePreload(id);
                            }
                        }
                    }, {
                        key: "srcX",
                        get: function() {
                            var e = extrasOf(this, !1);
                            return null === e ? void 0 : e.srcX;
                        },
                        set: function(v) {
                            var id = this.id;
                            if (-1 !== id) {
                                var e = extrasOf(this, !1);
                                null !== e && e.srcX === v || null === e && void 0 === v || (extrasOf(this, !0).srcX = v, 
                                textureDirty(this, id, 16));
                            }
                        }
                    }, {
                        key: "srcY",
                        get: function() {
                            var e = extrasOf(this, !1);
                            return null === e ? void 0 : e.srcY;
                        },
                        set: function(v) {
                            var id = this.id;
                            if (-1 !== id) {
                                var e = extrasOf(this, !1);
                                null !== e && e.srcY === v || null === e && void 0 === v || (extrasOf(this, !0).srcY = v, 
                                textureDirty(this, id, 16));
                            }
                        }
                    }, {
                        key: "srcWidth",
                        get: function() {
                            var e = extrasOf(this, !1);
                            return null === e ? void 0 : e.srcWidth;
                        },
                        set: function(v) {
                            var id = this.id;
                            if (-1 !== id) {
                                var e = extrasOf(this, !1);
                                null !== e && e.srcWidth === v || null === e && void 0 === v || (extrasOf(this, !0).srcWidth = v, 
                                textureDirty(this, id, 16));
                            }
                        }
                    }, {
                        key: "srcHeight",
                        get: function() {
                            var e = extrasOf(this, !1);
                            return null === e ? void 0 : e.srcHeight;
                        },
                        set: function(v) {
                            var id = this.id;
                            if (-1 !== id) {
                                var e = extrasOf(this, !1);
                                null !== e && e.srcHeight === v || null === e && void 0 === v || (extrasOf(this, !0).srcHeight = v, 
                                textureDirty(this, id, 16));
                            }
                        }
                    }, {
                        key: "imageType",
                        get: function() {
                            var e = extrasOf(this, !1);
                            return null === e || void 0 === e.imageType ? null : e.imageType;
                        },
                        set: function(v) {
                            var id = this.id;
                            if (-1 !== id) {
                                var e = extrasOf(this, !1);
                                null !== e && e.imageType === v || null === e && void 0 === v || (extrasOf(this, !0).imageType = v, 
                                textureDirty(this, id, 16));
                            }
                        }
                    }, {
                        key: "componentName",
                        get: function() {
                            var e = extrasOf(this, !1);
                            return null === e ? void 0 : e.componentName;
                        },
                        set: function(v) {
                            if (-1 !== this.id) {
                                var e = extrasOf(this, !1);
                                null !== e && e.componentName === v || null === e && void 0 === v || (extrasOf(this, !0).componentName = v);
                            }
                        }
                    }, {
                        key: "componentLocation",
                        get: function() {
                            var e = extrasOf(this, !1);
                            return null === e ? void 0 : e.componentLocation;
                        },
                        set: function(v) {
                            if (-1 !== this.id) {
                                var e = extrasOf(this, !1);
                                null !== e && e.componentLocation === v || null === e && void 0 === v || (extrasOf(this, !0).componentLocation = v);
                            }
                        }
                    }, {
                        key: "shader",
                        get: function() {
                            var id = this.id;
                            return -1 === id ? null : this.renderer.nodes.shaderRefs[id];
                        },
                        set: function(v) {
                            void 0 === v && (v = null);
                            var id = this.id, s = this.renderer.nodes;
                            -1 !== id && s.shaderRefs[id] !== v && (s.shaderRefs[id] = v, s.markDirty(id, 96));
                        }
                    }, {
                        key: "absX",
                        get: function() {
                            var id = this.id;
                            if (-1 === id) return 0;
                            var s = this.renderer.nodes, own = s.f64[32 * id + 16] - s.f64[32 * id + 0] * s.f64[32 * id + 22], p = this.parent;
                            return own + (null === p ? 0 : p.absX || s.f64[32 * p.id + 2] || 0);
                        }
                    }, {
                        key: "absY",
                        get: function() {
                            var id = this.id;
                            if (-1 === id) return 0;
                            var s = this.renderer.nodes, own = s.f64[32 * id + 17] - s.f64[32 * id + 1] * s.f64[32 * id + 23], p = this.parent;
                            return own + (null === p ? 0 : p.absY || s.f64[32 * p.id + 3] || 0);
                        }
                    }, {
                        key: "renderState",
                        get: function() {
                            var id = this.id;
                            return -1 === id ? 0 : renderStateOf(visibilityOf(this.renderer.nodes.u32[32 * id + 1]));
                        }
                    }, {
                        key: "clippingRect",
                        get: function() {
                            var id = this.id, rec = -1 === id ? 0 : this.renderer.nodes.i32[32 * id + 6];
                            if (0 === rec) return {
                                valid: !1,
                                x: 0,
                                y: 0,
                                w: 0,
                                h: 0
                            };
                            var c = this.renderer.clips;
                            return {
                                valid: 1 === c.valid[rec],
                                x: c.x[rec],
                                y: c.y[rec],
                                w: c.w[rec],
                                h: c.h[rec]
                            };
                        }
                    }, {
                        key: "animate",
                        value: function(props) {
                            var settings = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return new Animation(this.renderer.animationManager, this, props, settings);
                        }
                    }, {
                        key: "animateProp",
                        value: function(name, value) {
                            var settings = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, id = this.id, s = this.renderer.nodes, map = -1 === id ? null : s.animations[id];
                            null === map && (map = {}, -1 !== id && (s.animations[id] = map));
                            var existing = map[name];
                            if (void 0 !== existing) {
                                if (existing.settings === settings) {
                                    var c = existing.controller;
                                    if (c.retarget(value), c.progress = 0, !0 === settings.adaptiveDuration) {
                                        var _settings$duration, now = this.renderer.animationManager.clock(), rawElapsed = now - c.lastRunTime, elapsed = rawElapsed < 0 ? 0 : rawElapsed;
                                        c.lastRunTime = now;
                                        var duration = null !== (_settings$duration = settings.duration) && void 0 !== _settings$duration ? _settings$duration : c.duration;
                                        c.duration = elapsed < duration ? elapsed : duration;
                                    }
                                    return c.start();
                                }
                                existing.controller.stop();
                            }
                            var controller = new Animation(this.renderer.animationManager, this, _defineProperty({}, name, value), settings);
                            return map[name] = {
                                controller: controller,
                                settings: settings
                            }, controller.start();
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            -1 !== this.id && this.renderer.destroyNode(this);
                        }
                    } ]);
                }(EventEmitter)), DEFAULTS = new (TextState = _createClass(function() {
                    this.text = "", this.fontFamily = "sans-serif", this.fontSize = 16, this.fontStyle = "normal", 
                    this.lineHeight = 1.2, this.textAlign = "left", this.verticalAlign = "top", this.contain = "none", 
                    this.maxWidth = 0, this.maxHeight = 0, this.maxLines = 0, this.overflowSuffix = "...", 
                    this.wordBreak = "break-word", this.letterSpacing = 0, this.offsetY = 0, this.forceLoad = !1, 
                    this.layout = null, this.font = null, this.stale = !0, this.waiting = null, this.forced = !1, 
                    this.boxW = 0, this.boxH = 0, this.boxX = 0, this.boxY = 0;
                })), _export("_t", TextNode$1 = function(_Node) {
                    function TextNode$1(renderer, id) {
                        return _callSuper(this, TextNode$1, [ renderer, id ]);
                    }
                    return _inherits(TextNode$1, _Node), _createClass(TextNode$1, [ {
                        key: "w",
                        get: function() {
                            return this.renderer.nodes.f64[32 * this.id + 0];
                        },
                        set: function(v) {
                            this.maxWidth = v;
                        }
                    }, {
                        key: "h",
                        get: function() {
                            return this.renderer.nodes.f64[32 * this.id + 1];
                        },
                        set: function(v) {
                            this.maxHeight = v;
                        }
                    }, {
                        key: "text",
                        get: function() {
                            return stateOf(this).text;
                        },
                        set: function(v) {
                            var t = writable(this);
                            void 0 === v && (v = ""), null !== t && t.text !== v && (t.text = v, relayout(this, t));
                        }
                    }, {
                        key: "fontFamily",
                        get: function() {
                            return stateOf(this).fontFamily;
                        },
                        set: function(v) {
                            var t = writable(this);
                            void 0 === v && (v = "sans-serif"), null !== t && t.fontFamily !== v && (t.fontFamily = v, 
                            relayout(this, t));
                        }
                    }, {
                        key: "fontSize",
                        get: function() {
                            return stateOf(this).fontSize;
                        },
                        set: function(v) {
                            var t = writable(this);
                            void 0 === v && (v = 16), null !== t && t.fontSize !== v && (t.fontSize = v, relayout(this, t));
                        }
                    }, {
                        key: "fontStyle",
                        get: function() {
                            return stateOf(this).fontStyle;
                        },
                        set: function(v) {
                            var t = writable(this);
                            void 0 === v && (v = "normal"), null !== t && t.fontStyle !== v && (t.fontStyle = v, 
                            relayout(this, t));
                        }
                    }, {
                        key: "lineHeight",
                        get: function() {
                            return stateOf(this).lineHeight;
                        },
                        set: function(v) {
                            var t = writable(this);
                            void 0 === v && (v = 1.2), null !== t && t.lineHeight !== v && (t.lineHeight = v, 
                            relayout(this, t));
                        }
                    }, {
                        key: "textAlign",
                        get: function() {
                            return stateOf(this).textAlign;
                        },
                        set: function(v) {
                            var t = writable(this);
                            void 0 === v && (v = "left"), null !== t && t.textAlign !== v && (t.textAlign = v, 
                            relayout(this, t));
                        }
                    }, {
                        key: "maxWidth",
                        get: function() {
                            return stateOf(this).maxWidth;
                        },
                        set: function(v) {
                            var t = writable(this);
                            void 0 === v && (v = 0), null !== t && t.maxWidth !== v && (t.maxWidth = v, relayout(this, t));
                        }
                    }, {
                        key: "maxHeight",
                        get: function() {
                            return stateOf(this).maxHeight;
                        },
                        set: function(v) {
                            var t = writable(this);
                            void 0 === v && (v = 0), null !== t && t.maxHeight !== v && (t.maxHeight = v, relayout(this, t));
                        }
                    }, {
                        key: "maxLines",
                        get: function() {
                            return stateOf(this).maxLines;
                        },
                        set: function(v) {
                            var t = writable(this);
                            void 0 === v && (v = 0), null !== t && t.maxLines !== v && (t.maxLines = v, relayout(this, t));
                        }
                    }, {
                        key: "overflowSuffix",
                        get: function() {
                            return stateOf(this).overflowSuffix;
                        },
                        set: function(v) {
                            var t = writable(this);
                            void 0 === v && (v = "..."), null !== t && t.overflowSuffix !== v && (t.overflowSuffix = v, 
                            relayout(this, t));
                        }
                    }, {
                        key: "wordBreak",
                        get: function() {
                            return stateOf(this).wordBreak;
                        },
                        set: function(v) {
                            var t = writable(this);
                            void 0 === v && (v = "break-word"), null !== t && t.wordBreak !== v && (t.wordBreak = v, 
                            relayout(this, t));
                        }
                    }, {
                        key: "letterSpacing",
                        get: function() {
                            return stateOf(this).letterSpacing;
                        },
                        set: function(v) {
                            var t = writable(this);
                            void 0 === v && (v = 0), null !== t && t.letterSpacing !== v && (t.letterSpacing = v, 
                            relayout(this, t));
                        }
                    }, {
                        key: "contain",
                        get: function() {
                            return stateOf(this).contain;
                        },
                        set: function(v) {
                            var t = writable(this);
                            void 0 === v && (v = "none"), null !== t && t.contain !== v && (t.contain = v, rebox(this));
                        }
                    }, {
                        key: "verticalAlign",
                        get: function() {
                            return stateOf(this).verticalAlign;
                        },
                        set: function(v) {
                            var t = writable(this);
                            void 0 === v && (v = "top"), null !== t && t.verticalAlign !== v && (t.verticalAlign = v, 
                            rebox(this));
                        }
                    }, {
                        key: "offsetY",
                        get: function() {
                            return stateOf(this).offsetY;
                        },
                        set: function(v) {
                            var t = writable(this);
                            void 0 === v && (v = 0), null !== t && t.offsetY !== v && (t.offsetY = v, rebox(this));
                        }
                    }, {
                        key: "forceLoad",
                        get: function() {
                            return stateOf(this).forceLoad;
                        },
                        set: function(v) {
                            var t = writable(this), on = !0 === v;
                            null !== t && t.forceLoad !== on && (t.forceLoad = on, this.renderer.textNodes.force(this.id, on), 
                            !0 === on && rebox(this));
                        }
                    }, {
                        key: "measure",
                        value: function() {
                            var id = this.id;
                            return -1 !== id && this.renderer.textNodes.measure(id);
                        }
                    } ]);
                }(Node)), orNumber = function(v, d) {
                    return 0 === v || !0 === Number.isNaN(v) ? d : v;
                }, orString = function(v, d) {
                    return "" === v ? d : v;
                }, scratch = new Int32Array(256), depth = 0, ClipStore = function() {
                    return _createClass(function() {
                        var capacity = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 64;
                        this.capacity = 0, this.freeHead = -1, this.resize(capacity < 2 ? 2 : capacity);
                    }, [ {
                        key: "resize",
                        value: function(capacity) {
                            var a, b, old = this.capacity;
                            this.x = growF64(this.x, capacity), this.y = growF64(this.y, capacity), this.w = growF64(this.w, capacity), 
                            this.h = growF64(this.h, capacity), this.sx = growI32$1(this.sx, capacity), this.sy = growI32$1(this.sy, capacity), 
                            this.sw = growI32$1(this.sw, capacity), this.sh = growI32$1(this.sh, capacity), 
                            this.valid = (a = this.valid, b = new Uint8Array(capacity), void 0 !== a && b.set(a), 
                            b), this.owner = growI32$1(this.owner, capacity), this.nextFree = growI32$1(this.nextFree, capacity);
                            for (var first = 0 === old ? 1 : old, i = first; i < capacity - 1; i++) this.nextFree[i] = i + 1;
                            this.nextFree[capacity - 1] = this.freeHead, this.freeHead = first;
                            for (var _i17 = first; _i17 < capacity; _i17++) this.owner[_i17] = -1;
                            0 === old && (this.owner[0] = -1), this.capacity = capacity;
                        }
                    }, {
                        key: "alloc",
                        value: function(owner) {
                            -1 === this.freeHead && this.resize(2 * this.capacity);
                            var id = this.freeHead;
                            return this.freeHead = this.nextFree[id], this.valid[id] = 0, this.owner[id] = owner, 
                            id;
                        }
                    }, {
                        key: "free",
                        value: function(id) {
                            this.valid[id] = 0, this.owner[id] = -1, this.nextFree[id] = this.freeHead, this.freeHead = id;
                        }
                    }, {
                        key: "set",
                        value: function(id, x, y, w, h, pixelRatio, canvasH) {
                            this.x[id] = x, this.y[id] = y, this.w[id] = w, this.h[id] = h, this.valid[id] = 1, 
                            this.updateScissor(id, pixelRatio, canvasH);
                        }
                    }, {
                        key: "invalidate",
                        value: function(id) {
                            this.valid[id] = 0;
                        }
                    }, {
                        key: "intersect",
                        value: function(id, other, pixelRatio, canvasH) {
                            var ax = this.x[id], ay = this.y[id], bx = this.x[other], by = this.y[other], x = ax > bx ? ax : bx, y = ay > by ? ay : by, ar = ax + this.w[id], br = bx + this.w[other], ab = ay + this.h[id], bb = by + this.h[other], w = (ar < br ? ar : br) - x, h = (ab < bb ? ab : bb) - y;
                            w > 0 && h > 0 ? (this.x[id] = x, this.y[id] = y, this.w[id] = w, this.h[id] = h) : (this.x[id] = 0, 
                            this.y[id] = 0, this.w[id] = 0, this.h[id] = 0), this.updateScissor(id, pixelRatio, canvasH);
                        }
                    }, {
                        key: "updateScissor",
                        value: function(id, pixelRatio, canvasH) {
                            var sh = Math.round(this.h[id] * pixelRatio);
                            this.sx[id] = Math.round(this.x[id] * pixelRatio), this.sw[id] = Math.round(this.w[id] * pixelRatio), 
                            this.sh[id] = sh, this.sy[id] = Math.round(canvasH - sh - this.y[id] * pixelRatio);
                        }
                    } ]);
                }(), ScenePass = function() {
                    return _createClass(function(nodes, clips, view, stream, ops, hooks, flush) {
                        this.visited = 0, this.updated = 0, this.emitted = 0, this.textEmitted = 0, this.stack = new Int32Array(1024), 
                        this.maskStack = new Uint32Array(1024), this.sweepStack = new Int32Array(1024), 
                        this.pendingText = new Int32Array(64), this.pendingCount = 0, this.nodes = nodes, 
                        this.clips = clips, this.view = view, this.stream = stream, this.ops = ops, this.hooks = hooks, 
                        this.flush = flush;
                    }, [ {
                        key: "writesDuringPass",
                        get: function() {
                            return this.nodes.writes;
                        }
                    }, {
                        key: "quads",
                        get: function() {
                            return this.emitted - this.textEmitted;
                        }
                    }, {
                        key: "run",
                        value: function(root) {
                            var s = this.nodes;
                            if (this.visited = 0, this.updated = 0, this.emitted = 0, this.textEmitted = 0, 
                            this.pendingCount = 0, s.writes = 0, s.anyDirty = !1, -1 !== root) {
                                s.deferFree = !0;
                                var stack = this.stack, masks = this.maskStack;
                                stack[0] = root, masks[0] = 0;
                                for (var sp = 1; sp > 0; ) {
                                    var id = stack[--sp], o = 32 * id;
                                    if (0 !== s.i32[o + 2]) {
                                        var inherit = masks[sp];
                                        this.visited++;
                                        var childMask = this.visit(id, inherit);
                                        if (!(childMask < 0)) {
                                            var c = s.i32[o + 5];
                                            if (-1 !== c) {
                                                var u32 = s.u32, state = u32[o + 1];
                                                8192 & state && (childMask = 7, u32[o + 1] = -8193 & state);
                                                for (var prev = s.prev; -1 !== c; ) sp === stack.length && (this.growStack(), stack = this.stack, 
                                                masks = this.maskStack), stack[sp] = c, masks[sp] = childMask, sp++, c = prev[c];
                                            }
                                        }
                                    }
                                }
                                this.flushText(), s.endDeferFree();
                            }
                        }
                    }, {
                        key: "growStack",
                        value: function() {
                            var n = 2 * this.stack.length, stack = new Int32Array(n);
                            stack.set(this.stack);
                            var masks = new Uint32Array(n);
                            masks.set(this.maskStack), this.stack = stack, this.maskStack = masks;
                        }
                    }, {
                        key: "growSweepStack",
                        value: function() {
                            var stack = new Int32Array(2 * this.sweepStack.length);
                            stack.set(this.sweepStack), this.sweepStack = stack;
                        }
                    }, {
                        key: "visit",
                        value: function(id, inherit) {
                            var s = this.nodes, o = 32 * id, fo = 32 * id, d = s.u32[o + 0], state = s.u32[o + 1];
                            if (0 === d && 0 === inherit) return (49152 & state) >>> 14 == 1 || 0 === s.f64[fo + 4] ? -1 : (8 & state && this.emit(id, state), 
                            0);
                            s.u32[o + 0] = 0, this.updated++;
                            var parent = s.i32[o + 3];
                            128 & d && (inherit = 7);
                            var pending = 0, parked = 0;
                            if (256 & d) {
                                var raised = this.hooks.layoutText(id);
                                if (0 === s.i32[o + 2]) return -1;
                                raised < 0 ? pending |= 256 : d |= 64 | raised, state = s.u32[o + 1];
                            }
                            32 & d && (d |= 64);
                            var childMask = 0, needVis = !1;
                            if ((1 & d || 1 & inherit) && (!function(s, id, parent) {
                                var f = s.f64, u32 = s.u32, o = 32 * id, io = 32 * id, w = f[o + 0], h = f[o + 1], rotation = f[o + 21], sx = f[o + 19], sy = f[o + 20], state = u32[io + 1], contain = 4096 == (4224 & state) && f[o + 14] > 0 && f[o + 15] > 0, transformed = 0 !== rotation || 1 !== sx || 1 !== sy, simple = !1 === transformed && !1 === contain, mw = w, mh = h, box = null;
                                67108864 & state && (mw = (box = s.texts[id]).boxW, mh = box.boxH);
                                var tx = f[o + 16] - f[o + 22] * mw, ty = f[o + 17] - f[o + 23] * mh, la = 1, lb = 0, lc = 0, ld = 1;
                                if (!0 === transformed) {
                                    var px = f[o + 24] * mw, py = f[o + 25] * mh, cos = 1, sin = 0;
                                    0 !== rotation && (cos = Math.cos(rotation), sin = Math.sin(rotation)), tx = (la = cos * sx) * -px + (lb = (0 - sin) * sy) * -py + (tx + px), 
                                    ty = (lc = sin * sx) * -px + (ld = cos * sy) * -py + (ty + py);
                                }
                                if (!0 === contain) {
                                    var mode = s.textureOptions[id].resizeMode, tw = f[o + 14], th = f[o + 15], ex = 0, ey = 0, rsx = 1, rsy = 1;
                                    if (tw / th > w / h) {
                                        var _mode$y, scaledTxHeight = th * (w / tw);
                                        ey = (h - scaledTxHeight) * (null !== (_mode$y = mode.y) && void 0 !== _mode$y ? _mode$y : .5), 
                                        rsy = scaledTxHeight / h;
                                    } else {
                                        var _mode$x, scaledTxWidth = tw * (h / th);
                                        ex = (w - scaledTxWidth) * (null !== (_mode$x = mode.x) && void 0 !== _mode$x ? _mode$x : .5), 
                                        rsx = scaledTxWidth / w;
                                    }
                                    tx = la * ex + lb * ey + tx, ty = lc * ex + ld * ey + ty, la *= rsx, lb *= rsy, 
                                    lc *= rsx, ld *= rsy;
                                }
                                if (null !== box) {
                                    var bx = box.boxX, by = box.boxY;
                                    tx = la * bx + lb * by + tx, ty = lc * bx + ld * by + ty;
                                }
                                var wa, wb, wc, wd, wtx, wty, writeLinear, wasWorldTranslate = !!(2 & state), parentTranslate = -1 === parent || !!(2 & u32[32 * parent + 1]), po = 32 * parent;
                                if (!0 === simple && !0 === parentTranslate) wa = 1, wb = 0, wc = 0, wd = 1, -1 === parent ? (wtx = tx, 
                                wty = ty) : (wtx = f[po + 2] + tx, wty = f[po + 3] + ty), state |= 2, writeLinear = !1 === wasWorldTranslate; else {
                                    var pa = 1, pb = 0, pc = 0, pd = 1, ptx = 0, pty = 0;
                                    -1 !== parent && (pa = f[po + 6], pb = f[po + 8], pc = f[po + 9], pd = f[po + 7], 
                                    ptx = f[po + 2], pty = f[po + 3]), 1 === la && 1 === ld && 0 === lb && 0 === lc ? (wa = pa, 
                                    wb = pb, wc = pc, wd = pd) : (wa = pa * la + pb * lc, wb = pa * lb + pb * ld, wc = pc * la + pd * lc, 
                                    wd = pc * lb + pd * ld), wtx = pa * tx + pb * ty + ptx, wty = pc * tx + pd * ty + pty, 
                                    state &= -3, writeLinear = !0;
                                }
                                if (!0 === writeLinear && (f[o + 6] = wa, f[o + 8] = wb, f[o + 9] = wc, f[o + 7] = wd), 
                                f[o + 2] = wtx, f[o + 3] = wty, 0 === wb && 0 === wc) f[o + 10] = wtx, f[o + 11] = wty, 
                                f[o + 12] = wtx + w * wa, f[o + 13] = wty + h * wd; else {
                                    var x2 = wtx + w * wa, y2 = wty + w * wc, x3 = x2 + h * wb, y3 = y2 + h * wd, x4 = wtx + h * wb, y4 = wty + h * wd;
                                    f[o + 10] = Math.min(wtx, x2, x3, x4), f[o + 11] = Math.min(wty, y2, y3, y4), f[o + 12] = Math.max(wtx, x2, x3, x4), 
                                    f[o + 13] = Math.max(wty, y2, y3, y4);
                                }
                                !0 === simple ? state |= 1 : state &= -2, u32[io + 1] = state;
                            }(s, id, parent), state = s.u32[o + 1], childMask |= 1, needVis = !0), 2 & d || 2 & inherit) {
                                var a = s.f64[fo + 18], wa = -1 === parent || 512 & state ? a : s.f64[32 * parent + 4] * a;
                                wa < 0 ? wa = 0 : wa > 1 && (wa = 1);
                                var prev = s.f64[fo + 4];
                                wa !== prev && (s.f64[fo + 4] = wa, childMask |= 2, d |= 4, 0 === wa != (0 === prev) && (d |= 64));
                            }
                            var clips = !!(4 & state);
                            (8 & d || 4 & inherit || !0 === clips && 1 & childMask) && (this.updateClip(id, parent, clips), 
                            childMask |= 4, needVis = !0);
                            var vis = (state & ST_VIS_MASK) >>> 14, next = vis;
                            if (!0 !== needVis && 0 !== vis || (next = this.classify(id, parent)), next !== vis) {
                                if (1 !== next && 16 & d && (state |= 65536), s.u32[o + 1] = withVisibility(state, next), 
                                this.hooks.onVisibility(id, vis, next), 1 === next && 0 !== s.i32[o + 2] && this.sweepOut(id), 
                                0 === s.i32[o + 2]) return -1;
                                state = s.u32[o + 1], vis = next, d |= 64, 1 !== next && 196608 & state && (65536 & state && (d |= 16), 
                                131072 & state && (d |= 32), state &= -196609, s.u32[o + 1] = state);
                            }
                            var hidden = 0 === s.f64[fo + 4];
                            if (!1 === hidden && 25165824 & state && (state &= -25165825, !0 === EMIT_BOUNDS_EVENTS && (d |= 64), 
                            1 !== vis && 16 & d && (state |= 65536), s.u32[o + 1] = state, 1 !== vis)) {
                                if (this.hooks.onShown(id), 0 === s.i32[o + 2]) return -1;
                                65536 & (state = s.u32[o + 1]) && (d |= 16, state &= -65537, s.u32[o + 1] = state);
                            }
                            if (16 & d) if (1 === vis) parked |= 65536; else {
                                if (d |= 68, this.hooks.resolveTexture(id), 0 === s.i32[o + 2]) return -1;
                                state = s.u32[o + 1];
                            }
                            if (32 & d) if (1 === vis) parked |= 131072; else {
                                if (this.hooks.packShader(id), 0 === s.i32[o + 2]) return -1;
                                state = s.u32[o + 1];
                            }
                            4 & d && (96 & (state ^ (state = this.premultiply(id, state))) && (d |= 64));
                            if (64 & d) {
                                var _before = state;
                                if (state = this.deriveRenderable(id, state, vis), !0 === EMIT_BOUNDS_EVENTS && 8 & (_before ^ state)) {
                                    if (s.u32[o + 1] = state, this.hooks.onRenderable(id, !!(8 & state)), 0 === s.i32[o + 2]) return -1;
                                    state = s.u32[o + 1];
                                }
                            }
                            if (!0 === hidden && !(8388608 & state)) {
                                if (s.u32[o + 1] = state | parked | 8388608, this.sweepHidden(id), 0 === s.i32[o + 2]) return -1;
                                state = s.u32[o + 1];
                            }
                            return 1 === vis || !0 === hidden ? (s.u32[o + 1] = state | parked | 8192, s.u32[o + 0] = s.u32[o + 0] | 512 & d | pending, 
                            -1) : (s.u32[o + 1] = state, s.u32[o + 0] = s.u32[o + 0] | pending, 8 & state && this.emit(id, state), 
                            childMask);
                        }
                    }, {
                        key: "sweepOut",
                        value: function(root) {
                            var s = this.nodes, stack = this.sweepStack;
                            stack[0] = root;
                            for (var sp = 1; sp > 0; ) {
                                var id = stack[--sp], o = 32 * id;
                                if (id === root || !1 !== this.markOut(id)) for (var c = s.i32[o + 5]; -1 !== c; ) sp === stack.length && (this.growSweepStack(), 
                                stack = this.sweepStack), stack[sp] = c, sp++, c = s.prev[c];
                            }
                        }
                    }, {
                        key: "sweepHidden",
                        value: function(root) {
                            var s = this.nodes, stack = this.sweepStack;
                            stack[0] = root;
                            for (var sp = 1; sp > 0; ) {
                                var id = stack[--sp], o = 32 * id;
                                if (0 !== s.i32[o + 2]) {
                                    var state = s.u32[o + 1], vis = (state & ST_VIS_MASK) >>> 14;
                                    if (1 !== vis && !(id !== root && 8388608 & state)) {
                                        0 === vis || 16777216 & state || !0 !== this.hooks.onHidden(id) || 0 === s.i32[o + 2] || (s.u32[o + 1] = 16777216 | s.u32[o + 1]);
                                        for (var c = s.i32[o + 5]; -1 !== c; ) sp === stack.length && (this.growSweepStack(), 
                                        stack = this.sweepStack), stack[sp] = c, sp++, c = s.prev[c];
                                    }
                                }
                            }
                        }
                    }, {
                        key: "markOut",
                        value: function(id) {
                            var s = this.nodes, o = 32 * id;
                            if (0 === s.i32[o + 2]) return !1;
                            var state = s.u32[o + 1], prev = (state & ST_VIS_MASK) >>> 14;
                            return 1 !== prev && (s.u32[o + 1] = withVisibility(-9 & state, 1), this.hooks.onVisibility(id, prev, 1), 
                            !0 === EMIT_BOUNDS_EVENTS && 8 & state && 0 !== s.i32[o + 2] && this.hooks.onRenderable(id, !1), 
                            !0);
                        }
                    }, {
                        key: "updateClip",
                        value: function(id, parent, clips) {
                            var s = this.nodes, c = this.clips, i32 = s.i32, f64 = s.f64, fo = 32 * id, ci = 32 * id + 6, parentClip = -1 === parent ? 0 : i32[32 * parent + 6], rotated = 0 !== f64[fo + 8] || 0 !== f64[fo + 9], rec = i32[ci], owned = 0 !== rec && c.owner[rec] === id;
                            if (!1 === clips || !0 === rotated) return !0 === owned && c.free(rec), void (i32[ci] = parentClip);
                            !1 === owned && (rec = c.alloc(id), i32[ci] = rec);
                            var mT = 0, mR = 0, mB = 0, mL = 0, margins = s.clipMargins[id];
                            null !== margins && (mT = margins[0], mR = margins[1], mB = margins[2], mL = margins[3]);
                            var view = this.view;
                            c.set(rec, f64[fo + 2] - mL, f64[fo + 3] - mT, f64[fo + 0] * f64[fo + 6] + mL + mR, f64[fo + 1] * f64[fo + 7] + mT + mB, view.pixelRatio, view.canvasH), 
                            0 !== parentClip && 1 === c.valid[parentClip] && c.intersect(rec, parentClip, view.pixelRatio, view.canvasH);
                        }
                    }, {
                        key: "classify",
                        value: function(id, parent) {
                            var s = this.nodes, c = this.clips, view = this.view, x1 = 0, y1 = 0, x2 = view.w, y2 = view.h, rec = s.i32[32 * id + 6], f64 = s.f64, fo = 32 * id;
                            if (0 !== rec && 1 === c.valid[rec]) {
                                var cx = c.x[rec], cy = c.y[rec];
                                cx > x1 && (x1 = cx), cy > y1 && (y1 = cy);
                                var cr = cx + c.w[rec], cb = cy + c.h[rec];
                                cr < x2 && (x2 = cr), cb < y2 && (y2 = cb);
                            }
                            var bx0 = f64[fo + 10], by0 = f64[fo + 11], bx1 = f64[fo + 12], by1 = f64[fo + 13];
                            if (bx0 <= x2 && bx1 >= x1 && by0 <= y2 && by1 >= y1) return 3;
                            var m = view.margin;
                            return bx0 <= x2 + m[1] && bx1 >= x1 - m[3] && by0 <= y2 + m[2] && by1 >= y1 - m[0] ? 2 : -1 === parent || 0 !== f64[fo + 0] && 0 !== f64[fo + 1] ? 1 : (s.u32[32 * parent + 1] & ST_VIS_MASK) >>> 14;
                        }
                    }, {
                        key: "premultiply",
                        value: function(id, state) {
                            var s = this.nodes, u32 = s.u32, o = 32 * id, alpha = s.f64[32 * id + 4], tl = u32[o + 15], tr = u32[o + 16], bl = u32[o + 17], br = u32[o + 18];
                            if (!0 == (0 !== u32[o + 19] && -1 !== s.i32[o + 14] && !(144 & state))) {
                                var m = premultiplyColorABGR(u32[o + 19], alpha);
                                u32[o + 7] = m, u32[o + 8] = m, u32[o + 9] = m, u32[o + 10] = m, state |= 32;
                            } else {
                                var _m = premultiplyColorABGR(tl, alpha);
                                u32[o + 7] = _m, tl === tr && tl === bl && tl === br ? (u32[o + 8] = _m, u32[o + 9] = _m, 
                                u32[o + 10] = _m) : (u32[o + 8] = premultiplyColorABGR(tr, alpha), u32[o + 9] = premultiplyColorABGR(bl, alpha), 
                                u32[o + 10] = premultiplyColorABGR(br, alpha)), state &= -33;
                            }
                            return 0 !== (tl | tr | bl | br) ? state |= 64 : state &= -65, state;
                        }
                    }, {
                        key: "deriveRenderable",
                        value: function(id, state, vis) {
                            var s = this.nodes, fo = 32 * id, r = !1;
                            return 3 === vis && s.f64[fo + 4] > 0 && (r = 128 & state ? !!(33554432 & state) : -1 !== s.i32[32 * id + 14] ? !!(48 & state) : (!!(64 & state) || null !== s.shaderRefs[id]) && 0 !== s.f64[fo + 0] && 0 !== s.f64[fo + 1]), 
                            !0 === r ? 8 | state : -9 & state;
                        }
                    }, {
                        key: "emit",
                        value: function(id, state) {
                            var s = this.nodes;
                            if (128 & state) return this.queueText(id), void this.emitted++;
                            var fo = 32 * id, o = 32 * id;
                            if (!(this.pendingCount > 0 && 0 !== s.f64[fo + 5] && (this.flushText(), 0 === s.i32[o + 2]))) {
                                var stream = this.stream;
                                !0 === stream.isFull && this.flush();
                                var x1, y1, x2, y2, x3, y3, f64 = s.f64, u32 = s.u32, i32 = s.i32, quad = stream.quadCount, w = f64[fo + 0], h = f64[fo + 1], tx = f64[fo + 2], ty = f64[fo + 3];
                                if (2 & state) y1 = ty, x2 = tx, x3 = x1 = tx + w, y3 = y2 = ty + h; else {
                                    var a = f64[fo + 6], b = f64[fo + 8], c = f64[fo + 9], d = f64[fo + 7];
                                    x2 = tx + h * b, y2 = ty + h * d, x3 = (x1 = tx + w * a) + h * b, y3 = (y1 = ty + w * c) + h * d;
                                }
                                var uv0 = u32[o + 11], uv1 = u32[o + 12], uvTR = (4294901760 & uv0 | 65535 & uv1) >>> 0, uvBL = (4294901760 & uv1 | 65535 & uv0) >>> 0, f = stream.f32, u = stream.u32, i = stream.cursor;
                                f[i] = tx, f[i + 1] = ty, u[i + 2] = uv0, u[i + 3] = u32[o + 7], f[i + 4] = 0, f[i + 5] = x1, 
                                f[i + 6] = y1, u[i + 7] = uvTR, u[i + 8] = u32[o + 8], f[i + 9] = 0, f[i + 10] = x2, 
                                f[i + 11] = y2, u[i + 12] = uvBL, u[i + 13] = u32[o + 9], f[i + 14] = 0, f[i + 15] = x3, 
                                f[i + 16] = y3, u[i + 17] = uv1, u[i + 18] = u32[o + 10], f[i + 19] = 0, stream.cursor = i + 20;
                                var ops = this.ops, last = ops.length - 1, program = i32[o + 13], params = s.params[id], record = i32[o + 14], texture = 32 & state || -1 === record ? 0 : record, clip = i32[o + 6], match = !(256 & state) || last < 0 || ops.program[last] !== program || ops.params[last] !== params || ops.texture[last] !== texture || ops.clip[last] !== clip || this.hooks.perOpMatch(id, ops.node[last]);
                                ops.add(program, params, texture, clip, id, quad, match), this.emitted++;
                            }
                        }
                    }, {
                        key: "queueText",
                        value: function(id) {
                            var n = this.pendingCount;
                            if (n === this.pendingText.length) {
                                var grown = new Int32Array(2 * n);
                                grown.set(this.pendingText), this.pendingText = grown;
                            }
                            this.pendingText[n] = id, this.pendingCount = n + 1;
                        }
                    }, {
                        key: "flushText",
                        value: function() {
                            var s = this.nodes, hooks = this.hooks, queue = this.pendingText, n = this.pendingCount;
                            this.pendingCount = 0, this.textEmitted += n;
                            for (var i = 0; i < n; i++) {
                                var id = queue[i];
                                0 !== s.i32[32 * id + 2] && hooks.emitText(id);
                            }
                        }
                    } ]);
                }(), MAX_QUADS = 16383, VertexStream = function() {
                    return _createClass(function(capacityQuads) {
                        this.cursor = 0, this.capacityQuads = capacityQuads, this.buffer = new ArrayBuffer(20 * capacityQuads * 4), 
                        this.f32 = new Float32Array(this.buffer), this.u32 = new Uint32Array(this.buffer);
                    }, [ {
                        key: "quadCount",
                        get: function() {
                            return this.cursor / 20;
                        }
                    }, {
                        key: "isFull",
                        get: function() {
                            return this.cursor >= this.f32.length;
                        }
                    }, {
                        key: "reset",
                        value: function() {
                            this.cursor = 0;
                        }
                    } ]);
                }(), OpList = function() {
                    return _createClass(function() {
                        var capacity = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 256;
                        this.length = 0, capacity = capacity < 1 ? 1 : capacity, this.program = new Int32Array(capacity), 
                        this.texture = new Int32Array(capacity), this.clip = new Int32Array(capacity), this.node = new Int32Array(capacity), 
                        this.start = new Int32Array(capacity), this.count = new Int32Array(capacity), this.params = [];
                        for (var i = 0; i < capacity; i++) this.params.push(null);
                    }, [ {
                        key: "add",
                        value: function(program, params, texture, clip, node, quad, perOpMatch) {
                            var i = this.length - 1;
                            if (i >= 0 && !0 === perOpMatch && this.start[i] + this.count[i] === quad && this.program[i] === program && this.params[i] === params && this.texture[i] === texture && this.clip[i] === clip) this.count[i] = this.count[i] + 1; else {
                                var n = this.length;
                                n === this.program.length && this.grow(), this.program[n] = program, this.params[n] = params, 
                                this.texture[n] = texture, this.clip[n] = clip, this.node[n] = node, this.start[n] = quad, 
                                this.count[n] = 1, this.length = n + 1;
                            }
                        }
                    }, {
                        key: "addRun",
                        value: function(program, params, texture, clip, node, quad, count) {
                            var i = this.length - 1;
                            if (i >= 0 && this.start[i] + this.count[i] === quad && this.program[i] === program && this.params[i] === params && this.texture[i] === texture && this.clip[i] === clip) this.count[i] = this.count[i] + count; else {
                                var n = this.length;
                                n === this.program.length && this.grow(), this.program[n] = program, this.params[n] = params, 
                                this.texture[n] = texture, this.clip[n] = clip, this.node[n] = node, this.start[n] = quad, 
                                this.count[n] = count, this.length = n + 1;
                            }
                        }
                    }, {
                        key: "reset",
                        value: function() {
                            for (var params = this.params, i = 0, n = this.length; i < n; i++) params[i] = null;
                            this.length = 0;
                        }
                    }, {
                        key: "grow",
                        value: function() {
                            var n = 2 * this.program.length;
                            this.program = growI32(this.program, n), this.texture = growI32(this.texture, n), 
                            this.clip = growI32(this.clip, n), this.node = growI32(this.node, n), this.start = growI32(this.start, n), 
                            this.count = growI32(this.count, n);
                            for (var i = this.params.length; i < n; i++) this.params.push(null);
                        }
                    } ]);
                }(), AnimationManager = function() {
                    return _createClass(function() {
                        var _this8 = this;
                        this.active = [], this.now = 0, this.clock = function() {
                            return _this8.now;
                        }, this.onActive = null, this.frame = 0;
                    }, [ {
                        key: "hasActive",
                        get: function() {
                            return this.active.length > 0;
                        }
                    }, {
                        key: "register",
                        value: function(a) {
                            -1 === a.index && (a.index = this.active.length, this.active.push(a), null !== this.onActive && this.onActive());
                        }
                    }, {
                        key: "unregister",
                        value: function(a) {
                            var i = a.index;
                            if (-1 !== i) {
                                var active = this.active, last = active.pop();
                                last !== a && (active[i] = last, last.index = i), a.index = -1;
                            }
                        }
                    }, {
                        key: "step",
                        value: function(dt) {
                            this.frame++;
                            for (var frame = this.frame, active = this.active, i = active.length - 1; i >= 0; i--) {
                                var a = active[i];
                                void 0 !== a && (-1 !== a.node.id ? a.stepFrame !== frame && (a.stepFrame = frame, 
                                a.step(dt)) : a.stop());
                            }
                        }
                    } ]);
                }(), FrameEvents = function() {
                    return _createClass(function() {
                        var _this9 = this;
                        this.holding = !1, this.schedule = null, this.onError = null, this.targets = [], 
                        this.names = [], this.data = [], this.head = 0, this.tail = 0, this.flushing = !1, 
                        this.scheduled = !1, this.destroyed = !1, this.scheduledFlush = function() {
                            _this9.scheduled = !1, _this9.flush();
                        };
                    }, [ {
                        key: "count",
                        get: function() {
                            return this.tail - this.head;
                        }
                    }, {
                        key: "queue",
                        value: function(target, name, data) {
                            if (!0 !== this.destroyed) {
                                var i = this.tail;
                                i === this.targets.length ? (this.targets.push(target), this.names.push(name), this.data.push(data)) : (this.targets[i] = target, 
                                this.names[i] = name, this.data[i] = data), this.tail = i + 1, !1 === this.holding && !1 === this.flushing && !1 === this.scheduled && null !== this.schedule && (this.scheduled = !0, 
                                this.schedule(this.scheduledFlush));
                            }
                        }
                    }, {
                        key: "flush",
                        value: function() {
                            if (this.head !== this.tail && !0 !== this.flushing && !0 !== this.holding) {
                                this.flushing = !0;
                                try {
                                    this.drain();
                                } finally {
                                    this.flushing = !1;
                                }
                            }
                        }
                    }, {
                        key: "drain",
                        value: function() {
                            for (var end = this.tail, targets = this.targets, names = this.names, data = this.data; this.head < end; ) {
                                var i = this.head;
                                this.head = i + 1;
                                var target = targets[i], payload = data[i];
                                if (targets[i] = null, data[i] = null, this.deliver(target, names[i], payload), 
                                !0 === this.destroyed) return;
                            }
                            for (var tail = this.tail, w = 0, r = end; r < tail; r++) targets[w] = targets[r], 
                            names[w] = names[r], data[w] = data[r], targets[r] = null, data[r] = null, w++;
                            this.head = 0, this.tail = w;
                        }
                    }, {
                        key: "deliver",
                        value: function(target, name, data) {
                            var onError = this.onError;
                            if (null !== onError) try {
                                target.emit(name, data);
                            } catch (error) {
                                onError(error);
                            } else target.emit(name, data);
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.destroyed = !0, this.schedule = null;
                            for (var targets = this.targets, data = this.data, i = this.head; i < this.tail; i++) targets[i] = null, 
                            data[i] = null;
                            this.head = 0, this.tail = 0;
                        }
                    } ]);
                }(), clampUnit = function(value) {
                    return value < 0 ? 0 : value > 1 ? 1 : value;
                }, quantizeUv = function(n) {
                    var i = 65535 * n + .5 | 0;
                    return i < 0 ? 0 : i > 65535 ? 65535 : i;
                }, TextureNodes = function() {
                    return _createClass(function(store, events) {
                        var _this0 = this;
                        this.rect = new Float64Array(4), this.dimW = 0, this.dimH = 0, this.store = store, 
                        this.nodes = store.nodes, this.events = events, store.onUploaded = function(rec) {
                            return _this0.notify(rec, !0);
                        }, store.onFreed = function(rec) {
                            return _this0.freed(rec);
                        }, store.onHeld = function(rec) {
                            return _this0.held(rec);
                        }, store.onFailed = function(rec, final) {
                            !0 === final ? _this0.notify(rec, !1) : _this0.failedHandles(rec);
                        };
                    }, [ {
                        key: "resolveTexture",
                        value: function(id) {
                            var s = this.nodes, src = this.sourceOf(id);
                            src !== s.i32[32 * id + 20] && this.switchSource(id, src);
                            var state = s.u32[32 * id + 1];
                            -1 === src || 262144 & state || !this.shown(id, state) || this.addWants(id, 3 === visibilityOf(state)), 
                            this.refresh(id);
                        }
                    }, {
                        key: "onVisibility",
                        value: function(id, prev, next) {
                            var s = this.nodes, store = this.store, wasIn = prev >= 2, isIn = next >= 2, state = s.u32[32 * id + 1];
                            if (wasIn !== isIn) !1 !== isIn ? -1 !== s.i32[32 * id + 20] && (this.back(id), 
                            327680 & state || !this.shown(id, state) || this.addWants(id, 3 === next)) : 262144 & state && this.dropWants(id); else {
                                var src = s.i32[32 * id + 20];
                                3 === next && 262144 & state && -1 !== src && store.promote(store.pixelsOf(src));
                            }
                        }
                    }, {
                        key: "onHidden",
                        value: function(id) {
                            var s = this.nodes;
                            return 262144 & s.u32[32 * id + 1] && this.dropWants(id), -1 !== s.i32[32 * id + 20];
                        }
                    }, {
                        key: "onShown",
                        value: function(id) {
                            var s = this.nodes, state = s.u32[32 * id + 1];
                            262144 & state || -1 === s.i32[32 * id + 20] || (this.back(id), 65536 & state || this.addWants(id, 3 === visibilityOf(state)));
                        }
                    }, {
                        key: "back",
                        value: function(id) {
                            var s = this.nodes, store = this.store, shown = s.i32[32 * id + 14];
                            if (-1 !== shown && 4 !== store.state[shown]) {
                                var pixels = store.pixelsOf(s.i32[32 * id + 20]);
                                shown !== pixels && this.show(id, pixels);
                                var state = s.u32[32 * id + 1];
                                16 & state && (s.u32[32 * id + 1] = 65536 | state);
                            }
                        }
                    }, {
                        key: "onResize",
                        value: function(id) {
                            var s = this.nodes, shown = s.i32[32 * id + 14];
                            if (-1 !== shown) {
                                var options = s.textureOptions[id];
                                if (null !== options) {
                                    var mode = options.resizeMode;
                                    null != mode && "cover" === mode.type && 4 === this.store.state[shown] && this.packShown(id);
                                }
                            }
                        }
                    }, {
                        key: "subTextureCreated",
                        value: function(rec) {
                            var store = this.store, handle = store.handles[rec], parent = store.parent[rec], state = store.state[parent];
                            4 === state ? (this.measure(rec), this.events.queue(handle, "loaded", {
                                w: this.dimW,
                                h: this.dimH
                            })) : 5 === state ? this.events.queue(handle, "failed", store.errors[parent]) : 6 === state && this.events.queue(handle, "freed", null);
                        }
                    }, {
                        key: "release",
                        value: function(id) {
                            this.switchSource(id, -1);
                            var s = this.nodes;
                            s.u32[32 * id + 1] = -786433 & s.u32[32 * id + 1];
                        }
                    }, {
                        key: "drainPreloads",
                        value: function() {
                            for (var s = this.nodes, store = this.store, i = 0; i < s.preloadCount; i++) {
                                var id = s.preloads[i];
                                if (s.u32[32 * id + 1] = -2097153 & s.u32[32 * id + 1], 0 !== s.i32[32 * id + 2]) {
                                    var state = s.u32[32 * id + 1];
                                    if (2048 & state) {
                                        var src = this.sourceOf(id);
                                        src !== s.i32[32 * id + 20] && (this.switchSource(id, src), this.sizeCacheHit(id, src)), 
                                        -1 === src || 524288 & s.u32[32 * id + 1] || (s.u32[32 * id + 1] = 524288 | s.u32[32 * id + 1], 
                                        store.want(store.pixelsOf(src), !1));
                                    } else if (524288 & state) {
                                        s.u32[32 * id + 1] = -524289 & state;
                                        var _src = s.i32[32 * id + 20];
                                        -1 !== _src && store.unwant(store.pixelsOf(_src));
                                    }
                                }
                            }
                            s.preloadCount = 0;
                        }
                    }, {
                        key: "sizeCacheHit",
                        value: function(id, src) {
                            var store = this.store, shown = this.nodes.i32[32 * id + 14];
                            -1 !== src && shown === store.pixelsOf(src) && 4 === store.state[shown] && (this.applyTexSize(id), 
                            this.applyAutosize(id));
                        }
                    }, {
                        key: "sourceOf",
                        value: function(id) {
                            var _e$srcX, _e$srcY, _e$srcWidth, _e$srcHeight, _e$imageType, s = this.nodes;
                            if (!(1048576 & s.u32[32 * id + 1])) {
                                var ref = s.textureRefs[id];
                                return null === ref ? -1 : textureRecord(this.store, ref);
                            }
                            var src = s.srcs[id], e = s.extras[id], sx = null === e ? null : null !== (_e$srcX = e.srcX) && void 0 !== _e$srcX ? _e$srcX : null, sy = null === e ? null : null !== (_e$srcY = e.srcY) && void 0 !== _e$srcY ? _e$srcY : null, sw = null === e ? null : null !== (_e$srcWidth = e.srcWidth) && void 0 !== _e$srcWidth ? _e$srcWidth : null, sh = null === e ? null : null !== (_e$srcHeight = e.srcHeight) && void 0 !== _e$srcHeight ? _e$srcHeight : null, type = null === e ? null : null !== (_e$imageType = e.imageType) && void 0 !== _e$imageType ? _e$imageType : null, store = this.store, current = s.i32[32 * id + 20];
                            if (-1 !== current && 0 === store.kind[current]) {
                                var _p$sx, _p$sy, _p$sw, _p$sh, _p$type, p = store.props[current];
                                if (p.src === src && !1 !== p.premultiplyAlpha && (void 0 === p.key || null === p.key || "" === p.key) && (null !== (_p$sx = p.sx) && void 0 !== _p$sx ? _p$sx : null) === sx && (null !== (_p$sy = p.sy) && void 0 !== _p$sy ? _p$sy : null) === sy && (null !== (_p$sw = p.sw) && void 0 !== _p$sw ? _p$sw : null) === sw && (null !== (_p$sh = p.sh) && void 0 !== _p$sh ? _p$sh : null) === sh && (null !== (_p$type = p.type) && void 0 !== _p$type ? _p$type : null) === type) return current;
                            }
                            var key = imageKey(src, null, !0, sx, sy, sw, sh);
                            if (null !== key) {
                                var cached = store.cache.get(key);
                                if (void 0 !== cached) return cached;
                            }
                            var props = {
                                src: src,
                                premultiplyAlpha: !0,
                                key: null,
                                type: type,
                                w: s.f64[32 * id + 0],
                                h: s.f64[32 * id + 1],
                                sx: sx,
                                sy: sy,
                                sw: sw,
                                sh: sh,
                                maxRetryCount: store.maxRetries
                            };
                            return store.create(0, props, key);
                        }
                    }, {
                        key: "switchSource",
                        value: function(id, rec) {
                            var s = this.nodes, store = this.store, state = s.u32[32 * id + 1], wants = !!(262144 & state), preload = !!(524288 & state), old = s.i32[32 * id + 20];
                            if (-1 !== old) {
                                store.removeOwner(old, id), store.unref(old);
                                var _pixels = store.pixelsOf(old);
                                !0 === wants && store.unwant(_pixels), !0 === preload && store.unwant(_pixels);
                            }
                            if (s.i32[32 * id + 20] = rec, -1 !== rec) {
                                store.addOwner(rec, id), store.ref(rec);
                                var pixels = store.pixelsOf(rec), options = s.textureOptions[id];
                                null !== options && !0 === options.preventCleanup && (store.setPreventCleanup(rec, !0), 
                                pixels !== rec && store.setPreventCleanup(pixels, !0)), !0 === wants && store.want(pixels, 3 === visibilityOf(state)), 
                                !0 === preload && store.want(pixels, !1);
                                var shown = s.i32[32 * id + 14], uploaded = 4 === store.state[pixels], failed = store.failedForGood(pixels);
                                -1 !== shown && shown !== pixels && 4 === store.state[shown] && !1 === uploaded && !1 === failed || (this.show(id, pixels), 
                                !0 === uploaded ? (s.u32[32 * id + 1] = 4194304 | s.u32[32 * id + 1], this.loaded(id, rec)) : !0 === failed && this.failedNode(id, pixels));
                            } else this.show(id, -1);
                        }
                    }, {
                        key: "show",
                        value: function(id, rec) {
                            var s = this.nodes, store = this.store, old = s.i32[32 * id + 14];
                            if (old !== rec) {
                                var state = s.u32[32 * id + 1], wants = !!(262144 & state);
                                -1 !== old && (store.unref(old), !0 === wants && store.unwant(old)), s.i32[32 * id + 14] = rec, 
                                -1 !== rec && (store.ref(rec), !0 === wants && store.want(rec, 3 === visibilityOf(state)));
                            }
                        }
                    }, {
                        key: "shown",
                        value: function(id, state) {
                            return !(16777216 & state) && 0 !== this.nodes.f64[32 * id + 4];
                        }
                    }, {
                        key: "addWants",
                        value: function(id, viewport) {
                            var s = this.nodes, store = this.store;
                            s.u32[32 * id + 1] = 262144 | s.u32[32 * id + 1];
                            var shown = s.i32[32 * id + 14];
                            -1 !== shown && store.want(shown, viewport);
                            var src = s.i32[32 * id + 20];
                            -1 !== src && store.want(store.pixelsOf(src), viewport);
                        }
                    }, {
                        key: "dropWants",
                        value: function(id) {
                            var s = this.nodes, store = this.store;
                            s.u32[32 * id + 1] = -262145 & s.u32[32 * id + 1];
                            var shown = s.i32[32 * id + 14];
                            -1 !== shown && store.unwant(shown);
                            var src = s.i32[32 * id + 20];
                            -1 !== src && store.unwant(store.pixelsOf(src));
                        }
                    }, {
                        key: "refresh",
                        value: function(id) {
                            var s = this.nodes, store = this.store, shown = s.i32[32 * id + 14], writes = s.writes;
                            if (-1 === shown || 4 !== store.state[shown]) {
                                s.u32[32 * id + 1] = -17 & s.u32[32 * id + 1];
                                var sizeless = -1 === shown || 0 === store.w[shown];
                                return !0 === sizeless && (s.u32[32 * id + 11] = 0, s.u32[32 * id + 12] = 4294967295, 
                                s.f32[32 * id + 23] = 0, s.f32[32 * id + 24] = 0, s.f32[32 * id + 25] = 1, s.f32[32 * id + 26] = 1), 
                                void (!0 === sizeless && 0 !== s.f64[32 * id + 14] && (s.f64[32 * id + 14] = 0, 
                                s.f64[32 * id + 15] = 0, 4096 & s.u32[32 * id + 1] && (s.markDirty(id, 1), this.sizedInWalk(id, writes))));
                            }
                            if (store.pixelsOf(s.i32[32 * id + 20]) === shown) {
                                var contain = this.applyTexSize(id), autosize = this.applyAutosize(id);
                                if (!0 === contain || !0 === autosize) return s.u32[32 * id + 1] = -17 & s.u32[32 * id + 1], 
                                s.markDirty(id, 16), void this.sizedInWalk(id, writes);
                            }
                            this.packShown(id), s.u32[32 * id + 1] = 16 | s.u32[32 * id + 1];
                        }
                    }, {
                        key: "sizedInWalk",
                        value: function(id, writes) {
                            var s = this.nodes;
                            3 !== visibilityOf(s.u32[32 * id + 1]) && -1 === s.i32[32 * id + 4] && (s.writes = writes);
                        }
                    }, {
                        key: "applyTexSize",
                        value: function(id) {
                            var s = this.nodes;
                            this.measure(s.i32[32 * id + 20]);
                            var w = this.dimW, h = this.dimH;
                            return (s.f64[32 * id + 14] !== w || s.f64[32 * id + 15] !== h) && (s.f64[32 * id + 14] = w, 
                            s.f64[32 * id + 15] = h, !!(4096 & s.u32[32 * id + 1]) && (s.markDirty(id, 1), !0));
                        }
                    }, {
                        key: "applyAutosize",
                        value: function(id) {
                            var s = this.nodes, state = s.u32[32 * id + 1];
                            if (!(4194304 & state)) return !1;
                            if (s.u32[32 * id + 1] = -4194305 & state, 1024 != (1152 & state)) return !1;
                            this.measure(s.i32[32 * id + 20]);
                            var w = this.dimW, h = this.dimH;
                            return (s.f64[32 * id + 0] !== w || s.f64[32 * id + 1] !== h) && (s.applySize(id, w, h), 
                            !0);
                        }
                    }, {
                        key: "measure",
                        value: function(rec) {
                            var store = this.store;
                            if (3 === store.kind[rec]) {
                                var region = store.props[rec];
                                return this.dimW = region.w, void (this.dimH = region.h);
                            }
                            this.dimW = store.w[rec], this.dimH = store.h[rec];
                        }
                    }, {
                        key: "packShown",
                        value: function(id) {
                            var s = this.nodes, store = this.store, src = s.i32[32 * id + 20], shown = s.i32[32 * id + 14];
                            store.pixelsOf(src) === shown ? this.packUv(id, src) : null === store.subs[shown] && this.packUv(id, shown);
                        }
                    }, {
                        key: "packUv",
                        value: function(id, rec) {
                            var s = this.nodes, store = this.store, shown = s.i32[32 * id + 14], sub = 3 === store.kind[rec] ? store.props[rec] : null;
                            this.measure(rec), function(out, x1, y1, x2, y2, sub, parentW, parentH, options, w, h, dimW, dimH) {
                                if (null !== sub && (x1 = sub.x / parentW, y1 = sub.y / parentH, x2 = x1 + sub.w / parentW, 
                                y2 = y1 + sub.h / parentH), null !== options) {
                                    var mode = options.resizeMode;
                                    if (null != mode && "cover" === mode.type) {
                                        var scaleX = w / dimW, scaleY = h / dimH, scale = Math.max(scaleX, scaleY), precision = 1 / scale;
                                        if (scaleX < scale) {
                                            var _mode$clipX, desiredSize = precision * w;
                                            x2 = (x1 = (1 - desiredSize / dimW) * clampUnit(null !== (_mode$clipX = mode.clipX) && void 0 !== _mode$clipX ? _mode$clipX : .5)) + desiredSize / dimW;
                                        }
                                        if (scaleY < scale) {
                                            var _mode$clipY, _desiredSize = precision * h;
                                            y2 = (y1 = (1 - _desiredSize / dimH) * clampUnit(null !== (_mode$clipY = mode.clipY) && void 0 !== _mode$clipY ? _mode$clipY : .5)) + _desiredSize / dimH;
                                        }
                                    }
                                    if (!0 === options.flipX) {
                                        var t = x1;
                                        x1 = x2, x2 = t;
                                    }
                                    if (!0 === options.flipY) {
                                        var _t = y1;
                                        y1 = y2, y2 = _t;
                                    }
                                }
                                out[0] = x1, out[1] = y1, out[2] = x2, out[3] = y2;
                            }(this.rect, 0, 0, store.u2[shown], store.v2[shown], sub, store.w[shown], store.h[shown], s.textureOptions[id], s.f64[32 * id + 0], s.f64[32 * id + 1], this.dimW, this.dimH);
                            var rect = this.rect, o = 32 * id;
                            !function(out, i0, i1, rect) {
                                out[i0] = (quantizeUv(rect[1]) << 16 | quantizeUv(rect[0])) >>> 0, out[i1] = (quantizeUv(rect[3]) << 16 | quantizeUv(rect[2])) >>> 0;
                            }(s.u32, o + 11, o + 12, rect);
                            var f32 = s.f32;
                            f32[o + 23] = rect[0], f32[o + 24] = rect[1], f32[o + 25] = rect[2], f32[o + 26] = rect[3];
                        }
                    }, {
                        key: "notify",
                        value: function(rec, ok) {
                            var store = this.store;
                            this.notifyOwners(rec, rec, ok);
                            var subs = store.subs[rec];
                            if (null !== subs) for (var i = 0; i < subs.length; i++) this.notifyOwners(subs[i], rec, ok);
                        }
                    }, {
                        key: "freed",
                        value: function(rec) {
                            var store = this.store;
                            this.freedOwners(rec);
                            var subs = store.subs[rec];
                            if (null !== subs) for (var i = 0; i < subs.length; i++) this.freedOwners(subs[i]);
                        }
                    }, {
                        key: "freedOwners",
                        value: function(listRec) {
                            var s = this.nodes, store = this.store, handle = store.handles[listRec];
                            null !== handle && this.events.queue(handle, "freed", null);
                            for (var id = store.ownerHead[listRec]; -1 !== id; ) {
                                s.markDirty(id, 16);
                                var node = s.handles[id];
                                !0 === node.hasListener("freed") && this.events.queue(node, "freed", {
                                    type: "texture"
                                }), id = s.i32[32 * id + 21];
                            }
                        }
                    }, {
                        key: "held",
                        value: function(rec) {
                            var store = this.store;
                            this.releaseShown(rec, rec);
                            var subs = store.subs[rec];
                            if (null !== subs) for (var i = 0; i < subs.length; i++) this.releaseShown(subs[i], rec);
                        }
                    }, {
                        key: "releaseShown",
                        value: function(listRec, pixels) {
                            for (var s = this.nodes, id = this.store.ownerHead[listRec]; -1 !== id; ) {
                                var shown = s.i32[32 * id + 14];
                                -1 !== shown && shown !== pixels && (this.show(id, pixels), s.markDirty(id, 16)), 
                                id = s.i32[32 * id + 21];
                            }
                        }
                    }, {
                        key: "failedHandles",
                        value: function(rec) {
                            var store = this.store, error = store.errors[rec], handle = store.handles[rec];
                            null !== handle && this.events.queue(handle, "failed", error);
                            var subs = store.subs[rec];
                            if (null !== subs) for (var i = 0; i < subs.length; i++) {
                                var sub = store.handles[subs[i]];
                                null !== sub && this.events.queue(sub, "failed", error);
                            }
                        }
                    }, {
                        key: "notifyOwners",
                        value: function(listRec, pixels, ok) {
                            var s = this.nodes, store = this.store, handle = store.handles[listRec];
                            null !== handle && (!0 === ok ? (this.measure(listRec), this.events.queue(handle, "loaded", {
                                w: this.dimW,
                                h: this.dimH
                            })) : this.events.queue(handle, "failed", store.errors[pixels]));
                            for (var id = store.ownerHead[listRec]; -1 !== id; ) {
                                var next = s.i32[32 * id + 21];
                                this.show(id, pixels), s.markDirty(id, 16), !0 === ok ? (s.u32[32 * id + 1] = 4194304 | s.u32[32 * id + 1], 
                                this.applyTexSize(id), this.applyAutosize(id), this.loaded(id, listRec)) : this.failedNode(id, pixels), 
                                id = next;
                            }
                        }
                    }, {
                        key: "loaded",
                        value: function(id, rec) {
                            var node = this.nodes.handles[id];
                            !1 !== node.hasListener("loaded") && (this.measure(rec), this.dimW > 1 && this.dimH > 1 && this.events.queue(node, "loaded", {
                                type: "texture",
                                dimensions: {
                                    w: this.dimW,
                                    h: this.dimH
                                }
                            }));
                        }
                    }, {
                        key: "failedNode",
                        value: function(id, pixels) {
                            var node = this.nodes.handles[id];
                            !0 === node.hasListener("failed") && this.events.queue(node, "failed", {
                                type: "texture",
                                error: this.store.errors[pixels]
                            });
                        }
                    } ]);
                }(), GlContext = function() {
                    return _createClass(function(gl, webgl2, disableVao, width, height) {
                        this.program = null, this.vao = null, this.texture = null, this.arrayBuffer = null, 
                        this.scissorOn = !1, this.sx = 0, this.sy = 0, this.premultiply = !1, this.clearRgba = 0, 
                        this.gl = gl, this.isWebGl2 = webgl2, this.vaoExt = !1 === webgl2 && !1 === disableVao ? gl.getExtension("OES_vertex_array_object") : null, 
                        this.canUseVao = !1 === disableVao && (!0 === webgl2 || null !== this.vaoExt), this.sw = gl.drawingBufferWidth, 
                        this.sh = gl.drawingBufferHeight, gl.viewport(0, 0, width, height), gl.enable(3042), 
                        gl.blendFunc(1, 771);
                    }, [ {
                        key: "useProgram",
                        value: function(program) {
                            this.program !== program && (this.program = program, this.gl.useProgram(program));
                        }
                    }, {
                        key: "bindVao",
                        value: function(vao) {
                            this.vao !== vao && (this.vao = vao, null !== this.vaoExt ? this.vaoExt.bindVertexArrayOES(vao) : this.gl.bindVertexArray(vao));
                        }
                    }, {
                        key: "createVao",
                        value: function() {
                            return null !== this.vaoExt ? this.vaoExt.createVertexArrayOES() : this.gl.createVertexArray();
                        }
                    }, {
                        key: "attribPointer",
                        value: function(buffer, index, size, type, normalized, stride, offset) {
                            this.bindArrayBuffer(buffer), this.gl.vertexAttribPointer(index, size, type, normalized, stride, offset);
                        }
                    }, {
                        key: "enableAttribs",
                        value: function(mask) {
                            for (var i = 0; mask >>> i !== 0; i++) 1 == (mask >>> i & 1) && this.gl.enableVertexAttribArray(i);
                        }
                    }, {
                        key: "bindIndexBuffer",
                        value: function(buffer) {
                            this.gl.bindBuffer(34963, buffer);
                        }
                    }, {
                        key: "createBuffer",
                        value: function() {
                            return this.gl.createBuffer();
                        }
                    }, {
                        key: "staticBuffer",
                        value: function(target, data) {
                            var buffer = this.createBuffer();
                            return 34962 === target ? this.bindArrayBuffer(buffer) : this.gl.bindBuffer(target, buffer), 
                            this.gl.bufferData(target, data, 35044), buffer;
                        }
                    }, {
                        key: "uploadVertices",
                        value: function(buffer, data) {
                            this.bindArrayBuffer(buffer), this.gl.bufferData(34962, data, 35048);
                        }
                    }, {
                        key: "bindTexture",
                        value: function(texture) {
                            this.texture !== texture && (this.texture = texture, this.gl.bindTexture(3553, texture));
                        }
                    }, {
                        key: "createTexture",
                        value: function(minFilter) {
                            var gl = this.gl, texture = gl.createTexture();
                            return this.bindTexture(texture), gl.texParameteri(3553, 10241, minFilter), gl.texParameteri(3553, 10242, 33071), 
                            gl.texParameteri(3553, 10243, 33071), texture;
                        }
                    }, {
                        key: "texImage",
                        value: function(texture, source, w, h, premultiply) {
                            var gl = this.gl;
                            this.bindTexture(texture), this.premultiply !== premultiply && (this.premultiply = premultiply, 
                            gl.pixelStorei(37441, premultiply)), !0 === ArrayBuffer.isView(source) ? gl.texImage2D(3553, 0, 6408, w, h, 0, 6408, 5121, source) : gl.texImage2D(3553, 0, 6408, 6408, 5121, source);
                        }
                    }, {
                        key: "extension",
                        value: function(name) {
                            return this.gl.getExtension(name);
                        }
                    }, {
                        key: "compressedTexImage",
                        value: function(texture, level, format, w, h, data) {
                            this.bindTexture(texture), this.gl.compressedTexImage2D(3553, level, format, w, h, 0, data);
                        }
                    }, {
                        key: "deleteTexture",
                        value: function(texture) {
                            this.texture === texture && (this.texture = null), this.gl.deleteTexture(texture);
                        }
                    }, {
                        key: "compile",
                        value: function(vertex, fragment, attributes) {
                            var gl = this.gl, program = gl.createProgram(), vertexShader = this.shader(35633, vertex), fragmentShader = this.shader(35632, fragment);
                            gl.attachShader(program, vertexShader), gl.attachShader(program, fragmentShader);
                            for (var i = 0; i < attributes.length; i++) gl.bindAttribLocation(program, i, attributes[i]);
                            if (gl.linkProgram(program), !0 !== gl.getProgramParameter(program, 35714)) throw new Error("Program link failed: ".concat(gl.getProgramInfoLog(program), "\nVertex shader: ").concat(gl.getShaderInfoLog(vertexShader), "\nFragment shader: ").concat(gl.getShaderInfoLog(fragmentShader)));
                            return program;
                        }
                    }, {
                        key: "uniformLocation",
                        value: function(program, name) {
                            return this.gl.getUniformLocation(program, name);
                        }
                    }, {
                        key: "uniform4fv",
                        value: function(location, value) {
                            this.gl.uniform4fv(location, value);
                        }
                    }, {
                        key: "uniform1f",
                        value: function(location, x) {
                            this.gl.uniform1f(location, x);
                        }
                    }, {
                        key: "uniform2f",
                        value: function(location, x, y) {
                            this.gl.uniform2f(location, x, y);
                        }
                    }, {
                        key: "uniform4f",
                        value: function(location, x, y, z, w) {
                            this.gl.uniform4f(location, x, y, z, w);
                        }
                    }, {
                        key: "uniformv",
                        value: function(kind, location, data) {
                            var gl = this.gl;
                            switch (kind) {
                              case 1:
                                gl.uniform1fv(location, data);
                                break;

                              case 2:
                                gl.uniform2fv(location, data);
                                break;

                              case 3:
                                gl.uniform3fv(location, data);
                                break;

                              case 4:
                                gl.uniform4fv(location, data);
                                break;

                              case 5:
                                gl.uniform1iv(location, data);
                                break;

                              case 6:
                                gl.uniform2iv(location, data);
                                break;

                              case 7:
                                gl.uniform3iv(location, data);
                                break;

                              case 8:
                                gl.uniform4iv(location, data);
                                break;

                              case 9:
                                gl.uniformMatrix2fv(location, !1, data);
                                break;

                              case 10:
                                gl.uniformMatrix3fv(location, !1, data);
                                break;

                              case 11:
                                gl.uniformMatrix4fv(location, !1, data);
                            }
                        }
                    }, {
                        key: "isLost",
                        value: function() {
                            return this.gl.isContextLost();
                        }
                    }, {
                        key: "scissorTest",
                        value: function(on) {
                            this.scissorOn !== on && (this.scissorOn = on, !0 === on ? this.gl.enable(3089) : this.gl.disable(3089));
                        }
                    }, {
                        key: "scissor",
                        value: function(x, y, w, h) {
                            x === this.sx && y === this.sy && w === this.sw && h === this.sh || (this.sx = x, 
                            this.sy = y, this.sw = w, this.sh = h, this.gl.scissor(x, y, w, h));
                        }
                    }, {
                        key: "clearColor",
                        value: function(rgba) {
                            var v = rgba >>> 0;
                            v !== this.clearRgba && (this.clearRgba = v, this.gl.clearColor((v >>> 24) / 255, (v >>> 16 & 255) / 255, (v >>> 8 & 255) / 255, (255 & v) / 255));
                        }
                    }, {
                        key: "clear",
                        value: function() {
                            this.gl.clear(16384);
                        }
                    }, {
                        key: "drawQuads",
                        value: function(start, count) {
                            this.gl.drawElements(4, 6 * count, 5123, 12 * start);
                        }
                    }, {
                        key: "parameter",
                        value: function(name) {
                            return this.gl.getParameter(name);
                        }
                    }, {
                        key: "outOfMemory",
                        value: function() {
                            for (var gl = this.gl, oom = !1, i = 0; i < 8; i++) {
                                var error = gl.getError();
                                if (0 === error) break;
                                1285 === error && (oom = !0);
                            }
                            return oom;
                        }
                    }, {
                        key: "lose",
                        value: function() {
                            var ext = this.gl.getExtension("WEBGL_lose_context");
                            null !== ext && ext.loseContext();
                        }
                    }, {
                        key: "bindArrayBuffer",
                        value: function(buffer) {
                            this.arrayBuffer !== buffer && (this.arrayBuffer = buffer, this.gl.bindBuffer(34962, buffer));
                        }
                    }, {
                        key: "shader",
                        value: function(type, source) {
                            var gl = this.gl, shader = gl.createShader(type);
                            return gl.shaderSource(shader, source), gl.compileShader(shader), shader;
                        }
                    } ]);
                }(), ATTRIBUTES = [ "a_position", "a_textureCoords", "a_color", "a_extra", "a_nodeCoords", "a_textureTexels" ], 
                SYSTEM_UNIFORMS = [ "u_alpha", "u_time", "u_nodeTransform", "u_uvRect", "u_dimensions", "u_resolution", "u_pixelRatio" ], 
                UniformTable = function() {
                    return _createClass(function() {
                        this.names = [], this.kinds = [], this.offsets = [], this.sizes = [], this.scratch = [], 
                        this.length = 0, this.direct = !1, this.warned = !1;
                    }, [ {
                        key: "indexOf",
                        value: function(name) {
                            return this.names.indexOf(name);
                        }
                    }, {
                        key: "add",
                        value: function(name, kind, size) {
                            var e = this.names.length;
                            return this.names.push(name), this.kinds.push(kind), this.offsets.push(this.length), 
                            this.sizes.push(size), this.scratch.push(kind >= 5 && kind <= 8 ? new Int32Array(size) : new Float32Array(size)), 
                            this.length += size, this.direct = 0 === e && "u_params" === name && 4 === kind, 
                            e;
                        }
                    } ]);
                }(), Program = function() {
                    return _createClass(function(ctx, vertex, fragment, name) {
                        this.system = [], this.lastParams = null, this.perOp = null, this.table = null, 
                        this.locations = [], this.nodes = null, this.time = null, this.alpha = NaN, this.t = NaN, 
                        this.ta = NaN, this.tb = NaN, this.tc = NaN, this.td = NaN, this.ux1 = NaN, this.uy1 = NaN, 
                        this.ux2 = NaN, this.uy2 = NaN, this.w = NaN, this.h = NaN, this.name = name, this.ctx = ctx;
                        var handle = ctx.compile(vertex, fragment, ATTRIBUTES);
                        this.handle = handle, this.params = ctx.uniformLocation(handle, "u_params");
                        for (var systemMask = 0, i = 0; i < SYSTEM_UNIFORMS.length; i++) {
                            var location = ctx.uniformLocation(handle, SYSTEM_UNIFORMS[i]);
                            this.system.push(location), null !== location && (systemMask |= 1 << i);
                        }
                        this.systemMask = systemMask;
                    }, [ {
                        key: "bindSystem",
                        value: function(nodes, time) {
                            var _this1 = this;
                            this.nodes = nodes, this.time = time, 31 & this.systemMask && (this.perOp = function(node) {
                                _this1.uploadSystem(node);
                            });
                        }
                    }, {
                        key: "uploadTable",
                        value: function(block) {
                            for (var table = this.table, ctx = this.ctx, names = table.names, length = block.length, n = names.length, e = 0; e < n; e++) {
                                var location = this.locations[e];
                                if (void 0 === location && (location = ctx.uniformLocation(this.handle, names[e]), 
                                this.locations[e] = location), null !== location) {
                                    for (var offset = table.offsets[e], size = table.sizes[e], _scratch = table.scratch[e], k = 0; k < size; k++) {
                                        var at = offset + k;
                                        _scratch[k] = at < length ? block[at] : 0;
                                    }
                                    ctx.uniformv(table.kinds[e], location, _scratch);
                                }
                            }
                        }
                    }, {
                        key: "uploadSystem",
                        value: function(node) {
                            var s = this.nodes, fo = 32 * node, io = 32 * node, ctx = this.ctx, system = this.system, alpha = system[0];
                            if (null !== alpha) {
                                var a = s.f64[fo + 4];
                                a !== this.alpha && (this.alpha = a, ctx.uniform1f(alpha, a));
                            }
                            var transform = system[2];
                            if (null !== transform) {
                                var _a = s.f64[fo + 6], b = s.f64[fo + 8], c = s.f64[fo + 9], d = s.f64[fo + 7];
                                _a === this.ta && b === this.tb && c === this.tc && d === this.td || (this.ta = _a, 
                                this.tb = b, this.tc = c, this.td = d, ctx.uniform4f(transform, _a, c, b, d));
                            }
                            var uvRect = system[3];
                            if (null !== uvRect) {
                                var x1 = s.f32[io + 23], y1 = s.f32[io + 24], x2 = s.f32[io + 25], y2 = s.f32[io + 26];
                                x1 === this.ux1 && y1 === this.uy1 && x2 === this.ux2 && y2 === this.uy2 || (this.ux1 = x1, 
                                this.uy1 = y1, this.ux2 = x2, this.uy2 = y2, ctx.uniform4f(uvRect, x1, y1, x2, y2));
                            }
                            var dimensions = system[4];
                            if (null !== dimensions) {
                                var w = s.f64[fo + 0], h = s.f64[fo + 1];
                                w === this.w && h === this.h || (this.w = w, this.h = h, ctx.uniform2f(dimensions, w, h));
                            }
                            var time = system[1], timeOf = this.time;
                            if (null !== time && null !== timeOf) {
                                var t = timeOf(node);
                                t !== this.t && (this.t = t, ctx.uniform1f(time, t));
                            }
                        }
                    } ]);
                }(), _export("dt", PRECISION = "#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif\n"), 
                glslFloat = function(value) {
                    return !0 === Number.isInteger(value) ? value.toFixed(1) : String(value);
                }, viewportGlsl = function(pixelRatio, w, h) {
                    return "#define PIXEL_RATIO ".concat(glslFloat(pixelRatio), "\n#define RESOLUTION vec2(").concat(glslFloat(w), ", ").concat(glslFloat(h), ")\nvec4 pxToClip(vec2 px){return vec4((px*PIXEL_RATIO/RESOLUTION*2.0-1.0)*vec2(1.0,-1.0),0.0,1.0);}\n");
                }, _export("ft", defaultVertex = function(viewport, declarations, assignments) {
                    return "#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif\nattribute vec2 a_position;attribute vec2 a_textureCoords;attribute vec4 a_color;attribute vec2 a_nodeCoords;\n" + viewport + "varying vec4 v_color;varying vec2 v_textureCoords;\n" + declarations + "\nvoid main(){v_color=a_color;v_textureCoords=a_textureCoords;\n" + assignments + "\ngl_Position=pxToClip(a_position);}";
                }), _export("pt", function(pixelRatio) {
                    return "#define EDGE_WIDTH ".concat((1 / pixelRatio).toFixed(8), "\n#define INV_EDGE_WIDTH ").concat(pixelRatio.toFixed(8), "\n");
                }), _export("ht", function(e0, e1) {
                    var span = e1 - e0;
                    return span < .000244140625 && span > -.000244140625 ? 4096 : 1 / span;
                }), _export("gt", function(u, i, color) {
                    u.row(i, (color >>> 24) / 255, (color >>> 16 & 255) / 255, (color >>> 8 & 255) / 255, (255 & color) / 255);
                }), _export("mt", function(rows) {
                    for (var glsl = "uniform vec4 u_params[".concat(rows.length, "];\n"), i = 0; i < rows.length; i++) glsl += "#define ".concat(rows[i], " u_params[").concat(i, "]\n");
                    return glsl;
                }), SHADER = Symbol("shader"), ShaderNode = function() {
                    return _createClass(function(registry, rec, values, slot) {
                        this._head = -1, this._key = null, this._rederive = !1, this._registry = registry, 
                        this._rec = rec, this.shaderType = rec.type, this.values = values, this._slot = slot;
                        var props = Object.create(rec.proto);
                        props[SHADER] = this, this._props = props;
                    }, [ {
                        key: "props",
                        get: function() {
                            return this._props;
                        },
                        set: function(props) {
                            var facade = this._props;
                            for (var key in props) facade[key] = props[key];
                        }
                    }, {
                        key: "_changed",
                        value: function(variant) {
                            this._key = null, !0 === variant && (this._rederive = !0), this._registry.markUsers(this);
                        }
                    } ]);
                }(), UniformWriter = function() {
                    return _createClass(function(pixelRatio) {
                        this.noAlpha = !1, this.rows = new Float32Array(64), this.rowCount = 0, this.names = [], 
                        this.kinds = [], this.values = [], this.pixelRatio = pixelRatio;
                    }, [ {
                        key: "row",
                        value: function(i, x, y, z, w) {
                            var rows = this.rows, at = 4 * i;
                            if (at + 4 > rows.length) {
                                var grown = new Float32Array(8 * (i + 1));
                                grown.set(rows), rows = grown, this.rows = grown;
                            }
                            rows[at] = x, rows[at + 1] = y, rows[at + 2] = z, rows[at + 3] = w, i >= this.rowCount && (this.rowCount = i + 1);
                        }
                    }, {
                        key: "f1",
                        value: function(name, x) {
                            this.named(name, 1, [ x ]);
                        }
                    }, {
                        key: "f2",
                        value: function(name, x, y) {
                            this.named(name, 2, [ x, y ]);
                        }
                    }, {
                        key: "f3",
                        value: function(name, x, y, z) {
                            this.named(name, 3, [ x, y, z ]);
                        }
                    }, {
                        key: "f4",
                        value: function(name, x, y, z, w) {
                            this.named(name, 4, [ x, y, z, w ]);
                        }
                    }, {
                        key: "fv",
                        value: function(name, n, values) {
                            this.named(name, 1 + n - 1, values);
                        }
                    }, {
                        key: "iv",
                        value: function(name, n, values) {
                            this.named(name, 5 + n - 1, values);
                        }
                    }, {
                        key: "mat",
                        value: function(name, n, values) {
                            this.named(name, 9 + n - 2, values);
                        }
                    }, {
                        key: "rgba",
                        value: function(name, color) {
                            this.named(name, 4, function(rgba) {
                                return [ (rgba >>> 24) / 255, (rgba >>> 16 & 255) / 255, (rgba >>> 8 & 255) / 255, (255 & rgba) / 255 ];
                            }(color));
                        }
                    }, {
                        key: "alphaUnused",
                        value: function() {
                            this.noAlpha = !0;
                        }
                    }, {
                        key: "finish",
                        value: function(table) {
                            var rowCount = this.rowCount;
                            rowCount > 0 && -1 === table.indexOf("u_params") && table.add("u_params", 4, 4 * rowCount);
                            for (var names = this.names, values = this.values, i = 0; i < names.length; i++) -1 === table.indexOf(names[i]) && table.add(names[i], this.kinds[i], values[i].length);
                            var block = new Float32Array(table.length);
                            rowCount > 0 && copy(table, block, table.indexOf("u_params"), this.rows, 4 * rowCount);
                            for (var _i18 = 0; _i18 < names.length; _i18++) {
                                var v = values[_i18];
                                copy(table, block, table.indexOf(names[_i18]), v, v.length);
                            }
                            return this.reset(), block;
                        }
                    }, {
                        key: "reset",
                        value: function() {
                            for (var rows = this.rows, n = 4 * this.rowCount, i = 0; i < n; i++) rows[i] = 0;
                            this.rowCount = 0, this.noAlpha = !1, this.names.length = 0, this.kinds.length = 0, 
                            this.values.length = 0;
                        }
                    }, {
                        key: "named",
                        value: function(name, kind, values) {
                            var i = this.names.indexOf(name);
                            if (-1 === i) return this.names.push(name), this.kinds.push(kind), void this.values.push(values);
                            this.kinds[i] = kind, this.values[i] = values;
                        }
                    } ]);
                }(), UpdateContext = function() {
                    return _createClass(function(pixelRatio) {
                        this.props = null, this.u = null, this.stage = {
                            pixelRatio: pixelRatio
                        };
                    }, [ {
                        key: "uniform1f",
                        value: function(name, x) {
                            this.u.f1(name, x);
                        }
                    }, {
                        key: "uniform2f",
                        value: function(name, x, y) {
                            this.u.f2(name, x, y);
                        }
                    }, {
                        key: "uniform3f",
                        value: function(name, x, y, z) {
                            this.u.f3(name, x, y, z);
                        }
                    }, {
                        key: "uniform4f",
                        value: function(name, x, y, z, w) {
                            this.u.f4(name, x, y, z, w);
                        }
                    }, {
                        key: "uniform2fa",
                        value: function(name, v) {
                            this.u.fv(name, 2, v);
                        }
                    }, {
                        key: "uniform3fa",
                        value: function(name, v) {
                            this.u.fv(name, 3, v);
                        }
                    }, {
                        key: "uniform4fa",
                        value: function(name, v) {
                            this.u.fv(name, 4, v);
                        }
                    }, {
                        key: "uniform1fv",
                        value: function(name, v) {
                            this.u.fv(name, 1, v);
                        }
                    }, {
                        key: "uniform2fv",
                        value: function(name, v) {
                            this.u.fv(name, 2, v);
                        }
                    }, {
                        key: "uniform3fv",
                        value: function(name, v) {
                            this.u.fv(name, 3, v);
                        }
                    }, {
                        key: "uniform4fv",
                        value: function(name, v) {
                            this.u.fv(name, 4, v);
                        }
                    }, {
                        key: "uniform1i",
                        value: function(name, x) {
                            this.u.iv(name, 1, [ x ]);
                        }
                    }, {
                        key: "uniform2i",
                        value: function(name, x, y) {
                            this.u.iv(name, 2, [ x, y ]);
                        }
                    }, {
                        key: "uniform3i",
                        value: function(name, x, y, z) {
                            this.u.iv(name, 3, [ x, y, z ]);
                        }
                    }, {
                        key: "uniform4i",
                        value: function(name, x, y, z, w) {
                            this.u.iv(name, 4, [ x, y, z, w ]);
                        }
                    }, {
                        key: "uniform1iv",
                        value: function(name, v) {
                            this.u.iv(name, 1, v);
                        }
                    }, {
                        key: "uniform2iv",
                        value: function(name, v) {
                            this.u.iv(name, 2, v);
                        }
                    }, {
                        key: "uniform3iv",
                        value: function(name, v) {
                            this.u.iv(name, 3, v);
                        }
                    }, {
                        key: "uniform4iv",
                        value: function(name, v) {
                            this.u.iv(name, 4, v);
                        }
                    }, {
                        key: "uniformMatrix2fv",
                        value: function(name, v) {
                            this.u.mat(name, 2, v);
                        }
                    }, {
                        key: "uniformMatrix3fv",
                        value: function(name, v) {
                            this.u.mat(name, 3, v);
                        }
                    }, {
                        key: "uniformMatrix4fv",
                        value: function(name, v) {
                            this.u.mat(name, 4, v);
                        }
                    }, {
                        key: "uniformRGBA",
                        value: function(name, color) {
                            this.u.rgba(name, color);
                        }
                    } ]);
                }(), isAdvanced = function(config) {
                    return null !== config && "object" === _typeof(config) && void 0 !== config.default;
                }, copyOf = function(value) {
                    return !0 === Array.isArray(value) ? value.slice() : value;
                }, keyOf = function(props, keyed, w, h) {
                    return 2 === keyed ? props + w + "," + h : props;
                }, ShaderRegistry = function() {
                    return _createClass(function(nodes, owner, pixelRatio, host) {
                        this.onLost = null, this.timed = !1, this.onError = null, this.byName = Object.create(null), 
                        this.records = new Map, this.order = [], this.warmed = 0, this.cache = new Map, 
                        this.entries = new Map, this.masks = [ 0 ], this.batches = [ null ], this.idle = 0, 
                        this.packedNoAlpha = !1, this.users = [], this.next = new Int32Array(0), this.prev = new Int32Array(0), 
                        this.failedSlots = [], this.failedTimes = [], this.thrown = !1, this.thrownError = null, 
                        this.thrownName = "", this.nodes = nodes, this.owner = owner, this.pixelRatio = pixelRatio, 
                        this.host = host, this.writer = new UniformWriter(pixelRatio);
                    }, [ {
                        key: "blockCount",
                        get: function() {
                            return this.cache.size;
                        }
                    }, {
                        key: "register",
                        value: function(name, type) {
                            if (void 0 === this.byName[name]) {
                                var rec = this.records.get(type);
                                void 0 === rec && (rec = this.record(name, type), this.records.set(type, rec), this.order.push(rec)), 
                                this.byName[name] = rec;
                            } else console.warn("Shader type ".concat(name, " is already registered"));
                        }
                    }, {
                        key: "warmNext",
                        value: function() {
                            for (var order = this.order; this.warmed < order.length; ) {
                                var shader = this.defaults(order[this.warmed++]);
                                if (null !== shader && -1 === shader._slot.id) return this.compile(shader, !1), 
                                !0;
                            }
                            return !1;
                        }
                    }, {
                        key: "create",
                        value: function(name, props) {
                            var rec = this.byName[name];
                            if (void 0 === rec) return console.warn("Shader type ".concat(name, " is not registered")), 
                            null;
                            for (var given = void 0 === props ? {} : props, values = {}, names = rec.names, configs = rec.configs, i = 0; i < names.length; i++) {
                                var key = names[i], config = configs[i], value = given[key];
                                !1 === isAdvanced(config) ? values[key] = copyOf(void 0 !== value ? value : config) : void 0 !== config.resolve ? values[key] = config.resolve(value, values) : values[key] = copyOf(void 0 !== value ? value : config.default);
                            }
                            for (var aliases = rec.aliases, _i19 = 0; _i19 < aliases.length; _i19++) {
                                var _value = given[aliases[_i19]];
                                void 0 !== _value && rec.aliasConfigs[_i19].set(_value, values);
                            }
                            var variant = null === rec.variant ? "" : rec.variant(values);
                            return new ShaderNode(this, rec, values, this.slot(rec, variant));
                        }
                    }, {
                        key: "pack",
                        value: function(id) {
                            var s = this.nodes, ref = s.shaderRefs[id], shader = null !== ref && ref._registry === this ? ref : null, users = this.users;
                            if (null !== shader || !(id >= users.length || null === users[id])) if (this.ensure(id), 
                            users[id] !== shader && (this.detach(id), null !== shader && this.attach(shader, id)), 
                            null !== shader) {
                                var props = shader._key, fresh = null === props;
                                null === props && (!0 === shader._rederive && (shader._rederive = !1, this.rederive(shader)), 
                                props = this.propsKey(shader), shader._key = props);
                                var slot = shader._slot;
                                if (-1 === slot.id && this.compile(shader, !0), 0 !== slot.id) {
                                    var w = s.f64[32 * id + 0], h = s.f64[32 * id + 1], keyed = slot.keyed, current = s.params[id];
                                    if (null === current || !0 !== this.holds(current, props, keyed, w, h)) {
                                        var block = null;
                                        if (0 !== keyed && null === (block = this.cached(shader, fresh, keyed, w, h))) {
                                            var packed = shader._key;
                                            if (block = null === shader._rec.pack ? new Float32Array(0) : this.packBlock(shader, w, h), 
                                            0 === s.i32[32 * id + 2]) return;
                                            if (null === block) return void this.unset(id);
                                            this.add(block, packed, keyed, w, h, null !== shader._rec.pack && this.packedNoAlpha);
                                        }
                                        this.unref(current);
                                        var noAlpha = !1;
                                        if (null !== block) {
                                            var entry = this.entries.get(block);
                                            0 === entry.refs && this.idle--, entry.refs++, noAlpha = entry.noAlpha;
                                        }
                                        s.params[id] = block;
                                        var program = slot.id;
                                        s.i32[32 * id + 13] = program;
                                        var state = s.u32[32 * id + 1];
                                        state = 13 & this.masks[program] || null !== this.batches[program] ? 256 | state : -257 & state, 
                                        s.u32[32 * id + 1] = !0 === noAlpha ? 134217728 | state : -134217729 & state;
                                    }
                                } else this.unset(id);
                            } else this.unset(id);
                        }
                    }, {
                        key: "perOpMatch",
                        value: function(id, opNode) {
                            var s = this.nodes, program = s.i32[32 * id + 13];
                            if (s.i32[32 * opNode + 13] !== program) return !0;
                            var canBatch = this.batches[program];
                            if (null !== canBatch) return canBatch(s.handles[id], s.handles[opNode]);
                            var mask = this.masks[program];
                            return !(1 & mask && s.f64[32 * id + 4] !== s.f64[32 * opNode + 4] && !(134217728 & s.u32[32 * id + 1])) && ((!(4 & mask) || s.f64[32 * id + 6] === s.f64[32 * opNode + 6] && s.f64[32 * id + 8] === s.f64[32 * opNode + 8] && s.f64[32 * id + 9] === s.f64[32 * opNode + 9] && s.f64[32 * id + 7] === s.f64[32 * opNode + 7]) && (!(8 & mask) || s.f32[32 * id + 23] === s.f32[32 * opNode + 23] && s.f32[32 * id + 24] === s.f32[32 * opNode + 24] && s.f32[32 * id + 25] === s.f32[32 * opNode + 25] && s.f32[32 * id + 26] === s.f32[32 * opNode + 26]));
                        }
                    }, {
                        key: "release",
                        value: function(id) {
                            id < this.users.length && (this.detach(id), this.unset(id));
                        }
                    }, {
                        key: "markUsers",
                        value: function(shader) {
                            for (var nodes = this.nodes, next = this.next, id = shader._head; -1 !== id; ) nodes.markDirty(id, 32), 
                            id = next[id];
                        }
                    }, {
                        key: "trim",
                        value: function() {
                            for (var failedSlots = this.failedSlots, i = 0; i < failedSlots.length; i++) failedSlots[i].packFailed = !1;
                            failedSlots.length = 0;
                            for (var failedTimes = this.failedTimes, _i20 = 0; _i20 < failedTimes.length; _i20++) failedTimes[_i20].timeThrew = !1;
                            failedTimes.length = 0, this.dropIdle();
                        }
                    }, {
                        key: "dropIdle",
                        value: function() {
                            var cache = this.cache, entries = this.entries;
                            entries.forEach(function(entry, block) {
                                0 === entry.refs && (entries.delete(block), cache.delete(entry.key));
                            }), this.idle = 0;
                        }
                    }, {
                        key: "reportErrors",
                        value: function() {
                            if (!1 !== this.thrown) {
                                this.thrown = !1;
                                var error = this.thrownError;
                                this.thrownError = null;
                                var onError = this.onError;
                                null !== onError ? onError(error) : console.error("Shader ".concat(this.thrownName, " time function threw"), error);
                            }
                        }
                    }, {
                        key: "program",
                        value: function(vertex, fragment, failure, name) {
                            try {
                                return this.host.register(vertex, fragment, null, new UniformTable, null, name);
                            } catch (error) {
                                return null === failure ? -1 : (this.failed(failure, error), 0);
                            }
                        }
                    }, {
                        key: "record",
                        value: function(name, type) {
                            var _type$props, _type$pack, _ref, _type$variant, _type$variantProps, _this10 = this, names = [], configs = [], aliases = [], aliasConfigs = [], colors = [], props = null !== (_type$props = type.props) && void 0 !== _type$props ? _type$props : {};
                            for (var key in props) {
                                var config = props[key];
                                !0 === isAdvanced(config) && !0 === config.color && colors.push(key), !0 !== isAdvanced(config) || void 0 === config.set ? (names.push(key), 
                                configs.push(config)) : (aliases.push(key), aliasConfigs.push(config));
                            }
                            var pack = null !== (_type$pack = type.pack) && void 0 !== _type$pack ? _type$pack : null, update = type.update;
                            if (null === pack && void 0 !== update) {
                                var context = new UpdateContext(this.pixelRatio), node = {
                                    w: 0,
                                    h: 0,
                                    width: 0,
                                    height: 0
                                };
                                pack = function(values, w, h, u) {
                                    context.props = values, context.u = u, node.w = w, node.width = w, node.h = h, node.height = h, 
                                    update.call(context, node);
                                };
                            }
                            var variant = null !== (_ref = null !== (_type$variant = type.variant) && void 0 !== _type$variant ? _type$variant : type.getCacheMarkers) && void 0 !== _ref ? _ref : null, variantProps = null === variant ? null : null !== (_type$variantProps = type.variantProps) && void 0 !== _type$variantProps ? _type$variantProps : null, time = type.time, owner = this.owner, timeOf = null;
                            return !0 === time ? timeOf = function() {
                                return _this10.drawn(owner.elapsedTime);
                            } : "function" == typeof time && (timeOf = function(node) {
                                var shader = _this10.users[node];
                                return _this10.drawn(null == shader ? null : _this10.evaluate(time, shader));
                            }), {
                                id: this.records.size,
                                name: name,
                                type: type,
                                names: names,
                                configs: configs,
                                aliases: aliases,
                                aliasConfigs: aliasConfigs,
                                colors: colors,
                                proto: facadeProto(names, configs, aliases, aliasConfigs, variantProps),
                                slots: Object.create(null),
                                pack: pack,
                                variant: variant,
                                timeOf: timeOf,
                                variants: 0,
                                variantThrew: !1,
                                timeThrew: !1
                            };
                        }
                    }, {
                        key: "holds",
                        value: function(block, props, keyed, w, h) {
                            var entry = this.entries.get(block);
                            return entry.props === props && (2 !== keyed || entry.w === w && entry.h === h);
                        }
                    }, {
                        key: "cached",
                        value: function(shader, fresh, keyed, w, h) {
                            var cache = this.cache, key = shader._key, block = cache.get(keyOf(key, keyed, w, h));
                            if (void 0 !== block) return block;
                            if (!0 === fresh) return null;
                            var props = this.propsKey(shader);
                            if (props === key) return null;
                            shader._key = props;
                            var rebuilt = cache.get(keyOf(props, keyed, w, h));
                            return void 0 === rebuilt ? null : rebuilt;
                        }
                    }, {
                        key: "add",
                        value: function(block, props, keyed, w, h, noAlpha) {
                            this.idle > 256 && this.dropIdle();
                            var key = keyOf(props, keyed, w, h);
                            this.cache.set(key, block), this.entries.set(block, {
                                key: key,
                                props: props,
                                w: w,
                                h: h,
                                noAlpha: noAlpha,
                                refs: 0
                            }), this.idle++;
                        }
                    }, {
                        key: "propsKey",
                        value: function(shader) {
                            for (var rec = shader._rec, values = shader.values, names = rec.names, key = rec.id + "|" + shader._slot.variant, i = 0; i < names.length; i++) {
                                var value = values[names[i]];
                                key += "|" + (!0 === Array.isArray(value) ? value.join(",") : String(value));
                            }
                            return key + "|";
                        }
                    }, {
                        key: "compile",
                        value: function(shader, report) {
                            var slot = shader._slot, rec = shader._rec, type = rec.type, host = this.host, ratio = this.pixelRatio, context = {
                                pixelRatio: ratio,
                                viewport: host.viewport,
                                stage: {
                                    pixelRatio: ratio
                                }
                            }, values = shader.values;
                            try {
                                for (var _type$webgl1Extension, _type$canBatch, vertex = void 0 === type.vertex ? defaultVertex(host.viewport, "varying vec2 v_nodeCoords;", "v_nodeCoords=a_nodeCoords;") : "string" == typeof type.vertex ? type.vertex : type.vertex(context, values), fragment = "string" == typeof type.fragment ? type.fragment : type.fragment(context, values), id = host.register(vertex, fragment, null !== (_type$webgl1Extension = type.webgl1Extensions) && void 0 !== _type$webgl1Extension ? _type$webgl1Extension : null, slot.table, rec.timeOf, "" === slot.variant ? rec.name : rec.name + ":" + slot.variant), masks = this.masks, batches = this.batches; masks.length <= id; ) masks.push(0), 
                                batches.push(null);
                                var mask = host.systemMask(id);
                                masks[id] = mask, batches[id] = null !== (_type$canBatch = type.canBatch) && void 0 !== _type$canBatch ? _type$canBatch : null, 
                                slot.keyed = null !== rec.pack || 16 & mask ? 2 : 2 & mask && "function" == typeof type.time ? 1 : 0, 
                                slot.id = id;
                            } catch (error) {
                                if (!1 === report) return;
                                slot.id = 0, this.failed("Shader ".concat(rec.name, " failed to compile; its nodes draw without it"), error);
                            }
                        }
                    }, {
                        key: "defaults",
                        value: function(rec) {
                            try {
                                return this.create(rec.name);
                            } catch (error) {
                                return null;
                            }
                        }
                    }, {
                        key: "packBlock",
                        value: function(shader, w, h) {
                            var slot = shader._slot;
                            if (!0 === slot.packFailed) return null;
                            var u = this.writer;
                            try {
                                shader._rec.pack(shader.values, w, h, u);
                            } catch (error) {
                                return u.reset(), slot.packFailed = !0, this.failedSlots.push(slot), console.error("Shader ".concat(shader._rec.name, " failed to pack; its nodes draw without it"), error), 
                                null;
                            }
                            return this.packedNoAlpha = u.noAlpha, u.finish(slot.table);
                        }
                    }, {
                        key: "slot",
                        value: function(rec, variant) {
                            var slot = rec.slots[variant];
                            return void 0 === slot && (slot = {
                                id: -1,
                                variant: variant,
                                table: new UniformTable,
                                keyed: 0,
                                packFailed: !1
                            }, rec.slots[variant] = slot, rec.variants++, 17 === rec.variants && console.warn("Shader ".concat(rec.name, " has more than 16 variants: each compiles a program of its own"))), 
                            slot;
                        }
                    }, {
                        key: "rederive",
                        value: function(shader) {
                            var variant, rec = shader._rec;
                            try {
                                variant = rec.variant(shader.values);
                            } catch (error) {
                                return void (!1 === rec.variantThrew && (rec.variantThrew = !0, console.error("Shader ".concat(rec.name, " variant threw; its nodes keep their program"), error)));
                            }
                            variant !== shader._slot.variant && (shader._slot = this.slot(rec, variant));
                        }
                    }, {
                        key: "drawn",
                        value: function(t) {
                            return "number" != typeof t ? 0 : (t == t && (this.timed = !0), t);
                        }
                    }, {
                        key: "evaluate",
                        value: function(time, shader) {
                            try {
                                return time(this.owner, shader.values);
                            } catch (error) {
                                var rec = shader._rec;
                                return !1 === this.thrown && !1 === rec.timeThrew && (rec.timeThrew = !0, this.failedTimes.push(rec), 
                                this.thrown = !0, this.thrownError = error, this.thrownName = rec.name), null;
                            }
                        }
                    }, {
                        key: "failed",
                        value: function(message, error) {
                            if (!0 !== this.host.isLost()) console.error(message, error); else {
                                var onLost = this.onLost;
                                null !== onLost && onLost();
                            }
                        }
                    }, {
                        key: "unset",
                        value: function(id) {
                            var s = this.nodes;
                            this.unref(s.params[id]), s.params[id] = null, s.i32[32 * id + 13] = 0, s.u32[32 * id + 1] = -134217985 & s.u32[32 * id + 1];
                        }
                    }, {
                        key: "unref",
                        value: function(block) {
                            if (null !== block) {
                                var entry = this.entries.get(block);
                                entry.refs--, 0 === entry.refs && this.idle++;
                            }
                        }
                    }, {
                        key: "ensure",
                        value: function(id) {
                            var users = this.users;
                            if (!(id < users.length)) {
                                for (var n = this.nodes.capacity; users.length < n; ) users.push(null);
                                var old = this.next.length, next = new Int32Array(n);
                                next.set(this.next);
                                var prev = new Int32Array(n);
                                prev.set(this.prev);
                                for (var i = old; i < n; i++) next[i] = -1, prev[i] = -1;
                                this.next = next, this.prev = prev;
                            }
                        }
                    }, {
                        key: "attach",
                        value: function(shader, id) {
                            var head = shader._head;
                            this.users[id] = shader, this.next[id] = head, this.prev[id] = -1, -1 !== head && (this.prev[head] = id), 
                            shader._head = id;
                        }
                    }, {
                        key: "detach",
                        value: function(id) {
                            var shader = this.users[id];
                            if (null !== shader) {
                                var next = this.next, prev = this.prev, p = prev[id], n = next[id];
                                -1 !== p ? next[p] = n : shader._head = n, -1 !== n && (prev[n] = p), next[id] = -1, 
                                prev[id] = -1, this.users[id] = null;
                            }
                        }
                    } ]);
                }(), PROTOCOL_REGEX = /^(blob|data|file|ftps?|https?):/, IS_FILE_PROTOCOL = "undefined" != typeof self && "file:" === self.location.protocol, 
                REQUEST_TIMEOUT = 3e4, getDefaultPlatform = function() {
                    return null;
                }, WebPlatform = function(_Platform) {
                    function WebPlatform() {
                        var _this11;
                        return (_this11 = _callSuper(this, WebPlatform, arguments)).presented = !1, _this11;
                    }
                    return _inherits(WebPlatform, _Platform), _createClass(WebPlatform, [ {
                        key: "createCanvas",
                        value: function() {
                            return document.createElement("canvas");
                        }
                    }, {
                        key: "getElementById",
                        value: function(id) {
                            return document.getElementById(id);
                        }
                    }, {
                        key: "sizeCanvas",
                        value: function(canvas, width, height, logicalWidth, logicalHeight) {
                            canvas.width = width, canvas.height = height;
                            var style = canvas.style;
                            null != style && (style.width = "".concat(logicalWidth, "px"), style.height = "".concat(logicalHeight, "px"));
                        }
                    }, {
                        key: "requestAnimationFrame",
                        value: function(_requestAnimationFrame) {
                            function requestAnimationFrame(_x2) {
                                return _requestAnimationFrame.apply(this, arguments);
                            }
                            return requestAnimationFrame.toString = function() {
                                return _requestAnimationFrame.toString();
                            }, requestAnimationFrame;
                        }(function(callback) {
                            return requestAnimationFrame(callback);
                        })
                    }, {
                        key: "cancelAnimationFrame",
                        value: function(_cancelAnimationFrame) {
                            function cancelAnimationFrame(_x3) {
                                return _cancelAnimationFrame.apply(this, arguments);
                            }
                            return cancelAnimationFrame.toString = function() {
                                return _cancelAnimationFrame.toString();
                            }, cancelAnimationFrame;
                        }(function(handle) {
                            cancelAnimationFrame(handle);
                        })
                    }, {
                        key: "setTimeout",
                        value: function(_setTimeout) {
                            function setTimeout(_x4, _x5) {
                                return _setTimeout.apply(this, arguments);
                            }
                            return setTimeout.toString = function() {
                                return _setTimeout.toString();
                            }, setTimeout;
                        }(function(callback, ms) {
                            setTimeout(callback, ms);
                        })
                    }, {
                        key: "hidden",
                        value: function() {
                            return "undefined" != typeof document && !0 === document.hidden;
                        }
                    }, {
                        key: "present",
                        value: function(canvas) {
                            var style = canvas.style;
                            if (null != style) {
                                var presented = !1 === this.presented;
                                this.presented = presented, style.opacity = !0 === presented ? "0.999" : "1";
                            }
                        }
                    }, {
                        key: "now",
                        value: function() {
                            return performance.now();
                        }
                    }, {
                        key: "createImageBitmap",
                        value: function(_createImageBitmap) {
                            function createImageBitmap(_x6, _x7, _x8, _x9, _x0, _x1) {
                                return _createImageBitmap.apply(this, arguments);
                            }
                            return createImageBitmap.toString = function() {
                                return _createImageBitmap.toString();
                            }, createImageBitmap;
                        }(function(source, sxOrOptions, sy, sw, sh, options) {
                            return "function" != typeof createImageBitmap ? Promise.reject(new Error("createImageBitmap is not supported")) : void 0 === sxOrOptions ? createImageBitmap(source) : "number" == typeof sxOrOptions ? createImageBitmap(source, sxOrOptions, sy, sw, sh, options) : createImageBitmap(source, sxOrOptions);
                        })
                    }, {
                        key: "createImage",
                        value: function() {
                            return new Image;
                        }
                    }, {
                        key: "fetch",
                        value: function(url, responseType) {
                            return new Promise(function(resolve, reject) {
                                var xhr = new XMLHttpRequest;
                                xhr.responseType = responseType, xhr.onreadystatechange = function() {
                                    if (4 === xhr.readyState) {
                                        var status = xhr.status;
                                        status >= 200 && status < 300 || 0 === status && null !== xhr.response ? resolve(xhr.response) : reject(new Error(0 === status ? "Network error or timeout loading ".concat(url) : "HTTP ".concat(status, " ").concat(xhr.statusText, " loading ").concat(url)));
                                    }
                                }, xhr.open("GET", url, !0), xhr.timeout = REQUEST_TIMEOUT, xhr.send(null);
                            });
                        }
                    }, {
                        key: "createWorker",
                        value: function(source) {
                            if ("undefined" == typeof Worker) return null;
                            var url = URL.createObjectURL(new Blob([ source ], {
                                type: "application/javascript"
                            })), worker = null;
                            try {
                                worker = new Worker(url);
                            } catch (e) {
                                worker = null;
                            }
                            return URL.revokeObjectURL(url), worker;
                        }
                    } ]);
                }(function() {
                    return _createClass(function() {}, [ {
                        key: "resolveSettings",
                        value: function(settings) {
                            return settings;
                        }
                    }, {
                        key: "hidden",
                        value: function() {
                            return !1;
                        }
                    }, {
                        key: "present",
                        value: function(_canvas) {}
                    } ]);
                }()), pool = new Map, orNull = function(promise) {
                    return promise.then(function(value) {
                        return value;
                    }, function() {
                        return null;
                    });
                }, isObject$1 = function(value) {
                    return null !== value && "object" === _typeof(value);
                }, texelUnits = function(n) {
                    return Math.round(32768 * n);
                }, GlyphRecord = _createClass(function(glyph, kernColumn, kern, invAtlasWidth, invAtlasHeight) {
                    this.xadvance = glyph.xadvance, this.xoffset = glyph.xoffset, this.yoffset = glyph.yoffset, 
                    this.width = glyph.width, this.height = glyph.height;
                    var u = glyph.x * invAtlasWidth, v = glyph.y * invAtlasHeight, u2 = texelUnits(u + glyph.width * invAtlasWidth), v2 = texelUnits(v + glyph.height * invAtlasHeight), u1 = texelUnits(u), v1 = texelUnits(v);
                    this.uvTopLeft = (v1 << 16 | u1) >>> 0, this.uvTopRight = (v1 << 16 | u2) >>> 0, 
                    this.uvBottomLeft = (v2 << 16 | u1) >>> 0, this.uvBottomRight = (v2 << 16 | u2) >>> 0, 
                    this.kernColumn = kernColumn, this.kern = kern;
                }), EMPTY_PAGE = [];
                for (var i = 0; i < 256; i++) EMPTY_PAGE.push(null);
                FALLBACK_GLYPH = 32, DEFAULT_METRICS = {
                    ascender: 800,
                    descender: -200,
                    lineGap: 200,
                    unitsPerEm: 1e3
                }, CAP_HEIGHT_FALLBACK_RATIO = .7, X_HEIGHT_FALLBACK_RATIO = .5, isInvisible = function(code) {
                    return 8204 === code || 8205 === code || 65279 === code || 173 === code || 8288 === code;
                }, MAX_SIZES = 64, FontRecord = _createClass(function(id, names, options) {
                    var _this12 = this;
                    this.font = null, this.atlas = null, this.rec = -1, this.ready = !1, this.error = null, 
                    this.failures = 0, this.onLoaded = null, this.onFailed = null, this.id = id, this.names = names, 
                    this.atlasUrl = options.atlasUrl, this.atlasDataUrl = options.atlasDataUrl, this.metrics = options.metrics, 
                    this.promise = new Promise(function(resolve, reject) {
                        _this12.resolve = resolve, _this12.reject = reject;
                    });
                }), FontRegistry = function() {
                    return _createClass(function(textures) {
                        this.fetch = null, this.schedule = null, this.onChange = null, this.pending = 0, 
                        this.byName = new Map, this.nextId = 1, this.destroyed = !1, this.textures = textures;
                    }, [ {
                        key: "get",
                        value: function(name) {
                            return this.byName.get(name);
                        }
                    }, {
                        key: "load",
                        value: function(options) {
                            var family = options.fontFamily, names = "string" == typeof family ? [ family ] : family.slice(), aliases = options.aliases;
                            if (void 0 !== aliases) for (var _i21 = 0; _i21 < aliases.length; _i21++) names.push(aliases[_i21]);
                            var primary = names[0], prefetched = function(name) {
                                var prefetched = pool.get(name);
                                return void 0 !== prefetched && pool.delete(name), prefetched;
                            }(primary), byName = this.byName, existing = byName.get(primary);
                            if (void 0 !== existing) return existing.promise;
                            for (var own = [], font = new FontRecord(this.nextId++, own, options), _i22 = 0; _i22 < names.length; _i22++) {
                                var name = names[_i22];
                                !1 === byName.has(name) && (byName.set(name, font), own.push(name));
                            }
                            return this.pending++, this.fetchData(font, prefetched), font.promise;
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.destroyed = !0, this.byName.clear(), this.pending = 0;
                        }
                    }, {
                        key: "stale",
                        value: function() {
                            return this.destroyed;
                        }
                    }, {
                        key: "fetchData",
                        value: function(font, prefetched) {
                            var _this13 = this;
                            (void 0 === prefetched ? this.request(font) : prefetched.data.then(function(d) {
                                return null !== d ? d : _this13.request(font);
                            })).then(function(d) {
                                return function(name, data, metrics) {
                                    for (var _data$kernings, kernings = {}, pairs = null !== (_data$kernings = data.kernings) && void 0 !== _data$kernings ? _data$kernings : [], columns = new Map, i = 0; i < pairs.length; i++) {
                                        var pair = pairs[i], firsts = kernings[pair.second];
                                        void 0 === firsts && (firsts = {}, kernings[pair.second] = firsts), firsts[pair.first] = pair.amount, 
                                        !1 === columns.has(pair.first) && columns.set(pair.first, columns.size);
                                    }
                                    for (var kernAmounts = new Float64Array(pairs.length + 1), rows = new Map, _i2 = 0; _i2 < pairs.length; _i2++) {
                                        var _pair = pairs[_i2], row = rows.get(_pair.second);
                                        void 0 === row && (row = pairs.length < 65536 ? new Uint16Array(columns.size) : new Uint32Array(columns.size), 
                                        rows.set(_pair.second, row)), kernAmounts[_i2 + 1] = _pair.amount, row[columns.get(_pair.first)] = void 0 === _pair.amount ? 0 : _i2 + 1;
                                    }
                                    for (var glyphs = new Map, pages = [], _i3 = 0; _i3 < 256; _i3++) pages.push(EMPTY_PAGE);
                                    for (var astral = new Map, invAtlasWidth = 1 / data.common.scaleW, invAtlasHeight = 1 / data.common.scaleH, chars = data.chars, _i4 = 0; _i4 < chars.length; _i4++) {
                                        var glyph = chars[_i4], id = glyph.id;
                                        if (glyphs.set(id, glyph), !("number" != typeof id || id < 0 || Math.floor(id) !== id)) {
                                            var column = columns.get(id), _row = rows.get(id), record = new GlyphRecord(glyph, void 0 === column || 0 === id ? -1 : column, void 0 === _row ? null : _row, invAtlasWidth, invAtlasHeight);
                                            if (id >= 65536) astral.set(id, record); else {
                                                var page = pages[id >> 8];
                                                page === EMPTY_PAGE && (page = EMPTY_PAGE.slice(), pages[id >> 8] = page), page[255 & id] = record;
                                            }
                                        }
                                    }
                                    var m = null != metrics ? metrics : data.lightningMetrics;
                                    void 0 === m && (console.warn("Font metrics not found for SDF font ".concat(name, ". Make sure you are using the latest version of the Lightning 3 msdf-generator tool to generate your SDF fonts. Using default metrics.")), 
                                    m = DEFAULT_METRICS);
                                    var resolved = {
                                        ascender: m.ascender,
                                        descender: m.descender,
                                        lineGap: m.lineGap,
                                        unitsPerEm: m.unitsPerEm,
                                        capHeight: m.capHeight,
                                        xHeight: m.xHeight
                                    }, base = data.common.base, size = data.info.size;
                                    if (void 0 === resolved.capHeight) {
                                        var cap = glyphs.get(72);
                                        void 0 !== cap && (resolved.capHeight = (base - cap.yoffset) / size * m.unitsPerEm);
                                    }
                                    if (void 0 === resolved.xHeight) {
                                        var x = glyphs.get(120);
                                        void 0 !== x && (resolved.xHeight = (base - x.yoffset) / size * m.unitsPerEm);
                                    }
                                    return {
                                        data: data,
                                        glyphs: glyphs,
                                        kernings: kernings,
                                        metrics: resolved,
                                        sizes: new Map,
                                        pages: pages,
                                        astral: astral,
                                        fallback: pages[0][FALLBACK_GLYPH],
                                        kernAmounts: kernAmounts
                                    };
                                }(font.names[0], d, font.metrics);
                            }).then(function(parsed) {
                                _this13.dataArrived(font, parsed, prefetched);
                            }, function(error) {
                                _this13.dataFailed(font, error);
                            });
                        }
                    }, {
                        key: "request",
                        value: function(font) {
                            var fetch = this.fetch;
                            return null === fetch ? Promise.reject(new Error("No fetch to load the SDF font ".concat(font.names[0], " with"))) : startRequest(fetch, font.atlasDataUrl, "json").then(function(response) {
                                var data = normalizeSdfData(response);
                                if (null === data) throw new Error("Invalid SDF font data format");
                                return data;
                            });
                        }
                    }, {
                        key: "dataFailed",
                        value: function(font, error) {
                            var _this14 = this;
                            if (!0 !== this.stale()) {
                                var failures = font.failures + 1;
                                font.failures = failures;
                                var schedule = this.schedule;
                                failures > 3 || null === schedule ? this.fail(font, error) : (console.warn('SDF font "'.concat(font.names[0], '" failed to load (attempt ').concat(failures, " of 4), retrying."), error), 
                                schedule(function() {
                                    !1 === _this14.stale() && _this14.fetchData(font, void 0);
                                }, retryDelay(failures)));
                            }
                        }
                    }, {
                        key: "dataArrived",
                        value: function(font, parsed, prefetched) {
                            var _this15 = this;
                            !0 !== this.stale() && (font.font = parsed, this.changed(font), void 0 !== prefetched ? prefetched.atlas.then(function(blob) {
                                !1 === _this15.stale() && _this15.makeAtlas(font, blob);
                            }) : this.makeAtlas(font, null));
                        }
                    }, {
                        key: "makeAtlas",
                        value: function(font, blob) {
                            var _this16 = this, store = this.textures, atlas = _createTexture(store, "ImageTexture", null !== blob ? {
                                src: blob,
                                key: font.atlasUrl,
                                premultiplyAlpha: !1,
                                maxRetryCount: 0
                            } : {
                                src: font.atlasUrl,
                                key: font.atlasUrl,
                                premultiplyAlpha: !1
                            }), rec = atlas.id;
                            if (font.atlas = atlas, font.rec = rec, store.ref(rec), store.want(rec, !0), 1 === store.state[rec] && store.onQueued(), 
                            atlas.preventCleanup = !0, 4 !== store.state[rec]) if (!0 !== store.failedForGood(rec)) {
                                var onLoaded = function() {
                                    _this16.atlasArrived(font);
                                }, onFailed = function(_target, error) {
                                    !0 === store.failedForGood(rec) && _this16.atlasFailed(font, error);
                                };
                                font.onLoaded = onLoaded, font.onFailed = onFailed, atlas.on("loaded", onLoaded), 
                                atlas.on("failed", onFailed);
                            } else {
                                var _store$errors$rec;
                                this.atlasFailed(font, null !== (_store$errors$rec = store.errors[rec]) && void 0 !== _store$errors$rec ? _store$errors$rec : new Error("Atlas failed"));
                            } else this.atlasArrived(font);
                        }
                    }, {
                        key: "atlasArrived",
                        value: function(font) {
                            this.unlisten(font), !0 !== this.stale() && (font.ready = !0, this.pending--, font.resolve(), 
                            this.changed(font));
                        }
                    }, {
                        key: "atlasFailed",
                        value: function(font, error) {
                            if (this.unlisten(font), !0 !== this.stale()) {
                                var store = this.textures, rec = font.rec, fromImage = "string" != typeof store.props[rec].src;
                                if (store.unwant(rec), store.unref(rec), !1 == (0 !== store.refCount[rec] || 2 === store.state[rec])) store.destroy(rec); else if (!0 === fromImage) {
                                    var key = store.keys[rec];
                                    store.cache.get(key) === rec && store.cache.delete(key);
                                }
                                font.atlas = null, font.rec = -1, !1 !== fromImage ? this.makeAtlas(font, null) : this.fail(font, error);
                            }
                        }
                    }, {
                        key: "fail",
                        value: function(font, error) {
                            for (var names = font.names, _i23 = 0; _i23 < names.length; _i23++) this.byName.get(names[_i23]) === font && this.byName.delete(names[_i23]);
                            this.pending--, font.error = error, console.error("Failed to load SDF font: ".concat(names[0]), error), 
                            font.reject(error), this.changed(font);
                        }
                    }, {
                        key: "unlisten",
                        value: function(font) {
                            var atlas = font.atlas;
                            null !== atlas && null !== font.onLoaded && (atlas.off("loaded", font.onLoaded), 
                            atlas.off("failed", font.onFailed), font.onLoaded = null, font.onFailed = null);
                        }
                    }, {
                        key: "changed",
                        value: function(font) {
                            var onChange = this.onChange;
                            null !== onChange && onChange(font);
                        }
                    } ]);
                }(), separators = [], LayoutEntry = _createClass(function(font, p, layout, next, stamp) {
                    this.font = font, this.text = p.text, this.fontSize = p.fontSize, this.fontStyle = p.fontStyle, 
                    this.letterSpacing = p.letterSpacing, this.lineHeight = p.lineHeight, this.maxWidth = p.maxWidth, 
                    this.maxHeight = p.maxHeight, this.maxLines = p.maxLines, this.textAlign = p.textAlign, 
                    this.wordBreak = p.wordBreak, this.overflowSuffix = p.overflowSuffix, this.layout = layout, 
                    this.next = next, this.stamp = stamp;
                }), LayoutCache = function() {
                    return _createClass(function(max) {
                        this.fonts = new Map, this.entries = [], this.clock = 0, this.max = max;
                    }, [ {
                        key: "size",
                        get: function() {
                            return this.entries.length;
                        }
                    }, {
                        key: "get",
                        value: function(font, p) {
                            var texts = this.fonts.get(font);
                            if (void 0 !== texts) for (var e = texts.get(p.text); null != e; ) {
                                if (e.fontSize === p.fontSize && e.maxWidth === p.maxWidth && e.maxLines === p.maxLines && e.maxHeight === p.maxHeight && e.lineHeight === p.lineHeight && e.letterSpacing === p.letterSpacing && e.textAlign === p.textAlign && e.wordBreak === p.wordBreak && e.overflowSuffix === p.overflowSuffix && e.fontStyle === p.fontStyle) return e.stamp = ++this.clock, 
                                e.layout;
                                e = e.next;
                            }
                        }
                    }, {
                        key: "set",
                        value: function(font, p, layout) {
                            var fonts = this.fonts, texts = fonts.get(font);
                            void 0 === texts && (texts = new Map, fonts.set(font, texts));
                            var text = p.text, head = texts.get(text), e = new LayoutEntry(font, p, layout, void 0 === head ? null : head, ++this.clock);
                            texts.set(text, e), this.entries.push(e), this.trim();
                        }
                    }, {
                        key: "trim",
                        value: function() {
                            for (var max = this.max > 0 ? this.max : 0; this.entries.length > max; ) this.evictOldest();
                        }
                    }, {
                        key: "evictOldest",
                        value: function() {
                            for (var entries = this.entries, last = entries.length - 1, oldest = 0, stamp = entries[0].stamp, _i24 = 1; _i24 <= last; _i24++) {
                                var s = entries[_i24].stamp;
                                s < stamp && (stamp = s, oldest = _i24);
                            }
                            var e = entries[oldest];
                            entries[oldest] = entries[last], entries.pop();
                            var fonts = this.fonts, texts = fonts.get(e.font), text = e.text, prev = texts.get(text);
                            if (prev === e) return null !== e.next ? void texts.set(text, e.next) : (texts.delete(text), 
                            void (0 === texts.size && fonts.delete(e.font)));
                            for (;prev.next !== e; ) prev = prev.next;
                            prev.next = e.next;
                        }
                    } ]);
                }(), TextNodes = function() {
                    return _createClass(function(nodes, fonts, loadedEvents, events, cacheSize, baselineMode, idleLayouts) {
                        var _this17 = this;
                        this.waiting = new Map, this.forced = [], this.nodes = nodes, this.fonts = fonts, 
                        this.loadedEvents = loadedEvents, this.events = events, this.cache = new LayoutCache(cacheSize), 
                        this.baselineMode = baselineMode, this.idleLayouts = idleLayouts, fonts.onChange = function(font) {
                            return _this17.fontChanged(font);
                        };
                    }, [ {
                        key: "layoutText",
                        value: function(id) {
                            var s = this.nodes, t = s.texts[id], name = t.fontFamily;
                            null !== t.waiting && t.waiting !== name && this.unpark(id, t);
                            var font = this.fonts.get(name);
                            if (void 0 === font || null === font.font) return t.layout = null, t.font = null, 
                            s.u32[32 * id + 1] = -33554433 & s.u32[32 * id + 1], this.park(id, t, name), 0;
                            var raised = 0, layout = t.layout;
                            !0 !== t.stale && null !== layout && t.font === font || (layout = this.lay(id, t, font, font.font), 
                            raised = s.applySizeInVisit(id, layout.width, layout.height)), raised |= this.place(id, t, layout);
                            var state = s.u32[32 * id + 1];
                            return !1 === font.ready ? (s.u32[32 * id + 1] = -33554433 & state, this.park(id, t, name), 
                            raised) : (s.u32[32 * id + 1] = layout.glyphCount > 0 ? 33554432 | state : -33554433 & state, 
                            raised);
                        }
                    }, {
                        key: "measure",
                        value: function(id) {
                            var s = this.nodes, t = s.texts[id], font = this.fonts.get(t.fontFamily);
                            if (void 0 === font || null === font.font) return !1;
                            if (!1 === t.stale && null !== t.layout && t.font === font) return !0;
                            var layout = this.lay(id, t, font, font.font);
                            return s.applySize(id, layout.width, layout.height), s.markDirty(id, 256), !0;
                        }
                    }, {
                        key: "lay",
                        value: function(id, t, font, sdf) {
                            t.stale = !1, t.font = font;
                            var layout = this.cached(font, sdf, t);
                            t.layout = layout;
                            var node = this.nodes.handles[id];
                            return !0 === node.hasListener("loaded") && this.loadedEvents.queue(node, "loaded", {
                                type: "text",
                                dimensions: {
                                    w: layout.width,
                                    h: layout.height
                                }
                            }), layout;
                        }
                    }, {
                        key: "measureAhead",
                        value: function(t) {
                            var font = this.fonts.get(t.fontFamily);
                            return void 0 === font || null === font.font ? null : this.cached(font, font.font, t);
                        }
                    }, {
                        key: "layoutAhead",
                        value: function() {
                            var budget = this.idleLayouts;
                            if (budget <= 0) return 0;
                            for (var s = this.nodes, u32 = s.u32, texts = s.texts, cache = this.cache, made = 0, id = 0; id < texts.length && made < budget; id++) {
                                var t = texts[id];
                                if (null !== t && 256 & u32[32 * id + 0]) {
                                    var font = this.fonts.get(t.fontFamily);
                                    void 0 !== font && null !== font.font && (!1 === t.stale && null !== t.layout && t.font === font || void 0 === cache.get(font.id, t) && (cache.set(font.id, t, layoutText(t, font.font, this.baselineMode)), 
                                    made++));
                                }
                            }
                            return made;
                        }
                    }, {
                        key: "cached",
                        value: function(font, sdf, t) {
                            var cache = this.cache, layout = cache.get(font.id, t);
                            return void 0 === layout && (layout = layoutText(t, sdf, this.baselineMode), cache.set(font.id, t, layout)), 
                            layout;
                        }
                    }, {
                        key: "drainForced",
                        value: function() {
                            for (var s = this.nodes, forced = this.forced, _i25 = 0; _i25 < forced.length; _i25++) {
                                var id = forced[_i25], d = s.u32[32 * id + 0];
                                if (256 & d) {
                                    s.u32[32 * id + 0] = -257 & d | 64;
                                    var raised = this.layoutText(id);
                                    0 !== raised && s.markDirty(id, raised);
                                }
                            }
                        }
                    }, {
                        key: "force",
                        value: function(id, on) {
                            var t = this.nodes.texts[id];
                            if (t.forced !== on) {
                                t.forced = on;
                                var forced = this.forced;
                                if (!0 !== on) {
                                    var i = forced.indexOf(id);
                                    forced[i] = forced[forced.length - 1], forced.pop();
                                } else forced.push(id);
                            }
                        }
                    }, {
                        key: "release",
                        value: function(id) {
                            var t = this.nodes.texts[id];
                            null !== t && (null !== t.waiting && this.unpark(id, t), !0 === t.forced && this.force(id, !1));
                        }
                    }, {
                        key: "trim",
                        value: function() {
                            this.cache.trim();
                        }
                    }, {
                        key: "place",
                        value: function(id, t, layout) {
                            var s = this.nodes, w = s.f64[32 * id + 0], h = s.f64[32 * id + 1], contain = t.contain, maxWidth = t.maxWidth, maxHeight = t.maxHeight, inWidth = ("width" === contain || "both" === contain) && maxWidth > 0, boxW = !0 === inWidth ? maxWidth : w, boxH = !0 === (("height" === contain || "both" === contain) && maxHeight > 0) ? maxHeight : h, x = 0;
                            !0 === inWidth && ("right" === t.textAlign ? x = maxWidth - w : "center" === t.textAlign && (x = .5 * (maxWidth - w)));
                            var y = 0, slack = (maxHeight > 0 ? maxHeight : h) - layout.height;
                            slack > 0 && ("bottom" === t.verticalAlign ? y = slack : "middle" === t.verticalAlign && (y = .5 * slack)), 
                            y += t.offsetY;
                            var boxed = !1 === same(boxW, w) || !1 === same(boxH, h) || !1 === same(x, 0) || !1 === same(y, 0), state = s.u32[32 * id + 1];
                            return boxed === !!(67108864 & state) && (!1 === boxed || !0 === same(t.boxW, boxW) && !0 === same(t.boxH, boxH) && !0 === same(t.boxX, x) && !0 === same(t.boxY, y)) ? 0 : (t.boxW = boxW, 
                            t.boxH = boxH, t.boxX = x, t.boxY = y, s.u32[32 * id + 1] = !0 === boxed ? 67108864 | state : -67108865 & state, 
                            1);
                        }
                    }, {
                        key: "park",
                        value: function(id, t, name) {
                            if (t.waiting !== name) {
                                var list = this.waiting.get(name);
                                void 0 === list && (list = [], this.waiting.set(name, list)), list.push(id), t.waiting = name;
                            }
                        }
                    }, {
                        key: "unpark",
                        value: function(id, t) {
                            var name = t.waiting;
                            t.waiting = null;
                            var list = this.waiting.get(name);
                            if (void 0 !== list) {
                                var i = list.indexOf(id);
                                -1 !== i && (list[i] = list[list.length - 1], list.pop()), 0 === list.length && this.waiting.delete(name);
                            }
                        }
                    }, {
                        key: "fontChanged",
                        value: function(font) {
                            for (var s = this.nodes, error = font.error, ready = font.ready, names = font.names, _i26 = 0; _i26 < names.length; _i26++) {
                                var name = names[_i26], list = this.waiting.get(name);
                                if (void 0 !== list) if (null === error) {
                                    !0 === ready && this.waiting.delete(name);
                                    for (var j = 0; j < list.length; j++) {
                                        var id = list[j];
                                        !0 === ready && (s.texts[id].waiting = null), s.markDirty(id, 256);
                                    }
                                } else this.tellFailed(list, error, names);
                            }
                        }
                    }, {
                        key: "tellFailed",
                        value: function(list, error, names) {
                            for (var s = this.nodes, _i27 = 0; _i27 < list.length; _i27++) {
                                var id = list[_i27], node = s.handles[id];
                                !1 !== node.hasListener("failed") && -1 !== names.indexOf(s.texts[id].fontFamily) && (this.events.queue(node, "failed", {
                                    type: "text",
                                    error: error
                                }), s.markDirty(id, 0));
                            }
                        }
                    } ]);
                }(), sdfVertex = function(viewport) {
                    return PRECISION + "attribute vec2 a_position;attribute highp vec2 a_textureTexels;attribute vec4 a_color;attribute float a_extra;\n" + viewport + "varying vec4 v_color;varying vec2 v_textureCoords;varying float v_range;\nvoid main(){v_color=a_color;v_textureCoords=a_textureTexels*(1.0/32768.0);v_range=a_extra*PIXEL_RATIO;gl_Position=pxToClip(a_position);}";
                }, SDF_FRAGMENT = PRECISION + "uniform sampler2D u_texture;varying vec4 v_color;varying vec2 v_textureCoords;varying float v_range;\nfloat median(float r,float g,float b){return clamp(b,min(r,g),max(r,g));}\nvoid main(){vec3 s=texture2D(u_texture,v_textureCoords).rgb;float d=v_range*(median(s.r,s.g,s.b)-0.5);gl_FragColor=v_color*clamp(d+0.5,0.0,1.0);}", 
                TextEmitter = function() {
                    return _createClass(function(nodes, stream, ops, shaders, flush) {
                        this.program = -1, this.warmed = !1, this.nodes = nodes, this.stream = stream, this.ops = ops, 
                        this.shaders = shaders, this.flush = flush;
                    }, [ {
                        key: "warm",
                        value: function() {
                            return !0 !== this.warmed && -1 === this.program && (this.warmed = !0, this.program = this.shaders.program(sdfVertex(this.shaders.host.viewport), SDF_FRAGMENT, null, "Sdf"), 
                            !0);
                        }
                    }, {
                        key: "emitText",
                        value: function(id) {
                            var program = this.program;
                            if (-1 === program && (program = this.shaders.program(sdfVertex(this.shaders.host.viewport), SDF_FRAGMENT, "The SDF text program failed to compile; text does not draw", "Sdf"), 
                            this.program = program), 0 !== program) {
                                for (var s = this.nodes, o = 32 * id, fo = 32 * id, t = s.texts[id], layout = t.layout, texture = t.font.rec, clip = s.i32[o + 6], color = 0 === s.u32[o + 15] ? premultiplyColorABGR(4294967295, s.f64[fo + 4]) : s.u32[o + 7], extra = layout.distanceRange, fs = layout.fontScale, tx = s.f64[fo + 2], ty = s.f64[fo + 3], translate = !!(2 & s.u32[o + 1]), m0 = s.f64[fo + 6] * fs, m1 = s.f64[fo + 9] * fs, m3 = s.f64[fo + 8] * fs, m4 = s.f64[fo + 7] * fs, g = layout.f32, gu = layout.u32, n = layout.glyphCount, stream = this.stream, ops = this.ops, f = stream.f32, u = stream.u32, end = f.length, w = stream.cursor, first = stream.quadCount, run = 0, _i28 = 0; _i28 < n; _i28++) {
                                    w >= end && (stream.cursor = w, run > 0 && ops.addRun(program, null, texture, clip, id, first, run), 
                                    this.flush(), w = 0, first = 0, run = 0);
                                    var _o = 8 * _i28, gx1 = g[_o], gy1 = g[_o + 1], gx2 = gx1 + g[_o + 2], gy2 = gy1 + g[_o + 3], x0 = void 0, y0 = void 0, x1 = void 0, y1 = void 0, x2 = void 0, y2 = void 0, x3 = void 0, y3 = void 0;
                                    !0 === translate ? (x2 = x0 = fs * gx1 + tx, x3 = x1 = fs * gx2 + tx, y1 = y0 = fs * gy1 + ty, 
                                    y3 = y2 = fs * gy2 + ty) : (x0 = m0 * gx1 + m3 * gy1 + tx, y0 = m1 * gx1 + m4 * gy1 + ty, 
                                    x1 = m0 * gx2 + m3 * gy1 + tx, y1 = m1 * gx2 + m4 * gy1 + ty, x2 = m0 * gx1 + m3 * gy2 + tx, 
                                    y2 = m1 * gx1 + m4 * gy2 + ty, x3 = m0 * gx2 + m3 * gy2 + tx, y3 = m1 * gx2 + m4 * gy2 + ty), 
                                    f[w] = x0, f[w + 1] = y0, u[w + 2] = gu[_o + 4], u[w + 3] = color, f[w + 4] = extra, 
                                    f[w + 5] = x1, f[w + 6] = y1, u[w + 7] = gu[_o + 5], u[w + 8] = color, f[w + 9] = extra, 
                                    f[w + 10] = x2, f[w + 11] = y2, u[w + 12] = gu[_o + 6], u[w + 13] = color, f[w + 14] = extra, 
                                    f[w + 15] = x3, f[w + 16] = y3, u[w + 17] = gu[_o + 7], u[w + 18] = color, f[w + 19] = extra, 
                                    w += 20, run++;
                                }
                                stream.cursor = w, run > 0 && ops.addRun(program, null, texture, clip, id, first, run);
                            }
                        }
                    } ]);
                }(), CORE_DEFAULTS = {
                    appWidth: 1920,
                    appHeight: 1080,
                    boundsMargin: [ 100, 100, 450, 50 ],
                    deviceLogicalPixelRatio: 1,
                    devicePhysicalPixelRatio: 1,
                    quadBufferSize: MAX_QUADS,
                    textLayoutCacheSize: 250,
                    idleTextLayouts: 8,
                    textBaselineMode: "optical"
                }, _export("st", RendererCore = function(_EventEmitter3) {
                    function RendererCore() {
                        var _this18, _settings$appWidth, _settings$appHeight, _settings$boundsMargi, _settings$deviceLogic, _settings$devicePhysi, _settings$textLayoutC, _settings$idleTextLay, _settings$textBaselin, settings = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        (_this18 = _callSuper(this, RendererCore)).elapsedTime = 0, _this18.deltaTime = 0, 
                        _this18.lastFrameTime = 0, _this18.currentFrameTime = 0, _this18.frameRequested = !1, 
                        _this18.updateIterations = 0, _this18.flushes = 0, _this18.flushedOps = 0, _this18.onFlush = null, 
                        _this18.postUpdate = null, _this18.renderRequested = !1;
                        var resolved = {
                            appWidth: null !== (_settings$appWidth = settings.appWidth) && void 0 !== _settings$appWidth ? _settings$appWidth : CORE_DEFAULTS.appWidth,
                            appHeight: null !== (_settings$appHeight = settings.appHeight) && void 0 !== _settings$appHeight ? _settings$appHeight : CORE_DEFAULTS.appHeight,
                            boundsMargin: normalizeBoundsMargin$1(null !== (_settings$boundsMargi = settings.boundsMargin) && void 0 !== _settings$boundsMargi ? _settings$boundsMargi : CORE_DEFAULTS.boundsMargin),
                            deviceLogicalPixelRatio: null !== (_settings$deviceLogic = settings.deviceLogicalPixelRatio) && void 0 !== _settings$deviceLogic ? _settings$deviceLogic : CORE_DEFAULTS.deviceLogicalPixelRatio,
                            devicePhysicalPixelRatio: null !== (_settings$devicePhysi = settings.devicePhysicalPixelRatio) && void 0 !== _settings$devicePhysi ? _settings$devicePhysi : CORE_DEFAULTS.devicePhysicalPixelRatio,
                            quadBufferSize: resolveQuadBufferSize(settings.quadBufferSize),
                            textLayoutCacheSize: null !== (_settings$textLayoutC = settings.textLayoutCacheSize) && void 0 !== _settings$textLayoutC ? _settings$textLayoutC : CORE_DEFAULTS.textLayoutCacheSize,
                            idleTextLayouts: null !== (_settings$idleTextLay = settings.idleTextLayouts) && void 0 !== _settings$idleTextLay ? _settings$idleTextLay : CORE_DEFAULTS.idleTextLayouts,
                            textBaselineMode: null !== (_settings$textBaselin = settings.textBaselineMode) && void 0 !== _settings$textBaselin ? _settings$textBaselin : CORE_DEFAULTS.textBaselineMode
                        };
                        _this18.settings = resolved;
                        var pixelRatio = resolved.deviceLogicalPixelRatio * resolved.devicePhysicalPixelRatio;
                        _this18.view = {
                            w: resolved.appWidth,
                            h: resolved.appHeight,
                            margin: normalizeBoundsMargin$1(resolved.boundsMargin),
                            pixelRatio: pixelRatio,
                            canvasH: Math.round(resolved.appHeight * pixelRatio)
                        }, _this18.nodes = new NodeStore, _this18.clips = new ClipStore, _this18.animationManager = new AnimationManager, 
                        _this18.stream = new VertexStream(resolved.quadBufferSize), _this18.ops = new OpList, 
                        _this18.hooks = {
                            resolveTexture: function() {},
                            packShader: function() {},
                            layoutText: function() {
                                return -1;
                            },
                            emitText: function() {},
                            onVisibility: function() {},
                            onHidden: function() {
                                return !1;
                            },
                            onShown: function() {},
                            perOpMatch: function() {
                                return !0;
                            },
                            onRenderable: function() {}
                        }, _this18.events = new FrameEvents;
                        var textures = new TextureStore(_this18.nodes), textureNodes = new TextureNodes(textures, _this18.events);
                        _this18.textures = textures, _this18.textureNodes = textureNodes, textures.requestFrame = function() {
                            return _this18.requestRender();
                        }, _this18.hooks.resolveTexture = function(id) {
                            return textureNodes.resolveTexture(id);
                        }, _this18.hooks.onVisibility = function(id, prev, next) {
                            return textureNodes.onVisibility(id, prev, next);
                        }, _this18.hooks.onHidden = function(id) {
                            return textureNodes.onHidden(id);
                        }, _this18.hooks.onShown = function(id) {
                            return textureNodes.onShown(id);
                        }, !0 === EMIT_BOUNDS_EVENTS && function(hooks, nodes, events) {
                            var visibility = hooks.onVisibility;
                            hooks.onVisibility = function(id, prev, next) {
                                var name;
                                if (visibility(id, prev, next), 3 === next) name = "inViewport"; else {
                                    if (3 !== prev) return;
                                    name = "outOfViewport";
                                }
                                var node = nodes.handles[id];
                                if (null !== node && !1 !== node.hasListener(name)) {
                                    var payload = {
                                        previous: renderStateOf(prev),
                                        current: renderStateOf(next)
                                    };
                                    events.queue(node, name, payload);
                                }
                            };
                            var tell = function(id, renderable) {
                                var node = nodes.handles[id];
                                if (null !== node && !1 !== node.hasListener("renderable")) {
                                    var payload = {
                                        type: "renderable",
                                        isRenderable: renderable
                                    };
                                    events.queue(node, "renderable", payload);
                                }
                            };
                            hooks.onRenderable = tell;
                            var hidden = hooks.onHidden;
                            hooks.onHidden = function(id) {
                                var wants = hidden(id), state = nodes.u32[32 * id + 1];
                                return 8 & state ? (tell(id, !1), nodes.u32[32 * id + 1] = -9 & state, !0) : wants;
                            };
                        }(_this18.hooks, _this18.nodes, _this18.events);
                        var viewport, masks, shaders = new ShaderRegistry(_this18.nodes, _this18, pixelRatio, (viewport = viewportGlsl(pixelRatio, Math.round(resolved.appWidth * pixelRatio), _this18.view.canvasH), 
                        masks = [ 0 ], {
                            viewport: viewport,
                            register: function(vertex, fragment) {
                                for (var mask = 0, i = 0; i < SYSTEM_UNIFORMS.length; i++) {
                                    var name = SYSTEM_UNIFORMS[i];
                                    -1 === vertex.indexOf(name) && -1 === fragment.indexOf(name) || (mask |= 1 << i);
                                }
                                return masks.push(mask), masks.length - 1;
                            },
                            systemMask: function(program) {
                                return masks[program];
                            },
                            isLost: function() {
                                return !1;
                            }
                        }));
                        _this18.shaders = shaders, _this18.hooks.packShader = function(id) {
                            textureNodes.onResize(id), shaders.pack(id);
                        }, _this18.hooks.perOpMatch = function(id, opNode) {
                            return shaders.perOpMatch(id, opNode);
                        };
                        var fonts = new FontRegistry(textures);
                        _this18.fonts = fonts, _this18.textEvents = new FrameEvents;
                        var textNodes = new TextNodes(_this18.nodes, fonts, _this18.textEvents, _this18.events, resolved.textLayoutCacheSize, resolved.textBaselineMode, resolved.idleTextLayouts);
                        _this18.textNodes = textNodes, _this18.hooks.layoutText = function(id) {
                            return textNodes.layoutText(id);
                        }, _this18.scene = new ScenePass(_this18.nodes, _this18.clips, _this18.view, _this18.stream, _this18.ops, _this18.hooks, function() {
                            return _this18.flush();
                        });
                        var emitter = new TextEmitter(_this18.nodes, _this18.stream, _this18.ops, shaders, _this18.scene.flush);
                        return _this18.emitter = emitter, _this18.hooks.emitText = function(id) {
                            return emitter.emitText(id);
                        }, _this18.nodes.onDirty = function() {
                            _this18.frameRequested = !0, _this18.onFrameRequest();
                        }, _this18.animationManager.onActive = function() {
                            return _this18.requestRender();
                        }, _this18.root = _this18.createNodeInternal({
                            w: resolved.appWidth,
                            h: resolved.appHeight,
                            color: 0
                        }), _this18;
                    }
                    return _inherits(RendererCore, _EventEmitter3), _createClass(RendererCore, [ {
                        key: "stage",
                        get: function() {
                            return this;
                        }
                    }, {
                        key: "createNodeInternal",
                        value: function(props) {
                            var node = new Node(this, this.nodes.alloc());
                            return function(node, props) {
                                void 0 !== props.color && null !== props.color && (node.color = props.color), void 0 !== props.colorLeft && null !== props.colorLeft && (node.colorLeft = props.colorLeft), 
                                void 0 !== props.colorRight && null !== props.colorRight && (node.colorRight = props.colorRight), 
                                void 0 !== props.colorTop && null !== props.colorTop && (node.colorTop = props.colorTop), 
                                void 0 !== props.colorBottom && null !== props.colorBottom && (node.colorBottom = props.colorBottom), 
                                void 0 !== props.scale && null !== props.scale && (node.scale = props.scale), void 0 !== props.mount && null !== props.mount && (node.mount = props.mount), 
                                void 0 !== props.pivot && null !== props.pivot && (node.pivot = props.pivot);
                                var bag = props;
                                for (var key in bag) {
                                    var value = bag[key];
                                    if (null != value) switch (key) {
                                      case "x":
                                        node.x = value;
                                        break;

                                      case "y":
                                        node.y = value;
                                        break;

                                      case "w":
                                        node.w = value;
                                        break;

                                      case "h":
                                        node.h = value;
                                        break;

                                      case "alpha":
                                        node.alpha = value;
                                        break;

                                      case "colorTl":
                                        node.colorTl = value;
                                        break;

                                      case "colorTr":
                                        node.colorTr = value;
                                        break;

                                      case "colorBl":
                                        node.colorBl = value;
                                        break;

                                      case "colorBr":
                                        node.colorBr = value;
                                        break;

                                      case "scaleX":
                                        node.scaleX = value;
                                        break;

                                      case "scaleY":
                                        node.scaleY = value;
                                        break;

                                      case "rotation":
                                        node.rotation = value;
                                        break;

                                      case "mountX":
                                        node.mountX = value;
                                        break;

                                      case "mountY":
                                        node.mountY = value;
                                        break;

                                      case "pivotX":
                                        node.pivotX = value;
                                        break;

                                      case "pivotY":
                                        node.pivotY = value;
                                        break;

                                      case "zIndex":
                                        node.zIndex = value;
                                        break;

                                      case "clipping":
                                        node.clipping = value;
                                        break;

                                      case "ignoreParentAlpha":
                                        node.ignoreParentAlpha = value;
                                        break;

                                      case "placeholderColor":
                                        node.placeholderColor = value;
                                        break;

                                      case "autosize":
                                        node.autosize = value;
                                        break;

                                      case "data":
                                        node.data = value;
                                        break;

                                      case "src":
                                      default:
                                        break;

                                      case "srcX":
                                        node.srcX = value;
                                        break;

                                      case "srcY":
                                        node.srcY = value;
                                        break;

                                      case "srcWidth":
                                        node.srcWidth = value;
                                        break;

                                      case "srcHeight":
                                        node.srcHeight = value;
                                        break;

                                      case "imageType":
                                        node.imageType = value;
                                        break;

                                      case "textureOptions":
                                        node.textureOptions = value;
                                        break;

                                      case "texture":
                                        node.texture = value;
                                        break;

                                      case "shader":
                                        node.shader = value;
                                        break;

                                      case "componentName":
                                        node.componentName = value;
                                        break;

                                      case "componentLocation":
                                        node.componentLocation = value;
                                    }
                                }
                                void 0 !== props.src && null !== props.src && (node.src = props.src), void 0 !== props.parent && null !== props.parent && (node.parent = props.parent);
                            }(node, props), node;
                        }
                    }, {
                        key: "createNode",
                        value: function() {
                            var props = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            return this.createNodeInternal(props);
                        }
                    }, {
                        key: "createTextNode",
                        value: function() {
                            var props = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, s = this.nodes, id = s.alloc();
                            s.u32[32 * id + 1] = 128, s.texts[id] = new TextState, s.u32[32 * id + 0] = 256 | s.u32[32 * id + 0];
                            var node = new TextNode$1(this, id);
                            return function(node, props) {
                                var t = node.renderer.nodes.texts[node.id];
                                void 0 !== props.color && null !== props.color && (node.color = props.color), void 0 !== props.colorLeft && null !== props.colorLeft && (node.colorLeft = props.colorLeft), 
                                void 0 !== props.colorRight && null !== props.colorRight && (node.colorRight = props.colorRight), 
                                void 0 !== props.colorTop && null !== props.colorTop && (node.colorTop = props.colorTop), 
                                void 0 !== props.colorBottom && null !== props.colorBottom && (node.colorBottom = props.colorBottom), 
                                void 0 !== props.scale && null !== props.scale && (node.scale = props.scale), void 0 !== props.mount && null !== props.mount && (node.mount = props.mount), 
                                void 0 !== props.pivot && null !== props.pivot && (node.pivot = props.pivot);
                                var bag = props;
                                for (var key in bag) {
                                    var value = bag[key];
                                    if (null != value) switch (key) {
                                      case "forceLoad":
                                        node.forceLoad = !0 === value;
                                        break;

                                      case "w":
                                        setSize(node, 0, value);
                                        break;

                                      case "h":
                                        setSize(node, 1, value);
                                        break;

                                      case "x":
                                        node.x = value;
                                        break;

                                      case "y":
                                        node.y = value;
                                        break;

                                      case "alpha":
                                        node.alpha = value;
                                        break;

                                      case "colorTl":
                                        node.colorTl = value;
                                        break;

                                      case "colorTr":
                                        node.colorTr = value;
                                        break;

                                      case "colorBl":
                                        node.colorBl = value;
                                        break;

                                      case "colorBr":
                                        node.colorBr = value;
                                        break;

                                      case "scaleX":
                                        node.scaleX = value;
                                        break;

                                      case "scaleY":
                                        node.scaleY = value;
                                        break;

                                      case "rotation":
                                        node.rotation = value;
                                        break;

                                      case "mountX":
                                        node.mountX = value;
                                        break;

                                      case "mountY":
                                        node.mountY = value;
                                        break;

                                      case "pivotX":
                                        node.pivotX = value;
                                        break;

                                      case "pivotY":
                                        node.pivotY = value;
                                        break;

                                      case "zIndex":
                                        node.zIndex = value;
                                        break;

                                      case "clipping":
                                        node.clipping = value;
                                        break;

                                      case "ignoreParentAlpha":
                                        node.ignoreParentAlpha = value;
                                        break;

                                      case "placeholderColor":
                                        node.placeholderColor = value;
                                        break;

                                      case "autosize":
                                        node.autosize = value;
                                        break;

                                      case "data":
                                        node.data = value;
                                        break;

                                      case "srcX":
                                        node.srcX = value;
                                        break;

                                      case "srcY":
                                        node.srcY = value;
                                        break;

                                      case "srcWidth":
                                        node.srcWidth = value;
                                        break;

                                      case "srcHeight":
                                        node.srcHeight = value;
                                        break;

                                      case "imageType":
                                        node.imageType = value;
                                        break;

                                      case "textureOptions":
                                        node.textureOptions = value;
                                        break;

                                      case "texture":
                                        node.texture = value;
                                        break;

                                      case "shader":
                                        node.shader = value;
                                        break;

                                      case "componentName":
                                        node.componentName = value;
                                        break;

                                      case "componentLocation":
                                        node.componentLocation = value;
                                        break;

                                      default:
                                        setTextProp(t, key, value);
                                    }
                                }
                                void 0 !== props.src && null !== props.src && (node.src = props.src), void 0 !== props.parent && null !== props.parent && (node.parent = props.parent);
                            }(node, props), node;
                        }
                    }, {
                        key: "measureText",
                        value: function(props) {
                            var layout = this.textNodes.measureAhead(function(props) {
                                var t = new TextState, bag = props;
                                for (var key in bag) {
                                    var value = bag[key];
                                    null != value && setTextProp(t, key, value);
                                }
                                return t;
                            }(props));
                            return null === layout ? null : {
                                w: layout.width,
                                h: layout.height
                            };
                        }
                    }, {
                        key: "loadFont",
                        value: function(typeOrOptions, options) {
                            return "string" != typeof typeOrOptions ? this.fonts.load(typeOrOptions) : "sdf" === typeOrOptions ? this.fonts.load(options) : Promise.reject(new Error("canvas" === typeOrOptions ? "Canvas fonts are not supported: v2 renders SDF text only" : "Font handler for renderer type '".concat(typeOrOptions, "' not found. Available types: sdf")));
                        }
                    }, {
                        key: "pendingFonts",
                        get: function() {
                            return this.fonts.pending;
                        }
                    }, {
                        key: "destroyNode",
                        value: function(node) {
                            var isRoot = node === this.root;
                            !function(owner, root) {
                                var s = owner.nodes;
                                if (-1 !== root) {
                                    var parent = s.i32[32 * root + 3];
                                    s.unlink(root), -1 !== parent && s.markDirty(parent, 0);
                                    var reentrant = depth > 0, list = !0 === reentrant ? new Int32Array(256) : scratch;
                                    depth++;
                                    var count = 0;
                                    list[count++] = root;
                                    for (var read = 0; read < count; ) {
                                        for (var id = list[read++], c = s.i32[32 * id + 4]; -1 !== c; ) {
                                            if (count === list.length) {
                                                var bigger = new Int32Array(2 * list.length);
                                                bigger.set(list), list = bigger, !1 === reentrant && (scratch = list);
                                            }
                                            list[count++] = c, c = s.next[c];
                                        }
                                        var handle = s.handles[id];
                                        null !== handle && (handle.removeAllListeners(), handle.id = -1);
                                    }
                                    for (var i = 0; i < count; i++) {
                                        var _id = list[i];
                                        void 0 !== owner.releaseNode && owner.releaseNode(_id);
                                        var anims = s.animations[_id];
                                        if (null !== anims) for (var key in anims) anims[key].controller.stop();
                                        s.free(_id);
                                    }
                                    depth--;
                                }
                            }(this, node.id), !0 === isRoot && this.requestRender();
                        }
                    }, {
                        key: "releaseNode",
                        value: function(id) {
                            var rec = this.nodes.i32[32 * id + 6];
                            0 !== rec && this.clips.owner[rec] === id && this.clips.free(rec), this.textureNodes.release(id), 
                            this.shaders.release(id), this.textNodes.release(id);
                        }
                    }, {
                        key: "registerShaderType",
                        value: function(name, type) {
                            this.shaders.register(name, type);
                        }
                    }, {
                        key: "warmNext",
                        value: function() {
                            return !0 === this.emitter.warm() || !0 === this.shaders.warmNext();
                        }
                    }, {
                        key: "createShader",
                        value: function(name, props) {
                            return this.shaders.create(name, props);
                        }
                    }, {
                        key: "createTexture",
                        value: function(type, props) {
                            var texture = _createTexture(this.textures, type, props);
                            return "SubTexture" === type && this.textureNodes.subTextureCreated(texture.id), 
                            texture;
                        }
                    }, {
                        key: "pendingTextures",
                        get: function() {
                            return this.textures.pending;
                        }
                    }, {
                        key: "requestRender",
                        value: function() {
                            this.frameRequested = !0, this.renderRequested = !0, this.onFrameRequest();
                        }
                    }, {
                        key: "onFrameRequest",
                        value: function() {}
                    }, {
                        key: "reprocessUpdates",
                        value: function(cb) {
                            void 0 !== cb ? this.postUpdate = cb : null === this.postUpdate && (this.postUpdate = noop$1), 
                            this.frameRequested = !0, this.onFrameRequest();
                        }
                    }, {
                        key: "step",
                        value: function(dt) {
                            this.animationManager.step(dt);
                        }
                    }, {
                        key: "update",
                        value: function() {
                            if (!0 === this.root.destroyed) return this.stream.reset(), this.ops.reset(), this.scene.visited = 0, 
                            this.scene.updated = 0, this.scene.emitted = 0, this.scene.textEmitted = 0, this.updateIterations = 0, 
                            this.flushes = 0, this.flushedOps = 0, void (this.frameRequested = !1);
                            var iterations = 0;
                            this.flushes = 0, this.flushedOps = 0, this.renderRequested = !1;
                            do {
                                this.textureNodes.drainPreloads(), this.textNodes.drainForced(), this.stream.reset(), 
                                this.ops.reset(), this.scene.run(this.root.id), this.textEvents.flush();
                                var cb = this.postUpdate;
                                null !== cb && (this.postUpdate = null, cb()), iterations++;
                            } while ((this.scene.writesDuringPass > 0 || null !== this.postUpdate) && iterations < 3 && 0 === this.flushes);
                            this.updateIterations = iterations, !1 === this.renderRequested && !1 === this.nodes.anyDirty && null === this.postUpdate && (this.frameRequested = !1);
                        }
                    }, {
                        key: "flush",
                        value: function() {
                            this.flushes++, this.flushedOps += this.ops.length;
                            var handler = this.onFlush;
                            null !== handler && handler(this.stream, this.ops), this.stream.reset(), this.ops.reset();
                        }
                    } ]);
                }(EventEmitter)), DEFAULT_FRAGMENT = PRECISION + "uniform sampler2D u_texture;varying vec4 v_color;varying vec2 v_textureCoords;\nvoid main(){gl_FragColor=v_color*texture2D(u_texture,v_textureCoords);}", 
                ContextSpy = function() {
                    return _createClass(function() {
                        this.data = {};
                    }, [ {
                        key: "reset",
                        value: function() {
                            this.data = {};
                        }
                    }, {
                        key: "wrap",
                        value: function(target) {
                            var source = target, out = {};
                            for (var key in source) {
                                var value = source[key];
                                out[key] = "function" == typeof value ? this.counted(key, target, value) : value;
                            }
                            return out;
                        }
                    }, {
                        key: "counted",
                        value: function(name, target, fn) {
                            var _this19 = this;
                            return function() {
                                var _data$name, data = _this19.data;
                                data[name] = (null !== (_data$name = data[name]) && void 0 !== _data$name ? _data$name : 0) + 1;
                                for (var _len4 = arguments.length, args = new Array(_len4), _key6 = 0; _key6 < _len4; _key6++) args[_key6] = arguments[_key6];
                                var result = fn.apply(target, args);
                                return "getExtension" === name && null !== result && "object" === _typeof(result) ? _this19.wrap(result) : result;
                            };
                        }
                    } ]);
                }(), blockInfoMap = {
                    33776: BLOCK_4x4x8 = {
                        width: 4,
                        height: 4,
                        bytes: 8
                    },
                    33777: BLOCK_4x4x8,
                    33778: BLOCK_4x4x16 = {
                        width: 4,
                        height: 4,
                        bytes: 16
                    },
                    33779: BLOCK_4x4x16,
                    36196: BLOCK_4x4x8,
                    37492: BLOCK_4x4x8,
                    37493: BLOCK_4x4x8,
                    37496: BLOCK_4x4x16,
                    37497: BLOCK_4x4x16,
                    35840: BLOCK_4x4x8,
                    35842: BLOCK_4x4x8,
                    35841: BLOCK_8x4x8 = {
                        width: 8,
                        height: 4,
                        bytes: 8
                    },
                    35843: BLOCK_8x4x8,
                    37808: BLOCK_4x4x16,
                    37840: BLOCK_4x4x16,
                    37809: BLOCK_5x5x16 = {
                        width: 5,
                        height: 5,
                        bytes: 16
                    },
                    37841: BLOCK_5x5x16,
                    37810: BLOCK_6x6x16 = {
                        width: 6,
                        height: 6,
                        bytes: 16
                    },
                    37842: BLOCK_6x6x16,
                    37811: BLOCK_8x8x16 = {
                        width: 8,
                        height: 8,
                        bytes: 16
                    },
                    37843: BLOCK_8x8x16,
                    37812: BLOCK_10x10x16 = {
                        width: 10,
                        height: 10,
                        bytes: 16
                    },
                    37844: BLOCK_10x10x16,
                    37813: BLOCK_12x12x16 = {
                        width: 12,
                        height: 12,
                        bytes: 16
                    },
                    37845: BLOCK_12x12x16
                }, PVR_MAGIC = 55727696, PVR_TO_GL = {
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
                }, ASTC_MAGIC = 1554098963, ASTC_TO_GL = {
                    "4x4": 37808,
                    "5x5": 37809,
                    "6x6": 37810,
                    "8x8": 37811,
                    "10x10": 37812,
                    "12x12": 37813
                }, KTX_IDENTIFIER = [ 171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10 ], EXT_ASTC = [ "WEBGL_compressed_texture_astc" ], 
                EXT_S3TC = [ "WEBGL_compressed_texture_s3tc" ], EXT_ETC1 = [ "WEBGL_compressed_texture_etc1" ], 
                EXT_ETC = [ "WEBGL_compressed_texture_etc" ], EXT_PVRTC = [ "WEBGL_compressed_texture_pvrtc", "WEBKIT_WEBGL_compressed_texture_pvrtc" ], 
                EXT_NONE = [], GlBackend = function() {
                    return _createClass(function(canvas, settings) {
                        var _ctx$parameter, _this20 = this;
                        this.programs = [], this.onContextLost = null, this.textures = [], this.cleared = !1, 
                        this.views = [], this.viewSource = null, this.canvas = canvas;
                        var spy = !0 === settings.enableContextSpy ? new ContextSpy : null;
                        this.spy = spy;
                        var ctx = function(canvas, forceWebGL2, powerPreference, disableVao, spy) {
                            var attributes = {
                                alpha: !0,
                                antialias: !1,
                                depth: !1,
                                stencil: !1,
                                desynchronized: !1,
                                powerPreference: powerPreference,
                                premultipliedAlpha: !0,
                                preserveDrawingBuffer: !1
                            }, gl = canvas.getContext(!0 === forceWebGL2 ? "webgl2" : "webgl", attributes);
                            if (null === gl && (gl = canvas.getContext("experimental-webgl", attributes)), null === gl) throw new Error("Unable to create WebGL context");
                            if (!0 === gl.isContextLost()) throw new Error("WebGL context is lost: a canvas whose context was lost cannot host a new Renderer, use a fresh canvas");
                            var webgl2 = "function" == typeof gl.createVertexArray;
                            return null !== spy && (gl = spy.wrap(gl)), new GlContext(gl, webgl2, disableVao, canvas.width, canvas.height);
                        }(canvas, settings.forceWebGL2, settings.powerPreference, settings.disableVertexArrayObject, spy);
                        this.ctx = ctx, ctx.clearColor(settings.clearColor), this.maxTextureSize = null !== (_ctx$parameter = ctx.parameter(3379)) && void 0 !== _ctx$parameter ? _ctx$parameter : 0, 
                        this.viewport = viewportGlsl(settings.pixelRatio, canvas.width, canvas.height), 
                        this.pixelRatio = settings.pixelRatio;
                        for (var quads = settings.quadBufferSize, indices = new Uint16Array(6 * quads), _i29 = 0, v = 0; _i29 < indices.length; _i29 += 6, 
                        v += 4) indices[_i29] = v, indices[_i29 + 1] = v + 1, indices[_i29 + 2] = v + 2, 
                        indices[_i29 + 3] = v + 2, indices[_i29 + 4] = v + 1, indices[_i29 + 5] = v + 3;
                        this.indices = ctx.staticBuffer(34963, indices);
                        for (var corners = new Uint8Array(16 * quads), _i30 = 0; _i30 < corners.length; _i30 += 16) corners[_i30 + 4] = 255, 
                        corners[_i30 + 9] = 255, corners[_i30 + 12] = 255, corners[_i30 + 13] = 255;
                        if (this.nodeCoords = ctx.staticBuffer(34962, corners), this.vbo = ctx.createBuffer(), 
                        !0 === ctx.canUseVao) {
                            var vao = ctx.createVao();
                            null !== vao && (ctx.bindVao(vao), ctx.bindIndexBuffer(this.indices));
                        }
                        this.point(), ctx.enableAttribs(63), this.uploadTexture(0, new Uint8Array([ 255, 255, 255, 255 ]), 1, 1, !1), 
                        this.white = this.textures[0], this.registerProgram(defaultVertex(this.viewport, "", ""), DEFAULT_FRAGMENT, null, "Default"), 
                        this.lost = function() {
                            var onContextLost = _this20.onContextLost;
                            null !== onContextLost && onContextLost();
                        }, canvas.addEventListener("webglcontextlost", this.lost);
                    }, [ {
                        key: "beginFrame",
                        value: function() {
                            this.cleared = !1;
                        }
                    }, {
                        key: "draw",
                        value: function(stream, ops, clips) {
                            var ctx = this.ctx;
                            !1 === this.cleared && (this.cleared = !0, ctx.scissorTest(!1), ctx.clear());
                            var n = ops.length;
                            if (0 !== n) {
                                ctx.uploadVertices(this.vbo, this.uploadView(stream));
                                for (var programs = this.programs, textures = this.textures, white = this.white, opProgram = ops.program, opTexture = ops.texture, opParams = ops.params, opNode = ops.node, opClip = ops.clip, opStart = ops.start, opCount = ops.count, _i31 = 0; _i31 < n; _i31++) {
                                    var _textures$opTexture$i, program = programs[opProgram[_i31]];
                                    ctx.useProgram(program.handle), ctx.bindTexture(null !== (_textures$opTexture$i = textures[opTexture[_i31]]) && void 0 !== _textures$opTexture$i ? _textures$opTexture$i : white);
                                    var params = opParams[_i31];
                                    if (null !== params && params !== program.lastParams) {
                                        program.lastParams = params;
                                        var table = program.table;
                                        null === table || !0 === table.direct ? ctx.uniform4fv(program.params, params) : program.uploadTable(params);
                                    }
                                    var perOp = program.perOp;
                                    null !== perOp && perOp(opNode[_i31]);
                                    var clip = opClip[_i31];
                                    0 !== clip && 1 === clips.valid[clip] ? (ctx.scissorTest(!0), ctx.scissor(clips.sx[clip], clips.sy[clip], clips.sw[clip], clips.sh[clip])) : ctx.scissorTest(!1), 
                                    ctx.drawQuads(opStart[_i31], opCount[_i31]);
                                }
                            }
                        }
                    }, {
                        key: "registerProgram",
                        value: function(vertex, fragment) {
                            var extensions = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, name = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "", ctx = this.ctx;
                            if (null !== extensions) for (var _i32 = 0; _i32 < extensions.length; _i32++) if (null === ctx.extension(extensions[_i32])) throw new Error("WebGL extension ".concat(extensions[_i32], " is not available"));
                            var program = new Program(ctx, vertex, fragment, name), resolution = program.system[5], ratio = program.system[6];
                            null === resolution && null === ratio || (ctx.useProgram(program.handle), null !== resolution && ctx.uniform2f(resolution, this.canvas.width, this.canvas.height), 
                            null !== ratio && ctx.uniform1f(ratio, this.pixelRatio));
                            var programs = this.programs;
                            return programs.push(program), programs.length - 1;
                        }
                    }, {
                        key: "uploadTexture",
                        value: function(id, source, w, h, premultiply) {
                            for (var _textures$id, textures = this.textures; textures.length <= id; ) textures.push(null);
                            var texture = null !== (_textures$id = textures[id]) && void 0 !== _textures$id ? _textures$id : null;
                            null === texture && (texture = this.ctx.createTexture(9729), textures[id] = texture), 
                            this.ctx.texImage(texture, source, w, h, premultiply);
                        }
                    }, {
                        key: "uploadCompressed",
                        value: function(id, data) {
                            var _textures$id2;
                            var ctx = this.ctx;
                            if (!1 === enableCompressedFormat(ctx, data.glInternalFormat)) return !1;
                            for (var textures = this.textures; textures.length <= id; ) textures.push(null);
                            var mip = mipmapped(data), texture = null !== (_textures$id2 = textures[id]) && void 0 !== _textures$id2 ? _textures$id2 : null;
                            return null === texture && (texture = ctx.createTexture(!0 === mip ? 9987 : 9729), 
                            textures[id] = texture), function(ctx, texture, data, mip) {
                                for (var mipmaps = data.mipmaps, block = data.blockInfo, levels = !0 === mip ? mipmaps.length : 1, w = data.w, h = data.h, i = 0; i < levels; i++) {
                                    var bytes = new Uint8Array(mipmaps[i]), uploadW = w, uploadH = h;
                                    if ("ktx" === data.type) {
                                        var blocksW = Math.ceil(w / block.width), blocksH = Math.ceil(h / block.height);
                                        0 === i && (uploadW = blocksW * block.width, uploadH = blocksH * block.height);
                                        var expected = blocksW * blocksH * block.bytes;
                                        if (bytes.byteLength < expected) {
                                            var padded = new Uint8Array(expected);
                                            padded.set(bytes), bytes = padded;
                                        }
                                    }
                                    ctx.compressedTexImage(texture, i, data.glInternalFormat, uploadW, uploadH, bytes), 
                                    w = Math.max(1, w >> 1), h = Math.max(1, h >> 1);
                                }
                            }(ctx, texture, data, mip), !0;
                        }
                    }, {
                        key: "deleteTexture",
                        value: function(id) {
                            var _this$textures$id, texture = null !== (_this$textures$id = this.textures[id]) && void 0 !== _this$textures$id ? _this$textures$id : null;
                            null !== texture && (this.ctx.deleteTexture(texture), this.textures[id] = null);
                        }
                    }, {
                        key: "outOfMemory",
                        value: function() {
                            return this.ctx.outOfMemory();
                        }
                    }, {
                        key: "setClearColor",
                        value: function(rgba) {
                            this.ctx.clearColor(rgba);
                        }
                    }, {
                        key: "getCapabilities",
                        value: function() {
                            var _ctx$parameter2, _ctx$parameter3, ctx = this.ctx;
                            return {
                                renderMode: "webgl",
                                webGlVersion: !0 === ctx.isWebGl2 ? 2 : 1,
                                vertexArrayObject: ctx.canUseVao,
                                maxTextureSize: null !== (_ctx$parameter2 = ctx.parameter(3379)) && void 0 !== _ctx$parameter2 ? _ctx$parameter2 : 0,
                                maxTextureUnits: null !== (_ctx$parameter3 = ctx.parameter(34930)) && void 0 !== _ctx$parameter3 ? _ctx$parameter3 : 0
                            };
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.canvas.removeEventListener("webglcontextlost", this.lost), this.ctx.lose();
                        }
                    }, {
                        key: "uploadView",
                        value: function(stream) {
                            var _views$bucket;
                            stream.buffer !== this.viewSource && (this.viewSource = stream.buffer, this.views = []);
                            for (var bucket = Math.ceil(stream.quadCount / 64), views = this.views; views.length <= bucket; ) views.push(null);
                            var view = null !== (_views$bucket = views[bucket]) && void 0 !== _views$bucket ? _views$bucket : null;
                            if (null === view) {
                                var quads = 64 * bucket, capacity = stream.capacityQuads;
                                view = new Float32Array(stream.buffer, 0, 20 * (quads < capacity ? quads : capacity)), 
                                views[bucket] = view;
                            }
                            return view;
                        }
                    }, {
                        key: "point",
                        value: function() {
                            var ctx = this.ctx, vbo = this.vbo;
                            ctx.attribPointer(vbo, 0, 2, 5126, !1, 20, 0), ctx.attribPointer(vbo, 1, 2, 5123, !0, 20, 8), 
                            ctx.attribPointer(vbo, 2, 4, 5121, !0, 20, 12), ctx.attribPointer(vbo, 3, 1, 5126, !1, 20, 16), 
                            ctx.attribPointer(this.nodeCoords, 4, 2, 5121, !0, 4, 0), ctx.attribPointer(vbo, 5, 2, 5123, !1, 20, 8);
                        }
                    } ]);
                }(), FrameLoop = function() {
                    return _createClass(function(platform, host) {
                        var _this21 = this;
                        this.targetFrameTime = 0, this.wakeFallbackDelay = 0, this.paused = !1, this.stopped = !1, 
                        this.pauseRequested = !1, this.pauseImmediate = !1, this.pending = !1, this.inFrame = !1, 
                        this.handle = -1, this.framed = !1, this.fallbacks = 0, this.fallbackHandle = -1, 
                        this.asleep = !0, this.maintenanceQueued = !1, this.grid = 0, this.last = -1, this.platform = platform, 
                        this.host = host, this.run = function(time) {
                            _this21.enter(time, !0);
                        }, this.request = function() {
                            if (!0 !== _this21.stopped) {
                                var handle = _this21.platform.requestAnimationFrame(_this21.run);
                                _this21.handle = handle, !1 === _this21.framed && _this21.armFallback(handle);
                            }
                        }, this.fallback = function() {
                            _this21.fallbacks--;
                            var handle = _this21.fallbackHandle;
                            _this21.fallbacks > 0 || _this21.handle !== handle || (_this21.platform.cancelAnimationFrame(handle), 
                            _this21.enter(0, !1));
                        }, this.maintain = function() {
                            _this21.maintenanceQueued = !1, !0 === _this21.asleep && !1 === _this21.stopped && _this21.host.maintain();
                        };
                    }, [ {
                        key: "enter",
                        value: function(time, framed) {
                            this.pending = !1, this.handle = -1, this.framed = framed;
                            var t = time > 0 ? time : this.platform.now();
                            try {
                                this.tick(t);
                            } catch (error) {
                                return this.inFrame = !1, !0 === this.host.needsFrame() ? this.schedule() : this.last = -1, 
                                !1 === this.pending && (this.framed = !1), void this.host.error(error);
                            }
                            !1 === this.pending && (this.framed = !1);
                        }
                    }, {
                        key: "armFallback",
                        value: function(handle) {
                            var delay = this.wakeFallbackDelay;
                            delay <= 0 || !0 === this.platform.hidden() || (this.fallbackHandle = handle, this.fallbacks++, 
                            this.platform.setTimeout(this.fallback, delay));
                        }
                    }, {
                        key: "schedule",
                        value: function() {
                            !0 !== this.pending && !0 !== this.inFrame && !0 !== this.paused && !0 !== this.stopped && (this.pending = !0, 
                            this.request());
                        }
                    }, {
                        key: "pause",
                        value: function(immediate) {
                            this.pauseRequested = !0, this.pauseImmediate = immediate, this.schedule();
                        }
                    }, {
                        key: "resume",
                        value: function() {
                            return this.pauseRequested = !1, this.pauseImmediate = !1, !1 !== this.paused && (this.paused = !1, 
                            this.last = -1, !0);
                        }
                    }, {
                        key: "stop",
                        value: function() {
                            this.stopped = !0, this.pending = !1;
                            var handle = this.handle;
                            -1 !== handle && (this.handle = -1, this.platform.cancelAnimationFrame(handle));
                        }
                    }, {
                        key: "tick",
                        value: function(time) {
                            if (!0 !== this.stopped && !0 !== this.paused) {
                                var host = this.host;
                                if (!0 === this.pauseRequested && !0 === this.pauseImmediate) return this.paused = !0, 
                                void host.paused();
                                if (!0 === host.needsFrame()) {
                                    var target = this.targetFrameTime;
                                    if (target > 0) {
                                        var elapsed = time - this.grid;
                                        if (elapsed < target - 2 && (this.last < 0 || time - this.last < target - 4)) return void this.wait(target - elapsed);
                                        var snapped = this.last < 0 ? time : time + 2 - (elapsed + 2) % target;
                                        this.grid = snapped > time ? time : snapped;
                                    } else this.grid = time;
                                    var last = this.last;
                                    this.last = time, this.asleep = !1;
                                    var nominal = target > 0 ? target : 16.666666666666668;
                                    if (this.inFrame = !0, host.frame(time, last < 0 ? nominal : time - last), this.inFrame = !1, 
                                    !0 === this.stopped) return;
                                }
                                if (!0 === this.pauseRequested && !1 === host.animating()) return this.paused = !0, 
                                void host.paused();
                                !0 !== host.needsFrame() ? !1 === this.asleep && (this.asleep = !0, this.last = -1, 
                                !1 === this.maintenanceQueued && (this.maintenanceQueued = !0, this.platform.setTimeout(this.maintain, 0)), 
                                host.idle()) : this.schedule();
                            }
                        }
                    }, {
                        key: "wait",
                        value: function(ms) {
                            this.pending = !0, ms > 4 ? this.platform.setTimeout(this.request, ms - 4) : this.request();
                        }
                    } ]);
                }(), STRAIGHT_ALPHA_TEST_PNG = new Uint8Array([ 137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, 0, 1, 0, 0, 0, 1, 8, 6, 0, 0, 0, 31, 21, 196, 137, 0, 0, 0, 13, 73, 68, 65, 84, 120, 156, 99, 248, 207, 192, 208, 0, 0, 4, 129, 1, 128, 44, 85, 206, 176, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130 ]), 
                ImageWorkerManager = function() {
                    return _createClass(function(platform, support) {
                        var _this22 = this;
                        this.crashed = !1, this.onUnavailable = null, this.pending = new Map, this.nextId = 0;
                        var worker = platform.createWorker(imageWorkerSource());
                        if (this.worker = worker, this.available = null !== worker, null !== worker) {
                            worker.onmessage = function(event) {
                                _this22.reply(event.data);
                            };
                            var crash = function(event) {
                                _this22.crash(event);
                            };
                            worker.onerror = crash, worker.onmessageerror = crash, worker.postMessage({
                                init: !0,
                                supportsOptions: support.options,
                                supportsFull: support.full,
                                premultiplyHonored: support.premultiplyHonored,
                                timeout: REQUEST_TIMEOUT
                            });
                        }
                    }, [ {
                        key: "getImage",
                        value: function(src, premultiplyAlpha, sx, sy, sw, sh) {
                            var _this23 = this, worker = this.worker;
                            return null === worker ? Promise.reject(new Error("No image worker available")) : new Promise(function(resolve, reject) {
                                var id = _this23.nextId++;
                                _this23.pending.set(id, [ resolve, reject ]), worker.postMessage({
                                    id: id,
                                    src: src,
                                    premultiplyAlpha: premultiplyAlpha,
                                    sx: sx,
                                    sy: sy,
                                    sw: sw,
                                    sh: sh
                                });
                            });
                        }
                    }, {
                        key: "inFlight",
                        get: function() {
                            return this.pending.size;
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            var worker = this.worker;
                            this.worker = null, this.available = !1, null !== worker && worker.terminate(), 
                            this.rejectAll("Image worker destroyed");
                        }
                    }, {
                        key: "reply",
                        value: function(message) {
                            var id = message.id, settle = this.pending.get(id);
                            if (void 0 !== settle) {
                                this.pending.delete(id);
                                var error = message.error;
                                void 0 !== error ? settle[1](new Error(error)) : settle[0](message.data);
                            }
                        }
                    }, {
                        key: "crash",
                        value: function(event) {
                            var text = null == event ? void 0 : event.message;
                            this.rejectAll("string" == typeof text && "" !== text ? text : "Image worker encountered an unrecoverable error");
                            var worker = this.worker;
                            null !== worker && (this.worker = null, this.available = !1, this.crashed = !0, 
                            worker.terminate(), null !== this.onUnavailable && this.onUnavailable());
                        }
                    }, {
                        key: "rejectAll",
                        value: function(message) {
                            var pending = this.pending;
                            pending.forEach(function(settle) {
                                settle[1](new Error(message));
                            }), pending.clear();
                        }
                    } ]);
                }(), toLoaded = function(decoded) {
                    return {
                        data: decoded.data,
                        w: decoded.data.width,
                        h: decoded.data.height,
                        premultiply: decoded.premultiplyAlpha
                    };
                }, imageData = function(data, premultiply) {
                    return {
                        data: data,
                        w: data.width,
                        h: data.height,
                        premultiply: premultiply
                    };
                }, warned = 0, Loader = function() {
                    return _createClass(function(platform, store, settings) {
                        var _this24 = this;
                        this.ready = !1, this.inFlight = 0, this.ctx = null, this.destroyed = !1, this.onLoaded = function(rec, loaded) {
                            _this24.inFlight--, !0 !== _this24.destroyed ? (_this24.store.decoded(rec, loaded.data, loaded.w, loaded.h, loaded.premultiply), 
                            _this24.dispatch()) : closeData(loaded.data);
                        }, this.onFailed = function(rec, error) {
                            _this24.inFlight--, _this24.store.failed(rec, error instanceof Error ? error : new Error(String(error))), 
                            _this24.dispatch();
                        }, this.workerLost = function() {
                            var ctx = _this24.ctx;
                            null !== ctx && (ctx.worker = null), _this24.dispatch();
                        }, this.platform = platform, this.store = store, this.settings = settings;
                        var mode = settings.createImageBitmapSupport;
                        if ("auto" === mode) (function(platform) {
                            var blob, basic, pngBinaryData = new Uint8Array([ 137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, 0, 1, 0, 0, 0, 1, 1, 3, 0, 0, 0, 37, 219, 86, 202, 0, 0, 0, 3, 80, 76, 84, 69, 0, 0, 0, 167, 122, 61, 218, 0, 0, 0, 1, 116, 82, 78, 83, 0, 64, 230, 216, 102, 0, 0, 0, 10, 73, 68, 65, 84, 8, 215, 99, 96, 0, 0, 0, 2, 0, 1, 226, 33, 188, 51, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130 ]), support = {
                                basic: !1,
                                options: !1,
                                full: !1,
                                premultiplyHonored: null
                            };
                            try {
                                blob = new Blob([ pngBinaryData ], {
                                    type: "image/png"
                                }), basic = platform.createImageBitmap(blob);
                            } catch (e) {
                                return Promise.reject(e);
                            }
                            return basic.then(function(bitmap) {
                                var _bitmap$close;
                                return null == (_bitmap$close = bitmap.close) || _bitmap$close.call(bitmap), support.basic = !0, 
                                decodes(function() {
                                    return platform.createImageBitmap(blob, {
                                        premultiplyAlpha: "none"
                                    });
                                });
                            }).then(function(options) {
                                return support.options = options, decodes(function() {
                                    return platform.createImageBitmap(blob, 0, 0, 1, 1, {
                                        premultiplyAlpha: "none"
                                    });
                                });
                            }).then(function(full) {
                                return support.full = full, support;
                            });
                        })(platform).then(function(support) {
                            return _this24.resolvePremultiply(support);
                        }, function() {
                            return _this24.init(null);
                        }); else {
                            var support = {
                                basic: "basic" === mode,
                                options: "options" === mode,
                                full: "full" === mode,
                                premultiplyHonored: null
                            };
                            Promise.resolve().then(function() {
                                return _this24.resolvePremultiply(support);
                            });
                        }
                    }, [ {
                        key: "dispatch",
                        value: function() {
                            if (!0 !== this.destroyed) {
                                for (var store = this.store, rec = store.nextGenerated(); -1 !== rec; ) this.generate(rec), 
                                rec = store.nextGenerated();
                                var ctx = this.ctx;
                                if (null !== ctx) for (var limit = this.settings.imageDecodeConcurrency; limit <= 0 || this.inFlight < limit; ) {
                                    if (-1 === (rec = store.nextQueued())) return;
                                    this.start(ctx, rec);
                                }
                            }
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.destroyed = !0;
                            var ctx = this.ctx;
                            null !== ctx && null !== ctx.worker && ctx.worker.destroy(), this.ctx = null;
                        }
                    }, {
                        key: "start",
                        value: function(ctx, rec) {
                            var _this25 = this;
                            this.inFlight++;
                            var props = this.store.props[rec];
                            new Promise(function(resolve) {
                                resolve(loadImage(ctx, props));
                            }).then(function(loaded) {
                                return _this25.onLoaded(rec, loaded);
                            }, function(error) {
                                return _this25.onFailed(rec, error);
                            });
                        }
                    }, {
                        key: "generate",
                        value: function(rec) {
                            var store = this.store;
                            if (1 !== store.kind[rec]) {
                                var color, pixel, p = store.props[rec], pixels = tryNoise(p.w, p.h);
                                pixels instanceof Error ? store.failed(rec, pixels) : store.decoded(rec, pixels, p.w, p.h, !1);
                            } else store.decoded(rec, (color = store.props[rec].color, pixel = new Uint8Array(4), 
                            4294967295 === color ? (pixel[0] = 255, pixel[1] = 255, pixel[2] = 255, pixel[3] = 255, 
                            pixel) : (pixel[0] = color >> 16 & 255, pixel[1] = color >> 8 & 255, pixel[2] = 255 & color, 
                            pixel[3] = color >>> 24 & 255, pixel)), 1, 1, !0);
                        }
                    }, {
                        key: "resolvePremultiply",
                        value: function(support) {
                            var _this26 = this;
                            if (!0 !== this.destroyed) {
                                var honored = this.settings.premultiplyAlphaHonored;
                                if ("auto" !== honored) return support.premultiplyHonored = honored, void this.init(support);
                                !1 !== support.options || !1 !== support.full ? detectPremultiplyAlphaHonored(this.platform).then(function(result) {
                                    support.premultiplyHonored = result, _this26.init(support);
                                }, function() {
                                    return _this26.init(support);
                                }) : this.init(support);
                            }
                        }
                    }, {
                        key: "init",
                        value: function(support) {
                            if (!0 !== this.destroyed) {
                                var usable = null !== support && (!0 === support.basic || !0 === support.options || !0 === support.full), worker = null;
                                !0 === usable && this.settings.numImageWorkers > 0 && (!1 === (worker = new ImageWorkerManager(this.platform, support)).available ? worker = null : worker.onUnavailable = this.workerLost), 
                                null !== support && !1 === support.premultiplyHonored && warnOnce(4, '[Lightning] createImageBitmap premultiplyAlpha:"premultiply" is not honored on this device: WebGL premultiplies images on upload instead.'), 
                                !1 === usable && warnOnce(1, "[Lightning] createImageBitmap is not supported on this browser. ImageTexture will be slower."), 
                                null === worker && warnOnce(2, "[Lightning] Image worker count is 0 or workers are not supported on this browser. Image loading will be slower."), 
                                this.ctx = {
                                    platform: this.platform,
                                    support: !0 === usable ? support : null,
                                    worker: worker,
                                    pixelRatio: this.settings.pixelRatio
                                }, this.ready = !0, this.dispatch();
                            }
                        }
                    } ]);
                }(), Uploader = function() {
                    return _createClass(function(store, sink, now, requestFrame) {
                        var memory = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                        this.waited = 0, this.store = store, this.sink = sink, this.now = now, this.requestFrame = requestFrame, 
                        this.memory = memory;
                        var max = sink.maxTextureSize;
                        this.maxSize = max > 0 ? max : 1 / 0;
                    }, [ {
                        key: "held",
                        value: function() {
                            var memory = this.memory;
                            return null !== memory && !1 !== memory.blocked && (this.store.releaseUnwantedDecoded() > 0 && memory.waitForRoom(), 
                            !0);
                        }
                    }, {
                        key: "run",
                        value: function(animating, timeLimit) {
                            var store = this.store;
                            if (0 === store.decodedCount) return 0;
                            if (!0 === this.held()) return 0 === store.decodedCount && (this.waited = 0), 0;
                            var uploaded = 0;
                            if (!0 === animating) uploaded = this.runAnimating(); else for (var start = this.now(); !(uploaded > 0 && !0 === this.held()); ) {
                                var rec = store.nextDecoded();
                                if (-1 === rec) break;
                                if (this.upload(rec), uploaded++, this.now() - start >= timeLimit) break;
                            }
                            return 0 === store.decodedCount ? this.waited = 0 : this.requestFrame(), uploaded;
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            for (var store = this.store, rec = store.nextDecoded(); -1 !== rec; ) closeData(store.data[rec]), 
                            store.data[rec] = null, rec = store.nextDecoded();
                        }
                    }, {
                        key: "runAnimating",
                        value: function() {
                            for (var store = this.store, holdLarge = this.waited < 30, held = 0, rec = store.peekDecoded(); -1 !== rec && !0 === holdLarge && store.w[rec] * store.h[rec] > 5e5; ) store.rotateDecoded(), 
                            rec = ++held < store.decodedCount ? store.peekDecoded() : -1;
                            return held > 0 && this.waited++, -1 === rec ? 0 : (store.nextDecoded(), this.upload(rec), 
                            1);
                        }
                    }, {
                        key: "upload",
                        value: function(rec) {
                            var store = this.store, data = store.data[rec], w = store.w[rec], h = store.h[rec], max = this.maxSize;
                            if (w > max || h > max) store.uploadFailed(rec, new TextureError(TextureErrorCode.TEXTURE_UPLOAD_FAILED, "Texture ".concat(w, "x").concat(h, " exceeds the maximum texture size of this device (").concat(max, ")"))); else if (w * h > 5e5 && (this.waited = 0), 
                            void 0 === data.mipmaps) {
                                var error = function(sink, id, source, w, h, premultiply) {
                                    try {
                                        return sink.uploadTexture(id, source, w, h, premultiply), null;
                                    } catch (error) {
                                        return error instanceof Error ? error : new Error(String(error));
                                    }
                                }(this.sink, rec, data, w, h, !!(2 & store.flags[rec]));
                                null === error ? (store.uploaded(rec, function(data, w, h) {
                                    return !0 === ArrayBuffer.isView(data) ? w * h * 4 : w * h * 4 * 1.1;
                                }(data, w, h)), null !== this.memory && this.memory.checkCritical()) : this.failUpload(rec, error);
                            } else this.uploadCompressed(rec, data);
                        }
                    }, {
                        key: "failUpload",
                        value: function(rec, error) {
                            this.sink.deleteTexture(rec), this.store.uploadFailed(rec, error);
                        }
                    }, {
                        key: "uploadCompressed",
                        value: function(rec, data) {
                            var store = this.store, error = function(sink, id, data) {
                                var supported;
                                try {
                                    supported = sink.uploadCompressed(id, data);
                                } catch (error) {
                                    return error instanceof Error ? error : new Error(String(error));
                                }
                                return !0 === supported ? null : new TextureError(TextureErrorCode.TEXTURE_UPLOAD_FAILED, "Compressed texture format 0x".concat(data.glInternalFormat.toString(16), " is not supported by this device"));
                            }(this.sink, rec, data);
                            if (null === error) {
                                if ("ktx" === data.type) {
                                    var block = data.blockInfo;
                                    store.u2[rec] = data.w / (Math.ceil(data.w / block.width) * block.width), store.v2[rec] = data.h / (Math.ceil(data.h / block.height) * block.height);
                                }
                                store.uploaded(rec, data.mipmaps[0].byteLength), null !== this.memory && this.memory.checkCritical();
                            } else this.failUpload(rec, error);
                        }
                    } ]);
                }(), MemoryManager = function() {
                    return _createClass(function(store, events, target, settings) {
                        var _this27 = this;
                        this.criticalThreshold = 0, this.targetThreshold = 0, this.cleanupInterval = 0, 
                        this.baselineMemoryAllocation = 0, this.doNotExceedCriticalThreshold = !1, this.debugLogging = !1, 
                        this.criticalCleanupRequested = !1, this.schedule = null, this.requestFrame = function() {}, 
                        this.lastCleanup = -1 / 0, this.idleQueued = !1, this.idleFrame = 0, this.roomQueued = !1, 
                        this.destroyed = !1, this.warned = !1, this.idleCheck = function() {
                            _this27.idleQueued = !1, !1 === _this27.destroyed && _this27.store.frame === _this27.idleFrame && _this27.maintain();
                        }, this.roomCheck = function() {
                            _this27.roomQueued = !1, !0 !== _this27.destroyed && !1 !== _this27.blocked && (_this27.cleanup(!1), 
                            !0 === _this27.blocked && _this27.store.releaseUnwantedDecoded() > 0 && _this27.waitForRoom());
                        }, this.store = store, this.events = events, this.target = target, this.updateSettings(settings);
                    }, [ {
                        key: "memUsed",
                        get: function() {
                            return this.baselineMemoryAllocation + this.store.loadedBytes;
                        }
                    }, {
                        key: "updateSettings",
                        value: function(settings) {
                            var held = this.blocked;
                            this.criticalThreshold = Math.round(settings.criticalThreshold), this.baselineMemoryAllocation = Math.round(settings.baselineMemoryAllocation);
                            var level = Math.max(0, Math.min(1, settings.targetThresholdLevel));
                            this.targetThreshold = Math.max(Math.round(settings.criticalThreshold * level), this.baselineMemoryAllocation), 
                            this.cleanupInterval = settings.cleanupInterval, this.doNotExceedCriticalThreshold = settings.doNotExceedCriticalThreshold, 
                            this.debugLogging = settings.debugLogging, !0 === held && !1 === settings.doNotExceedCriticalThreshold && this.store.decodedCount > 0 && this.requestFrame();
                        }
                    }, {
                        key: "checkCritical",
                        value: function() {
                            this.criticalThreshold > 0 && this.memUsed > this.criticalThreshold && (this.criticalCleanupRequested = !0);
                        }
                    }, {
                        key: "blocked",
                        get: function() {
                            return !0 === this.doNotExceedCriticalThreshold && !0 === this.criticalCleanupRequested;
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.destroyed = !0, this.schedule = null;
                        }
                    }, {
                        key: "waitForRoom",
                        value: function() {
                            !0 !== this.roomQueued && null !== this.schedule && (this.roomQueued = !0, this.schedule(this.roomCheck, 2e3));
                        }
                    }, {
                        key: "maintain",
                        value: function() {
                            var now = this.store.now(), above = this.criticalThreshold > 0 && this.memUsed > this.targetThreshold, wait = this.cleanupInterval - (now - this.lastCleanup);
                            !0 === this.criticalCleanupRequested || !0 === above && wait <= 0 ? this.clean(!1, now) : (this.evictOrphans(now), 
                            !1 !== above && wait <= 2147483647 != !1 && (this.idleFrame = this.store.frame, 
                            !1 === this.idleQueued && null !== this.schedule && (this.idleQueued = !0, this.schedule(this.idleCheck, wait))));
                        }
                    }, {
                        key: "cleanup",
                        value: function() {
                            var full = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            this.clean(full, this.store.now());
                        }
                    }, {
                        key: "cleanupAt",
                        value: function(time) {
                            this.clean(!1, time);
                        }
                    }, {
                        key: "handleOutOfMemory",
                        value: function() {
                            this.events.queue(this.target, "outOfMemory", {
                                memUsed: this.memUsed,
                                criticalThreshold: this.criticalThreshold
                            }), this.criticalCleanupRequested = !0;
                        }
                    }, {
                        key: "info",
                        value: function() {
                            var store = this.store;
                            return {
                                criticalThreshold: this.criticalThreshold,
                                targetThreshold: this.targetThreshold,
                                renderableMemUsed: this.baselineMemoryAllocation + store.wantedBytes,
                                memUsed: this.memUsed,
                                renderableTexturesLoaded: store.wantedCount,
                                loadedTextures: store.loadedCount,
                                baselineMemoryAllocation: this.baselineMemoryAllocation
                            };
                        }
                    }, {
                        key: "clean",
                        value: function(full, now) {
                            var target = this.target, critical = this.criticalCleanupRequested;
                            if (this.lastCleanup = now, !0 === critical && !0 === target.hasListener("criticalCleanup") && this.events.queue(target, "criticalCleanup", {
                                memUsed: this.memUsed,
                                criticalThreshold: this.criticalThreshold
                            }), this.freeUnwanted(full, now), this.evictOrphans(now), this.criticalThreshold > 0 && this.memUsed >= this.criticalThreshold) return !0 === target.hasListener("criticalCleanupFailed") && this.events.queue(target, "criticalCleanupFailed", {
                                memUsed: this.memUsed,
                                criticalThreshold: this.criticalThreshold
                            }), void (!0 === this.debugLogging && !1 === this.warned && (this.warned = !0, console.warn("[TextureMemory] above the critical threshold after cleanup: ".concat(this.memUsed))));
                            this.warned = !1;
                            var held = !0 === this.blocked && this.store.decodedCount > 0;
                            this.criticalCleanupRequested = !1, !0 === held && this.requestFrame();
                        }
                    }, {
                        key: "freeUnwanted",
                        value: function(full, now) {
                            if (!(!1 === full && this.criticalThreshold <= 0)) for (var store = this.store, rec = store.lruHead; -1 !== rec && (!0 === full || this.memUsed >= this.targetThreshold); ) {
                                var next = store.lruNext[rec];
                                now - store.createdAt[rec] >= 2e3 && store.free(rec), rec = next;
                            }
                        }
                    }, {
                        key: "evictOrphans",
                        value: function(now) {
                            for (var store = this.store, rec = store.orphanHead; -1 !== rec; ) {
                                var next = store.orphanNext[rec], state = store.state[rec], handle = store.handles[rec];
                                0 !== state && 6 !== state && !0 !== store.failedForGood(rec) || 0 !== store.wantCount[rec] || 1 & store.flags[rec] || !(now - store.createdAt[rec] >= 2e3) || null !== handle && !1 !== handle.hasListeners() || store.destroy(rec), 
                                rec = next;
                            }
                        }
                    } ]);
                }(), Telemetry = function() {
                    return _createClass(function(target, events, clock, spy, interval, start) {
                        var _this28 = this;
                        this.segment = "", this.lastTickRendered = !1, this.beat = 0, this.halted = !1, 
                        this.stopped = !1, this.heartbeat = function(token) {
                            if (token === _this28.beat && !0 !== _this28.stopped) {
                                var now = _this28.clock.now();
                                now - _this28.sampleStart >= _this28.interval && _this28.close(now), _this28.arm(now);
                            }
                        }, this.sampleFrames = 0, this.sampleElapsed = 0, this.renderedFrames = 0, this.idleTicks = 0, 
                        this.buckets = new Uint32Array(45), this.maxFrameTime = 0, this.animatedFrames = 0, 
                        this.animatedElapsed = 0, this.animatedBuckets = new Uint32Array(45), this.animatedMaxFrameTime = 0, 
                        this.animationSum = 0, this.maxAnimations = 0, this.uploadFrames = 0, this.updateMs = 0, 
                        this.renderMs = 0, this.uploadMs = 0, this.maxUpdateMs = 0, this.maxRenderMs = 0, 
                        this.maxUploadMs = 0, this.uploadedTextures = 0, this.maxUploadQueue = 0, this.quads = 0, 
                        this.renderOps = 0, this.reportedQuads = 0, this.reportedOps = 0, this.target = target, 
                        this.events = events, this.clock = clock, this.spy = spy, this.interval = interval, 
                        this.sampleStart = start;
                    }, [ {
                        key: "drawn",
                        value: function(updateMs, renderMs, quads, renderOps, activeAnimations) {
                            this.updateMs += updateMs, this.renderMs += renderMs, updateMs > this.maxUpdateMs && (this.maxUpdateMs = updateMs), 
                            renderMs > this.maxRenderMs && (this.maxRenderMs = renderMs), this.animationSum += activeAnimations, 
                            activeAnimations > this.maxAnimations && (this.maxAnimations = activeAnimations), 
                            this.quads = quads, this.renderOps = renderOps;
                        }
                    }, {
                        key: "uploaded",
                        value: function(queued, _uploaded, ms) {
                            this.uploadFrames++, this.uploadedTextures += _uploaded, this.uploadMs += ms, ms > this.maxUploadMs && (this.maxUploadMs = ms), 
                            queued > this.maxUploadQueue && (this.maxUploadQueue = queued);
                        }
                    }, {
                        key: "tick",
                        value: function(time, dt, rendered, animating) {
                            this.beat++, !0 === rendered ? (this.renderedFrames++, !0 === this.lastTickRendered && this.pair(dt, animating)) : this.idleTicks++, 
                            this.lastTickRendered = rendered, time - this.sampleStart >= this.interval && this.close(time), 
                            !0 === rendered && this.renderInfo();
                        }
                    }, {
                        key: "idle",
                        value: function(time) {
                            this.lastTickRendered = !1, this.halted = !1, this.arm(time);
                        }
                    }, {
                        key: "halt",
                        value: function() {
                            this.halted = !0, this.beat++;
                        }
                    }, {
                        key: "relabel",
                        value: function(label, time) {
                            label !== this.segment && ((this.renderedFrames > 0 || this.idleTicks > 0) && this.close(time), 
                            this.segment = label);
                        }
                    }, {
                        key: "restart",
                        value: function(interval, time) {
                            this.interval = interval, this.reset(), this.sampleStart = time, this.arm(time);
                        }
                    }, {
                        key: "stop",
                        value: function() {
                            this.stopped = !0;
                        }
                    }, {
                        key: "pair",
                        value: function(dt, animating) {
                            this.sampleFrames++, this.sampleElapsed += dt;
                            var bucket = frameTimeBucketIndex(dt), buckets = this.buckets;
                            if (buckets[bucket] = buckets[bucket] + 1, dt > this.maxFrameTime && (this.maxFrameTime = dt), 
                            !1 !== animating) {
                                this.animatedFrames++, this.animatedElapsed += dt;
                                var animated = this.animatedBuckets;
                                animated[bucket] = animated[bucket] + 1, dt > this.animatedMaxFrameTime && (this.animatedMaxFrameTime = dt);
                            }
                        }
                    }, {
                        key: "arm",
                        value: function(time) {
                            var _this29 = this;
                            if (!0 !== this.halted) {
                                var token = ++this.beat, wait = this.sampleStart + this.interval - time;
                                this.clock.setTimeout(function() {
                                    return _this29.heartbeat(token);
                                }, wait > 0 ? Math.min(wait, 6e4) : 0);
                            }
                        }
                    }, {
                        key: "close",
                        value: function(time) {
                            !0 === this.target.hasListener("fpsUpdate") && this.events.queue(this.target, "fpsUpdate", this.payload());
                            var spy = this.spy;
                            null !== spy && spy.reset(), this.reset(), this.sampleStart = time;
                        }
                    }, {
                        key: "payload",
                        value: function() {
                            for (var frameTimeBuckets = new Array(45), animatedFrameTimeBuckets = new Array(45), _i33 = 0; _i33 < 45; _i33++) frameTimeBuckets[_i33] = this.buckets[_i33], 
                            animatedFrameTimeBuckets[_i33] = this.animatedBuckets[_i33];
                            var renderedFrames = this.renderedFrames, spy = this.spy;
                            return {
                                fps: this.sampleElapsed > 0 ? Math.round(1e3 * this.sampleFrames / this.sampleElapsed) : 0,
                                sampledFrames: this.sampleFrames,
                                renderedFrames: renderedFrames,
                                idleTicks: this.idleTicks,
                                renderedMs: this.sampleElapsed,
                                frameTimeBuckets: frameTimeBuckets,
                                maxFrameTime: this.maxFrameTime,
                                animatedFps: this.animatedElapsed > 0 ? Math.round(1e3 * this.animatedFrames / this.animatedElapsed) : 0,
                                animatedFrames: this.animatedFrames,
                                animatedMs: this.animatedElapsed,
                                animatedFrameTimeBuckets: animatedFrameTimeBuckets,
                                animatedMaxFrameTime: this.animatedMaxFrameTime,
                                segment: this.segment,
                                meanActiveAnimations: renderedFrames > 0 ? this.animationSum / renderedFrames : 0,
                                maxActiveAnimations: this.maxAnimations,
                                updateMs: this.updateMs,
                                renderMs: this.renderMs,
                                uploadMs: this.uploadMs,
                                maxUpdateMs: this.maxUpdateMs,
                                maxRenderMs: this.maxRenderMs,
                                maxUploadMs: this.maxUploadMs,
                                uploadFrames: this.uploadFrames,
                                uploadedTextures: this.uploadedTextures,
                                maxUploadQueueSize: this.maxUploadQueue,
                                contextSpyData: null !== spy ? spy.data : null,
                                renderOps: this.renderOps,
                                quads: this.quads
                            };
                        }
                    }, {
                        key: "renderInfo",
                        value: function() {
                            var quads = this.quads, ops = this.renderOps;
                            if ((0 !== quads && quads !== this.reportedQuads || 0 !== ops && ops !== this.reportedOps) && (this.reportedQuads = quads, 
                            this.reportedOps = ops, !0 === this.target.hasListener("renderUpdate"))) {
                                var payload = {
                                    quads: quads,
                                    renderOps: ops
                                };
                                this.events.queue(this.target, "renderUpdate", payload);
                            }
                        }
                    }, {
                        key: "reset",
                        value: function() {
                            this.sampleFrames = 0, this.sampleElapsed = 0, this.renderedFrames = 0, this.idleTicks = 0, 
                            this.maxFrameTime = 0, this.animatedFrames = 0, this.animatedElapsed = 0, this.animatedMaxFrameTime = 0, 
                            this.animationSum = 0, this.maxAnimations = 0, this.uploadFrames = 0, this.updateMs = 0, 
                            this.renderMs = 0, this.uploadMs = 0, this.maxUpdateMs = 0, this.maxRenderMs = 0, 
                            this.maxUploadMs = 0, this.uploadedTextures = 0, this.maxUploadQueue = 0;
                            for (var buckets = this.buckets, animatedBuckets = this.animatedBuckets, _i34 = 0; _i34 < 45; _i34++) buckets[_i34] = 0, 
                            animatedBuckets[_i34] = 0;
                        }
                    } ]);
                }(), positive = function(value, fallback) {
                    return void 0 !== value && value > 0 ? value : fallback;
                }, runtimeSettings = {
                    clearColor: {
                        resolve: function(v) {
                            return null != v ? v : 0;
                        },
                        effect: 1
                    },
                    targetFPS: {
                        resolve: function(v) {
                            return void 0 !== v && v > 0 ? v : 0;
                        },
                        effect: 2
                    },
                    boundsMargin: {
                        resolve: function(v) {
                            return normalizeBoundsMargin$1(null != v ? v : CORE_DEFAULTS.boundsMargin);
                        },
                        effect: 4
                    },
                    textureMemory: {
                        resolve: function(value, current) {
                            var _ref, _v$criticalThreshold, _ref2, _v$targetThresholdLev, _ref3, _v$cleanupInterval, _ref4, _v$debugLogging, _ref5, _v$baselineMemoryAllo, _ref6, _v$doNotExceedCritica, v = null != value ? value : {}, c = null != current ? current : {};
                            return {
                                criticalThreshold: null !== (_ref = null !== (_v$criticalThreshold = v.criticalThreshold) && void 0 !== _v$criticalThreshold ? _v$criticalThreshold : c.criticalThreshold) && void 0 !== _ref ? _ref : 2e8,
                                targetThresholdLevel: null !== (_ref2 = null !== (_v$targetThresholdLev = v.targetThresholdLevel) && void 0 !== _v$targetThresholdLev ? _v$targetThresholdLev : c.targetThresholdLevel) && void 0 !== _ref2 ? _ref2 : .8,
                                cleanupInterval: null !== (_ref3 = null !== (_v$cleanupInterval = v.cleanupInterval) && void 0 !== _v$cleanupInterval ? _v$cleanupInterval : c.cleanupInterval) && void 0 !== _ref3 ? _ref3 : 5e3,
                                debugLogging: null !== (_ref4 = null !== (_v$debugLogging = v.debugLogging) && void 0 !== _v$debugLogging ? _v$debugLogging : c.debugLogging) && void 0 !== _ref4 && _ref4,
                                baselineMemoryAllocation: null !== (_ref5 = null !== (_v$baselineMemoryAllo = v.baselineMemoryAllocation) && void 0 !== _v$baselineMemoryAllo ? _v$baselineMemoryAllo : c.baselineMemoryAllocation) && void 0 !== _ref5 ? _ref5 : 26e6,
                                doNotExceedCriticalThreshold: null !== (_ref6 = null !== (_v$doNotExceedCritica = v.doNotExceedCriticalThreshold) && void 0 !== _v$doNotExceedCritica ? _v$doNotExceedCritica : c.doNotExceedCriticalThreshold) && void 0 !== _ref6 && _ref6
                            };
                        },
                        effect: 8
                    },
                    fpsUpdateInterval: {
                        resolve: function(v) {
                            return positive(v, 0);
                        },
                        effect: 16
                    },
                    textureProcessingTimeLimit: {
                        resolve: function(v) {
                            return positive(v, 25);
                        },
                        effect: 0
                    },
                    inspector: {
                        resolve: function(v) {
                            return null != v && v;
                        },
                        effect: 32
                    },
                    inspectorOptions: {
                        resolve: function(v) {
                            return null != v ? v : {};
                        },
                        effect: 64
                    }
                }, initial = function(key, value) {
                    return runtimeSettings[key].resolve(value, void 0);
                }, noop = function() {}, windowPixelRatio = function() {
                    return "undefined" != typeof window ? window.devicePixelRatio : void 0;
                }, hasOwn = Object.prototype.hasOwnProperty, frameTime = function(fps) {
                    return fps > 0 ? 1e3 / fps : 0;
                }, _export("ot", Renderer = function(_RendererCore) {
                    function Renderer() {
                        var _this30, _settings$platform, _input$canvas, settings = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, target = arguments.length > 1 ? arguments[1] : void 0, Host = null !== (_settings$platform = settings.platform) && void 0 !== _settings$platform ? _settings$platform : getDefaultPlatform(), platform = null !== Host ? new Host : new WebPlatform, input = platform.resolveSettings(settings), canvas = null !== (_input$canvas = input.canvas) && void 0 !== _input$canvas ? _input$canvas : platform.createCanvas(), s = function(s, canvas) {
                            var _s$platform, _s$textLayoutCacheSiz, _s$idleTextLayouts, _s$textBaselineMode, _s$imageDecodeConcurr, _s$createImageBitmapS, _s$premultiplyAlphaHo, _s$maxRetryCount, _s$enableContextSpy, _s$forceWebGL, _s$disableVertexArray, _s$powerPreference, _s$handleLoopError, _s$presentOnIdle;
                            return {
                                appWidth: positive(s.appWidth, CORE_DEFAULTS.appWidth),
                                appHeight: positive(s.appHeight, CORE_DEFAULTS.appHeight),
                                deviceLogicalPixelRatio: positive(s.deviceLogicalPixelRatio, CORE_DEFAULTS.deviceLogicalPixelRatio),
                                devicePhysicalPixelRatio: positive(s.devicePhysicalPixelRatio, positive(windowPixelRatio(), CORE_DEFAULTS.devicePhysicalPixelRatio)),
                                quadBufferSize: resolveQuadBufferSize(s.quadBufferSize),
                                canvas: canvas,
                                platform: null !== (_s$platform = s.platform) && void 0 !== _s$platform ? _s$platform : null,
                                clearColor: initial("clearColor", s.clearColor),
                                targetFPS: initial("targetFPS", s.targetFPS),
                                boundsMargin: initial("boundsMargin", s.boundsMargin),
                                textureMemory: initial("textureMemory", s.textureMemory),
                                fpsUpdateInterval: initial("fpsUpdateInterval", s.fpsUpdateInterval),
                                textureProcessingTimeLimit: initial("textureProcessingTimeLimit", s.textureProcessingTimeLimit),
                                inspector: initial("inspector", s.inspector),
                                inspectorOptions: initial("inspectorOptions", s.inspectorOptions),
                                textLayoutCacheSize: null !== (_s$textLayoutCacheSiz = s.textLayoutCacheSize) && void 0 !== _s$textLayoutCacheSiz ? _s$textLayoutCacheSiz : CORE_DEFAULTS.textLayoutCacheSize,
                                idleTextLayouts: null !== (_s$idleTextLayouts = s.idleTextLayouts) && void 0 !== _s$idleTextLayouts ? _s$idleTextLayouts : CORE_DEFAULTS.idleTextLayouts,
                                textBaselineMode: null !== (_s$textBaselineMode = s.textBaselineMode) && void 0 !== _s$textBaselineMode ? _s$textBaselineMode : CORE_DEFAULTS.textBaselineMode,
                                numImageWorkers: void 0 === s.numImageWorkers ? 1 : Math.min(s.numImageWorkers, 1),
                                imageDecodeConcurrency: null !== (_s$imageDecodeConcurr = s.imageDecodeConcurrency) && void 0 !== _s$imageDecodeConcurr ? _s$imageDecodeConcurr : 14,
                                createImageBitmapSupport: null !== (_s$createImageBitmapS = s.createImageBitmapSupport) && void 0 !== _s$createImageBitmapS ? _s$createImageBitmapS : "auto",
                                premultiplyAlphaHonored: null === (_s$premultiplyAlphaHo = s.premultiplyAlphaHonored) || void 0 === _s$premultiplyAlphaHo || _s$premultiplyAlphaHo,
                                maxRetryCount: null !== (_s$maxRetryCount = s.maxRetryCount) && void 0 !== _s$maxRetryCount ? _s$maxRetryCount : 5,
                                enableContextSpy: null !== (_s$enableContextSpy = s.enableContextSpy) && void 0 !== _s$enableContextSpy && _s$enableContextSpy,
                                forceWebGL2: null !== (_s$forceWebGL = s.forceWebGL2) && void 0 !== _s$forceWebGL && _s$forceWebGL,
                                disableVertexArrayObject: null !== (_s$disableVertexArray = s.disableVertexArrayObject) && void 0 !== _s$disableVertexArray && _s$disableVertexArray,
                                powerPreference: null !== (_s$powerPreference = s.powerPreference) && void 0 !== _s$powerPreference ? _s$powerPreference : "default",
                                handleLoopError: null !== (_s$handleLoopError = s.handleLoopError) && void 0 !== _s$handleLoopError ? _s$handleLoopError : noop,
                                wakeFallbackDelay: void 0 === s.wakeFallbackDelay ? 50 : s.wakeFallbackDelay > 0 ? s.wakeFallbackDelay : 0,
                                presentOnIdle: null !== (_s$presentOnIdle = s.presentOnIdle) && void 0 !== _s$presentOnIdle && _s$presentOnIdle
                            };
                        }(input, canvas);
                        (_this30 = _callSuper(this, Renderer, [ s ])).destroyed = !1, _this30.uploadRequested = !1, 
                        _this30.telemetry = null, _this30.segment = "", _this30.inspector = null, _this30.settings = s, 
                        _this30.platform = platform, _this30.canvas = canvas, _this30.ownsCanvas = canvas !== input.canvas;
                        var logicalW = s.appWidth * s.deviceLogicalPixelRatio, logicalH = s.appHeight * s.deviceLogicalPixelRatio;
                        platform.sizeCanvas(canvas, logicalW * s.devicePhysicalPixelRatio, logicalH * s.devicePhysicalPixelRatio, logicalW, logicalH), 
                        _this30.view.canvasH = canvas.height;
                        var backend = new GlBackend(canvas, {
                            forceWebGL2: s.forceWebGL2,
                            disableVertexArrayObject: s.disableVertexArrayObject,
                            powerPreference: s.powerPreference,
                            enableContextSpy: s.enableContextSpy,
                            clearColor: s.clearColor,
                            pixelRatio: _this30.view.pixelRatio,
                            quadBufferSize: s.quadBufferSize
                        });
                        _this30.backend = backend, _this30.startTime = platform.now();
                        var nodes = _this30.nodes, shaders = _this30.shaders;
                        shaders.host = {
                            viewport: backend.viewport,
                            register: function(vertex, fragment, extensions, table, time, name) {
                                var id = backend.registerProgram(vertex, fragment, extensions, name), program = backend.programs[id];
                                return program.table = table, program.bindSystem(nodes, time), id;
                            },
                            systemMask: function(program) {
                                return backend.programs[program].systemMask;
                            },
                            isLost: function() {
                                return backend.ctx.isLost();
                            }
                        }, shaders.onLost = function() {
                            platform.setTimeout(function() {
                                var onContextLost = backend.onContextLost;
                                !1 === _this30.destroyed && null !== onContextLost && onContextLost();
                            }, 0);
                        }, shaders.onError = function(error) {
                            reportListenerError(s.handleLoopError, platform, error);
                        }, _this30.onFlush = function(stream, ops) {
                            backend.draw(stream, ops, _this30.clips);
                        };
                        var textures = _this30.textures;
                        textures.maxRetries = s.maxRetryCount, textures.now = function() {
                            return platform.now();
                        }, textures.sink = backend;
                        var uploadFrame = function() {
                            _this30.uploadRequested = !0, _this30.onFrameRequest();
                        };
                        textures.requestFrame = uploadFrame;
                        var memory = new MemoryManager(textures, _this30.events, _this30, s.textureMemory);
                        _this30.memory = memory, memory.schedule = function(callback, ms) {
                            platform.setTimeout(callback, ms);
                        }, memory.requestFrame = function() {
                            _this30.requestRender();
                        }, _this30.loader = new Loader(platform, _this30.textures, {
                            numImageWorkers: s.numImageWorkers,
                            imageDecodeConcurrency: s.imageDecodeConcurrency,
                            createImageBitmapSupport: s.createImageBitmapSupport,
                            premultiplyAlphaHonored: s.premultiplyAlphaHonored,
                            pixelRatio: _this30.view.pixelRatio
                        }), _this30.textures.schedule = function(callback, ms) {
                            platform.setTimeout(callback, ms);
                        }, _this30.textures.onQueued = function() {
                            _this30.loader.dispatch();
                        }, _this30.uploader = new Uploader(textures, backend, function() {
                            return platform.now();
                        }, uploadFrame, memory), _this30.animationManager.clock = function() {
                            return platform.now();
                        }, _this30.events.schedule = function(callback) {
                            platform.setTimeout(callback, 0);
                        }, _this30.events.onError = function(error) {
                            reportListenerError(s.handleLoopError, platform, error);
                        }, _this30.textEvents.onError = function(error) {
                            reportListenerError(s.handleLoopError, platform, error);
                        }, _this30.fonts.fetch = function(url, type) {
                            return platform.fetch(url, type);
                        }, _this30.fonts.schedule = function(callback, ms) {
                            platform.setTimeout(callback, ms);
                        };
                        var loop = new FrameLoop(platform, {
                            needsFrame: function() {
                                return !0 === _this30.frameRequested || !0 === _this30.animationManager.hasActive || !0 === _this30.uploadRequested;
                            },
                            animating: function() {
                                return _this30.animationManager.hasActive;
                            },
                            frame: function(time, dt) {
                                _this30.frame(time, dt);
                            },
                            idle: function() {
                                var telemetry = _this30.telemetry;
                                null !== telemetry && telemetry.idle(_this30.currentFrameTime), !0 === s.presentOnIdle && platform.present(canvas), 
                                _this30.emit("idle");
                            },
                            paused: function() {
                                var telemetry = _this30.telemetry;
                                null !== telemetry && telemetry.halt();
                            },
                            maintain: function() {
                                _this30.maintain();
                            },
                            error: function(_error) {
                                _this30.events.holding = !1, s.handleLoopError(_error);
                            }
                        });
                        if (loop.targetFrameTime = frameTime(s.targetFPS), loop.wakeFallbackDelay = s.wakeFallbackDelay, 
                        _this30.loop = loop, backend.onContextLost = function() {
                            backend.onContextLost = null, loop.stop();
                            var telemetry = _this30.telemetry;
                            null !== telemetry && (telemetry.stop(), _this30.telemetry = null), _this30.emit("contextLost");
                        }, null != target && "" !== target) {
                            var element = "string" == typeof target ? platform.getElementById(target) : target;
                            if (null === element) throw new Error("Could not find target element");
                            element.appendChild(canvas);
                        } else if (!0 === _this30.ownsCanvas) throw new Error("New canvas element could not be appended to undefined target");
                        !0 === ENABLE_INSPECTOR && _this30.applyInspector(!1), _this30.applyTelemetry(), 
                        loop.schedule();
                        var _warm = function() {
                            !0 !== _this30.destroyed && !0 !== backend.ctx.isLost() && !0 === _this30.warmNext() && platform.setTimeout(_warm, 0);
                        };
                        return platform.setTimeout(_warm, 0), _this30;
                    }
                    return _inherits(Renderer, _RendererCore), _createClass(Renderer, [ {
                        key: "onFrameRequest",
                        value: function() {
                            var loop = this.loop;
                            void 0 !== loop && loop.schedule();
                        }
                    }, {
                        key: "frame",
                        value: function(time, dt) {
                            if (this.animationManager.now = time, this.lastFrameTime = this.currentFrameTime, 
                            this.currentFrameTime = time, this.deltaTime = dt, this.elapsedTime = time - this.startTime, 
                            !0 === this.hasListener("frameTick") && this.emit("frameTick", {
                                time: time,
                                delta: dt
                            }), !0 !== this.destroyed) {
                                var animating = this.animationManager.hasActive;
                                this.step(dt);
                                var events = this.events, telemetry = this.telemetry, platform = this.platform;
                                if (!1 === this.frameRequested) {
                                    if (this.uploadRequested = !1, events.holding = !0, this.textures.decodedCount > 0) {
                                        var start = null !== telemetry ? platform.now() : 0;
                                        this.upload(animating, telemetry, start), !0 === this.memory.criticalCleanupRequested && this.memory.cleanupAt(time);
                                    }
                                    return null !== telemetry && telemetry === this.telemetry && telemetry.tick(time, dt, !1, animating), 
                                    events.holding = !1, void events.flush();
                                }
                                var backend = this.backend;
                                backend.beginFrame();
                                var textures = this.textures;
                                textures.frame++, textures.time = time, events.holding = !0;
                                var updateStart = 0;
                                if (null !== telemetry && (updateStart = platform.now()), this.update(), !0 !== this.destroyed) {
                                    var drawStart = 0;
                                    if (null !== telemetry && (drawStart = platform.now()), backend.draw(this.stream, this.ops, this.clips), 
                                    !0 !== this.destroyed) {
                                        var shaders = this.shaders;
                                        !0 === shaders.timed && (shaders.timed = !1, this.requestRender()), this.loader.dispatch(), 
                                        this.uploadRequested = !1;
                                        var drawEnd = 0;
                                        if (null !== telemetry && (drawEnd = platform.now(), telemetry.drawn(drawStart - updateStart, drawEnd - drawStart, this.scene.quads, this.flushedOps + this.ops.length, this.animationManager.active.length)), 
                                        this.upload(animating, telemetry, drawEnd), !0 === this.memory.criticalCleanupRequested && this.memory.cleanupAt(time), 
                                        null !== telemetry && telemetry === this.telemetry && telemetry.tick(time, dt, !0, animating), 
                                        events.holding = !1, shaders.reportErrors(), events.flush(), !0 === ENABLE_INSPECTOR) {
                                            var inspector = this.inspector;
                                            null !== inspector && inspector.frame();
                                        }
                                    } else events.holding = !1;
                                } else events.holding = !1;
                            }
                        }
                    }, {
                        key: "applyInspector",
                        value: function(optionsChanged) {
                            if (!1 !== ENABLE_INSPECTOR) {
                                var Class = this.settings.inspector, current = this.inspector;
                                if ((null === current || current.constructor !== Class || !1 !== optionsChanged) && (null !== current && (current.destroy(), 
                                this.inspector = null), !1 !== Class)) {
                                    var inspector = new Class(this.canvas, this.settings);
                                    inspector.attach(this), this.inspector = inspector;
                                }
                            }
                        }
                    }, {
                        key: "upload",
                        value: function(animating, telemetry, start) {
                            var limit = this.settings.textureProcessingTimeLimit, queued = this.textures.decodedCount;
                            if (null !== telemetry && 0 !== queued) {
                                var uploaded = this.uploader.run(animating, limit);
                                telemetry.uploaded(queued, uploaded, this.platform.now() - start);
                            } else this.uploader.run(animating, limit);
                        }
                    }, {
                        key: "applyTelemetry",
                        value: function() {
                            if (!0 !== this.loop.stopped) {
                                var interval = this.settings.fpsUpdateInterval, current = this.telemetry;
                                if (interval <= 0) null !== current && (current.stop(), this.telemetry = null); else {
                                    var now = this.platform.now();
                                    if (null === current) {
                                        var telemetry = new Telemetry(this, this.events, this.platform, this.backend.spy, interval, now);
                                        telemetry.segment = this.segment, !0 === this.loop.paused ? telemetry.halt() : telemetry.idle(now), 
                                        this.telemetry = telemetry;
                                    } else current.interval !== interval && current.restart(interval, now);
                                }
                            }
                        }
                    }, {
                        key: "setTelemetrySegment",
                        value: function(label) {
                            if (label !== this.segment) {
                                var telemetry = this.telemetry;
                                null !== telemetry && telemetry.relabel(label, this.platform.now()), this.segment = label;
                            }
                        }
                    }, {
                        key: "maintain",
                        value: function() {
                            var events = this.events;
                            events.holding = !0, !0 === this.backend.outOfMemory() && this.memory.handleOutOfMemory(), 
                            this.memory.maintain(), this.shaders.trim(), this.textNodes.trim(), this.textNodes.layoutAhead(), 
                            events.holding = !1, events.flush();
                        }
                    }, {
                        key: "memoryInfo",
                        value: function() {
                            return this.memory.info();
                        }
                    }, {
                        key: "cleanup",
                        value: function(full) {
                            var events = this.events, held = events.holding;
                            events.holding = !0, this.memory.cleanup(!0 === full), events.holding = held, events.flush();
                        }
                    }, {
                        key: "rerender",
                        value: function() {
                            this.requestRender();
                        }
                    }, {
                        key: "getCapabilities",
                        value: function() {
                            return this.backend.getCapabilities();
                        }
                    }, {
                        key: "setOptions",
                        value: function(options) {
                            if (!0 !== this.destroyed) {
                                var s = this.settings, effects = 0;
                                for (var key in options) if (!1 !== hasOwn.call(runtimeSettings, key)) {
                                    var k = key, setting = runtimeSettings[k];
                                    s[k] = setting.resolve(options[k], s[k]), effects |= setting.effect;
                                }
                                1 & effects && (this.backend.setClearColor(s.clearColor), this.requestRender()), 
                                2 & effects && (this.loop.targetFrameTime = frameTime(s.targetFPS)), 8 & effects && (this.memory.updateSettings(s.textureMemory), 
                                this.cleanup(!1)), 16 & effects && this.applyTelemetry(), !0 === ENABLE_INSPECTOR && 96 & effects && this.applyInspector(!!(64 & effects)), 
                                4 & effects && (this.view.margin = normalizeBoundsMargin$1(s.boundsMargin), this.nodes.markDirty(this.root.id, 128));
                            }
                        }
                    }, {
                        key: "pause",
                        value: function(options) {
                            this.loop.pause(void 0 !== options && !0 === options.immediate);
                        }
                    }, {
                        key: "resume",
                        value: function() {
                            if (!0 === this.loop.resume()) {
                                var telemetry = this.telemetry;
                                null !== telemetry && telemetry.idle(this.platform.now()), this.requestRender();
                            }
                        }
                    }, {
                        key: "isPaused",
                        get: function() {
                            return this.loop.paused;
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            if (!0 !== this.destroyed) {
                                this.destroyed = !0, this.loop.stop();
                                var telemetry = this.telemetry;
                                null !== telemetry && (telemetry.stop(), this.telemetry = null), !0 === ENABLE_INSPECTOR && null !== this.inspector && (this.inspector.destroy(), 
                                this.inspector = null), this.shaders.onLost = null, this.events.destroy(), this.textEvents.destroy(), 
                                this.fonts.destroy(), this.memory.destroy(), this.textures.schedule = null, this.loader.destroy(), 
                                this.uploader.destroy(), this.root.destroy(), this.backend.destroy();
                                var parent = this.canvas.parentNode;
                                !0 === this.ownsCanvas && null != parent && parent.removeChild(this.canvas), this.removeAllListeners();
                            }
                        }
                    } ]);
                }(RendererCore)), _export("nt", sharedConfig = {
                    context: void 0,
                    registry: void 0,
                    effects: void 0,
                    done: !1,
                    getContextId: function() {
                        return _getContextId(this.context.count);
                    },
                    getNextContextId: function() {
                        return _getContextId(this.context.count++);
                    }
                }), equalFn = function(a, b) {
                    return a === b;
                }, $PROXY = Symbol("solid-proxy"), SUPPORTS_PROXY = "function" == typeof Proxy, 
                _export("k", $TRACK = Symbol("solid-track")), signalOptions = {
                    equals: equalFn
                }, ERROR = null, runEffects = runQueue, STALE = 1, PENDING = 2, UNOWNED = {
                    owned: null,
                    cleanups: null,
                    context: null,
                    owner: null
                }, NO_INIT = {}, Owner = null, Transition = null, Scheduler = null, ExternalSourceConfig = null, 
                Listener = null, Updates = null, Effects = null, ExecCount = 0, _createSignal16 = _slicedToArray(createSignal(!1), 2), 
                _createSignal16[0], setTransPending = _createSignal16[1], FALLBACK = Symbol("fallback"), 
                hydrationEnabled = !1, propTraps = {
                    get: function(_, property, receiver) {
                        return property === $PROXY ? receiver : _.get(property);
                    },
                    has: function(_, property) {
                        return property === $PROXY || _.has(property);
                    },
                    set: trueFn,
                    deleteProperty: trueFn,
                    getOwnPropertyDescriptor: function(_, property) {
                        return {
                            configurable: !0,
                            enumerable: !0,
                            get: function() {
                                return _.get(property);
                            },
                            set: trueFn,
                            deleteProperty: trueFn
                        };
                    },
                    ownKeys: function(_) {
                        return _.keys();
                    }
                }, narrowedError = function(name) {
                    return "Stale read from <".concat(name, ">.");
                }, SuspenseListContext = createContext(), _createSignal18 = _slicedToArray(createSignal(void 0), 2), 
                activeElement = _createSignal18[0], _setActiveElement = _createSignal18[1], _export("O", activeElement), 
                DOM_RENDERING = "undefined" != typeof SOLIDTV_DOM_RENDERING && !0 === SOLIDTV_DOM_RENDERING, 
                SHADERS_ENABLED = "undefined" == typeof SOLIDTV_DISABLE_SHADERS || !0 !== SOLIDTV_DISABLE_SHADERS, 
                isDomRendererActive = function() {
                    return DOM_RENDERING && Config.domRendererEnabled;
                }, _export("D", Config = {
                    debug: !1,
                    domRendererEnabled: !1,
                    focusDebug: !1,
                    keyDebug: !1,
                    focusHistoryDebug: 0,
                    animationsEnabled: !0,
                    animationSettings: {
                        duration: 250,
                        easing: "ease-in-out"
                    },
                    convertToShader: convertToShader,
                    setActiveElement: function(elm) {
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
                    lockStyles: !0,
                    preventDefaultOnHandledKeys: !1,
                    rendererOptions: {},
                    stateOrder: []
                }), NodeType = {
                    Element: "element",
                    TextNode: "textNode",
                    Text: "text"
                }, TextNode = _createClass(function(text) {
                    this._type = "text", this.parent = void 0, this.text = void 0, this.text = text;
                }), _export("T", isFunction = function(obj) {
                    return "function" == typeof obj;
                }), _export("S", isFocused), colorToRgba = function(c) {
                    return "rgba(".concat(c >> 24 & 255, ",").concat(c >> 16 & 255, ",").concat(c >> 8 & 255, ",").concat((255 & c) / 255, ")");
                }, _styleRef = "undefined" != typeof document && (null == (_document$documentEle = document.documentElement) ? void 0 : _document$documentEle.style) || {}, 
                supportsObjectFit = "objectFit" in _styleRef, supportsObjectPosition = "objectPosition" in _styleRef, 
                supportsMixBlendMode = "mixBlendMode" in _styleRef, supportsWebkitMask = "webkitMaskImage" in _styleRef, 
                supportsCssMask = (supportsStandardMask = "maskImage" in _styleRef) || supportsWebkitMask, 
                animationTasks = [], animationFrameRequested = !1, AnimationController = function() {
                    return _createClass(function(node, props, rawSettings) {
                        var _rawSettings$duration, _rawSettings$delay, _rawSettings$easing, _rawSettings$loop, _rawSettings$repeat, _rawSettings$repeatDe, _rawSettings$adaptive;
                        this.node = void 0, this.state = "paused", this.stopPromise = null, this.stopResolve = null, 
                        this.propsStart = {}, this.propsEnd = {}, this.timeStart = performance.now(), this.timeEnd = void 0, 
                        this.settings = void 0, this.iteration = 0, this.pausedTime = null, this.node = node, 
                        this.settings = {
                            duration: null !== (_rawSettings$duration = rawSettings.duration) && void 0 !== _rawSettings$duration ? _rawSettings$duration : 300,
                            delay: null !== (_rawSettings$delay = rawSettings.delay) && void 0 !== _rawSettings$delay ? _rawSettings$delay : 0,
                            easing: null !== (_rawSettings$easing = rawSettings.easing) && void 0 !== _rawSettings$easing ? _rawSettings$easing : "linear",
                            loop: null !== (_rawSettings$loop = rawSettings.loop) && void 0 !== _rawSettings$loop && _rawSettings$loop,
                            repeat: null !== (_rawSettings$repeat = rawSettings.repeat) && void 0 !== _rawSettings$repeat ? _rawSettings$repeat : 1,
                            repeatDelay: null !== (_rawSettings$repeatDe = rawSettings.repeatDelay) && void 0 !== _rawSettings$repeatDe ? _rawSettings$repeatDe : 0,
                            stopMethod: !1,
                            adaptiveDuration: null !== (_rawSettings$adaptive = rawSettings.adaptiveDuration) && void 0 !== _rawSettings$adaptive && _rawSettings$adaptive
                        }, this.timeEnd = this.timeStart + this.settings.delay + this.settings.duration;
                        for (var _i35 = 0, _Object$entries = Object.entries(props); _i35 < _Object$entries.length; _i35++) {
                            var _Object$entries$_i = _slicedToArray(_Object$entries[_i35], 2), prop = _Object$entries$_i[0], value = _Object$entries$_i[1];
                            null != value && "number" == typeof value && (this.propsStart[prop] = node.props[prop], 
                            this.propsEnd[prop] = value);
                        }
                        animationTasks.push(this);
                    }, [ {
                        key: "start",
                        value: function() {
                            return null != this.pausedTime ? (this.timeStart += performance.now() - this.pausedTime, 
                            this.pausedTime = null) : this.timeStart = performance.now(), this.state = "running", 
                            requestAnimationUpdate(), this;
                        }
                    }, {
                        key: "pause",
                        value: function() {
                            return this.pausedTime = performance.now(), this.state = "paused", this;
                        }
                    }, {
                        key: "stop",
                        value: function() {
                            var index = animationTasks.indexOf(this);
                            return -1 !== index && animationTasks.splice(index, 1), this.state = "stopped", 
                            this.stopResolve && (this.stopResolve(), this.stopResolve = null, this.stopPromise = null), 
                            this;
                        }
                    }, {
                        key: "restore",
                        value: function() {
                            return this;
                        }
                    }, {
                        key: "waitUntilStopped",
                        value: function() {
                            var _this$stopPromise, _this31 = this;
                            return null !== (_this$stopPromise = this.stopPromise) && void 0 !== _this$stopPromise || (this.stopPromise = new Promise(function(resolve) {
                                _this31.stopResolve = resolve;
                            })), this.stopPromise;
                        }
                    }, {
                        key: "on",
                        value: function() {
                            return this;
                        }
                    }, {
                        key: "once",
                        value: function() {
                            return this;
                        }
                    }, {
                        key: "off",
                        value: function() {
                            return this;
                        }
                    }, {
                        key: "emit",
                        value: function() {
                            return this;
                        }
                    } ]);
                }(), elMap = new WeakMap, textNodesToMeasure = new Set, containTextNodes = new Set, 
                fontLoadingListenerSetup = !1, defaultShader = {
                    shaderType: "",
                    props: void 0
                }, lastNodeId = 0, CoreNodeRenderStateMap = new Map([ [ 0, "init" ], [ 2, "outOfBounds" ], [ 4, "inBounds" ], [ 8, "inViewport" ] ]), 
                DOMText = function(_DOMNode) {
                    function DOMText(stage, props) {
                        var _this33;
                        return (_this33 = _callSuper(this, DOMText, [ stage, props ])).props = void 0, _this33.loaded = !1, 
                        _this33.props = props, _this33.div.innerText = props.text, updateNodeStyles(_this33), 
                        updateDOMTextSize(_this33, !1), syncContainTextNodeTracking(_this33), scheduleUpdateDOMTextMeasurement(_this33), 
                        _this33;
                    }
                    return _inherits(DOMText, _DOMNode), _createClass(DOMText, [ {
                        key: "destroy",
                        value: function() {
                            var t, o, e, r, p;
                            textNodesToMeasure.delete(this), containTextNodes.delete(this), (t = DOMText, o = "destroy", 
                            e = this, p = _get(_getPrototypeOf(1 & (r = 3) ? t.prototype : t), o, e), 2 & r && "function" == typeof p ? function(t) {
                                return p.apply(e, t);
                            } : p)([]);
                        }
                    }, {
                        key: "text",
                        get: function() {
                            return this.props.text;
                        },
                        set: function(v) {
                            this.props.text !== v && (this.props.text = v, this.div.innerText = v, scheduleUpdateDOMTextMeasurement(this));
                        }
                    }, {
                        key: "fontFamily",
                        get: function() {
                            return this.props.fontFamily;
                        },
                        set: function(v) {
                            this.props.fontFamily !== v && (this.props.fontFamily = v, updateNodeStyles(this), 
                            scheduleUpdateDOMTextMeasurement(this));
                        }
                    }, {
                        key: "fontSize",
                        get: function() {
                            return this.props.fontSize;
                        },
                        set: function(v) {
                            this.props.fontSize !== v && (this.props.fontSize = v, updateNodeStyles(this), scheduleUpdateDOMTextMeasurement(this));
                        }
                    }, {
                        key: "fontStyle",
                        get: function() {
                            return this.props.fontStyle;
                        },
                        set: function(v) {
                            this.props.fontStyle !== v && (this.props.fontStyle = v, updateNodeStyles(this), 
                            scheduleUpdateDOMTextMeasurement(this));
                        }
                    }, {
                        key: "fontWeight",
                        get: function() {
                            return this.props.fontWeight;
                        },
                        set: function(v) {
                            this.props.fontWeight !== v && (this.props.fontWeight = v, updateNodeStyles(this), 
                            scheduleUpdateDOMTextMeasurement(this));
                        }
                    }, {
                        key: "fontStretch",
                        get: function() {
                            return this.props.fontStretch;
                        },
                        set: function(v) {
                            this.props.fontStretch !== v && (this.props.fontStretch = v, updateNodeStyles(this), 
                            scheduleUpdateDOMTextMeasurement(this));
                        }
                    }, {
                        key: "forceLoad",
                        get: function() {
                            return this.props.forceLoad;
                        },
                        set: function(v) {
                            this.props.forceLoad = v;
                        }
                    }, {
                        key: "lineHeight",
                        get: function() {
                            return this.props.lineHeight;
                        },
                        set: function(v) {
                            this.props.lineHeight !== v && (this.props.lineHeight = v, updateNodeStyles(this), 
                            scheduleUpdateDOMTextMeasurement(this));
                        }
                    }, {
                        key: "maxWidth",
                        get: function() {
                            return this.props.maxWidth;
                        },
                        set: function(v) {
                            this.props.maxWidth !== v && (this.props.maxWidth = v, updateNodeStyles(this), scheduleUpdateDOMTextMeasurement(this));
                        }
                    }, {
                        key: "maxHeight",
                        get: function() {
                            return this.props.maxHeight;
                        },
                        set: function(v) {
                            this.props.maxHeight !== v && (this.props.maxHeight = v, updateNodeStyles(this), 
                            scheduleUpdateDOMTextMeasurement(this));
                        }
                    }, {
                        key: "letterSpacing",
                        get: function() {
                            return this.props.letterSpacing;
                        },
                        set: function(v) {
                            this.props.letterSpacing !== v && (this.props.letterSpacing = v, updateNodeStyles(this), 
                            scheduleUpdateDOMTextMeasurement(this));
                        }
                    }, {
                        key: "textAlign",
                        get: function() {
                            return this.props.textAlign;
                        },
                        set: function(v) {
                            this.props.textAlign !== v && (this.props.textAlign = v, updateNodeStyles(this));
                        }
                    }, {
                        key: "overflowSuffix",
                        get: function() {
                            return this.props.overflowSuffix;
                        },
                        set: function(v) {
                            this.props.overflowSuffix !== v && (this.props.overflowSuffix = v, updateNodeStyles(this));
                        }
                    }, {
                        key: "maxLines",
                        get: function() {
                            return this.props.maxLines;
                        },
                        set: function(v) {
                            this.props.maxLines !== v && (this.props.maxLines = v, updateNodeStyles(this), scheduleUpdateDOMTextMeasurement(this));
                        }
                    }, {
                        key: "contain",
                        get: function() {
                            return this.props.contain;
                        },
                        set: function(v) {
                            this.props.contain !== v && (this.props.contain = v, syncContainTextNodeTracking(this), 
                            updateNodeStyles(this), scheduleUpdateDOMTextMeasurement(this));
                        }
                    }, {
                        key: "verticalAlign",
                        get: function() {
                            return this.props.verticalAlign;
                        },
                        set: function(v) {
                            this.props.verticalAlign = v, updateNodeStyles(this);
                        }
                    }, {
                        key: "offsetY",
                        get: function() {
                            return this.props.offsetY;
                        },
                        set: function(v) {
                            this.props.offsetY = v, updateNodeStyles(this);
                        }
                    }, {
                        key: "wordBreak",
                        get: function() {
                            return this.props.wordBreak;
                        },
                        set: function(v) {
                            this.props.wordBreak = v, updateNodeStyles(this);
                        }
                    } ]);
                }(DOMNode = function(_EventEmitter4) {
                    function DOMNode(stage, props) {
                        var _this32;
                        (_this32 = _callSuper(this, DOMNode)).stage = void 0, _this32.props = void 0, _this32.div = document.createElement("div"), 
                        _this32.divBg = void 0, _this32.divBorder = void 0, _this32.imgEl = void 0, _this32.imageLoading = !1, 
                        _this32.lazyImagePendingSrc = null, _this32.lazyImageSubTextureProps = null, _this32.boundsDirty = !0, 
                        _this32.children = new Set, _this32._lastStyleStr = "", _this32.id = ++lastNodeId, 
                        _this32.renderState = 0, _this32.preventCleanup = !0, _this32.destroyed = !1, _this32.animate = animate, 
                        _this32.stage = stage, _this32.props = props, _this32.div._node = _this32, _this32.div.setAttribute("data-id", String(_this32.id)), 
                        elMap.set(_this32, _this32.div);
                        var parent = _this32.props.parent;
                        return parent instanceof DOMNode && parent.children.add(_this32), updateNodeParent(_this32), 
                        updateNodeStyles(_this32), updateNodeData(_this32), _this32;
                    }
                    return _inherits(DOMNode, _EventEmitter4), _createClass(DOMNode, [ {
                        key: "destroy",
                        value: function() {
                            var _this$div$parentNode;
                            this.markDestroyed(), elMap.delete(this);
                            var parent = this.props.parent;
                            parent instanceof DOMNode && parent.children.delete(this), null == (_this$div$parentNode = this.div.parentNode) || _this$div$parentNode.removeChild(this.div);
                        }
                    }, {
                        key: "markDestroyed",
                        value: function() {
                            this.destroyed = !0;
                            var _step12, _iterator12 = _createForOfIteratorHelper(this.children);
                            try {
                                for (_iterator12.s(); !(_step12 = _iterator12.n()).done; ) {
                                    _step12.value.markDestroyed();
                                }
                            } catch (err) {
                                _iterator12.e(err);
                            } finally {
                                _iterator12.f();
                            }
                        }
                    }, {
                        key: "parent",
                        get: function() {
                            return this.props.parent;
                        },
                        set: function(value) {
                            if (this.props.parent !== value) {
                                var prevParent = this.props.parent;
                                prevParent instanceof DOMNode && (prevParent.children.delete(this), prevParent.markChildrenBoundsDirty()), 
                                this.props.parent = value, value instanceof DOMNode && (value.children.add(this), 
                                value.markChildrenBoundsDirty()), this.boundsDirty = !0, this.markChildrenBoundsDirty(), 
                                updateNodeParent(this);
                            }
                        }
                    }, {
                        key: "markChildrenBoundsDirty",
                        value: function() {
                            var _step13, _iterator13 = _createForOfIteratorHelper(this.children);
                            try {
                                for (_iterator13.s(); !(_step13 = _iterator13.n()).done; ) {
                                    var child = _step13.value;
                                    if (child.boundsDirty = !0, child !== child.stage.root) {
                                        if (nodeHasTextureSource(child)) {
                                            var nextState = computeRenderStateForNode(child);
                                            null != nextState && child.updateRenderState(nextState);
                                        }
                                        child.boundsDirty = !1;
                                    }
                                    child.markChildrenBoundsDirty();
                                }
                            } catch (err) {
                                _iterator13.e(err);
                            } finally {
                                _iterator13.f();
                            }
                        }
                    }, {
                        key: "updateRenderState",
                        value: function(renderState) {
                            if (renderState !== this.renderState) {
                                var previous = this.renderState;
                                this.renderState = renderState, isRenderStateInBounds(renderState) && this.applyPendingImageSrc(), 
                                8 === renderState ? this.emit("inViewport", {
                                    previous: previous,
                                    current: renderState
                                }) : 8 === previous && this.emit("outOfViewport", {
                                    previous: previous,
                                    current: renderState
                                }), this.imgEl && (this.imgEl.dataset.state = CoreNodeRenderStateMap.get(renderState));
                            }
                        }
                    }, {
                        key: "showBackgroundLayer",
                        value: function() {
                            this.divBg && (this.divBg.style.opacity = "1");
                        }
                    }, {
                        key: "hideMaskedBackgroundLayer",
                        value: function() {
                            this.divBg && (this.divBg.style.maskImage || this.divBg.style.webkitMaskImage) && (this.divBg.style.opacity = "0");
                        }
                    }, {
                        key: "applyPendingImageSrc",
                        value: function() {
                            if (this.imgEl) {
                                var pendingSrc = this.lazyImagePendingSrc;
                                pendingSrc && this.imgEl.dataset.rawSrc !== pendingSrc && (this.imageLoading = !0, 
                                this.imgEl.style.opacity = "0", this.hideMaskedBackgroundLayer(), this.imgEl.style.display = "", 
                                this.imgEl.dataset.pendingSrc = pendingSrc, pendingSrc.startsWith("data:") ? this.imgEl.removeAttribute("crossorigin") : this.imgEl.crossOrigin = "anonymous", 
                                this.imgEl.src = pendingSrc, this.imgEl.dataset.rawSrc = pendingSrc, this.imgEl.dataset.pendingSrc = "");
                            }
                        }
                    }, {
                        key: "x",
                        get: function() {
                            return this.props.x;
                        },
                        set: function(v) {
                            this.props.x !== v && (this.props.x = v, this.boundsDirty = !0, this.markChildrenBoundsDirty(), 
                            updateTransformOnly(this));
                        }
                    }, {
                        key: "y",
                        get: function() {
                            return this.props.y;
                        },
                        set: function(v) {
                            this.props.y !== v && (this.props.y = v, this.boundsDirty = !0, this.markChildrenBoundsDirty(), 
                            updateTransformOnly(this));
                        }
                    }, {
                        key: "w",
                        get: function() {
                            return this.props.w;
                        },
                        set: function(v) {
                            this.props.w !== v && (this.props.w = v, this.boundsDirty = !0, this.markChildrenBoundsDirty(), 
                            updateNodeStyles(this));
                        }
                    }, {
                        key: "h",
                        get: function() {
                            return this.props.h;
                        },
                        set: function(v) {
                            this.props.h !== v && (this.props.h = v, this.boundsDirty = !0, this.markChildrenBoundsDirty(), 
                            updateNodeStyles(this));
                        }
                    }, {
                        key: "width",
                        get: function() {
                            return this.props.w;
                        },
                        set: function(v) {
                            this.props.w !== v && (this.props.w = v, this.boundsDirty = !0, this.markChildrenBoundsDirty(), 
                            updateNodeStyles(this));
                        }
                    }, {
                        key: "height",
                        get: function() {
                            return this.props.h;
                        },
                        set: function(v) {
                            this.props.h !== v && (this.props.h = v, this.boundsDirty = !0, this.markChildrenBoundsDirty(), 
                            updateNodeStyles(this));
                        }
                    }, {
                        key: "alpha",
                        get: function() {
                            return this.props.alpha;
                        },
                        set: function(v) {
                            this.props.alpha = v, updateNodeStyles(this);
                        }
                    }, {
                        key: "autosize",
                        get: function() {
                            return this.props.autosize;
                        },
                        set: function(v) {
                            this.props.autosize = v, updateNodeStyles(this);
                        }
                    }, {
                        key: "clipping",
                        get: function() {
                            return this.props.clipping;
                        },
                        set: function(v) {
                            this.props.clipping = v, updateNodeStyles(this);
                        }
                    }, {
                        key: "color",
                        get: function() {
                            return this.props.color;
                        },
                        set: function(v) {
                            this.props.color = v, updateNodeStyles(this);
                        }
                    }, {
                        key: "colorTop",
                        get: function() {
                            return this.props.colorTop;
                        },
                        set: function(v) {
                            this.props.colorTop = v, updateNodeStyles(this);
                        }
                    }, {
                        key: "colorBottom",
                        get: function() {
                            return this.props.colorBottom;
                        },
                        set: function(v) {
                            this.props.colorBottom = v, updateNodeStyles(this);
                        }
                    }, {
                        key: "colorLeft",
                        get: function() {
                            return this.props.colorLeft;
                        },
                        set: function(v) {
                            this.props.colorLeft = v, updateNodeStyles(this);
                        }
                    }, {
                        key: "colorRight",
                        get: function() {
                            return this.props.colorRight;
                        },
                        set: function(v) {
                            this.props.colorRight = v, updateNodeStyles(this);
                        }
                    }, {
                        key: "colorTl",
                        get: function() {
                            return this.props.colorTl;
                        },
                        set: function(v) {
                            this.props.colorTl = v, updateNodeStyles(this);
                        }
                    }, {
                        key: "colorTr",
                        get: function() {
                            return this.props.colorTr;
                        },
                        set: function(v) {
                            this.props.colorTr = v, updateNodeStyles(this);
                        }
                    }, {
                        key: "colorBr",
                        get: function() {
                            return this.props.colorBr;
                        },
                        set: function(v) {
                            this.props.colorBr = v, updateNodeStyles(this);
                        }
                    }, {
                        key: "colorBl",
                        get: function() {
                            return this.props.colorBl;
                        },
                        set: function(v) {
                            this.props.colorBl = v, updateNodeStyles(this);
                        }
                    }, {
                        key: "zIndex",
                        get: function() {
                            return this.props.zIndex;
                        },
                        set: function(v) {
                            this.props.zIndex !== v && (this.props.zIndex = Math.ceil(v), updateNodeStyles(this));
                        }
                    }, {
                        key: "texture",
                        get: function() {
                            return this.props.texture;
                        },
                        set: function(v) {
                            this.props.texture !== v && (this.props.texture = v, this.boundsDirty = !0, updateNodeStyles(this));
                        }
                    }, {
                        key: "textureOptions",
                        get: function() {
                            return this.props.textureOptions;
                        },
                        set: function(v) {
                            this.props.textureOptions = v, updateNodeStyles(this);
                        }
                    }, {
                        key: "src",
                        get: function() {
                            return this.props.src;
                        },
                        set: function(v) {
                            this.props.src !== v && (this.props.src = v, this.boundsDirty = !0, updateNodeStyles(this));
                        }
                    }, {
                        key: "scale",
                        get: function() {
                            var _this$props$scale;
                            return null !== (_this$props$scale = this.props.scale) && void 0 !== _this$props$scale ? _this$props$scale : 1;
                        },
                        set: function(v) {
                            this.props.scale !== v && (this.props.scale = v, this.boundsDirty = !0, this.markChildrenBoundsDirty(), 
                            updateTransformOnly(this));
                        }
                    }, {
                        key: "scaleX",
                        get: function() {
                            return this.props.scaleX;
                        },
                        set: function(v) {
                            this.props.scaleX !== v && (this.props.scaleX = v, this.boundsDirty = !0, this.markChildrenBoundsDirty(), 
                            updateTransformOnly(this));
                        }
                    }, {
                        key: "scaleY",
                        get: function() {
                            return this.props.scaleY;
                        },
                        set: function(v) {
                            this.props.scaleY !== v && (this.props.scaleY = v, this.boundsDirty = !0, this.markChildrenBoundsDirty(), 
                            updateTransformOnly(this));
                        }
                    }, {
                        key: "mount",
                        get: function() {
                            return this.props.mount;
                        },
                        set: function(v) {
                            this.props.mount !== v && (this.props.mount = v, this.boundsDirty = !0, this.markChildrenBoundsDirty(), 
                            updateTransformOnly(this));
                        }
                    }, {
                        key: "mountX",
                        get: function() {
                            return this.props.mountX;
                        },
                        set: function(v) {
                            this.props.mountX !== v && (this.props.mountX = v, this.boundsDirty = !0, this.markChildrenBoundsDirty(), 
                            updateTransformOnly(this));
                        }
                    }, {
                        key: "mountY",
                        get: function() {
                            return this.props.mountY;
                        },
                        set: function(v) {
                            this.props.mountY !== v && (this.props.mountY = v, this.boundsDirty = !0, this.markChildrenBoundsDirty(), 
                            updateTransformOnly(this));
                        }
                    }, {
                        key: "pivot",
                        get: function() {
                            return this.props.pivot;
                        },
                        set: function(v) {
                            this.props.pivot !== v && (this.props.pivot = v, this.boundsDirty = !0, this.markChildrenBoundsDirty(), 
                            updateNodeStyles(this));
                        }
                    }, {
                        key: "pivotX",
                        get: function() {
                            return this.props.pivotX;
                        },
                        set: function(v) {
                            this.props.pivotX !== v && (this.props.pivotX = v, this.boundsDirty = !0, this.markChildrenBoundsDirty(), 
                            updateNodeStyles(this));
                        }
                    }, {
                        key: "pivotY",
                        get: function() {
                            return this.props.pivotY;
                        },
                        set: function(v) {
                            this.props.pivotY !== v && (this.props.pivotY = v, this.boundsDirty = !0, this.markChildrenBoundsDirty(), 
                            updateNodeStyles(this));
                        }
                    }, {
                        key: "rotation",
                        get: function() {
                            return this.props.rotation;
                        },
                        set: function(v) {
                            this.props.rotation !== v && (this.props.rotation = v, this.boundsDirty = !0, this.markChildrenBoundsDirty(), 
                            updateTransformOnly(this));
                        }
                    }, {
                        key: "shader",
                        get: function() {
                            return this.props.shader;
                        },
                        set: function(v) {
                            this.props.shader = v, updateNodeStyles(this);
                        }
                    }, {
                        key: "data",
                        get: function() {
                            return this.props.data;
                        },
                        set: function(v) {
                            this.props.data = v, updateNodeData(this);
                        }
                    }, {
                        key: "imageType",
                        get: function() {
                            return this.props.imageType;
                        },
                        set: function(v) {
                            this.props.imageType = v;
                        }
                    }, {
                        key: "srcWidth",
                        get: function() {
                            return this.props.srcWidth;
                        },
                        set: function(v) {
                            this.props.srcWidth = v;
                        }
                    }, {
                        key: "srcHeight",
                        get: function() {
                            return this.props.srcHeight;
                        },
                        set: function(v) {
                            this.props.srcHeight = v;
                        }
                    }, {
                        key: "srcX",
                        get: function() {
                            return this.props.srcX;
                        },
                        set: function(v) {
                            this.props.srcX = v;
                        }
                    }, {
                        key: "srcY",
                        get: function() {
                            return this.props.srcY;
                        },
                        set: function(v) {
                            this.props.srcY = v;
                        }
                    }, {
                        key: "ignoreParentAlpha",
                        get: function() {
                            return this.props.ignoreParentAlpha;
                        },
                        set: function(v) {
                            this.props.ignoreParentAlpha = v, updateNodeStyles(this);
                        }
                    }, {
                        key: "placeholderColor",
                        get: function() {
                            return this.props.placeholderColor;
                        },
                        set: function(v) {
                            this.props.placeholderColor = v, updateNodeStyles(this);
                        }
                    }, {
                        key: "absX",
                        get: function() {
                            var parent = this.props.parent;
                            return this.x + -this.w * this.mountX + (parent instanceof DOMNode ? parent.absX : 0);
                        }
                    }, {
                        key: "absY",
                        get: function() {
                            var parent = this.props.parent;
                            return this.y + -this.h * this.mountY + (parent instanceof DOMNode ? parent.absY : 0);
                        }
                    } ]);
                }(EventEmitter)), DOMRendererMain = function() {
                    return _createClass(function(settings, rawTarget) {
                        var _settings$appWidth2, _settings$appHeight2, target;
                        if (this.settings = void 0, this.root = void 0, this.canvas = void 0, this.stage = void 0, 
                        this.eventListeners = new Map, this.settings = settings, "string" == typeof rawTarget) {
                            var result = document.getElementById(rawTarget);
                            if (!(result instanceof HTMLElement)) throw new Error("Target #".concat(rawTarget, " not found"));
                            target = result;
                        } else target = rawTarget;
                        var _loadFont, canvas = document.body.appendChild(document.createElement("canvas"));
                        canvas.style.position = "absolute", canvas.style.top = "0", canvas.style.left = "0", 
                        canvas.style.width = "100vw", canvas.style.height = "100vh", this.canvas = canvas, 
                        this.stage = {
                            root: null,
                            renderer: {
                                mode: "canvas",
                                boundsMargin: settings.boundsMargin
                            },
                            shManager: {
                                registerShaderType: function() {}
                            },
                            animationManager: {
                                registerAnimation: function(anim) {
                                    console.log("registerAnimation", anim);
                                },
                                unregisterAnimation: function(anim) {
                                    console.log("unregisterAnimation", anim);
                                }
                            },
                            loadFont: (_loadFont = _asyncToGenerator(_regenerator().m(function _callee() {
                                return _regenerator().w(function(_context2) {
                                    for (;;) if (0 === _context2.n) return _context2.a(2);
                                }, _callee);
                            })), function() {
                                return _loadFont.apply(this, arguments);
                            }),
                            cleanup: function() {},
                            requestRender: function() {}
                        }, this.root = new DOMNode(this.stage, resolveNodeDefaults({
                            w: null !== (_settings$appWidth2 = settings.appWidth) && void 0 !== _settings$appWidth2 ? _settings$appWidth2 : 1920,
                            h: null !== (_settings$appHeight2 = settings.appHeight) && void 0 !== _settings$appHeight2 ? _settings$appHeight2 : 1080,
                            shader: defaultShader,
                            zIndex: 1
                        })), this.stage.root = this.root, target.appendChild(this.root.div), Config.fontSettings.fontFamily && (this.root.div.style.fontFamily = Config.fontSettings.fontFamily), 
                        Config.fontSettings.fontSize && (this.root.div.style.fontSize = Config.fontSettings.fontSize + "px"), 
                        Config.fontSettings.lineHeight ? this.root.div.style.lineHeight = Config.fontSettings.lineHeight + "px" : this.root.div.style.lineHeight = "1.2", 
                        Config.fontSettings.fontWeight && ("number" == typeof Config.fontSettings.fontWeight ? this.root.div.style.fontWeight = Config.fontSettings.fontWeight + "px" : this.root.div.style.fontWeight = Config.fontSettings.fontWeight), 
                        updateRootPosition.call(this), new MutationObserver(updateRootPosition.bind(this)).observe(this.canvas, {
                            attributes: !0
                        }), new ResizeObserver(updateRootPosition.bind(this)).observe(this.canvas), window.addEventListener("resize", updateRootPosition.bind(this));
                    }, [ {
                        key: "removeAllListeners",
                        value: function() {
                            0 !== this.eventListeners.size && (this.eventListeners.forEach(function(listeners) {
                                return listeners.clear();
                            }), this.eventListeners.clear());
                        }
                    }, {
                        key: "once",
                        value: function(event, listener) {
                            var _this34 = this, _wrappedListener = function(target, data) {
                                _this34.off(event, _wrappedListener), listener(target, data);
                            };
                            this.on(event, _wrappedListener);
                        }
                    }, {
                        key: "on",
                        value: function(name, callback) {
                            var listeners = this.eventListeners.get(name);
                            listeners || (listeners = new Set, this.eventListeners.set(name, listeners)), listeners.add(callback);
                        }
                    }, {
                        key: "off",
                        value: function(event, listener) {
                            var listeners = this.eventListeners.get(event);
                            listeners && (listeners.delete(listener), 0 === listeners.size && this.eventListeners.delete(event));
                        }
                    }, {
                        key: "emit",
                        value: function(event, targetOrData, maybeData) {
                            var listeners = this.eventListeners.get(event);
                            if (listeners && 0 !== listeners.size) for (var hasExplicitTarget = 3 === arguments.length, target = hasExplicitTarget ? targetOrData : this.root, data = hasExplicitTarget ? maybeData : targetOrData, _i36 = 0, _Array$from = Array.from(listeners); _i36 < _Array$from.length; _i36++) {
                                var listener = _Array$from[_i36];
                                try {
                                    listener(target, data);
                                } catch (error) {
                                    console.error('Error in listener for event "'.concat(event, '"'), error);
                                }
                            }
                        }
                    }, {
                        key: "createNode",
                        value: function(props) {
                            return new DOMNode(this.stage, resolveNodeDefaults(props));
                        }
                    }, {
                        key: "createTextNode",
                        value: function(props) {
                            return new DOMText(this.stage, function(props) {
                                var _props$text, _props$fontSize, _props$fontFamily, _props$fontStyle, _props$fontWeight, _props$forceLoad, _props$textAlign, _props$contain, _props$offsetY, _props$letterSpacing, _props$lineHeight, _props$maxLines, _props$maxWidth, _props$maxHeight, _props$verticalAlign, _props$overflowSuffix, _props$wordBreak;
                                return _objectSpread(_objectSpread({}, resolveNodeDefaults(props)), {}, {
                                    text: null !== (_props$text = props.text) && void 0 !== _props$text ? _props$text : "",
                                    fontSize: null !== (_props$fontSize = props.fontSize) && void 0 !== _props$fontSize ? _props$fontSize : 16,
                                    fontFamily: null !== (_props$fontFamily = props.fontFamily) && void 0 !== _props$fontFamily ? _props$fontFamily : "sans-serif",
                                    fontStyle: null !== (_props$fontStyle = props.fontStyle) && void 0 !== _props$fontStyle ? _props$fontStyle : "normal",
                                    fontWeight: null !== (_props$fontWeight = props.fontWeight) && void 0 !== _props$fontWeight ? _props$fontWeight : "normal",
                                    forceLoad: null !== (_props$forceLoad = props.forceLoad) && void 0 !== _props$forceLoad && _props$forceLoad,
                                    textAlign: null !== (_props$textAlign = props.textAlign) && void 0 !== _props$textAlign ? _props$textAlign : "left",
                                    contain: null !== (_props$contain = props.contain) && void 0 !== _props$contain ? _props$contain : "none",
                                    offsetY: null !== (_props$offsetY = props.offsetY) && void 0 !== _props$offsetY ? _props$offsetY : 0,
                                    letterSpacing: null !== (_props$letterSpacing = props.letterSpacing) && void 0 !== _props$letterSpacing ? _props$letterSpacing : 0,
                                    lineHeight: null !== (_props$lineHeight = props.lineHeight) && void 0 !== _props$lineHeight ? _props$lineHeight : 0,
                                    maxLines: null !== (_props$maxLines = props.maxLines) && void 0 !== _props$maxLines ? _props$maxLines : 0,
                                    maxWidth: null !== (_props$maxWidth = props.maxWidth) && void 0 !== _props$maxWidth ? _props$maxWidth : 0,
                                    maxHeight: null !== (_props$maxHeight = props.maxHeight) && void 0 !== _props$maxHeight ? _props$maxHeight : 0,
                                    verticalAlign: null !== (_props$verticalAlign = props.verticalAlign) && void 0 !== _props$verticalAlign ? _props$verticalAlign : "middle",
                                    overflowSuffix: null !== (_props$overflowSuffix = props.overflowSuffix) && void 0 !== _props$overflowSuffix ? _props$overflowSuffix : "...",
                                    wordBreak: null !== (_props$wordBreak = props.wordBreak) && void 0 !== _props$wordBreak ? _props$wordBreak : "overflow"
                                });
                            }(props));
                        }
                    }, {
                        key: "createShader",
                        value: function() {
                            for (var _len5 = arguments.length, args = new Array(_len5), _key7 = 0; _key7 < _len5; _key7++) args[_key7] = arguments[_key7];
                            return {
                                shaderType: args[0],
                                props: args[1],
                                program: {}
                            };
                        }
                    }, {
                        key: "createTexture",
                        value: function(textureType, props) {
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
                            }
                            return {
                                type: type,
                                props: props
                            };
                        }
                    } ]);
                }(), pendingFontLoads = [], States = function(_Array) {
                    function States(callback) {
                        var _this35, _this36 = this, initialState = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, _super = function() {
                            for (var _len6 = arguments.length, _args = new Array(_len6), _key8 = 0; _key8 < _len6; _key8++) _args[_key8] = arguments[_key8];
                            return (_this35 = _callSuper(_this36, States, [].concat(_args))).onChange = void 0, 
                            _assertThisInitialized(_this35);
                        };
                        if (isArray(initialState)) {
                            _super();
                            for (var n = initialState.length, _i37 = 0; _i37 < n; _i37++) _this35[_i37] = initialState[_i37];
                        } else isString(initialState) ? _super(initialState) : _super.apply(void 0, _toConsumableArray(Object.entries(initialState).filter(function(_ref17) {
                            var _ref18 = _slicedToArray(_ref17, 2);
                            _ref18[0];
                            return _ref18[1];
                        }).map(function(_ref19) {
                            return _slicedToArray(_ref19, 1)[0];
                        })));
                        return _this35.onChange = callback, _possibleConstructorReturn(_this35, _assertThisInitialized(_this35));
                    }
                    return _inherits(States, _Array), _createClass(States, [ {
                        key: "has",
                        value: function(state) {
                            return this.indexOf(state) >= 0 || 36 !== state.charCodeAt(0) && this.indexOf("$" + state) >= 0;
                        }
                    }, {
                        key: "is",
                        value: function(state) {
                            return this.indexOf(state) >= 0;
                        }
                    }, {
                        key: "add",
                        value: function(state) {
                            this.has(state) || (this.push(state), this.onChange());
                        }
                    }, {
                        key: "toggle",
                        value: function(state, force) {
                            !0 === force ? this.add(state) : !1 === force || this.has(state) ? this.remove(state) : this.add(state);
                        }
                    }, {
                        key: "merge",
                        value: function(newStates) {
                            if (newStates === this) this.length = 0; else if (isArray(newStates)) {
                                for (var n = newStates.length, _i38 = 0; _i38 < n; _i38++) this[_i38] = newStates[_i38];
                                this.length = n;
                            } else if (isString(newStates)) this.length = 0, this.push(newStates); else for (var state in newStates) if (newStates[state]) this.has(state) || this.push(state); else {
                                var stateIndexToRemove = this.indexOf(state);
                                stateIndexToRemove >= 0 && this.splice(stateIndexToRemove, 1);
                            }
                            return this;
                        }
                    }, {
                        key: "remove",
                        value: function(state) {
                            var stateIndexToRemove = this.indexOf(state);
                            stateIndexToRemove >= 0 && (this.splice(stateIndexToRemove, 1), this.onChange());
                        }
                    } ]);
                }(_wrapNativeSuper(Array)), _signalWrapper = function(cb) {
                    return cb();
                }, keyMapEntries = {
                    ArrowLeft: "Left",
                    ArrowRight: "Right",
                    ArrowUp: "Up",
                    ArrowDown: "Down",
                    Enter: "Enter",
                    l: "Last",
                    " ": "Space",
                    Backspace: "Back",
                    Escape: "Escape"
                }, flattenKeyMap = function(keyMap, targetMap) {
                    for (var newTargetMap = targetMap, _loop7 = function() {
                        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i39], 2), key = _Object$entries2$_i[0], value = _Object$entries2$_i[1];
                        Array.isArray(value) ? value.forEach(function(v) {
                            newTargetMap[v] = key;
                        }) : null === value ? delete newTargetMap[key] : newTargetMap[value] = key;
                    }, _i39 = 0, _Object$entries2 = Object.entries(keyMap); _i39 < _Object$entries2.length; _i39++) _loop7();
                    return newTargetMap;
                }, mappedHandlerNames = new Map, unmappedHandlerNames = new Map, needFocusDebugStyles = !0, 
                addFocusDebug = function(prevFocusPath, newFocusPath) {
                    if (needFocusDebugStyles) {
                        var style = document.createElement("style");
                        style.type = "text/css", style.innerHTML = '\n      [data-focus="3"] {\n        border: 2px solid rgba(255, 33, 33, 0.2);\n        border-radius: 5px;\n        transition: border-color 0.3s ease;\n      }\n\n      [data-focus="2"] {\n        border: 2px solid rgba(255, 33, 33, 0.4);\n        border-radius: 5px;\n        transition: border-color 0.3s ease;\n      }\n\n      [data-focus="1"] {\n        border: 4px solid rgba(255, 33, 33, 0.9);\n        border-radius: 5px;\n        transition: border-color 0.5s ease;\n      }\n    ', 
                        document.head.appendChild(style), needFocusDebugStyles = !1;
                    }
                    prevFocusPath.forEach(function(elm) {
                        elm.data = _objectSpread(_objectSpread({}, elm.data), {}, {
                            focus: void 0
                        });
                    }), newFocusPath.forEach(function(elm, i) {
                        elm.data = _objectSpread(_objectSpread({}, elm.data), {}, {
                            focus: i + 1
                        });
                    });
                }, focusHistory = [], _pendingHistoryKey = {
                    keyPressed: void 0,
                    mappedKey: void 0
                }, getElementLabel = function(elm) {
                    var _elm$id, _ref;
                    if (!elm) return "None";
                    var id = null !== (_elm$id = elm.id) && void 0 !== _elm$id ? _elm$id : elm._id;
                    return null !== (_ref = null != id ? id : elm.componentName) && void 0 !== _ref ? _ref : "Unknown";
                }, setActiveElementCore = function(elm) {
                    var prev = activeElement();
                    elm !== prev && (updateFocusPath(elm, prev), _pendingHistoryKey.keyPressed = void 0, 
                    _pendingHistoryKey.mappedKey = void 0, Config.setActiveElement(elm));
                }, _createSignal20 = _slicedToArray(createSignal([]), 2), focusPath = _createSignal20[0], 
                setFocusPath = _createSignal20[1], _export("v", focusPath), updateFocusPath = function(currentFocusedElm, prevFocusedElm) {
                    for (var current = currentFocusedElm, fp = []; current; ) {
                        var _current$onFocus, _current$onFocusChang;
                        if (!current.states.has(Config.focusStateKey) || current === currentFocusedElm) current.states.add(Config.focusStateKey), 
                        null == (_current$onFocus = current.onFocus) || _current$onFocus.call(current, currentFocusedElm, prevFocusedElm, current), 
                        null == (_current$onFocusChang = current.onFocusChanged) || _current$onFocusChang.call(current, !0, currentFocusedElm, prevFocusedElm, current);
                        fp.push(current), current = current.parent;
                    }
                    for (var prevFp = focusPath(), _i40 = 0; _i40 < prevFp.length; _i40++) {
                        var _elm$onBlur, _elm$onFocusChanged, elm = prevFp[_i40];
                        if (-1 === fp.indexOf(elm)) elm.states.remove(Config.focusStateKey), null == (_elm$onBlur = elm.onBlur) || _elm$onBlur.call(elm, currentFocusedElm, prevFocusedElm, elm), 
                        null == (_elm$onFocusChanged = elm.onFocusChanged) || _elm$onFocusChanged.call(elm, !1, currentFocusedElm, prevFocusedElm, elm);
                    }
                    Config.focusDebug && addFocusDebug(prevFp, fp), _signalWrapper(function() {
                        return setFocusPath(fp);
                    });
                }, lastGlobalKeyPressTime = 0, isElementThrottled = function(elm, sameKey, currentTime) {
                    return void 0 !== elm.throttleInput && sameKey && void 0 !== elm._lastAnyKeyPressTime && currentTime - elm._lastAnyKeyPressTime < elm.throttleInput;
                }, propagateKeyPress = function(e, mappedEvent) {
                    var isUp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], currentTime = performance.now(), key = e.key || e.keyCode, sameKey = lastInputKey === key;
                    if (lastInputKey = key, !isUp && Config.throttleInput) {
                        if (sameKey && currentTime - lastGlobalKeyPressTime < Config.throttleInput) return !0;
                        lastGlobalKeyPressTime = currentTime;
                    }
                    isUp || (_pendingHistoryKey.keyPressed = key, _pendingHistoryKey.mappedKey = mappedEvent);
                    var fp = focusPath();
                    if (0 === fp.length) return !1;
                    var keyBase = mappedEvent || e.key, names = mappedEvent ? mappedHandlerNames : unmappedHandlerNames, handlerNames = names.get(keyBase);
                    void 0 === handlerNames && (handlerNames = {
                        on: mappedEvent ? "on" + keyBase : void 0,
                        onRelease: mappedEvent ? "on" + keyBase + "Release" : void 0,
                        onCapture: "onCapture" + keyBase,
                        onCaptureRelease: "onCapture" + keyBase + "Release"
                    }, names.set(keyBase, handlerNames));
                    for (var finalFocusElm = fp[0], captureEvent = isUp ? handlerNames.onCaptureRelease : handlerNames.onCapture, captureKey = isUp ? "onCaptureKeyRelease" : "onCaptureKey", _i41 = fp.length - 1; _i41 >= 0; _i41--) {
                        var elm = fp[_i41];
                        if (isElementThrottled(elm, sameKey, currentTime)) return !0;
                        var captureHandler = elm[captureEvent] || elm[captureKey];
                        if (isFunction(captureHandler) && !0 === captureHandler.call(elm, e, elm, finalFocusElm, mappedEvent)) return elm._lastAnyKeyPressTime = currentTime, 
                        !0;
                    }
                    finalFocusElm = fp[0];
                    for (var eventHandlerKey = isUp ? handlerNames.onRelease : handlerNames.on, _i42 = 0; _i42 < fp.length; _i42++) {
                        var _elm = fp[_i42];
                        if (isElementThrottled(_elm, sameKey, currentTime)) return !0;
                        var handled = !1;
                        if (eventHandlerKey) {
                            var eventHandler = _elm[eventHandlerKey];
                            isFunction(eventHandler) && (handled = !0 === eventHandler.call(_elm, e, _elm, finalFocusElm));
                        }
                        if (!handled && !isUp) {
                            var fallbackHandler = _elm.onKeyPress;
                            isFunction(fallbackHandler) && (handled = !0 === fallbackHandler.call(_elm, e, mappedEvent, _elm, finalFocusElm));
                        }
                        if (handled) return _elm._lastAnyKeyPressTime = currentTime, !0;
                    }
                    return !1;
                }, keyNameId = function(e) {
                    return e.key && "Unidentified" !== e.key ? e.key : void 0;
                }, keyCodeId = function(e) {
                    return e.keyCode ? e.keyCode : void 0;
                }, suppressedKeys = new Map, findSuppression = function(name, code) {
                    var found;
                    return void 0 !== name && (found = suppressedKeys.get(name)), void 0 === found && void 0 !== code && (found = suppressedKeys.get(code)), 
                    found;
                }, liftSuppression = function(found) {
                    var _found$onRelease;
                    if (found) {
                        for (var ids = found.ids, _i43 = 0; _i43 < ids.length; _i43++) suppressedKeys.delete(ids[_i43]);
                        null == (_found$onRelease = found.onRelease) || _found$onRelease.call(found);
                    }
                }, handleKeyEvents = function(keydown, keyup) {
                    if (keydown) {
                        var name = keyNameId(keydown), code = keyCodeId(keydown);
                        if (keydown.repeat) {
                            if (findSuppression(name, code)) return !0;
                        } else liftSuppression(findSuppression(name, code));
                        return propagateKeyPress(keydown, keyMapEntries[keydown.key] || keyMapEntries[keydown.keyCode]);
                    }
                    return !!keyup && (liftSuppression(findSuppression(keyNameId(keyup), keyCodeId(keyup))), 
                    propagateKeyPress(keyup, keyMapEntries[keyup.key] || keyMapEntries[keyup.keyCode], !0));
                }, dispatchKeyDown = function() {
                    var _event$preventDefault, event = _dispatchEvent;
                    (_dispatchEvent = void 0, handleKeyEvents(event, void 0) && Config.preventDefaultOnHandledKeys) && (null == (_event$preventDefault = event.preventDefault) || _event$preventDefault.call(event));
                }, dispatchKeyUp = function() {
                    var _event$preventDefault2, event = _dispatchEvent;
                    (_dispatchEvent = void 0, handleKeyEvents(void 0, event) && Config.preventDefaultOnHandledKeys) && (null == (_event$preventDefault2 = event.preventDefault) || _event$preventDefault2.call(event));
                }, _export("y", function(userKeyMap, target) {
                    userKeyMap && flattenKeyMap(userKeyMap, keyMapEntries);
                    var eventTarget = void 0 !== target && isFunction(target.addEventListener) ? target : document, owner = getOwner(), ownerContext = function(cb) {
                        runWithOwner(owner, cb);
                    };
                    _signalWrapper = ownerContext, Config.setActiveElement = function(elm) {
                        return ownerContext(function() {
                            return _setActiveElement(elm);
                        });
                    };
                    var keyPressHandler = function(event) {
                        _dispatchEvent = event, runWithOwner(owner, dispatchKeyDown);
                    }, keyUpHandler = function(event) {
                        _dispatchEvent = event, runWithOwner(owner, dispatchKeyUp);
                    };
                    eventTarget.addEventListener("keydown", keyPressHandler), eventTarget.addEventListener("keyup", keyUpHandler), 
                    onCleanup(function() {
                        eventTarget.removeEventListener("keydown", keyPressHandler), eventTarget.removeEventListener("keyup", keyUpHandler), 
                        suppressedKeys.clear();
                    });
                }), calculateFlex = flexLayout_default, postMutationQueued = !1, nextActiveElement = null, 
                deferredFocusElement = null, layoutQueue = new Set, elementDeleteQueue = [], _fontFamilyIdx = -1, 
                EFFECT_SHADER_KEYS = [ "border", "borderTop", "borderRight", "borderBottom", "borderLeft", "shadow" ], 
                hasOwnProperty = Object.prototype.hasOwnProperty, borderSideMap = {
                    borderBottom: "bottom",
                    borderLeft: "left",
                    borderRight: "right",
                    borderTop: "top"
                }, shaderPropNames = Object.create(null), parseAndAssignShaderProps = function(prefix, obj) {
                    var props = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (obj) {
                        var side = borderSideMap[prefix], actualPrefix = side ? "border" : prefix, names = shaderPropNames[prefix];
                        for (var key in void 0 === names && (names = Object.create(null), shaderPropNames[prefix] = names), 
                        props[actualPrefix] = obj, obj) if (hasOwnProperty.call(obj, key)) {
                            var name = names[key];
                            if (void 0 === name) {
                                var transformedKey = "width" === key ? "w" : key;
                                side && "w" === transformedKey && (transformedKey = side), name = actualPrefix + "-" + transformedKey, 
                                names[key] = name;
                            }
                            props[name] = obj[key];
                        }
                    }
                }, LightningRendererNumberProps = [ "alpha", "color", "colorTop", "colorRight", "colorLeft", "colorBottom", "colorTl", "colorTr", "colorBl", "colorBr", "h", "fontSize", "lineHeight", "mount", "mountX", "mountY", "pivot", "pivotX", "pivotY", "rotation", "scale", "scaleX", "scaleY", "w", "worldX", "worldY", "x", "y", "zIndex", "zIndexLocked" ], 
                LightningRendererNonAnimatingProps = [ "absX", "absY", "autosize", "clipping", "contain", "componentName", "componentLocation", "data", "destroyed", "forceLoad", "fontStretch", "fontStyle", "group", "ignoreParentAlpha", "imageType", "letterSpacing", "maxHeight", "maxLines", "maxWidth", "offsetY", "overflowSuffix", "placeholderColor", "preventCleanup", "scrollable", "scrollY", "srcHeight", "srcWidth", "srcX", "srcY", "strictBounds", "text", "textAlign", "textBaseline", "textOverflow", "texture", "textureOptions", "textRendererOverride", "verticalAlign", "wordBreak", "wordWrap" ], 
                _export("_", ElementNode = function() {
                    return _createClass(function(name) {
                        this._type = "text" === name ? NodeType.TextNode : NodeType.Element, this.rendered = !1, 
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
                        }, this.children = [], this._queueDelete = void 0, this._animationQueue = void 0, 
                        this._animationQueueSettings = void 0, this._animationRunning = void 0, this._animationSettings = void 0, 
                        this._autofocus = void 0, this._calcWidth = void 0, this._calcHeight = void 0, this._containsFlexGrow = void 0, 
                        this._hasRenderedChildren = void 0, this._effects = void 0, this._fontFamily = void 0, 
                        this._fontWeight = void 0, this._id = void 0, this._parent = void 0, this._states = void 0, 
                        this._style = void 0, this._theme = void 0, this._lastAnyKeyPressTime = void 0, 
                        this._undoStyles = void 0, this._display = void 0, this._onLayout = void 0, this._requiresLayout = !1;
                    }, [ {
                        key: "effects",
                        get: function() {
                            return this.lng.shader;
                        },
                        set: function(v) {
                            var _this$lng$shader;
                            if (SHADERS_ENABLED) {
                                var target = this.lng.shader || {};
                                (null == (_this$lng$shader = this.lng.shader) ? void 0 : _this$lng$shader.props) && (target = this.lng.shader.props), 
                                v.rounded && (target.radius = v.rounded.radius), v.borderRadius && (target.radius = v.borderRadius);
                                var _step14, _iterator14 = _createForOfIteratorHelper(EFFECT_SHADER_KEYS);
                                try {
                                    for (_iterator14.s(); !(_step14 = _iterator14.n()).done; ) {
                                        var k = _step14.value;
                                        v[k] && parseAndAssignShaderProps(k, v[k], target);
                                    }
                                } catch (err) {
                                    _iterator14.e(err);
                                } finally {
                                    _iterator14.f();
                                }
                                this._writeShaderTarget(target);
                            }
                        }
                    }, {
                        key: "_writeShaderTarget",
                        value: function(target) {
                            this.rendered ? this.lng.shader ? isDomRendererActive() && (this.lng.shader = this.lng.shader) : this.lng.shader = Config.convertToShader(this, target) : this.lng.shader = target;
                        }
                    }, {
                        key: "id",
                        get: function() {
                            return this._id;
                        },
                        set: function(id) {
                            var _Config$rendererOptio;
                            this._id = id, (null == (_Config$rendererOptio = Config.rendererOptions) ? void 0 : _Config$rendererOptio.inspector) && (this.data = _objectSpread(_objectSpread({}, this.data), {}, {
                                testId: id
                            }));
                        }
                    }, {
                        key: "parent",
                        get: function() {
                            return this._parent;
                        },
                        set: function(p) {
                            var _p$lng;
                            (this._parent = p, this.rendered && (null == p ? void 0 : p.rendered)) && (this.lng.parent = null !== (_p$lng = p.lng) && void 0 !== _p$lng ? _p$lng : null);
                        }
                    }, {
                        key: "height",
                        get: function() {
                            return this.maxHeight || this.h;
                        },
                        set: function(h) {
                            this.h = h;
                        }
                    }, {
                        key: "width",
                        get: function() {
                            return this.maxWidth || this.w;
                        },
                        set: function(w) {
                            this.w = w;
                        }
                    }, {
                        key: "fontWeight",
                        get: function() {
                            return this._fontWeight;
                        },
                        set: function(v) {
                            var _ref, _Config$fontSettings;
                            if (this._fontWeight !== v) {
                                this._fontWeight = v;
                                var weight = null !== (_ref = Config.fontWeightAlias && Config.fontWeightAlias[v]) && void 0 !== _ref ? _ref : v;
                                this.lng.fontFamily = "".concat(this.fontFamily || (null == (_Config$fontSettings = Config.fontSettings) ? void 0 : _Config$fontSettings.fontFamily)).concat(weight);
                            }
                        }
                    }, {
                        key: "fontFamily",
                        get: function() {
                            return this._fontFamily;
                        },
                        set: function(v) {
                            this._fontFamily = v, this.lng.fontFamily = v;
                        }
                    }, {
                        key: "insertChild",
                        value: function(node, beforeNode) {
                            if (node.parent && (node.parent.removeChild(node), this.rendered || (this._hasRenderedChildren = !0)), 
                            node.parent = this, beforeNode) {
                                var _children = this.children;
                                removeItem(_children, node);
                                var index = _children.indexOf(beforeNode);
                                if (index > -1) {
                                    for (var _i44 = _children.length; _i44 > index; _i44--) _children[_i44] = _children[_i44 - 1];
                                    return void (_children[index] = node);
                                }
                            }
                            this.children.push(node);
                        }
                    }, {
                        key: "removeChild",
                        value: function(node) {
                            removeItem(this.children, node) > -1 && (isElementNode(node) && node.onRemove && node.onRemove.call(node, node), 
                            this.requiresLayout() && addToLayoutQueue(this));
                        }
                    }, {
                        key: "selectedNode",
                        get: function() {
                            for (var _i45 = this.selected || 0; _i45 < this.children.length; _i45++) {
                                var element = this.children[_i45];
                                if (isElementNode(element)) return this.selected = _i45, element;
                            }
                        }
                    }, {
                        key: "shader",
                        set: function(shaderProps) {
                            var _renderer$;
                            this.lng.shader = isArray(shaderProps) ? (_renderer$ = renderer$1).createShader.apply(_renderer$, _toConsumableArray(shaderProps)) : shaderProps;
                        }
                    }, {
                        key: "_sendToLightningAnimatable",
                        value: function(name, value) {
                            if (this.rendered && this.transition && Config.animationsEnabled && (!0 === this.transition || this.transition[name] || this.transition[getPropertyAlias(name)])) {
                                var animationSettings = !0 === this.transition || !0 === this.transition[name] ? void 0 : this.transition[name] || this.transition[getPropertyAlias(name)];
                                if (!("animateProp" in this.lng)) {
                                    var animationController = this.animate(_defineProperty({}, name, value), animationSettings);
                                    return this._fireAnimationEvents(name, value, animationSettings), animationController.start();
                                }
                                var result = this.lng.animateProp(name, value, animationSettings || this.animationSettings || {});
                                return this._fireAnimationEvents(name, value, animationSettings), result;
                            }
                            this.lng[name] = value;
                        }
                    }, {
                        key: "_fireAnimationEvents",
                        value: function(name, value, animationSettings) {
                            var _this37 = this;
                            if (this.onAnimation) {
                                var settings = animationSettings || this.animationSettings, _this$onAnimation = this.onAnimation, animating = _this$onAnimation.animating, stopped = _this$onAnimation.stopped;
                                if (animating && animating.call(this, name, value), stopped) {
                                    var _settings$duration, _settings$delay, total = (null !== (_settings$duration = null == settings ? void 0 : settings.duration) && void 0 !== _settings$duration ? _settings$duration : 0) + (null !== (_settings$delay = null == settings ? void 0 : settings.delay) && void 0 !== _settings$delay ? _settings$delay : 0);
                                    setTimeout(function() {
                                        return stopped.call(_this37, name, value);
                                    }, total);
                                }
                            }
                        }
                    }, {
                        key: "animate",
                        value: function(props, animationSettings) {
                            return this.rendered ? this.lng.animate(props, animationSettings || this.animationSettings || {}) : {
                                start: function() {}
                            };
                        }
                    }, {
                        key: "chain",
                        value: function(props, animationSettings) {
                            return this._animationRunning && (this._animationQueue = [], this._animationRunning = !1), 
                            animationSettings ? this._animationQueueSettings = animationSettings : this._animationQueueSettings || (this._animationQueueSettings = animationSettings || this.animationSettings), 
                            animationSettings = animationSettings || this._animationQueueSettings, this._animationQueue = this._animationQueue || [], 
                            this._animationQueue.push({
                                props: props,
                                animationSettings: animationSettings
                            }), this;
                        }
                    }, {
                        key: "start",
                        value: (_start = _asyncToGenerator(_regenerator().m(function _callee2() {
                            var animation;
                            return _regenerator().w(function(_context3) {
                                for (;;) switch (_context3.n) {
                                  case 0:
                                    animation = this._animationQueue.shift();

                                  case 1:
                                    if (!animation) {
                                        _context3.n = 3;
                                        break;
                                    }
                                    return this._animationRunning = !0, _context3.n = 2, this.animate(animation.props, animation.animationSettings).start().waitUntilStopped();

                                  case 2:
                                    animation = this._animationQueue.shift(), _context3.n = 1;
                                    break;

                                  case 3:
                                    this._animationRunning = !1, this._animationQueueSettings = void 0;

                                  case 4:
                                    return _context3.a(2);
                                }
                            }, _callee2, this);
                        })), function() {
                            return _start.apply(this, arguments);
                        })
                    }, {
                        key: "emit",
                        value: function(event) {
                            for (var current = this, capitalizedEvent = "on".concat(event.charAt(0).toUpperCase()).concat(event.slice(1)), _len7 = arguments.length, args = new Array(_len7 > 1 ? _len7 - 1 : 0), _key9 = 1; _key9 < _len7; _key9++) args[_key9 - 1] = arguments[_key9];
                            for (;current; ) {
                                var handler = current[capitalizedEvent];
                                if (isFunction(handler) && !0 === handler.call.apply(handler, [ current, this ].concat(args))) return !0;
                                current = current.parent;
                            }
                            return !1;
                        }
                    }, {
                        key: "setFocus",
                        value: function() {
                            if (this.rendered) {
                                if (void 0 !== this.forwardFocus) if (isFunction(this.forwardFocus)) {
                                    if (!1 !== this.forwardFocus.call(this, this)) return;
                                } else {
                                    var focusedIndex = "number" == typeof this.forwardFocus ? this.forwardFocus : null, nodes = this.children;
                                    if (null !== focusedIndex && focusedIndex < nodes.length) {
                                        var child = nodes[focusedIndex];
                                        return void (isElementNode(child) && child.setFocus());
                                    }
                                }
                                nextActiveElement = this, schedulePostMutation();
                            } else this._autofocus = !0;
                        }
                    }, {
                        key: "_layoutOnLoad",
                        value: function() {
                            var _this38 = this;
                            this.lng.on("loaded", function() {
                                schedulePostMutation(), _this38.parent.updateLayout();
                            });
                        }
                    }, {
                        key: "getText",
                        value: function() {
                            var len = this.children.length;
                            if (1 === len) return this.children[0].text;
                            if (0 === len) return "";
                            for (var result = "", _i46 = 0; _i46 < len; _i46++) result += this.children[_i46].text;
                            return result;
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            var _this39 = this;
                            if (this.onDestroy) {
                                var destroyPromise = this.onDestroy(this);
                                destroyPromise instanceof Promise ? destroyPromise.then(function() {
                                    return _this39._destroy();
                                }) : this._destroy();
                            } else this._destroy();
                        }
                    }, {
                        key: "_destroy",
                        value: function() {
                            isINode(this.lng) && this.lng.destroy();
                        }
                    }, {
                        key: "style",
                        get: function() {
                            return this._style || {};
                        },
                        set: function(style) {
                            if ((!Config.lockStyles || !this._style) && style) for (var key in this._style = style, 
                            this._style) void 0 === this[key] && (this[key] = this._style[key]);
                        }
                    }, {
                        key: "theme",
                        get: function() {
                            return this._theme = this._theme || {}, this._theme;
                        },
                        set: function(styles) {
                            if (styles) for (var key in this._theme = styles, styles) this[key] = styles[key];
                        }
                    }, {
                        key: "hasChildren",
                        get: function() {
                            return this.children.length > 0;
                        }
                    }, {
                        key: "src",
                        get: function() {
                            return this.lng.src;
                        },
                        set: function(src) {
                            "string" == typeof src ? (this.lng.src = src, !this.color && this.rendered && (this.color = 4294967295)) : this.color = 0;
                        }
                    }, {
                        key: "getChildById",
                        value: function(id) {
                            return this.children.find(function(c) {
                                return c.id === id;
                            });
                        }
                    }, {
                        key: "searchChildrenById",
                        value: function(id) {
                            for (var _i47 = 0; _i47 < this.children.length; _i47++) {
                                var child = this.children[_i47];
                                if (isElementNode(child)) {
                                    if (child.id === id) return child;
                                    var found = child.searchChildrenById(id);
                                    if (found) return found;
                                }
                            }
                        }
                    }, {
                        key: "states",
                        get: function() {
                            return this._states = this._states || new States(this._stateChanged.bind(this)), 
                            this._states;
                        },
                        set: function(states) {
                            this._states = this._states ? this._states.merge(states) : new States(this._stateChanged.bind(this), states), 
                            this.rendered && this._stateChanged();
                        }
                    }, {
                        key: "animationSettings",
                        get: function() {
                            return this._animationSettings || Config.animationSettings;
                        },
                        set: function(animationSettings) {
                            this._animationSettings = animationSettings;
                        }
                    }, {
                        key: "hidden",
                        get: function() {
                            return 0 === this.alpha;
                        },
                        set: function(val) {
                            this.alpha = val ? 0 : 1;
                        }
                    }, {
                        key: "preserve",
                        get: function() {
                            return 0 === this._queueDelete;
                        },
                        set: function(v) {
                            this._queueDelete = v ? 0 : void 0;
                        }
                    }, {
                        key: "autofocus",
                        get: function() {
                            return this._autofocus;
                        },
                        set: function(val) {
                            this._autofocus = val, val && (deferredFocusElement = this, schedulePostMutation());
                        }
                    }, {
                        key: "display",
                        get: function() {
                            return this._display;
                        },
                        set: function(v) {
                            this._display = v, this._requiresLayout = "flex" === v || void 0 !== this._onLayout;
                        }
                    }, {
                        key: "onLayout",
                        get: function() {
                            return this._onLayout;
                        },
                        set: function(fn) {
                            this._onLayout = fn, this._requiresLayout = "flex" === this._display || void 0 !== fn;
                        }
                    }, {
                        key: "requiresLayout",
                        value: function() {
                            return this._requiresLayout;
                        }
                    }, {
                        key: "updateLayoutOn",
                        get: function() {
                            return null;
                        },
                        set: function(_v) {
                            this.updateLayout();
                        }
                    }, {
                        key: "updateLayout",
                        value: function() {
                            var _this40 = this;
                            if (this.hasChildren) {
                                if ("flex" === this.display && this.flexGrow && 0 === this.width) return;
                                var flexChanged = "flex" === this.display && calculateFlex(this);
                                layoutQueue.delete(this);
                                var onLayoutChanged = isFunction(this.onLayout) && this.onLayout.call(this, this);
                                (flexChanged || onLayoutChanged) && this.parent && addToLayoutQueue(this.parent), 
                                !0 === this._containsFlexGrow && this.children.forEach(function(c) {
                                    "flex" === c.display && isElementNode(c) && (calculateFlex(c), isFunction(c.onLayout) && c.onLayout.call(c, c), 
                                    addToLayoutQueue(_this40));
                                });
                            }
                        }
                    }, {
                        key: "_stateChanged",
                        value: function() {
                            var _this41 = this;
                            if (this.forwardStates) {
                                var _states = this.states.slice();
                                this.children.forEach(function(c) {
                                    c.states = _states;
                                });
                            }
                            var states = this.states;
                            if (void 0 !== this._undoStyles && this._undoStyles.length > 0 || function(obj, keys) {
                                var _step0, _iterator0 = _createForOfIteratorHelper(keys);
                                try {
                                    for (_iterator0.s(); !(_step0 = _iterator0.n()).done; ) if (_step0.value in obj) return !0;
                                } catch (err) {
                                    _iterator0.e(err);
                                } finally {
                                    _iterator0.f();
                                }
                                return !1;
                            }(this, states)) {
                                var stylesToUndo;
                                this._undoStyles && this._undoStyles.length && (stylesToUndo = {}, this._undoStyles.forEach(function(styleKey) {
                                    var fallbackValue = _this41.theme[styleKey];
                                    void 0 === fallbackValue && (fallbackValue = _this41.style[styleKey]), stylesToUndo[styleKey] = fallbackValue;
                                }));
                                var newStyles, numStates = states.length;
                                if (0 === numStates) return Object.assign(this, stylesToUndo), void (this._undoStyles = []);
                                if (1 === numStates) newStyles = this[states[0]], newStyles = stylesToUndo ? _objectSpread(_objectSpread({}, stylesToUndo), newStyles) : newStyles; else {
                                    var sortedStates = states, stateOrder = this.stateOrder || Config.stateOrder;
                                    stateOrder && stateOrder.length > 0 && (sortedStates = states.slice().sort(function(a, b) {
                                        var aIdx = stateOrder.indexOf(a), bIdx = stateOrder.indexOf(b);
                                        return -1 !== aIdx && -1 === bIdx ? 1 : -1 === aIdx && -1 !== bIdx ? -1 : aIdx - bIdx;
                                    })), newStyles = sortedStates.reduce(function(acc, state) {
                                        var styles = _this41[state];
                                        return styles ? _objectSpread(_objectSpread({}, acc), styles) : acc;
                                    }, stylesToUndo || {});
                                }
                                newStyles ? (this._undoStyles = Object.keys(newStyles), void 0 !== newStyles.transition && (this.transition = newStyles.transition), 
                                Object.assign(this, newStyles)) : this._undoStyles = [];
                            }
                        }
                    }, {
                        key: "render",
                        value: function(topNode) {
                            var _this$onCreate, _this$onRender2, _node$lng, node = this, parent = this.parent;
                            if (parent) if (parent.rendered) if (parent.requiresLayout() && layoutQueue.add(parent), 
                            this.rendered) {
                                var _this$onRender;
                                null == (_this$onRender = this.onRender) || _this$onRender.call(this, this);
                            } else {
                                this._states && this._stateChanged();
                                var props = node.lng, parentWidth = parent.w || 0, parentHeight = parent.h || 0;
                                if (props.x = props.x || 0, props.y = props.y || 0, props.parent = parent.lng, (this.right || 0 === this.right) && (props.x = parentWidth - this.right, 
                                props.mountX = 1), (this.bottom || 0 === this.bottom) && (props.y = parentHeight - this.bottom, 
                                props.mountY = 1), this.center && (this.centerX = this.centerY = !0), this.centerX && (props.x += parentWidth / 2, 
                                props.mountX = .5), this.centerY && (props.y += parentHeight / 2, props.mountY = .5), 
                                isElementText(node)) {
                                    var textProps = props;
                                    void 0 === _fontTemplate && function() {
                                        var tpl = [], fs = Config.fontSettings;
                                        if (fs) for (var key in fs) "fontFamily" === key && (_fontFamilyIdx = tpl.length, 
                                        _fontFamilyWithWeight = "".concat(fs.fontFamily).concat(fs.fontWeight || "")), tpl.push([ key, fs[key] ]);
                                        _fontTemplate = tpl;
                                    }();
                                    var tpl = _fontTemplate;
                                    if (tpl.length > 0) for (var familyIdx = _fontFamilyIdx, familyWithWeight = void 0 === textProps.fontWeight ? _fontFamilyWithWeight : void 0, _i48 = 0; _i48 < tpl.length; _i48++) {
                                        var entry = tpl[_i48], key = entry[0];
                                        void 0 === textProps[key] && (textProps[key] = _i48 === familyIdx && void 0 !== familyWithWeight ? familyWithWeight : entry[1]);
                                    }
                                    if (textProps.text = textProps.text || node.getText(), textProps.textAlign && !textProps.contain && console.warn("Text align requires contain: ", node.getText()), 
                                    textProps.contain) {
                                        var _textProps$maxWidth, _textProps$maxHeight, _textProps$maxLines;
                                        if ("both" === textProps.contain) textProps.maxWidth = null !== (_textProps$maxWidth = textProps.maxWidth) && void 0 !== _textProps$maxWidth ? _textProps$maxWidth : textProps.w, 
                                        textProps.maxHeight = null !== (_textProps$maxHeight = textProps.maxHeight) && void 0 !== _textProps$maxHeight ? _textProps$maxHeight : textProps.h; else if ("width" === textProps.contain) {
                                            var _textProps$maxWidth2;
                                            textProps.maxWidth = null !== (_textProps$maxWidth2 = textProps.maxWidth) && void 0 !== _textProps$maxWidth2 ? _textProps$maxWidth2 : textProps.w;
                                        }
                                        if (!textProps.h && !textProps.maxHeight) textProps.maxLines = null !== (_textProps$maxLines = textProps.maxLines) && void 0 !== _textProps$maxLines ? _textProps$maxLines : 99;
                                        textProps.maxWidth || (textProps.maxWidth = parentWidth - textProps.x - (textProps.marginRight || 0)), 
                                        "both" !== textProps.contain || textProps.maxHeight ? 1 === textProps.maxLines && (textProps.maxHeight = textProps.maxHeight || textProps.lineHeight || textProps.fontSize) : textProps.maxHeight = parentHeight - textProps.y - (textProps.marginBottom || 0);
                                    }
                                    SHADERS_ENABLED && props.shader && !("shaderType" in props.shader) && (props.shader = Config.convertToShader(node, props.shader)), 
                                    node.lng = renderer$1.createTextNode(props), parent.requiresLayout() && (textProps.maxWidth && textProps.maxHeight || node._layoutOnLoad());
                                } else {
                                    if (!props.texture) {
                                        if (isNaN(props.w)) {
                                            var flexFitsWidth = !1;
                                            if ("flex" === node.display) {
                                                var flexDirection = node.flexDirection || "row";
                                                (flexFitsWidth = ("row" === flexDirection || "row-reverse" === flexDirection) && "fixed" !== node.flexBoundary) && void 0 !== node.justifyContent && "flexStart" !== node.justifyContent && void 0 === node.flexBoundary && (flexFitsWidth = !1);
                                            }
                                            node.flexGrow || flexFitsWidth ? props.w = 0 : props.w = parentWidth - props.x, 
                                            node._calcWidth = !0;
                                        }
                                        isNaN(props.h) && (props.h = parentHeight - props.y, node._calcHeight = !0), props.color || props.src || (props.color = 0);
                                    }
                                    if (SHADERS_ENABLED && props.shader && !("shaderType" in props.shader) && (props.shader = Config.convertToShader(node, props.shader)), 
                                    node.lng = renderer$1.createNode(props), node._hasRenderedChildren) {
                                        node._hasRenderedChildren = !1;
                                        var _step15, _iterator15 = _createForOfIteratorHelper(node.children);
                                        try {
                                            for (_iterator15.s(); !(_step15 = _iterator15.n()).done; ) {
                                                var child = _step15.value;
                                                isElementNode(child) && isINode(child.lng) && (child.lng.parent = node.lng);
                                            }
                                        } catch (err) {
                                            _iterator15.e(err);
                                        } finally {
                                            _iterator15.f();
                                        }
                                    }
                                }
                                if (node.rendered = !0, node.autosize && parent.requiresLayout() && node._layoutOnLoad(), 
                                null == (_this$onCreate = this.onCreate) || _this$onCreate.call(this, this), null == (_this$onRender2 = this.onRender) || _this$onRender2.call(this, this), 
                                node.onEvent) {
                                    var onEvent = node.onEvent, _loop8 = function() {
                                        if (!hasOwnProperty.call(onEvent, name)) return 1;
                                        var handler = onEvent[name];
                                        "function" == typeof node.lng.on && node.lng.on(name, function(_inode, data) {
                                            return handler.call(node, node, data);
                                        });
                                    };
                                    for (var name in onEvent) _loop8();
                                }
                                null == (_node$lng = node.lng) || _node$lng.div;
                                if (node._type === NodeType.Element) for (var numChildren = node.children.length, _i49 = 0; _i49 < numChildren; _i49++) {
                                    var c = node.children[_i49];
                                    0, isElementNode(c) && c.render();
                                }
                                topNode && schedulePostMutation(), node._autofocus && node.setFocus();
                            } else console.warn("Parent not rendered yet: ", this); else console.warn("Parent not set - no node created for: ", this);
                        }
                    } ]);
                    var _start;
                }());
                var _step16, _iterator16 = _createForOfIteratorHelper(LightningRendererNumberProps);
                try {
                    var _loop9 = function() {
                        var key = _step16.value;
                        Object.defineProperty(ElementNode.prototype, key, {
                            get: function() {
                                return this.lng[key];
                            },
                            set: function(v) {
                                this._sendToLightningAnimatable(key, v);
                            }
                        });
                    };
                    for (_iterator16.s(); !(_step16 = _iterator16.n()).done; ) _loop9();
                } catch (err) {
                    _iterator16.e(err);
                } finally {
                    _iterator16.f();
                }
                var _step17, _iterator17 = _createForOfIteratorHelper(LightningRendererNonAnimatingProps);
                try {
                    var _loop0 = function() {
                        var key = _step17.value;
                        Object.defineProperty(ElementNode.prototype, key, {
                            get: function() {
                                return this.lng[key];
                            },
                            set: function(v) {
                                this.lng[key] = v;
                            }
                        });
                    };
                    for (_iterator17.s(); !(_step17 = _iterator17.n()).done; ) _loop0();
                } catch (err) {
                    _iterator17.e(err);
                } finally {
                    _iterator17.f();
                }
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
                }), memo$1 = function(fn) {
                    return createMemo(function() {
                        return fn();
                    });
                }, solidOpts_default = {
                    createElement: function(name) {
                        return new ElementNode(name);
                    },
                    createTextNode: function(text) {
                        return new TextNode(text);
                    },
                    replaceText: function(node, value) {
                        node.text = value;
                        var parent = node.parent;
                        parent.text = parent.getText();
                    },
                    setProperty: function(node, name, value) {
                        node[name] = value;
                    },
                    insertNode: function(parent, node, anchor) {
                        var prevParent = node.parent;
                        parent.insertChild(node, anchor), node instanceof ElementNode ? (node.parent.rendered && node.render(!0), 
                        void 0 !== prevParent && enqueueDelete(node, 1)) : isElementText(parent) && (parent.text = parent.getText());
                    },
                    isTextNode: function(node) {
                        return isElementText(node);
                    },
                    removeNode: function(parent, node) {
                        parent.removeChild(node), node instanceof ElementNode ? enqueueDelete(node, -1) : isElementText(parent) && (parent.text = parent.getText());
                    },
                    getParentNode: function(node) {
                        return node.parent;
                    },
                    getFirstChild: function(node) {
                        return node.children[0];
                    },
                    getNextSibling: function(node) {
                        var children = node.parent.children || [], index = children.indexOf(node) + 1;
                        if (index < children.length) return children[index];
                    }
                }, solidRenderer = function(options) {
                    var renderer = createRenderer$1(options);
                    return renderer.mergeProps = mergeProps, renderer;
                }(solidOpts_default), _export("f", rootNode = solidOpts_default.createElement("App")), 
                render = function(code) {
                    return solidRenderer.render(code, rootNode);
                }, effect = (_solidRenderer = solidRenderer).effect, memo = _solidRenderer.memo, 
                createComponent = _solidRenderer.createComponent, createElement = _solidRenderer.createElement, 
                createTextNode = _solidRenderer.createTextNode, insertNode = _solidRenderer.insertNode, 
                insert = _solidRenderer.insert, spread = _solidRenderer.spread, setProp = _solidRenderer.setProp, 
                use = _solidRenderer.use, _export("c", effect), _export("d", memo), _export("i", createComponent), 
                _export("a", createElement), _export("s", createTextNode), _export("u", insertNode), 
                _export("l", insert), _export("h", spread), _export("m", setProp), _export("g", use), 
                taskQueue = [], tasksEnabled = !1, createRoot(function() {
                    createRenderEffect(function() {
                        activeElement(), tasksEnabled = !1;
                    });
                }), _export("r", function(props) {
                    var el = createElement("node");
                    return spread(el, props, !1), el;
                }), _export("n", function(props) {
                    var el = createElement("text");
                    return spread(el, props, !1), el;
                });
            }
        };
    });
}();