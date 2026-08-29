(function() {
    System.register([ "./render-legacy-zhspBKrd.js", "./utils-legacy-BzzMKxwG.js", "./Row-legacy-BZXAAvsN.js", "./styles-legacy-Bdc4KjXs.js" ], function(_export, _context) {
        "use strict";
        var createElement, mergeProps, spread, setProp, createComponent, insert, insertNode, hexColor, Row, MaterialButtonText, MaterialButtonsPage;
        return {
            setters: [ function(_renderLegacy001Js) {
                createElement = _renderLegacy001Js.a;
                mergeProps = _renderLegacy001Js.f;
                spread = _renderLegacy001Js.g;
                setProp = _renderLegacy001Js.h;
                createComponent = _renderLegacy001Js.i;
                insert = _renderLegacy001Js.l;
                insertNode = _renderLegacy001Js.u;
            }, function(_utilsLegacy002Js) {
                hexColor = _utilsLegacy002Js.r;
            }, function(_RowLegacy008Js) {
                Row = _RowLegacy008Js.t;
            }, function(_stylesLegacy00gJs) {
                MaterialButtonText = _stylesLegacy00gJs.t;
            } ],
            execute: function execute() {
                _export("default", MaterialButtonsPage = function MaterialButtonsPage() {
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