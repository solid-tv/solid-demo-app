import { b as createSignal, i as createEffect, s as setGlobalBackground, c as createElement, n as insertNode, a as setProp, p as createTextNode, k as insert, l as createComponent, S as Show, r as List, P as Poster, q as mergeProps, m as effect, v as use } from "./index-B7fHaGc8.js";

const Loops = props => {
    const [allItems, setAllItems] = createSignal([]);
    const [displayedItems, setDisplayedItems] = createSignal([]);
    const [resetCounter, setResetCounter] = createSignal(1);
    const displaySize = 5;
    const bufferSize = 2;
    let currentIndex = 0, solidLogo;
    createEffect(() => {
        const all = [ {}, ...props.data.rows.map(row => row.items()).flat() ];
        setAllItems(all);
        setDisplayedItems(all.slice(0, displaySize + bufferSize));
    });
    function updateDisplayedItems() {
        const items = allItems();
        const start = Math.max(currentIndex, 0);
        const end = Math.min(currentIndex + displaySize + bufferSize, items.length);
        setDisplayedItems(items.slice(start, end));
    }
    function reset(_e, elm) {
        currentIndex = 0;
        setResetCounter(r => r + 1);
        updateDisplayedItems();
        elm.children[1].setFocus();
        return true;
    }
    function shiftLeft(_e, elm) {
        if (currentIndex > 0) {
            currentIndex = Math.max(0, currentIndex - 1);
            elm.children[0].setFocus();
            updateDisplayedItems();
        }
        return true;
    }
    function shiftRight(_e, elm) {
        if (currentIndex < allItems().length - 1) {
            currentIndex = Math.min(allItems().length - 1, currentIndex + 1);
            elm.children[2].setFocus();
            updateDisplayedItems();
        }
        return true;
    }
    function animateOut(node) {
        return node.animate({
            y: 200,
            alpha: 0
        }, {
            duration: 500,
            easing: "ease-in-out"
        }).start().waitUntilStopped();
    }
    function animateIn(node) {
        node.alpha = 0;
        node.y = -100;
        return node.animate({
            y: 55,
            alpha: 1
        }, {
            duration: 500,
            easing: "ease-in-out"
        }).start().waitUntilStopped();
    }
    setGlobalBackground(255);
    const titleRowStyles = {
        fontFamily: "Raleway",
        fontSize: 24,
        height: 32,
        lineHeight: 32
    };
    const withTransition = {
        x: {
            duration: 250
        },
        alpha: {
            duration: 250
        }
    };
    return [ (() => {
        var _el$ = createElement("view"), _el$2 = createElement("text"), _el$4 = createElement("view"), _el$5 = createElement("view"), _el$6 = createElement("text");
        insertNode(_el$, _el$2);
        insertNode(_el$, _el$4);
        insertNode(_el$, _el$5);
        insertNode(_el$, _el$6);
        var _ref$ = solidLogo;
        typeof _ref$ === "function" ? use(_ref$, _el$) : solidLogo = _el$;
        setProp(_el$, "width", 300);
        setProp(_el$, "height", 150);
        setProp(_el$, "x", 162);
        setProp(_el$, "y", 80);
        setProp(_el$, "zIndex", 105);
        insertNode(_el$2, createTextNode("Built With:"));
        setProp(_el$2, "x", 80);
        setProp(_el$2, "fontSize", 28);
        setProp(_el$2, "color", 4143380121);
        setProp(_el$4, "y", 32);
        setProp(_el$4, "src", "./assets/solidWord.png");
        setProp(_el$4, "width", 280);
        setProp(_el$4, "height", 52);
        setProp(_el$5, "x", 0);
        setProp(_el$5, "y", 110);
        setProp(_el$5, "src", "./assets/tmdb.png");
        setProp(_el$5, "width", 80);
        setProp(_el$5, "height", 41);
        insertNode(_el$6, createTextNode("This product uses the TMDB API but is not endorsed or certified by TMDB."));
        setProp(_el$6, "x", 90);
        setProp(_el$6, "y", 110);
        setProp(_el$6, "contain", "width");
        setProp(_el$6, "width", 160);
        setProp(_el$6, "fontSize", 12);
        setProp(_el$6, "color", 4143380121);
        return _el$;
    })(), (() => {
        var _el$8 = createElement("view"), _el$9 = createElement("text");
        insertNode(_el$8, _el$9);
        setProp(_el$8, "x", 160);
        setProp(_el$8, "y", 300);
        setProp(_el$8, "height", 300);
        insertNode(_el$9, createTextNode("Infinite Item List"));
        setProp(_el$9, "style", titleRowStyles);
        insert(_el$8, createComponent(Show, {
            get when() {
                return resetCounter();
            },
            keyed: true,
            get children() {
                var _el$1 = createElement("view");
                setProp(_el$1, "onDestroy", animateOut);
                setProp(_el$1, "onCreate", animateIn);
                setProp(_el$1, "onFocus", elm => {
                    var _a;
                    return (_a = elm.children[1]) == null ? void 0 : _a.setFocus();
                });
                setProp(_el$1, "onLeft", shiftLeft);
                setProp(_el$1, "onRight", shiftRight);
                setProp(_el$1, "onUp", reset);
                setProp(_el$1, "onDown", reset);
                setProp(_el$1, "y", 55);
                insert(_el$1, createComponent(List, {
                    get each() {
                        return displayedItems();
                    },
                    children: (item, index) => {
                        const isEdgeItem = () => index() === 0 || index() === displayedItems().length - 1;
                        return createComponent(Poster, mergeProps(item, {
                            get x() {
                                return index() * 210 - 210;
                            },
                            get alpha() {
                                return isEdgeItem() ? 0 : 1;
                            },
                            transition: withTransition
                        }));
                    }
                }));
                effect(_$p => setProp(_el$1, "autofocus", allItems(), _$p));
                return _el$1;
            }
        }), null);
        return _el$8;
    })() ];
};

export { Loops as default };
