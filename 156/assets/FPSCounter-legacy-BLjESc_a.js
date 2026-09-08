!function() {
    function _typeof(o) {
        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
            return typeof o;
        } : function(o) {
            return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
        }, _typeof(o);
    }
    function _slicedToArray(r, e) {
        return function(r) {
            if (Array.isArray(r)) return r;
        }(r) || function(r, l) {
            var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
            if (null != t) {
                var e, n, i, u, a = [], f = !0, o = !1;
                try {
                    if (i = (t = t.call(r)).next, 0 === l) {
                        if (Object(t) !== t) return;
                        f = !1;
                    } else for (;!(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) ;
                } catch (r) {
                    o = !0, n = r;
                } finally {
                    try {
                        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
                    } finally {
                        if (o) throw n;
                    }
                }
                return a;
            }
        }(r, e) || function(r, a) {
            if (r) {
                if ("string" == typeof r) return _arrayLikeToArray2(r, a);
                var t = {}.toString.call(r).slice(8, -1);
                return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray2(r, a) : void 0;
            }
        }(r, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
    }
    function _arrayLikeToArray2(r, a) {
        (null == a || a > r.length) && (a = r.length);
        for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
        return n;
    }
    function _createForOfIteratorHelper(r, e) {
        var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
        if (!t) {
            if (Array.isArray(r) || (t = function(r, a) {
                if (r) {
                    if ("string" == typeof r) return _arrayLikeToArray(r, a);
                    var t = {}.toString.call(r).slice(8, -1);
                    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
                }
            }(r)) || e && r && "number" == typeof r.length) {
                t && (r = t);
                var _n = 0, F = function() {};
                return {
                    s: F,
                    n: function() {
                        return _n >= r.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: r[_n++]
                        };
                    },
                    e: function(r) {
                        throw r;
                    },
                    f: F
                };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var o, a = !0, u = !1;
        return {
            s: function() {
                t = t.call(r);
            },
            n: function() {
                var r = t.next();
                return a = r.done, r;
            },
            e: function(r) {
                u = !0, o = r;
            },
            f: function() {
                try {
                    a || null == t.return || t.return();
                } finally {
                    if (u) throw o;
                }
            }
        };
    }
    function _arrayLikeToArray(r, a) {
        (null == a || a > r.length) && (a = r.length);
        for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
        return n;
    }
    function _defineProperties(e, r) {
        for (var t = 0; t < r.length; t++) {
            var o = r[t];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(e, _toPropertyKey(o.key), o);
        }
    }
    function _defineProperty(e, r, t) {
        return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[r] = t, e;
    }
    function _toPropertyKey(t) {
        var i = function(t, r) {
            if ("object" != _typeof(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
                var i = e.call(t, r || "default");
                if ("object" != _typeof(i)) return i;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === r ? String : Number)(t);
        }(t, "string");
        return "symbol" == _typeof(i) ? i : i + "";
    }
    System.register([ "./render-legacy-t4wUAioc.js" ], function(_export, _context) {
        var createSignal, createElement, mergeProps, spread, setProp, insert, createTextNode, insertNode, validateArrayLength4, Default, fpsStyle, fpsLabel, fpsValue, fps, setFps, avgFps, setAvgFps, minFps, setMinFps, maxFps, setMaxFps, quads, setQuads, criticalThresholdSignal, setCriticalThresholdSignal, targetThresholdSignal, setTargetThresholdSignal, renderableMemUsedSignal, setRenderableMemUsedSignal, memUsedSignal, setMemUsedSignal, renderableTexturesLoadedSignal, setRenderableTexturesLoadedSignal, loadedTexturesSignal, setLoadedTexturesSignal, renderOps, setRenderOps, count, totalFps, calcFps, frameCount;
        function getBorderProps(prefix) {
            var pf = prefix && prefix.length > 0 ? "".concat(prefix, "-") : "", w = pf + "w";
            return _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, w, {
                default: [ 0, 0, 0, 0 ],
                resolve: function(value) {
                    return void 0 !== value ? validateArrayLength4(value) : [].concat(this.default);
                }
            }), pf + "color", 4294967295), pf + "align", {
                default: 1,
                resolve: function(value) {
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
            }), pf + "gap", 0), pf + "top", {
                default: 0,
                set: function(value, props) {
                    props[w][0] = value;
                },
                get: function(props) {
                    return props[w][0];
                }
            }), pf + "right", {
                default: 0,
                set: function(value, props) {
                    props[w][1] = value;
                },
                get: function(props) {
                    return props[w][1];
                }
            }), pf + "bottom", {
                default: 0,
                set: function(value, props) {
                    props[w][2] = value;
                },
                get: function(props) {
                    return props[w][2];
                }
            }), pf + "left", {
                default: 0,
                set: function(value, props) {
                    props[w][3] = value;
                },
                get: function(props) {
                    return props[w][3];
                }
            });
        }
        function getShadowProps(prefix) {
            var pf = prefix && prefix.length > 0 ? "".concat(prefix, "-") : "", projection = pf + "projection";
            return _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, pf + "color", 255), projection, {
                default: [ 0, 0, 5, 5 ]
            }), pf + "x", {
                default: 0,
                set: function(value, props) {
                    props[projection][0] = value;
                },
                get: function(props) {
                    return props[projection][0];
                }
            }), pf + "y", {
                default: 0,
                set: function(value, props) {
                    props[projection][1] = value;
                },
                get: function(props) {
                    return props[projection][1];
                }
            }), pf + "blur", {
                default: 10,
                set: function(value, props) {
                    props[projection][2] = value;
                },
                get: function(props) {
                    return props[projection][2];
                }
            }), pf + "spread", {
                default: 10,
                set: function(value, props) {
                    props[projection][3] = value;
                },
                get: function(props) {
                    return props[projection][3];
                }
            });
        }
        function createShader(glw, type, source) {
            var shader = glw.createShader(type);
            if (!shader) {
                var glError = glw.getError();
                throw new Error("Unable to create the shader: ".concat(type === glw.VERTEX_SHADER ? "VERTEX_SHADER" : "FRAGMENT_SHADER", ".").concat(glError ? " WebGlContext Error: ".concat(glError) : ""));
            }
            if (glw.shaderSource(shader, source), glw.compileShader(shader), glw.getShaderParameter(shader, glw.COMPILE_STATUS)) return shader;
            console.error(glw.getShaderInfoLog(shader)), glw.deleteShader(shader);
        }
        function bytesToMb(bytes) {
            return (bytes / 1024 / 1024).toFixed(2) + " Mb";
        }
        return _export({
            l: getShadowProps,
            p: getBorderProps,
            r: function(root) {
                root.renderer.on("fpsUpdate", function(target, fpsData) {
                    var stage, memInfo, fps = "number" == typeof fpsData ? fpsData : fpsData.fps;
                    fps > 5 && (calcFps(fps), frameCount % 10 == 0 && (stage = target.stage, memInfo = stage.txMemManager.getMemoryInfo(), 
                    setCriticalThresholdSignal(bytesToMb(memInfo.criticalThreshold)), setTargetThresholdSignal(bytesToMb(memInfo.targetThreshold)), 
                    setRenderableMemUsedSignal(bytesToMb(memInfo.renderableMemUsed)), setMemUsedSignal(bytesToMb(memInfo.memUsed)), 
                    setRenderableTexturesLoadedSignal(memInfo.renderableTexturesLoaded), setLoadedTexturesSignal(memInfo.loadedTextures), 
                    frameCount = 0), frameCount++);
                }), root.renderer.on("renderUpdate", function(target, quadsData) {
                    setQuads(quadsData.quads), setRenderOps(quadsData.renderOps);
                });
            }
        }), {
            setters: [ function(_renderLegacy002Js) {
                _renderLegacy002Js.At, createSignal = _renderLegacy002Js.J, createElement = _renderLegacy002Js.a, 
                mergeProps = _renderLegacy002Js.f, spread = _renderLegacy002Js.g, setProp = _renderLegacy002Js.h, 
                insert = _renderLegacy002Js.l, createTextNode = _renderLegacy002Js.s, insertNode = _renderLegacy002Js.u;
            } ],
            execute: function() {
                var _createSignal2, _createSignal4, _createSignal6, _createSignal8, _createSignal0, _createSignal10, _createSignal12, _createSignal14, _createSignal16, _createSignal18, _createSignal20, _createSignal22;
                validateArrayLength4 = function(value) {
                    return Array.isArray(value) ? 4 === value.length ? value : 3 === value.length ? (value[3] = value[0], 
                    value) : 2 === value.length ? (value[2] = value[0], value[3] = value[1], value) : (value[0] = value[0] || 0, 
                    value[1] = value[0], value[2] = value[0], value[3] = value[0], value) : [ value, value, value, value ];
                }, _export("f", {
                    props: getBorderProps()
                }), _export("d", {
                    props: {
                        x: 0,
                        y: 0,
                        w: 50,
                        h: 50,
                        radius: {
                            default: [ 0, 0, 0, 0 ],
                            resolve: function(value) {
                                return void 0 !== value ? validateArrayLength4(value) : [].concat(this.default);
                            }
                        }
                    }
                }), _export("u", {
                    props: {
                        radius: {
                            default: [ 0, 0, 0, 0 ],
                            resolve: function(value) {
                                return void 0 !== value ? validateArrayLength4(value) : [].concat(this.default);
                            }
                        },
                        "top-left": {
                            default: 0,
                            set: function(value, props) {
                                props.radius[0] = value;
                            },
                            get: function(props) {
                                return props.radius[0];
                            }
                        },
                        "top-right": {
                            default: 0,
                            set: function(value, props) {
                                props.radius[1] = value;
                            },
                            get: function(props) {
                                return props.radius[1];
                            }
                        },
                        "bottom-right": {
                            default: 0,
                            set: function(value, props) {
                                props.radius[2] = value;
                            },
                            get: function(props) {
                                return props.radius[2];
                            }
                        },
                        "bottom-left": {
                            default: 0,
                            set: function(value, props) {
                                props.radius[3] = value;
                            },
                            get: function(props) {
                                return props.radius[3];
                            }
                        }
                    }
                }), _export("c", {
                    props: getShadowProps()
                }), _export("s", {
                    props: {
                        colors: {
                            default: [ 255, 4294967295 ],
                            resolve: function(value) {
                                return void 0 !== value && value.length > 0 ? value : [].concat(this.default);
                            }
                        },
                        stops: {
                            default: [ 0, 1 ],
                            resolve: function(value, props) {
                                if (void 0 !== value && value.length === props.colors.length) return value;
                                void 0 === value && (value = []);
                                for (var len = props.colors.length, i = 0; i < len; i++) value[i] = i * (1 / (len - 1));
                                return value;
                            }
                        },
                        angle: 0
                    }
                }), _export("o", {
                    props: {
                        colors: {
                            default: [ 255, 4294967295 ],
                            resolve: function(value) {
                                return void 0 !== value && value.length > 0 ? value : [].concat(this.default);
                            }
                        },
                        stops: {
                            default: [ 0, 1 ],
                            resolve: function(value, props) {
                                if (void 0 !== value && value.length === props.colors.length) return value;
                                void 0 === value && (value = []);
                                for (var len = props.colors.length, i = 0; i < len; i++) value[i] = i * (1 / (len - 1));
                                return value;
                            }
                        },
                        w: 50,
                        h: 50,
                        pivot: [ .5, .5 ]
                    }
                }), _export("a", Default = {
                    vertex: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    attribute vec2 a_position;\n    attribute vec2 a_textureCoords;\n    attribute vec4 a_color;\n    attribute vec2 a_nodeCoords;\n\n    uniform vec2 u_resolution;\n    uniform float u_pixelRatio;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n    varying vec2 v_nodeCoords;\n\n    void main() {\n      vec2 normalized = a_position * u_pixelRatio / u_resolution;\n      vec2 zero_two = normalized * 2.0;\n      vec2 clip_space = zero_two - 1.0;\n\n      v_color = a_color;\n      v_textureCoords = a_textureCoords;\n      v_nodeCoords = a_nodeCoords;\n\n      gl_Position = vec4(clip_space * vec2(1.0, -1.0), 0, 1);\n    }\n  ",
                    fragment: "\n    # ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n    # else\n    precision mediump float;\n    # endif\n\n    uniform vec2 u_resolution;\n    uniform sampler2D u_texture;\n\n    varying vec4 v_color;\n    varying vec2 v_textureCoords;\n\n    void main() {\n      gl_FragColor = v_color * texture2D(u_texture, v_textureCoords);\n    }\n  "
                }), _export("i", function() {
                    return e = function(renderer, config, resolvedProps) {
                        var _this = this;
                        this.program = void 0, this.renderer = void 0, this.glw = void 0, this.attributeLocations = void 0, 
                        this.uniformLocations = void 0, this.lifecycle = void 0, this.useSystemAlpha = !1, 
                        this.useSystemDimensions = !1, this.useTimeValue = !1, this.isDestroyed = !1, this.supportsIndexedTextures = !1, 
                        this.lastBoundUniforms = null, this.lastPixelRatio = -1, this.lastResolutionW = -1, 
                        this.lastResolutionH = -1, this.lastAlpha = -1, this.lastDimensionsW = -1, this.lastDimensionsH = -1, 
                        this.lastTime = -1, this.vaos = new Map, this.renderer = renderer;
                        var glw = this.glw = renderer.glw;
                        this.supportsIndexedTextures = config.supportsIndexedTextures || this.supportsIndexedTextures, 
                        (config.webgl1Extensions || []).forEach(function(extensionName) {
                            if (!glw.getExtension(extensionName)) throw new Error('Shader "'.concat(_this.constructor.name, '" requires extension "').concat(extensionName, "\" for WebGL 1.0 but wasn't found"));
                        });
                        var vertexSource = config.vertex instanceof Function ? config.vertex(renderer, resolvedProps) : config.vertex;
                        void 0 === vertexSource && (vertexSource = Default.vertex);
                        var fragmentSource = config.fragment instanceof Function ? config.fragment(renderer, resolvedProps) : config.fragment, vertexShader = createShader(glw, glw.VERTEX_SHADER, vertexSource);
                        if (!vertexShader) throw new Error("Vertex shader creation failed");
                        var fragmentShader = createShader(glw, glw.FRAGMENT_SHADER, fragmentSource);
                        if (!fragmentShader) throw new Error("fragment shader creation failed");
                        var program = function(glw, vertexShader, fragmentShader) {
                            var program = glw.createProgram();
                            if (!program) throw new Error("Unable to create program");
                            if (glw.attachShader(program, vertexShader), glw.attachShader(program, fragmentShader), 
                            glw.linkProgram(program), glw.getProgramParameter(program, glw.LINK_STATUS)) return program;
                            var infoLog = glw.getProgramInfoLog(program) || "Unknown program link error";
                            throw console.warn(infoLog), glw.deleteProgram(program), new Error("Unable to link shader program: ".concat(infoLog));
                        }(glw, vertexShader, fragmentShader);
                        this.program = program, this.attributeLocations = glw.getAttributeLocations(program);
                        var uniLocs = this.uniformLocations = glw.getUniformLocations(program);
                        this.useSystemAlpha = void 0 !== uniLocs.u_alpha, this.useSystemDimensions = void 0 !== uniLocs.u_dimensions, 
                        this.useTimeValue = null !== this.glw.getUniformLocation(program, "u_dimensions") && void 0 !== config.time, 
                        this.lifecycle = {
                            update: config.update,
                            canBatch: config.canBatch
                        };
                    }, r = [ {
                        key: "disableAttribute",
                        value: function(location) {
                            this.glw.disableVertexAttribArray(location);
                        }
                    }, {
                        key: "disableAttributes",
                        value: function() {
                            for (var glw = this.glw, attribLen = this.attributeLocations.length, i = 0; i < attribLen; i++) glw.disableVertexAttribArray(i);
                        }
                    }, {
                        key: "reuseRenderOp",
                        value: function(node, currentRenderOp) {
                            if (void 0 !== this.lifecycle.canBatch) return this.lifecycle.canBatch(node, currentRenderOp);
                            var time = node.time, worldAlpha = node.worldAlpha, w = node.w, h = node.h;
                            if (!0 === this.useTimeValue && time !== currentRenderOp.time) return !1;
                            if (!0 === this.useSystemAlpha && worldAlpha !== currentRenderOp.worldAlpha) return !1;
                            if (!0 === this.useSystemDimensions && (w !== currentRenderOp.w || h !== currentRenderOp.h)) return !1;
                            var shaderPropsA = void 0, shaderPropsB = void 0, shader = node.props.shader;
                            null !== shader && (shaderPropsA = shader.resolvedProps);
                            var opShader = currentRenderOp.shader;
                            if (null !== opShader && (shaderPropsB = opShader.resolvedProps), void 0 === shaderPropsA && void 0 !== shaderPropsB || void 0 !== shaderPropsA && void 0 === shaderPropsB) return !1;
                            if (void 0 !== shaderPropsA && void 0 !== shaderPropsB) for (var key in shaderPropsA) if (shaderPropsA[key] !== shaderPropsB[key]) return !1;
                            return !0;
                        }
                    }, {
                        key: "bindRenderOp",
                        value: function(renderOp) {
                            var isCoreNode = renderOp.isCoreNode;
                            this.bindTextures(renderOp.renderOpTextures), this.bindBufferCollection(renderOp.quadBufferCollection);
                            var parentHasRenderTexture = renderOp.parentHasRenderTexture, framebufferDimensions = isCoreNode && renderOp.parentHasRenderTexture ? renderOp.parentFramebufferDimensions : renderOp.framebufferDimensions;
                            if (!0 !== renderOp.rtt || !0 !== parentHasRenderTexture) {
                                var pixelRatio, resolutionW, resolutionH;
                                !0 === parentHasRenderTexture && framebufferDimensions ? (pixelRatio = 1, resolutionW = framebufferDimensions.w, 
                                resolutionH = framebufferDimensions.h) : (pixelRatio = renderOp.stage.pixelRatio, 
                                resolutionW = this.glw.canvas.width, resolutionH = this.glw.canvas.height), pixelRatio !== this.lastPixelRatio && (this.glw.uniform1f("u_pixelRatio", pixelRatio), 
                                this.lastPixelRatio = pixelRatio), resolutionW === this.lastResolutionW && resolutionH === this.lastResolutionH || (this.glw.uniform2f("u_resolution", resolutionW, resolutionH), 
                                this.lastResolutionW = resolutionW, this.lastResolutionH = resolutionH), !0 === this.useTimeValue && renderOp.time !== this.lastTime && (this.glw.uniform1f("u_time", renderOp.time), 
                                this.lastTime = renderOp.time), !0 === this.useSystemAlpha && renderOp.worldAlpha !== this.lastAlpha && (this.glw.uniform1f("u_alpha", renderOp.worldAlpha), 
                                this.lastAlpha = renderOp.worldAlpha), !0 !== this.useSystemDimensions || renderOp.w === this.lastDimensionsW && renderOp.h === this.lastDimensionsH || (this.glw.uniform2f("u_dimensions", renderOp.w, renderOp.h), 
                                this.lastDimensionsW = renderOp.w, this.lastDimensionsH = renderOp.h);
                                var shader = renderOp.shader;
                                if (void 0 !== shader.props) {
                                    var uniforms = shader.uniforms;
                                    if (uniforms === this.lastBoundUniforms) return;
                                    for (var key in this.lastBoundUniforms = uniforms, uniforms.single) {
                                        var _uniforms$single$key = uniforms.single[key], method = _uniforms$single$key.method, value = _uniforms$single$key.value;
                                        this.glw[method](key, value);
                                    }
                                    for (var _key in uniforms.vec2) {
                                        var _uniforms$vec2$_key = uniforms.vec2[_key], _method = _uniforms$vec2$_key.method, _value = _uniforms$vec2$_key.value;
                                        this.glw[_method](_key, _value[0], _value[1]);
                                    }
                                    for (var _key2 in uniforms.vec3) {
                                        var _uniforms$vec3$_key = uniforms.vec3[_key2], _method2 = _uniforms$vec3$_key.method, _value2 = _uniforms$vec3$_key.value;
                                        this.glw[_method2](_key2, _value2[0], _value2[1], _value2[2]);
                                    }
                                    for (var _key3 in uniforms.vec4) {
                                        var _uniforms$vec4$_key = uniforms.vec4[_key3], _method3 = _uniforms$vec4$_key.method, _value3 = _uniforms$vec4$_key.value;
                                        this.glw[_method3](_key3, _value3[0], _value3[1], _value3[2], _value3[3]);
                                    }
                                }
                            }
                        }
                    }, {
                        key: "bindBufferCollection",
                        value: function(buffer) {
                            var glw = this.glw;
                            if (!0 === glw.canUseVertexArrayObject) {
                                var vao = this.vaos.get(buffer);
                                if (void 0 === vao && (vao = this.createVao(buffer), this.vaos.set(buffer, vao)), 
                                null !== vao) return void glw.bindVertexArray(vao);
                                glw.bindVertexArray(null);
                            }
                            this.bindAttributes(buffer);
                        }
                    }, {
                        key: "bindAttributes",
                        value: function(buffer) {
                            for (var glw = this.glw, attribs = this.attributeLocations, attribLen = attribs.length, i = 0; i < attribLen; i++) {
                                var name = attribs[i], resolvedBuffer = buffer.getBuffer(name), resolvedInfo = buffer.getAttributeInfo(name);
                                void 0 !== resolvedBuffer && void 0 !== resolvedInfo && (glw.enableVertexAttribArray(i), 
                                glw.vertexAttribPointer(resolvedBuffer, i, resolvedInfo.size, resolvedInfo.type, resolvedInfo.normalized, resolvedInfo.stride, resolvedInfo.offset));
                            }
                        }
                    }, {
                        key: "createVao",
                        value: function(buffer) {
                            var glw = this.glw, vao = glw.createVertexArray();
                            return null === vao ? null : (glw.bindVertexArray(vao), this.bindAttributes(buffer), 
                            glw.bindElementArrayBuffer(this.renderer.indexBuffer), vao);
                        }
                    }, {
                        key: "bindTextures",
                        value: function(textures) {
                            var t = textures[0];
                            void 0 !== t && (this.glw.activeTexture(0), this.glw.bindTexture(t.ctxTexture));
                        }
                    }, {
                        key: "attach",
                        value: function() {
                            !0 !== this.isDestroyed && this.glw.useProgram(this.program, this.uniformLocations);
                        }
                    }, {
                        key: "detach",
                        value: function() {
                            !0 !== this.glw.canUseVertexArrayObject && this.disableAttributes();
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            if (!0 !== this.isDestroyed) {
                                var glw = this.glw;
                                this.detach();
                                var _step, _iterator = _createForOfIteratorHelper(this.vaos.values());
                                try {
                                    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                                        var vao = _step.value;
                                        null !== vao && glw.deleteVertexArray(vao);
                                    }
                                } catch (err) {
                                    _iterator.e(err);
                                } finally {
                                    _iterator.f();
                                }
                                this.vaos.clear(), glw.deleteProgram(this.program), this.program = null, this.uniformLocations = null;
                                for (var attribs = this.attributeLocations, attribLen = this.attributeLocations.length, i = 0; i < attribLen; i++) this.glw.deleteBuffer(attribs[i]);
                            }
                        }
                    } ], r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), e;
                    var e, r, t;
                }()), fpsStyle = {
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
                }, _createSignal2 = _slicedToArray(createSignal(0), 2), fps = _createSignal2[0], 
                setFps = _createSignal2[1], _createSignal4 = _slicedToArray(createSignal(0), 2), 
                avgFps = _createSignal4[0], setAvgFps = _createSignal4[1], _createSignal6 = _slicedToArray(createSignal(99), 2), 
                minFps = _createSignal6[0], setMinFps = _createSignal6[1], _createSignal8 = _slicedToArray(createSignal(0), 2), 
                maxFps = _createSignal8[0], setMaxFps = _createSignal8[1], _createSignal0 = _slicedToArray(createSignal(0), 2), 
                quads = _createSignal0[0], setQuads = _createSignal0[1], _createSignal10 = _slicedToArray(createSignal(""), 2), 
                criticalThresholdSignal = _createSignal10[0], setCriticalThresholdSignal = _createSignal10[1], 
                _createSignal12 = _slicedToArray(createSignal(""), 2), targetThresholdSignal = _createSignal12[0], 
                setTargetThresholdSignal = _createSignal12[1], _createSignal14 = _slicedToArray(createSignal(""), 2), 
                renderableMemUsedSignal = _createSignal14[0], setRenderableMemUsedSignal = _createSignal14[1], 
                _createSignal16 = _slicedToArray(createSignal(""), 2), memUsedSignal = _createSignal16[0], 
                setMemUsedSignal = _createSignal16[1], _createSignal18 = _slicedToArray(createSignal(0), 2), 
                renderableTexturesLoadedSignal = _createSignal18[0], setRenderableTexturesLoadedSignal = _createSignal18[1], 
                _createSignal20 = _slicedToArray(createSignal(0), 2), loadedTexturesSignal = _createSignal20[0], 
                setLoadedTexturesSignal = _createSignal20[1], _createSignal22 = _slicedToArray(createSignal(0), 2), 
                renderOps = _createSignal22[0], setRenderOps = _createSignal22[1], count = 0, totalFps = 0, 
                _export("n", function() {
                    totalFps = 0, count = 0, setMinFps(99);
                }), calcFps = function(fps) {
                    fps && (setFps(fps), setMinFps(function(prev) {
                        return Math.min(fps, prev);
                    }), setMaxFps(function(prev) {
                        return Math.max(fps, prev);
                    }), totalFps += fps, count++, setAvgFps(Math.round(totalFps / count)));
                }, frameCount = 0, _export("t", function(props) {
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
                    setProp(_el$5, "x", 90), insert(_el$5, function() {
                        return fps().toString();
                    }), insertNode(_el$6, _el$7), insertNode(_el$6, _el$9), setProp(_el$6, "y", 6), 
                    setProp(_el$6, "x", 160), insertNode(_el$7, createTextNode("AVG:")), setProp(_el$7, "style", fpsLabel), 
                    setProp(_el$9, "style", fpsValue), setProp(_el$9, "x", 100), insert(_el$9, function() {
                        return avgFps().toString();
                    }), insertNode(_el$0, _el$1), insertNode(_el$0, _el$11), setProp(_el$0, "x", 0), 
                    setProp(_el$0, "y", 26), insertNode(_el$1, createTextNode("MIN:")), setProp(_el$1, "style", fpsLabel), 
                    setProp(_el$11, "style", fpsValue), setProp(_el$11, "x", 90), insert(_el$11, function() {
                        return minFps().toString();
                    }), insertNode(_el$12, _el$13), insertNode(_el$12, _el$15), setProp(_el$12, "x", 160), 
                    setProp(_el$12, "y", 26), insertNode(_el$13, createTextNode("MAX:")), setProp(_el$13, "style", fpsLabel), 
                    setProp(_el$15, "style", fpsValue), setProp(_el$15, "x", 100), insert(_el$15, function() {
                        return maxFps().toString();
                    }), insertNode(_el$16, _el$17), insertNode(_el$16, _el$21), insertNode(_el$16, _el$25), 
                    insertNode(_el$16, _el$29), insertNode(_el$16, _el$33), insertNode(_el$16, _el$37), 
                    insertNode(_el$16, _el$41), insertNode(_el$16, _el$45), setProp(_el$16, "display", "flex"), 
                    setProp(_el$16, "flexDirection", "column"), setProp(_el$16, "y", 58), setProp(_el$16, "gap", 4), 
                    insertNode(_el$17, _el$18), insertNode(_el$17, _el$20), setProp(_el$17, "height", 14), 
                    insertNode(_el$18, createTextNode("criticalThreshold:")), setProp(_el$18, "fontSize", 14), 
                    setProp(_el$18, "style", fpsLabel), setProp(_el$20, "fontSize", 14), setProp(_el$20, "style", fpsLabel), 
                    setProp(_el$20, "x", 230), insert(_el$20, criticalThresholdSignal), insertNode(_el$21, _el$22), 
                    insertNode(_el$21, _el$24), setProp(_el$21, "height", 14), insertNode(_el$22, createTextNode("targetThreshold:")), 
                    setProp(_el$22, "fontSize", 14), setProp(_el$22, "style", fpsLabel), setProp(_el$24, "fontSize", 14), 
                    setProp(_el$24, "style", fpsLabel), setProp(_el$24, "x", 230), insert(_el$24, targetThresholdSignal), 
                    insertNode(_el$25, _el$26), insertNode(_el$25, _el$28), setProp(_el$25, "height", 14), 
                    insertNode(_el$26, createTextNode("renderableMemUsed:")), setProp(_el$26, "fontSize", 14), 
                    setProp(_el$26, "style", fpsLabel), setProp(_el$28, "fontSize", 14), setProp(_el$28, "style", fpsLabel), 
                    setProp(_el$28, "x", 230), insert(_el$28, renderableMemUsedSignal), insertNode(_el$29, _el$30), 
                    insertNode(_el$29, _el$32), setProp(_el$29, "height", 14), insertNode(_el$30, createTextNode("memUsed:")), 
                    setProp(_el$30, "fontSize", 14), setProp(_el$30, "style", fpsLabel), setProp(_el$32, "fontSize", 14), 
                    setProp(_el$32, "style", fpsLabel), setProp(_el$32, "x", 230), insert(_el$32, memUsedSignal), 
                    insertNode(_el$33, _el$34), insertNode(_el$33, _el$36), setProp(_el$33, "height", 14), 
                    insertNode(_el$34, createTextNode("Textures In Memory:")), setProp(_el$34, "fontSize", 14), 
                    setProp(_el$34, "style", fpsLabel), setProp(_el$36, "fontSize", 14), setProp(_el$36, "style", fpsLabel), 
                    setProp(_el$36, "x", 230), insert(_el$36, function() {
                        return loadedTexturesSignal().toString();
                    }), insertNode(_el$37, _el$38), insertNode(_el$37, _el$40), setProp(_el$37, "height", 14), 
                    insertNode(_el$38, createTextNode("Textures On Screen:")), setProp(_el$38, "fontSize", 14), 
                    setProp(_el$38, "style", fpsLabel), setProp(_el$40, "fontSize", 14), setProp(_el$40, "style", fpsLabel), 
                    setProp(_el$40, "x", 230), insert(_el$40, function() {
                        return renderableTexturesLoadedSignal().toString();
                    }), insertNode(_el$41, _el$42), insertNode(_el$41, _el$44), setProp(_el$41, "height", 14), 
                    insertNode(_el$42, createTextNode("Quads:")), setProp(_el$42, "fontSize", 14), setProp(_el$42, "style", fpsLabel), 
                    setProp(_el$44, "fontSize", 14), setProp(_el$44, "style", fpsLabel), setProp(_el$44, "x", 230), 
                    insert(_el$44, function() {
                        return quads().toString();
                    }), insertNode(_el$45, _el$46), insertNode(_el$45, _el$48), setProp(_el$45, "height", 14), 
                    insertNode(_el$46, createTextNode("Draws:")), setProp(_el$46, "fontSize", 14), setProp(_el$46, "style", fpsLabel), 
                    setProp(_el$48, "fontSize", 14), setProp(_el$48, "style", fpsLabel), setProp(_el$48, "x", 230), 
                    insert(_el$48, function() {
                        return renderOps().toString();
                    }), _el$;
                    var _el$, _el$2, _el$3, _el$5, _el$6, _el$7, _el$9, _el$0, _el$1, _el$11, _el$12, _el$13, _el$15, _el$16, _el$17, _el$18, _el$20, _el$21, _el$22, _el$24, _el$25, _el$26, _el$28, _el$29, _el$30, _el$32, _el$33, _el$34, _el$36, _el$37, _el$38, _el$40, _el$41, _el$42, _el$44, _el$45, _el$46, _el$48;
                });
            }
        };
    });
}();