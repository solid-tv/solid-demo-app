import { B as createContext, Q as onCleanup, at as useContext, i as createComponent, q as createSignal } from "./render-DmwYINn_.js";

var FocusStackContext = createContext(void 0);

function FocusStackProvider(props) {
    const [_focusStack, setFocusStack] = createSignal([]);
    function storeFocus(element, prevElement) {
        const elm = prevElement || element;
        if (elm) setFocusStack(stack => [ ...stack, elm ]);
    }
    function restoreFocus() {
        let wasFocused = false;
        setFocusStack(stack => {
            const prevElement = stack.pop();
            if (prevElement && typeof prevElement.setFocus === "function") {
                prevElement.setFocus();
                wasFocused = true;
            }
            return [ ...stack ];
        });
        return wasFocused;
    }
    function clearFocusStack() {
        setFocusStack([]);
    }
    return createComponent(FocusStackContext.Provider, {
        value: {
            storeFocus: storeFocus,
            restoreFocus: restoreFocus,
            clearFocusStack: clearFocusStack
        },
        get children() {
            return props.children;
        }
    });
}

function useFocusStack(autoClear = true) {
    const context = useContext(FocusStackContext);
    if (!context) throw new Error("useFocusStack must be used within a FocusStackProvider");
    if (autoClear) onCleanup(() => {
        setTimeout(() => context.clearFocusStack(), 5);
    });
    return context;
}

export { useFocusStack as n, FocusStackProvider as t };