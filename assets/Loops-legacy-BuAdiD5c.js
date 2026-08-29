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
    System.register([ "./render-legacy-zhspBKrd.js", "./Lazy-legacy-BIsZ22qm.js", "./Column-legacy-CugXt5cX.js", "./Row-legacy-BZXAAvsN.js", "./components-legacy-CtMyJ2j1.js", "./state-legacy-CdoSGSvK.js" ], function(_export, _context) {
        "use strict";
        var createSignal, Index, use, createElement, mergeProps, setProp, createComponent, For, insert, createTextNode, insertNode, LazyRow, Column, Row, List, Poster, setGlobalBackground, Loops;
        return {
            setters: [ function(_renderLegacy001Js) {
                createSignal = _renderLegacy001Js.J;
                Index = _renderLegacy001Js.M;
                use = _renderLegacy001Js._;
                createElement = _renderLegacy001Js.a;
                mergeProps = _renderLegacy001Js.f;
                setProp = _renderLegacy001Js.h;
                createComponent = _renderLegacy001Js.i;
                For = _renderLegacy001Js.j;
                insert = _renderLegacy001Js.l;
                createTextNode = _renderLegacy001Js.s;
                insertNode = _renderLegacy001Js.u;
            }, function(_LazyLegacy005Js) {
                LazyRow = _LazyLegacy005Js.n;
            }, function(_ColumnLegacy007Js) {
                Column = _ColumnLegacy007Js.t;
            }, function(_RowLegacy008Js) {
                Row = _RowLegacy008Js.t;
            }, function(_componentsLegacy00cJs) {
                List = _componentsLegacy00cJs.d;
                Poster = _componentsLegacy00cJs.o;
            }, function(_stateLegacy00hJs) {
                setGlobalBackground = _stateLegacy00hJs.n;
            } ],
            execute: function execute() {
                _export("default", Loops = function Loops(props) {
                    var _createSignal = createSignal(props.data.rows[0]), _createSignal2 = _slicedToArray(_createSignal, 2), activeRow = _createSignal2[0], setActiveRow = _createSignal2[1];
                    var currentIndex = 0, solidLogo;
                    setGlobalBackground(255);
                    var titleRowStyles = {
                        fontFamily: "Raleway",
                        fontSize: 24,
                        height: 32,
                        lineHeight: 32
                    };
                    function switchRow(e) {
                        if (e.key === "[") currentIndex = Math.max(0, currentIndex - 1);
                        if (e.key === "]") currentIndex = Math.min(props.data.rows.length - 1, currentIndex + 1);
                        if (e.key === "\\") {
                            var row = props.data.rows[0];
                            var items = row.items().slice().reverse();
                            row.setItems(items);
                            return;
                        }
                        setActiveRow(props.data.rows[currentIndex]);
                    }
                    return [ function() {
                        var _el$ = createElement("view"), _el$2 = createElement("text"), _el$4 = createElement("view"), _el$5 = createElement("view"), _el$6 = createElement("text");
                        insertNode(_el$, _el$2);
                        insertNode(_el$, _el$4);
                        insertNode(_el$, _el$5);
                        insertNode(_el$, _el$6);
                        var _ref$ = solidLogo;
                        typeof _ref$ === "function" ? use(_ref$, _el$) : solidLogo = _el$;
                        setProp(_el$, "width", 300);
                        setProp(_el$, "height", 150);
                        setProp(_el$, "x", 162);
                        setProp(_el$, "y", 80);
                        setProp(_el$, "zIndex", 105);
                        insertNode(_el$2, createTextNode("Built With:"));
                        setProp(_el$2, "x", 80);
                        setProp(_el$2, "fontSize", 28);
                        setProp(_el$2, "color", 4143380121);
                        setProp(_el$4, "y", 32);
                        setProp(_el$4, "src", "./assets/solidWord.png");
                        setProp(_el$4, "width", 280);
                        setProp(_el$4, "height", 52);
                        setProp(_el$5, "x", 0);
                        setProp(_el$5, "y", 110);
                        setProp(_el$5, "src", "./assets/tmdb.png");
                        setProp(_el$5, "width", 80);
                        setProp(_el$5, "height", 41);
                        insertNode(_el$6, createTextNode("This product uses the TMDB API but is not endorsed or certified by TMDB."));
                        setProp(_el$6, "x", 90);
                        setProp(_el$6, "y", 110);
                        setProp(_el$6, "contain", "width");
                        setProp(_el$6, "width", 160);
                        setProp(_el$6, "fontSize", 12);
                        setProp(_el$6, "color", 4143380121);
                        return _el$;
                    }(), createComponent(Column, {
                        get autofocus() {
                            var _activeRow;
                            return (_activeRow = activeRow()) == null ? void 0 : _activeRow.items();
                        },
                        y: 240,
                        onKeyPress: switchRow,
                        get children() {
                            return [ function() {
                                var _el$8 = createElement("view"), _el$9 = createElement("text");
                                insertNode(_el$8, _el$9);
                                setProp(_el$8, "x", 160);
                                setProp(_el$8, "height", 300);
                                setProp(_el$8, "forwardFocus", 1);
                                setProp(_el$8, "marginTop", 30);
                                insertNode(_el$9, createTextNode("For Loop"));
                                setProp(_el$9, "skipFocus", true);
                                setProp(_el$9, "style", titleRowStyles);
                                insert(_el$8, createComponent(Row, {
                                    gap: 20,
                                    y: 40,
                                    display: "block",
                                    get children() {
                                        return createComponent(For, {
                                            get each() {
                                                var _activeRow2;
                                                return (_activeRow2 = activeRow()) == null ? void 0 : _activeRow2.items();
                                            },
                                            children: function children(item, index) {
                                                return createComponent(Poster, mergeProps({
                                                    get x() {
                                                        return index() * 210;
                                                    }
                                                }, item));
                                            }
                                        });
                                    }
                                }), null);
                                return _el$8;
                            }(), function() {
                                var _el$1 = createElement("view"), _el$10 = createElement("text");
                                insertNode(_el$1, _el$10);
                                setProp(_el$1, "x", 160);
                                setProp(_el$1, "height", 300);
                                setProp(_el$1, "forwardFocus", 1);
                                setProp(_el$1, "marginTop", 30);
                                insertNode(_el$10, createTextNode("Map Loop"));
                                setProp(_el$10, "skipFocus", true);
                                setProp(_el$10, "style", titleRowStyles);
                                insert(_el$1, createComponent(Row, {
                                    gap: 20,
                                    y: 40,
                                    display: "block",
                                    get children() {
                                        var _activeRow3;
                                        return (_activeRow3 = activeRow()) == null || (_activeRow3 = _activeRow3.items()) == null ? void 0 : _activeRow3.map(function(item, index) {
                                            return createComponent(Poster, mergeProps({
                                                x: index * 210
                                            }, item));
                                        });
                                    }
                                }), null);
                                return _el$1;
                            }(), function() {
                                var _el$12 = createElement("view"), _el$13 = createElement("text");
                                insertNode(_el$12, _el$13);
                                setProp(_el$12, "x", 160);
                                setProp(_el$12, "height", 300);
                                setProp(_el$12, "forwardFocus", 1);
                                setProp(_el$12, "marginTop", 30);
                                insertNode(_el$13, createTextNode("Index Loop"));
                                setProp(_el$13, "skipFocus", true);
                                setProp(_el$13, "style", titleRowStyles);
                                insert(_el$12, createComponent(Row, {
                                    gap: 20,
                                    y: 40,
                                    display: "block",
                                    get children() {
                                        return createComponent(Index, {
                                            get each() {
                                                var _activeRow4;
                                                return (_activeRow4 = activeRow()) == null ? void 0 : _activeRow4.items();
                                            },
                                            children: function children(item, index) {
                                                return createComponent(Poster, mergeProps({
                                                    x: index * 210
                                                }, item));
                                            }
                                        });
                                    }
                                }), null);
                                return _el$12;
                            }(), function() {
                                var _el$15 = createElement("view"), _el$16 = createElement("text");
                                insertNode(_el$15, _el$16);
                                setProp(_el$15, "x", 160);
                                setProp(_el$15, "height", 300);
                                setProp(_el$15, "forwardFocus", 1);
                                setProp(_el$15, "marginTop", 30);
                                insertNode(_el$16, createTextNode("Lazy Row Loop"));
                                setProp(_el$16, "skipFocus", true);
                                setProp(_el$16, "style", titleRowStyles);
                                insert(_el$15, createComponent(LazyRow, {
                                    display: "block",
                                    gap: 20,
                                    upCount: 5,
                                    get each() {
                                        var _activeRow5;
                                        return (_activeRow5 = activeRow()) == null ? void 0 : _activeRow5.items();
                                    },
                                    y: 50,
                                    children: function children(item, index) {
                                        return createComponent(Poster, mergeProps({
                                            x: index * 210
                                        }, item));
                                    }
                                }), null);
                                return _el$15;
                            }(), function() {
                                var _el$18 = createElement("view"), _el$19 = createElement("text");
                                insertNode(_el$18, _el$19);
                                setProp(_el$18, "x", 160);
                                setProp(_el$18, "height", 300);
                                setProp(_el$18, "forwardFocus", 1);
                                setProp(_el$18, "marginTop", 30);
                                insertNode(_el$19, createTextNode("List Loop"));
                                setProp(_el$19, "skipFocus", true);
                                setProp(_el$19, "style", titleRowStyles);
                                insert(_el$18, createComponent(Row, {
                                    gap: 20,
                                    y: 40,
                                    display: "block",
                                    get children() {
                                        return createComponent(List, {
                                            get each() {
                                                var _activeRow6;
                                                return (_activeRow6 = activeRow()) == null ? void 0 : _activeRow6.items();
                                            },
                                            children: function children(item, index) {
                                                return createComponent(Poster, mergeProps({
                                                    get x() {
                                                        return index() * 210;
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
                                }), null);
                                return _el$18;
                            }() ];
                        }
                    }) ];
                });
            }
        };
    });
})();