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
    System.register([ "./render-legacy-BkFHmMEJ.js", "./mergeProps-legacy-C8INvfCm.js", "./Column-legacy-zINFEpyU.js", "./Row-legacy-BCwmE3NG.js", "./styles-legacy-BOzjtbic.js", "./state-legacy-DXK48JVU.js" ], function(_export, _context) {
        "use strict";
        var onMount, createElement, spread, createComponent, setProp, createSignal, createTextNode, insertNode, mergeProps, Column, Row, styles_default, setGlobalBackground, FlexGrow;
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
                _export("default", FlexGrow = function FlexGrow() {
                    var RowStyles = {
                        display: "flex",
                        justifyContent: "flexStart",
                        width: 1600,
                        height: 110,
                        color: 4294967295
                    };
                    var rowTitle = {
                        fontSize: 44,
                        marginTop: 25,
                        marginBottom: -20,
                        skipFocus: true
                    };
                    var red = 4278190335;
                    var darkorange = 4287365375;
                    var green = 16711935;
                    function Block(props) {
                        var styles = {
                            width: props.flexGrow ? 0 : 200,
                            height: 100,
                            y: 5
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
                                insertNode(_el$2, createTextNode("Flex Start RTL"));
                                setProp(_el$2, "style", rowTitle);
                                return _el$2;
                            }(), createComponent(Row, {
                                gap: gap,
                                direction: "rtl",
                                style: RowStyles,
                                onFocus: onFocus,
                                get children() {
                                    return [ createComponent(Block, {
                                        flexGrow: 1,
                                        autofocus: true,
                                        color: red
                                    }), createComponent(Block, {
                                        flexGrow: 2,
                                        color: darkorange
                                    }), createComponent(Block, {
                                        color: green
                                    }) ];
                                }
                            }), function() {
                                var _el$4 = createElement("text");
                                insertNode(_el$4, createTextNode("Flex End with Flex Grow"));
                                setProp(_el$4, "style", rowTitle);
                                return _el$4;
                            }(), createComponent(Row, {
                                gap: gap,
                                style: RowStyles,
                                onFocus: onFocus,
                                get children() {
                                    return [ createComponent(Block, {
                                        color: green
                                    }), createComponent(Block, {
                                        flexGrow: 1,
                                        color: red
                                    }), createComponent(Block, {
                                        flexGrow: 2,
                                        color: darkorange
                                    }) ];
                                }
                            }), function() {
                                var _el$6 = createElement("text");
                                insertNode(_el$6, createTextNode("Space Between with Flex Grow"));
                                setProp(_el$6, "style", rowTitle);
                                return _el$6;
                            }(), createComponent(Row, {
                                gap: gap,
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
                                        color: darkorange
                                    }), createComponent(Block, {
                                        flexGrow: 2,
                                        color: green
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