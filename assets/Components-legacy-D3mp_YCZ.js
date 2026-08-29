(function() {
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
    System.register([ "./render-legacy-C75jKPoW.js", "./mergeProps-legacy-CDlswesM.js", "./components-legacy-5cOYbkqA.js", "./state-legacy-DghrRWJ1.js" ], function(_export, _context) {
        "use strict";
        var For, createRoot, createMemo, children, onCleanup, ElementNode, createElement, spread, createComponent, untrack, insert, setProp, createSignal, createTextNode, Dynamic, insertNode, mergeProps, Button, setGlobalBackground, PositioningPage;
        function Visible(props) {
            var child;
            var disposer;
            var keyed = props.keyed;
            var condition = createMemo(function() {
                return props.when;
            }, void 0, void 0 ? {
                equals: function equals(a, b) {
                    return keyed ? a === b : !a === !b;
                },
                name: "condition"
            } : {
                equals: function equals(a, b) {
                    return keyed ? a === b : !a === !b;
                }
            });
            onCleanup(function() {
                return disposer == null ? void 0 : disposer();
            });
            return createMemo(function() {
                var c = condition();
                if (untrack(function() {
                    return !!keyed;
                })) {
                    disposer == null || disposer();
                    child = void 0;
                }
                if (c && !child) disposer = createRoot(function(dispose) {
                    child = children(function() {
                        return props.children;
                    });
                    return dispose;
                });
                var isHidden = !c;
                child == null || child.toArray().forEach(function(childNode) {
                    if (childNode instanceof ElementNode) childNode.hidden = isHidden;
                });
                return c || child ? child : null;
            });
        }
        function Square(props) {
            return function() {
                var _el$ = createElement("view");
                spread(_el$, mergeProps(props, {
                    get width() {
                        return props.size || 80;
                    },
                    get height() {
                        return props.size || 80;
                    },
                    get color() {
                        return props.color || 3772834047;
                    }
                }), false);
                return _el$;
            }();
        }
        function Card(props) {
            return function() {
                var _el$2 = createElement("view");
                spread(_el$2, mergeProps(props, {
                    get width() {
                        return props.size === "large" ? 400 : 200;
                    },
                    get height() {
                        return props.size === "large" ? 500 : 300;
                    },
                    transition: true,
                    color: 143766271
                }), true);
                insert(_el$2, createComponent(Square, {
                    x: 80,
                    y: 80
                }), null);
                insert(_el$2, createComponent(Square, {
                    x: 20,
                    y: 20,
                    size: 40
                }), null);
                return _el$2;
            }();
        }
        return {
            setters: [ function(_renderLegacy001Js) {
                For = _renderLegacy001Js.A;
                createRoot = _renderLegacy001Js.G;
                createMemo = _renderLegacy001Js.H;
                children = _renderLegacy001Js.L;
                onCleanup = _renderLegacy001Js.Q;
                ElementNode = _renderLegacy001Js._;
                createElement = _renderLegacy001Js.a;
                spread = _renderLegacy001Js.h;
                createComponent = _renderLegacy001Js.i;
                untrack = _renderLegacy001Js.it;
                insert = _renderLegacy001Js.l;
                setProp = _renderLegacy001Js.m;
                createSignal = _renderLegacy001Js.q;
                createTextNode = _renderLegacy001Js.s;
                Dynamic = _renderLegacy001Js.t;
                insertNode = _renderLegacy001Js.u;
            }, function(_mergePropsLegacy003Js) {
                mergeProps = _mergePropsLegacy003Js.t;
            }, function(_componentsLegacy00dJs) {
                Button = _componentsLegacy00dJs.r;
            }, function(_stateLegacy00iJs) {
                setGlobalBackground = _stateLegacy00iJs.n;
            } ],
            execute: function execute() {
                _export("default", PositioningPage = function PositioningPage() {
                    setGlobalBackground(506018815);
                    var _createSignal = createSignal(100), _createSignal2 = _slicedToArray(_createSignal, 2), x = _createSignal2[0], setX = _createSignal2[1];
                    var _createSignal3 = createSignal(true), _createSignal4 = _slicedToArray(_createSignal3, 2), size = _createSignal4[0], setSize = _createSignal4[1];
                    var _createSignal5 = createSignal([ Square, Card, Square ]), _createSignal6 = _slicedToArray(_createSignal5, 1), dynamicComponents = _createSignal6[0];
                    var interval = setInterval(function() {
                        setX(function(x) {
                            return x === 100 ? 250 : 100;
                        });
                        setSize(function(size) {
                            return !size;
                        });
                    }, 2e3);
                    onCleanup(function() {
                        return clearInterval(interval);
                    });
                    return function() {
                        var _el$3 = createElement("view"), _el$4 = createElement("view"), _el$5 = createElement("text");
                        insertNode(_el$3, _el$4);
                        setProp(_el$3, "x", 150);
                        setProp(_el$3, "autofocus", true);
                        insert(_el$3, createComponent(Visible, {
                            get when() {
                                return size();
                            },
                            get children() {
                                return [ createComponent(Square, {
                                    onDestroy: function onDestroy() {
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
                        }), _el$4);
                        insert(_el$3, createComponent(Square, {
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
                        }), _el$4);
                        insert(_el$3, createComponent(Card, {
                            x: 500,
                            y: 100,
                            get size() {
                                return size() ? "large" : "small";
                            }
                        }), _el$4);
                        insert(_el$3, createComponent(Card, {
                            x: 500,
                            y: 500,
                            get size() {
                                return size() ? "small" : "large";
                            }
                        }), _el$4);
                        insertNode(_el$4, _el$5);
                        setProp(_el$4, "x", 1e3);
                        setProp(_el$4, "y", 100);
                        insertNode(_el$5, createTextNode("Dynamic Components"));
                        insert(_el$4, createComponent(Dynamic, {
                            component: Button,
                            y: 50,
                            width: 300,
                            children: "Button"
                        }), null);
                        insert(_el$4, createComponent(For, {
                            get each() {
                                return dynamicComponents();
                            },
                            children: function children(Component, index) {
                                return createComponent(Dynamic, {
                                    component: Component,
                                    get x() {
                                        return 205 * index();
                                    },
                                    y: 300,
                                    size: 50
                                });
                            }
                        }), null);
                        return _el$3;
                    }();
                });
            }
        };
    });
})();