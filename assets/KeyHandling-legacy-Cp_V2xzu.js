System.register([ "./render-legacy-BxvcalZ-.js", "./components-legacy-DCeehsw7.js", "./state-legacy-CZxGbh9b.js" ], function(_export, _context) {
    var createElement, createComponent, setProp, createTextNode, insertNode, Block, setGlobalBackground;
    return {
        setters: [ function(_renderLegacy001Js) {
            createElement = _renderLegacy001Js.a, createComponent = _renderLegacy001Js.i, setProp = _renderLegacy001Js.m, 
            createTextNode = _renderLegacy001Js.s, insertNode = _renderLegacy001Js.u;
        }, function(_componentsLegacy00cJs) {
            Block = _componentsLegacy00cJs.n;
        }, function(_stateLegacy00fJs) {
            setGlobalBackground = _stateLegacy00fJs.n;
        } ],
        execute: function() {
            _export("default", function() {
                var myBlock, _el$;
                return setGlobalBackground(858993663), [ (_el$ = createElement("text"), insertNode(_el$, createTextNode("Move the block with the arrow keys, enter to change color, enterHold to reset color. Open inspector to see console log messages. Use M to test release.")), 
                setProp(_el$, "x", 400), setProp(_el$, "y", 200), setProp(_el$, "contain", "both"), 
                setProp(_el$, "width", 900), _el$), createComponent(Block, {
                    ref: function(r$) {
                        "function" == typeof myBlock ? myBlock(r$) : myBlock = r$;
                    },
                    autofocus: !0,
                    x: 910,
                    y: 490,
                    isBlack: !1,
                    color: 303226879,
                    onMenu: function() {
                        return !0;
                    },
                    onMenuRelease: function() {
                        return console.log("menu release"), !0;
                    },
                    onUp: function() {
                        return myBlock.y = Math.max(0, myBlock.y - 20);
                    },
                    onDown: function() {
                        console.log("down press"), myBlock.y = Math.min(1080, myBlock.y + 20);
                    },
                    onDownRelease: function() {
                        console.log("down release");
                    },
                    onRight: function() {
                        return myBlock.x = Math.min(1920, myBlock.x + 20);
                    },
                    onLeft: function() {
                        return myBlock.x = Math.max(200, myBlock.x - 20), myBlock.x > 200;
                    },
                    onEnterRelease: function() {
                        console.log("enter release / up");
                    },
                    onEnterHold: function(e) {
                        console.log("enter hold"), myBlock.color = 303226879;
                    },
                    onEnter: function() {
                        console.log("enter down"), myBlock.isBlack = !myBlock.isBlack, myBlock.isBlack ? myBlock.color = 4294967295 : myBlock.color = 255;
                    }
                }) ];
            });
        }
    };
});