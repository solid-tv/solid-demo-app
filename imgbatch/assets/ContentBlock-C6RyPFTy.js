import { A as For, H as createMemo, N as Show, Q as onCleanup, V as createEffect, a as createElement, c as effect, d as memo, g as use, h as spread, i as createComponent, l as insert, m as setProp, q as createSignal, s as createTextNode, u as insertNode } from "./render-T82LYRez.js";

import { t as mergeProps } from "./mergeProps-CezQW3Bh.js";

import { t as chainFunctions } from "./chainFunctions-Bhk6H0hc.js";

import { t as theme_default } from "./theme-CB9u0IsU.js";

var SAFETY_MARGIN = 10;

function MarqueeText(props) {
    const speed = createMemo(() => props.speed || 200);
    const delay = createMemo(() => {
        var _props$delay;
        return (_props$delay = props.delay) !== null && _props$delay !== void 0 ? _props$delay : 1e3;
    });
    const scrollGap = createMemo(() => {
        var _props$scrollGap;
        return (_props$scrollGap = props.scrollGap) !== null && _props$scrollGap !== void 0 ? _props$scrollGap : props.clipWidth * .5;
    });
    const [textWidth, setTextWidth] = createSignal(0);
    const isTextOverflowing = createMemo(() => textWidth() > props.clipWidth - SAFETY_MARGIN);
    const shouldScroll = createMemo(() => props.marquee && isTextOverflowing());
    const wasFocusedBefore = createMemo(p => p || props.marquee, false);
    createEffect(() => {
        if (shouldScroll()) {
            const options = {
                duration: (textWidth() + scrollGap()) / speed() * 1e3,
                delay: delay(),
                loop: true,
                easing: props.easing
            };
            text1.lng.x = 0;
            text2.lng.x = textWidth() + scrollGap();
            const a1 = text1.lng.animate({
                x: -textWidth() - scrollGap()
            }, options).start();
            const a2 = text2.lng.animate({
                x: 0
            }, options).start();
            onCleanup(() => {
                a1.stop();
                a2.stop();
            });
        }
    });
    const events = {
        loaded(el) {
            setTextWidth(el.width);
        }
    };
    let text1;
    let text2;
    return [ memo(() => memo(() => !!wasFocusedBefore())() && [ (() => {
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
    })(), (() => {
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
    })() ]), (() => {
        var _el$ = createElement("text");
        spread(_el$, mergeProps(props, {
            maxLines: 1,
            get hidden() {
                return shouldScroll();
            },
            contain: "width"
        }), false);
        return _el$;
    })() ];
}

function Marquee(props) {
    const [clipWidth, setClipWidth] = createSignal(props.width || 0);
    const clipHeight = createMemo(() => {
        var _props$textProps, _props$textProps2;
        return props.height || ((_props$textProps = props.textProps) == null ? void 0 : _props$textProps.lineHeight) || (((_props$textProps2 = props.textProps) == null ? void 0 : _props$textProps2.fontSize) || 16) * 1.5;
    });
    return (() => {
        var _el$4 = createElement("view");
        spread(_el$4, mergeProps(props, {
            get height() {
                return clipHeight();
            },
            onLayout: chainFunctions(props.onLayout, e => setClipWidth(e.width)),
            get clipping() {
                return props.marquee;
            }
        }), true);
        insert(_el$4, createComponent(MarqueeText, mergeProps(() => props.textProps, {
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
    })();
}

var blockWidth = 900;

var ContentBlockStyle = {
    display: "flex",
    flexDirection: "column",
    flexBoundary: "fixed",
    width: blockWidth,
    height: 220,
    gap: 16
};

var HeadlineStyles = {
    ...theme_default.typography.display2,
    fontFamily: "Roboto",
    fontWeight: 700,
    maxLines: 1,
    width: blockWidth
};

var Headline = props => createComponent(Marquee, mergeProps(props, {
    textProps: HeadlineStyles
}));

var DescriptionStyles = {
    ...theme_default.typography.body1,
    fontFamily: "Roboto",
    fontWeight: 400,
    lineHeight: 32,
    width: blockWidth,
    maxLines: 3,
    contain: "width"
};

var BadgeStyle = {
    fontSize: 16,
    lineHeight: 36
};

var Description = props => (() => {
    var _el$ = createElement("text");
    spread(_el$, mergeProps(props, {
        style: DescriptionStyles
    }), true);
    insert(_el$, () => props.children);
    return _el$;
})();

var Badge = props => {
    console.log(props.children);
    return (() => {
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
        insert(_el$3, () => props.children);
        return _el$2;
    })();
};

var MetaTextStyle = {
    ...theme_default.typography.body2,
    fontFamily: "Roboto",
    fontWeight: 400
};

var Metadata = props => (() => {
    var _el$4 = createElement("view"), _el$5 = createElement("view"), _el$6 = createElement("view"), _el$7 = createElement("view"), _el$8 = createElement("text"), _el$9 = createTextNode(` reviews`), _el$0 = createElement("text");
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
    insert(_el$8, () => props.voteCount, _el$9);
    setProp(_el$0, "style", MetaTextStyle);
    insert(_el$0, () => props.metaText);
    insert(_el$4, createComponent(For, {
        get each() {
            return props.badges;
        },
        children: item => createComponent(Badge, {
            y: -5,
            children: item
        })
    }), null);
    effect(_$p => setProp(_el$6, "width", 188 * props.voteAverage / 10, _$p));
    return _el$4;
})();

var ContentBlock = props => (() => {
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
})();

export { ContentBlock as t };