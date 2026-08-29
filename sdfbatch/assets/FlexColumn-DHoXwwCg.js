import { $ as onMount, a as createElement, h as spread, i as createComponent, m as setProp, q as createSignal, s as createTextNode, u as insertNode } from "./render-T82LYRez.js";

import { r as hexColor } from "./utils-Cg2cS0Fc.js";

import { t as mergeProps } from "./mergeProps-CezQW3Bh.js";

import { t as Column } from "./Column-U9Hqwwgu.js";

import { t as Row } from "./Row-Buh_0LSZ.js";

import { n as setGlobalBackground } from "./state-mDNTraD8.js";

var FlexColumnPage = () => {
    const RowStyles = {
        display: "flex",
        justifyContent: "spaceEvenly",
        width: 1920,
        y: 100,
        height: 880,
        color: hexColor("00000000")
    };
    const ColumnStyles = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flexStart",
        color: 1303115263,
        height: 850,
        width: 60
    };
    const rowTitle = {
        fontSize: 44,
        y: 20,
        x: 150
    };
    function Block(props) {
        const styles = {
            width: 50,
            height: 80,
            x: 5,
            color: 392801023
        };
        return (() => {
            var _el$ = createElement("view");
            spread(_el$, mergeProps(props, {
                style: styles
            }), false);
            return _el$;
        })();
    }
    const [columnY, setColumnY] = createSignal(50);
    function onFocus() {
        this.children[this.selected || 0].setFocus();
        setColumnY(150 + (this.y || 0) * -1);
    }
    onMount(() => {
        setGlobalBackground(858993663);
    });
    const gap = 50;
    return [ (() => {
        var _el$2 = createElement("text");
        insertNode(_el$2, createTextNode(`Start, MarginTop, End, MarginBottom, Center, Between, Evenly`));
        setProp(_el$2, "style", rowTitle);
        return _el$2;
    })(), createComponent(Row, {
        gap: gap,
        style: RowStyles,
        onFocus: onFocus,
        get children() {
            return [ createComponent(Column, {
                gap: 30,
                style: ColumnStyles,
                get children() {
                    return [ createComponent(Block, {
                        autofocus: true
                    }), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}) ];
                }
            }), createComponent(Column, {
                gap: gap,
                style: ColumnStyles,
                onFocus: onFocus,
                get children() {
                    return [ createComponent(Block, {
                        marginTop: 100
                    }), createComponent(Block, {}), createComponent(Block, {
                        marginTop: 100
                    }), createComponent(Block, {}), createComponent(Block, {}) ];
                }
            }), createComponent(Column, {
                gap: gap,
                justifyContent: "flexEnd",
                style: ColumnStyles,
                debug: true,
                onFocus: onFocus,
                get children() {
                    return [ createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}) ];
                }
            }), createComponent(Column, {
                gap: gap,
                justifyContent: "flexEnd",
                style: ColumnStyles,
                onFocus: onFocus,
                get children() {
                    return [ createComponent(Block, {}), createComponent(Block, {
                        marginBottom: 100
                    }), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {
                        marginBottom: 100
                    }) ];
                }
            }), createComponent(Column, {
                gap: gap,
                justifyContent: "center",
                style: ColumnStyles,
                onFocus: onFocus,
                get children() {
                    return [ createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}) ];
                }
            }), createComponent(Column, {
                gap: gap,
                justifyContent: "spaceBetween",
                style: ColumnStyles,
                onFocus: onFocus,
                get children() {
                    return [ createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}) ];
                }
            }), createComponent(Column, {
                gap: gap,
                justifyContent: "spaceEvenly",
                style: ColumnStyles,
                onFocus: onFocus,
                get children() {
                    return [ createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}) ];
                }
            }), createComponent(Column, {
                gap: gap,
                rowGap: 0,
                flexWrap: "wrap",
                alignItems: "center",
                style: ColumnStyles,
                onFocus: onFocus,
                get children() {
                    return [ createComponent(Block, {
                        height: 200
                    }), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {
                        height: 200
                    }), createComponent(Block, {}), createComponent(Block, {
                        height: 200
                    }), createComponent(Block, {}) ];
                }
            }) ];
        }
    }) ];
};

export { FlexColumnPage as default };