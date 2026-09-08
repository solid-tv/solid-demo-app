System.register([ "./render-legacy-t4wUAioc.js", "./utils-legacy-B35bImB8.js", "./Row-legacy-C4R_D95v.js", "./styles-legacy-ByBLMtKI.js" ], function(_export, _context) {
    var createElement, mergeProps, spread, setProp, createComponent, insert, insertNode, hexColor, Row, MaterialButtonText;
    return {
        setters: [ function(_renderLegacy002Js) {
            createElement = _renderLegacy002Js.a, mergeProps = _renderLegacy002Js.f, spread = _renderLegacy002Js.g, 
            setProp = _renderLegacy002Js.h, createComponent = _renderLegacy002Js.i, insert = _renderLegacy002Js.l, 
            insertNode = _renderLegacy002Js.u;
        }, function(_utilsLegacy004Js) {
            hexColor = _utilsLegacy004Js.r;
        }, function(_RowLegacy00aJs) {
            Row = _RowLegacy00aJs.t;
        }, function(_stylesLegacy00hJs) {
            MaterialButtonText = _stylesLegacy00hJs.t;
        } ],
        execute: function() {
            _export("default", function() {
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
                }, MaterialButton = {
                    width: 386,
                    height: 136,
                    color: "0x715cabff",
                    $focus: {
                        color: "0x5a39a2ff"
                    },
                    disabled: {
                        color: "0x291d43ff"
                    }
                }, RoundedRectangle = [ "RoundedRectangle", {
                    radius: 65
                } ];
                function Button(props) {
                    return _el$ = createElement("view"), _el$2 = createElement("text"), insertNode(_el$, _el$2), 
                    spread(_el$, mergeProps(props, {
                        forwardStates: !0,
                        style: MaterialButton,
                        shader: RoundedRectangle
                    }), !0), setProp(_el$2, "style", MaterialButtonText), insert(_el$2, function() {
                        return props.children;
                    }), _el$;
                    var _el$, _el$2;
                }
                return createComponent(Row, {
                    style: RowStyles,
                    get children() {
                        return [ createComponent(Button, {
                            autofocus: !0,
                            onEnter: onEnter,
                            children: "Focused"
                        }), createComponent(Button, {
                            states: {
                                active: !0,
                                disabled: !1
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