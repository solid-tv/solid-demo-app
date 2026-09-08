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
        }(r, e) || function(r, a) {
            if (r) {
                if ("string" == typeof r) return _arrayLikeToArray(r, a);
                var t = {}.toString.call(r).slice(8, -1);
                return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
            }
        }(r, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
    }
    function _arrayLikeToArray(r, a) {
        (null == a || a > r.length) && (a = r.length);
        for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
        return n;
    }
    System.register([ "./render-legacy-BWVYYcsn.js", "./Column-legacy-CpMvWA94.js", "./Row-legacy-BhL2xbQP.js" ], function(_export, _context) {
        var onMount, For, createElement, effect, createComponent, insert, setProp, createSignal, createTextNode, insertNode, Column, Row, Card;
        return _export("default", function() {
            performance.mark("complexflex-start");
            var items = Array.from({
                length: 8
            }).map(function(_, i) {
                return i;
            }), initialRows = Array.from({
                length: 8
            }).map(function(_, i) {
                return i;
            }), _createSignal2 = _slicedToArray(createSignal(initialRows), 2), rows = _createSignal2[0], setRows = _createSignal2[1];
            return onMount(function() {
                performance.mark("complexflex-end"), performance.measure("ComplexFlex Render", "complexflex-start", "complexflex-end");
                var measure = performance.getEntriesByName("ComplexFlex Render").slice(-1)[0];
                console.log("ComplexFlex Render duration: ".concat(null == measure ? void 0 : measure.duration, "ms"));
                var sleep = function(ms) {
                    return new Promise(function(resolve) {
                        return setTimeout(resolve, ms);
                    });
                }, runRecreations = function() {
                    var n, _ref = (n = _regenerator().m(function _callee() {
                        var i;
                        return _regenerator().w(function(_context2) {
                            for (;;) switch (_context2.n) {
                              case 0:
                                return _context2.n = 1, sleep(100);

                              case 1:
                                i = 0;

                              case 2:
                                if (!(i < 3)) {
                                    _context2.n = 5;
                                    break;
                                }
                                return console.log("Resetting rows to [] (Recreation step ".concat(i + 1, ")")), 
                                setRows([]), _context2.n = 3, sleep(100);

                              case 3:
                                return console.log("Recreating rows to full (Recreation step ".concat(i + 1, ")")), 
                                setRows(initialRows), _context2.n = 4, sleep(100);

                              case 4:
                                i++, _context2.n = 2;
                                break;

                              case 5:
                                return _context2.a(2);
                            }
                        }, _callee);
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
                    });
                    return function() {
                        return _ref.apply(this, arguments);
                    };
                }();
                runRecreations();
            }), createComponent(Column, {
                width: 1720,
                color: 255,
                display: "flex",
                flexDirection: "column",
                height: 100,
                gap: 20,
                y: 50,
                x: 170,
                autofocus: !0,
                scroll: "none",
                selected: 1,
                get children() {
                    return [ (_el$7 = createElement("text"), insertNode(_el$7, createTextNode("Complex Flex Layout")), 
                    setProp(_el$7, "skipFocus", !0), setProp(_el$7, "fontSize", 40), setProp(_el$7, "color", 4294967295), 
                    setProp(_el$7, "marginBottom", 20), _el$7), createComponent(For, {
                        get each() {
                            return rows();
                        },
                        children: function() {
                            return createComponent(Row, {
                                width: 1400,
                                gap: 20,
                                scroll: "none",
                                get children() {
                                    return createComponent(For, {
                                        each: items,
                                        children: function(item) {
                                            return createComponent(Card, {
                                                index: item
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    }) ];
                    var _el$7;
                }
            });
        }), {
            setters: [ function(_renderLegacy002Js) {
                onMount = _renderLegacy002Js.$, For = _renderLegacy002Js.A, createElement = _renderLegacy002Js.a, 
                effect = _renderLegacy002Js.c, createComponent = _renderLegacy002Js.i, insert = _renderLegacy002Js.l, 
                setProp = _renderLegacy002Js.m, createSignal = _renderLegacy002Js.q, createTextNode = _renderLegacy002Js.s, 
                insertNode = _renderLegacy002Js.u;
            }, function(_ColumnLegacy00aJs) {
                Column = _ColumnLegacy00aJs.t;
            }, function(_RowLegacy00bJs) {
                Row = _RowLegacy00bJs.t;
            } ],
            execute: function() {
                Card = function(props) {
                    var _el$, _el$2, _el$3, _el$4, _el$5, _createSignal4 = _slicedToArray(createSignal(!1), 2), focused = _createSignal4[0], setFocused = _createSignal4[1];
                    return _el$ = createElement("view"), _el$2 = createElement("text"), _el$3 = createTextNode("Item "), 
                    _el$4 = createElement("view"), _el$5 = createElement("text"), insertNode(_el$, _el$2), 
                    insertNode(_el$, _el$4), setProp(_el$, "width", 180), setProp(_el$, "height", 100), 
                    setProp(_el$, "display", "flex"), setProp(_el$, "flexDirection", "column"), setProp(_el$, "alignItems", "center"), 
                    setProp(_el$, "gap", 10), setProp(_el$, "padding", [ 0, 10 ]), setProp(_el$, "onFocusChanged", setFocused), 
                    insertNode(_el$2, _el$3), setProp(_el$2, "fontSize", 20), setProp(_el$2, "color", 4294967295), 
                    insert(_el$2, function() {
                        return String(props.index);
                    }, null), insertNode(_el$4, _el$5), setProp(_el$4, "color", 65535), setProp(_el$4, "padding", [ 0, 8 ]), 
                    setProp(_el$4, "borderRadius", 4), setProp(_el$4, "height", 40), setProp(_el$4, "display", "flex"), 
                    setProp(_el$4, "alignItems", "center"), insertNode(_el$5, createTextNode("Button")), 
                    setProp(_el$5, "fontSize", 16), setProp(_el$5, "color", 4294967295), effect(function(_$p) {
                        return setProp(_el$, "color", focused() ? 858993561 : 858993663, _$p);
                    }), _el$;
                };
            }
        };
    });
}();