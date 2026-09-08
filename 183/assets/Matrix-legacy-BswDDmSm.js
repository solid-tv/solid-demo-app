System.register([ "./render-legacy-dLzA91Db.js", "./Column-legacy-vZ9l9pny.js", "./Row-legacy-BdzmVMNF.js" ], function(_export, _context) {
    var For, createElement, createComponent, insert, setProp, Column, Row, blockStyle;
    return {
        setters: [ function(_renderLegacy002Js) {
            For = _renderLegacy002Js.A, createElement = _renderLegacy002Js.a, createComponent = _renderLegacy002Js.i, 
            insert = _renderLegacy002Js.l, setProp = _renderLegacy002Js.m;
        }, function(_ColumnLegacy00aJs) {
            Column = _ColumnLegacy00aJs.t;
        }, function(_RowLegacy00bJs) {
            Row = _RowLegacy00bJs.t;
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