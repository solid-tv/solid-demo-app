import { Ut as assertTruthy, a as createElement, h as spread, l as insert, m as setProp, q as createSignal, s as createTextNode, u as insertNode, zt as getNormalizedRgbaComponents } from "./render-LD3r0MG3.js";

import { t as mergeProps } from "./mergeProps-DvLhHip7.js";

var validateArrayLength4 = value => Array.isArray(value) ? 4 === value.length ? value : 3 === value.length ? (value[3] = value[0], 
value) : 2 === value.length ? (value[2] = value[0], value[3] = value[1], value) : (value[0] = value[0] || 0, 
value[1] = value[0], value[2] = value[0], value[3] = value[0], value) : [ value, value, value, value ], edgeWidthDefine = pixelRatio => `#define EDGE_WIDTH ${(1 / pixelRatio).toFixed(8)}\n    #define INV_EDGE_WIDTH ${pixelRatio.toFixed(8)}`, rampScale = (e0, e1) => {
    const span = e1 - e0;
    return span < .000244140625 && span > -.000244140625 ? 4096 : 1 / span;
}, glslFloat = value => !0 === Number.isInteger(value) ? value.toFixed(1) : String(value), viewportGlsl = renderer => `\n    #define PIXEL_RATIO ${glslFloat(renderer.stage.pixelRatio)}\n    #define RESOLUTION vec2(${glslFloat(renderer.glw.canvasW)}, ${glslFloat(renderer.glw.canvasH)})\n\n    vec4 pxToClip(vec2 px) {\n      return vec4((px * PIXEL_RATIO / RESOLUTION * 2.0 - 1.0) * vec2(1.0, -1.0), 0.0, 1.0);\n    }\n`, paramsLength = rows => 4 * Object.keys(rows).length, paramsGlsl = rows => {
    let glsl = `uniform vec4 u_params[${Object.keys(rows).length}];`;
    for (const name in rows) glsl += `\n    #define ${name} u_params[${rows[name]}]`;
    return glsl;
}, setParam = (params, row, x, y, z, w) => {
    const i = 4 * row;
    params[i] = x, params[i + 1] = y, params[i + 2] = z, params[i + 3] = w;
}, setParamVec4 = (params, row, value) => {
    setParam(params, row, value[0], value[1], value[2], value[3]);
}, setParamRgba = (params, row, rgba) => {
    const c = getNormalizedRgbaComponents(rgba);
    setParam(params, row, c[0], c[1], c[2], c[3]);
};

