import { o as onMount, s as setGlobalBackground, t as theme, l as createComponent, C as Column, c as createElement, n as insertNode, a as setProp, p as createTextNode, m as effect, R as Row, b as createSignal, k as insert, N as memo, ae as Icon } from "./index-CdkOUEg0.js";

const buttonsData = [ {
    title: "Lab Experiments",
    icon: "experiment",
    baseColor: 505032447,
    focusColor: 2338125567
}, {
    title: "Trending Now",
    icon: "trending",
    baseColor: 220213503,
    focusColor: 112645375
}, {
    title: "Live TV Shows",
    icon: "tv",
    baseColor: 254288127,
    focusColor: 280592895
}, {
    title: "Featured Movie",
    icon: "movie",
    baseColor: 740038399,
    focusColor: 4185069311
}, {
    title: "System Perf",
    icon: "perf",
    baseColor: 705896703,
    focusColor: 3964180991
}, {
    title: "Likes & Favorites",
    icon: "thumbsUp",
    baseColor: 673124607,
    focusColor: 4120775679
} ];

function CustomIconButton(props) {
    const [focused, setFocused] = createSignal(false);
    return (() => {
        var _el$ = createElement("view"), _el$2 = createElement("view"), _el$3 = createElement("text");
        insertNode(_el$, _el$2);
        insertNode(_el$, _el$3);
        setProp(_el$, "onFocusChanged", setFocused);
        setProp(_el$, "width", 260);
        setProp(_el$, "height", 90);
        setProp(_el$, "borderRadius", 16);
        setProp(_el$, "display", "flex");
        setProp(_el$, "flexDirection", "row");
        setProp(_el$, "alignItems", "center");
        setProp(_el$, "justifyContent", "flexStart");
        setProp(_el$, "paddingLeft", 20);
        setProp(_el$, "gap", 16);
        setProp(_el$, "transition", {
            color: {
                duration: 200,
                easing: "ease-out"
            },
            scale: {
                duration: 200,
                easing: "ease-out"
            },
            border: {
                duration: 200,
                easing: "ease-out"
            },
            shadow: {
                duration: 200,
                easing: "ease-out"
            }
        });
        setProp(_el$2, "width", 50);
        setProp(_el$2, "height", 50);
        setProp(_el$2, "display", "flex");
        setProp(_el$2, "alignItems", "center");
        setProp(_el$2, "justifyContent", "center");
        insert(_el$2, (() => {
            var _c$ = memo(() => props.icon === "thumbsUp");
            return () => _c$() ? (() => {
                var _el$4 = createElement("view");
                setProp(_el$4, "src", "./assets/thumbsUp.png");
                setProp(_el$4, "width", 40);
                setProp(_el$4, "height", 40);
                effect(_$p => setProp(_el$4, "alpha", focused() ? 1 : .7, _$p));
                return _el$4;
            })() : (() => {
                var _el$5 = createElement("view");
                setProp(_el$5, "y", -10);
                insert(_el$5, createComponent(Icon, {
                    get name() {
                        return props.icon;
                    },
                    scale: .45,
                    get color() {
                        return focused() ? 4294967295 : 4294967219;
                    }
                }));
                return _el$5;
            })();
        })());
        setProp(_el$3, "fontSize", 20);
        setProp(_el$3, "fontWeight", "bold");
        setProp(_el$3, "contain", "width");
        setProp(_el$3, "width", 160);
        setProp(_el$3, "transition", {
            color: {
                duration: 200,
                easing: "ease-out"
            }
        });
        insert(_el$3, () => props.title);
        effect(_p$ => {
            var _v$ = props.autofocus, _v$2 = [ props.title, "button" ], _v$3 = focused() ? props.focusColor : props.baseColor, _v$4 = {
                width: 2,
                color: focused() ? 4294967295 : 4294967066
            }, _v$5 = {
                color: focused() ? "".concat(props.focusColor, "80") : 51,
                projection: focused() ? [ 0, 12, 24, -6 ] : [ 0, 6, 12, -3 ]
            }, _v$6 = focused() ? 1.08 : 1, _v$7 = focused() ? 4294967295 : 4294967244;
            _v$ !== _p$.e && (_p$.e = setProp(_el$, "autofocus", _v$, _p$.e));
            _v$2 !== _p$.t && (_p$.t = setProp(_el$, "announce", _v$2, _p$.t));
            _v$3 !== _p$.a && (_p$.a = setProp(_el$, "color", _v$3, _p$.a));
            _v$4 !== _p$.o && (_p$.o = setProp(_el$, "border", _v$4, _p$.o));
            _v$5 !== _p$.i && (_p$.i = setProp(_el$, "shadow", _v$5, _p$.i));
            _v$6 !== _p$.n && (_p$.n = setProp(_el$, "scale", _v$6, _p$.n));
            _v$7 !== _p$.s && (_p$.s = setProp(_el$3, "color", _v$7, _p$.s));
            return _p$;
        }, {
            e: void 0,
            t: void 0,
            a: void 0,
            o: void 0,
            i: void 0,
            n: void 0,
            s: void 0
        });
        return _el$;
    })();
}

