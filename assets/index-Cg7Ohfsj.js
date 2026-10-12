const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Player-Cttarhke.js","assets/render-Bm5g6Vdv.js","assets/utils-DlGEpEul.js","assets/state-DpQ3zHvn.js","assets/Benchmark-DgdldDm6.js","assets/Lazy-DiJF_a_d.js","assets/mergeProps-DRAFtsxc.js","assets/chainFunctions-Cek9h7cs.js","assets/Column-BzhyMffl.js","assets/Row-2YtwAlDe.js","assets/FPSCounter-CqvxWVWA.js","assets/ContentBlock-B4wa4p6B.js","assets/theme-CB9u0IsU.js","assets/createFocusStack-BtU4F474.js","assets/components-DiBOplyK.js","assets/styles-xHyKpT0b.js","assets/dist-DZQucsn9.js","assets/Grid-BmWwMg6f.js","assets/Loops-DsNUtHuG.js","assets/Infinite-DUil_J5I.js","assets/TMDBGrid-DK0cbdy1.js","assets/Portal-gcq7YLsy.js","assets/Matrix-CCHZ79nR.js","assets/Text-ClkT3hcb.js","assets/TextPoster-O2FF8_hg.js","assets/Create-BFO95OUZ.js","assets/Viewport-ybAE0axc.js","assets/Positioning-C7qVGxyM.js","assets/Layout-kx6s2OZu.js","assets/FocusBasics-DfF7WkZe.js","assets/KeyHandling-C4mxuCgl.js","assets/Transitions-BYSC88Pz.js","assets/Components-oiHpbc2R.js","assets/FocusHandling-BZmFemLc.js","assets/Gradients-BJJb2uKw.js","assets/Flex-DRhE-kZl.js","assets/FlexGrow-B3HAAloB.js","assets/FlexMenu-CXAg0lPd.js","assets/FlexSize-C9s7C120.js","assets/FlexColumnSize-n6EMlPGz.js","assets/FlexColumn-mhkxeVJE.js","assets/ButtonsMaterial-BWBX3Psr.js","assets/SuperFlex-D-ny6tML.js","assets/Entity-BuC6qbIj.js","assets/People-CvJOJdHK.js","assets/api-D9y58osB.js","assets/Firebolt-C0OAJFve.js","assets/Login-BGg2AuvJ.js","assets/Virtual-fJWk4jp_.js","assets/Tags-G1N8sbbh.js","assets/ImagePerformance-CFcGjr1s.js","assets/imagePerf-DMbpad40.js","assets/LargeImagePerformance-Ccl24zdi.js","assets/MixedImagePerformance-CSBtNll9.js","assets/TextureCompressionPerformance-DTYybrpe.js","assets/ComplexFlex-lMmObegQ.js","assets/ComplexFlexCaps-OCGWLFFD.js","assets/RendererVersions-Di_y0BEf.js","assets/TextCentering-CZfmHUIy.js","assets/CountdownTimer-BTai5LrR.js","assets/CustomButtons-BlXY2o6w.js","assets/FlexJustifyWidth-nKMUjeqm.js","assets/Nested-CiCDSnEc.js","assets/KeepAlive-94V0ABdx.js","assets/suspense-C1qkPy1U.js"])))=>i.map(i=>d[i]);
import 'data:text/javascript,"assets/index-Cg7Ohfsj.js";if(!import.meta.resolve)throw Error("import.meta.resolve not supported")';

export function __vite_legacy_guard() {
    import.meta.url, import("_").catch(() => 1), async function*() {}().next();
}

import { $ as onMount, B as createContext, C as isElementNode, D as Config, G as createRoot, H as createMemo, I as batch, J as getListener, L as children, N as Show, O as activeElement, Q as onCleanup, R as createComponent$1, S as hasFocus, T as isFunction, U as createRenderEffect, V as createEffect, W as createResource, X as mergeProps, Y as getOwner, Z as on, _ as ElementNode, a as createElement, at as useContext, b as loadFonts, c as effect, d as memo, dt as PRECISION, et as resetErrorBoundaries, f as rootNode, ft as defaultVertex, g as use, gt as rgbaRow, h as spread, ht as rampScale, i as createComponent, it as untrack, l as insert, m as setProp, mt as paramsGlsl, nt as sharedConfig, o as createRenderer, pt as edgeWidthDefine, q as createSignal, rt as startTransition, s as createTextNode, tt as runWithOwner, u as insertNode, ut as assertTruthy, v as focusPath, x as renderer, y as useFocusManager, z as createComputed } from "./render-Bm5g6Vdv.js";

import { n as combineStyles, t as clamp } from "./utils-DlGEpEul.js";

import { t as mergeProps$1 } from "./mergeProps-DRAFtsxc.js";

import { t as voidFn } from "./web-BxFxPOyO.js";

import { n as LazyRow, t as LazyColumn } from "./Lazy-DiJF_a_d.js";

import { a as withScrolling, d as navigableForwardFocus, f as navigableHandleNavigation, n as chainRefs, t as chainFunctions } from "./chainFunctions-Cek9h7cs.js";

import { t as Column } from "./Column-BzhyMffl.js";

import { r as setupFPS, t as FPSCounter } from "./FPSCounter-CqvxWVWA.js";

import { t as ContentBlock } from "./ContentBlock-B4wa4p6B.js";

import { n as useFocusStack, t as FocusStackProvider } from "./createFocusStack-BtU4F474.js";

import { a as Hero, d as TitleRow, l as Thumbnail, p as List, t as AssetPanel } from "./components-DiBOplyK.js";

import { t as theme_default } from "./theme-CB9u0IsU.js";

import { r as styles_default } from "./styles-xHyKpT0b.js";

import { n as setGlobalBackground, t as globalBackground } from "./state-DpQ3zHvn.js";

import { t as debounce$1 } from "./dist-DZQucsn9.js";

import { n as getImageUrl, t as api_default } from "./api-D9y58osB.js";

!function() {
    const relList = document.createElement("link").relList;
    if (!(relList && relList.supports && relList.supports("modulepreload"))) {
        for (const link of document.querySelectorAll('link[rel="modulepreload"]')) processPreload(link);
        new MutationObserver(mutations => {
            for (const mutation of mutations) if ("childList" === mutation.type) for (const node of mutation.addedNodes) "LINK" === node.tagName && "modulepreload" === node.rel && processPreload(node);
        }).observe(document, {
            childList: !0,
            subtree: !0
        });
    }
    function processPreload(link) {
        if (link.ep) return;
        link.ep = !0;
        const fetchOpts = function(link) {
            const fetchOpts = {};
            return link.integrity && (fetchOpts.integrity = link.integrity), link.referrerPolicy && (fetchOpts.referrerPolicy = link.referrerPolicy), 
            "use-credentials" === link.crossOrigin ? fetchOpts.credentials = "include" : "anonymous" === link.crossOrigin ? fetchOpts.credentials = "omit" : fetchOpts.credentials = "same-origin", 
            fetchOpts;
        }(link);
        fetch(link.href, fetchOpts);
    }
}();

var toVec4 = value => {
    if (!1 === Array.isArray(value)) {
        return [ value, value, value, value ];
    }
    const a = value;
    if (4 === a.length) return [ a[0], a[1], a[2], a[3] ];
    if (3 === a.length) return [ a[0], a[1], a[2], a[0] ];
    if (2 === a.length) return [ a[0], a[1], a[0], a[1] ];
    const first = a[0], v = void 0 === first ? 0 : first;
    return [ v, v, v, v ];
};

function factorRadius(radius, w, h) {
    const factor = Math.min(Math.min(Math.min(w / Math.max(w, radius[0] + radius[1]), w / Math.max(w, radius[2] + radius[3])), Math.min(h / Math.max(h, radius[0] + radius[3]), h / Math.max(h, radius[1] + radius[2]))), 1);
    return [ radius[0] * factor, radius[1] * factor, radius[2] * factor, radius[3] * factor ];
}

var adjustWidth = w => w - 1 + Math.min(Math.max(w, -1), 1);

