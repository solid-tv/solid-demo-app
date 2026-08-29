import { a as createElement, f as mergeProps, g as spread, h as setProp, i as createComponent, l as insert, u as insertNode } from "./render-o0EKBQJM.js";

import { r as hexColor } from "./utils-DGAAUPJA.js";

import { t as Row } from "./Row-Dkp37IQW.js";

import { t as MaterialButtonText } from "./styles-BcDKugwt.js";

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
    };
    const MaterialButton = {
        width: 386,
        height: 136,
        color: "0x715cabff",
        $focus: {
            color: "0x5a39a2ff"
        },
        disabled: {
            color: "0x291d43ff"
        }
    };
    const RoundedRectangle = [ "RoundedRectangle", {
        radius: 65
    } ];
    function Button(props) {
        return (() => {
            var _el$ = createElement("view"), _el$2 = createElement("text");
            insertNode(_el$, _el$2);
            spread(_el$, mergeProps(props, {
                forwardStates: true,
                style: MaterialButton,
                shader: RoundedRectangle
            }), true);
            setProp(_el$2, "style", MaterialButtonText);
            insert(_el$2, () => props.children);
            return _el$;
        })();
    }
    return createComponent(Row, {
        style: RowStyles,
        get children() {
            return [ createComponent(Button, {
                autofocus: true,
                onEnter: onEnter,
                children: "Focused"
            }), createComponent(Button, {
                states: {
                    active: true,
                    disabled: false
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