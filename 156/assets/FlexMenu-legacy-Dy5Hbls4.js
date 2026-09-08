System.register([ "./render-legacy-t4wUAioc.js", "./Column-legacy-IFAmq0kZ.js", "./state-legacy-CIkOTHs-.js" ], function(_export, _context) {
    var createElement, mergeProps, spread, setProp, createComponent, insert, createTextNode, insertNode, Column, setGlobalBackground, Box;
    return {
        setters: [ function(_renderLegacy002Js) {
            createElement = _renderLegacy002Js.a, mergeProps = _renderLegacy002Js.f, spread = _renderLegacy002Js.g, 
            setProp = _renderLegacy002Js.h, createComponent = _renderLegacy002Js.i, insert = _renderLegacy002Js.l, 
            createTextNode = _renderLegacy002Js.s, insertNode = _renderLegacy002Js.u;
        }, function(_ColumnLegacy009Js) {
            Column = _ColumnLegacy009Js.t;
        }, function(_stateLegacy00iJs) {
            setGlobalBackground = _stateLegacy00iJs.n;
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