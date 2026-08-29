import { a as createElement, h as spread, i as createComponent, l as insert, m as setProp, s as createTextNode, u as insertNode } from "./render-DlvqmRyP.js";

import { t as mergeProps } from "./mergeProps-BwqNwLTq.js";

import { t as Column } from "./Column-D7439NRe.js";

import { n as setGlobalBackground } from "./state-JxnKZDKy.js";

var Box = props => (() => {
    var _el$ = createElement("view"), _el$2 = createElement("text");
    insertNode(_el$, _el$2);
    spread(_el$, mergeProps(props, {
        height: 100,
        color: 4278255615
    }), true);
    insertNode(_el$2, createTextNode(`Text element`));
    return _el$;
})();

var FlexMenu = () => {
    setGlobalBackground(255);
    return (() => {
        var _el$4 = createElement("view");
        setProp(_el$4, "right", 0);
        setProp(_el$4, "display", "flex");
        setProp(_el$4, "width", 400);
        setProp(_el$4, "flexBoundary", "fixed");
        setProp(_el$4, "color", 4294901856);
        setProp(_el$4, "flexDirection", "column");
        insert(_el$4, createComponent(Column, {
            x: 50,
            width: 300,
            autofocus: true,
            get children() {
                return [ createComponent(Box, {
                    marginTop: 50
                }), createComponent(Column, {
                    flexItem: false,
                    justifyContent: "flexEnd",
                    get children() {
                        return [ createComponent(Box, {
                            flexOrder: 1
                        }), createComponent(Box, {
                            flexOrder: 2,
                            marginBottom: 50
                        }) ];
                    }
                }) ];
            }
        }));
        return _el$4;
    })();
};

export { FlexMenu, FlexMenu as default };