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
    System.register([ "./render-legacy-dLzA91Db.js", "./mergeProps-legacy-wREr8h3i.js", "./Column-legacy-vZ9l9pny.js", "./Row-legacy-BdzmVMNF.js", "./styles-legacy--qMSUlWV.js", "./state-legacy-C4TEpoVI.js" ], function(_export, _context) {
        var onMount, createElement, spread, createComponent, setProp, createSignal, createTextNode, insertNode, mergeProps, Column, Row, styles_default, setGlobalBackground;
        return {
            setters: [ function(_renderLegacy002Js) {
                onMount = _renderLegacy002Js.$, createElement = _renderLegacy002Js.a, spread = _renderLegacy002Js.h, 
                createComponent = _renderLegacy002Js.i, setProp = _renderLegacy002Js.m, createSignal = _renderLegacy002Js.q, 
                createTextNode = _renderLegacy002Js.s, insertNode = _renderLegacy002Js.u;
            }, function(_mergePropsLegacy005Js) {
                mergeProps = _mergePropsLegacy005Js.t;
            }, function(_ColumnLegacy00aJs) {
                Column = _ColumnLegacy00aJs.t;
            }, function(_RowLegacy00bJs) {
                Row = _RowLegacy00bJs.t;
            }, function(_stylesLegacy00iJs) {
                styles_default = _stylesLegacy00iJs.r;
            }, function(_stateLegacy00jJs) {
                setGlobalBackground = _stateLegacy00jJs.n;
            } ],
            execute: function() {
                _export("default", function() {
                    var RowStyles = {
                        display: "flex",
                        justifyContent: "flexStart",
                        width: 1600,
                        height: 110,
                        color: 1303115263
                    }, rowTitle = {
                        fontSize: 44,
                        marginTop: 25,
                        marginBottom: -20,
                        skipFocus: !0
                    };
                    function Block(props) {
                        var _el$, styles = {
                            width: 200,
                            height: 100,
                            y: 5,
                            color: 392801023
                        };
                        return _el$ = createElement("view"), spread(_el$, mergeProps(props, {
                            style: styles
                        }), !1), _el$;
                    }
                    function randSize() {
                        return Math.floor(91 * Math.random()) + 10;
                    }
                    var _createSignal2 = _slicedToArray(createSignal(50), 2), columnY = _createSignal2[0], setColumnY = _createSignal2[1];
                    function onFocus() {
                        this.children[this.selected || 0].setFocus(), setColumnY(150 + -1 * (this.y || 0));
                    }
                    onMount(function() {
                        setGlobalBackground(858993663);
                    });
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
                            return [ (_el$2 = createElement("text"), insertNode(_el$2, createTextNode("Flex Start - AlignItems: center")), 
                            setProp(_el$2, "style", rowTitle), _el$2), createComponent(Row, {
                                alignItems: "center",
                                gap: 50,
                                style: RowStyles,
                                onFocus: onFocus,
                                get children() {
                                    return [ createComponent(Block, {
                                        autofocus: !0,
                                        get height() {
                                            return randSize();
                                        }
                                    }), createComponent(Block, {
                                        get height() {
                                            return randSize();
                                        }
                                    }), createComponent(Block, {
                                        get height() {
                                            return randSize();
                                        }
                                    }), createComponent(Block, {
                                        get height() {
                                            return randSize();
                                        }
                                    }), createComponent(Block, {
                                        get height() {
                                            return randSize();
                                        }
                                    }) ];
                                }
                            }), (_el$4 = createElement("text"), insertNode(_el$4, createTextNode("Flex Start - Margin Left - AlignItems: flexStart")), 
                            setProp(_el$4, "style", rowTitle), _el$4), createComponent(Row, {
                                gap: 50,
                                alignItems: "flexStart",
                                style: RowStyles,
                                onFocus: onFocus,
                                get children() {
                                    return [ createComponent(Block, {
                                        marginLeft: 100,
                                        get height() {
                                            return randSize();
                                        }
                                    }), createComponent(Block, {
                                        get height() {
                                            return randSize();
                                        }
                                    }), createComponent(Block, {
                                        marginLeft: 100,
                                        get height() {
                                            return randSize();
                                        }
                                    }), createComponent(Block, {
                                        get height() {
                                            return randSize();
                                        }
                                    }), createComponent(Block, {
                                        get height() {
                                            return randSize();
                                        }
                                    }) ];
                                }
                            }), (_el$6 = createElement("text"), insertNode(_el$6, createTextNode("Flex End - AlignItems: flexEnd")), 
                            setProp(_el$6, "style", rowTitle), _el$6), createComponent(Row, {
                                gap: 50,
                                justifyContent: "flexEnd",
                                alignItems: "flexEnd",
                                style: RowStyles,
                                onFocus: onFocus,
                                get children() {
                                    return [ createComponent(Block, {
                                        get height() {
                                            return randSize();
                                        }
                                    }), createComponent(Block, {
                                        get height() {
                                            return randSize();
                                        }
                                    }), createComponent(Block, {
                                        get height() {
                                            return randSize();
                                        }
                                    }), createComponent(Block, {
                                        get height() {
                                            return randSize();
                                        }
                                    }), createComponent(Block, {
                                        get height() {
                                            return randSize();
                                        }
                                    }) ];
                                }
                            }), (_el$8 = createElement("text"), insertNode(_el$8, createTextNode("Flex End - Margin Right")), 
                            setProp(_el$8, "style", rowTitle), _el$8), createComponent(Row, {
                                gap: 50,
                                justifyContent: "flexEnd",
                                style: RowStyles,
                                onFocus: onFocus,
                                get children() {
                                    return [ createComponent(Block, {
                                        get height() {
                                            return randSize();
                                        }
                                    }), createComponent(Block, {
                                        marginRight: 100,
                                        get height() {
                                            return randSize();
                                        }
                                    }), createComponent(Block, {
                                        get height() {
                                            return randSize();
                                        }
                                    }), createComponent(Block, {
                                        get height() {
                                            return randSize();
                                        }
                                    }), createComponent(Block, {
                                        marginRight: 100,
                                        get height() {
                                            return randSize();
                                        }
                                    }) ];
                                }
                            }), (_el$0 = createElement("text"), insertNode(_el$0, createTextNode("Center - No Margin Support")), 
                            setProp(_el$0, "style", rowTitle), _el$0), createComponent(Row, {
                                gap: 50,
                                justifyContent: "center",
                                style: RowStyles,
                                onFocus: onFocus,
                                get children() {
                                    return [ createComponent(Block, {
                                        get height() {
                                            return randSize();
                                        }
                                    }), createComponent(Block, {
                                        get height() {
                                            return randSize();
                                        }
                                    }), createComponent(Block, {
                                        get height() {
                                            return randSize();
                                        }
                                    }), createComponent(Block, {
                                        get height() {
                                            return randSize();
                                        }
                                    }), createComponent(Block, {
                                        get height() {
                                            return randSize();
                                        }
                                    }) ];
                                }
                            }), (_el$10 = createElement("text"), insertNode(_el$10, createTextNode("Space Between - No Margin Support")), 
                            setProp(_el$10, "style", rowTitle), _el$10), createComponent(Row, {
                                gap: 50,
                                justifyContent: "spaceBetween",
                                style: RowStyles,
                                onFocus: onFocus,
                                get children() {
                                    return [ createComponent(Block, {
                                        get height() {
                                            return randSize();
                                        }
                                    }), createComponent(Block, {
                                        get height() {
                                            return randSize();
                                        }
                                    }), createComponent(Block, {
                                        get height() {
                                            return randSize();
                                        }
                                    }), createComponent(Block, {
                                        get height() {
                                            return randSize();
                                        }
                                    }), createComponent(Block, {
                                        get height() {
                                            return randSize();
                                        }
                                    }) ];
                                }
                            }), (_el$12 = createElement("text"), insertNode(_el$12, createTextNode("Space Evenly - No Margin Support")), 
                            setProp(_el$12, "style", rowTitle), _el$12), createComponent(Row, {
                                gap: 50,
                                justifyContent: "spaceEvenly",
                                style: RowStyles,
                                onFocus: onFocus,
                                get children() {
                                    return [ createComponent(Block, {
                                        get height() {
                                            return randSize();
                                        }
                                    }), createComponent(Block, {
                                        get height() {
                                            return randSize();
                                        }
                                    }), createComponent(Block, {
                                        get height() {
                                            return randSize();
                                        }
                                    }), createComponent(Block, {
                                        get height() {
                                            return randSize();
                                        }
                                    }), createComponent(Block, {
                                        get height() {
                                            return randSize();
                                        }
                                    }) ];
                                }
                            }), (_el$14 = createElement("text"), insertNode(_el$14, createTextNode("Space Around - No Margin Support")), 
                            setProp(_el$14, "style", rowTitle), _el$14), createComponent(Row, {
                                gap: 50,
                                justifyContent: "spaceAround",
                                style: RowStyles,
                                onFocus: onFocus,
                                get children() {
                                    return [ createComponent(Block, {
                                        get height() {
                                            return randSize();
                                        }
                                    }), createComponent(Block, {
                                        get height() {
                                            return randSize();
                                        }
                                    }), createComponent(Block, {
                                        get height() {
                                            return randSize();
                                        }
                                    }), createComponent(Block, {
                                        get height() {
                                            return randSize();
                                        }
                                    }), createComponent(Block, {
                                        get height() {
                                            return randSize();
                                        }
                                    }) ];
                                }
                            }) ];
                            var _el$14, _el$12, _el$10, _el$0, _el$8, _el$6, _el$4, _el$2;
                        }
                    });
                });
            }
        };
    });
}();