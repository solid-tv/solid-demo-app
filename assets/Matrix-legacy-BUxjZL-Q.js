(function() {
    System.register([ "./render-legacy-D7c8BTw7.js", "./Column-legacy-rnCxnZWI.js", "./Row-legacy-Dr8qONdd.js" ], function(_export, _context) {
        "use strict";
        var createElement, setProp, createComponent, For, insert, Column, Row, blockStyle, Matrix;
        return {
            setters: [ function(_renderLegacy001Js) {
                createElement = _renderLegacy001Js.a;
                setProp = _renderLegacy001Js.h;
                createComponent = _renderLegacy001Js.i;
                For = _renderLegacy001Js.j;
                insert = _renderLegacy001Js.l;
            }, function(_ColumnLegacy007Js) {
                Column = _ColumnLegacy007Js.t;
            }, function(_RowLegacy008Js) {
                Row = _RowLegacy008Js.t;
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