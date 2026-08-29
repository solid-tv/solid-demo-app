import { M as For, W as createMemo, Y as createSignal, _ as ElementNode, a as createElement, et as onCleanup, h as spread, i as createComponent, l as insert, m as setProp, ot as untrack, q as createRoot, s as createTextNode, t as Dynamic, u as insertNode, z as children } from "./render-DoMuJa_u.js";

import { t as mergeProps } from "./mergeProps-CZhOiis0.js";

import { r as Button } from "./components-B-KA8T9e.js";

import { n as setGlobalBackground } from "./state-C4mb-rWP.js";

function Visible(props) {
    let child;
    let disposer;
    const keyed = props.keyed;
    const condition = createMemo(() => props.when, void 0, void 0 ? {
        equals: (a, b) => keyed ? a === b : !a === !b,
        name: "condition"
    } : {
        equals: (a, b) => keyed ? a === b : !a === !b
    });
    onCleanup(() => disposer == null ? void 0 : disposer());
    return createMemo(() => {
        const c = condition();
        if (untrack(() => !!keyed)) {
            disposer == null || disposer();
            child = void 0;
        }
        if (c && !child) disposer = createRoot(dispose => {
            child = children(() => props.children);
            return dispose;
        });
        const isHidden = !c;
        child == null || child.toArray().forEach(childNode => {
            if (childNode instanceof ElementNode) childNode.hidden = isHidden;
        });
        return c || child ? child : null;
    });
}

function Square(props) {
    return (() => {
        var _el$ = createElement("view");
        spread(_el$, mergeProps(props, {
            get width() {
                return props.size || 80;
            },
            get height() {
                return props.size || 80;
            },
            get color() {
                return props.color || 3772834047;
            }
        }), false);
        return _el$;
    })();
}

function Card(props) {
    return (() => {
        var _el$2 = createElement("view");
        spread(_el$2, mergeProps(props, {
            get width() {
                return props.size === "large" ? 400 : 200;
            },
            get height() {
                return props.size === "large" ? 500 : 300;
            },
            transition: true,
            color: 143766271
        }), true);
        insert(_el$2, createComponent(Square, {
            x: 80,
            y: 80
        }), null);
        insert(_el$2, createComponent(Square, {
            x: 20,
            y: 20,
            size: 40
        }), null);
        return _el$2;
    })();
}

var PositioningPage = () => {
    setGlobalBackground(506018815);
    const [x, setX] = createSignal(100);
    const [size, setSize] = createSignal(true);
    const [dynamicComponents] = createSignal([ Square, Card, Square ]);
    const interval = setInterval(() => {
        setX(x => x === 100 ? 250 : 100);
        setSize(size => !size);
    }, 2e3);
    onCleanup(() => clearInterval(interval));
    return (() => {
        var _el$3 = createElement("view"), _el$4 = createElement("view"), _el$5 = createElement("text");
        insertNode(_el$3, _el$4);
        setProp(_el$3, "x", 150);
        setProp(_el$3, "autofocus", true);
        insert(_el$3, createComponent(Visible, {
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
        }), _el$4);
        insert(_el$3, createComponent(Square, {
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
        }), _el$4);
        insert(_el$3, createComponent(Card, {
            x: 500,
            y: 100,
            get size() {
                return size() ? "large" : "small";
            }
        }), _el$4);
        insert(_el$3, createComponent(Card, {
            x: 500,
            y: 500,
            get size() {
                return size() ? "small" : "large";
            }
        }), _el$4);
        insertNode(_el$4, _el$5);
        setProp(_el$4, "x", 1e3);
        setProp(_el$4, "y", 100);
        insertNode(_el$5, createTextNode(`Dynamic Components`));
        insert(_el$4, createComponent(Dynamic, {
            component: Button,
            y: 50,
            width: 300,
            children: "Button"
        }), null);
        insert(_el$4, createComponent(For, {
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
        }), null);
        return _el$3;
    })();
};

export { PositioningPage as default };