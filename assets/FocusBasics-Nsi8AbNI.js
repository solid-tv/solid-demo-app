import { O as activeElement, V as createEffect, Z as on, a as createElement, i as createComponent, l as insert, m as setProp } from "./render-aZV73JYm.js";

import { t as Row } from "./Row-vBX47WKv.js";

import { n as Block } from "./components-2WcEswJk.js";

import { n as setGlobalBackground } from "./state-DcDkvIU9.js";

var FocusPage = () => {
    let rowContainer, myBlock, redBlock;
    return setGlobalBackground(858993663), createEffect(on(activeElement, elm => {
        console.log(elm);
    }, {
        defer: !0
    })), _el$ = createElement("view"), setProp(_el$, "x", 250), setProp(_el$, "y", 200), 
    setProp(_el$, "onUp", () => myBlock.setFocus()), insert(_el$, createComponent(Block, {
        ref(r$) {
            "function" == typeof myBlock ? myBlock(r$) : myBlock = r$;
        },
        color: 303226879,
        onDown: () => rowContainer.setFocus(),
        autofocus: !0
    }), null), insert(_el$, createComponent(Row, {
        y: 200,
        ref(r$) {
            "function" == typeof rowContainer ? rowContainer(r$) : rowContainer = r$;
        },
        get children() {
            return [ createComponent(Block, {
                ref(r$) {
                    "function" == typeof redBlock ? redBlock(r$) : redBlock = r$;
                },
                color: 4278190335
            }), createComponent(Block, {
                color: 678303743
            }), createComponent(Block, {
                color: 471635967
            }) ];
        }
    }), null), _el$;
    var _el$;
};

export { FocusPage as default };