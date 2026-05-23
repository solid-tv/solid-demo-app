import { o as onMount, s as setGlobalBackground, t as theme, c as createComponent, T as Text, V as View, F as For, m as mergeProps, H as memo } from "./index-h17uciL9.js";

const BASELINE_MODES = [ "optical", "cap", "x", "linebox" ];

function getActiveBaseline() {
    const param = new URLSearchParams(window.location.search).get("textBaseline");
    if (param === "optical" || param === "cap" || param === "x" || param === "linebox") return param;
    return "optical";
}

const PageTitle = {
    fontSize: 42,
    fontWeight: "bold",
    color: theme.textPrimary
};

const SectionTitle = {
    fontSize: 26,
    fontWeight: "bold",
    color: theme.textPrimary
};

const SectionNote = {
    fontSize: 18,
    color: theme.textSecondary,
    contain: "width",
    width: 1600,
    lineHeight: 24
};

const BoxBase = {
    color: 0,
    border: {
        color: theme.color.grey,
        width: 1
    }
};

const Caption = {
    fontSize: 17,
    color: theme.textSecondary,
    contain: "width"
};

function CenterLine(props) {
    return createComponent(View, {
        flexItem: false,
        x: 0,
        get y() {
            return props.y;
        },
        get width() {
            return props.width;
        },
        height: 1,
        get color() {
            return theme.color.red;
        }
    });
}

function Section1(props) {
    const boxW = 240;
    const boxH = 80;
    const wrapperH = 140;
    return createComponent(View, {
        y: 80,
        x: 200,
        autofocus: true,
        get children() {
            return [ createComponent(Text, {
                style: SectionTitle,
                children: "1. Per-line anchor: textBaselineMode"
            }), createComponent(Text, {
                style: SectionNote,
                y: 38,
                children: "Global renderer setting. Default is 'optical'. Reload with ?textBaseline=optical | cap | x | linebox to compare."
            }), createComponent(View, {
                y: 80,
                display: "flex",
                flexDirection: "row",
                gap: 40,
                get children() {
                    return createComponent(For, {
                        each: BASELINE_MODES,
                        children: mode => {
                            const isActive = mode === props.active;
                            return createComponent(View, {
                                width: boxW,
                                height: wrapperH,
                                get children() {
                                    return [ createComponent(View, mergeProps(BoxBase, {
                                        width: boxW,
                                        height: boxH,
                                        get border() {
                                            return {
                                                color: isActive ? theme.color.blue : theme.color.grey,
                                                width: isActive ? 2 : 1
                                            };
                                        },
                                        get children() {
                                            return [ memo(() => isActive ? createComponent(Text, {
                                                fontSize: 40,
                                                lineHeight: boxH,
                                                centerX: true,
                                                get color() {
                                                    return theme.textPrimary;
                                                },
                                                children: "Button"
                                            }) : createComponent(Text, {
                                                x: boxW / 2,
                                                mountX: .5,
                                                fontSize: 18,
                                                lineHeight: boxH,
                                                get color() {
                                                    return theme.textSecondary;
                                                },
                                                children: "reload to view"
                                            })), createComponent(CenterLine, {
                                                y: boxH / 2,
                                                width: boxW
                                            }) ];
                                        }
                                    })), createComponent(Text, {
                                        style: Caption,
                                        y: boxH + 14,
                                        get color() {
                                            return isActive ? theme.color.blue : theme.textSecondary;
                                        },
                                        children: isActive ? "'".concat(mode, "' (active)") : "'".concat(mode, "'")
                                    }) ];
                                }
                            });
                        }
                    });
                }
            }) ];
        }
    });
}

