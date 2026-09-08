import { a as createElement, h as spread, i as createComponent, l as insert, m as setProp, u as insertNode } from "./render-aZV73JYm.js";

import { r as hexColor } from "./utils-BjIhFEKN.js";

import { t as mergeProps } from "./mergeProps-WuPuVjcv.js";

import { t as Row } from "./Row-vBX47WKv.js";

import { t as MaterialButtonText } from "./styles-xHyKpT0b.js";

var MaterialButtonsPage = () => {
    function onEnter(event, elm) {
        this.states.toggle("disabled");
    }
    const RowStyles = {
        display: "flex",
        justifyContent: "flexStart",
        width: 1500,
        height: 300,
        color: hexColor("00000000"),
        gap: 26,
        y: 400,
        x: 100
    }, MaterialButton = {
        width: 386,
        height: 136,
        color: "0x715cabff",
        $focus: {
            color: "0x5a39a2ff"
        },
        disabled: {
            color: "0x291d43ff"
        }
    }, RoundedRectangle = [ "RoundedRectangle", {
        radius: 65
    } ];
    function Button(props) {
        return _el$ = createElement("view"), _el$2 = createElement("text"), insertNode(_el$, _el$2), 
        spread(_el$, mergeProps(props, {
            forwardStates: !0,
            style: MaterialButton,
            shader: RoundedRectangle
        }), !0), setProp(_el$2, "style", MaterialButtonText), insert(_el$2, () => props.children), 
        _el$;
        var _el$, _el$2;
    }
    return createComponent(Row, {
        style: RowStyles,
        get children() {
            return [ createComponent(Button, {
                autofocus: !0,
                onEnter: onEnter,
                children: "Focused"
            }), createComponent(Button, {
                states: {
                    active: !0,
                    disabled: !1
                },
                children: "Normal"
            }), createComponent(Button, {
                states: "disabled",
                children: "Disabled"
            }) ];
        }
    });
};

export { MaterialButtonsPage as default };