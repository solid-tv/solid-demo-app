import { s as setGlobalBackground, i as createEffect, j as on, G as activeElement, c as createElement, a as setProp, k as insert, l as createComponent, V as Block, R as Row } from "./index-BNM7m8QI.js";

const FocusPage = () => {
    setGlobalBackground(858993663);
    let rowContainer, myBlock, redBlock;
    createEffect(on(activeElement, elm => {
        console.log(elm);
    }, {
        defer: true
    }));
    return (() => {
        var _el$ = createElement("view");
        setProp(_el$, "x", 250);
        setProp(_el$, "y", 200);
        setProp(_el$, "onUp", () => myBlock.setFocus());
        insert(_el$, createComponent(Block, {
            ref(r$) {
                var _ref$ = myBlock;
                typeof _ref$ === "function" ? _ref$(r$) : myBlock = r$;
            },
            color: 303226879,
            onDown: () => rowContainer.setFocus(),
            autofocus: true
        }), null);
        insert(_el$, createComponent(Row, {
            y: 200,
            ref(r$) {
                var _ref$2 = rowContainer;
                typeof _ref$2 === "function" ? _ref$2(r$) : rowContainer = r$;
            },
            get children() {
                return [ createComponent(Block, {
                    ref(r$) {
                        var _ref$3 = redBlock;
                        typeof _ref$3 === "function" ? _ref$3(r$) : redBlock = r$;
                    },
                    color: 4278190335
                }), createComponent(Block, {
                    color: 678303743
                }), createComponent(Block, {
                    color: 471635967
                }) ];
            }
        }), null);
        return _el$;
    })();
};

export { FocusPage as default };
