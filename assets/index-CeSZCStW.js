const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Player-DrpJfA4q.js","assets/render-BDgfl-qR.js","assets/utils-BW8jHCIn.js","assets/routing-kbg3UqA5.js","assets/web-D_Lor4zg.js","assets/state-BJEarKfM.js","assets/Grid-HqoCwlVD.js","assets/Column-KGAn69q3.js","assets/chainFunctions-_zHCTCkQ.js","assets/theme-CB9u0IsU.js","assets/Loops-BINAYYyl.js","assets/Lazy-DMqnrd6A.js","assets/Row-DNRr6eoe.js","assets/components-ByVYYWsL.js","assets/styles-BcDKugwt.js","assets/Infinite-CnRA_s0z.js","assets/TMDBGrid-B9ayFfHA.js","assets/ContentBlock-C2GtP2LD.js","assets/dist-D7fy--KS.js","assets/Portal-D3c0357L.js","assets/announcer-ah5sQ01s.js","assets/createFocusStack-1rDmX6Xv.js","assets/Matrix-Bnf3s25r.js","assets/Text-DcKkcyC5.js","assets/TextPoster-CDcYAwSB.js","assets/Create-Dv_BWrxV.js","assets/Viewport-CIaBicnz.js","assets/Positioning-Cm2SRvMA.js","assets/Layout-iHB4CAU4.js","assets/FocusBasics-Bk6H2fLY.js","assets/KeyHandling-B8YTsDsQ.js","assets/Transitions-CDPGztut.js","assets/Components-C2sj_lP9.js","assets/FocusHandling-CnvOGnPY.js","assets/Gradients-N9Y2LMrL.js","assets/Flex-GbiwJ_px.js","assets/FlexGrow-CIIgaeJ3.js","assets/FlexMenu-Bz9OPBYN.js","assets/FlexSize-DK98TNAv.js","assets/FlexColumnSize-FW2Ycvom.js","assets/FlexColumn-BOUzOSvS.js","assets/ButtonsMaterial-Dfp7n3JB.js","assets/SuperFlex-DJSXRQKf.js","assets/Entity-2T5cM3Pu.js","assets/People-DemO_034.js","assets/api-BiLDTsHT.js","assets/ItemFormatter-lXFN0A51.js","assets/Firebolt-B6GygxF0.js","assets/Login-f9DrcVsp.js","assets/Virtual-ClAkXuYg.js","assets/Tags-DcMT21Fb.js","assets/ImagePerformance-DlNhEyJq.js","assets/imagePerf-Bta_fFz1.js","assets/LargeImagePerformance-CD14ihjA.js","assets/MixedImagePerformance-D4riSXlf.js","assets/TextureCompressionPerformance-BCXMspzU.js","assets/ComplexFlex-Qa4a3KLY.js","assets/ComplexFlexCaps-0KPe2JAU.js","assets/Benchmark-CZfuiUAO.js","assets/FPSCounter-hRLgDYbs.js","assets/RendererVersions-Cnnx0NAl.js","assets/TextCentering-GJTn8lz6.js","assets/CountdownTimer-zAWeqbOV.js","assets/CustomButtons-C1NiBi5S.js","assets/Icon-Ken1f8Sf.js","assets/Nested-Cp9J_Ekk.js","assets/KeepAlive-CJjOwA7S.js","assets/suspense-Dx_AtUT5.js"])))=>i.map(i=>d[i]);
import 'data:text/javascript,"assets/index-CeSZCStW.js";if(!import.meta.resolve)throw Error("import.meta.resolve not supported")';

export function __vite_legacy_guard() {
    import.meta.url;
    import("_").catch(() => 1);
    (async function*() {})().next();
}

import { $ as onCleanup, B as createComputed, C as hasFocus, E as isFunction, G as createResource, H as createEffect, J as createSignal, K as createRoot, L as batch, O as Config, P as Show, Q as on, R as children, S as renderer, U as createMemo, X as getOwner, Y as getListener, Z as mergeProps$1, _ as use, _t as assertTruthy, a as createElement, at as untrack, b as useFocusManager, c as effect, ct as RenderTexture, d as memo, dt as UpdateType, et as onMount, f as mergeProps, ft as calcFactoredRadiusArray, g as spread, gt as BufferCollection, h as setProp, ht as TextureType, i as createComponent, k as activeElement, l as insert, lt as SubTexture, mt as getNormalizedRgbaComponents, nt as runWithOwner, o as createRenderer, p as rootNode, pt as compareRect, rt as sharedConfig, s as createTextNode, st as CoreShaderNode, u as insertNode, ut as CoreNodeRenderState, v as ElementNode, vt as mergeColorAlpha, w as isElementNode, x as loadFonts, y as focusPath } from "./render-BDgfl-qR.js";

import { n as combineStyles, t as clamp } from "./utils-BW8jHCIn.js";

import { n as createScheduled, r as throttle, t as Announcer } from "./announcer-ah5sQ01s.js";

import { t as voidFn } from "./web-D_Lor4zg.js";

import { n as LazyRow, t as LazyColumn } from "./Lazy-DMqnrd6A.js";

import { a as withScrolling, d as navigableForwardFocus, f as navigableHandleNavigation, n as chainRefs, t as chainFunctions } from "./chainFunctions-_zHCTCkQ.js";

import { t as Column } from "./Column-KGAn69q3.js";

import { r as setupFPS, t as FPSCounter } from "./FPSCounter-hRLgDYbs.js";

import { t as ContentBlock } from "./ContentBlock-C2GtP2LD.js";

import { n as useFocusStack, t as FocusStackProvider } from "./createFocusStack-1rDmX6Xv.js";

import { a as Hero, c as Thumbnail, d as List, t as AssetPanel, u as TitleRow } from "./components-ByVYYWsL.js";

import { t as Icon } from "./Icon-Ken1f8Sf.js";

import { _ as saveCurrentDepth, a as createRouterContext, c as setInPreloadFn, d as useNavigate, g as notifyIfNotBlocked, h as keepDepth, i as createRouteContext, l as useLocation, m as createBeforeLeave, n as RouterContextObj, o as getIntent, p as usePreloadRoute, r as createBranches, s as getRouteMatches, t as RouteContextObj, u as useMatch } from "./routing-kbg3UqA5.js";

import { t as theme_default } from "./theme-CB9u0IsU.js";

import { r as styles_default } from "./styles-BcDKugwt.js";

import { n as setGlobalBackground, t as globalBackground } from "./state-BJEarKfM.js";

import { t as debounce } from "./dist-D7fy--KS.js";

import { n as getImageUrl, t as api_default } from "./api-BiLDTsHT.js";

import { t as convertItemsToTiles } from "./ItemFormatter-lXFN0A51.js";

var __create = Object.create;

var __defProp = Object.defineProperty;

var __getOwnPropDesc = Object.getOwnPropertyDescriptor;

var __getOwnPropNames = Object.getOwnPropertyNames;

var __getProtoOf = Object.getPrototypeOf;

var __hasOwnProp = Object.prototype.hasOwnProperty;

var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = {
    exports: {}
}).exports, mod), cb = null), mod.exports);

var __exportAll = (all, no_symbols) => {
    let target = {};
    for (var name in all) {
        __defProp(target, name, {
            get: all[name],
            enumerable: true
        });
    }
    if (!no_symbols) {
        __defProp(target, Symbol.toStringTag, {
            value: "Module"
        });
    }
    return target;
};

var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
        for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
            key = keys[i];
            if (!__hasOwnProp.call(to, key) && key !== except) {
                __defProp(to, key, {
                    get: (k => from[k]).bind(null, key),
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            }
        }
    }
    return to;
};

var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, 
__copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
    value: mod,
    enumerable: true
}) : target, mod));

(function polyfill() {
    const relList = document.createElement("link").relList;
    if (relList && relList.supports && relList.supports("modulepreload")) return;
    for (const link of document.querySelectorAll('link[rel="modulepreload"]')) processPreload(link);
    new MutationObserver(mutations => {
        for (const mutation of mutations) {
            if (mutation.type !== "childList") continue;
            for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
        }
    }).observe(document, {
        childList: true,
        subtree: true
    });
    function getFetchOpts(link) {
        const fetchOpts = {};
        if (link.integrity) fetchOpts.integrity = link.integrity;
        if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
        if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include"; else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit"; else fetchOpts.credentials = "same-origin";
        return fetchOpts;
    }
    function processPreload(link) {
        if (link.ep) return;
        link.ep = true;
        const fetchOpts = getFetchOpts(link);
        fetch(link.href, fetchOpts);
    }
})();

var CoreContextTexture = class {
    constructor(memManager, textureSource) {
        this.textureSource = void 0;
        this.memManager = void 0;
        this.state = "freed";
        this.memManager = memManager;
        this.textureSource = textureSource;
    }
    setTextureMemUse(byteSize) {
        this.memManager.setTextureMemUse(this.textureSource, byteSize);
    }
    get renderable() {
        return this.textureSource.renderable;
    }
};

var CoreRenderer = class {
    constructor(stage) {
        this.mode = void 0;
        this.defaultTextureCoords = void 0;
        this.stage = void 0;
        this.rttNodes = [];
        this.stage = stage;
    }
    deleteBuffer(_buffer) {}
    beginRoundedClip(_node) {}
    endRoundedClip(_node) {}
};

var validateArrayLength4 = value => {
    if (!Array.isArray(value)) return [ value, value, value, value ];
    assertTruthy(value);
    if (value.length === 4) return value;
    if (value.length === 3) {
        value[3] = value[0];
        return value;
    }
    if (value.length === 2) {
        value[2] = value[0];
        value[3] = value[1];
        return value;
    }
    value[0] = value[0] || 0;
    value[1] = value[0];
    value[2] = value[0];
    value[3] = value[0];
    return value;
};

function getBorderProps(prefix) {
    const pf = prefix && prefix.length > 0 ? `${prefix}-` : "";
    const w = pf + "w";
    return {
        [w]: {
            default: [ 0, 0, 0, 0 ],
            resolve(value) {
                if (value !== void 0) return validateArrayLength4(value);
                return [].concat(this.default);
            }
        },
        [pf + "color"]: 4294967295,
        [pf + "align"]: {
            default: 0,
            resolve(value) {
                if (!isNaN(value)) return value;
                if (typeof value === "string") switch (value) {
                  case "inside":
                    return 0;

                  case "center":
                    return .5;

                  case "outside":
                    return 1;
                }
                return this.default;
            }
        },
        [pf + "gap"]: 0,
        [pf + "top"]: {
            default: 0,
            set(value, props) {
                props[w][0] = value;
            },
            get(props) {
                return props[w][0];
            }
        },
        [pf + "right"]: {
            default: 0,
            set(value, props) {
                props[w][1] = value;
            },
            get(props) {
                return props[w][1];
            }
        },
        [pf + "bottom"]: {
            default: 0,
            set(value, props) {
                props[w][2] = value;
            },
            get(props) {
                return props[w][2];
            }
        },
        [pf + "left"]: {
            default: 0,
            set(value, props) {
                props[w][3] = value;
            },
            get(props) {
                return props[w][3];
            }
        }
    };
}

var BorderTemplate = {
    props: getBorderProps()
};

var HolePunchTemplate = {
    props: {
        x: 0,
        y: 0,
        w: 50,
        h: 50,
        radius: {
            default: [ 0, 0, 0, 0 ],
            resolve(value) {
                if (value !== void 0) return validateArrayLength4(value);
                return [].concat(this.default);
            }
        }
    }
};

var RoundedTemplate = {
    props: {
        radius: {
            default: [ 0, 0, 0, 0 ],
            resolve(value) {
                if (value !== void 0) return validateArrayLength4(value);
                return [].concat(this.default);
            }
        },
        "top-left": {
            default: 0,
            set(value, props) {
                props.radius[0] = value;
            },
            get(props) {
                return props.radius[0];
            }
        },
        "top-right": {
            default: 0,
            set(value, props) {
                props.radius[1] = value;
            },
            get(props) {
                return props.radius[1];
            }
        },
        "bottom-right": {
            default: 0,
            set(value, props) {
                props.radius[2] = value;
            },
            get(props) {
                return props.radius[2];
            }
        },
        "bottom-left": {
            default: 0,
            set(value, props) {
                props.radius[3] = value;
            },
            get(props) {
                return props.radius[3];
            }
        }
    }
};

function getShadowProps(prefix) {
    const pf = prefix && prefix.length > 0 ? `${prefix}-` : "";
    const projection = pf + "projection";
    return {
        [pf + "color"]: 255,
        [projection]: {
            default: [ 0, 0, 5, 5 ]
        },
        [pf + "x"]: {
            default: 0,
            set(value, props) {
                props[projection][0] = value;
            },
            get(props) {
                return props[projection][0];
            }
        },
        [pf + "y"]: {
            default: 0,
            set(value, props) {
                props[projection][1] = value;
            },
            get(props) {
                return props[projection][1];
            }
        },
        [pf + "blur"]: {
            default: 10,
            set(value, props) {
                props[projection][2] = value;
            },
            get(props) {
                return props[projection][2];
            }
        },
        [pf + "spread"]: {
            default: 10,
            set(value, props) {
                props[projection][3] = value;
            },
            get(props) {
                return props[projection][3];
            }
        }
    };
}

var ShadowTemplate = {
    props: getShadowProps()
};

var LinearGradientTemplate = {
    props: {
        colors: {
            default: [ 255, 4294967295 ],
            resolve(value) {
                if (value !== void 0 && value.length > 0) return value;
                return [].concat(this.default);
            }
        },
        stops: {
            default: [ 0, 1 ],
            resolve(value, props) {
                if (value !== void 0 && value.length === props.colors.length) return value;
                if (value === void 0) value = [];
                const len = props.colors.length;
                for (let i = 0; i < len; i++) value[i] = i * (1 / (len - 1));
                return value;
            }
        },
        angle: 0
    }
};

var RadialGradientTemplate = {
    props: {
        colors: {
            default: [ 255, 4294967295 ],
            resolve(value) {
                if (value !== void 0 && value.length > 0) return value;
                return [].concat(this.default);
            }
        },
        stops: {
            default: [ 0, 1 ],
            resolve(value, props) {
                if (value !== void 0 && value.length === props.colors.length) return value;
                if (value === void 0) value = [];
                const len = props.colors.length;
                for (let i = 0; i < len; i++) value[i] = i * (1 / (len - 1));
                return value;
            }
        },
        w: 50,
        h: 50,
        pivot: [ .5, .5 ]
    }
};

var Default = {
    vertex: `\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    attribute vec2 a_position;\n    attribute vec2 a_textureCoords;\n    attribute vec4 a_color;\n    attribute vec2 a_nodeCoords;\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n    varying vec2 v_nodeCoords;\n\n    void main() {\n      vec2 normalized = a_position * u_pixelRatio / u_resolution;\n      vec2 zero_two = normalized * 2.0;\n      vec2 clip_space = zero_two - 1.0;\n\n      v_color = a_color;\n      v_textureCoords = a_textureCoords;\n      v_nodeCoords = a_nodeCoords;\n\n      gl_Position = vec4(clip_space * vec2(1.0, -1.0), 0, 1);\n    }\n  `,
    fragment: `\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    uniform vec2 u_resolution;\n    uniform sampler2D u_texture;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n\n    void main() {\n      gl_FragColor = v_color * texture2D(u_texture, v_textureCoords);\n    }\n  `
};

