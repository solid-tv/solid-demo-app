(function() {
    System.register([ "./render-legacy-BO_iU_BL.js", "./components-legacy-ALGZFwR_.js", "./state-legacy-C404ZnU6.js" ], function(_export, _context) {
        "use strict";
        var createElement, createComponent, setProp, createTextNode, insertNode, Block, setGlobalBackground, KeyHandling;
        return {
            setters: [ function(_renderLegacy001Js) {
                createElement = _renderLegacy001Js.a;
                createComponent = _renderLegacy001Js.i;
                setProp = _renderLegacy001Js.m;
                createTextNode = _renderLegacy001Js.s;
                insertNode = _renderLegacy001Js.u;
            }, function(_componentsLegacy00dJs) {
                Block = _componentsLegacy00dJs.n;
            }, function(_stateLegacy00iJs) {
                setGlobalBackground = _stateLegacy00iJs.n;
            } ],
            execute: function execute() {
                _export("default", KeyHandling = function KeyHandling() {
                    setGlobalBackground(858993663);
                    var myBlock;
                    return [ function() {
                        var _el$ = createElement("text");
                        insertNode(_el$, createTextNode("Move the block with the arrow keys, enter to change color, enterHold to reset color. Open inspector to see console log messages. Use M to test release."));
                        setProp(_el$, "x", 400);
                        setProp(_el$, "y", 200);
                        setProp(_el$, "contain", "both");
                        setProp(_el$, "width", 900);
                        return _el$;
                    }(), createComponent(Block, {
                        ref: function ref(r$) {
                            var _ref$ = myBlock;
                            typeof _ref$ === "function" ? _ref$(r$) : myBlock = r$;
                        },
                        autofocus: true,
                        x: 1920 / 2 - 50,
                        y: 1080 / 2 - 50,
                        isBlack: false,
                        color: 303226879,
                        onMenu: function onMenu() {
                            return true;
                        },
                        onMenuRelease: function onMenuRelease() {
                            console.log("menu release");
                            return true;
                        },
                        onUp: function onUp() {
                            return myBlock.y = Math.max(0, myBlock.y - 20);
                        },
                        onDown: function onDown() {
                            console.log("down press");
                            myBlock.y = Math.min(1080, myBlock.y + 20);
                        },
                        onDownRelease: function onDownRelease() {
                            console.log("down release");
                        },
                        onRight: function onRight() {
                            return myBlock.x = Math.min(1920, myBlock.x + 20);
                        },
                        onLeft: function onLeft() {
                            myBlock.x = Math.max(200, myBlock.x - 20);
                            return myBlock.x > 200;
                        },
                        onEnterRelease: function onEnterRelease() {
                            console.log("enter release / up");
                        },
                        onEnterHold: function onEnterHold(e) {
                            console.log("enter hold");
                            myBlock.color = 303226879;
                        },
                        onEnter: function onEnter() {
                            console.log("enter down");
                            myBlock.isBlack = !myBlock.isBlack;
                            if (myBlock.isBlack) myBlock.color = 4294967295; else myBlock.color = 255;
                        }
                    }) ];
                });
            }
        };
    });
})();