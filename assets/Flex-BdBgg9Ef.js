import { b as createSignal, o as onMount, s as setGlobalBackground, l as createComponent, C as Column, c as createElement, n as insertNode, p as createTextNode, a as setProp, R as Row, O as styles, A as spread, q as mergeProps } from "./index-C8HFTxb9.js";

const FlexPage = () => {
    const RowStyles = {
        display: "flex",
        justifyContent: "flexStart",
        width: 1600,
        height: 110,
        color: 1303115263
    };
    const rowTitle = {
        fontSize: 44,
        marginTop: 25,
        marginBottom: -20,
        skipFocus: true
    };
    function Block(props) {
        const styles2 = {
            width: 200,
            height: 100,
            y: 5,
            color: 392801023
        };
        return (() => {
            var _el$ = createElement("view");
            spread(_el$, mergeProps(props, {
                style: styles2
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
            return styles.Column;
        },
        get children() {
            return [ (() => {
                var _el$2 = createElement("text");
                insertNode(_el$2, createTextNode("Flex Start"));
                setProp(_el$2, "style", rowTitle);
                return _el$2;
            })(), createComponent(Row, {
                gap: gap,
                style: RowStyles,
                onFocus: onFocus,
                get children() {
                    return [ createComponent(Block, {
                        autofocus: true
                    }), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}) ];
                }
            }), (() => {
                var _el$4 = createElement("text");
                insertNode(_el$4, createTextNode("Flex Start - Margin Left"));
                setProp(_el$4, "style", rowTitle);
                return _el$4;
            })(), createComponent(Row, {
                gap: gap,
                style: RowStyles,
                onFocus: onFocus,
                get children() {
                    return [ createComponent(Block, {
                        marginLeft: 100
                    }), createComponent(Block, {}), createComponent(Block, {
                        marginLeft: 100
                    }), createComponent(Block, {}), createComponent(Block, {}) ];
                }
            }), (() => {
                var _el$6 = createElement("text");
                insertNode(_el$6, createTextNode("Flex End"));
                setProp(_el$6, "style", rowTitle);
                return _el$6;
            })(), createComponent(Row, {
                gap: gap,
                justifyContent: "flexEnd",
                style: RowStyles,
                onFocus: onFocus,
                get children() {
                    return [ createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}) ];
                }
            }), (() => {
                var _el$8 = createElement("text");
                insertNode(_el$8, createTextNode("Flex End - Margin Right"));
                setProp(_el$8, "style", rowTitle);
                return _el$8;
            })(), createComponent(Row, {
                gap: gap,
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
            }), (() => {
                var _el$0 = createElement("text");
                insertNode(_el$0, createTextNode("Center"));
                setProp(_el$0, "style", rowTitle);
                return _el$0;
            })(), createComponent(Row, {
                gap: gap,
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
            }), (() => {
                var _el$10 = createElement("text");
                insertNode(_el$10, createTextNode("Space Between"));
                setProp(_el$10, "style", rowTitle);
                return _el$10;
            })(), createComponent(Row, {
                gap: gap,
                justifyContent: "spaceBetween",
                style: RowStyles,
                onFocus: onFocus,
                get children() {
                    return [ createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {
                        marginRight: 40
                    }) ];
                }
            }), (() => {
                var _el$12 = createElement("text");
                insertNode(_el$12, createTextNode("Space Evenly"));
                setProp(_el$12, "style", rowTitle);
                return _el$12;
            })(), createComponent(Row, {
                gap: gap,
                justifyContent: "spaceEvenly",
                style: RowStyles,
                onFocus: onFocus,
                get children() {
                    return [ createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {
                        marginLeft: 80
                    }), createComponent(Block, {}), createComponent(Block, {}) ];
                }
            }), (() => {
                var _el$14 = createElement("text");
                insertNode(_el$14, createTextNode("Flex Wrap"));
                setProp(_el$14, "style", rowTitle);
                return _el$14;
            })(), createComponent(Row, {
                gap: gap,
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
        }
    });
};

export { FlexPage as default };
