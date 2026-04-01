import { c as createComponent, C as Column, T as Text, R as Row, F as For, a as createSignal, V as View, H as memo } from "./index-BEqLWudM.js";

const Card = props => {
    const [focused, setFocused] = createSignal(false);
    return createComponent(View, {
        width: 180,
        height: 100,
        get color() {
            return focused() ? 858993561 : 858993663;
        },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 10,
        padding: 10,
        onFocusChanged: setFocused,
        get children() {
            return [ createComponent(Text, {
                fontSize: 20,
                color: 4294967295,
                get children() {
                    return [ "Item ", memo(() => String(props.index)) ];
                }
            }), createComponent(View, {
                color: 65535,
                padding: 8,
                borderRadius: 4,
                height: 40,
                display: "flex",
                alignItems: "center",
                get children() {
                    return createComponent(Text, {
                        fontSize: 16,
                        color: 4294967295,
                        children: "Button"
                    });
                }
            }) ];
        }
    });
};

function ComplexFlex() {
    const items = Array.from({
        length: 8
    }).map((_, i) => i);
    return createComponent(Column, {
        width: 1720,
        color: 255,
        display: "flex",
        flexDirection: "column",
        height: 100,
        gap: 20,
        y: 50,
        x: 170,
        autofocus: true,
        scroll: "none",
        selected: 1,
        get children() {
            return [ createComponent(Text, {
                skipFocus: true,
                fontSize: 40,
                color: 4294967295,
                marginBottom: 20,
                children: "Complex Flex Layout"
            }), createComponent(Row, {
                width: 1400,
                gap: 20,
                scroll: "none",
                get children() {
                    return createComponent(For, {
                        each: items,
                        children: item => createComponent(Card, {
                            index: item
                        })
                    });
                }
            }), createComponent(Row, {
                width: 1400,
                gap: 20,
                scroll: "none",
                get children() {
                    return createComponent(For, {
                        each: items,
                        children: item => createComponent(Card, {
                            index: item
                        })
                    });
                }
            }), createComponent(Row, {
                width: 1400,
                gap: 20,
                scroll: "none",
                get children() {
                    return createComponent(For, {
                        each: items,
                        children: item => createComponent(Card, {
                            index: item
                        })
                    });
                }
            }), createComponent(Row, {
                width: 1400,
                gap: 20,
                scroll: "none",
                get children() {
                    return createComponent(For, {
                        each: items,
                        children: item => createComponent(Card, {
                            index: item
                        })
                    });
                }
            }), createComponent(Row, {
                width: 1400,
                gap: 20,
                scroll: "none",
                get children() {
                    return createComponent(For, {
                        each: items,
                        children: item => createComponent(Card, {
                            index: item
                        })
                    });
                }
            }), createComponent(Row, {
                width: 1400,
                gap: 20,
                scroll: "none",
                get children() {
                    return createComponent(For, {
                        each: items,
                        children: item => createComponent(Card, {
                            index: item
                        })
                    });
                }
            }), createComponent(Row, {
                width: 1400,
                gap: 20,
                scroll: "none",
                get children() {
                    return createComponent(For, {
                        each: items,
                        children: item => createComponent(Card, {
                            index: item
                        })
                    });
                }
            }) ];
        }
    });
}

export { ComplexFlex as default };
