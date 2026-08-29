import { a as createElement, h as spread, x as renderer } from "./render-DmwYINn_.js";

import { t as mergeProps } from "./mergeProps-Dy9Iph4p.js";

function createSpriteMap(src, subTextures) {
    const spriteMapTexture = renderer.createTexture("ImageTexture", {
        src: src
    });
    return subTextures.reduce((acc, t) => {
        const {x: x, y: y, width: width, height: height} = t;
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

var basePath = "/";

var icons = [ {
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

var sprite;

function Icon(props) {
    sprite = sprite || createSpriteMap("/assets/icons_white.png", icons);
    if (props.name === "perf") return (() => {
        var _el$ = createElement("view");
        spread(_el$, mergeProps(props, {
            src: `${basePath}assets/perficon.png`,
            width: 100,
            y: 25,
            height: 50
        }), false);
        return _el$;
    })();
    return (() => {
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
    })();
}

export { Icon as t };
//# sourceMappingURL=Icon-D7dsygZ7.js.map