var currentSeries, growWithAa = (grow, edgeWidth) => grow > 0 ? grow + edgeWidth : 0, vec4Prop = def => ({
    default: def,
    resolve: value => void 0 !== value ? toVec4(value) : def.slice()
}), elementOf = (prop, i) => ({
    default: 0,
    set(value, props) {
        props[prop][i] = value;
    },
    get: props => props[prop][i]
}), alignProp = {
    default: 1,
    resolve: value => !1 === isNaN(value) ? value : "inside" === value ? 0 : "center" === value ? .5 : 1
}, radiusProps = () => ({
    radius: vec4Prop([ 0, 0, 0, 0 ]),
    "top-left": elementOf("radius", 0),
    "top-right": elementOf("radius", 1),
    "bottom-right": elementOf("radius", 2),
    "bottom-left": elementOf("radius", 3)
}), borderProps = pf => ({
    [pf + "w"]: vec4Prop([ 0, 0, 0, 0 ]),
    [pf + "color"]: 4294967295,
    [pf + "align"]: alignProp,
    [pf + "gap"]: 0,
    [pf + "top"]: elementOf(pf + "w", 0),
    [pf + "right"]: elementOf(pf + "w", 1),
    [pf + "bottom"]: elementOf(pf + "w", 2),
    [pf + "left"]: elementOf(pf + "w", 3)
}), shadowProps = pf => ({
    [pf + "color"]: 255,
    [pf + "projection"]: vec4Prop([ 0, 0, 5, 5 ]),
    [pf + "x"]: elementOf(pf + "projection", 0),
    [pf + "y"]: elementOf(pf + "projection", 1),
    [pf + "blur"]: elementOf(pf + "projection", 2),
    [pf + "spread"]: elementOf(pf + "projection", 3)
}), vec4Row = (u, i, v) => {
    u.row(i, v[0], v[1], v[2], v[3]);
}, flag = (name, bit) => `#define ${name} ${0 === bit ? 0 : 1}\n`, boxType = (flags, extra, rows, props, pack) => {
    const grows = !!(1 & flags), vertex = (grows => {
        return "attribute vec2 a_position;attribute vec2 a_textureCoords;attribute vec4 a_color;attribute vec2 a_nodeCoords;\n" + (!0 === grows ? "uniform vec4 u_nodeTransform;uniform vec4 u_uvRect;\n" : "") + "varying vec4 v_color;varying vec2 v_textureCoords;varying vec2 v_boxUv;\n#if HAS_SHADOW&&SHADOW_MODEL==0\nvarying vec2 v_shadowBox;\n#endif\nvoid main(){\n" + (!0 === grows ? `vec2 screenSpace=vec2(2.0/RESOLUTION.x,-2.0/RESOLUTION.y);vec2 edge=clamp(a_nodeCoords*2.0-vec2(1.0),-1.0,1.0);vec2 edgeOffset=edge*mix((${grow = "U_GROW"}).zw,(${grow}).xy,step(edge,vec2(0.0)));gl_Position=pxToClip(a_position+u_nodeTransform.xy*edgeOffset.x+u_nodeTransform.zw*edgeOffset.y);v_boxUv=(a_nodeCoords-0.5)*(${size = "U_NODE.xy*2.0"})+screenSpace+edgeOffset;v_textureCoords=a_textureCoords+(screenSpace+edgeOffset)/(${size})*(u_uvRect.zw-u_uvRect.xy);\n` : "v_textureCoords=a_textureCoords;v_boxUv=(a_nodeCoords*2.0-1.0)*U_NODE.xy;gl_Position=pxToClip(a_position);\n") + "v_color=a_color;\n#if HAS_SHADOW&&SHADOW_MODEL==0\nv_shadowBox=v_boxUv-U_SHADOW.xy;\n#endif\n}";
        var grow, size;
    })(grows), fragment = (grows => "uniform sampler2D u_texture;\n" + (!0 === grows ? "uniform float u_alpha;\n#define ALPHA u_alpha\n" : "") + "varying vec4 v_color;varying vec2 v_textureCoords;varying vec2 v_boxUv;\n#if HAS_SHADOW&&SHADOW_MODEL==0\nvarying vec2 v_shadowBox;\n#endif\n#if HAS_RADIUS\nfloat quadRadius(vec2 p,vec4 r){vec2 s=step(vec2(0.0),p);return mix(mix(r.x,r.y,s.x),mix(r.w,r.z,s.x),s.y);}\nfloat box(vec2 p,vec2 s,vec4 r){float rad=quadRadius(p,r);vec2 q=abs(p)-s+rad;return (min(max(q.x,q.y),0.0)+length(max(q,0.0)))-rad;}\n#define BOX(p,s,r) box(p,s,r)\n#define SHADOW_RADIUS vec4\n#else\nfloat box(vec2 p,vec2 s){vec2 q=abs(p)-s;return min(max(q.x,q.y),0.0)+length(max(q,0.0));}\n#define BOX(p,s,r) box(p,s)\n#define SHADOW_RADIUS float\n#endif\n#if HAS_SHADOW\nfloat shadowBox(vec2 p,vec2 s,SHADOW_RADIUS r){\n#if HAS_RADIUS\nfloat rad=quadRadius(p,r);\n#else\nfloat rad=r;\n#endif\nvec2 q=abs(p)-s+rad;float dist=min(max(q.x,q.y),0.0)+length(max(q,0.0))-rad;float t=clamp(dist*U_SHADOW_RAMP.x+U_SHADOW_RAMP.y,0.0,1.0);return 1.0-t*t*(3.0-2.0*t);}\n#define BASE shadow\n#else\n#define BASE vec4(0.0)\n#endif\nvoid main(){vec4 color=texture2D(u_texture,v_textureCoords)*v_color;\n#if HAS_SHADOW\nvec4 shadow=vec4(0.0);if(U_SHADOW_COLOR.a>=0.0001){shadow=U_SHADOW_COLOR*ALPHA*shadowBox(SHADOW_P,SHADOW_S,SHADOW_R);}\n#endif\n#if HAS_BORDER\nif(U_NODE.z<0.5){float nodeAlpha=clamp(0.5-BOX(v_boxUv,U_NODE.xy,U_RADIUS)*INV_EDGE_WIDTH,0.0,1.0);\n#if HAS_SHADOW\ngl_FragColor=mix(shadow,color,nodeAlpha);\n#else\ngl_FragColor=color*nodeAlpha;\n#endif\nreturn;}\nfloat outerDist=BOX(v_boxUv+U_OUTER_BOX.xy,U_OUTER_BOX.zw,U_OUTER_RADIUS);float innerDist=BOX(v_boxUv+U_INNER_BOX.xy,U_INNER_BOX.zw,U_INNER_RADIUS);float innerAlpha=clamp(0.5-innerDist*INV_EDGE_WIDTH,0.0,1.0);vec4 border=U_BORDER_COLOR*ALPHA;\nif(U_NODE.w<0.5){float outerAlpha=clamp(0.5-outerDist*INV_EDGE_WIDTH,0.0,1.0);gl_FragColor=mix(mix(BASE,border,outerAlpha*U_BORDER_COLOR.a),color,innerAlpha);return;}\nfloat nodeAlpha=clamp(0.5-BOX(v_boxUv,U_NODE.xy,U_RADIUS)*INV_EDGE_WIDTH,0.0,1.0);float borderAlpha=clamp(0.5-max(-innerDist,outerDist)*INV_EDGE_WIDTH,0.0,1.0);\n#if HAS_FILL\nvec4 fill=color*nodeAlpha+U_FILL_COLOR*ALPHA*max(0.0,innerAlpha-nodeAlpha);\n#else\nvec4 fill=mix(BASE,color,nodeAlpha);\n#endif\ngl_FragColor=mix(fill,border,borderAlpha*U_BORDER_COLOR.a);\n#else\nfloat nodeAlpha=clamp(0.5-BOX(v_boxUv,U_NODE.xy,U_RADIUS)*INV_EDGE_WIDTH,0.0,1.0);\n#if HAS_SHADOW\ngl_FragColor=mix(shadow,color,nodeAlpha)+shadow*(nodeAlpha*(1.0-color.a));\n#else\ngl_FragColor=color*nodeAlpha;\n#endif\n#endif\n}")(grows), defines = flag("HAS_RADIUS", 2 & flags) + flag("HAS_BORDER", 4 & flags) + flag("HAS_FILL", 8 & flags) + flag("HAS_SHADOW", 16 & flags) + flag("SHADOW_MODEL", 32 & flags), head = ctx => PRECISION + defines + extra + ctx.viewport + paramsGlsl(rows);
    return {
        props: props,
        vertex: ctx => head(ctx) + vertex,
        fragment: ctx => head(ctx) + edgeWidthDefine(ctx.pixelRatio) + fragment,
        pack: pack
    };
}, Rounded = boxType(2, "", [ "U_RADIUS", "U_NODE" ], radiusProps(), (props, w, h, u) => {
    vec4Row(u, 0, factorRadius(props.radius, w, h)), u.row(1, .5 * w, .5 * h, 0, 0);
}), packBorder = (u, w, h, radius, props, pf) => {
    const g = function(w, h, radius, borderW, align, gap) {
        const halfW = .5 * w, halfH = .5 * h, hasBorder = Math.abs(borderW[0]) + Math.abs(borderW[1]) + Math.abs(borderW[2]) + Math.abs(borderW[3]) >= .001;
        if (!1 === hasBorder) return {
            hasBorder: hasBorder,
            hasGap: Math.abs(gap) >= 1e-4,
            shadowOnOuter: !1,
            outerUvX: 0,
            outerUvY: 0,
            outerHalfW: halfW,
            outerHalfH: halfH,
            innerUvX: 0,
            innerUvY: 0,
            innerHalfW: halfW,
            innerHalfH: halfH,
            outerRadius: [ radius[0], radius[1], radius[2], radius[3] ],
            innerRadius: [ radius[0], radius[1], radius[2], radius[3] ],
            growL: 0,
            growT: 0,
            growR: 0,
            growB: 0
        };
        const t = adjustWidth(borderW[0]), r = adjustWidth(borderW[1]), b = adjustWidth(borderW[2]), l = adjustWidth(borderW[3]), sizeX = r + l, sizeY = t + b, gapT = t >= .001 ? gap : 0, gapR = r >= .001 ? gap : 0, gapB = b >= .001 ? gap : 0, gapL = l >= .001 ? gap : 0, outerHalfW = .5 * (w + gapL + gapR + sizeX * align), outerHalfH = .5 * (h + gapT + gapB + sizeY * align), diffX = r - l, diffY = b - t, outerUvX = -diffX * align * .5 - .5 * (gapR - gapL), outerUvY = -diffY * align * .5 - .5 * (gapB - gapT), alignT = t * align, alignR = r * align, alignB = b * align, alignL = l * align, oTl = Math.max(0, radius[0] + Math.max(alignT, alignL) + gap), oTr = Math.max(0, radius[1] + Math.max(alignT, alignR) + gap), oBr = Math.max(0, radius[2] + Math.max(alignB, alignR) + gap), oBl = Math.max(0, radius[3] + Math.max(alignB, alignL) + gap);
        return {
            hasBorder: hasBorder,
            hasGap: Math.abs(gap) >= 1e-4,
            shadowOnOuter: outerHalfW >= halfW || outerHalfH >= halfH,
            outerUvX: outerUvX,
            outerUvY: outerUvY,
            outerHalfW: outerHalfW,
            outerHalfH: outerHalfH,
            innerUvX: outerUvX + .5 * diffX,
            innerUvY: outerUvY + .5 * diffY,
            innerHalfW: outerHalfW - .5 * sizeX,
            innerHalfH: outerHalfH - .5 * sizeY,
            outerRadius: [ oTl, oTr, oBr, oBl ],
            innerRadius: [ Math.max(0, oTl - Math.max(t, l)), Math.max(0, oTr - Math.max(t, r)), Math.max(0, oBr - Math.max(b, r)), Math.max(0, oBl - Math.max(b, l)) ],
            growL: Math.max(0, outerHalfW + outerUvX - halfW),
            growT: Math.max(0, outerHalfH + outerUvY - halfH),
            growR: Math.max(0, outerHalfW - outerUvX - halfW),
            growB: Math.max(0, outerHalfH - outerUvY - halfH)
        };
    }(w, h, radius, props[pf + "w"], props[pf + "align"], props[pf + "gap"]);
    return rgbaRow(u, 0, props[pf + "color"]), u.row(1, .5 * w, .5 * h, !0 === g.hasBorder ? 1 : 0, !0 === g.hasGap ? 1 : 0), 
    u.row(2, g.outerUvX, g.outerUvY, g.outerHalfW, g.outerHalfH), u.row(3, g.innerUvX, g.innerUvY, g.innerHalfW, g.innerHalfH), 
    g;
}, growRow = (u, g) => {
    const ew = 1 / u.pixelRatio;
    u.row(4, growWithAa(g.growL, ew), growWithAa(g.growT, ew), growWithAa(g.growR, ew), growWithAa(g.growB, ew));
}, NO_RADIUS = [ 0, 0, 0, 0 ], RoundedWithBorder = (boxType(5, "", [ "U_BORDER_COLOR", "U_NODE", "U_OUTER_BOX", "U_INNER_BOX", "U_GROW" ], borderProps(""), (props, w, h, u) => {
    const g = packBorder(u, w, h, NO_RADIUS, props, "");
    growRow(u, g), !1 === g.hasBorder && u.alphaUnused();
}), boxType(15, "", [ "U_BORDER_COLOR", "U_NODE", "U_OUTER_BOX", "U_INNER_BOX", "U_GROW", "U_FILL_COLOR", "U_RADIUS", "U_OUTER_RADIUS", "U_INNER_RADIUS" ], {
    ...radiusProps(),
    ...borderProps("border-"),
    "border-fill": {
        default: 0,
        color: !0
    }
}, (props, w, h, u) => {
    const values = props, radius = factorRadius(values.radius, w, h), g = packBorder(u, w, h, radius, values, "border-");
    growRow(u, g), !1 === g.hasBorder && u.alphaUnused(), rgbaRow(u, 5, values["border-fill"]), 
    vec4Row(u, 6, radius), vec4Row(u, 7, g.outerRadius), vec4Row(u, 8, g.innerRadius);
})), packShadow = (u, w, h, shadow, color) => {
    const blur = shadow[2], spread = shadow[3], halfW = .5 * w, halfH = .5 * h;
    rgbaRow(u, 0, color), vec4Row(u, 1, shadow), u.row(2, halfW, halfH, halfW + spread, halfH + spread);
    const fade = rampScale(-blur, blur + .001);
    u.row(3, fade, blur * fade, 0, 0);
    const reach = spread + blur, sx = shadow[0], sy = shadow[1];
    255 & color ? u.row(4, Math.max(0, reach - sx), Math.max(0, reach - sy), Math.max(0, reach + sx), Math.max(0, reach + sy)) : (u.row(4, 0, 0, 0, 0), 
    u.alphaUnused());
}, SHADOW_A_ROWS = [ "U_SHADOW_COLOR", "U_SHADOW", "U_NODE", "U_SHADOW_RAMP", "U_GROW" ], RoundedWithShadow = boxType(19, "#define SHADOW_P v_shadowBox\n#define SHADOW_S U_NODE.zw\n#define SHADOW_R U_SHADOW_RADIUS\n", SHADOW_A_ROWS.concat([ "U_RADIUS", "U_SHADOW_RADIUS" ]), {
    ...radiusProps(),
    ...shadowProps("shadow-")
}, (props, w, h, u) => {
    const values = props, shadow = values["shadow-projection"], radius = factorRadius(values.radius, w, h);
    packShadow(u, w, h, shadow, values["shadow-color"]), vec4Row(u, 5, radius);
    const spread = shadow[3];
    u.row(6, Math.max(0, radius[0] + spread), Math.max(0, radius[1] + spread), Math.max(0, radius[2] + spread), Math.max(0, radius[3] + spread));
}), RoundedWithBorderAndShadow = (boxType(17, "#define SHADOW_P v_shadowBox\n#define SHADOW_S U_NODE.zw\n#define SHADOW_R max(0.0,U_SHADOW.w)\n", SHADOW_A_ROWS, shadowProps(""), (props, w, h, u) => {
    const values = props;
    packShadow(u, w, h, values.projection, values.color);
}), boxType(55, "#define SHADOW_P v_boxUv+U_SHADOW_BOX.xy\n#define SHADOW_S U_SHADOW_BOX.zw\n#define SHADOW_R U_SHADOW_RADIUS\n", [ "U_BORDER_COLOR", "U_NODE", "U_OUTER_BOX", "U_INNER_BOX", "U_GROW", "U_SHADOW_COLOR", "U_SHADOW_RAMP", "U_RADIUS", "U_OUTER_RADIUS", "U_INNER_RADIUS", "U_SHADOW_BOX", "U_SHADOW_RADIUS" ], {
    ...radiusProps(),
    ...borderProps("border-"),
    ...shadowProps("shadow-")
}, (props, w, h, u) => {
    const values = props, ew = 1 / u.pixelRatio, radius = factorRadius(values.radius, w, h), g = packBorder(u, w, h, radius, values, "border-"), shadow = values["shadow-projection"], color = values["shadow-color"];
    rgbaRow(u, 5, color), vec4Row(u, 7, radius), vec4Row(u, 8, g.outerRadius), vec4Row(u, 9, g.innerRadius);
    const outer = g.shadowOnOuter, blur = shadow[2], spread = shadow[3], shadowRadius = !0 === outer ? g.outerRadius : radius;
    u.row(10, (!0 === outer ? g.outerUvX : 0) - shadow[0], (!0 === outer ? g.outerUvY : 0) - shadow[1], (!0 === outer ? g.outerHalfW : .5 * w) + spread, (!0 === outer ? g.outerHalfH : .5 * h) + spread), 
    u.row(11, shadowRadius[0] + blur, shadowRadius[1] + blur, shadowRadius[2] + blur, shadowRadius[3] + blur);
    const fade = rampScale(-spread, spread + blur);
    u.row(6, fade, spread * fade, 0, 0);
    const borderL = growWithAa(g.growL, ew), borderT = growWithAa(g.growT, ew), borderR = growWithAa(g.growR, ew), borderB = growWithAa(g.growB, ew);
    if (!(255 & color)) return u.row(4, borderL, borderT, borderR, borderB), void (!1 === g.hasBorder && u.alphaUnused());
    const halfW = .5 * w, halfH = .5 * h, reach = 2 * spread + blur, sx = shadow[0], sy = shadow[1], baseL = !0 === outer ? g.outerHalfW + g.outerUvX - halfW : 0, baseT = !0 === outer ? g.outerHalfH + g.outerUvY - halfH : 0, baseR = !0 === outer ? g.outerHalfW - g.outerUvX - halfW : 0, baseB = !0 === outer ? g.outerHalfH - g.outerUvY - halfH : 0;
    u.row(4, Math.max(0, borderL, baseL + reach - sx), Math.max(0, borderT, baseT + reach - sy), Math.max(0, borderR, baseR + reach + sx), Math.max(0, borderB, baseB + reach + sy));
})), gradientRows = n => n + (n >> 1), paramsUniform = rows => `uniform vec4 u_params[${rows}];`, gradientGlsl = (n, first, x) => {
    let glsl = `vec4 colorOut=u_params[${first}];`;
    for (let i = 1; i < n; i++) {
        const ramp = `u_params[${first + n + (i - 1 >> 1)}]`;
        glsl += `float t${i}=clamp((${x}-${ramp}.${1 & ~i ? "z" : "x"})*${ramp}.${1 & ~i ? "w" : "y"},0.0,1.0);colorOut=mix(colorOut,${`u_params[${first + i}]`},t${i}*t${i}*(3.0-2.0*t${i}));`;
    }
    return glsl;
}, stopAt = (stops, n, i) => stops.length === n ? stops[i] : i * (1 / (n - 1)), packGradient = (u, first, colors, stops) => {
    const n = colors.length;
    for (let i = 0; i < n; i++) rgbaRow(u, first + i, colors[i]);
    for (let i = 1; i < n; i += 2) {
        const e0 = stopAt(stops, n, i - 1), s0 = rampScale(e0, stopAt(stops, n, i));
        let e1 = 0, s1 = 0;
        i + 1 < n && (e1 = stopAt(stops, n, i), s1 = rampScale(e1, stopAt(stops, n, i + 1))), 
        u.row(first + n + (i - 1 >> 1), e0, s0, e1, s1);
    }
}, colorsProp = def => ({
    default: def,
    resolve: value => void 0 !== value && value.length > 0 ? value.slice() : def.slice()
}), stopsProp = def => ({
    default: def,
    resolve(value, props) {
        const len = props.colors.length;
        if (void 0 !== value && value.length === len) return value.slice();
        const stops = [];
        if (1 === len) return stops.push(0), stops;
        for (let i = 0; i < len; i++) stops.push(i * (1 / (len - 1)));
        return stops;
    }
}), LinearGradient = {
    props: {
        colors: colorsProp([ 255, 4294967295 ]),
        stops: stopsProp([ 0, 1 ]),
        angle: 0
    },
    variant: props => String(props.colors.length),
    variantProps: [ "colors" ],
    vertex: (ctx, props) => defaultVertex(ctx.viewport, paramsUniform(1 + gradientRows(props.colors.length)) + "varying float v_dist;", "v_dist=dot(a_textureCoords,u_params[0].xy)+u_params[0].z;"),
    fragment: (_ctx, props) => {
        const n = props.colors.length;
        return PRECISION + "uniform float u_alpha;uniform sampler2D u_texture;" + paramsUniform(1 + gradientRows(n)) + "varying vec4 v_color;varying vec2 v_textureCoords;varying float v_dist;\nvoid main(){vec4 color=texture2D(u_texture,v_textureCoords)*v_color;float dist=clamp(v_dist,0.0,1.0);" + gradientGlsl(n, 1, "dist") + "gl_FragColor=mix(color,colorOut*u_alpha,clamp(colorOut.a,0.0,1.0));}";
    },
    pack(props, w, h, u) {
        const angle = props.angle - Math.PI / 180 * 90, c = Math.cos(angle), s = Math.sin(angle), lineDist = Math.abs(w * c) + Math.abs(h * s), gx = -lineDist * c, gy = -lineDist * s, gg = gx * gx + gy * gy, invGG = gg > 0 ? 1 / gg : 0, fx = .5 * lineDist * c + .5 * w, fy = .5 * lineDist * s + .5 * h;
        u.row(0, w * gx * invGG, h * gy * invGG, -(fx * gx + fy * gy) * invGG, 0), packGradient(u, 1, props.colors, props.stops);
    }
}, RadialGradient = {
    props: {
        colors: colorsProp([ 255, 4294967295 ]),
        stops: stopsProp([ 0, 1 ]),
        w: 50,
        h: 50,
        pivot: {
            default: [ .5, .5 ],
            resolve: value => void 0 === value ? [ .5, .5 ] : [ value[0], value[1] ]
        }
    },
    variant: props => String(props.colors.length),
    variantProps: [ "colors" ],
    vertex: (ctx, props) => defaultVertex(ctx.viewport, paramsUniform(2 + gradientRows(props.colors.length)) + "varying vec2 v_gradient;", "v_gradient=(a_nodeCoords*u_params[0].xy-u_params[0].zw)/u_params[1].xy;"),
    fragment: (_ctx, props) => {
        const n = props.colors.length;
        return PRECISION + "uniform float u_alpha;uniform sampler2D u_texture;" + paramsUniform(2 + gradientRows(n)) + "varying vec4 v_color;varying vec2 v_textureCoords;varying vec2 v_gradient;\nvoid main(){vec4 color=texture2D(u_texture,v_textureCoords)*v_color;float dist=clamp(length(v_gradient),0.0,1.0);" + gradientGlsl(n, 2, "dist") + "gl_FragColor=mix(color,colorOut*u_alpha,clamp(colorOut.a,0.0,1.0));}";
    },
    pack(props, w, h, u) {
        u.row(0, w, h, props.pivot[0] * w, props.pivot[1] * h), u.row(1, props.w, props.h, 0, 0), 
        packGradient(u, 2, props.colors, props.stops);
    }
}, HolePunch = {
    props: {
        x: 0,
        y: 0,
        w: 50,
        h: 50,
        radius: {
            default: [ 0, 0, 0, 0 ],
            resolve: value => void 0 !== value ? toVec4(value) : [ 0, 0, 0, 0 ]
        }
    },
    vertex: ctx => defaultVertex(ctx.viewport, "uniform vec4 u_params[3];varying vec2 v_hole;", "v_hole=(a_textureCoords*u_params[0].xy-u_params[0].zw)-u_params[1].xy;"),
    fragment: ctx => PRECISION + edgeWidthDefine(ctx.pixelRatio) + "uniform sampler2D u_texture;uniform vec4 u_params[3];varying vec4 v_color;varying vec2 v_textureCoords;varying vec2 v_hole;\nvoid main(){vec4 color=texture2D(u_texture,v_textureCoords)*v_color;vec2 p=v_hole;vec2 stepVal=step(vec2(0.0),p);vec4 r4=u_params[2];float r=mix(mix(r4.x,r4.y,stepVal.x),mix(r4.w,r4.z,stepVal.x),stepVal.y);p=abs(p)-u_params[1].xy+r;float dist=min(max(p.x,p.y),0.0)+length(max(p,0.0))-r+2.0;float roundedAlpha=clamp(1.0-dist*INV_EDGE_WIDTH,0.0,1.0);gl_FragColor=mix(color,vec4(0.0),roundedAlpha);}",
    pack(props, w, h, u) {
        u.row(0, w, h, props.x, props.y), u.row(1, .5 * props.w, .5 * props.h, 0, 0);
        const r = factorRadius(props.radius, props.w, props.h);
        u.row(2, r[0], r[1], r[2], r[3]);
    }
}, clampedProp = (def, max) => ({
    default: def,
    resolve(value) {
        if (void 0 === value) return def;
        return value < 0 ? 0 : value > max ? max : value;
    }
}), timed = props => props.duration >= 1e-4, RadialProgress = {
    props: {
        width: 8,
        radius: 0,
        progress: clampedProp(1, 1),
        startAngle: -Math.PI / 2,
        direction: 1,
        colors: colorsProp([ 4294967295 ]),
        stops: stopsProp([ 0 ]),
        trackColor: {
            default: 0,
            color: !0
        },
        cap: 1,
        duration: clampedProp(0, 1 / 0),
        countdown: 1
    },
    variant: props => `${props.colors.length}|${props.cap}|${0 !== props.trackColor ? 1 : 0}|${!0 === timed(props) ? 1 : 0}`,
    variantProps: [ "colors", "cap", "trackColor", "duration" ],
    time(renderer, props) {
        const duration = props.duration;
        if (duration < 1e-4) return null;
        const position = renderer.elapsedTime % duration / duration;
        return props.countdown >= .5 ? 1 - position : position;
    },
    vertex: (ctx, props) => defaultVertex(ctx.viewport, paramsUniform(5 + gradientRows(props.colors.length)) + "\n#define U_CENTRE u_params[0]\n#define U_ARC u_params[1]\n#define U_EDGES u_params[2]\n#define U_ANIM u_params[3]\n#define U_TRACK u_params[4]\nvarying vec2 v_p;", "v_p=(a_nodeCoords*2.0-1.0)*U_CENTRE.xy;"),
    fragment: (ctx, props) => {
        const n = props.colors.length, animated = timed(props);
        return PRECISION + `#define CAP_ROUND ${props.cap}\n#define HAS_TRACK ${0 !== props.trackColor ? 1 : 0}\n#define TWO_PI 6.28318530717958647692\n` + edgeWidthDefine(ctx.pixelRatio) + (!0 === animated ? "uniform float u_alpha;uniform float u_time;uniform sampler2D u_texture;" : "uniform float u_alpha;uniform sampler2D u_texture;") + paramsUniform(5 + gradientRows(n)) + "\n#define U_CENTRE u_params[0]\n#define U_ARC u_params[1]\n#define U_EDGES u_params[2]\n#define U_ANIM u_params[3]\n#define U_TRACK u_params[4]\nvarying vec4 v_color;varying vec2 v_textureCoords;varying vec2 v_p;\nfloat discCoverage(vec2 p,vec2 c){return clamp((U_ARC.y-length(p-c))*INV_EDGE_WIDTH+0.5,0.0,1.0);}\nvoid main(){vec4 base=texture2D(u_texture,v_textureCoords)*v_color;" + (!0 === animated ? "float progress=u_time;float capGate=step(0.0001,progress)*step(0.0001,1.0-progress);float hasProgress=step(0.0001,progress);float gradScale=hasProgress/mix(1.0,progress,hasProgress);" : "float progress=U_ANIM.x;float capGate=U_ANIM.y;float gradScale=U_ANIM.z;") + "vec2 p=v_p;float dist=length(p);vec2 ring=clamp(vec2(dist-U_EDGES.x,U_EDGES.y-dist)*INV_EDGE_WIDTH+0.5,0.0,1.0);float ringCoverage=ring.x*ring.y;float ang=atan(p.y,p.x);float t=mod((ang-U_ARC.z)*U_ARC.w,TWO_PI)/TWO_PI;float arcCoverage=max(step(1.0,progress),step(t,progress));float fillCoverage=ringCoverage*arcCoverage;\n#if CAP_ROUND\n" + (!0 === animated ? "float a1=U_ARC.z+U_ARC.w*progress*TWO_PI;vec2 cap1=vec2(cos(a1),sin(a1))*U_ARC.x;" : "vec2 cap1=U_EDGES.zw;") + "float capMask=max(discCoverage(p,U_CENTRE.zw),discCoverage(p,cap1));fillCoverage=max(fillCoverage,capMask*capGate);\n#endif\nfloat gradT=clamp(t*gradScale,0.0,1.0);" + gradientGlsl(n, 5, "gradT") + "vec4 fillPM=vec4(colorOut.rgb*colorOut.a,colorOut.a);vec4 layer=vec4(0.0);\n#if HAS_TRACK\nvec4 trackPM=vec4(U_TRACK.rgb*U_TRACK.a,U_TRACK.a);float trackCoverage=ringCoverage*(1.0-fillCoverage);layer=trackPM*trackCoverage+fillPM*fillCoverage;\n#else\nlayer=fillPM*fillCoverage;\n#endif\nlayer*=u_alpha;float la=clamp(layer.a,0.0,1.0);vec3 blended=base.rgb*(1.0-la)+layer.rgb;float outA=base.a+la*(1.0-base.a);gl_FragColor=vec4(blended,outA);}";
    },
    pack(props, w, h, u) {
        const autoRadius = .5 * Math.min(w, h) - .5 * props.width, radius = props.radius > 0 ? props.radius : autoRadius, halfW = .5 * props.width, startAngle = props.startAngle, progress = props.progress, end = startAngle + props.direction * progress * Math.PI * 2, hasProgress = progress >= 1e-4 ? 1 : 0, capGate = 1 === hasProgress && 1 - progress >= 1e-4 ? 1 : 0;
        u.row(0, .5 * w, .5 * h, Math.cos(startAngle) * radius, Math.sin(startAngle) * radius), 
        u.row(1, radius, halfW, startAngle, props.direction), u.row(2, radius - halfW, radius + halfW, Math.cos(end) * radius, Math.sin(end) * radius), 
        u.row(3, progress, capGate, 1 === hasProgress ? 1 / progress : 0, 0), rgbaRow(u, 4, props.trackColor), 
        packGradient(u, 5, props.colors, props.stops);
    }
}, ariaLabelPhrases = [];

