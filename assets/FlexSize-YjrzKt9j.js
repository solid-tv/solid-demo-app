import { $ as onMount, a as createElement, h as spread, i as createComponent, m as setProp, q as createSignal, s as createTextNode, u as insertNode } from "./render-lE4-Voyn.js";

import { t as mergeProps } from "./mergeProps-BUoMC585.js";

import { t as Column } from "./Column-IdHzFHE8.js";

import { t as Row } from "./Row-D_-qNkCF.js";

import { r as styles_default } from "./styles-BcDKugwt.js";

import { n as setGlobalBackground } from "./state-hqLsD-Wm.js";

var FlexSizePage = () => {
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
        const styles = {
            width: 200,
            height: 100,
            y: 5,
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
        return Math.floor(Math.random() * 91) + 10;
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
            return styles_default.Column;
        },
        get children() {
            return [ (() => {
                var _el$2 = createElement("text");
                insertNode(_el$2, createTextNode(`Flex Start - AlignItems: center`));
                setProp(_el$2, "style", rowTitle);
                return _el$2;
            })(), createComponent(Row, {
                alignItems: "center",
                gap: gap,
                style: RowStyles,
                onFocus: onFocus,
                get children() {
                    return [ createComponent(Block, {
                        autofocus: true,
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
            }), (() => {
                var _el$4 = createElement("text");
                insertNode(_el$4, createTextNode(`Flex Start - Margin Left - AlignItems: flexStart`));
                setProp(_el$4, "style", rowTitle);
                return _el$4;
            })(), createComponent(Row, {
                gap: gap,
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
            }), (() => {
                var _el$6 = createElement("text");
                insertNode(_el$6, createTextNode(`Flex End - AlignItems: flexEnd`));
                setProp(_el$6, "style", rowTitle);
                return _el$6;
            })(), createComponent(Row, {
                gap: gap,
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
            }), (() => {
                var _el$8 = createElement("text");
                insertNode(_el$8, createTextNode(`Flex End - Margin Right`));
                setProp(_el$8, "style", rowTitle);
                return _el$8;
            })(), createComponent(Row, {
                gap: gap,
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
            }), (() => {
                var _el$0 = createElement("text");
                insertNode(_el$0, createTextNode(`Center - No Margin Support`));
                setProp(_el$0, "style", rowTitle);
                return _el$0;
            })(), createComponent(Row, {
                gap: gap,
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
            }), (() => {
                var _el$10 = createElement("text");
                insertNode(_el$10, createTextNode(`Space Between - No Margin Support`));
                setProp(_el$10, "style", rowTitle);
                return _el$10;
            })(), createComponent(Row, {
                gap: gap,
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
            }), (() => {
                var _el$12 = createElement("text");
                insertNode(_el$12, createTextNode(`Space Evenly - No Margin Support`));
                setProp(_el$12, "style", rowTitle);
                return _el$12;
            })(), createComponent(Row, {
                gap: gap,
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
            }), (() => {
                var _el$14 = createElement("text");
                insertNode(_el$14, createTextNode(`Space Around - No Margin Support`));
                setProp(_el$14, "style", rowTitle);
                return _el$14;
            })(), createComponent(Row, {
                gap: gap,
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
        }
    });
};

export { FlexSizePage as default };