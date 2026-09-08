System.register([ "./render-legacy-BWVYYcsn.js", "./utils-legacy-DWRDQyJm.js", "./mergeProps-legacy-D2-w7VmI.js", "./Row-legacy-BhL2xbQP.js", "./styles-legacy--qMSUlWV.js" ], function(_export, _context) {
    var createElement, spread, createComponent, insert, setProp, insertNode, hexColor, mergeProps, Row, MaterialButtonText;
    return {
        setters: [ function(_renderLegacy002Js) {
            createElement = _renderLegacy002Js.a, spread = _renderLegacy002Js.h, createComponent = _renderLegacy002Js.i, 
            insert = _renderLegacy002Js.l, setProp = _renderLegacy002Js.m, insertNode = _renderLegacy002Js.u;
        }, function(_utilsLegacy004Js) {
            hexColor = _utilsLegacy004Js.r;
        }, function(_mergePropsLegacy005Js) {
            mergeProps = _mergePropsLegacy005Js.t;
        }, function(_RowLegacy00bJs) {
            Row = _RowLegacy00bJs.t;
        }, function(_stylesLegacy00iJs) {
            MaterialButtonText = _stylesLegacy00iJs.t;
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