var WebGlShaderNode = class extends CoreShaderNode {
    constructor(shaderKey, config, program, stage, props) {
        super(shaderKey, config, stage, props);
        this.program = void 0;
        this.updater = void 0;
        this.beforeDrawFn = void 0;
        this.valueKey = "";
        this.additionalTextureCount = 0;
        this.uniforms = {
            hasStoredUniforms: false,
            single: {},
            vec2: {},
            vec3: {},
            vec4: {}
        };
        this.program = program;
        if (config.update !== void 0) {
            this.updater = config.update;
            this.update = () => {
                if (this.props === void 0) {
                    this.updater(this.node, this.props);
                    this.updateUniformUsage();
                    return;
                }
                const prevKey = this.valueKey;
                this.valueKey = this.createValueKey();
                if (prevKey === this.valueKey) return;
                if (prevKey.length > 0) stage.shManager.mutateShaderValueUsage(prevKey, -1);
                const values = stage.shManager.getShaderValues(this.valueKey);
                if (values !== void 0) {
                    this.uniforms = values;
                    return;
                }
                this.uniforms = {
                    hasStoredUniforms: false,
                    single: {},
                    vec2: {},
                    vec3: {},
                    vec4: {}
                };
                this.updater(this.node);
                this.updateUniformUsage();
                stage.shManager.setShaderValues(this.valueKey, this.uniforms);
            };
        }
        if (config.beforeDraw !== void 0) {
            this.beforeDrawFn = config.beforeDraw;
            this.beforeDraw = () => {
                this.additionalTextureCount = 0;
                this.beforeDrawFn(this.node, this.props);
            };
        }
    }
    bindTexture(location, texture) {
        const glw = this.program.glw;
        const targetId = this.additionalTextureCount + this.node.renderOpTextures.length;
        this.uniform1i(location, targetId);
        this.additionalTextureCount++;
        if (texture.state === "loaded") {
            glw.activeTexture(targetId);
            const nativeTexture = texture.ctxTexture.ctxTexture;
            glw.bindTexture(nativeTexture);
        }
    }
    updateUniformUsage() {
        for (const _ in this.uniforms.single) {
            this.uniforms.hasStoredUniforms = true;
            return;
        }
        for (const _ in this.uniforms.vec2) {
            this.uniforms.hasStoredUniforms = true;
            return;
        }
        for (const _ in this.uniforms.vec3) {
            this.uniforms.hasStoredUniforms = true;
            return;
        }
        for (const _ in this.uniforms.vec4) {
            this.uniforms.hasStoredUniforms = true;
            return;
        }
        this.uniforms.hasStoredUniforms = false;
    }
    uniformRGBA(location, value, premultiplyAlpha = false) {
        const rgba = getNormalizedRgbaComponents(value);
        if (premultiplyAlpha === false || rgba[3] === 1) {
            this.uniform4fa(location, rgba);
            return;
        }
        const a = rgba[3];
        rgba[0] *= a;
        rgba[1] *= a;
        rgba[2] *= a;
        this.uniform4fa(location, rgba);
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
};

function createShader(glw, type, source) {
    const shader = glw.createShader(type);
    if (!shader) {
        const glError = glw.getError();
        throw new Error(`Unable to create the shader: ${type === glw.VERTEX_SHADER ? "VERTEX_SHADER" : "FRAGMENT_SHADER"}.${glError ? ` WebGlContext Error: ${glError}` : ""}`);
    }
    glw.shaderSource(shader, source);
    glw.compileShader(shader);
    if (!!glw.getShaderParameter(shader, glw.COMPILE_STATUS)) return shader;
    console.error(glw.getShaderInfoLog(shader));
    glw.deleteShader(shader);
}

function createProgram(glw, vertexShader, fragmentShader) {
    const program = glw.createProgram();
    if (!program) throw new Error("Unable to create program");
    glw.attachShader(program, vertexShader);
    glw.attachShader(program, fragmentShader);
    glw.linkProgram(program);
    if (!!glw.getProgramParameter(program, glw.LINK_STATUS)) return program;
    const infoLog = glw.getProgramInfoLog(program) || "Unknown program link error";
    console.warn(infoLog);
    glw.deleteProgram(program);
    throw new Error(`Unable to link shader program: ${infoLog}`);
}

var WebGlShaderProgram = class {
    constructor(renderer, config, resolvedProps) {
        this.program = void 0;
        this.vao = void 0;
        this.renderer = void 0;
        this.glw = void 0;
        this.attributeLocations = void 0;
        this.uniformLocations = void 0;
        this.lifecycle = void 0;
        this.useSystemAlpha = false;
        this.useSystemDimensions = false;
        this.useTimeValue = false;
        this.isDestroyed = false;
        this.supportsIndexedTextures = false;
        this.lastPixelRatio = -1;
        this.lastResolutionW = -1;
        this.lastResolutionH = -1;
        this.lastAlpha = -1;
        this.lastDimensionsW = -1;
        this.lastDimensionsH = -1;
        this.lastTime = -1;
        this.lastBoundUniforms = null;
        this.renderer = renderer;
        const glw = this.glw = renderer.glw;
        const webGl2 = glw.isWebGl2();
        let requiredExtensions = [];
        this.supportsIndexedTextures = config.supportsIndexedTextures || this.supportsIndexedTextures;
        requiredExtensions = webGl2 && config.webgl2Extensions || !webGl2 && config.webgl1Extensions || [];
        const glVersion = webGl2 ? "2.0" : "1.0";
        requiredExtensions.forEach(extensionName => {
            if (!glw.getExtension(extensionName)) throw new Error(`Shader "${this.constructor.name}" requires extension "${extensionName}" for WebGL ${glVersion} but wasn't found`);
        });
        let vertexSource = config.vertex instanceof Function ? config.vertex(renderer, resolvedProps) : config.vertex;
        if (vertexSource === void 0) vertexSource = Default.vertex;
        const fragmentSource = config.fragment instanceof Function ? config.fragment(renderer, resolvedProps) : config.fragment;
        const vertexShader = createShader(glw, glw.VERTEX_SHADER, vertexSource);
        if (!vertexShader) throw new Error("Vertex shader creation failed");
        const fragmentShader = createShader(glw, glw.FRAGMENT_SHADER, fragmentSource);
        if (!fragmentShader) throw new Error("fragment shader creation failed");
        const program = createProgram(glw, vertexShader, fragmentShader);
        this.program = program;
        this.attributeLocations = glw.getAttributeLocations(program);
        const uniLocs = this.uniformLocations = glw.getUniformLocations(program);
        this.useSystemAlpha = uniLocs["u_alpha"] !== void 0;
        this.useSystemDimensions = uniLocs["u_dimensions"] !== void 0;
        this.useTimeValue = this.glw.getUniformLocation(program, "u_dimensions") !== null && config.time !== void 0;
        this.lifecycle = {
            update: config.update,
            canBatch: config.canBatch
        };
    }
    disableAttribute(location) {
        this.glw.disableVertexAttribArray(location);
    }
    disableAttributes() {
        const glw = this.glw;
        const attribLen = this.attributeLocations.length;
        for (let i = 0; i < attribLen; i++) glw.disableVertexAttribArray(i);
    }
    reuseRenderOp(node, currentRenderOp) {
        if (this.lifecycle.canBatch !== void 0) return this.lifecycle.canBatch(node, currentRenderOp);
        if (this.useTimeValue === true) {
            if (node.time !== currentRenderOp.time) return false;
        }
        if (this.useSystemAlpha === true) {
            if (node.worldAlpha !== currentRenderOp.worldAlpha) return false;
        }
        if (this.useSystemDimensions === true) {
            if (node.w !== currentRenderOp.w || node.h !== currentRenderOp.h) return false;
        }
        const shader = node.props.shader;
        const opShader = currentRenderOp.shader;
        if (shader === opShader) return true;
        if (shader === null || opShader === null) return false;
        if (shader.uniforms === opShader.uniforms) return true;
        const shaderPropsA = shader.resolvedProps;
        const shaderPropsB = opShader.resolvedProps;
        if (shaderPropsA === void 0 && shaderPropsB !== void 0 || shaderPropsA !== void 0 && shaderPropsB === void 0) return false;
        if (shaderPropsA !== void 0 && shaderPropsB !== void 0) {
            for (const key in shaderPropsA) if (shaderPropsA[key] !== shaderPropsB[key]) return false;
        }
        return true;
    }
    bindRenderOp(renderOp) {
        this.bindTextures(renderOp.renderOpTextures);
        this.bindBufferCollection(renderOp.quadBufferCollection);
        const parentHasRenderTexture = renderOp.parentHasRenderTexture;
        const framebufferDimensions = renderOp.isCoreNode ? renderOp.parentFramebufferDimensions : renderOp.framebufferDimensions;
        if (renderOp.rtt === true && parentHasRenderTexture === true) return;
        let pixelRatio;
        let resolutionW;
        let resolutionH;
        if (parentHasRenderTexture === true && framebufferDimensions) {
            pixelRatio = 1;
            resolutionW = framebufferDimensions.w;
            resolutionH = framebufferDimensions.h;
        } else {
            pixelRatio = renderOp.stage.pixelRatio;
            resolutionW = this.glw.canvas.width;
            resolutionH = this.glw.canvas.height;
        }
        if (pixelRatio !== this.lastPixelRatio) {
            this.glw.uniform1f("u_pixelRatio", pixelRatio);
            this.lastPixelRatio = pixelRatio;
        }
        if (resolutionW !== this.lastResolutionW || resolutionH !== this.lastResolutionH) {
            this.glw.uniform2f("u_resolution", resolutionW, resolutionH);
            this.lastResolutionW = resolutionW;
            this.lastResolutionH = resolutionH;
        }
        if (this.useTimeValue === true && renderOp.time !== this.lastTime) {
            this.glw.uniform1f("u_time", renderOp.time);
            this.lastTime = renderOp.time;
        }
        if (this.useSystemAlpha === true && renderOp.worldAlpha !== this.lastAlpha) {
            this.glw.uniform1f("u_alpha", renderOp.worldAlpha);
            this.lastAlpha = renderOp.worldAlpha;
        }
        if (this.useSystemDimensions === true) {
            if (renderOp.w !== this.lastDimensionsW || renderOp.h !== this.lastDimensionsH) {
                this.glw.uniform2f("u_dimensions", renderOp.w, renderOp.h);
                this.lastDimensionsW = renderOp.w;
                this.lastDimensionsH = renderOp.h;
            }
        }
        const shader = renderOp.shader;
        const uniforms = shader.uniforms;
        if (shader.beforeDraw !== void 0) shader.beforeDraw();
        if (uniforms.hasStoredUniforms === true) {
            if (uniforms === this.lastBoundUniforms) return;
            this.lastBoundUniforms = uniforms;
            for (const key in uniforms.single) {
                const {method: method, value: value} = uniforms.single[key];
                this.glw[method](key, value);
            }
            for (const key in uniforms.vec2) {
                const {method: method, value: value} = uniforms.vec2[key];
                this.glw[method](key, value[0], value[1]);
            }
            for (const key in uniforms.vec3) {
                const {method: method, value: value} = uniforms.vec3[key];
                this.glw[method](key, value[0], value[1], value[2]);
            }
            for (const key in uniforms.vec4) {
                const {method: method, value: value} = uniforms.vec4[key];
                this.glw[method](key, value[0], value[1], value[2], value[3]);
            }
        }
    }
    bindBufferCollection(buffer) {
        const {glw: glw} = this;
        const attribs = this.attributeLocations;
        const attribLen = attribs.length;
        for (let i = 0; i < attribLen; i++) {
            const name = attribs[i];
            const resolvedBuffer = buffer.getBuffer(name);
            const resolvedInfo = buffer.getAttributeInfo(name);
            if (resolvedBuffer === void 0 || resolvedInfo === void 0) continue;
            glw.enableVertexAttribArray(i);
            glw.vertexAttribPointer(resolvedBuffer, i, resolvedInfo.size, resolvedInfo.type, resolvedInfo.normalized, resolvedInfo.stride, resolvedInfo.offset);
        }
    }
    bindTextures(textures) {
        const t = textures[0];
        if (t === void 0) return;
        this.glw.activeTexture(0);
        this.glw.bindTexture(t.ctxTexture);
    }
    attach() {
        if (this.isDestroyed === true) return;
        this.glw.useProgram(this.program, this.uniformLocations);
        if (this.glw.isWebGl2() && this.vao) this.glw.bindVertexArray(this.vao);
    }
    bindForStencil(bufferCollection) {
        if (this.isDestroyed === true) return;
        this.glw.useProgram(this.program, this.uniformLocations);
        this.bindBufferCollection(bufferCollection);
    }
    detach() {
        this.disableAttributes();
    }
    destroy() {
        if (this.isDestroyed === true) return;
        const glw = this.glw;
        this.detach();
        glw.deleteProgram(this.program);
        this.program = null;
        this.uniformLocations = null;
        const attribs = this.attributeLocations;
        const attribLen = this.attributeLocations.length;
        for (let i = 0; i < attribLen; i++) this.glw.deleteBuffer(attribs[i]);
    }
};

var Rounded = {
    props: RoundedTemplate.props,
    update(node) {
        this.uniform4fa("u_radius", calcFactoredRadiusArray(this.props.radius, node.w, node.h));
    },
    vertex: `\n  # ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  # else\n  precision mediump float;\n  # endif\n\n  attribute vec2 a_position;\n  attribute vec2 a_textureCoords;\n  attribute vec4 a_color;\n  attribute vec2 a_nodeCoords;\n\n  uniform vec2 u_resolution;\n  uniform float u_pixelRatio;\n  uniform vec2 u_dimensions;\n\n  varying vec4 v_color;\n  varying vec2 v_textureCoords;\n  varying vec2 v_nodeCoords;\n\n  void main() {\n    vec2 normalized = a_position * u_pixelRatio;\n    vec2 screenSpace = vec2(2.0 / u_resolution.x, -2.0 / u_resolution.y);\n\n    v_color = a_color;\n    v_nodeCoords = a_nodeCoords;\n    v_textureCoords = a_textureCoords;\n\n    gl_Position = vec4(normalized.x * screenSpace.x - 1.0, normalized.y * -abs(screenSpace.y) + 1.0, 0.0, 1.0);\n    gl_Position.y = -sign(screenSpace.y) * gl_Position.y;\n  }\n`,
    fragment: `\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    //renderer applies these uniforms automatically\n    uniform vec2 u_resolution;\n    uniform vec2 u_dimensions;\n    uniform float u_alpha;\n    uniform float u_pixelRatio;\n    uniform sampler2D u_texture;\n\n    //custom uniforms\n    uniform vec4 u_radius;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n    varying vec2 v_nodeCoords;\n\n    float roundedBox(vec2 p, vec2 s, vec4 r) {\n      float sx = step(0.0, p.x);\n      float sy = step(0.0, p.y);\n      r.xy = mix(r.xw, r.yz, sx);\n      r.x = mix(r.x, r.y, sy);\n      vec2 q = abs(p) - s + r.x;\n      return (min(max(q.x, q.y), 0.0) + length(max(q, 0.0))) - r.x;\n    }\n\n    void main() {\n      vec4 color = texture2D(u_texture, v_textureCoords) * v_color;\n      vec2 halfDimensions = (u_dimensions * 0.5);\n\n      vec2 boxUv = v_nodeCoords.xy * u_dimensions - halfDimensions;\n      float boxDist = roundedBox(boxUv, halfDimensions, u_radius);\n\n      float edgeWidth = 1.0 / u_pixelRatio;\n      float roundedAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, boxDist);\n\n      vec4 resColor = vec4(0.0);\n      resColor = mix(resColor, color, roundedAlpha);\n      gl_FragColor = resColor * u_alpha;\n    }\n  `
};

var props$2 = Object.assign({}, RoundedTemplate.props, getBorderProps("border"));

var RoundedWithBorderTemplate = {
    props: props$2
};

var RoundedWithBorder = {
    props: RoundedWithBorderTemplate.props,
    update(node) {
        this.uniformRGBA("u_borderColor", this.props["border-color"]);
        this.uniform4fa("u_borderWidth", this.props["border-w"]);
        this.uniform1f("u_borderGap", this.props["border-gap"]);
        this.uniform1f("u_borderAlign", this.props["border-align"]);
        this.uniform4fa("u_radius", calcFactoredRadiusArray(this.props.radius, node.w, node.h));
    },
    vertex: `\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    attribute vec2 a_position;\n    attribute vec2 a_textureCoords;\n    attribute vec4 a_color;\n    attribute vec2 a_nodeCoords;\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n    uniform vec2 u_dimensions;\n\n    uniform vec4 u_radius;\n    uniform vec4 u_borderWidth;\n    uniform float u_borderGap;\n    uniform float u_borderAlign;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n    varying vec2 v_nodeCoords;\n\n    varying vec2 v_innerSize;\n    varying vec2 v_outerSize;\n    varying vec2 v_outerBorderUv;\n    varying vec2 v_innerBorderUv;\n    varying vec4 v_innerBorderRadius;\n    varying vec4 v_outerBorderRadius;\n    varying vec2 v_halfDimensions;\n\n    void main() {\n      vec2 vertexPos = a_position * u_pixelRatio;\n      vec2 screenSpace = vec2(2.0 / u_resolution.x, -2.0 / u_resolution.y);\n      vec2 edge = clamp(a_nodeCoords * 2.0 - vec2(1.0), -1.0, 1.0);\n      vec2 edgeOffset = vec2(0.0);\n      float borderZero = 1.0 - step(0.001, dot(abs(u_borderWidth), vec4(1.0)));\n\n      v_innerSize = vec2(0.0);\n      v_outerSize = vec2(0.0);\n\n      // Compute all border values unconditionally — edgeOffset is masked by\n      // (1.0 - borderZero) so geometry is unaffected when no border is present.\n      vec4 adjustedBorderWidth = u_borderWidth - 1.0 + clamp(u_borderWidth, -1.0, 1.0);\n\n      float borderTop = adjustedBorderWidth.x;\n      float borderRight = adjustedBorderWidth.y;\n      float borderBottom = adjustedBorderWidth.z;\n      float borderLeft = adjustedBorderWidth.w;\n\n      v_outerBorderUv = vec2(0.0);\n      v_innerBorderUv = vec2(0.0);\n\n      vec2 borderSize = vec2(borderRight + borderLeft, borderTop + borderBottom);\n      vec2 extraSize = borderSize * u_borderAlign;\n      float gapLeft = step(0.001, borderLeft) * u_borderGap;\n      float gapRight = step(0.001, borderRight) * u_borderGap;\n      float gapTop = step(0.001, borderTop) * u_borderGap;\n      float gapBottom = step(0.001, borderBottom) * u_borderGap;\n      vec2 gapSize = vec2(gapLeft + gapRight, gapTop + gapBottom);\n\n      v_outerSize = (u_dimensions + gapSize + extraSize) * 0.5;\n      v_innerSize = v_outerSize - borderSize * 0.5;\n\n      // Use sign() to avoid branching\n      vec2 borderDiff = vec2(borderRight - borderLeft, borderBottom - borderTop);\n      vec2 signDiff = sign(borderDiff);\n      borderDiff = abs(borderDiff);\n\n      vec2 gapDiff = vec2(gapRight - gapLeft, gapBottom - gapTop);\n      vec2 signGapDiff = sign(gapDiff);\n      gapDiff = abs(gapDiff);\n\n      v_outerBorderUv = -signDiff * borderDiff * u_borderAlign * 0.5 - signGapDiff * gapDiff * 0.5;\n      v_innerBorderUv = v_outerBorderUv + signDiff * borderDiff * 0.5;\n\n      v_outerBorderRadius = vec4(\n        max(0.0, u_radius.x + max(borderTop * u_borderAlign + u_borderGap, borderLeft * u_borderAlign + u_borderGap)),\n        max(0.0, u_radius.y + max(borderTop * u_borderAlign + u_borderGap, borderRight * u_borderAlign + u_borderGap)),\n        max(0.0, u_radius.z + max(borderBottom * u_borderAlign + u_borderGap, borderRight * u_borderAlign + u_borderGap)),\n        max(0.0, u_radius.w + max(borderBottom * u_borderAlign + u_borderGap, borderLeft * u_borderAlign + u_borderGap))\n      );\n\n      v_innerBorderRadius = vec4(\n        max(0.0, v_outerBorderRadius.x - max(borderTop, borderLeft)),\n        max(0.0, v_outerBorderRadius.y - max(borderTop, borderRight)),\n        max(0.0, v_outerBorderRadius.z - max(borderBottom, borderRight)),\n        max(0.0, v_outerBorderRadius.w - max(borderBottom, borderLeft))\n      );\n\n      vec2 edgeOffsetExtra = step(u_dimensions * 0.5, v_outerSize) * edge * (extraSize + u_borderGap);\n      // Mask edgeOffset to zero when no border — replaces the if(borderZero == 0.0) block.\n      edgeOffset = edgeOffsetExtra * (1.0 - borderZero);\n\n      vertexPos = (a_position + edge + edgeOffset) * u_pixelRatio;\n\n      gl_Position = vec4(vertexPos.x * screenSpace.x - 1.0, -sign(screenSpace.y) * (vertexPos.y * -abs(screenSpace.y)) + 1.0, 0.0, 1.0);\n\n      v_color = a_color;\n      v_nodeCoords = a_nodeCoords + (screenSpace + edgeOffset) / (u_dimensions);\n      v_textureCoords = a_textureCoords + (screenSpace + edgeOffset) / (u_dimensions);\n\n      v_halfDimensions = u_dimensions * 0.5;\n    }\n  `,
    fragment: `\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n    uniform float u_alpha;\n    uniform vec2 u_dimensions;\n    uniform sampler2D u_texture;\n\n    uniform vec4 u_radius;\n    uniform vec4 u_borderWidth;\n    uniform vec4 u_borderColor;\n    uniform float u_borderGap;\n    uniform float u_borderAlign;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n    varying vec2 v_nodeCoords;\n\n    varying vec2 v_innerSize;\n    varying vec2 v_outerSize;\n    varying vec2 v_outerBorderUv;\n    varying vec2 v_innerBorderUv;\n    varying vec4 v_innerBorderRadius;\n    varying vec4 v_outerBorderRadius;\n    varying vec2 v_halfDimensions;\n\n    float roundedBox(vec2 p, vec2 s, vec4 r) {\n      float sx = step(0.0, p.x);\n      float sy = step(0.0, p.y);\n      r.xy = mix(r.xw, r.yz, sx);\n      r.x = mix(r.x, r.y, sy);\n      vec2 q = abs(p) - s + r.x;\n      return (min(max(q.x, q.y), 0.0) + length(max(q, 0.0))) - r.x;\n    }\n\n    void main() {\n      vec4 color = texture2D(u_texture, v_textureCoords) * v_color;\n      vec4 resultColor = vec4(0.0);\n      vec2 boxUv = v_nodeCoords.xy * u_dimensions - v_halfDimensions;\n      float borderZero = 1.0 - step(0.001, dot(abs(u_borderWidth), vec4(1.0)));\n      float edgeWidth = 1.0 / u_pixelRatio;\n\n      float nodeDist = roundedBox(boxUv, v_halfDimensions - edgeWidth, u_radius);\n      float nodeAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, nodeDist);\n      resultColor = mix(resultColor, color, nodeAlpha);\n\n      float outerDist = roundedBox(boxUv + v_outerBorderUv, v_outerSize - edgeWidth, v_outerBorderRadius);\n      float innerDist = roundedBox(boxUv + v_innerBorderUv, v_innerSize - edgeWidth, v_innerBorderRadius);\n\n      float borderDist = max(-innerDist, outerDist);\n      // Multiply by (1.0 - borderZero) to zero out border contribution when no border\n      // is present — replaces the if(borderZero == 1.0) early return.\n      float borderAlpha = (1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, borderDist)) * u_borderColor.a * (1.0 - borderZero);\n\n      resultColor = mix(resultColor, vec4(u_borderColor.rgb, 1.0), borderAlpha);\n      gl_FragColor = resultColor * u_alpha;\n    }\n  `
};

var props$1 = Object.assign({}, RoundedTemplate.props, getBorderProps("border"), getShadowProps("shadow"));

var RoundedWithBorderAndShadowTemplate = {
    props: props$1
};

var RoundedWithBorderAndShadow = {
    props: RoundedWithBorderAndShadowTemplate.props,
    update(node) {
        const props = this.props;
        this.uniformRGBA("u_borderColor", props["border-color"]);
        this.uniform4fa("u_borderWidth", props["border-w"]);
        this.uniform1f("u_borderGap", this.props["border-gap"]);
        this.uniform1f("u_borderAlign", this.props["border-align"]);
        this.uniformRGBA("u_shadowColor", props["shadow-color"]);
        this.uniform4fa("u_shadow", props["shadow-projection"]);
        this.uniform4fa("u_radius", calcFactoredRadiusArray(props.radius, node.w, node.h));
    },
    vertex: `\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    attribute vec2 a_position;\n    attribute vec2 a_textureCoords;\n    attribute vec4 a_color;\n    attribute vec2 a_nodeCoords;\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n    uniform float u_rtt;\n    uniform vec2 u_dimensions;\n\n    uniform vec4 u_shadow;\n    uniform vec4 u_radius;\n    uniform vec4 u_borderWidth;\n    uniform float u_borderGap;\n    uniform float u_borderAlign;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n    varying vec2 v_nodeCoords;\n\n    varying vec2 v_innerSize;\n    varying vec2 v_outerSize;\n    varying vec2 v_outerBorderUv;\n    varying vec2 v_innerBorderUv;\n    varying vec4 v_innerBorderRadius;\n    varying vec4 v_outerBorderRadius;\n    varying vec2 v_halfDimensions;\n\n    void main() {\n      vec2 screenSpace = vec2(2.0 / u_resolution.x,  -2.0 / u_resolution.y);\n      vec2 edge = clamp(a_nodeCoords * 2.0 - vec2(1.0), -1.0, 1.0);\n      float borderZero = 1.0 - step(0.001, dot(abs(u_borderWidth), vec4(1.0)));\n\n      vec2 edgeOffset = edge * ((u_shadow.w * 2.0)+ u_shadow.z) + u_shadow.xy;\n      vec2 vertexPos = (a_position + edge + edgeOffset) * u_pixelRatio;\n\n      v_innerSize = vec2(0.0);\n      v_outerSize = vec2(0.0);\n\n      // Compute all border values unconditionally — edgeOffset extra is masked by\n      // (1.0 - borderZero) so geometry is unaffected when no border is present.\n      vec4 adjustedBorderWidth = u_borderWidth - 1.0 + clamp(u_borderWidth, -1.0, 1.0);\n\n      float borderTop = adjustedBorderWidth.x;\n      float borderRight = adjustedBorderWidth.y;\n      float borderBottom = adjustedBorderWidth.z;\n      float borderLeft = adjustedBorderWidth.w;\n\n      v_outerBorderUv = vec2(0.0);\n      v_innerBorderUv = vec2(0.0);\n\n      vec2 borderSize = vec2(borderRight + borderLeft, borderTop + borderBottom);\n      vec2 extraSize = borderSize * u_borderAlign;\n      float gapLeft = step(0.001, borderLeft) * u_borderGap;\n      float gapRight = step(0.001, borderRight) * u_borderGap;\n      float gapTop = step(0.001, borderTop) * u_borderGap;\n      float gapBottom = step(0.001, borderBottom) * u_borderGap;\n      vec2 gapSize = vec2(gapLeft + gapRight, gapTop + gapBottom);\n\n      v_outerSize = (u_dimensions + gapSize + extraSize) * 0.5;\n      v_innerSize = v_outerSize - borderSize * 0.5;\n\n      // Use sign() to avoid branching\n      vec2 borderDiff = vec2(borderRight - borderLeft, borderBottom - borderTop);\n      vec2 signDiff = sign(borderDiff);\n      borderDiff = abs(borderDiff);\n\n      vec2 gapDiff = vec2(gapRight - gapLeft, gapBottom - gapTop);\n      vec2 signGapDiff = sign(gapDiff);\n      gapDiff = abs(gapDiff);\n\n      v_outerBorderUv = -signDiff * borderDiff * u_borderAlign * 0.5 - signGapDiff * gapDiff * 0.5;\n      v_innerBorderUv = v_outerBorderUv + signDiff * borderDiff * 0.5;\n\n      v_outerBorderRadius = vec4(\n        max(0.0, u_radius.x + max(borderTop * u_borderAlign + u_borderGap, borderLeft * u_borderAlign + u_borderGap)),\n        max(0.0, u_radius.y + max(borderTop * u_borderAlign + u_borderGap, borderRight * u_borderAlign + u_borderGap)),\n        max(0.0, u_radius.z + max(borderBottom * u_borderAlign + u_borderGap, borderRight * u_borderAlign + u_borderGap)),\n        max(0.0, u_radius.w + max(borderBottom * u_borderAlign + u_borderGap, borderLeft * u_borderAlign + u_borderGap))\n      );\n\n      v_innerBorderRadius = vec4(\n        max(0.0, v_outerBorderRadius.x - max(borderTop, borderLeft)),\n        max(0.0, v_outerBorderRadius.y - max(borderTop, borderRight)),\n        max(0.0, v_outerBorderRadius.z - max(borderBottom, borderRight)),\n        max(0.0, v_outerBorderRadius.w - max(borderBottom, borderLeft))\n      );\n\n      vec2 edgeOffsetExtra = step(u_dimensions * 0.5, v_outerSize) * edge * (extraSize + u_borderGap);\n      // Mask extra border offset to zero when no border — replaces if(borderZero == 0.0).\n      edgeOffset += edgeOffsetExtra * (1.0 - borderZero);\n\n      vertexPos = (a_position + edge + edgeOffset) * u_pixelRatio;\n\n      gl_Position = vec4(vertexPos.x * screenSpace.x - 1.0, -sign(screenSpace.y) * (vertexPos.y * -abs(screenSpace.y)) + 1.0, 0.0, 1.0);\n\n      v_halfDimensions = u_dimensions * 0.5;\n      v_color = a_color;\n      v_nodeCoords = a_nodeCoords + (screenSpace + edgeOffset) / (u_dimensions);\n      v_textureCoords = a_textureCoords + (screenSpace + edgeOffset) / (u_dimensions);\n    }\n  `,
    fragment: `\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n    uniform float u_alpha;\n    uniform vec2 u_dimensions;\n    uniform sampler2D u_texture;\n    uniform float u_rtt;\n\n    uniform vec4 u_radius;\n    uniform vec4 u_borderWidth;\n    uniform vec4 u_borderColor;\n    uniform vec4 u_shadowColor;\n    uniform vec4 u_shadow;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n    varying vec2 v_nodeCoords;\n\n    varying vec2 v_innerSize;\n    varying vec2 v_outerSize;\n    varying vec2 v_outerBorderUv;\n    varying vec2 v_innerBorderUv;\n    varying vec4 v_innerBorderRadius;\n    varying vec4 v_outerBorderRadius;\n    varying vec2 v_halfDimensions;\n\n    float roundedBox(vec2 p, vec2 s, vec4 r) {\n      float sx = step(0.0, p.x);\n      float sy = step(0.0, p.y);\n      r.xy = mix(r.xw, r.yz, sx);\n      r.x = mix(r.x, r.y, sy);\n      vec2 q = abs(p) - s + r.x;\n      return (min(max(q.x, q.y), 0.0) + length(max(q, 0.0))) - r.x;\n    }\n\n    float shadowBox(vec2 p, vec2 s, vec4 r) {\n      float sx = step(0.0, p.x);\n      float sy = step(0.0, p.y);\n      r.xy = mix(r.xw, r.yz, sx);\n      r.x = mix(r.x, r.y, sy);\n      vec2 q = abs(p) - s + r.x;\n      float dist = min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r.x;\n      return 1.0 - smoothstep(-u_shadow.w, u_shadow.w + u_shadow.z, dist);\n    }\n\n    void main() {\n      vec4 color = texture2D(u_texture, v_textureCoords) * v_color;\n      vec4 resultColor = vec4(0.0);\n      vec2 boxUv = v_nodeCoords.xy * u_dimensions - v_halfDimensions;\n      float borderZero = 1.0 - step(0.001, dot(abs(u_borderWidth), vec4(1.0)));\n      float edgeWidth = 1.0 / u_pixelRatio;\n      float nodeDist = roundedBox(boxUv, v_halfDimensions - edgeWidth, u_radius);\n      float nodeAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, nodeDist);\n\n      // Compute both shadow paths unconditionally and mix on the condition —\n      // replaces the if(borderZero == 1.0) early-return and the varying-driven\n      // if/else that caused warp divergence on Mali 400.\n      float shadowAlphaInner = shadowBox(boxUv - u_shadow.xy, v_halfDimensions + u_shadow.w - edgeWidth, u_radius + u_shadow.z);\n      float shadowAlphaOuter = shadowBox(boxUv + v_outerBorderUv - u_shadow.xy, v_outerSize + u_shadow.w - edgeWidth, v_outerBorderRadius + u_shadow.z);\n      // useOuter: 1.0 when outer border exceeds node half-dimensions AND border exists.\n      float useOuter = step(0.0, max(v_outerSize.x - v_halfDimensions.x, v_outerSize.y - v_halfDimensions.y)) * (1.0 - borderZero);\n      float shadowAlpha = mix(shadowAlphaInner, shadowAlphaOuter, useOuter);\n\n      float outerDist = roundedBox(boxUv + v_outerBorderUv, v_outerSize - edgeWidth, v_outerBorderRadius);\n      float innerDist = roundedBox(boxUv + v_innerBorderUv, v_innerSize - edgeWidth, v_innerBorderRadius);\n      float borderDist = max(-innerDist, outerDist);\n      // Multiply by (1.0 - borderZero) to zero out border contribution when no border\n      // is present — replaces the if(borderZero == 1.0) early return.\n      float borderAlpha = (1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, borderDist)) * u_borderColor.a * (1.0 - borderZero);\n\n      resultColor = mix(resultColor, u_shadowColor, shadowAlpha);\n      resultColor = mix(resultColor, color, nodeAlpha);\n      resultColor = mix(resultColor, vec4(u_borderColor.rgb, 1.0), borderAlpha);\n      gl_FragColor = resultColor * u_alpha;\n    }\n  `
};

var props = Object.assign({}, RoundedTemplate.props, getShadowProps("shadow"));

var RoundedWithShadowTemplate = {
    props: props
};

var Shadow = {
    props: ShadowTemplate.props,
    update() {
        this.uniformRGBA("u_color", this.props.color);
        this.uniform4fa("u_shadow", this.props.projection);
    },
    vertex: `\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    attribute vec2 a_position;\n    attribute vec2 a_textureCoords;\n    attribute vec4 a_color;\n    attribute vec2 a_nodeCoords;\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n    uniform float u_rtt;\n    uniform vec2 u_dimensions;\n\n    uniform vec4 u_shadow;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n    varying vec2 v_nodeCoords;\n\n    varying float v_edgeWidth;\n    varying vec2 v_halfDimensions;\n\n    void main() {\n      vec2 screenSpace = vec2(2.0 / u_resolution.x,  -2.0 / u_resolution.y);\n      vec2 outerEdge = clamp(a_nodeCoords * 2.0 - vec2(1.0), -1.0, 1.0);\n\n      vec2 shadowEdge = outerEdge * ((u_shadow.w * 2.0)+ u_shadow.z) + u_shadow.xy;\n\n      vec2 vertexPos = (a_position + outerEdge + shadowEdge) * u_pixelRatio;\n      gl_Position = vec4(vertexPos.x * screenSpace.x - 1.0, -sign(screenSpace.y) * (vertexPos.y * -abs(screenSpace.y)) + 1.0, 0.0, 1.0);\n\n      v_color = a_color;\n      v_nodeCoords = a_nodeCoords + (screenSpace + shadowEdge) / (u_dimensions);\n      v_textureCoords = a_textureCoords + (screenSpace + shadowEdge) / (u_dimensions);\n\n      v_halfDimensions = u_dimensions * 0.5;\n      v_edgeWidth = 1.0 / u_pixelRatio;\n    }\n  `,
    fragment: `\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n    uniform float u_alpha;\n    uniform vec2 u_dimensions;\n    uniform sampler2D u_texture;\n\n    uniform vec4 u_color;\n    uniform vec4 u_shadow;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n    varying vec2 v_nodeCoords;\n\n    varying vec2 v_halfDimensions;\n    varying float v_edgeWidth;\n\n    float box(vec2 p, vec2 s) {\n      vec2 q = abs(p) - s;\n      return (min(max(q.x, q.y), 0.0) + length(max(q, 0.0))) + 2.0;\n    }\n\n    float shadowBox(vec2 p, vec2 s, float r) {\n      vec2 q = abs(p) - s + r;\n      float dist = min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r;\n      return 1.0 - smoothstep(-u_shadow.w, u_shadow.w + u_shadow.z, dist);\n    }\n\n    void main() {\n      vec4 color = texture2D(u_texture, v_textureCoords) * v_color;\n      vec2 boxUv = v_nodeCoords.xy * u_dimensions - v_halfDimensions;\n      float boxDist = box(boxUv, v_halfDimensions - v_edgeWidth);\n\n      float boxAlpha = 1.0 - smoothstep(0.0, u_pixelRatio, boxDist);\n      float shadowDist = shadowBox(boxUv - u_shadow.xy, v_halfDimensions + u_shadow.w - v_edgeWidth, u_shadow.z);\n\n      vec4 resColor = vec4(0.0);\n      resColor = mix(resColor, u_color, shadowDist);\n      resColor = mix(resColor, color, min(color.a, boxAlpha));\n      gl_FragColor = resColor * u_alpha;\n    }\n  `
};

var RoundedWithShadow = {
    props: RoundedWithShadowTemplate.props,
    update(node) {
        this.uniformRGBA("u_shadow_color", this.props["shadow-color"]);
        this.uniform4fa("u_shadow", this.props["shadow-projection"]);
        this.uniform4fa("u_radius", calcFactoredRadiusArray(this.props.radius, node.w, node.h));
    },
    vertex: Shadow.vertex,
    fragment: `\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n    uniform float u_alpha;\n    uniform vec2 u_dimensions;\n    uniform sampler2D u_texture;\n\n    uniform vec4 u_shadow_color;\n    uniform vec4 u_shadow;\n    uniform vec4 u_radius;\n\n    uniform int u_asymWidth;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n    varying vec2 v_nodeCoords;\n\n    varying float v_edgeWidth;\n\n    float roundedBox(vec2 p, vec2 s, vec4 r) {\n      float sx = step(0.0, p.x);\n      float sy = step(0.0, p.y);\n      r.xy = mix(r.xw, r.yz, sx);\n      r.x = mix(r.x, r.y, sy);\n      vec2 q = abs(p) - s + r.x;\n      return (min(max(q.x, q.y), 0.0) + length(max(q, 0.0))) - r.x;\n    }\n\n    float shadowBox(vec2 p, vec2 s, vec4 r) {\n      float sx = step(0.0, p.x);\n      float sy = step(0.0, p.y);\n      r.xy = mix(r.xw, r.yz, sx);\n      r.x = mix(r.x, r.y, sy);\n      vec2 q = abs(p) - s + r.x;\n      float dist = min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r.x;\n      return 1.0 - smoothstep(-(u_shadow.w), (u_shadow.w + u_shadow.z), dist);\n    }\n\n    void main() {\n      vec4 color = texture2D(u_texture, v_textureCoords) * v_color;\n      vec2 halfDimensions = (u_dimensions * 0.5);\n\n      vec2 boxUv = v_nodeCoords.xy * u_dimensions - halfDimensions;\n      float boxDist = roundedBox(boxUv, halfDimensions - v_edgeWidth, u_radius);\n\n      float roundedAlpha = 1.0 - smoothstep(-0.5 * v_edgeWidth, 0.5 * v_edgeWidth, boxDist);\n\n      float shadowAlpha = shadowBox(boxUv - u_shadow.xy, halfDimensions + u_shadow.w - v_edgeWidth, u_radius + u_shadow.z);\n\n      vec4 resColor = vec4(0.0);\n      resColor = mix(resColor, u_shadow_color, shadowAlpha);\n      resColor = mix(resColor, color, min(color.a, roundedAlpha));\n      gl_FragColor = resColor * u_alpha;\n    }\n  `
};

var HolePunch = {
    props: HolePunchTemplate.props,
    update() {
        const props = this.props;
        this.uniform2f("u_pos", props.x, props.y);
        this.uniform2f("u_size", props.w * .5, props.h * .5);
        this.uniform4fa("u_radius", calcFactoredRadiusArray(props.radius, props.w, props.h));
    },
    getCacheMarkers(props) {
        return `radiusArray:${Array.isArray(props.radius)}`;
    },
    fragment: `\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    uniform float u_alpha;\n    uniform float u_pixelRatio;\n    uniform vec2 u_dimensions;\n    uniform sampler2D u_texture;\n\n    uniform vec2 u_size;\n    uniform vec2 u_pos;\n\n    uniform vec4 u_radius;\n\n    uniform vec4 u_color;\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n\n    void main() {\n      vec4 color = texture2D(u_texture, v_textureCoords) * v_color;\n      vec2 p = (v_textureCoords.xy * u_dimensions.xy - u_pos) - u_size;\n      vec4 r = u_radius;\n      float sx = step(0.0, p.x);\n      float sy = step(0.0, p.y);\n      r.xy = mix(r.xw, r.yz, sx);\n      r.x = mix(r.x, r.y, sy);\n      p = abs(p) - u_size + r.x;\n      float dist = min(max(p.x, p.y), 0.0) + length(max(p, 0.0)) - r.x + 2.0;\n      float roundedAlpha = 1.0 - smoothstep(0.0, u_pixelRatio, dist);\n      gl_FragColor = mix(color, vec4(0.0), min(color.a, roundedAlpha));\n    }\n  `
};

var LinearGradient = {
    props: LinearGradientTemplate.props,
    update() {
        const props = this.props;
        this.uniform1f("u_angle", props.angle - Math.PI / 180 * 90);
        this.uniform1fv("u_stops", new Float32Array(props.stops));
        const colors = [];
        for (let i = 0; i < props.colors.length; i++) {
            const norm = getNormalizedRgbaComponents(props.colors[i]);
            colors.push(norm[0], norm[1], norm[2], norm[3]);
        }
        this.uniform4fv("u_colors", new Float32Array(colors));
    },
    getCacheMarkers(props) {
        return `colors:${props.colors.length}`;
    },
    fragment(renderer, props) {
        return `\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    #define PI 3.14159265359\n    #define MAX_STOPS ${props.colors.length}\n    #define LAST_STOP ${props.colors.length - 1}\n\n    uniform float u_alpha;\n    uniform vec2 u_dimensions;\n\n    uniform sampler2D u_texture;\n\n    uniform float u_angle;\n    uniform float u_stops[MAX_STOPS];\n    uniform vec4 u_colors[MAX_STOPS];\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n\n    vec2 calcPoint(float d, float angle) {\n      return d * vec2(cos(angle), sin(angle)) + (u_dimensions * 0.5);\n    }\n\n    vec4 getGradientColor(float dist) {\n      dist = clamp(dist, 0.0, 1.0);\n      vec4 color = u_colors[0];\n      for(int i = 0; i < LAST_STOP; i++) {\n        float t = smoothstep(u_stops[i], u_stops[i + 1], dist);\n        color = mix(color, mix(u_colors[i], u_colors[i + 1], t), step(u_stops[i], dist));\n      }\n      return color;\n    }\n\n    void main() {\n      vec4 color = texture2D(u_texture, v_textureCoords) * v_color;\n      float a = u_angle;\n      float lineDist = abs(u_dimensions.x * cos(a)) + abs(u_dimensions.y * sin(a));\n      vec2 f = calcPoint(lineDist * 0.5, a);\n      vec2 t = calcPoint(lineDist * 0.5, a + PI);\n      // Scale to avoid mediump float overflow on platforms without highp\n      float s = max(u_dimensions.x, u_dimensions.y);\n      vec2 gradVec = (t - f) / s;\n      float dist = dot((v_textureCoords.xy * u_dimensions - f) / s, gradVec) / dot(gradVec, gradVec);\n      vec4 colorOut = getGradientColor(dist);\n      vec3 blendedRGB = mix(color.rgb, colorOut.rgb, clamp(colorOut.a, 0.0, 1.0));\n      gl_FragColor = vec4(blendedRGB, color.a);\n    }\n  `;
    }
};

var RadialGradient = {
    props: RadialGradientTemplate.props,
    update(node) {
        const props = this.props;
        this.uniform2f("u_projection", props.pivot[0] * node.w, props.pivot[1] * node.h);
        this.uniform2f("u_size", props.w, props.h);
        this.uniform1fv("u_stops", new Float32Array(props.stops));
        const colors = [];
        for (let i = 0; i < props.colors.length; i++) {
            const norm = getNormalizedRgbaComponents(props.colors[i]);
            colors.push(norm[0], norm[1], norm[2], norm[3]);
        }
        this.uniform4fv("u_colors", new Float32Array(colors));
    },
    getCacheMarkers(props) {
        return `colors:${props.colors.length}`;
    },
    fragment(renderer, props) {
        return `\n      # ifdef GL_FRAGMENT_PRECISION_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      #define MAX_STOPS ${props.colors.length}\n      #define LAST_STOP ${props.colors.length - 1}\n\n      uniform float u_alpha;\n      uniform vec2 u_dimensions;\n\n      uniform sampler2D u_texture;\n\n      uniform vec2 u_projection;\n      uniform vec2 u_size;\n\n      uniform float u_stops[MAX_STOPS];\n      uniform vec4 u_colors[MAX_STOPS];\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoords;\n      varying vec2 v_nodeCoords;\n\n      vec4 getGradientColor(float dist) {\n        dist = clamp(dist, 0.0, 1.0);\n        vec4 color = u_colors[0];\n        for(int i = 0; i < LAST_STOP; i++) {\n          float t = smoothstep(u_stops[i], u_stops[i + 1], dist);\n          color = mix(color, mix(u_colors[i], u_colors[i + 1], t), step(u_stops[i], dist));\n        }\n        return color;\n      }\n\n      void main() {\n        vec4 color = texture2D(u_texture, v_textureCoords) * v_color;\n        vec2 point = v_nodeCoords.xy * u_dimensions;\n        float dist = length((point - u_projection) / u_size);\n\n        vec4 colorOut = getGradientColor(dist);\n        vec3 blendedRGB = mix(color.rgb, colorOut.rgb, clamp(colorOut.a, 0.0, 1.0));\n        gl_FragColor = vec4(blendedRGB, color.a);\n      }\n    `;
    }
};

var invisibleChars = /[\u200B\u200C\u200D\uFEFF\u00AD\u2060]/g;

function hasZeroWidthSpace(space) {
    return invisibleChars.test(space) === true;
}

function getLayoutCacheKey(props) {
    return `${props.text}-${props.fontFamily}-${props.fontSize}-${props.letterSpacing}-${props.lineHeight}-${props.maxHeight}-${props.maxWidth}-${props.textAlign}-${props.wordBreak}-${props.maxLines}-${props.overflowSuffix}-${props.richText}`;
}

var spaceRegex = /[ \u200B]+/g;

var defaultFontMetrics = {
    ascender: 800,
    descender: -200,
    lineGap: 200,
    unitsPerEm: 1e3
};

var normalizeFontMetrics = (metrics, fontSize) => {
    const scale = fontSize / metrics.unitsPerEm;
    return {
        ascender: metrics.ascender * scale,
        descender: metrics.descender * scale,
        lineGap: metrics.lineGap * scale
    };
};

var mapTextLayout = (measureText, metrics, text, textAlign, fontFamily, lineHeight, overflowSuffix, wordBreak, letterSpacing, maxLines, maxWidth, maxHeight) => {
    const bareLineHeight = metrics.ascender - metrics.descender;
    const lineHeightPx = lineHeight <= 3 ? lineHeight * bareLineHeight : lineHeight;
    const halfDelta = (lineHeightPx - bareLineHeight) * .5;
    let effectiveMaxLines = maxLines;
    if (maxHeight > 0) {
        let maxFromHeight = Math.floor(maxHeight / lineHeightPx);
        if (maxFromHeight < 1) maxFromHeight = 1;
        if (effectiveMaxLines === 0 || maxFromHeight < effectiveMaxLines) effectiveMaxLines = maxFromHeight;
    }
    const [lines, remainingLines, remainingText] = maxWidth > 0 === true ? wrapText(measureText, text, fontFamily, maxWidth, letterSpacing, overflowSuffix, wordBreak, effectiveMaxLines) : measureLines(measureText, text.split("\n"), fontFamily, letterSpacing, effectiveMaxLines);
    let effectiveLineAmount = lines.length;
    let effectiveMaxWidth = 0;
    if (effectiveLineAmount > 0) {
        effectiveMaxWidth = lines[0][1];
        if (effectiveLineAmount > 1) for (let i = 1; i < effectiveLineAmount; i++) effectiveMaxWidth = Math.max(effectiveMaxWidth, lines[i][1]);
    }
    if (textAlign !== "left") for (let i = 0; i < effectiveLineAmount; i++) {
        const line = lines[i];
        const w = line[1];
        line[3] = textAlign === "right" ? effectiveMaxWidth - w : (effectiveMaxWidth - w) / 2;
    }
    const effectiveMaxHeight = effectiveLineAmount * lineHeightPx;
    const startY = halfDelta;
    for (let i = 0; i < effectiveLineAmount; i++) {
        const line = lines[i];
        line[4] = startY + lineHeightPx * i;
    }
    return [ lines, remainingLines, remainingText, bareLineHeight, lineHeightPx, effectiveMaxWidth, effectiveMaxHeight ];
};

var measureLines = (measureText, lines, fontFamily, letterSpacing, maxLines) => {
    const measuredLines = [];
    let remainingLines = maxLines > 0 ? maxLines : lines.length;
    let i = 0;
    while (remainingLines > 0) {
        const line = lines[i];
        i++;
        remainingLines--;
        if (line === void 0) continue;
        const width = measureText(line, fontFamily, letterSpacing);
        measuredLines.push([ line, width, false, 0, 0 ]);
    }
    return [ measuredLines, remainingLines, maxLines > 0 ? lines.length - measuredLines.length > 0 : false ];
};

var wrapText = (measureText, text, fontFamily, maxWidth, letterSpacing, overflowSuffix, wordBreak, maxLines) => {
    const lines = text.split("\n");
    const wrappedLines = [];
    const spaceWidth = measureText(" ", fontFamily, letterSpacing);
    const overflowWidth = measureText(overflowSuffix, fontFamily, letterSpacing);
    let wrappedLine = [];
    let remainingLines = maxLines > 0 ? maxLines : 1e3;
    let hasRemainingText = true;
    let hasMaxLines = maxLines > 0;
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line === void 0) continue;
        [wrappedLine, remainingLines, hasRemainingText] = line.length > 0 ? wrapLine(measureText, line, fontFamily, maxWidth, letterSpacing, spaceWidth, overflowSuffix, overflowWidth, wordBreak, remainingLines) : [ [ [ "", 0, false, 0, 0 ] ], remainingLines, i < lines.length - 1 ];
        remainingLines--;
        for (let j = 0; j < wrappedLine.length; j++) wrappedLines.push(wrappedLine[j]);
        if (hasMaxLines === true && remainingLines <= 0) {
            const lastLine = wrappedLines[wrappedLines.length - 1];
            if (i < lines.length - 1) {
                if (lastLine[2] === false) {
                    const [line, lineWidth] = truncateLineEnd(measureText, fontFamily, letterSpacing, lastLine[0], lastLine[1], "", maxWidth, overflowSuffix, overflowWidth);
                    lastLine[0] = line;
                    lastLine[1] = lineWidth;
                    lastLine[2] = true;
                }
            }
            break;
        }
    }
    return [ wrappedLines, remainingLines, hasRemainingText ];
};

