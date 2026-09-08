import { Vt as assertTruthy, a as createElement, h as spread, l as insert, m as setProp, q as createSignal, s as createTextNode, u as insertNode } from "./render-BluGTzme.js";

import { t as mergeProps } from "./mergeProps-DtfyMHzu.js";

var validateArrayLength4 = value => Array.isArray(value) ? 4 === value.length ? value : 3 === value.length ? (value[3] = value[0], 
value) : 2 === value.length ? (value[2] = value[0], value[3] = value[1], value) : (value[0] = value[0] || 0, 
value[1] = value[0], value[2] = value[0], value[3] = value[0], value) : [ value, value, value, value ];

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
}, Default = {
    vertex: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    attribute vec2 a_position;\n    attribute vec2 a_textureCoords;\n    attribute vec4 a_color;\n    attribute vec2 a_nodeCoords;\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n    varying vec2 v_nodeCoords;\n\n    void main() {\n      vec2 normalized = a_position * u_pixelRatio / u_resolution;\n      vec2 zero_two = normalized * 2.0;\n      vec2 clip_space = zero_two - 1.0;\n\n      v_color = a_color;\n      v_textureCoords = a_textureCoords;\n      v_nodeCoords = a_nodeCoords;\n\n      gl_Position = vec4(clip_space * vec2(1.0, -1.0), 0, 1);\n    }\n  ",
    fragment: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    uniform vec2 u_resolution;\n    uniform sampler2D u_texture;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n\n    void main() {\n      gl_FragColor = v_color * texture2D(u_texture, v_textureCoords);\n    }\n  "
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
    for (let i = 1; i < stops; i++) result += `\n      colorOut = mix(colorOut, u_colors[${i}], smoothstep(u_stops[${i - 1}], u_stops[${i}], dist));`;
    return result;
}

var WebGlShaderProgram = class {
    constructor(renderer, config, resolvedProps) {
        this.program = void 0, this.renderer = void 0, this.glw = void 0, this.attributeLocations = void 0, 
        this.uniformLocations = void 0, this.lifecycle = void 0, this.useSystemAlpha = !1, 
        this.useSystemDimensions = !1, this.useSystemTranslate = !1, this.useTimeValue = !1, 
        this.isDestroyed = !1, this.supportsIndexedTextures = !1, this.lastBoundUniforms = null, 
        this.lastPixelRatio = -1, this.lastResolutionW = -1, this.lastResolutionH = -1, 
        this.lastAlpha = -1, this.lastDimensionsW = -1, this.lastDimensionsH = -1, this.lastTime = -1, 
        this.lastTranslateX = NaN, this.lastTranslateY = NaN, this.vaos = new Map, this.renderer = renderer;
        const glw = this.glw = renderer.glw;
        this.supportsIndexedTextures = config.supportsIndexedTextures || this.supportsIndexedTextures, 
        (config.webgl1Extensions || []).forEach(extensionName => {
            if (!glw.getExtension(extensionName)) throw new Error(`Shader "${this.constructor.name}" requires extension "${extensionName}" for WebGL 1.0 but wasn't found`);
        });
        let vertexSource = config.vertex instanceof Function ? config.vertex(renderer, resolvedProps) : config.vertex;
        void 0 === vertexSource && (vertexSource = Default.vertex);
        const fragmentSource = config.fragment instanceof Function ? config.fragment(renderer, resolvedProps) : config.fragment, vertexShader = createShader(glw, glw.VERTEX_SHADER, vertexSource);
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
        this.useSystemTranslate = void 0 !== uniLocs.u_translate, this.useTimeValue = void 0 !== uniLocs.u_time && void 0 !== config.time, 
        this.lifecycle = {
            update: config.update,
            canBatch: config.canBatch
        };
    }
    disableAttribute(location) {
        this.glw.disableVertexAttribArray(location);
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
        const shader = node.props.shader, opShader = currentRenderOp.shader;
        if (shader === opShader) return !0;
        if (null === shader || null === opShader) return !1;
        if (shader.uniforms === opShader.uniforms) return !0;
        const shaderPropsA = shader.resolvedProps, shaderPropsB = opShader.resolvedProps;
        if (void 0 === shaderPropsA && void 0 !== shaderPropsB || void 0 !== shaderPropsA && void 0 === shaderPropsB) return !1;
        if (void 0 !== shaderPropsA && void 0 !== shaderPropsB) for (const key in shaderPropsA) if (shaderPropsA[key] !== shaderPropsB[key]) return !1;
        return !0;
    }
    bindRenderOp(renderOp, buffer) {
        this.bindTexture(renderOp.renderOpTexture), this.bindBufferCollection(buffer);
        const pixelRatio = renderOp.stage.pixelRatio, resolutionW = this.glw.canvasW, resolutionH = this.glw.canvasH;
        if (pixelRatio !== this.lastPixelRatio && (this.glw.uniform1f("u_pixelRatio", pixelRatio), 
        this.lastPixelRatio = pixelRatio), resolutionW === this.lastResolutionW && resolutionH === this.lastResolutionH || (this.glw.uniform2f("u_resolution", resolutionW, resolutionH), 
        this.lastResolutionW = resolutionW, this.lastResolutionH = resolutionH), !0 === this.useTimeValue && renderOp.time !== this.lastTime && (this.glw.uniform1f("u_time", renderOp.time), 
        this.lastTime = renderOp.time), !0 === this.useSystemAlpha && renderOp.worldAlpha !== this.lastAlpha && (this.glw.uniform1f("u_alpha", renderOp.worldAlpha), 
        this.lastAlpha = renderOp.worldAlpha), !0 !== this.useSystemDimensions || renderOp.w === this.lastDimensionsW && renderOp.h === this.lastDimensionsH || (this.glw.uniform2f("u_dimensions", renderOp.w, renderOp.h), 
        this.lastDimensionsW = renderOp.w, this.lastDimensionsH = renderOp.h), !0 === this.useSystemTranslate) {
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
        !0 !== this.isDestroyed && this.glw.useProgram(this.program, this.uniformLocations);
    }
    detach() {
        !0 !== this.glw.canUseVertexArrayObject && this.disableAttributes();
    }
    destroy() {
        if (!0 === this.isDestroyed) return;
        const glw = this.glw;
        this.detach();
        for (const vao of this.vaos.values()) null !== vao && glw.deleteVertexArray(vao);
        this.vaos.clear(), glw.deleteProgram(this.program), this.program = null, this.uniformLocations = null;
        const attribs = this.attributeLocations, attribLen = this.attributeLocations.length;
        for (let i = 0; i < attribLen; i++) this.glw.deleteBuffer(attribs[i]);
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

export { genGradientColors as a, LinearGradientTemplate as c, RoundedTemplate as d, HolePunchTemplate as f, WebGlShaderProgram as i, ShadowTemplate as l, getBorderProps as m, resetCounter as n, Default as o, BorderTemplate as p, setupFPS as r, RadialGradientTemplate as s, FPSCounter as t, getShadowProps as u };