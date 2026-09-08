!function() {
    function _superPropSet(t, e, o, r, p, f) {
        return function(e, r, t, o, f) {
            if (!set(e, r, t, o || e) && f) throw new TypeError("failed to set property");
            return t;
        }(_getPrototypeOf(f ? t.prototype : t), e, o, r, p);
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
    System.register([], function(_export, _context) {
        var ENABLE_AUTOSIZE, ENABLE_INSPECTOR, EMIT_BOUNDS_EVENTS, premultiplyRGB, nextId, EventEmitter, TextureType, Texture, PROTOCOL_REGEX, Matrix3d, tempMatrix, RenderCoords, getTimingBezier, timingMapping, timingLookup, defaultTiming, parseCubicBezier, getTimingFunction, AutosizeMode, AutosizeUpdateType, applyDimensions, getFilteredChildren, autosizerId, Autosizer, sortByZIndexStable, findChildIndexById, _removeChild, CoreNodeRenderState, NO_CLIPPING_RECT, CoreNodeRenderStateMap$1, UpdateType, CoreNode, AnimationManager, ImageWorkerManager, ColorTexture, PVR_TO_GL_INTERNAL_FORMAT, ASTC_TO_GL_INTERNAL_FORMAT, KTX_IDENTIFIER, loadCompressedTexture, loadASTC, EXT_ASTC, EXT_S3TC, EXT_ETC1, EXT_ETC, EXT_PVRTC, EXT_NONE, requiredExtensionsForFormat, ensureCompressedFormatEnabled, uploadASTC, loadKTX, uploadKTX, loadPVR, BLOCK_4x4x8, BLOCK_4x4x16, BLOCK_5x5x16, BLOCK_6x6x16, BLOCK_8x4x8, BLOCK_8x8x16, BLOCK_10x10x16, BLOCK_12x12x16, blockInfoMap, loadSvg, ImageTexture, NoiseTexture, subTextureId, SubTexture, RenderTexture, TextureErrorCode, defaultMessages, TextureError, TextureUploadQueue, CoreTextureManager, CoreShaderManager, spaceRegex, baselineMode, setBaselineMode, measureLines, wrapText, wrapLine, getWrapStrategy, overflow, breakWord, breakAll, truncateLineEnd, truncateWord, splitWord, ContextSpy, TextureMemoryManager, TextConstraint, CoreTextNode, EMPTY_TEXTURE_OPTIONS, Stage, Platform, WebPlatform, noop, RendererMain, sharedConfig, equalFn, $PROXY, SUPPORTS_PROXY, $TRACK, signalOptions, ERROR, runEffects, STALE, PENDING, UNOWNED, NO_INIT, Owner, Transition, Scheduler, ExternalSourceConfig, Listener, Updates, Effects, ExecCount, setTransPending, SuspenseContext, FALLBACK, hydrationEnabled, propTraps, narrowedError, SuspenseListContext, activeElement, _setActiveElement, DOM_RENDERING, SHADERS_ENABLED, isDomRendererActive, Config, NodeType, TextNode, isFunction, colorToRgba, _document$documentEle, _styleRef, supportsObjectFit, supportsObjectPosition, supportsMixBlendMode, supportsStandardMask, supportsWebkitMask, supportsCssMask, animationTasks, animationFrameRequested, AnimationController, elMap, textNodesToMeasure, containTextNodes, fontLoadingListenerSetup, defaultShader, lastNodeId, CoreNodeRenderStateMap, DOMNode, DOMText, DOMRendererMain, renderer$1, States, _signalWrapper, keyMapEntries, keyHoldMapEntries, flattenKeyMap, needFocusDebugStyles, addFocusDebug, focusHistory, getElementLabel, setActiveElementCore, focusPath, setFocusPath, updateFocusPath, lastGlobalKeyPressTime, lastInputKey, isElementThrottled, runCapturePhase, runBubblePhase, propagateKeyPress, keyHoldTimeouts, handleKeyEvents, calculateFlex, postMutationQueued, nextActiveElement, deferredFocusElement, layoutQueue, elementDeleteQueue, _fontTemplate, _fontFamilyIdx, _fontFamilyWithWeight, EFFECT_SHADER_KEYS, parseAndAssignShaderProps, LightningRendererNumberProps, LightningRendererNonAnimatingProps, ElementNode, memo$1, solidOpts_default, solidRenderer, renderer, rootNode, render, effect, memo, createComponent, createElement, createTextNode, insertNode, insert, spread, setProp, mergeProps, use, taskQueue, tasksEnabled;
        function assertTruthy(condition, message) {}
        function mergeColorProgress(rgba1, rgba2, p) {
            var r1 = Math.trunc(rgba1 >>> 24), g1 = Math.trunc(rgba1 >>> 16 & 255), b1 = Math.trunc(rgba1 >>> 8 & 255), a1 = Math.trunc(255 & rgba1), r2 = Math.trunc(rgba2 >>> 24), g2 = Math.trunc(rgba2 >>> 16 & 255), b2 = Math.trunc(rgba2 >>> 8 & 255), a2 = Math.trunc(255 & rgba2);
            return (Math.round(r2 * p + r1 * (1 - p)) << 24 | Math.round(g2 * p + g1 * (1 - p)) << 16 | Math.round(b2 * p + b1 * (1 - p)) << 8 | Math.round(a2 * p + a1 * (1 - p))) >>> 0;
        }
        function premultiplyColorABGR(rgba, alpha) {
            var a = (255 & rgba) / 255 * alpha, m = premultiplyRGB ? a : 1;
            return (255 * a << 24 | (rgba >>> 8 & 255) * m << 16 | (rgba >>> 16 & 255) * m << 8 | (rgba >>> 24) * m) >>> 0;
        }
        function deepClone(obj) {
            if ("object" !== _typeof(obj)) return obj;
            if (Array.isArray(obj)) return obj.map(function(item) {
                return deepClone(item);
            });
            var copy = {};
            for (var key in obj) copy[key] = deepClone(obj[key]);
            return copy;
        }
        function createBound(x1, y1, x2, y2, out) {
            return out ? (out.x1 = x1, out.y1 = y1, out.x2 = x2, out.y2 = y2, out) : {
                x1: x1,
                y1: y1,
                x2: x2,
                y2: y2
            };
        }
        function boundInsideBound(bound1, bound2) {
            return bound1.x1 <= bound2.x2 && bound1.y1 <= bound2.y2 && bound1.x2 >= bound2.x1 && bound1.y2 >= bound2.y1;
        }
        function createPreloadBounds(strictBound, boundsMargin, out) {
            return createBound(strictBound.x1 - boundsMargin[3], strictBound.y1 - boundsMargin[0], strictBound.x2 + boundsMargin[1], strictBound.y2 + boundsMargin[2], out);
        }
        function isBase64Image(src) {
            return !0 === src.startsWith("data:");
        }
        function dataURIToBlob(dataURI) {
            for (var _dataURI$match, type = (null == (_dataURI$match = (dataURI = dataURI.replace(/^data:/, "")).match(/image\/[^;]+/)) ? void 0 : _dataURI$match[0]) || "", base64 = dataURI.replace(/^[^,]+,/, ""), byteCharacters = atob(base64), bytesLength = byteCharacters.length, slicesCount = Math.ceil(bytesLength / 1024), byteArrays = new Array(slicesCount), sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
                for (var begin = 1024 * sliceIndex, end = Math.min(begin + 1024, bytesLength), bytes = new Array(end - begin), offset = begin, i = 0; offset < end; ++i, 
                ++offset) {
                    var _byteCharacters$offse;
                    bytes[i] = null == (_byteCharacters$offse = byteCharacters[offset]) ? void 0 : _byteCharacters$offse.charCodeAt(0);
                }
                byteArrays[sliceIndex] = new Uint8Array(bytes);
            }
            return new Blob(byteArrays, {
                type: type
            });
        }
        function fetchJson(url) {
            var responseType = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return new Promise(function(resolve, reject) {
                var xhr = new XMLHttpRequest;
                xhr.responseType = responseType, xhr.onreadystatechange = function() {
                    xhr.readyState == XMLHttpRequest.DONE && (0 === xhr.status || 200 === xhr.status ? resolve(xhr.response) : reject(xhr.statusText));
                }, xhr.open("GET", url, !0), xhr.send(null);
            });
        }
        function bytesToMb(bytes) {
            return (bytes / 1024 / 1024).toFixed(2);
        }
        function createAnimation(manager, node, props, settings) {
            var _settings$delay, _settings$duration, _settings$loop, _settings$repeat, _settings$stopMethod, easing = settings.easing || "linear", delay = null !== (_settings$delay = settings.delay) && void 0 !== _settings$delay ? _settings$delay : 0, propValues = null, shaderPropValues = null;
            for (var key in props) if ("shaderProps" !== key) propValues || (propValues = {}), 
            propValues[key] = {
                start: node[key] || 0,
                target: props[key],
                isColor: -1 !== key.indexOf("color")
            }; else if ("shaderProps" === key && null !== node.shader) for (var shaderKey in shaderPropValues || (shaderPropValues = {}), 
            props.shaderProps) {
                var start = node.shader.props[shaderKey];
                Array.isArray(start) && (start = start[0]), shaderPropValues[shaderKey] = {
                    start: start,
                    target: props.shaderProps[shaderKey],
                    isColor: -1 !== shaderKey.indexOf("color")
                };
            }
            var timingFunction = "string" == typeof easing ? getTimingFunction(easing) : easing;
            return {
                manager: manager,
                node: node,
                duration: null !== (_settings$duration = settings.duration) && void 0 !== _settings$duration ? _settings$duration : 0,
                delay: delay,
                delayFor: delay,
                progress: 0,
                loop: null !== (_settings$loop = settings.loop) && void 0 !== _settings$loop && _settings$loop,
                repeat: null !== (_settings$repeat = settings.repeat) && void 0 !== _settings$repeat ? _settings$repeat : 0,
                stopMethod: null !== (_settings$stopMethod = settings.stopMethod) && void 0 !== _settings$stopMethod && _settings$stopMethod,
                timingFunction: timingFunction,
                state: "stopped",
                props: propValues,
                shaderProps: shaderPropValues,
                stoppedResolve: null,
                stoppedPromise: null,
                lastRunTime: settings.adaptiveDuration ? performance.now() : 0,
                start: function() {
                    var _this = this;
                    return "running" !== this.state && "scheduled" !== this.state && (this.stoppedPromise || (this.stoppedPromise = new Promise(function(resolve) {
                        _this.stoppedResolve = resolve;
                    })), this.manager.registerAnimation(this), this.state = "scheduled"), this;
                },
                stop: function() {
                    return this.manager.unregisterAnimation(this), this.stoppedResolve && (this.stoppedResolve(), 
                    this.stoppedResolve = null), this.progress = 0, this.delayFor = this.delay, this.state = "stopped", 
                    this;
                },
                pause: function() {
                    return this.manager.unregisterAnimation(this), this.state = "paused", this;
                },
                restore: function() {
                    if (this.stoppedResolve = null, this.stop(), this.props) for (var entries = Object.entries(this.props), i = 0; i < entries.length; i++) {
                        var _entries$i = _slicedToArray(entries[i], 2), k = _entries$i[0], v = _entries$i[1];
                        this.node[k] = v.start;
                    }
                    if (this.shaderProps && this.node.shader) for (var _entries = Object.entries(this.shaderProps), _i = 0; _i < _entries.length; _i++) {
                        var _entries$_i = _slicedToArray(_entries[_i], 2), _k = _entries$_i[0], _v2 = _entries$_i[1];
                        this.node.shader.props[_k] = _v2.start;
                    }
                    return this;
                },
                waitUntilStopped: function() {
                    return this.stoppedPromise || (this.stoppedPromise = Promise.resolve()), this.stoppedPromise;
                }
            };
        }
        function createImageWorker() {
            self.onmessage = function(event) {
                var src = event.data.src, id = event.data.id, premultiplyAlpha = event.data.premultiplyAlpha, x = event.data.sx, y = event.data.sy, width = event.data.sw, height = event.data.sh;
                (function(src, premultiplyAlpha, x, y, width, height, options) {
                    return new Promise(function(resolve, reject) {
                        var supportsOptionsCreateImageBitmap = options.supportsOptionsCreateImageBitmap, supportsFullCreateImageBitmap = options.supportsFullCreateImageBitmap, premultiplyAlphaHonored = options.premultiplyAlphaHonored, xhr = new XMLHttpRequest;
                        xhr.open("GET", src, !0), xhr.responseType = "blob", xhr.onload = function() {
                            if (200 !== xhr.status && 0 !== xhr.status) return reject(new Error("Image loading failed. HTTP status code: ".concat(xhr.status || "N/A", ". URL: ").concat(src)));
                            var blob = xhr.response, withAlphaChannel = null != premultiplyAlpha ? premultiplyAlpha : -1 !== blob.type.indexOf("image/png"), useGlPremultiply = !0 === withAlphaChannel && !1 === premultiplyAlphaHonored, bitmapMode = !0 === withAlphaChannel && !1 === useGlPremultiply ? "premultiply" : "none";
                            !0 !== supportsFullCreateImageBitmap || null === width || null === height ? !1 === supportsOptionsCreateImageBitmap && !1 === supportsFullCreateImageBitmap ? createImageBitmap(blob).then(function(data) {
                                resolve({
                                    data: data,
                                    premultiplyAlpha: !1
                                });
                            }).catch(function(error) {
                                reject(error);
                            }) : createImageBitmap(blob, {
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
                            }) : createImageBitmap(blob, x || 0, y || 0, width, height, {
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
                        }, xhr.onerror = function() {
                            reject(new Error("Network error occurred while trying to fetch the image."));
                        }, xhr.send();
                    });
                })(src, premultiplyAlpha, x, y, width, height, {
                    supportsOptionsCreateImageBitmap: !1,
                    supportsFullCreateImageBitmap: !1,
                    premultiplyAlphaHonored: !0
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
            return Math.max(width, 2 === bpp ? 16 : 8) * Math.max(height, 8) * bpp / 8;
        }
        function _validateCreateImageBitmap() {
            return (_validateCreateImageBitmap = _asyncToGenerator(_regenerator().m(function _callee20(platform) {
                var _bitmap$close, pngBinaryData, support, blob, bitmap, _bitmapWithOptions$cl, bitmapWithOptions, _bitmapWithFullOption, bitmapWithFullOptions;
                return _regenerator().w(function(_context21) {
                    for (;;) switch (_context21.p = _context21.n) {
                      case 0:
                        return pngBinaryData = new Uint8Array([ 137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, 0, 1, 0, 0, 0, 1, 1, 3, 0, 0, 0, 37, 219, 86, 202, 0, 0, 0, 3, 80, 76, 84, 69, 0, 0, 0, 167, 122, 61, 218, 0, 0, 0, 1, 116, 82, 78, 83, 0, 64, 230, 216, 102, 0, 0, 0, 10, 73, 68, 65, 84, 8, 215, 99, 96, 0, 0, 0, 2, 0, 1, 226, 33, 188, 51, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130 ]), 
                        support = {
                            basic: !1,
                            options: !1,
                            full: !1,
                            premultiplyHonored: null
                        }, blob = new Blob([ pngBinaryData ], {
                            type: "image/png"
                        }), _context21.n = 1, platform.createImageBitmap(blob);

                      case 1:
                        return bitmap = _context21.v, null == (_bitmap$close = bitmap.close) || _bitmap$close.call(bitmap), 
                        support.basic = !0, _context21.p = 2, _context21.n = 3, platform.createImageBitmap(blob, {
                            premultiplyAlpha: "none"
                        });

                      case 3:
                        bitmapWithOptions = _context21.v, null == (_bitmapWithOptions$cl = bitmapWithOptions.close) || _bitmapWithOptions$cl.call(bitmapWithOptions), 
                        support.options = !0, _context21.n = 5;
                        break;

                      case 4:
                        _context21.p = 4, _context21.v;

                      case 5:
                        return _context21.p = 5, _context21.n = 6, platform.createImageBitmap(blob, 0, 0, 1, 1, {
                            premultiplyAlpha: "none"
                        });

                      case 6:
                        bitmapWithFullOptions = _context21.v, null == (_bitmapWithFullOption = bitmapWithFullOptions.close) || _bitmapWithFullOption.call(bitmapWithFullOptions), 
                        support.full = !0, _context21.n = 8;
                        break;

                      case 7:
                        _context21.p = 7, _context21.v;

                      case 8:
                        return _context21.a(2, support);
                    }
                }, _callee20, null, [ [ 5, 7 ], [ 2, 4 ] ]);
            }))).apply(this, arguments);
        }
        function _detectPremultiplyAlphaHonored() {
            return (_detectPremultiplyAlphaHonored = _asyncToGenerator(_regenerator().m(function _callee21(platform) {
                var _bitmap$close3, _gl$getExtension, bitmap, imageData, canvas, gl, _bitmap$close2, tex, fb, result, px;
                return _regenerator().w(function(_context22) {
                    for (;;) switch (_context22.p = _context22.n) {
                      case 0:
                        return _context22.p = 0, imageData = new ImageData(new Uint8ClampedArray([ 255, 0, 0, 128 ]), 1, 1), 
                        _context22.n = 1, platform.createImageBitmap(imageData, {
                            premultiplyAlpha: "premultiply",
                            colorSpaceConversion: "none",
                            imageOrientation: "none"
                        });

                      case 1:
                        bitmap = _context22.v, _context22.n = 3;
                        break;

                      case 2:
                        return _context22.p = 2, _context22.v, _context22.a(2, null);

                      case 3:
                        if ((canvas = platform.createCanvas()).width = 1, canvas.height = 1, null !== (gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))) {
                            _context22.n = 4;
                            break;
                        }
                        return null == (_bitmap$close2 = bitmap.close) || _bitmap$close2.call(bitmap), _context22.a(2, null);

                      case 4:
                        return tex = gl.createTexture(), gl.bindTexture(gl.TEXTURE_2D, tex), gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), 
                        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, !1), gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, bitmap), 
                        fb = gl.createFramebuffer(), gl.bindFramebuffer(gl.FRAMEBUFFER, fb), gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0), 
                        result = null, gl.checkFramebufferStatus(gl.FRAMEBUFFER) === gl.FRAMEBUFFER_COMPLETE && (px = new Uint8Array(4), 
                        gl.readPixels(0, 0, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, px), result = px[0] < 192), 
                        gl.deleteFramebuffer(fb), gl.deleteTexture(tex), null == (_bitmap$close3 = bitmap.close) || _bitmap$close3.call(bitmap), 
                        null == (_gl$getExtension = gl.getExtension("WEBGL_lose_context")) || _gl$getExtension.loseContext(), 
                        _context22.a(2, result);
                    }
                }, _callee21, null, [ [ 0, 2 ] ]);
            }))).apply(this, arguments);
        }
        function isAdvancedShaderProp(obj) {
            return null !== obj && "object" === _typeof(obj) && void 0 !== obj.default;
        }
        function resolveShaderProps(props, propsConfig) {
            for (var key in propsConfig) if (isAdvancedShaderProp(propsConfig[key]) || void 0 !== props[key]) {
                var pConfig = propsConfig[key], hasValue = void 0 !== props[key];
                void 0 === pConfig.resolve ? hasValue && void 0 !== pConfig.set ? pConfig.set(props[key], props) : hasValue || (void 0 !== props[key] || void 0 !== pConfig.get ? props[key] = pConfig.get(props) : props[key] = deepClone(pConfig.default)) : props[key] = pConfig.resolve(props[key], props);
            } else props[key] = propsConfig[key];
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
            var _this2 = this, runningTransition = Transition && Transition.running;
            if (this.sources && (runningTransition ? this.tState : this.state)) if ((runningTransition ? this.tState : this.state) === STALE) updateComputation(this); else {
                var updates = Updates;
                Updates = null, runUpdates(function() {
                    return lookUpstream(_this2);
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
                        for (var _loop = function() {
                            var item = queue[i], tasks = Transition.queue;
                            tasks.has(item) || (tasks.add(item), Scheduler(function() {
                                tasks.delete(item), runUpdates(function() {
                                    Transition.running = !0, runTop(item);
                                }, !1), Transition && (Transition.running = !1);
                            }));
                        }, i = 0; i < queue.length; i++) _loop();
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
        function mergeProps$1() {
            for (var _len2 = arguments.length, sources = new Array(_len2), _key3 = 0; _key3 < _len2; _key3++) sources[_key3] = arguments[_key3];
            for (var proxy = !1, i = 0; i < sources.length; i++) {
                var s = sources[i];
                proxy = proxy || !!s && $PROXY in s, sources[i] = "function" == typeof s ? (proxy = !0, 
                createMemo(s)) : s;
            }
            if (SUPPORTS_PROXY && proxy) return new Proxy({
                get: function(property) {
                    for (var _i2 = sources.length - 1; _i2 >= 0; _i2--) {
                        var v = resolveSource(sources[_i2])[property];
                        if (void 0 !== v) return v;
                    }
                },
                has: function(property) {
                    for (var _i3 = sources.length - 1; _i3 >= 0; _i3--) if (property in resolveSource(sources[_i3])) return !0;
                    return !1;
                },
                keys: function() {
                    for (var keys = [], _i4 = 0; _i4 < sources.length; _i4++) keys.push.apply(keys, _toConsumableArray(Object.keys(resolveSource(sources[_i4]))));
                    return _toConsumableArray(new Set(keys));
                }
            }, propTraps);
            for (var sourcesMap = {}, defined = Object.create(null), _i5 = sources.length - 1; _i5 >= 0; _i5--) {
                var source = sources[_i5];
                if (source) for (var sourceKeys = Object.getOwnPropertyNames(source), _loop2 = function() {
                    var key = sourceKeys[_i6];
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
                }, _i6 = sourceKeys.length - 1; _i6 >= 0; _i6--) _loop2();
            }
            for (var target = {}, definedKeys = Object.keys(defined), _i7 = definedKeys.length - 1; _i7 >= 0; _i7--) {
                var key = definedKeys[_i7], desc = defined[key];
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
        function spliceItem(arr, item, deleteCount) {
            for (var index = arr.indexOf(item), _len5 = arguments.length, insert = new Array(_len5 > 3 ? _len5 - 3 : 0), _key6 = 3; _key6 < _len5; _key6++) insert[_key6 - 3] = arguments[_key6];
            return index > -1 && arr.splice.apply(arr, [ index, deleteCount ].concat(insert)), 
            index;
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
                    var targetW = node.props.w || regionW, targetH = node.props.h || regionH;
                    if (targetW !== regionW || targetH !== regionH) {
                        var naturalW = img.naturalWidth || regionW, naturalH = img.naturalHeight || regionH, scaleX = targetW / regionW, scaleY = targetH / regionH;
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
            var _stageRoot$props$w, _stageRoot$props$h, _node$props$boundsMar, _node$props$w, _node$props$h, stageRoot = node.stage.root;
            if (!stageRoot || stageRoot === node) return null;
            var rootWidth = null !== (_stageRoot$props$w = stageRoot.props.w) && void 0 !== _stageRoot$props$w ? _stageRoot$props$w : 0, rootHeight = null !== (_stageRoot$props$h = stageRoot.props.h) && void 0 !== _stageRoot$props$h ? _stageRoot$props$h : 0;
            if (rootWidth <= 0 || rootHeight <= 0) return 4;
            var margin, _margin$, _margin$2, _margin$3, _margin$4, rootLeft = stageRoot.absX, rootTop = stageRoot.absY, rootRight = rootLeft + rootWidth, rootBottom = rootTop + rootHeight, _normalizeBoundsMargi2 = _slicedToArray(null == (margin = null !== (_node$props$boundsMar = node.props.boundsMargin) && void 0 !== _node$props$boundsMar ? _node$props$boundsMar : node.stage.renderer.boundsMargin) ? [ 0, 0, 0, 0 ] : "number" == typeof margin ? [ margin, margin, margin, margin ] : Array.isArray(margin) && 4 === margin.length ? [ null !== (_margin$ = margin[0]) && void 0 !== _margin$ ? _margin$ : 0, null !== (_margin$2 = margin[1]) && void 0 !== _margin$2 ? _margin$2 : 0, null !== (_margin$3 = margin[2]) && void 0 !== _margin$3 ? _margin$3 : 0, null !== (_margin$4 = margin[3]) && void 0 !== _margin$4 ? _margin$4 : 0 ] : [ 0, 0, 0, 0 ], 4), marginTop = _normalizeBoundsMargi2[0], marginRight = _normalizeBoundsMargi2[1], marginBottom = _normalizeBoundsMargi2[2], marginLeft = _normalizeBoundsMargi2[3], width = null !== (_node$props$w = node.props.w) && void 0 !== _node$props$w ? _node$props$w : 0, height = null !== (_node$props$h = node.props.h) && void 0 !== _node$props$h ? _node$props$h : 0, left = node.absX, top = node.absY, right = left + width, bottom = top + height;
            return right >= rootLeft - marginLeft && left <= rootRight + marginRight && bottom >= rootTop - marginTop && top <= rootBottom + marginBottom ? right >= rootLeft && left <= rootRight && bottom >= rootTop && top <= rootBottom ? 8 : 4 : 2;
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
                } else props.src && (rawImgSrc = props.src);
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
                    null === srcPos || hasDivBgTint || (bgLayerStyle += "overflow: hidden;"), bgStyle && (bgLayerStyle += bgStyle), 
                    maskStyle && (bgLayerStyle += maskStyle), hasDivBgTint && null != srcPos && node.imageLoading && (bgLayerStyle += "opacity: 0;"), 
                    node.divBg.setAttribute("style", bgLayerStyle + radiusStyle), rawImgSrc ? (node.imgEl || (node.imgEl = document.createElement("img"), 
                    node.imgEl.alt = "", node.imgEl.crossOrigin = "anonymous", node.imgEl.setAttribute("aria-hidden", "true"), 
                    node.imgEl.setAttribute("loading", "lazy"), node.imgEl.removeAttribute("src"), node.imgEl.addEventListener("load", function() {
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
                node.imgEl.crossOrigin = "anonymous", node.imgEl.setAttribute("aria-hidden", "true"), 
                node.imgEl.setAttribute("loading", "lazy"), node.imgEl.removeAttribute("src"), node.imgEl.addEventListener("load", function() {
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
            var _props$color, _props$x, _props$y, _props$w, _props$h, _props$alpha, _props$ignoreParentAl, _props$autosize, _props$boundsMargin, _props$clipping, _props$colorTop, _props$colorBottom, _props$colorLeft, _props$colorRight, _ref, _ref2, _props$colorBl, _ref3, _ref4, _props$colorBr, _ref5, _ref6, _props$colorTl, _ref7, _ref8, _props$colorTr, _props$zIndex, _props$parent, _props$texture, _props$textureOptions2, _props$shader2, _props$src, _props$scale, _ref9, _props$scaleX, _ref10, _props$scaleY, _props$mount, _ref11, _props$mountX, _ref12, _props$mountY, _props$pivot, _ref13, _props$pivotX, _ref14, _props$pivotY, _props$rotation, _props$rtt, _props$placeholderCol, color = null !== (_props$color = props.color) && void 0 !== _props$color ? _props$color : 0;
            return {
                x: null !== (_props$x = props.x) && void 0 !== _props$x ? _props$x : 0,
                y: null !== (_props$y = props.y) && void 0 !== _props$y ? _props$y : 0,
                w: null !== (_props$w = props.w) && void 0 !== _props$w ? _props$w : 0,
                h: null !== (_props$h = props.h) && void 0 !== _props$h ? _props$h : 0,
                alpha: null !== (_props$alpha = props.alpha) && void 0 !== _props$alpha ? _props$alpha : 1,
                ignoreParentAlpha: null !== (_props$ignoreParentAl = props.ignoreParentAlpha) && void 0 !== _props$ignoreParentAl && _props$ignoreParentAl,
                autosize: null !== (_props$autosize = props.autosize) && void 0 !== _props$autosize && _props$autosize,
                boundsMargin: null !== (_props$boundsMargin = props.boundsMargin) && void 0 !== _props$boundsMargin ? _props$boundsMargin : null,
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
                rtt: null !== (_props$rtt = props.rtt) && void 0 !== _props$rtt && _props$rtt,
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
            var _fontSet$add;
            if ("undefined" != typeof document && "fonts" in document && "undefined" != typeof FontFace && font.fontUrl) {
                var fontFace = new FontFace(font.fontFamily, "url(".concat(font.fontUrl, ")")), fontSet = document.fonts;
                null == (_fontSet$add = fontSet.add) || _fontSet$add.call(fontSet, fontFace), fontFace.load().then(scheduleContainTextNodesMeasurement).catch(function() {});
            }
        }
        function _loadFonts() {
            return (_loadFonts = _asyncToGenerator(_regenerator().m(function _callee22(fonts) {
                var enableDomRenderer, hasCanvas;
                return _regenerator().w(function(_context23) {
                    for (;;) switch (_context23.n) {
                      case 0:
                        return enableDomRenderer = DOM_RENDERING && Config.domRendererEnabled, hasCanvas = !enableDomRenderer && "textRenderers" in renderer$1.stage && !!renderer$1.stage.textRenderers.canvas, 
                        _context23.n = 1, Promise.all(fonts.map(function(font) {
                            if ("webgl" === renderer$1.stage.renderer.mode && "type" in font && ("msdf" === font.type || "ssdf" === font.type)) return renderer$1.stage.loadFont("sdf", font);
                            if ("fontUrl" in font) if (enableDomRenderer) loadFontToDom(font); else if (hasCanvas) return renderer$1.stage.loadFont("canvas", font);
                        }));

                      case 1:
                        return _context23.a(2);
                    }
                }, _callee22);
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
                var _c2 = children[processableChildrenIndices[idx]], marginArray = _c2.margin, flexBasis = _c2.flexBasis, isBasisAuto = void 0 === flexBasis || "auto" === flexBasis, computedBasis = isBasisAuto ? _c2[dimension] || 0 : flexBasis, baseMainSize = isBasisAuto ? computedBasis : Math.max(computedBasis, _c2[minDimension] || 0), marginStart = isRow ? _c2.marginLeft || getArrayValue(marginArray, 3) : _c2.marginTop || getArrayValue(marginArray, 0), marginEnd = isRow ? _c2.marginRight || getArrayValue(marginArray, 1) : _c2.marginBottom || getArrayValue(marginArray, 2), marginCrossStart = isRow ? _c2.marginTop || getArrayValue(marginArray, 0) : _c2.marginLeft || getArrayValue(marginArray, 3), marginCrossEnd = isRow ? _c2.marginBottom || getArrayValue(marginArray, 2) : _c2.marginRight || getArrayValue(marginArray, 1);
                childMainSizes[idx] = baseMainSize, childMarginStarts[idx] = marginStart, childMarginEnds[idx] = marginEnd, 
                childTotalMainSizes[idx] = baseMainSize + marginStart + marginEnd, childCrossSizes[idx] = _c2[crossDimension] || 0, 
                childMarginCrossStarts[idx] = marginCrossStart, childMarginCrossEnds[idx] = marginCrossEnd, 
                sumOfFlexBaseSizesWithMargins += childTotalMainSizes[idx];
            }
            if ((totalFlexGrow > 0 || totalFlexShrink > 0) && numProcessedChildren > 1) {
                node.flexBoundary = node.flexBoundary || "fixed";
                var availableSpace = containerSize - sumOfFlexBaseSizesWithMargins - (numProcessedChildren > 0 ? gap * (numProcessedChildren - 1) : 0);
                if (availableSpace > 0 && totalFlexGrow > 0) {
                    for (var _idx2 = 0; _idx2 < numProcessedChildren; _idx2++) {
                        var _c3 = children[processableChildrenIndices[_idx2]], flexGrowValue = _c3.flexGrow || 0;
                        if (flexGrowValue > 0) {
                            var shareOfSpace = flexGrowValue / totalFlexGrow * availableSpace, newMainSize = childMainSizes[_idx2] + shareOfSpace;
                            _c3[dimension] = newMainSize, childMainSizes[_idx2] = newMainSize, childTotalMainSizes[_idx2] = newMainSize + childMarginStarts[_idx2] + childMarginEnds[_idx2];
                        }
                    }
                    node._containsFlexGrow = !node._containsFlexGrow || null;
                } else if (availableSpace < 0 && totalFlexShrink > 0) {
                    for (var totalScaledShrinkFactor = 0, _idx3 = 0; _idx3 < numProcessedChildren; _idx3++) {
                        totalScaledShrinkFactor += (children[processableChildrenIndices[_idx3]].flexShrink || 0) * childMainSizes[_idx3];
                    }
                    if (totalScaledShrinkFactor > 0) for (var _idx4 = 0; _idx4 < numProcessedChildren; _idx4++) {
                        var _c4 = children[processableChildrenIndices[_idx4]], _flexShrinkValue = _c4.flexShrink || 0;
                        if (_flexShrinkValue > 0) {
                            var sizeReduction = _flexShrinkValue * childMainSizes[_idx4] / totalScaledShrinkFactor * Math.abs(availableSpace), _newMainSize = childMainSizes[_idx4] - sizeReduction, minBound = _c4[minDimension] || 0;
                            _newMainSize < minBound && (_newMainSize = minBound), _c4[dimension] = _newMainSize, 
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
                        var _c5 = children[processableChildrenIndices[_idx7]];
                        currentPos + childTotalMainSizes[_idx7] > containerSize && currentPos > paddingStart && (currentPos = paddingStart, 
                        crossCurrentPos += isWrapReverse ? -(childCrossSizeVar + crossGap) : childCrossSizeVar + crossGap), 
                        _c5[prop] = currentPos + childMarginStarts[_idx7], currentPos += childTotalMainSizes[_idx7] + gap, 
                        doCrossAlign(_c5, _idx7, crossCurrentPos);
                    }
                    var finalCrossSize = isWrapReverse ? containerCrossSize - crossCurrentPos + paddingCrossStart : crossCurrentPos + childCrossSizeVar + paddingCrossEnd;
                    node[crossDimension] !== finalCrossSize && (node["preFlex".concat(crossDimension)] = node[crossDimension], 
                    node[crossDimension] = finalCrossSize, containerUpdated = !0);
                } else for (var _idx8 = 0; _idx8 < numProcessedChildren; _idx8++) {
                    var _c6 = children[processableChildrenIndices[_idx8]];
                    _c6[prop] = currentPos + childMarginStarts[_idx8], currentPos += childTotalMainSizes[_idx8] + gap, 
                    doCrossAlign(_c6, _idx8, paddingCrossStart);
                }
                if ("fixed" !== node.flexBoundary && "wrap" !== node.flexWrap) {
                    var calculatedSize = currentPos - gap + paddingEnd, minSize = node[minDimension] || 0;
                    if (calculatedSize < minSize && (calculatedSize = minSize), calculatedSize !== (node[dimension] || 0)) return node["preFlex".concat(dimension)] = containerSize, 
                    node[dimension] = calculatedSize, !0;
                }
            } else if ("flexEnd" === justify) {
                currentPos = containerSize - paddingEnd;
                for (var _idx9 = numProcessedChildren - 1; _idx9 >= 0; _idx9--) {
                    var _c7 = children[processableChildrenIndices[_idx9]];
                    _c7[prop] = currentPos - childMainSizes[_idx9] - childMarginEnds[_idx9], currentPos -= childTotalMainSizes[_idx9] + gap, 
                    doCrossAlign(_c7, _idx9, paddingCrossStart);
                }
            } else if ("center" === justify) {
                currentPos = (containerSize - (totalItemSize + gap * (numProcessedChildren - 1))) / 2 + paddingStart;
                for (var _idx0 = 0; _idx0 < numProcessedChildren; _idx0++) {
                    var _c8 = children[processableChildrenIndices[_idx0]];
                    _c8[prop] = currentPos + childMarginStarts[_idx0], currentPos += childTotalMainSizes[_idx0] + gap, 
                    doCrossAlign(_c8, _idx0, paddingCrossStart);
                }
            } else if ("spaceBetween" === justify) {
                var spaceBetween = numProcessedChildren > 1 ? (containerSize - totalItemSize - nodePaddingTotal) / (numProcessedChildren - 1) : 0;
                currentPos = paddingStart;
                for (var _idx1 = 0; _idx1 < numProcessedChildren; _idx1++) {
                    var _c9 = children[processableChildrenIndices[_idx1]];
                    _c9[prop] = currentPos + childMarginStarts[_idx1], currentPos += childTotalMainSizes[_idx1] + spaceBetween, 
                    doCrossAlign(_c9, _idx1, paddingCrossStart);
                }
            } else if ("spaceAround" === justify) {
                var spaceAround = numProcessedChildren > 0 ? (containerSize - totalItemSize - nodePaddingTotal) / numProcessedChildren : 0;
                currentPos = paddingStart + spaceAround / 2;
                for (var _idx10 = 0; _idx10 < numProcessedChildren; _idx10++) {
                    var _c0 = children[processableChildrenIndices[_idx10]];
                    _c0[prop] = currentPos + childMarginStarts[_idx10], currentPos += childTotalMainSizes[_idx10] + spaceAround, 
                    doCrossAlign(_c0, _idx10, paddingCrossStart);
                }
            } else if ("spaceEvenly" === justify) {
                var spaceEvenly = (containerSize - totalItemSize - nodePaddingTotal) / (numProcessedChildren + 1);
                currentPos = spaceEvenly + paddingStart;
                for (var _idx11 = 0; _idx11 < numProcessedChildren; _idx11++) {
                    var _c1 = children[processableChildrenIndices[_idx11]];
                    _c1[prop] = currentPos + childMarginStarts[_idx11], currentPos += childTotalMainSizes[_idx11] + spaceEvenly, 
                    doCrossAlign(_c1, _idx11, paddingCrossStart);
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
                            for (var _i8 = aStart, sequence = 1, t = void 0; ++_i8 < aEnd && _i8 < bEnd && null != (t = map.get(a[_i8])) && t === index + sequence; ) sequence++;
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
                mergeProps: mergeProps$1,
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
            $: onCleanup,
            At: assertTruthy,
            B: createComputed,
            D: function(item) {
                return Number.isInteger(item);
            },
            F: function(props) {
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
            G: function(pSource, pFetcher, pOptions) {
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
            H: createEffect,
            I: function(props) {
                var chs = children(function() {
                    return props.children;
                }), switchFunc = createMemo(function() {
                    for (var ch = chs(), mps = Array.isArray(ch) ? ch : [ ch ], func = function() {}, _loop3 = function() {
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
                    }, i = 0; i < mps.length; i++) _loop3();
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
            J: createSignal,
            K: createRoot,
            L: function(fn) {
                return runUpdates(fn, !1);
            },
            M: function(props) {
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
            Mt: function(rgba, alpha) {
                return (rgba >>> 24 << 24 | (rgba >>> 16 & 255) << 16 | (rgba >>> 8 & 255) << 8 | Math.trunc((255 & rgba) * alpha)) >>> 0;
            },
            N: function(props) {
                return props;
            },
            P: function(props) {
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
            Q: function(deps, fn, options) {
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
            R: children,
            T: isFocused,
            Tt: function(a, b) {
                if (a === b) return !0;
                if (null === a || null === b) return !1;
                var aValid = a.valid, bValid = b.valid;
                return !1 === aValid && !1 === bValid || aValid === bValid && (a.x === b.x && a.y === b.y && a.w === b.w && a.h === b.h);
            },
            U: createMemo,
            V: createContext,
            W: createRenderEffect,
            X: getOwner,
            Y: function() {
                return Listener;
            },
            Z: mergeProps$1,
            _t: function(err) {
                return err instanceof TextureError || "object" === _typeof(err) && null !== err && "TextureError" === err.name && "string" == typeof err.code;
            },
            at: untrack,
            et: function(fn) {
                createEffect(function() {
                    return untrack(fn);
                });
            },
            ft: isAdvancedShaderProp,
            it: startTransition,
            j: function(props) {
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
            jt: function(canvas) {
                var forceWebGL2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], contextSpy = arguments.length > 2 ? arguments[2] : void 0, config = {
                    alpha: !0,
                    antialias: !1,
                    depth: !1,
                    stencil: !0,
                    desynchronized: !1,
                    powerPreference: "high-performance",
                    premultipliedAlpha: !0,
                    preserveDrawingBuffer: !1
                }, gl = canvas.getContext(forceWebGL2 ? "webgl2" : "webgl", config) || canvas.getContext("experimental-webgl", config);
                if (!gl) throw new Error("Unable to create WebGL context");
                if (contextSpy) {
                    var handler = {
                        get: function(target, prop) {
                            var value = target[prop];
                            if ("function" != typeof value) return value;
                            contextSpy.increment(String(prop));
                            var fn = value;
                            return "getExtension" === prop ? function() {
                                for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) args[_key2] = arguments[_key2];
                                var ext = fn.apply(target, args);
                                return null !== ext && "object" === _typeof(ext) ? new Proxy(ext, handler) : ext;
                            } : fn.bind(target);
                        }
                    };
                    return new Proxy(gl, handler);
                }
                return gl;
            },
            m: function(callback) {
                "high" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "low") ? taskQueue.unshift(callback) : taskQueue.push(callback), 
                processTasks();
            },
            nt: runWithOwner,
            o: function(rendererOptions, node) {
                return renderer = function(options) {
                    var rootId = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "app";
                    return _export("S", renderer$1 = DOM_RENDERING && Config.domRendererEnabled ? new DOMRendererMain(options, rootId) : new RendererMain(options, rootId)), 
                    renderer$1;
                }(rendererOptions || Config.rendererOptions, node || "app"), rootNode.lng = renderer.root, 
                rootNode.rendered = !0, renderer.on("idle", function() {
                    tasksEnabled = !0, processTasks();
                }), {
                    renderer: renderer,
                    rootNode: rootNode,
                    render: render
                };
            },
            ot: useContext,
            pt: resolveShaderProps,
            q: function(source) {
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
            t: function(props) {
                var _splitProps = function(props) {
                    for (var _len3 = arguments.length, keys = new Array(_len3 > 1 ? _len3 - 1 : 0), _key4 = 1; _key4 < _len3; _key4++) keys[_key4 - 1] = arguments[_key4];
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
            tt: function() {},
            w: isElementNode,
            wt: function(radius, width, height) {
                var result = [ radius[0], radius[1], radius[2], radius[3] ], factor = Math.min(Math.min(Math.min(width / Math.max(width, radius[0] + radius[1]), width / Math.max(width, radius[2] + radius[3])), Math.min(height / Math.max(height, radius[0] + radius[3]), height / Math.max(height, radius[1] + radius[2]))), 1);
                return result[0] *= factor, result[1] *= factor, result[2] *= factor, result[3] *= factor, 
                result;
            },
            x: function(_x4) {
                return _loadFonts.apply(this, arguments);
            },
            z: createComponent$1,
            Ot: void 0,
            St: void 0,
            Ct: void 0,
            gt: void 0,
            S: void 0
        }), {
            setters: [],
            execute: function() {
                var _createSignal16, _createSignal18, _createSignal20, _solidRenderer;
                ENABLE_AUTOSIZE = "undefined" != typeof __enableAutosize__ && __enableAutosize__, 
                ENABLE_INSPECTOR = "undefined" != typeof __enableInspector__ && __enableInspector__, 
                _export("kt", "undefined" == typeof __dirtyQuadBuffer__ || __dirtyQuadBuffer__), 
                EMIT_BOUNDS_EVENTS = "undefined" != typeof __emitBoundsEvents__ && __emitBoundsEvents__, 
                premultiplyRGB = !0, nextId = 1, EventEmitter = function() {
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
                                    index >= 0 && listeners.splice(index, 1);
                                } else map[event] = void 0;
                            }
                        }
                    }, {
                        key: "once",
                        value: function(event, listener) {
                            var _this3 = this, _onceListener = function(target, data) {
                                _this3.off(event, _onceListener), listener(target, data);
                            };
                            this.on(event, _onceListener);
                        }
                    }, {
                        key: "emit",
                        value: function(event, data) {
                            var _this4 = this, map = this.eventListeners;
                            if (null !== map) {
                                var listeners = map[event];
                                void 0 !== listeners && _toConsumableArray(listeners).forEach(function(listener) {
                                    listener(_this4, data);
                                });
                            }
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
                }(), function(TextureType) {
                    TextureType[TextureType.generic = 0] = "generic", TextureType[TextureType.color = 1] = "color", 
                    TextureType[TextureType.image = 2] = "image", TextureType[TextureType.noise = 3] = "noise", 
                    TextureType[TextureType.renderToTexture = 4] = "renderToTexture", TextureType[TextureType.subTexture = 5] = "subTexture";
                }(TextureType || _export("Ot", TextureType = {})), _export("Dt", Texture = function(_EventEmitter) {
                    function Texture(txManager) {
                        var _this5;
                        return (_this5 = _callSuper(this, Texture)).txManager = void 0, _this5._dimensions = null, 
                        _this5._error = null, _this5.state = "initial", _this5.renderableOwners = new Set, 
                        _this5.renderable = !1, _this5.type = TextureType.generic, _this5.preventCleanup = !1, 
                        _this5.ctxTexture = void 0, _this5.textureData = null, _this5.cacheKey = null, _this5.memUsed = 0, 
                        _this5.retryCount = 0, _this5.maxRetryCount = void 0, _this5.createdAt = Date.now(), 
                        _this5.gracePeriodExpired = !1, _this5.freeTextureDataTask = function() {
                            _this5.textureData = null;
                        }, _this5.releaseTask = function() {
                            _this5.release();
                        }, _this5.txManager = txManager, _this5.maxRetryCount = _this5.txManager.maxRetryCount, 
                        _this5;
                    }
                    return _inherits(Texture, _EventEmitter), _createClass(Texture, [ {
                        key: "dimensions",
                        get: function() {
                            return this._dimensions;
                        }
                    }, {
                        key: "error",
                        get: function() {
                            return this._error;
                        }
                    }, {
                        key: "isWithinStartupGracePeriod",
                        value: function() {
                            return !0 !== this.gracePeriodExpired && (!(Date.now() - this.createdAt >= Texture.STARTUP_GRACE_PERIOD) || (this.gracePeriodExpired = !0, 
                            !1));
                        }
                    }, {
                        key: "canBeCleanedUp",
                        value: function() {
                            return !this.preventCleanup && (!this.isWithinStartupGracePeriod() && ("loading" !== this.state && (!0 !== this.renderable && !(this.renderableOwners.size > 0))));
                        }
                    }, {
                        key: "setRenderableOwner",
                        value: function(owner, renderable) {
                            var owners = this.renderableOwners;
                            if (!0 === renderable) {
                                if (!0 === owners.has(owner)) return;
                                var _this$onChangeIsRende;
                                if (owners.add(owner), 1 === owners.size) this.renderable = !0, null == (_this$onChangeIsRende = this.onChangeIsRenderable) || _this$onChangeIsRende.call(this, !0), 
                                this.load();
                            } else {
                                if (!1 === owners.delete(owner)) return;
                                var _this$onChangeIsRende2;
                                if (0 === owners.size) this.renderable = !1, null == (_this$onChangeIsRende2 = this.onChangeIsRenderable) || _this$onChangeIsRende2.call(this, !1);
                            }
                        }
                    }, {
                        key: "load",
                        value: function() {
                            this.retryCount > this.maxRetryCount || this.txManager.loadTexture(this);
                        }
                    }, {
                        key: "loadCtxTexture",
                        value: function() {
                            return void 0 === this.ctxTexture && (this.ctxTexture = this.txManager.renderer.createCtxTexture(this)), 
                            this.ctxTexture;
                        }
                    }, {
                        key: "free",
                        value: function() {
                            var _this$ctxTexture;
                            null == (_this$ctxTexture = this.ctxTexture) || _this$ctxTexture.free(), this.ctxTexture = void 0;
                        }
                    }, {
                        key: "release",
                        value: function() {
                            var _this$ctxTexture2;
                            null == (_this$ctxTexture2 = this.ctxTexture) || _this$ctxTexture2.release(), this.ctxTexture = void 0, 
                            this.freeTextureData();
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            "loaded" === this.state && this.free(), this.freeTextureData(), this.removeAllListeners();
                        }
                    }, {
                        key: "freeTextureData",
                        value: function() {
                            queueMicrotask(this.freeTextureDataTask);
                        }
                    }, {
                        key: "setState",
                        value: function(state, errorOrDimensions) {
                            if (this.state !== state) {
                                var payload = null;
                                "loaded" === state ? (void 0 !== errorOrDimensions && "w" in errorOrDimensions == !0 && "h" in errorOrDimensions == !0 && void 0 !== errorOrDimensions.w && void 0 !== errorOrDimensions.h && (this._dimensions = errorOrDimensions), 
                                payload = this._dimensions) : "failed" === state ? (this._error = errorOrDimensions, 
                                payload = this._error, this.retryCount += 1, queueMicrotask(this.releaseTask)) : "loading" === state ? (this._error = null, 
                                this._dimensions = null) : this._error = null, this.state = state, this.emit(state, payload);
                            }
                        }
                    }, {
                        key: "getTextureData",
                        value: (_getTextureData = _asyncToGenerator(_regenerator().m(function _callee() {
                            return _regenerator().w(function(_context2) {
                                for (;;) switch (_context2.n) {
                                  case 0:
                                    if (null !== this.textureData) {
                                        _context2.n = 2;
                                        break;
                                    }
                                    return _context2.n = 1, this.getTextureSource();

                                  case 1:
                                    this.textureData = _context2.v;

                                  case 2:
                                    return _context2.a(2, this.textureData);
                                }
                            }, _callee, this);
                        })), function() {
                            return _getTextureData.apply(this, arguments);
                        })
                    } ], [ {
                        key: "makeCacheKey",
                        value: function(props) {
                            return !1;
                        }
                    }, {
                        key: "resolveDefaults",
                        value: function(props) {
                            return {};
                        }
                    } ]);
                    var _getTextureData;
                }(EventEmitter)), Texture.STARTUP_GRACE_PERIOD = 2e3, PROTOCOL_REGEX = /^(data|ftps?|https?):/, 
                _export("Et", function(rgba) {
                    return [ (rgba >>> 24) / 255, (rgba >>> 16 & 255) / 255, (rgba >>> 8 & 255) / 255, (255 & rgba) / 255 ];
                }), tempMatrix = new (Matrix3d = function() {
                    function Matrix3d() {
                        this.ta = void 0, this.tb = void 0, this.tx = void 0, this.tc = void 0, this.td = void 0, 
                        this.ty = void 0, this._floatArr = null, this.mutation = void 0, this.ta = 0, this.tb = 0, 
                        this.tx = 0, this.tc = 0, this.td = 0, this.ty = 0, this.mutation = !0;
                    }
                    return _createClass(Matrix3d, [ {
                        key: "translate",
                        value: function(x, y) {
                            return this.tx = this.ta * x + this.tb * y + this.tx, this.ty = this.tc * x + this.td * y + this.ty, 
                            this.mutation = !0, this;
                        }
                    }, {
                        key: "setTranslate",
                        value: function(x, y) {
                            this.tx = x, this.ty = y, this.mutation = !0;
                        }
                    }, {
                        key: "scale",
                        value: function(sx, sy) {
                            return this.ta = this.ta * sx, this.tb = this.tb * sy, this.tc = this.tc * sx, this.td = this.td * sy, 
                            this.mutation = !0, this;
                        }
                    }, {
                        key: "rotate",
                        value: function(angle) {
                            if (0 === angle) return this;
                            var cos = Math.cos(angle), sin = Math.sin(angle), e0 = this.ta * cos + this.tb * sin, e1 = this.tb * cos - this.ta * sin, e3 = this.tc * cos + this.td * sin, e4 = this.td * cos - this.tc * sin;
                            return this.ta = e0, this.tb = e1, this.tc = e3, this.td = e4, this.mutation = !0, 
                            this;
                        }
                    }, {
                        key: "multiply",
                        value: function(other) {
                            return Matrix3d.multiply(this, other, this);
                        }
                    }, {
                        key: "getFloatArr",
                        value: function() {
                            return this._floatArr || (this._floatArr = new Float32Array(9)), this.mutation && (this._floatArr[0] = this.ta, 
                            this._floatArr[1] = this.tc, this._floatArr[2] = 0, this._floatArr[3] = this.tb, 
                            this._floatArr[4] = this.td, this._floatArr[5] = 0, this._floatArr[6] = this.tx, 
                            this._floatArr[7] = this.ty, this._floatArr[8] = 1, this.mutation = !1), this._floatArr;
                        }
                    }, {
                        key: "translateOrMultiply",
                        value: function(other) {
                            return 1 === other.ta && 1 === other.td && 0 === other.tb && 0 === other.tc ? this.translate(other.tx, other.ty) : this.multiply(other);
                        }
                    } ], [ {
                        key: "temp",
                        get: function() {
                            return tempMatrix;
                        }
                    }, {
                        key: "multiply",
                        value: function(a, b, out) {
                            var e0 = a.ta * b.ta + a.tb * b.tc, e1 = a.ta * b.tb + a.tb * b.td, e2 = a.ta * b.tx + a.tb * b.ty + a.tx, e3 = a.tc * b.ta + a.td * b.tc, e4 = a.tc * b.tb + a.td * b.td, e5 = a.tc * b.tx + a.td * b.ty + a.ty;
                            return out || (out = new Matrix3d), out.ta = e0, out.tb = e1, out.tx = e2, out.tc = e3, 
                            out.td = e4, out.ty = e5, out.mutation = !0, out;
                        }
                    }, {
                        key: "identity",
                        value: function(out) {
                            return out || (out = new Matrix3d), out.ta = 1, out.tb = 0, out.tx = 0, out.tc = 0, 
                            out.td = 1, out.ty = 0, out.mutation = !0, out;
                        }
                    }, {
                        key: "translate",
                        value: function(x, y, out) {
                            return out || (out = new Matrix3d), out.ta = 1, out.tb = 0, out.tx = x, out.tc = 0, 
                            out.td = 1, out.ty = y, out.mutation = !0, out;
                        }
                    }, {
                        key: "scale",
                        value: function(sx, sy, out) {
                            return out || (out = new Matrix3d), out.ta = sx, out.tb = 0, out.tx = 0, out.tc = 0, 
                            out.td = sy, out.ty = 0, out.mutation = !0, out;
                        }
                    }, {
                        key: "rotate",
                        value: function(angle, out) {
                            if (void 0 === out && (out = new Matrix3d), 0 === angle) return out.ta = 1, out.tb = 0, 
                            out.tx = 0, out.tc = 0, out.td = 1, out.ty = 0, out.mutation = !0, out;
                            var cos = Math.cos(angle), sin = Math.sin(angle);
                            return out.ta = cos, out.tb = -sin, out.tx = 0, out.tc = sin, out.td = cos, out.ty = 0, 
                            out.mutation = !0, out;
                        }
                    }, {
                        key: "copy",
                        value: function(src, dst) {
                            return dst || (dst = new Matrix3d), dst.ta = src.ta, dst.tc = src.tc, dst.tb = src.tb, 
                            dst.td = src.td, dst.tx = src.tx, dst.ty = src.ty, dst.mutation = !0, dst;
                        }
                    } ]);
                }()), RenderCoords = function() {
                    function RenderCoords(x1, y1, x2, y2, x3, y3, x4, y4) {
                        this.x1 = void 0, this.y1 = void 0, this.x2 = void 0, this.y2 = void 0, this.x3 = void 0, 
                        this.y3 = void 0, this.x4 = void 0, this.y4 = void 0, this.x1 = x1, this.y1 = y1, 
                        this.x2 = x2, this.y2 = y2, this.x3 = x3, this.y3 = y3, this.x4 = x4, this.y4 = y4;
                    }
                    return _createClass(RenderCoords, null, [ {
                        key: "translate",
                        value: function(x1, y1, x2, y2, x3, y3, x4, y4, out) {
                            return void 0 === out ? new RenderCoords(x1, y1, x2, y2, x3, y3, x4, y4) : (out.x1 = x1, 
                            out.y1 = y1, out.x2 = x2, out.y2 = y2, out.x3 = x3, out.y3 = y3, out.x4 = x4, out.y4 = y4, 
                            out);
                        }
                    } ]);
                }(), Math.PI / 180, getTimingBezier = function(a, b, c, d) {
                    var xc = 3 * a, xb = 3 * (c - a) - xc, xa = 1 - xc - xb, yc = 3 * b, yb = 3 * (d - b) - yc, ya = 1 - yc - yb;
                    return function(time) {
                        if (time >= 1) return 1;
                        if (time <= 0) return 0;
                        for (var cbxd, dx, t = .5, it = 0; it < 20; it++) {
                            if ((dx = time - t * (t * (t * xa + xb) + xc)) > -1e-8 && dx < 1e-8) return t * (t * (t * ya + yb) + yc);
                            if ((cbxd = t * (t * (3 * xa) + 2 * xb) + xc) > 1e-10 && cbxd < 1e-10) break;
                            t += dx / cbxd;
                        }
                        for (var minT = 0, maxT = 1, _it = 0; _it < 20; _it++) {
                            if ((dx = time - (t = .5 * (minT + maxT)) * (t * (t * xa + xb) + xc)) > -1e-8 && dx < 1e-8) return t * (t * (t * ya + yb) + yc);
                            dx < 0 ? maxT = t : minT = t;
                        }
                        return time;
                    };
                }, timingMapping = {}, timingLookup = {
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
                }, defaultTiming = function(t) {
                    return t;
                }, parseCubicBezier = function(str) {
                    var match = str.match(/-?\d*\.?\d+/g);
                    if (match) {
                        var _match = _slicedToArray(match, 4), num1 = _match[0], num2 = _match[1], num3 = _match[2], num4 = _match[3], timing = getTimingBezier(parseFloat(num1 || "0.42"), parseFloat(num2 || "0"), parseFloat(num3 || "1"), parseFloat(num4 || "1"));
                        return timingMapping[str] = timing, timing;
                    }
                    return console.warn("Unknown cubic-bezier timing: " + str), defaultTiming;
                }, getTimingFunction = function(str) {
                    if ("linear" === str) return defaultTiming;
                    if (void 0 !== timingMapping[str]) return timingMapping[str] || defaultTiming;
                    if ("step-start" === str) return function() {
                        return 1;
                    };
                    if ("step-end" === str) return function(time) {
                        return 1 === time ? 1 : 0;
                    };
                    var lookup = timingLookup[str];
                    if (void 0 !== lookup) {
                        var _lookup = _slicedToArray(lookup, 4), a = _lookup[0], b = _lookup[1], c = _lookup[2], d = _lookup[3], timing = getTimingBezier(a, b, c, d);
                        return timingMapping[str] = timing, timing;
                    }
                    return str.startsWith("cubic-bezier") ? parseCubicBezier(str) : (console.warn("Unknown timing function: " + str), 
                    defaultTiming);
                }, function(AutosizeMode) {
                    AutosizeMode[AutosizeMode.Children = 0] = "Children", AutosizeMode[AutosizeMode.Texture = 1] = "Texture";
                }(AutosizeMode || (AutosizeMode = {})), function(AutosizeUpdateType) {
                    AutosizeUpdateType[AutosizeUpdateType.None = 0] = "None", AutosizeUpdateType[AutosizeUpdateType.Filtered = 1] = "Filtered", 
                    AutosizeUpdateType[AutosizeUpdateType.All = 2] = "All";
                }(AutosizeUpdateType || (AutosizeUpdateType = {})), applyDimensions = function(node, w, h) {
                    node.props.w = w, node.props.h = h, node.setUpdateType(UpdateType.Local | UpdateType.RecalcUniforms);
                }, getFilteredChildren = function(children, childMap) {
                    for (var filtered = []; children.length > 0; ) {
                        var id = children.pop(), child = childMap.get(id);
                        filtered.push(child);
                    }
                    return filtered;
                }, autosizerId = 0, Autosizer = function() {
                    return _createClass(function(node) {
                        this.node = void 0, this.id = autosizerId++, this.mode = AutosizeMode.Children, 
                        this.updateType = AutosizeUpdateType.All, this.lastWidth = 0, this.lastHeight = 0, 
                        this.lastHasChanged = !1, this.flaggedChildren = [], this.childMap = new Map, this.minX = 1 / 0, 
                        this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0, this.corners = [ {
                            x: 0,
                            y: 0
                        }, {
                            x: 0,
                            y: 0
                        }, {
                            x: 0,
                            y: 0
                        }, {
                            x: 0,
                            y: 0
                        } ], this.node = node, null !== node.texture && (this.mode = AutosizeMode.Texture);
                    }, [ {
                        key: "attach",
                        value: function(node) {
                            if (this.childMap.set(node.id, node), node.parentAutosizer = this, node.children.length > 0 && null === node.autosizer) for (var _children = node.children, i = 0; i < _children.length; i++) this.attach(_children[i]);
                        }
                    }, {
                        key: "detach",
                        value: function(node) {
                            if (!0 === this.childMap.delete(node.id)) {
                                if (node.parentAutosizer = null, node.children.length > 0 && null === node.autosizer) for (var _children2 = node.children, i = 0; i < _children2.length; i++) this.detach(_children2[i]);
                                this.setUpdateType(AutosizeUpdateType.All);
                            }
                        }
                    }, {
                        key: "patch",
                        value: function(id) {
                            void 0 !== this.childMap.get(id) && (this.flaggedChildren.push(id), this.setUpdateType(AutosizeUpdateType.Filtered));
                        }
                    }, {
                        key: "setUpdateType",
                        value: function(updateType) {
                            this.updateType |= updateType, this.node.setUpdateType(UpdateType.Autosize);
                        }
                    }, {
                        key: "setMode",
                        value: function(mode) {
                            this.mode = mode, this.setUpdateType(AutosizeUpdateType.All);
                        }
                    }, {
                        key: "update",
                        value: function() {
                            var node = this.node;
                            if (this.mode === AutosizeMode.Texture && null !== node.texture && null !== node.texture.dimensions) {
                                var _node$texture$dimensi = node.texture.dimensions, w = _node$texture$dimensi.w, h = _node$texture$dimensi.h;
                                return w === node.w && h === node.h || applyDimensions(node, w, h), this.lastWidth = w, 
                                this.lastHeight = h, void (this.updateType = AutosizeUpdateType.None);
                            }
                            var filtered = this.updateType === AutosizeUpdateType.Filtered ? getFilteredChildren(this.flaggedChildren, this.childMap) : Array.from(this.childMap.values());
                            if (0 !== filtered.length) {
                                for (var corners = this.corners, minX = this.minX, minY = this.minY, maxX = this.maxX, maxY = this.maxY, i = 0; i < filtered.length; i++) {
                                    var child = filtered[i];
                                    if (!1 !== child.isRenderable && void 0 !== child.localTransform) {
                                        var _child$localTransform = child.localTransform, tx = _child$localTransform.tx, ty = _child$localTransform.ty, ta = _child$localTransform.ta, tb = _child$localTransform.tb, tc = _child$localTransform.tc, td = _child$localTransform.td, _w = child.props.w, _h = child.props.h, childMinX = tx, childMaxX = tx + _w * ta, childMinY = ty, childMaxY = ty + _h * td;
                                        corners[0].x = childMinX, corners[0].y = childMinY, corners[1].x = childMaxX, 0 === tb && 0 === tc ? (corners[1].y = childMinY, 
                                        corners[2].x = childMaxX, corners[2].y = childMaxY, corners[3].x = childMinX, corners[3].y = childMaxY) : (corners[1].y = tx + _w * tc, 
                                        corners[2].x = tx + _w * ta + _h * tb, corners[2].y = ty + _w * tc + _h * td, corners[3].x = tx + _h * tb, 
                                        corners[3].y = ty + _h * td);
                                        for (var j = 0; j < 4; j++) {
                                            var corner = corners[j];
                                            corner.x < minX && (minX = corner.x), corner.y < minY && (minY = corner.y), corner.x > maxX && (maxX = corner.x), 
                                            corner.y > maxY && (maxY = corner.y);
                                        }
                                    }
                                }
                                this.updateType = AutosizeUpdateType.None;
                                var newWidth = maxX > 0 ? maxX : 0, newHeight = maxY > 0 ? maxY : 0;
                                applyDimensions(node, newWidth, newHeight), this.lastWidth = newWidth, this.lastHeight = newHeight;
                            }
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            if (this.childMap.size > 0) {
                                var _step12, _iterator12 = _createForOfIteratorHelper(this.childMap.values());
                                try {
                                    for (_iterator12.s(); !(_step12 = _iterator12.n()).done; ) {
                                        _step12.value.parentAutosizer = null;
                                    }
                                } catch (err) {
                                    _iterator12.e(err);
                                } finally {
                                    _iterator12.f();
                                }
                            }
                            this.childMap.clear(), this.flaggedChildren.length = 0;
                        }
                    } ]);
                }(), sortByZIndexStable = function(nodes) {
                    for (var len = nodes.length, i = 1; i < len; i++) {
                        for (var node = nodes[i], z = node.props.zIndex, j = i - 1; j >= 0 && nodes[j].props.zIndex > z; ) nodes[j + 1] = nodes[j], 
                        j--;
                        nodes[j + 1] = node;
                    }
                }, findChildIndexById = function(node, children) {
                    for (var i = 0; i < children.length; i++) if (children[i]._id === node._id) return i;
                    return -1;
                }, _removeChild = function(node, children) {
                    var index = findChildIndexById(node, children);
                    -1 !== index && children.splice(index, 1);
                }, function(CoreNodeRenderState) {
                    CoreNodeRenderState[CoreNodeRenderState.Init = 0] = "Init", CoreNodeRenderState[CoreNodeRenderState.OutOfBounds = 2] = "OutOfBounds", 
                    CoreNodeRenderState[CoreNodeRenderState.InBounds = 4] = "InBounds", CoreNodeRenderState[CoreNodeRenderState.InViewport = 8] = "InViewport";
                }(CoreNodeRenderState || _export("St", CoreNodeRenderState = {})), NO_CLIPPING_RECT = {
                    x: 0,
                    y: 0,
                    w: 0,
                    h: 0,
                    valid: !1
                }, (CoreNodeRenderStateMap$1 = new Map).set(CoreNodeRenderState.Init, "init"), CoreNodeRenderStateMap$1.set(CoreNodeRenderState.OutOfBounds, "outOfBounds"), 
                CoreNodeRenderStateMap$1.set(CoreNodeRenderState.InBounds, "inBounds"), CoreNodeRenderStateMap$1.set(CoreNodeRenderState.InViewport, "inViewport"), 
                function(UpdateType) {
                    UpdateType[UpdateType.Children = 1] = "Children", UpdateType[UpdateType.Local = 2] = "Local", 
                    UpdateType[UpdateType.Global = 4] = "Global", UpdateType[UpdateType.Clipping = 8] = "Clipping", 
                    UpdateType[UpdateType.SortZIndexChildren = 16] = "SortZIndexChildren", UpdateType[UpdateType.PremultipliedColors = 32] = "PremultipliedColors", 
                    UpdateType[UpdateType.WorldAlpha = 64] = "WorldAlpha", UpdateType[UpdateType.RenderState = 128] = "RenderState", 
                    UpdateType[UpdateType.IsRenderable = 256] = "IsRenderable", UpdateType[UpdateType.RenderTexture = 512] = "RenderTexture", 
                    UpdateType[UpdateType.ParentRenderTexture = 1024] = "ParentRenderTexture", UpdateType[UpdateType.RenderBounds = 2048] = "RenderBounds", 
                    UpdateType[UpdateType.RecalcUniforms = 4096] = "RecalcUniforms", UpdateType[UpdateType.Autosize = 8192] = "Autosize", 
                    UpdateType[UpdateType.None = 0] = "None", UpdateType[UpdateType.All = 16383] = "All";
                }(UpdateType || _export("Ct", UpdateType = {})), CoreNode = function(_EventEmitter2) {
                    function CoreNode(stage, props) {
                        var _this6;
                        (_this6 = _callSuper(this, CoreNode)).stage = void 0, _this6.children = [], _this6._id = nextId++, 
                        _this6.props = void 0, _this6.isCoreNode = !0, _this6._animations = null, _this6.renderOpBufferIdx = 0, 
                        _this6.numQuads = 0, _this6.renderOpTextures = [], _this6.quadBufferIndex = -1, 
                        _this6.isQuadDirty = !0, _this6.hasShaderUpdater = !1, _this6.hasShaderTimeFn = !1, 
                        _this6.hasColorProps = !1, _this6.textureLoaded = !1, _this6.textureOwnership = !1, 
                        _this6.placeholderActive = !1, _this6.updateType = UpdateType.All, _this6.childUpdateType = UpdateType.None, 
                        _this6.globalTransform = void 0, _this6.localTransform = void 0, _this6.sceneGlobalTransform = void 0, 
                        _this6.renderCoords = void 0, _this6.sceneRenderCoords = void 0, _this6.renderBound = void 0, 
                        _this6.strictBound = void 0, _this6.preloadBound = void 0, _this6.clippingRect = NO_CLIPPING_RECT, 
                        _this6.textureCoords = void 0, _this6.updateShaderUniforms = !1, _this6.isRenderable = !1, 
                        _this6.renderState = CoreNodeRenderState.Init, _this6.isSimple = !0, _this6._localIsTranslate = !0, 
                        _this6._hasContainResize = !1, _this6._globalIsTranslate = !0, _this6.worldAlpha = 1, 
                        _this6.premultipliedColorTl = 0, _this6.premultipliedColorTr = 0, _this6.premultipliedColorBl = 0, 
                        _this6.premultipliedColorBr = 0, _this6.calcZIndex = 0, _this6.hasRTTupdates = !1, 
                        _this6.parentHasRenderTexture = !1, _this6.rttParent = null, _this6.framebufferDimensions = null, 
                        _this6.autosizer = null, _this6.parentAutosizer = null, _this6.destroyed = !1, _this6.loadTextureTask = function() {
                            var _this$props$textureOp, _this$props$textureOp2, texture = _this6.props.texture;
                            null !== texture && (!0 === _this6.textureOptions.preload && _this6.stage.txManager.loadTexture(texture), 
                            texture.preventCleanup = null !== (_this$props$textureOp = null == (_this$props$textureOp2 = _this6.props.textureOptions) ? void 0 : _this$props$textureOp2.preventCleanup) && void 0 !== _this$props$textureOp && _this$props$textureOp, 
                            texture.on("loaded", _this6.onTextureLoaded), texture.on("failed", _this6.onTextureFailed), 
                            texture.on("freed", _this6.onTextureFreed), _this6.parentHasRenderTexture ? _this6.notifyParentRTTOfUpdate() : "loaded" === texture.state ? _this6.onTextureLoaded(texture, texture.dimensions) : "failed" === texture.state ? _this6.onTextureFailed(texture, texture.error) : "freed" === texture.state && _this6.onTextureFreed(texture));
                        }, _this6.onTextureLoaded = function(_, dimensions) {
                            var _this$props$textureOp3;
                            null !== _this6.autosizer && _this6.autosizer.update(), _this6.textureLoaded = !0, 
                            _this6.updatePlaceholderActive(), _this6.setUpdateType(UpdateType.IsRenderable), 
                            _this6.stage.requestRender(), _this6.parentHasRenderTexture && _this6.notifyParentRTTOfUpdate(), 
                            dimensions.w > 1 && dimensions.h > 1 && _this6.emit("loaded", {
                                type: "texture",
                                dimensions: dimensions
                            }), !0 === _this6.stage.calculateTextureCoord && null !== _this6.props.textureOptions && (_this6.textureCoords = _this6.stage.renderer.getTextureCoords(_this6)), 
                            "contain" === (null == (_this$props$textureOp3 = _this6.props.textureOptions) || null == (_this$props$textureOp3 = _this$props$textureOp3.resizeMode) ? void 0 : _this$props$textureOp3.type) && _this6.setUpdateType(UpdateType.Local);
                        }, _this6.onTextureFailed = function(_, error) {
                            _this6.textureLoaded = !1, _this6.isRenderable = !1, _this6.updatePlaceholderActive(), 
                            _this6.updateTextureOwnership(!1), _this6.setUpdateType(UpdateType.IsRenderable), 
                            _this6.parentHasRenderTexture && _this6.notifyParentRTTOfUpdate(), null !== _this6.texture && _this6.texture.retryCount > _this6.texture.maxRetryCount && _this6.emit("failed", {
                                type: "texture",
                                error: error
                            });
                        }, _this6.onTextureFreed = function() {
                            _this6.textureLoaded = !1, _this6.isRenderable = !1, _this6.updatePlaceholderActive(), 
                            _this6.updateTextureOwnership(!1), _this6.setUpdateType(UpdateType.IsRenderable), 
                            _this6.parentHasRenderTexture && _this6.notifyParentRTTOfUpdate(), _this6.emit("freed", {
                                type: "texture"
                            });
                        }, _this6.stage = stage, _this6.localTransform = Matrix3d.identity(), _this6.globalTransform = Matrix3d.identity();
                        var initialUpdateType = UpdateType.Local | UpdateType.RenderBounds | UpdateType.RenderState, texture = props.texture, shader = props.shader, src = props.src, rtt = props.rtt, boundsMargin = props.boundsMargin, parent = props.parent, p = _this6.props = props;
                        p.texture = null, p.shader = null, p.src = null, p.rtt = !1, p.boundsMargin = null, 
                        p.scale = null, (p.color > 0 || p.colorTop > 0 || p.colorBottom > 0 || p.colorLeft > 0 || p.colorRight > 0 || p.colorTl > 0 || p.colorTr > 0 || p.colorBl > 0 || p.colorBr > 0) && (_this6.hasColorProps = !0, 
                        initialUpdateType |= UpdateType.PremultipliedColors), 0 !== p.zIndex && (_this6.zIndex = p.zIndex), 
                        null !== parent && parent.addChild(_this6), null !== texture && (_this6.texture = texture), 
                        null === shader || shader === _this6.stage.defShaderNode ? p.shader = _this6.stage.defShaderNode : _this6.shader = shader, 
                        null !== src && (_this6.src = src), !1 !== rtt && (_this6.rtt = rtt), null !== boundsMargin && (_this6.boundsMargin = boundsMargin), 
                        !0 === p.autosize && (_this6.autosizer = new Autosizer(_this6)), _this6.setUpdateType(initialUpdateType);
                        var dt = _this6.stage.defaultTexture;
                        return null !== dt && "loaded" !== dt.state && dt.once("loaded", function() {
                            return _this6.setUpdateType(UpdateType.IsRenderable);
                        }), _this6.updateIsSimple(), _this6;
                    }
                    return _inherits(CoreNode, _EventEmitter2), _createClass(CoreNode, [ {
                        key: "updatePlaceholderActive",
                        value: function() {
                            var active = 0 !== this.props.placeholderColor && null !== this.props.texture && !1 === this.textureLoaded;
                            active !== this.placeholderActive && (this.placeholderActive = active, this.setUpdateType(UpdateType.PremultipliedColors | UpdateType.IsRenderable));
                        }
                    }, {
                        key: "loadTexture",
                        value: function() {
                            null !== this.props.texture && queueMicrotask(this.loadTextureTask);
                        }
                    }, {
                        key: "unloadTexture",
                        value: function() {
                            if (null !== this.texture) {
                                var texture = this.texture;
                                texture.off("loaded", this.onTextureLoaded), texture.off("failed", this.onTextureFailed), 
                                texture.off("freed", this.onTextureFreed), texture.setRenderableOwner(this._id, !1), 
                                this.textureOwnership = !1;
                            }
                        }
                    }, {
                        key: "setUpdateType",
                        value: function(type) {
                            this.updateType |= type;
                            var parent = this.props.parent;
                            !parent || parent.updateType & UpdateType.Children || parent.setUpdateType(UpdateType.Children);
                        }
                    }, {
                        key: "updateLocalTransform",
                        value: function() {
                            var p = this.props, x = p.x, y = p.y;
                            if (this.isSimple) return !0 === this._localIsTranslate ? void this.localTransform.setTranslate(x, y) : (this.localTransform = Matrix3d.translate(x, y, this.localTransform), 
                            void (this._localIsTranslate = !0));
                            var w = p.w, h = p.h, mountTranslateX = p.mountX * w, mountTranslateY = p.mountY * h, rotation = p.rotation, scaleX = p.scaleX, scaleY = p.scaleY;
                            if (0 !== rotation) {
                                var scaleRotate = Matrix3d.rotate(rotation, Matrix3d.temp).scale(scaleX, scaleY), pivotTranslateX = p.pivotX * w, pivotTranslateY = p.pivotY * h;
                                this.localTransform = Matrix3d.translate(x - mountTranslateX + pivotTranslateX, y - mountTranslateY + pivotTranslateY, this.localTransform).multiply(scaleRotate).translate(-pivotTranslateX, -pivotTranslateY);
                            } else if (1 !== scaleX || 1 !== scaleY) {
                                var _pivotTranslateX = p.pivotX * w, _pivotTranslateY = p.pivotY * h;
                                this.localTransform = Matrix3d.translate(x - mountTranslateX + _pivotTranslateX, y - mountTranslateY + _pivotTranslateY, this.localTransform).scale(scaleX, scaleY).translate(-_pivotTranslateX, -_pivotTranslateY);
                            } else this.localTransform = Matrix3d.translate(x - mountTranslateX, y - mountTranslateY, this.localTransform);
                            var texture = p.texture;
                            if (!0 === this._hasContainResize && null !== texture && null !== texture.dimensions) {
                                var resizeModeScaleX = 1, resizeModeScaleY = 1, extraX = 0, extraY = 0, _texture$dimensions = texture.dimensions, tw = _texture$dimensions.w, th = _texture$dimensions.h;
                                if (tw / th > w / h) {
                                    var scaledTxHeight = th * (w / tw);
                                    extraY = (h - scaledTxHeight) / 2, resizeModeScaleY = scaledTxHeight / h;
                                } else {
                                    var scaledTxWidth = tw * (h / th);
                                    extraX = (w - scaledTxWidth) / 2, resizeModeScaleX = scaledTxWidth / w;
                                }
                                this.localTransform.translate(extraX, extraY).scale(resizeModeScaleX, resizeModeScaleY);
                            }
                            this._localIsTranslate = !1;
                        }
                    }, {
                        key: "updateIsSimple",
                        value: function() {
                            var _p$textureOptions, p = this.props;
                            this._hasContainResize = null !== p.texture && "contain" === (null == (_p$textureOptions = p.textureOptions) || null == (_p$textureOptions = _p$textureOptions.resizeMode) ? void 0 : _p$textureOptions.type), 
                            this.isSimple = 0 === p.rotation && 1 === p.scaleX && 1 === p.scaleY && 0 === p.mountX && 0 === p.mountY && !1 === this._hasContainResize;
                        }
                    }, {
                        key: "update",
                        value: function(delta, parentClippingRect) {
                            var props = this.props, parent = props.parent, parentHasRenderTexture = this.parentHasRenderTexture, newRenderState = null, updateType = this.updateType, childUpdateType = this.childUpdateType;
                            if (ENABLE_AUTOSIZE && updateType & UpdateType.Autosize && null !== this.autosizer && this.autosizer.update(), 
                            this.updateType = 0, this.childUpdateType = 0, updateType & UpdateType.Local && (this.updateLocalTransform(), 
                            updateType |= UpdateType.Global), updateType & UpdateType.RenderTexture && !0 === this.rtt && (this.hasRTTupdates = !0), 
                            updateType & UpdateType.Global) {
                                var lt = this.localTransform, gt = this.globalTransform, fastPathApplied = !1;
                                if (!0 === this.parentHasRenderTexture && !0 === parent.rtt) {
                                    Matrix3d.identity(gt);
                                    var parentTransform = parent.globalTransform || Matrix3d.identity(Matrix3d.temp);
                                    this.sceneGlobalTransform = Matrix3d.copy(parentTransform, this.sceneGlobalTransform).translateOrMultiply(lt), 
                                    this._globalIsTranslate = this.isSimple;
                                } else if (!0 === this.parentHasRenderTexture && !1 === parent.rtt) {
                                    var parentSceneTransform = parent.sceneGlobalTransform || lt;
                                    this.sceneGlobalTransform = Matrix3d.copy(parentSceneTransform, this.sceneGlobalTransform).translateOrMultiply(lt), 
                                    Matrix3d.copy(parent.globalTransform, gt), this._globalIsTranslate = !1;
                                } else {
                                    var parentGT = parent.globalTransform;
                                    !0 === this.isSimple && !0 === parent._globalIsTranslate ? (!1 === this._globalIsTranslate && (gt.ta = 1, 
                                    gt.tb = 0, gt.tc = 0, gt.td = 1), gt.setTranslate(parentGT.tx + lt.tx, parentGT.ty + lt.ty), 
                                    this._globalIsTranslate = !0, fastPathApplied = !0) : (Matrix3d.copy(parentGT, gt), 
                                    this._globalIsTranslate = !0 === this.isSimple && !0 === parent._globalIsTranslate);
                                }
                                !1 === fastPathApplied && (this.isSimple ? gt.translate(lt.tx, lt.ty) : gt.translateOrMultiply(lt)), 
                                this.calculateRenderCoords(), this.updateBoundingRect(), 0 === ((updateType |= UpdateType.RenderState) & UpdateType.Autosize) && (updateType |= UpdateType.Children, 
                                childUpdateType |= UpdateType.Global), !1 !== this.props.clipping && (updateType |= UpdateType.Clipping | UpdateType.RenderBounds, 
                                childUpdateType |= UpdateType.RenderBounds);
                            }
                            if (updateType & UpdateType.RenderBounds && (this.createRenderBounds(), updateType |= UpdateType.RenderState | UpdateType.Children, 
                            childUpdateType |= UpdateType.RenderBounds), updateType & UpdateType.RenderState && (newRenderState = this.checkRenderBounds(), 
                            updateType |= UpdateType.IsRenderable, newRenderState !== CoreNodeRenderState.OutOfBounds && this.updateRenderState(newRenderState)), 
                            updateType & UpdateType.WorldAlpha && (this.worldAlpha = !0 === props.ignoreParentAlpha ? props.alpha : parent.worldAlpha * props.alpha, 
                            updateType |= UpdateType.PremultipliedColors | UpdateType.Children | UpdateType.IsRenderable, 
                            childUpdateType |= UpdateType.WorldAlpha), updateType & UpdateType.IsRenderable && this.updateIsRenderable(), 
                            ENABLE_AUTOSIZE && updateType & UpdateType.Global && !0 === this.isRenderable && null !== this.parentAutosizer && this.parentAutosizer.patch(this.id), 
                            updateType & UpdateType.Clipping && (this.calculateClippingRect(parentClippingRect), 
                            updateType |= UpdateType.Children, childUpdateType |= UpdateType.Clipping | UpdateType.RenderBounds), 
                            updateType & UpdateType.PremultipliedColors) {
                                var alpha = this.worldAlpha;
                                if (!0 === this.placeholderActive) {
                                    var merged = premultiplyColorABGR(props.placeholderColor, alpha);
                                    this.premultipliedColorTl = this.premultipliedColorTr = this.premultipliedColorBl = this.premultipliedColorBr = merged;
                                } else {
                                    var tl = props.colorTl, tr = props.colorTr, bl = props.colorBl, br = props.colorBr, same = tl === tr && tl === bl && tl === br, _merged = premultiplyColorABGR(tl, alpha);
                                    this.premultipliedColorTl = _merged, !0 === same ? this.premultipliedColorTr = this.premultipliedColorBl = this.premultipliedColorBr = _merged : (this.premultipliedColorTr = premultiplyColorABGR(tr, alpha), 
                                    this.premultipliedColorBl = premultiplyColorABGR(bl, alpha), this.premultipliedColorBr = premultiplyColorABGR(br, alpha));
                                }
                            }
                            if (this.renderState === CoreNodeRenderState.OutOfBounds) return this.updateType = updateType, 
                            void (this.childUpdateType = childUpdateType);
                            if (updateType & UpdateType.RecalcUniforms && !0 === this.hasShaderUpdater && (this.updateShaderUniforms = !0), 
                            !0 === this.isRenderable && !0 === this.updateShaderUniforms && (this.updateShaderUniforms = !1, 
                            this.shader.update()), updateType & UpdateType.Children && this.children.length > 0) {
                                var childClippingRect = this.clippingRect;
                                !0 === this.rtt && (childClippingRect = NO_CLIPPING_RECT);
                                var _children3 = this.children, length = _children3.length;
                                if (0 !== childUpdateType) for (var i = 0; i < length; i++) {
                                    var child = _children3[i];
                                    child.updateType |= childUpdateType, 0 !== child.updateType && child.update(delta, childClippingRect);
                                } else for (var _i9 = 0; _i9 < length; _i9++) {
                                    var _child = _children3[_i9];
                                    0 !== _child.updateType && _child.update(delta, childClippingRect);
                                }
                            }
                            !0 === parentHasRenderTexture && this.notifyParentRTTOfUpdate(), updateType & UpdateType.SortZIndexChildren && this.sortChildren(), 
                            newRenderState === CoreNodeRenderState.OutOfBounds && (this.updateRenderState(newRenderState), 
                            this.updateIsRenderable(), !0 === this.rtt && newRenderState === CoreNodeRenderState.OutOfBounds && this.notifyChildrenRTTOfUpdate(newRenderState)), 
                            updateType & (UpdateType.Global | UpdateType.PremultipliedColors | UpdateType.WorldAlpha) && (this.isQuadDirty = !0);
                        }
                    }, {
                        key: "findParentRTTNode",
                        value: function() {
                            for (var rttNode = this.parent; rttNode && !rttNode.rtt; ) rttNode = rttNode.parent;
                            return rttNode;
                        }
                    }, {
                        key: "notifyChildrenRTTOfUpdate",
                        value: function(renderState) {
                            var _step13, _iterator13 = _createForOfIteratorHelper(this.children);
                            try {
                                for (_iterator13.s(); !(_step13 = _iterator13.n()).done; ) {
                                    var child = _step13.value;
                                    child.updateRenderState(renderState), child.updateIsRenderable(), child.notifyChildrenRTTOfUpdate(renderState);
                                }
                            } catch (err) {
                                _iterator13.e(err);
                            } finally {
                                _iterator13.f();
                            }
                        }
                    }, {
                        key: "notifyParentRTTOfUpdate",
                        value: function() {
                            if (null !== this.parent) {
                                var rttNode = this.rttParent || this.findParentRTTNode();
                                rttNode && (rttNode.hasRTTupdates = !0, rttNode.setUpdateType(UpdateType.RenderTexture), 
                                !0 === rttNode.parentHasRenderTexture && rttNode.notifyParentRTTOfUpdate());
                            }
                        }
                    }, {
                        key: "checkRenderBounds",
                        value: function() {
                            return boundInsideBound(this.renderBound, this.strictBound) ? CoreNodeRenderState.InViewport : boundInsideBound(this.renderBound, this.preloadBound) ? CoreNodeRenderState.InBounds : (bound1 = this.renderBound, 
                            bound2 = this.strictBound, bound1.x1 < bound2.x1 && bound1.x2 > bound2.x2 && bound1.y1 < bound2.y1 && bound1.y2 > bound2.y2 ? CoreNodeRenderState.InViewport : null === this.parent || 0 !== this.props.w && 0 !== this.props.h ? CoreNodeRenderState.OutOfBounds : this.parent.renderState);
                            var bound1, bound2;
                        }
                    }, {
                        key: "updateBoundingRect",
                        value: function() {
                            var transform = this.sceneGlobalTransform || this.globalTransform, renderCoords = this.sceneRenderCoords || this.renderCoords;
                            if (0 === transform.tb && 0 === transform.tc) this.renderBound = createBound(renderCoords.x1, renderCoords.y1, renderCoords.x3, renderCoords.y3, this.renderBound); else {
                                var x1 = renderCoords.x1, y1 = renderCoords.y1, x2 = renderCoords.x2, y2 = renderCoords.y2, x3 = renderCoords.x3, y3 = renderCoords.y3, x4 = renderCoords.x4, y4 = renderCoords.y4;
                                this.renderBound = createBound(Math.min(x1, x2, x3, x4), Math.min(y1, y2, y3, y4), Math.max(x1, x2, x3, x4), Math.max(y1, y2, y3, y4), this.renderBound);
                            }
                        }
                    }, {
                        key: "createRenderBounds",
                        value: function() {
                            if (null !== this.parent && void 0 !== this.parent.strictBound) {
                                var parentBound = this.parent.strictBound;
                                this.strictBound = createBound(parentBound.x1, parentBound.y1, parentBound.x2, parentBound.y2, this.strictBound), 
                                this.preloadBound = createPreloadBounds(this.strictBound, this.boundsMargin, this.preloadBound);
                            } else this.strictBound = this.stage.strictBound, this.preloadBound = this.stage.preloadBound;
                            if (!1 !== this.props.clipping && void 0 !== this.renderBound && !1 !== boundInsideBound(this.renderBound, this.strictBound)) {
                                var _this$props = this.props, x = _this$props.x, y = _this$props.y, w = _this$props.w, h = _this$props.h, clipping = _this$props.clipping, _ref17 = this.sceneGlobalTransform || this.globalTransform || {}, tx = _ref17.tx, ty = _ref17.ty, _x = null != tx ? tx : x, _y = null != ty ? ty : y, mT = 0, mR = 0, mB = 0, mL = 0;
                                !0 === Array.isArray(clipping) && (mT = clipping[0], mR = clipping[1], mB = clipping[2], 
                                mL = clipping[3]), this.strictBound = createBound(_x - mL, _y - mT, _x + w + mR, _y + h + mB, this.strictBound), 
                                this.preloadBound = createPreloadBounds(this.strictBound, this.boundsMargin, this.preloadBound);
                            }
                        }
                    }, {
                        key: "updateRenderState",
                        value: function(renderState) {
                            if (renderState !== this.renderState) {
                                var previous = this.renderState;
                                if (this.renderState = renderState, renderState !== CoreNodeRenderState.OutOfBounds && previous !== CoreNodeRenderState.OutOfBounds || this.stage.requestRenderListUpdate(), 
                                EMIT_BOUNDS_EVENTS) {
                                    var event = CoreNodeRenderStateMap$1.get(renderState);
                                    this.emit(event, {
                                        previous: previous,
                                        current: renderState
                                    });
                                }
                            }
                        }
                    }, {
                        key: "checkBasicRenderability",
                        value: function() {
                            return 0 !== this.worldAlpha && !0 !== this.isOutOfBounds();
                        }
                    }, {
                        key: "updateIsRenderable",
                        value: function() {
                            var newIsRenderable = !1, needsTextureOwnership = !1;
                            if (!1 === this.checkBasicRenderability()) return this.updateTextureOwnership(!1), 
                            void this.setRenderable(!1);
                            if (null !== this.texture) {
                                if (this.texture.retryCount > this.texture.maxRetryCount) return this.updateTextureOwnership(!1), 
                                void this.setRenderable(!0 === this.placeholderActive && (!1 === this.stage.renderOnlyInViewport || this.renderState === CoreNodeRenderState.InViewport));
                                needsTextureOwnership = !0, newIsRenderable = !0 === this.textureLoaded || !0 === this.placeholderActive;
                            } else this.props.shader === this.stage.renderer.getDefaultShaderNode() && !0 !== this.hasColorProps || !0 !== this.hasDimensions() || (newIsRenderable = !0);
                            !0 === newIsRenderable && !0 === this.stage.renderOnlyInViewport && this.renderState !== CoreNodeRenderState.InViewport && (newIsRenderable = !1), 
                            this.updateTextureOwnership(needsTextureOwnership), this.setRenderable(newIsRenderable);
                        }
                    }, {
                        key: "setRenderable",
                        value: function(isRenderable) {
                            var previousIsRenderable = this.isRenderable;
                            this.isRenderable = isRenderable, previousIsRenderable !== isRenderable && (this.stage.requestRenderListUpdate(), 
                            EMIT_BOUNDS_EVENTS && this.emit("renderable", {
                                type: "renderable",
                                isRenderable: isRenderable
                            }));
                        }
                    }, {
                        key: "updateTextureOwnership",
                        value: function(isRenderable) {
                            var _this$texture;
                            this.textureOwnership !== isRenderable && (this.textureOwnership = isRenderable, 
                            null == (_this$texture = this.texture) || _this$texture.setRenderableOwner(this._id, isRenderable));
                        }
                    }, {
                        key: "isOutOfBounds",
                        value: function() {
                            return this.renderState <= CoreNodeRenderState.OutOfBounds;
                        }
                    }, {
                        key: "hasDimensions",
                        value: function() {
                            return 0 !== this.props.w && 0 !== this.props.h;
                        }
                    }, {
                        key: "calculateRenderCoords",
                        value: function() {
                            var _this$props2 = this.props, w = _this$props2.w, h = _this$props2.h, g = this.globalTransform, tx = g.tx, ty = g.ty, ta = g.ta, tb = g.tb, tc = g.tc, td = g.td;
                            if (0 === tb && 0 === tc) {
                                var minX = tx, maxX = tx + w * ta, minY = ty, maxY = ty + h * td;
                                this.renderCoords = RenderCoords.translate(minX, minY, maxX, minY, maxX, maxY, minX, maxY, this.renderCoords);
                            } else this.renderCoords = RenderCoords.translate(tx, ty, tx + w * ta, ty + w * tc, tx + w * ta + h * tb, ty + w * tc + h * td, tx + h * tb, ty + h * td, this.renderCoords);
                            if (void 0 !== this.sceneGlobalTransform) {
                                var _this$sceneGlobalTran = this.sceneGlobalTransform, stx = _this$sceneGlobalTran.tx, sty = _this$sceneGlobalTran.ty, sta = _this$sceneGlobalTran.ta, stb = _this$sceneGlobalTran.tb, stc = _this$sceneGlobalTran.tc, std = _this$sceneGlobalTran.td;
                                if (0 === stb && 0 === stc) {
                                    var _minX = stx, _maxX = stx + w * sta, _minY = sty, _maxY = sty + h * std;
                                    this.sceneRenderCoords = RenderCoords.translate(_minX, _minY, _maxX, _minY, _maxX, _maxY, _minX, _maxY, this.sceneRenderCoords);
                                } else this.sceneRenderCoords = RenderCoords.translate(stx, sty, stx + w * sta, sty + w * stc, stx + w * sta + h * stb, sty + w * stc + h * std, stx + h * stb, sty + h * std, this.sceneRenderCoords);
                            }
                        }
                    }, {
                        key: "calculateClippingRect",
                        value: function(parentClippingRect) {
                            var props = this.props, gt = this.globalTransform, clipping = props.clipping, isRotated = 0 !== gt.tb || 0 !== gt.tc, nodeClips = !1 !== clipping && !1 === isRotated;
                            if (!1 !== nodeClips || !1 !== parentClippingRect.valid) {
                                var a, b, out, x, y, w, h, clippingRect = this.clippingRect;
                                if (clippingRect === NO_CLIPPING_RECT && (clippingRect = this.clippingRect = {
                                    x: 0,
                                    y: 0,
                                    w: 0,
                                    h: 0,
                                    valid: !1
                                }), !0 === nodeClips) {
                                    var mT = 0, mR = 0, mB = 0, mL = 0;
                                    !0 === Array.isArray(clipping) && (mT = clipping[0], mR = clipping[1], mB = clipping[2], 
                                    mL = clipping[3]), clippingRect.x = gt.tx - mL, clippingRect.y = gt.ty - mT, clippingRect.w = this.props.w * gt.ta + mL + mR, 
                                    clippingRect.h = this.props.h * gt.td + mT + mB, clippingRect.valid = !0;
                                } else clippingRect.valid = !1;
                                !0 === parentClippingRect.valid && !0 === clippingRect.valid ? (a = parentClippingRect, 
                                b = clippingRect, out = clippingRect, x = Math.max(a.x, b.x), y = Math.max(a.y, b.y), 
                                w = Math.min(a.x + a.w, b.x + b.w) - x, h = Math.min(a.y + a.h, b.y + b.h) - y, 
                                w > 0 && h > 0 ? !out || (out.x = x, out.y = y, out.w = w, out.h = h) : !out || (out.x = 0, 
                                out.y = 0, out.w = 0, out.h = 0)) : !0 === parentClippingRect.valid && (!function(a, out) {
                                    out ? (out.x = a.x, out.y = a.y, out.w = a.w, out.h = a.h) : (a.x, a.y, a.w, a.h);
                                }(parentClippingRect, clippingRect), clippingRect.valid = !0);
                            } else this.clippingRect = NO_CLIPPING_RECT;
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            var isChild = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            if (!0 !== this.destroyed && !0 !== this.preventDestroy) {
                                if (this.destroyed = !0, !1 === isChild) {
                                    var parent = this.parent;
                                    null !== parent && parent.removeChild(this), this.props.parent = null, this.stage.requestRender();
                                }
                                this.removeAllListeners(), this.unloadTexture(), this.isRenderable = !1, !0 === this.hasShaderTimeFn && this.stage.untrackTimedNode(this);
                                var shader = this.props.shader;
                                null !== shader && shader !== this.stage.defShaderNode && shader.detachNode(), !0 === this.rtt && this.stage.renderer.removeRTTNode(this);
                                for (var i = 0, n = this.children.length; i < n; i++) this.children[i].destroy(!0);
                                this.children.length = 0, this.props.texture = null;
                            } else isChild && !0 === this.preventDestroy && (this.props.parent = null);
                        }
                    }, {
                        key: "renderQuads",
                        value: function(renderer) {
                            (!0 !== this.parentHasRenderTexture || !1 !== renderer.renderToTextureActive && this.parentRenderTexture === renderer.activeRttNode) && "loaded" === this.renderTexture.state && renderer.addQuad(this);
                        }
                    }, {
                        key: "renderTexture",
                        get: function() {
                            return !0 === this.placeholderActive ? this.stage.defaultTexture : this.props.texture || this.stage.defaultTexture;
                        }
                    }, {
                        key: "renderTextureCoords",
                        get: function() {
                            return this.textureCoords || this.stage.renderer.defaultTextureCoords;
                        }
                    }, {
                        key: "quadBufferCollection",
                        get: function() {
                            return this.stage.renderer.quadBufferCollection;
                        }
                    }, {
                        key: "width",
                        get: function() {
                            return this.props.w;
                        }
                    }, {
                        key: "height",
                        get: function() {
                            return this.props.h;
                        }
                    }, {
                        key: "time",
                        get: function() {
                            return !0 === this.hasShaderTimeFn ? this.getTimerValue() : 0;
                        }
                    }, {
                        key: "getTimerValue",
                        value: function() {
                            return "function" == typeof this.shader.time ? this.shader.time(this.stage) : this.stage.elapsedTime;
                        }
                    }, {
                        key: "sortChildren",
                        value: function() {
                            sortByZIndexStable(this.children), this.stage.requestRenderListUpdate();
                        }
                    }, {
                        key: "removeChild",
                        value: function(node) {
                            if (null === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) && (!0 === this.props.rtt && !0 === this.parentHasRenderTexture && node.clearRTTInheritance(), 
                            ENABLE_AUTOSIZE)) {
                                var autosizeTarget = this.autosizer || this.parentAutosizer;
                                null !== autosizeTarget && autosizeTarget.detach(node);
                            }
                            _removeChild(node, this.children), this.stage.requestRenderListUpdate();
                        }
                    }, {
                        key: "addChild",
                        value: function(node) {
                            var previousParent = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, inRttCluster = !0 === this.props.rtt || !0 === this.parentHasRenderTexture, children = this.children, attachToAutosizer = !1, autosizeTarget = null;
                            if (ENABLE_AUTOSIZE && (attachToAutosizer = null !== (autosizeTarget = this.autosizer || this.parentAutosizer)), 
                            node.parentHasRenderTexture = inRttCluster, null !== previousParent) {
                                var previousParentInRttCluster = !0 === previousParent.props.rtt || !0 === previousParent.parentHasRenderTexture;
                                if (!1 === inRttCluster && !0 === previousParentInRttCluster && node.clearRTTInheritance(), 
                                ENABLE_AUTOSIZE) {
                                    var previousAutosizer = node.autosizer || node.parentAutosizer;
                                    null !== previousAutosizer && (autosizeTarget && previousAutosizer.id === autosizeTarget.id || previousAutosizer.detach(node), 
                                    attachToAutosizer = !1);
                                }
                            }
                            ENABLE_AUTOSIZE && !0 === attachToAutosizer && autosizeTarget && autosizeTarget.attach(node), 
                            !0 === inRttCluster && node.markChildrenWithRTT(this), children.push(node);
                            var lastIndex = children.length - 1, shouldSort = 0 !== node.zIndex;
                            if (!1 === shouldSort && lastIndex > 0) {
                                var first = children[0], last = children[lastIndex - 1];
                                shouldSort = 0 !== first.zIndex || 0 !== last.zIndex;
                            }
                            shouldSort && this.setUpdateType(UpdateType.SortZIndexChildren), this.setUpdateType(UpdateType.Children), 
                            this.stage.requestRenderListUpdate();
                        }
                    }, {
                        key: "id",
                        get: function() {
                            return this._id;
                        }
                    }, {
                        key: "data",
                        get: function() {
                            return this.props.data;
                        },
                        set: function(d) {
                            this.props.data = d;
                        }
                    }, {
                        key: "x",
                        get: function() {
                            return this.props.x;
                        },
                        set: function(value) {
                            this.props.x !== value && (this.props.x = value, this.setUpdateType(UpdateType.Local));
                        }
                    }, {
                        key: "absX",
                        get: function() {
                            var _this$props$parent, _this$props$parent2;
                            return this.props.x + -this.props.w * this.props.mountX + ((null == (_this$props$parent = this.props.parent) ? void 0 : _this$props$parent.absX) || (null == (_this$props$parent2 = this.props.parent) || null == (_this$props$parent2 = _this$props$parent2.globalTransform) ? void 0 : _this$props$parent2.tx) || 0);
                        }
                    }, {
                        key: "absY",
                        get: function() {
                            var _this$props$parent$ab, _this$props$parent3;
                            return this.props.y + -this.props.h * this.props.mountY + (null !== (_this$props$parent$ab = null == (_this$props$parent3 = this.props.parent) ? void 0 : _this$props$parent3.absY) && void 0 !== _this$props$parent$ab ? _this$props$parent$ab : 0);
                        }
                    }, {
                        key: "y",
                        get: function() {
                            return this.props.y;
                        },
                        set: function(value) {
                            this.props.y !== value && (this.props.y = value, this.setUpdateType(UpdateType.Local));
                        }
                    }, {
                        key: "w",
                        get: function() {
                            return this.props.w;
                        },
                        set: function(value) {
                            var props = this.props;
                            if (props.w !== value) {
                                props.w = value;
                                var updateType = UpdateType.Local | UpdateType.RecalcUniforms;
                                null !== props.texture && !0 === this.stage.calculateTextureCoord && null !== props.textureOptions && (this.textureCoords = this.stage.renderer.getTextureCoords(this)), 
                                !0 === props.rtt && (this.framebufferDimensions.w = value, this.texture = this.stage.txManager.createTexture("RenderTexture", this.framebufferDimensions), 
                                updateType |= UpdateType.RenderTexture), this.setUpdateType(updateType);
                            }
                        }
                    }, {
                        key: "h",
                        get: function() {
                            return this.props.h;
                        },
                        set: function(value) {
                            var props = this.props;
                            if (props.h !== value) {
                                props.h = value;
                                var updateType = UpdateType.Local | UpdateType.RecalcUniforms;
                                null !== props.texture && !0 === this.stage.calculateTextureCoord && null !== props.textureOptions && (this.textureCoords = this.stage.renderer.getTextureCoords(this)), 
                                !0 === props.rtt && (this.framebufferDimensions.h = value, this.texture = this.stage.txManager.createTexture("RenderTexture", this.framebufferDimensions), 
                                updateType |= UpdateType.RenderTexture), this.setUpdateType(updateType);
                            }
                        }
                    }, {
                        key: "scale",
                        get: function() {
                            return this.scaleX;
                        },
                        set: function(value) {
                            this.scaleX = value, this.scaleY = value, this.updateIsSimple();
                        }
                    }, {
                        key: "scaleX",
                        get: function() {
                            return this.props.scaleX;
                        },
                        set: function(value) {
                            this.props.scaleX !== value && (this.props.scaleX = value, this.setUpdateType(UpdateType.Local), 
                            this.updateIsSimple());
                        }
                    }, {
                        key: "scaleY",
                        get: function() {
                            return this.props.scaleY;
                        },
                        set: function(value) {
                            this.props.scaleY !== value && (this.props.scaleY = value, this.setUpdateType(UpdateType.Local), 
                            this.updateIsSimple());
                        }
                    }, {
                        key: "mount",
                        get: function() {
                            return this.props.mount;
                        },
                        set: function(value) {
                            this.props.mountX === value && this.props.mountY === value || (this.props.mountX = value, 
                            this.props.mountY = value, this.props.mount = value, this.setUpdateType(UpdateType.Local), 
                            this.updateIsSimple());
                        }
                    }, {
                        key: "mountX",
                        get: function() {
                            return this.props.mountX;
                        },
                        set: function(value) {
                            this.props.mountX !== value && (this.props.mountX = value, this.setUpdateType(UpdateType.Local), 
                            this.updateIsSimple());
                        }
                    }, {
                        key: "mountY",
                        get: function() {
                            return this.props.mountY;
                        },
                        set: function(value) {
                            this.props.mountY !== value && (this.props.mountY = value, this.setUpdateType(UpdateType.Local), 
                            this.updateIsSimple());
                        }
                    }, {
                        key: "pivot",
                        get: function() {
                            return this.props.pivot;
                        },
                        set: function(value) {
                            this.props.pivotX === value && this.props.pivotY === value || (this.props.pivotX = value, 
                            this.props.pivotY = value, this.props.pivot = value, this.setUpdateType(UpdateType.Local));
                        }
                    }, {
                        key: "pivotX",
                        get: function() {
                            return this.props.pivotX;
                        },
                        set: function(value) {
                            this.props.pivotX !== value && (this.props.pivotX = value, this.setUpdateType(UpdateType.Local));
                        }
                    }, {
                        key: "pivotY",
                        get: function() {
                            return this.props.pivotY;
                        },
                        set: function(value) {
                            this.props.pivotY !== value && (this.props.pivotY = value, this.setUpdateType(UpdateType.Local));
                        }
                    }, {
                        key: "rotation",
                        get: function() {
                            return this.props.rotation;
                        },
                        set: function(value) {
                            this.props.rotation !== value && (this.props.rotation = value, this.setUpdateType(UpdateType.Local), 
                            this.updateIsSimple());
                        }
                    }, {
                        key: "alpha",
                        get: function() {
                            return this.props.alpha;
                        },
                        set: function(value) {
                            this.props.alpha = value, this.setUpdateType(UpdateType.PremultipliedColors | UpdateType.WorldAlpha | UpdateType.Children | UpdateType.IsRenderable), 
                            this.childUpdateType |= UpdateType.WorldAlpha;
                        }
                    }, {
                        key: "ignoreParentAlpha",
                        get: function() {
                            return this.props.ignoreParentAlpha;
                        },
                        set: function(value) {
                            this.props.ignoreParentAlpha !== value && (this.props.ignoreParentAlpha = value, 
                            this.setUpdateType(UpdateType.PremultipliedColors | UpdateType.WorldAlpha | UpdateType.Children | UpdateType.IsRenderable), 
                            this.childUpdateType |= UpdateType.WorldAlpha);
                        }
                    }, {
                        key: "autosize",
                        get: function() {
                            return this.props.autosize;
                        },
                        set: function(value) {
                            this.props.autosize !== value && (this.props.autosize = value, !0 === value && null === this.autosizer ? this.autosizer = new Autosizer(this) : this.autosizer = null);
                        }
                    }, {
                        key: "boundsMargin",
                        get: function() {
                            var props = this.props;
                            if (null !== props.boundsMargin) return props.boundsMargin;
                            var parent = this.parent;
                            if (null !== parent) {
                                var margin = parent.boundsMargin;
                                if (void 0 !== margin) return margin;
                            }
                            return this.stage.boundsMargin;
                        },
                        set: function(value) {
                            if (value !== this.props.boundsMargin) {
                                if (null === value) this.props.boundsMargin = value; else {
                                    var bm = Array.isArray(value) ? value : [ value, value, value, value ];
                                    this.props.boundsMargin = bm;
                                }
                                this.setUpdateType(UpdateType.RenderBounds);
                            }
                        }
                    }, {
                        key: "clipping",
                        get: function() {
                            return this.props.clipping;
                        },
                        set: function(value) {
                            this.props.clipping !== value && (this.props.clipping = value, this.setUpdateType(UpdateType.Clipping | UpdateType.RenderBounds | UpdateType.Children), 
                            this.childUpdateType |= UpdateType.Global | UpdateType.Clipping);
                        }
                    }, {
                        key: "color",
                        get: function() {
                            return this.props.color;
                        },
                        set: function(value) {
                            var p = this.props;
                            if (p.color !== value) {
                                p.color = value;
                                var has = value > 0;
                                has !== this.hasColorProps && this.setUpdateType(UpdateType.IsRenderable), this.hasColorProps = has, 
                                p.colorTop !== value && (this.colorTop = value), p.colorBottom !== value && (this.colorBottom = value), 
                                p.colorLeft !== value && (this.colorLeft = value), p.colorRight !== value && (this.colorRight = value), 
                                this.setUpdateType(UpdateType.PremultipliedColors);
                            }
                        }
                    }, {
                        key: "placeholderColor",
                        get: function() {
                            return this.props.placeholderColor;
                        },
                        set: function(value) {
                            var p = this.props;
                            p.placeholderColor !== value && (p.placeholderColor = value, this.updatePlaceholderActive(), 
                            !0 === this.placeholderActive && this.setUpdateType(UpdateType.PremultipliedColors));
                        }
                    }, {
                        key: "colorTop",
                        get: function() {
                            return this.props.colorTop;
                        },
                        set: function(value) {
                            this.props.colorTl === value && this.props.colorTr === value || (this.colorTl = value, 
                            this.colorTr = value), this.props.colorTop = value, this.hasColorProps = value > 0, 
                            this.setUpdateType(UpdateType.PremultipliedColors | UpdateType.IsRenderable);
                        }
                    }, {
                        key: "colorBottom",
                        get: function() {
                            return this.props.colorBottom;
                        },
                        set: function(value) {
                            this.props.colorBl === value && this.props.colorBr === value || (this.colorBl = value, 
                            this.colorBr = value), this.props.colorBottom = value, this.hasColorProps = value > 0, 
                            this.setUpdateType(UpdateType.PremultipliedColors | UpdateType.IsRenderable);
                        }
                    }, {
                        key: "colorLeft",
                        get: function() {
                            return this.props.colorLeft;
                        },
                        set: function(value) {
                            this.props.colorTl === value && this.props.colorBl === value || (this.colorTl = value, 
                            this.colorBl = value), this.props.colorLeft = value, this.hasColorProps = value > 0, 
                            this.setUpdateType(UpdateType.PremultipliedColors | UpdateType.IsRenderable);
                        }
                    }, {
                        key: "colorRight",
                        get: function() {
                            return this.props.colorRight;
                        },
                        set: function(value) {
                            this.props.colorTr === value && this.props.colorBr === value || (this.colorTr = value, 
                            this.colorBr = value), this.props.colorRight = value, this.hasColorProps = value > 0, 
                            this.setUpdateType(UpdateType.PremultipliedColors | UpdateType.IsRenderable);
                        }
                    }, {
                        key: "colorTl",
                        get: function() {
                            return this.props.colorTl;
                        },
                        set: function(value) {
                            this.props.colorTl = value, this.hasColorProps = value > 0, this.setUpdateType(UpdateType.PremultipliedColors | UpdateType.IsRenderable);
                        }
                    }, {
                        key: "colorTr",
                        get: function() {
                            return this.props.colorTr;
                        },
                        set: function(value) {
                            this.props.colorTr = value, this.hasColorProps = value > 0, this.setUpdateType(UpdateType.PremultipliedColors | UpdateType.IsRenderable);
                        }
                    }, {
                        key: "colorBl",
                        get: function() {
                            return this.props.colorBl;
                        },
                        set: function(value) {
                            this.props.colorBl = value, this.hasColorProps = value > 0, this.setUpdateType(UpdateType.PremultipliedColors | UpdateType.IsRenderable);
                        }
                    }, {
                        key: "colorBr",
                        get: function() {
                            return this.props.colorBr;
                        },
                        set: function(value) {
                            this.props.colorBr = value, this.hasColorProps = value > 0, this.setUpdateType(UpdateType.PremultipliedColors | UpdateType.IsRenderable);
                        }
                    }, {
                        key: "zIndex",
                        get: function() {
                            return this.props.zIndex;
                        },
                        set: function(value) {
                            var sanitizedValue = value;
                            if ((isNaN(sanitizedValue) || !1 === Number.isFinite(sanitizedValue)) && (console.warn("zIndex was set to an invalid value: ".concat(value, ", defaulting to 0")), 
                            sanitizedValue = 0), sanitizedValue > Number.MAX_SAFE_INTEGER ? sanitizedValue = 1e3 : sanitizedValue < Number.MIN_SAFE_INTEGER && (sanitizedValue = -1e3), 
                            this.props.zIndex !== sanitizedValue) {
                                this.props.zIndex = sanitizedValue;
                                var parent = this.parent;
                                null !== parent && parent.setUpdateType(UpdateType.SortZIndexChildren);
                            }
                        }
                    }, {
                        key: "parent",
                        get: function() {
                            return this.props.parent;
                        },
                        set: function(newParent) {
                            var oldParent = this.props.parent;
                            oldParent !== newParent && (this.props.parent = newParent, oldParent && oldParent.removeChild(this, newParent), 
                            null !== newParent && newParent.addChild(this, oldParent), this.setUpdateType(UpdateType.Global | UpdateType.RenderBounds));
                        }
                    }, {
                        key: "rtt",
                        get: function() {
                            return this.props.rtt;
                        },
                        set: function(value) {
                            this.props.rtt !== value && (this.props.rtt = value, !0 === value ? (this.initRenderTexture(), 
                            this.markChildrenWithRTT()) : this.cleanupRenderTexture(), this.setUpdateType(UpdateType.RenderTexture), 
                            !0 === this.parentHasRenderTexture && this.notifyParentRTTOfUpdate());
                        }
                    }, {
                        key: "preventDestroy",
                        get: function() {
                            return this.props.preventDestroy;
                        },
                        set: function(value) {
                            this.props.preventDestroy = value;
                        }
                    }, {
                        key: "initRenderTexture",
                        value: function() {
                            this.framebufferDimensions = {
                                w: this.props.w,
                                h: this.props.h
                            }, this.texture = this.stage.txManager.createTexture("RenderTexture", this.framebufferDimensions), 
                            this.stage.renderer.renderToTexture(this);
                        }
                    }, {
                        key: "cleanupRenderTexture",
                        value: function() {
                            this.unloadTexture(), this.clearRTTInheritance(), this.hasRTTupdates = !1, this.texture = null, 
                            this.framebufferDimensions = null;
                        }
                    }, {
                        key: "markChildrenWithRTT",
                        value: function() {
                            var _step14, _iterator14 = _createForOfIteratorHelper(((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null) || this).children);
                            try {
                                for (_iterator14.s(); !(_step14 = _iterator14.n()).done; ) {
                                    var child = _step14.value;
                                    child.setUpdateType(UpdateType.All), child.parentHasRenderTexture = !0, child.markChildrenWithRTT();
                                }
                            } catch (err) {
                                _iterator14.e(err);
                            } finally {
                                _iterator14.f();
                            }
                        }
                    }, {
                        key: "applyRTTInheritance",
                        value: function(parent) {
                            parent.rtt && parent.setUpdateType(UpdateType.RenderTexture), this.markChildrenWithRTT(parent);
                        }
                    }, {
                        key: "clearRTTInheritance",
                        value: function() {
                            if (!this.rtt) {
                                var _step15, ancestorRTT = this.findParentRTTNode(), _iterator15 = _createForOfIteratorHelper(this.children);
                                try {
                                    for (_iterator15.s(); !(_step15 = _iterator15.n()).done; ) {
                                        var child = _step15.value;
                                        null !== ancestorRTT ? (child.parentHasRenderTexture = !0, child.rttParent = ancestorRTT) : (child.parentHasRenderTexture = !1, 
                                        child.rttParent = null), child.setUpdateType(UpdateType.All), child.clearRTTInheritance();
                                    }
                                } catch (err) {
                                    _iterator15.e(err);
                                } finally {
                                    _iterator15.f();
                                }
                            }
                        }
                    }, {
                        key: "shader",
                        get: function() {
                            return this.props.shader;
                        },
                        set: function(shader) {
                            if (null === shader) {
                                var def = this.stage.defShaderNode;
                                if (this.props.shader === def) return;
                                return this.hasShaderUpdater = !1, this.hasShaderTimeFn = !1, this.stage.untrackTimedNode(this), 
                                this.props.shader = def, void this.setUpdateType(UpdateType.IsRenderable);
                            }
                            this.props.shader !== shader && (this.hasShaderUpdater = void 0 !== shader.update, 
                            this.hasShaderTimeFn = void 0 !== shader.time, "default" !== shader.shaderKey && shader.attachNode(this), 
                            !0 === this.hasShaderTimeFn ? this.stage.trackTimedNode(this) : this.stage.untrackTimedNode(this), 
                            this.props.shader = shader, this.setUpdateType(UpdateType.IsRenderable | UpdateType.RecalcUniforms));
                        }
                    }, {
                        key: "src",
                        get: function() {
                            return this.props.src;
                        },
                        set: function(imageUrl) {
                            this.props.src !== imageUrl && (this.props.src = imageUrl, this.texture = imageUrl ? this.stage.txManager.createTexture("ImageTexture", {
                                src: imageUrl,
                                w: this.props.w,
                                h: this.props.h,
                                type: this.props.imageType,
                                sx: this.props.srcX,
                                sy: this.props.srcY,
                                sw: this.props.srcWidth,
                                sh: this.props.srcHeight
                            }) : null);
                        }
                    }, {
                        key: "imageType",
                        get: function() {
                            return this.props.imageType || null;
                        },
                        set: function(type) {
                            this.props.imageType !== type && (this.props.imageType = type);
                        }
                    }, {
                        key: "srcHeight",
                        get: function() {
                            return this.props.srcHeight;
                        },
                        set: function(value) {
                            this.props.srcHeight = value;
                        }
                    }, {
                        key: "srcWidth",
                        get: function() {
                            return this.props.srcWidth;
                        },
                        set: function(value) {
                            this.props.srcWidth = value;
                        }
                    }, {
                        key: "srcX",
                        get: function() {
                            return this.props.srcX;
                        },
                        set: function(value) {
                            this.props.srcX = value;
                        }
                    }, {
                        key: "srcY",
                        get: function() {
                            return this.props.srcY;
                        },
                        set: function(value) {
                            this.props.srcY = value;
                        }
                    }, {
                        key: "parentFramebufferDimensions",
                        get: function() {
                            return null !== this.rttParent ? this.rttParent.framebufferDimensions : (this.rttParent = this.findParentRTTNode(), 
                            this.rttParent ? this.rttParent.framebufferDimensions : null);
                        }
                    }, {
                        key: "parentRenderTexture",
                        get: function() {
                            for (var parent = this.parent; parent; ) {
                                if (parent.rtt) return parent;
                                parent = parent.parent;
                            }
                            return null;
                        }
                    }, {
                        key: "texture",
                        get: function() {
                            return this.props.texture;
                        },
                        set: function(value) {
                            var _this$texture2;
                            this.props.texture !== value && (this.props.texture && (this.unloadTexture(), null !== this.autosizer && null === value && this.autosizer.setMode(AutosizeMode.Children)), 
                            this.textureCoords = void 0, this.props.texture = value, this.textureLoaded = null !== value && "loaded" === value.state, 
                            this.updatePlaceholderActive(), null !== value && (null !== this.autosizer && this.autosizer.setMode(AutosizeMode.Texture), 
                            value.setRenderableOwner(this._id, this.isRenderable), this.textureOwnership = this.isRenderable, 
                            this.loadTexture()), (null == (_this$texture2 = this.texture) ? void 0 : _this$texture2.type) === TextureType.subTexture && this.textureLoaded && (this.isQuadDirty = !0), 
                            this.setUpdateType(UpdateType.IsRenderable), this.updateIsSimple());
                        }
                    }, {
                        key: "textureOptions",
                        get: function() {
                            return this.props.textureOptions;
                        },
                        set: function(value) {
                            this.props.textureOptions = value, !0 === this.stage.calculateTextureCoord && null !== value && (this.textureCoords = this.stage.renderer.getTextureCoords(this)), 
                            this.updateIsSimple();
                        }
                    }, {
                        key: "componentName",
                        get: function() {
                            return this.props.componentName;
                        }
                    }, {
                        key: "componentLocation",
                        get: function() {
                            return this.props.componentLocation;
                        }
                    }, {
                        key: "setRTTUpdates",
                        value: function(type) {
                            var _this$parent;
                            this.hasRTTupdates = !0, null == (_this$parent = this.parent) || _this$parent.setRTTUpdates(type);
                        }
                    }, {
                        key: "animate",
                        value: function(props, settings) {
                            return createAnimation(this.stage.animationManager, this, props, settings);
                        }
                    }, {
                        key: "animateProp",
                        value: function(name, value, settings) {
                            var animations = this._animations;
                            if (null !== animations) {
                                var existing = animations[name];
                                if (existing && existing.settings === settings) {
                                    var _controller = existing.controller, values = _controller.props ? _controller.props[name] : null;
                                    if (values) {
                                        var _this$name;
                                        if (values.start = null !== (_this$name = this[name]) && void 0 !== _this$name ? _this$name : 0, 
                                        values.target = value, _controller.progress = 0, !0 === settings.adaptiveDuration) {
                                            var _settings$duration, now = performance.now(), elapsed = now - _controller.lastRunTime;
                                            _controller.lastRunTime = now;
                                            var duration = null !== (_settings$duration = settings.duration) && void 0 !== _settings$duration ? _settings$duration : _controller.duration;
                                            _controller.duration = elapsed < duration ? elapsed : duration;
                                        }
                                        return _controller.start();
                                    }
                                }
                            } else animations = this._animations = {};
                            var animationProps = _defineProperty({}, name, value), controller = createAnimation(this.stage.animationManager, this, animationProps, settings);
                            return animations[name] = {
                                controller: controller,
                                settings: settings
                            }, controller.start();
                        }
                    }, {
                        key: "animateToTarget",
                        value: function(prop) {
                            var _animation$controller, animations = this._animations;
                            if (null !== animations) {
                                var animation = animations[prop];
                                if (animation) return null == (_animation$controller = animation.controller.props) || null == (_animation$controller = _animation$controller[prop]) ? void 0 : _animation$controller.target;
                            }
                        }
                    }, {
                        key: "flush",
                        value: function() {}
                    }, {
                        key: "addTexture",
                        value: function(texture) {
                            for (var textures = this.renderOpTextures, length = textures.length, i = 0; i < length; i++) if (textures[i] === texture) return i;
                            return length >= 1 ? 4294967295 : (textures.push(texture), length);
                        }
                    }, {
                        key: "draw",
                        value: function(renderer) {
                            var glw = renderer.glw, options = renderer.options, stage = renderer.stage, shader = this.props.shader;
                            if (stage.shManager.useShader(shader.program), shader.program.bindRenderOp(this), 
                            !0 === this.clippingRect.valid) {
                                var pixelRatio = this.parentHasRenderTexture ? 1 : stage.pixelRatio, clipX = Math.round(this.clippingRect.x * pixelRatio), clipWidth = Math.round(this.clippingRect.w * pixelRatio), clipHeight = Math.round(this.clippingRect.h * pixelRatio), clipY = Math.round(options.canvas.height - clipHeight - this.clippingRect.y * pixelRatio);
                                if (this.parentHasRenderTexture) {
                                    var parentFramebufferDimensions = this.parentFramebufferDimensions;
                                    clipY = null !== parentFramebufferDimensions ? parentFramebufferDimensions.h - this.props.h : 0;
                                }
                                glw.setScissorTest(!0), glw.scissor(clipX, clipY, clipWidth, clipHeight);
                            } else glw.setScissorTest(!1);
                            var quadIdx = this.renderOpBufferIdx / 20 * 6 * 2;
                            glw.drawElements(glw.TRIANGLES, 6 * this.numQuads, glw.UNSIGNED_SHORT, quadIdx);
                        }
                    } ]);
                }(EventEmitter), AnimationManager = function() {
                    return _createClass(function() {
                        this.activeAnimations = [];
                    }, [ {
                        key: "registerAnimation",
                        value: function(animation) {
                            this.activeAnimations.includes(animation) || this.activeAnimations.push(animation);
                        }
                    }, {
                        key: "unregisterAnimation",
                        value: function(animation) {
                            var idx = this.activeAnimations.indexOf(animation);
                            -1 !== idx && this.activeAnimations.splice(idx, 1);
                        }
                    }, {
                        key: "update",
                        value: function(dt) {
                            for (var i = this.activeAnimations.length - 1; i >= 0; i--) {
                                var anim = this.activeAnimations[i];
                                if (anim) if (anim.node.destroyed) anim.stop(); else {
                                    var duration = anim.duration, loop = anim.loop, remainingDt = dt;
                                    if (anim.delayFor > 0) {
                                        if (anim.delayFor -= remainingDt, anim.delayFor >= 0) continue;
                                        remainingDt = -anim.delayFor, anim.delayFor = 0;
                                    }
                                    0 === anim.progress && "scheduled" === anim.state && (anim.state = "running"), 0 === duration ? anim.progress = 1 : anim.progress += remainingDt / duration;
                                    var isFinished = !1;
                                    anim.progress >= 1 && (loop ? (anim.progress = anim.progress % 1, anim.delayFor = anim.delay) : (anim.progress = 1, 
                                    isFinished = !0)), this.applyValues(anim), isFinished && ("reverse" === anim.stopMethod ? (this.reverseValues(anim), 
                                    anim.progress = 0, anim.delayFor = anim.delay) : anim.stop());
                                }
                            }
                        }
                    }, {
                        key: "applyValues",
                        value: function(anim) {
                            var easedProgress = anim.timingFunction(anim.progress) || anim.progress;
                            if (anim.props) for (var key in anim.props) {
                                var value = anim.props[key];
                                1 === anim.progress ? anim.node[key] = value.target : 0 === anim.progress ? anim.node[key] = value.start : value.isColor ? anim.node[key] = mergeColorProgress(value.start, value.target, easedProgress) : anim.node[key] = value.start + (value.target - value.start) * easedProgress;
                            }
                            if (anim.shaderProps && anim.node.shader) {
                                var updated = !1;
                                for (var _key7 in anim.shaderProps) {
                                    var _value = anim.shaderProps[_key7];
                                    1 === anim.progress ? anim.node.shader.props[_key7] = _value.target : 0 === anim.progress ? anim.node.shader.props[_key7] = _value.start : _value.isColor ? anim.node.shader.props[_key7] = mergeColorProgress(_value.start, _value.target, easedProgress) : anim.node.shader.props[_key7] = _value.start + (_value.target - _value.start) * easedProgress, 
                                    updated = !0;
                                }
                                updated && anim.node.setUpdateType(4096);
                            }
                        }
                    }, {
                        key: "reverseValues",
                        value: function(anim) {
                            if (anim.props) for (var key in anim.props) {
                                var v = anim.props[key], t = v.start;
                                v.start = v.target, v.target = t;
                            }
                            if (anim.shaderProps) for (var _key8 in anim.shaderProps) {
                                var _v3 = anim.shaderProps[_key8], _t = _v3.start;
                                _v3.start = _v3.target, _v3.target = _t;
                            }
                            anim.loop || (anim.stopMethod = !1);
                        }
                    } ]);
                }(), ImageWorkerManager = function() {
                    return _createClass(function(numImageWorkers, createImageBitmapSupport) {
                        this.messageManager = {}, this.workers = [], this.workerLoad = [], this.nextId = 0, 
                        this.maxWorkers = void 0, this.workerBlob = null, this.createImageBitmapSupport = void 0, 
                        this.maxWorkers = numImageWorkers, this.createImageBitmapSupport = createImageBitmapSupport;
                    }, [ {
                        key: "spawnWorkers",
                        value: function() {
                            if (!(this.workers.length > 0)) {
                                this.workerBlob = this.createWorkerBlob(this.createImageBitmapSupport);
                                for (var i = 0; i < this.maxWorkers; i++) this.spawnWorker();
                            }
                        }
                    }, {
                        key: "handleMessage",
                        value: function(event, workerIndex) {
                            var _event$data = event.data, id = _event$data.id, data = _event$data.data, error = _event$data.error, msg = this.messageManager[id];
                            if (this.workerLoad[workerIndex] && this.workerLoad[workerIndex]--, msg) {
                                var _msg = _slicedToArray(msg, 2), resolve = _msg[0], reject = _msg[1];
                                delete this.messageManager[id], error ? reject(new Error(error)) : resolve(data);
                            }
                        }
                    }, {
                        key: "handleWorkerError",
                        value: function(event, workerIndex) {
                            var message = event instanceof ErrorEvent && event.message ? event.message : "Image worker encountered an unrecoverable error";
                            for (var id in this.messageManager) {
                                var msg = this.messageManager[id];
                                if (msg) {
                                    var reject = _slicedToArray(msg, 2)[1];
                                    delete this.messageManager[id], reject(new Error(message));
                                }
                            }
                            this.workerLoad[workerIndex] = 0;
                        }
                    }, {
                        key: "createWorkerBlob",
                        value: function(createImageBitmapSupport) {
                            var workerCode = "(".concat(createImageWorker.toString(), ")()");
                            return !0 === createImageBitmapSupport.options && (workerCode = workerCode.replace("var supportsOptionsCreateImageBitmap = false;", "var supportsOptionsCreateImageBitmap = true;")), 
                            !0 === createImageBitmapSupport.full && (workerCode = (workerCode = workerCode.replace("var supportsOptionsCreateImageBitmap = false;", "var supportsOptionsCreateImageBitmap = true;")).replace("var supportsFullCreateImageBitmap = false;", "var supportsFullCreateImageBitmap = true;")), 
                            !1 === createImageBitmapSupport.premultiplyHonored && (workerCode = workerCode.replace("var premultiplyAlphaHonored = true;", "var premultiplyAlphaHonored = false;")), 
                            workerCode = workerCode.replace('"use strict";', ""), new Blob([ workerCode ], {
                                type: "application/javascript"
                            });
                        }
                    }, {
                        key: "spawnWorker",
                        value: function() {
                            var _this7 = this;
                            if (!(null === this.workerBlob || this.workers.length >= this.maxWorkers)) {
                                var index = this.workers.length, urlFactory = self.URL ? URL : webkitURL, blobURL = urlFactory.createObjectURL(this.workerBlob), worker = new Worker(blobURL);
                                urlFactory.revokeObjectURL(blobURL), worker.onmessage = function(event) {
                                    return _this7.handleMessage(event, index);
                                }, worker.onerror = function(event) {
                                    return _this7.handleWorkerError(event, index);
                                }, worker.onmessageerror = function(event) {
                                    return _this7.handleWorkerError(event, index);
                                }, this.workers.push(worker), this.workerLoad.push(0), this.workers.length >= this.maxWorkers && (this.workerBlob = null);
                            }
                        }
                    }, {
                        key: "getNextWorkerIndex",
                        value: function() {
                            if (0 === this.workers.length) return -1;
                            for (var minLoad = 1 / 0, workerIndex = 0, i = 0; i < this.workers.length; i++) {
                                var load = this.workerLoad[i] || 0;
                                if (0 === load) return i;
                                load < minLoad && (minLoad = load, workerIndex = i);
                            }
                            return workerIndex;
                        }
                    }, {
                        key: "getImage",
                        value: function(src, premultiplyAlpha, sx, sy, sw, sh) {
                            var _this8 = this;
                            return new Promise(function(resolve, reject) {
                                try {
                                    var nextWorkerIndex = _this8.getNextWorkerIndex();
                                    if (-1 === nextWorkerIndex && (_this8.spawnWorkers(), nextWorkerIndex = _this8.getNextWorkerIndex()), 
                                    -1 === nextWorkerIndex) return void reject(new Error("No image workers available"));
                                    var id = _this8.nextId++;
                                    _this8.messageManager[id] = [ resolve, reject ];
                                    var worker = _this8.workers[nextWorkerIndex];
                                    _this8.workerLoad[nextWorkerIndex]++, worker.postMessage({
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
                }(), ColorTexture = function(_Texture) {
                    function ColorTexture(txManager, props) {
                        var _this9;
                        return (_this9 = _callSuper(this, ColorTexture, [ txManager ])).type = TextureType.color, 
                        _this9.props = void 0, _this9.props = props, _this9;
                    }
                    return _inherits(ColorTexture, _Texture), _createClass(ColorTexture, [ {
                        key: "color",
                        get: function() {
                            return this.props.color;
                        },
                        set: function(color) {
                            this.props.color = color;
                        }
                    }, {
                        key: "getTextureSource",
                        value: (_getTextureSource = _asyncToGenerator(_regenerator().m(function _callee2() {
                            var pixelData;
                            return _regenerator().w(function(_context3) {
                                for (;;) if (0 === _context3.n) return pixelData = new Uint8Array(4), 4294967295 === this.color ? (pixelData[0] = 255, 
                                pixelData[1] = 255, pixelData[2] = 255, pixelData[3] = 255) : (pixelData[0] = this.color >> 16 & 255, 
                                pixelData[1] = this.color >> 8 & 255, pixelData[2] = 255 & this.color, pixelData[3] = this.color >>> 24 & 255), 
                                this.setState("fetched", {
                                    w: 1,
                                    h: 1
                                }), _context3.a(2, {
                                    data: pixelData,
                                    premultiplyAlpha: !0
                                });
                            }, _callee2, this);
                        })), function() {
                            return _getTextureSource.apply(this, arguments);
                        })
                    } ], [ {
                        key: "makeCacheKey",
                        value: function(props) {
                            return "ColorTexture,".concat(props.color || 4294967295);
                        }
                    }, {
                        key: "resolveDefaults",
                        value: function(props) {
                            return {
                                color: props.color || 4294967295
                            };
                        }
                    } ]);
                    var _getTextureSource;
                }(Texture), ColorTexture.z$__type__Props = void 0, PVR_TO_GL_INTERNAL_FORMAT = {
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
                }, ASTC_TO_GL_INTERNAL_FORMAT = {
                    "4x4": 37808,
                    "5x5": 37809,
                    "6x6": 37810,
                    "8x8": 37811,
                    "10x10": 37812,
                    "12x12": 37813
                }, KTX_IDENTIFIER = [ 171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10 ], loadCompressedTexture = function() {
                    var _ref18 = _asyncToGenerator(_regenerator().m(function _callee3(url) {
                        var arrayBuffer, view, magic, isKTX, i, _t2;
                        return _regenerator().w(function(_context4) {
                            for (;;) switch (_context4.p = _context4.n) {
                              case 0:
                                return _context4.p = 0, _context4.n = 1, new Promise(function(resolve, reject) {
                                    var xhr = new XMLHttpRequest;
                                    xhr.open("GET", url, !0), xhr.responseType = "arraybuffer", xhr.onload = function() {
                                        xhr.status >= 200 && xhr.status < 300 || 0 === xhr.status ? resolve(xhr.response) : reject(new Error("Failed to fetch compressed texture: ".concat(xhr.status, " ").concat(xhr.statusText)));
                                    }, xhr.onerror = function() {
                                        reject(new Error("Network error occurred while trying to fetch the compressed texture."));
                                    }, xhr.send(null);
                                });

                              case 1:
                                if (!((arrayBuffer = _context4.v).byteLength < 16)) {
                                    _context4.n = 2;
                                    break;
                                }
                                throw new Error("File too small to be a valid compressed texture (".concat(arrayBuffer.byteLength, " bytes). Expected at least 16 bytes for header inspection."));

                              case 2:
                                if (view = new DataView(arrayBuffer), 55727696 !== (magic = view.getUint32(0, !0))) {
                                    _context4.n = 3;
                                    break;
                                }
                                return _context4.a(2, loadPVR(view));

                              case 3:
                                if (1554098963 !== magic) {
                                    _context4.n = 4;
                                    break;
                                }
                                return _context4.a(2, loadASTC(view));

                              case 4:
                                isKTX = !0, i = 0;

                              case 5:
                                if (!(i < KTX_IDENTIFIER.length)) {
                                    _context4.n = 7;
                                    break;
                                }
                                if (view.getUint8(i) === KTX_IDENTIFIER[i]) {
                                    _context4.n = 6;
                                    break;
                                }
                                return isKTX = !1, _context4.a(3, 7);

                              case 6:
                                i++, _context4.n = 5;
                                break;

                              case 7:
                                if (!0 !== isKTX) {
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
                                throw _context4.p = 10, _t2 = _context4.v, new Error("Failed to load compressed texture from ".concat(url, ": ").concat(_t2));

                              case 11:
                                return _context4.a(2);
                            }
                        }, _callee3, null, [ [ 0, 10 ] ]);
                    }));
                    return function(_x5) {
                        return _ref18.apply(this, arguments);
                    };
                }(), loadASTC = function() {
                    var _ref19 = _asyncToGenerator(_regenerator().m(function _callee4(view) {
                        var blockX, blockY, sizeX, sizeY, expected, dataSize, internalFormat, buffer, mipmaps;
                        return _regenerator().w(function(_context5) {
                            for (;;) switch (_context5.n) {
                              case 0:
                                if (blockX = view.getUint8(4), blockY = view.getUint8(5), sizeX = readUint24(view, 7), 
                                sizeY = readUint24(view, 10), 0 !== sizeX && 0 !== sizeY) {
                                    _context5.n = 1;
                                    break;
                                }
                                throw new Error("Invalid ASTC texture dimensions: ".concat(sizeX, "x").concat(sizeY));

                              case 1:
                                if (expected = Math.ceil(sizeX / blockX) * Math.ceil(sizeY / blockY) * 16, dataSize = view.byteLength - 16, 
                                expected === dataSize) {
                                    _context5.n = 2;
                                    break;
                                }
                                throw new Error("Invalid ASTC texture data size: expected ".concat(expected, ", got ").concat(dataSize));

                              case 2:
                                if (void 0 !== (internalFormat = ASTC_TO_GL_INTERNAL_FORMAT["".concat(blockX, "x").concat(blockY)])) {
                                    _context5.n = 3;
                                    break;
                                }
                                throw new Error("Unsupported ASTC block size: ".concat(blockX, "x").concat(blockY));

                              case 3:
                                return buffer = view.buffer, (mipmaps = []).push(buffer.slice(16)), _context5.a(2, {
                                    data: {
                                        blockInfo: blockInfoMap[internalFormat],
                                        glInternalFormat: internalFormat,
                                        mipmaps: mipmaps,
                                        w: sizeX,
                                        h: sizeY,
                                        type: "astc"
                                    },
                                    premultiplyAlpha: !1
                                });
                            }
                        }, _callee4);
                    }));
                    return function(_x6) {
                        return _ref19.apply(this, arguments);
                    };
                }(), EXT_ASTC = [ "WEBGL_compressed_texture_astc" ], EXT_S3TC = [ "WEBGL_compressed_texture_s3tc" ], 
                EXT_ETC1 = [ "WEBGL_compressed_texture_etc1" ], EXT_ETC = [ "WEBGL_compressed_texture_etc" ], 
                EXT_PVRTC = [ "WEBGL_compressed_texture_pvrtc", "WEBKIT_WEBGL_compressed_texture_pvrtc" ], 
                EXT_NONE = [], requiredExtensionsForFormat = function(glInternalFormat) {
                    return glInternalFormat >= 37808 && glInternalFormat <= 37845 ? EXT_ASTC : glInternalFormat >= 33776 && glInternalFormat <= 33779 ? EXT_S3TC : 36196 === glInternalFormat ? EXT_ETC1 : glInternalFormat >= 37492 && glInternalFormat <= 37497 ? EXT_ETC : glInternalFormat >= 35840 && glInternalFormat <= 35843 ? EXT_PVRTC : EXT_NONE;
                }, ensureCompressedFormatEnabled = function(glw, glInternalFormat) {
                    var names = requiredExtensionsForFormat(glInternalFormat), len = names.length;
                    if (0 !== len) {
                        for (var i = 0; i < len; i++) if (null !== glw.getExtension(names[i])) return;
                        throw new Error("Compressed texture format 0x".concat(glInternalFormat.toString(16), " is not supported by this device (requires ").concat(names.join(" or "), ")"));
                    }
                }, uploadASTC = function(glw, texture, data) {
                    var glInternalFormat = data.glInternalFormat, mipmaps = data.mipmaps, w = data.w, h = data.h;
                    if (ensureCompressedFormatEnabled(glw, glInternalFormat), glw.bindTexture(texture), 
                    void 0 !== mipmaps) {
                        var view = new Uint8Array(mipmaps[0]);
                        glw.compressedTexImage2D(0, glInternalFormat, w, h, 0, view), glw.texParameteri(glw.TEXTURE_WRAP_S, glw.CLAMP_TO_EDGE), 
                        glw.texParameteri(glw.TEXTURE_WRAP_T, glw.CLAMP_TO_EDGE), glw.texParameteri(glw.TEXTURE_MAG_FILTER, glw.LINEAR), 
                        glw.texParameteri(glw.TEXTURE_MIN_FILTER, glw.LINEAR);
                    }
                }, loadKTX = function() {
                    var _ref20 = _asyncToGenerator(_regenerator().m(function _callee5(view) {
                        var endianness, littleEndian, glType, glFormat, glInternalFormat, width, height, mipmapLevels, bytesOfKeyValueData, mipmaps, buffer, offset, i, imageSize, end;
                        return _regenerator().w(function(_context6) {
                            for (;;) switch (_context6.n) {
                              case 0:
                                if (endianness = view.getUint32(12, !0), !1 !== (littleEndian = 67305985 === endianness) || 16909060 === endianness) {
                                    _context6.n = 1;
                                    break;
                                }
                                throw new Error("Invalid KTX endianness value");

                              case 1:
                                if (glType = view.getUint32(16, littleEndian), glFormat = view.getUint32(24, littleEndian), 
                                0 === glType && 0 === glFormat) {
                                    _context6.n = 2;
                                    break;
                                }
                                throw new Error("KTX texture is not compressed (glType: ".concat(glType, ", glFormat: ").concat(glFormat, ")"));

                              case 2:
                                if (glInternalFormat = view.getUint32(28, littleEndian), void 0 !== blockInfoMap[glInternalFormat]) {
                                    _context6.n = 3;
                                    break;
                                }
                                throw new Error("Unsupported KTX compressed texture format: 0x".concat(glInternalFormat.toString(16)));

                              case 3:
                                if (width = view.getUint32(36, littleEndian), height = view.getUint32(40, littleEndian), 
                                0 !== width && 0 !== height) {
                                    _context6.n = 4;
                                    break;
                                }
                                throw new Error("Invalid KTX texture dimensions: ".concat(width, "x").concat(height));

                              case 4:
                                if (0 !== (mipmapLevels = view.getUint32(56, littleEndian))) {
                                    _context6.n = 5;
                                    break;
                                }
                                throw new Error("KTX texture has no mipmap levels");

                              case 5:
                                if (bytesOfKeyValueData = view.getUint32(60, littleEndian), mipmaps = [], buffer = view.buffer, 
                                !((offset = 64 + bytesOfKeyValueData) > view.byteLength)) {
                                    _context6.n = 6;
                                    break;
                                }
                                throw new Error("Invalid KTX file: key/value data exceeds file size");

                              case 6:
                                for (i = 0; i < mipmapLevels; i++) imageSize = view.getUint32(offset, littleEndian), 
                                end = (offset += 4) + imageSize, mipmaps.push(buffer.slice(offset, end)), (offset = end) % 4 != 0 && (offset += 4 - offset % 4);
                                return _context6.a(2, {
                                    data: {
                                        blockInfo: blockInfoMap[glInternalFormat],
                                        glInternalFormat: glInternalFormat,
                                        mipmaps: mipmaps,
                                        w: width,
                                        h: height,
                                        type: "ktx"
                                    },
                                    premultiplyAlpha: !1
                                });
                            }
                        }, _callee5);
                    }));
                    return function(_x7) {
                        return _ref20.apply(this, arguments);
                    };
                }(), uploadKTX = function(glw, texture, data) {
                    var glInternalFormat = data.glInternalFormat, mipmaps = data.mipmaps, width = data.w, height = data.h, blockInfo = data.blockInfo;
                    if (ensureCompressedFormatEnabled(glw, glInternalFormat), void 0 !== mipmaps) {
                        glw.bindTexture(texture);
                        for (var blockWidth = blockInfo.width, blockHeight = blockInfo.height, w = width, h = height, i = 0; i < mipmaps.length; i++) {
                            var view = new Uint8Array(mipmaps[i]), uploadW = Math.ceil(w / blockWidth) * blockWidth, uploadH = Math.ceil(h / blockHeight) * blockHeight, expectedBytes = Math.ceil(w / blockWidth) * Math.ceil(h / blockHeight) * blockInfo.bytes;
                            if (view.byteLength < expectedBytes) {
                                var padded = new Uint8Array(expectedBytes);
                                padded.set(view), view = padded;
                            }
                            glw.compressedTexImage2D(i, glInternalFormat, uploadW, uploadH, 0, view), w = Math.max(1, w >> 1), 
                            h = Math.max(1, h >> 1);
                        }
                        glw.texParameteri(glw.TEXTURE_WRAP_S, glw.CLAMP_TO_EDGE), glw.texParameteri(glw.TEXTURE_WRAP_T, glw.CLAMP_TO_EDGE), 
                        glw.texParameteri(glw.TEXTURE_MAG_FILTER, glw.LINEAR), glw.texParameteri(glw.TEXTURE_MIN_FILTER, mipmaps.length > 1 ? glw.LINEAR_MIPMAP_LINEAR : glw.LINEAR);
                    }
                }, loadPVR = function() {
                    var _ref21 = _asyncToGenerator(_regenerator().m(function _callee6(view) {
                        var pixelFormatLow, internalFormat, height, width, mipmapLevels, metadataSize, buffer, offset, mipmaps, block, i, declaredSize, max, start, end, computed, _computed;
                        return _regenerator().w(function(_context7) {
                            for (;;) switch (_context7.n) {
                              case 0:
                                if (pixelFormatLow = view.getUint32(8, !0), void 0 !== (internalFormat = PVR_TO_GL_INTERNAL_FORMAT[pixelFormatLow])) {
                                    _context7.n = 1;
                                    break;
                                }
                                throw new Error("Unsupported PVR pixel format: 0x".concat(pixelFormatLow.toString(16)));

                              case 1:
                                if (height = view.getInt32(24, !0), 0 !== (width = view.getInt32(28, !0)) && 0 !== height) {
                                    _context7.n = 2;
                                    break;
                                }
                                throw new Error("Invalid PVR texture dimensions: ".concat(width, "x").concat(height));

                              case 2:
                                if (mipmapLevels = view.getInt32(44, !0), metadataSize = view.getUint32(48, !0), 
                                buffer = view.buffer, !((offset = 52 + metadataSize) > buffer.byteLength)) {
                                    _context7.n = 3;
                                    break;
                                }
                                throw new Error("Invalid PVR file: metadata exceeds file size");

                              case 3:
                                mipmaps = [], block = blockInfoMap[internalFormat], i = 0;

                              case 4:
                                if (!(i < mipmapLevels)) {
                                    _context7.n = 8;
                                    break;
                                }
                                if (declaredSize = view.getUint32(offset, !0), max = buffer.byteLength - (offset + 4), 
                                !(declaredSize > 0 && declaredSize <= max)) {
                                    _context7.n = 5;
                                    break;
                                }
                                return start = offset += 4, end = offset + declaredSize, mipmaps.push(buffer.slice(start, end)), 
                                offset = (offset = end) + 3 & -4, _context7.a(3, 7);

                              case 5:
                                if (0 !== pixelFormatLow && 1 !== pixelFormatLow && 2 !== pixelFormatLow && 3 !== pixelFormatLow) {
                                    _context7.n = 6;
                                    break;
                                }
                                return computed = pvrtcMipSize(width >> i, height >> i, 0 === pixelFormatLow || 1 === pixelFormatLow ? 2 : 4), 
                                mipmaps.push(buffer.slice(offset, offset + computed)), offset = (offset += computed) + 3 & -4, 
                                _context7.a(3, 7);

                              case 6:
                                void 0 !== block && (_computed = Math.ceil((width >> i) / block.width) * Math.ceil((height >> i) / block.height) * block.bytes, 
                                mipmaps.push(buffer.slice(offset, offset + _computed)), offset = (offset += _computed) + 3 & -4);

                              case 7:
                                i++, _context7.n = 4;
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
                                    premultiplyAlpha: !1
                                });
                            }
                        }, _callee6);
                    }));
                    return function(_x8) {
                        return _ref21.apply(this, arguments);
                    };
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
                }, _export("xt", {
                    ktx: uploadKTX,
                    pvr: function(glw, texture, data) {
                        var glInternalFormat = data.glInternalFormat, mipmaps = data.mipmaps, width = data.w, height = data.h;
                        if (ensureCompressedFormatEnabled(glw, glInternalFormat), void 0 !== mipmaps) {
                            glw.bindTexture(texture);
                            for (var w = width, h = height, i = 0; i < mipmaps.length; i++) glw.compressedTexImage2D(i, glInternalFormat, w, h, 0, new Uint8Array(mipmaps[i])), 
                            w = Math.max(1, w >> 1), h = Math.max(1, h >> 1);
                            glw.texParameteri(glw.TEXTURE_WRAP_S, glw.CLAMP_TO_EDGE), glw.texParameteri(glw.TEXTURE_WRAP_T, glw.CLAMP_TO_EDGE), 
                            glw.texParameteri(glw.TEXTURE_MAG_FILTER, glw.LINEAR), glw.texParameteri(glw.TEXTURE_MIN_FILTER, mipmaps.length > 1 ? glw.LINEAR_MIPMAP_LINEAR : glw.LINEAR);
                        }
                    },
                    astc: uploadASTC
                }), loadSvg = function() {
                    var _ref22 = _asyncToGenerator(_regenerator().m(function _callee7(url, width, height, sx, sy, sw, sh, pixelRatio) {
                        var img, targetW, targetH, ratio, physW, physH, canvas, ctx, _t3;
                        return _regenerator().w(function(_context8) {
                            for (;;) switch (_context8.p = _context8.n) {
                              case 0:
                                return img = new Image, !1 === isBase64Image(url) && (img.crossOrigin = "anonymous"), 
                                _context8.n = 1, new Promise(function(resolve, reject) {
                                    img.onload = function() {
                                        return resolve();
                                    }, img.onerror = function(err) {
                                        reject(err instanceof Error ? err : new Error("SVG loading failed: ".concat(url)));
                                    }, img.src = url;
                                });

                              case 1:
                                if (targetW = width || sw || img.naturalWidth || img.width, targetH = height || sh || img.naturalHeight || img.height, 
                                ratio = pixelRatio > 1 ? pixelRatio : 1, physW = Math.max(1, Math.ceil(targetW * ratio)), 
                                physH = Math.max(1, Math.ceil(targetH * ratio)), (canvas = document.createElement("canvas")).width = physW, 
                                canvas.height = physH, ctx = canvas.getContext("2d"), null !== sw && null !== sh ? ctx.drawImage(img, null != sx ? sx : 0, null != sy ? sy : 0, sw, sh, 0, 0, physW, physH) : ctx.drawImage(img, 0, 0, physW, physH), 
                                "function" != typeof createImageBitmap) {
                                    _context8.n = 5;
                                    break;
                                }
                                return _context8.p = 2, _context8.n = 3, createImageBitmap(canvas);

                              case 3:
                                return _t3 = _context8.v, _context8.a(2, {
                                    data: _t3,
                                    premultiplyAlpha: !1
                                });

                              case 4:
                                _context8.p = 4, _context8.v;

                              case 5:
                                return _context8.a(2, {
                                    data: ctx.getImageData(0, 0, physW, physH),
                                    premultiplyAlpha: !0
                                });
                            }
                        }, _callee7, null, [ [ 2, 4 ] ]);
                    }));
                    return function(_x9, _x0, _x1, _x10, _x11, _x12, _x13, _x14) {
                        return _ref22.apply(this, arguments);
                    };
                }(), _export("bt", ImageTexture = function(_Texture2) {
                    function ImageTexture(txManager, props) {
                        var _this0;
                        return (_this0 = _callSuper(this, ImageTexture, [ txManager ])).platform = void 0, 
                        _this0.props = void 0, _this0.type = TextureType.image, _this0.platform = txManager.platform, 
                        _this0.props = props, _this0.maxRetryCount = props.maxRetryCount, _this0;
                    }
                    return _inherits(ImageTexture, _Texture2), _createClass(ImageTexture, [ {
                        key: "hasAlphaChannel",
                        value: function(mimeType) {
                            return -1 !== mimeType.indexOf("image/png");
                        }
                    }, {
                        key: "loadImageFallback",
                        value: (_loadImageFallback = _asyncToGenerator(_regenerator().m(function _callee8(src, hasAlpha) {
                            var img;
                            return _regenerator().w(function(_context9) {
                                for (;;) if (0 === _context9.n) return img = new Image, "string" == typeof src && !1 === isBase64Image(src) && (img.crossOrigin = "anonymous"), 
                                _context9.a(2, new Promise(function(resolve, reject) {
                                    var objectUrl = null, cleanup = function() {
                                        null !== objectUrl && (URL.revokeObjectURL(objectUrl), objectUrl = null);
                                    };
                                    img.onload = function() {
                                        cleanup(), resolve({
                                            data: img,
                                            premultiplyAlpha: hasAlpha
                                        });
                                    }, img.onerror = function(err) {
                                        cleanup();
                                        var errorMessage = err instanceof Error ? err.message : err instanceof Event ? "Image loading failed for ".concat(img.src) : "Unknown image loading error";
                                        reject(new Error("Image loading failed: ".concat(errorMessage)));
                                    }, src instanceof Blob ? (objectUrl = URL.createObjectURL(src), img.src = objectUrl) : img.src = src;
                                }));
                            }, _callee8);
                        })), function(_x15, _x16) {
                            return _loadImageFallback.apply(this, arguments);
                        })
                    }, {
                        key: "createImageBitmap",
                        value: (_createImageBitmap = _asyncToGenerator(_regenerator().m(function _callee9(blob, premultiplyAlpha, sx, sy, sw, sh) {
                            var hasAlphaChannel, imageBitmapSupported, useGlPremultiply, bitmapMode, _t5, _t6, _t7, _t8, _t9;
                            return _regenerator().w(function(_context0) {
                                for (;;) switch (_context0.n) {
                                  case 0:
                                    if (hasAlphaChannel = null != premultiplyAlpha ? premultiplyAlpha : blob.type.includes("image/png"), 
                                    imageBitmapSupported = this.txManager.imageBitmapSupported, useGlPremultiply = !0 === hasAlphaChannel && !1 === imageBitmapSupported.premultiplyHonored, 
                                    bitmapMode = !0 === hasAlphaChannel && !1 === useGlPremultiply ? "premultiply" : "none", 
                                    !0 !== imageBitmapSupported.full || null === sw || null === sh) {
                                        _context0.n = 2;
                                        break;
                                    }
                                    return _context0.n = 1, this.platform.createImageBitmap(blob, sx || 0, sy || 0, sw, sh, {
                                        premultiplyAlpha: bitmapMode,
                                        colorSpaceConversion: "none",
                                        imageOrientation: "none"
                                    });

                                  case 1:
                                    return _t5 = _context0.v, _t6 = useGlPremultiply, _context0.a(2, {
                                        data: _t5,
                                        premultiplyAlpha: _t6
                                    });

                                  case 2:
                                    if (!1 !== imageBitmapSupported.options || !1 !== imageBitmapSupported.full) {
                                        _context0.n = 4;
                                        break;
                                    }
                                    return _context0.n = 3, this.platform.createImageBitmap(blob);

                                  case 3:
                                    return _t7 = _context0.v, _context0.a(2, {
                                        data: _t7,
                                        premultiplyAlpha: !1
                                    });

                                  case 4:
                                    return _context0.n = 5, this.platform.createImageBitmap(blob, {
                                        premultiplyAlpha: bitmapMode,
                                        colorSpaceConversion: "none",
                                        imageOrientation: "none"
                                    });

                                  case 5:
                                    return _t8 = _context0.v, _t9 = useGlPremultiply, _context0.a(2, {
                                        data: _t8,
                                        premultiplyAlpha: _t9
                                    });
                                }
                            }, _callee9, this);
                        })), function(_x17, _x18, _x19, _x20, _x21, _x22) {
                            return _createImageBitmap.apply(this, arguments);
                        })
                    }, {
                        key: "loadImage",
                        value: (_loadImage = _asyncToGenerator(_regenerator().m(function _callee0(src) {
                            var _this$props3, premultiplyAlpha, sx, sy, sw, sh, isBase64, blob, _t0;
                            return _regenerator().w(function(_context1) {
                                for (;;) switch (_context1.n) {
                                  case 0:
                                    if (_this$props3 = this.props, premultiplyAlpha = _this$props3.premultiplyAlpha, 
                                    sx = _this$props3.sx, sy = _this$props3.sy, sw = _this$props3.sw, sh = _this$props3.sh, 
                                    isBase64 = isBase64Image(src), !0 !== this.txManager.hasCreateImageBitmap) {
                                        _context1.n = 5;
                                        break;
                                    }
                                    if (!1 !== isBase64 || !0 !== this.txManager.hasWorker || null === this.txManager.imageWorkerManager) {
                                        _context1.n = 1;
                                        break;
                                    }
                                    return _context1.a(2, this.txManager.imageWorkerManager.getImage(src, premultiplyAlpha, sx, sy, sw, sh));

                                  case 1:
                                    if (!isBase64) {
                                        _context1.n = 2;
                                        break;
                                    }
                                    _t0 = dataURIToBlob(src), _context1.n = 4;
                                    break;

                                  case 2:
                                    return _context1.n = 3, fetchJson(src, "blob");

                                  case 3:
                                    _t0 = _context1.v;

                                  case 4:
                                    return blob = _t0, _context1.a(2, this.createImageBitmap(blob, premultiplyAlpha, sx, sy, sw, sh));

                                  case 5:
                                    return _context1.a(2, this.loadImageFallback(src, null == premultiplyAlpha || premultiplyAlpha));
                                }
                            }, _callee0, this);
                        })), function(_x23) {
                            return _loadImage.apply(this, arguments);
                        })
                    }, {
                        key: "getTextureSource",
                        value: (_getTextureSource2 = _asyncToGenerator(_regenerator().m(function _callee1() {
                            var _this$txManager$rende, _ref, _resp$premultiplyAlph, _this$props4, src, err, resp, _t1;
                            return _regenerator().w(function(_context10) {
                                for (;;) switch (_context10.p = _context10.n) {
                                  case 0:
                                    if ("canvas" !== (null == (_this$txManager$rende = this.txManager.renderer) ? void 0 : _this$txManager$rende.mode)) {
                                        _context10.n = 1;
                                        break;
                                    }
                                    if (_this$props4 = this.props, src = _this$props4.src, "compressed" !== _this$props4.type && ("string" != typeof src || !0 !== isCompressedTextureContainer(src))) {
                                        _context10.n = 1;
                                        break;
                                    }
                                    return err = new Error("ImageTexture: Compressed textures are not supported in Canvas2D render mode (src: ".concat(String(src), ")")), 
                                    this.setState("failed", err), _context10.a(2, {
                                        data: null
                                    });

                                  case 1:
                                    return _context10.p = 1, _context10.n = 2, this.determineImageTypeAndLoadImage();

                                  case 2:
                                    resp = _context10.v, _context10.n = 4;
                                    break;

                                  case 3:
                                    return _context10.p = 3, _t1 = _context10.v, this.setState("failed", _t1), _context10.a(2, {
                                        data: null
                                    });

                                  case 4:
                                    if (null !== resp.data) {
                                        _context10.n = 5;
                                        break;
                                    }
                                    return this.setState("failed", Error("ImageTexture: No image data")), _context10.a(2, {
                                        data: null
                                    });

                                  case 5:
                                    return _context10.a(2, {
                                        data: resp.data,
                                        premultiplyAlpha: null === (_ref = null !== (_resp$premultiplyAlph = resp.premultiplyAlpha) && void 0 !== _resp$premultiplyAlph ? _resp$premultiplyAlph : this.props.premultiplyAlpha) || void 0 === _ref || _ref
                                    });
                                }
                            }, _callee1, this, [ [ 1, 3 ] ]);
                        })), function() {
                            return _getTextureSource2.apply(this, arguments);
                        })
                    }, {
                        key: "determineImageTypeAndLoadImage",
                        value: function() {
                            var _this$props5 = this.props, src = _this$props5.src, premultiplyAlpha = _this$props5.premultiplyAlpha, type = _this$props5.type;
                            if (null === src) return {
                                data: null
                            };
                            if ("string" != typeof src) {
                                if (src instanceof Blob) {
                                    if (!0 === this.txManager.hasCreateImageBitmap) {
                                        var _this$props6 = this.props, sx = _this$props6.sx, sy = _this$props6.sy, sw = _this$props6.sw, sh = _this$props6.sh;
                                        return this.createImageBitmap(src, premultiplyAlpha, sx, sy, sw, sh);
                                    }
                                    return this.loadImageFallback(src, null == premultiplyAlpha || premultiplyAlpha);
                                }
                                return src instanceof ImageData ? {
                                    data: src,
                                    premultiplyAlpha: premultiplyAlpha
                                } : {
                                    data: src(),
                                    premultiplyAlpha: premultiplyAlpha
                                };
                            }
                            var absoluteSrc = function(url) {
                                if ("file:" === self.location.protocol && !PROTOCOL_REGEX.test(url)) {
                                    var path = self.location.pathname.split("/");
                                    path.pop();
                                    var basePath = path.join("/"), baseUrl = self.location.protocol + "//" + basePath;
                                    return "." === url.charAt(0) && (url = url.slice(1)), "/" === url.charAt(0) && (url = url.slice(1)), 
                                    baseUrl + "/" + url;
                                }
                                return new URL(url, self.location.href).href;
                            }(src);
                            return "regular" === type ? this.loadImage(absoluteSrc) : "svg" === type || !0 === /\.(svg)(\?.*)?$/.test(src) ? loadSvg(absoluteSrc, this.props.w, this.props.h, this.props.sx, this.props.sy, this.props.sw, this.props.sh, this.txManager.pixelRatio) : "compressed" === type || !0 === isCompressedTextureContainer(src) ? loadCompressedTexture(absoluteSrc) : this.loadImage(absoluteSrc);
                        }
                    } ], [ {
                        key: "makeCacheKey",
                        value: function(props) {
                            var _props$premultiplyAlp, _props$maxRetryCount, key = props.key || props.src;
                            if ("string" != typeof key) return !1;
                            var _props$sx, _props$sy, cacheKey = "ImageTexture,".concat(key, ",").concat(null === (_props$premultiplyAlp = props.premultiplyAlpha) || void 0 === _props$premultiplyAlp || _props$premultiplyAlp, ",").concat(null !== (_props$maxRetryCount = props.maxRetryCount) && void 0 !== _props$maxRetryCount ? _props$maxRetryCount : 5);
                            null != props.sh && null != props.sw && (cacheKey += ",".concat(null !== (_props$sx = props.sx) && void 0 !== _props$sx ? _props$sx : "", ",").concat(null !== (_props$sy = props.sy) && void 0 !== _props$sy ? _props$sy : "", ",").concat(props.sw || "", ",").concat(props.sh || ""));
                            return cacheKey;
                        }
                    }, {
                        key: "resolveDefaults",
                        value: function(props) {
                            var _props$src, _props$premultiplyAlp2, _props$key, _props$type, _props$w, _props$h, _props$sx2, _props$sy2, _props$sw, _props$sh, _props$maxRetryCount2;
                            return {
                                src: null !== (_props$src = props.src) && void 0 !== _props$src ? _props$src : "",
                                premultiplyAlpha: null === (_props$premultiplyAlp2 = props.premultiplyAlpha) || void 0 === _props$premultiplyAlp2 || _props$premultiplyAlp2,
                                key: null !== (_props$key = props.key) && void 0 !== _props$key ? _props$key : null,
                                type: null !== (_props$type = props.type) && void 0 !== _props$type ? _props$type : null,
                                w: null !== (_props$w = props.w) && void 0 !== _props$w ? _props$w : null,
                                h: null !== (_props$h = props.h) && void 0 !== _props$h ? _props$h : null,
                                sx: null !== (_props$sx2 = props.sx) && void 0 !== _props$sx2 ? _props$sx2 : null,
                                sy: null !== (_props$sy2 = props.sy) && void 0 !== _props$sy2 ? _props$sy2 : null,
                                sw: null !== (_props$sw = props.sw) && void 0 !== _props$sw ? _props$sw : null,
                                sh: null !== (_props$sh = props.sh) && void 0 !== _props$sh ? _props$sh : null,
                                maxRetryCount: null !== (_props$maxRetryCount2 = props.maxRetryCount) && void 0 !== _props$maxRetryCount2 ? _props$maxRetryCount2 : 5
                            };
                        }
                    } ]);
                    var _getTextureSource2, _loadImage, _createImageBitmap, _loadImageFallback;
                }(Texture)), ImageTexture.z$__type__Props = void 0, NoiseTexture = function(_Texture3) {
                    function NoiseTexture(txManager, props) {
                        var _this1;
                        return (_this1 = _callSuper(this, NoiseTexture, [ txManager ])).props = void 0, 
                        _this1.type = TextureType.noise, _this1.props = props, _this1;
                    }
                    return _inherits(NoiseTexture, _Texture3), _createClass(NoiseTexture, [ {
                        key: "getTextureSource",
                        value: (_getTextureSource3 = _asyncToGenerator(_regenerator().m(function _callee10() {
                            var _this$props7, w, h, size, pixelData8, i, v;
                            return _regenerator().w(function(_context11) {
                                for (;;) if (0 === _context11.n) {
                                    for (_this$props7 = this.props, w = _this$props7.w, h = _this$props7.h, size = w * h * 4, 
                                    pixelData8 = new Uint8ClampedArray(size), i = 0; i < size; i += 4) v = Math.floor(256 * Math.random()), 
                                    pixelData8[i] = v, pixelData8[i + 1] = v, pixelData8[i + 2] = v, pixelData8[i + 3] = 255;
                                    return _context11.a(2, {
                                        data: new ImageData(pixelData8, w, h)
                                    });
                                }
                            }, _callee10, this);
                        })), function() {
                            return _getTextureSource3.apply(this, arguments);
                        })
                    } ], [ {
                        key: "makeCacheKey",
                        value: function(props) {
                            if (void 0 === props.cacheId) return !1;
                            var resolvedProps = NoiseTexture.resolveDefaults(props);
                            return "NoiseTexture,".concat(resolvedProps.w, ",").concat(resolvedProps.h, ",").concat(resolvedProps.cacheId);
                        }
                    }, {
                        key: "resolveDefaults",
                        value: function(props) {
                            var _props$w, _props$h, _props$cacheId;
                            return {
                                w: null !== (_props$w = props.w) && void 0 !== _props$w ? _props$w : 128,
                                h: null !== (_props$h = props.h) && void 0 !== _props$h ? _props$h : 128,
                                cacheId: null !== (_props$cacheId = props.cacheId) && void 0 !== _props$cacheId ? _props$cacheId : 0
                            };
                        }
                    } ]);
                    var _getTextureSource3;
                }(Texture), NoiseTexture.z$__type__Props = void 0, subTextureId = 0, _export("yt", SubTexture = function(_Texture4) {
                    function SubTexture(txManager, props) {
                        var _this10;
                        return (_this10 = _callSuper(this, SubTexture, [ txManager ])).props = void 0, _this10.parentTexture = void 0, 
                        _this10.type = TextureType.subTexture, _this10.subtextureId = "subtexture-".concat(subTextureId++), 
                        _this10.onParentTxLoaded = function() {
                            _this10.setState("loaded", {
                                w: _this10.props.w,
                                h: _this10.props.h
                            });
                        }, _this10.onParentTxFailed = function(target, error) {
                            _this10.retryCount = _this10.parentTexture.retryCount - 1, _this10.setState("failed", error);
                        }, _this10.onParentTxLoading = function() {
                            _this10.setState("loading");
                        }, _this10.onParentTxFreed = function() {
                            _this10.setState("freed");
                        }, _this10.props = props, _this10.props.texture, _this10.props.texture, _this10.parentTexture = txManager.resolveParentTexture(_this10.props.texture), 
                        _this10.renderableOwners.size > 0 && _this10.parentTexture.setRenderableOwner(_this10.subtextureId, !0), 
                        queueMicrotask(function() {
                            var parentTx = _this10.parentTexture;
                            "loaded" === parentTx.state && null !== parentTx.dimensions ? _this10.onParentTxLoaded(parentTx, parentTx.dimensions) : "loading" === parentTx.state ? _this10.onParentTxLoading() : "failed" === parentTx.state && null !== parentTx.error ? _this10.onParentTxFailed(parentTx, parentTx.error) : "freed" === parentTx.state && _this10.onParentTxFreed(), 
                            parentTx.on("loading", _this10.onParentTxLoading), parentTx.on("loaded", _this10.onParentTxLoaded), 
                            parentTx.on("failed", _this10.onParentTxFailed), parentTx.on("freed", _this10.onParentTxFreed);
                        }), _this10;
                    }
                    return _inherits(SubTexture, _Texture4), _createClass(SubTexture, [ {
                        key: "onChangeIsRenderable",
                        value: function(isRenderable) {
                            this.parentTexture.setRenderableOwner(this.subtextureId, isRenderable);
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            var parentTx = this.parentTexture;
                            parentTx.off("loading", this.onParentTxLoading), parentTx.off("loaded", this.onParentTxLoaded), 
                            parentTx.off("failed", this.onParentTxFailed), parentTx.off("freed", this.onParentTxFreed), 
                            _superPropGet(SubTexture, "destroy", this, 3)([]);
                        }
                    }, {
                        key: "getTextureSource",
                        value: (_getTextureSource4 = _asyncToGenerator(_regenerator().m(function _callee11() {
                            var _this11 = this;
                            return _regenerator().w(function(_context12) {
                                for (;;) if (0 === _context12.n) return _context12.a(2, new Promise(function(resolve, reject) {
                                    resolve({
                                        data: _this11.props
                                    });
                                }));
                            }, _callee11);
                        })), function() {
                            return _getTextureSource4.apply(this, arguments);
                        })
                    } ], [ {
                        key: "makeCacheKey",
                        value: function(props) {
                            return !1;
                        }
                    }, {
                        key: "resolveDefaults",
                        value: function(props) {
                            return {
                                texture: props.texture,
                                x: props.x || 0,
                                y: props.y || 0,
                                w: props.w || 0,
                                h: props.h || 0
                            };
                        }
                    } ]);
                    var _getTextureSource4;
                }(Texture)), SubTexture.z$__type__Props = void 0, _export("vt", RenderTexture = function(_Texture5) {
                    function RenderTexture(txManager, props) {
                        var _this12;
                        return (_this12 = _callSuper(this, RenderTexture, [ txManager ])).props = void 0, 
                        _this12.type = TextureType.renderToTexture, _this12.props = props, _this12;
                    }
                    return _inherits(RenderTexture, _Texture5), _createClass(RenderTexture, [ {
                        key: "w",
                        get: function() {
                            return this.props.w;
                        },
                        set: function(value) {
                            this.props.w = value;
                        }
                    }, {
                        key: "h",
                        get: function() {
                            return this.props.h;
                        },
                        set: function(value) {
                            this.props.h = value;
                        }
                    }, {
                        key: "getTextureSource",
                        value: (_getTextureSource5 = _asyncToGenerator(_regenerator().m(function _callee12() {
                            return _regenerator().w(function(_context13) {
                                for (;;) if (0 === _context13.n) return _context13.a(2, {
                                    data: null,
                                    premultiplyAlpha: null
                                });
                            }, _callee12);
                        })), function() {
                            return _getTextureSource5.apply(this, arguments);
                        })
                    } ], [ {
                        key: "resolveDefaults",
                        value: function(props) {
                            return {
                                w: props.w || 256,
                                h: props.h || 256
                            };
                        }
                    } ]);
                    var _getTextureSource5;
                }(Texture)), RenderTexture.z$__type__Props = void 0, function(TextureErrorCode) {
                    TextureErrorCode.MEMORY_THRESHOLD_EXCEEDED = "MEMORY_THRESHOLD_EXCEEDED", TextureErrorCode.TEXTURE_DATA_NULL = "TEXTURE_DATA_NULL", 
                    TextureErrorCode.TEXTURE_TYPE_NOT_REGISTERED = "TEXTURE_TYPE_NOT_REGISTERED", TextureErrorCode.TEXTURE_UPLOAD_FAILED = "TEXTURE_UPLOAD_FAILED";
                }(TextureErrorCode || _export("gt", TextureErrorCode = {})), defaultMessages = _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, TextureErrorCode.MEMORY_THRESHOLD_EXCEEDED, "Memory threshold exceeded"), TextureErrorCode.TEXTURE_DATA_NULL, "Texture data is null"), TextureErrorCode.TEXTURE_TYPE_NOT_REGISTERED, "Texture type is not registered"), TextureErrorCode.TEXTURE_UPLOAD_FAILED, "Texture upload failed"), 
                _export("ht", TextureError = function(_Error) {
                    function TextureError(codeOrMessage, maybeMessage) {
                        var _this13, isCode = Object.values(TextureErrorCode).includes(codeOrMessage), code = isCode ? codeOrMessage : void 0;
                        return (_this13 = _callSuper(this, TextureError, [ isCode && code ? null != maybeMessage ? maybeMessage : defaultMessages[code] : String(codeOrMessage) ])).code = void 0, 
                        _this13.name = (this instanceof TextureError ? this.constructor : void 0).name, 
                        code && (_this13.code = code), _this13;
                    }
                    return _inherits(TextureError, _Error), _createClass(TextureError);
                }(_wrapNativeSuper(Error))), TextureUploadQueue = function() {
                    return _createClass(function() {
                        this.list = [], this.membership = new Set, this.head = 0;
                    }, [ {
                        key: "size",
                        get: function() {
                            return this.membership.size;
                        }
                    }, {
                        key: "has",
                        value: function(texture) {
                            return this.membership.has(texture);
                        }
                    }, {
                        key: "add",
                        value: function(texture) {
                            this.membership.has(texture) || (this.membership.add(texture), this.list.push(texture));
                        }
                    }, {
                        key: "delete",
                        value: function(texture) {
                            return this.membership.delete(texture);
                        }
                    }, {
                        key: "shift",
                        value: function() {
                            for (var list = this.list, membership = this.membership; this.head < list.length; ) {
                                var texture = list[this.head++];
                                if (membership.has(texture)) return membership.delete(texture), this.compactIfNeeded(), 
                                texture;
                            }
                            this.head = 0, list.length = 0;
                        }
                    }, {
                        key: "compactIfNeeded",
                        value: function() {
                            this.head >= 64 && this.head >= this.list.length >> 1 && (this.list = this.list.slice(this.head), 
                            this.head = 0);
                        }
                    } ]);
                }(), _export("mt", CoreTextureManager = function(_EventEmitter3) {
                    function CoreTextureManager(stage, settings) {
                        var _this14;
                        (_this14 = _callSuper(this, CoreTextureManager)).keyCache = new Map, _this14.txConstructors = {}, 
                        _this14.maxRetryCount = void 0, _this14.uploadTextureQueue = new TextureUploadQueue, 
                        _this14.initialized = !1, _this14.stage = void 0, _this14.numImageWorkers = void 0, 
                        _this14.platform = void 0, _this14.imageWorkerManager = null, _this14.hasCreateImageBitmap = !1, 
                        _this14.imageBitmapSupported = {
                            basic: !1,
                            options: !1,
                            full: !1,
                            premultiplyHonored: null
                        }, _this14.hasWorker = !!self.Worker, _this14.renderer = void 0, _this14.frameTime = 0;
                        var numImageWorkers = settings.numImageWorkers, createImageBitmapSupport = settings.createImageBitmapSupport, premultiplyAlphaHonored = settings.premultiplyAlphaHonored, maxRetryCount = settings.maxRetryCount;
                        return _this14.stage = stage, _this14.platform = stage.platform, _this14.numImageWorkers = numImageWorkers, 
                        _this14.maxRetryCount = maxRetryCount, "auto" === createImageBitmapSupport ? function(_x2) {
                            return _validateCreateImageBitmap.apply(this, arguments);
                        }(_this14.platform).then(function(result) {
                            _this14.resolvePremultiplyAndInit(result, premultiplyAlphaHonored);
                        }).catch(function() {
                            console.warn("[Lightning] createImageBitmap is not supported on this browser. ImageTexture will be slower."), 
                            _this14.initialized = !0, _this14.emit("initialized");
                        }) : _this14.resolvePremultiplyAndInit({
                            basic: "basic" === createImageBitmapSupport,
                            options: "options" === createImageBitmapSupport,
                            full: "full" === createImageBitmapSupport,
                            premultiplyHonored: null
                        }, premultiplyAlphaHonored), _this14.registerTextureType("ImageTexture", ImageTexture), 
                        _this14.registerTextureType("ColorTexture", ColorTexture), _this14.registerTextureType("NoiseTexture", NoiseTexture), 
                        _this14.registerTextureType("SubTexture", SubTexture), _this14.registerTextureType("RenderTexture", RenderTexture), 
                        _this14;
                    }
                    return _inherits(CoreTextureManager, _EventEmitter3), _createClass(CoreTextureManager, [ {
                        key: "pixelRatio",
                        get: function() {
                            return this.stage.pixelRatio;
                        }
                    }, {
                        key: "registerTextureType",
                        value: function(textureType, textureClass) {
                            this.txConstructors[textureType] = textureClass;
                        }
                    }, {
                        key: "resolvePremultiplyAndInit",
                        value: function(support, premultiplyAlphaHonored) {
                            var _this15 = this;
                            return "auto" !== premultiplyAlphaHonored ? (support.premultiplyHonored = premultiplyAlphaHonored, 
                            void this.initialize(support)) : !1 === support.options && !1 === support.full ? (support.premultiplyHonored = null, 
                            void this.initialize(support)) : void function(_x3) {
                                return _detectPremultiplyAlphaHonored.apply(this, arguments);
                            }(this.platform).then(function(honored) {
                                support.premultiplyHonored = honored, _this15.initialize(support);
                            }).catch(function() {
                                support.premultiplyHonored = null, _this15.initialize(support);
                            });
                        }
                    }, {
                        key: "initialize",
                        value: function(support) {
                            this.hasCreateImageBitmap = support.basic || support.options || support.full, this.imageBitmapSupported = support, 
                            !1 === support.premultiplyHonored && console.warn('[Lightning] createImageBitmap premultiplyAlpha:"premultiply" is not honored on this device — images may show alpha ghosting. GL-side premultiply fallback recommended.'), 
                            !1 === this.hasCreateImageBitmap && console.warn("[Lightning] createImageBitmap is not supported on this browser. ImageTexture will be slower."), 
                            !0 === this.hasCreateImageBitmap && !0 === this.hasWorker && this.numImageWorkers > 0 ? this.imageWorkerManager = new ImageWorkerManager(this.numImageWorkers, support) : console.warn("[Lightning] Image worker count is 0 or workers are not supported on this browser. Image loading will be slower."), 
                            this.initialized = !0, this.emit("initialized"), this.uploadTextureQueue.size > 0 && this.processUntil(1 / 0).catch(function(err) {
                                console.error("Failed to drain pre-init texture queue:", err);
                            });
                        }
                    }, {
                        key: "enqueueUploadTexture",
                        value: function(texture) {
                            "failed" !== texture.state && "freed" !== texture.state && this.uploadTextureQueue.add(texture);
                        }
                    }, {
                        key: "createTexture",
                        value: function(textureType, props) {
                            var TextureClass = this.txConstructors[textureType];
                            if (!TextureClass) throw new TextureError(TextureErrorCode.TEXTURE_TYPE_NOT_REGISTERED, 'Texture type "'.concat(textureType, '" is not registered'));
                            var cacheKey = TextureClass.makeCacheKey(props);
                            if (cacheKey) {
                                var cached = this.keyCache.get(cacheKey);
                                if (cached) return cached;
                            }
                            var resolvedProps = TextureClass.resolveDefaults(props), texture = new TextureClass(this, resolvedProps);
                            return cacheKey && this.initTextureToCache(texture, cacheKey), texture;
                        }
                    }, {
                        key: "loadTexture",
                        value: (_loadTexture = _asyncToGenerator(_regenerator().m(function _callee13(texture, priority) {
                            var _t10, _t11;
                            return _regenerator().w(function(_context14) {
                                for (;;) switch (_context14.n) {
                                  case 0:
                                    if (texture.type !== TextureType.subTexture) {
                                        _context14.n = 1;
                                        break;
                                    }
                                    return _context14.a(2);

                                  case 1:
                                    if ("loaded" !== texture.state) {
                                        _context14.n = 2;
                                        break;
                                    }
                                    return _context14.a(2);

                                  case 2:
                                    if (!1 !== this.initialized) {
                                        _context14.n = 3;
                                        break;
                                    }
                                    return this.uploadTextureQueue.add(texture), _context14.a(2);

                                  case 3:
                                    return texture.setState("loading"), _context14.n = 4, texture.getTextureData().catch(function(err) {
                                        return console.error(err), texture.setState("failed", new TextureError(TextureErrorCode.TEXTURE_DATA_NULL)), 
                                        null;
                                    });

                                  case 4:
                                    if (_t11 = _context14.v, _t10 = null === _t11) {
                                        _context14.n = 5;
                                        break;
                                    }
                                    _t10 = "failed" === texture.state;

                                  case 5:
                                    if (!_t10) {
                                        _context14.n = 6;
                                        break;
                                    }
                                    return _context14.a(2);

                                  case 6:
                                    if (1 != (texture.type !== TextureType.image || !0 === priority)) {
                                        _context14.n = 8;
                                        break;
                                    }
                                    return _context14.n = 7, this.uploadTexture(texture).catch(function(err) {
                                        console.error("Failed to upload texture:", err), texture.setState("failed", new TextureError(TextureErrorCode.TEXTURE_UPLOAD_FAILED, err instanceof Error ? err.message : void 0));
                                    });

                                  case 7:
                                    return _context14.a(2);

                                  case 8:
                                    this.enqueueUploadTexture(texture);

                                  case 9:
                                    return _context14.a(2);
                                }
                            }, _callee13, this);
                        })), function(_x24, _x25) {
                            return _loadTexture.apply(this, arguments);
                        })
                    }, {
                        key: "uploadTexture",
                        value: (_uploadTexture = _asyncToGenerator(_regenerator().m(function _callee14(texture) {
                            var coreContext;
                            return _regenerator().w(function(_context15) {
                                for (;;) switch (_context15.n) {
                                  case 0:
                                    if (!0 !== this.stage.txMemManager.doNotExceedCriticalThreshold || !0 !== this.stage.txMemManager.criticalCleanupRequested) {
                                        _context15.n = 1;
                                        break;
                                    }
                                    return texture.setState("failed", new TextureError(TextureErrorCode.MEMORY_THRESHOLD_EXCEEDED)), 
                                    _context15.a(2);

                                  case 1:
                                    if ("failed" !== texture.state && "freed" !== texture.state) {
                                        _context15.n = 2;
                                        break;
                                    }
                                    return _context15.a(2);

                                  case 2:
                                    if ("loaded" !== texture.state) {
                                        _context15.n = 3;
                                        break;
                                    }
                                    return _context15.a(2);

                                  case 3:
                                    if (null !== texture.textureData) {
                                        _context15.n = 4;
                                        break;
                                    }
                                    return texture.setState("failed", new TextureError(TextureErrorCode.TEXTURE_DATA_NULL, "Texture data is null, cannot upload texture")), 
                                    _context15.a(2);

                                  case 4:
                                    if ("loaded" !== (coreContext = texture.loadCtxTexture()).state) {
                                        _context15.n = 5;
                                        break;
                                    }
                                    return texture.setState("loaded"), _context15.a(2);

                                  case 5:
                                    return _context15.n = 6, coreContext.load();

                                  case 6:
                                    return _context15.a(2);
                                }
                            }, _callee14, this);
                        })), function(_x26) {
                            return _uploadTexture.apply(this, arguments);
                        })
                    }, {
                        key: "isProcessingTexture",
                        value: function(texture) {
                            return this.uploadTextureQueue.has(texture);
                        }
                    }, {
                        key: "processOne",
                        value: (_processOne = _asyncToGenerator(_regenerator().m(function _callee15() {
                            var texture;
                            return _regenerator().w(function(_context16) {
                                for (;;) switch (_context16.n) {
                                  case 0:
                                    if (!1 !== this.initialized) {
                                        _context16.n = 1;
                                        break;
                                    }
                                    return _context16.a(2);

                                  case 1:
                                    if (void 0 !== (texture = this.uploadTextureQueue.shift())) {
                                        _context16.n = 2;
                                        break;
                                    }
                                    return _context16.a(2);

                                  case 2:
                                    return _context16.n = 3, this.uploadQueued(texture);

                                  case 3:
                                    return _context16.a(2);
                                }
                            }, _callee15, this);
                        })), function() {
                            return _processOne.apply(this, arguments);
                        })
                    }, {
                        key: "processUntil",
                        value: (_processUntil = _asyncToGenerator(_regenerator().m(function _callee16(maxProcessingTime) {
                            var platform, startTime, texture;
                            return _regenerator().w(function(_context17) {
                                for (;;) switch (_context17.n) {
                                  case 0:
                                    if (!1 !== this.initialized) {
                                        _context17.n = 1;
                                        break;
                                    }
                                    return _context17.a(2);

                                  case 1:
                                    platform = this.platform, startTime = platform.getTimeStamp();

                                  case 2:
                                    if (!(platform.getTimeStamp() - startTime < maxProcessingTime)) {
                                        _context17.n = 5;
                                        break;
                                    }
                                    if (void 0 !== (texture = this.uploadTextureQueue.shift())) {
                                        _context17.n = 3;
                                        break;
                                    }
                                    return _context17.a(3, 5);

                                  case 3:
                                    return _context17.n = 4, this.uploadQueued(texture);

                                  case 4:
                                    _context17.n = 2;
                                    break;

                                  case 5:
                                    return _context17.a(2);
                                }
                            }, _callee16, this);
                        })), function(_x27) {
                            return _processUntil.apply(this, arguments);
                        })
                    }, {
                        key: "uploadQueued",
                        value: (_uploadQueued = _asyncToGenerator(_regenerator().m(function _callee17(texture) {
                            var _t12;
                            return _regenerator().w(function(_context18) {
                                for (;;) switch (_context18.p = _context18.n) {
                                  case 0:
                                    if (!this.isTextureDead(texture)) {
                                        _context18.n = 1;
                                        break;
                                    }
                                    return _context18.a(2);

                                  case 1:
                                    if (_context18.p = 1, null !== texture.textureData) {
                                        _context18.n = 2;
                                        break;
                                    }
                                    return _context18.n = 2, texture.getTextureData();

                                  case 2:
                                    if (!this.isTextureDead(texture)) {
                                        _context18.n = 3;
                                        break;
                                    }
                                    return _context18.a(2);

                                  case 3:
                                    return _context18.n = 4, this.uploadTexture(texture);

                                  case 4:
                                    _context18.n = 6;
                                    break;

                                  case 5:
                                    _context18.p = 5, _t12 = _context18.v, console.error("Failed to upload texture:", _t12);

                                  case 6:
                                    return _context18.a(2);
                                }
                            }, _callee17, this, [ [ 1, 5 ] ]);
                        })), function(_x28) {
                            return _uploadQueued.apply(this, arguments);
                        })
                    }, {
                        key: "isTextureDead",
                        value: function(texture) {
                            return "failed" === texture.state || "freed" === texture.state;
                        }
                    }, {
                        key: "hasUpdates",
                        value: function() {
                            return this.uploadTextureQueue.size > 0;
                        }
                    }, {
                        key: "initTextureToCache",
                        value: function(texture, cacheKey) {
                            this.keyCache.set(cacheKey, texture), texture.cacheKey = cacheKey;
                        }
                    }, {
                        key: "getTextureFromCache",
                        value: function(cacheKey) {
                            return this.keyCache.get(cacheKey);
                        }
                    }, {
                        key: "removeTextureFromCache",
                        value: function(texture) {
                            var cacheKey = texture.cacheKey;
                            null !== cacheKey && (this.keyCache.delete(cacheKey), texture.cacheKey = null);
                        }
                    }, {
                        key: "removeTextureFromQueue",
                        value: function(texture) {
                            this.uploadTextureQueue.delete(texture);
                        }
                    }, {
                        key: "resolveParentTexture",
                        value: function(texture) {
                            if (!(null == texture ? void 0 : texture.props)) return texture;
                            var cacheKey = ImageTexture.makeCacheKey(texture.props), cachedTexture = cacheKey ? this.getTextureFromCache(cacheKey) : void 0;
                            return null != cachedTexture ? cachedTexture : texture;
                        }
                    } ]);
                    var _uploadQueued, _processUntil, _processOne, _uploadTexture, _loadTexture;
                }(EventEmitter)), _export("dt", function() {
                    return _createClass(function(shaderKey, type, stage, props) {
                        this.shaderKey = void 0, this.stage = void 0, this.shaderType = void 0, this.propsConfig = void 0, 
                        this.resolvedProps = void 0, this.definedProps = void 0, this.node = null, this.time = void 0, 
                        this.update = void 0, this.valueKey = "", this._valueKeyCache = "", this._valueKeyDirty = !0, 
                        this._lastW = 0, this._lastH = 0, this.shaderKey = shaderKey, this.stage = stage, 
                        this.shaderType = type, this.time = type.time, void 0 !== props && (this.resolvedProps = props, 
                        this.defineProps(props));
                    }, [ {
                        key: "defineProps",
                        value: function(props) {
                            var _this16 = this, definedProps = {}, _loop4 = function(key) {
                                var propConfig = _this16.shaderType.props[key], isAdvancedProp = isAdvancedShaderProp(propConfig);
                                Object.defineProperty(definedProps, key, {
                                    get: function() {
                                        return _this16.resolvedProps[key];
                                    },
                                    set: function(value) {
                                        !0 === isAdvancedProp && void 0 !== propConfig.resolve ? _this16.resolvedProps[key] = propConfig.resolve(value, _this16.resolvedProps) : !0 === isAdvancedProp && void 0 !== propConfig.set ? propConfig.set(value, _this16.resolvedProps) : _this16.resolvedProps[key] = value, 
                                        _this16._valueKeyDirty = !0, void 0 !== _this16.update && null !== _this16.node ? _this16.node.setUpdateType(UpdateType.RecalcUniforms) : _this16.stage.requestRender();
                                    }
                                });
                            };
                            for (var key in props) _loop4(key);
                            this.definedProps = definedProps;
                        }
                    }, {
                        key: "attachNode",
                        value: function(node) {
                            this.node = node;
                        }
                    }, {
                        key: "detachNode",
                        value: function() {
                            this.valueKey.length > 0 && (this.stage.shManager.mutateShaderValueUsage(this.valueKey, -1), 
                            this.valueKey = ""), this.node = null;
                        }
                    }, {
                        key: "createValueKey",
                        value: function() {
                            if (!1 === this._valueKeyDirty && null !== this.node && this.node.w === this._lastW && this.node.h === this._lastH) return this._valueKeyCache;
                            var valueKey = "";
                            for (var key in this.resolvedProps) valueKey += "".concat(key, ":").concat(this.resolvedProps[key], ";");
                            return valueKey += "node-width:".concat(this.node.w), valueKey += "node-height:".concat(this.node.h), 
                            this._valueKeyCache = valueKey, this._valueKeyDirty = !1, this._lastW = this.node.w, 
                            this._lastH = this.node.h, valueKey;
                        }
                    }, {
                        key: "props",
                        get: function() {
                            return this.definedProps;
                        },
                        set: function(props) {
                            if (void 0 !== props) for (var key in props) this.props[key] = props[key];
                        }
                    } ]);
                }()), CoreShaderManager = function() {
                    return _createClass(function(stage) {
                        this.stage = void 0, this.shTypes = {}, this.shCache = new Map, this.valuesCache = new Map, 
                        this.valuesCacheUsage = new Map, this.attachedShader = null, this.stage = stage;
                    }, [ {
                        key: "registerShaderType",
                        value: function(name, shType) {
                            void 0 === this.shTypes[name] ? !1 !== this.stage.renderer.supportsShaderType(shType) ? this.shTypes[name] = shType : console.warn("The renderer being used does not support this shader type. Breaking off registration.") : console.warn("ShaderType already exists with the name: ".concat(name, ". Breaking off registration."));
                        }
                    }, {
                        key: "createShader",
                        value: function(name, props) {
                            var shType = this.shTypes[name];
                            if (void 0 === shType) return console.warn("ShaderType not found falling back on renderer default shader"), 
                            this.stage.defShaderNode;
                            var shaderKey = name;
                            if (void 0 !== shType.props && (resolveShaderProps(props = props || {}, shType.props), 
                            void 0 !== shType.getCacheMarkers && (shaderKey += "-".concat(shType.getCacheMarkers(props)))), 
                            "canvas" === this.stage.renderer.mode) return this.stage.renderer.createShaderNode(shaderKey, shType, props);
                            var shProgram = this.shCache.get(shaderKey);
                            if (void 0 === shProgram) try {
                                shProgram = this.stage.renderer.createShaderProgram(shType, props), this.shCache.set(shaderKey, shProgram);
                            } catch (e) {
                                if (!0 === this.stage.isContextLost) return this.stage.defShaderNode;
                                throw e;
                            }
                            return this.stage.renderer.createShaderNode(shaderKey, shType, props, shProgram);
                        }
                    }, {
                        key: "mutateShaderValueUsage",
                        value: function(key, mutation) {
                            var usage = this.valuesCacheUsage.get(key) || 0;
                            this.valuesCacheUsage.set(key, usage + mutation);
                        }
                    }, {
                        key: "getShaderValues",
                        value: function(key) {
                            var values = this.valuesCache.get(key);
                            if (void 0 !== values) return this.mutateShaderValueUsage(key, 1), values;
                        }
                    }, {
                        key: "setShaderValues",
                        value: function(key, values) {
                            this.valuesCache.set(key, values), this.mutateShaderValueUsage(key, 1);
                        }
                    }, {
                        key: "cleanup",
                        value: function() {
                            for (var values = _toConsumableArray(this.valuesCacheUsage.entries()).sort(function(entryA, entryB) {
                                return entryA[1] < entryB[1] ? -1 : entryA[1] > entryB[1] ? 1 : 0;
                            }), i = 0; i < values.length && !(values[i][1] > 0); i++) this.valuesCacheUsage.delete(values[i][0]), 
                            this.valuesCache.delete(values[i][0]);
                        }
                    }, {
                        key: "useShader",
                        value: function(shader) {
                            this.attachedShader !== shader && (this.attachedShader && this.attachedShader.detach && this.attachedShader.detach(), 
                            shader.attach && shader.attach(), this.attachedShader = shader);
                        }
                    } ]);
                }(), spaceRegex = /[ \u200B]+/g, _export("ct", {
                    ascender: 800,
                    descender: -200,
                    lineGap: 200,
                    unitsPerEm: 1e3
                }), _export("ut", function(metrics, fontSize) {
                    var scale = fontSize / metrics.unitsPerEm, capHeightUnits = void 0 !== metrics.capHeight ? metrics.capHeight : .7 * metrics.ascender, xHeightUnits = void 0 !== metrics.xHeight ? metrics.xHeight : .5 * metrics.ascender;
                    return {
                        ascender: metrics.ascender * scale,
                        descender: metrics.descender * scale,
                        lineGap: metrics.lineGap * scale,
                        capHeight: capHeightUnits * scale,
                        xHeight: xHeightUnits * scale
                    };
                }), baselineMode = "optical", setBaselineMode = function(mode) {
                    baselineMode = mode;
                }, _export("lt", function(measureText, metrics, text, textAlign, fontFamily, lineHeight, overflowSuffix, wordBreak, letterSpacing, maxLines, maxWidth, maxHeight) {
                    var bareLineHeight = metrics.ascender - metrics.descender + metrics.lineGap, lineHeightPx = lineHeight <= 3 ? lineHeight * bareLineHeight : lineHeight, effectiveMaxLines = maxLines;
                    if (maxHeight > 0) {
                        var maxFromHeight = Math.floor(maxHeight / lineHeightPx);
                        maxFromHeight < 1 && (maxFromHeight = 1), (0 === effectiveMaxLines || maxFromHeight < effectiveMaxLines) && (effectiveMaxLines = maxFromHeight);
                    }
                    var _ref24 = _slicedToArray(maxWidth > 0 == !0 ? wrapText(measureText, text, fontFamily, maxWidth, letterSpacing, overflowSuffix, wordBreak, effectiveMaxLines) : measureLines(measureText, text.split("\n"), fontFamily, letterSpacing, effectiveMaxLines), 3), lines = _ref24[0], remainingLines = _ref24[1], remainingText = _ref24[2], effectiveLineAmount = lines.length, effectiveMaxWidth = 0;
                    if (0 !== letterSpacing) for (var i = 0; i < effectiveLineAmount; i++) {
                        var line = lines[i];
                        line[0].length > 0 && (line[1] -= letterSpacing);
                    }
                    if (effectiveLineAmount > 0 && (effectiveMaxWidth = lines[0][1], effectiveLineAmount > 1)) for (var _i0 = 1; _i0 < effectiveLineAmount; _i0++) effectiveMaxWidth = Math.max(effectiveMaxWidth, lines[_i0][1]);
                    if ("left" !== textAlign) for (var _i1 = 0; _i1 < effectiveLineAmount; _i1++) {
                        var _line = lines[_i1], w = _line[1];
                        _line[3] = "right" === textAlign ? effectiveMaxWidth - w : (effectiveMaxWidth - w) / 2;
                    }
                    var firstBaselineY, effectiveMaxHeight = effectiveLineAmount * lineHeightPx;
                    firstBaselineY = "cap" === baselineMode ? .5 * (lineHeightPx + metrics.capHeight) : "x" === baselineMode ? .5 * (lineHeightPx + metrics.xHeight) : "linebox" === baselineMode ? .5 * (lineHeightPx - bareLineHeight) + metrics.ascender : .5 * (lineHeightPx + .5 * (metrics.capHeight + metrics.xHeight));
                    for (var _i10 = 0; _i10 < effectiveLineAmount; _i10++) {
                        lines[_i10][4] = firstBaselineY + lineHeightPx * _i10;
                    }
                    return [ lines, remainingLines, remainingText, bareLineHeight, lineHeightPx, effectiveMaxWidth, effectiveMaxHeight ];
                }), measureLines = function(measureText, lines, fontFamily, letterSpacing, maxLines) {
                    for (var measuredLines = [], remainingLines = maxLines > 0 ? maxLines : lines.length, i = 0; remainingLines > 0; ) {
                        var line = lines[i];
                        if (i++, remainingLines--, void 0 !== line) {
                            var width = measureText(line, fontFamily, letterSpacing);
                            measuredLines.push([ line, width, !1, 0, 0 ]);
                        }
                    }
                    return [ measuredLines, remainingLines, maxLines > 0 && lines.length - measuredLines.length > 0 ];
                }, wrapText = function(measureText, text, fontFamily, maxWidth, letterSpacing, overflowSuffix, wordBreak, maxLines) {
                    for (var lines = text.split("\n"), wrappedLines = [], spaceWidth = measureText(" ", fontFamily, letterSpacing), overflowWidth = measureText(overflowSuffix, fontFamily, letterSpacing), wrappedLine = [], remainingLines = maxLines > 0 ? maxLines : 1e3, hasRemainingText = !0, hasMaxLines = maxLines > 0, i = 0; i < lines.length; i++) {
                        var line = lines[i];
                        if (void 0 !== line) {
                            var _ref26 = _slicedToArray(line.length > 0 ? wrapLine(measureText, line, fontFamily, maxWidth, letterSpacing, spaceWidth, overflowSuffix, overflowWidth, wordBreak, remainingLines) : [ [ [ "", 0, !1, 0, 0 ] ], remainingLines, i < lines.length - 1 ], 3);
                            wrappedLine = _ref26[0], remainingLines = _ref26[1], hasRemainingText = _ref26[2], 
                            remainingLines--;
                            for (var j = 0; j < wrappedLine.length; j++) wrappedLines.push(wrappedLine[j]);
                            if (!0 === hasMaxLines && remainingLines <= 0) {
                                var lastLine = wrappedLines[wrappedLines.length - 1];
                                if (i < lines.length - 1 && !1 === lastLine[2]) {
                                    var _truncateLineEnd2 = _slicedToArray(truncateLineEnd(measureText, fontFamily, letterSpacing, lastLine[0], lastLine[1], "", maxWidth, overflowSuffix, overflowWidth), 2), _line3 = _truncateLineEnd2[0], lineWidth = _truncateLineEnd2[1];
                                    lastLine[0] = _line3, lastLine[1] = lineWidth, lastLine[2] = !0;
                                }
                                break;
                            }
                        }
                    }
                    return [ wrappedLines, remainingLines, hasRemainingText ];
                }, wrapLine = function(measureText, line, fontFamily, maxWidth, letterSpacing, spaceWidth, overflowSuffix, overflowWidth, wordBreak, remainingLines) {
                    for (var words = line.split(spaceRegex), spaces = line.match(spaceRegex) || [], wrappedLines = [], currentLine = "", currentLineWidth = 0, wrapFn = getWrapStrategy(wordBreak), wordIdx = 0, spaceIdx = 0, pendingWord = ""; (pendingWord.length > 0 || wordIdx < words.length) && remainingLines > 0; ) {
                        var word = void 0, wordWidth = void 0, remainingWord = "";
                        if (pendingWord.length > 0 ? (word = pendingWord, pendingWord = "") : word = words[wordIdx++], 
                        wordWidth = measureText(word, fontFamily, letterSpacing), 0 !== currentLineWidth) {
                            var space = spaces[spaceIdx++] || "", effectiveSpaceWidth = "​" === space ? 0 : spaceWidth, totalWidth = currentLineWidth + effectiveSpaceWidth + wordWidth;
                            if (totalWidth < maxWidth) currentLine += effectiveSpaceWidth > 0 ? space + word : word, 
                            currentLineWidth = totalWidth; else if (remainingLines--, totalWidth !== maxWidth) {
                                var _wrapFn2 = _slicedToArray(wrapFn(measureText, word, wordWidth, fontFamily, letterSpacing, wrappedLines, currentLine, currentLineWidth, remainingLines, remainingWord, maxWidth, space, spaceWidth, overflowSuffix, overflowWidth), 3);
                                currentLine = _wrapFn2[0], currentLineWidth = _wrapFn2[1], (remainingWord = _wrapFn2[2]).length > 0 && (pendingWord = remainingWord);
                            } else currentLine += effectiveSpaceWidth > 0 ? space + word : word, currentLineWidth = totalWidth, 
                            wrappedLines.push([ currentLine, currentLineWidth, !1, 0, 0 ]), currentLine = "", 
                            currentLineWidth = 0;
                        } else if (wordWidth > maxWidth) {
                            var isLastLine = 0 === --remainingLines, lineTruncated = isLastLine, _ref28 = _slicedToArray(isLastLine ? truncateWord(measureText, word, wordWidth, maxWidth, fontFamily, letterSpacing, overflowSuffix, overflowWidth) : splitWord(measureText, word, wordWidth, maxWidth, fontFamily, letterSpacing), 3);
                            if (word = _ref28[0], remainingWord = _ref28[1], wordWidth = _ref28[2], remainingWord.length > 0) {
                                if (0 === word.length) {
                                    if (overflowSuffix.length > 0) word = overflowSuffix, wordWidth = overflowWidth; else {
                                        if (0 === (word = remainingWord.charAt(0)).length) break;
                                        wordWidth = measureText(word, fontFamily, letterSpacing);
                                    }
                                    remainingWord = "", remainingLines = 0, lineTruncated = !0;
                                }
                                pendingWord = remainingWord;
                            }
                            wrappedLines.push([ word, wordWidth, lineTruncated, 0, 0 ]);
                        } else wordWidth + spaceWidth >= maxWidth ? (remainingLines--, wrappedLines.push([ word, wordWidth, !1, 0, 0 ])) : (currentLine = word, 
                        currentLineWidth = wordWidth);
                    }
                    return currentLineWidth > 0 && remainingLines > 0 && wrappedLines.push([ currentLine, currentLineWidth, !1, 0, 0 ]), 
                    [ wrappedLines, remainingLines, !0 ];
                }, getWrapStrategy = function(wordBreak) {
                    return "break-word" === wordBreak ? breakWord : "break-all" === wordBreak ? breakAll : "overflow" === wordBreak ? overflow : breakWord;
                }, overflow = function(measureText, word, wordWidth, fontFamily, letterSpacing, wrappedLines, currentLine, currentLineWidth, remainingLines, remainingWord, maxWidth, space, spaceWidth, overflowSuffix, overflowWidth) {
                    return currentLine += space + word, currentLineWidth += spaceWidth + wordWidth, 
                    0 === remainingLines && (currentLine += overflowSuffix, currentLineWidth += overflowWidth), 
                    wrappedLines.push([ currentLine, currentLineWidth, !0, 0, 0 ]), [ "", 0, "" ];
                }, breakWord = function(measureText, word, wordWidth, fontFamily, letterSpacing, wrappedLines, currentLine, currentLineWidth, remainingLines, remainingWord, maxWidth, space, spaceWidth, overflowSuffix, overflowWidth) {
                    if (remainingWord = word, 0 === remainingLines) {
                        var _truncateLineEnd4 = _slicedToArray(truncateLineEnd(measureText, fontFamily, letterSpacing, currentLine, currentLineWidth, remainingWord, maxWidth, overflowSuffix, overflowWidth), 3);
                        currentLine = _truncateLineEnd4[0], currentLineWidth = _truncateLineEnd4[1], remainingWord = _truncateLineEnd4[2], 
                        wrappedLines.push([ currentLine, currentLineWidth, !0, 0, 0 ]);
                    } else wrappedLines.push([ currentLine, currentLineWidth, !1, 0, 0 ]), currentLine = "", 
                    currentLineWidth = 0;
                    return [ currentLine, currentLineWidth, remainingWord ];
                }, breakAll = function(measureText, word, wordWidth, fontFamily, letterSpacing, wrappedLines, currentLine, currentLineWidth, remainingLines, remainingWord, maxWidth, space, spaceWidth, overflowSuffix, overflowWidth) {
                    var remainingSpace = maxWidth - currentLineWidth;
                    currentLineWidth > 0 && (remainingSpace -= spaceWidth);
                    var truncate = 0 === remainingLines, _ref30 = _slicedToArray(truncate ? truncateWord(measureText, word, wordWidth, remainingSpace, fontFamily, letterSpacing, overflowSuffix, overflowWidth) : splitWord(measureText, word, wordWidth, remainingSpace, fontFamily, letterSpacing), 3);
                    return word = _ref30[0], remainingWord = _ref30[1], currentLine += space + word, 
                    currentLineWidth += spaceWidth + (wordWidth = _ref30[2]), wrappedLines.push([ currentLine, currentLineWidth, truncate, 0, 0 ]), 
                    [ currentLine = "", currentLineWidth = 0, remainingWord ];
                }, truncateLineEnd = function(measureText, fontFamily, letterSpacing, currentLine, currentLineWidth, remainingWord, maxWidth, overflowSuffix, overflowWidth) {
                    if (currentLineWidth + overflowWidth <= maxWidth) return [ currentLine += overflowSuffix, currentLineWidth += overflowWidth, remainingWord = "" ];
                    for (var truncated = !1, i = currentLine.length - 1; i > 0; i--) {
                        if ((currentLineWidth -= measureText(currentLine.charAt(i), fontFamily, letterSpacing)) + overflowWidth <= maxWidth) {
                            currentLineWidth += overflowWidth, remainingWord = (currentLine = currentLine.substring(0, i) + overflowSuffix).substring(i) + " " + remainingWord, 
                            truncated = !0;
                            break;
                        }
                    }
                    return !1 === truncated && (currentLineWidth = overflowWidth, remainingWord = currentLine = overflowSuffix), 
                    [ currentLine, currentLineWidth, remainingWord ];
                }, truncateWord = function(measureText, word, wordWidth, maxWidth, fontFamily, letterSpacing, overflowSuffix, overflowWidth) {
                    var targetWidth = maxWidth - overflowWidth;
                    if (targetWidth <= 0) return [ "", word, 0 ];
                    if (wordWidth - targetWidth < wordWidth / 2 == !1) {
                        for (var _currentWidth = wordWidth, i = word.length - 1; i > 0; i--) {
                            if ((_currentWidth -= measureText(word.charAt(i), fontFamily, letterSpacing)) <= targetWidth) {
                                var remainingWord = word.substring(i);
                                return [ word.substring(0, i) + overflowSuffix, remainingWord, _currentWidth + overflowWidth ];
                            }
                        }
                        return [ overflowSuffix, word, overflowWidth ];
                    }
                    for (var currentWidth = 0, _i11 = 0; _i11 < word.length; _i11++) {
                        var _charWidth = measureText(word.charAt(_i11), fontFamily, letterSpacing);
                        if (currentWidth + _charWidth > targetWidth) {
                            var _remainingWord = word.substring(_i11);
                            return [ word.substring(0, _i11) + overflowSuffix, _remainingWord, currentWidth + overflowWidth ];
                        }
                        currentWidth += _charWidth;
                    }
                    return [ word + overflowSuffix, "", wordWidth + overflowWidth ];
                }, splitWord = function(measureText, word, wordWidth, maxWidth, fontFamily, letterSpacing) {
                    if (maxWidth <= 0) return [ "", word, 0 ];
                    if (wordWidth - maxWidth < wordWidth / 2 == !1) {
                        for (var _currentWidth2 = wordWidth, i = word.length - 1; i > 0; i--) {
                            if ((_currentWidth2 -= measureText(word.charAt(i), fontFamily, letterSpacing)) <= maxWidth) {
                                var remainingWord = word.substring(i);
                                return [ word.substring(0, i), remainingWord, _currentWidth2 ];
                            }
                        }
                        return [ "", word, 0 ];
                    }
                    for (var currentWidth = 0, _i12 = 0; _i12 < word.length; _i12++) {
                        var _charWidth2 = measureText(word.charAt(_i12), fontFamily, letterSpacing);
                        if (currentWidth + _charWidth2 > maxWidth) {
                            var _remainingWord2 = word.substring(_i12);
                            return [ word.substring(0, _i12), _remainingWord2, currentWidth ];
                        }
                        currentWidth += _charWidth2;
                    }
                    return [ word, "", wordWidth ];
                }, ContextSpy = function() {
                    return _createClass(function() {
                        this.data = {};
                    }, [ {
                        key: "reset",
                        value: function() {
                            this.data = {};
                        }
                    }, {
                        key: "increment",
                        value: function(name) {
                            this.data[name] || (this.data[name] = 0), this.data[name]++;
                        }
                    }, {
                        key: "getData",
                        value: function() {
                            return _objectSpread({}, this.data);
                        }
                    } ]);
                }(), TextureMemoryManager = function() {
                    return _createClass(function(stage, settings) {
                        this.stage = void 0, this.memUsed = 0, this.loadedTextures = new Set, this.criticalThreshold = 124e6, 
                        this.targetThreshold = .5, this.cleanupInterval = 5e3, this.debugLogging = !1, this.loggingID = 0, 
                        this.lastCleanupTime = 0, this.baselineMemoryAllocation = 26e6, this.hasWarnedAboveCritical = !1, 
                        this.criticalCleanupRequested = !1, this.doNotExceedCriticalThreshold = !1, this.frameTime = 0, 
                        this.stage = stage, this.updateSettings(settings);
                    }, [ {
                        key: "setTextureMemUse",
                        value: function(texture, byteSize) {
                            if (this.memUsed -= texture.memUsed, 0 === byteSize) return this.loadedTextures.delete(texture), 
                            void (texture.memUsed = 0);
                            texture.memUsed = byteSize, this.memUsed += byteSize, this.loadedTextures.add(texture), 
                            this.criticalThreshold > 0 && this.memUsed > this.criticalThreshold && (this.criticalCleanupRequested = !0);
                        }
                    }, {
                        key: "checkCleanup",
                        value: function() {
                            return this.criticalCleanupRequested || this.criticalThreshold > 0 && this.memUsed > this.targetThreshold && this.frameTime - this.lastCleanupTime >= this.cleanupInterval;
                        }
                    }, {
                        key: "checkCriticalCleanup",
                        value: function() {
                            return this.criticalThreshold > 0 && this.memUsed > this.criticalThreshold;
                        }
                    }, {
                        key: "freeTexture",
                        value: function(texture) {
                            !0 === this.debugLogging && console.log("[TextureMemoryManager] Freeing texture. State: ".concat(texture.state)), 
                            texture.free(), !0 === this.loadedTextures.has(texture) && (this.loadedTextures.delete(texture), 
                            this.memUsed -= texture.memUsed, texture.memUsed = 0);
                        }
                    }, {
                        key: "destroyTexture",
                        value: function(texture) {
                            !0 === this.debugLogging && console.log("[TextureMemoryManager] Destroying texture. State: ".concat(texture.state)), 
                            this.loadedTextures.delete(texture), this.stage.txManager.removeTextureFromCache(texture), 
                            texture.destroy(), this.memUsed -= texture.memUsed, texture.memUsed = 0;
                        }
                    }, {
                        key: "cleanup",
                        value: function() {
                            var full = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], critical = this.criticalCleanupRequested;
                            this.lastCleanupTime = this.frameTime, !0 === critical && this.stage.queueFrameEvent("criticalCleanup", {
                                memUsed: this.memUsed,
                                criticalThreshold: this.criticalThreshold
                            }), !0 === this.debugLogging && console.log("[TextureMemoryManager] Cleaning up textures. Critical: ".concat(critical, ". Full: ").concat(full));
                            var _step16, memTarget = critical ? this.criticalThreshold : this.targetThreshold, currentMemUsed = this.memUsed, _iterator16 = _createForOfIteratorHelper(this.loadedTextures);
                            try {
                                for (_iterator16.s(); !(_step16 = _iterator16.n()).done; ) {
                                    var texture = _step16.value;
                                    if (!1 === full && currentMemUsed < memTarget) break;
                                    if ((texture.type === TextureType.image || texture.type === TextureType.noise || texture.type === TextureType.renderToTexture) && !0 === texture.canBeCleanedUp()) {
                                        var textureMemory = texture.memUsed;
                                        this.freeTexture(texture), currentMemUsed -= textureMemory;
                                    }
                                }
                            } catch (err) {
                                _iterator16.e(err);
                            } finally {
                                _iterator16.f();
                            }
                            this.evictOrphanedTextures(), this.memUsed >= this.criticalThreshold ? (this.stage.queueFrameEvent("criticalCleanupFailed", {
                                memUsed: this.memUsed,
                                criticalThreshold: this.criticalThreshold
                            }), this.hasWarnedAboveCritical || !0 !== this.debugLogging || (console.warn("[TextureMemoryManager] Memory usage above critical threshold after cleanup: ".concat(this.memUsed)), 
                            this.hasWarnedAboveCritical = !0)) : (this.criticalCleanupRequested = !1, this.hasWarnedAboveCritical = !1);
                        }
                    }, {
                        key: "evictOrphanedTextures",
                        value: function() {
                            var _step17, _iterator17 = _createForOfIteratorHelper(this.stage.txManager.keyCache.values());
                            try {
                                for (_iterator17.s(); !(_step17 = _iterator17.n()).done; ) {
                                    var texture = _step17.value, state = texture.state;
                                    !0 == ("freed" === state || ("initial" === state || "failed" === state) && !1 === texture.isWithinStartupGracePeriod()) && !1 === texture.preventCleanup && 0 === texture.renderableOwners.size && !1 === texture.hasListeners() && this.destroyTexture(texture);
                                }
                            } catch (err) {
                                _iterator17.e(err);
                            } finally {
                                _iterator17.f();
                            }
                        }
                    }, {
                        key: "getMemoryInfo",
                        value: function() {
                            var _step18, renderableTexturesLoaded = 0, renderableMemUsed = this.baselineMemoryAllocation, _iterator18 = _createForOfIteratorHelper(this.loadedTextures);
                            try {
                                for (_iterator18.s(); !(_step18 = _iterator18.n()).done; ) {
                                    var texture = _step18.value;
                                    texture && texture.renderable && (renderableTexturesLoaded += 1, renderableMemUsed += texture.memUsed);
                                }
                            } catch (err) {
                                _iterator18.e(err);
                            } finally {
                                _iterator18.f();
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
                        value: function(settings) {
                            var _this17 = this, criticalThreshold = settings.criticalThreshold, doNotExceedCriticalThreshold = settings.doNotExceedCriticalThreshold;
                            if (this.doNotExceedCriticalThreshold = doNotExceedCriticalThreshold || !1, this.criticalThreshold = Math.round(criticalThreshold), 
                            0 === this.memUsed) this.memUsed = Math.round(settings.baselineMemoryAllocation); else {
                                var memUsedExBaseline = this.memUsed - this.baselineMemoryAllocation;
                                this.memUsed = Math.round(settings.baselineMemoryAllocation + memUsedExBaseline);
                            }
                            this.baselineMemoryAllocation = Math.round(settings.baselineMemoryAllocation);
                            var targetFraction = Math.max(0, Math.min(1, settings.targetThresholdLevel));
                            if (this.targetThreshold = Math.max(Math.round(criticalThreshold * targetFraction), this.baselineMemoryAllocation), 
                            this.cleanupInterval = settings.cleanupInterval, this.debugLogging = settings.debugLogging, 
                            this.loggingID && !settings.debugLogging && (clearInterval(this.loggingID), this.loggingID = 0), 
                            settings.debugLogging && !this.loggingID) {
                                var lastMemUse = 0;
                                this.loggingID = setInterval(function() {
                                    lastMemUse !== _this17.memUsed && (lastMemUse = _this17.memUsed, console.log("[TextureMemoryManager] Memory used: ".concat(bytesToMb(_this17.memUsed), " mb / ").concat(bytesToMb(_this17.criticalThreshold), " mb (").concat((_this17.memUsed / _this17.criticalThreshold * 100).toFixed(1), "%)")));
                                }, 1e3);
                            }
                            0 === criticalThreshold && (this.setTextureMemUse = function() {});
                        }
                    }, {
                        key: "handleOutOfMemory",
                        value: function() {
                            this.stage.queueFrameEvent("outOfMemory", {
                                memUsed: this.memUsed,
                                criticalThreshold: this.criticalThreshold
                            }), this.criticalCleanupRequested = !0;
                        }
                    } ]);
                }(), function(TextConstraint) {
                    TextConstraint[TextConstraint.none = 0] = "none", TextConstraint[TextConstraint.width = 1] = "width", 
                    TextConstraint[TextConstraint.height = 2] = "height", TextConstraint[TextConstraint.both = 3] = "both";
                }(TextConstraint || (TextConstraint = {})), CoreTextNode = function(_CoreNode) {
                    function CoreTextNode(stage, props, textRenderer) {
                        var _this18;
                        return (_this18 = _callSuper(this, CoreTextNode, [ stage, props ])).textRenderer = void 0, 
                        _this18.fontHandler = void 0, _this18._layoutGenerated = !1, _this18._waitingForFont = !1, 
                        _this18._containType = TextConstraint.none, _this18._cachedLayout = null, _this18._sdfCache = {
                            vertices: null,
                            glyphCount: 0,
                            color: 0,
                            alpha: -1,
                            transform: new Float32Array(6),
                            layoutRef: null
                        }, _this18.textProps = void 0, _this18._renderInfo = {
                            width: 0,
                            height: 0
                        }, _this18._type = "sdf", _this18.onTextureLoaded = function(_, dimensions) {
                            _this18.parentHasRenderTexture && _this18.notifyParentRTTOfUpdate(), dimensions.w > 1 && dimensions.h > 1 && _this18.emit("loaded", {
                                type: "texture",
                                dimensions: dimensions
                            }), _this18.textureLoaded = !0, _this18.setUpdateType(UpdateType.IsRenderable);
                        }, _this18.emitTextLoadedEvent = function() {
                            _this18.emit("loaded", {
                                type: "text",
                                dimensions: {
                                    w: _this18._renderInfo.width,
                                    h: _this18._renderInfo.height
                                }
                            });
                        }, _this18.textRenderer = textRenderer, _this18.fontHandler = textRenderer.font, 
                        _this18._type = textRenderer.type, _this18.textProps = props, _this18._containType = TextConstraint[props.contain], 
                        _this18.setUpdateType(UpdateType.All), _this18;
                    }
                    return _inherits(CoreTextNode, _CoreNode), _createClass(CoreTextNode, [ {
                        key: "allowTextGeneration",
                        value: function() {
                            var p = this.props.parent;
                            return null !== p && (p.worldAlpha > 0 && p.renderState > CoreNodeRenderState.OutOfBounds);
                        }
                    }, {
                        key: "updateLocalTransform",
                        value: function() {
                            var p = this.props, x = p.x, y = p.y, w = p.w, h = p.h, mountX = p.mountX, mountY = p.mountY, mountTranslateX = p.mountX * w, mountTranslateY = p.mountY * h, _this$textProps = this.textProps, textAlign = _this$textProps.textAlign, verticalAlign = _this$textProps.verticalAlign, maxWidth = _this$textProps.maxWidth, maxHeight = _this$textProps.maxHeight, contain = this._containType, hasMaxWidth = maxWidth > 0, hasMaxHeight = maxHeight > 0, containX = 0, containY = 0;
                            contain > 0 && (hasMaxWidth || hasMaxHeight) && (contain & TextConstraint.width && !0 === hasMaxWidth && ("right" === textAlign ? containX = maxWidth - w : "center" === textAlign && (containX = .5 * (maxWidth - w)), 
                            mountTranslateX = mountX * maxWidth), contain & TextConstraint.height && !0 === hasMaxHeight && (mountTranslateY = mountY * maxHeight));
                            var slackY = (!0 === hasMaxHeight ? maxHeight : h) - this._renderInfo.height;
                            if (slackY > 0 && ("bottom" === verticalAlign ? containY = slackY : "middle" === verticalAlign && (containY = .5 * slackY)), 
                            0 !== p.rotation || 1 !== p.scaleX || 1 !== p.scaleY) {
                                var scaleRotate = Matrix3d.rotate(p.rotation, Matrix3d.temp).scale(p.scaleX, p.scaleY), pivotW = contain & TextConstraint.width && maxWidth > 0 ? maxWidth : w, pivotH = contain & TextConstraint.height && maxHeight > 0 ? maxHeight : h, pivotTranslateX = p.pivotX * pivotW, pivotTranslateY = p.pivotY * pivotH;
                                this.localTransform = Matrix3d.translate(x - mountTranslateX + pivotTranslateX, y - mountTranslateY + pivotTranslateY, this.localTransform).multiply(scaleRotate).translate(-pivotTranslateX, -pivotTranslateY);
                            } else this.localTransform = Matrix3d.translate(x - mountTranslateX, y - mountTranslateY, this.localTransform);
                            0 === containX && 0 === containY || this.localTransform.translate(containX, containY);
                        }
                    }, {
                        key: "update",
                        value: function(delta, parentClippingRect) {
                            if ((!0 === this.textProps.forceLoad || !0 === this.allowTextGeneration()) && !1 === this._layoutGenerated) if (!0 === this.fontHandler.isFontLoaded(this.textProps.fontFamily)) {
                                this._waitingForFont = !1, this._cachedLayout = null;
                                var resp = this.textRenderer.renderText(this.textProps);
                                this.handleRenderResult(resp), this._layoutGenerated = !0;
                            } else !1 === this._waitingForFont && (this.fontHandler.waitingForFont(this.textProps.fontFamily, this), 
                            this._waitingForFont = !0);
                            _superPropGet(CoreTextNode, "update", this, 3)([ delta, parentClippingRect ]);
                        }
                    }, {
                        key: "updateIsRenderable",
                        value: function() {
                            "canvas" !== this._type ? this.setRenderable(!0 === this.checkBasicRenderability() && null !== this._cachedLayout && (!1 === this.stage.renderOnlyInViewport || this.renderState === CoreNodeRenderState.InViewport)) : _superPropGet(CoreTextNode, "updateIsRenderable", this, 3)([]);
                        }
                    }, {
                        key: "handleRenderResult",
                        value: function(result) {
                            var textRendererType = this._type, width = result.width, height = result.height;
                            "canvas" === textRendererType && (void 0 === result.imageData ? (this.texture = null, 
                            this.setRenderable(!1)) : (this.texture = this.stage.txManager.createTexture("ImageTexture", {
                                premultiplyAlpha: !0,
                                src: result.imageData
                            }), this.setRenderable(!1), this.renderState > CoreNodeRenderState.OutOfBounds && this.updateTextureOwnership(!0))), 
                            this._cachedLayout = result.layout || null, this.props.w = width, this.props.h = height, 
                            this.setUpdateType(UpdateType.Local | UpdateType.RenderBounds | UpdateType.RecalcUniforms), 
                            "sdf" === textRendererType && this.setRenderable(!0), this._renderInfo = result, 
                            this.emitTextLoadedEvent();
                        }
                    }, {
                        key: "renderQuads",
                        value: function(renderer) {
                            if (!0 !== this.parentHasRenderTexture || !1 !== renderer.renderToTextureActive && this.parentRenderTexture === renderer.activeRttNode) {
                                if ("canvas" === this._type) {
                                    var white = premultiplyColorABGR(4294967295, this.worldAlpha);
                                    return this.premultipliedColorTl = this.premultipliedColorTr = this.premultipliedColorBl = this.premultipliedColorBr = white, 
                                    void _superPropGet(CoreTextNode, "renderQuads", this, 3)([ renderer ]);
                                }
                                if (this._cachedLayout) {
                                    var props = this.textProps;
                                    this.textRenderer.renderQuads(renderer, this._cachedLayout, null, {
                                        fontFamily: this.textProps.fontFamily,
                                        fontSize: props.fontSize,
                                        color: this.props.color || 4294967295,
                                        offsetY: props.offsetY,
                                        worldAlpha: this.worldAlpha,
                                        globalTransform: this.globalTransform.getFloatArr(),
                                        clippingRect: this.clippingRect,
                                        width: this.props.w,
                                        height: this.props.h,
                                        parentHasRenderTexture: this.parentHasRenderTexture,
                                        framebufferDimensions: !0 === this.parentHasRenderTexture ? this.parentFramebufferDimensions : null,
                                        stage: this.stage,
                                        sdfCache: this._sdfCache
                                    });
                                }
                            }
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            var isChild = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            !0 === this._waitingForFont && this.fontHandler && this.fontHandler.stopWaitingForFont(this.textProps.fontFamily, this), 
                            this._cachedLayout = null, this._sdfCache.vertices = null, this._sdfCache.layoutRef = null, 
                            this.fontHandler = null, this.textRenderer = null, _superPropGet(CoreTextNode, "destroy", this, 3)([ isChild ]);
                        }
                    }, {
                        key: "w",
                        get: function() {
                            return this.props.w;
                        },
                        set: function(value) {
                            this.maxWidth = value;
                        }
                    }, {
                        key: "h",
                        get: function() {
                            return this.props.h;
                        },
                        set: function(value) {
                            this.maxHeight = value;
                        }
                    }, {
                        key: "maxWidth",
                        get: function() {
                            return this.textProps.maxWidth;
                        },
                        set: function(value) {
                            this.textProps.maxWidth !== value && (this.textProps.maxWidth = value, this._layoutGenerated = !1, 
                            this.setUpdateType(UpdateType.Local));
                        }
                    }, {
                        key: "maxHeight",
                        get: function() {
                            return this.textProps.maxHeight;
                        },
                        set: function(value) {
                            this.textProps.maxHeight !== value && (this.textProps.maxHeight = value, this._layoutGenerated = !1, 
                            this.setUpdateType(UpdateType.Local));
                        }
                    }, {
                        key: "contain",
                        get: function() {
                            return this.textProps.contain;
                        },
                        set: function(value) {
                            this.textProps.contain !== value && (this.textProps.contain = value, this._containType = TextConstraint[value], 
                            this.setUpdateType(UpdateType.Local));
                        }
                    }, {
                        key: "text",
                        get: function() {
                            return this.textProps.text;
                        },
                        set: function(value) {
                            this.textProps.text !== value && (this.textProps.text = value, this._layoutGenerated = !1, 
                            this.setUpdateType(UpdateType.Local));
                        }
                    }, {
                        key: "fontSize",
                        get: function() {
                            return this.textProps.fontSize;
                        },
                        set: function(value) {
                            this.textProps.fontSize !== value && (this.textProps.fontSize = value, this._layoutGenerated = !1, 
                            this.setUpdateType(UpdateType.Local));
                        }
                    }, {
                        key: "fontFamily",
                        get: function() {
                            return this.textProps.fontFamily;
                        },
                        set: function(value) {
                            this.textProps.fontFamily !== value && (!0 === this._waitingForFont && this.fontHandler.stopWaitingForFont(this.textProps.fontFamily, this), 
                            this.textProps.fontFamily = value, this._layoutGenerated = !1, this.setUpdateType(UpdateType.Local));
                        }
                    }, {
                        key: "fontStyle",
                        get: function() {
                            return this.textProps.fontStyle;
                        },
                        set: function(value) {
                            this.textProps.fontStyle !== value && (this.textProps.fontStyle = value, this._layoutGenerated = !1, 
                            this.setUpdateType(UpdateType.Local));
                        }
                    }, {
                        key: "textAlign",
                        get: function() {
                            return this.textProps.textAlign;
                        },
                        set: function(value) {
                            this.textProps.textAlign !== value && (this.textProps.textAlign = value, this._layoutGenerated = !1, 
                            this.setUpdateType(UpdateType.Local));
                        }
                    }, {
                        key: "letterSpacing",
                        get: function() {
                            return this.textProps.letterSpacing;
                        },
                        set: function(value) {
                            this.textProps.letterSpacing !== value && (this.textProps.letterSpacing = value, 
                            this._layoutGenerated = !1, this.setUpdateType(UpdateType.Local));
                        }
                    }, {
                        key: "lineHeight",
                        get: function() {
                            return this.textProps.lineHeight;
                        },
                        set: function(value) {
                            this.textProps.lineHeight !== value && (this.textProps.lineHeight = value, this._layoutGenerated = !1, 
                            this.setUpdateType(UpdateType.Local));
                        }
                    }, {
                        key: "maxLines",
                        get: function() {
                            return this.textProps.maxLines;
                        },
                        set: function(value) {
                            this.textProps.maxLines !== value && (this.textProps.maxLines = value, this._layoutGenerated = !1, 
                            this.setUpdateType(UpdateType.Local));
                        }
                    }, {
                        key: "verticalAlign",
                        get: function() {
                            return this.textProps.verticalAlign;
                        },
                        set: function(value) {
                            this.textProps.verticalAlign !== value && (this.textProps.verticalAlign = value, 
                            this._layoutGenerated = !1, this.setUpdateType(UpdateType.Local));
                        }
                    }, {
                        key: "overflowSuffix",
                        get: function() {
                            return this.textProps.overflowSuffix;
                        },
                        set: function(value) {
                            this.textProps.overflowSuffix !== value && (this.textProps.overflowSuffix = value, 
                            this._layoutGenerated = !1, this.setUpdateType(UpdateType.Local));
                        }
                    }, {
                        key: "wordBreak",
                        get: function() {
                            return this.textProps.wordBreak;
                        },
                        set: function(value) {
                            this.textProps.wordBreak !== value && (this.textProps.wordBreak = value, this._layoutGenerated = !1, 
                            this.setUpdateType(UpdateType.Local));
                        }
                    }, {
                        key: "offsetY",
                        get: function() {
                            return this.textProps.offsetY;
                        },
                        set: function(value) {
                            this.textProps.offsetY !== value && (this.textProps.offsetY = value, this._layoutGenerated = !1, 
                            this.setUpdateType(UpdateType.Local));
                        }
                    }, {
                        key: "color",
                        get: function() {
                            return this.props.color;
                        },
                        set: function(value) {
                            _superPropSet(CoreTextNode, "color", value, this, 1, 1), "canvas" === this._type && (this._layoutGenerated = !1, 
                            this.setUpdateType(UpdateType.Local));
                        }
                    }, {
                        key: "forceLoad",
                        get: function() {
                            return this.textProps.forceLoad;
                        },
                        set: function(value) {
                            this.textProps.forceLoad !== value && (this.textProps.forceLoad = value, this.setUpdateType(UpdateType.Local));
                        }
                    }, {
                        key: "renderInfo",
                        get: function() {
                            return this._renderInfo;
                        }
                    } ]);
                }(CoreNode), EMPTY_TEXTURE_OPTIONS = Object.freeze({}), Stage = function() {
                    return _createClass(function(options) {
                        var _fontEngines$, _this19 = this;
                        this.options = void 0, this.animationManager = void 0, this.txManager = void 0, 
                        this.txMemManager = void 0, this.textRenderers = {}, this.fontHandlers = {}, this.shManager = void 0, 
                        this.renderer = void 0, this.root = void 0, this.boundsMargin = void 0, this.renderOnlyInViewport = void 0, 
                        this.defShaderNode = null, this.strictBound = void 0, this.preloadBound = void 0, 
                        this.defaultTexture = null, this.pixelRatio = void 0, this.bufferMemory = 2e6, this.platform = void 0, 
                        this.calculateTextureCoord = void 0, this.targetFrameTime = 0, this.eventBus = void 0, 
                        this.isContextLost = !1, this.startTime = 0, this.deltaTime = 0, this.lastFrameTime = 0, 
                        this.currentFrameTime = 0, this.elapsedTime = 0, this.timedNodes = [], this.clrColor = 0, 
                        this.fpsNumFrames = 0, this.fpsElapsedTime = 0, this.numQuadsRendered = 0, this.numRenderOpsRendered = 0, 
                        this.capabilities = null, this.renderRequested = !1, this.reprocessFrame = !1, this.reprocessCallback = null, 
                        this.frameEventQueue = [], this.renderList = [], this.renderListDirty = !0, this.hasOnlyOneFontEngine = void 0, 
                        this.hasOnlyCanvasFontEngine = void 0, this.hasCanvasEngine = void 0, this.singleFontEngine = null, 
                        this.singleFontHandler = null, this.contextSpy = null, this.options = options;
                        var canvas = options.canvas, clearColor = options.clearColor, appWidth = options.appWidth, appHeight = options.appHeight, boundsMargin = options.boundsMargin, enableContextSpy = options.enableContextSpy, forceWebGL2 = options.forceWebGL2, disableVertexArrayObject = options.disableVertexArrayObject, numImageWorkers = options.numImageWorkers, textureMemory = options.textureMemory, renderEngine = options.renderEngine, fontEngines = options.fontEngines, createImageBitmapSupport = options.createImageBitmapSupport, premultiplyAlphaHonored = options.premultiplyAlphaHonored, platform = options.platform, maxRetryCount = options.maxRetryCount;
                        setBaselineMode(options.textBaselineMode), this.platform = platform, this.renderOnlyInViewport = !1 !== options.renderOnlyInViewport, 
                        this.startTime = platform.getTimeStamp(), this.eventBus = options.eventBus, this.targetFrameTime = options.targetFPS > 0 ? 1e3 / options.targetFPS : 0, 
                        this.txManager = new CoreTextureManager(this, {
                            numImageWorkers: numImageWorkers,
                            createImageBitmapSupport: createImageBitmapSupport,
                            premultiplyAlphaHonored: null == premultiplyAlphaHonored || premultiplyAlphaHonored,
                            maxRetryCount: maxRetryCount
                        }), this.txManager.on("initialized", function() {
                            _this19.requestRender();
                        }), this.txMemManager = new TextureMemoryManager(this, textureMemory), this.animationManager = new AnimationManager, 
                        this.contextSpy = enableContextSpy ? new ContextSpy : null;
                        var bm = [ 0, 0, 0, 0 ];
                        boundsMargin && (bm = Array.isArray(boundsMargin) ? boundsMargin : [ boundsMargin, boundsMargin, boundsMargin, boundsMargin ]), 
                        this.boundsMargin = bm, this.strictBound = createBound(0, 0, appWidth, appHeight), 
                        this.preloadBound = createPreloadBounds(this.strictBound, bm), this.clrColor = clearColor, 
                        this.pixelRatio = options.devicePhysicalPixelRatio * options.deviceLogicalPixelRatio, 
                        this.renderer = new renderEngine({
                            stage: this,
                            canvas: canvas,
                            contextSpy: this.contextSpy,
                            forceWebGL2: forceWebGL2,
                            disableVertexArrayObject: disableVertexArrayObject
                        }), this.shManager = new CoreShaderManager(this), this.defShaderNode = this.renderer.getDefaultShaderNode(), 
                        this.calculateTextureCoord = void 0 !== this.renderer.getTextureCoords;
                        var renderMode = this.renderer.mode || "webgl";
                        if ("canvas" === renderMode && this.txMemManager.updateSettings(_objectSpread(_objectSpread({}, textureMemory), {}, {
                            criticalThreshold: 0,
                            doNotExceedCriticalThreshold: !1
                        })), this.createDefaultTexture(), premultiplyRGB = "webgl" === renderMode, this.txManager.renderer = this.renderer, 
                        this.hasOnlyOneFontEngine = 1 === fontEngines.length, this.hasOnlyCanvasFontEngine = 1 === fontEngines.length && "canvas" === fontEngines[0].type, 
                        this.hasCanvasEngine = !1, this.singleFontEngine = this.hasOnlyOneFontEngine ? fontEngines[0] : null, 
                        this.singleFontHandler = this.hasOnlyOneFontEngine ? null == (_fontEngines$ = fontEngines[0]) ? void 0 : _fontEngines$.font : null, 
                        null === this.singleFontEngine) fontEngines.filter(function(fontEngine) {
                            var type = fontEngine.type;
                            return "sdf" === type && "canvas" === renderMode ? (console.warn("MsdfTextRenderer is not compatible with Canvas renderer. Skipping..."), 
                            !1) : ("canvas" === type && (_this19.hasCanvasEngine = !0), !0);
                        }).sort(function(a, b) {
                            return "sdf" === a.type ? -1 : "sdf" === b.type || "canvas" === a.type ? 1 : "canvas" === b.type ? -1 : 0;
                        }).forEach(function(fontEngine) {
                            var type = fontEngine.type;
                            _this19.textRenderers[type] = fontEngine, _this19.textRenderers[type].init(_this19), 
                            _this19.fontHandlers[type] = fontEngine.font;
                        }); else {
                            var fontEngine = this.singleFontEngine, type = fontEngine.type;
                            "sdf" === type && "canvas" === renderMode ? console.warn("MsdfTextRenderer is not compatible with Canvas renderer. Skipping...") : ("canvas" === type && (this.hasCanvasEngine = !0), 
                            this.textRenderers[type] = fontEngine, this.fontHandlers[type] = fontEngine.font, 
                            this.textRenderers[type].init(this));
                        }
                        0 === Object.keys(this.textRenderers).length && console.warn("No text renderers available. Your text will not render.");
                        var rootNode = new CoreNode(this, {
                            x: 0,
                            y: 0,
                            w: appWidth,
                            h: appHeight,
                            alpha: 1,
                            ignoreParentAlpha: !1,
                            autosize: !1,
                            boundsMargin: null,
                            clipping: !1,
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
                            rtt: !1,
                            src: null,
                            scale: 1
                        });
                        this.root = rootNode, rootNode.updateLocalTransform(), Matrix3d.copy(rootNode.localTransform, rootNode.globalTransform), 
                        rootNode.sceneGlobalTransform = Matrix3d.copy(rootNode.localTransform), rootNode.calculateRenderCoords(), 
                        rootNode.updateBoundingRect(), rootNode.createRenderBounds(), rootNode.updateRenderState(CoreNodeRenderState.InViewport), 
                        rootNode.updateIsRenderable(), rootNode.premultipliedColorTl = rootNode.premultipliedColorTr = rootNode.premultipliedColorBl = rootNode.premultipliedColorBr = 0, 
                        this.platform.startLoop(this);
                    }, [ {
                        key: "setClearColor",
                        value: function(color) {
                            this.clearColor = color, this.renderer.updateClearColor(color), this.renderRequested = !0;
                        }
                    }, {
                        key: "updateTargetFrameTime",
                        value: function() {
                            this.targetFrameTime = this.options.targetFPS > 0 ? 1e3 / this.options.targetFPS : 0;
                        }
                    }, {
                        key: "updateFrameTime",
                        value: function() {
                            var newFrameTime = this.platform.getTimeStamp();
                            this.lastFrameTime = this.currentFrameTime, this.currentFrameTime = newFrameTime, 
                            this.elapsedTime = newFrameTime - this.startTime, this.deltaTime = this.lastFrameTime ? newFrameTime - this.lastFrameTime : 100 / 6, 
                            this.txManager.frameTime = newFrameTime, this.txMemManager.frameTime = newFrameTime, 
                            this.eventBus.emit("frameTick", {
                                time: this.currentFrameTime,
                                delta: this.deltaTime
                            });
                        }
                    }, {
                        key: "setContextLost",
                        value: function() {
                            !0 !== this.isContextLost && (this.isContextLost = !0, this.eventBus.emit("contextLost"));
                        }
                    }, {
                        key: "createDefaultTexture",
                        value: function() {
                            var _this20 = this;
                            this.defaultTexture = this.txManager.createTexture("ColorTexture", {
                                color: 4294967295
                            }), this.defaultTexture, this.txManager.loadTexture(this.defaultTexture, !0), this.defaultTexture.setRenderableOwner("stage", !0), 
                            this.defaultTexture.once("loaded", function() {
                                _this20.requestRender();
                            });
                        }
                    }, {
                        key: "updateAnimations",
                        value: function() {
                            var animationManager = this.animationManager;
                            return !!this.root && (animationManager.update(this.deltaTime), animationManager.activeAnimations.length > 0);
                        }
                    }, {
                        key: "hasSceneUpdates",
                        value: function() {
                            return !!this.root.updateType || this.renderRequested || this.txManager.hasUpdates();
                        }
                    }, {
                        key: "cleanupTextRenderers",
                        value: function() {
                            var textRenderers = this.textRenderers;
                            for (var key in textRenderers) textRenderers[key].cleanup();
                        }
                    }, {
                        key: "drawFrame",
                        value: function() {
                            var hasActiveAnimations = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], renderer = this.renderer, renderRequested = this.renderRequested, root = this.root;
                            do {
                                var forceUpdate = this.reprocessFrame;
                                if (this.reprocessFrame = !1, 0 !== root.updateType || forceUpdate) {
                                    root.updateType = 0;
                                    var childUpdateType = root.childUpdateType;
                                    root.childUpdateType = 0;
                                    for (var i = 0, length = root.children.length; i < length; i++) {
                                        var child = root.children[i];
                                        0 !== childUpdateType && (child.updateType |= childUpdateType), 0 !== child.updateType && child.update(this.deltaTime, root.clippingRect);
                                    }
                                }
                                null !== this.reprocessCallback && (this.reprocessCallback(), this.reprocessCallback = null);
                            } while (this.reprocessFrame);
                            if (!0 === this.txManager.hasUpdates() && (!0 === hasActiveAnimations ? this.txManager.processOne() : this.txManager.processUntil(this.options.textureProcessingTimeLimit)).catch(function(err) {
                                console.error("Error processing textures:", err);
                            }), renderer.reset(), renderer.rttNodes.length > 0 && renderer.renderRTTNodes(), 
                            !0 === this.renderListDirty) this.renderList.length = 0, this.buildRenderList(this.root), 
                            this.renderListDirty = !1; else for (var renderList = this.renderList, _i13 = 0, len = renderList.length; _i13 < len; _i13++) renderList[_i13].renderQuads(renderer);
                            if (renderer.render(), this.calculateFps(), this.calculateRenderInfo(), !0 === renderRequested && (this.renderRequested = !1), 
                            this.timedNodes.length > 0) for (var key in this.timedNodes) if (!0 === this.timedNodes[key].isRenderable) {
                                this.requestRender();
                                break;
                            }
                            !0 === this.txMemManager.criticalCleanupRequested && this.txMemManager.cleanup();
                        }
                    }, {
                        key: "queueFrameEvent",
                        value: function(name, data) {
                            this.frameEventQueue.push([ name, data ]);
                        }
                    }, {
                        key: "flushFrameEvents",
                        value: function() {
                            var _step19, _iterator19 = _createForOfIteratorHelper(this.frameEventQueue);
                            try {
                                for (_iterator19.s(); !(_step19 = _iterator19.n()).done; ) {
                                    var _step19$value = _slicedToArray(_step19.value, 2), name = _step19$value[0], data = _step19$value[1];
                                    this.eventBus.emit(name, data);
                                }
                            } catch (err) {
                                _iterator19.e(err);
                            } finally {
                                _iterator19.f();
                            }
                            this.frameEventQueue = [];
                        }
                    }, {
                        key: "calculateFps",
                        value: function() {
                            var fpsUpdateInterval = this.options.fpsUpdateInterval;
                            if (fpsUpdateInterval && (this.fpsNumFrames++, this.fpsElapsedTime += this.deltaTime, 
                            this.fpsElapsedTime >= fpsUpdateInterval)) {
                                var _this$contextSpy$getD, _this$contextSpy, _this$renderer$getRen, _this$renderer$getQua, _this$contextSpy2, fps = Math.round(1e3 * this.fpsNumFrames / this.fpsElapsedTime);
                                this.fpsNumFrames = 0, this.fpsElapsedTime = 0, null === this.capabilities && (this.capabilities = this.renderer.getCapabilities()), 
                                this.queueFrameEvent("fpsUpdate", {
                                    fps: fps,
                                    contextSpyData: null !== (_this$contextSpy$getD = null == (_this$contextSpy = this.contextSpy) ? void 0 : _this$contextSpy.getData()) && void 0 !== _this$contextSpy$getD ? _this$contextSpy$getD : null,
                                    renderOps: null !== (_this$renderer$getRen = this.renderer.getRenderOpCount()) && void 0 !== _this$renderer$getRen ? _this$renderer$getRen : 0,
                                    quads: null !== (_this$renderer$getQua = this.renderer.getQuadCount()) && void 0 !== _this$renderer$getQua ? _this$renderer$getQua : 0,
                                    capabilities: this.capabilities
                                }), null == (_this$contextSpy2 = this.contextSpy) || _this$contextSpy2.reset();
                            }
                        }
                    }, {
                        key: "calculateRenderInfo",
                        value: function() {
                            var quads = this.renderer.getQuadCount(), renderOps = this.renderer.getRenderOpCount();
                            (quads && quads !== this.numQuadsRendered || renderOps && renderOps !== this.numRenderOpsRendered) && (this.numQuadsRendered = quads || 0, 
                            this.numRenderOpsRendered = renderOps || 0, this.queueFrameEvent("renderUpdate", {
                                quads: this.numQuadsRendered,
                                renderOps: this.numRenderOpsRendered
                            }));
                        }
                    }, {
                        key: "requestRenderListUpdate",
                        value: function() {
                            void 0 !== this.renderer.invalidateQuadBuffer && this.renderer.invalidateQuadBuffer(), 
                            this.renderListDirty = !0, this.requestRender();
                        }
                    }, {
                        key: "buildRenderList",
                        value: function(node) {
                            !0 === node.isRenderable && (node.renderQuads(this.renderer), this.renderList.push(node));
                            for (var children = node.children, len = children.length, i = 0; i < len; i++) {
                                var child = children[i];
                                0 !== child.worldAlpha && child.renderState !== CoreNodeRenderState.OutOfBounds && this.buildRenderList(child);
                            }
                        }
                    }, {
                        key: "requestRender",
                        value: function() {
                            this.renderRequested = !0;
                        }
                    }, {
                        key: "reprocessUpdates",
                        value: function(callback) {
                            this.reprocessFrame = !0, callback && (this.reprocessCallback = callback);
                        }
                    }, {
                        key: "resolveTextRenderer",
                        value: function(trProps) {
                            var _this$fontHandlers$sd, _this$singleFontHandl, textRendererOverride = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                            if (null !== textRendererOverride) {
                                var overrideKey = String(textRendererOverride);
                                return void 0 === this.textRenderers[overrideKey] ? (console.warn("Text renderer override '".concat(overrideKey, "' not found.")), 
                                null) : this.textRenderers[overrideKey];
                            }
                            return null !== this.singleFontEngine ? !0 === this.hasOnlyCanvasFontEngine || !0 === (null == (_this$singleFontHandl = this.singleFontHandler) ? void 0 : _this$singleFontHandl.canRenderFont(trProps)) ? this.singleFontEngine : (console.warn("Text renderer cannot render font", trProps), 
                            null) : !0 === (null == (_this$fontHandlers$sd = this.fontHandlers.sdf) ? void 0 : _this$fontHandlers$sd.canRenderFont(trProps)) ? this.textRenderers.sdf || null : !0 === this.hasCanvasEngine ? this.textRenderers.canvas || null : (console.warn("No text renderers available. Your text will not render."), 
                            null);
                        }
                    }, {
                        key: "createNode",
                        value: function(props) {
                            var resolvedProps = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? props : this.resolveNodeDefaults(props);
                            return new CoreNode(this, resolvedProps);
                        }
                    }, {
                        key: "createTextNode",
                        value: function(props) {
                            var resolvedProps = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? props : this.resolveTextNodeDefaults(props), resolvedTextRenderer = this.resolveTextRenderer(resolvedProps, resolvedProps.textRendererOverride);
                            if (!resolvedTextRenderer) throw new Error("No compatible text renderer found for ".concat(resolvedProps.fontFamily));
                            return new CoreTextNode(this, resolvedProps, resolvedTextRenderer);
                        }
                    }, {
                        key: "createNodeProps",
                        value: function(initial) {
                            return this.resolveNodeDefaults(null != initial ? initial : {});
                        }
                    }, {
                        key: "createTextNodeProps",
                        value: function(initial) {
                            return this.resolveTextNodeDefaults(null != initial ? initial : {});
                        }
                    }, {
                        key: "resolveTextNodeDefaults",
                        value: function(props) {
                            var _props$text, _props$textRendererOv, fontSize = props.fontSize || 16, resolvedProps = this.resolveNodeDefaults(props);
                            return resolvedProps.text = null !== (_props$text = props.text) && void 0 !== _props$text ? _props$text : "", 
                            resolvedProps.textRendererOverride = null !== (_props$textRendererOv = props.textRendererOverride) && void 0 !== _props$textRendererOv ? _props$textRendererOv : null, 
                            resolvedProps.fontSize = fontSize, resolvedProps.fontFamily = props.fontFamily || "sans-serif", 
                            resolvedProps.fontStyle = props.fontStyle || "normal", resolvedProps.textAlign = props.textAlign || "left", 
                            resolvedProps.offsetY = props.offsetY || 0, resolvedProps.letterSpacing = props.letterSpacing || 0, 
                            resolvedProps.lineHeight = props.lineHeight || 1.2, resolvedProps.maxLines = props.maxLines || 0, 
                            resolvedProps.verticalAlign = props.verticalAlign || "top", resolvedProps.overflowSuffix = props.overflowSuffix || "...", 
                            resolvedProps.wordBreak = props.wordBreak || "break-word", resolvedProps.contain = props.contain || "none", 
                            resolvedProps.maxWidth = props.maxWidth || 0, resolvedProps.maxHeight = props.maxHeight || 0, 
                            resolvedProps.forceLoad = props.forceLoad || !1, resolvedProps;
                        }
                    }, {
                        key: "setBoundsMargin",
                        value: function(value) {
                            this.boundsMargin = Array.isArray(value) ? value : [ value, value, value, value ], 
                            this.updateViewportBounds();
                        }
                    }, {
                        key: "updateViewportBounds",
                        value: function() {
                            var _this$options = this.options, appWidth = _this$options.appWidth, appHeight = _this$options.appHeight;
                            this.strictBound = createBound(0, 0, appWidth, appHeight), this.preloadBound = createPreloadBounds(this.strictBound, this.boundsMargin), 
                            this.root.strictBound = this.strictBound, this.root.preloadBound = this.preloadBound, 
                            this.root.setUpdateType(UpdateType.RenderBounds | UpdateType.Children), this.root.childUpdateType |= UpdateType.RenderBounds;
                        }
                    }, {
                        key: "trackTimedNode",
                        value: function(node) {
                            void 0 === this.timedNodes[node.id] && (this.timedNodes[node.id] = node);
                        }
                    }, {
                        key: "untrackTimedNode",
                        value: function(node) {
                            void 0 !== this.timedNodes[node.id] && delete this.timedNodes[node.id];
                        }
                    }, {
                        key: "resolveNodeDefaults",
                        value: function(props) {
                            var _props$color, _props$scale, _props$mount, _props$pivot, _props$x, _props$y, _props$w, _props$h, _props$alpha, _props$ignoreParentAl, _props$autosize, _props$boundsMargin, _props$clipping, _props$placeholderCol, _props$zIndex, _props$parent, _props$texture, _props$textureOptions, _props$shader, _props$src, _ref9, _props$scaleX, _ref10, _props$scaleY, _props$mountX, _props$mountY, _props$pivotX, _props$pivotY, _props$rotation, _props$rtt, color = null !== (_props$color = props.color) && void 0 !== _props$color ? _props$color : 4294967295, colorTop = color, colorBottom = color, colorLeft = color, colorRight = color, colorTl = color, colorTr = color, colorBl = color, colorBr = color;
                            if (void 0 !== props.colorTop || void 0 !== props.colorBottom || void 0 !== props.colorLeft || void 0 !== props.colorRight || void 0 !== props.colorTl || void 0 !== props.colorTr || void 0 !== props.colorBl || void 0 !== props.colorBr) {
                                var _ref, _ref2, _props$colorTl, _ref3, _ref4, _props$colorTr, _ref5, _ref6, _props$colorBl, _ref7, _ref8, _props$colorBr, top = props.colorTop, bottom = props.colorBottom, left = props.colorLeft, right = props.colorRight;
                                colorTop = null != top ? top : color, colorBottom = null != bottom ? bottom : color, 
                                colorLeft = null != left ? left : color, colorRight = null != right ? right : color, 
                                colorTl = null !== (_ref = null !== (_ref2 = null !== (_props$colorTl = props.colorTl) && void 0 !== _props$colorTl ? _props$colorTl : top) && void 0 !== _ref2 ? _ref2 : left) && void 0 !== _ref ? _ref : color, 
                                colorTr = null !== (_ref3 = null !== (_ref4 = null !== (_props$colorTr = props.colorTr) && void 0 !== _props$colorTr ? _props$colorTr : top) && void 0 !== _ref4 ? _ref4 : right) && void 0 !== _ref3 ? _ref3 : color, 
                                colorBl = null !== (_ref5 = null !== (_ref6 = null !== (_props$colorBl = props.colorBl) && void 0 !== _props$colorBl ? _props$colorBl : bottom) && void 0 !== _ref6 ? _ref6 : left) && void 0 !== _ref5 ? _ref5 : color, 
                                colorBr = null !== (_ref7 = null !== (_ref8 = null !== (_props$colorBr = props.colorBr) && void 0 !== _props$colorBr ? _props$colorBr : bottom) && void 0 !== _ref8 ? _ref8 : right) && void 0 !== _ref7 ? _ref7 : color;
                            }
                            var scale = null !== (_props$scale = props.scale) && void 0 !== _props$scale ? _props$scale : null, mount = null !== (_props$mount = props.mount) && void 0 !== _props$mount ? _props$mount : 0, pivot = null !== (_props$pivot = props.pivot) && void 0 !== _props$pivot ? _props$pivot : .5, data = {};
                            return {
                                x: null !== (_props$x = props.x) && void 0 !== _props$x ? _props$x : 0,
                                y: null !== (_props$y = props.y) && void 0 !== _props$y ? _props$y : 0,
                                w: null !== (_props$w = props.w) && void 0 !== _props$w ? _props$w : 0,
                                h: null !== (_props$h = props.h) && void 0 !== _props$h ? _props$h : 0,
                                alpha: null !== (_props$alpha = props.alpha) && void 0 !== _props$alpha ? _props$alpha : 1,
                                ignoreParentAlpha: null !== (_props$ignoreParentAl = props.ignoreParentAlpha) && void 0 !== _props$ignoreParentAl && _props$ignoreParentAl,
                                autosize: null !== (_props$autosize = props.autosize) && void 0 !== _props$autosize && _props$autosize,
                                boundsMargin: null !== (_props$boundsMargin = props.boundsMargin) && void 0 !== _props$boundsMargin ? _props$boundsMargin : null,
                                clipping: null !== (_props$clipping = props.clipping) && void 0 !== _props$clipping && _props$clipping,
                                color: color,
                                colorTop: colorTop,
                                colorBottom: colorBottom,
                                colorLeft: colorLeft,
                                colorRight: colorRight,
                                colorTl: colorTl,
                                colorTr: colorTr,
                                colorBl: colorBl,
                                colorBr: colorBr,
                                placeholderColor: null !== (_props$placeholderCol = props.placeholderColor) && void 0 !== _props$placeholderCol ? _props$placeholderCol : 0,
                                zIndex: null !== (_props$zIndex = props.zIndex) && void 0 !== _props$zIndex ? _props$zIndex : 0,
                                parent: null !== (_props$parent = props.parent) && void 0 !== _props$parent ? _props$parent : null,
                                texture: null !== (_props$texture = props.texture) && void 0 !== _props$texture ? _props$texture : null,
                                textureOptions: null !== (_props$textureOptions = props.textureOptions) && void 0 !== _props$textureOptions ? _props$textureOptions : EMPTY_TEXTURE_OPTIONS,
                                shader: null !== (_props$shader = props.shader) && void 0 !== _props$shader ? _props$shader : this.defShaderNode,
                                src: null !== (_props$src = props.src) && void 0 !== _props$src ? _props$src : null,
                                srcHeight: props.srcHeight,
                                srcWidth: props.srcWidth,
                                srcX: props.srcX,
                                srcY: props.srcY,
                                scale: scale,
                                scaleX: null !== (_ref9 = null !== (_props$scaleX = props.scaleX) && void 0 !== _props$scaleX ? _props$scaleX : scale) && void 0 !== _ref9 ? _ref9 : 1,
                                scaleY: null !== (_ref10 = null !== (_props$scaleY = props.scaleY) && void 0 !== _props$scaleY ? _props$scaleY : scale) && void 0 !== _ref10 ? _ref10 : 1,
                                mount: mount,
                                mountX: null !== (_props$mountX = props.mountX) && void 0 !== _props$mountX ? _props$mountX : mount,
                                mountY: null !== (_props$mountY = props.mountY) && void 0 !== _props$mountY ? _props$mountY : mount,
                                pivot: pivot,
                                pivotX: null !== (_props$pivotX = props.pivotX) && void 0 !== _props$pivotX ? _props$pivotX : pivot,
                                pivotY: null !== (_props$pivotY = props.pivotY) && void 0 !== _props$pivotY ? _props$pivotY : pivot,
                                rotation: null !== (_props$rotation = props.rotation) && void 0 !== _props$rotation ? _props$rotation : 0,
                                rtt: null !== (_props$rtt = props.rtt) && void 0 !== _props$rtt && _props$rtt,
                                data: data,
                                imageType: props.imageType,
                                preventDestroy: props.preventDestroy,
                                componentName: props.componentName,
                                componentLocation: props.componentLocation
                            };
                        }
                    }, {
                        key: "cleanup",
                        value: function() {
                            var full = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            this.txMemManager.cleanup(full);
                        }
                    }, {
                        key: "clearColor",
                        get: function() {
                            return this.clrColor;
                        },
                        set: function(value) {
                            this.renderer.updateClearColor(value), this.renderRequested = !0, this.clrColor = value;
                        }
                    }, {
                        key: "loadFont",
                        value: function(rendererType, options) {
                            var rendererTypeKey = String(rendererType), fontHandler = this.fontHandlers[rendererTypeKey];
                            return fontHandler ? fontHandler.loadFont(this, options) : Promise.reject(new Error("Font handler for renderer type '".concat(rendererTypeKey, "' not found. Available types: ").concat(Object.keys(this.fontHandlers).join(", "))));
                        }
                    } ]);
                }(), WebPlatform = function(_Platform) {
                    function WebPlatform() {
                        return _callSuper(this, WebPlatform, arguments);
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
                        key: "startLoop",
                        value: function(stage) {
                            var isIdle = !1, lastFrameTime = 0, _runLoop = function() {
                                var currentTime = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                                if (!0 !== stage.isContextLost) {
                                    var targetFrameTime = stage.targetFrameTime;
                                    if (targetFrameTime > 0) {
                                        var elapsed = currentTime - lastFrameTime;
                                        if (elapsed < targetFrameTime) {
                                            var wait = targetFrameTime - elapsed;
                                            return void (wait > 4 ? setTimeout(requestLoop, wait - 4) : requestAnimationFrame(_runLoop));
                                        }
                                        lastFrameTime = currentTime - elapsed % targetFrameTime;
                                    } else lastFrameTime = currentTime;
                                    var scheduled = !1;
                                    try {
                                        stage.updateFrameTime();
                                        var hasActiveAnimations = stage.updateAnimations();
                                        if (!stage.hasSceneUpdates()) return stage.calculateFps(), setTimeout(requestLoop, Math.max(targetFrameTime, 15)), 
                                        scheduled = !0, !1 === isIdle && (!0 === stage.renderer.checkForOutOfMemory() && stage.txMemManager.handleOutOfMemory(), 
                                        stage.shManager.cleanup(), stage.cleanupTextRenderers(), stage.eventBus.emit("idle"), 
                                        isIdle = !0), !0 === stage.txMemManager.checkCleanup() && stage.txMemManager.cleanup(), 
                                        void stage.flushFrameEvents();
                                        isIdle = !1, stage.drawFrame(hasActiveAnimations), stage.flushFrameEvents(), requestAnimationFrame(_runLoop), 
                                        scheduled = !0;
                                    } catch (error) {
                                        var handleLoopError = stage.options.handleLoopError;
                                        void 0 !== handleLoopError && handleLoopError(error), !1 === scheduled && requestAnimationFrame(_runLoop);
                                    }
                                }
                            }, requestLoop = function() {
                                return requestAnimationFrame(_runLoop);
                            };
                            requestAnimationFrame(_runLoop);
                        }
                    }, {
                        key: "createImageBitmap",
                        value: function(_createImageBitmap2) {
                            function createImageBitmap(_x29, _x30, _x31, _x32, _x33, _x34) {
                                return _createImageBitmap2.apply(this, arguments);
                            }
                            return createImageBitmap.toString = function() {
                                return _createImageBitmap2.toString();
                            }, createImageBitmap;
                        }(function(blob, sxOrOptions, sy, sw, sh, options) {
                            return "number" == typeof sxOrOptions ? createImageBitmap(blob, sxOrOptions, null != sy ? sy : 0, null != sw ? sw : 0, null != sh ? sh : 0, options) : createImageBitmap(blob, sxOrOptions);
                        })
                    }, {
                        key: "getTimeStamp",
                        value: function() {
                            return Date.now();
                        }
                    }, {
                        key: "addFont",
                        value: function(font) {
                            document.fonts.add(font);
                        }
                    } ]);
                }(Platform = _createClass(function() {})), noop = function() {}, _export("st", RendererMain = function(_EventEmitter4) {
                    function RendererMain(settings, target) {
                        var _this21, _settings$renderOnlyI, _settings$clearColor, _settings$enableClear, _settings$textLayoutC, _settings$enableConte, _settings$forceWebGL, _settings$disableVert, _settings$inspector, _settings$inspectorOp, _settings$quadBufferS, _settings$fontEngines, _settings$textBaselin, _settings$maxRetryCou, _settings$handleLoopE, _settings$maxRetryCou2;
                        (_this21 = _callSuper(this, RendererMain)).root = void 0, _this21.canvas = void 0, 
                        _this21.stage = void 0, _this21.inspector = null;
                        var platform, resolvedTxSettings = _this21.resolveTxSettings(settings.textureMemory || {}), _settings = settings = {
                            appWidth: settings.appWidth || 1920,
                            appHeight: settings.appHeight || 1080,
                            textureMemory: resolvedTxSettings,
                            boundsMargin: settings.boundsMargin || 0,
                            renderOnlyInViewport: null === (_settings$renderOnlyI = settings.renderOnlyInViewport) || void 0 === _settings$renderOnlyI || _settings$renderOnlyI,
                            deviceLogicalPixelRatio: settings.deviceLogicalPixelRatio || 1,
                            devicePhysicalPixelRatio: settings.devicePhysicalPixelRatio || _this21.windowDevicePixelRatio() || 1,
                            clearColor: null !== (_settings$clearColor = settings.clearColor) && void 0 !== _settings$clearColor ? _settings$clearColor : 0,
                            fpsUpdateInterval: settings.fpsUpdateInterval || 0,
                            enableClear: null === (_settings$enableClear = settings.enableClear) || void 0 === _settings$enableClear || _settings$enableClear,
                            targetFPS: settings.targetFPS || 0,
                            textLayoutCacheSize: null !== (_settings$textLayoutC = settings.textLayoutCacheSize) && void 0 !== _settings$textLayoutC ? _settings$textLayoutC : 250,
                            numImageWorkers: void 0 !== settings.numImageWorkers ? settings.numImageWorkers : 2,
                            enableContextSpy: null !== (_settings$enableConte = settings.enableContextSpy) && void 0 !== _settings$enableConte && _settings$enableConte,
                            forceWebGL2: null !== (_settings$forceWebGL = settings.forceWebGL2) && void 0 !== _settings$forceWebGL && _settings$forceWebGL,
                            disableVertexArrayObject: null !== (_settings$disableVert = settings.disableVertexArrayObject) && void 0 !== _settings$disableVert && _settings$disableVert,
                            inspector: null !== (_settings$inspector = settings.inspector) && void 0 !== _settings$inspector && _settings$inspector,
                            inspectorOptions: null !== (_settings$inspectorOp = settings.inspectorOptions) && void 0 !== _settings$inspectorOp ? _settings$inspectorOp : {},
                            renderEngine: settings.renderEngine,
                            quadBufferSize: null !== (_settings$quadBufferS = settings.quadBufferSize) && void 0 !== _settings$quadBufferS ? _settings$quadBufferS : 4194304,
                            fontEngines: null !== (_settings$fontEngines = settings.fontEngines) && void 0 !== _settings$fontEngines ? _settings$fontEngines : [],
                            textBaselineMode: null !== (_settings$textBaselin = settings.textBaselineMode) && void 0 !== _settings$textBaselin ? _settings$textBaselin : "optical",
                            textureProcessingTimeLimit: settings.textureProcessingTimeLimit || 10,
                            canvas: settings.canvas,
                            createImageBitmapSupport: settings.createImageBitmapSupport || "full",
                            premultiplyAlphaHonored: void 0 === settings.premultiplyAlphaHonored || settings.premultiplyAlphaHonored,
                            platform: settings.platform || null,
                            maxRetryCount: null !== (_settings$maxRetryCou = settings.maxRetryCount) && void 0 !== _settings$maxRetryCou ? _settings$maxRetryCou : 5,
                            handleLoopError: null !== (_settings$handleLoopE = settings.handleLoopError) && void 0 !== _settings$handleLoopE ? _settings$handleLoopE : noop
                        }, appWidth = _settings.appWidth, appHeight = _settings.appHeight, deviceLogicalPixelRatio = _settings.deviceLogicalPixelRatio, devicePhysicalPixelRatio = _settings.devicePhysicalPixelRatio, inspector = _settings.inspector;
                        platform = void 0 !== settings.platform && null !== settings.platform && settings.platform.prototype instanceof Platform == !0 ? new settings.platform : new WebPlatform;
                        var canvas = settings.canvas || platform.createCanvas(), deviceLogicalWidth = appWidth * deviceLogicalPixelRatio, deviceLogicalHeight = appHeight * deviceLogicalPixelRatio;
                        if (_this21.canvas = canvas, canvas.width = deviceLogicalWidth * devicePhysicalPixelRatio, 
                        canvas.height = deviceLogicalHeight * devicePhysicalPixelRatio, canvas.style.width = "".concat(deviceLogicalWidth, "px"), 
                        canvas.style.height = "".concat(deviceLogicalHeight, "px"), _this21.stage = new Stage({
                            appWidth: appWidth,
                            appHeight: appHeight,
                            boundsMargin: settings.boundsMargin,
                            renderOnlyInViewport: settings.renderOnlyInViewport,
                            clearColor: settings.clearColor,
                            canvas: _this21.canvas,
                            deviceLogicalPixelRatio: deviceLogicalPixelRatio,
                            devicePhysicalPixelRatio: devicePhysicalPixelRatio,
                            enableContextSpy: settings.enableContextSpy,
                            forceWebGL2: settings.forceWebGL2,
                            disableVertexArrayObject: settings.disableVertexArrayObject,
                            fpsUpdateInterval: settings.fpsUpdateInterval,
                            enableClear: settings.enableClear,
                            numImageWorkers: settings.numImageWorkers,
                            renderEngine: settings.renderEngine,
                            textureMemory: resolvedTxSettings,
                            eventBus: _this21,
                            quadBufferSize: settings.quadBufferSize,
                            fontEngines: settings.fontEngines,
                            textBaselineMode: settings.textBaselineMode,
                            inspector: null !== settings.inspector,
                            targetFPS: settings.targetFPS,
                            textLayoutCacheSize: settings.textLayoutCacheSize,
                            textureProcessingTimeLimit: settings.textureProcessingTimeLimit,
                            createImageBitmapSupport: settings.createImageBitmapSupport,
                            premultiplyAlphaHonored: settings.premultiplyAlphaHonored,
                            platform: platform,
                            maxRetryCount: null !== (_settings$maxRetryCou2 = settings.maxRetryCount) && void 0 !== _settings$maxRetryCou2 ? _settings$maxRetryCou2 : 5,
                            handleLoopError: settings.handleLoopError
                        }), _this21.root = _this21.stage.root, target) {
                            var targetEl;
                            if (!(targetEl = "string" == typeof target ? document.getElementById(target) : target)) throw new Error("Could not find target element");
                            targetEl.appendChild(canvas);
                        } else if (settings.canvas !== canvas) throw new Error("New canvas element could not be appended to undefined target");
                        return inspector && ENABLE_INSPECTOR && (_this21.inspector = new inspector(canvas, settings)), 
                        _this21;
                    }
                    return _inherits(RendererMain, _EventEmitter4), _createClass(RendererMain, [ {
                        key: "resolveTxSettings",
                        value: function(textureMemory) {
                            var _ref, _textureMemory$critic, _ref2, _textureMemory$target, _ref3, _textureMemory$cleanu, _ref4, _textureMemory$debugL, _ref5, _textureMemory$baseli, _ref6, _textureMemory$doNotE, currentTxSettings = this.stage && this.stage.options.textureMemory || {};
                            return {
                                criticalThreshold: null !== (_ref = null !== (_textureMemory$critic = null == textureMemory ? void 0 : textureMemory.criticalThreshold) && void 0 !== _textureMemory$critic ? _textureMemory$critic : null == currentTxSettings ? void 0 : currentTxSettings.criticalThreshold) && void 0 !== _ref ? _ref : 2e8,
                                targetThresholdLevel: null !== (_ref2 = null !== (_textureMemory$target = null == textureMemory ? void 0 : textureMemory.targetThresholdLevel) && void 0 !== _textureMemory$target ? _textureMemory$target : null == currentTxSettings ? void 0 : currentTxSettings.targetThresholdLevel) && void 0 !== _ref2 ? _ref2 : .8,
                                cleanupInterval: null !== (_ref3 = null !== (_textureMemory$cleanu = null == textureMemory ? void 0 : textureMemory.cleanupInterval) && void 0 !== _textureMemory$cleanu ? _textureMemory$cleanu : null == currentTxSettings ? void 0 : currentTxSettings.cleanupInterval) && void 0 !== _ref3 ? _ref3 : 5e3,
                                debugLogging: null !== (_ref4 = null !== (_textureMemory$debugL = null == textureMemory ? void 0 : textureMemory.debugLogging) && void 0 !== _textureMemory$debugL ? _textureMemory$debugL : null == currentTxSettings ? void 0 : currentTxSettings.debugLogging) && void 0 !== _ref4 && _ref4,
                                baselineMemoryAllocation: null !== (_ref5 = null !== (_textureMemory$baseli = null == textureMemory ? void 0 : textureMemory.baselineMemoryAllocation) && void 0 !== _textureMemory$baseli ? _textureMemory$baseli : null == currentTxSettings ? void 0 : currentTxSettings.baselineMemoryAllocation) && void 0 !== _ref5 ? _ref5 : 26e6,
                                doNotExceedCriticalThreshold: null !== (_ref6 = null !== (_textureMemory$doNotE = null == textureMemory ? void 0 : textureMemory.doNotExceedCriticalThreshold) && void 0 !== _textureMemory$doNotE ? _textureMemory$doNotE : null == currentTxSettings ? void 0 : currentTxSettings.doNotExceedCriticalThreshold) && void 0 !== _ref6 && _ref6
                            };
                        }
                    }, {
                        key: "createNode",
                        value: function(props) {
                            var resolved = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], node = this.stage.createNode(props, resolved);
                            return ENABLE_INSPECTOR && this.inspector ? this.inspector.createNode(node) : node;
                        }
                    }, {
                        key: "createNodeProps",
                        value: function(initial) {
                            return this.stage.createNodeProps(initial);
                        }
                    }, {
                        key: "createTextNode",
                        value: function(props) {
                            var resolved = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], textNode = this.stage.createTextNode(props, resolved);
                            return ENABLE_INSPECTOR && this.inspector ? this.inspector.createTextNode(textNode) : textNode;
                        }
                    }, {
                        key: "createTextNodeProps",
                        value: function(initial) {
                            return this.stage.createTextNodeProps(initial);
                        }
                    }, {
                        key: "destroyNode",
                        value: function(node) {
                            return ENABLE_INSPECTOR && this.inspector && this.inspector.destroyNode(node), node.destroy();
                        }
                    }, {
                        key: "createTexture",
                        value: function(textureType, props) {
                            return this.stage.txManager.createTexture(textureType, props);
                        }
                    }, {
                        key: "createShader",
                        value: function(shType, props) {
                            return this.stage.shManager.createShader(shType, props);
                        }
                    }, {
                        key: "getNodeById",
                        value: function(id) {
                            var _this$stage, root = null == (_this$stage = this.stage) ? void 0 : _this$stage.root;
                            if (!root) return null;
                            var _findNode = function(node) {
                                if (node.id === id) return node;
                                var _step20, _iterator20 = _createForOfIteratorHelper(node.children);
                                try {
                                    for (_iterator20.s(); !(_step20 = _iterator20.n()).done; ) {
                                        var child = _step20.value, found = _findNode(child);
                                        if (found) return found;
                                    }
                                } catch (err) {
                                    _iterator20.e(err);
                                } finally {
                                    _iterator20.f();
                                }
                                return null;
                            };
                            return _findNode(root);
                        }
                    }, {
                        key: "toggleFreeze",
                        value: function() {
                            throw new Error("Not implemented");
                        }
                    }, {
                        key: "advanceFrame",
                        value: function() {
                            throw new Error("Not implemented");
                        }
                    }, {
                        key: "getBufferInfo",
                        value: function() {
                            return this.stage.renderer.getBufferInfo();
                        }
                    }, {
                        key: "getCapabilities",
                        value: function() {
                            return this.stage.renderer.getCapabilities();
                        }
                    }, {
                        key: "rerender",
                        value: function() {
                            this.stage.requestRender();
                        }
                    }, {
                        key: "cleanup",
                        value: function() {
                            this.stage.cleanup();
                        }
                    }, {
                        key: "setClearColor",
                        value: function(color) {
                            this.stage.setClearColor(color);
                        }
                    }, {
                        key: "setOptions",
                        value: function(options) {
                            var stage = this.stage;
                            if (void 0 !== options.textureMemory) {
                                var textureMemory = options.textureMemory = this.resolveTxSettings(options.textureMemory);
                                stage.txMemManager.updateSettings(textureMemory), stage.txMemManager.cleanup();
                            }
                            if (void 0 !== options.boundsMargin) {
                                var bm = options.boundsMargin;
                                options.boundsMargin = Array.isArray(bm) ? bm : [ bm, bm, bm, bm ];
                            }
                            var _this$inspector, stageOptions = stage.options;
                            for (var key in options) stageOptions[key] = options[key];
                            if (void 0 !== options.inspector && ENABLE_INSPECTOR) if (!1 === options.inspector) null == (_this$inspector = this.inspector) || _this$inspector.destroy(), 
                            this.inspector = null; else if (null === this.inspector || this.inspector.constructor !== options.inspector) {
                                var _this$inspector2;
                                this.inspector = new options.inspector(this.canvas, stage.options), null == (_this$inspector2 = this.inspector) || _this$inspector2.createNodes(this.root);
                            }
                            var _this$inspector3, _this$inspector4, needDimensionsUpdate = !1;
                            (options.deviceLogicalPixelRatio || void 0 !== options.devicePhysicalPixelRatio) && (this.stage.pixelRatio = stageOptions.devicePhysicalPixelRatio * stageOptions.deviceLogicalPixelRatio, 
                            null == (_this$inspector3 = this.inspector) || _this$inspector3.updateViewport(stageOptions.appWidth, stageOptions.appHeight, stageOptions.deviceLogicalPixelRatio), 
                            needDimensionsUpdate = !0);
                            void 0 === options.appWidth && void 0 === options.appHeight || (null == (_this$inspector4 = this.inspector) || _this$inspector4.updateViewport(stageOptions.appWidth, stageOptions.appHeight, stageOptions.deviceLogicalPixelRatio), 
                            needDimensionsUpdate = !0);
                            void 0 !== options.boundsMargin && this.stage.setBoundsMargin(options.boundsMargin), 
                            void 0 !== options.clearColor && this.stage.setClearColor(options.clearColor), needDimensionsUpdate && this.updateAppDimensions();
                        }
                    }, {
                        key: "updateAppDimensions",
                        value: function() {
                            var _this$stage$options = this.stage.options, appWidth = _this$stage$options.appWidth, appHeight = _this$stage$options.appHeight, deviceLogicalPixelRatio = _this$stage$options.deviceLogicalPixelRatio, devicePhysicalPixelRatio = _this$stage$options.devicePhysicalPixelRatio, deviceLogicalWidth = appWidth * deviceLogicalPixelRatio, deviceLogicalHeight = appHeight * deviceLogicalPixelRatio;
                            this.canvas.width = deviceLogicalWidth * devicePhysicalPixelRatio, this.canvas.height = deviceLogicalHeight * devicePhysicalPixelRatio, 
                            this.canvas.style && (this.canvas.style.width = "".concat(deviceLogicalWidth, "px"), 
                            this.canvas.style.height = "".concat(deviceLogicalHeight, "px")), this.stage.renderer.updateViewport(), 
                            this.root.w = appWidth, this.root.h = appHeight, this.stage.updateViewportBounds();
                        }
                    }, {
                        key: "settings",
                        get: function() {
                            return this.stage.options;
                        }
                    }, {
                        key: "targetFPS",
                        get: function() {
                            return this.stage.options.targetFPS || 0;
                        },
                        set: function(fps) {
                            this.stage.options.targetFPS = fps > 0 ? fps : 0, this.stage.updateTargetFrameTime();
                        }
                    }, {
                        key: "windowDevicePixelRatio",
                        value: function() {
                            return "undefined" != typeof window ? window.devicePixelRatio : void 0;
                        }
                    } ]);
                }(EventEmitter)), _export("rt", sharedConfig = {
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
                _export("A", $TRACK = Symbol("solid-track")), signalOptions = {
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
                activeElement = _createSignal18[0], _setActiveElement = _createSignal18[1], _export("k", activeElement), 
                DOM_RENDERING = "undefined" != typeof SOLIDTV_DOM_RENDERING && !0 === SOLIDTV_DOM_RENDERING, 
                SHADERS_ENABLED = "undefined" == typeof SOLIDTV_DISABLE_SHADERS || !0 !== SOLIDTV_DISABLE_SHADERS, 
                isDomRendererActive = function() {
                    return DOM_RENDERING && Config.domRendererEnabled;
                }, _export("O", Config = {
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
                    rendererOptions: {},
                    stateOrder: []
                }), NodeType = {
                    Element: "element",
                    TextNode: "textNode",
                    Text: "text"
                }, TextNode = _createClass(function(text) {
                    this._type = "text", this.parent = void 0, this.text = void 0, this.text = text;
                }), _export("E", isFunction = function(obj) {
                    return "function" == typeof obj;
                }), _export("C", isFocused), colorToRgba = function(c) {
                    return "rgba(".concat(c >> 24 & 255, ",").concat(c >> 16 & 255, ",").concat(c >> 8 & 255, ",").concat((255 & c) / 255, ")");
                }, _styleRef = "undefined" != typeof document && (null == (_document$documentEle = document.documentElement) ? void 0 : _document$documentEle.style) || {}, 
                supportsObjectFit = "objectFit" in _styleRef, supportsObjectPosition = "objectPosition" in _styleRef, 
                supportsMixBlendMode = "mixBlendMode" in _styleRef, supportsWebkitMask = "webkitMaskImage" in _styleRef, 
                supportsCssMask = (supportsStandardMask = "maskImage" in _styleRef) || supportsWebkitMask, 
                animationTasks = [], animationFrameRequested = !1, AnimationController = function() {
                    return _createClass(function(node, props, rawSettings) {
                        var _rawSettings$duration, _rawSettings$delay, _rawSettings$easing, _rawSettings$loop, _rawSettings$repeat, _rawSettings$adaptive;
                        this.node = void 0, this.state = "paused", this.stopPromise = null, this.stopResolve = null, 
                        this.propsStart = {}, this.propsEnd = {}, this.timeStart = performance.now(), this.timeEnd = void 0, 
                        this.settings = void 0, this.iteration = 0, this.pausedTime = null, this.node = node, 
                        this.settings = {
                            duration: null !== (_rawSettings$duration = rawSettings.duration) && void 0 !== _rawSettings$duration ? _rawSettings$duration : 300,
                            delay: null !== (_rawSettings$delay = rawSettings.delay) && void 0 !== _rawSettings$delay ? _rawSettings$delay : 0,
                            easing: null !== (_rawSettings$easing = rawSettings.easing) && void 0 !== _rawSettings$easing ? _rawSettings$easing : "linear",
                            loop: null !== (_rawSettings$loop = rawSettings.loop) && void 0 !== _rawSettings$loop && _rawSettings$loop,
                            repeat: null !== (_rawSettings$repeat = rawSettings.repeat) && void 0 !== _rawSettings$repeat ? _rawSettings$repeat : 1,
                            stopMethod: !1,
                            adaptiveDuration: null !== (_rawSettings$adaptive = rawSettings.adaptiveDuration) && void 0 !== _rawSettings$adaptive && _rawSettings$adaptive
                        }, this.timeEnd = this.timeStart + this.settings.delay + this.settings.duration;
                        for (var _i14 = 0, _Object$entries = Object.entries(props); _i14 < _Object$entries.length; _i14++) {
                            var _Object$entries$_i = _slicedToArray(_Object$entries[_i14], 2), prop = _Object$entries$_i[0], value = _Object$entries$_i[1];
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
                            var _this$stopPromise, _this22 = this;
                            return null !== (_this$stopPromise = this.stopPromise) && void 0 !== _this$stopPromise || (this.stopPromise = new Promise(function(resolve) {
                                _this22.stopResolve = resolve;
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
                        var _this24;
                        return (_this24 = _callSuper(this, DOMText, [ stage, props ])).props = void 0, _this24.loaded = !1, 
                        _this24.props = props, _this24.div.innerText = props.text, updateNodeStyles(_this24), 
                        updateDOMTextSize(_this24, !1), syncContainTextNodeTracking(_this24), scheduleUpdateDOMTextMeasurement(_this24), 
                        _this24;
                    }
                    return _inherits(DOMText, _DOMNode), _createClass(DOMText, [ {
                        key: "destroy",
                        value: function() {
                            textNodesToMeasure.delete(this), containTextNodes.delete(this), _superPropGet(DOMText, "destroy", this, 3)([]);
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
                        key: "textRendererOverride",
                        get: function() {
                            return this.props.textRendererOverride;
                        },
                        set: function(v) {
                            this.props.textRendererOverride = v, updateNodeStyles(this);
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
                }(DOMNode = function(_EventEmitter5) {
                    function DOMNode(stage, props) {
                        var _this23;
                        (_this23 = _callSuper(this, DOMNode)).stage = void 0, _this23.props = void 0, _this23.div = document.createElement("div"), 
                        _this23.divBg = void 0, _this23.divBorder = void 0, _this23.imgEl = void 0, _this23.imageLoading = !1, 
                        _this23.lazyImagePendingSrc = null, _this23.lazyImageSubTextureProps = null, _this23.boundsDirty = !0, 
                        _this23.children = new Set, _this23._lastStyleStr = "", _this23.id = ++lastNodeId, 
                        _this23.renderState = 0, _this23.preventCleanup = !0, _this23.animate = animate, 
                        _this23.stage = stage, _this23.props = props, _this23.div._node = _this23, _this23.div.setAttribute("data-id", String(_this23.id)), 
                        elMap.set(_this23, _this23.div);
                        var parent = _this23.props.parent;
                        return parent instanceof DOMNode && parent.children.add(_this23), updateNodeParent(_this23), 
                        updateNodeStyles(_this23), updateNodeData(_this23), _this23;
                    }
                    return _inherits(DOMNode, _EventEmitter5), _createClass(DOMNode, [ {
                        key: "destroy",
                        value: function() {
                            var _this$div$parentNode;
                            elMap.delete(this);
                            var parent = this.props.parent;
                            parent instanceof DOMNode && parent.children.delete(this), null == (_this$div$parentNode = this.div.parentNode) || _this$div$parentNode.removeChild(this.div);
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
                            var _step21, _iterator21 = _createForOfIteratorHelper(this.children);
                            try {
                                for (_iterator21.s(); !(_step21 = _iterator21.n()).done; ) {
                                    var child = _step21.value;
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
                                _iterator21.e(err);
                            } finally {
                                _iterator21.f();
                            }
                        }
                    }, {
                        key: "updateRenderState",
                        value: function(renderState) {
                            if (renderState !== this.renderState) {
                                var previous = this.renderState;
                                this.renderState = renderState;
                                var event = CoreNodeRenderStateMap.get(renderState);
                                isRenderStateInBounds(renderState) && this.applyPendingImageSrc(), event && "init" !== event && this.emit(event, {
                                    previous: previous,
                                    current: renderState
                                }), this.imgEl && (this.imgEl.dataset.state = event);
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
                                this.imgEl.dataset.pendingSrc = pendingSrc, this.imgEl.src = pendingSrc, this.imgEl.dataset.rawSrc = pendingSrc, 
                                this.imgEl.dataset.pendingSrc = "");
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
                        key: "rtt",
                        get: function() {
                            return this.props.rtt;
                        },
                        set: function(v) {
                            this.props.rtt = v, updateNodeStyles(this);
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
                        key: "boundsMargin",
                        get: function() {
                            return this.props.boundsMargin;
                        },
                        set: function(value) {
                            this.props.boundsMargin = value, this.boundsDirty = !0, this.markChildrenBoundsDirty();
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
                            loadFont: (_loadFont = _asyncToGenerator(_regenerator().m(function _callee18() {
                                return _regenerator().w(function(_context19) {
                                    for (;;) if (0 === _context19.n) return _context19.a(2);
                                }, _callee18);
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
                            var _this25 = this, _wrappedListener = function(target, data) {
                                _this25.off(event, _wrappedListener), listener(target, data);
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
                            if (listeners && 0 !== listeners.size) for (var hasExplicitTarget = 3 === arguments.length, target = hasExplicitTarget ? targetOrData : this.root, data = hasExplicitTarget ? maybeData : targetOrData, _i15 = 0, _Array$from = Array.from(listeners); _i15 < _Array$from.length; _i15++) {
                                var listener = _Array$from[_i15];
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
                                var _props$text, _props$textRendererOv, _props$fontSize, _props$fontFamily, _props$fontStyle, _props$fontWeight, _props$forceLoad, _props$textAlign, _props$contain, _props$offsetY, _props$letterSpacing, _props$lineHeight, _props$maxLines, _props$maxWidth, _props$maxHeight, _props$verticalAlign, _props$overflowSuffix, _props$wordBreak;
                                return _objectSpread(_objectSpread({}, resolveNodeDefaults(props)), {}, {
                                    text: null !== (_props$text = props.text) && void 0 !== _props$text ? _props$text : "",
                                    textRendererOverride: null !== (_props$textRendererOv = props.textRendererOverride) && void 0 !== _props$textRendererOv ? _props$textRendererOv : null,
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
                            for (var _len6 = arguments.length, args = new Array(_len6), _key9 = 0; _key9 < _len6; _key9++) args[_key9] = arguments[_key9];
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
                                break;

                              case "RenderTexture":
                                type = TextureType.renderToTexture;
                            }
                            return {
                                type: type,
                                props: props
                            };
                        }
                    } ]);
                }(), States = function(_Array) {
                    function States(callback) {
                        var _this26, _this27 = this, initialState = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, _super = function() {
                            for (var _len7 = arguments.length, _args = new Array(_len7), _key0 = 0; _key0 < _len7; _key0++) _args[_key0] = arguments[_key0];
                            return (_this26 = _callSuper(_this27, States, [].concat(_args))).onChange = void 0, 
                            _assertThisInitialized(_this26);
                        };
                        return isArray(initialState) ? _super.apply(void 0, _toConsumableArray(initialState)) : isString(initialState) ? _super(initialState) : _super.apply(void 0, _toConsumableArray(Object.entries(initialState).filter(function(_ref31) {
                            var _ref32 = _slicedToArray(_ref31, 2);
                            _ref32[0];
                            return _ref32[1];
                        }).map(function(_ref33) {
                            return _slicedToArray(_ref33, 1)[0];
                        }))), _this26.onChange = callback, _possibleConstructorReturn(_this26, _assertThisInitialized(_this26));
                    }
                    return _inherits(States, _Array), _createClass(States, [ {
                        key: "has",
                        value: function(state) {
                            return this.indexOf(state) >= 0 || this.indexOf("$".concat(state)) >= 0;
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
                            if (isArray(newStates)) this.length = 0, this.push.apply(this, _toConsumableArray(newStates)); else if (isString(newStates)) this.length = 0, 
                            this.push(newStates); else for (var state in newStates) if (newStates[state]) this.has(state) || this.push(state); else {
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
                }, keyHoldMapEntries = {}, flattenKeyMap = function(keyMap, targetMap) {
                    for (var newTargetMap = targetMap, _loop5 = function() {
                        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i16], 2), key = _Object$entries2$_i[0], value = _Object$entries2$_i[1];
                        Array.isArray(value) ? value.forEach(function(v) {
                            newTargetMap[v] = key;
                        }) : null === value ? delete newTargetMap[key] : newTargetMap[value] = key;
                    }, _i16 = 0, _Object$entries2 = Object.entries(keyMap); _i16 < _Object$entries2.length; _i16++) _loop5();
                    return newTargetMap;
                }, needFocusDebugStyles = !0, addFocusDebug = function(prevFocusPath, newFocusPath) {
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
                }, focusHistory = [], getElementLabel = function(elm) {
                    var _elm$id, _ref;
                    if (!elm) return "None";
                    var id = null !== (_elm$id = elm.id) && void 0 !== _elm$id ? _elm$id : elm._id;
                    return null !== (_ref = null != id ? id : elm.componentName) && void 0 !== _ref ? _ref : "Unknown";
                }, setActiveElementCore = function(elm) {
                    var prev = activeElement();
                    elm !== prev && (updateFocusPath(elm, prev), Config.setActiveElement(elm));
                }, _createSignal20 = _slicedToArray(createSignal([]), 2), focusPath = _createSignal20[0], 
                setFocusPath = _createSignal20[1], _export("y", focusPath), updateFocusPath = function(currentFocusedElm, prevFocusedElm) {
                    for (var current = currentFocusedElm, fp = [], fpSet = new Set; current; ) {
                        var _current$onFocus, _current$onFocusChang;
                        if (!current.states.has(Config.focusStateKey) || current === currentFocusedElm) current.states.add(Config.focusStateKey), 
                        null == (_current$onFocus = current.onFocus) || _current$onFocus.call(current, currentFocusedElm, prevFocusedElm, current), 
                        null == (_current$onFocusChang = current.onFocusChanged) || _current$onFocusChang.call(current, !0, currentFocusedElm, prevFocusedElm, current);
                        fp.push(current), fpSet.add(current), current = current.parent;
                    }
                    var prevFp = focusPath();
                    prevFp.forEach(function(elm) {
                        var _elm$onBlur, _elm$onFocusChanged;
                        fpSet.has(elm) || (elm.states.remove(Config.focusStateKey), null == (_elm$onBlur = elm.onBlur) || _elm$onBlur.call(elm, currentFocusedElm, prevFocusedElm, elm), 
                        null == (_elm$onFocusChanged = elm.onFocusChanged) || _elm$onFocusChanged.call(elm, !1, currentFocusedElm, prevFocusedElm, elm));
                    }), Config.focusDebug && addFocusDebug(prevFp, fp), _signalWrapper(function() {
                        return setFocusPath(fp);
                    });
                }, lastGlobalKeyPressTime = 0, isElementThrottled = function(elm, sameKey, currentTime) {
                    return void 0 !== elm.throttleInput && sameKey && void 0 !== elm._lastAnyKeyPressTime && currentTime - elm._lastAnyKeyPressTime < elm.throttleInput;
                }, runCapturePhase = function(fp, e, mappedEvent, isUp, sameKey, currentTime) {
                    for (var finalFocusElm = fp[0], captureEvent = "onCapture".concat(mappedEvent || e.key).concat(isUp ? "Release" : ""), captureKey = isUp ? "onCaptureKeyRelease" : "onCaptureKey", i = fp.length - 1; i >= 0; i--) {
                        var elm = fp[i];
                        if (isElementThrottled(elm, sameKey, currentTime)) return !0;
                        var captureHandler = elm[captureEvent] || elm[captureKey];
                        if (isFunction(captureHandler) && !0 === captureHandler.call(elm, e, elm, finalFocusElm, mappedEvent)) return elm._lastAnyKeyPressTime = currentTime, 
                        !0;
                    }
                    return !1;
                }, runBubblePhase = function(fp, e, mappedEvent, isHold, isUp, sameKey, currentTime) {
                    for (var lastHandlerSeen, finalFocusElm = fp[0], eventHandlerKey = mappedEvent ? isUp ? "on".concat(mappedEvent, "Release") : "on".concat(mappedEvent) : void 0, fallbackHandlerKey = isUp ? void 0 : isHold ? "onKeyHold" : "onKeyPress", i = 0; i < fp.length; i++) {
                        var elm = fp[i];
                        if (isElementThrottled(elm, sameKey, currentTime)) return {
                            handled: !0,
                            lastHandlerSeen: lastHandlerSeen
                        };
                        var handled = !1;
                        if (eventHandlerKey) {
                            var eventHandler = elm[eventHandlerKey];
                            isFunction(eventHandler) && (lastHandlerSeen = elm, handled = !0 === eventHandler.call(elm, e, elm, finalFocusElm));
                        }
                        if (!handled && fallbackHandlerKey) {
                            var fallbackHandler = elm[fallbackHandlerKey];
                            isFunction(fallbackHandler) && (lastHandlerSeen = elm, handled = !0 === fallbackHandler.call(elm, e, mappedEvent, elm, finalFocusElm));
                        }
                        if (handled) return elm._lastAnyKeyPressTime = currentTime, {
                            handled: !0,
                            lastHandlerSeen: lastHandlerSeen
                        };
                    }
                    return {
                        handled: !1,
                        lastHandlerSeen: lastHandlerSeen
                    };
                }, propagateKeyPress = function(e, mappedEvent) {
                    var isHold = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], isUp = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], currentTime = performance.now(), key = e.key || e.keyCode, sameKey = lastInputKey === key;
                    if (lastInputKey = key, !isUp && Config.throttleInput) {
                        if (sameKey && currentTime - lastGlobalKeyPressTime < Config.throttleInput) return !1;
                        lastGlobalKeyPressTime = currentTime;
                    }
                    isUp || {
                        keyPressed: key,
                        mappedKey: mappedEvent
                    };
                    var fp = focusPath();
                    if (0 === fp.length) return !1;
                    if (runCapturePhase(fp, e, mappedEvent, isUp, sameKey, currentTime)) return !0;
                    var _runBubblePhase = runBubblePhase(fp, e, mappedEvent, isHold, isUp, sameKey, currentTime), handled = _runBubblePhase.handled;
                    _runBubblePhase.lastHandlerSeen;
                    return !!handled;
                }, keyHoldTimeouts = {}, handleKeyEvents = function(delay, keydown, keyup) {
                    if (keydown) {
                        var key = keydown.key || keydown.keyCode, mappedKeyHoldEvent = keyHoldMapEntries[keydown.key] || keyHoldMapEntries[keydown.keyCode], mappedKeyEvent = keyMapEntries[keydown.key] || keyMapEntries[keydown.keyCode];
                        if (mappedKeyHoldEvent) return void (keyHoldTimeouts[key] || (keyHoldTimeouts[key] = window.setTimeout(function() {
                            keyHoldTimeouts[key] = !0, propagateKeyPress(keydown, mappedKeyHoldEvent, !0);
                        }, delay)));
                        propagateKeyPress(keydown, mappedKeyEvent, !1);
                    } else if (keyup) {
                        var _key1 = keyup.key || keyup.keyCode, _mappedKeyEvent = keyMapEntries[keyup.key] || keyMapEntries[keyup.keyCode];
                        !0 === keyHoldTimeouts[_key1] ? delete keyHoldTimeouts[_key1] : keyHoldTimeouts[_key1] && (clearTimeout(keyHoldTimeouts[_key1]), 
                        delete keyHoldTimeouts[_key1], propagateKeyPress(keyup, _mappedKeyEvent, !1)), propagateKeyPress(keyup, _mappedKeyEvent, !1, !0);
                    }
                }, _export("b", function(userKeyMap, keyHoldOptions) {
                    userKeyMap && flattenKeyMap(userKeyMap, keyMapEntries), (null == keyHoldOptions ? void 0 : keyHoldOptions.userKeyHoldMap) && flattenKeyMap(keyHoldOptions.userKeyHoldMap, keyHoldMapEntries);
                    var owner = getOwner(), ownerContext = function(cb) {
                        runWithOwner(owner, cb);
                    };
                    _signalWrapper = ownerContext, Config.setActiveElement = function(elm) {
                        return ownerContext(function() {
                            return _setActiveElement(elm);
                        });
                    };
                    var delay = (null == keyHoldOptions ? void 0 : keyHoldOptions.holdThreshold) || 500, runKeyEvent = handleKeyEvents.bind(null, delay), keyPressHandler = function(event) {
                        return ownerContext(function() {
                            return runKeyEvent(event, void 0);
                        });
                    }, keyUpHandler = function(event) {
                        return ownerContext(function() {
                            return runKeyEvent(void 0, event);
                        });
                    };
                    document.addEventListener("keydown", keyPressHandler), document.addEventListener("keyup", keyUpHandler), 
                    onCleanup(function() {
                        document.removeEventListener("keydown", keyPressHandler), document.removeEventListener("keyup", keyUpHandler);
                        for (var _i17 = 0, _Object$values = Object.values(keyHoldTimeouts); _i17 < _Object$values.length; _i17++) {
                            var timeout = _Object$values[_i17];
                            timeout && !0 !== timeout && clearTimeout(timeout);
                        }
                    });
                }), calculateFlex = flexLayout_default, postMutationQueued = !1, nextActiveElement = null, 
                deferredFocusElement = null, layoutQueue = new Set, elementDeleteQueue = [], _fontFamilyIdx = -1, 
                EFFECT_SHADER_KEYS = [ "border", "borderTop", "borderRight", "borderBottom", "borderLeft", "shadow" ], 
                parseAndAssignShaderProps = function(prefix, obj) {
                    var props = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (obj) {
                        var side = {
                            borderBottom: "bottom",
                            borderLeft: "left",
                            borderRight: "right",
                            borderTop: "top"
                        }[prefix], actualPrefix = side ? "border" : prefix;
                        props[actualPrefix] = obj, Object.entries(obj).forEach(function(_ref35) {
                            var _ref36 = _slicedToArray(_ref35, 2), key = _ref36[0], value = _ref36[1], transformedKey = "width" === key ? "w" : key;
                            side && "w" === transformedKey && (transformedKey = side), props["".concat(actualPrefix, "-").concat(transformedKey)] = value;
                        });
                    }
                }, LightningRendererNumberProps = [ "alpha", "color", "colorTop", "colorRight", "colorLeft", "colorBottom", "colorTl", "colorTr", "colorBl", "colorBr", "h", "fontSize", "lineHeight", "mount", "mountX", "mountY", "pivot", "pivotX", "pivotY", "rotation", "scale", "scaleX", "scaleY", "w", "worldX", "worldY", "x", "y", "zIndex", "zIndexLocked" ], 
                LightningRendererNonAnimatingProps = [ "absX", "absY", "autosize", "clipping", "contain", "componentName", "componentLocation", "data", "destroyed", "forceLoad", "fontStretch", "fontStyle", "group", "ignoreParentAlpha", "imageType", "letterSpacing", "maxHeight", "maxLines", "maxWidth", "offsetY", "overflowSuffix", "placeholderColor", "preventCleanup", "rtt", "scrollable", "scrollY", "srcHeight", "srcWidth", "srcX", "srcY", "strictBounds", "text", "textAlign", "textBaseline", "textOverflow", "texture", "textureOptions", "textRendererOverride", "verticalAlign", "wordBreak", "wordWrap" ], 
                _export("v", ElementNode = function() {
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
                                var _step22, _iterator22 = _createForOfIteratorHelper(EFFECT_SHADER_KEYS);
                                try {
                                    for (_iterator22.s(); !(_step22 = _iterator22.n()).done; ) {
                                        var k = _step22.value;
                                        v[k] && parseAndAssignShaderProps(k, v[k], target);
                                    }
                                } catch (err) {
                                    _iterator22.e(err);
                                } finally {
                                    _iterator22.f();
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
                            this._id = id, Config.rendererOptions && "inspector" in Config.rendererOptions && Config.rendererOptions.inspector && (this.data = _objectSpread(_objectSpread({}, this.data), {}, {
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
                            node.parent && (node.parent.removeChild(node), this.rendered || (this._hasRenderedChildren = !0)), 
                            node.parent = this, beforeNode && (spliceItem(this.children, node, 1), spliceItem(this.children, beforeNode, 0, node) > -1) || this.children.push(node);
                        }
                    }, {
                        key: "removeChild",
                        value: function(node) {
                            spliceItem(this.children, node, 1) > -1 && (isElementNode(node) && node.onRemove && node.onRemove.call(node, node), 
                            this.requiresLayout() && addToLayoutQueue(this));
                        }
                    }, {
                        key: "selectedNode",
                        get: function() {
                            for (var i = this.selected || 0; i < this.children.length; i++) {
                                var element = this.children[i];
                                if (isElementNode(element)) return this.selected = i, element;
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
                            var _this28 = this;
                            if (this.onAnimation) {
                                var settings = animationSettings || this.animationSettings, _this$onAnimation = this.onAnimation, animating = _this$onAnimation.animating, stopped = _this$onAnimation.stopped;
                                if (animating && animating.call(this, name, value), stopped) {
                                    var _settings$duration, _settings$delay, total = (null !== (_settings$duration = null == settings ? void 0 : settings.duration) && void 0 !== _settings$duration ? _settings$duration : 0) + (null !== (_settings$delay = null == settings ? void 0 : settings.delay) && void 0 !== _settings$delay ? _settings$delay : 0);
                                    setTimeout(function() {
                                        return stopped.call(_this28, name, value);
                                    }, total);
                                }
                            }
                        }
                    }, {
                        key: "animate",
                        value: function(props, animationSettings) {
                            return this.lng.animate(props, animationSettings || this.animationSettings || {});
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
                        value: (_start = _asyncToGenerator(_regenerator().m(function _callee19() {
                            var animation;
                            return _regenerator().w(function(_context20) {
                                for (;;) switch (_context20.n) {
                                  case 0:
                                    animation = this._animationQueue.shift();

                                  case 1:
                                    if (!animation) {
                                        _context20.n = 3;
                                        break;
                                    }
                                    return this._animationRunning = !0, _context20.n = 2, this.animate(animation.props, animation.animationSettings).start().waitUntilStopped();

                                  case 2:
                                    animation = this._animationQueue.shift(), _context20.n = 1;
                                    break;

                                  case 3:
                                    this._animationRunning = !1, this._animationQueueSettings = void 0;

                                  case 4:
                                    return _context20.a(2);
                                }
                            }, _callee19, this);
                        })), function() {
                            return _start.apply(this, arguments);
                        })
                    }, {
                        key: "emit",
                        value: function(event) {
                            for (var current = this, capitalizedEvent = "on".concat(event.charAt(0).toUpperCase()).concat(event.slice(1)), _len8 = arguments.length, args = new Array(_len8 > 1 ? _len8 - 1 : 0), _key10 = 1; _key10 < _len8; _key10++) args[_key10 - 1] = arguments[_key10];
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
                            var _this29 = this;
                            this.lng.on("loaded", function() {
                                schedulePostMutation(), _this29.parent.updateLayout();
                            });
                        }
                    }, {
                        key: "getText",
                        value: function() {
                            var len = this.children.length;
                            if (1 === len) return this.children[0].text;
                            if (0 === len) return "";
                            for (var result = "", i = 0; i < len; i++) result += this.children[i].text;
                            return result;
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            var _this30 = this;
                            if (this.onDestroy) {
                                var destroyPromise = this.onDestroy(this);
                                destroyPromise instanceof Promise ? destroyPromise.then(function() {
                                    return _this30._destroy();
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
                            var _this31 = this;
                            if (this.hasChildren) {
                                if ("flex" === this.display && this.flexGrow && 0 === this.width) return;
                                var flexChanged = "flex" === this.display && calculateFlex(this);
                                layoutQueue.delete(this);
                                var onLayoutChanged = isFunction(this.onLayout) && this.onLayout.call(this, this);
                                (flexChanged || onLayoutChanged) && this.parent && addToLayoutQueue(this.parent), 
                                !0 === this._containsFlexGrow && this.children.forEach(function(c) {
                                    "flex" === c.display && isElementNode(c) && (calculateFlex(c), isFunction(c.onLayout) && c.onLayout.call(c, c), 
                                    addToLayoutQueue(_this31));
                                });
                            }
                        }
                    }, {
                        key: "_stateChanged",
                        value: function() {
                            var _this32 = this;
                            if (this.forwardStates) {
                                var _states = this.states.slice();
                                this.children.forEach(function(c) {
                                    c.states = _states;
                                });
                            }
                            var states = this.states;
                            if (this._undoStyles || function(obj, keys) {
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
                                    var fallbackValue = _this32.theme[styleKey];
                                    void 0 === fallbackValue && (fallbackValue = _this32.style[styleKey]), stylesToUndo[styleKey] = fallbackValue;
                                }));
                                var newStyles, numStates = states.length;
                                if (0 === numStates) return Object.assign(this, stylesToUndo), void (this._undoStyles = []);
                                if (1 === numStates) newStyles = this[states[0]], newStyles = stylesToUndo ? _objectSpread(_objectSpread({}, stylesToUndo), newStyles) : newStyles; else {
                                    var sortedStates = states, stateOrder = this.stateOrder || Config.stateOrder;
                                    stateOrder && stateOrder.length > 0 && (sortedStates = states.slice().sort(function(a, b) {
                                        var aIdx = stateOrder.indexOf(a), bIdx = stateOrder.indexOf(b);
                                        return -1 !== aIdx && -1 === bIdx ? 1 : -1 === aIdx && -1 !== bIdx ? -1 : aIdx - bIdx;
                                    })), newStyles = sortedStates.reduce(function(acc, state) {
                                        var styles = _this32[state];
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
                                    if (tpl.length > 0) for (var familyIdx = _fontFamilyIdx, familyWithWeight = void 0 === textProps.fontWeight ? _fontFamilyWithWeight : void 0, i = 0; i < tpl.length; i++) {
                                        var entry = tpl[i], key = entry[0];
                                        void 0 === textProps[key] && (textProps[key] = i === familyIdx && void 0 !== familyWithWeight ? familyWithWeight : entry[1]);
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
                                                flexFitsWidth = ("row" === flexDirection || "row-reverse" === flexDirection) && "fixed" !== node.flexBoundary;
                                            }
                                            node.flexGrow || flexFitsWidth ? props.w = 0 : props.w = parentWidth - props.x, 
                                            node._calcWidth = !0;
                                        }
                                        isNaN(props.h) && (props.h = parentHeight - props.y, node._calcHeight = !0), props.rtt && !props.color && (props.color = 4294967295), 
                                        props.color || props.src || (props.color = 0);
                                    }
                                    if (SHADERS_ENABLED && props.shader && !("shaderType" in props.shader) && (props.shader = Config.convertToShader(node, props.shader)), 
                                    node.lng = renderer$1.createNode(props), node._hasRenderedChildren) {
                                        node._hasRenderedChildren = !1;
                                        var _step23, _iterator23 = _createForOfIteratorHelper(node.children);
                                        try {
                                            for (_iterator23.s(); !(_step23 = _iterator23.n()).done; ) {
                                                var child = _step23.value;
                                                isElementNode(child) && isINode(child.lng) && (child.lng.parent = node.lng);
                                            }
                                        } catch (err) {
                                            _iterator23.e(err);
                                        } finally {
                                            _iterator23.f();
                                        }
                                    }
                                }
                                if (node.rendered = !0, node.autosize && parent.requiresLayout() && node._layoutOnLoad(), 
                                null == (_this$onCreate = this.onCreate) || _this$onCreate.call(this, this), null == (_this$onRender2 = this.onRender) || _this$onRender2.call(this, this), 
                                node.onEvent) for (var _loop6 = function() {
                                    var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i18], 2), name = _Object$entries3$_i[0], handler = _Object$entries3$_i[1];
                                    "function" == typeof node.lng.on && node.lng.on(name, function(_inode, data) {
                                        return handler.call(node, node, data);
                                    });
                                }, _i18 = 0, _Object$entries3 = Object.entries(node.onEvent); _i18 < _Object$entries3.length; _i18++) _loop6();
                                null == (_node$lng = node.lng) || _node$lng.div;
                                if (node._type === NodeType.Element) for (var numChildren = node.children.length, _i19 = 0; _i19 < numChildren; _i19++) {
                                    var c = node.children[_i19];
                                    0, isElementNode(c) && c.render();
                                }
                                topNode && schedulePostMutation(), node._autofocus && node.setFocus();
                            } else console.warn("Parent not rendered yet: ", this); else console.warn("Parent not set - no node created for: ", this);
                        }
                    } ]);
                    var _start;
                }());
                var _step24, _iterator24 = _createForOfIteratorHelper(LightningRendererNumberProps);
                try {
                    var _loop7 = function() {
                        var key = _step24.value;
                        Object.defineProperty(ElementNode.prototype, key, {
                            get: function() {
                                return this.lng[key];
                            },
                            set: function(v) {
                                this._sendToLightningAnimatable(key, v);
                            }
                        });
                    };
                    for (_iterator24.s(); !(_step24 = _iterator24.n()).done; ) _loop7();
                } catch (err) {
                    _iterator24.e(err);
                } finally {
                    _iterator24.f();
                }
                var _step25, _iterator25 = _createForOfIteratorHelper(LightningRendererNonAnimatingProps);
                try {
                    var _loop8 = function() {
                        var key = _step25.value;
                        Object.defineProperty(ElementNode.prototype, key, {
                            get: function() {
                                return this.lng[key];
                            },
                            set: function(v) {
                                this.lng[key] = v;
                            }
                        });
                    };
                    for (_iterator25.s(); !(_step25 = _iterator25.n()).done; ) _loop8();
                } catch (err) {
                    _iterator25.e(err);
                } finally {
                    _iterator25.f();
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
                    return renderer.mergeProps = mergeProps$1, renderer;
                }(solidOpts_default), _export("p", rootNode = solidOpts_default.createElement("App")), 
                render = function(code) {
                    return solidRenderer.render(code, rootNode);
                }, effect = (_solidRenderer = solidRenderer).effect, memo = _solidRenderer.memo, 
                createComponent = _solidRenderer.createComponent, createElement = _solidRenderer.createElement, 
                createTextNode = _solidRenderer.createTextNode, insertNode = _solidRenderer.insertNode, 
                insert = _solidRenderer.insert, spread = _solidRenderer.spread, setProp = _solidRenderer.setProp, 
                mergeProps = _solidRenderer.mergeProps, use = _solidRenderer.use, _export("c", effect), 
                _export("d", memo), _export("i", createComponent), _export("a", createElement), 
                _export("s", createTextNode), _export("u", insertNode), _export("l", insert), _export("g", spread), 
                _export("h", setProp), _export("f", mergeProps), _export("_", use), taskQueue = [], 
                tasksEnabled = !1, createRoot(function() {
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