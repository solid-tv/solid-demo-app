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
    System.register([ "./render-legacy-t4wUAioc.js", "./Column-legacy-IFAmq0kZ.js", "./Row-legacy-C4R_D95v.js", "./styles-legacy-ByBLMtKI.js", "./state-legacy-CIkOTHs-.js" ], function(_export, _context) {
        var createSignal, createElement, onMount, mergeProps, spread, setProp, createComponent, createTextNode, insertNode, Column, Row, styles_default, setGlobalBackground;
        return {
            setters: [ function(_renderLegacy002Js) {
                createSignal = _renderLegacy002Js.J, createElement = _renderLegacy002Js.a, onMount = _renderLegacy002Js.et, 
                mergeProps = _renderLegacy002Js.f, spread = _renderLegacy002Js.g, setProp = _renderLegacy002Js.h, 
                createComponent = _renderLegacy002Js.i, createTextNode = _renderLegacy002Js.s, insertNode = _renderLegacy002Js.u;
            }, function(_ColumnLegacy009Js) {
                Column = _ColumnLegacy009Js.t;
            }, function(_RowLegacy00aJs) {
                Row = _RowLegacy00aJs.t;
            }, function(_stylesLegacy00hJs) {
                styles_default = _stylesLegacy00hJs.r;
            }, function(_stateLegacy00iJs) {
                setGlobalBackground = _stateLegacy00iJs.n;
            } ],
            execute: function() {
                _export("default", function() {
                    var RowStyles = {
                        display: "flex",
                        justifyContent: "flexStart",
                        width: 1600,
                        height: 110,
                        color: 4294967295
                    }, rowTitle = {
                        fontSize: 44,
                        marginTop: 25,
                        marginBottom: -20,
                        skipFocus: !0
                    }, red = 4278190335;
                    function Block(props) {
                        var _el$, styles = {
                            width: props.flexGrow ? 0 : 200,
                            height: 100,
                            y: 5
                        };
                        return _el$ = createElement("view"), spread(_el$, mergeProps(props, {
                            style: styles
                        }), !1), _el$;
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
                            return [ (_el$2 = createElement("text"), insertNode(_el$2, createTextNode("Flex Start RTL")), 
                            setProp(_el$2, "style", rowTitle), _el$2), createComponent(Row, {
                                gap: 50,
                                direction: "rtl",
                                style: RowStyles,
                                onFocus: onFocus,
                                get children() {
                                    return [ createComponent(Block, {
                                        flexGrow: 1,
                                        autofocus: !0,
                                        color: red
                                    }), createComponent(Block, {
                                        flexGrow: 2,
                                        color: 4287365375
                                    }), createComponent(Block, {
                                        color: 16711935
                                    }) ];
                                }
                            }), (_el$4 = createElement("text"), insertNode(_el$4, createTextNode("Flex End with Flex Grow")), 
                            setProp(_el$4, "style", rowTitle), _el$4), createComponent(Row, {
                                gap: 50,
                                style: RowStyles,
                                onFocus: onFocus,
                                get children() {
                                    return [ createComponent(Block, {
                                        color: 16711935
                                    }), createComponent(Block, {
                                        flexGrow: 1,
                                        color: red
                                    }), createComponent(Block, {
                                        flexGrow: 2,
                                        color: 4287365375
                                    }) ];
                                }
                            }), (_el$6 = createElement("text"), insertNode(_el$6, createTextNode("Space Between with Flex Grow")), 
                            setProp(_el$6, "style", rowTitle), _el$6), createComponent(Row, {
                                gap: 50,
                                justifyContent: "spaceBetween",
                                style: RowStyles,
                                onFocus: onFocus,
                                get children() {
                                    return [ createComponent(Block, {
                                        flexGrow: 1,
                                        color: red
                                    }), createComponent(Block, {
                                        flexGrow: 1,
                                        flexOrder: -1,
                                        color: 4287365375
                                    }), createComponent(Block, {
                                        flexGrow: 2,
                                        color: 16711935
                                    }) ];
                                }
                            }) ];
                            var _el$6, _el$4, _el$2;
                        }
                    });
                });
            }
        };
    });
}();