System.register([ "./render-legacy-t4wUAioc.js", "./Row-legacy-C4R_D95v.js", "./components-legacy-CMcgiR3G.js", "./state-legacy-CIkOTHs-.js" ], function(_export, _context) {
    var createEffect, on, createElement, setProp, createComponent, activeElement, insert, Row, Block, setGlobalBackground;
    return {
        setters: [ function(_renderLegacy002Js) {
            createEffect = _renderLegacy002Js.H, on = _renderLegacy002Js.Q, createElement = _renderLegacy002Js.a, 
            setProp = _renderLegacy002Js.h, createComponent = _renderLegacy002Js.i, activeElement = _renderLegacy002Js.k, 
            insert = _renderLegacy002Js.l;
        }, function(_RowLegacy00aJs) {
            Row = _RowLegacy00aJs.t;
        }, function(_componentsLegacy00dJs) {
            Block = _componentsLegacy00dJs.n;
        }, function(_stateLegacy00iJs) {
            setGlobalBackground = _stateLegacy00iJs.n;
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