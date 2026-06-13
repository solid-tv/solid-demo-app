(function() {
    System.register([ "./index-legacy-BQgGJu5g.js" ], function(exports, module) {
        "use strict";
        var setGlobalBackground, createEffect, on, activeElement, createElement, setProp, insert, createComponent, Block, Row;
        return {
            setters: [ function(module) {
                setGlobalBackground = module.s;
                createEffect = module.i;
                on = module.j;
                activeElement = module.G;
                createElement = module.c;
                setProp = module.a;
                insert = module.k;
                createComponent = module.l;
                Block = module.V;
                Row = module.R;
            } ],
            execute: function execute() {
                var FocusPage = exports("default", function() {
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
