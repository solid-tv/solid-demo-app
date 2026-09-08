import { J as createSignal, M as Index, _ as use, a as createElement, f as mergeProps, h as setProp, i as createComponent, j as For, l as insert, s as createTextNode, u as insertNode } from "./render-UQXSDH2t.js";

import { n as LazyRow } from "./Lazy-COsAHmrj.js";

import { t as Column } from "./Column-B6a6wQRf.js";

import { t as Row } from "./Row-_H-XSkgI.js";

import { p as List, s as Poster } from "./components-CC5jptLg.js";

import { n as setGlobalBackground } from "./state-B_5okeWg.js";

var Loops = props => {
    const [activeRow, setActiveRow] = createSignal(props.data.rows[0]);
    let solidLogo, currentIndex = 0;
    setGlobalBackground(255);
    const titleRowStyles = {
        fontFamily: "Raleway",
        fontSize: 24,
        height: 32,
        lineHeight: 32
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
    })(), createComponent(Column, {
        get autofocus() {
            var _activeRow;
            return null == (_activeRow = activeRow()) ? void 0 : _activeRow.items();
        },
        y: 240,
        onKeyPress: function(e) {
            if ("[" === e.key && (currentIndex = Math.max(0, currentIndex - 1)), "]" === e.key && (currentIndex = Math.min(props.data.rows.length - 1, currentIndex + 1)), 
            "\\" === e.key) {
                const row = props.data.rows[0], items = row.items().slice().reverse();
                return void row.setItems(items);
            }
            setActiveRow(props.data.rows[currentIndex]);
        },
        get children() {
            return [ (_el$8 = createElement("view"), _el$9 = createElement("text"), insertNode(_el$8, _el$9), 
            setProp(_el$8, "x", 160), setProp(_el$8, "height", 300), setProp(_el$8, "forwardFocus", 1), 
            setProp(_el$8, "marginTop", 30), insertNode(_el$9, createTextNode("For Loop")), 
            setProp(_el$9, "skipFocus", !0), setProp(_el$9, "style", titleRowStyles), insert(_el$8, createComponent(Row, {
                gap: 20,
                y: 40,
                display: "block",
                get children() {
                    return createComponent(For, {
                        get each() {
                            var _activeRow2;
                            return null == (_activeRow2 = activeRow()) ? void 0 : _activeRow2.items();
                        },
                        children: (item, index) => createComponent(Poster, mergeProps({
                            get x() {
                                return 210 * index();
                            }
                        }, item))
                    });
                }
            }), null), _el$8), (_el$1 = createElement("view"), _el$10 = createElement("text"), 
            insertNode(_el$1, _el$10), setProp(_el$1, "x", 160), setProp(_el$1, "height", 300), 
            setProp(_el$1, "forwardFocus", 1), setProp(_el$1, "marginTop", 30), insertNode(_el$10, createTextNode("Map Loop")), 
            setProp(_el$10, "skipFocus", !0), setProp(_el$10, "style", titleRowStyles), insert(_el$1, createComponent(Row, {
                gap: 20,
                y: 40,
                display: "block",
                get children() {
                    var _activeRow3;
                    return null == (_activeRow3 = activeRow()) || null == (_activeRow3 = _activeRow3.items()) ? void 0 : _activeRow3.map((item, index) => createComponent(Poster, mergeProps({
                        x: 210 * index
                    }, item)));
                }
            }), null), _el$1), (_el$12 = createElement("view"), _el$13 = createElement("text"), 
            insertNode(_el$12, _el$13), setProp(_el$12, "x", 160), setProp(_el$12, "height", 300), 
            setProp(_el$12, "forwardFocus", 1), setProp(_el$12, "marginTop", 30), insertNode(_el$13, createTextNode("Index Loop")), 
            setProp(_el$13, "skipFocus", !0), setProp(_el$13, "style", titleRowStyles), insert(_el$12, createComponent(Row, {
                gap: 20,
                y: 40,
                display: "block",
                get children() {
                    return createComponent(Index, {
                        get each() {
                            var _activeRow4;
                            return null == (_activeRow4 = activeRow()) ? void 0 : _activeRow4.items();
                        },
                        children: (item, index) => createComponent(Poster, mergeProps({
                            x: 210 * index
                        }, item))
                    });
                }
            }), null), _el$12), (_el$15 = createElement("view"), _el$16 = createElement("text"), 
            insertNode(_el$15, _el$16), setProp(_el$15, "x", 160), setProp(_el$15, "height", 300), 
            setProp(_el$15, "forwardFocus", 1), setProp(_el$15, "marginTop", 30), insertNode(_el$16, createTextNode("Lazy Row Loop")), 
            setProp(_el$16, "skipFocus", !0), setProp(_el$16, "style", titleRowStyles), insert(_el$15, createComponent(LazyRow, {
                display: "block",
                gap: 20,
                upCount: 5,
                get each() {
                    var _activeRow5;
                    return null == (_activeRow5 = activeRow()) ? void 0 : _activeRow5.items();
                },
                y: 50,
                children: (item, index) => createComponent(Poster, mergeProps({
                    x: 210 * index
                }, item))
            }), null), _el$15), (_el$18 = createElement("view"), _el$19 = createElement("text"), 
            insertNode(_el$18, _el$19), setProp(_el$18, "x", 160), setProp(_el$18, "height", 300), 
            setProp(_el$18, "forwardFocus", 1), setProp(_el$18, "marginTop", 30), insertNode(_el$19, createTextNode("List Loop")), 
            setProp(_el$19, "skipFocus", !0), setProp(_el$19, "style", titleRowStyles), insert(_el$18, createComponent(Row, {
                gap: 20,
                y: 40,
                display: "block",
                get children() {
                    return createComponent(List, {
                        get each() {
                            var _activeRow6;
                            return null == (_activeRow6 = activeRow()) ? void 0 : _activeRow6.items();
                        },
                        children: (item, index) => createComponent(Poster, mergeProps({
                            get x() {
                                return 210 * index();
                            }
                        }, item, {
                            transition: {
                                x: {
                                    duration: 5550
                                }
                            }
                        }))
                    });
                }
            }), null), _el$18) ];
            var _el$18, _el$19, _el$15, _el$16, _el$12, _el$13, _el$1, _el$10, _el$8, _el$9;
        }
    }) ];
};

export { Loops as default };