var wrapLine = (measureText, line, fontFamily, maxWidth, letterSpacing, spaceWidth, overflowSuffix, overflowWidth, wordBreak, remainingLines) => {
    const words = line.split(spaceRegex);
    const spaces = line.match(spaceRegex) || [];
    const wrappedLines = [];
    let currentLine = "";
    let currentLineWidth = 0;
    let hasRemainingText = true;
    const wrapFn = getWrapStrategy(wordBreak);
    let wordIdx = 0;
    let spaceIdx = 0;
    let pendingWord = "";
    while ((pendingWord.length > 0 || wordIdx < words.length) && remainingLines > 0) {
        let word;
        let wordWidth;
        let remainingWord = "";
        if (pendingWord.length > 0) {
            word = pendingWord;
            pendingWord = "";
        } else word = words[wordIdx++];
        wordWidth = measureText(word, fontFamily, letterSpacing);
        if (currentLineWidth === 0) {
            if (wordWidth > maxWidth) {
                remainingLines--;
                const isLastLine = remainingLines === 0;
                let lineTruncated = isLastLine;
                [word, remainingWord, wordWidth] = isLastLine ? truncateWord(measureText, word, wordWidth, maxWidth, fontFamily, letterSpacing, overflowSuffix, overflowWidth) : splitWord(measureText, word, wordWidth, maxWidth, fontFamily, letterSpacing);
                if (remainingWord.length > 0) {
                    if (word.length === 0) {
                        if (overflowSuffix.length > 0) {
                            word = overflowSuffix;
                            wordWidth = overflowWidth;
                        } else {
                            word = remainingWord.charAt(0);
                            if (word.length === 0) break;
                            wordWidth = measureText(word, fontFamily, letterSpacing);
                        }
                        remainingWord = "";
                        remainingLines = 0;
                        lineTruncated = true;
                    }
                    pendingWord = remainingWord;
                }
                wrappedLines.push([ word, wordWidth, lineTruncated, 0, 0 ]);
            } else if (wordWidth + spaceWidth >= maxWidth) {
                remainingLines--;
                wrappedLines.push([ word, wordWidth, false, 0, 0 ]);
            } else {
                currentLine = word;
                currentLineWidth = wordWidth;
            }
            continue;
        }
        const space = spaces[spaceIdx++] || "";
        const effectiveSpaceWidth = space === "​" ? 0 : spaceWidth;
        const totalWidth = currentLineWidth + effectiveSpaceWidth + wordWidth;
        if (totalWidth < maxWidth) {
            currentLine += effectiveSpaceWidth > 0 ? space + word : word;
            currentLineWidth = totalWidth;
            continue;
        }
        remainingLines--;
        if (totalWidth === maxWidth) {
            currentLine += effectiveSpaceWidth > 0 ? space + word : word;
            currentLineWidth = totalWidth;
            wrappedLines.push([ currentLine, currentLineWidth, false, 0, 0 ]);
            currentLine = "";
            currentLineWidth = 0;
            continue;
        }
        [currentLine, currentLineWidth, remainingWord] = wrapFn(measureText, word, wordWidth, fontFamily, letterSpacing, wrappedLines, currentLine, currentLineWidth, remainingLines, remainingWord, maxWidth, space, spaceWidth, overflowSuffix, overflowWidth);
        if (remainingWord.length > 0) pendingWord = remainingWord;
    }
    if (currentLineWidth > 0 && remainingLines > 0) wrappedLines.push([ currentLine, currentLineWidth, false, 0, 0 ]);
    return [ wrappedLines, remainingLines, hasRemainingText ];
};

var getWrapStrategy = wordBreak => {
    if (wordBreak === "break-word") return breakWord;
    if (wordBreak === "break-all") return breakAll;
    if (wordBreak === "overflow") return overflow;
    return breakWord;
};

var overflow = (measureText, word, wordWidth, fontFamily, letterSpacing, wrappedLines, currentLine, currentLineWidth, remainingLines, remainingWord, maxWidth, space, spaceWidth, overflowSuffix, overflowWidth) => {
    currentLine += space + word;
    currentLineWidth += spaceWidth + wordWidth;
    if (remainingLines === 0) {
        currentLine += overflowSuffix;
        currentLineWidth += overflowWidth;
    }
    wrappedLines.push([ currentLine, currentLineWidth, true, 0, 0 ]);
    return [ "", 0, "" ];
};

var breakWord = (measureText, word, wordWidth, fontFamily, letterSpacing, wrappedLines, currentLine, currentLineWidth, remainingLines, remainingWord, maxWidth, space, spaceWidth, overflowSuffix, overflowWidth) => {
    remainingWord = word;
    if (remainingLines === 0) {
        [currentLine, currentLineWidth, remainingWord] = truncateLineEnd(measureText, fontFamily, letterSpacing, currentLine, currentLineWidth, remainingWord, maxWidth, overflowSuffix, overflowWidth);
        wrappedLines.push([ currentLine, currentLineWidth, true, 0, 0 ]);
    } else {
        wrappedLines.push([ currentLine, currentLineWidth, false, 0, 0 ]);
        currentLine = "";
        currentLineWidth = 0;
    }
    return [ currentLine, currentLineWidth, remainingWord ];
};

var breakAll = (measureText, word, wordWidth, fontFamily, letterSpacing, wrappedLines, currentLine, currentLineWidth, remainingLines, remainingWord, maxWidth, space, spaceWidth, overflowSuffix, overflowWidth) => {
    let remainingSpace = maxWidth - currentLineWidth;
    if (currentLineWidth > 0) remainingSpace -= spaceWidth;
    const truncate = remainingLines === 0;
    [word, remainingWord, wordWidth] = truncate ? truncateWord(measureText, word, wordWidth, remainingSpace, fontFamily, letterSpacing, overflowSuffix, overflowWidth) : splitWord(measureText, word, wordWidth, remainingSpace, fontFamily, letterSpacing);
    currentLine += space + word;
    currentLineWidth += spaceWidth + wordWidth;
    wrappedLines.push([ currentLine, currentLineWidth, truncate, 0, 0 ]);
    currentLine = "";
    currentLineWidth = 0;
    return [ currentLine, currentLineWidth, remainingWord ];
};

var truncateLineEnd = (measureText, fontFamily, letterSpacing, currentLine, currentLineWidth, remainingWord, maxWidth, overflowSuffix, overflowWidth) => {
    if (currentLineWidth + overflowWidth <= maxWidth) {
        currentLine += overflowSuffix;
        currentLineWidth += overflowWidth;
        remainingWord = "";
        return [ currentLine, currentLineWidth, remainingWord ];
    }
    let truncated = false;
    for (let i = currentLine.length - 1; i > 0; i--) {
        const charWidth = measureText(currentLine.charAt(i), fontFamily, letterSpacing);
        currentLineWidth -= charWidth;
        if (currentLineWidth + overflowWidth <= maxWidth) {
            currentLine = currentLine.substring(0, i) + overflowSuffix;
            currentLineWidth += overflowWidth;
            remainingWord = currentLine.substring(i) + " " + remainingWord;
            truncated = true;
            break;
        }
    }
    if (truncated === false) {
        currentLine = overflowSuffix;
        currentLineWidth = overflowWidth;
        remainingWord = currentLine;
    }
    return [ currentLine, currentLineWidth, remainingWord ];
};

var truncateWord = (measureText, word, wordWidth, maxWidth, fontFamily, letterSpacing, overflowSuffix, overflowWidth) => {
    const targetWidth = maxWidth - overflowWidth;
    if (targetWidth <= 0) return [ "", word, 0 ];
    if (wordWidth - targetWidth < wordWidth / 2 === false) {
        let currentWidth = wordWidth;
        for (let i = word.length - 1; i > 0; i--) {
            const charWidth = measureText(word.charAt(i), fontFamily, letterSpacing);
            currentWidth -= charWidth;
            if (currentWidth <= targetWidth) {
                const remainingWord = word.substring(i);
                return [ word.substring(0, i) + overflowSuffix, remainingWord, currentWidth + overflowWidth ];
            }
        }
        return [ overflowSuffix, word, overflowWidth ];
    }
    let currentWidth = 0;
    for (let i = 0; i < word.length; i++) {
        const charWidth = measureText(word.charAt(i), fontFamily, letterSpacing);
        if (currentWidth + charWidth > targetWidth) {
            const remainingWord = word.substring(i);
            return [ word.substring(0, i) + overflowSuffix, remainingWord, currentWidth + overflowWidth ];
        }
        currentWidth += charWidth;
    }
    return [ word + overflowSuffix, "", wordWidth + overflowWidth ];
};

var splitWord = (measureText, word, wordWidth, maxWidth, fontFamily, letterSpacing) => {
    if (maxWidth <= 0) return [ "", word, 0 ];
    if (wordWidth - maxWidth < wordWidth / 2 === false) {
        let currentWidth = wordWidth;
        for (let i = word.length - 1; i > 0; i--) {
            const charWidth = measureText(word.charAt(i), fontFamily, letterSpacing);
            currentWidth -= charWidth;
            if (currentWidth <= maxWidth) {
                const remainingWord = word.substring(i);
                return [ word.substring(0, i), remainingWord, currentWidth ];
            }
        }
        return [ "", word, 0 ];
    }
    let currentWidth = 0;
    for (let i = 0; i < word.length; i++) {
        const charWidth = measureText(word.charAt(i), fontFamily, letterSpacing);
        if (currentWidth + charWidth > maxWidth) {
            const remainingWord = word.substring(i);
            return [ word.substring(0, i), remainingWord, currentWidth ];
        }
        currentWidth += charWidth;
    }
    return [ word, "", wordWidth ];
};

var SdfFontHandler_exports = __exportAll({
    canRenderFont: () => canRenderFont$1,
    getAtlas: () => getAtlas,
    getFontData: () => getFontData,
    getFontFamilies: () => getFontFamilies$1,
    getFontMetrics: () => getFontMetrics$1,
    getGlyph: () => getGlyph,
    getKerning: () => getKerning,
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
});

var fontCache$1 = new Map;

var fontLoadPromises$1 = new Map;

var normalizedMetrics$1 = new Map;

var nodesWaitingForFont$1 = Object.create(null);

var initialized$1 = false;

var buildKerningTable = kernings => {
    const kerningTable = {};
    let i = 0;
    const length = kernings.length;
    while (i < length) {
        const kerning = kernings[i];
        i++;
        if (kerning === void 0) continue;
        const second = kerning.second;
        let firsts = kerningTable[second];
        if (firsts === void 0) {
            firsts = {};
            kerningTable[second] = firsts;
        }
        firsts[kerning.first] = kerning.amount;
    }
    return kerningTable;
};

var buildGlyphMap = chars => {
    const glyphMap = new Map;
    let maxCharHeight = 0;
    let i = 0;
    const length = chars.length;
    while (i < length) {
        const glyph = chars[i];
        i++;
        if (glyph === void 0) continue;
        glyphMap.set(glyph.id, glyph);
        const charHeight = glyph.yoffset + glyph.height;
        if (charHeight > maxCharHeight) maxCharHeight = charHeight;
    }
    return glyphMap;
};

var processFontData$1 = (fontFamily, fontData, atlasTexture, metrics) => {
    const glyphMap = buildGlyphMap(fontData.chars);
    const kernings = buildKerningTable(fontData.kernings);
    let maxCharHeight = 0;
    let i = 0;
    const length = fontData.chars.length;
    while (i < length) {
        const glyph = fontData.chars[i];
        if (glyph !== void 0) {
            const charHeight = glyph.yoffset + glyph.height;
            if (charHeight > maxCharHeight) maxCharHeight = charHeight;
        }
        i++;
    }
    if (metrics === void 0 && fontData.lightningMetrics === void 0) console.warn(`Font metrics not found for SDF font ${fontFamily}. Make sure you are using the latest version of the Lightning 3 msdf-generator tool to generate your SDF fonts. Using default metrics.`);
    metrics = metrics || fontData.lightningMetrics || {
        ascender: 800,
        descender: -200,
        lineGap: 200,
        unitsPerEm: 1e3
    };
    fontCache$1.set(fontFamily, {
        data: fontData,
        glyphMap: glyphMap,
        kernings: kernings,
        atlasTexture: atlasTexture,
        metrics: metrics,
        maxCharHeight: maxCharHeight
    });
};

var canRenderFont$1 = trProps => isFontLoaded$1(trProps.fontFamily) || fontLoadPromises$1.has(trProps.fontFamily);

var loadFont$1 = async (stage, options) => {
    const {fontFamily: fontFamily, atlasUrl: atlasUrl, atlasDataUrl: atlasDataUrl, metrics: metrics} = options;
    if (fontCache$1.get(fontFamily) !== void 0) return;
    const existingPromise = fontLoadPromises$1.get(fontFamily);
    if (existingPromise !== void 0) return existingPromise;
    if (atlasDataUrl === void 0) throw new Error(`Atlas data URL must be provided for SDF font: ${fontFamily}`);
    const nwff = nodesWaitingForFont$1[fontFamily] = [];
    const loadPromise = (async () => {
        const response = await fetch(atlasDataUrl);
        if (!response.ok) throw new Error(`Failed to load font data: ${response.statusText}`);
        const fontData = await response.json();
        if (!fontData || !fontData.chars) throw new Error("Invalid SDF font data format");
        if (!atlasUrl) throw new Error("Atlas texture must be provided for SDF fonts");
        return new Promise((resolve, reject) => {
            const atlasTexture = stage.txManager.createTexture("ImageTexture", {
                src: atlasUrl,
                premultiplyAlpha: false
            });
            atlasTexture.setRenderableOwner(fontFamily, true);
            atlasTexture.preventCleanup = true;
            if (atlasTexture.state === "loaded") {
                processFontData$1(fontFamily, fontData, atlasTexture, metrics);
                fontLoadPromises$1.delete(fontFamily);
                for (let key in nwff) nwff[key].setUpdateType(UpdateType.Local);
                delete nodesWaitingForFont$1[fontFamily];
                return resolve();
            }
            atlasTexture.on("loaded", () => {
                processFontData$1(fontFamily, fontData, atlasTexture, metrics);
                fontLoadPromises$1.delete(fontFamily);
                for (let key in nwff) nwff[key].setUpdateType(UpdateType.Local);
                delete nodesWaitingForFont$1[fontFamily];
                resolve();
            });
            atlasTexture.on("failed", error => {
                fontLoadPromises$1.delete(fontFamily);
                if (fontCache$1[fontFamily]) delete fontCache$1[fontFamily];
                console.error(`Failed to load SDF font: ${fontFamily}`, error);
                reject(error);
            });
        });
    })();
    fontLoadPromises$1.set(fontFamily, loadPromise);
    return loadPromise;
};

var waitingForFont$1 = (fontFamily, node) => {
    if (nodesWaitingForFont$1[fontFamily] === void 0) return;
    nodesWaitingForFont$1[fontFamily][node.id] = node;
};

var stopWaitingForFont$1 = (fontFamily, node) => {
    if (nodesWaitingForFont$1[fontFamily] === void 0) return;
    delete nodesWaitingForFont$1[fontFamily][node.id];
};

var getFontFamilies$1 = () => ({});

var init$3 = _c => {
    if (initialized$1 === true) return;
    initialized$1 = true;
};

var type$3 = "sdf";

var isFontLoaded$1 = fontFamily => fontCache$1.has(fontFamily);

var getFontMetrics$1 = (fontFamily, fontSize) => {
    const out = normalizedMetrics$1.get(fontFamily);
    if (out !== void 0) return out;
    let metrics = fontCache$1.get(fontFamily).metrics;
    return processFontMetrics$1(fontFamily, fontSize, metrics);
};

var processFontMetrics$1 = (fontFamily, fontSize, metrics) => {
    const label = fontFamily + fontSize;
    const normalized = normalizeFontMetrics(metrics, fontSize);
    normalizedMetrics$1.set(label, normalized);
    return normalized;
};

var getGlyph = (fontFamily, codepoint) => {
    const cache = fontCache$1.get(fontFamily);
    if (cache === void 0) return null;
    return cache.glyphMap.get(codepoint) || cache.glyphMap.get(63) || null;
};

var getKerning = (fontFamily, firstGlyph, secondGlyph) => {
    const cache = fontCache$1.get(fontFamily);
    if (cache === void 0) return 0;
    const seconds = cache.kernings[secondGlyph];
    return seconds ? seconds[firstGlyph] || 0 : 0;
};

var getAtlas = fontFamily => {
    const cache = fontCache$1.get(fontFamily);
    return cache !== void 0 ? cache.atlasTexture : null;
};

var getFontData = fontFamily => fontCache$1.get(fontFamily);

var getMaxCharHeight = fontFamily => {
    const cache = fontCache$1.get(fontFamily);
    return cache !== void 0 ? cache.maxCharHeight : 0;
};

var getLoadedFonts = () => Array.from(fontCache$1.keys());

var unloadFont = fontFamily => {
    const cache = fontCache$1.get(fontFamily);
    if (cache !== void 0) {
        if (typeof cache.atlasTexture.free === "function") cache.atlasTexture.free();
        fontCache$1.delete(fontFamily);
    }
};

var measureText$1 = (text, fontFamily, letterSpacing) => {
    if (text.length === 0) return 0;
    let width = 0;
    let prevGlyphId = 0;
    for (const char of text) {
        const codepoint = char.codePointAt(0);
        if (codepoint === void 0) continue;
        if (hasZeroWidthSpace(char)) continue;
        const glyph = getGlyph(fontFamily, codepoint);
        if (glyph === null) continue;
        let advance = glyph.xadvance;
        if (prevGlyphId !== 0) {
            const kerning = getKerning(fontFamily, prevGlyphId, glyph.id);
            advance += kerning;
        }
        width += advance + letterSpacing;
        prevGlyphId = glyph.id;
    }
    return width;
};

function getWebGlParameters(glw) {
    const params = {
        MAX_RENDERBUFFER_SIZE: 0,
        MAX_TEXTURE_SIZE: 0,
        MAX_VIEWPORT_DIMS: 0,
        MAX_VERTEX_TEXTURE_IMAGE_UNITS: 0,
        MAX_TEXTURE_IMAGE_UNITS: 0,
        MAX_COMBINED_TEXTURE_IMAGE_UNITS: 0,
        MAX_VERTEX_ATTRIBS: 0,
        MAX_VARYING_VECTORS: 0,
        MAX_VERTEX_UNIFORM_VECTORS: 0,
        MAX_FRAGMENT_UNIFORM_VECTORS: 0
    };
    Object.keys(params).forEach(key => {
        params[key] = glw.getParameter(glw[key]);
    });
    return params;
}

function getWebGlExtensions(glw) {
    const extensions = {
        ANGLE_instanced_arrays: null,
        WEBGL_compressed_texture_s3tc: null,
        WEBGL_compressed_texture_astc: null,
        WEBGL_compressed_texture_etc: null,
        WEBGL_compressed_texture_etc1: null,
        WEBGL_compressed_texture_pvrtc: null,
        WEBKIT_WEBGL_compressed_texture_pvrtc: null,
        WEBGL_compressed_texture_s3tc_srgb: null,
        OES_vertex_array_object: null
    };
    Object.keys(extensions).forEach(key => {
        extensions[key] = glw.getExtension(key);
    });
    return extensions;
}

function createIndexBuffer(glw, size) {
    const maxQuads = ~~(size / 80);
    const indices = new Uint16Array(maxQuads * 6);
    for (let i = 0, j = 0; i < maxQuads; i += 6, j += 4) {
        indices[i] = j;
        indices[i + 1] = j + 1;
        indices[i + 2] = j + 2;
        indices[i + 3] = j + 2;
        indices[i + 4] = j + 1;
        indices[i + 5] = j + 3;
    }
    const buffer = glw.createBuffer();
    glw.elementArrayBufferData(buffer, indices, glw.STATIC_DRAW);
}

function isHTMLImageElement(obj) {
    return obj !== null && (typeof obj === "object" && obj.constructor && obj.constructor.name === "HTMLImageElement" || typeof Image !== "undefined" && obj instanceof Image);
}

var TRANSPARENT_TEXTURE_DATA = new Uint8Array([ 0, 0, 0, 0 ]);

var WebGlCtxTexture = class extends CoreContextTexture {
    constructor(glw, memManager, textureSource) {
        super(memManager, textureSource);
        this.glw = void 0;
        this._nativeCtxTexture = null;
        this._w = 0;
        this._h = 0;
        this.txCoords = {
            x1: 0,
            y1: 0,
            x2: 1,
            y2: 1
        };
        this.glw = glw;
    }
    checkGLError() {
        if (this.state === "failed") return true;
        if (true === false) {
            const error = this.glw.getError();
            if (error !== 0) {
                this.state = "failed";
                this.textureSource.setState("failed", new Error(`WebGL Error: ${error}`));
                return true;
            }
        }
        return false;
    }
    get ctxTexture() {
        if (this.state === "freed") {
            this.load();
            return null;
        }
        return this._nativeCtxTexture;
    }
    get w() {
        return this._w;
    }
    get h() {
        return this._h;
    }
    async load() {
        if (this.state === "loading" || this.state === "loaded") return Promise.resolve();
        this.state = "loading";
        this.textureSource.setState("loading");
        this._nativeCtxTexture = this.createNativeCtxTexture();
        if (this._nativeCtxTexture === null) {
            this.state = "failed";
            const error = new Error("Could not create WebGL Texture");
            this.textureSource.setState("failed", error);
            console.error("Could not create WebGL Texture");
            throw error;
        }
        try {
            const {w: w, h: h} = await this.onLoadRequest();
            if (this.state === "freed") return;
            this.state = "loaded";
            this._w = w;
            this._h = h;
            this.textureSource.setState("loaded", {
                w: w,
                h: h
            });
            this.textureSource.freeTextureData();
        } catch (err) {
            if (this.state === "freed") return;
            this.state = "failed";
            const error = err instanceof Error ? err : new Error(String(err));
            this.textureSource.setState("failed", error);
            this.textureSource.freeTextureData();
            console.error(err);
            throw error;
        }
    }
    async onLoadRequest() {
        const {glw: glw} = this;
        const textureData = this.textureSource.textureData;
        if (textureData === null || this._nativeCtxTexture === null) throw new Error("Texture data or native texture is null " + this.textureSource.type);
        glw.texImage2D(0, glw.RGBA, 1, 1, 0, glw.RGBA, glw.UNSIGNED_BYTE, null);
        this.setTextureMemUse(TRANSPARENT_TEXTURE_DATA.byteLength);
        let w = 0;
        let h = 0;
        glw.activeTexture(0);
        const tdata = textureData.data;
        const format = glw.RGBA;
        const formatBytes = 4;
        const memoryPadding = 1.1;
        const isImageBitmap = typeof ImageBitmap !== "undefined" && tdata instanceof ImageBitmap;
        const isHTMLCanvas = typeof HTMLCanvasElement !== "undefined" && tdata instanceof HTMLCanvasElement;
        if (isImageBitmap || isHTMLCanvas || tdata instanceof ImageData || isHTMLImageElement(tdata) === true) {
            w = tdata.width;
            h = tdata.height;
            glw.bindTexture(this._nativeCtxTexture);
            let unpackPremultiply;
            if (isImageBitmap) {
                var _textureData$premulti;
                unpackPremultiply = ((_textureData$premulti = textureData.premultiplied) !== null && _textureData$premulti !== void 0 ? _textureData$premulti : true) ? false : !!textureData.premultiplyAlpha;
            } else unpackPremultiply = !!textureData.premultiplyAlpha;
            glw.pixelStorei(glw.UNPACK_PREMULTIPLY_ALPHA_WEBGL, unpackPremultiply);
            glw.texImage2D(0, format, format, glw.UNSIGNED_BYTE, tdata);
            if (this.checkGLError() === true) return {
                w: 0,
                h: 0
            };
            this.setTextureMemUse(h * w * formatBytes * memoryPadding);
        } else if (tdata === null) {
            w = 0;
            h = 0;
            glw.bindTexture(this._nativeCtxTexture);
            glw.texImage2D(0, format, 1, 1, 0, format, glw.UNSIGNED_BYTE, TRANSPARENT_TEXTURE_DATA);
            this.setTextureMemUse(TRANSPARENT_TEXTURE_DATA.byteLength);
        } else if ("mipmaps" in tdata && tdata.mipmaps) {
            var _mipmaps$0$byteLength, _mipmaps$;
            const {mipmaps: mipmaps, type: type, blockInfo: blockInfo} = tdata;
            glw["upload" + type](this._nativeCtxTexture, tdata);
            if (this.checkGLError() === true) return {
                w: 0,
                h: 0
            };
            w = tdata.w;
            h = tdata.h;
            this.txCoords.x2 = w / (Math.ceil(w / blockInfo.width) * blockInfo.width);
            this.txCoords.y2 = h / (Math.ceil(h / blockInfo.height) * blockInfo.height);
            this.setTextureMemUse((_mipmaps$0$byteLength = (_mipmaps$ = mipmaps[0]) == null ? void 0 : _mipmaps$.byteLength) !== null && _mipmaps$0$byteLength !== void 0 ? _mipmaps$0$byteLength : 0);
        } else if (tdata && tdata instanceof Uint8Array) {
            w = 1;
            h = 1;
            glw.bindTexture(this._nativeCtxTexture);
            glw.pixelStorei(glw.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !!textureData.premultiplyAlpha);
            glw.texImage2D(0, format, w, h, 0, format, glw.UNSIGNED_BYTE, tdata);
            if (this.checkGLError() === true) return {
                w: 0,
                h: 0
            };
            this.setTextureMemUse(w * h * formatBytes);
        } else throw new Error(`WebGlCoreCtxTexture.onLoadRequest: Unexpected textureData returned`);
        return {
            w: w,
            h: h
        };
    }
    free() {
        if (this.state === "freed") return;
        this.state = "freed";
        this.textureSource.setState("freed");
        this.release();
    }
    release() {
        this._w = 0;
        this._h = 0;
        if (this._nativeCtxTexture !== null) {
            this.glw.deleteTexture(this._nativeCtxTexture);
            this.setTextureMemUse(0);
            this._nativeCtxTexture = null;
        }
        this.textureSource.freeTextureData();
    }
    createNativeCtxTexture() {
        const {glw: glw} = this;
        const nativeTexture = glw.createTexture();
        if (!nativeTexture) return null;
        glw.activeTexture(0);
        glw.bindTexture(nativeTexture);
        glw.texParameteri(glw.TEXTURE_MAG_FILTER, glw.LINEAR);
        glw.texParameteri(glw.TEXTURE_MIN_FILTER, glw.LINEAR);
        glw.texParameteri(glw.TEXTURE_WRAP_S, glw.CLAMP_TO_EDGE);
        glw.texParameteri(glw.TEXTURE_WRAP_T, glw.CLAMP_TO_EDGE);
        return nativeTexture;
    }
};

var WebGlCtxSubTexture = class extends WebGlCtxTexture {
    constructor(glw, memManager, textureSource) {
        super(glw, memManager, textureSource);
    }
    async onLoadRequest() {
        const props = this.textureSource.textureData;
        assertTruthy(props, "SubTexture must have texture data");
        if (props.data instanceof Uint8Array) return {
            w: 1,
            h: 1
        };
        return this.extractDimensions(props.data);
    }
    extractDimensions(data) {
        if (data === null) return {
            w: 0,
            h: 0
        };
        if (this.hasWidthHeight(data) === true) return {
            w: data.width,
            h: data.height
        };
        if (this.hasWH(data) === true) return {
            w: data.w,
            h: data.h
        };
        return {
            w: 0,
            h: 0
        };
    }
    hasWidthHeight(data) {
        return typeof data.width === "number" && typeof data.height === "number";
    }
    hasWH(data) {
        return typeof data.w === "number" && typeof data.h === "number";
    }
};

var SDF_PLAIN_FLOATS_PER_VERTEX = 6;

var SDF_RICH_FLOATS_PER_VERTEX = 7;

var SdfBuffer = class {
    constructor(glw, layout, initialBytes = 512 * 1024) {
        this.layout = void 0;
        this.floatsPerVertex = void 0;
        this.buffer = void 0;
        this.fBuffer = void 0;
        this.uiBuffer = void 0;
        this.idx = 0;
        this.quadCount = 0;
        this.changed = true;
        this.lastUploadedSize = 0;
        this.quadBufferCollection = void 0;
        this.layout = layout;
        this.floatsPerVertex = layout === "plain" ? 6 : 7;
        this.buffer = new ArrayBuffer(initialBytes);
        this.fBuffer = new Float32Array(this.buffer);
        this.uiBuffer = new Uint32Array(this.buffer);
        const glBuffer = glw.createBuffer();
        if (glBuffer === null) throw new Error("Failed to create WebGL buffer for SDF text rendering");
        this.quadBufferCollection = this.createBufferCollection(glw, glBuffer);
    }
    ensureCapacity(requiredFloats) {
        const f = this.fBuffer;
        if (requiredFloats <= f.length) return;
        let newCapacity = f.length * 2;
        while (newCapacity < requiredFloats) newCapacity *= 2;
        const newBuffer = new ArrayBuffer(newCapacity * Float32Array.BYTES_PER_ELEMENT);
        const newF = new Float32Array(newBuffer);
        newF.set(f);
        this.buffer = newBuffer;
        this.fBuffer = newF;
        this.uiBuffer = new Uint32Array(newBuffer);
        this.changed = true;
    }
    clear() {
        this.idx = 0;
        this.quadCount = 0;
    }
    createBufferCollection(glw, glBuffer) {
        const floatsPerVertex = this.floatsPerVertex;
        const stride = floatsPerVertex * Float32Array.BYTES_PER_ELEMENT;
        const attributes = {
            a_position: {
                name: "a_position",
                size: 2,
                type: glw.FLOAT,
                normalized: false,
                stride: stride,
                offset: 0
            },
            a_textureCoords: {
                name: "a_textureCoords",
                size: 2,
                type: glw.FLOAT,
                normalized: false,
                stride: stride,
                offset: 2 * Float32Array.BYTES_PER_ELEMENT
            },
            a_color: {
                name: "a_color",
                size: 4,
                type: glw.UNSIGNED_BYTE,
                normalized: true,
                stride: stride,
                offset: 4 * Float32Array.BYTES_PER_ELEMENT
            },
            a_distRange: {
                name: "a_distRange",
                size: 1,
                type: glw.FLOAT,
                normalized: false,
                stride: stride,
                offset: (floatsPerVertex - 1) * Float32Array.BYTES_PER_ELEMENT
            }
        };
        if (this.layout === "rich") attributes["a_style"] = {
            name: "a_style",
            size: 1,
            type: glw.FLOAT,
            normalized: false,
            stride: stride,
            offset: 5 * Float32Array.BYTES_PER_ELEMENT
        };
        return new BufferCollection([ {
            buffer: glBuffer,
            attributes: attributes
        } ]);
    }
};

var CoreRenderOp = class {};

