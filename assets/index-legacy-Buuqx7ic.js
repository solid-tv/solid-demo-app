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
    function _slicedToArray(r, e) {
        return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
    }
    function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
    function _classCallCheck(a, n) {
        if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
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
    function _typeof(o) {
        "@babel/helpers - typeof";
        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
            return typeof o;
        } : function(o) {
            return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
        }, _typeof(o);
    }
    function _createForOfIteratorHelper(r, e) {
        var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
        if (!t) {
            if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
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
    System.register([], function(exports, module) {
        "use strict";
        return {
            execute: function execute() {
                var _document$documentEle;
                var __vite_style__ = document.createElement("style");
                __vite_style__.textContent = "html,body,*{padding:0;margin:0}html,body{width:100vw;height:100vh;margin:0;padding:0;overflow:hidden;background-color:#000}video{position:absolute;top:0;left:0;z-index:2;outline:none}.center-element{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}\n/*$vite$:1*/";
                document.head.appendChild(__vite_style__);
                false && function polyfill() {
                    var relList = document.createElement("link").relList;
                    if (relList && relList.supports && relList.supports("modulepreload")) return;
                    var _iterator = _createForOfIteratorHelper(document.querySelectorAll('link[rel="modulepreload"]')), _step;
                    try {
                        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                            var link = _step.value;
                            processPreload(link);
                        }
                    } catch (err) {
                        _iterator.e(err);
                    } finally {
                        _iterator.f();
                    }
                    new MutationObserver(function(mutations) {
                        var _iterator2 = _createForOfIteratorHelper(mutations), _step2;
                        try {
                            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                                var mutation = _step2.value;
                                if (mutation.type !== "childList") continue;
                                var _iterator3 = _createForOfIteratorHelper(mutation.addedNodes), _step3;
                                try {
                                    for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                                        var node = _step3.value;
                                        if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
                                    }
                                } catch (err) {
                                    _iterator3.e(err);
                                } finally {
                                    _iterator3.f();
                                }
                            }
                        } catch (err) {
                            _iterator2.e(err);
                        } finally {
                            _iterator2.f();
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
                }();
                function createWebGLContext(canvas, contextSpy) {
                    var config = {
                        alpha: true,
                        antialias: false,
                        depth: false,
                        stencil: true,
                        desynchronized: false,
                        powerPreference: "high-performance",
                        premultipliedAlpha: true,
                        preserveDrawingBuffer: false
                    };
                    var gl = canvas.getContext("webgl", config) || canvas.getContext("experimental-webgl", config);
                    if (!gl) {
                        throw new Error("Unable to create WebGL context");
                    }
                    if (contextSpy) {
                        return new Proxy(gl, {
                            get: function get(target, prop) {
                                var value = target[prop];
                                if (typeof value === "function") {
                                    contextSpy.increment(String(prop));
                                    return value.bind(target);
                                }
                                return value;
                            }
                        });
                    }
                    return gl;
                }
                var isProductionEnvironment = true;
                var ENABLE_AUTOSIZE = typeof __enableAutosize__ !== "undefined" ? __enableAutosize__ : false;
                var ENABLE_INSPECTOR = typeof __enableInspector__ !== "undefined" ? __enableInspector__ : !isProductionEnvironment;
                var DIRTY_QUAD_BUFFER = typeof __dirtyQuadBuffer__ !== "undefined" ? __dirtyQuadBuffer__ : true;
                var EMIT_BOUNDS_EVENTS = typeof __emitBoundsEvents__ !== "undefined" ? __emitBoundsEvents__ : false;
                function assertTruthy(condition, message) {
                    return;
                }
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
                function mergeColorAlpha(rgba, alpha) {
                    var r = rgba >>> 24;
                    var g = rgba >>> 16 & 255;
                    var b = rgba >>> 8 & 255;
                    var a = Math.trunc((rgba & 255) * alpha);
                    return (r << 24 | g << 16 | b << 8 | a) >>> 0;
                }
                var premultiplyRGB = true;
                function setPremultiplyMode(mode) {
                    premultiplyRGB = mode === "webgl";
                }
                function premultiplyColorABGR(rgba, alpha) {
                    var a = (rgba & 255) / 255 * alpha;
                    var m = premultiplyRGB ? a : 1;
                    return ((a * 255 | 0) << 24 | ((rgba >>> 8 & 255) * m | 0) << 16 | ((rgba >>> 16 & 255) * m | 0) << 8 | ((rgba >>> 24) * m | 0)) >>> 0;
                }
                var nextId = 1;
                function getNewId() {
                    return nextId++;
                }
                function deepClone(obj) {
                    if (_typeof(obj) !== "object") {
                        return obj;
                    }
                    if (Array.isArray(obj)) {
                        return obj.map(function(item) {
                            return deepClone(item);
                        });
                    }
                    var copy = {};
                    for (var key in obj) {
                        copy[key] = deepClone(obj[key]);
                    }
                    return copy;
                }
                var EventEmitter = function() {
                    function EventEmitter() {
                        _classCallCheck(this, EventEmitter);
                        _defineProperty(this, "eventListeners", null);
                    }
                    return _createClass(EventEmitter, [ {
                        key: "on",
                        value: function on(event, listener) {
                            var map = this.eventListeners;
                            if (map === null) {
                                map = this.eventListeners = {};
                            }
                            var listeners = map[event];
                            if (listeners === undefined) {
                                listeners = [];
                                map[event] = listeners;
                            }
                            listeners.push(listener);
                        }
                    }, {
                        key: "off",
                        value: function off(event, listener) {
                            var map = this.eventListeners;
                            if (map === null) {
                                return;
                            }
                            var listeners = map[event];
                            if (listeners === undefined) {
                                return;
                            }
                            if (listener === undefined) {
                                map[event] = undefined;
                                return;
                            }
                            var index = listeners.indexOf(listener);
                            if (index >= 0) {
                                listeners.splice(index, 1);
                            }
                        }
                    }, {
                        key: "once",
                        value: function once(event, listener) {
                            var _this = this;
                            var _onceListener = function onceListener(target, data) {
                                _this.off(event, _onceListener);
                                listener(target, data);
                            };
                            this.on(event, _onceListener);
                        }
                    }, {
                        key: "emit",
                        value: function emit(event, data) {
                            var _this2 = this;
                            var map = this.eventListeners;
                            if (map === null) {
                                return;
                            }
                            var listeners = map[event];
                            if (listeners === undefined) {
                                return;
                            }
                            _toConsumableArray(listeners).forEach(function(listener) {
                                listener(_this2, data);
                            });
                        }
                    }, {
                        key: "removeAllListeners",
                        value: function removeAllListeners() {
                            this.eventListeners = null;
                        }
                    } ]);
                }();
                var TextureType;
                (function(TextureType) {
                    TextureType[TextureType["generic"] = 0] = "generic";
                    TextureType[TextureType["color"] = 1] = "color";
                    TextureType[TextureType["image"] = 2] = "image";
                    TextureType[TextureType["noise"] = 3] = "noise";
                    TextureType[TextureType["renderToTexture"] = 4] = "renderToTexture";
                    TextureType[TextureType["subTexture"] = 5] = "subTexture";
                })(TextureType || (TextureType = {}));
                var Texture = function(_EventEmitter2) {
                    function Texture(txManager) {
                        var _this3;
                        _classCallCheck(this, Texture);
                        _this3 = _callSuper(this, Texture);
                        _defineProperty(_this3, "txManager", void 0);
                        _defineProperty(_this3, "_dimensions", null);
                        _defineProperty(_this3, "_error", null);
                        _defineProperty(_this3, "state", "initial");
                        _defineProperty(_this3, "renderableOwners", []);
                        _defineProperty(_this3, "renderable", false);
                        _defineProperty(_this3, "type", TextureType.generic);
                        _defineProperty(_this3, "preventCleanup", false);
                        _defineProperty(_this3, "ctxTexture", void 0);
                        _defineProperty(_this3, "textureData", null);
                        _defineProperty(_this3, "cacheKey", null);
                        _defineProperty(_this3, "memUsed", 0);
                        _defineProperty(_this3, "retryCount", 0);
                        _defineProperty(_this3, "maxRetryCount", void 0);
                        _defineProperty(_this3, "createdAt", Date.now());
                        _defineProperty(_this3, "gracePeriodExpired", false);
                        _defineProperty(_this3, "freeTextureDataTask", function() {
                            _this3.textureData = null;
                        });
                        _defineProperty(_this3, "releaseTask", function() {
                            _this3.release();
                        });
                        _this3.txManager = txManager;
                        _this3.maxRetryCount = _this3.txManager.maxRetryCount;
                        return _this3;
                    }
                    _inherits(Texture, _EventEmitter2);
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
                            if (this.gracePeriodExpired === true) {
                                return false;
                            }
                            var hasExpired = Date.now() - this.createdAt >= Texture.STARTUP_GRACE_PERIOD;
                            if (hasExpired) {
                                this.gracePeriodExpired = true;
                                return false;
                            }
                            return true;
                        }
                    }, {
                        key: "canBeCleanedUp",
                        value: function canBeCleanedUp() {
                            if (this.preventCleanup) {
                                return false;
                            }
                            if (this.isWithinStartupGracePeriod()) {
                                return false;
                            }
                            if (this.state === "loading") {
                                return false;
                            }
                            if (this.renderable === true) {
                                return false;
                            }
                            if (this.renderableOwners.length > 0) {
                                return false;
                            }
                            return true;
                        }
                    }, {
                        key: "setRenderableOwner",
                        value: function setRenderableOwner(owner, renderable) {
                            var oldSize = this.renderableOwners.length;
                            var hasOwnerIndex = this.renderableOwners.indexOf(owner);
                            if (renderable === true) {
                                if (hasOwnerIndex === -1) {
                                    this.renderableOwners.push(owner);
                                }
                                var newSize = this.renderableOwners.length;
                                if (oldSize !== newSize && newSize === 1) {
                                    var _this$onChangeIsRende;
                                    this.renderable = true;
                                    (_this$onChangeIsRende = this.onChangeIsRenderable) === null || _this$onChangeIsRende === void 0 || _this$onChangeIsRende.call(this, true);
                                    this.load();
                                }
                            } else {
                                if (hasOwnerIndex !== -1) {
                                    this.renderableOwners.splice(hasOwnerIndex, 1);
                                }
                                var _newSize = this.renderableOwners.length;
                                if (oldSize !== _newSize && _newSize === 0) {
                                    var _this$onChangeIsRende2;
                                    this.renderable = false;
                                    (_this$onChangeIsRende2 = this.onChangeIsRenderable) === null || _this$onChangeIsRende2 === void 0 || _this$onChangeIsRende2.call(this, false);
                                }
                            }
                        }
                    }, {
                        key: "load",
                        value: function load() {
                            if (this.retryCount > this.maxRetryCount) {
                                return;
                            }
                            this.txManager.loadTexture(this);
                        }
                    }, {
                        key: "loadCtxTexture",
                        value: function loadCtxTexture() {
                            if (this.ctxTexture === undefined) {
                                this.ctxTexture = this.txManager.renderer.createCtxTexture(this);
                            }
                            return this.ctxTexture;
                        }
                    }, {
                        key: "free",
                        value: function free() {
                            var _this$ctxTexture;
                            (_this$ctxTexture = this.ctxTexture) === null || _this$ctxTexture === void 0 || _this$ctxTexture.free();
                            this.ctxTexture = undefined;
                        }
                    }, {
                        key: "release",
                        value: function release() {
                            var _this$ctxTexture2;
                            (_this$ctxTexture2 = this.ctxTexture) === null || _this$ctxTexture2 === void 0 || _this$ctxTexture2.release();
                            this.ctxTexture = undefined;
                            this.freeTextureData();
                        }
                    }, {
                        key: "destroy",
                        value: function destroy() {
                            if (this.state === "loaded") {
                                this.free();
                            }
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
                            if (this.state === state) {
                                return;
                            }
                            var payload = null;
                            if (state === "loaded") {
                                if (errorOrDimensions !== undefined && "w" in errorOrDimensions === true && "h" in errorOrDimensions === true && errorOrDimensions.w !== undefined && errorOrDimensions.h !== undefined) {
                                    this._dimensions = errorOrDimensions;
                                }
                                payload = this._dimensions;
                            } else if (state === "failed") {
                                this._error = errorOrDimensions;
                                payload = this._error;
                                this.retryCount += 1;
                                queueMicrotask(this.releaseTask);
                            } else if (state === "loading") {
                                this._error = null;
                                this._dimensions = null;
                            } else {
                                this._error = null;
                            }
                            this.state = state;
                            this.emit(state, payload);
                        }
                    }, {
                        key: "getTextureData",
                        value: function() {
                            var _getTextureData = _asyncToGenerator(_regenerator().m(function _callee() {
                                return _regenerator().w(function(_context) {
                                    while (1) switch (_context.n) {
                                      case 0:
                                        if (!(this.textureData === null)) {
                                            _context.n = 2;
                                            break;
                                        }
                                        _context.n = 1;
                                        return this.getTextureSource();

                                      case 1:
                                        this.textureData = _context.v;

                                      case 2:
                                        return _context.a(2, this.textureData);
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
                _defineProperty(Texture, "STARTUP_GRACE_PERIOD", 2e3);
                var PROTOCOL_REGEX = /^(data|ftps?|https?):/;
                var getNormalizedRgbaComponents = function getNormalizedRgbaComponents(rgba) {
                    var r = rgba >>> 24;
                    var g = rgba >>> 16 & 255;
                    var b = rgba >>> 8 & 255;
                    var a = rgba & 255;
                    return [ r / 255, g / 255, b / 255, a / 255 ];
                };
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
                    if (a === b) {
                        return true;
                    }
                    if (a === null || b === null) {
                        return false;
                    }
                    var aValid = a.valid;
                    var bValid = b.valid;
                    if (aValid === false && bValid === false) {
                        return true;
                    }
                    if (aValid !== bValid) {
                        return false;
                    }
                    return a.x === b.x && a.y === b.y && a.w === b.w && a.h === b.h;
                }
                function boundInsideBound(bound1, bound2) {
                    return bound1.x1 <= bound2.x2 && bound1.y1 <= bound2.y2 && bound1.x2 >= bound2.x1 && bound1.y2 >= bound2.y1;
                }
                function boundLargeThanBound(bound1, bound2) {
                    return bound1.x1 < bound2.x1 && bound1.x2 > bound2.x2 && bound1.y1 < bound2.y1 && bound1.y2 > bound2.y2;
                }
                function createPreloadBounds(strictBound, boundsMargin, out) {
                    return createBound(strictBound.x1 - boundsMargin[3], strictBound.y1 - boundsMargin[0], strictBound.x2 + boundsMargin[1], strictBound.y2 + boundsMargin[2], out);
                }
                function convertUrlToAbsolute(url) {
                    if (self.location.protocol === "file:" && !PROTOCOL_REGEX.test(url)) {
                        var path = self.location.pathname.split("/");
                        path.pop();
                        var basePath = path.join("/");
                        var baseUrl = self.location.protocol + "//" + basePath;
                        if (url.charAt(0) === ".") {
                            url = url.slice(1);
                        }
                        if (url.charAt(0) === "/") {
                            url = url.slice(1);
                        }
                        return baseUrl + "/" + url;
                    }
                    var absoluteUrl = new URL(url, self.location.href);
                    return absoluteUrl.href;
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
                    var type = ((_dataURI$match = dataURI.match(/image\/[^;]+/)) === null || _dataURI$match === void 0 ? void 0 : _dataURI$match[0]) || "";
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
                            bytes[i] = (_byteCharacters$offse = byteCharacters[offset]) === null || _byteCharacters$offse === void 0 ? void 0 : _byteCharacters$offse.charCodeAt(0);
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
                            if (xhr.readyState == XMLHttpRequest.DONE) {
                                if (xhr.status === 0 || xhr.status === 200) {
                                    resolve(xhr.response);
                                } else {
                                    reject(xhr.statusText);
                                }
                            }
                        };
                        xhr.open("GET", url, true);
                        xhr.send(null);
                    });
                }
                var Matrix3d = function() {
                    function Matrix3d() {
                        _classCallCheck(this, Matrix3d);
                        _defineProperty(this, "ta", void 0);
                        _defineProperty(this, "tb", void 0);
                        _defineProperty(this, "tx", void 0);
                        _defineProperty(this, "tc", void 0);
                        _defineProperty(this, "td", void 0);
                        _defineProperty(this, "ty", void 0);
                        _defineProperty(this, "_floatArr", null);
                        _defineProperty(this, "mutation", void 0);
                        this.ta = 0;
                        this.tb = 0;
                        this.tx = 0;
                        this.tc = 0;
                        this.td = 0;
                        this.ty = 0;
                        this.mutation = true;
                    }
                    return _createClass(Matrix3d, [ {
                        key: "translate",
                        value: function translate(x, y) {
                            this.tx = this.ta * x + this.tb * y + this.tx;
                            this.ty = this.tc * x + this.td * y + this.ty;
                            this.mutation = true;
                            return this;
                        }
                    }, {
                        key: "setTranslate",
                        value: function setTranslate(x, y) {
                            this.tx = x;
                            this.ty = y;
                            this.mutation = true;
                        }
                    }, {
                        key: "scale",
                        value: function scale(sx, sy) {
                            this.ta = this.ta * sx;
                            this.tb = this.tb * sy;
                            this.tc = this.tc * sx;
                            this.td = this.td * sy;
                            this.mutation = true;
                            return this;
                        }
                    }, {
                        key: "rotate",
                        value: function rotate(angle) {
                            if (angle === 0) {
                                return this;
                            }
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
                            this.mutation = true;
                            return this;
                        }
                    }, {
                        key: "multiply",
                        value: function multiply(other) {
                            return Matrix3d.multiply(this, other, this);
                        }
                    }, {
                        key: "getFloatArr",
                        value: function getFloatArr() {
                            if (!this._floatArr) {
                                this._floatArr = new Float32Array(9);
                            }
                            if (this.mutation) {
                                this._floatArr[0] = this.ta;
                                this._floatArr[1] = this.tc;
                                this._floatArr[2] = 0;
                                this._floatArr[3] = this.tb;
                                this._floatArr[4] = this.td;
                                this._floatArr[5] = 0;
                                this._floatArr[6] = this.tx;
                                this._floatArr[7] = this.ty;
                                this._floatArr[8] = 1;
                                this.mutation = false;
                            }
                            return this._floatArr;
                        }
                    }, {
                        key: "translateOrMultiply",
                        value: function translateOrMultiply(other) {
                            if (other.ta === 1 && other.td === 1 && other.tb === 0 && other.tc === 0) {
                                return this.translate(other.tx, other.ty);
                            }
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
                            if (!out) {
                                out = new Matrix3d;
                            }
                            out.ta = e0;
                            out.tb = e1;
                            out.tx = e2;
                            out.tc = e3;
                            out.td = e4;
                            out.ty = e5;
                            out.mutation = true;
                            return out;
                        }
                    }, {
                        key: "identity",
                        value: function identity(out) {
                            if (!out) {
                                out = new Matrix3d;
                            }
                            out.ta = 1;
                            out.tb = 0;
                            out.tx = 0;
                            out.tc = 0;
                            out.td = 1;
                            out.ty = 0;
                            out.mutation = true;
                            return out;
                        }
                    }, {
                        key: "translate",
                        value: function translate(x, y, out) {
                            if (!out) {
                                out = new Matrix3d;
                            }
                            out.ta = 1;
                            out.tb = 0;
                            out.tx = x;
                            out.tc = 0;
                            out.td = 1;
                            out.ty = y;
                            out.mutation = true;
                            return out;
                        }
                    }, {
                        key: "scale",
                        value: function scale(sx, sy, out) {
                            if (!out) {
                                out = new Matrix3d;
                            }
                            out.ta = sx;
                            out.tb = 0;
                            out.tx = 0;
                            out.tc = 0;
                            out.td = sy;
                            out.ty = 0;
                            out.mutation = true;
                            return out;
                        }
                    }, {
                        key: "rotate",
                        value: function rotate(angle, out) {
                            if (out === undefined) {
                                out = new Matrix3d;
                            }
                            if (angle === 0) {
                                out.ta = 1;
                                out.tb = 0;
                                out.tx = 0;
                                out.tc = 0;
                                out.td = 1;
                                out.ty = 0;
                                out.mutation = true;
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
                            out.mutation = true;
                            return out;
                        }
                    }, {
                        key: "copy",
                        value: function copy(src, dst) {
                            if (!dst) {
                                dst = new Matrix3d;
                            }
                            dst.ta = src.ta;
                            dst.tc = src.tc;
                            dst.tb = src.tb;
                            dst.td = src.td;
                            dst.tx = src.tx;
                            dst.ty = src.ty;
                            dst.mutation = true;
                            return dst;
                        }
                    } ]);
                }();
                var tempMatrix = new Matrix3d;
                var RenderCoords = function() {
                    function RenderCoords(x1, y1, x2, y2, x3, y3, x4, y4) {
                        _classCallCheck(this, RenderCoords);
                        _defineProperty(this, "x1", void 0);
                        _defineProperty(this, "y1", void 0);
                        _defineProperty(this, "x2", void 0);
                        _defineProperty(this, "y2", void 0);
                        _defineProperty(this, "x3", void 0);
                        _defineProperty(this, "y3", void 0);
                        _defineProperty(this, "x4", void 0);
                        _defineProperty(this, "y4", void 0);
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
                            if (out === undefined) {
                                return new RenderCoords(x1, y1, x2, y2, x3, y3, x4, y4);
                            }
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
                var getTimingBezier = function getTimingBezier(a, b, c, d) {
                    var xc = 3 * a;
                    var xb = 3 * (c - a) - xc;
                    var xa = 1 - xc - xb;
                    var yc = 3 * b;
                    var yb = 3 * (d - b) - yc;
                    var ya = 1 - yc - yb;
                    return function(time) {
                        if (time >= 1) {
                            return 1;
                        }
                        if (time <= 0) {
                            return 0;
                        }
                        var t = .5, cbx, cbxd, dx;
                        for (var it = 0; it < 20; it++) {
                            cbx = t * (t * (t * xa + xb) + xc);
                            dx = time - cbx;
                            if (dx > -1e-8 && dx < 1e-8) {
                                return t * (t * (t * ya + yb) + yc);
                            }
                            cbxd = t * (t * (3 * xa) + 2 * xb) + xc;
                            if (cbxd > 1e-10 && cbxd < 1e-10) {
                                break;
                            }
                            t += dx / cbxd;
                        }
                        var minT = 0;
                        var maxT = 1;
                        for (var _it = 0; _it < 20; _it++) {
                            t = .5 * (minT + maxT);
                            cbx = t * (t * (t * xa + xb) + xc);
                            dx = time - cbx;
                            if (dx > -1e-8 && dx < 1e-8) {
                                return t * (t * (t * ya + yb) + yc);
                            }
                            if (dx < 0) {
                                maxT = t;
                            } else {
                                minT = t;
                            }
                        }
                        return time;
                    };
                };
                var timingMapping = {};
                var timingLookup = {
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
                var defaultTiming = function defaultTiming(t) {
                    return t;
                };
                var parseCubicBezier = function parseCubicBezier(str) {
                    var regex = /-?\d*\.?\d+/g;
                    var match = str.match(regex);
                    if (match) {
                        var _match = _slicedToArray(match, 4), num1 = _match[0], num2 = _match[1], num3 = _match[2], num4 = _match[3];
                        var a = parseFloat(num1 || "0.42");
                        var b = parseFloat(num2 || "0");
                        var c = parseFloat(num3 || "1");
                        var d = parseFloat(num4 || "1");
                        var timing = getTimingBezier(a, b, c, d);
                        timingMapping[str] = timing;
                        return timing;
                    }
                    console.warn("Unknown cubic-bezier timing: " + str);
                    return defaultTiming;
                };
                var getTimingFunction = function getTimingFunction(str) {
                    if (str === "linear") {
                        return defaultTiming;
                    }
                    if (timingMapping[str] !== undefined) {
                        return timingMapping[str] || defaultTiming;
                    }
                    if (str === "step-start") {
                        return function() {
                            return 1;
                        };
                    }
                    if (str === "step-end") {
                        return function(time) {
                            return time === 1 ? 1 : 0;
                        };
                    }
                    var lookup = timingLookup[str];
                    if (lookup !== undefined) {
                        var _lookup = _slicedToArray(lookup, 4), a = _lookup[0], b = _lookup[1], c = _lookup[2], d = _lookup[3];
                        var timing = getTimingBezier(a, b, c, d);
                        timingMapping[str] = timing;
                        return timing;
                    }
                    if (str.startsWith("cubic-bezier")) {
                        return parseCubicBezier(str);
                    }
                    console.warn("Unknown timing function: " + str);
                    return defaultTiming;
                };
                function bytesToMb(bytes) {
                    return (bytes / 1024 / 1024).toFixed(2);
                }
                function createAnimation(manager, node, props, settings) {
                    var _settings$delay, _settings$duration, _settings$loop, _settings$repeat, _settings$stopMethod;
                    var easing = settings.easing || "linear";
                    var delay = (_settings$delay = settings.delay) !== null && _settings$delay !== void 0 ? _settings$delay : 0;
                    var propValues = null;
                    var shaderPropValues = null;
                    for (var key in props) {
                        if (key !== "shaderProps") {
                            if (!propValues) propValues = {};
                            propValues[key] = {
                                start: node[key] || 0,
                                target: props[key],
                                isColor: key.indexOf("color") !== -1
                            };
                        } else if (key === "shaderProps" && node.shader !== null) {
                            if (!shaderPropValues) shaderPropValues = {};
                            for (var shaderKey in props.shaderProps) {
                                var start = node.shader.props[shaderKey];
                                if (Array.isArray(start)) {
                                    start = start[0];
                                }
                                shaderPropValues[shaderKey] = {
                                    start: start,
                                    target: props.shaderProps[shaderKey],
                                    isColor: shaderKey.indexOf("color") !== -1
                                };
                            }
                        }
                    }
                    var timingFunction = typeof easing === "string" ? getTimingFunction(easing) : easing;
                    var config = {
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
                        stoppedResolve: null,
                        stoppedPromise: null,
                        lastRunTime: settings.adaptiveDuration ? performance.now() : 0,
                        start: function start() {
                            var _this4 = this;
                            if (this.state !== "running" && this.state !== "scheduled") {
                                if (!this.stoppedPromise) {
                                    this.stoppedPromise = new Promise(function(resolve) {
                                        _this4.stoppedResolve = resolve;
                                    });
                                }
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
                            if (!this.stoppedPromise) {
                                this.stoppedPromise = Promise.resolve();
                            }
                            return this.stoppedPromise;
                        }
                    };
                    return config;
                }
                var AutosizeMode;
                (function(AutosizeMode) {
                    AutosizeMode[AutosizeMode["Children"] = 0] = "Children";
                    AutosizeMode[AutosizeMode["Texture"] = 1] = "Texture";
                })(AutosizeMode || (AutosizeMode = {}));
                var AutosizeUpdateType;
                (function(AutosizeUpdateType) {
                    AutosizeUpdateType[AutosizeUpdateType["None"] = 0] = "None";
                    AutosizeUpdateType[AutosizeUpdateType["Filtered"] = 1] = "Filtered";
                    AutosizeUpdateType[AutosizeUpdateType["All"] = 2] = "All";
                })(AutosizeUpdateType || (AutosizeUpdateType = {}));
                var applyDimensions = function applyDimensions(node, w, h) {
                    node.props.w = w;
                    node.props.h = h;
                    node.setUpdateType(UpdateType.Local);
                };
                var getFilteredChildren = function getFilteredChildren(children, childMap) {
                    var filtered = [];
                    while (children.length > 0) {
                        var id = children.pop();
                        var child = childMap.get(id);
                        filtered.push(child);
                    }
                    return filtered;
                };
                var autosizerId = 0;
                var Autosizer = function() {
                    function Autosizer(node) {
                        _classCallCheck(this, Autosizer);
                        _defineProperty(this, "node", void 0);
                        _defineProperty(this, "id", autosizerId++);
                        _defineProperty(this, "mode", AutosizeMode.Children);
                        _defineProperty(this, "updateType", AutosizeUpdateType.All);
                        _defineProperty(this, "lastWidth", 0);
                        _defineProperty(this, "lastHeight", 0);
                        _defineProperty(this, "lastHasChanged", false);
                        _defineProperty(this, "flaggedChildren", []);
                        _defineProperty(this, "childMap", new Map);
                        _defineProperty(this, "minX", Infinity);
                        _defineProperty(this, "minY", Infinity);
                        _defineProperty(this, "maxX", -Infinity);
                        _defineProperty(this, "maxY", -Infinity);
                        _defineProperty(this, "corners", [ {
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
                        } ]);
                        this.node = node;
                        if (node.texture !== null) {
                            this.mode = AutosizeMode.Texture;
                        }
                    }
                    return _createClass(Autosizer, [ {
                        key: "attach",
                        value: function attach(node) {
                            this.childMap.set(node.id, node);
                            node.parentAutosizer = this;
                            if (node.children.length > 0 && node.autosizer === null) {
                                var children = node.children;
                                for (var i = 0; i < children.length; i++) {
                                    this.attach(children[i]);
                                }
                            }
                        }
                    }, {
                        key: "detach",
                        value: function detach(node) {
                            if (this.childMap.delete(node.id) === true) {
                                node.parentAutosizer = null;
                                if (node.children.length > 0 && node.autosizer === null) {
                                    var children = node.children;
                                    for (var i = 0; i < children.length; i++) {
                                        this.detach(children[i]);
                                    }
                                }
                                this.setUpdateType(AutosizeUpdateType.All);
                            }
                        }
                    }, {
                        key: "patch",
                        value: function patch(id) {
                            var entry = this.childMap.get(id);
                            if (entry === undefined) {
                                return;
                            }
                            this.flaggedChildren.push(id);
                            this.setUpdateType(AutosizeUpdateType.Filtered);
                        }
                    }, {
                        key: "setUpdateType",
                        value: function setUpdateType(updateType) {
                            this.updateType |= updateType;
                            this.node.setUpdateType(UpdateType.Autosize);
                        }
                    }, {
                        key: "setMode",
                        value: function setMode(mode) {
                            this.mode = mode;
                            this.setUpdateType(AutosizeUpdateType.All);
                        }
                    }, {
                        key: "update",
                        value: function update() {
                            var node = this.node;
                            if (this.mode === AutosizeMode.Texture && node.texture !== null && node.texture.dimensions !== null) {
                                var _node$texture$dimensi = node.texture.dimensions, w = _node$texture$dimensi.w, h = _node$texture$dimensi.h;
                                if (w !== node.w || h !== node.h) {
                                    applyDimensions(node, w, h);
                                }
                                this.lastWidth = w;
                                this.lastHeight = h;
                                this.updateType = AutosizeUpdateType.None;
                                return;
                            }
                            var filtered = this.updateType === AutosizeUpdateType.Filtered ? getFilteredChildren(this.flaggedChildren, this.childMap) : Array.from(this.childMap.values());
                            if (filtered.length === 0) {
                                return;
                            }
                            var corners = this.corners;
                            var minX = this.minX;
                            var minY = this.minY;
                            var maxX = this.maxX;
                            var maxY = this.maxY;
                            for (var i = 0; i < filtered.length; i++) {
                                var child = filtered[i];
                                if (child.isRenderable === false || child.localTransform === undefined) {
                                    continue;
                                }
                                var _child$localTransform = child.localTransform, tx = _child$localTransform.tx, ty = _child$localTransform.ty, ta = _child$localTransform.ta, tb = _child$localTransform.tb, tc = _child$localTransform.tc, td = _child$localTransform.td;
                                var _w = child.props.w;
                                var _h = child.props.h;
                                var childMinX = tx;
                                var childMaxX = tx + _w * ta;
                                var childMinY = ty;
                                var childMaxY = ty + _h * td;
                                corners[0].x = childMinX;
                                corners[0].y = childMinY;
                                corners[1].x = childMaxX;
                                if (tb === 0 && tc === 0) {
                                    corners[1].y = childMinY;
                                    corners[2].x = childMaxX;
                                    corners[2].y = childMaxY;
                                    corners[3].x = childMinX;
                                    corners[3].y = childMaxY;
                                } else {
                                    corners[1].y = tx + _w * tc;
                                    corners[2].x = tx + _w * ta + _h * tb;
                                    corners[2].y = ty + _w * tc + _h * td;
                                    corners[3].x = tx + _h * tb;
                                    corners[3].y = ty + _h * td;
                                }
                                for (var j = 0; j < 4; j++) {
                                    var corner = corners[j];
                                    if (corner.x < minX) minX = corner.x;
                                    if (corner.y < minY) minY = corner.y;
                                    if (corner.x > maxX) maxX = corner.x;
                                    if (corner.y > maxY) maxY = corner.y;
                                }
                            }
                            this.updateType = AutosizeUpdateType.None;
                            var newWidth = maxX > 0 ? maxX : 0;
                            var newHeight = maxY > 0 ? maxY : 0;
                            applyDimensions(node, newWidth, newHeight);
                            this.lastWidth = newWidth;
                            this.lastHeight = newHeight;
                        }
                    }, {
                        key: "destroy",
                        value: function destroy() {
                            if (this.childMap.size > 0) {
                                var _iterator4 = _createForOfIteratorHelper(this.childMap.values()), _step4;
                                try {
                                    for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
                                        var child = _step4.value;
                                        child.parentAutosizer = null;
                                    }
                                } catch (err) {
                                    _iterator4.e(err);
                                } finally {
                                    _iterator4.f();
                                }
                            }
                            this.childMap.clear();
                            this.flaggedChildren.length = 0;
                        }
                    } ]);
                }();
                var findChildIndexById = function findChildIndexById(node, children) {
                    for (var i = 0; i < children.length; i++) {
                        var child = children[i];
                        if (child._id === node._id) {
                            return i;
                        }
                    }
                    return -1;
                };
                var _removeChild = function removeChild(node, children) {
                    var index = findChildIndexById(node, children);
                    if (index !== -1) {
                        children.splice(index, 1);
                    }
                };
                var CoreNodeRenderState;
                (function(CoreNodeRenderState) {
                    CoreNodeRenderState[CoreNodeRenderState["Init"] = 0] = "Init";
                    CoreNodeRenderState[CoreNodeRenderState["OutOfBounds"] = 2] = "OutOfBounds";
                    CoreNodeRenderState[CoreNodeRenderState["InBounds"] = 4] = "InBounds";
                    CoreNodeRenderState[CoreNodeRenderState["InViewport"] = 8] = "InViewport";
                })(CoreNodeRenderState || (CoreNodeRenderState = {}));
                var NO_CLIPPING_RECT = {
                    x: 0,
                    y: 0,
                    w: 0,
                    h: 0,
                    valid: false
                };
                var CoreNodeRenderStateMap$1 = new Map;
                CoreNodeRenderStateMap$1.set(CoreNodeRenderState.Init, "init");
                CoreNodeRenderStateMap$1.set(CoreNodeRenderState.OutOfBounds, "outOfBounds");
                CoreNodeRenderStateMap$1.set(CoreNodeRenderState.InBounds, "inBounds");
                CoreNodeRenderStateMap$1.set(CoreNodeRenderState.InViewport, "inViewport");
                var UpdateType;
                (function(UpdateType) {
                    UpdateType[UpdateType["Children"] = 1] = "Children";
                    UpdateType[UpdateType["Local"] = 2] = "Local";
                    UpdateType[UpdateType["Global"] = 4] = "Global";
                    UpdateType[UpdateType["Clipping"] = 8] = "Clipping";
                    UpdateType[UpdateType["SortZIndexChildren"] = 16] = "SortZIndexChildren";
                    UpdateType[UpdateType["PremultipliedColors"] = 32] = "PremultipliedColors";
                    UpdateType[UpdateType["WorldAlpha"] = 64] = "WorldAlpha";
                    UpdateType[UpdateType["RenderState"] = 128] = "RenderState";
                    UpdateType[UpdateType["IsRenderable"] = 256] = "IsRenderable";
                    UpdateType[UpdateType["RenderTexture"] = 512] = "RenderTexture";
                    UpdateType[UpdateType["ParentRenderTexture"] = 1024] = "ParentRenderTexture";
                    UpdateType[UpdateType["RenderBounds"] = 2048] = "RenderBounds";
                    UpdateType[UpdateType["RecalcUniforms"] = 4096] = "RecalcUniforms";
                    UpdateType[UpdateType["Autosize"] = 8192] = "Autosize";
                    UpdateType[UpdateType["None"] = 0] = "None";
                    UpdateType[UpdateType["All"] = 16383] = "All";
                })(UpdateType || (UpdateType = {}));
                var CoreNode = function(_EventEmitter3) {
                    function CoreNode(stage, props) {
                        var _this5;
                        _classCallCheck(this, CoreNode);
                        _this5 = _callSuper(this, CoreNode);
                        _defineProperty(_this5, "stage", void 0);
                        _defineProperty(_this5, "children", []);
                        _defineProperty(_this5, "_id", getNewId());
                        _defineProperty(_this5, "props", void 0);
                        _defineProperty(_this5, "isCoreNode", true);
                        _defineProperty(_this5, "_animations", null);
                        _defineProperty(_this5, "renderOpBufferIdx", 0);
                        _defineProperty(_this5, "numQuads", 0);
                        _defineProperty(_this5, "renderOpTextures", []);
                        _defineProperty(_this5, "quadBufferIndex", -1);
                        _defineProperty(_this5, "isQuadDirty", true);
                        _defineProperty(_this5, "hasShaderUpdater", false);
                        _defineProperty(_this5, "hasShaderTimeFn", false);
                        _defineProperty(_this5, "hasColorProps", false);
                        _defineProperty(_this5, "textureLoaded", false);
                        _defineProperty(_this5, "updateType", UpdateType.All);
                        _defineProperty(_this5, "childUpdateType", UpdateType.None);
                        _defineProperty(_this5, "globalTransform", void 0);
                        _defineProperty(_this5, "localTransform", void 0);
                        _defineProperty(_this5, "sceneGlobalTransform", void 0);
                        _defineProperty(_this5, "renderCoords", void 0);
                        _defineProperty(_this5, "sceneRenderCoords", void 0);
                        _defineProperty(_this5, "renderBound", void 0);
                        _defineProperty(_this5, "strictBound", void 0);
                        _defineProperty(_this5, "preloadBound", void 0);
                        _defineProperty(_this5, "clippingRect", NO_CLIPPING_RECT);
                        _defineProperty(_this5, "textureCoords", void 0);
                        _defineProperty(_this5, "updateShaderUniforms", false);
                        _defineProperty(_this5, "isRenderable", false);
                        _defineProperty(_this5, "renderState", CoreNodeRenderState.Init);
                        _defineProperty(_this5, "isSimple", true);
                        _defineProperty(_this5, "_localIsTranslate", true);
                        _defineProperty(_this5, "_hasContainResize", false);
                        _defineProperty(_this5, "_globalIsTranslate", true);
                        _defineProperty(_this5, "worldAlpha", 1);
                        _defineProperty(_this5, "premultipliedColorTl", 0);
                        _defineProperty(_this5, "premultipliedColorTr", 0);
                        _defineProperty(_this5, "premultipliedColorBl", 0);
                        _defineProperty(_this5, "premultipliedColorBr", 0);
                        _defineProperty(_this5, "calcZIndex", 0);
                        _defineProperty(_this5, "hasRTTupdates", false);
                        _defineProperty(_this5, "parentHasRenderTexture", false);
                        _defineProperty(_this5, "rttParent", null);
                        _defineProperty(_this5, "framebufferDimensions", null);
                        _defineProperty(_this5, "autosizer", null);
                        _defineProperty(_this5, "parentAutosizer", null);
                        _defineProperty(_this5, "destroyed", false);
                        _defineProperty(_this5, "loadTextureTask", function() {
                            var _this5$props$textureO, _this5$props$textureO2;
                            var texture = _this5.props.texture;
                            if (texture === null) {
                                return;
                            }
                            if (_this5.textureOptions.preload === true) {
                                _this5.stage.txManager.loadTexture(texture);
                            }
                            texture.preventCleanup = (_this5$props$textureO = (_this5$props$textureO2 = _this5.props.textureOptions) === null || _this5$props$textureO2 === void 0 ? void 0 : _this5$props$textureO2.preventCleanup) !== null && _this5$props$textureO !== void 0 ? _this5$props$textureO : false;
                            texture.on("loaded", _this5.onTextureLoaded);
                            texture.on("failed", _this5.onTextureFailed);
                            texture.on("freed", _this5.onTextureFreed);
                            if (_this5.parentHasRenderTexture) {
                                _this5.notifyParentRTTOfUpdate();
                                return;
                            }
                            if (texture.state === "loaded") {
                                _this5.onTextureLoaded(texture, texture.dimensions);
                            } else if (texture.state === "failed") {
                                _this5.onTextureFailed(texture, texture.error);
                            } else if (texture.state === "freed") {
                                _this5.onTextureFreed(texture);
                            }
                        });
                        _defineProperty(_this5, "onTextureLoaded", function(_, dimensions) {
                            var _this5$props$textureO3;
                            if (_this5.autosizer !== null) {
                                _this5.autosizer.update();
                            }
                            _this5.textureLoaded = true;
                            _this5.setUpdateType(UpdateType.IsRenderable);
                            _this5.stage.requestRender();
                            if (_this5.parentHasRenderTexture) {
                                _this5.notifyParentRTTOfUpdate();
                            }
                            if (dimensions.w > 1 && dimensions.h > 1) {
                                _this5.emit("loaded", {
                                    type: "texture",
                                    dimensions: dimensions
                                });
                            }
                            if (_this5.stage.calculateTextureCoord === true && _this5.props.textureOptions !== null) {
                                _this5.textureCoords = _this5.stage.renderer.getTextureCoords(_this5);
                            }
                            if (((_this5$props$textureO3 = _this5.props.textureOptions) === null || _this5$props$textureO3 === void 0 || (_this5$props$textureO3 = _this5$props$textureO3.resizeMode) === null || _this5$props$textureO3 === void 0 ? void 0 : _this5$props$textureO3.type) === "contain") {
                                _this5.setUpdateType(UpdateType.Local);
                            }
                        });
                        _defineProperty(_this5, "onTextureFailed", function(_, error) {
                            _this5.textureLoaded = false;
                            _this5.isRenderable = false;
                            _this5.updateTextureOwnership(false);
                            _this5.setUpdateType(UpdateType.IsRenderable);
                            if (_this5.parentHasRenderTexture) {
                                _this5.notifyParentRTTOfUpdate();
                            }
                            if (_this5.texture !== null && _this5.texture.retryCount > _this5.texture.maxRetryCount) {
                                _this5.emit("failed", {
                                    type: "texture",
                                    error: error
                                });
                            }
                        });
                        _defineProperty(_this5, "onTextureFreed", function() {
                            _this5.textureLoaded = false;
                            _this5.isRenderable = false;
                            _this5.updateTextureOwnership(false);
                            _this5.setUpdateType(UpdateType.IsRenderable);
                            if (_this5.parentHasRenderTexture) {
                                _this5.notifyParentRTTOfUpdate();
                            }
                            _this5.emit("freed", {
                                type: "texture"
                            });
                        });
                        _this5.stage = stage;
                        _this5.localTransform = Matrix3d.identity();
                        _this5.globalTransform = Matrix3d.identity();
                        var initialUpdateType = UpdateType.Local | UpdateType.RenderBounds | UpdateType.RenderState;
                        var _texture = props.texture, shader = props.shader, src = props.src, rtt = props.rtt, boundsMargin = props.boundsMargin, parent = props.parent;
                        var p = _this5.props = props;
                        p.texture = null;
                        p.shader = null;
                        p.src = null;
                        p.rtt = false;
                        p.boundsMargin = null;
                        p.scale = null;
                        if (p.color > 0 || p.colorTop > 0 || p.colorBottom > 0 || p.colorLeft > 0 || p.colorRight > 0 || p.colorTl > 0 || p.colorTr > 0 || p.colorBl > 0 || p.colorBr > 0) {
                            _this5.hasColorProps = true;
                            initialUpdateType |= UpdateType.PremultipliedColors;
                        }
                        if (p.zIndex !== 0) {
                            _this5.zIndex = p.zIndex;
                        }
                        if (parent !== null) {
                            parent.addChild(_this5);
                        }
                        if (_texture !== null) {
                            _this5.texture = _texture;
                        }
                        if (shader === null || shader === _this5.stage.defShaderNode) {
                            p.shader = _this5.stage.defShaderNode;
                        } else {
                            _this5.shader = shader;
                        }
                        if (src !== null) {
                            _this5.src = src;
                        }
                        if (rtt !== false) {
                            _this5.rtt = rtt;
                        }
                        if (boundsMargin !== null) {
                            _this5.boundsMargin = boundsMargin;
                        }
                        if (p.autosize === true) {
                            _this5.autosizer = new Autosizer(_this5);
                        }
                        _this5.setUpdateType(initialUpdateType);
                        var dt = _this5.stage.defaultTexture;
                        if (dt !== null && dt.state !== "loaded") {
                            dt.once("loaded", function() {
                                return _this5.setUpdateType(UpdateType.IsRenderable);
                            });
                        }
                        _this5.updateIsSimple();
                        return _this5;
                    }
                    _inherits(CoreNode, _EventEmitter3);
                    return _createClass(CoreNode, [ {
                        key: "loadTexture",
                        value: function loadTexture() {
                            if (this.props.texture === null) {
                                return;
                            }
                            queueMicrotask(this.loadTextureTask);
                        }
                    }, {
                        key: "unloadTexture",
                        value: function unloadTexture() {
                            if (this.texture === null) {
                                return;
                            }
                            var texture = this.texture;
                            texture.off("loaded", this.onTextureLoaded);
                            texture.off("failed", this.onTextureFailed);
                            texture.off("freed", this.onTextureFreed);
                            texture.setRenderableOwner(this._id, false);
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
                                if (this._localIsTranslate === true) {
                                    this.localTransform.setTranslate(x, y);
                                    return;
                                }
                                this.localTransform = Matrix3d.translate(x, y, this.localTransform);
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
                            } else {
                                this.localTransform = Matrix3d.translate(x - mountTranslateX, y - mountTranslateY, this.localTransform);
                            }
                            var texture = p.texture;
                            if (this._hasContainResize === true && texture !== null && texture.dimensions !== null) {
                                var resizeModeScaleX = 1;
                                var resizeModeScaleY = 1;
                                var extraX = 0;
                                var extraY = 0;
                                var _texture$dimensions = texture.dimensions, tw = _texture$dimensions.w, th = _texture$dimensions.h;
                                var txAspectRatio = tw / th;
                                var nodeAspectRatio = w / h;
                                if (txAspectRatio > nodeAspectRatio) {
                                    var _scaleX = w / tw;
                                    var scaledTxHeight = th * _scaleX;
                                    extraY = (h - scaledTxHeight) / 2;
                                    resizeModeScaleY = scaledTxHeight / h;
                                } else {
                                    var _scaleY = h / th;
                                    var scaledTxWidth = tw * _scaleY;
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
                            this._hasContainResize = p.texture !== null && ((_p$textureOptions = p.textureOptions) === null || _p$textureOptions === void 0 || (_p$textureOptions = _p$textureOptions.resizeMode) === null || _p$textureOptions === void 0 ? void 0 : _p$textureOptions.type) === "contain";
                            this.isSimple = p.rotation === 0 && p.scaleX === 1 && p.scaleY === 1 && p.mountX === 0 && p.mountY === 0 && this._hasContainResize === false;
                        }
                    }, {
                        key: "update",
                        value: function update(delta, parentClippingRect) {
                            var props = this.props;
                            var parent = props.parent;
                            var parentHasRenderTexture = this.parentHasRenderTexture;
                            var newRenderState = null;
                            var updateType = this.updateType;
                            var childUpdateType = this.childUpdateType;
                            if (ENABLE_AUTOSIZE && updateType & UpdateType.Autosize && this.autosizer !== null) {
                                this.autosizer.update();
                            }
                            this.updateType = 0;
                            this.childUpdateType = 0;
                            if (updateType & UpdateType.Local) {
                                this.updateLocalTransform();
                                updateType |= UpdateType.Global;
                            }
                            if (updateType & UpdateType.RenderTexture && this.rtt === true) {
                                this.hasRTTupdates = true;
                            }
                            if (updateType & UpdateType.Global) {
                                var lt = this.localTransform;
                                var gt = this.globalTransform;
                                var fastPathApplied = false;
                                if (this.parentHasRenderTexture === true && parent.rtt === true) {
                                    Matrix3d.identity(gt);
                                    var parentTransform = parent.globalTransform || Matrix3d.identity(Matrix3d.temp);
                                    this.sceneGlobalTransform = Matrix3d.copy(parentTransform, this.sceneGlobalTransform).translateOrMultiply(lt);
                                    this._globalIsTranslate = this.isSimple;
                                } else if (this.parentHasRenderTexture === true && parent.rtt === false) {
                                    var parentSceneTransform = parent.sceneGlobalTransform || lt;
                                    this.sceneGlobalTransform = Matrix3d.copy(parentSceneTransform, this.sceneGlobalTransform).translateOrMultiply(lt);
                                    Matrix3d.copy(parent.globalTransform, gt);
                                    this._globalIsTranslate = false;
                                } else {
                                    var parentGT = parent.globalTransform;
                                    if (this.isSimple === true && parent._globalIsTranslate === true) {
                                        if (this._globalIsTranslate === false) {
                                            gt.ta = 1;
                                            gt.tb = 0;
                                            gt.tc = 0;
                                            gt.td = 1;
                                        }
                                        gt.setTranslate(parentGT.tx + lt.tx, parentGT.ty + lt.ty);
                                        this._globalIsTranslate = true;
                                        fastPathApplied = true;
                                    } else {
                                        Matrix3d.copy(parentGT, gt);
                                        this._globalIsTranslate = this.isSimple === true && parent._globalIsTranslate === true;
                                    }
                                }
                                if (fastPathApplied === false) {
                                    if (this.isSimple) {
                                        gt.translate(lt.tx, lt.ty);
                                    } else {
                                        gt.translateOrMultiply(lt);
                                    }
                                }
                                this.calculateRenderCoords();
                                this.updateBoundingRect();
                                updateType |= UpdateType.RenderState | UpdateType.RecalcUniforms;
                                if ((updateType & UpdateType.Autosize) === 0) {
                                    updateType |= UpdateType.Children;
                                    childUpdateType |= UpdateType.Global;
                                }
                                if (this.props.clipping !== false) {
                                    updateType |= UpdateType.Clipping | UpdateType.RenderBounds;
                                    childUpdateType |= UpdateType.RenderBounds;
                                }
                            }
                            if (updateType & UpdateType.RenderBounds) {
                                this.createRenderBounds();
                                updateType |= UpdateType.RenderState | UpdateType.Children;
                                childUpdateType |= UpdateType.RenderBounds;
                            }
                            if (updateType & UpdateType.RenderState) {
                                newRenderState = this.checkRenderBounds();
                                updateType |= UpdateType.IsRenderable;
                                if (newRenderState !== CoreNodeRenderState.OutOfBounds) {
                                    this.updateRenderState(newRenderState);
                                }
                            }
                            if (updateType & UpdateType.WorldAlpha) {
                                this.worldAlpha = parent.worldAlpha * this.props.alpha;
                                updateType |= UpdateType.PremultipliedColors | UpdateType.Children | UpdateType.IsRenderable;
                                childUpdateType |= UpdateType.WorldAlpha;
                            }
                            if (updateType & UpdateType.IsRenderable) {
                                this.updateIsRenderable();
                            }
                            if (ENABLE_AUTOSIZE && updateType & UpdateType.Global && this.isRenderable === true && this.parentAutosizer !== null) {
                                this.parentAutosizer.patch(this.id);
                            }
                            if (updateType & UpdateType.Clipping) {
                                this.calculateClippingRect(parentClippingRect);
                                updateType |= UpdateType.Children;
                                childUpdateType |= UpdateType.Clipping | UpdateType.RenderBounds;
                            }
                            if (updateType & UpdateType.PremultipliedColors) {
                                var alpha = this.worldAlpha;
                                var tl = props.colorTl;
                                var tr = props.colorTr;
                                var bl = props.colorBl;
                                var br = props.colorBr;
                                var same = tl === tr && tl === bl && tl === br;
                                var merged = premultiplyColorABGR(tl, alpha);
                                this.premultipliedColorTl = merged;
                                if (same === true) {
                                    this.premultipliedColorTr = this.premultipliedColorBl = this.premultipliedColorBr = merged;
                                } else {
                                    this.premultipliedColorTr = premultiplyColorABGR(tr, alpha);
                                    this.premultipliedColorBl = premultiplyColorABGR(bl, alpha);
                                    this.premultipliedColorBr = premultiplyColorABGR(br, alpha);
                                }
                            }
                            if (this.renderState === CoreNodeRenderState.OutOfBounds) {
                                this.updateType = updateType;
                                this.childUpdateType = childUpdateType;
                                return;
                            }
                            if (updateType & UpdateType.RecalcUniforms && this.hasShaderUpdater === true) {
                                this.updateShaderUniforms = true;
                            }
                            if (this.isRenderable === true && this.updateShaderUniforms === true) {
                                this.updateShaderUniforms = false;
                                this.shader.update();
                            }
                            if (updateType & UpdateType.Children && this.children.length > 0) {
                                var childClippingRect = this.clippingRect;
                                if (this.rtt === true) {
                                    childClippingRect = NO_CLIPPING_RECT;
                                }
                                var children = this.children;
                                var length = children.length;
                                if (childUpdateType !== 0) {
                                    for (var i = 0; i < length; i++) {
                                        var child = children[i];
                                        child.updateType |= childUpdateType;
                                        if (child.updateType === 0) {
                                            continue;
                                        }
                                        child.update(delta, childClippingRect);
                                    }
                                } else {
                                    for (var _i2 = 0; _i2 < length; _i2++) {
                                        var _child = children[_i2];
                                        if (_child.updateType === 0) {
                                            continue;
                                        }
                                        _child.update(delta, childClippingRect);
                                    }
                                }
                            }
                            if (parentHasRenderTexture === true) {
                                this.notifyParentRTTOfUpdate();
                            }
                            if (updateType & UpdateType.SortZIndexChildren) {
                                this.sortChildren();
                            }
                            if (newRenderState === CoreNodeRenderState.OutOfBounds) {
                                this.updateRenderState(newRenderState);
                                this.updateIsRenderable();
                                if (this.rtt === true && newRenderState === CoreNodeRenderState.OutOfBounds) {
                                    this.notifyChildrenRTTOfUpdate(newRenderState);
                                }
                            }
                            if (updateType & (UpdateType.Global | UpdateType.PremultipliedColors | UpdateType.WorldAlpha)) {
                                this.isQuadDirty = true;
                            }
                        }
                    }, {
                        key: "findParentRTTNode",
                        value: function findParentRTTNode() {
                            var rttNode = this.parent;
                            while (rttNode && !rttNode.rtt) {
                                rttNode = rttNode.parent;
                            }
                            return rttNode;
                        }
                    }, {
                        key: "notifyChildrenRTTOfUpdate",
                        value: function notifyChildrenRTTOfUpdate(renderState) {
                            var _iterator5 = _createForOfIteratorHelper(this.children), _step5;
                            try {
                                for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
                                    var child = _step5.value;
                                    child.updateRenderState(renderState);
                                    child.updateIsRenderable();
                                    child.notifyChildrenRTTOfUpdate(renderState);
                                }
                            } catch (err) {
                                _iterator5.e(err);
                            } finally {
                                _iterator5.f();
                            }
                        }
                    }, {
                        key: "notifyParentRTTOfUpdate",
                        value: function notifyParentRTTOfUpdate() {
                            if (this.parent === null) {
                                return;
                            }
                            var rttNode = this.rttParent || this.findParentRTTNode();
                            if (!rttNode) {
                                return;
                            }
                            rttNode.hasRTTupdates = true;
                            rttNode.setUpdateType(UpdateType.RenderTexture);
                            if (rttNode.parentHasRenderTexture === true) {
                                rttNode.notifyParentRTTOfUpdate();
                            }
                        }
                    }, {
                        key: "checkRenderBounds",
                        value: function checkRenderBounds() {
                            if (boundInsideBound(this.renderBound, this.strictBound)) {
                                return CoreNodeRenderState.InViewport;
                            }
                            if (boundInsideBound(this.renderBound, this.preloadBound)) {
                                return CoreNodeRenderState.InBounds;
                            }
                            if (boundLargeThanBound(this.renderBound, this.strictBound)) {
                                return CoreNodeRenderState.InViewport;
                            }
                            if (this.parent !== null && (this.props.w === 0 || this.props.h === 0)) {
                                return this.parent.renderState;
                            }
                            return CoreNodeRenderState.OutOfBounds;
                        }
                    }, {
                        key: "updateBoundingRect",
                        value: function updateBoundingRect() {
                            var transform = this.sceneGlobalTransform || this.globalTransform;
                            var renderCoords = this.sceneRenderCoords || this.renderCoords;
                            if (transform.tb === 0 && transform.tc === 0) {
                                this.renderBound = createBound(renderCoords.x1, renderCoords.y1, renderCoords.x3, renderCoords.y3, this.renderBound);
                            } else {
                                var x1 = renderCoords.x1, y1 = renderCoords.y1, x2 = renderCoords.x2, y2 = renderCoords.y2, x3 = renderCoords.x3, y3 = renderCoords.y3, x4 = renderCoords.x4, y4 = renderCoords.y4;
                                this.renderBound = createBound(Math.min(x1, x2, x3, x4), Math.min(y1, y2, y3, y4), Math.max(x1, x2, x3, x4), Math.max(y1, y2, y3, y4), this.renderBound);
                            }
                        }
                    }, {
                        key: "createRenderBounds",
                        value: function createRenderBounds() {
                            if (this.parent !== null && this.parent.strictBound !== undefined) {
                                var parentBound = this.parent.strictBound;
                                this.strictBound = createBound(parentBound.x1, parentBound.y1, parentBound.x2, parentBound.y2, this.strictBound);
                                this.preloadBound = createPreloadBounds(this.strictBound, this.boundsMargin, this.preloadBound);
                            } else {
                                this.strictBound = this.stage.strictBound;
                                this.preloadBound = this.stage.preloadBound;
                            }
                            if (this.props.clipping === false) {
                                return;
                            }
                            if (this.renderBound === undefined) {
                                return;
                            }
                            if (boundInsideBound(this.renderBound, this.strictBound) === false) {
                                return;
                            }
                            var _this$props = this.props, x = _this$props.x, y = _this$props.y, w = _this$props.w, h = _this$props.h, clipping = _this$props.clipping;
                            var _ref = this.sceneGlobalTransform || this.globalTransform || {}, tx = _ref.tx, ty = _ref.ty;
                            var _x = tx !== null && tx !== void 0 ? tx : x;
                            var _y = ty !== null && ty !== void 0 ? ty : y;
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
                            this.strictBound = createBound(_x - mL, _y - mT, _x + w + mR, _y + h + mB, this.strictBound);
                            this.preloadBound = createPreloadBounds(this.strictBound, this.boundsMargin, this.preloadBound);
                        }
                    }, {
                        key: "updateRenderState",
                        value: function updateRenderState(renderState) {
                            if (renderState === this.renderState) {
                                return;
                            }
                            var previous = this.renderState;
                            this.renderState = renderState;
                            if (renderState === CoreNodeRenderState.OutOfBounds || previous === CoreNodeRenderState.OutOfBounds) {
                                this.stage.requestRenderListUpdate();
                            }
                            if (EMIT_BOUNDS_EVENTS) {
                                var event = CoreNodeRenderStateMap$1.get(renderState);
                                this.emit(event, {
                                    previous: previous,
                                    current: renderState
                                });
                            }
                        }
                    }, {
                        key: "checkBasicRenderability",
                        value: function checkBasicRenderability() {
                            if (this.worldAlpha === 0 || this.isOutOfBounds() === true) {
                                return false;
                            } else {
                                return true;
                            }
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
                            if (this.texture !== null) {
                                if (this.texture.retryCount > this.texture.maxRetryCount) {
                                    this.updateTextureOwnership(false);
                                    this.setRenderable(false);
                                    return;
                                }
                                needsTextureOwnership = true;
                                newIsRenderable = this.textureLoaded;
                            } else if ((this.props.shader !== this.stage.renderer.getDefaultShaderNode() || this.hasColorProps === true) && this.hasDimensions() === true) {
                                newIsRenderable = true;
                            }
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
                                if (EMIT_BOUNDS_EVENTS) {
                                    this.emit("renderable", {
                                        type: "renderable",
                                        isRenderable: isRenderable
                                    });
                                }
                            }
                        }
                    }, {
                        key: "updateTextureOwnership",
                        value: function updateTextureOwnership(isRenderable) {
                            var _this$texture;
                            (_this$texture = this.texture) === null || _this$texture === void 0 || _this$texture.setRenderableOwner(this._id, isRenderable);
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
                        key: "calculateRenderCoords",
                        value: function calculateRenderCoords() {
                            var _this$props2 = this.props, w = _this$props2.w, h = _this$props2.h;
                            var g = this.globalTransform;
                            var tx = g.tx, ty = g.ty, ta = g.ta, tb = g.tb, tc = g.tc, td = g.td;
                            if (tb === 0 && tc === 0) {
                                var minX = tx;
                                var maxX = tx + w * ta;
                                var minY = ty;
                                var maxY = ty + h * td;
                                this.renderCoords = RenderCoords.translate(minX, minY, maxX, minY, maxX, maxY, minX, maxY, this.renderCoords);
                            } else {
                                this.renderCoords = RenderCoords.translate(tx, ty, tx + w * ta, ty + w * tc, tx + w * ta + h * tb, ty + w * tc + h * td, tx + h * tb, ty + h * td, this.renderCoords);
                            }
                            if (this.sceneGlobalTransform === undefined) {
                                return;
                            }
                            var _this$sceneGlobalTran = this.sceneGlobalTransform, stx = _this$sceneGlobalTran.tx, sty = _this$sceneGlobalTran.ty, sta = _this$sceneGlobalTran.ta, stb = _this$sceneGlobalTran.tb, stc = _this$sceneGlobalTran.tc, std = _this$sceneGlobalTran.td;
                            if (stb === 0 && stc === 0) {
                                var _minX = stx;
                                var _maxX = stx + w * sta;
                                var _minY = sty;
                                var _maxY = sty + h * std;
                                this.sceneRenderCoords = RenderCoords.translate(_minX, _minY, _maxX, _minY, _maxX, _maxY, _minX, _maxY, this.sceneRenderCoords);
                            } else {
                                this.sceneRenderCoords = RenderCoords.translate(stx, sty, stx + w * sta, sty + w * stc, stx + w * sta + h * stb, sty + w * stc + h * std, stx + h * stb, sty + h * std, this.sceneRenderCoords);
                            }
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
                            if (clippingRect === NO_CLIPPING_RECT) {
                                clippingRect = this.clippingRect = {
                                    x: 0,
                                    y: 0,
                                    w: 0,
                                    h: 0,
                                    valid: false
                                };
                            }
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
                            } else {
                                clippingRect.valid = false;
                            }
                            if (parentClippingRect.valid === true && clippingRect.valid === true) {
                                intersectRect(parentClippingRect, clippingRect, clippingRect);
                            } else if (parentClippingRect.valid === true) {
                                copyRect(parentClippingRect, clippingRect);
                                clippingRect.valid = true;
                            }
                        }
                    }, {
                        key: "destroy",
                        value: function destroy() {
                            var isChild = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                            if (this.destroyed === true || this.preventDestroy === true) {
                                if (isChild && this.preventDestroy === true) {
                                    this.props.parent = null;
                                }
                                return;
                            }
                            this.destroyed = true;
                            if (isChild === false) {
                                var parent = this.parent;
                                if (parent !== null) {
                                    parent.removeChild(this);
                                }
                                this.props.parent = null;
                                this.stage.requestRender();
                            }
                            this.removeAllListeners();
                            this.unloadTexture();
                            this.isRenderable = false;
                            if (this.hasShaderTimeFn === true) {
                                this.stage.untrackTimedNode(this);
                            }
                            var shader = this.props.shader;
                            if (shader !== null && shader !== this.stage.defShaderNode) {
                                shader.detachNode();
                            }
                            if (this.rtt === true) {
                                this.stage.renderer.removeRTTNode(this);
                            }
                            for (var i = 0, n = this.children.length; i < n; i++) {
                                this.children[i].destroy(true);
                            }
                            this.children.length = 0;
                            this.props.texture = null;
                        }
                    }, {
                        key: "renderQuads",
                        value: function renderQuads(renderer) {
                            if (this.parentHasRenderTexture === true) {
                                var rtt = renderer.renderToTextureActive;
                                if (rtt === false || this.parentRenderTexture !== renderer.activeRttNode) return;
                            }
                            if (this.renderTexture.state !== "loaded") {
                                return;
                            }
                            renderer.addQuad(this);
                        }
                    }, {
                        key: "renderTexture",
                        get: function get() {
                            return this.props.texture || this.stage.defaultTexture;
                        }
                    }, {
                        key: "renderTextureCoords",
                        get: function get() {
                            return this.textureCoords || this.stage.renderer.defaultTextureCoords;
                        }
                    }, {
                        key: "quadBufferCollection",
                        get: function get() {
                            return this.stage.renderer.quadBufferCollection;
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
                            if (this.hasShaderTimeFn === true) {
                                return this.getTimerValue();
                            }
                            return 0;
                        }
                    }, {
                        key: "getTimerValue",
                        value: function getTimerValue() {
                            if (typeof this.shader.time === "function") {
                                return this.shader.time(this.stage);
                            }
                            return this.stage.elapsedTime;
                        }
                    }, {
                        key: "sortChildren",
                        value: function sortChildren() {
                            this.children.sort(function(a, b) {
                                return a.props.zIndex - b.props.zIndex;
                            });
                            this.stage.requestRenderListUpdate();
                        }
                    }, {
                        key: "removeChild",
                        value: function removeChild(node) {
                            var targetParent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                            if (targetParent === null) {
                                if (this.props.rtt === true && this.parentHasRenderTexture === true) {
                                    node.clearRTTInheritance();
                                }
                                if (ENABLE_AUTOSIZE) {
                                    var autosizeTarget = this.autosizer || this.parentAutosizer;
                                    if (autosizeTarget !== null) {
                                        autosizeTarget.detach(node);
                                    }
                                }
                            }
                            _removeChild(node, this.children);
                            this.stage.requestRenderListUpdate();
                        }
                    }, {
                        key: "addChild",
                        value: function addChild(node) {
                            var previousParent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                            var inRttCluster = this.props.rtt === true || this.parentHasRenderTexture === true;
                            var children = this.children;
                            var attachToAutosizer = false;
                            var autosizeTarget = null;
                            if (ENABLE_AUTOSIZE) {
                                autosizeTarget = this.autosizer || this.parentAutosizer;
                                attachToAutosizer = autosizeTarget !== null;
                            }
                            node.parentHasRenderTexture = inRttCluster;
                            if (previousParent !== null) {
                                var previousParentInRttCluster = previousParent.props.rtt === true || previousParent.parentHasRenderTexture === true;
                                if (inRttCluster === false && previousParentInRttCluster === true) {
                                    node.clearRTTInheritance();
                                }
                                if (ENABLE_AUTOSIZE) {
                                    var previousAutosizer = node.autosizer || node.parentAutosizer;
                                    if (previousAutosizer !== null) {
                                        if (!autosizeTarget || previousAutosizer.id !== autosizeTarget.id) {
                                            previousAutosizer.detach(node);
                                        }
                                        attachToAutosizer = false;
                                    }
                                }
                            }
                            if (ENABLE_AUTOSIZE && attachToAutosizer === true && autosizeTarget) {
                                autosizeTarget.attach(node);
                            }
                            if (inRttCluster === true) {
                                node.markChildrenWithRTT(this);
                            }
                            children.push(node);
                            var lastIndex = children.length - 1;
                            var shouldSort = node.zIndex !== 0;
                            if (shouldSort === false && lastIndex > 0) {
                                var first = children[0];
                                var last = children[lastIndex - 1];
                                shouldSort = first.zIndex !== 0 || last.zIndex !== 0;
                            }
                            if (shouldSort) {
                                this.setUpdateType(UpdateType.SortZIndexChildren);
                            }
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
                            return this.props.x + -this.props.w * this.props.mountX + (((_this$props$parent = this.props.parent) === null || _this$props$parent === void 0 ? void 0 : _this$props$parent.absX) || ((_this$props$parent2 = this.props.parent) === null || _this$props$parent2 === void 0 || (_this$props$parent2 = _this$props$parent2.globalTransform) === null || _this$props$parent2 === void 0 ? void 0 : _this$props$parent2.tx) || 0);
                        }
                    }, {
                        key: "absY",
                        get: function get() {
                            var _this$props$parent$ab, _this$props$parent3;
                            return this.props.y + -this.props.h * this.props.mountY + ((_this$props$parent$ab = (_this$props$parent3 = this.props.parent) === null || _this$props$parent3 === void 0 ? void 0 : _this$props$parent3.absY) !== null && _this$props$parent$ab !== void 0 ? _this$props$parent$ab : 0);
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
                                var updateType = UpdateType.Local;
                                if (props.texture !== null && this.stage.calculateTextureCoord === true && props.textureOptions !== null) {
                                    this.textureCoords = this.stage.renderer.getTextureCoords(this);
                                }
                                if (props.rtt === true) {
                                    this.framebufferDimensions.w = value;
                                    this.texture = this.stage.txManager.createTexture("RenderTexture", this.framebufferDimensions);
                                    updateType |= UpdateType.RenderTexture;
                                }
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
                                var updateType = UpdateType.Local;
                                if (props.texture !== null && this.stage.calculateTextureCoord === true && props.textureOptions !== null) {
                                    this.textureCoords = this.stage.renderer.getTextureCoords(this);
                                }
                                if (props.rtt === true) {
                                    this.framebufferDimensions.h = value;
                                    this.texture = this.stage.txManager.createTexture("RenderTexture", this.framebufferDimensions);
                                    updateType |= UpdateType.RenderTexture;
                                }
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
                            this.props.alpha = value;
                            this.setUpdateType(UpdateType.PremultipliedColors | UpdateType.WorldAlpha | UpdateType.Children | UpdateType.IsRenderable);
                            this.childUpdateType |= UpdateType.WorldAlpha;
                        }
                    }, {
                        key: "autosize",
                        get: function get() {
                            return this.props.autosize;
                        },
                        set: function set(value) {
                            if (this.props.autosize === value) {
                                return;
                            }
                            this.props.autosize = value;
                            if (value === true && this.autosizer === null) {
                                this.autosizer = new Autosizer(this);
                            } else {
                                this.autosizer = null;
                            }
                        }
                    }, {
                        key: "boundsMargin",
                        get: function get() {
                            var props = this.props;
                            if (props.boundsMargin !== null) {
                                return props.boundsMargin;
                            }
                            var parent = this.parent;
                            if (parent !== null) {
                                var margin = parent.boundsMargin;
                                if (margin !== undefined) {
                                    return margin;
                                }
                            }
                            return this.stage.boundsMargin;
                        },
                        set: function set(value) {
                            if (value === this.props.boundsMargin) {
                                return;
                            }
                            if (value === null) {
                                this.props.boundsMargin = value;
                            } else {
                                var bm = Array.isArray(value) ? value : [ value, value, value, value ];
                                this.props.boundsMargin = bm;
                            }
                            this.setUpdateType(UpdateType.RenderBounds);
                        }
                    }, {
                        key: "clipping",
                        get: function get() {
                            return this.props.clipping;
                        },
                        set: function set(value) {
                            if (this.props.clipping === value) {
                                return;
                            }
                            this.props.clipping = value;
                            this.setUpdateType(UpdateType.Clipping | UpdateType.RenderBounds | UpdateType.Children);
                            this.childUpdateType |= UpdateType.Global | UpdateType.Clipping;
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
                            var has = value > 0;
                            if (has !== this.hasColorProps) {
                                this.setUpdateType(UpdateType.IsRenderable);
                            }
                            this.hasColorProps = has;
                            if (p.colorTop !== value) this.colorTop = value;
                            if (p.colorBottom !== value) this.colorBottom = value;
                            if (p.colorLeft !== value) this.colorLeft = value;
                            if (p.colorRight !== value) this.colorRight = value;
                            this.setUpdateType(UpdateType.PremultipliedColors);
                        }
                    }, {
                        key: "colorTop",
                        get: function get() {
                            return this.props.colorTop;
                        },
                        set: function set(value) {
                            if (this.props.colorTl !== value || this.props.colorTr !== value) {
                                this.colorTl = value;
                                this.colorTr = value;
                            }
                            this.props.colorTop = value;
                            this.hasColorProps = value > 0;
                            this.setUpdateType(UpdateType.PremultipliedColors | UpdateType.IsRenderable);
                        }
                    }, {
                        key: "colorBottom",
                        get: function get() {
                            return this.props.colorBottom;
                        },
                        set: function set(value) {
                            if (this.props.colorBl !== value || this.props.colorBr !== value) {
                                this.colorBl = value;
                                this.colorBr = value;
                            }
                            this.props.colorBottom = value;
                            this.hasColorProps = value > 0;
                            this.setUpdateType(UpdateType.PremultipliedColors | UpdateType.IsRenderable);
                        }
                    }, {
                        key: "colorLeft",
                        get: function get() {
                            return this.props.colorLeft;
                        },
                        set: function set(value) {
                            if (this.props.colorTl !== value || this.props.colorBl !== value) {
                                this.colorTl = value;
                                this.colorBl = value;
                            }
                            this.props.colorLeft = value;
                            this.hasColorProps = value > 0;
                            this.setUpdateType(UpdateType.PremultipliedColors | UpdateType.IsRenderable);
                        }
                    }, {
                        key: "colorRight",
                        get: function get() {
                            return this.props.colorRight;
                        },
                        set: function set(value) {
                            if (this.props.colorTr !== value || this.props.colorBr !== value) {
                                this.colorTr = value;
                                this.colorBr = value;
                            }
                            this.props.colorRight = value;
                            this.hasColorProps = value > 0;
                            this.setUpdateType(UpdateType.PremultipliedColors | UpdateType.IsRenderable);
                        }
                    }, {
                        key: "colorTl",
                        get: function get() {
                            return this.props.colorTl;
                        },
                        set: function set(value) {
                            this.props.colorTl = value;
                            this.hasColorProps = value > 0;
                            this.setUpdateType(UpdateType.PremultipliedColors | UpdateType.IsRenderable);
                        }
                    }, {
                        key: "colorTr",
                        get: function get() {
                            return this.props.colorTr;
                        },
                        set: function set(value) {
                            this.props.colorTr = value;
                            this.hasColorProps = value > 0;
                            this.setUpdateType(UpdateType.PremultipliedColors | UpdateType.IsRenderable);
                        }
                    }, {
                        key: "colorBl",
                        get: function get() {
                            return this.props.colorBl;
                        },
                        set: function set(value) {
                            this.props.colorBl = value;
                            this.hasColorProps = value > 0;
                            this.setUpdateType(UpdateType.PremultipliedColors | UpdateType.IsRenderable);
                        }
                    }, {
                        key: "colorBr",
                        get: function get() {
                            return this.props.colorBr;
                        },
                        set: function set(value) {
                            this.props.colorBr = value;
                            this.hasColorProps = value > 0;
                            this.setUpdateType(UpdateType.PremultipliedColors | UpdateType.IsRenderable);
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
                            if (sanitizedValue > Number.MAX_SAFE_INTEGER) {
                                sanitizedValue = 1e3;
                            } else if (sanitizedValue < Number.MIN_SAFE_INTEGER) {
                                sanitizedValue = -1e3;
                            }
                            if (this.props.zIndex === sanitizedValue) {
                                return;
                            }
                            this.props.zIndex = sanitizedValue;
                            var parent = this.parent;
                            if (parent !== null) {
                                parent.setUpdateType(UpdateType.SortZIndexChildren);
                            }
                        }
                    }, {
                        key: "parent",
                        get: function get() {
                            return this.props.parent;
                        },
                        set: function set(newParent) {
                            var oldParent = this.props.parent;
                            if (oldParent === newParent) {
                                return;
                            }
                            this.props.parent = newParent;
                            if (oldParent) {
                                oldParent.removeChild(this, newParent);
                            }
                            if (newParent !== null) {
                                newParent.addChild(this, oldParent);
                            }
                            this.setUpdateType(UpdateType.Global | UpdateType.RenderBounds);
                        }
                    }, {
                        key: "rtt",
                        get: function get() {
                            return this.props.rtt;
                        },
                        set: function set(value) {
                            if (this.props.rtt === value) {
                                return;
                            }
                            this.props.rtt = value;
                            if (value === true) {
                                this.initRenderTexture();
                                this.markChildrenWithRTT();
                            } else {
                                this.cleanupRenderTexture();
                            }
                            this.setUpdateType(UpdateType.RenderTexture);
                            if (this.parentHasRenderTexture === true) {
                                this.notifyParentRTTOfUpdate();
                            }
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
                        key: "initRenderTexture",
                        value: function initRenderTexture() {
                            this.framebufferDimensions = {
                                w: this.props.w,
                                h: this.props.h
                            };
                            this.texture = this.stage.txManager.createTexture("RenderTexture", this.framebufferDimensions);
                            this.stage.renderer.renderToTexture(this);
                        }
                    }, {
                        key: "cleanupRenderTexture",
                        value: function cleanupRenderTexture() {
                            this.unloadTexture();
                            this.clearRTTInheritance();
                            this.hasRTTupdates = false;
                            this.texture = null;
                            this.framebufferDimensions = null;
                        }
                    }, {
                        key: "markChildrenWithRTT",
                        value: function markChildrenWithRTT() {
                            var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
                            var parent = node || this;
                            var _iterator6 = _createForOfIteratorHelper(parent.children), _step6;
                            try {
                                for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
                                    var child = _step6.value;
                                    child.setUpdateType(UpdateType.All);
                                    child.parentHasRenderTexture = true;
                                    child.markChildrenWithRTT();
                                }
                            } catch (err) {
                                _iterator6.e(err);
                            } finally {
                                _iterator6.f();
                            }
                        }
                    }, {
                        key: "applyRTTInheritance",
                        value: function applyRTTInheritance(parent) {
                            if (parent.rtt) {
                                parent.setUpdateType(UpdateType.RenderTexture);
                            }
                            this.markChildrenWithRTT(parent);
                        }
                    }, {
                        key: "clearRTTInheritance",
                        value: function clearRTTInheritance() {
                            if (this.rtt) {
                                return;
                            }
                            var ancestorRTT = this.findParentRTTNode();
                            var _iterator7 = _createForOfIteratorHelper(this.children), _step7;
                            try {
                                for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
                                    var child = _step7.value;
                                    if (ancestorRTT !== null) {
                                        child.parentHasRenderTexture = true;
                                        child.rttParent = ancestorRTT;
                                    } else {
                                        child.parentHasRenderTexture = false;
                                        child.rttParent = null;
                                    }
                                    child.setUpdateType(UpdateType.All);
                                    child.clearRTTInheritance();
                                }
                            } catch (err) {
                                _iterator7.e(err);
                            } finally {
                                _iterator7.f();
                            }
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
                            if (this.props.shader === shader) {
                                return;
                            }
                            this.hasShaderUpdater = shader.update !== undefined;
                            this.hasShaderTimeFn = shader.time !== undefined;
                            if (shader.shaderKey !== "default") {
                                shader.attachNode(this);
                            }
                            if (this.hasShaderTimeFn === true) {
                                this.stage.trackTimedNode(this);
                            } else {
                                this.stage.untrackTimedNode(this);
                            }
                            this.props.shader = shader;
                            this.setUpdateType(UpdateType.IsRenderable | UpdateType.RecalcUniforms);
                        }
                    }, {
                        key: "src",
                        get: function get() {
                            return this.props.src;
                        },
                        set: function set(imageUrl) {
                            if (this.props.src === imageUrl) {
                                return;
                            }
                            this.props.src = imageUrl;
                            if (!imageUrl) {
                                this.texture = null;
                                return;
                            }
                            this.texture = this.stage.txManager.createTexture("ImageTexture", {
                                src: imageUrl,
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
                        key: "imageType",
                        get: function get() {
                            return this.props.imageType || null;
                        },
                        set: function set(type) {
                            if (this.props.imageType === type) {
                                return;
                            }
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
                        key: "parentFramebufferDimensions",
                        get: function get() {
                            if (this.rttParent !== null) {
                                return this.rttParent.framebufferDimensions;
                            }
                            this.rttParent = this.findParentRTTNode();
                            return this.rttParent ? this.rttParent.framebufferDimensions : null;
                        }
                    }, {
                        key: "parentRenderTexture",
                        get: function get() {
                            var parent = this.parent;
                            while (parent) {
                                if (parent.rtt) {
                                    return parent;
                                }
                                parent = parent.parent;
                            }
                            return null;
                        }
                    }, {
                        key: "texture",
                        get: function get() {
                            return this.props.texture;
                        },
                        set: function set(value) {
                            var _this$texture2;
                            if (this.props.texture === value) {
                                return;
                            }
                            var oldTexture = this.props.texture;
                            if (oldTexture) {
                                this.unloadTexture();
                                if (this.autosizer !== null && value === null) {
                                    this.autosizer.setMode(AutosizeMode.Children);
                                }
                            }
                            this.textureCoords = undefined;
                            this.props.texture = value;
                            this.textureLoaded = value !== null && value.state === "loaded";
                            if (value !== null) {
                                if (this.autosizer !== null) {
                                    this.autosizer.setMode(AutosizeMode.Texture);
                                }
                                value.setRenderableOwner(this._id, this.isRenderable);
                                this.loadTexture();
                            }
                            if (((_this$texture2 = this.texture) === null || _this$texture2 === void 0 ? void 0 : _this$texture2.type) === TextureType.subTexture && this.textureLoaded) {
                                this.isQuadDirty = true;
                            }
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
                            if (this.stage.calculateTextureCoord === true && value !== null) {
                                this.textureCoords = this.stage.renderer.getTextureCoords(this);
                            }
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
                        key: "setRTTUpdates",
                        value: function setRTTUpdates(type) {
                            var _this$parent;
                            this.hasRTTupdates = true;
                            (_this$parent = this.parent) === null || _this$parent === void 0 || _this$parent.setRTTUpdates(type);
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
                                            var _settings$duration2;
                                            var now = performance.now();
                                            var elapsed = now - _controller.lastRunTime;
                                            _controller.lastRunTime = now;
                                            var duration = (_settings$duration2 = settings.duration) !== null && _settings$duration2 !== void 0 ? _settings$duration2 : _controller.duration;
                                            _controller.duration = elapsed < duration ? elapsed : duration;
                                        }
                                        return _controller.start();
                                    }
                                }
                            } else {
                                animations = this._animations = {};
                            }
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
                            if (animations === null) {
                                return undefined;
                            }
                            var animation = animations[prop];
                            if (!animation) {
                                return undefined;
                            }
                            return (_animation$controller = animation.controller.props) === null || _animation$controller === void 0 || (_animation$controller = _animation$controller[prop]) === null || _animation$controller === void 0 ? void 0 : _animation$controller.target;
                        }
                    }, {
                        key: "flush",
                        value: function flush() {}
                    }, {
                        key: "addTexture",
                        value: function addTexture(texture) {
                            var textures = this.renderOpTextures;
                            var length = textures.length;
                            for (var i = 0; i < length; i++) {
                                if (textures[i] === texture) {
                                    return i;
                                }
                            }
                            if (length >= 1) {
                                return 4294967295;
                            }
                            textures.push(texture);
                            return length;
                        }
                    }, {
                        key: "draw",
                        value: function draw(renderer) {
                            var glw = renderer.glw, options = renderer.options, stage = renderer.stage;
                            var shader = this.props.shader;
                            stage.shManager.useShader(shader.program);
                            shader.program.bindRenderOp(this);
                            if (this.clippingRect.valid === true) {
                                var pixelRatio = this.parentHasRenderTexture ? 1 : stage.pixelRatio;
                                var clipX = Math.round(this.clippingRect.x * pixelRatio);
                                var clipWidth = Math.round(this.clippingRect.w * pixelRatio);
                                var clipHeight = Math.round(this.clippingRect.h * pixelRatio);
                                var clipY = Math.round(options.canvas.height - clipHeight - this.clippingRect.y * pixelRatio);
                                if (this.parentHasRenderTexture) {
                                    var parentFramebufferDimensions = this.parentFramebufferDimensions;
                                    clipY = parentFramebufferDimensions !== null ? parentFramebufferDimensions.h - this.props.h : 0;
                                }
                                glw.setScissorTest(true);
                                glw.scissor(clipX, clipY, clipWidth, clipHeight);
                            } else {
                                glw.setScissorTest(false);
                            }
                            var quadIdx = this.renderOpBufferIdx / 20 * 6 * 2;
                            glw.drawElements(glw.TRIANGLES, 6 * this.numQuads, glw.UNSIGNED_SHORT, quadIdx);
                        }
                    } ]);
                }(EventEmitter);
                var AnimationManager = function() {
                    function AnimationManager() {
                        _classCallCheck(this, AnimationManager);
                        _defineProperty(this, "activeAnimations", []);
                    }
                    return _createClass(AnimationManager, [ {
                        key: "registerAnimation",
                        value: function registerAnimation(animation) {
                            if (!this.activeAnimations.includes(animation)) {
                                this.activeAnimations.push(animation);
                            }
                        }
                    }, {
                        key: "unregisterAnimation",
                        value: function unregisterAnimation(animation) {
                            var idx = this.activeAnimations.indexOf(animation);
                            if (idx !== -1) {
                                this.activeAnimations.splice(idx, 1);
                            }
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
                                    if (anim.delayFor >= 0) {
                                        continue;
                                    } else {
                                        remainingDt = -anim.delayFor;
                                        anim.delayFor = 0;
                                    }
                                }
                                if (anim.progress === 0 && anim.state === "scheduled") {
                                    anim.state = "running";
                                }
                                if (duration === 0) {
                                    anim.progress = 1;
                                } else {
                                    anim.progress += remainingDt / duration;
                                }
                                var isFinished = false;
                                if (anim.progress >= 1) {
                                    if (loop) {
                                        anim.progress = anim.progress % 1;
                                        anim.delayFor = anim.delay;
                                    } else {
                                        anim.progress = 1;
                                        isFinished = true;
                                    }
                                }
                                this.applyValues(anim);
                                if (isFinished) {
                                    if (anim.stopMethod === "reverse") {
                                        this.reverseValues(anim);
                                        anim.progress = 0;
                                        anim.delayFor = anim.delay;
                                    } else {
                                        anim.stop();
                                    }
                                }
                            }
                        }
                    }, {
                        key: "applyValues",
                        value: function applyValues(anim) {
                            var easedProgress = anim.timingFunction(anim.progress) || anim.progress;
                            if (anim.props) {
                                for (var key in anim.props) {
                                    var value = anim.props[key];
                                    if (anim.progress === 1) {
                                        anim.node[key] = value.target;
                                    } else if (anim.progress === 0) {
                                        anim.node[key] = value.start;
                                    } else if (value.isColor) {
                                        anim.node[key] = mergeColorProgress(value.start, value.target, easedProgress);
                                    } else {
                                        anim.node[key] = value.start + (value.target - value.start) * easedProgress;
                                    }
                                }
                            }
                            if (anim.shaderProps && anim.node.shader) {
                                var updated = false;
                                for (var _key2 in anim.shaderProps) {
                                    var _value = anim.shaderProps[_key2];
                                    if (anim.progress === 1) {
                                        anim.node.shader.props[_key2] = _value.target;
                                    } else if (anim.progress === 0) {
                                        anim.node.shader.props[_key2] = _value.start;
                                    } else if (_value.isColor) {
                                        anim.node.shader.props[_key2] = mergeColorProgress(_value.start, _value.target, easedProgress);
                                    } else {
                                        anim.node.shader.props[_key2] = _value.start + (_value.target - _value.start) * easedProgress;
                                    }
                                    updated = true;
                                }
                                if (updated) {
                                    anim.node.setUpdateType(4096);
                                }
                            }
                        }
                    }, {
                        key: "reverseValues",
                        value: function reverseValues(anim) {
                            if (anim.props) {
                                for (var key in anim.props) {
                                    var v = anim.props[key];
                                    var t = v.start;
                                    v.start = v.target;
                                    v.target = t;
                                }
                            }
                            if (anim.shaderProps) {
                                for (var _key3 in anim.shaderProps) {
                                    var _v3 = anim.shaderProps[_key3];
                                    var _t = _v3.start;
                                    _v3.start = _v3.target;
                                    _v3.target = _t;
                                }
                            }
                            if (!anim.loop) {
                                anim.stopMethod = false;
                            }
                        }
                    } ]);
                }();
                function createImageWorker() {
                    function hasAlphaChannel(mimeType) {
                        return mimeType.indexOf("image/png") !== -1;
                    }
                    function getImage(src, premultiplyAlpha, x, y, width, height, options) {
                        return new Promise(function(resolve, reject) {
                            var xhr = new XMLHttpRequest;
                            xhr.open("GET", src, true);
                            xhr.responseType = "blob";
                            xhr.onload = function() {
                                if (xhr.status !== 200 && xhr.status !== 0) {
                                    return reject(new Error("Image loading failed. HTTP status code: ".concat(xhr.status || "N/A", ". URL: ").concat(src)));
                                }
                                var blob = xhr.response;
                                premultiplyAlpha !== undefined && premultiplyAlpha !== null ? premultiplyAlpha : hasAlphaChannel(blob.type);
                                {
                                    createImageBitmap(blob).then(function(data) {
                                        resolve({
                                            data: data,
                                            premultiplyAlpha: false
                                        });
                                    }).catch(function(error) {
                                        reject(error);
                                    });
                                }
                            };
                            xhr.onerror = function() {
                                reject(new Error("Network error occurred while trying to fetch the image."));
                            };
                            xhr.send();
                        });
                    }
                    self.onmessage = function(event) {
                        var src = event.data.src;
                        var id = event.data.id;
                        var premultiplyAlpha = event.data.premultiplyAlpha;
                        event.data.sx;
                        event.data.sy;
                        event.data.sw;
                        event.data.sh;
                        getImage(src, premultiplyAlpha).then(function(data) {
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
                var ImageWorkerManager = function() {
                    function ImageWorkerManager(numImageWorkers, createImageBitmapSupport) {
                        _classCallCheck(this, ImageWorkerManager);
                        _defineProperty(this, "messageManager", {});
                        _defineProperty(this, "workers", []);
                        _defineProperty(this, "workerLoad", []);
                        _defineProperty(this, "nextId", 0);
                        _defineProperty(this, "maxWorkers", void 0);
                        _defineProperty(this, "workerBlob", null);
                        _defineProperty(this, "createImageBitmapSupport", void 0);
                        this.maxWorkers = numImageWorkers;
                        this.createImageBitmapSupport = createImageBitmapSupport;
                    }
                    return _createClass(ImageWorkerManager, [ {
                        key: "spawnWorkers",
                        value: function spawnWorkers() {
                            if (this.workers.length > 0) {
                                return;
                            }
                            this.workerBlob = this.createWorkerBlob(this.createImageBitmapSupport);
                            for (var i = 0; i < this.maxWorkers; i++) {
                                this.spawnWorker();
                            }
                        }
                    }, {
                        key: "handleMessage",
                        value: function handleMessage(event, workerIndex) {
                            var _event$data = event.data, id = _event$data.id, data = _event$data.data, error = _event$data.error;
                            var msg = this.messageManager[id];
                            if (this.workerLoad[workerIndex]) {
                                this.workerLoad[workerIndex]--;
                            }
                            if (msg) {
                                var _msg = _slicedToArray(msg, 2), resolve = _msg[0], reject = _msg[1];
                                delete this.messageManager[id];
                                if (error) {
                                    reject(new Error(error));
                                } else {
                                    resolve(data);
                                }
                            }
                        }
                    }, {
                        key: "handleWorkerError",
                        value: function handleWorkerError(event, workerIndex) {
                            var message = event instanceof ErrorEvent && event.message ? event.message : "Image worker encountered an unrecoverable error";
                            for (var id in this.messageManager) {
                                var msg = this.messageManager[id];
                                if (msg) {
                                    var _msg2 = _slicedToArray(msg, 2), reject = _msg2[1];
                                    delete this.messageManager[id];
                                    reject(new Error(message));
                                }
                            }
                            this.workerLoad[workerIndex] = 0;
                        }
                    }, {
                        key: "createWorkerBlob",
                        value: function createWorkerBlob(createImageBitmapSupport) {
                            var workerCode = "(".concat(createImageWorker.toString(), ")()");
                            if (createImageBitmapSupport.options === true) {
                                workerCode = workerCode.replace("var supportsOptionsCreateImageBitmap = false;", "var supportsOptionsCreateImageBitmap = true;");
                            }
                            if (createImageBitmapSupport.full === true) {
                                workerCode = workerCode.replace("var supportsOptionsCreateImageBitmap = false;", "var supportsOptionsCreateImageBitmap = true;");
                                workerCode = workerCode.replace("var supportsFullCreateImageBitmap = false;", "var supportsFullCreateImageBitmap = true;");
                            }
                            if (createImageBitmapSupport.premultiplyHonored === false) {
                                workerCode = workerCode.replace("var premultiplyAlphaHonored = true;", "var premultiplyAlphaHonored = false;");
                            }
                            workerCode = workerCode.replace('"use strict";', "");
                            return new Blob([ workerCode ], {
                                type: "application/javascript"
                            });
                        }
                    }, {
                        key: "spawnWorker",
                        value: function spawnWorker() {
                            var _this6 = this;
                            if (this.workerBlob === null || this.workers.length >= this.maxWorkers) {
                                return;
                            }
                            var index = this.workers.length;
                            var urlFactory = self.URL ? URL : webkitURL;
                            var blobURL = urlFactory.createObjectURL(this.workerBlob);
                            var worker = new Worker(blobURL);
                            urlFactory.revokeObjectURL(blobURL);
                            worker.onmessage = function(event) {
                                return _this6.handleMessage(event, index);
                            };
                            worker.onerror = function(event) {
                                return _this6.handleWorkerError(event, index);
                            };
                            worker.onmessageerror = function(event) {
                                return _this6.handleWorkerError(event, index);
                            };
                            this.workers.push(worker);
                            this.workerLoad.push(0);
                            if (this.workers.length >= this.maxWorkers) {
                                this.workerBlob = null;
                            }
                        }
                    }, {
                        key: "getNextWorkerIndex",
                        value: function getNextWorkerIndex() {
                            if (this.workers.length === 0) return -1;
                            var minLoad = Infinity;
                            var workerIndex = 0;
                            for (var i = 0; i < this.workers.length; i++) {
                                var load = this.workerLoad[i] || 0;
                                if (load === 0) {
                                    return i;
                                }
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
                            var _this7 = this;
                            return new Promise(function(resolve, reject) {
                                try {
                                    var nextWorkerIndex = _this7.getNextWorkerIndex();
                                    if (nextWorkerIndex === -1) {
                                        _this7.spawnWorkers();
                                        nextWorkerIndex = _this7.getNextWorkerIndex();
                                    }
                                    if (nextWorkerIndex === -1) {
                                        reject(new Error("No image workers available"));
                                        return;
                                    }
                                    var id = _this7.nextId++;
                                    _this7.messageManager[id] = [ resolve, reject ];
                                    var worker = _this7.workers[nextWorkerIndex];
                                    _this7.workerLoad[nextWorkerIndex]++;
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
                var ColorTexture = function(_Texture2) {
                    function ColorTexture(txManager, props) {
                        var _this8;
                        _classCallCheck(this, ColorTexture);
                        _this8 = _callSuper(this, ColorTexture, [ txManager ]);
                        _defineProperty(_this8, "type", TextureType.color);
                        _defineProperty(_this8, "props", void 0);
                        _this8.props = props;
                        return _this8;
                    }
                    _inherits(ColorTexture, _Texture2);
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
                                return _regenerator().w(function(_context2) {
                                    while (1) switch (_context2.n) {
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
                                        return _context2.a(2, {
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
                _defineProperty(ColorTexture, "z$__type__Props", void 0);
                function isCompressedTextureContainer(src) {
                    return /\.(ktx|pvr)$/.test(src);
                }
                var PVR_MAGIC = 55727696;
                var PVR_TO_GL_INTERNAL_FORMAT = {
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
                var ASTC_MAGIC = 1554098963;
                var ASTC_TO_GL_INTERNAL_FORMAT = {
                    "4x4": 37808,
                    "5x5": 37809,
                    "6x6": 37810,
                    "8x8": 37811,
                    "10x10": 37812,
                    "12x12": 37813
                };
                var KTX_IDENTIFIER = [ 171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10 ];
                var loadCompressedTexture = function() {
                    var _ref2 = _asyncToGenerator(_regenerator().m(function _callee3(url) {
                        var arrayBuffer, view, magic, isKTX, i, _t2;
                        return _regenerator().w(function(_context3) {
                            while (1) switch (_context3.p = _context3.n) {
                              case 0:
                                _context3.p = 0;
                                _context3.n = 1;
                                return new Promise(function(resolve, reject) {
                                    var xhr = new XMLHttpRequest;
                                    xhr.open("GET", url, true);
                                    xhr.responseType = "arraybuffer";
                                    xhr.onload = function() {
                                        if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 0) {
                                            resolve(xhr.response);
                                        } else {
                                            reject(new Error("Failed to fetch compressed texture: ".concat(xhr.status, " ").concat(xhr.statusText)));
                                        }
                                    };
                                    xhr.onerror = function() {
                                        reject(new Error("Network error occurred while trying to fetch the compressed texture."));
                                    };
                                    xhr.send(null);
                                });

                              case 1:
                                arrayBuffer = _context3.v;
                                if (!(arrayBuffer.byteLength < 16)) {
                                    _context3.n = 2;
                                    break;
                                }
                                throw new Error("File too small to be a valid compressed texture (".concat(arrayBuffer.byteLength, " bytes). Expected at least 16 bytes for header inspection."));

                              case 2:
                                view = new DataView(arrayBuffer);
                                magic = view.getUint32(0, true);
                                if (!(magic === PVR_MAGIC)) {
                                    _context3.n = 3;
                                    break;
                                }
                                return _context3.a(2, loadPVR(view));

                              case 3:
                                if (!(magic === ASTC_MAGIC)) {
                                    _context3.n = 4;
                                    break;
                                }
                                return _context3.a(2, loadASTC(view));

                              case 4:
                                isKTX = true;
                                i = 0;

                              case 5:
                                if (!(i < KTX_IDENTIFIER.length)) {
                                    _context3.n = 7;
                                    break;
                                }
                                if (!(view.getUint8(i) !== KTX_IDENTIFIER[i])) {
                                    _context3.n = 6;
                                    break;
                                }
                                isKTX = false;
                                return _context3.a(3, 7);

                              case 6:
                                i++;
                                _context3.n = 5;
                                break;

                              case 7:
                                if (!(isKTX === true)) {
                                    _context3.n = 8;
                                    break;
                                }
                                return _context3.a(2, loadKTX(view));

                              case 8:
                                throw new Error("Unrecognized compressed texture format");

                              case 9:
                                _context3.n = 11;
                                break;

                              case 10:
                                _context3.p = 10;
                                _t2 = _context3.v;
                                throw new Error("Failed to load compressed texture from ".concat(url, ": ").concat(_t2));

                              case 11:
                                return _context3.a(2);
                            }
                        }, _callee3, null, [ [ 0, 10 ] ]);
                    }));
                    return function loadCompressedTexture(_x2) {
                        return _ref2.apply(this, arguments);
                    };
                }();
                function readUint24(view, offset) {
                    return view.getUint8(offset) + (view.getUint8(offset + 1) << 8) + (view.getUint8(offset + 2) << 16);
                }
                var loadASTC = function() {
                    var _ref3 = _asyncToGenerator(_regenerator().m(function _callee4(view) {
                        var blockX, blockY, sizeX, sizeY, expected, dataSize, internalFormat, buffer, mipmaps;
                        return _regenerator().w(function(_context4) {
                            while (1) switch (_context4.n) {
                              case 0:
                                blockX = view.getUint8(4);
                                blockY = view.getUint8(5);
                                sizeX = readUint24(view, 7);
                                sizeY = readUint24(view, 10);
                                if (!(sizeX === 0 || sizeY === 0)) {
                                    _context4.n = 1;
                                    break;
                                }
                                throw new Error("Invalid ASTC texture dimensions: ".concat(sizeX, "x").concat(sizeY));

                              case 1:
                                expected = Math.ceil(sizeX / blockX) * Math.ceil(sizeY / blockY) * 16;
                                dataSize = view.byteLength - 16;
                                if (!(expected !== dataSize)) {
                                    _context4.n = 2;
                                    break;
                                }
                                throw new Error("Invalid ASTC texture data size: expected ".concat(expected, ", got ").concat(dataSize));

                              case 2:
                                internalFormat = ASTC_TO_GL_INTERNAL_FORMAT["".concat(blockX, "x").concat(blockY)];
                                if (!(internalFormat === undefined)) {
                                    _context4.n = 3;
                                    break;
                                }
                                throw new Error("Unsupported ASTC block size: ".concat(blockX, "x").concat(blockY));

                              case 3:
                                buffer = view.buffer;
                                mipmaps = [];
                                mipmaps.push(buffer.slice(16));
                                return _context4.a(2, {
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
                    return function loadASTC(_x3) {
                        return _ref3.apply(this, arguments);
                    };
                }();
                var uploadASTC = function uploadASTC(glw, texture, data) {
                    if (glw.getExtension("WEBGL_compressed_texture_astc") === null) {
                        throw new Error("ASTC compressed textures not supported by this device");
                    }
                    glw.bindTexture(texture);
                    var glInternalFormat = data.glInternalFormat, mipmaps = data.mipmaps, w = data.w, h = data.h;
                    if (mipmaps === undefined) {
                        return;
                    }
                    var view = new Uint8Array(mipmaps[0]);
                    glw.compressedTexImage2D(0, glInternalFormat, w, h, 0, view);
                    glw.texParameteri(glw.TEXTURE_WRAP_S, glw.CLAMP_TO_EDGE);
                    glw.texParameteri(glw.TEXTURE_WRAP_T, glw.CLAMP_TO_EDGE);
                    glw.texParameteri(glw.TEXTURE_MAG_FILTER, glw.LINEAR);
                    glw.texParameteri(glw.TEXTURE_MIN_FILTER, glw.LINEAR);
                };
                var loadKTX = function() {
                    var _ref4 = _asyncToGenerator(_regenerator().m(function _callee5(view) {
                        var endianness, littleEndian, glType, glFormat, glInternalFormat, width, height, mipmapLevels, bytesOfKeyValueData, mipmaps, buffer, offset, i, imageSize, end;
                        return _regenerator().w(function(_context5) {
                            while (1) switch (_context5.n) {
                              case 0:
                                endianness = view.getUint32(12, true);
                                littleEndian = endianness === 67305985;
                                if (!(littleEndian === false && endianness !== 16909060)) {
                                    _context5.n = 1;
                                    break;
                                }
                                throw new Error("Invalid KTX endianness value");

                              case 1:
                                glType = view.getUint32(16, littleEndian);
                                glFormat = view.getUint32(24, littleEndian);
                                if (!(glType !== 0 || glFormat !== 0)) {
                                    _context5.n = 2;
                                    break;
                                }
                                throw new Error("KTX texture is not compressed (glType: ".concat(glType, ", glFormat: ").concat(glFormat, ")"));

                              case 2:
                                glInternalFormat = view.getUint32(28, littleEndian);
                                if (!(blockInfoMap[glInternalFormat] === undefined)) {
                                    _context5.n = 3;
                                    break;
                                }
                                throw new Error("Unsupported KTX compressed texture format: 0x".concat(glInternalFormat.toString(16)));

                              case 3:
                                width = view.getUint32(36, littleEndian);
                                height = view.getUint32(40, littleEndian);
                                if (!(width === 0 || height === 0)) {
                                    _context5.n = 4;
                                    break;
                                }
                                throw new Error("Invalid KTX texture dimensions: ".concat(width, "x").concat(height));

                              case 4:
                                mipmapLevels = view.getUint32(56, littleEndian);
                                if (!(mipmapLevels === 0)) {
                                    _context5.n = 5;
                                    break;
                                }
                                throw new Error("KTX texture has no mipmap levels");

                              case 5:
                                bytesOfKeyValueData = view.getUint32(60, littleEndian);
                                mipmaps = [];
                                buffer = view.buffer;
                                offset = 64 + bytesOfKeyValueData;
                                if (!(offset > view.byteLength)) {
                                    _context5.n = 6;
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
                                    if (offset % 4 !== 0) {
                                        offset += 4 - offset % 4;
                                    }
                                }
                                return _context5.a(2, {
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
                    return function loadKTX(_x4) {
                        return _ref4.apply(this, arguments);
                    };
                }();
                var uploadKTX = function uploadKTX(glw, texture, data) {
                    var glInternalFormat = data.glInternalFormat, mipmaps = data.mipmaps, width = data.w, height = data.h, blockInfo = data.blockInfo;
                    if (mipmaps === undefined) {
                        return;
                    }
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
                function pvrtcMipSize(width, height, bpp) {
                    var minW = bpp === 2 ? 16 : 8;
                    var minH = 8;
                    var w = Math.max(width, minW);
                    var h = Math.max(height, minH);
                    return w * h * bpp / 8;
                }
                var loadPVR = function() {
                    var _ref5 = _asyncToGenerator(_regenerator().m(function _callee6(view) {
                        var pixelFormatLow, internalFormat, height, width, mipmapLevels, metadataSize, buffer, offset, mipmaps, block, i, declaredSize, max, start, end, bpp, computed, blockW, blockH, _computed;
                        return _regenerator().w(function(_context6) {
                            while (1) switch (_context6.n) {
                              case 0:
                                pixelFormatLow = view.getUint32(8, true);
                                internalFormat = PVR_TO_GL_INTERNAL_FORMAT[pixelFormatLow];
                                if (!(internalFormat === undefined)) {
                                    _context6.n = 1;
                                    break;
                                }
                                throw new Error("Unsupported PVR pixel format: 0x".concat(pixelFormatLow.toString(16)));

                              case 1:
                                height = view.getInt32(24, true);
                                width = view.getInt32(28, true);
                                if (!(width === 0 || height === 0)) {
                                    _context6.n = 2;
                                    break;
                                }
                                throw new Error("Invalid PVR texture dimensions: ".concat(width, "x").concat(height));

                              case 2:
                                mipmapLevels = view.getInt32(44, true);
                                metadataSize = view.getUint32(48, true);
                                buffer = view.buffer;
                                offset = 52 + metadataSize;
                                if (!(offset > buffer.byteLength)) {
                                    _context6.n = 3;
                                    break;
                                }
                                throw new Error("Invalid PVR file: metadata exceeds file size");

                              case 3:
                                mipmaps = [];
                                block = blockInfoMap[internalFormat];
                                i = 0;

                              case 4:
                                if (!(i < mipmapLevels)) {
                                    _context6.n = 8;
                                    break;
                                }
                                declaredSize = view.getUint32(offset, true);
                                max = buffer.byteLength - (offset + 4);
                                if (!(declaredSize > 0 && declaredSize <= max)) {
                                    _context6.n = 5;
                                    break;
                                }
                                offset += 4;
                                start = offset;
                                end = offset + declaredSize;
                                mipmaps.push(buffer.slice(start, end));
                                offset = end;
                                offset = offset + 3 & -4;
                                return _context6.a(3, 7);

                              case 5:
                                if (!(pixelFormatLow === 0 || pixelFormatLow === 1 || pixelFormatLow === 2 || pixelFormatLow === 3)) {
                                    _context6.n = 6;
                                    break;
                                }
                                bpp = pixelFormatLow === 0 || pixelFormatLow === 1 ? 2 : 4;
                                computed = pvrtcMipSize(width >> i, height >> i, bpp);
                                mipmaps.push(buffer.slice(offset, offset + computed));
                                offset += computed;
                                offset = offset + 3 & -4;
                                return _context6.a(3, 7);

                              case 6:
                                if (block !== undefined) {
                                    blockW = Math.ceil((width >> i) / block.width);
                                    blockH = Math.ceil((height >> i) / block.height);
                                    _computed = blockW * blockH * block.bytes;
                                    mipmaps.push(buffer.slice(offset, offset + _computed));
                                    offset += _computed;
                                    offset = offset + 3 & -4;
                                }

                              case 7:
                                i++;
                                _context6.n = 4;
                                break;

                              case 8:
                                return _context6.a(2, {
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
                    return function loadPVR(_x5) {
                        return _ref5.apply(this, arguments);
                    };
                }();
                var uploadPVR = function uploadPVR(glw, texture, data) {
                    var glInternalFormat = data.glInternalFormat, mipmaps = data.mipmaps, width = data.w, height = data.h;
                    if (mipmaps === undefined) {
                        return;
                    }
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
                var BLOCK_4x4x8 = {
                    width: 4,
                    height: 4,
                    bytes: 8
                };
                var BLOCK_4x4x16 = {
                    width: 4,
                    height: 4,
                    bytes: 16
                };
                var BLOCK_5x5x16 = {
                    width: 5,
                    height: 5,
                    bytes: 16
                };
                var BLOCK_6x6x16 = {
                    width: 6,
                    height: 6,
                    bytes: 16
                };
                var BLOCK_8x4x8 = {
                    width: 8,
                    height: 4,
                    bytes: 8
                };
                var BLOCK_8x8x16 = {
                    width: 8,
                    height: 8,
                    bytes: 16
                };
                var BLOCK_10x10x16 = {
                    width: 10,
                    height: 10,
                    bytes: 16
                };
                var BLOCK_12x12x16 = {
                    width: 12,
                    height: 12,
                    bytes: 16
                };
                var blockInfoMap = {
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
                var uploadCompressedTexture = {
                    ktx: uploadKTX,
                    pvr: uploadPVR,
                    astc: uploadASTC
                };
                function isSvgImage(url) {
                    return /\.(svg)(\?.*)?$/.test(url);
                }
                var loadSvg = function() {
                    var _ref6 = _asyncToGenerator(_regenerator().m(function _callee7(url, width, height, sx, sy, sw, sh, pixelRatio) {
                        var img, targetW, targetH, ratio, physW, physH, canvas, ctx, bitmap, _t3;
                        return _regenerator().w(function(_context7) {
                            while (1) switch (_context7.p = _context7.n) {
                              case 0:
                                img = new Image;
                                if (isBase64Image(url) === false) {
                                    img.crossOrigin = "anonymous";
                                }
                                _context7.n = 1;
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
                                if (sw !== null && sh !== null) {
                                    ctx.drawImage(img, sx !== null && sx !== void 0 ? sx : 0, sy !== null && sy !== void 0 ? sy : 0, sw, sh, 0, 0, physW, physH);
                                } else {
                                    ctx.drawImage(img, 0, 0, physW, physH);
                                }
                                if (!(typeof createImageBitmap === "function")) {
                                    _context7.n = 5;
                                    break;
                                }
                                _context7.p = 2;
                                _context7.n = 3;
                                return createImageBitmap(canvas);

                              case 3:
                                bitmap = _context7.v;
                                return _context7.a(2, {
                                    data: bitmap,
                                    premultiplyAlpha: false
                                });

                              case 4:
                                _context7.p = 4;
                                _t3 = _context7.v;

                              case 5:
                                return _context7.a(2, {
                                    data: ctx.getImageData(0, 0, physW, physH),
                                    premultiplyAlpha: true
                                });
                            }
                        }, _callee7, null, [ [ 2, 4 ] ]);
                    }));
                    return function loadSvg(_x6, _x7, _x8, _x9, _x0, _x1, _x10, _x11) {
                        return _ref6.apply(this, arguments);
                    };
                }();
                var ImageTexture = function(_Texture3) {
                    function ImageTexture(txManager, props) {
                        var _this9;
                        _classCallCheck(this, ImageTexture);
                        _this9 = _callSuper(this, ImageTexture, [ txManager ]);
                        _defineProperty(_this9, "platform", void 0);
                        _defineProperty(_this9, "props", void 0);
                        _defineProperty(_this9, "type", TextureType.image);
                        _this9.platform = txManager.platform;
                        _this9.props = props;
                        _this9.maxRetryCount = props.maxRetryCount;
                        return _this9;
                    }
                    _inherits(ImageTexture, _Texture3);
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
                                return _regenerator().w(function(_context8) {
                                    while (1) switch (_context8.n) {
                                      case 0:
                                        img = new Image;
                                        if (typeof src === "string" && isBase64Image(src) === false) {
                                            img.crossOrigin = "anonymous";
                                        }
                                        return _context8.a(2, new Promise(function(resolve, reject) {
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
                                            } else {
                                                img.src = src;
                                            }
                                        }));
                                    }
                                }, _callee8);
                            }));
                            function loadImageFallback(_x12, _x13) {
                                return _loadImageFallback.apply(this, arguments);
                            }
                            return loadImageFallback;
                        }()
                    }, {
                        key: "createImageBitmap",
                        value: function() {
                            var _createImageBitmap = _asyncToGenerator(_regenerator().m(function _callee9(blob, premultiplyAlpha, sx, sy, sw, sh) {
                                var hasAlphaChannel, imageBitmapSupported, useGlPremultiply, bitmapMode, _bitmap, bitmap, _t4;
                                return _regenerator().w(function(_context9) {
                                    while (1) switch (_context9.n) {
                                      case 0:
                                        hasAlphaChannel = premultiplyAlpha !== null && premultiplyAlpha !== void 0 ? premultiplyAlpha : blob.type.includes("image/png");
                                        imageBitmapSupported = this.txManager.imageBitmapSupported;
                                        useGlPremultiply = hasAlphaChannel === true && imageBitmapSupported.premultiplyHonored === false;
                                        bitmapMode = hasAlphaChannel === true && useGlPremultiply === false ? "premultiply" : "none";
                                        if (!(imageBitmapSupported.full === true && sw !== null && sh !== null)) {
                                            _context9.n = 2;
                                            break;
                                        }
                                        _context9.n = 1;
                                        return this.platform.createImageBitmap(blob, sx || 0, sy || 0, sw, sh, {
                                            premultiplyAlpha: bitmapMode,
                                            colorSpaceConversion: "none",
                                            imageOrientation: "none"
                                        });

                                      case 1:
                                        _bitmap = _context9.v;
                                        return _context9.a(2, {
                                            data: _bitmap,
                                            premultiplyAlpha: useGlPremultiply
                                        });

                                      case 2:
                                        if (!(imageBitmapSupported.basic === true)) {
                                            _context9.n = 4;
                                            break;
                                        }
                                        _context9.n = 3;
                                        return this.platform.createImageBitmap(blob);

                                      case 3:
                                        _t4 = _context9.v;
                                        return _context9.a(2, {
                                            data: _t4,
                                            premultiplyAlpha: false
                                        });

                                      case 4:
                                        _context9.n = 5;
                                        return this.platform.createImageBitmap(blob, {
                                            premultiplyAlpha: bitmapMode,
                                            colorSpaceConversion: "none",
                                            imageOrientation: "none"
                                        });

                                      case 5:
                                        bitmap = _context9.v;
                                        return _context9.a(2, {
                                            data: bitmap,
                                            premultiplyAlpha: useGlPremultiply
                                        });
                                    }
                                }, _callee9, this);
                            }));
                            function createImageBitmap(_x14, _x15, _x16, _x17, _x18, _x19) {
                                return _createImageBitmap.apply(this, arguments);
                            }
                            return createImageBitmap;
                        }()
                    }, {
                        key: "loadImage",
                        value: function() {
                            var _loadImage = _asyncToGenerator(_regenerator().m(function _callee0(src) {
                                var _this$props3, premultiplyAlpha, sx, sy, sw, sh, isBase64, blob, _t5;
                                return _regenerator().w(function(_context0) {
                                    while (1) switch (_context0.n) {
                                      case 0:
                                        _this$props3 = this.props, premultiplyAlpha = _this$props3.premultiplyAlpha, sx = _this$props3.sx, 
                                        sy = _this$props3.sy, sw = _this$props3.sw, sh = _this$props3.sh;
                                        isBase64 = isBase64Image(src);
                                        if (!(this.txManager.hasCreateImageBitmap === true)) {
                                            _context0.n = 5;
                                            break;
                                        }
                                        if (!(isBase64 === false && this.txManager.hasWorker === true && this.txManager.imageWorkerManager !== null)) {
                                            _context0.n = 1;
                                            break;
                                        }
                                        return _context0.a(2, this.txManager.imageWorkerManager.getImage(src, premultiplyAlpha, sx, sy, sw, sh));

                                      case 1:
                                        if (!isBase64) {
                                            _context0.n = 2;
                                            break;
                                        }
                                        _t5 = dataURIToBlob(src);
                                        _context0.n = 4;
                                        break;

                                      case 2:
                                        _context0.n = 3;
                                        return fetchJson(src, "blob");

                                      case 3:
                                        _t5 = _context0.v;

                                      case 4:
                                        blob = _t5;
                                        return _context0.a(2, this.createImageBitmap(blob, premultiplyAlpha, sx, sy, sw, sh));

                                      case 5:
                                        return _context0.a(2, this.loadImageFallback(src, premultiplyAlpha !== null && premultiplyAlpha !== void 0 ? premultiplyAlpha : true));
                                    }
                                }, _callee0, this);
                            }));
                            function loadImage(_x20) {
                                return _loadImage.apply(this, arguments);
                            }
                            return loadImage;
                        }()
                    }, {
                        key: "getTextureSource",
                        value: function() {
                            var _getTextureSource2 = _asyncToGenerator(_regenerator().m(function _callee1() {
                                var _this$txManager$rende, _ref7, _resp$premultiplyAlph;
                                var _this$props4, src, _type, err, resp, _t6;
                                return _regenerator().w(function(_context1) {
                                    while (1) switch (_context1.p = _context1.n) {
                                      case 0:
                                        if (!(((_this$txManager$rende = this.txManager.renderer) === null || _this$txManager$rende === void 0 ? void 0 : _this$txManager$rende.mode) === "canvas")) {
                                            _context1.n = 1;
                                            break;
                                        }
                                        _this$props4 = this.props, src = _this$props4.src, _type = _this$props4.type;
                                        if (!(_type === "compressed" || typeof src === "string" && isCompressedTextureContainer(src) === true)) {
                                            _context1.n = 1;
                                            break;
                                        }
                                        err = new Error("ImageTexture: Compressed textures are not supported in Canvas2D render mode (src: ".concat(String(src), ")"));
                                        this.setState("failed", err);
                                        return _context1.a(2, {
                                            data: null
                                        });

                                      case 1:
                                        _context1.p = 1;
                                        _context1.n = 2;
                                        return this.determineImageTypeAndLoadImage();

                                      case 2:
                                        resp = _context1.v;
                                        _context1.n = 4;
                                        break;

                                      case 3:
                                        _context1.p = 3;
                                        _t6 = _context1.v;
                                        this.setState("failed", _t6);
                                        return _context1.a(2, {
                                            data: null
                                        });

                                      case 4:
                                        if (!(resp.data === null)) {
                                            _context1.n = 5;
                                            break;
                                        }
                                        this.setState("failed", Error("ImageTexture: No image data"));
                                        return _context1.a(2, {
                                            data: null
                                        });

                                      case 5:
                                        return _context1.a(2, {
                                            data: resp.data,
                                            premultiplyAlpha: (_ref7 = (_resp$premultiplyAlph = resp.premultiplyAlpha) !== null && _resp$premultiplyAlph !== void 0 ? _resp$premultiplyAlph : this.props.premultiplyAlpha) !== null && _ref7 !== void 0 ? _ref7 : true
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
                            var _this$props5 = this.props, src = _this$props5.src, premultiplyAlpha = _this$props5.premultiplyAlpha, type = _this$props5.type;
                            if (src === null) {
                                return {
                                    data: null
                                };
                            }
                            if (typeof src !== "string") {
                                if (src instanceof Blob) {
                                    if (this.txManager.hasCreateImageBitmap === true) {
                                        var _this$props6 = this.props, sx = _this$props6.sx, sy = _this$props6.sy, sw = _this$props6.sw, sh = _this$props6.sh;
                                        return this.createImageBitmap(src, premultiplyAlpha, sx, sy, sw, sh);
                                    } else {
                                        return this.loadImageFallback(src, premultiplyAlpha !== null && premultiplyAlpha !== void 0 ? premultiplyAlpha : true);
                                    }
                                }
                                if (src instanceof ImageData) {
                                    return {
                                        data: src,
                                        premultiplyAlpha: premultiplyAlpha
                                    };
                                }
                                return {
                                    data: src(),
                                    premultiplyAlpha: premultiplyAlpha
                                };
                            }
                            var absoluteSrc = convertUrlToAbsolute(src);
                            if (type === "regular") {
                                return this.loadImage(absoluteSrc);
                            }
                            if (type === "svg" || isSvgImage(src) === true) {
                                return loadSvg(absoluteSrc, this.props.w, this.props.h, this.props.sx, this.props.sy, this.props.sw, this.props.sh, this.txManager.pixelRatio);
                            }
                            if (type === "compressed" || isCompressedTextureContainer(src) === true) {
                                return loadCompressedTexture(absoluteSrc);
                            }
                            return this.loadImage(absoluteSrc);
                        }
                    } ], [ {
                        key: "makeCacheKey",
                        value: function makeCacheKey(props) {
                            var _props$premultiplyAlp, _props$maxRetryCount;
                            var key = props.key || props.src;
                            if (typeof key !== "string") {
                                return false;
                            }
                            var premultiplyAlpha = (_props$premultiplyAlp = props.premultiplyAlpha) !== null && _props$premultiplyAlp !== void 0 ? _props$premultiplyAlp : true;
                            var maxRetryCount = (_props$maxRetryCount = props.maxRetryCount) !== null && _props$maxRetryCount !== void 0 ? _props$maxRetryCount : 5;
                            var cacheKey = "ImageTexture,".concat(key, ",").concat(premultiplyAlpha, ",").concat(maxRetryCount);
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
                _defineProperty(ImageTexture, "z$__type__Props", void 0);
                var NoiseTexture = function(_Texture4) {
                    function NoiseTexture(txManager, props) {
                        var _this0;
                        _classCallCheck(this, NoiseTexture);
                        _this0 = _callSuper(this, NoiseTexture, [ txManager ]);
                        _defineProperty(_this0, "props", void 0);
                        _defineProperty(_this0, "type", TextureType.noise);
                        _this0.props = props;
                        return _this0;
                    }
                    _inherits(NoiseTexture, _Texture4);
                    return _createClass(NoiseTexture, [ {
                        key: "getTextureSource",
                        value: function() {
                            var _getTextureSource3 = _asyncToGenerator(_regenerator().m(function _callee10() {
                                var _this$props7, w, h, size, pixelData8, i, v;
                                return _regenerator().w(function(_context10) {
                                    while (1) switch (_context10.n) {
                                      case 0:
                                        _this$props7 = this.props, w = _this$props7.w, h = _this$props7.h;
                                        size = w * h * 4;
                                        pixelData8 = new Uint8ClampedArray(size);
                                        for (i = 0; i < size; i += 4) {
                                            v = Math.floor(Math.random() * 256);
                                            pixelData8[i] = v;
                                            pixelData8[i + 1] = v;
                                            pixelData8[i + 2] = v;
                                            pixelData8[i + 3] = 255;
                                        }
                                        return _context10.a(2, {
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
                            if (props.cacheId === undefined) {
                                return false;
                            }
                            var resolvedProps = NoiseTexture.resolveDefaults(props);
                            return "NoiseTexture,".concat(resolvedProps.w, ",").concat(resolvedProps.h, ",").concat(resolvedProps.cacheId);
                        }
                    }, {
                        key: "resolveDefaults",
                        value: function resolveDefaults(props) {
                            var _props$w2, _props$h2, _props$cacheId;
                            return {
                                w: (_props$w2 = props.w) !== null && _props$w2 !== void 0 ? _props$w2 : 128,
                                h: (_props$h2 = props.h) !== null && _props$h2 !== void 0 ? _props$h2 : 128,
                                cacheId: (_props$cacheId = props.cacheId) !== null && _props$cacheId !== void 0 ? _props$cacheId : 0
                            };
                        }
                    } ]);
                }(Texture);
                _defineProperty(NoiseTexture, "z$__type__Props", void 0);
                var subTextureId = 0;
                var SubTexture = function(_Texture5) {
                    function SubTexture(txManager, props) {
                        var _this1;
                        _classCallCheck(this, SubTexture);
                        _this1 = _callSuper(this, SubTexture, [ txManager ]);
                        _defineProperty(_this1, "props", void 0);
                        _defineProperty(_this1, "parentTexture", void 0);
                        _defineProperty(_this1, "type", TextureType.subTexture);
                        _defineProperty(_this1, "subtextureId", "subtexture-".concat(subTextureId++));
                        _defineProperty(_this1, "onParentTxLoaded", function() {
                            _this1.setState("loaded", {
                                w: _this1.props.w,
                                h: _this1.props.h
                            });
                        });
                        _defineProperty(_this1, "onParentTxFailed", function(target, error) {
                            _this1.retryCount = _this1.parentTexture.retryCount - 1;
                            _this1.setState("failed", error);
                        });
                        _defineProperty(_this1, "onParentTxLoading", function() {
                            _this1.setState("loading");
                        });
                        _defineProperty(_this1, "onParentTxFreed", function() {
                            _this1.setState("freed");
                        });
                        _this1.props = props;
                        assertTruthy(_this1.props.texture);
                        assertTruthy(_this1.props.texture instanceof ImageTexture);
                        _this1.parentTexture = txManager.resolveParentTexture(_this1.props.texture);
                        if (_this1.renderableOwners.length > 0) {
                            _this1.parentTexture.setRenderableOwner(_this1.subtextureId, true);
                        }
                        queueMicrotask(function() {
                            var parentTx = _this1.parentTexture;
                            if (parentTx.state === "loaded" && parentTx.dimensions !== null) {
                                _this1.onParentTxLoaded(parentTx, parentTx.dimensions);
                            } else if (parentTx.state === "loading") {
                                _this1.onParentTxLoading();
                            } else if (parentTx.state === "failed" && parentTx.error !== null) {
                                _this1.onParentTxFailed(parentTx, parentTx.error);
                            } else if (parentTx.state === "freed") {
                                _this1.onParentTxFreed();
                            }
                            parentTx.on("loading", _this1.onParentTxLoading);
                            parentTx.on("loaded", _this1.onParentTxLoaded);
                            parentTx.on("failed", _this1.onParentTxFailed);
                            parentTx.on("freed", _this1.onParentTxFreed);
                        });
                        return _this1;
                    }
                    _inherits(SubTexture, _Texture5);
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
                                var _this10 = this;
                                return _regenerator().w(function(_context11) {
                                    while (1) switch (_context11.n) {
                                      case 0:
                                        return _context11.a(2, new Promise(function(resolve, reject) {
                                            resolve({
                                                data: _this10.props
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
                _defineProperty(SubTexture, "z$__type__Props", void 0);
                var RenderTexture = function(_Texture6) {
                    function RenderTexture(txManager, props) {
                        var _this11;
                        _classCallCheck(this, RenderTexture);
                        _this11 = _callSuper(this, RenderTexture, [ txManager ]);
                        _defineProperty(_this11, "props", void 0);
                        _defineProperty(_this11, "type", TextureType.renderToTexture);
                        _this11.props = props;
                        return _this11;
                    }
                    _inherits(RenderTexture, _Texture6);
                    return _createClass(RenderTexture, [ {
                        key: "w",
                        get: function get() {
                            return this.props.w;
                        },
                        set: function set(value) {
                            this.props.w = value;
                        }
                    }, {
                        key: "h",
                        get: function get() {
                            return this.props.h;
                        },
                        set: function set(value) {
                            this.props.h = value;
                        }
                    }, {
                        key: "getTextureSource",
                        value: function() {
                            var _getTextureSource5 = _asyncToGenerator(_regenerator().m(function _callee12() {
                                return _regenerator().w(function(_context12) {
                                    while (1) switch (_context12.n) {
                                      case 0:
                                        return _context12.a(2, {
                                            data: null,
                                            premultiplyAlpha: null
                                        });
                                    }
                                }, _callee12);
                            }));
                            function getTextureSource() {
                                return _getTextureSource5.apply(this, arguments);
                            }
                            return getTextureSource;
                        }()
                    } ], [ {
                        key: "resolveDefaults",
                        value: function resolveDefaults(props) {
                            return {
                                w: props.w || 256,
                                h: props.h || 256
                            };
                        }
                    } ]);
                }(Texture);
                _defineProperty(RenderTexture, "z$__type__Props", void 0);
                function validateCreateImageBitmap(_x21) {
                    return _validateCreateImageBitmap.apply(this, arguments);
                }
                function _validateCreateImageBitmap() {
                    _validateCreateImageBitmap = _asyncToGenerator(_regenerator().m(function _callee26(platform) {
                        var _bitmap$close;
                        var pngBinaryData, support, blob, bitmap, _bitmapWithOptions$cl, options, bitmapWithOptions, _bitmapWithFullOption, bitmapWithFullOptions, _t1, _t10;
                        return _regenerator().w(function(_context26) {
                            while (1) switch (_context26.p = _context26.n) {
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
                                _context26.n = 1;
                                return platform.createImageBitmap(blob);

                              case 1:
                                bitmap = _context26.v;
                                (_bitmap$close = bitmap.close) === null || _bitmap$close === void 0 || _bitmap$close.call(bitmap);
                                support.basic = true;
                                _context26.p = 2;
                                options = {
                                    premultiplyAlpha: "none"
                                };
                                _context26.n = 3;
                                return platform.createImageBitmap(blob, options);

                              case 3:
                                bitmapWithOptions = _context26.v;
                                (_bitmapWithOptions$cl = bitmapWithOptions.close) === null || _bitmapWithOptions$cl === void 0 || _bitmapWithOptions$cl.call(bitmapWithOptions);
                                support.options = true;
                                _context26.n = 5;
                                break;

                              case 4:
                                _context26.p = 4;
                                _t1 = _context26.v;

                              case 5:
                                _context26.p = 5;
                                _context26.n = 6;
                                return platform.createImageBitmap(blob, 0, 0, 1, 1, {
                                    premultiplyAlpha: "none"
                                });

                              case 6:
                                bitmapWithFullOptions = _context26.v;
                                (_bitmapWithFullOption = bitmapWithFullOptions.close) === null || _bitmapWithFullOption === void 0 || _bitmapWithFullOption.call(bitmapWithFullOptions);
                                support.full = true;
                                _context26.n = 8;
                                break;

                              case 7:
                                _context26.p = 7;
                                _t10 = _context26.v;

                              case 8:
                                return _context26.a(2, support);
                            }
                        }, _callee26, null, [ [ 5, 7 ], [ 2, 4 ] ]);
                    }));
                    return _validateCreateImageBitmap.apply(this, arguments);
                }
                function detectPremultiplyAlphaHonored(_x22) {
                    return _detectPremultiplyAlphaHonored.apply(this, arguments);
                }
                function _detectPremultiplyAlphaHonored() {
                    _detectPremultiplyAlphaHonored = _asyncToGenerator(_regenerator().m(function _callee27(platform) {
                        var _bitmap$close3, _bitmap3;
                        var bitmap, imageData, canvas, gl, _bitmap$close2, _bitmap2, tex, fb, result, px, _t11;
                        return _regenerator().w(function(_context27) {
                            while (1) switch (_context27.p = _context27.n) {
                              case 0:
                                _context27.p = 0;
                                imageData = new ImageData(new Uint8ClampedArray([ 255, 0, 0, 128 ]), 1, 1);
                                _context27.n = 1;
                                return platform.createImageBitmap(imageData, {
                                    premultiplyAlpha: "premultiply",
                                    colorSpaceConversion: "none",
                                    imageOrientation: "none"
                                });

                              case 1:
                                bitmap = _context27.v;
                                _context27.n = 3;
                                break;

                              case 2:
                                _context27.p = 2;
                                _t11 = _context27.v;
                                return _context27.a(2, null);

                              case 3:
                                canvas = platform.createCanvas();
                                canvas.width = 1;
                                canvas.height = 1;
                                gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
                                if (!(gl === null)) {
                                    _context27.n = 4;
                                    break;
                                }
                                (_bitmap$close2 = (_bitmap2 = bitmap).close) === null || _bitmap$close2 === void 0 || _bitmap$close2.call(_bitmap2);
                                return _context27.a(2, null);

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
                                (_bitmap$close3 = (_bitmap3 = bitmap).close) === null || _bitmap$close3 === void 0 || _bitmap$close3.call(_bitmap3);
                                return _context27.a(2, result);
                            }
                        }, _callee27, null, [ [ 0, 2 ] ]);
                    }));
                    return _detectPremultiplyAlphaHonored.apply(this, arguments);
                }
                var TextureErrorCode;
                (function(TextureErrorCode) {
                    TextureErrorCode["MEMORY_THRESHOLD_EXCEEDED"] = "MEMORY_THRESHOLD_EXCEEDED";
                    TextureErrorCode["TEXTURE_DATA_NULL"] = "TEXTURE_DATA_NULL";
                    TextureErrorCode["TEXTURE_TYPE_NOT_REGISTERED"] = "TEXTURE_TYPE_NOT_REGISTERED";
                    TextureErrorCode["TEXTURE_UPLOAD_FAILED"] = "TEXTURE_UPLOAD_FAILED";
                })(TextureErrorCode || (TextureErrorCode = {}));
                var defaultMessages = _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, TextureErrorCode.MEMORY_THRESHOLD_EXCEEDED, "Memory threshold exceeded"), TextureErrorCode.TEXTURE_DATA_NULL, "Texture data is null"), TextureErrorCode.TEXTURE_TYPE_NOT_REGISTERED, "Texture type is not registered"), TextureErrorCode.TEXTURE_UPLOAD_FAILED, "Texture upload failed");
                var TextureError = function(_Error) {
                    function TextureError(codeOrMessage, maybeMessage) {
                        var _this12;
                        _classCallCheck(this, TextureError);
                        var isCode = Object.values(TextureErrorCode).includes(codeOrMessage);
                        var code = isCode ? codeOrMessage : undefined;
                        var message;
                        if (isCode && code) {
                            message = maybeMessage !== null && maybeMessage !== void 0 ? maybeMessage : defaultMessages[code];
                        } else {
                            message = String(codeOrMessage);
                        }
                        _this12 = _callSuper(this, TextureError, [ message ]);
                        _defineProperty(_this12, "code", void 0);
                        _this12.name = (this instanceof TextureError ? this.constructor : void 0).name;
                        if (code) _this12.code = code;
                        return _this12;
                    }
                    _inherits(TextureError, _Error);
                    return _createClass(TextureError);
                }(_wrapNativeSuper(Error));
                var TextureUploadQueue = function() {
                    function TextureUploadQueue() {
                        _classCallCheck(this, TextureUploadQueue);
                        _defineProperty(this, "list", []);
                        _defineProperty(this, "membership", new Set);
                        _defineProperty(this, "head", 0);
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
                            if (this.membership.has(texture)) {
                                return;
                            }
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
                            return undefined;
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
                var CoreTextureManager = function(_EventEmitter4) {
                    function CoreTextureManager(stage, settings) {
                        var _this13;
                        _classCallCheck(this, CoreTextureManager);
                        _this13 = _callSuper(this, CoreTextureManager);
                        _defineProperty(_this13, "keyCache", new Map);
                        _defineProperty(_this13, "txConstructors", {});
                        _defineProperty(_this13, "maxRetryCount", void 0);
                        _defineProperty(_this13, "uploadTextureQueue", new TextureUploadQueue);
                        _defineProperty(_this13, "initialized", false);
                        _defineProperty(_this13, "stage", void 0);
                        _defineProperty(_this13, "numImageWorkers", void 0);
                        _defineProperty(_this13, "platform", void 0);
                        _defineProperty(_this13, "imageWorkerManager", null);
                        _defineProperty(_this13, "hasCreateImageBitmap", false);
                        _defineProperty(_this13, "imageBitmapSupported", {
                            basic: false,
                            options: false,
                            full: false,
                            premultiplyHonored: null
                        });
                        _defineProperty(_this13, "hasWorker", !!self.Worker);
                        _defineProperty(_this13, "renderer", void 0);
                        _defineProperty(_this13, "frameTime", 0);
                        var numImageWorkers = settings.numImageWorkers, createImageBitmapSupport = settings.createImageBitmapSupport, premultiplyAlphaHonored = settings.premultiplyAlphaHonored, maxRetryCount = settings.maxRetryCount;
                        _this13.stage = stage;
                        _this13.platform = stage.platform;
                        _this13.numImageWorkers = numImageWorkers;
                        _this13.maxRetryCount = maxRetryCount;
                        if (createImageBitmapSupport === "auto") {
                            validateCreateImageBitmap(_this13.platform).then(function(result) {
                                _this13.resolvePremultiplyAndInit(result, premultiplyAlphaHonored);
                            }).catch(function() {
                                console.warn("[Lightning] createImageBitmap is not supported on this browser. ImageTexture will be slower.");
                                _this13.initialized = true;
                                _this13.emit("initialized");
                            });
                        } else {
                            _this13.resolvePremultiplyAndInit({
                                basic: createImageBitmapSupport === "basic",
                                options: createImageBitmapSupport === "options",
                                full: createImageBitmapSupport === "full",
                                premultiplyHonored: null
                            }, premultiplyAlphaHonored);
                        }
                        _this13.registerTextureType("ImageTexture", ImageTexture);
                        _this13.registerTextureType("ColorTexture", ColorTexture);
                        _this13.registerTextureType("NoiseTexture", NoiseTexture);
                        _this13.registerTextureType("SubTexture", SubTexture);
                        _this13.registerTextureType("RenderTexture", RenderTexture);
                        return _this13;
                    }
                    _inherits(CoreTextureManager, _EventEmitter4);
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
                            var _this14 = this;
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
                                _this14.initialize(support);
                            }).catch(function() {
                                support.premultiplyHonored = null;
                                _this14.initialize(support);
                            });
                        }
                    }, {
                        key: "initialize",
                        value: function initialize(support) {
                            this.hasCreateImageBitmap = support.basic || support.options || support.full;
                            this.imageBitmapSupported = support;
                            if (support.premultiplyHonored === false) {
                                console.warn('[Lightning] createImageBitmap premultiplyAlpha:"premultiply" is not honored on this device — images may show alpha ghosting. GL-side premultiply fallback recommended.');
                            }
                            if (this.hasCreateImageBitmap === false) {
                                console.warn("[Lightning] createImageBitmap is not supported on this browser. ImageTexture will be slower.");
                            }
                            if (this.hasCreateImageBitmap === true && this.hasWorker === true && this.numImageWorkers > 0) {
                                this.imageWorkerManager = new ImageWorkerManager(this.numImageWorkers, support);
                            } else {
                                console.warn("[Lightning] Image worker count is 0 or workers are not supported on this browser. Image loading will be slower.");
                            }
                            this.initialized = true;
                            this.emit("initialized");
                            if (this.uploadTextureQueue.size > 0) {
                                this.processSome(Infinity).catch(function(err) {
                                    console.error("Failed to drain pre-init texture queue:", err);
                                });
                            }
                        }
                    }, {
                        key: "enqueueUploadTexture",
                        value: function enqueueUploadTexture(texture) {
                            if (texture.state === "failed" || texture.state === "freed") {
                                return;
                            }
                            this.uploadTextureQueue.add(texture);
                        }
                    }, {
                        key: "createTexture",
                        value: function createTexture(textureType, props) {
                            var TextureClass = this.txConstructors[textureType];
                            if (!TextureClass) {
                                throw new TextureError(TextureErrorCode.TEXTURE_TYPE_NOT_REGISTERED, 'Texture type "'.concat(textureType, '" is not registered'));
                            }
                            var cacheKey = TextureClass.makeCacheKey(props);
                            if (cacheKey) {
                                var cached = this.keyCache.get(cacheKey);
                                if (cached) {
                                    return cached;
                                }
                            }
                            var resolvedProps = TextureClass.resolveDefaults(props);
                            var texture = new TextureClass(this, resolvedProps);
                            if (cacheKey) {
                                this.initTextureToCache(texture, cacheKey);
                            }
                            return texture;
                        }
                    }, {
                        key: "loadTexture",
                        value: function() {
                            var _loadTexture = _asyncToGenerator(_regenerator().m(function _callee13(texture, priority) {
                                var textureDataResult, shouldUploadImmediately;
                                return _regenerator().w(function(_context13) {
                                    while (1) switch (_context13.n) {
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
                                        if (!(this.initialized === false)) {
                                            _context13.n = 3;
                                            break;
                                        }
                                        this.uploadTextureQueue.add(texture);
                                        return _context13.a(2);

                                      case 3:
                                        texture.setState("loading");
                                        _context13.n = 4;
                                        return texture.getTextureData().catch(function(err) {
                                            console.error(err);
                                            texture.setState("failed", new TextureError(TextureErrorCode.TEXTURE_DATA_NULL));
                                            return null;
                                        });

                                      case 4:
                                        textureDataResult = _context13.v;
                                        if (!(textureDataResult === null || texture.state === "failed")) {
                                            _context13.n = 5;
                                            break;
                                        }
                                        return _context13.a(2);

                                      case 5:
                                        shouldUploadImmediately = texture.type !== TextureType.image || priority === true;
                                        if (!(shouldUploadImmediately === true)) {
                                            _context13.n = 7;
                                            break;
                                        }
                                        _context13.n = 6;
                                        return this.uploadTexture(texture).catch(function(err) {
                                            console.error("Failed to upload texture:", err);
                                            texture.setState("failed", new TextureError(TextureErrorCode.TEXTURE_UPLOAD_FAILED, err instanceof Error ? err.message : undefined));
                                        });

                                      case 6:
                                        return _context13.a(2);

                                      case 7:
                                        this.enqueueUploadTexture(texture);

                                      case 8:
                                        return _context13.a(2);
                                    }
                                }, _callee13, this);
                            }));
                            function loadTexture(_x23, _x24) {
                                return _loadTexture.apply(this, arguments);
                            }
                            return loadTexture;
                        }()
                    }, {
                        key: "uploadTexture",
                        value: function() {
                            var _uploadTexture = _asyncToGenerator(_regenerator().m(function _callee14(texture) {
                                var coreContext;
                                return _regenerator().w(function(_context14) {
                                    while (1) switch (_context14.n) {
                                      case 0:
                                        if (!(this.stage.txMemManager.doNotExceedCriticalThreshold === true && this.stage.txMemManager.criticalCleanupRequested === true)) {
                                            _context14.n = 1;
                                            break;
                                        }
                                        texture.setState("failed", new TextureError(TextureErrorCode.MEMORY_THRESHOLD_EXCEEDED));
                                        return _context14.a(2);

                                      case 1:
                                        if (!(texture.state === "failed" || texture.state === "freed")) {
                                            _context14.n = 2;
                                            break;
                                        }
                                        return _context14.a(2);

                                      case 2:
                                        if (!(texture.state === "loaded")) {
                                            _context14.n = 3;
                                            break;
                                        }
                                        return _context14.a(2);

                                      case 3:
                                        if (!(texture.textureData === null)) {
                                            _context14.n = 4;
                                            break;
                                        }
                                        texture.setState("failed", new TextureError(TextureErrorCode.TEXTURE_DATA_NULL, "Texture data is null, cannot upload texture"));
                                        return _context14.a(2);

                                      case 4:
                                        coreContext = texture.loadCtxTexture();
                                        if (!(coreContext.state === "loaded")) {
                                            _context14.n = 5;
                                            break;
                                        }
                                        texture.setState("loaded");
                                        return _context14.a(2);

                                      case 5:
                                        _context14.n = 6;
                                        return coreContext.load();

                                      case 6:
                                        return _context14.a(2);
                                    }
                                }, _callee14, this);
                            }));
                            function uploadTexture(_x25) {
                                return _uploadTexture.apply(this, arguments);
                            }
                            return uploadTexture;
                        }()
                    }, {
                        key: "isProcessingTexture",
                        value: function isProcessingTexture(texture) {
                            return this.uploadTextureQueue.has(texture);
                        }
                    }, {
                        key: "processSome",
                        value: function() {
                            var _processSome = _asyncToGenerator(_regenerator().m(function _callee15(maxProcessingTime) {
                                var _this15 = this;
                                var platform, startTime, prefetchLimit, pending, isDead, fillPrefetch, next, _i3, _pending, texture, _t7;
                                return _regenerator().w(function(_context15) {
                                    while (1) switch (_context15.p = _context15.n) {
                                      case 0:
                                        if (!(this.initialized === false)) {
                                            _context15.n = 1;
                                            break;
                                        }
                                        return _context15.a(2);

                                      case 1:
                                        platform = this.platform;
                                        startTime = platform.getTimeStamp();
                                        prefetchLimit = Math.max(1, this.numImageWorkers);
                                        pending = [];
                                        isDead = function isDead(texture) {
                                            return texture.state === "failed" || texture.state === "freed";
                                        };
                                        fillPrefetch = function fillPrefetch() {
                                            while (pending.length < prefetchLimit) {
                                                var texture = _this15.uploadTextureQueue.shift();
                                                if (texture === undefined) break;
                                                if (isDead(texture)) {
                                                    continue;
                                                }
                                                var data = texture.textureData === null ? texture.getTextureData().catch(function(err) {
                                                    console.error("Failed to fetch texture data:", err);
                                                    return null;
                                                }) : Promise.resolve(texture.textureData);
                                                pending.push({
                                                    texture: texture,
                                                    data: data
                                                });
                                            }
                                        };
                                        fillPrefetch();

                                      case 2:
                                        if (!(pending.length > 0 && platform.getTimeStamp() - startTime < maxProcessingTime)) {
                                            _context15.n = 9;
                                            break;
                                        }
                                        next = pending.shift();
                                        fillPrefetch();
                                        if (!isDead(next.texture)) {
                                            _context15.n = 3;
                                            break;
                                        }
                                        return _context15.a(3, 2);

                                      case 3:
                                        _context15.p = 3;
                                        _context15.n = 4;
                                        return next.data;

                                      case 4:
                                        if (!isDead(next.texture)) {
                                            _context15.n = 5;
                                            break;
                                        }
                                        return _context15.a(3, 2);

                                      case 5:
                                        _context15.n = 6;
                                        return this.uploadTexture(next.texture);

                                      case 6:
                                        _context15.n = 8;
                                        break;

                                      case 7:
                                        _context15.p = 7;
                                        _t7 = _context15.v;
                                        console.error("Failed to upload texture:", _t7);

                                      case 8:
                                        _context15.n = 2;
                                        break;

                                      case 9:
                                        for (_i3 = 0, _pending = pending; _i3 < _pending.length; _i3++) {
                                            texture = _pending[_i3].texture;
                                            if (!isDead(texture)) {
                                                this.uploadTextureQueue.add(texture);
                                            }
                                        }

                                      case 10:
                                        return _context15.a(2);
                                    }
                                }, _callee15, this, [ [ 3, 7 ] ]);
                            }));
                            function processSome(_x26) {
                                return _processSome.apply(this, arguments);
                            }
                            return processSome;
                        }()
                    }, {
                        key: "hasUpdates",
                        value: function hasUpdates() {
                            return this.uploadTextureQueue.size > 0;
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
                            if (!(texture !== null && texture !== void 0 && texture.props)) {
                                return texture;
                            }
                            var cacheKey = ImageTexture.makeCacheKey(texture.props);
                            var cachedTexture = cacheKey ? this.getTextureFromCache(cacheKey) : undefined;
                            return cachedTexture !== null && cachedTexture !== void 0 ? cachedTexture : texture;
                        }
                    } ]);
                }(EventEmitter);
                function isAdvancedShaderProp(obj) {
                    return obj !== null && _typeof(obj) === "object" && obj.default !== undefined;
                }
                function resolveShaderProps(props, propsConfig) {
                    for (var key in propsConfig) {
                        if (!isAdvancedShaderProp(propsConfig[key]) && props[key] === undefined) {
                            props[key] = propsConfig[key];
                            continue;
                        }
                        var pConfig = propsConfig[key];
                        var hasValue = props[key] !== undefined;
                        if (pConfig.resolve !== undefined) {
                            props[key] = pConfig.resolve(props[key], props);
                            continue;
                        }
                        if (hasValue && pConfig.set !== undefined) {
                            pConfig.set(props[key], props);
                            continue;
                        }
                        if (hasValue) {
                            continue;
                        }
                        if (props[key] === undefined && pConfig.get === undefined) {
                            props[key] = deepClone(pConfig.default);
                            continue;
                        }
                        props[key] = pConfig.get(props);
                    }
                }
                var CoreShaderNode = function() {
                    function CoreShaderNode(shaderKey, type, stage, props) {
                        _classCallCheck(this, CoreShaderNode);
                        _defineProperty(this, "shaderKey", void 0);
                        _defineProperty(this, "stage", void 0);
                        _defineProperty(this, "shaderType", void 0);
                        _defineProperty(this, "propsConfig", void 0);
                        _defineProperty(this, "resolvedProps", undefined);
                        _defineProperty(this, "definedProps", undefined);
                        _defineProperty(this, "node", null);
                        _defineProperty(this, "time", undefined);
                        _defineProperty(this, "update", undefined);
                        _defineProperty(this, "valueKey", "");
                        _defineProperty(this, "_valueKeyCache", "");
                        _defineProperty(this, "_valueKeyDirty", true);
                        _defineProperty(this, "_lastW", 0);
                        _defineProperty(this, "_lastH", 0);
                        this.shaderKey = shaderKey;
                        this.stage = stage;
                        this.shaderType = type;
                        this.time = type.time;
                        if (props !== undefined) {
                            this.resolvedProps = props;
                            this.defineProps(props);
                        }
                    }
                    return _createClass(CoreShaderNode, [ {
                        key: "defineProps",
                        value: function defineProps(props) {
                            var _this16 = this;
                            var definedProps = {};
                            var _loop = function _loop(key) {
                                var propConfig = _this16.shaderType.props[key];
                                var isAdvancedProp = isAdvancedShaderProp(propConfig);
                                Object.defineProperty(definedProps, key, {
                                    get: function get() {
                                        return _this16.resolvedProps[key];
                                    },
                                    set: function set(value) {
                                        if (isAdvancedProp === true && propConfig.resolve !== undefined) {
                                            _this16.resolvedProps[key] = propConfig.resolve(value, _this16.resolvedProps);
                                        } else if (isAdvancedProp === true && propConfig.set !== undefined) {
                                            propConfig.set(value, _this16.resolvedProps);
                                        } else {
                                            _this16.resolvedProps[key] = value;
                                        }
                                        _this16._valueKeyDirty = true;
                                        if (_this16.update !== undefined && _this16.node !== null) {
                                            _this16.node.setUpdateType(UpdateType.RecalcUniforms);
                                        } else {
                                            _this16.stage.requestRender();
                                        }
                                    }
                                });
                            };
                            for (var key in props) {
                                _loop(key);
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
                            if (this._valueKeyDirty === false && this.node !== null && this.node.w === this._lastW && this.node.h === this._lastH) {
                                return this._valueKeyCache;
                            }
                            var valueKey = "";
                            for (var key in this.resolvedProps) {
                                valueKey += "".concat(key, ":").concat(this.resolvedProps[key], ";");
                            }
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
                            if (props === undefined) {
                                return;
                            }
                            for (var key in props) {
                                this.props[key] = props[key];
                            }
                        }
                    } ]);
                }();
                var CoreShaderManager = function() {
                    function CoreShaderManager(stage) {
                        _classCallCheck(this, CoreShaderManager);
                        _defineProperty(this, "stage", void 0);
                        _defineProperty(this, "shTypes", {});
                        _defineProperty(this, "shCache", new Map);
                        _defineProperty(this, "valuesCache", new Map);
                        _defineProperty(this, "valuesCacheUsage", new Map);
                        _defineProperty(this, "attachedShader", null);
                        this.stage = stage;
                    }
                    return _createClass(CoreShaderManager, [ {
                        key: "registerShaderType",
                        value: function registerShaderType(name, shType) {
                            if (this.shTypes[name] !== undefined) {
                                console.warn("ShaderType already exists with the name: ".concat(name, ". Breaking off registration."));
                                return;
                            }
                            if (this.stage.renderer.supportsShaderType(shType) === false) {
                                console.warn("The renderer being used does not support this shader type. Breaking off registration.");
                                return;
                            }
                            this.shTypes[name] = deepClone(shType);
                        }
                    }, {
                        key: "createShader",
                        value: function createShader(name, props) {
                            var shType = this.shTypes[name];
                            if (shType === undefined) {
                                console.warn("ShaderType not found falling back on renderer default shader");
                                return this.stage.defShaderNode;
                            }
                            var shaderKey = name;
                            if (shType.props !== undefined) {
                                props = props || {};
                                resolveShaderProps(props, shType.props);
                                if (shType.getCacheMarkers !== undefined) {
                                    shaderKey += "-".concat(shType.getCacheMarkers(props));
                                }
                            }
                            if (this.stage.renderer.mode === "canvas") {
                                return this.stage.renderer.createShaderNode(shaderKey, shType, props);
                            }
                            var shProgram = this.shCache.get(shaderKey);
                            if (shProgram === undefined) {
                                shProgram = this.stage.renderer.createShaderProgram(shType, props);
                                this.shCache.set(shaderKey, shProgram);
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
                            if (values === undefined) {
                                return undefined;
                            }
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
                                if (entryA[1] < entryB[1]) {
                                    return -1;
                                } else if (entryA[1] > entryB[1]) {
                                    return 1;
                                }
                                return 0;
                            });
                            for (var i = 0; i < values.length; i++) {
                                if (values[i][1] > 0) {
                                    break;
                                }
                                this.valuesCacheUsage.delete(values[i][0]);
                                this.valuesCache.delete(values[i][0]);
                            }
                        }
                    }, {
                        key: "useShader",
                        value: function useShader(shader) {
                            if (this.attachedShader === shader) {
                                return;
                            }
                            if (this.attachedShader && this.attachedShader.detach) {
                                this.attachedShader.detach();
                            }
                            if (shader.attach) {
                                shader.attach();
                            }
                            this.attachedShader = shader;
                        }
                    } ]);
                }();
                var spaceRegex = /[ \u200B]+/g;
                var defaultFontMetrics = {
                    ascender: 800,
                    descender: -200,
                    lineGap: 200,
                    unitsPerEm: 1e3
                };
                var CAP_HEIGHT_FALLBACK_RATIO = .7;
                var X_HEIGHT_FALLBACK_RATIO = .5;
                var normalizeFontMetrics = function normalizeFontMetrics(metrics, fontSize) {
                    var scale = fontSize / metrics.unitsPerEm;
                    var capHeightUnits = metrics.capHeight !== undefined ? metrics.capHeight : metrics.ascender * CAP_HEIGHT_FALLBACK_RATIO;
                    var xHeightUnits = metrics.xHeight !== undefined ? metrics.xHeight : metrics.ascender * X_HEIGHT_FALLBACK_RATIO;
                    return {
                        ascender: metrics.ascender * scale,
                        descender: metrics.descender * scale,
                        lineGap: metrics.lineGap * scale,
                        capHeight: capHeightUnits * scale,
                        xHeight: xHeightUnits * scale
                    };
                };
                var baselineMode = "optical";
                var setBaselineMode = function setBaselineMode(mode) {
                    baselineMode = mode;
                };
                var mapTextLayout = function mapTextLayout(measureText, metrics, text, textAlign, fontFamily, lineHeight, overflowSuffix, wordBreak, letterSpacing, maxLines, maxWidth, maxHeight) {
                    var bareLineHeight = metrics.ascender - metrics.descender + metrics.lineGap;
                    var lineHeightPx = lineHeight <= 3 ? lineHeight * bareLineHeight : lineHeight;
                    var effectiveMaxLines = maxLines;
                    if (maxHeight > 0) {
                        var maxFromHeight = Math.floor(maxHeight / lineHeightPx);
                        if (maxFromHeight < 1) {
                            maxFromHeight = 1;
                        }
                        if (effectiveMaxLines === 0 || maxFromHeight < effectiveMaxLines) {
                            effectiveMaxLines = maxFromHeight;
                        }
                    }
                    var wrappedText = maxWidth > 0;
                    var _ref8 = wrappedText === true ? wrapText(measureText, text, fontFamily, maxWidth, letterSpacing, overflowSuffix, wordBreak, effectiveMaxLines) : measureLines(measureText, text.split("\n"), fontFamily, letterSpacing, effectiveMaxLines), _ref9 = _slicedToArray(_ref8, 3), lines = _ref9[0], remainingLines = _ref9[1], remainingText = _ref9[2];
                    var effectiveLineAmount = lines.length;
                    var effectiveMaxWidth = 0;
                    if (letterSpacing !== 0) {
                        for (var i = 0; i < effectiveLineAmount; i++) {
                            var line = lines[i];
                            if (line[0].length > 0) {
                                line[1] -= letterSpacing;
                            }
                        }
                    }
                    if (effectiveLineAmount > 0) {
                        effectiveMaxWidth = lines[0][1];
                        if (effectiveLineAmount > 1) {
                            for (var _i4 = 1; _i4 < effectiveLineAmount; _i4++) {
                                effectiveMaxWidth = Math.max(effectiveMaxWidth, lines[_i4][1]);
                            }
                        }
                    }
                    if (textAlign !== "left") {
                        for (var _i5 = 0; _i5 < effectiveLineAmount; _i5++) {
                            var _line = lines[_i5];
                            var w = _line[1];
                            _line[3] = textAlign === "right" ? effectiveMaxWidth - w : (effectiveMaxWidth - w) / 2;
                        }
                    }
                    var effectiveMaxHeight = effectiveLineAmount * lineHeightPx;
                    var firstBaselineY;
                    if (baselineMode === "cap") {
                        firstBaselineY = (lineHeightPx + metrics.capHeight) * .5;
                    } else if (baselineMode === "x") {
                        firstBaselineY = (lineHeightPx + metrics.xHeight) * .5;
                    } else if (baselineMode === "linebox") {
                        var halfLeading = (lineHeightPx - bareLineHeight) * .5;
                        firstBaselineY = halfLeading + metrics.ascender;
                    } else {
                        var opticalAnchor = (metrics.capHeight + metrics.xHeight) * .5;
                        firstBaselineY = (lineHeightPx + opticalAnchor) * .5;
                    }
                    for (var _i6 = 0; _i6 < effectiveLineAmount; _i6++) {
                        var _line2 = lines[_i6];
                        _line2[4] = firstBaselineY + lineHeightPx * _i6;
                    }
                    return [ lines, remainingLines, remainingText, bareLineHeight, lineHeightPx, effectiveMaxWidth, effectiveMaxHeight ];
                };
                var measureLines = function measureLines(measureText, lines, fontFamily, letterSpacing, maxLines) {
                    var measuredLines = [];
                    var remainingLines = maxLines > 0 ? maxLines : lines.length;
                    var i = 0;
                    while (remainingLines > 0) {
                        var line = lines[i];
                        i++;
                        remainingLines--;
                        if (line === undefined) {
                            continue;
                        }
                        var width = measureText(line, fontFamily, letterSpacing);
                        measuredLines.push([ line, width, false, 0, 0 ]);
                    }
                    return [ measuredLines, remainingLines, maxLines > 0 ? lines.length - measuredLines.length > 0 : false ];
                };
                var wrapText = function wrapText(measureText, text, fontFamily, maxWidth, letterSpacing, overflowSuffix, wordBreak, maxLines) {
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
                        if (line === undefined) {
                            continue;
                        }
                        var _ref0 = line.length > 0 ? wrapLine(measureText, line, fontFamily, maxWidth, letterSpacing, spaceWidth, overflowSuffix, overflowWidth, wordBreak, remainingLines) : [ [ [ "", 0, false, 0, 0 ] ], remainingLines, i < lines.length - 1 ];
                        var _ref1 = _slicedToArray(_ref0, 3);
                        wrappedLine = _ref1[0];
                        remainingLines = _ref1[1];
                        hasRemainingText = _ref1[2];
                        remainingLines--;
                        for (var j = 0; j < wrappedLine.length; j++) {
                            wrappedLines.push(wrappedLine[j]);
                        }
                        if (hasMaxLines === true && remainingLines <= 0) {
                            var lastLine = wrappedLines[wrappedLines.length - 1];
                            if (i < lines.length - 1) {
                                if (lastLine[2] === false) {
                                    var remainingText = "";
                                    var _truncateLineEnd = truncateLineEnd(measureText, fontFamily, letterSpacing, lastLine[0], lastLine[1], remainingText, maxWidth, overflowSuffix, overflowWidth), _truncateLineEnd2 = _slicedToArray(_truncateLineEnd, 2), _line3 = _truncateLineEnd2[0], lineWidth = _truncateLineEnd2[1];
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
                var wrapLine = function wrapLine(measureText, line, fontFamily, maxWidth, letterSpacing, spaceWidth, overflowSuffix, overflowWidth, wordBreak, remainingLines) {
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
                        } else {
                            word = words[wordIdx++];
                        }
                        wordWidth = measureText(word, fontFamily, letterSpacing);
                        if (currentLineWidth === 0) {
                            if (wordWidth > maxWidth) {
                                remainingLines--;
                                var isLastLine = remainingLines === 0;
                                var lineTruncated = isLastLine;
                                var _ref10 = isLastLine ? truncateWord(measureText, word, wordWidth, maxWidth, fontFamily, letterSpacing, overflowSuffix, overflowWidth) : splitWord(measureText, word, wordWidth, maxWidth, fontFamily, letterSpacing);
                                var _ref11 = _slicedToArray(_ref10, 3);
                                word = _ref11[0];
                                remainingWord = _ref11[1];
                                wordWidth = _ref11[2];
                                if (remainingWord.length > 0) {
                                    if (word.length === 0) {
                                        if (overflowSuffix.length > 0) {
                                            word = overflowSuffix;
                                            wordWidth = overflowWidth;
                                        } else {
                                            word = remainingWord.charAt(0);
                                            if (word.length === 0) {
                                                break;
                                            }
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
                        if (remainingWord.length > 0) {
                            pendingWord = remainingWord;
                        }
                    }
                    if (currentLineWidth > 0 && remainingLines > 0) {
                        wrappedLines.push([ currentLine, currentLineWidth, false, 0, 0 ]);
                    }
                    return [ wrappedLines, remainingLines, hasRemainingText ];
                };
                var getWrapStrategy = function getWrapStrategy(wordBreak) {
                    if (wordBreak === "break-word") {
                        return breakWord;
                    }
                    if (wordBreak === "break-all") {
                        return breakAll;
                    }
                    if (wordBreak === "overflow") {
                        return overflow;
                    }
                    return breakWord;
                };
                var overflow = function overflow(measureText, word, wordWidth, fontFamily, letterSpacing, wrappedLines, currentLine, currentLineWidth, remainingLines, remainingWord, maxWidth, space, spaceWidth, overflowSuffix, overflowWidth) {
                    currentLine += space + word;
                    currentLineWidth += spaceWidth + wordWidth;
                    if (remainingLines === 0) {
                        currentLine += overflowSuffix;
                        currentLineWidth += overflowWidth;
                    }
                    wrappedLines.push([ currentLine, currentLineWidth, true, 0, 0 ]);
                    return [ "", 0, "" ];
                };
                var breakWord = function breakWord(measureText, word, wordWidth, fontFamily, letterSpacing, wrappedLines, currentLine, currentLineWidth, remainingLines, remainingWord, maxWidth, space, spaceWidth, overflowSuffix, overflowWidth) {
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
                var breakAll = function breakAll(measureText, word, wordWidth, fontFamily, letterSpacing, wrappedLines, currentLine, currentLineWidth, remainingLines, remainingWord, maxWidth, space, spaceWidth, overflowSuffix, overflowWidth) {
                    var remainingSpace = maxWidth - currentLineWidth;
                    if (currentLineWidth > 0) {
                        remainingSpace -= spaceWidth;
                    }
                    var truncate = remainingLines === 0;
                    var _ref12 = truncate ? truncateWord(measureText, word, wordWidth, remainingSpace, fontFamily, letterSpacing, overflowSuffix, overflowWidth) : splitWord(measureText, word, wordWidth, remainingSpace, fontFamily, letterSpacing);
                    var _ref13 = _slicedToArray(_ref12, 3);
                    word = _ref13[0];
                    remainingWord = _ref13[1];
                    wordWidth = _ref13[2];
                    currentLine += space + word;
                    currentLineWidth += spaceWidth + wordWidth;
                    wrappedLines.push([ currentLine, currentLineWidth, truncate, 0, 0 ]);
                    currentLine = "";
                    currentLineWidth = 0;
                    return [ currentLine, currentLineWidth, remainingWord ];
                };
                var truncateLineEnd = function truncateLineEnd(measureText, fontFamily, letterSpacing, currentLine, currentLineWidth, remainingWord, maxWidth, overflowSuffix, overflowWidth) {
                    if (currentLineWidth + overflowWidth <= maxWidth) {
                        currentLine += overflowSuffix;
                        currentLineWidth += overflowWidth;
                        remainingWord = "";
                        return [ currentLine, currentLineWidth, remainingWord ];
                    }
                    var truncated = false;
                    for (var i = currentLine.length - 1; i > 0; i--) {
                        var char = currentLine.charAt(i);
                        var charWidth = measureText(char, fontFamily, letterSpacing);
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
                var truncateWord = function truncateWord(measureText, word, wordWidth, maxWidth, fontFamily, letterSpacing, overflowSuffix, overflowWidth) {
                    var targetWidth = maxWidth - overflowWidth;
                    if (targetWidth <= 0) {
                        return [ "", word, 0 ];
                    }
                    var excessWidth = wordWidth - targetWidth;
                    var shouldStartFromBack = excessWidth < wordWidth / 2;
                    if (shouldStartFromBack === false) {
                        var _currentWidth = wordWidth;
                        for (var i = word.length - 1; i > 0; i--) {
                            var char = word.charAt(i);
                            var charWidth = measureText(char, fontFamily, letterSpacing);
                            _currentWidth -= charWidth;
                            if (_currentWidth <= targetWidth) {
                                var remainingWord = word.substring(i);
                                return [ word.substring(0, i) + overflowSuffix, remainingWord, _currentWidth + overflowWidth ];
                            }
                        }
                        return [ overflowSuffix, word, overflowWidth ];
                    }
                    var currentWidth = 0;
                    for (var _i7 = 0; _i7 < word.length; _i7++) {
                        var _char = word.charAt(_i7);
                        var _charWidth = measureText(_char, fontFamily, letterSpacing);
                        if (currentWidth + _charWidth > targetWidth) {
                            var _remainingWord = word.substring(_i7);
                            return [ word.substring(0, _i7) + overflowSuffix, _remainingWord, currentWidth + overflowWidth ];
                        }
                        currentWidth += _charWidth;
                    }
                    return [ word + overflowSuffix, "", wordWidth + overflowWidth ];
                };
                var splitWord = function splitWord(measureText, word, wordWidth, maxWidth, fontFamily, letterSpacing) {
                    if (maxWidth <= 0) {
                        return [ "", word, 0 ];
                    }
                    var excessWidth = wordWidth - maxWidth;
                    var shouldStartFromBack = excessWidth < wordWidth / 2;
                    if (shouldStartFromBack === false) {
                        var _currentWidth2 = wordWidth;
                        for (var i = word.length - 1; i > 0; i--) {
                            var char = word.charAt(i);
                            var charWidth = measureText(char, fontFamily, letterSpacing);
                            _currentWidth2 -= charWidth;
                            if (_currentWidth2 <= maxWidth) {
                                var remainingWord = word.substring(i);
                                return [ word.substring(0, i), remainingWord, _currentWidth2 ];
                            }
                        }
                        return [ "", word, 0 ];
                    }
                    var currentWidth = 0;
                    for (var _i8 = 0; _i8 < word.length; _i8++) {
                        var _char2 = word.charAt(_i8);
                        var _charWidth2 = measureText(_char2, fontFamily, letterSpacing);
                        if (currentWidth + _charWidth2 > maxWidth) {
                            var _remainingWord2 = word.substring(_i8);
                            return [ word.substring(0, _i8), _remainingWord2, currentWidth ];
                        }
                        currentWidth += _charWidth2;
                    }
                    return [ word, "", wordWidth ];
                };
                var ContextSpy = function() {
                    function ContextSpy() {
                        _classCallCheck(this, ContextSpy);
                        _defineProperty(this, "data", {});
                    }
                    return _createClass(ContextSpy, [ {
                        key: "reset",
                        value: function reset() {
                            this.data = {};
                        }
                    }, {
                        key: "increment",
                        value: function increment(name) {
                            if (!this.data[name]) {
                                this.data[name] = 0;
                            }
                            this.data[name]++;
                        }
                    }, {
                        key: "getData",
                        value: function getData() {
                            return _objectSpread({}, this.data);
                        }
                    } ]);
                }();
                var TextureMemoryManager = function() {
                    function TextureMemoryManager(stage, settings) {
                        _classCallCheck(this, TextureMemoryManager);
                        _defineProperty(this, "stage", void 0);
                        _defineProperty(this, "memUsed", 0);
                        _defineProperty(this, "loadedTextures", new Set);
                        _defineProperty(this, "criticalThreshold", 124e6);
                        _defineProperty(this, "targetThreshold", .5);
                        _defineProperty(this, "cleanupInterval", 5e3);
                        _defineProperty(this, "debugLogging", false);
                        _defineProperty(this, "loggingID", 0);
                        _defineProperty(this, "lastCleanupTime", 0);
                        _defineProperty(this, "baselineMemoryAllocation", 26e6);
                        _defineProperty(this, "hasWarnedAboveCritical", false);
                        _defineProperty(this, "criticalCleanupRequested", false);
                        _defineProperty(this, "doNotExceedCriticalThreshold", false);
                        _defineProperty(this, "frameTime", 0);
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
                            if (this.criticalThreshold > 0 && this.memUsed > this.criticalThreshold) {
                                this.criticalCleanupRequested = true;
                            }
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
                        key: "destroyTexture",
                        value: function destroyTexture(texture) {
                            if (this.debugLogging === true) {
                                console.log("[TextureMemoryManager] Destroying texture. State: ".concat(texture.state));
                            }
                            this.loadedTextures.delete(texture);
                            var txManager = this.stage.txManager;
                            txManager.removeTextureFromCache(texture);
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
                            if (critical === true) {
                                this.stage.queueFrameEvent("criticalCleanup", {
                                    memUsed: this.memUsed,
                                    criticalThreshold: this.criticalThreshold
                                });
                            }
                            if (this.debugLogging === true) {
                                console.log("[TextureMemoryManager] Cleaning up textures. Critical: ".concat(critical, ". Full: ").concat(full));
                            }
                            var memTarget = critical ? this.criticalThreshold : this.targetThreshold;
                            var currentMemUsed = this.memUsed;
                            var _iterator8 = _createForOfIteratorHelper(this.loadedTextures), _step8;
                            try {
                                for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
                                    var texture = _step8.value;
                                    if (full === false && currentMemUsed < memTarget) {
                                        break;
                                    }
                                    var isCleanableType = texture.type === TextureType.image || texture.type === TextureType.noise || texture.type === TextureType.renderToTexture;
                                    if (isCleanableType && texture.canBeCleanedUp() === true) {
                                        var textureMemory = texture.memUsed;
                                        this.destroyTexture(texture);
                                        currentMemUsed -= textureMemory;
                                    }
                                }
                            } catch (err) {
                                _iterator8.e(err);
                            } finally {
                                _iterator8.f();
                            }
                            if (this.memUsed >= this.criticalThreshold) {
                                this.stage.queueFrameEvent("criticalCleanupFailed", {
                                    memUsed: this.memUsed,
                                    criticalThreshold: this.criticalThreshold
                                });
                                if (!this.hasWarnedAboveCritical && (this.debugLogging === true || isProductionEnvironment === false)) {
                                    console.warn("[TextureMemoryManager] Memory usage above critical threshold after cleanup: ".concat(this.memUsed));
                                    this.hasWarnedAboveCritical = true;
                                }
                            } else {
                                this.criticalCleanupRequested = false;
                                this.hasWarnedAboveCritical = false;
                            }
                        }
                    }, {
                        key: "getMemoryInfo",
                        value: function getMemoryInfo() {
                            var renderableTexturesLoaded = 0;
                            var renderableMemUsed = this.baselineMemoryAllocation;
                            var _iterator9 = _createForOfIteratorHelper(this.loadedTextures), _step9;
                            try {
                                for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
                                    var texture = _step9.value;
                                    if (texture && texture.renderable) {
                                        renderableTexturesLoaded += 1;
                                        renderableMemUsed += texture.memUsed;
                                    }
                                }
                            } catch (err) {
                                _iterator9.e(err);
                            } finally {
                                _iterator9.f();
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
                            var _this17 = this;
                            var criticalThreshold = settings.criticalThreshold, doNotExceedCriticalThreshold = settings.doNotExceedCriticalThreshold;
                            this.doNotExceedCriticalThreshold = doNotExceedCriticalThreshold || false;
                            this.criticalThreshold = Math.round(criticalThreshold);
                            if (this.memUsed === 0) {
                                this.memUsed = Math.round(settings.baselineMemoryAllocation);
                            } else {
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
                                    if (lastMemUse !== _this17.memUsed) {
                                        lastMemUse = _this17.memUsed;
                                        console.log("[TextureMemoryManager] Memory used: ".concat(bytesToMb(_this17.memUsed), " mb / ").concat(bytesToMb(_this17.criticalThreshold), " mb (").concat((_this17.memUsed / _this17.criticalThreshold * 100).toFixed(1), "%)"));
                                    }
                                }, 1e3);
                            }
                            if (criticalThreshold === 0) {
                                this.setTextureMemUse = function() {};
                            }
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
                var CoreContextTexture = function() {
                    function CoreContextTexture(memManager, textureSource) {
                        _classCallCheck(this, CoreContextTexture);
                        _defineProperty(this, "textureSource", void 0);
                        _defineProperty(this, "memManager", void 0);
                        _defineProperty(this, "state", "freed");
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
                var CoreRenderer = _createClass(function CoreRenderer(options) {
                    _classCallCheck(this, CoreRenderer);
                    _defineProperty(this, "options", void 0);
                    _defineProperty(this, "mode", void 0);
                    _defineProperty(this, "defaultTextureCoords", undefined);
                    _defineProperty(this, "stage", void 0);
                    _defineProperty(this, "rttNodes", []);
                    this.options = options;
                    this.stage = options.stage;
                });
                var TextConstraint;
                (function(TextConstraint) {
                    TextConstraint[TextConstraint["none"] = 0] = "none";
                    TextConstraint[TextConstraint["width"] = 1] = "width";
                    TextConstraint[TextConstraint["height"] = 2] = "height";
                    TextConstraint[TextConstraint["both"] = 3] = "both";
                })(TextConstraint || (TextConstraint = {}));
                var CoreTextNode = function(_CoreNode2) {
                    function CoreTextNode(stage, props, textRenderer) {
                        var _this18;
                        _classCallCheck(this, CoreTextNode);
                        _this18 = _callSuper(this, CoreTextNode, [ stage, props ]);
                        _defineProperty(_this18, "textRenderer", void 0);
                        _defineProperty(_this18, "fontHandler", void 0);
                        _defineProperty(_this18, "_layoutGenerated", false);
                        _defineProperty(_this18, "_waitingForFont", false);
                        _defineProperty(_this18, "_containType", TextConstraint.none);
                        _defineProperty(_this18, "_cachedLayout", null);
                        _defineProperty(_this18, "_sdfCache", {
                            vertices: null,
                            glyphCount: 0,
                            color: 0,
                            alpha: -1,
                            transform: new Float32Array(6),
                            layoutRef: null
                        });
                        _defineProperty(_this18, "textProps", void 0);
                        _defineProperty(_this18, "_renderInfo", {
                            width: 0,
                            height: 0
                        });
                        _defineProperty(_this18, "_type", "sdf");
                        _defineProperty(_this18, "onTextureLoaded", function(_, dimensions) {
                            if (_this18.parentHasRenderTexture) {
                                _this18.notifyParentRTTOfUpdate();
                            }
                            if (dimensions.w > 1 && dimensions.h > 1) {
                                _this18.emit("loaded", {
                                    type: "texture",
                                    dimensions: dimensions
                                });
                            }
                            _this18.textureLoaded = true;
                            _this18.setUpdateType(UpdateType.IsRenderable);
                        });
                        _defineProperty(_this18, "emitTextLoadedEvent", function() {
                            _this18.emit("loaded", {
                                type: "text",
                                dimensions: {
                                    w: _this18._renderInfo.width,
                                    h: _this18._renderInfo.height
                                }
                            });
                        });
                        _this18.textRenderer = textRenderer;
                        _this18.fontHandler = textRenderer.font;
                        _this18._type = textRenderer.type;
                        _this18.textProps = props;
                        _this18._containType = TextConstraint[props.contain];
                        _this18.setUpdateType(UpdateType.All);
                        return _this18;
                    }
                    _inherits(CoreTextNode, _CoreNode2);
                    return _createClass(CoreTextNode, [ {
                        key: "allowTextGeneration",
                        value: function allowTextGeneration() {
                            var p = this.props.parent;
                            if (p === null) {
                                return false;
                            }
                            if (p.worldAlpha > 0 && p.renderState > CoreNodeRenderState.OutOfBounds) {
                                return true;
                            }
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
                            var tProps = this.textProps;
                            var textAlign = tProps.textAlign, verticalAlign = tProps.verticalAlign, maxWidth = tProps.maxWidth, maxHeight = tProps.maxHeight;
                            var contain = this._containType;
                            var hasMaxWidth = maxWidth > 0;
                            var hasMaxHeight = maxHeight > 0;
                            var containX = 0;
                            var containY = 0;
                            if (contain > 0 && (hasMaxWidth || hasMaxHeight)) {
                                if (contain & TextConstraint.width && hasMaxWidth === true) {
                                    if (textAlign === "right") {
                                        containX = maxWidth - w;
                                    } else if (textAlign === "center") {
                                        containX = (maxWidth - w) * .5;
                                    }
                                    mountTranslateX = mountX * maxWidth;
                                }
                                if (contain & TextConstraint.height && hasMaxHeight === true) {
                                    mountTranslateY = mountY * maxHeight;
                                }
                            }
                            var intrinsicH = this._renderInfo.height;
                            var boxH = hasMaxHeight === true ? maxHeight : h;
                            var slackY = boxH - intrinsicH;
                            if (slackY > 0) {
                                if (verticalAlign === "bottom") {
                                    containY = slackY;
                                } else if (verticalAlign === "middle") {
                                    containY = slackY * .5;
                                }
                            }
                            if (p.rotation !== 0 || p.scaleX !== 1 || p.scaleY !== 1) {
                                var scaleRotate = Matrix3d.rotate(p.rotation, Matrix3d.temp).scale(p.scaleX, p.scaleY);
                                var pivotW = contain & TextConstraint.width && maxWidth > 0 ? maxWidth : w;
                                var pivotH = contain & TextConstraint.height && maxHeight > 0 ? maxHeight : h;
                                var pivotTranslateX = p.pivotX * pivotW;
                                var pivotTranslateY = p.pivotY * pivotH;
                                this.localTransform = Matrix3d.translate(x - mountTranslateX + pivotTranslateX, y - mountTranslateY + pivotTranslateY, this.localTransform).multiply(scaleRotate).translate(-pivotTranslateX, -pivotTranslateY);
                            } else {
                                this.localTransform = Matrix3d.translate(x - mountTranslateX, y - mountTranslateY, this.localTransform);
                            }
                            if (containX !== 0 || containY !== 0) {
                                this.localTransform.translate(containX, containY);
                            }
                        }
                    }, {
                        key: "update",
                        value: function update(delta, parentClippingRect) {
                            if ((this.textProps.forceLoad === true || this.allowTextGeneration() === true) && this._layoutGenerated === false) {
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
                            this.setRenderable(this.checkBasicRenderability() === true && this._cachedLayout !== null);
                        }
                    }, {
                        key: "handleRenderResult",
                        value: function handleRenderResult(result) {
                            var textRendererType = this._type;
                            var width = result.width;
                            var height = result.height;
                            if (textRendererType === "canvas") {
                                if (result.imageData === undefined) {
                                    this.texture = null;
                                    this.setRenderable(false);
                                } else {
                                    this.texture = this.stage.txManager.createTexture("ImageTexture", {
                                        premultiplyAlpha: true,
                                        src: result.imageData
                                    });
                                    this.setRenderable(false);
                                    if (this.renderState > CoreNodeRenderState.OutOfBounds) {
                                        this.texture.setRenderableOwner(this._id, true);
                                    }
                                }
                            }
                            this._cachedLayout = result.layout || null;
                            this.props.w = width;
                            this.props.h = height;
                            this.setUpdateType(UpdateType.Local | UpdateType.RenderBounds);
                            if (textRendererType === "sdf") {
                                this.setRenderable(true);
                            }
                            this._renderInfo = result;
                            this.emitTextLoadedEvent();
                        }
                    }, {
                        key: "renderQuads",
                        value: function renderQuads(renderer) {
                            if (this.parentHasRenderTexture === true) {
                                var rtt = renderer.renderToTextureActive;
                                if (rtt === false || this.parentRenderTexture !== renderer.activeRttNode) return;
                            }
                            if (this._type === "canvas") {
                                var white = premultiplyColorABGR(4294967295, this.worldAlpha);
                                this.premultipliedColorTl = this.premultipliedColorTr = this.premultipliedColorBl = this.premultipliedColorBr = white;
                                _superPropGet(CoreTextNode, "renderQuads", this, 3)([ renderer ]);
                                return;
                            }
                            if (!this._cachedLayout) {
                                return;
                            }
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
                                framebufferDimensions: this.parentHasRenderTexture === true ? this.parentFramebufferDimensions : null,
                                stage: this.stage,
                                sdfCache: this._sdfCache
                            });
                        }
                    }, {
                        key: "destroy",
                        value: function destroy() {
                            var isChild = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                            if (this._waitingForFont === true && this.fontHandler) {
                                this.fontHandler.stopWaitingForFont(this.textProps.fontFamily, this);
                            }
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
                                if (this._waitingForFont === true) {
                                    this.fontHandler.stopWaitingForFont(this.textProps.fontFamily, this);
                                }
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
                var Stage = function() {
                    function Stage(options) {
                        var _this19 = this, _fontEngines$;
                        _classCallCheck(this, Stage);
                        _defineProperty(this, "options", void 0);
                        _defineProperty(this, "animationManager", void 0);
                        _defineProperty(this, "txManager", void 0);
                        _defineProperty(this, "txMemManager", void 0);
                        _defineProperty(this, "textRenderers", {});
                        _defineProperty(this, "fontHandlers", {});
                        _defineProperty(this, "shManager", void 0);
                        _defineProperty(this, "renderer", void 0);
                        _defineProperty(this, "root", void 0);
                        _defineProperty(this, "boundsMargin", void 0);
                        _defineProperty(this, "defShaderNode", null);
                        _defineProperty(this, "strictBound", void 0);
                        _defineProperty(this, "preloadBound", void 0);
                        _defineProperty(this, "defaultTexture", null);
                        _defineProperty(this, "pixelRatio", void 0);
                        _defineProperty(this, "bufferMemory", 2e6);
                        _defineProperty(this, "platform", void 0);
                        _defineProperty(this, "calculateTextureCoord", void 0);
                        _defineProperty(this, "targetFrameTime", 0);
                        _defineProperty(this, "eventBus", void 0);
                        _defineProperty(this, "isContextLost", false);
                        _defineProperty(this, "startTime", 0);
                        _defineProperty(this, "deltaTime", 0);
                        _defineProperty(this, "lastFrameTime", 0);
                        _defineProperty(this, "currentFrameTime", 0);
                        _defineProperty(this, "elapsedTime", 0);
                        _defineProperty(this, "timedNodes", []);
                        _defineProperty(this, "clrColor", 0);
                        _defineProperty(this, "fpsNumFrames", 0);
                        _defineProperty(this, "fpsElapsedTime", 0);
                        _defineProperty(this, "numQuadsRendered", 0);
                        _defineProperty(this, "numRenderOpsRendered", 0);
                        _defineProperty(this, "renderRequested", false);
                        _defineProperty(this, "reprocessFrame", false);
                        _defineProperty(this, "reprocessCallback", null);
                        _defineProperty(this, "frameEventQueue", []);
                        _defineProperty(this, "renderList", []);
                        _defineProperty(this, "renderListDirty", true);
                        _defineProperty(this, "hasOnlyOneFontEngine", void 0);
                        _defineProperty(this, "hasOnlyCanvasFontEngine", void 0);
                        _defineProperty(this, "hasCanvasEngine", void 0);
                        _defineProperty(this, "singleFontEngine", null);
                        _defineProperty(this, "singleFontHandler", null);
                        _defineProperty(this, "contextSpy", null);
                        this.options = options;
                        var canvas = options.canvas, clearColor = options.clearColor, appWidth = options.appWidth, appHeight = options.appHeight, boundsMargin = options.boundsMargin, enableContextSpy = options.enableContextSpy, numImageWorkers = options.numImageWorkers, textureMemory = options.textureMemory, renderEngine = options.renderEngine, fontEngines = options.fontEngines, createImageBitmapSupport = options.createImageBitmapSupport, premultiplyAlphaHonored = options.premultiplyAlphaHonored, platform = options.platform, maxRetryCount = options.maxRetryCount;
                        setBaselineMode(options.textBaselineMode);
                        this.platform = platform;
                        this.startTime = platform.getTimeStamp();
                        this.eventBus = options.eventBus;
                        this.targetFrameTime = options.targetFPS > 0 ? 1e3 / options.targetFPS : 0;
                        this.txManager = new CoreTextureManager(this, {
                            numImageWorkers: numImageWorkers,
                            createImageBitmapSupport: createImageBitmapSupport,
                            premultiplyAlphaHonored: premultiplyAlphaHonored !== null && premultiplyAlphaHonored !== void 0 ? premultiplyAlphaHonored : true,
                            maxRetryCount: maxRetryCount
                        });
                        this.txManager.on("initialized", function() {
                            _this19.requestRender();
                        });
                        this.txMemManager = new TextureMemoryManager(this, textureMemory);
                        this.animationManager = new AnimationManager;
                        this.contextSpy = enableContextSpy ? new ContextSpy : null;
                        var bm = [ 0, 0, 0, 0 ];
                        if (boundsMargin) {
                            bm = Array.isArray(boundsMargin) ? boundsMargin : [ boundsMargin, boundsMargin, boundsMargin, boundsMargin ];
                        }
                        this.boundsMargin = bm;
                        this.strictBound = createBound(0, 0, appWidth, appHeight);
                        this.preloadBound = createPreloadBounds(this.strictBound, bm);
                        this.clrColor = clearColor;
                        this.pixelRatio = options.devicePhysicalPixelRatio * options.deviceLogicalPixelRatio;
                        this.renderer = new renderEngine({
                            stage: this,
                            canvas: canvas,
                            contextSpy: this.contextSpy
                        });
                        this.shManager = new CoreShaderManager(this);
                        this.defShaderNode = this.renderer.getDefaultShaderNode();
                        this.calculateTextureCoord = this.renderer.getTextureCoords !== undefined;
                        var renderMode = this.renderer.mode || "webgl";
                        if (renderMode === "canvas") {
                            this.txMemManager.updateSettings(_objectSpread(_objectSpread({}, textureMemory), {}, {
                                criticalThreshold: 0,
                                doNotExceedCriticalThreshold: false
                            }));
                        }
                        this.createDefaultTexture();
                        setPremultiplyMode(renderMode);
                        this.txManager.renderer = this.renderer;
                        this.hasOnlyOneFontEngine = fontEngines.length === 1;
                        this.hasOnlyCanvasFontEngine = fontEngines.length === 1 && fontEngines[0].type === "canvas";
                        this.hasCanvasEngine = false;
                        this.singleFontEngine = this.hasOnlyOneFontEngine ? fontEngines[0] : null;
                        this.singleFontHandler = this.hasOnlyOneFontEngine ? (_fontEngines$ = fontEngines[0]) === null || _fontEngines$ === void 0 ? void 0 : _fontEngines$.font : null;
                        if (this.singleFontEngine === null) {
                            var compatibleEngines = fontEngines.filter(function(fontEngine) {
                                var type = fontEngine.type;
                                if (type === "sdf" && renderMode === "canvas") {
                                    console.warn("MsdfTextRenderer is not compatible with Canvas renderer. Skipping...");
                                    return false;
                                }
                                if (type === "canvas") {
                                    _this19.hasCanvasEngine = true;
                                }
                                return true;
                            });
                            var sortedEngines = compatibleEngines.sort(function(a, b) {
                                if (a.type === "sdf") return -1;
                                if (b.type === "sdf") return 1;
                                if (a.type === "canvas") return 1;
                                if (b.type === "canvas") return -1;
                                return 0;
                            });
                            sortedEngines.forEach(function(fontEngine) {
                                var type = fontEngine.type;
                                _this19.textRenderers[type] = fontEngine;
                                _this19.textRenderers[type].init(_this19);
                                _this19.fontHandlers[type] = fontEngine.font;
                            });
                        } else {
                            var fontEngine = this.singleFontEngine;
                            var _type2 = fontEngine.type;
                            if (_type2 === "sdf" && renderMode === "canvas") {
                                console.warn("MsdfTextRenderer is not compatible with Canvas renderer. Skipping...");
                            } else {
                                if (_type2 === "canvas") {
                                    this.hasCanvasEngine = true;
                                }
                                this.textRenderers[_type2] = fontEngine;
                                this.fontHandlers[_type2] = fontEngine.font;
                                this.textRenderers[_type2].init(this);
                            }
                        }
                        if (Object.keys(this.textRenderers).length === 0) {
                            console.warn("No text renderers available. Your text will not render.");
                        }
                        var rootNode = new CoreNode(this, {
                            x: 0,
                            y: 0,
                            w: appWidth,
                            h: appHeight,
                            alpha: 1,
                            autosize: false,
                            boundsMargin: null,
                            clipping: false,
                            color: 0,
                            colorTop: 0,
                            colorBottom: 0,
                            colorLeft: 0,
                            colorRight: 0,
                            colorTl: 0,
                            colorTr: 0,
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
                            textureOptions: {},
                            shader: this.defShaderNode,
                            rtt: false,
                            src: null,
                            scale: 1
                        });
                        this.root = rootNode;
                        rootNode.updateLocalTransform();
                        Matrix3d.copy(rootNode.localTransform, rootNode.globalTransform);
                        rootNode.sceneGlobalTransform = Matrix3d.copy(rootNode.localTransform);
                        rootNode.calculateRenderCoords();
                        rootNode.updateBoundingRect();
                        rootNode.createRenderBounds();
                        rootNode.updateRenderState(CoreNodeRenderState.InViewport);
                        rootNode.updateIsRenderable();
                        rootNode.premultipliedColorTl = rootNode.premultipliedColorTr = rootNode.premultipliedColorBl = rootNode.premultipliedColorBr = 0;
                        {
                            this.platform.startLoop(this);
                        }
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
                        value: function updateFrameTime() {
                            var newFrameTime = this.platform.getTimeStamp();
                            this.lastFrameTime = this.currentFrameTime;
                            this.currentFrameTime = newFrameTime;
                            this.elapsedTime = newFrameTime - this.startTime;
                            this.deltaTime = !this.lastFrameTime ? 100 / 6 : newFrameTime - this.lastFrameTime;
                            this.txManager.frameTime = newFrameTime;
                            this.txMemManager.frameTime = newFrameTime;
                            this.eventBus.emit("frameTick", {
                                time: this.currentFrameTime,
                                delta: this.deltaTime
                            });
                        }
                    }, {
                        key: "setContextLost",
                        value: function setContextLost() {
                            if (this.isContextLost === true) {
                                return;
                            }
                            this.isContextLost = true;
                            this.eventBus.emit("contextLost");
                        }
                    }, {
                        key: "createDefaultTexture",
                        value: function createDefaultTexture() {
                            var _this20 = this;
                            this.defaultTexture = this.txManager.createTexture("ColorTexture", {
                                color: 4294967295
                            });
                            assertTruthy(this.defaultTexture instanceof ColorTexture);
                            this.txManager.loadTexture(this.defaultTexture, true);
                            this.defaultTexture.setRenderableOwner("stage", true);
                            this.defaultTexture.once("loaded", function() {
                                _this20.requestRender();
                            });
                        }
                    }, {
                        key: "updateAnimations",
                        value: function updateAnimations() {
                            var animationManager = this.animationManager;
                            if (!this.root) {
                                return false;
                            }
                            animationManager.update(this.deltaTime);
                            return animationManager.activeAnimations.length > 0;
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
                            for (var key in textRenderers) {
                                textRenderers[key].cleanup();
                            }
                        }
                    }, {
                        key: "drawFrame",
                        value: function drawFrame() {
                            var hasActiveAnimations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                            var renderer = this.renderer, renderRequested = this.renderRequested, root = this.root;
                            do {
                                var forceUpdate = this.reprocessFrame;
                                this.reprocessFrame = false;
                                if (root.updateType !== 0 || forceUpdate) {
                                    root.updateType = 0;
                                    var childUpdateType = root.childUpdateType;
                                    root.childUpdateType = 0;
                                    for (var i = 0, length = root.children.length; i < length; i++) {
                                        var child = root.children[i];
                                        if (childUpdateType !== 0) {
                                            child.updateType |= childUpdateType;
                                        }
                                        if (child.updateType === 0) {
                                            continue;
                                        }
                                        child.update(this.deltaTime, root.clippingRect);
                                    }
                                }
                                if (this.reprocessCallback !== null) {
                                    this.reprocessCallback();
                                    this.reprocessCallback = null;
                                }
                            } while (this.reprocessFrame);
                            if (this.txManager.hasUpdates() === true) {
                                var timeLimit = hasActiveAnimations ? this.options.textureProcessingTimeLimit / 2 : this.options.textureProcessingTimeLimit;
                                this.txManager.processSome(timeLimit).catch(function(err) {
                                    console.error("Error processing textures:", err);
                                });
                            }
                            renderer.reset();
                            if (renderer.rttNodes.length > 0) {
                                renderer.renderRTTNodes();
                            }
                            if (this.renderListDirty === true) {
                                this.renderList.length = 0;
                                this.buildRenderList(this.root);
                                this.renderListDirty = false;
                            } else {
                                var renderList = this.renderList;
                                for (var _i9 = 0, len = renderList.length; _i9 < len; _i9++) {
                                    renderList[_i9].renderQuads(renderer);
                                }
                            }
                            renderer.render();
                            {
                                this.calculateFps();
                                this.calculateRenderInfo();
                            }
                            if (renderRequested === true) {
                                this.renderRequested = false;
                            }
                            if (this.timedNodes.length > 0) {
                                for (var key in this.timedNodes) {
                                    if (this.timedNodes[key].isRenderable === true) {
                                        this.requestRender();
                                        break;
                                    }
                                }
                            }
                            if (this.txMemManager.criticalCleanupRequested === true) {
                                this.txMemManager.cleanup();
                            }
                        }
                    }, {
                        key: "queueFrameEvent",
                        value: function queueFrameEvent(name, data) {
                            this.frameEventQueue.push([ name, data ]);
                        }
                    }, {
                        key: "flushFrameEvents",
                        value: function flushFrameEvents() {
                            var _iterator0 = _createForOfIteratorHelper(this.frameEventQueue), _step0;
                            try {
                                for (_iterator0.s(); !(_step0 = _iterator0.n()).done; ) {
                                    var _step0$value = _slicedToArray(_step0.value, 2), name = _step0$value[0], data = _step0$value[1];
                                    this.eventBus.emit(name, data);
                                }
                            } catch (err) {
                                _iterator0.e(err);
                            } finally {
                                _iterator0.f();
                            }
                            this.frameEventQueue = [];
                        }
                    }, {
                        key: "calculateFps",
                        value: function calculateFps() {
                            var fpsUpdateInterval = this.options.fpsUpdateInterval;
                            if (fpsUpdateInterval) {
                                this.fpsNumFrames++;
                                this.fpsElapsedTime += this.deltaTime;
                                if (this.fpsElapsedTime >= fpsUpdateInterval) {
                                    var _this$contextSpy$getD, _this$contextSpy, _this$contextSpy2;
                                    var fps = Math.round(this.fpsNumFrames * 1e3 / this.fpsElapsedTime);
                                    this.fpsNumFrames = 0;
                                    this.fpsElapsedTime = 0;
                                    this.queueFrameEvent("fpsUpdate", {
                                        fps: fps,
                                        contextSpyData: (_this$contextSpy$getD = (_this$contextSpy = this.contextSpy) === null || _this$contextSpy === void 0 ? void 0 : _this$contextSpy.getData()) !== null && _this$contextSpy$getD !== void 0 ? _this$contextSpy$getD : null
                                    });
                                    (_this$contextSpy2 = this.contextSpy) === null || _this$contextSpy2 === void 0 || _this$contextSpy2.reset();
                                }
                            }
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
                            if (this.renderer.invalidateQuadBuffer !== undefined) {
                                this.renderer.invalidateQuadBuffer();
                            }
                            this.renderListDirty = true;
                            this.requestRender();
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
                                if (child.worldAlpha === 0 || child.renderState === CoreNodeRenderState.OutOfBounds) {
                                    continue;
                                }
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
                            if (callback) {
                                this.reprocessCallback = callback;
                            }
                        }
                    }, {
                        key: "resolveTextRenderer",
                        value: function resolveTextRenderer(trProps) {
                            var _this$fontHandlers$sd;
                            var textRendererOverride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                            if (textRendererOverride !== null) {
                                var overrideKey = String(textRendererOverride);
                                if (this.textRenderers[overrideKey] === undefined) {
                                    console.warn("Text renderer override '".concat(overrideKey, "' not found."));
                                    return null;
                                }
                                return this.textRenderers[overrideKey];
                            }
                            if (this.singleFontEngine !== null) {
                                var _this$singleFontHandl;
                                if (this.hasOnlyCanvasFontEngine === true) {
                                    return this.singleFontEngine;
                                }
                                if (((_this$singleFontHandl = this.singleFontHandler) === null || _this$singleFontHandl === void 0 ? void 0 : _this$singleFontHandl.canRenderFont(trProps)) === true) {
                                    return this.singleFontEngine;
                                }
                                console.warn("Text renderer cannot render font", trProps);
                                return null;
                            }
                            if (((_this$fontHandlers$sd = this.fontHandlers["sdf"]) === null || _this$fontHandlers$sd === void 0 ? void 0 : _this$fontHandlers$sd.canRenderFont(trProps)) === true) {
                                return this.textRenderers.sdf || null;
                            }
                            if (this.hasCanvasEngine === true) {
                                return this.textRenderers.canvas || null;
                            }
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
                            if (!resolvedTextRenderer) {
                                throw new Error("No compatible text renderer found for ".concat(resolvedProps.fontFamily));
                            }
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
                            this.boundsMargin = Array.isArray(value) ? value : [ value, value, value, value ];
                            this.updateViewportBounds();
                        }
                    }, {
                        key: "updateViewportBounds",
                        value: function updateViewportBounds() {
                            var _this$options = this.options, appWidth = _this$options.appWidth, appHeight = _this$options.appHeight;
                            this.strictBound = createBound(0, 0, appWidth, appHeight);
                            this.preloadBound = createPreloadBounds(this.strictBound, this.boundsMargin);
                            this.root.strictBound = this.strictBound;
                            this.root.preloadBound = this.preloadBound;
                            this.root.setUpdateType(UpdateType.RenderBounds | UpdateType.Children);
                            this.root.childUpdateType |= UpdateType.RenderBounds;
                        }
                    }, {
                        key: "trackTimedNode",
                        value: function trackTimedNode(node) {
                            if (this.timedNodes[node.id] !== undefined) {
                                return;
                            }
                            this.timedNodes[node.id] = node;
                        }
                    }, {
                        key: "untrackTimedNode",
                        value: function untrackTimedNode(node) {
                            if (this.timedNodes[node.id] === undefined) {
                                return;
                            }
                            delete this.timedNodes[node.id];
                        }
                    }, {
                        key: "resolveNodeDefaults",
                        value: function resolveNodeDefaults(props) {
                            var _props$color, _props$scale, _props$mount, _props$pivot, _props$x, _props$y, _props$w3, _props$h3, _props$alpha, _props$autosize, _props$boundsMargin, _props$clipping, _props$zIndex, _props$parent, _props$texture, _props$textureOptions, _props$shader, _props$src2, _ref22, _props$scaleX, _ref23, _props$scaleY, _props$mountX, _props$mountY, _props$pivotX, _props$pivotY, _props$rotation, _props$rtt;
                            var color = (_props$color = props.color) !== null && _props$color !== void 0 ? _props$color : 4294967295;
                            var colorTop = color;
                            var colorBottom = color;
                            var colorLeft = color;
                            var colorRight = color;
                            var colorTl = color;
                            var colorTr = color;
                            var colorBl = color;
                            var colorBr = color;
                            if (props.colorTop !== undefined || props.colorBottom !== undefined || props.colorLeft !== undefined || props.colorRight !== undefined || props.colorTl !== undefined || props.colorTr !== undefined || props.colorBl !== undefined || props.colorBr !== undefined) {
                                var _ref14, _ref15, _props$colorTl, _ref16, _ref17, _props$colorTr, _ref18, _ref19, _props$colorBl, _ref20, _ref21, _props$colorBr;
                                var top = props.colorTop, bottom = props.colorBottom, left = props.colorLeft, right = props.colorRight;
                                colorTop = top !== null && top !== void 0 ? top : color;
                                colorBottom = bottom !== null && bottom !== void 0 ? bottom : color;
                                colorLeft = left !== null && left !== void 0 ? left : color;
                                colorRight = right !== null && right !== void 0 ? right : color;
                                colorTl = (_ref14 = (_ref15 = (_props$colorTl = props.colorTl) !== null && _props$colorTl !== void 0 ? _props$colorTl : top) !== null && _ref15 !== void 0 ? _ref15 : left) !== null && _ref14 !== void 0 ? _ref14 : color;
                                colorTr = (_ref16 = (_ref17 = (_props$colorTr = props.colorTr) !== null && _props$colorTr !== void 0 ? _props$colorTr : top) !== null && _ref17 !== void 0 ? _ref17 : right) !== null && _ref16 !== void 0 ? _ref16 : color;
                                colorBl = (_ref18 = (_ref19 = (_props$colorBl = props.colorBl) !== null && _props$colorBl !== void 0 ? _props$colorBl : bottom) !== null && _ref19 !== void 0 ? _ref19 : left) !== null && _ref18 !== void 0 ? _ref18 : color;
                                colorBr = (_ref20 = (_ref21 = (_props$colorBr = props.colorBr) !== null && _props$colorBr !== void 0 ? _props$colorBr : bottom) !== null && _ref21 !== void 0 ? _ref21 : right) !== null && _ref20 !== void 0 ? _ref20 : color;
                            }
                            var scale = (_props$scale = props.scale) !== null && _props$scale !== void 0 ? _props$scale : null;
                            var mount = (_props$mount = props.mount) !== null && _props$mount !== void 0 ? _props$mount : 0;
                            var pivot = (_props$pivot = props.pivot) !== null && _props$pivot !== void 0 ? _props$pivot : .5;
                            var data = {};
                            return {
                                x: (_props$x = props.x) !== null && _props$x !== void 0 ? _props$x : 0,
                                y: (_props$y = props.y) !== null && _props$y !== void 0 ? _props$y : 0,
                                w: (_props$w3 = props.w) !== null && _props$w3 !== void 0 ? _props$w3 : 0,
                                h: (_props$h3 = props.h) !== null && _props$h3 !== void 0 ? _props$h3 : 0,
                                alpha: (_props$alpha = props.alpha) !== null && _props$alpha !== void 0 ? _props$alpha : 1,
                                autosize: (_props$autosize = props.autosize) !== null && _props$autosize !== void 0 ? _props$autosize : false,
                                boundsMargin: (_props$boundsMargin = props.boundsMargin) !== null && _props$boundsMargin !== void 0 ? _props$boundsMargin : null,
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
                                zIndex: (_props$zIndex = props.zIndex) !== null && _props$zIndex !== void 0 ? _props$zIndex : 0,
                                parent: (_props$parent = props.parent) !== null && _props$parent !== void 0 ? _props$parent : null,
                                texture: (_props$texture = props.texture) !== null && _props$texture !== void 0 ? _props$texture : null,
                                textureOptions: (_props$textureOptions = props.textureOptions) !== null && _props$textureOptions !== void 0 ? _props$textureOptions : {},
                                shader: (_props$shader = props.shader) !== null && _props$shader !== void 0 ? _props$shader : this.defShaderNode,
                                src: (_props$src2 = props.src) !== null && _props$src2 !== void 0 ? _props$src2 : null,
                                srcHeight: props.srcHeight,
                                srcWidth: props.srcWidth,
                                srcX: props.srcX,
                                srcY: props.srcY,
                                scale: scale,
                                scaleX: (_ref22 = (_props$scaleX = props.scaleX) !== null && _props$scaleX !== void 0 ? _props$scaleX : scale) !== null && _ref22 !== void 0 ? _ref22 : 1,
                                scaleY: (_ref23 = (_props$scaleY = props.scaleY) !== null && _props$scaleY !== void 0 ? _props$scaleY : scale) !== null && _ref23 !== void 0 ? _ref23 : 1,
                                mount: mount,
                                mountX: (_props$mountX = props.mountX) !== null && _props$mountX !== void 0 ? _props$mountX : mount,
                                mountY: (_props$mountY = props.mountY) !== null && _props$mountY !== void 0 ? _props$mountY : mount,
                                pivot: pivot,
                                pivotX: (_props$pivotX = props.pivotX) !== null && _props$pivotX !== void 0 ? _props$pivotX : pivot,
                                pivotY: (_props$pivotY = props.pivotY) !== null && _props$pivotY !== void 0 ? _props$pivotY : pivot,
                                rotation: (_props$rotation = props.rotation) !== null && _props$rotation !== void 0 ? _props$rotation : 0,
                                rtt: (_props$rtt = props.rtt) !== null && _props$rtt !== void 0 ? _props$rtt : false,
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
                            if (!fontHandler) {
                                return Promise.reject(new Error("Font handler for renderer type '".concat(rendererTypeKey, "' not found. Available types: ").concat(Object.keys(this.fontHandlers).join(", "))));
                            }
                            return fontHandler.loadFont(this, options);
                        }
                    } ]);
                }();
                var Platform = _createClass(function Platform() {
                    _classCallCheck(this, Platform);
                });
                var WebPlatform = function(_Platform) {
                    function WebPlatform() {
                        _classCallCheck(this, WebPlatform);
                        return _callSuper(this, WebPlatform, arguments);
                    }
                    _inherits(WebPlatform, _Platform);
                    return _createClass(WebPlatform, [ {
                        key: "createCanvas",
                        value: function createCanvas() {
                            var canvas = document.createElement("canvas");
                            return canvas;
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
                            var buffer = 4;
                            var _runLoop = function runLoop() {
                                var currentTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                                if (stage.isContextLost === true) {
                                    return;
                                }
                                var targetFrameTime = stage.targetFrameTime;
                                if (targetFrameTime > 0) {
                                    var elapsed = currentTime - lastFrameTime;
                                    if (elapsed < targetFrameTime) {
                                        var wait = targetFrameTime - elapsed;
                                        if (wait > buffer) {
                                            setTimeout(requestLoop, wait - buffer);
                                        } else {
                                            requestAnimationFrame(_runLoop);
                                        }
                                        return;
                                    }
                                    lastFrameTime = currentTime - elapsed % targetFrameTime;
                                } else {
                                    lastFrameTime = currentTime;
                                }
                                stage.updateFrameTime();
                                var hasActiveAnimations = stage.updateAnimations();
                                if (!stage.hasSceneUpdates()) {
                                    stage.calculateFps();
                                    setTimeout(requestLoop, Math.max(targetFrameTime, 15));
                                    if (isIdle === false) {
                                        if (stage.renderer.checkForOutOfMemory() === true) {
                                            stage.txMemManager.handleOutOfMemory();
                                        }
                                        stage.shManager.cleanup();
                                        stage.cleanupTextRenderers();
                                        stage.eventBus.emit("idle");
                                        isIdle = true;
                                    }
                                    if (stage.txMemManager.checkCleanup() === true) {
                                        stage.txMemManager.cleanup();
                                    }
                                    stage.flushFrameEvents();
                                    return;
                                }
                                isIdle = false;
                                stage.drawFrame(hasActiveAnimations);
                                stage.flushFrameEvents();
                                requestAnimationFrame(_runLoop);
                            };
                            var requestLoop = function requestLoop() {
                                return requestAnimationFrame(_runLoop);
                            };
                            requestAnimationFrame(_runLoop);
                        }
                    }, {
                        key: "createImageBitmap",
                        value: function(_createImageBitmap2) {
                            function createImageBitmap(_x27, _x28, _x29, _x30, _x31, _x32) {
                                return _createImageBitmap2.apply(this, arguments);
                            }
                            createImageBitmap.toString = function() {
                                return _createImageBitmap2.toString();
                            };
                            return createImageBitmap;
                        }(function(blob, sxOrOptions, sy, sw, sh, options) {
                            if (typeof sxOrOptions === "number") {
                                return createImageBitmap(blob, sxOrOptions, sy !== null && sy !== void 0 ? sy : 0, sw !== null && sw !== void 0 ? sw : 0, sh !== null && sh !== void 0 ? sh : 0, options);
                            } else {
                                return createImageBitmap(blob, sxOrOptions);
                            }
                        })
                    }, {
                        key: "getTimeStamp",
                        value: function getTimeStamp() {
                            return Date.now();
                        }
                    }, {
                        key: "addFont",
                        value: function addFont(font) {
                            document.fonts.add(font);
                        }
                    } ]);
                }(Platform);
                var RendererMain = function(_EventEmitter5) {
                    function RendererMain(settings, target) {
                        var _settings$clearColor, _settings$enableClear, _settings$textLayoutC, _settings$enableConte, _settings$inspector, _settings$inspectorOp, _settings$quadBufferS, _settings$fontEngines, _settings$textBaselin, _settings$maxRetryCou, _settings$maxRetryCou2;
                        var _this21;
                        _classCallCheck(this, RendererMain);
                        _this21 = _callSuper(this, RendererMain);
                        _defineProperty(_this21, "root", void 0);
                        _defineProperty(_this21, "canvas", void 0);
                        _defineProperty(_this21, "stage", void 0);
                        _defineProperty(_this21, "inspector", null);
                        var resolvedTxSettings = _this21.resolveTxSettings(settings.textureMemory || {});
                        settings = {
                            appWidth: settings.appWidth || 1920,
                            appHeight: settings.appHeight || 1080,
                            textureMemory: resolvedTxSettings,
                            boundsMargin: settings.boundsMargin || 0,
                            deviceLogicalPixelRatio: settings.deviceLogicalPixelRatio || 1,
                            devicePhysicalPixelRatio: settings.devicePhysicalPixelRatio || _this21.windowDevicePixelRatio() || 1,
                            clearColor: (_settings$clearColor = settings.clearColor) !== null && _settings$clearColor !== void 0 ? _settings$clearColor : 0,
                            fpsUpdateInterval: settings.fpsUpdateInterval || 0,
                            enableClear: (_settings$enableClear = settings.enableClear) !== null && _settings$enableClear !== void 0 ? _settings$enableClear : true,
                            targetFPS: settings.targetFPS || 0,
                            textLayoutCacheSize: (_settings$textLayoutC = settings.textLayoutCacheSize) !== null && _settings$textLayoutC !== void 0 ? _settings$textLayoutC : 250,
                            numImageWorkers: settings.numImageWorkers !== undefined ? settings.numImageWorkers : 2,
                            enableContextSpy: (_settings$enableConte = settings.enableContextSpy) !== null && _settings$enableConte !== void 0 ? _settings$enableConte : false,
                            inspector: (_settings$inspector = settings.inspector) !== null && _settings$inspector !== void 0 ? _settings$inspector : false,
                            inspectorOptions: (_settings$inspectorOp = settings.inspectorOptions) !== null && _settings$inspectorOp !== void 0 ? _settings$inspectorOp : {},
                            renderEngine: settings.renderEngine,
                            quadBufferSize: (_settings$quadBufferS = settings.quadBufferSize) !== null && _settings$quadBufferS !== void 0 ? _settings$quadBufferS : 4 * 1024 * 1024,
                            fontEngines: (_settings$fontEngines = settings.fontEngines) !== null && _settings$fontEngines !== void 0 ? _settings$fontEngines : [],
                            textBaselineMode: (_settings$textBaselin = settings.textBaselineMode) !== null && _settings$textBaselin !== void 0 ? _settings$textBaselin : "optical",
                            textureProcessingTimeLimit: settings.textureProcessingTimeLimit || 10,
                            canvas: settings.canvas,
                            createImageBitmapSupport: settings.createImageBitmapSupport || "full",
                            premultiplyAlphaHonored: settings.premultiplyAlphaHonored === undefined ? true : settings.premultiplyAlphaHonored,
                            platform: settings.platform || null,
                            maxRetryCount: (_settings$maxRetryCou = settings.maxRetryCount) !== null && _settings$maxRetryCou !== void 0 ? _settings$maxRetryCou : 5
                        };
                        var _settings = settings, appWidth = _settings.appWidth, appHeight = _settings.appHeight, deviceLogicalPixelRatio = _settings.deviceLogicalPixelRatio, devicePhysicalPixelRatio = _settings.devicePhysicalPixelRatio, inspector = _settings.inspector;
                        var platform;
                        if (settings.platform !== undefined && settings.platform !== null && settings.platform.prototype instanceof Platform === true) {
                            platform = new settings.platform;
                        } else {
                            platform = new WebPlatform;
                        }
                        var canvas = settings.canvas || platform.createCanvas();
                        var deviceLogicalWidth = appWidth * deviceLogicalPixelRatio;
                        var deviceLogicalHeight = appHeight * deviceLogicalPixelRatio;
                        _this21.canvas = canvas;
                        canvas.width = deviceLogicalWidth * devicePhysicalPixelRatio;
                        canvas.height = deviceLogicalHeight * devicePhysicalPixelRatio;
                        canvas.style.width = "".concat(deviceLogicalWidth, "px");
                        canvas.style.height = "".concat(deviceLogicalHeight, "px");
                        _this21.stage = new Stage({
                            appWidth: appWidth,
                            appHeight: appHeight,
                            boundsMargin: settings.boundsMargin,
                            clearColor: settings.clearColor,
                            canvas: _this21.canvas,
                            deviceLogicalPixelRatio: deviceLogicalPixelRatio,
                            devicePhysicalPixelRatio: devicePhysicalPixelRatio,
                            enableContextSpy: settings.enableContextSpy,
                            fpsUpdateInterval: settings.fpsUpdateInterval,
                            enableClear: settings.enableClear,
                            numImageWorkers: settings.numImageWorkers,
                            renderEngine: settings.renderEngine,
                            textureMemory: resolvedTxSettings,
                            eventBus: _this21,
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
                            maxRetryCount: (_settings$maxRetryCou2 = settings.maxRetryCount) !== null && _settings$maxRetryCou2 !== void 0 ? _settings$maxRetryCou2 : 5
                        });
                        _this21.root = _this21.stage.root;
                        if (target) {
                            var targetEl;
                            if (typeof target === "string") {
                                targetEl = document.getElementById(target);
                            } else {
                                targetEl = target;
                            }
                            if (!targetEl) {
                                throw new Error("Could not find target element");
                            }
                            targetEl.appendChild(canvas);
                        } else if (settings.canvas !== canvas) {
                            throw new Error("New canvas element could not be appended to undefined target");
                        }
                        if (inspector && ENABLE_INSPECTOR) {
                            _this21.inspector = new inspector(canvas, settings);
                        }
                        return _this21;
                    }
                    _inherits(RendererMain, _EventEmitter5);
                    return _createClass(RendererMain, [ {
                        key: "resolveTxSettings",
                        value: function resolveTxSettings(textureMemory) {
                            var _ref24, _textureMemory$critic, _ref25, _textureMemory$target, _ref26, _textureMemory$cleanu, _ref27, _textureMemory$debugL, _ref28, _textureMemory$baseli, _ref29, _textureMemory$doNotE;
                            var currentTxSettings = this.stage && this.stage.options.textureMemory || {};
                            var criticalThreshold = (_ref24 = (_textureMemory$critic = textureMemory === null || textureMemory === void 0 ? void 0 : textureMemory.criticalThreshold) !== null && _textureMemory$critic !== void 0 ? _textureMemory$critic : currentTxSettings === null || currentTxSettings === void 0 ? void 0 : currentTxSettings.criticalThreshold) !== null && _ref24 !== void 0 ? _ref24 : 2e8;
                            return {
                                criticalThreshold: criticalThreshold,
                                targetThresholdLevel: (_ref25 = (_textureMemory$target = textureMemory === null || textureMemory === void 0 ? void 0 : textureMemory.targetThresholdLevel) !== null && _textureMemory$target !== void 0 ? _textureMemory$target : currentTxSettings === null || currentTxSettings === void 0 ? void 0 : currentTxSettings.targetThresholdLevel) !== null && _ref25 !== void 0 ? _ref25 : .8,
                                cleanupInterval: (_ref26 = (_textureMemory$cleanu = textureMemory === null || textureMemory === void 0 ? void 0 : textureMemory.cleanupInterval) !== null && _textureMemory$cleanu !== void 0 ? _textureMemory$cleanu : currentTxSettings === null || currentTxSettings === void 0 ? void 0 : currentTxSettings.cleanupInterval) !== null && _ref26 !== void 0 ? _ref26 : 5e3,
                                debugLogging: (_ref27 = (_textureMemory$debugL = textureMemory === null || textureMemory === void 0 ? void 0 : textureMemory.debugLogging) !== null && _textureMemory$debugL !== void 0 ? _textureMemory$debugL : currentTxSettings === null || currentTxSettings === void 0 ? void 0 : currentTxSettings.debugLogging) !== null && _ref27 !== void 0 ? _ref27 : false,
                                baselineMemoryAllocation: (_ref28 = (_textureMemory$baseli = textureMemory === null || textureMemory === void 0 ? void 0 : textureMemory.baselineMemoryAllocation) !== null && _textureMemory$baseli !== void 0 ? _textureMemory$baseli : currentTxSettings === null || currentTxSettings === void 0 ? void 0 : currentTxSettings.baselineMemoryAllocation) !== null && _ref28 !== void 0 ? _ref28 : 26e6,
                                doNotExceedCriticalThreshold: (_ref29 = (_textureMemory$doNotE = textureMemory === null || textureMemory === void 0 ? void 0 : textureMemory.doNotExceedCriticalThreshold) !== null && _textureMemory$doNotE !== void 0 ? _textureMemory$doNotE : currentTxSettings === null || currentTxSettings === void 0 ? void 0 : currentTxSettings.doNotExceedCriticalThreshold) !== null && _ref29 !== void 0 ? _ref29 : false
                            };
                        }
                    }, {
                        key: "createNode",
                        value: function createNode(props) {
                            var resolved = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                            var node = this.stage.createNode(props, resolved);
                            if (ENABLE_INSPECTOR && this.inspector) {
                                return this.inspector.createNode(node);
                            }
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
                            if (ENABLE_INSPECTOR && this.inspector) {
                                return this.inspector.createTextNode(textNode);
                            }
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
                            if (ENABLE_INSPECTOR && this.inspector) {
                                this.inspector.destroyNode(node);
                            }
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
                            var root = (_this$stage = this.stage) === null || _this$stage === void 0 ? void 0 : _this$stage.root;
                            if (!root) {
                                return null;
                            }
                            var _findNode = function findNode(node) {
                                if (node.id === id) {
                                    return node;
                                }
                                var _iterator1 = _createForOfIteratorHelper(node.children), _step1;
                                try {
                                    for (_iterator1.s(); !(_step1 = _iterator1.n()).done; ) {
                                        var child = _step1.value;
                                        var found = _findNode(child);
                                        if (found) {
                                            return found;
                                        }
                                    }
                                } catch (err) {
                                    _iterator1.e(err);
                                } finally {
                                    _iterator1.f();
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
                            if (options.textureMemory !== undefined) {
                                var textureMemory = options.textureMemory = this.resolveTxSettings(options.textureMemory);
                                stage.txMemManager.updateSettings(textureMemory);
                                stage.txMemManager.cleanup();
                            }
                            if (options.boundsMargin !== undefined) {
                                var bm = options.boundsMargin;
                                options.boundsMargin = Array.isArray(bm) ? bm : [ bm, bm, bm, bm ];
                            }
                            var stageOptions = stage.options;
                            for (var key in options) {
                                stageOptions[key] = options[key];
                            }
                            if (options.inspector !== undefined && ENABLE_INSPECTOR) {
                                if (options.inspector === false) {
                                    var _this$inspector;
                                    (_this$inspector = this.inspector) === null || _this$inspector === void 0 || _this$inspector.destroy();
                                    this.inspector = null;
                                } else if (this.inspector === null || this.inspector.constructor !== options.inspector) {
                                    var _this$inspector2;
                                    this.inspector = new options.inspector(this.canvas, stage.options);
                                    (_this$inspector2 = this.inspector) === null || _this$inspector2 === void 0 || _this$inspector2.createNodes(this.root);
                                }
                            }
                            var needDimensionsUpdate = false;
                            if (options.deviceLogicalPixelRatio || options.devicePhysicalPixelRatio !== undefined) {
                                var _this$inspector3;
                                this.stage.pixelRatio = stageOptions.devicePhysicalPixelRatio * stageOptions.deviceLogicalPixelRatio;
                                (_this$inspector3 = this.inspector) === null || _this$inspector3 === void 0 || _this$inspector3.updateViewport(stageOptions.appWidth, stageOptions.appHeight, stageOptions.deviceLogicalPixelRatio);
                                needDimensionsUpdate = true;
                            }
                            if (options.appWidth !== undefined || options.appHeight !== undefined) {
                                var _this$inspector4;
                                (_this$inspector4 = this.inspector) === null || _this$inspector4 === void 0 || _this$inspector4.updateViewport(stageOptions.appWidth, stageOptions.appHeight, stageOptions.deviceLogicalPixelRatio);
                                needDimensionsUpdate = true;
                            }
                            if (options.boundsMargin !== undefined) {
                                this.stage.setBoundsMargin(options.boundsMargin);
                            }
                            if (options.clearColor !== undefined) {
                                this.stage.setClearColor(options.clearColor);
                            }
                            if (needDimensionsUpdate) {
                                this.updateAppDimensions();
                            }
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
                            return typeof window !== "undefined" ? window.devicePixelRatio : undefined;
                        }
                    } ]);
                }(EventEmitter);
                var validateArrayLength4 = function validateArrayLength4(value) {
                    if (!Array.isArray(value)) {
                        return [ value, value, value, value ];
                    }
                    if (value.length === 4) {
                        return value;
                    }
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
                function getBorderProps(prefix) {
                    var pf = prefix && prefix.length > 0 ? "".concat(prefix, "-") : "";
                    var w = pf + "w";
                    return _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, w, {
                        default: [ 0, 0, 0, 0 ],
                        resolve: function resolve(value) {
                            if (value !== undefined) {
                                return validateArrayLength4(value);
                            }
                            return [].concat(this.default);
                        }
                    }), pf + "color", 4294967295), pf + "align", {
                        default: 1,
                        resolve: function resolve(value) {
                            if (!isNaN(value)) {
                                return value;
                            }
                            if (typeof value === "string") {
                                switch (value) {
                                  case "inside":
                                    return 0;

                                  case "center":
                                    return .5;

                                  case "outside":
                                    return 1;
                                }
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
                ({
                    props: getBorderProps()
                });
                var HolePunchTemplate = {
                    props: {
                        x: 0,
                        y: 0,
                        w: 50,
                        h: 50,
                        radius: {
                            default: [ 0, 0, 0, 0 ],
                            resolve: function resolve(value) {
                                if (value !== undefined) {
                                    return validateArrayLength4(value);
                                }
                                return [].concat(this.default);
                            }
                        }
                    }
                };
                var RoundedTemplate = {
                    props: {
                        radius: {
                            default: [ 0, 0, 0, 0 ],
                            resolve: function resolve(value) {
                                if (value !== undefined) {
                                    return validateArrayLength4(value);
                                }
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
                ({
                    props: getShadowProps()
                });
                var LinearGradientTemplate = {
                    props: {
                        colors: {
                            default: [ 255, 4294967295 ],
                            resolve: function resolve(value) {
                                if (value !== undefined && value.length > 0) {
                                    return value;
                                }
                                return [].concat(this.default);
                            }
                        },
                        stops: {
                            default: [ 0, 1 ],
                            resolve: function resolve(value, props) {
                                if (value !== undefined && value.length === props.colors.length) {
                                    return value;
                                }
                                if (value === undefined) {
                                    value = [];
                                }
                                var len = props.colors.length;
                                for (var i = 0; i < len; i++) {
                                    value[i] = i * (1 / (len - 1));
                                }
                                return value;
                            }
                        },
                        angle: 0
                    }
                };
                var RadialGradientTemplate = {
                    props: {
                        colors: {
                            default: [ 255, 4294967295 ],
                            resolve: function resolve(value) {
                                if (value !== undefined && value.length > 0) {
                                    return value;
                                }
                                return [].concat(this.default);
                            }
                        },
                        stops: {
                            default: [ 0, 1 ],
                            resolve: function resolve(value, props) {
                                if (value !== undefined && value.length === props.colors.length) {
                                    return value;
                                }
                                if (value === undefined) {
                                    value = [];
                                }
                                var len = props.colors.length;
                                for (var i = 0; i < len; i++) {
                                    value[i] = i * (1 / (len - 1));
                                }
                                return value;
                            }
                        },
                        w: 50,
                        h: 50,
                        pivot: [ .5, .5 ]
                    }
                };
                var Default = {
                    vertex: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    attribute vec2 a_position;\n    attribute vec2 a_textureCoords;\n    attribute vec4 a_color;\n    attribute vec2 a_nodeCoords;\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n    varying vec2 v_nodeCoords;\n\n    void main() {\n      vec2 normalized = a_position * u_pixelRatio / u_resolution;\n      vec2 zero_two = normalized * 2.0;\n      vec2 clip_space = zero_two - 1.0;\n\n      v_color = a_color;\n      v_textureCoords = a_textureCoords;\n      v_nodeCoords = a_nodeCoords;\n\n      gl_Position = vec4(clip_space * vec2(1.0, -1.0), 0, 1);\n    }\n  ",
                    fragment: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    uniform vec2 u_resolution;\n    uniform sampler2D u_texture;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n\n    void main() {\n      gl_FragColor = v_color * texture2D(u_texture, v_textureCoords);\n    }\n  "
                };
                var WebGlShaderNode = function(_CoreShaderNode2) {
                    function WebGlShaderNode(shaderKey, config, program, stage, props) {
                        var _this22;
                        _classCallCheck(this, WebGlShaderNode);
                        _this22 = _callSuper(this, WebGlShaderNode, [ shaderKey, config, stage, props ]);
                        _defineProperty(_this22, "program", void 0);
                        _defineProperty(_this22, "updater", undefined);
                        _defineProperty(_this22, "uniforms", {
                            single: {},
                            vec2: {},
                            vec3: {},
                            vec4: {}
                        });
                        _this22.program = program;
                        if (config.update !== undefined) {
                            _this22.updater = config.update;
                            _this22.update = function() {
                                if (_this22.props === undefined) {
                                    _this22.updater(_this22.node, _this22.props);
                                    return;
                                }
                                var prevKey = _this22.valueKey;
                                _this22.valueKey = _this22.createValueKey();
                                if (prevKey === _this22.valueKey) {
                                    return;
                                }
                                if (prevKey.length > 0) {
                                    _this22.stage.shManager.mutateShaderValueUsage(prevKey, -1);
                                }
                                var values = _this22.stage.shManager.getShaderValues(_this22.valueKey);
                                if (values !== undefined) {
                                    _this22.uniforms = values;
                                    return;
                                }
                                _this22.uniforms = {
                                    single: {},
                                    vec2: {},
                                    vec3: {},
                                    vec4: {}
                                };
                                _this22.updater(_this22.node);
                                _this22.stage.shManager.setShaderValues(_this22.valueKey, _this22.uniforms);
                            };
                        }
                        return _this22;
                    }
                    _inherits(WebGlShaderNode, _CoreShaderNode2);
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
                function createShader(glw, type, source) {
                    var shader = glw.createShader(type);
                    if (!shader) {
                        var glError = glw.getError();
                        throw new Error("Unable to create the shader: ".concat(type === glw.VERTEX_SHADER ? "VERTEX_SHADER" : "FRAGMENT_SHADER", ".").concat(glError ? " WebGlContext Error: ".concat(glError) : ""));
                    }
                    glw.shaderSource(shader, source);
                    glw.compileShader(shader);
                    var success = !!glw.getShaderParameter(shader, glw.COMPILE_STATUS);
                    if (success) {
                        return shader;
                    }
                    console.error(glw.getShaderInfoLog(shader));
                    glw.deleteShader(shader);
                }
                function createProgram(glw, vertexShader, fragmentShader) {
                    var program = glw.createProgram();
                    if (!program) {
                        throw new Error("Unable to create program");
                    }
                    glw.attachShader(program, vertexShader);
                    glw.attachShader(program, fragmentShader);
                    glw.linkProgram(program);
                    var success = !!glw.getProgramParameter(program, glw.LINK_STATUS);
                    if (success) {
                        return program;
                    }
                    var infoLog = glw.getProgramInfoLog(program) || "Unknown program link error";
                    console.warn(infoLog);
                    glw.deleteProgram(program);
                    throw new Error("Unable to link shader program: ".concat(infoLog));
                }
                var WebGlShaderProgram = function() {
                    function WebGlShaderProgram(renderer, config, resolvedProps) {
                        var _this23 = this;
                        _classCallCheck(this, WebGlShaderProgram);
                        _defineProperty(this, "program", void 0);
                        _defineProperty(this, "renderer", void 0);
                        _defineProperty(this, "glw", void 0);
                        _defineProperty(this, "attributeLocations", void 0);
                        _defineProperty(this, "uniformLocations", void 0);
                        _defineProperty(this, "lifecycle", void 0);
                        _defineProperty(this, "useSystemAlpha", false);
                        _defineProperty(this, "useSystemDimensions", false);
                        _defineProperty(this, "useTimeValue", false);
                        _defineProperty(this, "isDestroyed", false);
                        _defineProperty(this, "supportsIndexedTextures", false);
                        this.renderer = renderer;
                        var glw = this.glw = renderer.glw;
                        this.supportsIndexedTextures = config.supportsIndexedTextures || this.supportsIndexedTextures;
                        var requiredExtensions = config.webgl1Extensions || [];
                        requiredExtensions.forEach(function(extensionName) {
                            if (!glw.getExtension(extensionName)) {
                                throw new Error('Shader "'.concat(_this23.constructor.name, '" requires extension "').concat(extensionName, "\" for WebGL 1.0 but wasn't found"));
                            }
                        });
                        var vertexSource = config.vertex instanceof Function ? config.vertex(renderer, resolvedProps) : config.vertex;
                        if (vertexSource === undefined) {
                            vertexSource = Default.vertex;
                        }
                        var fragmentSource = config.fragment instanceof Function ? config.fragment(renderer, resolvedProps) : config.fragment;
                        var vertexShader = createShader(glw, glw.VERTEX_SHADER, vertexSource);
                        if (!vertexShader) {
                            throw new Error("Vertex shader creation failed");
                        }
                        var fragmentShader = createShader(glw, glw.FRAGMENT_SHADER, fragmentSource);
                        if (!fragmentShader) {
                            throw new Error("fragment shader creation failed");
                        }
                        var program = createProgram(glw, vertexShader, fragmentShader);
                        this.program = program;
                        this.attributeLocations = glw.getAttributeLocations(program);
                        var uniLocs = this.uniformLocations = glw.getUniformLocations(program);
                        this.useSystemAlpha = uniLocs["u_alpha"] !== undefined;
                        this.useSystemDimensions = uniLocs["u_dimensions"] !== undefined;
                        this.useTimeValue = this.glw.getUniformLocation(program, "u_dimensions") !== null && config.time !== undefined;
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
                            for (var i = 0; i < attribLen; i++) {
                                glw.disableVertexAttribArray(i);
                            }
                        }
                    }, {
                        key: "reuseRenderOp",
                        value: function reuseRenderOp(node, currentRenderOp) {
                            if (this.lifecycle.canBatch !== undefined) {
                                return this.lifecycle.canBatch(node, currentRenderOp);
                            }
                            var time = node.time, worldAlpha = node.worldAlpha, w = node.w, h = node.h;
                            if (this.useTimeValue === true) {
                                if (time !== currentRenderOp.time) {
                                    return false;
                                }
                            }
                            if (this.useSystemAlpha === true) {
                                if (worldAlpha !== currentRenderOp.worldAlpha) {
                                    return false;
                                }
                            }
                            if (this.useSystemDimensions === true) {
                                if (w !== currentRenderOp.w || h !== currentRenderOp.h) {
                                    return false;
                                }
                            }
                            var shaderPropsA = undefined;
                            var shaderPropsB = undefined;
                            var shader = node.props.shader;
                            if (shader !== null) {
                                shaderPropsA = shader.resolvedProps;
                            }
                            var opShader = currentRenderOp.shader;
                            if (opShader !== null) {
                                shaderPropsB = opShader.resolvedProps;
                            }
                            if (shaderPropsA === undefined && shaderPropsB !== undefined || shaderPropsA !== undefined && shaderPropsB === undefined) {
                                return false;
                            }
                            if (shaderPropsA !== undefined && shaderPropsB !== undefined) {
                                for (var key in shaderPropsA) {
                                    if (shaderPropsA[key] !== shaderPropsB[key]) {
                                        return false;
                                    }
                                }
                            }
                            return true;
                        }
                    }, {
                        key: "bindRenderOp",
                        value: function bindRenderOp(renderOp) {
                            var isCoreNode = renderOp.isCoreNode;
                            this.bindTextures(renderOp.renderOpTextures);
                            this.bindBufferCollection(renderOp.quadBufferCollection);
                            var parentHasRenderTexture = renderOp.parentHasRenderTexture;
                            var framebufferDimensions = isCoreNode && renderOp.parentHasRenderTexture ? renderOp.parentFramebufferDimensions : renderOp.framebufferDimensions;
                            if (renderOp.rtt === true && parentHasRenderTexture === true) {
                                return;
                            }
                            if (parentHasRenderTexture === true && framebufferDimensions) {
                                var w = framebufferDimensions.w, h = framebufferDimensions.h;
                                this.glw.uniform1f("u_pixelRatio", 1);
                                this.glw.uniform2f("u_resolution", w, h);
                            } else {
                                this.glw.uniform1f("u_pixelRatio", renderOp.stage.pixelRatio);
                                this.glw.uniform2f("u_resolution", this.glw.canvas.width, this.glw.canvas.height);
                            }
                            if (this.useTimeValue === true) {
                                this.glw.uniform1f("u_time", renderOp.time);
                            }
                            if (this.useSystemAlpha === true) {
                                this.glw.uniform1f("u_alpha", renderOp.worldAlpha);
                            }
                            if (this.useSystemDimensions === true) {
                                this.glw.uniform2f("u_dimensions", renderOp.w, renderOp.h);
                            }
                            var shader = renderOp.shader;
                            if (shader.props !== undefined) {
                                var uniforms = shader.uniforms;
                                for (var key in uniforms.single) {
                                    var _uniforms$single$key = uniforms.single[key], method = _uniforms$single$key.method, value = _uniforms$single$key.value;
                                    this.glw[method](key, value);
                                }
                                for (var _key4 in uniforms.vec2) {
                                    var _uniforms$vec2$_key = uniforms.vec2[_key4], _method = _uniforms$vec2$_key.method, _value2 = _uniforms$vec2$_key.value;
                                    this.glw[_method](_key4, _value2[0], _value2[1]);
                                }
                                for (var _key5 in uniforms.vec3) {
                                    var _uniforms$vec3$_key = uniforms.vec3[_key5], _method2 = _uniforms$vec3$_key.method, _value3 = _uniforms$vec3$_key.value;
                                    this.glw[_method2](_key5, _value3[0], _value3[1], _value3[2]);
                                }
                                for (var _key6 in uniforms.vec4) {
                                    var _uniforms$vec4$_key = uniforms.vec4[_key6], _method3 = _uniforms$vec4$_key.method, _value4 = _uniforms$vec4$_key.value;
                                    this.glw[_method3](_key6, _value4[0], _value4[1], _value4[2], _value4[3]);
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
                                if (resolvedBuffer === undefined || resolvedInfo === undefined) {
                                    continue;
                                }
                                glw.enableVertexAttribArray(i);
                                glw.vertexAttribPointer(resolvedBuffer, i, resolvedInfo.size, resolvedInfo.type, resolvedInfo.normalized, resolvedInfo.stride, resolvedInfo.offset);
                            }
                        }
                    }, {
                        key: "bindTextures",
                        value: function bindTextures(textures) {
                            var t = textures[0];
                            if (t === undefined) {
                                return;
                            }
                            this.glw.activeTexture(0);
                            this.glw.bindTexture(t.ctxTexture);
                        }
                    }, {
                        key: "attach",
                        value: function attach() {
                            if (this.isDestroyed === true) {
                                return;
                            }
                            this.glw.useProgram(this.program, this.uniformLocations);
                        }
                    }, {
                        key: "detach",
                        value: function detach() {
                            this.disableAttributes();
                        }
                    }, {
                        key: "destroy",
                        value: function destroy() {
                            if (this.isDestroyed === true) {
                                return;
                            }
                            var glw = this.glw;
                            this.detach();
                            glw.deleteProgram(this.program);
                            this.program = null;
                            this.uniformLocations = null;
                            var attribs = this.attributeLocations;
                            var attribLen = this.attributeLocations.length;
                            for (var i = 0; i < attribLen; i++) {
                                this.glw.deleteBuffer(attribs[i]);
                            }
                        }
                    } ]);
                }();
                var IS_DEV = false;
                var equalFn = function equalFn(a, b) {
                    return a === b;
                };
                var $PROXY = Symbol("solid-proxy");
                var SUPPORTS_PROXY = typeof Proxy === "function";
                var signalOptions = {
                    equals: equalFn
                };
                var runEffects = runQueue;
                var STALE = 1;
                var PENDING = 2;
                var UNOWNED = {
                    owned: null,
                    cleanups: null,
                    context: null,
                    owner: null
                };
                var Owner = null;
                var Transition = null;
                var ExternalSourceConfig = null;
                var Listener = null;
                var Updates = null;
                var Effects = null;
                var ExecCount = 0;
                function createRoot(fn, detachedOwner) {
                    var listener = Listener, owner = Owner, unowned = fn.length === 0, current = owner, root = unowned ? UNOWNED : {
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
                        comparator: options.equals || undefined
                    };
                    var setter = function setter(value) {
                        if (typeof value === "function") {
                            value = value(s.value);
                        }
                        return writeSignal(s, value);
                    };
                    return [ readSignal.bind(s), setter ];
                }
                function createRenderEffect(fn, value, options) {
                    var c = createComputation(fn, value, false, STALE);
                    updateComputation(c);
                }
                function createMemo(fn, value, options) {
                    options = options ? Object.assign({}, signalOptions, options) : signalOptions;
                    var c = createComputation(fn, value, true, 0);
                    c.observers = null;
                    c.observerSlots = null;
                    c.comparator = options.equals || undefined;
                    updateComputation(c);
                    return readSignal.bind(c);
                }
                function untrack(fn) {
                    if (Listener === null) return fn();
                    var listener = Listener;
                    Listener = null;
                    try {
                        if (ExternalSourceConfig) ;
                        return fn();
                    } finally {
                        Listener = listener;
                    }
                }
                function readSignal() {
                    var _this24 = this;
                    if (this.sources && this.state) {
                        if (this.state === STALE) updateComputation(this); else {
                            var updates = Updates;
                            Updates = null;
                            runUpdates(function() {
                                return lookUpstream(_this24);
                            }, false);
                            Updates = updates;
                        }
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
                    return this.value;
                }
                function writeSignal(node, value, isComp) {
                    var current = node.value;
                    if (!node.comparator || !node.comparator(current, value)) {
                        node.value = value;
                        if (node.observers && node.observers.length) {
                            runUpdates(function() {
                                for (var i = 0; i < node.observers.length; i += 1) {
                                    var o = node.observers[i];
                                    var TransitionRunning = Transition && Transition.running;
                                    if (TransitionRunning && Transition.disposed.has(o)) ;
                                    if (TransitionRunning ? !o.tState : !o.state) {
                                        if (o.pure) Updates.push(o); else Effects.push(o);
                                        if (o.observers) markDownstream(o);
                                    }
                                    if (!TransitionRunning) o.state = STALE;
                                }
                                if (Updates.length > 1e6) {
                                    Updates = [];
                                    if (IS_DEV) ;
                                    throw new Error;
                                }
                            }, false);
                        }
                    }
                    return value;
                }
                function updateComputation(node) {
                    if (!node.fn) return;
                    cleanNode(node);
                    var time = ExecCount;
                    runComputation(node, node.value, time);
                }
                function runComputation(node, value, time) {
                    var nextValue;
                    var owner = Owner, listener = Listener;
                    Listener = Owner = node;
                    try {
                        nextValue = node.fn(value);
                    } catch (err) {
                        if (node.pure) {
                            {
                                node.state = STALE;
                                node.owned && node.owned.forEach(cleanNode);
                                node.owned = null;
                            }
                        }
                        node.updatedAt = time + 1;
                        return handleError(err);
                    } finally {
                        Listener = listener;
                        Owner = owner;
                    }
                    if (!node.updatedAt || node.updatedAt <= time) {
                        if (node.updatedAt != null && "observers" in node) {
                            writeSignal(node, nextValue);
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
                    if (Owner === null) ; else if (Owner !== UNOWNED) {
                        {
                            if (!Owner.owned) Owner.owned = [ c ]; else Owner.owned.push(c);
                        }
                    }
                    return c;
                }
                function runTop(node) {
                    if (node.state === 0) return;
                    if (node.state === PENDING) return lookUpstream(node);
                    if (node.suspense && untrack(node.suspense.inFallback)) return node.suspense.effects.push(node);
                    var ancestors = [ node ];
                    while ((node = node.owner) && (!node.updatedAt || node.updatedAt < ExecCount)) {
                        if (node.state) ancestors.push(node);
                    }
                    for (var i = ancestors.length - 1; i >= 0; i--) {
                        node = ancestors[i];
                        if (node.state === STALE) {
                            updateComputation(node);
                        } else if (node.state === PENDING) {
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
                        runQueue(Updates);
                        Updates = null;
                    }
                    if (wait) return;
                    var e = Effects;
                    Effects = null;
                    if (e.length) runUpdates(function() {
                        return runEffects(e);
                    }, false);
                }
                function runQueue(queue) {
                    for (var i = 0; i < queue.length; i++) runTop(queue[i]);
                }
                function lookUpstream(node, ignore) {
                    node.state = 0;
                    for (var i = 0; i < node.sources.length; i += 1) {
                        var source = node.sources[i];
                        if (source.sources) {
                            var state = source.state;
                            if (state === STALE) {
                                if (source !== ignore && (!source.updatedAt || source.updatedAt < ExecCount)) runTop(source);
                            } else if (state === PENDING) lookUpstream(source, ignore);
                        }
                    }
                }
                function markDownstream(node) {
                    for (var i = 0; i < node.observers.length; i += 1) {
                        var o = node.observers[i];
                        if (!o.state) {
                            o.state = PENDING;
                            if (o.pure) Updates.push(o); else Effects.push(o);
                            o.observers && markDownstream(o);
                        }
                    }
                }
                function cleanNode(node) {
                    var i;
                    if (node.sources) {
                        while (node.sources.length) {
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
                    }
                    if (node.tOwned) {
                        for (i = node.tOwned.length - 1; i >= 0; i--) cleanNode(node.tOwned[i]);
                        delete node.tOwned;
                    }
                    if (node.owned) {
                        for (i = node.owned.length - 1; i >= 0; i--) cleanNode(node.owned[i]);
                        node.owned = null;
                    }
                    if (node.cleanups) {
                        for (i = node.cleanups.length - 1; i >= 0; i--) node.cleanups[i]();
                        node.cleanups = null;
                    }
                    node.state = 0;
                }
                function castError(err) {
                    if (err instanceof Error) return err;
                    return new Error(typeof err === "string" ? err : "Unknown error", {
                        cause: err
                    });
                }
                function handleError(err) {
                    var owner = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Owner;
                    var error = castError(err);
                    throw error;
                }
                function createComponent(Comp, props) {
                    return untrack(function() {
                        return Comp(props || {});
                    });
                }
                function trueFn() {
                    return true;
                }
                var propTraps = {
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
                function resolveSource(s) {
                    return !(s = typeof s === "function" ? s() : s) ? {} : s;
                }
                function resolveSources() {
                    for (var i = 0, length = this.length; i < length; ++i) {
                        var v = this[i]();
                        if (v !== undefined) return v;
                    }
                }
                function mergeProps() {
                    for (var _len = arguments.length, sources = new Array(_len), _key7 = 0; _key7 < _len; _key7++) {
                        sources[_key7] = arguments[_key7];
                    }
                    var proxy = false;
                    for (var i = 0; i < sources.length; i++) {
                        var s = sources[i];
                        proxy = proxy || !!s && $PROXY in s;
                        sources[i] = typeof s === "function" ? (proxy = true, createMemo(s)) : s;
                    }
                    if (SUPPORTS_PROXY && proxy) {
                        return new Proxy({
                            get: function get(property) {
                                for (var _i0 = sources.length - 1; _i0 >= 0; _i0--) {
                                    var v = resolveSource(sources[_i0])[property];
                                    if (v !== undefined) return v;
                                }
                            },
                            has: function has(property) {
                                for (var _i1 = sources.length - 1; _i1 >= 0; _i1--) {
                                    if (property in resolveSource(sources[_i1])) return true;
                                }
                                return false;
                            },
                            keys: function keys() {
                                var keys = [];
                                for (var _i10 = 0; _i10 < sources.length; _i10++) keys.push.apply(keys, _toConsumableArray(Object.keys(resolveSource(sources[_i10]))));
                                return _toConsumableArray(new Set(keys));
                            }
                        }, propTraps);
                    }
                    var sourcesMap = {};
                    var defined = Object.create(null);
                    for (var _i11 = sources.length - 1; _i11 >= 0; _i11--) {
                        var source = sources[_i11];
                        if (!source) continue;
                        var sourceKeys = Object.getOwnPropertyNames(source);
                        var _loop2 = function _loop2() {
                            var key = sourceKeys[_i12];
                            if (key === "__proto__" || key === "constructor") return 1;
                            var desc = Object.getOwnPropertyDescriptor(source, key);
                            if (!defined[key]) {
                                defined[key] = desc.get ? {
                                    enumerable: true,
                                    configurable: true,
                                    get: resolveSources.bind(sourcesMap[key] = [ desc.get.bind(source) ])
                                } : desc.value !== undefined ? desc : undefined;
                            } else {
                                var _sources = sourcesMap[key];
                                if (_sources) {
                                    if (desc.get) _sources.push(desc.get.bind(source)); else if (desc.value !== undefined) _sources.push(function() {
                                        return desc.value;
                                    });
                                }
                            }
                        };
                        for (var _i12 = sourceKeys.length - 1; _i12 >= 0; _i12--) {
                            if (_loop2()) continue;
                        }
                    }
                    var target = {};
                    var definedKeys = Object.keys(defined);
                    for (var _i13 = definedKeys.length - 1; _i13 >= 0; _i13--) {
                        var key = definedKeys[_i13], desc = defined[key];
                        if (desc && desc.get) Object.defineProperty(target, key, desc); else target[key] = desc ? desc.value : undefined;
                    }
                    return target;
                }
                var _createSignal = createSignal(void 0), _createSignal2 = _slicedToArray(_createSignal, 2), activeElement = _createSignal2[0], _setActiveElement = _createSignal2[1];
                ({
                    LEGACY: true
                });
                var DOM_RENDERING = typeof SOLIDTV_DOM_RENDERING !== "undefined" && SOLIDTV_DOM_RENDERING === true;
                var SHADERS_ENABLED = typeof SOLIDTV_DISABLE_SHADERS === "undefined" || SOLIDTV_DISABLE_SHADERS !== true;
                var isDomRendererActive = function isDomRendererActive() {
                    return DOM_RENDERING && Config.domRendererEnabled;
                };
                var Config = {
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
                };
                var NodeType = {
                    Element: "element",
                    TextNode: "textNode",
                    Text: "text"
                };
                var TextNode = _createClass(function TextNode(text) {
                    _classCallCheck(this, TextNode);
                    _defineProperty(this, "_type", "text");
                    _defineProperty(this, "parent", void 0);
                    _defineProperty(this, "text", void 0);
                    this.text = text;
                });
                function log(msg, node) {}
                var isFunction = function isFunction(obj) {
                    return typeof obj === "function";
                };
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
                    var _iterator10 = _createForOfIteratorHelper(keys), _step10;
                    try {
                        for (_iterator10.s(); !(_step10 = _iterator10.n()).done; ) {
                            var key = _step10.value;
                            if (key in obj) {
                                return true;
                            }
                        }
                    } catch (err) {
                        _iterator10.e(err);
                    } finally {
                        _iterator10.f();
                    }
                    return false;
                }
                function spliceItem(arr, item, deleteCount) {
                    var index = arr.indexOf(item);
                    if (index > -1) {
                        for (var _len2 = arguments.length, insert = new Array(_len2 > 3 ? _len2 - 3 : 0), _key8 = 3; _key8 < _len2; _key8++) {
                            insert[_key8 - 3] = arguments[_key8];
                        }
                        arr.splice.apply(arr, [ index, deleteCount ].concat(insert));
                    }
                    return index;
                }
                var colorToRgba = function colorToRgba(c) {
                    return "rgba(".concat(c >> 24 & 255, ",").concat(c >> 16 & 255, ",").concat(c >> 8 & 255, ",").concat((c & 255) / 255, ")");
                };
                function buildGradientStops(colors, stops) {
                    if (!Array.isArray(colors) || colors.length === 0) return "";
                    var positions = [];
                    if (Array.isArray(stops) && stops.length === colors.length) {
                        var _iterator11 = _createForOfIteratorHelper(stops), _step11;
                        try {
                            for (_iterator11.s(); !(_step11 = _iterator11.n()).done; ) {
                                var v = _step11.value;
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
                            _iterator11.e(err);
                        } finally {
                            _iterator11.f();
                        }
                    } else {
                        var lastIndex = colors.length - 1;
                        for (var i = 0; i < colors.length; i++) {
                            positions.push(lastIndex === 0 ? 0 : i / lastIndex * 100);
                        }
                    }
                    if (positions.length !== colors.length) {
                        while (positions.length < colors.length) positions.push(positions.length === 0 ? 0 : 100);
                    }
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
                    var fitType = (resizeMode === null || resizeMode === void 0 ? void 0 : resizeMode.type) || (srcPos ? "none" : "fill");
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
                        {
                            drawW = containerW;
                            drawH = containerH;
                            break;
                        }
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
                    if ((resizeMode === null || resizeMode === void 0 ? void 0 : resizeMode.type) === "none") {
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
                    if (targetW === regionW && targetH === regionH) return;
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
                            (_styleEl$setProperty = styleEl.setProperty) === null || _styleEl$setProperty === void 0 || _styleEl$setProperty.call(styleEl, "mask-size", "".concat(maskW, "px ").concat(maskH, "px"));
                            (_styleEl$setProperty2 = styleEl.setProperty) === null || _styleEl$setProperty2 === void 0 || _styleEl$setProperty2.call(styleEl, "mask-position", "".concat(maskPosX, "px ").concat(maskPosY, "px"));
                            (_styleEl$setProperty3 = styleEl.setProperty) === null || _styleEl$setProperty3 === void 0 || _styleEl$setProperty3.call(styleEl, "-webkit-mask-size", "".concat(maskW, "px ").concat(maskH, "px"));
                            (_styleEl$setProperty4 = styleEl.setProperty) === null || _styleEl$setProperty4 === void 0 || _styleEl$setProperty4.call(styleEl, "-webkit-mask-position", "".concat(maskPosX, "px ").concat(maskPosY, "px"));
                        }
                    }
                }
                function applyEasing(easing, progress) {
                    if (isFunction(easing)) {
                        return easing(progress);
                    }
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
                    var textureType = (_node$props$texture = node.props.texture) === null || _node$props$texture === void 0 ? void 0 : _node$props$texture.type;
                    return !!node.props.src || textureType === TextureType.image || textureType === TextureType.subTexture;
                }
                function normalizeBoundsMargin(margin) {
                    if (margin == null) return [ 0, 0, 0, 0 ];
                    if (typeof margin === "number") {
                        return [ margin, margin, margin, margin ];
                    }
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
                    var intersectsBounds = right >= expandedLeft && left <= expandedRight && bottom >= expandedTop && top <= expandedBottom;
                    if (!intersectsBounds) {
                        return 2;
                    }
                    var intersectsViewport = right >= rootLeft && left <= rootRight && bottom >= rootTop && top <= rootBottom;
                    if (intersectsViewport) {
                        return 8;
                    }
                    return 4;
                }
                var _styleRef = typeof document !== "undefined" ? ((_document$documentEle = document.documentElement) === null || _document$documentEle === void 0 ? void 0 : _document$documentEle.style) || {} : {};
                var supportsObjectFit = "objectFit" in _styleRef;
                var supportsObjectPosition = "objectPosition" in _styleRef;
                var supportsMixBlendMode = "mixBlendMode" in _styleRef;
                var supportsStandardMask = "maskImage" in _styleRef;
                var supportsWebkitMask = "webkitMaskImage" in _styleRef;
                var supportsCssMask = supportsStandardMask || supportsWebkitMask;
                var animationTasks = [];
                var animationFrameRequested = false;
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
                var AnimationController = function() {
                    function AnimationController(node, props, rawSettings) {
                        var _rawSettings$duration, _rawSettings$delay, _rawSettings$easing, _rawSettings$loop, _rawSettings$repeat, _rawSettings$adaptive;
                        _classCallCheck(this, AnimationController);
                        _defineProperty(this, "state", "paused");
                        _defineProperty(this, "stopPromise", null);
                        _defineProperty(this, "stopResolve", null);
                        _defineProperty(this, "propsStart", {});
                        _defineProperty(this, "propsEnd", {});
                        _defineProperty(this, "timeStart", performance.now());
                        _defineProperty(this, "timeEnd", void 0);
                        _defineProperty(this, "settings", void 0);
                        _defineProperty(this, "iteration", 0);
                        _defineProperty(this, "pausedTime", null);
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
                        for (var _i14 = 0, _Object$entries = Object.entries(props); _i14 < _Object$entries.length; _i14++) {
                            var _Object$entries$_i = _slicedToArray(_Object$entries[_i14], 2), prop = _Object$entries$_i[0], value = _Object$entries$_i[1];
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
                            } else {
                                this.timeStart = performance.now();
                            }
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
                            if (index !== -1) {
                                animationTasks.splice(index, 1);
                            }
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
                            var _this$stopPromise, _this25 = this;
                            (_this$stopPromise = this.stopPromise) !== null && _this$stopPromise !== void 0 ? _this$stopPromise : this.stopPromise = new Promise(function(resolve) {
                                _this25.stopResolve = resolve;
                            });
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
                function animate(props, settings) {
                    return new AnimationController(this, props, settings);
                }
                var elMap = new WeakMap;
                function updateNodeParent(node) {
                    var parent = node.props.parent;
                    if (parent instanceof DOMNode) {
                        elMap.get(parent).appendChild(node.div);
                    } else {
                        var _node$div$parentNode;
                        (_node$div$parentNode = node.div.parentNode) === null || _node$div$parentNode === void 0 || _node$div$parentNode.removeChild(node.div);
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
                    if (props.scale !== 1 && props.scale != null) {
                        transforms.push("scale(".concat(props.scale, ")"));
                    } else {
                        if (props.scaleX !== 1) transforms.push("scaleX(".concat(props.scaleX, ")"));
                        if (props.scaleY !== 1) transforms.push("scaleY(".concat(props.scaleY, ")"));
                    }
                    return transforms.join(" ");
                }
                function updateTransformOnly(node) {
                    var transform = buildTransformCSS(node.props);
                    var s = node.div.style;
                    if (transform.length > 0) {
                        s.transform = "".concat(transform);
                    } else {
                        s.transform = "";
                    }
                    updateRenderStateIfNeeded(node);
                }
                function updateRenderStateIfNeeded(node) {
                    if (!(node instanceof DOMNode) || node === node.stage.root) return;
                    var hasTextureSrc = nodeHasTextureSource(node);
                    if (hasTextureSrc && node.boundsDirty) {
                        var next = computeRenderStateForNode(node);
                        if (next != null) {
                            node.updateRenderState(next);
                        }
                        node.boundsDirty = false;
                    } else if (!hasTextureSrc) {
                        node.boundsDirty = false;
                    }
                }
                function applyLegacyObjectFit(node, img, srcPos) {
                    var _node$props$textureOp;
                    var resizeMode = (_node$props$textureOp = node.props.textureOptions) === null || _node$props$textureOp === void 0 ? void 0 : _node$props$textureOp.resizeMode;
                    var clipX = (resizeMode === null || resizeMode === void 0 ? void 0 : resizeMode.type) !== "contain" && resizeMode !== null && resizeMode !== void 0 && resizeMode.clipX ? resizeMode === null || resizeMode === void 0 ? void 0 : resizeMode.clipX : .5;
                    var clipY = (resizeMode === null || resizeMode === void 0 ? void 0 : resizeMode.type) !== "contain" && resizeMode !== null && resizeMode !== void 0 && resizeMode.clipY ? resizeMode === null || resizeMode === void 0 ? void 0 : resizeMode.clipY : .5;
                    computeLegacyObjectFit(node, img, resizeMode, clipX, clipY, srcPos, supportsObjectFit, supportsObjectPosition);
                }
                function updateNodeStyles(node) {
                    var props = node.props;
                    var style = "position: absolute; z-index: ".concat(props.zIndex, ";");
                    if (props.alpha !== 1) style += "opacity: ".concat(props.alpha, ";");
                    if (props.clipping) {
                        style += "overflow: hidden;";
                    }
                    {
                        var transform = buildTransformCSS(props);
                        if (transform.length > 0) {
                            style += "transform: ".concat(transform, ";");
                        }
                    }
                    if (node instanceof DOMText) {
                        var textProps = node.props;
                        if (textProps.color != null && textProps.color !== 0) {
                            style += "color: ".concat(colorToRgba(textProps.color), ";");
                        }
                        if (textProps.fontFamily) {
                            style += "font-family: ".concat(textProps.fontFamily, ";");
                        }
                        if (textProps.fontSize) {
                            style += "font-size: ".concat(textProps.fontSize, "px;");
                        }
                        if (textProps.fontStyle !== "normal") {
                            style += "font-style: ".concat(textProps.fontStyle, ";");
                        }
                        if (textProps.fontWeight !== "normal") {
                            style += "font-weight: ".concat(textProps.fontWeight, ";");
                        }
                        if (textProps.fontStretch && textProps.fontStretch !== "normal") {
                            style += "font-stretch: ".concat(textProps.fontStretch, ";");
                        }
                        if (textProps.lineHeight) {
                            style += "line-height: ".concat(textProps.lineHeight, "px;");
                        }
                        if (textProps.letterSpacing) {
                            style += "letter-spacing: ".concat(textProps.letterSpacing, "px;");
                        }
                        if (textProps.textAlign !== "left") {
                            style += "text-align: ".concat(textProps.textAlign, ";");
                        }
                        var maxLines = textProps.maxLines || Infinity;
                        switch (textProps.contain) {
                          case "width":
                            if (textProps.maxWidth && textProps.maxWidth > 0) {
                                if (node.textAlign === "center") {
                                    style += "width: ".concat(textProps.maxWidth, "px;");
                                } else {
                                    style += "max-width: ".concat(textProps.maxWidth, "px;");
                                }
                                style += "overflow: hidden;";
                            } else {
                                style += "width: 100%;";
                            }
                            break;

                          case "both":
                            {
                                var lineHeight = getNodeLineHeight(textProps);
                                var widthConstraint = textProps.maxWidth && textProps.maxWidth > 0 ? "".concat(textProps.maxWidth, "px") : "100%";
                                var heightConstraint = textProps.maxHeight && textProps.maxHeight > 0 ? textProps.maxHeight : props.h;
                                var height = heightConstraint || 0;
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
                        if (maxLines !== Infinity) {
                            style += "display: -webkit-box;\n        overflow: hidden;\n        -webkit-line-clamp: ".concat(maxLines, ";\n        line-clamp: ").concat(maxLines, ";\n        -webkit-box-orient: vertical;");
                        }
                        if (textProps.offsetY != null && textProps.offsetY !== 0) {
                            style += "margin-top: ".concat(textProps.offsetY, "px;");
                        }
                        if (textProps.wordBreak) {
                            var wb = textProps.wordBreak;
                            if (wb !== "normal") {
                                if (wb === "break-all") {
                                    style += "word-break: break-all;";
                                } else if (wb === "keep-all") {
                                    style += "word-break: keep-all;";
                                } else if (wb === "break-word") {
                                    style += "word-wrap: break-word; overflow-wrap: break-word;";
                                } else {
                                    style += "overflow-wrap: break-word;";
                                }
                            }
                        }
                    } else {
                        var _props$shader2;
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
                        } else if (props.src) {
                            rawImgSrc = props.src;
                        }
                        if (rawImgSrc) {
                            srcImg = "url(".concat(rawImgSrc, ")");
                        }
                        var bgStyle = "";
                        var borderStyle = "";
                        var radiusStyle = "";
                        var maskStyle = "";
                        var needsBackgroundLayer = false;
                        var imgStyle = "";
                        var hasDivBgTint = false;
                        var hasTint = false;
                        if (rawImgSrc) {
                            var _props$textureOptions2;
                            hasTint = props.color !== 4294967295 && props.color !== 0;
                            if (hasTint) {
                                bgStyle += "background-color: ".concat(colorToRgba(props.color), ";");
                                if (srcImg) {
                                    maskStyle += "mask-image: ".concat(srcImg, ";");
                                    if (srcPos !== null) {
                                        maskStyle += "mask-position: -".concat(srcPos.x, "px -").concat(srcPos.y, "px;");
                                    } else {
                                        maskStyle += "mask-size: 100% 100%;";
                                    }
                                    hasDivBgTint = true;
                                }
                            } else if (gradient) {
                                maskStyle += "mask-image: ".concat(gradient, ";");
                            }
                            var imgStyleParts = [ "position: absolute", "top: 0", "left: 0", "right: 0", "bottom: 0", "display: block", "pointer-events: none", "opacity: ".concat(node.imageLoading ? 0 : 1), "transition: opacity 100ms linear" ];
                            if ((_props$textureOptions2 = props.textureOptions.resizeMode) !== null && _props$textureOptions2 !== void 0 && _props$textureOptions2.type) {
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
                            if (hasTint) {
                                if (supportsMixBlendMode) {
                                    imgStyleParts.push("mix-blend-mode: multiply");
                                } else {
                                    imgStyleParts.push("opacity: 1");
                                }
                            }
                            imgStyle = imgStyleParts.join("; ") + ";";
                        } else if (gradient) {
                            bgStyle += "background-image: ".concat(gradient, ";");
                            bgStyle += "background-repeat: no-repeat;";
                            bgStyle += "background-size: 100% 100%;";
                        } else if (props.color !== 0) {
                            bgStyle += "background-color: ".concat(colorToRgba(props.color), ";");
                        }
                        if (((_props$shader2 = props.shader) === null || _props$shader2 === void 0 ? void 0 : _props$shader2.props) != null) {
                            var _shaderProps$borderG, _shaderProps$borderA;
                            var shaderProps = props.shader.props;
                            var borderWidth = shaderProps["border-w"];
                            var borderColor = shaderProps["border-color"];
                            var borderGap = (_shaderProps$borderG = shaderProps["border-gap"]) !== null && _shaderProps$borderG !== void 0 ? _shaderProps$borderG : 0;
                            var borderAlign = (_shaderProps$borderA = shaderProps["border-align"]) !== null && _shaderProps$borderA !== void 0 ? _shaderProps$borderA : "inside";
                            var radius = shaderProps["radius"];
                            var borderWidthIsNumber = typeof borderWidth === "number";
                            var borderWidthIsArray = Array.isArray(borderWidth);
                            var borderWidthHasValue = borderWidthIsNumber && borderWidth !== 0 || borderWidthIsArray && borderWidth.some(function(w) {
                                return typeof w === "number" && w !== 0;
                            });
                            if (borderWidthHasValue && typeof borderColor === "number" && borderColor !== 0) {
                                var rgbaColor = colorToRgba(borderColor);
                                if (borderWidthIsNumber) {
                                    var insideWidth = 0;
                                    var outsideWidth = 0;
                                    if (borderAlign === "inside") {
                                        insideWidth = borderWidth;
                                    } else if (borderAlign === "center") {
                                        insideWidth = borderWidth / 2;
                                        outsideWidth = borderWidth / 2;
                                    } else {
                                        outsideWidth = borderWidth;
                                    }
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
                                    if (outsideWidth > 0) {
                                        shadows.push("0 0 0 ".concat(outsideWidth, "px ").concat(rgbaColor));
                                    }
                                    if (insideWidth > 0) {
                                        shadows.push("inset 0 0 0 ".concat(insideWidth, "px ").concat(rgbaColor));
                                    }
                                    if (shadows.length > 0) {
                                        borderStyle += "box-shadow: ".concat(shadows.join(", "), ";");
                                    }
                                } else if (borderWidthIsArray) {
                                    var _shaderProps$borderT, _shaderProps$borderR, _shaderProps$borderB, _shaderProps$borderL;
                                    var topWidth = (_shaderProps$borderT = shaderProps["border-top"]) !== null && _shaderProps$borderT !== void 0 ? _shaderProps$borderT : borderWidth[0];
                                    var rightWidth = (_shaderProps$borderR = shaderProps["border-right"]) !== null && _shaderProps$borderR !== void 0 ? _shaderProps$borderR : borderWidth[1];
                                    var bottomWidth = (_shaderProps$borderB = shaderProps["border-bottom"]) !== null && _shaderProps$borderB !== void 0 ? _shaderProps$borderB : borderWidth[2];
                                    var leftWidth = (_shaderProps$borderL = shaderProps["border-left"]) !== null && _shaderProps$borderL !== void 0 ? _shaderProps$borderL : borderWidth[3];
                                    var widths = [ topWidth, rightWidth, bottomWidth, leftWidth ];
                                    var sides = [ "top", "right", "bottom", "left" ];
                                    for (var i = 0; i < sides.length; i++) {
                                        var width = widths[i];
                                        if (typeof width === "number" && width !== 0) {
                                            borderStyle += "border-".concat(sides[i], ": ").concat(width, "px solid ").concat(rgbaColor, ";");
                                        }
                                    }
                                }
                            }
                            if (typeof radius === "number" && radius > 0) {
                                radiusStyle += "border-radius: ".concat(radius, "px;");
                            } else if (Array.isArray(radius) && radius.length === 4) {
                                radiusStyle += "border-radius: ".concat(radius[0], "px ").concat(radius[1], "px ").concat(radius[2], "px ").concat(radius[3], "px;");
                            }
                            if ("radial" in shaderProps) {
                                var rg = shaderProps.radial;
                                var colors = Array.isArray(rg === null || rg === void 0 ? void 0 : rg.colors) ? rg.colors : [];
                                var stops = Array.isArray(rg === null || rg === void 0 ? void 0 : rg.stops) ? rg.stops : void 0;
                                var pivot = Array.isArray(rg === null || rg === void 0 ? void 0 : rg.pivot) ? rg.pivot : [ .5, .5 ];
                                var _width = typeof (rg === null || rg === void 0 ? void 0 : rg.w) === "number" ? rg.w : props.w || 0;
                                var _height = typeof (rg === null || rg === void 0 ? void 0 : rg.h) === "number" ? rg.h : _width;
                                if (colors.length > 0) {
                                    var gradientStops = buildGradientStops(colors, stops);
                                    if (gradientStops) {
                                        if (colors.length === 1) {
                                            if (srcImg || gradient) {
                                                maskStyle += "mask-image: linear-gradient(".concat(gradientStops, ");");
                                            } else {
                                                bgStyle += "background-color: ".concat(colorToRgba(colors[0]), ";");
                                            }
                                        } else {
                                            var _pivot$, _pivot$2;
                                            var isEllipse = _width > 0 && _height > 0 && _width !== _height;
                                            var pivotX = ((_pivot$ = pivot[0]) !== null && _pivot$ !== void 0 ? _pivot$ : .5) * 100;
                                            var pivotY = ((_pivot$2 = pivot[1]) !== null && _pivot$2 !== void 0 ? _pivot$2 : .5) * 100;
                                            var sizePart = "";
                                            if (_width > 0 && _height > 0) {
                                                if (!isEllipse && _width === _height) {
                                                    sizePart = "".concat(Math.round(_width), "px");
                                                } else {
                                                    sizePart = "".concat(Math.round(_width), "px ").concat(Math.round(_height), "px");
                                                }
                                            } else {
                                                sizePart = "closest-side";
                                            }
                                            var radialGradient = "radial-gradient(".concat(isEllipse ? "ellipse" : "circle", " ").concat(sizePart, " at ").concat(pivotX.toFixed(2), "% ").concat(pivotY.toFixed(2), "%, ").concat(gradientStops, ")");
                                            if (srcImg || gradient) {
                                                maskStyle += "mask-image: ".concat(radialGradient, ";");
                                            } else {
                                                bgStyle += "background-image: ".concat(radialGradient, ";");
                                                bgStyle += "background-repeat: no-repeat;";
                                                bgStyle += "background-size: 100% 100%;";
                                            }
                                        }
                                    }
                                }
                            }
                            if ("linear" in shaderProps) {
                                var lg = shaderProps.linear;
                                var _colors = Array.isArray(lg === null || lg === void 0 ? void 0 : lg.colors) ? lg.colors : [];
                                var _stops = Array.isArray(lg === null || lg === void 0 ? void 0 : lg.stops) ? lg.stops : void 0;
                                var angleRad = typeof (lg === null || lg === void 0 ? void 0 : lg.angle) === "number" ? lg.angle : 0;
                                if (_colors.length > 0) {
                                    var _gradientStops = buildGradientStops(_colors, _stops);
                                    if (_gradientStops) {
                                        if (_colors.length === 1) {
                                            if (srcImg || gradient) {
                                                maskStyle += "mask-image: linear-gradient(".concat(_gradientStops, ");");
                                            } else {
                                                bgStyle += "background-color: ".concat(colorToRgba(_colors[0]), ";");
                                            }
                                        } else {
                                            var angleDeg = 180 * (angleRad / Math.PI - 1);
                                            var linearGradient = "linear-gradient(".concat(angleDeg.toFixed(2), "deg, ").concat(_gradientStops, ")");
                                            if (srcImg || gradient) {
                                                maskStyle += "mask-image: ".concat(linearGradient, ";");
                                            } else {
                                                bgStyle += "background-image: ".concat(linearGradient, ";");
                                                bgStyle += "background-repeat: no-repeat;";
                                                bgStyle += "background-size: 100% 100%;";
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        if (maskStyle !== "") {
                            if (!supportsStandardMask && supportsWebkitMask) {
                                maskStyle = maskStyle.replace(/mask-/g, "-webkit-mask-");
                            } else if (!supportsCssMask) {
                                maskStyle = "";
                            }
                            if (maskStyle !== "") {
                                needsBackgroundLayer = true;
                            }
                        }
                        if (!needsBackgroundLayer && rawImgSrc) {
                            needsBackgroundLayer = hasTint || !!gradient || srcPos !== null || radiusStyle !== "" || bgStyle !== "";
                        }
                        style += radiusStyle;
                        if (needsBackgroundLayer) {
                            if (node.divBg == null) {
                                node.divBg = document.createElement("div");
                                node.div.insertBefore(node.divBg, node.div.firstChild);
                            } else if (node.divBg.parentElement !== node.div) {
                                node.div.insertBefore(node.divBg, node.div.firstChild);
                            }
                            var isSyncSubtextureUpdate = rawImgSrc != null && srcPos != null && !!node.imgEl && node.imgEl.complete && node.imgEl.dataset.rawSrc === rawImgSrc;
                            if (isSyncSubtextureUpdate) {
                                node.imageLoading = true;
                            }
                            var bgLayerStyle = "position: absolute; top:0; left:0; right:0; bottom:0; z-index: -1; pointer-events: none;";
                            if (srcPos !== null && !hasDivBgTint) {
                                bgLayerStyle += "overflow: hidden;";
                            }
                            if (bgStyle) {
                                bgLayerStyle += bgStyle;
                            }
                            if (maskStyle) {
                                bgLayerStyle += maskStyle;
                            }
                            if (hasDivBgTint && srcPos != null && node.imageLoading) {
                                bgLayerStyle += "opacity: 0;";
                            }
                            node.divBg.setAttribute("style", bgLayerStyle + radiusStyle);
                            if (rawImgSrc) {
                                if (!node.imgEl) {
                                    node.imgEl = document.createElement("img");
                                    node.imgEl.alt = "";
                                    node.imgEl.crossOrigin = "anonymous";
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
                                        if (!node.lazyImageSubTextureProps) {
                                            applyLegacyObjectFit(node, node.imgEl, null);
                                        }
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
                                        var failedSrc = ((_node$imgEl = node.imgEl) === null || _node$imgEl === void 0 ? void 0 : _node$imgEl.dataset.pendingSrc) || node.lazyImagePendingSrc || "";
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
                                if (node.imgEl.parentElement !== node.divBg) {
                                    node.divBg.appendChild(node.imgEl);
                                }
                                node.imgEl.setAttribute("style", imgStyle + radiusStyle);
                                if (hasDivBgTint) {
                                    node.imgEl.style.visibility = "hidden";
                                }
                                if (isRenderStateInBounds(node.renderState)) {
                                    node.applyPendingImageSrc();
                                } else if (!node.imgEl.dataset.rawSrc) {
                                    node.imgEl.removeAttribute("src");
                                }
                                if (srcPos && node.imgEl.complete && node.imgEl.dataset.rawSrc === rawImgSrc) {
                                    applySubTextureScaling(node, node.imgEl, srcPos);
                                    if (node.imageLoading) {
                                        node.imageLoading = false;
                                        node.imgEl.style.opacity = "1";
                                        node.showBackgroundLayer();
                                    }
                                }
                                if (!srcPos && node.imgEl.complete && (!supportsObjectFit || !supportsObjectPosition) && node.imgEl.dataset.rawSrc === rawImgSrc) {
                                    applyLegacyObjectFit(node, node.imgEl, srcPos);
                                }
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
                            var _isSyncSubtextureUpdate = srcPos != null && !!node.imgEl && node.imgEl.complete && node.imgEl.dataset.rawSrc === rawImgSrc;
                            if (_isSyncSubtextureUpdate) {
                                node.imageLoading = true;
                            }
                            if (!node.imgEl) {
                                node.imgEl = document.createElement("img");
                                node.imgEl.alt = "";
                                node.imgEl.crossOrigin = "anonymous";
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
                                    if (!node.lazyImageSubTextureProps) {
                                        applyLegacyObjectFit(node, node.imgEl, null);
                                    }
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
                                    var failedSrc = ((_node$imgEl2 = node.imgEl) === null || _node$imgEl2 === void 0 ? void 0 : _node$imgEl2.dataset.pendingSrc) || node.lazyImagePendingSrc || "";
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
                            if (node.imgEl.parentElement !== node.div) {
                                node.div.appendChild(node.imgEl);
                            }
                            node.imgEl.setAttribute("style", imgStyle + radiusStyle);
                            if (isRenderStateInBounds(node.renderState)) {
                                node.applyPendingImageSrc();
                            } else if (!node.imgEl.dataset.rawSrc) {
                                node.imgEl.removeAttribute("src");
                            }
                            if (srcPos && node.imgEl.complete && node.imgEl.dataset.rawSrc === rawImgSrc) {
                                applySubTextureScaling(node, node.imgEl, srcPos);
                                if (node.imageLoading) {
                                    node.imageLoading = false;
                                    node.imgEl.style.opacity = "1";
                                }
                            }
                            if (!srcPos && node.imgEl.complete && (!supportsObjectFit || !supportsObjectPosition) && node.imgEl.dataset.rawSrc === rawImgSrc) {
                                applyLegacyObjectFit(node, node.imgEl, srcPos);
                            }
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
                        var needsSeparateBorderLayer = needsBackgroundLayer && maskStyle !== "";
                        if (needsSeparateBorderLayer) {
                            if (node.divBorder == null) {
                                node.divBorder = document.createElement("div");
                                node.div.appendChild(node.divBorder);
                            }
                        } else if (node.divBorder) {
                            node.divBorder.remove();
                            node.divBorder = void 0;
                        }
                        if (node.divBorder == null) {
                            style += borderStyle;
                        } else {
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
                var textNodesToMeasure = new Set;
                var containTextNodes = new Set;
                var fontLoadingListenerSetup = false;
                function getElSize(node) {
                    var _Config$rendererOptio, _Config$rendererOptio2;
                    var rawRect = node.div.getBoundingClientRect();
                    var dpr = (_Config$rendererOptio = (_Config$rendererOptio2 = Config.rendererOptions) === null || _Config$rendererOptio2 === void 0 ? void 0 : _Config$rendererOptio2.deviceLogicalPixelRatio) !== null && _Config$rendererOptio !== void 0 ? _Config$rendererOptio : 1;
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
                        if (node.parent instanceof DOMNode) {
                            node = node.parent;
                        } else {
                            break;
                        }
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
                    if (shouldTrackContainTextNode(node)) {
                        containTextNodes.add(node);
                    } else {
                        containTextNodes.delete(node);
                    }
                }
                function scheduleContainTextNodesMeasurement() {
                    if (containTextNodes.size === 0) return;
                    containTextNodes.forEach(function(node) {
                        if (node.div.isConnected) {
                            textNodesToMeasure.add(node);
                        }
                    });
                    if (textNodesToMeasure.size > 0) {
                        setTimeout(updateDOMTextMeasurements);
                    }
                }
                function setupFontLoadingListeners() {
                    if (fontLoadingListenerSetup) return;
                    if (typeof document === "undefined" || !document.fonts) {
                        return;
                    }
                    var fonts = document.fonts;
                    if (typeof fonts.addEventListener === "function") {
                        fonts.addEventListener("loadingdone", scheduleContainTextNodesMeasurement);
                    }
                    fontLoadingListenerSetup = true;
                }
                function scheduleUpdateDOMTextMeasurement(node) {
                    setupFontLoadingListeners();
                    if (textNodesToMeasure.size === 0) {
                        if (typeof document !== "undefined" && "fonts" in document) {
                            var fonts = document.fonts;
                            if (fonts.status === "loaded") {
                                setTimeout(updateDOMTextMeasurements);
                            } else if (fonts.ready != null && typeof fonts.ready.then === "function") {
                                void fonts.ready.then(updateDOMTextMeasurements);
                            } else {
                                setTimeout(updateDOMTextMeasurements, 500);
                            }
                        } else {
                            setTimeout(updateDOMTextMeasurements, 500);
                        }
                    }
                    textNodesToMeasure.add(node);
                }
                function updateNodeData(node) {
                    var data = node.data;
                    for (var key in data) {
                        var keyValue = data[key];
                        if (keyValue === void 0) {
                            node.div.removeAttribute("data-" + key);
                        } else {
                            node.div.dataset[key] = String(keyValue);
                        }
                    }
                }
                function resolveNodeDefaults(props) {
                    var _props$color2, _props$x2, _props$y2, _props$w4, _props$h4, _props$alpha2, _props$autosize2, _props$boundsMargin2, _props$clipping2, _props$colorTop, _props$colorBottom, _props$colorLeft, _props$colorRight, _ref32, _ref33, _props$colorBl2, _ref34, _ref35, _props$colorBr2, _ref36, _ref37, _props$colorTl2, _ref38, _ref39, _props$colorTr2, _props$zIndex2, _props$parent2, _props$texture2, _props$textureOptions3, _props$shader3, _props$src3, _props$scale2, _ref40, _props$scaleX2, _ref41, _props$scaleY2, _props$mount2, _ref42, _props$mountX2, _ref43, _props$mountY2, _props$pivot2, _ref44, _props$pivotX2, _ref45, _props$pivotY2, _props$rotation2, _props$rtt2;
                    var color = (_props$color2 = props.color) !== null && _props$color2 !== void 0 ? _props$color2 : 0;
                    return {
                        x: (_props$x2 = props.x) !== null && _props$x2 !== void 0 ? _props$x2 : 0,
                        y: (_props$y2 = props.y) !== null && _props$y2 !== void 0 ? _props$y2 : 0,
                        w: (_props$w4 = props.w) !== null && _props$w4 !== void 0 ? _props$w4 : 0,
                        h: (_props$h4 = props.h) !== null && _props$h4 !== void 0 ? _props$h4 : 0,
                        alpha: (_props$alpha2 = props.alpha) !== null && _props$alpha2 !== void 0 ? _props$alpha2 : 1,
                        autosize: (_props$autosize2 = props.autosize) !== null && _props$autosize2 !== void 0 ? _props$autosize2 : false,
                        boundsMargin: (_props$boundsMargin2 = props.boundsMargin) !== null && _props$boundsMargin2 !== void 0 ? _props$boundsMargin2 : null,
                        clipping: (_props$clipping2 = props.clipping) !== null && _props$clipping2 !== void 0 ? _props$clipping2 : false,
                        color: color,
                        colorTop: (_props$colorTop = props.colorTop) !== null && _props$colorTop !== void 0 ? _props$colorTop : color,
                        colorBottom: (_props$colorBottom = props.colorBottom) !== null && _props$colorBottom !== void 0 ? _props$colorBottom : color,
                        colorLeft: (_props$colorLeft = props.colorLeft) !== null && _props$colorLeft !== void 0 ? _props$colorLeft : color,
                        colorRight: (_props$colorRight = props.colorRight) !== null && _props$colorRight !== void 0 ? _props$colorRight : color,
                        colorBl: (_ref32 = (_ref33 = (_props$colorBl2 = props.colorBl) !== null && _props$colorBl2 !== void 0 ? _props$colorBl2 : props.colorBottom) !== null && _ref33 !== void 0 ? _ref33 : props.colorLeft) !== null && _ref32 !== void 0 ? _ref32 : color,
                        colorBr: (_ref34 = (_ref35 = (_props$colorBr2 = props.colorBr) !== null && _props$colorBr2 !== void 0 ? _props$colorBr2 : props.colorBottom) !== null && _ref35 !== void 0 ? _ref35 : props.colorRight) !== null && _ref34 !== void 0 ? _ref34 : color,
                        colorTl: (_ref36 = (_ref37 = (_props$colorTl2 = props.colorTl) !== null && _props$colorTl2 !== void 0 ? _props$colorTl2 : props.colorTop) !== null && _ref37 !== void 0 ? _ref37 : props.colorLeft) !== null && _ref36 !== void 0 ? _ref36 : color,
                        colorTr: (_ref38 = (_ref39 = (_props$colorTr2 = props.colorTr) !== null && _props$colorTr2 !== void 0 ? _props$colorTr2 : props.colorTop) !== null && _ref39 !== void 0 ? _ref39 : props.colorRight) !== null && _ref38 !== void 0 ? _ref38 : color,
                        zIndex: (_props$zIndex2 = props.zIndex) !== null && _props$zIndex2 !== void 0 ? _props$zIndex2 : 0,
                        parent: (_props$parent2 = props.parent) !== null && _props$parent2 !== void 0 ? _props$parent2 : null,
                        texture: (_props$texture2 = props.texture) !== null && _props$texture2 !== void 0 ? _props$texture2 : null,
                        textureOptions: (_props$textureOptions3 = props.textureOptions) !== null && _props$textureOptions3 !== void 0 ? _props$textureOptions3 : {},
                        shader: (_props$shader3 = props.shader) !== null && _props$shader3 !== void 0 ? _props$shader3 : defaultShader,
                        src: (_props$src3 = props.src) !== null && _props$src3 !== void 0 ? _props$src3 : null,
                        srcHeight: props.srcHeight,
                        srcWidth: props.srcWidth,
                        srcX: props.srcX,
                        srcY: props.srcY,
                        scale: (_props$scale2 = props.scale) !== null && _props$scale2 !== void 0 ? _props$scale2 : null,
                        scaleX: (_ref40 = (_props$scaleX2 = props.scaleX) !== null && _props$scaleX2 !== void 0 ? _props$scaleX2 : props.scale) !== null && _ref40 !== void 0 ? _ref40 : 1,
                        scaleY: (_ref41 = (_props$scaleY2 = props.scaleY) !== null && _props$scaleY2 !== void 0 ? _props$scaleY2 : props.scale) !== null && _ref41 !== void 0 ? _ref41 : 1,
                        mount: (_props$mount2 = props.mount) !== null && _props$mount2 !== void 0 ? _props$mount2 : 0,
                        mountX: (_ref42 = (_props$mountX2 = props.mountX) !== null && _props$mountX2 !== void 0 ? _props$mountX2 : props.mount) !== null && _ref42 !== void 0 ? _ref42 : 0,
                        mountY: (_ref43 = (_props$mountY2 = props.mountY) !== null && _props$mountY2 !== void 0 ? _props$mountY2 : props.mount) !== null && _ref43 !== void 0 ? _ref43 : 0,
                        pivot: (_props$pivot2 = props.pivot) !== null && _props$pivot2 !== void 0 ? _props$pivot2 : .5,
                        pivotX: (_ref44 = (_props$pivotX2 = props.pivotX) !== null && _props$pivotX2 !== void 0 ? _props$pivotX2 : props.pivot) !== null && _ref44 !== void 0 ? _ref44 : .5,
                        pivotY: (_ref45 = (_props$pivotY2 = props.pivotY) !== null && _props$pivotY2 !== void 0 ? _props$pivotY2 : props.pivot) !== null && _ref45 !== void 0 ? _ref45 : .5,
                        rotation: (_props$rotation2 = props.rotation) !== null && _props$rotation2 !== void 0 ? _props$rotation2 : 0,
                        rtt: (_props$rtt2 = props.rtt) !== null && _props$rtt2 !== void 0 ? _props$rtt2 : false,
                        data: {},
                        imageType: props.imageType
                    };
                }
                function resolveTextNodeDefaults(props) {
                    var _props$text2, _props$textRendererOv2, _props$fontSize, _props$fontFamily, _props$fontStyle, _props$fontWeight, _props$forceLoad, _props$textAlign, _props$contain, _props$offsetY, _props$letterSpacing, _props$lineHeight, _props$maxLines, _props$maxWidth, _props$maxHeight, _props$verticalAlign, _props$overflowSuffix, _props$wordBreak;
                    return _objectSpread(_objectSpread({}, resolveNodeDefaults(props)), {}, {
                        text: (_props$text2 = props.text) !== null && _props$text2 !== void 0 ? _props$text2 : "",
                        textRendererOverride: (_props$textRendererOv2 = props.textRendererOverride) !== null && _props$textRendererOv2 !== void 0 ? _props$textRendererOv2 : null,
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
                var defaultShader = {
                    shaderType: "",
                    props: void 0
                };
                var lastNodeId = 0;
                var CoreNodeRenderStateMap = new Map([ [ 0, "init" ], [ 2, "outOfBounds" ], [ 4, "inBounds" ], [ 8, "inViewport" ] ]);
                var DOMNode = function(_EventEmitter6) {
                    function DOMNode(stage, props) {
                        var _this26;
                        _classCallCheck(this, DOMNode);
                        _this26 = _callSuper(this, DOMNode);
                        _defineProperty(_this26, "div", document.createElement("div"));
                        _defineProperty(_this26, "divBg", void 0);
                        _defineProperty(_this26, "divBorder", void 0);
                        _defineProperty(_this26, "imgEl", void 0);
                        _defineProperty(_this26, "imageLoading", false);
                        _defineProperty(_this26, "lazyImagePendingSrc", null);
                        _defineProperty(_this26, "lazyImageSubTextureProps", null);
                        _defineProperty(_this26, "boundsDirty", true);
                        _defineProperty(_this26, "children", new Set);
                        _defineProperty(_this26, "_lastStyleStr", "");
                        _defineProperty(_this26, "id", ++lastNodeId);
                        _defineProperty(_this26, "renderState", 0);
                        _defineProperty(_this26, "preventCleanup", true);
                        _defineProperty(_this26, "animate", animate);
                        _this26.stage = stage;
                        _this26.props = props;
                        _this26.div._node = _this26;
                        _this26.div.setAttribute("data-id", String(_this26.id));
                        elMap.set(_this26, _this26.div);
                        var parent = _this26.props.parent;
                        if (parent instanceof DOMNode) {
                            parent.children.add(_this26);
                        }
                        updateNodeParent(_this26);
                        updateNodeStyles(_this26);
                        updateNodeData(_this26);
                        return _this26;
                    }
                    _inherits(DOMNode, _EventEmitter6);
                    return _createClass(DOMNode, [ {
                        key: "destroy",
                        value: function destroy() {
                            var _this$div$parentNode;
                            elMap.delete(this);
                            var parent = this.props.parent;
                            if (parent instanceof DOMNode) {
                                parent.children.delete(this);
                            }
                            (_this$div$parentNode = this.div.parentNode) === null || _this$div$parentNode === void 0 || _this$div$parentNode.removeChild(this.div);
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
                            var _iterator12 = _createForOfIteratorHelper(this.children), _step12;
                            try {
                                for (_iterator12.s(); !(_step12 = _iterator12.n()).done; ) {
                                    var child = _step12.value;
                                    child.boundsDirty = true;
                                    if (child !== child.stage.root) {
                                        if (nodeHasTextureSource(child)) {
                                            var nextState = computeRenderStateForNode(child);
                                            if (nextState != null) {
                                                child.updateRenderState(nextState);
                                            }
                                        }
                                        child.boundsDirty = false;
                                    }
                                    child.markChildrenBoundsDirty();
                                }
                            } catch (err) {
                                _iterator12.e(err);
                            } finally {
                                _iterator12.f();
                            }
                        }
                    }, {
                        key: "updateRenderState",
                        value: function updateRenderState(renderState) {
                            if (renderState === this.renderState) return;
                            var previous = this.renderState;
                            this.renderState = renderState;
                            var event = CoreNodeRenderStateMap.get(renderState);
                            if (isRenderStateInBounds(renderState)) {
                                this.applyPendingImageSrc();
                            }
                            if (event && event !== "init") {
                                this.emit(event, {
                                    previous: previous,
                                    current: renderState
                                });
                            }
                            if (this.imgEl) {
                                this.imgEl.dataset.state = event;
                            }
                        }
                    }, {
                        key: "showBackgroundLayer",
                        value: function showBackgroundLayer() {
                            if (this.divBg) {
                                this.divBg.style.opacity = "1";
                            }
                        }
                    }, {
                        key: "hideMaskedBackgroundLayer",
                        value: function hideMaskedBackgroundLayer() {
                            if (this.divBg && (this.divBg.style.maskImage || this.divBg.style.webkitMaskImage)) {
                                this.divBg.style.opacity = "0";
                            }
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
                var DOMText = function(_DOMNode2) {
                    function DOMText(stage, props) {
                        var _this27;
                        _classCallCheck(this, DOMText);
                        _this27 = _callSuper(this, DOMText, [ stage, props ]);
                        _defineProperty(_this27, "loaded", false);
                        _this27.props = props;
                        _this27.div.innerText = props.text;
                        updateNodeStyles(_this27);
                        updateDOMTextSize(_this27, false);
                        syncContainTextNodeTracking(_this27);
                        scheduleUpdateDOMTextMeasurement(_this27);
                        return _this27;
                    }
                    _inherits(DOMText, _DOMNode2);
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
                var DOMRendererMain = function() {
                    function DOMRendererMain(settings, rawTarget) {
                        var _settings$appWidth2, _settings$appHeight2;
                        _classCallCheck(this, DOMRendererMain);
                        _defineProperty(this, "root", void 0);
                        _defineProperty(this, "canvas", void 0);
                        _defineProperty(this, "stage", void 0);
                        _defineProperty(this, "eventListeners", new Map);
                        this.settings = settings;
                        var target;
                        if (typeof rawTarget === "string") {
                            var result = document.getElementById(rawTarget);
                            if (result instanceof HTMLElement) {
                                target = result;
                            } else {
                                throw new Error("Target #".concat(rawTarget, " not found"));
                            }
                        } else {
                            target = rawTarget;
                        }
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
                                var _loadFont = _asyncToGenerator(_regenerator().m(function _callee16() {
                                    return _regenerator().w(function(_context16) {
                                        while (1) switch (_context16.n) {
                                          case 0:
                                            return _context16.a(2);
                                        }
                                    }, _callee16);
                                }));
                                function loadFont() {
                                    return _loadFont.apply(this, arguments);
                                }
                                return loadFont;
                            }(),
                            cleanup: function cleanup() {},
                            requestRender: function requestRender() {},
                            drawFrame: function drawFrame() {}
                        };
                        this.root = new DOMNode(this.stage, resolveNodeDefaults({
                            w: (_settings$appWidth2 = settings.appWidth) !== null && _settings$appWidth2 !== void 0 ? _settings$appWidth2 : 1920,
                            h: (_settings$appHeight2 = settings.appHeight) !== null && _settings$appHeight2 !== void 0 ? _settings$appHeight2 : 1080,
                            shader: defaultShader,
                            zIndex: 1
                        }));
                        this.stage.root = this.root;
                        target.appendChild(this.root.div);
                        if (Config.fontSettings.fontFamily) {
                            this.root.div.style.fontFamily = Config.fontSettings.fontFamily;
                        }
                        if (Config.fontSettings.fontSize) {
                            this.root.div.style.fontSize = Config.fontSettings.fontSize + "px";
                        }
                        if (Config.fontSettings.lineHeight) {
                            this.root.div.style.lineHeight = Config.fontSettings.lineHeight + "px";
                        } else {
                            this.root.div.style.lineHeight = "1.2";
                        }
                        if (Config.fontSettings.fontWeight) {
                            if (typeof Config.fontSettings.fontWeight === "number") {
                                this.root.div.style.fontWeight = Config.fontSettings.fontWeight + "px";
                            } else {
                                this.root.div.style.fontWeight = Config.fontSettings.fontWeight;
                            }
                        }
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
                            var _this28 = this;
                            var _wrappedListener = function wrappedListener(target, data) {
                                _this28.off(event, _wrappedListener);
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
                                if (listeners.size === 0) {
                                    this.eventListeners.delete(event);
                                }
                            }
                        }
                    }, {
                        key: "emit",
                        value: function emit(event, targetOrData, maybeData) {
                            var listeners = this.eventListeners.get(event);
                            if (!listeners || listeners.size === 0) {
                                return;
                            }
                            var hasExplicitTarget = arguments.length === 3;
                            var target = hasExplicitTarget ? targetOrData : this.root;
                            var data = hasExplicitTarget ? maybeData : targetOrData;
                            for (var _i15 = 0, _Array$from = Array.from(listeners); _i15 < _Array$from.length; _i15++) {
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
                            for (var _len3 = arguments.length, args = new Array(_len3), _key9 = 0; _key9 < _len3; _key9++) {
                                args[_key9] = arguments[_key9];
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
                function hexColor() {
                    var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
                    if (isInteger(color)) {
                        return color;
                    }
                    if (typeof color === "string") {
                        var hex;
                        if (color.charCodeAt(0) === 35) {
                            hex = color.length === 7 ? color.slice(1) + "ff" : color.slice(1);
                        } else if (color.charCodeAt(0) === 48 && color.charCodeAt(1) === 120) {
                            hex = color.slice(2);
                        } else {
                            hex = color.length === 6 ? color + "ff" : color;
                        }
                        return parseInt(hex, 16);
                    }
                    return 0;
                }
                var renderer$2;
                function startLightningRenderer(options) {
                    var rootId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "app";
                    var enableDomRenderer = DOM_RENDERING && Config.domRendererEnabled;
                    renderer$2 = enableDomRenderer ? new DOMRendererMain(options, rootId) : new RendererMain(options, rootId);
                    return renderer$2;
                }
                function splash(options) {
                    var src = options.src, w = options.w, h = options.h, _options$bgColor = options.bgColor, bgColor = _options$bgColor === void 0 ? 255 : _options$bgColor;
                    var root = renderer$2.root;
                    var background = renderer$2.createNode({
                        x: 0,
                        y: 0,
                        w: root.w,
                        h: root.h,
                        color: hexColor(bgColor),
                        parent: root,
                        zIndex: 1e3
                    });
                    var image = renderer$2.createNode({
                        x: (root.w - w) / 2,
                        y: (root.h - h) / 2,
                        w: w,
                        h: h,
                        src: src,
                        parent: background
                    });
                    var nodes = [ background, image ];
                    renderer$2.stage.drawFrame();
                    var destroy = function destroy() {
                        for (var _i16 = 0, _nodes = nodes; _i16 < _nodes.length; _i16++) {
                            var node = _nodes[_i16];
                            node.destroy();
                        }
                    };
                    return {
                        destroy: destroy,
                        fadeOut: function fadeOut() {
                            var _arguments = arguments;
                            return _asyncToGenerator(_regenerator().m(function _callee17() {
                                var duration;
                                return _regenerator().w(function(_context17) {
                                    while (1) switch (_context17.n) {
                                      case 0:
                                        duration = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 300;
                                        _context17.n = 1;
                                        return Promise.all(nodes.map(function(node) {
                                            return node.animate({
                                                alpha: 0
                                            }, {
                                                duration: duration
                                            }).start().waitUntilStopped();
                                        }));

                                      case 1:
                                        destroy();

                                      case 2:
                                        return _context17.a(2);
                                    }
                                }, _callee17);
                            }))();
                        }
                    };
                }
                var States = function(_Array) {
                    function States(callback) {
                        var _this29;
                        var initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                        _classCallCheck(this, States);
                        if (isArray(initialState)) {
                            _this29 = _callSuper(this, States, _toConsumableArray(initialState));
                            _defineProperty(_assertThisInitialized(_this29), "onChange", void 0);
                        } else if (isString(initialState)) {
                            _this29 = _callSuper(this, States, [ initialState ]);
                            _defineProperty(_assertThisInitialized(_this29), "onChange", void 0);
                        } else {
                            _this29 = _callSuper(this, States, _toConsumableArray(Object.entries(initialState).filter(function(_ref46) {
                                var _ref47 = _slicedToArray(_ref46, 2), _key = _ref47[0], value = _ref47[1];
                                return value;
                            }).map(function(_ref48) {
                                var _ref49 = _slicedToArray(_ref48, 1), key = _ref49[0];
                                return key;
                            })));
                            _defineProperty(_assertThisInitialized(_this29), "onChange", void 0);
                        }
                        _this29.onChange = callback;
                        return _possibleConstructorReturn(_this29, _assertThisInitialized(_this29));
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
                            if (this.has(state)) {
                                return;
                            }
                            this.push(state);
                            this.onChange();
                        }
                    }, {
                        key: "toggle",
                        value: function toggle(state, force) {
                            if (force === true) {
                                this.add(state);
                            } else if (force === false) {
                                this.remove(state);
                            } else {
                                if (this.has(state)) {
                                    this.remove(state);
                                } else {
                                    this.add(state);
                                }
                            }
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
                            } else {
                                for (var state in newStates) {
                                    var value = newStates[state];
                                    if (value) {
                                        if (!this.has(state)) {
                                            this.push(state);
                                        }
                                    } else {
                                        var stateIndexToRemove = this.indexOf(state);
                                        if (stateIndexToRemove >= 0) {
                                            this.splice(stateIndexToRemove, 1);
                                        }
                                    }
                                }
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
                function getArrayValue(val, index) {
                    var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                    if (val === void 0) return defaultValue;
                    if (typeof val === "number") return val;
                    var len = val.length;
                    var result;
                    if (len === 2) {
                        result = index % 2 === 0 ? val[0] : val[1];
                    } else if (len === 3) {
                        result = index === 0 ? val[0] : index === 2 ? val[2] : val[1];
                    } else {
                        result = val[index];
                    }
                    return result !== null && result !== void 0 ? result : defaultValue;
                }
                function calculateFlexNew(node) {
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
                    if (numChildren === 0) {
                        return false;
                    }
                    var processableChildrenIndices = [];
                    var hasOrder = false;
                    var totalFlexGrow = 0;
                    var totalFlexShrink = 0;
                    for (var i = 0; i < numChildren; i++) {
                        var c = children[i];
                        if (isElementText(c) && c.text && !(c.width || c.height)) {
                            return false;
                        }
                        if (isTextNode(c) || c.flexItem === false) {
                            continue;
                        }
                        if (c.flexOrder !== void 0) {
                            hasOrder = true;
                        }
                        var flexGrow = c.flexGrow;
                        if (flexGrow !== void 0 && flexGrow > 0) {
                            totalFlexGrow += flexGrow;
                        }
                        var flexShrink = c.flexShrink;
                        if (flexShrink !== void 0 && flexShrink > 0) {
                            totalFlexShrink += flexShrink;
                        }
                        if (c[minDimension] && (c[dimension] || 0) < c[minDimension]) {
                            c[dimension] = c[minDimension];
                        }
                        if (c[crossMinDimension] && (c[crossDimension] || 0) < c[crossMinDimension]) {
                            c[crossDimension] = c[crossMinDimension];
                        }
                        processableChildrenIndices.push(i);
                    }
                    if (hasOrder) {
                        processableChildrenIndices.sort(function(aIdx, bIdx) {
                            var a = children[aIdx];
                            var b = children[bIdx];
                            return (a.flexOrder || 0) - (b.flexOrder || 0);
                        });
                    }
                    if (isReverse || node.direction === "rtl") {
                        processableChildrenIndices.reverse();
                    }
                    var numProcessedChildren = processableChildrenIndices.length;
                    if (numProcessedChildren === 0) {
                        return false;
                    }
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
                                var _c4 = children[processableChildrenIndices[_idx3]];
                                var flexShrinkValue = _c4.flexShrink || 0;
                                totalScaledShrinkFactor += flexShrinkValue * childMainSizes[_idx3];
                            }
                            if (totalScaledShrinkFactor > 0) {
                                for (var _idx4 = 0; _idx4 < numProcessedChildren; _idx4++) {
                                    var _c5 = children[processableChildrenIndices[_idx4]];
                                    var _flexShrinkValue = _c5.flexShrink || 0;
                                    if (_flexShrinkValue > 0) {
                                        var shrinkRatio = _flexShrinkValue * childMainSizes[_idx4] / totalScaledShrinkFactor;
                                        var sizeReduction = shrinkRatio * Math.abs(availableSpace);
                                        var _newMainSize = childMainSizes[_idx4] - sizeReduction;
                                        var minBound = _c5[minDimension] || 0;
                                        if (_newMainSize < minBound) {
                                            _newMainSize = minBound;
                                        }
                                        _c5[dimension] = _newMainSize;
                                        childMainSizes[_idx4] = _newMainSize;
                                        childTotalMainSizes[_idx4] = _newMainSize + childMarginStarts[_idx4] + childMarginEnds[_idx4];
                                    }
                                }
                            }
                            node._containsFlexGrow = node._containsFlexGrow ? null : true;
                        } else if (node._containsFlexGrow) {
                            node._containsFlexGrow = null;
                        }
                    }
                    var totalItemSize = 0;
                    if (justify === "center" || justify === "spaceBetween" || justify === "spaceEvenly" || justify === "spaceAround") {
                        for (var _idx5 = 0; _idx5 < numProcessedChildren; _idx5++) {
                            totalItemSize += childTotalMainSizes[_idx5];
                        }
                    }
                    var doCrossAlign = containerCrossSize ? function(c, idx) {
                        var crossCurrentPos = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                        var alignSelf = c.alignSelf || align;
                        if (!alignSelf) {
                            return;
                        }
                        if (alignSelf === "flexStart") {
                            c[crossProp] = crossCurrentPos + childMarginCrossStarts[idx];
                        } else if (alignSelf === "center") {
                            c[crossProp] = crossCurrentPos + (containerCrossSize - childCrossSizes[idx]) / 2 + childMarginCrossStarts[idx];
                        } else if (alignSelf === "flexEnd") {
                            c[crossProp] = crossCurrentPos + containerCrossSize - childCrossSizes[idx] - childMarginCrossEnds[idx];
                        }
                    } : function(_c, _idx) {
                        var _crossCurrentPos = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                    };
                    if (isRow && node._calcHeight && !node.flexCrossBoundary) {
                        var maxHeight = 0;
                        for (var _idx6 = 0; _idx6 < numProcessedChildren; _idx6++) {
                            if (childCrossSizes[_idx6] > maxHeight) maxHeight = childCrossSizes[_idx6];
                        }
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
                                var _c6 = children[processableChildrenIndices[_idx7]];
                                if (currentPos + childTotalMainSizes[_idx7] > containerSize && currentPos > paddingStart) {
                                    currentPos = paddingStart;
                                    crossCurrentPos += isWrapReverse ? -(childCrossSizeVar + crossGap) : childCrossSizeVar + crossGap;
                                }
                                _c6[prop] = currentPos + childMarginStarts[_idx7];
                                currentPos += childTotalMainSizes[_idx7] + gap;
                                doCrossAlign(_c6, _idx7, crossCurrentPos);
                            }
                            var finalCrossSize = isWrapReverse ? containerCrossSize - crossCurrentPos + paddingCrossStart : crossCurrentPos + childCrossSizeVar + paddingCrossEnd;
                            if (node[crossDimension] !== finalCrossSize) {
                                node["preFlex".concat(crossDimension)] = node[crossDimension];
                                node[crossDimension] = finalCrossSize;
                                containerUpdated = true;
                            }
                        } else {
                            for (var _idx8 = 0; _idx8 < numProcessedChildren; _idx8++) {
                                var _c7 = children[processableChildrenIndices[_idx8]];
                                _c7[prop] = currentPos + childMarginStarts[_idx8];
                                currentPos += childTotalMainSizes[_idx8] + gap;
                                doCrossAlign(_c7, _idx8, paddingCrossStart);
                            }
                        }
                        if (node.flexBoundary !== "fixed" && node.flexWrap !== "wrap") {
                            var calculatedSize = currentPos - gap + paddingEnd;
                            var minSize = node[minDimension] || 0;
                            if (calculatedSize < minSize) {
                                calculatedSize = minSize;
                            }
                            if (calculatedSize !== (node[dimension] || 0)) {
                                node["preFlex".concat(dimension)] = containerSize;
                                node[dimension] = calculatedSize;
                                return true;
                            }
                        }
                    } else if (justify === "flexEnd") {
                        currentPos = containerSize - paddingEnd;
                        for (var _idx9 = numProcessedChildren - 1; _idx9 >= 0; _idx9--) {
                            var _c8 = children[processableChildrenIndices[_idx9]];
                            _c8[prop] = currentPos - childMainSizes[_idx9] - childMarginEnds[_idx9];
                            currentPos -= childTotalMainSizes[_idx9] + gap;
                            doCrossAlign(_c8, _idx9, paddingCrossStart);
                        }
                    } else if (justify === "center") {
                        currentPos = (containerSize - (totalItemSize + gap * (numProcessedChildren - 1))) / 2 + paddingStart;
                        for (var _idx0 = 0; _idx0 < numProcessedChildren; _idx0++) {
                            var _c9 = children[processableChildrenIndices[_idx0]];
                            _c9[prop] = currentPos + childMarginStarts[_idx0];
                            currentPos += childTotalMainSizes[_idx0] + gap;
                            doCrossAlign(_c9, _idx0, paddingCrossStart);
                        }
                    } else if (justify === "spaceBetween") {
                        var spaceBetween = numProcessedChildren > 1 ? (containerSize - totalItemSize - nodePaddingTotal) / (numProcessedChildren - 1) : 0;
                        currentPos = paddingStart;
                        for (var _idx1 = 0; _idx1 < numProcessedChildren; _idx1++) {
                            var _c0 = children[processableChildrenIndices[_idx1]];
                            _c0[prop] = currentPos + childMarginStarts[_idx1];
                            currentPos += childTotalMainSizes[_idx1] + spaceBetween;
                            doCrossAlign(_c0, _idx1, paddingCrossStart);
                        }
                    } else if (justify === "spaceAround") {
                        var spaceAround = numProcessedChildren > 0 ? (containerSize - totalItemSize - nodePaddingTotal) / numProcessedChildren : 0;
                        currentPos = paddingStart + spaceAround / 2;
                        for (var _idx10 = 0; _idx10 < numProcessedChildren; _idx10++) {
                            var _c1 = children[processableChildrenIndices[_idx10]];
                            _c1[prop] = currentPos + childMarginStarts[_idx10];
                            currentPos += childTotalMainSizes[_idx10] + spaceAround;
                            doCrossAlign(_c1, _idx10, paddingCrossStart);
                        }
                    } else if (justify === "spaceEvenly") {
                        var spaceEvenly = (containerSize - totalItemSize - nodePaddingTotal) / (numProcessedChildren + 1);
                        currentPos = spaceEvenly + paddingStart;
                        for (var _idx11 = 0; _idx11 < numProcessedChildren; _idx11++) {
                            var _c10 = children[processableChildrenIndices[_idx11]];
                            _c10[prop] = currentPos + childMarginStarts[_idx11];
                            currentPos += childTotalMainSizes[_idx11] + spaceEvenly;
                            doCrossAlign(_c10, _idx11, paddingCrossStart);
                        }
                    }
                    return containerUpdated;
                }
                var _signalWrapper = function _signalWrapper(cb) {
                    return cb();
                };
                var setActiveElementCore = function setActiveElementCore(elm) {
                    var prev = activeElement();
                    if (elm === prev) return;
                    updateFocusPath(elm, prev);
                    Config.setActiveElement(elm);
                };
                var _createSignal3 = createSignal([]), _createSignal4 = _slicedToArray(_createSignal3, 2), focusPath = _createSignal4[0], setFocusPath = _createSignal4[1];
                var updateFocusPath = function updateFocusPath(currentFocusedElm, prevFocusedElm) {
                    var current = currentFocusedElm;
                    var fp = [];
                    var fpSet = new Set;
                    while (current) {
                        if (!current.states.has(Config.focusStateKey) || current === currentFocusedElm) {
                            var _current$onFocus, _current$onFocusChang;
                            current.states.add(Config.focusStateKey);
                            (_current$onFocus = current.onFocus) === null || _current$onFocus === void 0 || _current$onFocus.call(current, currentFocusedElm, prevFocusedElm, current);
                            (_current$onFocusChang = current.onFocusChanged) === null || _current$onFocusChang === void 0 || _current$onFocusChang.call(current, true, currentFocusedElm, prevFocusedElm, current);
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
                            (_elm$onBlur = elm.onBlur) === null || _elm$onBlur === void 0 || _elm$onBlur.call(elm, currentFocusedElm, prevFocusedElm, elm);
                            (_elm$onFocusChanged = elm.onFocusChanged) === null || _elm$onFocusChanged === void 0 || _elm$onFocusChanged.call(elm, false, currentFocusedElm, prevFocusedElm, elm);
                        }
                    });
                    _signalWrapper(function() {
                        return setFocusPath(fp);
                    });
                };
                var calculateFlex = calculateFlexNew;
                var postMutationQueued = false;
                var nextActiveElement = null;
                var deferredFocusElement = null;
                var layoutQueue = new Set;
                var elementDeleteQueue = [];
                function enqueueDelete(node, n) {
                    if (node._queueDelete === void 0) {
                        node._queueDelete = n;
                        if (elementDeleteQueue.push(node) === 1) {
                            schedulePostMutation();
                        }
                    } else {
                        node._queueDelete += n;
                    }
                }
                function schedulePostMutation() {
                    if (postMutationQueued) return;
                    postMutationQueued = true;
                    if ("reprocessUpdates" in renderer$2.stage && renderer$2.stage.reprocessUpdates) {
                        renderer$2.stage.reprocessUpdates(runPostMutation);
                    }
                    queueMicrotask(runPostMutation);
                }
                function runPostMutation() {
                    postMutationQueued = false;
                    if (elementDeleteQueue.length > 0) {
                        var _iterator13 = _createForOfIteratorHelper(elementDeleteQueue), _step13;
                        try {
                            for (_iterator13.s(); !(_step13 = _iterator13.n()).done; ) {
                                var _el$_queueDelete;
                                var el = _step13.value;
                                if (((_el$_queueDelete = el._queueDelete) !== null && _el$_queueDelete !== void 0 ? _el$_queueDelete : 0) < 0) {
                                    el.destroy();
                                }
                                el._queueDelete = void 0;
                            }
                        } catch (err) {
                            _iterator13.e(err);
                        } finally {
                            _iterator13.f();
                        }
                        elementDeleteQueue.length = 0;
                    }
                    while (layoutQueue.size > 0) {
                        var queue = _toConsumableArray(layoutQueue);
                        layoutQueue.clear();
                        for (var i = queue.length - 1; i >= 0; i--) {
                            var node = queue[i];
                            node.updateLayout();
                        }
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
                var _fontTemplate;
                var _fontFamilyIdx = -1;
                var _fontFamilyWithWeight;
                function buildFontTemplate() {
                    var tpl = [];
                    var fs = Config.fontSettings;
                    if (fs) {
                        for (var key in fs) {
                            if (key === "fontFamily") {
                                _fontFamilyIdx = tpl.length;
                                _fontFamilyWithWeight = "".concat(fs.fontFamily).concat(fs.fontWeight || "");
                            }
                            tpl.push([ key, fs[key] ]);
                        }
                    }
                    _fontTemplate = tpl;
                }
                var EFFECT_SHADER_KEYS = [ "border", "borderTop", "borderRight", "borderBottom", "borderLeft", "shadow" ];
                var parseAndAssignShaderProps = function parseAndAssignShaderProps(prefix, obj) {
                    var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                    if (!obj) return;
                    var borderSideMap = {
                        borderBottom: "bottom",
                        borderLeft: "left",
                        borderRight: "right",
                        borderTop: "top"
                    };
                    var side = borderSideMap[prefix];
                    var actualPrefix = side ? "border" : prefix;
                    props[actualPrefix] = obj;
                    Object.entries(obj).forEach(function(_ref50) {
                        var _ref51 = _slicedToArray(_ref50, 2), key = _ref51[0], value = _ref51[1];
                        var transformedKey = key === "width" ? "w" : key;
                        if (side && transformedKey === "w") {
                            transformedKey = side;
                        }
                        props["".concat(actualPrefix, "-").concat(transformedKey)] = value;
                    });
                };
                function convertToShader(_node, v) {
                    var type = "rounded";
                    if (v.border) type += "WithBorder";
                    if (v.shadow) type += "WithShadow";
                    return renderer$2.createShader(type, v);
                }
                function getPropertyAlias(name) {
                    if (name === "w") return "width";
                    if (name === "h") return "height";
                    return name;
                }
                var LightningRendererNumberProps = [ "alpha", "color", "colorTop", "colorRight", "colorLeft", "colorBottom", "colorTl", "colorTr", "colorBl", "colorBr", "h", "fontSize", "lineHeight", "mount", "mountX", "mountY", "pivot", "pivotX", "pivotY", "rotation", "scale", "scaleX", "scaleY", "w", "worldX", "worldY", "x", "y", "zIndex", "zIndexLocked" ];
                var LightningRendererNonAnimatingProps = [ "absX", "absY", "autosize", "clipping", "contain", "componentName", "componentLocation", "data", "destroyed", "forceLoad", "fontStretch", "fontStyle", "group", "imageType", "letterSpacing", "maxHeight", "maxLines", "maxWidth", "offsetY", "overflowSuffix", "preventCleanup", "rtt", "scrollable", "scrollY", "srcHeight", "srcWidth", "srcX", "srcY", "strictBounds", "text", "textAlign", "textBaseline", "textOverflow", "texture", "textureOptions", "textRendererOverride", "verticalAlign", "wordBreak", "wordWrap" ];
                var ElementNode = function() {
                    function ElementNode(name) {
                        _classCallCheck(this, ElementNode);
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
                            text: void 0
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
                            if ((_this$lng$shader = this.lng.shader) !== null && _this$lng$shader !== void 0 && _this$lng$shader.props) {
                                target = this.lng.shader.props;
                            }
                            if (v.rounded) target.radius = v.rounded.radius;
                            if (v.borderRadius) target.radius = v.borderRadius;
                            for (var _i17 = 0, _EFFECT_SHADER_KEYS = EFFECT_SHADER_KEYS; _i17 < _EFFECT_SHADER_KEYS.length; _i17++) {
                                var k = _EFFECT_SHADER_KEYS[_i17];
                                if (v[k]) parseAndAssignShaderProps(k, v[k], target);
                            }
                            this._writeShaderTarget(target);
                        }
                    }, {
                        key: "_writeShaderTarget",
                        value: function _writeShaderTarget(target) {
                            if (this.rendered) {
                                if (!this.lng.shader) {
                                    this.lng.shader = Config.convertToShader(this, target);
                                } else if (isDomRendererActive()) {
                                    this.lng.shader = this.lng.shader;
                                }
                            } else {
                                this.lng.shader = target;
                            }
                        }
                    }, {
                        key: "id",
                        get: function get() {
                            return this._id;
                        },
                        set: function set(id) {
                            this._id = id;
                            if (Config.rendererOptions && "inspector" in Config.rendererOptions && Config.rendererOptions.inspector) {
                                this.data = _objectSpread(_objectSpread({}, this.data), {}, {
                                    testId: id
                                });
                            }
                        }
                    }, {
                        key: "parent",
                        get: function get() {
                            return this._parent;
                        },
                        set: function set(p) {
                            this._parent = p;
                            if (this.rendered && p !== null && p !== void 0 && p.rendered) {
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
                            var _ref52, _Config$fontSettings;
                            if (this._fontWeight === v) {
                                return;
                            }
                            this._fontWeight = v;
                            var weight = (_ref52 = Config.fontWeightAlias && Config.fontWeightAlias[v]) !== null && _ref52 !== void 0 ? _ref52 : v;
                            this.lng.fontFamily = "".concat(this.fontFamily || ((_Config$fontSettings = Config.fontSettings) === null || _Config$fontSettings === void 0 ? void 0 : _Config$fontSettings.fontFamily)).concat(weight);
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
                                if (!this.rendered) {
                                    this._hasRenderedChildren = true;
                                }
                            }
                            node.parent = this;
                            if (beforeNode) {
                                spliceItem(this.children, node, 1);
                                if (spliceItem(this.children, beforeNode, 0, node) > -1) {
                                    return;
                                }
                            }
                            this.children.push(node);
                        }
                    }, {
                        key: "removeChild",
                        value: function removeChild(node) {
                            if (spliceItem(this.children, node, 1) > -1) {
                                if (isElementNode(node) && node.onRemove) {
                                    node.onRemove.call(node, node);
                                }
                                if (this.requiresLayout()) {
                                    addToLayoutQueue(this);
                                }
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
                            return void 0;
                        }
                    }, {
                        key: "shader",
                        set: function set(shaderProps) {
                            var _renderer$;
                            this.lng.shader = isArray(shaderProps) ? (_renderer$ = renderer$2).createShader.apply(_renderer$, _toConsumableArray(shaderProps)) : shaderProps;
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
                            var _this30 = this;
                            if (!this.onAnimation) return;
                            var settings = animationSettings || this.animationSettings;
                            var _this$onAnimation = this.onAnimation, animating = _this$onAnimation.animating, stopped = _this$onAnimation.stopped;
                            if (animating) {
                                animating.call(this, name, value);
                            }
                            if (stopped) {
                                var _settings$duration3, _settings$delay2;
                                var total = ((_settings$duration3 = settings === null || settings === void 0 ? void 0 : settings.duration) !== null && _settings$duration3 !== void 0 ? _settings$duration3 : 0) + ((_settings$delay2 = settings === null || settings === void 0 ? void 0 : settings.delay) !== null && _settings$delay2 !== void 0 ? _settings$delay2 : 0);
                                setTimeout(function() {
                                    return stopped.call(_this30, name, value);
                                }, total);
                            }
                        }
                    }, {
                        key: "animate",
                        value: function animate(props, animationSettings) {
                            return this.lng.animate(props, animationSettings || this.animationSettings || {});
                        }
                    }, {
                        key: "chain",
                        value: function chain(props, animationSettings) {
                            if (this._animationRunning) {
                                this._animationQueue = [];
                                this._animationRunning = false;
                            }
                            if (animationSettings) {
                                this._animationQueueSettings = animationSettings;
                            } else if (!this._animationQueueSettings) {
                                this._animationQueueSettings = animationSettings || this.animationSettings;
                            }
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
                            var _start = _asyncToGenerator(_regenerator().m(function _callee18() {
                                var animation;
                                return _regenerator().w(function(_context18) {
                                    while (1) switch (_context18.n) {
                                      case 0:
                                        animation = this._animationQueue.shift();

                                      case 1:
                                        if (!animation) {
                                            _context18.n = 3;
                                            break;
                                        }
                                        this._animationRunning = true;
                                        _context18.n = 2;
                                        return this.animate(animation.props, animation.animationSettings).start().waitUntilStopped();

                                      case 2:
                                        animation = this._animationQueue.shift();
                                        _context18.n = 1;
                                        break;

                                      case 3:
                                        this._animationRunning = false;
                                        this._animationQueueSettings = void 0;

                                      case 4:
                                        return _context18.a(2);
                                    }
                                }, _callee18, this);
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
                            for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key0 = 1; _key0 < _len4; _key0++) {
                                args[_key0 - 1] = arguments[_key0];
                            }
                            while (current) {
                                var handler = current[capitalizedEvent];
                                if (isFunction(handler)) {
                                    if (handler.call.apply(handler, [ current, this ].concat(args)) === true) {
                                        return true;
                                    }
                                }
                                current = current.parent;
                            }
                            return false;
                        }
                    }, {
                        key: "setFocus",
                        value: function setFocus() {
                            if (this.rendered) {
                                if (this.forwardFocus !== void 0) {
                                    if (isFunction(this.forwardFocus)) {
                                        if (this.forwardFocus.call(this, this) !== false) {
                                            return;
                                        }
                                    } else {
                                        var focusedIndex = typeof this.forwardFocus === "number" ? this.forwardFocus : null;
                                        var nodes = this.children;
                                        if (focusedIndex !== null && focusedIndex < nodes.length) {
                                            var child = nodes[focusedIndex];
                                            isElementNode(child) && child.setFocus();
                                            return;
                                        }
                                    }
                                }
                                nextActiveElement = this;
                                schedulePostMutation();
                            } else {
                                this._autofocus = true;
                            }
                        }
                    }, {
                        key: "_layoutOnLoad",
                        value: function _layoutOnLoad() {
                            var _this31 = this;
                            this.lng.on("loaded", function() {
                                schedulePostMutation();
                                _this31.parent.updateLayout();
                            });
                        }
                    }, {
                        key: "getText",
                        value: function getText() {
                            var len = this.children.length;
                            if (len === 1) return this.children[0].text;
                            if (len === 0) return "";
                            var result = "";
                            for (var i = 0; i < len; i++) {
                                result += this.children[i].text;
                            }
                            return result;
                        }
                    }, {
                        key: "destroy",
                        value: function destroy() {
                            var _this32 = this;
                            if (this.onDestroy) {
                                var destroyPromise = this.onDestroy(this);
                                if (destroyPromise instanceof Promise) {
                                    void destroyPromise.then(function() {
                                        return _this32._destroy();
                                    });
                                } else {
                                    this._destroy();
                                }
                            } else {
                                this._destroy();
                            }
                        }
                    }, {
                        key: "_destroy",
                        value: function _destroy() {
                            if (isINode(this.lng)) {
                                this.lng.destroy();
                            }
                        }
                    }, {
                        key: "style",
                        get: function get() {
                            return this._style || {};
                        },
                        set: function set(style) {
                            if (this._style) {
                                return;
                            }
                            if (!style) {
                                return;
                            }
                            this._style = style;
                            for (var key in this._style) {
                                if (this[key] === void 0) {
                                    this[key] = this._style[key];
                                }
                            }
                        }
                    }, {
                        key: "theme",
                        get: function get() {
                            this._theme = this._theme || {};
                            return this._theme;
                        },
                        set: function set(styles) {
                            if (!styles) {
                                return;
                            }
                            this._theme = styles;
                            for (var key in styles) {
                                this[key] = styles[key];
                            }
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
                                if (!this.color && this.rendered) {
                                    this.color = 4294967295;
                                }
                            } else {
                                this.color = 0;
                            }
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
                                    if (child.id === id) {
                                        return child;
                                    }
                                    var found = child.searchChildrenById(id);
                                    if (found) {
                                        return found;
                                    }
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
                            if (this.rendered) {
                                this._stateChanged();
                            }
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
                            var _this33 = this;
                            if (this.hasChildren) {
                                if (this.display === "flex" && this.flexGrow && this.width === 0) {
                                    return;
                                }
                                var flexChanged = this.display === "flex" && calculateFlex(this);
                                layoutQueue.delete(this);
                                var onLayoutChanged = isFunction(this.onLayout) && this.onLayout.call(this, this);
                                if ((flexChanged || onLayoutChanged) && this.parent) {
                                    addToLayoutQueue(this.parent);
                                }
                                if (this._containsFlexGrow === true) {
                                    this.children.forEach(function(c) {
                                        if (c.display === "flex" && isElementNode(c)) {
                                            calculateFlex(c);
                                            isFunction(c.onLayout) && c.onLayout.call(c, c);
                                            addToLayoutQueue(_this33);
                                        }
                                    });
                                }
                            }
                        }
                    }, {
                        key: "_stateChanged",
                        value: function _stateChanged() {
                            var _this34 = this;
                            if (this.forwardStates) {
                                var states2 = this.states.slice();
                                this.children.forEach(function(c) {
                                    c.states = states2;
                                });
                            }
                            var states = this.states;
                            if (this._undoStyles || keyExists(this, states)) {
                                var stylesToUndo;
                                if (this._undoStyles && this._undoStyles.length) {
                                    stylesToUndo = {};
                                    this._undoStyles.forEach(function(styleKey) {
                                        var fallbackValue = _this34.theme[styleKey];
                                        if (fallbackValue === void 0) {
                                            fallbackValue = _this34.style[styleKey];
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
                                    if (stateOrder && stateOrder.length > 0) {
                                        sortedStates = states.slice().sort(function(a, b) {
                                            var aIdx = stateOrder.indexOf(a);
                                            var bIdx = stateOrder.indexOf(b);
                                            if (aIdx !== -1 && bIdx === -1) return 1;
                                            if (aIdx === -1 && bIdx !== -1) return -1;
                                            return aIdx - bIdx;
                                        });
                                    }
                                    newStyles = sortedStates.reduce(function(acc, state) {
                                        var styles = _this34[state];
                                        return styles ? _objectSpread(_objectSpread({}, acc), styles) : acc;
                                    }, stylesToUndo || {});
                                }
                                if (newStyles) {
                                    this._undoStyles = Object.keys(newStyles);
                                    if (newStyles.transition !== void 0) {
                                        this.transition = newStyles.transition;
                                    }
                                    Object.assign(this, newStyles);
                                } else {
                                    this._undoStyles = [];
                                }
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
                            if (parent.requiresLayout()) {
                                layoutQueue.add(parent);
                            }
                            if (this.rendered) {
                                var _this$onRender;
                                (_this$onRender = this.onRender) === null || _this$onRender === void 0 || _this$onRender.call(this, this);
                                return;
                            }
                            if (this._states) {
                                this._stateChanged();
                            }
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
                            if (this.center) {
                                this.centerX = this.centerY = true;
                            }
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
                                        if (textProps[key] === void 0) {
                                            textProps[key] = i === familyIdx && familyWithWeight !== void 0 ? familyWithWeight : entry[1];
                                        }
                                    }
                                }
                                textProps.text = textProps.text || node.getText();
                                if (textProps.textAlign && !textProps.contain) {
                                    console.warn("Text align requires contain: ", node.getText());
                                }
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
                                    if (!textProps.maxWidth) {
                                        textProps.maxWidth = parentWidth - textProps.x - (textProps.marginRight || 0);
                                    }
                                    if (textProps.contain === "both" && !textProps.maxHeight) {
                                        textProps.maxHeight = parentHeight - textProps.y - (textProps.marginBottom || 0);
                                    } else if (textProps.maxLines === 1) {
                                        textProps.maxHeight = textProps.maxHeight || textProps.lineHeight || textProps.fontSize;
                                    }
                                }
                                if (SHADERS_ENABLED && props.shader && !props.shader.program) {
                                    props.shader = Config.convertToShader(node, props.shader);
                                }
                                node.lng = renderer$2.createTextNode(props);
                                if (parent.requiresLayout()) {
                                    if (!textProps.maxWidth || !textProps.maxHeight) {
                                        node._layoutOnLoad();
                                    }
                                }
                            } else {
                                if (!props.texture) {
                                    if (isNaN(props.w)) {
                                        props.w = node.flexGrow ? 0 : parentWidth - props.x;
                                        node._calcWidth = true;
                                    }
                                    if (isNaN(props.h)) {
                                        props.h = parentHeight - props.y;
                                        node._calcHeight = true;
                                    }
                                    if (props.rtt && !props.color) {
                                        props.color = 4294967295;
                                    }
                                    if (!props.color && !props.src) {
                                        props.color = 0;
                                    }
                                }
                                if (SHADERS_ENABLED && props.shader && !props.shader.program) {
                                    props.shader = Config.convertToShader(node, props.shader);
                                }
                                node.lng = renderer$2.createNode(props);
                                if (node._hasRenderedChildren) {
                                    node._hasRenderedChildren = false;
                                    var _iterator14 = _createForOfIteratorHelper(node.children), _step14;
                                    try {
                                        for (_iterator14.s(); !(_step14 = _iterator14.n()).done; ) {
                                            var child = _step14.value;
                                            if (isElementNode(child) && isINode(child.lng)) {
                                                child.lng.parent = node.lng;
                                            }
                                        }
                                    } catch (err) {
                                        _iterator14.e(err);
                                    } finally {
                                        _iterator14.f();
                                    }
                                }
                            }
                            node.rendered = true;
                            if (node.autosize && parent.requiresLayout()) {
                                node._layoutOnLoad();
                            }
                            (_this$onCreate = this.onCreate) === null || _this$onCreate === void 0 || _this$onCreate.call(this, this);
                            (_this$onRender2 = this.onRender) === null || _this$onRender2 === void 0 || _this$onRender2.call(this, this);
                            if (node.onEvent) {
                                var _loop3 = function _loop3() {
                                    var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i18], 2), name = _Object$entries2$_i[0], handler = _Object$entries2$_i[1];
                                    if (typeof node.lng.on === "function") {
                                        node.lng.on(name, function(_inode, data) {
                                            return handler.call(node, node, data);
                                        });
                                    }
                                };
                                for (var _i18 = 0, _Object$entries2 = Object.entries(node.onEvent); _i18 < _Object$entries2.length; _i18++) {
                                    _loop3();
                                }
                            }
                            (_node$lng = node.lng) === null || _node$lng === void 0 || _node$lng.div;
                            if (node._type === NodeType.Element) {
                                var numChildren = node.children.length;
                                for (var _i19 = 0; _i19 < numChildren; _i19++) {
                                    var c = node.children[_i19];
                                    if (isElementNode(c)) {
                                        c.render();
                                    }
                                }
                            }
                            if (topNode) {
                                schedulePostMutation();
                            }
                            if (node._autofocus) node.setFocus();
                        }
                    } ]);
                }();
                var _loop4 = function _loop4() {
                    var key = _LightningRendererNum[_i20];
                    Object.defineProperty(ElementNode.prototype, key, {
                        get: function get() {
                            return this.lng[key];
                        },
                        set: function set(v) {
                            this._sendToLightningAnimatable(key, v);
                        }
                    });
                };
                for (var _i20 = 0, _LightningRendererNum = LightningRendererNumberProps; _i20 < _LightningRendererNum.length; _i20++) {
                    _loop4();
                }
                var _loop5 = function _loop5() {
                    var key = _LightningRendererNon[_i21];
                    Object.defineProperty(ElementNode.prototype, key, {
                        get: function get() {
                            return this.lng[key];
                        },
                        set: function set(v) {
                            this.lng[key] = v;
                        }
                    });
                };
                for (var _i21 = 0, _LightningRendererNon = LightningRendererNonAnimatingProps; _i21 < _LightningRendererNon.length; _i21++) {
                    _loop5();
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
                            if ((_this$lng$shader2 = this.lng.shader) !== null && _this$lng$shader2 !== void 0 && _this$lng$shader2.props) {
                                target = this.lng.shader.props;
                                var transitionKey = key === "rounded" ? "borderRadius" : key;
                                if (this.transition && (this.transition === true || this.transition[transitionKey])) {
                                    target = {};
                                    animationSettings = this.transition === true || this.transition[transitionKey] === true ? void 0 : this.transition[transitionKey];
                                }
                            }
                            if (key === "rounded" || typeof value === "number") {
                                target.radius = value;
                            } else {
                                parseAndAssignShaderProps(key, value, target);
                            }
                            this._writeShaderTarget(target);
                            if (animationSettings) {
                                this.animate({
                                    shaderProps: target
                                }, animationSettings).start();
                            }
                        },
                        get: function get() {
                            var _this$_effects;
                            return (_this$_effects = this._effects) === null || _this$_effects === void 0 ? void 0 : _this$_effects[key];
                        }
                    };
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
                });
                var Rounded = {
                    props: RoundedTemplate.props,
                    update: function update(node) {
                        this.uniform4fa("u_radius", calcFactoredRadiusArray(this.props.radius, node.w, node.h));
                    },
                    vertex: "\n  # ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  # else\n  precision mediump float;\n  # endif\n\n  attribute vec2 a_position;\n  attribute vec2 a_textureCoords;\n  attribute vec4 a_color;\n  attribute vec2 a_nodeCoords;\n\n  uniform vec2 u_resolution;\n  uniform float u_pixelRatio;\n\n  varying vec4 v_color;\n  varying vec2 v_textureCoords;\n  varying vec2 v_nodeCoords;\n\n  void main() {\n    vec2 normalized = a_position * u_pixelRatio;\n    vec2 screenSpace = vec2(2.0 / u_resolution.x, -2.0 / u_resolution.y);\n\n    v_color = a_color;\n    v_nodeCoords = a_nodeCoords;\n    v_textureCoords = a_textureCoords;\n\n    gl_Position = vec4(\n      normalized.x * screenSpace.x - 1.0,\n      normalized.y * -abs(screenSpace.y) + 1.0,\n      0.0,\n      1.0\n    );\n  }\n",
                    fragment: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    uniform vec2 u_dimensions;\n    uniform float u_alpha;\n    uniform float u_pixelRatio;\n    uniform sampler2D u_texture;\n    uniform vec4 u_radius;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n    varying vec2 v_nodeCoords;\n\n    void main() {\n      vec2 halfDimensions = u_dimensions * 0.5;\n      vec2 boxUv = v_nodeCoords * u_dimensions - halfDimensions;\n\n      // Branchless radius selection based on quadrant\n      // x: TL, y: TR, z: BR, w: BL\n      vec2 stepVal = step(vec2(0.0), boxUv);\n      float r = mix(\n        mix(u_radius.x, u_radius.y, stepVal.x),\n        mix(u_radius.w, u_radius.z, stepVal.x),\n        stepVal.y\n      );\n\n      vec2 q = abs(boxUv) - halfDimensions + r;\n      float d = min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r;\n\n      float edgeWidth = 1.0 / u_pixelRatio;\n      float alpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, d);\n\n      vec4 color = texture2D(u_texture, v_textureCoords) * v_color;\n      gl_FragColor = color * alpha * u_alpha;\n    }\n  "
                };
                var props$2 = Object.assign({}, RoundedTemplate.props, getBorderProps("border"), {
                    "border-fill": 0
                });
                var RoundedWithBorderTemplate = {
                    props: props$2
                };
                var RoundedWithBorder = {
                    props: RoundedWithBorderTemplate.props,
                    update: function update(node) {
                        this.uniformRGBA("u_borderColor", this.props["border-color"]);
                        this.uniformRGBA("u_fillColor", this.props["border-fill"]);
                        this.uniform4fa("u_borderWidth", this.props["border-w"]);
                        this.uniform1f("u_borderGap", this.props["border-gap"]);
                        this.uniform1f("u_borderAlign", this.props["border-align"]);
                        this.uniform4fa("u_radius", calcFactoredRadiusArray(this.props.radius, node.w, node.h));
                    },
                    vertex: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    attribute vec2 a_position;\n    attribute vec2 a_textureCoords;\n    attribute vec4 a_color;\n    attribute vec2 a_nodeCoords;\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n    uniform vec2 u_dimensions;\n\n    uniform vec4 u_radius;\n    uniform vec4 u_borderWidth;\n    uniform float u_borderGap;\n    uniform float u_borderAlign;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n    varying vec2 v_nodeCoords;\n\n    varying vec2 v_innerSize;\n    varying vec2 v_outerSize;\n    varying vec2 v_outerBorderUv;\n    varying vec2 v_innerBorderUv;\n    varying vec4 v_innerBorderRadius;\n    varying vec4 v_outerBorderRadius;\n    varying vec2 v_halfDimensions;\n\n    void main() {\n      vec2 vertexPos = a_position * u_pixelRatio;\n      vec2 screenSpace = vec2(2.0 / u_resolution.x, -2.0 / u_resolution.y);\n      vec2 edge = clamp(a_nodeCoords * 2.0 - vec2(1.0), -1.0, 1.0);\n      vec2 edgeOffset = vec2(0.0);\n      float borderZero = 1.0 - step(0.001, dot(abs(u_borderWidth), vec4(1.0)));\n\n      v_innerSize = vec2(0.0);\n      v_outerSize = vec2(0.0);\n\n      if(borderZero == 0.0) {\n        vec4 adjustedBorderWidth = u_borderWidth - 1.0 + clamp(u_borderWidth, -1.0, 1.0);\n\n        float borderTop = adjustedBorderWidth.x;\n        float borderRight = adjustedBorderWidth.y;\n        float borderBottom = adjustedBorderWidth.z;\n        float borderLeft = adjustedBorderWidth.w;\n\n        v_outerBorderUv = vec2(0.0);\n        v_innerBorderUv = vec2(0.0);\n\n        vec2 borderSize = vec2(borderRight + borderLeft, borderTop + borderBottom);\n        vec2 extraSize = borderSize * u_borderAlign;\n        float gapLeft = step(0.001, borderLeft) * u_borderGap;\n        float gapRight = step(0.001, borderRight) * u_borderGap;\n        float gapTop = step(0.001, borderTop) * u_borderGap;\n        float gapBottom = step(0.001, borderBottom) * u_borderGap;\n        vec2 gapSize = vec2(gapLeft + gapRight, gapTop + gapBottom);\n\n        v_outerSize = (u_dimensions + gapSize + extraSize) * 0.5;\n        v_innerSize = v_outerSize - borderSize * 0.5;\n\n        // Use sign() to avoid branching\n        vec2 borderDiff = vec2(borderRight - borderLeft, borderBottom - borderTop);\n        vec2 signDiff = sign(borderDiff);\n        borderDiff = abs(borderDiff);\n\n        vec2 gapDiff = vec2(gapRight - gapLeft, gapBottom - gapTop);\n        vec2 signGapDiff = sign(gapDiff);\n        gapDiff = abs(gapDiff);\n\n        v_outerBorderUv = -signDiff * borderDiff * u_borderAlign * 0.5 - signGapDiff * gapDiff * 0.5;\n        v_innerBorderUv = v_outerBorderUv + signDiff * borderDiff * 0.5;\n\n        v_outerBorderRadius = vec4(\n          max(0.0, u_radius.x + max(borderTop * u_borderAlign + u_borderGap, borderLeft * u_borderAlign + u_borderGap)),\n          max(0.0, u_radius.y + max(borderTop * u_borderAlign + u_borderGap, borderRight * u_borderAlign + u_borderGap)),\n          max(0.0, u_radius.z + max(borderBottom * u_borderAlign + u_borderGap, borderRight * u_borderAlign + u_borderGap)),\n          max(0.0, u_radius.w + max(borderBottom * u_borderAlign + u_borderGap, borderLeft * u_borderAlign + u_borderGap))\n        );\n\n        v_innerBorderRadius = vec4(\n          max(0.0, v_outerBorderRadius.x - max(borderTop, borderLeft)),\n          max(0.0, v_outerBorderRadius.y - max(borderTop, borderRight)),\n          max(0.0, v_outerBorderRadius.z - max(borderBottom, borderRight)),\n          max(0.0, v_outerBorderRadius.w - max(borderBottom, borderLeft))\n        );\n\n        vec2 edgeOffsetExtra = step(u_dimensions * 0.5, v_outerSize) * edge * (extraSize + u_borderGap);\n        edgeOffset = edgeOffsetExtra;\n\n        vertexPos = (a_position + edge + edgeOffset) * u_pixelRatio;\n      }\n\n      gl_Position = vec4(vertexPos.x * screenSpace.x - 1.0, -sign(screenSpace.y) * (vertexPos.y * -abs(screenSpace.y)) + 1.0, 0.0, 1.0);\n\n      v_color = a_color;\n      v_nodeCoords = a_nodeCoords + (screenSpace + edgeOffset) / (u_dimensions);\n      v_textureCoords = a_textureCoords + (screenSpace + edgeOffset) / (u_dimensions);\n\n      v_halfDimensions = u_dimensions * 0.5;\n    }\n  ",
                    fragment: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n    uniform float u_alpha;\n    uniform vec2 u_dimensions;\n    uniform sampler2D u_texture;\n\n    uniform vec4 u_radius;\n    uniform vec4 u_borderWidth;\n    uniform vec4 u_borderColor;\n    uniform vec4 u_fillColor;\n    uniform float u_borderGap;\n    uniform float u_borderAlign;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n    varying vec2 v_nodeCoords;\n\n    varying vec2 v_innerSize;\n    varying vec2 v_outerSize;\n    varying vec2 v_outerBorderUv;\n    varying vec2 v_innerBorderUv;\n    varying vec4 v_innerBorderRadius;\n    varying vec4 v_outerBorderRadius;\n    varying vec2 v_halfDimensions;\n\n    float roundedBox(vec2 p, vec2 s, vec4 r) {\n      r.xy = (p.x > 0.0) ? r.yz : r.xw;\n      r.x = (p.y > 0.0) ? r.y : r.x;\n      vec2 q = abs(p) - s + r.x;\n      return (min(max(q.x, q.y), 0.0) + length(max(q, 0.0))) - r.x;\n    }\n\n    void main() {\n      vec4 color = texture2D(u_texture, v_textureCoords) * v_color;\n      vec4 resultColor = vec4(0.0);\n      vec2 boxUv = v_nodeCoords.xy * u_dimensions - v_halfDimensions;\n      float borderZero = 1.0 - step(0.001, dot(abs(u_borderWidth), vec4(1.0)));\n      float edgeWidth = 1.0 / u_pixelRatio;\n\n      float nodeDist;\n      float nodeAlpha;\n\n      if(borderZero == 1.0) {\n        nodeDist = roundedBox(boxUv, v_halfDimensions - edgeWidth, u_radius);\n        nodeAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, nodeDist);\n        gl_FragColor = (color * nodeAlpha) * u_alpha;\n        return;\n      }\n\n      float outerDist = roundedBox(boxUv + v_outerBorderUv, v_outerSize - edgeWidth, v_outerBorderRadius);\n      float innerDist = roundedBox(boxUv + v_innerBorderUv, v_innerSize - edgeWidth, v_innerBorderRadius);\n\n      if(u_borderGap == 0.0) {\n        float outerAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, outerDist);\n        float innerAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, innerDist);\n        resultColor = mix(resultColor, u_borderColor, outerAlpha * u_borderColor.a);\n        resultColor = mix(resultColor, color, innerAlpha);\n        gl_FragColor = resultColor * u_alpha;\n        return;\n      }\n\n      nodeDist = roundedBox(boxUv, v_halfDimensions - edgeWidth, u_radius);\n      nodeAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, nodeDist);\n      float innerAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, innerDist);\n      float gapAlpha = max(0.0, innerAlpha - nodeAlpha);\n\n      float borderDist = max(-innerDist, outerDist);\n      float borderAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, borderDist);\n\n      resultColor = (color * nodeAlpha) + (u_fillColor * gapAlpha);\n      resultColor = mix(resultColor, u_borderColor, borderAlpha * u_borderColor.a);\n      gl_FragColor = resultColor * u_alpha;\n    }\n  "
                };
                var props$1 = Object.assign({}, RoundedTemplate.props, getBorderProps("border"), getShadowProps("shadow"));
                var RoundedWithBorderAndShadowTemplate = {
                    props: props$1
                };
                var RoundedWithBorderAndShadow = {
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
                    vertex: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    attribute vec2 a_position;\n    attribute vec2 a_textureCoords;\n    attribute vec4 a_color;\n    attribute vec2 a_nodeCoords;\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n    uniform float u_rtt;\n    uniform vec2 u_dimensions;\n\n    uniform vec4 u_shadow;\n    uniform vec4 u_radius;\n    uniform vec4 u_borderWidth;\n    uniform float u_borderGap;\n    uniform float u_borderAlign;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n    varying vec2 v_nodeCoords;\n\n    varying vec2 v_innerSize;\n    varying vec2 v_outerSize;\n    varying vec2 v_outerBorderUv;\n    varying vec2 v_innerBorderUv;\n    varying vec4 v_innerBorderRadius;\n    varying vec4 v_outerBorderRadius;\n    varying vec2 v_halfDimensions;\n\n    void main() {\n      vec2 screenSpace = vec2(2.0 / u_resolution.x,  -2.0 / u_resolution.y);\n      vec2 edge = clamp(a_nodeCoords * 2.0 - vec2(1.0), -1.0, 1.0);\n      float borderZero = 1.0 - step(0.001, dot(abs(u_borderWidth), vec4(1.0)));\n\n      vec2 edgeOffset = edge * ((u_shadow.w * 2.0)+ u_shadow.z) + u_shadow.xy;\n      vec2 vertexPos = (a_position + edge + edgeOffset) * u_pixelRatio;\n\n      v_innerSize = vec2(0.0);\n      v_outerSize = vec2(0.0);\n\n      if(borderZero == 0.0) {\n        vec4 adjustedBorderWidth = u_borderWidth - 1.0 + clamp(u_borderWidth, -1.0, 1.0);\n\n        float borderTop = adjustedBorderWidth.x;\n        float borderRight = adjustedBorderWidth.y;\n        float borderBottom = adjustedBorderWidth.z;\n        float borderLeft = adjustedBorderWidth.w;\n\n        v_outerBorderUv = vec2(0.0);\n        v_innerBorderUv = vec2(0.0);\n\n        vec2 borderSize = vec2(borderRight + borderLeft, borderTop + borderBottom);\n        vec2 extraSize = borderSize * u_borderAlign;\n        float gapLeft = step(0.001, borderLeft) * u_borderGap;\n        float gapRight = step(0.001, borderRight) * u_borderGap;\n        float gapTop = step(0.001, borderTop) * u_borderGap;\n        float gapBottom = step(0.001, borderBottom) * u_borderGap;\n        vec2 gapSize = vec2(gapLeft + gapRight, gapTop + gapBottom);\n\n        v_outerSize = (u_dimensions + gapSize + extraSize) * 0.5;\n        v_innerSize = v_outerSize - borderSize * 0.5;\n\n        // Use sign() to avoid branching\n        vec2 borderDiff = vec2(borderRight - borderLeft, borderBottom - borderTop);\n        vec2 signDiff = sign(borderDiff);\n        borderDiff = abs(borderDiff);\n\n        vec2 gapDiff = vec2(gapRight - gapLeft, gapBottom - gapTop);\n        vec2 signGapDiff = sign(gapDiff);\n        gapDiff = abs(gapDiff);\n\n        v_outerBorderUv = -signDiff * borderDiff * u_borderAlign * 0.5 - signGapDiff * gapDiff * 0.5;\n        v_innerBorderUv = v_outerBorderUv + signDiff * borderDiff * 0.5;\n\n        v_outerBorderRadius = vec4(\n          max(0.0, u_radius.x + max(borderTop * u_borderAlign + u_borderGap, borderLeft * u_borderAlign + u_borderGap)),\n          max(0.0, u_radius.y + max(borderTop * u_borderAlign + u_borderGap, borderRight * u_borderAlign + u_borderGap)),\n          max(0.0, u_radius.z + max(borderBottom * u_borderAlign + u_borderGap, borderRight * u_borderAlign + u_borderGap)),\n          max(0.0, u_radius.w + max(borderBottom * u_borderAlign + u_borderGap, borderLeft * u_borderAlign + u_borderGap))\n        );\n\n        v_innerBorderRadius = vec4(\n          max(0.0, v_outerBorderRadius.x - max(borderTop, borderLeft)),\n          max(0.0, v_outerBorderRadius.y - max(borderTop, borderRight)),\n          max(0.0, v_outerBorderRadius.z - max(borderBottom, borderRight)),\n          max(0.0, v_outerBorderRadius.w - max(borderBottom, borderLeft))\n        );\n\n        vec2 edgeOffsetExtra = step(u_dimensions * 0.5, v_outerSize) * edge * (extraSize + u_borderGap);\n        edgeOffset += edgeOffsetExtra;\n\n        vertexPos = (a_position + edge + edgeOffset) * u_pixelRatio;\n      }\n\n      gl_Position = vec4(vertexPos.x * screenSpace.x - 1.0, -sign(screenSpace.y) * (vertexPos.y * -abs(screenSpace.y)) + 1.0, 0.0, 1.0);\n\n      v_halfDimensions = u_dimensions * 0.5;\n      v_color = a_color;\n      v_nodeCoords = a_nodeCoords + (screenSpace + edgeOffset) / (u_dimensions);\n      v_textureCoords = a_textureCoords + (screenSpace + edgeOffset) / (u_dimensions);\n    }\n  ",
                    fragment: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n    uniform float u_alpha;\n    uniform vec2 u_dimensions;\n    uniform sampler2D u_texture;\n    uniform float u_rtt;\n\n    uniform vec4 u_radius;\n    uniform vec4 u_borderWidth;\n    uniform vec4 u_borderColor;\n    uniform vec4 u_shadowColor;\n    uniform vec4 u_shadow;\n    uniform float u_borderGap;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n    varying vec2 v_nodeCoords;\n\n    varying vec2 v_innerSize;\n    varying vec2 v_outerSize;\n    varying vec2 v_outerBorderUv;\n    varying vec2 v_innerBorderUv;\n    varying vec4 v_innerBorderRadius;\n    varying vec4 v_outerBorderRadius;\n    varying vec2 v_halfDimensions;\n\n    float roundedBox(vec2 p, vec2 s, vec4 r) {\n      r.xy = (p.x > 0.0) ? r.yz : r.xw;\n      r.x = (p.y > 0.0) ? r.y : r.x;\n      vec2 q = abs(p) - s + r.x;\n      return (min(max(q.x, q.y), 0.0) + length(max(q, 0.0))) - r.x;\n    }\n\n    float shadowBox(vec2 p, vec2 s, vec4 r) {\n      r.xy = (p.x > 0.0) ? r.yz : r.xw;\n      r.x = (p.y > 0.0) ? r.y : r.x;\n      vec2 q = abs(p) - s + r.x;\n      float dist = min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r.x;\n      return 1.0 - smoothstep(-u_shadow.w, u_shadow.w + u_shadow.z, dist);\n    }\n\n    void main() {\n      vec4 color = texture2D(u_texture, v_textureCoords) * v_color;\n      vec4 resultColor = vec4(0.0);\n      vec2 boxUv = v_nodeCoords.xy * u_dimensions - v_halfDimensions;\n      float borderZero = 1.0 - step(0.001, dot(abs(u_borderWidth), vec4(1.0)));\n      float edgeWidth = 1.0 / u_pixelRatio;\n      float nodeDist;\n      float nodeAlpha;\n      float shadowAlpha;\n\n      if(borderZero == 1.0) {\n        nodeDist = roundedBox(boxUv, v_halfDimensions - edgeWidth, u_radius);\n        nodeAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, nodeDist);\n        shadowAlpha = shadowBox(boxUv - u_shadow.xy, v_halfDimensions + u_shadow.w - edgeWidth, u_radius + u_shadow.z);\n        resultColor = mix(resultColor, u_shadowColor, shadowAlpha);\n        gl_FragColor = mix(resultColor, color, nodeAlpha) * u_alpha;\n        return;\n      }\n\n      if(v_outerSize.x > v_halfDimensions.x || v_outerSize.y > v_halfDimensions.y) {\n        shadowAlpha = shadowBox(boxUv + v_outerBorderUv - u_shadow.xy, v_outerSize + u_shadow.w - edgeWidth, v_outerBorderRadius + u_shadow.z);\n      }\n      else {\n        shadowAlpha = shadowBox(boxUv - u_shadow.xy, v_halfDimensions + u_shadow.w - edgeWidth, u_radius + u_shadow.z);\n      }\n\n      float outerDist = roundedBox(boxUv + v_outerBorderUv, v_outerSize - edgeWidth, v_outerBorderRadius);\n      float innerDist = roundedBox(boxUv + v_innerBorderUv, v_innerSize - edgeWidth, v_innerBorderRadius);\n\n      if(u_borderGap == 0.0) {\n        float outerAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, outerDist);\n        float innerAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, innerDist);\n        resultColor = mix(resultColor, u_shadowColor, shadowAlpha);\n        resultColor = mix(resultColor, u_borderColor, outerAlpha * u_borderColor.a);\n        resultColor = mix(resultColor, color, innerAlpha);\n        gl_FragColor = resultColor * u_alpha;\n        return;\n      }\n\n      nodeDist = roundedBox(boxUv, v_halfDimensions - edgeWidth, u_radius);\n      nodeAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, nodeDist);\n      float borderDist = max(-innerDist, outerDist);\n      float borderAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, borderDist);\n      resultColor = mix(resultColor, u_shadowColor, shadowAlpha);\n      resultColor = mix(resultColor, color, nodeAlpha);\n      resultColor = mix(resultColor, u_borderColor, borderAlpha * u_borderColor.a);\n      gl_FragColor = resultColor * u_alpha;\n    }\n  "
                };
                var props = Object.assign({}, RoundedTemplate.props, getShadowProps("shadow"));
                var RoundedWithShadowTemplate = {
                    props: props
                };
                var RoundedWithShadow = {
                    props: RoundedWithShadowTemplate.props,
                    update: function update(node) {
                        this.uniformRGBA("u_shadow_color", this.props["shadow-color"]);
                        this.uniform4fa("u_shadow", this.props["shadow-projection"]);
                        this.uniform4fa("u_radius", calcFactoredRadiusArray(this.props.radius, node.w, node.h));
                    },
                    vertex: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    attribute vec2 a_position;\n    attribute vec2 a_textureCoords;\n    attribute vec4 a_color;\n    attribute vec2 a_nodeCoords;\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n    uniform vec2 u_dimensions;\n\n    uniform vec4 u_shadow;\n    uniform vec4 u_radius;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n\n    varying vec2 v_boxUv;\n    varying vec2 v_boxSize;\n    varying vec2 v_boxSmooth;\n    varying vec2 v_shadowBox;\n    varying vec2 v_shadowSize;\n    varying vec4 v_shadowRadius;\n    varying vec2 v_shadowSmooth;\n\n    void main() {\n      vec2 screenSpace = vec2(2.0 / u_resolution.x,  -2.0 / u_resolution.y);\n      vec2 outerEdge = clamp(a_nodeCoords * 2.0 - vec2(1.0), -1.0, 1.0);\n\n      vec2 padding = vec2(max(0.0, u_shadow.w) + u_shadow.z);\n      vec2 offsetShift = mix(min(vec2(0.0), u_shadow.xy), max(vec2(0.0), u_shadow.xy), (outerEdge + 1.0) * 0.5);\n      vec2 shadowEdge = outerEdge * padding + offsetShift;\n\n      vec2 vertexPos = (a_position + outerEdge + shadowEdge) * u_pixelRatio;\n      gl_Position = vec4(vertexPos.x * screenSpace.x - 1.0, -sign(screenSpace.y) * (vertexPos.y * -abs(screenSpace.y)) + 1.0, 0.0, 1.0);\n\n      v_color = a_color;\n      v_textureCoords = a_textureCoords + (screenSpace + shadowEdge) / (u_dimensions);\n\n      float edgeWidth = 1.0 / u_pixelRatio;\n      vec2 halfDimensions = u_dimensions * 0.5;\n\n      v_boxUv = (a_nodeCoords + (screenSpace + shadowEdge) / (u_dimensions)) * u_dimensions - halfDimensions;\n      v_boxSize = halfDimensions - edgeWidth;\n      v_boxSmooth = vec2(-0.5 * edgeWidth, 0.5 * edgeWidth);\n\n      v_shadowBox = v_boxUv - u_shadow.xy;\n      v_shadowSize = halfDimensions + u_shadow.w - edgeWidth;\n      v_shadowRadius = max(vec4(0.0), u_radius + u_shadow.w);\n      v_shadowSmooth = vec2(-u_shadow.z, u_shadow.z + 0.001);\n    }\n  ",
                    fragment: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    uniform float u_alpha;\n    uniform sampler2D u_texture;\n\n    uniform vec4 u_shadow_color;\n    uniform vec4 u_radius;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n\n    varying vec2 v_boxUv;\n    varying vec2 v_boxSize;\n    varying vec2 v_boxSmooth;\n    varying vec2 v_shadowBox;\n    varying vec2 v_shadowSize;\n    varying vec4 v_shadowRadius;\n    varying vec2 v_shadowSmooth;\n\n    float roundedBox(vec2 p, vec2 s, vec4 r) {\n      r.xy = (p.x > 0.0) ? r.yz : r.xw;\n      r.x = (p.y > 0.0) ? r.y : r.x;\n      vec2 q = abs(p) - s + r.x;\n      return (min(max(q.x, q.y), 0.0) + length(max(q, 0.0))) - r.x;\n    }\n\n    float shadowBox(vec2 p, vec2 s, vec4 r) {\n      r.xy = (p.x > 0.0) ? r.yz : r.xw;\n      r.x = (p.y > 0.0) ? r.y : r.x;\n      vec2 q = abs(p) - s + r.x;\n      float dist = min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r.x;\n      return 1.0 - smoothstep(v_shadowSmooth.x, v_shadowSmooth.y, dist);\n    }\n\n    void main() {\n      vec4 color = texture2D(u_texture, v_textureCoords) * v_color;\n\n      float boxDist = roundedBox(v_boxUv, v_boxSize, u_radius);\n      float roundedAlpha = 1.0 - smoothstep(v_boxSmooth.x, v_boxSmooth.y, boxDist);\n\n      vec4 resColor = vec4(0.0);\n      if (u_shadow_color.a > 0.0) {\n        float shadowAlpha = shadowBox(v_shadowBox, v_shadowSize, v_shadowRadius);\n        resColor = u_shadow_color * shadowAlpha;\n      }\n\n      resColor = mix(resColor, color, min(color.a, roundedAlpha));\n      gl_FragColor = resColor * u_alpha;\n    }\n  "
                };
                var HolePunch = {
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
                    fragment: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    uniform float u_alpha;\n    uniform float u_pixelRatio;\n    uniform vec2 u_dimensions;\n    uniform sampler2D u_texture;\n\n    uniform vec2 u_size;\n    uniform vec2 u_pos;\n\n    uniform vec4 u_radius;\n\n    uniform vec4 u_color;\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n\n    void main() {\n      vec4 color = texture2D(u_texture, v_textureCoords) * v_color;\n      vec2 p = (v_textureCoords.xy * u_dimensions.xy - u_pos) - u_size;\n      vec4 r = u_radius;\n      r.xy = (p.x > 0.0) ? r.yz : r.xw;\n      r.x = (p.y > 0.0) ? r.y : r.x;\n      p = abs(p) - u_size + r.x;\n      float dist = min(max(p.x, p.y), 0.0) + length(max(p, 0.0)) - r.x + 2.0;\n      float roundedAlpha = 1.0 - smoothstep(0.0, u_pixelRatio, dist);\n      gl_FragColor = mix(color, vec4(0.0), min(color.a, roundedAlpha));\n    }\n  "
                };
                var LinearGradient = {
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
                    vertex: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    attribute vec2 a_position;\n    attribute vec2 a_textureCoords;\n    attribute vec4 a_color;\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n    uniform vec2 u_dimensions;\n    uniform float u_angle;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n    varying float v_dist;\n\n    const float PI = 3.14159265359;\n\n    vec2 calcPoint(float d, float angle) {\n      return d * vec2(cos(angle), sin(angle)) + (u_dimensions * 0.5);\n    }\n\n    void main() {\n      vec2 normalized = a_position * u_pixelRatio / u_resolution;\n      vec2 zero_two = normalized * 2.0;\n      vec2 clip_space = zero_two - 1.0;\n\n      gl_Position = vec4(clip_space * vec2(1.0, -1.0), 0, 1);\n\n      v_color = a_color;\n      v_textureCoords = a_textureCoords;\n\n      float a = u_angle;\n      float lineDist = abs(u_dimensions.x * cos(a)) + abs(u_dimensions.y * sin(a));\n      vec2 f = calcPoint(lineDist * 0.5, a);\n      vec2 t = calcPoint(lineDist * 0.5, a + PI);\n      vec2 gradVec = t - f;\n      float dist = dot(a_textureCoords * u_dimensions - f, gradVec) / dot(gradVec, gradVec);\n      v_dist = dist;\n    }\n  ",
                    fragment: function fragment(renderer, props) {
                        return "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    #define MAX_STOPS ".concat(props.colors.length, "\n    #define LAST_STOP ").concat(props.colors.length - 1, "\n\n    uniform sampler2D u_texture;\n    uniform float u_stops[MAX_STOPS];\n    uniform vec4 u_colors[MAX_STOPS];\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n    varying float v_dist;\n\n    vec4 getGradientColor(float dist) {\n      dist = clamp(dist, 0.0, 1.0);\n\n      if(dist <= u_stops[0]) {\n        return u_colors[0];\n      }\n\n      if(dist >= u_stops[LAST_STOP]) {\n        return u_colors[LAST_STOP];\n      }\n\n      for(int i = 0; i < LAST_STOP; i++) {\n        float left = u_stops[i];\n        float right = u_stops[i + 1];\n        if(dist >= left && dist <= right) {\n          float lDist = smoothstep(left, right, dist);\n          return mix(u_colors[i], u_colors[i + 1], lDist);\n        }\n      }\n      return u_colors[LAST_STOP];\n    }\n\n    void main() {\n      vec4 color = texture2D(u_texture, v_textureCoords) * v_color;\n      vec4 colorOut = getGradientColor(v_dist);\n      vec3 blendedRGB = mix(color.rgb, colorOut.rgb, clamp(colorOut.a, 0.0, 1.0));\n      gl_FragColor = vec4(blendedRGB, color.a);\n    }\n  ");
                    }
                };
                var RadialGradient = {
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
                        return "\n      # ifdef GL_FRAGMENT_PRECISION_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      #define MAX_STOPS ".concat(props.colors.length, "\n      #define LAST_STOP ").concat(props.colors.length - 1, "\n\n      uniform float u_alpha;\n      uniform vec2 u_dimensions;\n\n      uniform sampler2D u_texture;\n\n      uniform vec2 u_projection;\n      uniform vec2 u_size;\n\n      uniform float u_stops[MAX_STOPS];\n      uniform vec4 u_colors[MAX_STOPS];\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoords;\n      varying vec2 v_nodeCoords;\n\n      vec4 getGradientColor(float dist) {\n        dist = clamp(dist, 0.0, 1.0);\n\n        if(dist <= u_stops[0]) {\n          return u_colors[0];\n        }\n\n        if(dist >= u_stops[LAST_STOP]) {\n          return u_colors[LAST_STOP];\n        }\n\n        for(int i = 0; i < LAST_STOP; i++) {\n          float left = u_stops[i];\n          float right = u_stops[i + 1];\n          if(dist >= left && dist <= right) {\n            float lDist = smoothstep(left, right, dist);\n            return mix(u_colors[i], u_colors[i + 1], lDist);\n          }\n        }\n\n        return u_colors[LAST_STOP];\n      }\n\n      void main() {\n        vec4 color = texture2D(u_texture, v_textureCoords) * v_color;\n        vec2 point = v_nodeCoords.xy * u_dimensions;\n        float dist = length((point - u_projection) / u_size);\n\n        vec4 colorOut = getGradientColor(dist);\n        vec3 blendedRGB = mix(color.rgb, colorOut.rgb, clamp(colorOut.a, 0.0, 1.0));\n        gl_FragColor = vec4(blendedRGB, color.a);\n      }\n    ");
                    }
                };
                var RadialProgressTemplate = {
                    props: {
                        width: 8,
                        radius: 0,
                        progress: {
                            default: 1,
                            resolve: function resolve(value) {
                                if (value === undefined) return this.default;
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
                                if (value !== undefined && value.length > 0) {
                                    return value;
                                }
                                return [].concat(this.default);
                            }
                        },
                        stops: {
                            default: [ 0 ],
                            resolve: function resolve(value, props) {
                                if (value !== undefined && value.length === props.colors.length) {
                                    return value;
                                }
                                if (value === undefined) {
                                    value = [];
                                }
                                var len = props.colors.length;
                                if (len === 1) {
                                    value[0] = 0;
                                    value.length = 1;
                                    return value;
                                }
                                for (var i = 0; i < len; i++) {
                                    value[i] = i * (1 / (len - 1));
                                }
                                value.length = len;
                                return value;
                            }
                        },
                        trackColor: 0,
                        cap: 1,
                        duration: {
                            default: 0,
                            resolve: function resolve(value) {
                                if (value === undefined) return this.default;
                                if (value < 0) return 0;
                                return value;
                            }
                        },
                        countdown: 1
                    }
                };
                var RadialProgress = {
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
                        return "\n      # ifdef GL_FRAGMENT_PRECISION_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      #define MAX_STOPS ".concat(maxStops, "\n      #define LAST_STOP ").concat(maxStops - 1, "\n      #define CAP_ROUND ").concat(props.cap, "\n      #define HAS_TRACK ").concat(props.trackColor !== 0 ? 1 : 0, "\n\n      #define TWO_PI 6.28318530717958647692\n\n      uniform float u_alpha;\n      uniform float u_time;\n      uniform vec2 u_dimensions;\n      uniform sampler2D u_texture;\n\n      uniform vec2 u_center;\n      uniform float u_radius;\n      uniform float u_width;\n      uniform float u_progress;\n      uniform float u_startAngle;\n      uniform float u_direction;\n      uniform float u_duration;\n      uniform float u_countdown;\n\n      uniform float u_stops[MAX_STOPS];\n      uniform vec4 u_colors[MAX_STOPS];\n      uniform vec4 u_trackColor;\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoords;\n      varying vec2 v_nodeCoords;\n\n      vec4 getGradientColor(float dist) {\n        dist = clamp(dist, 0.0, 1.0);\n\n        if (dist <= u_stops[0]) {\n          return u_colors[0];\n        }\n        if (dist >= u_stops[LAST_STOP]) {\n          return u_colors[LAST_STOP];\n        }\n        for (int i = 0; i < LAST_STOP; i++) {\n          float left = u_stops[i];\n          float right = u_stops[i + 1];\n          if (dist >= left && dist <= right) {\n            float lDist = smoothstep(left, right, dist);\n            return mix(u_colors[i], u_colors[i + 1], lDist);\n          }\n        }\n        return u_colors[LAST_STOP];\n      }\n\n      // Coverage of a disc centered at `c` with radius `r` at pixel `p` (with 1px AA)\n      float discCoverage(vec2 p, vec2 c, float r) {\n        return 1.0 - smoothstep(r - 1.0, r + 1.0, length(p - c));\n      }\n\n      void main() {\n        vec4 base = texture2D(u_texture, v_textureCoords) * v_color;\n\n        // Effective progress: when u_duration > 0 the shader self-animates from\n        // u_time, otherwise we use the static u_progress prop. countdown == 1\n        // drains (1 -> 0), countdown == 0 fills (0 -> 1).\n        float cyclePos = u_duration > 0.0 ? fract(u_time / u_duration) : 0.0;\n        float animProgress = u_countdown > 0.5 ? 1.0 - cyclePos : cyclePos;\n        float progress = u_duration > 0.0 ? animProgress : u_progress;\n\n        vec2 p = v_nodeCoords.xy * u_dimensions - u_center;\n        float dist = length(p);\n        float halfW = u_width * 0.5;\n\n        // Ring coverage: 1 inside the stroke band, 0 outside (with 1px AA on both edges)\n        float ringCoverage =\n          smoothstep(u_radius - halfW - 1.0, u_radius - halfW + 1.0, dist) *\n          (1.0 - smoothstep(u_radius + halfW - 1.0, u_radius + halfW + 1.0, dist));\n\n        // Angle along the arc, normalized to [0, 1) starting at u_startAngle\n        float ang = atan(p.y, p.x);\n        float t = mod((ang - u_startAngle) * u_direction, TWO_PI) / TWO_PI;\n\n        // Filled arc coverage (1 if in filled arc, else 0). When progress >= 1 the\n        // whole ring is filled regardless of `t` -- guards against the mod() seam.\n        float arcCoverage = progress >= 1.0 ? 1.0 : step(t, progress);\n        float fillCoverage = ringCoverage * arcCoverage;\n\n        #if CAP_ROUND\n          // Round caps: discs of radius halfW at the start and head of the arc\n          float a0 = u_startAngle;\n          float a1 = u_startAngle + u_direction * progress * TWO_PI;\n          vec2 cap0 = vec2(cos(a0), sin(a0)) * u_radius;\n          vec2 cap1 = vec2(cos(a1), sin(a1)) * u_radius;\n          float capMask = max(discCoverage(p, cap0, halfW), discCoverage(p, cap1, halfW));\n          // Caps only visible when there's something to cap (progress > 0 and < 1).\n          float capGate = step(0.0001, progress) * step(progress, 0.9999);\n          fillCoverage = max(fillCoverage, capMask * capGate);\n        #endif\n\n        // Sample gradient. Normalize `t` to the *filled* portion so the gradient\n        // spans the visible arc end-to-end regardless of progress.\n        float gradT = progress > 0.0 ? clamp(t / progress, 0.0, 1.0) : 0.0;\n        vec4 fillCol = getGradientColor(gradT);\n\n        // Composite: track under fill (if track enabled), both gated by ringCoverage.\n        // We work in PREMULTIPLIED-alpha space here so AA edges composite cleanly\n        // against `base` -- mix(base.rgb, layer.rgb, la) with a coverage-scaled\n        // `layer` would multiply layer.rgb by coverage a second time and darken\n        // the AA falloff (see issue #36). The renderer's blend func is\n        // (ONE, ONE_MINUS_SRC_ALPHA), which expects premultiplied output.\n        vec4 fillPM = vec4(fillCol.rgb * fillCol.a, fillCol.a);\n        vec4 layer = vec4(0.0);\n        #if HAS_TRACK\n          vec4 trackPM = vec4(u_trackColor.rgb * u_trackColor.a, u_trackColor.a);\n          float trackCoverage = ringCoverage * (1.0 - fillCoverage);\n          layer = trackPM * trackCoverage + fillPM * fillCoverage;\n        #else\n          layer = fillPM * fillCoverage;\n        #endif\n\n        // Premultiplied \"over\": out = src + dst*(1 - src.a). The output stays\n        // visible on a fully-transparent `base` because layer brings its own alpha.\n        float la = clamp(layer.a, 0.0, 1.0);\n        vec3 blended = base.rgb * (1.0 - la) + layer.rgb;\n        float outA = base.a + la * (1.0 - base.a);\n        gl_FragColor = vec4(blended, outA);\n      }\n    ");
                    }
                };
                var memo = function memo(fn) {
                    return createMemo(function() {
                        return fn();
                    });
                };
                function createRenderer$1(_ref53) {
                    var createElement = _ref53.createElement, createTextNode = _ref53.createTextNode, isTextNode = _ref53.isTextNode, replaceText = _ref53.replaceText, insertNode = _ref53.insertNode, removeNode = _ref53.removeNode, setProperty = _ref53.setProperty, getParentNode = _ref53.getParentNode, getFirstChild = _ref53.getFirstChild, getNextSibling = _ref53.getNextSibling;
                    function insert(parent, accessor, marker, initial) {
                        if (marker !== undefined && !initial) initial = [];
                        if (typeof accessor !== "function") return insertExpression(parent, accessor, initial, marker);
                        createRenderEffect(function(current) {
                            return insertExpression(parent, accessor(), current, marker);
                        }, initial);
                    }
                    function insertExpression(parent, value, current, marker, unwrapArray) {
                        while (typeof current === "function") current = current();
                        if (value === current) return current;
                        var t = _typeof(value), multi = marker !== undefined;
                        if (t === "string" || t === "number") {
                            if (t === "number") value = value.toString();
                            if (multi) {
                                var node = current[0];
                                if (node && isTextNode(node)) {
                                    replaceText(node, value);
                                } else node = createTextNode(value);
                                current = cleanChildren(parent, current, marker, node);
                            } else {
                                if (current !== "" && typeof current === "string") {
                                    replaceText(getFirstChild(parent), current = value);
                                } else {
                                    cleanChildren(parent, current, marker, createTextNode(value));
                                    current = value;
                                }
                            }
                        } else if (value == null || t === "boolean") {
                            current = cleanChildren(parent, current, marker);
                        } else if (t === "function") {
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
                            } else {
                                if (Array.isArray(current)) {
                                    if (current.length === 0) {
                                        appendNodes(parent, array, marker);
                                    } else reconcileArrays(parent, current, array);
                                } else if (current == null || current === "") {
                                    appendNodes(parent, array);
                                } else {
                                    reconcileArrays(parent, multi && current || [ getFirstChild(parent) ], array);
                                }
                            }
                            current = array;
                        } else {
                            if (Array.isArray(current)) {
                                if (multi) return current = cleanChildren(parent, current, marker, value);
                                cleanChildren(parent, current, null, value);
                            } else if (current == null || current === "" || !getFirstChild(parent)) {
                                insertNode(parent, value);
                            } else replaceNode(parent, value, getFirstChild(parent));
                            current = value;
                        }
                        return current;
                    }
                    function normalizeIncomingArray(normalized, array, unwrap) {
                        var dynamic = false;
                        for (var i = 0, len = array.length; i < len; i++) {
                            var item = array[i], t = void 0;
                            if (item == null || item === true || item === false) ; else if (Array.isArray(item)) {
                                dynamic = normalizeIncomingArray(normalized, item) || dynamic;
                            } else if ((t = _typeof(item)) === "string" || t === "number") {
                                normalized.push(createTextNode(item));
                            } else if (t === "function") {
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
                            } else if (bEnd === bStart) {
                                while (aStart < aEnd) {
                                    if (!map || !map.has(a[aStart])) removeNode(parentNode, a[aStart]);
                                    aStart++;
                                }
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
                                        var _i22 = aStart, sequence = 1, t = void 0;
                                        while (++_i22 < aEnd && _i22 < bEnd) {
                                            if ((t = map.get(a[_i22])) == null || t !== index + sequence) break;
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
                        if (marker === undefined) {
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
                        if (!skipChildren) {
                            createRenderEffect(function() {
                                return prevProps.children = insertExpression(node, props.children, prevProps.children);
                            });
                        }
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
                            if (typeof accessor === "function") {
                                createRenderEffect(function(current) {
                                    return spreadExpression(node, accessor(), current, skipChildren);
                                });
                            } else spreadExpression(node, accessor, undefined, skipChildren);
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
                        memo: memo,
                        createComponent: createComponent,
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
                var nodeOpts = {
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
                            if (node.parent.rendered) {
                                node.render(true);
                            }
                            if (prevParent !== void 0) {
                                enqueueDelete(node, 1);
                            }
                        } else if (isElementText(parent)) {
                            parent.text = parent.getText();
                        }
                    },
                    isTextNode: function isTextNode(node) {
                        return isElementText(node);
                    },
                    removeNode: function removeNode(parent, node) {
                        log("REMOVE: ", parent, node);
                        parent.removeChild(node);
                        if (node instanceof ElementNode) {
                            enqueueDelete(node, -1);
                        } else if (isElementText(parent)) {
                            parent.text = parent.getText();
                        }
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
                        if (index < children.length) {
                            return children[index];
                        }
                        return void 0;
                    }
                };
                var solidRenderer = createRenderer$2(nodeOpts);
                var renderer$1;
                var rootNode = nodeOpts.createElement("App");
                var render = function render(code) {
                    return solidRenderer.render(code, rootNode);
                };
                function createRenderer(rendererOptions, node) {
                    var options = Config.rendererOptions;
                    renderer$1 = startLightningRenderer(options, "app");
                    rootNode.lng = renderer$1.root;
                    rootNode.rendered = true;
                    renderer$1.on("idle", function() {
                        tasksEnabled = true;
                        processTasks();
                    });
                    return {
                        renderer: renderer$1,
                        rootNode: rootNode,
                        render: render
                    };
                }
                var taskQueue = [];
                var tasksEnabled = false;
                createRoot(function() {
                    createRenderEffect(function() {
                        activeElement();
                        tasksEnabled = false;
                    });
                });
                function processTasks() {
                    if (tasksEnabled && taskQueue.length) {
                        setTimeout(function() {
                            var task = taskQueue.shift();
                            if (task) {
                                task();
                                processTasks();
                            }
                        }, Config.taskDelay || 50);
                    }
                }
                var invisibleChars = /[\u200B\u200C\u200D\uFEFF\u00AD\u2060]/g;
                function hasZeroWidthSpace(space) {
                    return invisibleChars.test(space) === true;
                }
                var fontCache$1 = new Map;
                var fontLoadPromises$1 = new Map;
                var normalizedMetrics$1 = new Map;
                var nodesWaitingForFont$1 = Object.create(null);
                var initialized$1 = false;
                var buildKerningTable = function buildKerningTable(kernings) {
                    var kerningTable = {};
                    var i = 0;
                    var length = kernings.length;
                    while (i < length) {
                        var kerning = kernings[i];
                        i++;
                        if (kerning === undefined) {
                            continue;
                        }
                        var second = kerning.second;
                        var firsts = kerningTable[second];
                        if (firsts === undefined) {
                            firsts = {};
                            kerningTable[second] = firsts;
                        }
                        firsts[kerning.first] = kerning.amount;
                    }
                    return kerningTable;
                };
                var buildGlyphMap = function buildGlyphMap(chars) {
                    var glyphMap = new Map;
                    var i = 0;
                    var length = chars.length;
                    while (i < length) {
                        var glyph = chars[i];
                        i++;
                        if (glyph === undefined) {
                            continue;
                        }
                        glyphMap.set(glyph.id, glyph);
                        glyph.yoffset + glyph.height;
                    }
                    return glyphMap;
                };
                var processFontData$1 = function processFontData$1(fontFamily, fontData, atlasTexture, metrics) {
                    var glyphMap = buildGlyphMap(fontData.chars);
                    var kernings = buildKerningTable(fontData.kernings);
                    var maxCharHeight = 0;
                    var i = 0;
                    var length = fontData.chars.length;
                    while (i < length) {
                        var glyph = fontData.chars[i];
                        if (glyph !== undefined) {
                            var charHeight = glyph.yoffset + glyph.height;
                            if (charHeight > maxCharHeight) {
                                maxCharHeight = charHeight;
                            }
                        }
                        i++;
                    }
                    if (metrics === undefined && fontData.lightningMetrics === undefined) {
                        console.warn("Font metrics not found for SDF font ".concat(fontFamily, ". ") + "Make sure you are using the latest version of the Lightning " + "3 msdf-generator tool to generate your SDF fonts. Using default metrics.");
                    }
                    metrics = metrics || fontData.lightningMetrics || {
                        ascender: 800,
                        descender: -200,
                        lineGap: 200,
                        unitsPerEm: 1e3
                    };
                    if (metrics.capHeight === undefined) {
                        var capGlyph = glyphMap.get(72);
                        if (capGlyph !== undefined) {
                            var capHeightAtlasPx = fontData.common.base - capGlyph.yoffset;
                            metrics = _objectSpread(_objectSpread({}, metrics), {}, {
                                capHeight: capHeightAtlasPx / fontData.info.size * metrics.unitsPerEm
                            });
                        }
                    }
                    if (metrics.xHeight === undefined) {
                        var xGlyph = glyphMap.get(120);
                        if (xGlyph !== undefined) {
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
                var canRenderFont$1 = function canRenderFont$1(trProps) {
                    return isFontLoaded$1(trProps.fontFamily) || fontLoadPromises$1.has(trProps.fontFamily);
                };
                var loadFont$1 = function loadFont$1(stage, options) {
                    var fontFamily = options.fontFamily, atlasUrl = options.atlasUrl, atlasDataUrl = options.atlasDataUrl, metrics = options.metrics;
                    if (fontCache$1.get(fontFamily) !== undefined) {
                        return Promise.resolve();
                    }
                    var existingPromise = fontLoadPromises$1.get(fontFamily);
                    if (existingPromise !== undefined) {
                        return existingPromise;
                    }
                    if (atlasDataUrl === undefined) {
                        return Promise.reject(new Error("Atlas data URL must be provided for SDF font: ".concat(fontFamily)));
                    }
                    var nwff = nodesWaitingForFont$1[fontFamily] = [];
                    var loadPromise = _asyncToGenerator(_regenerator().m(function _callee19() {
                        var fontData;
                        return _regenerator().w(function(_context19) {
                            while (1) switch (_context19.n) {
                              case 0:
                                _context19.n = 1;
                                return new Promise(function(resolve, reject) {
                                    var xhr = new XMLHttpRequest;
                                    xhr.open("GET", atlasDataUrl, true);
                                    xhr.responseType = "json";
                                    xhr.onload = function() {
                                        if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 0) {
                                            var data = xhr.response;
                                            if (typeof data === "string") {
                                                try {
                                                    data = JSON.parse(data);
                                                } catch (e) {
                                                    reject(new Error("Failed to parse font data JSON"));
                                                    return;
                                                }
                                            }
                                            resolve(data);
                                        } else {
                                            reject(new Error("Failed to load font data: ".concat(xhr.statusText)));
                                        }
                                    };
                                    xhr.onerror = function() {
                                        reject(new Error("Network error occurred while trying to load the font data."));
                                    };
                                    xhr.send(null);
                                });

                              case 1:
                                fontData = _context19.v;
                                if (!(!fontData || !fontData.chars)) {
                                    _context19.n = 2;
                                    break;
                                }
                                throw new Error("Invalid SDF font data format");

                              case 2:
                                if (atlasUrl) {
                                    _context19.n = 3;
                                    break;
                                }
                                throw new Error("Atlas texture must be provided for SDF fonts");

                              case 3:
                                return _context19.a(2, new Promise(function(resolve, reject) {
                                    var atlasTexture = stage.txManager.createTexture("ImageTexture", {
                                        src: atlasUrl,
                                        premultiplyAlpha: false
                                    });
                                    atlasTexture.setRenderableOwner(fontFamily, true);
                                    atlasTexture.preventCleanup = true;
                                    if (atlasTexture.state === "loaded") {
                                        processFontData$1(fontFamily, fontData, atlasTexture, metrics);
                                        fontLoadPromises$1.delete(fontFamily);
                                        for (var key in nwff) {
                                            nwff[key].setUpdateType(UpdateType.Local);
                                        }
                                        delete nodesWaitingForFont$1[fontFamily];
                                        return resolve();
                                    }
                                    atlasTexture.on("loaded", function() {
                                        processFontData$1(fontFamily, fontData, atlasTexture, metrics);
                                        fontLoadPromises$1.delete(fontFamily);
                                        for (var _key1 in nwff) {
                                            nwff[_key1].setUpdateType(UpdateType.Local);
                                        }
                                        delete nodesWaitingForFont$1[fontFamily];
                                        resolve();
                                    });
                                    atlasTexture.on("failed", function(_target, error) {
                                        fontLoadPromises$1.delete(fontFamily);
                                        if (fontCache$1[fontFamily]) {
                                            delete fontCache$1[fontFamily];
                                        }
                                        console.error("Failed to load SDF font: ".concat(fontFamily), error);
                                        reject(error);
                                    });
                                }));
                            }
                        }, _callee19);
                    }))();
                    fontLoadPromises$1.set(fontFamily, loadPromise);
                    return loadPromise;
                };
                var waitingForFont$1 = function waitingForFont$1(fontFamily, node) {
                    if (nodesWaitingForFont$1[fontFamily] === undefined) {
                        return;
                    }
                    nodesWaitingForFont$1[fontFamily][node.id] = node;
                };
                var stopWaitingForFont$1 = function stopWaitingForFont$1(fontFamily, node) {
                    if (nodesWaitingForFont$1[fontFamily] === undefined) {
                        return;
                    }
                    delete nodesWaitingForFont$1[fontFamily][node.id];
                };
                var getFontFamilies$1 = function getFontFamilies$1() {
                    var families = {};
                    return families;
                };
                var init$3 = function init$3(c) {
                    if (initialized$1 === true) {
                        return;
                    }
                    initialized$1 = true;
                };
                var type$3 = "sdf";
                var isFontLoaded$1 = function isFontLoaded$1(fontFamily) {
                    return fontCache$1.has(fontFamily);
                };
                var getFontMetrics$1 = function getFontMetrics$1(fontFamily, fontSize) {
                    var label = fontFamily + "_" + fontSize;
                    var metricsCache = normalizedMetrics$1.get(label);
                    if (metricsCache !== undefined) {
                        return metricsCache;
                    }
                    var metrics = fontCache$1.get(fontFamily).metrics;
                    return processFontMetrics$1(fontFamily, fontSize, metrics);
                };
                var processFontMetrics$1 = function processFontMetrics$1(fontFamily, fontSize, metrics) {
                    var label = fontFamily + "_" + fontSize;
                    var normalized = normalizeFontMetrics(metrics, fontSize);
                    normalizedMetrics$1.set(label, normalized);
                    return normalized;
                };
                var getAtlas = function getAtlas(fontFamily) {
                    var cache = fontCache$1.get(fontFamily);
                    return cache !== undefined ? cache.atlasTexture : null;
                };
                var getFontData = function getFontData(fontFamily) {
                    return fontCache$1.get(fontFamily);
                };
                var getMaxCharHeight = function getMaxCharHeight(fontFamily) {
                    var cache = fontCache$1.get(fontFamily);
                    return cache !== undefined ? cache.maxCharHeight : 0;
                };
                var getLoadedFonts = function getLoadedFonts() {
                    return Array.from(fontCache$1.keys());
                };
                var unloadFont = function unloadFont(fontFamily) {
                    var cache = fontCache$1.get(fontFamily);
                    if (cache !== undefined) {
                        if (typeof cache.atlasTexture.free === "function") {
                            cache.atlasTexture.free();
                        }
                        fontCache$1.delete(fontFamily);
                    }
                };
                var measureText$1 = function measureText$1(text, fontFamily, letterSpacing) {
                    var cache = fontCache$1.get(fontFamily);
                    if (cache === undefined) return 0;
                    var glyphMap = cache.glyphMap;
                    var kernings = cache.kernings;
                    var fallbackGlyphId = 32;
                    var textLength = text.length;
                    if (textLength === 1) {
                        var codepoint = text.codePointAt(0);
                        if (codepoint === 8203) return 0;
                        var char = text[0];
                        if (hasZeroWidthSpace(char) === true) return 0;
                        var glyph = glyphMap.get(codepoint);
                        if (glyph === undefined) {
                            glyph = glyphMap.get(fallbackGlyphId);
                            if (glyph === undefined) return 0;
                        }
                        return glyph.xadvance + letterSpacing;
                    }
                    var width = 0;
                    var prevGlyphId = 0;
                    for (var i = 0; i < textLength; i++) {
                        var _codepoint = text.codePointAt(i);
                        if (_codepoint > 65535) {
                            i++;
                        }
                        if (_codepoint === 8203) {
                            continue;
                        }
                        var _char3 = text[i];
                        if (hasZeroWidthSpace(_char3) === true) {
                            continue;
                        }
                        var _glyph = glyphMap.get(_codepoint);
                        if (_glyph === undefined) {
                            _glyph = glyphMap.get(fallbackGlyphId);
                            if (_glyph === undefined) {
                                continue;
                            }
                        }
                        var advance = _glyph.xadvance;
                        if (prevGlyphId !== 0) {
                            var seconds = kernings[_glyph.id];
                            if (seconds !== undefined) {
                                var amount = seconds[prevGlyphId];
                                if (amount !== undefined) {
                                    advance += amount;
                                }
                            }
                        }
                        width += advance + letterSpacing;
                        prevGlyphId = _glyph.id;
                    }
                    return width;
                };
                var SdfFontHandler = Object.freeze(Object.defineProperty({
                    __proto__: null,
                    canRenderFont: canRenderFont$1,
                    getAtlas: getAtlas,
                    getFontData: getFontData,
                    getFontFamilies: getFontFamilies$1,
                    getFontMetrics: getFontMetrics$1,
                    getLoadedFonts: getLoadedFonts,
                    getMaxCharHeight: getMaxCharHeight,
                    init: init$3,
                    isFontLoaded: isFontLoaded$1,
                    loadFont: loadFont$1,
                    measureText: measureText$1,
                    processFontMetrics: processFontMetrics$1,
                    stopWaitingForFont: stopWaitingForFont$1,
                    type: type$3,
                    unloadFont: unloadFont,
                    waitingForFont: waitingForFont$1
                }, Symbol.toStringTag, {
                    value: "Module"
                }));
                var CoreRenderOp = _createClass(function CoreRenderOp() {
                    _classCallCheck(this, CoreRenderOp);
                });
                var SdfRenderOp = function(_CoreRenderOp) {
                    function SdfRenderOp(renderer, shader, quadBufferCollection, worldAlpha, clippingRect, w, h, rtt, parentHasRenderTexture, framebufferDimensions) {
                        var _this35;
                        _classCallCheck(this, SdfRenderOp);
                        _this35 = _callSuper(this, SdfRenderOp);
                        _defineProperty(_this35, "renderer", void 0);
                        _defineProperty(_this35, "shader", void 0);
                        _defineProperty(_this35, "quadBufferCollection", void 0);
                        _defineProperty(_this35, "worldAlpha", void 0);
                        _defineProperty(_this35, "clippingRect", void 0);
                        _defineProperty(_this35, "w", void 0);
                        _defineProperty(_this35, "h", void 0);
                        _defineProperty(_this35, "rtt", void 0);
                        _defineProperty(_this35, "parentHasRenderTexture", void 0);
                        _defineProperty(_this35, "framebufferDimensions", void 0);
                        _defineProperty(_this35, "numQuads", 0);
                        _defineProperty(_this35, "isCoreNode", false);
                        _defineProperty(_this35, "renderOpTextures", []);
                        _defineProperty(_this35, "time", 0);
                        _defineProperty(_this35, "stage", void 0);
                        _defineProperty(_this35, "startQuad", 0);
                        _this35.renderer = renderer;
                        _this35.shader = shader;
                        _this35.quadBufferCollection = quadBufferCollection;
                        _this35.worldAlpha = worldAlpha;
                        _this35.clippingRect = clippingRect;
                        _this35.w = w;
                        _this35.h = h;
                        _this35.rtt = rtt;
                        _this35.parentHasRenderTexture = parentHasRenderTexture;
                        _this35.framebufferDimensions = framebufferDimensions;
                        _this35.stage = renderer.stage;
                        return _this35;
                    }
                    _inherits(SdfRenderOp, _CoreRenderOp);
                    return _createClass(SdfRenderOp, [ {
                        key: "addTexture",
                        value: function addTexture(texture) {
                            var renderOpTextures = this.renderOpTextures;
                            var length = renderOpTextures.length;
                            for (var i = 0; i < length; i++) {
                                if (renderOpTextures[i] === texture) {
                                    return i;
                                }
                            }
                            renderOpTextures.push(texture);
                            return length;
                        }
                    }, {
                        key: "draw",
                        value: function draw() {
                            var _this$renderer = this.renderer, glw = _this$renderer.glw, options = _this$renderer.options, stage = _this$renderer.stage;
                            stage.shManager.useShader(this.shader.program);
                            this.shader.program.bindRenderOp(this);
                            if (this.clippingRect.valid === true) {
                                var pixelRatio = this.parentHasRenderTexture ? 1 : stage.pixelRatio;
                                var clipX = Math.round(this.clippingRect.x * pixelRatio);
                                var clipWidth = Math.round(this.clippingRect.w * pixelRatio);
                                var clipHeight = Math.round(this.clippingRect.h * pixelRatio);
                                var clipY = Math.round(options.canvas.height - clipHeight - this.clippingRect.y * pixelRatio);
                                if (this.parentHasRenderTexture) {
                                    clipY = this.framebufferDimensions ? this.framebufferDimensions.h - this.h : 0;
                                }
                                glw.setScissorTest(true);
                                glw.scissor(clipX, clipY, clipWidth, clipHeight);
                            } else {
                                glw.setScissorTest(false);
                            }
                            var byteOffset = this.startQuad * 6 * 2;
                            glw.drawElements(glw.TRIANGLES, 6 * this.numQuads, glw.UNSIGNED_SHORT, byteOffset);
                        }
                    } ]);
                }(CoreRenderOp);
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
                    return obj !== null && (_typeof(obj) === "object" && obj.constructor && obj.constructor.name === "HTMLImageElement" || typeof HTMLImageElement !== "undefined" && obj instanceof HTMLImageElement);
                }
                var TRANSPARENT_TEXTURE_DATA = new Uint8Array([ 0, 0, 0, 0 ]);
                var WebGlCtxTexture = function(_CoreContextTexture2) {
                    function WebGlCtxTexture(glw, memManager, textureSource) {
                        var _this36;
                        _classCallCheck(this, WebGlCtxTexture);
                        _this36 = _callSuper(this, WebGlCtxTexture, [ memManager, textureSource ]);
                        _defineProperty(_this36, "glw", void 0);
                        _defineProperty(_this36, "_nativeCtxTexture", null);
                        _defineProperty(_this36, "_w", 0);
                        _defineProperty(_this36, "_h", 0);
                        _defineProperty(_this36, "txCoords", {
                            x1: 0,
                            y1: 0,
                            x2: 1,
                            y2: 1
                        });
                        _this36.glw = glw;
                        return _this36;
                    }
                    _inherits(WebGlCtxTexture, _CoreContextTexture2);
                    return _createClass(WebGlCtxTexture, [ {
                        key: "checkGLError",
                        value: function checkGLError() {
                            if (this.state === "failed") {
                                return true;
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
                            var _load = _asyncToGenerator(_regenerator().m(function _callee20() {
                                var error, _yield$this$onLoadReq, w, h, _error, _t8;
                                return _regenerator().w(function(_context20) {
                                    while (1) switch (_context20.p = _context20.n) {
                                      case 0:
                                        if (!(this.state === "loading" || this.state === "loaded")) {
                                            _context20.n = 1;
                                            break;
                                        }
                                        return _context20.a(2, Promise.resolve());

                                      case 1:
                                        this.state = "loading";
                                        this.textureSource.setState("loading");
                                        this._nativeCtxTexture = this.createNativeCtxTexture();
                                        if (!(this._nativeCtxTexture === null)) {
                                            _context20.n = 2;
                                            break;
                                        }
                                        this.state = "failed";
                                        error = new Error("Could not create WebGL Texture");
                                        this.textureSource.setState("failed", error);
                                        console.error("Could not create WebGL Texture");
                                        throw error;

                                      case 2:
                                        _context20.p = 2;
                                        _context20.n = 3;
                                        return this.onLoadRequest();

                                      case 3:
                                        _yield$this$onLoadReq = _context20.v;
                                        w = _yield$this$onLoadReq.w;
                                        h = _yield$this$onLoadReq.h;
                                        if (!(this.state === "freed")) {
                                            _context20.n = 4;
                                            break;
                                        }
                                        return _context20.a(2);

                                      case 4:
                                        this.state = "loaded";
                                        this._w = w;
                                        this._h = h;
                                        this.textureSource.setState("loaded", {
                                            w: w,
                                            h: h
                                        });
                                        this.textureSource.freeTextureData();
                                        _context20.n = 7;
                                        break;

                                      case 5:
                                        _context20.p = 5;
                                        _t8 = _context20.v;
                                        if (!(this.state === "freed")) {
                                            _context20.n = 6;
                                            break;
                                        }
                                        return _context20.a(2);

                                      case 6:
                                        this.state = "failed";
                                        _error = _t8 instanceof Error ? _t8 : new Error(String(_t8));
                                        this.textureSource.setState("failed", _error);
                                        this.textureSource.freeTextureData();
                                        console.error(_t8);
                                        throw _error;

                                      case 7:
                                        return _context20.a(2);
                                    }
                                }, _callee20, this, [ [ 2, 5 ] ]);
                            }));
                            function load() {
                                return _load.apply(this, arguments);
                            }
                            return load;
                        }()
                    }, {
                        key: "onLoadRequest",
                        value: function() {
                            var _onLoadRequest = _asyncToGenerator(_regenerator().m(function _callee21() {
                                var glw, textureData, w, h, tdata, format, formatBytes, memoryPadding, isImageBitmap, _mipmaps$0$byteLength, _mipmaps$, mipmaps, _type3, blockInfo;
                                return _regenerator().w(function(_context21) {
                                    while (1) switch (_context21.n) {
                                      case 0:
                                        glw = this.glw;
                                        textureData = this.textureSource.textureData;
                                        if (!(textureData === null || this._nativeCtxTexture === null)) {
                                            _context21.n = 1;
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
                                            _context21.n = 3;
                                            break;
                                        }
                                        w = tdata.width;
                                        h = tdata.height;
                                        glw.bindTexture(this._nativeCtxTexture);
                                        glw.pixelStorei(glw.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !!textureData.premultiplyAlpha);
                                        glw.texImage2D(0, format, format, glw.UNSIGNED_BYTE, tdata);
                                        if (!(this.checkGLError() === true)) {
                                            _context21.n = 2;
                                            break;
                                        }
                                        throw this.textureSource.error || new Error("WebGL Error");

                                      case 2:
                                        this.setTextureMemUse(h * w * formatBytes * memoryPadding);
                                        _context21.n = 9;
                                        break;

                                      case 3:
                                        if (!(tdata === null)) {
                                            _context21.n = 4;
                                            break;
                                        }
                                        w = 0;
                                        h = 0;
                                        glw.bindTexture(this._nativeCtxTexture);
                                        glw.texImage2D(0, format, 1, 1, 0, format, glw.UNSIGNED_BYTE, TRANSPARENT_TEXTURE_DATA);
                                        this.setTextureMemUse(TRANSPARENT_TEXTURE_DATA.byteLength);
                                        _context21.n = 9;
                                        break;

                                      case 4:
                                        if (!("mipmaps" in tdata && tdata.mipmaps)) {
                                            _context21.n = 6;
                                            break;
                                        }
                                        mipmaps = tdata.mipmaps, _type3 = tdata.type, blockInfo = tdata.blockInfo;
                                        uploadCompressedTexture[_type3](glw, this._nativeCtxTexture, tdata);
                                        if (!(this.checkGLError() === true)) {
                                            _context21.n = 5;
                                            break;
                                        }
                                        throw this.textureSource.error || new Error("WebGL Error");

                                      case 5:
                                        w = tdata.w;
                                        h = tdata.h;
                                        this.txCoords.x2 = w / (Math.ceil(w / blockInfo.width) * blockInfo.width);
                                        this.txCoords.y2 = h / (Math.ceil(h / blockInfo.height) * blockInfo.height);
                                        this.setTextureMemUse((_mipmaps$0$byteLength = (_mipmaps$ = mipmaps[0]) === null || _mipmaps$ === void 0 ? void 0 : _mipmaps$.byteLength) !== null && _mipmaps$0$byteLength !== void 0 ? _mipmaps$0$byteLength : 0);
                                        _context21.n = 9;
                                        break;

                                      case 6:
                                        if (!(tdata && tdata instanceof Uint8Array)) {
                                            _context21.n = 8;
                                            break;
                                        }
                                        w = 1;
                                        h = 1;
                                        glw.bindTexture(this._nativeCtxTexture);
                                        glw.pixelStorei(glw.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !!textureData.premultiplyAlpha);
                                        glw.texImage2D(0, format, w, h, 0, format, glw.UNSIGNED_BYTE, tdata);
                                        if (!(this.checkGLError() === true)) {
                                            _context21.n = 7;
                                            break;
                                        }
                                        throw this.textureSource.error || new Error("WebGL Error");

                                      case 7:
                                        this.setTextureMemUse(w * h * formatBytes);
                                        _context21.n = 9;
                                        break;

                                      case 8:
                                        throw new Error("WebGlCoreCtxTexture.onLoadRequest: Unexpected textureData returned");

                                      case 9:
                                        return _context21.a(2, {
                                            w: w,
                                            h: h
                                        });
                                    }
                                }, _callee21, this);
                            }));
                            function onLoadRequest() {
                                return _onLoadRequest.apply(this, arguments);
                            }
                            return onLoadRequest;
                        }()
                    }, {
                        key: "free",
                        value: function free() {
                            if (this.state === "freed") {
                                return;
                            }
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
                            if (!nativeTexture) {
                                return null;
                            }
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
                var WebGlCtxSubTexture = function(_WebGlCtxTexture2) {
                    function WebGlCtxSubTexture(glw, memManager, textureSource) {
                        _classCallCheck(this, WebGlCtxSubTexture);
                        return _callSuper(this, WebGlCtxSubTexture, [ glw, memManager, textureSource ]);
                    }
                    _inherits(WebGlCtxSubTexture, _WebGlCtxTexture2);
                    return _createClass(WebGlCtxSubTexture, [ {
                        key: "onLoadRequest",
                        value: function() {
                            var _onLoadRequest2 = _asyncToGenerator(_regenerator().m(function _callee22() {
                                var props;
                                return _regenerator().w(function(_context22) {
                                    while (1) switch (_context22.n) {
                                      case 0:
                                        props = this.textureSource.textureData;
                                        if (!(props.data instanceof Uint8Array)) {
                                            _context22.n = 1;
                                            break;
                                        }
                                        return _context22.a(2, {
                                            w: 1,
                                            h: 1
                                        });

                                      case 1:
                                        return _context22.a(2, this.extractDimensions(props.data));
                                    }
                                }, _callee22, this);
                            }));
                            function onLoadRequest() {
                                return _onLoadRequest2.apply(this, arguments);
                            }
                            return onLoadRequest;
                        }()
                    }, {
                        key: "extractDimensions",
                        value: function extractDimensions(data) {
                            if (data === null) {
                                return {
                                    w: 0,
                                    h: 0
                                };
                            }
                            if (this.hasWidthHeight(data) === true) {
                                return {
                                    w: data.width,
                                    h: data.height
                                };
                            }
                            if (this.hasWH(data) === true) {
                                return {
                                    w: data.w,
                                    h: data.h
                                };
                            }
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
                var BufferCollection = function() {
                    function BufferCollection(config) {
                        _classCallCheck(this, BufferCollection);
                        _defineProperty(this, "config", void 0);
                        _defineProperty(this, "_lookup", new Map);
                        this.config = config;
                        var _iterator15 = _createForOfIteratorHelper(config), _step15;
                        try {
                            for (_iterator15.s(); !(_step15 = _iterator15.n()).done; ) {
                                var item = _step15.value;
                                for (var attrName in item.attributes) {
                                    if (item.attributes[attrName] && !this._lookup.has(attrName)) {
                                        this._lookup.set(attrName, item);
                                    }
                                }
                            }
                        } catch (err) {
                            _iterator15.e(err);
                        } finally {
                            _iterator15.f();
                        }
                    }
                    return _createClass(BufferCollection, [ {
                        key: "getBuffer",
                        value: function getBuffer(attributeName) {
                            var _this$_lookup$get;
                            return (_this$_lookup$get = this._lookup.get(attributeName)) === null || _this$_lookup$get === void 0 ? void 0 : _this$_lookup$get.buffer;
                        }
                    }, {
                        key: "getAttributeInfo",
                        value: function getAttributeInfo(attributeName) {
                            var _this$_lookup$get2;
                            return (_this$_lookup$get2 = this._lookup.get(attributeName)) === null || _this$_lookup$get2 === void 0 ? void 0 : _this$_lookup$get2.attributes[attributeName];
                        }
                    } ]);
                }();
                var WebGlContextWrapper = function() {
                    function WebGlContextWrapper(gl) {
                        _classCallCheck(this, WebGlContextWrapper);
                        _defineProperty(this, "gl", void 0);
                        _defineProperty(this, "activeTextureUnit", 0);
                        _defineProperty(this, "texture2dUnits", void 0);
                        _defineProperty(this, "texture2dParams", new WeakMap);
                        _defineProperty(this, "scissorEnabled", void 0);
                        _defineProperty(this, "scissorX", void 0);
                        _defineProperty(this, "scissorY", void 0);
                        _defineProperty(this, "scissorWidth", void 0);
                        _defineProperty(this, "scissorHeight", void 0);
                        _defineProperty(this, "blendEnabled", void 0);
                        _defineProperty(this, "blendSrcRgb", void 0);
                        _defineProperty(this, "blendDstRgb", void 0);
                        _defineProperty(this, "blendSrcAlpha", void 0);
                        _defineProperty(this, "blendDstAlpha", void 0);
                        _defineProperty(this, "boundArrayBuffer", void 0);
                        _defineProperty(this, "boundElementArrayBuffer", void 0);
                        _defineProperty(this, "curProgram", void 0);
                        _defineProperty(this, "curUniformLocations", {});
                        _defineProperty(this, "canvas", void 0);
                        _defineProperty(this, "MAX_RENDERBUFFER_SIZE", void 0);
                        _defineProperty(this, "MAX_TEXTURE_SIZE", void 0);
                        _defineProperty(this, "MAX_VIEWPORT_DIMS", void 0);
                        _defineProperty(this, "MAX_VERTEX_TEXTURE_IMAGE_UNITS", void 0);
                        _defineProperty(this, "MAX_TEXTURE_IMAGE_UNITS", void 0);
                        _defineProperty(this, "MAX_COMBINED_TEXTURE_IMAGE_UNITS", void 0);
                        _defineProperty(this, "MAX_VERTEX_ATTRIBS", void 0);
                        _defineProperty(this, "MAX_VARYING_VECTORS", void 0);
                        _defineProperty(this, "MAX_VERTEX_UNIFORM_VECTORS", void 0);
                        _defineProperty(this, "MAX_FRAGMENT_UNIFORM_VECTORS", void 0);
                        _defineProperty(this, "TEXTURE_MAG_FILTER", void 0);
                        _defineProperty(this, "TEXTURE_MIN_FILTER", void 0);
                        _defineProperty(this, "TEXTURE_WRAP_S", void 0);
                        _defineProperty(this, "TEXTURE_WRAP_T", void 0);
                        _defineProperty(this, "LINEAR", void 0);
                        _defineProperty(this, "LINEAR_MIPMAP_LINEAR", void 0);
                        _defineProperty(this, "CLAMP_TO_EDGE", void 0);
                        _defineProperty(this, "RGB", void 0);
                        _defineProperty(this, "RGBA", void 0);
                        _defineProperty(this, "UNSIGNED_BYTE", void 0);
                        _defineProperty(this, "UNPACK_PREMULTIPLY_ALPHA_WEBGL", void 0);
                        _defineProperty(this, "UNPACK_FLIP_Y_WEBGL", void 0);
                        _defineProperty(this, "FLOAT", void 0);
                        _defineProperty(this, "TRIANGLES", void 0);
                        _defineProperty(this, "UNSIGNED_SHORT", void 0);
                        _defineProperty(this, "ONE", void 0);
                        _defineProperty(this, "ONE_MINUS_SRC_ALPHA", void 0);
                        _defineProperty(this, "VERTEX_SHADER", void 0);
                        _defineProperty(this, "FRAGMENT_SHADER", void 0);
                        _defineProperty(this, "STATIC_DRAW", void 0);
                        _defineProperty(this, "COMPILE_STATUS", void 0);
                        _defineProperty(this, "LINK_STATUS", void 0);
                        _defineProperty(this, "DYNAMIC_DRAW", void 0);
                        _defineProperty(this, "COLOR_ATTACHMENT0", void 0);
                        _defineProperty(this, "INVALID_ENUM", void 0);
                        _defineProperty(this, "INVALID_OPERATION", void 0);
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
                        this.canvas = gl.canvas;
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
                        this.COLOR_ATTACHMENT0 = gl.COLOR_ATTACHMENT0;
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
                            if (this.texture2dUnits[this.activeTextureUnit] === texture) {
                                return;
                            }
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
                            if (!activeTexture) {
                                throw new Error("No active texture");
                            }
                            var textureParams = this.texture2dParams.get(activeTexture);
                            if (!textureParams) {
                                textureParams = {};
                                this.texture2dParams.set(activeTexture, textureParams);
                            }
                            if (textureParams[pname] === param) {
                                return;
                            }
                            textureParams[pname] = param;
                            this.gl.texParameteri(this.gl.TEXTURE_2D, pname, param);
                        }
                    }, {
                        key: "texImage2D",
                        value: function texImage2D(level, internalFormat, widthOrFormat, heightOrType, borderOrSource, format, type, pixels) {
                            if (format) {
                                this.gl.texImage2D(this.gl.TEXTURE_2D, level, internalFormat, widthOrFormat, heightOrType, borderOrSource, format, type, pixels);
                            } else {
                                this.gl.texImage2D(this.gl.TEXTURE_2D, level, internalFormat, widthOrFormat, heightOrType, borderOrSource);
                            }
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
                            if (texture) {
                                this.texture2dParams.delete(texture);
                            }
                            this.gl.deleteTexture(texture);
                        }
                    }, {
                        key: "deleteFramebuffer",
                        value: function deleteFramebuffer(framebuffer) {
                            this.gl.deleteFramebuffer(framebuffer);
                        }
                    }, {
                        key: "viewport",
                        value: function viewport(x, y, width, height) {
                            this.gl.viewport(x, y, width, height);
                        }
                    }, {
                        key: "clearColor",
                        value: function clearColor(red, green, blue, alpha) {
                            this.gl.clearColor(red, green, blue, alpha);
                        }
                    }, {
                        key: "setScissorTest",
                        value: function setScissorTest(enable) {
                            if (enable === this.scissorEnabled) {
                                return;
                            }
                            if (enable) {
                                this.gl.enable(this.gl.SCISSOR_TEST);
                            } else {
                                this.gl.disable(this.gl.SCISSOR_TEST);
                            }
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
                            if (blend === this.blendEnabled) {
                                return;
                            }
                            if (blend) {
                                this.gl.enable(this.gl.BLEND);
                            } else {
                                this.gl.disable(this.gl.BLEND);
                            }
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
                        key: "createFramebuffer",
                        value: function createFramebuffer() {
                            return this.gl.createFramebuffer();
                        }
                    }, {
                        key: "bindFramebuffer",
                        value: function bindFramebuffer(framebuffer) {
                            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, framebuffer);
                        }
                    }, {
                        key: "framebufferTexture2D",
                        value: function framebufferTexture2D(attachment, texture, level) {
                            var gl = this.gl;
                            gl.framebufferTexture2D(gl.FRAMEBUFFER, attachment, gl.TEXTURE_2D, texture, level);
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
                        key: "getUniformLocations",
                        value: function getUniformLocations(program) {
                            var gl = this.gl;
                            var length = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
                            var result = {};
                            for (var i = 0; i < length; i++) {
                                var info = gl.getActiveUniform(program, i);
                                var name = info.name.replace(/\[.*?\]/g, "");
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
                            if (this.curProgram === program) {
                                return;
                            }
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
                            if (this.boundArrayBuffer === buffer) {
                                this.boundArrayBuffer = null;
                            }
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
                var WebGlCtxRenderTexture = function(_WebGlCtxTexture3) {
                    function WebGlCtxRenderTexture(glw, memManager, textureSource) {
                        var _this37;
                        _classCallCheck(this, WebGlCtxRenderTexture);
                        _this37 = _callSuper(this, WebGlCtxRenderTexture, [ glw, memManager, textureSource ]);
                        _defineProperty(_this37, "framebuffer", null);
                        _defineProperty(_this37, "txCoords", {
                            x1: 0,
                            y1: 1,
                            x2: 1,
                            y2: 0
                        });
                        return _this37;
                    }
                    _inherits(WebGlCtxRenderTexture, _WebGlCtxTexture3);
                    return _createClass(WebGlCtxRenderTexture, [ {
                        key: "onLoadRequest",
                        value: function() {
                            var _onLoadRequest3 = _asyncToGenerator(_regenerator().m(function _callee23() {
                                var glw, nativeTexture, _this$textureSource, w, h;
                                return _regenerator().w(function(_context23) {
                                    while (1) switch (_context23.n) {
                                      case 0:
                                        glw = this.glw;
                                        nativeTexture = this._nativeCtxTexture = this.createNativeCtxTexture();
                                        if (nativeTexture) {
                                            _context23.n = 1;
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
                                        return _context23.a(2, {
                                            w: w,
                                            h: h
                                        });
                                    }
                                }, _callee23, this);
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
                var GL_OUT_OF_MEMORY = 1285;
                var MAX_DRAINED_GL_ERRORS = 8;
                var WebGlRenderer = function(_CoreRenderer2) {
                    function WebGlRenderer(options) {
                        var _this38;
                        _classCallCheck(this, WebGlRenderer);
                        _this38 = _callSuper(this, WebGlRenderer, [ options ]);
                        _defineProperty(_this38, "glw", void 0);
                        _defineProperty(_this38, "quadBuffer", void 0);
                        _defineProperty(_this38, "fQuadBuffer", void 0);
                        _defineProperty(_this38, "uiQuadBuffer", void 0);
                        _defineProperty(_this38, "rttQuadBuffer", null);
                        _defineProperty(_this38, "fRttQuadBuffer", null);
                        _defineProperty(_this38, "uiRttQuadBuffer", null);
                        _defineProperty(_this38, "renderOps", []);
                        _defineProperty(_this38, "coreTextRenderOps", []);
                        _defineProperty(_this38, "curBufferIdx", 0);
                        _defineProperty(_this38, "curRenderOp", null);
                        _defineProperty(_this38, "rttNodes", []);
                        _defineProperty(_this38, "activeRttNode", null);
                        _defineProperty(_this38, "sdfBuffer", void 0);
                        _defineProperty(_this38, "fSdfBuffer", void 0);
                        _defineProperty(_this38, "uiSdfBuffer", void 0);
                        _defineProperty(_this38, "sdfBufferIdx", 0);
                        _defineProperty(_this38, "sdfQuadCount", 0);
                        _defineProperty(_this38, "sdfQuadBufferCollection", void 0);
                        _defineProperty(_this38, "curSdfRenderOp", null);
                        _defineProperty(_this38, "needsFullUpload", true);
                        _defineProperty(_this38, "defaultTextureCoords", {
                            x1: 0,
                            y1: 0,
                            x2: 1,
                            y2: 1
                        });
                        _defineProperty(_this38, "defaultShaderNode", null);
                        _defineProperty(_this38, "quadBufferCollection", void 0);
                        _defineProperty(_this38, "clearColor", {
                            raw: 0,
                            normalized: [ 0, 0, 0, 0 ]
                        });
                        _defineProperty(_this38, "quadBufferUsage", 0);
                        _defineProperty(_this38, "numQuadsRendered", 0);
                        _defineProperty(_this38, "lastUploadedBufferSize", 0);
                        _defineProperty(_this38, "renderToTextureActive", false);
                        _this38.quadBuffer = new ArrayBuffer(_this38.stage.options.quadBufferSize);
                        _this38.fQuadBuffer = new Float32Array(_this38.quadBuffer);
                        _this38.uiQuadBuffer = new Uint32Array(_this38.quadBuffer);
                        _this38.sdfBuffer = new ArrayBuffer(512 * 1024);
                        _this38.fSdfBuffer = new Float32Array(_this38.sdfBuffer);
                        _this38.uiSdfBuffer = new Uint32Array(_this38.sdfBuffer);
                        _this38.mode = "webgl";
                        var gl = createWebGLContext(options.canvas, options.contextSpy);
                        var glw = _this38.glw = new WebGlContextWrapper(gl);
                        glw.viewport(0, 0, options.canvas.width, options.canvas.height);
                        _this38.attachContextLossListeners(options.canvas);
                        _this38.updateClearColor(_this38.stage.clearColor);
                        glw.setBlend(true);
                        glw.blendFunc(glw.ONE, glw.ONE_MINUS_SRC_ALPHA);
                        createIndexBuffer(glw, _this38.stage.bufferMemory);
                        var maxQuads = ~~(_this38.stage.bufferMemory / 80);
                        var nodeCoords = new Float32Array(maxQuads * 8);
                        for (var i = 0; i < maxQuads * 8; i += 8) {
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
                        var stride = 5 * Float32Array.BYTES_PER_ELEMENT;
                        _this38.quadBufferCollection = new BufferCollection([ {
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
                        _this38.sdfQuadBufferCollection = new BufferCollection([ {
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
                        return _this38;
                    }
                    _inherits(WebGlRenderer, _CoreRenderer2);
                    return _createClass(WebGlRenderer, [ {
                        key: "attachContextLossListeners",
                        value: function attachContextLossListeners(canvas) {
                            var _this39 = this;
                            if ("addEventListener" in canvas === false) {
                                return;
                            }
                            var target = canvas;
                            target.addEventListener("webglcontextlost", function() {
                                _this39.stage.setContextLost();
                            });
                        }
                    }, {
                        key: "reset",
                        value: function reset() {
                            var glw = this.glw;
                            if (DIRTY_QUAD_BUFFER) ; else {
                                this.curBufferIdx = 0;
                            }
                            this.curRenderOp = null;
                            this.curSdfRenderOp = null;
                            this.sdfBufferIdx = 0;
                            this.sdfQuadCount = 0;
                            this.renderOps.length = 0;
                            this.coreTextRenderOps.length = 0;
                            glw.setScissorTest(false);
                            if (this.stage.options.enableClear !== false) {
                                glw.clear();
                            }
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
                            return shaderType.fragment !== undefined;
                        }
                    }, {
                        key: "createCtxTexture",
                        value: function createCtxTexture(textureSource) {
                            if (textureSource instanceof SubTexture) {
                                return new WebGlCtxSubTexture(this.glw, this.stage.txMemManager, textureSource);
                            } else if (textureSource instanceof RenderTexture) {
                                return new WebGlCtxRenderTexture(this.glw, this.stage.txMemManager, textureSource);
                            }
                            return new WebGlCtxTexture(this.glw, this.stage.txMemManager, textureSource);
                        }
                    }, {
                        key: "addQuad",
                        value: function addQuad(node) {
                            var f = this.fQuadBuffer;
                            var u = this.uiQuadBuffer;
                            if (this.renderToTextureActive === true) {
                                if (this.fRttQuadBuffer === null) {
                                    this.rttQuadBuffer = new ArrayBuffer(this.stage.options.quadBufferSize);
                                    this.fRttQuadBuffer = new Float32Array(this.rttQuadBuffer);
                                    this.uiRttQuadBuffer = new Uint32Array(this.rttQuadBuffer);
                                }
                                f = this.fRttQuadBuffer;
                                u = this.uiRttQuadBuffer;
                            }
                            if (node.props.zIndex) {
                                this.flushTextRenderOps();
                            }
                            var props = node.props;
                            var tx = props.texture || this.stage.defaultTexture;
                            if (tx.type === TextureType.subTexture) {
                                tx = tx.parentTexture;
                            }
                            var ctx = tx.ctxTexture;
                            if (ctx === undefined) {
                                return;
                            }
                            var reuse = this.reuseRenderOp(node);
                            var isRTT = this.renderToTextureActive;
                            if (DIRTY_QUAD_BUFFER && !isRTT) {
                                if (node.quadBufferIndex === -1) {
                                    node.quadBufferIndex = this.curBufferIdx;
                                    this.curBufferIdx += 20;
                                }
                            } else {
                                node.quadBufferIndex = this.curBufferIdx;
                                this.curBufferIdx += 20;
                            }
                            var i = node.quadBufferIndex;
                            if (reuse === false) {
                                this.newRenderOp(node, i);
                            }
                            var tidx = this.curRenderOp.addTexture(ctx);
                            if (tidx === 4294967295) {
                                this.newRenderOp(node, i);
                                tidx = this.curRenderOp.addTexture(ctx);
                            }
                            if (!DIRTY_QUAD_BUFFER || isRTT || node.isQuadDirty) {
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
                                f[i + 5] = rc.x2;
                                f[i + 6] = rc.y2;
                                f[i + 7] = tc.x2;
                                f[i + 8] = tc.y1;
                                u[i + 9] = cTr;
                                f[i + 10] = rc.x4;
                                f[i + 11] = rc.y4;
                                f[i + 12] = tc.x1;
                                f[i + 13] = tc.y2;
                                u[i + 14] = cBl;
                                f[i + 15] = rc.x3;
                                f[i + 16] = rc.y3;
                                f[i + 17] = tc.x2;
                                f[i + 18] = tc.y2;
                                u[i + 19] = cBr;
                            }
                            this.curRenderOp.numQuads++;
                        }
                    }, {
                        key: "newRenderOp",
                        value: function newRenderOp(node, bufferIdx) {
                            var curRenderOp = node;
                            curRenderOp.renderOpBufferIdx = bufferIdx;
                            curRenderOp.numQuads = 0;
                            curRenderOp.renderOpTextures.length = 0;
                            this.curRenderOp = curRenderOp;
                            this.renderOps.push(curRenderOp);
                        }
                    }, {
                        key: "reuseRenderOp",
                        value: function reuseRenderOp(node) {
                            var curRenderOp = this.curRenderOp;
                            if (curRenderOp === null) {
                                return false;
                            }
                            if (curRenderOp.parentHasRenderTexture !== node.parentHasRenderTexture || curRenderOp.rtt === true !== (node.props.rtt === true)) {
                                return false;
                            }
                            if (compareRect(curRenderOp.clippingRect, node.clippingRect) === false) {
                                return false;
                            }
                            var shader = node.props.shader;
                            var curShader = curRenderOp.shader;
                            if (curShader.shaderKey === "default" && shader.shaderKey === "default") {
                                return true;
                            }
                            if (curShader !== shader) {
                                return false;
                            }
                            if (node.parentHasRenderTexture === true && node.parentFramebufferDimensions !== null) {
                                var curFbDims = curRenderOp.isCoreNode ? curRenderOp.parentFramebufferDimensions : curRenderOp.framebufferDimensions;
                                if (curFbDims === null || curFbDims.w !== node.parentFramebufferDimensions.w || curFbDims.h !== node.parentFramebufferDimensions.h) {
                                    return false;
                                }
                            }
                            if (curShader.program.reuseRenderOp(node, curRenderOp) === false) {
                                return false;
                            }
                            return true;
                        }
                    }, {
                        key: "addRenderOp",
                        value: function addRenderOp(renderable) {
                            {
                                this.coreTextRenderOps.push(renderable);
                                return;
                            }
                        }
                    }, {
                        key: "flushTextRenderOps",
                        value: function flushTextRenderOps() {
                            var len = this.coreTextRenderOps.length;
                            if (len === 0) {
                                return;
                            }
                            for (var i = 0; i < len; i++) {
                                this.renderOps.push(this.coreTextRenderOps[i]);
                            }
                            this.coreTextRenderOps.length = 0;
                            this.curRenderOp = null;
                            this.curSdfRenderOp = null;
                        }
                    }, {
                        key: "addSdfQuads",
                        value: function addSdfQuads(glyphs, fontScale, transform, color, worldAlpha, distanceRange, atlasTexture, clippingRect, width, height, parentHasRenderTexture, framebufferDimensions, sdfShader) {
                            var glyphCount = glyphs.length;
                            if (glyphCount === 0) {
                                return;
                            }
                            var idx = this.sdfBufferIdx;
                            this.ensureSdfBufferCapacity(idx + glyphCount * 24);
                            var f = this.fSdfBuffer;
                            var u = this.uiSdfBuffer;
                            var mergedColor = mergeColorAlpha(color, worldAlpha);
                            var r = mergedColor >>> 24;
                            var g = mergedColor >>> 16 & 255;
                            var b = mergedColor >>> 8 & 255;
                            var a = mergedColor & 255;
                            var packedColor = (a << 24 | b << 16 | g << 8 | r) >>> 0;
                            var m0 = transform[0] * fontScale;
                            var m1 = transform[1] * fontScale;
                            var m3 = transform[3] * fontScale;
                            var m4 = transform[4] * fontScale;
                            var m6 = transform[6];
                            var m7 = transform[7];
                            var startQuad = this.sdfQuadCount;
                            for (var gi = 0; gi < glyphCount; gi++) {
                                var glyph = glyphs[gi];
                                var gx1 = glyph.x;
                                var gy1 = glyph.y;
                                var gx2 = gx1 + glyph.width;
                                var gy2 = gy1 + glyph.height;
                                var u1 = glyph.atlasX;
                                var v1 = glyph.atlasY;
                                var u2 = u1 + glyph.atlasWidth;
                                var v2 = v1 + glyph.atlasHeight;
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
                            this.finalizeSdfBatch(startQuad, glyphCount, atlasTexture, clippingRect, worldAlpha, width, height, parentHasRenderTexture, framebufferDimensions, sdfShader);
                        }
                    }, {
                        key: "addSdfCachedQuads",
                        value: function addSdfCachedQuads(cachedVertices, numGlyphs, atlasTexture, clippingRect, worldAlpha, width, height, parentHasRenderTexture, framebufferDimensions, sdfShader) {
                            if (numGlyphs === 0) {
                                return;
                            }
                            var startQuad = this.sdfQuadCount;
                            this.ensureSdfBufferCapacity(this.sdfBufferIdx + cachedVertices.length);
                            this.fSdfBuffer.set(cachedVertices, this.sdfBufferIdx);
                            this.sdfBufferIdx += cachedVertices.length;
                            this.sdfQuadCount += numGlyphs;
                            this.finalizeSdfBatch(startQuad, numGlyphs, atlasTexture, clippingRect, worldAlpha, width, height, parentHasRenderTexture, framebufferDimensions, sdfShader);
                        }
                    }, {
                        key: "finalizeSdfBatch",
                        value: function finalizeSdfBatch(startQuad, glyphCount, atlasTexture, clippingRect, worldAlpha, width, height, parentHasRenderTexture, framebufferDimensions, sdfShader) {
                            var opList = this.coreTextRenderOps;
                            var cur = this.curSdfRenderOp;
                            var canBatch = false;
                            if (cur !== null) {
                                if (cur.renderOpTextures.length === 1 && cur.renderOpTextures[0] === atlasTexture) {
                                    if (compareRect(cur.clippingRect, clippingRect)) {
                                        if (cur.parentHasRenderTexture === parentHasRenderTexture && cur.rtt === false) {
                                            canBatch = true;
                                        }
                                    }
                                }
                            }
                            if (canBatch && cur !== null) {
                                cur.numQuads += glyphCount;
                            } else {
                                var op = new SdfRenderOp(this, sdfShader, this.sdfQuadBufferCollection, worldAlpha, clippingRect, width, height, false, parentHasRenderTexture, framebufferDimensions);
                                op.startQuad = startQuad;
                                op.numQuads = glyphCount;
                                op.addTexture(atlasTexture);
                                opList.push(op);
                                this.curSdfRenderOp = op;
                                this.curRenderOp = null;
                            }
                        }
                    }, {
                        key: "ensureSdfBufferCapacity",
                        value: function ensureSdfBufferCapacity(requiredSize) {
                            if (requiredSize <= this.fSdfBuffer.length) {
                                return;
                            }
                            var newCapacity = this.fSdfBuffer.length * 2;
                            while (newCapacity < requiredSize) {
                                newCapacity *= 2;
                            }
                            var sdfBufSize = newCapacity * Float32Array.BYTES_PER_ELEMENT;
                            var newBuffer = new ArrayBuffer(sdfBufSize);
                            var newFSdfBuffer = new Float32Array(newBuffer);
                            var newUiSdfBuffer = new Uint32Array(newBuffer);
                            newFSdfBuffer.set(this.fSdfBuffer);
                            this.sdfBuffer = newBuffer;
                            this.fSdfBuffer = newFSdfBuffer;
                            this.uiSdfBuffer = newUiSdfBuffer;
                        }
                    }, {
                        key: "render",
                        value: function render() {
                            var surface = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "screen";
                            {
                                this.flushTextRenderOps();
                            }
                            var glw = this.glw, quadBuffer = this.quadBuffer;
                            var buffer = this.quadBufferCollection.getBuffer("a_position") || null;
                            var BYTES = Float32Array.BYTES_PER_ELEMENT;
                            if (DIRTY_QUAD_BUFFER) {
                                if (this.needsFullUpload || this.curBufferIdx > this.lastUploadedBufferSize) {
                                    var arr = new Float32Array(quadBuffer, 0, this.curBufferIdx);
                                    glw.arrayBufferData(buffer, arr, glw.DYNAMIC_DRAW);
                                    this.needsFullUpload = false;
                                    this.lastUploadedBufferSize = this.curBufferIdx;
                                    var renderList = this.stage.renderList;
                                    for (var i = 0, len = renderList.length; i < len; i++) {
                                        renderList[i].isQuadDirty = false;
                                    }
                                } else {
                                    var _renderList = this.stage.renderList;
                                    for (var _i23 = 0, _len5 = _renderList.length; _i23 < _len5; _i23++) {
                                        var node = _renderList[_i23];
                                        if (node.isQuadDirty && node.quadBufferIndex !== -1) {
                                            var byteOffset = node.quadBufferIndex * BYTES;
                                            var view = new Float32Array(quadBuffer, byteOffset, 20);
                                            glw.arrayBufferSubData(buffer, byteOffset, view);
                                            node.isQuadDirty = false;
                                        }
                                    }
                                }
                            } else {
                                var _arr = new Float32Array(quadBuffer, 0, this.curBufferIdx);
                                glw.arrayBufferData(buffer, _arr, glw.STATIC_DRAW);
                            }
                            if (this.sdfBufferIdx > 0) {
                                var sdfBuf = this.sdfQuadBufferCollection.getBuffer("a_position") || null;
                                var sdfArr = new Float32Array(this.sdfBuffer, 0, this.sdfBufferIdx);
                                glw.arrayBufferData(sdfBuf, sdfArr, glw.DYNAMIC_DRAW);
                            }
                            for (var _i24 = 0, length = this.renderOps.length; _i24 < length; _i24++) {
                                this.renderOps[_i24].draw(this);
                            }
                            var BYTES_PER_ELEMENT = Float32Array.BYTES_PER_ELEMENT;
                            this.quadBufferUsage = this.curBufferIdx * BYTES_PER_ELEMENT;
                            var QUAD_SIZE_IN_BYTES = 4 * (5 * BYTES_PER_ELEMENT);
                            this.numQuadsRendered = this.quadBufferUsage / QUAD_SIZE_IN_BYTES;
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
                        key: "renderToTexture",
                        value: function renderToTexture(node) {
                            for (var i = 0; i < this.rttNodes.length; i++) {
                                if (this.rttNodes[i] === node) {
                                    return;
                                }
                            }
                            this.insertRTTNodeInOrder(node);
                        }
                    }, {
                        key: "insertRTTNodeInOrder",
                        value: function insertRTTNodeInOrder(node) {
                            var insertIndex = this.rttNodes.length;
                            var currentNode = node;
                            while (currentNode) {
                                if (!currentNode.parent) {
                                    break;
                                }
                                var parentIndex = this.rttNodes.indexOf(currentNode.parent);
                                if (parentIndex !== -1) {
                                    insertIndex = parentIndex;
                                    break;
                                }
                                currentNode = currentNode.parent;
                            }
                            var maxChildIndex = this.findMaxChildRTTIndex(node);
                            if (maxChildIndex !== -1) {
                                insertIndex = Math.max(insertIndex, maxChildIndex + 1);
                            }
                            this.rttNodes.splice(insertIndex, 0, node);
                        }
                    }, {
                        key: "findMaxChildRTTIndex",
                        value: function findMaxChildRTTIndex(node) {
                            var _this40 = this;
                            var maxIndex = -1;
                            var _traverseChildren = function traverseChildren(currentNode) {
                                var currentIndex = _this40.rttNodes.indexOf(currentNode);
                                if (currentIndex !== -1) {
                                    maxIndex = Math.max(maxIndex, currentIndex);
                                }
                                var _iterator16 = _createForOfIteratorHelper(currentNode.children), _step16;
                                try {
                                    for (_iterator16.s(); !(_step16 = _iterator16.n()).done; ) {
                                        var child = _step16.value;
                                        _traverseChildren(child);
                                    }
                                } catch (err) {
                                    _iterator16.e(err);
                                } finally {
                                    _iterator16.f();
                                }
                            };
                            _traverseChildren(node);
                            return maxIndex;
                        }
                    }, {
                        key: "renderRTTNodes",
                        value: function renderRTTNodes() {
                            var glw = this.glw;
                            var savedBufferIdx = this.curBufferIdx;
                            for (var i = 0; i < this.rttNodes.length; i++) {
                                var node = this.rttNodes[i];
                                if (node === undefined || node.hasRTTupdates === false) {
                                    continue;
                                }
                                if (node.worldAlpha === 0 || node.renderState === CoreNodeRenderState.OutOfBounds) {
                                    continue;
                                }
                                if (node.texture === null || node.texture.state !== "loaded") {
                                    continue;
                                }
                                this.activeRttNode = node;
                                var ctxTexture = node.texture.ctxTexture;
                                this.renderToTextureActive = true;
                                glw.bindFramebuffer(ctxTexture.framebuffer);
                                glw.viewport(0, 0, ctxTexture.w, ctxTexture.h);
                                glw.clearColor(0, 0, 0, 0);
                                glw.clear();
                                this.curBufferIdx = 0;
                                this.needsFullUpload = true;
                                this.lastUploadedBufferSize = 0;
                                this.curRenderOp = null;
                                this.curSdfRenderOp = null;
                                this.addRTTQuads(node);
                                this.renderRTT();
                                this.renderOps.length = 0;
                                this.coreTextRenderOps.length = 0;
                                node.hasRTTupdates = false;
                            }
                            this.curBufferIdx = savedBufferIdx;
                            this.needsFullUpload = true;
                            this.lastUploadedBufferSize = 0;
                            var clearColor = this.clearColor.normalized;
                            glw.clearColor(clearColor[0], clearColor[1], clearColor[2], clearColor[3]);
                            glw.bindFramebuffer(null);
                            glw.viewport(0, 0, this.glw.canvas.width, this.glw.canvas.height);
                            this.renderToTextureActive = false;
                        }
                    }, {
                        key: "addRTTQuads",
                        value: function addRTTQuads(node) {
                            var children = node.children;
                            for (var i = 0, len = children.length; i < len; i++) {
                                var child = children[i];
                                if (child === undefined || child.worldAlpha === 0 || child.renderState === CoreNodeRenderState.OutOfBounds) {
                                    continue;
                                }
                                if (child.isRenderable === true) {
                                    child.renderQuads(this);
                                }
                                child.hasRTTupdates = false;
                                if (!child.props.rtt) {
                                    this.addRTTQuads(child);
                                }
                            }
                        }
                    }, {
                        key: "renderRTT",
                        value: function renderRTT() {
                            {
                                this.flushTextRenderOps();
                            }
                            var glw = this.glw;
                            var buffer = this.quadBufferCollection.getBuffer("a_position") || null;
                            var arr = new Float32Array(this.rttQuadBuffer, 0, this.curBufferIdx);
                            glw.arrayBufferData(buffer, arr, glw.STATIC_DRAW);
                            if (this.sdfBufferIdx > 0) {
                                var sdfBuf = this.sdfQuadBufferCollection.getBuffer("a_position") || null;
                                var sdfArr = new Float32Array(this.sdfBuffer, 0, this.sdfBufferIdx);
                                glw.arrayBufferData(sdfBuf, sdfArr, glw.DYNAMIC_DRAW);
                            }
                            for (var i = 0, length = this.renderOps.length; i < length; i++) {
                                this.renderOps[i].draw(this);
                            }
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
                            if (index === -1) {
                                return;
                            }
                            this.rttNodes.splice(index, 1);
                        }
                    }, {
                        key: "getBufferInfo",
                        value: function getBufferInfo() {
                            var bufferInfo = {
                                totalAvailable: this.stage.options.quadBufferSize,
                                totalUsed: this.quadBufferUsage
                            };
                            return bufferInfo;
                        }
                    }, {
                        key: "checkForOutOfMemory",
                        value: function checkForOutOfMemory() {
                            var glw = this.glw;
                            var outOfMemory = false;
                            for (var i = 0; i < MAX_DRAINED_GL_ERRORS; i++) {
                                var error = glw.getError();
                                if (error === 0) {
                                    break;
                                }
                                if (error === GL_OUT_OF_MEMORY) {
                                    outOfMemory = true;
                                }
                            }
                            return outOfMemory;
                        }
                    }, {
                        key: "getDefaultShaderNode",
                        value: function getDefaultShaderNode() {
                            if (this.defaultShaderNode !== null) {
                                return this.defaultShaderNode;
                            }
                            this.stage.shManager.registerShaderType("default", Default);
                            this.defaultShaderNode = this.stage.shManager.createShader("default");
                            return this.defaultShaderNode;
                        }
                    }, {
                        key: "getTextureCoords",
                        value: function getTextureCoords(node) {
                            var texture = node.texture;
                            if (texture === null) {
                                return undefined;
                            }
                            var ctxTexture = texture.parentTexture !== undefined ? texture.parentTexture.ctxTexture : texture.ctxTexture;
                            if (ctxTexture === undefined) {
                                return undefined;
                            }
                            var textureOptions = node.props.textureOptions;
                            if (texture.type !== TextureType.subTexture && textureOptions === undefined) {
                                return ctxTexture.txCoords;
                            }
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
                            if (resizeMode !== undefined && resizeMode.type === "cover" && texture.dimensions !== null) {
                                var dimensions = texture.dimensions;
                                var _w2 = node.props.w;
                                var _h2 = node.props.h;
                                var scaleX = _w2 / dimensions.w;
                                var scaleY = _h2 / dimensions.h;
                                var scale = Math.max(scaleX, scaleY);
                                var precision = 1 / scale;
                                if (scaleX < scale) {
                                    var _resizeMode$clipX2;
                                    var desiredSize = precision * node.props.w;
                                    x1 = (1 - desiredSize / dimensions.w) * ((_resizeMode$clipX2 = resizeMode.clipX) !== null && _resizeMode$clipX2 !== void 0 ? _resizeMode$clipX2 : .5);
                                    x2 = x1 + desiredSize / dimensions.w;
                                }
                                if (scaleY < scale) {
                                    var _resizeMode$clipY2;
                                    var _desiredSize = precision * node.props.h;
                                    y1 = (1 - _desiredSize / dimensions.h) * ((_resizeMode$clipY2 = resizeMode.clipY) !== null && _resizeMode$clipY2 !== void 0 ? _resizeMode$clipY2 : .5);
                                    y2 = y1 + _desiredSize / dimensions.h;
                                }
                            }
                            if (textureOptions.flipX === true) {
                                var _ref55 = [ x2, x1 ];
                                x1 = _ref55[0];
                                x2 = _ref55[1];
                            }
                            if (textureOptions.flipY === true) {
                                var _ref56 = [ y2, y1 ];
                                y1 = _ref56[0];
                                y2 = _ref56[1];
                            }
                            return {
                                x1: x1,
                                y1: y1,
                                x2: x2,
                                y2: y2
                            };
                        }
                    }, {
                        key: "invalidateQuadBuffer",
                        value: function invalidateQuadBuffer() {
                            if (!DIRTY_QUAD_BUFFER) {
                                return;
                            }
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
                            if (this.clearColor.raw === color) {
                                return;
                            }
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
                var Sdf = {
                    vertex: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    // Pre-transformed world-pixel position\n    attribute vec2 a_position;\n    attribute vec2 a_textureCoords;\n    // Per-vertex color (RGBA, unsigned byte, normalized)\n    attribute vec4 a_color;\n    // Per-vertex SDF distance range\n    attribute float a_distRange;\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n\n    varying vec2 v_texcoord;\n    varying float v_scaledDistRange;\n    varying vec4 v_color;\n\n    void main() {\n      // a_position is already in world pixel space (pre-transformed on CPU)\n      vec2 screenSpace = (a_position * u_pixelRatio / u_resolution * 2.0 - 1.0) * vec2(1, -1);\n\n      gl_Position = vec4(screenSpace, 0.0, 1.0);\n      v_texcoord = a_textureCoords;\n      v_scaledDistRange = a_distRange * u_pixelRatio;\n      v_color = a_color;\n    }\n  ",
                    fragment: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    uniform sampler2D u_texture;\n\n    varying vec2 v_texcoord;\n    varying float v_scaledDistRange;\n    varying vec4 v_color;\n\n    float median(float r, float g, float b) {\n        return clamp(b, min(r, g), max(r, g));\n    }\n\n    void main() {\n        vec3 s = texture2D(u_texture, v_texcoord).rgb;\n        float sigDist = v_scaledDistRange * (median(s.r, s.g, s.b) - 0.5);\n        float opacity = clamp(sigDist + 0.5, 0.0, 1.0) * v_color.a;\n\n        // Premultiply RGB by final opacity\n        gl_FragColor = vec4(v_color.rgb * opacity, opacity);\n    }\n  "
                };
                var type$2 = "sdf";
                var sdfShader = null;
                var maxLayoutCacheSize$1 = 250;
                var init$2 = function init$2(stage) {
                    init$3();
                    var configuredCacheSize = stage.options.textLayoutCacheSize;
                    if (configuredCacheSize !== undefined) {
                        maxLayoutCacheSize$1 = configuredCacheSize;
                    }
                    stage.shManager.registerShaderType("Sdf", Sdf);
                    sdfShader = null;
                };
                var getSdfShader = function getSdfShader(stage) {
                    if (sdfShader === null) {
                        sdfShader = stage.shManager.createShader("Sdf");
                    }
                    return sdfShader;
                };
                var font$1 = SdfFontHandler;
                var layoutCache$1 = new Map;
                var getLayoutCacheKey = function getLayoutCacheKey(props) {
                    return "".concat(props.fontFamily, "-").concat(props.fontStyle, "-").concat(props.fontSize, "-").concat(props.letterSpacing, "-").concat(props.lineHeight, "-").concat(props.maxHeight, "-").concat(props.maxWidth, "-").concat(props.maxLines, "-").concat(props.textAlign, "-").concat(props.wordBreak, "-").concat(props.overflowSuffix, "-").concat(props.text);
                };
                var renderText$1 = function renderText$1(props) {
                    if (props.text.length === 0) {
                        return {
                            width: 0,
                            height: 0
                        };
                    }
                    var cacheKey = getLayoutCacheKey(props);
                    var layout = layoutCache$1.get(cacheKey);
                    if (layout !== undefined) {
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
                    var fontData = getFontData(props.fontFamily);
                    if (fontData === undefined) {
                        return {
                            width: 0,
                            height: 0
                        };
                    }
                    layout = generateTextLayout(props, fontData);
                    layoutCache$1.set(cacheKey, layout);
                    return {
                        remainingLines: 0,
                        hasRemainingText: false,
                        width: layout.width,
                        height: layout.height,
                        layout: layout
                    };
                };
                var addQuads$1 = function addQuads$1(_layout) {
                    return null;
                };
                var renderQuads$1 = function renderQuads$1(renderer, layout, _vertexBuffer, renderProps) {
                    var fontFamily = renderProps.fontFamily;
                    var atlasTexture = getAtlas(fontFamily);
                    if (atlasTexture === null) {
                        return null;
                    }
                    var webGlRenderer = renderer;
                    var cache = renderProps.sdfCache;
                    var ctxTexture = atlasTexture.ctxTexture;
                    var shader = getSdfShader(webGlRenderer.stage);
                    if (cache !== undefined && cache.vertices !== null) {
                        var ct = cache.transform;
                        var t = renderProps.globalTransform;
                        if (cache.layoutRef === layout && cache.color === renderProps.color && cache.alpha === renderProps.worldAlpha && ct[0] === t[0] && ct[1] === t[1] && ct[2] === t[3] && ct[3] === t[4] && ct[4] === t[6] && ct[5] === t[7]) {
                            webGlRenderer.addSdfCachedQuads(cache.vertices, cache.glyphCount, ctxTexture, renderProps.clippingRect, renderProps.worldAlpha, layout.width, layout.height, renderProps.parentHasRenderTexture, renderProps.framebufferDimensions, shader);
                            return null;
                        }
                    }
                    var startIdx = webGlRenderer.sdfBufferIdx;
                    webGlRenderer.addSdfQuads(layout.glyphs, layout.fontScale, renderProps.globalTransform, renderProps.color, renderProps.worldAlpha, layout.distanceRange, ctxTexture, renderProps.clippingRect, layout.width, layout.height, renderProps.parentHasRenderTexture, renderProps.framebufferDimensions, shader);
                    if (cache !== undefined) {
                        var endIdx = webGlRenderer.sdfBufferIdx;
                        var len = endIdx - startIdx;
                        if (len > 0) {
                            if (cache.vertices === null || cache.vertices.length !== len) {
                                cache.vertices = new Float32Array(len);
                            }
                            cache.vertices.set(webGlRenderer.fSdfBuffer.subarray(startIdx, endIdx));
                            cache.glyphCount = layout.glyphs.length;
                            cache.color = renderProps.color;
                            cache.alpha = renderProps.worldAlpha;
                            cache.layoutRef = layout;
                            var _t9 = renderProps.globalTransform;
                            var _ct = cache.transform;
                            _ct[0] = _t9[0];
                            _ct[1] = _t9[1];
                            _ct[2] = _t9[3];
                            _ct[3] = _t9[4];
                            _ct[4] = _t9[6];
                            _ct[5] = _t9[7];
                        }
                    }
                    return null;
                };
                var generateTextLayout = function generateTextLayout(props, fontCache) {
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
                    var fallbackGlyphId = 32;
                    var fontScale = fontSize / designFontSize;
                    var letterSpacing = props.letterSpacing / fontScale;
                    var maxWidth = props.maxWidth / fontScale;
                    var maxHeight = props.maxHeight;
                    var _mapTextLayout = mapTextLayout(measureText$1, metrics, props.text, props.textAlign, fontFamily, lineHeight, props.overflowSuffix, props.wordBreak, letterSpacing, props.maxLines, maxWidth, maxHeight), _mapTextLayout2 = _slicedToArray(_mapTextLayout, 7), lines = _mapTextLayout2[0], _remainingLines = _mapTextLayout2[1], _hasRemainingText = _mapTextLayout2[2], _bareLineHeight = _mapTextLayout2[3], lineHeightPx = _mapTextLayout2[4], effectiveWidth = _mapTextLayout2[5], effectiveHeight = _mapTextLayout2[6];
                    var lineAmount = lines.length;
                    var glyphs = [];
                    var currentX = 0;
                    var baselineY = 0;
                    for (var i = 0; i < lineAmount; i++) {
                        var line = lines[i];
                        var textLine = line[0];
                        var textLineLength = textLine.length;
                        var prevGlyphId = 0;
                        currentX = line[3];
                        baselineY = line[4] / fontScale;
                        for (var j = 0; j < textLineLength; j++) {
                            var codepoint = textLine.codePointAt(j);
                            if (codepoint > 65535) {
                                j++;
                            }
                            if (codepoint === 8203) {
                                continue;
                            }
                            var char = textLine[j];
                            if (hasZeroWidthSpace(char) === true) {
                                continue;
                            }
                            var glyph = glyphMap.get(codepoint);
                            if (glyph === undefined) {
                                glyph = glyphMap.get(fallbackGlyphId);
                                if (glyph === undefined) {
                                    continue;
                                }
                            }
                            var kerning = 0;
                            if (prevGlyphId !== 0) {
                                var seconds = kernings[glyph.id];
                                if (seconds !== undefined) {
                                    var amount = seconds[prevGlyphId];
                                    if (amount !== undefined) {
                                        kerning = amount;
                                    }
                                }
                            }
                            currentX += kerning;
                            var glyphLayout = {
                                x: currentX + glyph.xoffset,
                                y: baselineY + glyph.yoffset - atlasBase,
                                width: glyph.width,
                                height: glyph.height,
                                atlasX: glyph.x * invAtlasWidth,
                                atlasY: glyph.y * invAtlasHeight,
                                atlasWidth: glyph.width * invAtlasWidth,
                                atlasHeight: glyph.height * invAtlasHeight
                            };
                            glyphs.push(glyphLayout);
                            currentX += glyph.xadvance + letterSpacing;
                            prevGlyphId = glyph.id;
                        }
                    }
                    return {
                        glyphs: glyphs,
                        distanceRange: fontScale * fontData.distanceField.distanceRange,
                        width: effectiveWidth * fontScale,
                        height: effectiveHeight,
                        fontScale: fontScale,
                        lineHeight: lineHeightPx,
                        fontFamily: fontFamily
                    };
                };
                var cleanup$1 = function cleanup$1() {
                    while (layoutCache$1.size > maxLayoutCacheSize$1) {
                        var oldest = layoutCache$1.keys().next().value;
                        layoutCache$1.delete(oldest);
                    }
                };
                var SdfTextRenderer = {
                    type: type$2,
                    font: font$1,
                    renderText: renderText$1,
                    addQuads: addQuads$1,
                    renderQuads: renderQuads$1,
                    init: init$2,
                    cleanup: cleanup$1
                };
                var fontFamilies = {};
                var fontLoadPromises = new Map;
                var normalizedMetrics = new Map;
                var nodesWaitingForFont = Object.create(null);
                var fontCache = new Map;
                var initialized = false;
                var measureContext$1;
                var canRenderFont = function canRenderFont() {
                    return true;
                };
                var processFontData = function processFontData(fontFamily, fontFace, metrics) {
                    metrics = metrics || defaultFontMetrics;
                    fontCache.set(fontFamily, {
                        fontFamily: fontFamily,
                        fontFace: fontFace,
                        metrics: metrics
                    });
                };
                var loadFont = function loadFont(stage, options) {
                    var fontFamily = options.fontFamily, fontUrl = options.fontUrl, metrics = options.metrics;
                    if (fontCache.has(fontFamily) === true) {
                        return Promise.resolve();
                    }
                    var existingPromise = fontLoadPromises.get(fontFamily);
                    if (existingPromise !== undefined) {
                        return existingPromise;
                    }
                    var nwff = nodesWaitingForFont[fontFamily] = [];
                    var loadPromise = new FontFace(fontFamily, "url(".concat(fontUrl, ")")).load().then(function(loadedFont) {
                        stage.platform.addFont(loadedFont);
                        processFontData(fontFamily, loadedFont, metrics);
                        fontLoadPromises.delete(fontFamily);
                        for (var key in nwff) {
                            nwff[key].setUpdateType(UpdateType.Local);
                        }
                        delete nodesWaitingForFont[fontFamily];
                    }).catch(function(error) {
                        fontLoadPromises.delete(fontFamily);
                        console.error("Failed to load font: ".concat(fontFamily), error);
                        throw error;
                    });
                    fontLoadPromises.set(fontFamily, loadPromise);
                    return loadPromise;
                };
                var getFontFamilies = function getFontFamilies() {
                    return fontFamilies;
                };
                var init$1 = function init$1(c, mc) {
                    if (initialized === true) {
                        return;
                    }
                    if (c === undefined) {
                        throw new Error("Canvas context is not provided for font handler initialization");
                    }
                    measureContext$1 = mc || c;
                    var defaultMetrics = {
                        ascender: 800,
                        descender: -200,
                        lineGap: 200,
                        unitsPerEm: 1e3
                    };
                    processFontData("sans-serif", undefined, defaultMetrics);
                    initialized = true;
                };
                var type$1 = "canvas";
                var isFontLoaded = function isFontLoaded(fontFamily) {
                    return fontCache.has(fontFamily);
                };
                var waitingForFont = function waitingForFont(fontFamily, node) {
                    if (nodesWaitingForFont[fontFamily] === undefined) {
                        return;
                    }
                    nodesWaitingForFont[fontFamily][node.id] = node;
                };
                var stopWaitingForFont = function stopWaitingForFont(fontFamily, node) {
                    if (nodesWaitingForFont[fontFamily] === undefined) {
                        return;
                    }
                    delete nodesWaitingForFont[fontFamily][node.id];
                };
                var getFontMetrics = function getFontMetrics(fontFamily, fontSize) {
                    var out = normalizedMetrics.get(fontFamily + fontSize);
                    if (out !== undefined) {
                        return out;
                    }
                    var metrics = fontCache.get(fontFamily).metrics;
                    if (metrics === undefined) {
                        metrics = calculateFontMetrics(fontFamily);
                    }
                    return processFontMetrics(fontFamily, fontSize, metrics);
                };
                var processFontMetrics = function processFontMetrics(fontFamily, fontSize, metrics) {
                    var label = fontFamily + fontSize;
                    var normalized = normalizeFontMetrics(metrics, fontSize);
                    normalizedMetrics.set(label, normalized);
                    return normalized;
                };
                var measureText = function measureText(text, fontFamily, letterSpacing) {
                    if (letterSpacing === 0) {
                        return measureContext$1.measureText(text).width;
                    }
                    if (hasZeroWidthSpace(text) === false) {
                        return measureContext$1.measureText(text).width + letterSpacing * text.length;
                    }
                    return text.split("").reduce(function(acc, char) {
                        if (hasZeroWidthSpace(char) === true) {
                            return acc;
                        }
                        return acc + measureContext$1.measureText(char).width + letterSpacing;
                    }, 0);
                };
                function calculateFontMetrics(fontFamily, fontSize) {
                    var _ref57, _metrics$fontBounding, _ref58, _metrics$fontBounding2, _metrics$emHeightAsce, _metrics$emHeightDesc, _metrics$emHeightAsce2, _metrics$emHeightDesc2;
                    var metrics = measureContext$1.measureText("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz");
                    console.warn("Font metrics not provided for Canvas Web font ".concat(fontFamily, ". ") + "Using fallback values. It is HIGHLY recommended you use the latest " + "version of the Lightning 3 `msdf-generator` tool to extract the default " + "metrics for the font and provide them in the Canvas Web font definition.");
                    var ascender = (_ref57 = (_metrics$fontBounding = metrics.fontBoundingBoxAscent) !== null && _metrics$fontBounding !== void 0 ? _metrics$fontBounding : metrics.actualBoundingBoxAscent) !== null && _ref57 !== void 0 ? _ref57 : 0;
                    var descender = (_ref58 = (_metrics$fontBounding2 = metrics.fontBoundingBoxDescent) !== null && _metrics$fontBounding2 !== void 0 ? _metrics$fontBounding2 : metrics.actualBoundingBoxDescent) !== null && _ref58 !== void 0 ? _ref58 : 0;
                    return {
                        ascender: ascender,
                        descender: -descender,
                        lineGap: ((_metrics$emHeightAsce = metrics.emHeightAscent) !== null && _metrics$emHeightAsce !== void 0 ? _metrics$emHeightAsce : 0) + ((_metrics$emHeightDesc = metrics.emHeightDescent) !== null && _metrics$emHeightDesc !== void 0 ? _metrics$emHeightDesc : 0) - (ascender + descender),
                        unitsPerEm: ((_metrics$emHeightAsce2 = metrics.emHeightAscent) !== null && _metrics$emHeightAsce2 !== void 0 ? _metrics$emHeightAsce2 : 0) + ((_metrics$emHeightDesc2 = metrics.emHeightDescent) !== null && _metrics$emHeightDesc2 !== void 0 ? _metrics$emHeightDesc2 : 0)
                    };
                }
                var CanvasFontHandler = Object.freeze(Object.defineProperty({
                    __proto__: null,
                    calculateFontMetrics: calculateFontMetrics,
                    canRenderFont: canRenderFont,
                    getFontFamilies: getFontFamilies,
                    getFontMetrics: getFontMetrics,
                    init: init$1,
                    isFontLoaded: isFontLoaded,
                    loadFont: loadFont,
                    measureText: measureText,
                    processFontMetrics: processFontMetrics,
                    stopWaitingForFont: stopWaitingForFont,
                    type: type$1,
                    waitingForFont: waitingForFont
                }, Symbol.toStringTag, {
                    value: "Module"
                }));
                var type = "canvas";
                var font = CanvasFontHandler;
                var canvas = null;
                var context = null;
                var measureCanvas = null;
                var measureContext = null;
                var layoutCache = new Map;
                var maxLayoutCacheSize = 250;
                var init = function init(stage) {
                    var dpr = stage.options.devicePhysicalPixelRatio;
                    var configuredCacheSize = stage.options.textLayoutCacheSize;
                    if (configuredCacheSize !== undefined) {
                        maxLayoutCacheSize = configuredCacheSize;
                    }
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
                var renderText = function renderText(props) {
                    var _props$color3;
                    if (props.text.length === 0) {
                        return {
                            width: 0,
                            height: 0
                        };
                    }
                    var text = props.text, fontFamily = props.fontFamily, fontStyle = props.fontStyle, fontSize = props.fontSize, textAlign = props.textAlign, maxLines = props.maxLines, lineHeight = props.lineHeight, verticalAlign = props.verticalAlign, overflowSuffix = props.overflowSuffix, maxWidth = props.maxWidth, maxHeight = props.maxHeight, wordBreak = props.wordBreak;
                    var font = "".concat(fontStyle, " ").concat(fontSize, "px Unknown, ").concat(fontFamily);
                    measureContext.font = font;
                    measureContext.textBaseline = "alphabetic";
                    var metrics = getFontMetrics(fontFamily, fontSize);
                    var letterSpacing = props.letterSpacing;
                    var _mapTextLayout3 = mapTextLayout(measureText, metrics, text, textAlign, fontFamily, lineHeight, overflowSuffix, wordBreak, letterSpacing, maxLines, maxWidth, maxHeight), _mapTextLayout4 = _slicedToArray(_mapTextLayout3, 7), lines = _mapTextLayout4[0], remainingLines = _mapTextLayout4[1], hasRemainingText = _mapTextLayout4[2], bareLineHeight = _mapTextLayout4[3], lineHeightPx = _mapTextLayout4[4], effectiveWidth = _mapTextLayout4[5], effectiveHeight = _mapTextLayout4[6];
                    var lineAmount = lines.length;
                    var canvasW = Math.ceil(effectiveWidth);
                    var canvasH = Math.ceil(effectiveHeight);
                    canvas.width = canvasW;
                    canvas.height = canvasH;
                    var color = (_props$color3 = props.color) !== null && _props$color3 !== void 0 ? _props$color3 : 4294967295;
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
                        if (letterSpacing === 0) {
                            context.fillText(textLine, currentX, currentY);
                        } else {
                            var textLineLength = textLine.length;
                            for (var j = 0; j < textLineLength; j++) {
                                var char = textLine.charAt(j);
                                if (hasZeroWidthSpace(char) === true) {
                                    continue;
                                }
                                context.fillText(char, currentX, currentY);
                                currentX += measureText(char, fontFamily, letterSpacing);
                            }
                        }
                    }
                    var imageData = null;
                    if (canvas.width > 0 && canvas.height > 0) {
                        imageData = context.getImageData(0, 0, canvasW, canvasH);
                    }
                    return {
                        imageData: imageData,
                        width: effectiveWidth,
                        height: effectiveHeight,
                        remainingLines: remainingLines,
                        hasRemainingText: hasRemainingText
                    };
                };
                var clearLayoutCache = function clearLayoutCache() {
                    layoutCache.clear();
                };
                var cleanup = function cleanup() {
                    while (layoutCache.size > maxLayoutCacheSize) {
                        var oldest = layoutCache.keys().next().value;
                        layoutCache.delete(oldest);
                    }
                };
                var addQuads = function addQuads() {
                    return null;
                };
                var renderQuads = function renderQuads() {};
                var CanvasTextRenderer = {
                    type: type,
                    font: font,
                    renderText: renderText,
                    addQuads: addQuads,
                    renderQuads: renderQuads,
                    init: init,
                    clearLayoutCache: clearLayoutCache,
                    cleanup: cleanup
                };
                var WHITE = {
                    isWhite: true,
                    a: 1,
                    r: 255,
                    g: 255,
                    b: 255
                };
                function parseColor(abgr) {
                    if (abgr === 4294967295) {
                        return WHITE;
                    }
                    var a = (abgr >>> 24 & 255) / 255;
                    var b = abgr >>> 16 & 255 & 255;
                    var g = abgr >>> 8 & 255 & 255;
                    var r = abgr & 255 & 255;
                    return {
                        isWhite: false,
                        a: a,
                        r: r,
                        g: g,
                        b: b
                    };
                }
                function parseToAbgrString(abgr) {
                    var a = (abgr >>> 24 & 255) / 255;
                    var b = abgr >>> 16 & 255 & 255;
                    var g = abgr >>> 8 & 255 & 255;
                    var r = abgr & 255 & 255;
                    return "rgba(".concat(r, ",").concat(g, ",").concat(b, ",").concat(a, ")");
                }
                function parseToRgbaString(rgba) {
                    var r = rgba >>> 24 & 255;
                    var g = rgba >>> 16 & 255 & 255;
                    var b = rgba >>> 8 & 255 & 255;
                    var a = (rgba & 255 & 255) / 255;
                    return "rgba(".concat(r, ",").concat(g, ",").concat(b, ",").concat(a, ")");
                }
                function formatRgba(_ref59) {
                    var a = _ref59.a, r = _ref59.r, g = _ref59.g, b = _ref59.b;
                    return "rgba(".concat(r, ",").concat(g, ",").concat(b, ",").concat(a, ")");
                }
                var CanvasTexture = function(_CoreContextTexture3) {
                    function CanvasTexture() {
                        var _this41;
                        _classCallCheck(this, CanvasTexture);
                        for (var _len6 = arguments.length, args = new Array(_len6), _key10 = 0; _key10 < _len6; _key10++) {
                            args[_key10] = arguments[_key10];
                        }
                        _this41 = _callSuper(this, CanvasTexture, [].concat(args));
                        _defineProperty(_this41, "image", void 0);
                        _defineProperty(_this41, "tintCache", void 0);
                        return _this41;
                    }
                    _inherits(CanvasTexture, _CoreContextTexture3);
                    return _createClass(CanvasTexture, [ {
                        key: "load",
                        value: function() {
                            var _load2 = _asyncToGenerator(_regenerator().m(function _callee24() {
                                var textureData, size, _t0;
                                return _regenerator().w(function(_context24) {
                                    while (1) switch (_context24.p = _context24.n) {
                                      case 0:
                                        textureData = this.textureSource.textureData;
                                        assertTruthy(textureData === null || textureData === void 0 ? void 0 : textureData.data);
                                        this.textureSource.setState("loading");
                                        _context24.p = 1;
                                        _context24.n = 2;
                                        return this.onLoadRequest(textureData.data);

                                      case 2:
                                        size = _context24.v;
                                        if (!(this.textureSource.state === "freed")) {
                                            _context24.n = 3;
                                            break;
                                        }
                                        this.image = undefined;
                                        return _context24.a(2);

                                      case 3:
                                        this.textureSource.setState("loaded", size);
                                        this.textureSource.freeTextureData();
                                        this.updateMemSize();
                                        _context24.n = 5;
                                        break;

                                      case 4:
                                        _context24.p = 4;
                                        _t0 = _context24.v;
                                        this.textureSource.setState("failed", _t0);
                                        this.textureSource.freeTextureData();
                                        throw _t0;

                                      case 5:
                                        return _context24.a(2);
                                    }
                                }, _callee24, this, [ [ 1, 4 ] ]);
                            }));
                            function load() {
                                return _load2.apply(this, arguments);
                            }
                            return load;
                        }()
                    }, {
                        key: "release",
                        value: function release() {
                            this.image = undefined;
                            this.tintCache = undefined;
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
                            if (this.textureSource.dimensions) {
                                this.setTextureMemUse(this.textureSource.dimensions.w * this.textureSource.dimensions.h * mult);
                            }
                        }
                    }, {
                        key: "hasImage",
                        value: function hasImage() {
                            return this.image !== undefined;
                        }
                    }, {
                        key: "getImage",
                        value: function getImage(color) {
                            var _this$tintCache;
                            var image = this.image;
                            if (image === undefined) {
                                return null;
                            }
                            if (color.isWhite) {
                                if (this.tintCache) {
                                    this.tintCache = undefined;
                                    this.updateMemSize();
                                }
                                return image;
                            }
                            var key = formatRgba(color);
                            if (((_this$tintCache = this.tintCache) === null || _this$tintCache === void 0 ? void 0 : _this$tintCache.key) === key) {
                                return this.tintCache.image;
                            }
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
                            var _onLoadRequest4 = _asyncToGenerator(_regenerator().m(function _callee25(data) {
                                var _canvas, ctx;
                                return _regenerator().w(function(_context25) {
                                    while (1) switch (_context25.n) {
                                      case 0:
                                        if (!(data === null)) {
                                            _context25.n = 1;
                                            break;
                                        }
                                        throw new Error("CanvasTexture: Texture data is null");

                                      case 1:
                                        if (!(_typeof(data) === "object" && "mipmaps" in data)) {
                                            _context25.n = 2;
                                            break;
                                        }
                                        throw new Error("CanvasTexture: Compressed texture data is not supported in Canvas2D render mode");

                                      case 2:
                                        if (!(data instanceof ImageData)) {
                                            _context25.n = 3;
                                            break;
                                        }
                                        _canvas = document.createElement("canvas");
                                        _canvas.width = data.width;
                                        _canvas.height = data.height;
                                        ctx = _canvas.getContext("2d");
                                        if (ctx !== null) ctx.putImageData(data, 0, 0);
                                        this.image = _canvas;
                                        return _context25.a(2, {
                                            w: data.width,
                                            h: data.height
                                        });

                                      case 3:
                                        if (!(typeof ImageBitmap !== "undefined" && data instanceof ImageBitmap || data instanceof HTMLImageElement)) {
                                            _context25.n = 4;
                                            break;
                                        }
                                        this.image = data;
                                        return _context25.a(2, {
                                            w: data.width,
                                            h: data.height
                                        });

                                      case 4:
                                        return _context25.a(2, {
                                            w: 0,
                                            h: 0
                                        });
                                    }
                                }, _callee25, this);
                            }));
                            function onLoadRequest(_x33) {
                                return _onLoadRequest4.apply(this, arguments);
                            }
                            return onLoadRequest;
                        }()
                    } ]);
                }(CoreContextTexture);
                var parsedArgbColors = new Map;
                var parsedRgbaColors = new Map;
                function normalizeCanvasColor(color) {
                    var isRGBA = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                    var targetCache = isRGBA === true ? parsedRgbaColors : parsedArgbColors;
                    var out = targetCache.get(color);
                    if (out !== undefined) {
                        return out;
                    }
                    if (isRGBA === true) {
                        out = parseToRgbaString(color);
                    } else {
                        out = parseToAbgrString(color);
                    }
                    targetCache.set(color, out);
                    return out;
                }
                var CanvasShaderNode = function(_CoreShaderNode3) {
                    function CanvasShaderNode(shaderKey, config, stage, props) {
                        var _this42;
                        _classCallCheck(this, CanvasShaderNode);
                        _this42 = _callSuper(this, CanvasShaderNode, [ shaderKey, config, stage, props ]);
                        _defineProperty(_this42, "updater", undefined);
                        _defineProperty(_this42, "computed", {});
                        _defineProperty(_this42, "applySNR", void 0);
                        _defineProperty(_this42, "render", void 0);
                        _this42.applySNR = config.saveAndRestore || false;
                        _this42.render = config.render;
                        if (config.update !== undefined) {
                            _this42.updater = config.update;
                            if (_this42.props === undefined) {
                                _this42.updater(_this42.node, _this42.props);
                                return _possibleConstructorReturn(_this42);
                            }
                            _this42.update = function() {
                                var prevKey = _this42.valueKey;
                                _this42.valueKey = _this42.createValueKey();
                                if (prevKey === _this42.valueKey) {
                                    return;
                                }
                                if (prevKey.length > 0) {
                                    _this42.stage.shManager.mutateShaderValueUsage(prevKey, -1);
                                }
                                var computed = _this42.stage.shManager.getShaderValues(_this42.valueKey);
                                if (computed !== undefined) {
                                    _this42.computed = computed;
                                }
                                _this42.computed = {};
                                _this42.updater(_this42.node);
                                _this42.stage.shManager.setShaderValues(_this42.valueKey, _this42.computed);
                            };
                        }
                        return _this42;
                    }
                    _inherits(CanvasShaderNode, _CoreShaderNode3);
                    return _createClass(CanvasShaderNode, [ {
                        key: "toColorString",
                        value: function toColorString(rgba) {
                            return normalizeCanvasColor(rgba, true);
                        }
                    } ]);
                }(CoreShaderNode);
                var CanvasRenderer = function(_CoreRenderer3) {
                    function CanvasRenderer(options) {
                        var _this43;
                        _classCallCheck(this, CanvasRenderer);
                        _this43 = _callSuper(this, CanvasRenderer, [ options ]);
                        _defineProperty(_this43, "context", void 0);
                        _defineProperty(_this43, "canvas", void 0);
                        _defineProperty(_this43, "pixelRatio", void 0);
                        _defineProperty(_this43, "clearColor", void 0);
                        _defineProperty(_this43, "renderToTextureActive", false);
                        _defineProperty(_this43, "activeRttNode", null);
                        _this43.mode = "canvas";
                        var canvas = options.canvas;
                        _this43.canvas = canvas;
                        _this43.context = canvas.getContext("2d");
                        _this43.pixelRatio = _this43.stage.pixelRatio;
                        _this43.clearColor = normalizeCanvasColor(_this43.stage.clearColor);
                        return _this43;
                    }
                    _inherits(CanvasRenderer, _CoreRenderer3);
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
                            var _this44 = this;
                            var ctx = this.context;
                            var _node$globalTransform = node.globalTransform, tx = _node$globalTransform.tx, ty = _node$globalTransform.ty, ta = _node$globalTransform.ta, tb = _node$globalTransform.tb, tc = _node$globalTransform.tc, td = _node$globalTransform.td;
                            var clippingRect = node.clippingRect;
                            var texture = node.props.texture || this.stage.defaultTexture;
                            if (texture !== null) {
                                var textureType = texture.type;
                                if (textureType !== TextureType.image && textureType !== TextureType.subTexture && textureType !== TextureType.color && textureType !== TextureType.noise) {
                                    return;
                                }
                            }
                            var hasTransform = ta !== 1;
                            var clippingValid = clippingRect.valid === true;
                            if (clippingValid === true && clippingRect.w === 0 && clippingRect.h === 0) {
                                return;
                            }
                            var hasClipping = clippingValid === true && clippingRect.w !== 0 && clippingRect.h !== 0;
                            var shader = node.props.shader;
                            var hasShader = shader !== null;
                            var saveAndRestore = hasTransform === true || hasClipping === true;
                            if (hasShader === true) {
                                saveAndRestore = saveAndRestore || shader.applySNR;
                            }
                            if (saveAndRestore) {
                                ctx.save();
                            }
                            if (hasClipping === true) {
                                var path = new Path2D;
                                var x = clippingRect.x, y = clippingRect.y, w = clippingRect.w, h = clippingRect.h;
                                path.rect(x, y, w, h);
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
                                    _this44.renderContext(node, texture);
                                };
                                shader.render(ctx, node, renderContext);
                                renderContext = null;
                            } else {
                                this.renderContext(node, texture);
                            }
                            if (saveAndRestore) {
                                ctx.restore();
                            }
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
                                if (textureType === TextureType.subTexture) {
                                    image = texture.parentTexture.ctxTexture.getImage(tintColor);
                                } else {
                                    image = texture.ctxTexture.getImage(tintColor);
                                }
                                if (image === null || image === undefined) {
                                    return;
                                }
                                var imageWidth = image.width;
                                var imageHeight = image.height;
                                if (typeof imageWidth !== "number" || typeof imageHeight !== "number" || imageWidth <= 0 || imageHeight <= 0) {
                                    return;
                                }
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
                                    } else {
                                        this.context.drawImage(image, sx, sy, sw, sh, tx, ty, width, height);
                                    }
                                } else {
                                    this.context.drawImage(image, tx, ty, width, height);
                                }
                                this.context.globalAlpha = 1;
                                return;
                            }
                            var hasGradient = node.premultipliedColorTl !== node.premultipliedColorTr || node.premultipliedColorTl !== node.premultipliedColorBr;
                            if (hasGradient === true) {
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
                                if (startAlpha === 0 && endAlpha > 0) {
                                    startColor = (startColor & 4278190080 | endColor & 16777215) >>> 0;
                                } else if (endAlpha === 0 && startAlpha > 0) {
                                    endColor = (endColor & 4278190080 | startColor & 16777215) >>> 0;
                                }
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
                            return shaderType.render !== undefined;
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
                        key: "getRenderOpCount",
                        value: function getRenderOpCount() {
                            return null;
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
                        }
                    }, {
                        key: "getTextureCoords",
                        value: function getTextureCoords(node) {
                            var texture = node.texture;
                            if (texture === null) {
                                return undefined;
                            }
                            var ctxTexture = texture.type === TextureType.subTexture ? texture.parentTexture.ctxTexture : texture.ctxTexture;
                            if (ctxTexture === undefined) {
                                return undefined;
                            }
                            var textureOptions = node.props.textureOptions;
                            if (texture.type !== TextureType.subTexture && textureOptions === undefined) {
                                return {
                                    x1: 0,
                                    y1: 0,
                                    x2: 1,
                                    y2: 1
                                };
                            }
                            var x1 = 0, y1 = 0, x2 = 1, y2 = 1;
                            if (texture.type === TextureType.subTexture) {
                                var _texture$parentTextur2 = texture.parentTexture.dimensions, parentW = _texture$parentTextur2.w, parentH = _texture$parentTextur2.h;
                                var _texture$props2 = texture.props, x = _texture$props2.x, y = _texture$props2.y, w = _texture$props2.w, h = _texture$props2.h;
                                x1 = x / parentW;
                                y1 = y / parentH;
                                x2 = x1 + w / parentW;
                                y2 = y1 + h / parentH;
                            }
                            if (textureOptions !== undefined && textureOptions !== null) {
                                var resizeMode = textureOptions.resizeMode;
                                if (resizeMode !== undefined && resizeMode.type === "cover" && texture.dimensions !== null) {
                                    var dimensions = texture.dimensions;
                                    var _w3 = node.props.w;
                                    var _h3 = node.props.h;
                                    var scaleX = _w3 / dimensions.w;
                                    var scaleY = _h3 / dimensions.h;
                                    var scale = Math.max(scaleX, scaleY);
                                    var precision = 1 / scale;
                                    if (scaleX < scale) {
                                        var _resizeMode$clipX3;
                                        var desiredSize = precision * node.props.w;
                                        x1 = (1 - desiredSize / dimensions.w) * ((_resizeMode$clipX3 = resizeMode.clipX) !== null && _resizeMode$clipX3 !== void 0 ? _resizeMode$clipX3 : .5);
                                        x2 = x1 + desiredSize / dimensions.w;
                                    }
                                    if (scaleY < scale) {
                                        var _resizeMode$clipY3;
                                        var _desiredSize2 = precision * node.props.h;
                                        y1 = (1 - _desiredSize2 / dimensions.h) * ((_resizeMode$clipY3 = resizeMode.clipY) !== null && _resizeMode$clipY3 !== void 0 ? _resizeMode$clipY3 : .5);
                                        y2 = y1 + _desiredSize2 / dimensions.h;
                                    }
                                }
                                if (textureOptions.flipX === true) {
                                    var _ref60 = [ x2, x1 ];
                                    x1 = _ref60[0];
                                    x2 = _ref60[1];
                                }
                                if (textureOptions.flipY === true) {
                                    var _ref61 = [ y2, y1 ];
                                    y1 = _ref61[0];
                                    y2 = _ref61[1];
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
                var SplashImage = "/assets/SolidTV_transparent-DOtoq56x.png";
                var theme = {
                    textPrimary: 3874024447
                };
                var numImageWorkers = 4;
                var urlParams = new URLSearchParams(window.location.search);
                var numWorkers = urlParams.get("numImageWorkers");
                var screenSize = urlParams.get("size") || "default";
                var rendererMode = urlParams.get("mode") || "webgl";
                var animationsEnabled = urlParams.get("animate") || "true";
                var textBaseline = urlParams.get("textBaseline");
                if (numWorkers) {
                    numImageWorkers = parseInt(numWorkers);
                }
                var deviceLogicalPixelRatio = {
                    720: .666667,
                    medium: .8,
                    1080: 1,
                    "4k": 2,
                    default: window.innerHeight / 1080
                }[screenSize];
                Config.debug = false;
                Config.animationsEnabled = animationsEnabled === "true";
                Config.fontSettings.fontFamily = "Roboto";
                Config.fontSettings.color = theme.textPrimary;
                Config.fontSettings.fontSize = 32;
                Config.domRendererEnabled = false;
                Config.focusHistoryDebug = 5;
                Config.rendererOptions = {
                    fpsUpdateInterval: 300,
                    textureMemory: {
                        criticalThreshold: 2e8,
                        targetThresholdLevel: .8
                    },
                    numImageWorkers: numImageWorkers,
                    deviceLogicalPixelRatio: deviceLogicalPixelRatio,
                    devicePhysicalPixelRatio: window.devicePixelRatio || 1,
                    createImageBitmapSupport: "auto",
                    boundsMargin: 100,
                    targetFPS: 0,
                    enableClear: false
                };
                if (textBaseline) {
                    Config.rendererOptions.textBaselineMode = textBaseline;
                }
                if (rendererMode === "canvas") {
                    Config.rendererOptions.fontEngines = [ CanvasTextRenderer ];
                    Config.rendererOptions.renderEngine = CanvasRenderer;
                } else {
                    Config.rendererOptions.fontEngines = [ SdfTextRenderer ];
                    Config.rendererOptions.renderEngine = WebGlRenderer;
                }
                var _createRenderer = createRenderer(), renderer = _createRenderer.renderer;
                splash({
                    src: SplashImage,
                    w: 400,
                    h: 400,
                    bgColor: 186265855
                });
                var shManager = renderer.stage.shManager;
                shManager.registerShaderType("rounded", Rounded);
                shManager.registerShaderType("roundedWithBorder", RoundedWithBorder);
                shManager.registerShaderType("roundedWithShadow", RoundedWithShadow);
                shManager.registerShaderType("roundedWithBorderWithShadow", RoundedWithBorderAndShadow);
                shManager.registerShaderType("radialGradient", RadialGradient);
                shManager.registerShaderType("linearGradient", LinearGradient);
                shManager.registerShaderType("holePunch", HolePunch);
                shManager.registerShaderType("radialProgress", RadialProgress);
            }
        };
    });
})();
//# sourceMappingURL=index-legacy-Buuqx7ic.js.map
