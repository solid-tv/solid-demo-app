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
    System.register([ "./render-legacy-BRuM8LTh.js", "./Column-legacy-DE44BTJJ.js", "./theme-legacy-Bdf29FvE.js", "./state-legacy-DC8YagsL.js" ], function(_export, _context) {
        var onMount, For, createElement, effect, use, createComponent, insert, setProp, createSignal, createTextNode, insertNode, Column, theme_default, setGlobalBackground, PANEL_W, PANEL_H, BLOCK_W, BLOCK_H, GAP, scenarios;
        function Block(props) {
            return _el$ = createElement("view"), setProp(_el$, "width", BLOCK_W), setProp(_el$, "height", BLOCK_H), 
            setProp(_el$, "borderRadius", 4), effect(function(_$p) {
                return setProp(_el$, "color", props.color, _$p);
            }), _el$;
            var _el$;
        }
        function Panel(props) {
            var container, _createSignal2 = _slicedToArray(createSignal("measuring..."), 2), measurement = _createSignal2[0], setMeasurement = _createSignal2[1], measure = function() {
                if (container) {
                    var xs = container.children.map(function(c) {
                        return Math.round(c.x || 0);
                    }).join(", ");
                    setMeasurement("width ".concat(Math.round(container.width || 0), "   |   child x  ").concat(xs));
                }
            };
            onMount(function() {
                requestAnimationFrame(function() {
                    return requestAnimationFrame(measure);
                }), setTimeout(measure, 500);
            });
            var blockColor = props.after ? 1256095999 : 4168184319;
            return function() {
                var _el$2 = createElement("view"), _el$3 = createElement("view"), _el$4 = createElement("view"), _el$5 = createElement("view"), _el$6 = createElement("text");
                insertNode(_el$2, _el$3), insertNode(_el$2, _el$6), insertNode(_el$3, _el$4), insertNode(_el$3, _el$5), 
                setProp(_el$3, "clipping", !0), setProp(_el$3, "width", PANEL_W), setProp(_el$3, "height", PANEL_H), 
                setProp(_el$3, "borderRadius", 6), setProp(_el$3, "color", 236067071);
                return "function" == typeof container ? use(container, _el$4) : container = _el$4, 
                setProp(_el$4, "display", "flex"), setProp(_el$4, "gap", GAP), setProp(_el$4, "y", 30), 
                insert(_el$4, createComponent(Block, {
                    color: blockColor
                }), null), insert(_el$4, createComponent(Block, {
                    color: blockColor
                }), null), insert(_el$4, createComponent(Block, {
                    color: blockColor
                }), null), setProp(_el$5, "y", 0), setProp(_el$5, "width", 2), setProp(_el$5, "height", PANEL_H), 
                setProp(_el$5, "color", 4294967091), setProp(_el$6, "y", 128), setProp(_el$6, "fontSize", 20), 
                insert(_el$6, measurement), effect(function(_p$) {
                    var _v$ = {
                        width: 2,
                        color: props.after ? 1256095829 : 4168184149
                    }, _v$2 = props.scenario.x, _v$3 = props.after && props.scenario.changes ? PANEL_W - props.scenario.x : void 0, _v$4 = props.scenario.justifyContent, _v$5 = props.scenario.flexBoundary, _v$6 = props.after ? 1256095778 : 4168184098, _v$7 = props.scenario.x, _v$8 = theme_default.textSecondary;
                    return _v$ !== _p$.e && (_p$.e = setProp(_el$3, "border", _v$, _p$.e)), _v$2 !== _p$.t && (_p$.t = setProp(_el$4, "x", _v$2, _p$.t)), 
                    _v$3 !== _p$.a && (_p$.a = setProp(_el$4, "width", _v$3, _p$.a)), _v$4 !== _p$.o && (_p$.o = setProp(_el$4, "justifyContent", _v$4, _p$.o)), 
                    _v$5 !== _p$.i && (_p$.i = setProp(_el$4, "flexBoundary", _v$5, _p$.i)), _v$6 !== _p$.n && (_p$.n = setProp(_el$4, "color", _v$6, _p$.n)), 
                    _v$7 !== _p$.s && (_p$.s = setProp(_el$5, "x", _v$7, _p$.s)), _v$8 !== _p$.h && (_p$.h = setProp(_el$6, "color", _v$8, _p$.h)), 
                    _p$;
                }, {
                    e: void 0,
                    t: void 0,
                    a: void 0,
                    o: void 0,
                    i: void 0,
                    n: void 0,
                    s: void 0,
                    h: void 0
                }), _el$2;
            }();
        }
        function Card(props) {
            return _el$7 = createElement("view"), _el$8 = createElement("text"), _el$9 = createElement("text"), 
            _el$0 = createElement("text"), _el$1 = createElement("view"), _el$10 = createElement("view"), 
            insertNode(_el$7, _el$8), insertNode(_el$7, _el$9), insertNode(_el$7, _el$0), insertNode(_el$7, _el$1), 
            insertNode(_el$7, _el$10), setProp(_el$7, "width", 1720), setProp(_el$7, "height", 196), 
            setProp(_el$7, "borderRadius", 8), setProp(_el$7, "color", 623654911), setProp(_el$7, "transition", {
                color: !0
            }), setProp(_el$7, "$focus", {
                color: 859855615
            }), setProp(_el$8, "x", 24), setProp(_el$8, "y", 18), setProp(_el$8, "fontSize", 28), 
            insert(_el$8, function() {
                return props.scenario.title;
            }), setProp(_el$9, "x", 24), setProp(_el$9, "y", 56), setProp(_el$9, "fontSize", 19), 
            setProp(_el$9, "width", 210), setProp(_el$9, "maxHeight", 92), setProp(_el$9, "contain", "both"), 
            insert(_el$9, function() {
                return props.scenario.note;
            }), setProp(_el$0, "x", 24), setProp(_el$0, "y", 162), setProp(_el$0, "fontSize", 19), 
            insert(_el$0, function() {
                return props.scenario.verdict;
            }), setProp(_el$1, "x", 250), setProp(_el$1, "y", 18), insert(_el$1, createComponent(Panel, {
                get scenario() {
                    return props.scenario;
                },
                after: !1
            })), setProp(_el$10, "x", 990), setProp(_el$10, "y", 18), insert(_el$10, createComponent(Panel, {
                get scenario() {
                    return props.scenario;
                },
                after: !0
            })), effect(function(_p$) {
                var _v$9 = theme_default.textPrimary, _v$0 = theme_default.textSecondary, _v$1 = props.scenario.changes ? theme_default.warning : theme_default.success;
                return _v$9 !== _p$.e && (_p$.e = setProp(_el$8, "color", _v$9, _p$.e)), _v$0 !== _p$.t && (_p$.t = setProp(_el$9, "color", _v$0, _p$.t)), 
                _v$1 !== _p$.a && (_p$.a = setProp(_el$0, "color", _v$1, _p$.a)), _p$;
            }, {
                e: void 0,
                t: void 0,
                a: void 0
            }), _el$7;
            var _el$7, _el$8, _el$9, _el$0, _el$1, _el$10;
        }
        return {
            setters: [ function(_renderLegacy002Js) {
                onMount = _renderLegacy002Js.$, For = _renderLegacy002Js.A, createElement = _renderLegacy002Js.a, 
                effect = _renderLegacy002Js.c, use = _renderLegacy002Js.g, createComponent = _renderLegacy002Js.i, 
                insert = _renderLegacy002Js.l, setProp = _renderLegacy002Js.m, createSignal = _renderLegacy002Js.q, 
                createTextNode = _renderLegacy002Js.s, insertNode = _renderLegacy002Js.u;
            }, function(_ColumnLegacy00aJs) {
                Column = _ColumnLegacy00aJs.t;
            }, function(_themeLegacy00hJs) {
                theme_default = _themeLegacy00hJs.t;
            }, function(_stateLegacy00jJs) {
                setGlobalBackground = _stateLegacy00jJs.n;
            } ],
            execute: function() {
                PANEL_W = 700, PANEL_H = 120, BLOCK_W = 90, BLOCK_H = 56, GAP = 16, scenarios = [ {
                    title: 'justifyContent="center"',
                    note: "The row you actually wanted centered.",
                    x: 0,
                    justifyContent: "center",
                    changes: !0,
                    verdict: "w 0 -> w 700"
                }, {
                    title: "center, container at x={240}",
                    note: "The accidental pattern: content looked centered on the container's own x.",
                    x: 240,
                    justifyContent: "center",
                    changes: !0,
                    verdict: "centers x -> parent edge"
                }, {
                    title: 'justifyContent="flexEnd"',
                    note: "Right aligns to the parent's right edge, not to the container's own x.",
                    x: 0,
                    justifyContent: "flexEnd",
                    changes: !0,
                    verdict: "w 0 -> w 700"
                }, {
                    title: 'justifyContent="spaceBetween"',
                    note: "Negative spacing today, so the children stack on top of each other.",
                    x: 0,
                    justifyContent: "spaceBetween",
                    changes: !0,
                    verdict: "overlap -> spread"
                }, {
                    title: 'justifyContent="spaceEvenly"',
                    note: "Same failure shape as spaceBetween and spaceAround.",
                    x: 0,
                    justifyContent: "spaceEvenly",
                    changes: !0,
                    verdict: "overlap -> spread"
                }, {
                    title: 'justifyContent="flexStart"',
                    note: "Untouched - flexStart is the one branch that grows the container back to fit.",
                    x: 0,
                    justifyContent: "flexStart",
                    changes: !1,
                    verdict: "unchanged"
                }, {
                    title: "no justifyContent",
                    note: "Untouched. Same default shrink-to-fit as flexStart.",
                    x: 0,
                    changes: !1,
                    verdict: "unchanged"
                }, {
                    title: 'flexBoundary="contain" + center',
                    note: "Untouched - an explicit boundary wins. The one case that warns in dev after the PR.",
                    x: 0,
                    justifyContent: "center",
                    flexBoundary: "contain",
                    changes: !1,
                    verdict: "warns in dev"
                } ], _export("default", function() {
                    return onMount(function() {
                        setGlobalBackground(236067071);
                    }), _el$11 = createElement("view"), _el$12 = createElement("text"), _el$14 = createElement("text"), 
                    _el$16 = createElement("text"), _el$18 = createElement("text"), _el$20 = createElement("view"), 
                    _el$21 = createElement("view"), _el$22 = createElement("text"), _el$23 = createTextNode("AFTER renders width={parentWidth - x} on the container - the one value PR #51 changes. No non-flexStart branch of flex.ts resizes the container afterwards, so this is what the patched library produces."), 
                    insertNode(_el$11, _el$12), insertNode(_el$11, _el$14), insertNode(_el$11, _el$16), 
                    insertNode(_el$11, _el$18), insertNode(_el$11, _el$20), insertNode(_el$11, _el$21), 
                    insertNode(_el$11, _el$22), setProp(_el$11, "width", 1920), setProp(_el$11, "height", 1080), 
                    insertNode(_el$12, createTextNode("Flex justifyContent without a width - PR #51")), 
                    setProp(_el$12, "x", 150), setProp(_el$12, "y", 14), setProp(_el$12, "fontSize", 40), 
                    insertNode(_el$14, createTextNode("solid-tv/solid#51 - a no-width flex row seeds w=0 today, so every justify mode except flexStart has no free space to distribute")), 
                    setProp(_el$14, "x", 150), setProp(_el$14, "y", 66), setProp(_el$14, "fontSize", 22), 
                    insertNode(_el$16, createTextNode("NOW - @solidtv/solid 1.5.2")), setProp(_el$16, "x", 400), 
                    setProp(_el$16, "y", 108), setProp(_el$16, "fontSize", 26), insertNode(_el$18, createTextNode("AFTER - PR #51")), 
                    setProp(_el$18, "x", 1140), setProp(_el$18, "y", 108), setProp(_el$18, "fontSize", 26), 
                    setProp(_el$20, "x", 150), setProp(_el$20, "y", 146), setProp(_el$20, "width", 1720), 
                    setProp(_el$20, "height", 2), setProp(_el$20, "color", 977425151), setProp(_el$21, "clipping", !0), 
                    setProp(_el$21, "y", 156), setProp(_el$21, "x", 150), setProp(_el$21, "width", 1730), 
                    setProp(_el$21, "height", 876), insert(_el$21, createComponent(Column, {
                        scroll: "auto",
                        gap: 16,
                        autofocus: !0,
                        get children() {
                            return createComponent(For, {
                                each: scenarios,
                                children: function(scenario) {
                                    return createComponent(Card, {
                                        scenario: scenario
                                    });
                                }
                            });
                        }
                    })), insertNode(_el$22, _el$23), setProp(_el$22, "x", 150), setProp(_el$22, "y", 1042), 
                    setProp(_el$22, "fontSize", 19), effect(function(_p$) {
                        var _v$10 = theme_default.textPrimary, _v$11 = theme_default.textSecondary, _v$12 = theme_default.error, _v$13 = theme_default.success, _v$14 = theme_default.textSecondary;
                        return _v$10 !== _p$.e && (_p$.e = setProp(_el$12, "color", _v$10, _p$.e)), _v$11 !== _p$.t && (_p$.t = setProp(_el$14, "color", _v$11, _p$.t)), 
                        _v$12 !== _p$.a && (_p$.a = setProp(_el$16, "color", _v$12, _p$.a)), _v$13 !== _p$.o && (_p$.o = setProp(_el$18, "color", _v$13, _p$.o)), 
                        _v$14 !== _p$.i && (_p$.i = setProp(_el$22, "color", _v$14, _p$.i)), _p$;
                    }, {
                        e: void 0,
                        t: void 0,
                        a: void 0,
                        o: void 0,
                        i: void 0
                    }), _el$11;
                    var _el$11, _el$12, _el$14, _el$16, _el$18, _el$20, _el$21, _el$22, _el$23;
                });
            }
        };
    });
}();