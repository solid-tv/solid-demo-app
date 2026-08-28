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
    System.register([ "./render-legacy-DCiJIohl.js", "./mergeProps-legacy-DBRmp_og.js", "./theme-legacy-CRa-Zkyx.js", "./state-legacy-BXylYYGD.js" ], function(_export, _context) {
        "use strict";
        var onMount, For, createElement, effect, spread, createComponent, insert, setProp, createTextNode, insertNode, mergeProps, theme_default, setGlobalBackground, BASELINE_MODES, PageTitle, SectionTitle, SectionNote, BoxBase, Caption, TextCenteringPage;
        function getActiveBaseline() {
            var param = new URLSearchParams(window.location.search).get("textBaseline");
            if (param === "optical" || param === "cap" || param === "x" || param === "linebox") return param;
            return "optical";
        }
        function CenterLine(props) {
            return function() {
                var _el$ = createElement("view");
                setProp(_el$, "flexItem", false);
                setProp(_el$, "x", 0);
                setProp(_el$, "height", 1);
                effect(function(_p$) {
                    var _v$ = props.y, _v$2 = props.width, _v$3 = theme_default.color.red;
                    _v$ !== _p$.e && (_p$.e = setProp(_el$, "y", _v$, _p$.e));
                    _v$2 !== _p$.t && (_p$.t = setProp(_el$, "width", _v$2, _p$.t));
                    _v$3 !== _p$.a && (_p$.a = setProp(_el$, "color", _v$3, _p$.a));
                    return _p$;
                }, {
                    e: void 0,
                    t: void 0,
                    a: void 0
                });
                return _el$;
            }();
        }
        function Section1(props) {
            var boxW = 240;
            var boxH = 80;
            var wrapperH = 140;
            return function() {
                var _el$2 = createElement("view"), _el$3 = createElement("text"), _el$5 = createElement("text"), _el$7 = createElement("view");
                insertNode(_el$2, _el$3);
                insertNode(_el$2, _el$5);
                insertNode(_el$2, _el$7);
                setProp(_el$2, "y", 80);
                setProp(_el$2, "x", 200);
                setProp(_el$2, "autofocus", true);
                insertNode(_el$3, createTextNode("1. Per-line anchor: textBaselineMode"));
                setProp(_el$3, "style", SectionTitle);
                insertNode(_el$5, createTextNode("Global renderer setting. Default is 'optical'. Reload with ?textBaseline=optical | cap | x | linebox to compare."));
                setProp(_el$5, "style", SectionNote);
                setProp(_el$5, "y", 38);
                setProp(_el$7, "y", 80);
                setProp(_el$7, "display", "flex");
                setProp(_el$7, "flexDirection", "row");
                setProp(_el$7, "gap", 40);
                insert(_el$7, createComponent(For, {
                    each: BASELINE_MODES,
                    children: function children(mode) {
                        var isActive = mode === props.active;
                        return function() {
                            var _el$8 = createElement("view"), _el$9 = createElement("view"), _el$0 = createElement("text");
                            insertNode(_el$8, _el$9);
                            insertNode(_el$8, _el$0);
                            setProp(_el$8, "width", boxW);
                            setProp(_el$8, "height", wrapperH);
                            spread(_el$9, mergeProps(BoxBase, {
                                width: boxW,
                                height: boxH,
                                get border() {
                                    return {
                                        color: isActive ? theme_default.color.blue : theme_default.color.grey,
                                        width: isActive ? 2 : 1
                                    };
                                }
                            }), true);
                            insert(_el$9, isActive ? function() {
                                var _el$1 = createElement("text");
                                insertNode(_el$1, createTextNode("Button"));
                                setProp(_el$1, "fontSize", 40);
                                setProp(_el$1, "lineHeight", boxH);
                                setProp(_el$1, "centerX", true);
                                effect(function(_$p) {
                                    return setProp(_el$1, "color", theme_default.textPrimary, _$p);
                                });
                                return _el$1;
                            }() : function() {
                                var _el$11 = createElement("text");
                                insertNode(_el$11, createTextNode("reload to view"));
                                setProp(_el$11, "x", boxW / 2);
                                setProp(_el$11, "mountX", .5);
                                setProp(_el$11, "fontSize", 18);
                                setProp(_el$11, "lineHeight", boxH);
                                effect(function(_$p) {
                                    return setProp(_el$11, "color", theme_default.textSecondary, _$p);
                                });
                                return _el$11;
                            }(), null);
                            insert(_el$9, createComponent(CenterLine, {
                                y: boxH / 2,
                                width: boxW
                            }), null);
                            setProp(_el$0, "style", Caption);
                            setProp(_el$0, "y", 94);
                            insert(_el$0, isActive ? "'".concat(mode, "' (active)") : "'".concat(mode, "'"));
                            effect(function(_$p) {
                                return setProp(_el$0, "color", isActive ? theme_default.color.blue : theme_default.textSecondary, _$p);
                            });
                            return _el$8;
                        }();
                    }
                }));
                return _el$2;
            }();
        }
        function Section2() {
            var aligns = [ "top", "middle", "bottom" ];
            var boxW = 240;
            var boxH = 140;
            return function() {
                var _el$13 = createElement("view"), _el$14 = createElement("text"), _el$16 = createElement("text"), _el$18 = createElement("view");
                insertNode(_el$13, _el$14);
                insertNode(_el$13, _el$16);
                insertNode(_el$13, _el$18);
                setProp(_el$13, "y", 330);
                setProp(_el$13, "x", 200);
                insertNode(_el$14, createTextNode("2. verticalAlign with maxHeight"));
                setProp(_el$14, "style", SectionTitle);
                insertNode(_el$16, createTextNode("Same text in 240x140 boxes. Red line marks the visual center."));
                setProp(_el$16, "style", SectionNote);
                setProp(_el$16, "y", 38);
                setProp(_el$18, "y", 80);
                setProp(_el$18, "display", "flex");
                setProp(_el$18, "flexDirection", "row");
                setProp(_el$18, "gap", 40);
                insert(_el$18, createComponent(For, {
                    each: aligns,
                    children: function children(align) {
                        return function() {
                            var _el$19 = createElement("view"), _el$20 = createElement("view"), _el$21 = createElement("text"), _el$23 = createElement("text"), _el$24 = createTextNode("verticalAlign: '"), _el$25 = createTextNode("'");
                            insertNode(_el$19, _el$20);
                            insertNode(_el$19, _el$23);
                            setProp(_el$19, "width", boxW);
                            setProp(_el$19, "height", 180);
                            insertNode(_el$20, _el$21);
                            spread(_el$20, mergeProps(BoxBase, {
                                width: boxW,
                                height: boxH
                            }), true);
                            insertNode(_el$21, createTextNode("Centered"));
                            setProp(_el$21, "width", boxW);
                            setProp(_el$21, "maxHeight", boxH);
                            setProp(_el$21, "fontSize", 32);
                            setProp(_el$21, "lineHeight", 46);
                            setProp(_el$21, "verticalAlign", align);
                            setProp(_el$21, "textAlign", "center");
                            insert(_el$20, createComponent(CenterLine, {
                                y: boxH / 2,
                                width: boxW
                            }), null);
                            insertNode(_el$23, _el$24);
                            insertNode(_el$23, _el$25);
                            setProp(_el$23, "style", Caption);
                            setProp(_el$23, "y", 152);
                            insert(_el$23, align, _el$25);
                            effect(function(_$p) {
                                return setProp(_el$21, "color", theme_default.textPrimary, _$p);
                            });
                            return _el$19;
                        }();
                    }
                }));
                return _el$13;
            }();
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
            var captionX = 840;
            var Row = function Row(props) {
                return function() {
                    var _el$26 = createElement("view"), _el$27 = createElement("text"), _el$28 = createElement("view"), _el$29 = createElement("text");
                    insertNode(_el$26, _el$27);
                    insertNode(_el$26, _el$28);
                    insertNode(_el$26, _el$29);
                    setProp(_el$26, "height", rowHeight);
                    setProp(_el$27, "x", 0);
                    setProp(_el$27, "y", rowHeight / 2);
                    setProp(_el$27, "mountY", .5);
                    setProp(_el$27, "fontSize", 20);
                    setProp(_el$27, "fontWeight", "bold");
                    setProp(_el$27, "contain", "width");
                    setProp(_el$27, "width", labelW);
                    insert(_el$27, function() {
                        return props.label;
                    });
                    spread(_el$28, mergeProps(BoxBase, {
                        x: labelW,
                        width: boxW,
                        height: rowHeight,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "spaceEvenly"
                    }), true);
                    insert(_el$28, createComponent(For, {
                        each: letters,
                        children: function children(l) {
                            return props.useLineHeight ? function() {
                                var _el$30 = createElement("text");
                                setProp(_el$30, "lineHeight", rowHeight);
                                insert(_el$30, function() {
                                    return l.ch;
                                });
                                effect(function(_p$) {
                                    var _v$7 = l.size, _v$8 = theme_default.textPrimary;
                                    _v$7 !== _p$.e && (_p$.e = setProp(_el$30, "fontSize", _v$7, _p$.e));
                                    _v$8 !== _p$.t && (_p$.t = setProp(_el$30, "color", _v$8, _p$.t));
                                    return _p$;
                                }, {
                                    e: void 0,
                                    t: void 0
                                });
                                return _el$30;
                            }() : function() {
                                var _el$31 = createElement("text");
                                insert(_el$31, function() {
                                    return l.ch;
                                });
                                effect(function(_p$) {
                                    var _v$9 = l.size, _v$0 = theme_default.textPrimary;
                                    _v$9 !== _p$.e && (_p$.e = setProp(_el$31, "fontSize", _v$9, _p$.e));
                                    _v$0 !== _p$.t && (_p$.t = setProp(_el$31, "color", _v$0, _p$.t));
                                    return _p$;
                                }, {
                                    e: void 0,
                                    t: void 0
                                });
                                return _el$31;
                            }();
                        }
                    }), null);
                    insert(_el$28, createComponent(CenterLine, {
                        y: rowHeight / 2,
                        width: boxW
                    }), null);
                    setProp(_el$29, "x", captionX);
                    setProp(_el$29, "y", rowHeight / 2);
                    setProp(_el$29, "mountY", .5);
                    insert(_el$29, function() {
                        return props.caption;
                    });
                    effect(function(_p$) {
                        var _v$4 = props.y, _v$5 = theme_default.textPrimary, _v$6 = _objectSpread(_objectSpread({}, Caption), {}, {
                            width: 460
                        });
                        _v$4 !== _p$.e && (_p$.e = setProp(_el$26, "y", _v$4, _p$.e));
                        _v$5 !== _p$.t && (_p$.t = setProp(_el$27, "color", _v$5, _p$.t));
                        _v$6 !== _p$.a && (_p$.a = setProp(_el$29, "style", _v$6, _p$.a));
                        return _p$;
                    }, {
                        e: void 0,
                        t: void 0,
                        a: void 0
                    });
                    return _el$26;
                }();
            };
            return function() {
                var _el$32 = createElement("view"), _el$33 = createElement("text"), _el$35 = createElement("text");
                insertNode(_el$32, _el$33);
                insertNode(_el$32, _el$35);
                setProp(_el$32, "y", 660);
                setProp(_el$32, "x", 200);
                insertNode(_el$33, createTextNode("3. alignItems vs lineHeight"));
                setProp(_el$33, "style", SectionTitle);
                insertNode(_el$35, createTextNode("Both rows contain A/B/C at sizes 44/80/120 inside a flex row with alignItems: 'center'. Watch the cap-tops: only Row B aligns them."));
                setProp(_el$35, "style", SectionNote);
                setProp(_el$35, "y", 38);
                insert(_el$32, createComponent(Row, {
                    y: 80,
                    label: "Row A: fontSize only",
                    caption: "Flex centers each node's bounding box. Cap-tops do not align.",
                    useLineHeight: false
                }), null);
                insert(_el$32, createComponent(Row, {
                    y: 230,
                    label: "Row B: lineHeight ".concat(rowHeight),
                    caption: "Each line-box matches the row height; textBaselineMode: 'cap' cap-centers each glyph. Cap-tops align.",
                    useLineHeight: true
                }), null);
                return _el$32;
            }();
        }
        return {
            setters: [ function(_renderLegacy001Js) {
                onMount = _renderLegacy001Js.$;
                For = _renderLegacy001Js.A;
                createElement = _renderLegacy001Js.a;
                effect = _renderLegacy001Js.c;
                spread = _renderLegacy001Js.h;
                createComponent = _renderLegacy001Js.i;
                insert = _renderLegacy001Js.l;
                setProp = _renderLegacy001Js.m;
                createTextNode = _renderLegacy001Js.s;
                insertNode = _renderLegacy001Js.u;
            }, function(_mergePropsLegacy003Js) {
                mergeProps = _mergePropsLegacy003Js.t;
            }, function(_themeLegacy00gJs) {
                theme_default = _themeLegacy00gJs.t;
            }, function(_stateLegacy00iJs) {
                setGlobalBackground = _stateLegacy00iJs.n;
            } ],
            execute: function execute() {
                BASELINE_MODES = [ "optical", "cap", "x", "linebox" ];
                PageTitle = {
                    fontSize: 42,
                    fontWeight: "bold",
                    color: theme_default.textPrimary
                };
                SectionTitle = {
                    fontSize: 26,
                    fontWeight: "bold",
                    color: theme_default.textPrimary
                };
                SectionNote = {
                    fontSize: 18,
                    color: theme_default.textSecondary,
                    contain: "width",
                    width: 1600,
                    lineHeight: 24
                };
                BoxBase = {
                    color: 0,
                    border: {
                        color: theme_default.color.grey,
                        width: 1
                    }
                };
                Caption = {
                    fontSize: 17,
                    color: theme_default.textSecondary,
                    contain: "width"
                };
                _export("default", TextCenteringPage = function TextCenteringPage() {
                    var active = getActiveBaseline();
                    onMount(function() {
                        setGlobalBackground(theme_default.backgroundDark);
                    });
                    return [ function() {
                        var _el$37 = createElement("text");
                        insertNode(_el$37, createTextNode("Text Centering"));
                        setProp(_el$37, "style", PageTitle);
                        setProp(_el$37, "x", 200);
                        setProp(_el$37, "y", 20);
                        return _el$37;
                    }(), createComponent(Section1, {
                        active: active
                    }), createComponent(Section2, {}), createComponent(Section3, {}), function() {
                        var _el$39 = createElement("text");
                        insertNode(_el$39, createTextNode("Note: verticalAlign no longer requires maxHeight - it resolves against the parent's height. For single-line text, setting lineHeight to the container height is usually all you need."));
                        setProp(_el$39, "x", 200);
                        setProp(_el$39, "y", 1030);
                        effect(function(_$p) {
                            return setProp(_el$39, "style", _objectSpread(_objectSpread({}, Caption), {}, {
                                width: 1600
                            }), _$p);
                        });
                        return _el$39;
                    }() ];
                });
            }
        };
    });
})();