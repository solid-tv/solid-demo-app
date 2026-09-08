import { X as mergeProps$1 } from "./render-BluGTzme.js";

var SUPPORTS_PROXY = "function" == typeof Proxy;

var mergeProps = (...sources) => SUPPORTS_PROXY ? mergeProps$1(...sources) : mergeProps$1(...sources.map(source => "function" == typeof source ? function(source) {
    const value = "function" == typeof source ? source() : source;
    return null == value ? {} : value;
}(source) : source));

export { mergeProps as t };