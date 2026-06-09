(function() {
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
    System.register([ "./index-legacy-BtisyJOc.js" ], function(exports, module) {
        "use strict";
        var createSignal, useNavigate, createEffect, on, setGlobalBackground, createComponent, Show, createElement, insertNode, setProp, insert, ContentBlock, Row, Button, Column, createTextNode, effect, styles, TileRow, memo, assertTruthy, use;
        return {
            setters: [ function(module) {
                createSignal = module.b;
                useNavigate = module.u;
                createEffect = module.i;
                on = module.j;
                setGlobalBackground = module.s;
                createComponent = module.l;
                Show = module.S;
                createElement = module.c;
                insertNode = module.n;
                setProp = module.a;
                insert = module.k;
                ContentBlock = module.H;
                Row = module.R;
                Button = module.Y;
                Column = module.C;
                createTextNode = module.p;
                effect = module.m;
                styles = module.O;
                TileRow = module._;
                memo = module.N;
                assertTruthy = module.Q;
                use = module.v;
            } ],
            execute: function execute() {
                var Entity = exports("default", function(props) {
                    var _createSignal = createSignal(0), _createSignal2 = _slicedToArray(_createSignal, 2), backdropAlpha = _createSignal2[0], setBackdropAlpha = _createSignal2[1];
                    var _createSignal3 = createSignal(false), _createSignal4 = _slicedToArray(_createSignal3, 2), playFocused = _createSignal4[0], setPlayFocused = _createSignal4[1];
                    var navigate = useNavigate();
                    createEffect(on(props.data.entity, function(data) {
                        setGlobalBackground(data.backgroundImage);
                    }, {
                        defer: true
                    }));
                    var columnY = 640;
                    var Backdrop = {
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
                        var entity = this.children.find(function(c) {
                            return c.states.has("focus");
                        });
                        assertTruthy(entity && ((_entity$item = entity.item) === null || _entity$item === void 0 ? void 0 : _entity$item.href));
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
                    var columnRef, backdropRef, entityActions;
                    return createComponent(Show, {
                        get when() {
                            return props.data.entity();
                        },
                        get children() {
                            return [ function() {
                                var _el$ = createElement("view"), _el$6 = createElement("view");
                                insertNode(_el$, _el$6);
                                setProp(_el$, "x", 170);
                                setProp(_el$, "onUp", function() {
                                    return entityActions.setFocus();
                                });
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
                                    ref: function ref(r$) {
                                        var _ref$ = entityActions;
                                        typeof _ref$ === "function" ? _ref$(r$) : entityActions = r$;
                                    },
                                    y: 500,
                                    scroll: "none",
                                    height: 90,
                                    width: 640,
                                    gap: 40,
                                    onDown: function onDown() {
                                        return columnRef.setFocus();
                                    },
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
                                    ref: function ref(r$) {
                                        var _ref$2 = columnRef;
                                        typeof _ref$2 === "function" ? _ref$2(r$) : columnRef = r$;
                                    },
                                    x: 0,
                                    y: columnY,
                                    get style() {
                                        return styles.Column;
                                    },
                                    gap: 80,
                                    height: 880,
                                    scroll: "none",
                                    zIndex: 5,
                                    get children() {
                                        return createComponent(Show, {
                                            get when() {
                                                return memo(function() {
                                                    return !!props.data.recommendations();
                                                })() && props.data.credits();
                                            },
                                            get children() {
                                                return [ function() {
                                                    var _el$2 = createElement("text");
                                                    insertNode(_el$2, createTextNode("Recommendations"));
                                                    setProp(_el$2, "skipFocus", true);
                                                    effect(function(_$p) {
                                                        return setProp(_el$2, "style", styles.RowTitle, _$p);
                                                    });
                                                    return _el$2;
                                                }(), createComponent(TileRow, {
                                                    onFocus: onRowFocus,
                                                    onEnter: onEnter,
                                                    announce: "Recommendations",
                                                    group: "recommendation",
                                                    get items() {
                                                        return props.data.recommendations();
                                                    },
                                                    width: 1620
                                                }), function() {
                                                    var _el$4 = createElement("text");
                                                    insertNode(_el$4, createTextNode("Cast and Crew"));
                                                    setProp(_el$4, "skipFocus", true);
                                                    effect(function(_$p) {
                                                        return setProp(_el$4, "style", styles.RowTitle, _$p);
                                                    });
                                                    return _el$4;
                                                }(), createComponent(TileRow, {
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
                                effect(function(_$p) {
                                    return setProp(_el$, "announce", [ props.data.entity().heroContent.title, "PAUSE-1", props.data.entity().heroContent.description ], _$p);
                                });
                                return _el$;
                            }(), function() {
                                var _el$7 = createElement("view");
                                setProp(_el$7, "colorTop", 236067071);
                                setProp(_el$7, "colorBottom", 438249471);
                                setProp(_el$7, "skipFocus", true);
                                setProp(_el$7, "zIndex", 200);
                                setProp(_el$7, "transition", {
                                    alpha: true
                                });
                                effect(function(_$p) {
                                    return setProp(_el$7, "alpha", backdropAlpha(), _$p);
                                });
                                return _el$7;
                            }() ];
                        }
                    });
                });
            }
        };
    });
})();
