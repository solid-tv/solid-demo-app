import { A as For, G as createRoot, H as createMemo, L as children, Q as onCleanup, _ as ElementNode, a as createElement, h as spread, i as createComponent, it as untrack, l as insert, m as setProp, q as createSignal, s as createTextNode, t as Dynamic, u as insertNode } from "./render-aZV73JYm.js";

import { t as mergeProps } from "./mergeProps-WuPuVjcv.js";

import { r as Button } from "./components-2WcEswJk.js";

import { n as setGlobalBackground } from "./state-DcDkvIU9.js";

function Visible(props) {
    let child, disposer;
    const keyed = props.keyed, condition = createMemo(() => props.when, void 0, {
        equals: (a, b) => keyed ? a === b : !a == !b
    });
    return onCleanup(() => null == disposer ? void 0 : disposer()), createMemo(() => {
        const c = condition();
        untrack(() => !!keyed) && (null == disposer || disposer(), child = void 0), c && !child && (disposer = createRoot(dispose => (child = children(() => props.children), 
        dispose)));
        const isHidden = !c;
        return null == child || child.toArray().forEach(childNode => {
            childNode instanceof ElementNode && (childNode.hidden = isHidden);
        }), c || child ? child : null;
    });
}

function Square(props) {
    return _el$ = createElement("view"), spread(_el$, mergeProps(props, {
        get width() {
            return props.size || 80;
        },
        get height() {
            return props.size || 80;
        },
        get color() {
            return props.color || 3772834047;
        }
    }), !1), _el$;
    var _el$;
}

function Card(props) {
    return _el$2 = createElement("view"), spread(_el$2, mergeProps(props, {
        get width() {
            return "large" === props.size ? 400 : 200;
        },
        get height() {
            return "large" === props.size ? 500 : 300;
        },
        transition: !0,
        color: 143766271
    }), !0), insert(_el$2, createComponent(Square, {
        x: 80,
        y: 80
    }), null), insert(_el$2, createComponent(Square, {
        x: 20,
        y: 20,
        size: 40
    }), null), _el$2;
    var _el$2;
}

var PositioningPage = () => {
    setGlobalBackground(506018815);
    const [x, setX] = createSignal(100), [size, setSize] = createSignal(!0), [dynamicComponents] = createSignal([ Square, Card, Square ]), interval = setInterval(() => {
        setX(x => 100 === x ? 250 : 100), setSize(size => !size);
    }, 2e3);
    return onCleanup(() => clearInterval(interval)), _el$3 = createElement("view"), 
    _el$4 = createElement("view"), _el$5 = createElement("text"), insertNode(_el$3, _el$4), 
    setProp(_el$3, "x", 150), setProp(_el$3, "autofocus", !0), insert(_el$3, createComponent(Visible, {
        get when() {
            return size();
        },
        get children() {
            return [ createComponent(Square, {
                onDestroy: () => console.log("destroyed"),
                x: 100,
                y: 100,
                size: 50,
                color: 4014228735
            }), createComponent(Square, {
                x: 100,
                y: 200,
                size: 100,
                color: 583360255
            }), createComponent(Square, {
                x: 100,
                y: 350,
                size: 200,
                color: 998438655
            }) ];
        }
    }), _el$4), insert(_el$3, createComponent(Square, {
        get x() {
            return x();
        },
        y: 600,
        size: 50,
        transition: {
            x: {
                duration: 1e3,
                easing: "linear"
            }
        }
    }), _el$4), insert(_el$3, createComponent(Card, {
        x: 500,
        y: 100,
        get size() {
            return size() ? "large" : "small";
        }
    }), _el$4), insert(_el$3, createComponent(Card, {
        x: 500,
        y: 500,
        get size() {
            return size() ? "small" : "large";
        }
    }), _el$4), insertNode(_el$4, _el$5), setProp(_el$4, "x", 1e3), setProp(_el$4, "y", 100), 
    insertNode(_el$5, createTextNode("Dynamic Components")), insert(_el$4, createComponent(Dynamic, {
        component: Button,
        y: 50,
        width: 300,
        children: "Button"
    }), null), insert(_el$4, createComponent(For, {
        get each() {
            return dynamicComponents();
        },
        children: (Component, index) => createComponent(Dynamic, {
            component: Component,
            get x() {
                return 205 * index();
            },
            y: 300,
            size: 50
        })
    }), null), _el$3;
    var _el$3, _el$4, _el$5;
};

export { PositioningPage as default };