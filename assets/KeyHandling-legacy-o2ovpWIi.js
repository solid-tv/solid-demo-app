(function() {
    System.register([ "./index-legacy-DHXrKcy_.js" ], function(exports, module) {
        "use strict";
        var setGlobalBackground, createComponent, createElement, insertNode, createTextNode, setProp, Block;
        return {
            setters: [ function(module) {
                setGlobalBackground = module.s;
                createComponent = module.l;
                createElement = module.c;
                insertNode = module.n;
                createTextNode = module.p;
                setProp = module.a;
                Block = module.V;
            } ],
            execute: function execute() {
                var KeyHandling = exports("default", function() {
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
                            if (myBlock.isBlack) {
                                myBlock.color = 4294967295;
                            } else {
                                myBlock.color = 255;
                            }
                        }
                    }) ];
                });
            }
        };
    });
})();
//# sourceMappingURL=KeyHandling-legacy-o2ovpWIi.js.map
