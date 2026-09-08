import { $ as onCleanup, H as createEffect, J as createSignal, P as Show, U as createMemo, _ as use, a as createElement, c as effect, d as memo, f as mergeProps, g as spread, h as setProp, i as createComponent, j as For, l as insert, s as createTextNode, u as insertNode } from "./render-UQXSDH2t.js";

import { t as chainFunctions } from "./chainFunctions-C_8INzqg.js";

import { t as theme_default } from "./theme-CB9u0IsU.js";

function MarqueeText(props) {
    const speed = createMemo(() => props.speed || 200), delay = createMemo(() => {
        var _props$delay;
        return null !== (_props$delay = props.delay) && void 0 !== _props$delay ? _props$delay : 1e3;
    }), scrollGap = createMemo(() => {
        var _props$scrollGap;
        return null !== (_props$scrollGap = props.scrollGap) && void 0 !== _props$scrollGap ? _props$scrollGap : .5 * props.clipWidth;
    }), [textWidth, setTextWidth] = createSignal(0), isTextOverflowing = createMemo(() => textWidth() > props.clipWidth - 10), shouldScroll = createMemo(() => props.marquee && isTextOverflowing()), wasFocusedBefore = createMemo(p => p || props.marquee, !1);
    createEffect(() => {
        if (shouldScroll()) {
            const options = {
                duration: (textWidth() + scrollGap()) / speed() * 1e3,
                delay: delay(),
                loop: !0,
                easing: props.easing
            };
            text1.lng.x = 0, text2.lng.x = textWidth() + scrollGap();
            const a1 = text1.lng.animate({
                x: -textWidth() - scrollGap()
            }, options).start(), a2 = text2.lng.animate({
                x: 0
            }, options).start();
            onCleanup(() => {
                a1.stop(), a2.stop();
            });
        }
    });
    const events = {
        loaded(el) {
            setTextWidth(el.width);
        }
    };
    let text1, text2;
    return [ memo(() => {
        return memo(() => !!wasFocusedBefore())() && [ (_el$2 = createElement("text"), "function" == typeof text1 ? use(text1, _el$2) : text1 = _el$2, 
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
    var _el$;
}

function Marquee(props) {
    const [clipWidth, setClipWidth] = createSignal(props.width || 0), clipHeight = createMemo(() => {
        var _props$textProps, _props$textProps2;
        return props.height || (null == (_props$textProps = props.textProps) ? void 0 : _props$textProps.lineHeight) || 1.5 * ((null == (_props$textProps2 = props.textProps) ? void 0 : _props$textProps2.fontSize) || 16);
    });
    return _el$4 = createElement("view"), spread(_el$4, mergeProps(props, {
        get height() {
            return clipHeight();
        },
        onLayout: chainFunctions(props.onLayout, e => setClipWidth(e.width)),
        get clipping() {
            return props.marquee;
        }
    }), !0), insert(_el$4, createComponent(MarqueeText, mergeProps(() => props.textProps, {
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
    var _el$4;
}

var ContentBlockStyle = {
    display: "flex",
    flexDirection: "column",
    flexBoundary: "fixed",
    width: 900,
    height: 220,
    gap: 16
}, HeadlineStyles = {
    ...theme_default.typography.display2,
    fontFamily: "Roboto",
    fontWeight: 700,
    maxLines: 1,
    width: 900
}, Headline = props => createComponent(Marquee, mergeProps(props, {
    textProps: HeadlineStyles
})), DescriptionStyles = {
    ...theme_default.typography.body1,
    fontFamily: "Roboto",
    fontWeight: 400,
    lineHeight: 32,
    width: 900,
    maxLines: 3,
    contain: "width"
}, BadgeStyle = {
    fontSize: 16,
    lineHeight: 36
}, Description = props => {
    return _el$ = createElement("text"), spread(_el$, mergeProps(props, {
        style: DescriptionStyles
    }), !0), insert(_el$, () => props.children), _el$;
    var _el$;
}, Badge = props => {
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
    }), !0), setProp(_el$3, "style", BadgeStyle), insert(_el$3, () => props.children), 
    _el$2;
    var _el$2, _el$3;
}, MetaTextStyle = {
    ...theme_default.typography.body2,
    fontFamily: "Roboto",
    fontWeight: 400
}, Metadata = props => {
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
    insert(_el$8, () => props.voteCount, _el$9), setProp(_el$0, "style", MetaTextStyle), 
    insert(_el$0, () => props.metaText), insert(_el$4, createComponent(For, {
        get each() {
            return props.badges;
        },
        children: item => createComponent(Badge, {
            y: -5,
            children: item
        })
    }), null), effect(_$p => setProp(_el$6, "width", 188 * props.voteAverage / 10, _$p)), 
    _el$4;
    var _el$4, _el$5, _el$6, _el$7, _el$8, _el$9, _el$0;
}, ContentBlock = props => {
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
};

export { ContentBlock as t };