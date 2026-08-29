const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Player-dEgQmzj3.js","assets/render-T82LYRez.js","assets/utils-Cg2cS0Fc.js","assets/routing-DuJyV3kB.js","assets/web-D_Lor4zg.js","assets/state-mDNTraD8.js","assets/Grid-D4IJ5IME.js","assets/Column-U9Hqwwgu.js","assets/mergeProps-CezQW3Bh.js","assets/chainFunctions-Bhk6H0hc.js","assets/theme-CB9u0IsU.js","assets/Loops-B8ph1hOT.js","assets/Lazy-3u8IL4GS.js","assets/Row-Buh_0LSZ.js","assets/components-BSO2zKH4.js","assets/styles-BcDKugwt.js","assets/Infinite-CTayA1I1.js","assets/TMDBGrid-D3w2-LdL.js","assets/ContentBlock-C6RyPFTy.js","assets/dist-BDOClN2r.js","assets/Portal-QNQntL5O.js","assets/announcer-DQYFkJiI.js","assets/createFocusStack-DTfQLA5j.js","assets/Matrix-swTgY3yo.js","assets/Text-DHO1lRDk.js","assets/TextPoster-VbzKmb5z.js","assets/Create-DGq3Z_IE.js","assets/Viewport-CdGJ-3Zs.js","assets/Positioning-CJZ6Gkjo.js","assets/Layout-qLMB9l2E.js","assets/FocusBasics-C6p4xXUu.js","assets/KeyHandling-DLnI8VDR.js","assets/Transitions-DsNptJGg.js","assets/Components-CtBNcF2b.js","assets/FocusHandling-De1DFAeB.js","assets/Gradients-S-AwoJf9.js","assets/Flex-Ff5NvGvB.js","assets/FlexGrow-DdKFZPVw.js","assets/FlexMenu-Gj9RTVnk.js","assets/FlexSize-BcanYEda.js","assets/FlexColumnSize-ujmqogxq.js","assets/FlexColumn-DHoXwwCg.js","assets/ButtonsMaterial-CyOSd9xQ.js","assets/SuperFlex-B_iuZTIG.js","assets/Entity-BxFGjRdI.js","assets/People-Bt6y42NB.js","assets/api-BiLDTsHT.js","assets/ItemFormatter-lXFN0A51.js","assets/Firebolt-c57yJ44Q.js","assets/Login-_NT6LnPQ.js","assets/Virtual-Lj6nPcbz.js","assets/Tags-JlYOZwNS.js","assets/ImagePerformance-oUyF44bg.js","assets/LargeImagePerformance-wr89gJOj.js","assets/MixedImagePerformance-pksPt48x.js","assets/TextureCompressionPerformance-UJ_PpabB.js","assets/ComplexFlex-CtuLfPX_.js","assets/ComplexFlexCaps-Bs-pZbtL.js","assets/Benchmark-oggw0te1.js","assets/FPSCounter-DvNK2rMu.js","assets/RendererVersions-Be48z3F6.js","assets/TextCentering-B02ombz6.js","assets/CountdownTimer-Bf-qzWQE.js","assets/CustomButtons-CGeqIB51.js","assets/Icon-yREVc_JX.js","assets/Nested-ChEUo2IJ.js","assets/KeepAlive-gnK3xWfK.js","assets/suspense-CWw2-y9N.js"])))=>i.map(i=>d[i]);
import 'data:text/javascript,"assets/index-BqAAwcha.js";if(!import.meta.resolve)throw Error("import.meta.resolve not supported")';

export function __vite_legacy_guard() {
    import.meta.url;
    import("_").catch(() => 1);
    (async function*() {})().next();
}

import { $ as onMount, C as isElementNode, Ct as compareRect, D as Config, Dt as assertTruthy, Et as DIRTY_QUAD_BUFFER, G as createRoot, H as createMemo, I as batch, J as getListener, L as children, N as Show, O as activeElement, Ot as createWebGLContext, Q as onCleanup, S as hasFocus, St as clampUnit, T as isFunction, Tt as TextureType, V as createEffect, W as createResource, X as mergeProps, Y as getOwner, Z as on, _ as ElementNode, _t as WORDS_PER_QUAD, a as createElement, b as loadFonts, bt as isHTMLImageElement, c as effect, ct as defaultFontMetrics, d as memo, dt as CoreShaderNode, f as rootNode, ft as uploadCompressedTexture, g as use, gt as UNIT_TEXTURE_COORDS, h as spread, ht as MAX_QUAD_BUFFER_SIZE, i as createComponent, it as untrack, l as insert, lt as mapTextLayout, m as setProp, mt as MAX_QUADS, nt as sharedConfig, o as createRenderer, ot as takeCanvasPrefetch, pt as UpdateType, q as createSignal, s as createTextNode, st as takeSdfPrefetch, tt as runWithOwner, u as insertNode, ut as normalizeFontMetrics, v as focusPath, vt as createIndexBuffer, wt as getNormalizedRgbaComponents, x as renderer, xt as calcFactoredRadiusArray, y as useFocusManager, yt as createTextureCoords, z as createComputed } from "./render-T82LYRez.js";

import { n as combineStyles, t as clamp } from "./utils-Cg2cS0Fc.js";

import { t as mergeProps$1 } from "./mergeProps-CezQW3Bh.js";

import { n as createScheduled, r as throttle, t as Announcer } from "./announcer-DQYFkJiI.js";

import { t as voidFn } from "./web-D_Lor4zg.js";

import { n as LazyRow, t as LazyColumn } from "./Lazy-3u8IL4GS.js";

import { a as withScrolling, d as navigableForwardFocus, f as navigableHandleNavigation, n as chainRefs, t as chainFunctions } from "./chainFunctions-Bhk6H0hc.js";

import { t as Column } from "./Column-U9Hqwwgu.js";

import { r as setupFPS, t as FPSCounter } from "./FPSCounter-DvNK2rMu.js";

import { t as ContentBlock } from "./ContentBlock-C6RyPFTy.js";

import { n as useFocusStack, t as FocusStackProvider } from "./createFocusStack-DTfQLA5j.js";

import { a as Hero, c as Thumbnail, d as List, t as AssetPanel, u as TitleRow } from "./components-BSO2zKH4.js";

import { t as Icon } from "./Icon-yREVc_JX.js";

import { _ as saveCurrentDepth, a as createRouterContext, c as setInPreloadFn, d as useNavigate, g as notifyIfNotBlocked, h as keepDepth, i as createRouteContext, l as useLocation, m as createBeforeLeave, n as RouterContextObj, o as getIntent, p as usePreloadRoute, r as createBranches, s as getRouteMatches, t as RouteContextObj, u as useMatch } from "./routing-DuJyV3kB.js";

import { t as theme_default } from "./theme-CB9u0IsU.js";

import { r as styles_default } from "./styles-BcDKugwt.js";

import { n as setGlobalBackground, t as globalBackground } from "./state-mDNTraD8.js";

import { t as debounce } from "./dist-BDOClN2r.js";

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
    constructor(options) {
        this.options = void 0;
        this.mode = void 0;
        this.defaultTextureCoords = void 0;
        this.stage = void 0;
        this.options = options;
        this.stage = options.stage;
    }
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
            default: 1,
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
            default: [ 0, 0, 5, 5 ],
            resolve(value) {
                if (value !== void 0) return validateArrayLength4(value);
                return [].concat(this.default);
            }
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
            default: 5,
            set(value, props) {
                props[projection][2] = value;
            },
            get(props) {
                return props[projection][2];
            }
        },
        [pf + "spread"]: {
            default: 5,
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
        this.uniforms = {
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
                    return;
                }
                const prevKey = this.valueKey;
                this.valueKey = this.createValueKey();
                if (prevKey === this.valueKey) return;
                if (prevKey.length > 0) this.stage.shManager.mutateShaderValueUsage(prevKey, -1);
                const values = this.stage.shManager.getShaderValues(this.valueKey);
                if (values !== void 0) {
                    this.uniforms = values;
                    return;
                }
                this.uniforms = {
                    single: {},
                    vec2: {},
                    vec3: {},
                    vec4: {}
                };
                this.updater(this.node);
                this.stage.shManager.setShaderValues(this.valueKey, this.uniforms);
            };
        }
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

function genGradientColors(stops) {
    let result = `vec4 colorOut = u_colors[0];`;
    for (let i = 1; i < stops; i++) result += `\n      colorOut = mix(colorOut, u_colors[${i}], smoothstep(u_stops[${i - 1}], u_stops[${i}], dist));`;
    return result;
}

