import { D as isInteger } from "./render-UQXSDH2t.js";

function hexColor(color = "") {
    if (isInteger(color)) return color;
    if ("string" == typeof color) {
        let hex;
        return hex = 35 === color.charCodeAt(0) ? 7 === color.length ? color.slice(1) + "ff" : color.slice(1) : 48 === color.charCodeAt(0) && 120 === color.charCodeAt(1) ? color.slice(2) : 6 === color.length ? color + "ff" : color, 
        parseInt(hex, 16);
    }
    return 0;
}

function combineStyles(style1, style2) {
    return style1 ? style2 ? {
        ...style2,
        ...style1
    } : style1 : style2;
}

var clamp = (value, min, max) => min < max ? Math.min(Math.max(value, min), max) : Math.min(Math.max(value, max), min);

function mod(n, m) {
    return 0 === m ? 0 : (n % m + m) % m;
}

export { mod as i, combineStyles as n, hexColor as r, clamp as t };