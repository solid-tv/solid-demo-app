import { b as createSignal, o as onMount, s as setGlobalBackground, l as createComponent, C as Column, c as createElement, n as insertNode, p as createTextNode, a as setProp, R as Row, O as styles, A as spread, q as mergeProps } from "./index-B7fHaGc8.js";

const FlexGrow = () => {
    const RowStyles = {
        display: "flex",
        justifyContent: "flexStart",
        width: 1600,
        height: 110,
        color: 4294967295
    };
    const rowTitle = {
        fontSize: 44,
        marginTop: 25,
        marginBottom: -20,
        skipFocus: true
    };
    const red = 4278190335;
    const darkorange = 4287365375;
    const green = 16711935;
    function Block(props) {
        const styles2 = {
            width: props.flexGrow ? 0 : 200,
            height: 100,
            y: 5
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
                insertNode(_el$2, createTextNode("Flex Start RTL"));
                setProp(_el$2, "style", rowTitle);
                return _el$2;
            })(), createComponent(Row, {
                gap: gap,
                direction: "rtl",
                style: RowStyles,
                onFocus: onFocus,
                get children() {
                    return [ createComponent(Block, {
                        flexGrow: 1,
                        autofocus: true,
                        color: red
                    }), createComponent(Block, {
                        flexGrow: 2,
                        color: darkorange
                    }), createComponent(Block, {
                        color: green
                    }) ];
                }
            }), (() => {
                var _el$4 = createElement("text");
                insertNode(_el$4, createTextNode("Flex End with Flex Grow"));
                setProp(_el$4, "style", rowTitle);
                return _el$4;
            })(), createComponent(Row, {
                gap: gap,
                style: RowStyles,
                onFocus: onFocus,
                get children() {
                    return [ createComponent(Block, {
                        color: green
                    }), createComponent(Block, {
                        flexGrow: 1,
                        color: red
                    }), createComponent(Block, {
                        flexGrow: 2,
                        color: darkorange
                    }) ];
                }
            }), (() => {
                var _el$6 = createElement("text");
                insertNode(_el$6, createTextNode("Space Between with Flex Grow"));
                setProp(_el$6, "style", rowTitle);
                return _el$6;
            })(), createComponent(Row, {
                gap: gap,
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
                        color: darkorange
                    }), createComponent(Block, {
                        flexGrow: 2,
                        color: green
                    }) ];
                }
            }) ];
        }
    });
};

export { FlexGrow as default };
