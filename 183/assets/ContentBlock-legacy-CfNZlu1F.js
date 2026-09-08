!function() {
    function _typeof(o) {
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
        return (r = function(t) {
            var i = function(t, r) {
                if ("object" != _typeof(t) || !t) return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var i = e.call(t, r || "default");
                    if ("object" != _typeof(i)) return i;
                    throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === r ? String : Number)(t);
            }(t, "string");
            return "symbol" == _typeof(i) ? i : i + "";
        }(r)) in e ? Object.defineProperty(e, r, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[r] = t, e;
    }
    function _slicedToArray(r, e) {
        return function(r) {
            if (Array.isArray(r)) return r;
        }(r) || function(r, l) {
            var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
            if (null != t) {
                var e, n, i, u, a = [], f = !0, o = !1;
                try {
                    if (i = (t = t.call(r)).next, 0 === l) {
                        if (Object(t) !== t) return;
                        f = !1;
                    } else for (;!(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) ;
                } catch (r) {
                    o = !0, n = r;
                } finally {
                    try {
                        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
                    } finally {
                        if (o) throw n;
                    }
                }
                return a;
            }
        }(r, e) || function(r, a) {
            if (r) {
                if ("string" == typeof r) return _arrayLikeToArray(r, a);
                var t = {}.toString.call(r).slice(8, -1);
                return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
            }
        }(r, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
    }
    function _arrayLikeToArray(r, a) {
        (null == a || a > r.length) && (a = r.length);
        for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
        return n;
    }
    System.register([ "./render-legacy-dLzA91Db.js", "./mergeProps-legacy-wREr8h3i.js", "./chainFunctions-legacy-BvO5JaCH.js", "./theme-legacy-Bdf29FvE.js" ], function(_export, _context) {
        var For, createMemo, Show, onCleanup, createEffect, createElement, effect, memo, use, spread, createComponent, insert, setProp, createSignal, createTextNode, insertNode, mergeProps, chainFunctions, theme_default, SAFETY_MARGIN, ContentBlockStyle, HeadlineStyles, Headline, DescriptionStyles, BadgeStyle, Description, Badge, MetaTextStyle, Metadata;
        function MarqueeText(props) {
            var speed = createMemo(function() {
                return props.speed || 200;
            }), delay = createMemo(function() {
                var _props$delay;
                return null !== (_props$delay = props.delay) && void 0 !== _props$delay ? _props$delay : 1e3;
            }), scrollGap = createMemo(function() {
                var _props$scrollGap;
                return null !== (_props$scrollGap = props.scrollGap) && void 0 !== _props$scrollGap ? _props$scrollGap : .5 * props.clipWidth;
            }), _createSignal2 = _slicedToArray(createSignal(0), 2), textWidth = _createSignal2[0], setTextWidth = _createSignal2[1], isTextOverflowing = createMemo(function() {
                return textWidth() > props.clipWidth - SAFETY_MARGIN;
            }), shouldScroll = createMemo(function() {
                return props.marquee && isTextOverflowing();
            }), wasFocusedBefore = createMemo(function(p) {
                return p || props.marquee;
            }, !1);
            createEffect(function() {
                if (shouldScroll()) {
                    var options = {
                        duration: (textWidth() + scrollGap()) / speed() * 1e3,
                        delay: delay(),
                        loop: !0,
                        easing: props.easing
                    };
                    text1.lng.x = 0, text2.lng.x = textWidth() + scrollGap();
                    var a1 = text1.lng.animate({
                        x: -textWidth() - scrollGap()
                    }, options).start(), a2 = text2.lng.animate({
                        x: 0
                    }, options).start();
                    onCleanup(function() {
                        a1.stop(), a2.stop();
                    });
                }
            });
            var text1, text2, _el$, events = {
                loaded: function(el) {
                    setTextWidth(el.width);
                }
            };
            return [ memo(function() {
                return memo(function() {
                    return !!wasFocusedBefore();
                })() && [ (_el$2 = createElement("text"), "function" == typeof text1 ? use(text1, _el$2) : text1 = _el$2, 
                spread(_el$2, mergeProps(props, {
                    get hidden() {
                        return !shouldScroll();
                    },
                    rtt: !0,
                    maxLines: 1,
                    onEvent: events
                }), !1), _el$2), (_el$3 = createElement("text"), "function" == typeof text2 ? use(text2, _el$3) : text2 = _el$3, 
                spread(_el$3, mergeProps(props, {
                    get hidden() {
                        return !shouldScroll();
                    },
                    rtt: !0,
                    maxLines: 1
                }), !1), _el$3) ];
                var _el$3, _el$2;
            }), (_el$ = createElement("text"), spread(_el$, mergeProps(props, {
                maxLines: 1,
                get hidden() {
                    return shouldScroll();
                },
                contain: "width"
            }), !1), _el$) ];
        }
        function Marquee(props) {
            var _el$4, _createSignal4 = _slicedToArray(createSignal(props.width || 0), 2), clipWidth = _createSignal4[0], setClipWidth = _createSignal4[1], clipHeight = createMemo(function() {
                var _props$textProps, _props$textProps2;
                return props.height || (null == (_props$textProps = props.textProps) ? void 0 : _props$textProps.lineHeight) || 1.5 * ((null == (_props$textProps2 = props.textProps) ? void 0 : _props$textProps2.fontSize) || 16);
            });
            return _el$4 = createElement("view"), spread(_el$4, mergeProps(props, {
                get height() {
                    return clipHeight();
                },
                onLayout: chainFunctions(props.onLayout, function(e) {
                    return setClipWidth(e.width);
                }),
                get clipping() {
                    return props.marquee;
                }
            }), !0), insert(_el$4, createComponent(MarqueeText, mergeProps(function() {
                return props.textProps;
            }, {
                get marquee() {
                    return props.marquee;
                },
                get clipWidth() {
                    return clipWidth();
                },
                get speed() {
                    return props.speed;
                },
                get delay() {
                    return props.delay;
                },
                get scrollGap() {
                    return props.scrollGap;
                },
                get easing() {
                    return props.easing;
                },
                get children() {
                    return props.children;
                }
            }))), _el$4;
        }
        return {
            setters: [ function(_renderLegacy002Js) {
                For = _renderLegacy002Js.A, createMemo = _renderLegacy002Js.H, Show = _renderLegacy002Js.N, 
                onCleanup = _renderLegacy002Js.Q, createEffect = _renderLegacy002Js.V, createElement = _renderLegacy002Js.a, 
                effect = _renderLegacy002Js.c, memo = _renderLegacy002Js.d, use = _renderLegacy002Js.g, 
                spread = _renderLegacy002Js.h, createComponent = _renderLegacy002Js.i, insert = _renderLegacy002Js.l, 
                setProp = _renderLegacy002Js.m, createSignal = _renderLegacy002Js.q, createTextNode = _renderLegacy002Js.s, 
                insertNode = _renderLegacy002Js.u;
            }, function(_mergePropsLegacy005Js) {
                mergeProps = _mergePropsLegacy005Js.t;
            }, function(_chainFunctionsLegacy009Js) {
                chainFunctions = _chainFunctionsLegacy009Js.t;
            }, function(_themeLegacy00hJs) {
                theme_default = _themeLegacy00hJs.t;
            } ],
            execute: function() {
                SAFETY_MARGIN = 10, ContentBlockStyle = {
                    display: "flex",
                    flexDirection: "column",
                    flexBoundary: "fixed",
                    width: 900,
                    height: 220,
                    gap: 16
                }, HeadlineStyles = _objectSpread(_objectSpread({}, theme_default.typography.display2), {}, {
                    fontFamily: "Roboto",
                    fontWeight: 700,
                    maxLines: 1,
                    width: 900
                }), Headline = function(props) {
                    return createComponent(Marquee, mergeProps(props, {
                        textProps: HeadlineStyles
                    }));
                }, DescriptionStyles = _objectSpread(_objectSpread({}, theme_default.typography.body1), {}, {
                    fontFamily: "Roboto",
                    fontWeight: 400,
                    lineHeight: 32,
                    width: 900,
                    maxLines: 3,
                    contain: "width"
                }), BadgeStyle = {
                    fontSize: 16,
                    lineHeight: 36
                }, Description = function(props) {
                    return _el$ = createElement("text"), spread(_el$, mergeProps(props, {
                        style: DescriptionStyles
                    }), !0), insert(_el$, function() {
                        return props.children;
                    }), _el$;
                    var _el$;
                }, Badge = function(props) {
                    return console.log(props.children), _el$2 = createElement("view"), _el$3 = createElement("text"), 
                    insertNode(_el$2, _el$3), spread(_el$2, mergeProps(props, {
                        style: {
                            color: 153,
                            borderRadius: 8,
                            padding: [ 0, 13 ],
                            border: {
                                width: 2,
                                color: 4294967295
                            },
                            display: "flex",
                            height: 36,
                            width: 45
                        }
                    }), !0), setProp(_el$3, "style", BadgeStyle), insert(_el$3, function() {
                        return props.children;
                    }), _el$2;
                    var _el$2, _el$3;
                }, MetaTextStyle = _objectSpread(_objectSpread({}, theme_default.typography.body2), {}, {
                    fontFamily: "Roboto",
                    fontWeight: 400
                }), Metadata = function(props) {
                    return _el$4 = createElement("view"), _el$5 = createElement("view"), _el$6 = createElement("view"), 
                    _el$7 = createElement("view"), _el$8 = createElement("text"), _el$9 = createTextNode(" reviews"), 
                    _el$0 = createElement("text"), insertNode(_el$4, _el$5), insertNode(_el$4, _el$6), 
                    insertNode(_el$4, _el$8), insertNode(_el$4, _el$0), setProp(_el$4, "style", {
                        display: "flex",
                        flexDirection: "row",
                        gap: 18,
                        width: 900,
                        height: 48
                    }), setProp(_el$5, "y", -4), setProp(_el$5, "src", "./assets/stars.png"), setProp(_el$5, "width", 188), 
                    setProp(_el$5, "height", 31), insertNode(_el$6, _el$7), setProp(_el$6, "y", -4), 
                    setProp(_el$6, "flexItem", !1), setProp(_el$6, "clipping", !0), setProp(_el$6, "height", 31), 
                    setProp(_el$7, "src", "./assets/stars-full.png"), setProp(_el$7, "width", 188), 
                    setProp(_el$7, "height", 31), insertNode(_el$8, _el$9), setProp(_el$8, "style", MetaTextStyle), 
                    insert(_el$8, function() {
                        return props.voteCount;
                    }, _el$9), setProp(_el$0, "style", MetaTextStyle), insert(_el$0, function() {
                        return props.metaText;
                    }), insert(_el$4, createComponent(For, {
                        get each() {
                            return props.badges;
                        },
                        children: function(item) {
                            return createComponent(Badge, {
                                y: -5,
                                children: item
                            });
                        }
                    }), null), effect(function(_$p) {
                        return setProp(_el$6, "width", 188 * props.voteAverage / 10, _$p);
                    }), _el$4;
                    var _el$4, _el$5, _el$6, _el$7, _el$8, _el$9, _el$0;
                }, _export("t", function(props) {
                    return _el$1 = createElement("view"), setProp(_el$1, "id", "contentBlock"), setProp(_el$1, "style", ContentBlockStyle), 
                    spread(_el$1, props, !0), insert(_el$1, createComponent(Headline, {
                        get marquee() {
                            return props.marquee;
                        },
                        get children() {
                            return props.content.title;
                        }
                    }), null), insert(_el$1, createComponent(Description, {
                        get children() {
                            return props.content.description;
                        }
                    }), null), insert(_el$1, createComponent(Show, {
                        get when() {
                            return props.content.voteCount;
                        },
                        get children() {
                            return createComponent(Metadata, {
                                get metaText() {
                                    return props.content.metaText;
                                },
                                get badges() {
                                    return props.content.badges;
                                },
                                get voteCount() {
                                    return props.content.voteCount;
                                },
                                get voteAverage() {
                                    return props.content.voteAverage;
                                }
                            });
                        }
                    }), null), _el$1;
                    var _el$1;
                });
            }
        };
    });
}();