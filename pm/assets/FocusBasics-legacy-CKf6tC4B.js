(function() {
    System.register([ "./render-legacy-BcGhlmZk.js", "./Row-legacy-X6Hwq6V8.js", "./components-legacy-DRMoEX8o.js", "./state-legacy-2LKtSLYa.js" ], function(_export, _context) {
        "use strict";
        var on, activeElement, createEffect, createElement, createComponent, insert, setProp, Row, Block, setGlobalBackground, FocusPage;
        return {
            setters: [ function(_renderLegacy001Js) {
                on = _renderLegacy001Js.$;
                activeElement = _renderLegacy001Js.A;
                createEffect = _renderLegacy001Js.U;
                createElement = _renderLegacy001Js.a;
                createComponent = _renderLegacy001Js.i;
                insert = _renderLegacy001Js.l;
                setProp = _renderLegacy001Js.m;
            }, function(_RowLegacy009Js) {
                Row = _RowLegacy009Js.t;
            }, function(_componentsLegacy00dJs) {
                Block = _componentsLegacy00dJs.n;
            }, function(_stateLegacy00iJs) {
                setGlobalBackground = _stateLegacy00iJs.n;
            } ],
            execute: function execute() {
                _export("default", FocusPage = function FocusPage() {
                    setGlobalBackground(858993663);
                    var rowContainer, myBlock, redBlock;
                    createEffect(on(activeElement, function(elm) {
                        console.log(elm);
                    }, {
                        defer: true
                    }));
                    return function() {
                        var _el$ = createElement("view");
                        setProp(_el$, "x", 250);
                        setProp(_el$, "y", 200);
                        setProp(_el$, "onUp", function() {
                            return myBlock.setFocus();
                        });
                        insert(_el$, createComponent(Block, {
                            ref: function ref(r$) {
                                var _ref$ = myBlock;
                                typeof _ref$ === "function" ? _ref$(r$) : myBlock = r$;
                            },
                            color: 303226879,
                            onDown: function onDown() {
                                return rowContainer.setFocus();
                            },
                            autofocus: true
                        }), null);
                        insert(_el$, createComponent(Row, {
                            y: 200,
                            ref: function ref(r$) {
                                var _ref$2 = rowContainer;
                                typeof _ref$2 === "function" ? _ref$2(r$) : rowContainer = r$;
                            },
                            get children() {
                                return [ createComponent(Block, {
                                    ref: function ref(r$) {
                                        var _ref$3 = redBlock;
                                        typeof _ref$3 === "function" ? _ref$3(r$) : redBlock = r$;
                                    },
                                    color: 4278190335
                                }), createComponent(Block, {
                                    color: 678303743
                                }), createComponent(Block, {
                                    color: 471635967
                                }) ];
                            }
                        }), null);
                        return _el$;
                    }();
                });
            }
        };
    });
})();