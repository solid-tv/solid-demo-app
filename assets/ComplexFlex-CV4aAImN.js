import { M as For, Y as createSignal, a as createElement, c as effect, i as createComponent, l as insert, m as setProp, s as createTextNode, tt as onMount, u as insertNode } from "./render-CkIU5n3A.js";

import { t as Column } from "./Column-CBcieo2y.js";

import { t as Row } from "./Row-Ba-WUcYK.js";

var Card = props => {
    const [focused, setFocused] = createSignal(false);
    return (() => {
        var _el$ = createElement("view"), _el$2 = createElement("text"), _el$3 = createTextNode(`Item `), _el$4 = createElement("view"), _el$5 = createElement("text");
        insertNode(_el$, _el$2);
        insertNode(_el$, _el$4);
        setProp(_el$, "width", 180);
        setProp(_el$, "height", 100);
        setProp(_el$, "display", "flex");
        setProp(_el$, "flexDirection", "column");
        setProp(_el$, "alignItems", "center");
        setProp(_el$, "gap", 10);
        setProp(_el$, "padding", [ 0, 10 ]);
        setProp(_el$, "onFocusChanged", setFocused);
        insertNode(_el$2, _el$3);
        setProp(_el$2, "fontSize", 20);
        setProp(_el$2, "color", 4294967295);
        insert(_el$2, () => String(props.index), null);
        insertNode(_el$4, _el$5);
        setProp(_el$4, "color", 65535);
        setProp(_el$4, "padding", [ 0, 8 ]);
        setProp(_el$4, "borderRadius", 4);
        setProp(_el$4, "height", 40);
        setProp(_el$4, "display", "flex");
        setProp(_el$4, "alignItems", "center");
        insertNode(_el$5, createTextNode(`Button`));
        setProp(_el$5, "fontSize", 16);
        setProp(_el$5, "color", 4294967295);
        effect(_$p => setProp(_el$, "color", focused() ? 858993561 : 858993663, _$p));
        return _el$;
    })();
};

function ComplexFlex() {
    performance.mark("complexflex-start");
    const items = Array.from({
        length: 8
    }).map((_, i) => i);
    const initialRows = Array.from({
        length: 8
    }).map((_, i) => i);
    const [rows, setRows] = createSignal(initialRows);
    onMount(() => {
        performance.mark("complexflex-end");
        performance.measure("ComplexFlex Render", "complexflex-start", "complexflex-end");
        const measure = performance.getEntriesByName("ComplexFlex Render").slice(-1)[0];
        console.log(`ComplexFlex Render duration: ${measure == null ? void 0 : measure.duration}ms`);
        const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
        const runRecreations = async () => {
            await sleep(100);
            for (let i = 0; i < 3; i++) {
                console.log(`Resetting rows to [] (Recreation step ${i + 1})`);
                setRows([]);
                await sleep(100);
                console.log(`Recreating rows to full (Recreation step ${i + 1})`);
                setRows(initialRows);
                await sleep(100);
            }
        };
        runRecreations();
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
        autofocus: true,
        scroll: "none",
        selected: 1,
        get children() {
            return [ (() => {
                var _el$7 = createElement("text");
                insertNode(_el$7, createTextNode(`Complex Flex Layout`));
                setProp(_el$7, "skipFocus", true);
                setProp(_el$7, "fontSize", 40);
                setProp(_el$7, "color", 4294967295);
                setProp(_el$7, "marginBottom", 20);
                return _el$7;
            })(), createComponent(For, {
                get each() {
                    return rows();
                },
                children: () => createComponent(Row, {
                    width: 1400,
                    gap: 20,
                    scroll: "none",
                    get children() {
                        return createComponent(For, {
                            each: items,
                            children: item => createComponent(Card, {
                                index: item
                            })
                        });
                    }
                })
            }) ];
        }
    });
}

export { ComplexFlex as default };
//# sourceMappingURL=ComplexFlex-CV4aAImN.js.map