var WebGlShaderProgram = class {
    constructor(renderer, config, resolvedProps) {
        this.program = void 0;
        this.renderer = void 0;
        this.glw = void 0;
        this.attributeLocations = void 0;
        this.uniformLocations = void 0;
        this.lifecycle = void 0;
        this.useSystemAlpha = false;
        this.useSystemDimensions = false;
        this.useSystemTranslate = false;
        this.useTimeValue = false;
        this.isDestroyed = false;
        this.supportsIndexedTextures = false;
        this.lastBoundUniforms = null;
        this.lastPixelRatio = -1;
        this.lastResolutionW = -1;
        this.lastResolutionH = -1;
        this.lastAlpha = -1;
        this.lastDimensionsW = -1;
        this.lastDimensionsH = -1;
        this.lastTime = -1;
        this.lastTranslateX = NaN;
        this.lastTranslateY = NaN;
        this.vaos = new Map;
        this.renderer = renderer;
        const glw = this.glw = renderer.glw;
        this.supportsIndexedTextures = config.supportsIndexedTextures || this.supportsIndexedTextures;
        (config.webgl1Extensions || []).forEach(extensionName => {
            if (!glw.getExtension(extensionName)) throw new Error(`Shader "${this.constructor.name}" requires extension "${extensionName}" for WebGL 1.0 but wasn't found`);
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
        this.useSystemTranslate = uniLocs["u_translate"] !== void 0;
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
    bindRenderOp(renderOp, buffer) {
        this.bindTexture(renderOp.renderOpTexture);
        this.bindBufferCollection(buffer);
        const pixelRatio = renderOp.stage.pixelRatio;
        const resolutionW = this.glw.canvasW;
        const resolutionH = this.glw.canvasH;
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
        if (this.useSystemDimensions === true && (renderOp.w !== this.lastDimensionsW || renderOp.h !== this.lastDimensionsH)) {
            this.glw.uniform2f("u_dimensions", renderOp.w, renderOp.h);
            this.lastDimensionsW = renderOp.w;
            this.lastDimensionsH = renderOp.h;
        }
        if (this.useSystemTranslate === true) {
            const op = renderOp;
            if (op.translateX !== this.lastTranslateX || op.translateY !== this.lastTranslateY) {
                this.glw.uniform2f("u_translate", op.translateX, op.translateY);
                this.lastTranslateX = op.translateX;
                this.lastTranslateY = op.translateY;
            }
        }
        const shader = renderOp.shader;
        if (shader.props !== void 0) {
            const uniforms = shader.uniforms;
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
        if (glw.canUseVertexArrayObject === true) {
            let vao = this.vaos.get(buffer);
            if (vao === void 0) {
                vao = this.createVao(buffer);
                this.vaos.set(buffer, vao);
            }
            if (vao !== null) {
                glw.bindVertexArray(vao);
                return;
            }
            glw.bindVertexArray(null);
        }
        this.bindAttributes(buffer);
    }
    bindAttributes(buffer) {
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
    createVao(buffer) {
        const {glw: glw} = this;
        const vao = glw.createVertexArray();
        if (vao === null) return null;
        glw.bindVertexArray(vao);
        this.bindAttributes(buffer);
        glw.bindElementArrayBuffer(this.renderer.indexBuffer);
        return vao;
    }
    bindTexture(texture) {
        if (texture === null || texture === void 0) return;
        this.glw.activeTexture(0);
        this.glw.bindTexture(texture.ctxTexture);
    }
    attach() {
        if (this.isDestroyed === true) return;
        this.glw.useProgram(this.program, this.uniformLocations);
    }
    detach() {
        if (this.glw.canUseVertexArrayObject === true) return;
        this.disableAttributes();
    }
    destroy() {
        if (this.isDestroyed === true) return;
        const glw = this.glw;
        this.detach();
        for (const vao of this.vaos.values()) if (vao !== null) glw.deleteVertexArray(vao);
        this.vaos.clear();
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
    vertex: `\n  # ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  # else\n  precision mediump float;\n  # endif\n\n  attribute vec2 a_position;\n  attribute vec2 a_textureCoords;\n  attribute vec4 a_color;\n  attribute vec2 a_nodeCoords;\n\n  uniform vec2 u_resolution;\n  uniform float u_pixelRatio;\n\n  varying vec4 v_color;\n  varying vec2 v_textureCoords;\n  varying vec2 v_nodeCoords;\n\n  void main() {\n    vec2 normalized = a_position * u_pixelRatio;\n    vec2 screenSpace = vec2(2.0 / u_resolution.x, -2.0 / u_resolution.y);\n\n    v_color = a_color;\n    v_nodeCoords = a_nodeCoords;\n    v_textureCoords = a_textureCoords;\n\n    gl_Position = vec4(\n      normalized.x * screenSpace.x - 1.0,\n      normalized.y * -abs(screenSpace.y) + 1.0,\n      0.0,\n      1.0\n    );\n  }\n`,
    fragment: `\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    uniform vec2 u_dimensions;\n    uniform float u_alpha;\n    uniform float u_pixelRatio;\n    uniform sampler2D u_texture;\n    uniform vec4 u_radius;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n    varying vec2 v_nodeCoords;\n\n    void main() {\n      vec2 halfDimensions = u_dimensions * 0.5;\n      vec2 boxUv = v_nodeCoords * u_dimensions - halfDimensions;\n\n      // Branchless radius selection based on quadrant\n      // x: TL, y: TR, z: BR, w: BL\n      vec2 stepVal = step(vec2(0.0), boxUv);\n      float r = mix(\n        mix(u_radius.x, u_radius.y, stepVal.x),\n        mix(u_radius.w, u_radius.z, stepVal.x),\n        stepVal.y\n      );\n\n      vec2 q = abs(boxUv) - halfDimensions + r;\n      float d = min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r;\n\n      float edgeWidth = 1.0 / u_pixelRatio;\n      float alpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, d);\n\n      vec4 color = texture2D(u_texture, v_textureCoords) * v_color;\n      gl_FragColor = color * alpha * u_alpha;\n    }\n  `
};

var props$2 = Object.assign({}, RoundedTemplate.props, getBorderProps("border"), {
    "border-fill": 0
});

var RoundedWithBorderTemplate = {
    props: props$2
};

var RoundedWithBorder = {
    props: RoundedWithBorderTemplate.props,
    update(node) {
        this.uniformRGBA("u_borderColor", this.props["border-color"]);
        this.uniformRGBA("u_fillColor", this.props["border-fill"]);
        this.uniform4fa("u_borderWidth", this.props["border-w"]);
        this.uniform1f("u_borderGap", this.props["border-gap"]);
        this.uniform1f("u_borderAlign", this.props["border-align"]);
        this.uniform4fa("u_radius", calcFactoredRadiusArray(this.props.radius, node.w, node.h));
    },
    vertex: `\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    attribute vec2 a_position;\n    attribute vec2 a_textureCoords;\n    attribute vec4 a_color;\n    attribute vec2 a_nodeCoords;\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n    uniform vec2 u_dimensions;\n\n    uniform vec4 u_radius;\n    uniform vec4 u_borderWidth;\n    uniform float u_borderGap;\n    uniform float u_borderAlign;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n    varying vec2 v_nodeCoords;\n\n    varying vec2 v_innerSize;\n    varying vec2 v_outerSize;\n    varying vec2 v_outerBorderUv;\n    varying vec2 v_innerBorderUv;\n    varying vec4 v_innerBorderRadius;\n    varying vec4 v_outerBorderRadius;\n    varying vec2 v_halfDimensions;\n\n    void main() {\n      vec2 vertexPos = a_position * u_pixelRatio;\n      vec2 screenSpace = vec2(2.0 / u_resolution.x, -2.0 / u_resolution.y);\n      vec2 edge = clamp(a_nodeCoords * 2.0 - vec2(1.0), -1.0, 1.0);\n      vec2 edgeOffset = vec2(0.0);\n      float borderZero = 1.0 - step(0.001, dot(abs(u_borderWidth), vec4(1.0)));\n\n      v_innerSize = vec2(0.0);\n      v_outerSize = vec2(0.0);\n\n      // Defaults for the zero-border case. The fragment shader returns before\n      // reading these, so this is belt-and-braces — but an unwritten varying\n      // is undefined in GLSL ES 1.0 and would render garbage on Mali if a\n      // future edit moved a border SDF above that early return.\n      v_outerBorderUv = vec2(0.0);\n      v_innerBorderUv = vec2(0.0);\n      v_outerBorderRadius = u_radius;\n      v_innerBorderRadius = u_radius;\n\n      if(borderZero == 0.0) {\n        vec4 adjustedBorderWidth = u_borderWidth - 1.0 + clamp(u_borderWidth, -1.0, 1.0);\n\n        float borderTop = adjustedBorderWidth.x;\n        float borderRight = adjustedBorderWidth.y;\n        float borderBottom = adjustedBorderWidth.z;\n        float borderLeft = adjustedBorderWidth.w;\n\n        vec2 borderSize = vec2(borderRight + borderLeft, borderTop + borderBottom);\n        vec2 extraSize = borderSize * u_borderAlign;\n        float gapLeft = step(0.001, borderLeft) * u_borderGap;\n        float gapRight = step(0.001, borderRight) * u_borderGap;\n        float gapTop = step(0.001, borderTop) * u_borderGap;\n        float gapBottom = step(0.001, borderBottom) * u_borderGap;\n        vec2 gapSize = vec2(gapLeft + gapRight, gapTop + gapBottom);\n\n        v_outerSize = (u_dimensions + gapSize + extraSize) * 0.5;\n        v_innerSize = v_outerSize - borderSize * 0.5;\n\n        // Use sign() to avoid branching\n        vec2 borderDiff = vec2(borderRight - borderLeft, borderBottom - borderTop);\n        vec2 signDiff = sign(borderDiff);\n        borderDiff = abs(borderDiff);\n\n        vec2 gapDiff = vec2(gapRight - gapLeft, gapBottom - gapTop);\n        vec2 signGapDiff = sign(gapDiff);\n        gapDiff = abs(gapDiff);\n\n        v_outerBorderUv = -signDiff * borderDiff * u_borderAlign * 0.5 - signGapDiff * gapDiff * 0.5;\n        v_innerBorderUv = v_outerBorderUv + signDiff * borderDiff * 0.5;\n\n        v_outerBorderRadius = vec4(\n          max(0.0, u_radius.x + max(borderTop * u_borderAlign + u_borderGap, borderLeft * u_borderAlign + u_borderGap)),\n          max(0.0, u_radius.y + max(borderTop * u_borderAlign + u_borderGap, borderRight * u_borderAlign + u_borderGap)),\n          max(0.0, u_radius.z + max(borderBottom * u_borderAlign + u_borderGap, borderRight * u_borderAlign + u_borderGap)),\n          max(0.0, u_radius.w + max(borderBottom * u_borderAlign + u_borderGap, borderLeft * u_borderAlign + u_borderGap))\n        );\n\n        v_innerBorderRadius = vec4(\n          max(0.0, v_outerBorderRadius.x - max(borderTop, borderLeft)),\n          max(0.0, v_outerBorderRadius.y - max(borderTop, borderRight)),\n          max(0.0, v_outerBorderRadius.z - max(borderBottom, borderRight)),\n          max(0.0, v_outerBorderRadius.w - max(borderBottom, borderLeft))\n        );\n\n        vec2 edgeOffsetExtra = step(u_dimensions * 0.5, v_outerSize) * edge * (extraSize + u_borderGap);\n        edgeOffset = edgeOffsetExtra;\n\n        vertexPos = (a_position + edge + edgeOffset) * u_pixelRatio;\n      }\n\n      gl_Position = vec4(vertexPos.x * screenSpace.x - 1.0, -sign(screenSpace.y) * (vertexPos.y * -abs(screenSpace.y)) + 1.0, 0.0, 1.0);\n\n      v_color = a_color;\n      v_nodeCoords = a_nodeCoords + (screenSpace + edgeOffset) / (u_dimensions);\n      v_textureCoords = a_textureCoords + (screenSpace + edgeOffset) / (u_dimensions);\n\n      v_halfDimensions = u_dimensions * 0.5;\n    }\n  `,
    fragment: `\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n    uniform float u_alpha;\n    uniform vec2 u_dimensions;\n    uniform sampler2D u_texture;\n\n    uniform vec4 u_radius;\n    uniform vec4 u_borderWidth;\n    uniform vec4 u_borderColor;\n    uniform vec4 u_fillColor;\n    uniform float u_borderGap;\n    uniform float u_borderAlign;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n    varying vec2 v_nodeCoords;\n\n    varying vec2 v_innerSize;\n    varying vec2 v_outerSize;\n    varying vec2 v_outerBorderUv;\n    varying vec2 v_innerBorderUv;\n    varying vec4 v_innerBorderRadius;\n    varying vec4 v_outerBorderRadius;\n    varying vec2 v_halfDimensions;\n\n    // Branchless quadrant radius select (r: x TL, y TR, z BR, w BL). This one\n    // is driven by the fragment's own position, so it genuinely diverges per\n    // fragment -- it must stay arithmetic, ternaries included.\n    float quadRadius(vec2 p, vec4 r) {\n      vec2 stepVal = step(vec2(0.0), p);\n      return mix(mix(r.x, r.y, stepVal.x), mix(r.w, r.z, stepVal.x), stepVal.y);\n    }\n\n    float roundedBox(vec2 p, vec2 s, vec4 r) {\n      float rad = quadRadius(p, r);\n      vec2 q = abs(p) - s + rad;\n      return (min(max(q.x, q.y), 0.0) + length(max(q, 0.0))) - rad;\n    }\n\n    void main() {\n      vec4 color = texture2D(u_texture, v_textureCoords) * v_color;\n      vec2 boxUv = v_nodeCoords.xy * u_dimensions - v_halfDimensions;\n      float borderZero = 1.0 - step(0.001, dot(abs(u_borderWidth), vec4(1.0)));\n      float edgeWidth = 1.0 / u_pixelRatio;\n\n      // Degenerate case: no border. Every fragment in the draw call takes this\n      // path -- the condition is uniform-driven, so there is no divergence to\n      // serialize, and skipping the two border SDFs saves two length()/sqrt\n      // evaluations per fragment on what is the most common quad in a TV rail.\n      if (borderZero == 1.0) {\n        float nodeDist = roundedBox(boxUv, v_halfDimensions - edgeWidth, u_radius);\n        float nodeAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, nodeDist);\n        gl_FragColor = (color * nodeAlpha) * u_alpha;\n        return;\n      }\n\n      float outerDist = roundedBox(boxUv + v_outerBorderUv, v_outerSize - edgeWidth, v_outerBorderRadius);\n      float innerDist = roundedBox(boxUv + v_innerBorderUv, v_innerSize - edgeWidth, v_innerBorderRadius);\n      float innerAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, innerDist);\n\n      // Second uniform-driven degenerate case: a border with no gap composites\n      // straight from the outer and inner SDFs and never needs the node SDF.\n      // outerAlpha lives in here because only this path uses it.\n      if (abs(u_borderGap) < 0.0001) {\n        float outerAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, outerDist);\n        vec4 resNoGap = mix(vec4(0.0), u_borderColor, outerAlpha * u_borderColor.a);\n        resNoGap = mix(resNoGap, color, innerAlpha);\n        gl_FragColor = resNoGap * u_alpha;\n        return;\n      }\n\n      float nodeDist = roundedBox(boxUv, v_halfDimensions - edgeWidth, u_radius);\n      float nodeAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, nodeDist);\n\n      float gapAlpha = max(0.0, innerAlpha - nodeAlpha);\n      float borderDist = max(-innerDist, outerDist);\n      float borderAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, borderDist);\n\n      vec4 resGap = (color * nodeAlpha) + (u_fillColor * gapAlpha);\n      resGap = mix(resGap, u_borderColor, borderAlpha * u_borderColor.a);\n      gl_FragColor = resGap * u_alpha;\n    }\n  `
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
    vertex: `\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    attribute vec2 a_position;\n    attribute vec2 a_textureCoords;\n    attribute vec4 a_color;\n    attribute vec2 a_nodeCoords;\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n    uniform vec2 u_dimensions;\n\n    uniform vec4 u_shadow;\n    uniform vec4 u_radius;\n    uniform vec4 u_borderWidth;\n    uniform float u_borderGap;\n    uniform float u_borderAlign;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n    varying vec2 v_nodeCoords;\n\n    varying vec2 v_innerSize;\n    varying vec2 v_outerSize;\n    varying vec2 v_outerBorderUv;\n    varying vec2 v_innerBorderUv;\n    varying vec4 v_innerBorderRadius;\n    varying vec4 v_outerBorderRadius;\n    varying vec2 v_halfDimensions;\n\n    void main() {\n      vec2 screenSpace = vec2(2.0 / u_resolution.x,  -2.0 / u_resolution.y);\n      vec2 edge = clamp(a_nodeCoords * 2.0 - vec2(1.0), -1.0, 1.0);\n      float borderZero = 1.0 - step(0.001, dot(abs(u_borderWidth), vec4(1.0)));\n\n      vec2 edgeOffset = edge * ((u_shadow.w * 2.0)+ u_shadow.z) + u_shadow.xy;\n      vec2 vertexPos = (a_position + edge + edgeOffset) * u_pixelRatio;\n\n      v_innerSize = vec2(0.0);\n      v_outerSize = vec2(0.0);\n\n      // Defaults for the zero-border case. The fragment shader returns before\n      // reading these, so this is belt-and-braces — but an unwritten varying\n      // is undefined in GLSL ES 1.0 and would render garbage on Mali if a\n      // future edit moved a border SDF above that early return.\n      v_outerBorderUv = vec2(0.0);\n      v_innerBorderUv = vec2(0.0);\n      v_outerBorderRadius = u_radius;\n      v_innerBorderRadius = u_radius;\n\n      if(borderZero == 0.0) {\n        vec4 adjustedBorderWidth = u_borderWidth - 1.0 + clamp(u_borderWidth, -1.0, 1.0);\n\n        float borderTop = adjustedBorderWidth.x;\n        float borderRight = adjustedBorderWidth.y;\n        float borderBottom = adjustedBorderWidth.z;\n        float borderLeft = adjustedBorderWidth.w;\n\n        vec2 borderSize = vec2(borderRight + borderLeft, borderTop + borderBottom);\n        vec2 extraSize = borderSize * u_borderAlign;\n        float gapLeft = step(0.001, borderLeft) * u_borderGap;\n        float gapRight = step(0.001, borderRight) * u_borderGap;\n        float gapTop = step(0.001, borderTop) * u_borderGap;\n        float gapBottom = step(0.001, borderBottom) * u_borderGap;\n        vec2 gapSize = vec2(gapLeft + gapRight, gapTop + gapBottom);\n\n        v_outerSize = (u_dimensions + gapSize + extraSize) * 0.5;\n        v_innerSize = v_outerSize - borderSize * 0.5;\n\n        // Use sign() to avoid branching\n        vec2 borderDiff = vec2(borderRight - borderLeft, borderBottom - borderTop);\n        vec2 signDiff = sign(borderDiff);\n        borderDiff = abs(borderDiff);\n\n        vec2 gapDiff = vec2(gapRight - gapLeft, gapBottom - gapTop);\n        vec2 signGapDiff = sign(gapDiff);\n        gapDiff = abs(gapDiff);\n\n        v_outerBorderUv = -signDiff * borderDiff * u_borderAlign * 0.5 - signGapDiff * gapDiff * 0.5;\n        v_innerBorderUv = v_outerBorderUv + signDiff * borderDiff * 0.5;\n\n        v_outerBorderRadius = vec4(\n          max(0.0, u_radius.x + max(borderTop * u_borderAlign + u_borderGap, borderLeft * u_borderAlign + u_borderGap)),\n          max(0.0, u_radius.y + max(borderTop * u_borderAlign + u_borderGap, borderRight * u_borderAlign + u_borderGap)),\n          max(0.0, u_radius.z + max(borderBottom * u_borderAlign + u_borderGap, borderRight * u_borderAlign + u_borderGap)),\n          max(0.0, u_radius.w + max(borderBottom * u_borderAlign + u_borderGap, borderLeft * u_borderAlign + u_borderGap))\n        );\n\n        v_innerBorderRadius = vec4(\n          max(0.0, v_outerBorderRadius.x - max(borderTop, borderLeft)),\n          max(0.0, v_outerBorderRadius.y - max(borderTop, borderRight)),\n          max(0.0, v_outerBorderRadius.z - max(borderBottom, borderRight)),\n          max(0.0, v_outerBorderRadius.w - max(borderBottom, borderLeft))\n        );\n\n        vec2 edgeOffsetExtra = step(u_dimensions * 0.5, v_outerSize) * edge * (extraSize + u_borderGap);\n        edgeOffset += edgeOffsetExtra;\n\n        vertexPos = (a_position + edge + edgeOffset) * u_pixelRatio;\n      }\n\n      gl_Position = vec4(vertexPos.x * screenSpace.x - 1.0, -sign(screenSpace.y) * (vertexPos.y * -abs(screenSpace.y)) + 1.0, 0.0, 1.0);\n\n      v_halfDimensions = u_dimensions * 0.5;\n      v_color = a_color;\n      v_nodeCoords = a_nodeCoords + (screenSpace + edgeOffset) / (u_dimensions);\n      v_textureCoords = a_textureCoords + (screenSpace + edgeOffset) / (u_dimensions);\n    }\n  `,
    fragment: `\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n    uniform float u_alpha;\n    uniform vec2 u_dimensions;\n    uniform sampler2D u_texture;\n\n    uniform vec4 u_radius;\n    uniform vec4 u_borderWidth;\n    uniform vec4 u_borderColor;\n    uniform vec4 u_shadowColor;\n    uniform vec4 u_shadow;\n    uniform float u_borderGap;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n    varying vec2 v_nodeCoords;\n\n    varying vec2 v_innerSize;\n    varying vec2 v_outerSize;\n    varying vec2 v_outerBorderUv;\n    varying vec2 v_innerBorderUv;\n    varying vec4 v_innerBorderRadius;\n    varying vec4 v_outerBorderRadius;\n    varying vec2 v_halfDimensions;\n\n    // Branchless quadrant radius select (r: x TL, y TR, z BR, w BL) --\n    // Mali 400-class fragment pipelines serialize any branch, ternaries included.\n    float quadRadius(vec2 p, vec4 r) {\n      vec2 stepVal = step(vec2(0.0), p);\n      return mix(mix(r.x, r.y, stepVal.x), mix(r.w, r.z, stepVal.x), stepVal.y);\n    }\n\n    float roundedBox(vec2 p, vec2 s, vec4 r) {\n      float rad = quadRadius(p, r);\n      vec2 q = abs(p) - s + rad;\n      return (min(max(q.x, q.y), 0.0) + length(max(q, 0.0))) - rad;\n    }\n\n    float shadowBox(vec2 p, vec2 s, vec4 r) {\n      float rad = quadRadius(p, r);\n      vec2 q = abs(p) - s + rad;\n      float dist = min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - rad;\n      return 1.0 - smoothstep(-u_shadow.w, u_shadow.w + u_shadow.z, dist);\n    }\n\n    void main() {\n      vec4 color = texture2D(u_texture, v_textureCoords) * v_color;\n      vec2 boxUv = v_nodeCoords.xy * u_dimensions - v_halfDimensions;\n      float borderZero = 1.0 - step(0.001, dot(abs(u_borderWidth), vec4(1.0)));\n      float edgeWidth = 1.0 / u_pixelRatio;\n\n      // Degenerate case: no border. Uniform-driven, so the whole draw call\n      // takes it together -- no divergence to serialize -- and it drops the\n      // two border SDFs, halving the length()/sqrt count per fragment.\n      if (borderZero == 1.0) {\n        float nodeDist = roundedBox(boxUv, v_halfDimensions - edgeWidth, u_radius);\n        float nodeAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, nodeDist);\n        float shadowAlpha = shadowBox(\n          boxUv - u_shadow.xy,\n          v_halfDimensions + u_shadow.w - edgeWidth,\n          u_radius + u_shadow.z\n        );\n        gl_FragColor = mix(u_shadowColor * shadowAlpha, color, nodeAlpha) * u_alpha;\n        return;\n      }\n\n      // Shadow geometry select, branchless: when the border grows the quad\n      // beyond the node (outer size exceeds half dimensions on either axis)\n      // the shadow hugs the outer border box, otherwise the node box. Kept as\n      // a step()/mix() parameter select into ONE shadowBox call -- it picks\n      // arguments rather than skipping work, so a branch would buy nothing.\n      float outerSel = max(\n        step(v_halfDimensions.x, v_outerSize.x),\n        step(v_halfDimensions.y, v_outerSize.y)\n      );\n      float shadowAlpha = shadowBox(\n        boxUv + v_outerBorderUv * outerSel - u_shadow.xy,\n        mix(v_halfDimensions, v_outerSize, outerSel) + u_shadow.w - edgeWidth,\n        mix(u_radius, v_outerBorderRadius, outerSel) + u_shadow.z\n      );\n      vec4 shadowBase = u_shadowColor * shadowAlpha;\n\n      float outerDist = roundedBox(boxUv + v_outerBorderUv, v_outerSize - edgeWidth, v_outerBorderRadius);\n      float innerDist = roundedBox(boxUv + v_innerBorderUv, v_innerSize - edgeWidth, v_innerBorderRadius);\n\n      // Second uniform-driven degenerate case: a border with no gap never\n      // needs the node SDF. The edge alphas live in here because the gap path\n      // below composites from the raw distances instead.\n      if (abs(u_borderGap) < 0.0001) {\n        float outerAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, outerDist);\n        float innerAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, innerDist);\n        vec4 resNoGap = mix(shadowBase, u_borderColor, outerAlpha * u_borderColor.a);\n        resNoGap = mix(resNoGap, color, innerAlpha);\n        gl_FragColor = resNoGap * u_alpha;\n        return;\n      }\n\n      float nodeDist = roundedBox(boxUv, v_halfDimensions - edgeWidth, u_radius);\n      float nodeAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, nodeDist);\n\n      float borderDist = max(-innerDist, outerDist);\n      float borderAlpha = 1.0 - smoothstep(-0.5 * edgeWidth, 0.5 * edgeWidth, borderDist);\n\n      vec4 resFill = mix(shadowBase, color, nodeAlpha);\n      vec4 resGap = mix(resFill, u_borderColor, borderAlpha * u_borderColor.a);\n      gl_FragColor = resGap * u_alpha;\n    }\n  `
};

var props = Object.assign({}, RoundedTemplate.props, getShadowProps("shadow"));

var RoundedWithShadowTemplate = {
    props: props
};

var RoundedWithShadow = {
    props: RoundedWithShadowTemplate.props,
    update(node) {
        this.uniformRGBA("u_shadow_color", this.props["shadow-color"]);
        this.uniform4fa("u_shadow", this.props["shadow-projection"]);
        this.uniform4fa("u_radius", calcFactoredRadiusArray(this.props.radius, node.w, node.h));
    },
    vertex: `\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    attribute vec2 a_position;\n    attribute vec2 a_textureCoords;\n    attribute vec4 a_color;\n    attribute vec2 a_nodeCoords;\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n    uniform vec2 u_dimensions;\n\n    uniform vec4 u_shadow;\n    uniform vec4 u_radius;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n\n    varying vec2 v_boxUv;\n    varying vec2 v_boxSize;\n    varying vec2 v_boxSmooth;\n    varying vec2 v_shadowBox;\n    varying vec2 v_shadowSize;\n    varying vec4 v_shadowRadius;\n    varying vec2 v_shadowSmooth;\n\n    void main() {\n      vec2 screenSpace = vec2(2.0 / u_resolution.x,  -2.0 / u_resolution.y);\n      vec2 outerEdge = clamp(a_nodeCoords * 2.0 - vec2(1.0), -1.0, 1.0);\n\n      vec2 padding = vec2(max(0.0, u_shadow.w) + u_shadow.z);\n      vec2 offsetShift = mix(min(vec2(0.0), u_shadow.xy), max(vec2(0.0), u_shadow.xy), (outerEdge + 1.0) * 0.5);\n      vec2 shadowEdge = outerEdge * padding + offsetShift;\n\n      vec2 vertexPos = (a_position + outerEdge + shadowEdge) * u_pixelRatio;\n      gl_Position = vec4(vertexPos.x * screenSpace.x - 1.0, -sign(screenSpace.y) * (vertexPos.y * -abs(screenSpace.y)) + 1.0, 0.0, 1.0);\n\n      v_color = a_color;\n      v_textureCoords = a_textureCoords + (screenSpace + shadowEdge) / (u_dimensions);\n\n      float edgeWidth = 1.0 / u_pixelRatio;\n      vec2 halfDimensions = u_dimensions * 0.5;\n\n      v_boxUv = (a_nodeCoords + (screenSpace + shadowEdge) / (u_dimensions)) * u_dimensions - halfDimensions;\n      v_boxSize = halfDimensions - edgeWidth;\n      v_boxSmooth = vec2(-0.5 * edgeWidth, 0.5 * edgeWidth);\n\n      v_shadowBox = v_boxUv - u_shadow.xy;\n      v_shadowSize = halfDimensions + u_shadow.w - edgeWidth;\n      v_shadowRadius = max(vec4(0.0), u_radius + u_shadow.w);\n      v_shadowSmooth = vec2(-u_shadow.z, u_shadow.z + 0.001);\n    }\n  `,
    fragment: `\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    uniform float u_alpha;\n    uniform sampler2D u_texture;\n\n    uniform vec4 u_shadow_color;\n    uniform vec4 u_radius;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n\n    varying vec2 v_boxUv;\n    varying vec2 v_boxSize;\n    varying vec2 v_boxSmooth;\n    varying vec2 v_shadowBox;\n    varying vec2 v_shadowSize;\n    varying vec4 v_shadowRadius;\n    varying vec2 v_shadowSmooth;\n\n    // Branchless quadrant radius select (r: x TL, y TR, z BR, w BL) --\n    // Mali 400-class fragment pipelines serialize any branch, ternaries included.\n    float quadRadius(vec2 p, vec4 r) {\n      vec2 stepVal = step(vec2(0.0), p);\n      return mix(mix(r.x, r.y, stepVal.x), mix(r.w, r.z, stepVal.x), stepVal.y);\n    }\n\n    float roundedBox(vec2 p, vec2 s, vec4 r) {\n      float rad = quadRadius(p, r);\n      vec2 q = abs(p) - s + rad;\n      return (min(max(q.x, q.y), 0.0) + length(max(q, 0.0))) - rad;\n    }\n\n    float shadowBox(vec2 p, vec2 s, vec4 r) {\n      float rad = quadRadius(p, r);\n      vec2 q = abs(p) - s + rad;\n      float dist = min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - rad;\n      return 1.0 - smoothstep(v_shadowSmooth.x, v_shadowSmooth.y, dist);\n    }\n\n    void main() {\n      vec4 color = texture2D(u_texture, v_textureCoords) * v_color;\n\n      float boxDist = roundedBox(v_boxUv, v_boxSize, u_radius);\n      float roundedAlpha = 1.0 - smoothstep(v_boxSmooth.x, v_boxSmooth.y, boxDist);\n\n      // Uniform-driven gate: a fully transparent shadow contributes nothing,\n      // so skip its SDF entirely rather than multiplying the result by zero.\n      // The condition is the same for every fragment in the draw call.\n      vec4 resColor = vec4(0.0);\n      if (u_shadow_color.a >= 0.0001) {\n        float shadowAlpha = shadowBox(v_shadowBox, v_shadowSize, v_shadowRadius);\n        resColor = u_shadow_color * shadowAlpha;\n      }\n\n      resColor = mix(resColor, color, min(color.a, roundedAlpha));\n      gl_FragColor = resColor * u_alpha;\n    }\n  `
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
    fragment: `\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    uniform float u_alpha;\n    uniform float u_pixelRatio;\n    uniform vec2 u_dimensions;\n    uniform sampler2D u_texture;\n\n    uniform vec2 u_size;\n    uniform vec2 u_pos;\n\n    uniform vec4 u_radius;\n\n    uniform vec4 u_color;\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n\n    void main() {\n      vec4 color = texture2D(u_texture, v_textureCoords) * v_color;\n      vec2 p = (v_textureCoords.xy * u_dimensions.xy - u_pos) - u_size;\n\n      // Branchless radius selection based on quadrant\n      // x: TL, y: TR, z: BR, w: BL\n      vec2 stepVal = step(vec2(0.0), p);\n      float r = mix(\n        mix(u_radius.x, u_radius.y, stepVal.x),\n        mix(u_radius.w, u_radius.z, stepVal.x),\n        stepVal.y\n      );\n\n      p = abs(p) - u_size + r;\n      float dist = min(max(p.x, p.y), 0.0) + length(max(p, 0.0)) - r + 2.0;\n      float roundedAlpha = 1.0 - smoothstep(0.0, u_pixelRatio, dist);\n      gl_FragColor = mix(color, vec4(0.0), min(color.a, roundedAlpha));\n    }\n  `
};

var LinearGradient = {
    props: LinearGradientTemplate.props,
    update(node) {
        const props = this.props;
        const angle = props.angle - Math.PI / 180 * 90;
        const c = Math.cos(angle);
        const s = Math.sin(angle);
        const w = node.w;
        const h = node.h;
        const lineDist = Math.abs(w * c) + Math.abs(h * s);
        const gx = -lineDist * c;
        const gy = -lineDist * s;
        const gg = gx * gx + gy * gy;
        const invGG = gg > 0 ? 1 / gg : 0;
        const fx = lineDist * .5 * c + w * .5;
        const fy = lineDist * .5 * s + h * .5;
        this.uniform2f("u_grad_a", w * gx * invGG, h * gy * invGG);
        this.uniform1f("u_grad_b", -(fx * gx + fy * gy) * invGG);
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
        return `\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    #define MAX_STOPS ${props.colors.length}\n\n    uniform float u_alpha;\n\n    uniform sampler2D u_texture;\n\n    uniform vec2 u_grad_a;\n    uniform float u_grad_b;\n    uniform float u_stops[MAX_STOPS];\n    uniform vec4 u_colors[MAX_STOPS];\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n\n    vec4 getGradientColor(float dist) {\n      dist = clamp(dist, 0.0, 1.0);\n      ${genGradientColors(props.colors.length)}\n      return colorOut;\n    }\n\n    void main() {\n      vec4 color = texture2D(u_texture, v_textureCoords) * v_color;\n      float dist = dot(v_textureCoords, u_grad_a) + u_grad_b;\n      vec4 colorOut = getGradientColor(dist);\n      color = mix(color, colorOut, clamp(colorOut.a, 0.0, 1.0));\n      gl_FragColor = color * u_alpha;\n    }\n  `;
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
        return `\n      # ifdef GL_FRAGMENT_PRECISION_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      #define MAX_STOPS ${props.colors.length}\n\n      uniform float u_alpha;\n      uniform vec2 u_dimensions;\n\n      uniform sampler2D u_texture;\n\n      uniform vec2 u_projection;\n      uniform vec2 u_size;\n\n      uniform float u_stops[MAX_STOPS];\n      uniform vec4 u_colors[MAX_STOPS];\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoords;\n      varying vec2 v_nodeCoords;\n\n      vec4 getGradientColor(float dist) {\n        dist = clamp(dist, 0.0, 1.0);\n        ${genGradientColors(props.colors.length)}\n        return colorOut;\n      }\n\n      void main() {\n        vec4 color = texture2D(u_texture, v_textureCoords) * v_color;\n        vec2 point = v_nodeCoords.xy * u_dimensions;\n        float dist = length((point - u_projection) / u_size);\n\n        vec4 colorOut = getGradientColor(dist);\n        color = mix(color, colorOut, clamp(colorOut.a, 0.0, 1.0));\n        gl_FragColor = color * u_alpha;\n      }\n    `;
    }
};

var RadialProgressTemplate = {
    props: {
        width: 8,
        radius: 0,
        progress: {
            default: 1,
            resolve(value) {
                if (value === void 0) return this.default;
                if (value < 0) return 0;
                if (value > 1) return 1;
                return value;
            }
        },
        startAngle: -Math.PI / 2,
        direction: 1,
        colors: {
            default: [ 4294967295 ],
            resolve(value) {
                if (value !== void 0 && value.length > 0) return value;
                return [].concat(this.default);
            }
        },
        stops: {
            default: [ 0 ],
            resolve(value, props) {
                if (value !== void 0 && value.length === props.colors.length) return value;
                if (value === void 0) value = [];
                const len = props.colors.length;
                if (len === 1) {
                    value[0] = 0;
                    value.length = 1;
                    return value;
                }
                for (let i = 0; i < len; i++) value[i] = i * (1 / (len - 1));
                value.length = len;
                return value;
            }
        },
        trackColor: 0,
        cap: 1,
        duration: {
            default: 0,
            resolve(value) {
                if (value === void 0) return this.default;
                if (value < 0) return 0;
                return value;
            }
        },
        countdown: 1
    }
};

var RadialProgress = {
    props: RadialProgressTemplate.props,
    time: true,
    update(node) {
        const props = this.props;
        const autoRadius = Math.min(node.w, node.h) * .5 - props.width * .5;
        const radius = props.radius > 0 ? props.radius : autoRadius;
        this.uniform2f("u_center", node.w * .5, node.h * .5);
        this.uniform1f("u_radius", radius);
        this.uniform1f("u_width", props.width);
        this.uniform1f("u_progress", props.progress);
        this.uniform1f("u_startAngle", props.startAngle);
        this.uniform1f("u_direction", props.direction);
        this.uniform1f("u_duration", props.duration);
        this.uniform1f("u_countdown", props.countdown);
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
    getCacheMarkers(props) {
        return `colors:${props.colors.length}|cap:${props.cap}|track:${props.trackColor !== 0 ? 1 : 0}`;
    },
    fragment(renderer, props) {
        const maxStops = Math.max(props.colors.length, 1);
        return `\n      # ifdef GL_FRAGMENT_PRECISION_HIGH\n      precision highp float;\n      # else\n      precision mediump float;\n      # endif\n\n      #define MAX_STOPS ${maxStops}\n      #define CAP_ROUND ${props.cap}\n      #define HAS_TRACK ${props.trackColor !== 0 ? 1 : 0}\n\n      #define TWO_PI 6.28318530717958647692\n\n      uniform float u_alpha;\n      uniform float u_time;\n      uniform vec2 u_dimensions;\n      uniform sampler2D u_texture;\n\n      uniform vec2 u_center;\n      uniform float u_radius;\n      uniform float u_width;\n      uniform float u_progress;\n      uniform float u_startAngle;\n      uniform float u_direction;\n      uniform float u_duration;\n      uniform float u_countdown;\n\n      uniform float u_stops[MAX_STOPS];\n      uniform vec4 u_colors[MAX_STOPS];\n      uniform vec4 u_trackColor;\n\n      varying vec4 v_color;\n      varying vec2 v_textureCoords;\n      varying vec2 v_nodeCoords;\n\n      vec4 getGradientColor(float dist) {\n        dist = clamp(dist, 0.0, 1.0);\n        ${genGradientColors(maxStops)}\n        return colorOut;\n      }\n\n      // Coverage of a disc centered at \`c\` with radius \`r\` at pixel \`p\` (with 1px AA)\n      float discCoverage(vec2 p, vec2 c, float r) {\n        return 1.0 - smoothstep(r - 1.0, r + 1.0, length(p - c));\n      }\n\n      void main() {\n        vec4 base = texture2D(u_texture, v_textureCoords) * v_color;\n\n        // Effective progress: when u_duration > 0 the shader self-animates from\n        // u_time, otherwise we use the static u_progress prop. countdown == 1\n        // drains (1 -> 0), countdown == 0 fills (0 -> 1).\n        // Branchless (Mali 400 serializes uniform branches): the mix()-guarded\n        // denominator keeps the division finite when u_duration == 0 -- a\n        // max()-clamped epsilon would overflow fp16 mediump to Inf/NaN.\n        float hasDuration = step(0.0001, u_duration);\n        float cyclePos = fract(u_time / mix(1.0, u_duration, hasDuration)) * hasDuration;\n        float animProgress = mix(cyclePos, 1.0 - cyclePos, step(0.5, u_countdown));\n        float progress = mix(u_progress, animProgress, hasDuration);\n\n        vec2 p = v_nodeCoords.xy * u_dimensions - u_center;\n        float dist = length(p);\n        float halfW = u_width * 0.5;\n\n        // Ring coverage: 1 inside the stroke band, 0 outside (with 1px AA on both edges)\n        float ringCoverage =\n          smoothstep(u_radius - halfW - 1.0, u_radius - halfW + 1.0, dist) *\n          (1.0 - smoothstep(u_radius + halfW - 1.0, u_radius + halfW + 1.0, dist));\n\n        // Angle along the arc, normalized to [0, 1) starting at u_startAngle\n        float ang = atan(p.y, p.x);\n        float t = mod((ang - u_startAngle) * u_direction, TWO_PI) / TWO_PI;\n\n        // Filled arc coverage (1 if in filled arc, else 0). When progress >= 1 the\n        // whole ring is filled regardless of \`t\` -- guards against the mod() seam.\n        float arcCoverage = max(step(1.0, progress), step(t, progress));\n        float fillCoverage = ringCoverage * arcCoverage;\n\n        #if CAP_ROUND\n          // Round caps: discs of radius halfW at the start and head of the arc\n          float a0 = u_startAngle;\n          float a1 = u_startAngle + u_direction * progress * TWO_PI;\n          vec2 cap0 = vec2(cos(a0), sin(a0)) * u_radius;\n          vec2 cap1 = vec2(cos(a1), sin(a1)) * u_radius;\n          float capMask = max(discCoverage(p, cap0, halfW), discCoverage(p, cap1, halfW));\n          // Caps only visible when there's something to cap (progress > 0 and < 1).\n          float capGate = step(0.0001, progress) * step(progress, 0.9999);\n          fillCoverage = max(fillCoverage, capMask * capGate);\n        #endif\n\n        // Sample gradient. Normalize \`t\` to the *filled* portion so the gradient\n        // spans the visible arc end-to-end regardless of progress. mix()-guarded\n        // denominator: safe at progress == 0 without fp16 overflow.\n        float hasProgress = step(0.000001, progress);\n        float gradT = clamp(t / mix(1.0, progress, hasProgress), 0.0, 1.0) * hasProgress;\n        vec4 fillCol = getGradientColor(gradT);\n\n        // Composite: track under fill (if track enabled), both gated by ringCoverage.\n        // We work in PREMULTIPLIED-alpha space here so AA edges composite cleanly\n        // against \`base\` -- mix(base.rgb, layer.rgb, la) with a coverage-scaled\n        // \`layer\` would multiply layer.rgb by coverage a second time and darken\n        // the AA falloff (see issue #36). The renderer's blend func is\n        // (ONE, ONE_MINUS_SRC_ALPHA), which expects premultiplied output.\n        vec4 fillPM = vec4(fillCol.rgb * fillCol.a, fillCol.a);\n        vec4 layer = vec4(0.0);\n        #if HAS_TRACK\n          vec4 trackPM = vec4(u_trackColor.rgb * u_trackColor.a, u_trackColor.a);\n          float trackCoverage = ringCoverage * (1.0 - fillCoverage);\n          layer = trackPM * trackCoverage + fillPM * fillCoverage;\n        #else\n          layer = fillPM * fillCoverage;\n        #endif\n\n        // Apply node opacity to the introduced ring/track colors. They come\n        // from u_colors / u_trackColor and do not carry worldAlpha, so without\n        // this a fading RadialProgress node would keep its ring fully opaque.\n        // \`base\` already includes worldAlpha (via v_color), so it is left as-is\n        // to avoid double-applying. Scaling a premultiplied layer is valid.\n        layer *= u_alpha;\n\n        // Premultiplied "over": out = src + dst*(1 - src.a). The output stays\n        // visible on a fully-transparent \`base\` because layer brings its own alpha.\n        float la = clamp(layer.a, 0.0, 1.0);\n        vec3 blended = base.rgb * (1.0 - la) + layer.rgb;\n        float outA = base.a + la * (1.0 - base.a);\n        gl_FragColor = vec4(blended, outA);\n      }\n    `;
    }
};

var invisibleChars = /[\u200B\u200C\u200D\uFEFF\u00AD\u2060]/g;

function hasZeroWidthSpace(space) {
    return invisibleChars.test(space) === true;
}

var SdfFontHandler_exports = __exportAll({
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
});

var MAX_FONT_LOAD_RETRIES = 3;

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
    if (metrics.capHeight === void 0) {
        const capGlyph = glyphMap.get(72);
        if (capGlyph !== void 0) {
            const capHeightAtlasPx = fontData.common.base - capGlyph.yoffset;
            metrics = {
                ...metrics,
                capHeight: capHeightAtlasPx / fontData.info.size * metrics.unitsPerEm
            };
        }
    }
    if (metrics.xHeight === void 0) {
        const xGlyph = glyphMap.get(120);
        if (xGlyph !== void 0) {
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
};

var canRenderFont$1 = trProps => isFontLoaded$1(trProps.fontFamily) || fontLoadPromises$1.has(trProps.fontFamily);

var loadFont$1 = (stage, options) => {
    const {fontFamily: fontFamily, atlasUrl: atlasUrl, atlasDataUrl: atlasDataUrl, metrics: metrics} = options;
    const names = Array.isArray(fontFamily) ? fontFamily : [ fontFamily ];
    const primary = names[0];
    const prefetched = takeSdfPrefetch(primary);
    if (fontCache$1.get(primary) !== void 0) return Promise.resolve();
    const existingPromise = fontLoadPromises$1.get(primary);
    if (existingPromise !== void 0) return existingPromise;
    if (atlasDataUrl === void 0) return Promise.reject(new Error(`Atlas data URL must be provided for SDF font: ${primary}`));
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if (nodesWaitingForFont$1[name] === void 0) nodesWaitingForFont$1[name] = [];
    }
    const fetchFontData = () => new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest;
        xhr.open("GET", atlasDataUrl, true);
        xhr.responseType = "json";
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 0) {
                let data = xhr.response;
                if (typeof data === "string") try {
                    data = JSON.parse(data);
                } catch (e) {
                    reject(new Error("Failed to parse font data JSON"));
                    return;
                }
                resolve(data);
            } else reject(new Error(`Failed to load font data: ${xhr.statusText}`));
        };
        xhr.onerror = () => {
            reject(new Error("Network error occurred while trying to load the font data."));
        };
        xhr.send(null);
    });
    const loadAtlas = (fontData, atlasBlob) => {
        if (!fontData || !fontData.chars) return Promise.reject(new Error("Invalid SDF font data format"));
        if (!atlasUrl) return Promise.reject(new Error("Atlas texture must be provided for SDF fonts"));
        return new Promise((resolve, reject) => {
            const atlasTexture = stage.txManager.createTexture("ImageTexture", {
                src: atlasBlob !== null ? atlasBlob : atlasUrl,
                key: atlasUrl,
                premultiplyAlpha: false
            });
            for (let i = 0; i < names.length; i++) atlasTexture.setRenderableOwner(names[i], true);
            atlasTexture.preventCleanup = true;
            const onLoaded = () => {
                processFontData$1(primary, fontData, atlasTexture, metrics);
                const cached = fontCache$1.get(primary);
                for (let i = 1; i < names.length; i++) fontCache$1.set(names[i], cached);
                for (let i = 0; i < names.length; i++) {
                    const name = names[i];
                    const list = nodesWaitingForFont$1[name];
                    if (list !== void 0) {
                        for (let key in list) list[key].setUpdateType(UpdateType.Local);
                        delete nodesWaitingForFont$1[name];
                    }
                }
                resolve();
            };
            if (atlasTexture.state === "loaded") {
                onLoaded();
                return;
            }
            atlasTexture.on("loaded", onLoaded);
            atlasTexture.on("failed", (_target, error) => {
                for (let i = 0; i < names.length; i++) atlasTexture.setRenderableOwner(names[i], false);
                stage.txManager.removeTextureFromCache(atlasTexture);
                reject(error);
            });
        });
    };
    const loadPromise = (async () => {
        let lastError;
        for (let attempt = 0; attempt <= 3; attempt++) try {
            var _ref;
            const fontData = (_ref = attempt === 0 && prefetched !== void 0 ? await prefetched.data : null) !== null && _ref !== void 0 ? _ref : await fetchFontData();
            const atlasBlob = attempt === 0 && prefetched !== void 0 ? await prefetched.atlas : null;
            await loadAtlas(fontData, atlasBlob);
            for (let i = 0; i < names.length; i++) fontLoadPromises$1.delete(names[i]);
            return;
        } catch (error) {
            lastError = error;
            if (attempt < 3) console.warn(`SDF font "${primary}" failed to load (attempt ${attempt + 1} of 4), retrying.`, error);
        }
        for (let i = 0; i < names.length; i++) {
            fontLoadPromises$1.delete(names[i]);
            fontCache$1.delete(names[i]);
        }
        console.error(`Failed to load SDF font: ${primary}`, lastError);
        throw lastError;
    })();
    for (let i = 0; i < names.length; i++) fontLoadPromises$1.set(names[i], loadPromise);
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

var init$3 = c => {
    if (initialized$1 === true) return;
    initialized$1 = true;
};

var type$3 = "sdf";

var isFontLoaded$1 = fontFamily => fontCache$1.has(fontFamily);

var getFontMetrics$1 = (fontFamily, fontSize) => {
    const label = fontFamily + "_" + fontSize;
    const metricsCache = normalizedMetrics$1.get(label);
    if (metricsCache !== void 0) return metricsCache;
    let metrics = fontCache$1.get(fontFamily).metrics;
    return processFontMetrics$1(fontFamily, fontSize, metrics);
};

var processFontMetrics$1 = (fontFamily, fontSize, metrics) => {
    const label = fontFamily + "_" + fontSize;
    const normalized = normalizeFontMetrics(metrics, fontSize);
    normalizedMetrics$1.set(label, normalized);
    return normalized;
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
    const cache = fontCache$1.get(fontFamily);
    if (cache === void 0) return 0;
    const glyphMap = cache.glyphMap;
    const kernings = cache.kernings;
    const fallbackGlyphId = true ? 32 : 63;
    const textLength = text.length;
    if (textLength === 1) {
        const codepoint = text.codePointAt(0);
        if (codepoint === 8203) return 0;
        const char = text[0];
        if (hasZeroWidthSpace(char) === true) return 0;
        let glyph = glyphMap.get(codepoint);
        if (glyph === void 0) {
            glyph = glyphMap.get(fallbackGlyphId);
            if (glyph === void 0) return 0;
        }
        return glyph.xadvance + letterSpacing;
    }
    let width = 0;
    let prevGlyphId = 0;
    for (let i = 0; i < textLength; i++) {
        const codepoint = text.codePointAt(i);
        if (codepoint > 65535) i++;
        if (codepoint === 8203) continue;
        const char = text[i];
        if (hasZeroWidthSpace(char) === true) continue;
        let glyph = glyphMap.get(codepoint);
        if (glyph === void 0) {
            glyph = glyphMap.get(fallbackGlyphId);
            if (glyph === void 0) continue;
        }
        let advance = glyph.xadvance;
        if (prevGlyphId !== 0) {
            const seconds = kernings[glyph.id];
            if (seconds !== void 0) {
                const amount = seconds[prevGlyphId];
                if (amount !== void 0) advance += amount;
            }
        }
        width += advance + letterSpacing;
        prevGlyphId = glyph.id;
    }
    return width;
};

var CoreRenderOp = class {};

var SdfRenderOp = class extends CoreRenderOp {
    constructor(renderer, shader, quadBufferCollection, renderOpTexture, worldAlpha, clippingRect, w, h) {
        super();
        this.renderer = void 0;
        this.shader = void 0;
        this.quadBufferCollection = void 0;
        this.renderOpTexture = void 0;
        this.worldAlpha = void 0;
        this.clippingRect = void 0;
        this.w = void 0;
        this.h = void 0;
        this.numQuads = 0;
        this.time = 0;
        this.stage = void 0;
        this.startQuad = 0;
        this.translateX = 0;
        this.translateY = 0;
        this.renderer = renderer;
        this.shader = shader;
        this.quadBufferCollection = quadBufferCollection;
        this.renderOpTexture = renderOpTexture;
        this.worldAlpha = worldAlpha;
        this.clippingRect = clippingRect;
        this.w = w;
        this.h = h;
        this.stage = renderer.stage;
    }
    draw() {
        const {glw: glw, stage: stage} = this.renderer;
        this.renderer.useShader(this.shader.program);
        this.shader.program.bindRenderOp(this, this.quadBufferCollection);
        if (this.clippingRect.valid === true) {
            const pixelRatio = stage.pixelRatio;
            const clipX = Math.round(this.clippingRect.x * pixelRatio);
            const clipWidth = Math.round(this.clippingRect.w * pixelRatio);
            const clipHeight = Math.round(this.clippingRect.h * pixelRatio);
            const clipY = Math.round(glw.canvasH - clipHeight - this.clippingRect.y * pixelRatio);
            glw.setScissorTest(true);
            glw.scissor(clipX, clipY, clipWidth, clipHeight);
        } else glw.setScissorTest(false);
        const byteOffset = this.startQuad * 6 * 2;
        glw.drawElements(glw.TRIANGLES, 6 * this.numQuads, glw.UNSIGNED_SHORT, byteOffset);
    }
};

var TRANSPARENT_TEXTURE_DATA = new Uint8Array([ 0, 0, 0, 0 ]);

var WebGlCtxTexture = class extends CoreContextTexture {
    constructor(glw, memManager, textureSource) {
        super(memManager, textureSource);
        this.glw = void 0;
        this._nativeCtxTexture = null;
        this._w = 0;
        this._h = 0;
        this.txCoords = UNIT_TEXTURE_COORDS;
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
    load() {
        if (this.state === "loading" || this.state === "loaded") return;
        this.state = "loading";
        this.textureSource.setState("loading");
        this._nativeCtxTexture = this.createNativeCtxTexture();
        if (this._nativeCtxTexture === null) {
            this.state = "failed";
            const error = new Error("Could not create WebGL Texture");
            this.textureSource.setState("failed", error);
            console.error("Could not create WebGL Texture");
            return;
        }
        try {
            const {w: w, h: h} = this.onLoadRequest();
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
        }
    }
    onLoadRequest() {
        const {glw: glw} = this;
        const textureData = this.textureSource.textureData;
        if (textureData === null || this._nativeCtxTexture === null) throw new Error("Texture data or native texture is null " + this.textureSource.type);
        let w = 0;
        let h = 0;
        glw.activeTexture(0);
        const tdata = textureData.data;
        const format = glw.RGBA;
        const formatBytes = 4;
        const memoryPadding = 1.1;
        if (typeof ImageBitmap !== "undefined" && tdata instanceof ImageBitmap || tdata instanceof ImageData || isHTMLImageElement(tdata) === true) {
            w = tdata.width;
            h = tdata.height;
            glw.bindTexture(this._nativeCtxTexture);
            glw.pixelStorei(glw.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !!textureData.premultiplyAlpha);
            glw.texImage2D(0, format, format, glw.UNSIGNED_BYTE, tdata);
            if (this.checkGLError() === true) throw this.textureSource.error || new Error("WebGL Error");
            this.setTextureMemUse(h * w * formatBytes * memoryPadding);
        } else if (tdata === null) {
            w = 0;
            h = 0;
            glw.bindTexture(this._nativeCtxTexture);
            glw.texImage2D(0, format, 1, 1, 0, format, glw.UNSIGNED_BYTE, TRANSPARENT_TEXTURE_DATA);
            this.setTextureMemUse(TRANSPARENT_TEXTURE_DATA.byteLength);
        } else if (true && "mipmaps" in tdata && tdata.mipmaps) {
            var _mipmaps$0$byteLength, _mipmaps$;
            const {mipmaps: mipmaps, type: type, blockInfo: blockInfo} = tdata;
            uploadCompressedTexture[type](glw, this._nativeCtxTexture, tdata);
            if (this.checkGLError() === true) throw this.textureSource.error || new Error("WebGL Error");
            w = tdata.w;
            h = tdata.h;
            this.txCoords = createTextureCoords(0, 0, w / (Math.ceil(w / blockInfo.width) * blockInfo.width), h / (Math.ceil(h / blockInfo.height) * blockInfo.height));
            this.setTextureMemUse((_mipmaps$0$byteLength = (_mipmaps$ = mipmaps[0]) == null ? void 0 : _mipmaps$.byteLength) !== null && _mipmaps$0$byteLength !== void 0 ? _mipmaps$0$byteLength : 0);
        } else if (tdata && tdata instanceof Uint8Array) {
            w = 1;
            h = 1;
            glw.bindTexture(this._nativeCtxTexture);
            glw.pixelStorei(glw.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !!textureData.premultiplyAlpha);
            glw.texImage2D(0, format, w, h, 0, format, glw.UNSIGNED_BYTE, tdata);
            if (this.checkGLError() === true) throw this.textureSource.error || new Error("WebGL Error");
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
    onLoadRequest() {
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

var BufferCollection = class {
    constructor(config) {
        this.config = void 0;
        this._lookup = new Map;
        this.config = config;
        for (const item of config) for (const attrName in item.attributes) if (item.attributes[attrName] && !this._lookup.has(attrName)) this._lookup.set(attrName, item);
    }
    getBuffer(attributeName) {
        var _this$_lookup$get;
        return (_this$_lookup$get = this._lookup.get(attributeName)) == null ? void 0 : _this$_lookup$get.buffer;
    }
    getAttributeInfo(attributeName) {
        var _this$_lookup$get2;
        return (_this$_lookup$get2 = this._lookup.get(attributeName)) == null ? void 0 : _this$_lookup$get2.attributes[attributeName];
    }
};

var WebGlContextWrapper = class {
    constructor(gl, disableVertexArrayObject = false) {
        this.gl = void 0;
        this.activeTextureUnit = 0;
        this.texture2dUnits = void 0;
        this.texture2dParams = new WeakMap;
        this.scissorEnabled = void 0;
        this.scissorX = void 0;
        this.scissorY = void 0;
        this.scissorWidth = void 0;
        this.scissorHeight = void 0;
        this.blendEnabled = void 0;
        this.blendSrcRgb = void 0;
        this.blendDstRgb = void 0;
        this.blendSrcAlpha = void 0;
        this.blendDstAlpha = void 0;
        this.boundArrayBuffer = void 0;
        this.boundElementArrayBuffer = void 0;
        this.curProgram = void 0;
        this.curUniformLocations = {};
        this.gl2 = void 0;
        this.boundVertexArray = null;
        this.vaoExt = void 0;
        this.canUseVertexArrayObject = void 0;
        this.isWebGl2 = void 0;
        this.canvas = void 0;
        this.canvasW = void 0;
        this.canvasH = void 0;
        this.MAX_RENDERBUFFER_SIZE = void 0;
        this.MAX_TEXTURE_SIZE = void 0;
        this.MAX_VIEWPORT_DIMS = void 0;
        this.MAX_VERTEX_TEXTURE_IMAGE_UNITS = void 0;
        this.MAX_TEXTURE_IMAGE_UNITS = void 0;
        this.MAX_COMBINED_TEXTURE_IMAGE_UNITS = void 0;
        this.MAX_VERTEX_ATTRIBS = void 0;
        this.MAX_VARYING_VECTORS = void 0;
        this.MAX_VERTEX_UNIFORM_VECTORS = void 0;
        this.MAX_FRAGMENT_UNIFORM_VECTORS = void 0;
        this.TEXTURE_MAG_FILTER = void 0;
        this.TEXTURE_MIN_FILTER = void 0;
        this.TEXTURE_WRAP_S = void 0;
        this.TEXTURE_WRAP_T = void 0;
        this.LINEAR = void 0;
        this.LINEAR_MIPMAP_LINEAR = void 0;
        this.CLAMP_TO_EDGE = void 0;
        this.RGB = void 0;
        this.RGBA = void 0;
        this.UNSIGNED_BYTE = void 0;
        this.UNPACK_PREMULTIPLY_ALPHA_WEBGL = void 0;
        this.UNPACK_FLIP_Y_WEBGL = void 0;
        this.FLOAT = void 0;
        this.TRIANGLES = void 0;
        this.UNSIGNED_SHORT = void 0;
        this.ONE = void 0;
        this.ONE_MINUS_SRC_ALPHA = void 0;
        this.VERTEX_SHADER = void 0;
        this.FRAGMENT_SHADER = void 0;
        this.STATIC_DRAW = void 0;
        this.COMPILE_STATUS = void 0;
        this.LINK_STATUS = void 0;
        this.DYNAMIC_DRAW = void 0;
        this.INVALID_ENUM = void 0;
        this.INVALID_OPERATION = void 0;
        this.gl = gl;
        this.activeTextureUnit = 0;
        const maxTextureUnits = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);
        this.texture2dUnits = new Array(maxTextureUnits).fill(null);
        this.scissorEnabled = false;
        this.scissorX = 0;
        this.scissorY = 0;
        this.scissorWidth = gl.drawingBufferWidth;
        this.scissorHeight = gl.drawingBufferHeight;
        this.blendEnabled = false;
        this.blendSrcRgb = gl.ONE;
        this.blendDstRgb = gl.ZERO;
        this.blendSrcAlpha = gl.ONE;
        this.blendDstAlpha = gl.ZERO;
        this.boundArrayBuffer = null;
        this.boundElementArrayBuffer = null;
        this.curProgram = null;
        this.gl2 = self.WebGL2RenderingContext && gl instanceof self.WebGL2RenderingContext ? gl : null;
        this.vaoExt = this.gl2 === null && disableVertexArrayObject !== true ? gl.getExtension("OES_vertex_array_object") : null;
        this.canUseVertexArrayObject = disableVertexArrayObject !== true && (this.gl2 !== null || this.vaoExt !== null);
        this.isWebGl2 = this.gl2 !== null;
        this.canvas = gl.canvas;
        this.canvasW = gl.canvas.width;
        this.canvasH = gl.canvas.height;
        this.MAX_RENDERBUFFER_SIZE = gl.MAX_RENDERBUFFER_SIZE;
        this.MAX_TEXTURE_SIZE = gl.MAX_TEXTURE_SIZE;
        this.MAX_VIEWPORT_DIMS = gl.MAX_VIEWPORT_DIMS;
        this.MAX_VERTEX_TEXTURE_IMAGE_UNITS = gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS;
        this.MAX_TEXTURE_IMAGE_UNITS = gl.MAX_TEXTURE_IMAGE_UNITS;
        this.MAX_COMBINED_TEXTURE_IMAGE_UNITS = gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS;
        this.MAX_VERTEX_ATTRIBS = gl.MAX_VERTEX_ATTRIBS;
        this.MAX_VARYING_VECTORS = gl.MAX_VARYING_VECTORS;
        this.MAX_VERTEX_UNIFORM_VECTORS = gl.MAX_VERTEX_UNIFORM_VECTORS;
        this.MAX_FRAGMENT_UNIFORM_VECTORS = gl.MAX_FRAGMENT_UNIFORM_VECTORS;
        this.TEXTURE_MAG_FILTER = gl.TEXTURE_MAG_FILTER;
        this.TEXTURE_MIN_FILTER = gl.TEXTURE_MIN_FILTER;
        this.TEXTURE_WRAP_S = gl.TEXTURE_WRAP_S;
        this.TEXTURE_WRAP_T = gl.TEXTURE_WRAP_T;
        this.LINEAR = gl.LINEAR;
        this.LINEAR_MIPMAP_LINEAR = gl.LINEAR_MIPMAP_LINEAR;
        this.CLAMP_TO_EDGE = gl.CLAMP_TO_EDGE;
        this.RGB = gl.RGB;
        this.RGBA = gl.RGBA;
        this.UNSIGNED_BYTE = gl.UNSIGNED_BYTE;
        this.UNPACK_PREMULTIPLY_ALPHA_WEBGL = gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL;
        this.UNPACK_FLIP_Y_WEBGL = gl.UNPACK_FLIP_Y_WEBGL;
        this.FLOAT = gl.FLOAT;
        this.TRIANGLES = gl.TRIANGLES;
        this.UNSIGNED_SHORT = gl.UNSIGNED_SHORT;
        this.ONE = gl.ONE;
        this.ONE_MINUS_SRC_ALPHA = gl.ONE_MINUS_SRC_ALPHA;
        this.VERTEX_SHADER = gl.VERTEX_SHADER;
        this.FRAGMENT_SHADER = gl.FRAGMENT_SHADER;
        this.STATIC_DRAW = gl.STATIC_DRAW;
        this.COMPILE_STATUS = gl.COMPILE_STATUS;
        this.LINK_STATUS = gl.LINK_STATUS;
        this.DYNAMIC_DRAW = gl.DYNAMIC_DRAW;
        this.INVALID_ENUM = gl.INVALID_ENUM;
        this.INVALID_OPERATION = gl.INVALID_OPERATION;
    }
    activeTexture(textureUnit) {
        if (this.activeTextureUnit !== textureUnit) {
            this.gl.activeTexture(textureUnit + this.gl.TEXTURE0);
            this.activeTextureUnit = textureUnit;
        }
    }
    bindTexture(texture) {
        if (this.texture2dUnits[this.activeTextureUnit] === texture) return;
        this.texture2dUnits[this.activeTextureUnit] = texture;
        this.gl.bindTexture(this.gl.TEXTURE_2D, texture);
    }
    _getActiveTexture() {
        return this.texture2dUnits[this.activeTextureUnit];
    }
    texParameteri(pname, param) {
        const activeTexture = this._getActiveTexture();
        if (!activeTexture) throw new Error("No active texture");
        let textureParams = this.texture2dParams.get(activeTexture);
        if (!textureParams) {
            textureParams = {};
            this.texture2dParams.set(activeTexture, textureParams);
        }
        if (textureParams[pname] === param) return;
        textureParams[pname] = param;
        this.gl.texParameteri(this.gl.TEXTURE_2D, pname, param);
    }
    texImage2D(level, internalFormat, widthOrFormat, heightOrType, borderOrSource, format, type, pixels) {
        if (format) this.gl.texImage2D(this.gl.TEXTURE_2D, level, internalFormat, widthOrFormat, heightOrType, borderOrSource, format, type, pixels); else this.gl.texImage2D(this.gl.TEXTURE_2D, level, internalFormat, widthOrFormat, heightOrType, borderOrSource);
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
        if (texture) this.texture2dParams.delete(texture);
        this.gl.deleteTexture(texture);
    }
    viewport(x, y, width, height) {
        this.gl.viewport(x, y, width, height);
    }
    updateCanvasDimensions() {
        this.canvasW = this.canvas.width;
        this.canvasH = this.canvas.height;
    }
    clearColor(red, green, blue, alpha) {
        this.gl.clearColor(red, green, blue, alpha);
    }
    setScissorTest(enable) {
        if (enable === this.scissorEnabled) return;
        if (enable) this.gl.enable(this.gl.SCISSOR_TEST); else this.gl.disable(this.gl.SCISSOR_TEST);
        this.scissorEnabled = enable;
    }
    scissor(x, y, width, height) {
        if (x !== this.scissorX || y !== this.scissorY || width !== this.scissorWidth || height !== this.scissorHeight) {
            this.gl.scissor(x, y, width, height);
            this.scissorX = x;
            this.scissorY = y;
            this.scissorWidth = width;
            this.scissorHeight = height;
        }
    }
    setBlend(blend) {
        if (blend === this.blendEnabled) return;
        if (blend) this.gl.enable(this.gl.BLEND); else this.gl.disable(this.gl.BLEND);
        this.blendEnabled = blend;
    }
    blendFunc(src, dst) {
        if (src !== this.blendSrcRgb || dst !== this.blendDstRgb || src !== this.blendSrcAlpha || dst !== this.blendDstAlpha) {
            this.gl.blendFunc(src, dst);
            this.blendSrcRgb = src;
            this.blendDstRgb = dst;
            this.blendSrcAlpha = src;
            this.blendDstAlpha = dst;
        }
    }
    createBuffer() {
        return this.gl.createBuffer();
    }
    clear() {
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    }
    arrayBufferData(buffer, data, usage) {
        if (this.boundArrayBuffer !== buffer) {
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
            this.boundArrayBuffer = buffer;
        }
        this.gl.bufferData(this.gl.ARRAY_BUFFER, data, usage);
    }
    arrayBufferSubData(buffer, dstByteOffset, data) {
        if (this.boundArrayBuffer !== buffer) {
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
            this.boundArrayBuffer = buffer;
        }
        this.gl.bufferSubData(this.gl.ARRAY_BUFFER, dstByteOffset, data);
    }
    elementArrayBufferData(buffer, data, usage) {
        if (this.boundElementArrayBuffer !== buffer) {
            this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, buffer);
            this.boundElementArrayBuffer = buffer;
        }
        this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, data, usage);
    }
    vertexAttribPointer(buffer, index, size, type, normalized, stride, offset) {
        if (this.boundArrayBuffer !== buffer) {
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
            this.boundArrayBuffer = buffer;
        }
        this.gl.vertexAttribPointer(index, size, type, normalized, stride, offset);
    }
    bindElementArrayBuffer(buffer) {
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, buffer);
        this.boundElementArrayBuffer = buffer;
    }
    createVertexArray() {
        if (this.gl2 !== null) return this.gl2.createVertexArray();
        if (this.vaoExt !== null) return this.vaoExt.createVertexArrayOES();
        return null;
    }
    bindVertexArray(vertexArray) {
        if (this.boundVertexArray === vertexArray) return;
        if (this.gl2 !== null) {
            this.gl2.bindVertexArray(vertexArray);
            this.boundVertexArray = vertexArray;
            return;
        }
        if (this.vaoExt !== null) {
            this.vaoExt.bindVertexArrayOES(vertexArray);
            this.boundVertexArray = vertexArray;
        }
    }
    deleteVertexArray(vertexArray) {
        if (this.boundVertexArray === vertexArray) this.boundVertexArray = null;
        if (this.gl2 !== null) {
            this.gl2.deleteVertexArray(vertexArray);
            return;
        }
        if (this.vaoExt !== null) this.vaoExt.deleteVertexArrayOES(vertexArray);
    }
    getUniformLocations(program) {
        const gl = this.gl;
        const length = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
        const result = {};
        for (let i = 0; i < length; i++) {
            let name = gl.getActiveUniform(program, i).name.replace(/\[.*?\]/g, "");
            result[name] = gl.getUniformLocation(program, name);
        }
        return result;
    }
    getAttributeLocations(program) {
        const gl = this.gl;
        const length = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);
        const result = [];
        for (let i = 0; i < length; i++) {
            const {name: name} = gl.getActiveAttrib(program, i);
            result[gl.getAttribLocation(program, name)] = name;
        }
        return result;
    }
    useProgram(program, uniformLocations) {
        if (this.curProgram === program) return;
        this.gl.useProgram(program);
        this.curProgram = program;
        this.curUniformLocations = uniformLocations;
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
        this.gl.uniformMatrix2fv(this.curUniformLocations[location] || null, false, value);
    }
    uniformMatrix3fv(location, value) {
        this.gl.uniformMatrix3fv(this.curUniformLocations[location] || null, false, value);
    }
    uniformMatrix4fv(location, value) {
        this.gl.uniformMatrix4fv(this.curUniformLocations[location] || null, false, value);
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
        gl.deleteBuffer(buffer);
        if (this.boundArrayBuffer === buffer) this.boundArrayBuffer = null;
    }
    checkError(operation) {
        const error = this.getError();
        if (error !== 0) {
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
                break;
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
};

var GL_OUT_OF_MEMORY = 1285;

var MAX_DRAINED_GL_ERRORS = 8;

var FULL_UPLOAD_DIRTY_RATIO = .4;

var FLOATS_PER_GLYPH = 24;

var SDF_BUFFER_SIZE = 256 * 1024;

var MAX_SDF_BUFFER_FLOATS = 1024 * 1024 / Float32Array.BYTES_PER_ELEMENT;

var WebGlRenderer = class extends CoreRenderer {
    constructor(options) {
        super(options);
        this.glw = void 0;
        this.quadBuffer = void 0;
        this.fQuadBuffer = void 0;
        this.uiQuadBuffer = void 0;
        this.renderOps = [];
        this.coreTextRenderOps = [];
        this.curBufferIdx = 0;
        this.curRenderOp = null;
        this.attachedShader = null;
        this.sdfBuffer = void 0;
        this.fSdfBuffer = void 0;
        this.uiSdfBuffer = void 0;
        this.sdfBufferIdx = 0;
        this.sdfQuadCount = 0;
        this.sdfQuadBufferCollection = void 0;
        this.curSdfRenderOp = null;
        this.sdfBufferChanged = true;
        this.lastUploadedSdfSize = 0;
        this.sdfWriteSig = 0;
        this.lastUploadedSdfSig = 0;
        this.needsFullUpload = true;
        this.defaultTextureCoords = UNIT_TEXTURE_COORDS;
        this.defaultShaderNode = null;
        this.quadBufferCollection = void 0;
        this.indexBuffer = null;
        this.clearColor = {
            raw: 0,
            normalized: [ 0, 0, 0, 0 ]
        };
        this.quadBufferUsage = 0;
        this.numQuadsRendered = 0;
        this.quadBufferSize = void 0;
        this.lastUploadedBufferSize = 0;
        this.dirtyQuadCount = 0;
        this.quadBufferSize = Math.min(this.stage.options.quadBufferSize, MAX_QUAD_BUFFER_SIZE);
        this.quadBuffer = new ArrayBuffer(this.quadBufferSize);
        this.fQuadBuffer = new Float32Array(this.quadBuffer);
        this.uiQuadBuffer = new Uint32Array(this.quadBuffer);
        this.sdfBuffer = new ArrayBuffer(SDF_BUFFER_SIZE);
        this.fSdfBuffer = new Float32Array(this.sdfBuffer);
        this.uiSdfBuffer = new Uint32Array(this.sdfBuffer);
        this.mode = "webgl";
        const gl = createWebGLContext(options.canvas, options.forceWebGL2, options.contextSpy);
        const glw = this.glw = new WebGlContextWrapper(gl, options.disableVertexArrayObject);
        glw.viewport(0, 0, glw.canvasW, glw.canvasH);
        this.attachContextLossListeners(options.canvas);
        this.updateClearColor(this.stage.clearColor);
        glw.setBlend(true);
        glw.blendFunc(glw.ONE, glw.ONE_MINUS_SRC_ALPHA);
        this.indexBuffer = createIndexBuffer(glw);
        const nodeCoords = new Float32Array(MAX_QUADS * 8);
        for (let i = 0; i < MAX_QUADS * 8; i += 8) {
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
        const quadBuffer = glw.createBuffer();
        const stride = 16;
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
                    type: glw.UNSIGNED_SHORT,
                    normalized: true,
                    stride: stride,
                    offset: 8
                },
                a_color: {
                    name: "a_color",
                    size: 4,
                    type: glw.UNSIGNED_BYTE,
                    normalized: true,
                    stride: stride,
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
                    normalized: false,
                    stride: 2 * Float32Array.BYTES_PER_ELEMENT,
                    offset: 0
                }
            }
        } ]);
        const sdfWebGlBuffer = glw.createBuffer();
        const sdfStride = 6 * Float32Array.BYTES_PER_ELEMENT;
        this.sdfQuadBufferCollection = new BufferCollection([ {
            buffer: sdfWebGlBuffer,
            attributes: {
                a_position: {
                    name: "a_position",
                    size: 2,
                    type: glw.FLOAT,
                    normalized: false,
                    stride: sdfStride,
                    offset: 0
                },
                a_textureCoords: {
                    name: "a_textureCoords",
                    size: 2,
                    type: glw.FLOAT,
                    normalized: false,
                    stride: sdfStride,
                    offset: 2 * Float32Array.BYTES_PER_ELEMENT
                },
                a_color: {
                    name: "a_color",
                    size: 4,
                    type: glw.UNSIGNED_BYTE,
                    normalized: true,
                    stride: sdfStride,
                    offset: 4 * Float32Array.BYTES_PER_ELEMENT
                },
                a_distRange: {
                    name: "a_distRange",
                    size: 1,
                    type: glw.FLOAT,
                    normalized: false,
                    stride: sdfStride,
                    offset: 5 * Float32Array.BYTES_PER_ELEMENT
                }
            }
        } ]);
    }
    attachContextLossListeners(canvas) {
        if ("addEventListener" in canvas === false) return;
        canvas.addEventListener("webglcontextlost", () => {
            this.stage.setContextLost();
        });
    }
    reset() {
        const {glw: glw} = this;
        if (DIRTY_QUAD_BUFFER) {} else this.curBufferIdx = 0;
        this.curRenderOp = null;
        this.curSdfRenderOp = null;
        this.dirtyQuadCount = 0;
        this.sdfBufferIdx = 0;
        this.sdfQuadCount = 0;
        this.sdfWriteSig = 0;
        this.renderOps.length = 0;
        this.coreTextRenderOps.length = 0;
        glw.setScissorTest(false);
        if (this.stage.options.enableClear !== false) glw.clear();
    }
    createShaderProgram(shaderType, props) {
        try {
            return new WebGlShaderProgram(this, shaderType, props);
        } catch (e) {
            if (this.glw.isContextLost() === true) this.stage.setContextLost();
            throw e;
        }
    }
    createShaderNode(shaderKey, shaderType, props, program) {
        return new WebGlShaderNode(shaderKey, shaderType, program, this.stage, props);
    }
    supportsShaderType(shaderType) {
        return shaderType.fragment !== void 0;
    }
    createCtxTexture(textureSource) {
        if (textureSource.type === TextureType.subTexture) return new WebGlCtxSubTexture(this.glw, this.stage.txMemManager, textureSource);
        return new WebGlCtxTexture(this.glw, this.stage.txMemManager, textureSource);
    }
    addQuad(node, texture) {
        const f = this.fQuadBuffer;
        const u = this.uiQuadBuffer;
        if (true === true && node.props.zIndex) this.flushTextRenderOps();
        if (true === false) this.curSdfRenderOp = null;
        const props = node.props;
        let tx = texture !== void 0 ? texture : node.placeholderActive === true ? this.stage.defaultTexture : props.texture || this.stage.defaultTexture;
        if (tx.type === TextureType.subTexture) tx = tx.parentTexture;
        const ctx = tx.ctxTexture;
        if (ctx === void 0) return;
        const reuse = this.reuseRenderOp(node);
        if (DIRTY_QUAD_BUFFER) {
            if (node.quadBufferIndex === -1) {
                node.quadBufferIndex = this.curBufferIdx;
                this.curBufferIdx += WORDS_PER_QUAD;
            }
        } else {
            node.quadBufferIndex = this.curBufferIdx;
            this.curBufferIdx += WORDS_PER_QUAD;
        }
        const i = node.quadBufferIndex;
        if (reuse === false) this.newRenderOp(node, i);
        const curOp = this.curRenderOp;
        if (curOp.renderOpTexture === null) curOp.renderOpTexture = ctx; else if (curOp.renderOpTexture !== ctx) {
            this.newRenderOp(node, i);
            node.renderOpTexture = ctx;
        }
        if (!DIRTY_QUAD_BUFFER || node.isQuadDirty) {
            if (DIRTY_QUAD_BUFFER && node.isQuadDirty === true) this.dirtyQuadCount++;
            const rc = node.renderCoords;
            const tc = node.textureCoords || this.defaultTextureCoords;
            const cTl = node.premultipliedColorTl;
            const cTr = node.premultipliedColorTr;
            const cBl = node.premultipliedColorBl;
            const cBr = node.premultipliedColorBr;
            f[i] = rc.x1;
            f[i + 1] = rc.y1;
            u[i + 2] = tc.qTl;
            u[i + 3] = cTl;
            f[i + 4] = rc.x2;
            f[i + 5] = rc.y2;
            u[i + 6] = tc.qTr;
            u[i + 7] = cTr;
            f[i + 8] = rc.x4;
            f[i + 9] = rc.y4;
            u[i + 10] = tc.qBl;
            u[i + 11] = cBl;
            f[i + 12] = rc.x3;
            f[i + 13] = rc.y3;
            u[i + 14] = tc.qBr;
            u[i + 15] = cBr;
        }
        this.curRenderOp.numQuads++;
    }
    newRenderOp(node, bufferIdx) {
        const curRenderOp = node;
        curRenderOp.renderOpBufferIdx = bufferIdx;
        curRenderOp.numQuads = 0;
        curRenderOp.renderOpTexture = null;
        this.curRenderOp = curRenderOp;
        this.renderOps.push(curRenderOp);
    }
    reuseRenderOp(node) {
        const curRenderOp = this.curRenderOp;
        if (curRenderOp === null) return false;
        if (compareRect(curRenderOp.clippingRect, node.clippingRect) === false) return false;
        const shader = node.props.shader;
        const curShader = curRenderOp.shader;
        if (curShader.shaderKey === "default" && shader.shaderKey === "default") return true;
        if (curShader !== shader) {
            if (curShader.program !== shader.program || curShader.uniforms !== shader.uniforms) return false;
        }
        if (curShader.program.reuseRenderOp(node, curRenderOp) === false) return false;
        return true;
    }
    addRenderOp(renderable) {
        if (true === true) {
            this.coreTextRenderOps.push(renderable);
            return;
        }
        this.renderOps.push(renderable);
        this.curRenderOp = null;
    }
    flushTextRenderOps() {
        const len = this.coreTextRenderOps.length;
        if (len === 0) return;
        for (let i = 0; i < len; i++) this.renderOps.push(this.coreTextRenderOps[i]);
        this.coreTextRenderOps.length = 0;
        this.curRenderOp = null;
        this.curSdfRenderOp = null;
    }
    addSdfQuads(glyphs, glyphCount, fontScale, transform, color, worldAlpha, distanceRange, atlasTexture, clippingRect, width, height, sdfShader) {
        if (glyphCount === 0) return;
        this.sdfBufferChanged = true;
        let idx = this.sdfBufferIdx;
        if (this.ensureSdfBufferCapacity(idx + glyphCount * FLOATS_PER_GLYPH) === false) return;
        const f = this.fSdfBuffer;
        const u = this.uiSdfBuffer;
        const r = color >>> 24;
        const g = color >>> 16 & 255;
        const b = color >>> 8 & 255;
        const packedColor = ((color & 255) << 24 | b << 16 | g << 8 | r) >>> 0;
        const m0 = transform.ta * fontScale;
        const m1 = transform.tc * fontScale;
        const m3 = transform.tb * fontScale;
        const m4 = transform.td * fontScale;
        const m6 = transform.tx;
        const m7 = transform.ty;
        const startQuad = this.sdfQuadCount;
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
            go += 8;
            const wx_tl = m0 * gx1 + m3 * gy1 + m6;
            const wy_tl = m1 * gx1 + m4 * gy1 + m7;
            const wx_tr = m0 * gx2 + m3 * gy1 + m6;
            const wy_tr = m1 * gx2 + m4 * gy1 + m7;
            const wx_bl = m0 * gx1 + m3 * gy2 + m6;
            const wy_bl = m1 * gx1 + m4 * gy2 + m7;
            const wx_br = m0 * gx2 + m3 * gy2 + m6;
            const wy_br = m1 * gx2 + m4 * gy2 + m7;
            f[idx] = wx_tl;
            f[idx + 1] = wy_tl;
            f[idx + 2] = u1;
            f[idx + 3] = v1;
            u[idx + 4] = packedColor;
            f[idx + 5] = distanceRange;
            idx += 6;
            f[idx] = wx_tr;
            f[idx + 1] = wy_tr;
            f[idx + 2] = u2;
            f[idx + 3] = v1;
            u[idx + 4] = packedColor;
            f[idx + 5] = distanceRange;
            idx += 6;
            f[idx] = wx_bl;
            f[idx + 1] = wy_bl;
            f[idx + 2] = u1;
            f[idx + 3] = v2;
            u[idx + 4] = packedColor;
            f[idx + 5] = distanceRange;
            idx += 6;
            f[idx] = wx_br;
            f[idx + 1] = wy_br;
            f[idx + 2] = u2;
            f[idx + 3] = v2;
            u[idx + 4] = packedColor;
            f[idx + 5] = distanceRange;
            idx += 6;
        }
        this.sdfBufferIdx = idx;
        this.sdfQuadCount += glyphCount;
        this.finalizeSdfBatch(startQuad, glyphCount, 0, 0, atlasTexture, clippingRect, worldAlpha, width, height, sdfShader);
    }
    addSdfCachedQuads(cachedVertices, numGlyphs, dx, dy, atlasTexture, clippingRect, worldAlpha, width, height, sdfShader) {
        if (numGlyphs === 0) return;
        const startQuad = this.sdfQuadCount;
        if (this.ensureSdfBufferCapacity(this.sdfBufferIdx + cachedVertices.length) === false) return;
        this.fSdfBuffer.set(cachedVertices, this.sdfBufferIdx);
        this.sdfBufferIdx += cachedVertices.length;
        this.sdfQuadCount += numGlyphs;
        this.finalizeSdfBatch(startQuad, numGlyphs, dx, dy, atlasTexture, clippingRect, worldAlpha, width, height, sdfShader);
    }
    finalizeSdfBatch(startQuad, glyphCount, dx, dy, atlasTexture, clippingRect, worldAlpha, width, height, sdfShader) {
        this.sdfWriteSig = this.sdfWriteSig * 31 + glyphCount | 0;
        const cur = this.curSdfRenderOp;
        if (cur !== null && cur.renderOpTexture === atlasTexture && cur.translateX === dx && cur.translateY === dy && cur.worldAlpha === worldAlpha && compareRect(cur.clippingRect, clippingRect) === true) {
            cur.numQuads += glyphCount;
            return;
        }
        const opList = true === true ? this.coreTextRenderOps : this.renderOps;
        const op = new SdfRenderOp(this, sdfShader, this.sdfQuadBufferCollection, atlasTexture, worldAlpha, clippingRect, width, height);
        op.startQuad = startQuad;
        op.numQuads = glyphCount;
        op.translateX = dx;
        op.translateY = dy;
        opList.push(op);
        this.curSdfRenderOp = op;
        this.curRenderOp = null;
    }
    ensureSdfBufferCapacity(requiredSize) {
        const currentSize = this.fSdfBuffer.length;
        if (requiredSize <= currentSize) return true;
        if (requiredSize > MAX_SDF_BUFFER_FLOATS) return false;
        let newCapacity = currentSize * 2;
        while (newCapacity < requiredSize) newCapacity *= 2;
        if (newCapacity > MAX_SDF_BUFFER_FLOATS) newCapacity = MAX_SDF_BUFFER_FLOATS;
        const sdfBufSize = newCapacity * Float32Array.BYTES_PER_ELEMENT;
        const newBuffer = new ArrayBuffer(sdfBufSize);
        const newFSdfBuffer = new Float32Array(newBuffer);
        const newUiSdfBuffer = new Uint32Array(newBuffer);
        newFSdfBuffer.set(this.fSdfBuffer);
        this.sdfBuffer = newBuffer;
        this.fSdfBuffer = newFSdfBuffer;
        this.uiSdfBuffer = newUiSdfBuffer;
        this.sdfBufferChanged = true;
        return true;
    }
    useShader(program) {
        if (this.attachedShader === program) return;
        if (this.attachedShader !== null) this.attachedShader.detach();
        program.attach();
        this.attachedShader = program;
    }
    render(surface = "screen") {
        if (true === true) this.flushTextRenderOps();
        const {glw: glw, quadBuffer: quadBuffer} = this;
        const buffer = this.quadBufferCollection.getBuffer("a_position") || null;
        const BYTES = Float32Array.BYTES_PER_ELEMENT;
        if (DIRTY_QUAD_BUFFER) {
            const renderList = this.stage.renderList;
            const len = renderList.length;
            let fullUpload = this.needsFullUpload || this.curBufferIdx > this.lastUploadedBufferSize;
            if (fullUpload === false) fullUpload = this.dirtyQuadCount > len * FULL_UPLOAD_DIRTY_RATIO;
            if (fullUpload === true) {
                const arr = new Float32Array(quadBuffer, 0, this.curBufferIdx);
                glw.arrayBufferData(buffer, arr, glw.DYNAMIC_DRAW);
                this.needsFullUpload = false;
                this.lastUploadedBufferSize = this.curBufferIdx;
                for (let i = 0; i < len; i++) renderList[i].isQuadDirty = false;
            } else if (this.dirtyQuadCount > 0) {
                let runStart = -1;
                let runWords = 0;
                for (let i = 0; i < len; i++) {
                    const node = renderList[i];
                    const idx = node.quadBufferIndex;
                    if (idx === -1) continue;
                    const dirty = node.isQuadDirty === true;
                    if (dirty === true && runStart !== -1 && idx === runStart + runWords) {
                        runWords += WORDS_PER_QUAD;
                        node.isQuadDirty = false;
                        continue;
                    }
                    if (runStart !== -1) {
                        const byteOffset = runStart * BYTES;
                        glw.arrayBufferSubData(buffer, byteOffset, new Float32Array(quadBuffer, byteOffset, runWords));
                        runStart = -1;
                        runWords = 0;
                    }
                    if (dirty === true) {
                        runStart = idx;
                        runWords = WORDS_PER_QUAD;
                        node.isQuadDirty = false;
                    }
                }
                if (runStart !== -1) {
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
        this.quadBufferUsage = this.curBufferIdx * Float32Array.BYTES_PER_ELEMENT;
        this.numQuadsRendered = this.quadBufferUsage / 64;
    }
    uploadSdfBuffer() {
        if (this.sdfBufferIdx === 0) {
            this.lastUploadedSdfSize = 0;
            this.lastUploadedSdfSig = 0;
            return;
        }
        if (this.sdfBufferChanged === false && this.sdfBufferIdx === this.lastUploadedSdfSize && this.sdfWriteSig === this.lastUploadedSdfSig) return;
        const glw = this.glw;
        const sdfBuf = this.sdfQuadBufferCollection.getBuffer("a_position") || null;
        const sdfArr = new Float32Array(this.sdfBuffer, 0, this.sdfBufferIdx);
        glw.arrayBufferData(sdfBuf, sdfArr, glw.DYNAMIC_DRAW);
        this.lastUploadedSdfSize = this.sdfBufferIdx;
        this.lastUploadedSdfSig = this.sdfWriteSig;
        this.sdfBufferChanged = false;
    }
    getQuadCount() {
        return this.numQuadsRendered;
    }
    getRenderOpCount() {
        return this.renderOps.length;
    }
    updateViewport() {
        this.glw.updateCanvasDimensions();
        this.glw.viewport(0, 0, this.glw.canvasW, this.glw.canvasH);
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
        let outOfMemory = false;
        for (let i = 0; i < MAX_DRAINED_GL_ERRORS; i++) {
            const error = glw.getError();
            if (error === 0) break;
            if (error === GL_OUT_OF_MEMORY) outOfMemory = true;
        }
        return outOfMemory;
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
                x1 = (1 - desiredSize / dimensions.w) * clampUnit((_resizeMode$clipX = resizeMode.clipX) !== null && _resizeMode$clipX !== void 0 ? _resizeMode$clipX : .5);
                x2 = x1 + desiredSize / dimensions.w;
            }
            if (scaleY < scale) {
                var _resizeMode$clipY;
                const desiredSize = precision * node.props.h;
                y1 = (1 - desiredSize / dimensions.h) * clampUnit((_resizeMode$clipY = resizeMode.clipY) !== null && _resizeMode$clipY !== void 0 ? _resizeMode$clipY : .5);
                y2 = y1 + desiredSize / dimensions.h;
            }
        }
        if (textureOptions.flipX === true) [x1, x2] = [ x2, x1 ];
        if (textureOptions.flipY === true) [y1, y2] = [ y2, y1 ];
        return createTextureCoords(x1, y1, x2, y2);
    }
    invalidateQuadBuffer() {
        this.sdfBufferChanged = true;
        if (!DIRTY_QUAD_BUFFER) return;
        const renderList = this.stage.renderList;
        for (let i = 0, len = renderList.length; i < len; i++) {
            renderList[i].quadBufferIndex = -1;
            renderList[i].isQuadDirty = true;
        }
        this.curBufferIdx = 0;
        this.lastUploadedBufferSize = 0;
        this.needsFullUpload = true;
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
};

var Sdf = {
    vertex: `\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    // Pre-transformed world-pixel position\n    attribute vec2 a_position;\n    attribute vec2 a_textureCoords;\n    // Per-vertex color (RGBA, unsigned byte, normalized)\n    attribute vec4 a_color;\n    // Per-vertex SDF distance range\n    attribute float a_distRange;\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n    // Per-render-op translation, written by WebGlShaderProgram.bindRenderOp\n    // (a reserved system uniform, like u_resolution and u_pixelRatio).\n    // Cached glyph vertices stay at their cache-base position; a text node\n    // that moved by pure translation carries the delta here instead of\n    // rewriting every vertex on the CPU, which keeps the shared SDF buffer\n    // byte-stable so its per-frame upload can be skipped.\n    uniform vec2 u_translate;\n    // Per-render-op world alpha (system uniform, see bindRenderOp). Kept out\n    // of the packed vertex colors for the same reason as u_translate: an\n    // alpha fade must not dirty the cached vertex bytes. Applied here rather\n    // than in the fragment shader because a vertex is cheaper than a\n    // fragment and v_color.a interpolates linearly.\n    uniform float u_alpha;\n\n    varying vec2 v_texcoord;\n    varying float v_scaledDistRange;\n    varying vec4 v_color;\n\n    void main() {\n      // a_position is world pixel space at the node's cache base\n      vec2 screenSpace = ((a_position + u_translate) * u_pixelRatio / u_resolution * 2.0 - 1.0) * vec2(1, -1);\n\n      gl_Position = vec4(screenSpace, 0.0, 1.0);\n      v_texcoord = a_textureCoords;\n      v_scaledDistRange = a_distRange * u_pixelRatio;\n      // a_color.a is the node color's own alpha; the fragment shader folds\n      // v_color.a into opacity, which also scales rgb, so this one multiply\n      // applies the world alpha completely.\n      v_color = vec4(a_color.rgb, a_color.a * u_alpha);\n    }\n  `,
    fragment: `\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    uniform sampler2D u_texture;\n\n    varying vec2 v_texcoord;\n    varying float v_scaledDistRange;\n    varying vec4 v_color;\n\n    float median(float r, float g, float b) {\n        return clamp(b, min(r, g), max(r, g));\n    }\n\n    void main() {\n        vec3 s = texture2D(u_texture, v_texcoord).rgb;\n        float sigDist = v_scaledDistRange * (median(s.r, s.g, s.b) - 0.5);\n        float opacity = clamp(sigDist + 0.5, 0.0, 1.0) * v_color.a;\n\n        // Premultiply RGB by final opacity\n        gl_FragColor = vec4(v_color.rgb * opacity, opacity);\n    }\n  `
};

var type$2 = "sdf";

var sdfShader = null;

var maxLayoutCacheSize$1 = 250;

var init$2 = stage => {
    init$3();
    const configuredCacheSize = stage.options.textLayoutCacheSize;
    if (configuredCacheSize !== void 0) maxLayoutCacheSize$1 = configuredCacheSize;
    stage.shManager.registerShaderType("Sdf", Sdf);
    sdfShader = null;
};

var getSdfShader = stage => {
    if (sdfShader === null) sdfShader = stage.shManager.createShader("Sdf");
    return sdfShader;
};

var font$1 = SdfFontHandler_exports;

var layoutCache$1 = new Map;

var getLayoutCacheKey = props => `${props.fontFamily}-${props.fontStyle}-${props.fontSize}-${props.letterSpacing}-${props.lineHeight}-${props.maxHeight}-${props.maxWidth}-${props.maxLines}-${props.textAlign}-${props.wordBreak}-${props.overflowSuffix}-${props.text}`;

var renderText$1 = props => {
    if (props.text.length === 0) return {
        width: 0,
        height: 0
    };
    const cacheKey = getLayoutCacheKey(props);
    let layout = layoutCache$1.get(cacheKey);
    if (layout !== void 0) {
        layoutCache$1.delete(cacheKey);
        layoutCache$1.set(cacheKey, layout);
        return {
            remainingLines: 0,
            hasRemainingText: false,
            width: layout.width,
            height: layout.height,
            layout: layout
        };
    }
    const fontData = getFontData(props.fontFamily);
    if (fontData === void 0) return {
        width: 0,
        height: 0
    };
    layout = generateTextLayout(props, fontData);
    layoutCache$1.set(cacheKey, layout);
    if (layoutCache$1.size > maxLayoutCacheSize$1) {
        const oldest = layoutCache$1.keys().next().value;
        layoutCache$1.delete(oldest);
    }
    return {
        remainingLines: 0,
        hasRemainingText: false,
        width: layout.width,
        height: layout.height,
        layout: layout
    };
};

var addQuads$1 = _layout => null;

var renderQuads$1 = (renderer, layout, _vertexBuffer, renderProps) => {
    const fontFamily = renderProps.fontFamily;
    const atlasTexture = getAtlas(fontFamily);
    if (atlasTexture === null) return null;
    const webGlRenderer = renderer;
    const cache = renderProps.sdfCache;
    const ctxTexture = atlasTexture.ctxTexture;
    const shader = getSdfShader(webGlRenderer.stage);
    if (cache !== void 0 && cache.vertices !== null) {
        const t = renderProps.globalTransform;
        if (cache.layoutRef === layout && cache.color === renderProps.color && cache.ta === t.ta && cache.tc === t.tc && cache.tb === t.tb && cache.td === t.td) {
            let dx = t.tx - cache.tx;
            let dy = t.ty - cache.ty;
            if ((dx !== 0 || dy !== 0) && dx === cache.lastDx && dy === cache.lastDy) {
                const vertices = cache.vertices;
                const len = vertices.length;
                for (let i = 0; i < len; i += 6) {
                    vertices[i] = vertices[i] + dx;
                    vertices[i + 1] = vertices[i + 1] + dy;
                }
                cache.tx = t.tx;
                cache.ty = t.ty;
                webGlRenderer.sdfBufferChanged = true;
                dx = 0;
                dy = 0;
            }
            cache.lastDx = dx;
            cache.lastDy = dy;
            webGlRenderer.addSdfCachedQuads(cache.vertices, cache.glyphCount, dx, dy, ctxTexture, renderProps.clippingRect, renderProps.worldAlpha, layout.width, layout.height, shader);
            return null;
        }
    }
    const startIdx = webGlRenderer.sdfBufferIdx;
    webGlRenderer.addSdfQuads(layout.glyphs, layout.glyphCount, layout.fontScale, renderProps.globalTransform, renderProps.color, renderProps.worldAlpha, layout.distanceRange, ctxTexture, renderProps.clippingRect, layout.width, layout.height, shader);
    if (cache !== void 0) {
        const endIdx = webGlRenderer.sdfBufferIdx;
        const len = endIdx - startIdx;
        if (len > 0) {
            if (cache.vertices === null || cache.vertices.length !== len) cache.vertices = new Float32Array(len);
            cache.vertices.set(webGlRenderer.fSdfBuffer.subarray(startIdx, endIdx));
            cache.glyphCount = layout.glyphCount;
            cache.color = renderProps.color;
            cache.layoutRef = layout;
            cache.lastDx = 0;
            cache.lastDy = 0;
            const t = renderProps.globalTransform;
            cache.ta = t.ta;
            cache.tc = t.tc;
            cache.tb = t.tb;
            cache.td = t.td;
            cache.tx = t.tx;
            cache.ty = t.ty;
        }
    }
    return null;
};

var generateTextLayout = (props, fontCache) => {
    const fontSize = props.fontSize;
    const fontFamily = props.fontFamily;
    const metrics = getFontMetrics$1(fontFamily, fontSize);
    const fontData = fontCache.data;
    const commonFontData = fontData.common;
    const designFontSize = fontData.info.size;
    const atlasBase = commonFontData.base;
    const lineHeight = props.lineHeight;
    const atlasWidth = commonFontData.scaleW;
    const atlasHeight = commonFontData.scaleH;
    const invAtlasWidth = 1 / atlasWidth;
    const invAtlasHeight = 1 / atlasHeight;
    const glyphMap = fontCache.glyphMap;
    const kernings = fontCache.kernings;
    const fallbackGlyphId = true ? 32 : 63;
    const fontScale = fontSize / designFontSize;
    const letterSpacing = props.letterSpacing / fontScale;
    const maxWidth = props.maxWidth / fontScale;
    const maxHeight = props.maxHeight;
    const [lines, _remainingLines, _hasRemainingText, _bareLineHeight, lineHeightPx, effectiveWidth, effectiveHeight] = mapTextLayout(measureText$1, metrics, props.text, props.textAlign, fontFamily, lineHeight, props.overflowSuffix, props.wordBreak, letterSpacing, props.maxLines, maxWidth, maxHeight);
    const lineAmount = lines.length;
    let maxGlyphs = 0;
    for (let i = 0; i < lineAmount; i++) maxGlyphs += lines[i][0].length;
    const glyphs = new Float32Array(maxGlyphs * 8);
    let glyphIdx = 0;
    let glyphCount = 0;
    let currentX = 0;
    let baselineY = 0;
    for (let i = 0; i < lineAmount; i++) {
        const line = lines[i];
        const textLine = line[0];
        const textLineLength = textLine.length;
        let prevGlyphId = 0;
        currentX = line[3];
        baselineY = line[4] / fontScale;
        for (let j = 0; j < textLineLength; j++) {
            const codepoint = textLine.codePointAt(j);
            if (codepoint > 65535) j++;
            if (codepoint === 8203) continue;
            const char = textLine[j];
            if (hasZeroWidthSpace(char) === true) continue;
            let glyph = glyphMap.get(codepoint);
            if (glyph === void 0) {
                glyph = glyphMap.get(fallbackGlyphId);
                if (glyph === void 0) continue;
            }
            let kerning = 0;
            if (prevGlyphId !== 0) {
                const seconds = kernings[glyph.id];
                if (seconds !== void 0) {
                    const amount = seconds[prevGlyphId];
                    if (amount !== void 0) kerning = amount;
                }
            }
            currentX += kerning;
            glyphs[glyphIdx] = currentX + glyph.xoffset;
            glyphs[glyphIdx + 1] = baselineY + glyph.yoffset - atlasBase;
            glyphs[glyphIdx + 2] = glyph.width;
            glyphs[glyphIdx + 3] = glyph.height;
            glyphs[glyphIdx + 4] = glyph.x * invAtlasWidth;
            glyphs[glyphIdx + 5] = glyph.y * invAtlasHeight;
            glyphs[glyphIdx + 6] = glyph.width * invAtlasWidth;
            glyphs[glyphIdx + 7] = glyph.height * invAtlasHeight;
            glyphIdx += 8;
            glyphCount++;
            currentX += glyph.xadvance + letterSpacing;
            prevGlyphId = glyph.id;
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
};

var cleanup$1 = () => {
    while (layoutCache$1.size > maxLayoutCacheSize$1) {
        const oldest = layoutCache$1.keys().next().value;
        layoutCache$1.delete(oldest);
    }
};

var SdfTextRenderer = {
    type: type$2,
    font: font$1,
    renderText: renderText$1,
    addQuads: addQuads$1,
    renderQuads: renderQuads$1,
    init: init$2,
    cleanup: cleanup$1
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

var loadFont = (stage, options) => {
    const {fontFamily: fontFamily, fontUrl: fontUrl, metrics: metrics} = options;
    const names = Array.isArray(fontFamily) ? fontFamily : [ fontFamily ];
    const primary = names[0];
    const prefetched = takeCanvasPrefetch(primary);
    if (fontCache.has(primary) === true) return Promise.resolve();
    const existingPromise = fontLoadPromises.get(primary);
    if (existingPromise !== void 0) return existingPromise;
    for (let i = 0; i < names.length; i++) nodesWaitingForFont[names[i]] = [];
    const loadPromise = Promise.resolve(prefetched).then(faces => faces != null && faces.length === names.length ? faces : Promise.all(names.map(name => new FontFace(name, `url(${fontUrl})`).load()))).then(faces => {
        for (let i = 0; i < names.length; i++) {
            const loadedFont = faces[i];
            stage.platform.addFont(loadedFont);
            processFontData(names[i], loadedFont, metrics);
        }
    }).then(() => {
        for (let i = 0; i < names.length; i++) {
            const name = names[i];
            fontLoadPromises.delete(name);
            const nwff = nodesWaitingForFont[name];
            if (nwff !== void 0) {
                for (let key in nwff) nwff[key].setUpdateType(UpdateType.Local);
                delete nodesWaitingForFont[name];
            }
        }
    }).catch(error => {
        for (let i = 0; i < names.length; i++) fontLoadPromises.delete(names[i]);
        console.error(`Failed to load font: ${primary}`, error);
        throw error;
    });
    for (let i = 0; i < names.length; i++) fontLoadPromises.set(names[i], loadPromise);
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
    if (metrics === void 0) metrics = calculateFontMetrics(fontFamily, fontSize);
    return processFontMetrics(fontFamily, fontSize, metrics);
};

var processFontMetrics = (fontFamily, fontSize, metrics) => {
    const label = fontFamily + fontSize;
    const normalized = normalizeFontMetrics(metrics, fontSize);
    normalizedMetrics.set(label, normalized);
    return normalized;
};

var measureText = (text, fontFamily, letterSpacing) => {
    if (letterSpacing === 0) return measureContext$1.measureText(text).width;
    let width = 0;
    for (let i = 0, n = text.length; i < n; i++) {
        const char = text.charAt(i);
        if (hasZeroWidthSpace(char) === true) continue;
        width += measureContext$1.measureText(char).width + letterSpacing;
    }
    return width;
};

function calculateFontMetrics(fontFamily, fontSize) {
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

var type = "canvas";

var font = CanvasFontHandler_exports;

var canvas = null;

var context = null;

var measureCanvas = null;

var measureContext = null;

var layoutCache = new Map;

var maxLayoutCacheSize = 250;

var init = stage => {
    const dpr = stage.options.devicePhysicalPixelRatio;
    const configuredCacheSize = stage.options.textLayoutCacheSize;
    if (configuredCacheSize !== void 0) maxLayoutCacheSize = configuredCacheSize;
    canvas = stage.platform.createCanvas();
    context = canvas.getContext("2d", {
        willReadFrequently: true
    });
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    context.textRendering = "optimizeSpeed";
    measureCanvas = stage.platform.createCanvas();
    measureContext = measureCanvas.getContext("2d");
    measureContext.setTransform(dpr, 0, 0, dpr, 0, 0);
    measureContext.textRendering = "optimizeSpeed";
    measureCanvas.width = 1;
    measureCanvas.height = 1;
    init$1(context, measureContext);
};

var renderText = props => {
    var _props$color;
    assertTruthy(canvas, "Canvas is not initialized");
    assertTruthy(context, "Canvas context is not available");
    assertTruthy(measureContext, "Canvas measureContext is not available");
    if (props.text.length === 0) return {
        width: 0,
        height: 0
    };
    const {text: text, fontFamily: fontFamily, fontStyle: fontStyle, fontSize: fontSize, textAlign: textAlign, maxLines: maxLines, lineHeight: lineHeight, verticalAlign: verticalAlign, overflowSuffix: overflowSuffix, maxWidth: maxWidth, maxHeight: maxHeight, wordBreak: wordBreak} = props;
    const font = `${fontStyle} ${fontSize}px Unknown, ${fontFamily}`;
    measureContext.font = font;
    measureContext.textBaseline = "alphabetic";
    const metrics = getFontMetrics(fontFamily, fontSize);
    const letterSpacing = props.letterSpacing;
    const [lines, remainingLines, hasRemainingText, bareLineHeight, lineHeightPx, effectiveWidth, effectiveHeight] = mapTextLayout(measureText, metrics, text, textAlign, fontFamily, lineHeight, overflowSuffix, wordBreak, letterSpacing, maxLines, maxWidth, maxHeight);
    const lineAmount = lines.length;
    const canvasW = Math.ceil(effectiveWidth);
    const canvasH = Math.ceil(effectiveHeight);
    canvas.width = canvasW;
    canvas.height = canvasH;
    const color = (_props$color = props.color) !== null && _props$color !== void 0 ? _props$color : 4294967295;
    const r = color >>> 24 & 255;
    const g = color >>> 16 & 255;
    const b = color >>> 8 & 255;
    const a = color & 255;
    context.fillStyle = `rgba(${r},${g},${b},${a / 255})`;
    context.font = font;
    context.textBaseline = "alphabetic";
    if (fontSize >= 128) {
        context.globalAlpha = .01;
        context.fillRect(0, 0, .01, .01);
        context.globalAlpha = 1;
    }
    for (let i = 0; i < lineAmount; i++) {
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
    if (canvas.width > 0 && canvas.height > 0) imageData = context.getImageData(0, 0, canvasW, canvasH);
    return {
        imageData: imageData,
        width: effectiveWidth,
        height: effectiveHeight,
        remainingLines: remainingLines,
        hasRemainingText: hasRemainingText
    };
};

var clearLayoutCache = () => {
    layoutCache.clear();
};

var cleanup = () => {
    while (layoutCache.size > maxLayoutCacheSize) {
        const oldest = layoutCache.keys().next().value;
        layoutCache.delete(oldest);
    }
};

var addQuads = () => null;

var renderQuads = () => {};

var CanvasTextRenderer = {
    type: type,
    font: font,
    renderText: renderText,
    addQuads: addQuads,
    renderQuads: renderQuads,
    init: init,
    clearLayoutCache: clearLayoutCache,
    cleanup: cleanup
};

var WHITE = {
    isWhite: true,
    a: 1,
    r: 255,
    g: 255,
    b: 255
};

var SCRATCH = {
    isWhite: false,
    a: 1,
    r: 0,
    g: 0,
    b: 0
};

function parseColor(abgr) {
    if (abgr === 4294967295) return WHITE;
    SCRATCH.a = (abgr >>> 24 & 255) / 255;
    SCRATCH.b = abgr >>> 16 & 255;
    SCRATCH.g = abgr >>> 8 & 255;
    SCRATCH.r = abgr & 255;
    return SCRATCH;
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

var CanvasTexture = class extends CoreContextTexture {
    constructor(..._args) {
        super(..._args);
        this.image = void 0;
        this.tintCache = void 0;
    }
    load() {
        const textureData = this.textureSource.textureData;
        this.textureSource.setState("loading");
        try {
            assertTruthy(textureData == null ? void 0 : textureData.data, "Texture data is null before load");
            const size = this.onLoadRequest(textureData.data);
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
    onLoadRequest(data) {
        if (data === null) throw new Error("CanvasTexture: Texture data is null");
        if (typeof data === "object" && "mipmaps" in data) throw new Error("CanvasTexture: Compressed texture data is not supported in Canvas2D render mode");
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
        } else if (typeof ImageBitmap !== "undefined" && data instanceof ImageBitmap || data instanceof HTMLImageElement) {
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

var CanvasShaderNode = class extends CoreShaderNode {
    constructor(shaderKey, config, stage, props) {
        super(shaderKey, config, stage, props);
        this.updater = void 0;
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
                if (prevKey.length > 0) this.stage.shManager.mutateShaderValueUsage(prevKey, -1);
                const computed = this.stage.shManager.getShaderValues(this.valueKey);
                if (computed !== void 0) {
                    this.computed = computed;
                    return;
                }
                this.computed = {};
                this.updater(this.node);
                this.stage.shManager.setShaderValues(this.valueKey, this.computed);
            };
        }
    }
    toColorString(rgba) {
        return normalizeCanvasColor(rgba, true);
    }
};

var CanvasRenderer = class extends CoreRenderer {
    constructor(options) {
        super(options);
        this.context = void 0;
        this.canvas = void 0;
        this.pixelRatio = void 0;
        this.clearColor = void 0;
        this.clearColorAlpha = void 0;
        this.shaderContextNode = null;
        this.shaderContextTexture = null;
        this.shaderRenderContext = () => {
            this.renderContext(this.shaderContextNode, this.shaderContextTexture);
        };
        this.mode = "canvas";
        const {canvas: canvas} = options;
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        this.pixelRatio = this.stage.pixelRatio;
        this.clearColor = normalizeCanvasColor(this.stage.clearColor);
        this.clearColorAlpha = this.stage.clearColor >>> 24 & 255;
    }
    reset() {
        const ctx = this.context;
        const w = this.canvas.width;
        const h = this.canvas.height;
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, w, h);
        if (this.clearColorAlpha !== 0) {
            ctx.fillStyle = this.clearColor;
            ctx.fillRect(0, 0, w, h);
        }
        ctx.scale(this.pixelRatio, this.pixelRatio);
    }
    render() {}
    addQuad(node, renderTexture) {
        const ctx = this.context;
        const {tx: tx, ty: ty, ta: ta, tb: tb, tc: tc, td: td} = node.globalTransform;
        const clippingRect = node.clippingRect;
        let texture = renderTexture !== void 0 ? renderTexture : node.placeholderActive === true ? this.stage.defaultTexture : node.props.texture || this.stage.defaultTexture;
        if (texture !== null) {
            const textureType = texture.type;
            if (textureType !== TextureType.image && textureType !== TextureType.subTexture && textureType !== TextureType.color && textureType !== TextureType.noise) return;
        }
        const hasTransform = ta !== 1 || td !== 1 || tb !== 0 || tc !== 0;
        const clippingValid = clippingRect.valid === true;
        if (clippingValid === true && clippingRect.w === 0 && clippingRect.h === 0) return;
        const hasClipping = clippingValid === true && clippingRect.w !== 0 && clippingRect.h !== 0;
        const shader = node.props.shader;
        const hasShader = shader !== null;
        let saveAndRestore = hasTransform === true || hasClipping === true;
        if (hasShader === true) saveAndRestore = saveAndRestore || shader.applySNR;
        if (saveAndRestore) ctx.save();
        if (hasClipping === true) {
            ctx.beginPath();
            ctx.rect(clippingRect.x, clippingRect.y, clippingRect.w, clippingRect.h);
            ctx.clip();
        }
        if (hasTransform === true) {
            const scale = this.pixelRatio;
            ctx.setTransform(ta, tc, tb, td, tx * scale, ty * scale);
            ctx.scale(scale, scale);
            ctx.translate(-tx, -ty);
        }
        if (hasShader === true) {
            this.shaderContextNode = node;
            this.shaderContextTexture = texture;
            shader.render(ctx, node, this.shaderRenderContext);
            this.shaderContextNode = null;
            this.shaderContextTexture = null;
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
            var _tintColor$a;
            const tintColor = parseColor(color);
            let image;
            if (textureType === TextureType.subTexture) image = texture.parentTexture.ctxTexture.getImage(tintColor); else image = texture.ctxTexture.getImage(tintColor);
            if (image === null || image === void 0) return;
            const imageWidth = image.width;
            const imageHeight = image.height;
            if (typeof imageWidth !== "number" || typeof imageHeight !== "number" || imageWidth <= 0 || imageHeight <= 0) return;
            this.context.globalAlpha = (_tintColor$a = tintColor.a) !== null && _tintColor$a !== void 0 ? _tintColor$a : node.worldAlpha;
            const txCoords = node.textureCoords;
            if (txCoords) {
                const ix = imageWidth;
                const iy = imageHeight;
                let sx = txCoords.x1 * ix;
                let sy = txCoords.y1 * iy;
                let sw = (txCoords.x2 - txCoords.x1) * ix;
                let sh = (txCoords.y2 - txCoords.y1) * iy;
                let flipX = false;
                let flipY = false;
                if (sw < 0) {
                    flipX = true;
                    sx += sw;
                    sw = Math.abs(sw);
                }
                if (sh < 0) {
                    flipY = true;
                    sy += sh;
                    sh = Math.abs(sh);
                }
                if (flipX || flipY) {
                    this.context.save();
                    this.context.translate(tx + (flipX ? width : 0), ty + (flipY ? height : 0));
                    this.context.scale(flipX ? -1 : 1, flipY ? -1 : 1);
                    this.context.drawImage(image, sx, sy, sw, sh, 0, 0, width, height);
                    this.context.restore();
                } else this.context.drawImage(image, sx, sy, sw, sh, tx, ty, width, height);
            } else this.context.drawImage(image, tx, ty, width, height);
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
            let startColor = color;
            const startAlpha = startColor >>> 24 & 255;
            const endAlpha = endColor >>> 24 & 255;
            if (startAlpha === 0 && endAlpha > 0) startColor = (startColor & 4278190080 | endColor & 16777215) >>> 0; else if (endAlpha === 0 && startAlpha > 0) endColor = (endColor & 4278190080 | startColor & 16777215) >>> 0;
            const gradient = this.context.createLinearGradient(tx, ty, endX, endY);
            gradient.addColorStop(0, normalizeCanvasColor(startColor));
            gradient.addColorStop(1, normalizeCanvasColor(endColor));
            this.context.fillStyle = gradient;
            this.context.fillRect(tx, ty, width, height);
        } else {
            this.context.fillStyle = normalizeCanvasColor(color);
            this.context.fillRect(tx, ty, width, height);
        }
    }
    renderNodeContent(node, target) {
        let texture = node.props.texture;
        if (node.placeholderActive === true || texture === null) texture = this.stage.defaultTexture;
        const prev = this.context;
        this.context = target;
        this.renderContext(node, texture);
        this.context = prev;
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
            vertexArrayObject: false,
            maxTextureSize: 0,
            maxTextureUnits: 0
        };
    }
    checkForOutOfMemory() {
        return false;
    }
    updateClearColor(color) {
        this.clearColor = normalizeCanvasColor(color);
        this.clearColorAlpha = color >>> 24 & 255;
    }
    getTextureCoords(node) {
        const texture = node.texture;
        if (texture === null) return;
        if ((texture.type === TextureType.subTexture ? texture.parentTexture.ctxTexture : texture.ctxTexture) === void 0) return;
        const textureOptions = node.props.textureOptions;
        if (texture.type !== TextureType.subTexture && textureOptions === void 0) return {
            x1: 0,
            y1: 0,
            x2: 1,
            y2: 1
        };
        let x1 = 0, y1 = 0, x2 = 1, y2 = 1;
        if (texture.type === TextureType.subTexture) {
            const {w: parentW, h: parentH} = texture.parentTexture.dimensions;
            const {x: x, y: y, w: w, h: h} = texture.props;
            x1 = x / parentW;
            y1 = y / parentH;
            x2 = x1 + w / parentW;
            y2 = y1 + h / parentH;
        }
        if (textureOptions !== void 0 && textureOptions !== null) {
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
                    x1 = (1 - desiredSize / dimensions.w) * clampUnit((_resizeMode$clipX = resizeMode.clipX) !== null && _resizeMode$clipX !== void 0 ? _resizeMode$clipX : .5);
                    x2 = x1 + desiredSize / dimensions.w;
                }
                if (scaleY < scale) {
                    var _resizeMode$clipY;
                    const desiredSize = precision * node.props.h;
                    y1 = (1 - desiredSize / dimensions.h) * clampUnit((_resizeMode$clipY = resizeMode.clipY) !== null && _resizeMode$clipY !== void 0 ? _resizeMode$clipY : .5);
                    y2 = y1 + desiredSize / dimensions.h;
                }
            }
            if (textureOptions.flipX === true) [x1, x2] = [ x2, x1 ];
            if (textureOptions.flipY === true) [y1, y2] = [ y2, y1 ];
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
    const event = new KeyboardEvent(eventName, {
        key: key,
        keyCode: keyCode,
        which: keyCode,
        ctrlKey: false,
        altKey: false,
        shiftKey: false,
        metaKey: false,
        bubbles: true
    });
    if (event.key !== key || event.keyCode !== keyCode) {
        Object.defineProperty(event, "key", {
            get: () => key
        });
        Object.defineProperty(event, "keyCode", {
            get: () => keyCode
        });
        Object.defineProperty(event, "which", {
            get: () => keyCode
        });
    }
    return event;
}

var [cursorVisible, setCursorVisible] = createSignal(false);

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
        if ((isFunction(parent.onMouseClick) || isFunction(parent.onEnter)) && testCollision(px, py, parent.lng.absX || 0, parent.lng.absY || 0, parent.width || 0, parent.height || 0)) return parent;
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
        spread(_el$, mergeProps$1(props, {
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
    return mergeProps(props, {
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
        spread(_el$, mergeProps$1(props, {
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
        const existing = keepAliveRouteElements.get(key);
        if (existing) existing.savedFocusedElement = activeElement();
        elm.alpha = 0;
    });
    const onRender = chainFunctions(props.onRender, elm => {
        const existing = keepAliveRouteElements.get(key);
        const savedFocusedElement = existing == null ? void 0 : existing.savedFocusedElement;
        if (existing) existing.savedFocusedElement = void 0;
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
    const routeElement = createComponent(Route, mergeProps$1(props, {
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
    atlasDataUrl: "/solid-demo-app/sdfbatch/fonts/Roboto-Regular.msdf.json",
    atlasUrl: "/solid-demo-app/sdfbatch/fonts/Roboto-Regular.msdf.png",
    metrics: {
        ascender: 1e3,
        descender: 100,
        lineGap: 0,
        unitsPerEm: 1e3
    }
}, {
    type: "msdf",
    fontFamily: "Roboto700",
    atlasDataUrl: "/solid-demo-app/sdfbatch/fonts/Roboto-Bold.msdf.json",
    atlasUrl: "/solid-demo-app/sdfbatch/fonts/Roboto-Bold.msdf.png",
    metrics: {
        ascender: 1e3,
        descender: 100,
        lineGap: 0,
        unitsPerEm: 1e3
    }
}, {
    type: "msdf",
    fontFamily: "Arial",
    atlasDataUrl: "/solid-demo-app/sdfbatch/fonts/Roboto-Regular.msdf.json",
    atlasUrl: "/solid-demo-app/sdfbatch/fonts/Roboto-Regular.msdf.png"
}, {
    type: "msdf",
    fontFamily: "Raleway",
    atlasDataUrl: "/solid-demo-app/sdfbatch/fonts/Raleway-ExtraBold.msdf.json",
    atlasUrl: "/solid-demo-app/sdfbatch/fonts/Raleway-ExtraBold.msdf.png"
}, {
    fontFamily: "Roboto",
    fontUrl: "/solid-demo-app/sdfbatch/fonts/Roboto-Regular.ttf"
}, {
    fontFamily: "Roboto700",
    fontUrl: "/solid-demo-app/sdfbatch/fonts/Roboto-Bold.ttf"
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
        spread(_el$, mergeProps$1(props, {
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
    })(), createComponent(Column, mergeProps$1(props, {
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
    return "/solid-demo-app/sdfbatch/" + dep;
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

var Player = lazy(() => __vitePreload(() => import("./Player-dEgQmzj3.js"), __vite__mapDeps([0,1,2,3,4,5])));

var Grid = lazy(() => __vitePreload(() => import("./Grid-D4IJ5IME.js"), __vite__mapDeps([6,1,7,2,8,9,10,5])));

var Loops = lazy(() => __vitePreload(() => import("./Loops-B8ph1hOT.js"), __vite__mapDeps([11,1,8,12,9,2,7,13,14,15,10,5])));

var Infinite = lazy(() => __vitePreload(() => import("./Infinite-CTayA1I1.js"), __vite__mapDeps([16,1,8,14,2,9,7,13,15,10,5])));

var TMDBGrid = lazy(() => __vitePreload(() => import("./TMDBGrid-D3w2-LdL.js"), __vite__mapDeps([17,1,8,9,2,18,10,14,7,13,15,5,19])));

var Portal = lazy(() => __vitePreload(() => import("./Portal-QNQntL5O.js"), __vite__mapDeps([20,1,8,21,7,2,9,13,22,3,4,15,10])));

var MatrixPage = lazy(() => __vitePreload(() => import("./Matrix-swTgY3yo.js"), __vite__mapDeps([23,1,7,2,8,9,13])));

var TextPage = lazy(() => __vitePreload(() => import("./Text-DHO1lRDk.js"), __vite__mapDeps([24,1,2,5])));

var TextPosterPage = lazy(() => __vitePreload(() => import("./TextPoster-VbzKmb5z.js"), __vite__mapDeps([25,1,13,2,8,9,5])));

var CreatePage = lazy(() => __vitePreload(() => import("./Create-DGq3Z_IE.js"), __vite__mapDeps([26,1,2,8,5])));

var ViewportPage = lazy(() => __vitePreload(() => import("./Viewport-CdGJ-3Zs.js"), __vite__mapDeps([27,1,5])));

var PositioningPage = lazy(() => __vitePreload(() => import("./Positioning-CJZ6Gkjo.js"), __vite__mapDeps([28,1,5])));

var LayoutPage = lazy(() => __vitePreload(() => import("./Layout-qLMB9l2E.js"), __vite__mapDeps([29,1,14,2,8,9,7,13,15,10,5])));

var FocusBasicsPage = lazy(() => __vitePreload(() => import("./FocusBasics-C6p4xXUu.js"), __vite__mapDeps([30,1,13,2,8,9,14,7,15,10,5])));

var KeyHandlingPage = lazy(() => __vitePreload(() => import("./KeyHandling-DLnI8VDR.js"), __vite__mapDeps([31,1,14,2,8,9,7,13,15,10,5])));

var TransitionsPage = lazy(() => __vitePreload(() => import("./Transitions-DsNptJGg.js"), __vite__mapDeps([32,1,5])));

var ComponentsPage = lazy(() => __vitePreload(() => import("./Components-CtBNcF2b.js"), __vite__mapDeps([33,1,8,14,2,9,7,13,15,10,5])));

var FocusHandlingPage = lazy(() => __vitePreload(() => import("./FocusHandling-De1DFAeB.js"), __vite__mapDeps([34,1,8,7,2,9,13,5])));

var GradientsPage = lazy(() => __vitePreload(() => import("./Gradients-S-AwoJf9.js"), __vite__mapDeps([35,1,5])));

var FlexPage = lazy(() => __vitePreload(() => import("./Flex-Ff5NvGvB.js"), __vite__mapDeps([36,1,8,7,2,9,13,15,10,5])));

var FlexGrowPage = lazy(() => __vitePreload(() => import("./FlexGrow-DdKFZPVw.js"), __vite__mapDeps([37,1,8,7,2,9,13,15,10,5])));

var FlexMenuPage = lazy(() => __vitePreload(() => import("./FlexMenu-Gj9RTVnk.js"), __vite__mapDeps([38,1,8,7,2,9,5])));

var FlexSizePage = lazy(() => __vitePreload(() => import("./FlexSize-BcanYEda.js"), __vite__mapDeps([39,1,8,7,2,9,13,15,10,5])));

var FlexColumnSizePage = lazy(() => __vitePreload(() => import("./FlexColumnSize-ujmqogxq.js"), __vite__mapDeps([40,1,2,8,7,9,13,5])));

var FlexColumnPage = lazy(() => __vitePreload(() => import("./FlexColumn-DHoXwwCg.js"), __vite__mapDeps([41,1,2,8,7,9,13,5])));

var ButtonsMaterialPage = lazy(() => __vitePreload(() => import("./ButtonsMaterial-CyOSd9xQ.js"), __vite__mapDeps([42,1,2,8,13,9,15,10])));

var SuperFlexPage = lazy(() => __vitePreload(() => import("./SuperFlex-B_iuZTIG.js"), __vite__mapDeps([43,1,7,2,8,9,13])));

var Entity = lazy(() => __vitePreload(() => import("./Entity-BxFGjRdI.js"), __vite__mapDeps([44,1,7,2,8,9,13,18,10,14,15,3,4,5])));

var People = lazy(() => __vitePreload(() => import("./People-Bt6y42NB.js"), __vite__mapDeps([45,1,7,2,8,9,14,13,15,10,3,4,5,46,47])));

var FireboltPage = lazy(() => __vitePreload(() => import("./Firebolt-c57yJ44Q.js"), __vite__mapDeps([48,1,13,2,8,9,5])));

var LoginPage = lazy(() => __vitePreload(() => import("./Login-_NT6LnPQ.js"), __vite__mapDeps([49,1,8,9,2,7,13,5])));

var VirtualPage = lazy(() => __vitePreload(() => import("./Virtual-Lj6nPcbz.js"), __vite__mapDeps([50,1,12,8,9,2,7,13,14,15,10,5])));

var TagsPage = lazy(() => __vitePreload(() => import("./Tags-JlYOZwNS.js"), __vite__mapDeps([51,1,8,5])));

var ImagePerformance = lazy(() => __vitePreload(() => import("./ImagePerformance-oUyF44bg.js"), __vite__mapDeps([52,1,46])));

var LargeImagePerformance = lazy(() => __vitePreload(() => import("./LargeImagePerformance-wr89gJOj.js"), __vite__mapDeps([53,1,46])));

var MixedImagePerformance = lazy(() => __vitePreload(() => import("./MixedImagePerformance-pksPt48x.js"), __vite__mapDeps([54,1,46])));

var TextureCompressionPerformance = lazy(() => __vitePreload(() => import("./TextureCompressionPerformance-UJ_PpabB.js"), __vite__mapDeps([55,1])));

var ComplexFlexPage = lazy(() => __vitePreload(() => import("./ComplexFlex-CtuLfPX_.js"), __vite__mapDeps([56,1,7,2,8,9,13])));

var ComplexFlexCapsPage = lazy(() => __vitePreload(() => import("./ComplexFlexCaps-Bs-pZbtL.js"), __vite__mapDeps([57,1,7,2,8,9,13])));

var BenchmarkPage = lazy(() => __vitePreload(() => import("./Benchmark-oggw0te1.js"), __vite__mapDeps([58,1,12,8,9,2,7,13,59,18,10,22,14,15,5,19])));

var RendererVersionsPage = lazy(() => __vitePreload(() => import("./RendererVersions-Be48z3F6.js"), __vite__mapDeps([60,1,5])));

var TextCenteringPage = lazy(() => __vitePreload(() => import("./TextCentering-B02ombz6.js"), __vite__mapDeps([61,1,8,10,5])));

var CountdownTimerPage = lazy(() => __vitePreload(() => import("./CountdownTimer-Bf-qzWQE.js"), __vite__mapDeps([62,1,10,5])));

var CustomButtonsPage = lazy(() => __vitePreload(() => import("./CustomButtons-CGeqIB51.js"), __vite__mapDeps([63,1,7,2,8,9,13,64,10,5])));

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
    textureProcessingTimeLimit: textureProcessingTimeLimitParam ? parseFloat(textureProcessingTimeLimitParam) : 4,
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
        shManager.registerShaderType("radialProgress", RadialProgress);
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
                                        return lazy(() => __vitePreload(() => import("./Nested-ChEUo2IJ.js"), __vite__mapDeps([65,1,7,2,8,9,14,13,15,10,5])));
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
                                        return lazy(() => __vitePreload(() => import("./KeepAlive-gnK3xWfK.js"), __vite__mapDeps([66,1])));
                                    }
                                }), createComponent(Route, {
                                    path: "suspense",
                                    get component() {
                                        return lazy(() => __vitePreload(() => import("./suspense-CWw2-y9N.js"), __vite__mapDeps([67,1,5])));
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