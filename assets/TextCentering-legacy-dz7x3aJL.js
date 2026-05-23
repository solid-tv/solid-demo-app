(function() {
    function _typeof(o) {
        "@babel/helpers - typeof";
        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
            return typeof o;
        } : function(o) {
            return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
        }, _typeof(o);
    }
    function ownKeys(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            r && (o = o.filter(function(r) {
                return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })), t.push.apply(t, o);
        }
        return t;
    }
    function _objectSpread(e) {
        for (var r = 1; r < arguments.length; r++) {
            var t = null != arguments[r] ? arguments[r] : {};
            r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
                _defineProperty(e, r, t[r]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
            });
        }
        return e;
    }
    function _defineProperty(e, r, t) {
        return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[r] = t, e;
    }
    function _toPropertyKey(t) {
        var i = _toPrimitive(t, "string");
        return "symbol" == _typeof(i) ? i : i + "";
    }
    function _toPrimitive(t, r) {
        if ("object" != _typeof(t) || !t) return t;
        var e = t[Symbol.toPrimitive];
        if (void 0 !== e) {
            var i = e.call(t, r || "default");
            if ("object" != _typeof(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === r ? String : Number)(t);
    }
    System.register([ "./index-legacy-DWT0W8Cf.js" ], function(exports, module) {
        "use strict";
        var onMount, setGlobalBackground, theme, createComponent, Text, View, For, mergeProps, memo;
        return {
            setters: [ function(module) {
                onMount = module.o;
                setGlobalBackground = module.s;
                theme = module.t;
                createComponent = module.c;
                Text = module.T;
                View = module.V;
                For = module.F;
                mergeProps = module.m;
                memo = module.H;
            } ],
            execute: function execute() {
                var BASELINE_MODES = [ "optical", "cap", "x", "linebox" ];
                function getActiveBaseline() {
                    var param = new URLSearchParams(window.location.search).get("textBaseline");
                    if (param === "optical" || param === "cap" || param === "x" || param === "linebox") return param;
                    return "optical";
                }
                var PageTitle = {
                    fontSize: 42,
                    fontWeight: "bold",
                    color: theme.textPrimary
                };
                var SectionTitle = {
                    fontSize: 26,
                    fontWeight: "bold",
                    color: theme.textPrimary
                };
                var SectionNote = {
                    fontSize: 18,
                    color: theme.textSecondary,
                    contain: "width",
                    width: 1600,
                    lineHeight: 24
                };
                var BoxBase = {
                    color: 0,
                    border: {
                        color: theme.color.grey,
                        width: 1
                    }
                };
                var Caption = {
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
                    var boxW = 240;
                    var boxH = 80;
                    var wrapperH = 140;
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
                                        children: function children(mode) {
                                            var isActive = mode === props.active;
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
                                                            return [ memo(function() {
                                                                return isActive ? createComponent(Text, {
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
                                                                });
                                                            }), createComponent(CenterLine, {
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
                    var aligns = [ "top", "middle", "bottom" ];
                    var boxW = 240;
                    var boxH = 140;
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
                                        children: function children(align) {
                                            return createComponent(View, {
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
                                            });
                                        }
                                    });
                                }
                            }) ];
                        }
                    });
                }
                function Section3() {
                    var letters = [ {
                        ch: "A",
                        size: 44
                    }, {
                        ch: "B",
                        size: 80
                    }, {
                        ch: "C",
                        size: 120
                    } ];
                    var rowHeight = 130;
                    var labelW = 290;
                    var boxW = 520;
                    var captionX = labelW + boxW + 30;
                    var Row = function Row(props) {
                        return createComponent(View, {
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
                                            children: function children(l) {
                                                return props.useLineHeight ? createComponent(Text, {
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
                                                });
                                            }
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
                                        return _objectSpread(_objectSpread({}, Caption), {}, {
                                            width: 460
                                        });
                                    },
                                    get children() {
                                        return props.caption;
                                    }
                                }) ];
                            }
                        });
                    };
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
                var TextCenteringPage = exports("default", function() {
                    var active = getActiveBaseline();
                    onMount(function() {
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
                            return _objectSpread(_objectSpread({}, Caption), {}, {
                                width: 1600
                            });
                        },
                        x: 200,
                        y: 1030,
                        children: "Note: verticalAlign no longer requires maxHeight - it resolves against the parent's height. For single-line text, setting lineHeight to the container height is usually all you need."
                    }) ];
                });
            }
        };
    });
})();
