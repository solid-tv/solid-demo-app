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
    System.register([ "./render-legacy-C75jKPoW.js", "./mergeProps-legacy-CDlswesM.js", "./Column-legacy-CcQuWn8X.js", "./Row-legacy-BdsWWaQk.js", "./styles-legacy-BOzjtbic.js", "./state-legacy-DghrRWJ1.js" ], function(_export, _context) {
        "use strict";
        var onMount, createElement, spread, createComponent, setProp, createSignal, createTextNode, insertNode, mergeProps, Column, Row, styles_default, setGlobalBackground, FlexPage;
        return {
            setters: [ function(_renderLegacy001Js) {
                onMount = _renderLegacy001Js.$;
                createElement = _renderLegacy001Js.a;
                spread = _renderLegacy001Js.h;
                createComponent = _renderLegacy001Js.i;
                setProp = _renderLegacy001Js.m;
                createSignal = _renderLegacy001Js.q;
                createTextNode = _renderLegacy001Js.s;
                insertNode = _renderLegacy001Js.u;
            }, function(_mergePropsLegacy003Js) {
                mergeProps = _mergePropsLegacy003Js.t;
            }, function(_ColumnLegacy008Js) {
                Column = _ColumnLegacy008Js.t;
            }, function(_RowLegacy009Js) {
                Row = _RowLegacy009Js.t;
            }, function(_stylesLegacy00hJs) {
                styles_default = _stylesLegacy00hJs.r;
            }, function(_stateLegacy00iJs) {
                setGlobalBackground = _stateLegacy00iJs.n;
            } ],
            execute: function execute() {
                _export("default", FlexPage = function FlexPage() {
                    var RowStyles = {
                        display: "flex",
                        justifyContent: "flexStart",
                        width: 1600,
                        height: 110,
                        color: 1303115263
                    };
                    var rowTitle = {
                        fontSize: 44,
                        marginTop: 25,
                        marginBottom: -20,
                        skipFocus: true
                    };
                    function Block(props) {
                        var styles = {
                            width: 200,
                            height: 100,
                            y: 5,
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
                    return createComponent(Column, {
                        x: 160,
                        get y() {
                            return columnY();
                        },
                        gap: 30,
                        height: 850,
                        get width() {
                            return RowStyles.width;
                        },
                        get style() {
                            return styles_default.Column;
                        },
                        get children() {
                            return [ function() {
                                var _el$2 = createElement("text");
                                insertNode(_el$2, createTextNode("Flex Start"));
                                setProp(_el$2, "style", rowTitle);
                                return _el$2;
                            }(), createComponent(Row, {
                                gap: gap,
                                style: RowStyles,
                                onFocus: onFocus,
                                get children() {
                                    return [ createComponent(Block, {
                                        autofocus: true
                                    }), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}) ];
                                }
                            }), function() {
                                var _el$4 = createElement("text");
                                insertNode(_el$4, createTextNode("Flex Start - Margin Left"));
                                setProp(_el$4, "style", rowTitle);
                                return _el$4;
                            }(), createComponent(Row, {
                                gap: gap,
                                style: RowStyles,
                                onFocus: onFocus,
                                get children() {
                                    return [ createComponent(Block, {
                                        marginLeft: 100
                                    }), createComponent(Block, {}), createComponent(Block, {
                                        marginLeft: 100
                                    }), createComponent(Block, {}), createComponent(Block, {}) ];
                                }
                            }), function() {
                                var _el$6 = createElement("text");
                                insertNode(_el$6, createTextNode("Flex End"));
                                setProp(_el$6, "style", rowTitle);
                                return _el$6;
                            }(), createComponent(Row, {
                                gap: gap,
                                justifyContent: "flexEnd",
                                style: RowStyles,
                                onFocus: onFocus,
                                get children() {
                                    return [ createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}) ];
                                }
                            }), function() {
                                var _el$8 = createElement("text");
                                insertNode(_el$8, createTextNode("Flex End - Margin Right"));
                                setProp(_el$8, "style", rowTitle);
                                return _el$8;
                            }(), createComponent(Row, {
                                gap: gap,
                                justifyContent: "flexEnd",
                                style: RowStyles,
                                onFocus: onFocus,
                                get children() {
                                    return [ createComponent(Block, {}), createComponent(Block, {
                                        marginRight: 100
                                    }), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {
                                        marginRight: 100
                                    }) ];
                                }
                            }), function() {
                                var _el$0 = createElement("text");
                                insertNode(_el$0, createTextNode("Center"));
                                setProp(_el$0, "style", rowTitle);
                                return _el$0;
                            }(), createComponent(Row, {
                                gap: gap,
                                justifyContent: "center",
                                style: RowStyles,
                                onFocus: onFocus,
                                get children() {
                                    return [ createComponent(Block, {}), createComponent(Block, {
                                        marginLeft: 80
                                    }), createComponent(Block, {}), createComponent(Block, {
                                        marginLeft: 80
                                    }), createComponent(Block, {}) ];
                                }
                            }), function() {
                                var _el$10 = createElement("text");
                                insertNode(_el$10, createTextNode("Space Between"));
                                setProp(_el$10, "style", rowTitle);
                                return _el$10;
                            }(), createComponent(Row, {
                                gap: gap,
                                justifyContent: "spaceBetween",
                                style: RowStyles,
                                onFocus: onFocus,
                                get children() {
                                    return [ createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {
                                        marginRight: 40
                                    }) ];
                                }
                            }), function() {
                                var _el$12 = createElement("text");
                                insertNode(_el$12, createTextNode("Space Evenly"));
                                setProp(_el$12, "style", rowTitle);
                                return _el$12;
                            }(), createComponent(Row, {
                                gap: gap,
                                justifyContent: "spaceEvenly",
                                style: RowStyles,
                                onFocus: onFocus,
                                get children() {
                                    return [ createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {
                                        marginLeft: 80
                                    }), createComponent(Block, {}), createComponent(Block, {}) ];
                                }
                            }), function() {
                                var _el$14 = createElement("text");
                                insertNode(_el$14, createTextNode("Flex Wrap"));
                                setProp(_el$14, "style", rowTitle);
                                return _el$14;
                            }(), createComponent(Row, {
                                gap: gap,
                                justifyContent: "flexStart",
                                flexWrap: "wrap",
                                alignItems: "center",
                                style: RowStyles,
                                onFocus: onFocus,
                                get children() {
                                    return [ createComponent(Block, {
                                        width: 300
                                    }), createComponent(Block, {
                                        width: 300
                                    }), createComponent(Block, {
                                        width: 300,
                                        alignSelf: "flexStart"
                                    }), createComponent(Block, {
                                        width: 300
                                    }), createComponent(Block, {
                                        width: 300
                                    }), createComponent(Block, {
                                        width: 300,
                                        alignSelf: "flexEnd"
                                    }), createComponent(Block, {
                                        width: 300
                                    }) ];
                                }
                            }) ];
                        }
                    });
                });
            }
        };
    });
})();