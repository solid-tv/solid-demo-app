import { o as onMount, l as createComponent, C as Column, a8 as Text, R as Row, F as For, b as createSignal, a9 as View, N as memo } from "./index-Da1eSW02.js";

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
        padding: [ 0, 10 ],
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
                padding: [ 0, 8 ],
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

function ComplexFlexCaps() {
    performance.mark("complexflexcaps-start");
    onMount(() => {
        performance.mark("complexflexcaps-end");
        performance.measure("ComplexFlexCaps Render", "complexflexcaps-start", "complexflexcaps-end");
        const measure = performance.getEntriesByName("ComplexFlexCaps Render").slice(-1)[0];
        console.log("ComplexFlexCaps Render duration: ".concat(measure == null ? void 0 : measure.duration, "ms"));
    });
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
                children: "Complex Flex Layout Capped View"
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

export { ComplexFlexCaps as default };
//# sourceMappingURL=ComplexFlexCaps-BHCkNmud.js.map