var SdfRenderOp = class extends CoreRenderOp {
    constructor(renderer, shader, sdfBuffer, worldAlpha, clippingRect, w, h, rtt, parentHasRenderTexture, framebufferDimensions) {
        super();
        this.renderer = void 0;
        this.shader = void 0;
        this.sdfBuffer = void 0;
        this.worldAlpha = void 0;
        this.clippingRect = void 0;
        this.w = void 0;
        this.h = void 0;
        this.rtt = void 0;
        this.parentHasRenderTexture = void 0;
        this.framebufferDimensions = void 0;
        this.numQuads = 0;
        this.isCoreNode = false;
        this.renderOpTextures = [];
        this.time = 0;
        this.stage = void 0;
        this.startQuad = 0;
        this.renderer = renderer;
        this.shader = shader;
        this.sdfBuffer = sdfBuffer;
        this.worldAlpha = worldAlpha;
        this.clippingRect = clippingRect;
        this.w = w;
        this.h = h;
        this.rtt = rtt;
        this.parentHasRenderTexture = parentHasRenderTexture;
        this.framebufferDimensions = framebufferDimensions;
        this.stage = renderer.stage;
    }
    get quadBufferCollection() {
        return this.sdfBuffer.quadBufferCollection;
    }
    addTexture(texture) {
        const {renderOpTextures: renderOpTextures} = this;
        const length = renderOpTextures.length;
        for (let i = 0; i < length; i++) if (renderOpTextures[i] === texture) return i;
        if (length >= 1) return 4294967295;
        renderOpTextures.push(texture);
        return length;
    }
    draw() {
        const {glw: glw, stage: stage} = this.renderer;
        const canvas = stage.platform.canvas;
        stage.shManager.useShader(this.shader.program);
        this.shader.program.bindRenderOp(this);
        if (this.clippingRect.valid === true) {
            const pixelRatio = this.parentHasRenderTexture ? 1 : stage.pixelRatio;
            const clipX = Math.round(this.clippingRect.x * pixelRatio);
            const clipWidth = Math.round(this.clippingRect.w * pixelRatio);
            const clipHeight = Math.round(this.clippingRect.h * pixelRatio);
            let clipY = Math.round(canvas.height - clipHeight - this.clippingRect.y * pixelRatio);
            if (this.parentHasRenderTexture) clipY = this.framebufferDimensions ? this.framebufferDimensions.h - this.h : 0;
            glw.setScissorTest(true);
            glw.scissor(clipX, clipY, clipWidth, clipHeight);
        } else glw.setScissorTest(false);
        const byteOffset = this.startQuad * 6 * 2;
        glw.drawElements(glw.TRIANGLES, 6 * this.numQuads, glw.UNSIGNED_SHORT, byteOffset);
    }
};

var WebGlCtxRenderTexture = class extends WebGlCtxTexture {
    constructor(glw, memManager, textureSource) {
        super(glw, memManager, textureSource);
        this.framebuffer = null;
        this.txCoords = {
            x1: 0,
            y1: 1,
            x2: 1,
            y2: 0
        };
    }
    async onLoadRequest() {
        const {glw: glw} = this;
        const nativeTexture = this._nativeCtxTexture = this.createNativeCtxTexture();
        if (!nativeTexture) throw new Error("Failed to create native texture for RenderTexture");
        const {w: w, h: h} = this.textureSource;
        this.framebuffer = glw.createFramebuffer();
        glw.texImage2D(0, glw.RGBA, w, h, 0, glw.RGBA, glw.UNSIGNED_BYTE, null);
        this.setTextureMemUse(w * h * 4);
        glw.bindFramebuffer(this.framebuffer);
        glw.framebufferTexture2D(glw.COLOR_ATTACHMENT0, nativeTexture, 0);
        glw.bindFramebuffer(null);
        return {
            w: w,
            h: h
        };
    }
    free() {
        super.free();
        this.glw.deleteFramebuffer(this.framebuffer);
        this.framebuffer = null;
    }
};

var StencilClip = {
    vertex: `\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    attribute vec2 a_position;\n    attribute vec2 a_nodeCoords;\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n\n    varying vec2 v_nodeCoords;\n\n    void main() {\n      vec2 normalized = a_position * u_pixelRatio;\n      vec2 screenSpace = vec2(2.0 / u_resolution.x, -2.0 / u_resolution.y);\n\n      v_nodeCoords = a_nodeCoords;\n\n      gl_Position = vec4(normalized.x * screenSpace.x - 1.0, normalized.y * -abs(screenSpace.y) + 1.0, 0.0, 1.0);\n      gl_Position.y = -sign(screenSpace.y) * gl_Position.y;\n    }\n  `,
    fragment: `\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    uniform vec2 u_dimensions;\n    uniform float u_radius;\n    uniform float u_pixelRatio;\n\n    varying vec2 v_nodeCoords;\n\n    float roundedBox(vec2 p, vec2 s, float r) {\n      vec2 q = abs(p) - s + r;\n      return (min(max(q.x, q.y), 0.0) + length(max(q, 0.0))) - r;\n    }\n\n    void main() {\n      vec2 halfDimensions = u_dimensions * 0.5;\n      vec2 boxUv = v_nodeCoords.xy * u_dimensions - halfDimensions;\n      float boxDist = roundedBox(boxUv, halfDimensions, u_radius);\n\n      float edgeWidth = 1.0 / u_pixelRatio;\n      float alpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, boxDist);\n\n      if (alpha < 0.5) {\n        discard;\n      }\n\n      gl_FragColor = vec4(0.0);\n    }\n  `
};

var FULL_UPLOAD_DIRTY_RATIO = .4;

var _PACKED_WHITE$1 = 4294967295;

var _mergeSdfSpanColor = (nodeColor, spanColor) => {
    if (spanColor === _PACKED_WHITE$1) return nodeColor;
    const nr = nodeColor & 255;
    const ng = nodeColor >>> 8 & 255;
    const nb = nodeColor >>> 16 & 255;
    const na = nodeColor >>> 24 & 255;
    const sr = spanColor & 255;
    const sg = spanColor >>> 8 & 255;
    const sb = spanColor >>> 16 & 255;
    const sa = spanColor >>> 24 & 255;
    const r = nr * sr + 127 >> 8;
    const g = ng * sg + 127 >> 8;
    const b = nb * sb + 127 >> 8;
    const a = na * sa + 127 >> 8;
    return (r | g << 8 | b << 16 | a << 24) >>> 0;
};

var StencilClipRenderOp = class {
    constructor() {
        this.kind = 0;
        this.x = 0;
        this.y = 0;
        this.w = 0;
        this.h = 0;
        this.clipRadius = 0;
        this.pixelRatio = 1;
        this.canvasHeight = 0;
        this.parentHasRenderTexture = false;
        this.parentFramebufferH = 0;
        this.stencilRef = 0;
    }
};

var WebGlRenderer = class extends CoreRenderer {
    constructor(stage) {
        super(stage);
        this.glw = void 0;
        this.system = void 0;
        this.quadBuffer = void 0;
        this.fQuadBuffer = void 0;
        this.uiQuadBuffer = void 0;
        this.renderOps = [];
        this.curBufferIdx = 0;
        this.curRenderOp = null;
        this.rttNodes = [];
        this.activeRttNode = null;
        this.needsFullUpload = true;
        this.lastUploadedBufferSize = 0;
        this.dirtyQuadCount = 0;
        this.rttQuadBuffer = null;
        this.fRttQuadBuffer = null;
        this.uiRttQuadBuffer = null;
        this._quadScratchBuffer = new ArrayBuffer(20 * Float32Array.BYTES_PER_ELEMENT);
        this._quadScratchF = new Float32Array(this._quadScratchBuffer);
        this.sdfBufferPlain = void 0;
        this.sdfBufferRich = void 0;
        this.curSdfRenderOp = null;
        this.defaultTextureCoords = {
            x1: 0,
            y1: 0,
            x2: 1,
            y2: 1
        };
        this.defaultShaderNode = null;
        this.quadBufferCollection = void 0;
        this.stencilClipProgram = null;
        this.stencilDepth = 0;
        this.stencilQuadBufferCollection = null;
        this.stencilOpPool = [];
        this.stencilOpPoolIdx = 0;
        this._stencilScratchBuffer = new ArrayBuffer(20 * Float32Array.BYTES_PER_ELEMENT);
        this._stencilScratchF = new Float32Array(this._stencilScratchBuffer);
        this._stencilScratchU = new Uint32Array(this._stencilScratchBuffer);
        this.clearColor = {
            raw: 0,
            normalized: [ 0, 0, 0, 0 ]
        };
        this.quadBufferUsage = 0;
        this.numQuadsRendered = 0;
        this.renderToTextureActive = false;
        this.quadBuffer = new ArrayBuffer(stage.options.quadBufferSize);
        this.fQuadBuffer = new Float32Array(this.quadBuffer);
        this.uiQuadBuffer = new Uint32Array(this.quadBuffer);
        this.mode = "webgl";
        const platform = stage.platform;
        const canvas = platform.canvas;
        const glw = this.glw = platform.createContext();
        glw.viewport(0, 0, canvas.width, canvas.height);
        this.updateClearColor(stage.clearColor);
        glw.setBlend(true);
        glw.blendFunc(glw.ONE, glw.ONE_MINUS_SRC_ALPHA);
        createIndexBuffer(glw, stage.bufferMemory);
        this.system = {
            parameters: getWebGlParameters(this.glw),
            extensions: getWebGlExtensions(this.glw)
        };
        const quadBuffer = glw.createBuffer();
        const stride = 5 * Float32Array.BYTES_PER_ELEMENT;
        const maxQuads = ~~(this.stage.bufferMemory / 80);
        const nodeCoords = new Float32Array(maxQuads * 8);
        for (let i = 0; i < maxQuads * 8; i += 8) {
            nodeCoords[i] = 0;
            nodeCoords[i + 1] = 0;
            nodeCoords[i + 2] = 1;
            nodeCoords[i + 3] = 0;
            nodeCoords[i + 4] = 0;
            nodeCoords[i + 5] = 1;
            nodeCoords[i + 6] = 1;
            nodeCoords[i + 7] = 1;
        }
        const nodeCoordsBuffer = glw.createBuffer();
        glw.arrayBufferData(nodeCoordsBuffer, nodeCoords, glw.STATIC_DRAW);
        this.quadBufferCollection = new BufferCollection([ {
            buffer: quadBuffer,
            attributes: {
                a_position: {
                    name: "a_position",
                    size: 2,
                    type: glw.FLOAT,
                    normalized: false,
                    stride: stride,
                    offset: 0
                },
                a_textureCoords: {
                    name: "a_textureCoords",
                    size: 2,
                    type: glw.FLOAT,
                    normalized: false,
                    stride: stride,
                    offset: 2 * Float32Array.BYTES_PER_ELEMENT
                },
                a_color: {
                    name: "a_color",
                    size: 4,
                    type: glw.UNSIGNED_BYTE,
                    normalized: true,
                    stride: stride,
                    offset: 4 * Float32Array.BYTES_PER_ELEMENT
                }
            }
        }, {
            buffer: nodeCoordsBuffer,
            attributes: {
                a_nodeCoords: {
                    name: "a_nodeCoords",
                    size: 2,
                    type: glw.FLOAT,
                    normalized: false,
                    stride: 2 * Float32Array.BYTES_PER_ELEMENT,
                    offset: 0
                }
            }
        } ]);
        const stencilBuf = glw.createBuffer();
        const stencilStride = 5 * Float32Array.BYTES_PER_ELEMENT;
        glw.arrayBufferData(stencilBuf, new Float32Array(20), glw.DYNAMIC_DRAW);
        this.stencilQuadBufferCollection = new BufferCollection([ {
            buffer: stencilBuf,
            attributes: {
                a_position: {
                    name: "a_position",
                    size: 2,
                    type: glw.FLOAT,
                    normalized: false,
                    stride: stencilStride,
                    offset: 0
                }
            }
        }, {
            buffer: nodeCoordsBuffer,
            attributes: {
                a_nodeCoords: {
                    name: "a_nodeCoords",
                    size: 2,
                    type: glw.FLOAT,
                    normalized: false,
                    stride: 2 * Float32Array.BYTES_PER_ELEMENT,
                    offset: 0
                }
            }
        } ]);
        this.sdfBufferPlain = new SdfBuffer(glw, "plain");
        this.sdfBufferRich = new SdfBuffer(glw, "rich");
    }
    reset() {
        const {glw: glw} = this;
        this.curBufferIdx = 0;
        this.curRenderOp = null;
        this.dirtyQuadCount = 0;
        this.curSdfRenderOp = null;
        this.renderOps.length = 0;
        this.sdfBufferPlain.clear();
        this.sdfBufferRich.clear();
        this.stencilOpPoolIdx = 0;
        this.stencilDepth = 0;
        glw.setScissorTest(false);
        glw.setStencilTest(false);
        if (this.stage.options.enableClear !== false) glw.clear();
    }
    createShaderProgram(shaderType, props) {
        return new WebGlShaderProgram(this, shaderType, props);
    }
    createShaderNode(shaderKey, shaderType, props, program) {
        return new WebGlShaderNode(shaderKey, shaderType, program, this.stage, props);
    }
    supportsShaderType(shaderType) {
        return shaderType.fragment !== void 0;
    }
    createCtxTexture(textureSource) {
        if (textureSource instanceof SubTexture) return new WebGlCtxSubTexture(this.glw, this.stage.txMemManager, textureSource); else if (textureSource instanceof RenderTexture) return new WebGlCtxRenderTexture(this.glw, this.stage.txMemManager, textureSource);
        return new WebGlCtxTexture(this.glw, this.stage.txMemManager, textureSource);
    }
    addQuad(node) {
        const isRTT = this.renderToTextureActive === true;
        let f = this.fQuadBuffer;
        let u = this.uiQuadBuffer;
        if (isRTT === true) {
            if (this.fRttQuadBuffer === null) {
                this.rttQuadBuffer = new ArrayBuffer(this.stage.options.quadBufferSize);
                this.fRttQuadBuffer = new Float32Array(this.rttQuadBuffer);
                this.uiRttQuadBuffer = new Uint32Array(this.rttQuadBuffer);
            }
            f = this.fRttQuadBuffer;
            u = this.uiRttQuadBuffer;
        }
        let tx = node.props.texture || this.stage.defaultTexture;
        if (tx.type === TextureType.subTexture) tx = tx.parentTexture;
        const ctx = tx.ctxTexture;
        if (ctx === void 0) return;
        let i = this.curBufferIdx;
        if (isRTT === false) node.quadBufferIndex = i;
        this.curBufferIdx = i + 20;
        if (this.reuseRenderOp(node) === false) this.newRenderOp(node, i);
        let tidx = this.curRenderOp.addTexture(ctx);
        if (tidx === 4294967295) {
            this.newRenderOp(node, i);
            tidx = this.curRenderOp.addTexture(ctx);
        }
        if (isRTT === false && node.isQuadDirty === true) this.dirtyQuadCount++;
        const rc = node.renderCoords;
        const tc = node.textureCoords || this.defaultTextureCoords;
        const cTl = node.premultipliedColorTl;
        const cTr = node.premultipliedColorTr;
        const cBl = node.premultipliedColorBl;
        const cBr = node.premultipliedColorBr;
        f[i] = rc.x1;
        f[i + 1] = rc.y1;
        f[i + 2] = tc.x1;
        f[i + 3] = tc.y1;
        u[i + 4] = cTl;
        f[i + 5] = rc.x2;
        f[i + 6] = rc.y2;
        f[i + 7] = tc.x2;
        f[i + 8] = tc.y1;
        u[i + 9] = cTr;
        f[i + 10] = rc.x4;
        f[i + 11] = rc.y4;
        f[i + 12] = tc.x1;
        f[i + 13] = tc.y2;
        u[i + 14] = cBl;
        f[i + 15] = rc.x3;
        f[i + 16] = rc.y3;
        f[i + 17] = tc.x2;
        f[i + 18] = tc.y2;
        u[i + 19] = cBr;
        this.curRenderOp.numQuads++;
    }
    newRenderOp(node, bufferIdx) {
        const curRenderOp = node;
        curRenderOp.renderOpBufferIdx = bufferIdx;
        curRenderOp.numQuads = 0;
        curRenderOp.renderOpTextures.length = 0;
        curRenderOp.stencilDepth = this.stencilDepth;
        this.curRenderOp = curRenderOp;
        this.renderOps.push(curRenderOp);
    }
    reuseRenderOp(node) {
        const curRenderOp = this.curRenderOp;
        if (curRenderOp === null) return false;
        if (curRenderOp instanceof StencilClipRenderOp) return false;
        if (curRenderOp instanceof SdfRenderOp) return false;
        if (curRenderOp.stencilDepth !== this.stencilDepth) return false;
        const shader = node.props.shader;
        const curShader = curRenderOp.shader;
        if ((curShader == null ? void 0 : curShader.shaderKey) !== (shader == null ? void 0 : shader.shaderKey)) return false;
        if (compareRect(curRenderOp.clippingRect, node.clippingRect) === false) return false;
        const curRtt = curRenderOp.rtt;
        if (curRenderOp.parentHasRenderTexture !== node.parentHasRenderTexture || curRtt !== (node.props.rtt === true)) return false;
        if (node.parentHasRenderTexture === true && node.parentFramebufferDimensions !== null) {
            const curFbDims = curRenderOp.isCoreNode ? curRenderOp.parentFramebufferDimensions : curRenderOp.framebufferDimensions;
            if (curFbDims === null || curFbDims.w !== node.parentFramebufferDimensions.w || curFbDims.h !== node.parentFramebufferDimensions.h) return false;
        }
        if ((curShader == null ? void 0 : curShader.shaderKey) === "default" && (shader == null ? void 0 : shader.shaderKey) === "default") return true;
        if ((curShader == null ? void 0 : curShader.program.reuseRenderOp(node, curRenderOp)) === false) return false;
        return true;
    }
    addRenderOp(renderable) {
        this.renderOps.push(renderable);
        this.curRenderOp = null;
    }
    addSdfQuads(sdfBuffer, glyphs, glyphCount, fontScale, transform, color, worldAlpha, distanceRange, atlasTexture, clippingRect, width, height, parentHasRenderTexture, framebufferDimensions, sdfShader) {
        if (glyphCount === 0) return;
        sdfBuffer.changed = true;
        const isRich = sdfBuffer.layout === "rich";
        const floatsPerVertex = sdfBuffer.floatsPerVertex;
        const glyphStride = isRich ? 12 : 8;
        let idx = sdfBuffer.idx;
        sdfBuffer.ensureCapacity(idx + glyphCount * floatsPerVertex * 4);
        const f = sdfBuffer.fBuffer;
        const u = sdfBuffer.uiBuffer;
        const uGlyphs = new Uint32Array(glyphs.buffer, glyphs.byteOffset, glyphs.length);
        const mergedColor = mergeColorAlpha(color, worldAlpha);
        const r = mergedColor >>> 24;
        const g = mergedColor >>> 16 & 255;
        const b = mergedColor >>> 8 & 255;
        const a = mergedColor & 255;
        const packedNodeColor = (r | g << 8 | b << 16 | a << 24) >>> 0;
        const m0 = transform[0] * fontScale;
        const m1 = transform[1] * fontScale;
        const m3 = transform[3] * fontScale;
        const m4 = transform[4] * fontScale;
        const m6 = transform[6];
        const m7 = transform[7];
        const startQuad = sdfBuffer.quadCount;
        let go = 0;
        for (let gi = 0; gi < glyphCount; gi++) {
            const gx1 = glyphs[go];
            const gy1 = glyphs[go + 1];
            const gx2 = gx1 + glyphs[go + 2];
            const gy2 = gy1 + glyphs[go + 3];
            const u1 = glyphs[go + 4];
            const v1 = glyphs[go + 5];
            const u2 = u1 + glyphs[go + 6];
            const v2 = v1 + glyphs[go + 7];
            let packedColor = packedNodeColor;
            let style = 0;
            let shearTop = 0;
            let shearBot = 0;
            if (isRich) {
                shearTop = glyphs[go + 8];
                shearBot = glyphs[go + 9];
                packedColor = _mergeSdfSpanColor(packedNodeColor, uGlyphs[go + 10]);
                style = glyphs[go + 11];
            }
            go += glyphStride;
            const sx1t = gx1 + shearTop;
            const sx2t = gx2 + shearTop;
            const sx1b = gx1 + shearBot;
            const sx2b = gx2 + shearBot;
            const wx_tl = m0 * sx1t + m3 * gy1 + m6;
            const wy_tl = m1 * sx1t + m4 * gy1 + m7;
            const wx_tr = m0 * sx2t + m3 * gy1 + m6;
            const wy_tr = m1 * sx2t + m4 * gy1 + m7;
            const wx_bl = m0 * sx1b + m3 * gy2 + m6;
            const wy_bl = m1 * sx1b + m4 * gy2 + m7;
            const wx_br = m0 * sx2b + m3 * gy2 + m6;
            const wy_br = m1 * sx2b + m4 * gy2 + m7;
            f[idx] = wx_tl;
            f[idx + 1] = wy_tl;
            f[idx + 2] = u1;
            f[idx + 3] = v1;
            u[idx + 4] = packedColor;
            if (isRich) {
                f[idx + 5] = style;
                f[idx + 6] = distanceRange;
            } else f[idx + 5] = distanceRange;
            idx += floatsPerVertex;
            f[idx] = wx_tr;
            f[idx + 1] = wy_tr;
            f[idx + 2] = u2;
            f[idx + 3] = v1;
            u[idx + 4] = packedColor;
            if (isRich) {
                f[idx + 5] = style;
                f[idx + 6] = distanceRange;
            } else f[idx + 5] = distanceRange;
            idx += floatsPerVertex;
            f[idx] = wx_bl;
            f[idx + 1] = wy_bl;
            f[idx + 2] = u1;
            f[idx + 3] = v2;
            u[idx + 4] = packedColor;
            if (isRich) {
                f[idx + 5] = style;
                f[idx + 6] = distanceRange;
            } else f[idx + 5] = distanceRange;
            idx += floatsPerVertex;
            f[idx] = wx_br;
            f[idx + 1] = wy_br;
            f[idx + 2] = u2;
            f[idx + 3] = v2;
            u[idx + 4] = packedColor;
            if (isRich) {
                f[idx + 5] = style;
                f[idx + 6] = distanceRange;
            } else f[idx + 5] = distanceRange;
            idx += floatsPerVertex;
        }
        sdfBuffer.idx = idx;
        sdfBuffer.quadCount += glyphCount;
        this.finalizeSdfBatch(sdfBuffer, startQuad, glyphCount, atlasTexture, clippingRect, worldAlpha, width, height, parentHasRenderTexture, framebufferDimensions, sdfShader);
    }
    addSdfCachedQuads(sdfBuffer, cachedVertices, numGlyphs, atlasTexture, clippingRect, worldAlpha, width, height, parentHasRenderTexture, framebufferDimensions, sdfShader) {
        if (numGlyphs === 0) return;
        const startQuad = sdfBuffer.quadCount;
        sdfBuffer.ensureCapacity(sdfBuffer.idx + cachedVertices.length);
        sdfBuffer.fBuffer.set(cachedVertices, sdfBuffer.idx);
        sdfBuffer.idx += cachedVertices.length;
        sdfBuffer.quadCount += numGlyphs;
        this.finalizeSdfBatch(sdfBuffer, startQuad, numGlyphs, atlasTexture, clippingRect, worldAlpha, width, height, parentHasRenderTexture, framebufferDimensions, sdfShader);
    }
    addSdfTranslatedQuads(sdfBuffer, cachedVertices, numGlyphs, dx, dy, atlasTexture, clippingRect, worldAlpha, width, height, parentHasRenderTexture, framebufferDimensions, sdfShader) {
        if (numGlyphs === 0) return;
        sdfBuffer.changed = true;
        const startQuad = sdfBuffer.quadCount;
        const idx = sdfBuffer.idx;
        sdfBuffer.ensureCapacity(idx + cachedVertices.length);
        const f = sdfBuffer.fBuffer;
        f.set(cachedVertices, idx);
        const end = idx + cachedVertices.length;
        const floatsPerVertex = sdfBuffer.floatsPerVertex;
        for (let i = idx; i < end; i += floatsPerVertex) {
            f[i] = f[i] + dx;
            f[i + 1] = f[i + 1] + dy;
        }
        sdfBuffer.idx = end;
        sdfBuffer.quadCount += numGlyphs;
        this.finalizeSdfBatch(sdfBuffer, startQuad, numGlyphs, atlasTexture, clippingRect, worldAlpha, width, height, parentHasRenderTexture, framebufferDimensions, sdfShader);
    }
    finalizeSdfBatch(sdfBuffer, startQuad, glyphCount, atlasTexture, clippingRect, worldAlpha, width, height, parentHasRenderTexture, framebufferDimensions, sdfShader) {
        const cur = this.curSdfRenderOp;
        let canBatch = false;
        if (cur !== null) {
            if (cur.sdfBuffer === sdfBuffer) {
                if (cur.renderOpTextures.length === 1 && cur.renderOpTextures[0] === atlasTexture) {
                    if (compareRect(cur.clippingRect, clippingRect)) {
                        if (cur.parentHasRenderTexture === parentHasRenderTexture && cur.rtt === false) canBatch = true;
                    }
                }
            }
        }
        if (canBatch && cur !== null) if (this.renderOps[this.renderOps.length - 1] === cur) cur.numQuads += glyphCount; else canBatch = false;
        if (canBatch === false) {
            const op = new SdfRenderOp(this, sdfShader, sdfBuffer, worldAlpha, clippingRect, width, height, false, parentHasRenderTexture, framebufferDimensions);
            op.startQuad = startQuad;
            op.numQuads = glyphCount;
            op.addTexture(atlasTexture);
            this.renderOps.push(op);
            this.curSdfRenderOp = op;
            this.curRenderOp = null;
        }
    }
    uploadSdfBuffer() {
        this.uploadSdfBufferLayout(this.sdfBufferPlain);
        this.uploadSdfBufferLayout(this.sdfBufferRich);
    }
    uploadSdfBufferLayout(sdfBuffer) {
        if (sdfBuffer.idx === 0) return;
        if (sdfBuffer.changed === false && sdfBuffer.idx === sdfBuffer.lastUploadedSize) return;
        const glw = this.glw;
        const sdfBuf = sdfBuffer.quadBufferCollection.getBuffer("a_position") || null;
        const sdfArr = new Float32Array(sdfBuffer.buffer, 0, sdfBuffer.idx);
        glw.arrayBufferData(sdfBuf, sdfArr, glw.DYNAMIC_DRAW);
        sdfBuffer.lastUploadedSize = sdfBuffer.idx;
        sdfBuffer.changed = false;
    }
    render(_surface = "screen") {
        const {glw: glw, quadBuffer: quadBuffer} = this;
        const buffer = this.quadBufferCollection.getBuffer("a_position") || null;
        const BYTES = Float32Array.BYTES_PER_ELEMENT;
        let fullUpload = this.needsFullUpload || this.curBufferIdx > this.lastUploadedBufferSize;
        if (fullUpload === false) fullUpload = this.dirtyQuadCount > this.stage.renderListLen * FULL_UPLOAD_DIRTY_RATIO;
        const nodes = this.stage.renderListNodes;
        if (fullUpload === true) {
            const arr = new Float32Array(quadBuffer, 0, this.curBufferIdx);
            glw.arrayBufferData(buffer, arr, glw.DYNAMIC_DRAW);
            this.needsFullUpload = false;
            this.lastUploadedBufferSize = this.curBufferIdx;
            for (let i = 0; i < this.stage.renderListLen; i++) nodes[i].isQuadDirty = false;
        } else {
            const scratch = this._quadScratchF;
            const f = this.fQuadBuffer;
            for (let i = 0; i < this.stage.renderListLen; i++) {
                const node = nodes[i];
                if (node.isQuadDirty === true && node.quadBufferIndex !== -1) {
                    const slot = node.quadBufferIndex;
                    for (let j = 0; j < 20; j++) scratch[j] = f[slot + j];
                    glw.arrayBufferSubData(buffer, slot * BYTES, scratch);
                    node.isQuadDirty = false;
                }
            }
        }
        this.uploadSdfBuffer();
        for (let i = 0, length = this.renderOps.length; i < length; i++) {
            const op = this.renderOps[i];
            if (op instanceof StencilClipRenderOp) if (op.kind === 0) this.drawStencilBegin(op); else this.drawStencilEnd(op); else op.draw(this);
        }
        this.quadBufferUsage = this.curBufferIdx * BYTES;
        const QUAD_SIZE_IN_BYTES = 4 * (5 * BYTES);
        this.numQuadsRendered = this.quadBufferUsage / QUAD_SIZE_IN_BYTES;
    }
    getQuadCount() {
        return this.numQuadsRendered;
    }
    renderToTexture(node) {
        for (let i = 0; i < this.rttNodes.length; i++) if (this.rttNodes[i] === node) return;
        this.insertRTTNodeInOrder(node);
    }
    insertRTTNodeInOrder(node) {
        let insertIndex = this.rttNodes.length;
        const rttNodes = this.rttNodes;
        const indexMap = new Map;
        for (let i = 0; i < rttNodes.length; i++) indexMap.set(rttNodes[i].id, i);
        let currentNode = node;
        while (currentNode.parent !== null) {
            const parentIndex = indexMap.get(currentNode.parent.id);
            if (parentIndex !== void 0) {
                insertIndex = parentIndex;
                break;
            }
            currentNode = currentNode.parent;
        }
        const maxChildIndex = this.findMaxChildRTTIndex(node, indexMap);
        if (maxChildIndex !== -1) insertIndex = Math.max(insertIndex, maxChildIndex + 1);
        this.rttNodes.splice(insertIndex, 0, node);
    }
    findMaxChildRTTIndex(node, indexMap) {
        let maxIndex = -1;
        const stack = [ node ];
        while (stack.length !== 0) {
            const current = stack.pop();
            const idx = indexMap.get(current.id);
            if (idx !== void 0 && idx > maxIndex) maxIndex = idx;
            const children = current.children;
            for (let i = 0; i < children.length; i++) stack.push(children[i]);
        }
        return maxIndex;
    }
    renderRTTNodes() {
        const {glw: glw} = this;
        const savedBufferIdx = this.curBufferIdx;
        for (let i = 0; i < this.rttNodes.length; i++) {
            const node = this.rttNodes[i];
            if (node === void 0 || node.hasRTTupdates === false) continue;
            if (node.worldAlpha === 0 || node.renderState === CoreNodeRenderState.OutOfBounds) continue;
            if (node.texture === null || node.texture.state !== "loaded") continue;
            this.activeRttNode = node;
            const ctxTexture = node.texture.ctxTexture;
            this.renderToTextureActive = true;
            glw.bindFramebuffer(ctxTexture.framebuffer);
            glw.viewport(0, 0, ctxTexture.w, ctxTexture.h);
            glw.clearColor(0, 0, 0, 0);
            glw.clear();
            this.curBufferIdx = 0;
            this.curRenderOp = null;
            for (let i = 0; i < node.children.length; i++) {
                const child = node.children[i];
                if (child === void 0) continue;
                this.stage.addSubtreeQuads(child);
                child.hasRTTupdates = false;
            }
            this.renderRTT();
            this.sdfBufferPlain.changed = true;
            this.sdfBufferRich.changed = true;
            this.renderOps.length = 0;
            node.hasRTTupdates = false;
        }
        this.curBufferIdx = savedBufferIdx;
        this.curRenderOp = null;
        this.needsFullUpload = true;
        this.lastUploadedBufferSize = 0;
        const clearColor = this.clearColor.normalized;
        glw.clearColor(clearColor[0], clearColor[1], clearColor[2], clearColor[3]);
        glw.bindFramebuffer(null);
        glw.viewport(0, 0, this.glw.canvas.width, this.glw.canvas.height);
        this.renderToTextureActive = false;
    }
    renderRTT() {
        const glw = this.glw;
        const buffer = this.quadBufferCollection.getBuffer("a_position") || null;
        const arr = new Float32Array(this.rttQuadBuffer, 0, this.curBufferIdx);
        glw.arrayBufferData(buffer, arr, glw.STATIC_DRAW);
        this.uploadSdfBuffer();
        for (let i = 0, length = this.renderOps.length; i < length; i++) {
            const op = this.renderOps[i];
            if (op instanceof StencilClipRenderOp) if (op.kind === 0) this.drawStencilBegin(op); else this.drawStencilEnd(op); else op.draw(this);
        }
    }
    updateViewport() {
        this.glw.viewport(0, 0, this.glw.canvas.width, this.glw.canvas.height);
    }
    removeRTTNode(node) {
        const index = this.rttNodes.indexOf(node);
        if (index === -1) return;
        this.rttNodes.splice(index, 1);
    }
    invalidateQuadBuffer() {
        const nodes = this.stage.renderListNodes;
        for (let i = 0; i < this.stage.renderListLen; i++) {
            const node = nodes[i];
            node.quadBufferIndex = -1;
            node.isQuadDirty = true;
        }
        this.curBufferIdx = 0;
        this.lastUploadedBufferSize = 0;
        this.needsFullUpload = true;
    }
    getBufferInfo() {
        return {
            totalAvailable: this.stage.options.quadBufferSize,
            totalUsed: this.quadBufferUsage
        };
    }
    getDefaultShaderNode() {
        if (this.defaultShaderNode !== null) return this.defaultShaderNode;
        this.stage.shManager.registerShaderType("default", Default);
        this.defaultShaderNode = this.stage.shManager.createShader("default");
        return this.defaultShaderNode;
    }
    getTextureCoords(node) {
        const texture = node.texture;
        if (texture === null) return;
        const ctxTexture = texture.parentTexture !== void 0 ? texture.parentTexture.ctxTexture : texture.ctxTexture;
        if (ctxTexture === void 0) return;
        const textureOptions = node.props.textureOptions;
        if (texture.type !== TextureType.subTexture && textureOptions === void 0) return ctxTexture.txCoords;
        let {x1: x1, x2: x2, y1: y1, y2: y2} = ctxTexture.txCoords;
        if (texture.type === TextureType.subTexture) {
            const {w: parentW, h: parentH} = texture.parentTexture.dimensions;
            const {x: x, y: y, w: w, h: h} = texture.props;
            x1 = x / parentW;
            y1 = y / parentH;
            x2 = x1 + w / parentW;
            y2 = y1 + h / parentH;
        }
        const resizeMode = textureOptions.resizeMode;
        if (resizeMode !== void 0 && resizeMode.type === "cover" && texture.dimensions !== null) {
            const dimensions = texture.dimensions;
            const w = node.props.w;
            const h = node.props.h;
            const scaleX = w / dimensions.w;
            const scaleY = h / dimensions.h;
            const scale = Math.max(scaleX, scaleY);
            const precision = 1 / scale;
            if (scaleX < scale) {
                var _resizeMode$clipX;
                const desiredSize = precision * node.props.w;
                x1 = (1 - desiredSize / dimensions.w) * ((_resizeMode$clipX = resizeMode.clipX) !== null && _resizeMode$clipX !== void 0 ? _resizeMode$clipX : .5);
                x2 = x1 + desiredSize / dimensions.w;
            }
            if (scaleY < scale) {
                var _resizeMode$clipY;
                const desiredSize = precision * node.props.h;
                y1 = (1 - desiredSize / dimensions.h) * ((_resizeMode$clipY = resizeMode.clipY) !== null && _resizeMode$clipY !== void 0 ? _resizeMode$clipY : .5);
                y2 = y1 + desiredSize / dimensions.h;
            }
        }
        if (textureOptions.flipX === true) [x1, x2] = [ x2, x1 ];
        if (textureOptions.flipY === true) [y1, y2] = [ y2, y1 ];
        return {
            x1: x1,
            y1: y1,
            x2: x2,
            y2: y2
        };
    }
    updateClearColor(color) {
        if (this.clearColor.raw === color) return;
        const glw = this.glw;
        const normalizedColor = getNormalizedRgbaComponents(color);
        glw.clearColor(normalizedColor[0], normalizedColor[1], normalizedColor[2], normalizedColor[3]);
        this.clearColor = {
            raw: color,
            normalized: normalizedColor
        };
    }
    getStencilClipProgram() {
        if (this.stencilClipProgram !== null) return this.stencilClipProgram;
        this.stencilClipProgram = new WebGlShaderProgram(this, StencilClip, {});
        return this.stencilClipProgram;
    }
    allocStencilOp() {
        const pool = this.stencilOpPool;
        const idx = this.stencilOpPoolIdx;
        if (idx >= pool.length) pool.push(new StencilClipRenderOp);
        this.stencilOpPoolIdx = idx + 1;
        return pool[idx];
    }
    beginRoundedClip(node) {
        const cr = node.clippingRect;
        const pixelRatio = node.parentHasRenderTexture ? 1 : this.stage.pixelRatio;
        const canvas = this.stage.platform.canvas;
        this.stencilDepth++;
        const op = this.allocStencilOp();
        op.kind = 0;
        op.x = Math.round(cr.x * pixelRatio);
        op.w = Math.round(cr.w * pixelRatio);
        op.h = Math.round(cr.h * pixelRatio);
        op.y = Math.round(canvas.height - op.h - cr.y * pixelRatio);
        op.clipRadius = cr.clipRadius * pixelRatio;
        op.pixelRatio = pixelRatio;
        op.canvasHeight = canvas.height;
        op.parentHasRenderTexture = node.parentHasRenderTexture;
        op.parentFramebufferH = node.parentHasRenderTexture && node.parentFramebufferDimensions !== null ? node.parentFramebufferDimensions.h : 0;
        op.stencilRef = this.stencilDepth;
        this.curRenderOp = null;
        this.renderOps.push(op);
    }
    endRoundedClip(_node) {
        const op = this.allocStencilOp();
        op.kind = 1;
        op.stencilRef = this.stencilDepth;
        this.stencilDepth--;
        this.renderOps.push(op);
    }
    drawStencilBegin(op) {
        const glw = this.glw;
        this.getStencilClipProgram().bindForStencil(this.stencilQuadBufferCollection);
        if (op.parentHasRenderTexture === true && op.parentFramebufferH !== 0) {
            glw.uniform1f("u_pixelRatio", 1);
            glw.uniform2f("u_resolution", op.w, op.parentFramebufferH);
        } else {
            glw.uniform1f("u_pixelRatio", op.pixelRatio);
            glw.uniform2f("u_resolution", glw.canvas.width, glw.canvas.height);
        }
        glw.uniform2f("u_dimensions", op.w / op.pixelRatio, op.h / op.pixelRatio);
        glw.uniform1f("u_radius", op.clipRadius / op.pixelRatio);
        glw.setScissorTest(true);
        glw.scissor(op.x, op.y, op.w, op.h);
        glw.setStencilTest(true);
        glw.stencilMask(255);
        glw.stencilFunc(glw.ALWAYS, op.stencilRef, 255);
        glw.stencilOp(glw.KEEP, glw.KEEP, glw.REPLACE);
        glw.colorMask(false, false, false, false);
        const f = this._stencilScratchF;
        const u = this._stencilScratchU;
        const x1 = op.x / op.pixelRatio;
        const y1 = op.canvasHeight / op.pixelRatio - op.y / op.pixelRatio - op.h / op.pixelRatio;
        const x2 = x1 + op.w / op.pixelRatio;
        const y2 = y1 + op.h / op.pixelRatio;
        const white = 4294967295;
        f[0] = x1;
        f[1] = y1;
        f[2] = 0;
        f[3] = 0;
        u[4] = white;
        f[5] = x2;
        f[6] = y1;
        f[7] = 1;
        f[8] = 0;
        u[9] = white;
        f[10] = x1;
        f[11] = y2;
        f[12] = 0;
        f[13] = 1;
        u[14] = white;
        f[15] = x2;
        f[16] = y2;
        f[17] = 1;
        f[18] = 1;
        u[19] = white;
        const stencilBuf = this.stencilQuadBufferCollection.getBuffer("a_position") || null;
        glw.arrayBufferData(stencilBuf, this._stencilScratchF, glw.DYNAMIC_DRAW);
        glw.drawElements(glw.TRIANGLES, 6, glw.UNSIGNED_SHORT, 0);
        glw.colorMask(true, true, true, true);
        glw.stencilMask(0);
        glw.stencilFunc(glw.EQUAL, op.stencilRef, 255);
        glw.stencilOp(glw.KEEP, glw.KEEP, glw.KEEP);
        this.stage.shManager.releaseShader();
    }
    drawStencilEnd(op) {
        const glw = this.glw;
        if (op.stencilRef <= 1) {
            glw.setStencilTest(false);
            glw.stencilMask(255);
        } else {
            glw.stencilMask(255);
            glw.stencilFunc(glw.EQUAL, op.stencilRef - 1, 255);
            glw.stencilOp(glw.KEEP, glw.KEEP, glw.KEEP);
            glw.stencilMask(0);
        }
    }
    destroy() {
        const loseCtx = this.glw.getExtension("WEBGL_lose_context");
        loseCtx == null || loseCtx.loseContext();
    }
    deleteBuffer(buffer) {
        this.glw.deleteBuffer(buffer);
    }
};

