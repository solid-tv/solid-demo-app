import { J as createSignal, a as createElement, et as onMount, f as mergeProps, g as spread, h as setProp, i as createComponent, s as createTextNode, u as insertNode } from "./render-UQXSDH2t.js";

import { t as Column } from "./Column-B6a6wQRf.js";

import { t as Row } from "./Row-_H-XSkgI.js";

import { r as styles_default } from "./styles-xHyKpT0b.js";

import { n as setGlobalBackground } from "./state-B_5okeWg.js";

var FlexSizePage = () => {
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
    function randSize() {
        return Math.floor(91 * Math.random()) + 10;
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
            return [ (_el$2 = createElement("text"), insertNode(_el$2, createTextNode("Flex Start - AlignItems: center")), 
            setProp(_el$2, "style", rowTitle), _el$2), createComponent(Row, {
                alignItems: "center",
                gap: 50,
                style: RowStyles,
                onFocus: onFocus,
                get children() {
                    return [ createComponent(Block, {
                        autofocus: !0,
                        get height() {
                            return randSize();
                        }
                    }), createComponent(Block, {
                        get height() {
                            return randSize();
                        }
                    }), createComponent(Block, {
                        get height() {
                            return randSize();
                        }
                    }), createComponent(Block, {
                        get height() {
                            return randSize();
                        }
                    }), createComponent(Block, {
                        get height() {
                            return randSize();
                        }
                    }) ];
                }
            }), (_el$4 = createElement("text"), insertNode(_el$4, createTextNode("Flex Start - Margin Left - AlignItems: flexStart")), 
            setProp(_el$4, "style", rowTitle), _el$4), createComponent(Row, {
                gap: 50,
                alignItems: "flexStart",
                style: RowStyles,
                onFocus: onFocus,
                get children() {
                    return [ createComponent(Block, {
                        marginLeft: 100,
                        get height() {
                            return randSize();
                        }
                    }), createComponent(Block, {
                        get height() {
                            return randSize();
                        }
                    }), createComponent(Block, {
                        marginLeft: 100,
                        get height() {
                            return randSize();
                        }
                    }), createComponent(Block, {
                        get height() {
                            return randSize();
                        }
                    }), createComponent(Block, {
                        get height() {
                            return randSize();
                        }
                    }) ];
                }
            }), (_el$6 = createElement("text"), insertNode(_el$6, createTextNode("Flex End - AlignItems: flexEnd")), 
            setProp(_el$6, "style", rowTitle), _el$6), createComponent(Row, {
                gap: 50,
                justifyContent: "flexEnd",
                alignItems: "flexEnd",
                style: RowStyles,
                onFocus: onFocus,
                get children() {
                    return [ createComponent(Block, {
                        get height() {
                            return randSize();
                        }
                    }), createComponent(Block, {
                        get height() {
                            return randSize();
                        }
                    }), createComponent(Block, {
                        get height() {
                            return randSize();
                        }
                    }), createComponent(Block, {
                        get height() {
                            return randSize();
                        }
                    }), createComponent(Block, {
                        get height() {
                            return randSize();
                        }
                    }) ];
                }
            }), (_el$8 = createElement("text"), insertNode(_el$8, createTextNode("Flex End - Margin Right")), 
            setProp(_el$8, "style", rowTitle), _el$8), createComponent(Row, {
                gap: 50,
                justifyContent: "flexEnd",
                style: RowStyles,
                onFocus: onFocus,
                get children() {
                    return [ createComponent(Block, {
                        get height() {
                            return randSize();
                        }
                    }), createComponent(Block, {
                        marginRight: 100,
                        get height() {
                            return randSize();
                        }
                    }), createComponent(Block, {
                        get height() {
                            return randSize();
                        }
                    }), createComponent(Block, {
                        get height() {
                            return randSize();
                        }
                    }), createComponent(Block, {
                        marginRight: 100,
                        get height() {
                            return randSize();
                        }
                    }) ];
                }
            }), (_el$0 = createElement("text"), insertNode(_el$0, createTextNode("Center - No Margin Support")), 
            setProp(_el$0, "style", rowTitle), _el$0), createComponent(Row, {
                gap: 50,
                justifyContent: "center",
                style: RowStyles,
                onFocus: onFocus,
                get children() {
                    return [ createComponent(Block, {
                        get height() {
                            return randSize();
                        }
                    }), createComponent(Block, {
                        get height() {
                            return randSize();
                        }
                    }), createComponent(Block, {
                        get height() {
                            return randSize();
                        }
                    }), createComponent(Block, {
                        get height() {
                            return randSize();
                        }
                    }), createComponent(Block, {
                        get height() {
                            return randSize();
                        }
                    }) ];
                }
            }), (_el$10 = createElement("text"), insertNode(_el$10, createTextNode("Space Between - No Margin Support")), 
            setProp(_el$10, "style", rowTitle), _el$10), createComponent(Row, {
                gap: 50,
                justifyContent: "spaceBetween",
                style: RowStyles,
                onFocus: onFocus,
                get children() {
                    return [ createComponent(Block, {
                        get height() {
                            return randSize();
                        }
                    }), createComponent(Block, {
                        get height() {
                            return randSize();
                        }
                    }), createComponent(Block, {
                        get height() {
                            return randSize();
                        }
                    }), createComponent(Block, {
                        get height() {
                            return randSize();
                        }
                    }), createComponent(Block, {
                        get height() {
                            return randSize();
                        }
                    }) ];
                }
            }), (_el$12 = createElement("text"), insertNode(_el$12, createTextNode("Space Evenly - No Margin Support")), 
            setProp(_el$12, "style", rowTitle), _el$12), createComponent(Row, {
                gap: 50,
                justifyContent: "spaceEvenly",
                style: RowStyles,
                onFocus: onFocus,
                get children() {
                    return [ createComponent(Block, {
                        get height() {
                            return randSize();
                        }
                    }), createComponent(Block, {
                        get height() {
                            return randSize();
                        }
                    }), createComponent(Block, {
                        get height() {
                            return randSize();
                        }
                    }), createComponent(Block, {
                        get height() {
                            return randSize();
                        }
                    }), createComponent(Block, {
                        get height() {
                            return randSize();
                        }
                    }) ];
                }
            }), (_el$14 = createElement("text"), insertNode(_el$14, createTextNode("Space Around - No Margin Support")), 
            setProp(_el$14, "style", rowTitle), _el$14), createComponent(Row, {
                gap: 50,
                justifyContent: "spaceAround",
                style: RowStyles,
                onFocus: onFocus,
                get children() {
                    return [ createComponent(Block, {
                        get height() {
                            return randSize();
                        }
                    }), createComponent(Block, {
                        get height() {
                            return randSize();
                        }
                    }), createComponent(Block, {
                        get height() {
                            return randSize();
                        }
                    }), createComponent(Block, {
                        get height() {
                            return randSize();
                        }
                    }), createComponent(Block, {
                        get height() {
                            return randSize();
                        }
                    }) ];
                }
            }) ];
            var _el$14, _el$12, _el$10, _el$0, _el$8, _el$6, _el$4, _el$2;
        }
    });
};

export { FlexSizePage as default };