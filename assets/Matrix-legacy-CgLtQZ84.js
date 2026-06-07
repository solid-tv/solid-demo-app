(function() {
    System.register([ "./index-legacy-ATANrGUj.js" ], function(exports, module) {
        "use strict";
        var createElement, setProp, insert, createComponent, Column, For, Row;
        return {
            setters: [ function(module) {
                createElement = module.c;
                setProp = module.a;
                insert = module.k;
                createComponent = module.l;
                Column = module.C;
                For = module.F;
                Row = module.R;
            } ],
            execute: function execute() {
                var blockStyle = {
                    color: 1548615679,
                    scale: 1,
                    $focus: {
                        color: 4278255615,
                        scale: 1.1
                    },
                    transition: {
                        color: {
                            duration: .3
                        },
                        scale: {
                            duration: .3
                        }
                    }
                };
                var Matrix = exports("default", function() {
                    var rows = Array.from({
                        length: 1
                    });
                    var blocks = Array.from({
                        length: 6
                    });
                    return function() {
                        var _el$ = createElement("view");
                        setProp(_el$, "color", 505290495);
                        setProp(_el$, "width", 1920);
                        setProp(_el$, "height", 1080);
                        insert(_el$, createComponent(Column, {
                            x: 160,
                            y: 100,
                            gap: 50,
                            autofocus: true,
                            get children() {
                                return createComponent(For, {
                                    each: rows,
                                    children: function children() {
                                        return createComponent(Row, {
                                            gap: 30,
                                            height: 250,
                                            get children() {
                                                return createComponent(For, {
                                                    each: blocks,
                                                    children: function children() {
                                                        return function() {
                                                            var _el$2 = createElement("view");
                                                            setProp(_el$2, "width", 150);
                                                            setProp(_el$2, "height", 250);
                                                            setProp(_el$2, "style", blockStyle);
                                                            return _el$2;
                                                        }();
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        }));
                        return _el$;
                    }();
                });
            }
        };
    });
})();