var sharedVertexAttributes = `\n  // Pre-transformed world-pixel position\n  attribute vec2 a_position;\n  attribute vec2 a_textureCoords;\n  // Per-vertex color (RGBA, unsigned byte, normalized). Carries the node tint\n  // (with world alpha) merged with any span color override.\n  attribute vec4 a_color;\n  // Per-vertex SDF distance range (font-specific)\n  attribute float a_distRange;\n\n  uniform vec2 u_resolution;\n  uniform float u_pixelRatio;\n\n  varying vec2 v_texcoord;\n  varying float v_scaledDistRange;\n  varying vec4 v_color;\n`;

var sharedVertexMain = `\n  void main() {\n    // a_position is already in world pixel space (pre-transformed on CPU)\n    vec2 screenSpace = (a_position * u_pixelRatio / u_resolution * 2.0 - 1.0) * vec2(1, -1);\n\n    gl_Position = vec4(screenSpace, 0.0, 1.0);\n    v_texcoord = a_textureCoords;\n    v_scaledDistRange = a_distRange * u_pixelRatio;\n    v_color = a_color;\n  }\n`;

var SdfPlain = {
    vertex: `\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n    ${sharedVertexAttributes}\n    ${sharedVertexMain}\n  `,
    fragment: `\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n    uniform sampler2D u_texture;\n\n    varying vec2 v_texcoord;\n    varying float v_scaledDistRange;\n    varying vec4 v_color;\n\n    float median(float r, float g, float b) {\n        return clamp(b, min(r, g), max(r, g));\n    }\n\n    void main() {\n        vec3 s = texture2D(u_texture, v_texcoord).rgb;\n        float sigDist = v_scaledDistRange * (median(s.r, s.g, s.b) - 0.5);\n        float opacity = clamp(sigDist + 0.5, 0.0, 1.0) * v_color.a;\n\n        // IMPORTANT: We must premultiply the color by the alpha value before returning it.\n        gl_FragColor = vec4(v_color.rgb * opacity, opacity);\n    }\n  `
};

var Sdf = {
    vertex: `\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n    ${sharedVertexAttributes}\n    // Per-vertex style flag: 0.0 = normal, 1.0 = bold.\n    attribute float a_style;\n\n    varying float v_style;\n\n    void main() {\n      vec2 screenSpace = (a_position * u_pixelRatio / u_resolution * 2.0 - 1.0) * vec2(1, -1);\n\n      gl_Position = vec4(screenSpace, 0.0, 1.0);\n      v_texcoord = a_textureCoords;\n      v_scaledDistRange = a_distRange * u_pixelRatio;\n      v_color = a_color;\n      v_style = a_style;\n    }\n  `,
    fragment: `\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n    uniform sampler2D u_texture;\n\n    varying vec2 v_texcoord;\n    varying float v_scaledDistRange;\n    varying vec4 v_color;\n    varying float v_style;\n\n    float median(float r, float g, float b) {\n        return clamp(b, min(r, g), max(r, g));\n    }\n\n    void main() {\n        // Decoration quads use u = -1.0 as a sentinel for solid-fill (no SDF lookup).\n        // step(0.5, -u): 1.0 when u <= -0.5 — safely catches only the -1.0 sentinel.\n        // Cannot use step(0.0, -u) because that also catches u = 0.0, which is a\n        // valid atlas coordinate for any glyph packed at the left edge of the atlas.\n        float isSolid = step(0.5, -v_texcoord.x);\n\n        // SDF path — runs unconditionally; result is masked out for solid quads via\n        // mix() below. Sampling with u = -1.0 is safe: the atlas uses CLAMP_TO_EDGE\n        // so it returns the leftmost texel column, but the result is zeroed by mix().\n        vec3 s = texture2D(u_texture, v_texcoord).rgb;\n        // Bold shifts the SDF threshold down by 0.05, expanding glyph edges.\n        // v_style: 0.0 = normal, 1.0 = bold.\n        float threshold = 0.5 - v_style * 0.05;\n        float sigDist = v_scaledDistRange * (median(s.r, s.g, s.b) - threshold);\n        // v_color already carries node tint × world alpha × span override.\n        float opacity = clamp(sigDist + threshold, 0.0, 1.0) * v_color.a;\n        vec3 col = v_color.rgb;\n        // IMPORTANT: premultiply before returning.\n        vec4 sdfResult = vec4(col * opacity, opacity);\n\n        // Solid fill path — premultiplied alpha.\n        vec4 fc = v_color;\n        vec4 solidResult = vec4(fc.rgb * fc.a, fc.a);\n\n        gl_FragColor = mix(sdfResult, solidResult, isSolid);\n    }\n  `
};

var CC_LBRACKET = 91;

var CC_SLASH = 47;

var CC_ZERO = 48;

var CC_LC_X = 120;

var CC_UC_X = 88;

var CC_EQUALS = 61;

var TAG_BOLD = 1;

var TAG_ITALIC = 2;

var TAG_UNDERLINE = 3;

var TAG_STRIKETHROUGH = 4;

var TAG_COLOR = 5;

var MAX_SPANS = 64;

var MAX_STACK = 8;

var namedColors = Object.create(null);

namedColors["red"] = 4278190335;

namedColors["green"] = 16711935;

namedColors["blue"] = 65535;

namedColors["white"] = 4294967295;

namedColors["black"] = 255;

namedColors["yellow"] = 4294902015;

namedColors["cyan"] = 16777215;

namedColors["magenta"] = 4278255615;

namedColors["orange"] = 4286578943;

namedColors["purple"] = 2147516671;

namedColors["pink"] = 4285117695;

namedColors["brown"] = 2771004159;

namedColors["gray"] = 2155905279;

namedColors["grey"] = 2155905279;

var RichSpan = class {
    constructor() {
        this.start = 0;
        this.end = 0;
        this.bold = false;
        this.italic = false;
        this.underline = false;
        this.strikethrough = false;
        this.color = 0;
    }
};

var ParseResult = class {
    constructor() {
        this.stripped = "";
        this.spanCount = 0;
        this.spans = void 0;
        this.spans = new Array(MAX_SPANS);
        for (let i = 0; i < MAX_SPANS; i++) this.spans[i] = new RichSpan;
    }
    reset() {
        this.stripped = "";
        this.spanCount = 0;
    }
};

var StyleFrame = class {
    constructor() {
        this.bold = false;
        this.italic = false;
        this.underline = false;
        this.strikethrough = false;
        this.color = 0;
        this.tagType = 0;
    }
    copyFrom(src) {
        this.bold = src.bold;
        this.italic = src.italic;
        this.underline = src.underline;
        this.strikethrough = src.strikethrough;
        this.color = src.color;
        this.tagType = src.tagType;
    }
};

var _stack = new Array(MAX_STACK);

for (let _i = 0; _i < MAX_STACK; _i++) _stack[_i] = new StyleFrame;

var hexDigitVal = code => {
    if (code >= 48 && code <= 57) return code - 48;
    if (code >= 97 && code <= 102) return code - 87;
    if (code >= 65 && code <= 70) return code - 55;
    return -1;
};

var parseColorValue = (text, start, tagEnd) => {
    if (start >= tagEnd) return -1;
    if (text.charCodeAt(start) === CC_ZERO) {
        const secondChar = text.charCodeAt(start + 1);
        if (secondChar === CC_LC_X || secondChar === CC_UC_X) {
            if (tagEnd - start - 2 === 8) {
                let v = 0;
                for (let k = 2; k < 10; k++) {
                    const d = hexDigitVal(text.charCodeAt(start + k));
                    if (d === -1) return -1;
                    v = v * 16 + d;
                }
                return v >>> 0;
            }
        }
    }
    return -1;
};

var identifyTag = (text, pos, tagEnd) => {
    const firstChar = text.charCodeAt(pos);
    const tagLen = tagEnd - pos;
    if (tagLen === 1) {
        if (firstChar === 98) return TAG_BOLD;
        if (firstChar === 105) return TAG_ITALIC;
        if (firstChar === 117) return TAG_UNDERLINE;
        if (firstChar === 115) return TAG_STRIKETHROUGH;
        return 0;
    }
    if (firstChar === 99 && text.charCodeAt(pos + 1) === 111 && text.charCodeAt(pos + 2) === 108 && text.charCodeAt(pos + 3) === 111 && text.charCodeAt(pos + 4) === 114 && (tagLen === 5 || text.charCodeAt(pos + 5) === CC_EQUALS)) return TAG_COLOR;
    return 0;
};

var applyTag = (tagType, isClosing, stackDepth, colorValue) => {
    if (isClosing === true) {
        for (let k = stackDepth; k > 0; k--) if (_stack[k].tagType === tagType) return k - 1;
        return stackDepth;
    }
    if (stackDepth >= MAX_STACK - 1) return stackDepth;
    const next = stackDepth + 1;
    _stack[next].copyFrom(_stack[stackDepth]);
    _stack[next].tagType = tagType;
    if (tagType === TAG_BOLD) _stack[next].bold = true; else if (tagType === TAG_ITALIC) _stack[next].italic = true; else if (tagType === TAG_UNDERLINE) _stack[next].underline = true; else if (tagType === TAG_STRIKETHROUGH) _stack[next].strikethrough = true; else if (tagType === TAG_COLOR) _stack[next].color = colorValue;
    return next;
};

var flushSpan = (spans, spanCount, start, end, style) => {
    if (end <= start) return spanCount;
    if (spanCount >= MAX_SPANS) return spanCount;
    const span = spans[spanCount];
    span.start = start;
    span.end = end;
    span.bold = style.bold;
    span.italic = style.italic;
    span.underline = style.underline;
    span.strikethrough = style.strikethrough;
    span.color = style.color;
    return spanCount + 1;
};

var stylesEqual = (a, b) => a.bold === b.bold && a.italic === b.italic && a.underline === b.underline && a.strikethrough === b.strikethrough && a.color === b.color;

var parseRichText = (text, out) => {
    out.reset();
    const textLen = text.length;
    if (textLen === 0) return;
    const base = _stack[0];
    base.bold = false;
    base.italic = false;
    base.underline = false;
    base.strikethrough = false;
    base.color = 0;
    base.tagType = 0;
    let stackDepth = 0;
    let spanStart = 0;
    let spanCount = 0;
    let stripped = "";
    let runStart = 0;
    let i = 0;
    while (i < textLen) {
        if (text.charCodeAt(i) !== CC_LBRACKET) {
            i++;
            continue;
        }
        const tagEnd = text.indexOf("]", i + 1);
        if (tagEnd === -1) {
            i++;
            continue;
        }
        let pos = i + 1;
        let isClosing = false;
        if (text.charCodeAt(pos) === CC_SLASH) {
            isClosing = true;
            pos++;
        }
        if (pos >= tagEnd) {
            i++;
            continue;
        }
        const tagType = identifyTag(text, pos, tagEnd);
        if (tagType === 0) {
            i++;
            continue;
        }
        let colorValue = 0;
        if (tagType === TAG_COLOR && isClosing === false) {
            colorValue = parseColorValue(text, pos + 6, tagEnd);
            if (colorValue === -1) {
                i++;
                continue;
            }
        }
        stripped += text.substring(runStart, i);
        runStart = tagEnd + 1;
        const prevDepth = stackDepth;
        stackDepth = applyTag(tagType, isClosing, stackDepth, colorValue);
        if (stylesEqual(_stack[prevDepth], _stack[stackDepth]) === false) {
            spanCount = flushSpan(out.spans, spanCount, spanStart, stripped.length, _stack[prevDepth]);
            spanStart = stripped.length;
        }
        i = tagEnd + 1;
    }
    stripped += text.substring(runStart, textLen);
    spanCount = flushSpan(out.spans, spanCount, spanStart, stripped.length, _stack[stackDepth]);
    out.stripped = stripped;
    out.spanCount = spanCount;
};

var ITALIC_SHEAR = Math.tan(14 * Math.PI / 180);

var _PACKED_WHITE = 4294967295;

var _richTextResult$1 = new ParseResult;

var type$2 = "sdf";

var sdfShader = null;

var sdfPlainShader = null;

var init$2 = stage => {
    init$3();
    stage.shManager.registerShaderType("Sdf", Sdf);
    stage.shManager.registerShaderType("SdfPlain", SdfPlain);
    sdfShader = stage.shManager.createShader("Sdf");
    sdfPlainShader = stage.shManager.createShader("SdfPlain");
};

var font$1 = SdfFontHandler_exports;

var renderInfoCache$1 = new Map;

var _packColor = rgba => {
    const r = rgba >>> 24 & 255;
    const g = rgba >>> 16 & 255;
    const b = rgba >>> 8 & 255;
    const a = rgba & 255;
    return (r | g << 8 | b << 16 | a << 24) >>> 0;
};

var renderText$1 = props => {
    const cacheKey = getLayoutCacheKey(props);
    let renderInfo = renderInfoCache$1.get(cacheKey);
    if (renderInfo !== void 0) return renderInfo;
    const layout = generateTextLayout(props, getFontData(props.fontFamily));
    renderInfo = {
        type: type$2,
        layout: layout,
        width: layout.width,
        height: layout.height,
        remainingLines: layout.remainingLines,
        hasRemainingText: layout.hasRemainingText,
        atlasTexture: getAtlas(props.fontFamily).ctxTexture
    };
    renderInfoCache$1.set(cacheKey, renderInfo);
    return renderInfo;
};

var renderQuads$1 = (renderer, layout, _vertexBuffer, renderProps) => {
    const fontFamily = renderProps.fontFamily;
    const atlasTexture = getAtlas(fontFamily);
    if (atlasTexture === null) return;
    const webGlRenderer = renderer;
    const cache = renderProps.sdfCache;
    const ctxTexture = atlasTexture.ctxTexture;
    const isRich = layout.richText === true;
    const sdfBuffer = isRich ? webGlRenderer.sdfBufferRich : webGlRenderer.sdfBufferPlain;
    const shader = isRich ? sdfShader : sdfPlainShader;
    if (cache !== void 0 && cache.vertices !== null) {
        const ct = cache.transform;
        const t = renderProps.globalTransform;
        if (cache.layoutRef === layout && cache.color === renderProps.color && cache.alpha === renderProps.worldAlpha && ct[0] === t[0] && ct[1] === t[1] && ct[2] === t[3] && ct[3] === t[4]) {
            const dx = t[6] - ct[4];
            const dy = t[7] - ct[5];
            if (dx === 0 && dy === 0) {
                const at = sdfBuffer.quadCount;
                if (at !== cache.lastStartQuad || cache.lastWriteDirty === true) sdfBuffer.changed = true;
                cache.lastStartQuad = at;
                cache.lastWriteDirty = false;
                webGlRenderer.addSdfCachedQuads(sdfBuffer, cache.vertices, cache.glyphCount, ctxTexture, renderProps.clippingRect, renderProps.worldAlpha, layout.width, layout.height, renderProps.parentHasRenderTexture, renderProps.framebufferDimensions, shader);
                return;
            }
            cache.lastStartQuad = sdfBuffer.quadCount;
            cache.lastWriteDirty = true;
            webGlRenderer.addSdfTranslatedQuads(sdfBuffer, cache.vertices, cache.glyphCount, dx, dy, ctxTexture, renderProps.clippingRect, renderProps.worldAlpha, layout.width, layout.height, renderProps.parentHasRenderTexture, renderProps.framebufferDimensions, shader);
            return;
        }
    }
    const startIdx = sdfBuffer.idx;
    const startQuad = sdfBuffer.quadCount;
    webGlRenderer.addSdfQuads(sdfBuffer, layout.glyphs, layout.glyphCount, layout.fontScale, renderProps.globalTransform, renderProps.color, renderProps.worldAlpha, layout.distanceRange, ctxTexture, renderProps.clippingRect, layout.width, layout.height, renderProps.parentHasRenderTexture, renderProps.framebufferDimensions, shader);
    if (cache !== void 0) {
        const endIdx = sdfBuffer.idx;
        const len = endIdx - startIdx;
        if (len > 0) {
            if (cache.vertices === null || cache.vertices.length !== len) cache.vertices = new Float32Array(len);
            cache.vertices.set(sdfBuffer.fBuffer.subarray(startIdx, endIdx));
            cache.glyphCount = layout.glyphCount;
            cache.color = renderProps.color;
            cache.alpha = renderProps.worldAlpha;
            cache.layoutRef = layout;
            cache.lastStartQuad = startQuad;
            cache.lastWriteDirty = false;
            const t = renderProps.globalTransform;
            const ct = cache.transform;
            ct[0] = t[0];
            ct[1] = t[1];
            ct[2] = t[3];
            ct[3] = t[4];
            ct[4] = t[6];
            ct[5] = t[7];
        }
    }
};

var _writeDecoRecord = (glyphs, u32Glyphs, di, x1, x2, y1, y2, color, shear1, shear2) => {
    glyphs[di] = x1;
    glyphs[di + 1] = y1;
    glyphs[di + 2] = x2 - x1;
    glyphs[di + 3] = y2 - y1;
    glyphs[di + 4] = -1;
    glyphs[di + 5] = 0;
    glyphs[di + 6] = 0;
    glyphs[di + 7] = 0;
    glyphs[di + 8] = shear1;
    glyphs[di + 9] = shear2;
    u32Glyphs[di + 10] = color;
    glyphs[di + 11] = 0;
    return di + 12;
};

var generateTextLayout = (props, fontCache) => {
    const fontSize = props.fontSize;
    const fontFamily = props.fontFamily;
    const lineHeight = props.lineHeight;
    const metrics = getFontMetrics$1(fontFamily, fontSize);
    const fontData = fontCache.data;
    const commonFontData = fontData.common;
    const designFontSize = fontData.info.size;
    const atlasWidth = commonFontData.scaleW;
    const atlasHeight = commonFontData.scaleH;
    const fontScale = fontSize / designFontSize;
    const letterSpacing = props.letterSpacing / fontScale;
    const maxWidth = props.maxWidth / fontScale;
    const maxHeight = props.maxHeight;
    const richText = props.richText === true;
    let layoutText = props.text;
    if (richText === true) {
        parseRichText(props.text, _richTextResult$1);
        layoutText = _richTextResult$1.stripped;
    }
    const [lines, remainingLines, hasRemainingText, _bareLineHeight, lineHeightPx, effectiveWidth, effectiveHeight] = mapTextLayout(measureText$1, metrics, layoutText, props.textAlign, fontFamily, lineHeight, props.overflowSuffix, props.wordBreak, letterSpacing, props.maxLines, maxWidth, maxHeight);
    const base = commonFontData.base;
    const decoThickness = Math.max(1, Math.round(fontSize / 20)) / fontScale;
    const decoUnderlineOffset = base + Math.max(1 / fontScale, Math.round(fontSize * .1) / fontScale);
    const decoStrikeOffset = Math.round(base * .75);
    const lineAmount = lines.length;
    if (richText === false) {
        let glyphCount = 0;
        for (let i = 0; i < lineAmount; i++) {
            const textLine = lines[i][0];
            for (const char of textLine) {
                if (hasZeroWidthSpace(char) === true) continue;
                const codepoint = char.codePointAt(0);
                if (codepoint === void 0) continue;
                if (getGlyph(fontFamily, codepoint) === null) continue;
                glyphCount++;
            }
        }
        const glyphs = new Float32Array(glyphCount * 8);
        let go = 0;
        let currentX = 0;
        let currentY = 0;
        for (let i = 0; i < lineAmount; i++) {
            const line = lines[i];
            const textLine = line[0];
            let prevGlyphId = 0;
            currentX = line[3];
            currentY = line[4] / fontScale;
            for (const char of textLine) {
                if (hasZeroWidthSpace(char) === true) continue;
                const codepoint = char.codePointAt(0);
                if (codepoint === void 0) continue;
                const glyph = getGlyph(fontFamily, codepoint);
                if (glyph === null) continue;
                if (prevGlyphId !== 0) currentX += getKerning(fontFamily, prevGlyphId, glyph.id);
                const x1 = currentX + glyph.xoffset;
                const y1 = currentY + glyph.yoffset;
                const u1 = glyph.x / atlasWidth;
                const v1 = glyph.y / atlasHeight;
                glyphs[go] = x1;
                glyphs[go + 1] = y1;
                glyphs[go + 2] = glyph.width;
                glyphs[go + 3] = glyph.height;
                glyphs[go + 4] = u1;
                glyphs[go + 5] = v1;
                glyphs[go + 6] = glyph.width / atlasWidth;
                glyphs[go + 7] = glyph.height / atlasHeight;
                go += 8;
                currentX += glyph.xadvance + letterSpacing;
                prevGlyphId = glyph.id;
            }
        }
        return {
            glyphs: glyphs,
            glyphCount: glyphCount,
            totalQuadCount: glyphCount,
            richText: false,
            distanceRange: fontScale * fontData.distanceField.distanceRange,
            width: effectiveWidth * fontScale,
            height: effectiveHeight,
            fontScale: fontScale,
            lineHeight: lineHeightPx,
            fontFamily: fontFamily,
            remainingLines: remainingLines,
            hasRemainingText: hasRemainingText
        };
    }
    let glyphCount = 0;
    let decoQuadCount = 0;
    let strippedPos = 0;
    let curSpanIdx = 0;
    for (let i = 0; i < lineAmount; i++) {
        const textLine = lines[i][0];
        for (const char of textLine) {
            if (hasZeroWidthSpace(char) === true) {
                strippedPos++;
                continue;
            }
            const codepoint = char.codePointAt(0);
            if (codepoint === void 0) {
                strippedPos++;
                continue;
            }
            if (getGlyph(fontFamily, codepoint) === null) {
                strippedPos++;
                continue;
            }
            glyphCount++;
            while (curSpanIdx < _richTextResult$1.spanCount - 1 && strippedPos >= _richTextResult$1.spans[curSpanIdx].end) curSpanIdx++;
            const span = _richTextResult$1.spans[curSpanIdx];
            if (span.underline === true) decoQuadCount++;
            if (span.strikethrough === true) decoQuadCount++;
            strippedPos++;
        }
    }
    const totalQuadCount = glyphCount + decoQuadCount;
    const glyphs = new Float32Array(totalQuadCount * 12);
    const u32Glyphs = new Uint32Array(glyphs.buffer);
    let gi = 0;
    let di = glyphCount * 12;
    strippedPos = 0;
    curSpanIdx = 0;
    let currentX = 0;
    let currentY = 0;
    for (let i = 0; i < lineAmount; i++) {
        const line = lines[i];
        const textLine = line[0];
        let prevGlyphId = 0;
        currentX = line[3];
        currentY = line[4] / fontScale;
        const baseline = currentY + base;
        for (const char of textLine) {
            if (hasZeroWidthSpace(char) === true) {
                strippedPos++;
                continue;
            }
            const codepoint = char.codePointAt(0);
            if (codepoint === void 0) {
                strippedPos++;
                continue;
            }
            const glyph = getGlyph(fontFamily, codepoint);
            if (glyph === null) {
                strippedPos++;
                continue;
            }
            let packedColor = _PACKED_WHITE;
            let spanUnderline = false;
            let spanStrikethrough = false;
            let spanBold = false;
            let spanItalic = false;
            while (curSpanIdx < _richTextResult$1.spanCount - 1 && strippedPos >= _richTextResult$1.spans[curSpanIdx].end) curSpanIdx++;
            const span = _richTextResult$1.spans[curSpanIdx];
            packedColor = span.color !== 0 ? _packColor(span.color) : _PACKED_WHITE;
            spanUnderline = span.underline;
            spanStrikethrough = span.strikethrough;
            spanBold = span.bold;
            spanItalic = span.italic;
            if (prevGlyphId !== 0) currentX += getKerning(fontFamily, prevGlyphId, glyph.id);
            const x1 = currentX + glyph.xoffset;
            const y1 = currentY + glyph.yoffset;
            const y2 = y1 + glyph.height;
            const u1 = glyph.x / atlasWidth;
            const v1 = glyph.y / atlasHeight;
            const decoX1 = currentX;
            const advance = glyph.xadvance + letterSpacing;
            const shearTop = spanItalic ? (baseline - y1) * ITALIC_SHEAR : 0;
            const shearBot = spanItalic ? (baseline - y2) * ITALIC_SHEAR : 0;
            const style = spanBold ? 1 : 0;
            glyphs[gi] = x1;
            glyphs[gi + 1] = y1;
            glyphs[gi + 2] = glyph.width;
            glyphs[gi + 3] = glyph.height;
            glyphs[gi + 4] = u1;
            glyphs[gi + 5] = v1;
            glyphs[gi + 6] = glyph.width / atlasWidth;
            glyphs[gi + 7] = glyph.height / atlasHeight;
            glyphs[gi + 8] = shearTop;
            glyphs[gi + 9] = shearBot;
            u32Glyphs[gi + 10] = packedColor;
            glyphs[gi + 11] = style;
            gi += 12;
            currentX += advance;
            prevGlyphId = glyph.id;
            if (spanUnderline === true) {
                const dy1 = currentY + decoUnderlineOffset;
                const dy2 = dy1 + decoThickness;
                const dShear1 = spanItalic ? (baseline - dy1) * ITALIC_SHEAR : 0;
                const dShear2 = spanItalic ? (baseline - dy2) * ITALIC_SHEAR : 0;
                di = _writeDecoRecord(glyphs, u32Glyphs, di, decoX1, decoX1 + advance, dy1, dy2, packedColor, dShear1, dShear2);
            }
            if (spanStrikethrough === true) {
                const dy1 = currentY + decoStrikeOffset;
                const dy2 = dy1 + decoThickness;
                const dShear1 = spanItalic ? (baseline - dy1) * ITALIC_SHEAR : 0;
                const dShear2 = spanItalic ? (baseline - dy2) * ITALIC_SHEAR : 0;
                di = _writeDecoRecord(glyphs, u32Glyphs, di, decoX1, decoX1 + advance, dy1, dy2, packedColor, dShear1, dShear2);
            }
            strippedPos++;
        }
    }
    return {
        glyphs: glyphs,
        glyphCount: totalQuadCount,
        totalQuadCount: totalQuadCount,
        richText: true,
        distanceRange: fontScale * fontData.distanceField.distanceRange,
        width: effectiveWidth * fontScale,
        height: effectiveHeight,
        fontScale: fontScale,
        lineHeight: lineHeightPx,
        fontFamily: fontFamily,
        remainingLines: remainingLines,
        hasRemainingText: hasRemainingText
    };
};

