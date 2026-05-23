import { s as setGlobalBackground, l as createComponent, c as createElement, n as insertNode, p as createTextNode, a as setProp, V as Block } from "./index-72fgd6Y6.js";

const KeyHandling = () => {
    setGlobalBackground(858993663);
    let myBlock;
    return [ (() => {
        var _el$ = createElement("text");
        insertNode(_el$, createTextNode("Move the block with the arrow keys, enter to change color, enterHold to reset color. Open inspector to see console log messages. Use M to test release."));
        setProp(_el$, "x", 400);
        setProp(_el$, "y", 200);
        setProp(_el$, "contain", "both");
        setProp(_el$, "width", 900);
        return _el$;
    })(), createComponent(Block, {
        ref(r$) {
            var _ref$ = myBlock;
            typeof _ref$ === "function" ? _ref$(r$) : myBlock = r$;
        },
        autofocus: true,
        x: 1920 / 2 - 50,
        y: 1080 / 2 - 50,
        isBlack: false,
        color: 303226879,
        onMenu: () => true,
        onMenuRelease: () => {
            console.log("menu release");
            return true;
        },
        onUp: () => myBlock.y = Math.max(0, myBlock.y - 20),
        onDown: () => {
            console.log("down press");
            myBlock.y = Math.min(1080, myBlock.y + 20);
        },
        onDownRelease: () => {
            console.log("down release");
        },
        onRight: () => myBlock.x = Math.min(1920, myBlock.x + 20),
        onLeft: () => {
            myBlock.x = Math.max(200, myBlock.x - 20);
            return myBlock.x > 200;
        },
        onEnterRelease: () => {
            console.log("enter release / up");
        },
        onEnterHold: e => {
            console.log("enter hold");
            myBlock.color = 303226879;
        },
        onEnter: () => {
            console.log("enter down");
            myBlock.isBlack = !myBlock.isBlack;
            if (myBlock.isBlack) {
                myBlock.color = 4294967295;
            } else {
                myBlock.color = 255;
            }
        }
    }) ];
};

export { KeyHandling as default };
//# sourceMappingURL=KeyHandling-BHkCVRYe.js.map
