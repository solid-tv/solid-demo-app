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
    System.register([ "./render-legacy-Dr9NQFGF.js", "./Column-legacy-CtHoPFiF.js", "./Row-legacy-Cs4nGx1v.js", "./Icon-legacy-DZK6JvTw.js", "./theme-legacy-CRa-Zkyx.js", "./state-legacy-BdilQcsU.js" ], function(_export, _context) {
        "use strict";
        var onMount, createElement, effect, createComponent, insert, setProp, createSignal, createTextNode, insertNode, Column, Row, Icon, theme_default, setGlobalBackground, buttonsData, CustomButtonsPage;
        function CustomIconButton(props) {
            var _createSignal = createSignal(false), _createSignal2 = _slicedToArray(_createSignal, 2), focused = _createSignal2[0], setFocused = _createSignal2[1];
            return function() {
                var _el$ = createElement("view"), _el$2 = createElement("text");
                insertNode(_el$, _el$2);
                setProp(_el$, "onFocusChanged", setFocused);
                setProp(_el$, "width", 260);
                setProp(_el$, "height", 90);
                setProp(_el$, "borderRadius", 16);
                setProp(_el$, "display", "flex");
                setProp(_el$, "flexDirection", "row");
                setProp(_el$, "alignItems", "center");
                setProp(_el$, "padding", [ 0, 20 ]);
                setProp(_el$, "gap", 16);
                setProp(_el$, "transition", {
                    color: {
                        duration: 200,
                        easing: "ease-out"
                    },
                    scale: {
                        duration: 200,
                        easing: "ease-out"
                    },
                    border: {
                        duration: 200,
                        easing: "ease-out"
                    },
                    shadow: {
                        duration: 200,
                        easing: "ease-out"
                    }
                });
                insert(_el$, createComponent(Icon, {
                    get name() {
                        return props.icon;
                    },
                    scale: .45,
                    get color() {
                        return focused() ? 4294967295 : 4294967219;
                    }
                }), _el$2);
                setProp(_el$2, "fontSize", 20);
                setProp(_el$2, "fontWeight", "bold");
                setProp(_el$2, "contain", "width");
                setProp(_el$2, "width", 160);
                setProp(_el$2, "transition", {
                    color: {
                        duration: 200,
                        easing: "ease-out"
                    }
                });
                insert(_el$2, function() {
                    return props.title;
                });
                effect(function(_p$) {
                    var _v$ = props.autofocus, _v$2 = [ props.title, "button" ], _v$3 = focused() ? props.focusColor : props.baseColor, _v$4 = {
                        width: 2,
                        color: focused() ? 4294967295 : 4294967066
                    }, _v$5 = {
                        color: focused() ? "".concat(props.focusColor, "80") : 51,
                        projection: focused() ? [ 0, 12, 24, -6 ] : [ 0, 6, 12, -3 ]
                    }, _v$6 = focused() ? 1.08 : 1, _v$7 = focused() ? 4294967295 : 4294967244;
                    _v$ !== _p$.e && (_p$.e = setProp(_el$, "autofocus", _v$, _p$.e));
                    _v$2 !== _p$.t && (_p$.t = setProp(_el$, "announce", _v$2, _p$.t));
                    _v$3 !== _p$.a && (_p$.a = setProp(_el$, "color", _v$3, _p$.a));
                    _v$4 !== _p$.o && (_p$.o = setProp(_el$, "border", _v$4, _p$.o));
                    _v$5 !== _p$.i && (_p$.i = setProp(_el$, "shadow", _v$5, _p$.i));
                    _v$6 !== _p$.n && (_p$.n = setProp(_el$, "scale", _v$6, _p$.n));
                    _v$7 !== _p$.s && (_p$.s = setProp(_el$2, "color", _v$7, _p$.s));
                    return _p$;
                }, {
                    e: void 0,
                    t: void 0,
                    a: void 0,
                    o: void 0,
                    i: void 0,
                    n: void 0,
                    s: void 0
                });
                return _el$;
            }();
        }
        return {
            setters: [ function(_renderLegacy001Js) {
                onMount = _renderLegacy001Js.$;
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
            }, function(_IconLegacy00eJs) {
                Icon = _IconLegacy00eJs.t;
            }, function(_themeLegacy00gJs) {
                theme_default = _themeLegacy00gJs.t;
            }, function(_stateLegacy00iJs) {
                setGlobalBackground = _stateLegacy00iJs.n;
            } ],
            execute: function execute() {
                buttonsData = [ {
                    title: "Lab Experiments",
                    icon: "experiment",
                    baseColor: 505032447,
                    focusColor: 2338125567
                }, {
                    title: "Trending Now",
                    icon: "trending",
                    baseColor: 220213503,
                    focusColor: 112645375
                }, {
                    title: "Live TV Shows",
                    icon: "tv",
                    baseColor: 254288127,
                    focusColor: 280592895
                }, {
                    title: "Featured Movie",
                    icon: "movie",
                    baseColor: 740038399,
                    focusColor: 4185069311
                }, {
                    title: "System Perf",
                    icon: "perf",
                    baseColor: 705896703,
                    focusColor: 3964180991
                } ];
                _export("default", CustomButtonsPage = function CustomButtonsPage() {
                    onMount(function() {
                        setGlobalBackground(theme_default.backgroundDark);
                    });
                    function onFocus() {
                        this.children[this.selected || 0].setFocus();
                    }
                    return createComponent(Column, {
                        x: 170,
                        y: 150,
                        gap: 30,
                        height: 800,
                        width: 1680,
                        autofocus: true,
                        scroll: "none",
                        get children() {
                            return [ function() {
                                var _el$3 = createElement("view"), _el$4 = createElement("text"), _el$6 = createElement("text");
                                insertNode(_el$3, _el$4);
                                insertNode(_el$3, _el$6);
                                setProp(_el$3, "display", "flex");
                                setProp(_el$3, "flexDirection", "column");
                                setProp(_el$3, "gap", 10);
                                setProp(_el$3, "skipFocus", true);
                                insertNode(_el$4, createTextNode("Custom Interactive Buttons"));
                                setProp(_el$4, "fontSize", 48);
                                setProp(_el$4, "fontWeight", "bold");
                                insertNode(_el$6, createTextNode("A premium grid of custom styled buttons featuring distinct icons, rich brand colors, smooth focus states, and micro-animations."));
                                setProp(_el$6, "fontSize", 22);
                                setProp(_el$6, "width", 1200);
                                setProp(_el$6, "contain", "width");
                                effect(function(_p$) {
                                    var _v$8 = theme_default.textPrimary, _v$9 = theme_default.textSecondary;
                                    _v$8 !== _p$.e && (_p$.e = setProp(_el$4, "color", _v$8, _p$.e));
                                    _v$9 !== _p$.t && (_p$.t = setProp(_el$6, "color", _v$9, _p$.t));
                                    return _p$;
                                }, {
                                    e: void 0,
                                    t: void 0
                                });
                                return _el$3;
                            }(), createComponent(Row, {
                                y: 20,
                                gap: 24,
                                width: 1680,
                                height: 120,
                                display: "flex",
                                justifyContent: "flexStart",
                                alignItems: "center",
                                onFocus: onFocus,
                                get children() {
                                    return buttonsData.slice(0, 3).map(function(btn, i) {
                                        return createComponent(CustomIconButton, {
                                            get title() {
                                                return btn.title;
                                            },
                                            get icon() {
                                                return btn.icon;
                                            },
                                            get baseColor() {
                                                return btn.baseColor;
                                            },
                                            get focusColor() {
                                                return btn.focusColor;
                                            },
                                            autofocus: i === 0
                                        });
                                    });
                                }
                            }), createComponent(Row, {
                                y: 40,
                                gap: 24,
                                width: 1680,
                                height: 120,
                                display: "flex",
                                justifyContent: "flexStart",
                                alignItems: "center",
                                onFocus: onFocus,
                                get children() {
                                    return buttonsData.slice(3, 6).map(function(btn, i) {
                                        return createComponent(CustomIconButton, {
                                            get title() {
                                                return btn.title;
                                            },
                                            get icon() {
                                                return btn.icon;
                                            },
                                            get baseColor() {
                                                return btn.baseColor;
                                            },
                                            get focusColor() {
                                                return btn.focusColor;
                                            }
                                        });
                                    });
                                }
                            }) ];
                        }
                    });
                });
            }
        };
    });
})();