function getBorderProps(prefix) {
    const pf = prefix && prefix.length > 0 ? `${prefix}-` : "", w = pf + "w";
    return {
        [w]: {
            default: [ 0, 0, 0, 0 ],
            resolve(value) {
                return void 0 !== value ? validateArrayLength4(value) : [].concat(this.default);
            }
        },
        [pf + "color"]: 4294967295,
        [pf + "align"]: {
            default: 1,
            resolve(value) {
                if (!isNaN(value)) return value;
                if ("string" == typeof value) switch (value) {
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
            get: props => props[w][0]
        },
        [pf + "right"]: {
            default: 0,
            set(value, props) {
                props[w][1] = value;
            },
            get: props => props[w][1]
        },
        [pf + "bottom"]: {
            default: 0,
            set(value, props) {
                props[w][2] = value;
            },
            get: props => props[w][2]
        },
        [pf + "left"]: {
            default: 0,
            set(value, props) {
                props[w][3] = value;
            },
            get: props => props[w][3]
        }
    };
}

var BorderTemplate = {
    props: getBorderProps()
}, HolePunchTemplate = {
    props: {
        x: 0,
        y: 0,
        w: 50,
        h: 50,
        radius: {
            default: [ 0, 0, 0, 0 ],
            resolve(value) {
                return void 0 !== value ? validateArrayLength4(value) : [].concat(this.default);
            }
        }
    }
}, RoundedTemplate = {
    props: {
        radius: {
            default: [ 0, 0, 0, 0 ],
            resolve(value) {
                return void 0 !== value ? validateArrayLength4(value) : [].concat(this.default);
            }
        },
        "top-left": {
            default: 0,
            set(value, props) {
                props.radius[0] = value;
            },
            get: props => props.radius[0]
        },
        "top-right": {
            default: 0,
            set(value, props) {
                props.radius[1] = value;
            },
            get: props => props.radius[1]
        },
        "bottom-right": {
            default: 0,
            set(value, props) {
                props.radius[2] = value;
            },
            get: props => props.radius[2]
        },
        "bottom-left": {
            default: 0,
            set(value, props) {
                props.radius[3] = value;
            },
            get: props => props.radius[3]
        }
    }
};

function getShadowProps(prefix) {
    const pf = prefix && prefix.length > 0 ? `${prefix}-` : "", projection = pf + "projection";
    return {
        [pf + "color"]: 255,
        [projection]: {
            default: [ 0, 0, 5, 5 ],
            resolve(value) {
                return void 0 !== value ? validateArrayLength4(value) : [].concat(this.default);
            }
        },
        [pf + "x"]: {
            default: 0,
            set(value, props) {
                props[projection][0] = value;
            },
            get: props => props[projection][0]
        },
        [pf + "y"]: {
            default: 0,
            set(value, props) {
                props[projection][1] = value;
            },
            get: props => props[projection][1]
        },
        [pf + "blur"]: {
            default: 5,
            set(value, props) {
                props[projection][2] = value;
            },
            get: props => props[projection][2]
        },
        [pf + "spread"]: {
            default: 5,
            set(value, props) {
                props[projection][3] = value;
            },
            get: props => props[projection][3]
        }
    };
}

var ShadowTemplate = {
    props: getShadowProps()
}, LinearGradientTemplate = {
    props: {
        colors: {
            default: [ 255, 4294967295 ],
            resolve(value) {
                return void 0 !== value && value.length > 0 ? value : [].concat(this.default);
            }
        },
        stops: {
            default: [ 0, 1 ],
            resolve(value, props) {
                if (void 0 !== value && value.length === props.colors.length) return value;
                void 0 === value && (value = []);
                const len = props.colors.length;
                for (let i = 0; i < len; i++) value[i] = i * (1 / (len - 1));
                return value;
            }
        },
        angle: 0
    }
}, RadialGradientTemplate = {
    props: {
        colors: {
            default: [ 255, 4294967295 ],
            resolve(value) {
                return void 0 !== value && value.length > 0 ? value : [].concat(this.default);
            }
        },
        stops: {
            default: [ 0, 1 ],
            resolve(value, props) {
                if (void 0 !== value && value.length === props.colors.length) return value;
                void 0 === value && (value = []);
                const len = props.colors.length;
                for (let i = 0; i < len; i++) value[i] = i * (1 / (len - 1));
                return value;
            }
        },
        w: 50,
        h: 50,
        pivot: [ .5, .5 ]
    }
}, defaultVertex = (declarations, assignments) => renderer => `\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    attribute vec2 a_position;\n    attribute vec2 a_textureCoords;\n    attribute vec4 a_color;\n    attribute vec2 a_nodeCoords;\n\n${viewportGlsl(renderer)}\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n${declarations}\n\n    void main() {\n      v_color = a_color;\n      v_textureCoords = a_textureCoords;\n${assignments}\n\n      gl_Position = pxToClip(a_position);\n    }\n  `, Default = {
    vertex: defaultVertex("    varying vec2 v_nodeCoords;", "      v_nodeCoords = a_nodeCoords;"),
    fragment: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    uniform sampler2D u_texture;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n\n    void main() {\n      gl_FragColor = v_color * texture2D(u_texture, v_textureCoords);\n    }\n  "
};

function createShader(glw, type, source) {
    const shader = glw.createShader(type);
    if (!shader) {
        const glError = glw.getError();
        throw new Error(`Unable to create the shader: ${type === glw.VERTEX_SHADER ? "VERTEX_SHADER" : "FRAGMENT_SHADER"}.${glError ? ` WebGlContext Error: ${glError}` : ""}`);
    }
    if (glw.shaderSource(shader, source), glw.compileShader(shader), glw.getShaderParameter(shader, glw.COMPILE_STATUS)) return shader;
    console.error(glw.getShaderInfoLog(shader)), glw.deleteShader(shader);
}

function genGradientColors(stops) {
    let result = "vec4 colorOut = u_colors[0];";
    for (let i = 1; i < stops; i++) result += `\n      float t${i} = clamp((dist - u_stopRamps[${i}].x) * u_stopRamps[${i}].y, 0.0, 1.0);\n      colorOut = mix(colorOut, u_colors[${i}], t${i} * t${i} * (3.0 - 2.0 * t${i}));`;
    return result;
}

var gradientStopRamps = stops => {
    const ramps = new Float32Array(2 * stops.length);
    for (let i = 1; i < stops.length; i++) {
        const e0 = stops[i - 1];
        ramps[2 * i] = e0, ramps[2 * i + 1] = rampScale(e0, stops[i]);
    }
    return ramps;
}, WebGlShaderProgram = class {
    constructor(renderer, config, resolvedProps) {
        var _config$vertex;
        this.program = void 0, this.renderer = void 0, this.glw = void 0, this.attributeLocations = void 0, 
        this.uniformLocations = void 0, this.lifecycle = void 0, this.useSystemAlpha = !1, 
        this.useSystemDimensions = !1, this.useSystemTranslate = !1, this.useSystemTransform = !1, 
        this.useSystemUvRect = !1, this.useTimeValue = !1, this.viewportUniformsPending = !1, 
        this.lastBoundUniforms = null, this.lastAlpha = -1, this.lastDimensionsW = -1, this.lastDimensionsH = -1, 
        this.lastTime = -1, this.lastTranslateX = NaN, this.lastTranslateY = NaN, this.lastTransformA = NaN, 
        this.lastTransformB = NaN, this.lastTransformC = NaN, this.lastTransformD = NaN, 
        this.lastUvX1 = -1, this.lastUvY1 = -1, this.lastUvX2 = -1, this.lastUvY2 = -1, 
        this.vaos = new Map, this.renderer = renderer;
        const glw = this.glw = renderer.glw;
        (config.webgl1Extensions || []).forEach(extensionName => {
            if (!glw.getExtension(extensionName)) throw new Error(`Shader "${this.constructor.name}" requires extension "${extensionName}" for WebGL 1.0 but wasn't found`);
        });
        const vertex = null !== (_config$vertex = config.vertex) && void 0 !== _config$vertex ? _config$vertex : Default.vertex, vertexSource = vertex instanceof Function ? vertex(renderer, resolvedProps) : vertex, fragmentSource = config.fragment instanceof Function ? config.fragment(renderer, resolvedProps) : config.fragment, vertexShader = createShader(glw, glw.VERTEX_SHADER, vertexSource);
        if (!vertexShader) throw new Error("Vertex shader creation failed");
        const fragmentShader = createShader(glw, glw.FRAGMENT_SHADER, fragmentSource);
        if (!fragmentShader) throw new Error("fragment shader creation failed");
        const program = function(glw, vertexShader, fragmentShader) {
            const program = glw.createProgram();
            if (!program) throw new Error("Unable to create program");
            if (glw.attachShader(program, vertexShader), glw.attachShader(program, fragmentShader), 
            glw.linkProgram(program), glw.getProgramParameter(program, glw.LINK_STATUS)) return program;
            const infoLog = glw.getProgramInfoLog(program) || "Unknown program link error";
            throw console.warn(infoLog), glw.deleteProgram(program), new Error(`Unable to link shader program: ${infoLog}`);
        }(glw, vertexShader, fragmentShader);
        this.program = program, this.attributeLocations = glw.getAttributeLocations(program);
        const uniLocs = this.uniformLocations = glw.getUniformLocations(program);
        this.useSystemAlpha = void 0 !== uniLocs.u_alpha, this.useSystemDimensions = void 0 !== uniLocs.u_dimensions, 
        this.useSystemTranslate = void 0 !== uniLocs.u_translate, this.useSystemTransform = void 0 !== uniLocs.u_nodeTransform, 
        this.useSystemUvRect = void 0 !== uniLocs.u_uvRect, this.viewportUniformsPending = void 0 !== uniLocs.u_pixelRatio || void 0 !== uniLocs.u_resolution, 
        this.useTimeValue = void 0 !== uniLocs.u_time && void 0 !== config.time, this.lifecycle = {
            update: config.update,
            canBatch: config.canBatch
        };
    }
    disableAttributes() {
        const glw = this.glw, attribLen = this.attributeLocations.length;
        for (let i = 0; i < attribLen; i++) glw.disableVertexAttribArray(i);
    }
    reuseRenderOp(node, currentRenderOp) {
        if (void 0 !== this.lifecycle.canBatch) return this.lifecycle.canBatch(node, currentRenderOp);
        if (!0 === this.useTimeValue && node.time !== currentRenderOp.time) return !1;
        if (!0 === this.useSystemAlpha && node.worldAlpha !== currentRenderOp.worldAlpha) return !1;
        if (!0 === this.useSystemDimensions && (node.w !== currentRenderOp.w || node.h !== currentRenderOp.h)) return !1;
        if (!0 === this.useSystemTransform) {
            const a = node.globalTransform, b = currentRenderOp.globalTransform;
            if (a.ta !== b.ta || a.tb !== b.tb || a.tc !== b.tc || a.td !== b.td) return !1;
        }
        if (!0 === this.useSystemUvRect) {
            const fallback = this.renderer.defaultTextureCoords, a = node.textureCoords || fallback, b = currentRenderOp.textureCoords || fallback;
            if (a !== b && (a.x1 !== b.x1 || a.y1 !== b.y1 || a.x2 !== b.x2 || a.y2 !== b.y2)) return !1;
        }
        const shader = node.props.shader, opShader = currentRenderOp.shader;
        return shader === opShader || null !== shader && null !== opShader && shader.uniforms === opShader.uniforms;
    }
    bindRenderOp(renderOp, buffer) {
        if (this.bindTexture(renderOp.renderOpTexture), this.bindBufferCollection(buffer), 
        !0 === this.viewportUniformsPending && (this.glw.uniform1f("u_pixelRatio", renderOp.stage.pixelRatio), 
        this.glw.uniform2f("u_resolution", this.glw.canvasW, this.glw.canvasH), this.viewportUniformsPending = !1), 
        !0 === this.useTimeValue && renderOp.time !== this.lastTime && (this.glw.uniform1f("u_time", renderOp.time), 
        this.lastTime = renderOp.time), !0 === this.useSystemAlpha && renderOp.worldAlpha !== this.lastAlpha && (this.glw.uniform1f("u_alpha", renderOp.worldAlpha), 
        this.lastAlpha = renderOp.worldAlpha), !0 !== this.useSystemDimensions || renderOp.w === this.lastDimensionsW && renderOp.h === this.lastDimensionsH || (this.glw.uniform2f("u_dimensions", renderOp.w, renderOp.h), 
        this.lastDimensionsW = renderOp.w, this.lastDimensionsH = renderOp.h), !0 === this.useSystemTransform) {
            const g = renderOp.globalTransform;
            g.ta === this.lastTransformA && g.tb === this.lastTransformB && g.tc === this.lastTransformC && g.td === this.lastTransformD || (this.glw.uniform4f("u_nodeTransform", g.ta, g.tc, g.tb, g.td), 
            this.lastTransformA = g.ta, this.lastTransformB = g.tb, this.lastTransformC = g.tc, 
            this.lastTransformD = g.td);
        }
        if (!0 === this.useSystemUvRect) {
            const tc = renderOp.textureCoords || this.renderer.defaultTextureCoords;
            tc.x1 === this.lastUvX1 && tc.y1 === this.lastUvY1 && tc.x2 === this.lastUvX2 && tc.y2 === this.lastUvY2 || (this.glw.uniform4f("u_uvRect", tc.x1, tc.y1, tc.x2, tc.y2), 
            this.lastUvX1 = tc.x1, this.lastUvY1 = tc.y1, this.lastUvX2 = tc.x2, this.lastUvY2 = tc.y2);
        }
        if (!0 === this.useSystemTranslate) {
            const op = renderOp;
            op.translateX === this.lastTranslateX && op.translateY === this.lastTranslateY || (this.glw.uniform2f("u_translate", op.translateX, op.translateY), 
            this.lastTranslateX = op.translateX, this.lastTranslateY = op.translateY);
        }
        const shader = renderOp.shader;
        if (void 0 !== shader.props) {
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
        if (!0 === glw.canUseVertexArrayObject) {
            let vao = this.vaos.get(buffer);
            if (void 0 === vao && (vao = this.createVao(buffer), this.vaos.set(buffer, vao)), 
            null !== vao) return void glw.bindVertexArray(vao);
            glw.bindVertexArray(null);
        }
        this.bindAttributes(buffer);
    }
    bindAttributes(buffer) {
        const {glw: glw} = this, attribs = this.attributeLocations, attribLen = attribs.length;
        for (let i = 0; i < attribLen; i++) {
            const name = attribs[i], resolvedBuffer = buffer.getBuffer(name), resolvedInfo = buffer.getAttributeInfo(name);
            void 0 !== resolvedBuffer && void 0 !== resolvedInfo && (glw.enableVertexAttribArray(i), 
            glw.vertexAttribPointer(resolvedBuffer, i, resolvedInfo.size, resolvedInfo.type, resolvedInfo.normalized, resolvedInfo.stride, resolvedInfo.offset));
        }
    }
    createVao(buffer) {
        const {glw: glw} = this, vao = glw.createVertexArray();
        return null === vao ? null : (glw.bindVertexArray(vao), this.bindAttributes(buffer), 
        glw.bindElementArrayBuffer(this.renderer.indexBuffer), vao);
    }
    bindTexture(texture) {
        null != texture && (this.glw.activeTexture(0), this.glw.bindTexture(texture.ctxTexture));
    }
    attach() {
        this.glw.useProgram(this.program, this.uniformLocations);
    }
    detach() {
        !0 !== this.glw.canUseVertexArrayObject && this.disableAttributes();
    }
}, fpsStyle = {
    color: 255,
    height: 216,
    width: 330,
    x: 1900,
    y: 6,
    mountX: 1,
    alpha: 1,
    zIndex: 100
}, fpsLabel = {
    x: 10,
    fontSize: 20,
    textColor: 4143380223
}, fpsValue = {
    fontSize: 22,
    textColor: 4143380223
}, [fps, setFps] = createSignal(0), [avgFps, setAvgFps] = createSignal(0), [minFps, setMinFps] = createSignal(99), [maxFps, setMaxFps] = createSignal(0), [quads, setQuads] = createSignal(0), [criticalThresholdSignal, setCriticalThresholdSignal] = createSignal(""), [targetThresholdSignal, setTargetThresholdSignal] = createSignal(""), [renderableMemUsedSignal, setRenderableMemUsedSignal] = createSignal(""), [memUsedSignal, setMemUsedSignal] = createSignal(""), [renderableTexturesLoadedSignal, setRenderableTexturesLoadedSignal] = createSignal(0), [loadedTexturesSignal, setLoadedTexturesSignal] = createSignal(0), [renderOps, setRenderOps] = createSignal(0), count = 0, totalFps = 0, resetCounter = () => {
    totalFps = 0, count = 0, setMinFps(99);
};

function bytesToMb(bytes) {
    return (bytes / 1024 / 1024).toFixed(2) + " Mb";
}

var frameCount = 0;

function setupFPS(root) {
    root.renderer.on("fpsUpdate", (target, fpsData) => {
        const fps = "number" == typeof fpsData ? fpsData : fpsData.fps;
        fps > 5 && ((fps => {
            fps && (setFps(fps), setMinFps(prev => Math.min(fps, prev)), setMaxFps(prev => Math.max(fps, prev)), 
            totalFps += fps, count++, setAvgFps(Math.round(totalFps / count)));
        })(fps), frameCount % 10 == 0 && (!function(stage) {
            const memInfo = stage.txMemManager.getMemoryInfo();
            setCriticalThresholdSignal(bytesToMb(memInfo.criticalThreshold)), setTargetThresholdSignal(bytesToMb(memInfo.targetThreshold)), 
            setRenderableMemUsedSignal(bytesToMb(memInfo.renderableMemUsed)), setMemUsedSignal(bytesToMb(memInfo.memUsed)), 
            setRenderableTexturesLoadedSignal(memInfo.renderableTexturesLoaded), setLoadedTexturesSignal(memInfo.loadedTextures);
        }(target.stage), frameCount = 0), frameCount++);
    }), root.renderer.on("renderUpdate", (target, quadsData) => {
        setQuads(quadsData.quads), setRenderOps(quadsData.renderOps);
    });
}

var FPSCounter = props => {
    return _el$ = createElement("view"), _el$2 = createElement("view"), _el$3 = createElement("text"), 
    _el$5 = createElement("text"), _el$6 = createElement("view"), _el$7 = createElement("text"), 
    _el$9 = createElement("text"), _el$0 = createElement("view"), _el$1 = createElement("text"), 
    _el$11 = createElement("text"), _el$12 = createElement("view"), _el$13 = createElement("text"), 
    _el$15 = createElement("text"), _el$16 = createElement("view"), _el$17 = createElement("view"), 
    _el$18 = createElement("text"), _el$20 = createElement("text"), _el$21 = createElement("view"), 
    _el$22 = createElement("text"), _el$24 = createElement("text"), _el$25 = createElement("view"), 
    _el$26 = createElement("text"), _el$28 = createElement("text"), _el$29 = createElement("view"), 
    _el$30 = createElement("text"), _el$32 = createElement("text"), _el$33 = createElement("view"), 
    _el$34 = createElement("text"), _el$36 = createElement("text"), _el$37 = createElement("view"), 
    _el$38 = createElement("text"), _el$40 = createElement("text"), _el$41 = createElement("view"), 
    _el$42 = createElement("text"), _el$44 = createElement("text"), _el$45 = createElement("view"), 
    _el$46 = createElement("text"), _el$48 = createElement("text"), insertNode(_el$, _el$2), 
    insertNode(_el$, _el$6), insertNode(_el$, _el$0), insertNode(_el$, _el$12), insertNode(_el$, _el$16), 
    spread(_el$, mergeProps(props, {
        style: fpsStyle
    }), !0), insertNode(_el$2, _el$3), insertNode(_el$2, _el$5), setProp(_el$2, "y", 6), 
    insertNode(_el$3, createTextNode("FPS:")), setProp(_el$3, "style", fpsLabel), setProp(_el$5, "style", fpsValue), 
    setProp(_el$5, "x", 90), insert(_el$5, () => fps().toString()), insertNode(_el$6, _el$7), 
    insertNode(_el$6, _el$9), setProp(_el$6, "y", 6), setProp(_el$6, "x", 160), insertNode(_el$7, createTextNode("AVG:")), 
    setProp(_el$7, "style", fpsLabel), setProp(_el$9, "style", fpsValue), setProp(_el$9, "x", 100), 
    insert(_el$9, () => avgFps().toString()), insertNode(_el$0, _el$1), insertNode(_el$0, _el$11), 
    setProp(_el$0, "x", 0), setProp(_el$0, "y", 26), insertNode(_el$1, createTextNode("MIN:")), 
    setProp(_el$1, "style", fpsLabel), setProp(_el$11, "style", fpsValue), setProp(_el$11, "x", 90), 
    insert(_el$11, () => minFps().toString()), insertNode(_el$12, _el$13), insertNode(_el$12, _el$15), 
    setProp(_el$12, "x", 160), setProp(_el$12, "y", 26), insertNode(_el$13, createTextNode("MAX:")), 
    setProp(_el$13, "style", fpsLabel), setProp(_el$15, "style", fpsValue), setProp(_el$15, "x", 100), 
    insert(_el$15, () => maxFps().toString()), insertNode(_el$16, _el$17), insertNode(_el$16, _el$21), 
    insertNode(_el$16, _el$25), insertNode(_el$16, _el$29), insertNode(_el$16, _el$33), 
    insertNode(_el$16, _el$37), insertNode(_el$16, _el$41), insertNode(_el$16, _el$45), 
    setProp(_el$16, "display", "flex"), setProp(_el$16, "flexDirection", "column"), 
    setProp(_el$16, "y", 58), setProp(_el$16, "gap", 4), insertNode(_el$17, _el$18), 
    insertNode(_el$17, _el$20), setProp(_el$17, "height", 14), insertNode(_el$18, createTextNode("criticalThreshold:")), 
    setProp(_el$18, "fontSize", 14), setProp(_el$18, "style", fpsLabel), setProp(_el$20, "fontSize", 14), 
    setProp(_el$20, "style", fpsLabel), setProp(_el$20, "x", 230), insert(_el$20, criticalThresholdSignal), 
    insertNode(_el$21, _el$22), insertNode(_el$21, _el$24), setProp(_el$21, "height", 14), 
    insertNode(_el$22, createTextNode("targetThreshold:")), setProp(_el$22, "fontSize", 14), 
    setProp(_el$22, "style", fpsLabel), setProp(_el$24, "fontSize", 14), setProp(_el$24, "style", fpsLabel), 
    setProp(_el$24, "x", 230), insert(_el$24, targetThresholdSignal), insertNode(_el$25, _el$26), 
    insertNode(_el$25, _el$28), setProp(_el$25, "height", 14), insertNode(_el$26, createTextNode("renderableMemUsed:")), 
    setProp(_el$26, "fontSize", 14), setProp(_el$26, "style", fpsLabel), setProp(_el$28, "fontSize", 14), 
    setProp(_el$28, "style", fpsLabel), setProp(_el$28, "x", 230), insert(_el$28, renderableMemUsedSignal), 
    insertNode(_el$29, _el$30), insertNode(_el$29, _el$32), setProp(_el$29, "height", 14), 
    insertNode(_el$30, createTextNode("memUsed:")), setProp(_el$30, "fontSize", 14), 
    setProp(_el$30, "style", fpsLabel), setProp(_el$32, "fontSize", 14), setProp(_el$32, "style", fpsLabel), 
    setProp(_el$32, "x", 230), insert(_el$32, memUsedSignal), insertNode(_el$33, _el$34), 
    insertNode(_el$33, _el$36), setProp(_el$33, "height", 14), insertNode(_el$34, createTextNode("Textures In Memory:")), 
    setProp(_el$34, "fontSize", 14), setProp(_el$34, "style", fpsLabel), setProp(_el$36, "fontSize", 14), 
    setProp(_el$36, "style", fpsLabel), setProp(_el$36, "x", 230), insert(_el$36, () => loadedTexturesSignal().toString()), 
    insertNode(_el$37, _el$38), insertNode(_el$37, _el$40), setProp(_el$37, "height", 14), 
    insertNode(_el$38, createTextNode("Textures On Screen:")), setProp(_el$38, "fontSize", 14), 
    setProp(_el$38, "style", fpsLabel), setProp(_el$40, "fontSize", 14), setProp(_el$40, "style", fpsLabel), 
    setProp(_el$40, "x", 230), insert(_el$40, () => renderableTexturesLoadedSignal().toString()), 
    insertNode(_el$41, _el$42), insertNode(_el$41, _el$44), setProp(_el$41, "height", 14), 
    insertNode(_el$42, createTextNode("Quads:")), setProp(_el$42, "fontSize", 14), setProp(_el$42, "style", fpsLabel), 
    setProp(_el$44, "fontSize", 14), setProp(_el$44, "style", fpsLabel), setProp(_el$44, "x", 230), 
    insert(_el$44, () => quads().toString()), insertNode(_el$45, _el$46), insertNode(_el$45, _el$48), 
    setProp(_el$45, "height", 14), insertNode(_el$46, createTextNode("Draws:")), setProp(_el$46, "fontSize", 14), 
    setProp(_el$46, "style", fpsLabel), setProp(_el$48, "fontSize", 14), setProp(_el$48, "style", fpsLabel), 
    setProp(_el$48, "x", 230), insert(_el$48, () => renderOps().toString()), _el$;
    var _el$, _el$2, _el$3, _el$5, _el$6, _el$7, _el$9, _el$0, _el$1, _el$11, _el$12, _el$13, _el$15, _el$16, _el$17, _el$18, _el$20, _el$21, _el$22, _el$24, _el$25, _el$26, _el$28, _el$29, _el$30, _el$32, _el$33, _el$34, _el$36, _el$37, _el$38, _el$40, _el$41, _el$42, _el$44, _el$45, _el$46, _el$48;
};

export { setParamVec4 as C, setParamRgba as S, edgeWidthDefine as _, genGradientColors as a, rampScale as b, defaultVertex as c, ShadowTemplate as d, getShadowProps as f, getBorderProps as g, BorderTemplate as h, WebGlShaderProgram as i, RadialGradientTemplate as l, HolePunchTemplate as m, resetCounter as n, gradientStopRamps as o, RoundedTemplate as p, setupFPS as r, Default as s, FPSCounter as t, LinearGradientTemplate as u, paramsGlsl as v, viewportGlsl as w, setParam as x, paramsLength as y };