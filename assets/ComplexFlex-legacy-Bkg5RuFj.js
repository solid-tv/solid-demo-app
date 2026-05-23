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
    System.register([ "./index-legacy-DHEHsYtq.js" ], function(exports, module) {
        "use strict";
        var onMount, createComponent, Column, createElement, insertNode, createTextNode, setProp, Row, For, createSignal, insert, effect;
        return {
            setters: [ function(module) {
                onMount = module.o;
                createComponent = module.l;
                Column = module.C;
                createElement = module.c;
                insertNode = module.n;
                createTextNode = module.p;
                setProp = module.a;
                Row = module.R;
                For = module.F;
                createSignal = module.b;
                insert = module.k;
                effect = module.m;
            } ],
            execute: function execute() {
                exports("default", ComplexFlex);
                var Card = function Card(props) {
                    var _createSignal = createSignal(false), _createSignal2 = _slicedToArray(_createSignal, 2), focused = _createSignal2[0], setFocused = _createSignal2[1];
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
                        setProp(_el$, "padding", 10);
                        setProp(_el$, "onFocusChanged", setFocused);
                        insertNode(_el$2, _el$3);
                        setProp(_el$2, "fontSize", 20);
                        setProp(_el$2, "color", 4294967295);
                        insert(_el$2, function() {
                            return String(props.index);
                        }, null);
                        insertNode(_el$4, _el$5);
                        setProp(_el$4, "color", 65535);
                        setProp(_el$4, "padding", 8);
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
                function ComplexFlex() {
                    performance.mark("complexflex-start");
                    onMount(function() {
                        performance.mark("complexflex-end");
                        performance.measure("ComplexFlex Render", "complexflex-start", "complexflex-end");
                        var measure = performance.getEntriesByName("ComplexFlex Render").slice(-1)[0];
                        console.log("ComplexFlex Render duration: ".concat(measure === null || measure === void 0 ? void 0 : measure.duration, "ms"));
                    });
                    var items = Array.from({
                        length: 8
                    }).map(function(_, i) {
                        return i;
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
                            }(), createComponent(Row, {
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
                            }), createComponent(Row, {
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
                            }), createComponent(Row, {
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
                            }), createComponent(Row, {
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
                            }), createComponent(Row, {
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
                            }), createComponent(Row, {
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
                            }), createComponent(Row, {
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
                            }) ];
                        }
                    });
                }
            }
        };
    });
})();
