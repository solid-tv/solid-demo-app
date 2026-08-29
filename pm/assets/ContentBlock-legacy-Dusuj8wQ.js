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
    function _slicedToArray(r, e) {
        return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
    }
    function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(r, a) {
        if (r) {
            if ("string" == typeof r) return _arrayLikeToArray(r, a);
            var t = {}.toString.call(r).slice(8, -1);
            return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
        }
    }
    function _arrayLikeToArray(r, a) {
        (null == a || a > r.length) && (a = r.length);
        for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
        return n;
    }
    function _iterableToArrayLimit(r, l) {
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
    }
    function _arrayWithHoles(r) {
        if (Array.isArray(r)) return r;
    }
    System.register([ "./render-legacy-BcGhlmZk.js", "./mergeProps-legacy-CW0lxKJl.js", "./chainFunctions-legacy-D8RSddZy.js", "./theme-legacy-CRa-Zkyx.js" ], function(_export, _context) {
        "use strict";
        var Show, For, createEffect, createMemo, createSignal, createElement, effect, memo, onCleanup, use, spread, createComponent, insert, setProp, createTextNode, insertNode, mergeProps, chainFunctions, theme_default, SAFETY_MARGIN, blockWidth, ContentBlockStyle, HeadlineStyles, Headline, DescriptionStyles, BadgeStyle, Description, Badge, MetaTextStyle, Metadata, ContentBlock;
        function MarqueeText(props) {
            var speed = createMemo(function() {
                return props.speed || 200;
            });
            var delay = createMemo(function() {
                var _props$delay;
                return (_props$delay = props.delay) !== null && _props$delay !== void 0 ? _props$delay : 1e3;
            });
            var scrollGap = createMemo(function() {
                var _props$scrollGap;
                return (_props$scrollGap = props.scrollGap) !== null && _props$scrollGap !== void 0 ? _props$scrollGap : props.clipWidth * .5;
            });
            var _createSignal = createSignal(0), _createSignal2 = _slicedToArray(_createSignal, 2), textWidth = _createSignal2[0], setTextWidth = _createSignal2[1];
            var isTextOverflowing = createMemo(function() {
                return textWidth() > props.clipWidth - SAFETY_MARGIN;
            });
            var shouldScroll = createMemo(function() {
                return props.marquee && isTextOverflowing();
            });
            var wasFocusedBefore = createMemo(function(p) {
                return p || props.marquee;
            }, false);
            createEffect(function() {
                if (shouldScroll()) {
                    var options = {
                        duration: (textWidth() + scrollGap()) / speed() * 1e3,
                        delay: delay(),
                        loop: true,
                        easing: props.easing
                    };
                    text1.lng.x = 0;
                    text2.lng.x = textWidth() + scrollGap();
                    var a1 = text1.lng.animate({
                        x: -textWidth() - scrollGap()
                    }, options).start();
                    var a2 = text2.lng.animate({
                        x: 0
                    }, options).start();
                    onCleanup(function() {
                        a1.stop();
                        a2.stop();
                    });
                }
            });
            var events = {
                loaded: function loaded(el) {
                    setTextWidth(el.width);
                }
            };
            var text1;
            var text2;
            return [ memo(function() {
                return memo(function() {
                    return !!wasFocusedBefore();
                })() && [ function() {
                    var _el$2 = createElement("text");
                    var _ref$ = text1;
                    typeof _ref$ === "function" ? use(_ref$, _el$2) : text1 = _el$2;
                    spread(_el$2, mergeProps(props, {
                        get hidden() {
                            return !shouldScroll();
                        },
                        rtt: true,
                        maxLines: 1,
                        onEvent: events
                    }), false);
                    return _el$2;
                }(), function() {
                    var _el$3 = createElement("text");
                    var _ref$2 = text2;
                    typeof _ref$2 === "function" ? use(_ref$2, _el$3) : text2 = _el$3;
                    spread(_el$3, mergeProps(props, {
                        get hidden() {
                            return !shouldScroll();
                        },
                        rtt: true,
                        maxLines: 1
                    }), false);
                    return _el$3;
                }() ];
            }), function() {
                var _el$ = createElement("text");
                spread(_el$, mergeProps(props, {
                    maxLines: 1,
                    get hidden() {
                        return shouldScroll();
                    },
                    contain: "width"
                }), false);
                return _el$;
            }() ];
        }
        function Marquee(props) {
            var _createSignal3 = createSignal(props.width || 0), _createSignal4 = _slicedToArray(_createSignal3, 2), clipWidth = _createSignal4[0], setClipWidth = _createSignal4[1];
            var clipHeight = createMemo(function() {
                var _props$textProps, _props$textProps2;
                return props.height || ((_props$textProps = props.textProps) == null ? void 0 : _props$textProps.lineHeight) || (((_props$textProps2 = props.textProps) == null ? void 0 : _props$textProps2.fontSize) || 16) * 1.5;
            });
            return function() {
                var _el$4 = createElement("view");
                spread(_el$4, mergeProps(props, {
                    get height() {
                        return clipHeight();
                    },
                    onLayout: chainFunctions(props.onLayout, function(e) {
                        return setClipWidth(e.width);
                    }),
                    get clipping() {
                        return props.marquee;
                    }
                }), true);
                insert(_el$4, createComponent(MarqueeText, mergeProps(function() {
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
                })));
                return _el$4;
            }();
        }
        return {
            setters: [ function(_renderLegacy001Js) {
                Show = _renderLegacy001Js.F;
                For = _renderLegacy001Js.M;
                createEffect = _renderLegacy001Js.U;
                createMemo = _renderLegacy001Js.W;
                createSignal = _renderLegacy001Js.Y;
                createElement = _renderLegacy001Js.a;
                effect = _renderLegacy001Js.c;
                memo = _renderLegacy001Js.d;
                onCleanup = _renderLegacy001Js.et;
                use = _renderLegacy001Js.g;
                spread = _renderLegacy001Js.h;
                createComponent = _renderLegacy001Js.i;
                insert = _renderLegacy001Js.l;
                setProp = _renderLegacy001Js.m;
                createTextNode = _renderLegacy001Js.s;
                insertNode = _renderLegacy001Js.u;
            }, function(_mergePropsLegacy003Js) {
                mergeProps = _mergePropsLegacy003Js.t;
            }, function(_chainFunctionsLegacy007Js) {
                chainFunctions = _chainFunctionsLegacy007Js.t;
            }, function(_themeLegacy00gJs) {
                theme_default = _themeLegacy00gJs.t;
            } ],
            execute: function execute() {
                SAFETY_MARGIN = 10;
                blockWidth = 900;
                ContentBlockStyle = {
                    display: "flex",
                    flexDirection: "column",
                    flexBoundary: "fixed",
                    width: blockWidth,
                    height: 220,
                    gap: 16
                };
                HeadlineStyles = _objectSpread(_objectSpread({}, theme_default.typography.display2), {}, {
                    fontFamily: "Roboto",
                    fontWeight: 700,
                    maxLines: 1,
                    width: blockWidth
                });
                Headline = function Headline(props) {
                    return createComponent(Marquee, mergeProps(props, {
                        textProps: HeadlineStyles
                    }));
                };
                DescriptionStyles = _objectSpread(_objectSpread({}, theme_default.typography.body1), {}, {
                    fontFamily: "Roboto",
                    fontWeight: 400,
                    lineHeight: 32,
                    width: blockWidth,
                    maxLines: 3,
                    contain: "width"
                });
                BadgeStyle = {
                    fontSize: 16,
                    lineHeight: 36
                };
                Description = function Description(props) {
                    return function() {
                        var _el$ = createElement("text");
                        spread(_el$, mergeProps(props, {
                            style: DescriptionStyles
                        }), true);
                        insert(_el$, function() {
                            return props.children;
                        });
                        return _el$;
                    }();
                };
                Badge = function Badge(props) {
                    console.log(props.children);
                    return function() {
                        var _el$2 = createElement("view"), _el$3 = createElement("text");
                        insertNode(_el$2, _el$3);
                        spread(_el$2, mergeProps(props, {
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
                        }), true);
                        setProp(_el$3, "style", BadgeStyle);
                        insert(_el$3, function() {
                            return props.children;
                        });
                        return _el$2;
                    }();
                };
                MetaTextStyle = _objectSpread(_objectSpread({}, theme_default.typography.body2), {}, {
                    fontFamily: "Roboto",
                    fontWeight: 400
                });
                Metadata = function Metadata(props) {
                    return function() {
                        var _el$4 = createElement("view"), _el$5 = createElement("view"), _el$6 = createElement("view"), _el$7 = createElement("view"), _el$8 = createElement("text"), _el$9 = createTextNode(" reviews"), _el$0 = createElement("text");
                        insertNode(_el$4, _el$5);
                        insertNode(_el$4, _el$6);
                        insertNode(_el$4, _el$8);
                        insertNode(_el$4, _el$0);
                        setProp(_el$4, "style", {
                            display: "flex",
                            flexDirection: "row",
                            gap: 18,
                            width: blockWidth,
                            height: 48
                        });
                        setProp(_el$5, "y", -4);
                        setProp(_el$5, "src", "./assets/stars.png");
                        setProp(_el$5, "width", 188);
                        setProp(_el$5, "height", 31);
                        insertNode(_el$6, _el$7);
                        setProp(_el$6, "y", -4);
                        setProp(_el$6, "flexItem", false);
                        setProp(_el$6, "clipping", true);
                        setProp(_el$6, "height", 31);
                        setProp(_el$7, "src", "./assets/stars-full.png");
                        setProp(_el$7, "width", 188);
                        setProp(_el$7, "height", 31);
                        insertNode(_el$8, _el$9);
                        setProp(_el$8, "style", MetaTextStyle);
                        insert(_el$8, function() {
                            return props.voteCount;
                        }, _el$9);
                        setProp(_el$0, "style", MetaTextStyle);
                        insert(_el$0, function() {
                            return props.metaText;
                        });
                        insert(_el$4, createComponent(For, {
                            get each() {
                                return props.badges;
                            },
                            children: function children(item) {
                                return createComponent(Badge, {
                                    y: -5,
                                    children: item
                                });
                            }
                        }), null);
                        effect(function(_$p) {
                            return setProp(_el$6, "width", 188 * props.voteAverage / 10, _$p);
                        });
                        return _el$4;
                    }();
                };
                _export("t", ContentBlock = function ContentBlock(props) {
                    return function() {
                        var _el$1 = createElement("view");
                        setProp(_el$1, "id", "contentBlock");
                        setProp(_el$1, "style", ContentBlockStyle);
                        spread(_el$1, props, true);
                        insert(_el$1, createComponent(Headline, {
                            get marquee() {
                                return props.marquee;
                            },
                            get children() {
                                return props.content.title;
                            }
                        }), null);
                        insert(_el$1, createComponent(Description, {
                            get children() {
                                return props.content.description;
                            }
                        }), null);
                        insert(_el$1, createComponent(Show, {
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
                        }), null);
                        return _el$1;
                    }();
                });
            }
        };
    });
})();