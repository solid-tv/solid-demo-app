import { B as createContext, Q as onCleanup, at as useContext, i as createComponent, q as createSignal } from "./render-BluGTzme.js";

var FocusStackContext = createContext(void 0);

function FocusStackProvider(props) {
    const [_focusStack, setFocusStack] = createSignal([]);
    return createComponent(FocusStackContext.Provider, {
        value: {
            storeFocus: function(element, prevElement) {
                const elm = prevElement || element;
                elm && setFocusStack(stack => [ ...stack, elm ]);
            },
            restoreFocus: function() {
                let wasFocused = !1;
                return setFocusStack(stack => {
                    const prevElement = stack.pop();
                    return prevElement && "function" == typeof prevElement.setFocus && (prevElement.setFocus(), 
                    wasFocused = !0), [ ...stack ];
                }), wasFocused;
            },
            clearFocusStack: function() {
                setFocusStack([]);
            }
        },
        get children() {
            return props.children;
        }
    });
}

function useFocusStack(autoClear = !0) {
    const context = useContext(FocusStackContext);
    if (!context) throw new Error("useFocusStack must be used within a FocusStackProvider");
    return autoClear && onCleanup(() => {
        setTimeout(() => context.clearFocusStack(), 5);
    }), context;
}

export { useFocusStack as n, FocusStackProvider as t };