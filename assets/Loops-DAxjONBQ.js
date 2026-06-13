import { b as createSignal, s as setGlobalBackground, l as createComponent, c as createElement, n as insertNode, a as setProp, p as createTextNode, C as Column, k as insert, R as Row, F as For, P as Poster, q as mergeProps, I as Index, L as LazyRow, r as List, v as use } from "./index-Cdq34UD4.js";

const Loops = props => {
    const [activeRow, setActiveRow] = createSignal(props.data.rows[0]);
    let currentIndex = 0, solidLogo;
    setGlobalBackground(255);
    const titleRowStyles = {
        fontFamily: "Raleway",
        fontSize: 24,
        height: 32,
        lineHeight: 32
    };
    function switchRow(e) {
        if (e.key === "[") {
            currentIndex = Math.max(0, currentIndex - 1);
        }
        if (e.key === "]") {
            currentIndex = Math.min(props.data.rows.length - 1, currentIndex + 1);
        }
        if (e.key === "\\") {
            const row = props.data.rows[0];
            const items = row.items().slice().reverse();
            row.setItems(items);
            return;
        }
        setActiveRow(props.data.rows[currentIndex]);
    }
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
    })(), createComponent(Column, {
        get autofocus() {
            var _a;
            return (_a = activeRow()) == null ? void 0 : _a.items();
        },
        y: 240,
        onKeyPress: switchRow,
        get children() {
            return [ (() => {
                var _el$8 = createElement("view"), _el$9 = createElement("text");
                insertNode(_el$8, _el$9);
                setProp(_el$8, "x", 160);
                setProp(_el$8, "height", 300);
                setProp(_el$8, "forwardFocus", 1);
                setProp(_el$8, "marginTop", 30);
                insertNode(_el$9, createTextNode("For Loop"));
                setProp(_el$9, "skipFocus", true);
                setProp(_el$9, "style", titleRowStyles);
                insert(_el$8, createComponent(Row, {
                    gap: 20,
                    y: 40,
                    display: "block",
                    get children() {
                        return createComponent(For, {
                            get each() {
                                var _a;
                                return (_a = activeRow()) == null ? void 0 : _a.items();
                            },
                            children: (item, index) => createComponent(Poster, mergeProps({
                                get x() {
                                    return index() * 210;
                                }
                            }, item))
                        });
                    }
                }), null);
                return _el$8;
            })(), (() => {
                var _el$1 = createElement("view"), _el$10 = createElement("text");
                insertNode(_el$1, _el$10);
                setProp(_el$1, "x", 160);
                setProp(_el$1, "height", 300);
                setProp(_el$1, "forwardFocus", 1);
                setProp(_el$1, "marginTop", 30);
                insertNode(_el$10, createTextNode("Map Loop"));
                setProp(_el$10, "skipFocus", true);
                setProp(_el$10, "style", titleRowStyles);
                insert(_el$1, createComponent(Row, {
                    gap: 20,
                    y: 40,
                    display: "block",
                    get children() {
                        var _a, _b;
                        return (_b = (_a = activeRow()) == null ? void 0 : _a.items()) == null ? void 0 : _b.map((item, index) => createComponent(Poster, mergeProps({
                            x: index * 210
                        }, item)));
                    }
                }), null);
                return _el$1;
            })(), (() => {
                var _el$12 = createElement("view"), _el$13 = createElement("text");
                insertNode(_el$12, _el$13);
                setProp(_el$12, "x", 160);
                setProp(_el$12, "height", 300);
                setProp(_el$12, "forwardFocus", 1);
                setProp(_el$12, "marginTop", 30);
                insertNode(_el$13, createTextNode("Index Loop"));
                setProp(_el$13, "skipFocus", true);
                setProp(_el$13, "style", titleRowStyles);
                insert(_el$12, createComponent(Row, {
                    gap: 20,
                    y: 40,
                    display: "block",
                    get children() {
                        return createComponent(Index, {
                            get each() {
                                var _a;
                                return (_a = activeRow()) == null ? void 0 : _a.items();
                            },
                            children: (item, index) => createComponent(Poster, mergeProps({
                                x: index * 210
                            }, item))
                        });
                    }
                }), null);
                return _el$12;
            })(), (() => {
                var _el$15 = createElement("view"), _el$16 = createElement("text");
                insertNode(_el$15, _el$16);
                setProp(_el$15, "x", 160);
                setProp(_el$15, "height", 300);
                setProp(_el$15, "forwardFocus", 1);
                setProp(_el$15, "marginTop", 30);
                insertNode(_el$16, createTextNode("Lazy Row Loop"));
                setProp(_el$16, "skipFocus", true);
                setProp(_el$16, "style", titleRowStyles);
                insert(_el$15, createComponent(LazyRow, {
                    display: "block",
                    gap: 20,
                    upCount: 5,
                    get each() {
                        var _a;
                        return (_a = activeRow()) == null ? void 0 : _a.items();
                    },
                    y: 50,
                    children: (item, index) => createComponent(Poster, mergeProps({
                        x: index * 210
                    }, item))
                }), null);
                return _el$15;
            })(), (() => {
                var _el$18 = createElement("view"), _el$19 = createElement("text");
                insertNode(_el$18, _el$19);
                setProp(_el$18, "x", 160);
                setProp(_el$18, "height", 300);
                setProp(_el$18, "forwardFocus", 1);
                setProp(_el$18, "marginTop", 30);
                insertNode(_el$19, createTextNode("List Loop"));
                setProp(_el$19, "skipFocus", true);
                setProp(_el$19, "style", titleRowStyles);
                insert(_el$18, createComponent(Row, {
                    gap: 20,
                    y: 40,
                    display: "block",
                    get children() {
                        return createComponent(List, {
                            get each() {
                                var _a;
                                return (_a = activeRow()) == null ? void 0 : _a.items();
                            },
                            children: (item, index) => createComponent(Poster, mergeProps({
                                get x() {
                                    return index() * 210;
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
                }), null);
                return _el$18;
            })() ];
        }
    }) ];
};

export { Loops as default };
//# sourceMappingURL=Loops-DAxjONBQ.js.map
