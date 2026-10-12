System.register([ "./render-legacy-CxzEZ3fD.js", "./Row-legacy-CUij3dia.js", "./components-legacy-Cb-vfdox.js", "./state-legacy-CMKrwd0h.js" ], function(_export, _context) {
    var activeElement, createEffect, on, createElement, createComponent, insert, setProp, Row, Block, setGlobalBackground;
    return {
        setters: [ function(_renderLegacy001Js) {
            activeElement = _renderLegacy001Js.O, createEffect = _renderLegacy001Js.V, on = _renderLegacy001Js.Z, 
            createElement = _renderLegacy001Js.a, createComponent = _renderLegacy001Js.i, insert = _renderLegacy001Js.l, 
            setProp = _renderLegacy001Js.m;
        }, function(_RowLegacy008Js) {
            Row = _RowLegacy008Js.t;
        }, function(_componentsLegacy00cJs) {
            Block = _componentsLegacy00cJs.n;
        }, function(_stateLegacy00fJs) {
            setGlobalBackground = _stateLegacy00fJs.n;
        } ],
        execute: function() {
            _export("default", function() {
                var rowContainer, myBlock, redBlock, _el$;
                return setGlobalBackground(858993663), createEffect(on(activeElement, function(elm) {
                    console.log(elm);
                }, {
                    defer: !0
                })), _el$ = createElement("view"), setProp(_el$, "x", 250), setProp(_el$, "y", 200), 
                setProp(_el$, "onUp", function() {
                    return myBlock.setFocus();
                }), insert(_el$, createComponent(Block, {
                    ref: function(r$) {
                        "function" == typeof myBlock ? myBlock(r$) : myBlock = r$;
                    },
                    color: 303226879,
                    onDown: function() {
                        return rowContainer.setFocus();
                    },
                    autofocus: !0
                }), null), insert(_el$, createComponent(Row, {
                    y: 200,
                    ref: function(r$) {
                        "function" == typeof rowContainer ? rowContainer(r$) : rowContainer = r$;
                    },
                    get children() {
                        return [ createComponent(Block, {
                            ref: function(r$) {
                                "function" == typeof redBlock ? redBlock(r$) : redBlock = r$;
                            },
                            color: 4278190335
                        }), createComponent(Block, {
                            color: 678303743
                        }), createComponent(Block, {
                            color: 471635967
                        }) ];
                    }
                }), null), _el$;
            });
        }
    };
});