function createWebGLContext(canvas, forceWebGL2 = !1, contextSpy) {
    const config = {
        alpha: !0,
        antialias: !1,
        depth: !1,
        stencil: !0,
        desynchronized: !1,
        powerPreference: "high-performance",
        premultipliedAlpha: !0,
        preserveDrawingBuffer: !1
    }, gl = canvas.getContext(forceWebGL2 ? "webgl2" : "webgl", config) || canvas.getContext("experimental-webgl", config);
    if (!gl) throw new Error("Unable to create WebGL context");
    if (contextSpy) {
        const handler = {
            get(target, prop) {
                const value = target[prop];
                if ("function" != typeof value) return value;
                contextSpy.increment(String(prop));
                const fn = value;
                return "getExtension" === prop ? (...args) => {
                    const ext = fn.apply(target, args);
                    return null !== ext && "object" == typeof ext ? new Proxy(ext, handler) : ext;
                } : fn.bind(target);
            }
        };
        return new Proxy(gl, handler);
    }
    return gl;
}

var ENABLE_AUTOSIZE = "undefined" != typeof __enableAutosize__ && __enableAutosize__, ENABLE_INSPECTOR = "undefined" != typeof __enableInspector__ && __enableInspector__, DIRTY_QUAD_BUFFER = "undefined" == typeof __dirtyQuadBuffer__ || __dirtyQuadBuffer__, EMIT_BOUNDS_EVENTS = "undefined" != typeof __emitBoundsEvents__ && __emitBoundsEvents__;

function assertTruthy(condition, message) {}

function mergeColorProgress(rgba1, rgba2, p) {
    const r1 = Math.trunc(rgba1 >>> 24), g1 = Math.trunc(rgba1 >>> 16 & 255), b1 = Math.trunc(rgba1 >>> 8 & 255), a1 = Math.trunc(255 & rgba1), r2 = Math.trunc(rgba2 >>> 24), g2 = Math.trunc(rgba2 >>> 16 & 255), b2 = Math.trunc(rgba2 >>> 8 & 255), a2 = Math.trunc(255 & rgba2);
    return (Math.round(r2 * p + r1 * (1 - p)) << 24 | Math.round(g2 * p + g1 * (1 - p)) << 16 | Math.round(b2 * p + b1 * (1 - p)) << 8 | Math.round(a2 * p + a1 * (1 - p))) >>> 0;
}

function mergeColorAlpha(rgba, alpha) {
    return (rgba >>> 24 << 24 | (rgba >>> 16 & 255) << 16 | (rgba >>> 8 & 255) << 8 | Math.trunc((255 & rgba) * alpha)) >>> 0;
}

var premultiplyRGB = !0;

function premultiplyColorABGR(rgba, alpha) {
    const a = (255 & rgba) / 255 * alpha, m = premultiplyRGB ? a : 1;
    return (255 * a << 24 | (rgba >>> 8 & 255) * m << 16 | (rgba >>> 16 & 255) * m << 8 | (rgba >>> 24) * m) >>> 0;
}

var nextId = 1;

function deepClone(obj) {
    if ("object" != typeof obj) return obj;
    if (Array.isArray(obj)) return obj.map(item => deepClone(item));
    const copy = {};
    for (const key in obj) copy[key] = deepClone(obj[key]);
    return copy;
}

var TextureType, EventEmitter = class {
    constructor() {
        this.eventListeners = null;
    }
    on(event, listener) {
        let map = this.eventListeners;
        null === map && (map = this.eventListeners = {});
        let listeners = map[event];
        void 0 === listeners && (listeners = [], map[event] = listeners), listeners.push(listener);
    }
    off(event, listener) {
        const map = this.eventListeners;
        if (null === map) return;
        const listeners = map[event];
        if (void 0 === listeners) return;
        if (void 0 === listener) return void (map[event] = void 0);
        const index = listeners.indexOf(listener);
        index >= 0 && listeners.splice(index, 1);
    }
    once(event, listener) {
        const onceListener = (target, data) => {
            this.off(event, onceListener), listener(target, data);
        };
        this.on(event, onceListener);
    }
    emit(event, data) {
        const map = this.eventListeners;
        if (null === map) return;
        const listeners = map[event];
        void 0 !== listeners && [ ...listeners ].forEach(listener => {
            listener(this, data);
        });
    }
    hasListeners() {
        const map = this.eventListeners;
        if (null === map) return !1;
        for (const event in map) {
            const listeners = map[event];
            if (void 0 !== listeners && listeners.length > 0) return !0;
        }
        return !1;
    }
    removeAllListeners() {
        this.eventListeners = null;
    }
};

!function(TextureType) {
    TextureType[TextureType.generic = 0] = "generic", TextureType[TextureType.color = 1] = "color", 
    TextureType[TextureType.image = 2] = "image", TextureType[TextureType.noise = 3] = "noise", 
    TextureType[TextureType.renderToTexture = 4] = "renderToTexture", TextureType[TextureType.subTexture = 5] = "subTexture";
}(TextureType || (TextureType = {}));

var Texture = class Texture extends EventEmitter {
    constructor(txManager) {
        super(), this.txManager = void 0, this._dimensions = null, this._error = null, this.state = "initial", 
        this.renderableOwners = new Set, this.renderable = !1, this.type = TextureType.generic, 
        this.preventCleanup = !1, this.ctxTexture = void 0, this.textureData = null, this.cacheKey = null, 
        this.memUsed = 0, this.retryCount = 0, this.maxRetryCount = void 0, this.createdAt = Date.now(), 
        this.gracePeriodExpired = !1, this.freeTextureDataTask = () => {
            this.textureData = null;
        }, this.releaseTask = () => {
            this.release();
        }, this.txManager = txManager, this.maxRetryCount = this.txManager.maxRetryCount;
    }
    get dimensions() {
        return this._dimensions;
    }
    get error() {
        return this._error;
    }
    isWithinStartupGracePeriod() {
        return !0 !== this.gracePeriodExpired && (!(Date.now() - this.createdAt >= Texture.STARTUP_GRACE_PERIOD) || (this.gracePeriodExpired = !0, 
        !1));
    }
    canBeCleanedUp() {
        return !this.preventCleanup && (!this.isWithinStartupGracePeriod() && ("loading" !== this.state && (!0 !== this.renderable && !(this.renderableOwners.size > 0))));
    }
    setRenderableOwner(owner, renderable) {
        const owners = this.renderableOwners;
        if (!0 === renderable) {
            if (!0 === owners.has(owner)) return;
            var _this$onChangeIsRende;
            if (owners.add(owner), 1 === owners.size) this.renderable = !0, null == (_this$onChangeIsRende = this.onChangeIsRenderable) || _this$onChangeIsRende.call(this, !0), 
            this.load();
        } else {
            if (!1 === owners.delete(owner)) return;
            var _this$onChangeIsRende2;
            if (0 === owners.size) this.renderable = !1, null == (_this$onChangeIsRende2 = this.onChangeIsRenderable) || _this$onChangeIsRende2.call(this, !1);
        }
    }
    load() {
        this.retryCount > this.maxRetryCount || this.txManager.loadTexture(this);
    }
    loadCtxTexture() {
        return void 0 === this.ctxTexture && (this.ctxTexture = this.txManager.renderer.createCtxTexture(this)), 
        this.ctxTexture;
    }
    free() {
        var _this$ctxTexture;
        null == (_this$ctxTexture = this.ctxTexture) || _this$ctxTexture.free(), this.ctxTexture = void 0;
    }
    release() {
        var _this$ctxTexture2;
        null == (_this$ctxTexture2 = this.ctxTexture) || _this$ctxTexture2.release(), this.ctxTexture = void 0, 
        this.freeTextureData();
    }
    destroy() {
        "loaded" === this.state && this.free(), this.freeTextureData(), this.removeAllListeners();
    }
    freeTextureData() {
        queueMicrotask(this.freeTextureDataTask);
    }
    setState(state, errorOrDimensions) {
        if (this.state === state) return;
        let payload = null;
        "loaded" === state ? (void 0 !== errorOrDimensions && "w" in errorOrDimensions == !0 && "h" in errorOrDimensions == !0 && void 0 !== errorOrDimensions.w && void 0 !== errorOrDimensions.h && (this._dimensions = errorOrDimensions), 
        payload = this._dimensions) : "failed" === state ? (this._error = errorOrDimensions, 
        payload = this._error, this.retryCount += 1, queueMicrotask(this.releaseTask)) : "loading" === state ? (this._error = null, 
        this._dimensions = null) : this._error = null, this.state = state, this.emit(state, payload);
    }
    async getTextureData() {
        return null === this.textureData && (this.textureData = await this.getTextureSource()), 
        this.textureData;
    }
    static makeCacheKey(props) {
        return !1;
    }
    static resolveDefaults(props) {
        return {};
    }
};

Texture.STARTUP_GRACE_PERIOD = 2e3;

var PROTOCOL_REGEX = /^(data|ftps?|https?):/, getNormalizedRgbaComponents = rgba => [ (rgba >>> 24) / 255, (rgba >>> 16 & 255) / 255, (rgba >>> 8 & 255) / 255, (255 & rgba) / 255 ];

function createBound(x1, y1, x2, y2, out) {
    return out ? (out.x1 = x1, out.y1 = y1, out.x2 = x2, out.y2 = y2, out) : {
        x1: x1,
        y1: y1,
        x2: x2,
        y2: y2
    };
}

function compareRect(a, b) {
    if (a === b) return !0;
    if (null === a || null === b) return !1;
    const aValid = a.valid, bValid = b.valid;
    return !1 === aValid && !1 === bValid || aValid === bValid && (a.x === b.x && a.y === b.y && a.w === b.w && a.h === b.h);
}

function boundInsideBound(bound1, bound2) {
    return bound1.x1 <= bound2.x2 && bound1.y1 <= bound2.y2 && bound1.x2 >= bound2.x1 && bound1.y2 >= bound2.y1;
}

function createPreloadBounds(strictBound, boundsMargin, out) {
    return createBound(strictBound.x1 - boundsMargin[3], strictBound.y1 - boundsMargin[0], strictBound.x2 + boundsMargin[1], strictBound.y2 + boundsMargin[2], out);
}

function isBase64Image(src) {
    return !0 === src.startsWith("data:");
}

function calcFactoredRadiusArray(radius, width, height) {
    const result = [ radius[0], radius[1], radius[2], radius[3] ], factor = Math.min(Math.min(Math.min(width / Math.max(width, radius[0] + radius[1]), width / Math.max(width, radius[2] + radius[3])), Math.min(height / Math.max(height, radius[0] + radius[3]), height / Math.max(height, radius[1] + radius[2]))), 1);
    return result[0] *= factor, result[1] *= factor, result[2] *= factor, result[3] *= factor, 
    result;
}

var AutosizeMode, AutosizeUpdateType, Matrix3d = class Matrix3d {
    constructor() {
        this.ta = void 0, this.tb = void 0, this.tx = void 0, this.tc = void 0, this.td = void 0, 
        this.ty = void 0, this._floatArr = null, this.mutation = void 0, this.ta = 0, this.tb = 0, 
        this.tx = 0, this.tc = 0, this.td = 0, this.ty = 0, this.mutation = !0;
    }
    static get temp() {
        return tempMatrix;
    }
    static multiply(a, b, out) {
        const e0 = a.ta * b.ta + a.tb * b.tc, e1 = a.ta * b.tb + a.tb * b.td, e2 = a.ta * b.tx + a.tb * b.ty + a.tx, e3 = a.tc * b.ta + a.td * b.tc, e4 = a.tc * b.tb + a.td * b.td, e5 = a.tc * b.tx + a.td * b.ty + a.ty;
        return out || (out = new Matrix3d), out.ta = e0, out.tb = e1, out.tx = e2, out.tc = e3, 
        out.td = e4, out.ty = e5, out.mutation = !0, out;
    }
    static identity(out) {
        return out || (out = new Matrix3d), out.ta = 1, out.tb = 0, out.tx = 0, out.tc = 0, 
        out.td = 1, out.ty = 0, out.mutation = !0, out;
    }
    static translate(x, y, out) {
        return out || (out = new Matrix3d), out.ta = 1, out.tb = 0, out.tx = x, out.tc = 0, 
        out.td = 1, out.ty = y, out.mutation = !0, out;
    }
    static scale(sx, sy, out) {
        return out || (out = new Matrix3d), out.ta = sx, out.tb = 0, out.tx = 0, out.tc = 0, 
        out.td = sy, out.ty = 0, out.mutation = !0, out;
    }
    static rotate(angle, out) {
        if (void 0 === out && (out = new Matrix3d), 0 === angle) return out.ta = 1, out.tb = 0, 
        out.tx = 0, out.tc = 0, out.td = 1, out.ty = 0, out.mutation = !0, out;
        const cos = Math.cos(angle), sin = Math.sin(angle);
        return out.ta = cos, out.tb = -sin, out.tx = 0, out.tc = sin, out.td = cos, out.ty = 0, 
        out.mutation = !0, out;
    }
    static copy(src, dst) {
        return dst || (dst = new Matrix3d), dst.ta = src.ta, dst.tc = src.tc, dst.tb = src.tb, 
        dst.td = src.td, dst.tx = src.tx, dst.ty = src.ty, dst.mutation = !0, dst;
    }
    translate(x, y) {
        return this.tx = this.ta * x + this.tb * y + this.tx, this.ty = this.tc * x + this.td * y + this.ty, 
        this.mutation = !0, this;
    }
    setTranslate(x, y) {
        this.tx = x, this.ty = y, this.mutation = !0;
    }
    scale(sx, sy) {
        return this.ta = this.ta * sx, this.tb = this.tb * sy, this.tc = this.tc * sx, this.td = this.td * sy, 
        this.mutation = !0, this;
    }
    rotate(angle) {
        if (0 === angle) return this;
        const cos = Math.cos(angle), sin = Math.sin(angle), e0 = this.ta * cos + this.tb * sin, e1 = this.tb * cos - this.ta * sin, e3 = this.tc * cos + this.td * sin, e4 = this.td * cos - this.tc * sin;
        return this.ta = e0, this.tb = e1, this.tc = e3, this.td = e4, this.mutation = !0, 
        this;
    }
    multiply(other) {
        return Matrix3d.multiply(this, other, this);
    }
    getFloatArr() {
        return this._floatArr || (this._floatArr = new Float32Array(9)), this.mutation && (this._floatArr[0] = this.ta, 
        this._floatArr[1] = this.tc, this._floatArr[2] = 0, this._floatArr[3] = this.tb, 
        this._floatArr[4] = this.td, this._floatArr[5] = 0, this._floatArr[6] = this.tx, 
        this._floatArr[7] = this.ty, this._floatArr[8] = 1, this.mutation = !1), this._floatArr;
    }
    translateOrMultiply(other) {
        return 1 === other.ta && 1 === other.td && 0 === other.tb && 0 === other.tc ? this.translate(other.tx, other.ty) : this.multiply(other);
    }
}, tempMatrix = new Matrix3d, RenderCoords = class RenderCoords {
    constructor(x1, y1, x2, y2, x3, y3, x4, y4) {
        this.x1 = void 0, this.y1 = void 0, this.x2 = void 0, this.y2 = void 0, this.x3 = void 0, 
        this.y3 = void 0, this.x4 = void 0, this.y4 = void 0, this.x1 = x1, this.y1 = y1, 
        this.x2 = x2, this.y2 = y2, this.x3 = x3, this.y3 = y3, this.x4 = x4, this.y4 = y4;
    }
    static translate(x1, y1, x2, y2, x3, y3, x4, y4, out) {
        return void 0 === out ? new RenderCoords(x1, y1, x2, y2, x3, y3, x4, y4) : (out.x1 = x1, 
        out.y1 = y1, out.x2 = x2, out.y2 = y2, out.x3 = x3, out.y3 = y3, out.x4 = x4, out.y4 = y4, 
        out);
    }
}, getTimingBezier = (Math.PI, (a, b, c, d) => {
    const xc = 3 * a, xb = 3 * (c - a) - xc, xa = 1 - xc - xb, yc = 3 * b, yb = 3 * (d - b) - yc, ya = 1 - yc - yb;
    return function(time) {
        if (time >= 1) return 1;
        if (time <= 0) return 0;
        let cbx, cbxd, dx, t = .5;
        for (let it = 0; it < 20; it++) {
            if (cbx = t * (t * (t * xa + xb) + xc), dx = time - cbx, dx > -1e-8 && dx < 1e-8) return t * (t * (t * ya + yb) + yc);
            if (cbxd = t * (t * (3 * xa) + 2 * xb) + xc, cbxd > 1e-10 && cbxd < 1e-10) break;
            t += dx / cbxd;
        }
        let minT = 0, maxT = 1;
        for (let it = 0; it < 20; it++) {
            if (t = .5 * (minT + maxT), cbx = t * (t * (t * xa + xb) + xc), dx = time - cbx, 
            dx > -1e-8 && dx < 1e-8) return t * (t * (t * ya + yb) + yc);
            dx < 0 ? maxT = t : minT = t;
        }
        return time;
    };
}), timingMapping = {}, timingLookup = {
    ease: [ .25, .1, .25, 1 ],
    "ease-in": [ .42, 0, 1, 1 ],
    "ease-out": [ 0, 0, .58, 1 ],
    "ease-in-out": [ .42, 0, .58, 1 ],
    "ease-in-sine": [ .12, 0, .39, 0 ],
    "ease-out-sine": [ .12, 0, .39, 0 ],
    "ease-in-out-sine": [ .37, 0, .63, 1 ],
    "ease-in-cubic": [ .32, 0, .67, 0 ],
    "ease-out-cubic": [ .33, 1, .68, 1 ],
    "ease-in-out-cubic": [ .65, 0, .35, 1 ],
    "ease-in-circ": [ .55, 0, 1, .45 ],
    "ease-out-circ": [ 0, .55, .45, 1 ],
    "ease-in-out-circ": [ .85, 0, .15, 1 ],
    "ease-in-back": [ .36, 0, .66, -.56 ],
    "ease-out-back": [ .34, 1.56, .64, 1 ],
    "ease-in-out-back": [ .68, -.6, .32, 1.6 ]
}, defaultTiming = t => t, getTimingFunction = str => {
    if ("linear" === str) return defaultTiming;
    if (void 0 !== timingMapping[str]) return timingMapping[str] || defaultTiming;
    if ("step-start" === str) return () => 1;
    if ("step-end" === str) return time => 1 === time ? 1 : 0;
    const lookup = timingLookup[str];
    if (void 0 !== lookup) {
        const [a, b, c, d] = lookup, timing = getTimingBezier(a, b, c, d);
        return timingMapping[str] = timing, timing;
    }
    return str.startsWith("cubic-bezier") ? (str => {
        const match = str.match(/-?\d*\.?\d+/g);
        if (match) {
            const [num1, num2, num3, num4] = match, timing = getTimingBezier(parseFloat(num1 || "0.42"), parseFloat(num2 || "0"), parseFloat(num3 || "1"), parseFloat(num4 || "1"));
            return timingMapping[str] = timing, timing;
        }
        return console.warn("Unknown cubic-bezier timing: " + str), defaultTiming;
    })(str) : (console.warn("Unknown timing function: " + str), defaultTiming);
};

function bytesToMb(bytes) {
    return (bytes / 1024 / 1024).toFixed(2);
}

function createAnimation(manager, node, props, settings) {
    var _settings$delay, _settings$duration, _settings$loop, _settings$repeat, _settings$stopMethod;
    const easing = settings.easing || "linear", delay = null !== (_settings$delay = settings.delay) && void 0 !== _settings$delay ? _settings$delay : 0;
    let propValues = null, shaderPropValues = null;
    for (const key in props) if ("shaderProps" !== key) propValues || (propValues = {}), 
    propValues[key] = {
        start: node[key] || 0,
        target: props[key],
        isColor: -1 !== key.indexOf("color")
    }; else if ("shaderProps" === key && null !== node.shader) {
        shaderPropValues || (shaderPropValues = {});
        for (const shaderKey in props.shaderProps) {
            let start = node.shader.props[shaderKey];
            Array.isArray(start) && (start = start[0]), shaderPropValues[shaderKey] = {
                start: start,
                target: props.shaderProps[shaderKey],
                isColor: -1 !== shaderKey.indexOf("color")
            };
        }
    }
    const timingFunction = "string" == typeof easing ? getTimingFunction(easing) : easing;
    return {
        manager: manager,
        node: node,
        duration: null !== (_settings$duration = settings.duration) && void 0 !== _settings$duration ? _settings$duration : 0,
        delay: delay,
        delayFor: delay,
        progress: 0,
        loop: null !== (_settings$loop = settings.loop) && void 0 !== _settings$loop && _settings$loop,
        repeat: null !== (_settings$repeat = settings.repeat) && void 0 !== _settings$repeat ? _settings$repeat : 0,
        stopMethod: null !== (_settings$stopMethod = settings.stopMethod) && void 0 !== _settings$stopMethod && _settings$stopMethod,
        timingFunction: timingFunction,
        state: "stopped",
        props: propValues,
        shaderProps: shaderPropValues,
        stoppedResolve: null,
        stoppedPromise: null,
        lastRunTime: settings.adaptiveDuration ? performance.now() : 0,
        start() {
            return "running" !== this.state && "scheduled" !== this.state && (this.stoppedPromise || (this.stoppedPromise = new Promise(resolve => {
                this.stoppedResolve = resolve;
            })), this.manager.registerAnimation(this), this.state = "scheduled"), this;
        },
        stop() {
            return this.manager.unregisterAnimation(this), this.stoppedResolve && (this.stoppedResolve(), 
            this.stoppedResolve = null), this.progress = 0, this.delayFor = this.delay, this.state = "stopped", 
            this;
        },
        pause() {
            return this.manager.unregisterAnimation(this), this.state = "paused", this;
        },
        restore() {
            if (this.stoppedResolve = null, this.stop(), this.props) {
                const entries = Object.entries(this.props);
                for (let i = 0; i < entries.length; i++) {
                    const [k, v] = entries[i];
                    this.node[k] = v.start;
                }
            }
            if (this.shaderProps && this.node.shader) {
                const entries = Object.entries(this.shaderProps);
                for (let i = 0; i < entries.length; i++) {
                    const [k, v] = entries[i];
                    this.node.shader.props[k] = v.start;
                }
            }
            return this;
        },
        waitUntilStopped() {
            return this.stoppedPromise || (this.stoppedPromise = Promise.resolve()), this.stoppedPromise;
        }
    };
}

!function(AutosizeMode) {
    AutosizeMode[AutosizeMode.Children = 0] = "Children", AutosizeMode[AutosizeMode.Texture = 1] = "Texture";
}(AutosizeMode || (AutosizeMode = {})), function(AutosizeUpdateType) {
    AutosizeUpdateType[AutosizeUpdateType.None = 0] = "None", AutosizeUpdateType[AutosizeUpdateType.Filtered = 1] = "Filtered", 
    AutosizeUpdateType[AutosizeUpdateType.All = 2] = "All";
}(AutosizeUpdateType || (AutosizeUpdateType = {}));

var CoreNodeRenderState, applyDimensions = (node, w, h) => {
    node.props.w = w, node.props.h = h, node.setUpdateType(UpdateType.Local | UpdateType.RecalcUniforms);
}, autosizerId = 0, Autosizer = class {
    constructor(node) {
        this.node = void 0, this.id = autosizerId++, this.mode = AutosizeMode.Children, 
        this.updateType = AutosizeUpdateType.All, this.lastWidth = 0, this.lastHeight = 0, 
        this.lastHasChanged = !1, this.flaggedChildren = [], this.childMap = new Map, this.minX = 1 / 0, 
        this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0, this.corners = [ {
            x: 0,
            y: 0
        }, {
            x: 0,
            y: 0
        }, {
            x: 0,
            y: 0
        }, {
            x: 0,
            y: 0
        } ], this.node = node, null !== node.texture && (this.mode = AutosizeMode.Texture);
    }
    attach(node) {
        if (this.childMap.set(node.id, node), node.parentAutosizer = this, node.children.length > 0 && null === node.autosizer) {
            const children = node.children;
            for (let i = 0; i < children.length; i++) this.attach(children[i]);
        }
    }
    detach(node) {
        if (!0 === this.childMap.delete(node.id)) {
            if (node.parentAutosizer = null, node.children.length > 0 && null === node.autosizer) {
                const children = node.children;
                for (let i = 0; i < children.length; i++) this.detach(children[i]);
            }
            this.setUpdateType(AutosizeUpdateType.All);
        }
    }
    patch(id) {
        void 0 !== this.childMap.get(id) && (this.flaggedChildren.push(id), this.setUpdateType(AutosizeUpdateType.Filtered));
    }
    setUpdateType(updateType) {
        this.updateType |= updateType, this.node.setUpdateType(UpdateType.Autosize);
    }
    setMode(mode) {
        this.mode = mode, this.setUpdateType(AutosizeUpdateType.All);
    }
    update() {
        const node = this.node;
        if (this.mode === AutosizeMode.Texture && null !== node.texture && null !== node.texture.dimensions) {
            const {w: w, h: h} = node.texture.dimensions;
            return w === node.w && h === node.h || applyDimensions(node, w, h), this.lastWidth = w, 
            this.lastHeight = h, void (this.updateType = AutosizeUpdateType.None);
        }
        let filtered = this.updateType === AutosizeUpdateType.Filtered ? ((children, childMap) => {
            const filtered = [];
            for (;children.length > 0; ) {
                const id = children.pop(), child = childMap.get(id);
                filtered.push(child);
            }
            return filtered;
        })(this.flaggedChildren, this.childMap) : Array.from(this.childMap.values());
        if (0 === filtered.length) return;
        const corners = this.corners;
        let minX = this.minX, minY = this.minY, maxX = this.maxX, maxY = this.maxY;
        for (let i = 0; i < filtered.length; i++) {
            const child = filtered[i];
            if (!1 === child.isRenderable || void 0 === child.localTransform) continue;
            const {tx: tx, ty: ty, ta: ta, tb: tb, tc: tc, td: td} = child.localTransform, w = child.props.w, h = child.props.h, childMinX = tx, childMaxX = tx + w * ta, childMinY = ty, childMaxY = ty + h * td;
            corners[0].x = childMinX, corners[0].y = childMinY, corners[1].x = childMaxX, 0 === tb && 0 === tc ? (corners[1].y = childMinY, 
            corners[2].x = childMaxX, corners[2].y = childMaxY, corners[3].x = childMinX, corners[3].y = childMaxY) : (corners[1].y = tx + w * tc, 
            corners[2].x = tx + w * ta + h * tb, corners[2].y = ty + w * tc + h * td, corners[3].x = tx + h * tb, 
            corners[3].y = ty + h * td);
            for (let j = 0; j < 4; j++) {
                const corner = corners[j];
                corner.x < minX && (minX = corner.x), corner.y < minY && (minY = corner.y), corner.x > maxX && (maxX = corner.x), 
                corner.y > maxY && (maxY = corner.y);
            }
        }
        this.updateType = AutosizeUpdateType.None;
        const newWidth = maxX > 0 ? maxX : 0, newHeight = maxY > 0 ? maxY : 0;
        applyDimensions(node, newWidth, newHeight), this.lastWidth = newWidth, this.lastHeight = newHeight;
    }
    destroy() {
        if (this.childMap.size > 0) for (const child of this.childMap.values()) child.parentAutosizer = null;
        this.childMap.clear(), this.flaggedChildren.length = 0;
    }
};

!function(CoreNodeRenderState) {
    CoreNodeRenderState[CoreNodeRenderState.Init = 0] = "Init", CoreNodeRenderState[CoreNodeRenderState.OutOfBounds = 2] = "OutOfBounds", 
    CoreNodeRenderState[CoreNodeRenderState.InBounds = 4] = "InBounds", CoreNodeRenderState[CoreNodeRenderState.InViewport = 8] = "InViewport";
}(CoreNodeRenderState || (CoreNodeRenderState = {}));

var UpdateType, NO_CLIPPING_RECT = {
    x: 0,
    y: 0,
    w: 0,
    h: 0,
    valid: !1
}, CoreNodeRenderStateMap$1 = new Map;

CoreNodeRenderStateMap$1.set(CoreNodeRenderState.Init, "init"), CoreNodeRenderStateMap$1.set(CoreNodeRenderState.OutOfBounds, "outOfBounds"), 
CoreNodeRenderStateMap$1.set(CoreNodeRenderState.InBounds, "inBounds"), CoreNodeRenderStateMap$1.set(CoreNodeRenderState.InViewport, "inViewport"), 
function(UpdateType) {
    UpdateType[UpdateType.Children = 1] = "Children", UpdateType[UpdateType.Local = 2] = "Local", 
    UpdateType[UpdateType.Global = 4] = "Global", UpdateType[UpdateType.Clipping = 8] = "Clipping", 
    UpdateType[UpdateType.SortZIndexChildren = 16] = "SortZIndexChildren", UpdateType[UpdateType.PremultipliedColors = 32] = "PremultipliedColors", 
    UpdateType[UpdateType.WorldAlpha = 64] = "WorldAlpha", UpdateType[UpdateType.RenderState = 128] = "RenderState", 
    UpdateType[UpdateType.IsRenderable = 256] = "IsRenderable", UpdateType[UpdateType.RenderTexture = 512] = "RenderTexture", 
    UpdateType[UpdateType.ParentRenderTexture = 1024] = "ParentRenderTexture", UpdateType[UpdateType.RenderBounds = 2048] = "RenderBounds", 
    UpdateType[UpdateType.RecalcUniforms = 4096] = "RecalcUniforms", UpdateType[UpdateType.Autosize = 8192] = "Autosize", 
    UpdateType[UpdateType.None = 0] = "None", UpdateType[UpdateType.All = 16383] = "All";
}(UpdateType || (UpdateType = {}));

var CoreNode = class extends EventEmitter {
    constructor(stage, props) {
        super(), this.stage = void 0, this.children = [], this._id = nextId++, this.props = void 0, 
        this.isCoreNode = !0, this._animations = null, this.renderOpBufferIdx = 0, this.numQuads = 0, 
        this.renderOpTextures = [], this.quadBufferIndex = -1, this.isQuadDirty = !0, this.hasShaderUpdater = !1, 
        this.hasShaderTimeFn = !1, this.hasColorProps = !1, this.textureLoaded = !1, this.textureOwnership = !1, 
        this.placeholderActive = !1, this.updateType = UpdateType.All, this.childUpdateType = UpdateType.None, 
        this.globalTransform = void 0, this.localTransform = void 0, this.sceneGlobalTransform = void 0, 
        this.renderCoords = void 0, this.sceneRenderCoords = void 0, this.renderBound = void 0, 
        this.strictBound = void 0, this.preloadBound = void 0, this.clippingRect = NO_CLIPPING_RECT, 
        this.textureCoords = void 0, this.updateShaderUniforms = !1, this.isRenderable = !1, 
        this.renderState = CoreNodeRenderState.Init, this.isSimple = !0, this._localIsTranslate = !0, 
        this._hasContainResize = !1, this._globalIsTranslate = !0, this.worldAlpha = 1, 
        this.premultipliedColorTl = 0, this.premultipliedColorTr = 0, this.premultipliedColorBl = 0, 
        this.premultipliedColorBr = 0, this.calcZIndex = 0, this.hasRTTupdates = !1, this.parentHasRenderTexture = !1, 
        this.rttParent = null, this.framebufferDimensions = null, this.autosizer = null, 
        this.parentAutosizer = null, this.destroyed = !1, this.loadTextureTask = () => {
            var _this$props$textureOp, _this$props$textureOp2;
            const texture = this.props.texture;
            null !== texture && (!0 === this.textureOptions.preload && this.stage.txManager.loadTexture(texture), 
            texture.preventCleanup = null !== (_this$props$textureOp = null == (_this$props$textureOp2 = this.props.textureOptions) ? void 0 : _this$props$textureOp2.preventCleanup) && void 0 !== _this$props$textureOp && _this$props$textureOp, 
            texture.on("loaded", this.onTextureLoaded), texture.on("failed", this.onTextureFailed), 
            texture.on("freed", this.onTextureFreed), this.parentHasRenderTexture ? this.notifyParentRTTOfUpdate() : "loaded" === texture.state ? this.onTextureLoaded(texture, texture.dimensions) : "failed" === texture.state ? this.onTextureFailed(texture, texture.error) : "freed" === texture.state && this.onTextureFreed(texture));
        }, this.onTextureLoaded = (_, dimensions) => {
            var _this$props$textureOp3;
            null !== this.autosizer && this.autosizer.update(), this.textureLoaded = !0, this.updatePlaceholderActive(), 
            this.setUpdateType(UpdateType.IsRenderable), this.stage.requestRender(), this.parentHasRenderTexture && this.notifyParentRTTOfUpdate(), 
            dimensions.w > 1 && dimensions.h > 1 && this.emit("loaded", {
                type: "texture",
                dimensions: dimensions
            }), !0 === this.stage.calculateTextureCoord && null !== this.props.textureOptions && (this.textureCoords = this.stage.renderer.getTextureCoords(this)), 
            "contain" === (null == (_this$props$textureOp3 = this.props.textureOptions) || null == (_this$props$textureOp3 = _this$props$textureOp3.resizeMode) ? void 0 : _this$props$textureOp3.type) && this.setUpdateType(UpdateType.Local);
        }, this.onTextureFailed = (_, error) => {
            this.textureLoaded = !1, this.isRenderable = !1, this.updatePlaceholderActive(), 
            this.updateTextureOwnership(!1), this.setUpdateType(UpdateType.IsRenderable), this.parentHasRenderTexture && this.notifyParentRTTOfUpdate(), 
            null !== this.texture && this.texture.retryCount > this.texture.maxRetryCount && this.emit("failed", {
                type: "texture",
                error: error
            });
        }, this.onTextureFreed = () => {
            this.textureLoaded = !1, this.isRenderable = !1, this.updatePlaceholderActive(), 
            this.updateTextureOwnership(!1), this.setUpdateType(UpdateType.IsRenderable), this.parentHasRenderTexture && this.notifyParentRTTOfUpdate(), 
            this.emit("freed", {
                type: "texture"
            });
        }, this.stage = stage, this.localTransform = Matrix3d.identity(), this.globalTransform = Matrix3d.identity();
        let initialUpdateType = UpdateType.Local | UpdateType.RenderBounds | UpdateType.RenderState;
        const {texture: texture, shader: shader, src: src, rtt: rtt, boundsMargin: boundsMargin, parent: parent} = props, p = this.props = props;
        p.texture = null, p.shader = null, p.src = null, p.rtt = !1, p.boundsMargin = null, 
        p.scale = null, (p.color > 0 || p.colorTop > 0 || p.colorBottom > 0 || p.colorLeft > 0 || p.colorRight > 0 || p.colorTl > 0 || p.colorTr > 0 || p.colorBl > 0 || p.colorBr > 0) && (this.hasColorProps = !0, 
        initialUpdateType |= UpdateType.PremultipliedColors), 0 !== p.zIndex && (this.zIndex = p.zIndex), 
        null !== parent && parent.addChild(this), null !== texture && (this.texture = texture), 
        null === shader || shader === this.stage.defShaderNode ? p.shader = this.stage.defShaderNode : this.shader = shader, 
        null !== src && (this.src = src), !1 !== rtt && (this.rtt = rtt), null !== boundsMargin && (this.boundsMargin = boundsMargin), 
        !0 === p.autosize && (this.autosizer = new Autosizer(this)), this.setUpdateType(initialUpdateType);
        const dt = this.stage.defaultTexture;
        null !== dt && "loaded" !== dt.state && dt.once("loaded", () => this.setUpdateType(UpdateType.IsRenderable)), 
        this.updateIsSimple();
    }
    updatePlaceholderActive() {
        const active = 0 !== this.props.placeholderColor && null !== this.props.texture && !1 === this.textureLoaded;
        active !== this.placeholderActive && (this.placeholderActive = active, this.setUpdateType(UpdateType.PremultipliedColors | UpdateType.IsRenderable));
    }
    loadTexture() {
        null !== this.props.texture && queueMicrotask(this.loadTextureTask);
    }
    unloadTexture() {
        if (null === this.texture) return;
        const texture = this.texture;
        texture.off("loaded", this.onTextureLoaded), texture.off("failed", this.onTextureFailed), 
        texture.off("freed", this.onTextureFreed), texture.setRenderableOwner(this._id, !1), 
        this.textureOwnership = !1;
    }
    setUpdateType(type) {
        this.updateType |= type;
        const parent = this.props.parent;
        !parent || parent.updateType & UpdateType.Children || parent.setUpdateType(UpdateType.Children);
    }
    updateLocalTransform() {
        const p = this.props, {x: x, y: y} = p;
        if (this.isSimple) return !0 === this._localIsTranslate ? void this.localTransform.setTranslate(x, y) : (this.localTransform = Matrix3d.translate(x, y, this.localTransform), 
        void (this._localIsTranslate = !0));
        const {w: w, h: h} = p, mountTranslateX = p.mountX * w, mountTranslateY = p.mountY * h, rotation = p.rotation, scaleX = p.scaleX, scaleY = p.scaleY;
        if (0 !== rotation) {
            const scaleRotate = Matrix3d.rotate(rotation, Matrix3d.temp).scale(scaleX, scaleY), pivotTranslateX = p.pivotX * w, pivotTranslateY = p.pivotY * h;
            this.localTransform = Matrix3d.translate(x - mountTranslateX + pivotTranslateX, y - mountTranslateY + pivotTranslateY, this.localTransform).multiply(scaleRotate).translate(-pivotTranslateX, -pivotTranslateY);
        } else if (1 !== scaleX || 1 !== scaleY) {
            const pivotTranslateX = p.pivotX * w, pivotTranslateY = p.pivotY * h;
            this.localTransform = Matrix3d.translate(x - mountTranslateX + pivotTranslateX, y - mountTranslateY + pivotTranslateY, this.localTransform).scale(scaleX, scaleY).translate(-pivotTranslateX, -pivotTranslateY);
        } else this.localTransform = Matrix3d.translate(x - mountTranslateX, y - mountTranslateY, this.localTransform);
        const texture = p.texture;
        if (!0 === this._hasContainResize && null !== texture && null !== texture.dimensions) {
            let resizeModeScaleX = 1, resizeModeScaleY = 1, extraX = 0, extraY = 0;
            const {w: tw, h: th} = texture.dimensions;
            if (tw / th > w / h) {
                const scaledTxHeight = th * (w / tw);
                extraY = (h - scaledTxHeight) / 2, resizeModeScaleY = scaledTxHeight / h;
            } else {
                const scaledTxWidth = tw * (h / th);
                extraX = (w - scaledTxWidth) / 2, resizeModeScaleX = scaledTxWidth / w;
            }
            this.localTransform.translate(extraX, extraY).scale(resizeModeScaleX, resizeModeScaleY);
        }
        this._localIsTranslate = !1;
    }
    updateIsSimple() {
        var _p$textureOptions;
        const p = this.props;
        this._hasContainResize = null !== p.texture && "contain" === (null == (_p$textureOptions = p.textureOptions) || null == (_p$textureOptions = _p$textureOptions.resizeMode) ? void 0 : _p$textureOptions.type), 
        this.isSimple = 0 === p.rotation && 1 === p.scaleX && 1 === p.scaleY && 0 === p.mountX && 0 === p.mountY && !1 === this._hasContainResize;
    }
    update(delta, parentClippingRect) {
        const props = this.props, parent = props.parent, parentHasRenderTexture = this.parentHasRenderTexture;
        let newRenderState = null, updateType = this.updateType, childUpdateType = this.childUpdateType;
        if (ENABLE_AUTOSIZE && updateType & UpdateType.Autosize && null !== this.autosizer && this.autosizer.update(), 
        this.updateType = 0, this.childUpdateType = 0, updateType & UpdateType.Local && (this.updateLocalTransform(), 
        updateType |= UpdateType.Global), updateType & UpdateType.RenderTexture && !0 === this.rtt && (this.hasRTTupdates = !0), 
        updateType & UpdateType.Global) {
            const lt = this.localTransform, gt = this.globalTransform;
            let fastPathApplied = !1;
            if (!0 === this.parentHasRenderTexture && !0 === parent.rtt) {
                Matrix3d.identity(gt);
                const parentTransform = parent.globalTransform || Matrix3d.identity(Matrix3d.temp);
                this.sceneGlobalTransform = Matrix3d.copy(parentTransform, this.sceneGlobalTransform).translateOrMultiply(lt), 
                this._globalIsTranslate = this.isSimple;
            } else if (!0 === this.parentHasRenderTexture && !1 === parent.rtt) {
                const parentSceneTransform = parent.sceneGlobalTransform || lt;
                this.sceneGlobalTransform = Matrix3d.copy(parentSceneTransform, this.sceneGlobalTransform).translateOrMultiply(lt), 
                Matrix3d.copy(parent.globalTransform, gt), this._globalIsTranslate = !1;
            } else {
                const parentGT = parent.globalTransform;
                !0 === this.isSimple && !0 === parent._globalIsTranslate ? (!1 === this._globalIsTranslate && (gt.ta = 1, 
                gt.tb = 0, gt.tc = 0, gt.td = 1), gt.setTranslate(parentGT.tx + lt.tx, parentGT.ty + lt.ty), 
                this._globalIsTranslate = !0, fastPathApplied = !0) : (Matrix3d.copy(parentGT, gt), 
                this._globalIsTranslate = !0 === this.isSimple && !0 === parent._globalIsTranslate);
            }
            !1 === fastPathApplied && (this.isSimple ? gt.translate(lt.tx, lt.ty) : gt.translateOrMultiply(lt)), 
            this.calculateRenderCoords(), this.updateBoundingRect(), updateType |= UpdateType.RenderState, 
            0 === (updateType & UpdateType.Autosize) && (updateType |= UpdateType.Children, 
            childUpdateType |= UpdateType.Global), !1 !== this.props.clipping && (updateType |= UpdateType.Clipping | UpdateType.RenderBounds, 
            childUpdateType |= UpdateType.RenderBounds);
        }
        if (updateType & UpdateType.RenderBounds && (this.createRenderBounds(), updateType |= UpdateType.RenderState | UpdateType.Children, 
        childUpdateType |= UpdateType.RenderBounds), updateType & UpdateType.RenderState && (newRenderState = this.checkRenderBounds(), 
        updateType |= UpdateType.IsRenderable, newRenderState !== CoreNodeRenderState.OutOfBounds && this.updateRenderState(newRenderState)), 
        updateType & UpdateType.WorldAlpha && (this.worldAlpha = !0 === props.ignoreParentAlpha ? props.alpha : parent.worldAlpha * props.alpha, 
        updateType |= UpdateType.PremultipliedColors | UpdateType.Children | UpdateType.IsRenderable, 
        childUpdateType |= UpdateType.WorldAlpha), updateType & UpdateType.IsRenderable && this.updateIsRenderable(), 
        ENABLE_AUTOSIZE && updateType & UpdateType.Global && !0 === this.isRenderable && null !== this.parentAutosizer && this.parentAutosizer.patch(this.id), 
        updateType & UpdateType.Clipping && (this.calculateClippingRect(parentClippingRect), 
        updateType |= UpdateType.Children, childUpdateType |= UpdateType.Clipping | UpdateType.RenderBounds), 
        updateType & UpdateType.PremultipliedColors) {
            const alpha = this.worldAlpha;
            if (!0 === this.placeholderActive) {
                const merged = premultiplyColorABGR(props.placeholderColor, alpha);
                this.premultipliedColorTl = this.premultipliedColorTr = this.premultipliedColorBl = this.premultipliedColorBr = merged;
            } else {
                const tl = props.colorTl, tr = props.colorTr, bl = props.colorBl, br = props.colorBr, same = tl === tr && tl === bl && tl === br, merged = premultiplyColorABGR(tl, alpha);
                this.premultipliedColorTl = merged, !0 === same ? this.premultipliedColorTr = this.premultipliedColorBl = this.premultipliedColorBr = merged : (this.premultipliedColorTr = premultiplyColorABGR(tr, alpha), 
                this.premultipliedColorBl = premultiplyColorABGR(bl, alpha), this.premultipliedColorBr = premultiplyColorABGR(br, alpha));
            }
        }
        if (this.renderState === CoreNodeRenderState.OutOfBounds) return this.updateType = updateType, 
        void (this.childUpdateType = childUpdateType);
        if (updateType & UpdateType.RecalcUniforms && !0 === this.hasShaderUpdater && (this.updateShaderUniforms = !0), 
        !0 === this.isRenderable && !0 === this.updateShaderUniforms && (this.updateShaderUniforms = !1, 
        this.shader.update()), updateType & UpdateType.Children && this.children.length > 0) {
            let childClippingRect = this.clippingRect;
            !0 === this.rtt && (childClippingRect = NO_CLIPPING_RECT);
            const children = this.children, length = children.length;
            if (0 !== childUpdateType) for (let i = 0; i < length; i++) {
                const child = children[i];
                child.updateType |= childUpdateType, 0 !== child.updateType && child.update(delta, childClippingRect);
            } else for (let i = 0; i < length; i++) {
                const child = children[i];
                0 !== child.updateType && child.update(delta, childClippingRect);
            }
        }
        !0 === parentHasRenderTexture && this.notifyParentRTTOfUpdate(), updateType & UpdateType.SortZIndexChildren && this.sortChildren(), 
        newRenderState === CoreNodeRenderState.OutOfBounds && (this.updateRenderState(newRenderState), 
        this.updateIsRenderable(), !0 === this.rtt && newRenderState === CoreNodeRenderState.OutOfBounds && this.notifyChildrenRTTOfUpdate(newRenderState)), 
        updateType & (UpdateType.Global | UpdateType.PremultipliedColors | UpdateType.WorldAlpha) && (this.isQuadDirty = !0);
    }
    findParentRTTNode() {
        let rttNode = this.parent;
        for (;rttNode && !rttNode.rtt; ) rttNode = rttNode.parent;
        return rttNode;
    }
    notifyChildrenRTTOfUpdate(renderState) {
        for (const child of this.children) child.updateRenderState(renderState), child.updateIsRenderable(), 
        child.notifyChildrenRTTOfUpdate(renderState);
    }
    notifyParentRTTOfUpdate() {
        if (null === this.parent) return;
        const rttNode = this.rttParent || this.findParentRTTNode();
        rttNode && (rttNode.hasRTTupdates = !0, rttNode.setUpdateType(UpdateType.RenderTexture), 
        !0 === rttNode.parentHasRenderTexture && rttNode.notifyParentRTTOfUpdate());
    }
    checkRenderBounds() {
        return boundInsideBound(this.renderBound, this.strictBound) ? CoreNodeRenderState.InViewport : boundInsideBound(this.renderBound, this.preloadBound) ? CoreNodeRenderState.InBounds : (bound1 = this.renderBound, 
        bound2 = this.strictBound, bound1.x1 < bound2.x1 && bound1.x2 > bound2.x2 && bound1.y1 < bound2.y1 && bound1.y2 > bound2.y2 ? CoreNodeRenderState.InViewport : null === this.parent || 0 !== this.props.w && 0 !== this.props.h ? CoreNodeRenderState.OutOfBounds : this.parent.renderState);
        var bound1, bound2;
    }
    updateBoundingRect() {
        const transform = this.sceneGlobalTransform || this.globalTransform, renderCoords = this.sceneRenderCoords || this.renderCoords;
        if (0 === transform.tb && 0 === transform.tc) this.renderBound = createBound(renderCoords.x1, renderCoords.y1, renderCoords.x3, renderCoords.y3, this.renderBound); else {
            const {x1: x1, y1: y1, x2: x2, y2: y2, x3: x3, y3: y3, x4: x4, y4: y4} = renderCoords;
            this.renderBound = createBound(Math.min(x1, x2, x3, x4), Math.min(y1, y2, y3, y4), Math.max(x1, x2, x3, x4), Math.max(y1, y2, y3, y4), this.renderBound);
        }
    }
    createRenderBounds() {
        if (null !== this.parent && void 0 !== this.parent.strictBound) {
            const parentBound = this.parent.strictBound;
            this.strictBound = createBound(parentBound.x1, parentBound.y1, parentBound.x2, parentBound.y2, this.strictBound), 
            this.preloadBound = createPreloadBounds(this.strictBound, this.boundsMargin, this.preloadBound);
        } else this.strictBound = this.stage.strictBound, this.preloadBound = this.stage.preloadBound;
        if (!1 === this.props.clipping) return;
        if (void 0 === this.renderBound) return;
        if (!1 === boundInsideBound(this.renderBound, this.strictBound)) return;
        const {x: x, y: y, w: w, h: h, clipping: clipping} = this.props, {tx: tx, ty: ty} = this.sceneGlobalTransform || this.globalTransform || {}, _x = null != tx ? tx : x, _y = null != ty ? ty : y;
        let mT = 0, mR = 0, mB = 0, mL = 0;
        !0 === Array.isArray(clipping) && (mT = clipping[0], mR = clipping[1], mB = clipping[2], 
        mL = clipping[3]), this.strictBound = createBound(_x - mL, _y - mT, _x + w + mR, _y + h + mB, this.strictBound), 
        this.preloadBound = createPreloadBounds(this.strictBound, this.boundsMargin, this.preloadBound);
    }
    updateRenderState(renderState) {
        if (renderState === this.renderState) return;
        const previous = this.renderState;
        if (this.renderState = renderState, renderState !== CoreNodeRenderState.OutOfBounds && previous !== CoreNodeRenderState.OutOfBounds || this.stage.requestRenderListUpdate(), 
        EMIT_BOUNDS_EVENTS) {
            const event = CoreNodeRenderStateMap$1.get(renderState);
            this.emit(event, {
                previous: previous,
                current: renderState
            });
        }
    }
    checkBasicRenderability() {
        return 0 !== this.worldAlpha && !0 !== this.isOutOfBounds();
    }
    updateIsRenderable() {
        let newIsRenderable = !1, needsTextureOwnership = !1;
        if (!1 === this.checkBasicRenderability()) return this.updateTextureOwnership(!1), 
        void this.setRenderable(!1);
        if (null !== this.texture) {
            if (this.texture.retryCount > this.texture.maxRetryCount) return this.updateTextureOwnership(!1), 
            void this.setRenderable(!0 === this.placeholderActive && (!1 === this.stage.renderOnlyInViewport || this.renderState === CoreNodeRenderState.InViewport));
            needsTextureOwnership = !0, newIsRenderable = !0 === this.textureLoaded || !0 === this.placeholderActive;
        } else this.props.shader === this.stage.renderer.getDefaultShaderNode() && !0 !== this.hasColorProps || !0 !== this.hasDimensions() || (newIsRenderable = !0);
        !0 === newIsRenderable && !0 === this.stage.renderOnlyInViewport && this.renderState !== CoreNodeRenderState.InViewport && (newIsRenderable = !1), 
        this.updateTextureOwnership(needsTextureOwnership), this.setRenderable(newIsRenderable);
    }
    setRenderable(isRenderable) {
        const previousIsRenderable = this.isRenderable;
        this.isRenderable = isRenderable, previousIsRenderable !== isRenderable && (this.stage.requestRenderListUpdate(), 
        EMIT_BOUNDS_EVENTS && this.emit("renderable", {
            type: "renderable",
            isRenderable: isRenderable
        }));
    }
    updateTextureOwnership(isRenderable) {
        var _this$texture;
        this.textureOwnership !== isRenderable && (this.textureOwnership = isRenderable, 
        null == (_this$texture = this.texture) || _this$texture.setRenderableOwner(this._id, isRenderable));
    }
    isOutOfBounds() {
        return this.renderState <= CoreNodeRenderState.OutOfBounds;
    }
    hasDimensions() {
        return 0 !== this.props.w && 0 !== this.props.h;
    }
    calculateRenderCoords() {
        const {w: w, h: h} = this.props, g = this.globalTransform, tx = g.tx, ty = g.ty, ta = g.ta, tb = g.tb, tc = g.tc, td = g.td;
        if (0 === tb && 0 === tc) {
            const minX = tx, maxX = tx + w * ta, minY = ty, maxY = ty + h * td;
            this.renderCoords = RenderCoords.translate(minX, minY, maxX, minY, maxX, maxY, minX, maxY, this.renderCoords);
        } else this.renderCoords = RenderCoords.translate(tx, ty, tx + w * ta, ty + w * tc, tx + w * ta + h * tb, ty + w * tc + h * td, tx + h * tb, ty + h * td, this.renderCoords);
        if (void 0 === this.sceneGlobalTransform) return;
        const {tx: stx, ty: sty, ta: sta, tb: stb, tc: stc, td: std} = this.sceneGlobalTransform;
        if (0 === stb && 0 === stc) {
            const minX = stx, maxX = stx + w * sta, minY = sty, maxY = sty + h * std;
            this.sceneRenderCoords = RenderCoords.translate(minX, minY, maxX, minY, maxX, maxY, minX, maxY, this.sceneRenderCoords);
        } else this.sceneRenderCoords = RenderCoords.translate(stx, sty, stx + w * sta, sty + w * stc, stx + w * sta + h * stb, sty + w * stc + h * std, stx + h * stb, sty + h * std, this.sceneRenderCoords);
    }
    calculateClippingRect(parentClippingRect) {
        const {props: props, globalTransform: gt} = this, {clipping: clipping} = props, isRotated = 0 !== gt.tb || 0 !== gt.tc, nodeClips = !1 !== clipping && !1 === isRotated;
        if (!1 === nodeClips && !1 === parentClippingRect.valid) return void (this.clippingRect = NO_CLIPPING_RECT);
        let clippingRect = this.clippingRect;
        if (clippingRect === NO_CLIPPING_RECT && (clippingRect = this.clippingRect = {
            x: 0,
            y: 0,
            w: 0,
            h: 0,
            valid: !1
        }), !0 === nodeClips) {
            let mT = 0, mR = 0, mB = 0, mL = 0;
            !0 === Array.isArray(clipping) && (mT = clipping[0], mR = clipping[1], mB = clipping[2], 
            mL = clipping[3]), clippingRect.x = gt.tx - mL, clippingRect.y = gt.ty - mT, clippingRect.w = this.props.w * gt.ta + mL + mR, 
            clippingRect.h = this.props.h * gt.td + mT + mB, clippingRect.valid = !0;
        } else clippingRect.valid = !1;
        var a, out;
        !0 === parentClippingRect.valid && !0 === clippingRect.valid ? function(a, b, out) {
            const x = Math.max(a.x, b.x), y = Math.max(a.y, b.y), w = Math.min(a.x + a.w, b.x + b.w) - x, h = Math.min(a.y + a.h, b.y + b.h) - y;
            w > 0 && h > 0 ? out && (out.x = x, out.y = y, out.w = w, out.h = h) : out && (out.x = 0, 
            out.y = 0, out.w = 0, out.h = 0);
        }(parentClippingRect, clippingRect, clippingRect) : !0 === parentClippingRect.valid && (a = parentClippingRect, 
        (out = clippingRect) ? (out.x = a.x, out.y = a.y, out.w = a.w, out.h = a.h) : (a.x, 
        a.y, a.w, a.h), clippingRect.valid = !0);
    }
    destroy(isChild = !1) {
        if (!0 === this.destroyed || !0 === this.preventDestroy) return void (isChild && !0 === this.preventDestroy && (this.props.parent = null));
        if (this.destroyed = !0, !1 === isChild) {
            const parent = this.parent;
            null !== parent && parent.removeChild(this), this.props.parent = null, this.stage.requestRender();
        }
        this.removeAllListeners(), this.unloadTexture(), this.isRenderable = !1, !0 === this.hasShaderTimeFn && this.stage.untrackTimedNode(this);
        const shader = this.props.shader;
        null !== shader && shader !== this.stage.defShaderNode && shader.detachNode(), !0 === this.rtt && this.stage.renderer.removeRTTNode(this);
        for (let i = 0, n = this.children.length; i < n; i++) this.children[i].destroy(!0);
        this.children.length = 0, this.props.texture = null;
    }
    renderQuads(renderer) {
        (!0 !== this.parentHasRenderTexture || !1 !== renderer.renderToTextureActive && this.parentRenderTexture === renderer.activeRttNode) && "loaded" === this.renderTexture.state && renderer.addQuad(this);
    }
    get renderTexture() {
        return !0 === this.placeholderActive ? this.stage.defaultTexture : this.props.texture || this.stage.defaultTexture;
    }
    get renderTextureCoords() {
        return this.textureCoords || this.stage.renderer.defaultTextureCoords;
    }
    get quadBufferCollection() {
        return this.stage.renderer.quadBufferCollection;
    }
    get width() {
        return this.props.w;
    }
    get height() {
        return this.props.h;
    }
    get time() {
        return !0 === this.hasShaderTimeFn ? this.getTimerValue() : 0;
    }
    getTimerValue() {
        return "function" == typeof this.shader.time ? this.shader.time(this.stage) : this.stage.elapsedTime;
    }
    sortChildren() {
        (nodes => {
            const len = nodes.length;
            for (let i = 1; i < len; i++) {
                const node = nodes[i], z = node.props.zIndex;
                let j = i - 1;
                for (;j >= 0 && nodes[j].props.zIndex > z; ) nodes[j + 1] = nodes[j], j--;
                nodes[j + 1] = node;
            }
        })(this.children), this.stage.requestRenderListUpdate();
    }
    removeChild(node, targetParent = null) {
        if (null === targetParent && (!0 === this.props.rtt && !0 === this.parentHasRenderTexture && node.clearRTTInheritance(), 
        ENABLE_AUTOSIZE)) {
            const autosizeTarget = this.autosizer || this.parentAutosizer;
            null !== autosizeTarget && autosizeTarget.detach(node);
        }
        ((node, children) => {
            const index = ((node, children) => {
                for (let i = 0; i < children.length; i++) if (children[i]._id === node._id) return i;
                return -1;
            })(node, children);
            -1 !== index && children.splice(index, 1);
        })(node, this.children), this.stage.requestRenderListUpdate();
    }
    addChild(node, previousParent = null) {
        const inRttCluster = !0 === this.props.rtt || !0 === this.parentHasRenderTexture, children = this.children;
        let attachToAutosizer = !1, autosizeTarget = null;
        if (ENABLE_AUTOSIZE && (autosizeTarget = this.autosizer || this.parentAutosizer, 
        attachToAutosizer = null !== autosizeTarget), node.parentHasRenderTexture = inRttCluster, 
        null !== previousParent) {
            const previousParentInRttCluster = !0 === previousParent.props.rtt || !0 === previousParent.parentHasRenderTexture;
            if (!1 === inRttCluster && !0 === previousParentInRttCluster && node.clearRTTInheritance(), 
            ENABLE_AUTOSIZE) {
                const previousAutosizer = node.autosizer || node.parentAutosizer;
                null !== previousAutosizer && (autosizeTarget && previousAutosizer.id === autosizeTarget.id || previousAutosizer.detach(node), 
                attachToAutosizer = !1);
            }
        }
        ENABLE_AUTOSIZE && !0 === attachToAutosizer && autosizeTarget && autosizeTarget.attach(node), 
        !0 === inRttCluster && node.markChildrenWithRTT(this), children.push(node);
        const lastIndex = children.length - 1;
        let shouldSort = 0 !== node.zIndex;
        if (!1 === shouldSort && lastIndex > 0) {
            const first = children[0], last = children[lastIndex - 1];
            shouldSort = 0 !== first.zIndex || 0 !== last.zIndex;
        }
        shouldSort && this.setUpdateType(UpdateType.SortZIndexChildren), this.setUpdateType(UpdateType.Children), 
        this.stage.requestRenderListUpdate();
    }
    get id() {
        return this._id;
    }
    get data() {
        return this.props.data;
    }
    set data(d) {
        this.props.data = d;
    }
    get x() {
        return this.props.x;
    }
    set x(value) {
        this.props.x !== value && (this.props.x = value, this.setUpdateType(UpdateType.Local));
    }
    get absX() {
        var _this$props$parent, _this$props$parent2;
        return this.props.x + -this.props.w * this.props.mountX + ((null == (_this$props$parent = this.props.parent) ? void 0 : _this$props$parent.absX) || (null == (_this$props$parent2 = this.props.parent) || null == (_this$props$parent2 = _this$props$parent2.globalTransform) ? void 0 : _this$props$parent2.tx) || 0);
    }
    get absY() {
        var _this$props$parent$ab, _this$props$parent3;
        return this.props.y + -this.props.h * this.props.mountY + (null !== (_this$props$parent$ab = null == (_this$props$parent3 = this.props.parent) ? void 0 : _this$props$parent3.absY) && void 0 !== _this$props$parent$ab ? _this$props$parent$ab : 0);
    }
    get y() {
        return this.props.y;
    }
    set y(value) {
        this.props.y !== value && (this.props.y = value, this.setUpdateType(UpdateType.Local));
    }
    get w() {
        return this.props.w;
    }
    set w(value) {
        const props = this.props;
        if (props.w !== value) {
            props.w = value;
            let updateType = UpdateType.Local | UpdateType.RecalcUniforms;
            null !== props.texture && !0 === this.stage.calculateTextureCoord && null !== props.textureOptions && (this.textureCoords = this.stage.renderer.getTextureCoords(this)), 
            !0 === props.rtt && (this.framebufferDimensions.w = value, this.texture = this.stage.txManager.createTexture("RenderTexture", this.framebufferDimensions), 
            updateType |= UpdateType.RenderTexture), this.setUpdateType(updateType);
        }
    }
    get h() {
        return this.props.h;
    }
    set h(value) {
        const props = this.props;
        if (props.h !== value) {
            props.h = value;
            let updateType = UpdateType.Local | UpdateType.RecalcUniforms;
            null !== props.texture && !0 === this.stage.calculateTextureCoord && null !== props.textureOptions && (this.textureCoords = this.stage.renderer.getTextureCoords(this)), 
            !0 === props.rtt && (this.framebufferDimensions.h = value, this.texture = this.stage.txManager.createTexture("RenderTexture", this.framebufferDimensions), 
            updateType |= UpdateType.RenderTexture), this.setUpdateType(updateType);
        }
    }
    get scale() {
        return this.scaleX;
    }
    set scale(value) {
        this.scaleX = value, this.scaleY = value, this.updateIsSimple();
    }
    get scaleX() {
        return this.props.scaleX;
    }
    set scaleX(value) {
        this.props.scaleX !== value && (this.props.scaleX = value, this.setUpdateType(UpdateType.Local), 
        this.updateIsSimple());
    }
    get scaleY() {
        return this.props.scaleY;
    }
    set scaleY(value) {
        this.props.scaleY !== value && (this.props.scaleY = value, this.setUpdateType(UpdateType.Local), 
        this.updateIsSimple());
    }
    get mount() {
        return this.props.mount;
    }
    set mount(value) {
        this.props.mountX === value && this.props.mountY === value || (this.props.mountX = value, 
        this.props.mountY = value, this.props.mount = value, this.setUpdateType(UpdateType.Local), 
        this.updateIsSimple());
    }
    get mountX() {
        return this.props.mountX;
    }
    set mountX(value) {
        this.props.mountX !== value && (this.props.mountX = value, this.setUpdateType(UpdateType.Local), 
        this.updateIsSimple());
    }
    get mountY() {
        return this.props.mountY;
    }
    set mountY(value) {
        this.props.mountY !== value && (this.props.mountY = value, this.setUpdateType(UpdateType.Local), 
        this.updateIsSimple());
    }
    get pivot() {
        return this.props.pivot;
    }
    set pivot(value) {
        this.props.pivotX === value && this.props.pivotY === value || (this.props.pivotX = value, 
        this.props.pivotY = value, this.props.pivot = value, this.setUpdateType(UpdateType.Local));
    }
    get pivotX() {
        return this.props.pivotX;
    }
    set pivotX(value) {
        this.props.pivotX !== value && (this.props.pivotX = value, this.setUpdateType(UpdateType.Local));
    }
    get pivotY() {
        return this.props.pivotY;
    }
    set pivotY(value) {
        this.props.pivotY !== value && (this.props.pivotY = value, this.setUpdateType(UpdateType.Local));
    }
    get rotation() {
        return this.props.rotation;
    }
    set rotation(value) {
        this.props.rotation !== value && (this.props.rotation = value, this.setUpdateType(UpdateType.Local), 
        this.updateIsSimple());
    }
    get alpha() {
        return this.props.alpha;
    }
    set alpha(value) {
        this.props.alpha = value, this.setUpdateType(UpdateType.PremultipliedColors | UpdateType.WorldAlpha | UpdateType.Children | UpdateType.IsRenderable), 
        this.childUpdateType |= UpdateType.WorldAlpha;
    }
    get ignoreParentAlpha() {
        return this.props.ignoreParentAlpha;
    }
    set ignoreParentAlpha(value) {
        this.props.ignoreParentAlpha !== value && (this.props.ignoreParentAlpha = value, 
        this.setUpdateType(UpdateType.PremultipliedColors | UpdateType.WorldAlpha | UpdateType.Children | UpdateType.IsRenderable), 
        this.childUpdateType |= UpdateType.WorldAlpha);
    }
    get autosize() {
        return this.props.autosize;
    }
    set autosize(value) {
        this.props.autosize !== value && (this.props.autosize = value, !0 === value && null === this.autosizer ? this.autosizer = new Autosizer(this) : this.autosizer = null);
    }
    get boundsMargin() {
        const props = this.props;
        if (null !== props.boundsMargin) return props.boundsMargin;
        const parent = this.parent;
        if (null !== parent) {
            const margin = parent.boundsMargin;
            if (void 0 !== margin) return margin;
        }
        return this.stage.boundsMargin;
    }
    set boundsMargin(value) {
        if (value !== this.props.boundsMargin) {
            if (null === value) this.props.boundsMargin = value; else {
                const bm = Array.isArray(value) ? value : [ value, value, value, value ];
                this.props.boundsMargin = bm;
            }
            this.setUpdateType(UpdateType.RenderBounds);
        }
    }
    get clipping() {
        return this.props.clipping;
    }
    set clipping(value) {
        this.props.clipping !== value && (this.props.clipping = value, this.setUpdateType(UpdateType.Clipping | UpdateType.RenderBounds | UpdateType.Children), 
        this.childUpdateType |= UpdateType.Global | UpdateType.Clipping);
    }
    get color() {
        return this.props.color;
    }
    set color(value) {
        const p = this.props;
        if (p.color === value) return;
        p.color = value;
        const has = value > 0;
        has !== this.hasColorProps && this.setUpdateType(UpdateType.IsRenderable), this.hasColorProps = has, 
        p.colorTop !== value && (this.colorTop = value), p.colorBottom !== value && (this.colorBottom = value), 
        p.colorLeft !== value && (this.colorLeft = value), p.colorRight !== value && (this.colorRight = value), 
        this.setUpdateType(UpdateType.PremultipliedColors);
    }
    get placeholderColor() {
        return this.props.placeholderColor;
    }
    set placeholderColor(value) {
        const p = this.props;
        p.placeholderColor !== value && (p.placeholderColor = value, this.updatePlaceholderActive(), 
        !0 === this.placeholderActive && this.setUpdateType(UpdateType.PremultipliedColors));
    }
    get colorTop() {
        return this.props.colorTop;
    }
    set colorTop(value) {
        this.props.colorTl === value && this.props.colorTr === value || (this.colorTl = value, 
        this.colorTr = value), this.props.colorTop = value, this.hasColorProps = value > 0, 
        this.setUpdateType(UpdateType.PremultipliedColors | UpdateType.IsRenderable);
    }
    get colorBottom() {
        return this.props.colorBottom;
    }
    set colorBottom(value) {
        this.props.colorBl === value && this.props.colorBr === value || (this.colorBl = value, 
        this.colorBr = value), this.props.colorBottom = value, this.hasColorProps = value > 0, 
        this.setUpdateType(UpdateType.PremultipliedColors | UpdateType.IsRenderable);
    }
    get colorLeft() {
        return this.props.colorLeft;
    }
    set colorLeft(value) {
        this.props.colorTl === value && this.props.colorBl === value || (this.colorTl = value, 
        this.colorBl = value), this.props.colorLeft = value, this.hasColorProps = value > 0, 
        this.setUpdateType(UpdateType.PremultipliedColors | UpdateType.IsRenderable);
    }
    get colorRight() {
        return this.props.colorRight;
    }
    set colorRight(value) {
        this.props.colorTr === value && this.props.colorBr === value || (this.colorTr = value, 
        this.colorBr = value), this.props.colorRight = value, this.hasColorProps = value > 0, 
        this.setUpdateType(UpdateType.PremultipliedColors | UpdateType.IsRenderable);
    }
    get colorTl() {
        return this.props.colorTl;
    }
    set colorTl(value) {
        this.props.colorTl = value, this.hasColorProps = value > 0, this.setUpdateType(UpdateType.PremultipliedColors | UpdateType.IsRenderable);
    }
    get colorTr() {
        return this.props.colorTr;
    }
    set colorTr(value) {
        this.props.colorTr = value, this.hasColorProps = value > 0, this.setUpdateType(UpdateType.PremultipliedColors | UpdateType.IsRenderable);
    }
    get colorBl() {
        return this.props.colorBl;
    }
    set colorBl(value) {
        this.props.colorBl = value, this.hasColorProps = value > 0, this.setUpdateType(UpdateType.PremultipliedColors | UpdateType.IsRenderable);
    }
    get colorBr() {
        return this.props.colorBr;
    }
    set colorBr(value) {
        this.props.colorBr = value, this.hasColorProps = value > 0, this.setUpdateType(UpdateType.PremultipliedColors | UpdateType.IsRenderable);
    }
    get zIndex() {
        return this.props.zIndex;
    }
    set zIndex(value) {
        let sanitizedValue = value;
        if ((isNaN(sanitizedValue) || !1 === Number.isFinite(sanitizedValue)) && (console.warn(`zIndex was set to an invalid value: ${value}, defaulting to 0`), 
        sanitizedValue = 0), sanitizedValue > Number.MAX_SAFE_INTEGER ? sanitizedValue = 1e3 : sanitizedValue < Number.MIN_SAFE_INTEGER && (sanitizedValue = -1e3), 
        this.props.zIndex === sanitizedValue) return;
        this.props.zIndex = sanitizedValue;
        const parent = this.parent;
        null !== parent && parent.setUpdateType(UpdateType.SortZIndexChildren);
    }
    get parent() {
        return this.props.parent;
    }
    set parent(newParent) {
        const oldParent = this.props.parent;
        oldParent !== newParent && (this.props.parent = newParent, oldParent && oldParent.removeChild(this, newParent), 
        null !== newParent && newParent.addChild(this, oldParent), this.setUpdateType(UpdateType.Global | UpdateType.RenderBounds));
    }
    get rtt() {
        return this.props.rtt;
    }
    set rtt(value) {
        this.props.rtt !== value && (this.props.rtt = value, !0 === value ? (this.initRenderTexture(), 
        this.markChildrenWithRTT()) : this.cleanupRenderTexture(), this.setUpdateType(UpdateType.RenderTexture), 
        !0 === this.parentHasRenderTexture && this.notifyParentRTTOfUpdate());
    }
    get preventDestroy() {
        return this.props.preventDestroy;
    }
    set preventDestroy(value) {
        this.props.preventDestroy = value;
    }
    initRenderTexture() {
        this.framebufferDimensions = {
            w: this.props.w,
            h: this.props.h
        }, this.texture = this.stage.txManager.createTexture("RenderTexture", this.framebufferDimensions), 
        this.stage.renderer.renderToTexture(this);
    }
    cleanupRenderTexture() {
        this.unloadTexture(), this.clearRTTInheritance(), this.hasRTTupdates = !1, this.texture = null, 
        this.framebufferDimensions = null;
    }
    markChildrenWithRTT(node = null) {
        const parent = node || this;
        for (const child of parent.children) child.setUpdateType(UpdateType.All), child.parentHasRenderTexture = !0, 
        child.markChildrenWithRTT();
    }
    applyRTTInheritance(parent) {
        parent.rtt && parent.setUpdateType(UpdateType.RenderTexture), this.markChildrenWithRTT(parent);
    }
    clearRTTInheritance() {
        if (this.rtt) return;
        const ancestorRTT = this.findParentRTTNode();
        for (const child of this.children) null !== ancestorRTT ? (child.parentHasRenderTexture = !0, 
        child.rttParent = ancestorRTT) : (child.parentHasRenderTexture = !1, child.rttParent = null), 
        child.setUpdateType(UpdateType.All), child.clearRTTInheritance();
    }
    get shader() {
        return this.props.shader;
    }
    set shader(shader) {
        if (null === shader) {
            const def = this.stage.defShaderNode;
            if (this.props.shader === def) return;
            return this.hasShaderUpdater = !1, this.hasShaderTimeFn = !1, this.stage.untrackTimedNode(this), 
            this.props.shader = def, void this.setUpdateType(UpdateType.IsRenderable);
        }
        this.props.shader !== shader && (this.hasShaderUpdater = void 0 !== shader.update, 
        this.hasShaderTimeFn = void 0 !== shader.time, "default" !== shader.shaderKey && shader.attachNode(this), 
        !0 === this.hasShaderTimeFn ? this.stage.trackTimedNode(this) : this.stage.untrackTimedNode(this), 
        this.props.shader = shader, this.setUpdateType(UpdateType.IsRenderable | UpdateType.RecalcUniforms));
    }
    get src() {
        return this.props.src;
    }
    set src(imageUrl) {
        this.props.src !== imageUrl && (this.props.src = imageUrl, this.texture = imageUrl ? this.stage.txManager.createTexture("ImageTexture", {
            src: imageUrl,
            w: this.props.w,
            h: this.props.h,
            type: this.props.imageType,
            sx: this.props.srcX,
            sy: this.props.srcY,
            sw: this.props.srcWidth,
            sh: this.props.srcHeight
        }) : null);
    }
    set imageType(type) {
        this.props.imageType !== type && (this.props.imageType = type);
    }
    get imageType() {
        return this.props.imageType || null;
    }
    get srcHeight() {
        return this.props.srcHeight;
    }
    set srcHeight(value) {
        this.props.srcHeight = value;
    }
    get srcWidth() {
        return this.props.srcWidth;
    }
    set srcWidth(value) {
        this.props.srcWidth = value;
    }
    get srcX() {
        return this.props.srcX;
    }
    set srcX(value) {
        this.props.srcX = value;
    }
    get srcY() {
        return this.props.srcY;
    }
    set srcY(value) {
        this.props.srcY = value;
    }
    get parentFramebufferDimensions() {
        return null !== this.rttParent ? this.rttParent.framebufferDimensions : (this.rttParent = this.findParentRTTNode(), 
        this.rttParent ? this.rttParent.framebufferDimensions : null);
    }
    get parentRenderTexture() {
        let parent = this.parent;
        for (;parent; ) {
            if (parent.rtt) return parent;
            parent = parent.parent;
        }
        return null;
    }
    get texture() {
        return this.props.texture;
    }
    set texture(value) {
        var _this$texture2;
        this.props.texture !== value && (this.props.texture && (this.unloadTexture(), null !== this.autosizer && null === value && this.autosizer.setMode(AutosizeMode.Children)), 
        this.textureCoords = void 0, this.props.texture = value, this.textureLoaded = null !== value && "loaded" === value.state, 
        this.updatePlaceholderActive(), null !== value && (null !== this.autosizer && this.autosizer.setMode(AutosizeMode.Texture), 
        value.setRenderableOwner(this._id, this.isRenderable), this.textureOwnership = this.isRenderable, 
        this.loadTexture()), (null == (_this$texture2 = this.texture) ? void 0 : _this$texture2.type) === TextureType.subTexture && this.textureLoaded && (this.isQuadDirty = !0), 
        this.setUpdateType(UpdateType.IsRenderable), this.updateIsSimple());
    }
    set textureOptions(value) {
        this.props.textureOptions = value, !0 === this.stage.calculateTextureCoord && null !== value && (this.textureCoords = this.stage.renderer.getTextureCoords(this)), 
        this.updateIsSimple();
    }
    get textureOptions() {
        return this.props.textureOptions;
    }
    get componentName() {
        return this.props.componentName;
    }
    get componentLocation() {
        return this.props.componentLocation;
    }
    setRTTUpdates(type) {
        var _this$parent;
        this.hasRTTupdates = !0, null == (_this$parent = this.parent) || _this$parent.setRTTUpdates(type);
    }
    animate(props, settings) {
        return createAnimation(this.stage.animationManager, this, props, settings);
    }
    animateProp(name, value, settings) {
        let animations = this._animations;
        if (null !== animations) {
            const existing = animations[name];
            if (existing && existing.settings === settings) {
                const controller = existing.controller, values = controller.props ? controller.props[name] : null;
                if (values) {
                    var _this$name;
                    if (values.start = null !== (_this$name = this[name]) && void 0 !== _this$name ? _this$name : 0, 
                    values.target = value, controller.progress = 0, !0 === settings.adaptiveDuration) {
                        var _settings$duration;
                        const now = performance.now(), elapsed = now - controller.lastRunTime;
                        controller.lastRunTime = now;
                        const duration = null !== (_settings$duration = settings.duration) && void 0 !== _settings$duration ? _settings$duration : controller.duration;
                        controller.duration = elapsed < duration ? elapsed : duration;
                    }
                    return controller.start();
                }
            }
        } else animations = this._animations = {};
        const animationProps = {
            [name]: value
        }, controller = createAnimation(this.stage.animationManager, this, animationProps, settings);
        return animations[name] = {
            controller: controller,
            settings: settings
        }, controller.start();
    }
    animateToTarget(prop) {
        var _animation$controller;
        const animations = this._animations;
        if (null === animations) return;
        const animation = animations[prop];
        return animation ? null == (_animation$controller = animation.controller.props) || null == (_animation$controller = _animation$controller[prop]) ? void 0 : _animation$controller.target : void 0;
    }
    flush() {}
    addTexture(texture) {
        const textures = this.renderOpTextures, length = textures.length;
        for (let i = 0; i < length; i++) if (textures[i] === texture) return i;
        return length >= 1 ? 4294967295 : (textures.push(texture), length);
    }
    draw(renderer) {
        const {glw: glw, options: options, stage: stage} = renderer, shader = this.props.shader;
        if (stage.shManager.useShader(shader.program), shader.program.bindRenderOp(this), 
        !0 === this.clippingRect.valid) {
            const pixelRatio = this.parentHasRenderTexture ? 1 : stage.pixelRatio, clipX = Math.round(this.clippingRect.x * pixelRatio), clipWidth = Math.round(this.clippingRect.w * pixelRatio), clipHeight = Math.round(this.clippingRect.h * pixelRatio);
            let clipY = Math.round(options.canvas.height - clipHeight - this.clippingRect.y * pixelRatio);
            if (this.parentHasRenderTexture) {
                const parentFramebufferDimensions = this.parentFramebufferDimensions;
                clipY = null !== parentFramebufferDimensions ? parentFramebufferDimensions.h - this.props.h : 0;
            }
            glw.setScissorTest(!0), glw.scissor(clipX, clipY, clipWidth, clipHeight);
        } else glw.setScissorTest(!1);
        const quadIdx = this.renderOpBufferIdx / 20 * 6 * 2;
        glw.drawElements(glw.TRIANGLES, 6 * this.numQuads, glw.UNSIGNED_SHORT, quadIdx);
    }
}, AnimationManager = class {
    constructor() {
        this.activeAnimations = [];
    }
    registerAnimation(animation) {
        this.activeAnimations.includes(animation) || this.activeAnimations.push(animation);
    }
    unregisterAnimation(animation) {
        const idx = this.activeAnimations.indexOf(animation);
        -1 !== idx && this.activeAnimations.splice(idx, 1);
    }
    update(dt) {
        for (let i = this.activeAnimations.length - 1; i >= 0; i--) {
            const anim = this.activeAnimations[i];
            if (!anim) continue;
            if (anim.node.destroyed) {
                anim.stop();
                continue;
            }
            const {duration: duration, loop: loop} = anim;
            let remainingDt = dt;
            if (anim.delayFor > 0) {
                if (anim.delayFor -= remainingDt, anim.delayFor >= 0) continue;
                remainingDt = -anim.delayFor, anim.delayFor = 0;
            }
            0 === anim.progress && "scheduled" === anim.state && (anim.state = "running"), 0 === duration ? anim.progress = 1 : anim.progress += remainingDt / duration;
            let isFinished = !1;
            anim.progress >= 1 && (loop ? (anim.progress = anim.progress % 1, anim.delayFor = anim.delay) : (anim.progress = 1, 
            isFinished = !0)), this.applyValues(anim), isFinished && ("reverse" === anim.stopMethod ? (this.reverseValues(anim), 
            anim.progress = 0, anim.delayFor = anim.delay) : anim.stop());
        }
    }
    applyValues(anim) {
        const easedProgress = anim.timingFunction(anim.progress) || anim.progress;
        if (anim.props) for (const key in anim.props) {
            const value = anim.props[key];
            1 === anim.progress ? anim.node[key] = value.target : 0 === anim.progress ? anim.node[key] = value.start : value.isColor ? anim.node[key] = mergeColorProgress(value.start, value.target, easedProgress) : anim.node[key] = value.start + (value.target - value.start) * easedProgress;
        }
        if (anim.shaderProps && anim.node.shader) {
            let updated = !1;
            for (const key in anim.shaderProps) {
                const value = anim.shaderProps[key];
                1 === anim.progress ? anim.node.shader.props[key] = value.target : 0 === anim.progress ? anim.node.shader.props[key] = value.start : value.isColor ? anim.node.shader.props[key] = mergeColorProgress(value.start, value.target, easedProgress) : anim.node.shader.props[key] = value.start + (value.target - value.start) * easedProgress, 
                updated = !0;
            }
            updated && anim.node.setUpdateType(4096);
        }
    }
    reverseValues(anim) {
        if (anim.props) for (const key in anim.props) {
            const v = anim.props[key], t = v.start;
            v.start = v.target, v.target = t;
        }
        if (anim.shaderProps) for (const key in anim.shaderProps) {
            const v = anim.shaderProps[key], t = v.start;
            v.start = v.target, v.target = t;
        }
        anim.loop || (anim.stopMethod = !1);
    }
};

function createImageWorker() {
    self.onmessage = event => {
        var src = event.data.src, id = event.data.id, premultiplyAlpha = event.data.premultiplyAlpha, x = event.data.sx, y = event.data.sy, width = event.data.sw, height = event.data.sh;
        (function(src, premultiplyAlpha, x, y, width, height, options) {
            return new Promise(function(resolve, reject) {
                var supportsOptionsCreateImageBitmap = options.supportsOptionsCreateImageBitmap, supportsFullCreateImageBitmap = options.supportsFullCreateImageBitmap, premultiplyAlphaHonored = options.premultiplyAlphaHonored, xhr = new XMLHttpRequest;
                xhr.open("GET", src, !0), xhr.responseType = "blob", xhr.onload = function() {
                    if (200 !== xhr.status && 0 !== xhr.status) return reject(new Error(`Image loading failed. HTTP status code: ${xhr.status || "N/A"}. URL: ${src}`));
                    var blob = xhr.response, withAlphaChannel = null != premultiplyAlpha ? premultiplyAlpha : -1 !== blob.type.indexOf("image/png"), useGlPremultiply = !0 === withAlphaChannel && !1 === premultiplyAlphaHonored, bitmapMode = !0 === withAlphaChannel && !1 === useGlPremultiply ? "premultiply" : "none";
                    !0 !== supportsFullCreateImageBitmap || null === width || null === height ? !1 === supportsOptionsCreateImageBitmap && !1 === supportsFullCreateImageBitmap ? createImageBitmap(blob).then(function(data) {
                        resolve({
                            data: data,
                            premultiplyAlpha: !1
                        });
                    }).catch(function(error) {
                        reject(error);
                    }) : createImageBitmap(blob, {
                        premultiplyAlpha: bitmapMode,
                        colorSpaceConversion: "none",
                        imageOrientation: "none"
                    }).then(function(data) {
                        resolve({
                            data: data,
                            premultiplyAlpha: useGlPremultiply
                        });
                    }).catch(function(error) {
                        reject(error);
                    }) : createImageBitmap(blob, x || 0, y || 0, width, height, {
                        premultiplyAlpha: bitmapMode,
                        colorSpaceConversion: "none",
                        imageOrientation: "none"
                    }).then(function(data) {
                        resolve({
                            data: data,
                            premultiplyAlpha: useGlPremultiply
                        });
                    }).catch(function(error) {
                        reject(error);
                    });
                }, xhr.onerror = function() {
                    reject(new Error("Network error occurred while trying to fetch the image."));
                }, xhr.send();
            });
        })(src, premultiplyAlpha, x, y, width, height, {
            supportsOptionsCreateImageBitmap: !1,
            supportsFullCreateImageBitmap: !1,
            premultiplyAlphaHonored: !0
        }).then(function(data) {
            self.postMessage({
                id: id,
                src: src,
                data: data
            }, [ data.data ]);
        }).catch(function(error) {
            self.postMessage({
                id: id,
                src: src,
                error: error.message
            });
        });
    };
}

var ImageWorkerManager = class {
    constructor(numImageWorkers, createImageBitmapSupport) {
        this.messageManager = {}, this.workers = [], this.workerLoad = [], this.nextId = 0, 
        this.maxWorkers = void 0, this.workerBlob = null, this.createImageBitmapSupport = void 0, 
        this.maxWorkers = numImageWorkers, this.createImageBitmapSupport = createImageBitmapSupport;
    }
    spawnWorkers() {
        if (!(this.workers.length > 0)) {
            this.workerBlob = this.createWorkerBlob(this.createImageBitmapSupport);
            for (let i = 0; i < this.maxWorkers; i++) this.spawnWorker();
        }
    }
    handleMessage(event, workerIndex) {
        const {id: id, data: data, error: error} = event.data, msg = this.messageManager[id];
        if (this.workerLoad[workerIndex] && this.workerLoad[workerIndex]--, msg) {
            const [resolve, reject] = msg;
            delete this.messageManager[id], error ? reject(new Error(error)) : resolve(data);
        }
    }
    handleWorkerError(event, workerIndex) {
        const message = event instanceof ErrorEvent && event.message ? event.message : "Image worker encountered an unrecoverable error";
        for (const id in this.messageManager) {
            const msg = this.messageManager[id];
            if (msg) {
                const [, reject] = msg;
                delete this.messageManager[id], reject(new Error(message));
            }
        }
        this.workerLoad[workerIndex] = 0;
    }
    createWorkerBlob(createImageBitmapSupport) {
        let workerCode = `(${createImageWorker.toString()})()`;
        return !0 === createImageBitmapSupport.options && (workerCode = workerCode.replace("var supportsOptionsCreateImageBitmap = false;", "var supportsOptionsCreateImageBitmap = true;")), 
        !0 === createImageBitmapSupport.full && (workerCode = workerCode.replace("var supportsOptionsCreateImageBitmap = false;", "var supportsOptionsCreateImageBitmap = true;"), 
        workerCode = workerCode.replace("var supportsFullCreateImageBitmap = false;", "var supportsFullCreateImageBitmap = true;")), 
        !1 === createImageBitmapSupport.premultiplyHonored && (workerCode = workerCode.replace("var premultiplyAlphaHonored = true;", "var premultiplyAlphaHonored = false;")), 
        workerCode = workerCode.replace('"use strict";', ""), new Blob([ workerCode ], {
            type: "application/javascript"
        });
    }
    spawnWorker() {
        if (null === this.workerBlob || this.workers.length >= this.maxWorkers) return;
        const index = this.workers.length, urlFactory = self.URL ? URL : webkitURL, blobURL = urlFactory.createObjectURL(this.workerBlob), worker = new Worker(blobURL);
        urlFactory.revokeObjectURL(blobURL), worker.onmessage = event => this.handleMessage(event, index), 
        worker.onerror = event => this.handleWorkerError(event, index), worker.onmessageerror = event => this.handleWorkerError(event, index), 
        this.workers.push(worker), this.workerLoad.push(0), this.workers.length >= this.maxWorkers && (this.workerBlob = null);
    }
    getNextWorkerIndex() {
        if (0 === this.workers.length) return -1;
        let minLoad = 1 / 0, workerIndex = 0;
        for (let i = 0; i < this.workers.length; i++) {
            const load = this.workerLoad[i] || 0;
            if (0 === load) return i;
            load < minLoad && (minLoad = load, workerIndex = i);
        }
        return workerIndex;
    }
    getImage(src, premultiplyAlpha, sx, sy, sw, sh) {
        return new Promise((resolve, reject) => {
            try {
                let nextWorkerIndex = this.getNextWorkerIndex();
                if (-1 === nextWorkerIndex && (this.spawnWorkers(), nextWorkerIndex = this.getNextWorkerIndex()), 
                -1 === nextWorkerIndex) return void reject(new Error("No image workers available"));
                const id = this.nextId++;
                this.messageManager[id] = [ resolve, reject ];
                const worker = this.workers[nextWorkerIndex];
                this.workerLoad[nextWorkerIndex]++, worker.postMessage({
                    id: id,
                    src: src,
                    premultiplyAlpha: premultiplyAlpha,
                    sx: sx,
                    sy: sy,
                    sw: sw,
                    sh: sh
                });
            } catch (error) {
                reject(error);
            }
        });
    }
}, ColorTexture = class extends Texture {
    constructor(txManager, props) {
        super(txManager), this.type = TextureType.color, this.props = void 0, this.props = props;
    }
    get color() {
        return this.props.color;
    }
    set color(color) {
        this.props.color = color;
    }
    async getTextureSource() {
        const pixelData = new Uint8Array(4);
        return 4294967295 === this.color ? (pixelData[0] = 255, pixelData[1] = 255, pixelData[2] = 255, 
        pixelData[3] = 255) : (pixelData[0] = this.color >> 16 & 255, pixelData[1] = this.color >> 8 & 255, 
        pixelData[2] = 255 & this.color, pixelData[3] = this.color >>> 24 & 255), this.setState("fetched", {
            w: 1,
            h: 1
        }), {
            data: pixelData,
            premultiplyAlpha: !0
        };
    }
    static makeCacheKey(props) {
        return `ColorTexture,${props.color || 4294967295}`;
    }
    static resolveDefaults(props) {
        return {
            color: props.color || 4294967295
        };
    }
};

function isCompressedTextureContainer(src) {
    return /\.(ktx|pvr)$/.test(src);
}

ColorTexture.z$__type__Props = void 0;

var PVR_TO_GL_INTERNAL_FORMAT = {
    0: 35841,
    1: 35843,
    2: 35840,
    3: 35842,
    6: 36196,
    7: 33776,
    8: 33778,
    9: 33778,
    10: 33779,
    11: 33779
}, ASTC_TO_GL_INTERNAL_FORMAT = {
    "4x4": 37808,
    "5x5": 37809,
    "6x6": 37810,
    "8x8": 37811,
    "10x10": 37812,
    "12x12": 37813
}, KTX_IDENTIFIER = [ 171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10 ];

function readUint24(view, offset) {
    return view.getUint8(offset) + (view.getUint8(offset + 1) << 8) + (view.getUint8(offset + 2) << 16);
}

var loadASTC = async function(view) {
    const blockX = view.getUint8(4), blockY = view.getUint8(5), sizeX = readUint24(view, 7), sizeY = readUint24(view, 10);
    if (0 === sizeX || 0 === sizeY) throw new Error(`Invalid ASTC texture dimensions: ${sizeX}x${sizeY}`);
    const expected = Math.ceil(sizeX / blockX) * Math.ceil(sizeY / blockY) * 16, dataSize = view.byteLength - 16;
    if (expected !== dataSize) throw new Error(`Invalid ASTC texture data size: expected ${expected}, got ${dataSize}`);
    const internalFormat = ASTC_TO_GL_INTERNAL_FORMAT[`${blockX}x${blockY}`];
    if (void 0 === internalFormat) throw new Error(`Unsupported ASTC block size: ${blockX}x${blockY}`);
    const buffer = view.buffer, mipmaps = [];
    return mipmaps.push(buffer.slice(16)), {
        data: {
            blockInfo: blockInfoMap[internalFormat],
            glInternalFormat: internalFormat,
            mipmaps: mipmaps,
            w: sizeX,
            h: sizeY,
            type: "astc"
        },
        premultiplyAlpha: !1
    };
}, EXT_ASTC = [ "WEBGL_compressed_texture_astc" ], EXT_S3TC = [ "WEBGL_compressed_texture_s3tc" ], EXT_ETC1 = [ "WEBGL_compressed_texture_etc1" ], EXT_ETC = [ "WEBGL_compressed_texture_etc" ], EXT_PVRTC = [ "WEBGL_compressed_texture_pvrtc", "WEBKIT_WEBGL_compressed_texture_pvrtc" ], EXT_NONE = [], ensureCompressedFormatEnabled = (glw, glInternalFormat) => {
    const names = (glInternalFormat => glInternalFormat >= 37808 && glInternalFormat <= 37845 ? EXT_ASTC : glInternalFormat >= 33776 && glInternalFormat <= 33779 ? EXT_S3TC : 36196 === glInternalFormat ? EXT_ETC1 : glInternalFormat >= 37492 && glInternalFormat <= 37497 ? EXT_ETC : glInternalFormat >= 35840 && glInternalFormat <= 35843 ? EXT_PVRTC : EXT_NONE)(glInternalFormat), len = names.length;
    if (0 !== len) {
        for (let i = 0; i < len; i++) if (null !== glw.getExtension(names[i])) return;
        throw new Error(`Compressed texture format 0x${glInternalFormat.toString(16)} is not supported by this device (requires ${names.join(" or ")})`);
    }
}, loadKTX = async function(view) {
    const endianness = view.getUint32(12, !0), littleEndian = 67305985 === endianness;
    if (!1 === littleEndian && 16909060 !== endianness) throw new Error("Invalid KTX endianness value");
    const glType = view.getUint32(16, littleEndian), glFormat = view.getUint32(24, littleEndian);
    if (0 !== glType || 0 !== glFormat) throw new Error(`KTX texture is not compressed (glType: ${glType}, glFormat: ${glFormat})`);
    const glInternalFormat = view.getUint32(28, littleEndian);
    if (void 0 === blockInfoMap[glInternalFormat]) throw new Error(`Unsupported KTX compressed texture format: 0x${glInternalFormat.toString(16)}`);
    const width = view.getUint32(36, littleEndian), height = view.getUint32(40, littleEndian);
    if (0 === width || 0 === height) throw new Error(`Invalid KTX texture dimensions: ${width}x${height}`);
    const mipmapLevels = view.getUint32(56, littleEndian);
    if (0 === mipmapLevels) throw new Error("KTX texture has no mipmap levels");
    const bytesOfKeyValueData = view.getUint32(60, littleEndian), mipmaps = [], buffer = view.buffer;
    let offset = 64 + bytesOfKeyValueData;
    if (offset > view.byteLength) throw new Error("Invalid KTX file: key/value data exceeds file size");
    for (let i = 0; i < mipmapLevels; i++) {
        const imageSize = view.getUint32(offset, littleEndian);
        offset += 4;
        const end = offset + imageSize;
        mipmaps.push(buffer.slice(offset, end)), offset = end, offset % 4 != 0 && (offset += 4 - offset % 4);
    }
    return {
        data: {
            blockInfo: blockInfoMap[glInternalFormat],
            glInternalFormat: glInternalFormat,
            mipmaps: mipmaps,
            w: width,
            h: height,
            type: "ktx"
        },
        premultiplyAlpha: !1
    };
};

function pvrtcMipSize(width, height, bpp) {
    return Math.max(width, 2 === bpp ? 16 : 8) * Math.max(height, 8) * bpp / 8;
}

var loadPVR = async function(view) {
    const pixelFormatLow = view.getUint32(8, !0), internalFormat = PVR_TO_GL_INTERNAL_FORMAT[pixelFormatLow];
    if (void 0 === internalFormat) throw new Error(`Unsupported PVR pixel format: 0x${pixelFormatLow.toString(16)}`);
    const height = view.getInt32(24, !0), width = view.getInt32(28, !0);
    if (0 === width || 0 === height) throw new Error(`Invalid PVR texture dimensions: ${width}x${height}`);
    const mipmapLevels = view.getInt32(44, !0), metadataSize = view.getUint32(48, !0), buffer = view.buffer;
    let offset = 52 + metadataSize;
    if (offset > buffer.byteLength) throw new Error("Invalid PVR file: metadata exceeds file size");
    const mipmaps = [], block = blockInfoMap[internalFormat];
    for (let i = 0; i < mipmapLevels; i++) {
        const declaredSize = view.getUint32(offset, !0), max = buffer.byteLength - (offset + 4);
        if (declaredSize > 0 && declaredSize <= max) {
            offset += 4;
            const start = offset, end = offset + declaredSize;
            mipmaps.push(buffer.slice(start, end)), offset = end, offset = offset + 3 & -4;
            continue;
        }
        if (0 === pixelFormatLow || 1 === pixelFormatLow || 2 === pixelFormatLow || 3 === pixelFormatLow) {
            const computed = pvrtcMipSize(width >> i, height >> i, 0 === pixelFormatLow || 1 === pixelFormatLow ? 2 : 4);
            mipmaps.push(buffer.slice(offset, offset + computed)), offset += computed, offset = offset + 3 & -4;
            continue;
        }
        if (void 0 !== block) {
            const computed = Math.ceil((width >> i) / block.width) * Math.ceil((height >> i) / block.height) * block.bytes;
            mipmaps.push(buffer.slice(offset, offset + computed)), offset += computed, offset = offset + 3 & -4;
        }
    }
    return {
        data: {
            blockInfo: blockInfoMap[internalFormat],
            glInternalFormat: internalFormat,
            mipmaps: mipmaps,
            w: width,
            h: height,
            type: "pvr"
        },
        premultiplyAlpha: !1
    };
}, BLOCK_4x4x8 = {
    width: 4,
    height: 4,
    bytes: 8
}, BLOCK_4x4x16 = {
    width: 4,
    height: 4,
    bytes: 16
}, BLOCK_5x5x16 = {
    width: 5,
    height: 5,
    bytes: 16
}, BLOCK_6x6x16 = {
    width: 6,
    height: 6,
    bytes: 16
}, BLOCK_8x4x8 = {
    width: 8,
    height: 4,
    bytes: 8
}, BLOCK_8x8x16 = {
    width: 8,
    height: 8,
    bytes: 16
}, BLOCK_10x10x16 = {
    width: 10,
    height: 10,
    bytes: 16
}, BLOCK_12x12x16 = {
    width: 12,
    height: 12,
    bytes: 16
}, blockInfoMap = {
    33776: BLOCK_4x4x8,
    33777: BLOCK_4x4x8,
    33778: BLOCK_4x4x16,
    33779: BLOCK_4x4x16,
    36196: BLOCK_4x4x8,
    37492: BLOCK_4x4x8,
    37493: BLOCK_4x4x8,
    37496: BLOCK_4x4x16,
    37497: BLOCK_4x4x16,
    35840: BLOCK_4x4x8,
    35842: BLOCK_4x4x8,
    35841: BLOCK_8x4x8,
    35843: BLOCK_8x4x8,
    37808: BLOCK_4x4x16,
    37840: BLOCK_4x4x16,
    37809: BLOCK_5x5x16,
    37841: BLOCK_5x5x16,
    37810: BLOCK_6x6x16,
    37842: BLOCK_6x6x16,
    37811: BLOCK_8x8x16,
    37843: BLOCK_8x8x16,
    37812: BLOCK_10x10x16,
    37844: BLOCK_10x10x16,
    37813: BLOCK_12x12x16,
    37845: BLOCK_12x12x16
}, uploadCompressedTexture = {
    ktx: function(glw, texture, data) {
        const {glInternalFormat: glInternalFormat, mipmaps: mipmaps, w: width, h: height, blockInfo: blockInfo} = data;
        if (ensureCompressedFormatEnabled(glw, glInternalFormat), void 0 === mipmaps) return;
        glw.bindTexture(texture);
        const blockWidth = blockInfo.width, blockHeight = blockInfo.height;
        let w = width, h = height;
        for (let i = 0; i < mipmaps.length; i++) {
            let view = new Uint8Array(mipmaps[i]);
            const uploadW = Math.ceil(w / blockWidth) * blockWidth, uploadH = Math.ceil(h / blockHeight) * blockHeight, expectedBytes = Math.ceil(w / blockWidth) * Math.ceil(h / blockHeight) * blockInfo.bytes;
            if (view.byteLength < expectedBytes) {
                const padded = new Uint8Array(expectedBytes);
                padded.set(view), view = padded;
            }
            glw.compressedTexImage2D(i, glInternalFormat, uploadW, uploadH, 0, view), w = Math.max(1, w >> 1), 
            h = Math.max(1, h >> 1);
        }
        glw.texParameteri(glw.TEXTURE_WRAP_S, glw.CLAMP_TO_EDGE), glw.texParameteri(glw.TEXTURE_WRAP_T, glw.CLAMP_TO_EDGE), 
        glw.texParameteri(glw.TEXTURE_MAG_FILTER, glw.LINEAR), glw.texParameteri(glw.TEXTURE_MIN_FILTER, mipmaps.length > 1 ? glw.LINEAR_MIPMAP_LINEAR : glw.LINEAR);
    },
    pvr: function(glw, texture, data) {
        const {glInternalFormat: glInternalFormat, mipmaps: mipmaps, w: width, h: height} = data;
        if (ensureCompressedFormatEnabled(glw, glInternalFormat), void 0 === mipmaps) return;
        glw.bindTexture(texture);
        let w = width, h = height;
        for (let i = 0; i < mipmaps.length; i++) glw.compressedTexImage2D(i, glInternalFormat, w, h, 0, new Uint8Array(mipmaps[i])), 
        w = Math.max(1, w >> 1), h = Math.max(1, h >> 1);
        glw.texParameteri(glw.TEXTURE_WRAP_S, glw.CLAMP_TO_EDGE), glw.texParameteri(glw.TEXTURE_WRAP_T, glw.CLAMP_TO_EDGE), 
        glw.texParameteri(glw.TEXTURE_MAG_FILTER, glw.LINEAR), glw.texParameteri(glw.TEXTURE_MIN_FILTER, mipmaps.length > 1 ? glw.LINEAR_MIPMAP_LINEAR : glw.LINEAR);
    },
    astc: function(glw, texture, data) {
        const {glInternalFormat: glInternalFormat, mipmaps: mipmaps, w: w, h: h} = data;
        if (ensureCompressedFormatEnabled(glw, glInternalFormat), glw.bindTexture(texture), 
        void 0 === mipmaps) return;
        const view = new Uint8Array(mipmaps[0]);
        glw.compressedTexImage2D(0, glInternalFormat, w, h, 0, view), glw.texParameteri(glw.TEXTURE_WRAP_S, glw.CLAMP_TO_EDGE), 
        glw.texParameteri(glw.TEXTURE_WRAP_T, glw.CLAMP_TO_EDGE), glw.texParameteri(glw.TEXTURE_MAG_FILTER, glw.LINEAR), 
        glw.texParameteri(glw.TEXTURE_MIN_FILTER, glw.LINEAR);
    }
};

var ImageTexture = class extends Texture {
    constructor(txManager, props) {
        super(txManager), this.platform = void 0, this.props = void 0, this.type = TextureType.image, 
        this.platform = txManager.platform, this.props = props, this.maxRetryCount = props.maxRetryCount;
    }
    hasAlphaChannel(mimeType) {
        return -1 !== mimeType.indexOf("image/png");
    }
    async loadImageFallback(src, hasAlpha) {
        const img = new Image;
        return "string" == typeof src && !1 === isBase64Image(src) && (img.crossOrigin = "anonymous"), 
        new Promise((resolve, reject) => {
            let objectUrl = null;
            const cleanup = () => {
                null !== objectUrl && (URL.revokeObjectURL(objectUrl), objectUrl = null);
            };
            img.onload = () => {
                cleanup(), resolve({
                    data: img,
                    premultiplyAlpha: hasAlpha
                });
            }, img.onerror = err => {
                cleanup();
                const errorMessage = err instanceof Error ? err.message : err instanceof Event ? `Image loading failed for ${img.src}` : "Unknown image loading error";
                reject(new Error(`Image loading failed: ${errorMessage}`));
            }, src instanceof Blob ? (objectUrl = URL.createObjectURL(src), img.src = objectUrl) : img.src = src;
        });
    }
    async createImageBitmap(blob, premultiplyAlpha, sx, sy, sw, sh) {
        const hasAlphaChannel = null != premultiplyAlpha ? premultiplyAlpha : blob.type.includes("image/png"), imageBitmapSupported = this.txManager.imageBitmapSupported, useGlPremultiply = !0 === hasAlphaChannel && !1 === imageBitmapSupported.premultiplyHonored, bitmapMode = !0 === hasAlphaChannel && !1 === useGlPremultiply ? "premultiply" : "none";
        return !0 === imageBitmapSupported.full && null !== sw && null !== sh ? {
            data: await this.platform.createImageBitmap(blob, sx || 0, sy || 0, sw, sh, {
                premultiplyAlpha: bitmapMode,
                colorSpaceConversion: "none",
                imageOrientation: "none"
            }),
            premultiplyAlpha: useGlPremultiply
        } : !1 === imageBitmapSupported.options && !1 === imageBitmapSupported.full ? {
            data: await this.platform.createImageBitmap(blob),
            premultiplyAlpha: !1
        } : {
            data: await this.platform.createImageBitmap(blob, {
                premultiplyAlpha: bitmapMode,
                colorSpaceConversion: "none",
                imageOrientation: "none"
            }),
            premultiplyAlpha: useGlPremultiply
        };
    }
    async loadImage(src) {
        const {premultiplyAlpha: premultiplyAlpha, sx: sx, sy: sy, sw: sw, sh: sh} = this.props, isBase64 = isBase64Image(src);
        if (!0 === this.txManager.hasCreateImageBitmap) {
            if (!1 === isBase64 && !0 === this.txManager.hasWorker && null !== this.txManager.imageWorkerManager) return this.txManager.imageWorkerManager.getImage(src, premultiplyAlpha, sx, sy, sw, sh);
            const blob = isBase64 ? function(dataURI) {
                var _dataURI$match;
                const type = (null == (_dataURI$match = (dataURI = dataURI.replace(/^data:/, "")).match(/image\/[^;]+/)) ? void 0 : _dataURI$match[0]) || "", base64 = dataURI.replace(/^[^,]+,/, ""), byteCharacters = atob(base64), bytesLength = byteCharacters.length, slicesCount = Math.ceil(bytesLength / 1024), byteArrays = new Array(slicesCount);
                for (let sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
                    const begin = 1024 * sliceIndex, end = Math.min(begin + 1024, bytesLength), bytes = new Array(end - begin);
                    for (let offset = begin, i = 0; offset < end; ++i, ++offset) {
                        var _byteCharacters$offse;
                        bytes[i] = null == (_byteCharacters$offse = byteCharacters[offset]) ? void 0 : _byteCharacters$offse.charCodeAt(0);
                    }
                    byteArrays[sliceIndex] = new Uint8Array(bytes);
                }
                return new Blob(byteArrays, {
                    type: type
                });
            }(src) : await function(url, responseType = "") {
                return new Promise((resolve, reject) => {
                    const xhr = new XMLHttpRequest;
                    xhr.responseType = responseType, xhr.onreadystatechange = function() {
                        xhr.readyState == XMLHttpRequest.DONE && (0 === xhr.status || 200 === xhr.status ? resolve(xhr.response) : reject(xhr.statusText));
                    }, xhr.open("GET", url, !0), xhr.send(null);
                });
            }(src, "blob");
            return this.createImageBitmap(blob, premultiplyAlpha, sx, sy, sw, sh);
        }
        return this.loadImageFallback(src, null == premultiplyAlpha || premultiplyAlpha);
    }
    async getTextureSource() {
        var _this$txManager$rende, _ref, _resp$premultiplyAlph;
        if ("canvas" === (null == (_this$txManager$rende = this.txManager.renderer) ? void 0 : _this$txManager$rende.mode)) {
            const {src: src, type: type} = this.props;
            if ("compressed" === type || "string" == typeof src && !0 === isCompressedTextureContainer(src)) {
                const err = new Error(`ImageTexture: Compressed textures are not supported in Canvas2D render mode (src: ${String(src)})`);
                return this.setState("failed", err), {
                    data: null
                };
            }
        }
        let resp;
        try {
            resp = await this.determineImageTypeAndLoadImage();
        } catch (e) {
            return this.setState("failed", e), {
                data: null
            };
        }
        return null === resp.data ? (this.setState("failed", Error("ImageTexture: No image data")), 
        {
            data: null
        }) : {
            data: resp.data,
            premultiplyAlpha: null === (_ref = null !== (_resp$premultiplyAlph = resp.premultiplyAlpha) && void 0 !== _resp$premultiplyAlph ? _resp$premultiplyAlph : this.props.premultiplyAlpha) || void 0 === _ref || _ref
        };
    }
    determineImageTypeAndLoadImage() {
        const {src: src, premultiplyAlpha: premultiplyAlpha, type: type} = this.props;
        if (null === src) return {
            data: null
        };
        if ("string" != typeof src) {
            if (src instanceof Blob) {
                if (!0 === this.txManager.hasCreateImageBitmap) {
                    const {sx: sx, sy: sy, sw: sw, sh: sh} = this.props;
                    return this.createImageBitmap(src, premultiplyAlpha, sx, sy, sw, sh);
                }
                return this.loadImageFallback(src, null == premultiplyAlpha || premultiplyAlpha);
            }
            return src instanceof ImageData ? {
                data: src,
                premultiplyAlpha: premultiplyAlpha
            } : {
                data: src(),
                premultiplyAlpha: premultiplyAlpha
            };
        }
        const absoluteSrc = function(url) {
            if ("file:" === self.location.protocol && !PROTOCOL_REGEX.test(url)) {
                const path = self.location.pathname.split("/");
                path.pop();
                const basePath = path.join("/"), baseUrl = self.location.protocol + "//" + basePath;
                return "." === url.charAt(0) && (url = url.slice(1)), "/" === url.charAt(0) && (url = url.slice(1)), 
                baseUrl + "/" + url;
            }
            return new URL(url, self.location.href).href;
        }(src);
        return "regular" === type ? this.loadImage(absoluteSrc) : "svg" === type || !0 === /\.(svg)(\?.*)?$/.test(src) ? (async (url, width, height, sx, sy, sw, sh, pixelRatio) => {
            const img = new Image;
            !1 === isBase64Image(url) && (img.crossOrigin = "anonymous"), await new Promise((resolve, reject) => {
                img.onload = () => resolve(), img.onerror = err => {
                    reject(err instanceof Error ? err : new Error(`SVG loading failed: ${url}`));
                }, img.src = url;
            });
            const targetW = width || sw || img.naturalWidth || img.width, targetH = height || sh || img.naturalHeight || img.height, ratio = pixelRatio > 1 ? pixelRatio : 1, physW = Math.max(1, Math.ceil(targetW * ratio)), physH = Math.max(1, Math.ceil(targetH * ratio)), canvas = document.createElement("canvas");
            canvas.width = physW, canvas.height = physH;
            const ctx = canvas.getContext("2d");
            if (null !== sw && null !== sh ? ctx.drawImage(img, null != sx ? sx : 0, null != sy ? sy : 0, sw, sh, 0, 0, physW, physH) : ctx.drawImage(img, 0, 0, physW, physH), 
            "function" == typeof createImageBitmap) try {
                return {
                    data: await createImageBitmap(canvas),
                    premultiplyAlpha: !1
                };
            } catch (_unused) {}
            return {
                data: ctx.getImageData(0, 0, physW, physH),
                premultiplyAlpha: !0
            };
        })(absoluteSrc, this.props.w, this.props.h, this.props.sx, this.props.sy, this.props.sw, this.props.sh, this.txManager.pixelRatio) : "compressed" === type || !0 === isCompressedTextureContainer(src) ? (async url => {
            try {
                const arrayBuffer = await new Promise((resolve, reject) => {
                    const xhr = new XMLHttpRequest;
                    xhr.open("GET", url, !0), xhr.responseType = "arraybuffer", xhr.onload = () => {
                        xhr.status >= 200 && xhr.status < 300 || 0 === xhr.status ? resolve(xhr.response) : reject(new Error(`Failed to fetch compressed texture: ${xhr.status} ${xhr.statusText}`));
                    }, xhr.onerror = () => {
                        reject(new Error("Network error occurred while trying to fetch the compressed texture."));
                    }, xhr.send(null);
                });
                if (arrayBuffer.byteLength < 16) throw new Error(`File too small to be a valid compressed texture (${arrayBuffer.byteLength} bytes). Expected at least 16 bytes for header inspection.`);
                const view = new DataView(arrayBuffer), magic = view.getUint32(0, !0);
                if (55727696 === magic) return loadPVR(view);
                if (1554098963 === magic) return loadASTC(view);
                let isKTX = !0;
                for (let i = 0; i < KTX_IDENTIFIER.length; i++) if (view.getUint8(i) !== KTX_IDENTIFIER[i]) {
                    isKTX = !1;
                    break;
                }
                if (!0 === isKTX) return loadKTX(view);
                throw new Error("Unrecognized compressed texture format");
            } catch (error) {
                throw new Error(`Failed to load compressed texture from ${url}: ${error}`);
            }
        })(absoluteSrc) : this.loadImage(absoluteSrc);
    }
    static makeCacheKey(props) {
        var _props$premultiplyAlp, _props$maxRetryCount;
        const key = props.key || props.src;
        if ("string" != typeof key) return !1;
        let cacheKey = `ImageTexture,${key},${null === (_props$premultiplyAlp = props.premultiplyAlpha) || void 0 === _props$premultiplyAlp || _props$premultiplyAlp},${null !== (_props$maxRetryCount = props.maxRetryCount) && void 0 !== _props$maxRetryCount ? _props$maxRetryCount : 5}`;
        var _props$sx, _props$sy;
        null != props.sh && null != props.sw && (cacheKey += `,${null !== (_props$sx = props.sx) && void 0 !== _props$sx ? _props$sx : ""},${null !== (_props$sy = props.sy) && void 0 !== _props$sy ? _props$sy : ""},${props.sw || ""},${props.sh || ""}`);
        return cacheKey;
    }
    static resolveDefaults(props) {
        var _props$src, _props$premultiplyAlp2, _props$key, _props$type, _props$w, _props$h, _props$sx2, _props$sy2, _props$sw, _props$sh, _props$maxRetryCount2;
        return {
            src: null !== (_props$src = props.src) && void 0 !== _props$src ? _props$src : "",
            premultiplyAlpha: null === (_props$premultiplyAlp2 = props.premultiplyAlpha) || void 0 === _props$premultiplyAlp2 || _props$premultiplyAlp2,
            key: null !== (_props$key = props.key) && void 0 !== _props$key ? _props$key : null,
            type: null !== (_props$type = props.type) && void 0 !== _props$type ? _props$type : null,
            w: null !== (_props$w = props.w) && void 0 !== _props$w ? _props$w : null,
            h: null !== (_props$h = props.h) && void 0 !== _props$h ? _props$h : null,
            sx: null !== (_props$sx2 = props.sx) && void 0 !== _props$sx2 ? _props$sx2 : null,
            sy: null !== (_props$sy2 = props.sy) && void 0 !== _props$sy2 ? _props$sy2 : null,
            sw: null !== (_props$sw = props.sw) && void 0 !== _props$sw ? _props$sw : null,
            sh: null !== (_props$sh = props.sh) && void 0 !== _props$sh ? _props$sh : null,
            maxRetryCount: null !== (_props$maxRetryCount2 = props.maxRetryCount) && void 0 !== _props$maxRetryCount2 ? _props$maxRetryCount2 : 5
        };
    }
};

ImageTexture.z$__type__Props = void 0;

var NoiseTexture = class NoiseTexture extends Texture {
    constructor(txManager, props) {
        super(txManager), this.props = void 0, this.type = TextureType.noise, this.props = props;
    }
    async getTextureSource() {
        const {w: w, h: h} = this.props, size = w * h * 4, pixelData8 = new Uint8ClampedArray(size);
        for (let i = 0; i < size; i += 4) {
            const v = Math.floor(256 * Math.random());
            pixelData8[i] = v, pixelData8[i + 1] = v, pixelData8[i + 2] = v, pixelData8[i + 3] = 255;
        }
        return {
            data: new ImageData(pixelData8, w, h)
        };
    }
    static makeCacheKey(props) {
        if (void 0 === props.cacheId) return !1;
        const resolvedProps = NoiseTexture.resolveDefaults(props);
        return `NoiseTexture,${resolvedProps.w},${resolvedProps.h},${resolvedProps.cacheId}`;
    }
    static resolveDefaults(props) {
        var _props$w, _props$h, _props$cacheId;
        return {
            w: null !== (_props$w = props.w) && void 0 !== _props$w ? _props$w : 128,
            h: null !== (_props$h = props.h) && void 0 !== _props$h ? _props$h : 128,
            cacheId: null !== (_props$cacheId = props.cacheId) && void 0 !== _props$cacheId ? _props$cacheId : 0
        };
    }
};

NoiseTexture.z$__type__Props = void 0;

var subTextureId = 0, SubTexture = class extends Texture {
    constructor(txManager, props) {
        super(txManager), this.props = void 0, this.parentTexture = void 0, this.type = TextureType.subTexture, 
        this.subtextureId = "subtexture-" + subTextureId++, this.onParentTxLoaded = () => {
            this.setState("loaded", {
                w: this.props.w,
                h: this.props.h
            });
        }, this.onParentTxFailed = (target, error) => {
            this.retryCount = this.parentTexture.retryCount - 1, this.setState("failed", error);
        }, this.onParentTxLoading = () => {
            this.setState("loading");
        }, this.onParentTxFreed = () => {
            this.setState("freed");
        }, this.props = props, this.props.texture, this.props.texture, this.parentTexture = txManager.resolveParentTexture(this.props.texture), 
        this.renderableOwners.size > 0 && this.parentTexture.setRenderableOwner(this.subtextureId, !0), 
        queueMicrotask(() => {
            const parentTx = this.parentTexture;
            "loaded" === parentTx.state && null !== parentTx.dimensions ? this.onParentTxLoaded(parentTx, parentTx.dimensions) : "loading" === parentTx.state ? this.onParentTxLoading() : "failed" === parentTx.state && null !== parentTx.error ? this.onParentTxFailed(parentTx, parentTx.error) : "freed" === parentTx.state && this.onParentTxFreed(), 
            parentTx.on("loading", this.onParentTxLoading), parentTx.on("loaded", this.onParentTxLoaded), 
            parentTx.on("failed", this.onParentTxFailed), parentTx.on("freed", this.onParentTxFreed);
        });
    }
    onChangeIsRenderable(isRenderable) {
        this.parentTexture.setRenderableOwner(this.subtextureId, isRenderable);
    }
    destroy() {
        const parentTx = this.parentTexture;
        parentTx.off("loading", this.onParentTxLoading), parentTx.off("loaded", this.onParentTxLoaded), 
        parentTx.off("failed", this.onParentTxFailed), parentTx.off("freed", this.onParentTxFreed), 
        super.destroy();
    }
    async getTextureSource() {
        return new Promise((resolve, reject) => {
            resolve({
                data: this.props
            });
        });
    }
    static makeCacheKey(props) {
        return !1;
    }
    static resolveDefaults(props) {
        return {
            texture: props.texture,
            x: props.x || 0,
            y: props.y || 0,
            w: props.w || 0,
            h: props.h || 0
        };
    }
};

SubTexture.z$__type__Props = void 0;

var TextureErrorCode, RenderTexture = class extends Texture {
    constructor(txManager, props) {
        super(txManager), this.props = void 0, this.type = TextureType.renderToTexture, 
        this.props = props;
    }
    get w() {
        return this.props.w;
    }
    set w(value) {
        this.props.w = value;
    }
    get h() {
        return this.props.h;
    }
    set h(value) {
        this.props.h = value;
    }
    async getTextureSource() {
        return {
            data: null,
            premultiplyAlpha: null
        };
    }
    static resolveDefaults(props) {
        return {
            w: props.w || 256,
            h: props.h || 256
        };
    }
};

RenderTexture.z$__type__Props = void 0, function(TextureErrorCode) {
    TextureErrorCode.MEMORY_THRESHOLD_EXCEEDED = "MEMORY_THRESHOLD_EXCEEDED", TextureErrorCode.TEXTURE_DATA_NULL = "TEXTURE_DATA_NULL", 
    TextureErrorCode.TEXTURE_TYPE_NOT_REGISTERED = "TEXTURE_TYPE_NOT_REGISTERED", TextureErrorCode.TEXTURE_UPLOAD_FAILED = "TEXTURE_UPLOAD_FAILED";
}(TextureErrorCode || (TextureErrorCode = {}));

var defaultMessages = {
    [TextureErrorCode.MEMORY_THRESHOLD_EXCEEDED]: "Memory threshold exceeded",
    [TextureErrorCode.TEXTURE_DATA_NULL]: "Texture data is null",
    [TextureErrorCode.TEXTURE_TYPE_NOT_REGISTERED]: "Texture type is not registered",
    [TextureErrorCode.TEXTURE_UPLOAD_FAILED]: "Texture upload failed"
}, TextureError = class extends Error {
    constructor(codeOrMessage, maybeMessage) {
        const isCode = Object.values(TextureErrorCode).includes(codeOrMessage), code = isCode ? codeOrMessage : void 0;
        let message;
        message = isCode && code ? null != maybeMessage ? maybeMessage : defaultMessages[code] : String(codeOrMessage), 
        super(message), this.code = void 0, this.name = new.target.name, code && (this.code = code);
    }
};

function isTextureError(err) {
    return err instanceof TextureError || "object" == typeof err && null !== err && "TextureError" === err.name && "string" == typeof err.code;
}

var TextureUploadQueue = class {
    constructor() {
        this.list = [], this.membership = new Set, this.head = 0;
    }
    get size() {
        return this.membership.size;
    }
    has(texture) {
        return this.membership.has(texture);
    }
    add(texture) {
        this.membership.has(texture) || (this.membership.add(texture), this.list.push(texture));
    }
    delete(texture) {
        return this.membership.delete(texture);
    }
    shift() {
        const list = this.list, membership = this.membership;
        for (;this.head < list.length; ) {
            const texture = list[this.head++];
            if (membership.has(texture)) return membership.delete(texture), this.compactIfNeeded(), 
            texture;
        }
        this.head = 0, list.length = 0;
    }
    compactIfNeeded() {
        this.head >= 64 && this.head >= this.list.length >> 1 && (this.list = this.list.slice(this.head), 
        this.head = 0);
    }
}, CoreTextureManager = class extends EventEmitter {
    get pixelRatio() {
        return this.stage.pixelRatio;
    }
    constructor(stage, settings) {
        super(), this.keyCache = new Map, this.txConstructors = {}, this.maxRetryCount = void 0, 
        this.uploadTextureQueue = new TextureUploadQueue, this.initialized = !1, this.stage = void 0, 
        this.numImageWorkers = void 0, this.platform = void 0, this.imageWorkerManager = null, 
        this.hasCreateImageBitmap = !1, this.imageBitmapSupported = {
            basic: !1,
            options: !1,
            full: !1,
            premultiplyHonored: null
        }, this.hasWorker = !!self.Worker, this.renderer = void 0, this.frameTime = 0;
        const {numImageWorkers: numImageWorkers, createImageBitmapSupport: createImageBitmapSupport, premultiplyAlphaHonored: premultiplyAlphaHonored, maxRetryCount: maxRetryCount} = settings;
        this.stage = stage, this.platform = stage.platform, this.numImageWorkers = numImageWorkers, 
        this.maxRetryCount = maxRetryCount, "auto" === createImageBitmapSupport ? async function(platform) {
            var _bitmap$close;
            const pngBinaryData = new Uint8Array([ 137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, 0, 1, 0, 0, 0, 1, 1, 3, 0, 0, 0, 37, 219, 86, 202, 0, 0, 0, 3, 80, 76, 84, 69, 0, 0, 0, 167, 122, 61, 218, 0, 0, 0, 1, 116, 82, 78, 83, 0, 64, 230, 216, 102, 0, 0, 0, 10, 73, 68, 65, 84, 8, 215, 99, 96, 0, 0, 0, 2, 0, 1, 226, 33, 188, 51, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130 ]), support = {
                basic: !1,
                options: !1,
                full: !1,
                premultiplyHonored: null
            }, blob = new Blob([ pngBinaryData ], {
                type: "image/png"
            }), bitmap = await platform.createImageBitmap(blob);
            null == (_bitmap$close = bitmap.close) || _bitmap$close.call(bitmap), support.basic = !0;
            try {
                var _bitmapWithOptions$cl;
                const bitmapWithOptions = await platform.createImageBitmap(blob, {
                    premultiplyAlpha: "none"
                });
                null == (_bitmapWithOptions$cl = bitmapWithOptions.close) || _bitmapWithOptions$cl.call(bitmapWithOptions), 
                support.options = !0;
            } catch (e) {}
            try {
                var _bitmapWithFullOption;
                const bitmapWithFullOptions = await platform.createImageBitmap(blob, 0, 0, 1, 1, {
                    premultiplyAlpha: "none"
                });
                null == (_bitmapWithFullOption = bitmapWithFullOptions.close) || _bitmapWithFullOption.call(bitmapWithFullOptions), 
                support.full = !0;
            } catch (e) {}
            return support;
        }(this.platform).then(result => {
            this.resolvePremultiplyAndInit(result, premultiplyAlphaHonored);
        }).catch(() => {
            console.warn("[Lightning] createImageBitmap is not supported on this browser. ImageTexture will be slower."), 
            this.initialized = !0, this.emit("initialized");
        }) : this.resolvePremultiplyAndInit({
            basic: "basic" === createImageBitmapSupport,
            options: "options" === createImageBitmapSupport,
            full: "full" === createImageBitmapSupport,
            premultiplyHonored: null
        }, premultiplyAlphaHonored), this.registerTextureType("ImageTexture", ImageTexture), 
        this.registerTextureType("ColorTexture", ColorTexture), this.registerTextureType("NoiseTexture", NoiseTexture), 
        this.registerTextureType("SubTexture", SubTexture), this.registerTextureType("RenderTexture", RenderTexture);
    }
    registerTextureType(textureType, textureClass) {
        this.txConstructors[textureType] = textureClass;
    }
    resolvePremultiplyAndInit(support, premultiplyAlphaHonored) {
        return "auto" !== premultiplyAlphaHonored ? (support.premultiplyHonored = premultiplyAlphaHonored, 
        void this.initialize(support)) : !1 === support.options && !1 === support.full ? (support.premultiplyHonored = null, 
        void this.initialize(support)) : void async function(platform) {
            var _bitmap$close3, _gl$getExtension;
            let bitmap;
            try {
                const imageData = new ImageData(new Uint8ClampedArray([ 255, 0, 0, 128 ]), 1, 1);
                bitmap = await platform.createImageBitmap(imageData, {
                    premultiplyAlpha: "premultiply",
                    colorSpaceConversion: "none",
                    imageOrientation: "none"
                });
            } catch (e) {
                return null;
            }
            const canvas = platform.createCanvas();
            canvas.width = 1, canvas.height = 1;
            const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
            var _bitmap$close2;
            if (null === gl) return null == (_bitmap$close2 = bitmap.close) || _bitmap$close2.call(bitmap), 
            null;
            const tex = gl.createTexture();
            gl.bindTexture(gl.TEXTURE_2D, tex), gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), 
            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, !1), gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, bitmap);
            const fb = gl.createFramebuffer();
            gl.bindFramebuffer(gl.FRAMEBUFFER, fb), gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
            let result = null;
            if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) === gl.FRAMEBUFFER_COMPLETE) {
                const px = new Uint8Array(4);
                gl.readPixels(0, 0, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, px), result = px[0] < 192;
            }
            return gl.deleteFramebuffer(fb), gl.deleteTexture(tex), null == (_bitmap$close3 = bitmap.close) || _bitmap$close3.call(bitmap), 
            null == (_gl$getExtension = gl.getExtension("WEBGL_lose_context")) || _gl$getExtension.loseContext(), 
            result;
        }(this.platform).then(honored => {
            support.premultiplyHonored = honored, this.initialize(support);
        }).catch(() => {
            support.premultiplyHonored = null, this.initialize(support);
        });
    }
    initialize(support) {
        this.hasCreateImageBitmap = support.basic || support.options || support.full, this.imageBitmapSupported = support, 
        !1 === support.premultiplyHonored && console.warn('[Lightning] createImageBitmap premultiplyAlpha:"premultiply" is not honored on this device — images may show alpha ghosting. GL-side premultiply fallback recommended.'), 
        !1 === this.hasCreateImageBitmap && console.warn("[Lightning] createImageBitmap is not supported on this browser. ImageTexture will be slower."), 
        !0 === this.hasCreateImageBitmap && !0 === this.hasWorker && this.numImageWorkers > 0 ? this.imageWorkerManager = new ImageWorkerManager(this.numImageWorkers, support) : console.warn("[Lightning] Image worker count is 0 or workers are not supported on this browser. Image loading will be slower."), 
        this.initialized = !0, this.emit("initialized"), this.uploadTextureQueue.size > 0 && this.processUntil(1 / 0).catch(err => {
            console.error("Failed to drain pre-init texture queue:", err);
        });
    }
    enqueueUploadTexture(texture) {
        "failed" !== texture.state && "freed" !== texture.state && this.uploadTextureQueue.add(texture);
    }
    createTexture(textureType, props) {
        const TextureClass = this.txConstructors[textureType];
        if (!TextureClass) throw new TextureError(TextureErrorCode.TEXTURE_TYPE_NOT_REGISTERED, `Texture type "${textureType}" is not registered`);
        const cacheKey = TextureClass.makeCacheKey(props);
        if (cacheKey) {
            const cached = this.keyCache.get(cacheKey);
            if (cached) return cached;
        }
        const resolvedProps = TextureClass.resolveDefaults(props), texture = new TextureClass(this, resolvedProps);
        return cacheKey && this.initTextureToCache(texture, cacheKey), texture;
    }
    async loadTexture(texture, priority) {
        texture.type !== TextureType.subTexture && "loaded" !== texture.state && (!1 !== this.initialized ? (texture.setState("loading"), 
        null !== await texture.getTextureData().catch(err => (console.error(err), texture.setState("failed", new TextureError(TextureErrorCode.TEXTURE_DATA_NULL)), 
        null)) && "failed" !== texture.state && (!0 != (texture.type !== TextureType.image || !0 === priority) ? this.enqueueUploadTexture(texture) : await this.uploadTexture(texture).catch(err => {
            console.error("Failed to upload texture:", err), texture.setState("failed", new TextureError(TextureErrorCode.TEXTURE_UPLOAD_FAILED, err instanceof Error ? err.message : void 0));
        }))) : this.uploadTextureQueue.add(texture));
    }
    async uploadTexture(texture) {
        if (!0 === this.stage.txMemManager.doNotExceedCriticalThreshold && !0 === this.stage.txMemManager.criticalCleanupRequested) return void texture.setState("failed", new TextureError(TextureErrorCode.MEMORY_THRESHOLD_EXCEEDED));
        if ("failed" === texture.state || "freed" === texture.state) return;
        if ("loaded" === texture.state) return;
        if (null === texture.textureData) return void texture.setState("failed", new TextureError(TextureErrorCode.TEXTURE_DATA_NULL, "Texture data is null, cannot upload texture"));
        const coreContext = texture.loadCtxTexture();
        "loaded" !== coreContext.state ? await coreContext.load() : texture.setState("loaded");
    }
    isProcessingTexture(texture) {
        return this.uploadTextureQueue.has(texture);
    }
    async processOne() {
        if (!1 === this.initialized) return;
        const texture = this.uploadTextureQueue.shift();
        void 0 !== texture && await this.uploadQueued(texture);
    }
    async processUntil(maxProcessingTime) {
        if (!1 === this.initialized) return;
        const platform = this.platform, startTime = platform.getTimeStamp();
        for (;platform.getTimeStamp() - startTime < maxProcessingTime; ) {
            const texture = this.uploadTextureQueue.shift();
            if (void 0 === texture) break;
            await this.uploadQueued(texture);
        }
    }
    async uploadQueued(texture) {
        if (!this.isTextureDead(texture)) try {
            if (null === texture.textureData && await texture.getTextureData(), this.isTextureDead(texture)) return;
            await this.uploadTexture(texture);
        } catch (error) {
            console.error("Failed to upload texture:", error);
        }
    }
    isTextureDead(texture) {
        return "failed" === texture.state || "freed" === texture.state;
    }
    hasUpdates() {
        return this.uploadTextureQueue.size > 0;
    }
    initTextureToCache(texture, cacheKey) {
        this.keyCache.set(cacheKey, texture), texture.cacheKey = cacheKey;
    }
    getTextureFromCache(cacheKey) {
        return this.keyCache.get(cacheKey);
    }
    removeTextureFromCache(texture) {
        const cacheKey = texture.cacheKey;
        null !== cacheKey && (this.keyCache.delete(cacheKey), texture.cacheKey = null);
    }
    removeTextureFromQueue(texture) {
        this.uploadTextureQueue.delete(texture);
    }
    resolveParentTexture(texture) {
        if (!(null == texture ? void 0 : texture.props)) return texture;
        const cacheKey = ImageTexture.makeCacheKey(texture.props), cachedTexture = cacheKey ? this.getTextureFromCache(cacheKey) : void 0;
        return null != cachedTexture ? cachedTexture : texture;
    }
};

function isAdvancedShaderProp(obj) {
    return null !== obj && "object" == typeof obj && void 0 !== obj.default;
}

function resolveShaderProps(props, propsConfig) {
    for (const key in propsConfig) {
        if (!isAdvancedShaderProp(propsConfig[key]) && void 0 === props[key]) {
            props[key] = propsConfig[key];
            continue;
        }
        const pConfig = propsConfig[key], hasValue = void 0 !== props[key];
        void 0 === pConfig.resolve ? hasValue && void 0 !== pConfig.set ? pConfig.set(props[key], props) : hasValue || (void 0 !== props[key] || void 0 !== pConfig.get ? props[key] = pConfig.get(props) : props[key] = deepClone(pConfig.default)) : props[key] = pConfig.resolve(props[key], props);
    }
}

var TextConstraint, CoreShaderNode = class {
    constructor(shaderKey, type, stage, props) {
        this.shaderKey = void 0, this.stage = void 0, this.shaderType = void 0, this.propsConfig = void 0, 
        this.resolvedProps = void 0, this.definedProps = void 0, this.node = null, this.time = void 0, 
        this.update = void 0, this.valueKey = "", this._valueKeyCache = "", this._valueKeyDirty = !0, 
        this._lastW = 0, this._lastH = 0, this.shaderKey = shaderKey, this.stage = stage, 
        this.shaderType = type, this.time = type.time, void 0 !== props && (this.resolvedProps = props, 
        this.defineProps(props));
    }
    defineProps(props) {
        const definedProps = {};
        for (const key in props) {
            const propConfig = this.shaderType.props[key], isAdvancedProp = isAdvancedShaderProp(propConfig);
            Object.defineProperty(definedProps, key, {
                get: () => this.resolvedProps[key],
                set: value => {
                    !0 === isAdvancedProp && void 0 !== propConfig.resolve ? this.resolvedProps[key] = propConfig.resolve(value, this.resolvedProps) : !0 === isAdvancedProp && void 0 !== propConfig.set ? propConfig.set(value, this.resolvedProps) : this.resolvedProps[key] = value, 
                    this._valueKeyDirty = !0, void 0 !== this.update && null !== this.node ? this.node.setUpdateType(UpdateType.RecalcUniforms) : this.stage.requestRender();
                }
            });
        }
        this.definedProps = definedProps;
    }
    attachNode(node) {
        this.node = node;
    }
    detachNode() {
        this.valueKey.length > 0 && (this.stage.shManager.mutateShaderValueUsage(this.valueKey, -1), 
        this.valueKey = ""), this.node = null;
    }
    createValueKey() {
        if (!1 === this._valueKeyDirty && null !== this.node && this.node.w === this._lastW && this.node.h === this._lastH) return this._valueKeyCache;
        let valueKey = "";
        for (const key in this.resolvedProps) valueKey += `${key}:${this.resolvedProps[key]};`;
        return valueKey += `node-width:${this.node.w}`, valueKey += `node-height:${this.node.h}`, 
        this._valueKeyCache = valueKey, this._valueKeyDirty = !1, this._lastW = this.node.w, 
        this._lastH = this.node.h, valueKey;
    }
    get props() {
        return this.definedProps;
    }
    set props(props) {
        if (void 0 !== props) for (const key in props) this.props[key] = props[key];
    }
}, CoreShaderManager = class {
    constructor(stage) {
        this.stage = void 0, this.shTypes = {}, this.shCache = new Map, this.valuesCache = new Map, 
        this.valuesCacheUsage = new Map, this.attachedShader = null, this.stage = stage;
    }
    registerShaderType(name, shType) {
        void 0 === this.shTypes[name] ? !1 !== this.stage.renderer.supportsShaderType(shType) ? this.shTypes[name] = shType : console.warn("The renderer being used does not support this shader type. Breaking off registration.") : console.warn(`ShaderType already exists with the name: ${name}. Breaking off registration.`);
    }
    createShader(name, props) {
        const shType = this.shTypes[name];
        if (void 0 === shType) return console.warn("ShaderType not found falling back on renderer default shader"), 
        this.stage.defShaderNode;
        let shaderKey = name;
        if (void 0 !== shType.props && (resolveShaderProps(props = props || {}, shType.props), 
        void 0 !== shType.getCacheMarkers && (shaderKey += `-${shType.getCacheMarkers(props)}`)), 
        "canvas" === this.stage.renderer.mode) return this.stage.renderer.createShaderNode(shaderKey, shType, props);
        let shProgram = this.shCache.get(shaderKey);
        if (void 0 === shProgram) try {
            shProgram = this.stage.renderer.createShaderProgram(shType, props), this.shCache.set(shaderKey, shProgram);
        } catch (e) {
            if (!0 === this.stage.isContextLost) return this.stage.defShaderNode;
            throw e;
        }
        return this.stage.renderer.createShaderNode(shaderKey, shType, props, shProgram);
    }
    mutateShaderValueUsage(key, mutation) {
        let usage = this.valuesCacheUsage.get(key) || 0;
        this.valuesCacheUsage.set(key, usage + mutation);
    }
    getShaderValues(key) {
        const values = this.valuesCache.get(key);
        if (void 0 !== values) return this.mutateShaderValueUsage(key, 1), values;
    }
    setShaderValues(key, values) {
        this.valuesCache.set(key, values), this.mutateShaderValueUsage(key, 1);
    }
    cleanup() {
        const values = [ ...this.valuesCacheUsage.entries() ].sort((entryA, entryB) => entryA[1] < entryB[1] ? -1 : entryA[1] > entryB[1] ? 1 : 0);
        for (let i = 0; i < values.length && !(values[i][1] > 0); i++) this.valuesCacheUsage.delete(values[i][0]), 
        this.valuesCache.delete(values[i][0]);
    }
    useShader(shader) {
        this.attachedShader !== shader && (this.attachedShader && this.attachedShader.detach && this.attachedShader.detach(), 
        shader.attach && shader.attach(), this.attachedShader = shader);
    }
}, spaceRegex = /[ \u200B]+/g, defaultFontMetrics = {
    ascender: 800,
    descender: -200,
    lineGap: 200,
    unitsPerEm: 1e3
}, normalizeFontMetrics = (metrics, fontSize) => {
    const scale = fontSize / metrics.unitsPerEm, capHeightUnits = void 0 !== metrics.capHeight ? metrics.capHeight : .7 * metrics.ascender, xHeightUnits = void 0 !== metrics.xHeight ? metrics.xHeight : .5 * metrics.ascender;
    return {
        ascender: metrics.ascender * scale,
        descender: metrics.descender * scale,
        lineGap: metrics.lineGap * scale,
        capHeight: capHeightUnits * scale,
        xHeight: xHeightUnits * scale
    };
}, baselineMode = "optical", mapTextLayout = (measureText, metrics, text, textAlign, fontFamily, lineHeight, overflowSuffix, wordBreak, letterSpacing, maxLines, maxWidth, maxHeight) => {
    const bareLineHeight = metrics.ascender - metrics.descender + metrics.lineGap, lineHeightPx = lineHeight <= 3 ? lineHeight * bareLineHeight : lineHeight;
    let effectiveMaxLines = maxLines;
    if (maxHeight > 0) {
        let maxFromHeight = Math.floor(maxHeight / lineHeightPx);
        maxFromHeight < 1 && (maxFromHeight = 1), (0 === effectiveMaxLines || maxFromHeight < effectiveMaxLines) && (effectiveMaxLines = maxFromHeight);
    }
    const [lines, remainingLines, remainingText] = maxWidth > 0 == !0 ? wrapText(measureText, text, fontFamily, maxWidth, letterSpacing, overflowSuffix, wordBreak, effectiveMaxLines) : measureLines(measureText, text.split("\n"), fontFamily, letterSpacing, effectiveMaxLines), effectiveLineAmount = lines.length;
    let effectiveMaxWidth = 0;
    if (0 !== letterSpacing) for (let i = 0; i < effectiveLineAmount; i++) {
        const line = lines[i];
        line[0].length > 0 && (line[1] -= letterSpacing);
    }
    if (effectiveLineAmount > 0 && (effectiveMaxWidth = lines[0][1], effectiveLineAmount > 1)) for (let i = 1; i < effectiveLineAmount; i++) effectiveMaxWidth = Math.max(effectiveMaxWidth, lines[i][1]);
    if ("left" !== textAlign) for (let i = 0; i < effectiveLineAmount; i++) {
        const line = lines[i], w = line[1];
        line[3] = "right" === textAlign ? effectiveMaxWidth - w : (effectiveMaxWidth - w) / 2;
    }
    const effectiveMaxHeight = effectiveLineAmount * lineHeightPx;
    let firstBaselineY;
    firstBaselineY = "cap" === baselineMode ? .5 * (lineHeightPx + metrics.capHeight) : "x" === baselineMode ? .5 * (lineHeightPx + metrics.xHeight) : "linebox" === baselineMode ? .5 * (lineHeightPx - bareLineHeight) + metrics.ascender : .5 * (lineHeightPx + .5 * (metrics.capHeight + metrics.xHeight));
    for (let i = 0; i < effectiveLineAmount; i++) {
        lines[i][4] = firstBaselineY + lineHeightPx * i;
    }
    return [ lines, remainingLines, remainingText, bareLineHeight, lineHeightPx, effectiveMaxWidth, effectiveMaxHeight ];
}, measureLines = (measureText, lines, fontFamily, letterSpacing, maxLines) => {
    const measuredLines = [];
    let remainingLines = maxLines > 0 ? maxLines : lines.length, i = 0;
    for (;remainingLines > 0; ) {
        const line = lines[i];
        if (i++, remainingLines--, void 0 === line) continue;
        const width = measureText(line, fontFamily, letterSpacing);
        measuredLines.push([ line, width, !1, 0, 0 ]);
    }
    return [ measuredLines, remainingLines, maxLines > 0 && lines.length - measuredLines.length > 0 ];
}, wrapText = (measureText, text, fontFamily, maxWidth, letterSpacing, overflowSuffix, wordBreak, maxLines) => {
    const lines = text.split("\n"), wrappedLines = [], spaceWidth = measureText(" ", fontFamily, letterSpacing), overflowWidth = measureText(overflowSuffix, fontFamily, letterSpacing);
    let wrappedLine = [], remainingLines = maxLines > 0 ? maxLines : 1e3, hasRemainingText = !0, hasMaxLines = maxLines > 0;
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (void 0 !== line) {
            [wrappedLine, remainingLines, hasRemainingText] = line.length > 0 ? wrapLine(measureText, line, fontFamily, maxWidth, letterSpacing, spaceWidth, overflowSuffix, overflowWidth, wordBreak, remainingLines) : [ [ [ "", 0, !1, 0, 0 ] ], remainingLines, i < lines.length - 1 ], 
            remainingLines--;
            for (let j = 0; j < wrappedLine.length; j++) wrappedLines.push(wrappedLine[j]);
            if (!0 === hasMaxLines && remainingLines <= 0) {
                const lastLine = wrappedLines[wrappedLines.length - 1];
                if (i < lines.length - 1 && !1 === lastLine[2]) {
                    const [line, lineWidth] = truncateLineEnd(measureText, fontFamily, letterSpacing, lastLine[0], lastLine[1], "", maxWidth, overflowSuffix, overflowWidth);
                    lastLine[0] = line, lastLine[1] = lineWidth, lastLine[2] = !0;
                }
                break;
            }
        }
    }
    return [ wrappedLines, remainingLines, hasRemainingText ];
}, wrapLine = (measureText, line, fontFamily, maxWidth, letterSpacing, spaceWidth, overflowSuffix, overflowWidth, wordBreak, remainingLines) => {
    const words = line.split(spaceRegex), spaces = line.match(spaceRegex) || [], wrappedLines = [];
    let currentLine = "", currentLineWidth = 0;
    const wrapFn = getWrapStrategy(wordBreak);
    let wordIdx = 0, spaceIdx = 0, pendingWord = "";
    for (;(pendingWord.length > 0 || wordIdx < words.length) && remainingLines > 0; ) {
        let word, wordWidth, remainingWord = "";
        if (pendingWord.length > 0 ? (word = pendingWord, pendingWord = "") : word = words[wordIdx++], 
        wordWidth = measureText(word, fontFamily, letterSpacing), 0 === currentLineWidth) {
            if (wordWidth > maxWidth) {
                const isLastLine = 0 === --remainingLines;
                let lineTruncated = isLastLine;
                if ([word, remainingWord, wordWidth] = isLastLine ? truncateWord(measureText, word, wordWidth, maxWidth, fontFamily, letterSpacing, overflowSuffix, overflowWidth) : splitWord(measureText, word, wordWidth, maxWidth, fontFamily, letterSpacing), 
                remainingWord.length > 0) {
                    if (0 === word.length) {
                        if (overflowSuffix.length > 0) word = overflowSuffix, wordWidth = overflowWidth; else {
                            if (word = remainingWord.charAt(0), 0 === word.length) break;
                            wordWidth = measureText(word, fontFamily, letterSpacing);
                        }
                        remainingWord = "", remainingLines = 0, lineTruncated = !0;
                    }
                    pendingWord = remainingWord;
                }
                wrappedLines.push([ word, wordWidth, lineTruncated, 0, 0 ]);
            } else wordWidth + spaceWidth >= maxWidth ? (remainingLines--, wrappedLines.push([ word, wordWidth, !1, 0, 0 ])) : (currentLine = word, 
            currentLineWidth = wordWidth);
            continue;
        }
        const space = spaces[spaceIdx++] || "", effectiveSpaceWidth = "​" === space ? 0 : spaceWidth, totalWidth = currentLineWidth + effectiveSpaceWidth + wordWidth;
        totalWidth < maxWidth ? (currentLine += effectiveSpaceWidth > 0 ? space + word : word, 
        currentLineWidth = totalWidth) : (remainingLines--, totalWidth !== maxWidth ? ([currentLine, currentLineWidth, remainingWord] = wrapFn(measureText, word, wordWidth, fontFamily, letterSpacing, wrappedLines, currentLine, currentLineWidth, remainingLines, remainingWord, maxWidth, space, spaceWidth, overflowSuffix, overflowWidth), 
        remainingWord.length > 0 && (pendingWord = remainingWord)) : (currentLine += effectiveSpaceWidth > 0 ? space + word : word, 
        currentLineWidth = totalWidth, wrappedLines.push([ currentLine, currentLineWidth, !1, 0, 0 ]), 
        currentLine = "", currentLineWidth = 0));
    }
    return currentLineWidth > 0 && remainingLines > 0 && wrappedLines.push([ currentLine, currentLineWidth, !1, 0, 0 ]), 
    [ wrappedLines, remainingLines, !0 ];
}, getWrapStrategy = wordBreak => "break-word" === wordBreak ? breakWord : "break-all" === wordBreak ? breakAll : "overflow" === wordBreak ? overflow : breakWord, overflow = (measureText, word, wordWidth, fontFamily, letterSpacing, wrappedLines, currentLine, currentLineWidth, remainingLines, remainingWord, maxWidth, space, spaceWidth, overflowSuffix, overflowWidth) => (currentLine += space + word, 
currentLineWidth += spaceWidth + wordWidth, 0 === remainingLines && (currentLine += overflowSuffix, 
currentLineWidth += overflowWidth), wrappedLines.push([ currentLine, currentLineWidth, !0, 0, 0 ]), 
[ "", 0, "" ]), breakWord = (measureText, word, wordWidth, fontFamily, letterSpacing, wrappedLines, currentLine, currentLineWidth, remainingLines, remainingWord, maxWidth, space, spaceWidth, overflowSuffix, overflowWidth) => (remainingWord = word, 
0 === remainingLines ? ([currentLine, currentLineWidth, remainingWord] = truncateLineEnd(measureText, fontFamily, letterSpacing, currentLine, currentLineWidth, remainingWord, maxWidth, overflowSuffix, overflowWidth), 
wrappedLines.push([ currentLine, currentLineWidth, !0, 0, 0 ])) : (wrappedLines.push([ currentLine, currentLineWidth, !1, 0, 0 ]), 
currentLine = "", currentLineWidth = 0), [ currentLine, currentLineWidth, remainingWord ]), breakAll = (measureText, word, wordWidth, fontFamily, letterSpacing, wrappedLines, currentLine, currentLineWidth, remainingLines, remainingWord, maxWidth, space, spaceWidth, overflowSuffix, overflowWidth) => {
    let remainingSpace = maxWidth - currentLineWidth;
    currentLineWidth > 0 && (remainingSpace -= spaceWidth);
    const truncate = 0 === remainingLines;
    return [word, remainingWord, wordWidth] = truncate ? truncateWord(measureText, word, wordWidth, remainingSpace, fontFamily, letterSpacing, overflowSuffix, overflowWidth) : splitWord(measureText, word, wordWidth, remainingSpace, fontFamily, letterSpacing), 
    currentLine += space + word, currentLineWidth += spaceWidth + wordWidth, wrappedLines.push([ currentLine, currentLineWidth, truncate, 0, 0 ]), 
    [ currentLine = "", currentLineWidth = 0, remainingWord ];
}, truncateLineEnd = (measureText, fontFamily, letterSpacing, currentLine, currentLineWidth, remainingWord, maxWidth, overflowSuffix, overflowWidth) => {
    if (currentLineWidth + overflowWidth <= maxWidth) return [ currentLine += overflowSuffix, currentLineWidth += overflowWidth, remainingWord = "" ];
    let truncated = !1;
    for (let i = currentLine.length - 1; i > 0; i--) {
        if ((currentLineWidth -= measureText(currentLine.charAt(i), fontFamily, letterSpacing)) + overflowWidth <= maxWidth) {
            currentLineWidth += overflowWidth, remainingWord = (currentLine = currentLine.substring(0, i) + overflowSuffix).substring(i) + " " + remainingWord, 
            truncated = !0;
            break;
        }
    }
    return !1 === truncated && (currentLineWidth = overflowWidth, remainingWord = currentLine = overflowSuffix), 
    [ currentLine, currentLineWidth, remainingWord ];
}, truncateWord = (measureText, word, wordWidth, maxWidth, fontFamily, letterSpacing, overflowSuffix, overflowWidth) => {
    const targetWidth = maxWidth - overflowWidth;
    if (targetWidth <= 0) return [ "", word, 0 ];
    if (wordWidth - targetWidth < wordWidth / 2 == !1) {
        let currentWidth = wordWidth;
        for (let i = word.length - 1; i > 0; i--) {
            if (currentWidth -= measureText(word.charAt(i), fontFamily, letterSpacing), currentWidth <= targetWidth) {
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
}, splitWord = (measureText, word, wordWidth, maxWidth, fontFamily, letterSpacing) => {
    if (maxWidth <= 0) return [ "", word, 0 ];
    if (wordWidth - maxWidth < wordWidth / 2 == !1) {
        let currentWidth = wordWidth;
        for (let i = word.length - 1; i > 0; i--) {
            if (currentWidth -= measureText(word.charAt(i), fontFamily, letterSpacing), currentWidth <= maxWidth) {
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
}, ContextSpy = class {
    constructor() {
        this.data = {};
    }
    reset() {
        this.data = {};
    }
    increment(name) {
        this.data[name] || (this.data[name] = 0), this.data[name]++;
    }
    getData() {
        return {
            ...this.data
        };
    }
}, TextureMemoryManager = class {
    constructor(stage, settings) {
        this.stage = void 0, this.memUsed = 0, this.loadedTextures = new Set, this.criticalThreshold = 124e6, 
        this.targetThreshold = .5, this.cleanupInterval = 5e3, this.debugLogging = !1, this.loggingID = 0, 
        this.lastCleanupTime = 0, this.baselineMemoryAllocation = 26e6, this.hasWarnedAboveCritical = !1, 
        this.criticalCleanupRequested = !1, this.doNotExceedCriticalThreshold = !1, this.frameTime = 0, 
        this.stage = stage, this.updateSettings(settings);
    }
    setTextureMemUse(texture, byteSize) {
        if (this.memUsed -= texture.memUsed, 0 === byteSize) return this.loadedTextures.delete(texture), 
        void (texture.memUsed = 0);
        texture.memUsed = byteSize, this.memUsed += byteSize, this.loadedTextures.add(texture), 
        this.criticalThreshold > 0 && this.memUsed > this.criticalThreshold && (this.criticalCleanupRequested = !0);
    }
    checkCleanup() {
        return this.criticalCleanupRequested || this.criticalThreshold > 0 && this.memUsed > this.targetThreshold && this.frameTime - this.lastCleanupTime >= this.cleanupInterval;
    }
    checkCriticalCleanup() {
        return this.criticalThreshold > 0 && this.memUsed > this.criticalThreshold;
    }
    freeTexture(texture) {
        !0 === this.debugLogging && console.log(`[TextureMemoryManager] Freeing texture. State: ${texture.state}`), 
        texture.free(), !0 === this.loadedTextures.has(texture) && (this.loadedTextures.delete(texture), 
        this.memUsed -= texture.memUsed, texture.memUsed = 0);
    }
    destroyTexture(texture) {
        !0 === this.debugLogging && console.log(`[TextureMemoryManager] Destroying texture. State: ${texture.state}`), 
        this.loadedTextures.delete(texture), this.stage.txManager.removeTextureFromCache(texture), 
        texture.destroy(), this.memUsed -= texture.memUsed, texture.memUsed = 0;
    }
    cleanup(full = !1) {
        const critical = this.criticalCleanupRequested;
        this.lastCleanupTime = this.frameTime, !0 === critical && this.stage.queueFrameEvent("criticalCleanup", {
            memUsed: this.memUsed,
            criticalThreshold: this.criticalThreshold
        }), !0 === this.debugLogging && console.log(`[TextureMemoryManager] Cleaning up textures. Critical: ${critical}. Full: ${full}`);
        const memTarget = critical ? this.criticalThreshold : this.targetThreshold;
        let currentMemUsed = this.memUsed;
        for (const texture of this.loadedTextures) {
            if (!1 === full && currentMemUsed < memTarget) break;
            if ((texture.type === TextureType.image || texture.type === TextureType.noise || texture.type === TextureType.renderToTexture) && !0 === texture.canBeCleanedUp()) {
                const textureMemory = texture.memUsed;
                this.freeTexture(texture), currentMemUsed -= textureMemory;
            }
        }
        this.evictOrphanedTextures(), this.memUsed >= this.criticalThreshold ? (this.stage.queueFrameEvent("criticalCleanupFailed", {
            memUsed: this.memUsed,
            criticalThreshold: this.criticalThreshold
        }), this.hasWarnedAboveCritical || !0 !== this.debugLogging || (console.warn(`[TextureMemoryManager] Memory usage above critical threshold after cleanup: ${this.memUsed}`), 
        this.hasWarnedAboveCritical = !0)) : (this.criticalCleanupRequested = !1, this.hasWarnedAboveCritical = !1);
    }
    evictOrphanedTextures() {
        const keyCache = this.stage.txManager.keyCache;
        for (const texture of keyCache.values()) {
            const state = texture.state;
            !0 == ("freed" === state || ("initial" === state || "failed" === state) && !1 === texture.isWithinStartupGracePeriod()) && !1 === texture.preventCleanup && 0 === texture.renderableOwners.size && !1 === texture.hasListeners() && this.destroyTexture(texture);
        }
    }
    getMemoryInfo() {
        let renderableTexturesLoaded = 0, renderableMemUsed = this.baselineMemoryAllocation;
        for (const texture of this.loadedTextures) texture && texture.renderable && (renderableTexturesLoaded += 1, 
        renderableMemUsed += texture.memUsed);
        const actualLoadedTextures = this.loadedTextures.size;
        return {
            criticalThreshold: this.criticalThreshold,
            targetThreshold: this.targetThreshold,
            renderableMemUsed: renderableMemUsed,
            memUsed: this.memUsed,
            renderableTexturesLoaded: renderableTexturesLoaded,
            loadedTextures: actualLoadedTextures,
            baselineMemoryAllocation: this.baselineMemoryAllocation
        };
    }
    updateSettings(settings) {
        const {criticalThreshold: criticalThreshold, doNotExceedCriticalThreshold: doNotExceedCriticalThreshold} = settings;
        if (this.doNotExceedCriticalThreshold = doNotExceedCriticalThreshold || !1, this.criticalThreshold = Math.round(criticalThreshold), 
        0 === this.memUsed) this.memUsed = Math.round(settings.baselineMemoryAllocation); else {
            const memUsedExBaseline = this.memUsed - this.baselineMemoryAllocation;
            this.memUsed = Math.round(settings.baselineMemoryAllocation + memUsedExBaseline);
        }
        this.baselineMemoryAllocation = Math.round(settings.baselineMemoryAllocation);
        const targetFraction = Math.max(0, Math.min(1, settings.targetThresholdLevel));
        if (this.targetThreshold = Math.max(Math.round(criticalThreshold * targetFraction), this.baselineMemoryAllocation), 
        this.cleanupInterval = settings.cleanupInterval, this.debugLogging = settings.debugLogging, 
        this.loggingID && !settings.debugLogging && (clearInterval(this.loggingID), this.loggingID = 0), 
        settings.debugLogging && !this.loggingID) {
            let lastMemUse = 0;
            this.loggingID = setInterval(() => {
                lastMemUse !== this.memUsed && (lastMemUse = this.memUsed, console.log(`[TextureMemoryManager] Memory used: ${bytesToMb(this.memUsed)} mb / ${bytesToMb(this.criticalThreshold)} mb (${(this.memUsed / this.criticalThreshold * 100).toFixed(1)}%)`));
            }, 1e3);
        }
        0 === criticalThreshold && (this.setTextureMemUse = () => {});
    }
    handleOutOfMemory() {
        this.stage.queueFrameEvent("outOfMemory", {
            memUsed: this.memUsed,
            criticalThreshold: this.criticalThreshold
        }), this.criticalCleanupRequested = !0;
    }
};

!function(TextConstraint) {
    TextConstraint[TextConstraint.none = 0] = "none", TextConstraint[TextConstraint.width = 1] = "width", 
    TextConstraint[TextConstraint.height = 2] = "height", TextConstraint[TextConstraint.both = 3] = "both";
}(TextConstraint || (TextConstraint = {}));

var CoreTextNode = class extends CoreNode {
    constructor(stage, props, textRenderer) {
        super(stage, props), this.textRenderer = void 0, this.fontHandler = void 0, this._layoutGenerated = !1, 
        this._waitingForFont = !1, this._containType = TextConstraint.none, this._cachedLayout = null, 
        this._sdfCache = {
            vertices: null,
            glyphCount: 0,
            color: 0,
            alpha: -1,
            transform: new Float32Array(6),
            layoutRef: null
        }, this.textProps = void 0, this._renderInfo = {
            width: 0,
            height: 0
        }, this._type = "sdf", this.onTextureLoaded = (_, dimensions) => {
            this.parentHasRenderTexture && this.notifyParentRTTOfUpdate(), dimensions.w > 1 && dimensions.h > 1 && this.emit("loaded", {
                type: "texture",
                dimensions: dimensions
            }), this.textureLoaded = !0, this.setUpdateType(UpdateType.IsRenderable);
        }, this.emitTextLoadedEvent = () => {
            this.emit("loaded", {
                type: "text",
                dimensions: {
                    w: this._renderInfo.width,
                    h: this._renderInfo.height
                }
            });
        }, this.textRenderer = textRenderer, this.fontHandler = textRenderer.font, this._type = textRenderer.type, 
        this.textProps = props, this._containType = TextConstraint[props.contain], this.setUpdateType(UpdateType.All);
    }
    allowTextGeneration() {
        const p = this.props.parent;
        return null !== p && (p.worldAlpha > 0 && p.renderState > CoreNodeRenderState.OutOfBounds);
    }
    updateLocalTransform() {
        const p = this.props;
        let {x: x, y: y, w: w, h: h} = p;
        const mountX = p.mountX, mountY = p.mountY;
        let mountTranslateX = p.mountX * w, mountTranslateY = p.mountY * h;
        const {textAlign: textAlign, verticalAlign: verticalAlign, maxWidth: maxWidth, maxHeight: maxHeight} = this.textProps, contain = this._containType, hasMaxWidth = maxWidth > 0, hasMaxHeight = maxHeight > 0;
        let containX = 0, containY = 0;
        contain > 0 && (hasMaxWidth || hasMaxHeight) && (contain & TextConstraint.width && !0 === hasMaxWidth && ("right" === textAlign ? containX = maxWidth - w : "center" === textAlign && (containX = .5 * (maxWidth - w)), 
        mountTranslateX = mountX * maxWidth), contain & TextConstraint.height && !0 === hasMaxHeight && (mountTranslateY = mountY * maxHeight));
        const slackY = (!0 === hasMaxHeight ? maxHeight : h) - this._renderInfo.height;
        if (slackY > 0 && ("bottom" === verticalAlign ? containY = slackY : "middle" === verticalAlign && (containY = .5 * slackY)), 
        0 !== p.rotation || 1 !== p.scaleX || 1 !== p.scaleY) {
            const scaleRotate = Matrix3d.rotate(p.rotation, Matrix3d.temp).scale(p.scaleX, p.scaleY), pivotW = contain & TextConstraint.width && maxWidth > 0 ? maxWidth : w, pivotH = contain & TextConstraint.height && maxHeight > 0 ? maxHeight : h, pivotTranslateX = p.pivotX * pivotW, pivotTranslateY = p.pivotY * pivotH;
            this.localTransform = Matrix3d.translate(x - mountTranslateX + pivotTranslateX, y - mountTranslateY + pivotTranslateY, this.localTransform).multiply(scaleRotate).translate(-pivotTranslateX, -pivotTranslateY);
        } else this.localTransform = Matrix3d.translate(x - mountTranslateX, y - mountTranslateY, this.localTransform);
        0 === containX && 0 === containY || this.localTransform.translate(containX, containY);
    }
    update(delta, parentClippingRect) {
        if ((!0 === this.textProps.forceLoad || !0 === this.allowTextGeneration()) && !1 === this._layoutGenerated) if (!0 === this.fontHandler.isFontLoaded(this.textProps.fontFamily)) {
            this._waitingForFont = !1, this._cachedLayout = null;
            const resp = this.textRenderer.renderText(this.textProps);
            this.handleRenderResult(resp), this._layoutGenerated = !0;
        } else !1 === this._waitingForFont && (this.fontHandler.waitingForFont(this.textProps.fontFamily, this), 
        this._waitingForFont = !0);
        super.update(delta, parentClippingRect);
    }
    updateIsRenderable() {
        "canvas" !== this._type ? this.setRenderable(!0 === this.checkBasicRenderability() && null !== this._cachedLayout && (!1 === this.stage.renderOnlyInViewport || this.renderState === CoreNodeRenderState.InViewport)) : super.updateIsRenderable();
    }
    handleRenderResult(result) {
        const textRendererType = this._type;
        let width = result.width, height = result.height;
        "canvas" === textRendererType && (void 0 === result.imageData ? (this.texture = null, 
        this.setRenderable(!1)) : (this.texture = this.stage.txManager.createTexture("ImageTexture", {
            premultiplyAlpha: !0,
            src: result.imageData
        }), this.setRenderable(!1), this.renderState > CoreNodeRenderState.OutOfBounds && this.updateTextureOwnership(!0))), 
        this._cachedLayout = result.layout || null, this.props.w = width, this.props.h = height, 
        this.setUpdateType(UpdateType.Local | UpdateType.RenderBounds | UpdateType.RecalcUniforms), 
        "sdf" === textRendererType && this.setRenderable(!0), this._renderInfo = result, 
        this.emitTextLoadedEvent();
    }
    renderQuads(renderer) {
        if (!0 === this.parentHasRenderTexture && (!1 === renderer.renderToTextureActive || this.parentRenderTexture !== renderer.activeRttNode)) return;
        if ("canvas" === this._type) {
            const white = premultiplyColorABGR(4294967295, this.worldAlpha);
            return this.premultipliedColorTl = this.premultipliedColorTr = this.premultipliedColorBl = this.premultipliedColorBr = white, 
            void super.renderQuads(renderer);
        }
        if (!this._cachedLayout) return;
        const props = this.textProps;
        this.textRenderer.renderQuads(renderer, this._cachedLayout, null, {
            fontFamily: this.textProps.fontFamily,
            fontSize: props.fontSize,
            color: this.props.color || 4294967295,
            offsetY: props.offsetY,
            worldAlpha: this.worldAlpha,
            globalTransform: this.globalTransform.getFloatArr(),
            clippingRect: this.clippingRect,
            width: this.props.w,
            height: this.props.h,
            parentHasRenderTexture: this.parentHasRenderTexture,
            framebufferDimensions: !0 === this.parentHasRenderTexture ? this.parentFramebufferDimensions : null,
            stage: this.stage,
            sdfCache: this._sdfCache
        });
    }
    destroy(isChild = !1) {
        !0 === this._waitingForFont && this.fontHandler && this.fontHandler.stopWaitingForFont(this.textProps.fontFamily, this), 
        this._cachedLayout = null, this._sdfCache.vertices = null, this._sdfCache.layoutRef = null, 
        this.fontHandler = null, this.textRenderer = null, super.destroy(isChild);
    }
    set w(value) {
        this.maxWidth = value;
    }
    get w() {
        return this.props.w;
    }
    set h(value) {
        this.maxHeight = value;
    }
    get h() {
        return this.props.h;
    }
    get maxWidth() {
        return this.textProps.maxWidth;
    }
    set maxWidth(value) {
        this.textProps.maxWidth !== value && (this.textProps.maxWidth = value, this._layoutGenerated = !1, 
        this.setUpdateType(UpdateType.Local));
    }
    get maxHeight() {
        return this.textProps.maxHeight;
    }
    set maxHeight(value) {
        this.textProps.maxHeight !== value && (this.textProps.maxHeight = value, this._layoutGenerated = !1, 
        this.setUpdateType(UpdateType.Local));
    }
    get contain() {
        return this.textProps.contain;
    }
    set contain(value) {
        this.textProps.contain !== value && (this.textProps.contain = value, this._containType = TextConstraint[value], 
        this.setUpdateType(UpdateType.Local));
    }
    get text() {
        return this.textProps.text;
    }
    set text(value) {
        this.textProps.text !== value && (this.textProps.text = value, this._layoutGenerated = !1, 
        this.setUpdateType(UpdateType.Local));
    }
    get fontSize() {
        return this.textProps.fontSize;
    }
    set fontSize(value) {
        this.textProps.fontSize !== value && (this.textProps.fontSize = value, this._layoutGenerated = !1, 
        this.setUpdateType(UpdateType.Local));
    }
    get fontFamily() {
        return this.textProps.fontFamily;
    }
    set fontFamily(value) {
        this.textProps.fontFamily !== value && (!0 === this._waitingForFont && this.fontHandler.stopWaitingForFont(this.textProps.fontFamily, this), 
        this.textProps.fontFamily = value, this._layoutGenerated = !1, this.setUpdateType(UpdateType.Local));
    }
    get fontStyle() {
        return this.textProps.fontStyle;
    }
    set fontStyle(value) {
        this.textProps.fontStyle !== value && (this.textProps.fontStyle = value, this._layoutGenerated = !1, 
        this.setUpdateType(UpdateType.Local));
    }
    get textAlign() {
        return this.textProps.textAlign;
    }
    set textAlign(value) {
        this.textProps.textAlign !== value && (this.textProps.textAlign = value, this._layoutGenerated = !1, 
        this.setUpdateType(UpdateType.Local));
    }
    get letterSpacing() {
        return this.textProps.letterSpacing;
    }
    set letterSpacing(value) {
        this.textProps.letterSpacing !== value && (this.textProps.letterSpacing = value, 
        this._layoutGenerated = !1, this.setUpdateType(UpdateType.Local));
    }
    get lineHeight() {
        return this.textProps.lineHeight;
    }
    set lineHeight(value) {
        this.textProps.lineHeight !== value && (this.textProps.lineHeight = value, this._layoutGenerated = !1, 
        this.setUpdateType(UpdateType.Local));
    }
    get maxLines() {
        return this.textProps.maxLines;
    }
    set maxLines(value) {
        this.textProps.maxLines !== value && (this.textProps.maxLines = value, this._layoutGenerated = !1, 
        this.setUpdateType(UpdateType.Local));
    }
    get verticalAlign() {
        return this.textProps.verticalAlign;
    }
    set verticalAlign(value) {
        this.textProps.verticalAlign !== value && (this.textProps.verticalAlign = value, 
        this._layoutGenerated = !1, this.setUpdateType(UpdateType.Local));
    }
    get overflowSuffix() {
        return this.textProps.overflowSuffix;
    }
    set overflowSuffix(value) {
        this.textProps.overflowSuffix !== value && (this.textProps.overflowSuffix = value, 
        this._layoutGenerated = !1, this.setUpdateType(UpdateType.Local));
    }
    get wordBreak() {
        return this.textProps.wordBreak;
    }
    set wordBreak(value) {
        this.textProps.wordBreak !== value && (this.textProps.wordBreak = value, this._layoutGenerated = !1, 
        this.setUpdateType(UpdateType.Local));
    }
    get offsetY() {
        return this.textProps.offsetY;
    }
    set offsetY(value) {
        this.textProps.offsetY !== value && (this.textProps.offsetY = value, this._layoutGenerated = !1, 
        this.setUpdateType(UpdateType.Local));
    }
    get color() {
        return this.props.color;
    }
    set color(value) {
        super.color = value, "canvas" === this._type && (this._layoutGenerated = !1, this.setUpdateType(UpdateType.Local));
    }
    get forceLoad() {
        return this.textProps.forceLoad;
    }
    set forceLoad(value) {
        this.textProps.forceLoad !== value && (this.textProps.forceLoad = value, this.setUpdateType(UpdateType.Local));
    }
    get renderInfo() {
        return this._renderInfo;
    }
};

var EMPTY_TEXTURE_OPTIONS = Object.freeze({}), Stage = class {
    constructor(options) {
        var _fontEngines$;
        this.options = void 0, this.animationManager = void 0, this.txManager = void 0, 
        this.txMemManager = void 0, this.textRenderers = {}, this.fontHandlers = {}, this.shManager = void 0, 
        this.renderer = void 0, this.root = void 0, this.boundsMargin = void 0, this.renderOnlyInViewport = void 0, 
        this.defShaderNode = null, this.strictBound = void 0, this.preloadBound = void 0, 
        this.defaultTexture = null, this.pixelRatio = void 0, this.bufferMemory = 2e6, this.platform = void 0, 
        this.calculateTextureCoord = void 0, this.targetFrameTime = 0, this.eventBus = void 0, 
        this.isContextLost = !1, this.startTime = 0, this.deltaTime = 0, this.lastFrameTime = 0, 
        this.currentFrameTime = 0, this.elapsedTime = 0, this.timedNodes = [], this.clrColor = 0, 
        this.fpsNumFrames = 0, this.fpsElapsedTime = 0, this.numQuadsRendered = 0, this.numRenderOpsRendered = 0, 
        this.capabilities = null, this.renderRequested = !1, this.reprocessFrame = !1, this.reprocessCallback = null, 
        this.frameEventQueue = [], this.renderList = [], this.renderListDirty = !0, this.hasOnlyOneFontEngine = void 0, 
        this.hasOnlyCanvasFontEngine = void 0, this.hasCanvasEngine = void 0, this.singleFontEngine = null, 
        this.singleFontHandler = null, this.contextSpy = null, this.options = options;
        const {canvas: canvas, clearColor: clearColor, appWidth: appWidth, appHeight: appHeight, boundsMargin: boundsMargin, enableContextSpy: enableContextSpy, forceWebGL2: forceWebGL2, disableVertexArrayObject: disableVertexArrayObject, numImageWorkers: numImageWorkers, textureMemory: textureMemory, renderEngine: renderEngine, fontEngines: fontEngines, createImageBitmapSupport: createImageBitmapSupport, premultiplyAlphaHonored: premultiplyAlphaHonored, platform: platform, maxRetryCount: maxRetryCount} = options;
        var mode;
        mode = options.textBaselineMode, baselineMode = mode, this.platform = platform, 
        this.renderOnlyInViewport = !1 !== options.renderOnlyInViewport, this.startTime = platform.getTimeStamp(), 
        this.eventBus = options.eventBus, this.targetFrameTime = options.targetFPS > 0 ? 1e3 / options.targetFPS : 0, 
        this.txManager = new CoreTextureManager(this, {
            numImageWorkers: numImageWorkers,
            createImageBitmapSupport: createImageBitmapSupport,
            premultiplyAlphaHonored: null == premultiplyAlphaHonored || premultiplyAlphaHonored,
            maxRetryCount: maxRetryCount
        }), this.txManager.on("initialized", () => {
            this.requestRender();
        }), this.txMemManager = new TextureMemoryManager(this, textureMemory), this.animationManager = new AnimationManager, 
        this.contextSpy = enableContextSpy ? new ContextSpy : null;
        let bm = [ 0, 0, 0, 0 ];
        boundsMargin && (bm = Array.isArray(boundsMargin) ? boundsMargin : [ boundsMargin, boundsMargin, boundsMargin, boundsMargin ]), 
        this.boundsMargin = bm, this.strictBound = createBound(0, 0, appWidth, appHeight), 
        this.preloadBound = createPreloadBounds(this.strictBound, bm), this.clrColor = clearColor, 
        this.pixelRatio = options.devicePhysicalPixelRatio * options.deviceLogicalPixelRatio, 
        this.renderer = new renderEngine({
            stage: this,
            canvas: canvas,
            contextSpy: this.contextSpy,
            forceWebGL2: forceWebGL2,
            disableVertexArrayObject: disableVertexArrayObject
        }), this.shManager = new CoreShaderManager(this), this.defShaderNode = this.renderer.getDefaultShaderNode(), 
        this.calculateTextureCoord = void 0 !== this.renderer.getTextureCoords;
        const renderMode = this.renderer.mode || "webgl";
        if ("canvas" === renderMode && this.txMemManager.updateSettings({
            ...textureMemory,
            criticalThreshold: 0,
            doNotExceedCriticalThreshold: !1
        }), this.createDefaultTexture(), function(mode) {
            premultiplyRGB = "webgl" === mode;
        }(renderMode), this.txManager.renderer = this.renderer, this.hasOnlyOneFontEngine = 1 === fontEngines.length, 
        this.hasOnlyCanvasFontEngine = 1 === fontEngines.length && "canvas" === fontEngines[0].type, 
        this.hasCanvasEngine = !1, this.singleFontEngine = this.hasOnlyOneFontEngine ? fontEngines[0] : null, 
        this.singleFontHandler = this.hasOnlyOneFontEngine ? null == (_fontEngines$ = fontEngines[0]) ? void 0 : _fontEngines$.font : null, 
        null === this.singleFontEngine) fontEngines.filter(fontEngine => {
            const type = fontEngine.type;
            return "sdf" === type && "canvas" === renderMode ? (console.warn("MsdfTextRenderer is not compatible with Canvas renderer. Skipping..."), 
            !1) : ("canvas" === type && (this.hasCanvasEngine = !0), !0);
        }).sort((a, b) => "sdf" === a.type ? -1 : "sdf" === b.type || "canvas" === a.type ? 1 : "canvas" === b.type ? -1 : 0).forEach(fontEngine => {
            const type = fontEngine.type;
            this.textRenderers[type] = fontEngine, this.textRenderers[type].init(this), this.fontHandlers[type] = fontEngine.font;
        }); else {
            const fontEngine = this.singleFontEngine, type = fontEngine.type;
            "sdf" === type && "canvas" === renderMode ? console.warn("MsdfTextRenderer is not compatible with Canvas renderer. Skipping...") : ("canvas" === type && (this.hasCanvasEngine = !0), 
            this.textRenderers[type] = fontEngine, this.fontHandlers[type] = fontEngine.font, 
            this.textRenderers[type].init(this));
        }
        0 === Object.keys(this.textRenderers).length && console.warn("No text renderers available. Your text will not render.");
        const rootNode = new CoreNode(this, {
            x: 0,
            y: 0,
            w: appWidth,
            h: appHeight,
            alpha: 1,
            ignoreParentAlpha: !1,
            autosize: !1,
            boundsMargin: null,
            clipping: !1,
            color: 0,
            colorTop: 0,
            colorBottom: 0,
            colorLeft: 0,
            colorRight: 0,
            colorTl: 0,
            colorTr: 0,
            placeholderColor: 0,
            colorBl: 0,
            colorBr: 0,
            zIndex: 0,
            scaleX: 1,
            scaleY: 1,
            mountX: 0,
            mountY: 0,
            mount: 0,
            pivot: .5,
            pivotX: .5,
            pivotY: .5,
            rotation: 0,
            parent: null,
            texture: null,
            textureOptions: EMPTY_TEXTURE_OPTIONS,
            shader: this.defShaderNode,
            rtt: !1,
            src: null,
            scale: 1
        });
        this.root = rootNode, rootNode.updateLocalTransform(), Matrix3d.copy(rootNode.localTransform, rootNode.globalTransform), 
        rootNode.sceneGlobalTransform = Matrix3d.copy(rootNode.localTransform), rootNode.calculateRenderCoords(), 
        rootNode.updateBoundingRect(), rootNode.createRenderBounds(), rootNode.updateRenderState(CoreNodeRenderState.InViewport), 
        rootNode.updateIsRenderable(), rootNode.premultipliedColorTl = rootNode.premultipliedColorTr = rootNode.premultipliedColorBl = rootNode.premultipliedColorBr = 0, 
        this.platform.startLoop(this);
    }
    setClearColor(color) {
        this.clearColor = color, this.renderer.updateClearColor(color), this.renderRequested = !0;
    }
    updateTargetFrameTime() {
        this.targetFrameTime = this.options.targetFPS > 0 ? 1e3 / this.options.targetFPS : 0;
    }
    updateFrameTime() {
        const newFrameTime = this.platform.getTimeStamp();
        this.lastFrameTime = this.currentFrameTime, this.currentFrameTime = newFrameTime, 
        this.elapsedTime = newFrameTime - this.startTime, this.deltaTime = this.lastFrameTime ? newFrameTime - this.lastFrameTime : 100 / 6, 
        this.txManager.frameTime = newFrameTime, this.txMemManager.frameTime = newFrameTime, 
        this.eventBus.emit("frameTick", {
            time: this.currentFrameTime,
            delta: this.deltaTime
        });
    }
    setContextLost() {
        !0 !== this.isContextLost && (this.isContextLost = !0, this.eventBus.emit("contextLost"));
    }
    createDefaultTexture() {
        this.defaultTexture = this.txManager.createTexture("ColorTexture", {
            color: 4294967295
        }), this.defaultTexture, this.txManager.loadTexture(this.defaultTexture, !0), this.defaultTexture.setRenderableOwner("stage", !0), 
        this.defaultTexture.once("loaded", () => {
            this.requestRender();
        });
    }
    updateAnimations() {
        const {animationManager: animationManager} = this;
        return !!this.root && (animationManager.update(this.deltaTime), animationManager.activeAnimations.length > 0);
    }
    hasSceneUpdates() {
        return !!this.root.updateType || this.renderRequested || this.txManager.hasUpdates();
    }
    cleanupTextRenderers() {
        const textRenderers = this.textRenderers;
        for (const key in textRenderers) textRenderers[key].cleanup();
    }
    drawFrame(hasActiveAnimations = !1) {
        const {renderer: renderer, renderRequested: renderRequested, root: root} = this;
        do {
            const forceUpdate = this.reprocessFrame;
            if (this.reprocessFrame = !1, 0 !== root.updateType || forceUpdate) {
                root.updateType = 0;
                const childUpdateType = root.childUpdateType;
                root.childUpdateType = 0;
                for (let i = 0, length = root.children.length; i < length; i++) {
                    const child = root.children[i];
                    0 !== childUpdateType && (child.updateType |= childUpdateType), 0 !== child.updateType && child.update(this.deltaTime, root.clippingRect);
                }
            }
            null !== this.reprocessCallback && (this.reprocessCallback(), this.reprocessCallback = null);
        } while (this.reprocessFrame);
        if (!0 === this.txManager.hasUpdates() && (!0 === hasActiveAnimations ? this.txManager.processOne() : this.txManager.processUntil(this.options.textureProcessingTimeLimit)).catch(err => {
            console.error("Error processing textures:", err);
        }), renderer.reset(), renderer.rttNodes.length > 0 && renderer.renderRTTNodes(), 
        !0 === this.renderListDirty) this.renderList.length = 0, this.buildRenderList(this.root), 
        this.renderListDirty = !1; else {
            const renderList = this.renderList;
            for (let i = 0, len = renderList.length; i < len; i++) renderList[i].renderQuads(renderer);
        }
        if (renderer.render(), this.calculateFps(), this.calculateRenderInfo(), !0 === renderRequested && (this.renderRequested = !1), 
        this.timedNodes.length > 0) for (let key in this.timedNodes) if (!0 === this.timedNodes[key].isRenderable) {
            this.requestRender();
            break;
        }
        !0 === this.txMemManager.criticalCleanupRequested && this.txMemManager.cleanup();
    }
    queueFrameEvent(name, data) {
        this.frameEventQueue.push([ name, data ]);
    }
    flushFrameEvents() {
        for (const [name, data] of this.frameEventQueue) this.eventBus.emit(name, data);
        this.frameEventQueue = [];
    }
    calculateFps() {
        const {fpsUpdateInterval: fpsUpdateInterval} = this.options;
        if (fpsUpdateInterval && (this.fpsNumFrames++, this.fpsElapsedTime += this.deltaTime, 
        this.fpsElapsedTime >= fpsUpdateInterval)) {
            var _this$contextSpy$getD, _this$contextSpy, _this$renderer$getRen, _this$renderer$getQua, _this$contextSpy2;
            const fps = Math.round(1e3 * this.fpsNumFrames / this.fpsElapsedTime);
            this.fpsNumFrames = 0, this.fpsElapsedTime = 0, null === this.capabilities && (this.capabilities = this.renderer.getCapabilities()), 
            this.queueFrameEvent("fpsUpdate", {
                fps: fps,
                contextSpyData: null !== (_this$contextSpy$getD = null == (_this$contextSpy = this.contextSpy) ? void 0 : _this$contextSpy.getData()) && void 0 !== _this$contextSpy$getD ? _this$contextSpy$getD : null,
                renderOps: null !== (_this$renderer$getRen = this.renderer.getRenderOpCount()) && void 0 !== _this$renderer$getRen ? _this$renderer$getRen : 0,
                quads: null !== (_this$renderer$getQua = this.renderer.getQuadCount()) && void 0 !== _this$renderer$getQua ? _this$renderer$getQua : 0,
                capabilities: this.capabilities
            }), null == (_this$contextSpy2 = this.contextSpy) || _this$contextSpy2.reset();
        }
    }
    calculateRenderInfo() {
        const quads = this.renderer.getQuadCount(), renderOps = this.renderer.getRenderOpCount();
        (quads && quads !== this.numQuadsRendered || renderOps && renderOps !== this.numRenderOpsRendered) && (this.numQuadsRendered = quads || 0, 
        this.numRenderOpsRendered = renderOps || 0, this.queueFrameEvent("renderUpdate", {
            quads: this.numQuadsRendered,
            renderOps: this.numRenderOpsRendered
        }));
    }
    requestRenderListUpdate() {
        void 0 !== this.renderer.invalidateQuadBuffer && this.renderer.invalidateQuadBuffer(), 
        this.renderListDirty = !0, this.requestRender();
    }
    buildRenderList(node) {
        !0 === node.isRenderable && (node.renderQuads(this.renderer), this.renderList.push(node));
        const children = node.children, len = children.length;
        for (let i = 0; i < len; i++) {
            const child = children[i];
            0 !== child.worldAlpha && child.renderState !== CoreNodeRenderState.OutOfBounds && this.buildRenderList(child);
        }
    }
    requestRender() {
        this.renderRequested = !0;
    }
    reprocessUpdates(callback) {
        this.reprocessFrame = !0, callback && (this.reprocessCallback = callback);
    }
    resolveTextRenderer(trProps, textRendererOverride = null) {
        var _this$fontHandlers$sd, _this$singleFontHandl;
        if (null !== textRendererOverride) {
            const overrideKey = String(textRendererOverride);
            return void 0 === this.textRenderers[overrideKey] ? (console.warn(`Text renderer override '${overrideKey}' not found.`), 
            null) : this.textRenderers[overrideKey];
        }
        return null !== this.singleFontEngine ? !0 === this.hasOnlyCanvasFontEngine || !0 === (null == (_this$singleFontHandl = this.singleFontHandler) ? void 0 : _this$singleFontHandl.canRenderFont(trProps)) ? this.singleFontEngine : (console.warn("Text renderer cannot render font", trProps), 
        null) : !0 === (null == (_this$fontHandlers$sd = this.fontHandlers.sdf) ? void 0 : _this$fontHandlers$sd.canRenderFont(trProps)) ? this.textRenderers.sdf || null : !0 === this.hasCanvasEngine ? this.textRenderers.canvas || null : (console.warn("No text renderers available. Your text will not render."), 
        null);
    }
    createNode(props, resolved = !1) {
        const resolvedProps = resolved ? props : this.resolveNodeDefaults(props);
        return new CoreNode(this, resolvedProps);
    }
    createTextNode(props, resolved = !1) {
        const resolvedProps = resolved ? props : this.resolveTextNodeDefaults(props), resolvedTextRenderer = this.resolveTextRenderer(resolvedProps, resolvedProps.textRendererOverride);
        if (!resolvedTextRenderer) throw new Error(`No compatible text renderer found for ${resolvedProps.fontFamily}`);
        return new CoreTextNode(this, resolvedProps, resolvedTextRenderer);
    }
    createNodeProps(initial) {
        return this.resolveNodeDefaults(null != initial ? initial : {});
    }
    createTextNodeProps(initial) {
        return this.resolveTextNodeDefaults(null != initial ? initial : {});
    }
    resolveTextNodeDefaults(props) {
        var _props$text, _props$textRendererOv;
        const fontSize = props.fontSize || 16, resolvedProps = this.resolveNodeDefaults(props);
        return resolvedProps.text = null !== (_props$text = props.text) && void 0 !== _props$text ? _props$text : "", 
        resolvedProps.textRendererOverride = null !== (_props$textRendererOv = props.textRendererOverride) && void 0 !== _props$textRendererOv ? _props$textRendererOv : null, 
        resolvedProps.fontSize = fontSize, resolvedProps.fontFamily = props.fontFamily || "sans-serif", 
        resolvedProps.fontStyle = props.fontStyle || "normal", resolvedProps.textAlign = props.textAlign || "left", 
        resolvedProps.offsetY = props.offsetY || 0, resolvedProps.letterSpacing = props.letterSpacing || 0, 
        resolvedProps.lineHeight = props.lineHeight || 1.2, resolvedProps.maxLines = props.maxLines || 0, 
        resolvedProps.verticalAlign = props.verticalAlign || "top", resolvedProps.overflowSuffix = props.overflowSuffix || "...", 
        resolvedProps.wordBreak = props.wordBreak || "break-word", resolvedProps.contain = props.contain || "none", 
        resolvedProps.maxWidth = props.maxWidth || 0, resolvedProps.maxHeight = props.maxHeight || 0, 
        resolvedProps.forceLoad = props.forceLoad || !1, resolvedProps;
    }
    setBoundsMargin(value) {
        this.boundsMargin = Array.isArray(value) ? value : [ value, value, value, value ], 
        this.updateViewportBounds();
    }
    updateViewportBounds() {
        const {appWidth: appWidth, appHeight: appHeight} = this.options;
        this.strictBound = createBound(0, 0, appWidth, appHeight), this.preloadBound = createPreloadBounds(this.strictBound, this.boundsMargin), 
        this.root.strictBound = this.strictBound, this.root.preloadBound = this.preloadBound, 
        this.root.setUpdateType(UpdateType.RenderBounds | UpdateType.Children), this.root.childUpdateType |= UpdateType.RenderBounds;
    }
    trackTimedNode(node) {
        void 0 === this.timedNodes[node.id] && (this.timedNodes[node.id] = node);
    }
    untrackTimedNode(node) {
        void 0 !== this.timedNodes[node.id] && delete this.timedNodes[node.id];
    }
    resolveNodeDefaults(props) {
        var _props$color, _props$scale, _props$mount, _props$pivot, _props$x, _props$y, _props$w, _props$h, _props$alpha, _props$ignoreParentAl, _props$autosize, _props$boundsMargin, _props$clipping, _props$placeholderCol, _props$zIndex, _props$parent, _props$texture, _props$textureOptions, _props$shader, _props$src, _ref9, _props$scaleX, _ref10, _props$scaleY, _props$mountX, _props$mountY, _props$pivotX, _props$pivotY, _props$rotation, _props$rtt;
        const color = null !== (_props$color = props.color) && void 0 !== _props$color ? _props$color : 4294967295;
        let colorTop = color, colorBottom = color, colorLeft = color, colorRight = color, colorTl = color, colorTr = color, colorBl = color, colorBr = color;
        if (void 0 !== props.colorTop || void 0 !== props.colorBottom || void 0 !== props.colorLeft || void 0 !== props.colorRight || void 0 !== props.colorTl || void 0 !== props.colorTr || void 0 !== props.colorBl || void 0 !== props.colorBr) {
            var _ref, _ref2, _props$colorTl, _ref3, _ref4, _props$colorTr, _ref5, _ref6, _props$colorBl, _ref7, _ref8, _props$colorBr;
            const {colorTop: top, colorBottom: bottom, colorLeft: left, colorRight: right} = props;
            colorTop = null != top ? top : color, colorBottom = null != bottom ? bottom : color, 
            colorLeft = null != left ? left : color, colorRight = null != right ? right : color, 
            colorTl = null !== (_ref = null !== (_ref2 = null !== (_props$colorTl = props.colorTl) && void 0 !== _props$colorTl ? _props$colorTl : top) && void 0 !== _ref2 ? _ref2 : left) && void 0 !== _ref ? _ref : color, 
            colorTr = null !== (_ref3 = null !== (_ref4 = null !== (_props$colorTr = props.colorTr) && void 0 !== _props$colorTr ? _props$colorTr : top) && void 0 !== _ref4 ? _ref4 : right) && void 0 !== _ref3 ? _ref3 : color, 
            colorBl = null !== (_ref5 = null !== (_ref6 = null !== (_props$colorBl = props.colorBl) && void 0 !== _props$colorBl ? _props$colorBl : bottom) && void 0 !== _ref6 ? _ref6 : left) && void 0 !== _ref5 ? _ref5 : color, 
            colorBr = null !== (_ref7 = null !== (_ref8 = null !== (_props$colorBr = props.colorBr) && void 0 !== _props$colorBr ? _props$colorBr : bottom) && void 0 !== _ref8 ? _ref8 : right) && void 0 !== _ref7 ? _ref7 : color;
        }
        const scale = null !== (_props$scale = props.scale) && void 0 !== _props$scale ? _props$scale : null, mount = null !== (_props$mount = props.mount) && void 0 !== _props$mount ? _props$mount : 0, pivot = null !== (_props$pivot = props.pivot) && void 0 !== _props$pivot ? _props$pivot : .5, data = {};
        return {
            x: null !== (_props$x = props.x) && void 0 !== _props$x ? _props$x : 0,
            y: null !== (_props$y = props.y) && void 0 !== _props$y ? _props$y : 0,
            w: null !== (_props$w = props.w) && void 0 !== _props$w ? _props$w : 0,
            h: null !== (_props$h = props.h) && void 0 !== _props$h ? _props$h : 0,
            alpha: null !== (_props$alpha = props.alpha) && void 0 !== _props$alpha ? _props$alpha : 1,
            ignoreParentAlpha: null !== (_props$ignoreParentAl = props.ignoreParentAlpha) && void 0 !== _props$ignoreParentAl && _props$ignoreParentAl,
            autosize: null !== (_props$autosize = props.autosize) && void 0 !== _props$autosize && _props$autosize,
            boundsMargin: null !== (_props$boundsMargin = props.boundsMargin) && void 0 !== _props$boundsMargin ? _props$boundsMargin : null,
            clipping: null !== (_props$clipping = props.clipping) && void 0 !== _props$clipping && _props$clipping,
            color: color,
            colorTop: colorTop,
            colorBottom: colorBottom,
            colorLeft: colorLeft,
            colorRight: colorRight,
            colorTl: colorTl,
            colorTr: colorTr,
            colorBl: colorBl,
            colorBr: colorBr,
            placeholderColor: null !== (_props$placeholderCol = props.placeholderColor) && void 0 !== _props$placeholderCol ? _props$placeholderCol : 0,
            zIndex: null !== (_props$zIndex = props.zIndex) && void 0 !== _props$zIndex ? _props$zIndex : 0,
            parent: null !== (_props$parent = props.parent) && void 0 !== _props$parent ? _props$parent : null,
            texture: null !== (_props$texture = props.texture) && void 0 !== _props$texture ? _props$texture : null,
            textureOptions: null !== (_props$textureOptions = props.textureOptions) && void 0 !== _props$textureOptions ? _props$textureOptions : EMPTY_TEXTURE_OPTIONS,
            shader: null !== (_props$shader = props.shader) && void 0 !== _props$shader ? _props$shader : this.defShaderNode,
            src: null !== (_props$src = props.src) && void 0 !== _props$src ? _props$src : null,
            srcHeight: props.srcHeight,
            srcWidth: props.srcWidth,
            srcX: props.srcX,
            srcY: props.srcY,
            scale: scale,
            scaleX: null !== (_ref9 = null !== (_props$scaleX = props.scaleX) && void 0 !== _props$scaleX ? _props$scaleX : scale) && void 0 !== _ref9 ? _ref9 : 1,
            scaleY: null !== (_ref10 = null !== (_props$scaleY = props.scaleY) && void 0 !== _props$scaleY ? _props$scaleY : scale) && void 0 !== _ref10 ? _ref10 : 1,
            mount: mount,
            mountX: null !== (_props$mountX = props.mountX) && void 0 !== _props$mountX ? _props$mountX : mount,
            mountY: null !== (_props$mountY = props.mountY) && void 0 !== _props$mountY ? _props$mountY : mount,
            pivot: pivot,
            pivotX: null !== (_props$pivotX = props.pivotX) && void 0 !== _props$pivotX ? _props$pivotX : pivot,
            pivotY: null !== (_props$pivotY = props.pivotY) && void 0 !== _props$pivotY ? _props$pivotY : pivot,
            rotation: null !== (_props$rotation = props.rotation) && void 0 !== _props$rotation ? _props$rotation : 0,
            rtt: null !== (_props$rtt = props.rtt) && void 0 !== _props$rtt && _props$rtt,
            data: data,
            imageType: props.imageType,
            preventDestroy: props.preventDestroy,
            componentName: props.componentName,
            componentLocation: props.componentLocation
        };
    }
    cleanup(full = !1) {
        this.txMemManager.cleanup(full);
    }
    set clearColor(value) {
        this.renderer.updateClearColor(value), this.renderRequested = !0, this.clrColor = value;
    }
    get clearColor() {
        return this.clrColor;
    }
    loadFont(rendererType, options) {
        const rendererTypeKey = String(rendererType), fontHandler = this.fontHandlers[rendererTypeKey];
        return fontHandler ? fontHandler.loadFont(this, options) : Promise.reject(new Error(`Font handler for renderer type '${rendererTypeKey}' not found. Available types: ${Object.keys(this.fontHandlers).join(", ")}`));
    }
}, Platform = class {}, WebPlatform = class extends Platform {
    createCanvas() {
        return document.createElement("canvas");
    }
    getElementById(id) {
        return document.getElementById(id);
    }
    startLoop(stage) {
        let isIdle = !1, lastFrameTime = 0;
        const runLoop = (currentTime = 0) => {
            if (!0 === stage.isContextLost) return;
            const targetFrameTime = stage.targetFrameTime;
            if (targetFrameTime > 0) {
                const elapsed = currentTime - lastFrameTime;
                if (elapsed < targetFrameTime) {
                    const wait = targetFrameTime - elapsed;
                    return void (wait > 4 ? setTimeout(requestLoop, wait - 4) : requestAnimationFrame(runLoop));
                }
                lastFrameTime = currentTime - elapsed % targetFrameTime;
            } else lastFrameTime = currentTime;
            let scheduled = !1;
            try {
                stage.updateFrameTime();
                const hasActiveAnimations = stage.updateAnimations();
                if (!stage.hasSceneUpdates()) return stage.calculateFps(), setTimeout(requestLoop, Math.max(targetFrameTime, 15)), 
                scheduled = !0, !1 === isIdle && (!0 === stage.renderer.checkForOutOfMemory() && stage.txMemManager.handleOutOfMemory(), 
                stage.shManager.cleanup(), stage.cleanupTextRenderers(), stage.eventBus.emit("idle"), 
                isIdle = !0), !0 === stage.txMemManager.checkCleanup() && stage.txMemManager.cleanup(), 
                void stage.flushFrameEvents();
                isIdle = !1, stage.drawFrame(hasActiveAnimations), stage.flushFrameEvents(), requestAnimationFrame(runLoop), 
                scheduled = !0;
            } catch (error) {
                const handleLoopError = stage.options.handleLoopError;
                void 0 !== handleLoopError && handleLoopError(error), !1 === scheduled && requestAnimationFrame(runLoop);
            }
        }, requestLoop = () => requestAnimationFrame(runLoop);
        requestAnimationFrame(runLoop);
    }
    createImageBitmap(blob, sxOrOptions, sy, sw, sh, options) {
        return "number" == typeof sxOrOptions ? createImageBitmap(blob, sxOrOptions, null != sy ? sy : 0, null != sw ? sw : 0, null != sh ? sh : 0, options) : createImageBitmap(blob, sxOrOptions);
    }
    getTimeStamp() {
        return Date.now();
    }
    addFont(font) {
        document.fonts.add(font);
    }
}, noop = () => {}, RendererMain = class extends EventEmitter {
    constructor(settings, target) {
        var _settings$renderOnlyI, _settings$clearColor, _settings$enableClear, _settings$textLayoutC, _settings$enableConte, _settings$forceWebGL, _settings$disableVert, _settings$inspector, _settings$inspectorOp, _settings$quadBufferS, _settings$fontEngines, _settings$textBaselin, _settings$maxRetryCou, _settings$handleLoopE, _settings$maxRetryCou2;
        super(), this.root = void 0, this.canvas = void 0, this.stage = void 0, this.inspector = null;
        const resolvedTxSettings = this.resolveTxSettings(settings.textureMemory || {});
        settings = {
            appWidth: settings.appWidth || 1920,
            appHeight: settings.appHeight || 1080,
            textureMemory: resolvedTxSettings,
            boundsMargin: settings.boundsMargin || 0,
            renderOnlyInViewport: null === (_settings$renderOnlyI = settings.renderOnlyInViewport) || void 0 === _settings$renderOnlyI || _settings$renderOnlyI,
            deviceLogicalPixelRatio: settings.deviceLogicalPixelRatio || 1,
            devicePhysicalPixelRatio: settings.devicePhysicalPixelRatio || this.windowDevicePixelRatio() || 1,
            clearColor: null !== (_settings$clearColor = settings.clearColor) && void 0 !== _settings$clearColor ? _settings$clearColor : 0,
            fpsUpdateInterval: settings.fpsUpdateInterval || 0,
            enableClear: null === (_settings$enableClear = settings.enableClear) || void 0 === _settings$enableClear || _settings$enableClear,
            targetFPS: settings.targetFPS || 0,
            textLayoutCacheSize: null !== (_settings$textLayoutC = settings.textLayoutCacheSize) && void 0 !== _settings$textLayoutC ? _settings$textLayoutC : 250,
            numImageWorkers: void 0 !== settings.numImageWorkers ? settings.numImageWorkers : 2,
            enableContextSpy: null !== (_settings$enableConte = settings.enableContextSpy) && void 0 !== _settings$enableConte && _settings$enableConte,
            forceWebGL2: null !== (_settings$forceWebGL = settings.forceWebGL2) && void 0 !== _settings$forceWebGL && _settings$forceWebGL,
            disableVertexArrayObject: null !== (_settings$disableVert = settings.disableVertexArrayObject) && void 0 !== _settings$disableVert && _settings$disableVert,
            inspector: null !== (_settings$inspector = settings.inspector) && void 0 !== _settings$inspector && _settings$inspector,
            inspectorOptions: null !== (_settings$inspectorOp = settings.inspectorOptions) && void 0 !== _settings$inspectorOp ? _settings$inspectorOp : {},
            renderEngine: settings.renderEngine,
            quadBufferSize: null !== (_settings$quadBufferS = settings.quadBufferSize) && void 0 !== _settings$quadBufferS ? _settings$quadBufferS : 4194304,
            fontEngines: null !== (_settings$fontEngines = settings.fontEngines) && void 0 !== _settings$fontEngines ? _settings$fontEngines : [],
            textBaselineMode: null !== (_settings$textBaselin = settings.textBaselineMode) && void 0 !== _settings$textBaselin ? _settings$textBaselin : "optical",
            textureProcessingTimeLimit: settings.textureProcessingTimeLimit || 10,
            canvas: settings.canvas,
            createImageBitmapSupport: settings.createImageBitmapSupport || "full",
            premultiplyAlphaHonored: void 0 === settings.premultiplyAlphaHonored || settings.premultiplyAlphaHonored,
            platform: settings.platform || null,
            maxRetryCount: null !== (_settings$maxRetryCou = settings.maxRetryCount) && void 0 !== _settings$maxRetryCou ? _settings$maxRetryCou : 5,
            handleLoopError: null !== (_settings$handleLoopE = settings.handleLoopError) && void 0 !== _settings$handleLoopE ? _settings$handleLoopE : noop
        };
        const {appWidth: appWidth, appHeight: appHeight, deviceLogicalPixelRatio: deviceLogicalPixelRatio, devicePhysicalPixelRatio: devicePhysicalPixelRatio, inspector: inspector} = settings;
        let platform;
        platform = void 0 !== settings.platform && null !== settings.platform && settings.platform.prototype instanceof Platform == !0 ? new settings.platform : new WebPlatform;
        const canvas = settings.canvas || platform.createCanvas(), deviceLogicalWidth = appWidth * deviceLogicalPixelRatio, deviceLogicalHeight = appHeight * deviceLogicalPixelRatio;
        if (this.canvas = canvas, canvas.width = deviceLogicalWidth * devicePhysicalPixelRatio, 
        canvas.height = deviceLogicalHeight * devicePhysicalPixelRatio, canvas.style.width = `${deviceLogicalWidth}px`, 
        canvas.style.height = `${deviceLogicalHeight}px`, this.stage = new Stage({
            appWidth: appWidth,
            appHeight: appHeight,
            boundsMargin: settings.boundsMargin,
            renderOnlyInViewport: settings.renderOnlyInViewport,
            clearColor: settings.clearColor,
            canvas: this.canvas,
            deviceLogicalPixelRatio: deviceLogicalPixelRatio,
            devicePhysicalPixelRatio: devicePhysicalPixelRatio,
            enableContextSpy: settings.enableContextSpy,
            forceWebGL2: settings.forceWebGL2,
            disableVertexArrayObject: settings.disableVertexArrayObject,
            fpsUpdateInterval: settings.fpsUpdateInterval,
            enableClear: settings.enableClear,
            numImageWorkers: settings.numImageWorkers,
            renderEngine: settings.renderEngine,
            textureMemory: resolvedTxSettings,
            eventBus: this,
            quadBufferSize: settings.quadBufferSize,
            fontEngines: settings.fontEngines,
            textBaselineMode: settings.textBaselineMode,
            inspector: null !== settings.inspector,
            targetFPS: settings.targetFPS,
            textLayoutCacheSize: settings.textLayoutCacheSize,
            textureProcessingTimeLimit: settings.textureProcessingTimeLimit,
            createImageBitmapSupport: settings.createImageBitmapSupport,
            premultiplyAlphaHonored: settings.premultiplyAlphaHonored,
            platform: platform,
            maxRetryCount: null !== (_settings$maxRetryCou2 = settings.maxRetryCount) && void 0 !== _settings$maxRetryCou2 ? _settings$maxRetryCou2 : 5,
            handleLoopError: settings.handleLoopError
        }), this.root = this.stage.root, target) {
            let targetEl;
            if (targetEl = "string" == typeof target ? document.getElementById(target) : target, 
            !targetEl) throw new Error("Could not find target element");
            targetEl.appendChild(canvas);
        } else if (settings.canvas !== canvas) throw new Error("New canvas element could not be appended to undefined target");
        inspector && ENABLE_INSPECTOR && (this.inspector = new inspector(canvas, settings));
    }
    resolveTxSettings(textureMemory) {
        var _ref, _textureMemory$critic, _ref2, _textureMemory$target, _ref3, _textureMemory$cleanu, _ref4, _textureMemory$debugL, _ref5, _textureMemory$baseli, _ref6, _textureMemory$doNotE;
        const currentTxSettings = this.stage && this.stage.options.textureMemory || {};
        return {
            criticalThreshold: null !== (_ref = null !== (_textureMemory$critic = null == textureMemory ? void 0 : textureMemory.criticalThreshold) && void 0 !== _textureMemory$critic ? _textureMemory$critic : null == currentTxSettings ? void 0 : currentTxSettings.criticalThreshold) && void 0 !== _ref ? _ref : 2e8,
            targetThresholdLevel: null !== (_ref2 = null !== (_textureMemory$target = null == textureMemory ? void 0 : textureMemory.targetThresholdLevel) && void 0 !== _textureMemory$target ? _textureMemory$target : null == currentTxSettings ? void 0 : currentTxSettings.targetThresholdLevel) && void 0 !== _ref2 ? _ref2 : .8,
            cleanupInterval: null !== (_ref3 = null !== (_textureMemory$cleanu = null == textureMemory ? void 0 : textureMemory.cleanupInterval) && void 0 !== _textureMemory$cleanu ? _textureMemory$cleanu : null == currentTxSettings ? void 0 : currentTxSettings.cleanupInterval) && void 0 !== _ref3 ? _ref3 : 5e3,
            debugLogging: null !== (_ref4 = null !== (_textureMemory$debugL = null == textureMemory ? void 0 : textureMemory.debugLogging) && void 0 !== _textureMemory$debugL ? _textureMemory$debugL : null == currentTxSettings ? void 0 : currentTxSettings.debugLogging) && void 0 !== _ref4 && _ref4,
            baselineMemoryAllocation: null !== (_ref5 = null !== (_textureMemory$baseli = null == textureMemory ? void 0 : textureMemory.baselineMemoryAllocation) && void 0 !== _textureMemory$baseli ? _textureMemory$baseli : null == currentTxSettings ? void 0 : currentTxSettings.baselineMemoryAllocation) && void 0 !== _ref5 ? _ref5 : 26e6,
            doNotExceedCriticalThreshold: null !== (_ref6 = null !== (_textureMemory$doNotE = null == textureMemory ? void 0 : textureMemory.doNotExceedCriticalThreshold) && void 0 !== _textureMemory$doNotE ? _textureMemory$doNotE : null == currentTxSettings ? void 0 : currentTxSettings.doNotExceedCriticalThreshold) && void 0 !== _ref6 && _ref6
        };
    }
    createNode(props, resolved = !1) {
        const node = this.stage.createNode(props, resolved);
        return ENABLE_INSPECTOR && this.inspector ? this.inspector.createNode(node) : node;
    }
    createNodeProps(initial) {
        return this.stage.createNodeProps(initial);
    }
    createTextNode(props, resolved = !1) {
        const textNode = this.stage.createTextNode(props, resolved);
        return ENABLE_INSPECTOR && this.inspector ? this.inspector.createTextNode(textNode) : textNode;
    }
    createTextNodeProps(initial) {
        return this.stage.createTextNodeProps(initial);
    }
    destroyNode(node) {
        return ENABLE_INSPECTOR && this.inspector && this.inspector.destroyNode(node), node.destroy();
    }
    createTexture(textureType, props) {
        return this.stage.txManager.createTexture(textureType, props);
    }
    createShader(shType, props) {
        return this.stage.shManager.createShader(shType, props);
    }
    getNodeById(id) {
        var _this$stage;
        const root = null == (_this$stage = this.stage) ? void 0 : _this$stage.root;
        if (!root) return null;
        const findNode = node => {
            if (node.id === id) return node;
            for (const child of node.children) {
                const found = findNode(child);
                if (found) return found;
            }
            return null;
        };
        return findNode(root);
    }
    toggleFreeze() {
        throw new Error("Not implemented");
    }
    advanceFrame() {
        throw new Error("Not implemented");
    }
    getBufferInfo() {
        return this.stage.renderer.getBufferInfo();
    }
    getCapabilities() {
        return this.stage.renderer.getCapabilities();
    }
    rerender() {
        this.stage.requestRender();
    }
    cleanup() {
        this.stage.cleanup();
    }
    setClearColor(color) {
        this.stage.setClearColor(color);
    }
    setOptions(options) {
        const stage = this.stage;
        if (void 0 !== options.textureMemory) {
            const textureMemory = options.textureMemory = this.resolveTxSettings(options.textureMemory);
            stage.txMemManager.updateSettings(textureMemory), stage.txMemManager.cleanup();
        }
        if (void 0 !== options.boundsMargin) {
            let bm = options.boundsMargin;
            options.boundsMargin = Array.isArray(bm) ? bm : [ bm, bm, bm, bm ];
        }
        const stageOptions = stage.options;
        for (let key in options) stageOptions[key] = options[key];
        var _this$inspector;
        if (void 0 !== options.inspector && ENABLE_INSPECTOR) if (!1 === options.inspector) null == (_this$inspector = this.inspector) || _this$inspector.destroy(), 
        this.inspector = null; else if (null === this.inspector || this.inspector.constructor !== options.inspector) {
            var _this$inspector2;
            this.inspector = new options.inspector(this.canvas, stage.options), null == (_this$inspector2 = this.inspector) || _this$inspector2.createNodes(this.root);
        }
        let needDimensionsUpdate = !1;
        var _this$inspector3, _this$inspector4;
        (options.deviceLogicalPixelRatio || void 0 !== options.devicePhysicalPixelRatio) && (this.stage.pixelRatio = stageOptions.devicePhysicalPixelRatio * stageOptions.deviceLogicalPixelRatio, 
        null == (_this$inspector3 = this.inspector) || _this$inspector3.updateViewport(stageOptions.appWidth, stageOptions.appHeight, stageOptions.deviceLogicalPixelRatio), 
        needDimensionsUpdate = !0);
        void 0 === options.appWidth && void 0 === options.appHeight || (null == (_this$inspector4 = this.inspector) || _this$inspector4.updateViewport(stageOptions.appWidth, stageOptions.appHeight, stageOptions.deviceLogicalPixelRatio), 
        needDimensionsUpdate = !0);
        void 0 !== options.boundsMargin && this.stage.setBoundsMargin(options.boundsMargin), 
        void 0 !== options.clearColor && this.stage.setClearColor(options.clearColor), needDimensionsUpdate && this.updateAppDimensions();
    }
    updateAppDimensions() {
        const {appWidth: appWidth, appHeight: appHeight, deviceLogicalPixelRatio: deviceLogicalPixelRatio, devicePhysicalPixelRatio: devicePhysicalPixelRatio} = this.stage.options, deviceLogicalWidth = appWidth * deviceLogicalPixelRatio, deviceLogicalHeight = appHeight * deviceLogicalPixelRatio;
        this.canvas.width = deviceLogicalWidth * devicePhysicalPixelRatio, this.canvas.height = deviceLogicalHeight * devicePhysicalPixelRatio, 
        this.canvas.style && (this.canvas.style.width = `${deviceLogicalWidth}px`, this.canvas.style.height = `${deviceLogicalHeight}px`), 
        this.stage.renderer.updateViewport(), this.root.w = appWidth, this.root.h = appHeight, 
        this.stage.updateViewportBounds();
    }
    get settings() {
        return this.stage.options;
    }
    get targetFPS() {
        return this.stage.options.targetFPS || 0;
    }
    set targetFPS(fps) {
        this.stage.options.targetFPS = fps > 0 ? fps : 0, this.stage.updateTargetFrameTime();
    }
    windowDevicePixelRatio() {
        return "undefined" != typeof window ? window.devicePixelRatio : void 0;
    }
}, sharedConfig = {
    context: void 0,
    registry: void 0,
    effects: void 0,
    done: !1,
    getContextId() {
        return getContextId(this.context.count);
    },
    getNextContextId() {
        return getContextId(this.context.count++);
    }
};

function getContextId(count) {
    const num = String(count), len = num.length - 1;
    return sharedConfig.context.id + (len ? String.fromCharCode(96 + len) : "") + num;
}

function setHydrateContext(context) {
    sharedConfig.context = context;
}

var equalFn = (a, b) => a === b, $PROXY = Symbol("solid-proxy"), SUPPORTS_PROXY = "function" == typeof Proxy, $TRACK = Symbol("solid-track"), signalOptions = {
    equals: equalFn
}, runEffects = runQueue, STALE = 1, PENDING = 2, UNOWNED = {
    owned: null,
    cleanups: null,
    context: null,
    owner: null
}, NO_INIT = {}, Owner = null, Transition = null, Scheduler = null, ExternalSourceConfig = null, Listener = null, Updates = null, Effects = null, ExecCount = 0;

function createRoot(fn, detachedOwner) {
    const listener = Listener, owner = Owner, unowned = 0 === fn.length, current = void 0 === detachedOwner ? owner : detachedOwner, root = unowned ? UNOWNED : {
        owned: null,
        cleanups: null,
        context: current ? current.context : null,
        owner: current
    }, updateFn = unowned ? fn : () => fn(() => untrack(() => cleanNode(root)));
    Owner = root, Listener = null;
    try {
        return runUpdates(updateFn, !0);
    } finally {
        Listener = listener, Owner = owner;
    }
}

function createSignal(value, options) {
    const s = {
        value: value,
        observers: null,
        observerSlots: null,
        comparator: (options = options ? Object.assign({}, signalOptions, options) : signalOptions).equals || void 0
    };
    return [ readSignal.bind(s), value => ("function" == typeof value && (value = Transition && Transition.running && Transition.sources.has(s) ? value(s.tValue) : value(s.value)), 
    writeSignal(s, value)) ];
}

function createComputed(fn, value, options) {
    const c = createComputation(fn, value, !0, STALE);
    Scheduler && Transition && Transition.running ? Updates.push(c) : updateComputation(c);
}

function createRenderEffect(fn, value, options) {
    const c = createComputation(fn, value, !1, STALE);
    Scheduler && Transition && Transition.running ? Updates.push(c) : updateComputation(c);
}

function createEffect(fn, value, options) {
    runEffects = runUserEffects;
    const c = createComputation(fn, value, !1, STALE), s = SuspenseContext && useContext(SuspenseContext);
    s && (c.suspense = s), options && options.render || (c.user = !0), Effects ? Effects.push(c) : updateComputation(c);
}

function createMemo(fn, value, options) {
    options = options ? Object.assign({}, signalOptions, options) : signalOptions;
    const c = createComputation(fn, value, !0, 0);
    return c.observers = null, c.observerSlots = null, c.comparator = options.equals || void 0, 
    Scheduler && Transition && Transition.running ? (c.tState = STALE, Updates.push(c)) : updateComputation(c), 
    readSignal.bind(c);
}

function createResource(pSource, pFetcher, pOptions) {
    let source, fetcher, options;
    "function" == typeof pFetcher ? (source = pSource, fetcher = pFetcher, options = pOptions || {}) : (source = !0, 
    fetcher = pSource, options = pFetcher || {});
    let pr = null, initP = NO_INIT, id = null, loadedUnderTransition = !1, scheduled = !1, resolved = "initialValue" in options, dynamic = "function" == typeof source && createMemo(source);
    const contexts = new Set, [value, setValue] = (options.storage || createSignal)(options.initialValue), [error, setError] = createSignal(void 0), [track, trigger] = createSignal(void 0, {
        equals: !1
    }), [state, setState] = createSignal(resolved ? "ready" : "unresolved");
    function loadEnd(p, v, error, key) {
        return pr === p && (pr = null, void 0 !== key && (resolved = !0), p !== initP && v !== initP || !options.onHydrated || queueMicrotask(() => options.onHydrated(key, {
            value: v
        })), initP = NO_INIT, Transition && p && loadedUnderTransition ? (Transition.promises.delete(p), 
        loadedUnderTransition = !1, runUpdates(() => {
            Transition.running = !0, completeLoad(v, error);
        }, !1)) : completeLoad(v, error)), v;
    }
    function completeLoad(v, err) {
        runUpdates(() => {
            void 0 === err && setValue(() => v), setState(void 0 !== err ? "errored" : resolved ? "ready" : "unresolved"), 
            setError(err);
            for (const c of contexts.keys()) c.decrement();
            contexts.clear();
        }, !1);
    }
    function read() {
        const c = SuspenseContext && useContext(SuspenseContext), v = value(), err = error();
        if (void 0 !== err && !pr) throw err;
        return Listener && !Listener.user && c && createComputed(() => {
            track(), pr && (c.resolved && Transition && loadedUnderTransition ? Transition.promises.add(pr) : contexts.has(c) || (c.increment(), 
            contexts.add(c)));
        }), v;
    }
    function load(refetching = !0) {
        if (!1 !== refetching && scheduled) return;
        scheduled = !1;
        const lookup = dynamic ? dynamic() : source;
        if (loadedUnderTransition = Transition && Transition.running, null == lookup || !1 === lookup) return void loadEnd(pr, untrack(value));
        let error;
        Transition && pr && Transition.promises.delete(pr);
        const p = initP !== NO_INIT ? initP : untrack(() => {
            try {
                return fetcher(lookup, {
                    value: value(),
                    refetching: refetching
                });
            } catch (fetcherError) {
                error = fetcherError;
            }
        });
        var v;
        if (void 0 === error) return (v = p) && "object" == typeof v && "then" in v ? (pr = p, 
        "v" in p ? (1 === p.s ? loadEnd(pr, p.v, void 0, lookup) : loadEnd(pr, void 0, castError(p.v), lookup), 
        p) : (scheduled = !0, queueMicrotask(() => scheduled = !1), runUpdates(() => {
            setState(resolved ? "refreshing" : "pending"), trigger();
        }, !1), p.then(v => loadEnd(p, v, void 0, lookup), e => loadEnd(p, void 0, castError(e), lookup)))) : (loadEnd(pr, p, void 0, lookup), 
        p);
        loadEnd(pr, void 0, castError(error), lookup);
    }
    sharedConfig.context && (id = sharedConfig.getNextContextId(), "initial" === options.ssrLoadFrom ? initP = options.initialValue : sharedConfig.load && sharedConfig.has(id) && (initP = sharedConfig.load(id))), 
    Object.defineProperties(read, {
        state: {
            get: () => state()
        },
        error: {
            get: () => error()
        },
        loading: {
            get() {
                const s = state();
                return "pending" === s || "refreshing" === s;
            }
        },
        latest: {
            get() {
                if (!resolved) return read();
                const err = error();
                if (err && !pr) throw err;
                return value();
            }
        }
    });
    let owner = Owner;
    return dynamic ? createComputed(() => (owner = Owner, load(!1))) : load(!1), [ read, {
        refetch: info => runWithOwner(owner, () => load(info)),
        mutate: setValue
    } ];
}

function createSelector(source, fn = equalFn, options) {
    const subs = new Map, node = createComputation(p => {
        const v = source();
        for (const [key, val] of subs.entries()) if (fn(key, v) !== fn(key, p)) for (const c of val.values()) c.state = STALE, 
        c.pure ? Updates.push(c) : Effects.push(c);
        return v;
    }, void 0, !0, STALE);
    return updateComputation(node), key => {
        const listener = Listener;
        if (listener) {
            let l;
            (l = subs.get(key)) ? l.add(listener) : subs.set(key, l = new Set([ listener ])), 
            onCleanup(() => {
                l.delete(listener), !l.size && subs.delete(key);
            });
        }
        return fn(key, Transition && Transition.running && Transition.sources.has(node) ? node.tValue : node.value);
    };
}

function batch(fn) {
    return runUpdates(fn, !1);
}

function untrack(fn) {
    if (!ExternalSourceConfig && null === Listener) return fn();
    const listener = Listener;
    Listener = null;
    try {
        return ExternalSourceConfig ? ExternalSourceConfig.untrack(fn) : fn();
    } finally {
        Listener = listener;
    }
}

function on(deps, fn, options) {
    const isArray = Array.isArray(deps);
    let prevInput, defer = options && options.defer;
    return prevValue => {
        let input;
        if (isArray) {
            input = Array(deps.length);
            for (let i = 0; i < deps.length; i++) input[i] = deps[i]();
        } else input = deps();
        if (defer) return defer = !1, prevValue;
        const result = untrack(() => fn(input, prevInput, prevValue));
        return prevInput = input, result;
    };
}

function onMount(fn) {
    createEffect(() => untrack(fn));
}

function onCleanup(fn) {
    return null === Owner || (null === Owner.cleanups ? Owner.cleanups = [ fn ] : Owner.cleanups.push(fn)), 
    fn;
}

function getListener() {
    return Listener;
}

function getOwner() {
    return Owner;
}

function runWithOwner(o, fn) {
    const prev = Owner, prevListener = Listener;
    Owner = o, Listener = null;
    try {
        return runUpdates(fn, !0);
    } catch (err) {
        handleError(err);
    } finally {
        Owner = prev, Listener = prevListener;
    }
}

function startTransition(fn) {
    if (Transition && Transition.running) return fn(), Transition.done;
    const l = Listener, o = Owner;
    return Promise.resolve().then(() => {
        let t;
        return Listener = l, Owner = o, (Scheduler || SuspenseContext) && (t = Transition || (Transition = {
            sources: new Set,
            effects: [],
            promises: new Set,
            disposed: new Set,
            queue: new Set,
            running: !0
        }), t.done || (t.done = new Promise(res => t.resolve = res)), t.running = !0), runUpdates(fn, !1), 
        Listener = Owner = null, t ? t.done : void 0;
    });
}

var SuspenseContext, [transPending, setTransPending] = createSignal(!1);

function createContext(defaultValue, options) {
    const id = Symbol("context");
    return {
        id: id,
        Provider: createProvider(id),
        defaultValue: defaultValue
    };
}

function useContext(context) {
    let value;
    return Owner && Owner.context && void 0 !== (value = Owner.context[context.id]) ? value : context.defaultValue;
}

function children(fn) {
    const children = createMemo(fn), memo = createMemo(() => resolveChildren(children()));
    return memo.toArray = () => {
        const c = memo();
        return Array.isArray(c) ? c : null != c ? [ c ] : [];
    }, memo;
}

function getSuspenseContext() {
    return SuspenseContext || (SuspenseContext = createContext());
}

function readSignal() {
    const runningTransition = Transition && Transition.running;
    if (this.sources && (runningTransition ? this.tState : this.state)) if ((runningTransition ? this.tState : this.state) === STALE) updateComputation(this); else {
        const updates = Updates;
        Updates = null, runUpdates(() => lookUpstream(this), !1), Updates = updates;
    }
    if (Listener) {
        const sSlot = this.observers ? this.observers.length : 0;
        Listener.sources ? (Listener.sources.push(this), Listener.sourceSlots.push(sSlot)) : (Listener.sources = [ this ], 
        Listener.sourceSlots = [ sSlot ]), this.observers ? (this.observers.push(Listener), 
        this.observerSlots.push(Listener.sources.length - 1)) : (this.observers = [ Listener ], 
        this.observerSlots = [ Listener.sources.length - 1 ]);
    }
    return runningTransition && Transition.sources.has(this) ? this.tValue : this.value;
}

function writeSignal(node, value, isComp) {
    let current = Transition && Transition.running && Transition.sources.has(node) ? node.tValue : node.value;
    if (!node.comparator || !node.comparator(current, value)) {
        if (Transition) {
            const TransitionRunning = Transition.running;
            (TransitionRunning || !isComp && Transition.sources.has(node)) && (Transition.sources.add(node), 
            node.tValue = value), TransitionRunning || (node.value = value);
        } else node.value = value;
        node.observers && node.observers.length && runUpdates(() => {
            for (let i = 0; i < node.observers.length; i += 1) {
                const o = node.observers[i], TransitionRunning = Transition && Transition.running;
                TransitionRunning && Transition.disposed.has(o) || ((TransitionRunning ? o.tState : o.state) || (o.pure ? Updates.push(o) : Effects.push(o), 
                o.observers && markDownstream(o)), TransitionRunning ? o.tState = STALE : o.state = STALE);
            }
            if (Updates.length > 1e6) throw Updates = [], new Error;
        }, !1);
    }
    return value;
}

function updateComputation(node) {
    if (!node.fn) return;
    cleanNode(node);
    const time = ExecCount;
    runComputation(node, Transition && Transition.running && Transition.sources.has(node) ? node.tValue : node.value, time), 
    Transition && !Transition.running && Transition.sources.has(node) && queueMicrotask(() => {
        runUpdates(() => {
            Transition && (Transition.running = !0), Listener = Owner = node, runComputation(node, node.tValue, time), 
            Listener = Owner = null;
        }, !1);
    });
}

function runComputation(node, value, time) {
    let nextValue;
    const owner = Owner, listener = Listener;
    Listener = Owner = node;
    try {
        nextValue = node.fn(value);
    } catch (err) {
        return node.pure && (Transition && Transition.running ? (node.tState = STALE, node.tOwned && node.tOwned.forEach(cleanNode), 
        node.tOwned = void 0) : (node.state = STALE, node.owned && node.owned.forEach(cleanNode), 
        node.owned = null)), node.updatedAt = time + 1, handleError(err);
    } finally {
        Listener = listener, Owner = owner;
    }
    (!node.updatedAt || node.updatedAt <= time) && (null != node.updatedAt && "observers" in node ? writeSignal(node, nextValue, !0) : Transition && Transition.running && node.pure ? (Transition.sources.add(node), 
    node.tValue = nextValue) : node.value = nextValue, node.updatedAt = time);
}

function createComputation(fn, init, pure, state = STALE, options) {
    const c = {
        fn: fn,
        state: state,
        updatedAt: null,
        owned: null,
        sources: null,
        sourceSlots: null,
        cleanups: null,
        value: init,
        owner: Owner,
        context: Owner ? Owner.context : null,
        pure: pure
    };
    if (Transition && Transition.running && (c.state = 0, c.tState = state), null === Owner || Owner !== UNOWNED && (Transition && Transition.running && Owner.pure ? Owner.tOwned ? Owner.tOwned.push(c) : Owner.tOwned = [ c ] : Owner.owned ? Owner.owned.push(c) : Owner.owned = [ c ]), 
    ExternalSourceConfig && c.fn) {
        const [track, trigger] = createSignal(void 0, {
            equals: !1
        }), ordinary = ExternalSourceConfig.factory(c.fn, trigger);
        onCleanup(() => ordinary.dispose());
        const triggerInTransition = () => startTransition(trigger).then(() => inTransition.dispose()), inTransition = ExternalSourceConfig.factory(c.fn, triggerInTransition);
        c.fn = x => (track(), Transition && Transition.running ? inTransition.track(x) : ordinary.track(x));
    }
    return c;
}

function runTop(node) {
    const runningTransition = Transition && Transition.running;
    if (0 === (runningTransition ? node.tState : node.state)) return;
    if ((runningTransition ? node.tState : node.state) === PENDING) return lookUpstream(node);
    if (node.suspense && untrack(node.suspense.inFallback)) return node.suspense.effects.push(node);
    const ancestors = [ node ];
    for (;(node = node.owner) && (!node.updatedAt || node.updatedAt < ExecCount); ) {
        if (runningTransition && Transition.disposed.has(node)) return;
        (runningTransition ? node.tState : node.state) && ancestors.push(node);
    }
    for (let i = ancestors.length - 1; i >= 0; i--) {
        if (node = ancestors[i], runningTransition) {
            let top = node, prev = ancestors[i + 1];
            for (;(top = top.owner) && top !== prev; ) if (Transition.disposed.has(top)) return;
        }
        if ((runningTransition ? node.tState : node.state) === STALE) updateComputation(node); else if ((runningTransition ? node.tState : node.state) === PENDING) {
            const updates = Updates;
            Updates = null, runUpdates(() => lookUpstream(node, ancestors[0]), !1), Updates = updates;
        }
    }
}

function runUpdates(fn, init) {
    if (Updates) return fn();
    let wait = !1;
    init || (Updates = []), Effects ? wait = !0 : Effects = [], ExecCount++;
    try {
        const res = fn();
        return function(wait) {
            Updates && (Scheduler && Transition && Transition.running ? function(queue) {
                for (let i = 0; i < queue.length; i++) {
                    const item = queue[i], tasks = Transition.queue;
                    tasks.has(item) || (tasks.add(item), Scheduler(() => {
                        tasks.delete(item), runUpdates(() => {
                            Transition.running = !0, runTop(item);
                        }, !1), Transition && (Transition.running = !1);
                    }));
                }
            }(Updates) : runQueue(Updates), Updates = null);
            if (wait) return;
            let res;
            if (Transition) if (Transition.promises.size || Transition.queue.size) {
                if (Transition.running) return Transition.running = !1, Transition.effects.push.apply(Transition.effects, Effects), 
                Effects = null, void setTransPending(!0);
            } else {
                const sources = Transition.sources, disposed = Transition.disposed;
                Effects.push.apply(Effects, Transition.effects), res = Transition.resolve;
                for (const e of Effects) "tState" in e && (e.state = e.tState), delete e.tState;
                Transition = null, runUpdates(() => {
                    for (const d of disposed) cleanNode(d);
                    for (const v of sources) {
                        if (v.value = v.tValue, v.owned) for (let i = 0, len = v.owned.length; i < len; i++) cleanNode(v.owned[i]);
                        v.tOwned && (v.owned = v.tOwned), delete v.tValue, delete v.tOwned, v.tState = 0;
                    }
                    setTransPending(!1);
                }, !1);
            }
            const e = Effects;
            Effects = null, e.length && runUpdates(() => runEffects(e), !1);
            res && res();
        }(wait), res;
    } catch (err) {
        wait || (Effects = null), Updates = null, handleError(err);
    }
}

function runQueue(queue) {
    for (let i = 0; i < queue.length; i++) runTop(queue[i]);
}

function runUserEffects(queue) {
    let i, userLength = 0;
    for (i = 0; i < queue.length; i++) {
        const e = queue[i];
        e.user ? queue[userLength++] = e : runTop(e);
    }
    if (sharedConfig.context) {
        if (sharedConfig.count) return sharedConfig.effects || (sharedConfig.effects = []), 
        void sharedConfig.effects.push(...queue.slice(0, userLength));
        setHydrateContext();
    }
    for (!sharedConfig.effects || !sharedConfig.done && sharedConfig.count || (queue = [ ...sharedConfig.effects, ...queue ], 
    userLength += sharedConfig.effects.length, delete sharedConfig.effects), i = 0; i < userLength; i++) runTop(queue[i]);
}

function lookUpstream(node, ignore) {
    const runningTransition = Transition && Transition.running;
    runningTransition ? node.tState = 0 : node.state = 0;
    for (let i = 0; i < node.sources.length; i += 1) {
        const source = node.sources[i];
        if (source.sources) {
            const state = runningTransition ? source.tState : source.state;
            state === STALE ? source !== ignore && (!source.updatedAt || source.updatedAt < ExecCount) && runTop(source) : state === PENDING && lookUpstream(source, ignore);
        }
    }
}

function markDownstream(node) {
    const runningTransition = Transition && Transition.running;
    for (let i = 0; i < node.observers.length; i += 1) {
        const o = node.observers[i];
        (runningTransition ? o.tState : o.state) || (runningTransition ? o.tState = PENDING : o.state = PENDING, 
        o.pure ? Updates.push(o) : Effects.push(o), o.observers && markDownstream(o));
    }
}

function cleanNode(node) {
    let i;
    if (node.sources) for (;node.sources.length; ) {
        const source = node.sources.pop(), index = node.sourceSlots.pop(), obs = source.observers;
        if (obs && obs.length) {
            const n = obs.pop(), s = source.observerSlots.pop();
            index < obs.length && (n.sourceSlots[s] = index, obs[index] = n, source.observerSlots[index] = s);
        }
    }
    if (node.tOwned) {
        for (i = node.tOwned.length - 1; i >= 0; i--) cleanNode(node.tOwned[i]);
        delete node.tOwned;
    }
    if (Transition && Transition.running && node.pure) reset(node, !0); else if (node.owned) {
        for (i = node.owned.length - 1; i >= 0; i--) cleanNode(node.owned[i]);
        node.owned = null;
    }
    if (node.cleanups) {
        for (i = node.cleanups.length - 1; i >= 0; i--) node.cleanups[i]();
        node.cleanups = null;
    }
    Transition && Transition.running ? node.tState = 0 : node.state = 0;
}

function reset(node, top) {
    if (top || (node.tState = 0, Transition.disposed.add(node)), node.owned) for (let i = 0; i < node.owned.length; i++) reset(node.owned[i]);
}

function castError(err) {
    return err instanceof Error ? err : new Error("string" == typeof err ? err : "Unknown error", {
        cause: err
    });
}

function handleError(err, owner = Owner) {
    const error = castError(err);
    throw error;
}

function resolveChildren(children) {
    if ("function" == typeof children && !children.length) return resolveChildren(children());
    if (Array.isArray(children)) {
        const results = [];
        for (let i = 0; i < children.length; i++) {
            const result = resolveChildren(children[i]);
            Array.isArray(result) ? results.push.apply(results, result) : results.push(result);
        }
        return results;
    }
    return children;
}

function createProvider(id, options) {
    return function(props) {
        let res;
        return createRenderEffect(() => res = untrack(() => (Owner.context = {
            ...Owner.context,
            [id]: props.value
        }, children(() => props.children))), void 0), res;
    };
}

var FALLBACK = Symbol("fallback");

function dispose(d) {
    for (let i = 0; i < d.length; i++) d[i]();
}

function createComponent$1(Comp, props) {
    return untrack(() => Comp(props || {}));
}

function trueFn() {
    return !0;
}

var propTraps = {
    get: (_, property, receiver) => property === $PROXY ? receiver : _.get(property),
    has: (_, property) => property === $PROXY || _.has(property),
    set: trueFn,
    deleteProperty: trueFn,
    getOwnPropertyDescriptor: (_, property) => ({
        configurable: !0,
        enumerable: !0,
        get: () => _.get(property),
        set: trueFn,
        deleteProperty: trueFn
    }),
    ownKeys: _ => _.keys()
};

function resolveSource(s) {
    return (s = "function" == typeof s ? s() : s) ? s : {};
}

function resolveSources() {
    for (let i = 0, length = this.length; i < length; ++i) {
        const v = this[i]();
        if (void 0 !== v) return v;
    }
}

function mergeProps$1(...sources) {
    let proxy = !1;
    for (let i = 0; i < sources.length; i++) {
        const s = sources[i];
        proxy = proxy || !!s && $PROXY in s, sources[i] = "function" == typeof s ? (proxy = !0, 
        createMemo(s)) : s;
    }
    if (SUPPORTS_PROXY && proxy) return new Proxy({
        get(property) {
            for (let i = sources.length - 1; i >= 0; i--) {
                const v = resolveSource(sources[i])[property];
                if (void 0 !== v) return v;
            }
        },
        has(property) {
            for (let i = sources.length - 1; i >= 0; i--) if (property in resolveSource(sources[i])) return !0;
            return !1;
        },
        keys() {
            const keys = [];
            for (let i = 0; i < sources.length; i++) keys.push(...Object.keys(resolveSource(sources[i])));
            return [ ...new Set(keys) ];
        }
    }, propTraps);
    const sourcesMap = {}, defined = Object.create(null);
    for (let i = sources.length - 1; i >= 0; i--) {
        const source = sources[i];
        if (!source) continue;
        const sourceKeys = Object.getOwnPropertyNames(source);
        for (let i = sourceKeys.length - 1; i >= 0; i--) {
            const key = sourceKeys[i];
            if ("__proto__" === key || "constructor" === key) continue;
            const desc = Object.getOwnPropertyDescriptor(source, key);
            if (defined[key]) {
                const sources = sourcesMap[key];
                sources && (desc.get ? sources.push(desc.get.bind(source)) : void 0 !== desc.value && sources.push(() => desc.value));
            } else defined[key] = desc.get ? {
                enumerable: !0,
                configurable: !0,
                get: resolveSources.bind(sourcesMap[key] = [ desc.get.bind(source) ])
            } : void 0 !== desc.value ? desc : void 0;
        }
    }
    const target = {}, definedKeys = Object.keys(defined);
    for (let i = definedKeys.length - 1; i >= 0; i--) {
        const key = definedKeys[i], desc = defined[key];
        desc && desc.get ? Object.defineProperty(target, key, desc) : target[key] = desc ? desc.value : void 0;
    }
    return target;
}

var narrowedError = name => `Stale read from <${name}>.`;

function For(props) {
    const fallback = "fallback" in props && {
        fallback: () => props.fallback
    };
    return createMemo(function(list, mapFn, options = {}) {
        let items = [], mapped = [], disposers = [], len = 0, indexes = mapFn.length > 1 ? [] : null;
        return onCleanup(() => dispose(disposers)), () => {
            let i, j, newItems = list() || [], newLen = newItems.length;
            return newItems[$TRACK], untrack(() => {
                let newIndices, newIndicesNext, temp, tempdisposers, tempIndexes, start, end, newEnd, item;
                if (0 === newLen) 0 !== len && (dispose(disposers), disposers = [], items = [], 
                mapped = [], len = 0, indexes && (indexes = [])), options.fallback && (items = [ FALLBACK ], 
                mapped[0] = createRoot(disposer => (disposers[0] = disposer, options.fallback())), 
                len = 1); else if (0 === len) {
                    for (mapped = new Array(newLen), j = 0; j < newLen; j++) items[j] = newItems[j], 
                    mapped[j] = createRoot(mapper);
                    len = newLen;
                } else {
                    for (temp = new Array(newLen), tempdisposers = new Array(newLen), indexes && (tempIndexes = new Array(newLen)), 
                    start = 0, end = Math.min(len, newLen); start < end && items[start] === newItems[start]; start++) ;
                    for (end = len - 1, newEnd = newLen - 1; end >= start && newEnd >= start && items[end] === newItems[newEnd]; end--, 
                    newEnd--) temp[newEnd] = mapped[end], tempdisposers[newEnd] = disposers[end], indexes && (tempIndexes[newEnd] = indexes[end]);
                    for (newIndices = new Map, newIndicesNext = new Array(newEnd + 1), j = newEnd; j >= start; j--) item = newItems[j], 
                    i = newIndices.get(item), newIndicesNext[j] = void 0 === i ? -1 : i, newIndices.set(item, j);
                    for (i = start; i <= end; i++) item = items[i], j = newIndices.get(item), void 0 !== j && -1 !== j ? (temp[j] = mapped[i], 
                    tempdisposers[j] = disposers[i], indexes && (tempIndexes[j] = indexes[i]), j = newIndicesNext[j], 
                    newIndices.set(item, j)) : disposers[i]();
                    for (j = start; j < newLen; j++) j in temp ? (mapped[j] = temp[j], disposers[j] = tempdisposers[j], 
                    indexes && (indexes[j] = tempIndexes[j], indexes[j](j))) : mapped[j] = createRoot(mapper);
                    mapped = mapped.slice(0, len = newLen), items = newItems.slice(0);
                }
                return mapped;
            });
            function mapper(disposer) {
                if (disposers[j] = disposer, indexes) {
                    const [s, set] = createSignal(j);
                    return indexes[j] = set, mapFn(newItems[j], s);
                }
                return mapFn(newItems[j]);
            }
        };
    }(() => props.each, props.children, fallback || void 0));
}

function Index(props) {
    const fallback = "fallback" in props && {
        fallback: () => props.fallback
    };
    return createMemo(function(list, mapFn, options = {}) {
        let i, items = [], mapped = [], disposers = [], signals = [], len = 0;
        return onCleanup(() => dispose(disposers)), () => {
            const newItems = list() || [], newLen = newItems.length;
            return newItems[$TRACK], untrack(() => {
                if (0 === newLen) return 0 !== len && (dispose(disposers), disposers = [], items = [], 
                mapped = [], len = 0, signals = []), options.fallback && (items = [ FALLBACK ], 
                mapped[0] = createRoot(disposer => (disposers[0] = disposer, options.fallback())), 
                len = 1), mapped;
                for (items[0] === FALLBACK && (disposers[0](), disposers = [], items = [], mapped = [], 
                len = 0), i = 0; i < newLen; i++) i < items.length && items[i] !== newItems[i] ? signals[i](() => newItems[i]) : i >= items.length && (mapped[i] = createRoot(mapper));
                for (;i < items.length; i++) disposers[i]();
                return len = signals.length = disposers.length = newLen, items = newItems.slice(0), 
                mapped = mapped.slice(0, len);
            });
            function mapper(disposer) {
                disposers[i] = disposer;
                const [s, set] = createSignal(newItems[i]);
                return signals[i] = set, mapFn(s, i);
            }
        };
    }(() => props.each, props.children, fallback || void 0));
}

function Show(props) {
    const keyed = props.keyed, conditionValue = createMemo(() => props.when, void 0, void 0), condition = keyed ? conditionValue : createMemo(conditionValue, void 0, {
        equals: (a, b) => !a == !b
    });
    return createMemo(() => {
        const c = condition();
        if (c) {
            const child = props.children;
            return "function" == typeof child && child.length > 0 ? untrack(() => child(keyed ? c : () => {
                if (!untrack(condition)) throw narrowedError("Show");
                return conditionValue();
            })) : child;
        }
        return props.fallback;
    }, void 0, void 0);
}

function Switch(props) {
    const chs = children(() => props.children), switchFunc = createMemo(() => {
        const ch = chs(), mps = Array.isArray(ch) ? ch : [ ch ];
        let func = () => {};
        for (let i = 0; i < mps.length; i++) {
            const index = i, mp = mps[i], prevFunc = func, conditionValue = createMemo(() => prevFunc() ? void 0 : mp.when, void 0, void 0), condition = mp.keyed ? conditionValue : createMemo(conditionValue, void 0, {
                equals: (a, b) => !a == !b
            });
            func = () => prevFunc() || (condition() ? [ index, conditionValue, mp ] : void 0);
        }
        return func;
    });
    return createMemo(() => {
        const sel = switchFunc()();
        if (!sel) return props.fallback;
        const [index, conditionValue, mp] = sel, child = mp.children;
        return "function" == typeof child && child.length > 0 ? untrack(() => child(mp.keyed ? conditionValue() : () => {
            var _untrack;
            if ((null == (_untrack = untrack(switchFunc)()) ? void 0 : _untrack[0]) !== index) throw narrowedError("Match");
            return conditionValue();
        })) : child;
    }, void 0, void 0);
}

function Match(props) {
    return props;
}

function resetErrorBoundaries() {}

var SuspenseListContext = createContext();

function Suspense(props) {
    let show, ctx, p, flicker, error, counter = 0;
    const [inFallback, setFallback] = createSignal(!1), SuspenseContext = getSuspenseContext(), store = {
        increment: () => {
            1 === ++counter && setFallback(!0);
        },
        decrement: () => {
            0 === --counter && setFallback(!1);
        },
        inFallback: inFallback,
        effects: [],
        resolved: !1
    }, owner = getOwner();
    if (sharedConfig.context && sharedConfig.load) {
        const key = sharedConfig.getContextId();
        let ref = sharedConfig.load(key);
        if (ref && ("object" != typeof ref || 1 !== ref.s ? p = ref : sharedConfig.gather(key)), 
        p && "$$f" !== p) {
            const [s, set] = createSignal(void 0, {
                equals: !1
            });
            flicker = s, p.then(() => {
                if (sharedConfig.done) return set();
                sharedConfig.gather(key), setHydrateContext(ctx), set(), setHydrateContext();
            }, err => {
                error = err, set();
            });
        }
    }
    const listContext = useContext(SuspenseListContext);
    let dispose;
    return listContext && (show = listContext.register(store.inFallback)), onCleanup(() => dispose && dispose()), 
    createComponent$1(SuspenseContext.Provider, {
        value: store,
        get children() {
            return createMemo(() => {
                if (error) throw error;
                if (ctx = sharedConfig.context, flicker) return flicker(), void (flicker = void 0);
                ctx && "$$f" === p && setHydrateContext();
                const rendered = createMemo(() => props.children);
                return createMemo(prev => {
                    const inFallback = store.inFallback(), {showContent: showContent = !0, showFallback: showFallback = !0} = show ? show() : {};
                    return (!inFallback || p && "$$f" !== p) && showContent ? (store.resolved = !0, 
                    dispose && dispose(), dispose = ctx = p = void 0, e = store.effects, Effects.push.apply(Effects, e), 
                    e.length = 0, rendered()) : showFallback ? dispose ? prev : createRoot(disposer => (dispose = disposer, 
                    ctx && (setHydrateContext({
                        id: ctx.id + "F",
                        count: 0
                    }), ctx = void 0), props.fallback), owner) : void 0;
                    var e;
                });
            });
        }
    });
}

var [activeElement, setActiveElement] = createSignal(void 0), DOM_RENDERING = "undefined" != typeof SOLIDTV_DOM_RENDERING && !0 === SOLIDTV_DOM_RENDERING, SHADERS_ENABLED = "undefined" == typeof SOLIDTV_DISABLE_SHADERS || !0 !== SOLIDTV_DISABLE_SHADERS, Config = {
    debug: !1,
    domRendererEnabled: !1,
    focusDebug: !1,
    keyDebug: !1,
    focusHistoryDebug: 0,
    animationsEnabled: !0,
    animationSettings: {
        duration: 250,
        easing: "ease-in-out"
    },
    convertToShader: function(_node, v) {
        let type = "rounded";
        v.border && (type += "WithBorder");
        v.shadow && (type += "WithShadow");
        return renderer$1.createShader(type, v);
    },
    setActiveElement: elm => setActiveElement(elm),
    fontSettings: {
        fontFamily: "Ubuntu",
        fontSize: 100
    },
    fontWeightAlias: {
        thin: 100,
        light: 300,
        regular: "",
        400: "",
        medium: 500,
        bold: 700,
        black: 900
    },
    focusStateKey: "$focus",
    lockStyles: !0,
    rendererOptions: {},
    stateOrder: []
}, NodeType_Element = "element", NodeType_TextNode = "textNode", NodeType_Text = "text", TextNode = class {
    constructor(text) {
        this._type = "text", this.parent = void 0, this.text = void 0, this.text = text;
    }
};

function log(msg, node, ...args) {
    0;
}

var isFunction = obj => "function" == typeof obj;

function isArray(item) {
    return Array.isArray(item);
}

function isString(item) {
    return "string" == typeof item;
}

function isInteger(item) {
    return Number.isInteger(item);
}

function isINode(node) {
    return "destroy" in node && "function" == typeof node.destroy;
}

function isElementNode(node) {
    return node instanceof ElementNode;
}

function isElementText(node) {
    return node._type === NodeType_TextNode;
}

function isTextNode(node) {
    return node._type === NodeType_Text;
}

function spliceItem(arr, item, deleteCount, ...insert) {
    const index = arr.indexOf(item);
    return index > -1 && arr.splice(index, deleteCount, ...insert), index;
}

function isFocused(el) {
    var _el$states;
    return null == el || null == (_el$states = el.states) ? void 0 : _el$states.has(Config.focusStateKey);
}

var _document$documentEle, hasFocus = isFocused, colorToRgba = c => `rgba(${c >> 24 & 255},${c >> 16 & 255},${c >> 8 & 255},${(255 & c) / 255})`;

function buildGradientStops(colors, stops) {
    if (!Array.isArray(colors) || 0 === colors.length) return "";
    const positions = [];
    if (Array.isArray(stops) && stops.length === colors.length) for (const v of stops) {
        if ("number" != typeof v || !isFinite(v)) {
            positions.push(0);
            continue;
        }
        let pct = v <= 1 ? 100 * v : v;
        pct < 0 && (pct = 0), pct > 100 && (pct = 100), positions.push(pct);
    } else {
        const lastIndex = colors.length - 1;
        for (let i = 0; i < colors.length; i++) positions.push(0 === lastIndex ? 0 : i / lastIndex * 100);
    }
    if (positions.length !== colors.length) for (;positions.length < colors.length; ) positions.push(0 === positions.length ? 0 : 100);
    return colors.map((color, idx) => `${colorToRgba(color)} ${positions[idx].toFixed(2)}%`).join(", ");
}

function applySubTextureScaling(node, img, srcPos) {
    var _node$props$srcWidth, _node$props$srcHeight;
    if (!srcPos) return;
    const regionW = null !== (_node$props$srcWidth = node.props.srcWidth) && void 0 !== _node$props$srcWidth ? _node$props$srcWidth : srcPos.w, regionH = null !== (_node$props$srcHeight = node.props.srcHeight) && void 0 !== _node$props$srcHeight ? _node$props$srcHeight : srcPos.h;
    if (!regionW || !regionH) return;
    const targetW = node.props.w || regionW, targetH = node.props.h || regionH;
    if (targetW === regionW && targetH === regionH) return;
    const naturalW = img.naturalWidth || regionW, naturalH = img.naturalHeight || regionH, scaleX = targetW / regionW, scaleY = targetH / regionH;
    img.style.width = naturalW + "px", img.style.height = naturalH + "px", img.style.objectFit = "none", 
    img.style.objectPosition = "0 0", img.style.transformOrigin = "0 0";
    const translateX = Math.round(-srcPos.x * scaleX), translateY = Math.round(-srcPos.y * scaleY);
    if (img.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scaleX}, ${scaleY})`, 
    img.style.setProperty("-webkit-transform", img.style.transform), node.divBg) {
        const styleEl = node.divBg.style;
        if (styleEl.maskImage || styleEl.webkitMaskImage || /mask-image:/.test(node.divBg.getAttribute("style") || "")) {
            var _styleEl$setProperty, _styleEl$setProperty2, _styleEl$setProperty3, _styleEl$setProperty4;
            img.style.display = "none";
            const maskW = Math.round(naturalW * scaleX), maskH = Math.round(naturalH * scaleY), maskPosX = translateX, maskPosY = translateY;
            null == (_styleEl$setProperty = styleEl.setProperty) || _styleEl$setProperty.call(styleEl, "mask-size", `${maskW}px ${maskH}px`), 
            null == (_styleEl$setProperty2 = styleEl.setProperty) || _styleEl$setProperty2.call(styleEl, "mask-position", `${maskPosX}px ${maskPosY}px`), 
            null == (_styleEl$setProperty3 = styleEl.setProperty) || _styleEl$setProperty3.call(styleEl, "-webkit-mask-size", `${maskW}px ${maskH}px`), 
            null == (_styleEl$setProperty4 = styleEl.setProperty) || _styleEl$setProperty4.call(styleEl, "-webkit-mask-position", `${maskPosX}px ${maskPosY}px`);
        }
    }
}

function applyEasing(easing, progress) {
    if (isFunction(easing)) return easing(progress);
    switch (easing) {
      case "linear":
      default:
        return progress;

      case "ease-in":
        return progress * progress;

      case "ease-out":
        return progress * (2 - progress);

      case "ease-in-out":
        return progress < .5 ? 2 * progress * progress : (4 - 2 * progress) * progress - 1;
    }
}

function interpolate(start, end, t) {
    return start + (end - start) * t;
}

function interpolateProp(name, start, end, t) {
    return name.startsWith("color") ? function(start, end, t) {
        return (interpolate(start >> 24 & 255, end >> 24 & 255, t) << 24 | interpolate(start >> 16 & 255, end >> 16 & 255, t) << 16 | interpolate(start >> 8 & 255, end >> 8 & 255, t) << 8 | interpolate(255 & start, 255 & end, t)) >>> 0;
    }(start, end, t) : interpolate(start, end, t);
}

function isRenderStateInBounds(state) {
    return 4 === state || 8 === state;
}

function nodeHasTextureSource(node) {
    var _node$props$texture;
    const textureType = null == (_node$props$texture = node.props.texture) ? void 0 : _node$props$texture.type;
    return !!node.props.src || textureType === TextureType.image || textureType === TextureType.subTexture;
}

function computeRenderStateForNode(node) {
    var _stageRoot$props$w, _stageRoot$props$h, _node$props$boundsMar, _node$props$w, _node$props$h;
    const stageRoot = node.stage.root;
    if (!stageRoot || stageRoot === node) return null;
    const rootWidth = null !== (_stageRoot$props$w = stageRoot.props.w) && void 0 !== _stageRoot$props$w ? _stageRoot$props$w : 0, rootHeight = null !== (_stageRoot$props$h = stageRoot.props.h) && void 0 !== _stageRoot$props$h ? _stageRoot$props$h : 0;
    if (rootWidth <= 0 || rootHeight <= 0) return 4;
    const rootLeft = stageRoot.absX, rootTop = stageRoot.absY, rootRight = rootLeft + rootWidth, rootBottom = rootTop + rootHeight, [marginTop, marginRight, marginBottom, marginLeft] = null == (margin = null !== (_node$props$boundsMar = node.props.boundsMargin) && void 0 !== _node$props$boundsMar ? _node$props$boundsMar : node.stage.renderer.boundsMargin) ? [ 0, 0, 0, 0 ] : "number" == typeof margin ? [ margin, margin, margin, margin ] : Array.isArray(margin) && 4 === margin.length ? [ null !== (_margin$ = margin[0]) && void 0 !== _margin$ ? _margin$ : 0, null !== (_margin$2 = margin[1]) && void 0 !== _margin$2 ? _margin$2 : 0, null !== (_margin$3 = margin[2]) && void 0 !== _margin$3 ? _margin$3 : 0, null !== (_margin$4 = margin[3]) && void 0 !== _margin$4 ? _margin$4 : 0 ] : [ 0, 0, 0, 0 ];
    var margin, _margin$, _margin$2, _margin$3, _margin$4;
    const width = null !== (_node$props$w = node.props.w) && void 0 !== _node$props$w ? _node$props$w : 0, height = null !== (_node$props$h = node.props.h) && void 0 !== _node$props$h ? _node$props$h : 0, left = node.absX, top = node.absY, right = left + width, bottom = top + height;
    return right >= rootLeft - marginLeft && left <= rootRight + marginRight && bottom >= rootTop - marginTop && top <= rootBottom + marginBottom ? right >= rootLeft && left <= rootRight && bottom >= rootTop && top <= rootBottom ? 8 : 4 : 2;
}

var _styleRef = "undefined" != typeof document && (null == (_document$documentEle = document.documentElement) ? void 0 : _document$documentEle.style) || {}, supportsObjectFit = "objectFit" in _styleRef, supportsObjectPosition = "objectPosition" in _styleRef, supportsMixBlendMode = "mixBlendMode" in _styleRef, supportsStandardMask = "maskImage" in _styleRef, supportsWebkitMask = "webkitMaskImage" in _styleRef, supportsCssMask = supportsStandardMask || supportsWebkitMask, animationTasks = [], animationFrameRequested = !1;

function requestAnimationUpdate() {
    !animationFrameRequested && animationTasks.length > 0 && (animationFrameRequested = !0, 
    requestAnimationFrame(updateAnimations));
}

function updateAnimations(time) {
    animationFrameRequested = !1;
    for (let i = 0; i < animationTasks.length; i++) {
        const task = animationTasks[i];
        if (null != task.pausedTime) continue;
        const elapsed = time - task.timeStart;
        if (elapsed < task.settings.delay) {
            requestAnimationUpdate();
            continue;
        }
        const activeTime = elapsed - task.settings.delay;
        if (activeTime >= task.settings.duration) {
            task.settings.loop || task.iteration < task.settings.repeat - 1 ? (task.iteration++, 
            task.timeStart = time - task.settings.delay, requestAnimationUpdate()) : (Object.assign(task.node.props, task.propsEnd), 
            task.node.boundsDirty = !0, task.node.markChildrenBoundsDirty(), updateNodeStyles(task.node), 
            task.stop(), i--);
            continue;
        }
        let t = activeTime / task.settings.duration;
        t = applyEasing(task.settings.easing, t);
        for (const prop in task.propsEnd) {
            const start = task.propsStart[prop], end = task.propsEnd[prop];
            task.node.props[prop] = interpolateProp(prop, start, end, t);
        }
        updateNodeStyles(task.node);
    }
    requestAnimationUpdate();
}

var AnimationController = class {
    constructor(node, props, rawSettings) {
        var _rawSettings$duration, _rawSettings$delay, _rawSettings$easing, _rawSettings$loop, _rawSettings$repeat, _rawSettings$adaptive;
        this.node = void 0, this.state = "paused", this.stopPromise = null, this.stopResolve = null, 
        this.propsStart = {}, this.propsEnd = {}, this.timeStart = performance.now(), this.timeEnd = void 0, 
        this.settings = void 0, this.iteration = 0, this.pausedTime = null, this.node = node, 
        this.settings = {
            duration: null !== (_rawSettings$duration = rawSettings.duration) && void 0 !== _rawSettings$duration ? _rawSettings$duration : 300,
            delay: null !== (_rawSettings$delay = rawSettings.delay) && void 0 !== _rawSettings$delay ? _rawSettings$delay : 0,
            easing: null !== (_rawSettings$easing = rawSettings.easing) && void 0 !== _rawSettings$easing ? _rawSettings$easing : "linear",
            loop: null !== (_rawSettings$loop = rawSettings.loop) && void 0 !== _rawSettings$loop && _rawSettings$loop,
            repeat: null !== (_rawSettings$repeat = rawSettings.repeat) && void 0 !== _rawSettings$repeat ? _rawSettings$repeat : 1,
            stopMethod: !1,
            adaptiveDuration: null !== (_rawSettings$adaptive = rawSettings.adaptiveDuration) && void 0 !== _rawSettings$adaptive && _rawSettings$adaptive
        }, this.timeEnd = this.timeStart + this.settings.delay + this.settings.duration;
        for (const [prop, value] of Object.entries(props)) null != value && "number" == typeof value && (this.propsStart[prop] = node.props[prop], 
        this.propsEnd[prop] = value);
        animationTasks.push(this);
    }
    start() {
        return null != this.pausedTime ? (this.timeStart += performance.now() - this.pausedTime, 
        this.pausedTime = null) : this.timeStart = performance.now(), this.state = "running", 
        requestAnimationUpdate(), this;
    }
    pause() {
        return this.pausedTime = performance.now(), this.state = "paused", this;
    }
    stop() {
        const index = animationTasks.indexOf(this);
        return -1 !== index && animationTasks.splice(index, 1), this.state = "stopped", 
        this.stopResolve && (this.stopResolve(), this.stopResolve = null, this.stopPromise = null), 
        this;
    }
    restore() {
        return this;
    }
    waitUntilStopped() {
        var _this$stopPromise;
        return null !== (_this$stopPromise = this.stopPromise) && void 0 !== _this$stopPromise || (this.stopPromise = new Promise(resolve => {
            this.stopResolve = resolve;
        })), this.stopPromise;
    }
    on() {
        return this;
    }
    once() {
        return this;
    }
    off() {
        return this;
    }
    emit() {
        return this;
    }
};

function animate(props, settings) {
    return new AnimationController(this, props, settings);
}

var elMap = new WeakMap;

function updateNodeParent(node) {
    const parent = node.props.parent;
    var _node$div$parentNode;
    parent instanceof DOMNode ? elMap.get(parent).appendChild(node.div) : null == (_node$div$parentNode = node.div.parentNode) || _node$div$parentNode.removeChild(node.div);
}

function buildTransformCSS(props) {
    const transforms = [], {x: x, y: y} = props, hasMountX = null != props.mountX && 0 !== props.mountX, hasMountY = null != props.mountY && 0 !== props.mountY;
    return 0 !== x && transforms.push(`translateX(${x}px)`), hasMountX && transforms.push(`translateX(${100 * -props.mountX}%)`), 
    0 !== y && transforms.push(`translateY(${y}px)`), hasMountY && transforms.push(`translateY(${100 * -props.mountY}%)`), 
    0 !== props.rotation && transforms.push(`rotate(${props.rotation}rad)`), 1 !== props.scale && null != props.scale ? transforms.push(`scale(${props.scale})`) : (1 !== props.scaleX && transforms.push(`scaleX(${props.scaleX})`), 
    1 !== props.scaleY && transforms.push(`scaleY(${props.scaleY})`)), transforms.join(" ");
}

function updateTransformOnly(node) {
    const transform = buildTransformCSS(node.props), s = node.div.style;
    transform.length > 0 ? s.transform = `${transform}` : s.transform = "", updateRenderStateIfNeeded(node);
}

function updateRenderStateIfNeeded(node) {
    if (!(node instanceof DOMNode) || node === node.stage.root) return;
    const hasTextureSrc = nodeHasTextureSource(node);
    if (hasTextureSrc && node.boundsDirty) {
        const next = computeRenderStateForNode(node);
        null != next && node.updateRenderState(next), node.boundsDirty = !1;
    } else hasTextureSrc || (node.boundsDirty = !1);
}

function applyLegacyObjectFit(node, img, srcPos) {
    var _node$props$textureOp;
    const resizeMode = null == (_node$props$textureOp = node.props.textureOptions) ? void 0 : _node$props$textureOp.resizeMode;
    !function(node, img, resizeMode, clipX, clipY, srcPos, supportsObjectFit, supportsObjectPosition) {
        if (supportsObjectFit && supportsObjectPosition) return;
        const containerW = node.props.w || img.naturalWidth, containerH = node.props.h || img.naturalHeight, naturalW = img.naturalWidth || 1, naturalH = img.naturalHeight || 1;
        let drawW = naturalW, drawH = naturalH;
        switch ((null == resizeMode ? void 0 : resizeMode.type) || (srcPos ? "none" : "fill")) {
          case "cover":
            {
                const scale = Math.max(containerW / naturalW, containerH / naturalH);
                drawW = naturalW * scale, drawH = naturalH * scale;
                break;
            }

          case "contain":
            {
                const scale = Math.min(containerW / naturalW, containerH / naturalH);
                drawW = naturalW * scale, drawH = naturalH * scale;
                break;
            }

          case "fill":
            drawW = containerW, drawH = containerH;
        }
        let offsetX = (containerW - drawW) * clipX, offsetY = (containerH - drawH) * clipY;
        srcPos && (offsetX = -srcPos.x, offsetY = -srcPos.y);
        const styleParts = [ "position: absolute", `width: ${Math.round(drawW)}px`, `height: ${Math.round(drawH)}px`, `left: ${Math.round(offsetX)}px`, `top: ${Math.round(offsetY)}px`, "display: block", "pointer-events: none" ];
        img.style.removeProperty("object-fit"), img.style.removeProperty("object-position"), 
        "none" === (null == resizeMode ? void 0 : resizeMode.type) && (styleParts[1] = `width: ${naturalW}px`, 
        styleParts[2] = `height: ${naturalH}px`), img.setAttribute("style", styleParts.join("; ") + ";");
    }(node, img, resizeMode, "contain" !== (null == resizeMode ? void 0 : resizeMode.type) && (null == resizeMode ? void 0 : resizeMode.clipX) ? null == resizeMode ? void 0 : resizeMode.clipX : .5, "contain" !== (null == resizeMode ? void 0 : resizeMode.type) && (null == resizeMode ? void 0 : resizeMode.clipY) ? null == resizeMode ? void 0 : resizeMode.clipY : .5, srcPos, supportsObjectFit, supportsObjectPosition);
}

function updateNodeStyles(node) {
    const {props: props} = node;
    let style = `position: absolute; z-index: ${props.zIndex};`;
    1 !== props.alpha && (style += `opacity: ${props.alpha};`), props.clipping && (style += "overflow: hidden;");
    {
        const transform = buildTransformCSS(props);
        transform.length > 0 && (style += `transform: ${transform};`);
    }
    if (node instanceof DOMText) {
        const textProps = node.props;
        null != textProps.color && 0 !== textProps.color && (style += `color: ${colorToRgba(textProps.color)};`), 
        textProps.fontFamily && (style += `font-family: ${textProps.fontFamily};`), textProps.fontSize && (style += `font-size: ${textProps.fontSize}px;`), 
        "normal" !== textProps.fontStyle && (style += `font-style: ${textProps.fontStyle};`), 
        "normal" !== textProps.fontWeight && (style += `font-weight: ${textProps.fontWeight};`), 
        textProps.fontStretch && "normal" !== textProps.fontStretch && (style += `font-stretch: ${textProps.fontStretch};`), 
        textProps.lineHeight && (style += `line-height: ${textProps.lineHeight}px;`), textProps.letterSpacing && (style += `letter-spacing: ${textProps.letterSpacing}px;`), 
        "left" !== textProps.textAlign && (style += `text-align: ${textProps.textAlign};`);
        let maxLines = textProps.maxLines || 1 / 0;
        switch (textProps.contain) {
          case "width":
            textProps.maxWidth && textProps.maxWidth > 0 ? ("center" === node.textAlign ? style += `width: ${textProps.maxWidth}px;` : style += `max-width: ${textProps.maxWidth}px;`, 
            style += "overflow: hidden;") : style += "width: 100%;";
            break;

          case "both":
            {
                const lineHeight = function(props) {
                    return props.lineHeight || Config.fontSettings.lineHeight || 1.2 * props.fontSize;
                }(textProps), widthConstraint = textProps.maxWidth && textProps.maxWidth > 0 ? `${textProps.maxWidth}px` : "100%";
                let height = (textProps.maxHeight && textProps.maxHeight > 0 ? textProps.maxHeight : props.h) || 0;
                if (height > 0) {
                    const maxLinesByHeight = Math.max(1, Math.floor(height / lineHeight));
                    maxLines = Math.min(maxLines, maxLinesByHeight), height = Math.max(lineHeight, maxLines * lineHeight);
                } else maxLines = Number.isFinite(maxLines) ? Math.max(1, maxLines) : 1, height = maxLines * lineHeight;
                style += `width: ${widthConstraint}; height: ${height}px; overflow: hidden;`;
                break;
            }

          case "none":
            style += "width: -webkit-max-content;", style += "width: max-content;";
        }
        if (style += "white-space: pre-wrap;", maxLines !== 1 / 0 && (style += `display: -webkit-box;\n        overflow: hidden;\n        -webkit-line-clamp: ${maxLines};\n        line-clamp: ${maxLines};\n        -webkit-box-orient: vertical;`), 
        null != textProps.offsetY && 0 !== textProps.offsetY && (style += `margin-top: ${textProps.offsetY}px;`), 
        textProps.wordBreak) {
            const wb = textProps.wordBreak;
            "normal" !== wb && (style += "break-all" === wb ? "word-break: break-all;" : "keep-all" === wb ? "word-break: keep-all;" : "break-word" === wb ? "word-wrap: break-word; overflow-wrap: break-word;" : "overflow-wrap: break-word;");
        }
    } else {
        var _props$shader;
        0 !== props.w && (style += `width: ${props.w < 0 ? 0 : props.w}px;`), 0 !== props.h && (style += `height: ${props.h}px;`);
        const vGradient = props.colorBottom !== props.colorTop ? `linear-gradient(to bottom, ${colorToRgba(props.colorTop)}, ${colorToRgba(props.colorBottom)})` : null, hGradient = props.colorLeft !== props.colorRight ? `linear-gradient(to right, ${colorToRgba(props.colorLeft)}, ${colorToRgba(props.colorRight)})` : null, gradient = vGradient && hGradient ? `${vGradient}, ${hGradient}` : vGradient || hGradient;
        let srcImg = null, srcPos = null, rawImgSrc = null;
        if (null != props.texture && props.texture.type === TextureType.subTexture) {
            const texture = props.texture;
            srcPos = texture.props, rawImgSrc = texture.props.texture.props.src;
        } else props.src && (rawImgSrc = props.src);
        rawImgSrc && (srcImg = `url(${rawImgSrc})`);
        let bgStyle = "", borderStyle = "", radiusStyle = "", maskStyle = "", needsBackgroundLayer = !1, imgStyle = "", hasDivBgTint = !1, hasTint = !1;
        if (rawImgSrc) {
            var _props$textureOptions;
            hasTint = 4294967295 !== props.color && 0 !== props.color, hasTint ? (bgStyle += `background-color: ${colorToRgba(props.color)};`, 
            srcImg && (maskStyle += `mask-image: ${srcImg};`, maskStyle += null !== srcPos ? `mask-position: -${srcPos.x}px -${srcPos.y}px;` : "mask-size: 100% 100%;", 
            hasDivBgTint = !0)) : (gradient && (maskStyle += `mask-image: ${gradient};`), 0 !== props.placeholderColor && (bgStyle += `background-color: ${colorToRgba(props.placeholderColor)};`));
            const imgStyleParts = [ "position: absolute", "top: 0", "left: 0", "right: 0", "bottom: 0", "display: block", "pointer-events: none", "opacity: " + (node.imageLoading ? 0 : 1), "transition: opacity 100ms linear" ];
            if (null == (_props$textureOptions = props.textureOptions.resizeMode) ? void 0 : _props$textureOptions.type) {
                var _resizeMode$clipX, _resizeMode$clipY;
                const resizeMode = props.textureOptions.resizeMode;
                imgStyleParts.push("width: 100%"), imgStyleParts.push("height: 100%"), imgStyleParts.push(`object-fit: ${resizeMode.type}`);
                const clipX = null !== (_resizeMode$clipX = resizeMode.clipX) && void 0 !== _resizeMode$clipX ? _resizeMode$clipX : .5, clipY = null !== (_resizeMode$clipY = resizeMode.clipY) && void 0 !== _resizeMode$clipY ? _resizeMode$clipY : .5;
                imgStyleParts.push(`object-position: ${100 * clipX}% ${100 * clipY}%`);
            } else null !== srcPos ? (imgStyleParts.push("width: auto"), imgStyleParts.push("height: auto"), 
            imgStyleParts.push("object-fit: none"), imgStyleParts.push(`object-position: -${srcPos.x}px -${srcPos.y}px`)) : props.w && !props.h ? (imgStyleParts.push("width: 100%"), 
            imgStyleParts.push("height: auto")) : props.h && !props.w ? (imgStyleParts.push("width: auto"), 
            imgStyleParts.push("height: 100%")) : (imgStyleParts.push("width: 100%"), imgStyleParts.push("height: 100%"), 
            imgStyleParts.push("object-fit: fill"));
            hasTint && (supportsMixBlendMode ? imgStyleParts.push("mix-blend-mode: multiply") : imgStyleParts.push("opacity: 1")), 
            imgStyle = imgStyleParts.join("; ") + ";";
        } else gradient ? (bgStyle += `background-image: ${gradient};`, bgStyle += "background-repeat: no-repeat;", 
        bgStyle += "background-size: 100% 100%;") : 0 !== props.color && (bgStyle += `background-color: ${colorToRgba(props.color)};`);
        if (null != (null == (_props$shader = props.shader) ? void 0 : _props$shader.props)) {
            var _shaderProps$borderG, _shaderProps$borderA;
            const shaderProps = props.shader.props, borderWidth = shaderProps["border-w"], borderColor = shaderProps["border-color"], borderGap = null !== (_shaderProps$borderG = shaderProps["border-gap"]) && void 0 !== _shaderProps$borderG ? _shaderProps$borderG : 0, borderAlign = null !== (_shaderProps$borderA = shaderProps["border-align"]) && void 0 !== _shaderProps$borderA ? _shaderProps$borderA : "inside", radius = shaderProps.radius, borderWidthIsNumber = "number" == typeof borderWidth, borderWidthIsArray = Array.isArray(borderWidth);
            if ((borderWidthIsNumber && 0 !== borderWidth || borderWidthIsArray && borderWidth.some(w => "number" == typeof w && 0 !== w)) && "number" == typeof borderColor && 0 !== borderColor) {
                const rgbaColor = colorToRgba(borderColor);
                if (borderWidthIsNumber) {
                    let insideWidth = 0, outsideWidth = 0;
                    "inside" === borderAlign ? insideWidth = borderWidth : "center" === borderAlign ? (insideWidth = borderWidth / 2, 
                    outsideWidth = borderWidth / 2) : outsideWidth = borderWidth, outsideWidth += borderGap, 
                    insideWidth -= borderGap, insideWidth < 0 && (outsideWidth += insideWidth, insideWidth = 0), 
                    outsideWidth < 0 && (insideWidth += outsideWidth, outsideWidth = 0);
                    const shadows = [];
                    outsideWidth > 0 && shadows.push(`0 0 0 ${outsideWidth}px ${rgbaColor}`), insideWidth > 0 && shadows.push(`inset 0 0 0 ${insideWidth}px ${rgbaColor}`), 
                    shadows.length > 0 && (borderStyle += `box-shadow: ${shadows.join(", ")};`);
                } else if (borderWidthIsArray) {
                    var _shaderProps$borderT, _shaderProps$borderR, _shaderProps$borderB, _shaderProps$borderL;
                    const widths = [ null !== (_shaderProps$borderT = shaderProps["border-top"]) && void 0 !== _shaderProps$borderT ? _shaderProps$borderT : borderWidth[0], null !== (_shaderProps$borderR = shaderProps["border-right"]) && void 0 !== _shaderProps$borderR ? _shaderProps$borderR : borderWidth[1], null !== (_shaderProps$borderB = shaderProps["border-bottom"]) && void 0 !== _shaderProps$borderB ? _shaderProps$borderB : borderWidth[2], null !== (_shaderProps$borderL = shaderProps["border-left"]) && void 0 !== _shaderProps$borderL ? _shaderProps$borderL : borderWidth[3] ], sides = [ "top", "right", "bottom", "left" ];
                    for (let i = 0; i < sides.length; i++) {
                        const width = widths[i];
                        "number" == typeof width && 0 !== width && (borderStyle += `border-${sides[i]}: ${width}px solid ${rgbaColor};`);
                    }
                }
            }
            if ("number" == typeof radius && radius > 0 ? radiusStyle += `border-radius: ${radius}px;` : Array.isArray(radius) && 4 === radius.length && (radiusStyle += `border-radius: ${radius[0]}px ${radius[1]}px ${radius[2]}px ${radius[3]}px;`), 
            "radial" in shaderProps) {
                const rg = shaderProps.radial, colors = Array.isArray(null == rg ? void 0 : rg.colors) ? rg.colors : [], stops = Array.isArray(null == rg ? void 0 : rg.stops) ? rg.stops : void 0, pivot = Array.isArray(null == rg ? void 0 : rg.pivot) ? rg.pivot : [ .5, .5 ], width = "number" == typeof (null == rg ? void 0 : rg.w) ? rg.w : props.w || 0, height = "number" == typeof (null == rg ? void 0 : rg.h) ? rg.h : width;
                if (colors.length > 0) {
                    const gradientStops = buildGradientStops(colors, stops);
                    if (gradientStops) if (1 === colors.length) srcImg || gradient ? maskStyle += `mask-image: linear-gradient(${gradientStops});` : bgStyle += `background-color: ${colorToRgba(colors[0])};`; else {
                        var _pivot$, _pivot$2;
                        const isEllipse = width > 0 && height > 0 && width !== height, pivotX = 100 * (null !== (_pivot$ = pivot[0]) && void 0 !== _pivot$ ? _pivot$ : .5), pivotY = 100 * (null !== (_pivot$2 = pivot[1]) && void 0 !== _pivot$2 ? _pivot$2 : .5);
                        let sizePart = "";
                        sizePart = width > 0 && height > 0 ? isEllipse || width !== height ? `${Math.round(width)}px ${Math.round(height)}px` : `${Math.round(width)}px` : "closest-side";
                        const radialGradient = `radial-gradient(${isEllipse ? "ellipse" : "circle"} ${sizePart} at ${pivotX.toFixed(2)}% ${pivotY.toFixed(2)}%, ${gradientStops})`;
                        srcImg || gradient ? maskStyle += `mask-image: ${radialGradient};` : (bgStyle += `background-image: ${radialGradient};`, 
                        bgStyle += "background-repeat: no-repeat;", bgStyle += "background-size: 100% 100%;");
                    }
                }
            }
            if ("linear" in shaderProps) {
                const lg = shaderProps.linear, colors = Array.isArray(null == lg ? void 0 : lg.colors) ? lg.colors : [], stops = Array.isArray(null == lg ? void 0 : lg.stops) ? lg.stops : void 0, angleRad = "number" == typeof (null == lg ? void 0 : lg.angle) ? lg.angle : 0;
                if (colors.length > 0) {
                    const gradientStops = buildGradientStops(colors, stops);
                    if (gradientStops) if (1 === colors.length) srcImg || gradient ? maskStyle += `mask-image: linear-gradient(${gradientStops});` : bgStyle += `background-color: ${colorToRgba(colors[0])};`; else {
                        const linearGradient = `linear-gradient(${(180 * (angleRad / Math.PI - 1)).toFixed(2)}deg, ${gradientStops})`;
                        srcImg || gradient ? maskStyle += `mask-image: ${linearGradient};` : (bgStyle += `background-image: ${linearGradient};`, 
                        bgStyle += "background-repeat: no-repeat;", bgStyle += "background-size: 100% 100%;");
                    }
                }
            }
        }
        if ("" !== maskStyle && (!supportsStandardMask && supportsWebkitMask ? maskStyle = maskStyle.replace(/mask-/g, "-webkit-mask-") : supportsCssMask || (maskStyle = ""), 
        "" !== maskStyle && (needsBackgroundLayer = !0)), !needsBackgroundLayer && rawImgSrc && (needsBackgroundLayer = hasTint || !!gradient || null !== srcPos || "" !== radiusStyle || "" !== bgStyle), 
        style += radiusStyle, needsBackgroundLayer) {
            null == node.divBg ? (node.divBg = document.createElement("div"), node.div.insertBefore(node.divBg, node.div.firstChild)) : node.divBg.parentElement !== node.div && node.div.insertBefore(node.divBg, node.div.firstChild), 
            null != rawImgSrc && null != srcPos && node.imgEl && node.imgEl.complete && node.imgEl.dataset.rawSrc === rawImgSrc && (node.imageLoading = !0);
            let bgLayerStyle = "position: absolute; top:0; left:0; right:0; bottom:0; z-index: -1; pointer-events: none;";
            null === srcPos || hasDivBgTint || (bgLayerStyle += "overflow: hidden;"), bgStyle && (bgLayerStyle += bgStyle), 
            maskStyle && (bgLayerStyle += maskStyle), hasDivBgTint && null != srcPos && node.imageLoading && (bgLayerStyle += "opacity: 0;"), 
            node.divBg.setAttribute("style", bgLayerStyle + radiusStyle), rawImgSrc ? (node.imgEl || (node.imgEl = document.createElement("img"), 
            node.imgEl.alt = "", node.imgEl.crossOrigin = "anonymous", node.imgEl.setAttribute("aria-hidden", "true"), 
            node.imgEl.setAttribute("loading", "lazy"), node.imgEl.removeAttribute("src"), node.imgEl.addEventListener("load", () => {
                const payload = {
                    type: "texture",
                    dimensions: {
                        w: node.imgEl.naturalWidth,
                        h: node.imgEl.naturalHeight
                    }
                };
                node.imgEl.style.display = "", applySubTextureScaling(node, node.imgEl, node.lazyImageSubTextureProps), 
                node.lazyImageSubTextureProps || applyLegacyObjectFit(node, node.imgEl, null), node.imgEl && (node.imageLoading = !1, 
                node.imgEl.style.opacity = "1"), node.showBackgroundLayer(), node.emit("loaded", payload);
            }), node.imgEl.addEventListener("error", () => {
                var _node$imgEl;
                node.imageLoading = !1, node.showBackgroundLayer(), node.imgEl && (node.imgEl.removeAttribute("src"), 
                node.imgEl.style.display = "none", node.imgEl.removeAttribute("data-rawSrc"));
                const failedSrc = (null == (_node$imgEl = node.imgEl) ? void 0 : _node$imgEl.dataset.pendingSrc) || node.lazyImagePendingSrc || "", payload = {
                    type: "texture",
                    error: new Error(`Failed to load image: ${failedSrc}`)
                };
                node.emit("failed", payload);
            })), node.lazyImagePendingSrc = rawImgSrc, node.lazyImageSubTextureProps = srcPos, 
            node.imgEl.dataset.pendingSrc = rawImgSrc, node.imgEl.parentElement !== node.divBg && node.divBg.appendChild(node.imgEl), 
            node.imgEl.setAttribute("style", imgStyle + radiusStyle), hasDivBgTint && (node.imgEl.style.visibility = "hidden"), 
            isRenderStateInBounds(node.renderState) ? node.applyPendingImageSrc() : node.imgEl.dataset.rawSrc || node.imgEl.removeAttribute("src"), 
            srcPos && node.imgEl.complete && node.imgEl.dataset.rawSrc === rawImgSrc && (applySubTextureScaling(node, node.imgEl, srcPos), 
            node.imageLoading && (node.imageLoading = !1, node.imgEl.style.opacity = "1", node.showBackgroundLayer())), 
            srcPos || !node.imgEl.complete || supportsObjectFit && supportsObjectPosition || node.imgEl.dataset.rawSrc !== rawImgSrc || applyLegacyObjectFit(node, node.imgEl, srcPos)) : (node.lazyImagePendingSrc = null, 
            node.lazyImageSubTextureProps = null, node.imgEl && (node.imgEl.remove(), node.imgEl = void 0));
        } else rawImgSrc ? (node.divBg && (node.divBg.remove(), node.divBg = void 0), null != srcPos && node.imgEl && node.imgEl.complete && node.imgEl.dataset.rawSrc === rawImgSrc && (node.imageLoading = !0), 
        node.imgEl || (node.imgEl = document.createElement("img"), node.imgEl.alt = "", 
        node.imgEl.crossOrigin = "anonymous", node.imgEl.setAttribute("aria-hidden", "true"), 
        node.imgEl.setAttribute("loading", "lazy"), node.imgEl.removeAttribute("src"), node.imgEl.addEventListener("load", () => {
            const payload = {
                type: "texture",
                dimensions: {
                    w: node.imgEl.naturalWidth,
                    h: node.imgEl.naturalHeight
                }
            };
            node.imgEl.style.display = "", applySubTextureScaling(node, node.imgEl, node.lazyImageSubTextureProps), 
            node.lazyImageSubTextureProps || applyLegacyObjectFit(node, node.imgEl, null), node.imgEl && (node.imageLoading = !1, 
            node.imgEl.style.opacity = "1"), node.emit("loaded", payload);
        }), node.imgEl.addEventListener("error", () => {
            var _node$imgEl2;
            node.imageLoading = !1, node.imgEl && (node.imgEl.removeAttribute("src"), node.imgEl.style.display = "none", 
            node.imgEl.removeAttribute("data-rawSrc"));
            const failedSrc = (null == (_node$imgEl2 = node.imgEl) ? void 0 : _node$imgEl2.dataset.pendingSrc) || node.lazyImagePendingSrc || "", payload = {
                type: "texture",
                error: new Error(`Failed to load image: ${failedSrc}`)
            };
            node.emit("failed", payload);
        })), node.lazyImagePendingSrc = rawImgSrc, node.lazyImageSubTextureProps = srcPos, 
        node.imgEl.dataset.pendingSrc = rawImgSrc, node.imgEl.parentElement !== node.div && node.div.appendChild(node.imgEl), 
        node.imgEl.setAttribute("style", imgStyle + radiusStyle), isRenderStateInBounds(node.renderState) ? node.applyPendingImageSrc() : node.imgEl.dataset.rawSrc || node.imgEl.removeAttribute("src"), 
        srcPos && node.imgEl.complete && node.imgEl.dataset.rawSrc === rawImgSrc && (applySubTextureScaling(node, node.imgEl, srcPos), 
        node.imageLoading && (node.imageLoading = !1, node.imgEl.style.opacity = "1")), 
        srcPos || !node.imgEl.complete || supportsObjectFit && supportsObjectPosition || node.imgEl.dataset.rawSrc !== rawImgSrc || applyLegacyObjectFit(node, node.imgEl, srcPos)) : (node.lazyImagePendingSrc = null, 
        node.lazyImageSubTextureProps = null, node.imgEl && (node.imgEl.remove(), node.imgEl = void 0), 
        node.divBg && (node.divBg.remove(), node.divBg = void 0), style += bgStyle);
        if (needsBackgroundLayer && "" !== maskStyle ? null == node.divBorder && (node.divBorder = document.createElement("div"), 
        node.div.appendChild(node.divBorder)) : node.divBorder && (node.divBorder.remove(), 
        node.divBorder = void 0), null == node.divBorder) style += borderStyle; else {
            let borderLayerStyle = "position: absolute; top:0; left:0; right:0; bottom:0; z-index: -1; pointer-events: none;";
            borderLayerStyle += borderStyle, node.divBorder.setAttribute("style", borderLayerStyle + radiusStyle);
        }
    }
    const newStyle = style.replace(/\s*\n\s*/g, " ");
    node._lastStyleStr !== newStyle && (node._lastStyleStr = newStyle, node.div.setAttribute("style", newStyle)), 
    updateRenderStateIfNeeded(node);
}

var textNodesToMeasure = new Set, containTextNodes = new Set, fontLoadingListenerSetup = !1;

function getElSize(node) {
    var _Config$rendererOptio, _Config$rendererOptio2;
    const rawRect = node.div.getBoundingClientRect(), dpr = null !== (_Config$rendererOptio = null == (_Config$rendererOptio2 = Config.rendererOptions) ? void 0 : _Config$rendererOptio2.deviceLogicalPixelRatio) && void 0 !== _Config$rendererOptio ? _Config$rendererOptio : 1;
    let width = rawRect.width / dpr, height = rawRect.height / dpr;
    for (;null != node.props.scale && 1 !== node.props.scale ? (width /= node.props.scale, 
    height /= node.props.scale) : (width /= node.props.scaleX, height /= node.props.scaleY), 
    node.parent instanceof DOMNode; ) node = node.parent;
    return {
        width: width,
        height: height
    };
}

function updateDOMTextSize(node, emitLoaded = !0) {
    let size, dimensionsChanged = !1;
    switch (node.contain) {
      case "width":
        size = getElSize(node), node.props.w !== size.width && (node.w = size.width, dimensionsChanged = !0), 
        node.props.h !== size.height && (node.h = size.height, dimensionsChanged = !0);
        break;

      case "none":
        size = getElSize(node), node.props.h === size.height && node.props.w === size.width || (node.w = size.width, 
        node.h = size.height, dimensionsChanged = !0);
    }
    if (emitLoaded && (!node.loaded || dimensionsChanged)) {
        const payload = {
            type: "text",
            dimensions: {
                w: node.w,
                h: node.h
            }
        };
        node.emit("loaded", payload), node.loaded = !0;
    }
}

function updateDOMTextMeasurements() {
    textNodesToMeasure.forEach(node => updateDOMTextSize(node)), textNodesToMeasure.clear();
}

function syncContainTextNodeTracking(node) {
    !function(node) {
        return "width" === node.contain || "none" === node.contain;
    }(node) ? containTextNodes.delete(node) : containTextNodes.add(node);
}

function scheduleContainTextNodesMeasurement() {
    0 !== containTextNodes.size && (containTextNodes.forEach(node => {
        node.div.isConnected && textNodesToMeasure.add(node);
    }), textNodesToMeasure.size > 0 && setTimeout(updateDOMTextMeasurements));
}

function scheduleUpdateDOMTextMeasurement(node) {
    if (function() {
        if (fontLoadingListenerSetup) return;
        if ("undefined" == typeof document || !document.fonts) return;
        const fonts = document.fonts;
        "function" == typeof fonts.addEventListener && fonts.addEventListener("loadingdone", scheduleContainTextNodesMeasurement), 
        fontLoadingListenerSetup = !0;
    }(), 0 === textNodesToMeasure.size) if ("undefined" != typeof document && "fonts" in document) {
        const fonts = document.fonts;
        "loaded" === fonts.status ? setTimeout(updateDOMTextMeasurements) : null != fonts.ready && "function" == typeof fonts.ready.then ? fonts.ready.then(updateDOMTextMeasurements) : setTimeout(updateDOMTextMeasurements, 500);
    } else setTimeout(updateDOMTextMeasurements, 500);
    textNodesToMeasure.add(node);
}

function updateNodeData(node) {
    const data = node.data;
    for (const key in data) {
        const keyValue = data[key];
        void 0 === keyValue ? node.div.removeAttribute("data-" + key) : node.div.setAttribute("data-" + key, String(keyValue));
    }
}

function resolveNodeDefaults(props) {
    var _props$color, _props$x, _props$y, _props$w, _props$h, _props$alpha, _props$ignoreParentAl, _props$autosize, _props$boundsMargin, _props$clipping, _props$colorTop, _props$colorBottom, _props$colorLeft, _props$colorRight, _ref, _ref2, _props$colorBl, _ref3, _ref4, _props$colorBr, _ref5, _ref6, _props$colorTl, _ref7, _ref8, _props$colorTr, _props$zIndex, _props$parent, _props$texture, _props$textureOptions2, _props$shader2, _props$src, _props$scale, _ref9, _props$scaleX, _ref10, _props$scaleY, _props$mount, _ref11, _props$mountX, _ref12, _props$mountY, _props$pivot, _ref13, _props$pivotX, _ref14, _props$pivotY, _props$rotation, _props$rtt, _props$placeholderCol;
    const color = null !== (_props$color = props.color) && void 0 !== _props$color ? _props$color : 0;
    return {
        x: null !== (_props$x = props.x) && void 0 !== _props$x ? _props$x : 0,
        y: null !== (_props$y = props.y) && void 0 !== _props$y ? _props$y : 0,
        w: null !== (_props$w = props.w) && void 0 !== _props$w ? _props$w : 0,
        h: null !== (_props$h = props.h) && void 0 !== _props$h ? _props$h : 0,
        alpha: null !== (_props$alpha = props.alpha) && void 0 !== _props$alpha ? _props$alpha : 1,
        ignoreParentAlpha: null !== (_props$ignoreParentAl = props.ignoreParentAlpha) && void 0 !== _props$ignoreParentAl && _props$ignoreParentAl,
        autosize: null !== (_props$autosize = props.autosize) && void 0 !== _props$autosize && _props$autosize,
        boundsMargin: null !== (_props$boundsMargin = props.boundsMargin) && void 0 !== _props$boundsMargin ? _props$boundsMargin : null,
        clipping: null !== (_props$clipping = props.clipping) && void 0 !== _props$clipping && _props$clipping,
        color: color,
        colorTop: null !== (_props$colorTop = props.colorTop) && void 0 !== _props$colorTop ? _props$colorTop : color,
        colorBottom: null !== (_props$colorBottom = props.colorBottom) && void 0 !== _props$colorBottom ? _props$colorBottom : color,
        colorLeft: null !== (_props$colorLeft = props.colorLeft) && void 0 !== _props$colorLeft ? _props$colorLeft : color,
        colorRight: null !== (_props$colorRight = props.colorRight) && void 0 !== _props$colorRight ? _props$colorRight : color,
        colorBl: null !== (_ref = null !== (_ref2 = null !== (_props$colorBl = props.colorBl) && void 0 !== _props$colorBl ? _props$colorBl : props.colorBottom) && void 0 !== _ref2 ? _ref2 : props.colorLeft) && void 0 !== _ref ? _ref : color,
        colorBr: null !== (_ref3 = null !== (_ref4 = null !== (_props$colorBr = props.colorBr) && void 0 !== _props$colorBr ? _props$colorBr : props.colorBottom) && void 0 !== _ref4 ? _ref4 : props.colorRight) && void 0 !== _ref3 ? _ref3 : color,
        colorTl: null !== (_ref5 = null !== (_ref6 = null !== (_props$colorTl = props.colorTl) && void 0 !== _props$colorTl ? _props$colorTl : props.colorTop) && void 0 !== _ref6 ? _ref6 : props.colorLeft) && void 0 !== _ref5 ? _ref5 : color,
        colorTr: null !== (_ref7 = null !== (_ref8 = null !== (_props$colorTr = props.colorTr) && void 0 !== _props$colorTr ? _props$colorTr : props.colorTop) && void 0 !== _ref8 ? _ref8 : props.colorRight) && void 0 !== _ref7 ? _ref7 : color,
        zIndex: null !== (_props$zIndex = props.zIndex) && void 0 !== _props$zIndex ? _props$zIndex : 0,
        parent: null !== (_props$parent = props.parent) && void 0 !== _props$parent ? _props$parent : null,
        texture: null !== (_props$texture = props.texture) && void 0 !== _props$texture ? _props$texture : null,
        textureOptions: null !== (_props$textureOptions2 = props.textureOptions) && void 0 !== _props$textureOptions2 ? _props$textureOptions2 : {},
        shader: null !== (_props$shader2 = props.shader) && void 0 !== _props$shader2 ? _props$shader2 : defaultShader,
        src: null !== (_props$src = props.src) && void 0 !== _props$src ? _props$src : null,
        srcHeight: props.srcHeight,
        srcWidth: props.srcWidth,
        srcX: props.srcX,
        srcY: props.srcY,
        scale: null !== (_props$scale = props.scale) && void 0 !== _props$scale ? _props$scale : null,
        scaleX: null !== (_ref9 = null !== (_props$scaleX = props.scaleX) && void 0 !== _props$scaleX ? _props$scaleX : props.scale) && void 0 !== _ref9 ? _ref9 : 1,
        scaleY: null !== (_ref10 = null !== (_props$scaleY = props.scaleY) && void 0 !== _props$scaleY ? _props$scaleY : props.scale) && void 0 !== _ref10 ? _ref10 : 1,
        mount: null !== (_props$mount = props.mount) && void 0 !== _props$mount ? _props$mount : 0,
        mountX: null !== (_ref11 = null !== (_props$mountX = props.mountX) && void 0 !== _props$mountX ? _props$mountX : props.mount) && void 0 !== _ref11 ? _ref11 : 0,
        mountY: null !== (_ref12 = null !== (_props$mountY = props.mountY) && void 0 !== _props$mountY ? _props$mountY : props.mount) && void 0 !== _ref12 ? _ref12 : 0,
        pivot: null !== (_props$pivot = props.pivot) && void 0 !== _props$pivot ? _props$pivot : .5,
        pivotX: null !== (_ref13 = null !== (_props$pivotX = props.pivotX) && void 0 !== _props$pivotX ? _props$pivotX : props.pivot) && void 0 !== _ref13 ? _ref13 : .5,
        pivotY: null !== (_ref14 = null !== (_props$pivotY = props.pivotY) && void 0 !== _props$pivotY ? _props$pivotY : props.pivot) && void 0 !== _ref14 ? _ref14 : .5,
        rotation: null !== (_props$rotation = props.rotation) && void 0 !== _props$rotation ? _props$rotation : 0,
        rtt: null !== (_props$rtt = props.rtt) && void 0 !== _props$rtt && _props$rtt,
        placeholderColor: null !== (_props$placeholderCol = props.placeholderColor) && void 0 !== _props$placeholderCol ? _props$placeholderCol : 0,
        data: {},
        imageType: props.imageType
    };
}

var defaultShader = {
    shaderType: "",
    props: void 0
}, lastNodeId = 0, CoreNodeRenderStateMap = new Map([ [ 0, "init" ], [ 2, "outOfBounds" ], [ 4, "inBounds" ], [ 8, "inViewport" ] ]), DOMNode = class DOMNode extends EventEmitter {
    constructor(stage, props) {
        super(), this.stage = void 0, this.props = void 0, this.div = document.createElement("div"), 
        this.divBg = void 0, this.divBorder = void 0, this.imgEl = void 0, this.imageLoading = !1, 
        this.lazyImagePendingSrc = null, this.lazyImageSubTextureProps = null, this.boundsDirty = !0, 
        this.children = new Set, this._lastStyleStr = "", this.id = ++lastNodeId, this.renderState = 0, 
        this.preventCleanup = !0, this.animate = animate, this.stage = stage, this.props = props, 
        this.div._node = this, this.div.setAttribute("data-id", String(this.id)), elMap.set(this, this.div);
        const parent = this.props.parent;
        parent instanceof DOMNode && parent.children.add(this), updateNodeParent(this), 
        updateNodeStyles(this), updateNodeData(this);
    }
    destroy() {
        var _this$div$parentNode;
        elMap.delete(this);
        const parent = this.props.parent;
        parent instanceof DOMNode && parent.children.delete(this), null == (_this$div$parentNode = this.div.parentNode) || _this$div$parentNode.removeChild(this.div);
    }
    get parent() {
        return this.props.parent;
    }
    set parent(value) {
        if (this.props.parent === value) return;
        const prevParent = this.props.parent;
        prevParent instanceof DOMNode && (prevParent.children.delete(this), prevParent.markChildrenBoundsDirty()), 
        this.props.parent = value, value instanceof DOMNode && (value.children.add(this), 
        value.markChildrenBoundsDirty()), this.boundsDirty = !0, this.markChildrenBoundsDirty(), 
        updateNodeParent(this);
    }
    markChildrenBoundsDirty() {
        for (const child of this.children) {
            if (child.boundsDirty = !0, child !== child.stage.root) {
                if (nodeHasTextureSource(child)) {
                    const nextState = computeRenderStateForNode(child);
                    null != nextState && child.updateRenderState(nextState);
                }
                child.boundsDirty = !1;
            }
            child.markChildrenBoundsDirty();
        }
    }
    updateRenderState(renderState) {
        if (renderState === this.renderState) return;
        const previous = this.renderState;
        this.renderState = renderState;
        const event = CoreNodeRenderStateMap.get(renderState);
        isRenderStateInBounds(renderState) && this.applyPendingImageSrc(), event && "init" !== event && this.emit(event, {
            previous: previous,
            current: renderState
        }), this.imgEl && (this.imgEl.dataset.state = event);
    }
    showBackgroundLayer() {
        this.divBg && (this.divBg.style.opacity = "1");
    }
    hideMaskedBackgroundLayer() {
        this.divBg && (this.divBg.style.maskImage || this.divBg.style.webkitMaskImage) && (this.divBg.style.opacity = "0");
    }
    applyPendingImageSrc() {
        if (!this.imgEl) return;
        const pendingSrc = this.lazyImagePendingSrc;
        pendingSrc && this.imgEl.dataset.rawSrc !== pendingSrc && (this.imageLoading = !0, 
        this.imgEl.style.opacity = "0", this.hideMaskedBackgroundLayer(), this.imgEl.style.display = "", 
        this.imgEl.dataset.pendingSrc = pendingSrc, this.imgEl.src = pendingSrc, this.imgEl.dataset.rawSrc = pendingSrc, 
        this.imgEl.dataset.pendingSrc = "");
    }
    get x() {
        return this.props.x;
    }
    set x(v) {
        this.props.x !== v && (this.props.x = v, this.boundsDirty = !0, this.markChildrenBoundsDirty(), 
        updateTransformOnly(this));
    }
    get y() {
        return this.props.y;
    }
    set y(v) {
        this.props.y !== v && (this.props.y = v, this.boundsDirty = !0, this.markChildrenBoundsDirty(), 
        updateTransformOnly(this));
    }
    get w() {
        return this.props.w;
    }
    set w(v) {
        this.props.w !== v && (this.props.w = v, this.boundsDirty = !0, this.markChildrenBoundsDirty(), 
        updateNodeStyles(this));
    }
    get h() {
        return this.props.h;
    }
    set h(v) {
        this.props.h !== v && (this.props.h = v, this.boundsDirty = !0, this.markChildrenBoundsDirty(), 
        updateNodeStyles(this));
    }
    get width() {
        return this.props.w;
    }
    set width(v) {
        this.props.w !== v && (this.props.w = v, this.boundsDirty = !0, this.markChildrenBoundsDirty(), 
        updateNodeStyles(this));
    }
    get height() {
        return this.props.h;
    }
    set height(v) {
        this.props.h !== v && (this.props.h = v, this.boundsDirty = !0, this.markChildrenBoundsDirty(), 
        updateNodeStyles(this));
    }
    get alpha() {
        return this.props.alpha;
    }
    set alpha(v) {
        this.props.alpha = v, updateNodeStyles(this);
    }
    get autosize() {
        return this.props.autosize;
    }
    set autosize(v) {
        this.props.autosize = v, updateNodeStyles(this);
    }
    get clipping() {
        return this.props.clipping;
    }
    set clipping(v) {
        this.props.clipping = v, updateNodeStyles(this);
    }
    get color() {
        return this.props.color;
    }
    set color(v) {
        this.props.color = v, updateNodeStyles(this);
    }
    get colorTop() {
        return this.props.colorTop;
    }
    set colorTop(v) {
        this.props.colorTop = v, updateNodeStyles(this);
    }
    get colorBottom() {
        return this.props.colorBottom;
    }
    set colorBottom(v) {
        this.props.colorBottom = v, updateNodeStyles(this);
    }
    get colorLeft() {
        return this.props.colorLeft;
    }
    set colorLeft(v) {
        this.props.colorLeft = v, updateNodeStyles(this);
    }
    get colorRight() {
        return this.props.colorRight;
    }
    set colorRight(v) {
        this.props.colorRight = v, updateNodeStyles(this);
    }
    get colorTl() {
        return this.props.colorTl;
    }
    set colorTl(v) {
        this.props.colorTl = v, updateNodeStyles(this);
    }
    get colorTr() {
        return this.props.colorTr;
    }
    set colorTr(v) {
        this.props.colorTr = v, updateNodeStyles(this);
    }
    get colorBr() {
        return this.props.colorBr;
    }
    set colorBr(v) {
        this.props.colorBr = v, updateNodeStyles(this);
    }
    get colorBl() {
        return this.props.colorBl;
    }
    set colorBl(v) {
        this.props.colorBl = v, updateNodeStyles(this);
    }
    get zIndex() {
        return this.props.zIndex;
    }
    set zIndex(v) {
        this.props.zIndex !== v && (this.props.zIndex = Math.ceil(v), updateNodeStyles(this));
    }
    get texture() {
        return this.props.texture;
    }
    set texture(v) {
        this.props.texture !== v && (this.props.texture = v, this.boundsDirty = !0, updateNodeStyles(this));
    }
    get textureOptions() {
        return this.props.textureOptions;
    }
    set textureOptions(v) {
        this.props.textureOptions = v, updateNodeStyles(this);
    }
    get src() {
        return this.props.src;
    }
    set src(v) {
        this.props.src !== v && (this.props.src = v, this.boundsDirty = !0, updateNodeStyles(this));
    }
    get scale() {
        var _this$props$scale;
        return null !== (_this$props$scale = this.props.scale) && void 0 !== _this$props$scale ? _this$props$scale : 1;
    }
    set scale(v) {
        this.props.scale !== v && (this.props.scale = v, this.boundsDirty = !0, this.markChildrenBoundsDirty(), 
        updateTransformOnly(this));
    }
    get scaleX() {
        return this.props.scaleX;
    }
    set scaleX(v) {
        this.props.scaleX !== v && (this.props.scaleX = v, this.boundsDirty = !0, this.markChildrenBoundsDirty(), 
        updateTransformOnly(this));
    }
    get scaleY() {
        return this.props.scaleY;
    }
    set scaleY(v) {
        this.props.scaleY !== v && (this.props.scaleY = v, this.boundsDirty = !0, this.markChildrenBoundsDirty(), 
        updateTransformOnly(this));
    }
    get mount() {
        return this.props.mount;
    }
    set mount(v) {
        this.props.mount !== v && (this.props.mount = v, this.boundsDirty = !0, this.markChildrenBoundsDirty(), 
        updateTransformOnly(this));
    }
    get mountX() {
        return this.props.mountX;
    }
    set mountX(v) {
        this.props.mountX !== v && (this.props.mountX = v, this.boundsDirty = !0, this.markChildrenBoundsDirty(), 
        updateTransformOnly(this));
    }
    get mountY() {
        return this.props.mountY;
    }
    set mountY(v) {
        this.props.mountY !== v && (this.props.mountY = v, this.boundsDirty = !0, this.markChildrenBoundsDirty(), 
        updateTransformOnly(this));
    }
    get pivot() {
        return this.props.pivot;
    }
    set pivot(v) {
        this.props.pivot !== v && (this.props.pivot = v, this.boundsDirty = !0, this.markChildrenBoundsDirty(), 
        updateNodeStyles(this));
    }
    get pivotX() {
        return this.props.pivotX;
    }
    set pivotX(v) {
        this.props.pivotX !== v && (this.props.pivotX = v, this.boundsDirty = !0, this.markChildrenBoundsDirty(), 
        updateNodeStyles(this));
    }
    get pivotY() {
        return this.props.pivotY;
    }
    set pivotY(v) {
        this.props.pivotY !== v && (this.props.pivotY = v, this.boundsDirty = !0, this.markChildrenBoundsDirty(), 
        updateNodeStyles(this));
    }
    get rotation() {
        return this.props.rotation;
    }
    set rotation(v) {
        this.props.rotation !== v && (this.props.rotation = v, this.boundsDirty = !0, this.markChildrenBoundsDirty(), 
        updateTransformOnly(this));
    }
    get rtt() {
        return this.props.rtt;
    }
    set rtt(v) {
        this.props.rtt = v, updateNodeStyles(this);
    }
    get shader() {
        return this.props.shader;
    }
    set shader(v) {
        this.props.shader = v, updateNodeStyles(this);
    }
    get data() {
        return this.props.data;
    }
    set data(v) {
        this.props.data = v, updateNodeData(this);
    }
    get imageType() {
        return this.props.imageType;
    }
    set imageType(v) {
        this.props.imageType = v;
    }
    get srcWidth() {
        return this.props.srcWidth;
    }
    set srcWidth(v) {
        this.props.srcWidth = v;
    }
    get srcHeight() {
        return this.props.srcHeight;
    }
    set srcHeight(v) {
        this.props.srcHeight = v;
    }
    get srcX() {
        return this.props.srcX;
    }
    set srcX(v) {
        this.props.srcX = v;
    }
    get srcY() {
        return this.props.srcY;
    }
    set srcY(v) {
        this.props.srcY = v;
    }
    get boundsMargin() {
        return this.props.boundsMargin;
    }
    set boundsMargin(value) {
        this.props.boundsMargin = value, this.boundsDirty = !0, this.markChildrenBoundsDirty();
    }
    get ignoreParentAlpha() {
        return this.props.ignoreParentAlpha;
    }
    set ignoreParentAlpha(v) {
        this.props.ignoreParentAlpha = v, updateNodeStyles(this);
    }
    get placeholderColor() {
        return this.props.placeholderColor;
    }
    set placeholderColor(v) {
        this.props.placeholderColor = v, updateNodeStyles(this);
    }
    get absX() {
        const parent = this.props.parent;
        return this.x + -this.w * this.mountX + (parent instanceof DOMNode ? parent.absX : 0);
    }
    get absY() {
        const parent = this.props.parent;
        return this.y + -this.h * this.mountY + (parent instanceof DOMNode ? parent.absY : 0);
    }
}, DOMText = class extends DOMNode {
    constructor(stage, props) {
        super(stage, props), this.props = void 0, this.loaded = !1, this.props = props, 
        this.div.innerText = props.text, updateNodeStyles(this), updateDOMTextSize(this, !1), 
        syncContainTextNodeTracking(this), scheduleUpdateDOMTextMeasurement(this);
    }
    destroy() {
        textNodesToMeasure.delete(this), containTextNodes.delete(this), super.destroy();
    }
    get text() {
        return this.props.text;
    }
    set text(v) {
        this.props.text !== v && (this.props.text = v, this.div.innerText = v, scheduleUpdateDOMTextMeasurement(this));
    }
    get fontFamily() {
        return this.props.fontFamily;
    }
    set fontFamily(v) {
        this.props.fontFamily !== v && (this.props.fontFamily = v, updateNodeStyles(this), 
        scheduleUpdateDOMTextMeasurement(this));
    }
    get fontSize() {
        return this.props.fontSize;
    }
    set fontSize(v) {
        this.props.fontSize !== v && (this.props.fontSize = v, updateNodeStyles(this), scheduleUpdateDOMTextMeasurement(this));
    }
    get fontStyle() {
        return this.props.fontStyle;
    }
    set fontStyle(v) {
        this.props.fontStyle !== v && (this.props.fontStyle = v, updateNodeStyles(this), 
        scheduleUpdateDOMTextMeasurement(this));
    }
    get fontWeight() {
        return this.props.fontWeight;
    }
    set fontWeight(v) {
        this.props.fontWeight !== v && (this.props.fontWeight = v, updateNodeStyles(this), 
        scheduleUpdateDOMTextMeasurement(this));
    }
    get fontStretch() {
        return this.props.fontStretch;
    }
    set fontStretch(v) {
        this.props.fontStretch !== v && (this.props.fontStretch = v, updateNodeStyles(this), 
        scheduleUpdateDOMTextMeasurement(this));
    }
    get forceLoad() {
        return this.props.forceLoad;
    }
    set forceLoad(v) {
        this.props.forceLoad = v;
    }
    get lineHeight() {
        return this.props.lineHeight;
    }
    set lineHeight(v) {
        this.props.lineHeight !== v && (this.props.lineHeight = v, updateNodeStyles(this), 
        scheduleUpdateDOMTextMeasurement(this));
    }
    get maxWidth() {
        return this.props.maxWidth;
    }
    set maxWidth(v) {
        this.props.maxWidth !== v && (this.props.maxWidth = v, updateNodeStyles(this), scheduleUpdateDOMTextMeasurement(this));
    }
    get maxHeight() {
        return this.props.maxHeight;
    }
    set maxHeight(v) {
        this.props.maxHeight !== v && (this.props.maxHeight = v, updateNodeStyles(this), 
        scheduleUpdateDOMTextMeasurement(this));
    }
    get letterSpacing() {
        return this.props.letterSpacing;
    }
    set letterSpacing(v) {
        this.props.letterSpacing !== v && (this.props.letterSpacing = v, updateNodeStyles(this), 
        scheduleUpdateDOMTextMeasurement(this));
    }
    get textAlign() {
        return this.props.textAlign;
    }
    set textAlign(v) {
        this.props.textAlign !== v && (this.props.textAlign = v, updateNodeStyles(this));
    }
    get overflowSuffix() {
        return this.props.overflowSuffix;
    }
    set overflowSuffix(v) {
        this.props.overflowSuffix !== v && (this.props.overflowSuffix = v, updateNodeStyles(this));
    }
    get maxLines() {
        return this.props.maxLines;
    }
    set maxLines(v) {
        this.props.maxLines !== v && (this.props.maxLines = v, updateNodeStyles(this), scheduleUpdateDOMTextMeasurement(this));
    }
    get contain() {
        return this.props.contain;
    }
    set contain(v) {
        this.props.contain !== v && (this.props.contain = v, syncContainTextNodeTracking(this), 
        updateNodeStyles(this), scheduleUpdateDOMTextMeasurement(this));
    }
    get verticalAlign() {
        return this.props.verticalAlign;
    }
    set verticalAlign(v) {
        this.props.verticalAlign = v, updateNodeStyles(this);
    }
    get textRendererOverride() {
        return this.props.textRendererOverride;
    }
    set textRendererOverride(v) {
        this.props.textRendererOverride = v, updateNodeStyles(this);
    }
    get offsetY() {
        return this.props.offsetY;
    }
    set offsetY(v) {
        this.props.offsetY = v, updateNodeStyles(this);
    }
    get wordBreak() {
        return this.props.wordBreak;
    }
    set wordBreak(v) {
        this.props.wordBreak = v, updateNodeStyles(this);
    }
};

function updateRootPosition() {
    var _settings$deviceLogic, _settings$appHeight, _settings$appWidth;
    const {canvas: canvas, settings: settings} = this, rect = canvas.getBoundingClientRect(), top = document.documentElement.scrollTop + rect.top, left = document.documentElement.scrollLeft + rect.left, dpr = null !== (_settings$deviceLogic = settings.deviceLogicalPixelRatio) && void 0 !== _settings$deviceLogic ? _settings$deviceLogic : 1, height = Math.ceil(null !== (_settings$appHeight = settings.appHeight) && void 0 !== _settings$appHeight ? _settings$appHeight : 1080 / dpr), width = Math.ceil(null !== (_settings$appWidth = settings.appWidth) && void 0 !== _settings$appWidth ? _settings$appWidth : 1920 / dpr);
    this.root.div.style.left = `${left}px`, this.root.div.style.top = `${top}px`, this.root.div.style.width = `${width}px`, 
    this.root.div.style.height = `${height}px`, this.root.div.style.position = "absolute", 
    this.root.div.style.transformOrigin = "0 0 0", this.root.div.style.transform = `scale(${dpr}, ${dpr})`, 
    this.root.div.style.overflow = "hidden";
}

var renderer$1, DOMRendererMain = class {
    constructor(settings, rawTarget) {
        var _settings$appWidth2, _settings$appHeight2;
        let target;
        if (this.settings = void 0, this.root = void 0, this.canvas = void 0, this.stage = void 0, 
        this.eventListeners = new Map, this.settings = settings, "string" == typeof rawTarget) {
            const result = document.getElementById(rawTarget);
            if (!(result instanceof HTMLElement)) throw new Error(`Target #${rawTarget} not found`);
            target = result;
        } else target = rawTarget;
        const canvas = document.body.appendChild(document.createElement("canvas"));
        canvas.style.position = "absolute", canvas.style.top = "0", canvas.style.left = "0", 
        canvas.style.width = "100vw", canvas.style.height = "100vh", this.canvas = canvas, 
        this.stage = {
            root: null,
            renderer: {
                mode: "canvas",
                boundsMargin: settings.boundsMargin
            },
            shManager: {
                registerShaderType() {}
            },
            animationManager: {
                registerAnimation(anim) {
                    console.log("registerAnimation", anim);
                },
                unregisterAnimation(anim) {
                    console.log("unregisterAnimation", anim);
                }
            },
            loadFont: async () => {},
            cleanup() {},
            requestRender() {}
        }, this.root = new DOMNode(this.stage, resolveNodeDefaults({
            w: null !== (_settings$appWidth2 = settings.appWidth) && void 0 !== _settings$appWidth2 ? _settings$appWidth2 : 1920,
            h: null !== (_settings$appHeight2 = settings.appHeight) && void 0 !== _settings$appHeight2 ? _settings$appHeight2 : 1080,
            shader: defaultShader,
            zIndex: 1
        })), this.stage.root = this.root, target.appendChild(this.root.div), Config.fontSettings.fontFamily && (this.root.div.style.fontFamily = Config.fontSettings.fontFamily), 
        Config.fontSettings.fontSize && (this.root.div.style.fontSize = Config.fontSettings.fontSize + "px"), 
        Config.fontSettings.lineHeight ? this.root.div.style.lineHeight = Config.fontSettings.lineHeight + "px" : this.root.div.style.lineHeight = "1.2", 
        Config.fontSettings.fontWeight && ("number" == typeof Config.fontSettings.fontWeight ? this.root.div.style.fontWeight = Config.fontSettings.fontWeight + "px" : this.root.div.style.fontWeight = Config.fontSettings.fontWeight), 
        updateRootPosition.call(this), new MutationObserver(updateRootPosition.bind(this)).observe(this.canvas, {
            attributes: !0
        }), new ResizeObserver(updateRootPosition.bind(this)).observe(this.canvas), window.addEventListener("resize", updateRootPosition.bind(this));
    }
    removeAllListeners() {
        0 !== this.eventListeners.size && (this.eventListeners.forEach(listeners => listeners.clear()), 
        this.eventListeners.clear());
    }
    once(event, listener) {
        const wrappedListener = (target, data) => {
            this.off(event, wrappedListener), listener(target, data);
        };
        this.on(event, wrappedListener);
    }
    on(name, callback) {
        let listeners = this.eventListeners.get(name);
        listeners || (listeners = new Set, this.eventListeners.set(name, listeners)), listeners.add(callback);
    }
    off(event, listener) {
        const listeners = this.eventListeners.get(event);
        listeners && (listeners.delete(listener), 0 === listeners.size && this.eventListeners.delete(event));
    }
    emit(event, targetOrData, maybeData) {
        const listeners = this.eventListeners.get(event);
        if (!listeners || 0 === listeners.size) return;
        const hasExplicitTarget = 3 === arguments.length, target = hasExplicitTarget ? targetOrData : this.root, data = hasExplicitTarget ? maybeData : targetOrData;
        for (const listener of Array.from(listeners)) try {
            listener(target, data);
        } catch (error) {
            console.error(`Error in listener for event "${event}"`, error);
        }
    }
    createNode(props) {
        return new DOMNode(this.stage, resolveNodeDefaults(props));
    }
    createTextNode(props) {
        return new DOMText(this.stage, function(props) {
            var _props$text, _props$textRendererOv, _props$fontSize, _props$fontFamily, _props$fontStyle, _props$fontWeight, _props$forceLoad, _props$textAlign, _props$contain, _props$offsetY, _props$letterSpacing, _props$lineHeight, _props$maxLines, _props$maxWidth, _props$maxHeight, _props$verticalAlign, _props$overflowSuffix, _props$wordBreak;
            return {
                ...resolveNodeDefaults(props),
                text: null !== (_props$text = props.text) && void 0 !== _props$text ? _props$text : "",
                textRendererOverride: null !== (_props$textRendererOv = props.textRendererOverride) && void 0 !== _props$textRendererOv ? _props$textRendererOv : null,
                fontSize: null !== (_props$fontSize = props.fontSize) && void 0 !== _props$fontSize ? _props$fontSize : 16,
                fontFamily: null !== (_props$fontFamily = props.fontFamily) && void 0 !== _props$fontFamily ? _props$fontFamily : "sans-serif",
                fontStyle: null !== (_props$fontStyle = props.fontStyle) && void 0 !== _props$fontStyle ? _props$fontStyle : "normal",
                fontWeight: null !== (_props$fontWeight = props.fontWeight) && void 0 !== _props$fontWeight ? _props$fontWeight : "normal",
                forceLoad: null !== (_props$forceLoad = props.forceLoad) && void 0 !== _props$forceLoad && _props$forceLoad,
                textAlign: null !== (_props$textAlign = props.textAlign) && void 0 !== _props$textAlign ? _props$textAlign : "left",
                contain: null !== (_props$contain = props.contain) && void 0 !== _props$contain ? _props$contain : "none",
                offsetY: null !== (_props$offsetY = props.offsetY) && void 0 !== _props$offsetY ? _props$offsetY : 0,
                letterSpacing: null !== (_props$letterSpacing = props.letterSpacing) && void 0 !== _props$letterSpacing ? _props$letterSpacing : 0,
                lineHeight: null !== (_props$lineHeight = props.lineHeight) && void 0 !== _props$lineHeight ? _props$lineHeight : 0,
                maxLines: null !== (_props$maxLines = props.maxLines) && void 0 !== _props$maxLines ? _props$maxLines : 0,
                maxWidth: null !== (_props$maxWidth = props.maxWidth) && void 0 !== _props$maxWidth ? _props$maxWidth : 0,
                maxHeight: null !== (_props$maxHeight = props.maxHeight) && void 0 !== _props$maxHeight ? _props$maxHeight : 0,
                verticalAlign: null !== (_props$verticalAlign = props.verticalAlign) && void 0 !== _props$verticalAlign ? _props$verticalAlign : "middle",
                overflowSuffix: null !== (_props$overflowSuffix = props.overflowSuffix) && void 0 !== _props$overflowSuffix ? _props$overflowSuffix : "...",
                wordBreak: null !== (_props$wordBreak = props.wordBreak) && void 0 !== _props$wordBreak ? _props$wordBreak : "overflow"
            };
        }(props));
    }
    createShader(...args) {
        const [shaderType, props] = args;
        return {
            shaderType: shaderType,
            props: props,
            program: {}
        };
    }
    createTexture(textureType, props) {
        let type = TextureType.generic;
        switch (textureType) {
          case "SubTexture":
            type = TextureType.subTexture;
            break;

          case "ImageTexture":
            type = TextureType.image;
            break;

          case "ColorTexture":
            type = TextureType.color;
            break;

          case "NoiseTexture":
            type = TextureType.noise;
            break;

          case "RenderTexture":
            type = TextureType.renderToTexture;
        }
        return {
            type: type,
            props: props
        };
    }
};

async function loadFonts(fonts) {
    const enableDomRenderer = DOM_RENDERING && Config.domRendererEnabled, hasCanvas = !enableDomRenderer && "textRenderers" in renderer$1.stage && !!renderer$1.stage.textRenderers.canvas;
    await Promise.all(fonts.map(font => {
        if ("webgl" === renderer$1.stage.renderer.mode && "type" in font && ("msdf" === font.type || "ssdf" === font.type)) return renderer$1.stage.loadFont("sdf", font);
        if ("fontUrl" in font) if (enableDomRenderer) !function(font) {
            var _fontSet$add;
            if ("undefined" == typeof document || !("fonts" in document) || "undefined" == typeof FontFace || !font.fontUrl) return;
            const fontFace = new FontFace(font.fontFamily, `url(${font.fontUrl})`), fontSet = document.fonts;
            null == (_fontSet$add = fontSet.add) || _fontSet$add.call(fontSet, fontFace), fontFace.load().then(scheduleContainTextNodesMeasurement).catch(() => {});
        }(font); else if (hasCanvas) return renderer$1.stage.loadFont("canvas", font);
    }));
}

var States = class extends Array {
    constructor(callback, initialState = {}) {
        var _super = (..._args) => (super(..._args), this.onChange = void 0, this);
        return isArray(initialState) ? _super(...initialState) : isString(initialState) ? _super(initialState) : _super(...Object.entries(initialState).filter(([_key, value]) => value).map(([key]) => key)), 
        this.onChange = callback, this;
    }
    has(state) {
        return this.indexOf(state) >= 0 || this.indexOf(`$${state}`) >= 0;
    }
    is(state) {
        return this.indexOf(state) >= 0;
    }
    add(state) {
        this.has(state) || (this.push(state), this.onChange());
    }
    toggle(state, force) {
        !0 === force ? this.add(state) : !1 === force || this.has(state) ? this.remove(state) : this.add(state);
    }
    merge(newStates) {
        if (isArray(newStates)) this.length = 0, this.push(...newStates); else if (isString(newStates)) this.length = 0, 
        this.push(newStates); else for (const state in newStates) if (newStates[state]) this.has(state) || this.push(state); else {
            const stateIndexToRemove = this.indexOf(state);
            stateIndexToRemove >= 0 && this.splice(stateIndexToRemove, 1);
        }
        return this;
    }
    remove(state) {
        const stateIndexToRemove = this.indexOf(state);
        stateIndexToRemove >= 0 && (this.splice(stateIndexToRemove, 1), this.onChange());
    }
};

function getArrayValue(val, index, defaultValue = 0) {
    var _result;
    if (void 0 === val) return defaultValue;
    if ("number" == typeof val) return val;
    const len = val.length;
    let result;
    return result = 2 === len ? index % 2 == 0 ? val[0] : val[1] : 3 === len ? 0 === index ? val[0] : 2 === index ? val[2] : val[1] : val[index], 
    null !== (_result = result) && void 0 !== _result ? _result : defaultValue;
}

var _signalWrapper = cb => cb(), keyMapEntries = {
    ArrowLeft: "Left",
    ArrowRight: "Right",
    ArrowUp: "Up",
    ArrowDown: "Down",
    Enter: "Enter",
    l: "Last",
    " ": "Space",
    Backspace: "Back",
    Escape: "Escape"
}, keyHoldMapEntries = {}, flattenKeyMap = (keyMap, targetMap) => {
    const newTargetMap = targetMap;
    for (const [key, value] of Object.entries(keyMap)) Array.isArray(value) ? value.forEach(v => {
        newTargetMap[v] = key;
    }) : null === value ? delete newTargetMap[key] : newTargetMap[value] = key;
    return newTargetMap;
}, needFocusDebugStyles = !0;

var lastInputKey, [focusPath, setFocusPath] = createSignal([]), updateFocusPath = (currentFocusedElm, prevFocusedElm) => {
    let current = currentFocusedElm;
    const fp = [], fpSet = new Set;
    for (;current; ) {
        var _current$onFocus, _current$onFocusChang;
        if (!current.states.has(Config.focusStateKey) || current === currentFocusedElm) current.states.add(Config.focusStateKey), 
        null == (_current$onFocus = current.onFocus) || _current$onFocus.call(current, currentFocusedElm, prevFocusedElm, current), 
        null == (_current$onFocusChang = current.onFocusChanged) || _current$onFocusChang.call(current, !0, currentFocusedElm, prevFocusedElm, current);
        fp.push(current), fpSet.add(current), current = current.parent;
    }
    const prevFp = focusPath();
    prevFp.forEach(elm => {
        var _elm$onBlur, _elm$onFocusChanged;
        fpSet.has(elm) || (elm.states.remove(Config.focusStateKey), null == (_elm$onBlur = elm.onBlur) || _elm$onBlur.call(elm, currentFocusedElm, prevFocusedElm, elm), 
        null == (_elm$onFocusChanged = elm.onFocusChanged) || _elm$onFocusChanged.call(elm, !1, currentFocusedElm, prevFocusedElm, elm));
    }), Config.focusDebug && ((prevFocusPath, newFocusPath) => {
        if (needFocusDebugStyles) {
            const style = document.createElement("style");
            style.type = "text/css", style.innerHTML = '\n      [data-focus="3"] {\n        border: 2px solid rgba(255, 33, 33, 0.2);\n        border-radius: 5px;\n        transition: border-color 0.3s ease;\n      }\n\n      [data-focus="2"] {\n        border: 2px solid rgba(255, 33, 33, 0.4);\n        border-radius: 5px;\n        transition: border-color 0.3s ease;\n      }\n\n      [data-focus="1"] {\n        border: 4px solid rgba(255, 33, 33, 0.9);\n        border-radius: 5px;\n        transition: border-color 0.5s ease;\n      }\n    ', 
            document.head.appendChild(style), needFocusDebugStyles = !1;
        }
        prevFocusPath.forEach(elm => {
            elm.data = {
                ...elm.data,
                focus: void 0
            };
        }), newFocusPath.forEach((elm, i) => {
            elm.data = {
                ...elm.data,
                focus: i + 1
            };
        });
    })(prevFp, fp), _signalWrapper(() => setFocusPath(fp));
}, lastGlobalKeyPressTime = 0, isElementThrottled = (elm, sameKey, currentTime) => void 0 !== elm.throttleInput && sameKey && void 0 !== elm._lastAnyKeyPressTime && currentTime - elm._lastAnyKeyPressTime < elm.throttleInput, propagateKeyPress = (e, mappedEvent, isHold = !1, isUp = !1) => {
    const currentTime = performance.now(), key = e.key || e.keyCode, sameKey = lastInputKey === key;
    if (lastInputKey = key, !isUp && Config.throttleInput) {
        if (sameKey && currentTime - lastGlobalKeyPressTime < Config.throttleInput) return !1;
        lastGlobalKeyPressTime = currentTime;
    }
    isUp || {
        keyPressed: key,
        mappedKey: mappedEvent
    };
    const fp = focusPath();
    if (0 === fp.length) return !1;
    if (((fp, e, mappedEvent, isUp, sameKey, currentTime) => {
        const finalFocusElm = fp[0], captureEvent = `onCapture${mappedEvent || e.key}${isUp ? "Release" : ""}`, captureKey = isUp ? "onCaptureKeyRelease" : "onCaptureKey";
        for (let i = fp.length - 1; i >= 0; i--) {
            const elm = fp[i];
            if (isElementThrottled(elm, sameKey, currentTime)) return !0;
            const captureHandler = elm[captureEvent] || elm[captureKey];
            if (isFunction(captureHandler) && !0 === captureHandler.call(elm, e, elm, finalFocusElm, mappedEvent)) return elm._lastAnyKeyPressTime = currentTime, 
            !0;
        }
        return !1;
    })(fp, e, mappedEvent, isUp, sameKey, currentTime)) return !0;
    const {handled: handled, lastHandlerSeen: lastHandlerSeen} = ((fp, e, mappedEvent, isHold, isUp, sameKey, currentTime) => {
        const finalFocusElm = fp[0], eventHandlerKey = mappedEvent ? isUp ? `on${mappedEvent}Release` : `on${mappedEvent}` : void 0, fallbackHandlerKey = isUp ? void 0 : isHold ? "onKeyHold" : "onKeyPress";
        let lastHandlerSeen;
        for (let i = 0; i < fp.length; i++) {
            const elm = fp[i];
            if (isElementThrottled(elm, sameKey, currentTime)) return {
                handled: !0,
                lastHandlerSeen: lastHandlerSeen
            };
            let handled = !1;
            if (eventHandlerKey) {
                const eventHandler = elm[eventHandlerKey];
                isFunction(eventHandler) && (lastHandlerSeen = elm, handled = !0 === eventHandler.call(elm, e, elm, finalFocusElm));
            }
            if (!handled && fallbackHandlerKey) {
                const fallbackHandler = elm[fallbackHandlerKey];
                isFunction(fallbackHandler) && (lastHandlerSeen = elm, handled = !0 === fallbackHandler.call(elm, e, mappedEvent, elm, finalFocusElm));
            }
            if (handled) return elm._lastAnyKeyPressTime = currentTime, {
                handled: !0,
                lastHandlerSeen: lastHandlerSeen
            };
        }
        return {
            handled: !1,
            lastHandlerSeen: lastHandlerSeen
        };
    })(fp, e, mappedEvent, isHold, isUp, sameKey, currentTime);
    return !!handled;
}, keyHoldTimeouts = {}, handleKeyEvents = (delay, keydown, keyup) => {
    if (keydown) {
        const key = keydown.key || keydown.keyCode, mappedKeyHoldEvent = keyHoldMapEntries[keydown.key] || keyHoldMapEntries[keydown.keyCode], mappedKeyEvent = keyMapEntries[keydown.key] || keyMapEntries[keydown.keyCode];
        if (mappedKeyHoldEvent) return void (keyHoldTimeouts[key] || (keyHoldTimeouts[key] = window.setTimeout(() => {
            keyHoldTimeouts[key] = !0, propagateKeyPress(keydown, mappedKeyHoldEvent, !0);
        }, delay)));
        propagateKeyPress(keydown, mappedKeyEvent, !1);
    } else if (keyup) {
        const key = keyup.key || keyup.keyCode, mappedKeyEvent = keyMapEntries[keyup.key] || keyMapEntries[keyup.keyCode];
        !0 === keyHoldTimeouts[key] ? delete keyHoldTimeouts[key] : keyHoldTimeouts[key] && (clearTimeout(keyHoldTimeouts[key]), 
        delete keyHoldTimeouts[key], propagateKeyPress(keyup, mappedKeyEvent, !1)), propagateKeyPress(keyup, mappedKeyEvent, !1, !0);
    }
}, useFocusManager = (userKeyMap, keyHoldOptions) => {
    userKeyMap && flattenKeyMap(userKeyMap, keyMapEntries), (null == keyHoldOptions ? void 0 : keyHoldOptions.userKeyHoldMap) && flattenKeyMap(keyHoldOptions.userKeyHoldMap, keyHoldMapEntries);
    const owner = getOwner(), ownerContext = cb => {
        runWithOwner(owner, cb);
    };
    _signalWrapper = ownerContext, Config.setActiveElement = elm => ownerContext(() => setActiveElement(elm));
    const delay = (null == keyHoldOptions ? void 0 : keyHoldOptions.holdThreshold) || 500, runKeyEvent = handleKeyEvents.bind(null, delay), keyPressHandler = event => ownerContext(() => runKeyEvent(event, void 0)), keyUpHandler = event => ownerContext(() => runKeyEvent(void 0, event));
    document.addEventListener("keydown", keyPressHandler), document.addEventListener("keyup", keyUpHandler), 
    onCleanup(() => {
        document.removeEventListener("keydown", keyPressHandler), document.removeEventListener("keyup", keyUpHandler);
        for (const timeout of Object.values(keyHoldTimeouts)) timeout && !0 !== timeout && clearTimeout(timeout);
    });
};

var _fontTemplate, calculateFlex = function(node) {
    var _node$paddingTop, _node$paddingRight, _node$paddingBottom, _node$paddingLeft;
    const direction = node.flexDirection || "row", isRow = "row" === direction || "row-reverse" === direction, isReverse = "row-reverse" === direction || "column-reverse" === direction, dimension = isRow ? "width" : "height", crossDimension = isRow ? "height" : "width", nodePadding = node.padding, paddingTop = null !== (_node$paddingTop = node.paddingTop) && void 0 !== _node$paddingTop ? _node$paddingTop : getArrayValue(nodePadding, 0), paddingRight = null !== (_node$paddingRight = node.paddingRight) && void 0 !== _node$paddingRight ? _node$paddingRight : getArrayValue(nodePadding, 1), paddingBottom = null !== (_node$paddingBottom = node.paddingBottom) && void 0 !== _node$paddingBottom ? _node$paddingBottom : getArrayValue(nodePadding, 2), paddingLeft = null !== (_node$paddingLeft = node.paddingLeft) && void 0 !== _node$paddingLeft ? _node$paddingLeft : getArrayValue(nodePadding, 3), paddingStart = isRow ? paddingLeft : paddingTop, paddingEnd = isRow ? paddingRight : paddingBottom, paddingCrossStart = isRow ? paddingTop : paddingLeft, paddingCrossEnd = isRow ? paddingBottom : paddingRight, nodePaddingTotal = paddingStart + paddingEnd, minDimension = isRow ? "minWidth" : "minHeight", crossMinDimension = isRow ? "minHeight" : "minWidth", children = node.children, numChildren = children.length;
    if (0 === numChildren) return !1;
    const processableChildrenIndices = [];
    let hasOrder = !1, totalFlexGrow = 0, totalFlexShrink = 0;
    for (let i = 0; i < numChildren; i++) {
        const c = children[i];
        if (isElementText(c) && c.text && !c.width && !c.height) return !1;
        if (isTextNode(c) || !1 === c.flexItem) continue;
        void 0 !== c.flexOrder && (hasOrder = !0);
        const flexGrow = c.flexGrow;
        void 0 !== flexGrow && flexGrow > 0 && (totalFlexGrow += flexGrow);
        const flexShrink = c.flexShrink;
        void 0 !== flexShrink && flexShrink > 0 && (totalFlexShrink += flexShrink), c[minDimension] && (c[dimension] || 0) < c[minDimension] && (c[dimension] = c[minDimension]), 
        c[crossMinDimension] && (c[crossDimension] || 0) < c[crossMinDimension] && (c[crossDimension] = c[crossMinDimension]), 
        processableChildrenIndices.push(i);
    }
    hasOrder && processableChildrenIndices.sort((aIdx, bIdx) => {
        const a = children[aIdx], b = children[bIdx];
        return (a.flexOrder || 0) - (b.flexOrder || 0);
    }), (isReverse || "rtl" === node.direction) && processableChildrenIndices.reverse();
    const numProcessedChildren = processableChildrenIndices.length;
    if (0 === numProcessedChildren) return !1;
    const prop = isRow ? "x" : "y", crossProp = isRow ? "y" : "x", containerSize = Math.max(node[dimension] || 0, node[minDimension] || 0, 0);
    let containerCrossSize = Math.max(node[crossDimension] || 0, node[crossMinDimension] || 0, 0);
    const isWrapReverse = "wrap-reverse" === node.flexWrap, gap = node.gap || 0, justify = node.justifyContent || "flexStart", align = node.alignItems || (node.flexWrap ? "flexStart" : void 0);
    let containerUpdated = !1;
    const childMainSizes = new Float32Array(numProcessedChildren), childMarginStarts = new Float32Array(numProcessedChildren), childMarginEnds = new Float32Array(numProcessedChildren), childTotalMainSizes = new Float32Array(numProcessedChildren), childCrossSizes = new Float32Array(numProcessedChildren), childMarginCrossStarts = new Float32Array(numProcessedChildren), childMarginCrossEnds = new Float32Array(numProcessedChildren);
    let sumOfFlexBaseSizesWithMargins = 0;
    for (let idx = 0; idx < numProcessedChildren; idx++) {
        const c = children[processableChildrenIndices[idx]], marginArray = c.margin, flexBasis = c.flexBasis, isBasisAuto = void 0 === flexBasis || "auto" === flexBasis, computedBasis = isBasisAuto ? c[dimension] || 0 : flexBasis, baseMainSize = isBasisAuto ? computedBasis : Math.max(computedBasis, c[minDimension] || 0), marginStart = isRow ? c.marginLeft || getArrayValue(marginArray, 3) : c.marginTop || getArrayValue(marginArray, 0), marginEnd = isRow ? c.marginRight || getArrayValue(marginArray, 1) : c.marginBottom || getArrayValue(marginArray, 2), marginCrossStart = isRow ? c.marginTop || getArrayValue(marginArray, 0) : c.marginLeft || getArrayValue(marginArray, 3), marginCrossEnd = isRow ? c.marginBottom || getArrayValue(marginArray, 2) : c.marginRight || getArrayValue(marginArray, 1);
        childMainSizes[idx] = baseMainSize, childMarginStarts[idx] = marginStart, childMarginEnds[idx] = marginEnd, 
        childTotalMainSizes[idx] = baseMainSize + marginStart + marginEnd, childCrossSizes[idx] = c[crossDimension] || 0, 
        childMarginCrossStarts[idx] = marginCrossStart, childMarginCrossEnds[idx] = marginCrossEnd, 
        sumOfFlexBaseSizesWithMargins += childTotalMainSizes[idx];
    }
    if ((totalFlexGrow > 0 || totalFlexShrink > 0) && numProcessedChildren > 1) {
        node.flexBoundary = node.flexBoundary || "fixed";
        const availableSpace = containerSize - sumOfFlexBaseSizesWithMargins - (numProcessedChildren > 0 ? gap * (numProcessedChildren - 1) : 0);
        if (availableSpace > 0 && totalFlexGrow > 0) {
            for (let idx = 0; idx < numProcessedChildren; idx++) {
                const c = children[processableChildrenIndices[idx]], flexGrowValue = c.flexGrow || 0;
                if (flexGrowValue > 0) {
                    const shareOfSpace = flexGrowValue / totalFlexGrow * availableSpace, newMainSize = childMainSizes[idx] + shareOfSpace;
                    c[dimension] = newMainSize, childMainSizes[idx] = newMainSize, childTotalMainSizes[idx] = newMainSize + childMarginStarts[idx] + childMarginEnds[idx];
                }
            }
            node._containsFlexGrow = !node._containsFlexGrow || null;
        } else if (availableSpace < 0 && totalFlexShrink > 0) {
            let totalScaledShrinkFactor = 0;
            for (let idx = 0; idx < numProcessedChildren; idx++) {
                totalScaledShrinkFactor += (children[processableChildrenIndices[idx]].flexShrink || 0) * childMainSizes[idx];
            }
            if (totalScaledShrinkFactor > 0) for (let idx = 0; idx < numProcessedChildren; idx++) {
                const c = children[processableChildrenIndices[idx]], flexShrinkValue = c.flexShrink || 0;
                if (flexShrinkValue > 0) {
                    const sizeReduction = flexShrinkValue * childMainSizes[idx] / totalScaledShrinkFactor * Math.abs(availableSpace);
                    let newMainSize = childMainSizes[idx] - sizeReduction;
                    const minBound = c[minDimension] || 0;
                    newMainSize < minBound && (newMainSize = minBound), c[dimension] = newMainSize, 
                    childMainSizes[idx] = newMainSize, childTotalMainSizes[idx] = newMainSize + childMarginStarts[idx] + childMarginEnds[idx];
                }
            }
            node._containsFlexGrow = !node._containsFlexGrow || null;
        } else node._containsFlexGrow && (node._containsFlexGrow = null);
    }
    let totalItemSize = 0;
    if ("center" === justify || "spaceBetween" === justify || "spaceEvenly" === justify || "spaceAround" === justify) for (let idx = 0; idx < numProcessedChildren; idx++) totalItemSize += childTotalMainSizes[idx];
    const doCrossAlign = containerCrossSize ? (c, idx, crossCurrentPos = 0) => {
        const alignSelf = c.alignSelf || align;
        alignSelf && ("flexStart" === alignSelf ? c[crossProp] = crossCurrentPos + childMarginCrossStarts[idx] : "center" === alignSelf ? c[crossProp] = crossCurrentPos + (containerCrossSize - childCrossSizes[idx]) / 2 + childMarginCrossStarts[idx] : "flexEnd" === alignSelf && (c[crossProp] = crossCurrentPos + containerCrossSize - childCrossSizes[idx] - childMarginCrossEnds[idx]));
    } : (_c, _idx, _crossCurrentPos = 0) => {};
    if (isRow && node._calcHeight && !node.flexCrossBoundary) {
        let maxHeight = 0;
        for (let idx = 0; idx < numProcessedChildren; idx++) childCrossSizes[idx] > maxHeight && (maxHeight = childCrossSizes[idx]);
        const newHeight = maxHeight || node.height;
        newHeight !== node.height && (containerUpdated = !0, node.height = containerCrossSize = newHeight);
    }
    let currentPos = paddingStart;
    if ("flexStart" === justify) {
        if ("wrap" === node.flexWrap) {
            var _node$columnGap, _node$rowGap;
            const childCrossSizeVar = numProcessedChildren > 0 ? childCrossSizes[0] : containerCrossSize;
            let crossCurrentPos = isWrapReverse ? containerCrossSize - paddingCrossEnd - childCrossSizeVar : paddingCrossStart;
            const crossGap = isRow ? null !== (_node$columnGap = node.columnGap) && void 0 !== _node$columnGap ? _node$columnGap : gap : null !== (_node$rowGap = node.rowGap) && void 0 !== _node$rowGap ? _node$rowGap : gap;
            for (let idx = 0; idx < numProcessedChildren; idx++) {
                const c = children[processableChildrenIndices[idx]];
                currentPos + childTotalMainSizes[idx] > containerSize && currentPos > paddingStart && (currentPos = paddingStart, 
                crossCurrentPos += isWrapReverse ? -(childCrossSizeVar + crossGap) : childCrossSizeVar + crossGap), 
                c[prop] = currentPos + childMarginStarts[idx], currentPos += childTotalMainSizes[idx] + gap, 
                doCrossAlign(c, idx, crossCurrentPos);
            }
            const finalCrossSize = isWrapReverse ? containerCrossSize - crossCurrentPos + paddingCrossStart : crossCurrentPos + childCrossSizeVar + paddingCrossEnd;
            node[crossDimension] !== finalCrossSize && (node[`preFlex${crossDimension}`] = node[crossDimension], 
            node[crossDimension] = finalCrossSize, containerUpdated = !0);
        } else for (let idx = 0; idx < numProcessedChildren; idx++) {
            const c = children[processableChildrenIndices[idx]];
            c[prop] = currentPos + childMarginStarts[idx], currentPos += childTotalMainSizes[idx] + gap, 
            doCrossAlign(c, idx, paddingCrossStart);
        }
        if ("fixed" !== node.flexBoundary && "wrap" !== node.flexWrap) {
            let calculatedSize = currentPos - gap + paddingEnd;
            const minSize = node[minDimension] || 0;
            if (calculatedSize < minSize && (calculatedSize = minSize), calculatedSize !== (node[dimension] || 0)) return node[`preFlex${dimension}`] = containerSize, 
            node[dimension] = calculatedSize, !0;
        }
    } else if ("flexEnd" === justify) {
        currentPos = containerSize - paddingEnd;
        for (let idx = numProcessedChildren - 1; idx >= 0; idx--) {
            const c = children[processableChildrenIndices[idx]];
            c[prop] = currentPos - childMainSizes[idx] - childMarginEnds[idx], currentPos -= childTotalMainSizes[idx] + gap, 
            doCrossAlign(c, idx, paddingCrossStart);
        }
    } else if ("center" === justify) {
        currentPos = (containerSize - (totalItemSize + gap * (numProcessedChildren - 1))) / 2 + paddingStart;
        for (let idx = 0; idx < numProcessedChildren; idx++) {
            const c = children[processableChildrenIndices[idx]];
            c[prop] = currentPos + childMarginStarts[idx], currentPos += childTotalMainSizes[idx] + gap, 
            doCrossAlign(c, idx, paddingCrossStart);
        }
    } else if ("spaceBetween" === justify) {
        const spaceBetween = numProcessedChildren > 1 ? (containerSize - totalItemSize - nodePaddingTotal) / (numProcessedChildren - 1) : 0;
        currentPos = paddingStart;
        for (let idx = 0; idx < numProcessedChildren; idx++) {
            const c = children[processableChildrenIndices[idx]];
            c[prop] = currentPos + childMarginStarts[idx], currentPos += childTotalMainSizes[idx] + spaceBetween, 
            doCrossAlign(c, idx, paddingCrossStart);
        }
    } else if ("spaceAround" === justify) {
        const spaceAround = numProcessedChildren > 0 ? (containerSize - totalItemSize - nodePaddingTotal) / numProcessedChildren : 0;
        currentPos = paddingStart + spaceAround / 2;
        for (let idx = 0; idx < numProcessedChildren; idx++) {
            const c = children[processableChildrenIndices[idx]];
            c[prop] = currentPos + childMarginStarts[idx], currentPos += childTotalMainSizes[idx] + spaceAround, 
            doCrossAlign(c, idx, paddingCrossStart);
        }
    } else if ("spaceEvenly" === justify) {
        const spaceEvenly = (containerSize - totalItemSize - nodePaddingTotal) / (numProcessedChildren + 1);
        currentPos = spaceEvenly + paddingStart;
        for (let idx = 0; idx < numProcessedChildren; idx++) {
            const c = children[processableChildrenIndices[idx]];
            c[prop] = currentPos + childMarginStarts[idx], currentPos += childTotalMainSizes[idx] + spaceEvenly, 
            doCrossAlign(c, idx, paddingCrossStart);
        }
    }
    return containerUpdated;
}, postMutationQueued = !1, nextActiveElement = null, deferredFocusElement = null, layoutQueue = new Set, elementDeleteQueue = [];

function enqueueDelete(node, n) {
    void 0 === node._queueDelete ? (node._queueDelete = n, 1 === elementDeleteQueue.push(node) && schedulePostMutation()) : node._queueDelete += n;
}

function schedulePostMutation() {
    postMutationQueued || (postMutationQueued = !0, "reprocessUpdates" in renderer$1.stage && renderer$1.stage.reprocessUpdates && renderer$1.stage.reprocessUpdates(runPostMutation), 
    queueMicrotask(runPostMutation));
}

function runPostMutation() {
    if (postMutationQueued = !1, elementDeleteQueue.length > 0) {
        for (const el of elementDeleteQueue) {
            var _el$_queueDelete;
            (null !== (_el$_queueDelete = el._queueDelete) && void 0 !== _el$_queueDelete ? _el$_queueDelete : 0) < 0 && el.destroy(), 
            el._queueDelete = void 0;
        }
        elementDeleteQueue.length = 0;
    }
    for (;layoutQueue.size > 0; ) {
        const queue = [ ...layoutQueue ];
        layoutQueue.clear();
        for (let i = queue.length - 1; i >= 0; i--) queue[i].updateLayout();
    }
    if (null !== deferredFocusElement) {
        const el = deferredFocusElement;
        deferredFocusElement = null, el.setFocus();
    } else if (null !== nextActiveElement) {
        const element = nextActiveElement;
        nextActiveElement = null, (elm => {
            const prev = activeElement();
            elm !== prev && (updateFocusPath(elm, prev), Config.setActiveElement(elm));
        })(element);
    }
}

function addToLayoutQueue(node) {
    layoutQueue.add(node), schedulePostMutation();
}

var _fontFamilyWithWeight, _fontFamilyIdx = -1;

var EFFECT_SHADER_KEYS = [ "border", "borderTop", "borderRight", "borderBottom", "borderLeft", "shadow" ], parseAndAssignShaderProps = (prefix, obj, props = {}) => {
    if (!obj) return;
    const side = {
        borderBottom: "bottom",
        borderLeft: "left",
        borderRight: "right",
        borderTop: "top"
    }[prefix], actualPrefix = side ? "border" : prefix;
    props[actualPrefix] = obj, Object.entries(obj).forEach(([key, value]) => {
        let transformedKey = "width" === key ? "w" : key;
        side && "w" === transformedKey && (transformedKey = side), props[`${actualPrefix}-${transformedKey}`] = value;
    });
};

function getPropertyAlias(name) {
    return "w" === name ? "width" : "h" === name ? "height" : name;
}

var ElementNode = class {
    constructor(name) {
        this._type = "text" === name ? NodeType_TextNode : NodeType_Element, this.rendered = !1, 
        this.lng = {
            w: void 0,
            h: void 0,
            x: void 0,
            y: void 0,
            alpha: void 0,
            color: void 0,
            shader: void 0,
            clipping: void 0,
            text: void 0,
            ignoreParentAlpha: void 0,
            placeholderColor: void 0
        }, this.children = [], this._queueDelete = void 0, this._animationQueue = void 0, 
        this._animationQueueSettings = void 0, this._animationRunning = void 0, this._animationSettings = void 0, 
        this._autofocus = void 0, this._calcWidth = void 0, this._calcHeight = void 0, this._containsFlexGrow = void 0, 
        this._hasRenderedChildren = void 0, this._effects = void 0, this._fontFamily = void 0, 
        this._fontWeight = void 0, this._id = void 0, this._parent = void 0, this._states = void 0, 
        this._style = void 0, this._theme = void 0, this._lastAnyKeyPressTime = void 0, 
        this._undoStyles = void 0, this._display = void 0, this._onLayout = void 0, this._requiresLayout = !1;
    }
    get effects() {
        return this.lng.shader;
    }
    _writeShaderTarget(target) {
        this.rendered ? this.lng.shader ? DOM_RENDERING && Config.domRendererEnabled && (this.lng.shader = this.lng.shader) : this.lng.shader = Config.convertToShader(this, target) : this.lng.shader = target;
    }
    set effects(v) {
        var _this$lng$shader;
        if (!SHADERS_ENABLED) return;
        let target = this.lng.shader || {};
        (null == (_this$lng$shader = this.lng.shader) ? void 0 : _this$lng$shader.props) && (target = this.lng.shader.props), 
        v.rounded && (target.radius = v.rounded.radius), v.borderRadius && (target.radius = v.borderRadius);
        for (const k of EFFECT_SHADER_KEYS) v[k] && parseAndAssignShaderProps(k, v[k], target);
        this._writeShaderTarget(target);
    }
    set id(id) {
        this._id = id, Config.rendererOptions && "inspector" in Config.rendererOptions && Config.rendererOptions.inspector && (this.data = {
            ...this.data,
            testId: id
        });
    }
    get id() {
        return this._id;
    }
    get parent() {
        return this._parent;
    }
    set parent(p) {
        var _p$lng;
        (this._parent = p, this.rendered && (null == p ? void 0 : p.rendered)) && (this.lng.parent = null !== (_p$lng = p.lng) && void 0 !== _p$lng ? _p$lng : null);
    }
    get height() {
        return this.maxHeight || this.h;
    }
    set height(h) {
        this.h = h;
    }
    get width() {
        return this.maxWidth || this.w;
    }
    set width(w) {
        this.w = w;
    }
    set fontWeight(v) {
        var _ref, _Config$fontSettings;
        if (this._fontWeight === v) return;
        this._fontWeight = v;
        const weight = null !== (_ref = Config.fontWeightAlias && Config.fontWeightAlias[v]) && void 0 !== _ref ? _ref : v;
        this.lng.fontFamily = `${this.fontFamily || (null == (_Config$fontSettings = Config.fontSettings) ? void 0 : _Config$fontSettings.fontFamily)}${weight}`;
    }
    get fontWeight() {
        return this._fontWeight;
    }
    set fontFamily(v) {
        this._fontFamily = v, this.lng.fontFamily = v;
    }
    get fontFamily() {
        return this._fontFamily;
    }
    insertChild(node, beforeNode) {
        node.parent && (node.parent.removeChild(node), this.rendered || (this._hasRenderedChildren = !0)), 
        node.parent = this, beforeNode && (spliceItem(this.children, node, 1), spliceItem(this.children, beforeNode, 0, node) > -1) || this.children.push(node);
    }
    removeChild(node) {
        spliceItem(this.children, node, 1) > -1 && (isElementNode(node) && node.onRemove && node.onRemove.call(node, node), 
        this.requiresLayout() && addToLayoutQueue(this));
    }
    get selectedNode() {
        for (let i = this.selected || 0; i < this.children.length; i++) {
            const element = this.children[i];
            if (isElementNode(element)) return this.selected = i, element;
        }
    }
    set shader(shaderProps) {
        this.lng.shader = isArray(shaderProps) ? renderer$1.createShader(...shaderProps) : shaderProps;
    }
    _sendToLightningAnimatable(name, value) {
        if (this.rendered && this.transition && Config.animationsEnabled && (!0 === this.transition || this.transition[name] || this.transition[getPropertyAlias(name)])) {
            const animationSettings = !0 === this.transition || !0 === this.transition[name] ? void 0 : this.transition[name] || this.transition[getPropertyAlias(name)];
            if (!("animateProp" in this.lng)) {
                const animationController = this.animate({
                    [name]: value
                }, animationSettings);
                return this._fireAnimationEvents(name, value, animationSettings), animationController.start();
            }
            const result = this.lng.animateProp(name, value, animationSettings || this.animationSettings || {});
            return this._fireAnimationEvents(name, value, animationSettings), result;
        }
        this.lng[name] = value;
    }
    _fireAnimationEvents(name, value, animationSettings) {
        if (!this.onAnimation) return;
        const settings = animationSettings || this.animationSettings, {animating: animating, stopped: stopped} = this.onAnimation;
        if (animating && animating.call(this, name, value), stopped) {
            var _settings$duration, _settings$delay;
            const total = (null !== (_settings$duration = null == settings ? void 0 : settings.duration) && void 0 !== _settings$duration ? _settings$duration : 0) + (null !== (_settings$delay = null == settings ? void 0 : settings.delay) && void 0 !== _settings$delay ? _settings$delay : 0);
            setTimeout(() => stopped.call(this, name, value), total);
        }
    }
    animate(props, animationSettings) {
        return this.lng.animate(props, animationSettings || this.animationSettings || {});
    }
    chain(props, animationSettings) {
        return this._animationRunning && (this._animationQueue = [], this._animationRunning = !1), 
        animationSettings ? this._animationQueueSettings = animationSettings : this._animationQueueSettings || (this._animationQueueSettings = animationSettings || this.animationSettings), 
        animationSettings = animationSettings || this._animationQueueSettings, this._animationQueue = this._animationQueue || [], 
        this._animationQueue.push({
            props: props,
            animationSettings: animationSettings
        }), this;
    }
    async start() {
        let animation = this._animationQueue.shift();
        for (;animation; ) this._animationRunning = !0, await this.animate(animation.props, animation.animationSettings).start().waitUntilStopped(), 
        animation = this._animationQueue.shift();
        this._animationRunning = !1, this._animationQueueSettings = void 0;
    }
    emit(event, ...args) {
        let current = this;
        const capitalizedEvent = `on${event.charAt(0).toUpperCase()}${event.slice(1)}`;
        for (;current; ) {
            const handler = current[capitalizedEvent];
            if (isFunction(handler) && !0 === handler.call(current, this, ...args)) return !0;
            current = current.parent;
        }
        return !1;
    }
    setFocus() {
        if (this.rendered) {
            if (void 0 !== this.forwardFocus) if (isFunction(this.forwardFocus)) {
                if (!1 !== this.forwardFocus.call(this, this)) return;
            } else {
                const focusedIndex = "number" == typeof this.forwardFocus ? this.forwardFocus : null, nodes = this.children;
                if (null !== focusedIndex && focusedIndex < nodes.length) {
                    const child = nodes[focusedIndex];
                    return void (isElementNode(child) && child.setFocus());
                }
            }
            nextActiveElement = this, schedulePostMutation();
        } else this._autofocus = !0;
    }
    _layoutOnLoad() {
        this.lng.on("loaded", () => {
            schedulePostMutation(), this.parent.updateLayout();
        });
    }
    getText() {
        const len = this.children.length;
        if (1 === len) return this.children[0].text;
        if (0 === len) return "";
        let result = "";
        for (let i = 0; i < len; i++) result += this.children[i].text;
        return result;
    }
    destroy() {
        if (this.onDestroy) {
            const destroyPromise = this.onDestroy(this);
            destroyPromise instanceof Promise ? destroyPromise.then(() => this._destroy()) : this._destroy();
        } else this._destroy();
    }
    _destroy() {
        isINode(this.lng) && this.lng.destroy();
    }
    set style(style) {
        if ((!Config.lockStyles || !this._style) && style) {
            this._style = style;
            for (const key in this._style) void 0 === this[key] && (this[key] = this._style[key]);
        }
    }
    get style() {
        return this._style || {};
    }
    set theme(styles) {
        if (styles) {
            this._theme = styles;
            for (const key in styles) this[key] = styles[key];
        }
    }
    get theme() {
        return this._theme = this._theme || {}, this._theme;
    }
    get hasChildren() {
        return this.children.length > 0;
    }
    set src(src) {
        "string" == typeof src ? (this.lng.src = src, !this.color && this.rendered && (this.color = 4294967295)) : this.color = 0;
    }
    get src() {
        return this.lng.src;
    }
    getChildById(id) {
        return this.children.find(c => c.id === id);
    }
    searchChildrenById(id) {
        for (let i = 0; i < this.children.length; i++) {
            const child = this.children[i];
            if (isElementNode(child)) {
                if (child.id === id) return child;
                const found = child.searchChildrenById(id);
                if (found) return found;
            }
        }
    }
    set states(states) {
        this._states = this._states ? this._states.merge(states) : new States(this._stateChanged.bind(this), states), 
        this.rendered && this._stateChanged();
    }
    get states() {
        return this._states = this._states || new States(this._stateChanged.bind(this)), 
        this._states;
    }
    get animationSettings() {
        return this._animationSettings || Config.animationSettings;
    }
    set animationSettings(animationSettings) {
        this._animationSettings = animationSettings;
    }
    set hidden(val) {
        this.alpha = val ? 0 : 1;
    }
    get hidden() {
        return 0 === this.alpha;
    }
    get preserve() {
        return 0 === this._queueDelete;
    }
    set preserve(v) {
        this._queueDelete = v ? 0 : void 0;
    }
    set autofocus(val) {
        this._autofocus = val, val && (deferredFocusElement = this, schedulePostMutation());
    }
    get autofocus() {
        return this._autofocus;
    }
    get display() {
        return this._display;
    }
    set display(v) {
        this._display = v, this._requiresLayout = "flex" === v || void 0 !== this._onLayout;
    }
    get onLayout() {
        return this._onLayout;
    }
    set onLayout(fn) {
        this._onLayout = fn, this._requiresLayout = "flex" === this._display || void 0 !== fn;
    }
    requiresLayout() {
        return this._requiresLayout;
    }
    set updateLayoutOn(_v) {
        this.updateLayout();
    }
    get updateLayoutOn() {
        return null;
    }
    updateLayout() {
        if (this.hasChildren) {
            if ("flex" === this.display && this.flexGrow && 0 === this.width) return;
            const flexChanged = "flex" === this.display && calculateFlex(this);
            layoutQueue.delete(this);
            const onLayoutChanged = isFunction(this.onLayout) && this.onLayout.call(this, this);
            (flexChanged || onLayoutChanged) && this.parent && addToLayoutQueue(this.parent), 
            !0 === this._containsFlexGrow && this.children.forEach(c => {
                "flex" === c.display && isElementNode(c) && (calculateFlex(c), isFunction(c.onLayout) && c.onLayout.call(c, c), 
                addToLayoutQueue(this));
            });
        }
    }
    _stateChanged() {
        if (this.forwardStates) {
            const states = this.states.slice();
            this.children.forEach(c => {
                c.states = states;
            });
        }
        const states = this.states;
        if (this._undoStyles || function(obj, keys) {
            for (const key of keys) if (key in obj) return !0;
            return !1;
        }(this, states)) {
            let stylesToUndo;
            this._undoStyles && this._undoStyles.length && (stylesToUndo = {}, this._undoStyles.forEach(styleKey => {
                let fallbackValue = this.theme[styleKey];
                void 0 === fallbackValue && (fallbackValue = this.style[styleKey]), stylesToUndo[styleKey] = fallbackValue;
            }));
            const numStates = states.length;
            if (0 === numStates) return Object.assign(this, stylesToUndo), void (this._undoStyles = []);
            let newStyles;
            if (1 === numStates) newStyles = this[states[0]], newStyles = stylesToUndo ? {
                ...stylesToUndo,
                ...newStyles
            } : newStyles; else {
                let sortedStates = states;
                const stateOrder = this.stateOrder || Config.stateOrder;
                stateOrder && stateOrder.length > 0 && (sortedStates = states.slice().sort((a, b) => {
                    const aIdx = stateOrder.indexOf(a), bIdx = stateOrder.indexOf(b);
                    return -1 !== aIdx && -1 === bIdx ? 1 : -1 === aIdx && -1 !== bIdx ? -1 : aIdx - bIdx;
                })), newStyles = sortedStates.reduce((acc, state) => {
                    const styles = this[state];
                    return styles ? {
                        ...acc,
                        ...styles
                    } : acc;
                }, stylesToUndo || {});
            }
            newStyles ? (this._undoStyles = Object.keys(newStyles), void 0 !== newStyles.transition && (this.transition = newStyles.transition), 
            Object.assign(this, newStyles)) : this._undoStyles = [];
        }
    }
    render(topNode) {
        var _this$onCreate, _this$onRender2, _node$lng;
        const node = this, parent = this.parent;
        if (!parent) return void console.warn("Parent not set - no node created for: ", this);
        if (!parent.rendered) return void console.warn("Parent not rendered yet: ", this);
        var _this$onRender;
        if (parent.requiresLayout() && layoutQueue.add(parent), this.rendered) return void (null == (_this$onRender = this.onRender) || _this$onRender.call(this, this));
        this._states && this._stateChanged();
        const props = node.lng, parentWidth = parent.w || 0, parentHeight = parent.h || 0;
        if (props.x = props.x || 0, props.y = props.y || 0, props.parent = parent.lng, (this.right || 0 === this.right) && (props.x = parentWidth - this.right, 
        props.mountX = 1), (this.bottom || 0 === this.bottom) && (props.y = parentHeight - this.bottom, 
        props.mountY = 1), this.center && (this.centerX = this.centerY = !0), this.centerX && (props.x += parentWidth / 2, 
        props.mountX = .5), this.centerY && (props.y += parentHeight / 2, props.mountY = .5), 
        isElementText(node)) {
            const textProps = props;
            void 0 === _fontTemplate && function() {
                const tpl = [], fs = Config.fontSettings;
                if (fs) for (const key in fs) "fontFamily" === key && (_fontFamilyIdx = tpl.length, 
                _fontFamilyWithWeight = `${fs.fontFamily}${fs.fontWeight || ""}`), tpl.push([ key, fs[key] ]);
                _fontTemplate = tpl;
            }();
            const tpl = _fontTemplate;
            if (tpl.length > 0) {
                const familyIdx = _fontFamilyIdx, familyWithWeight = void 0 === textProps.fontWeight ? _fontFamilyWithWeight : void 0;
                for (let i = 0; i < tpl.length; i++) {
                    const entry = tpl[i], key = entry[0];
                    void 0 === textProps[key] && (textProps[key] = i === familyIdx && void 0 !== familyWithWeight ? familyWithWeight : entry[1]);
                }
            }
            if (textProps.text = textProps.text || node.getText(), textProps.textAlign && !textProps.contain && console.warn("Text align requires contain: ", node.getText()), 
            textProps.contain) {
                var _textProps$maxWidth, _textProps$maxHeight, _textProps$maxLines;
                if ("both" === textProps.contain) textProps.maxWidth = null !== (_textProps$maxWidth = textProps.maxWidth) && void 0 !== _textProps$maxWidth ? _textProps$maxWidth : textProps.w, 
                textProps.maxHeight = null !== (_textProps$maxHeight = textProps.maxHeight) && void 0 !== _textProps$maxHeight ? _textProps$maxHeight : textProps.h; else if ("width" === textProps.contain) {
                    var _textProps$maxWidth2;
                    textProps.maxWidth = null !== (_textProps$maxWidth2 = textProps.maxWidth) && void 0 !== _textProps$maxWidth2 ? _textProps$maxWidth2 : textProps.w;
                }
                if (!textProps.h && !textProps.maxHeight) textProps.maxLines = null !== (_textProps$maxLines = textProps.maxLines) && void 0 !== _textProps$maxLines ? _textProps$maxLines : 99;
                textProps.maxWidth || (textProps.maxWidth = parentWidth - textProps.x - (textProps.marginRight || 0)), 
                "both" !== textProps.contain || textProps.maxHeight ? 1 === textProps.maxLines && (textProps.maxHeight = textProps.maxHeight || textProps.lineHeight || textProps.fontSize) : textProps.maxHeight = parentHeight - textProps.y - (textProps.marginBottom || 0);
            }
            SHADERS_ENABLED && props.shader && !("shaderType" in props.shader) && (props.shader = Config.convertToShader(node, props.shader)), 
            node.lng = renderer$1.createTextNode(props), parent.requiresLayout() && (textProps.maxWidth && textProps.maxHeight || node._layoutOnLoad());
        } else {
            if (!props.texture) {
                if (isNaN(props.w)) {
                    let flexFitsWidth = !1;
                    if ("flex" === node.display) {
                        const flexDirection = node.flexDirection || "row";
                        flexFitsWidth = ("row" === flexDirection || "row-reverse" === flexDirection) && "fixed" !== node.flexBoundary;
                    }
                    node.flexGrow || flexFitsWidth ? props.w = 0 : props.w = parentWidth - props.x, 
                    node._calcWidth = !0;
                }
                isNaN(props.h) && (props.h = parentHeight - props.y, node._calcHeight = !0), props.rtt && !props.color && (props.color = 4294967295), 
                props.color || props.src || (props.color = 0);
            }
            if (SHADERS_ENABLED && props.shader && !("shaderType" in props.shader) && (props.shader = Config.convertToShader(node, props.shader)), 
            node.lng = renderer$1.createNode(props), node._hasRenderedChildren) {
                node._hasRenderedChildren = !1;
                for (const child of node.children) isElementNode(child) && isINode(child.lng) && (child.lng.parent = node.lng);
            }
        }
        if (node.rendered = !0, node.autosize && parent.requiresLayout() && node._layoutOnLoad(), 
        null == (_this$onCreate = this.onCreate) || _this$onCreate.call(this, this), null == (_this$onRender2 = this.onRender) || _this$onRender2.call(this, this), 
        node.onEvent) for (const [name, handler] of Object.entries(node.onEvent)) "function" == typeof node.lng.on && node.lng.on(name, (_inode, data) => handler.call(node, node, data));
        null == (_node$lng = node.lng) || _node$lng.div;
        if (node._type === NodeType_Element) {
            const numChildren = node.children.length;
            for (let i = 0; i < numChildren; i++) {
                const c = node.children[i];
                0, isElementNode(c) && c.render();
            }
        }
        topNode && schedulePostMutation(), node._autofocus && node.setFocus();
    }
};

for (const key of [ "alpha", "color", "colorTop", "colorRight", "colorLeft", "colorBottom", "colorTl", "colorTr", "colorBl", "colorBr", "h", "fontSize", "lineHeight", "mount", "mountX", "mountY", "pivot", "pivotX", "pivotY", "rotation", "scale", "scaleX", "scaleY", "w", "worldX", "worldY", "x", "y", "zIndex", "zIndexLocked" ]) Object.defineProperty(ElementNode.prototype, key, {
    get() {
        return this.lng[key];
    },
    set(v) {
        this._sendToLightningAnimatable(key, v);
    }
});

for (const key of [ "absX", "absY", "autosize", "clipping", "contain", "componentName", "componentLocation", "data", "destroyed", "forceLoad", "fontStretch", "fontStyle", "group", "ignoreParentAlpha", "imageType", "letterSpacing", "maxHeight", "maxLines", "maxWidth", "offsetY", "overflowSuffix", "placeholderColor", "preventCleanup", "rtt", "scrollable", "scrollY", "srcHeight", "srcWidth", "srcX", "srcY", "strictBounds", "text", "textAlign", "textBaseline", "textOverflow", "texture", "textureOptions", "textRendererOverride", "verticalAlign", "wordBreak", "wordWrap" ]) Object.defineProperty(ElementNode.prototype, key, {
    get() {
        return this.lng[key];
    },
    set(v) {
        this.lng[key] = v;
    }
});

function createRawShaderAccessor(key) {
    return {
        set(value) {
            this.shader = [ key, value ];
        },
        get() {
            return this.shader;
        }
    };
}

function shaderAccessor(key) {
    return {
        set(value) {
            var _this$lng$shader2;
            let animationSettings, target = this.lng.shader || {};
            if (this._effects = this._effects || {}, this._effects[key] = value, null == (_this$lng$shader2 = this.lng.shader) ? void 0 : _this$lng$shader2.props) {
                target = this.lng.shader.props;
                const transitionKey = "rounded" === key ? "borderRadius" : key;
                this.transition && (!0 === this.transition || this.transition[transitionKey]) && (target = {}, 
                animationSettings = !0 === this.transition || !0 === this.transition[transitionKey] ? void 0 : this.transition[transitionKey]);
            }
            "rounded" === key || "number" == typeof value ? target.radius = value : parseAndAssignShaderProps(key, value, target), 
            this._writeShaderTarget(target), animationSettings && this.animate({
                shaderProps: target
            }, animationSettings).start();
        },
        get() {
            var _this$_effects;
            return null == (_this$_effects = this._effects) ? void 0 : _this$_effects[key];
        }
    };
}

Object.defineProperties(ElementNode.prototype, {
    border: shaderAccessor("border"),
    borderBottom: shaderAccessor("borderBottom"),
    borderTop: shaderAccessor("borderTop"),
    borderLeft: shaderAccessor("borderLeft"),
    borderRight: shaderAccessor("borderRight"),
    shadow: shaderAccessor("shadow"),
    rounded: shaderAccessor("rounded"),
    borderRadius: shaderAccessor("rounded"),
    linearGradient: createRawShaderAccessor("linearGradient"),
    radialGradient: createRawShaderAccessor("radialGradient")
});

var memo$1 = fn => createMemo(() => fn());

function createRenderer$1({createElement: createElement, createTextNode: createTextNode, isTextNode: isTextNode, replaceText: replaceText, insertNode: insertNode, removeNode: removeNode, setProperty: setProperty, getParentNode: getParentNode, getFirstChild: getFirstChild, getNextSibling: getNextSibling}) {
    function insert(parent, accessor, marker, initial) {
        if (void 0 === marker || initial || (initial = []), "function" != typeof accessor) return insertExpression(parent, accessor, initial, marker);
        createRenderEffect(current => insertExpression(parent, accessor(), current, marker), initial);
    }
    function insertExpression(parent, value, current, marker, unwrapArray) {
        for (;"function" == typeof current; ) current = current();
        if (value === current) return current;
        const t = typeof value, multi = void 0 !== marker;
        if ("string" === t || "number" === t) if ("number" === t && (value = value.toString()), 
        multi) {
            let node = current[0];
            node && isTextNode(node) ? replaceText(node, value) : node = createTextNode(value), 
            current = cleanChildren(parent, current, marker, node);
        } else "" !== current && "string" == typeof current ? replaceText(getFirstChild(parent), current = value) : (cleanChildren(parent, current, marker, createTextNode(value)), 
        current = value); else if (null == value || "boolean" === t) current = cleanChildren(parent, current, marker); else {
            if ("function" === t) return createRenderEffect(() => {
                let v = value();
                for (;"function" == typeof v; ) v = v();
                current = insertExpression(parent, v, current, marker);
            }), () => current;
            if (Array.isArray(value)) {
                const array = [];
                if (normalizeIncomingArray(array, value, unwrapArray)) return createRenderEffect(() => current = insertExpression(parent, array, current, marker, !0)), 
                () => current;
                if (0 === array.length) {
                    const replacement = cleanChildren(parent, current, marker);
                    if (multi) return current = replacement;
                } else Array.isArray(current) ? 0 === current.length ? appendNodes(parent, array, marker) : reconcileArrays(parent, current, array) : null == current || "" === current ? appendNodes(parent, array) : reconcileArrays(parent, multi && current || [ getFirstChild(parent) ], array);
                current = array;
            } else {
                if (Array.isArray(current)) {
                    if (multi) return current = cleanChildren(parent, current, marker, value);
                    cleanChildren(parent, current, null, value);
                } else null != current && "" !== current && getFirstChild(parent) ? replaceNode(parent, value, getFirstChild(parent)) : insertNode(parent, value);
                current = value;
            }
        }
        return current;
    }
    function normalizeIncomingArray(normalized, array, unwrap) {
        let dynamic = !1;
        for (let i = 0, len = array.length; i < len; i++) {
            let t, item = array[i];
            if (null == item || !0 === item || !1 === item) ; else if (Array.isArray(item)) dynamic = normalizeIncomingArray(normalized, item) || dynamic; else if ("string" == (t = typeof item) || "number" === t) normalized.push(createTextNode(item)); else if ("function" === t) if (unwrap) {
                for (;"function" == typeof item; ) item = item();
                dynamic = normalizeIncomingArray(normalized, Array.isArray(item) ? item : [ item ]) || dynamic;
            } else normalized.push(item), dynamic = !0; else normalized.push(item);
        }
        return dynamic;
    }
    function reconcileArrays(parentNode, a, b) {
        let bLength = b.length, aEnd = a.length, bEnd = bLength, aStart = 0, bStart = 0, after = getNextSibling(a[aEnd - 1]), map = null;
        for (;aStart < aEnd || bStart < bEnd; ) if (a[aStart] !== b[bStart]) {
            for (;a[aEnd - 1] === b[bEnd - 1]; ) aEnd--, bEnd--;
            if (aEnd === aStart) {
                const node = bEnd < bLength ? bStart ? getNextSibling(b[bStart - 1]) : b[bEnd - bStart] : after;
                for (;bStart < bEnd; ) insertNode(parentNode, b[bStart++], node);
            } else if (bEnd === bStart) for (;aStart < aEnd; ) map && map.has(a[aStart]) || removeNode(parentNode, a[aStart]), 
            aStart++; else if (a[aStart] === b[bEnd - 1] && b[bStart] === a[aEnd - 1]) {
                const node = getNextSibling(a[--aEnd]);
                insertNode(parentNode, b[bStart++], getNextSibling(a[aStart++])), insertNode(parentNode, b[--bEnd], node), 
                a[aEnd] = b[bEnd];
            } else {
                if (!map) {
                    map = new Map;
                    let i = bStart;
                    for (;i < bEnd; ) map.set(b[i], i++);
                }
                const index = map.get(a[aStart]);
                if (null != index) if (bStart < index && index < bEnd) {
                    let t, i = aStart, sequence = 1;
                    for (;++i < aEnd && i < bEnd && null != (t = map.get(a[i])) && t === index + sequence; ) sequence++;
                    if (sequence > index - bStart) {
                        const node = a[aStart];
                        for (;bStart < index; ) insertNode(parentNode, b[bStart++], node);
                    } else replaceNode(parentNode, b[bStart++], a[aStart++]);
                } else aStart++; else removeNode(parentNode, a[aStart++]);
            }
        } else aStart++, bStart++;
    }
    function cleanChildren(parent, current, marker, replacement) {
        if (void 0 === marker) {
            let removed;
            for (;removed = getFirstChild(parent); ) removeNode(parent, removed);
            return replacement && insertNode(parent, replacement), "";
        }
        const node = replacement || createTextNode("");
        if (current.length) {
            let inserted = !1;
            for (let i = current.length - 1; i >= 0; i--) {
                const el = current[i];
                if (node !== el) {
                    const isParent = getParentNode(el) === parent;
                    inserted || i ? isParent && removeNode(parent, el) : isParent ? replaceNode(parent, node, el) : insertNode(parent, node, marker);
                } else inserted = !0;
            }
        } else insertNode(parent, node, marker);
        return [ node ];
    }
    function appendNodes(parent, array, marker) {
        for (let i = 0, len = array.length; i < len; i++) insertNode(parent, array[i], marker);
    }
    function replaceNode(parent, newNode, oldNode) {
        insertNode(parent, newNode, oldNode), removeNode(parent, oldNode);
    }
    function spreadExpression(node, props, prevProps = {}, skipChildren) {
        return props || (props = {}), skipChildren || createRenderEffect(() => prevProps.children = insertExpression(node, props.children, prevProps.children)), 
        createRenderEffect(() => props.ref && props.ref(node)), createRenderEffect(() => {
            for (const prop in props) {
                if ("children" === prop || "ref" === prop) continue;
                const value = props[prop];
                value !== prevProps[prop] && (setProperty(node, prop, value, prevProps[prop]), prevProps[prop] = value);
            }
        }), prevProps;
    }
    return {
        render(code, element) {
            let disposer;
            return createRoot(dispose => {
                disposer = dispose, insert(element, code());
            }), disposer;
        },
        insert: insert,
        spread(node, accessor, skipChildren) {
            "function" == typeof accessor ? createRenderEffect(current => spreadExpression(node, accessor(), current, skipChildren)) : spreadExpression(node, accessor, void 0, skipChildren);
        },
        createElement: createElement,
        createTextNode: createTextNode,
        insertNode: insertNode,
        setProp: (node, name, value, prev) => (setProperty(node, name, value, prev), value),
        mergeProps: mergeProps$1,
        effect: createRenderEffect,
        memo: memo$1,
        createComponent: createComponent$1,
        use: (fn, element, arg) => untrack(() => fn(element, arg))
    };
}

var renderer, solidOpts_default = {
    createElement: name => new ElementNode(name),
    createTextNode: text => new TextNode(text),
    replaceText(node, value) {
        log(0, 0), node.text = value;
        const parent = node.parent;
        parent.text = parent.getText();
    },
    setProperty(node, name, value) {
        node[name] = value;
    },
    insertNode(parent, node, anchor) {
        log(0, 0);
        const prevParent = node.parent;
        parent.insertChild(node, anchor), node instanceof ElementNode ? (node.parent.rendered && node.render(!0), 
        void 0 !== prevParent && enqueueDelete(node, 1)) : isElementText(parent) && (parent.text = parent.getText());
    },
    isTextNode: node => isElementText(node),
    removeNode(parent, node) {
        log(0, 0), parent.removeChild(node), node instanceof ElementNode ? enqueueDelete(node, -1) : isElementText(parent) && (parent.text = parent.getText());
    },
    getParentNode: node => node.parent,
    getFirstChild: node => node.children[0],
    getNextSibling(node) {
        const children = node.parent.children || [], index = children.indexOf(node) + 1;
        if (index < children.length) return children[index];
    }
}, solidRenderer = function(options) {
    const renderer = createRenderer$1(options);
    return renderer.mergeProps = mergeProps$1, renderer;
}(solidOpts_default), rootNode = solidOpts_default.createElement("App"), render = function(code) {
    return solidRenderer.render(code, rootNode);
};

function createRenderer(rendererOptions, node) {
    return renderer = function(options, rootId = "app") {
        return renderer$1 = DOM_RENDERING && Config.domRendererEnabled ? new DOMRendererMain(options, rootId) : new RendererMain(options, rootId);
    }(rendererOptions || Config.rendererOptions, node || "app"), rootNode.lng = renderer.root, 
    rootNode.rendered = !0, renderer.on("idle", () => {
        tasksEnabled = !0, processTasks();
    }), {
        renderer: renderer,
        rootNode: rootNode,
        render: render
    };
}

var {effect: effect, memo: memo, createComponent: createComponent, createElement: createElement, createTextNode: createTextNode, insertNode: insertNode, insert: insert, spread: spread, setProp: setProp, mergeProps: mergeProps, use: use} = solidRenderer, taskQueue = [], tasksEnabled = !1;

function scheduleTask(callback, priority = "low") {
    "high" === priority ? taskQueue.unshift(callback) : taskQueue.push(callback), processTasks();
}

function processTasks() {
    tasksEnabled && taskQueue.length && setTimeout(() => {
        const task = taskQueue.shift();
        task && (task(), processTasks());
    }, Config.taskDelay || 50);
}

function Dynamic(props) {
    const [p, others] = function(props, ...keys) {
        if (SUPPORTS_PROXY && $PROXY in props) {
            const blocked = new Set(keys.length > 1 ? keys.flat() : keys[0]), res = keys.map(k => new Proxy({
                get: property => k.includes(property) ? props[property] : void 0,
                has: property => k.includes(property) && property in props,
                keys: () => k.filter(property => property in props)
            }, propTraps));
            return res.push(new Proxy({
                get: property => blocked.has(property) ? void 0 : props[property],
                has: property => !blocked.has(property) && property in props,
                keys: () => Object.keys(props).filter(k => !blocked.has(k))
            }, propTraps)), res;
        }
        const otherObject = {}, objects = keys.map(() => ({}));
        for (const propName of Object.getOwnPropertyNames(props)) {
            const desc = Object.getOwnPropertyDescriptor(props, propName), isDefaultDesc = !desc.get && !desc.set && desc.enumerable && desc.writable && desc.configurable;
            let blocked = !1, objectIndex = 0;
            for (const k of keys) k.includes(propName) && (blocked = !0, isDefaultDesc ? objects[objectIndex][propName] = desc.value : Object.defineProperty(objects[objectIndex], propName, desc)), 
            ++objectIndex;
            blocked || (isDefaultDesc ? otherObject[propName] = desc.value : Object.defineProperty(otherObject, propName, desc));
        }
        return [ ...objects, otherObject ];
    }(props, [ "component" ]), cached = createMemo(() => p.component);
    return createMemo(() => {
        const component = cached();
        switch (typeof component) {
          case "function":
            return untrack(() => component(others));

          case "string":
            {
                const el = createElement(component);
                return el.componentName = component, spread(el, others), el;
            }
        }
    });
}

createRoot(() => {
    createRenderEffect(() => {
        activeElement(), tasksEnabled = !1;
    });
});

var View = props => {
    const el = createElement("node");
    return spread(el, props, !1), el;
}, Text = props => {
    const el = createElement("text");
    return spread(el, props, !1), el;
};

export { onCleanup as $, $TRACK as A, assertTruthy as At, createComputed as B, hasFocus as C, UpdateType as Ct, isInteger as D, Texture as Dt, isFunction as E, getNormalizedRgbaComponents as Et, Suspense as F, createResource as G, createEffect as H, Switch as I, createSignal as J, createRoot as K, batch as L, Index as M, mergeColorAlpha as Mt, Match as N, Config as O, TextureType as Ot, Show as P, on as Q, children as R, renderer$1 as S, CoreNodeRenderState as St, isFocused as T, compareRect as Tt, createMemo as U, createContext as V, createRenderEffect as W, getOwner as X, getListener as Y, mergeProps$1 as Z, use as _, isTextureError as _t, createElement as a, untrack as at, useFocusManager as b, ImageTexture as bt, effect as c, defaultFontMetrics as ct, memo as d, CoreShaderNode as dt, onMount as et, mergeProps as f, isAdvancedShaderProp as ft, spread as g, TextureErrorCode as gt, setProp as h, TextureError as ht, createComponent as i, startTransition as it, For as j, createWebGLContext as jt, activeElement as k, DIRTY_QUAD_BUFFER as kt, insert as l, mapTextLayout as lt, scheduleTask as m, CoreTextureManager as mt, Text as n, runWithOwner as nt, createRenderer as o, useContext as ot, rootNode as p, resolveShaderProps as pt, createSelector as q, View as r, sharedConfig as rt, createTextNode as s, RendererMain as st, Dynamic as t, resetErrorBoundaries as tt, insertNode as u, normalizeFontMetrics as ut, ElementNode as v, RenderTexture as vt, isElementNode as w, calcFactoredRadiusArray as wt, loadFonts as x, uploadCompressedTexture as xt, focusPath as y, SubTexture as yt, createComponent$1 as z };