import { Q as onCleanup, Y as getOwner } from "./render-aZV73JYm.js";

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