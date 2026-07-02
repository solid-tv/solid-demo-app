import { b as createSignal, d as createResource, e as createComputed, f as batch, t as theme, g as createSelector, i as createEffect, j as on, o as onMount, s as setGlobalBackground, c as createElement, a as setProp, k as insert, l as createComponent, C as Column, I as Index, m as effect, n as insertNode } from "./index-3tcUfXAd.js";

function createInfiniteItems(fetcher) {
    const [items, setItems] = createSignal([]);
    const [page, setPage] = createSignal(0);
    const [end, setEnd] = createSignal(false);
    const [contents] = createResource(page, fetcher);
    createComputed(() => {
        const content = contents();
        if (!content) return;
        batch(() => {
            if (content.length === 0) setEnd(true);
            setItems(p => [ ...p, ...content ]);
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

const ROW_HEIGHT = 50;

const styles = {
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
        width: theme.layout.screenW,
        height: 600,
        y: 180,
        x: 180,
        zIndex: 2
    }
};

function ProductRow(props) {
    return (() => {
        var _el$ = createElement("view"), _el$2 = createElement("text"), _el$3 = createElement("text"), _el$4 = createElement("text");
        insertNode(_el$, _el$2);
        insertNode(_el$, _el$3);
        insertNode(_el$, _el$4);
        setProp(_el$, "forwardStates", true);
        insert(_el$2, () => props.item.id);
        insert(_el$3, () => props.item.title);
        insert(_el$4, () => props.item.price);
        effect(_p$ => {
            var _v$ = props.y, _v$2 = props.autofocus, _v$3 = styles.ProductRow, _v$4 = styles.ProductText, _v$5 = styles.ProductText, _v$6 = styles.ProductText;
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
    })();
}

const Grid = () => {
    const [columnY, setcolumnY] = createSignal(0);
    const isFirst = createSelector(() => 0);
    const [rowIndex, setRowIndex] = createSignal(0);
    const [items, setItems] = createSignal([]);
    const [products, {setPage: setPage}] = createInfiniteItems(page => fetch("https://dummyjson.com/products?limit=20&skip=".concat(20 * page)).then(res => res.json()).then(data => {
        data.total;
        return data.products;
    }));
    const EXTRA = 8;
    createEffect(on([ products, rowIndex ], ([products2, index]) => {
        if (items().length - EXTRA > index) return;
        setItems(products2.slice(0, index + EXTRA));
        if (index > products2.length - 5) {
            setPage(p => p + 1);
        }
    }, {
        defer: true
    }));
    onMount(() => {
        setGlobalBackground(255);
    });
    function changeRow(selectedIndex, elm, active, lastSelectedIndex) {
        setcolumnY((active.y || 0) * -1 + 50);
        setRowIndex(selectedIndex);
    }
    return (() => {
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
                    children: (item, i) => createComponent(ProductRow, {
                        y: i * 50,
                        get item() {
                            return item();
                        },
                        get autofocus() {
                            return isFirst(i);
                        }
                    })
                });
            }
        }));
        effect(_$p => setProp(_el$5, "style", styles.itemsContainer, _$p));
        return _el$5;
    })();
};

export { Grid as default };
