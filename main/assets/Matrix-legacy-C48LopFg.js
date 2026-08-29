(function() {
    System.register([ "./render-legacy-Dr9NQFGF.js", "./Column-legacy-CtHoPFiF.js", "./Row-legacy-Cs4nGx1v.js" ], function(_export, _context) {
        "use strict";
        var For, createElement, createComponent, insert, setProp, Column, Row, blockStyle, Matrix;
        return {
            setters: [ function(_renderLegacy001Js) {
                For = _renderLegacy001Js.A;
                createElement = _renderLegacy001Js.a;
                createComponent = _renderLegacy001Js.i;
                insert = _renderLegacy001Js.l;
                setProp = _renderLegacy001Js.m;
            }, function(_ColumnLegacy008Js) {
                Column = _ColumnLegacy008Js.t;
            }, function(_RowLegacy009Js) {
                Row = _RowLegacy009Js.t;
            } ],
            execute: function execute() {
                blockStyle = {
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
                _export("default", Matrix = function Matrix() {
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