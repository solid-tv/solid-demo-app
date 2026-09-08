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
    System.register([ "./render-legacy-BWVYYcsn.js", "./utils-legacy-DWRDQyJm.js", "./mergeProps-legacy-D2-w7VmI.js", "./Column-legacy-CpMvWA94.js", "./Row-legacy-BhL2xbQP.js", "./state-legacy-DCkLOvQm.js" ], function(_export, _context) {
        var onMount, createElement, spread, createComponent, setProp, createSignal, createTextNode, insertNode, hexColor, mergeProps, Column, Row, setGlobalBackground;
        return {
            setters: [ function(_renderLegacy002Js) {
                onMount = _renderLegacy002Js.$, createElement = _renderLegacy002Js.a, spread = _renderLegacy002Js.h, 
                createComponent = _renderLegacy002Js.i, setProp = _renderLegacy002Js.m, createSignal = _renderLegacy002Js.q, 
                createTextNode = _renderLegacy002Js.s, insertNode = _renderLegacy002Js.u;
            }, function(_utilsLegacy004Js) {
                hexColor = _utilsLegacy004Js.r;
            }, function(_mergePropsLegacy005Js) {
                mergeProps = _mergePropsLegacy005Js.t;
            }, function(_ColumnLegacy00aJs) {
                Column = _ColumnLegacy00aJs.t;
            }, function(_RowLegacy00bJs) {
                Row = _RowLegacy00bJs.t;
            }, function(_stateLegacy00jJs) {
                setGlobalBackground = _stateLegacy00jJs.n;
            } ],
            execute: function() {
                _export("default", function() {
                    var RowStyles = {
                        display: "flex",
                        justifyContent: "spaceEvenly",
                        width: 1920,
                        y: 100,
                        height: 880,
                        color: hexColor("00000000")
                    }, ColumnStyles = {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flexStart",
                        color: 1303115263,
                        height: 850,
                        width: 80
                    }, rowTitle = {
                        fontSize: 44,
                        y: 20,
                        x: 150
                    };
                    function Block(props) {
                        var _el$, styles = {
                            width: Math.floor(61 * Math.random()) + 10,
                            height: 80,
                            x: 5,
                            color: 392801023
                        };
                        return _el$ = createElement("view"), spread(_el$, mergeProps(props, {
                            style: styles
                        }), !1), _el$;
                    }
                    var _createSignal2 = _slicedToArray(createSignal(50), 2), setColumnY = (_createSignal2[0], 
                    _createSignal2[1]);
                    function onFocus() {
                        this.children[this.selected || 0].setFocus(), setColumnY(150 + -1 * (this.y || 0));
                    }
                    onMount(function() {
                        setGlobalBackground(858993663);
                    });
                    var _el$2;
                    return [ (_el$2 = createElement("text"), insertNode(_el$2, createTextNode("Start, MarginTop, End, MarginBottom, Center, Between, Evenly")), 
                    setProp(_el$2, "style", rowTitle), _el$2), createComponent(Row, {
                        gap: 50,
                        style: RowStyles,
                        onFocus: onFocus,
                        get children() {
                            return [ createComponent(Column, {
                                gap: 30,
                                style: ColumnStyles,
                                alignItems: "center",
                                get children() {
                                    return [ createComponent(Block, {
                                        autofocus: !0
                                    }), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}) ];
                                }
                            }), createComponent(Column, {
                                gap: 50,
                                style: ColumnStyles,
                                onFocus: onFocus,
                                alignItems: "flexStart",
                                get children() {
                                    return [ createComponent(Block, {
                                        marginTop: 100
                                    }), createComponent(Block, {}), createComponent(Block, {
                                        marginTop: 100
                                    }), createComponent(Block, {}), createComponent(Block, {}) ];
                                }
                            }), createComponent(Column, {
                                gap: 50,
                                alignItems: "flexEnd",
                                justifyContent: "flexEnd",
                                style: ColumnStyles,
                                onFocus: onFocus,
                                get children() {
                                    return [ createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}) ];
                                }
                            }), createComponent(Column, {
                                gap: 50,
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
                                gap: 50,
                                justifyContent: "center",
                                style: ColumnStyles,
                                onFocus: onFocus,
                                get children() {
                                    return [ createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}) ];
                                }
                            }), createComponent(Column, {
                                gap: 50,
                                justifyContent: "spaceBetween",
                                style: ColumnStyles,
                                onFocus: onFocus,
                                get children() {
                                    return [ createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}) ];
                                }
                            }), createComponent(Column, {
                                gap: 50,
                                justifyContent: "spaceEvenly",
                                style: ColumnStyles,
                                onFocus: onFocus,
                                get children() {
                                    return [ createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}) ];
                                }
                            }) ];
                        }
                    }) ];
                });
            }
        };
    });
}();