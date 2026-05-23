(function() {
    System.register([ "./index-legacy-Da3rRJGz.js" ], function(exports, module) {
        "use strict";
        var setGlobalBackground, createElement, setProp, insert, createComponent, Row, Column, spread, mergeProps;
        return {
            setters: [ function(module) {
                setGlobalBackground = module.s;
                createElement = module.c;
                setProp = module.a;
                insert = module.k;
                createComponent = module.l;
                Row = module.R;
                Column = module.C;
                spread = module.A;
                mergeProps = module.q;
            } ],
            execute: function execute() {
                var styles = {
                    button: {
                        alpha: .4,
                        $focus: {
                            alpha: 1
                        }
                    }
                };
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
                var PositioningPage = exports("default", function() {
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
//# sourceMappingURL=FocusHandling-legacy-Zqb0Zp0Y.js.map