var clearCache$1 = () => {
    renderInfoCache$1.clear();
};

var SdfTextRenderer = {
    type: type$2,
    font: font$1,
    renderText: renderText$1,
    renderQuads: renderQuads$1,
    init: init$2,
    clearCache: clearCache$1
};

var CanvasFontHandler_exports = __exportAll({
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
});

var fontFamilies = {};

var fontLoadPromises = new Map;

var normalizedMetrics = new Map;

var nodesWaitingForFont = Object.create(null);

var fontCache = new Map;

var initialized = false;

var measureContext$1;

var canRenderFont = () => true;

var processFontData = (fontFamily, fontFace, metrics) => {
    metrics = metrics || defaultFontMetrics;
    fontCache.set(fontFamily, {
        fontFamily: fontFamily,
        fontFace: fontFace,
        metrics: metrics
    });
};

var loadFont = async (stage, options) => {
    const {fontFamily: fontFamily, fontUrl: fontUrl, metrics: metrics} = options;
    if (fontCache.has(fontFamily) === true) return;
    const existingPromise = fontLoadPromises.get(fontFamily);
    if (existingPromise !== void 0) return existingPromise;
    const nwff = nodesWaitingForFont[fontFamily] = [];
    const loadPromise = stage.platform.loadFontFace(fontFamily, fontUrl).then(loadedFont => {
        processFontData(fontFamily, loadedFont !== null && loadedFont !== void 0 ? loadedFont : void 0, metrics);
        fontLoadPromises.delete(fontFamily);
        for (let key in nwff) nwff[key].setUpdateType(UpdateType.Local);
        delete nodesWaitingForFont[fontFamily];
    }).catch(error => {
        fontLoadPromises.delete(fontFamily);
        console.error(`Failed to load font: ${fontFamily}`, error);
        throw error;
    });
    fontLoadPromises.set(fontFamily, loadPromise);
    return loadPromise;
};

var getFontFamilies = () => fontFamilies;

var init$1 = (c, mc) => {
    if (initialized === true) return;
    if (c === void 0) throw new Error("Canvas context is not provided for font handler initialization");
    measureContext$1 = mc || c;
    processFontData("sans-serif", void 0, {
        ascender: 800,
        descender: -200,
        lineGap: 200,
        unitsPerEm: 1e3
    });
    initialized = true;
};

var type$1 = "canvas";

var isFontLoaded = fontFamily => fontCache.has(fontFamily);

var waitingForFont = (fontFamily, node) => {
    if (nodesWaitingForFont[fontFamily] === void 0) return;
    nodesWaitingForFont[fontFamily][node.id] = node;
};

var stopWaitingForFont = (fontFamily, node) => {
    if (nodesWaitingForFont[fontFamily] === void 0) return;
    delete nodesWaitingForFont[fontFamily][node.id];
};

var getFontMetrics = (fontFamily, fontSize) => {
    const out = normalizedMetrics.get(fontFamily + fontSize);
    if (out !== void 0) return out;
    let metrics = fontCache.get(fontFamily).metrics;
    if (metrics === void 0) metrics = calculateFontMetrics(fontFamily);
    return processFontMetrics(fontFamily, fontSize, metrics);
};

var processFontMetrics = (fontFamily, fontSize, metrics) => {
    const label = fontFamily + fontSize;
    const normalized = normalizeFontMetrics(metrics, fontSize);
    normalizedMetrics.set(label, normalized);
    return normalized;
};

var measureText = (text, _fontFamily, letterSpacing) => {
    if (letterSpacing === 0) return measureContext$1.measureText(text).width;
    if (hasZeroWidthSpace(text) === false) return measureContext$1.measureText(text).width + letterSpacing * text.length;
    return text.split("").reduce((acc, char) => {
        if (hasZeroWidthSpace(char) === true) return acc;
        return acc + measureContext$1.measureText(char).width + letterSpacing;
    }, 0);
};

function calculateFontMetrics(fontFamily) {
    var _ref, _metrics$fontBounding, _ref2, _metrics$fontBounding2, _metrics$emHeightAsce, _metrics$emHeightDesc, _metrics$emHeightAsce2, _metrics$emHeightDesc2;
    const metrics = measureContext$1.measureText("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz");
    console.warn(`Font metrics not provided for Canvas Web font ${fontFamily}. Using fallback values. It is HIGHLY recommended you use the latest version of the Lightning 3 \`msdf-generator\` tool to extract the default metrics for the font and provide them in the Canvas Web font definition.`);
    const ascender = (_ref = (_metrics$fontBounding = metrics.fontBoundingBoxAscent) !== null && _metrics$fontBounding !== void 0 ? _metrics$fontBounding : metrics.actualBoundingBoxAscent) !== null && _ref !== void 0 ? _ref : 0;
    const descender = (_ref2 = (_metrics$fontBounding2 = metrics.fontBoundingBoxDescent) !== null && _metrics$fontBounding2 !== void 0 ? _metrics$fontBounding2 : metrics.actualBoundingBoxDescent) !== null && _ref2 !== void 0 ? _ref2 : 0;
    return {
        ascender: ascender,
        descender: -descender,
        lineGap: ((_metrics$emHeightAsce = metrics.emHeightAscent) !== null && _metrics$emHeightAsce !== void 0 ? _metrics$emHeightAsce : 0) + ((_metrics$emHeightDesc = metrics.emHeightDescent) !== null && _metrics$emHeightDesc !== void 0 ? _metrics$emHeightDesc : 0) - (ascender + descender),
        unitsPerEm: ((_metrics$emHeightAsce2 = metrics.emHeightAscent) !== null && _metrics$emHeightAsce2 !== void 0 ? _metrics$emHeightAsce2 : 0) + ((_metrics$emHeightDesc2 = metrics.emHeightDescent) !== null && _metrics$emHeightDesc2 !== void 0 ? _metrics$emHeightDesc2 : 0)
    };
}

var WHITE = {
    isWhite: true,
    a: 1,
    r: 255,
    g: 255,
    b: 255
};

function parseColor(abgr) {
    if (abgr === 4294967295) return WHITE;
    const a = (abgr >>> 24 & 255) / 255;
    const b = abgr >>> 16 & 255;
    const g = abgr >>> 8 & 255;
    return {
        isWhite: false,
        a: a,
        r: abgr & 255,
        g: g,
        b: b
    };
}

function parseToAbgrString(abgr) {
    const a = (abgr >>> 24 & 255) / 255;
    const b = abgr >>> 16 & 255;
    const g = abgr >>> 8 & 255;
    return `rgba(${abgr & 255},${g},${b},${a})`;
}

function parseToRgbaString(rgba) {
    return `rgba(${rgba >>> 24 & 255},${rgba >>> 16 & 255},${rgba >>> 8 & 255},${(rgba & 255) / 255})`;
}

function formatRgba({a: a, r: r, g: g, b: b}) {
    return `rgba(${r},${g},${b},${a})`;
}

var parsedArgbColors = new Map;

var parsedRgbaColors = new Map;

function normalizeCanvasColor(color, isRGBA = false) {
    let targetCache = isRGBA === true ? parsedRgbaColors : parsedArgbColors;
    let out = targetCache.get(color);
    if (out !== void 0) return out;
    if (isRGBA === true) out = parseToRgbaString(color); else out = parseToAbgrString(color);
    targetCache.set(color, out);
    return out;
}

var type = "canvas";

var font = CanvasFontHandler_exports;

var stage = null;

var canvas = null;

var context = null;

var isOffscreen = false;

var measureCanvas = null;

var measureContext = null;

var renderInfoCache = new Map;

var _richTextResult = new ParseResult;

var init = _stage => {
    stage = _stage;
    const dpr = stage.options.devicePhysicalPixelRatio;
    canvas = stage.platform.createOffscreenCanvas();
    if (canvas !== null) {
        isOffscreen = true;
        measureCanvas = stage.platform.createOffscreenCanvas();
    } else {
        isOffscreen = false;
        canvas = stage.platform.createCanvas();
        measureCanvas = stage.platform.createCanvas();
    }
    context = canvas.getContext("2d");
    assertTruthy(context, ".getContext(2d) failed");
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    context.textRendering = "optimizeSpeed";
    assertTruthy(measureCanvas, "measureCanvas is not initialized");
    measureContext = measureCanvas.getContext("2d");
    assertTruthy(measureContext, ".getContext(2d) failed");
    measureContext.setTransform(dpr, 0, 0, dpr, 0, 0);
    measureContext.textRendering = "optimizeSpeed";
    measureCanvas.width = 1;
    measureCanvas.height = 1;
    init$1(context, measureContext);
};

var renderText = props => {
    assertTruthy(canvas, "Canvas is not initialized");
    assertTruthy(context, "Canvas context is not available");
    assertTruthy(measureContext, "Canvas measureContext is not available");
    const cacheKey = getLayoutCacheKey(props);
    let layout = renderInfoCache.get(cacheKey);
    if (layout !== void 0) return layout;
    const {text: text, fontFamily: fontFamily, fontStyle: fontStyle, fontSize: fontSize, textAlign: textAlign, maxLines: maxLines, lineHeight: lineHeight, overflowSuffix: overflowSuffix, maxWidth: maxWidth, maxHeight: maxHeight, wordBreak: wordBreak, richText: richText, color: color} = props;
    let layoutText = text;
    if (richText === true) {
        parseRichText(text, _richTextResult);
        layoutText = _richTextResult.stripped;
    }
    const baseFont = `${fontStyle} ${fontSize}px Unknown, ${fontFamily}`;
    measureContext.font = baseFont;
    measureContext.textBaseline = "hanging";
    const metrics = getFontMetrics(fontFamily, fontSize);
    const letterSpacing = props.letterSpacing || 0;
    const [lines, remainingLines, hasRemainingText, _bareLineHeight, _lineHeightPx, effectiveWidth, effectiveHeight] = mapTextLayout(measureText, metrics, layoutText, textAlign, fontFamily, lineHeight, overflowSuffix, wordBreak, letterSpacing, maxLines, maxWidth, maxHeight);
    const lineAmount = lines.length;
    const canvasW = Math.ceil(effectiveWidth);
    const canvasH = Math.ceil(effectiveHeight);
    let drawCanvas;
    if (isOffscreen) drawCanvas = canvas; else {
        assertTruthy(stage, "Stage is not available");
        drawCanvas = stage.platform.createCanvas();
        context = drawCanvas.getContext("2d");
    }
    drawCanvas.width = canvasW;
    drawCanvas.height = canvasH;
    context.fillStyle = "white";
    context.font = baseFont;
    context.textBaseline = "hanging";
    if (fontSize >= 128) {
        context.globalAlpha = .01;
        context.fillRect(0, 0, .01, .01);
        context.globalAlpha = 1;
    }
    if (richText === true) {
        const spanCount = _richTextResult.spanCount;
        const spans = _richTextResult.spans;
        const nodeColor = normalizeCanvasColor(color, true);
        let strippedPos = 0;
        let curSpanIdx = 0;
        let activeFont = baseFont;
        let activeFillStyle = nodeColor;
        context.fillStyle = activeFillStyle;
        const ascenderPx = metrics.ascender;
        const decoThickness = Math.max(1, Math.round(fontSize / 20));
        const decoUnderlineBase = Math.ceil(ascenderPx) + Math.max(1, Math.round(fontSize * .08));
        const decoStrikeBase = Math.ceil(ascenderPx) - Math.round(ascenderPx * .4);
        for (let i = 0; i < lineAmount; i++) {
            const line = lines[i];
            const textLine = line[0];
            const lineLen = textLine.length;
            let currentX = Math.ceil(line[3]);
            const currentY = Math.ceil(line[4]);
            while (curSpanIdx < spanCount - 1 && strippedPos >= spans[curSpanIdx].end) curSpanIdx++;
            let segStartJ = 0;
            let segSpanIdx = curSpanIdx;
            for (let j = 1; j <= lineLen; j++) {
                let nextSpanIdx = segSpanIdx;
                if (j < lineLen) {
                    while (nextSpanIdx < spanCount - 1 && strippedPos + j >= spans[nextSpanIdx].end) nextSpanIdx++;
                    curSpanIdx = nextSpanIdx;
                }
                if (j === lineLen || nextSpanIdx !== segSpanIdx) {
                    const span = spans[segSpanIdx];
                    const spanStyle = span.italic === true ? "italic" : fontStyle;
                    const spanFont = span.bold === true ? `${spanStyle} bold ${fontSize}px Unknown, ${fontFamily}` : `${spanStyle} ${fontSize}px Unknown, ${fontFamily}`;
                    if (spanFont !== activeFont) {
                        context.font = spanFont;
                        activeFont = spanFont;
                    }
                    const spanFillStyle = span.color !== 0 ? normalizeCanvasColor(span.color, true) : nodeColor;
                    if (spanFillStyle !== activeFillStyle) {
                        context.fillStyle = spanFillStyle;
                        activeFillStyle = spanFillStyle;
                    }
                    const segStartX = currentX;
                    if (letterSpacing === 0) {
                        const segment = textLine.substring(segStartJ, j);
                        context.fillText(segment, currentX, currentY);
                        currentX += measureText(segment, fontFamily, 0);
                    } else for (let k = segStartJ; k < j; k++) {
                        const char = textLine.charAt(k);
                        if (hasZeroWidthSpace(char) === false) context.fillText(char, currentX, currentY);
                        currentX += measureText(char, fontFamily, letterSpacing);
                    }
                    if (span.underline === true || span.strikethrough === true) {
                        const segWidth = currentX - segStartX;
                        if (segWidth > 0) {
                            if (span.underline === true) context.fillRect(segStartX, currentY + decoUnderlineBase, segWidth, decoThickness);
                            if (span.strikethrough === true) context.fillRect(segStartX, currentY + decoStrikeBase, segWidth, decoThickness);
                        }
                    }
                    segStartJ = j;
                    segSpanIdx = nextSpanIdx;
                }
            }
            strippedPos += lineLen + (i < lineAmount - 1 ? 1 : 0);
        }
    } else for (let i = 0; i < lineAmount; i++) {
        const line = lines[i];
        const textLine = line[0];
        let currentX = Math.ceil(line[3]);
        const currentY = Math.ceil(line[4]);
        if (letterSpacing === 0) context.fillText(textLine, currentX, currentY); else {
            const textLineLength = textLine.length;
            for (let j = 0; j < textLineLength; j++) {
                const char = textLine.charAt(j);
                if (hasZeroWidthSpace(char) === true) continue;
                context.fillText(char, currentX, currentY);
                currentX += measureText(char, fontFamily, letterSpacing);
            }
        }
    }
    let imageData = null;
    if (drawCanvas.width > 0 && drawCanvas.height > 0) if (isOffscreen) {
        assertTruthy(drawCanvas instanceof OffscreenCanvas, "drawCanvas is not an OffscreenCanvas");
        imageData = drawCanvas.transferToImageBitmap();
    } else {
        assertTruthy(drawCanvas instanceof HTMLCanvasElement, "drawCanvas is not an HTMLCanvasElement");
        imageData = drawCanvas;
    }
    const renderInfo = {
        type: type,
        imageData: imageData,
        width: effectiveWidth,
        height: effectiveHeight,
        remainingLines: remainingLines,
        hasRemainingText: hasRemainingText
    };
    renderInfoCache.set(cacheKey, renderInfo);
    return renderInfo;
};

var clearCache = () => {
    renderInfoCache.clear();
};

var renderQuads = () => {};

var CanvasTextRenderer = {
    type: type,
    font: font,
    renderText: renderText,
    renderQuads: renderQuads,
    init: init,
    clearCache: clearCache
};

var CanvasTexture = class extends CoreContextTexture {
    constructor(..._args) {
        super(..._args);
        this.image = void 0;
        this.tintCache = void 0;
    }
    async load() {
        const textureData = this.textureSource.textureData;
        assertTruthy(textureData == null ? void 0 : textureData.data, "Texture data is null before load");
        this.textureSource.setState("loading");
        try {
            const size = await this.onLoadRequest(textureData.data);
            if (this.textureSource.state === "freed") {
                this.image = void 0;
                return;
            }
            this.textureSource.setState("loaded", size);
            this.textureSource.freeTextureData();
            this.updateMemSize();
        } catch (err) {
            this.textureSource.setState("failed", err);
            this.textureSource.freeTextureData();
            throw err;
        }
    }
    release() {
        this.image = void 0;
        this.tintCache = void 0;
    }
    free() {
        this.release();
        this.textureSource.setState("freed");
        this.setTextureMemUse(0);
        this.textureSource.freeTextureData();
    }
    updateMemSize() {
        const mult = this.tintCache ? 8 : 4;
        if (this.textureSource.dimensions) this.setTextureMemUse(this.textureSource.dimensions.w * this.textureSource.dimensions.h * mult);
    }
    hasImage() {
        return this.image !== void 0;
    }
    getImage(color) {
        var _this$tintCache;
        const image = this.image;
        if (image === void 0) return null;
        if (color.isWhite) {
            if (this.tintCache) {
                this.tintCache = void 0;
                this.updateMemSize();
            }
            return image;
        }
        const key = formatRgba(color);
        if (((_this$tintCache = this.tintCache) == null ? void 0 : _this$tintCache.key) === key) return this.tintCache.image;
        const tintedImage = this.tintTexture(image, key);
        this.tintCache = {
            key: key,
            image: tintedImage
        };
        this.updateMemSize();
        return tintedImage;
    }
    tintTexture(source, color) {
        const {width: width, height: height} = source;
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (ctx) {
            ctx.fillStyle = color;
            ctx.globalCompositeOperation = "copy";
            ctx.fillRect(0, 0, width, height);
            ctx.globalCompositeOperation = "multiply";
            ctx.drawImage(source, 0, 0, width, height, 0, 0, width, height);
            ctx.globalCompositeOperation = "destination-in";
            ctx.drawImage(source, 0, 0, width, height, 0, 0, width, height);
        }
        return canvas;
    }
    async onLoadRequest(data) {
        if (data instanceof ImageData) {
            const canvas = document.createElement("canvas");
            canvas.width = data.width;
            canvas.height = data.height;
            const ctx = canvas.getContext("2d");
            if (ctx !== null) ctx.putImageData(data, 0, 0);
            this.image = canvas;
            return {
                w: data.width,
                h: data.height
            };
        } else if (typeof ImageBitmap !== "undefined" && data instanceof ImageBitmap || typeof HTMLCanvasElement !== "undefined" && data instanceof HTMLCanvasElement || data instanceof HTMLImageElement) {
            this.image = data;
            return {
                w: data.width,
                h: data.height
            };
        }
        return {
            w: 0,
            h: 0
        };
    }
};

var CanvasShaderNode = class extends CoreShaderNode {
    constructor(shaderKey, config, stage, props) {
        super(shaderKey, config, stage, props);
        this.updater = void 0;
        this.valueKey = "";
        this.computed = {};
        this.applySNR = void 0;
        this.render = void 0;
        this.applySNR = config.saveAndRestore || false;
        this.render = config.render;
        if (config.update !== void 0) {
            this.updater = config.update;
            if (this.props === void 0) {
                this.updater(this.node, this.props);
                return;
            }
            this.update = () => {
                const prevKey = this.valueKey;
                this.valueKey = this.createValueKey();
                if (prevKey === this.valueKey) return;
                if (prevKey.length > 0) stage.shManager.mutateShaderValueUsage(prevKey, -1);
                const computed = stage.shManager.getShaderValues(this.valueKey);
                if (computed !== void 0) this.computed = computed;
                this.computed = {};
                this.updater(this.node);
                stage.shManager.setShaderValues(this.valueKey, this.computed);
            };
        }
    }
    toColorString(rgba) {
        return normalizeCanvasColor(rgba, true);
    }
};

var CanvasRenderer = class extends CoreRenderer {
    constructor(stage) {
        super(stage);
        this.context = void 0;
        this.canvas = void 0;
        this.pixelRatio = void 0;
        this.clearColor = void 0;
        this.renderToTextureActive = false;
        this.activeRttNode = null;
        this.mode = "canvas";
        const canvas = stage.platform.canvas;
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        this.pixelRatio = stage.pixelRatio;
        this.clearColor = normalizeCanvasColor(stage.clearColor);
    }
    reset() {
        this.canvas.width = this.canvas.width;
        const ctx = this.context;
        if (this.clearColor) {
            ctx.fillStyle = this.clearColor;
            ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        }
        ctx.scale(this.pixelRatio, this.pixelRatio);
    }
    render() {}
    addQuad(node) {
        const ctx = this.context;
        const {tx: tx, ty: ty, ta: ta, tb: tb, tc: tc, td: td} = node.globalTransform;
        const clippingRect = node.clippingRect;
        let texture = node.props.texture || this.stage.defaultTexture;
        if (texture !== null) {
            const textureType = texture.type;
            if (textureType !== TextureType.image && textureType !== TextureType.subTexture && textureType !== TextureType.color && textureType !== TextureType.noise) return;
        }
        const hasTransform = ta !== 1;
        const clippingValid = clippingRect.valid === true;
        if (clippingValid === true && clippingRect.w === 0 && clippingRect.h === 0) return;
        const hasClipping = clippingValid === true && clippingRect.w !== 0 && clippingRect.h !== 0;
        const shader = node.props.shader;
        const hasShader = shader !== null;
        let saveAndRestore = hasTransform === true || hasClipping === true;
        if (hasShader === true) saveAndRestore = saveAndRestore || shader.applySNR;
        if (saveAndRestore) ctx.save();
        if (hasClipping === true) {
            const path = new Path2D;
            const {x: x, y: y, w: w, h: h, clipRadius: clipRadius} = clippingRect;
            if (clipRadius > 0) {
                const r = Math.min(clipRadius, w / 2, h / 2);
                path.moveTo(x + r, y);
                path.arcTo(x + w, y, x + w, y + h, r);
                path.arcTo(x + w, y + h, x, y + h, r);
                path.arcTo(x, y + h, x, y, r);
                path.arcTo(x, y, x + w, y, r);
                path.closePath();
            } else path.rect(x, y, w, h);
            ctx.clip(path);
        }
        if (hasTransform === true) {
            const scale = this.pixelRatio;
            ctx.setTransform(ta, tc, tb, td, tx * scale, ty * scale);
            ctx.scale(scale, scale);
            ctx.translate(-tx, -ty);
        }
        if (hasShader === true) {
            let renderContext = () => {
                this.renderContext(node, texture);
            };
            shader.render(ctx, node, renderContext);
            renderContext = null;
        } else this.renderContext(node, texture);
        if (saveAndRestore) ctx.restore();
    }
    renderContext(node, texture) {
        const color = node.premultipliedColorTl;
        const textureType = texture.type;
        const tx = node.globalTransform.tx;
        const ty = node.globalTransform.ty;
        const width = node.props.w;
        const height = node.props.h;
        if (textureType !== TextureType.color) {
            var _tintColor$a2;
            const tintColor = parseColor(color);
            if (textureType !== TextureType.subTexture) {
                var _tintColor$a;
                const image = texture.ctxTexture.getImage(tintColor);
                if (image === null) return;
                this.context.globalAlpha = (_tintColor$a = tintColor.a) !== null && _tintColor$a !== void 0 ? _tintColor$a : node.worldAlpha;
                this.context.drawImage(image, tx, ty, width, height);
                this.context.globalAlpha = 1;
                return;
            }
            const image = texture.parentTexture.ctxTexture.getImage(tintColor);
            if (image === null) return;
            const props = texture.props;
            this.context.globalAlpha = (_tintColor$a2 = tintColor.a) !== null && _tintColor$a2 !== void 0 ? _tintColor$a2 : node.worldAlpha;
            this.context.drawImage(image, props.x, props.y, props.w, props.h, tx, ty, width, height);
            this.context.globalAlpha = 1;
            return;
        }
        if ((node.premultipliedColorTl !== node.premultipliedColorTr || node.premultipliedColorTl !== node.premultipliedColorBr) === true) {
            let endX = tx;
            let endY = ty;
            let endColor;
            if (node.premultipliedColorTl === node.premultipliedColorTr) {
                endX = tx;
                endY = ty + height;
                endColor = node.premultipliedColorBr;
            } else {
                endX = tx + width;
                endY = ty;
                endColor = node.premultipliedColorTr;
            }
            const gradient = this.context.createLinearGradient(tx, ty, endX, endY);
            gradient.addColorStop(0, normalizeCanvasColor(color));
            gradient.addColorStop(1, normalizeCanvasColor(endColor));
            this.context.fillStyle = gradient;
            this.context.fillRect(tx, ty, width, height);
        } else {
            this.context.fillStyle = normalizeCanvasColor(color);
            this.context.fillRect(tx, ty, width, height);
        }
    }
    createShaderNode(shaderKey, shaderType, props) {
        return new CanvasShaderNode(shaderKey, shaderType, this.stage, props);
    }
    createShaderProgram(_shaderConfig) {
        return null;
    }
    supportsShaderType(shaderType) {
        return shaderType.render !== void 0;
    }
    createCtxTexture(textureSource) {
        return new CanvasTexture(this.stage.txMemManager, textureSource);
    }
    renderRTTNodes() {}
    removeRTTNode(_node) {}
    renderToTexture(_node) {}
    getBufferInfo() {
        return null;
    }
    getQuadCount() {
        return null;
    }
    updateClearColor(color) {
        this.clearColor = normalizeCanvasColor(color);
    }
    updateViewport() {}
    getDefaultShaderNode() {
        return null;
    }
    destroy() {
        this.canvas.width = 0;
        this.canvas.height = 0;
    }
};

var doOnce = false;

var useAnnouncer = options => {
    if (doOnce) return Announcer;
    doOnce = true;
    Announcer.setupTimers(options);
    createEffect(on(focusPath, Announcer.onFocusChange, {
        defer: true
    }));
    return Announcer;
};

var isClient = !false;

var isDev = isClient && !!void 0;

var noop = () => void 0;

function isObject(value) {
    return value !== null && (typeof value === "object" || typeof value === "function");
}

function accessWith(valueOrFn, ...args) {
    return typeof valueOrFn === "function" ? valueOrFn(...args) : valueOrFn;
}

var tryOnCleanup = isDev ? fn => getOwner() ? onCleanup(fn) : fn : onCleanup;

var createCallbackStack = () => {
    let stack = [];
    const clear = () => stack = [];
    return {
        push: (...callbacks) => stack.push(...callbacks),
        execute(arg0, arg1, arg2, arg3) {
            stack.forEach(cb => cb(arg0, arg1, arg2, arg3));
            clear();
        },
        clear: clear
    };
};

function makeEventListener(target, type, handler, options) {
    target.addEventListener(type, handler, options);
    return tryOnCleanup(target.removeEventListener.bind(target, type, handler, options));
}

function makeEventListenerStack(target, options) {
    if (false) return [ () => () => void 0, () => void 0 ];
    const {push: push, execute: execute} = createCallbackStack();
    return [ (type, handler, overwriteOptions) => {
        const clear = makeEventListener(target, type, handler, overwriteOptions !== null && overwriteOptions !== void 0 ? overwriteOptions : options);
        push(clear);
        return clear;
    }, onCleanup(execute) ];
}

var PASSIVE = {
    passive: true
};

var DEFAULT_MOUSE_POSITION = {
    x: 0,
    y: 0,
    isInside: false,
    sourceType: null
};

function makeMousePositionListener(target = window, callback, options = {}) {
    if (false) return noop;
    const {touch: touch = true, followTouch: followTouch = true} = options;
    const [listen, clear] = makeEventListenerStack(target, PASSIVE);
    const handleMouse = e => callback({
        x: e.pageX,
        y: e.pageY,
        sourceType: "mouse"
    });
    listen("mousemove", handleMouse);
    listen("dragover", handleMouse);
    if (touch) {
        const handleTouch = e => {
            if (e.touches.length) callback({
                x: e.touches[0].clientX,
                y: e.touches[0].clientY,
                sourceType: "touch"
            });
        };
        listen("touchstart", handleTouch);
        if (followTouch) listen("touchmove", handleTouch);
    }
    return clear;
}

function makeMouseInsideListener(target = window, callback, options = {}) {
    if (false) return noop;
    const {touch: touch = true} = options;
    const [listen, clear] = makeEventListenerStack(target, PASSIVE);
    let mouseIn = false;
    let touchIn = !touch;
    function handleChange(isInside) {
        this === "mouse" ? mouseIn = isInside : touchIn = isInside;
        callback(mouseIn || touchIn);
    }
    listen("mouseover", handleChange.bind("mouse", true));
    listen("mouseout", handleChange.bind("mouse", false));
    listen("mousemove", handleChange.bind("mouse", true), {
        passive: true,
        once: true
    });
    if (touch) {
        listen("touchstart", handleChange.bind("touch", true));
        listen("touchend", handleChange.bind("touch", false));
    }
    return clear;
}

function createSingletonRoot(factory, detachedOwner = getOwner()) {
    let listeners = 0, value, disposeRoot;
    return () => {
        listeners++;
        onCleanup(() => {
            listeners--;
            queueMicrotask(() => {
                if (!listeners && disposeRoot) {
                    disposeRoot();
                    disposeRoot = value = void 0;
                }
            });
        });
        if (!disposeRoot) createRoot(dispose => value = factory(disposeRoot = dispose), detachedOwner);
        return value;
    };
}

function createHydratableSingletonRoot(factory) {
    const owner = getOwner();
    const singleton = createSingletonRoot(factory, owner);
    return () => false || sharedConfig.context ? createRoot(factory, owner) : singleton();
}

function createStaticStore(init) {
    const copy = {
        ...init
    }, store = {
        ...init
    }, cache = {};
    const getValue = key => {
        let signal = cache[key];
        if (!signal) {
            if (!getListener()) return copy[key];
            cache[key] = signal = createSignal(copy[key], {
                internal: true
            });
            delete copy[key];
        }
        return signal[0]();
    };
    for (const key in init) Object.defineProperty(store, key, {
        get: () => getValue(key),
        enumerable: true
    });
    const setValue = (key, value) => {
        const signal = cache[key];
        if (signal) return signal[1](value);
        if (key in copy) copy[key] = accessWith(value, copy[key]);
    };
    return [ store, (a, b) => {
        if (isObject(a)) {
            const entries = untrack(() => Object.entries(accessWith(a, store)));
            batch(() => {
                for (const [key, value] of entries) setValue(key, () => value);
            });
        } else setValue(a, b);
        return store;
    } ];
}

function createMousePosition(target, options = {}) {
    const fallback = {
        ...DEFAULT_MOUSE_POSITION,
        ...options.initialValue
    };
    if (false) return fallback;
    const [state, setState] = createStaticStore(fallback);
    const attachListeners = el => {
        makeMousePositionListener(el, setState, options);
        makeMouseInsideListener(el, setState.bind(void 0, "isInside"), options);
    };
    if (typeof target !== "function") attachListeners(target); else createEffect(() => attachListeners(target()));
    return state;
}

var useMousePosition = createHydratableSingletonRoot(createMousePosition.bind(void 0, void 0, void 0));

function addCustomStateToElement(element, state) {
    var _element$states;
    (_element$states = element.states) == null || _element$states.add(state);
}

function removeCustomStateFromElement(element, state) {
    var _element$states2;
    element == null || (_element$states2 = element.states) == null || _element$states2.remove(state);
}