function Section2() {
    const aligns = [ "top", "middle", "bottom" ];
    const boxW = 240;
    const boxH = 140;
    return createComponent(View, {
        y: 330,
        x: 200,
        get children() {
            return [ createComponent(Text, {
                style: SectionTitle,
                children: "2. verticalAlign with maxHeight"
            }), createComponent(Text, {
                style: SectionNote,
                y: 38,
                children: "Same text in ".concat(boxW, "x").concat(boxH, " boxes. Red line marks the visual center.")
            }), createComponent(View, {
                y: 80,
                display: "flex",
                flexDirection: "row",
                gap: 40,
                get children() {
                    return createComponent(For, {
                        each: aligns,
                        children: align => createComponent(View, {
                            width: boxW,
                            height: boxH + 40,
                            get children() {
                                return [ createComponent(View, mergeProps(BoxBase, {
                                    width: boxW,
                                    height: boxH,
                                    get children() {
                                        return [ createComponent(Text, {
                                            width: boxW,
                                            maxHeight: boxH,
                                            fontSize: 32,
                                            lineHeight: 46,
                                            verticalAlign: align,
                                            textAlign: "center",
                                            get color() {
                                                return theme.textPrimary;
                                            },
                                            children: "Centered"
                                        }), createComponent(CenterLine, {
                                            y: boxH / 2,
                                            width: boxW
                                        }) ];
                                    }
                                })), createComponent(Text, {
                                    style: Caption,
                                    y: boxH + 12,
                                    get children() {
                                        return [ "verticalAlign: '", align, "'" ];
                                    }
                                }) ];
                            }
                        })
                    });
                }
            }) ];
        }
    });
}

function Section3() {
    const letters = [ {
        ch: "A",
        size: 44
    }, {
        ch: "B",
        size: 80
    }, {
        ch: "C",
        size: 120
    } ];
    const rowHeight = 130;
    const labelW = 290;
    const boxW = 520;
    const captionX = labelW + boxW + 30;
    const Row = props => createComponent(View, {
        get y() {
            return props.y;
        },
        height: rowHeight,
        get children() {
            return [ createComponent(Text, {
                x: 0,
                y: rowHeight / 2,
                mountY: .5,
                fontSize: 20,
                fontWeight: "bold",
                get color() {
                    return theme.textPrimary;
                },
                contain: "width",
                width: labelW,
                get children() {
                    return props.label;
                }
            }), createComponent(View, mergeProps(BoxBase, {
                x: labelW,
                width: boxW,
                height: rowHeight,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "spaceEvenly",
                get children() {
                    return [ createComponent(For, {
                        each: letters,
                        children: l => props.useLineHeight ? createComponent(Text, {
                            get fontSize() {
                                return l.size;
                            },
                            lineHeight: rowHeight,
                            get color() {
                                return theme.textPrimary;
                            },
                            get children() {
                                return l.ch;
                            }
                        }) : createComponent(Text, {
                            get fontSize() {
                                return l.size;
                            },
                            get color() {
                                return theme.textPrimary;
                            },
                            get children() {
                                return l.ch;
                            }
                        })
                    }), createComponent(CenterLine, {
                        y: rowHeight / 2,
                        width: boxW
                    }) ];
                }
            })), createComponent(Text, {
                x: captionX,
                y: rowHeight / 2,
                mountY: .5,
                get style() {
                    return {
                        ...Caption,
                        width: 460
                    };
                },
                get children() {
                    return props.caption;
                }
            }) ];
        }
    });
    return createComponent(View, {
        y: 660,
        x: 200,
        get children() {
            return [ createComponent(Text, {
                style: SectionTitle,
                children: "3. alignItems vs lineHeight"
            }), createComponent(Text, {
                style: SectionNote,
                y: 38,
                children: "Both rows contain A/B/C at sizes 44/80/120 inside a flex row with alignItems: 'center'. Watch the cap-tops: only Row B aligns them."
            }), createComponent(Row, {
                y: 80,
                label: "Row A: fontSize only",
                caption: "Flex centers each node's bounding box. Cap-tops do not align.",
                useLineHeight: false
            }), createComponent(Row, {
                y: 230,
                label: "Row B: lineHeight ".concat(rowHeight),
                caption: "Each line-box matches the row height; textBaselineMode: 'cap' cap-centers each glyph. Cap-tops align.",
                useLineHeight: true
            }) ];
        }
    });
}

const TextCenteringPage = () => {
    const active = getActiveBaseline();
    onMount(() => {
        setGlobalBackground(theme.backgroundDark);
    });
    return [ createComponent(Text, {
        style: PageTitle,
        x: 200,
        y: 20,
        children: "Text Centering"
    }), createComponent(Section1, {
        active: active
    }), createComponent(Section2, {}), createComponent(Section3, {}), createComponent(Text, {
        get style() {
            return {
                ...Caption,
                width: 1600
            };
        },
        x: 200,
        y: 1030,
        children: "Note: verticalAlign no longer requires maxHeight - it resolves against the parent's height. For single-line text, setting lineHeight to the container height is usually all you need."
    }) ];
};

export { TextCenteringPage as default };
