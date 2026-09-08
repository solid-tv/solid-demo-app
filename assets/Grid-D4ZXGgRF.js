import { $ as onMount, I as batch, K as createSelector, V as createEffect, W as createResource, Z as on, a as createElement, c as effect, i as createComponent, j as Index, l as insert, m as setProp, q as createSignal, u as insertNode, z as createComputed } from "./render-aZV73JYm.js";

import { t as Column } from "./Column-Dwqo01zH.js";

import { t as theme_default } from "./theme-CB9u0IsU.js";

import { n as setGlobalBackground } from "./state-DcDkvIU9.js";

var gridStyles_default = {
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
};

function ProductRow(props) {
    return _el$ = createElement("view"), _el$2 = createElement("text"), _el$3 = createElement("text"), 
    _el$4 = createElement("text"), insertNode(_el$, _el$2), insertNode(_el$, _el$3), 
    insertNode(_el$, _el$4), setProp(_el$, "forwardStates", !0), insert(_el$2, () => props.item.id), 
    insert(_el$3, () => props.item.title), insert(_el$4, () => props.item.price), effect(_p$ => {
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

var Grid = () => {
    const [columnY, setcolumnY] = createSignal(0), isFirst = createSelector(() => 0), [rowIndex, setRowIndex] = createSignal(0), [items, setItems] = createSignal([]), [products, {setPage: setPage}] = function(fetcher) {
        const [items, setItems] = createSignal([]), [page, setPage] = createSignal(0), [end, setEnd] = createSignal(!1), [contents] = createResource(page, fetcher);
        return createComputed(() => {
            const content = contents();
            content && batch(() => {
                0 === content.length && setEnd(!0), setItems(p => [ ...p, ...content ]);
            });
        }), [ items, {
            page: page,
            setPage: setPage,
            setItems: setItems,
            end: end,
            setEnd: setEnd
        } ];
    }(page => fetch("https://dummyjson.com/products?limit=20&skip=" + 20 * page).then(res => res.json()).then(data => (data.total, 
    data.products)));
    function changeRow(selectedIndex, elm, active, lastSelectedIndex) {
        setcolumnY(-1 * (active.y || 0) + 50), setRowIndex(selectedIndex);
    }
    return createEffect(on([ products, rowIndex ], ([products, index]) => {
        items().length - 8 > index || (setItems(products.slice(0, index + 8)), index > products.length - 5 && setPage(p => p + 1));
    }, {
        defer: !0
    })), onMount(() => {
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
                children: (item, i) => createComponent(ProductRow, {
                    y: 50 * i,
                    get item() {
                        return item();
                    },
                    get autofocus() {
                        return isFirst(i);
                    }
                })
            });
        }
    })), effect(_$p => setProp(_el$5, "style", gridStyles_default.itemsContainer, _$p)), 
    _el$5;
    var _el$5;
};

export { Grid as default };