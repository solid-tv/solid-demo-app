import { $ as onMount, a as createElement, h as spread, i as createComponent, m as setProp, q as createSignal, s as createTextNode, u as insertNode } from "./render-aZV73JYm.js";

import { t as mergeProps } from "./mergeProps-WuPuVjcv.js";

import { t as Column } from "./Column-Dwqo01zH.js";

import { t as Row } from "./Row-vBX47WKv.js";

import { r as styles_default } from "./styles-xHyKpT0b.js";

import { n as setGlobalBackground } from "./state-DcDkvIU9.js";

var FlexGrow = () => {
    const RowStyles = {
        display: "flex",
        justifyContent: "flexStart",
        width: 1600,
        height: 110,
        color: 4294967295
    }, rowTitle = {
        fontSize: 44,
        marginTop: 25,
        marginBottom: -20,
        skipFocus: !0
    }, red = 4278190335;
    function Block(props) {
        const styles = {
            width: props.flexGrow ? 0 : 200,
            height: 100,
            y: 5
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
    return createComponent(Column, {
        x: 160,
        get y() {
            return columnY();
        },
        gap: 30,
        height: 850,
        get width() {
            return RowStyles.width;
        },
        get style() {
            return styles_default.Column;
        },
        get children() {
            return [ (_el$2 = createElement("text"), insertNode(_el$2, createTextNode("Flex Start RTL")), 
            setProp(_el$2, "style", rowTitle), _el$2), createComponent(Row, {
                gap: 50,
                direction: "rtl",
                style: RowStyles,
                onFocus: onFocus,
                get children() {
                    return [ createComponent(Block, {
                        flexGrow: 1,
                        autofocus: !0,
                        color: red
                    }), createComponent(Block, {
                        flexGrow: 2,
                        color: 4287365375
                    }), createComponent(Block, {
                        color: 16711935
                    }) ];
                }
            }), (_el$4 = createElement("text"), insertNode(_el$4, createTextNode("Flex End with Flex Grow")), 
            setProp(_el$4, "style", rowTitle), _el$4), createComponent(Row, {
                gap: 50,
                style: RowStyles,
                onFocus: onFocus,
                get children() {
                    return [ createComponent(Block, {
                        color: 16711935
                    }), createComponent(Block, {
                        flexGrow: 1,
                        color: red
                    }), createComponent(Block, {
                        flexGrow: 2,
                        color: 4287365375
                    }) ];
                }
            }), (_el$6 = createElement("text"), insertNode(_el$6, createTextNode("Space Between with Flex Grow")), 
            setProp(_el$6, "style", rowTitle), _el$6), createComponent(Row, {
                gap: 50,
                justifyContent: "spaceBetween",
                style: RowStyles,
                onFocus: onFocus,
                get children() {
                    return [ createComponent(Block, {
                        flexGrow: 1,
                        color: red
                    }), createComponent(Block, {
                        flexGrow: 1,
                        flexOrder: -1,
                        color: 4287365375
                    }), createComponent(Block, {
                        flexGrow: 2,
                        color: 16711935
                    }) ];
                }
            }) ];
            var _el$6, _el$4, _el$2;
        }
    });
};

export { FlexGrow as default };