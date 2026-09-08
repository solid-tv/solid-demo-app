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
    System.register([ "./render-legacy-BWVYYcsn.js", "./Column-legacy-CpMvWA94.js", "./Row-legacy-BhL2xbQP.js" ], function(_export, _context) {
        var For, Show, createElement, effect, use, createComponent, insert, setProp, createSignal, createTextNode, insertNode, Column, Row, Items, styles, SpecialFont;
        return {
            setters: [ function(_renderLegacy002Js) {
                For = _renderLegacy002Js.A, Show = _renderLegacy002Js.N, createElement = _renderLegacy002Js.a, 
                effect = _renderLegacy002Js.c, use = _renderLegacy002Js.g, createComponent = _renderLegacy002Js.i, 
                insert = _renderLegacy002Js.l, setProp = _renderLegacy002Js.m, createSignal = _renderLegacy002Js.q, 
                createTextNode = _renderLegacy002Js.s, insertNode = _renderLegacy002Js.u;
            }, function(_ColumnLegacy00aJs) {
                Column = _ColumnLegacy00aJs.t;
            }, function(_RowLegacy00bJs) {
                Row = _RowLegacy00bJs.t;
            } ],
            execute: function() {
                Items = [ "Mary", "had", "a", "little", "lamb", "her", "fleece", "was", "white", "as", "snow" ], 
                _export("styles", styles = {
                    PageContainer: {
                        width: 1920,
                        height: 1080,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 99
                    }
                }), SpecialFont = {
                    color: 4278190335,
                    $focus: {
                        color: 4294967295
                    }
                }, _export("default", function() {
                    var PageLoader, _createSignal2 = _slicedToArray(createSignal(!1), 2), lazyShow = _createSignal2[0], setLazyShow = _createSignal2[1];
                    return setTimeout(function() {
                        setLazyShow(!0), PageLoader.alpha = 0;
                    }, 2e3), createComponent(Column, {
                        display: "block",
                        get children() {
                            return [ function() {
                                var _el$ = createElement("view"), _el$2 = createElement("text"), _el$4 = createElement("view"), _el$5 = createElement("text");
                                insertNode(_el$, _el$2), insertNode(_el$, _el$4), insertNode(_el$, _el$5);
                                return "function" == typeof PageLoader ? use(PageLoader, _el$) : PageLoader = _el$, 
                                insertNode(_el$2, createTextNode("Center - gif doesnt animate")), setProp(_el$4, "autosize", !0), 
                                setProp(_el$4, "src", "./assets/spinner.gif"), insertNode(_el$5, createTextNode("Spinner")), 
                                effect(function(_$p) {
                                    return setProp(_el$, "style", styles.PageContainer, _$p);
                                }), _el$;
                            }(), createComponent(Row, {
                                scroll: "always",
                                gap: 20,
                                selected: 2,
                                autofocus: !0,
                                x: 150,
                                y: 50,
                                transition: {
                                    x: {
                                        duration: 350
                                    }
                                },
                                get children() {
                                    return createComponent(For, {
                                        each: Items,
                                        children: function(item, index) {
                                            return _el$7 = createElement("view"), setProp(_el$7, "width", 100), setProp(_el$7, "height", 200), 
                                            setProp(_el$7, "style", {
                                                color: 4278190335,
                                                $focus: {
                                                    color: 4294967295
                                                }
                                            }), _el$7;
                                            var _el$7;
                                        }
                                    });
                                }
                            }), createComponent(Show, {
                                get when() {
                                    return lazyShow();
                                },
                                get children() {
                                    return createComponent(Row, {
                                        scroll: "none",
                                        gap: 20,
                                        selected: 2,
                                        autofocus: !0,
                                        x: 150,
                                        y: 350,
                                        transition: {
                                            x: {
                                                duration: 350
                                            }
                                        },
                                        get children() {
                                            return createComponent(For, {
                                                each: Items,
                                                children: function(item, index) {
                                                    return _el$8 = createElement("view"), setProp(_el$8, "width", 100), setProp(_el$8, "height", 200), 
                                                    setProp(_el$8, "style", {
                                                        color: 4278190335,
                                                        $focus: {
                                                            color: 4294967295
                                                        }
                                                    }), _el$8;
                                                    var _el$8;
                                                }
                                            });
                                        }
                                    });
                                }
                            }), createComponent(Show, {
                                get when() {
                                    return lazyShow();
                                },
                                get children() {
                                    return createComponent(Row, {
                                        scroll: "none",
                                        gap: 20,
                                        selected: 2,
                                        x: 150,
                                        y: 650,
                                        transition: {
                                            x: {
                                                duration: 350
                                            }
                                        },
                                        get children() {
                                            return createComponent(For, {
                                                each: Items,
                                                children: function(item, index) {
                                                    return _el$9 = createElement("text"), _el$0 = createTextNode(" "), insertNode(_el$9, _el$0), 
                                                    setProp(_el$9, "style", SpecialFont), setProp(_el$9, "fontSize", 24), insert(_el$9, item, _el$0), 
                                                    insert(_el$9, function() {
                                                        return lazyShow() ? "Add Text" : "";
                                                    }, null), _el$9;
                                                    var _el$9, _el$0;
                                                }
                                            });
                                        }
                                    });
                                }
                            }), createComponent(Show, {
                                get when() {
                                    return lazyShow();
                                },
                                get children() {
                                    return createComponent(Column, {
                                        scroll: "none",
                                        gap: 20,
                                        selected: 2,
                                        x: 350,
                                        y: 450,
                                        get children() {
                                            return createComponent(For, {
                                                each: Items,
                                                children: function(item, index) {
                                                    return _el$1 = createElement("text"), setProp(_el$1, "style", SpecialFont), setProp(_el$1, "fontSize", 24), 
                                                    insert(_el$1, item), _el$1;
                                                    var _el$1;
                                                }
                                            });
                                        }
                                    });
                                }
                            }) ];
                        }
                    });
                });
            }
        };
    });
}();