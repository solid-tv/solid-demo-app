import { O as activeElement, V as createEffect, Z as on, a as createElement, i as createComponent, l as insert, m as setProp } from "./render-RHsi_cL1.js";

import { t as Row } from "./Row-DeUKF4Gd.js";

import { n as Block } from "./components-BV-2BchS.js";

import { n as setGlobalBackground } from "./state-DfqXE9aC.js";

var FocusPage = () => {
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