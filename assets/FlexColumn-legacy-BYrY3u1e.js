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
    System.register([ "./render-legacy-zhspBKrd.js", "./utils-legacy-BzzMKxwG.js", "./Column-legacy-CugXt5cX.js", "./Row-legacy-BZXAAvsN.js", "./state-legacy-CdoSGSvK.js" ], function(_export, _context) {
        "use strict";
        var createSignal, createElement, onMount, mergeProps, spread, setProp, createComponent, createTextNode, insertNode, hexColor, Column, Row, setGlobalBackground, FlexColumnPage;
        return {
            setters: [ function(_renderLegacy001Js) {
                createSignal = _renderLegacy001Js.J;
                createElement = _renderLegacy001Js.a;
                onMount = _renderLegacy001Js.et;
                mergeProps = _renderLegacy001Js.f;
                spread = _renderLegacy001Js.g;
                setProp = _renderLegacy001Js.h;
                createComponent = _renderLegacy001Js.i;
                createTextNode = _renderLegacy001Js.s;
                insertNode = _renderLegacy001Js.u;
            }, function(_utilsLegacy002Js) {
                hexColor = _utilsLegacy002Js.r;
            }, function(_ColumnLegacy007Js) {
                Column = _ColumnLegacy007Js.t;
            }, function(_RowLegacy008Js) {
                Row = _RowLegacy008Js.t;
            }, function(_stateLegacy00hJs) {
                setGlobalBackground = _stateLegacy00hJs.n;
            } ],
            execute: function execute() {
                _export("default", FlexColumnPage = function FlexColumnPage() {
                    var RowStyles = {
                        display: "flex",
                        justifyContent: "spaceEvenly",
                        width: 1920,
                        y: 100,
                        height: 880,
                        color: hexColor("00000000")
                    };
                    var ColumnStyles = {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flexStart",
                        color: 1303115263,
                        height: 850,
                        width: 60
                    };
                    var rowTitle = {
                        fontSize: 44,
                        y: 20,
                        x: 150
                    };
                    function Block(props) {
                        var styles = {
                            width: 50,
                            height: 80,
                            x: 5,
                            color: 392801023
                        };
                        return function() {
                            var _el$ = createElement("view");
                            spread(_el$, mergeProps(props, {
                                style: styles
                            }), false);
                            return _el$;
                        }();
                    }
                    var _createSignal = createSignal(50), _createSignal2 = _slicedToArray(_createSignal, 2), columnY = _createSignal2[0], setColumnY = _createSignal2[1];
                    function onFocus() {
                        this.children[this.selected || 0].setFocus();
                        setColumnY(150 + (this.y || 0) * -1);
                    }
                    onMount(function() {
                        setGlobalBackground(858993663);
                    });
                    var gap = 50;
                    return [ function() {
                        var _el$2 = createElement("text");
                        insertNode(_el$2, createTextNode("Start, MarginTop, End, MarginBottom, Center, Between, Evenly"));
                        setProp(_el$2, "style", rowTitle);
                        return _el$2;
                    }(), createComponent(Row, {
                        gap: gap,
                        style: RowStyles,
                        onFocus: onFocus,
                        get children() {
                            return [ createComponent(Column, {
                                gap: 30,
                                style: ColumnStyles,
                                get children() {
                                    return [ createComponent(Block, {
                                        autofocus: true
                                    }), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}) ];
                                }
                            }), createComponent(Column, {
                                gap: gap,
                                style: ColumnStyles,
                                onFocus: onFocus,
                                get children() {
                                    return [ createComponent(Block, {
                                        marginTop: 100
                                    }), createComponent(Block, {}), createComponent(Block, {
                                        marginTop: 100
                                    }), createComponent(Block, {}), createComponent(Block, {}) ];
                                }
                            }), createComponent(Column, {
                                gap: gap,
                                justifyContent: "flexEnd",
                                style: ColumnStyles,
                                debug: true,
                                onFocus: onFocus,
                                get children() {
                                    return [ createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}) ];
                                }
                            }), createComponent(Column, {
                                gap: gap,
                                justifyContent: "flexEnd",
                                style: ColumnStyles,
                                onFocus: onFocus,
                                get children() {
                                    return [ createComponent(Block, {}), createComponent(Block, {
                                        marginBottom: 100
                                    }), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {
                                        marginBottom: 100
                                    }) ];
                                }
                            }), createComponent(Column, {
                                gap: gap,
                                justifyContent: "center",
                                style: ColumnStyles,
                                onFocus: onFocus,
                                get children() {
                                    return [ createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}) ];
                                }
                            }), createComponent(Column, {
                                gap: gap,
                                justifyContent: "spaceBetween",
                                style: ColumnStyles,
                                onFocus: onFocus,
                                get children() {
                                    return [ createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}) ];
                                }
                            }), createComponent(Column, {
                                gap: gap,
                                justifyContent: "spaceEvenly",
                                style: ColumnStyles,
                                onFocus: onFocus,
                                get children() {
                                    return [ createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}) ];
                                }
                            }), createComponent(Column, {
                                gap: gap,
                                rowGap: 0,
                                flexWrap: "wrap",
                                alignItems: "center",
                                style: ColumnStyles,
                                onFocus: onFocus,
                                get children() {
                                    return [ createComponent(Block, {
                                        height: 200
                                    }), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {
                                        height: 200
                                    }), createComponent(Block, {}), createComponent(Block, {
                                        height: 200
                                    }), createComponent(Block, {}) ];
                                }
                            }) ];
                        }
                    }) ];
                });
            }
        };
    });
})();