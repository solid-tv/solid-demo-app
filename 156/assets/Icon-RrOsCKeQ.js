import { S as renderer, a as createElement, f as mergeProps, g as spread } from "./render-UQXSDH2t.js";

var sprite, icons = [ {
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

function Icon(props) {
    return sprite = sprite || function(src, subTextures) {
        const spriteMapTexture = renderer.createTexture("ImageTexture", {
            src: src
        });
        return subTextures.reduce((acc, t) => {
            const {x: x, y: y, width: width, height: height} = t;
            return acc[t.name] = renderer.createTexture("SubTexture", {
                texture: spriteMapTexture,
                x: x,
                y: y,
                w: width,
                h: height
            }), acc;
        }, {});
    }("/solid-demo-app/156/assets/icons_white.png", icons), "perf" === props.name ? (_el$ = createElement("view"), 
    spread(_el$, mergeProps(props, {
        src: "/solid-demo-app/156/assets/perficon.png",
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
    var _el$, _el$2;
}

export { Icon as t };