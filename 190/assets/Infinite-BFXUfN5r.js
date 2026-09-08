import { N as Show, V as createEffect, a as createElement, c as effect, g as use, i as createComponent, l as insert, m as setProp, q as createSignal, s as createTextNode, u as insertNode } from "./render-pt2tmeLm.js";

import { t as mergeProps } from "./mergeProps-Dy_Gh_AM.js";

import { p as List, s as Poster } from "./components-BAwFHbW5.js";

import { n as setGlobalBackground } from "./state-BeIgwke9.js";

var Loops = props => {
    const [allItems, setAllItems] = createSignal([]), [displayedItems, setDisplayedItems] = createSignal([]), [resetCounter, setResetCounter] = createSignal(1);
    let solidLogo, currentIndex = 0;
    function updateDisplayedItems() {
        const items = allItems(), start = Math.max(currentIndex, 0), end = Math.min(currentIndex + 5 + 2, items.length);
        setDisplayedItems(items.slice(start, end));
    }
    function reset(_e, elm) {
        return currentIndex = 0, setResetCounter(r => r + 1), updateDisplayedItems(), elm.children[1].setFocus(), 
        !0;
    }
    function shiftLeft(_e, elm) {
        return currentIndex > 0 && (currentIndex = Math.max(0, currentIndex - 1), elm.children[0].setFocus(), 
        updateDisplayedItems()), !0;
    }
    function shiftRight(_e, elm) {
        return currentIndex < allItems().length - 1 && (currentIndex = Math.min(allItems().length - 1, currentIndex + 1), 
        elm.children[2].setFocus(), updateDisplayedItems()), !0;
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
        return node.alpha = 0, node.y = -100, node.animate({
            y: 55,
            alpha: 1
        }, {
            duration: 500,
            easing: "ease-in-out"
        }).start().waitUntilStopped();
    }
    createEffect(() => {
        const all = [ {}, ...props.data.rows.map(row => row.items()).flat() ];
        setAllItems(all), setDisplayedItems(all.slice(0, 7));
    }), setGlobalBackground(255);
    const titleRowStyles = {
        fontFamily: "Raleway",
        fontSize: 24,
        height: 32,
        lineHeight: 32
    }, withTransition = {
        x: {
            duration: 250
        },
        alpha: {
            duration: 250
        }
    };
    return [ (() => {
        var _el$ = createElement("view"), _el$2 = createElement("text"), _el$4 = createElement("view"), _el$5 = createElement("view"), _el$6 = createElement("text");
        insertNode(_el$, _el$2), insertNode(_el$, _el$4), insertNode(_el$, _el$5), insertNode(_el$, _el$6);
        return "function" == typeof solidLogo ? use(solidLogo, _el$) : solidLogo = _el$, 
        setProp(_el$, "width", 300), setProp(_el$, "height", 150), setProp(_el$, "x", 162), 
        setProp(_el$, "y", 80), setProp(_el$, "zIndex", 105), insertNode(_el$2, createTextNode("Built With:")), 
        setProp(_el$2, "x", 80), setProp(_el$2, "fontSize", 28), setProp(_el$2, "color", 4143380121), 
        setProp(_el$4, "y", 32), setProp(_el$4, "src", "./assets/solidWord.png"), setProp(_el$4, "width", 280), 
        setProp(_el$4, "height", 52), setProp(_el$5, "x", 0), setProp(_el$5, "y", 110), 
        setProp(_el$5, "src", "./assets/tmdb.png"), setProp(_el$5, "width", 80), setProp(_el$5, "height", 41), 
        insertNode(_el$6, createTextNode("This product uses the TMDB API but is not endorsed or certified by TMDB.")), 
        setProp(_el$6, "x", 90), setProp(_el$6, "y", 110), setProp(_el$6, "contain", "width"), 
        setProp(_el$6, "width", 160), setProp(_el$6, "fontSize", 12), setProp(_el$6, "color", 4143380121), 
        _el$;
    })(), (_el$8 = createElement("view"), _el$9 = createElement("text"), insertNode(_el$8, _el$9), 
    setProp(_el$8, "x", 160), setProp(_el$8, "y", 300), setProp(_el$8, "height", 300), 
    insertNode(_el$9, createTextNode("Infinite Item List")), setProp(_el$9, "style", titleRowStyles), 
    insert(_el$8, createComponent(Show, {
        get when() {
            return resetCounter();
        },
        keyed: !0,
        get children() {
            var _el$1 = createElement("view");
            return setProp(_el$1, "onDestroy", animateOut), setProp(_el$1, "onCreate", animateIn), 
            setProp(_el$1, "onFocus", elm => {
                var _elm$children$;
                return null == (_elm$children$ = elm.children[1]) ? void 0 : _elm$children$.setFocus();
            }), setProp(_el$1, "onLeft", shiftLeft), setProp(_el$1, "onRight", shiftRight), 
            setProp(_el$1, "onUp", reset), setProp(_el$1, "onDown", reset), setProp(_el$1, "y", 55), 
            insert(_el$1, createComponent(List, {
                get each() {
                    return displayedItems();
                },
                children: (item, index) => createComponent(Poster, mergeProps(item, {
                    get x() {
                        return 210 * index() - 210;
                    },
                    get alpha() {
                        return 0 === index() || index() === displayedItems().length - 1 ? 0 : 1;
                    },
                    transition: withTransition
                }))
            })), effect(_$p => setProp(_el$1, "autofocus", allItems(), _$p)), _el$1;
        }
    }), null), _el$8) ];
    var _el$8, _el$9;
};

export { Loops as default };