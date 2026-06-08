import { b as createSignal, l as createComponent, C as Column, c as createElement, n as insertNode, v as use, p as createTextNode, a as setProp, m as effect, R as Row, F as For, S as Show, k as insert } from "./index-Dbq-Q8p_.js";

const Items = [ "Mary", "had", "a", "little", "lamb", "her", "fleece", "was", "white", "as", "snow" ];

const styles = {
    PageContainer: {
        width: 1920,
        height: 1080,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 99
    }
};

const SpecialFont = {
    color: 4278190335,
    $focus: {
        color: 4294967295
    }
};

const SuperFlex = () => {
    const [lazyShow, setLazyShow] = createSignal(false);
    let PageLoader;
    setTimeout(() => {
        setLazyShow(true);
        PageLoader.alpha = 0;
    }, 2e3);
    return createComponent(Column, {
        display: "block",
        get children() {
            return [ (() => {
                var _el$ = createElement("view"), _el$2 = createElement("text"), _el$4 = createElement("view"), _el$5 = createElement("text");
                insertNode(_el$, _el$2);
                insertNode(_el$, _el$4);
                insertNode(_el$, _el$5);
                var _ref$ = PageLoader;
                typeof _ref$ === "function" ? use(_ref$, _el$) : PageLoader = _el$;
                insertNode(_el$2, createTextNode("Center - gif doesnt animate"));
                setProp(_el$4, "autosize", true);
                setProp(_el$4, "src", "./assets/spinner.gif");
                insertNode(_el$5, createTextNode("Spinner"));
                effect(_$p => setProp(_el$, "style", styles.PageContainer, _$p));
                return _el$;
            })(), createComponent(Row, {
                scroll: "always",
                gap: 20,
                selected: 2,
                autofocus: true,
                x: 150,
                y: 50,
                transition: {
                    x: {
                        duration: 350
                    }
                },
                get children() {
                    return createComponent(For, {
                        each: Items,
                        children: (item, index) => (() => {
                            var _el$7 = createElement("view");
                            setProp(_el$7, "width", 100);
                            setProp(_el$7, "height", 200);
                            setProp(_el$7, "style", {
                                color: 4278190335,
                                $focus: {
                                    color: 4294967295
                                }
                            });
                            return _el$7;
                        })()
                    });
                }
            }), createComponent(Show, {
                get when() {
                    return lazyShow();
                },
                get children() {
                    return createComponent(Row, {
                        scroll: "none",
                        gap: 20,
                        selected: 2,
                        autofocus: true,
                        x: 150,
                        y: 350,
                        transition: {
                            x: {
                                duration: 350
                            }
                        },
                        get children() {
                            return createComponent(For, {
                                each: Items,
                                children: (item, index) => (() => {
                                    var _el$8 = createElement("view");
                                    setProp(_el$8, "width", 100);
                                    setProp(_el$8, "height", 200);
                                    setProp(_el$8, "style", {
                                        color: 4278190335,
                                        $focus: {
                                            color: 4294967295
                                        }
                                    });
                                    return _el$8;
                                })()
                            });
                        }
                    });
                }
            }), createComponent(Show, {
                get when() {
                    return lazyShow();
                },
                get children() {
                    return createComponent(Row, {
                        scroll: "none",
                        gap: 20,
                        selected: 2,
                        x: 150,
                        y: 650,
                        transition: {
                            x: {
                                duration: 350
                            }
                        },
                        get children() {
                            return createComponent(For, {
                                each: Items,
                                children: (item, index) => (() => {
                                    var _el$9 = createElement("text"), _el$0 = createTextNode(" ");
                                    insertNode(_el$9, _el$0);
                                    setProp(_el$9, "style", SpecialFont);
                                    setProp(_el$9, "fontSize", 24);
                                    insert(_el$9, item, _el$0);
                                    insert(_el$9, () => lazyShow() ? "Add Text" : "", null);
                                    return _el$9;
                                })()
                            });
                        }
                    });
                }
            }), createComponent(Show, {
                get when() {
                    return lazyShow();
                },
                get children() {
                    return createComponent(Column, {
                        scroll: "none",
                        gap: 20,
                        selected: 2,
                        x: 350,
                        y: 450,
                        get children() {
                            return createComponent(For, {
                                each: Items,
                                children: (item, index) => (() => {
                                    var _el$1 = createElement("text");
                                    setProp(_el$1, "style", SpecialFont);
                                    setProp(_el$1, "fontSize", 24);
                                    insert(_el$1, item);
                                    return _el$1;
                                })()
                            });
                        }
                    });
                }
            }) ];
        }
    });
};

export { SuperFlex as default, styles };
