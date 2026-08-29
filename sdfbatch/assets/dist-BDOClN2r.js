import { Q as onCleanup, Y as getOwner } from "./render-T82LYRez.js";

var debounce = (callback, wait) => {
    if (false) return Object.assign(() => void 0, {
        clear: () => void 0
    });
    let timeoutId;
    const clear = () => clearTimeout(timeoutId);
    if (getOwner()) onCleanup(clear);
    const debounced = (...args) => {
        if (timeoutId !== void 0) clear();
        timeoutId = setTimeout(() => callback(...args), wait);
    };
    return Object.assign(debounced, {
        clear: clear
    });
};

export { debounce as t };