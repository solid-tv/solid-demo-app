System.register([ "./render-legacy-CxzEZ3fD.js", "./Column-legacy-BZgRJ4Ur.js", "./Row-legacy-CUij3dia.js" ], function(_export, _context) {
    var For, createElement, createComponent, insert, setProp, Column, Row, blockStyle;
    return {
        setters: [ function(_renderLegacy001Js) {
            For = _renderLegacy001Js.A, createElement = _renderLegacy001Js.a, createComponent = _renderLegacy001Js.i, 
            insert = _renderLegacy001Js.l, setProp = _renderLegacy001Js.m;
        }, function(_ColumnLegacy007Js) {
            Column = _ColumnLegacy007Js.t;
        }, function(_RowLegacy008Js) {
            Row = _RowLegacy008Js.t;
        } ],
        execute: function() {
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
            }, _export("default", function() {
                var _el$, rows = Array.from({
                    length: 1
                }), blocks = Array.from({
                    length: 6
                });
                return _el$ = createElement("view"), setProp(_el$, "color", 505290495), setProp(_el$, "width", 1920), 
                setProp(_el$, "height", 1080), insert(_el$, createComponent(Column, {
                    x: 160,
                    y: 100,
                    gap: 50,
                    autofocus: !0,
                    get children() {
                        return createComponent(For, {
                            each: rows,
                            children: function() {
                                return createComponent(Row, {
                                    gap: 30,
                                    height: 250,
                                    get children() {
                                        return createComponent(For, {
                                            each: blocks,
                                            children: function() {
                                                return _el$2 = createElement("view"), setProp(_el$2, "width", 150), setProp(_el$2, "height", 250), 
                                                setProp(_el$2, "style", blockStyle), _el$2;
                                                var _el$2;
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                })), _el$;
            });
        }
    };
});