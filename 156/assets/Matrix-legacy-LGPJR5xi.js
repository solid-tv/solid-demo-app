System.register([ "./render-legacy-t4wUAioc.js", "./Column-legacy-IFAmq0kZ.js", "./Row-legacy-C4R_D95v.js" ], function(_export, _context) {
    var createElement, setProp, createComponent, For, insert, Column, Row, blockStyle;
    return {
        setters: [ function(_renderLegacy002Js) {
            createElement = _renderLegacy002Js.a, setProp = _renderLegacy002Js.h, createComponent = _renderLegacy002Js.i, 
            For = _renderLegacy002Js.j, insert = _renderLegacy002Js.l;
        }, function(_ColumnLegacy009Js) {
            Column = _ColumnLegacy009Js.t;
        }, function(_RowLegacy00aJs) {
            Row = _RowLegacy00aJs.t;
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