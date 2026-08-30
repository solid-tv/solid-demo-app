(function() {
    function _toConsumableArray(r) {
        return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
    }
    function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _iterableToArray(r) {
        if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
    }
    function _arrayWithoutHoles(r) {
        if (Array.isArray(r)) return _arrayLikeToArray(r);
    }
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
    System.register([ "./render-legacy-BkFHmMEJ.js", "./Column-legacy-zINFEpyU.js", "./theme-legacy-CRa-Zkyx.js", "./state-legacy-DXK48JVU.js" ], function(_export, _context) {
        "use strict";
        var onMount, batch, createSelector, createEffect, createResource, on, createElement, effect, createComponent, Index, insert, setProp, createSignal, insertNode, createComputed, Column, theme_default, setGlobalBackground, ROW_HEIGHT, gridStyles_default, Grid;
        function createInfiniteItems(fetcher) {
            var _createSignal = createSignal([]), _createSignal2 = _slicedToArray(_createSignal, 2), items = _createSignal2[0], setItems = _createSignal2[1];
            var _createSignal3 = createSignal(0), _createSignal4 = _slicedToArray(_createSignal3, 2), page = _createSignal4[0], setPage = _createSignal4[1];
            var _createSignal5 = createSignal(false), _createSignal6 = _slicedToArray(_createSignal5, 2), end = _createSignal6[0], setEnd = _createSignal6[1];
            var _createResource = createResource(page, fetcher), _createResource2 = _slicedToArray(_createResource, 1), contents = _createResource2[0];
            createComputed(function() {
                var content = contents();
                if (!content) return;
                batch(function() {
                    if (content.length === 0) setEnd(true);
                    setItems(function(p) {
                        return [].concat(_toConsumableArray(p), _toConsumableArray(content));
                    });
                });
            });
            return [ items, {
                page: page,
                setPage: setPage,
                setItems: setItems,
                end: end,
                setEnd: setEnd
            } ];
        }
        function ProductRow(props) {
            return function() {
                var _el$ = createElement("view"), _el$2 = createElement("text"), _el$3 = createElement("text"), _el$4 = createElement("text");
                insertNode(_el$, _el$2);
                insertNode(_el$, _el$3);
                insertNode(_el$, _el$4);
                setProp(_el$, "forwardStates", true);
                insert(_el$2, function() {
                    return props.item.id;
                });
                insert(_el$3, function() {
                    return props.item.title;
                });
                insert(_el$4, function() {
                    return props.item.price;
                });
                effect(function(_p$) {
                    var _v$ = props.y, _v$2 = props.autofocus, _v$3 = gridStyles_default.ProductRow, _v$4 = gridStyles_default.ProductText, _v$5 = gridStyles_default.ProductText, _v$6 = gridStyles_default.ProductText;
                    _v$ !== _p$.e && (_p$.e = setProp(_el$, "y", _v$, _p$.e));
                    _v$2 !== _p$.t && (_p$.t = setProp(_el$, "autofocus", _v$2, _p$.t));
                    _v$3 !== _p$.a && (_p$.a = setProp(_el$, "style", _v$3, _p$.a));
                    _v$4 !== _p$.o && (_p$.o = setProp(_el$2, "style", _v$4, _p$.o));
                    _v$5 !== _p$.i && (_p$.i = setProp(_el$3, "style", _v$5, _p$.i));
                    _v$6 !== _p$.n && (_p$.n = setProp(_el$4, "style", _v$6, _p$.n));
                    return _p$;
                }, {
                    e: void 0,
                    t: void 0,
                    a: void 0,
                    o: void 0,
                    i: void 0,
                    n: void 0
                });
                return _el$;
            }();
        }
        return {
            setters: [ function(_renderLegacy001Js) {
                onMount = _renderLegacy001Js.$;
                batch = _renderLegacy001Js.I;
                createSelector = _renderLegacy001Js.K;
                createEffect = _renderLegacy001Js.V;
                createResource = _renderLegacy001Js.W;
                on = _renderLegacy001Js.Z;
                createElement = _renderLegacy001Js.a;
                effect = _renderLegacy001Js.c;
                createComponent = _renderLegacy001Js.i;
                Index = _renderLegacy001Js.j;
                insert = _renderLegacy001Js.l;
                setProp = _renderLegacy001Js.m;
                createSignal = _renderLegacy001Js.q;
                insertNode = _renderLegacy001Js.u;
                createComputed = _renderLegacy001Js.z;
            }, function(_ColumnLegacy008Js) {
                Column = _ColumnLegacy008Js.t;
            }, function(_themeLegacy00gJs) {
                theme_default = _themeLegacy00gJs.t;
            }, function(_stateLegacy00iJs) {
                setGlobalBackground = _stateLegacy00iJs.n;
            } ],
            execute: function execute() {
                ROW_HEIGHT = 50;
                gridStyles_default = {
                    ProductRow: {
                        width: 500,
                        display: "flex",
                        flexDirection: "row",
                        gap: 40,
                        height: ROW_HEIGHT,
                        borderRadius: 16,
                        color: 4294967053,
                        border: {
                            color: 8422911,
                            width: 0
                        },
                        active: {
                            color: 960052479
                        },
                        $focus: {
                            color: 4143380991,
                            border: {
                                color: 8422911,
                                width: 6
                            }
                        },
                        transition: {
                            x: {
                                duration: 300
                            },
                            width: {
                                duration: 300
                            },
                            alpha: {
                                duration: 300
                            }
                        }
                    },
                    ProductText: {
                        fontSize: 20,
                        fontWeight: 600,
                        lineHeight: 24,
                        color: 4143380223,
                        $focus: {
                            color: 336861183
                        }
                    },
                    itemsContainer: {
                        width: theme_default.layout.screenW,
                        height: 600,
                        y: 180,
                        x: 180,
                        zIndex: 2
                    }
                };
                _export("default", Grid = function Grid() {
                    var _createSignal7 = createSignal(0), _createSignal8 = _slicedToArray(_createSignal7, 2), columnY = _createSignal8[0], setcolumnY = _createSignal8[1];
                    var isFirst = createSelector(function() {
                        return 0;
                    });
                    var _createSignal9 = createSignal(0), _createSignal0 = _slicedToArray(_createSignal9, 2), rowIndex = _createSignal0[0], setRowIndex = _createSignal0[1];
                    var _createSignal1 = createSignal([]), _createSignal10 = _slicedToArray(_createSignal1, 2), items = _createSignal10[0], setItems = _createSignal10[1];
                    var _createInfiniteItems = createInfiniteItems(function(page) {
                        return fetch("https://dummyjson.com/products?limit=20&skip=".concat(20 * page)).then(function(res) {
                            return res.json();
                        }).then(function(data) {
                            data.total;
                            return data.products;
                        });
                    }), _createInfiniteItems2 = _slicedToArray(_createInfiniteItems, 2), products = _createInfiniteItems2[0], setPage = _createInfiniteItems2[1].setPage;
                    var EXTRA = 8;
                    createEffect(on([ products, rowIndex ], function(_ref) {
                        var _ref2 = _slicedToArray(_ref, 2), products = _ref2[0], index = _ref2[1];
                        if (items().length - EXTRA > index) return;
                        setItems(products.slice(0, index + EXTRA));
                        if (index > products.length - 5) setPage(function(p) {
                            return p + 1;
                        });
                    }, {
                        defer: true
                    }));
                    onMount(function() {
                        setGlobalBackground(255);
                    });
                    function changeRow(selectedIndex, elm, active, lastSelectedIndex) {
                        setcolumnY((active.y || 0) * -1 + 50);
                        setRowIndex(selectedIndex);
                    }
                    return function() {
                        var _el$5 = createElement("view");
                        setProp(_el$5, "clipping", true);
                        insert(_el$5, createComponent(Column, {
                            plinko: true,
                            get y() {
                                return columnY();
                            },
                            scroll: "none",
                            onSelectedChanged: changeRow,
                            get children() {
                                return createComponent(Index, {
                                    get each() {
                                        return items();
                                    },
                                    children: function children(item, i) {
                                        return createComponent(ProductRow, {
                                            y: i * 50,
                                            get item() {
                                                return item();
                                            },
                                            get autofocus() {
                                                return isFirst(i);
                                            }
                                        });
                                    }
                                });
                            }
                        }));
                        effect(function(_$p) {
                            return setProp(_el$5, "style", gridStyles_default.itemsContainer, _$p);
                        });
                        return _el$5;
                    }();
                });
            }
        };
    });
})();