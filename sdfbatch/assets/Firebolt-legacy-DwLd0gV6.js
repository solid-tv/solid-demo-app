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
    function _typeof(o) {
        "@babel/helpers - typeof";
        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
            return typeof o;
        } : function(o) {
            return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
        }, _typeof(o);
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
    System.register([ "./render-legacy-BpYVxbwM.js", "./Row-legacy-CvJniqQ8.js", "./state-legacy-BEhkMlQ6.js" ], function(_export, _context) {
        "use strict";
        var createEffect, createElement, createComponent, insert, setProp, createSignal, createTextNode, insertNode, Row, setGlobalBackground, win$3, listener, setMockListener, mock$1, pending, eventMap, callback, testHarness, MockTransport_default, mocks, MockProps_default, defaults_default$16, defaults_default$15, defaults_default$14, defaults_default$13, defaults_default$12, defaults_default$11, defaults_default$10, defaults_default$9, defaults_default$8, inactive, foreground, unloading, emit$1, win$2, automation, defaults_default$7, defaults_default$6, defaults_default$5, defaults_default$4, defaults_default$3, defaults_default$2, defaults_default$1, defaults_default, Queue, settings, subscribers, initSettings, publish, dotGrab, Settings_default, win$1, LegacyTransport, MAX_QUEUED_MESSAGES, WebsocketTransport, Results_default, LEGACY_TRANSPORT_SERVICE_NAME, moduleInstance, isEventSuccess, win, Transport, listenerId, listeners, keys, oncers, validEvents, validContext, transportInitialized, emit, registerEvents, registerEventContext, callCallbacks, doListen, getListenArgs, getClearArgs, once$3, listen$3, clear$3, prioritize, unsubscribe, doClear, init, Events_default, Prop_default, Account_default, Device_default, providerInterfaces, registerProviderInterface, store, Lifecycle_default, Localization_default;
        function send(message) {
            console.debug("Sending message to transport: " + message);
            var json = JSON.parse(message);
            if (Array.isArray(json)) {
                json.forEach(function(j) {
                    return send(JSON.stringify(j));
                });
                return;
            }
            var _json$method$split = json.method.split("."), _json$method$split2 = _slicedToArray(_json$method$split, 2), module = _json$method$split2[0], method = _json$method$split2[1];
            if (testHarness && testHarness.onSend) testHarness.onSend(module, method, json.params, json.id);
            if (method.match(/^on[A-Z]/)) if (json.params.listen) eventMap[json.id] = module.toLowerCase() + "." + method[2].toLowerCase() + method.substr(3); else Object.keys(eventMap).forEach(function(key) {
                if (eventMap[key] === module.toLowerCase() + "." + method[2].toLowerCase() + method.substr(3)) delete eventMap[key];
            });
            if (mock$1) handle(json); else pending.push(json);
        }
        function handle(json) {
            var result;
            try {
                result = getResult(json.method, json.params);
            } catch (error) {
                setTimeout(function() {
                    return callback(JSON.stringify({
                        jsonrpc: "2.0",
                        error: {
                            code: -32602,
                            message: "Invalid params (this is a mock error from the mock transport layer)"
                        },
                        id: json.id
                    }));
                });
            }
            setTimeout(function() {
                return callback(JSON.stringify({
                    jsonrpc: "2.0",
                    result: result,
                    id: json.id
                }));
            });
        }
        function receive(_callback) {
            callback = _callback;
            if (testHarness && typeof testHarness.initialize === "function") testHarness.initialize({
                emit: event,
                listen: function listen() {
                    listener.apply(void 0, arguments);
                }
            });
        }
        function event(module, event, value) {
            var listener = Object.entries(eventMap).find(function(_ref) {
                var _ref2 = _slicedToArray(_ref, 2), k = _ref2[0], v = _ref2[1];
                return v.toLowerCase() === module.toLowerCase() + "." + event.toLowerCase();
            });
            if (listener) {
                var message = JSON.stringify({
                    jsonrpc: "2.0",
                    id: parseInt(listener[0]),
                    result: value
                });
                callback(message);
            }
        }
        function dotGrab$1() {
            var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var key = arguments.length > 1 ? arguments[1] : undefined;
            var keys = key.split(".");
            var ref = obj;
            var _loop = function _loop(i) {
                ref = (Object.entries(ref).find(function(_ref3) {
                    var _ref4 = _slicedToArray(_ref3, 2), k = _ref4[0], v = _ref4[1];
                    return k.toLowerCase() === keys[i].toLowerCase();
                }) || [ null, {} ])[1];
            };
            for (var i = 0; i < keys.length; i++) {
                _loop(i);
            }
            return ref;
        }
        function getResult(method, params) {
            var api = dotGrab$1(mock$1, method);
            if (method.match(/^[a-zA-Z]+\.on[A-Za-z]+$/)) api = {
                event: method,
                listening: true
            };
            if (typeof api === "function") return params == null ? api() : api(params); else return api;
        }
        function setMockResponses(m) {
            mock$1 = m;
            pending.forEach(function(json) {
                return handle(json);
            });
            pending.length = 0;
        }
        function Router_default(params, callbackOrValue, contextParameterCount) {
            var numArgs = params ? Object.values(params).length : 0;
            if (numArgs === contextParameterCount && callbackOrValue === void 0) return "getter"; else if (numArgs === contextParameterCount && typeof callbackOrValue === "function") return "subscriber"; else if (numArgs === 0 && typeof callbackOrValue === "function") return "subscriber"; else if (numArgs === contextParameterCount && callbackOrValue !== void 0) return "setter";
            return null;
        }
        function mock(module, method, params, value, contextParameterCount, def) {
            var type = Router_default(params, value, contextParameterCount);
            var key = "".concat(module, ".").concat(method).concat(contextParameterCount ? "." + Object.keys(params).filter(function(key) {
                return key !== "value";
            }).map(function(key) {
                return params[key];
            }).join(".") : "");
            if (type === "getter") return mocks.hasOwnProperty(key) ? mocks[key] : def; else if (type === "subscriber") {} else if (type === "setter") {
                mocks[key] = value;
                MockTransport_default.event(module, "".concat(method, "Changed"), {
                    value: value
                });
                return null;
            }
        }
        function transform(result, transforms) {
            if (!transforms || !transforms.methods) return result;
            var methods = transforms.methods;
            var transformed = JSON.parse(JSON.stringify(result));
            Object.keys(methods).forEach(function(key) {
                var method_info = methods[key];
                var _method_info$xMethod = method_info["x-method"].split("."), _method_info$xMethod2 = _slicedToArray(_method_info$xMethod, 2), module = _method_info$xMethod2[0], method = _method_info$xMethod2[1];
                var params = {};
                params[method_info["x-this-param"]] = transformed;
                transformed[key] = function() {
                    for (var i = 0; i < arguments.length; i++) params[method_info["x-additional-params"][i]] = i < 0 || arguments.length <= i ? undefined : arguments[i];
                    return Transport.send(module.toLowerCase(), method, params);
                };
            });
            return transformed;
        }
        function prop(moduleName, key, params) {
            var callbackOrValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : void 0;
            var immutable = arguments.length > 4 ? arguments[4] : undefined;
            var readonly = arguments.length > 5 ? arguments[5] : undefined;
            var contextParameterCount = arguments.length > 6 ? arguments[6] : undefined;
            var numArgs = Object.values(params).length;
            var type = Router_default(params, callbackOrValue, contextParameterCount);
            if (type === "getter") return Transport.send(moduleName, key, params); else if (type === "subscriber") {
                var _Events_default;
                if (immutable) throw new Error("Cannot subscribe to an immutable property");
                return (_Events_default = Events_default).listen.apply(_Events_default, [ moduleName, key + "Changed" ].concat(_toConsumableArray(Object.values(params)), [ callbackOrValue ]));
            } else if (type === "setter") {
                if (immutable) throw new Error("Cannot set a value to an immutable property");
                if (readonly) throw new Error("Cannot set a value to a readonly property");
                return Transport.send(moduleName, "set" + key[0].toUpperCase() + key.substring(1), Object.assign({
                    value: callbackOrValue
                }, params));
            } else if (numArgs < contextParameterCount) throw new Error("Cannot get a value without all required context parameters."); else throw new Error("Property accessed with unexpected number of parameters.");
        }
        function id$1() {
            var callbackOrValue = arguments[0];
            var params = {};
            if (arguments.length === 1 && typeof arguments[0] === "function") {
                callbackOrValue = arguments[0];
                params = {};
            }
            return Prop_default.prop("Account", "id", params, callbackOrValue, true, true, 0);
        }
        function uid$1() {
            var callbackOrValue = arguments[0];
            var params = {};
            if (arguments.length === 1 && typeof arguments[0] === "function") {
                callbackOrValue = arguments[0];
                params = {};
            }
            return Prop_default.prop("Account", "uid", params, callbackOrValue, true, true, 0);
        }
        function version() {
            return new Promise(function(resolve, reject) {
                Transport.send("device", "version").then(function(v) {
                    v = v || {};
                    v.sdk = v.sdk || {};
                    v.sdk.major = parseInt("1");
                    v.sdk.minor = parseInt("7");
                    v.sdk.patch = parseInt("0");
                    v.sdk.readable = "Firebolt Core SDK 1.7.0";
                    resolve(v);
                }).catch(function(error) {
                    reject(error);
                });
            });
        }
        function audio() {
            var callbackOrValue = arguments[0];
            var params = {};
            if (arguments.length === 1 && typeof arguments[0] === "function") {
                callbackOrValue = arguments[0];
                params = {};
            }
            return Prop_default.prop("Device", "audio", params, callbackOrValue, false, true, 0);
        }
        function clear$2() {
            var _Events_default2;
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }
            return (_Events_default2 = Events_default).clear.apply(_Events_default2, [ "Device" ].concat(args));
        }
        function distributor() {
            var callbackOrValue = arguments[0];
            var params = {};
            if (arguments.length === 1 && typeof arguments[0] === "function") {
                callbackOrValue = arguments[0];
                params = {};
            }
            return Prop_default.prop("Device", "distributor", params, callbackOrValue, true, true, 0);
        }
        function hdcp() {
            var callbackOrValue = arguments[0];
            var params = {};
            if (arguments.length === 1 && typeof arguments[0] === "function") {
                callbackOrValue = arguments[0];
                params = {};
            }
            return Prop_default.prop("Device", "hdcp", params, callbackOrValue, false, true, 0);
        }
        function hdr() {
            var callbackOrValue = arguments[0];
            var params = {};
            if (arguments.length === 1 && typeof arguments[0] === "function") {
                callbackOrValue = arguments[0];
                params = {};
            }
            return Prop_default.prop("Device", "hdr", params, callbackOrValue, false, true, 0);
        }
        function id() {
            var callbackOrValue = arguments[0];
            var params = {};
            if (arguments.length === 1 && typeof arguments[0] === "function") {
                callbackOrValue = arguments[0];
                params = {};
            }
            return Prop_default.prop("Device", "id", params, callbackOrValue, true, true, 0);
        }
        function listen$2() {
            var _Events_default3;
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
            }
            return (_Events_default3 = Events_default).listen.apply(_Events_default3, [ "Device" ].concat(args));
        }
        function make() {
            var callbackOrValue = arguments[0];
            var params = {};
            if (arguments.length === 1 && typeof arguments[0] === "function") {
                callbackOrValue = arguments[0];
                params = {};
            }
            return Prop_default.prop("Device", "make", params, callbackOrValue, true, true, 0);
        }
        function model() {
            var callbackOrValue = arguments[0];
            var params = {};
            if (arguments.length === 1 && typeof arguments[0] === "function") {
                callbackOrValue = arguments[0];
                params = {};
            }
            return Prop_default.prop("Device", "model", params, callbackOrValue, true, true, 0);
        }
        function name() {
            var callbackOrValue = arguments[0];
            var params = {};
            if (arguments.length === 1 && typeof arguments[0] === "function") {
                callbackOrValue = arguments[0];
                params = {};
            }
            return Prop_default.prop("Device", "name", params, callbackOrValue, false, true, 0);
        }
        function network() {
            var callbackOrValue = arguments[0];
            var params = {};
            if (arguments.length === 1 && typeof arguments[0] === "function") {
                callbackOrValue = arguments[0];
                params = {};
            }
            return Prop_default.prop("Device", "network", params, callbackOrValue, false, true, 0);
        }
        function once$2() {
            var _Events_default4;
            for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                args[_key3] = arguments[_key3];
            }
            return (_Events_default4 = Events_default).once.apply(_Events_default4, [ "Device" ].concat(args));
        }
        function platform() {
            var callbackOrValue = arguments[0];
            var params = {};
            if (arguments.length === 1 && typeof arguments[0] === "function") {
                callbackOrValue = arguments[0];
                params = {};
            }
            return Prop_default.prop("Device", "platform", params, callbackOrValue, true, true, 0);
        }
        function screenResolution() {
            var callbackOrValue = arguments[0];
            var params = {};
            if (arguments.length === 1 && typeof arguments[0] === "function") {
                callbackOrValue = arguments[0];
                params = {};
            }
            return Prop_default.prop("Device", "screenResolution", params, callbackOrValue, false, true, 0);
        }
        function sku() {
            var callbackOrValue = arguments[0];
            var params = {};
            if (arguments.length === 1 && typeof arguments[0] === "function") {
                callbackOrValue = arguments[0];
                params = {};
            }
            return Prop_default.prop("Device", "sku", params, callbackOrValue, true, true, 0);
        }
        function type() {
            var callbackOrValue = arguments[0];
            var params = {};
            if (arguments.length === 1 && typeof arguments[0] === "function") {
                callbackOrValue = arguments[0];
                params = {};
            }
            return Prop_default.prop("Device", "type", params, callbackOrValue, true, true, 0);
        }
        function uid() {
            var callbackOrValue = arguments[0];
            var params = {};
            if (arguments.length === 1 && typeof arguments[0] === "function") {
                callbackOrValue = arguments[0];
                params = {};
            }
            return Prop_default.prop("Device", "uid", params, callbackOrValue, true, true, 0);
        }
        function videoResolution() {
            var callbackOrValue = arguments[0];
            var params = {};
            if (arguments.length === 1 && typeof arguments[0] === "function") {
                callbackOrValue = arguments[0];
                params = {};
            }
            return Prop_default.prop("Device", "videoResolution", params, callbackOrValue, false, true, 0);
        }
        function ready$1() {
            return Transport.send("metrics", "ready", {});
        }
        function ready() {
            return _ready.apply(this, arguments);
        }
        function _ready() {
            _ready = _asyncToGenerator(_regenerator().m(function _callee() {
                var readyRes;
                return _regenerator().w(function(_context2) {
                    while (1) switch (_context2.n) {
                      case 0:
                        _context2.n = 1;
                        return prioritize("Lifecycle", function(event, value) {
                            store._current = event;
                        });

                      case 1:
                        _context2.n = 2;
                        return Transport.send("lifecycle", "ready", {});

                      case 2:
                        readyRes = _context2.v;
                        setTimeout(function(_) {
                            ready$1();
                        });
                        return _context2.a(2, readyRes);
                    }
                }, _callee);
            }));
            return _ready.apply(this, arguments);
        }
        function clear$1() {
            var _Events_default5;
            for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                args[_key4] = arguments[_key4];
            }
            return (_Events_default5 = Events_default).clear.apply(_Events_default5, [ "Lifecycle" ].concat(args));
        }
        function close(reason) {
            return Transport.send("Lifecycle", "close", {
                reason: reason
            }, null);
        }
        function listen$1() {
            var _Events_default6;
            for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
                args[_key5] = arguments[_key5];
            }
            return (_Events_default6 = Events_default).listen.apply(_Events_default6, [ "Lifecycle" ].concat(args));
        }
        function once$1() {
            var _Events_default7;
            for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
                args[_key6] = arguments[_key6];
            }
            return (_Events_default7 = Events_default).once.apply(_Events_default7, [ "Lifecycle" ].concat(args));
        }
        function state() {
            return store.current;
        }
        function finished() {
            if (store.current === "unloading") return Transport.send("lifecycle", "finished"); else throw "Cannot call finished() except when in the unloading transition";
        }
        function additionalInfo() {
            return Transport.send("Localization", "additionalInfo", {}, null);
        }
        function clear() {
            var _Events_default8;
            for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
                args[_key7] = arguments[_key7];
            }
            return (_Events_default8 = Events_default).clear.apply(_Events_default8, [ "Localization" ].concat(args));
        }
        function countryCode() {
            var callbackOrValue = arguments[0];
            var params = {};
            if (arguments.length === 1 && typeof arguments[0] === "function") {
                callbackOrValue = arguments[0];
                params = {};
            }
            return Prop_default.prop("Localization", "countryCode", params, callbackOrValue, false, true, 0);
        }
        function language() {
            var callbackOrValue = arguments[0];
            var params = {};
            if (arguments.length === 1 && typeof arguments[0] === "function") {
                callbackOrValue = arguments[0];
                params = {};
            }
            return Prop_default.prop("Localization", "language", params, callbackOrValue, false, true, 0);
        }
        function latlon() {
            return Transport.send("Localization", "latlon", {}, null);
        }
        function listen() {
            var _Events_default9;
            for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
                args[_key8] = arguments[_key8];
            }
            return (_Events_default9 = Events_default).listen.apply(_Events_default9, [ "Localization" ].concat(args));
        }
        function locale() {
            var callbackOrValue = arguments[0];
            var params = {};
            if (arguments.length === 1 && typeof arguments[0] === "function") {
                callbackOrValue = arguments[0];
                params = {};
            }
            return Prop_default.prop("Localization", "locale", params, callbackOrValue, false, true, 0);
        }
        function locality() {
            var callbackOrValue = arguments[0];
            var params = {};
            if (arguments.length === 1 && typeof arguments[0] === "function") {
                callbackOrValue = arguments[0];
                params = {};
            }
            return Prop_default.prop("Localization", "locality", params, callbackOrValue, false, true, 0);
        }
        function once() {
            var _Events_default0;
            for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
                args[_key9] = arguments[_key9];
            }
            return (_Events_default0 = Events_default).once.apply(_Events_default0, [ "Localization" ].concat(args));
        }
        function postalCode() {
            var callbackOrValue = arguments[0];
            var params = {};
            if (arguments.length === 1 && typeof arguments[0] === "function") {
                callbackOrValue = arguments[0];
                params = {};
            }
            return Prop_default.prop("Localization", "postalCode", params, callbackOrValue, false, true, 0);
        }
        function preferredAudioLanguages() {
            var callbackOrValue = arguments[0];
            var params = {};
            if (arguments.length === 1 && typeof arguments[0] === "function") {
                callbackOrValue = arguments[0];
                params = {};
            }
            return Prop_default.prop("Localization", "preferredAudioLanguages", params, callbackOrValue, false, true, 0);
        }
        function Firebolt() {
            var fireboltApis = [ "Lifecycle", "Audio", "Make", "Model", "latlong" ];
            var _createSignal = createSignal(0), _createSignal2 = _slicedToArray(_createSignal, 2), activeIndex = _createSignal2[0], setActiveIndex = _createSignal2[1];
            var _createSignal3 = createSignal(""), _createSignal4 = _slicedToArray(_createSignal3, 2), data = _createSignal4[0], setData = _createSignal4[1];
            setGlobalBackground(255);
            createEffect(function() {
                switch (activeIndex()) {
                  case 0:
                    setData("LifeCycle state is " + Lifecycle_default.state());
                    break;

                  case 1:
                    Device_default.audio().then(function(supportedAudioProfiles) {
                        setData("DolbyAtmos " + supportedAudioProfiles.dolbyAtmos);
                    });
                    break;

                  case 2:
                    Device_default.make().then(function(make) {
                        setData("Device Make is " + make);
                    });
                    break;

                  case 3:
                    Account_default.id().then(function(id) {
                        setData("AccountId is " + id);
                    });
                    break;

                  case 4:
                    Localization_default.latlon().then(function(val) {
                        setData("Lat value is ".concat(val[0], ", Long value is ").concat(val[1]));
                    });
                    break;
                }
            });
            var apiStyle = {
                color: 4294967295,
                fontSize: 32,
                fontWeight: "bold",
                textAlign: "center",
                $focus: {
                    color: 1147903743
                }
            };
            return function() {
                var _el$ = createElement("view"), _el$2 = createElement("text"), _el$4 = createElement("text");
                insertNode(_el$, _el$2);
                insertNode(_el$, _el$4);
                insertNode(_el$2, createTextNode("Press Right and Left to change API"));
                setProp(_el$2, "y", -120);
                setProp(_el$2, "fontSize", 24);
                setProp(_el$2, "center", true);
                insert(_el$, createComponent(Row, {
                    autofocus: true,
                    center: true,
                    y: -60,
                    onSelectedChanged: setActiveIndex,
                    get children() {
                        return fireboltApis.map(function(api, index) {
                            return function() {
                                var _el$5 = createElement("text");
                                setProp(_el$5, "style", apiStyle);
                                insert(_el$5, api);
                                return _el$5;
                            }();
                        });
                    }
                }), _el$4);
                setProp(_el$4, "center", true);
                insert(_el$4, data);
                return _el$;
            }();
        }
        _export("default", Firebolt);
        return {
            setters: [ function(_renderLegacy001Js) {
                createEffect = _renderLegacy001Js.V;
                createElement = _renderLegacy001Js.a;
                createComponent = _renderLegacy001Js.i;
                insert = _renderLegacy001Js.l;
                setProp = _renderLegacy001Js.m;
                createSignal = _renderLegacy001Js.q;
                createTextNode = _renderLegacy001Js.s;
                insertNode = _renderLegacy001Js.u;
            }, function(_RowLegacy009Js) {
                Row = _RowLegacy009Js.t;
            }, function(_stateLegacy00iJs) {
                setGlobalBackground = _stateLegacy00iJs.n;
            } ],
            execute: function execute() {
                win$3 = typeof window !== "undefined" ? window : {};
                setMockListener = function setMockListener(func) {
                    listener = func;
                };
                pending = [];
                eventMap = {};
                if (win$3.__firebolt && win$3.__firebolt.testHarness) testHarness = win$3.__firebolt.testHarness;
                MockTransport_default = {
                    send: send,
                    receive: receive,
                    event: event
                };
                mocks = {};
                MockProps_default = {
                    mock: mock
                };
                defaults_default$16 = {
                    closedCaptions: {
                        enabled: true,
                        styles: {
                            fontFamily: "monospaced_sanserif",
                            fontSize: 1,
                            fontColor: "#ffffff",
                            fontEdge: "none",
                            fontEdgeColor: "#7F7F7F",
                            fontOpacity: 100,
                            backgroundColor: "#000000",
                            backgroundOpacity: 100,
                            textAlign: "center",
                            textAlignVertical: "middle",
                            windowColor: "white",
                            windowOpacity: 50
                        },
                        preferredLanguages: [ "eng", "spa" ]
                    },
                    closedCaptionsSettings: function closedCaptionsSettings(params) {
                        return MockProps_default.mock("Accessibility", "closedCaptionsSettings", params, void 0, 0, {
                            enabled: true,
                            styles: {
                                fontFamily: "monospaced_sanserif",
                                fontSize: 1,
                                fontColor: "#ffffff",
                                fontEdge: "none",
                                fontEdgeColor: "#7F7F7F",
                                fontOpacity: 100,
                                backgroundColor: "#000000",
                                backgroundOpacity: 100,
                                textAlign: "center",
                                textAlignVertical: "middle",
                                windowColor: "white",
                                windowOpacity: 50
                            },
                            preferredLanguages: [ "eng", "spa" ]
                        });
                    },
                    highContrastUI: function highContrastUI(params) {
                        return MockProps_default.mock("Accessibility", "highContrastUI", params, void 0, 0, true);
                    },
                    voiceGuidance: {
                        enabled: true,
                        navigationHints: true,
                        rate: 1
                    },
                    voiceGuidanceSettings: function voiceGuidanceSettings(params) {
                        return MockProps_default.mock("Accessibility", "voiceGuidanceSettings", params, void 0, 0, {
                            enabled: true,
                            navigationHints: true,
                            rate: 1
                        });
                    },
                    audioDescriptionSettings: function audioDescriptionSettings(params) {
                        return MockProps_default.mock("Accessibility", "audioDescriptionSettings", params, void 0, 0, {
                            enabled: true
                        });
                    }
                };
                defaults_default$15 = {
                    id: function id(params) {
                        return MockProps_default.mock("Account", "id", params, void 0, 0, "123");
                    },
                    uid: function uid(params) {
                        return MockProps_default.mock("Account", "uid", params, void 0, 0, "ee6723b8-7ab3-462c-8d93-dbf61227998e");
                    }
                };
                defaults_default$14 = {
                    config: {
                        adServerUrl: "https://demo.v.fwmrm.net/ad/p/1",
                        adServerUrlTemplate: "https://demo.v.fwmrm.net/ad/p/1?flag=+sltp+exvt+slcb+emcr+amcb+aeti&prof=12345:caf_allinone_profile &nw=12345&mode=live&vdur=123&caid=a110523018&asnw=372464&csid=gmott_ios_tablet_watch_live_ESPNU&ssnw=372464&vip=198.205.92.1&resp=vmap1&metr=1031&pvrn=12345&vprn=12345&vcid=1X0Ce7L3xRWlTeNhc7br8Q%3D%3D",
                        adNetworkId: "519178",
                        adProfileId: "12345:caf_allinone_profile",
                        adSiteSectionId: "caf_allinone_profile_section",
                        adOptOut: true,
                        privacyData: "ew0KICAicGR0IjogImdkcDp2MSIsDQogICJ1c19wcml2YWN5IjogIjEtTi0iLA0KICAibG10IjogIjEiIA0KfQ0K",
                        ifaValue: "01234567-89AB-CDEF-GH01-23456789ABCD",
                        ifa: "ewogICJ2YWx1ZSI6ICIwMTIzNDU2Ny04OUFCLUNERUYtR0gwMS0yMzQ1Njc4OUFCQ0QiLAogICJpZmFfdHlwZSI6ICJzc3BpZCIsCiAgImxtdCI6ICIwIgp9Cg==",
                        appName: "FutureToday",
                        appBundleId: "FutureToday.comcast",
                        distributorAppId: "1001",
                        deviceAdAttributes: "ewogICJib0F0dHJpYnV0ZXNGb3JSZXZTaGFyZUlkIjogIjEyMzQiCn0=",
                        coppa: 0,
                        authenticationEntity: "60f72475281cfba3852413bd53e957f6"
                    },
                    policy: function policy(params) {
                        return MockProps_default.mock("Advertising", "policy", params, void 0, 0, {
                            skipRestriction: "adsUnwatched",
                            limitAdTracking: false
                        });
                    },
                    advertisingId: {
                        ifa: "01234567-89AB-CDEF-GH01-23456789ABCD",
                        ifa_type: "sspid",
                        lmt: "0"
                    },
                    deviceAttributes: {},
                    appBundleId: "app.operator"
                };
                defaults_default$13 = {
                    token: {
                        value: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
                        expires: "2022-04-23T18:25:43.511Z",
                        type: "platform"
                    },
                    device: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
                    session: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
                    root: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
                };
                defaults_default$12 = {
                    supported: true,
                    available: true,
                    permitted: true,
                    granted: true,
                    info: [ {
                        capability: "xrn:firebolt:capability:device:model",
                        supported: true,
                        available: true,
                        use: {
                            permitted: true,
                            granted: true
                        },
                        manage: {
                            permitted: true,
                            granted: true
                        },
                        provide: {
                            permitted: true,
                            granted: true
                        }
                    }, {
                        capability: "xrn:firebolt:capability:input:keyboard",
                        supported: true,
                        available: true,
                        use: {
                            permitted: true,
                            granted: true
                        },
                        manage: {
                            permitted: true,
                            granted: true
                        },
                        provide: {
                            permitted: true,
                            granted: true
                        }
                    }, {
                        capability: "xrn:firebolt:capability:protocol:bluetoothle",
                        supported: false,
                        available: false,
                        use: {
                            permitted: true,
                            granted: true
                        },
                        manage: {
                            permitted: true,
                            granted: true
                        },
                        provide: {
                            permitted: true,
                            granted: true
                        },
                        details: [ "unsupported" ]
                    }, {
                        capability: "xrn:firebolt:capability:token:device",
                        supported: true,
                        available: true,
                        use: {
                            permitted: true,
                            granted: true
                        },
                        manage: {
                            permitted: true,
                            granted: true
                        },
                        provide: {
                            permitted: true,
                            granted: true
                        }
                    }, {
                        capability: "xrn:firebolt:capability:token:platform",
                        supported: true,
                        available: false,
                        use: {
                            permitted: true,
                            granted: true
                        },
                        manage: {
                            permitted: true,
                            granted: true
                        },
                        provide: {
                            permitted: true,
                            granted: true
                        },
                        details: [ "unavailable" ]
                    }, {
                        capability: "xrn:firebolt:capability:protocol:moca",
                        supported: true,
                        available: false,
                        use: {
                            permitted: true,
                            granted: true
                        },
                        manage: {
                            permitted: true,
                            granted: true
                        },
                        provide: {
                            permitted: true,
                            granted: true
                        },
                        details: [ "disabled", "unavailable" ]
                    }, {
                        capability: "xrn:firebolt:capability:wifi:scan",
                        supported: true,
                        available: true,
                        use: {
                            permitted: true,
                            granted: true
                        },
                        manage: {
                            permitted: true,
                            granted: true
                        },
                        provide: {
                            permitted: true,
                            granted: true
                        },
                        details: [ "unpermitted" ]
                    }, {
                        capability: "xrn:firebolt:capability:localization:postal-code",
                        supported: true,
                        available: true,
                        use: {
                            permitted: true,
                            granted: null
                        },
                        manage: {
                            permitted: true,
                            granted: true
                        },
                        provide: {
                            permitted: true,
                            granted: true
                        },
                        details: [ "ungranted" ]
                    }, {
                        capability: "xrn:firebolt:capability:localization:postal-code",
                        supported: true,
                        available: true,
                        use: {
                            permitted: true,
                            granted: true
                        },
                        manage: {
                            permitted: true,
                            granted: true
                        },
                        provide: {
                            permitted: true,
                            granted: true
                        },
                        details: [ "ungranted" ]
                    }, {
                        capability: "xrn:firebolt:capability:localization:locality",
                        supported: true,
                        available: true,
                        use: {
                            permitted: true,
                            granted: true
                        },
                        manage: {
                            permitted: true,
                            granted: true
                        },
                        provide: {
                            permitted: true,
                            granted: true
                        },
                        details: [ "grantDenied", "ungranted" ]
                    } ],
                    request: [ {
                        capability: "xrn:firebolt:capability:commerce:purchase",
                        supported: true,
                        available: true,
                        use: {
                            permitted: true,
                            granted: true
                        },
                        manage: {
                            permitted: true,
                            granted: true
                        },
                        provide: {
                            permitted: true,
                            granted: true
                        }
                    } ]
                };
                defaults_default$11 = {
                    ports: [ {
                        port: "HDMI1",
                        connected: true,
                        signal: "stable",
                        arcCapable: true,
                        arcConnected: true,
                        edidVersion: "2.0",
                        autoLowLatencyModeCapable: true,
                        autoLowLatencyModeSignalled: true
                    } ],
                    port: {
                        port: "HDMI1",
                        connected: true,
                        signal: "stable",
                        arcCapable: true,
                        arcConnected: true,
                        edidVersion: "2.0",
                        autoLowLatencyModeCapable: true,
                        autoLowLatencyModeSignalled: true
                    },
                    lowLatencyMode: function lowLatencyMode(params) {
                        return MockProps_default.mock("HDMIInput", "lowLatencyMode", params, void 0, 0, true);
                    },
                    autoLowLatencyModeCapable: function autoLowLatencyModeCapable(params) {
                        return MockProps_default.mock("HDMIInput", "autoLowLatencyModeCapable", params, void 0, 1, true);
                    },
                    edidVersion: function edidVersion(params) {
                        return MockProps_default.mock("HDMIInput", "edidVersion", params, void 0, 1, "2.0");
                    }
                };
                defaults_default$10 = {
                    id: function id(params) {
                        return MockProps_default.mock("Device", "id", params, void 0, 0, "123");
                    },
                    distributor: function distributor(params) {
                        return MockProps_default.mock("Device", "distributor", params, void 0, 0, "Company");
                    },
                    platform: function platform(params) {
                        return MockProps_default.mock("Device", "platform", params, void 0, 0, "WPE");
                    },
                    uid: function uid(params) {
                        return MockProps_default.mock("Device", "uid", params, void 0, 0, "ee6723b8-7ab3-462c-8d93-dbf61227998e");
                    },
                    type: function type(params) {
                        return MockProps_default.mock("Device", "type", params, void 0, 0, "STB");
                    },
                    model: function model(params) {
                        return MockProps_default.mock("Device", "model", params, void 0, 0, "xi6");
                    },
                    sku: function sku(params) {
                        return MockProps_default.mock("Device", "sku", params, void 0, 0, "AX061AEI");
                    },
                    make: function make(params) {
                        return MockProps_default.mock("Device", "make", params, void 0, 0, "Arris");
                    },
                    version: function version(params) {
                        return MockProps_default.mock("Device", "version", params, void 0, 0, {
                            sdk: {
                                major: 0,
                                minor: 8,
                                patch: 0,
                                readable: "Firebolt JS SDK v0.8.0"
                            },
                            api: {
                                major: 0,
                                minor: 8,
                                patch: 0,
                                readable: "Firebolt API v0.8.0"
                            },
                            firmware: {
                                major: 1,
                                minor: 2,
                                patch: 3,
                                readable: "Device Firmware v1.2.3"
                            },
                            os: {
                                major: 0,
                                minor: 1,
                                patch: 0,
                                readable: "Firebolt OS v0.1.0"
                            },
                            debug: "Non-parsable build info for error logging only."
                        });
                    },
                    hdcp: function hdcp(params) {
                        return MockProps_default.mock("Device", "hdcp", params, void 0, 0, {
                            "hdcp1.4": true,
                            "hdcp2.2": true
                        });
                    },
                    hdr: function hdr(params) {
                        return MockProps_default.mock("Device", "hdr", params, void 0, 0, {
                            hdr10: true,
                            hdr10Plus: true,
                            dolbyVision: true,
                            hlg: true
                        });
                    },
                    audio: function audio(params) {
                        return MockProps_default.mock("Device", "audio", params, void 0, 0, {
                            stereo: true,
                            "dolbyDigital5.1": true,
                            "dolbyDigital5.1+": true,
                            dolbyAtmos: true
                        });
                    },
                    screenResolution: function screenResolution(params) {
                        return MockProps_default.mock("Device", "screenResolution", params, void 0, 0, [ 1920, 1080 ]);
                    },
                    videoResolution: function videoResolution(params) {
                        return MockProps_default.mock("Device", "videoResolution", params, void 0, 0, [ 1920, 1080 ]);
                    },
                    name: function name(params) {
                        return MockProps_default.mock("Device", "name", params, void 0, 0, "Living Room");
                    },
                    network: function network(params) {
                        return MockProps_default.mock("Device", "network", params, void 0, 0, {
                            state: "connected",
                            type: "wifi"
                        });
                    }
                };
                defaults_default$9 = {
                    policy: function policy(params) {
                        return MockProps_default.mock("Discovery", "policy", params, void 0, 0, {
                            enableRecommendations: true,
                            shareWatchHistory: true,
                            rememberWatchedPrograms: true
                        });
                    },
                    entityInfo: true,
                    purchasedContent: true,
                    watched: true,
                    watchNext: true,
                    entitlements: true,
                    contentAccess: null,
                    clearContentAccess: null,
                    launch: true,
                    signIn: true,
                    signOut: true,
                    userInterest: null,
                    userInterestResponse: null,
                    userInterestError: null
                };
                defaults_default$8 = {
                    email: "user@domain.com",
                    password: "abc123",
                    standard: "Living Room"
                };
                inactive = {
                    state: "inactive",
                    previous: "initializing"
                };
                foreground = {
                    state: "foreground",
                    previous: "inactive"
                };
                unloading = {
                    state: "unloading",
                    previous: "inactive"
                };
                emit$1 = function emit$1(value) {
                    MockTransport_default.event("Lifecycle", value.state, value);
                };
                win$2 = typeof window !== "undefined" ? window : {};
                automation = win$2.__firebolt ? !!win$2.__firebolt.automation : false;
                defaults_default$7 = {
                    ready: function ready() {
                        inactive.previous = "initializing";
                        setTimeout(function() {
                            return emit$1(inactive);
                        }, automation ? 1 : 500);
                        foreground.previous = "inactive";
                        setTimeout(function() {
                            return emit$1(foreground);
                        }, automation ? 2 : 1e3);
                    },
                    close: function close(params) {
                        var reason = params.reason;
                        if (reason === "remoteButton") {
                            inactive.previous = "foreground";
                            setTimeout(function() {
                                return emit$1(inactive);
                            }, automation ? 1 : 500);
                        } else if ([ "userExit", "error" ].includes(reason)) {
                            inactive.previous = "foreground";
                            unloading.previous = "inactive";
                            setTimeout(function() {
                                return emit$1(inactive);
                            }, automation ? 1 : 500);
                            setTimeout(function() {
                                return emit$1(unloading);
                            }, automation ? 2 : 1e3);
                        } else throw "Invalid close reason";
                    },
                    finished: function finished() {
                        if (win$2.location) win$2.location.href = "about:blank";
                    }
                };
                defaults_default$6 = {
                    locality: function locality(params) {
                        return MockProps_default.mock("Localization", "locality", params, void 0, 0, "Philadelphia");
                    },
                    postalCode: function postalCode(params) {
                        return MockProps_default.mock("Localization", "postalCode", params, void 0, 0, "19103");
                    },
                    countryCode: function countryCode(params) {
                        return MockProps_default.mock("Localization", "countryCode", params, void 0, 0, "US");
                    },
                    language: function language(params) {
                        return MockProps_default.mock("Localization", "language", params, void 0, 0, "en");
                    },
                    preferredAudioLanguages: function preferredAudioLanguages(params) {
                        return MockProps_default.mock("Localization", "preferredAudioLanguages", params, void 0, 0, [ "spa", "eng" ]);
                    },
                    locale: function locale(params) {
                        return MockProps_default.mock("Localization", "locale", params, void 0, 0, "en-US");
                    },
                    latlon: [ 39.9549, 75.1699 ],
                    additionalInfo: {}
                };
                defaults_default$5 = {
                    ready: true,
                    signIn: true,
                    signOut: true,
                    startContent: true,
                    stopContent: true,
                    page: true,
                    action: true,
                    error: true,
                    mediaLoadStart: true,
                    mediaPlay: true,
                    mediaPlaying: true,
                    mediaPause: true,
                    mediaWaiting: true,
                    mediaProgress: true,
                    mediaSeeking: true,
                    mediaSeeked: true,
                    mediaRateChange: true,
                    mediaRenditionChange: true,
                    mediaEnded: true,
                    appInfo: null
                };
                defaults_default$4 = {
                    initialization: {
                        lmt: 0,
                        us_privacy: "1-Y-",
                        discovery: {
                            navigateTo: {
                                action: "entity",
                                data: {
                                    entityId: "abc",
                                    entityType: "program",
                                    programType: "movie"
                                },
                                context: {
                                    source: "voice"
                                }
                            }
                        }
                    }
                };
                defaults_default$3 = {
                    approveContentRating: false,
                    approvePurchase: false,
                    flags: {
                        userExperience: "1000"
                    }
                };
                defaults_default$2 = {
                    protocols: {
                        "dial1.7": true
                    },
                    device: "device-id",
                    friendlyName: function friendlyName(params) {
                        return MockProps_default.mock("SecondScreen", "friendlyName", params, void 0, 0, "Living Room");
                    }
                };
                defaults_default$1 = {
                    get: "VGhpcyBub3QgYSByZWFsIHRva2VuLgo=",
                    set: null,
                    remove: null,
                    clear: null
                };
                defaults_default = {
                    localization: defaults_default$6,
                    device: defaults_default$10,
                    accessibility: defaults_default$16
                };
                Queue = function() {
                    function Queue() {
                        this._callback = null;
                        this._queue = [];
                    }
                    return _createClass(Queue, [ {
                        key: "send",
                        value: function send(json) {
                            this._queue.push(json);
                        }
                    }, {
                        key: "receive",
                        value: function receive(_callback) {
                            this._callback = _callback;
                        }
                    }, {
                        key: "flush",
                        value: function flush(transport) {
                            transport.receive(this._callback);
                            this._queue.forEach(function(item) {
                                return transport.send(item);
                            });
                        }
                    } ]);
                }();
                settings = {};
                subscribers = {};
                initSettings = function initSettings(appSettings, platformSettings) {
                    settings["app"] = appSettings;
                    settings["platform"] = _objectSpread({
                        logLevel: "WARN"
                    }, platformSettings);
                    settings["user"] = {};
                };
                publish = function publish(key, value) {
                    subscribers[key] && subscribers[key].forEach(function(subscriber) {
                        return subscriber(value);
                    });
                };
                dotGrab = function dotGrab() {
                    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                    var key = arguments.length > 1 ? arguments[1] : undefined;
                    var keys = key.split(".");
                    for (var i = 0; i < keys.length; i++) obj = obj[keys[i]] = obj[keys[i]] !== void 0 ? obj[keys[i]] : {};
                    return _typeof(obj) === "object" ? Object.keys(obj).length ? obj : void 0 : obj;
                };
                Settings_default = {
                    get: function get(type, key) {
                        var fallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : void 0;
                        var val = dotGrab(settings[type], key);
                        return val !== void 0 ? val : fallback;
                    },
                    has: function has(type, key) {
                        return !!this.get(type, key);
                    },
                    set: function set(key, value) {
                        settings["user"][key] = value;
                        publish(key, value);
                    },
                    subscribe: function subscribe(key, callback) {
                        subscribers[key] = subscribers[key] || [];
                        subscribers[key].push(callback);
                    },
                    unsubscribe: function unsubscribe(key, callback) {
                        if (callback) {
                            var index = subscribers[key] && subscribers[key].findIndex(function(cb) {
                                return cb === callback;
                            });
                            index > -1 && subscribers[key].splice(index, 1);
                        } else if (key in subscribers) subscribers[key] = [];
                    },
                    clearSubscribers: function clearSubscribers() {
                        var _iterator = _createForOfIteratorHelper(Object.getOwnPropertyNames(subscribers)), _step;
                        try {
                            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                                var key = _step.value;
                                delete subscribers[key];
                            }
                        } catch (err) {
                            _iterator.e(err);
                        } finally {
                            _iterator.f();
                        }
                    },
                    setLogLevel: function setLogLevel(logLevel) {
                        settings.platform.logLevel = logLevel;
                    },
                    getLogLevel: function getLogLevel() {
                        return settings.platform.logLevel;
                    }
                };
                win$1 = typeof window !== "undefined" ? window : {};
                LegacyTransport = function() {
                    function LegacyTransport(bridge) {
                        this.bridge = bridge;
                    }
                    return _createClass(LegacyTransport, [ {
                        key: "send",
                        value: function send(msg) {
                            this.bridge.JSMessageChanged(msg, function() {});
                        }
                    }, {
                        key: "receive",
                        value: function receive(callback) {
                            win$1.$badger = win$1.$badger || {};
                            var badgerCallback = win$1.$badger.callback ? win$1.$badger.callback.bind(win$1.$badger) : null;
                            var badgerEvent = win$1.$badger.event ? win$1.$badger.event.bind(win$1.$badger) : null;
                            win$1.$badger.callback = function(pid, success, json) {
                                if (json.jsonrpc) callback(JSON.stringify(json)); else if (badgerCallback) badgerCallback(pid, success, json);
                            };
                            win$1.$badger.event = function(handlerId, json) {
                                if (json.jsonrpc) callback(JSON.stringify(json)); else if (badgerEvent) badgerEvent(handlerId, json);
                            };
                        }
                    } ], [ {
                        key: "isLegacy",
                        value: function isLegacy(transport) {
                            return LegacyTransport.isXREProxy(transport) || transport.send === void 0 && transport.JSMessageChanged;
                        }
                    }, {
                        key: "isXREProxy",
                        value: function isXREProxy(transport) {
                            return transport.proxyObjectTest !== void 0;
                        }
                    } ]);
                }();
                MAX_QUEUED_MESSAGES = 100;
                WebsocketTransport = function() {
                    function WebsocketTransport(endpoint) {
                        this._endpoint = endpoint;
                        this._ws = null;
                        this._connected = false;
                        this._queue = [];
                        this._callbacks = [];
                    }
                    return _createClass(WebsocketTransport, [ {
                        key: "send",
                        value: function send(msg) {
                            this._connect();
                            if (this._connected) this._ws.send(msg); else if (this._queue.length < MAX_QUEUED_MESSAGES) this._queue.push(msg);
                        }
                    }, {
                        key: "receive",
                        value: function receive(callback) {
                            if (!callback) return;
                            this._connect();
                            this._callbacks.push(callback);
                        }
                    }, {
                        key: "_notifyCallbacks",
                        value: function _notifyCallbacks(message) {
                            var _this = this;
                            var _loop2 = function _loop2(i) {
                                setTimeout(function() {
                                    return _this._callbacks[i](message);
                                }, 1);
                            };
                            for (var i = 0; i < this._callbacks.length; i++) {
                                _loop2(i);
                            }
                        }
                    }, {
                        key: "_connect",
                        value: function _connect() {
                            var _this2 = this;
                            if (this._ws) return;
                            this._ws = new WebSocket(this._endpoint, [ "jsonrpc" ]);
                            this._ws.addEventListener("message", function(message) {
                                _this2._notifyCallbacks(message.data);
                            });
                            this._ws.addEventListener("error", function(message) {});
                            this._ws.addEventListener("close", function(message) {
                                _this2._ws = null;
                                _this2._connected = false;
                            });
                            this._ws.addEventListener("open", function(message) {
                                _this2._connected = true;
                                for (var i = 0; i < _this2._queue.length; i++) _this2._ws.send(_this2._queue[i]);
                                _this2._queue = [];
                            });
                        }
                    } ]);
                }();
                Results_default = {
                    transform: transform
                };
                LEGACY_TRANSPORT_SERVICE_NAME = "com.comcast.BridgeObject_1";
                moduleInstance = null;
                isEventSuccess = function isEventSuccess(x) {
                    return x && typeof x.event === "string" && typeof x.listening === "boolean";
                };
                win = typeof window !== "undefined" ? window : {};
                Transport = function() {
                    function Transport() {
                        this._promises = [];
                        this._transport = null;
                        this._id = 1;
                        this._eventEmitters = [];
                        this._eventIds = [];
                        this._queue = new Queue;
                        this._deprecated = {};
                        this.isMock = false;
                    }
                    return _createClass(Transport, [ {
                        key: "_endpoint",
                        value: function _endpoint() {
                            if (win.__firebolt && win.__firebolt.endpoint) return win.__firebolt.endpoint;
                            return null;
                        }
                    }, {
                        key: "constructTransportLayer",
                        value: function constructTransportLayer() {
                            var _this3 = this;
                            var transport;
                            var endpoint = this._endpoint();
                            if (endpoint && (endpoint.startsWith("ws://") || endpoint.startsWith("wss://"))) {
                                transport = new WebsocketTransport(endpoint);
                                transport.receive(this.receiveHandler.bind(this));
                            } else if (typeof win.ServiceManager !== "undefined" && win.ServiceManager && win.ServiceManager.version) {
                                transport = this._queue;
                                win.ServiceManager.getServiceForJavaScript(LEGACY_TRANSPORT_SERVICE_NAME, function(service) {
                                    if (LegacyTransport.isLegacy(service)) transport = new LegacyTransport(service); else transport = service;
                                    _this3.setTransportLayer(transport);
                                });
                            } else {
                                this.isMock = true;
                                transport = MockTransport_default;
                                transport.receive(this.receiveHandler.bind(this));
                            }
                            return transport;
                        }
                    }, {
                        key: "setTransportLayer",
                        value: function setTransportLayer(tl) {
                            this._transport = tl;
                            this._queue.flush(tl);
                        }
                    }, {
                        key: "_send",
                        value: function _send(module, method, params, transforms) {
                            if (Array.isArray(module) && !method && !params) return this._batch(module); else return this._sendAndGetId(module, method, params, transforms).promise;
                        }
                    }, {
                        key: "_sendAndGetId",
                        value: function _sendAndGetId(module, method, params, transforms) {
                            var _this$_processRequest = this._processRequest(module, method, params, transforms), promise = _this$_processRequest.promise, json = _this$_processRequest.json, id = _this$_processRequest.id;
                            var msg = JSON.stringify(json);
                            if (Settings_default.getLogLevel() === "DEBUG") console.debug("Sending message to transport: " + msg);
                            this._transport.send(msg);
                            return {
                                id: id,
                                promise: promise
                            };
                        }
                    }, {
                        key: "_batch",
                        value: function _batch(requests) {
                            var _this4 = this;
                            var results = [];
                            var json = [];
                            requests.forEach(function(_ref5) {
                                var module = _ref5.module, method = _ref5.method, params = _ref5.params, transforms = _ref5.transforms;
                                var result = _this4._processRequest(module, method, params, transforms);
                                results.push({
                                    promise: result.promise,
                                    id: result.id
                                });
                                json.push(result.json);
                            });
                            var msg = JSON.stringify(json);
                            if (Settings_default.getLogLevel() === "DEBUG") console.debug("Sending message to transport: " + msg);
                            this._transport.send(msg);
                            return results;
                        }
                    }, {
                        key: "_processRequest",
                        value: function _processRequest(module, method, params, transforms) {
                            var result = {
                                promise: this._addPromiseToQueue(module, method, params, transforms),
                                json: this._createRequestJSON(module, method, params),
                                id: this._id
                            };
                            this._id++;
                            return result;
                        }
                    }, {
                        key: "_createRequestJSON",
                        value: function _createRequestJSON(module, method, params) {
                            return {
                                jsonrpc: "2.0",
                                method: module.toLowerCase() + "." + method,
                                params: params,
                                id: this._id
                            };
                        }
                    }, {
                        key: "_addPromiseToQueue",
                        value: function _addPromiseToQueue(module, method, params, transforms) {
                            var _this5 = this;
                            return new Promise(function(resolve, reject) {
                                _this5._promises[_this5._id] = {};
                                _this5._promises[_this5._id].promise = _this5;
                                _this5._promises[_this5._id].resolve = resolve;
                                _this5._promises[_this5._id].reject = reject;
                                _this5._promises[_this5._id].transforms = transforms;
                                var deprecated = _this5._deprecated[module.toLowerCase() + "." + method.toLowerCase()];
                                if (deprecated) console.warn("WARNING: ".concat(module, ".").concat(method, "() is deprecated. ") + deprecated.alternative);
                                if (method.match(/^on[A-Z]/)) if (params.listen) _this5._eventIds.push(_this5._id); else _this5._eventIds = _this5._eventIds.filter(function(id) {
                                    return id !== _this5._id;
                                });
                            });
                        }
                    }, {
                        key: "receiveHandler",
                        value: function receiveHandler(message) {
                            if (Settings_default.getLogLevel() === "DEBUG") console.debug("Received message from transport: " + message);
                            var json = JSON.parse(message);
                            var p = this._promises[json.id];
                            if (p) {
                                if (json.error) p.reject(json.error); else {
                                    var result = json.result;
                                    if (p.transforms) if (Array.isArray(json.result)) result = result.map(function(x) {
                                        return Results_default.transform(x, p.transforms);
                                    }); else result = Results_default.transform(result, p.transforms);
                                    p.resolve(result);
                                }
                                delete this._promises[json.id];
                            }
                            if (this._eventIds.includes(json.id) && !isEventSuccess(json.result)) this._eventEmitters.forEach(function(emit) {
                                emit(json.id, json.result);
                            });
                        }
                    }, {
                        key: "init",
                        value: function init() {
                            initSettings({}, {
                                log: true
                            });
                            this._queue.receive(this.receiveHandler.bind(this));
                            if (win.__firebolt) {
                                if (win.__firebolt.mockTransportLayer === true) {
                                    this.isMock = true;
                                    this.setTransportLayer(MockTransport_default);
                                } else if (win.__firebolt.getTransportLayer) this.setTransportLayer(win.__firebolt.getTransportLayer());
                            }
                            if (this._transport == null) this._transport = this.constructTransportLayer();
                        }
                    } ], [ {
                        key: "addEventEmitter",
                        value: function addEventEmitter(emitter) {
                            Transport.get()._eventEmitters.push(emitter);
                        }
                    }, {
                        key: "registerDeprecatedMethod",
                        value: function registerDeprecatedMethod(module, method, alternative) {
                            Transport.get()._deprecated[module.toLowerCase() + "." + method.toLowerCase()] = {
                                alternative: alternative || ""
                            };
                        }
                    }, {
                        key: "send",
                        value: function send(module, method, params, transforms) {
                            return Transport.get()._send(module, method, params, transforms);
                        }
                    }, {
                        key: "listen",
                        value: function listen(module, method, params, transforms) {
                            return Transport.get()._sendAndGetId(module, method, params, transforms);
                        }
                    }, {
                        key: "get",
                        value: function get() {
                            win.__firebolt = win.__firebolt || {};
                            if (win.__firebolt.transport == null && moduleInstance == null) {
                                var transport = new Transport;
                                transport.init();
                                if (transport.isMock) moduleInstance = transport; else {
                                    win.__firebolt = win.__firebolt || {};
                                    win.__firebolt.transport = transport;
                                }
                                win.__firebolt.setTransportLayer = transport.setTransportLayer.bind(transport);
                            }
                            return win.__firebolt.transport ? win.__firebolt.transport : moduleInstance;
                        }
                    } ]);
                }();
                win.__firebolt = win.__firebolt || {};
                win.__firebolt.setTransportLayer = function(transport) {
                    Transport.get().setTransportLayer(transport);
                };
                listenerId = 0;
                listeners = {
                    internal: {},
                    external: {},
                    get: function get(key) {
                        return Object.assign(Object.assign({}, listeners.internal[key]), listeners.external[key]);
                    },
                    set: function set(key, id, value) {
                        listeners.external[key] = listeners.external[key] || {};
                        listeners.external[key][id] = value;
                    },
                    setInternal: function setInternal(key, id, value) {
                        listeners.internal[key] = listeners.internal[key] || {};
                        listeners.internal[key][id] = value;
                    },
                    find: function find(id) {
                        var key;
                        [ listeners.internal, listeners.external ].find(function(group) {
                            key = Object.keys(group).find(function(key) {
                                return group[key][id];
                            });
                            if (key) return true;
                        });
                        return key;
                    },
                    remove: function remove(id) {
                        [ listeners.internal, listeners.external ].forEach(function(group) {
                            Object.keys(group).forEach(function(key) {
                                if (group[key] && group[key][id]) {
                                    delete group[key][id];
                                    if (Object.values(group[key]).length === 0) delete group[key];
                                }
                            });
                        });
                    },
                    removeKey: function removeKey(key) {
                        var _internal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                        _internal && listeners.internal[key] && delete listeners.internal[key];
                        listeners.external[key] && delete listeners.external[key];
                    },
                    keys: function keys() {
                        return Array.from(new Set(Object.keys(listeners.internal).concat(Object.keys(listeners.external))));
                    },
                    count: function count(key) {
                        return Object.values(listeners.get(key)).length;
                    }
                };
                keys = {};
                oncers = [];
                validEvents = {};
                validContext = {};
                transportInitialized = false;
                emit = function emit(id, value) {
                    callCallbacks(listeners.internal[keys[id]], [ value ]);
                    callCallbacks(listeners.external[keys[id]], [ value ]);
                };
                registerEvents = function registerEvents(module, events) {
                    validEvents[module.toLowerCase()] = events.concat();
                };
                registerEventContext = function registerEventContext(module, event, context) {
                    validContext[module.toLowerCase()] = validContext[module.toLowerCase()] || {};
                    validContext[module.toLowerCase()][event] = context.concat();
                };
                callCallbacks = function callCallbacks(cbs, args) {
                    cbs && Object.keys(cbs).forEach(function(listenerId) {
                        var callback = cbs[listenerId];
                        if (oncers.indexOf(parseInt(listenerId)) >= 0) {
                            oncers.splice(oncers.indexOf(parseInt(listenerId)), 1);
                            delete cbs[listenerId];
                        }
                        callback.apply(null, args);
                    });
                };
                doListen = function doListen(module, event, callback, context, once) {
                    var internal = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
                    init();
                    if (typeof callback !== "function") return Promise.reject("No valid callback function provided."); else {
                        if (module === "*") return Promise.reject("No valid module name provided");
                        var wildcard = event === "*";
                        var events = wildcard ? validEvents[module] : [ event ];
                        var promises = [];
                        var hasContext = Object.values(context).length > 0;
                        var contextKey = Object.keys(context).sort().map(function(key) {
                            return key + "=" + JSON.stringify(context[key]);
                        }).join("&");
                        listenerId++;
                        if (once) oncers.push(listenerId);
                        events.forEach(function(event) {
                            var key = module + "." + event + (hasContext ? ".".concat(contextKey) : "");
                            if (Object.values(listeners.get(key)).length === 0) {
                                var args = Object.assign({
                                    listen: true
                                }, context);
                                var _Transport$listen = Transport.listen(module, "on" + event[0].toUpperCase() + event.substring(1), args), _id = _Transport$listen.id, promise = _Transport$listen.promise;
                                keys[_id] = key;
                                promises.push(promise);
                            }
                            var setter = internal ? listeners.setInternal : listeners.set;
                            if (wildcard) setter(key, "" + listenerId, function(value) {
                                return callback(event, value);
                            }); else setter(key, "" + listenerId, callback);
                        });
                        var resolve, reject;
                        var p = new Promise(function(res, rej) {
                            resolve = res;
                            reject = rej;
                        });
                        var templistenerId = listenerId;
                        if (promises.length) promises.reduce(function(prevPromise, currentPromise) {
                            return prevPromise.then(function() {
                                return currentPromise;
                            }).then(function(responses) {
                                resolve(templistenerId);
                            }).catch(function(error) {
                                if (event === "*") resolve(templistenerId); else {
                                    doClear(templistenerId, event, context);
                                    reject(error);
                                }
                            });
                        }, Promise.resolve()); else resolve(listenerId);
                        return p;
                    }
                };
                getListenArgs = function getListenArgs() {
                    for (var _len0 = arguments.length, args = new Array(_len0), _key0 = 0; _key0 < _len0; _key0++) {
                        args[_key0] = arguments[_key0];
                    }
                    var callback = args.pop();
                    var _getClearArgs = getClearArgs.apply(void 0, args), _getClearArgs2 = _slicedToArray(_getClearArgs, 3), module = _getClearArgs2[0], event = _getClearArgs2[1], context = _getClearArgs2[2];
                    return [ module, event, callback, context ];
                };
                getClearArgs = function getClearArgs() {
                    for (var _len1 = arguments.length, args = new Array(_len1), _key1 = 0; _key1 < _len1; _key1++) {
                        args[_key1] = arguments[_key1];
                    }
                    var module = (args.shift() || "*").toLowerCase();
                    var event = args.shift() || "*";
                    var context = {};
                    for (var i = 0; args.length; i++) context[validContext[module][event][i]] = args.shift();
                    return [ module, event, context ];
                };
                once$3 = function once$3() {
                    var _getListenArgs = getListenArgs.apply(void 0, arguments), _getListenArgs2 = _slicedToArray(_getListenArgs, 4), module = _getListenArgs2[0], event = _getListenArgs2[1], callback = _getListenArgs2[2], context = _getListenArgs2[3];
                    return doListen(module, event, callback, context, true);
                };
                listen$3 = function listen$3() {
                    var _getListenArgs3 = getListenArgs.apply(void 0, arguments), _getListenArgs4 = _slicedToArray(_getListenArgs3, 4), module = _getListenArgs4[0], event = _getListenArgs4[1], callback = _getListenArgs4[2], context = _getListenArgs4[3];
                    return doListen(module, event, callback, context, false);
                };
                clear$3 = function clear$3() {
                    for (var _len10 = arguments.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
                        args[_key10] = arguments[_key10];
                    }
                    if (args && args.length && typeof args[0] === "number") return doClear(args[0]); else if (args && args.length && typeof args[1] === "number") return doClear(args[1]); else {
                        var _getClearArgs3 = getClearArgs.apply(void 0, args), _getClearArgs4 = _slicedToArray(_getClearArgs3, 3), moduleOrId = _getClearArgs4[0], _event = _getClearArgs4[1], context = _getClearArgs4[2];
                        return doClear(moduleOrId, _event, context);
                    }
                };
                prioritize = function prioritize() {
                    var _getListenArgs5 = getListenArgs.apply(void 0, arguments), _getListenArgs6 = _slicedToArray(_getListenArgs5, 4), module = _getListenArgs6[0], event = _getListenArgs6[1], callback = _getListenArgs6[2], context = _getListenArgs6[3];
                    return doListen(module, event, callback, context, false, true);
                };
                unsubscribe = function unsubscribe(key, context) {
                    var _key$split$slice = key.split(".").slice(0, 2), _key$split$slice2 = _slicedToArray(_key$split$slice, 2), module = _key$split$slice2[0], event = _key$split$slice2[1];
                    var args = Object.assign({
                        listen: false
                    }, context);
                    Transport.send(module, "on" + event[0].toUpperCase() + event.substr(1), args);
                };
                doClear = function doClear() {
                    var moduleOrId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                    var event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                    var context = arguments.length > 2 ? arguments[2] : undefined;
                    if (event === "*") event = false;
                    if (typeof moduleOrId === "number") {
                        var searchId = moduleOrId.toString();
                        var key = listeners.find(searchId);
                        if (key) {
                            listeners.remove(searchId);
                            if (listeners.count(key) === 0) unsubscribe(key);
                            return true;
                        }
                        return false;
                    } else if (!moduleOrId && !event) listeners.keys().forEach(function(key) {
                        listeners.removeKey(key);
                        unsubscribe(key);
                    }); else if (!event) listeners.keys().forEach(function(key) {
                        if (key.indexOf(moduleOrId.toLowerCase()) === 0) {
                            listeners.removeKey(key);
                            unsubscribe(key);
                        }
                    }); else {
                        var hasContext = Object.values(context).length > 0;
                        var contextKey = Object.keys(context).sort().map(function(key) {
                            return key + "=" + JSON.stringify(context[key]);
                        }).join("&");
                        var _key11 = moduleOrId + "." + event + (hasContext ? ".".concat(contextKey) : "");
                        listeners.removeKey(_key11);
                        unsubscribe(_key11, context);
                    }
                };
                init = function init() {
                    if (!transportInitialized) {
                        Transport.addEventEmitter(emit);
                        setMockListener(listen$3);
                        transportInitialized = true;
                    }
                };
                Events_default = {
                    listen: listen$3,
                    once: once$3,
                    clear: clear$3,
                    broadcast: function broadcast(event, value) {
                        emit(Object.entries(keys).find(function(_ref6) {
                            var _ref7 = _slicedToArray(_ref6, 2), k = _ref7[0], v = _ref7[1];
                            return v === "app." + event;
                        })[0], value);
                    }
                };
                Prop_default = {
                    prop: prop
                };
                registerEvents("Accessibility", [ "audioDescriptionSettingsChanged", "closedCaptionsSettingsChanged", "highContrastUIChanged", "voiceGuidanceSettingsChanged" ]);
                Transport.registerDeprecatedMethod("Accessibility", "closedCaptions", "Use Accessibility.closedCaptionsSettings() instead.");
                Transport.registerDeprecatedMethod("Accessibility", "voiceGuidance", "Use Accessibility.voiceGuidanceSettings() instead.");
                Account_default = {
                    id: id$1,
                    uid: uid$1
                };
                registerEvents("Advertising", [ "policyChanged" ]);
                Transport.registerDeprecatedMethod("Authentication", "token", "Use Authentication module has individual methods for each token type. instead.");
                registerEvents("Capabilities", [ "available", "granted", "revoked", "unavailable" ]);
                registerEventContext("Capabilities", "available", [ "capability" ]);
                registerEventContext("Capabilities", "granted", [ "role", "capability" ]);
                registerEventContext("Capabilities", "revoked", [ "role", "capability" ]);
                registerEventContext("Capabilities", "unavailable", [ "capability" ]);
                registerEvents("HDMIInput", [ "autoLowLatencyModeCapableChanged", "autoLowLatencyModeSignalChanged", "connectionChanged", "edidVersionChanged", "lowLatencyModeChanged", "signalChanged" ]);
                registerEventContext("HDMIInput", "edidVersionChanged", [ "port" ]);
                registerEvents("Device", [ "audioChanged", "deviceNameChanged", "hdcpChanged", "hdrChanged", "nameChanged", "networkChanged", "screenResolutionChanged", "videoResolutionChanged" ]);
                Transport.registerDeprecatedMethod("Device", "screenResolution", "Use Use non-Firebolt APIs specific to your platform, e.g. W3C APIs instead.");
                Transport.registerDeprecatedMethod("Device", "onDeviceNameChanged", "Use Device.name() instead.");
                Transport.registerDeprecatedMethod("Device", "onScreenResolutionChanged", "Use screenResolution instead.");
                Device_default = {
                    Events: {
                        DEVICE_NAME_CHANGED: "deviceNameChanged",
                        NAME_CHANGED: "nameChanged",
                        HDCP_CHANGED: "hdcpChanged",
                        HDR_CHANGED: "hdrChanged",
                        AUDIO_CHANGED: "audioChanged",
                        SCREEN_RESOLUTION_CHANGED: "screenResolutionChanged",
                        VIDEO_RESOLUTION_CHANGED: "videoResolutionChanged",
                        NETWORK_CHANGED: "networkChanged"
                    },
                    NetworkState: {
                        CONNECTED: "connected",
                        DISCONNECTED: "disconnected"
                    },
                    NetworkType: {
                        WIFI: "wifi",
                        ETHERNET: "ethernet",
                        HYBRID: "hybrid"
                    },
                    version: version,
                    audio: audio,
                    clear: clear$2,
                    distributor: distributor,
                    hdcp: hdcp,
                    hdr: hdr,
                    id: id,
                    listen: listen$2,
                    make: make,
                    model: model,
                    name: name,
                    network: network,
                    once: once$2,
                    platform: platform,
                    screenResolution: screenResolution,
                    sku: sku,
                    type: type,
                    uid: uid,
                    videoResolution: videoResolution
                };
                providerInterfaces = {};
                registerProviderInterface = function registerProviderInterface(capability, module, methods) {
                    if (providerInterfaces[capability]) throw "Capability ".concat(capability, " has multiple provider interfaces registered.");
                    methods.forEach(function(m) {
                        return m.name = "".concat(module, ".").concat(m.name);
                    });
                    providerInterfaces[capability] = methods.concat();
                };
                registerEvents("Discovery", [ "navigateTo", "policyChanged" ]);
                registerProviderInterface("xrn:firebolt:capability:discovery:interest", "Discovery", [ {
                    name: "userInterest",
                    focus: false,
                    response: true,
                    parameters: true
                } ]);
                Transport.registerDeprecatedMethod("Discovery", "entityInfo", "Use null instead.");
                Transport.registerDeprecatedMethod("Discovery", "purchasedContent", "Use null instead.");
                Transport.registerDeprecatedMethod("Discovery", "entitlements", "Use Discovery.contentAccess() instead.");
                Transport.registerDeprecatedMethod("Discovery", "onPullEntityInfo", "Use null instead.");
                Transport.registerDeprecatedMethod("Discovery", "onPullPurchasedContent", "Use null instead.");
                registerEvents("Lifecycle", [ "background", "foreground", "inactive", "suspended", "unloading" ]);
                store = {
                    _current: "initializing",
                    get current() {
                        return this._current;
                    }
                };
                Lifecycle_default = {
                    Events: {
                        INACTIVE: "inactive",
                        FOREGROUND: "foreground",
                        BACKGROUND: "background",
                        SUSPENDED: "suspended",
                        UNLOADING: "unloading"
                    },
                    CloseReason: {
                        REMOTE_BUTTON: "remoteButton",
                        USER_EXIT: "userExit",
                        DONE: "done",
                        ERROR: "error"
                    },
                    LifecycleState: {
                        INITIALIZING: "initializing",
                        INACTIVE: "inactive",
                        FOREGROUND: "foreground",
                        BACKGROUND: "background",
                        UNLOADING: "unloading",
                        SUSPENDED: "suspended"
                    },
                    ready: ready,
                    state: state,
                    finished: finished,
                    clear: clear$1,
                    close: close,
                    listen: listen$1,
                    once: once$1
                };
                registerEvents("Localization", [ "countryCodeChanged", "languageChanged", "localeChanged", "localityChanged", "postalCodeChanged", "preferredAudioLanguagesChanged" ]);
                Transport.registerDeprecatedMethod("Localization", "language", "Use Localization.locale instead.");
                Transport.registerDeprecatedMethod("Localization", "onLanguageChanged", "Use language instead.");
                Localization_default = {
                    Events: {
                        LOCALITY_CHANGED: "localityChanged",
                        POSTAL_CODE_CHANGED: "postalCodeChanged",
                        COUNTRY_CODE_CHANGED: "countryCodeChanged",
                        LANGUAGE_CHANGED: "languageChanged",
                        PREFERRED_AUDIO_LANGUAGES_CHANGED: "preferredAudioLanguagesChanged",
                        LOCALE_CHANGED: "localeChanged"
                    },
                    additionalInfo: additionalInfo,
                    clear: clear,
                    countryCode: countryCode,
                    language: language,
                    latlon: latlon,
                    listen: listen,
                    locale: locale,
                    locality: locality,
                    once: once,
                    postalCode: postalCode,
                    preferredAudioLanguages: preferredAudioLanguages
                };
                registerEvents("SecondScreen", [ "closeRequest", "friendlyNameChanged", "launchRequest" ]);
                setMockResponses({
                    Accessibility: defaults_default$16,
                    Account: defaults_default$15,
                    Advertising: defaults_default$14,
                    Authentication: defaults_default$13,
                    Capabilities: defaults_default$12,
                    HDMIInput: defaults_default$11,
                    Device: defaults_default$10,
                    Discovery: defaults_default$9,
                    Keyboard: defaults_default$8,
                    Lifecycle: defaults_default$7,
                    Localization: defaults_default$6,
                    Metrics: defaults_default$5,
                    Parameters: defaults_default$4,
                    Profile: defaults_default$3,
                    SecondScreen: defaults_default$2,
                    SecureStorage: defaults_default$1,
                    Platform: defaults_default
                });
            }
        };
    });
})();