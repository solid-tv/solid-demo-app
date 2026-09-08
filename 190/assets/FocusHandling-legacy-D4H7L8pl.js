System.register([ "./render-legacy-BWVYYcsn.js", "./mergeProps-legacy-D2-w7VmI.js", "./Column-legacy-CpMvWA94.js", "./Row-legacy-BhL2xbQP.js", "./state-legacy-DCkLOvQm.js" ], function(_export, _context) {
    var createElement, spread, createComponent, insert, setProp, mergeProps, Column, Row, setGlobalBackground, styles;
    function Button(props) {
        return _el$ = createElement("view"), spread(_el$, mergeProps(props, {
            width: 200,
            height: 60,
            get style() {
                return styles.button;
            },
            get color() {
                return props.color || 3772834047;
            }
        }), !1), _el$;
        var _el$;
    }
    return {
        setters: [ function(_renderLegacy002Js) {
            createElement = _renderLegacy002Js.a, spread = _renderLegacy002Js.h, createComponent = _renderLegacy002Js.i, 
            insert = _renderLegacy002Js.l, setProp = _renderLegacy002Js.m;
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
            styles = {
                button: {
                    alpha: .4,
                    $focus: {
                        alpha: 1
                    }
                }
            }, _export("default", function() {
                setGlobalBackground(506018815);
                var _el$2, leftMenuStyle = {
                    width: 200,
                    height: 240,
                    $focus: {
                        width: 900,
                        transition: !0
                    }
                };
                return _el$2 = createElement("view"), setProp(_el$2, "x", 450), setProp(_el$2, "y", 200), 
                insert(_el$2, createComponent(Row, {
                    display: "block",
                    get children() {
                        return [ (_el$3 = createElement("view"), setProp(_el$3, "forwardFocus", 0), setProp(_el$3, "style", leftMenuStyle), 
                        setProp(_el$3, "colorLeft", 1196779946), setProp(_el$3, "colorRight", 1685359530), 
                        setProp(_el$3, "zIndex", 5), insert(_el$3, createComponent(Column, {
                            id: "SideMenu",
                            gap: 20,
                            get children() {
                                return [ createComponent(Button, {
                                    color: 3840206847
                                }), createComponent(Button, {
                                    color: 3840206847
                                }), createComponent(Button, {
                                    color: 3840206847
                                }) ];
                            }
                        })), _el$3), createComponent(Column, {
                            x: 250,
                            gap: 20,
                            plinko: !0,
                            autofocus: !0,
                            get children() {
                                return [ createComponent(Row, {
                                    gap: 20,
                                    height: 60,
                                    get children() {
                                        return [ createComponent(Button, {
                                            color: 4014228735
                                        }), createComponent(Button, {
                                            color: 4185069311
                                        }), createComponent(Button, {
                                            color: 2227967743
                                        }) ];
                                    }
                                }), createComponent(Row, {
                                    gap: 20,
                                    height: 60,
                                    get children() {
                                        return [ createComponent(Button, {
                                            color: 280592895
                                        }), createComponent(Button, {
                                            color: 112645375
                                        }), createComponent(Button, {
                                            color: 998438655
                                        }) ];
                                    }
                                }), createComponent(Row, {
                                    gap: 20,
                                    height: 60,
                                    get children() {
                                        return [ createComponent(Button, {
                                            color: 2338125567
                                        }), createComponent(Button, {
                                            color: 3645304831
                                        }), createComponent(Button, {
                                            color: 4097793791
                                        }) ];
                                    }
                                }) ];
                            }
                        }) ];
                        var _el$3;
                    }
                })), _el$2;
            });
        }
    };
});