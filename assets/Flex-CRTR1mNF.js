import { $ as onMount, a as createElement, h as spread, i as createComponent, m as setProp, q as createSignal, s as createTextNode, u as insertNode } from "./render-aZV73JYm.js";

import { t as mergeProps } from "./mergeProps-WuPuVjcv.js";

import { t as Column } from "./Column-Dwqo01zH.js";

import { t as Row } from "./Row-vBX47WKv.js";

import { r as styles_default } from "./styles-xHyKpT0b.js";

import { n as setGlobalBackground } from "./state-DcDkvIU9.js";

var FlexPage = () => {
    const RowStyles = {
        display: "flex",
        justifyContent: "flexStart",
        width: 1600,
        height: 110,
        color: 1303115263
    }, rowTitle = {
        fontSize: 44,
        marginTop: 25,
        marginBottom: -20,
        skipFocus: !0
    };
    function Block(props) {
        const styles = {
            width: 200,
            height: 100,
            y: 5,
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
            return [ (_el$2 = createElement("text"), insertNode(_el$2, createTextNode("Flex Start")), 
            setProp(_el$2, "style", rowTitle), _el$2), createComponent(Row, {
                gap: 50,
                style: RowStyles,
                onFocus: onFocus,
                get children() {
                    return [ createComponent(Block, {
                        autofocus: !0
                    }), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}) ];
                }
            }), (_el$4 = createElement("text"), insertNode(_el$4, createTextNode("Flex Start - Margin Left")), 
            setProp(_el$4, "style", rowTitle), _el$4), createComponent(Row, {
                gap: 50,
                style: RowStyles,
                onFocus: onFocus,
                get children() {
                    return [ createComponent(Block, {
                        marginLeft: 100
                    }), createComponent(Block, {}), createComponent(Block, {
                        marginLeft: 100
                    }), createComponent(Block, {}), createComponent(Block, {}) ];
                }
            }), (_el$6 = createElement("text"), insertNode(_el$6, createTextNode("Flex End")), 
            setProp(_el$6, "style", rowTitle), _el$6), createComponent(Row, {
                gap: 50,
                justifyContent: "flexEnd",
                style: RowStyles,
                onFocus: onFocus,
                get children() {
                    return [ createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}) ];
                }
            }), (_el$8 = createElement("text"), insertNode(_el$8, createTextNode("Flex End - Margin Right")), 
            setProp(_el$8, "style", rowTitle), _el$8), createComponent(Row, {
                gap: 50,
                justifyContent: "flexEnd",
                style: RowStyles,
                onFocus: onFocus,
                get children() {
                    return [ createComponent(Block, {}), createComponent(Block, {
                        marginRight: 100
                    }), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {
                        marginRight: 100
                    }) ];
                }
            }), (_el$0 = createElement("text"), insertNode(_el$0, createTextNode("Center")), 
            setProp(_el$0, "style", rowTitle), _el$0), createComponent(Row, {
                gap: 50,
                justifyContent: "center",
                style: RowStyles,
                onFocus: onFocus,
                get children() {
                    return [ createComponent(Block, {}), createComponent(Block, {
                        marginLeft: 80
                    }), createComponent(Block, {}), createComponent(Block, {
                        marginLeft: 80
                    }), createComponent(Block, {}) ];
                }
            }), (_el$10 = createElement("text"), insertNode(_el$10, createTextNode("Space Between")), 
            setProp(_el$10, "style", rowTitle), _el$10), createComponent(Row, {
                gap: 50,
                justifyContent: "spaceBetween",
                style: RowStyles,
                onFocus: onFocus,
                get children() {
                    return [ createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {
                        marginRight: 40
                    }) ];
                }
            }), (_el$12 = createElement("text"), insertNode(_el$12, createTextNode("Space Evenly")), 
            setProp(_el$12, "style", rowTitle), _el$12), createComponent(Row, {
                gap: 50,
                justifyContent: "spaceEvenly",
                style: RowStyles,
                onFocus: onFocus,
                get children() {
                    return [ createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {
                        marginLeft: 80
                    }), createComponent(Block, {}), createComponent(Block, {}) ];
                }
            }), (_el$14 = createElement("text"), insertNode(_el$14, createTextNode("Flex Wrap")), 
            setProp(_el$14, "style", rowTitle), _el$14), createComponent(Row, {
                gap: 50,
                justifyContent: "flexStart",
                flexWrap: "wrap",
                alignItems: "center",
                style: RowStyles,
                onFocus: onFocus,
                get children() {
                    return [ createComponent(Block, {
                        width: 300
                    }), createComponent(Block, {
                        width: 300
                    }), createComponent(Block, {
                        width: 300,
                        alignSelf: "flexStart"
                    }), createComponent(Block, {
                        width: 300
                    }), createComponent(Block, {
                        width: 300
                    }), createComponent(Block, {
                        width: 300,
                        alignSelf: "flexEnd"
                    }), createComponent(Block, {
                        width: 300
                    }) ];
                }
            }) ];
            var _el$14, _el$12, _el$10, _el$0, _el$8, _el$6, _el$4, _el$2;
        }
    });
};

export { FlexPage as default };