import { h as hexColor, b as createSignal, o as onMount, s as setGlobalBackground, l as createComponent, c as createElement, n as insertNode, p as createTextNode, a as setProp, R as Row, C as Column, A as spread, q as mergeProps } from "./index-BOBQFh3x.js";

const FlexColumnPage = () => {
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
        width: 80
    };
    const rowTitle = {
        fontSize: 44,
        y: 20,
        x: 150
    };
    function Block(props) {
        const styles = {
            width: randSize(),
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
    function randSize() {
        return Math.floor(Math.random() * 61) + 10;
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
        insertNode(_el$2, createTextNode("Start, MarginTop, End, MarginBottom, Center, Between, Evenly"));
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
                alignItems: "center",
                get children() {
                    return [ createComponent(Block, {
                        autofocus: true
                    }), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}), createComponent(Block, {}) ];
                }
            }), createComponent(Column, {
                gap: gap,
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
                gap: gap,
                alignItems: "flexEnd",
                justifyContent: "flexEnd",
                style: ColumnStyles,
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
            }) ];
        }
    }) ];
};

export { FlexColumnPage as default };
