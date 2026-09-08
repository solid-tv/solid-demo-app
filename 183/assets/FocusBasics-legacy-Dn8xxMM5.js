System.register([ "./render-legacy-dLzA91Db.js", "./Row-legacy-BdzmVMNF.js", "./components-legacy-DpfK7YJT.js", "./state-legacy-C4TEpoVI.js" ], function(_export, _context) {
    var activeElement, createEffect, on, createElement, createComponent, insert, setProp, Row, Block, setGlobalBackground;
    return {
        setters: [ function(_renderLegacy002Js) {
            activeElement = _renderLegacy002Js.O, createEffect = _renderLegacy002Js.V, on = _renderLegacy002Js.Z, 
            createElement = _renderLegacy002Js.a, createComponent = _renderLegacy002Js.i, insert = _renderLegacy002Js.l, 
            setProp = _renderLegacy002Js.m;
        }, function(_RowLegacy00bJs) {
            Row = _RowLegacy00bJs.t;
        }, function(_componentsLegacy00eJs) {
            Block = _componentsLegacy00eJs.n;
        }, function(_stateLegacy00jJs) {
            setGlobalBackground = _stateLegacy00jJs.n;
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