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
    System.register([ "./render-legacy-t4wUAioc.js", "./Column-legacy-IFAmq0kZ.js", "./Row-legacy-C4R_D95v.js" ], function(_export, _context) {
        var createSignal, memo, onMount, createComponent, For, Text, View, Column, Row, Card;
        return _export("default", function() {
            performance.mark("complexflexcaps-start"), onMount(function() {
                performance.mark("complexflexcaps-end"), performance.measure("ComplexFlexCaps Render", "complexflexcaps-start", "complexflexcaps-end");
                var measure = performance.getEntriesByName("ComplexFlexCaps Render").slice(-1)[0];
                console.log("ComplexFlexCaps Render duration: ".concat(null == measure ? void 0 : measure.duration, "ms"));
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
                autofocus: !0,
                scroll: "none",
                selected: 1,
                get children() {
                    return [ createComponent(Text, {
                        skipFocus: !0,
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
                                children: function(item) {
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
                                children: function(item) {
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
                                children: function(item) {
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
                                children: function(item) {
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
                                children: function(item) {
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
                                children: function(item) {
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
                                children: function(item) {
                                    return createComponent(Card, {
                                        index: item
                                    });
                                }
                            });
                        }
                    }) ];
                }
            });
        }), {
            setters: [ function(_renderLegacy002Js) {
                createSignal = _renderLegacy002Js.J, memo = _renderLegacy002Js.d, onMount = _renderLegacy002Js.et, 
                createComponent = _renderLegacy002Js.i, For = _renderLegacy002Js.j, Text = _renderLegacy002Js.n, 
                View = _renderLegacy002Js.r;
            }, function(_ColumnLegacy009Js) {
                Column = _ColumnLegacy009Js.t;
            }, function(_RowLegacy00aJs) {
                Row = _RowLegacy00aJs.t;
            } ],
            execute: function() {
                Card = function(props) {
                    var _createSignal2 = _slicedToArray(createSignal(!1), 2), focused = _createSignal2[0], setFocused = _createSignal2[1];
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
}();