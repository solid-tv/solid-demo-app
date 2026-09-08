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
    System.register([ "./render-legacy-BWVYYcsn.js", "./mergeProps-legacy-D2-w7VmI.js", "./Lazy-legacy-CAZZhQwh.js", "./Column-legacy-CpMvWA94.js", "./Row-legacy-BhL2xbQP.js", "./components-legacy-BjVQ_G3e.js", "./state-legacy-DCkLOvQm.js" ], function(_export, _context) {
        var For, createElement, use, createComponent, Index, insert, setProp, createSignal, createTextNode, insertNode, mergeProps, LazyRow, Column, Row, List, Poster, setGlobalBackground;
        return {
            setters: [ function(_renderLegacy002Js) {
                For = _renderLegacy002Js.A, createElement = _renderLegacy002Js.a, use = _renderLegacy002Js.g, 
                createComponent = _renderLegacy002Js.i, Index = _renderLegacy002Js.j, insert = _renderLegacy002Js.l, 
                setProp = _renderLegacy002Js.m, createSignal = _renderLegacy002Js.q, createTextNode = _renderLegacy002Js.s, 
                insertNode = _renderLegacy002Js.u;
            }, function(_mergePropsLegacy005Js) {
                mergeProps = _mergePropsLegacy005Js.t;
            }, function(_LazyLegacy008Js) {
                LazyRow = _LazyLegacy008Js.n;
            }, function(_ColumnLegacy00aJs) {
                Column = _ColumnLegacy00aJs.t;
            }, function(_RowLegacy00bJs) {
                Row = _RowLegacy00bJs.t;
            }, function(_componentsLegacy00eJs) {
                List = _componentsLegacy00eJs.p, Poster = _componentsLegacy00eJs.s;
            }, function(_stateLegacy00jJs) {
                setGlobalBackground = _stateLegacy00jJs.n;
            } ],
            execute: function() {
                _export("default", function(props) {
                    var solidLogo, _createSignal2 = _slicedToArray(createSignal(props.data.rows[0]), 2), activeRow = _createSignal2[0], setActiveRow = _createSignal2[1], currentIndex = 0;
                    setGlobalBackground(255);
                    var titleRowStyles = {
                        fontFamily: "Raleway",
                        fontSize: 24,
                        height: 32,
                        lineHeight: 32
                    };
                    return [ function() {
                        var _el$ = createElement("view"), _el$2 = createElement("text"), _el$4 = createElement("view"), _el$5 = createElement("view"), _el$6 = createElement("text");
                        insertNode(_el$, _el$2), insertNode(_el$, _el$4), insertNode(_el$, _el$5), insertNode(_el$, _el$6);
                        return "function" == typeof solidLogo ? use(solidLogo, _el$) : solidLogo = _el$, 
                        setProp(_el$, "width", 300), setProp(_el$, "height", 150), setProp(_el$, "x", 162), 
                        setProp(_el$, "y", 80), setProp(_el$, "zIndex", 105), insertNode(_el$2, createTextNode("Built With:")), 
                        setProp(_el$2, "x", 80), setProp(_el$2, "fontSize", 28), setProp(_el$2, "color", 4143380121), 
                        setProp(_el$4, "y", 32), setProp(_el$4, "src", "./assets/solidWord.png"), setProp(_el$4, "width", 280), 
                        setProp(_el$4, "height", 52), setProp(_el$5, "x", 0), setProp(_el$5, "y", 110), 
                        setProp(_el$5, "src", "./assets/tmdb.png"), setProp(_el$5, "width", 80), setProp(_el$5, "height", 41), 
                        insertNode(_el$6, createTextNode("This product uses the TMDB API but is not endorsed or certified by TMDB.")), 
                        setProp(_el$6, "x", 90), setProp(_el$6, "y", 110), setProp(_el$6, "contain", "width"), 
                        setProp(_el$6, "width", 160), setProp(_el$6, "fontSize", 12), setProp(_el$6, "color", 4143380121), 
                        _el$;
                    }(), createComponent(Column, {
                        get autofocus() {
                            var _activeRow;
                            return null == (_activeRow = activeRow()) ? void 0 : _activeRow.items();
                        },
                        y: 240,
                        onKeyPress: function(e) {
                            if ("[" === e.key && (currentIndex = Math.max(0, currentIndex - 1)), "]" === e.key && (currentIndex = Math.min(props.data.rows.length - 1, currentIndex + 1)), 
                            "\\" !== e.key) setActiveRow(props.data.rows[currentIndex]); else {
                                var row = props.data.rows[0], items = row.items().slice().reverse();
                                row.setItems(items);
                            }
                        },
                        get children() {
                            return [ (_el$8 = createElement("view"), _el$9 = createElement("text"), insertNode(_el$8, _el$9), 
                            setProp(_el$8, "x", 160), setProp(_el$8, "height", 300), setProp(_el$8, "forwardFocus", 1), 
                            setProp(_el$8, "marginTop", 30), insertNode(_el$9, createTextNode("For Loop")), 
                            setProp(_el$9, "skipFocus", !0), setProp(_el$9, "style", titleRowStyles), insert(_el$8, createComponent(Row, {
                                gap: 20,
                                y: 40,
                                display: "block",
                                get children() {
                                    return createComponent(For, {
                                        get each() {
                                            var _activeRow2;
                                            return null == (_activeRow2 = activeRow()) ? void 0 : _activeRow2.items();
                                        },
                                        children: function(item, index) {
                                            return createComponent(Poster, mergeProps({
                                                get x() {
                                                    return 210 * index();
                                                }
                                            }, item));
                                        }
                                    });
                                }
                            }), null), _el$8), (_el$1 = createElement("view"), _el$10 = createElement("text"), 
                            insertNode(_el$1, _el$10), setProp(_el$1, "x", 160), setProp(_el$1, "height", 300), 
                            setProp(_el$1, "forwardFocus", 1), setProp(_el$1, "marginTop", 30), insertNode(_el$10, createTextNode("Map Loop")), 
                            setProp(_el$10, "skipFocus", !0), setProp(_el$10, "style", titleRowStyles), insert(_el$1, createComponent(Row, {
                                gap: 20,
                                y: 40,
                                display: "block",
                                get children() {
                                    var _activeRow3;
                                    return null == (_activeRow3 = activeRow()) || null == (_activeRow3 = _activeRow3.items()) ? void 0 : _activeRow3.map(function(item, index) {
                                        return createComponent(Poster, mergeProps({
                                            x: 210 * index
                                        }, item));
                                    });
                                }
                            }), null), _el$1), (_el$12 = createElement("view"), _el$13 = createElement("text"), 
                            insertNode(_el$12, _el$13), setProp(_el$12, "x", 160), setProp(_el$12, "height", 300), 
                            setProp(_el$12, "forwardFocus", 1), setProp(_el$12, "marginTop", 30), insertNode(_el$13, createTextNode("Index Loop")), 
                            setProp(_el$13, "skipFocus", !0), setProp(_el$13, "style", titleRowStyles), insert(_el$12, createComponent(Row, {
                                gap: 20,
                                y: 40,
                                display: "block",
                                get children() {
                                    return createComponent(Index, {
                                        get each() {
                                            var _activeRow4;
                                            return null == (_activeRow4 = activeRow()) ? void 0 : _activeRow4.items();
                                        },
                                        children: function(item, index) {
                                            return createComponent(Poster, mergeProps({
                                                x: 210 * index
                                            }, item));
                                        }
                                    });
                                }
                            }), null), _el$12), (_el$15 = createElement("view"), _el$16 = createElement("text"), 
                            insertNode(_el$15, _el$16), setProp(_el$15, "x", 160), setProp(_el$15, "height", 300), 
                            setProp(_el$15, "forwardFocus", 1), setProp(_el$15, "marginTop", 30), insertNode(_el$16, createTextNode("Lazy Row Loop")), 
                            setProp(_el$16, "skipFocus", !0), setProp(_el$16, "style", titleRowStyles), insert(_el$15, createComponent(LazyRow, {
                                display: "block",
                                gap: 20,
                                upCount: 5,
                                get each() {
                                    var _activeRow5;
                                    return null == (_activeRow5 = activeRow()) ? void 0 : _activeRow5.items();
                                },
                                y: 50,
                                children: function(item, index) {
                                    return createComponent(Poster, mergeProps({
                                        x: 210 * index
                                    }, item));
                                }
                            }), null), _el$15), (_el$18 = createElement("view"), _el$19 = createElement("text"), 
                            insertNode(_el$18, _el$19), setProp(_el$18, "x", 160), setProp(_el$18, "height", 300), 
                            setProp(_el$18, "forwardFocus", 1), setProp(_el$18, "marginTop", 30), insertNode(_el$19, createTextNode("List Loop")), 
                            setProp(_el$19, "skipFocus", !0), setProp(_el$19, "style", titleRowStyles), insert(_el$18, createComponent(Row, {
                                gap: 20,
                                y: 40,
                                display: "block",
                                get children() {
                                    return createComponent(List, {
                                        get each() {
                                            var _activeRow6;
                                            return null == (_activeRow6 = activeRow()) ? void 0 : _activeRow6.items();
                                        },
                                        children: function(item, index) {
                                            return createComponent(Poster, mergeProps({
                                                get x() {
                                                    return 210 * index();
                                                }
                                            }, item, {
                                                transition: {
                                                    x: {
                                                        duration: 5550
                                                    }
                                                }
                                            }));
                                        }
                                    });
                                }
                            }), null), _el$18) ];
                            var _el$18, _el$19, _el$15, _el$16, _el$12, _el$13, _el$1, _el$10, _el$8, _el$9;
                        }
                    }) ];
                });
            }
        };
    });
}();