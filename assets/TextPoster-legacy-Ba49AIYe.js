(function() {
    System.register([ "./render-legacy-2cnGZ5s_.js", "./Row-legacy-Chucva1T.js", "./state-legacy-BLUddoBY.js" ], function(_export, _context) {
        "use strict";
        var onMount, createElement, effect, createComponent, insert, setProp, createTextNode, insertNode, Row, setGlobalBackground, ButtonContainer, CircleContainer, ButtonIcon, Button, CircleIcon, TextPosterPage;
        return {
            setters: [ function(_renderLegacy001Js) {
                onMount = _renderLegacy001Js.$;
                createElement = _renderLegacy001Js.a;
                effect = _renderLegacy001Js.c;
                createComponent = _renderLegacy001Js.i;
                insert = _renderLegacy001Js.l;
                setProp = _renderLegacy001Js.m;
                createTextNode = _renderLegacy001Js.s;
                insertNode = _renderLegacy001Js.u;
            }, function(_RowLegacy009Js) {
                Row = _RowLegacy009Js.t;
            }, function(_stateLegacy00iJs) {
                setGlobalBackground = _stateLegacy00iJs.n;
            } ],
            execute: function execute() {
                ButtonContainer = {
                    display: "flex",
                    color: 4294967295,
                    alignItems: "center",
                    padding: [ 0, 32 ],
                    gap: 8,
                    height: 50,
                    effects: {
                        radius: {
                            radius: 8
                        },
                        border: {
                            width: 2,
                            color: 204
                        }
                    }
                };
                CircleContainer = {
                    height: 50,
                    width: 50,
                    color: 4294967295,
                    effects: {
                        radius: {
                            radius: 50
                        },
                        border: {
                            width: 2,
                            color: 204
                        }
                    }
                };
                ButtonIcon = function ButtonIcon(props) {
                    return function() {
                        var _el$ = createElement("view"), _el$2 = createElement("view"), _el$3 = createElement("text");
                        insertNode(_el$, _el$2);
                        insertNode(_el$, _el$3);
                        setProp(_el$, "style", ButtonContainer);
                        setProp(_el$2, "width", 26);
                        setProp(_el$2, "height", 26);
                        setProp(_el$3, "fontSize", 28);
                        setProp(_el$3, "lineHeight", 50);
                        setProp(_el$3, "color", 255);
                        insert(_el$3, function() {
                            return props.children;
                        });
                        effect(function(_$p) {
                            return setProp(_el$2, "src", props.icon, _$p);
                        });
                        return _el$;
                    }();
                };
                Button = function Button(props) {
                    return function() {
                        var _el$4 = createElement("view"), _el$5 = createElement("text");
                        insertNode(_el$4, _el$5);
                        setProp(_el$4, "style", ButtonContainer);
                        setProp(_el$5, "fontSize", 28);
                        setProp(_el$5, "lineHeight", 50);
                        setProp(_el$5, "color", 255);
                        insert(_el$5, function() {
                            return props.children;
                        });
                        return _el$4;
                    }();
                };
                CircleIcon = function CircleIcon(props) {
                    return function() {
                        var _el$6 = createElement("view"), _el$7 = createElement("view");
                        insertNode(_el$6, _el$7);
                        setProp(_el$6, "style", CircleContainer);
                        setProp(_el$7, "x", 25);
                        setProp(_el$7, "y", 25);
                        setProp(_el$7, "mount", .5);
                        setProp(_el$7, "width", 30);
                        setProp(_el$7, "height", 30);
                        effect(function(_$p) {
                            return setProp(_el$7, "src", props.icon, _$p);
                        });
                        return _el$6;
                    }();
                };
                _export("default", TextPosterPage = function TextPosterPage() {
                    var styles = {
                        detailPane: {
                            x: 150,
                            y: 63,
                            width: 1326,
                            height: 954
                        },
                        detailTitle: {
                            x: 50,
                            y: 27,
                            fontSize: 30,
                            fontWeight: "bold"
                        },
                        detailImage: {
                            width: 570,
                            height: 839,
                            x: 50,
                            y: 80,
                            borderRadius: 15
                        },
                        detailDescriptionPane: {
                            x: 679,
                            y: 80,
                            width: 602,
                            height: 839,
                            display: "flex",
                            flexDirection: "column",
                            gap: 30
                        },
                        detailDescription: {
                            width: 602,
                            display: "flex"
                        },
                        detailDescriptionTitle: {
                            width: 602,
                            color: 4039835903,
                            fontSize: 22,
                            fontWeight: "bold"
                        },
                        detailDescriptionText: {
                            width: 602,
                            fontSize: 22
                        }
                    };
                    onMount(function() {
                        setGlobalBackground(255);
                    });
                    return function() {
                        var _el$8 = createElement("view"), _el$9 = createElement("text"), _el$1 = createElement("view"), _el$10 = createElement("view"), _el$11 = createElement("view"), _el$12 = createElement("text"), _el$14 = createElement("text"), _el$16 = createElement("view"), _el$17 = createElement("text"), _el$19 = createElement("text"), _el$21 = createElement("text"), _el$23 = createElement("text");
                        insertNode(_el$8, _el$9);
                        insertNode(_el$8, _el$1);
                        insertNode(_el$8, _el$10);
                        setProp(_el$8, "id", "TextPosterPage");
                        insertNode(_el$9, createTextNode("Movie Name"));
                        setProp(_el$1, "src", "https://placehold.co/400x600.png");
                        insertNode(_el$10, _el$11);
                        insertNode(_el$10, _el$16);
                        insertNode(_el$10, _el$21);
                        insertNode(_el$10, _el$23);
                        insertNode(_el$11, _el$12);
                        insertNode(_el$11, _el$14);
                        insertNode(_el$12, createTextNode("Release Date :"));
                        insertNode(_el$14, createTextNode("10/10/2022"));
                        insertNode(_el$16, _el$17);
                        insertNode(_el$16, _el$19);
                        insertNode(_el$17, createTextNode("Genre :"));
                        insertNode(_el$19, createTextNode(" Action"));
                        insertNode(_el$21, createTextNode("Plot :"));
                        insertNode(_el$23, createTextNode("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata Cast : Tom cruise, ma3ti benabdelkader, oussama ramzi"));
                        setProp(_el$23, "contain", "both");
                        setProp(_el$23, "maxLines", 10);
                        setProp(_el$23, "marginTop", -20);
                        setProp(_el$23, "height", 400);
                        setProp(_el$23, "overflowSuffix", "...");
                        insert(_el$10, createComponent(Row, {
                            gap: 20,
                            autofocus: true,
                            get children() {
                                return [ createComponent(ButtonIcon, {
                                    icon: "./assets/playIcon.png",
                                    children: "Play"
                                }), createComponent(Button, {
                                    children: "More Info"
                                }), createComponent(CircleIcon, {
                                    icon: "./assets/thumbsUp.png"
                                }), createComponent(CircleIcon, {
                                    icon: "./assets/thumbsDown.png"
                                }) ];
                            }
                        }), null);
                        effect(function(_p$) {
                            var _v$ = styles.detailPane, _v$2 = styles.detailTitle, _v$3 = styles.detailImage, _v$4 = styles.detailDescriptionPane, _v$5 = styles.detailDescription, _v$6 = styles.detailDescriptionTitle, _v$7 = styles.detailDescriptionText, _v$8 = styles.detailDescription, _v$9 = styles.detailDescriptionTitle, _v$0 = styles.detailDescriptionText, _v$1 = styles.detailDescriptionTitle, _v$10 = styles.detailDescriptionText;
                            _v$ !== _p$.e && (_p$.e = setProp(_el$8, "style", _v$, _p$.e));
                            _v$2 !== _p$.t && (_p$.t = setProp(_el$9, "style", _v$2, _p$.t));
                            _v$3 !== _p$.a && (_p$.a = setProp(_el$1, "style", _v$3, _p$.a));
                            _v$4 !== _p$.o && (_p$.o = setProp(_el$10, "style", _v$4, _p$.o));
                            _v$5 !== _p$.i && (_p$.i = setProp(_el$11, "style", _v$5, _p$.i));
                            _v$6 !== _p$.n && (_p$.n = setProp(_el$12, "style", _v$6, _p$.n));
                            _v$7 !== _p$.s && (_p$.s = setProp(_el$14, "style", _v$7, _p$.s));
                            _v$8 !== _p$.h && (_p$.h = setProp(_el$16, "style", _v$8, _p$.h));
                            _v$9 !== _p$.r && (_p$.r = setProp(_el$17, "style", _v$9, _p$.r));
                            _v$0 !== _p$.d && (_p$.d = setProp(_el$19, "style", _v$0, _p$.d));
                            _v$1 !== _p$.l && (_p$.l = setProp(_el$21, "style", _v$1, _p$.l));
                            _v$10 !== _p$.u && (_p$.u = setProp(_el$23, "style", _v$10, _p$.u));
                            return _p$;
                        }, {
                            e: void 0,
                            t: void 0,
                            a: void 0,
                            o: void 0,
                            i: void 0,
                            n: void 0,
                            s: void 0,
                            h: void 0,
                            r: void 0,
                            d: void 0,
                            l: void 0,
                            u: void 0
                        });
                        return _el$8;
                    }();
                });
            }
        };
    });
})();