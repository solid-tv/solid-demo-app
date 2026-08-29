(function() {
    System.register([ "./render-legacy-zhspBKrd.js", "./Row-legacy-BZXAAvsN.js", "./components-legacy-CtMyJ2j1.js", "./state-legacy-CdoSGSvK.js" ], function(_export, _context) {
        "use strict";
        var createEffect, on, createElement, setProp, createComponent, activeElement, insert, Row, Block, setGlobalBackground, FocusPage;
        return {
            setters: [ function(_renderLegacy001Js) {
                createEffect = _renderLegacy001Js.H;
                on = _renderLegacy001Js.Q;
                createElement = _renderLegacy001Js.a;
                setProp = _renderLegacy001Js.h;
                createComponent = _renderLegacy001Js.i;
                activeElement = _renderLegacy001Js.k;
                insert = _renderLegacy001Js.l;
            }, function(_RowLegacy008Js) {
                Row = _RowLegacy008Js.t;
            }, function(_componentsLegacy00cJs) {
                Block = _componentsLegacy00cJs.n;
            }, function(_stateLegacy00hJs) {
                setGlobalBackground = _stateLegacy00hJs.n;
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