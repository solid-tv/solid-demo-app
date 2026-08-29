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
    System.register([ "./theme-legacy-CRa-Zkyx.js" ], function(_export, _context) {
        "use strict";
        var theme_default, roundPoster, styles_default, Button, TopBar, ButtonText, buttonStyles, MaterialButton, MaterialButtonText;
        return {
            setters: [ function(_themeLegacy00fJs) {
                theme_default = _themeLegacy00fJs.t;
            } ],
            execute: function execute() {
                roundPoster = new URLSearchParams(window.location.search).get("roundPoster") !== "false";
                _export("r", styles_default = {
                    Page: {
                        width: 1920,
                        height: 1080
                    },
                    headlineText: {
                        width: 1200,
                        height: 240,
                        x: 360,
                        y: 455,
                        contain: "both",
                        fontSize: 66,
                        textAlign: "center"
                    },
                    headlineSubText: {
                        width: 960,
                        height: 170,
                        x: 530,
                        y: 655,
                        contain: "both",
                        fontSize: 48,
                        textAlign: "center"
                    },
                    itemsContainer: {
                        width: theme_default.layout.screenW,
                        height: 800,
                        y: 560,
                        x: 0,
                        zIndex: 2
                    },
                    Thumbnail: {
                        width: 185,
                        height: 278,
                        scale: 1,
                        zIndex: 2,
                        placeholderColor: 4278190335,
                        transition: {
                            scale: {
                                duration: 250,
                                easing: "linear"
                            }
                        },
                        borderRadius: roundPoster ? 16 : 0,
                        border: {
                            width: 0,
                            color: 0
                        },
                        $focus: {
                            scale: 1.1,
                            border: {
                                color: theme_default.primaryLight,
                                width: 6,
                                gap: 4,
                                align: "outside"
                            }
                        },
                        $hover: {
                            scale: 1.07,
                            border: {
                                color: theme_default.primaryLight,
                                width: 3
                            }
                        },
                        $pressed: {
                            scale: 1.05,
                            border: {
                                color: theme_default.primary,
                                width: 6
                            }
                        }
                    },
                    FocusRing: {
                        borderRadius: 16,
                        width: 194,
                        height: 286,
                        y: -5,
                        x: -5,
                        zIndex: -1
                    },
                    FPS: {
                        color: 255,
                        height: 42,
                        width: 140,
                        x: 20,
                        y: 20,
                        zIndex: 100
                    },
                    FPSLabel: {
                        x: 10,
                        y: 0,
                        fontSize: 36,
                        textColor: 4294967295
                    },
                    FPSValue: {
                        x: 90,
                        y: 0,
                        fontSize: 36,
                        textColor: 4294967295
                    },
                    showHeadline: {
                        x: 70,
                        y: 20
                    },
                    headlineBlur: {
                        width: 1920,
                        height: 150,
                        x: 0,
                        y: 0,
                        zIndex: 14,
                        alpha: .9,
                        color: 255
                    },
                    RowTitle: {
                        height: 44,
                        width: 300,
                        marginBottom: -54,
                        fontSize: 26,
                        color: 4042322175,
                        zIndex: 2
                    },
                    Row: {
                        display: "flex",
                        justifyContent: "spaceBetween",
                        height: 300
                    },
                    Column: {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flexStart",
                        flexBoundary: "contain",
                        gap: 64,
                        width: theme_default.layout.screenW - 2 * theme_default.layout.marginX,
                        x: theme_default.layout.marginX + theme_default.layout.gutterX,
                        y: 48,
                        zIndex: 2
                    },
                    Rect: {
                        width: 250,
                        height: 100,
                        y: 10,
                        x: 300,
                        color: 65535
                    },
                    peopleBio: _objectSpread(_objectSpread({}, theme_default.typography.body1), {}, {
                        fontFamily: "Roboto",
                        fontWeight: "normal",
                        contain: "both",
                        width: 780,
                        height: 340
                    })
                });
                Button = {
                    width: 300,
                    height: 90,
                    color: theme_default.primary,
                    borderRadius: 12,
                    shadow: {
                        color: 122,
                        projection: [ 0, 16, 24, -6 ]
                    },
                    $focus: {
                        color: theme_default.primaryLight,
                        shadow: {
                            color: 122,
                            projection: [ 0, 16, 24, -6 ]
                        }
                    }
                };
                TopBar = {
                    color: 10918399,
                    height: 8,
                    y: 2,
                    x: -4,
                    width: Button.width + 8
                };
                ButtonText = {
                    fontSize: 26,
                    lineHeight: Button.height,
                    contain: "width",
                    textAlign: "center",
                    height: Button.height,
                    width: Button.width,
                    color: theme_default.textPrimary
                };
                _export("n", buttonStyles = {
                    container: Button,
                    topBar: TopBar,
                    text: ButtonText
                });
                MaterialButton = {
                    width: 386,
                    height: 136,
                    color: 1901898751,
                    $focus: {
                        color: 1513726719
                    },
                    $disabled: {
                        color: 689783807
                    }
                };
                _export("t", MaterialButtonText = {
                    fontSize: 32,
                    contain: "width",
                    textAlign: "center",
                    mountY: -.35,
                    color: 4294967295,
                    height: MaterialButton.height,
                    width: MaterialButton.width,
                    $focus: {
                        fontSize: 40
                    },
                    $disabled: {
                        color: 2425393407
                    }
                });
            }
        };
    });
})();