function hasCustomState(element, state) {
    var _element$states3;
    return (_element$states3 = element.states) == null ? void 0 : _element$states3.has(state);
}

function createKeyboardEvent(key, keyCode, eventName = "keydown") {
    return new KeyboardEvent(eventName, {
        key: key,
        keyCode: keyCode,
        which: keyCode,
        ctrlKey: false,
        altKey: false,
        shiftKey: false,
        metaKey: false,
        bubbles: true
    });
}

var scrollTimeout;

var handleScroll = throttle(e => {
    const deltaY = e.deltaY;
    if (deltaY < 0) document.body.dispatchEvent(createKeyboardEvent("ArrowUp", 38)); else if (deltaY > 0) document.body.dispatchEvent(createKeyboardEvent("ArrowDown", 40));
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        document.body.dispatchEvent(createKeyboardEvent("ArrowUp", 38, "keyup"));
        document.body.dispatchEvent(createKeyboardEvent("ArrowDown", 40, "keyup"));
    }, 250);
}, 250);

function findElementWithCustomState(myApp, x, y, customState) {
    const path = getChildrenByPosition(myApp, x, y);
    let element;
    for (let i = path.length - 1; i >= 0; i--) if (hasCustomState(path[i], customState)) {
        element = path[i];
        break;
    }
    if (!element) return void 0;
    let p = element.parent;
    while ((p == null ? void 0 : p.forwardStates) && hasCustomState(p, customState)) {
        element = p;
        p = p.parent;
    }
    return element;
}

function findElementByActiveElement(e) {
    var _Config$rendererOptio;
    const active = activeElement();
    const precision = ((_Config$rendererOptio = Config.rendererOptions) == null ? void 0 : _Config$rendererOptio.deviceLogicalPixelRatio) || 1;
    const px = e.clientX / precision;
    const py = e.clientY / precision;
    if (active instanceof ElementNode && testCollision(px, py, active.lng.absX || 0, active.lng.absY || 0, active.width || 0, active.height || 0)) return active;
    let parent = active == null ? void 0 : active.parent;
    while (parent) {
        if (isFunction(parent.onMouseClick) && testCollision(px, py, parent.lng.absX || 0, parent.lng.absY || 0, parent.width || 0, parent.height || 0)) return parent;
        parent = parent.parent;
    }
    return null;
}

function applyPressedState(element, pressedState) {
    addCustomStateToElement(element, pressedState);
}

function handleElementClick(clickedElement, e, customStates, pressedElementRef) {
    if ((customStates == null ? void 0 : customStates.pressedState) && (pressedElementRef == null ? void 0 : pressedElementRef.current)) {
        removeCustomStateFromElement(pressedElementRef.current, customStates.pressedState);
        pressedElementRef.current = null;
    }
    if (isFunction(clickedElement.onMouseClick)) {
        clickedElement.onMouseClick(e, clickedElement);
        return;
    } else if (isFunction(clickedElement.onEnter)) {
        clickedElement.onEnter();
        return;
    }
    clickedElement.setFocus();
    setTimeout(() => {
        document.dispatchEvent(createKeyboardEvent("Enter", 13));
        setTimeout(() => document.body.dispatchEvent(createKeyboardEvent("Enter", 13, "keyup")), 1);
    }, 1);
}

function createHandleClick(myApp, customStates, pressedElementRef) {
    return e => {
        const clickedElement = customStates ? findElementWithCustomState(myApp, e.clientX, e.clientY, customStates.hoverState) : findElementByActiveElement(e);
        if (!clickedElement) return;
        handleElementClick(clickedElement, e, customStates, pressedElementRef);
    };
}

function createHandleMouseDown(myApp, customStates, pressedElementRef) {
    return e => {
        if (!customStates) return;
        const pressedElement = findElementWithCustomState(myApp, e.clientX, e.clientY, customStates.hoverState);
        if (!pressedElement) return;
        applyPressedState(pressedElement, customStates.pressedState);
        if (pressedElementRef) pressedElementRef.current = pressedElement;
    };
}

function testCollision(px, py, cx, cy, cw = 0, ch = 0) {
    return px >= cx && px <= cx + cw && py >= cy && py <= cy + ch;
}

function isNodeAtPosition(node, x, y) {
    if (!isElementNode(node)) return false;
    return node.alpha !== 0 && !node.skipFocus && testCollision(x, y, node.lng.absX || 0, node.lng.absY || 0, node.width || 0, node.height || 0);
}

function getChildrenByPosition(node, x, y) {
    var _Config$rendererOptio2;
    const result = [];
    const precision = ((_Config$rendererOptio2 = Config.rendererOptions) == null ? void 0 : _Config$rendererOptio2.deviceLogicalPixelRatio) || 1;
    const px = x / precision;
    const py = y / precision;
    let current = node;
    while (current && isNodeAtPosition(current, px, py)) {
        result.push(current);
        let best;
        let bestZ = -Infinity;
        for (const child of current.children) {
            var _child$zIndex;
            if (!isNodeAtPosition(child, px, py)) continue;
            const z = (_child$zIndex = child.zIndex) !== null && _child$zIndex !== void 0 ? _child$zIndex : -1;
            if (z >= bestZ) {
                bestZ = z;
                best = child;
            }
        }
        if (!best) break;
        current = best;
    }
    return result;
}

function useMouse(myApp = rootNode, throttleBy = 100, options) {
    const pos = useMousePosition();
    const scheduled = createScheduled(fn => throttle(fn, throttleBy));
    let previousElement = null;
    const pressedElementRef = {
        current: null
    };
    const customStates = options == null ? void 0 : options.customStates;
    const hoverState = customStates == null ? void 0 : customStates.hoverState;
    const handleClick = createHandleClick(myApp, customStates, pressedElementRef);
    const handleMouseDown = createHandleMouseDown(myApp, customStates, pressedElementRef);
    const owner = getOwner();
    const handleClickContext = e => {
        runWithOwner(owner, () => handleClick(e));
    };
    const handleMouseDownContext = e => {
        runWithOwner(owner, () => handleMouseDown(e));
    };
    const focusKey = Config.focusStateKey;
    makeEventListener(window, "wheel", handleScroll);
    makeEventListener(window, "click", handleClickContext);
    makeEventListener(window, "mousedown", handleMouseDownContext);
    createEffect(() => {
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
        if (!activeElm) {
            if (previousElement && hoverState) {
                removeCustomStateFromElement(previousElement, hoverState);
                previousElement = null;
            }
            return;
        }
        let p = activeElm.parent;
        while (p == null ? void 0 : p.forwardStates) {
            activeElm = p;
            p = p.parent;
        }
        const activeElmParent = activeElm.parent;
        if ((activeElmParent == null ? void 0 : activeElmParent.selected) !== void 0) activeElmParent.selected = activeElmParent.children.indexOf(activeElm);
        if (previousElement && previousElement !== activeElm && hoverState) removeCustomStateFromElement(previousElement, hoverState);
        if (hoverState) addCustomStateToElement(activeElm, hoverState); else activeElm.setFocus();
        previousElement = activeElm;
    });
}

function lazy(fn) {
    let comp;
    let p;
    const wrap = props => {
        const ctx = sharedConfig.context;
        if (ctx) {
            const [s, set] = createSignal();
            sharedConfig.count || (sharedConfig.count = 0);
            sharedConfig.count++;
            (p || (p = fn())).then(mod => {
                !sharedConfig.done && (sharedConfig.context = ctx);
                sharedConfig.count--;
                set(() => mod.default);
                sharedConfig.context = void 0;
            }).catch(() => {});
            comp = s;
        } else if (!comp) {
            const [s] = createResource(() => (p || (p = fn())).then(mod => mod.default));
            comp = s;
        }
        let Comp;
        return createMemo(() => {
            Comp = comp();
            return Comp ? untrack(() => {
                if (!ctx || sharedConfig.done) return Comp(props);
                const c = sharedConfig.context;
                sharedConfig.context = ctx;
                const r = Comp(props);
                sharedConfig.context = c;
                return r;
            }) : null;
        });
    };
    wrap.preload = () => p || ((p = fn()).then(mod => comp = () => mod.default), p);
    return wrap;
}

var columnScroll = withScrolling(false);

var rowStyles = {
    display: "flex",
    flexWrap: "wrap",
    transition: {
        y: true
    }
};

function VirtualGrid(props) {
    var _props$selected;
    const bufferSize = () => {
        var _props$buffer;
        return (_props$buffer = props.buffer) !== null && _props$buffer !== void 0 ? _props$buffer : 2;
    };
    const [cursor, setCursor] = createSignal((_props$selected = props.selected) !== null && _props$selected !== void 0 ? _props$selected : 0);
    const items = createMemo(() => props.each || []);
    const itemCount = () => items().length;
    const itemsPerRow = () => props.columns;
    const numberOfRows = () => {
        var _props$rows;
        return (_props$rows = props.rows) !== null && _props$rows !== void 0 ? _props$rows : 1;
    };
    const totalVisibleItems = () => itemsPerRow() * numberOfRows();
    const start = createMemo(() => {
        const perRow = itemsPerRow();
        const rawStart = Math.floor(cursor() / perRow) * perRow - bufferSize() * perRow;
        return Math.max(0, rawStart);
    });
    const end = createMemo(() => {
        const perRow = itemsPerRow();
        const rawEnd = (Math.floor(cursor() / perRow) + bufferSize()) * perRow + totalVisibleItems();
        return Math.min(items().length, rawEnd);
    });
    const [slice, setSlice] = createSignal(items().slice(start(), end()));
    let viewRef;
    function onVerticalNav(dir) {
        return function() {
            const perRow = itemsPerRow();
            const currentRowIndex = Math.floor(cursor() / perRow);
            const maxRows = Math.floor(items().length / perRow);
            if (currentRowIndex === 0 && dir === -1 || currentRowIndex === maxRows && dir === 1) return;
            const selected = this.selected || 0;
            const offset = dir * perRow;
            const newIndex = clamp(selected + offset, 0, items().length - 1);
            const lastIdx = selected;
            this.selected = newIndex;
            const active = this.children[this.selected];
            if (active instanceof ElementNode) {
                active.setFocus();
                chainedOnSelectedChanged.call(this, this.selected, this, active, lastIdx);
                return true;
            }
        };
    }
    const onUp = onVerticalNav(-1);
    const onDown = onVerticalNav(1);
    const onSelectedChanged = function(_idx, elm, active, _lastIdx) {
        let idx = _idx;
        let lastIdx = _lastIdx;
        const perRow = itemsPerRow();
        const newRowIndex = Math.floor(idx / perRow);
        const prevRowIndex = Math.floor((lastIdx || 0) / perRow);
        const prevStart = start();
        setCursor(prevStart + idx);
        if (newRowIndex === prevRowIndex) return;
        setSlice(items().slice(start(), end()));
        const idxCorrection = prevStart - start();
        if (lastIdx) lastIdx += idxCorrection;
        idx += idxCorrection;
        this.selected += idxCorrection;
        if (props.onEndReachedThreshold !== void 0 && cursor() >= items().length - props.onEndReachedThreshold) {
            var _props$onEndReached;
            (_props$onEndReached = props.onEndReached) == null || _props$onEndReached.call(props);
        }
        queueMicrotask(() => {
            const prevRowY = this.y + active.y;
            this.updateLayout();
            this.lng.y = prevRowY - active.y;
            columnScroll(idx, elm, active, lastIdx);
        });
    };
    const chainedOnSelectedChanged = chainFunctions(props.onSelectedChanged, onSelectedChanged);
    let cachedSelected;
    const updateSelected = ([selected, _items]) => {
        if (!viewRef || selected == null) return;
        if (cachedSelected !== void 0) {
            selected = cachedSelected;
            cachedSelected = void 0;
        }
        if (selected >= items().length && props.onEndReached) {
            var _props$onEndReached2;
            (_props$onEndReached2 = props.onEndReached) == null || _props$onEndReached2.call(props);
            cachedSelected = selected;
            return;
        }
        const item = items()[selected];
        let active = viewRef.children.find(x => x.item === item);
        const lastSelected = viewRef.selected;
        if (active instanceof ElementNode) {
            viewRef.selected = viewRef.children.indexOf(active);
            if (hasFocus(viewRef)) active.setFocus();
            chainedOnSelectedChanged.call(viewRef, viewRef.selected, viewRef, active, lastSelected);
        } else {
            setCursor(selected);
            setSlice(items().slice(start(), end()));
            queueMicrotask(() => {
                viewRef.updateLayout();
                active = viewRef.children.find(x => x.item === item);
                if (active instanceof ElementNode) {
                    viewRef.selected = viewRef.children.indexOf(active);
                    if (hasFocus(viewRef)) active.setFocus();
                    chainedOnSelectedChanged.call(viewRef, viewRef.selected, viewRef, active, lastSelected);
                }
            });
        }
    };
    const scrollToIndex = index => {
        untrack(() => updateSelected([ index ]));
    };
    createEffect(on([ () => props.selected, items ], updateSelected));
    createEffect(on(items, (gridItems, _prevGridItems, prevSize) => {
        if (!viewRef) return;
        if (cachedSelected !== void 0) {
            updateSelected([ cachedSelected ]);
            return gridItems.length;
        }
        if (gridItems.length === 0) {
            setCursor(0);
            cachedSelected = void 0;
            setSlice([]);
        } else if (cursor() >= itemCount()) updateSelected([ Math.max(0, itemCount() - 1) ]); else if (prevSize === 0) updateSelected([ 0 ]); else setSlice(items().slice(start(), end()));
        return gridItems.length;
    }, {
        defer: true
    }));
    return (() => {
        var _el$ = createElement("view");
        var _ref$ = chainRefs(el => {
            viewRef = el;
        }, props.ref);
        typeof _ref$ === "function" && use(_ref$, _el$);
        spread(_el$, mergeProps(props, {
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
        }), true);
        insert(_el$, createComponent(List, {
            get each() {
                return slice();
            },
            get children() {
                return props.children;
            }
        }));
        return _el$;
    })();
}

