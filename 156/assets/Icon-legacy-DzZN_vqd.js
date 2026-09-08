System.register([ "./render-legacy-t4wUAioc.js" ], function(_export, _context) {
    var renderer, createElement, mergeProps, spread, basePath, icons, sprite;
    return _export("t", function(props) {
        var src, subTextures, spriteMapTexture, _el$, _el$2;
        return sprite = sprite || (src = "/solid-demo-app/156/assets/icons_white.png", subTextures = icons, 
        spriteMapTexture = renderer.createTexture("ImageTexture", {
            src: src
        }), subTextures.reduce(function(acc, t) {
            var x = t.x, y = t.y, width = t.width, height = t.height;
            return acc[t.name] = renderer.createTexture("SubTexture", {
                texture: spriteMapTexture,
                x: x,
                y: y,
                w: width,
                h: height
            }), acc;
        }, {})), "perf" === props.name ? (_el$ = createElement("view"), spread(_el$, mergeProps(props, {
            src: "".concat(basePath, "assets/perficon.png"),
            width: 100,
            y: 25,
            height: 50
        }), !1), _el$) : (_el$2 = createElement("view"), spread(_el$2, mergeProps(props, {
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
        }), !1), _el$2);
    }), {
        setters: [ function(_renderLegacy002Js) {
            renderer = _renderLegacy002Js.S, createElement = _renderLegacy002Js.a, mergeProps = _renderLegacy002Js.f, 
            spread = _renderLegacy002Js.g;
        } ],
        execute: function() {
            basePath = "/solid-demo-app/156/", icons = [ {
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