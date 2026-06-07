import { u as useNavigate, J as useFocusStack, K as children, g as createSelector, i as createEffect, M as Announcer, N as memo, c as createElement, n as insertNode, a as setProp, p as createTextNode, k as insert, l as createComponent, C as Column, R as Row, F as For, q as mergeProps, m as effect, O as styles, Q as assertTruthy, b as createSignal, A as spread, v as use } from "./index-BWNx3kiE.js";

const Portal = props => {
    let portalRef;
    const navigate = useNavigate();
    const {storeFocus: storeFocus, restoreFocus: restoreFocus} = useFocusStack();
    const resolvedChildren = children(() => props.children);
    createSelector(() => 0);
    function onEnter() {
        let entity = this.children[this.selected || 0];
        assertTruthy(entity && entity.id);
        navigate("/" + entity.id);
    }
    const basicDemos = [ {
        title: "Focus Basics",
        id: "focusbasics",
        description: "Quick guide on Focus"
    }, {
        title: "Key Handling",
        id: "keyhandling",
        description: "Understanding Key Handling"
    }, {
        title: "Focus Handling",
        id: "focushandling",
        description: "Dealing with Focus Handling"
    }, {
        title: "Loop Basics",
        id: "loops",
        description: "Understanding For, Index, Lazy and List"
    }, {
        title: "Layout Basics",
        id: "layout",
        description: "Quick guide on Layout"
    }, {
        title: "Positioning",
        id: "positioning",
        description: "Positioning Elements"
    }, {
        title: "Create Elements",
        id: "create",
        description: "Testing Show + children + inserting text"
    }, {
        title: "Destroy",
        id: "destroy",
        description: "Using onDestroy to animate destruction"
    }, {
        title: "Viewport",
        id: "viewport",
        description: "Events going in and out of viewport"
    } ];
    const textDemos = [ {
        title: "Text",
        id: "text",
        description: "Text layout with flexbox"
    }, {
        title: "TextPoster",
        id: "textposter",
        description: "Text layout with flex and Poster"
    }, {
        title: "Text Centering",
        id: "textcentering",
        description: "verticalAlign, textBaselineMode, and flex alignment"
    }, {
        title: "Custom Buttons",
        id: "custombuttons",
        description: "6 custom buttons with text and icons"
    } ];
    const flexDemos = [ {
        title: "Flex Row",
        id: "flex",
        description: "Flex Row Implementation"
    }, {
        title: "Flex Column",
        id: "flexcolumn",
        description: "Flex Column Implementation"
    }, {
        title: "Flex Grow",
        id: "flexgrow",
        description: "Flex Grow Examples"
    }, {
        title: "Flex Row Vertical Align",
        id: "flexsize",
        description: "Flex Row Vertical Align Implementation"
    }, {
        title: "Flex Column Vertical Align",
        id: "flexcolumnsize",
        description: "Flex Column Vertical Align Implementation"
    }, {
        title: "Flex Menu",
        id: "flexmenu",
        description: "Flex Menu On Right Implementation"
    }, {
        title: "Flex Layout Tests",
        id: "superflex",
        description: "Complicated flex layouts"
    }, {
        title: "Gradients",
        id: "gradients",
        description: "Basic Gradients"
    }, {
        title: "Transitions",
        id: "transitions",
        description: "Comparing different Transitions"
    }, {
        title: "Complex Flex",
        id: "complexflex",
        description: "Complex Flex Layout with ~400 Nodes"
    }, {
        title: "ComplexFlexCaps",
        id: "complexflexcaps",
        description: "Complex Flex Layout using View and Text"
    } ];
    const advancedDemos = [ {
        title: "TMDB",
        id: "examples/tmdb",
        description: "TMDB Example"
    }, {
        title: "Login and Forms",
        id: "login",
        description: "Login with forms Example"
    }, {
        title: "Small Image",
        id: "image-performance",
        description: "Performance test for loading images"
    }, {
        title: "Large Image",
        id: "large-image-performance",
        description: "Performance test for loading 4 large images"
    }, {
        title: "Mixed Image",
        id: "mixed-image-performance",
        description: "1 Large Image + 10 Posters"
    }, {
        title: "Texture KTX",
        id: "texture-compression-performance",
        description: "Performance test for loading 25 KTX images"
    }, {
        title: "Nested Modal",
        id: "nested",
        description: "Nested Right Modal Example"
    }, {
        title: "Components",
        id: "components",
        description: "Reusable Components"
    }, {
        title: "Grid Primitive for Layout",
        id: "tmdbgrid",
        description: "Using Grid component"
    }, {
        title: "Grid",
        id: "grid",
        description: "Infinite Scroll Grid"
    }, {
        title: "Virtual",
        id: "virtual",
        description: "Virtual Rows"
    }, {
        title: "Infinite Items",
        id: "infinite",
        description: "Learn how to manage large list of items"
    }, {
        title: "Firebolt Integration",
        id: "firebolt",
        description: "Firebolt API Integration"
    }, {
        title: "Keep Alive",
        id: "keepalive",
        description: "Reuse component between layouts"
    }, {
        title: "Suspense",
        id: "suspense",
        description: "Using Suspense to load data"
    }, {
        title: "Tags",
        id: "tags",
        description: "Tags Page"
    }, {
        title: "Countdown Timer",
        id: "countdown",
        description: "Radial progress shader countdown"
    } ];
    function DemoTile(props2) {
        const Container = {
            width: 370,
            height: 320,
            borderRadius: 6,
            color: 405488895,
            transition: {
                color: true
            },
            $focus: {
                color: 4294967295
            }
        };
        const [hasFocus, setHasFocus] = createSignal(false);
        return (() => {
            var _el$ = createElement("view"), _el$2 = createElement("view"), _el$3 = createElement("text"), _el$4 = createElement("text"), _el$5 = createElement("text");
            insertNode(_el$, _el$2);
            spread(_el$, mergeProps(props2, {
                onFocusChanged: setHasFocus,
                style: Container
            }), true);
            insertNode(_el$2, _el$3);
            insertNode(_el$2, _el$4);
            insertNode(_el$2, _el$5);
            setProp(_el$2, "x", 30);
            setProp(_el$3, "y", 30);
            setProp(_el$3, "fontSize", 84);
            insert(_el$3, () => props2.index);
            setProp(_el$4, "y", 140);
            setProp(_el$4, "fontSize", 42);
            setProp(_el$4, "width", 340);
            setProp(_el$4, "maxHeight", 42);
            setProp(_el$4, "contain", "both");
            insert(_el$4, () => props2.title);
            setProp(_el$5, "y", 200);
            setProp(_el$5, "fontSize", 28);
            setProp(_el$5, "width", 330);
            setProp(_el$5, "contain", "width");
            insert(_el$5, () => props2.description);
            effect(_p$ => {
                var _v$ = hasFocus() ? 255 : 4294967295, _v$2 = hasFocus() ? 255 : 4294967295, _v$3 = hasFocus() ? 255 : 4294967295;
                _v$ !== _p$.e && (_p$.e = setProp(_el$3, "color", _v$, _p$.e));
                _v$2 !== _p$.t && (_p$.t = setProp(_el$4, "color", _v$2, _p$.t));
                _v$3 !== _p$.a && (_p$.a = setProp(_el$5, "color", _v$3, _p$.a));
                return _p$;
            }, {
                e: void 0,
                t: void 0,
                a: void 0
            });
            return _el$;
        })();
    }
    createEffect(() => {
        if (!resolvedChildren()) {
            restoreFocus();
        }
    });
    setTimeout(() => {
        Announcer.speak("Welcome to the examples");
    }, 1e3);
    return [ (() => {
        var _el$6 = createElement("view"), _el$7 = createElement("view"), _el$8 = createElement("view"), _el$9 = createElement("text"), _el$1 = createElement("view"), _el$10 = createElement("view");
        insertNode(_el$6, _el$7);
        insertNode(_el$6, _el$10);
        var _ref$ = portalRef;
        typeof _ref$ === "function" ? use(_ref$, _el$6) : portalRef = _el$6;
        setProp(_el$6, "colorTop", 1147903743);
        setProp(_el$6, "colorBottom", 743406847);
        setProp(_el$6, "onBlur", storeFocus);
        insertNode(_el$7, _el$8);
        insertNode(_el$7, _el$9);
        insertNode(_el$7, _el$1);
        setProp(_el$7, "x", 120);
        setProp(_el$8, "src", "./assets/solidjs.png");
        setProp(_el$8, "width", 101);
        setProp(_el$8, "height", 90);
        setProp(_el$8, "y", 40);
        insertNode(_el$9, createTextNode("Examples"));
        setProp(_el$9, "fontSize", 90);
        setProp(_el$9, "x", 110);
        setProp(_el$9, "y", 40);
        setProp(_el$1, "y", 140);
        setProp(_el$1, "height", 1);
        setProp(_el$1, "width", 1800);
        setProp(_el$1, "color", 3906468351);
        setProp(_el$10, "clipping", true);
        setProp(_el$10, "y", 146);
        setProp(_el$10, "x", 150);
        insert(_el$10, createComponent(Column, {
            scroll: "auto",
            y: 20,
            x: 20,
            gap: 20,
            get autofocus() {
                return !resolvedChildren();
            },
            get children() {
                return [ (() => {
                    var _el$11 = createElement("view"), _el$12 = createElement("text");
                    insertNode(_el$11, _el$12);
                    setProp(_el$11, "forwardFocus", 1);
                    setProp(_el$11, "height", 400);
                    insertNode(_el$12, createTextNode("Core Concepts"));
                    setProp(_el$12, "fontSize", 42);
                    insert(_el$11, createComponent(Row, {
                        y: 48,
                        onEnter: onEnter,
                        gap: 40,
                        height: 320,
                        flexBoundary: "contain",
                        scroll: "always",
                        get children() {
                            return createComponent(For, {
                                each: basicDemos,
                                children: (demo, i) => createComponent(DemoTile, mergeProps({
                                    get index() {
                                        return i();
                                    }
                                }, demo))
                            });
                        }
                    }), null);
                    effect(_$p => setProp(_el$12, "style", styles.RowTitle, _$p));
                    return _el$11;
                })(), (() => {
                    var _el$14 = createElement("view"), _el$15 = createElement("text");
                    insertNode(_el$14, _el$15);
                    setProp(_el$14, "forwardFocus", 1);
                    setProp(_el$14, "height", 400);
                    insertNode(_el$15, createTextNode("Text"));
                    setProp(_el$15, "fontSize", 42);
                    insert(_el$14, createComponent(Row, {
                        y: 48,
                        onEnter: onEnter,
                        gap: 40,
                        height: 320,
                        flexBoundary: "contain",
                        scroll: "always",
                        get children() {
                            return createComponent(For, {
                                each: textDemos,
                                children: (demo, i) => createComponent(DemoTile, mergeProps({
                                    get index() {
                                        return i();
                                    }
                                }, demo))
                            });
                        }
                    }), null);
                    effect(_$p => setProp(_el$15, "style", styles.RowTitle, _$p));
                    return _el$14;
                })(), (() => {
                    var _el$17 = createElement("view"), _el$18 = createElement("text");
                    insertNode(_el$17, _el$18);
                    setProp(_el$17, "forwardFocus", 1);
                    setProp(_el$17, "height", 400);
                    insertNode(_el$18, createTextNode("Flexbox & Styling"));
                    setProp(_el$18, "fontSize", 42);
                    insert(_el$17, createComponent(Row, {
                        y: 48,
                        onEnter: onEnter,
                        gap: 40,
                        height: 320,
                        flexBoundary: "contain",
                        scroll: "always",
                        get children() {
                            return createComponent(For, {
                                each: flexDemos,
                                children: (demo, i) => createComponent(DemoTile, mergeProps({
                                    get index() {
                                        return i();
                                    }
                                }, demo))
                            });
                        }
                    }), null);
                    effect(_$p => setProp(_el$18, "style", styles.RowTitle, _$p));
                    return _el$17;
                })(), (() => {
                    var _el$20 = createElement("view"), _el$21 = createElement("text");
                    insertNode(_el$20, _el$21);
                    setProp(_el$20, "forwardFocus", 1);
                    setProp(_el$20, "height", 400);
                    insertNode(_el$21, createTextNode("Patterns & Examples"));
                    setProp(_el$21, "fontSize", 42);
                    insert(_el$20, createComponent(Row, {
                        y: 48,
                        onEnter: onEnter,
                        gap: 40,
                        height: 320,
                        flexBoundary: "contain",
                        scroll: "always",
                        get children() {
                            return createComponent(For, {
                                each: advancedDemos,
                                children: (demo, i) => createComponent(DemoTile, mergeProps({
                                    get index() {
                                        return i();
                                    }
                                }, demo))
                            });
                        }
                    }), null);
                    effect(_$p => setProp(_el$21, "style", styles.RowTitle, _$p));
                    return _el$20;
                })() ];
            }
        }));
        effect(_$p => setProp(_el$6, "hidden", Boolean(resolvedChildren()), _$p));
        return _el$6;
    })(), memo(resolvedChildren) ];
};

export { Portal as default };
//# sourceMappingURL=Portal-CKJf-h0B.js.map