var createRouterComponent = router => props => {
    const {base: base} = props;
    const routeDefs = children(() => props.children);
    const branches = createMemo(() => createBranches(routeDefs(), props.base || ""));
    let context;
    const routerState = createRouterContext(router, branches, () => context, {
        base: base,
        singleFlight: props.singleFlight,
        transformUrl: props.transformUrl
    });
    router.create && router.create(routerState);
    return createComponent(RouterContextObj.Provider, {
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
    const location = props.routerState.location;
    const params = props.routerState.params;
    const data = createMemo(() => props.preload && untrack(() => {
        setInPreloadFn(true);
        props.preload({
            params: params,
            location: location,
            intent: getIntent() || "initial"
        });
        setInPreloadFn(false);
    }));
    return createComponent(Show, {
        get when() {
            return props.root;
        },
        keyed: true,
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
    if (false) {
        const e = voidFn();
        if (e && e.router && e.router.dataOnly) {
            dataOnly(e, props.routerState, props.branches);
            return;
        }
        e && ((e.router || (e.router = {})).matches || (e.router.matches = props.routerState.matches().map(({route: route, path: path, params: params}) => ({
            path: route.originalPath,
            pattern: route.pattern,
            match: path,
            params: params,
            info: route.info
        }))));
    }
    const disposers = [];
    let root;
    const routeStates = createMemo(on(props.routerState.matches, (nextMatches, prevMatches, prev) => {
        let equal = prevMatches && nextMatches.length === prevMatches.length;
        const next = [];
        for (let i = 0, len = nextMatches.length; i < len; i++) {
            const prevMatch = prevMatches && prevMatches[i];
            const nextMatch = nextMatches[i];
            if (prev && prevMatch && nextMatch.route.key === prevMatch.route.key) next[i] = prev[i]; else {
                equal = false;
                if (disposers[i]) disposers[i]();
                createRoot(dispose => {
                    disposers[i] = dispose;
                    next[i] = createRouteContext(props.routerState, next[i - 1] || props.routerState.base, createOutlet(() => routeStates()[i + 1]), () => {
                        var _routeMatches$i;
                        const routeMatches = props.routerState.matches();
                        return (_routeMatches$i = routeMatches[i]) !== null && _routeMatches$i !== void 0 ? _routeMatches$i : routeMatches[0];
                    });
                });
            }
        }
        disposers.splice(nextMatches.length).forEach(dispose => dispose());
        if (prev && equal) return prev;
        root = next[0];
        return next;
    }));
    return createOutlet(() => routeStates() && root)();
}

var createOutlet = child => () => createComponent(Show, {
    get when() {
        return child();
    },
    keyed: true,
    children: child => createComponent(RouteContextObj.Provider, {
        value: child,
        get children() {
            return child.outlet();
        }
    })
});

var Route = props => {
    const childRoutes = children(() => props.children);
    return mergeProps$1(props, {
        get children() {
            return childRoutes();
        }
    });
};

function dataOnly(event, routerState, branches) {
    const url = new URL(event.request.url);
    const prevMatches = getRouteMatches(branches, new URL(event.router.previousUrl || event.request.url).pathname);
    const matches = getRouteMatches(branches, url.pathname);
    for (let match = 0; match < matches.length; match++) {
        if (!prevMatches[match] || matches[match].route !== prevMatches[match].route) event.router.dataOnly = true;
        const {route: route, params: params} = matches[match];
        route.preload && route.preload({
            params: params,
            location: routerState.location,
            intent: "preload"
        });
    }
}

function intercept([value, setValue], get, set) {
    return [ get ? () => get(value()) : value, set ? v => setValue(set(v)) : setValue ];
}

function createRouter(config) {
    let ignore = false;
    const wrap = value => typeof value === "string" ? {
        value: value
    } : value;
    const signal = intercept(createSignal(wrap(config.get()), {
        equals: (a, b) => a.value === b.value && a.state === b.state
    }), void 0, next => {
        !ignore && config.set(next);
        if (sharedConfig.registry && !sharedConfig.done) sharedConfig.done = true;
        return next;
    });
    config.init && onCleanup(config.init((value = config.get()) => {
        ignore = true;
        signal[1](wrap(value));
        ignore = false;
    }));
    return createRouterComponent({
        signal: signal,
        create: config.create,
        utils: config.utils
    });
}

function Navigate(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const {href: href, state: state} = props;
    navigate(typeof href === "function" ? href({
        navigate: navigate,
        location: location
    }) : href, {
        replace: true,
        state: state
    });
    return null;
}

function hashParser(str) {
    const to = str.replace(/^.*?#/, "");
    if (!to.startsWith("/")) {
        const [, path = "/"] = window.location.hash.split("#", 2);
        return `${path}#${to}`;
    }
    return to;
}

function bindEvent(target, type, handler) {
    target.addEventListener(type, handler);
    return () => target.removeEventListener(type, handler);
}

function HashRouter(props) {
    const getSource = () => window.location.hash.slice(1);
    const beforeLeave = createBeforeLeave();
    return createRouter({
        get: getSource,
        set({value: value, replace: replace, state: state}) {
            if (replace) window.history.replaceState(keepDepth(state), "", "#" + value); else window.history.pushState(state, "", "#" + value);
            saveCurrentDepth();
        },
        init: notify => bindEvent(window, "hashchange", notifyIfNotBlocked(notify, delta => !beforeLeave.confirm(delta && delta < 0 ? delta : getSource()))),
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

var SUPPORTS_PROXY = typeof Proxy === "function";

function createMemoWithoutProxy(fn, allKeys) {
    const map = new Map;
    const owner = getOwner();
    const target = {};
    const handler = property => {
        if (!map.has(property)) runWithOwner(owner, () => map.set(property, createMemo(() => fn()[property])));
        return map.get(property)();
    };
    (allKeys ? allKeys : Object.keys(fn())).forEach(key => {
        Object.defineProperty(target, key, {
            get: () => handler(key),
            enumerable: true,
            configurable: true
        });
    });
    return target;
}

var collectDynamicParams = branches => {
    const dynamicParams = [];
    branches.forEach(branch => {
        branch.routes.forEach(route => {
            if (route.pattern) {
                const matches = route.pattern.match(/:(\w+)/g);
                if (matches) matches.forEach(param => {
                    const p = param.slice(1);
                    if (!dynamicParams.includes(p)) dynamicParams.push(p);
                });
            }
        });
    });
    return dynamicParams;
};

var keepAliveElements = new Map;

var keepAliveRouteElements = new Map;

var _storeKeepAlive = (map, element) => {
    const existing = map.get(element.id);
    if (existing) {
        Object.assign(existing, element);
        return existing;
    }
    map.set(element.id, element);
    return element;
};

var storeKeepAlive = element => _storeKeepAlive(keepAliveElements, element);

var storeKeepAliveRoute = element => _storeKeepAlive(keepAliveRouteElements, element);

function wrapChildren(props, setIsAlive) {
    const onRemove = chainFunctions(props.onRemove || (elm => {
        elm.alpha = 0;
    }), () => setIsAlive == null ? void 0 : setIsAlive(false));
    const onRender = chainFunctions(props.onRender || (elm => {
        elm.alpha = 1;
    }), () => setIsAlive == null ? void 0 : setIsAlive(true));
    const transition = props.transition || {
        alpha: true
    };
    return (() => {
        var _el$ = createElement("view");
        spread(_el$, mergeProps(props, {
            preserve: true,
            onRemove: onRemove,
            onRender: onRender,
            forwardFocus: 0,
            transition: transition
        }), false);
        return _el$;
    })();
}

var createKeepAliveComponent = (map, storeFn) => props => {
    var _props$shouldDispose;
    let existing = map.get(props.id);
    const existingChild = existing == null ? void 0 : existing.children;
    if (existing && (((_props$shouldDispose = props.shouldDispose) == null ? void 0 : _props$shouldDispose.call(props, props.id)) || (existingChild == null ? void 0 : existingChild.destroyed))) {
        var _existing$dispose;
        existingChild == null || existingChild.destroy();
        (_existing$dispose = existing.dispose) == null || _existing$dispose.call(existing);
        map.delete(props.id);
        existing = void 0;
    }
    if (!existing || !existing.dispose) return createRoot(dispose => {
        const [isAlive, setIsAlive] = (existing == null ? void 0 : existing.isAlive) && (existing == null ? void 0 : existing.setIsAlive) ? [ existing.isAlive, existing.setIsAlive ] : createSignal(true);
        const children = wrapChildren(props, setIsAlive);
        storeFn({
            id: props.id,
            owner: getOwner(),
            children: children,
            dispose: dispose,
            isAlive: isAlive,
            setIsAlive: setIsAlive
        });
        return children;
    }); else if (!existing.children) {
        var _existing$owner;
        existing.children = runWithOwner((_existing$owner = existing.owner) !== null && _existing$owner !== void 0 ? _existing$owner : null, () => wrapChildren(props, existing.setIsAlive));
    }
    return existing.children;
};

var KeepAlive = createKeepAliveComponent(keepAliveElements, storeKeepAlive);

var KeepAliveRouteInternal = createKeepAliveComponent(keepAliveRouteElements, storeKeepAliveRoute);

var keepAliveRouteCache = new Map;

var KeepAliveRoute = props => {
    const key = props.id || props.path;
    const cached = keepAliveRouteCache.get(key);
    if (cached) return cached;
    let savedFocusedElement;
    const getExisting = () => {
        let existing = keepAliveRouteElements.get(key);
        if (!existing) {
            const [isAlive, setIsAlive] = createSignal(true);
            existing = {
                id: key,
                isAlive: isAlive,
                setIsAlive: setIsAlive
            };
            keepAliveRouteElements.set(key, existing);
        }
        return existing;
    };
    const onRemove = chainFunctions(props.onRemove, elm => {
        savedFocusedElement = activeElement();
        elm.alpha = 0;
    });
    const onRender = chainFunctions(props.onRender, elm => {
        let isChild = false;
        let current = savedFocusedElement;
        while (current) {
            if (current === elm) {
                isChild = true;
                break;
            }
            current = current.parent;
        }
        if (isChild && savedFocusedElement) savedFocusedElement.setFocus(); else elm.setFocus();
        elm.alpha = 1;
    });
    const preload = props.preload ? preloadProps => {
        var _props$shouldDispose2;
        let existing = getExisting();
        const existingChild = existing.children;
        if (existingChild && (((_props$shouldDispose2 = props.shouldDispose) == null ? void 0 : _props$shouldDispose2.call(props, key)) || existingChild.destroyed)) {
            var _existing$dispose2;
            existingChild.destroy();
            (_existing$dispose2 = existing.dispose) == null || _existing$dispose2.call(existing);
            keepAliveRouteElements.delete(key);
            existing = getExisting();
        }
        if (!existing.dispose) return createRoot(dispose => {
            existing.owner = getOwner();
            existing.dispose = dispose;
            return props.preload({
                ...preloadProps,
                isAlive: existing.isAlive
            });
        }); else if (existing.children) {
            existing.children.setFocus();
            return props.preload({
                ...preloadProps,
                isAlive: existing.isAlive
            });
        } else return props.preload({
            ...preloadProps,
            isAlive: existing.isAlive
        });
    } : void 0;
    const componentWrapper = childProps => {
        const existing = getExisting();
        const innerProps = Object.create(childProps, {
            isAlive: {
                value: existing.isAlive,
                enumerable: true,
                configurable: true
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
    };
    const routeElement = createComponent(Route, mergeProps(props, {
        preload: preload,
        component: componentWrapper
    }));
    keepAliveRouteCache.set(key, routeElement);
    return routeElement;
};

var App = props => {
    useFocusManager({
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
    });
    useMouse(void 0, 100, {
        customStates: {
            hoverState: "$hover",
            pressedState: "$pressed",
            pressedStateDuration: 150
        }
    });
    return props.children;
};

function createInfiniteScroll(fetcher) {
    const [pages, setPages] = createSignal([]);
    const [page, setPage] = createSignal(1);
    const [end, setEnd] = createSignal(false);
    const [contents] = createResource(page, fetcher);
    createComputed(() => {
        const content = contents();
        if (!content) return;
        batch(() => {
            if (content.length === 0) setEnd(true);
            setPages(p => [ ...p, ...content ]);
        });
    });
    return {
        pages: pages,
        page: page,
        setPage: setPage,
        setPages: setPages,
        end: end,
        setEnd: setEnd
    };
}

var Browse = props => {
    usePreloadRoute();
    const [heroContent, setHeroContent] = createSignal({});
    const navigate = useNavigate();
    let firstRun = true;
    let vgRef;
    onCleanup(() => {
        console.log("cleanup");
    });
    const provider = createMemo(() => createInfiniteScroll(props.data()));
    const delayedBackgrounds = debounce(img => setGlobalBackground(img), 800);
    const delayedHero = debounce(content => setHeroContent(content || {}), 600);
    function updateContentBlock(_index, _col, elm) {
        if (!elm) return;
        const item = elm.item || {};
        if (firstRun) {
            if (item.backdrop) setGlobalBackground(item.backdrop);
            if (item.heroContent) setHeroContent(item.heroContent);
            firstRun = false;
            return;
        }
        if (item.href) {}
        if (item.backdrop) delayedBackgrounds(item.backdrop);
        if (item.heroContent) delayedHero(item.heroContent);
    }
    function onEndReached() {
        provider().setPage(p => p + 1);
    }
    function onEnter() {
        var _entity$item;
        this.display = "flex";
        let entity = this.children.find(c => c.states.has("focus"));
        assertTruthy(entity && ((_entity$item = entity.item) == null ? void 0 : _entity$item.href));
        navigate(entity.item.href);
        return true;
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
            }), (() => {
                var _el$ = createElement("view");
                setProp(_el$, "clipping", true);
                insert(_el$, createComponent(VirtualGrid, {
                    y: 24,
                    x: 160,
                    id: "BrowseGrid",
                    ref(r$) {
                        var _ref$ = vgRef;
                        typeof _ref$ === "function" ? _ref$(r$) : vgRef = r$;
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
                    autofocus: true,
                    get each() {
                        return provider().pages();
                    },
                    children: item => createComponent(Thumbnail, {
                        get item() {
                            return item();
                        }
                    })
                }));
                effect(_$p => setProp(_el$, "style", styles_default.itemsContainer, _$p));
                return _el$;
            })() ];
        }
    });
};

var TMDB = props => {
    const [heroContent, setHeroContent] = createSignal({});
    const [openPanel, setOpenPanel] = createSignal(false);
    const {storeFocus: storeFocus, restoreFocus: restoreFocus} = useFocusStack();
    let contentBlock, solidLogo, firstRun = true;
    const delayedBackgrounds = debounce(setGlobalBackground, 800);
    const delayedHero = debounce(content => setHeroContent(content || {}), 600);
    createEffect(on(activeElement, elm => {
        if (!elm) return;
        const item = elm.item || {};
        if (firstRun) {
            item.backdrop && setGlobalBackground(item.backdrop);
            item.heroContent && setHeroContent(item.heroContent);
            firstRun = false;
        } else {
            item.backdrop && delayedBackgrounds(item.backdrop);
            item.heroContent && delayedHero(item.heroContent);
        }
    }, {
        defer: true
    }));
    function onRowChanged(selectedIndex, column, row, lastIndex) {
        if (selectedIndex === lastIndex) return;
        const values = selectedIndex === 0 ? {
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
        const values2 = selectedIndex === 0 ? {
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
    return (() => {
        var _el$ = createElement("view"), _el$2 = createElement("view"), _el$3 = createElement("text"), _el$5 = createElement("view"), _el$6 = createElement("view"), _el$7 = createElement("text");
        insertNode(_el$, _el$2);
        setProp(_el$, "forwardFocus", 2);
        setProp(_el$, "autofocus", true);
        insertNode(_el$2, _el$3);
        insertNode(_el$2, _el$5);
        insertNode(_el$2, _el$6);
        insertNode(_el$2, _el$7);
        var _ref$ = solidLogo;
        typeof _ref$ === "function" ? use(_ref$, _el$2) : solidLogo = _el$2;
        setProp(_el$2, "width", 300);
        setProp(_el$2, "height", 150);
        setProp(_el$2, "x", 162);
        setProp(_el$2, "y", 80);
        setProp(_el$2, "zIndex", 105);
        insertNode(_el$3, createTextNode(`Built With:`));
        setProp(_el$3, "x", 80);
        setProp(_el$3, "fontSize", 28);
        setProp(_el$3, "color", 4143380121);
        setProp(_el$5, "y", 32);
        setProp(_el$5, "src", "./assets/solidWord.png");
        setProp(_el$5, "width", 280);
        setProp(_el$5, "height", 52);
        setProp(_el$6, "x", 0);
        setProp(_el$6, "y", 110);
        setProp(_el$6, "src", "./assets/tmdb.png");
        setProp(_el$6, "width", 80);
        setProp(_el$6, "height", 41);
        insertNode(_el$7, createTextNode(`This product uses the TMDB API but is not endorsed or certified by TMDB.`));
        setProp(_el$7, "x", 90);
        setProp(_el$7, "y", 110);
        setProp(_el$7, "contain", "width");
        setProp(_el$7, "width", 160);
        setProp(_el$7, "fontSize", 12);
        setProp(_el$7, "color", 4143380121);
        insert(_el$, createComponent(ContentBlock, {
            ref(r$) {
                var _ref$2 = contentBlock;
                typeof _ref$2 === "function" ? _ref$2(r$) : contentBlock = r$;
            },
            y: 300,
            x: 162,
            get content() {
                return heroContent();
            }
        }), null);
        insert(_el$, createComponent(LazyColumn, {
            y: 500,
            upCount: 3,
            get each() {
                return props.data.rows;
            },
            id: "BrowseColumn",
            onSelectedChanged: onRowChanged,
            onEnter: () => setOpenPanel(true),
            get autofocus() {
                return props.data.rows[0].items();
            },
            gap: 40,
            throttleInput: 250,
            width: 1760,
            get style() {
                return styles_default.Column;
            },
            children: row => row().type === "Hero" ? createComponent(LazyRow, {
                gap: 80,
                upCount: 2,
                bufferSize: 1,
                scroll: "center",
                centerScroll: true,
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
        }), null);
        insert(_el$, createComponent(AssetPanel, {
            onFocus: storeFocus,
            close: () => {
                setOpenPanel(false);
                restoreFocus();
                return true;
            },
            get open() {
                return openPanel();
            },
            get item() {
                return heroContent();
            }
        }), null);
        return _el$;
    })();
};

var Destroy = props => {
    const [heroContent, setHeroContent] = createSignal();
    const [heroIndex, setHeroIndex] = createSignal(0);
    onMount(() => setGlobalBackground(858993663));
    createEffect(on([ props.data.heroRow.items, heroIndex ], ([heros, index]) => {
        if (heros) setHeroContent(heros[index]);
        if (heros && index < heros.length - 1) {
            const img = new Image;
            img.crossOrigin = "anonymous";
            img.src = heros[index + 1].backdrop;
        }
    }));
    function onDown() {
        if (heroIndex() >= 19) return false;
        setHeroIndex(p => p + 1);
    }
    function onUp() {
        if (heroIndex() === 0) return false;
        setHeroIndex(p => p - 1);
        return true;
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
        node.alpha = 0;
        node.y = -100;
        return node.animate({
            y: 0,
            alpha: 1
        }, {
            duration: 500,
            easing: "ease-in-out"
        }).start().waitUntilStopped();
    }
    return (() => {
        var _el$ = createElement("view"), _el$2 = createElement("view");
        insertNode(_el$, _el$2);
        setProp(_el$, "x", 300);
        setProp(_el$, "y", 200);
        setProp(_el$, "onDown", onDown);
        setProp(_el$, "onUp", onUp);
        setProp(_el$2, "src", "assets/up.svg");
        setProp(_el$2, "width", 350);
        setProp(_el$2, "height", 200);
        setProp(_el$2, "x", 450);
        setProp(_el$2, "y", -200);
        insert(_el$, createComponent(Show, {
            get when() {
                return heroContent();
            },
            keyed: true,
            get children() {
                return createComponent(Hero, {
                    id: "Hero",
                    autofocus: true,
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
        }), null);
        effect(_$p => setProp(_el$2, "rotation", Math.PI, _$p));
        return _el$;
    })();
};

var handleResults = response => response.then(({results: results}) => convertItemsToTiles(results.filter(r => !r.adult))).catch(err => {
    console.error("[HANDLE_RESULTS_ERROR] error:", err.message, err.stack);
    throw err;
});

var fetchPopular = type => handleResults(api_default.get(`/${type}/popular`));

var genreListCache;

var fetchGenreMovies = genres => {
    const genreList = genreListCache || (genreListCache = api_default.get(`/genre/movie/list`));
    const targetGenre = Array.isArray(genres) ? genres : [ genres ];
    return genreList.then(({genres: genres}) => {
        let targetGenreIds = [];
        genres.forEach(item => {
            if (targetGenre.includes(item.name)) targetGenreIds.push(item.id);
        });
        return handleResults(api_default.get(`/discover/movie?with_genres=${targetGenreIds.join()}`));
    }).catch(err => {
        console.error("[FETCH_GENRE_MOVIES_ERROR] genres:", genres, "error:", err.message, err.stack);
        throw err;
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
    const rows = [];
    const popularMovies = createResource(() => fetchPopular("movie"));
    rows.push({
        title: "Popular Movies",
        items: popularMovies[0],
        setItems: popularMovies[1].mutate,
        type: "Poster",
        height: 328
    });
    rows.push({
        title: "Best Western movies",
        items: createResource(() => fetchGenreMovies([ "Western" ]))[0],
        type: "Hero",
        height: 720
    });
    rows.push({
        title: "Best Comedy movies",
        items: createResource(() => fetchGenreMovies([ "Comedy" ]))[0],
        type: "PosterTitle",
        height: 400
    });
    rows.push({
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
    rows.push(heroRow);
    rows.push({
        title: "Best Animations",
        items: createResource(() => fetchGenreMovies("Animation"))[0],
        type: "PosterTitle",
        height: 400
    });
    rows.push({
        title: "Best TV Movie Movies",
        items: createResource(() => fetchGenreMovies("TV Movie"))[0],
        type: "PosterTitle",
        height: 400
    });
    rows.push({
        title: "Best Science Fiction movies",
        items: createResource(() => fetchGenreMovies("Science Fiction"))[0],
        type: "Hero",
        height: 720
    });
    rows.push({
        title: "Best War Movies",
        items: createResource(() => fetchGenreMovies("War"))[0],
        type: "PosterTitle",
        height: 400
    });
    return {
        rows: rows
    };
}

var NotFound = () => (() => {
    var _el$ = createElement("node");
    setProp(_el$, "style", {
        width: 1920,
        height: 1080,
        color: 868483072
    });
    return _el$;
})();

var fonts_default = [ {
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
} ];

var cache = new Map;

function browse_default(filter) {
    return pageIndex => {
        const url = `/trending/${filter}/week?page=${pageIndex}`;
        if (cache.has(url)) return cache.get(url);
        let result = api_default.get(url).then(trending => convertItemsToTiles(trending.results.filter(r => !r.adult))).catch(err => {
            console.error("[BROWSE_PROVIDER_ERROR] url:", url, "error:", err.message, err.stack);
            throw err;
        });
        cache.set(url, result);
        return result;
    };
}

function browsePreload(props) {
    let lastFilter = null;
    return createMemo(p => {
        const params = props.params;
        if (p && (!params.filter || lastFilter === params.filter)) return p;
        const provider = browse_default(params.filter || "all");
        provider(1);
        lastFilter = params.filter || lastFilter;
        return provider;
    });
}

function minutesToHMM(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return hours + "h " + (remainingMinutes < 10 ? "0" : "") + remainingMinutes + "min";
}

function formatDate(dateString) {
    const parts = dateString.split("-");
    return parts[1] + "/" + parts[2] + "/" + parts[0];
}

function justYear(dateString) {
    return ((dateString == null ? void 0 : dateString.split("-")) || [])[0] || "";
}

function ensureItems(items, minCount) {
    const remainingCount = minCount - items.length;
    if (remainingCount > 0) return items.concat(Array(remainingCount).fill({}));
    return items;
}

function getRecommendations({type: type, id: id}) {
    return api_default.get(`/${type}/${id}/recommendations`).then(({results: results}) => {
        if (results.length) return ensureItems(convertItemsToTiles(results.slice(0, 7)), 7);
        return api_default.get(`/trending/${type}/week?page=1`).then(({results: results}) => ensureItems(convertItemsToTiles(results.slice(0, 7)), 7));
    });
}

function getCredits({type: type, id: id}) {
    return api_default.get(`/${type}/${id}/credits`).then(({cast: cast}) => ensureItems(convertItemsToTiles(cast.slice(0, 7)), 7));
}

function getInfo({type: type, id: id}) {
    let rt = type === "movie" ? {
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
            metaText: type === "movie" ? minutesToHMM(data.runtime) + "   " + formatDate(data.release_date) : `${justYear(data.first_air_date)} - ${justYear(data.last_air_date)}`,
            reviews: rt
        },
        ...data
    }));
}

function entityPreload({params: params, intent: intent}) {
    const [entity] = createResource(() => ({
        ...params
    }), getInfo);
    if (intent === "preload") return;
    const [credits] = createResource(() => ({
        ...params
    }), getCredits);
    const [recommendations] = createResource(() => ({
        ...params
    }), getRecommendations);
    return {
        entity: entity,
        credits: credits,
        recommendations: recommendations
    };
}

function Background() {
    const disableBG = new URLSearchParams(window.location.search).get("disableBG") === "true";
    let bg1, bg2, heroMask;
    let active = 0;
    const alpha = 1;
    const animationSettings = {
        duration: 550,
        easing: "ease-in-out"
    };
    const bgStyles = {
        alpha: alpha,
        color: 4294967295
    };
    onMount(() => {
        if (disableBG) {
            heroMask.src = "";
            heroMask.colorLeft = 255;
            heroMask.colorRight = 0;
            return;
        }
    });
    function changeBackgrounds(img) {
        if (disableBG) {
            heroMask.src = "";
            heroMask.colorLeft = 255;
            heroMask.colorRight = 0;
            return;
        }
        if (typeof img !== "string") {
            bg1.color = img;
            bg1.src = "";
            bg1.alpha = 1;
            active = 1;
            bg2.alpha = 0;
            heroMask.alpha = 0;
            return;
        } else {
            bg1.color = 4294967295;
            heroMask.alpha = 1;
        }
        const currentBg = active === 1 ? bg2 : bg1;
        const nextBg = active === 1 ? bg1 : bg2;
        currentBg.src = img;
        if (active === 0) currentBg.alpha = 1; else {
            currentBg.alpha = .01;
            currentBg.animate({
                alpha: 1
            }, animationSettings).start();
        }
        nextBg.animate({
            alpha: .01
        }, animationSettings).start();
        active = active === 1 ? 2 : 1;
    }
    createEffect(on(globalBackground, img => {
        changeBackgrounds(img);
    }, {
        defer: true
    }));
    return (() => {
        var _el$ = createElement("view"), _el$2 = createElement("view"), _el$3 = createElement("view"), _el$4 = createElement("view");
        insertNode(_el$, _el$2);
        insertNode(_el$, _el$3);
        insertNode(_el$, _el$4);
        setProp(_el$, "width", 1920);
        setProp(_el$, "height", 1080);
        setProp(_el$, "zIndex", -5);
        var _ref$ = bg1;
        typeof _ref$ === "function" ? use(_ref$, _el$2) : bg1 = _el$2;
        setProp(_el$2, "style", bgStyles);
        var _ref$2 = bg2;
        typeof _ref$2 === "function" ? use(_ref$2, _el$3) : bg2 = _el$3;
        setProp(_el$3, "style", bgStyles);
        setProp(_el$3, "alpha", 0);
        var _ref$3 = heroMask;
        typeof _ref$3 === "function" ? use(_ref$3, _el$4) : heroMask = _el$4;
        setProp(_el$4, "src", "./assets/hero-mask-inverted.png");
        setProp(_el$4, "color", 255);
        setProp(_el$4, "width", 1920);
        setProp(_el$4, "height", 1080);
        return _el$;
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
            alpha: true,
            width: true
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
};

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
    return (() => {
        var _el$ = createElement("view"), _el$2 = createElement("view"), _el$3 = createElement("text");
        insertNode(_el$, _el$2);
        insertNode(_el$, _el$3);
        spread(_el$, mergeProps(props, {
            forwardStates: true,
            get style() {
                return NavDrawer_styles_default.NavButton;
            }
        }), true);
        setProp(_el$2, "y", -16);
        insert(_el$2, createComponent(Icon, {
            get color() {
                return props.iconColor;
            },
            scale: .5,
            get name() {
                return props.icon;
            }
        }));
        setProp(_el$3, "style", NavButtonTextStyles);
        insert(_el$3, () => props.children);
        return _el$;
    })();
}

function NavDrawer(props) {
    let backdrop;
    const navigate = useNavigate();
    function onFocus() {
        backdrop.states.add("$focus");
        this.children.forEach(c => c.states.add("$active"));
        this.children[this.selected || 0].setFocus();
    }
    function onBlur() {
        backdrop.states.remove("$focus");
        this.selected = 0;
        this.children.forEach(c => c.states.remove("$active"));
    }
    function handleNavigate(page) {
        if (useMatch(() => page)()) return props.focusPage();
        navigate(page);
    }
    const selectedButton = createMemo(() => {
        if (useMatch(() => "/browse/all")()) return 308;
        if (useMatch(() => "/browse/movie")()) return 398;
        if (useMatch(() => "/browse/tv")()) return 488;
        if (useMatch(() => "/examples")()) return 578;
        if (useMatch(() => "/benchmark")()) return 668;
        if (useMatch(() => "/versions")()) return 758;
        return 308;
    });
    return [ (() => {
        var _el$4 = createElement("view"), _el$5 = createElement("text"), _el$7 = createElement("view"), _el$8 = createElement("view"), _el$9 = createElement("text");
        insertNode(_el$4, _el$5);
        insertNode(_el$4, _el$7);
        insertNode(_el$4, _el$8);
        insertNode(_el$4, _el$9);
        setProp(_el$4, "id", "NavDrawer");
        setProp(_el$4, "flexItem", false);
        setProp(_el$4, "width", 300);
        setProp(_el$4, "height", 150);
        setProp(_el$4, "x", 30);
        setProp(_el$4, "y", 15);
        setProp(_el$4, "zIndex", 105);
        insertNode(_el$5, createTextNode(`Built With:`));
        setProp(_el$5, "y", 8);
        setProp(_el$5, "x", 80);
        setProp(_el$5, "fontSize", 28);
        setProp(_el$7, "y", 10);
        setProp(_el$7, "src", "./assets/solidWord.png");
        setProp(_el$7, "width", 280);
        setProp(_el$7, "height", 52);
        setProp(_el$7, "textureOptions", {});
        setProp(_el$8, "x", 0);
        setProp(_el$8, "y", 100);
        setProp(_el$8, "src", "./assets/tmdb.png");
        setProp(_el$8, "width", 80);
        setProp(_el$8, "height", 41);
        setProp(_el$8, "textureOptions", {});
        insertNode(_el$9, createTextNode(`This product uses the TMDB API but is not endorsed or certified by TMDB.`));
        setProp(_el$9, "x", 90);
        setProp(_el$9, "y", 104);
        setProp(_el$9, "contain", "width");
        setProp(_el$9, "width", 160);
        setProp(_el$9, "fontSize", 12);
        effect(_p$ => {
            var _v$ = props.showWidgets ? 1 : 0, _v$2 = theme_default.textSecondary, _v$3 = theme_default.textSecondary;
            _v$ !== _p$.e && (_p$.e = setProp(_el$4, "alpha", _v$, _p$.e));
            _v$2 !== _p$.t && (_p$.t = setProp(_el$5, "color", _v$2, _p$.t));
            _v$3 !== _p$.a && (_p$.a = setProp(_el$9, "color", _v$3, _p$.a));
            return _p$;
        }, {
            e: void 0,
            t: void 0,
            a: void 0
        });
        return _el$4;
    })(), createComponent(Column, mergeProps(props, {
        onFocus: onFocus,
        onBlur: onBlur,
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
    })), (() => {
        var _el$1 = createElement("view");
        var _ref$ = backdrop;
        typeof _ref$ === "function" ? use(_ref$, _el$1) : backdrop = _el$1;
        setProp(_el$1, "skipFocus", true);
        effect(_$p => setProp(_el$1, "style", NavDrawer_styles_default.Gradient, _$p));
        return _el$1;
    })(), (() => {
        var _el$10 = createElement("view");
        setProp(_el$10, "width", 4);
        setProp(_el$10, "height", 56);
        setProp(_el$10, "color", 4294967295);
        setProp(_el$10, "x", 22);
        setProp(_el$10, "zIndex", 100);
        effect(_$p => setProp(_el$10, "y", selectedButton(), _$p));
        return _el$10;
    })() ];
}

var LeftNavWrapper = props => {
    const navigate = useNavigate();
    const announcer = useAnnouncer();
    announcer.debug = true;
    announcer.enabled = false;
    let navDrawer, lastFocused;
    setupFPS({
        renderer: renderer
    });
    function focusNavDrawer() {
        if (navDrawer.states.has("focus")) return false;
        lastFocused = activeElement();
        return navDrawer.setFocus();
    }
    const [showWidgets, setShowWidgets] = createSignal(true);
    const location = useLocation();
    const showOnPaths = [ "/browse", "/entity" ];
    createEffect(() => {
        const currentPath = location.pathname;
        let matchesPartial = showOnPaths.some(path => currentPath.startsWith(path));
        if (currentPath === "/") matchesPartial = true;
        setShowWidgets(matchesPartial);
    });
    const [lastKey, setLastKey] = createSignal("Last key: undefined");
    const [lastError, setLastError] = createSignal();
    const keyPressHandler = e => {
        setLastKey(`Last key: ${e.key}, Code: ${e.keyCode}`);
    };
    document.addEventListener("keydown", keyPressHandler);
    const displayError = e => {
        setLastError(p => (p || "") + "\n" + e.message);
    };
    document.addEventListener("onerror", displayError);
    const windowSize = `${window.innerWidth}x${window.innerHeight}`;
    onCleanup(() => {
        document.removeEventListener("onerror", displayError);
        document.removeEventListener("keydown", keyPressHandler);
    });
    let pageContainer;
    return (() => {
        var _el$ = createElement("view"), _el$2 = createElement("view"), _el$3 = createElement("text"), _el$4 = createTextNode(`Window Size: `), _el$5 = createElement("text"), _el$6 = createElement("text"), _el$7 = createElement("view");
        insertNode(_el$, _el$2);
        insertNode(_el$, _el$6);
        insertNode(_el$, _el$7);
        var _ref$ = window.APP;
        typeof _ref$ === "function" ? use(_ref$, _el$) : window.APP = _el$;
        setProp(_el$, "onAnnouncer", () => {
            announcer.enabled = !announcer.enabled;
            return true;
        });
        setProp(_el$, "onLast", () => {
            history.back();
            return true;
        });
        setProp(_el$, "onMenu", () => {
            navigate("/");
            return true;
        });
        setProp(_el$, "onBack", () => {
            if (navDrawer.states.has("focus")) navigate(-1); else focusNavDrawer();
            return true;
        });
        setProp(_el$, "style", {
            width: 1920,
            height: 1080
        });
        setProp(_el$, "onLeft", () => {
            focusNavDrawer();
            return true;
        });
        setProp(_el$, "onRight", () => {
            if (navDrawer.states.has("focus")) {
                (lastFocused || pageContainer).setFocus();
                return true;
            }
        });
        insert(_el$, createComponent(Background, {}), _el$2);
        insert(_el$, createComponent(FPSCounter, {
            mountX: 1,
            x: 1910,
            y: 10,
            alpha: 1
        }), _el$2);
        insertNode(_el$2, _el$3);
        insertNode(_el$2, _el$5);
        setProp(_el$2, "mountX", 1);
        setProp(_el$2, "display", "flex");
        setProp(_el$2, "flexDirection", "column");
        setProp(_el$2, "width", 330);
        setProp(_el$2, "height", 50);
        setProp(_el$2, "x", 1910);
        setProp(_el$2, "y", 212);
        setProp(_el$2, "color", 255);
        insertNode(_el$3, _el$4);
        setProp(_el$3, "x", 8);
        setProp(_el$3, "fontSize", 15);
        insert(_el$3, windowSize, null);
        setProp(_el$5, "x", 8);
        setProp(_el$5, "fontSize", 15);
        insert(_el$5, lastKey);
        setProp(_el$6, "x", 270);
        setProp(_el$6, "y", 20);
        setProp(_el$6, "fontSize", 24);
        setProp(_el$6, "contain", "width");
        setProp(_el$6, "width", 800);
        insert(_el$6, lastError);
        insert(_el$, createComponent(NavDrawer, {
            ref(r$) {
                var _ref$2 = navDrawer;
                typeof _ref$2 === "function" ? _ref$2(r$) : navDrawer = r$;
            },
            focusPage: () => lastFocused.setFocus(),
            get showWidgets() {
                return showWidgets();
            }
        }), _el$7);
        var _ref$3 = pageContainer;
        typeof _ref$3 === "function" ? use(_ref$3, _el$7) : pageContainer = _el$7;
        setProp(_el$7, "id", "pageContainer");
        setProp(_el$7, "forwardFocus", 0);
        insert(_el$7, () => props.children);
        effect(_$p => setProp(_el$2, "hidden", !showWidgets(), _$p));
        return _el$;
    })();
};

var scriptRel = "modulepreload";

var assetsURL = function(dep) {
    return "/solid-demo-app/" + dep;
};

var seen = {};

var __vitePreload = function preload(baseModule, deps, importerUrl) {
    let promise = Promise.resolve();
    if (true && deps && deps.length > 0) {
        const links = document.getElementsByTagName("link");
        const cspNonceMeta = document.querySelector("meta[property=csp-nonce]");
        const cspNonce = (cspNonceMeta == null ? void 0 : cspNonceMeta.nonce) || (cspNonceMeta == null ? void 0 : cspNonceMeta.getAttribute("nonce"));
        function allSettled(promises) {
            return Promise.all(promises.map(p => Promise.resolve(p).then(value => ({
                status: "fulfilled",
                value: value
            }), reason => ({
                status: "rejected",
                reason: reason
            }))));
        }
        function importMetaResolve(specifier) {
            if (import.meta.resolve) return import.meta.resolve(specifier);
            return new URL(specifier, import.meta.url).href;
        }
        promise = allSettled(deps.map(dep => {
            dep = assetsURL(dep, importerUrl);
            dep = importMetaResolve(dep);
            if (dep in seen) return;
            seen[dep] = true;
            const isCss = dep.endsWith(".css");
            for (let i = links.length - 1; i >= 0; i--) {
                const link = links[i];
                if (link.href === dep && (!isCss || link.rel === "stylesheet")) return;
            }
            const link = document.createElement("link");
            link.rel = isCss ? "stylesheet" : scriptRel;
            if (!isCss) link.as = "script";
            link.crossOrigin = "";
            link.href = dep;
            if (cspNonce) link.setAttribute("nonce", cspNonce);
            document.head.appendChild(link);
            if (isCss) return new Promise((res, rej) => {
                link.addEventListener("load", res);
                link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
            });
        }));
    }
    function handlePreloadError(err) {
        const e = new Event("vite:preloadError", {
            cancelable: true
        });
        e.payload = err;
        window.dispatchEvent(e);
        if (!e.defaultPrevented) throw err;
    }
    return promise.then(res => {
        for (const item of res || []) {
            if (item.status !== "rejected") continue;
            handlePreloadError(item.reason);
        }
        return baseModule().catch(handlePreloadError);
    });
};

(function() {
    const originalGetOwnPropertyNames = Object.getOwnPropertyNames;
    Object.getOwnPropertyNames = function(obj) {
        const names = originalGetOwnPropertyNames(obj);
        if (obj && (typeof obj === "function" || Object.prototype.toString.call(obj) === "[object Arguments]")) return names.filter(function(name) {
            return name !== "caller" && name !== "callee" && name !== "arguments";
        });
        return names;
    };
})();

window.bundleType = false ? "LEGACY (nomodule)" : "MODERN (module)";

console.log(`[bundle] Loaded ${window.bundleType} build`);

var Player = lazy(() => __vitePreload(() => import("./Player-DrpJfA4q.js"), __vite__mapDeps([0,1,2,3,4,5])));

var Grid = lazy(() => __vitePreload(() => import("./Grid-HqoCwlVD.js"), __vite__mapDeps([6,1,7,2,8,9,5])));

var Loops = lazy(() => __vitePreload(() => import("./Loops-BINAYYyl.js"), __vite__mapDeps([10,1,11,8,2,7,12,13,14,9,5])));

var Infinite = lazy(() => __vitePreload(() => import("./Infinite-CnRA_s0z.js"), __vite__mapDeps([15,1,13,2,8,7,12,14,9,5])));

var TMDBGrid = lazy(() => __vitePreload(() => import("./TMDBGrid-B9ayFfHA.js"), __vite__mapDeps([16,1,8,2,17,9,13,7,12,14,5,18])));

var Portal = lazy(() => __vitePreload(() => import("./Portal-D3c0357L.js"), __vite__mapDeps([19,1,20,7,2,8,12,21,3,4,14,9])));

var MatrixPage = lazy(() => __vitePreload(() => import("./Matrix-Bnf3s25r.js"), __vite__mapDeps([22,1,7,2,8,12])));

var TextPage = lazy(() => __vitePreload(() => import("./Text-DcKkcyC5.js"), __vite__mapDeps([23,1,2,5])));

var TextPosterPage = lazy(() => __vitePreload(() => import("./TextPoster-CDcYAwSB.js"), __vite__mapDeps([24,1,12,2,8,5])));

var CreatePage = lazy(() => __vitePreload(() => import("./Create-Dv_BWrxV.js"), __vite__mapDeps([25,1,2,5])));

var ViewportPage = lazy(() => __vitePreload(() => import("./Viewport-CIaBicnz.js"), __vite__mapDeps([26,1,5])));

var PositioningPage = lazy(() => __vitePreload(() => import("./Positioning-Cm2SRvMA.js"), __vite__mapDeps([27,1,5])));

var LayoutPage = lazy(() => __vitePreload(() => import("./Layout-iHB4CAU4.js"), __vite__mapDeps([28,1,13,2,8,7,12,14,9,5])));

var FocusBasicsPage = lazy(() => __vitePreload(() => import("./FocusBasics-Bk6H2fLY.js"), __vite__mapDeps([29,1,12,2,8,13,7,14,9,5])));

var KeyHandlingPage = lazy(() => __vitePreload(() => import("./KeyHandling-B8YTsDsQ.js"), __vite__mapDeps([30,1,13,2,8,7,12,14,9,5])));

var TransitionsPage = lazy(() => __vitePreload(() => import("./Transitions-CDPGztut.js"), __vite__mapDeps([31,1,5])));

var ComponentsPage = lazy(() => __vitePreload(() => import("./Components-C2sj_lP9.js"), __vite__mapDeps([32,1,13,2,8,7,12,14,9,5])));

var FocusHandlingPage = lazy(() => __vitePreload(() => import("./FocusHandling-CnvOGnPY.js"), __vite__mapDeps([33,1,7,2,8,12,5])));

var GradientsPage = lazy(() => __vitePreload(() => import("./Gradients-N9Y2LMrL.js"), __vite__mapDeps([34,1,5])));

var FlexPage = lazy(() => __vitePreload(() => import("./Flex-GbiwJ_px.js"), __vite__mapDeps([35,1,7,2,8,12,14,9,5])));

var FlexGrowPage = lazy(() => __vitePreload(() => import("./FlexGrow-CIIgaeJ3.js"), __vite__mapDeps([36,1,7,2,8,12,14,9,5])));

var FlexMenuPage = lazy(() => __vitePreload(() => import("./FlexMenu-Bz9OPBYN.js"), __vite__mapDeps([37,1,7,2,8,5])));

var FlexSizePage = lazy(() => __vitePreload(() => import("./FlexSize-DK98TNAv.js"), __vite__mapDeps([38,1,7,2,8,12,14,9,5])));

var FlexColumnSizePage = lazy(() => __vitePreload(() => import("./FlexColumnSize-FW2Ycvom.js"), __vite__mapDeps([39,1,2,7,8,12,5])));

var FlexColumnPage = lazy(() => __vitePreload(() => import("./FlexColumn-BOUzOSvS.js"), __vite__mapDeps([40,1,2,7,8,12,5])));

var ButtonsMaterialPage = lazy(() => __vitePreload(() => import("./ButtonsMaterial-Dfp7n3JB.js"), __vite__mapDeps([41,1,2,12,8,14,9])));

var SuperFlexPage = lazy(() => __vitePreload(() => import("./SuperFlex-DJSXRQKf.js"), __vite__mapDeps([42,1,7,2,8,12])));

var Entity = lazy(() => __vitePreload(() => import("./Entity-2T5cM3Pu.js"), __vite__mapDeps([43,1,7,2,8,12,17,9,13,14,3,4,5])));

var People = lazy(() => __vitePreload(() => import("./People-DemO_034.js"), __vite__mapDeps([44,1,7,2,8,13,12,14,9,3,4,5,45,46])));

var FireboltPage = lazy(() => __vitePreload(() => import("./Firebolt-B6GygxF0.js"), __vite__mapDeps([47,1,12,2,8,5])));

var LoginPage = lazy(() => __vitePreload(() => import("./Login-f9DrcVsp.js"), __vite__mapDeps([48,1,8,2,7,12,5])));

var VirtualPage = lazy(() => __vitePreload(() => import("./Virtual-ClAkXuYg.js"), __vite__mapDeps([49,1,11,8,2,7,12,13,14,9,5])));

var TagsPage = lazy(() => __vitePreload(() => import("./Tags-DcMT21Fb.js"), __vite__mapDeps([50,1,5])));

var ImagePerformance = lazy(() => __vitePreload(() => import("./ImagePerformance-DlNhEyJq.js"), __vite__mapDeps([51,1,45,52])));

var LargeImagePerformance = lazy(() => __vitePreload(() => import("./LargeImagePerformance-CD14ihjA.js"), __vite__mapDeps([53,1,45,52])));

var MixedImagePerformance = lazy(() => __vitePreload(() => import("./MixedImagePerformance-D4riSXlf.js"), __vite__mapDeps([54,1,45,52])));

var TextureCompressionPerformance = lazy(() => __vitePreload(() => import("./TextureCompressionPerformance-BCXMspzU.js"), __vite__mapDeps([55,1])));

var ComplexFlexPage = lazy(() => __vitePreload(() => import("./ComplexFlex-Qa4a3KLY.js"), __vite__mapDeps([56,1,7,2,8,12])));

var ComplexFlexCapsPage = lazy(() => __vitePreload(() => import("./ComplexFlexCaps-0KPe2JAU.js"), __vite__mapDeps([57,1,7,2,8,12])));

var BenchmarkPage = lazy(() => __vitePreload(() => import("./Benchmark-CZfuiUAO.js"), __vite__mapDeps([58,1,11,8,2,7,12,59,17,9,21,13,14,5,18])));

var RendererVersionsPage = lazy(() => __vitePreload(() => import("./RendererVersions-Cnnx0NAl.js"), __vite__mapDeps([60,1,5])));

var TextCenteringPage = lazy(() => __vitePreload(() => import("./TextCentering-GJTn8lz6.js"), __vite__mapDeps([61,1,9,5])));

var CountdownTimerPage = lazy(() => __vitePreload(() => import("./CountdownTimer-zAWeqbOV.js"), __vite__mapDeps([62,1,9,5])));

var CustomButtonsPage = lazy(() => __vitePreload(() => import("./CustomButtons-C1NiBi5S.js"), __vite__mapDeps([63,1,7,2,8,12,64,9,5])));

var numImageWorkers = typeof window !== "undefined" && window.createImageBitmap ? 1 : 0;

var urlParams = new URLSearchParams(window.location.search);

var numWorkers = urlParams.get("numImageWorkers");

var screenSize = urlParams.get("size") || "default";

var rendererMode = urlParams.get("mode") || "webgl";

var animationsEnabled = urlParams.get("animate") || "true";

var enableContextSpy = urlParams.get("contextSpy") === "true";

var forceWebGL2 = urlParams.get("webgl2") === "true";

var textBaseline = urlParams.get("textBaseline");

if (numWorkers) numImageWorkers = parseInt(numWorkers);

var devicePhysicalPixelRatio = {
    low: .666667,
    medium: .8,
    high: 1,
    xhigh: 1.5,
    ultra: 2,
    default: window.devicePixelRatio || 1
}[screenSize];

Config.debug = false;

Config.animationsEnabled = animationsEnabled === "true";

Config.fontSettings.fontFamily = "Roboto";

Config.fontSettings.color = theme_default.textPrimary;

Config.fontSettings.fontSize = 32;

Config.domRendererEnabled = false;

Config.focusHistoryDebug = 5;

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
    imageDecodeConcurrency: typeof window !== "undefined" && window.createImageBitmap ? 4 : 2,
    deviceLogicalPixelRatio: window.innerHeight / 1080,
    devicePhysicalPixelRatio: devicePhysicalPixelRatio !== null && devicePhysicalPixelRatio !== void 0 ? devicePhysicalPixelRatio : 1,
    createImageBitmapSupport: "auto",
    boundsMargin: 100,
    targetFPS: 0,
    enableClear: true,
    enableContextSpy: enableContextSpy,
    forceWebGL2: forceWebGL2
};

if (textBaseline) Config.rendererOptions.textBaselineMode = textBaseline;

if (rendererMode === "canvas") {
    Config.rendererOptions.fontEngines = [ CanvasTextRenderer ];
    Config.rendererOptions.renderEngine = CanvasRenderer;
} else {
    Config.rendererOptions.fontEngines = [ SdfTextRenderer ];
    Config.rendererOptions.renderEngine = WebGlRenderer;
}

requestAnimationFrame(() => {
    setTimeout(() => {
        const {renderer: renderer, render: render} = createRenderer();
        let idleFired = false;
        renderer.on("idle", () => {
            if (!idleFired) {
                idleFired = true;
                const splash = document.getElementById("splash");
                if (splash) {
                    splash.classList.add("fade-out");
                    setTimeout(() => {
                        splash.remove();
                    }, 500);
                }
            }
        });
        loadFonts(fonts_default);
        const shManager = renderer.stage.shManager;
        shManager.registerShaderType("rounded", Rounded);
        shManager.registerShaderType("roundedWithBorder", RoundedWithBorder);
        shManager.registerShaderType("roundedWithShadow", RoundedWithShadow);
        shManager.registerShaderType("roundedWithBorderWithShadow", RoundedWithBorderAndShadow);
        shManager.registerShaderType("radialGradient", RadialGradient);
        shManager.registerShaderType("linearGradient", LinearGradient);
        shManager.registerShaderType("holePunch", HolePunch);
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
                                        return lazy(() => __vitePreload(() => import("./Nested-Cp9J_Ekk.js"), __vite__mapDeps([65,1,7,2,8,13,12,14,9,5])));
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
                                        return lazy(() => __vitePreload(() => import("./KeepAlive-CJjOwA7S.js"), __vite__mapDeps([66,1])));
                                    }
                                }), createComponent(Route, {
                                    path: "suspense",
                                    get component() {
                                        return lazy(() => __vitePreload(() => import("./suspense-Dx_AtUT5.js"), __vite__mapDeps([67,1,5])));
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

export { __toESM as n, __commonJSMin as t };