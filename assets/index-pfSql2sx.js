const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Player-_Zkv65Sa.js","assets/rolldown-runtime-Dacw0Uxr.js","assets/render-aZV73JYm.js","assets/utils-BjIhFEKN.js","assets/routing-BxhHJlOG.js","assets/web-BxFxPOyO.js","assets/state-DcDkvIU9.js","assets/Grid-D4ZXGgRF.js","assets/Column-Dwqo01zH.js","assets/mergeProps-WuPuVjcv.js","assets/chainFunctions-DeyLeCmP.js","assets/theme-CB9u0IsU.js","assets/Loops-CCDVK9sT.js","assets/Lazy-DcQzNu5w.js","assets/Row-vBX47WKv.js","assets/components-2WcEswJk.js","assets/styles-xHyKpT0b.js","assets/Infinite-XLJM2VaS.js","assets/TMDBGrid-D28hHaxi.js","assets/ContentBlock-CaqoHBwq.js","assets/dist-CSvW2KEN.js","assets/Portal-CKwB1ebT.js","assets/announcer-BGF9cbfX.js","assets/createFocusStack-BzUojhh1.js","assets/Matrix-Doy9VzJF.js","assets/Text-gtbQ9UKN.js","assets/TextPoster-UbiiO-HK.js","assets/Create-CiqNzge4.js","assets/Viewport-CIHRWE5z.js","assets/Positioning-BAUa88_h.js","assets/Layout-CrxF3sLd.js","assets/FocusBasics-Nsi8AbNI.js","assets/KeyHandling-CYKoRt-L.js","assets/Transitions-BQ9jN7tz.js","assets/Components-BCmR2btQ.js","assets/FocusHandling-Dk4QhTYU.js","assets/Gradients-izPcv9ux.js","assets/Flex-CRTR1mNF.js","assets/FlexGrow-BropKolX.js","assets/FlexMenu-BlxD0flU.js","assets/FlexSize-Cm9-pjnu.js","assets/FlexColumnSize-B2a1nnSv.js","assets/FlexColumn-BbEy34RZ.js","assets/ButtonsMaterial-COk8GVod.js","assets/SuperFlex-CNOJ3bg5.js","assets/Entity-BvSlcYMH.js","assets/People-AWZskBkP.js","assets/api-BLXElZOg.js","assets/ItemFormatter-Bx-xMo5c.js","assets/Firebolt-CrVzqT6F.js","assets/Login-WLMYWzO0.js","assets/Virtual-BMEIPlVQ.js","assets/Tags-Gf5XvDZ6.js","assets/ImagePerformance-D27EtnUP.js","assets/imagePerf-CiF-olb1.js","assets/LargeImagePerformance-FCvQJOub.js","assets/MixedImagePerformance-CDK58Ai8.js","assets/TextureCompressionPerformance-Bbdzvt5E.js","assets/ComplexFlex-C5Ls7eHF.js","assets/ComplexFlexCaps-Bd8DcEyN.js","assets/Benchmark-B2FpKgkD.js","assets/FPSCounter-CZf7fun2.js","assets/RendererVersions-CGJXZked.js","assets/TextCentering-BQiuVxJc.js","assets/CountdownTimer-BceO_tyg.js","assets/CustomButtons-D60EZHLT.js","assets/Icon-DWytCcY-.js","assets/Nested-CcD_pBzC.js","assets/KeepAlive-D2UxHdZp.js","assets/suspense-B35DSa9g.js"])))=>i.map(i=>d[i]);
import 'data:text/javascript,"assets/index-pfSql2sx.js";if(!import.meta.resolve)throw Error("import.meta.resolve not supported")';

export function __vite_legacy_guard() {
    import.meta.url, import("_").catch(() => 1), async function*() {}().next();
}

import { n as __exportAll } from "./rolldown-runtime-Dacw0Uxr.js";

import { $ as onMount, At as createTextureCoords, Bt as createWebGLContext, C as isElementNode, Ct as uploadCompressedTexture, D as Config, Dt as UNIT_TEXTURE_COORDS, Et as MAX_QUAD_BUFFER_SIZE, Ft as getNormalizedRgbaComponents, G as createRoot, H as createMemo, I as batch, J as getListener, L as children, Lt as TextureType, Mt as calcFactoredRadiusArray, N as Show, Nt as clampUnit, O as activeElement, Ot as WORDS_PER_QUAD, Pt as compareRect, Q as onCleanup, Rt as DIRTY_QUAD_BUFFER, S as hasFocus, T as isFunction, Tt as MAX_QUADS, V as createEffect, W as createResource, X as mergeProps, Y as getOwner, Z as on, _ as ElementNode, a as createElement, b as loadFonts, c as effect, ct as takeCanvasPrefetch, d as memo, f as rootNode, ft as defaultFontMetrics, g as use, h as spread, ht as CoreShaderNode, i as createComponent, it as untrack, jt as isHTMLImageElement, kt as createIndexBuffer, l as insert, lt as takeSdfPrefetch, m as setProp, mt as normalizeFontMetrics, nt as sharedConfig, o as createRenderer, pt as mapTextLayout, q as createSignal, s as createTextNode, tt as runWithOwner, u as insertNode, v as focusPath, wt as UpdateType, x as renderer, y as useFocusManager, z as createComputed, zt as assertTruthy } from "./render-aZV73JYm.js";

import { a as genGradientColors, c as LinearGradientTemplate, d as RoundedTemplate, f as HolePunchTemplate, i as WebGlShaderProgram, m as getBorderProps, o as Default, r as setupFPS, s as RadialGradientTemplate, t as FPSCounter, u as getShadowProps } from "./FPSCounter-CZf7fun2.js";

import { n as combineStyles, t as clamp } from "./utils-BjIhFEKN.js";

import { t as mergeProps$1 } from "./mergeProps-WuPuVjcv.js";

import { n as createScheduled, r as throttle, t as Announcer } from "./announcer-BGF9cbfX.js";

import { t as voidFn } from "./web-BxFxPOyO.js";

import { n as LazyRow, t as LazyColumn } from "./Lazy-DcQzNu5w.js";

import { a as withScrolling, d as navigableForwardFocus, f as navigableHandleNavigation, n as chainRefs, t as chainFunctions } from "./chainFunctions-DeyLeCmP.js";

import { t as Column } from "./Column-Dwqo01zH.js";

import { t as ContentBlock } from "./ContentBlock-CaqoHBwq.js";

import { n as useFocusStack, t as FocusStackProvider } from "./createFocusStack-BzUojhh1.js";

import { a as Hero, d as TitleRow, l as Thumbnail, p as List, t as AssetPanel } from "./components-2WcEswJk.js";

import { t as Icon } from "./Icon-DWytCcY-.js";

import { _ as saveCurrentDepth, a as createRouterContext, c as setInPreloadFn, d as useNavigate, g as notifyIfNotBlocked, h as keepDepth, i as createRouteContext, l as useLocation, m as createBeforeLeave, n as RouterContextObj, o as getIntent, p as usePreloadRoute, r as createBranches, s as getRouteMatches, t as RouteContextObj, u as useMatch } from "./routing-BxhHJlOG.js";

import { t as theme_default } from "./theme-CB9u0IsU.js";

import { r as styles_default } from "./styles-xHyKpT0b.js";

import { n as setGlobalBackground, t as globalBackground } from "./state-DcDkvIU9.js";

import { t as debounce } from "./dist-CSvW2KEN.js";

import { n as getImageUrl, t as api_default } from "./api-BLXElZOg.js";

import { t as convertItemsToTiles } from "./ItemFormatter-Bx-xMo5c.js";

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

