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
    System.register([ "./render-legacy-BO_iU_BL.js", "./Column-legacy-BwcQFsOy.js", "./Row-legacy-r3NfeHdw.js" ], function(_export, _context) {
        "use strict";
        var For, createSignal, memo, createComponent, Text, View, onMount, Column, Row, Card;
        function ComplexFlexCaps() {
            performance.mark("complexflexcaps-start");
            onMount(function() {
                performance.mark("complexflexcaps-end");
                performance.measure("ComplexFlexCaps Render", "complexflexcaps-start", "complexflexcaps-end");
                var measure = performance.getEntriesByName("ComplexFlexCaps Render").slice(-1)[0];
                console.log("ComplexFlexCaps Render duration: ".concat(measure == null ? void 0 : measure.duration, "ms"));
            });
            var items = Array.from({
                length: 8
            }).map(function(_, i) {
                return i;
            });
            return createComponent(Column, {
                width: 1720,
                color: 255,
                display: "flex",
                flexDirection: "column",
                height: 100,
                gap: 20,
                y: 50,
                x: 170,
                autofocus: true,
                scroll: "none",
                selected: 1,
                get children() {
                    return [ createComponent(Text, {
                        skipFocus: true,
                        fontSize: 40,
                        color: 4294967295,
                        marginBottom: 20,
                        children: "Complex Flex Layout Capped View"
                    }), createComponent(Row, {
                        width: 1400,
                        gap: 20,
                        scroll: "none",
                        get children() {
                            return createComponent(For, {
                                each: items,
                                children: function children(item) {
                                    return createComponent(Card, {
                                        index: item
                                    });
                                }
                            });
                        }
                    }), createComponent(Row, {
                        width: 1400,
                        gap: 20,
                        scroll: "none",
                        get children() {
                            return createComponent(For, {
                                each: items,
                                children: function children(item) {
                                    return createComponent(Card, {
                                        index: item
                                    });
                                }
                            });
                        }
                    }), createComponent(Row, {
                        width: 1400,
                        gap: 20,
                        scroll: "none",
                        get children() {
                            return createComponent(For, {
                                each: items,
                                children: function children(item) {
                                    return createComponent(Card, {
                                        index: item
                                    });
                                }
                            });
                        }
                    }), createComponent(Row, {
                        width: 1400,
                        gap: 20,
                        scroll: "none",
                        get children() {
                            return createComponent(For, {
                                each: items,
                                children: function children(item) {
                                    return createComponent(Card, {
                                        index: item
                                    });
                                }
                            });
                        }
                    }), createComponent(Row, {
                        width: 1400,
                        gap: 20,
                        scroll: "none",
                        get children() {
                            return createComponent(For, {
                                each: items,
                                children: function children(item) {
                                    return createComponent(Card, {
                                        index: item
                                    });
                                }
                            });
                        }
                    }), createComponent(Row, {
                        width: 1400,
                        gap: 20,
                        scroll: "none",
                        get children() {
                            return createComponent(For, {
                                each: items,
                                children: function children(item) {
                                    return createComponent(Card, {
                                        index: item
                                    });
                                }
                            });
                        }
                    }), createComponent(Row, {
                        width: 1400,
                        gap: 20,
                        scroll: "none",
                        get children() {
                            return createComponent(For, {
                                each: items,
                                children: function children(item) {
                                    return createComponent(Card, {
                                        index: item
                                    });
                                }
                            });
                        }
                    }) ];
                }
            });
        }
        _export("default", ComplexFlexCaps);
        return {
            setters: [ function(_renderLegacy001Js) {
                For = _renderLegacy001Js.M;
                createSignal = _renderLegacy001Js.Y;
                memo = _renderLegacy001Js.d;
                createComponent = _renderLegacy001Js.i;
                Text = _renderLegacy001Js.n;
                View = _renderLegacy001Js.r;
                onMount = _renderLegacy001Js.tt;
            }, function(_ColumnLegacy008Js) {
                Column = _ColumnLegacy008Js.t;
            }, function(_RowLegacy009Js) {
                Row = _RowLegacy009Js.t;
            } ],
            execute: function execute() {
                Card = function Card(props) {
                    var _createSignal = createSignal(false), _createSignal2 = _slicedToArray(_createSignal, 2), focused = _createSignal2[0], setFocused = _createSignal2[1];
                    return createComponent(View, {
                        width: 180,
                        height: 100,
                        get color() {
                            return focused() ? 858993561 : 858993663;
                        },
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 10,
                        padding: [ 0, 10 ],
                        onFocusChanged: setFocused,
                        get children() {
                            return [ createComponent(Text, {
                                fontSize: 20,
                                color: 4294967295,
                                get children() {
                                    return [ "Item ", memo(function() {
                                        return String(props.index);
                                    }) ];
                                }
                            }), createComponent(View, {
                                color: 65535,
                                padding: [ 0, 8 ],
                                borderRadius: 4,
                                height: 40,
                                display: "flex",
                                alignItems: "center",
                                get children() {
                                    return createComponent(Text, {
                                        fontSize: 16,
                                        color: 4294967295,
                                        children: "Button"
                                    });
                                }
                            }) ];
                        }
                    });
                };
            }
        };
    });
})();