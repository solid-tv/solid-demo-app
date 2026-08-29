(function() {
    System.register([ "./render-legacy-DmBmFa1k.js", "./mergeProps-legacy-CrgdDybb.js", "./Column-legacy-Doa24Uvb.js", "./state-legacy-CPHXLYcn.js" ], function(_export, _context) {
        "use strict";
        var createElement, spread, createComponent, insert, setProp, createTextNode, insertNode, mergeProps, Column, setGlobalBackground, Box, FlexMenu;
        return {
            setters: [ function(_renderLegacy001Js) {
                createElement = _renderLegacy001Js.a;
                spread = _renderLegacy001Js.h;
                createComponent = _renderLegacy001Js.i;
                insert = _renderLegacy001Js.l;
                setProp = _renderLegacy001Js.m;
                createTextNode = _renderLegacy001Js.s;
                insertNode = _renderLegacy001Js.u;
            }, function(_mergePropsLegacy003Js) {
                mergeProps = _mergePropsLegacy003Js.t;
            }, function(_ColumnLegacy008Js) {
                Column = _ColumnLegacy008Js.t;
            }, function(_stateLegacy00iJs) {
                setGlobalBackground = _stateLegacy00iJs.n;
            } ],
            execute: function execute() {
                Box = function Box(props) {
                    return function() {
                        var _el$ = createElement("view"), _el$2 = createElement("text");
                        insertNode(_el$, _el$2);
                        spread(_el$, mergeProps(props, {
                            height: 100,
                            color: 4278255615
                        }), true);
                        insertNode(_el$2, createTextNode("Text element"));
                        return _el$;
                    }();
                };
                _export("default", _export("FlexMenu", FlexMenu = function FlexMenu() {
                    setGlobalBackground(255);
                    return function() {
                        var _el$4 = createElement("view");
                        setProp(_el$4, "right", 0);
                        setProp(_el$4, "display", "flex");
                        setProp(_el$4, "width", 400);
                        setProp(_el$4, "flexBoundary", "fixed");
                        setProp(_el$4, "color", 4294901856);
                        setProp(_el$4, "flexDirection", "column");
                        insert(_el$4, createComponent(Column, {
                            x: 50,
                            width: 300,
                            autofocus: true,
                            get children() {
                                return [ createComponent(Box, {
                                    marginTop: 50
                                }), createComponent(Column, {
                                    flexItem: false,
                                    justifyContent: "flexEnd",
                                    get children() {
                                        return [ createComponent(Box, {
                                            flexOrder: 1
                                        }), createComponent(Box, {
                                            flexOrder: 2,
                                            marginBottom: 50
                                        }) ];
                                    }
                                }) ];
                            }
                        }));
                        return _el$4;
                    }();
                }));
            }
        };
    });
})();