const CustomButtonsPage = () => {
    onMount(() => {
        setGlobalBackground(theme.backgroundDark);
    });
    function onFocus() {
        this.children[this.selected || 0].setFocus();
    }
    return createComponent(Column, {
        x: 170,
        y: 150,
        gap: 30,
        height: 800,
        width: 1680,
        autofocus: true,
        scroll: "none",
        get children() {
            return [ (() => {
                var _el$6 = createElement("view"), _el$7 = createElement("text"), _el$9 = createElement("text");
                insertNode(_el$6, _el$7);
                insertNode(_el$6, _el$9);
                setProp(_el$6, "display", "flex");
                setProp(_el$6, "flexDirection", "column");
                setProp(_el$6, "gap", 10);
                setProp(_el$6, "skipFocus", true);
                insertNode(_el$7, createTextNode("Custom Interactive Buttons"));
                setProp(_el$7, "fontSize", 48);
                setProp(_el$7, "fontWeight", "bold");
                insertNode(_el$9, createTextNode("A premium grid of custom styled buttons featuring distinct icons, rich brand colors, smooth focus states, and micro-animations."));
                setProp(_el$9, "fontSize", 22);
                setProp(_el$9, "width", 1200);
                setProp(_el$9, "contain", "width");
                effect(_p$ => {
                    var _v$8 = theme.textPrimary, _v$9 = theme.textSecondary;
                    _v$8 !== _p$.e && (_p$.e = setProp(_el$7, "color", _v$8, _p$.e));
                    _v$9 !== _p$.t && (_p$.t = setProp(_el$9, "color", _v$9, _p$.t));
                    return _p$;
                }, {
                    e: void 0,
                    t: void 0
                });
                return _el$6;
            })(), createComponent(Row, {
                y: 20,
                gap: 24,
                width: 1680,
                height: 120,
                display: "flex",
                justifyContent: "flexStart",
                alignItems: "center",
                onFocus: onFocus,
                get children() {
                    return buttonsData.slice(0, 3).map((btn, i) => createComponent(CustomIconButton, {
                        get title() {
                            return btn.title;
                        },
                        get icon() {
                            return btn.icon;
                        },
                        get baseColor() {
                            return btn.baseColor;
                        },
                        get focusColor() {
                            return btn.focusColor;
                        },
                        autofocus: i === 0
                    }));
                }
            }), createComponent(Row, {
                y: 40,
                gap: 24,
                width: 1680,
                height: 120,
                display: "flex",
                justifyContent: "flexStart",
                alignItems: "center",
                onFocus: onFocus,
                get children() {
                    return buttonsData.slice(3, 6).map((btn, i) => createComponent(CustomIconButton, {
                        get title() {
                            return btn.title;
                        },
                        get icon() {
                            return btn.icon;
                        },
                        get baseColor() {
                            return btn.baseColor;
                        },
                        get focusColor() {
                            return btn.focusColor;
                        }
                    }));
                }
            }) ];
        }
    });
};

export { CustomButtonsPage as default };
//# sourceMappingURL=CustomButtons-BJqtAqJM.js.map
