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
    System.register([ "./render-legacy-Dr9NQFGF.js", "./Column-legacy-CtHoPFiF.js", "./Row-legacy-Cs4nGx1v.js" ], function(_export, _context) {
        "use strict";
        var onMount, For, createElement, effect, createComponent, insert, setProp, createSignal, createTextNode, insertNode, Column, Row, Card;
        function ComplexFlex() {
            performance.mark("complexflex-start");
            var items = Array.from({
                length: 8
            }).map(function(_, i) {
                return i;
            });
            var initialRows = Array.from({
                length: 8
            }).map(function(_, i) {
                return i;
            });
            var _createSignal = createSignal(initialRows), _createSignal2 = _slicedToArray(_createSignal, 2), rows = _createSignal2[0], setRows = _createSignal2[1];
            onMount(function() {
                performance.mark("complexflex-end");
                performance.measure("ComplexFlex Render", "complexflex-start", "complexflex-end");
                var measure = performance.getEntriesByName("ComplexFlex Render").slice(-1)[0];
                console.log("ComplexFlex Render duration: ".concat(measure == null ? void 0 : measure.duration, "ms"));
                var sleep = function sleep(ms) {
                    return new Promise(function(resolve) {
                        return setTimeout(resolve, ms);
                    });
                };
                var runRecreations = function() {
                    var _ref = _asyncToGenerator(_regenerator().m(function _callee() {
                        var i;
                        return _regenerator().w(function(_context2) {
                            while (1) switch (_context2.n) {
                              case 0:
                                _context2.n = 1;
                                return sleep(100);

                              case 1:
                                i = 0;

                              case 2:
                                if (!(i < 3)) {
                                    _context2.n = 5;
                                    break;
                                }
                                console.log("Resetting rows to [] (Recreation step ".concat(i + 1, ")"));
                                setRows([]);
                                _context2.n = 3;
                                return sleep(100);

                              case 3:
                                console.log("Recreating rows to full (Recreation step ".concat(i + 1, ")"));
                                setRows(initialRows);
                                _context2.n = 4;
                                return sleep(100);

                              case 4:
                                i++;
                                _context2.n = 2;
                                break;

                              case 5:
                                return _context2.a(2);
                            }
                        }, _callee);
                    }));
                    return function runRecreations() {
                        return _ref.apply(this, arguments);
                    };
                }();
                runRecreations();
            });
            return createComponent(Column, {
                width: 1720,
                color: 255,
                display: "flex",
                flexDirection: "column",
                height: 100,
                gap: 20,
                y: 50,
                x: 170,
                autofocus: true,
                scroll: "none",
                selected: 1,
                get children() {
                    return [ function() {
                        var _el$7 = createElement("text");
                        insertNode(_el$7, createTextNode("Complex Flex Layout"));
                        setProp(_el$7, "skipFocus", true);
                        setProp(_el$7, "fontSize", 40);
                        setProp(_el$7, "color", 4294967295);
                        setProp(_el$7, "marginBottom", 20);
                        return _el$7;
                    }(), createComponent(For, {
                        get each() {
                            return rows();
                        },
                        children: function children() {
                            return createComponent(Row, {
                                width: 1400,
                                gap: 20,
                                scroll: "none",
                                get children() {
                                    return createComponent(For, {
                                        each: items,
                                        children: function children(item) {
                                            return createComponent(Card, {
                                                index: item
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    }) ];
                }
            });
        }
        _export("default", ComplexFlex);
        return {
            setters: [ function(_renderLegacy001Js) {
                onMount = _renderLegacy001Js.$;
                For = _renderLegacy001Js.A;
                createElement = _renderLegacy001Js.a;
                effect = _renderLegacy001Js.c;
                createComponent = _renderLegacy001Js.i;
                insert = _renderLegacy001Js.l;
                setProp = _renderLegacy001Js.m;
                createSignal = _renderLegacy001Js.q;
                createTextNode = _renderLegacy001Js.s;
                insertNode = _renderLegacy001Js.u;
            }, function(_ColumnLegacy008Js) {
                Column = _ColumnLegacy008Js.t;
            }, function(_RowLegacy009Js) {
                Row = _RowLegacy009Js.t;
            } ],
            execute: function execute() {
                Card = function Card(props) {
                    var _createSignal3 = createSignal(false), _createSignal4 = _slicedToArray(_createSignal3, 2), focused = _createSignal4[0], setFocused = _createSignal4[1];
                    return function() {
                        var _el$ = createElement("view"), _el$2 = createElement("text"), _el$3 = createTextNode("Item "), _el$4 = createElement("view"), _el$5 = createElement("text");
                        insertNode(_el$, _el$2);
                        insertNode(_el$, _el$4);
                        setProp(_el$, "width", 180);
                        setProp(_el$, "height", 100);
                        setProp(_el$, "display", "flex");
                        setProp(_el$, "flexDirection", "column");
                        setProp(_el$, "alignItems", "center");
                        setProp(_el$, "gap", 10);
                        setProp(_el$, "padding", [ 0, 10 ]);
                        setProp(_el$, "onFocusChanged", setFocused);
                        insertNode(_el$2, _el$3);
                        setProp(_el$2, "fontSize", 20);
                        setProp(_el$2, "color", 4294967295);
                        insert(_el$2, function() {
                            return String(props.index);
                        }, null);
                        insertNode(_el$4, _el$5);
                        setProp(_el$4, "color", 65535);
                        setProp(_el$4, "padding", [ 0, 8 ]);
                        setProp(_el$4, "borderRadius", 4);
                        setProp(_el$4, "height", 40);
                        setProp(_el$4, "display", "flex");
                        setProp(_el$4, "alignItems", "center");
                        insertNode(_el$5, createTextNode("Button"));
                        setProp(_el$5, "fontSize", 16);
                        setProp(_el$5, "color", 4294967295);
                        effect(function(_$p) {
                            return setProp(_el$, "color", focused() ? 858993561 : 858993663, _$p);
                        });
                        return _el$;
                    }();
                };
            }
        };
    });
})();