function isSpeechSynthesisUtterance(phrase) {
    return "undefined" != typeof SpeechSynthesisUtterance && phrase instanceof SpeechSynthesisUtterance;
}

function delay(pause) {
    return new Promise(resolve => {
        setTimeout(resolve, pause);
    });
}

function addChildrenToAriaDiv(phrase) {
    var _phrase$text;
    0 !== (null == phrase || null == (_phrase$text = phrase.text) ? void 0 : _phrase$text.trim().length) && ariaLabelPhrases.push(phrase);
}

function focusElementForAria() {
    if (0 === ariaLabelPhrases.length) return;
    const element = function() {
        const aria_container = document.getElementById("aria-parent");
        if (!aria_container) {
            const element = document.createElement("div");
            return element.setAttribute("id", "aria-parent"), element.setAttribute("aria-live", "assertive"), 
            element.setAttribute("tabindex", "0"), document.body.appendChild(element), element;
        }
        return aria_container;
    }();
    if (element) {
        !function() {
            const parentTag = document.getElementById("aria-parent");
            if (parentTag) for (;parentTag.firstChild; ) parentTag.removeChild(parentTag.firstChild);
        }();
        for (const object of ariaLabelPhrases) {
            const span = document.createElement("span");
            span.setAttribute("lang", object.lang), span.setAttribute("aria-label", object.text), 
            element.appendChild(span);
        }
        ariaLabelPhrases = [];
    } else console.error("ARIA div not found: aria-parent");
}

function speak(phrase, utterances, lang = "en-US", voiceName) {
    const synth = window.speechSynthesis;
    return new Promise((resolve, reject) => {
        if (!synth || "undefined" == typeof SpeechSynthesisUtterance) return void resolve();
        let selectedVoice;
        if (voiceName) {
            const availableVoices = synth.getVoices();
            selectedVoice = availableVoices.find(v => v.name === voiceName) || availableVoices[0];
        }
        const utterance = new SpeechSynthesisUtterance(phrase);
        utterance.lang = lang, selectedVoice && (utterance.voice = selectedVoice), utterance.onend = () => {
            resolve();
        }, utterance.onerror = e => {
            const error = new Error(`Speech synthesis error: ${e.error}`);
            error.error = e.error, reject(error);
        }, utterances.push(utterance), synth.speak(utterance);
    });
}

async function handleSpeechError(e, retriesLeft, totalRetries) {
    const code = null == e ? void 0 : e.error;
    return "network" === code ? (retriesLeft--, console.warn(`Speech synthesis network error. Retries left: ${retriesLeft}`), 
    await delay(500 * (totalRetries - retriesLeft)), retriesLeft) : ("canceled" === code || "interrupted" === code || console.warn(`Speech synthesis failed: ${code || "no error code"}`), 
    0);
}

function speakSeries(series, aria, lang, voice, root = !0) {
    const synth = window.speechSynthesis, remainingPhrases = function(series = []) {
        const flattenedSeries = [];
        let i;
        for (i = 0; i < series.length; i++) {
            const s = series[i];
            if ("string" != typeof s || s.includes("PAUSE-")) break;
            flattenedSeries.push(series[i]);
        }
        return [ flattenedSeries.join(",\b ") ].concat(series.slice(i));
    }(Array.isArray(series) ? series : [ series ]), nestedSeriesResults = [], utterances = [];
    let active = !0;
    return {
        series: (async () => {
            try {
                for (;active && remainingPhrases.length; ) {
                    const phrase = await Promise.resolve(remainingPhrases.shift());
                    if (!active) break;
                    if ("string" == typeof phrase && phrase.includes("PAUSE-")) {
                        const pause = 1e3 * Number(phrase.split("PAUSE-")[1]);
                        isNaN(pause) || await delay(pause);
                    } else if ("string" == typeof phrase) {
                        if (!phrase) continue;
                        const totalRetries = 3;
                        let retriesLeft = totalRetries;
                        for (;active && retriesLeft > 0; ) try {
                            aria ? addChildrenToAriaDiv({
                                text: phrase,
                                lang: lang
                            }) : await speak(phrase, utterances, lang, voice), retriesLeft = 0;
                        } catch (e) {
                            retriesLeft = await handleSpeechError(e, retriesLeft, totalRetries);
                        }
                    } else if (isSpeechSynthesisUtterance(phrase)) {
                        const totalRetries = 3;
                        let retriesLeft = totalRetries;
                        const text = phrase.text, objectLang = null == phrase ? void 0 : phrase.lang, objectVoice = null == phrase ? void 0 : phrase.voice;
                        for (;active && retriesLeft > 0; ) try {
                            text && (aria ? addChildrenToAriaDiv({
                                text: text,
                                lang: objectLang
                            }) : await speak(text, utterances, objectLang, null == objectVoice ? void 0 : objectVoice.name), 
                            retriesLeft = 0);
                        } catch (e) {
                            retriesLeft = await handleSpeechError(e, retriesLeft, totalRetries);
                        }
                    } else if ("function" == typeof phrase) {
                        const seriesResult = speakSeries(phrase(), aria, lang, voice, !1);
                        nestedSeriesResults.push(seriesResult), await seriesResult.series;
                    } else if (Array.isArray(phrase)) {
                        const seriesResult = speakSeries(phrase, aria, lang, voice, !1);
                        nestedSeriesResults.push(seriesResult), await seriesResult.series;
                    }
                }
            } finally {
                active = !1, root && aria && focusElementForAria();
            }
        })().catch(e => {
            console.warn("Speech series failed:", e);
        }),
        get active() {
            return active;
        },
        append: toSpeak => {
            remainingPhrases.push(toSpeak);
        },
        cancel: () => {
            active && (root && (aria ? ariaLabelPhrases = [] : synth && synth.cancel()), nestedSeriesResults.forEach(nestedSeriesResult => {
                nestedSeriesResult.cancel();
            }), active = !1);
        }
    };
}

function speech_default(toSpeak, aria, lang = "en-US", voice) {
    return null == currentSeries || currentSeries.cancel(), currentSeries = speakSeries(toSpeak, aria, lang, voice);
}

var resetFocusPathTimer, throttle = (callback, wait) => {
    let timeoutId, lastArgs, isThrottled = !1;
    const clear = () => {
        clearTimeout(timeoutId), isThrottled = !1;
    };
    return getOwner() && onCleanup(clear), Object.assign((...args) => {
        lastArgs = args, isThrottled || (isThrottled = !0, timeoutId = setTimeout(() => {
            callback(...lastArgs), isThrottled = !1;
        }, wait));
    }, {
        clear: clear
    });
};

var currentlySpeaking, prevFocusPath = [], voiceOutDisabled = !1;

function debounceWithFlush(callback, time) {
    const trigger = ((callback, wait) => {
        let timeoutId;
        const clear = () => clearTimeout(timeoutId);
        return getOwner() && onCleanup(clear), Object.assign((...args) => {
            void 0 !== timeoutId && clear(), timeoutId = setTimeout(() => callback(...args), wait);
        }, {
            clear: clear
        });
    })(callback, time);
    let scopedValue;
    const debounced = newValue => {
        scopedValue = newValue, trigger(newValue);
    };
    return debounced.flush = () => {
        trigger.clear(), callback(scopedValue);
    }, debounced.clear = trigger.clear, debounced;
}

function getElmName(elm) {
    return elm.id || elm.name;
}

function onFocusChangeCore(focusPath = []) {
    if (!Announcer.onFocusChange || !Announcer.enabled) return;
    const loaded = focusPath.every(elm => !elm.loading), focusDiff = focusPath.filter(elm => !prevFocusPath.includes(elm));
    if (resetFocusPathTimer(), !loaded && Announcer.onFocusChange) return void Announcer.onFocusChange([]);
    prevFocusPath = focusPath.slice(0);
    const toAnnounceText = [], toAnnounce = focusDiff.reverse().reduce((acc, elm) => (elm.announce ? (acc.push([ getElmName(elm), "Announce", elm.announce ]), 
    toAnnounceText.push(elm.announce)) : elm.title ? (acc.push([ getElmName(elm), "Title", elm.title ]), 
    toAnnounceText.push(elm.title)) : acc.push([ getElmName(elm), "No Announce", "" ]), 
    acc), []);
    return focusDiff.reverse().reduce((acc, elm) => (elm.announceContext ? (acc.push([ getElmName(elm), "Context", elm.announceContext ]), 
    toAnnounceText.push(elm.announceContext)) : acc.push([ getElmName(elm), "No Context", "" ]), 
    acc), toAnnounce), Announcer.debug && console.table(toAnnounce), toAnnounceText.length ? Announcer.speak(toAnnounceText.reduce((acc, val) => acc.concat(val), [])) : void 0;
}

var Announcer = {
    debug: !1,
    enabled: !0,
    lang: "en-US",
    aria: !1,
    cancel: function() {
        null == currentlySpeaking || currentlySpeaking.cancel();
    },
    clearPrevFocus: function(depth = 0) {
        prevFocusPath = prevFocusPath.slice(0, depth), resetFocusPathTimer();
    },
    speak: function(text, {append: append = !1, notification: notification = !1} = {}) {
        return Announcer.onFocusChange && Announcer.enabled && (append && currentlySpeaking && currentlySpeaking.active ? currentlySpeaking.append(text) : (Announcer.cancel(), 
        function(toSpeak, aria, lang, voice) {
            if (!voiceOutDisabled) currentlySpeaking = speech_default(toSpeak, aria, lang, voice);
        }(text, Announcer.aria, Announcer.lang, Announcer.voice)), notification && (voiceOutDisabled = !0, 
        null == currentlySpeaking || currentlySpeaking.series.finally(() => {
            voiceOutDisabled = !1, Announcer.refresh();
        }).catch(console.error))), currentlySpeaking;
    },
    refresh: function(depth = 0) {
        Announcer.clearPrevFocus(depth), Announcer.onFocusChange && Announcer.onFocusChange(untrack(() => focusPath()));
    },
    setupTimers: function({focusDebounce: focusDebounce = 400, focusChangeTimeout: focusChangeTimeout = 3e5} = {}) {
        Announcer.onFocusChange = debounceWithFlush(onFocusChangeCore, focusDebounce), resetFocusPathTimer = debounceWithFlush(() => {
            prevFocusPath = [];
        }, focusChangeTimeout);
    }
}, doOnce = !1;

function accessWith(valueOrFn, ...args) {
    return "function" == typeof valueOrFn ? valueOrFn(...args) : valueOrFn;
}

var tryOnCleanup = onCleanup;

function makeEventListener(target, type, handler, options) {
    return target.addEventListener(type, handler, options), tryOnCleanup(target.removeEventListener.bind(target, type, handler, options));
}

function makeEventListenerStack(target, options) {
    const {push: push, execute: execute} = (() => {
        let stack = [];
        const clear = () => stack = [];
        return {
            push: (...callbacks) => stack.push(...callbacks),
            execute(arg0, arg1, arg2, arg3) {
                stack.forEach(cb => cb(arg0, arg1, arg2, arg3)), clear();
            },
            clear: clear
        };
    })();
    return [ (type, handler, overwriteOptions) => {
        const clear = makeEventListener(target, type, handler, null != overwriteOptions ? overwriteOptions : options);
        return push(clear), clear;
    }, onCleanup(execute) ];
}

var PASSIVE = {
    passive: !0
}, DEFAULT_MOUSE_POSITION = {
    x: 0,
    y: 0,
    isInside: !1,
    sourceType: null
};

function createHydratableSingletonRoot(factory) {
    const owner = getOwner(), singleton = function(factory, detachedOwner = getOwner()) {
        let value, disposeRoot, listeners = 0;
        return () => (listeners++, onCleanup(() => {
            listeners--, queueMicrotask(() => {
                !listeners && disposeRoot && (disposeRoot(), disposeRoot = value = void 0);
            });
        }), disposeRoot || createRoot(dispose => value = factory(disposeRoot = dispose), detachedOwner), 
        value);
    }(factory, owner);
    return () => sharedConfig.context ? createRoot(factory, owner) : singleton();
}

var useMousePosition = createHydratableSingletonRoot(function(target, options = {}) {
    const fallback = {
        ...DEFAULT_MOUSE_POSITION,
        ...options.initialValue
    }, [state, setState] = function(init) {
        const copy = {
            ...init
        }, store = {
            ...init
        }, cache = {}, getValue = key => {
            let signal = cache[key];
            if (!signal) {
                if (!getListener()) return copy[key];
                cache[key] = signal = createSignal(copy[key], {
                    internal: !0
                }), delete copy[key];
            }
            return signal[0]();
        };
        for (const key in init) Object.defineProperty(store, key, {
            get: () => getValue(key),
            enumerable: !0
        });
        const setValue = (key, value) => {
            const signal = cache[key];
            if (signal) return signal[1](value);
            key in copy && (copy[key] = accessWith(value, copy[key]));
        };
        return [ store, (a, b) => {
            if (null === (value = a) || "object" != typeof value && "function" != typeof value) setValue(a, b); else {
                const entries = untrack(() => Object.entries(accessWith(a, store)));
                batch(() => {
                    for (const [key, value] of entries) setValue(key, () => value);
                });
            }
            var value;
            return store;
        } ];
    }(fallback), attachListeners = el => {
        !function(target = window, callback, options = {}) {
            const {touch: touch = !0, followTouch: followTouch = !0} = options, [listen, clear] = makeEventListenerStack(target, PASSIVE), handleMouse = e => callback({
                x: e.pageX,
                y: e.pageY,
                sourceType: "mouse"
            });
            if (listen("mousemove", handleMouse), listen("dragover", handleMouse), touch) {
                const handleTouch = e => {
                    e.touches.length && callback({
                        x: e.touches[0].clientX,
                        y: e.touches[0].clientY,
                        sourceType: "touch"
                    });
                };
                listen("touchstart", handleTouch), followTouch && listen("touchmove", handleTouch);
            }
        }(el, setState, options), function(target = window, callback, options = {}) {
            const {touch: touch = !0} = options, [listen, clear] = makeEventListenerStack(target, PASSIVE);
            let mouseIn = !1, touchIn = !touch;
            function handleChange(isInside) {
                "mouse" === this ? mouseIn = isInside : touchIn = isInside, callback(mouseIn || touchIn);
            }
            listen("mouseover", handleChange.bind("mouse", !0)), listen("mouseout", handleChange.bind("mouse", !1)), 
            listen("mousemove", handleChange.bind("mouse", !0), {
                passive: !0,
                once: !0
            }), touch && (listen("touchstart", handleChange.bind("touch", !0)), listen("touchend", handleChange.bind("touch", !1)));
        }(el, setState.bind(void 0, "isInside"), options);
    };
    return "function" != typeof target ? attachListeners(target) : createEffect(() => attachListeners(target())), 
    state;
}.bind(void 0, void 0, void 0));

function addCustomStateToElement(element, state) {
    var _element$states;
    null == (_element$states = element.states) || _element$states.add(state);
}

function removeCustomStateFromElement(element, state) {
    var _element$states2;
    null == element || null == (_element$states2 = element.states) || _element$states2.remove(state);
}

function hasCustomState(element, state) {
    var _element$states3;
    return null == (_element$states3 = element.states) ? void 0 : _element$states3.has(state);
}

function createKeyboardEvent(key, keyCode, eventName = "keydown") {
    const event = new KeyboardEvent(eventName, {
        key: key,
        keyCode: keyCode,
        which: keyCode,
        ctrlKey: !1,
        altKey: !1,
        shiftKey: !1,
        metaKey: !1,
        bubbles: !0
    });
    return event.key === key && event.keyCode === keyCode || (Object.defineProperty(event, "key", {
        get: () => key
    }), Object.defineProperty(event, "keyCode", {
        get: () => keyCode
    }), Object.defineProperty(event, "which", {
        get: () => keyCode
    })), event;
}

var scrollTimeout, [cursorVisible, setCursorVisible] = createSignal(!1), handleScroll = throttle(e => {
    const deltaY = e.deltaY;
    deltaY < 0 ? document.body.dispatchEvent(createKeyboardEvent("ArrowUp", 38)) : deltaY > 0 && document.body.dispatchEvent(createKeyboardEvent("ArrowDown", 40)), 
    clearTimeout(scrollTimeout), scrollTimeout = setTimeout(() => {
        document.body.dispatchEvent(createKeyboardEvent("ArrowUp", 38, "keyup")), document.body.dispatchEvent(createKeyboardEvent("ArrowDown", 40, "keyup"));
    }, 250);
}, 250);

function findElementWithCustomState(myApp, x, y, customState) {
    const path = getChildrenByPosition(myApp, x, y);
    let element;
    for (let i = path.length - 1; i >= 0; i--) if (hasCustomState(path[i], customState)) {
        element = path[i];
        break;
    }
    if (!element) return;
    let p = element.parent;
    for (;(null == p ? void 0 : p.forwardStates) && hasCustomState(p, customState); ) element = p, 
    p = p.parent;
    return element;
}

