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
    System.register([ "./render-legacy-DZhvr1vn.js" ], function(_export, _context) {
        "use strict";
        var createRoot, createMemo, batch, onCleanup, untrack, $TRACK, createSignal;
        function disposeList(list) {
            for (var i = 0; i < list.length; i++) {
                var _list$i;
                (_list$i = list[i]) == null || _list$i.disposer();
            }
        }
        function listArray(list, mapFn) {
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var items = [];
            var mapped = [], unusedItems, i, j, item, oldValue, oldIndex, newValue, fallback, fallbackDisposer;
            onCleanup(function() {
                fallbackDisposer == null || fallbackDisposer();
                fallbackDisposer = void 0;
                disposeList(items);
            });
            return function() {
                var newItems = list() || [];
                newItems[$TRACK];
                return untrack(function() {
                    if (newItems.length > 0 && fallbackDisposer) {
                        fallbackDisposer();
                        fallbackDisposer = void 0;
                        fallback = void 0;
                    }
                    var temp = new Array(newItems.length);
                    unusedItems = items.length;
                    for (j = unusedItems - 1; j >= 0; --j) {
                        item = items[j];
                        oldIndex = item.index;
                        if (oldIndex < newItems.length && newItems[oldIndex] === item.value) {
                            temp[oldIndex] = mapped[oldIndex];
                            if (--unusedItems !== j) {
                                items[j] = items[unusedItems];
                                items[unusedItems] = item;
                            }
                        }
                    }
                    var matcher = new Map;
                    var matchedItems = new Uint8Array(unusedItems);
                    for (j = unusedItems - 1; j >= 0; --j) {
                        var _matcher$get$push, _matcher$get;
                        oldValue = items[j].value;
                        (_matcher$get$push = (_matcher$get = matcher.get(oldValue)) == null ? void 0 : _matcher$get.push(j)) !== null && _matcher$get$push !== void 0 || matcher.set(oldValue, [ j ]);
                    }
                    for (i = 0; i < newItems.length; ++i) {
                        var _matcher$get$pop, _matcher$get2;
                        if (i in temp) continue;
                        newValue = newItems[i];
                        j = (_matcher$get$pop = (_matcher$get2 = matcher.get(newValue)) == null ? void 0 : _matcher$get2.pop()) !== null && _matcher$get$pop !== void 0 ? _matcher$get$pop : -1;
                        if (j >= 0) {
                            var _item$indexSetter;
                            item = items[j];
                            oldIndex = item.index;
                            temp[i] = mapped[oldIndex];
                            item.index = i;
                            (_item$indexSetter = item.indexSetter) == null || _item$indexSetter.call(item, i);
                            matchedItems[j] = 1;
                        }
                    }
                    for (j = matchedItems.length - 1; j >= 0; --j) if (matchedItems[j] && --unusedItems !== j) {
                        item = items[j];
                        items[j] = items[unusedItems];
                        items[unusedItems] = item;
                    }
                    for (j = unusedItems - 1; j >= 0; --j) {
                        item = items[j];
                        oldIndex = item.index;
                        if (!(oldIndex in temp) && oldIndex < newItems.length) {
                            var _item$valueSetter;
                            temp[oldIndex] = mapped[oldIndex];
                            newValue = newItems[oldIndex];
                            item.value = newValue;
                            (_item$valueSetter = item.valueSetter) == null || _item$valueSetter.call(item, newValueGetter);
                            if (--unusedItems !== j) {
                                items[j] = items[unusedItems];
                                items[unusedItems] = item;
                            }
                        }
                    }
                    for (i = 0; i < newItems.length; ++i) {
                        if (i in temp) continue;
                        newValue = newItems[i];
                        if (unusedItems > 0) {
                            item = items[--unusedItems];
                            temp[i] = mapped[item.index];
                            batch(changeBoth);
                        } else temp[i] = createRoot(mapper);
                    }
                    disposeList(items.splice(0, unusedItems));
                    if (newItems.length === 0 && options.fallback) {
                        if (!fallbackDisposer) fallback = [ createRoot(function(d) {
                            fallbackDisposer = d;
                            return options.fallback();
                        }) ];
                        return fallback;
                    }
                    return mapped = temp;
                });
            };
            function newValueGetter() {
                return newValue;
            }
            function changeBoth() {
                var _item$indexSetter2, _item$valueSetter2;
                item.index = i;
                (_item$indexSetter2 = item.indexSetter) == null || _item$indexSetter2.call(item, i);
                item.value = newValue;
                (_item$valueSetter2 = item.valueSetter) == null || _item$valueSetter2.call(item, newValueGetter);
            }
            function mapper(disposer) {
                var t = {
                    value: newValue,
                    index: i,
                    disposer: disposer
                };
                items.push(t);
                var _sV = function sV() {
                    var _ref = false ? createSignal(t.value, {
                        name: "value"
                    }) : createSignal(t.value);
                    var _ref2 = _slicedToArray(_ref, 2);
                    _sV = _ref2[0];
                    t.valueSetter = _ref2[1];
                    return _sV();
                }, _sI = function sI() {
                    var _ref3 = false ? createSignal(t.index, {
                        name: "index"
                    }) : createSignal(t.index);
                    var _ref4 = _slicedToArray(_ref3, 2);
                    _sI = _ref4[0];
                    t.indexSetter = _ref4[1];
                    return _sI();
                };
                return mapFn(function() {
                    return _sV();
                }, function() {
                    return _sI();
                });
            }
        }
        function List(props) {
            var fallback = "fallback" in props && {
                fallback: function fallback() {
                    return props.fallback;
                }
            };
            return false ? createMemo(listArray(function() {
                return props.each;
            }, props.children, fallback || void 0), void 0, {
                name: "value"
            }) : createMemo(listArray(function() {
                return props.each;
            }, props.children, fallback || void 0));
        }
        _export("t", List);
        return {
            setters: [ function(_renderLegacy001Js) {
                createRoot = _renderLegacy001Js.G;
                createMemo = _renderLegacy001Js.H;
                batch = _renderLegacy001Js.I;
                onCleanup = _renderLegacy001Js.Q;
                untrack = _renderLegacy001Js.it;
                $TRACK = _renderLegacy001Js.k;
                createSignal = _renderLegacy001Js.q;
            } ],
            execute: function execute() {}
        };
    });
})();