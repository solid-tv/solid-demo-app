import { R as batch, W as createMemo, Y as createSignal, et as onCleanup, j as $TRACK, ot as untrack, q as createRoot } from "./render-DoMuJa_u.js";

function disposeList(list) {
    for (let i = 0; i < list.length; i++) {
        var _list$i;
        (_list$i = list[i]) == null || _list$i.disposer();
    }
}

function listArray(list, mapFn, options = {}) {
    const items = [];
    let mapped = [], unusedItems, i, j, item, oldValue, oldIndex, newValue, fallback, fallbackDisposer;
    onCleanup(() => {
        fallbackDisposer == null || fallbackDisposer();
        fallbackDisposer = void 0;
        disposeList(items);
    });
    return () => {
        const newItems = list() || [];
        newItems[$TRACK];
        return untrack(() => {
            if (newItems.length > 0 && fallbackDisposer) {
                fallbackDisposer();
                fallbackDisposer = void 0;
                fallback = void 0;
            }
            const temp = new Array(newItems.length);
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
            const matcher = new Map;
            const matchedItems = new Uint8Array(unusedItems);
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
                if (!fallbackDisposer) fallback = [ createRoot(d => {
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
        const t = {
            value: newValue,
            index: i,
            disposer: disposer
        };
        items.push(t);
        let sV = () => {
            [sV, t.valueSetter] = false ? createSignal(t.value, {
                name: "value"
            }) : createSignal(t.value);
            return sV();
        }, sI = () => {
            [sI, t.indexSetter] = false ? createSignal(t.index, {
                name: "index"
            }) : createSignal(t.index);
            return sI();
        };
        return mapFn(() => sV(), () => sI());
    }
}

function List(props) {
    const fallback = "fallback" in props && {
        fallback: () => props.fallback
    };
    return false ? createMemo(listArray(() => props.each, props.children, fallback || void 0), void 0, {
        name: "value"
    }) : createMemo(listArray(() => props.each, props.children, fallback || void 0));
}

export { List as t };