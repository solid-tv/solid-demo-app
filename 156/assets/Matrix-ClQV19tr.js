import { a as createElement, h as setProp, i as createComponent, j as For, l as insert } from "./render-UQXSDH2t.js";

import { t as Column } from "./Column-B6a6wQRf.js";

import { t as Row } from "./Row-_H-XSkgI.js";

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
}, Matrix = () => {
    const rows = Array.from({
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
                children: () => createComponent(Row, {
                    gap: 30,
                    height: 250,
                    get children() {
                        return createComponent(For, {
                            each: blocks,
                            children: () => {
                                return _el$2 = createElement("view"), setProp(_el$2, "width", 150), setProp(_el$2, "height", 250), 
                                setProp(_el$2, "style", blockStyle), _el$2;
                                var _el$2;
                            }
                        });
                    }
                })
            });
        }
    })), _el$;
    var _el$;
};

export { Matrix as default };