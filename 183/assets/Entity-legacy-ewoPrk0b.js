!function() {
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
    System.register([ "./render-legacy-dLzA91Db.js", "./Column-legacy-vZ9l9pny.js", "./Row-legacy-BdzmVMNF.js", "./ContentBlock-legacy-CfNZlu1F.js", "./components-legacy-DpfK7YJT.js", "./routing-legacy-DxbRiyoD.js", "./styles-legacy--qMSUlWV.js", "./state-legacy-C4TEpoVI.js" ], function(_export, _context) {
        var Show, createEffect, on, createElement, effect, memo, use, createComponent, insert, setProp, createSignal, createTextNode, insertNode, Column, Row, ContentBlock, Button, TileRow, useNavigate, styles_default, setGlobalBackground;
        return {
            setters: [ function(_renderLegacy002Js) {
                Show = _renderLegacy002Js.N, createEffect = _renderLegacy002Js.V, _renderLegacy002Js.Vt, 
                on = _renderLegacy002Js.Z, createElement = _renderLegacy002Js.a, effect = _renderLegacy002Js.c, 
                memo = _renderLegacy002Js.d, use = _renderLegacy002Js.g, createComponent = _renderLegacy002Js.i, 
                insert = _renderLegacy002Js.l, setProp = _renderLegacy002Js.m, createSignal = _renderLegacy002Js.q, 
                createTextNode = _renderLegacy002Js.s, insertNode = _renderLegacy002Js.u;
            }, function(_ColumnLegacy00aJs) {
                Column = _ColumnLegacy00aJs.t;
            }, function(_RowLegacy00bJs) {
                Row = _RowLegacy00bJs.t;
            }, function(_ContentBlockLegacy00cJs) {
                ContentBlock = _ContentBlockLegacy00cJs.t;
            }, function(_componentsLegacy00eJs) {
                Button = _componentsLegacy00eJs.r, TileRow = _componentsLegacy00eJs.u;
            }, function(_routingLegacy00gJs) {
                useNavigate = _routingLegacy00gJs.d;
            }, function(_stylesLegacy00iJs) {
                styles_default = _stylesLegacy00iJs.r;
            }, function(_stateLegacy00jJs) {
                setGlobalBackground = _stateLegacy00jJs.n;
            } ],
            execute: function() {
                _export("default", function(props) {
                    var _createSignal2 = _slicedToArray(createSignal(0), 2), backdropAlpha = _createSignal2[0], setBackdropAlpha = _createSignal2[1], _createSignal4 = _slicedToArray(createSignal(!1), 2), playFocused = _createSignal4[0], setPlayFocused = _createSignal4[1], navigate = useNavigate();
                    createEffect(on(props.data.entity, function(data) {
                        setGlobalBackground(data.backgroundImage);
                    }, {
                        defer: !0
                    }));
                    var columnRef, backdropRef, entityActions, Backdrop = {
                        colorTop: 236067071,
                        colorBottom: 438249471,
                        alpha: 0,
                        width: 2e3,
                        height: 1080,
                        x: -180,
                        y: 640,
                        zIndex: 1
                    };
                    function onRowFocus() {
                        this.children[this.selected || 0].setFocus(), columnRef.y = 640, backdropRef.y = 640, 
                        backdropRef.alpha = 0;
                    }
                    function onRowFocusAnimate() {
                        this.children[this.selected || 0].setFocus(), columnRef.y = 180, backdropRef.y = 0, 
                        backdropRef.alpha = .99;
                    }
                    function onEnter() {
                        var _entity$item, entity = this.children.find(function(c) {
                            return c.states.has("focus");
                        });
                        entity && (null == (_entity$item = entity.item) || _entity$item.href), navigate(entity.item.href);
                    }
                    function onEscape() {
                        document.getElementsByTagName("canvas")[0].focus(), entityActions.setFocus(), setBackdropAlpha(0);
                    }
                    function onEnterTrailer() {
                        navigate("/player/123");
                    }
                    return createComponent(Show, {
                        get when() {
                            return props.data.entity();
                        },
                        get children() {
                            return [ function() {
                                var _el$ = createElement("view"), _el$6 = createElement("view");
                                insertNode(_el$, _el$6), setProp(_el$, "x", 170), setProp(_el$, "onUp", function() {
                                    return entityActions.setFocus();
                                }), setProp(_el$, "onEscape", onEscape), setProp(_el$, "announceContext", "Press LEFT or RIGHT to review items, press UP or DOWN to review categories, press CENTER to select"), 
                                insert(_el$, createComponent(ContentBlock, {
                                    y: 260,
                                    get marquee() {
                                        return playFocused();
                                    },
                                    get content() {
                                        return props.data.entity().heroContent;
                                    }
                                }), _el$6), insert(_el$, createComponent(Row, {
                                    ref: function(r$) {
                                        "function" == typeof entityActions ? entityActions(r$) : entityActions = r$;
                                    },
                                    y: 500,
                                    scroll: "none",
                                    height: 90,
                                    width: 640,
                                    gap: 40,
                                    onDown: function() {
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
                                }), _el$6), insert(_el$, createComponent(Column, {
                                    ref: function(r$) {
                                        "function" == typeof columnRef ? columnRef(r$) : columnRef = r$;
                                    },
                                    x: 0,
                                    y: 640,
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
                                                return memo(function() {
                                                    return !!props.data.recommendations();
                                                })() && props.data.credits();
                                            },
                                            get children() {
                                                return [ (_el$2 = createElement("text"), insertNode(_el$2, createTextNode("Recommendations")), 
                                                setProp(_el$2, "skipFocus", !0), effect(function(_$p) {
                                                    return setProp(_el$2, "style", styles_default.RowTitle, _$p);
                                                }), _el$2), createComponent(TileRow, {
                                                    onFocus: onRowFocus,
                                                    onEnter: onEnter,
                                                    announce: "Recommendations",
                                                    group: "recommendation",
                                                    get items() {
                                                        return props.data.recommendations();
                                                    },
                                                    width: 1620
                                                }), (_el$4 = createElement("text"), insertNode(_el$4, createTextNode("Cast and Crew")), 
                                                setProp(_el$4, "skipFocus", !0), effect(function(_$p) {
                                                    return setProp(_el$4, "style", styles_default.RowTitle, _$p);
                                                }), _el$4), createComponent(TileRow, {
                                                    announce: "Cast and Crew",
                                                    onFocus: onRowFocusAnimate,
                                                    onEnter: onEnter,
                                                    get items() {
                                                        return props.data.credits();
                                                    },
                                                    width: 1620
                                                }) ];
                                                var _el$4, _el$2;
                                            }
                                        });
                                    }
                                }), _el$6);
                                return "function" == typeof backdropRef ? use(backdropRef, _el$6) : backdropRef = _el$6, 
                                setProp(_el$6, "style", Backdrop), setProp(_el$6, "transition", {
                                    alpha: !0,
                                    y: !0
                                }), effect(function(_$p) {
                                    return setProp(_el$, "announce", [ props.data.entity().heroContent.title, "PAUSE-1", props.data.entity().heroContent.description ], _$p);
                                }), _el$;
                            }(), (_el$7 = createElement("view"), setProp(_el$7, "colorTop", 236067071), setProp(_el$7, "colorBottom", 438249471), 
                            setProp(_el$7, "skipFocus", !0), setProp(_el$7, "zIndex", 200), setProp(_el$7, "transition", {
                                alpha: !0
                            }), effect(function(_$p) {
                                return setProp(_el$7, "alpha", backdropAlpha(), _$p);
                            }), _el$7) ];
                            var _el$7;
                        }
                    });
                });
            }
        };
    });
}();