function createHandleClick(myApp, customStates, pressedElementRef) {
    return e => {
        const clickedElement = customStates ? findElementWithCustomState(myApp, e.clientX, e.clientY, customStates.hoverState) : function(e) {
            var _Config$rendererOptio;
            const active = activeElement(), precision = (null == (_Config$rendererOptio = Config.rendererOptions) ? void 0 : _Config$rendererOptio.deviceLogicalPixelRatio) || 1, px = e.clientX / precision, py = e.clientY / precision;
            if (active instanceof ElementNode && testCollision(px, py, active.lng.absX || 0, active.lng.absY || 0, active.width || 0, active.height || 0)) return active;
            let parent = null == active ? void 0 : active.parent;
            for (;parent; ) {
                if ((isFunction(parent.onMouseClick) || isFunction(parent.onEnter)) && testCollision(px, py, parent.lng.absX || 0, parent.lng.absY || 0, parent.width || 0, parent.height || 0)) return parent;
                parent = parent.parent;
            }
            return null;
        }(e);
        clickedElement && function(clickedElement, e, customStates, pressedElementRef) {
            (null == customStates ? void 0 : customStates.pressedState) && (null == pressedElementRef ? void 0 : pressedElementRef.current) && (removeCustomStateFromElement(pressedElementRef.current, customStates.pressedState), 
            pressedElementRef.current = null), isFunction(clickedElement.onMouseClick) ? clickedElement.onMouseClick(e, clickedElement) : (clickedElement.setFocus(), 
            setTimeout(() => {
                document.dispatchEvent(createKeyboardEvent("Enter", 13)), setTimeout(() => document.body.dispatchEvent(createKeyboardEvent("Enter", 13, "keyup")), 1);
            }, 1));
        }(clickedElement, e, customStates, pressedElementRef);
    };
}

function createHandleMouseDown(myApp, customStates, pressedElementRef) {
    return e => {
        if (!customStates) return;
        const pressedElement = findElementWithCustomState(myApp, e.clientX, e.clientY, customStates.hoverState);
        var element, pressedState;
        pressedElement && (element = pressedElement, pressedState = customStates.pressedState, 
        addCustomStateToElement(element, pressedState), pressedElementRef && (pressedElementRef.current = pressedElement));
    };
}

function testCollision(px, py, cx, cy, cw = 0, ch = 0) {
    return px >= cx && px <= cx + cw && py >= cy && py <= cy + ch;
}

function isNodeAtPosition(node, x, y) {
    return !!isElementNode(node) && (0 !== node.alpha && !node.skipFocus && testCollision(x, y, node.lng.absX || 0, node.lng.absY || 0, node.width || 0, node.height || 0));
}

function getChildrenByPosition(node, x, y) {
    var _Config$rendererOptio2;
    const result = [], precision = (null == (_Config$rendererOptio2 = Config.rendererOptions) ? void 0 : _Config$rendererOptio2.deviceLogicalPixelRatio) || 1, px = x / precision, py = y / precision;
    let current = node;
    for (;current && isNodeAtPosition(current, px, py); ) {
        let best;
        result.push(current);
        let bestZ = -1 / 0;
        for (const child of current.children) {
            var _child$zIndex;
            if (!isNodeAtPosition(child, px, py)) continue;
            const z = null !== (_child$zIndex = child.zIndex) && void 0 !== _child$zIndex ? _child$zIndex : -1;
            z >= bestZ && (bestZ = z, best = child);
        }
        if (!best) break;
        current = best;
    }
    return result;
}

function useMouse(myApp = rootNode, throttleBy = 100, options) {
    const pos = useMousePosition(), scheduled = function(schedule) {
        let listeners = 0, isDirty = !1;
        const [track, dirty] = createSignal(void 0, {
            equals: !1
        }), call = schedule(() => {
            isDirty = !0, dirty();
        });
        return () => (isDirty || (call(), track()), isDirty ? (isDirty = !!listeners, !0) : (getListener() && (listeners++, 
        onCleanup(() => listeners--)), !1));
    }(fn => throttle(fn, throttleBy));
    let previousElement = null;
    const pressedElementRef = {
        current: null
    }, customStates = null == options ? void 0 : options.customStates, hoverState = null == customStates ? void 0 : customStates.hoverState, handleClick = createHandleClick(myApp, customStates, pressedElementRef), handleMouseDown = createHandleMouseDown(myApp, customStates, pressedElementRef), owner = getOwner(), focusKey = Config.focusStateKey;
    makeEventListener(window, "wheel", handleScroll), makeEventListener(window, "click", e => {
        runWithOwner(owner, () => handleClick(e));
    }), makeEventListener(window, "mousedown", e => {
        runWithOwner(owner, () => handleMouseDown(e));
    }), createEffect(() => {
        if (!scheduled()) return;
        const path = getChildrenByPosition(myApp, pos.x, pos.y);
        let activeElm;
        for (let i = path.length - 1; i >= 0; i--) {
            const el = path[i];
            if (el.onEnter || el.onMouseClick || el.onFocus || el[focusKey] || hoverState && el[hoverState]) {
                activeElm = el;
                break;
            }
        }
        if (!activeElm) return void (previousElement && hoverState && (removeCustomStateFromElement(previousElement, hoverState), 
        previousElement = null));
        let p = activeElm.parent;
        for (;null == p ? void 0 : p.forwardStates; ) activeElm = p, p = p.parent;
        const activeElmParent = activeElm.parent;
        void 0 !== (null == activeElmParent ? void 0 : activeElmParent.selected) && (activeElmParent.selected = activeElmParent.children.indexOf(activeElm)), 
        previousElement && previousElement !== activeElm && hoverState && removeCustomStateFromElement(previousElement, hoverState), 
        hoverState ? addCustomStateToElement(activeElm, hoverState) : activeElm.setFocus(), 
        previousElement = activeElm;
    });
}

var nativeImport, NATIVE_ESM_CHUNK = /dynamically imported module:?\s*(https?:\/\/\S+?\.js)/i, RETRY_DELAYS = [ 500, 2e3, 5e3 ];

function lazy(fn) {
    let comp, p;
    const load = () => {
        let url;
        const attemptLoad = attempt => {
            let p;
            try {
                if (0 === attempt) p = fn(); else if (void 0 !== url) {
                    const importer = (() => {
                        if (void 0 === nativeImport) try {
                            nativeImport = new Function("u", "return import(u)");
                        } catch (_unused) {
                            nativeImport = null;
                        }
                        return nativeImport;
                    })();
                    p = null !== importer ? importer(((url, retry = 1) => {
                        const cleanUrl = url.replace(/([?&])chunkRetry=\d+(&|$)/, "$1").replace(/[?&]$/, "");
                        return cleanUrl + (-1 === cleanUrl.indexOf("?") ? "?" : "&") + "chunkRetry=" + retry;
                    })(url, attempt)) : fn();
                } else p = fn();
            } catch (syncError) {
                p = Promise.reject(syncError);
            }
            return p.catch(error => {
                const nextUrl = (error => {
                    const match = NATIVE_ESM_CHUNK.exec(error instanceof Error ? error.message : String(error));
                    return match ? match[1] : void 0;
                })(error);
                if (url = void 0 !== nextUrl ? nextUrl : url, attempt < RETRY_DELAYS.length) {
                    const delay = RETRY_DELAYS[attempt];
                    if (void 0 !== delay) return (ms = delay, new Promise(resolve => setTimeout(resolve, ms))).then(() => attemptLoad(attempt + 1));
                }
                var ms;
                return Promise.reject(error);
            });
        };
        return attemptLoad(0);
    }, wrap = props => {
        const ctx = sharedConfig.context;
        if (ctx) {
            const [s, set] = createSignal();
            sharedConfig.count || (sharedConfig.count = 0), sharedConfig.count++, (p || (p = load())).then(mod => {
                !sharedConfig.done && (sharedConfig.context = ctx), sharedConfig.count--, set(() => mod.default), 
                sharedConfig.context = void 0;
            }).catch(() => {}), comp = s;
        } else if (!comp) {
            const [s] = createResource(() => (p || (p = load())).then(mod => mod.default));
            comp = s;
        }
        let Comp;
        return createMemo(() => (Comp = comp(), Comp ? untrack(() => {
            if (!ctx || sharedConfig.done) return Comp(props);
            const c = sharedConfig.context;
            sharedConfig.context = ctx;
            const r = Comp(props);
            return sharedConfig.context = c, r;
        }) : null));
    };
    return wrap.preload = () => p || ((p = load()).then(mod => comp = () => mod.default).catch(() => {}), 
    p), wrap;
}

var depth, columnScroll = withScrolling(!1), rowStyles = {
    display: "flex",
    flexWrap: "wrap",
    transition: {
        y: !0
    }
};

function VirtualGrid(props) {
    var _props$selected;
    const bufferSize = () => {
        var _props$buffer;
        return null !== (_props$buffer = props.buffer) && void 0 !== _props$buffer ? _props$buffer : 2;
    }, [cursor, setCursor] = createSignal(null !== (_props$selected = props.selected) && void 0 !== _props$selected ? _props$selected : 0), items = createMemo(() => props.each || []), itemCount = () => items().length, itemsPerRow = () => props.columns, totalVisibleItems = () => {
        return itemsPerRow() * (null !== (_props$rows = props.rows) && void 0 !== _props$rows ? _props$rows : 1);
        var _props$rows;
    }, start = createMemo(() => {
        const perRow = itemsPerRow(), rawStart = Math.floor(cursor() / perRow) * perRow - bufferSize() * perRow;
        return Math.max(0, rawStart);
    }), end = createMemo(() => {
        const perRow = itemsPerRow(), rawEnd = (Math.floor(cursor() / perRow) + bufferSize()) * perRow + totalVisibleItems();
        return Math.min(items().length, rawEnd);
    }), [slice, setSlice] = createSignal(items().slice(start(), end()));
    let viewRef;
    function onVerticalNav(dir) {
        return function() {
            const perRow = itemsPerRow(), currentRowIndex = Math.floor(cursor() / perRow), maxRows = Math.floor(items().length / perRow);
            if (0 === currentRowIndex && -1 === dir || currentRowIndex === maxRows && 1 === dir) return;
            const selected = this.selected || 0, newIndex = clamp(selected + dir * perRow, 0, items().length - 1), lastIdx = selected;
            this.selected = newIndex;
            const active = this.children[this.selected];
            return active instanceof ElementNode ? (active.setFocus(), chainedOnSelectedChanged.call(this, this.selected, this, active, lastIdx), 
            !0) : void 0;
        };
    }
    const onUp = onVerticalNav(-1), onDown = onVerticalNav(1), chainedOnSelectedChanged = chainFunctions(props.onSelectedChanged, function(_idx, elm, active, _lastIdx) {
        let idx = _idx, lastIdx = _lastIdx;
        const perRow = itemsPerRow(), newRowIndex = Math.floor(idx / perRow), prevRowIndex = Math.floor((lastIdx || 0) / perRow), prevStart = start();
        if (setCursor(prevStart + idx), newRowIndex === prevRowIndex) return;
        setSlice(items().slice(start(), end()));
        const idxCorrection = prevStart - start();
        var _props$onEndReached;
        (lastIdx && (lastIdx += idxCorrection), idx += idxCorrection, this.selected += idxCorrection, 
        void 0 !== props.onEndReachedThreshold && cursor() >= items().length - props.onEndReachedThreshold) && (null == (_props$onEndReached = props.onEndReached) || _props$onEndReached.call(props));
        queueMicrotask(() => {
            const prevRowY = this.y + active.y;
            this.updateLayout(), this.lng.y = prevRowY - active.y, columnScroll(idx, elm, active, lastIdx);
        });
    });
    let cachedSelected;
    const updateSelected = ([selected, _items]) => {
        if (!viewRef || null == selected) return;
        var _props$onEndReached2;
        if (void 0 !== cachedSelected && (selected = cachedSelected, cachedSelected = void 0), 
        selected >= items().length && props.onEndReached) return null == (_props$onEndReached2 = props.onEndReached) || _props$onEndReached2.call(props), 
        void (cachedSelected = selected);
        const item = items()[selected];
        let active = viewRef.children.find(x => x.item === item);
        const lastSelected = viewRef.selected;
        active instanceof ElementNode ? (viewRef.selected = viewRef.children.indexOf(active), 
        hasFocus(viewRef) && active.setFocus(), chainedOnSelectedChanged.call(viewRef, viewRef.selected, viewRef, active, lastSelected)) : (setCursor(selected), 
        setSlice(items().slice(start(), end())), queueMicrotask(() => {
            viewRef.updateLayout(), active = viewRef.children.find(x => x.item === item), active instanceof ElementNode && (viewRef.selected = viewRef.children.indexOf(active), 
            hasFocus(viewRef) && active.setFocus(), chainedOnSelectedChanged.call(viewRef, viewRef.selected, viewRef, active, lastSelected));
        }));
    }, scrollToIndex = index => {
        untrack(() => updateSelected([ index ]));
    };
    return createEffect(on([ () => props.selected, items ], updateSelected)), createEffect(on(items, (gridItems, _prevGridItems, prevSize) => {
        if (viewRef) return void 0 !== cachedSelected ? (updateSelected([ cachedSelected ]), 
        gridItems.length) : (0 === gridItems.length ? (setCursor(0), cachedSelected = void 0, 
        setSlice([])) : cursor() >= itemCount() ? updateSelected([ Math.max(0, itemCount() - 1) ]) : 0 === prevSize ? updateSelected([ 0 ]) : setSlice(items().slice(start(), end())), 
        gridItems.length);
    }, {
        defer: !0
    })), _el$ = createElement("view"), "function" == typeof (_ref$ = chainRefs(el => {
        viewRef = el;
    }, props.ref)) && use(_ref$, _el$), spread(_el$, mergeProps$1(props, {
        get scroll() {
            return props.scroll || "always";
        },
        get selected() {
            return props.selected || 0;
        },
        get cursor() {
            return cursor();
        },
        onLeft: chainFunctions(props.onLeft, navigableHandleNavigation),
        onRight: chainFunctions(props.onRight, navigableHandleNavigation),
        onUp: chainFunctions(props.onUp, onUp),
        onDown: chainFunctions(props.onDown, onDown),
        forwardFocus: navigableForwardFocus,
        onCreate: props.selected ? chainFunctions(props.onCreate, columnScroll) : props.onCreate,
        scrollToIndex: scrollToIndex,
        onSelectedChanged: chainedOnSelectedChanged,
        style: combineStyles(props.style, rowStyles)
    }), !0), insert(_el$, createComponent(List, {
        get each() {
            return slice();
        },
        get children() {
            return props.children;
        }
    })), _el$;
    var _el$, _ref$;
}

function createBeforeLeave() {
    let listeners = new Set;
    let ignore = !1;
    return {
        subscribe: function(listener) {
            return listeners.add(listener), () => listeners.delete(listener);
        },
        confirm: function(to, options) {
            if (ignore) return !(ignore = !1);
            const e = {
                to: to,
                options: options,
                defaultPrevented: !1,
                preventDefault: () => e.defaultPrevented = !0
            };
            for (const l of listeners) l.listener({
                ...e,
                from: l.location,
                retry: force => {
                    force && (ignore = !0), l.navigate(to, {
                        ...options,
                        resolve: !1
                    });
                }
            });
            return !e.defaultPrevented;
        }
    };
}

function saveCurrentDepth() {
    window.history.state && null != window.history.state._depth || window.history.replaceState({
        ...window.history.state,
        _depth: window.history.length - 1
    }, ""), depth = window.history.state._depth;
}

saveCurrentDepth();

var hasSchemeRegex = /^(?:[a-z0-9]+:)?\/\//i, trimPathRegex = /^\/+|(\/)\/+$/g;

