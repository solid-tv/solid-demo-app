!function() {
    function _toConsumableArray(r) {
        return function(r) {
            if (Array.isArray(r)) return _arrayLikeToArray(r);
        }(r) || function(r) {
            if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
        }(r) || _unsupportedIterableToArray(r) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
    }
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
        }(r, e) || _unsupportedIterableToArray(r, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
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
    System.register([ "./render-legacy-dLzA91Db.js", "./Column-legacy-vZ9l9pny.js", "./theme-legacy-Bdf29FvE.js", "./state-legacy-C4TEpoVI.js" ], function(_export, _context) {
        var onMount, batch, createSelector, createEffect, createResource, on, createElement, effect, createComponent, Index, insert, setProp, createSignal, insertNode, createComputed, Column, theme_default, setGlobalBackground, gridStyles_default;
        function ProductRow(props) {
            return _el$ = createElement("view"), _el$2 = createElement("text"), _el$3 = createElement("text"), 
            _el$4 = createElement("text"), insertNode(_el$, _el$2), insertNode(_el$, _el$3), 
            insertNode(_el$, _el$4), setProp(_el$, "forwardStates", !0), insert(_el$2, function() {
                return props.item.id;
            }), insert(_el$3, function() {
                return props.item.title;
            }), insert(_el$4, function() {
                return props.item.price;
            }), effect(function(_p$) {
                var _v$ = props.y, _v$2 = props.autofocus, _v$3 = gridStyles_default.ProductRow, _v$4 = gridStyles_default.ProductText, _v$5 = gridStyles_default.ProductText, _v$6 = gridStyles_default.ProductText;
                return _v$ !== _p$.e && (_p$.e = setProp(_el$, "y", _v$, _p$.e)), _v$2 !== _p$.t && (_p$.t = setProp(_el$, "autofocus", _v$2, _p$.t)), 
                _v$3 !== _p$.a && (_p$.a = setProp(_el$, "style", _v$3, _p$.a)), _v$4 !== _p$.o && (_p$.o = setProp(_el$2, "style", _v$4, _p$.o)), 
                _v$5 !== _p$.i && (_p$.i = setProp(_el$3, "style", _v$5, _p$.i)), _v$6 !== _p$.n && (_p$.n = setProp(_el$4, "style", _v$6, _p$.n)), 
                _p$;
            }, {
                e: void 0,
                t: void 0,
                a: void 0,
                o: void 0,
                i: void 0,
                n: void 0
            }), _el$;
            var _el$, _el$2, _el$3, _el$4;
        }
        return {
            setters: [ function(_renderLegacy002Js) {
                onMount = _renderLegacy002Js.$, batch = _renderLegacy002Js.I, createSelector = _renderLegacy002Js.K, 
                createEffect = _renderLegacy002Js.V, createResource = _renderLegacy002Js.W, on = _renderLegacy002Js.Z, 
                createElement = _renderLegacy002Js.a, effect = _renderLegacy002Js.c, createComponent = _renderLegacy002Js.i, 
                Index = _renderLegacy002Js.j, insert = _renderLegacy002Js.l, setProp = _renderLegacy002Js.m, 
                createSignal = _renderLegacy002Js.q, insertNode = _renderLegacy002Js.u, createComputed = _renderLegacy002Js.z;
            }, function(_ColumnLegacy00aJs) {
                Column = _ColumnLegacy00aJs.t;
            }, function(_themeLegacy00hJs) {
                theme_default = _themeLegacy00hJs.t;
            }, function(_stateLegacy00jJs) {
                setGlobalBackground = _stateLegacy00jJs.n;
            } ],
            execute: function() {
                gridStyles_default = {
                    ProductRow: {
                        width: 500,
                        display: "flex",
                        flexDirection: "row",
                        gap: 40,
                        height: 50,
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
                }, _export("default", function() {
                    var _el$5, _createSignal8 = _slicedToArray(createSignal(0), 2), columnY = _createSignal8[0], setcolumnY = _createSignal8[1], isFirst = createSelector(function() {
                        return 0;
                    }), _createSignal0 = _slicedToArray(createSignal(0), 2), rowIndex = _createSignal0[0], setRowIndex = _createSignal0[1], _createSignal10 = _slicedToArray(createSignal([]), 2), items = _createSignal10[0], setItems = _createSignal10[1], _createInfiniteItems = function(fetcher) {
                        var _createSignal2 = _slicedToArray(createSignal([]), 2), items = _createSignal2[0], setItems = _createSignal2[1], _createSignal4 = _slicedToArray(createSignal(0), 2), page = _createSignal4[0], setPage = _createSignal4[1], _createSignal6 = _slicedToArray(createSignal(!1), 2), end = _createSignal6[0], setEnd = _createSignal6[1], contents = _slicedToArray(createResource(page, fetcher), 1)[0];
                        return createComputed(function() {
                            var content = contents();
                            content && batch(function() {
                                0 === content.length && setEnd(!0), setItems(function(p) {
                                    return [].concat(_toConsumableArray(p), _toConsumableArray(content));
                                });
                            });
                        }), [ items, {
                            page: page,
                            setPage: setPage,
                            setItems: setItems,
                            end: end,
                            setEnd: setEnd
                        } ];
                    }(function(page) {
                        return fetch("https://dummyjson.com/products?limit=20&skip=".concat(20 * page)).then(function(res) {
                            return res.json();
                        }).then(function(data) {
                            return data.total, data.products;
                        });
                    }), _createInfiniteItems2 = _slicedToArray(_createInfiniteItems, 2), products = _createInfiniteItems2[0], setPage = _createInfiniteItems2[1].setPage;
                    function changeRow(selectedIndex, elm, active, lastSelectedIndex) {
                        setcolumnY(-1 * (active.y || 0) + 50), setRowIndex(selectedIndex);
                    }
                    return createEffect(on([ products, rowIndex ], function(_ref) {
                        var _ref2 = _slicedToArray(_ref, 2), products = _ref2[0], index = _ref2[1];
                        items().length - 8 > index || (setItems(products.slice(0, index + 8)), index > products.length - 5 && setPage(function(p) {
                            return p + 1;
                        }));
                    }, {
                        defer: !0
                    })), onMount(function() {
                        setGlobalBackground(255);
                    }), _el$5 = createElement("view"), setProp(_el$5, "clipping", !0), insert(_el$5, createComponent(Column, {
                        plinko: !0,
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
                                children: function(item, i) {
                                    return createComponent(ProductRow, {
                                        y: 50 * i,
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
                    })), effect(function(_$p) {
                        return setProp(_el$5, "style", gridStyles_default.itemsContainer, _$p);
                    }), _el$5;
                });
            }
        };
    });
}();