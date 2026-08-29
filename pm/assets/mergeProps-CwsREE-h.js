import { Q as mergeProps$1 } from "./render-CkIU5n3A.js";

var SUPPORTS_PROXY = typeof Proxy === "function";

function resolveSource(source) {
    const value = typeof source === "function" ? source() : source;
    return value == null ? {} : value;
}

var mergeProps = (...sources) => {
    if (SUPPORTS_PROXY) return mergeProps$1(...sources);
    return mergeProps$1(...sources.map(source => typeof source === "function" ? resolveSource(source) : source));
};

export { mergeProps as t };