function normalizePath(path, omitSlash = !1) {
    const s = path.replace(trimPathRegex, "$1");
    return s ? omitSlash || /^[?#]/.test(s) ? s : "/" + s : "";
}

function resolvePath(base, path, from) {
    if (hasSchemeRegex.test(path)) return;
    const basePath = normalizePath(base), fromPath = from && normalizePath(from);
    let result = "";
    return result = !fromPath || path.startsWith("/") ? basePath : 0 !== fromPath.toLowerCase().indexOf(basePath.toLowerCase()) ? basePath + fromPath : fromPath, 
    (result || "/") + normalizePath(path, !result);
}

function joinPaths(from, to) {
    return normalizePath(from).replace(/\/*(\*.*)?$/g, "") + normalizePath(to);
}

function extractSearchParams(url) {
    const params = {};
    return url.searchParams.forEach((value, key) => {
        key in params ? Array.isArray(params[key]) ? params[key].push(value) : params[key] = [ params[key], value ] : params[key] = value;
    }), params;
}

function createMatcher(path, partial, matchFilters) {
    const [pattern, splat] = path.split("/*", 2), segments = pattern.split("/").filter(Boolean), len = segments.length;
    return location => {
        const locSegments = location.split("/").filter(Boolean), lenDiff = locSegments.length - len;
        if (lenDiff < 0 || lenDiff > 0 && void 0 === splat && !partial) return null;
        const match = {
            path: len ? "" : "/",
            params: {}
        }, matchFilter = s => void 0 === matchFilters ? void 0 : matchFilters[s];
        for (let i = 0; i < len; i++) {
            const segment = segments[i], dynamic = ":" === segment[0], locSegment = dynamic ? locSegments[i] : locSegments[i].toLowerCase(), key = dynamic ? segment.slice(1) : segment.toLowerCase();
            if (dynamic && matchSegment(locSegment, matchFilter(key))) match.params[key] = locSegment; else if (dynamic || !matchSegment(locSegment, key)) return null;
            match.path += `/${locSegment}`;
        }
        if (splat) {
            const remainder = lenDiff ? locSegments.slice(-lenDiff).join("/") : "";
            if (!matchSegment(remainder, matchFilter(splat))) return null;
            match.params[splat] = remainder;
        }
        return match;
    };
}

function matchSegment(input, filter) {
    const isEqual = s => s === input;
    return void 0 === filter || ("string" == typeof filter ? isEqual(filter) : "function" == typeof filter ? filter(input) : Array.isArray(filter) ? filter.some(isEqual) : filter instanceof RegExp && filter.test(input));
}

function scoreRoute(route) {
    const [pattern, splat] = route.pattern.split("/*", 2), segments = pattern.split("/").filter(Boolean);
    return segments.reduce((score, segment) => score + (segment.startsWith(":") ? 2 : 3), segments.length - (void 0 === splat ? 0 : 1));
}

function createMemoObject(fn) {
    const map = new Map, owner = getOwner();
    return new Proxy({}, {
        get: (_, property) => (map.has(property) || runWithOwner(owner, () => map.set(property, createMemo(() => fn()[property]))), 
        map.get(property)()),
        getOwnPropertyDescriptor: () => ({
            enumerable: !0,
            configurable: !0
        }),
        ownKeys: () => Reflect.ownKeys(fn()),
        has: (_, property) => property in fn()
    });
}

function expandOptionals(pattern) {
    let match = /(\/?\:[^\/]+)\?/.exec(pattern);
    if (!match) return [ pattern ];
    let prefix = pattern.slice(0, match.index), suffix = pattern.slice(match.index + match[0].length);
    const prefixes = [ prefix, prefix += match[1] ];
    for (;match = /^(\/\:[^\/]+)\?/.exec(suffix); ) prefixes.push(prefix += match[1]), 
    suffix = suffix.slice(match[0].length);
    return expandOptionals(suffix).reduce((results, expansion) => [ ...results, ...prefixes.map(p => p + expansion) ], []);
}

var intent, RouterContextObj = createContext(), RouteContextObj = createContext(), useRouter = () => function(value, message) {
    if (null == value) throw new Error(message);
    return value;
}(useContext(RouterContextObj), "<A> and 'use' router primitives can be only used inside a Route."), useNavigate = () => useRouter().navigatorFactory(), useLocation = () => useRouter().location, useMatch = (path, matchFilters) => {
    const location = useLocation(), matchers = createMemo(() => expandOptionals(path()).map(path => createMatcher(path, void 0, matchFilters)));
    return createMemo(() => {
        for (const matcher of matchers()) {
            const match = matcher(location.pathname);
            if (match) return match;
        }
    });
}, useParams = () => useRouter().params;

function createRoutes(routeDef, base = "") {
    const {component: component, preload: preload, load: load, children: children, info: info} = routeDef, isLeaf = !children || Array.isArray(children) && !children.length, shared = {
        key: routeDef,
        component: component,
        preload: preload || load,
        info: info
    };
    return asArray(routeDef.path).reduce((acc, originalPath) => {
        for (const expandedPath of expandOptionals(originalPath)) {
            const path = joinPaths(base, expandedPath);
            let pattern = isLeaf ? path : path.split("/*", 1)[0];
            pattern = pattern.split("/").map(s => s.startsWith(":") || s.startsWith("*") ? s : encodeURIComponent(s)).join("/"), 
            acc.push({
                ...shared,
                originalPath: originalPath,
                pattern: pattern,
                matcher: createMatcher(pattern, !isLeaf, routeDef.matchFilters)
            });
        }
        return acc;
    }, []);
}

function createBranch(routes, index = 0) {
    return {
        routes: routes,
        score: 1e4 * scoreRoute(routes[routes.length - 1]) - index,
        matcher(location) {
            const matches = [];
            for (let i = routes.length - 1; i >= 0; i--) {
                const route = routes[i], match = route.matcher(location);
                if (!match) return null;
                matches.unshift({
                    ...match,
                    route: route
                });
            }
            return matches;
        }
    };
}

function asArray(value) {
    return Array.isArray(value) ? value : [ value ];
}

function createBranches(routeDef, base = "", stack = [], branches = []) {
    const routeDefs = asArray(routeDef);
    for (let i = 0, len = routeDefs.length; i < len; i++) {
        const def = routeDefs[i];
        if (def && "object" == typeof def) {
            def.hasOwnProperty("path") || (def.path = "");
            const routes = createRoutes(def, base);
            for (const route of routes) {
                stack.push(route);
                const isEmptyArray = Array.isArray(def.children) && 0 === def.children.length;
                if (def.children && !isEmptyArray) createBranches(def.children, route.pattern, stack, branches); else {
                    const branch = createBranch([ ...stack ], branches.length);
                    branches.push(branch);
                }
                stack.pop();
            }
        }
    }
    return stack.length ? branches : branches.sort((a, b) => b.score - a.score);
}

function getRouteMatches(branches, location) {
    for (let i = 0, len = branches.length; i < len; i++) {
        const match = branches[i].matcher(location);
        if (match) return match;
    }
    return [];
}

function setInPreloadFn(value) {
    0;
}

function createRouterContext(integration, branches, getContext, options = {}) {
    const {signal: [source, setSource], utils: utils = {}} = integration, parsePath = utils.parsePath || (p => p), renderPath = utils.renderPath || (p => p), beforeLeave = utils.beforeLeave || createBeforeLeave(), basePath = resolvePath("", options.base || "");
    if (void 0 === basePath) throw new Error(`${basePath} is not a valid base path`);
    basePath && !source().value && setSource({
        value: basePath,
        replace: !0,
        scroll: !1
    });
    const [isRouting, setIsRouting] = createSignal(!1);
    let lastTransitionTarget;
    const transition = (newIntent, newTarget) => {
        newTarget.value === reference() && newTarget.state === state() || (void 0 === lastTransitionTarget && setIsRouting(!0), 
        intent = newIntent, lastTransitionTarget = newTarget, startTransition(() => {
            lastTransitionTarget === newTarget && (setReference(lastTransitionTarget.value), 
            setState(lastTransitionTarget.state), resetErrorBoundaries(), submissions[1](subs => subs.filter(s => s.pending)));
        }).finally(() => {
            lastTransitionTarget === newTarget && batch(() => {
                intent = void 0, "navigate" === newIntent && function(next) {
                    const first = referrers[0];
                    first && (setSource({
                        ...next,
                        replace: first.replace,
                        scroll: first.scroll
                    }), referrers.length = 0);
                }(lastTransitionTarget), setIsRouting(!1), lastTransitionTarget = void 0;
            });
        }));
    }, [reference, setReference] = createSignal(source().value), [state, setState] = createSignal(source().state), location = function(path, state, queryWrapper) {
        const origin = new URL("http://sr"), url = createMemo(prev => {
            const path_ = path();
            try {
                return new URL(path_, origin);
            } catch (err) {
                return console.error(`Invalid path ${path_}`), prev;
            }
        }, origin, {
            equals: (a, b) => a.href === b.href
        }), pathname = createMemo(() => url().pathname), search = createMemo(() => url().search, !0), hash = createMemo(() => url().hash), queryFn = on(search, () => extractSearchParams(url()));
        return {
            get pathname() {
                return pathname();
            },
            get search() {
                return search();
            },
            get hash() {
                return hash();
            },
            get state() {
                return state();
            },
            get key() {
                return "";
            },
            query: queryWrapper ? queryWrapper(queryFn) : createMemoObject(queryFn)
        };
    }(reference, state, utils.queryWrapper), referrers = [], submissions = createSignal([]), matches = createMemo(() => "function" == typeof options.transformUrl ? getRouteMatches(branches(), options.transformUrl(location.pathname)) : getRouteMatches(branches(), location.pathname)), buildParams = () => {
        const m = matches(), params = {};
        for (let i = 0; i < m.length; i++) Object.assign(params, m[i].params);
        return params;
    }, params = utils.paramsWrapper ? utils.paramsWrapper(buildParams, branches) : createMemoObject(buildParams), baseRoute = {
        pattern: basePath,
        path: () => basePath,
        outlet: () => null,
        resolvePath: to => resolvePath(basePath, to)
    };
    return createRenderEffect(on(source, source => transition("native", source), {
        defer: !0
    })), {
        base: baseRoute,
        location: location,
        params: params,
        isRouting: isRouting,
        renderPath: renderPath,
        parsePath: parsePath,
        navigatorFactory: function(route) {
            return route = route || useContext(RouteContextObj) || baseRoute, (to, options) => function(route, to, options) {
                untrack(() => {
                    if ("number" == typeof to) return void (to && (utils.go ? utils.go(to) : console.warn("Router integration does not support relative routing")));
                    const queryOnly = !to || "?" === to[0], {replace: replace, resolve: resolve, scroll: scroll, state: nextState} = {
                        replace: !1,
                        resolve: !queryOnly,
                        scroll: !0,
                        ...options
                    }, resolvedTo = resolve ? route.resolvePath(to) : resolvePath(queryOnly && location.pathname || "", to);
                    if (void 0 === resolvedTo) throw new Error(`Path '${to}' is not a routable path`);
                    if (referrers.length >= 100) throw new Error("Too many redirects");
                    const current = reference();
                    resolvedTo === current && nextState === state() || beforeLeave.confirm(resolvedTo, options) && (referrers.push({
                        value: current,
                        replace: replace,
                        scroll: scroll,
                        state: state()
                    }), transition("navigate", {
                        value: resolvedTo,
                        state: nextState
                    }));
                });
            }(route, to, options);
        },
        matches: matches,
        beforeLeave: beforeLeave,
        preloadRoute: function(url, preloadData) {
            const matches = getRouteMatches(branches(), url.pathname), prevIntent = intent;
            intent = "preload";
            for (let match in matches) {
                const {route: route, params: params} = matches[match];
                route.component && route.component.preload && route.component.preload();
                const {preload: preload} = route;
                preloadData && preload && runWithOwner(getContext(), () => preload({
                    params: params,
                    location: {
                        pathname: url.pathname,
                        search: url.search,
                        hash: url.hash,
                        query: extractSearchParams(url),
                        state: null,
                        key: ""
                    },
                    intent: "preload"
                }));
            }
            intent = prevIntent;
        },
        singleFlight: void 0 === options.singleFlight || options.singleFlight,
        submissions: submissions
    };
}

function createRouteContext(router, parent, outlet, match) {
    const {base: base, location: location, params: params} = router, {pattern: pattern, component: component, preload: preload} = match().route, path = createMemo(() => match().path);
    component && component.preload && component.preload();
    const data = preload ? preload({
        params: params,
        location: location,
        intent: intent || "initial"
    }) : void 0;
    return {
        parent: parent,
        pattern: pattern,
        path: path,
        outlet: () => component ? createComponent$1(component, {
            params: params,
            location: location,
            data: data,
            get children() {
                return outlet();
            }
        }) : outlet(),
        resolvePath: to => resolvePath(base.path(), to, path())
    };
}

var createRouterComponent = router => props => {
    const {base: base} = props, routeDefs = children(() => props.children), branches = createMemo(() => createBranches(routeDefs(), props.base || ""));
    let context;
    const routerState = createRouterContext(router, branches, () => context, {
        base: base,
        singleFlight: props.singleFlight,
        transformUrl: props.transformUrl
    });
    return router.create && router.create(routerState), createComponent(RouterContextObj.Provider, {
        value: routerState,
        get children() {
            return createComponent(Root, {
                routerState: routerState,
                get root() {
                    return props.root;
                },
                get preload() {
                    return props.rootPreload || props.rootLoad;
                },
                get children() {
                    return [ memo(() => (context = getOwner()) && null), createComponent(Routes, {
                        routerState: routerState,
                        get branches() {
                            return branches();
                        }
                    }) ];
                }
            });
        }
    });
};

function Root(props) {
    const location = props.routerState.location, params = props.routerState.params, data = createMemo(() => props.preload && untrack(() => {
        setInPreloadFn(!0), props.preload({
            params: params,
            location: location,
            intent: intent || "initial"
        }), setInPreloadFn(!1);
    }));
    return createComponent(Show, {
        get when() {
            return props.root;
        },
        keyed: !0,
        get fallback() {
            return props.children;
        },
        children: Root => createComponent(Root, {
            params: params,
            location: location,
            get data() {
                return data();
            },
            get children() {
                return props.children;
            }
        })
    });
}

function Routes(props) {
    const disposers = [];
    let root;
    const routeStates = createMemo(on(props.routerState.matches, (nextMatches, prevMatches, prev) => {
        let equal = prevMatches && nextMatches.length === prevMatches.length;
        const next = [];
        for (let i = 0, len = nextMatches.length; i < len; i++) {
            const prevMatch = prevMatches && prevMatches[i], nextMatch = nextMatches[i];
            prev && prevMatch && nextMatch.route.key === prevMatch.route.key ? next[i] = prev[i] : (equal = !1, 
            disposers[i] && disposers[i](), createRoot(dispose => {
                disposers[i] = dispose, next[i] = createRouteContext(props.routerState, next[i - 1] || props.routerState.base, createOutlet(() => routeStates()[i + 1]), () => {
                    var _routeMatches$i;
                    const routeMatches = props.routerState.matches();
                    return null !== (_routeMatches$i = routeMatches[i]) && void 0 !== _routeMatches$i ? _routeMatches$i : routeMatches[0];
                });
            }));
        }
        return disposers.splice(nextMatches.length).forEach(dispose => dispose()), prev && equal ? prev : (root = next[0], 
        next);
    }));
    return createOutlet(() => routeStates() && root)();
}

var createOutlet = child => () => createComponent(Show, {
    get when() {
        return child();
    },
    keyed: !0,
    children: child => createComponent(RouteContextObj.Provider, {
        value: child,
        get children() {
            return child.outlet();
        }
    })
}), Route = props => {
    const childRoutes = children(() => props.children);
    return mergeProps(props, {
        get children() {
            return childRoutes();
        }
    });
};

function Navigate(props) {
    const navigate = useNavigate(), location = useLocation(), {href: href, state: state} = props;
    return navigate("function" == typeof href ? href({
        navigate: navigate,
        location: location
    }) : href, {
        replace: !0,
        state: state
    }), null;
}

function hashParser(str) {
    const to = str.replace(/^.*?#/, "");
    if (!to.startsWith("/")) {
        const [, path = "/"] = window.location.hash.split("#", 2);
        return `${path}#${to}`;
    }
    return to;
}

function HashRouter(props) {
    const getSource = () => window.location.hash.slice(1), beforeLeave = createBeforeLeave();
    return function(config) {
        let ignore = !1;
        const wrap = value => "string" == typeof value ? {
            value: value
        } : value, signal = function([value, setValue], get, set) {
            return [ get ? () => get(value()) : value, set ? v => setValue(set(v)) : setValue ];
        }(createSignal(wrap(config.get()), {
            equals: (a, b) => a.value === b.value && a.state === b.state
        }), void 0, next => (!ignore && config.set(next), sharedConfig.registry && !sharedConfig.done && (sharedConfig.done = !0), 
        next));
        return config.init && onCleanup(config.init((value = config.get()) => {
            ignore = !0, signal[1](wrap(value)), ignore = !1;
        })), createRouterComponent({
            signal: signal,
            create: config.create,
            utils: config.utils
        });
    }({
        get: getSource,
        set({value: value, replace: replace, state: state}) {
            replace ? window.history.replaceState(function(state) {
                return {
                    ...state,
                    _depth: window.history.state && window.history.state._depth
                };
            }(state), "", "#" + value) : window.history.pushState(state, "", "#" + value), saveCurrentDepth();
        },
        init: notify => {
            return target = window, type = "hashchange", handler = function(notify, block) {
                let ignore = !1;
                return () => {
                    const prevDepth = depth;
                    saveCurrentDepth();
                    const delta = null == prevDepth ? null : depth - prevDepth;
                    ignore ? ignore = !1 : delta && block(delta) ? (ignore = !0, window.history.go(-delta)) : notify();
                };
            }(notify, delta => !beforeLeave.confirm(delta && delta < 0 ? delta : getSource())), 
            target.addEventListener(type, handler), () => target.removeEventListener(type, handler);
            var target, type, handler;
        },
        utils: {
            go: delta => window.history.go(delta),
            renderPath: path => `#${path}`,
            parsePath: hashParser,
            beforeLeave: beforeLeave,
            queryWrapper: props.forceProxy || !SUPPORTS_PROXY ? getQuery => createMemoWithoutProxy(getQuery, props.queryParams) : void 0,
            paramsWrapper: props.forceProxy || !SUPPORTS_PROXY ? (buildParams, branches) => createMemoWithoutProxy(buildParams, collectDynamicParams(branches())) : void 0
        }
    })(props);
}

var SUPPORTS_PROXY = "function" == typeof Proxy;

function createMemoWithoutProxy(fn, allKeys) {
    const map = new Map, owner = getOwner(), target = {};
    return (allKeys || Object.keys(fn())).forEach(key => {
        Object.defineProperty(target, key, {
            get: () => {
                return property = key, map.has(property) || runWithOwner(owner, () => map.set(property, createMemo(() => fn()[property]))), 
                map.get(property)();
                var property;
            },
            enumerable: !0,
            configurable: !0
        });
    }), target;
}

var collectDynamicParams = branches => {
    const dynamicParams = [];
    return branches.forEach(branch => {
        branch.routes.forEach(route => {
            if (route.pattern) {
                const matches = route.pattern.match(/:(\w+)/g);
                matches && matches.forEach(param => {
                    const p = param.slice(1);
                    dynamicParams.includes(p) || dynamicParams.push(p);
                });
            }
        });
    }), dynamicParams;
}, keepAliveElements = new Map, keepAliveRouteElements = new Map, _storeKeepAlive = (map, element) => {
    const existing = map.get(element.id);
    return existing ? (Object.assign(existing, element), existing) : (map.set(element.id, element), 
    element);
};

function wrapChildren(props, setIsAlive) {
    const onRemove = chainFunctions(props.onRemove || (elm => {
        elm.alpha = 0;
    }), () => null == setIsAlive ? void 0 : setIsAlive(!1)), onRender = chainFunctions(props.onRender || (elm => {
        elm.alpha = 1;
    }), () => null == setIsAlive ? void 0 : setIsAlive(!0)), transition = props.transition || {
        alpha: !0
    };
    return _el$ = createElement("view"), spread(_el$, mergeProps$1(props, {
        preserve: !0,
        onRemove: onRemove,
        onRender: onRender,
        forwardFocus: 0,
        transition: transition
    }), !1), _el$;
    var _el$;
}

var createKeepAliveComponent = (map, storeFn) => props => {
    var _props$shouldDispose;
    let existing = map.get(props.id);
    const existingChild = null == existing ? void 0 : existing.children;
    var _existing$dispose, _existing$owner;
    existing && ((null == (_props$shouldDispose = props.shouldDispose) ? void 0 : _props$shouldDispose.call(props, props.id)) || (null == existingChild ? void 0 : existingChild.destroyed)) && (null == existingChild || existingChild.destroy(), 
    null == (_existing$dispose = existing.dispose) || _existing$dispose.call(existing), 
    map.delete(props.id), existing = void 0);
    return existing && existing.dispose ? (existing.children || (existing.children = runWithOwner(null !== (_existing$owner = existing.owner) && void 0 !== _existing$owner ? _existing$owner : null, () => wrapChildren(props, existing.setIsAlive))), 
    existing.children) : createRoot(dispose => {
        const [isAlive, setIsAlive] = (null == existing ? void 0 : existing.isAlive) && (null == existing ? void 0 : existing.setIsAlive) ? [ existing.isAlive, existing.setIsAlive ] : createSignal(!0), children = wrapChildren(props, setIsAlive);
        return storeFn({
            id: props.id,
            owner: getOwner(),
            children: children,
            dispose: dispose,
            isAlive: isAlive,
            setIsAlive: setIsAlive
        }), children;
    });
}, KeepAliveRouteInternal = (createKeepAliveComponent(keepAliveElements, element => _storeKeepAlive(keepAliveElements, element)), 
createKeepAliveComponent(keepAliveRouteElements, element => _storeKeepAlive(keepAliveRouteElements, element))), keepAliveRouteCache = new Map, KeepAliveRoute = props => {
    const key = props.id || props.path, cached = keepAliveRouteCache.get(key);
    if (cached) return cached;
    const getExisting = () => {
        let existing = keepAliveRouteElements.get(key);
        if (!existing) {
            const [isAlive, setIsAlive] = createSignal(!0);
            existing = {
                id: key,
                isAlive: isAlive,
                setIsAlive: setIsAlive
            }, keepAliveRouteElements.set(key, existing);
        }
        return existing;
    }, onRemove = chainFunctions(props.onRemove, elm => {
        const existing = keepAliveRouteElements.get(key);
        existing && (existing.savedFocusedElement = activeElement()), elm.alpha = 0;
    }), onRender = chainFunctions(props.onRender, elm => {
        const existing = keepAliveRouteElements.get(key), savedFocusedElement = null == existing ? void 0 : existing.savedFocusedElement;
        existing && (existing.savedFocusedElement = void 0);
        let isChild = !1, current = savedFocusedElement;
        for (;current; ) {
            if (current === elm) {
                isChild = !0;
                break;
            }
            current = current.parent;
        }
        isChild && savedFocusedElement ? savedFocusedElement.setFocus() : elm.setFocus(), 
        elm.alpha = 1;
    }), preload = props.preload ? preloadProps => {
        var _props$shouldDispose2;
        let existing = getExisting();
        const existingChild = existing.children;
        var _existing$dispose2;
        existingChild && ((null == (_props$shouldDispose2 = props.shouldDispose) ? void 0 : _props$shouldDispose2.call(props, key)) || existingChild.destroyed) && (existingChild.destroy(), 
        null == (_existing$dispose2 = existing.dispose) || _existing$dispose2.call(existing), 
        keepAliveRouteElements.delete(key), existing = getExisting());
        return existing.dispose ? existing.children ? (existing.children.setFocus(), props.preload({
            ...preloadProps,
            isAlive: existing.isAlive
        })) : props.preload({
            ...preloadProps,
            isAlive: existing.isAlive
        }) : createRoot(dispose => (existing.owner = getOwner(), existing.dispose = dispose, 
        props.preload({
            ...preloadProps,
            isAlive: existing.isAlive
        })));
    } : void 0, routeElement = createComponent(Route, mergeProps$1(props, {
        preload: preload,
        component: childProps => {
            const existing = getExisting(), innerProps = Object.create(childProps, {
                isAlive: {
                    value: existing.isAlive,
                    enumerable: !0,
                    configurable: !0
                }
            });
            return createComponent(KeepAliveRouteInternal, {
                id: key,
                onRemove: onRemove,
                onRender: onRender,
                get transition() {
                    return props.transition;
                },
                get children() {
                    return props.component(innerProps);
                }
            });
        }
    }));
    return keepAliveRouteCache.set(key, routeElement), routeElement;
}, App = props => (useFocusManager({
    Announcer: [ "a" ],
    Menu: [ "m" ],
    Escape: [ "Escape", 27 ],
    Back: [ "Back", "GoBack", "Backspace", "b", 8, 461, 10009, "Escape", 27 ],
    Left: [ "ArrowLeft", "Left", 37 ],
    Right: [ "ArrowRight", "Right", 39 ],
    Up: [ "ArrowUp", "Up", 38 ],
    Down: [ "ArrowDown", "Down", 40 ],
    Enter: [ "Enter", 13 ],
    Play: [ "Play", 415 ],
    Pause: [ "Pause", 19 ],
    PlayPause: [ "PlayPause", 10252 ],
    FastForward: [ "FastForward", 417 ],
    FastForward10: [ "FastForward10", 10233 ],
    Rewind: [ "Rewind", 412 ],
    Rewind10: [ "Rewind10", 10232 ],
    Stop: [ "Stop", 413 ]
}), useMouse(void 0, 100, {
    customStates: {
        hoverState: "$hover",
        pressedState: "$pressed",
        pressedStateDuration: 150
    }
}), props.children);

var Browse = props => {
    (() => {
        const pre = useRouter().preloadRoute;
    })();
    const [heroContent, setHeroContent] = createSignal({}), navigate = useNavigate();
    let vgRef, firstRun = !0;
    onCleanup(() => {
        console.log("cleanup");
    });
    const provider = createMemo(() => function(fetcher) {
        const [pages, setPages] = createSignal([]), [page, setPage] = createSignal(1), [end, setEnd] = createSignal(!1), [contents] = createResource(page, fetcher);
        return createComputed(() => {
            const content = contents();
            content && batch(() => {
                0 === content.length && setEnd(!0), setPages(p => [ ...p, ...content ]);
            });
        }), {
            pages: pages,
            page: page,
            setPage: setPage,
            setPages: setPages,
            end: end,
            setEnd: setEnd
        };
    }(props.data())), delayedBackgrounds = debounce$1(img => setGlobalBackground(img), 800), delayedHero = debounce$1(content => setHeroContent(content || {}), 600);
    function updateContentBlock(_index, _col, elm) {
        if (!elm) return;
        const item = elm.item || {};
        if (firstRun) return item.backdrop && setGlobalBackground(item.backdrop), item.heroContent && setHeroContent(item.heroContent), 
        void (firstRun = !1);
        item.href, item.backdrop && delayedBackgrounds(item.backdrop), item.heroContent && delayedHero(item.heroContent);
    }
    function onEndReached() {
        provider().setPage(p => p + 1);
    }
    function onEnter() {
        var _entity$item;
        this.display = "flex";
        let entity = this.children.find(c => c.states.has("focus"));
        return assertTruthy(entity && (null == (_entity$item = entity.item) ? void 0 : _entity$item.href)), 
        navigate(entity.item.href), !0;
    }
    return createComponent(Show, {
        get when() {
            return provider().pages().length;
        },
        get children() {
            return [ createComponent(ContentBlock, {
                y: 360,
                x: 162,
                get content() {
                    return heroContent();
                },
                forwardFocus: () => vgRef.setFocus()
            }), (_el$ = createElement("view"), setProp(_el$, "clipping", !0), insert(_el$, createComponent(VirtualGrid, {
                y: 24,
                x: 160,
                id: "BrowseGrid",
                ref(r$) {
                    "function" == typeof vgRef ? vgRef(r$) : vgRef = r$;
                },
                scroll: "always",
                get announce() {
                    return `All Trending ${props.params.filter}`;
                },
                onEnter: onEnter,
                columns: 7,
                gap: 50,
                rows: 2,
                buffer: 2,
                onSelectedChanged: updateContentBlock,
                onEndReached: onEndReached,
                onEndReachedThreshold: 22,
                width: 1620,
                autofocus: !0,
                get each() {
                    return provider().pages();
                },
                children: item => createComponent(Thumbnail, {
                    get item() {
                        return item();
                    }
                })
            })), effect(_$p => setProp(_el$, "style", styles_default.itemsContainer, _$p)), 
            _el$) ];
            var _el$;
        }
    });
}, TMDB = props => {
    const [heroContent, setHeroContent] = createSignal({}), [openPanel, setOpenPanel] = createSignal(!1), {storeFocus: storeFocus, restoreFocus: restoreFocus} = useFocusStack();
    let contentBlock, solidLogo, firstRun = !0;
    const delayedBackgrounds = debounce$1(setGlobalBackground, 800), delayedHero = debounce$1(content => setHeroContent(content || {}), 600);
    function onRowChanged(selectedIndex, column, row, lastIndex) {
        if (selectedIndex === lastIndex) return;
        const values = 0 === selectedIndex ? {
            y: 300,
            alpha: 1
        } : {
            y: 200,
            alpha: 0
        };
        contentBlock.animate(values, {
            duration: 300,
            easing: "ease-in-out"
        }).start();
        const values2 = 0 === selectedIndex ? {
            y: 80,
            alpha: 1
        } : {
            y: 0,
            alpha: 0
        };
        solidLogo.animate(values2, {
            duration: 300,
            easing: "ease-in-out"
        }).start();
    }
    return createEffect(on(activeElement, elm => {
        if (!elm) return;
        const item = elm.item || {};
        firstRun ? (item.backdrop && setGlobalBackground(item.backdrop), item.heroContent && setHeroContent(item.heroContent), 
        firstRun = !1) : (item.backdrop && delayedBackgrounds(item.backdrop), item.heroContent && delayedHero(item.heroContent));
    }, {
        defer: !0
    })), (() => {
        var _el$ = createElement("view"), _el$2 = createElement("view"), _el$3 = createElement("text"), _el$5 = createElement("view"), _el$6 = createElement("view"), _el$7 = createElement("text");
        insertNode(_el$, _el$2), setProp(_el$, "forwardFocus", 2), setProp(_el$, "autofocus", !0), 
        insertNode(_el$2, _el$3), insertNode(_el$2, _el$5), insertNode(_el$2, _el$6), insertNode(_el$2, _el$7);
        return "function" == typeof solidLogo ? use(solidLogo, _el$2) : solidLogo = _el$2, 
        setProp(_el$2, "width", 300), setProp(_el$2, "height", 150), setProp(_el$2, "x", 162), 
        setProp(_el$2, "y", 80), setProp(_el$2, "zIndex", 105), insertNode(_el$3, createTextNode("Built With:")), 
        setProp(_el$3, "x", 80), setProp(_el$3, "fontSize", 28), setProp(_el$3, "color", 4143380121), 
        setProp(_el$5, "y", 32), setProp(_el$5, "src", "./assets/solidWord.png"), setProp(_el$5, "width", 280), 
        setProp(_el$5, "height", 52), setProp(_el$6, "x", 0), setProp(_el$6, "y", 110), 
        setProp(_el$6, "src", "./assets/tmdb.png"), setProp(_el$6, "width", 80), setProp(_el$6, "height", 41), 
        insertNode(_el$7, createTextNode("This product uses the TMDB API but is not endorsed or certified by TMDB.")), 
        setProp(_el$7, "x", 90), setProp(_el$7, "y", 110), setProp(_el$7, "contain", "width"), 
        setProp(_el$7, "width", 160), setProp(_el$7, "fontSize", 12), setProp(_el$7, "color", 4143380121), 
        insert(_el$, createComponent(ContentBlock, {
            ref(r$) {
                "function" == typeof contentBlock ? contentBlock(r$) : contentBlock = r$;
            },
            y: 300,
            x: 162,
            get content() {
                return heroContent();
            }
        }), null), insert(_el$, createComponent(LazyColumn, {
            y: 500,
            upCount: 3,
            get each() {
                return props.data.rows;
            },
            id: "BrowseColumn",
            onSelectedChanged: onRowChanged,
            onEnter: () => setOpenPanel(!0),
            get autofocus() {
                return props.data.rows[0].items();
            },
            gap: 40,
            throttleInput: 250,
            width: 1760,
            get style() {
                return styles_default.Column;
            },
            children: row => "Hero" === row().type ? createComponent(LazyRow, {
                gap: 80,
                upCount: 2,
                bufferSize: 1,
                scroll: "center",
                centerScroll: !0,
                get each() {
                    return row().items();
                },
                y: 50,
                get height() {
                    return row().height;
                },
                children: item => createComponent(Hero, {
                    get item() {
                        return item();
                    }
                })
            }) : createComponent(TitleRow, {
                get row() {
                    return row();
                },
                get title() {
                    return row().title;
                },
                get height() {
                    return row().height;
                },
                get items() {
                    return row().items();
                }
            })
        }), null), insert(_el$, createComponent(AssetPanel, {
            onFocus: storeFocus,
            close: () => (setOpenPanel(!1), restoreFocus(), !0),
            get open() {
                return openPanel();
            },
            get item() {
                return heroContent();
            }
        }), null), _el$;
    })();
}, Destroy = props => {
    const [heroContent, setHeroContent] = createSignal(), [heroIndex, setHeroIndex] = createSignal(0);
    function onDown() {
        if (heroIndex() >= 19) return !1;
        setHeroIndex(p => p + 1);
    }
    function onUp() {
        return 0 !== heroIndex() && (setHeroIndex(p => p - 1), !0);
    }
    function animateOut(node) {
        return node.animate({
            y: 200,
            alpha: 0
        }, {
            duration: 500,
            easing: "ease-in-out"
        }).start().waitUntilStopped();
    }
    function animateIn(node) {
        return node.alpha = 0, node.y = -100, node.animate({
            y: 0,
            alpha: 1
        }, {
            duration: 500,
            easing: "ease-in-out"
        }).start().waitUntilStopped();
    }
    return onMount(() => setGlobalBackground(858993663)), createEffect(on([ props.data.heroRow.items, heroIndex ], ([heros, index]) => {
        if (heros && setHeroContent(heros[index]), heros && index < heros.length - 1) {
            const img = new Image;
            img.crossOrigin = "anonymous", img.src = heros[index + 1].backdrop;
        }
    })), _el$ = createElement("view"), _el$2 = createElement("view"), insertNode(_el$, _el$2), 
    setProp(_el$, "x", 300), setProp(_el$, "y", 200), setProp(_el$, "onDown", onDown), 
    setProp(_el$, "onUp", onUp), setProp(_el$2, "src", "assets/up.svg"), setProp(_el$2, "width", 350), 
    setProp(_el$2, "height", 200), setProp(_el$2, "x", 450), setProp(_el$2, "y", -200), 
    insert(_el$, createComponent(Show, {
        get when() {
            return heroContent();
        },
        keyed: !0,
        get children() {
            return createComponent(Hero, {
                id: "Hero",
                autofocus: !0,
                onDestroy: animateOut,
                onCreate: animateIn,
                get item() {
                    return heroContent();
                },
                get title() {
                    return heroContent().title;
                }
            });
        }
    }), null), effect(_$p => setProp(_el$2, "rotation", Math.PI, _$p)), _el$;
    var _el$, _el$2;
};

function truncateString(str, maxLength) {
    if (!str) return "";
    const s = String(str);
    return s.length > maxLength ? s.substring(0, maxLength - 3) + "..." : s;
}

function convertItemsToTiles(items = []) {
    return items.map((item, i) => ({
        src: getImageUrl(item.poster_path || item.profile_path),
        tileSrc: getImageUrl(item.backdrop_path || item.profile_path, "w300"),
        backdrop: getImageUrl(item.backdrop_path, "w1280"),
        href: `/entity/${item.media_type || "people"}/${item.id}`,
        shortTitle: truncateString(item.title || item.name, 30),
        title: item.title || item.name,
        overview: item.overview,
        absIndex: i,
        item: item,
        entityInfo: {
            type: item.media_type || "people",
            id: item.id
        },
        heroContent: {
            title: item.title || item.name,
            description: item.overview
        }
    }));
}

var genreListCache, handleResults = response => response.then(({results: results}) => convertItemsToTiles(results.filter(r => !r.adult))).catch(err => {
    throw console.error("[HANDLE_RESULTS_ERROR] error:", err.message, err.stack), err;
}), fetchPopular = type => handleResults(api_default.get(`/${type}/popular`)), fetchGenreMovies = genres => {
    const genreList = genreListCache || (genreListCache = api_default.get("/genre/movie/list")), targetGenre = Array.isArray(genres) ? genres : [ genres ];
    return genreList.then(({genres: genres}) => {
        let targetGenreIds = [];
        return genres.forEach(item => {
            targetGenre.includes(item.name) && targetGenreIds.push(item.id);
        }), handleResults(api_default.get(`/discover/movie?with_genres=${targetGenreIds.join()}`));
    }).catch(err => {
        throw console.error("[FETCH_GENRE_MOVIES_ERROR] genres:", genres, "error:", err.message, err.stack), 
        err;
    });
};

function destroyData() {
    return {
        heroRow: {
            title: "Best Adventure and Action movies",
            items: createResource(() => fetchGenreMovies([ "adventure", "action" ]))[0],
            type: "Hero",
            height: 800
        }
    };
}

function tmdbData() {
    const rows = [], popularMovies = createResource(() => fetchPopular("movie"));
    rows.push({
        title: "Popular Movies",
        items: popularMovies[0],
        setItems: popularMovies[1].mutate,
        type: "Poster",
        height: 328
    }), rows.push({
        title: "Best Western movies",
        items: createResource(() => fetchGenreMovies([ "Western" ]))[0],
        type: "Hero",
        height: 720
    }), rows.push({
        title: "Best Comedy movies",
        items: createResource(() => fetchGenreMovies([ "Comedy" ]))[0],
        type: "PosterTitle",
        height: 400
    }), rows.push({
        title: "Popular TV shows",
        items: createResource(() => fetchPopular("tv"))[0],
        type: "PosterTitle",
        height: 400
    });
    const heroRow = {
        title: "Best Adventure and Action movies",
        items: createResource(() => fetchGenreMovies([ "adventure", "action" ]))[0],
        type: "Hero",
        height: 720
    };
    return rows.push(heroRow), rows.push({
        title: "Best Animations",
        items: createResource(() => fetchGenreMovies("Animation"))[0],
        type: "PosterTitle",
        height: 400
    }), rows.push({
        title: "Best TV Movie Movies",
        items: createResource(() => fetchGenreMovies("TV Movie"))[0],
        type: "PosterTitle",
        height: 400
    }), rows.push({
        title: "Best Science Fiction movies",
        items: createResource(() => fetchGenreMovies("Science Fiction"))[0],
        type: "Hero",
        height: 720
    }), rows.push({
        title: "Best War Movies",
        items: createResource(() => fetchGenreMovies("War"))[0],
        type: "PosterTitle",
        height: 400
    }), {
        rows: rows
    };
}

var NotFound = () => {
    return _el$ = createElement("node"), setProp(_el$, "style", {
        width: 1920,
        height: 1080,
        color: 868483072
    }), _el$;
    var _el$;
}, fonts = [ {
    type: "msdf",
    fontFamily: "Roboto",
    atlasDataUrl: "/solid-demo-app/fonts/Roboto-Regular.msdf.json",
    atlasUrl: "/solid-demo-app/fonts/Roboto-Regular.msdf.png",
    metrics: {
        ascender: 1e3,
        descender: 100,
        lineGap: 0,
        unitsPerEm: 1e3
    }
}, {
    type: "msdf",
    fontFamily: "Roboto700",
    atlasDataUrl: "/solid-demo-app/fonts/Roboto-Bold.msdf.json",
    atlasUrl: "/solid-demo-app/fonts/Roboto-Bold.msdf.png",
    metrics: {
        ascender: 1e3,
        descender: 100,
        lineGap: 0,
        unitsPerEm: 1e3
    }
}, {
    type: "msdf",
    fontFamily: "Arial",
    atlasDataUrl: "/solid-demo-app/fonts/Roboto-Regular.msdf.json",
    atlasUrl: "/solid-demo-app/fonts/Roboto-Regular.msdf.png"
}, {
    type: "msdf",
    fontFamily: "Raleway",
    atlasDataUrl: "/solid-demo-app/fonts/Raleway-ExtraBold.msdf.json",
    atlasUrl: "/solid-demo-app/fonts/Raleway-ExtraBold.msdf.png"
}, {
    fontFamily: "Roboto",
    fontUrl: "/solid-demo-app/fonts/Roboto-Regular.ttf"
}, {
    fontFamily: "Roboto700",
    fontUrl: "/solid-demo-app/fonts/Roboto-Bold.ttf"
} ], cache = new Map;

function browsePreload(props) {
    let lastFilter = null;
    return createMemo(p => {
        const params = props.params;
        if (p && (!params.filter || lastFilter === params.filter)) return p;
        const provider = (filter = params.filter || "all", pageIndex => {
            const url = `/trending/${filter}/week?page=${pageIndex}`;
            if (cache.has(url)) return cache.get(url);
            let result = api_default.get(url).then(trending => convertItemsToTiles(trending.results.filter(r => !r.adult))).catch(err => {
                throw console.error("[BROWSE_PROVIDER_ERROR] url:", url, "error:", err.message, err.stack), 
                err;
            });
            return cache.set(url, result), result;
        });
        var filter;
        return provider(1), lastFilter = params.filter || lastFilter, provider;
    });
}

function minutesToHMM(minutes) {
    const remainingMinutes = minutes % 60;
    return Math.floor(minutes / 60) + "h " + (remainingMinutes < 10 ? "0" : "") + remainingMinutes + "min";
}

function formatDate(dateString) {
    const parts = dateString.split("-");
    return parts[1] + "/" + parts[2] + "/" + parts[0];
}

function justYear(dateString) {
    return ((null == dateString ? void 0 : dateString.split("-")) || [])[0] || "";
}

function ensureItems(items, minCount) {
    const remainingCount = minCount - items.length;
    return remainingCount > 0 ? items.concat(Array(remainingCount).fill({})) : items;
}

function getRecommendations({type: type, id: id}) {
    return api_default.get(`/${type}/${id}/recommendations`).then(({results: results}) => results.length ? ensureItems(convertItemsToTiles(results.slice(0, 7)), 7) : api_default.get(`/trending/${type}/week?page=1`).then(({results: results}) => ensureItems(convertItemsToTiles(results.slice(0, 7)), 7)));
}

function getCredits({type: type, id: id}) {
    return api_default.get(`/${type}/${id}/credits`).then(({cast: cast}) => ensureItems(convertItemsToTiles(cast.slice(0, 7)), 7));
}

function getInfo({type: type, id: id}) {
    let rt = "movie" === type ? {
        rtCrit: 86,
        rtFan: 92
    } : {};
    return api_default.get(`/${type}/${id}`).then(data => ({
        backgroundImage: getImageUrl(data.backdrop_path, "w1280"),
        heroContent: {
            title: data.title || data.name,
            description: data.overview,
            badges: [ "HD", "CC" ],
            voteAverage: data.vote_average,
            voteCount: data.vote_count,
            metaText: "movie" === type ? minutesToHMM(data.runtime) + "   " + formatDate(data.release_date) : `${justYear(data.first_air_date)} - ${justYear(data.last_air_date)}`,
            reviews: rt
        },
        ...data
    }));
}

function entityPreload({params: params, intent: intent}) {
    const [entity] = createResource(() => ({
        ...params
    }), getInfo);
    if ("preload" === intent) return;
    const [credits] = createResource(() => ({
        ...params
    }), getCredits), [recommendations] = createResource(() => ({
        ...params
    }), getRecommendations);
    return {
        entity: entity,
        credits: credits,
        recommendations: recommendations
    };
}

function Background() {
    const disableBG = "true" === new URLSearchParams(window.location.search).get("disableBG");
    let bg1, bg2, heroMask, active = 0;
    const animationSettings = {
        duration: 550,
        easing: "ease-in-out"
    }, bgStyles = {
        alpha: 1,
        color: 4294967295
    };
    return onMount(() => {
        if (disableBG) return heroMask.src = "", heroMask.colorLeft = 255, void (heroMask.colorRight = 0);
    }), createEffect(on(globalBackground, img => {
        !function(img) {
            if (disableBG) return heroMask.src = "", heroMask.colorLeft = 255, void (heroMask.colorRight = 0);
            if ("string" != typeof img) return bg1.color = img, bg1.src = "", bg1.alpha = 1, 
            active = 1, bg2.alpha = 0, void (heroMask.alpha = 0);
            bg1.color = 4294967295, heroMask.alpha = 1;
            const currentBg = 1 === active ? bg2 : bg1, nextBg = 1 === active ? bg1 : bg2;
            currentBg.src = img, 0 === active ? currentBg.alpha = 1 : (currentBg.alpha = .01, 
            currentBg.animate({
                alpha: 1
            }, animationSettings).start()), nextBg.animate({
                alpha: .01
            }, animationSettings).start(), active = 1 === active ? 2 : 1;
        }(img);
    }, {
        defer: !0
    })), (() => {
        var _el$ = createElement("view"), _el$2 = createElement("view"), _el$3 = createElement("view"), _el$4 = createElement("view");
        insertNode(_el$, _el$2), insertNode(_el$, _el$3), insertNode(_el$, _el$4), setProp(_el$, "width", 1920), 
        setProp(_el$, "height", 1080), setProp(_el$, "zIndex", -5);
        "function" == typeof bg1 ? use(bg1, _el$2) : bg1 = _el$2, setProp(_el$2, "style", bgStyles);
        "function" == typeof bg2 ? use(bg2, _el$3) : bg2 = _el$3, setProp(_el$3, "style", bgStyles), 
        setProp(_el$3, "alpha", 0);
        return "function" == typeof heroMask ? use(heroMask, _el$4) : heroMask = _el$4, 
        setProp(_el$4, "src", "./assets/hero-mask-inverted.png"), setProp(_el$4, "color", 255), 
        setProp(_el$4, "width", 1920), setProp(_el$4, "height", 1080), _el$;
    })();
}

var sprite, NavDrawer_styles_default = {
    Column: {
        flexDirection: "column",
        display: "flex",
        width: 140,
        height: 600,
        y: 300,
        gap: 20,
        zIndex: 101,
        transition: {
            x: {
                duration: 250,
                easing: "ease-in-out"
            }
        },
        x: 24,
        $focus: {
            width: 500
        }
    },
    Gradient: {
        zIndex: 99,
        color: 255,
        src: "./assets/sidenav.png",
        alpha: 0,
        width: 200,
        height: 1080,
        $focus: {
            alpha: 1,
            width: 1600
        },
        transition: {
            alpha: !0,
            width: !0
        }
    },
    NavButton: {
        zIndex: 102,
        height: 70,
        width: 100,
        borderRadius: 0,
        color: 0,
        $focus: {
            color: theme_default.primaryLight,
            borderRadius: 8
        },
        $active: {
            width: 328
        }
    }
}, icons = [ {
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
    }("/solid-demo-app/assets/icons_white.png", icons), "perf" === props.name ? (_el$ = createElement("view"), 
    spread(_el$, mergeProps$1(props, {
        src: "/solid-demo-app/assets/perficon.png",
        width: 100,
        y: 25,
        height: 50
    }), !1), _el$) : (_el$2 = createElement("view"), spread(_el$2, mergeProps$1(props, {
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

var NavButtonTextStyles = {
    x: 112,
    fontSize: 38,
    lineHeight: 70,
    alpha: 0,
    color: theme_default.textPrimary,
    $active: {
        alpha: 1
    }
};

function NavButton(props) {
    return _el$ = createElement("view"), _el$2 = createElement("view"), _el$3 = createElement("text"), 
    insertNode(_el$, _el$2), insertNode(_el$, _el$3), spread(_el$, mergeProps$1(props, {
        forwardStates: !0,
        get style() {
            return NavDrawer_styles_default.NavButton;
        }
    }), !0), setProp(_el$2, "y", -16), insert(_el$2, createComponent(Icon, {
        get color() {
            return props.iconColor;
        },
        scale: .5,
        get name() {
            return props.icon;
        }
    })), setProp(_el$3, "style", NavButtonTextStyles), insert(_el$3, () => props.children), 
    _el$;
    var _el$, _el$2, _el$3;
}

function NavDrawer(props) {
    let backdrop;
    const navigate = useNavigate();
    function handleNavigate(page) {
        if (useMatch(() => page)()) return props.focusPage();
        navigate(page);
    }
    const selectedButton = createMemo(() => useMatch(() => "/browse/all")() ? 308 : useMatch(() => "/browse/movie")() ? 398 : useMatch(() => "/browse/tv")() ? 488 : useMatch(() => "/examples")() ? 578 : useMatch(() => "/benchmark")() ? 668 : useMatch(() => "/versions")() ? 758 : 308);
    return [ (_el$4 = createElement("view"), _el$5 = createElement("text"), _el$7 = createElement("view"), 
    _el$8 = createElement("view"), _el$9 = createElement("text"), insertNode(_el$4, _el$5), 
    insertNode(_el$4, _el$7), insertNode(_el$4, _el$8), insertNode(_el$4, _el$9), setProp(_el$4, "id", "NavDrawer"), 
    setProp(_el$4, "flexItem", !1), setProp(_el$4, "width", 300), setProp(_el$4, "height", 150), 
    setProp(_el$4, "x", 30), setProp(_el$4, "y", 15), setProp(_el$4, "zIndex", 105), 
    insertNode(_el$5, createTextNode("Built With:")), setProp(_el$5, "y", 8), setProp(_el$5, "x", 80), 
    setProp(_el$5, "fontSize", 28), setProp(_el$7, "y", 10), setProp(_el$7, "src", "./assets/solidWord.png"), 
    setProp(_el$7, "width", 280), setProp(_el$7, "height", 52), setProp(_el$7, "textureOptions", {}), 
    setProp(_el$8, "x", 0), setProp(_el$8, "y", 100), setProp(_el$8, "src", "./assets/tmdb.png"), 
    setProp(_el$8, "width", 80), setProp(_el$8, "height", 41), setProp(_el$8, "textureOptions", {}), 
    insertNode(_el$9, createTextNode("This product uses the TMDB API but is not endorsed or certified by TMDB.")), 
    setProp(_el$9, "x", 90), setProp(_el$9, "y", 104), setProp(_el$9, "contain", "width"), 
    setProp(_el$9, "width", 160), setProp(_el$9, "fontSize", 12), effect(_p$ => {
        var _v$ = props.showWidgets ? 1 : 0, _v$2 = theme_default.textSecondary, _v$3 = theme_default.textSecondary;
        return _v$ !== _p$.e && (_p$.e = setProp(_el$4, "alpha", _v$, _p$.e)), _v$2 !== _p$.t && (_p$.t = setProp(_el$5, "color", _v$2, _p$.t)), 
        _v$3 !== _p$.a && (_p$.a = setProp(_el$9, "color", _v$3, _p$.a)), _p$;
    }, {
        e: void 0,
        t: void 0,
        a: void 0
    }), _el$4), createComponent(Column, mergeProps$1(props, {
        onFocus: function() {
            backdrop.states.add("$focus"), this.children.forEach(c => c.states.add("$active")), 
            this.children[this.selected || 0].setFocus();
        },
        onBlur: function() {
            backdrop.states.remove("$focus"), this.selected = 0, this.children.forEach(c => c.states.remove("$active"));
        },
        get style() {
            return NavDrawer_styles_default.Column;
        },
        announce: "Main Menu",
        scroll: "none",
        get children() {
            return [ createComponent(NavButton, {
                onEnter: () => handleNavigate("/browse/all"),
                iconColor: 4294967295,
                announce: [ "Trending Browse", "button" ],
                icon: "trending",
                children: "Trending"
            }), createComponent(NavButton, {
                icon: "movie",
                iconColor: 4294967295,
                announce: [ "Movies Browse", "button" ],
                onEnter: () => handleNavigate("/browse/movie"),
                children: "Movies"
            }), createComponent(NavButton, {
                icon: "tv",
                iconColor: 4294967295,
                announce: [ "TV Browse", "button" ],
                onEnter: () => handleNavigate("/browse/tv"),
                children: "TV"
            }), createComponent(NavButton, {
                icon: "experiment",
                iconColor: 4294967295,
                announce: [ "Examples", "button" ],
                onEnter: () => handleNavigate("/examples"),
                children: "Examples"
            }), createComponent(NavButton, {
                icon: "perf",
                iconColor: 4294967295,
                announce: [ "Benchmark", "button" ],
                onEnter: () => handleNavigate("/versions"),
                children: "Benchmark"
            }) ];
        }
    })), (_el$1 = createElement("view"), "function" == typeof backdrop ? use(backdrop, _el$1) : backdrop = _el$1, 
    setProp(_el$1, "skipFocus", !0), effect(_$p => setProp(_el$1, "style", NavDrawer_styles_default.Gradient, _$p)), 
    _el$1), (_el$10 = createElement("view"), setProp(_el$10, "width", 4), setProp(_el$10, "height", 56), 
    setProp(_el$10, "color", 4294967295), setProp(_el$10, "x", 22), setProp(_el$10, "zIndex", 100), 
    effect(_$p => setProp(_el$10, "y", selectedButton(), _$p)), _el$10) ];
    var _el$10, _el$1, _el$4, _el$5, _el$7, _el$8, _el$9;
}

var _low$medium$high$xhig, LeftNavWrapper = props => {
    const navigate = useNavigate(), isStartPage = useMatch(() => "/browse/all"), announcer = (doOnce || (doOnce = !0, 
    Announcer.setupTimers(options), createEffect(on(focusPath, Announcer.onFocusChange, {
        defer: !0
    }))), Announcer);
    var options;
    let navDrawer, lastFocused;
    function focusNavDrawer() {
        return !navDrawer.states.has("focus") && (lastFocused = activeElement(), navDrawer.setFocus());
    }
    announcer.debug = !0, announcer.enabled = !1, setupFPS({
        renderer: renderer
    });
    const [showWidgets, setShowWidgets] = createSignal(!0), location = useLocation(), showOnPaths = [ "/browse", "/entity" ];
    createEffect(() => {
        const currentPath = location.pathname;
        let matchesPartial = showOnPaths.some(path => currentPath.startsWith(path));
        "/" === currentPath && (matchesPartial = !0), setShowWidgets(matchesPartial);
    });
    const [lastKey, setLastKey] = createSignal("Last key: undefined"), [lastError, setLastError] = createSignal(), keyPressHandler = e => {
        setLastKey(`Last key: ${e.key}, Code: ${e.keyCode}`);
    };
    document.addEventListener("keydown", keyPressHandler);
    const displayError = e => {
        setLastError(p => (p || "") + "\n" + e.message);
    };
    document.addEventListener("onerror", displayError);
    const windowSize = `${window.innerWidth}x${window.innerHeight}`;
    let pageContainer;
    return onCleanup(() => {
        document.removeEventListener("onerror", displayError), document.removeEventListener("keydown", keyPressHandler);
    }), (() => {
        var _el$ = createElement("view"), _el$2 = createElement("view"), _el$3 = createElement("text"), _el$4 = createTextNode("Window Size: "), _el$5 = createElement("text"), _el$6 = createElement("text"), _el$7 = createElement("view");
        insertNode(_el$, _el$2), insertNode(_el$, _el$6), insertNode(_el$, _el$7);
        var _ref$ = window.APP;
        "function" == typeof _ref$ ? use(_ref$, _el$) : window.APP = _el$, setProp(_el$, "onAnnouncer", () => (announcer.enabled = !announcer.enabled, 
        !0)), setProp(_el$, "onLast", () => (history.back(), !0)), setProp(_el$, "onMenu", () => (navigate("/"), 
        !0)), setProp(_el$, "onBack", () => {
            if (navDrawer.states.has("focus")) {
                if (isStartPage()) return !1;
                navigate(-1);
            } else focusNavDrawer();
            return !0;
        }), setProp(_el$, "style", {
            width: 1920,
            height: 1080
        }), setProp(_el$, "onLeft", () => (focusNavDrawer(), !0)), setProp(_el$, "onRight", () => {
            if (navDrawer.states.has("focus")) return (lastFocused || pageContainer).setFocus(), 
            !0;
        }), insert(_el$, createComponent(Background, {}), _el$2), insert(_el$, createComponent(Show, {
            get when() {
                return !location.pathname.startsWith("/benchmark");
            },
            get children() {
                return createComponent(FPSCounter, {
                    mountX: 1,
                    x: 1910,
                    y: 10,
                    alpha: 1
                });
            }
        }), _el$2), insertNode(_el$2, _el$3), insertNode(_el$2, _el$5), setProp(_el$2, "mountX", 1), 
        setProp(_el$2, "display", "flex"), setProp(_el$2, "flexDirection", "column"), setProp(_el$2, "width", 330), 
        setProp(_el$2, "height", 50), setProp(_el$2, "x", 1910), setProp(_el$2, "y", 212), 
        setProp(_el$2, "color", 255), insertNode(_el$3, _el$4), setProp(_el$3, "x", 8), 
        setProp(_el$3, "fontSize", 15), insert(_el$3, windowSize, null), setProp(_el$5, "x", 8), 
        setProp(_el$5, "fontSize", 15), insert(_el$5, lastKey), setProp(_el$6, "x", 270), 
        setProp(_el$6, "y", 20), setProp(_el$6, "fontSize", 24), setProp(_el$6, "contain", "width"), 
        setProp(_el$6, "width", 800), insert(_el$6, lastError), insert(_el$, createComponent(NavDrawer, {
            ref(r$) {
                "function" == typeof navDrawer ? navDrawer(r$) : navDrawer = r$;
            },
            focusPage: () => lastFocused.setFocus(),
            get showWidgets() {
                return showWidgets();
            }
        }), _el$7);
        return "function" == typeof pageContainer ? use(pageContainer, _el$7) : pageContainer = _el$7, 
        setProp(_el$7, "id", "pageContainer"), setProp(_el$7, "forwardFocus", 0), insert(_el$7, () => props.children), 
        effect(_$p => setProp(_el$2, "hidden", !showWidgets(), _$p)), _el$;
    })();
}, seen = {}, __vitePreload = function(baseModule, deps, importerUrl) {
    let promise = Promise.resolve();
    if (deps && deps.length > 0) {
        const links = document.getElementsByTagName("link"), cspNonceMeta = document.querySelector("meta[property=csp-nonce]"), cspNonce = (null == cspNonceMeta ? void 0 : cspNonceMeta.nonce) || (null == cspNonceMeta ? void 0 : cspNonceMeta.getAttribute("nonce"));
        promises = deps.map(dep => {
            var specifier;
            if (dep = function(dep) {
                return "/solid-demo-app/" + dep;
            }(dep), specifier = dep, (dep = import.meta.resolve ? import.meta.resolve(specifier) : new URL(specifier, import.meta.url).href) in seen) return;
            seen[dep] = !0;
            const isCss = dep.endsWith(".css");
            for (let i = links.length - 1; i >= 0; i--) {
                const link = links[i];
                if (link.href === dep && (!isCss || "stylesheet" === link.rel)) return;
            }
            const link = document.createElement("link");
            return link.rel = isCss ? "stylesheet" : "modulepreload", isCss || (link.as = "script"), 
            link.crossOrigin = "", link.href = dep, cspNonce && link.setAttribute("nonce", cspNonce), 
            document.head.appendChild(link), isCss ? new Promise((res, rej) => {
                link.addEventListener("load", res), link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
            }) : void 0;
        }), promise = Promise.all(promises.map(p => Promise.resolve(p).then(value => ({
            status: "fulfilled",
            value: value
        }), reason => ({
            status: "rejected",
            reason: reason
        }))));
    }
    var promises;
    function handlePreloadError(err) {
        const e = new Event("vite:preloadError", {
            cancelable: !0
        });
        if (e.payload = err, window.dispatchEvent(e), !e.defaultPrevented) throw err;
    }
    return promise.then(res => {
        for (const item of res || []) "rejected" === item.status && handlePreloadError(item.reason);
        return baseModule().catch(handlePreloadError);
    });
};

!function() {
    const originalGetOwnPropertyNames = Object.getOwnPropertyNames;
    Object.getOwnPropertyNames = function(obj) {
        const names = originalGetOwnPropertyNames(obj);
        return !obj || "function" != typeof obj && "[object Arguments]" !== Object.prototype.toString.call(obj) ? names : names.filter(function(name) {
            return "caller" !== name && "callee" !== name && "arguments" !== name;
        });
    };
}(), window.bundleType = "MODERN (module)", console.log(`[bundle] Loaded ${window.bundleType} build`);

var Player = lazy(() => __vitePreload(() => import("./Player-Cttarhke.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]))), Grid = lazy(() => __vitePreload(() => import("./Grid-BmWwMg6f.js"), __vite__mapDeps([17,1,8,2,6,7,12,3]))), Loops = lazy(() => __vitePreload(() => import("./Loops-DsNUtHuG.js"), __vite__mapDeps([18,1,6,5,7,2,8,9,14,15,12,3]))), Infinite = lazy(() => __vitePreload(() => import("./Infinite-DUil_J5I.js"), __vite__mapDeps([19,1,6,14,2,7,8,9,15,12,3]))), TMDBGrid = lazy(() => __vitePreload(() => import("./TMDBGrid-DK0cbdy1.js"), __vite__mapDeps([20,1,6,7,2,11,12,14,8,9,15,3,16]))), Portal = lazy(() => __vitePreload(() => import("./Portal-gcq7YLsy.js"), __vite__mapDeps([21,1,6,8,2,7,9,13,15,12]))), MatrixPage = lazy(() => __vitePreload(() => import("./Matrix-CCHZ79nR.js"), __vite__mapDeps([22,1,8,2,6,7,9]))), TextPage = lazy(() => __vitePreload(() => import("./Text-ClkT3hcb.js"), __vite__mapDeps([23,1,2,3]))), TextPosterPage = lazy(() => __vitePreload(() => import("./TextPoster-O2FF8_hg.js"), __vite__mapDeps([24,1,9,2,6,7,3]))), CreatePage = lazy(() => __vitePreload(() => import("./Create-BFO95OUZ.js"), __vite__mapDeps([25,1,2,6,3]))), ViewportPage = lazy(() => __vitePreload(() => import("./Viewport-ybAE0axc.js"), __vite__mapDeps([26,1,3]))), PositioningPage = lazy(() => __vitePreload(() => import("./Positioning-C7qVGxyM.js"), __vite__mapDeps([27,1,3]))), LayoutPage = lazy(() => __vitePreload(() => import("./Layout-kx6s2OZu.js"), __vite__mapDeps([28,1,14,2,6,7,8,9,15,12,3]))), FocusBasicsPage = lazy(() => __vitePreload(() => import("./FocusBasics-DfF7WkZe.js"), __vite__mapDeps([29,1,9,2,6,7,14,8,15,12,3]))), KeyHandlingPage = lazy(() => __vitePreload(() => import("./KeyHandling-C4mxuCgl.js"), __vite__mapDeps([30,1,14,2,6,7,8,9,15,12,3]))), TransitionsPage = lazy(() => __vitePreload(() => import("./Transitions-BYSC88Pz.js"), __vite__mapDeps([31,1,3]))), ComponentsPage = lazy(() => __vitePreload(() => import("./Components-oiHpbc2R.js"), __vite__mapDeps([32,1,6,14,2,7,8,9,15,12,3]))), FocusHandlingPage = lazy(() => __vitePreload(() => import("./FocusHandling-BZmFemLc.js"), __vite__mapDeps([33,1,6,8,2,7,9,3]))), GradientsPage = lazy(() => __vitePreload(() => import("./Gradients-BJJb2uKw.js"), __vite__mapDeps([34,1,3]))), FlexPage = lazy(() => __vitePreload(() => import("./Flex-DRhE-kZl.js"), __vite__mapDeps([35,1,6,8,2,7,9,15,12,3]))), FlexGrowPage = lazy(() => __vitePreload(() => import("./FlexGrow-B3HAAloB.js"), __vite__mapDeps([36,1,6,8,2,7,9,15,12,3]))), FlexMenuPage = lazy(() => __vitePreload(() => import("./FlexMenu-CXAg0lPd.js"), __vite__mapDeps([37,1,6,8,2,7,3]))), FlexSizePage = lazy(() => __vitePreload(() => import("./FlexSize-C9s7C120.js"), __vite__mapDeps([38,1,6,8,2,7,9,15,12,3]))), FlexColumnSizePage = lazy(() => __vitePreload(() => import("./FlexColumnSize-n6EMlPGz.js"), __vite__mapDeps([39,1,2,6,8,7,9,3]))), FlexColumnPage = lazy(() => __vitePreload(() => import("./FlexColumn-mhkxeVJE.js"), __vite__mapDeps([40,1,2,6,8,7,9,3]))), ButtonsMaterialPage = lazy(() => __vitePreload(() => import("./ButtonsMaterial-BWBX3Psr.js"), __vite__mapDeps([41,1,2,6,9,7,15,12]))), SuperFlexPage = lazy(() => __vitePreload(() => import("./SuperFlex-D-ny6tML.js"), __vite__mapDeps([42,1,8,2,6,7,9]))), Entity = lazy(() => __vitePreload(() => import("./Entity-BuC6qbIj.js"), __vite__mapDeps([43,1,8,2,6,7,9,11,12,14,15,3]))), People = lazy(() => __vitePreload(() => import("./People-CvJOJdHK.js"), __vite__mapDeps([44,1,8,2,6,7,14,9,15,12,3,45]))), FireboltPage = lazy(() => __vitePreload(() => import("./Firebolt-C0OAJFve.js"), __vite__mapDeps([46,1,9,2,6,7,3]))), LoginPage = lazy(() => __vitePreload(() => import("./Login-BGg2AuvJ.js"), __vite__mapDeps([47,1,6,7,2,8,9,3]))), VirtualPage = lazy(() => __vitePreload(() => import("./Virtual-fJWk4jp_.js"), __vite__mapDeps([48,1,5,6,7,2,8,9,14,15,12,3]))), TagsPage = lazy(() => __vitePreload(() => import("./Tags-G1N8sbbh.js"), __vite__mapDeps([49,1,3]))), ImagePerformance = lazy(() => __vitePreload(() => import("./ImagePerformance-CFcGjr1s.js"), __vite__mapDeps([50,1,45,51]))), LargeImagePerformance = lazy(() => __vitePreload(() => import("./LargeImagePerformance-Ccl24zdi.js"), __vite__mapDeps([52,1,45,51]))), MixedImagePerformance = lazy(() => __vitePreload(() => import("./MixedImagePerformance-CSBtNll9.js"), __vite__mapDeps([53,1,45,51]))), TextureCompressionPerformance = lazy(() => __vitePreload(() => import("./TextureCompressionPerformance-DTYybrpe.js"), __vite__mapDeps([54,1]))), ComplexFlexPage = lazy(() => __vitePreload(() => import("./ComplexFlex-lMmObegQ.js"), __vite__mapDeps([55,1,8,2,6,7,9]))), ComplexFlexCapsPage = lazy(() => __vitePreload(() => import("./ComplexFlexCaps-OCGWLFFD.js"), __vite__mapDeps([56,1,8,2,6,7,9]))), BenchmarkPage = lazy(() => __vitePreload(() => import("./Benchmark-DgdldDm6.js"), __vite__mapDeps([4,1,5,6,7,2,8,9,10,11,12,13,14,15,3,16]))), RendererVersionsPage = lazy(() => __vitePreload(() => import("./RendererVersions-Di_y0BEf.js"), __vite__mapDeps([57,1,3]))), TextCenteringPage = lazy(() => __vitePreload(() => import("./TextCentering-CZfmHUIy.js"), __vite__mapDeps([58,1,6,12,3]))), CountdownTimerPage = lazy(() => __vitePreload(() => import("./CountdownTimer-BTai5LrR.js"), __vite__mapDeps([59,1,12,3]))), CustomButtonsPage = lazy(() => __vitePreload(() => import("./CustomButtons-BlXY2o6w.js"), __vite__mapDeps([60,1,8,2,6,7,9,12,3]))), FlexJustifyWidthPage = lazy(() => __vitePreload(() => import("./FlexJustifyWidth-nKMUjeqm.js"), __vite__mapDeps([61,1,8,2,6,7,12,3]))), numImageWorkers = "undefined" != typeof window && window.createImageBitmap ? 1 : 0, urlParams = new URLSearchParams(window.location.search), numWorkers = urlParams.get("numImageWorkers"), screenSize = urlParams.get("size") || "default", animationsEnabled = urlParams.get("animate") || "true", enableContextSpy = "true" === urlParams.get("contextSpy"), forceWebGL2 = "true" === urlParams.get("webgl2"), targetFPSParam = urlParams.get("targetFPS"), targetFPS = targetFPSParam ? parseFloat(targetFPSParam) : 0, powerPreference = urlParams.get("powerPreference"), textBaseline = urlParams.get("textBaseline");

numWorkers && (numImageWorkers = parseInt(numWorkers));

var logicalDPR = window.innerHeight / 1080, devicePixelRatio = window.devicePixelRatio || 1, physicalDPR = null !== (_low$medium$high$xhig = {
    low: .666667,
    medium: .8,
    high: 1,
    xhigh: 1.5,
    ultra: 2,
    default: logicalDPR >= 1 ? 1 : devicePixelRatio
}[screenSize]) && void 0 !== _low$medium$high$xhig ? _low$medium$high$xhig : 1;

Config.debug = !1, Config.animationsEnabled = "true" === animationsEnabled, Config.fontSettings.fontFamily = "Roboto", 
Config.fontSettings.color = theme_default.textPrimary, Config.fontSettings.fontSize = 32, 
Config.domRendererEnabled = !1, Config.focusHistoryDebug = 5;

var textureProcessingTimeLimitParam = urlParams.get("textureProcessingTimeLimit");

Config.rendererOptions = {
    fpsUpdateInterval: 300,
    inspector: void 0,
    textureMemory: {
        criticalThreshold: 2e8,
        targetThresholdLevel: .8
    },
    textureProcessingTimeLimit: textureProcessingTimeLimitParam ? parseFloat(textureProcessingTimeLimitParam) : void 0,
    numImageWorkers: numImageWorkers,
    imageDecodeConcurrency: "undefined" != typeof window && window.createImageBitmap ? 4 : 2,
    deviceLogicalPixelRatio: logicalDPR,
    devicePhysicalPixelRatio: physicalDPR,
    createImageBitmapSupport: "auto",
    boundsMargin: 475,
    targetFPS: targetFPS,
    enableContextSpy: enableContextSpy,
    forceWebGL2: forceWebGL2
}, powerPreference && (Config.rendererOptions.powerPreference = powerPreference), 
textBaseline && (Config.rendererOptions.textBaselineMode = textBaseline), requestAnimationFrame(() => {
    setTimeout(() => {
        const {renderer: renderer, render: render} = createRenderer();
        let idleFired = !1;
        renderer.on("idle", () => {
            if (!idleFired) {
                idleFired = !0;
                const splash = document.getElementById("splash");
                splash && (splash.classList.add("fade-out"), setTimeout(() => {
                    splash.remove();
                }, 500));
            }
        }), loadFonts(fonts);
        const shaders = renderer;
        shaders.registerShaderType("rounded", Rounded), shaders.registerShaderType("roundedWithBorder", RoundedWithBorder), 
        shaders.registerShaderType("roundedWithShadow", RoundedWithShadow), shaders.registerShaderType("roundedWithBorderWithShadow", RoundedWithBorderAndShadow), 
        shaders.registerShaderType("radialGradient", RadialGradient), shaders.registerShaderType("linearGradient", LinearGradient), 
        shaders.registerShaderType("holePunch", HolePunch), shaders.registerShaderType("radialProgress", RadialProgress), 
        render(() => createComponent(FocusStackProvider, {
            get children() {
                return createComponent(HashRouter, {
                    root: props => createComponent(App, props),
                    get children() {
                        return [ createComponent(Route, {
                            path: "",
                            component: LeftNavWrapper,
                            get children() {
                                return [ createComponent(Route, {
                                    path: "",
                                    component: () => createComponent(Navigate, {
                                        href: "/browse/all"
                                    })
                                }), createComponent(Route, {
                                    path: "examples",
                                    component: Portal,
                                    get children() {
                                        return [ createComponent(Route, {
                                            path: "/"
                                        }), createComponent(Route, {
                                            path: "tmdb",
                                            component: TMDB,
                                            preload: tmdbData
                                        }) ];
                                    }
                                }), createComponent(KeepAliveRoute, {
                                    id: "browse",
                                    path: "browse/:filter",
                                    component: Browse,
                                    preload: browsePreload
                                }), createComponent(Route, {
                                    path: "loops",
                                    component: Loops,
                                    preload: tmdbData
                                }), createComponent(Route, {
                                    path: "infinite",
                                    component: Infinite,
                                    preload: tmdbData
                                }), createComponent(Route, {
                                    path: "tmdbgrid",
                                    component: TMDBGrid,
                                    preload: tmdbData
                                }), createComponent(Route, {
                                    path: "virtual",
                                    component: VirtualPage,
                                    preload: tmdbData
                                }), createComponent(Route, {
                                    path: "destroy",
                                    component: Destroy,
                                    preload: destroyData
                                }), createComponent(Route, {
                                    path: "grid",
                                    component: Grid
                                }), createComponent(Route, {
                                    path: "matrix",
                                    component: MatrixPage
                                }), createComponent(Route, {
                                    path: "text",
                                    component: TextPage
                                }), createComponent(Route, {
                                    path: "firebolt",
                                    component: FireboltPage
                                }), createComponent(Route, {
                                    path: "login",
                                    component: LoginPage
                                }), createComponent(Route, {
                                    path: "nested",
                                    get component() {
                                        return lazy(() => __vitePreload(() => import("./Nested-CiCDSnEc.js"), __vite__mapDeps([62,1,8,2,6,7,14,9,15,12,3])));
                                    }
                                }), createComponent(Route, {
                                    path: "textposter",
                                    component: TextPosterPage
                                }), createComponent(Route, {
                                    path: "textcentering",
                                    component: TextCenteringPage
                                }), createComponent(Route, {
                                    path: "countdown",
                                    component: CountdownTimerPage
                                }), createComponent(Route, {
                                    path: "custombuttons",
                                    component: CustomButtonsPage
                                }), createComponent(Route, {
                                    path: "positioning",
                                    component: PositioningPage
                                }), createComponent(Route, {
                                    path: "layout",
                                    component: LayoutPage
                                }), createComponent(Route, {
                                    path: "focusbasics",
                                    component: FocusBasicsPage
                                }), createComponent(Route, {
                                    path: "transitions",
                                    component: TransitionsPage
                                }), createComponent(Route, {
                                    path: "components",
                                    component: ComponentsPage
                                }), createComponent(Route, {
                                    path: "focushandling",
                                    component: FocusHandlingPage
                                }), createComponent(Route, {
                                    path: "keyhandling",
                                    component: KeyHandlingPage
                                }), createComponent(Route, {
                                    path: "gradients",
                                    component: GradientsPage
                                }), createComponent(Route, {
                                    path: "flex",
                                    component: FlexPage
                                }), createComponent(Route, {
                                    path: "create",
                                    component: CreatePage
                                }), createComponent(Route, {
                                    path: "viewport",
                                    component: ViewportPage
                                }), createComponent(Route, {
                                    path: "flexsize",
                                    component: FlexSizePage
                                }), createComponent(Route, {
                                    path: "flexmenu",
                                    component: FlexMenuPage
                                }), createComponent(Route, {
                                    path: "flexcolumnsize",
                                    component: FlexColumnSizePage
                                }), createComponent(Route, {
                                    path: "flexcolumn",
                                    component: FlexColumnPage
                                }), createComponent(Route, {
                                    path: "flexgrow",
                                    component: FlexGrowPage
                                }), createComponent(Route, {
                                    path: "flexjustifywidth",
                                    component: FlexJustifyWidthPage
                                }), createComponent(Route, {
                                    path: "keepalive",
                                    get component() {
                                        return lazy(() => __vitePreload(() => import("./KeepAlive-94V0ABdx.js"), __vite__mapDeps([63,1])));
                                    }
                                }), createComponent(Route, {
                                    path: "suspense",
                                    get component() {
                                        return lazy(() => __vitePreload(() => import("./suspense-C1qkPy1U.js"), __vite__mapDeps([64,1,3])));
                                    }
                                }), createComponent(Route, {
                                    path: "superflex",
                                    component: SuperFlexPage
                                }), createComponent(Route, {
                                    path: "tags",
                                    component: TagsPage
                                }), createComponent(Route, {
                                    path: "buttonsmaterial",
                                    component: ButtonsMaterialPage
                                }), createComponent(Route, {
                                    path: "entity/people/:id",
                                    component: People
                                }), createComponent(Route, {
                                    path: "entity/:type/:id",
                                    component: Entity,
                                    preload: entityPreload
                                }), createComponent(Route, {
                                    path: "image-performance",
                                    component: ImagePerformance
                                }), createComponent(Route, {
                                    path: "large-image-performance",
                                    component: LargeImagePerformance
                                }), createComponent(Route, {
                                    path: "mixed-image-performance",
                                    component: MixedImagePerformance
                                }), createComponent(Route, {
                                    path: "texture-compression-performance",
                                    component: TextureCompressionPerformance
                                }), createComponent(Route, {
                                    path: "complexflex",
                                    component: ComplexFlexPage
                                }), createComponent(Route, {
                                    path: "complexflexcaps",
                                    component: ComplexFlexCapsPage
                                }), createComponent(Route, {
                                    path: "benchmark",
                                    component: BenchmarkPage,
                                    preload: tmdbData
                                }), createComponent(Route, {
                                    path: "versions",
                                    component: RendererVersionsPage
                                }), createComponent(Route, {
                                    path: "*all",
                                    component: NotFound
                                }) ];
                            }
                        }), createComponent(Route, {
                            path: "player",
                            get children() {
                                return createComponent(Route, {
                                    path: ":id",
                                    component: Player
                                });
                            }
                        }) ];
                    }
                });
            }
        }));
    }, 0);
});

export { Announcer as a, useParams as i, convertItemsToTiles as n, useNavigate as r, Icon as t };