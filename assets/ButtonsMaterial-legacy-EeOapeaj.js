(function() {
    System.register([ "./index-legacy-BNQQdOqp.js" ], function(exports, module) {
        "use strict";
        var hexColor, createComponent, Row, createElement, insertNode, spread, mergeProps, setProp, MaterialButtonText, insert;
        return {
            setters: [ function(module) {
                hexColor = module.h;
                createComponent = module.l;
                Row = module.R;
                createElement = module.c;
                insertNode = module.n;
                spread = module.A;
                mergeProps = module.q;
                setProp = module.a;
                MaterialButtonText = module.Z;
                insert = module.k;
            } ],
            execute: function execute() {
                var MaterialButtonsPage = exports("default", function() {
                    function onEnter(event, elm) {
                        this.states.toggle("disabled");
                    }
                    var RowStyles = {
                        display: "flex",
                        justifyContent: "flexStart",
                        width: 1500,
                        height: 300,
                        color: hexColor("00000000"),
                        gap: 26,
                        y: 400,
                        x: 100
                    };
                    var MaterialButton = {
                        width: 386,
                        height: 136,
                        color: "0x715cabff",
                        $focus: {
                            color: "0x5a39a2ff"
                        },
                        disabled: {
                            color: "0x291d43ff"
                        }
                    };
                    var RoundedRectangle = [ "RoundedRectangle", {
                        radius: 65
                    } ];
                    function Button(props) {
                        return function() {
                            var _el$ = createElement("view"), _el$2 = createElement("text");
                            insertNode(_el$, _el$2);
                            spread(_el$, mergeProps(props, {
                                forwardStates: true,
                                style: MaterialButton,
                                shader: RoundedRectangle
                            }), true);
                            setProp(_el$2, "style", MaterialButtonText);
                            insert(_el$2, function() {
                                return props.children;
                            });
                            return _el$;
                        }();
                    }
                    return createComponent(Row, {
                        style: RowStyles,
                        get children() {
                            return [ createComponent(Button, {
                                autofocus: true,
                                onEnter: onEnter,
                                children: "Focused"
                            }), createComponent(Button, {
                                states: {
                                    active: true,
                                    disabled: false
                                },
                                children: "Normal"
                            }), createComponent(Button, {
                                states: "disabled",
                                children: "Disabled"
                            }) ];
                        }
                    });
                });
            }
        };
    });
})();
