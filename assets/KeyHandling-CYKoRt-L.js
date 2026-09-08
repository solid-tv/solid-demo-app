import { a as createElement, i as createComponent, m as setProp, s as createTextNode, u as insertNode } from "./render-aZV73JYm.js";

import { n as Block } from "./components-2WcEswJk.js";

import { n as setGlobalBackground } from "./state-DcDkvIU9.js";

var KeyHandling = () => {
    let myBlock;
    return setGlobalBackground(858993663), [ (_el$ = createElement("text"), insertNode(_el$, createTextNode("Move the block with the arrow keys, enter to change color, enterHold to reset color. Open inspector to see console log messages. Use M to test release.")), 
    setProp(_el$, "x", 400), setProp(_el$, "y", 200), setProp(_el$, "contain", "both"), 
    setProp(_el$, "width", 900), _el$), createComponent(Block, {
        ref(r$) {
            "function" == typeof myBlock ? myBlock(r$) : myBlock = r$;
        },
        autofocus: !0,
        x: 910,
        y: 490,
        isBlack: !1,
        color: 303226879,
        onMenu: () => !0,
        onMenuRelease: () => (console.log("menu release"), !0),
        onUp: () => myBlock.y = Math.max(0, myBlock.y - 20),
        onDown: () => {
            console.log("down press"), myBlock.y = Math.min(1080, myBlock.y + 20);
        },
        onDownRelease: () => {
            console.log("down release");
        },
        onRight: () => myBlock.x = Math.min(1920, myBlock.x + 20),
        onLeft: () => (myBlock.x = Math.max(200, myBlock.x - 20), myBlock.x > 200),
        onEnterRelease: () => {
            console.log("enter release / up");
        },
        onEnterHold: e => {
            console.log("enter hold"), myBlock.color = 303226879;
        },
        onEnter: () => {
            console.log("enter down"), myBlock.isBlack = !myBlock.isBlack, myBlock.isBlack ? myBlock.color = 4294967295 : myBlock.color = 255;
        }
    }) ];
    var _el$;
};

export { KeyHandling as default };