var CoreContextTexture = class {
    constructor(memManager, textureSource) {
        this.textureSource = void 0, this.memManager = void 0, this.state = "freed", this.memManager = memManager, 
        this.textureSource = textureSource;
    }
    setTextureMemUse(byteSize) {
        this.memManager.setTextureMemUse(this.textureSource, byteSize);
    }
    get renderable() {
        return this.textureSource.renderable;
    }
}, CoreRenderer = class {
    constructor(options) {
        this.options = void 0, this.mode = void 0, this.defaultTextureCoords = void 0, this.stage = void 0, 
        this.options = options, this.stage = options.stage;
    }
}, WebGlShaderNode = class extends CoreShaderNode {
    constructor(shaderKey, config, program, stage, props) {
        super(shaderKey, config, stage, props), this.program = void 0, this.updater = void 0, 
        this.uniforms = {
            single: {},
            vec2: {},
            vec3: {},
            vec4: {}
        }, this.program = program, void 0 !== config.update && (this.updater = config.update, 
        this.update = () => {
            if (void 0 === this.props) return void this.updater(this.node, this.props);
            const prevKey = this.valueKey;
            if (this.valueKey = this.createValueKey(), prevKey === this.valueKey) return;
            prevKey.length > 0 && this.stage.shManager.mutateShaderValueUsage(prevKey, -1);
            const values = this.stage.shManager.getShaderValues(this.valueKey);
            void 0 === values ? (this.uniforms = {
                single: {},
                vec2: {},
                vec3: {},
                vec4: {}
            }, this.updater(this.node), this.stage.shManager.setShaderValues(this.valueKey, this.uniforms)) : this.uniforms = values;
        });
    }
    uniformRGBA(location, value) {
        this.uniform4fv(location, new Float32Array(getNormalizedRgbaComponents(value)));
    }
    uniform1f(location, value) {
        this.uniforms.single[location] = {
            method: "uniform1f",
            value: value
        };
    }
    uniform1fv(location, value) {
        this.uniforms.single[location] = {
            method: "uniform1fv",
            value: value
        };
    }
    uniform1i(location, value) {
        this.uniforms.single[location] = {
            method: "uniform1i",
            value: value
        };
    }
    uniform1iv(location, value) {
        this.uniforms.single[location] = {
            method: "uniform1iv",
            value: value
        };
    }
    uniform2f(location, v0, v1) {
        this.uniforms.vec2[location] = {
            method: "uniform2f",
            value: [ v0, v1 ]
        };
    }
    uniform2fv(location, value) {
        this.uniforms.single[location] = {
            method: "uniform2fv",
            value: value
        };
    }
    uniform2fa(location, value) {
        this.uniforms.vec2[location] = {
            method: "uniform2f",
            value: value
        };
    }
    uniform2i(location, v0, v1) {
        this.uniforms.vec2[location] = {
            method: "uniform2i",
            value: [ v0, v1 ]
        };
    }
    uniform2iv(location, value) {
        this.uniforms.single[location] = {
            method: "uniform2iv",
            value: value
        };
    }
    uniform3f(location, v0, v1, v2) {
        this.uniforms.vec3[location] = {
            method: "uniform3f",
            value: [ v0, v1, v2 ]
        };
    }
    uniform3fa(location, value) {
        this.uniforms.vec3[location] = {
            method: "uniform3f",
            value: value
        };
    }
    uniform3fv(location, value) {
        this.uniforms.single[location] = {
            method: "uniform3fv",
            value: value
        };
    }
    uniform3i(location, v0, v1, v2) {
        this.uniforms.vec3[location] = {
            method: "uniform3i",
            value: [ v0, v1, v2 ]
        };
    }
    uniform3iv(location, value) {
        this.uniforms.single[location] = {
            method: "uniform3iv",
            value: value
        };
    }
    uniform4f(location, v0, v1, v2, v3) {
        this.uniforms.vec4[location] = {
            method: "uniform4f",
            value: [ v0, v1, v2, v3 ]
        };
    }
    uniform4fa(location, value) {
        this.uniforms.vec4[location] = {
            method: "uniform4f",
            value: value
        };
    }
    uniform4fv(location, value) {
        this.uniforms.single[location] = {
            method: "uniform4fv",
            value: value
        };
    }
    uniform4i(location, v0, v1, v2, v3) {
        this.uniforms.vec4[location] = {
            method: "uniform4i",
            value: [ v0, v1, v2, v3 ]
        };
    }
    uniform4iv(location, value) {
        this.uniforms.single[location] = {
            method: "uniform4iv",
            value: value
        };
    }
    uniformMatrix2fv(location, value) {
        this.uniforms.single[location] = {
            method: "uniformMatrix2fv",
            value: value
        };
    }
    uniformMatrix3fv(location, value) {
        this.uniforms.single[location] = {
            method: "uniformMatrix3fv",
            value: value
        };
    }
    uniformMatrix4fv(location, value) {
        this.uniforms.single[location] = {
            method: "uniformMatrix4fv",
            value: value
        };
    }
}, Rounded = {
    props: RoundedTemplate.props,
    update(node) {
        this.uniform4fa("u_radius", calcFactoredRadiusArray(this.props.radius, node.w, node.h));
    },
    vertex: "\n  # ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  # else\n  precision mediump float;\n  # endif\n\n  attribute vec2 a_position;\n  attribute vec2 a_textureCoords;\n  attribute vec4 a_color;\n  attribute vec2 a_nodeCoords;\n\n  uniform vec2 u_resolution;\n  uniform float u_pixelRatio;\n\n  varying vec4 v_color;\n  varying vec2 v_textureCoords;\n  varying vec2 v_nodeCoords;\n\n  void main() {\n    vec2 normalized = a_position * u_pixelRatio;\n    vec2 screenSpace = vec2(2.0 / u_resolution.x, -2.0 / u_resolution.y);\n\n    v_color = a_color;\n    v_nodeCoords = a_nodeCoords;\n    v_textureCoords = a_textureCoords;\n\n    gl_Position = vec4(\n      normalized.x * screenSpace.x - 1.0,\n      normalized.y * -abs(screenSpace.y) + 1.0,\n      0.0,\n      1.0\n    );\n  }\n",
    fragment: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    uniform vec2 u_dimensions;\n    uniform float u_alpha;\n    uniform float u_pixelRatio;\n    uniform sampler2D u_texture;\n    uniform vec4 u_radius;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n    varying vec2 v_nodeCoords;\n\n    void main() {\n      vec2 halfDimensions = u_dimensions * 0.5;\n      vec2 boxUv = v_nodeCoords * u_dimensions - halfDimensions;\n\n      // Branchless radius selection based on quadrant\n      // x: TL, y: TR, z: BR, w: BL\n      vec2 stepVal = step(vec2(0.0), boxUv);\n      float r = mix(\n        mix(u_radius.x, u_radius.y, stepVal.x),\n        mix(u_radius.w, u_radius.z, stepVal.x),\n        stepVal.y\n      );\n\n      vec2 q = abs(boxUv) - halfDimensions + r;\n      float d = min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r;\n\n      float edgeWidth = 1.0 / u_pixelRatio;\n      float alpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, d);\n\n      vec4 color = texture2D(u_texture, v_textureCoords) * v_color;\n      gl_FragColor = color * alpha * u_alpha;\n    }\n  "
}, RoundedWithBorder = {
    props: {
        props: Object.assign({}, RoundedTemplate.props, getBorderProps("border"), {
            "border-fill": 0
        })
    }.props,
    update(node) {
        this.uniformRGBA("u_borderColor", this.props["border-color"]), this.uniformRGBA("u_fillColor", this.props["border-fill"]), 
        this.uniform4fa("u_borderWidth", this.props["border-w"]), this.uniform1f("u_borderGap", this.props["border-gap"]), 
        this.uniform1f("u_borderAlign", this.props["border-align"]), this.uniform4fa("u_radius", calcFactoredRadiusArray(this.props.radius, node.w, node.h));
    },
    vertex: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    attribute vec2 a_position;\n    attribute vec2 a_textureCoords;\n    attribute vec4 a_color;\n    attribute vec2 a_nodeCoords;\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n    uniform vec2 u_dimensions;\n\n    uniform vec4 u_radius;\n    uniform vec4 u_borderWidth;\n    uniform float u_borderGap;\n    uniform float u_borderAlign;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n    varying vec2 v_nodeCoords;\n\n    varying vec2 v_innerSize;\n    varying vec2 v_outerSize;\n    varying vec2 v_outerBorderUv;\n    varying vec2 v_innerBorderUv;\n    varying vec4 v_innerBorderRadius;\n    varying vec4 v_outerBorderRadius;\n    varying vec2 v_halfDimensions;\n\n    void main() {\n      vec2 vertexPos = a_position * u_pixelRatio;\n      vec2 screenSpace = vec2(2.0 / u_resolution.x, -2.0 / u_resolution.y);\n      vec2 edge = clamp(a_nodeCoords * 2.0 - vec2(1.0), -1.0, 1.0);\n      vec2 edgeOffset = vec2(0.0);\n      float borderZero = 1.0 - step(0.001, dot(abs(u_borderWidth), vec4(1.0)));\n\n      v_innerSize = vec2(0.0);\n      v_outerSize = vec2(0.0);\n\n      // Defaults for the zero-border case. The fragment shader returns before\n      // reading these, so this is belt-and-braces — but an unwritten varying\n      // is undefined in GLSL ES 1.0 and would render garbage on Mali if a\n      // future edit moved a border SDF above that early return.\n      v_outerBorderUv = vec2(0.0);\n      v_innerBorderUv = vec2(0.0);\n      v_outerBorderRadius = u_radius;\n      v_innerBorderRadius = u_radius;\n\n      if(borderZero == 0.0) {\n        vec4 adjustedBorderWidth = u_borderWidth - 1.0 + clamp(u_borderWidth, -1.0, 1.0);\n\n        float borderTop = adjustedBorderWidth.x;\n        float borderRight = adjustedBorderWidth.y;\n        float borderBottom = adjustedBorderWidth.z;\n        float borderLeft = adjustedBorderWidth.w;\n\n        vec2 borderSize = vec2(borderRight + borderLeft, borderTop + borderBottom);\n        vec2 extraSize = borderSize * u_borderAlign;\n        float gapLeft = step(0.001, borderLeft) * u_borderGap;\n        float gapRight = step(0.001, borderRight) * u_borderGap;\n        float gapTop = step(0.001, borderTop) * u_borderGap;\n        float gapBottom = step(0.001, borderBottom) * u_borderGap;\n        vec2 gapSize = vec2(gapLeft + gapRight, gapTop + gapBottom);\n\n        v_outerSize = (u_dimensions + gapSize + extraSize) * 0.5;\n        v_innerSize = v_outerSize - borderSize * 0.5;\n\n        // Use sign() to avoid branching\n        vec2 borderDiff = vec2(borderRight - borderLeft, borderBottom - borderTop);\n        vec2 signDiff = sign(borderDiff);\n        borderDiff = abs(borderDiff);\n\n        vec2 gapDiff = vec2(gapRight - gapLeft, gapBottom - gapTop);\n        vec2 signGapDiff = sign(gapDiff);\n        gapDiff = abs(gapDiff);\n\n        v_outerBorderUv = -signDiff * borderDiff * u_borderAlign * 0.5 - signGapDiff * gapDiff * 0.5;\n        v_innerBorderUv = v_outerBorderUv + signDiff * borderDiff * 0.5;\n\n        v_outerBorderRadius = vec4(\n          max(0.0, u_radius.x + max(borderTop * u_borderAlign + u_borderGap, borderLeft * u_borderAlign + u_borderGap)),\n          max(0.0, u_radius.y + max(borderTop * u_borderAlign + u_borderGap, borderRight * u_borderAlign + u_borderGap)),\n          max(0.0, u_radius.z + max(borderBottom * u_borderAlign + u_borderGap, borderRight * u_borderAlign + u_borderGap)),\n          max(0.0, u_radius.w + max(borderBottom * u_borderAlign + u_borderGap, borderLeft * u_borderAlign + u_borderGap))\n        );\n\n        v_innerBorderRadius = vec4(\n          max(0.0, v_outerBorderRadius.x - max(borderTop, borderLeft)),\n          max(0.0, v_outerBorderRadius.y - max(borderTop, borderRight)),\n          max(0.0, v_outerBorderRadius.z - max(borderBottom, borderRight)),\n          max(0.0, v_outerBorderRadius.w - max(borderBottom, borderLeft))\n        );\n\n        vec2 edgeOffsetExtra = step(u_dimensions * 0.5, v_outerSize) * edge * (extraSize + u_borderGap);\n        edgeOffset = edgeOffsetExtra;\n\n        vertexPos = (a_position + edge + edgeOffset) * u_pixelRatio;\n      }\n\n      gl_Position = vec4(vertexPos.x * screenSpace.x - 1.0, -sign(screenSpace.y) * (vertexPos.y * -abs(screenSpace.y)) + 1.0, 0.0, 1.0);\n\n      v_color = a_color;\n      v_nodeCoords = a_nodeCoords + (screenSpace + edgeOffset) / (u_dimensions);\n      v_textureCoords = a_textureCoords + (screenSpace + edgeOffset) / (u_dimensions);\n\n      v_halfDimensions = u_dimensions * 0.5;\n    }\n  ",
    fragment: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n    uniform float u_alpha;\n    uniform vec2 u_dimensions;\n    uniform sampler2D u_texture;\n\n    uniform vec4 u_radius;\n    uniform vec4 u_borderWidth;\n    uniform vec4 u_borderColor;\n    uniform vec4 u_fillColor;\n    uniform float u_borderGap;\n    uniform float u_borderAlign;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n    varying vec2 v_nodeCoords;\n\n    varying vec2 v_innerSize;\n    varying vec2 v_outerSize;\n    varying vec2 v_outerBorderUv;\n    varying vec2 v_innerBorderUv;\n    varying vec4 v_innerBorderRadius;\n    varying vec4 v_outerBorderRadius;\n    varying vec2 v_halfDimensions;\n\n    // Branchless quadrant radius select (r: x TL, y TR, z BR, w BL). This one\n    // is driven by the fragment's own position, so it genuinely diverges per\n    // fragment -- it must stay arithmetic, ternaries included.\n    float quadRadius(vec2 p, vec4 r) {\n      vec2 stepVal = step(vec2(0.0), p);\n      return mix(mix(r.x, r.y, stepVal.x), mix(r.w, r.z, stepVal.x), stepVal.y);\n    }\n\n    float roundedBox(vec2 p, vec2 s, vec4 r) {\n      float rad = quadRadius(p, r);\n      vec2 q = abs(p) - s + rad;\n      return (min(max(q.x, q.y), 0.0) + length(max(q, 0.0))) - rad;\n    }\n\n    void main() {\n      vec4 color = texture2D(u_texture, v_textureCoords) * v_color;\n      vec2 boxUv = v_nodeCoords.xy * u_dimensions - v_halfDimensions;\n      float borderZero = 1.0 - step(0.001, dot(abs(u_borderWidth), vec4(1.0)));\n      float edgeWidth = 1.0 / u_pixelRatio;\n\n      // Degenerate case: no border. Every fragment in the draw call takes this\n      // path -- the condition is uniform-driven, so there is no divergence to\n      // serialize, and skipping the two border SDFs saves two length()/sqrt\n      // evaluations per fragment on what is the most common quad in a TV rail.\n      if (borderZero == 1.0) {\n        float nodeDist = roundedBox(boxUv, v_halfDimensions - edgeWidth, u_radius);\n        float nodeAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, nodeDist);\n        gl_FragColor = (color * nodeAlpha) * u_alpha;\n        return;\n      }\n\n      float outerDist = roundedBox(boxUv + v_outerBorderUv, v_outerSize - edgeWidth, v_outerBorderRadius);\n      float innerDist = roundedBox(boxUv + v_innerBorderUv, v_innerSize - edgeWidth, v_innerBorderRadius);\n      float innerAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, innerDist);\n\n      // Second uniform-driven degenerate case: a border with no gap composites\n      // straight from the outer and inner SDFs and never needs the node SDF.\n      // outerAlpha lives in here because only this path uses it.\n      if (abs(u_borderGap) < 0.0001) {\n        float outerAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, outerDist);\n        vec4 resNoGap = mix(vec4(0.0), u_borderColor, outerAlpha * u_borderColor.a);\n        resNoGap = mix(resNoGap, color, innerAlpha);\n        gl_FragColor = resNoGap * u_alpha;\n        return;\n      }\n\n      float nodeDist = roundedBox(boxUv, v_halfDimensions - edgeWidth, u_radius);\n      float nodeAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, nodeDist);\n\n      float gapAlpha = max(0.0, innerAlpha - nodeAlpha);\n      float borderDist = max(-innerDist, outerDist);\n      float borderAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, borderDist);\n\n      vec4 resGap = (color * nodeAlpha) + (u_fillColor * gapAlpha);\n      resGap = mix(resGap, u_borderColor, borderAlpha * u_borderColor.a);\n      gl_FragColor = resGap * u_alpha;\n    }\n  "
}, RoundedWithBorderAndShadow = {
    props: {
        props: Object.assign({}, RoundedTemplate.props, getBorderProps("border"), getShadowProps("shadow"))
    }.props,
    update(node) {
        const props = this.props;
        this.uniformRGBA("u_borderColor", props["border-color"]), this.uniform4fa("u_borderWidth", props["border-w"]), 
        this.uniform1f("u_borderGap", this.props["border-gap"]), this.uniform1f("u_borderAlign", this.props["border-align"]), 
        this.uniformRGBA("u_shadowColor", props["shadow-color"]), this.uniform4fa("u_shadow", props["shadow-projection"]), 
        this.uniform4fa("u_radius", calcFactoredRadiusArray(props.radius, node.w, node.h));
    },
    vertex: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    attribute vec2 a_position;\n    attribute vec2 a_textureCoords;\n    attribute vec4 a_color;\n    attribute vec2 a_nodeCoords;\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n    uniform vec2 u_dimensions;\n\n    uniform vec4 u_shadow;\n    uniform vec4 u_radius;\n    uniform vec4 u_borderWidth;\n    uniform float u_borderGap;\n    uniform float u_borderAlign;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n    varying vec2 v_nodeCoords;\n\n    varying vec2 v_innerSize;\n    varying vec2 v_outerSize;\n    varying vec2 v_outerBorderUv;\n    varying vec2 v_innerBorderUv;\n    varying vec4 v_innerBorderRadius;\n    varying vec4 v_outerBorderRadius;\n    varying vec2 v_halfDimensions;\n\n    void main() {\n      vec2 screenSpace = vec2(2.0 / u_resolution.x,  -2.0 / u_resolution.y);\n      vec2 edge = clamp(a_nodeCoords * 2.0 - vec2(1.0), -1.0, 1.0);\n      float borderZero = 1.0 - step(0.001, dot(abs(u_borderWidth), vec4(1.0)));\n\n      vec2 edgeOffset = edge * ((u_shadow.w * 2.0)+ u_shadow.z) + u_shadow.xy;\n      vec2 vertexPos = (a_position + edge + edgeOffset) * u_pixelRatio;\n\n      v_innerSize = vec2(0.0);\n      v_outerSize = vec2(0.0);\n\n      // Defaults for the zero-border case. The fragment shader returns before\n      // reading these, so this is belt-and-braces — but an unwritten varying\n      // is undefined in GLSL ES 1.0 and would render garbage on Mali if a\n      // future edit moved a border SDF above that early return.\n      v_outerBorderUv = vec2(0.0);\n      v_innerBorderUv = vec2(0.0);\n      v_outerBorderRadius = u_radius;\n      v_innerBorderRadius = u_radius;\n\n      if(borderZero == 0.0) {\n        vec4 adjustedBorderWidth = u_borderWidth - 1.0 + clamp(u_borderWidth, -1.0, 1.0);\n\n        float borderTop = adjustedBorderWidth.x;\n        float borderRight = adjustedBorderWidth.y;\n        float borderBottom = adjustedBorderWidth.z;\n        float borderLeft = adjustedBorderWidth.w;\n\n        vec2 borderSize = vec2(borderRight + borderLeft, borderTop + borderBottom);\n        vec2 extraSize = borderSize * u_borderAlign;\n        float gapLeft = step(0.001, borderLeft) * u_borderGap;\n        float gapRight = step(0.001, borderRight) * u_borderGap;\n        float gapTop = step(0.001, borderTop) * u_borderGap;\n        float gapBottom = step(0.001, borderBottom) * u_borderGap;\n        vec2 gapSize = vec2(gapLeft + gapRight, gapTop + gapBottom);\n\n        v_outerSize = (u_dimensions + gapSize + extraSize) * 0.5;\n        v_innerSize = v_outerSize - borderSize * 0.5;\n\n        // Use sign() to avoid branching\n        vec2 borderDiff = vec2(borderRight - borderLeft, borderBottom - borderTop);\n        vec2 signDiff = sign(borderDiff);\n        borderDiff = abs(borderDiff);\n\n        vec2 gapDiff = vec2(gapRight - gapLeft, gapBottom - gapTop);\n        vec2 signGapDiff = sign(gapDiff);\n        gapDiff = abs(gapDiff);\n\n        v_outerBorderUv = -signDiff * borderDiff * u_borderAlign * 0.5 - signGapDiff * gapDiff * 0.5;\n        v_innerBorderUv = v_outerBorderUv + signDiff * borderDiff * 0.5;\n\n        v_outerBorderRadius = vec4(\n          max(0.0, u_radius.x + max(borderTop * u_borderAlign + u_borderGap, borderLeft * u_borderAlign + u_borderGap)),\n          max(0.0, u_radius.y + max(borderTop * u_borderAlign + u_borderGap, borderRight * u_borderAlign + u_borderGap)),\n          max(0.0, u_radius.z + max(borderBottom * u_borderAlign + u_borderGap, borderRight * u_borderAlign + u_borderGap)),\n          max(0.0, u_radius.w + max(borderBottom * u_borderAlign + u_borderGap, borderLeft * u_borderAlign + u_borderGap))\n        );\n\n        v_innerBorderRadius = vec4(\n          max(0.0, v_outerBorderRadius.x - max(borderTop, borderLeft)),\n          max(0.0, v_outerBorderRadius.y - max(borderTop, borderRight)),\n          max(0.0, v_outerBorderRadius.z - max(borderBottom, borderRight)),\n          max(0.0, v_outerBorderRadius.w - max(borderBottom, borderLeft))\n        );\n\n        vec2 edgeOffsetExtra = step(u_dimensions * 0.5, v_outerSize) * edge * (extraSize + u_borderGap);\n        edgeOffset += edgeOffsetExtra;\n\n        vertexPos = (a_position + edge + edgeOffset) * u_pixelRatio;\n      }\n\n      gl_Position = vec4(vertexPos.x * screenSpace.x - 1.0, -sign(screenSpace.y) * (vertexPos.y * -abs(screenSpace.y)) + 1.0, 0.0, 1.0);\n\n      v_halfDimensions = u_dimensions * 0.5;\n      v_color = a_color;\n      v_nodeCoords = a_nodeCoords + (screenSpace + edgeOffset) / (u_dimensions);\n      v_textureCoords = a_textureCoords + (screenSpace + edgeOffset) / (u_dimensions);\n    }\n  ",
    fragment: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n    uniform float u_alpha;\n    uniform vec2 u_dimensions;\n    uniform sampler2D u_texture;\n\n    uniform vec4 u_radius;\n    uniform vec4 u_borderWidth;\n    uniform vec4 u_borderColor;\n    uniform vec4 u_shadowColor;\n    uniform vec4 u_shadow;\n    uniform float u_borderGap;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n    varying vec2 v_nodeCoords;\n\n    varying vec2 v_innerSize;\n    varying vec2 v_outerSize;\n    varying vec2 v_outerBorderUv;\n    varying vec2 v_innerBorderUv;\n    varying vec4 v_innerBorderRadius;\n    varying vec4 v_outerBorderRadius;\n    varying vec2 v_halfDimensions;\n\n    // Branchless quadrant radius select (r: x TL, y TR, z BR, w BL) --\n    // Mali 400-class fragment pipelines serialize any branch, ternaries included.\n    float quadRadius(vec2 p, vec4 r) {\n      vec2 stepVal = step(vec2(0.0), p);\n      return mix(mix(r.x, r.y, stepVal.x), mix(r.w, r.z, stepVal.x), stepVal.y);\n    }\n\n    float roundedBox(vec2 p, vec2 s, vec4 r) {\n      float rad = quadRadius(p, r);\n      vec2 q = abs(p) - s + rad;\n      return (min(max(q.x, q.y), 0.0) + length(max(q, 0.0))) - rad;\n    }\n\n    float shadowBox(vec2 p, vec2 s, vec4 r) {\n      float rad = quadRadius(p, r);\n      vec2 q = abs(p) - s + rad;\n      float dist = min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - rad;\n      return 1.0 - smoothstep(-u_shadow.w, u_shadow.w + u_shadow.z, dist);\n    }\n\n    void main() {\n      vec4 color = texture2D(u_texture, v_textureCoords) * v_color;\n      vec2 boxUv = v_nodeCoords.xy * u_dimensions - v_halfDimensions;\n      float borderZero = 1.0 - step(0.001, dot(abs(u_borderWidth), vec4(1.0)));\n      float edgeWidth = 1.0 / u_pixelRatio;\n\n      // Degenerate case: no border. Uniform-driven, so the whole draw call\n      // takes it together -- no divergence to serialize -- and it drops the\n      // two border SDFs, halving the length()/sqrt count per fragment.\n      if (borderZero == 1.0) {\n        float nodeDist = roundedBox(boxUv, v_halfDimensions - edgeWidth, u_radius);\n        float nodeAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, nodeDist);\n        float shadowAlpha = shadowBox(\n          boxUv - u_shadow.xy,\n          v_halfDimensions + u_shadow.w - edgeWidth,\n          u_radius + u_shadow.z\n        );\n        gl_FragColor = mix(u_shadowColor * shadowAlpha, color, nodeAlpha) * u_alpha;\n        return;\n      }\n\n      // Shadow geometry select, branchless: when the border grows the quad\n      // beyond the node (outer size exceeds half dimensions on either axis)\n      // the shadow hugs the outer border box, otherwise the node box. Kept as\n      // a step()/mix() parameter select into ONE shadowBox call -- it picks\n      // arguments rather than skipping work, so a branch would buy nothing.\n      float outerSel = max(\n        step(v_halfDimensions.x, v_outerSize.x),\n        step(v_halfDimensions.y, v_outerSize.y)\n      );\n      float shadowAlpha = shadowBox(\n        boxUv + v_outerBorderUv * outerSel - u_shadow.xy,\n        mix(v_halfDimensions, v_outerSize, outerSel) + u_shadow.w - edgeWidth,\n        mix(u_radius, v_outerBorderRadius, outerSel) + u_shadow.z\n      );\n      vec4 shadowBase = u_shadowColor * shadowAlpha;\n\n      float outerDist = roundedBox(boxUv + v_outerBorderUv, v_outerSize - edgeWidth, v_outerBorderRadius);\n      float innerDist = roundedBox(boxUv + v_innerBorderUv, v_innerSize - edgeWidth, v_innerBorderRadius);\n\n      // Second uniform-driven degenerate case: a border with no gap never\n      // needs the node SDF. The edge alphas live in here because the gap path\n      // below composites from the raw distances instead.\n      if (abs(u_borderGap) < 0.0001) {\n        float outerAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, outerDist);\n        float innerAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, innerDist);\n        vec4 resNoGap = mix(shadowBase, u_borderColor, outerAlpha * u_borderColor.a);\n        resNoGap = mix(resNoGap, color, innerAlpha);\n        gl_FragColor = resNoGap * u_alpha;\n        return;\n      }\n\n      float nodeDist = roundedBox(boxUv, v_halfDimensions - edgeWidth, u_radius);\n      float nodeAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, nodeDist);\n\n      float borderDist = max(-innerDist, outerDist);\n      float borderAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, borderDist);\n\n      vec4 resFill = mix(shadowBase, color, nodeAlpha);\n      vec4 resGap = mix(resFill, u_borderColor, borderAlpha * u_borderColor.a);\n      gl_FragColor = resGap * u_alpha;\n    }\n  "
}, RoundedWithShadow = {
    props: {
        props: Object.assign({}, RoundedTemplate.props, getShadowProps("shadow"))
    }.props,
    update(node) {
        this.uniformRGBA("u_shadow_color", this.props["shadow-color"]), this.uniform4fa("u_shadow", this.props["shadow-projection"]), 
        this.uniform4fa("u_radius", calcFactoredRadiusArray(this.props.radius, node.w, node.h));
    },
    vertex: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    attribute vec2 a_position;\n    attribute vec2 a_textureCoords;\n    attribute vec4 a_color;\n    attribute vec2 a_nodeCoords;\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n    uniform vec2 u_dimensions;\n\n    uniform vec4 u_shadow;\n    uniform vec4 u_radius;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n\n    varying vec2 v_boxUv;\n    varying vec2 v_boxSize;\n    varying vec2 v_boxSmooth;\n    varying vec2 v_shadowBox;\n    varying vec2 v_shadowSize;\n    varying vec4 v_shadowRadius;\n    varying vec2 v_shadowSmooth;\n\n    void main() {\n      vec2 screenSpace = vec2(2.0 / u_resolution.x,  -2.0 / u_resolution.y);\n      vec2 outerEdge = clamp(a_nodeCoords * 2.0 - vec2(1.0), -1.0, 1.0);\n\n      vec2 padding = vec2(max(0.0, u_shadow.w) + u_shadow.z);\n      vec2 offsetShift = mix(min(vec2(0.0), u_shadow.xy), max(vec2(0.0), u_shadow.xy), (outerEdge + 1.0) * 0.5);\n      vec2 shadowEdge = outerEdge * padding + offsetShift;\n\n      vec2 vertexPos = (a_position + outerEdge + shadowEdge) * u_pixelRatio;\n      gl_Position = vec4(vertexPos.x * screenSpace.x - 1.0, -sign(screenSpace.y) * (vertexPos.y * -abs(screenSpace.y)) + 1.0, 0.0, 1.0);\n\n      v_color = a_color;\n      v_textureCoords = a_textureCoords + (screenSpace + shadowEdge) / (u_dimensions);\n\n      float edgeWidth = 1.0 / u_pixelRatio;\n      vec2 halfDimensions = u_dimensions * 0.5;\n\n      v_boxUv = (a_nodeCoords + (screenSpace + shadowEdge) / (u_dimensions)) * u_dimensions - halfDimensions;\n      v_boxSize = halfDimensions - edgeWidth;\n      v_boxSmooth = vec2(-0.5 * edgeWidth, 0.5 * edgeWidth);\n\n      v_shadowBox = v_boxUv - u_shadow.xy;\n      v_shadowSize = halfDimensions + u_shadow.w - edgeWidth;\n      v_shadowRadius = max(vec4(0.0), u_radius + u_shadow.w);\n      v_shadowSmooth = vec2(-u_shadow.z, u_shadow.z + 0.001);\n    }\n  ",
    fragment: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    uniform float u_alpha;\n    uniform sampler2D u_texture;\n\n    uniform vec4 u_shadow_color;\n    uniform vec4 u_radius;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n\n    varying vec2 v_boxUv;\n    varying vec2 v_boxSize;\n    varying vec2 v_boxSmooth;\n    varying vec2 v_shadowBox;\n    varying vec2 v_shadowSize;\n    varying vec4 v_shadowRadius;\n    varying vec2 v_shadowSmooth;\n\n    // Branchless quadrant radius select (r: x TL, y TR, z BR, w BL) --\n    // Mali 400-class fragment pipelines serialize any branch, ternaries included.\n    float quadRadius(vec2 p, vec4 r) {\n      vec2 stepVal = step(vec2(0.0), p);\n      return mix(mix(r.x, r.y, stepVal.x), mix(r.w, r.z, stepVal.x), stepVal.y);\n    }\n\n    float roundedBox(vec2 p, vec2 s, vec4 r) {\n      float rad = quadRadius(p, r);\n      vec2 q = abs(p) - s + rad;\n      return (min(max(q.x, q.y), 0.0) + length(max(q, 0.0))) - rad;\n    }\n\n    float shadowBox(vec2 p, vec2 s, vec4 r) {\n      float rad = quadRadius(p, r);\n      vec2 q = abs(p) - s + rad;\n      float dist = min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - rad;\n      return 1.0 - smoothstep(v_shadowSmooth.x, v_shadowSmooth.y, dist);\n    }\n\n    void main() {\n      vec4 color = texture2D(u_texture, v_textureCoords) * v_color;\n\n      float boxDist = roundedBox(v_boxUv, v_boxSize, u_radius);\n      float roundedAlpha = 1.0 - smoothstep(v_boxSmooth.x, v_boxSmooth.y, boxDist);\n\n      // Uniform-driven gate: a fully transparent shadow contributes nothing,\n      // so skip its SDF entirely rather than multiplying the result by zero.\n      // The condition is the same for every fragment in the draw call.\n      vec4 resColor = vec4(0.0);\n      if (u_shadow_color.a >= 0.0001) {\n        float shadowAlpha = shadowBox(v_shadowBox, v_shadowSize, v_shadowRadius);\n        resColor = u_shadow_color * shadowAlpha;\n      }\n\n      resColor = mix(resColor, color, min(color.a, roundedAlpha));\n      gl_FragColor = resColor * u_alpha;\n    }\n  "
}, HolePunch = {
    props: HolePunchTemplate.props,
    update() {
        const props = this.props;
        this.uniform2f("u_pos", props.x, props.y), this.uniform2f("u_size", .5 * props.w, .5 * props.h), 
        this.uniform4fa("u_radius", calcFactoredRadiusArray(props.radius, props.w, props.h));
    },
    getCacheMarkers: props => `radiusArray:${Array.isArray(props.radius)}`,
    fragment: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    uniform float u_alpha;\n    uniform float u_pixelRatio;\n    uniform vec2 u_dimensions;\n    uniform sampler2D u_texture;\n\n    uniform vec2 u_size;\n    uniform vec2 u_pos;\n\n    uniform vec4 u_radius;\n\n    uniform vec4 u_color;\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n\n    void main() {\n      vec4 color = texture2D(u_texture, v_textureCoords) * v_color;\n      vec2 p = (v_textureCoords.xy * u_dimensions.xy - u_pos) - u_size;\n\n      // Branchless radius selection based on quadrant\n      // x: TL, y: TR, z: BR, w: BL\n      vec2 stepVal = step(vec2(0.0), p);\n      float r = mix(\n        mix(u_radius.x, u_radius.y, stepVal.x),\n        mix(u_radius.w, u_radius.z, stepVal.x),\n        stepVal.y\n      );\n\n      p = abs(p) - u_size + r;\n      float dist = min(max(p.x, p.y), 0.0) + length(max(p, 0.0)) - r + 2.0;\n      float roundedAlpha = 1.0 - smoothstep(0.0, u_pixelRatio, dist);\n      gl_FragColor = mix(color, vec4(0.0), min(color.a, roundedAlpha));\n    }\n  "
}, LinearGradient = {
    props: LinearGradientTemplate.props,
    update(node) {
        const props = this.props, angle = props.angle - Math.PI / 180 * 90, c = Math.cos(angle), s = Math.sin(angle), w = node.w, h = node.h, lineDist = Math.abs(w * c) + Math.abs(h * s), gx = -lineDist * c, gy = -lineDist * s, gg = gx * gx + gy * gy, invGG = gg > 0 ? 1 / gg : 0, fx = .5 * lineDist * c + .5 * w, fy = .5 * lineDist * s + .5 * h;
        this.uniform2f("u_grad_a", w * gx * invGG, h * gy * invGG), this.uniform1f("u_grad_b", -(fx * gx + fy * gy) * invGG), 
        this.uniform1fv("u_stops", new Float32Array(props.stops));
        const colors = [];
        for (let i = 0; i < props.colors.length; i++) {
            const norm = getNormalizedRgbaComponents(props.colors[i]);
            colors.push(norm[0], norm[1], norm[2], norm[3]);
        }
        this.uniform4fv("u_colors", new Float32Array(colors));
    },
    getCacheMarkers: props => `colors:${props.colors.length}`,
    fragment: (renderer, props) => `\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    #define MAX_STOPS ${props.colors.length}\n\n    uniform float u_alpha;\n\n    uniform sampler2D u_texture;\n\n    uniform vec2 u_grad_a;\n    uniform float u_grad_b;\n    uniform float u_stops[MAX_STOPS];\n    uniform vec4 u_colors[MAX_STOPS];\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n\n    vec4 getGradientColor(float dist) {\n      dist = clamp(dist, 0.0, 1.0);\n      ${genGradientColors(props.colors.length)}\n      return colorOut;\n    }\n\n    void main() {\n      vec4 color = texture2D(u_texture, v_textureCoords) * v_color;\n      float dist = dot(v_textureCoords, u_grad_a) + u_grad_b;\n      vec4 colorOut = getGradientColor(dist);\n      color = mix(color, colorOut, clamp(colorOut.a, 0.0, 1.0));\n      gl_FragColor = color * u_alpha;\n    }\n  `
}, RadialGradient = {
    props: RadialGradientTemplate.props,
    update(node) {
        const props = this.props;
        this.uniform2f("u_projection", props.pivot[0] * node.w, props.pivot[1] * node.h), 
        this.uniform2f("u_size", props.w, props.h), this.uniform1fv("u_stops", new Float32Array(props.stops));
        const colors = [];
        for (let i = 0; i < props.colors.length; i++) {
            const norm = getNormalizedRgbaComponents(props.colors[i]);
            colors.push(norm[0], norm[1], norm[2], norm[3]);
        }
        this.uniform4fv("u_colors", new Float32Array(colors));
    },
    getCacheMarkers: props => `colors:${props.colors.length}`,
    fragment: (renderer, props) => `\n      # ifdef GL_FRAGMENT_PRECISION_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      #define MAX_STOPS ${props.colors.length}\n\n      uniform float u_alpha;\n      uniform vec2 u_dimensions;\n\n      uniform sampler2D u_texture;\n\n      uniform vec2 u_projection;\n      uniform vec2 u_size;\n\n      uniform float u_stops[MAX_STOPS];\n      uniform vec4 u_colors[MAX_STOPS];\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoords;\n      varying vec2 v_nodeCoords;\n\n      vec4 getGradientColor(float dist) {\n        dist = clamp(dist, 0.0, 1.0);\n        ${genGradientColors(props.colors.length)}\n        return colorOut;\n      }\n\n      void main() {\n        vec4 color = texture2D(u_texture, v_textureCoords) * v_color;\n        vec2 point = v_nodeCoords.xy * u_dimensions;\n        float dist = length((point - u_projection) / u_size);\n\n        vec4 colorOut = getGradientColor(dist);\n        color = mix(color, colorOut, clamp(colorOut.a, 0.0, 1.0));\n        gl_FragColor = color * u_alpha;\n      }\n    `
}, RadialProgressTemplate = {
    props: {
        width: 8,
        radius: 0,
        progress: {
            default: 1,
            resolve(value) {
                return void 0 === value ? this.default : value < 0 ? 0 : value > 1 ? 1 : value;
            }
        },
        startAngle: -Math.PI / 2,
        direction: 1,
        colors: {
            default: [ 4294967295 ],
            resolve(value) {
                return void 0 !== value && value.length > 0 ? value : [].concat(this.default);
            }
        },
        stops: {
            default: [ 0 ],
            resolve(value, props) {
                if (void 0 !== value && value.length === props.colors.length) return value;
                void 0 === value && (value = []);
                const len = props.colors.length;
                if (1 === len) return value[0] = 0, value.length = 1, value;
                for (let i = 0; i < len; i++) value[i] = i * (1 / (len - 1));
                return value.length = len, value;
            }
        },
        trackColor: 0,
        cap: 1,
        duration: {
            default: 0,
            resolve(value) {
                return void 0 === value ? this.default : value < 0 ? 0 : value;
            }
        },
        countdown: 1
    }
}, RadialProgress = {
    props: RadialProgressTemplate.props,
    time: !0,
    update(node) {
        const props = this.props, autoRadius = .5 * Math.min(node.w, node.h) - .5 * props.width, radius = props.radius > 0 ? props.radius : autoRadius;
        this.uniform2f("u_center", .5 * node.w, .5 * node.h), this.uniform1f("u_radius", radius), 
        this.uniform1f("u_width", props.width), this.uniform1f("u_progress", props.progress), 
        this.uniform1f("u_startAngle", props.startAngle), this.uniform1f("u_direction", props.direction), 
        this.uniform1f("u_duration", props.duration), this.uniform1f("u_countdown", props.countdown), 
        this.uniform1fv("u_stops", new Float32Array(props.stops));
        const colors = [];
        for (let i = 0; i < props.colors.length; i++) {
            const norm = getNormalizedRgbaComponents(props.colors[i]);
            colors.push(norm[0], norm[1], norm[2], norm[3]);
        }
        this.uniform4fv("u_colors", new Float32Array(colors));
        const trackNorm = getNormalizedRgbaComponents(props.trackColor);
        this.uniform4f("u_trackColor", trackNorm[0], trackNorm[1], trackNorm[2], trackNorm[3]);
    },
    getCacheMarkers: props => `colors:${props.colors.length}|cap:${props.cap}|track:${0 !== props.trackColor ? 1 : 0}`,
    fragment(renderer, props) {
        const maxStops = Math.max(props.colors.length, 1);
        return `\n      # ifdef GL_FRAGMENT_PRECISION_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      #define MAX_STOPS ${maxStops}\n      #define CAP_ROUND ${props.cap}\n      #define HAS_TRACK ${0 !== props.trackColor ? 1 : 0}\n\n      #define TWO_PI 6.28318530717958647692\n\n      uniform float u_alpha;\n      uniform float u_time;\n      uniform vec2 u_dimensions;\n      uniform sampler2D u_texture;\n\n      uniform vec2 u_center;\n      uniform float u_radius;\n      uniform float u_width;\n      uniform float u_progress;\n      uniform float u_startAngle;\n      uniform float u_direction;\n      uniform float u_duration;\n      uniform float u_countdown;\n\n      uniform float u_stops[MAX_STOPS];\n      uniform vec4 u_colors[MAX_STOPS];\n      uniform vec4 u_trackColor;\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoords;\n      varying vec2 v_nodeCoords;\n\n      vec4 getGradientColor(float dist) {\n        dist = clamp(dist, 0.0, 1.0);\n        ${genGradientColors(maxStops)}\n        return colorOut;\n      }\n\n      // Coverage of a disc centered at \`c\` with radius \`r\` at pixel \`p\` (with 1px AA)\n      float discCoverage(vec2 p, vec2 c, float r) {\n        return 1.0 - smoothstep(r - 1.0, r + 1.0, length(p - c));\n      }\n\n      void main() {\n        vec4 base = texture2D(u_texture, v_textureCoords) * v_color;\n\n        // Effective progress: when u_duration > 0 the shader self-animates from\n        // u_time, otherwise we use the static u_progress prop. countdown == 1\n        // drains (1 -> 0), countdown == 0 fills (0 -> 1).\n        // Branchless (Mali 400 serializes uniform branches): the mix()-guarded\n        // denominator keeps the division finite when u_duration == 0 -- a\n        // max()-clamped epsilon would overflow fp16 mediump to Inf/NaN.\n        float hasDuration = step(0.0001, u_duration);\n        float cyclePos = fract(u_time / mix(1.0, u_duration, hasDuration)) * hasDuration;\n        float animProgress = mix(cyclePos, 1.0 - cyclePos, step(0.5, u_countdown));\n        float progress = mix(u_progress, animProgress, hasDuration);\n\n        vec2 p = v_nodeCoords.xy * u_dimensions - u_center;\n        float dist = length(p);\n        float halfW = u_width * 0.5;\n\n        // Ring coverage: 1 inside the stroke band, 0 outside (with 1px AA on both edges)\n        float ringCoverage =\n          smoothstep(u_radius - halfW - 1.0, u_radius - halfW + 1.0, dist) *\n          (1.0 - smoothstep(u_radius + halfW - 1.0, u_radius + halfW + 1.0, dist));\n\n        // Angle along the arc, normalized to [0, 1) starting at u_startAngle\n        float ang = atan(p.y, p.x);\n        float t = mod((ang - u_startAngle) * u_direction, TWO_PI) / TWO_PI;\n\n        // Filled arc coverage (1 if in filled arc, else 0). When progress >= 1 the\n        // whole ring is filled regardless of \`t\` -- guards against the mod() seam.\n        float arcCoverage = max(step(1.0, progress), step(t, progress));\n        float fillCoverage = ringCoverage * arcCoverage;\n\n        #if CAP_ROUND\n          // Round caps: discs of radius halfW at the start and head of the arc\n          float a0 = u_startAngle;\n          float a1 = u_startAngle + u_direction * progress * TWO_PI;\n          vec2 cap0 = vec2(cos(a0), sin(a0)) * u_radius;\n          vec2 cap1 = vec2(cos(a1), sin(a1)) * u_radius;\n          float capMask = max(discCoverage(p, cap0, halfW), discCoverage(p, cap1, halfW));\n          // Caps only visible when there's something to cap (progress > 0 and < 1).\n          float capGate = step(0.0001, progress) * step(progress, 0.9999);\n          fillCoverage = max(fillCoverage, capMask * capGate);\n        #endif\n\n        // Sample gradient. Normalize \`t\` to the *filled* portion so the gradient\n        // spans the visible arc end-to-end regardless of progress. mix()-guarded\n        // denominator: safe at progress == 0 without fp16 overflow.\n        float hasProgress = step(0.000001, progress);\n        float gradT = clamp(t / mix(1.0, progress, hasProgress), 0.0, 1.0) * hasProgress;\n        vec4 fillCol = getGradientColor(gradT);\n\n        // Composite: track under fill (if track enabled), both gated by ringCoverage.\n        // We work in PREMULTIPLIED-alpha space here so AA edges composite cleanly\n        // against \`base\` -- mix(base.rgb, layer.rgb, la) with a coverage-scaled\n        // \`layer\` would multiply layer.rgb by coverage a second time and darken\n        // the AA falloff (see issue #36). The renderer's blend func is\n        // (ONE, ONE_MINUS_SRC_ALPHA), which expects premultiplied output.\n        vec4 fillPM = vec4(fillCol.rgb * fillCol.a, fillCol.a);\n        vec4 layer = vec4(0.0);\n        #if HAS_TRACK\n          vec4 trackPM = vec4(u_trackColor.rgb * u_trackColor.a, u_trackColor.a);\n          float trackCoverage = ringCoverage * (1.0 - fillCoverage);\n          layer = trackPM * trackCoverage + fillPM * fillCoverage;\n        #else\n          layer = fillPM * fillCoverage;\n        #endif\n\n        // Apply node opacity to the introduced ring/track colors. They come\n        // from u_colors / u_trackColor and do not carry worldAlpha, so without\n        // this a fading RadialProgress node would keep its ring fully opaque.\n        // \`base\` already includes worldAlpha (via v_color), so it is left as-is\n        // to avoid double-applying. Scaling a premultiplied layer is valid.\n        layer *= u_alpha;\n\n        // Premultiplied "over": out = src + dst*(1 - src.a). The output stays\n        // visible on a fully-transparent \`base\` because layer brings its own alpha.\n        float la = clamp(layer.a, 0.0, 1.0);\n        vec3 blended = base.rgb * (1.0 - la) + layer.rgb;\n        float outA = base.a + la * (1.0 - base.a);\n        gl_FragColor = vec4(blended, outA);\n      }\n    `;
    }
}, invisibleChars = /[\u200B\u200C\u200D\uFEFF\u00AD\u2060]/g;

function hasZeroWidthSpace(space) {
    return !0 === invisibleChars.test(space);
}

var measureContext$1, SdfFontHandler_exports = __exportAll({
    MAX_FONT_LOAD_RETRIES: () => 3,
    canRenderFont: () => canRenderFont$1,
    getAtlas: () => getAtlas,
    getFontData: () => getFontData,
    getFontFamilies: () => getFontFamilies$1,
    getFontMetrics: () => getFontMetrics$1,
    getLoadedFonts: () => getLoadedFonts,
    getMaxCharHeight: () => getMaxCharHeight,
    init: () => init$3,
    isFontLoaded: () => isFontLoaded$1,
    loadFont: () => loadFont$1,
    measureText: () => measureText$1,
    processFontMetrics: () => processFontMetrics$1,
    stopWaitingForFont: () => stopWaitingForFont$1,
    type: () => "sdf",
    unloadFont: () => unloadFont,
    waitingForFont: () => waitingForFont$1
}), fontCache$1 = new Map, fontLoadPromises$1 = new Map, normalizedMetrics$1 = new Map, nodesWaitingForFont$1 = Object.create(null), initialized$1 = !1, processFontData$1 = (fontFamily, fontData, atlasTexture, metrics) => {
    const glyphMap = (chars => {
        const glyphMap = new Map;
        let maxCharHeight = 0, i = 0;
        const length = chars.length;
        for (;i < length; ) {
            const glyph = chars[i];
            if (i++, void 0 === glyph) continue;
            glyphMap.set(glyph.id, glyph);
            const charHeight = glyph.yoffset + glyph.height;
            charHeight > maxCharHeight && (maxCharHeight = charHeight);
        }
        return glyphMap;
    })(fontData.chars), kernings = (kernings => {
        const kerningTable = {};
        let i = 0;
        const length = kernings.length;
        for (;i < length; ) {
            const kerning = kernings[i];
            if (i++, void 0 === kerning) continue;
            const second = kerning.second;
            let firsts = kerningTable[second];
            void 0 === firsts && (firsts = {}, kerningTable[second] = firsts), firsts[kerning.first] = kerning.amount;
        }
        return kerningTable;
    })(fontData.kernings);
    let maxCharHeight = 0, i = 0;
    const length = fontData.chars.length;
    for (;i < length; ) {
        const glyph = fontData.chars[i];
        if (void 0 !== glyph) {
            const charHeight = glyph.yoffset + glyph.height;
            charHeight > maxCharHeight && (maxCharHeight = charHeight);
        }
        i++;
    }
    if (void 0 === metrics && void 0 === fontData.lightningMetrics && console.warn(`Font metrics not found for SDF font ${fontFamily}. Make sure you are using the latest version of the Lightning 3 msdf-generator tool to generate your SDF fonts. Using default metrics.`), 
    void 0 === (metrics = metrics || fontData.lightningMetrics || {
        ascender: 800,
        descender: -200,
        lineGap: 200,
        unitsPerEm: 1e3
    }).capHeight) {
        const capGlyph = glyphMap.get(72);
        if (void 0 !== capGlyph) {
            const capHeightAtlasPx = fontData.common.base - capGlyph.yoffset;
            metrics = {
                ...metrics,
                capHeight: capHeightAtlasPx / fontData.info.size * metrics.unitsPerEm
            };
        }
    }
    if (void 0 === metrics.xHeight) {
        const xGlyph = glyphMap.get(120);
        if (void 0 !== xGlyph) {
            const xHeightAtlasPx = fontData.common.base - xGlyph.yoffset;
            metrics = {
                ...metrics,
                xHeight: xHeightAtlasPx / fontData.info.size * metrics.unitsPerEm
            };
        }
    }
    fontCache$1.set(fontFamily, {
        data: fontData,
        glyphMap: glyphMap,
        kernings: kernings,
        atlasTexture: atlasTexture,
        metrics: metrics,
        maxCharHeight: maxCharHeight
    });
}, canRenderFont$1 = trProps => isFontLoaded$1(trProps.fontFamily) || fontLoadPromises$1.has(trProps.fontFamily), loadFont$1 = (stage, options) => {
    const {fontFamily: fontFamily, atlasUrl: atlasUrl, atlasDataUrl: atlasDataUrl, metrics: metrics} = options, names = Array.isArray(fontFamily) ? fontFamily : [ fontFamily ], primary = names[0], prefetched = takeSdfPrefetch(primary);
    if (void 0 !== fontCache$1.get(primary)) return Promise.resolve();
    const existingPromise = fontLoadPromises$1.get(primary);
    if (void 0 !== existingPromise) return existingPromise;
    if (void 0 === atlasDataUrl) return Promise.reject(new Error(`Atlas data URL must be provided for SDF font: ${primary}`));
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        void 0 === nodesWaitingForFont$1[name] && (nodesWaitingForFont$1[name] = []);
    }
    const fetchFontData = () => new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest;
        xhr.open("GET", atlasDataUrl, !0), xhr.responseType = "json", xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300 || 0 === xhr.status) {
                let data = xhr.response;
                if ("string" == typeof data) try {
                    data = JSON.parse(data);
                } catch (e) {
                    return void reject(new Error("Failed to parse font data JSON"));
                }
                resolve(data);
            } else reject(new Error(`Failed to load font data: ${xhr.statusText}`));
        }, xhr.onerror = () => {
            reject(new Error("Network error occurred while trying to load the font data."));
        }, xhr.send(null);
    }), loadAtlas = (fontData, atlasBlob) => fontData && fontData.chars ? atlasUrl ? new Promise((resolve, reject) => {
        const atlasTexture = stage.txManager.createTexture("ImageTexture", {
            src: null !== atlasBlob ? atlasBlob : atlasUrl,
            key: atlasUrl,
            premultiplyAlpha: !1
        });
        for (let i = 0; i < names.length; i++) atlasTexture.setRenderableOwner(names[i], !0);
        atlasTexture.preventCleanup = !0;
        const onLoaded = () => {
            processFontData$1(primary, fontData, atlasTexture, metrics);
            const cached = fontCache$1.get(primary);
            for (let i = 1; i < names.length; i++) fontCache$1.set(names[i], cached);
            for (let i = 0; i < names.length; i++) {
                const name = names[i], list = nodesWaitingForFont$1[name];
                if (void 0 !== list) {
                    for (let key in list) list[key].setUpdateType(UpdateType.Local);
                    delete nodesWaitingForFont$1[name];
                }
            }
            resolve();
        };
        "loaded" !== atlasTexture.state ? (atlasTexture.on("loaded", onLoaded), atlasTexture.on("failed", (_target, error) => {
            for (let i = 0; i < names.length; i++) atlasTexture.setRenderableOwner(names[i], !1);
            stage.txManager.removeTextureFromCache(atlasTexture), reject(error);
        })) : onLoaded();
    }) : Promise.reject(new Error("Atlas texture must be provided for SDF fonts")) : Promise.reject(new Error("Invalid SDF font data format")), loadPromise = (async () => {
        let lastError;
        for (let attempt = 0; attempt <= 3; attempt++) try {
            var _ref;
            const fontData = null !== (_ref = 0 === attempt && void 0 !== prefetched ? await prefetched.data : null) && void 0 !== _ref ? _ref : await fetchFontData(), atlasBlob = 0 === attempt && void 0 !== prefetched ? await prefetched.atlas : null;
            await loadAtlas(fontData, atlasBlob);
            for (let i = 0; i < names.length; i++) fontLoadPromises$1.delete(names[i]);
            return;
        } catch (error) {
            lastError = error, attempt < 3 && console.warn(`SDF font "${primary}" failed to load (attempt ${attempt + 1} of 4), retrying.`, error);
        }
        for (let i = 0; i < names.length; i++) fontLoadPromises$1.delete(names[i]), fontCache$1.delete(names[i]);
        throw console.error(`Failed to load SDF font: ${primary}`, lastError), lastError;
    })();
    for (let i = 0; i < names.length; i++) fontLoadPromises$1.set(names[i], loadPromise);
    return loadPromise;
}, waitingForFont$1 = (fontFamily, node) => {
    void 0 !== nodesWaitingForFont$1[fontFamily] && (nodesWaitingForFont$1[fontFamily][node.id] = node);
}, stopWaitingForFont$1 = (fontFamily, node) => {
    void 0 !== nodesWaitingForFont$1[fontFamily] && delete nodesWaitingForFont$1[fontFamily][node.id];
}, getFontFamilies$1 = () => ({}), init$3 = c => {
    !0 !== initialized$1 && (initialized$1 = !0);
}, isFontLoaded$1 = fontFamily => fontCache$1.has(fontFamily), getFontMetrics$1 = (fontFamily, fontSize) => {
    const label = fontFamily + "_" + fontSize, metricsCache = normalizedMetrics$1.get(label);
    if (void 0 !== metricsCache) return metricsCache;
    let metrics = fontCache$1.get(fontFamily).metrics;
    return processFontMetrics$1(fontFamily, fontSize, metrics);
}, processFontMetrics$1 = (fontFamily, fontSize, metrics) => {
    const label = fontFamily + "_" + fontSize, normalized = normalizeFontMetrics(metrics, fontSize);
    return normalizedMetrics$1.set(label, normalized), normalized;
}, getAtlas = fontFamily => {
    const cache = fontCache$1.get(fontFamily);
    return void 0 !== cache ? cache.atlasTexture : null;
}, getFontData = fontFamily => fontCache$1.get(fontFamily), getMaxCharHeight = fontFamily => {
    const cache = fontCache$1.get(fontFamily);
    return void 0 !== cache ? cache.maxCharHeight : 0;
}, getLoadedFonts = () => Array.from(fontCache$1.keys()), unloadFont = fontFamily => {
    const cache = fontCache$1.get(fontFamily);
    void 0 !== cache && ("function" == typeof cache.atlasTexture.free && cache.atlasTexture.free(), 
    fontCache$1.delete(fontFamily));
}, measureText$1 = (text, fontFamily, letterSpacing) => {
    const cache = fontCache$1.get(fontFamily);
    if (void 0 === cache) return 0;
    const glyphMap = cache.glyphMap, kernings = cache.kernings, textLength = text.length;
    if (1 === textLength) {
        const codepoint = text.codePointAt(0);
        if (8203 === codepoint) return 0;
        if (!0 === hasZeroWidthSpace(text[0])) return 0;
        let glyph = glyphMap.get(codepoint);
        return void 0 === glyph && (glyph = glyphMap.get(32), void 0 === glyph) ? 0 : glyph.xadvance + letterSpacing;
    }
    let width = 0, prevGlyphId = 0;
    for (let i = 0; i < textLength; i++) {
        const codepoint = text.codePointAt(i);
        if (codepoint > 65535 && i++, 8203 === codepoint) continue;
        if (!0 === hasZeroWidthSpace(text[i])) continue;
        let glyph = glyphMap.get(codepoint);
        if (void 0 === glyph && (glyph = glyphMap.get(32), void 0 === glyph)) continue;
        let advance = glyph.xadvance;
        if (0 !== prevGlyphId) {
            const seconds = kernings[glyph.id];
            if (void 0 !== seconds) {
                const amount = seconds[prevGlyphId];
                void 0 !== amount && (advance += amount);
            }
        }
        width += advance + letterSpacing, prevGlyphId = glyph.id;
    }
    return width;
}, CoreRenderOp = class {}, SdfRenderOp = class extends CoreRenderOp {
    constructor(renderer, shader, quadBufferCollection, renderOpTexture, worldAlpha, clippingRect, w, h) {
        super(), this.renderer = void 0, this.shader = void 0, this.quadBufferCollection = void 0, 
        this.renderOpTexture = void 0, this.worldAlpha = void 0, this.clippingRect = void 0, 
        this.w = void 0, this.h = void 0, this.numQuads = 0, this.time = 0, this.stage = void 0, 
        this.startQuad = 0, this.translateX = 0, this.translateY = 0, this.renderer = renderer, 
        this.shader = shader, this.quadBufferCollection = quadBufferCollection, this.renderOpTexture = renderOpTexture, 
        this.worldAlpha = worldAlpha, this.clippingRect = clippingRect, this.w = w, this.h = h, 
        this.stage = renderer.stage;
    }
    draw() {
        const {glw: glw, stage: stage} = this.renderer;
        if (this.renderer.useShader(this.shader.program), this.shader.program.bindRenderOp(this, this.quadBufferCollection), 
        !0 === this.clippingRect.valid) {
            const pixelRatio = stage.pixelRatio, clipX = Math.round(this.clippingRect.x * pixelRatio), clipWidth = Math.round(this.clippingRect.w * pixelRatio), clipHeight = Math.round(this.clippingRect.h * pixelRatio), clipY = Math.round(glw.canvasH - clipHeight - this.clippingRect.y * pixelRatio);
            glw.setScissorTest(!0), glw.scissor(clipX, clipY, clipWidth, clipHeight);
        } else glw.setScissorTest(!1);
        const byteOffset = 6 * this.startQuad * 2;
        glw.drawElements(glw.TRIANGLES, 6 * this.numQuads, glw.UNSIGNED_SHORT, byteOffset);
    }
}, TRANSPARENT_TEXTURE_DATA = new Uint8Array([ 0, 0, 0, 0 ]), WebGlCtxTexture = class extends CoreContextTexture {
    constructor(glw, memManager, textureSource) {
        super(memManager, textureSource), this.glw = void 0, this._nativeCtxTexture = null, 
        this._w = 0, this._h = 0, this.txCoords = UNIT_TEXTURE_COORDS, this.glw = glw;
    }
    checkGLError() {
        return "failed" === this.state;
    }
    get ctxTexture() {
        return "freed" === this.state ? (this.load(), null) : this._nativeCtxTexture;
    }
    get w() {
        return this._w;
    }
    get h() {
        return this._h;
    }
    load() {
        if ("loading" !== this.state && "loaded" !== this.state) {
            if (this.state = "loading", this.textureSource.setState("loading"), this._nativeCtxTexture = this.createNativeCtxTexture(), 
            null === this._nativeCtxTexture) {
                this.state = "failed";
                const error = new Error("Could not create WebGL Texture");
                return this.textureSource.setState("failed", error), void console.error("Could not create WebGL Texture");
            }
            try {
                const {w: w, h: h} = this.onLoadRequest();
                if ("freed" === this.state) return;
                this.state = "loaded", this._w = w, this._h = h, this.textureSource.setState("loaded", {
                    w: w,
                    h: h
                }), this.textureSource.freeTextureData();
            } catch (err) {
                if ("freed" === this.state) return;
                this.state = "failed";
                const error = err instanceof Error ? err : new Error(String(err));
                this.textureSource.setState("failed", error), this.textureSource.freeTextureData(), 
                console.error(err);
            }
        }
    }
    onLoadRequest() {
        const {glw: glw} = this, textureData = this.textureSource.textureData;
        if (null === textureData || null === this._nativeCtxTexture) throw new Error("Texture data or native texture is null " + this.textureSource.type);
        let w = 0, h = 0;
        glw.activeTexture(0);
        const tdata = textureData.data, format = glw.RGBA;
        if ("undefined" != typeof ImageBitmap && tdata instanceof ImageBitmap || tdata instanceof ImageData || !0 === isHTMLImageElement(tdata)) {
            if (w = tdata.width, h = tdata.height, glw.bindTexture(this._nativeCtxTexture), 
            glw.pixelStorei(glw.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !!textureData.premultiplyAlpha), 
            glw.texImage2D(0, format, format, glw.UNSIGNED_BYTE, tdata), !0 === this.checkGLError()) throw this.textureSource.error || new Error("WebGL Error");
            this.setTextureMemUse(h * w * 4 * 1.1);
        } else if (null === tdata) w = 0, h = 0, glw.bindTexture(this._nativeCtxTexture), 
        glw.texImage2D(0, format, 1, 1, 0, format, glw.UNSIGNED_BYTE, TRANSPARENT_TEXTURE_DATA), 
        this.setTextureMemUse(TRANSPARENT_TEXTURE_DATA.byteLength); else if ("mipmaps" in tdata && tdata.mipmaps) {
            var _mipmaps$0$byteLength, _mipmaps$;
            const {mipmaps: mipmaps, type: type, blockInfo: blockInfo} = tdata;
            if (uploadCompressedTexture[type](glw, this._nativeCtxTexture, tdata), !0 === this.checkGLError()) throw this.textureSource.error || new Error("WebGL Error");
            w = tdata.w, h = tdata.h, this.txCoords = createTextureCoords(0, 0, w / (Math.ceil(w / blockInfo.width) * blockInfo.width), h / (Math.ceil(h / blockInfo.height) * blockInfo.height)), 
            this.setTextureMemUse(null !== (_mipmaps$0$byteLength = null == (_mipmaps$ = mipmaps[0]) ? void 0 : _mipmaps$.byteLength) && void 0 !== _mipmaps$0$byteLength ? _mipmaps$0$byteLength : 0);
        } else {
            if (!(tdata && tdata instanceof Uint8Array)) throw new Error("WebGlCoreCtxTexture.onLoadRequest: Unexpected textureData returned");
            if (w = 1, h = 1, glw.bindTexture(this._nativeCtxTexture), glw.pixelStorei(glw.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !!textureData.premultiplyAlpha), 
            glw.texImage2D(0, format, w, h, 0, format, glw.UNSIGNED_BYTE, tdata), !0 === this.checkGLError()) throw this.textureSource.error || new Error("WebGL Error");
            this.setTextureMemUse(w * h * 4);
        }
        return {
            w: w,
            h: h
        };
    }
    free() {
        "freed" !== this.state && (this.state = "freed", this.textureSource.setState("freed"), 
        this.release());
    }
    release() {
        this._w = 0, this._h = 0, null !== this._nativeCtxTexture && (this.glw.deleteTexture(this._nativeCtxTexture), 
        this.setTextureMemUse(0), this._nativeCtxTexture = null), this.textureSource.freeTextureData();
    }
    createNativeCtxTexture() {
        const {glw: glw} = this, nativeTexture = glw.createTexture();
        return nativeTexture ? (glw.activeTexture(0), glw.bindTexture(nativeTexture), glw.texParameteri(glw.TEXTURE_MAG_FILTER, glw.LINEAR), 
        glw.texParameteri(glw.TEXTURE_MIN_FILTER, glw.LINEAR), glw.texParameteri(glw.TEXTURE_WRAP_S, glw.CLAMP_TO_EDGE), 
        glw.texParameteri(glw.TEXTURE_WRAP_T, glw.CLAMP_TO_EDGE), nativeTexture) : null;
    }
}, WebGlCtxSubTexture = class extends WebGlCtxTexture {
    constructor(glw, memManager, textureSource) {
        super(glw, memManager, textureSource);
    }
    onLoadRequest() {
        const props = this.textureSource.textureData;
        return props.data instanceof Uint8Array ? {
            w: 1,
            h: 1
        } : this.extractDimensions(props.data);
    }
    extractDimensions(data) {
        return null === data ? {
            w: 0,
            h: 0
        } : !0 === this.hasWidthHeight(data) ? {
            w: data.width,
            h: data.height
        } : !0 === this.hasWH(data) ? {
            w: data.w,
            h: data.h
        } : {
            w: 0,
            h: 0
        };
    }
    hasWidthHeight(data) {
        return "number" == typeof data.width && "number" == typeof data.height;
    }
    hasWH(data) {
        return "number" == typeof data.w && "number" == typeof data.h;
    }
}, BufferCollection = class {
    constructor(config) {
        this.config = void 0, this._lookup = new Map, this.config = config;
        for (const item of config) for (const attrName in item.attributes) item.attributes[attrName] && !this._lookup.has(attrName) && this._lookup.set(attrName, item);
    }
    getBuffer(attributeName) {
        var _this$_lookup$get;
        return null == (_this$_lookup$get = this._lookup.get(attributeName)) ? void 0 : _this$_lookup$get.buffer;
    }
    getAttributeInfo(attributeName) {
        var _this$_lookup$get2;
        return null == (_this$_lookup$get2 = this._lookup.get(attributeName)) ? void 0 : _this$_lookup$get2.attributes[attributeName];
    }
}, WebGlContextWrapper = class {
    constructor(gl, disableVertexArrayObject = !1) {
        this.gl = void 0, this.activeTextureUnit = 0, this.texture2dUnits = void 0, this.texture2dParams = new WeakMap, 
        this.scissorEnabled = void 0, this.scissorX = void 0, this.scissorY = void 0, this.scissorWidth = void 0, 
        this.scissorHeight = void 0, this.blendEnabled = void 0, this.blendSrcRgb = void 0, 
        this.blendDstRgb = void 0, this.blendSrcAlpha = void 0, this.blendDstAlpha = void 0, 
        this.boundArrayBuffer = void 0, this.boundElementArrayBuffer = void 0, this.curProgram = void 0, 
        this.curUniformLocations = {}, this.gl2 = void 0, this.boundVertexArray = null, 
        this.vaoExt = void 0, this.canUseVertexArrayObject = void 0, this.isWebGl2 = void 0, 
        this.canvas = void 0, this.canvasW = void 0, this.canvasH = void 0, this.MAX_RENDERBUFFER_SIZE = void 0, 
        this.MAX_TEXTURE_SIZE = void 0, this.MAX_VIEWPORT_DIMS = void 0, this.MAX_VERTEX_TEXTURE_IMAGE_UNITS = void 0, 
        this.MAX_TEXTURE_IMAGE_UNITS = void 0, this.MAX_COMBINED_TEXTURE_IMAGE_UNITS = void 0, 
        this.MAX_VERTEX_ATTRIBS = void 0, this.MAX_VARYING_VECTORS = void 0, this.MAX_VERTEX_UNIFORM_VECTORS = void 0, 
        this.MAX_FRAGMENT_UNIFORM_VECTORS = void 0, this.TEXTURE_MAG_FILTER = void 0, this.TEXTURE_MIN_FILTER = void 0, 
        this.TEXTURE_WRAP_S = void 0, this.TEXTURE_WRAP_T = void 0, this.LINEAR = void 0, 
        this.LINEAR_MIPMAP_LINEAR = void 0, this.CLAMP_TO_EDGE = void 0, this.RGB = void 0, 
        this.RGBA = void 0, this.UNSIGNED_BYTE = void 0, this.UNPACK_PREMULTIPLY_ALPHA_WEBGL = void 0, 
        this.UNPACK_FLIP_Y_WEBGL = void 0, this.FLOAT = void 0, this.TRIANGLES = void 0, 
        this.UNSIGNED_SHORT = void 0, this.ONE = void 0, this.ONE_MINUS_SRC_ALPHA = void 0, 
        this.VERTEX_SHADER = void 0, this.FRAGMENT_SHADER = void 0, this.STATIC_DRAW = void 0, 
        this.COMPILE_STATUS = void 0, this.LINK_STATUS = void 0, this.DYNAMIC_DRAW = void 0, 
        this.INVALID_ENUM = void 0, this.INVALID_OPERATION = void 0, this.gl = gl, this.activeTextureUnit = 0;
        const maxTextureUnits = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);
        this.texture2dUnits = new Array(maxTextureUnits).fill(null), this.scissorEnabled = !1, 
        this.scissorX = 0, this.scissorY = 0, this.scissorWidth = gl.drawingBufferWidth, 
        this.scissorHeight = gl.drawingBufferHeight, this.blendEnabled = !1, this.blendSrcRgb = gl.ONE, 
        this.blendDstRgb = gl.ZERO, this.blendSrcAlpha = gl.ONE, this.blendDstAlpha = gl.ZERO, 
        this.boundArrayBuffer = null, this.boundElementArrayBuffer = null, this.curProgram = null, 
        this.gl2 = self.WebGL2RenderingContext && gl instanceof self.WebGL2RenderingContext ? gl : null, 
        this.vaoExt = null === this.gl2 && !0 !== disableVertexArrayObject ? gl.getExtension("OES_vertex_array_object") : null, 
        this.canUseVertexArrayObject = !0 !== disableVertexArrayObject && (null !== this.gl2 || null !== this.vaoExt), 
        this.isWebGl2 = null !== this.gl2, this.canvas = gl.canvas, this.canvasW = gl.canvas.width, 
        this.canvasH = gl.canvas.height, this.MAX_RENDERBUFFER_SIZE = gl.MAX_RENDERBUFFER_SIZE, 
        this.MAX_TEXTURE_SIZE = gl.MAX_TEXTURE_SIZE, this.MAX_VIEWPORT_DIMS = gl.MAX_VIEWPORT_DIMS, 
        this.MAX_VERTEX_TEXTURE_IMAGE_UNITS = gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS, this.MAX_TEXTURE_IMAGE_UNITS = gl.MAX_TEXTURE_IMAGE_UNITS, 
        this.MAX_COMBINED_TEXTURE_IMAGE_UNITS = gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS, this.MAX_VERTEX_ATTRIBS = gl.MAX_VERTEX_ATTRIBS, 
        this.MAX_VARYING_VECTORS = gl.MAX_VARYING_VECTORS, this.MAX_VERTEX_UNIFORM_VECTORS = gl.MAX_VERTEX_UNIFORM_VECTORS, 
        this.MAX_FRAGMENT_UNIFORM_VECTORS = gl.MAX_FRAGMENT_UNIFORM_VECTORS, this.TEXTURE_MAG_FILTER = gl.TEXTURE_MAG_FILTER, 
        this.TEXTURE_MIN_FILTER = gl.TEXTURE_MIN_FILTER, this.TEXTURE_WRAP_S = gl.TEXTURE_WRAP_S, 
        this.TEXTURE_WRAP_T = gl.TEXTURE_WRAP_T, this.LINEAR = gl.LINEAR, this.LINEAR_MIPMAP_LINEAR = gl.LINEAR_MIPMAP_LINEAR, 
        this.CLAMP_TO_EDGE = gl.CLAMP_TO_EDGE, this.RGB = gl.RGB, this.RGBA = gl.RGBA, this.UNSIGNED_BYTE = gl.UNSIGNED_BYTE, 
        this.UNPACK_PREMULTIPLY_ALPHA_WEBGL = gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.UNPACK_FLIP_Y_WEBGL = gl.UNPACK_FLIP_Y_WEBGL, 
        this.FLOAT = gl.FLOAT, this.TRIANGLES = gl.TRIANGLES, this.UNSIGNED_SHORT = gl.UNSIGNED_SHORT, 
        this.ONE = gl.ONE, this.ONE_MINUS_SRC_ALPHA = gl.ONE_MINUS_SRC_ALPHA, this.VERTEX_SHADER = gl.VERTEX_SHADER, 
        this.FRAGMENT_SHADER = gl.FRAGMENT_SHADER, this.STATIC_DRAW = gl.STATIC_DRAW, this.COMPILE_STATUS = gl.COMPILE_STATUS, 
        this.LINK_STATUS = gl.LINK_STATUS, this.DYNAMIC_DRAW = gl.DYNAMIC_DRAW, this.INVALID_ENUM = gl.INVALID_ENUM, 
        this.INVALID_OPERATION = gl.INVALID_OPERATION;
    }
    activeTexture(textureUnit) {
        this.activeTextureUnit !== textureUnit && (this.gl.activeTexture(textureUnit + this.gl.TEXTURE0), 
        this.activeTextureUnit = textureUnit);
    }
    bindTexture(texture) {
        this.texture2dUnits[this.activeTextureUnit] !== texture && (this.texture2dUnits[this.activeTextureUnit] = texture, 
        this.gl.bindTexture(this.gl.TEXTURE_2D, texture));
    }
    _getActiveTexture() {
        return this.texture2dUnits[this.activeTextureUnit];
    }
    texParameteri(pname, param) {
        const activeTexture = this._getActiveTexture();
        if (!activeTexture) throw new Error("No active texture");
        let textureParams = this.texture2dParams.get(activeTexture);
        textureParams || (textureParams = {}, this.texture2dParams.set(activeTexture, textureParams)), 
        textureParams[pname] !== param && (textureParams[pname] = param, this.gl.texParameteri(this.gl.TEXTURE_2D, pname, param));
    }
    texImage2D(level, internalFormat, widthOrFormat, heightOrType, borderOrSource, format, type, pixels) {
        format ? this.gl.texImage2D(this.gl.TEXTURE_2D, level, internalFormat, widthOrFormat, heightOrType, borderOrSource, format, type, pixels) : this.gl.texImage2D(this.gl.TEXTURE_2D, level, internalFormat, widthOrFormat, heightOrType, borderOrSource);
    }
    compressedTexImage2D(level, internalformat, width, height, border, data) {
        this.gl.compressedTexImage2D(this.gl.TEXTURE_2D, level, internalformat, width, height, border, data);
    }
    pixelStorei(pname, param) {
        this.gl.pixelStorei(pname, param);
    }
    generateMipmap() {
        this.gl.generateMipmap(this.gl.TEXTURE_2D);
    }
    createTexture() {
        return this.gl.createTexture();
    }
    deleteTexture(texture) {
        texture && this.texture2dParams.delete(texture), this.gl.deleteTexture(texture);
    }
    viewport(x, y, width, height) {
        this.gl.viewport(x, y, width, height);
    }
    updateCanvasDimensions() {
        this.canvasW = this.canvas.width, this.canvasH = this.canvas.height;
    }
    clearColor(red, green, blue, alpha) {
        this.gl.clearColor(red, green, blue, alpha);
    }
    setScissorTest(enable) {
        enable !== this.scissorEnabled && (enable ? this.gl.enable(this.gl.SCISSOR_TEST) : this.gl.disable(this.gl.SCISSOR_TEST), 
        this.scissorEnabled = enable);
    }
    scissor(x, y, width, height) {
        x === this.scissorX && y === this.scissorY && width === this.scissorWidth && height === this.scissorHeight || (this.gl.scissor(x, y, width, height), 
        this.scissorX = x, this.scissorY = y, this.scissorWidth = width, this.scissorHeight = height);
    }
    setBlend(blend) {
        blend !== this.blendEnabled && (blend ? this.gl.enable(this.gl.BLEND) : this.gl.disable(this.gl.BLEND), 
        this.blendEnabled = blend);
    }
    blendFunc(src, dst) {
        src === this.blendSrcRgb && dst === this.blendDstRgb && src === this.blendSrcAlpha && dst === this.blendDstAlpha || (this.gl.blendFunc(src, dst), 
        this.blendSrcRgb = src, this.blendDstRgb = dst, this.blendSrcAlpha = src, this.blendDstAlpha = dst);
    }
    createBuffer() {
        return this.gl.createBuffer();
    }
    clear() {
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    }
    arrayBufferData(buffer, data, usage) {
        this.boundArrayBuffer !== buffer && (this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer), 
        this.boundArrayBuffer = buffer), this.gl.bufferData(this.gl.ARRAY_BUFFER, data, usage);
    }
    arrayBufferSubData(buffer, dstByteOffset, data) {
        this.boundArrayBuffer !== buffer && (this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer), 
        this.boundArrayBuffer = buffer), this.gl.bufferSubData(this.gl.ARRAY_BUFFER, dstByteOffset, data);
    }
    elementArrayBufferData(buffer, data, usage) {
        this.boundElementArrayBuffer !== buffer && (this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, buffer), 
        this.boundElementArrayBuffer = buffer), this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, data, usage);
    }
    vertexAttribPointer(buffer, index, size, type, normalized, stride, offset) {
        this.boundArrayBuffer !== buffer && (this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer), 
        this.boundArrayBuffer = buffer), this.gl.vertexAttribPointer(index, size, type, normalized, stride, offset);
    }
    bindElementArrayBuffer(buffer) {
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, buffer), this.boundElementArrayBuffer = buffer;
    }
    createVertexArray() {
        return null !== this.gl2 ? this.gl2.createVertexArray() : null !== this.vaoExt ? this.vaoExt.createVertexArrayOES() : null;
    }
    bindVertexArray(vertexArray) {
        if (this.boundVertexArray !== vertexArray) return null !== this.gl2 ? (this.gl2.bindVertexArray(vertexArray), 
        void (this.boundVertexArray = vertexArray)) : void (null !== this.vaoExt && (this.vaoExt.bindVertexArrayOES(vertexArray), 
        this.boundVertexArray = vertexArray));
    }
    deleteVertexArray(vertexArray) {
        this.boundVertexArray === vertexArray && (this.boundVertexArray = null), null === this.gl2 ? null !== this.vaoExt && this.vaoExt.deleteVertexArrayOES(vertexArray) : this.gl2.deleteVertexArray(vertexArray);
    }
    getUniformLocations(program) {
        const gl = this.gl, length = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS), result = {};
        for (let i = 0; i < length; i++) {
            let name = gl.getActiveUniform(program, i).name.replace(/\[.*?\]/g, "");
            result[name] = gl.getUniformLocation(program, name);
        }
        return result;
    }
    getAttributeLocations(program) {
        const gl = this.gl, length = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES), result = [];
        for (let i = 0; i < length; i++) {
            const {name: name} = gl.getActiveAttrib(program, i);
            result[gl.getAttribLocation(program, name)] = name;
        }
        return result;
    }
    useProgram(program, uniformLocations) {
        this.curProgram !== program && (this.gl.useProgram(program), this.curProgram = program, 
        this.curUniformLocations = uniformLocations);
    }
    uniform1f(location, v0) {
        this.gl.uniform1f(this.curUniformLocations[location] || null, v0);
    }
    uniform1fv(location, value) {
        this.gl.uniform1fv(this.curUniformLocations[location] || null, value);
    }
    uniform1i(location, v0) {
        this.gl.uniform1i(this.curUniformLocations[location] || null, v0);
    }
    uniform1iv(location, value) {
        this.gl.uniform1iv(this.curUniformLocations[location] || null, value);
    }
    uniform2f(location, v0, v1) {
        this.gl.uniform2f(this.curUniformLocations[location] || null, v0, v1);
    }
    uniform2fa(location, value) {
        this.gl.uniform2f(this.curUniformLocations[location] || null, value[0], value[1]);
    }
    uniform2fv(location, value) {
        this.gl.uniform2fv(this.curUniformLocations[location] || null, value);
    }
    uniform2i(location, v0, v1) {
        this.gl.uniform2i(this.curUniformLocations[location] || null, v0, v1);
    }
    uniform2iv(location, value) {
        this.gl.uniform2iv(this.curUniformLocations[location] || null, value);
    }
    uniform3f(location, v0, v1, v2) {
        this.gl.uniform3f(this.curUniformLocations[location] || null, v0, v1, v2);
    }
    uniform3fa(location, value) {
        this.gl.uniform3f(this.curUniformLocations[location] || null, value[0], value[1], value[2]);
    }
    uniform3fv(location, value) {
        this.gl.uniform3fv(this.curUniformLocations[location] || null, value);
    }
    uniform3i(location, v0, v1, v2) {
        this.gl.uniform3i(this.curUniformLocations[location] || null, v0, v1, v2);
    }
    uniform3iv(location, value) {
        this.gl.uniform3iv(this.curUniformLocations[location] || null, value);
    }
    uniform4f(location, v0, v1, v2, v3) {
        this.gl.uniform4f(this.curUniformLocations[location] || null, v0, v1, v2, v3);
    }
    uniform4fa(location, value) {
        this.gl.uniform4f(this.curUniformLocations[location] || null, value[0], value[1], value[2], value[3]);
    }
    uniform4fv(location, value) {
        this.gl.uniform4fv(this.curUniformLocations[location] || null, value);
    }
    uniform4i(location, v0, v1, v2, v3) {
        this.gl.uniform4i(this.curUniformLocations[location] || null, v0, v1, v2, v3);
    }
    uniform4iv(location, value) {
        this.gl.uniform4iv(this.curUniformLocations[location] || null, value);
    }
    uniformMatrix2fv(location, value) {
        this.gl.uniformMatrix2fv(this.curUniformLocations[location] || null, !1, value);
    }
    uniformMatrix3fv(location, value) {
        this.gl.uniformMatrix3fv(this.curUniformLocations[location] || null, !1, value);
    }
    uniformMatrix4fv(location, value) {
        this.gl.uniformMatrix4fv(this.curUniformLocations[location] || null, !1, value);
    }
    getParameter(pname) {
        return this.gl.getParameter(pname);
    }
    drawElements(mode, count, type, offset) {
        this.gl.drawElements(mode, count, type, offset);
    }
    drawArrays(mode, first, count) {
        this.gl.drawArrays(mode, first, count);
    }
    getExtension(name) {
        return this.gl.getExtension(name);
    }
    getError() {
        return this.gl.getError();
    }
    isContextLost() {
        return this.gl.isContextLost();
    }
    getAttribLocation(program, name) {
        return this.gl.getAttribLocation(program, name);
    }
    getUniformLocation(program, name) {
        return this.gl.getUniformLocation(program, name);
    }
    enableVertexAttribArray(index) {
        this.gl.enableVertexAttribArray(index);
    }
    disableVertexAttribArray(index) {
        this.gl.disableVertexAttribArray(index);
    }
    createShader(type) {
        return this.gl.createShader(type);
    }
    compileShader(shader) {
        this.gl.compileShader(shader);
    }
    attachShader(program, shader) {
        this.gl.attachShader(program, shader);
    }
    linkProgram(program) {
        this.gl.linkProgram(program);
    }
    deleteProgram(shader) {
        this.gl.deleteProgram(shader);
    }
    getShaderParameter(shader, pname) {
        return this.gl.getShaderParameter(shader, pname);
    }
    getShaderInfoLog(shader) {
        return this.gl.getShaderInfoLog(shader);
    }
    createProgram() {
        return this.gl.createProgram();
    }
    getProgramParameter(program, pname) {
        return this.gl.getProgramParameter(program, pname);
    }
    getProgramInfoLog(program) {
        return this.gl.getProgramInfoLog(program);
    }
    shaderSource(shader, source) {
        this.gl.shaderSource(shader, source);
    }
    deleteShader(shader) {
        this.gl.deleteShader(shader);
    }
    deleteBuffer(buffer) {
        const {gl: gl} = this;
        gl.deleteBuffer(buffer), this.boundArrayBuffer === buffer && (this.boundArrayBuffer = null);
    }
    checkError(operation) {
        const error = this.getError();
        if (0 !== error) {
            let errorName = "UNKNOWN_ERROR";
            switch (error) {
              case this.INVALID_ENUM:
                errorName = "INVALID_ENUM";
                break;

              case 1281:
                errorName = "INVALID_VALUE";
                break;

              case this.INVALID_OPERATION:
                errorName = "INVALID_OPERATION";
                break;

              case 1285:
                errorName = "OUT_OF_MEMORY";
                break;

              case 37442:
                errorName = "CONTEXT_LOST_WEBGL";
            }
            const message = `WebGL ${errorName} (0x${error.toString(16)}) during ${operation}`;
            return {
                error: error,
                errorName: errorName,
                message: message
            };
        }
        return null;
    }
}, MAX_SDF_BUFFER_FLOATS = 1048576 / Float32Array.BYTES_PER_ELEMENT, Sdf = {
    vertex: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    // Pre-transformed world-pixel position\n    attribute vec2 a_position;\n    attribute vec2 a_textureCoords;\n    // Per-vertex color (RGBA, unsigned byte, normalized)\n    attribute vec4 a_color;\n    // Per-vertex SDF distance range\n    attribute float a_distRange;\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n    // Per-render-op translation, written by WebGlShaderProgram.bindRenderOp\n    // (a reserved system uniform, like u_resolution and u_pixelRatio).\n    // Cached glyph vertices stay at their cache-base position; a text node\n    // that moved by pure translation carries the delta here instead of\n    // rewriting every vertex on the CPU, which keeps the shared SDF buffer\n    // byte-stable so its per-frame upload can be skipped.\n    uniform vec2 u_translate;\n    // Per-render-op world alpha (system uniform, see bindRenderOp). Kept out\n    // of the packed vertex colors for the same reason as u_translate: an\n    // alpha fade must not dirty the cached vertex bytes. Applied here rather\n    // than in the fragment shader because a vertex is cheaper than a\n    // fragment and v_color.a interpolates linearly.\n    uniform float u_alpha;\n\n    varying vec2 v_texcoord;\n    varying float v_scaledDistRange;\n    varying vec4 v_color;\n\n    void main() {\n      // a_position is world pixel space at the node's cache base\n      vec2 screenSpace = ((a_position + u_translate) * u_pixelRatio / u_resolution * 2.0 - 1.0) * vec2(1, -1);\n\n      gl_Position = vec4(screenSpace, 0.0, 1.0);\n      v_texcoord = a_textureCoords;\n      v_scaledDistRange = a_distRange * u_pixelRatio;\n      // a_color.a is the node color's own alpha; the fragment shader folds\n      // v_color.a into opacity, which also scales rgb, so this one multiply\n      // applies the world alpha completely.\n      v_color = vec4(a_color.rgb, a_color.a * u_alpha);\n    }\n  ",
    fragment: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    uniform sampler2D u_texture;\n\n    varying vec2 v_texcoord;\n    varying float v_scaledDistRange;\n    varying vec4 v_color;\n\n    float median(float r, float g, float b) {\n        return clamp(b, min(r, g), max(r, g));\n    }\n\n    void main() {\n        vec3 s = texture2D(u_texture, v_texcoord).rgb;\n        float sigDist = v_scaledDistRange * (median(s.r, s.g, s.b) - 0.5);\n        float opacity = clamp(sigDist + 0.5, 0.0, 1.0) * v_color.a;\n\n        // Premultiply RGB by final opacity\n        gl_FragColor = vec4(v_color.rgb * opacity, opacity);\n    }\n  "
}, sdfShader = null, maxLayoutCacheSize$1 = 250, font$1 = SdfFontHandler_exports, layoutCache$1 = new Map, generateTextLayout = (props, fontCache) => {
    const fontSize = props.fontSize, fontFamily = props.fontFamily, metrics = getFontMetrics$1(fontFamily, fontSize), fontData = fontCache.data, commonFontData = fontData.common, designFontSize = fontData.info.size, atlasBase = commonFontData.base, lineHeight = props.lineHeight, invAtlasWidth = 1 / commonFontData.scaleW, invAtlasHeight = 1 / commonFontData.scaleH, glyphMap = fontCache.glyphMap, kernings = fontCache.kernings, fontScale = fontSize / designFontSize, letterSpacing = props.letterSpacing / fontScale, maxWidth = props.maxWidth / fontScale, maxHeight = props.maxHeight, [lines, _remainingLines, _hasRemainingText, _bareLineHeight, lineHeightPx, effectiveWidth, effectiveHeight] = mapTextLayout(measureText$1, metrics, props.text, props.textAlign, fontFamily, lineHeight, props.overflowSuffix, props.wordBreak, letterSpacing, props.maxLines, maxWidth, maxHeight), lineAmount = lines.length;
    let maxGlyphs = 0;
    for (let i = 0; i < lineAmount; i++) maxGlyphs += lines[i][0].length;
    const glyphs = new Float32Array(8 * maxGlyphs);
    let glyphIdx = 0, glyphCount = 0, currentX = 0, baselineY = 0;
    for (let i = 0; i < lineAmount; i++) {
        const line = lines[i], textLine = line[0], textLineLength = textLine.length;
        let prevGlyphId = 0;
        currentX = line[3], baselineY = line[4] / fontScale;
        for (let j = 0; j < textLineLength; j++) {
            const codepoint = textLine.codePointAt(j);
            if (codepoint > 65535 && j++, 8203 === codepoint) continue;
            if (!0 === hasZeroWidthSpace(textLine[j])) continue;
            let glyph = glyphMap.get(codepoint);
            if (void 0 === glyph && (glyph = glyphMap.get(32), void 0 === glyph)) continue;
            let kerning = 0;
            if (0 !== prevGlyphId) {
                const seconds = kernings[glyph.id];
                if (void 0 !== seconds) {
                    const amount = seconds[prevGlyphId];
                    void 0 !== amount && (kerning = amount);
                }
            }
            currentX += kerning, glyphs[glyphIdx] = currentX + glyph.xoffset, glyphs[glyphIdx + 1] = baselineY + glyph.yoffset - atlasBase, 
            glyphs[glyphIdx + 2] = glyph.width, glyphs[glyphIdx + 3] = glyph.height, glyphs[glyphIdx + 4] = glyph.x * invAtlasWidth, 
            glyphs[glyphIdx + 5] = glyph.y * invAtlasHeight, glyphs[glyphIdx + 6] = glyph.width * invAtlasWidth, 
            glyphs[glyphIdx + 7] = glyph.height * invAtlasHeight, glyphIdx += 8, glyphCount++, 
            currentX += glyph.xadvance + letterSpacing, prevGlyphId = glyph.id;
        }
    }
    return {
        glyphs: glyphs,
        glyphCount: glyphCount,
        distanceRange: fontScale * fontData.distanceField.distanceRange,
        width: effectiveWidth * fontScale,
        height: effectiveHeight,
        fontScale: fontScale,
        lineHeight: lineHeightPx,
        fontFamily: fontFamily
    };
}, SdfTextRenderer = {
    type: "sdf",
    font: font$1,
    renderText: props => {
        if (0 === props.text.length) return {
            width: 0,
            height: 0
        };
        const cacheKey = (props => `${props.fontFamily}-${props.fontStyle}-${props.fontSize}-${props.letterSpacing}-${props.lineHeight}-${props.maxHeight}-${props.maxWidth}-${props.maxLines}-${props.textAlign}-${props.wordBreak}-${props.overflowSuffix}-${props.text}`)(props);
        let layout = layoutCache$1.get(cacheKey);
        if (void 0 !== layout) return layoutCache$1.delete(cacheKey), layoutCache$1.set(cacheKey, layout), 
        {
            remainingLines: 0,
            hasRemainingText: !1,
            width: layout.width,
            height: layout.height,
            layout: layout
        };
        const fontData = getFontData(props.fontFamily);
        if (void 0 === fontData) return {
            width: 0,
            height: 0
        };
        if (layout = generateTextLayout(props, fontData), layoutCache$1.set(cacheKey, layout), 
        layoutCache$1.size > maxLayoutCacheSize$1) {
            const oldest = layoutCache$1.keys().next().value;
            layoutCache$1.delete(oldest);
        }
        return {
            remainingLines: 0,
            hasRemainingText: !1,
            width: layout.width,
            height: layout.height,
            layout: layout
        };
    },
    addQuads: _layout => null,
    renderQuads: (renderer, layout, _vertexBuffer, renderProps) => {
        const fontFamily = renderProps.fontFamily, atlasTexture = getAtlas(fontFamily);
        if (null === atlasTexture) return null;
        const webGlRenderer = renderer, cache = renderProps.sdfCache, ctxTexture = atlasTexture.ctxTexture, shader = (stage = webGlRenderer.stage, 
        null === sdfShader && (sdfShader = stage.shManager.createShader("Sdf")), sdfShader);
        var stage;
        if (void 0 !== cache && null !== cache.vertices) {
            const t = renderProps.globalTransform;
            if (cache.layoutRef === layout && cache.color === renderProps.color && cache.ta === t.ta && cache.tc === t.tc && cache.tb === t.tb && cache.td === t.td) {
                let dx = t.tx - cache.tx, dy = t.ty - cache.ty;
                if ((0 !== dx || 0 !== dy) && dx === cache.lastDx && dy === cache.lastDy) {
                    const vertices = cache.vertices, len = vertices.length;
                    for (let i = 0; i < len; i += 6) vertices[i] = vertices[i] + dx, vertices[i + 1] = vertices[i + 1] + dy;
                    cache.tx = t.tx, cache.ty = t.ty, webGlRenderer.sdfBufferChanged = !0, dx = 0, dy = 0;
                }
                return cache.lastDx = dx, cache.lastDy = dy, webGlRenderer.addSdfCachedQuads(cache.vertices, cache.glyphCount, dx, dy, ctxTexture, renderProps.clippingRect, renderProps.worldAlpha, layout.width, layout.height, shader), 
                null;
            }
        }
        const startIdx = webGlRenderer.sdfBufferIdx;
        if (webGlRenderer.addSdfQuads(layout.glyphs, layout.glyphCount, layout.fontScale, renderProps.globalTransform, renderProps.color, renderProps.worldAlpha, layout.distanceRange, ctxTexture, renderProps.clippingRect, layout.width, layout.height, shader), 
        void 0 !== cache) {
            const endIdx = webGlRenderer.sdfBufferIdx, len = endIdx - startIdx;
            if (len > 0) {
                null !== cache.vertices && cache.vertices.length === len || (cache.vertices = new Float32Array(len)), 
                cache.vertices.set(webGlRenderer.fSdfBuffer.subarray(startIdx, endIdx)), cache.glyphCount = layout.glyphCount, 
                cache.color = renderProps.color, cache.layoutRef = layout, cache.lastDx = 0, cache.lastDy = 0;
                const t = renderProps.globalTransform;
                cache.ta = t.ta, cache.tc = t.tc, cache.tb = t.tb, cache.td = t.td, cache.tx = t.tx, 
                cache.ty = t.ty;
            }
        }
        return null;
    },
    init: stage => {
        init$3();
        const configuredCacheSize = stage.options.textLayoutCacheSize;
        void 0 !== configuredCacheSize && (maxLayoutCacheSize$1 = configuredCacheSize), 
        stage.shManager.registerShaderType("Sdf", Sdf), sdfShader = null;
    },
    cleanup: () => {
        for (;layoutCache$1.size > maxLayoutCacheSize$1; ) {
            const oldest = layoutCache$1.keys().next().value;
            layoutCache$1.delete(oldest);
        }
    }
}, CanvasFontHandler_exports = __exportAll({
    calculateFontMetrics: () => calculateFontMetrics,
    canRenderFont: () => canRenderFont,
    getFontFamilies: () => getFontFamilies,
    getFontMetrics: () => getFontMetrics,
    init: () => init$1,
    isFontLoaded: () => isFontLoaded,
    loadFont: () => loadFont,
    measureText: () => measureText,
    processFontMetrics: () => processFontMetrics,
    stopWaitingForFont: () => stopWaitingForFont,
    type: () => type$1,
    waitingForFont: () => waitingForFont
}), fontFamilies = {}, fontLoadPromises = new Map, normalizedMetrics = new Map, nodesWaitingForFont = Object.create(null), fontCache = new Map, initialized = !1, canRenderFont = () => !0, processFontData = (fontFamily, fontFace, metrics) => {
    metrics = metrics || defaultFontMetrics, fontCache.set(fontFamily, {
        fontFamily: fontFamily,
        fontFace: fontFace,
        metrics: metrics
    });
}, loadFont = (stage, options) => {
    const {fontFamily: fontFamily, fontUrl: fontUrl, metrics: metrics} = options, names = Array.isArray(fontFamily) ? fontFamily : [ fontFamily ], primary = names[0], prefetched = takeCanvasPrefetch(primary);
    if (!0 === fontCache.has(primary)) return Promise.resolve();
    const existingPromise = fontLoadPromises.get(primary);
    if (void 0 !== existingPromise) return existingPromise;
    for (let i = 0; i < names.length; i++) nodesWaitingForFont[names[i]] = [];
    const loadPromise = Promise.resolve(prefetched).then(faces => null != faces && faces.length === names.length ? faces : Promise.all(names.map(name => new FontFace(name, `url(${fontUrl})`).load()))).then(faces => {
        for (let i = 0; i < names.length; i++) {
            const loadedFont = faces[i];
            stage.platform.addFont(loadedFont), processFontData(names[i], loadedFont, metrics);
        }
    }).then(() => {
        for (let i = 0; i < names.length; i++) {
            const name = names[i];
            fontLoadPromises.delete(name);
            const nwff = nodesWaitingForFont[name];
            if (void 0 !== nwff) {
                for (let key in nwff) nwff[key].setUpdateType(UpdateType.Local);
                delete nodesWaitingForFont[name];
            }
        }
    }).catch(error => {
        for (let i = 0; i < names.length; i++) fontLoadPromises.delete(names[i]);
        throw console.error(`Failed to load font: ${primary}`, error), error;
    });
    for (let i = 0; i < names.length; i++) fontLoadPromises.set(names[i], loadPromise);
    return loadPromise;
}, getFontFamilies = () => fontFamilies, init$1 = (c, mc) => {
    if (!0 !== initialized) {
        if (void 0 === c) throw new Error("Canvas context is not provided for font handler initialization");
        measureContext$1 = mc || c, processFontData("sans-serif", void 0, {
            ascender: 800,
            descender: -200,
            lineGap: 200,
            unitsPerEm: 1e3
        }), initialized = !0;
    }
}, type$1 = "canvas", isFontLoaded = fontFamily => fontCache.has(fontFamily), waitingForFont = (fontFamily, node) => {
    void 0 !== nodesWaitingForFont[fontFamily] && (nodesWaitingForFont[fontFamily][node.id] = node);
}, stopWaitingForFont = (fontFamily, node) => {
    void 0 !== nodesWaitingForFont[fontFamily] && delete nodesWaitingForFont[fontFamily][node.id];
}, getFontMetrics = (fontFamily, fontSize) => {
    const out = normalizedMetrics.get(fontFamily + fontSize);
    if (void 0 !== out) return out;
    let metrics = fontCache.get(fontFamily).metrics;
    return void 0 === metrics && (metrics = calculateFontMetrics(fontFamily, fontSize)), 
    processFontMetrics(fontFamily, fontSize, metrics);
}, processFontMetrics = (fontFamily, fontSize, metrics) => {
    const label = fontFamily + fontSize, normalized = normalizeFontMetrics(metrics, fontSize);
    return normalizedMetrics.set(label, normalized), normalized;
}, measureText = (text, fontFamily, letterSpacing) => {
    if (0 === letterSpacing) return measureContext$1.measureText(text).width;
    let width = 0;
    for (let i = 0, n = text.length; i < n; i++) {
        const char = text.charAt(i);
        !0 !== hasZeroWidthSpace(char) && (width += measureContext$1.measureText(char).width + letterSpacing);
    }
    return width;
};

function calculateFontMetrics(fontFamily, fontSize) {
    var _ref, _metrics$fontBounding, _ref2, _metrics$fontBounding2, _metrics$emHeightAsce, _metrics$emHeightDesc, _metrics$emHeightAsce2, _metrics$emHeightDesc2;
    const metrics = measureContext$1.measureText("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz");
    console.warn(`Font metrics not provided for Canvas Web font ${fontFamily}. Using fallback values. It is HIGHLY recommended you use the latest version of the Lightning 3 \`msdf-generator\` tool to extract the default metrics for the font and provide them in the Canvas Web font definition.`);
    const ascender = null !== (_ref = null !== (_metrics$fontBounding = metrics.fontBoundingBoxAscent) && void 0 !== _metrics$fontBounding ? _metrics$fontBounding : metrics.actualBoundingBoxAscent) && void 0 !== _ref ? _ref : 0, descender = null !== (_ref2 = null !== (_metrics$fontBounding2 = metrics.fontBoundingBoxDescent) && void 0 !== _metrics$fontBounding2 ? _metrics$fontBounding2 : metrics.actualBoundingBoxDescent) && void 0 !== _ref2 ? _ref2 : 0;
    return {
        ascender: ascender,
        descender: -descender,
        lineGap: (null !== (_metrics$emHeightAsce = metrics.emHeightAscent) && void 0 !== _metrics$emHeightAsce ? _metrics$emHeightAsce : 0) + (null !== (_metrics$emHeightDesc = metrics.emHeightDescent) && void 0 !== _metrics$emHeightDesc ? _metrics$emHeightDesc : 0) - (ascender + descender),
        unitsPerEm: (null !== (_metrics$emHeightAsce2 = metrics.emHeightAscent) && void 0 !== _metrics$emHeightAsce2 ? _metrics$emHeightAsce2 : 0) + (null !== (_metrics$emHeightDesc2 = metrics.emHeightDescent) && void 0 !== _metrics$emHeightDesc2 ? _metrics$emHeightDesc2 : 0)
    };
}

var font = CanvasFontHandler_exports, canvas = null, context = null, measureCanvas = null, measureContext = null, layoutCache = new Map, maxLayoutCacheSize = 250, CanvasTextRenderer = {
    type: "canvas",
    font: font,
    renderText: props => {
        var _props$color;
        if (0 === props.text.length) return {
            width: 0,
            height: 0
        };
        const {text: text, fontFamily: fontFamily, fontStyle: fontStyle, fontSize: fontSize, textAlign: textAlign, maxLines: maxLines, lineHeight: lineHeight, verticalAlign: verticalAlign, overflowSuffix: overflowSuffix, maxWidth: maxWidth, maxHeight: maxHeight, wordBreak: wordBreak} = props, font = `${fontStyle} ${fontSize}px Unknown, ${fontFamily}`;
        measureContext.font = font, measureContext.textBaseline = "alphabetic";
        const metrics = getFontMetrics(fontFamily, fontSize), letterSpacing = props.letterSpacing, [lines, remainingLines, hasRemainingText, bareLineHeight, lineHeightPx, effectiveWidth, effectiveHeight] = mapTextLayout(measureText, metrics, text, textAlign, fontFamily, lineHeight, overflowSuffix, wordBreak, letterSpacing, maxLines, maxWidth, maxHeight), lineAmount = lines.length, canvasW = Math.ceil(effectiveWidth), canvasH = Math.ceil(effectiveHeight);
        canvas.width = canvasW, canvas.height = canvasH;
        const color = null !== (_props$color = props.color) && void 0 !== _props$color ? _props$color : 4294967295, r = color >>> 24 & 255, g = color >>> 16 & 255, b = color >>> 8 & 255, a = 255 & color;
        context.fillStyle = `rgba(${r},${g},${b},${a / 255})`, context.font = font, context.textBaseline = "alphabetic", 
        fontSize >= 128 && (context.globalAlpha = .01, context.fillRect(0, 0, .01, .01), 
        context.globalAlpha = 1);
        for (let i = 0; i < lineAmount; i++) {
            const line = lines[i], textLine = line[0];
            let currentX = Math.ceil(line[3]);
            const currentY = Math.ceil(line[4]);
            if (0 === letterSpacing) context.fillText(textLine, currentX, currentY); else {
                const textLineLength = textLine.length;
                for (let j = 0; j < textLineLength; j++) {
                    const char = textLine.charAt(j);
                    !0 !== hasZeroWidthSpace(char) && (context.fillText(char, currentX, currentY), currentX += measureText(char, fontFamily, letterSpacing));
                }
            }
        }
        let imageData = null;
        return canvas.width > 0 && canvas.height > 0 && (imageData = context.getImageData(0, 0, canvasW, canvasH)), 
        {
            imageData: imageData,
            width: effectiveWidth,
            height: effectiveHeight,
            remainingLines: remainingLines,
            hasRemainingText: hasRemainingText
        };
    },
    addQuads: () => null,
    renderQuads: () => {},
    init: stage => {
        const dpr = stage.options.devicePhysicalPixelRatio, configuredCacheSize = stage.options.textLayoutCacheSize;
        void 0 !== configuredCacheSize && (maxLayoutCacheSize = configuredCacheSize), canvas = stage.platform.createCanvas(), 
        (context = canvas.getContext("2d", {
            willReadFrequently: !0
        })).setTransform(dpr, 0, 0, dpr, 0, 0), context.textRendering = "optimizeSpeed", 
        measureCanvas = stage.platform.createCanvas(), (measureContext = measureCanvas.getContext("2d")).setTransform(dpr, 0, 0, dpr, 0, 0), 
        measureContext.textRendering = "optimizeSpeed", measureCanvas.width = 1, measureCanvas.height = 1, 
        init$1(context, measureContext);
    },
    clearLayoutCache: () => {
        layoutCache.clear();
    },
    cleanup: () => {
        for (;layoutCache.size > maxLayoutCacheSize; ) {
            const oldest = layoutCache.keys().next().value;
            layoutCache.delete(oldest);
        }
    }
}, WHITE = {
    isWhite: !0,
    a: 1,
    r: 255,
    g: 255,
    b: 255
}, SCRATCH = {
    isWhite: !1,
    a: 1,
    r: 0,
    g: 0,
    b: 0
};

var CanvasTexture = class extends CoreContextTexture {
    constructor(..._args) {
        super(..._args), this.image = void 0, this.tintCache = void 0;
    }
    load() {
        const textureData = this.textureSource.textureData;
        this.textureSource.setState("loading");
        try {
            null == textureData || textureData.data;
            const size = this.onLoadRequest(textureData.data);
            if ("freed" === this.textureSource.state) return void (this.image = void 0);
            this.textureSource.setState("loaded", size), this.textureSource.freeTextureData(), 
            this.updateMemSize();
        } catch (err) {
            this.textureSource.setState("failed", err), this.textureSource.freeTextureData();
        }
    }
    release() {
        this.image = void 0, this.tintCache = void 0;
    }
    free() {
        this.release(), this.textureSource.setState("freed"), this.setTextureMemUse(0), 
        this.textureSource.freeTextureData();
    }
    updateMemSize() {
        const mult = this.tintCache ? 8 : 4;
        this.textureSource.dimensions && this.setTextureMemUse(this.textureSource.dimensions.w * this.textureSource.dimensions.h * mult);
    }
    hasImage() {
        return void 0 !== this.image;
    }
    getImage(color) {
        var _this$tintCache;
        const image = this.image;
        if (void 0 === image) return null;
        if (color.isWhite) return this.tintCache && (this.tintCache = void 0, this.updateMemSize()), 
        image;
        const key = function({a: a, r: r, g: g, b: b}) {
            return `rgba(${r},${g},${b},${a})`;
        }(color);
        if ((null == (_this$tintCache = this.tintCache) ? void 0 : _this$tintCache.key) === key) return this.tintCache.image;
        const tintedImage = this.tintTexture(image, key);
        return this.tintCache = {
            key: key,
            image: tintedImage
        }, this.updateMemSize(), tintedImage;
    }
    tintTexture(source, color) {
        const {width: width, height: height} = source, canvas = document.createElement("canvas");
        canvas.width = width, canvas.height = height;
        const ctx = canvas.getContext("2d");
        return ctx && (ctx.fillStyle = color, ctx.globalCompositeOperation = "copy", ctx.fillRect(0, 0, width, height), 
        ctx.globalCompositeOperation = "multiply", ctx.drawImage(source, 0, 0, width, height, 0, 0, width, height), 
        ctx.globalCompositeOperation = "destination-in", ctx.drawImage(source, 0, 0, width, height, 0, 0, width, height)), 
        canvas;
    }
    onLoadRequest(data) {
        if (null === data) throw new Error("CanvasTexture: Texture data is null");
        if ("object" == typeof data && "mipmaps" in data) throw new Error("CanvasTexture: Compressed texture data is not supported in Canvas2D render mode");
        if (data instanceof ImageData) {
            const canvas = document.createElement("canvas");
            canvas.width = data.width, canvas.height = data.height;
            const ctx = canvas.getContext("2d");
            return null !== ctx && ctx.putImageData(data, 0, 0), this.image = canvas, {
                w: data.width,
                h: data.height
            };
        }
        return "undefined" != typeof ImageBitmap && data instanceof ImageBitmap || data instanceof HTMLImageElement ? (this.image = data, 
        {
            w: data.width,
            h: data.height
        }) : {
            w: 0,
            h: 0
        };
    }
}, parsedArgbColors = new Map, parsedRgbaColors = new Map;

function normalizeCanvasColor(color, isRGBA = !1) {
    let targetCache = !0 === isRGBA ? parsedRgbaColors : parsedArgbColors, out = targetCache.get(color);
    return void 0 !== out || (!0 === isRGBA ? out = `rgba(${(rgba = color) >>> 24 & 255},${rgba >>> 16 & 255},${rgba >>> 8 & 255},${(255 & rgba) / 255})` : out = `rgba(${255 & (abgr = color)},${abgr >>> 8 & 255},${abgr >>> 16 & 255},${(abgr >>> 24 & 255) / 255})`, 
    targetCache.set(color, out)), out;
    var abgr, rgba;
}

var CanvasShaderNode = class extends CoreShaderNode {
    constructor(shaderKey, config, stage, props) {
        if (super(shaderKey, config, stage, props), this.updater = void 0, this.computed = {}, 
        this.applySNR = void 0, this.render = void 0, this.applySNR = config.saveAndRestore || !1, 
        this.render = config.render, void 0 !== config.update) {
            if (this.updater = config.update, void 0 === this.props) return void this.updater(this.node, this.props);
            this.update = () => {
                const prevKey = this.valueKey;
                if (this.valueKey = this.createValueKey(), prevKey === this.valueKey) return;
                prevKey.length > 0 && this.stage.shManager.mutateShaderValueUsage(prevKey, -1);
                const computed = this.stage.shManager.getShaderValues(this.valueKey);
                void 0 === computed ? (this.computed = {}, this.updater(this.node), this.stage.shManager.setShaderValues(this.valueKey, this.computed)) : this.computed = computed;
            };
        }
    }
    toColorString(rgba) {
        return normalizeCanvasColor(rgba, !0);
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

function lazy(fn) {
    let comp, p;
    const wrap = props => {
        const ctx = sharedConfig.context;
        if (ctx) {
            const [s, set] = createSignal();
            sharedConfig.count || (sharedConfig.count = 0), sharedConfig.count++, (p || (p = fn())).then(mod => {
                !sharedConfig.done && (sharedConfig.context = ctx), sharedConfig.count--, set(() => mod.default), 
                sharedConfig.context = void 0;
            }).catch(() => {}), comp = s;
        } else if (!comp) {
            const [s] = createResource(() => (p || (p = fn())).then(mod => mod.default));
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
    return wrap.preload = () => p || ((p = fn()).then(mod => comp = () => mod.default), 
    p), wrap;
}

var columnScroll = withScrolling(!1), rowStyles = {
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

function Root(props) {
    const location = props.routerState.location, params = props.routerState.params, data = createMemo(() => props.preload && untrack(() => {
        setInPreloadFn(!0), props.preload({
            params: params,
            location: location,
            intent: getIntent() || "initial"
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

function createRouter(config) {
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
    })), router = {
        signal: signal,
        create: config.create,
        utils: config.utils
    }, props => {
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
    var router;
}

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
    return createRouter({
        get: getSource,
        set({value: value, replace: replace, state: state}) {
            replace ? window.history.replaceState(keepDepth(state), "", "#" + value) : window.history.pushState(state, "", "#" + value), 
            saveCurrentDepth();
        },
        init: notify => function(target, type, handler) {
            return target.addEventListener(type, handler), () => target.removeEventListener(type, handler);
        }(window, "hashchange", notifyIfNotBlocked(notify, delta => !beforeLeave.confirm(delta && delta < 0 ? delta : getSource()))),
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
}, {
    userKeyHoldMap: {
        EnterHold: [ "Enter", 13 ],
        BackHold: [ "b", 66 ]
    },
    holdThreshold: 1e3
}), function(myApp = rootNode, throttleBy = 100, options) {
    const pos = useMousePosition(), scheduled = createScheduled(fn => throttle(fn, throttleBy));
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
}(void 0, 100, {
    customStates: {
        hoverState: "$hover",
        pressedState: "$pressed",
        pressedStateDuration: 150
    }
}), props.children);

var genreListCache, Browse = props => {
    usePreloadRoute();
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
    }(props.data())), delayedBackgrounds = debounce(img => setGlobalBackground(img), 800), delayedHero = debounce(content => setHeroContent(content || {}), 600);
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
        return entity && (null == (_entity$item = entity.item) || _entity$item.href), navigate(entity.item.href), 
        !0;
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
    const delayedBackgrounds = debounce(setGlobalBackground, 800), delayedHero = debounce(content => setHeroContent(content || {}), 600);
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
}, handleResults = response => response.then(({results: results}) => convertItemsToTiles(results.filter(r => !r.adult))).catch(err => {
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
}, fonts_default = [ {
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

var NavDrawer_styles_default = {
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
}, NavButtonTextStyles = {
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
    const navigate = useNavigate(), announcer = (doOnce || (doOnce = !0, Announcer.setupTimers(options), 
    createEffect(on(focusPath, Announcer.onFocusChange, {
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
        !0)), setProp(_el$, "onBack", () => (navDrawer.states.has("focus") ? navigate(-1) : focusNavDrawer(), 
        !0)), setProp(_el$, "style", {
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

var Player = lazy(() => __vitePreload(() => import("./Player-_Zkv65Sa.js"), __vite__mapDeps([0,1,2,3,4,5,6]))), Grid = lazy(() => __vitePreload(() => import("./Grid-D4ZXGgRF.js"), __vite__mapDeps([7,2,8,3,9,10,11,6]))), Loops = lazy(() => __vitePreload(() => import("./Loops-CCDVK9sT.js"), __vite__mapDeps([12,2,9,13,10,3,8,14,15,16,11,6]))), Infinite = lazy(() => __vitePreload(() => import("./Infinite-XLJM2VaS.js"), __vite__mapDeps([17,2,9,15,3,10,8,14,16,11,6]))), TMDBGrid = lazy(() => __vitePreload(() => import("./TMDBGrid-D28hHaxi.js"), __vite__mapDeps([18,2,9,10,3,19,11,15,8,14,16,6,20]))), Portal = lazy(() => __vitePreload(() => import("./Portal-CKwB1ebT.js"), __vite__mapDeps([21,2,9,22,8,3,10,14,23,4,5,16,11]))), MatrixPage = lazy(() => __vitePreload(() => import("./Matrix-Doy9VzJF.js"), __vite__mapDeps([24,2,8,3,9,10,14]))), TextPage = lazy(() => __vitePreload(() => import("./Text-gtbQ9UKN.js"), __vite__mapDeps([25,2,3,6]))), TextPosterPage = lazy(() => __vitePreload(() => import("./TextPoster-UbiiO-HK.js"), __vite__mapDeps([26,2,14,3,9,10,6]))), CreatePage = lazy(() => __vitePreload(() => import("./Create-CiqNzge4.js"), __vite__mapDeps([27,2,3,9,6]))), ViewportPage = lazy(() => __vitePreload(() => import("./Viewport-CIHRWE5z.js"), __vite__mapDeps([28,2,6]))), PositioningPage = lazy(() => __vitePreload(() => import("./Positioning-BAUa88_h.js"), __vite__mapDeps([29,2,6]))), LayoutPage = lazy(() => __vitePreload(() => import("./Layout-CrxF3sLd.js"), __vite__mapDeps([30,2,15,3,9,10,8,14,16,11,6]))), FocusBasicsPage = lazy(() => __vitePreload(() => import("./FocusBasics-Nsi8AbNI.js"), __vite__mapDeps([31,2,14,3,9,10,15,8,16,11,6]))), KeyHandlingPage = lazy(() => __vitePreload(() => import("./KeyHandling-CYKoRt-L.js"), __vite__mapDeps([32,2,15,3,9,10,8,14,16,11,6]))), TransitionsPage = lazy(() => __vitePreload(() => import("./Transitions-BQ9jN7tz.js"), __vite__mapDeps([33,2,6]))), ComponentsPage = lazy(() => __vitePreload(() => import("./Components-BCmR2btQ.js"), __vite__mapDeps([34,2,9,15,3,10,8,14,16,11,6]))), FocusHandlingPage = lazy(() => __vitePreload(() => import("./FocusHandling-Dk4QhTYU.js"), __vite__mapDeps([35,2,9,8,3,10,14,6]))), GradientsPage = lazy(() => __vitePreload(() => import("./Gradients-izPcv9ux.js"), __vite__mapDeps([36,2,6]))), FlexPage = lazy(() => __vitePreload(() => import("./Flex-CRTR1mNF.js"), __vite__mapDeps([37,2,9,8,3,10,14,16,11,6]))), FlexGrowPage = lazy(() => __vitePreload(() => import("./FlexGrow-BropKolX.js"), __vite__mapDeps([38,2,9,8,3,10,14,16,11,6]))), FlexMenuPage = lazy(() => __vitePreload(() => import("./FlexMenu-BlxD0flU.js"), __vite__mapDeps([39,2,9,8,3,10,6]))), FlexSizePage = lazy(() => __vitePreload(() => import("./FlexSize-Cm9-pjnu.js"), __vite__mapDeps([40,2,9,8,3,10,14,16,11,6]))), FlexColumnSizePage = lazy(() => __vitePreload(() => import("./FlexColumnSize-B2a1nnSv.js"), __vite__mapDeps([41,2,3,9,8,10,14,6]))), FlexColumnPage = lazy(() => __vitePreload(() => import("./FlexColumn-BbEy34RZ.js"), __vite__mapDeps([42,2,3,9,8,10,14,6]))), ButtonsMaterialPage = lazy(() => __vitePreload(() => import("./ButtonsMaterial-COk8GVod.js"), __vite__mapDeps([43,2,3,9,14,10,16,11]))), SuperFlexPage = lazy(() => __vitePreload(() => import("./SuperFlex-CNOJ3bg5.js"), __vite__mapDeps([44,2,8,3,9,10,14]))), Entity = lazy(() => __vitePreload(() => import("./Entity-BvSlcYMH.js"), __vite__mapDeps([45,2,8,3,9,10,14,19,11,15,16,4,5,6]))), People = lazy(() => __vitePreload(() => import("./People-AWZskBkP.js"), __vite__mapDeps([46,2,8,3,9,10,15,14,16,11,4,5,6,47,48]))), FireboltPage = lazy(() => __vitePreload(() => import("./Firebolt-CrVzqT6F.js"), __vite__mapDeps([49,2,14,3,9,10,6]))), LoginPage = lazy(() => __vitePreload(() => import("./Login-WLMYWzO0.js"), __vite__mapDeps([50,2,9,10,3,8,14,6]))), VirtualPage = lazy(() => __vitePreload(() => import("./Virtual-BMEIPlVQ.js"), __vite__mapDeps([51,2,13,9,10,3,8,14,15,16,11,6]))), TagsPage = lazy(() => __vitePreload(() => import("./Tags-Gf5XvDZ6.js"), __vite__mapDeps([52,2,9,6]))), ImagePerformance = lazy(() => __vitePreload(() => import("./ImagePerformance-D27EtnUP.js"), __vite__mapDeps([53,2,47,54]))), LargeImagePerformance = lazy(() => __vitePreload(() => import("./LargeImagePerformance-FCvQJOub.js"), __vite__mapDeps([55,2,47,54]))), MixedImagePerformance = lazy(() => __vitePreload(() => import("./MixedImagePerformance-CDK58Ai8.js"), __vite__mapDeps([56,2,47,54]))), TextureCompressionPerformance = lazy(() => __vitePreload(() => import("./TextureCompressionPerformance-Bbdzvt5E.js"), __vite__mapDeps([57,2]))), ComplexFlexPage = lazy(() => __vitePreload(() => import("./ComplexFlex-C5Ls7eHF.js"), __vite__mapDeps([58,2,8,3,9,10,14]))), ComplexFlexCapsPage = lazy(() => __vitePreload(() => import("./ComplexFlexCaps-Bd8DcEyN.js"), __vite__mapDeps([59,2,8,3,9,10,14]))), BenchmarkPage = lazy(() => __vitePreload(() => import("./Benchmark-B2FpKgkD.js"), __vite__mapDeps([60,1,2,61,9,13,10,3,8,14,19,11,23,15,16,6,20]))), RendererVersionsPage = lazy(() => __vitePreload(() => import("./RendererVersions-CGJXZked.js"), __vite__mapDeps([62,2,6]))), TextCenteringPage = lazy(() => __vitePreload(() => import("./TextCentering-BQiuVxJc.js"), __vite__mapDeps([63,2,9,11,6]))), CountdownTimerPage = lazy(() => __vitePreload(() => import("./CountdownTimer-BceO_tyg.js"), __vite__mapDeps([64,2,11,6]))), CustomButtonsPage = lazy(() => __vitePreload(() => import("./CustomButtons-D60EZHLT.js"), __vite__mapDeps([65,2,8,3,9,10,14,66,11,6]))), numImageWorkers = "undefined" != typeof window && window.createImageBitmap ? 1 : 0, urlParams = new URLSearchParams(window.location.search), numWorkers = urlParams.get("numImageWorkers"), screenSize = urlParams.get("size") || "default", rendererMode = urlParams.get("mode") || "webgl", animationsEnabled = urlParams.get("animate") || "true", enableContextSpy = "true" === urlParams.get("contextSpy"), forceWebGL2 = "true" === urlParams.get("webgl2"), textBaseline = urlParams.get("textBaseline");

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
    targetFPS: 0,
    enableClear: !0,
    enableContextSpy: enableContextSpy,
    forceWebGL2: forceWebGL2
}, textBaseline && (Config.rendererOptions.textBaselineMode = textBaseline), "canvas" === rendererMode ? (Config.rendererOptions.fontEngines = [ CanvasTextRenderer ], 
Config.rendererOptions.renderEngine = class extends CoreRenderer {
    constructor(options) {
        super(options), this.context = void 0, this.canvas = void 0, this.pixelRatio = void 0, 
        this.clearColor = void 0, this.clearColorAlpha = void 0, this.shaderContextNode = null, 
        this.shaderContextTexture = null, this.shaderRenderContext = () => {
            this.renderContext(this.shaderContextNode, this.shaderContextTexture);
        }, this.mode = "canvas";
        const {canvas: canvas} = options;
        this.canvas = canvas, this.context = canvas.getContext("2d"), this.pixelRatio = this.stage.pixelRatio, 
        this.clearColor = normalizeCanvasColor(this.stage.clearColor), this.clearColorAlpha = this.stage.clearColor >>> 24 & 255;
    }
    reset() {
        const ctx = this.context, w = this.canvas.width, h = this.canvas.height;
        ctx.setTransform(1, 0, 0, 1, 0, 0), ctx.clearRect(0, 0, w, h), 0 !== this.clearColorAlpha && (ctx.fillStyle = this.clearColor, 
        ctx.fillRect(0, 0, w, h)), ctx.scale(this.pixelRatio, this.pixelRatio);
    }
    render() {}
    addQuad(node, renderTexture) {
        const ctx = this.context, {tx: tx, ty: ty, ta: ta, tb: tb, tc: tc, td: td} = node.globalTransform, clippingRect = node.clippingRect;
        let texture = void 0 !== renderTexture ? renderTexture : !0 === node.placeholderActive ? this.stage.defaultTexture : node.props.texture || this.stage.defaultTexture;
        if (null !== texture) {
            const textureType = texture.type;
            if (textureType !== TextureType.image && textureType !== TextureType.subTexture && textureType !== TextureType.color && textureType !== TextureType.noise) return;
        }
        const hasTransform = 1 !== ta || 1 !== td || 0 !== tb || 0 !== tc, clippingValid = !0 === clippingRect.valid;
        if (!0 === clippingValid && 0 === clippingRect.w && 0 === clippingRect.h) return;
        const hasClipping = !0 === clippingValid && 0 !== clippingRect.w && 0 !== clippingRect.h, shader = node.props.shader, hasShader = null !== shader;
        let saveAndRestore = !0 === hasTransform || !0 === hasClipping;
        if (!0 === hasShader && (saveAndRestore = saveAndRestore || shader.applySNR), saveAndRestore && ctx.save(), 
        !0 === hasClipping && (ctx.beginPath(), ctx.rect(clippingRect.x, clippingRect.y, clippingRect.w, clippingRect.h), 
        ctx.clip()), !0 === hasTransform) {
            const scale = this.pixelRatio;
            ctx.setTransform(ta, tc, tb, td, tx * scale, ty * scale), ctx.scale(scale, scale), 
            ctx.translate(-tx, -ty);
        }
        !0 === hasShader ? (this.shaderContextNode = node, this.shaderContextTexture = texture, 
        shader.render(ctx, node, this.shaderRenderContext), this.shaderContextNode = null, 
        this.shaderContextTexture = null) : this.renderContext(node, texture), saveAndRestore && ctx.restore();
    }
    renderContext(node, texture) {
        const color = node.premultipliedColorTl, textureType = texture.type, tx = node.globalTransform.tx, ty = node.globalTransform.ty, width = node.props.w, height = node.props.h;
        if (textureType !== TextureType.color) {
            var _tintColor$a;
            const tintColor = 4294967295 === (abgr = color) ? WHITE : (SCRATCH.a = (abgr >>> 24 & 255) / 255, 
            SCRATCH.b = abgr >>> 16 & 255, SCRATCH.g = abgr >>> 8 & 255, SCRATCH.r = 255 & abgr, 
            SCRATCH);
            let image;
            if (image = textureType === TextureType.subTexture ? texture.parentTexture.ctxTexture.getImage(tintColor) : texture.ctxTexture.getImage(tintColor), 
            null == image) return;
            const imageWidth = image.width, imageHeight = image.height;
            if ("number" != typeof imageWidth || "number" != typeof imageHeight || imageWidth <= 0 || imageHeight <= 0) return;
            this.context.globalAlpha = null !== (_tintColor$a = tintColor.a) && void 0 !== _tintColor$a ? _tintColor$a : node.worldAlpha;
            const txCoords = node.textureCoords;
            if (txCoords) {
                const ix = imageWidth, iy = imageHeight;
                let sx = txCoords.x1 * ix, sy = txCoords.y1 * iy, sw = (txCoords.x2 - txCoords.x1) * ix, sh = (txCoords.y2 - txCoords.y1) * iy, flipX = !1, flipY = !1;
                sw < 0 && (flipX = !0, sx += sw, sw = Math.abs(sw)), sh < 0 && (flipY = !0, sy += sh, 
                sh = Math.abs(sh)), flipX || flipY ? (this.context.save(), this.context.translate(tx + (flipX ? width : 0), ty + (flipY ? height : 0)), 
                this.context.scale(flipX ? -1 : 1, flipY ? -1 : 1), this.context.drawImage(image, sx, sy, sw, sh, 0, 0, width, height), 
                this.context.restore()) : this.context.drawImage(image, sx, sy, sw, sh, tx, ty, width, height);
            } else this.context.drawImage(image, tx, ty, width, height);
            return void (this.context.globalAlpha = 1);
        }
        var abgr;
        if (1 == (node.premultipliedColorTl !== node.premultipliedColorTr || node.premultipliedColorTl !== node.premultipliedColorBr)) {
            let endColor, endX = tx, endY = ty;
            node.premultipliedColorTl === node.premultipliedColorTr ? (endX = tx, endY = ty + height, 
            endColor = node.premultipliedColorBr) : (endX = tx + width, endY = ty, endColor = node.premultipliedColorTr);
            let startColor = color;
            const startAlpha = startColor >>> 24 & 255, endAlpha = endColor >>> 24 & 255;
            0 === startAlpha && endAlpha > 0 ? startColor = (4278190080 & startColor | 16777215 & endColor) >>> 0 : 0 === endAlpha && startAlpha > 0 && (endColor = (4278190080 & endColor | 16777215 & startColor) >>> 0);
            const gradient = this.context.createLinearGradient(tx, ty, endX, endY);
            gradient.addColorStop(0, normalizeCanvasColor(startColor)), gradient.addColorStop(1, normalizeCanvasColor(endColor)), 
            this.context.fillStyle = gradient, this.context.fillRect(tx, ty, width, height);
        } else this.context.fillStyle = normalizeCanvasColor(color), this.context.fillRect(tx, ty, width, height);
    }
    renderNodeContent(node, target) {
        let texture = node.props.texture;
        !0 !== node.placeholderActive && null !== texture || (texture = this.stage.defaultTexture);
        const prev = this.context;
        this.context = target, this.renderContext(node, texture), this.context = prev;
    }
    createShaderNode(shaderKey, shaderType, props) {
        return new CanvasShaderNode(shaderKey, shaderType, this.stage, props);
    }
    createShaderProgram(_shaderConfig) {
        return null;
    }
    supportsShaderType(shaderType) {
        return void 0 !== shaderType.render;
    }
    createCtxTexture(textureSource) {
        return new CanvasTexture(this.stage.txMemManager, textureSource);
    }
    getBufferInfo() {
        return null;
    }
    getQuadCount() {
        return null;
    }
    getRenderOpCount() {
        return null;
    }
    getCapabilities() {
        return {
            renderMode: "canvas",
            webGlVersion: null,
            vertexArrayObject: !1,
            maxTextureSize: 0,
            maxTextureUnits: 0
        };
    }
    checkForOutOfMemory() {
        return !1;
    }
    updateClearColor(color) {
        this.clearColor = normalizeCanvasColor(color), this.clearColorAlpha = color >>> 24 & 255;
    }
    getTextureCoords(node) {
        const texture = node.texture;
        if (null === texture) return;
        if (void 0 === (texture.type === TextureType.subTexture ? texture.parentTexture.ctxTexture : texture.ctxTexture)) return;
        const textureOptions = node.props.textureOptions;
        if (texture.type !== TextureType.subTexture && void 0 === textureOptions) return {
            x1: 0,
            y1: 0,
            x2: 1,
            y2: 1
        };
        let x1 = 0, y1 = 0, x2 = 1, y2 = 1;
        if (texture.type === TextureType.subTexture) {
            const {w: parentW, h: parentH} = texture.parentTexture.dimensions, {x: x, y: y, w: w, h: h} = texture.props;
            x1 = x / parentW, y1 = y / parentH, x2 = x1 + w / parentW, y2 = y1 + h / parentH;
        }
        if (null != textureOptions) {
            const resizeMode = textureOptions.resizeMode;
            if (void 0 !== resizeMode && "cover" === resizeMode.type && null !== texture.dimensions) {
                const dimensions = texture.dimensions, w = node.props.w, h = node.props.h, scaleX = w / dimensions.w, scaleY = h / dimensions.h, scale = Math.max(scaleX, scaleY), precision = 1 / scale;
                if (scaleX < scale) {
                    var _resizeMode$clipX;
                    const desiredSize = precision * node.props.w;
                    x1 = (1 - desiredSize / dimensions.w) * clampUnit(null !== (_resizeMode$clipX = resizeMode.clipX) && void 0 !== _resizeMode$clipX ? _resizeMode$clipX : .5), 
                    x2 = x1 + desiredSize / dimensions.w;
                }
                if (scaleY < scale) {
                    var _resizeMode$clipY;
                    const desiredSize = precision * node.props.h;
                    y1 = (1 - desiredSize / dimensions.h) * clampUnit(null !== (_resizeMode$clipY = resizeMode.clipY) && void 0 !== _resizeMode$clipY ? _resizeMode$clipY : .5), 
                    y2 = y1 + desiredSize / dimensions.h;
                }
            }
            !0 === textureOptions.flipX && ([x1, x2] = [ x2, x1 ]), !0 === textureOptions.flipY && ([y1, y2] = [ y2, y1 ]);
        }
        return {
            x1: x1,
            y1: y1,
            x2: x2,
            y2: y2
        };
    }
    updateViewport() {}
    getDefaultShaderNode() {
        return null;
    }
}) : (Config.rendererOptions.fontEngines = [ SdfTextRenderer ], Config.rendererOptions.renderEngine = class extends CoreRenderer {
    constructor(options) {
        super(options), this.glw = void 0, this.quadBuffer = void 0, this.fQuadBuffer = void 0, 
        this.uiQuadBuffer = void 0, this.renderOps = [], this.coreTextRenderOps = [], this.curBufferIdx = 0, 
        this.curRenderOp = null, this.attachedShader = null, this.sdfBuffer = void 0, this.fSdfBuffer = void 0, 
        this.uiSdfBuffer = void 0, this.sdfBufferIdx = 0, this.sdfQuadCount = 0, this.sdfQuadBufferCollection = void 0, 
        this.curSdfRenderOp = null, this.sdfBufferChanged = !0, this.lastUploadedSdfSize = 0, 
        this.sdfWriteSig = 0, this.lastUploadedSdfSig = 0, this.needsFullUpload = !0, this.defaultTextureCoords = UNIT_TEXTURE_COORDS, 
        this.defaultShaderNode = null, this.quadBufferCollection = void 0, this.indexBuffer = null, 
        this.clearColor = {
            raw: 0,
            normalized: [ 0, 0, 0, 0 ]
        }, this.quadBufferUsage = 0, this.numQuadsRendered = 0, this.quadBufferSize = void 0, 
        this.lastUploadedBufferSize = 0, this.dirtyQuadCount = 0, this.quadBufferSize = Math.min(this.stage.options.quadBufferSize, MAX_QUAD_BUFFER_SIZE), 
        this.quadBuffer = new ArrayBuffer(this.quadBufferSize), this.fQuadBuffer = new Float32Array(this.quadBuffer), 
        this.uiQuadBuffer = new Uint32Array(this.quadBuffer), this.sdfBuffer = new ArrayBuffer(262144), 
        this.fSdfBuffer = new Float32Array(this.sdfBuffer), this.uiSdfBuffer = new Uint32Array(this.sdfBuffer), 
        this.mode = "webgl";
        const gl = createWebGLContext(options.canvas, options.forceWebGL2, options.contextSpy), glw = this.glw = new WebGlContextWrapper(gl, options.disableVertexArrayObject);
        glw.viewport(0, 0, glw.canvasW, glw.canvasH), this.attachContextLossListeners(options.canvas), 
        this.updateClearColor(this.stage.clearColor), glw.setBlend(!0), glw.blendFunc(glw.ONE, glw.ONE_MINUS_SRC_ALPHA), 
        this.indexBuffer = createIndexBuffer(glw);
        const nodeCoords = new Float32Array(8 * MAX_QUADS);
        for (let i = 0; i < 8 * MAX_QUADS; i += 8) nodeCoords[i] = 0, nodeCoords[i + 1] = 0, 
        nodeCoords[i + 2] = 1, nodeCoords[i + 3] = 0, nodeCoords[i + 4] = 0, nodeCoords[i + 5] = 1, 
        nodeCoords[i + 6] = 1, nodeCoords[i + 7] = 1;
        const nodeCoordsBuffer = glw.createBuffer();
        glw.arrayBufferData(nodeCoordsBuffer, nodeCoords, glw.STATIC_DRAW);
        const quadBuffer = glw.createBuffer();
        this.quadBufferCollection = new BufferCollection([ {
            buffer: quadBuffer,
            attributes: {
                a_position: {
                    name: "a_position",
                    size: 2,
                    type: glw.FLOAT,
                    normalized: !1,
                    stride: 16,
                    offset: 0
                },
                a_textureCoords: {
                    name: "a_textureCoords",
                    size: 2,
                    type: glw.UNSIGNED_SHORT,
                    normalized: !0,
                    stride: 16,
                    offset: 8
                },
                a_color: {
                    name: "a_color",
                    size: 4,
                    type: glw.UNSIGNED_BYTE,
                    normalized: !0,
                    stride: 16,
                    offset: 12
                }
            }
        }, {
            buffer: nodeCoordsBuffer,
            attributes: {
                a_nodeCoords: {
                    name: "a_nodeCoords",
                    size: 2,
                    type: glw.FLOAT,
                    normalized: !1,
                    stride: 2 * Float32Array.BYTES_PER_ELEMENT,
                    offset: 0
                }
            }
        } ]);
        const sdfWebGlBuffer = glw.createBuffer(), sdfStride = 6 * Float32Array.BYTES_PER_ELEMENT;
        this.sdfQuadBufferCollection = new BufferCollection([ {
            buffer: sdfWebGlBuffer,
            attributes: {
                a_position: {
                    name: "a_position",
                    size: 2,
                    type: glw.FLOAT,
                    normalized: !1,
                    stride: sdfStride,
                    offset: 0
                },
                a_textureCoords: {
                    name: "a_textureCoords",
                    size: 2,
                    type: glw.FLOAT,
                    normalized: !1,
                    stride: sdfStride,
                    offset: 2 * Float32Array.BYTES_PER_ELEMENT
                },
                a_color: {
                    name: "a_color",
                    size: 4,
                    type: glw.UNSIGNED_BYTE,
                    normalized: !0,
                    stride: sdfStride,
                    offset: 4 * Float32Array.BYTES_PER_ELEMENT
                },
                a_distRange: {
                    name: "a_distRange",
                    size: 1,
                    type: glw.FLOAT,
                    normalized: !1,
                    stride: sdfStride,
                    offset: 5 * Float32Array.BYTES_PER_ELEMENT
                }
            }
        } ]);
    }
    attachContextLossListeners(canvas) {
        "addEventListener" in canvas != 0 && canvas.addEventListener("webglcontextlost", () => {
            this.stage.setContextLost();
        });
    }
    reset() {
        const {glw: glw} = this;
        DIRTY_QUAD_BUFFER || (this.curBufferIdx = 0), this.curRenderOp = null, this.curSdfRenderOp = null, 
        this.dirtyQuadCount = 0, this.sdfBufferIdx = 0, this.sdfQuadCount = 0, this.sdfWriteSig = 0, 
        this.renderOps.length = 0, this.coreTextRenderOps.length = 0, glw.setScissorTest(!1), 
        !1 !== this.stage.options.enableClear && glw.clear();
    }
    createShaderProgram(shaderType, props) {
        try {
            return new WebGlShaderProgram(this, shaderType, props);
        } catch (e) {
            throw !0 === this.glw.isContextLost() && this.stage.setContextLost(), e;
        }
    }
    createShaderNode(shaderKey, shaderType, props, program) {
        return new WebGlShaderNode(shaderKey, shaderType, program, this.stage, props);
    }
    supportsShaderType(shaderType) {
        return void 0 !== shaderType.fragment;
    }
    createCtxTexture(textureSource) {
        return textureSource.type === TextureType.subTexture ? new WebGlCtxSubTexture(this.glw, this.stage.txMemManager, textureSource) : new WebGlCtxTexture(this.glw, this.stage.txMemManager, textureSource);
    }
    addQuad(node, texture) {
        const f = this.fQuadBuffer, u = this.uiQuadBuffer;
        node.props.zIndex && this.flushTextRenderOps();
        const props = node.props;
        let tx = void 0 !== texture ? texture : !0 === node.placeholderActive ? this.stage.defaultTexture : props.texture || this.stage.defaultTexture;
        tx.type === TextureType.subTexture && (tx = tx.parentTexture);
        const ctx = tx.ctxTexture;
        if (void 0 === ctx) return;
        const reuse = this.reuseRenderOp(node);
        DIRTY_QUAD_BUFFER ? -1 === node.quadBufferIndex && (node.quadBufferIndex = this.curBufferIdx, 
        this.curBufferIdx += WORDS_PER_QUAD) : (node.quadBufferIndex = this.curBufferIdx, 
        this.curBufferIdx += WORDS_PER_QUAD);
        const i = node.quadBufferIndex;
        !1 === reuse && this.newRenderOp(node, i);
        const curOp = this.curRenderOp;
        if (null === curOp.renderOpTexture ? curOp.renderOpTexture = ctx : curOp.renderOpTexture !== ctx && (this.newRenderOp(node, i), 
        node.renderOpTexture = ctx), !DIRTY_QUAD_BUFFER || node.isQuadDirty) {
            DIRTY_QUAD_BUFFER && !0 === node.isQuadDirty && this.dirtyQuadCount++;
            const rc = node.renderCoords, tc = node.textureCoords || this.defaultTextureCoords, cTl = node.premultipliedColorTl, cTr = node.premultipliedColorTr, cBl = node.premultipliedColorBl, cBr = node.premultipliedColorBr;
            f[i] = rc.x1, f[i + 1] = rc.y1, u[i + 2] = tc.qTl, u[i + 3] = cTl, f[i + 4] = rc.x2, 
            f[i + 5] = rc.y2, u[i + 6] = tc.qTr, u[i + 7] = cTr, f[i + 8] = rc.x4, f[i + 9] = rc.y4, 
            u[i + 10] = tc.qBl, u[i + 11] = cBl, f[i + 12] = rc.x3, f[i + 13] = rc.y3, u[i + 14] = tc.qBr, 
            u[i + 15] = cBr;
        }
        this.curRenderOp.numQuads++;
    }
    newRenderOp(node, bufferIdx) {
        const curRenderOp = node;
        curRenderOp.renderOpBufferIdx = bufferIdx, curRenderOp.numQuads = 0, curRenderOp.renderOpTexture = null, 
        this.curRenderOp = curRenderOp, this.renderOps.push(curRenderOp);
    }
    reuseRenderOp(node) {
        const curRenderOp = this.curRenderOp;
        if (null === curRenderOp) return !1;
        if (!1 === compareRect(curRenderOp.clippingRect, node.clippingRect)) return !1;
        const shader = node.props.shader, curShader = curRenderOp.shader;
        return "default" === curShader.shaderKey && "default" === shader.shaderKey || (curShader === shader || curShader.program === shader.program && curShader.uniforms === shader.uniforms) && !1 !== curShader.program.reuseRenderOp(node, curRenderOp);
    }
    addRenderOp(renderable) {
        this.coreTextRenderOps.push(renderable);
    }
    flushTextRenderOps() {
        const len = this.coreTextRenderOps.length;
        if (0 !== len) {
            for (let i = 0; i < len; i++) this.renderOps.push(this.coreTextRenderOps[i]);
            this.coreTextRenderOps.length = 0, this.curRenderOp = null, this.curSdfRenderOp = null;
        }
    }
    addSdfQuads(glyphs, glyphCount, fontScale, transform, color, worldAlpha, distanceRange, atlasTexture, clippingRect, width, height, sdfShader) {
        if (0 === glyphCount) return;
        this.sdfBufferChanged = !0;
        let idx = this.sdfBufferIdx;
        if (!1 === this.ensureSdfBufferCapacity(idx + 24 * glyphCount)) return;
        const f = this.fSdfBuffer, u = this.uiSdfBuffer, packedColor = ((255 & color) << 24 | (color >>> 8 & 255) << 16 | (color >>> 16 & 255) << 8 | color >>> 24) >>> 0, m0 = transform.ta * fontScale, m1 = transform.tc * fontScale, m3 = transform.tb * fontScale, m4 = transform.td * fontScale, m6 = transform.tx, m7 = transform.ty, startQuad = this.sdfQuadCount;
        let go = 0;
        for (let gi = 0; gi < glyphCount; gi++) {
            const gx1 = glyphs[go], gy1 = glyphs[go + 1], gx2 = gx1 + glyphs[go + 2], gy2 = gy1 + glyphs[go + 3], u1 = glyphs[go + 4], v1 = glyphs[go + 5], u2 = u1 + glyphs[go + 6], v2 = v1 + glyphs[go + 7];
            go += 8;
            const wx_tl = m0 * gx1 + m3 * gy1 + m6, wy_tl = m1 * gx1 + m4 * gy1 + m7, wx_tr = m0 * gx2 + m3 * gy1 + m6, wy_tr = m1 * gx2 + m4 * gy1 + m7, wx_bl = m0 * gx1 + m3 * gy2 + m6, wy_bl = m1 * gx1 + m4 * gy2 + m7, wx_br = m0 * gx2 + m3 * gy2 + m6, wy_br = m1 * gx2 + m4 * gy2 + m7;
            f[idx] = wx_tl, f[idx + 1] = wy_tl, f[idx + 2] = u1, f[idx + 3] = v1, u[idx + 4] = packedColor, 
            f[idx + 5] = distanceRange, idx += 6, f[idx] = wx_tr, f[idx + 1] = wy_tr, f[idx + 2] = u2, 
            f[idx + 3] = v1, u[idx + 4] = packedColor, f[idx + 5] = distanceRange, idx += 6, 
            f[idx] = wx_bl, f[idx + 1] = wy_bl, f[idx + 2] = u1, f[idx + 3] = v2, u[idx + 4] = packedColor, 
            f[idx + 5] = distanceRange, idx += 6, f[idx] = wx_br, f[idx + 1] = wy_br, f[idx + 2] = u2, 
            f[idx + 3] = v2, u[idx + 4] = packedColor, f[idx + 5] = distanceRange, idx += 6;
        }
        this.sdfBufferIdx = idx, this.sdfQuadCount += glyphCount, this.finalizeSdfBatch(startQuad, glyphCount, 0, 0, atlasTexture, clippingRect, worldAlpha, width, height, sdfShader);
    }
    addSdfCachedQuads(cachedVertices, numGlyphs, dx, dy, atlasTexture, clippingRect, worldAlpha, width, height, sdfShader) {
        if (0 === numGlyphs) return;
        const startQuad = this.sdfQuadCount;
        !1 !== this.ensureSdfBufferCapacity(this.sdfBufferIdx + cachedVertices.length) && (this.fSdfBuffer.set(cachedVertices, this.sdfBufferIdx), 
        this.sdfBufferIdx += cachedVertices.length, this.sdfQuadCount += numGlyphs, this.finalizeSdfBatch(startQuad, numGlyphs, dx, dy, atlasTexture, clippingRect, worldAlpha, width, height, sdfShader));
    }
    finalizeSdfBatch(startQuad, glyphCount, dx, dy, atlasTexture, clippingRect, worldAlpha, width, height, sdfShader) {
        this.sdfWriteSig = 31 * this.sdfWriteSig + glyphCount | 0;
        const cur = this.curSdfRenderOp;
        if (null !== cur && cur.renderOpTexture === atlasTexture && cur.translateX === dx && cur.translateY === dy && cur.worldAlpha === worldAlpha && !0 === compareRect(cur.clippingRect, clippingRect)) return void (cur.numQuads += glyphCount);
        const opList = this.coreTextRenderOps, op = new SdfRenderOp(this, sdfShader, this.sdfQuadBufferCollection, atlasTexture, worldAlpha, clippingRect, width, height);
        op.startQuad = startQuad, op.numQuads = glyphCount, op.translateX = dx, op.translateY = dy, 
        opList.push(op), this.curSdfRenderOp = op, this.curRenderOp = null;
    }
    ensureSdfBufferCapacity(requiredSize) {
        const currentSize = this.fSdfBuffer.length;
        if (requiredSize <= currentSize) return !0;
        if (requiredSize > MAX_SDF_BUFFER_FLOATS) return !1;
        let newCapacity = 2 * currentSize;
        for (;newCapacity < requiredSize; ) newCapacity *= 2;
        newCapacity > MAX_SDF_BUFFER_FLOATS && (newCapacity = MAX_SDF_BUFFER_FLOATS);
        const sdfBufSize = newCapacity * Float32Array.BYTES_PER_ELEMENT, newBuffer = new ArrayBuffer(sdfBufSize), newFSdfBuffer = new Float32Array(newBuffer), newUiSdfBuffer = new Uint32Array(newBuffer);
        return newFSdfBuffer.set(this.fSdfBuffer), this.sdfBuffer = newBuffer, this.fSdfBuffer = newFSdfBuffer, 
        this.uiSdfBuffer = newUiSdfBuffer, this.sdfBufferChanged = !0, !0;
    }
    useShader(program) {
        this.attachedShader !== program && (null !== this.attachedShader && this.attachedShader.detach(), 
        program.attach(), this.attachedShader = program);
    }
    render(surface = "screen") {
        this.flushTextRenderOps();
        const {glw: glw, quadBuffer: quadBuffer} = this, buffer = this.quadBufferCollection.getBuffer("a_position") || null, BYTES = Float32Array.BYTES_PER_ELEMENT;
        if (DIRTY_QUAD_BUFFER) {
            const renderList = this.stage.renderList, len = renderList.length;
            let fullUpload = this.needsFullUpload || this.curBufferIdx > this.lastUploadedBufferSize;
            if (!1 === fullUpload && (fullUpload = this.dirtyQuadCount > .4 * len), !0 === fullUpload) {
                const arr = new Float32Array(quadBuffer, 0, this.curBufferIdx);
                glw.arrayBufferData(buffer, arr, glw.DYNAMIC_DRAW), this.needsFullUpload = !1, this.lastUploadedBufferSize = this.curBufferIdx;
                for (let i = 0; i < len; i++) renderList[i].isQuadDirty = !1;
            } else if (this.dirtyQuadCount > 0) {
                let runStart = -1, runWords = 0;
                for (let i = 0; i < len; i++) {
                    const node = renderList[i], idx = node.quadBufferIndex;
                    if (-1 === idx) continue;
                    const dirty = !0 === node.isQuadDirty;
                    if (!0 !== dirty || -1 === runStart || idx !== runStart + runWords) {
                        if (-1 !== runStart) {
                            const byteOffset = runStart * BYTES;
                            glw.arrayBufferSubData(buffer, byteOffset, new Float32Array(quadBuffer, byteOffset, runWords)), 
                            runStart = -1, runWords = 0;
                        }
                        !0 === dirty && (runStart = idx, runWords = WORDS_PER_QUAD, node.isQuadDirty = !1);
                    } else runWords += WORDS_PER_QUAD, node.isQuadDirty = !1;
                }
                if (-1 !== runStart) {
                    const byteOffset = runStart * BYTES;
                    glw.arrayBufferSubData(buffer, byteOffset, new Float32Array(quadBuffer, byteOffset, runWords));
                }
            }
        } else {
            const arr = new Float32Array(quadBuffer, 0, this.curBufferIdx);
            glw.arrayBufferData(buffer, arr, glw.STATIC_DRAW);
        }
        this.uploadSdfBuffer();
        for (let i = 0, length = this.renderOps.length; i < length; i++) this.renderOps[i].draw(this);
        this.quadBufferUsage = this.curBufferIdx * Float32Array.BYTES_PER_ELEMENT, this.numQuadsRendered = this.quadBufferUsage / 64;
    }
    uploadSdfBuffer() {
        if (0 === this.sdfBufferIdx) return this.lastUploadedSdfSize = 0, void (this.lastUploadedSdfSig = 0);
        if (!1 === this.sdfBufferChanged && this.sdfBufferIdx === this.lastUploadedSdfSize && this.sdfWriteSig === this.lastUploadedSdfSig) return;
        const glw = this.glw, sdfBuf = this.sdfQuadBufferCollection.getBuffer("a_position") || null, sdfArr = new Float32Array(this.sdfBuffer, 0, this.sdfBufferIdx);
        glw.arrayBufferData(sdfBuf, sdfArr, glw.DYNAMIC_DRAW), this.lastUploadedSdfSize = this.sdfBufferIdx, 
        this.lastUploadedSdfSig = this.sdfWriteSig, this.sdfBufferChanged = !1;
    }
    getQuadCount() {
        return this.numQuadsRendered;
    }
    getRenderOpCount() {
        return this.renderOps.length;
    }
    updateViewport() {
        this.glw.updateCanvasDimensions(), this.glw.viewport(0, 0, this.glw.canvasW, this.glw.canvasH);
    }
    getBufferInfo() {
        return {
            totalAvailable: this.quadBufferSize,
            totalUsed: this.quadBufferUsage
        };
    }
    getCapabilities() {
        const glw = this.glw;
        return {
            renderMode: "webgl",
            webGlVersion: glw.isWebGl2 ? 2 : 1,
            vertexArrayObject: glw.canUseVertexArrayObject,
            maxTextureSize: glw.getParameter(glw.MAX_TEXTURE_SIZE),
            maxTextureUnits: glw.getParameter(glw.MAX_TEXTURE_IMAGE_UNITS)
        };
    }
    checkForOutOfMemory() {
        const glw = this.glw;
        let outOfMemory = !1;
        for (let i = 0; i < 8; i++) {
            const error = glw.getError();
            if (0 === error) break;
            1285 === error && (outOfMemory = !0);
        }
        return outOfMemory;
    }
    getDefaultShaderNode() {
        return null !== this.defaultShaderNode || (this.stage.shManager.registerShaderType("default", Default), 
        this.defaultShaderNode = this.stage.shManager.createShader("default")), this.defaultShaderNode;
    }
    getTextureCoords(node) {
        const texture = node.texture;
        if (null === texture) return;
        const ctxTexture = void 0 !== texture.parentTexture ? texture.parentTexture.ctxTexture : texture.ctxTexture;
        if (void 0 === ctxTexture) return;
        const textureOptions = node.props.textureOptions;
        if (texture.type !== TextureType.subTexture && void 0 === textureOptions) return ctxTexture.txCoords;
        let {x1: x1, x2: x2, y1: y1, y2: y2} = ctxTexture.txCoords;
        if (texture.type === TextureType.subTexture) {
            const {w: parentW, h: parentH} = texture.parentTexture.dimensions, {x: x, y: y, w: w, h: h} = texture.props;
            x1 = x / parentW, y1 = y / parentH, x2 = x1 + w / parentW, y2 = y1 + h / parentH;
        }
        const resizeMode = textureOptions.resizeMode;
        if (void 0 !== resizeMode && "cover" === resizeMode.type && null !== texture.dimensions) {
            const dimensions = texture.dimensions, w = node.props.w, h = node.props.h, scaleX = w / dimensions.w, scaleY = h / dimensions.h, scale = Math.max(scaleX, scaleY), precision = 1 / scale;
            if (scaleX < scale) {
                var _resizeMode$clipX;
                const desiredSize = precision * node.props.w;
                x1 = (1 - desiredSize / dimensions.w) * clampUnit(null !== (_resizeMode$clipX = resizeMode.clipX) && void 0 !== _resizeMode$clipX ? _resizeMode$clipX : .5), 
                x2 = x1 + desiredSize / dimensions.w;
            }
            if (scaleY < scale) {
                var _resizeMode$clipY;
                const desiredSize = precision * node.props.h;
                y1 = (1 - desiredSize / dimensions.h) * clampUnit(null !== (_resizeMode$clipY = resizeMode.clipY) && void 0 !== _resizeMode$clipY ? _resizeMode$clipY : .5), 
                y2 = y1 + desiredSize / dimensions.h;
            }
        }
        return !0 === textureOptions.flipX && ([x1, x2] = [ x2, x1 ]), !0 === textureOptions.flipY && ([y1, y2] = [ y2, y1 ]), 
        createTextureCoords(x1, y1, x2, y2);
    }
    invalidateQuadBuffer() {
        if (this.sdfBufferChanged = !0, !DIRTY_QUAD_BUFFER) return;
        const renderList = this.stage.renderList;
        for (let i = 0, len = renderList.length; i < len; i++) renderList[i].quadBufferIndex = -1, 
        renderList[i].isQuadDirty = !0;
        this.curBufferIdx = 0, this.lastUploadedBufferSize = 0, this.needsFullUpload = !0;
    }
    updateClearColor(color) {
        if (this.clearColor.raw === color) return;
        const glw = this.glw, normalizedColor = getNormalizedRgbaComponents(color);
        glw.clearColor(normalizedColor[0], normalizedColor[1], normalizedColor[2], normalizedColor[3]), 
        this.clearColor = {
            raw: color,
            normalized: normalizedColor
        };
    }
}), requestAnimationFrame(() => {
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
        }), loadFonts(fonts_default);
        const shManager = renderer.stage.shManager;
        shManager.registerShaderType("rounded", Rounded), shManager.registerShaderType("roundedWithBorder", RoundedWithBorder), 
        shManager.registerShaderType("roundedWithShadow", RoundedWithShadow), shManager.registerShaderType("roundedWithBorderWithShadow", RoundedWithBorderAndShadow), 
        shManager.registerShaderType("radialGradient", RadialGradient), shManager.registerShaderType("linearGradient", LinearGradient), 
        shManager.registerShaderType("holePunch", HolePunch), shManager.registerShaderType("radialProgress", RadialProgress), 
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
                                        return lazy(() => __vitePreload(() => import("./Nested-CcD_pBzC.js"), __vite__mapDeps([67,2,8,3,9,10,15,14,16,11,6])));
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
                                    path: "keepalive",
                                    get component() {
                                        return lazy(() => __vitePreload(() => import("./KeepAlive-D2UxHdZp.js"), __vite__mapDeps([68,2])));
                                    }
                                }), createComponent(Route, {
                                    path: "suspense",
                                    get component() {
                                        return lazy(() => __vitePreload(() => import("./suspense-B35DSa9g.js"), __vite__mapDeps([69,2,6])));
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