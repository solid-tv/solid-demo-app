(function() {
    function _slicedToArray(r, e) {
        return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
    }
    function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(r, a) {
        if (r) {
            if ("string" == typeof r) return _arrayLikeToArray(r, a);
            var t = {}.toString.call(r).slice(8, -1);
            return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
        }
    }
    function _arrayLikeToArray(r, a) {
        (null == a || a > r.length) && (a = r.length);
        for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
        return n;
    }
    function _iterableToArrayLimit(r, l) {
        var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
        if (null != t) {
            var e, n, i, u, a = [], f = !0, o = !1;
            try {
                if (i = (t = t.call(r)).next, 0 === l) {
                    if (Object(t) !== t) return;
                    f = !1;
                } else for (;!(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) ;
            } catch (r) {
                o = !0, n = r;
            } finally {
                try {
                    if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
                } finally {
                    if (o) throw n;
                }
            }
            return a;
        }
    }
    function _arrayWithHoles(r) {
        if (Array.isArray(r)) return r;
    }
    System.register([ "./render-legacy-DCiJIohl.js", "./utils-legacy-D5ZRtW09.js", "./mergeProps-legacy-DBRmp_og.js", "./state-legacy-BXylYYGD.js" ], function(_export, _context) {
        "use strict";
        var onMount, children, Show, createElement, use, spread, createComponent, insert, setProp, createSignal, createTextNode, insertNode, combineStyles, hexColor, mergeProps, setGlobalBackground, CreatePage;
        return {
            setters: [ function(_renderLegacy001Js) {
                onMount = _renderLegacy001Js.$;
                children = _renderLegacy001Js.L;
                Show = _renderLegacy001Js.N;
                createElement = _renderLegacy001Js.a;
                use = _renderLegacy001Js.g;
                spread = _renderLegacy001Js.h;
                createComponent = _renderLegacy001Js.i;
                insert = _renderLegacy001Js.l;
                setProp = _renderLegacy001Js.m;
                createSignal = _renderLegacy001Js.q;
                createTextNode = _renderLegacy001Js.s;
                insertNode = _renderLegacy001Js.u;
            }, function(_utilsLegacy002Js) {
                combineStyles = _utilsLegacy002Js.n;
                hexColor = _utilsLegacy002Js.r;
            }, function(_mergePropsLegacy003Js) {
                mergeProps = _mergePropsLegacy003Js.t;
            }, function(_stateLegacy00iJs) {
                setGlobalBackground = _stateLegacy00iJs.n;
            } ],
            execute: function execute() {
                _export("default", CreatePage = function CreatePage() {
                    var OverviewContainer = {
                        width: 900,
                        height: 500,
                        y: 50,
                        x: 150,
                        gap: 25,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flexStart",
                        color: hexColor("00000000")
                    };
                    var SublineContainer = {
                        width: 900,
                        height: 36,
                        gap: 6,
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flexStart",
                        color: hexColor("00000000")
                    };
                    var Title = {
                        fontSize: 42
                    };
                    var Subline = {
                        fontSize: 26
                    };
                    var myBox, childRef;
                    onMount(function() {
                        setGlobalBackground(255);
                        myBox.animate({
                            x: 100
                        }, {
                            duration: 2e3
                        }).start();
                    });
                    var _createSignal = createSignal(), _createSignal2 = _slicedToArray(_createSignal, 2), insertTest = _createSignal2[0], setInsertTest = _createSignal2[1];
                    var _createSignal3 = createSignal(), _createSignal4 = _slicedToArray(_createSignal3, 2), emptyTest = _createSignal4[0], setEmptyTest = _createSignal4[1];
                    setTimeout(function() {
                        var _childRef$getChildByI;
                        setInsertTest("- Inserted -");
                        (_childRef$getChildByI = childRef.getChildById("child1")) == null || _childRef$getChildByI.animate({
                            x: 600
                        }, {
                            duration: 2e3
                        }).start();
                    }, 2e3);
                    var styleChild = {
                        width: 400,
                        height: 300,
                        color: 65535
                    };
                    var someOtherStyle = {
                        color: 4114760447,
                        $focus: {
                            color: 1116206591
                        }
                    };
                    function ChildTest(props) {
                        var resolved = children(function() {
                            return props.children;
                        });
                        return function() {
                            var _el$ = createElement("view"), _el$2 = createElement("view"), _el$3 = createElement("view"), _el$4 = createElement("text"), _el$5 = createElement("view");
                            insertNode(_el$, _el$2);
                            insertNode(_el$, _el$5);
                            spread(_el$, mergeProps(props, {
                                get style() {
                                    return combineStyles(someOtherStyle, props.style, styleChild);
                                }
                            }), true);
                            insertNode(_el$2, _el$3);
                            insertNode(_el$2, _el$4);
                            setProp(_el$2, "id", "child1");
                            setProp(_el$2, "width", 100);
                            setProp(_el$2, "height", 100);
                            setProp(_el$2, "color", 4278190335);
                            setProp(_el$2, "y", 25);
                            insert(_el$2, resolved, _el$3);
                            setProp(_el$3, "id", "subChild");
                            setProp(_el$3, "x", 150);
                            setProp(_el$3, "width", 100);
                            setProp(_el$3, "height", 100);
                            setProp(_el$3, "color", 16711935);
                            insert(_el$4, function() {
                                return props.title;
                            });
                            setProp(_el$5, "width", 100);
                            setProp(_el$5, "height", 100);
                            setProp(_el$5, "color", 4294902015);
                            setProp(_el$5, "y", 175);
                            insert(_el$5, resolved);
                            return _el$;
                        }();
                    }
                    function PosTest(props) {
                        return function() {
                            var _el$6 = createElement("view"), _el$7 = createElement("view"), _el$8 = createElement("text"), _el$0 = createElement("view"), _el$1 = createElement("text"), _el$11 = createElement("view"), _el$12 = createElement("text");
                            insertNode(_el$6, _el$7);
                            insertNode(_el$6, _el$0);
                            insertNode(_el$6, _el$11);
                            spread(_el$6, mergeProps(props, {
                                width: 400,
                                height: 400,
                                color: 65535
                            }), true);
                            insertNode(_el$7, _el$8);
                            setProp(_el$7, "width", 50);
                            setProp(_el$7, "height", 50);
                            setProp(_el$7, "color", 4278190335);
                            setProp(_el$7, "right", 0);
                            insertNode(_el$8, createTextNode("Right"));
                            setProp(_el$8, "fontSize", 18);
                            insertNode(_el$0, _el$1);
                            setProp(_el$0, "width", 50);
                            setProp(_el$0, "height", 50);
                            setProp(_el$0, "color", 4278190335);
                            setProp(_el$0, "bottom", 0);
                            insertNode(_el$1, createTextNode("Bottom"));
                            setProp(_el$1, "fontSize", 18);
                            insertNode(_el$11, _el$12);
                            setProp(_el$11, "width", 50);
                            setProp(_el$11, "height", 50);
                            setProp(_el$11, "color", 4278190335);
                            setProp(_el$11, "bottom", 0);
                            setProp(_el$11, "right", 0);
                            setProp(_el$11, "data", {
                                id: "BR"
                            });
                            insertNode(_el$12, createTextNode("BR"));
                            setProp(_el$12, "fontSize", 18);
                            return _el$6;
                        }();
                    }
                    var borderStyles = {
                        border: {
                            width: 0,
                            color: 95598118
                        },
                        borderRadius: 32
                    };
                    var childTestPassedStyles = {
                        color: 3435973887,
                        $focus: {
                            color: 255
                        }
                    };
                    var childTestPassedStyles2 = {
                        color: 4294967295,
                        $focus: {
                            color: 4143369471
                        }
                    };
                    return [ function() {
                        var _el$14 = createElement("view"), _el$15 = createElement("text"), _el$17 = createElement("view"), _el$18 = createElement("text"), _el$19 = createElement("text"), _el$20 = createTextNode("Sub "), _el$21 = createTextNode(" Text"), _el$23 = createElement("text"), _el$27 = createElement("view");
                        insertNode(_el$14, _el$15);
                        insertNode(_el$14, _el$17);
                        insertNode(_el$14, _el$27);
                        setProp(_el$14, "style", OverviewContainer);
                        insertNode(_el$15, createTextNode("Title of the Page"));
                        setProp(_el$15, "style", Title);
                        insertNode(_el$17, _el$18);
                        insertNode(_el$17, _el$19);
                        insertNode(_el$17, _el$23);
                        setProp(_el$17, "style", SublineContainer);
                        insert(_el$18, emptyTest);
                        insertNode(_el$19, _el$20);
                        insertNode(_el$19, _el$21);
                        setProp(_el$19, "style", Subline);
                        insert(_el$19, insertTest, _el$21);
                        insert(_el$17, createComponent(Show, {
                            get when() {
                                return insertTest();
                            },
                            get children() {
                                var _el$22 = createElement("view");
                                setProp(_el$22, "width", 28);
                                setProp(_el$22, "height", 28);
                                setProp(_el$22, "src", "./assets/rt-popcorn.png");
                                return _el$22;
                            }
                        }), _el$23);
                        insertNode(_el$23, createTextNode("More Text"));
                        setProp(_el$23, "style", Subline);
                        insert(_el$14, createComponent(ChildTest, {
                            autofocus: true,
                            ref: function ref(r$) {
                                var _ref$ = childRef;
                                typeof _ref$ === "function" ? _ref$(r$) : childRef = r$;
                            },
                            get style() {
                                return combineStyles(childTestPassedStyles2, childTestPassedStyles);
                            },
                            get children() {
                                var _el$25 = createElement("text");
                                insertNode(_el$25, createTextNode("Child Test"));
                                return _el$25;
                            }
                        }), _el$27);
                        var _ref$2 = myBox;
                        typeof _ref$2 === "function" ? use(_ref$2, _el$27) : myBox = _el$27;
                        setProp(_el$27, "style", borderStyles);
                        setProp(_el$27, "width", 100);
                        setProp(_el$27, "height", 100);
                        setProp(_el$27, "color", 16711935);
                        setProp(_el$27, "x", 900);
                        setProp(_el$27, "y", 400);
                        insert(_el$14, createComponent(PosTest, {
                            x: 100,
                            y: 100
                        }), null);
                        return _el$14;
                    }(), function() {
                        var _el$28 = createElement("view");
                        setProp(_el$28, "x", 1100);
                        setProp(_el$28, "y", 50);
                        setProp(_el$28, "width", 200);
                        setProp(_el$28, "height", 200);
                        setProp(_el$28, "linearGradient", {
                            colors: [ 4290840575, 4288151807, 4283585279 ],
                            angle: 4.1,
                            stops: [ 0, .5, 1 ]
                        });
                        return _el$28;
                    }() ];
                });
            }
        };
    });
})();