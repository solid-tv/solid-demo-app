import { c as createElement, a as setProp, k as insert, l as createComponent, C as Column, F as For, R as Row } from "./index-DrsAOZDl.js";

const blockStyle = {
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

const Matrix = () => {
    const rows = Array.from({
        length: 1
    });
    const blocks = Array.from({
        length: 6
    });
    return (() => {
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
                    children: () => createComponent(Row, {
                        gap: 30,
                        height: 250,
                        get children() {
                            return createComponent(For, {
                                each: blocks,
                                children: () => (() => {
                                    var _el$2 = createElement("view");
                                    setProp(_el$2, "width", 150);
                                    setProp(_el$2, "height", 250);
                                    setProp(_el$2, "style", blockStyle);
                                    return _el$2;
                                })()
                            });
                        }
                    })
                });
            }
        }));
        return _el$;
    })();
};

export { Matrix as default };
