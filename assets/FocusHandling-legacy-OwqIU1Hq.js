(function() {
    System.register([ "./render-legacy-DtakB29i.js", "./mergeProps-legacy-CFpDKADI.js", "./Column-legacy-BueS-L65.js", "./Row-legacy-GCUJlq_t.js", "./state-legacy-C_-XYt6A.js" ], function(_export, _context) {
        "use strict";
        var createElement, spread, createComponent, insert, setProp, mergeProps, Column, Row, setGlobalBackground, styles, PositioningPage;
        function Button(props) {
            return function() {
                var _el$ = createElement("view");
                spread(_el$, mergeProps(props, {
                    width: 200,
                    height: 60,
                    get style() {
                        return styles.button;
                    },
                    get color() {
                        return props.color || 3772834047;
                    }
                }), false);
                return _el$;
            }();
        }
        return {
            setters: [ function(_renderLegacy001Js) {
                createElement = _renderLegacy001Js.a;
                spread = _renderLegacy001Js.h;
                createComponent = _renderLegacy001Js.i;
                insert = _renderLegacy001Js.l;
                setProp = _renderLegacy001Js.m;
            }, function(_mergePropsLegacy003Js) {
                mergeProps = _mergePropsLegacy003Js.t;
            }, function(_ColumnLegacy008Js) {
                Column = _ColumnLegacy008Js.t;
            }, function(_RowLegacy009Js) {
                Row = _RowLegacy009Js.t;
            }, function(_stateLegacy00iJs) {
                setGlobalBackground = _stateLegacy00iJs.n;
            } ],
            execute: function execute() {
                styles = {
                    button: {
                        alpha: .4,
                        $focus: {
                            alpha: 1
                        }
                    }
                };
                _export("default", PositioningPage = function PositioningPage() {
                    setGlobalBackground(506018815);
                    var leftMenuStyle = {
                        width: 200,
                        height: 240,
                        $focus: {
                            width: 900,
                            transition: true
                        }
                    };
                    return function() {
                        var _el$2 = createElement("view");
                        setProp(_el$2, "x", 450);
                        setProp(_el$2, "y", 200);
                        insert(_el$2, createComponent(Row, {
                            display: "block",
                            get children() {
                                return [ function() {
                                    var _el$3 = createElement("view");
                                    setProp(_el$3, "forwardFocus", 0);
                                    setProp(_el$3, "style", leftMenuStyle);
                                    setProp(_el$3, "colorLeft", 1196779946);
                                    setProp(_el$3, "colorRight", 1685359530);
                                    setProp(_el$3, "zIndex", 5);
                                    insert(_el$3, createComponent(Column, {
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
                                    }));
                                    return _el$3;
                                }(), createComponent(Column, {
                                    x: 250,
                                    gap: 20,
                                    plinko: true,
                                    autofocus: true,
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
                            }
                        }));
                        return _el$2;
                    }();
                });
            }
        };
    });
})();