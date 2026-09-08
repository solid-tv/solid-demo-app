import { $ as onMount, a as createElement, h as spread, i as createComponent, m as setProp, q as createSignal, s as createTextNode, u as insertNode } from "./render-BluGTzme.js";

import { r as hexColor } from "./utils-Bg0bHO1m.js";

import { t as mergeProps } from "./mergeProps-DtfyMHzu.js";

import { t as Column } from "./Column-B1V50V1o.js";

import { t as Row } from "./Row-D5dVS9Pi.js";

import { n as setGlobalBackground } from "./state-CPvSHvfN.js";

var FlexColumnPage = () => {
    const RowStyles = {
        display: "flex",
        justifyContent: "spaceEvenly",
        width: 1920,
        y: 100,
        height: 880,
        color: hexColor("00000000")
    }, ColumnStyles = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flexStart",
        color: 1303115263,
        height: 850,
        width: 80
    }, rowTitle = {
        fontSize: 44,
        y: 20,
        x: 150
    };
    function Block(props) {
        const styles = {
            width: Math.floor(61 * Math.random()) + 10,
            height: 80,
            x: 5,
            color: 392801023
        };
        return _el$ = createElement("view"), spread(_el$, mergeProps(props, {
            style: styles
        }), !1), _el$;
        var _el$;
    }
    const [columnY, setColumnY] = createSignal(50);
    function onFocus() {
        this.children[this.selected || 0].setFocus(), setColumnY(150 + -1 * (this.y || 0));
    }
    onMount(() => {
        setGlobalBackground(858993663);
    });
    return [ (_el$2 = createElement("text"), insertNode(_el$2, createTextNode("Start, MarginTop, End, MarginBottom, Center, Between, Evenly")), 
    setProp(_el$2, "style", rowTitle), _el$2), createComponent(Row, {
        gap: 50,
        style: RowStyles,
        onFocus: onFocus,
        get children() {
            return [ createComponent(Column, {
                gap: 30,
                style: ColumnStyles,
                alignItems: "center",
                get children() {
                    return [ createComponent(Block, {
                        autofocus: !0
                    }), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}) ];
                }
            }), createComponent(Column, {
                gap: 50,
                style: ColumnStyles,
                onFocus: onFocus,
                alignItems: "flexStart",
                get children() {
                    return [ createComponent(Block, {
                        marginTop: 100
                    }), createComponent(Block, {}), createComponent(Block, {
                        marginTop: 100
                    }), createComponent(Block, {}), createComponent(Block, {}) ];
                }
            }), createComponent(Column, {
                gap: 50,
                alignItems: "flexEnd",
                justifyContent: "flexEnd",
                style: ColumnStyles,
                onFocus: onFocus,
                get children() {
                    return [ createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}) ];
                }
            }), createComponent(Column, {
                gap: 50,
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
                gap: 50,
                justifyContent: "center",
                style: ColumnStyles,
                onFocus: onFocus,
                get children() {
                    return [ createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}) ];
                }
            }), createComponent(Column, {
                gap: 50,
                justifyContent: "spaceBetween",
                style: ColumnStyles,
                onFocus: onFocus,
                get children() {
                    return [ createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}) ];
                }
            }), createComponent(Column, {
                gap: 50,
                justifyContent: "spaceEvenly",
                style: ColumnStyles,
                onFocus: onFocus,
                get children() {
                    return [ createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}) ];
                }
            }) ];
        }
    }) ];
    var _el$2;
};

export { FlexColumnPage as default };