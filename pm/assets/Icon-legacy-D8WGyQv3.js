(function() {
    System.register([ "./render-legacy-BcGhlmZk.js", "./mergeProps-legacy-CW0lxKJl.js" ], function(_export, _context) {
        "use strict";
        var renderer, createElement, spread, mergeProps, basePath, icons, sprite;
        function createSpriteMap(src, subTextures) {
            var spriteMapTexture = renderer.createTexture("ImageTexture", {
                src: src
            });
            return subTextures.reduce(function(acc, t) {
                var x = t.x, y = t.y, width = t.width, height = t.height;
                acc[t.name] = renderer.createTexture("SubTexture", {
                    texture: spriteMapTexture,
                    x: x,
                    y: y,
                    w: width,
                    h: height
                });
                return acc;
            }, {});
        }
        function Icon(props) {
            sprite = sprite || createSpriteMap("/solid-demo-app/pm/assets/icons_white.png", icons);
            if (props.name === "perf") return function() {
                var _el$ = createElement("view");
                spread(_el$, mergeProps(props, {
                    src: "".concat(basePath, "assets/perficon.png"),
                    width: 100,
                    y: 25,
                    height: 50
                }), false);
                return _el$;
            }();
            return function() {
                var _el$2 = createElement("view");
                spread(_el$2, mergeProps(props, {
                    get texture() {
                        return sprite[props.name];
                    },
                    get width() {
                        return sprite[props.name].props.w;
                    },
                    get height() {
                        return sprite[props.name].props.h;
                    },
                    get x() {
                        return (100 - (sprite[props.name].props.w || 0)) / 2;
                    },
                    get y() {
                        return (100 - (sprite[props.name].props.h || 0)) / 2;
                    }
                }), false);
                return _el$2;
            }();
        }
        _export("t", Icon);
        return {
            setters: [ function(_renderLegacy001Js) {
                renderer = _renderLegacy001Js.C;
                createElement = _renderLegacy001Js.a;
                spread = _renderLegacy001Js.h;
            }, function(_mergePropsLegacy003Js) {
                mergeProps = _mergePropsLegacy003Js.t;
            } ],
            execute: function execute() {
                basePath = "/solid-demo-app/pm/";
                icons = [ {
                    name: "experiment",
                    width: 81,
                    height: 100,
                    x: 0,
                    y: 0
                }, {
                    name: "trending",
                    width: 99,
                    height: 56,
                    x: 81,
                    y: 0
                }, {
                    name: "tv",
                    width: 100,
                    height: 68,
                    x: 181,
                    y: 0
                }, {
                    name: "movie",
                    width: 94,
                    height: 100,
                    x: 282,
                    y: 0
                } ];
            }
        };
    });
})();