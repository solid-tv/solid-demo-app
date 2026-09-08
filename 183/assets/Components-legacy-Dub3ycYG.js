!function() {
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
    System.register([ "./render-legacy-dLzA91Db.js", "./mergeProps-legacy-wREr8h3i.js", "./components-legacy-DpfK7YJT.js", "./state-legacy-C4TEpoVI.js" ], function(_export, _context) {
        var For, createRoot, createMemo, children, onCleanup, ElementNode, createElement, spread, createComponent, untrack, insert, setProp, createSignal, createTextNode, Dynamic, insertNode, mergeProps, Button, setGlobalBackground;
        function Visible(props) {
            var child, disposer, keyed = props.keyed, condition = createMemo(function() {
                return props.when;
            }, void 0, {
                equals: function(a, b) {
                    return keyed ? a === b : !a == !b;
                }
            });
            return onCleanup(function() {
                return null == disposer ? void 0 : disposer();
            }), createMemo(function() {
                var c = condition();
                untrack(function() {
                    return !!keyed;
                }) && (null == disposer || disposer(), child = void 0), c && !child && (disposer = createRoot(function(dispose) {
                    return child = children(function() {
                        return props.children;
                    }), dispose;
                }));
                var isHidden = !c;
                return null == child || child.toArray().forEach(function(childNode) {
                    childNode instanceof ElementNode && (childNode.hidden = isHidden);
                }), c || child ? child : null;
            });
        }
        function Square(props) {
            return _el$ = createElement("view"), spread(_el$, mergeProps(props, {
                get width() {
                    return props.size || 80;
                },
                get height() {
                    return props.size || 80;
                },
                get color() {
                    return props.color || 3772834047;
                }
            }), !1), _el$;
            var _el$;
        }
        function Card(props) {
            return _el$2 = createElement("view"), spread(_el$2, mergeProps(props, {
                get width() {
                    return "large" === props.size ? 400 : 200;
                },
                get height() {
                    return "large" === props.size ? 500 : 300;
                },
                transition: !0,
                color: 143766271
            }), !0), insert(_el$2, createComponent(Square, {
                x: 80,
                y: 80
            }), null), insert(_el$2, createComponent(Square, {
                x: 20,
                y: 20,
                size: 40
            }), null), _el$2;
            var _el$2;
        }
        return {
            setters: [ function(_renderLegacy002Js) {
                For = _renderLegacy002Js.A, createRoot = _renderLegacy002Js.G, createMemo = _renderLegacy002Js.H, 
                children = _renderLegacy002Js.L, onCleanup = _renderLegacy002Js.Q, ElementNode = _renderLegacy002Js._, 
                createElement = _renderLegacy002Js.a, spread = _renderLegacy002Js.h, createComponent = _renderLegacy002Js.i, 
                untrack = _renderLegacy002Js.it, insert = _renderLegacy002Js.l, setProp = _renderLegacy002Js.m, 
                createSignal = _renderLegacy002Js.q, createTextNode = _renderLegacy002Js.s, Dynamic = _renderLegacy002Js.t, 
                insertNode = _renderLegacy002Js.u;
            }, function(_mergePropsLegacy005Js) {
                mergeProps = _mergePropsLegacy005Js.t;
            }, function(_componentsLegacy00eJs) {
                Button = _componentsLegacy00eJs.r;
            }, function(_stateLegacy00jJs) {
                setGlobalBackground = _stateLegacy00jJs.n;
            } ],
            execute: function() {
                _export("default", function() {
                    setGlobalBackground(506018815);
                    var _el$3, _el$4, _el$5, _createSignal2 = _slicedToArray(createSignal(100), 2), x = _createSignal2[0], setX = _createSignal2[1], _createSignal4 = _slicedToArray(createSignal(!0), 2), size = _createSignal4[0], setSize = _createSignal4[1], dynamicComponents = _slicedToArray(createSignal([ Square, Card, Square ]), 1)[0], interval = setInterval(function() {
                        setX(function(x) {
                            return 100 === x ? 250 : 100;
                        }), setSize(function(size) {
                            return !size;
                        });
                    }, 2e3);
                    return onCleanup(function() {
                        return clearInterval(interval);
                    }), _el$3 = createElement("view"), _el$4 = createElement("view"), _el$5 = createElement("text"), 
                    insertNode(_el$3, _el$4), setProp(_el$3, "x", 150), setProp(_el$3, "autofocus", !0), 
                    insert(_el$3, createComponent(Visible, {
                        get when() {
                            return size();
                        },
                        get children() {
                            return [ createComponent(Square, {
                                onDestroy: function() {
                                    return console.log("destroyed");
                                },
                                x: 100,
                                y: 100,
                                size: 50,
                                color: 4014228735
                            }), createComponent(Square, {
                                x: 100,
                                y: 200,
                                size: 100,
                                color: 583360255
                            }), createComponent(Square, {
                                x: 100,
                                y: 350,
                                size: 200,
                                color: 998438655
                            }) ];
                        }
                    }), _el$4), insert(_el$3, createComponent(Square, {
                        get x() {
                            return x();
                        },
                        y: 600,
                        size: 50,
                        transition: {
                            x: {
                                duration: 1e3,
                                easing: "linear"
                            }
                        }
                    }), _el$4), insert(_el$3, createComponent(Card, {
                        x: 500,
                        y: 100,
                        get size() {
                            return size() ? "large" : "small";
                        }
                    }), _el$4), insert(_el$3, createComponent(Card, {
                        x: 500,
                        y: 500,
                        get size() {
                            return size() ? "small" : "large";
                        }
                    }), _el$4), insertNode(_el$4, _el$5), setProp(_el$4, "x", 1e3), setProp(_el$4, "y", 100), 
                    insertNode(_el$5, createTextNode("Dynamic Components")), insert(_el$4, createComponent(Dynamic, {
                        component: Button,
                        y: 50,
                        width: 300,
                        children: "Button"
                    }), null), insert(_el$4, createComponent(For, {
                        get each() {
                            return dynamicComponents();
                        },
                        children: function(Component, index) {
                            return createComponent(Dynamic, {
                                component: Component,
                                get x() {
                                    return 205 * index();
                                },
                                y: 300,
                                size: 50
                            });
                        }
                    }), null), _el$3;
                });
            }
        };
    });
}();