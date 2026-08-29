import { E as isInteger } from "./render-CR6_5L1P.js";

function hexColor(color = "") {
    if (isInteger(color)) return color;
    if (typeof color === "string") {
        let hex;
        if (color.charCodeAt(0) === 35) hex = color.length === 7 ? color.slice(1) + "ff" : color.slice(1); else if (color.charCodeAt(0) === 48 && color.charCodeAt(1) === 120) hex = color.slice(2); else hex = color.length === 6 ? color + "ff" : color;
        return parseInt(hex, 16);
    }
    return 0;
}

function combineStyles(style1, style2) {
    if (!style1) return style2;
    if (!style2) return style1;
    return {
        ...style2,
        ...style1
    };
}

var clamp = (value, min, max) => min < max ? Math.min(Math.max(value, min), max) : Math.min(Math.max(value, max), min);

function mod(n, m) {
    if (m === 0) return 0;
    return (n % m + m) % m;
}

export { mod as i, combineStyles as n, hexColor as r, clamp as t };