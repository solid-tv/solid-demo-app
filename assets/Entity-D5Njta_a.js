import { N as Show, St as assertTruthy, V as createEffect, Z as on, a as createElement, c as effect, d as memo, g as use, i as createComponent, l as insert, m as setProp, q as createSignal, s as createTextNode, u as insertNode } from "./render-BFiF0koJ.js";

import { t as Column } from "./Column-D0tbX_Dv.js";

import { t as Row } from "./Row-BYVg34Np.js";

import { t as ContentBlock } from "./ContentBlock-CbaeqzI6.js";

import { r as Button, s as TileRow } from "./components-CKJW911z.js";

import { d as useNavigate } from "./routing-CXoz3VDU.js";

import { r as styles_default } from "./styles-BcDKugwt.js";

import { n as setGlobalBackground } from "./state-VwDFTuxP.js";

var Entity = props => {
    const [backdropAlpha, setBackdropAlpha] = createSignal(0);
    const [playFocused, setPlayFocused] = createSignal(false);
    const navigate = useNavigate();
    createEffect(on(props.data.entity, data => {
        setGlobalBackground(data.backgroundImage);
    }, {
        defer: true
    }));
    const columnY = 640;
    const Backdrop = {
        colorTop: 236067071,
        colorBottom: 438249471,
        alpha: 0,
        width: 2e3,
        height: 1080,
        x: -180,
        y: columnY,
        zIndex: 1
    };
    function onRowFocus() {
        this.children[this.selected || 0].setFocus();
        columnRef.y = columnY;
        backdropRef.y = columnY;
        backdropRef.alpha = 0;
    }
    function onRowFocusAnimate() {
        this.children[this.selected || 0].setFocus();
        columnRef.y = 180;
        backdropRef.y = 0;
        backdropRef.alpha = .99;
    }
    function onEnter() {
        var _entity$item;
        let entity = this.children.find(c => c.states.has("focus"));
        assertTruthy(entity && ((_entity$item = entity.item) == null ? void 0 : _entity$item.href));
        navigate(entity.item.href);
    }
    function onEscape() {
        document.getElementsByTagName("canvas")[0].focus();
        entityActions.setFocus();
        setBackdropAlpha(0);
    }
    function onEnterTrailer() {
        navigate("/player/123");
    }
    let columnRef, backdropRef, entityActions;
    return createComponent(Show, {
        get when() {
            return props.data.entity();
        },
        get children() {
            return [ (() => {
                var _el$ = createElement("view"), _el$6 = createElement("view");
                insertNode(_el$, _el$6);
                setProp(_el$, "x", 170);
                setProp(_el$, "onUp", () => entityActions.setFocus());
                setProp(_el$, "onEscape", onEscape);
                setProp(_el$, "announceContext", "Press LEFT or RIGHT to review items, press UP or DOWN to review categories, press CENTER to select");
                insert(_el$, createComponent(ContentBlock, {
                    y: 260,
                    get marquee() {
                        return playFocused();
                    },
                    get content() {
                        return props.data.entity().heroContent;
                    }
                }), _el$6);
                insert(_el$, createComponent(Row, {
                    ref(r$) {
                        var _ref$ = entityActions;
                        typeof _ref$ === "function" ? _ref$(r$) : entityActions = r$;
                    },
                    y: 500,
                    scroll: "none",
                    height: 90,
                    width: 640,
                    gap: 40,
                    onDown: () => columnRef.setFocus(),
                    onEnter: onEnterTrailer,
                    get children() {
                        return [ createComponent(Button, {
                            width: 300,
                            get autofocus() {
                                return props.data.entity();
                            },
                            onFocusChanged: setPlayFocused,
                            children: "Play"
                        }), createComponent(Button, {
                            width: 300,
                            children: "Resume"
                        }) ];
                    }
                }), _el$6);
                insert(_el$, createComponent(Column, {
                    ref(r$) {
                        var _ref$2 = columnRef;
                        typeof _ref$2 === "function" ? _ref$2(r$) : columnRef = r$;
                    },
                    x: 0,
                    y: columnY,
                    get style() {
                        return styles_default.Column;
                    },
                    gap: 80,
                    height: 880,
                    scroll: "none",
                    zIndex: 5,
                    get children() {
                        return createComponent(Show, {
                            get when() {
                                return memo(() => !!props.data.recommendations())() && props.data.credits();
                            },
                            get children() {
                                return [ (() => {
                                    var _el$2 = createElement("text");
                                    insertNode(_el$2, createTextNode(`Recommendations`));
                                    setProp(_el$2, "skipFocus", true);
                                    effect(_$p => setProp(_el$2, "style", styles_default.RowTitle, _$p));
                                    return _el$2;
                                })(), createComponent(TileRow, {
                                    onFocus: onRowFocus,
                                    onEnter: onEnter,
                                    announce: "Recommendations",
                                    group: "recommendation",
                                    get items() {
                                        return props.data.recommendations();
                                    },
                                    width: 1620
                                }), (() => {
                                    var _el$4 = createElement("text");
                                    insertNode(_el$4, createTextNode(`Cast and Crew`));
                                    setProp(_el$4, "skipFocus", true);
                                    effect(_$p => setProp(_el$4, "style", styles_default.RowTitle, _$p));
                                    return _el$4;
                                })(), createComponent(TileRow, {
                                    announce: "Cast and Crew",
                                    onFocus: onRowFocusAnimate,
                                    onEnter: onEnter,
                                    get items() {
                                        return props.data.credits();
                                    },
                                    width: 1620
                                }) ];
                            }
                        });
                    }
                }), _el$6);
                var _ref$3 = backdropRef;
                typeof _ref$3 === "function" ? use(_ref$3, _el$6) : backdropRef = _el$6;
                setProp(_el$6, "style", Backdrop);
                setProp(_el$6, "transition", {
                    alpha: true,
                    y: true
                });
                effect(_$p => setProp(_el$, "announce", [ props.data.entity().heroContent.title, "PAUSE-1", props.data.entity().heroContent.description ], _$p));
                return _el$;
            })(), (() => {
                var _el$7 = createElement("view");
                setProp(_el$7, "colorTop", 236067071);
                setProp(_el$7, "colorBottom", 438249471);
                setProp(_el$7, "skipFocus", true);
                setProp(_el$7, "zIndex", 200);
                setProp(_el$7, "transition", {
                    alpha: true
                });
                effect(_$p => setProp(_el$7, "alpha", backdropAlpha(), _$p));
                return _el$7;
            })() ];
        }
    });
};

export { Entity as default };