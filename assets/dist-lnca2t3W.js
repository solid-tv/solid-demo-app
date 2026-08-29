import { Z as getOwner, et as onCleanup } from "./render-CkIU5n3A.js";

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
//# sourceMappingURL=dist-lnca2t3W.js.map