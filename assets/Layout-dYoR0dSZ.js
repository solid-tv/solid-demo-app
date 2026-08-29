import { a as createElement, i as createComponent, l as insert, m as setProp, s as createTextNode, u as insertNode } from "./render-CkIU5n3A.js";

import { n as Block } from "./components-BR5oDtwp.js";

import { n as setGlobalBackground } from "./state-gzcAO-7m.js";

var LayoutPage = () => {
    setGlobalBackground(255);
    return (() => {
        var _el$ = createElement("view"), _el$2 = createElement("view"), _el$3 = createElement("view"), _el$4 = createElement("text"), _el$6 = createElement("view"), _el$7 = createElement("view"), _el$8 = createElement("text"), _el$0 = createElement("view"), _el$1 = createElement("text");
        insertNode(_el$, _el$2);
        insertNode(_el$, _el$3);
        insertNode(_el$, _el$6);
        setProp(_el$, "x", 150);
        setProp(_el$, "y", 10);
        setProp(_el$, "width", 1e3);
        setProp(_el$, "height", 1e3);
        setProp(_el$, "border", {
            color: 4278190335,
            width: 5
        });
        insert(_el$, createComponent(Block, {
            center: true,
            color: 4294902015
        }), _el$2);
        setProp(_el$2, "x", 500);
        setProp(_el$2, "y", 140);
        setProp(_el$2, "display", "flex");
        setProp(_el$2, "alignItems", "center");
        setProp(_el$2, "height", 300);
        setProp(_el$2, "flexDirection", "row");
        setProp(_el$2, "gap", 20);
        setProp(_el$2, "border", {
            color: 4294967295,
            width: 5
        });
        insert(_el$2, createComponent(Block, {
            color: 4278190335
        }), null);
        insert(_el$2, createComponent(Block, {
            color: 16713983
        }), null);
        insert(_el$2, createComponent(Block, {
            color: 65535
        }), null);
        insertNode(_el$3, _el$4);
        setProp(_el$3, "x", 500);
        setProp(_el$3, "y", 100);
        setProp(_el$3, "width", 200);
        setProp(_el$3, "padding", [ 0, 20 ]);
        setProp(_el$3, "height", 36);
        setProp(_el$3, "border", {
            color: 4294967295,
            width: 5
        });
        insertNode(_el$4, createTextNode(`Hello World`));
        setProp(_el$4, "contain", "both");
        setProp(_el$4, "textAlign", "left");
        setProp(_el$4, "lineHeight", 36);
        setProp(_el$4, "y", 3);
        setProp(_el$4, "fontSize", 28);
        insertNode(_el$6, _el$7);
        insertNode(_el$6, _el$0);
        setProp(_el$6, "display", "flex");
        setProp(_el$6, "flexDirection", "column");
        setProp(_el$6, "gap", 50);
        setProp(_el$6, "alignItems", "center");
        setProp(_el$6, "width", 460);
        setProp(_el$6, "y", 100);
        setProp(_el$6, "x", 20);
        setProp(_el$6, "border", {
            color: 16711935,
            width: 5
        });
        setProp(_el$6, "onLayout", e => e.height += 5);
        insertNode(_el$7, _el$8);
        setProp(_el$7, "color", 65535);
        setProp(_el$7, "marginTop", 5);
        setProp(_el$7, "display", "flex");
        insertNode(_el$8, createTextNode(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.`));
        setProp(_el$8, "fontSize", 24);
        setProp(_el$8, "contain", "width");
        setProp(_el$8, "width", 450);
        insertNode(_el$0, _el$1);
        setProp(_el$0, "color", 65535);
        setProp(_el$0, "display", "flex");
        insertNode(_el$1, createTextNode(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.`));
        setProp(_el$1, "fontSize", 24);
        setProp(_el$1, "contain", "width");
        setProp(_el$1, "width", 450);
        return _el$;
    })();
};

export { LayoutPage as default };
//# sourceMappingURL=Layout-dYoR0dSZ.js.map