System.register([ "./render-legacy-CxzEZ3fD.js", "./mergeProps-legacy-CtA2QWa1.js", "./Column-legacy-BZgRJ4Ur.js", "./state-legacy-CMKrwd0h.js" ], function(_export, _context) {
    var createElement, spread, createComponent, insert, setProp, createTextNode, insertNode, mergeProps, Column, setGlobalBackground, Box;
    return {
        setters: [ function(_renderLegacy001Js) {
            createElement = _renderLegacy001Js.a, spread = _renderLegacy001Js.h, createComponent = _renderLegacy001Js.i, 
            insert = _renderLegacy001Js.l, setProp = _renderLegacy001Js.m, createTextNode = _renderLegacy001Js.s, 
            insertNode = _renderLegacy001Js.u;
        }, function(_mergePropsLegacy003Js) {
            mergeProps = _mergePropsLegacy003Js.t;
        }, function(_ColumnLegacy007Js) {
            Column = _ColumnLegacy007Js.t;
        }, function(_stateLegacy00fJs) {
            setGlobalBackground = _stateLegacy00fJs.n;
        } ],
        execute: function() {
            Box = function(props) {
                return _el$ = createElement("view"), _el$2 = createElement("text"), insertNode(_el$, _el$2), 
                spread(_el$, mergeProps(props, {
                    height: 100,
                    color: 4278255615
                }), !0), insertNode(_el$2, createTextNode("Text element")), _el$;
                var _el$, _el$2;
            }, _export("default", _export("FlexMenu", function() {
                return setGlobalBackground(255), _el$4 = createElement("view"), setProp(_el$4, "right", 0), 
                setProp(_el$4, "display", "flex"), setProp(_el$4, "width", 400), setProp(_el$4, "flexBoundary", "fixed"), 
                setProp(_el$4, "color", 4294901856), setProp(_el$4, "flexDirection", "column"), 
                insert(_el$4, createComponent(Column, {
                    x: 50,
                    width: 300,
                    autofocus: !0,
                    get children() {
                        return [ createComponent(Box, {
                            marginTop: 50
                        }), createComponent(Column, {
                            flexItem: !1,
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
                })), _el$4;
                var _el$4;
            }));
        }
    };
});