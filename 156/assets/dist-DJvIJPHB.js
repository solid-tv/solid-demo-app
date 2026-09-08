import { $ as onCleanup, X as getOwner } from "./render-UQXSDH2t.js";

var debounce = (callback, wait) => {
    let timeoutId;
    const clear = () => clearTimeout(timeoutId);
    getOwner() && onCleanup(clear);
    return Object.assign((...args) => {
        void 0 !== timeoutId && clear(), timeoutId = setTimeout(() => callback(...args), wait);
    }, {
        clear: clear
    });
};

export { debounce as t };