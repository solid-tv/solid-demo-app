function createWebGLContext(canvas, forceWebGL2 = false, contextSpy) {
    const config = {
        alpha: true,
        antialias: false,
        depth: false,
        stencil: false,
        desynchronized: false,
        powerPreference: "high-performance",
        premultipliedAlpha: true,
        preserveDrawingBuffer: false
    };
    const gl = canvas.getContext(forceWebGL2 ? "webgl2" : "webgl", config) || canvas.getContext("experimental-webgl", config);
    if (!gl) throw new Error("Unable to create WebGL context");
    if (contextSpy) {
        const handler = {
            get(target, prop) {
                const value = target[prop];
                if (typeof value !== "function") return value;
                contextSpy.increment(String(prop));
                const fn = value;
                if (prop === "getExtension") return (...args) => {
                    const ext = fn.apply(target, args);
                    if (ext !== null && typeof ext === "object") return new Proxy(ext, handler);
                    return ext;
                };
                return fn.bind(target);
            }
        };
        return new Proxy(gl, handler);
    }
    return gl;
}

var ENABLE_INSPECTOR = typeof __enableInspector__ !== "undefined" ? __enableInspector__ : false;

var DIRTY_QUAD_BUFFER = typeof __dirtyQuadBuffer__ !== "undefined" ? __dirtyQuadBuffer__ : true;

var EMIT_BOUNDS_EVENTS = typeof __emitBoundsEvents__ !== "undefined" ? __emitBoundsEvents__ : false;

function assertTruthy(condition, message) {}

function mergeColorProgress(rgba1, rgba2, p) {
    const r1 = Math.trunc(rgba1 >>> 24);
    const g1 = Math.trunc(rgba1 >>> 16 & 255);
    const b1 = Math.trunc(rgba1 >>> 8 & 255);
    const a1 = Math.trunc(rgba1 & 255);
    const r2 = Math.trunc(rgba2 >>> 24);
    const g2 = Math.trunc(rgba2 >>> 16 & 255);
    const b2 = Math.trunc(rgba2 >>> 8 & 255);
    const a2 = Math.trunc(rgba2 & 255);
    const r = Math.round(r2 * p + r1 * (1 - p));
    const g = Math.round(g2 * p + g1 * (1 - p));
    const b = Math.round(b2 * p + b1 * (1 - p));
    const a = Math.round(a2 * p + a1 * (1 - p));
    return (r << 24 | g << 16 | b << 8 | a) >>> 0;
}

var premultiplyRGB = true;

function setPremultiplyMode(mode) {
    premultiplyRGB = mode === "webgl";
}

function premultiplyColorABGR(rgba, alpha) {
    const a = (rgba & 255) / 255 * alpha;
    const m = premultiplyRGB ? a : 1;
    return ((a * 255 | 0) << 24 | ((rgba >>> 8 & 255) * m | 0) << 16 | ((rgba >>> 16 & 255) * m | 0) << 8 | ((rgba >>> 24) * m | 0)) >>> 0;
}

var nextId = 1;

function getNewId() {
    return nextId++;
}

var EventEmitter = class {
    constructor() {
        this.eventListeners = null;
    }
    on(event, listener) {
        let map = this.eventListeners;
        if (map === null) map = this.eventListeners = {};
        let listeners = map[event];
        if (listeners === void 0) {
            listeners = [];
            map[event] = listeners;
        }
        listeners.push(listener);
    }
    off(event, listener) {
        const map = this.eventListeners;
        if (map === null) return;
        const listeners = map[event];
        if (listeners === void 0) return;
        if (listener === void 0) {
            map[event] = void 0;
            return;
        }
        const index = listeners.indexOf(listener);
        if (index >= 0) listeners.splice(index, 1);
    }
    once(event, listener) {
        const onceListener = (target, data) => {
            this.off(event, onceListener);
            listener(target, data);
        };
        this.on(event, onceListener);
    }
    emit(event, data) {
        const map = this.eventListeners;
        if (map === null) return;
        const listeners = map[event];
        if (listeners === void 0) return;
        const len = listeners.length;
        if (len === 1) {
            listeners[0](this, data);
            return;
        }
        const snapshot = listeners.slice();
        for (let i = 0; i < len; i++) snapshot[i](this, data);
    }
    hasListeners() {
        const map = this.eventListeners;
        if (map === null) return false;
        for (const event in map) {
            const listeners = map[event];
            if (listeners !== void 0 && listeners.length > 0) return true;
        }
        return false;
    }
    removeAllListeners() {
        this.eventListeners = null;
    }
};

var TextureType;

(function(TextureType) {
    TextureType[TextureType["generic"] = 0] = "generic";
    TextureType[TextureType["color"] = 1] = "color";
    TextureType[TextureType["image"] = 2] = "image";
    TextureType[TextureType["noise"] = 3] = "noise";
    TextureType[TextureType["subTexture"] = 4] = "subTexture";
})(TextureType || (TextureType = {}));

var Texture = class Texture extends EventEmitter {
    constructor(txManager) {
        super();
        this.txManager = void 0;
        this._dimensions = null;
        this._error = null;
        this.state = "initial";
        this.renderableOwners = new Set;
        this.renderable = false;
        this.type = TextureType.generic;
        this.preventCleanup = false;
        this.ctxTexture = void 0;
        this.textureData = null;
        this.cacheKey = null;
        this.memUsed = 0;
        this.retryCount = 0;
        this.maxRetryCount = void 0;
        this.createdAt = Date.now();
        this.gracePeriodExpired = false;
        this.freeTextureDataTask = () => {
            this.textureData = null;
        };
        this.releaseTask = () => {
            this.release();
        };
        this.txManager = txManager;
        this.maxRetryCount = this.txManager.maxRetryCount;
    }
    get dimensions() {
        return this._dimensions;
    }
    get error() {
        return this._error;
    }
    isWithinStartupGracePeriod() {
        if (this.gracePeriodExpired === true) return false;
        if (Date.now() - this.createdAt >= Texture.STARTUP_GRACE_PERIOD) {
            this.gracePeriodExpired = true;
            return false;
        }
        return true;
    }
    canBeCleanedUp() {
        if (this.preventCleanup) return false;
        if (this.isWithinStartupGracePeriod()) return false;
        if (this.state === "loading") return false;
        if (this.renderable === true) return false;
        if (this.renderableOwners.size > 0) return false;
        return true;
    }
    setRenderableOwner(owner, renderable) {
        const owners = this.renderableOwners;
        if (renderable === true) {
            if (owners.has(owner) === true) return;
            owners.add(owner);
            if (owners.size === 1) {
                var _this$onChangeIsRende;
                this.renderable = true;
                (_this$onChangeIsRende = this.onChangeIsRenderable) == null || _this$onChangeIsRende.call(this, true);
                this.load();
            }
        } else {
            if (owners.delete(owner) === false) return;
            if (owners.size === 0) {
                var _this$onChangeIsRende2;
                this.renderable = false;
                (_this$onChangeIsRende2 = this.onChangeIsRenderable) == null || _this$onChangeIsRende2.call(this, false);
            }
        }
    }
    load() {
        if (this.retryCount > this.maxRetryCount) return;
        this.txManager.loadTexture(this);
    }
    loadCtxTexture() {
        if (this.ctxTexture === void 0) this.ctxTexture = this.txManager.renderer.createCtxTexture(this);
        return this.ctxTexture;
    }
    free() {
        var _this$ctxTexture;
        (_this$ctxTexture = this.ctxTexture) == null || _this$ctxTexture.free();
        this.ctxTexture = void 0;
    }
    release() {
        var _this$ctxTexture2;
        (_this$ctxTexture2 = this.ctxTexture) == null || _this$ctxTexture2.release();
        this.ctxTexture = void 0;
        this.freeTextureData();
    }
    destroy() {
        if (this.state === "loaded") this.free();
        this.freeTextureData();
        this.removeAllListeners();
    }
    freeTextureData() {
        queueMicrotask(this.freeTextureDataTask);
    }
    setState(state, errorOrDimensions) {
        if (this.state === state) return;
        let payload = null;
        if (state === "loaded") {
            if (errorOrDimensions !== void 0 && "w" in errorOrDimensions === true && "h" in errorOrDimensions === true && errorOrDimensions.w !== void 0 && errorOrDimensions.h !== void 0) this._dimensions = errorOrDimensions;
            payload = this._dimensions;
        } else if (state === "failed") {
            this._error = errorOrDimensions;
            payload = this._error;
            this.retryCount += 1;
            queueMicrotask(this.releaseTask);
        } else if (state === "loading") {
            this._error = null;
            this._dimensions = null;
        } else this._error = null;
        this.state = state;
        this.emit(state, payload);
    }
    async getTextureData() {
        if (this.textureData === null) this.textureData = await this.getTextureSource();
        return this.textureData;
    }
    static makeCacheKey(props) {
        return false;
    }
    static resolveDefaults(props) {
        return {};
    }
};

Texture.STARTUP_GRACE_PERIOD = 2e3;

var PROTOCOL_REGEX = /^(data|ftps?|https?):/;

var IS_FILE_PROTOCOL = typeof self !== "undefined" && self.location.protocol === "file:";

var getNormalizedRgbaComponents = rgba => {
    const r = rgba >>> 24;
    const g = rgba >>> 16 & 255;
    const b = rgba >>> 8 & 255;
    const a = rgba & 255;
    return [ r / 255, g / 255, b / 255, a / 255 ];
};

function createBound(x1, y1, x2, y2, out) {
    if (out) {
        out.x1 = x1;
        out.y1 = y1;
        out.x2 = x2;
        out.y2 = y2;
        return out;
    }
    return {
        x1: x1,
        y1: y1,
        x2: x2,
        y2: y2
    };
}

function intersectRect(a, b, out) {
    const x = Math.max(a.x, b.x);
    const y = Math.max(a.y, b.y);
    const w = Math.min(a.x + a.w, b.x + b.w) - x;
    const h = Math.min(a.y + a.h, b.y + b.h) - y;
    if (w > 0 && h > 0) {
        if (out) {
            out.x = x;
            out.y = y;
            out.w = w;
            out.h = h;
            return out;
        }
        return {
            x: x,
            y: y,
            w: w,
            h: h
        };
    }
    if (out) {
        out.x = 0;
        out.y = 0;
        out.w = 0;
        out.h = 0;
        return out;
    }
    return {
        x: 0,
        y: 0,
        w: 0,
        h: 0
    };
}

function copyRect(a, out) {
    if (out) {
        out.x = a.x;
        out.y = a.y;
        out.w = a.w;
        out.h = a.h;
        return out;
    }
    return {
        x: a.x,
        y: a.y,
        w: a.w,
        h: a.h
    };
}

function compareRect(a, b) {
    if (a === b) return true;
    if (a === null || b === null) return false;
    const aValid = a.valid;
    const bValid = b.valid;
    if (aValid === false && bValid === false) return true;
    if (aValid !== bValid) return false;
    return a.x === b.x && a.y === b.y && a.w === b.w && a.h === b.h;
}

function convertUrlToAbsolute(url) {
    const hasProtocol = PROTOCOL_REGEX.test(url);
    if (IS_FILE_PROTOCOL === true && hasProtocol === false) {
        const path = self.location.pathname.split("/");
        path.pop();
        const basePath = path.join("/");
        const baseUrl = self.location.protocol + "//" + basePath;
        if (url.charAt(0) === ".") url = url.slice(1);
        if (url.charAt(0) === "/") url = url.slice(1);
        return baseUrl + "/" + url;
    }
    if (hasProtocol === true) return url;
    return new URL(url, self.location.href).href;
}

function isBase64Image(src) {
    return src.startsWith("data:") === true;
}

function calcFactoredRadiusArray(radius, width, height) {
    const result = [ radius[0], radius[1], radius[2], radius[3] ];
    const factor = Math.min(Math.min(Math.min(width / Math.max(width, radius[0] + radius[1]), width / Math.max(width, radius[2] + radius[3])), Math.min(height / Math.max(height, radius[0] + radius[3]), height / Math.max(height, radius[1] + radius[2]))), 1);
    result[0] *= factor;
    result[1] *= factor;
    result[2] *= factor;
    result[3] *= factor;
    return result;
}

function dataURIToBlob(dataURI) {
    var _dataURI$match;
    dataURI = dataURI.replace(/^data:/, "");
    const type = ((_dataURI$match = dataURI.match(/image\/[^;]+/)) == null ? void 0 : _dataURI$match[0]) || "";
    const base64 = dataURI.replace(/^[^,]+,/, "");
    const sliceSize = 1024;
    const byteCharacters = atob(base64);
    const bytesLength = byteCharacters.length;
    const slicesCount = Math.ceil(bytesLength / sliceSize);
    const byteArrays = new Array(slicesCount);
    for (let sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
        const begin = sliceIndex * sliceSize;
        const end = Math.min(begin + sliceSize, bytesLength);
        const bytes = new Array(end - begin);
        for (let offset = begin, i = 0; offset < end; ++i, ++offset) {
            var _byteCharacters$offse;
            bytes[i] = (_byteCharacters$offse = byteCharacters[offset]) == null ? void 0 : _byteCharacters$offse.charCodeAt(0);
        }
        byteArrays[sliceIndex] = new Uint8Array(bytes);
    }
    return new Blob(byteArrays, {
        type: type
    });
}

function fetchJson(url, responseType = "") {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest;
        xhr.responseType = responseType;
        xhr.onreadystatechange = function() {
            if (xhr.readyState == XMLHttpRequest.DONE) if (xhr.status === 0 || xhr.status === 200) resolve(xhr.response); else reject(xhr.statusText);
        };
        xhr.open("GET", url, true);
        xhr.send(null);
    });
}

function clampUnit(value) {
    if (value < 0) return 0;
    if (value > 1) return 1;
    return value;
}

var Matrix3d = class Matrix3d {
    constructor() {
        this.ta = void 0;
        this.tb = void 0;
        this.tx = void 0;
        this.tc = void 0;
        this.td = void 0;
        this.ty = void 0;
        this.ta = 0;
        this.tb = 0;
        this.tx = 0;
        this.tc = 0;
        this.td = 0;
        this.ty = 0;
    }
    static get temp() {
        return tempMatrix;
    }
    static multiply(a, b, out) {
        const e0 = a.ta * b.ta + a.tb * b.tc;
        const e1 = a.ta * b.tb + a.tb * b.td;
        const e2 = a.ta * b.tx + a.tb * b.ty + a.tx;
        const e3 = a.tc * b.ta + a.td * b.tc;
        const e4 = a.tc * b.tb + a.td * b.td;
        const e5 = a.tc * b.tx + a.td * b.ty + a.ty;
        if (!out) out = new Matrix3d;
        out.ta = e0;
        out.tb = e1;
        out.tx = e2;
        out.tc = e3;
        out.td = e4;
        out.ty = e5;
        return out;
    }
    static identity(out) {
        if (!out) out = new Matrix3d;
        out.ta = 1;
        out.tb = 0;
        out.tx = 0;
        out.tc = 0;
        out.td = 1;
        out.ty = 0;
        return out;
    }
    static translate(x, y, out) {
        if (!out) out = new Matrix3d;
        out.ta = 1;
        out.tb = 0;
        out.tx = x;
        out.tc = 0;
        out.td = 1;
        out.ty = y;
        return out;
    }
    static scale(sx, sy, out) {
        if (!out) out = new Matrix3d;
        out.ta = sx;
        out.tb = 0;
        out.tx = 0;
        out.tc = 0;
        out.td = sy;
        out.ty = 0;
        return out;
    }
    static rotate(angle, out) {
        if (out === void 0) out = new Matrix3d;
        if (angle === 0) {
            out.ta = 1;
            out.tb = 0;
            out.tx = 0;
            out.tc = 0;
            out.td = 1;
            out.ty = 0;
            return out;
        }
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        out.ta = cos;
        out.tb = -sin;
        out.tx = 0;
        out.tc = sin;
        out.td = cos;
        out.ty = 0;
        return out;
    }
    static copy(src, dst) {
        if (!dst) dst = new Matrix3d;
        dst.ta = src.ta;
        dst.tc = src.tc;
        dst.tb = src.tb;
        dst.td = src.td;
        dst.tx = src.tx;
        dst.ty = src.ty;
        return dst;
    }
    translate(x, y) {
        this.tx = this.ta * x + this.tb * y + this.tx;
        this.ty = this.tc * x + this.td * y + this.ty;
        return this;
    }
    setTranslate(x, y) {
        this.tx = x;
        this.ty = y;
    }
    scale(sx, sy) {
        this.ta = this.ta * sx;
        this.tb = this.tb * sy;
        this.tc = this.tc * sx;
        this.td = this.td * sy;
        return this;
    }
    rotate(angle) {
        if (angle === 0) return this;
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        const e0 = this.ta * cos + this.tb * sin;
        const e1 = this.tb * cos - this.ta * sin;
        const e3 = this.tc * cos + this.td * sin;
        const e4 = this.td * cos - this.tc * sin;
        this.ta = e0;
        this.tb = e1;
        this.tc = e3;
        this.td = e4;
        return this;
    }
    multiply(other) {
        return Matrix3d.multiply(this, other, this);
    }
    translateOrMultiply(other) {
        if (other.ta === 1 && other.td === 1 && other.tb === 0 && other.tc === 0) return this.translate(other.tx, other.ty);
        return this.multiply(other);
    }
};

var tempMatrix = new Matrix3d;

var RenderCoords = class RenderCoords {
    constructor(x1, y1, x2, y2, x3, y3, x4, y4) {
        this.x1 = void 0;
        this.y1 = void 0;
        this.x2 = void 0;
        this.y2 = void 0;
        this.x3 = void 0;
        this.y3 = void 0;
        this.x4 = void 0;
        this.y4 = void 0;
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.x3 = x3;
        this.y3 = y3;
        this.x4 = x4;
        this.y4 = y4;
    }
    static translate(x1, y1, x2, y2, x3, y3, x4, y4, out) {
        if (out === void 0) return new RenderCoords(x1, y1, x2, y2, x3, y3, x4, y4);
        out.x1 = x1;
        out.y1 = y1;
        out.x2 = x2;
        out.y2 = y2;
        out.x3 = x3;
        out.y3 = y3;
        out.x4 = x4;
        out.y4 = y4;
        return out;
    }
};

var degree = Math.PI / 180;

var getTimingBezier = (a, b, c, d) => {
    const xc = 3 * a;
    const xb = 3 * (c - a) - xc;
    const xa = 1 - xc - xb;
    const yc = 3 * b;
    const yb = 3 * (d - b) - yc;
    const ya = 1 - yc - yb;
    return function(time) {
        if (time >= 1) return 1;
        if (time <= 0) return 0;
        let t = .5, cbx, cbxd, dx;
        for (let it = 0; it < 20; it++) {
            cbx = t * (t * (t * xa + xb) + xc);
            dx = time - cbx;
            if (dx > -1e-8 && dx < 1e-8) return t * (t * (t * ya + yb) + yc);
            cbxd = t * (t * (3 * xa) + 2 * xb) + xc;
            if (cbxd > 1e-10 && cbxd < 1e-10) break;
            t += dx / cbxd;
        }
        let minT = 0;
        let maxT = 1;
        for (let it = 0; it < 20; it++) {
            t = .5 * (minT + maxT);
            cbx = t * (t * (t * xa + xb) + xc);
            dx = time - cbx;
            if (dx > -1e-8 && dx < 1e-8) return t * (t * (t * ya + yb) + yc);
            if (dx < 0) maxT = t; else minT = t;
        }
        return time;
    };
};

var timingMapping = {};

var timingLookup = {
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
};

var defaultTiming = t => t;

var parseCubicBezier = str => {
    const match = str.match(/-?\d*\.?\d+/g);
    if (match) {
        const [num1, num2, num3, num4] = match;
        const timing = getTimingBezier(parseFloat(num1 || "0.42"), parseFloat(num2 || "0"), parseFloat(num3 || "1"), parseFloat(num4 || "1"));
        timingMapping[str] = timing;
        return timing;
    }
    console.warn("Unknown cubic-bezier timing: " + str);
    return defaultTiming;
};

var getTimingFunction = str => {
    if (str === "linear") return defaultTiming;
    if (timingMapping[str] !== void 0) return timingMapping[str] || defaultTiming;
    if (str === "step-start") return () => 1;
    if (str === "step-end") return time => time === 1 ? 1 : 0;
    const lookup = timingLookup[str];
    if (lookup !== void 0) {
        const [a, b, c, d] = lookup;
        const timing = getTimingBezier(a, b, c, d);
        timingMapping[str] = timing;
        return timing;
    }
    if (str.startsWith("cubic-bezier")) return parseCubicBezier(str);
    console.warn("Unknown timing function: " + str);
    return defaultTiming;
};

function bytesToMb(bytes) {
    return (bytes / 1024 / 1024).toFixed(2);
}

function createAnimation(manager, node, props, settings) {
    var _settings$delay, _settings$duration, _settings$loop, _settings$repeat, _settings$stopMethod;
    const easing = settings.easing || "linear";
    const delay = (_settings$delay = settings.delay) !== null && _settings$delay !== void 0 ? _settings$delay : 0;
    let propValues = null;
    let shaderPropValues = null;
    let propKeys = null;
    let propList = null;
    let shaderPropKeys = null;
    let shaderPropList = null;
    for (const key in props) if (key !== "shaderProps") {
        if (!propValues) {
            propValues = {};
            propKeys = [];
            propList = [];
        }
        const value = {
            start: node[key] || 0,
            target: props[key],
            isColor: key.indexOf("color") !== -1
        };
        propValues[key] = value;
        propKeys.push(key);
        propList.push(value);
    } else if (key === "shaderProps" && node.shader !== null) {
        if (!shaderPropValues) {
            shaderPropValues = {};
            shaderPropKeys = [];
            shaderPropList = [];
        }
        for (const shaderKey in props.shaderProps) {
            let start = node.shader.props[shaderKey];
            if (Array.isArray(start)) start = start[0];
            const value = {
                start: start,
                target: props.shaderProps[shaderKey],
                isColor: shaderKey.indexOf("color") !== -1
            };
            shaderPropValues[shaderKey] = value;
            shaderPropKeys.push(shaderKey);
            shaderPropList.push(value);
        }
    }
    const timingFunction = typeof easing === "string" ? getTimingFunction(easing) : easing;
    return {
        manager: manager,
        node: node,
        duration: (_settings$duration = settings.duration) !== null && _settings$duration !== void 0 ? _settings$duration : 0,
        delay: delay,
        delayFor: delay,
        progress: 0,
        loop: (_settings$loop = settings.loop) !== null && _settings$loop !== void 0 ? _settings$loop : false,
        repeat: (_settings$repeat = settings.repeat) !== null && _settings$repeat !== void 0 ? _settings$repeat : 0,
        stopMethod: (_settings$stopMethod = settings.stopMethod) !== null && _settings$stopMethod !== void 0 ? _settings$stopMethod : false,
        timingFunction: timingFunction,
        state: "stopped",
        props: propValues,
        shaderProps: shaderPropValues,
        propKeys: propKeys,
        propList: propList,
        shaderPropKeys: shaderPropKeys,
        shaderPropList: shaderPropList,
        stoppedResolve: null,
        stoppedPromise: null,
        lastRunTime: settings.adaptiveDuration ? performance.now() : 0,
        start() {
            if (this.state !== "running" && this.state !== "scheduled") {
                if (!this.stoppedPromise) this.stoppedPromise = new Promise(resolve => {
                    this.stoppedResolve = resolve;
                });
                this.manager.registerAnimation(this);
                this.state = "scheduled";
            }
            return this;
        },
        stop() {
            this.manager.unregisterAnimation(this);
            if (this.stoppedResolve) {
                this.stoppedResolve();
                this.stoppedResolve = null;
            }
            this.progress = 0;
            this.delayFor = this.delay;
            this.state = "stopped";
            return this;
        },
        pause() {
            this.manager.unregisterAnimation(this);
            this.state = "paused";
            return this;
        },
        restore() {
            this.stoppedResolve = null;
            this.stop();
            if (this.props) {
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
            if (!this.stoppedPromise) this.stoppedPromise = Promise.resolve();
            return this.stoppedPromise;
        }
    };
}

var sortByZIndexStable = nodes => {
    const len = nodes.length;
    for (let i = 1; i < len; i++) {
        const node = nodes[i];
        const z = node.props.zIndex;
        let j = i - 1;
        while (j >= 0 && nodes[j].props.zIndex > z) {
            nodes[j + 1] = nodes[j];
            j--;
        }
        nodes[j + 1] = node;
    }
};

var findChildIndexById = (node, children) => {
    for (let i = 0; i < children.length; i++) if (children[i]._id === node._id) return i;
    return -1;
};

var removeChild = (node, children) => {
    const index = findChildIndexById(node, children);
    if (index !== -1) children.splice(index, 1);
};

var VERTICES_PER_QUAD = 4;

var BYTES_PER_VERTEX = 16;

var BYTES_PER_QUAD = 16 * 4;

var WORDS_PER_QUAD = 64 / Uint32Array.BYTES_PER_ELEMENT;

var UV_QUANT_MAX = 65535;

function quantizeUv(n) {
    const i = n * UV_QUANT_MAX + .5 | 0;
    if (i < 0) return 0;
    if (i > UV_QUANT_MAX) return UV_QUANT_MAX;
    return i;
}

function packTextureCoords(tc) {
    const u1 = quantizeUv(tc.x1);
    const u2 = quantizeUv(tc.x2);
    const v1 = quantizeUv(tc.y1);
    const v2 = quantizeUv(tc.y2);
    tc.qTl = (v1 << 16 | u1) >>> 0;
    tc.qTr = (v1 << 16 | u2) >>> 0;
    tc.qBl = (v2 << 16 | u1) >>> 0;
    tc.qBr = (v2 << 16 | u2) >>> 0;
    return tc;
}

function createTextureCoords(x1, y1, x2, y2) {
    return packTextureCoords({
        x1: x1,
        y1: y1,
        x2: x2,
        y2: y2,
        qTl: 0,
        qTr: 0,
        qBl: 0,
        qBr: 0
    });
}

var UNIT_TEXTURE_COORDS = createTextureCoords(0, 0, 1, 1);

var MAX_QUADS = 16384;

var MAX_QUAD_BUFFER_SIZE = MAX_QUADS * 64;

function createIndexBuffer(glw) {
    const indices = new Uint16Array(MAX_QUADS * 6);
    for (let i = 0, j = 0; i < MAX_QUADS * 6; i += 6, j += 4) {
        indices[i] = j;
        indices[i + 1] = j + 1;
        indices[i + 2] = j + 2;
        indices[i + 3] = j + 2;
        indices[i + 4] = j + 1;
        indices[i + 5] = j + 3;
    }
    const buffer = glw.createBuffer();
    glw.elementArrayBufferData(buffer, indices, glw.STATIC_DRAW);
    return buffer;
}

function isHTMLImageElement(obj) {
    return obj !== null && (typeof obj === "object" && obj.constructor && obj.constructor.name === "HTMLImageElement" || typeof HTMLImageElement !== "undefined" && obj instanceof HTMLImageElement);
}

var CoreNodeRenderState;

(function(CoreNodeRenderState) {
    CoreNodeRenderState[CoreNodeRenderState["Init"] = 0] = "Init";
    CoreNodeRenderState[CoreNodeRenderState["OutOfBounds"] = 2] = "OutOfBounds";
    CoreNodeRenderState[CoreNodeRenderState["InBounds"] = 4] = "InBounds";
    CoreNodeRenderState[CoreNodeRenderState["InViewport"] = 8] = "InViewport";
})(CoreNodeRenderState || (CoreNodeRenderState = {}));

var NO_CLIPPING_RECT = {
    x: 0,
    y: 0,
    w: 0,
    h: 0,
    valid: false
};

var UpdateType;

(function(UpdateType) {
    UpdateType[UpdateType["Children"] = 1] = "Children";
    UpdateType[UpdateType["Local"] = 2] = "Local";
    UpdateType[UpdateType["Global"] = 4] = "Global";
    UpdateType[UpdateType["Clipping"] = 8] = "Clipping";
    UpdateType[UpdateType["SortZIndexChildren"] = 16] = "SortZIndexChildren";
    UpdateType[UpdateType["PremultipliedColors"] = 32] = "PremultipliedColors";
    UpdateType[UpdateType["WorldAlpha"] = 64] = "WorldAlpha";
    UpdateType[UpdateType["IsRenderable"] = 128] = "IsRenderable";
    UpdateType[UpdateType["RecalcUniforms"] = 256] = "RecalcUniforms";
    UpdateType[UpdateType["All"] = 511] = "All";
})(UpdateType || (UpdateType = {}));

var CoreNode = class extends EventEmitter {
    constructor(stage, props) {
        super();
        this.stage = void 0;
        this.children = [];
        this._id = getNewId();
        this.props = void 0;
        this._animations = null;
        this.renderOpBufferIdx = 0;
        this.numQuads = 0;
        this.renderOpTexture = null;
        this.quadBufferIndex = -1;
        this.isQuadDirty = true;
        this.hasShaderUpdater = false;
        this.hasShaderTimeFn = false;
        this.hasColorProps = false;
        this.textureLoaded = false;
        this.textureOwnership = false;
        this.placeholderActive = false;
        this.updateType = 0;
        this.childUpdateType = 0;
        this.globalTransform = void 0;
        this.localTransform = void 0;
        this.renderCoords = void 0;
        this.renderBound = void 0;
        this.clippingRect = NO_CLIPPING_RECT;
        this.textureCoords = void 0;
        this.updateShaderUniforms = false;
        this.isRenderable = false;
        this.renderState = CoreNodeRenderState.Init;
        this.isSimple = true;
        this._localIsTranslate = true;
        this._hasContainResize = false;
        this._hasMount = false;
        this._globalIsTranslate = true;
        this.worldAlpha = 1;
        this.premultipliedColorTl = 0;
        this.premultipliedColorTr = 0;
        this.premultipliedColorBl = 0;
        this.premultipliedColorBr = 0;
        this.calcZIndex = 0;
        this.destroyed = false;
        this.loadTextureTask = () => {
            var _this$props$textureOp, _this$props$textureOp2;
            const texture = this.props.texture;
            if (texture === null) return;
            if (this.textureOptions.preload === true) this.stage.txManager.loadTexture(texture);
            texture.preventCleanup = (_this$props$textureOp = (_this$props$textureOp2 = this.props.textureOptions) == null ? void 0 : _this$props$textureOp2.preventCleanup) !== null && _this$props$textureOp !== void 0 ? _this$props$textureOp : false;
            texture.on("loaded", this.onTextureLoaded);
            texture.on("failed", this.onTextureFailed);
            texture.on("freed", this.onTextureFreed);
            if (texture.state === "loaded") this.onTextureLoaded(texture, texture.dimensions); else if (texture.state === "failed") this.onTextureFailed(texture, texture.error); else if (texture.state === "freed") this.onTextureFreed(texture);
        };
        this.onTextureLoaded = (_, dimensions) => {
            var _this$props$textureOp3;
            this.applyAutosizeDimensions(dimensions.w, dimensions.h);
            this.textureLoaded = true;
            this.updatePlaceholderActive();
            this.setUpdateType(UpdateType.IsRenderable);
            this.stage.requestRender();
            if (dimensions.w > 1 && dimensions.h > 1) this.emit("loaded", {
                type: "texture",
                dimensions: dimensions
            });
            if (this.stage.calculateTextureCoord === true && this.props.textureOptions !== null) this.textureCoords = this.stage.renderer.getTextureCoords(this);
            if (((_this$props$textureOp3 = this.props.textureOptions) == null || (_this$props$textureOp3 = _this$props$textureOp3.resizeMode) == null ? void 0 : _this$props$textureOp3.type) === "contain") this.setUpdateType(UpdateType.Local);
        };
        this.onTextureFailed = (_, error) => {
            this.textureLoaded = false;
            this.isRenderable = false;
            this.updatePlaceholderActive();
            this.updateTextureOwnership(false);
            this.setUpdateType(UpdateType.IsRenderable);
            if (this.texture !== null && this.texture.retryCount > this.texture.maxRetryCount) this.emit("failed", {
                type: "texture",
                error: error
            });
        };
        this.onTextureFreed = () => {
            this.textureLoaded = false;
            this.isRenderable = false;
            this.updatePlaceholderActive();
            this.updateTextureOwnership(false);
            this.setUpdateType(UpdateType.IsRenderable);
            this.emit("freed", {
                type: "texture"
            });
        };
        this.stage = stage;
        this.localTransform = Matrix3d.identity();
        this.globalTransform = Matrix3d.identity();
        let initialUpdateType = UpdateType.Local | UpdateType.Clipping | UpdateType.WorldAlpha;
        const {texture: texture, shader: shader, src: src, parent: parent} = props;
        const p = this.props = props;
        p.texture = null;
        p.shader = null;
        p.src = null;
        p.scale = null;
        this.hasColorProps = this.computeHasColorProps();
        if (p.zIndex !== 0) this.zIndex = p.zIndex;
        if (parent !== null) parent.addChild(this);
        if (texture !== null) this.texture = texture;
        if (shader === null || shader === this.stage.defShaderNode) p.shader = this.stage.defShaderNode; else this.shader = shader;
        if (src !== null) this.src = src;
        this.setUpdateType(initialUpdateType);
        const dt = this.stage.defaultTexture;
        if (dt !== null && dt.state !== "loaded") dt.once("loaded", () => this.setUpdateType(UpdateType.IsRenderable));
        this.updateIsSimple();
    }
    updatePlaceholderActive() {
        const active = this.props.placeholderColor !== 0 && this.props.texture !== null && this.textureLoaded === false;
        if (active !== this.placeholderActive) {
            this.placeholderActive = active;
            this.setUpdateType(UpdateType.PremultipliedColors | UpdateType.IsRenderable);
        }
    }
    loadTexture() {
        if (this.props.texture === null) return;
        queueMicrotask(this.loadTextureTask);
    }
    unloadTexture() {
        if (this.texture === null) return;
        const texture = this.texture;
        texture.off("loaded", this.onTextureLoaded);
        texture.off("failed", this.onTextureFailed);
        texture.off("freed", this.onTextureFreed);
        texture.setRenderableOwner(this._id, false);
        this.textureOwnership = false;
    }
    applyAutosizeDimensions(w, h) {
        const props = this.props;
        if (props.autosize === false) return;
        if (props.w === w && props.h === h) return;
        props.w = w;
        props.h = h;
        if (props.texture !== null && this.stage.calculateTextureCoord === true && props.textureOptions !== null) this.textureCoords = this.stage.renderer.getTextureCoords(this);
        this.setUpdateType(UpdateType.Local | UpdateType.RecalcUniforms);
    }
    setUpdateType(type) {
        this.updateType |= type;
        const parent = this.props.parent;
        if (!parent || parent.updateType & UpdateType.Children) return;
        parent.setUpdateType(UpdateType.Children);
    }
    updateLocalTransform() {
        const p = this.props;
        const {x: x, y: y} = p;
        if (this.isSimple) {
            let tx = x;
            let ty = y;
            if (this._hasMount === true) {
                tx = x - p.mountX * p.w;
                ty = y - p.mountY * p.h;
            }
            if (this._localIsTranslate === true) {
                this.localTransform.setTranslate(tx, ty);
                return;
            }
            this.localTransform = Matrix3d.translate(tx, ty, this.localTransform);
            this._localIsTranslate = true;
            return;
        }
        const {w: w, h: h} = p;
        const mountTranslateX = p.mountX * w;
        const mountTranslateY = p.mountY * h;
        const rotation = p.rotation;
        const scaleX = p.scaleX;
        const scaleY = p.scaleY;
        if (rotation !== 0) {
            const scaleRotate = Matrix3d.rotate(rotation, Matrix3d.temp).scale(scaleX, scaleY);
            const pivotTranslateX = p.pivotX * w;
            const pivotTranslateY = p.pivotY * h;
            this.localTransform = Matrix3d.translate(x - mountTranslateX + pivotTranslateX, y - mountTranslateY + pivotTranslateY, this.localTransform).multiply(scaleRotate).translate(-pivotTranslateX, -pivotTranslateY);
        } else if (scaleX !== 1 || scaleY !== 1) {
            const pivotTranslateX = p.pivotX * w;
            const pivotTranslateY = p.pivotY * h;
            this.localTransform = Matrix3d.translate(x - mountTranslateX + pivotTranslateX, y - mountTranslateY + pivotTranslateY, this.localTransform).scale(scaleX, scaleY).translate(-pivotTranslateX, -pivotTranslateY);
        } else this.localTransform = Matrix3d.translate(x - mountTranslateX, y - mountTranslateY, this.localTransform);
        const texture = p.texture;
        if (this._hasContainResize === true && texture !== null && texture.dimensions !== null) {
            let resizeModeScaleX = 1;
            let resizeModeScaleY = 1;
            let extraX = 0;
            let extraY = 0;
            const {w: tw, h: th} = texture.dimensions;
            if (tw / th > w / h) {
                const scaledTxHeight = th * (w / tw);
                extraY = (h - scaledTxHeight) / 2;
                resizeModeScaleY = scaledTxHeight / h;
            } else {
                const scaledTxWidth = tw * (h / th);
                extraX = (w - scaledTxWidth) / 2;
                resizeModeScaleX = scaledTxWidth / w;
            }
            this.localTransform.translate(extraX, extraY).scale(resizeModeScaleX, resizeModeScaleY);
        }
        this._localIsTranslate = false;
    }
    updateIsSimple() {
        var _p$textureOptions;
        const p = this.props;
        this._hasContainResize = p.texture !== null && ((_p$textureOptions = p.textureOptions) == null || (_p$textureOptions = _p$textureOptions.resizeMode) == null ? void 0 : _p$textureOptions.type) === "contain";
        this._hasMount = p.mountX !== 0 || p.mountY !== 0;
        this.isSimple = p.rotation === 0 && p.scaleX === 1 && p.scaleY === 1 && this._hasContainResize === false;
    }
    update(delta, parentClippingRect) {
        const props = this.props;
        const parent = props.parent;
        let newRenderState = null;
        let checkRenderState = false;
        let updateType = this.updateType;
        let childUpdateType = this.childUpdateType;
        this.updateType = 0;
        this.childUpdateType = 0;
        if (updateType & UpdateType.Local) {
            this.updateLocalTransform();
            updateType |= UpdateType.Global;
        }
        if (updateType & UpdateType.Global) {
            const lt = this.localTransform;
            const gt = this.globalTransform;
            const parentGT = parent.globalTransform;
            if (this.isSimple === true && parent._globalIsTranslate === true) {
                if (this._globalIsTranslate === false) {
                    gt.ta = 1;
                    gt.tb = 0;
                    gt.tc = 0;
                    gt.td = 1;
                    this._globalIsTranslate = true;
                }
                gt.setTranslate(parentGT.tx + lt.tx, parentGT.ty + lt.ty);
            } else {
                Matrix3d.copy(parentGT, gt);
                this._globalIsTranslate = false;
                if (this.isSimple === true) gt.translate(lt.tx, lt.ty); else gt.translateOrMultiply(lt);
            }
            this.updateGlobalGeometry();
            checkRenderState = true;
            updateType |= UpdateType.Children;
            childUpdateType |= UpdateType.Global;
            if (props.clipping !== false) updateType |= UpdateType.Clipping;
        }
        if (updateType & UpdateType.Clipping) {
            this.calculateClippingRect(parentClippingRect);
            updateType |= UpdateType.Children;
            childUpdateType |= UpdateType.Clipping;
            checkRenderState = true;
        }
        if (checkRenderState === true) {
            newRenderState = this.checkRenderBounds();
            if (newRenderState !== this.renderState) {
                updateType |= UpdateType.IsRenderable;
                if (newRenderState !== CoreNodeRenderState.OutOfBounds) this.updateRenderState(newRenderState);
            } else newRenderState = null;
        }
        if (updateType & UpdateType.RecalcUniforms) updateType |= UpdateType.IsRenderable;
        if (updateType & UpdateType.WorldAlpha) {
            this.worldAlpha = props.ignoreParentAlpha === true ? props.alpha : parent.worldAlpha * props.alpha;
            updateType |= UpdateType.PremultipliedColors | UpdateType.Children | UpdateType.IsRenderable;
            childUpdateType |= UpdateType.WorldAlpha;
        }
        if (updateType & UpdateType.IsRenderable) this.updateIsRenderable();
        if (updateType & UpdateType.PremultipliedColors) {
            const alpha = this.worldAlpha;
            if (this.placeholderActive === true) {
                const merged = premultiplyColorABGR(props.placeholderColor, alpha);
                this.premultipliedColorTl = this.premultipliedColorTr = this.premultipliedColorBl = this.premultipliedColorBr = merged;
            } else {
                const tl = props.colorTl;
                const tr = props.colorTr;
                const bl = props.colorBl;
                const br = props.colorBr;
                const same = tl === tr && tl === bl && tl === br;
                const merged = premultiplyColorABGR(tl, alpha);
                this.premultipliedColorTl = merged;
                if (same === true) this.premultipliedColorTr = this.premultipliedColorBl = this.premultipliedColorBr = merged; else {
                    this.premultipliedColorTr = premultiplyColorABGR(tr, alpha);
                    this.premultipliedColorBl = premultiplyColorABGR(bl, alpha);
                    this.premultipliedColorBr = premultiplyColorABGR(br, alpha);
                }
            }
        }
        if (this.renderState === CoreNodeRenderState.OutOfBounds) {
            this.updateType = updateType & (UpdateType.RecalcUniforms | UpdateType.Children | UpdateType.SortZIndexChildren);
            this.childUpdateType = childUpdateType;
            return;
        }
        if (updateType & UpdateType.RecalcUniforms && this.hasShaderUpdater === true) this.updateShaderUniforms = true;
        if (this.isRenderable === true && this.updateShaderUniforms === true) {
            this.updateShaderUniforms = false;
            this.shader.update();
        }
        if (updateType & UpdateType.Children && this.children.length > 0) {
            const childClippingRect = this.clippingRect;
            const children = this.children;
            const length = children.length;
            if (childUpdateType !== 0) for (let i = 0; i < length; i++) {
                const child = children[i];
                child.updateType |= childUpdateType;
                if (child.updateType === 0) continue;
                child.update(delta, childClippingRect);
            } else for (let i = 0; i < length; i++) {
                const child = children[i];
                if (child.updateType === 0) continue;
                child.update(delta, childClippingRect);
            }
        }
        if (updateType & UpdateType.SortZIndexChildren) this.sortChildren();
        if (newRenderState === CoreNodeRenderState.OutOfBounds) {
            this.updateRenderState(newRenderState);
            this.updateIsRenderable();
        }
        if (updateType & (UpdateType.Global | UpdateType.PremultipliedColors)) this.isQuadDirty = true;
    }
    checkRenderBounds() {
        const stage = this.stage;
        let x1 = 0;
        let y1 = 0;
        let x2 = stage.viewportW;
        let y2 = stage.viewportH;
        const cr = this.clippingRect;
        if (cr.valid === true) {
            if (cr.x > x1) x1 = cr.x;
            if (cr.y > y1) y1 = cr.y;
            const crX2 = cr.x + cr.w;
            if (crX2 < x2) x2 = crX2;
            const crY2 = cr.y + cr.h;
            if (crY2 < y2) y2 = crY2;
        }
        const rb = this.renderBound;
        if (rb.x1 <= x2 && rb.x2 >= x1 && rb.y1 <= y2 && rb.y2 >= y1) return CoreNodeRenderState.InViewport;
        const m = stage.boundsMargin;
        if (rb.x1 <= x2 + m && rb.x2 >= x1 - m && rb.y1 <= y2 + m && rb.y2 >= y1 - m) return CoreNodeRenderState.InBounds;
        if (this.parent !== null && (this.props.w === 0 || this.props.h === 0)) return this.parent.renderState;
        return CoreNodeRenderState.OutOfBounds;
    }
    updateRenderState(renderState) {
        if (renderState === this.renderState) return;
        const previous = this.renderState;
        this.renderState = renderState;
        if (renderState === CoreNodeRenderState.OutOfBounds || previous === CoreNodeRenderState.OutOfBounds) this.stage.requestRenderListUpdate();
        if (EMIT_BOUNDS_EVENTS) {
            if (renderState === CoreNodeRenderState.InViewport) this.emit("inViewport", {
                previous: previous,
                current: renderState
            }); else if (previous === CoreNodeRenderState.InViewport) this.emit("outOfViewport", {
                previous: previous,
                current: renderState
            });
        }
    }
    checkBasicRenderability() {
        if (this.worldAlpha === 0 || this.isOutOfBounds() === true) return false; else return true;
    }
    updateIsRenderable() {
        let newIsRenderable = false;
        let needsTextureOwnership = false;
        if (this.checkBasicRenderability() === false) {
            this.updateTextureOwnership(false);
            this.setRenderable(false);
            return;
        }
        const texture = this.props.texture;
        if (texture !== null) {
            if (texture.retryCount > texture.maxRetryCount) {
                this.updateTextureOwnership(false);
                this.setRenderable(this.placeholderActive === true && this.renderState === CoreNodeRenderState.InViewport);
                return;
            }
            needsTextureOwnership = true;
            newIsRenderable = this.textureLoaded === true || this.placeholderActive === true;
        } else if ((this.props.shader !== this.stage.defShaderNode || this.hasColorProps === true) && this.hasDimensions() === true) newIsRenderable = true;
        if (newIsRenderable === true && this.renderState !== CoreNodeRenderState.InViewport) newIsRenderable = false;
        this.updateTextureOwnership(needsTextureOwnership);
        this.setRenderable(newIsRenderable);
    }
    setRenderable(isRenderable) {
        const previousIsRenderable = this.isRenderable;
        this.isRenderable = isRenderable;
        if (previousIsRenderable !== isRenderable) {
            this.stage.requestRenderListUpdate();
            if (EMIT_BOUNDS_EVENTS) this.emit("renderable", {
                type: "renderable",
                isRenderable: isRenderable
            });
        }
    }
    updateTextureOwnership(isRenderable) {
        var _this$texture;
        if (this.textureOwnership === isRenderable) return;
        this.textureOwnership = isRenderable;
        (_this$texture = this.texture) == null || _this$texture.setRenderableOwner(this._id, isRenderable);
    }
    isOutOfBounds() {
        return this.renderState <= CoreNodeRenderState.OutOfBounds;
    }
    hasDimensions() {
        return this.props.w !== 0 && this.props.h !== 0;
    }
    updateGlobalGeometry() {
        const {w: w, h: h} = this.props;
        const g = this.globalTransform;
        const tx = g.tx;
        const ty = g.ty;
        const tb = g.tb;
        const tc = g.tc;
        if (tb === 0 && tc === 0) {
            const maxX = tx + w * g.ta;
            const maxY = ty + h * g.td;
            this.renderCoords = RenderCoords.translate(tx, ty, maxX, ty, maxX, maxY, tx, maxY, this.renderCoords);
            this.renderBound = createBound(tx, ty, maxX, maxY, this.renderBound);
            return;
        }
        const x2 = tx + w * g.ta;
        const y2 = ty + w * tc;
        const x3 = x2 + h * tb;
        const y3 = y2 + h * g.td;
        const x4 = tx + h * tb;
        const y4 = ty + h * g.td;
        this.renderCoords = RenderCoords.translate(tx, ty, x2, y2, x3, y3, x4, y4, this.renderCoords);
        this.renderBound = createBound(Math.min(tx, x2, x3, x4), Math.min(ty, y2, y3, y4), Math.max(tx, x2, x3, x4), Math.max(ty, y2, y3, y4), this.renderBound);
    }
    calculateClippingRect(parentClippingRect) {
        const {props: props, globalTransform: gt} = this;
        const {clipping: clipping} = props;
        const isRotated = gt.tb !== 0 || gt.tc !== 0;
        const nodeClips = clipping !== false && isRotated === false;
        if (nodeClips === false && parentClippingRect.valid === false) {
            this.clippingRect = NO_CLIPPING_RECT;
            return;
        }
        let clippingRect = this.clippingRect;
        if (clippingRect === NO_CLIPPING_RECT) clippingRect = this.clippingRect = {
            x: 0,
            y: 0,
            w: 0,
            h: 0,
            valid: false
        };
        if (nodeClips === true) {
            let mT = 0;
            let mR = 0;
            let mB = 0;
            let mL = 0;
            if (Array.isArray(clipping) === true) {
                mT = clipping[0];
                mR = clipping[1];
                mB = clipping[2];
                mL = clipping[3];
            }
            clippingRect.x = gt.tx - mL;
            clippingRect.y = gt.ty - mT;
            clippingRect.w = this.props.w * gt.ta + mL + mR;
            clippingRect.h = this.props.h * gt.td + mT + mB;
            clippingRect.valid = true;
        } else clippingRect.valid = false;
        if (parentClippingRect.valid === true && clippingRect.valid === true) intersectRect(parentClippingRect, clippingRect, clippingRect); else if (parentClippingRect.valid === true) {
            copyRect(parentClippingRect, clippingRect);
            clippingRect.valid = true;
        }
    }
    destroy(isChild = false) {
        if (this.destroyed === true || this.preventDestroy === true) {
            if (isChild && this.preventDestroy === true) this.props.parent = null;
            return;
        }
        this.destroyed = true;
        if (isChild === false) {
            const parent = this.parent;
            if (parent !== null) parent.removeChild(this);
            this.props.parent = null;
            this.stage.requestRender();
        }
        this.removeAllListeners();
        this.unloadTexture();
        this.isRenderable = false;
        if (this.hasShaderTimeFn === true) this.stage.untrackTimedNode(this);
        const shader = this.props.shader;
        if (shader !== null && shader !== this.stage.defShaderNode) shader.detachNode();
        for (let i = 0, n = this.children.length; i < n; i++) this.children[i].destroy(true);
        this.children.length = 0;
        this.props.texture = null;
    }
    renderQuads(renderer) {
        const texture = this.renderTexture;
        if (texture.state !== "loaded") return;
        renderer.addQuad(this, texture);
    }
    get renderTexture() {
        if (this.placeholderActive === true) return this.stage.defaultTexture;
        return this.props.texture || this.stage.defaultTexture;
    }
    get renderTextureCoords() {
        return this.textureCoords || this.stage.renderer.defaultTextureCoords;
    }
    get width() {
        return this.props.w;
    }
    get height() {
        return this.props.h;
    }
    get time() {
        if (this.hasShaderTimeFn === true) return this.getTimerValue();
        return 0;
    }
    getTimerValue() {
        if (typeof this.shader.time === "function") return this.shader.time(this.stage);
        return this.stage.elapsedTime;
    }
    sortChildren() {
        sortByZIndexStable(this.children);
        this.stage.requestRenderListUpdate();
    }
    removeChild(node) {
        removeChild(node, this.children);
        this.stage.requestRenderListUpdate();
    }
    addChild(node) {
        const children = this.children;
        children.push(node);
        const lastIndex = children.length - 1;
        let shouldSort = node.zIndex !== 0;
        if (shouldSort === false && lastIndex > 0) {
            const first = children[0];
            const last = children[lastIndex - 1];
            shouldSort = first.zIndex !== 0 || last.zIndex !== 0;
        }
        if (shouldSort) this.setUpdateType(UpdateType.SortZIndexChildren);
        this.setUpdateType(UpdateType.Children);
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
        if (this.props.x !== value) {
            this.props.x = value;
            this.setUpdateType(UpdateType.Local);
        }
    }
    get absX() {
        var _this$props$parent, _this$props$parent2;
        return this.props.x + -this.props.w * this.props.mountX + (((_this$props$parent = this.props.parent) == null ? void 0 : _this$props$parent.absX) || ((_this$props$parent2 = this.props.parent) == null || (_this$props$parent2 = _this$props$parent2.globalTransform) == null ? void 0 : _this$props$parent2.tx) || 0);
    }
    get absY() {
        var _this$props$parent$ab, _this$props$parent3;
        return this.props.y + -this.props.h * this.props.mountY + ((_this$props$parent$ab = (_this$props$parent3 = this.props.parent) == null ? void 0 : _this$props$parent3.absY) !== null && _this$props$parent$ab !== void 0 ? _this$props$parent$ab : 0);
    }
    get y() {
        return this.props.y;
    }
    set y(value) {
        if (this.props.y !== value) {
            this.props.y = value;
            this.setUpdateType(UpdateType.Local);
        }
    }
    get w() {
        return this.props.w;
    }
    set w(value) {
        const props = this.props;
        if (props.w !== value) {
            props.w = value;
            const updateType = UpdateType.Local | UpdateType.RecalcUniforms;
            if (props.texture !== null && this.stage.calculateTextureCoord === true && props.textureOptions !== null) this.textureCoords = this.stage.renderer.getTextureCoords(this);
            this.setUpdateType(updateType);
        }
    }
    get h() {
        return this.props.h;
    }
    set h(value) {
        const props = this.props;
        if (props.h !== value) {
            props.h = value;
            const updateType = UpdateType.Local | UpdateType.RecalcUniforms;
            if (props.texture !== null && this.stage.calculateTextureCoord === true && props.textureOptions !== null) this.textureCoords = this.stage.renderer.getTextureCoords(this);
            this.setUpdateType(updateType);
        }
    }
    get scale() {
        return this.scaleX;
    }
    set scale(value) {
        this.scaleX = value;
        this.scaleY = value;
        this.updateIsSimple();
    }
    get scaleX() {
        return this.props.scaleX;
    }
    set scaleX(value) {
        if (this.props.scaleX !== value) {
            this.props.scaleX = value;
            this.setUpdateType(UpdateType.Local);
            this.updateIsSimple();
        }
    }
    get scaleY() {
        return this.props.scaleY;
    }
    set scaleY(value) {
        if (this.props.scaleY !== value) {
            this.props.scaleY = value;
            this.setUpdateType(UpdateType.Local);
            this.updateIsSimple();
        }
    }
    get mount() {
        return this.props.mount;
    }
    set mount(value) {
        if (this.props.mountX !== value || this.props.mountY !== value) {
            this.props.mountX = value;
            this.props.mountY = value;
            this.props.mount = value;
            this.setUpdateType(UpdateType.Local);
            this.updateIsSimple();
        }
    }
    get mountX() {
        return this.props.mountX;
    }
    set mountX(value) {
        if (this.props.mountX !== value) {
            this.props.mountX = value;
            this.setUpdateType(UpdateType.Local);
            this.updateIsSimple();
        }
    }
    get mountY() {
        return this.props.mountY;
    }
    set mountY(value) {
        if (this.props.mountY !== value) {
            this.props.mountY = value;
            this.setUpdateType(UpdateType.Local);
            this.updateIsSimple();
        }
    }
    get pivot() {
        return this.props.pivot;
    }
    set pivot(value) {
        if (this.props.pivotX !== value || this.props.pivotY !== value) {
            this.props.pivotX = value;
            this.props.pivotY = value;
            this.props.pivot = value;
            this.setUpdateType(UpdateType.Local);
        }
    }
    get pivotX() {
        return this.props.pivotX;
    }
    set pivotX(value) {
        if (this.props.pivotX !== value) {
            this.props.pivotX = value;
            this.setUpdateType(UpdateType.Local);
        }
    }
    get pivotY() {
        return this.props.pivotY;
    }
    set pivotY(value) {
        if (this.props.pivotY !== value) {
            this.props.pivotY = value;
            this.setUpdateType(UpdateType.Local);
        }
    }
    get rotation() {
        return this.props.rotation;
    }
    set rotation(value) {
        if (this.props.rotation !== value) {
            this.props.rotation = value;
            this.setUpdateType(UpdateType.Local);
            this.updateIsSimple();
        }
    }
    get alpha() {
        return this.props.alpha;
    }
    set alpha(value) {
        if (this.props.alpha === value) return;
        this.props.alpha = value;
        this.setUpdateType(UpdateType.WorldAlpha);
    }
    get ignoreParentAlpha() {
        return this.props.ignoreParentAlpha;
    }
    set ignoreParentAlpha(value) {
        if (this.props.ignoreParentAlpha === value) return;
        this.props.ignoreParentAlpha = value;
        this.setUpdateType(UpdateType.WorldAlpha);
    }
    get autosize() {
        return this.props.autosize;
    }
    set autosize(value) {
        if (this.props.autosize === value) return;
        this.props.autosize = value;
        if (value === true) {
            const texture = this.props.texture;
            if (texture !== null && texture.dimensions !== null) {
                const {w: w, h: h} = texture.dimensions;
                this.applyAutosizeDimensions(w, h);
            }
        }
    }
    get clipping() {
        return this.props.clipping;
    }
    set clipping(value) {
        if (this.props.clipping === value) return;
        this.props.clipping = value;
        this.setUpdateType(UpdateType.Clipping);
    }
    get color() {
        return this.props.color;
    }
    set color(value) {
        const p = this.props;
        if (p.color === value) return;
        p.color = value;
        p.colorTop = value;
        p.colorBottom = value;
        p.colorLeft = value;
        p.colorRight = value;
        p.colorTl = value;
        p.colorTr = value;
        p.colorBl = value;
        p.colorBr = value;
        this.updateHasColorProps();
        this.setUpdateType(UpdateType.PremultipliedColors);
    }
    computeHasColorProps() {
        const p = this.props;
        return p.colorTl > 0 || p.colorTr > 0 || p.colorBl > 0 || p.colorBr > 0;
    }
    updateHasColorProps() {
        const has = this.computeHasColorProps();
        if (has === this.hasColorProps) return;
        this.hasColorProps = has;
        this.setUpdateType(UpdateType.IsRenderable);
    }
    get placeholderColor() {
        return this.props.placeholderColor;
    }
    set placeholderColor(value) {
        const p = this.props;
        if (p.placeholderColor === value) return;
        p.placeholderColor = value;
        this.updatePlaceholderActive();
        if (this.placeholderActive === true) this.setUpdateType(UpdateType.PremultipliedColors);
    }
    get colorTop() {
        return this.props.colorTop;
    }
    set colorTop(value) {
        const p = this.props;
        if (p.colorTl !== value || p.colorTr !== value) {
            p.colorTl = value;
            p.colorTr = value;
        }
        p.colorTop = value;
        this.updateHasColorProps();
        this.setUpdateType(UpdateType.PremultipliedColors);
    }
    get colorBottom() {
        return this.props.colorBottom;
    }
    set colorBottom(value) {
        const p = this.props;
        if (p.colorBl !== value || p.colorBr !== value) {
            p.colorBl = value;
            p.colorBr = value;
        }
        p.colorBottom = value;
        this.updateHasColorProps();
        this.setUpdateType(UpdateType.PremultipliedColors);
    }
    get colorLeft() {
        return this.props.colorLeft;
    }
    set colorLeft(value) {
        const p = this.props;
        if (p.colorTl !== value || p.colorBl !== value) {
            p.colorTl = value;
            p.colorBl = value;
        }
        p.colorLeft = value;
        this.updateHasColorProps();
        this.setUpdateType(UpdateType.PremultipliedColors);
    }
    get colorRight() {
        return this.props.colorRight;
    }
    set colorRight(value) {
        const p = this.props;
        if (p.colorTr !== value || p.colorBr !== value) {
            p.colorTr = value;
            p.colorBr = value;
        }
        p.colorRight = value;
        this.updateHasColorProps();
        this.setUpdateType(UpdateType.PremultipliedColors);
    }
    get colorTl() {
        return this.props.colorTl;
    }
    set colorTl(value) {
        this.props.colorTl = value;
        this.updateHasColorProps();
        this.setUpdateType(UpdateType.PremultipliedColors);
    }
    get colorTr() {
        return this.props.colorTr;
    }
    set colorTr(value) {
        this.props.colorTr = value;
        this.updateHasColorProps();
        this.setUpdateType(UpdateType.PremultipliedColors);
    }
    get colorBl() {
        return this.props.colorBl;
    }
    set colorBl(value) {
        this.props.colorBl = value;
        this.updateHasColorProps();
        this.setUpdateType(UpdateType.PremultipliedColors);
    }
    get colorBr() {
        return this.props.colorBr;
    }
    set colorBr(value) {
        this.props.colorBr = value;
        this.updateHasColorProps();
        this.setUpdateType(UpdateType.PremultipliedColors);
    }
    get zIndex() {
        return this.props.zIndex;
    }
    set zIndex(value) {
        let sanitizedValue = value;
        if (isNaN(sanitizedValue) || Number.isFinite(sanitizedValue) === false) {
            console.warn(`zIndex was set to an invalid value: ${value}, defaulting to 0`);
            sanitizedValue = 0;
        }
        if (sanitizedValue > Number.MAX_SAFE_INTEGER) sanitizedValue = 1e3; else if (sanitizedValue < Number.MIN_SAFE_INTEGER) sanitizedValue = -1e3;
        if (this.props.zIndex === sanitizedValue) return;
        this.props.zIndex = sanitizedValue;
        const parent = this.parent;
        if (parent !== null) parent.setUpdateType(UpdateType.SortZIndexChildren);
    }
    get parent() {
        return this.props.parent;
    }
    set parent(newParent) {
        const oldParent = this.props.parent;
        if (oldParent === newParent) return;
        this.props.parent = newParent;
        if (oldParent !== null) oldParent.removeChild(this);
        if (newParent !== null) newParent.addChild(this);
        this.setUpdateType(UpdateType.Global | UpdateType.Clipping | UpdateType.WorldAlpha);
    }
    get preventDestroy() {
        return this.props.preventDestroy;
    }
    set preventDestroy(value) {
        this.props.preventDestroy = value;
    }
    get shader() {
        return this.props.shader;
    }
    set shader(shader) {
        if (shader === null) {
            const def = this.stage.defShaderNode;
            if (this.props.shader === def) return;
            this.hasShaderUpdater = false;
            this.hasShaderTimeFn = false;
            this.stage.untrackTimedNode(this);
            this.props.shader = def;
            this.setUpdateType(UpdateType.IsRenderable);
            return;
        }
        if (this.props.shader === shader) return;
        this.hasShaderUpdater = shader.update !== void 0;
        this.hasShaderTimeFn = shader.time !== void 0;
        if (shader.shaderKey !== "default") shader.attachNode(this);
        if (this.hasShaderTimeFn === true) this.stage.trackTimedNode(this); else this.stage.untrackTimedNode(this);
        this.props.shader = shader;
        this.setUpdateType(UpdateType.IsRenderable | UpdateType.RecalcUniforms);
    }
    get src() {
        return this.props.src;
    }
    set src(imageUrl) {
        if (this.props.src === imageUrl) return;
        this.props.src = imageUrl;
        if (!imageUrl) {
            this.texture = null;
            return;
        }
        if (true === false && typeof imageUrl !== "string" && (this.props.srcKey === null || this.props.srcKey === void 0)) console.warn("[CoreNode] A non-string `src` needs a `srcKey` to be cached. Set one before `src`.");
        this.texture = this.stage.txManager.createTexture("ImageTexture", {
            src: imageUrl,
            key: this.props.srcKey,
            w: this.props.w,
            h: this.props.h,
            type: this.props.imageType,
            sx: this.props.srcX,
            sy: this.props.srcY,
            sw: this.props.srcWidth,
            sh: this.props.srcHeight
        });
    }
    get srcKey() {
        var _this$props$srcKey;
        return (_this$props$srcKey = this.props.srcKey) !== null && _this$props$srcKey !== void 0 ? _this$props$srcKey : null;
    }
    set srcKey(value) {
        this.props.srcKey = value;
    }
    set imageType(type) {
        if (this.props.imageType === type) return;
        this.props.imageType = type;
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
    get texture() {
        return this.props.texture;
    }
    set texture(value) {
        var _this$texture2;
        if (this.props.texture === value) return;
        if (this.props.texture) this.unloadTexture();
        this.textureCoords = void 0;
        this.props.texture = value;
        this.textureLoaded = value !== null && value.state === "loaded";
        this.updatePlaceholderActive();
        if (value !== null) {
            value.setRenderableOwner(this._id, this.isRenderable);
            this.textureOwnership = this.isRenderable;
            this.loadTexture();
        }
        if (((_this$texture2 = this.texture) == null ? void 0 : _this$texture2.type) === TextureType.subTexture && this.textureLoaded) this.isQuadDirty = true;
        this.setUpdateType(UpdateType.IsRenderable);
        this.updateIsSimple();
    }
    set textureOptions(value) {
        this.props.textureOptions = value;
        if (this.stage.calculateTextureCoord === true && value !== null) this.textureCoords = this.stage.renderer.getTextureCoords(this);
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
    animate(props, settings) {
        return createAnimation(this.stage.animationManager, this, props, settings);
    }
    animateProp(name, value, settings) {
        let animations = this._animations;
        if (animations !== null) {
            const existing = animations[name];
            if (existing && existing.settings === settings) {
                const controller = existing.controller;
                const values = controller.props ? controller.props[name] : null;
                if (values) {
                    var _this$name;
                    values.start = (_this$name = this[name]) !== null && _this$name !== void 0 ? _this$name : 0;
                    values.target = value;
                    controller.progress = 0;
                    if (settings.adaptiveDuration === true) {
                        var _settings$duration;
                        const now = performance.now();
                        const elapsed = now - controller.lastRunTime;
                        controller.lastRunTime = now;
                        const duration = (_settings$duration = settings.duration) !== null && _settings$duration !== void 0 ? _settings$duration : controller.duration;
                        controller.duration = elapsed < duration ? elapsed : duration;
                    }
                    return controller.start();
                }
            }
        } else animations = this._animations = {};
        const animationProps = {
            [name]: value
        };
        const controller = createAnimation(this.stage.animationManager, this, animationProps, settings);
        animations[name] = {
            controller: controller,
            settings: settings
        };
        return controller.start();
    }
    animateToTarget(prop) {
        var _animation$controller;
        const animations = this._animations;
        if (animations === null) return;
        const animation = animations[prop];
        if (!animation) return;
        return (_animation$controller = animation.controller.props) == null || (_animation$controller = _animation$controller[prop]) == null ? void 0 : _animation$controller.target;
    }
    flush() {}
    draw(renderer) {
        const {glw: glw, stage: stage} = renderer;
        const shader = this.props.shader;
        renderer.useShader(shader.program);
        shader.program.bindRenderOp(this, renderer.quadBufferCollection);
        if (this.clippingRect.valid === true) {
            const pixelRatio = stage.pixelRatio;
            const clipX = Math.round(this.clippingRect.x * pixelRatio);
            const clipWidth = Math.round(this.clippingRect.w * pixelRatio);
            const clipHeight = Math.round(this.clippingRect.h * pixelRatio);
            const clipY = Math.round(glw.canvasH - clipHeight - this.clippingRect.y * pixelRatio);
            glw.setScissorTest(true);
            glw.scissor(clipX, clipY, clipWidth, clipHeight);
        } else glw.setScissorTest(false);
        const quadIdx = this.renderOpBufferIdx / WORDS_PER_QUAD * 6 * 2;
        glw.drawElements(glw.TRIANGLES, 6 * this.numQuads, glw.UNSIGNED_SHORT, quadIdx);
    }
};

var AnimationManager = class {
    constructor() {
        this.activeAnimations = [];
    }
    registerAnimation(animation) {
        if (!this.activeAnimations.includes(animation)) this.activeAnimations.push(animation);
    }
    unregisterAnimation(animation) {
        const idx = this.activeAnimations.indexOf(animation);
        if (idx !== -1) this.activeAnimations.splice(idx, 1);
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
                anim.delayFor -= remainingDt;
                if (anim.delayFor >= 0) continue; else {
                    remainingDt = -anim.delayFor;
                    anim.delayFor = 0;
                }
            }
            if (anim.progress === 0 && anim.state === "scheduled") anim.state = "running";
            if (duration === 0) anim.progress = 1; else anim.progress += remainingDt / duration;
            let isFinished = false;
            if (anim.progress >= 1) if (loop) {
                anim.progress = anim.progress % 1;
                anim.delayFor = anim.delay;
            } else {
                anim.progress = 1;
                isFinished = true;
            }
            this.applyValues(anim);
            if (isFinished) if (anim.stopMethod === "reverse") {
                this.reverseValues(anim);
                anim.progress = 0;
                anim.delayFor = anim.delay;
            } else anim.stop();
        }
    }
    applyValues(anim) {
        const progress = anim.progress;
        const easedProgress = anim.timingFunction(progress) || progress;
        const propKeys = anim.propKeys;
        if (propKeys !== null) this.writeValues(anim.node, propKeys, anim.propList, progress, easedProgress);
        const shaderPropKeys = anim.shaderPropKeys;
        if (shaderPropKeys !== null && anim.node.shader !== null) this.writeValues(anim.node.shader.props, shaderPropKeys, anim.shaderPropList, progress, easedProgress);
    }
    writeValues(target, keys, values, progress, easedProgress) {
        const len = keys.length;
        if (progress === 1) {
            for (let i = 0; i < len; i++) target[keys[i]] = values[i].target;
            return;
        }
        if (progress === 0) {
            for (let i = 0; i < len; i++) target[keys[i]] = values[i].start;
            return;
        }
        for (let i = 0; i < len; i++) {
            const value = values[i];
            const start = value.start;
            if (value.isColor === true) target[keys[i]] = mergeColorProgress(start, value.target, easedProgress); else target[keys[i]] = start + (value.target - start) * easedProgress;
        }
    }
    reverseValues(anim) {
        if (anim.props) for (const key in anim.props) {
            const v = anim.props[key];
            const t = v.start;
            v.start = v.target;
            v.target = t;
        }
        if (anim.shaderProps) for (const key in anim.shaderProps) {
            const v = anim.shaderProps[key];
            const t = v.start;
            v.start = v.target;
            v.target = t;
        }
        if (!anim.loop) anim.stopMethod = false;
    }
};

function createImageWorker() {
    function hasAlphaChannel(mimeType) {
        return mimeType.indexOf("image/png") !== -1;
    }
    function getImage(src, premultiplyAlpha, x, y, width, height, options) {
        return new Promise(function(resolve, reject) {
            var supportsOptionsCreateImageBitmap = options.supportsOptionsCreateImageBitmap;
            var supportsFullCreateImageBitmap = options.supportsFullCreateImageBitmap;
            var premultiplyAlphaHonored = options.premultiplyAlphaHonored;
            var xhr = new XMLHttpRequest;
            xhr.open("GET", src, true);
            xhr.responseType = "blob";
            xhr.onload = function() {
                if (xhr.status !== 200 && xhr.status !== 0) return reject(new Error(`Image loading failed. HTTP status code: ${xhr.status || "N/A"}. URL: ${src}`));
                var blob = xhr.response;
                var withAlphaChannel = premultiplyAlpha !== void 0 && premultiplyAlpha !== null ? premultiplyAlpha : hasAlphaChannel(blob.type);
                var useGlPremultiply = withAlphaChannel === true && premultiplyAlphaHonored === false;
                var bitmapMode = withAlphaChannel === true && useGlPremultiply === false ? "premultiply" : "none";
                if (supportsFullCreateImageBitmap === true && width !== null && height !== null) {
                    createImageBitmap(blob, x || 0, y || 0, width, height, {
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
                    return;
                } else if (supportsOptionsCreateImageBitmap === false && supportsFullCreateImageBitmap === false) createImageBitmap(blob).then(function(data) {
                    resolve({
                        data: data,
                        premultiplyAlpha: useGlPremultiply
                    });
                }).catch(function(error) {
                    reject(error);
                }); else createImageBitmap(blob, {
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
            };
            xhr.onerror = function() {
                reject(new Error("Network error occurred while trying to fetch the image."));
            };
            xhr.send();
        });
    }
    var supportsOptionsCreateImageBitmap = false;
    var supportsFullCreateImageBitmap = false;
    var premultiplyAlphaHonored = false;
    function handleRequest(request) {
        var id = request.id;
        var src = request.src;
        getImage(src, request.premultiplyAlpha, request.sx, request.sy, request.sw, request.sh, {
            supportsOptionsCreateImageBitmap: supportsOptionsCreateImageBitmap,
            supportsFullCreateImageBitmap: supportsFullCreateImageBitmap,
            premultiplyAlphaHonored: premultiplyAlphaHonored
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
    }
    self.onmessage = event => {
        if (event.data.init === true) {
            supportsOptionsCreateImageBitmap = event.data.supportsOptionsCreateImageBitmap;
            supportsFullCreateImageBitmap = event.data.supportsFullCreateImageBitmap;
            premultiplyAlphaHonored = event.data.premultiplyAlphaHonored;
            return;
        }
        handleRequest(event.data);
    };
}

var ImageWorkerManager = class {
    constructor(createImageBitmapSupport) {
        this.messageManager = new Map;
        this.worker = null;
        this.nextId = 0;
        this.spawnAttempted = false;
        this.createImageBitmapSupport = void 0;
        this.createImageBitmapSupport = createImageBitmapSupport;
        setTimeout(() => {
            try {
                this.spawnWorker();
            } catch (e) {}
        }, 0);
    }
    handleMessage(event) {
        const {id: id, data: data, error: error} = event.data;
        const msg = this.messageManager.get(id);
        if (msg !== void 0) {
            const [resolve, reject] = msg;
            this.messageManager.delete(id);
            if (error) reject(new Error(error)); else resolve(data);
        }
    }
    handleWorkerError(event) {
        const message = event instanceof ErrorEvent && event.message ? event.message : "Image worker encountered an unrecoverable error";
        for (const [id, msg] of this.messageManager) {
            const [, reject] = msg;
            this.messageManager.delete(id);
            reject(new Error(message));
        }
    }
    createWorkerBlob() {
        let workerCode = `(${createImageWorker.toString()})()`;
        workerCode = workerCode.replace('"use strict";', "");
        return new Blob([ workerCode ], {
            type: "application/javascript"
        });
    }
    spawnWorker() {
        if (this.spawnAttempted === true) return;
        this.spawnAttempted = true;
        const blob = this.createWorkerBlob();
        const urlFactory = self.URL ? URL : webkitURL;
        const blobURL = urlFactory.createObjectURL(blob);
        const worker = new Worker(blobURL);
        urlFactory.revokeObjectURL(blobURL);
        worker.onmessage = event => this.handleMessage(event);
        worker.onerror = event => this.handleWorkerError(event);
        worker.onmessageerror = event => this.handleWorkerError(event);
        worker.postMessage({
            init: true,
            supportsOptionsCreateImageBitmap: this.createImageBitmapSupport.options,
            supportsFullCreateImageBitmap: this.createImageBitmapSupport.full,
            premultiplyAlphaHonored: this.createImageBitmapSupport.premultiplyHonored
        });
        this.worker = worker;
    }
    getImage(src, premultiplyAlpha, sx, sy, sw, sh) {
        return new Promise((resolve, reject) => {
            if (this.worker === null) try {
                this.spawnWorker();
            } catch (e) {}
            const worker = this.worker;
            if (worker === null) {
                reject(new Error("No image worker available"));
                return;
            }
            const id = this.nextId++;
            this.messageManager.set(id, [ resolve, reject ]);
            worker.postMessage({
                id: id,
                src: src,
                premultiplyAlpha: premultiplyAlpha,
                sx: sx,
                sy: sy,
                sw: sw,
                sh: sh
            });
        });
    }
};

var ColorTexture = class extends Texture {
    constructor(txManager, props) {
        super(txManager);
        this.type = TextureType.color;
        this.props = void 0;
        this.props = props;
    }
    get color() {
        return this.props.color;
    }
    set color(color) {
        this.props.color = color;
    }
    async getTextureSource() {
        const pixelData = new Uint8Array(4);
        if (this.color === 4294967295) {
            pixelData[0] = 255;
            pixelData[1] = 255;
            pixelData[2] = 255;
            pixelData[3] = 255;
        } else {
            pixelData[0] = this.color >> 16 & 255;
            pixelData[1] = this.color >> 8 & 255;
            pixelData[2] = this.color & 255;
            pixelData[3] = this.color >>> 24 & 255;
        }
        this.setState("fetched", {
            w: 1,
            h: 1
        });
        return {
            data: pixelData,
            premultiplyAlpha: true
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

ColorTexture.z$__type__Props = void 0;

function isCompressedTextureContainer(src) {
    return /\.(ktx|pvr)$/.test(src);
}

var PVR_MAGIC = 55727696;

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
};

var ASTC_MAGIC = 1554098963;

var ASTC_TO_GL_INTERNAL_FORMAT = {
    "4x4": 37808,
    "5x5": 37809,
    "6x6": 37810,
    "8x8": 37811,
    "10x10": 37812,
    "12x12": 37813
};

var KTX_IDENTIFIER = [ 171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10 ];

var loadCompressedTexture = async url => {
    try {
        const arrayBuffer = await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest;
            xhr.open("GET", url, true);
            xhr.responseType = "arraybuffer";
            xhr.onload = () => {
                if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 0) resolve(xhr.response); else reject(new Error(`Failed to fetch compressed texture: ${xhr.status} ${xhr.statusText}`));
            };
            xhr.onerror = () => {
                reject(new Error("Network error occurred while trying to fetch the compressed texture."));
            };
            xhr.send(null);
        });
        if (arrayBuffer.byteLength < 16) throw new Error(`File too small to be a valid compressed texture (${arrayBuffer.byteLength} bytes). Expected at least 16 bytes for header inspection.`);
        const view = new DataView(arrayBuffer);
        const magic = view.getUint32(0, true);
        if (magic === PVR_MAGIC) return loadPVR(view);
        if (magic === ASTC_MAGIC) return loadASTC(view);
        let isKTX = true;
        for (let i = 0; i < KTX_IDENTIFIER.length; i++) if (view.getUint8(i) !== KTX_IDENTIFIER[i]) {
            isKTX = false;
            break;
        }
        if (isKTX === true) return loadKTX(view); else throw new Error("Unrecognized compressed texture format");
    } catch (error) {
        throw new Error(`Failed to load compressed texture from ${url}: ${error}`);
    }
};

function readUint24(view, offset) {
    return view.getUint8(offset) + (view.getUint8(offset + 1) << 8) + (view.getUint8(offset + 2) << 16);
}

var loadASTC = async function(view) {
    const blockX = view.getUint8(4);
    const blockY = view.getUint8(5);
    const sizeX = readUint24(view, 7);
    const sizeY = readUint24(view, 10);
    if (sizeX === 0 || sizeY === 0) throw new Error(`Invalid ASTC texture dimensions: ${sizeX}x${sizeY}`);
    const expected = Math.ceil(sizeX / blockX) * Math.ceil(sizeY / blockY) * 16;
    const dataSize = view.byteLength - 16;
    if (expected !== dataSize) throw new Error(`Invalid ASTC texture data size: expected ${expected}, got ${dataSize}`);
    const internalFormat = ASTC_TO_GL_INTERNAL_FORMAT[`${blockX}x${blockY}`];
    if (internalFormat === void 0) throw new Error(`Unsupported ASTC block size: ${blockX}x${blockY}`);
    const buffer = view.buffer;
    const mipmaps = [];
    mipmaps.push(buffer.slice(16));
    return {
        data: {
            blockInfo: blockInfoMap[internalFormat],
            glInternalFormat: internalFormat,
            mipmaps: mipmaps,
            w: sizeX,
            h: sizeY,
            type: "astc"
        },
        premultiplyAlpha: false
    };
};

var EXT_ASTC = [ "WEBGL_compressed_texture_astc" ];

var EXT_S3TC = [ "WEBGL_compressed_texture_s3tc" ];

var EXT_ETC1 = [ "WEBGL_compressed_texture_etc1" ];

var EXT_ETC = [ "WEBGL_compressed_texture_etc" ];

var EXT_PVRTC = [ "WEBGL_compressed_texture_pvrtc", "WEBKIT_WEBGL_compressed_texture_pvrtc" ];

var EXT_NONE = [];

var requiredExtensionsForFormat = glInternalFormat => {
    if (glInternalFormat >= 37808 && glInternalFormat <= 37845) return EXT_ASTC;
    if (glInternalFormat >= 33776 && glInternalFormat <= 33779) return EXT_S3TC;
    if (glInternalFormat === 36196) return EXT_ETC1;
    if (glInternalFormat >= 37492 && glInternalFormat <= 37497) return EXT_ETC;
    if (glInternalFormat >= 35840 && glInternalFormat <= 35843) return EXT_PVRTC;
    return EXT_NONE;
};

var ensureCompressedFormatEnabled = (glw, glInternalFormat) => {
    const names = requiredExtensionsForFormat(glInternalFormat);
    const len = names.length;
    if (len === 0) return;
    for (let i = 0; i < len; i++) if (glw.getExtension(names[i]) !== null) return;
    throw new Error(`Compressed texture format 0x${glInternalFormat.toString(16)} is not supported by this device (requires ${names.join(" or ")})`);
};

var uploadASTC = function(glw, texture, data) {
    const {glInternalFormat: glInternalFormat, mipmaps: mipmaps, w: w, h: h} = data;
    ensureCompressedFormatEnabled(glw, glInternalFormat);
    glw.bindTexture(texture);
    if (mipmaps === void 0) return;
    const view = new Uint8Array(mipmaps[0]);
    glw.compressedTexImage2D(0, glInternalFormat, w, h, 0, view);
    glw.texParameteri(glw.TEXTURE_WRAP_S, glw.CLAMP_TO_EDGE);
    glw.texParameteri(glw.TEXTURE_WRAP_T, glw.CLAMP_TO_EDGE);
    glw.texParameteri(glw.TEXTURE_MAG_FILTER, glw.LINEAR);
    glw.texParameteri(glw.TEXTURE_MIN_FILTER, glw.LINEAR);
};

var loadKTX = async function(view) {
    const endianness = view.getUint32(12, true);
    const littleEndian = endianness === 67305985;
    if (littleEndian === false && endianness !== 16909060) throw new Error("Invalid KTX endianness value");
    const glType = view.getUint32(16, littleEndian);
    const glFormat = view.getUint32(24, littleEndian);
    if (glType !== 0 || glFormat !== 0) throw new Error(`KTX texture is not compressed (glType: ${glType}, glFormat: ${glFormat})`);
    const glInternalFormat = view.getUint32(28, littleEndian);
    if (blockInfoMap[glInternalFormat] === void 0) throw new Error(`Unsupported KTX compressed texture format: 0x${glInternalFormat.toString(16)}`);
    const width = view.getUint32(36, littleEndian);
    const height = view.getUint32(40, littleEndian);
    if (width === 0 || height === 0) throw new Error(`Invalid KTX texture dimensions: ${width}x${height}`);
    const mipmapLevels = view.getUint32(56, littleEndian);
    if (mipmapLevels === 0) throw new Error("KTX texture has no mipmap levels");
    const bytesOfKeyValueData = view.getUint32(60, littleEndian);
    const mipmaps = [];
    const buffer = view.buffer;
    let offset = 64 + bytesOfKeyValueData;
    if (offset > view.byteLength) throw new Error("Invalid KTX file: key/value data exceeds file size");
    for (let i = 0; i < mipmapLevels; i++) {
        const imageSize = view.getUint32(offset, littleEndian);
        offset += 4;
        const end = offset + imageSize;
        mipmaps.push(buffer.slice(offset, end));
        offset = end;
        if (offset % 4 !== 0) offset += 4 - offset % 4;
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
        premultiplyAlpha: false
    };
};

var uploadKTX = function(glw, texture, data) {
    const {glInternalFormat: glInternalFormat, mipmaps: mipmaps, w: width, h: height, blockInfo: blockInfo} = data;
    ensureCompressedFormatEnabled(glw, glInternalFormat);
    if (mipmaps === void 0) return;
    glw.bindTexture(texture);
    const blockWidth = blockInfo.width;
    const blockHeight = blockInfo.height;
    let w = width;
    let h = height;
    for (let i = 0; i < mipmaps.length; i++) {
        let view = new Uint8Array(mipmaps[i]);
        const uploadW = Math.ceil(w / blockWidth) * blockWidth;
        const uploadH = Math.ceil(h / blockHeight) * blockHeight;
        const expectedBytes = Math.ceil(w / blockWidth) * Math.ceil(h / blockHeight) * blockInfo.bytes;
        if (view.byteLength < expectedBytes) {
            const padded = new Uint8Array(expectedBytes);
            padded.set(view);
            view = padded;
        }
        glw.compressedTexImage2D(i, glInternalFormat, uploadW, uploadH, 0, view);
        w = Math.max(1, w >> 1);
        h = Math.max(1, h >> 1);
    }
    glw.texParameteri(glw.TEXTURE_WRAP_S, glw.CLAMP_TO_EDGE);
    glw.texParameteri(glw.TEXTURE_WRAP_T, glw.CLAMP_TO_EDGE);
    glw.texParameteri(glw.TEXTURE_MAG_FILTER, glw.LINEAR);
    glw.texParameteri(glw.TEXTURE_MIN_FILTER, mipmaps.length > 1 ? glw.LINEAR_MIPMAP_LINEAR : glw.LINEAR);
};

function pvrtcMipSize(width, height, bpp) {
    return Math.max(width, bpp === 2 ? 16 : 8) * Math.max(height, 8) * bpp / 8;
}

var loadPVR = async function(view) {
    const pixelFormatLow = view.getUint32(8, true);
    const internalFormat = PVR_TO_GL_INTERNAL_FORMAT[pixelFormatLow];
    if (internalFormat === void 0) throw new Error(`Unsupported PVR pixel format: 0x${pixelFormatLow.toString(16)}`);
    const height = view.getInt32(24, true);
    const width = view.getInt32(28, true);
    if (width === 0 || height === 0) throw new Error(`Invalid PVR texture dimensions: ${width}x${height}`);
    const mipmapLevels = view.getInt32(44, true);
    const metadataSize = view.getUint32(48, true);
    const buffer = view.buffer;
    let offset = 52 + metadataSize;
    if (offset > buffer.byteLength) throw new Error("Invalid PVR file: metadata exceeds file size");
    const mipmaps = [];
    const block = blockInfoMap[internalFormat];
    for (let i = 0; i < mipmapLevels; i++) {
        const declaredSize = view.getUint32(offset, true);
        const max = buffer.byteLength - (offset + 4);
        if (declaredSize > 0 && declaredSize <= max) {
            offset += 4;
            const start = offset;
            const end = offset + declaredSize;
            mipmaps.push(buffer.slice(start, end));
            offset = end;
            offset = offset + 3 & -4;
            continue;
        }
        if (pixelFormatLow === 0 || pixelFormatLow === 1 || pixelFormatLow === 2 || pixelFormatLow === 3) {
            const bpp = pixelFormatLow === 0 || pixelFormatLow === 1 ? 2 : 4;
            const computed = pvrtcMipSize(width >> i, height >> i, bpp);
            mipmaps.push(buffer.slice(offset, offset + computed));
            offset += computed;
            offset = offset + 3 & -4;
            continue;
        }
        if (block !== void 0) {
            const computed = Math.ceil((width >> i) / block.width) * Math.ceil((height >> i) / block.height) * block.bytes;
            mipmaps.push(buffer.slice(offset, offset + computed));
            offset += computed;
            offset = offset + 3 & -4;
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
        premultiplyAlpha: false
    };
};

var uploadPVR = function(glw, texture, data) {
    const {glInternalFormat: glInternalFormat, mipmaps: mipmaps, w: width, h: height} = data;
    ensureCompressedFormatEnabled(glw, glInternalFormat);
    if (mipmaps === void 0) return;
    glw.bindTexture(texture);
    let w = width;
    let h = height;
    for (let i = 0; i < mipmaps.length; i++) {
        glw.compressedTexImage2D(i, glInternalFormat, w, h, 0, new Uint8Array(mipmaps[i]));
        w = Math.max(1, w >> 1);
        h = Math.max(1, h >> 1);
    }
    glw.texParameteri(glw.TEXTURE_WRAP_S, glw.CLAMP_TO_EDGE);
    glw.texParameteri(glw.TEXTURE_WRAP_T, glw.CLAMP_TO_EDGE);
    glw.texParameteri(glw.TEXTURE_MAG_FILTER, glw.LINEAR);
    glw.texParameteri(glw.TEXTURE_MIN_FILTER, mipmaps.length > 1 ? glw.LINEAR_MIPMAP_LINEAR : glw.LINEAR);
};

var BLOCK_4x4x8 = {
    width: 4,
    height: 4,
    bytes: 8
};

var BLOCK_4x4x16 = {
    width: 4,
    height: 4,
    bytes: 16
};

var BLOCK_5x5x16 = {
    width: 5,
    height: 5,
    bytes: 16
};

var BLOCK_6x6x16 = {
    width: 6,
    height: 6,
    bytes: 16
};

var BLOCK_8x4x8 = {
    width: 8,
    height: 4,
    bytes: 8
};

var BLOCK_8x8x16 = {
    width: 8,
    height: 8,
    bytes: 16
};

var BLOCK_10x10x16 = {
    width: 10,
    height: 10,
    bytes: 16
};

var BLOCK_12x12x16 = {
    width: 12,
    height: 12,
    bytes: 16
};

var blockInfoMap = {
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
};

var uploadCompressedTexture = {
    ktx: uploadKTX,
    pvr: uploadPVR,
    astc: uploadASTC
};

function isSvgImage(url) {
    return /\.(svg)(\?.*)?$/.test(url);
}

var loadSvg = async (url, width, height, sx, sy, sw, sh, pixelRatio) => {
    const img = new Image;
    if (isBase64Image(url) === false) img.crossOrigin = "anonymous";
    await new Promise((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = err => {
            reject(err instanceof Error ? err : new Error(`SVG loading failed: ${url}`));
        };
        img.src = url;
    });
    const targetW = width || sw || img.naturalWidth || img.width;
    const targetH = height || sh || img.naturalHeight || img.height;
    const ratio = pixelRatio > 1 ? pixelRatio : 1;
    const physW = Math.max(1, Math.ceil(targetW * ratio));
    const physH = Math.max(1, Math.ceil(targetH * ratio));
    const canvas = document.createElement("canvas");
    canvas.width = physW;
    canvas.height = physH;
    const ctx = canvas.getContext("2d");
    assertTruthy(ctx);
    if (sw !== null && sh !== null) ctx.drawImage(img, sx !== null && sx !== void 0 ? sx : 0, sy !== null && sy !== void 0 ? sy : 0, sw, sh, 0, 0, physW, physH); else ctx.drawImage(img, 0, 0, physW, physH);
    if (typeof createImageBitmap === "function") try {
        return {
            data: await createImageBitmap(canvas),
            premultiplyAlpha: false
        };
    } catch (_unused) {}
    return {
        data: ctx.getImageData(0, 0, physW, physH),
        premultiplyAlpha: true
    };
};

var ImageTexture = class extends Texture {
    constructor(txManager, props) {
        super(txManager);
        this.platform = void 0;
        this.props = void 0;
        this.type = TextureType.image;
        this.platform = txManager.platform;
        this.props = props;
        this.maxRetryCount = props.maxRetryCount;
    }
    hasAlphaChannel(mimeType) {
        return mimeType.indexOf("image/png") !== -1;
    }
    async loadImageFallback(src, hasAlpha) {
        const img = new Image;
        if (typeof src === "string" && isBase64Image(src) === false) img.crossOrigin = "anonymous";
        return new Promise((resolve, reject) => {
            let objectUrl = null;
            const cleanup = () => {
                if (objectUrl !== null) {
                    URL.revokeObjectURL(objectUrl);
                    objectUrl = null;
                }
            };
            img.onload = () => {
                cleanup();
                resolve({
                    data: img,
                    premultiplyAlpha: hasAlpha
                });
            };
            img.onerror = err => {
                cleanup();
                const errorMessage = err instanceof Error ? err.message : err instanceof Event ? `Image loading failed for ${img.src}` : "Unknown image loading error";
                reject(new Error(`Image loading failed: ${errorMessage}`));
            };
            if (src instanceof Blob) {
                objectUrl = URL.createObjectURL(src);
                img.src = objectUrl;
            } else img.src = src;
        });
    }
    async createImageBitmap(blob, premultiplyAlpha, sx, sy, sw, sh) {
        const hasAlphaChannel = premultiplyAlpha !== null && premultiplyAlpha !== void 0 ? premultiplyAlpha : blob.type.includes("image/png");
        const imageBitmapSupported = this.txManager.imageBitmapSupported;
        const useGlPremultiply = hasAlphaChannel === true && imageBitmapSupported.premultiplyHonored === false;
        const bitmapMode = hasAlphaChannel === true && useGlPremultiply === false ? "premultiply" : "none";
        if (imageBitmapSupported.full === true && sw !== null && sh !== null) return {
            data: await this.platform.createImageBitmap(blob, sx || 0, sy || 0, sw, sh, {
                premultiplyAlpha: bitmapMode,
                colorSpaceConversion: "none",
                imageOrientation: "none"
            }),
            premultiplyAlpha: useGlPremultiply
        }; else if (imageBitmapSupported.options === false && imageBitmapSupported.full === false) return {
            data: await this.platform.createImageBitmap(blob),
            premultiplyAlpha: useGlPremultiply
        };
        return {
            data: await this.platform.createImageBitmap(blob, {
                premultiplyAlpha: bitmapMode,
                colorSpaceConversion: "none",
                imageOrientation: "none"
            }),
            premultiplyAlpha: useGlPremultiply
        };
    }
    async loadImage(src) {
        const {premultiplyAlpha: premultiplyAlpha, sx: sx, sy: sy, sw: sw, sh: sh} = this.props;
        const isBase64 = isBase64Image(src);
        if (this.txManager.hasCreateImageBitmap === true) {
            if (isBase64 === false && this.txManager.hasWorker === true && this.txManager.imageWorkerManager !== null) return this.txManager.imageWorkerManager.getImage(src, premultiplyAlpha, sx, sy, sw, sh);
            const blob = isBase64 ? dataURIToBlob(src) : await fetchJson(src, "blob");
            return this.createImageBitmap(blob, premultiplyAlpha, sx, sy, sw, sh);
        }
        return this.loadImageFallback(src, premultiplyAlpha !== null && premultiplyAlpha !== void 0 ? premultiplyAlpha : true);
    }
    async getTextureSource() {
        var _this$txManager$rende, _ref, _resp$premultiplyAlph;
        if (true && ((_this$txManager$rende = this.txManager.renderer) == null ? void 0 : _this$txManager$rende.mode) === "canvas") {
            const {src: src, type: type} = this.props;
            if (type === "compressed" || typeof src === "string" && isCompressedTextureContainer(src) === true) {
                const err = new Error(`ImageTexture: Compressed textures are not supported in Canvas2D render mode (src: ${String(src)})`);
                this.setState("failed", err);
                return {
                    data: null
                };
            }
        }
        let resp;
        try {
            resp = await this.determineImageTypeAndLoadImage();
        } catch (e) {
            this.setState("failed", e);
            return {
                data: null
            };
        }
        if (resp.data === null) {
            this.setState("failed", Error("ImageTexture: No image data"));
            return {
                data: null
            };
        }
        return {
            data: resp.data,
            premultiplyAlpha: (_ref = (_resp$premultiplyAlph = resp.premultiplyAlpha) !== null && _resp$premultiplyAlph !== void 0 ? _resp$premultiplyAlph : this.props.premultiplyAlpha) !== null && _ref !== void 0 ? _ref : true
        };
    }
    determineImageTypeAndLoadImage() {
        const {src: src, premultiplyAlpha: premultiplyAlpha, type: type} = this.props;
        if (src === null) return {
            data: null
        };
        if (typeof src !== "string") {
            if (src instanceof Blob) if (this.txManager.hasCreateImageBitmap === true) {
                const {sx: sx, sy: sy, sw: sw, sh: sh} = this.props;
                return this.createImageBitmap(src, premultiplyAlpha, sx, sy, sw, sh);
            } else return this.loadImageFallback(src, premultiplyAlpha !== null && premultiplyAlpha !== void 0 ? premultiplyAlpha : true);
            if (src instanceof ImageData) return {
                data: src,
                premultiplyAlpha: premultiplyAlpha
            };
            return {
                data: src(),
                premultiplyAlpha: premultiplyAlpha
            };
        }
        const absoluteSrc = convertUrlToAbsolute(src);
        if (type === "regular") return this.loadImage(absoluteSrc);
        if (type === "svg" || isSvgImage(src) === true) return loadSvg(absoluteSrc, this.props.w, this.props.h, this.props.sx, this.props.sy, this.props.sw, this.props.sh, this.txManager.pixelRatio);
        if (true && (type === "compressed" || isCompressedTextureContainer(src) === true)) return loadCompressedTexture(absoluteSrc);
        return this.loadImage(absoluteSrc);
    }
    static makeCacheKey(props) {
        var _props$premultiplyAlp, _props$maxRetryCount;
        const key = props.key || props.src;
        if (typeof key !== "string") return false;
        let cacheKey = `ImageTexture,${key},${(_props$premultiplyAlp = props.premultiplyAlpha) !== null && _props$premultiplyAlp !== void 0 ? _props$premultiplyAlp : true},${(_props$maxRetryCount = props.maxRetryCount) !== null && _props$maxRetryCount !== void 0 ? _props$maxRetryCount : 5}`;
        if (props.sh != null && props.sw != null) {
            var _props$sx, _props$sy;
            cacheKey += `,${(_props$sx = props.sx) !== null && _props$sx !== void 0 ? _props$sx : ""},${(_props$sy = props.sy) !== null && _props$sy !== void 0 ? _props$sy : ""},${props.sw || ""},${props.sh || ""}`;
        }
        return cacheKey;
    }
    static resolveDefaults(props) {
        var _props$src, _props$premultiplyAlp2, _props$key, _props$type, _props$w, _props$h, _props$sx2, _props$sy2, _props$sw, _props$sh, _props$maxRetryCount2;
        return {
            src: (_props$src = props.src) !== null && _props$src !== void 0 ? _props$src : "",
            premultiplyAlpha: (_props$premultiplyAlp2 = props.premultiplyAlpha) !== null && _props$premultiplyAlp2 !== void 0 ? _props$premultiplyAlp2 : true,
            key: (_props$key = props.key) !== null && _props$key !== void 0 ? _props$key : null,
            type: (_props$type = props.type) !== null && _props$type !== void 0 ? _props$type : null,
            w: (_props$w = props.w) !== null && _props$w !== void 0 ? _props$w : null,
            h: (_props$h = props.h) !== null && _props$h !== void 0 ? _props$h : null,
            sx: (_props$sx2 = props.sx) !== null && _props$sx2 !== void 0 ? _props$sx2 : null,
            sy: (_props$sy2 = props.sy) !== null && _props$sy2 !== void 0 ? _props$sy2 : null,
            sw: (_props$sw = props.sw) !== null && _props$sw !== void 0 ? _props$sw : null,
            sh: (_props$sh = props.sh) !== null && _props$sh !== void 0 ? _props$sh : null,
            maxRetryCount: (_props$maxRetryCount2 = props.maxRetryCount) !== null && _props$maxRetryCount2 !== void 0 ? _props$maxRetryCount2 : 5
        };
    }
};

ImageTexture.z$__type__Props = void 0;

var NoiseTexture = class NoiseTexture extends Texture {
    constructor(txManager, props) {
        super(txManager);
        this.props = void 0;
        this.type = TextureType.noise;
        this.props = props;
    }
    async getTextureSource() {
        const {w: w, h: h} = this.props;
        const size = w * h * 4;
        const pixelData8 = new Uint8ClampedArray(size);
        for (let i = 0; i < size; i += 4) {
            const v = Math.floor(Math.random() * 256);
            pixelData8[i] = v;
            pixelData8[i + 1] = v;
            pixelData8[i + 2] = v;
            pixelData8[i + 3] = 255;
        }
        return {
            data: new ImageData(pixelData8, w, h)
        };
    }
    static makeCacheKey(props) {
        if (props.cacheId === void 0) return false;
        const resolvedProps = NoiseTexture.resolveDefaults(props);
        return `NoiseTexture,${resolvedProps.w},${resolvedProps.h},${resolvedProps.cacheId}`;
    }
    static resolveDefaults(props) {
        var _props$w, _props$h, _props$cacheId;
        return {
            w: (_props$w = props.w) !== null && _props$w !== void 0 ? _props$w : 128,
            h: (_props$h = props.h) !== null && _props$h !== void 0 ? _props$h : 128,
            cacheId: (_props$cacheId = props.cacheId) !== null && _props$cacheId !== void 0 ? _props$cacheId : 0
        };
    }
};

NoiseTexture.z$__type__Props = void 0;

var subTextureId = 0;

var SubTexture = class extends Texture {
    constructor(txManager, props) {
        super(txManager);
        this.props = void 0;
        this.parentTexture = void 0;
        this.type = TextureType.subTexture;
        this.subtextureId = `subtexture-${subTextureId++}`;
        this.onParentTxLoaded = () => {
            this.setState("loaded", {
                w: this.props.w,
                h: this.props.h
            });
        };
        this.onParentTxFailed = (target, error) => {
            this.retryCount = this.parentTexture.retryCount - 1;
            this.setState("failed", error);
        };
        this.onParentTxLoading = () => {
            this.setState("loading");
        };
        this.onParentTxFreed = () => {
            this.setState("freed");
        };
        this.props = props;
        assertTruthy(this.props.texture, "SubTexture requires a parent texture");
        assertTruthy(this.props.texture instanceof ImageTexture, "SubTexture requires an ImageTexture parent");
        this.parentTexture = txManager.resolveParentTexture(this.props.texture);
        if (this.renderableOwners.size > 0) this.parentTexture.setRenderableOwner(this.subtextureId, true);
        queueMicrotask(() => {
            const parentTx = this.parentTexture;
            if (parentTx.state === "loaded" && parentTx.dimensions !== null) this.onParentTxLoaded(parentTx, parentTx.dimensions); else if (parentTx.state === "loading") this.onParentTxLoading(); else if (parentTx.state === "failed" && parentTx.error !== null) this.onParentTxFailed(parentTx, parentTx.error); else if (parentTx.state === "freed") this.onParentTxFreed();
            parentTx.on("loading", this.onParentTxLoading);
            parentTx.on("loaded", this.onParentTxLoaded);
            parentTx.on("failed", this.onParentTxFailed);
            parentTx.on("freed", this.onParentTxFreed);
        });
    }
    onChangeIsRenderable(isRenderable) {
        this.parentTexture.setRenderableOwner(this.subtextureId, isRenderable);
    }
    destroy() {
        const parentTx = this.parentTexture;
        parentTx.off("loading", this.onParentTxLoading);
        parentTx.off("loaded", this.onParentTxLoaded);
        parentTx.off("failed", this.onParentTxFailed);
        parentTx.off("freed", this.onParentTxFreed);
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
        return false;
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

async function validateCreateImageBitmap(platform) {
    var _bitmap$close;
    const pngBinaryData = new Uint8Array([ 137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, 0, 1, 0, 0, 0, 1, 1, 3, 0, 0, 0, 37, 219, 86, 202, 0, 0, 0, 3, 80, 76, 84, 69, 0, 0, 0, 167, 122, 61, 218, 0, 0, 0, 1, 116, 82, 78, 83, 0, 64, 230, 216, 102, 0, 0, 0, 10, 73, 68, 65, 84, 8, 215, 99, 96, 0, 0, 0, 2, 0, 1, 226, 33, 188, 51, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130 ]);
    const support = {
        basic: false,
        options: false,
        full: false,
        premultiplyHonored: null
    };
    const blob = new Blob([ pngBinaryData ], {
        type: "image/png"
    });
    const bitmap = await platform.createImageBitmap(blob);
    (_bitmap$close = bitmap.close) == null || _bitmap$close.call(bitmap);
    support.basic = true;
    try {
        var _bitmapWithOptions$cl;
        const bitmapWithOptions = await platform.createImageBitmap(blob, {
            premultiplyAlpha: "none"
        });
        (_bitmapWithOptions$cl = bitmapWithOptions.close) == null || _bitmapWithOptions$cl.call(bitmapWithOptions);
        support.options = true;
    } catch (e) {}
    try {
        var _bitmapWithFullOption;
        const bitmapWithFullOptions = await platform.createImageBitmap(blob, 0, 0, 1, 1, {
            premultiplyAlpha: "none"
        });
        (_bitmapWithFullOption = bitmapWithFullOptions.close) == null || _bitmapWithFullOption.call(bitmapWithFullOptions);
        support.full = true;
    } catch (e) {}
    return support;
}

var STRAIGHT_ALPHA_TEST_PNG = new Uint8Array([ 137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, 0, 1, 0, 0, 0, 1, 8, 6, 0, 0, 0, 31, 21, 196, 137, 0, 0, 0, 13, 73, 68, 65, 84, 120, 156, 99, 248, 207, 192, 208, 0, 0, 4, 129, 1, 128, 44, 85, 206, 176, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130 ]);

async function detectPremultiplyAlphaHonored(platform) {
    var _bitmap$close3, _gl$getExtension;
    let bitmap;
    try {
        const blob = new Blob([ STRAIGHT_ALPHA_TEST_PNG ], {
            type: "image/png"
        });
        bitmap = await platform.createImageBitmap(blob, {
            premultiplyAlpha: "premultiply",
            colorSpaceConversion: "none",
            imageOrientation: "none"
        });
    } catch (e) {
        return null;
    }
    const canvas = platform.createCanvas();
    canvas.width = 1;
    canvas.height = 1;
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (gl === null) {
        var _bitmap$close2;
        (_bitmap$close2 = bitmap.close) == null || _bitmap$close2.call(bitmap);
        return null;
    }
    const tex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, bitmap);
    const fb = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
    let result = null;
    if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) === gl.FRAMEBUFFER_COMPLETE) {
        const px = new Uint8Array(4);
        gl.readPixels(0, 0, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, px);
        result = px[0] < 192;
    }
    gl.deleteFramebuffer(fb);
    gl.deleteTexture(tex);
    (_bitmap$close3 = bitmap.close) == null || _bitmap$close3.call(bitmap);
    (_gl$getExtension = gl.getExtension("WEBGL_lose_context")) == null || _gl$getExtension.loseContext();
    return result;
}

var TextureErrorCode;

(function(TextureErrorCode) {
    TextureErrorCode["MEMORY_THRESHOLD_EXCEEDED"] = "MEMORY_THRESHOLD_EXCEEDED";
    TextureErrorCode["TEXTURE_DATA_NULL"] = "TEXTURE_DATA_NULL";
    TextureErrorCode["TEXTURE_TYPE_NOT_REGISTERED"] = "TEXTURE_TYPE_NOT_REGISTERED";
    TextureErrorCode["TEXTURE_UPLOAD_FAILED"] = "TEXTURE_UPLOAD_FAILED";
})(TextureErrorCode || (TextureErrorCode = {}));

var defaultMessages = {
    [TextureErrorCode.MEMORY_THRESHOLD_EXCEEDED]: "Memory threshold exceeded",
    [TextureErrorCode.TEXTURE_DATA_NULL]: "Texture data is null",
    [TextureErrorCode.TEXTURE_TYPE_NOT_REGISTERED]: "Texture type is not registered",
    [TextureErrorCode.TEXTURE_UPLOAD_FAILED]: "Texture upload failed"
};

var TextureError = class extends Error {
    constructor(codeOrMessage, maybeMessage) {
        const isCode = Object.values(TextureErrorCode).includes(codeOrMessage);
        const code = isCode ? codeOrMessage : void 0;
        let message;
        if (isCode && code) message = maybeMessage !== null && maybeMessage !== void 0 ? maybeMessage : defaultMessages[code]; else message = String(codeOrMessage);
        super(message);
        this.code = void 0;
        this.name = new.target.name;
        if (code) this.code = code;
    }
};

var TextureUploadQueue = class {
    constructor() {
        this.list = [];
        this.membership = new Set;
        this.head = 0;
    }
    get size() {
        return this.membership.size;
    }
    has(texture) {
        return this.membership.has(texture);
    }
    add(texture) {
        if (this.membership.has(texture)) return;
        this.membership.add(texture);
        this.list.push(texture);
    }
    delete(texture) {
        return this.membership.delete(texture);
    }
    shift() {
        const list = this.list;
        const membership = this.membership;
        while (this.head < list.length) {
            const texture = list[this.head++];
            if (membership.has(texture)) {
                membership.delete(texture);
                this.compactIfNeeded();
                return texture;
            }
        }
        this.head = 0;
        list.length = 0;
    }
    compactIfNeeded() {
        if (this.head >= 64 && this.head >= this.list.length >> 1) {
            this.list = this.list.slice(this.head);
            this.head = 0;
        }
    }
};

var ConcurrencyGate = class {
    constructor(limit) {
        this.limit = void 0;
        this.inFlight = 0;
        this.waiters = [];
        this.limit = limit;
    }
    acquire() {
        if (this.inFlight < this.limit) {
            this.inFlight++;
            return Promise.resolve();
        }
        return new Promise(resolve => {
            this.waiters.push(resolve);
        });
    }
    release() {
        const next = this.waiters.shift();
        if (next !== void 0) {
            next();
            return;
        }
        this.inFlight--;
    }
};

var CoreTextureManager = class extends EventEmitter {
    get pixelRatio() {
        return this.stage.pixelRatio;
    }
    constructor(stage, settings) {
        super();
        this.keyCache = new Map;
        this.txConstructors = {};
        this.maxRetryCount = void 0;
        this.uploadTextureQueue = new TextureUploadQueue;
        this.pendingLoads = 0;
        this.initialized = false;
        this.stage = void 0;
        this.numImageWorkers = void 0;
        this.imageDecodeConcurrency = void 0;
        this.decodeGate = null;
        this.platform = void 0;
        this.imageWorkerManager = null;
        this.hasCreateImageBitmap = false;
        this.imageBitmapSupported = {
            basic: false,
            options: false,
            full: false,
            premultiplyHonored: null
        };
        this.hasWorker = !!self.Worker;
        this.renderer = void 0;
        const {numImageWorkers: numImageWorkers, createImageBitmapSupport: createImageBitmapSupport, premultiplyAlphaHonored: premultiplyAlphaHonored, maxRetryCount: maxRetryCount, imageDecodeConcurrency: imageDecodeConcurrency} = settings;
        this.stage = stage;
        this.platform = stage.platform;
        this.numImageWorkers = numImageWorkers;
        this.maxRetryCount = maxRetryCount;
        this.imageDecodeConcurrency = imageDecodeConcurrency;
        if (createImageBitmapSupport === "auto") validateCreateImageBitmap(this.platform).then(result => {
            this.resolvePremultiplyAndInit(result, premultiplyAlphaHonored);
        }).catch(() => {
            console.warn("[Lightning] createImageBitmap is not supported on this browser. ImageTexture will be slower.");
            this.initialized = true;
            this.emit("initialized");
        }); else this.resolvePremultiplyAndInit({
            basic: createImageBitmapSupport === "basic",
            options: createImageBitmapSupport === "options",
            full: createImageBitmapSupport === "full",
            premultiplyHonored: null
        }, premultiplyAlphaHonored);
        this.registerTextureType("ImageTexture", ImageTexture);
        this.registerTextureType("ColorTexture", ColorTexture);
        this.registerTextureType("NoiseTexture", NoiseTexture);
        this.registerTextureType("SubTexture", SubTexture);
    }
    registerTextureType(textureType, textureClass) {
        this.txConstructors[textureType] = textureClass;
    }
    resolvePremultiplyAndInit(support, premultiplyAlphaHonored) {
        if (premultiplyAlphaHonored !== "auto") {
            support.premultiplyHonored = premultiplyAlphaHonored;
            this.initialize(support);
            return;
        }
        if (support.options === false && support.full === false) {
            support.premultiplyHonored = null;
            this.initialize(support);
            return;
        }
        detectPremultiplyAlphaHonored(this.platform).then(honored => {
            support.premultiplyHonored = honored;
            this.initialize(support);
        }).catch(() => {
            support.premultiplyHonored = null;
            this.initialize(support);
        });
    }
    initialize(support) {
        this.hasCreateImageBitmap = support.basic || support.options || support.full;
        this.imageBitmapSupported = support;
        if (support.premultiplyHonored === false) console.warn('[Lightning] createImageBitmap premultiplyAlpha:"premultiply" is not honored on this device and images may show alpha ghosting. GL-side premultiply fallback recommended.');
        if (this.hasCreateImageBitmap === false) console.warn("[Lightning] createImageBitmap is not supported on this browser. ImageTexture will be slower.");
        if (this.hasCreateImageBitmap === true && this.hasWorker === true && this.numImageWorkers > 0) this.imageWorkerManager = new ImageWorkerManager(support); else console.warn("[Lightning] Image worker count is 0 or workers are not supported on this browser. Image loading will be slower.");
        if (this.imageWorkerManager === null && this.imageDecodeConcurrency > 0) this.decodeGate = new ConcurrencyGate(this.imageDecodeConcurrency);
        this.initialized = true;
        this.emit("initialized");
        if (this.uploadTextureQueue.size > 0) this.processUntil(Infinity);
    }
    enqueueUploadTexture(texture) {
        if (texture.state === "failed" || texture.state === "freed") return;
        this.uploadTextureQueue.add(texture);
    }
    createTexture(textureType, props) {
        const TextureClass = this.txConstructors[textureType];
        if (!TextureClass) throw new TextureError(TextureErrorCode.TEXTURE_TYPE_NOT_REGISTERED, `Texture type "${textureType}" is not registered`);
        const cacheKey = TextureClass.makeCacheKey(props);
        if (cacheKey) {
            const cached = this.keyCache.get(cacheKey);
            if (cached) return cached;
        }
        const resolvedProps = TextureClass.resolveDefaults(props);
        const texture = new TextureClass(this, resolvedProps);
        if (cacheKey) this.initTextureToCache(texture, cacheKey);
        return texture;
    }
    async loadTexture(texture) {
        if (texture.type === TextureType.subTexture) return;
        if (texture.state === "loaded") return;
        const isImage = texture.type === TextureType.image;
        if (isImage === true && this.initialized === false) {
            this.uploadTextureQueue.add(texture);
            return;
        }
        texture.setState("loading");
        this.pendingLoads++;
        try {
            const gate = isImage === true ? this.decodeGate : null;
            if (gate !== null) await gate.acquire();
            let textureDataResult;
            try {
                textureDataResult = await texture.getTextureData().catch(err => {
                    console.error(err);
                    texture.setState("failed", new TextureError(TextureErrorCode.TEXTURE_DATA_NULL));
                    return null;
                });
            } finally {
                if (gate !== null) gate.release();
            }
            if (textureDataResult === null || texture.state === "failed") return;
            if (isImage === false) {
                this.uploadTexture(texture);
                return;
            }
            this.enqueueUploadTexture(texture);
        } finally {
            this.pendingLoads--;
        }
    }
    uploadTexture(texture) {
        if (this.stage.txMemManager.doNotExceedCriticalThreshold === true && this.stage.txMemManager.criticalCleanupRequested === true) {
            texture.setState("failed", new TextureError(TextureErrorCode.MEMORY_THRESHOLD_EXCEEDED));
            return false;
        }
        if (texture.state === "failed" || texture.state === "freed") return false;
        if (texture.state === "loaded") return false;
        if (texture.textureData === null) {
            texture.setState("failed", new TextureError(TextureErrorCode.TEXTURE_DATA_NULL, "Texture data is null, cannot upload texture"));
            return false;
        }
        const coreContext = texture.loadCtxTexture();
        if (coreContext.state === "loaded") {
            texture.setState("loaded");
            return false;
        }
        coreContext.load();
        return true;
    }
    isProcessingTexture(texture) {
        return this.uploadTextureQueue.has(texture);
    }
    processOne() {
        if (this.initialized === false) return 0;
        const texture = this.uploadTextureQueue.shift();
        if (texture === void 0) return 0;
        return this.uploadQueued(texture);
    }
    processUntil(maxProcessingTime) {
        if (this.initialized === false) return 0;
        const platform = this.platform;
        const startTime = platform.getTimeStamp();
        let uploaded = 0;
        while (platform.getTimeStamp() - startTime < maxProcessingTime) {
            const texture = this.uploadTextureQueue.shift();
            if (texture === void 0) break;
            uploaded += this.uploadQueued(texture);
        }
        return uploaded;
    }
    uploadQueued(texture) {
        if (this.isTextureDead(texture)) return 0;
        if (texture.textureData !== null) return this.uploadTexture(texture) === true ? 1 : 0;
        this.refetchAndUpload(texture);
        return 0;
    }
    refetchAndUpload(texture) {
        this.pendingLoads++;
        const gate = texture.type === TextureType.image ? this.decodeGate : null;
        (gate !== null ? gate.acquire().then(() => texture.getTextureData()) : texture.getTextureData()).then(() => {
            if (this.isTextureDead(texture) || texture.textureData === null) return;
            this.uploadTexture(texture);
        }).catch(error => {
            console.error("Failed to upload texture:", error);
        }).then(() => {
            if (gate !== null) gate.release();
            this.pendingLoads--;
        });
    }
    isTextureDead(texture) {
        return texture.state === "failed" || texture.state === "freed";
    }
    hasUpdates() {
        return this.uploadTextureQueue.size > 0;
    }
    get uploadQueueSize() {
        return this.uploadTextureQueue.size;
    }
    hasPendingLoads() {
        return this.pendingLoads > 0;
    }
    initTextureToCache(texture, cacheKey) {
        this.keyCache.set(cacheKey, texture);
        texture.cacheKey = cacheKey;
    }
    getTextureFromCache(cacheKey) {
        return this.keyCache.get(cacheKey);
    }
    removeTextureFromCache(texture) {
        const cacheKey = texture.cacheKey;
        if (cacheKey !== null) {
            this.keyCache.delete(cacheKey);
            texture.cacheKey = null;
        }
    }
    removeTextureFromQueue(texture) {
        this.uploadTextureQueue.delete(texture);
    }
    resolveParentTexture(texture) {
        if (!(texture == null ? void 0 : texture.props)) return texture;
        const cacheKey = ImageTexture.makeCacheKey(texture.props);
        const cachedTexture = cacheKey ? this.getTextureFromCache(cacheKey) : void 0;
        return cachedTexture !== null && cachedTexture !== void 0 ? cachedTexture : texture;
    }
};

function isAdvancedShaderProp(obj) {
    return obj !== null && typeof obj === "object" && obj.default !== void 0;
}

function resolveShaderProps(props, propsConfig) {
    for (const key in propsConfig) {
        if (!isAdvancedShaderProp(propsConfig[key]) && props[key] === void 0) {
            props[key] = propsConfig[key];
            continue;
        }
        const pConfig = propsConfig[key];
        const hasValue = props[key] !== void 0;
        if (pConfig.resolve !== void 0) {
            props[key] = pConfig.resolve(props[key], props);
            continue;
        }
        if (hasValue && pConfig.set !== void 0) {
            pConfig.set(props[key], props);
            continue;
        }
        if (hasValue) continue;
        if (props[key] === void 0 && pConfig.get === void 0) {
            const def = pConfig.default;
            props[key] = Array.isArray(def) === true ? def.slice() : def;
            continue;
        }
        props[key] = pConfig.get(props);
    }
}

var CoreShaderNode = class {
    constructor(shaderKey, type, stage, props) {
        this.shaderKey = void 0;
        this.stage = void 0;
        this.shaderType = void 0;
        this.propsConfig = void 0;
        this.resolvedProps = void 0;
        this.definedProps = void 0;
        this.node = null;
        this.time = void 0;
        this.update = void 0;
        this.valueKey = "";
        this._valueKeyCache = "";
        this._valueKeyDirty = true;
        this._lastW = 0;
        this._lastH = 0;
        this.shaderKey = shaderKey;
        this.stage = stage;
        this.shaderType = type;
        this.time = type.time;
        if (props !== void 0) {
            this.resolvedProps = props;
            this.defineProps(props);
        }
    }
    defineProps(props) {
        const definedProps = {};
        for (const key in props) {
            const propConfig = this.shaderType.props[key];
            const isAdvancedProp = isAdvancedShaderProp(propConfig);
            Object.defineProperty(definedProps, key, {
                get: () => this.resolvedProps[key],
                set: value => {
                    if (isAdvancedProp === true && propConfig.resolve !== void 0) this.resolvedProps[key] = propConfig.resolve(value, this.resolvedProps); else if (isAdvancedProp === true && propConfig.set !== void 0) propConfig.set(value, this.resolvedProps); else this.resolvedProps[key] = value;
                    this._valueKeyDirty = true;
                    if (this.update !== void 0 && this.node !== null) this.node.setUpdateType(UpdateType.RecalcUniforms); else this.stage.requestRender();
                }
            });
        }
        this.definedProps = definedProps;
    }
    attachNode(node) {
        this.node = node;
    }
    detachNode() {
        if (this.valueKey.length > 0) {
            this.stage.shManager.mutateShaderValueUsage(this.valueKey, -1);
            this.valueKey = "";
        }
        this.node = null;
    }
    createValueKey() {
        if (this._valueKeyDirty === false && this.node !== null && this.node.w === this._lastW && this.node.h === this._lastH) return this._valueKeyCache;
        let valueKey = "";
        for (const key in this.resolvedProps) valueKey += `${key}:${this.resolvedProps[key]};`;
        valueKey += `node-width:${this.node.w}`;
        valueKey += `node-height:${this.node.h}`;
        this._valueKeyCache = valueKey;
        this._valueKeyDirty = false;
        this._lastW = this.node.w;
        this._lastH = this.node.h;
        return valueKey;
    }
    get props() {
        return this.definedProps;
    }
    set props(props) {
        if (props === void 0) return;
        for (const key in props) this.props[key] = props[key];
    }
};

var CoreShaderManager = class {
    constructor(stage) {
        this.stage = void 0;
        this.shTypes = {};
        this.shCache = new Map;
        this.valuesCache = new Map;
        this.valuesCacheUsage = new Map;
        this.stage = stage;
    }
    registerShaderType(name, shType) {
        if (this.shTypes[name] !== void 0) {
            console.warn(`ShaderType already exists with the name: ${name}. Breaking off registration.`);
            return;
        }
        if (this.stage.renderer.supportsShaderType(shType) === false) {
            console.warn(`The renderer being used does not support this shader type. Breaking off registration.`);
            return;
        }
        this.shTypes[name] = shType;
    }
    createShader(name, props) {
        const shType = this.shTypes[name];
        if (shType === void 0) {
            console.warn(`ShaderType not found falling back on renderer default shader`);
            return this.stage.defShaderNode;
        }
        let shaderKey = name;
        if (shType.props !== void 0) {
            props = props || {};
            resolveShaderProps(props, shType.props);
            if (shType.getCacheMarkers !== void 0) shaderKey += `-${shType.getCacheMarkers(props)}`;
        }
        if (this.stage.renderer.mode === "canvas") return this.stage.renderer.createShaderNode(shaderKey, shType, props);
        let shProgram = this.shCache.get(shaderKey);
        if (shProgram === void 0) try {
            shProgram = this.stage.renderer.createShaderProgram(shType, props);
            this.shCache.set(shaderKey, shProgram);
        } catch (e) {
            if (this.stage.isContextLost === true) return this.stage.defShaderNode;
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
        if (values === void 0) return;
        this.mutateShaderValueUsage(key, 1);
        return values;
    }
    setShaderValues(key, values) {
        this.valuesCache.set(key, values);
        this.mutateShaderValueUsage(key, 1);
    }
    cleanup() {
        const values = [ ...this.valuesCacheUsage.entries() ].sort((entryA, entryB) => {
            if (entryA[1] < entryB[1]) return -1; else if (entryA[1] > entryB[1]) return 1;
            return 0;
        });
        for (let i = 0; i < values.length; i++) {
            if (values[i][1] > 0) break;
            this.valuesCacheUsage.delete(values[i][0]);
            this.valuesCache.delete(values[i][0]);
        }
    }
};

var spaceRegex = /[ \u200B]+/g;

var defaultFontMetrics = {
    ascender: 800,
    descender: -200,
    lineGap: 200,
    unitsPerEm: 1e3
};

var CAP_HEIGHT_FALLBACK_RATIO = .7;

var X_HEIGHT_FALLBACK_RATIO = .5;

var normalizeFontMetrics = (metrics, fontSize) => {
    const scale = fontSize / metrics.unitsPerEm;
    const capHeightUnits = metrics.capHeight !== void 0 ? metrics.capHeight : metrics.ascender * CAP_HEIGHT_FALLBACK_RATIO;
    const xHeightUnits = metrics.xHeight !== void 0 ? metrics.xHeight : metrics.ascender * X_HEIGHT_FALLBACK_RATIO;
    return {
        ascender: metrics.ascender * scale,
        descender: metrics.descender * scale,
        lineGap: metrics.lineGap * scale,
        capHeight: capHeightUnits * scale,
        xHeight: xHeightUnits * scale
    };
};

var baselineMode = "optical";

var setBaselineMode = mode => {
    baselineMode = mode;
};

var mapTextLayout = (measureText, metrics, text, textAlign, fontFamily, lineHeight, overflowSuffix, wordBreak, letterSpacing, maxLines, maxWidth, maxHeight) => {
    const bareLineHeight = metrics.ascender - metrics.descender + metrics.lineGap;
    const lineHeightPx = lineHeight <= 3 ? lineHeight * bareLineHeight : lineHeight;
    let effectiveMaxLines = maxLines;
    if (maxHeight > 0) {
        let maxFromHeight = Math.floor(maxHeight / lineHeightPx);
        if (maxFromHeight < 1) maxFromHeight = 1;
        if (effectiveMaxLines === 0 || maxFromHeight < effectiveMaxLines) effectiveMaxLines = maxFromHeight;
    }
    const [lines, remainingLines, remainingText] = maxWidth > 0 === true ? wrapText(measureText, text, fontFamily, maxWidth, letterSpacing, overflowSuffix, wordBreak, effectiveMaxLines) : measureLines(measureText, text.split("\n"), fontFamily, letterSpacing, effectiveMaxLines);
    const effectiveLineAmount = lines.length;
    let effectiveMaxWidth = 0;
    if (letterSpacing !== 0) for (let i = 0; i < effectiveLineAmount; i++) {
        const line = lines[i];
        if (line[0].length > 0) line[1] -= letterSpacing;
    }
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
    let firstBaselineY;
    if (baselineMode === "cap") firstBaselineY = (lineHeightPx + metrics.capHeight) * .5; else if (baselineMode === "x") firstBaselineY = (lineHeightPx + metrics.xHeight) * .5; else if (baselineMode === "linebox") firstBaselineY = (lineHeightPx - bareLineHeight) * .5 + metrics.ascender; else firstBaselineY = (lineHeightPx + (metrics.capHeight + metrics.xHeight) * .5) * .5;
    for (let i = 0; i < effectiveLineAmount; i++) {
        const line = lines[i];
        line[4] = firstBaselineY + lineHeightPx * i;
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
    if (words[0] === "" && words.length > 1) {
        var _spaces$shift, _words$;
        const leadingSpace = (_spaces$shift = spaces.shift()) !== null && _spaces$shift !== void 0 ? _spaces$shift : "";
        words.shift();
        words[0] = leadingSpace + ((_words$ = words[0]) !== null && _words$ !== void 0 ? _words$ : "");
    }
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
        const effectiveSpaceWidth = space === " " ? spaceWidth : space.length > 0 ? measureText(space, fontFamily, letterSpacing) : 0;
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

var ContextSpy = class {
    constructor() {
        this.data = {};
    }
    reset() {
        this.data = {};
    }
    increment(name) {
        if (!this.data[name]) this.data[name] = 0;
        this.data[name]++;
    }
    getData() {
        return {
            ...this.data
        };
    }
};

var TextureMemoryManager = class {
    constructor(stage, settings) {
        this.stage = void 0;
        this.memUsed = 0;
        this.loadedTextures = new Set;
        this.criticalThreshold = 124e6;
        this.targetThreshold = .5;
        this.cleanupInterval = 5e3;
        this.debugLogging = false;
        this.loggingID = 0;
        this.lastCleanupTime = -Infinity;
        this.baselineMemoryAllocation = 26e6;
        this.hasWarnedAboveCritical = false;
        this.criticalCleanupRequested = false;
        this.doNotExceedCriticalThreshold = false;
        this.frameTime = 0;
        this.stage = stage;
        this.updateSettings(settings);
    }
    setTextureMemUse(texture, byteSize) {
        this.memUsed -= texture.memUsed;
        if (byteSize === 0) {
            this.loadedTextures.delete(texture);
            texture.memUsed = 0;
            return;
        } else {
            texture.memUsed = byteSize;
            this.memUsed += byteSize;
            this.loadedTextures.add(texture);
        }
        if (this.criticalThreshold > 0 && this.memUsed > this.criticalThreshold) this.criticalCleanupRequested = true;
    }
    checkCleanup() {
        return this.criticalCleanupRequested || this.criticalThreshold > 0 && this.memUsed > this.targetThreshold && this.frameTime - this.lastCleanupTime >= this.cleanupInterval;
    }
    checkCriticalCleanup() {
        return this.criticalThreshold > 0 && this.memUsed > this.criticalThreshold;
    }
    freeTexture(texture) {
        if (this.debugLogging === true) console.log(`[TextureMemoryManager] Freeing texture. State: ${texture.state}`);
        texture.free();
        if (this.loadedTextures.has(texture) === true) {
            this.loadedTextures.delete(texture);
            this.memUsed -= texture.memUsed;
            texture.memUsed = 0;
        }
    }
    destroyTexture(texture) {
        if (this.debugLogging === true) console.log(`[TextureMemoryManager] Destroying texture. State: ${texture.state}`);
        this.loadedTextures.delete(texture);
        const txManager = this.stage.txManager;
        txManager.removeTextureFromCache(texture);
        txManager.removeTextureFromQueue(texture);
        texture.destroy();
        this.memUsed -= texture.memUsed;
        texture.memUsed = 0;
    }
    cleanup(full = false) {
        const critical = this.criticalCleanupRequested;
        this.lastCleanupTime = this.frameTime;
        if (critical === true) this.stage.queueFrameEvent("criticalCleanup", {
            memUsed: this.memUsed,
            criticalThreshold: this.criticalThreshold
        });
        if (this.debugLogging === true) console.log(`[TextureMemoryManager] Cleaning up textures. Critical: ${critical}. Full: ${full}`);
        const memTarget = critical ? this.criticalThreshold : this.targetThreshold;
        let currentMemUsed = this.memUsed;
        for (const texture of this.loadedTextures) {
            if (full === false && currentMemUsed < memTarget) break;
            if ((texture.type === TextureType.image || texture.type === TextureType.noise) && texture.canBeCleanedUp() === true) {
                const textureMemory = texture.memUsed;
                this.freeTexture(texture);
                currentMemUsed -= textureMemory;
            }
        }
        this.evictOrphanedTextures();
        if (this.memUsed >= this.criticalThreshold) {
            this.stage.queueFrameEvent("criticalCleanupFailed", {
                memUsed: this.memUsed,
                criticalThreshold: this.criticalThreshold
            });
            if (!this.hasWarnedAboveCritical && (this.debugLogging === true || true === false)) {
                console.warn(`[TextureMemoryManager] Memory usage above critical threshold after cleanup: ${this.memUsed}`);
                this.hasWarnedAboveCritical = true;
            }
        } else {
            this.criticalCleanupRequested = false;
            this.hasWarnedAboveCritical = false;
        }
    }
    evictOrphanedTextures() {
        const keyCache = this.stage.txManager.keyCache;
        for (const texture of keyCache.values()) {
            const state = texture.state;
            if ((state === "freed" || (state === "initial" || state === "failed") && texture.isWithinStartupGracePeriod() === false) === true && texture.preventCleanup === false && texture.renderableOwners.size === 0 && texture.hasListeners() === false) this.destroyTexture(texture);
        }
    }
    getMemoryInfo() {
        let renderableTexturesLoaded = 0;
        let renderableMemUsed = this.baselineMemoryAllocation;
        for (const texture of this.loadedTextures) if (texture && texture.renderable) {
            renderableTexturesLoaded += 1;
            renderableMemUsed += texture.memUsed;
        }
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
        this.doNotExceedCriticalThreshold = doNotExceedCriticalThreshold || false;
        this.criticalThreshold = Math.round(criticalThreshold);
        if (this.memUsed === 0) this.memUsed = Math.round(settings.baselineMemoryAllocation); else {
            const memUsedExBaseline = this.memUsed - this.baselineMemoryAllocation;
            this.memUsed = Math.round(settings.baselineMemoryAllocation + memUsedExBaseline);
        }
        this.baselineMemoryAllocation = Math.round(settings.baselineMemoryAllocation);
        const targetFraction = Math.max(0, Math.min(1, settings.targetThresholdLevel));
        this.targetThreshold = Math.max(Math.round(criticalThreshold * targetFraction), this.baselineMemoryAllocation);
        this.cleanupInterval = settings.cleanupInterval;
        this.debugLogging = settings.debugLogging;
        if (this.loggingID && !settings.debugLogging) {
            clearInterval(this.loggingID);
            this.loggingID = 0;
        }
        if (settings.debugLogging && !this.loggingID) {
            let lastMemUse = 0;
            this.loggingID = setInterval(() => {
                if (lastMemUse !== this.memUsed) {
                    lastMemUse = this.memUsed;
                    console.log(`[TextureMemoryManager] Memory used: ${bytesToMb(this.memUsed)} mb / ${bytesToMb(this.criticalThreshold)} mb (${(this.memUsed / this.criticalThreshold * 100).toFixed(1)}%)`);
                }
            }, 1e3);
        }
        if (criticalThreshold === 0) this.setTextureMemUse = () => {};
    }
    handleOutOfMemory() {
        this.stage.queueFrameEvent("outOfMemory", {
            memUsed: this.memUsed,
            criticalThreshold: this.criticalThreshold
        });
        this.criticalCleanupRequested = true;
    }
};

var TextConstraint;

(function(TextConstraint) {
    TextConstraint[TextConstraint["none"] = 0] = "none";
    TextConstraint[TextConstraint["width"] = 1] = "width";
    TextConstraint[TextConstraint["height"] = 2] = "height";
    TextConstraint[TextConstraint["both"] = 3] = "both";
})(TextConstraint || (TextConstraint = {}));

var CoreTextNode = class extends CoreNode {
    constructor(stage, props, textRenderer) {
        super(stage, props);
        this.textRenderer = void 0;
        this.fontHandler = void 0;
        this._layoutGenerated = false;
        this._waitingForFont = false;
        this._containType = TextConstraint.none;
        this._cachedLayout = null;
        this._sdfCache = {
            vertices: null,
            glyphCount: 0,
            color: 0,
            ta: 0,
            tc: 0,
            tb: 0,
            td: 0,
            tx: 0,
            ty: 0,
            layoutRef: null,
            lastDx: 0,
            lastDy: 0
        };
        this.textProps = void 0;
        this._renderInfo = {
            width: 0,
            height: 0
        };
        this._type = "sdf";
        this.onTextureLoaded = (_, dimensions) => {
            if (dimensions.w > 1 && dimensions.h > 1) this.emit("loaded", {
                type: "texture",
                dimensions: dimensions
            });
            this.textureLoaded = true;
            this.setUpdateType(UpdateType.IsRenderable);
        };
        this.emitTextLoadedEvent = () => {
            this.emit("loaded", {
                type: "text",
                dimensions: {
                    w: this._renderInfo.width,
                    h: this._renderInfo.height
                }
            });
        };
        this.textRenderer = textRenderer;
        this.fontHandler = textRenderer.font;
        this._type = textRenderer.type;
        this.textProps = props;
        this._containType = TextConstraint[props.contain];
        this.setUpdateType(UpdateType.All);
    }
    applyAutosizeDimensions() {}
    allowTextGeneration() {
        const p = this.props.parent;
        if (p === null) return false;
        if (p.worldAlpha > 0 && p.renderState > CoreNodeRenderState.OutOfBounds) return true;
        return false;
    }
    updateLocalTransform() {
        const p = this.props;
        let {x: x, y: y, w: w, h: h} = p;
        const mountX = p.mountX;
        const mountY = p.mountY;
        let mountTranslateX = p.mountX * w;
        let mountTranslateY = p.mountY * h;
        const {textAlign: textAlign, verticalAlign: verticalAlign, maxWidth: maxWidth, maxHeight: maxHeight} = this.textProps;
        const contain = this._containType;
        const hasMaxWidth = maxWidth > 0;
        const hasMaxHeight = maxHeight > 0;
        let containX = 0;
        let containY = 0;
        if (contain > 0 && (hasMaxWidth || hasMaxHeight)) {
            if (contain & TextConstraint.width && hasMaxWidth === true) {
                if (textAlign === "right") containX = maxWidth - w; else if (textAlign === "center") containX = (maxWidth - w) * .5;
                mountTranslateX = mountX * maxWidth;
            }
            if (contain & TextConstraint.height && hasMaxHeight === true) mountTranslateY = mountY * maxHeight;
        }
        const intrinsicH = this._renderInfo.height;
        const slackY = (hasMaxHeight === true ? maxHeight : h) - intrinsicH;
        if (slackY > 0) {
            if (verticalAlign === "bottom") containY = slackY; else if (verticalAlign === "middle") containY = slackY * .5;
        }
        if (p.rotation !== 0 || p.scaleX !== 1 || p.scaleY !== 1) {
            const scaleRotate = Matrix3d.rotate(p.rotation, Matrix3d.temp).scale(p.scaleX, p.scaleY);
            const pivotW = contain & TextConstraint.width && maxWidth > 0 ? maxWidth : w;
            const pivotH = contain & TextConstraint.height && maxHeight > 0 ? maxHeight : h;
            const pivotTranslateX = p.pivotX * pivotW;
            const pivotTranslateY = p.pivotY * pivotH;
            this.localTransform = Matrix3d.translate(x - mountTranslateX + pivotTranslateX, y - mountTranslateY + pivotTranslateY, this.localTransform).multiply(scaleRotate).translate(-pivotTranslateX, -pivotTranslateY);
        } else this.localTransform = Matrix3d.translate(x - mountTranslateX, y - mountTranslateY, this.localTransform);
        if (containX !== 0 || containY !== 0) this.localTransform.translate(containX, containY);
    }
    update(delta, parentClippingRect) {
        if (this._layoutGenerated === false && (this.textProps.forceLoad === true || this.allowTextGeneration() === true)) {
            if (this.fontHandler.isFontLoaded(this.textProps.fontFamily) === true) {
                this._waitingForFont = false;
                this._cachedLayout = null;
                const resp = this.textRenderer.renderText(this.textProps);
                this.handleRenderResult(resp);
                this._layoutGenerated = true;
            } else if (this._waitingForFont === false) {
                this.fontHandler.waitingForFont(this.textProps.fontFamily, this);
                this._waitingForFont = true;
            }
        }
        super.update(delta, parentClippingRect);
    }
    updateIsRenderable() {
        if (this._type === "canvas") {
            super.updateIsRenderable();
            return;
        }
        this.setRenderable(this.checkBasicRenderability() === true && this._cachedLayout !== null && this.renderState === CoreNodeRenderState.InViewport);
    }
    handleRenderResult(result) {
        const textRendererType = this._type;
        let width = result.width;
        let height = result.height;
        if (textRendererType === "canvas") if (result.imageData === void 0) {
            this.texture = null;
            this.setRenderable(false);
        } else {
            this.texture = this.stage.txManager.createTexture("ImageTexture", {
                premultiplyAlpha: true,
                src: result.imageData
            });
            this.setRenderable(false);
            if (this.renderState > CoreNodeRenderState.OutOfBounds) this.updateTextureOwnership(true);
        }
        this._cachedLayout = result.layout || null;
        this.props.w = width;
        this.props.h = height;
        this.setUpdateType(UpdateType.Local | UpdateType.RecalcUniforms);
        if (textRendererType === "sdf") this.setRenderable(true);
        this._renderInfo = result;
        this.emitTextLoadedEvent();
    }
    renderQuads(renderer) {
        if (this._type === "canvas") {
            if (this.isQuadDirty === true) {
                const white = premultiplyColorABGR(4294967295, this.worldAlpha);
                this.premultipliedColorTl = this.premultipliedColorTr = this.premultipliedColorBl = this.premultipliedColorBr = white;
            }
            super.renderQuads(renderer);
            return;
        }
        if (!this._cachedLayout) return;
        const props = this.textProps;
        this.textRenderer.renderQuads(renderer, this._cachedLayout, null, {
            fontFamily: this.textProps.fontFamily,
            fontSize: props.fontSize,
            color: this.props.color || 4294967295,
            offsetY: props.offsetY,
            worldAlpha: this.worldAlpha,
            globalTransform: this.globalTransform,
            clippingRect: this.clippingRect,
            width: this.props.w,
            height: this.props.h,
            stage: this.stage,
            sdfCache: this._sdfCache
        });
    }
    destroy(isChild = false) {
        if (this._waitingForFont === true && this.fontHandler) this.fontHandler.stopWaitingForFont(this.textProps.fontFamily, this);
        this._cachedLayout = null;
        this._sdfCache.vertices = null;
        this._sdfCache.layoutRef = null;
        this.fontHandler = null;
        this.textRenderer = null;
        super.destroy(isChild);
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
        if (this.textProps.maxWidth !== value) {
            this.textProps.maxWidth = value;
            this._layoutGenerated = false;
            this.setUpdateType(UpdateType.Local);
        }
    }
    get maxHeight() {
        return this.textProps.maxHeight;
    }
    set maxHeight(value) {
        if (this.textProps.maxHeight !== value) {
            this.textProps.maxHeight = value;
            this._layoutGenerated = false;
            this.setUpdateType(UpdateType.Local);
        }
    }
    get contain() {
        return this.textProps.contain;
    }
    set contain(value) {
        if (this.textProps.contain !== value) {
            this.textProps.contain = value;
            this._containType = TextConstraint[value];
            this.setUpdateType(UpdateType.Local);
        }
    }
    get text() {
        return this.textProps.text;
    }
    set text(value) {
        if (this.textProps.text !== value) {
            this.textProps.text = value;
            this._layoutGenerated = false;
            this.setUpdateType(UpdateType.Local);
        }
    }
    get fontSize() {
        return this.textProps.fontSize;
    }
    set fontSize(value) {
        if (this.textProps.fontSize !== value) {
            this.textProps.fontSize = value;
            this._layoutGenerated = false;
            this.setUpdateType(UpdateType.Local);
        }
    }
    get fontFamily() {
        return this.textProps.fontFamily;
    }
    set fontFamily(value) {
        if (this.textProps.fontFamily !== value) {
            if (this._waitingForFont === true) this.fontHandler.stopWaitingForFont(this.textProps.fontFamily, this);
            this.textProps.fontFamily = value;
            this._layoutGenerated = false;
            this.setUpdateType(UpdateType.Local);
        }
    }
    get fontStyle() {
        return this.textProps.fontStyle;
    }
    set fontStyle(value) {
        if (this.textProps.fontStyle !== value) {
            this.textProps.fontStyle = value;
            this._layoutGenerated = false;
            this.setUpdateType(UpdateType.Local);
        }
    }
    get textAlign() {
        return this.textProps.textAlign;
    }
    set textAlign(value) {
        if (this.textProps.textAlign !== value) {
            this.textProps.textAlign = value;
            this._layoutGenerated = false;
            this.setUpdateType(UpdateType.Local);
        }
    }
    get letterSpacing() {
        return this.textProps.letterSpacing;
    }
    set letterSpacing(value) {
        if (this.textProps.letterSpacing !== value) {
            this.textProps.letterSpacing = value;
            this._layoutGenerated = false;
            this.setUpdateType(UpdateType.Local);
        }
    }
    get lineHeight() {
        return this.textProps.lineHeight;
    }
    set lineHeight(value) {
        if (this.textProps.lineHeight !== value) {
            this.textProps.lineHeight = value;
            this._layoutGenerated = false;
            this.setUpdateType(UpdateType.Local);
        }
    }
    get maxLines() {
        return this.textProps.maxLines;
    }
    set maxLines(value) {
        if (this.textProps.maxLines !== value) {
            this.textProps.maxLines = value;
            this._layoutGenerated = false;
            this.setUpdateType(UpdateType.Local);
        }
    }
    get verticalAlign() {
        return this.textProps.verticalAlign;
    }
    set verticalAlign(value) {
        if (this.textProps.verticalAlign !== value) {
            this.textProps.verticalAlign = value;
            this._layoutGenerated = false;
            this.setUpdateType(UpdateType.Local);
        }
    }
    get overflowSuffix() {
        return this.textProps.overflowSuffix;
    }
    set overflowSuffix(value) {
        if (this.textProps.overflowSuffix !== value) {
            this.textProps.overflowSuffix = value;
            this._layoutGenerated = false;
            this.setUpdateType(UpdateType.Local);
        }
    }
    get wordBreak() {
        return this.textProps.wordBreak;
    }
    set wordBreak(value) {
        if (this.textProps.wordBreak !== value) {
            this.textProps.wordBreak = value;
            this._layoutGenerated = false;
            this.setUpdateType(UpdateType.Local);
        }
    }
    get offsetY() {
        return this.textProps.offsetY;
    }
    set offsetY(value) {
        if (this.textProps.offsetY !== value) {
            this.textProps.offsetY = value;
            this._layoutGenerated = false;
            this.setUpdateType(UpdateType.Local);
        }
    }
    get color() {
        return this.props.color;
    }
    set color(value) {
        super.color = value;
        if (this._type === "canvas") {
            this._layoutGenerated = false;
            this.setUpdateType(UpdateType.Local);
        }
    }
    get forceLoad() {
        return this.textProps.forceLoad;
    }
    set forceLoad(value) {
        if (this.textProps.forceLoad !== value) {
            this.textProps.forceLoad = value;
            this.setUpdateType(UpdateType.Local);
        }
    }
    get renderInfo() {
        return this._renderInfo;
    }
};

function santizeCustomDataMap(d) {
    const validTypes = {
        boolean: true,
        string: true,
        number: true,
        undefined: true
    };
    const keys = Object.keys(d);
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (!key) continue;
        const value = d[key];
        const valueType = typeof value;
        if (valueType === "string" && value.length > 2048) {
            console.warn(`Custom Data value for ${key} is too long, it will be truncated to 2048 characters`);
            d[key] = value.substring(0, 2048);
        }
        if (!validTypes[valueType]) {
            console.warn(`Custom Data value for ${key} is not a boolean, string, or number, it will be ignored`);
            delete d[key];
        }
    }
    return d;
}

var EMPTY_TEXTURE_OPTIONS = Object.freeze({});

var Stage = class {
    constructor(options) {
        var _fontEngines$;
        this.options = void 0;
        this.animationManager = void 0;
        this.txManager = void 0;
        this.txMemManager = void 0;
        this.textRenderers = {};
        this.fontHandlers = {};
        this.shManager = void 0;
        this.renderer = void 0;
        this.root = void 0;
        this.boundsMargin = void 0;
        this.defShaderNode = null;
        this.viewportW = void 0;
        this.viewportH = void 0;
        this.defaultTexture = null;
        this.pixelRatio = void 0;
        this.platform = void 0;
        this.calculateTextureCoord = void 0;
        this.targetFrameTime = 0;
        this.eventBus = void 0;
        this.isContextLost = false;
        this.startTime = 0;
        this.deltaTime = 0;
        this.lastFrameTime = 0;
        this.currentFrameTime = 0;
        this.elapsedTime = 0;
        this.timedNodes = [];
        this.clrColor = 0;
        this.fpsSampleFrames = 0;
        this.fpsSampleElapsed = 0;
        this.fpsRenderedFrames = 0;
        this.fpsIdleTicks = 0;
        this.fpsIntervalElapsed = 0;
        this.fpsLastTickRendered = false;
        this.fpsLastInterval = 0;
        this.telemetrySegment = "";
        this.fpsFrameTimeBuckets = new Uint32Array(45);
        this.fpsMaxFrameTime = 0;
        this.fpsAnimatedFrames = 0;
        this.fpsAnimatedElapsed = 0;
        this.fpsAnimatedBuckets = new Uint32Array(45);
        this.fpsAnimatedMaxFrameTime = 0;
        this.fpsAnimationSum = 0;
        this.fpsMaxAnimations = 0;
        this.fpsUploadFrames = 0;
        this.fpsUpdateMs = 0;
        this.fpsRenderMs = 0;
        this.fpsUploadMs = 0;
        this.fpsMaxUpdateMs = 0;
        this.fpsMaxRenderMs = 0;
        this.fpsMaxUploadMs = 0;
        this.fpsUploadedTextures = 0;
        this.fpsMaxUploadQueue = 0;
        this.numQuadsRendered = 0;
        this.numRenderOpsRendered = 0;
        this.renderRequested = false;
        this.reprocessFrame = false;
        this.reprocessCallback = null;
        this.frameEventQueue = [];
        this.renderList = [];
        this.renderListDirty = true;
        this.hasOnlyOneFontEngine = void 0;
        this.hasOnlyCanvasFontEngine = void 0;
        this.hasCanvasEngine = void 0;
        this.singleFontEngine = null;
        this.singleFontHandler = null;
        this.contextSpy = null;
        this.options = options;
        const {canvas: canvas, clearColor: clearColor, appWidth: appWidth, appHeight: appHeight, boundsMargin: boundsMargin, enableContextSpy: enableContextSpy, forceWebGL2: forceWebGL2, disableVertexArrayObject: disableVertexArrayObject, numImageWorkers: numImageWorkers, textureMemory: textureMemory, renderEngine: renderEngine, fontEngines: fontEngines, createImageBitmapSupport: createImageBitmapSupport, premultiplyAlphaHonored: premultiplyAlphaHonored, platform: platform, maxRetryCount: maxRetryCount, imageDecodeConcurrency: imageDecodeConcurrency} = options;
        assertTruthy(platform !== null, "A CorePlatform is not provided in the options");
        setBaselineMode(options.textBaselineMode);
        this.platform = platform;
        this.startTime = platform.getTimeStamp();
        this.eventBus = options.eventBus;
        this.targetFrameTime = options.targetFPS > 0 ? 1e3 / options.targetFPS : 0;
        this.txManager = new CoreTextureManager(this, {
            numImageWorkers: numImageWorkers,
            createImageBitmapSupport: createImageBitmapSupport,
            premultiplyAlphaHonored: premultiplyAlphaHonored !== null && premultiplyAlphaHonored !== void 0 ? premultiplyAlphaHonored : true,
            maxRetryCount: maxRetryCount,
            imageDecodeConcurrency: imageDecodeConcurrency
        });
        this.txManager.on("initialized", () => {
            this.requestRender();
        });
        this.txMemManager = new TextureMemoryManager(this, textureMemory);
        this.animationManager = new AnimationManager;
        this.contextSpy = enableContextSpy ? new ContextSpy : null;
        this.boundsMargin = boundsMargin;
        this.viewportW = appWidth;
        this.viewportH = appHeight;
        this.clrColor = clearColor;
        this.pixelRatio = options.devicePhysicalPixelRatio * options.deviceLogicalPixelRatio;
        this.renderer = new renderEngine({
            stage: this,
            canvas: canvas,
            contextSpy: this.contextSpy,
            forceWebGL2: forceWebGL2,
            disableVertexArrayObject: disableVertexArrayObject
        });
        this.shManager = new CoreShaderManager(this);
        this.defShaderNode = this.renderer.getDefaultShaderNode();
        this.calculateTextureCoord = this.renderer.getTextureCoords !== void 0;
        const renderMode = this.renderer.mode || "webgl";
        if (renderMode === "canvas") this.txMemManager.updateSettings({
            ...textureMemory,
            criticalThreshold: 0,
            doNotExceedCriticalThreshold: false
        });
        setPremultiplyMode(renderMode);
        this.txManager.renderer = this.renderer;
        this.createDefaultTexture();
        this.hasOnlyOneFontEngine = fontEngines.length === 1;
        this.hasOnlyCanvasFontEngine = fontEngines.length === 1 && fontEngines[0].type === "canvas";
        this.hasCanvasEngine = false;
        this.singleFontEngine = this.hasOnlyOneFontEngine ? fontEngines[0] : null;
        this.singleFontHandler = this.hasOnlyOneFontEngine ? (_fontEngines$ = fontEngines[0]) == null ? void 0 : _fontEngines$.font : null;
        if (this.singleFontEngine === null) fontEngines.filter(fontEngine => {
            const type = fontEngine.type;
            if (type === "sdf" && renderMode === "canvas") {
                console.warn("MsdfTextRenderer is not compatible with Canvas renderer. Skipping...");
                return false;
            }
            if (type === "canvas") this.hasCanvasEngine = true;
            return true;
        }).sort((a, b) => {
            if (a.type === "sdf") return -1;
            if (b.type === "sdf") return 1;
            if (a.type === "canvas") return 1;
            if (b.type === "canvas") return -1;
            return 0;
        }).forEach(fontEngine => {
            const type = fontEngine.type;
            this.textRenderers[type] = fontEngine;
            this.textRenderers[type].init(this);
            this.fontHandlers[type] = fontEngine.font;
        }); else {
            const fontEngine = this.singleFontEngine;
            const type = fontEngine.type;
            if (type === "sdf" && renderMode === "canvas") console.warn("MsdfTextRenderer is not compatible with Canvas renderer. Skipping..."); else {
                if (type === "canvas") this.hasCanvasEngine = true;
                this.textRenderers[type] = fontEngine;
                this.fontHandlers[type] = fontEngine.font;
                this.textRenderers[type].init(this);
            }
        }
        if (Object.keys(this.textRenderers).length === 0) console.warn("No text renderers available. Your text will not render.");
        const rootNode = new CoreNode(this, {
            x: 0,
            y: 0,
            w: appWidth,
            h: appHeight,
            alpha: 1,
            ignoreParentAlpha: false,
            autosize: false,
            clipping: false,
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
            src: null,
            scale: 1
        });
        this.root = rootNode;
        rootNode.updateLocalTransform();
        Matrix3d.copy(rootNode.localTransform, rootNode.globalTransform);
        rootNode.updateGlobalGeometry();
        rootNode.updateRenderState(CoreNodeRenderState.InViewport);
        rootNode.updateIsRenderable();
        rootNode.premultipliedColorTl = rootNode.premultipliedColorTr = rootNode.premultipliedColorBl = rootNode.premultipliedColorBr = 0;
        this.platform.startLoop(this);
    }
    setClearColor(color) {
        this.clearColor = color;
        this.renderer.updateClearColor(color);
        this.renderRequested = true;
    }
    updateTargetFrameTime() {
        this.targetFrameTime = this.options.targetFPS > 0 ? 1e3 / this.options.targetFPS : 0;
    }
    updateFrameTime(frameTime) {
        const newFrameTime = frameTime !== void 0 && frameTime > 0 ? frameTime : this.platform.getTimeStamp();
        this.lastFrameTime = this.currentFrameTime;
        this.currentFrameTime = newFrameTime;
        this.elapsedTime = newFrameTime - this.startTime;
        this.deltaTime = !this.lastFrameTime ? 100 / 6 : newFrameTime - this.lastFrameTime;
        this.txMemManager.frameTime = newFrameTime;
        this.eventBus.emit("frameTick", {
            time: this.currentFrameTime,
            delta: this.deltaTime
        });
    }
    setContextLost() {
        if (this.isContextLost === true) return;
        this.isContextLost = true;
        this.eventBus.emit("contextLost");
    }
    createDefaultTexture() {
        this.defaultTexture = this.txManager.createTexture("ColorTexture", {
            color: 4294967295
        });
        assertTruthy(this.defaultTexture instanceof ColorTexture);
        this.defaultTexture.once("loaded", () => {
            this.requestRender();
        });
        this.defaultTexture.setRenderableOwner("stage", true);
    }
    updateAnimations() {
        const {animationManager: animationManager} = this;
        if (!this.root) return false;
        const hadAnimations = animationManager.activeAnimations.length > 0;
        animationManager.update(this.deltaTime);
        return hadAnimations || animationManager.activeAnimations.length > 0;
    }
    hasSceneUpdates() {
        return !!this.root.updateType || this.renderRequested || this.txManager.hasUpdates();
    }
    cleanupTextRenderers() {
        const textRenderers = this.textRenderers;
        for (const key in textRenderers) textRenderers[key].cleanup();
    }
    drawFrame(hasActiveAnimations = false) {
        const {renderer: renderer, renderRequested: renderRequested, root: root, platform: platform} = this;
        const sampling = this.options.fpsUpdateInterval > 0;
        let updateStart = 0;
        let renderStart = 0;
        let uploadStart = 0;
        let uploadEnd = 0;
        if (sampling === true) updateStart = platform.getTimeStamp();
        do {
            const forceUpdate = this.reprocessFrame;
            this.reprocessFrame = false;
            if (root.updateType !== 0 || forceUpdate) {
                root.updateType = 0;
                const childUpdateType = root.childUpdateType;
                root.childUpdateType = 0;
                for (let i = 0, length = root.children.length; i < length; i++) {
                    const child = root.children[i];
                    if (childUpdateType !== 0) child.updateType |= childUpdateType;
                    if (child.updateType === 0) continue;
                    child.update(this.deltaTime, root.clippingRect);
                }
            }
            if (this.reprocessCallback !== null) {
                this.reprocessCallback();
                this.reprocessCallback = null;
            }
        } while (this.reprocessFrame);
        if (sampling === true) renderStart = platform.getTimeStamp();
        renderer.reset();
        if (this.renderListDirty === true) {
            this.renderList.length = 0;
            this.buildRenderList(this.root);
            this.renderListDirty = false;
        } else {
            const renderList = this.renderList;
            for (let i = 0, len = renderList.length; i < len; i++) renderList[i].renderQuads(renderer);
        }
        renderer.render();
        if (sampling === true) {
            uploadStart = platform.getTimeStamp();
            uploadEnd = uploadStart;
        }
        if (this.txManager.hasUpdates() === true) {
            if (sampling === true) {
                const queued = this.txManager.uploadQueueSize;
                if (queued > this.fpsMaxUploadQueue) this.fpsMaxUploadQueue = queued;
            }
            let uploaded;
            if (hasActiveAnimations === true) uploaded = this.txManager.processOne(); else uploaded = this.txManager.processUntil(this.options.textureProcessingTimeLimit);
            if (sampling === true) {
                uploadEnd = platform.getTimeStamp();
                this.fpsUploadFrames++;
                this.fpsUploadedTextures += uploaded;
            }
        }
        if (sampling === true) {
            const activeAnimations = this.animationManager.activeAnimations.length;
            this.fpsAnimationSum += activeAnimations;
            if (activeAnimations > this.fpsMaxAnimations) this.fpsMaxAnimations = activeAnimations;
            const frameUpdateMs = renderStart - updateStart;
            const frameRenderMs = uploadStart - renderStart;
            const frameUploadMs = uploadEnd - uploadStart;
            this.fpsUpdateMs += frameUpdateMs;
            this.fpsRenderMs += frameRenderMs;
            this.fpsUploadMs += frameUploadMs;
            if (frameUpdateMs > this.fpsMaxUpdateMs) this.fpsMaxUpdateMs = frameUpdateMs;
            if (frameRenderMs > this.fpsMaxRenderMs) this.fpsMaxRenderMs = frameRenderMs;
            if (frameUploadMs > this.fpsMaxUploadMs) this.fpsMaxUploadMs = frameUploadMs;
            this.calculateFps(true, hasActiveAnimations === true);
        }
        if (true) this.calculateRenderInfo();
        if (renderRequested === true) this.renderRequested = false;
        const timedNodes = this.timedNodes;
        for (let i = 0, len = timedNodes.length; i < len; i++) if (timedNodes[i].isRenderable === true) {
            this.requestRender();
            break;
        }
        if (this.txMemManager.criticalCleanupRequested === true) this.txMemManager.cleanup();
    }
    queueFrameEvent(name, data) {
        this.frameEventQueue.push([ name, data ]);
    }
    flushFrameEvents() {
        const queue = this.frameEventQueue;
        const len = queue.length;
        if (len === 0) return;
        this.frameEventQueue = [];
        for (let i = 0; i < len; i++) {
            const event = queue[i];
            this.eventBus.emit(event[0], event[1]);
        }
    }
    calculateFps(rendered, animating = false) {
        const {fpsUpdateInterval: fpsUpdateInterval} = this.options;
        if (fpsUpdateInterval > 0) {
            if (fpsUpdateInterval !== this.fpsLastInterval) {
                this.fpsLastInterval = fpsUpdateInterval;
                this.resetFpsSample();
            }
            const delta = this.deltaTime;
            this.fpsIntervalElapsed += delta;
            if (rendered === true) {
                this.fpsRenderedFrames++;
                if (this.fpsLastTickRendered === true) {
                    this.fpsSampleFrames++;
                    this.fpsSampleElapsed += delta;
                    let bucket;
                    if (delta < 32) bucket = delta | 0; else if (delta < 128) bucket = 32 + ((delta - 32) / 8 | 0); else bucket = 45 - 1;
                    const buckets = this.fpsFrameTimeBuckets;
                    buckets[bucket] = buckets[bucket] + 1;
                    if (delta > this.fpsMaxFrameTime) this.fpsMaxFrameTime = delta;
                    if (animating === true) {
                        this.fpsAnimatedFrames++;
                        this.fpsAnimatedElapsed += delta;
                        const animatedBuckets = this.fpsAnimatedBuckets;
                        animatedBuckets[bucket] = animatedBuckets[bucket] + 1;
                        if (delta > this.fpsAnimatedMaxFrameTime) this.fpsAnimatedMaxFrameTime = delta;
                    }
                }
            } else this.fpsIdleTicks++;
            this.fpsLastTickRendered = rendered;
            if (this.fpsIntervalElapsed >= fpsUpdateInterval) this.emitFpsUpdate();
        }
    }
    setTelemetrySegment(label) {
        if (label === this.telemetrySegment) return;
        if (this.options.fpsUpdateInterval > 0 && (this.fpsRenderedFrames > 0 || this.fpsIdleTicks > 0)) this.emitFpsUpdate();
        this.telemetrySegment = label;
    }
    resetFpsSample() {
        this.fpsSampleFrames = 0;
        this.fpsSampleElapsed = 0;
        this.fpsRenderedFrames = 0;
        this.fpsIdleTicks = 0;
        this.fpsIntervalElapsed = 0;
        this.fpsMaxFrameTime = 0;
        this.fpsAnimatedFrames = 0;
        this.fpsAnimatedElapsed = 0;
        this.fpsAnimatedMaxFrameTime = 0;
        this.fpsAnimationSum = 0;
        this.fpsMaxAnimations = 0;
        this.fpsUploadFrames = 0;
        this.fpsUpdateMs = 0;
        this.fpsRenderMs = 0;
        this.fpsUploadMs = 0;
        this.fpsMaxUpdateMs = 0;
        this.fpsMaxRenderMs = 0;
        this.fpsMaxUploadMs = 0;
        this.fpsUploadedTextures = 0;
        this.fpsMaxUploadQueue = 0;
        const buckets = this.fpsFrameTimeBuckets;
        const animatedBuckets = this.fpsAnimatedBuckets;
        for (let i = 0; i < 45; i++) {
            buckets[i] = 0;
            animatedBuckets[i] = 0;
        }
    }
    emitFpsUpdate() {
        var _this$contextSpy$getD, _this$contextSpy, _this$renderer$getRen, _this$renderer$getQua, _this$contextSpy2;
        const fps = this.fpsSampleElapsed > 0 ? Math.round(this.fpsSampleFrames * 1e3 / this.fpsSampleElapsed) : 0;
        const sampledFrames = this.fpsSampleFrames;
        const renderedFrames = this.fpsRenderedFrames;
        const idleTicks = this.fpsIdleTicks;
        const renderedMs = this.fpsSampleElapsed;
        const maxFrameTime = this.fpsMaxFrameTime;
        const animatedFps = this.fpsAnimatedElapsed > 0 ? Math.round(this.fpsAnimatedFrames * 1e3 / this.fpsAnimatedElapsed) : 0;
        const animatedFrames = this.fpsAnimatedFrames;
        const animatedMs = this.fpsAnimatedElapsed;
        const animatedMaxFrameTime = this.fpsAnimatedMaxFrameTime;
        const maxActiveAnimations = this.fpsMaxAnimations;
        const meanActiveAnimations = renderedFrames > 0 ? this.fpsAnimationSum / renderedFrames : 0;
        const uploadFrames = this.fpsUploadFrames;
        const updateMs = this.fpsUpdateMs;
        const renderMs = this.fpsRenderMs;
        const uploadMs = this.fpsUploadMs;
        const maxUpdateMs = this.fpsMaxUpdateMs;
        const maxRenderMs = this.fpsMaxRenderMs;
        const maxUploadMs = this.fpsMaxUploadMs;
        const uploadedTextures = this.fpsUploadedTextures;
        const maxUploadQueueSize = this.fpsMaxUploadQueue;
        const sourceBuckets = this.fpsFrameTimeBuckets;
        const sourceAnimated = this.fpsAnimatedBuckets;
        const frameTimeBuckets = new Array(45);
        const animatedFrameTimeBuckets = new Array(45);
        for (let i = 0; i < 45; i++) {
            frameTimeBuckets[i] = sourceBuckets[i];
            animatedFrameTimeBuckets[i] = sourceAnimated[i];
        }
        this.resetFpsSample();
        this.queueFrameEvent("fpsUpdate", {
            fps: fps,
            sampledFrames: sampledFrames,
            renderedFrames: renderedFrames,
            idleTicks: idleTicks,
            renderedMs: renderedMs,
            frameTimeBuckets: frameTimeBuckets,
            maxFrameTime: maxFrameTime,
            animatedFps: animatedFps,
            animatedFrames: animatedFrames,
            animatedMs: animatedMs,
            animatedFrameTimeBuckets: animatedFrameTimeBuckets,
            animatedMaxFrameTime: animatedMaxFrameTime,
            segment: this.telemetrySegment,
            meanActiveAnimations: meanActiveAnimations,
            maxActiveAnimations: maxActiveAnimations,
            updateMs: updateMs,
            renderMs: renderMs,
            uploadMs: uploadMs,
            maxUpdateMs: maxUpdateMs,
            maxRenderMs: maxRenderMs,
            maxUploadMs: maxUploadMs,
            uploadFrames: uploadFrames,
            uploadedTextures: uploadedTextures,
            maxUploadQueueSize: maxUploadQueueSize,
            contextSpyData: (_this$contextSpy$getD = (_this$contextSpy = this.contextSpy) == null ? void 0 : _this$contextSpy.getData()) !== null && _this$contextSpy$getD !== void 0 ? _this$contextSpy$getD : null,
            renderOps: (_this$renderer$getRen = this.renderer.getRenderOpCount()) !== null && _this$renderer$getRen !== void 0 ? _this$renderer$getRen : 0,
            quads: (_this$renderer$getQua = this.renderer.getQuadCount()) !== null && _this$renderer$getQua !== void 0 ? _this$renderer$getQua : 0
        });
        (_this$contextSpy2 = this.contextSpy) == null || _this$contextSpy2.reset();
    }
    calculateRenderInfo() {
        const quads = this.renderer.getQuadCount();
        const renderOps = this.renderer.getRenderOpCount();
        if (quads && quads !== this.numQuadsRendered || renderOps && renderOps !== this.numRenderOpsRendered) {
            this.numQuadsRendered = quads || 0;
            this.numRenderOpsRendered = renderOps || 0;
            this.queueFrameEvent("renderUpdate", {
                quads: this.numQuadsRendered,
                renderOps: this.numRenderOpsRendered
            });
        }
    }
    requestRenderListUpdate() {
        this.requestRender();
        if (this.renderListDirty === true) return;
        if (this.renderer.invalidateQuadBuffer !== void 0) this.renderer.invalidateQuadBuffer();
        this.renderListDirty = true;
    }
    buildRenderList(node) {
        if (node.isRenderable === true) {
            node.renderQuads(this.renderer);
            this.renderList.push(node);
        }
        const children = node.children;
        const len = children.length;
        for (let i = 0; i < len; i++) {
            const child = children[i];
            if (child.worldAlpha === 0 || child.renderState === CoreNodeRenderState.OutOfBounds) continue;
            this.buildRenderList(child);
        }
    }
    requestRender() {
        this.renderRequested = true;
    }
    reprocessUpdates(callback) {
        this.reprocessFrame = true;
        if (callback) this.reprocessCallback = callback;
    }
    resolveTextRenderer(trProps, textRendererOverride = null) {
        var _this$fontHandlers$sd;
        if (textRendererOverride !== null) {
            const overrideKey = String(textRendererOverride);
            if (this.textRenderers[overrideKey] === void 0) {
                console.warn(`Text renderer override '${overrideKey}' not found.`);
                return null;
            }
            return this.textRenderers[overrideKey];
        }
        if (this.singleFontEngine !== null) {
            var _this$singleFontHandl;
            if (this.hasOnlyCanvasFontEngine === true) return this.singleFontEngine;
            if (((_this$singleFontHandl = this.singleFontHandler) == null ? void 0 : _this$singleFontHandl.canRenderFont(trProps)) === true) return this.singleFontEngine;
            console.warn(`Text renderer cannot render font`, trProps);
            return null;
        }
        if (((_this$fontHandlers$sd = this.fontHandlers["sdf"]) == null ? void 0 : _this$fontHandlers$sd.canRenderFont(trProps)) === true) return this.textRenderers.sdf || null;
        if (this.hasCanvasEngine === true) return this.textRenderers.canvas || null;
        console.warn("No text renderers available. Your text will not render.");
        return null;
    }
    createNode(props, resolved = false) {
        const resolvedProps = resolved ? props : this.resolveNodeDefaults(props);
        return new CoreNode(this, resolvedProps);
    }
    createTextNode(props, resolved = false) {
        const resolvedProps = resolved ? props : this.resolveTextNodeDefaults(props);
        const resolvedTextRenderer = this.resolveTextRenderer(resolvedProps, resolvedProps.textRendererOverride);
        if (!resolvedTextRenderer) throw new Error(`No compatible text renderer found for ${resolvedProps.fontFamily}`);
        return new CoreTextNode(this, resolvedProps, resolvedTextRenderer);
    }
    createNodeProps(initial) {
        return this.resolveNodeDefaults(initial !== null && initial !== void 0 ? initial : {});
    }
    createTextNodeProps(initial) {
        return this.resolveTextNodeDefaults(initial !== null && initial !== void 0 ? initial : {});
    }
    resolveTextNodeDefaults(props) {
        var _props$text, _props$textRendererOv;
        const fontSize = props.fontSize || 16;
        const resolvedProps = this.resolveNodeDefaults(props);
        resolvedProps.text = (_props$text = props.text) !== null && _props$text !== void 0 ? _props$text : "";
        resolvedProps.textRendererOverride = (_props$textRendererOv = props.textRendererOverride) !== null && _props$textRendererOv !== void 0 ? _props$textRendererOv : null;
        resolvedProps.fontSize = fontSize;
        resolvedProps.fontFamily = props.fontFamily || "sans-serif";
        resolvedProps.fontStyle = props.fontStyle || "normal";
        resolvedProps.textAlign = props.textAlign || "left";
        resolvedProps.offsetY = props.offsetY || 0;
        resolvedProps.letterSpacing = props.letterSpacing || 0;
        resolvedProps.lineHeight = props.lineHeight || 1.2;
        resolvedProps.maxLines = props.maxLines || 0;
        resolvedProps.verticalAlign = props.verticalAlign || "top";
        resolvedProps.overflowSuffix = props.overflowSuffix || "...";
        resolvedProps.wordBreak = props.wordBreak || "break-word";
        resolvedProps.contain = props.contain || "none";
        resolvedProps.maxWidth = props.maxWidth || 0;
        resolvedProps.maxHeight = props.maxHeight || 0;
        resolvedProps.forceLoad = props.forceLoad || false;
        return resolvedProps;
    }
    setBoundsMargin(value) {
        this.boundsMargin = value;
        this.updateViewportBounds();
    }
    updateViewportBounds() {
        const {appWidth: appWidth, appHeight: appHeight} = this.options;
        this.viewportW = appWidth;
        this.viewportH = appHeight;
        this.root.setUpdateType(UpdateType.Children);
        this.root.childUpdateType |= UpdateType.Clipping;
    }
    trackTimedNode(node) {
        const timedNodes = this.timedNodes;
        for (let i = 0, len = timedNodes.length; i < len; i++) if (timedNodes[i] === node) return;
        timedNodes.push(node);
    }
    untrackTimedNode(node) {
        const timedNodes = this.timedNodes;
        const last = timedNodes.length - 1;
        for (let i = 0; i <= last; i++) if (timedNodes[i] === node) {
            timedNodes[i] = timedNodes[last];
            timedNodes.length = last;
            return;
        }
    }
    resolveNodeDefaults(props) {
        var _props$color, _props$scale, _props$mount, _props$pivot, _props$data, _props$x, _props$y, _props$w, _props$h, _props$alpha, _props$ignoreParentAl, _props$autosize, _props$clipping, _props$placeholderCol, _props$zIndex, _props$parent, _props$texture, _props$textureOptions, _props$shader, _props$src, _ref9, _props$scaleX, _ref10, _props$scaleY, _props$mountX, _props$mountY, _props$pivotX, _props$pivotY, _props$rotation;
        const color = (_props$color = props.color) !== null && _props$color !== void 0 ? _props$color : 4294967295;
        let colorTop = color;
        let colorBottom = color;
        let colorLeft = color;
        let colorRight = color;
        let colorTl = color;
        let colorTr = color;
        let colorBl = color;
        let colorBr = color;
        if (props.colorTop !== void 0 || props.colorBottom !== void 0 || props.colorLeft !== void 0 || props.colorRight !== void 0 || props.colorTl !== void 0 || props.colorTr !== void 0 || props.colorBl !== void 0 || props.colorBr !== void 0) {
            var _ref, _ref2, _props$colorTl, _ref3, _ref4, _props$colorTr, _ref5, _ref6, _props$colorBl, _ref7, _ref8, _props$colorBr;
            const {colorTop: top, colorBottom: bottom, colorLeft: left, colorRight: right} = props;
            colorTop = top !== null && top !== void 0 ? top : color;
            colorBottom = bottom !== null && bottom !== void 0 ? bottom : color;
            colorLeft = left !== null && left !== void 0 ? left : color;
            colorRight = right !== null && right !== void 0 ? right : color;
            colorTl = (_ref = (_ref2 = (_props$colorTl = props.colorTl) !== null && _props$colorTl !== void 0 ? _props$colorTl : top) !== null && _ref2 !== void 0 ? _ref2 : left) !== null && _ref !== void 0 ? _ref : color;
            colorTr = (_ref3 = (_ref4 = (_props$colorTr = props.colorTr) !== null && _props$colorTr !== void 0 ? _props$colorTr : top) !== null && _ref4 !== void 0 ? _ref4 : right) !== null && _ref3 !== void 0 ? _ref3 : color;
            colorBl = (_ref5 = (_ref6 = (_props$colorBl = props.colorBl) !== null && _props$colorBl !== void 0 ? _props$colorBl : bottom) !== null && _ref6 !== void 0 ? _ref6 : left) !== null && _ref5 !== void 0 ? _ref5 : color;
            colorBr = (_ref7 = (_ref8 = (_props$colorBr = props.colorBr) !== null && _props$colorBr !== void 0 ? _props$colorBr : bottom) !== null && _ref8 !== void 0 ? _ref8 : right) !== null && _ref7 !== void 0 ? _ref7 : color;
        }
        const scale = (_props$scale = props.scale) !== null && _props$scale !== void 0 ? _props$scale : null;
        const mount = (_props$mount = props.mount) !== null && _props$mount !== void 0 ? _props$mount : 0;
        const pivot = (_props$pivot = props.pivot) !== null && _props$pivot !== void 0 ? _props$pivot : .5;
        const data = !true && this.options.inspector ? santizeCustomDataMap((_props$data = props.data) !== null && _props$data !== void 0 ? _props$data : {}) : {};
        return {
            x: (_props$x = props.x) !== null && _props$x !== void 0 ? _props$x : 0,
            y: (_props$y = props.y) !== null && _props$y !== void 0 ? _props$y : 0,
            w: (_props$w = props.w) !== null && _props$w !== void 0 ? _props$w : 0,
            h: (_props$h = props.h) !== null && _props$h !== void 0 ? _props$h : 0,
            alpha: (_props$alpha = props.alpha) !== null && _props$alpha !== void 0 ? _props$alpha : 1,
            ignoreParentAlpha: (_props$ignoreParentAl = props.ignoreParentAlpha) !== null && _props$ignoreParentAl !== void 0 ? _props$ignoreParentAl : false,
            autosize: (_props$autosize = props.autosize) !== null && _props$autosize !== void 0 ? _props$autosize : false,
            clipping: (_props$clipping = props.clipping) !== null && _props$clipping !== void 0 ? _props$clipping : false,
            color: color,
            colorTop: colorTop,
            colorBottom: colorBottom,
            colorLeft: colorLeft,
            colorRight: colorRight,
            colorTl: colorTl,
            colorTr: colorTr,
            colorBl: colorBl,
            colorBr: colorBr,
            placeholderColor: (_props$placeholderCol = props.placeholderColor) !== null && _props$placeholderCol !== void 0 ? _props$placeholderCol : 0,
            zIndex: (_props$zIndex = props.zIndex) !== null && _props$zIndex !== void 0 ? _props$zIndex : 0,
            parent: (_props$parent = props.parent) !== null && _props$parent !== void 0 ? _props$parent : null,
            texture: (_props$texture = props.texture) !== null && _props$texture !== void 0 ? _props$texture : null,
            textureOptions: (_props$textureOptions = props.textureOptions) !== null && _props$textureOptions !== void 0 ? _props$textureOptions : EMPTY_TEXTURE_OPTIONS,
            shader: (_props$shader = props.shader) !== null && _props$shader !== void 0 ? _props$shader : this.defShaderNode,
            src: (_props$src = props.src) !== null && _props$src !== void 0 ? _props$src : null,
            srcKey: props.srcKey,
            srcHeight: props.srcHeight,
            srcWidth: props.srcWidth,
            srcX: props.srcX,
            srcY: props.srcY,
            scale: scale,
            scaleX: (_ref9 = (_props$scaleX = props.scaleX) !== null && _props$scaleX !== void 0 ? _props$scaleX : scale) !== null && _ref9 !== void 0 ? _ref9 : 1,
            scaleY: (_ref10 = (_props$scaleY = props.scaleY) !== null && _props$scaleY !== void 0 ? _props$scaleY : scale) !== null && _ref10 !== void 0 ? _ref10 : 1,
            mount: mount,
            mountX: (_props$mountX = props.mountX) !== null && _props$mountX !== void 0 ? _props$mountX : mount,
            mountY: (_props$mountY = props.mountY) !== null && _props$mountY !== void 0 ? _props$mountY : mount,
            pivot: pivot,
            pivotX: (_props$pivotX = props.pivotX) !== null && _props$pivotX !== void 0 ? _props$pivotX : pivot,
            pivotY: (_props$pivotY = props.pivotY) !== null && _props$pivotY !== void 0 ? _props$pivotY : pivot,
            rotation: (_props$rotation = props.rotation) !== null && _props$rotation !== void 0 ? _props$rotation : 0,
            data: data,
            imageType: props.imageType,
            preventDestroy: props.preventDestroy,
            componentName: props.componentName,
            componentLocation: props.componentLocation
        };
    }
    cleanup(full = false) {
        this.txMemManager.cleanup(full);
    }
    set clearColor(value) {
        this.renderer.updateClearColor(value);
        this.renderRequested = true;
        this.clrColor = value;
    }
    get clearColor() {
        return this.clrColor;
    }
    loadFont(rendererType, options) {
        const rendererTypeKey = String(rendererType);
        const fontHandler = this.fontHandlers[rendererTypeKey];
        if (!fontHandler) return Promise.reject(new Error(`Font handler for renderer type '${rendererTypeKey}' not found. Available types: ${Object.keys(this.fontHandlers).join(", ")}`));
        return fontHandler.loadFont(this, options);
    }
};

var Platform = class {};

var WebPlatform = class extends Platform {
    createCanvas() {
        return document.createElement("canvas");
    }
    getElementById(id) {
        return document.getElementById(id);
    }
    startLoop(stage) {
        let isIdle = false;
        let lastFrameTime = 0;
        let scheduled = false;
        const buffer = 4;
        const requestLoop = () => requestAnimationFrame(runLoop);
        const tick = currentTime => {
            if (stage.isContextLost === true) return;
            const targetFrameTime = stage.targetFrameTime;
            if (targetFrameTime > 0) {
                const elapsed = currentTime - lastFrameTime;
                if (elapsed < targetFrameTime) {
                    const wait = targetFrameTime - elapsed;
                    if (wait > buffer) setTimeout(requestLoop, wait - buffer); else requestAnimationFrame(runLoop);
                    scheduled = true;
                    return;
                }
                lastFrameTime = currentTime - elapsed % targetFrameTime;
            } else lastFrameTime = currentTime;
            stage.updateFrameTime(currentTime);
            const hasActiveAnimations = stage.updateAnimations();
            if (!stage.hasSceneUpdates()) {
                stage.calculateFps(false, false);
                setTimeout(requestLoop, Math.max(targetFrameTime, 15));
                scheduled = true;
                if (isIdle === false) {
                    if (stage.renderer.checkForOutOfMemory() === true) stage.txMemManager.handleOutOfMemory();
                    stage.shManager.cleanup();
                    stage.cleanupTextRenderers();
                    stage.eventBus.emit("idle");
                    isIdle = true;
                }
                if (stage.txMemManager.checkCleanup() === true) stage.txMemManager.cleanup();
                stage.flushFrameEvents();
                return;
            }
            isIdle = false;
            stage.drawFrame(hasActiveAnimations);
            stage.flushFrameEvents();
            requestAnimationFrame(runLoop);
            scheduled = true;
        };
        const runLoop = (currentTime = 0) => {
            scheduled = false;
            try {
                tick(currentTime);
            } catch (error) {
                const handleLoopError = stage.options.handleLoopError;
                if (handleLoopError !== void 0) handleLoopError(error);
                if (scheduled === false) requestAnimationFrame(runLoop);
            }
        };
        requestAnimationFrame(runLoop);
    }
    createImageBitmap(blob, sxOrOptions, sy, sw, sh, options) {
        if (typeof sxOrOptions === "number") return createImageBitmap(blob, sxOrOptions, sy !== null && sy !== void 0 ? sy : 0, sw !== null && sw !== void 0 ? sw : 0, sh !== null && sh !== void 0 ? sh : 0, options); else return createImageBitmap(blob, sxOrOptions);
    }
    getTimeStamp() {
        return performance.now();
    }
    addFont(font) {
        document.fonts.add(font);
    }
};

var noop = () => {};

var normalizeBoundsMargin$1 = value => {
    if (Array.isArray(value) === false) return value;
    const arr = value;
    let max = 0;
    for (let i = 0; i < arr.length; i++) if (arr[i] > max) max = arr[i];
    console.warn(`boundsMargin array form is no longer supported, using the largest edge value: ${max}`);
    return max;
};

var RendererMain = class extends EventEmitter {
    constructor(settings, target) {
        var _settings$boundsMargi, _settings$clearColor, _settings$enableClear, _settings$textLayoutC, _settings$enableConte, _settings$forceWebGL, _settings$disableVert, _settings$inspector, _settings$inspectorOp, _settings$quadBufferS, _settings$fontEngines, _settings$textBaselin, _settings$maxRetryCou, _settings$handleLoopE, _settings$maxRetryCou2;
        super();
        this.root = void 0;
        this.canvas = void 0;
        this.stage = void 0;
        this.inspector = null;
        const resolvedTxSettings = this.resolveTxSettings(settings.textureMemory || {});
        settings = {
            appWidth: settings.appWidth || 1920,
            appHeight: settings.appHeight || 1080,
            textureMemory: resolvedTxSettings,
            boundsMargin: normalizeBoundsMargin$1((_settings$boundsMargi = settings.boundsMargin) !== null && _settings$boundsMargi !== void 0 ? _settings$boundsMargi : 200),
            deviceLogicalPixelRatio: settings.deviceLogicalPixelRatio || 1,
            devicePhysicalPixelRatio: settings.devicePhysicalPixelRatio || this.windowDevicePixelRatio() || 1,
            clearColor: (_settings$clearColor = settings.clearColor) !== null && _settings$clearColor !== void 0 ? _settings$clearColor : 0,
            fpsUpdateInterval: settings.fpsUpdateInterval || 0,
            enableClear: (_settings$enableClear = settings.enableClear) !== null && _settings$enableClear !== void 0 ? _settings$enableClear : true,
            targetFPS: settings.targetFPS || 0,
            textLayoutCacheSize: (_settings$textLayoutC = settings.textLayoutCacheSize) !== null && _settings$textLayoutC !== void 0 ? _settings$textLayoutC : 250,
            numImageWorkers: settings.numImageWorkers !== void 0 ? Math.min(settings.numImageWorkers, 1) : 1,
            imageDecodeConcurrency: settings.imageDecodeConcurrency !== void 0 ? settings.imageDecodeConcurrency : 4,
            enableContextSpy: (_settings$enableConte = settings.enableContextSpy) !== null && _settings$enableConte !== void 0 ? _settings$enableConte : false,
            forceWebGL2: (_settings$forceWebGL = settings.forceWebGL2) !== null && _settings$forceWebGL !== void 0 ? _settings$forceWebGL : false,
            disableVertexArrayObject: (_settings$disableVert = settings.disableVertexArrayObject) !== null && _settings$disableVert !== void 0 ? _settings$disableVert : false,
            inspector: (_settings$inspector = settings.inspector) !== null && _settings$inspector !== void 0 ? _settings$inspector : false,
            inspectorOptions: (_settings$inspectorOp = settings.inspectorOptions) !== null && _settings$inspectorOp !== void 0 ? _settings$inspectorOp : {},
            renderEngine: settings.renderEngine,
            quadBufferSize: (_settings$quadBufferS = settings.quadBufferSize) !== null && _settings$quadBufferS !== void 0 ? _settings$quadBufferS : 1048576,
            fontEngines: (_settings$fontEngines = settings.fontEngines) !== null && _settings$fontEngines !== void 0 ? _settings$fontEngines : [],
            textBaselineMode: (_settings$textBaselin = settings.textBaselineMode) !== null && _settings$textBaselin !== void 0 ? _settings$textBaselin : "optical",
            textureProcessingTimeLimit: settings.textureProcessingTimeLimit || 10,
            canvas: settings.canvas,
            createImageBitmapSupport: settings.createImageBitmapSupport || "auto",
            premultiplyAlphaHonored: settings.premultiplyAlphaHonored === void 0 ? true : settings.premultiplyAlphaHonored,
            platform: settings.platform || null,
            maxRetryCount: (_settings$maxRetryCou = settings.maxRetryCount) !== null && _settings$maxRetryCou !== void 0 ? _settings$maxRetryCou : 5,
            handleLoopError: (_settings$handleLoopE = settings.handleLoopError) !== null && _settings$handleLoopE !== void 0 ? _settings$handleLoopE : noop
        };
        const {appWidth: appWidth, appHeight: appHeight, deviceLogicalPixelRatio: deviceLogicalPixelRatio, devicePhysicalPixelRatio: devicePhysicalPixelRatio, inspector: inspector} = settings;
        let platform;
        if (settings.platform !== void 0 && settings.platform !== null && settings.platform.prototype instanceof Platform === true) platform = new settings.platform; else platform = new WebPlatform;
        const canvas = settings.canvas || platform.createCanvas();
        const deviceLogicalWidth = appWidth * deviceLogicalPixelRatio;
        const deviceLogicalHeight = appHeight * deviceLogicalPixelRatio;
        this.canvas = canvas;
        canvas.width = deviceLogicalWidth * devicePhysicalPixelRatio;
        canvas.height = deviceLogicalHeight * devicePhysicalPixelRatio;
        canvas.style.width = `${deviceLogicalWidth}px`;
        canvas.style.height = `${deviceLogicalHeight}px`;
        this.stage = new Stage({
            appWidth: appWidth,
            appHeight: appHeight,
            boundsMargin: settings.boundsMargin,
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
            imageDecodeConcurrency: settings.imageDecodeConcurrency,
            renderEngine: settings.renderEngine,
            textureMemory: resolvedTxSettings,
            eventBus: this,
            quadBufferSize: settings.quadBufferSize,
            fontEngines: settings.fontEngines,
            textBaselineMode: settings.textBaselineMode,
            inspector: settings.inspector !== null,
            targetFPS: settings.targetFPS,
            textLayoutCacheSize: settings.textLayoutCacheSize,
            textureProcessingTimeLimit: settings.textureProcessingTimeLimit,
            createImageBitmapSupport: settings.createImageBitmapSupport,
            premultiplyAlphaHonored: settings.premultiplyAlphaHonored,
            platform: platform,
            maxRetryCount: (_settings$maxRetryCou2 = settings.maxRetryCount) !== null && _settings$maxRetryCou2 !== void 0 ? _settings$maxRetryCou2 : 5,
            handleLoopError: settings.handleLoopError
        });
        this.root = this.stage.root;
        if (target) {
            let targetEl;
            if (typeof target === "string") targetEl = document.getElementById(target); else targetEl = target;
            if (!targetEl) throw new Error("Could not find target element");
            targetEl.appendChild(canvas);
        } else if (settings.canvas !== canvas) throw new Error("New canvas element could not be appended to undefined target");
        if (inspector && ENABLE_INSPECTOR) this.inspector = new inspector(canvas, settings);
    }
    resolveTxSettings(textureMemory) {
        var _ref, _textureMemory$critic, _ref2, _textureMemory$target, _ref3, _textureMemory$cleanu, _ref4, _textureMemory$debugL, _ref5, _textureMemory$baseli, _ref6, _textureMemory$doNotE;
        const currentTxSettings = this.stage && this.stage.options.textureMemory || {};
        return {
            criticalThreshold: (_ref = (_textureMemory$critic = textureMemory == null ? void 0 : textureMemory.criticalThreshold) !== null && _textureMemory$critic !== void 0 ? _textureMemory$critic : currentTxSettings == null ? void 0 : currentTxSettings.criticalThreshold) !== null && _ref !== void 0 ? _ref : 2e8,
            targetThresholdLevel: (_ref2 = (_textureMemory$target = textureMemory == null ? void 0 : textureMemory.targetThresholdLevel) !== null && _textureMemory$target !== void 0 ? _textureMemory$target : currentTxSettings == null ? void 0 : currentTxSettings.targetThresholdLevel) !== null && _ref2 !== void 0 ? _ref2 : .8,
            cleanupInterval: (_ref3 = (_textureMemory$cleanu = textureMemory == null ? void 0 : textureMemory.cleanupInterval) !== null && _textureMemory$cleanu !== void 0 ? _textureMemory$cleanu : currentTxSettings == null ? void 0 : currentTxSettings.cleanupInterval) !== null && _ref3 !== void 0 ? _ref3 : 5e3,
            debugLogging: (_ref4 = (_textureMemory$debugL = textureMemory == null ? void 0 : textureMemory.debugLogging) !== null && _textureMemory$debugL !== void 0 ? _textureMemory$debugL : currentTxSettings == null ? void 0 : currentTxSettings.debugLogging) !== null && _ref4 !== void 0 ? _ref4 : false,
            baselineMemoryAllocation: (_ref5 = (_textureMemory$baseli = textureMemory == null ? void 0 : textureMemory.baselineMemoryAllocation) !== null && _textureMemory$baseli !== void 0 ? _textureMemory$baseli : currentTxSettings == null ? void 0 : currentTxSettings.baselineMemoryAllocation) !== null && _ref5 !== void 0 ? _ref5 : 26e6,
            doNotExceedCriticalThreshold: (_ref6 = (_textureMemory$doNotE = textureMemory == null ? void 0 : textureMemory.doNotExceedCriticalThreshold) !== null && _textureMemory$doNotE !== void 0 ? _textureMemory$doNotE : currentTxSettings == null ? void 0 : currentTxSettings.doNotExceedCriticalThreshold) !== null && _ref6 !== void 0 ? _ref6 : false
        };
    }
    createNode(props, resolved = false) {
        const node = this.stage.createNode(props, resolved);
        if (ENABLE_INSPECTOR && this.inspector) return this.inspector.createNode(node);
        return node;
    }
    createNodeProps(initial) {
        return this.stage.createNodeProps(initial);
    }
    createTextNode(props, resolved = false) {
        const textNode = this.stage.createTextNode(props, resolved);
        if (ENABLE_INSPECTOR && this.inspector) return this.inspector.createTextNode(textNode);
        return textNode;
    }
    createTextNodeProps(initial) {
        return this.stage.createTextNodeProps(initial);
    }
    destroyNode(node) {
        if (ENABLE_INSPECTOR && this.inspector) this.inspector.destroyNode(node);
        return node.destroy();
    }
    createTexture(textureType, props) {
        return this.stage.txManager.createTexture(textureType, props);
    }
    createShader(shType, props) {
        return this.stage.shManager.createShader(shType, props);
    }
    getNodeById(id) {
        var _this$stage;
        const root = (_this$stage = this.stage) == null ? void 0 : _this$stage.root;
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
    setTelemetrySegment(label) {
        this.stage.setTelemetrySegment(label);
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
        if (options.textureMemory !== void 0) {
            const textureMemory = options.textureMemory = this.resolveTxSettings(options.textureMemory);
            stage.txMemManager.updateSettings(textureMemory);
            stage.txMemManager.cleanup();
        }
        const stageOptions = stage.options;
        for (let key in options) stageOptions[key] = options[key];
        if (options.inspector !== void 0 && ENABLE_INSPECTOR) {
            if (options.inspector === false) {
                var _this$inspector;
                (_this$inspector = this.inspector) == null || _this$inspector.destroy();
                this.inspector = null;
            } else if (this.inspector === null || this.inspector.constructor !== options.inspector) {
                var _this$inspector2;
                this.inspector = new options.inspector(this.canvas, stage.options);
                (_this$inspector2 = this.inspector) == null || _this$inspector2.createNodes(this.root);
            }
        }
        let needDimensionsUpdate = false;
        if (options.deviceLogicalPixelRatio || options.devicePhysicalPixelRatio !== void 0) {
            var _this$inspector3;
            this.stage.pixelRatio = stageOptions.devicePhysicalPixelRatio * stageOptions.deviceLogicalPixelRatio;
            (_this$inspector3 = this.inspector) == null || _this$inspector3.updateViewport(stageOptions.appWidth, stageOptions.appHeight, stageOptions.deviceLogicalPixelRatio);
            needDimensionsUpdate = true;
        }
        if (options.appWidth !== void 0 || options.appHeight !== void 0) {
            var _this$inspector4;
            (_this$inspector4 = this.inspector) == null || _this$inspector4.updateViewport(stageOptions.appWidth, stageOptions.appHeight, stageOptions.deviceLogicalPixelRatio);
            needDimensionsUpdate = true;
        }
        if (options.boundsMargin !== void 0) this.stage.setBoundsMargin(normalizeBoundsMargin$1(options.boundsMargin));
        if (options.clearColor !== void 0) this.stage.setClearColor(options.clearColor);
        if (needDimensionsUpdate) this.updateAppDimensions();
    }
    updateAppDimensions() {
        const {appWidth: appWidth, appHeight: appHeight, deviceLogicalPixelRatio: deviceLogicalPixelRatio, devicePhysicalPixelRatio: devicePhysicalPixelRatio} = this.stage.options;
        const deviceLogicalWidth = appWidth * deviceLogicalPixelRatio;
        const deviceLogicalHeight = appHeight * deviceLogicalPixelRatio;
        this.canvas.width = deviceLogicalWidth * devicePhysicalPixelRatio;
        this.canvas.height = deviceLogicalHeight * devicePhysicalPixelRatio;
        if (this.canvas.style) {
            this.canvas.style.width = `${deviceLogicalWidth}px`;
            this.canvas.style.height = `${deviceLogicalHeight}px`;
        }
        this.stage.renderer.updateViewport();
        this.root.w = appWidth;
        this.root.h = appHeight;
        this.stage.updateViewportBounds();
    }
    get settings() {
        return this.stage.options;
    }
    get targetFPS() {
        return this.stage.options.targetFPS || 0;
    }
    set targetFPS(fps) {
        this.stage.options.targetFPS = fps > 0 ? fps : 0;
        this.stage.updateTargetFrameTime();
    }
    windowDevicePixelRatio() {
        return typeof window !== "undefined" ? window.devicePixelRatio : void 0;
    }
};

var sdfPrefetch = new Map;

var canvasPrefetch = new Map;

var orNull = promise => promise.then(value => value, () => null);

var normalizeSdfData = response => {
    let data = response;
    if (typeof data === "string") try {
        data = JSON.parse(data);
    } catch (e) {
        return null;
    }
    if (data === null || typeof data !== "object") return null;
    return data.chars !== void 0 ? data : null;
};

var prefetchFont = options => {
    const {fontFamily: fontFamily, fontUrl: fontUrl, atlasUrl: atlasUrl, atlasDataUrl: atlasDataUrl} = options;
    const names = Array.isArray(fontFamily) ? fontFamily : [ fontFamily ];
    const primary = names[0];
    if (primary === void 0) return;
    if (atlasDataUrl !== void 0 && options.type !== "canvas") {
        if (sdfPrefetch.has(primary) === true) return;
        sdfPrefetch.set(primary, {
            data: orNull(fetchJson(atlasDataUrl, "json")).then(normalizeSdfData),
            atlas: atlasUrl !== void 0 ? orNull(fetchJson(atlasUrl, "blob")).then(blob => blob instanceof Blob ? blob : null) : Promise.resolve(null)
        });
        return;
    }
    if (fontUrl !== void 0) {
        if (canvasPrefetch.has(primary) === true) return;
        if (typeof FontFace === "undefined") return;
        canvasPrefetch.set(primary, orNull(Promise.all(names.map(name => new FontFace(name, `url(${fontUrl})`).load()))));
    }
};

var takeSdfPrefetch = fontFamily => {
    const prefetched = sdfPrefetch.get(fontFamily);
    if (prefetched !== void 0) sdfPrefetch.delete(fontFamily);
    return prefetched;
};

var takeCanvasPrefetch = fontFamily => {
    const prefetched = canvasPrefetch.get(fontFamily);
    if (prefetched !== void 0) canvasPrefetch.delete(fontFamily);
    return prefetched;
};

var sharedConfig = {
    context: void 0,
    registry: void 0,
    effects: void 0,
    done: false,
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

function nextHydrateContext() {
    return {
        ...sharedConfig.context,
        id: sharedConfig.getNextContextId(),
        count: 0
    };
}

var equalFn = (a, b) => a === b;

var $PROXY = Symbol("solid-proxy");

var SUPPORTS_PROXY = typeof Proxy === "function";

var $TRACK = Symbol("solid-track");

var signalOptions = {
    equals: equalFn
};

var ERROR = null;

var runEffects = runQueue;

var STALE = 1;

var PENDING = 2;

var UNOWNED = {
    owned: null,
    cleanups: null,
    context: null,
    owner: null
};

var NO_INIT = {};

var Owner = null;

var Transition = null;

var Scheduler = null;

var ExternalSourceConfig = null;

var Listener = null;

var Updates = null;

var Effects = null;

var ExecCount = 0;

function createRoot(fn, detachedOwner) {
    const listener = Listener, owner = Owner, unowned = fn.length === 0, current = detachedOwner === void 0 ? owner : detachedOwner, root = unowned ? UNOWNED : {
        owned: null,
        cleanups: null,
        context: current ? current.context : null,
        owner: current
    }, updateFn = unowned ? fn : () => fn(() => untrack(() => cleanNode(root)));
    Owner = root;
    Listener = null;
    try {
        return runUpdates(updateFn, true);
    } finally {
        Listener = listener;
        Owner = owner;
    }
}

function createSignal(value, options) {
    options = options ? Object.assign({}, signalOptions, options) : signalOptions;
    const s = {
        value: value,
        observers: null,
        observerSlots: null,
        comparator: options.equals || void 0
    };
    const setter = value => {
        if (typeof value === "function") if (Transition && Transition.running && Transition.sources.has(s)) value = value(s.tValue); else value = value(s.value);
        return writeSignal(s, value);
    };
    return [ readSignal.bind(s), setter ];
}

function createComputed(fn, value, options) {
    const c = createComputation(fn, value, true, STALE);
    if (Scheduler && Transition && Transition.running) Updates.push(c); else updateComputation(c);
}

function createRenderEffect(fn, value, options) {
    const c = createComputation(fn, value, false, STALE);
    if (Scheduler && Transition && Transition.running) Updates.push(c); else updateComputation(c);
}

function createEffect(fn, value, options) {
    runEffects = runUserEffects;
    const c = createComputation(fn, value, false, STALE), s = SuspenseContext && useContext(SuspenseContext);
    if (s) c.suspense = s;
    if (!options || !options.render) c.user = true;
    Effects ? Effects.push(c) : updateComputation(c);
}

function createMemo(fn, value, options) {
    options = options ? Object.assign({}, signalOptions, options) : signalOptions;
    const c = createComputation(fn, value, true, 0);
    c.observers = null;
    c.observerSlots = null;
    c.comparator = options.equals || void 0;
    if (Scheduler && Transition && Transition.running) {
        c.tState = STALE;
        Updates.push(c);
    } else updateComputation(c);
    return readSignal.bind(c);
}

function isPromise(v) {
    return v && typeof v === "object" && "then" in v;
}

function createResource(pSource, pFetcher, pOptions) {
    let source;
    let fetcher;
    let options;
    if (typeof pFetcher === "function") {
        source = pSource;
        fetcher = pFetcher;
        options = pOptions || {};
    } else {
        source = true;
        fetcher = pSource;
        options = pFetcher || {};
    }
    let pr = null, initP = NO_INIT, id = null, loadedUnderTransition = false, scheduled = false, resolved = "initialValue" in options, dynamic = typeof source === "function" && createMemo(source);
    const contexts = new Set, [value, setValue] = (options.storage || createSignal)(options.initialValue), [error, setError] = createSignal(void 0), [track, trigger] = createSignal(void 0, {
        equals: false
    }), [state, setState] = createSignal(resolved ? "ready" : "unresolved");
    if (sharedConfig.context) {
        id = sharedConfig.getNextContextId();
        if (options.ssrLoadFrom === "initial") initP = options.initialValue; else if (sharedConfig.load && sharedConfig.has(id)) initP = sharedConfig.load(id);
    }
    function loadEnd(p, v, error, key) {
        if (pr === p) {
            pr = null;
            key !== void 0 && (resolved = true);
            if ((p === initP || v === initP) && options.onHydrated) queueMicrotask(() => options.onHydrated(key, {
                value: v
            }));
            initP = NO_INIT;
            if (Transition && p && loadedUnderTransition) {
                Transition.promises.delete(p);
                loadedUnderTransition = false;
                runUpdates(() => {
                    Transition.running = true;
                    completeLoad(v, error);
                }, false);
            } else completeLoad(v, error);
        }
        return v;
    }
    function completeLoad(v, err) {
        runUpdates(() => {
            if (err === void 0) setValue(() => v);
            setState(err !== void 0 ? "errored" : resolved ? "ready" : "unresolved");
            setError(err);
            for (const c of contexts.keys()) c.decrement();
            contexts.clear();
        }, false);
    }
    function read() {
        const c = SuspenseContext && useContext(SuspenseContext), v = value(), err = error();
        if (err !== void 0 && !pr) throw err;
        if (Listener && !Listener.user && c) createComputed(() => {
            track();
            if (pr) {
                if (c.resolved && Transition && loadedUnderTransition) Transition.promises.add(pr); else if (!contexts.has(c)) {
                    c.increment();
                    contexts.add(c);
                }
            }
        });
        return v;
    }
    function load(refetching = true) {
        if (refetching !== false && scheduled) return;
        scheduled = false;
        const lookup = dynamic ? dynamic() : source;
        loadedUnderTransition = Transition && Transition.running;
        if (lookup == null || lookup === false) {
            loadEnd(pr, untrack(value));
            return;
        }
        if (Transition && pr) Transition.promises.delete(pr);
        let error;
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
        if (error !== void 0) {
            loadEnd(pr, void 0, castError(error), lookup);
            return;
        } else if (!isPromise(p)) {
            loadEnd(pr, p, void 0, lookup);
            return p;
        }
        pr = p;
        if ("v" in p) {
            if (p.s === 1) loadEnd(pr, p.v, void 0, lookup); else loadEnd(pr, void 0, castError(p.v), lookup);
            return p;
        }
        scheduled = true;
        queueMicrotask(() => scheduled = false);
        runUpdates(() => {
            setState(resolved ? "refreshing" : "pending");
            trigger();
        }, false);
        return p.then(v => loadEnd(p, v, void 0, lookup), e => loadEnd(p, void 0, castError(e), lookup));
    }
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
                return s === "pending" || s === "refreshing";
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
    if (dynamic) createComputed(() => (owner = Owner, load(false))); else load(false);
    return [ read, {
        refetch: info => runWithOwner(owner, () => load(info)),
        mutate: setValue
    } ];
}

function createSelector(source, fn = equalFn, options) {
    const subs = new Map;
    const node = createComputation(p => {
        const v = source();
        for (const [key, val] of subs.entries()) if (fn(key, v) !== fn(key, p)) for (const c of val.values()) {
            c.state = STALE;
            if (c.pure) Updates.push(c); else Effects.push(c);
        }
        return v;
    }, void 0, true, STALE);
    updateComputation(node);
    return key => {
        const listener = Listener;
        if (listener) {
            let l;
            if (l = subs.get(key)) l.add(listener); else subs.set(key, l = new Set([ listener ]));
            onCleanup(() => {
                l.delete(listener);
                !l.size && subs.delete(key);
            });
        }
        return fn(key, Transition && Transition.running && Transition.sources.has(node) ? node.tValue : node.value);
    };
}

function batch(fn) {
    return runUpdates(fn, false);
}

function untrack(fn) {
    if (!ExternalSourceConfig && Listener === null) return fn();
    const listener = Listener;
    Listener = null;
    try {
        if (ExternalSourceConfig) return ExternalSourceConfig.untrack(fn);
        return fn();
    } finally {
        Listener = listener;
    }
}

function on(deps, fn, options) {
    const isArray = Array.isArray(deps);
    let prevInput;
    let defer = options && options.defer;
    return prevValue => {
        let input;
        if (isArray) {
            input = Array(deps.length);
            for (let i = 0; i < deps.length; i++) input[i] = deps[i]();
        } else input = deps();
        if (defer) {
            defer = false;
            return prevValue;
        }
        const result = untrack(() => fn(input, prevInput, prevValue));
        prevInput = input;
        return result;
    };
}

function onMount(fn) {
    createEffect(() => untrack(fn));
}

function onCleanup(fn) {
    if (Owner === null) ; else if (Owner.cleanups === null) Owner.cleanups = [ fn ]; else Owner.cleanups.push(fn);
    return fn;
}

function getListener() {
    return Listener;
}

function getOwner() {
    return Owner;
}

function runWithOwner(o, fn) {
    const prev = Owner;
    const prevListener = Listener;
    Owner = o;
    Listener = null;
    try {
        return runUpdates(fn, true);
    } catch (err) {
        handleError(err);
    } finally {
        Owner = prev;
        Listener = prevListener;
    }
}

function startTransition(fn) {
    if (Transition && Transition.running) {
        fn();
        return Transition.done;
    }
    const l = Listener;
    const o = Owner;
    return Promise.resolve().then(() => {
        Listener = l;
        Owner = o;
        let t;
        if (Scheduler || SuspenseContext) {
            t = Transition || (Transition = {
                sources: new Set,
                effects: [],
                promises: new Set,
                disposed: new Set,
                queue: new Set,
                running: true
            });
            t.done || (t.done = new Promise(res => t.resolve = res));
            t.running = true;
        }
        runUpdates(fn, false);
        Listener = Owner = null;
        return t ? t.done : void 0;
    });
}

var [transPending, setTransPending] = createSignal(false);

function resumeEffects(e) {
    Effects.push.apply(Effects, e);
    e.length = 0;
}

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
    return Owner && Owner.context && (value = Owner.context[context.id]) !== void 0 ? value : context.defaultValue;
}

function children(fn) {
    const children = createMemo(fn);
    const memo = createMemo(() => resolveChildren(children()));
    memo.toArray = () => {
        const c = memo();
        return Array.isArray(c) ? c : c != null ? [ c ] : [];
    };
    return memo;
}

var SuspenseContext;

function getSuspenseContext() {
    return SuspenseContext || (SuspenseContext = createContext());
}

function readSignal() {
    const runningTransition = Transition && Transition.running;
    if (this.sources && (runningTransition ? this.tState : this.state)) if ((runningTransition ? this.tState : this.state) === STALE) updateComputation(this); else {
        const updates = Updates;
        Updates = null;
        runUpdates(() => lookUpstream(this), false);
        Updates = updates;
    }
    if (Listener) {
        const sSlot = this.observers ? this.observers.length : 0;
        if (!Listener.sources) {
            Listener.sources = [ this ];
            Listener.sourceSlots = [ sSlot ];
        } else {
            Listener.sources.push(this);
            Listener.sourceSlots.push(sSlot);
        }
        if (!this.observers) {
            this.observers = [ Listener ];
            this.observerSlots = [ Listener.sources.length - 1 ];
        } else {
            this.observers.push(Listener);
            this.observerSlots.push(Listener.sources.length - 1);
        }
    }
    if (runningTransition && Transition.sources.has(this)) return this.tValue;
    return this.value;
}

function writeSignal(node, value, isComp) {
    let current = Transition && Transition.running && Transition.sources.has(node) ? node.tValue : node.value;
    if (!node.comparator || !node.comparator(current, value)) {
        if (Transition) {
            const TransitionRunning = Transition.running;
            if (TransitionRunning || !isComp && Transition.sources.has(node)) {
                Transition.sources.add(node);
                node.tValue = value;
            }
            if (!TransitionRunning) node.value = value;
        } else node.value = value;
        if (node.observers && node.observers.length) runUpdates(() => {
            for (let i = 0; i < node.observers.length; i += 1) {
                const o = node.observers[i];
                const TransitionRunning = Transition && Transition.running;
                if (TransitionRunning && Transition.disposed.has(o)) continue;
                if (TransitionRunning ? !o.tState : !o.state) {
                    if (o.pure) Updates.push(o); else Effects.push(o);
                    if (o.observers) markDownstream(o);
                }
                if (!TransitionRunning) o.state = STALE; else o.tState = STALE;
            }
            if (Updates.length > 1e6) {
                Updates = [];
                throw new Error;
            }
        }, false);
    }
    return value;
}

function updateComputation(node) {
    if (!node.fn) return;
    cleanNode(node);
    const time = ExecCount;
    runComputation(node, Transition && Transition.running && Transition.sources.has(node) ? node.tValue : node.value, time);
    if (Transition && !Transition.running && Transition.sources.has(node)) queueMicrotask(() => {
        runUpdates(() => {
            Transition && (Transition.running = true);
            Listener = Owner = node;
            runComputation(node, node.tValue, time);
            Listener = Owner = null;
        }, false);
    });
}

function runComputation(node, value, time) {
    let nextValue;
    const owner = Owner, listener = Listener;
    Listener = Owner = node;
    try {
        nextValue = node.fn(value);
    } catch (err) {
        if (node.pure) if (Transition && Transition.running) {
            node.tState = STALE;
            node.tOwned && node.tOwned.forEach(cleanNode);
            node.tOwned = void 0;
        } else {
            node.state = STALE;
            node.owned && node.owned.forEach(cleanNode);
            node.owned = null;
        }
        node.updatedAt = time + 1;
        return handleError(err);
    } finally {
        Listener = listener;
        Owner = owner;
    }
    if (!node.updatedAt || node.updatedAt <= time) {
        if (node.updatedAt != null && "observers" in node) writeSignal(node, nextValue, true); else if (Transition && Transition.running && node.pure) {
            Transition.sources.add(node);
            node.tValue = nextValue;
        } else node.value = nextValue;
        node.updatedAt = time;
    }
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
    if (Transition && Transition.running) {
        c.state = 0;
        c.tState = state;
    }
    if (Owner === null) ; else if (Owner !== UNOWNED) if (Transition && Transition.running && Owner.pure) if (!Owner.tOwned) Owner.tOwned = [ c ]; else Owner.tOwned.push(c); else if (!Owner.owned) Owner.owned = [ c ]; else Owner.owned.push(c);
    if (ExternalSourceConfig && c.fn) {
        const [track, trigger] = createSignal(void 0, {
            equals: false
        });
        const ordinary = ExternalSourceConfig.factory(c.fn, trigger);
        onCleanup(() => ordinary.dispose());
        const triggerInTransition = () => startTransition(trigger).then(() => inTransition.dispose());
        const inTransition = ExternalSourceConfig.factory(c.fn, triggerInTransition);
        c.fn = x => {
            track();
            return Transition && Transition.running ? inTransition.track(x) : ordinary.track(x);
        };
    }
    return c;
}

function runTop(node) {
    const runningTransition = Transition && Transition.running;
    if ((runningTransition ? node.tState : node.state) === 0) return;
    if ((runningTransition ? node.tState : node.state) === PENDING) return lookUpstream(node);
    if (node.suspense && untrack(node.suspense.inFallback)) return node.suspense.effects.push(node);
    const ancestors = [ node ];
    while ((node = node.owner) && (!node.updatedAt || node.updatedAt < ExecCount)) {
        if (runningTransition && Transition.disposed.has(node)) return;
        if (runningTransition ? node.tState : node.state) ancestors.push(node);
    }
    for (let i = ancestors.length - 1; i >= 0; i--) {
        node = ancestors[i];
        if (runningTransition) {
            let top = node, prev = ancestors[i + 1];
            while ((top = top.owner) && top !== prev) if (Transition.disposed.has(top)) return;
        }
        if ((runningTransition ? node.tState : node.state) === STALE) updateComputation(node); else if ((runningTransition ? node.tState : node.state) === PENDING) {
            const updates = Updates;
            Updates = null;
            runUpdates(() => lookUpstream(node, ancestors[0]), false);
            Updates = updates;
        }
    }
}

function runUpdates(fn, init) {
    if (Updates) return fn();
    let wait = false;
    if (!init) Updates = [];
    if (Effects) wait = true; else Effects = [];
    ExecCount++;
    try {
        const res = fn();
        completeUpdates(wait);
        return res;
    } catch (err) {
        if (!wait) Effects = null;
        Updates = null;
        handleError(err);
    }
}

function completeUpdates(wait) {
    if (Updates) {
        if (Scheduler && Transition && Transition.running) scheduleQueue(Updates); else runQueue(Updates);
        Updates = null;
    }
    if (wait) return;
    let res;
    if (Transition) {
        if (!Transition.promises.size && !Transition.queue.size) {
            const sources = Transition.sources;
            const disposed = Transition.disposed;
            Effects.push.apply(Effects, Transition.effects);
            res = Transition.resolve;
            for (const e of Effects) {
                "tState" in e && (e.state = e.tState);
                delete e.tState;
            }
            Transition = null;
            runUpdates(() => {
                for (const d of disposed) cleanNode(d);
                for (const v of sources) {
                    v.value = v.tValue;
                    if (v.owned) for (let i = 0, len = v.owned.length; i < len; i++) cleanNode(v.owned[i]);
                    if (v.tOwned) v.owned = v.tOwned;
                    delete v.tValue;
                    delete v.tOwned;
                    v.tState = 0;
                }
                setTransPending(false);
            }, false);
        } else if (Transition.running) {
            Transition.running = false;
            Transition.effects.push.apply(Transition.effects, Effects);
            Effects = null;
            setTransPending(true);
            return;
        }
    }
    const e = Effects;
    Effects = null;
    if (e.length) runUpdates(() => runEffects(e), false);
    if (res) res();
}

function runQueue(queue) {
    for (let i = 0; i < queue.length; i++) runTop(queue[i]);
}

function scheduleQueue(queue) {
    for (let i = 0; i < queue.length; i++) {
        const item = queue[i];
        const tasks = Transition.queue;
        if (!tasks.has(item)) {
            tasks.add(item);
            Scheduler(() => {
                tasks.delete(item);
                runUpdates(() => {
                    Transition.running = true;
                    runTop(item);
                }, false);
                Transition && (Transition.running = false);
            });
        }
    }
}

function runUserEffects(queue) {
    let i, userLength = 0;
    for (i = 0; i < queue.length; i++) {
        const e = queue[i];
        if (!e.user) runTop(e); else queue[userLength++] = e;
    }
    if (sharedConfig.context) {
        if (sharedConfig.count) {
            sharedConfig.effects || (sharedConfig.effects = []);
            sharedConfig.effects.push(...queue.slice(0, userLength));
            return;
        }
        setHydrateContext();
    }
    if (sharedConfig.effects && (sharedConfig.done || !sharedConfig.count)) {
        queue = [ ...sharedConfig.effects, ...queue ];
        userLength += sharedConfig.effects.length;
        delete sharedConfig.effects;
    }
    for (i = 0; i < userLength; i++) runTop(queue[i]);
}

function lookUpstream(node, ignore) {
    const runningTransition = Transition && Transition.running;
    if (runningTransition) node.tState = 0; else node.state = 0;
    for (let i = 0; i < node.sources.length; i += 1) {
        const source = node.sources[i];
        if (source.sources) {
            const state = runningTransition ? source.tState : source.state;
            if (state === STALE) {
                if (source !== ignore && (!source.updatedAt || source.updatedAt < ExecCount)) runTop(source);
            } else if (state === PENDING) lookUpstream(source, ignore);
        }
    }
}

function markDownstream(node) {
    const runningTransition = Transition && Transition.running;
    for (let i = 0; i < node.observers.length; i += 1) {
        const o = node.observers[i];
        if (runningTransition ? !o.tState : !o.state) {
            if (runningTransition) o.tState = PENDING; else o.state = PENDING;
            if (o.pure) Updates.push(o); else Effects.push(o);
            o.observers && markDownstream(o);
        }
    }
}

function cleanNode(node) {
    let i;
    if (node.sources) while (node.sources.length) {
        const source = node.sources.pop(), index = node.sourceSlots.pop(), obs = source.observers;
        if (obs && obs.length) {
            const n = obs.pop(), s = source.observerSlots.pop();
            if (index < obs.length) {
                n.sourceSlots[s] = index;
                obs[index] = n;
                source.observerSlots[index] = s;
            }
        }
    }
    if (node.tOwned) {
        for (i = node.tOwned.length - 1; i >= 0; i--) cleanNode(node.tOwned[i]);
        delete node.tOwned;
    }
    if (Transition && Transition.running && node.pure) reset(node, true); else if (node.owned) {
        for (i = node.owned.length - 1; i >= 0; i--) cleanNode(node.owned[i]);
        node.owned = null;
    }
    if (node.cleanups) {
        for (i = node.cleanups.length - 1; i >= 0; i--) node.cleanups[i]();
        node.cleanups = null;
    }
    if (Transition && Transition.running) node.tState = 0; else node.state = 0;
}

function reset(node, top) {
    if (!top) {
        node.tState = 0;
        Transition.disposed.add(node);
    }
    if (node.owned) for (let i = 0; i < node.owned.length; i++) reset(node.owned[i]);
}

function castError(err) {
    if (err instanceof Error) return err;
    return new Error(typeof err === "string" ? err : "Unknown error", {
        cause: err
    });
}

function runErrors(err, fns, owner) {
    try {
        for (const f of fns) f(err);
    } catch (e) {
        handleError(e, owner && owner.owner || null);
    }
}

function handleError(err, owner = Owner) {
    const fns = ERROR && owner && owner.context && owner.context[ERROR];
    const error = castError(err);
    if (!fns) throw error;
    if (Effects) Effects.push({
        fn() {
            runErrors(error, fns, owner);
        },
        state: STALE
    }); else runErrors(error, fns, owner);
}

function resolveChildren(children) {
    if (typeof children === "function" && !children.length) return resolveChildren(children());
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
    return function provider(props) {
        let res;
        createRenderEffect(() => res = untrack(() => {
            Owner.context = {
                ...Owner.context,
                [id]: props.value
            };
            return children(() => props.children);
        }), void 0);
        return res;
    };
}

var FALLBACK = Symbol("fallback");

function dispose(d) {
    for (let i = 0; i < d.length; i++) d[i]();
}

function mapArray(list, mapFn, options = {}) {
    let items = [], mapped = [], disposers = [], len = 0, indexes = mapFn.length > 1 ? [] : null;
    onCleanup(() => dispose(disposers));
    return () => {
        let newItems = list() || [], newLen = newItems.length, i, j;
        newItems[$TRACK];
        return untrack(() => {
            let newIndices, newIndicesNext, temp, tempdisposers, tempIndexes, start, end, newEnd, item;
            if (newLen === 0) {
                if (len !== 0) {
                    dispose(disposers);
                    disposers = [];
                    items = [];
                    mapped = [];
                    len = 0;
                    indexes && (indexes = []);
                }
                if (options.fallback) {
                    items = [ FALLBACK ];
                    mapped[0] = createRoot(disposer => {
                        disposers[0] = disposer;
                        return options.fallback();
                    });
                    len = 1;
                }
            } else if (len === 0) {
                mapped = new Array(newLen);
                for (j = 0; j < newLen; j++) {
                    items[j] = newItems[j];
                    mapped[j] = createRoot(mapper);
                }
                len = newLen;
            } else {
                temp = new Array(newLen);
                tempdisposers = new Array(newLen);
                indexes && (tempIndexes = new Array(newLen));
                for (start = 0, end = Math.min(len, newLen); start < end && items[start] === newItems[start]; start++) ;
                for (end = len - 1, newEnd = newLen - 1; end >= start && newEnd >= start && items[end] === newItems[newEnd]; end--, 
                newEnd--) {
                    temp[newEnd] = mapped[end];
                    tempdisposers[newEnd] = disposers[end];
                    indexes && (tempIndexes[newEnd] = indexes[end]);
                }
                newIndices = new Map;
                newIndicesNext = new Array(newEnd + 1);
                for (j = newEnd; j >= start; j--) {
                    item = newItems[j];
                    i = newIndices.get(item);
                    newIndicesNext[j] = i === void 0 ? -1 : i;
                    newIndices.set(item, j);
                }
                for (i = start; i <= end; i++) {
                    item = items[i];
                    j = newIndices.get(item);
                    if (j !== void 0 && j !== -1) {
                        temp[j] = mapped[i];
                        tempdisposers[j] = disposers[i];
                        indexes && (tempIndexes[j] = indexes[i]);
                        j = newIndicesNext[j];
                        newIndices.set(item, j);
                    } else disposers[i]();
                }
                for (j = start; j < newLen; j++) if (j in temp) {
                    mapped[j] = temp[j];
                    disposers[j] = tempdisposers[j];
                    if (indexes) {
                        indexes[j] = tempIndexes[j];
                        indexes[j](j);
                    }
                } else mapped[j] = createRoot(mapper);
                mapped = mapped.slice(0, len = newLen);
                items = newItems.slice(0);
            }
            return mapped;
        });
        function mapper(disposer) {
            disposers[j] = disposer;
            if (indexes) {
                const [s, set] = createSignal(j);
                indexes[j] = set;
                return mapFn(newItems[j], s);
            }
            return mapFn(newItems[j]);
        }
    };
}

function indexArray(list, mapFn, options = {}) {
    let items = [], mapped = [], disposers = [], signals = [], len = 0, i;
    onCleanup(() => dispose(disposers));
    return () => {
        const newItems = list() || [], newLen = newItems.length;
        newItems[$TRACK];
        return untrack(() => {
            if (newLen === 0) {
                if (len !== 0) {
                    dispose(disposers);
                    disposers = [];
                    items = [];
                    mapped = [];
                    len = 0;
                    signals = [];
                }
                if (options.fallback) {
                    items = [ FALLBACK ];
                    mapped[0] = createRoot(disposer => {
                        disposers[0] = disposer;
                        return options.fallback();
                    });
                    len = 1;
                }
                return mapped;
            }
            if (items[0] === FALLBACK) {
                disposers[0]();
                disposers = [];
                items = [];
                mapped = [];
                len = 0;
            }
            for (i = 0; i < newLen; i++) if (i < items.length && items[i] !== newItems[i]) signals[i](() => newItems[i]); else if (i >= items.length) mapped[i] = createRoot(mapper);
            for (;i < items.length; i++) disposers[i]();
            len = signals.length = disposers.length = newLen;
            items = newItems.slice(0);
            return mapped = mapped.slice(0, len);
        });
        function mapper(disposer) {
            disposers[i] = disposer;
            const [s, set] = createSignal(newItems[i]);
            signals[i] = set;
            return mapFn(s, i);
        }
    };
}

var hydrationEnabled = false;

function createComponent$1(Comp, props) {
    if (hydrationEnabled) {
        if (sharedConfig.context) {
            const c = sharedConfig.context;
            setHydrateContext(nextHydrateContext());
            const r = untrack(() => Comp(props || {}));
            setHydrateContext(c);
            return r;
        }
    }
    return untrack(() => Comp(props || {}));
}

function trueFn() {
    return true;
}

var propTraps = {
    get(_, property, receiver) {
        if (property === $PROXY) return receiver;
        return _.get(property);
    },
    has(_, property) {
        if (property === $PROXY) return true;
        return _.has(property);
    },
    set: trueFn,
    deleteProperty: trueFn,
    getOwnPropertyDescriptor(_, property) {
        return {
            configurable: true,
            enumerable: true,
            get() {
                return _.get(property);
            },
            set: trueFn,
            deleteProperty: trueFn
        };
    },
    ownKeys(_) {
        return _.keys();
    }
};

function resolveSource(s) {
    return !(s = typeof s === "function" ? s() : s) ? {} : s;
}

function resolveSources() {
    for (let i = 0, length = this.length; i < length; ++i) {
        const v = this[i]();
        if (v !== void 0) return v;
    }
}

function mergeProps(...sources) {
    let proxy = false;
    for (let i = 0; i < sources.length; i++) {
        const s = sources[i];
        proxy = proxy || !!s && $PROXY in s;
        sources[i] = typeof s === "function" ? (proxy = true, createMemo(s)) : s;
    }
    if (SUPPORTS_PROXY && proxy) return new Proxy({
        get(property) {
            for (let i = sources.length - 1; i >= 0; i--) {
                const v = resolveSource(sources[i])[property];
                if (v !== void 0) return v;
            }
        },
        has(property) {
            for (let i = sources.length - 1; i >= 0; i--) if (property in resolveSource(sources[i])) return true;
            return false;
        },
        keys() {
            const keys = [];
            for (let i = 0; i < sources.length; i++) keys.push(...Object.keys(resolveSource(sources[i])));
            return [ ...new Set(keys) ];
        }
    }, propTraps);
    const sourcesMap = {};
    const defined = Object.create(null);
    for (let i = sources.length - 1; i >= 0; i--) {
        const source = sources[i];
        if (!source) continue;
        const sourceKeys = Object.getOwnPropertyNames(source);
        for (let i = sourceKeys.length - 1; i >= 0; i--) {
            const key = sourceKeys[i];
            if (key === "__proto__" || key === "constructor") continue;
            const desc = Object.getOwnPropertyDescriptor(source, key);
            if (!defined[key]) defined[key] = desc.get ? {
                enumerable: true,
                configurable: true,
                get: resolveSources.bind(sourcesMap[key] = [ desc.get.bind(source) ])
            } : desc.value !== void 0 ? desc : void 0; else {
                const sources = sourcesMap[key];
                if (sources) {
                    if (desc.get) sources.push(desc.get.bind(source)); else if (desc.value !== void 0) sources.push(() => desc.value);
                }
            }
        }
    }
    const target = {};
    const definedKeys = Object.keys(defined);
    for (let i = definedKeys.length - 1; i >= 0; i--) {
        const key = definedKeys[i], desc = defined[key];
        if (desc && desc.get) Object.defineProperty(target, key, desc); else target[key] = desc ? desc.value : void 0;
    }
    return target;
}

function splitProps(props, ...keys) {
    if (SUPPORTS_PROXY && $PROXY in props) {
        const blocked = new Set(keys.length > 1 ? keys.flat() : keys[0]);
        const res = keys.map(k => new Proxy({
            get(property) {
                return k.includes(property) ? props[property] : void 0;
            },
            has(property) {
                return k.includes(property) && property in props;
            },
            keys() {
                return k.filter(property => property in props);
            }
        }, propTraps));
        res.push(new Proxy({
            get(property) {
                return blocked.has(property) ? void 0 : props[property];
            },
            has(property) {
                return blocked.has(property) ? false : property in props;
            },
            keys() {
                return Object.keys(props).filter(k => !blocked.has(k));
            }
        }, propTraps));
        return res;
    }
    const otherObject = {};
    const objects = keys.map(() => ({}));
    for (const propName of Object.getOwnPropertyNames(props)) {
        const desc = Object.getOwnPropertyDescriptor(props, propName);
        const isDefaultDesc = !desc.get && !desc.set && desc.enumerable && desc.writable && desc.configurable;
        let blocked = false;
        let objectIndex = 0;
        for (const k of keys) {
            if (k.includes(propName)) {
                blocked = true;
                isDefaultDesc ? objects[objectIndex][propName] = desc.value : Object.defineProperty(objects[objectIndex], propName, desc);
            }
            ++objectIndex;
        }
        if (!blocked) isDefaultDesc ? otherObject[propName] = desc.value : Object.defineProperty(otherObject, propName, desc);
    }
    return [ ...objects, otherObject ];
}

var narrowedError = name => `Stale read from <${name}>.`;

function For(props) {
    const fallback = "fallback" in props && {
        fallback: () => props.fallback
    };
    return createMemo(mapArray(() => props.each, props.children, fallback || void 0));
}

function Index(props) {
    const fallback = "fallback" in props && {
        fallback: () => props.fallback
    };
    return createMemo(indexArray(() => props.each, props.children, fallback || void 0));
}

function Show(props) {
    const keyed = props.keyed;
    const conditionValue = createMemo(() => props.when, void 0, void 0);
    const condition = keyed ? conditionValue : createMemo(conditionValue, void 0, {
        equals: (a, b) => !a === !b
    });
    return createMemo(() => {
        const c = condition();
        if (c) {
            const child = props.children;
            return typeof child === "function" && child.length > 0 ? untrack(() => child(keyed ? c : () => {
                if (!untrack(condition)) throw narrowedError("Show");
                return conditionValue();
            })) : child;
        }
        return props.fallback;
    }, void 0, void 0);
}

function Switch(props) {
    const chs = children(() => props.children);
    const switchFunc = createMemo(() => {
        const ch = chs();
        const mps = Array.isArray(ch) ? ch : [ ch ];
        let func = () => void 0;
        for (let i = 0; i < mps.length; i++) {
            const index = i;
            const mp = mps[i];
            const prevFunc = func;
            const conditionValue = createMemo(() => prevFunc() ? void 0 : mp.when, void 0, void 0);
            const condition = mp.keyed ? conditionValue : createMemo(conditionValue, void 0, {
                equals: (a, b) => !a === !b
            });
            func = () => prevFunc() || (condition() ? [ index, conditionValue, mp ] : void 0);
        }
        return func;
    });
    return createMemo(() => {
        const sel = switchFunc()();
        if (!sel) return props.fallback;
        const [index, conditionValue, mp] = sel;
        const child = mp.children;
        return typeof child === "function" && child.length > 0 ? untrack(() => child(mp.keyed ? conditionValue() : () => {
            var _untrack;
            if (((_untrack = untrack(switchFunc)()) == null ? void 0 : _untrack[0]) !== index) throw narrowedError("Match");
            return conditionValue();
        })) : child;
    }, void 0, void 0);
}

function Match(props) {
    return props;
}

var Errors;

function resetErrorBoundaries() {
    Errors && [ ...Errors ].forEach(fn => fn());
}

var SuspenseListContext = createContext();

function Suspense(props) {
    let counter = 0, show, ctx, p, flicker, error;
    const [inFallback, setFallback] = createSignal(false), SuspenseContext = getSuspenseContext(), store = {
        increment: () => {
            if (++counter === 1) setFallback(true);
        },
        decrement: () => {
            if (--counter === 0) setFallback(false);
        },
        inFallback: inFallback,
        effects: [],
        resolved: false
    }, owner = getOwner();
    if (sharedConfig.context && sharedConfig.load) {
        const key = sharedConfig.getContextId();
        let ref = sharedConfig.load(key);
        if (ref) if (typeof ref !== "object" || ref.s !== 1) p = ref; else sharedConfig.gather(key);
        if (p && p !== "$$f") {
            const [s, set] = createSignal(void 0, {
                equals: false
            });
            flicker = s;
            p.then(() => {
                if (sharedConfig.done) return set();
                sharedConfig.gather(key);
                setHydrateContext(ctx);
                set();
                setHydrateContext();
            }, err => {
                error = err;
                set();
            });
        }
    }
    const listContext = useContext(SuspenseListContext);
    if (listContext) show = listContext.register(store.inFallback);
    let dispose;
    onCleanup(() => dispose && dispose());
    return createComponent$1(SuspenseContext.Provider, {
        value: store,
        get children() {
            return createMemo(() => {
                if (error) throw error;
                ctx = sharedConfig.context;
                if (flicker) {
                    flicker();
                    flicker = void 0;
                    return;
                }
                if (ctx && p === "$$f") setHydrateContext();
                const rendered = createMemo(() => props.children);
                return createMemo(prev => {
                    const inFallback = store.inFallback(), {showContent: showContent = true, showFallback: showFallback = true} = show ? show() : {};
                    if ((!inFallback || p && p !== "$$f") && showContent) {
                        store.resolved = true;
                        dispose && dispose();
                        dispose = ctx = p = void 0;
                        resumeEffects(store.effects);
                        return rendered();
                    }
                    if (!showFallback) return;
                    if (dispose) return prev;
                    return createRoot(disposer => {
                        dispose = disposer;
                        if (ctx) {
                            setHydrateContext({
                                id: ctx.id + "F",
                                count: 0
                            });
                            ctx = void 0;
                        }
                        return props.fallback;
                    }, owner);
                });
            });
        }
    });
}

var [activeElement, setActiveElement] = createSignal(void 0);

var isDev = !!(false, false);

var DOM_RENDERING = typeof SOLIDTV_DOM_RENDERING !== "undefined" && SOLIDTV_DOM_RENDERING === true;

var SHADERS_ENABLED = typeof SOLIDTV_DISABLE_SHADERS === "undefined" || SOLIDTV_DISABLE_SHADERS !== true;

var isDomRendererActive = () => DOM_RENDERING && Config.domRendererEnabled;

var Config = {
    debug: false,
    domRendererEnabled: false,
    focusDebug: false,
    keyDebug: false,
    focusHistoryDebug: 0,
    postMutationDebug: false,
    animationsEnabled: true,
    animationSettings: {
        duration: 250,
        easing: "ease-in-out"
    },
    convertToShader: convertToShader,
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
    lockStyles: true,
    rendererOptions: {},
    stateOrder: []
};

var NodeType = {
    Element: "element",
    TextNode: "textNode",
    Text: "text"
};

var TextNode = class {
    constructor(text) {
        this._type = "text";
        this.parent = void 0;
        this.text = void 0;
        this.text = text;
    }
};

function hasDebug(node) {
    return isObject(node) && node.debug;
}

function log(msg, node, ...args) {
    if (false) {
        if (Config.debug || hasDebug(node) || hasDebug(args[0])) console.log(msg, node, ...args);
    }
}

var isFunction = obj => typeof obj === "function";

function isObject(item) {
    return item !== null && typeof item === "object";
}

function isArray(item) {
    return Array.isArray(item);
}

function isString(item) {
    return typeof item === "string";
}

function isInteger(item) {
    return Number.isInteger(item);
}

function isINode(node) {
    return "destroy" in node && typeof node.destroy === "function";
}

function isElementNode(node) {
    return node instanceof ElementNode;
}

function isElementText(node) {
    return node._type === NodeType.TextNode;
}

function isTextNode(node) {
    return node._type === NodeType.Text;
}

function keyExists(obj, keys) {
    for (const key of keys) if (key in obj) return true;
    return false;
}

function spliceItem(arr, item, deleteCount, ...insert) {
    const index = arr.indexOf(item);
    if (index > -1) arr.splice(index, deleteCount, ...insert);
    return index;
}

function logRenderTree(node) {
    const tree = [ node ];
    let parent = node.parent;
    while (parent) {
        tree.push(parent);
        parent = parent.parent;
    }
    tree.reverse();
    let output = `\nfunction convertEffectsToShader(styleEffects) {\n  const effects = [];\n  let index = 0;\n\n  for (const [type, props] of Object.entries(styleEffects)) {\n    effects.push({ type, props });\n    index++;\n  }\n  return createShader('DynamicShader', { effects });\n}\n`;
    tree.forEach((node, i) => {
        if (!node._rendererProps) return;
        node._rendererProps.parent = void 0;
        node._rendererProps.shader = void 0;
        const props = JSON.stringify(node._rendererProps, null, 2);
        const effects = node._effects ? `props${i}.shader = convertEffectsToShader(${JSON.stringify(node._effects, null, 2)});` : "";
        const parent = i === 0 ? "rootNode" : `node${i - 1}`;
        output += `\nconst props${i} = ${props};\nprops${i}.parent = ${parent};\n${effects}\nconst node${i} = renderer.createNode(props${i});\n`;
    });
    return output;
}

function isFocused(el) {
    var _el$states;
    return el == null || (_el$states = el.states) == null ? void 0 : _el$states.has(Config.focusStateKey);
}

var hasFocus = isFocused;

var colorToRgba = c => `rgba(${c >> 24 & 255},${c >> 16 & 255},${c >> 8 & 255},${(c & 255) / 255})`;

function buildGradientStops(colors, stops) {
    if (!Array.isArray(colors) || colors.length === 0) return "";
    const positions = [];
    if (Array.isArray(stops) && stops.length === colors.length) for (const v of stops) {
        if (typeof v !== "number" || !isFinite(v)) {
            positions.push(0);
            continue;
        }
        let pct = v <= 1 ? v * 100 : v;
        if (pct < 0) pct = 0;
        if (pct > 100) pct = 100;
        positions.push(pct);
    } else {
        const lastIndex = colors.length - 1;
        for (let i = 0; i < colors.length; i++) positions.push(lastIndex === 0 ? 0 : i / lastIndex * 100);
    }
    if (positions.length !== colors.length) while (positions.length < colors.length) positions.push(positions.length === 0 ? 0 : 100);
    return colors.map((color, idx) => `${colorToRgba(color)} ${positions[idx].toFixed(2)}%`).join(", ");
}

function getNodeLineHeight(props) {
    return props.lineHeight || Config.fontSettings.lineHeight || 1.2 * props.fontSize;
}

function computeLegacyObjectFit(node, img, resizeMode, clipX, clipY, srcPos, supportsObjectFit, supportsObjectPosition) {
    if (supportsObjectFit && supportsObjectPosition) return;
    const containerW = node.props.w || img.naturalWidth;
    const containerH = node.props.h || img.naturalHeight;
    const naturalW = img.naturalWidth || 1;
    const naturalH = img.naturalHeight || 1;
    const fitType = (resizeMode == null ? void 0 : resizeMode.type) || (srcPos ? "none" : "fill");
    let drawW = naturalW;
    let drawH = naturalH;
    switch (fitType) {
      case "cover":
        {
            const scale = Math.max(containerW / naturalW, containerH / naturalH);
            drawW = naturalW * scale;
            drawH = naturalH * scale;
            break;
        }

      case "contain":
        {
            const scale = Math.min(containerW / naturalW, containerH / naturalH);
            drawW = naturalW * scale;
            drawH = naturalH * scale;
            break;
        }

      case "fill":
        drawW = containerW;
        drawH = containerH;
        break;
    }
    let offsetX = (containerW - drawW) * clipX;
    let offsetY = (containerH - drawH) * clipY;
    if (srcPos) {
        offsetX = -srcPos.x;
        offsetY = -srcPos.y;
    }
    const styleParts = [ "position: absolute", `width: ${Math.round(drawW)}px`, `height: ${Math.round(drawH)}px`, `left: ${Math.round(offsetX)}px`, `top: ${Math.round(offsetY)}px`, "display: block", "pointer-events: none" ];
    img.style.removeProperty("object-fit");
    img.style.removeProperty("object-position");
    if ((resizeMode == null ? void 0 : resizeMode.type) === "none") {
        styleParts[1] = `width: ${naturalW}px`;
        styleParts[2] = `height: ${naturalH}px`;
    }
    img.setAttribute("style", styleParts.join("; ") + ";");
}

function applySubTextureScaling(node, img, srcPos) {
    var _node$props$srcWidth, _node$props$srcHeight;
    if (!srcPos) return;
    const regionW = (_node$props$srcWidth = node.props.srcWidth) !== null && _node$props$srcWidth !== void 0 ? _node$props$srcWidth : srcPos.w;
    const regionH = (_node$props$srcHeight = node.props.srcHeight) !== null && _node$props$srcHeight !== void 0 ? _node$props$srcHeight : srcPos.h;
    if (!regionW || !regionH) return;
    const targetW = node.props.w || regionW;
    const targetH = node.props.h || regionH;
    const naturalW = img.naturalWidth || regionW;
    const naturalH = img.naturalHeight || regionH;
    const scaleX = targetW / regionW;
    const scaleY = targetH / regionH;
    img.style.width = naturalW + "px";
    img.style.height = naturalH + "px";
    img.style.objectFit = "none";
    img.style.objectPosition = "0 0";
    img.style.transformOrigin = "0 0";
    const translateX = Math.round(-srcPos.x * scaleX);
    const translateY = Math.round(-srcPos.y * scaleY);
    img.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scaleX}, ${scaleY})`;
    img.style.setProperty("-webkit-transform", img.style.transform);
    if (node.divBg) {
        const styleEl = node.divBg.style;
        if (styleEl.maskImage || styleEl.webkitMaskImage || /mask-image:/.test(node.divBg.getAttribute("style") || "")) {
            var _styleEl$setProperty, _styleEl$setProperty2, _styleEl$setProperty3, _styleEl$setProperty4;
            img.style.display = "none";
            const maskW = Math.round(naturalW * scaleX);
            const maskH = Math.round(naturalH * scaleY);
            const maskPosX = translateX;
            const maskPosY = translateY;
            (_styleEl$setProperty = styleEl.setProperty) == null || _styleEl$setProperty.call(styleEl, "mask-size", `${maskW}px ${maskH}px`);
            (_styleEl$setProperty2 = styleEl.setProperty) == null || _styleEl$setProperty2.call(styleEl, "mask-position", `${maskPosX}px ${maskPosY}px`);
            (_styleEl$setProperty3 = styleEl.setProperty) == null || _styleEl$setProperty3.call(styleEl, "-webkit-mask-size", `${maskW}px ${maskH}px`);
            (_styleEl$setProperty4 = styleEl.setProperty) == null || _styleEl$setProperty4.call(styleEl, "-webkit-mask-position", `${maskPosX}px ${maskPosY}px`);
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
        return progress < .5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;
    }
}

function interpolate(start, end, t) {
    return start + (end - start) * t;
}

function interpolateColor(start, end, t) {
    return (interpolate(start >> 24 & 255, end >> 24 & 255, t) << 24 | interpolate(start >> 16 & 255, end >> 16 & 255, t) << 16 | interpolate(start >> 8 & 255, end >> 8 & 255, t) << 8 | interpolate(start & 255, end & 255, t)) >>> 0;
}

function interpolateProp(name, start, end, t) {
    return name.startsWith("color") ? interpolateColor(start, end, t) : interpolate(start, end, t);
}

function compactString(input) {
    return input.replace(/\s*\n\s*/g, " ");
}

function isRenderStateInBounds(state) {
    return state === 4 || state === 8;
}

function nodeHasTextureSource(node) {
    var _node$props$texture;
    const textureType = (_node$props$texture = node.props.texture) == null ? void 0 : _node$props$texture.type;
    return !!node.props.src || textureType === TextureType.image || textureType === TextureType.subTexture;
}

function normalizeBoundsMargin(margin) {
    if (margin == null) return [ 0, 0, 0, 0 ];
    if (typeof margin === "number") return [ margin, margin, margin, margin ];
    if (Array.isArray(margin) && margin.length === 4) {
        var _margin$, _margin$2, _margin$3, _margin$4;
        return [ (_margin$ = margin[0]) !== null && _margin$ !== void 0 ? _margin$ : 0, (_margin$2 = margin[1]) !== null && _margin$2 !== void 0 ? _margin$2 : 0, (_margin$3 = margin[2]) !== null && _margin$3 !== void 0 ? _margin$3 : 0, (_margin$4 = margin[3]) !== null && _margin$4 !== void 0 ? _margin$4 : 0 ];
    }
    return [ 0, 0, 0, 0 ];
}

function computeRenderStateForNode(node) {
    var _stageRoot$props$w, _stageRoot$props$h, _node$props$boundsMar, _node$props$w, _node$props$h;
    const stageRoot = node.stage.root;
    if (!stageRoot || stageRoot === node) return null;
    const rootWidth = (_stageRoot$props$w = stageRoot.props.w) !== null && _stageRoot$props$w !== void 0 ? _stageRoot$props$w : 0;
    const rootHeight = (_stageRoot$props$h = stageRoot.props.h) !== null && _stageRoot$props$h !== void 0 ? _stageRoot$props$h : 0;
    if (rootWidth <= 0 || rootHeight <= 0) return 4;
    const rootLeft = stageRoot.absX;
    const rootTop = stageRoot.absY;
    const rootRight = rootLeft + rootWidth;
    const rootBottom = rootTop + rootHeight;
    const [marginTop, marginRight, marginBottom, marginLeft] = normalizeBoundsMargin((_node$props$boundsMar = node.props.boundsMargin) !== null && _node$props$boundsMar !== void 0 ? _node$props$boundsMar : node.stage.renderer.boundsMargin);
    const width = (_node$props$w = node.props.w) !== null && _node$props$w !== void 0 ? _node$props$w : 0;
    const height = (_node$props$h = node.props.h) !== null && _node$props$h !== void 0 ? _node$props$h : 0;
    const left = node.absX;
    const top = node.absY;
    const right = left + width;
    const bottom = top + height;
    const expandedLeft = rootLeft - marginLeft;
    const expandedTop = rootTop - marginTop;
    const expandedRight = rootRight + marginRight;
    const expandedBottom = rootBottom + marginBottom;
    if (!(right >= expandedLeft && left <= expandedRight && bottom >= expandedTop && top <= expandedBottom)) return 2;
    if (right >= rootLeft && left <= rootRight && bottom >= rootTop && top <= rootBottom) return 8;
    return 4;
}

var _document$documentEle;

var _styleRef = typeof document !== "undefined" ? ((_document$documentEle = document.documentElement) == null ? void 0 : _document$documentEle.style) || {} : {};

var supportsObjectFit = "objectFit" in _styleRef;

var supportsObjectPosition = "objectPosition" in _styleRef;

var supportsMixBlendMode = "mixBlendMode" in _styleRef;

var supportsStandardMask = "maskImage" in _styleRef;

var supportsWebkitMask = "webkitMaskImage" in _styleRef;

var supportsCssMask = supportsStandardMask || supportsWebkitMask;

var animationTasks = [];

var animationFrameRequested = false;

function requestAnimationUpdate() {
    if (!animationFrameRequested && animationTasks.length > 0) {
        animationFrameRequested = true;
        requestAnimationFrame(updateAnimations);
    }
}

function updateAnimations(time) {
    animationFrameRequested = false;
    for (let i = 0; i < animationTasks.length; i++) {
        const task = animationTasks[i];
        if (task.pausedTime != null) continue;
        const elapsed = time - task.timeStart;
        if (elapsed < task.settings.delay) {
            requestAnimationUpdate();
            continue;
        }
        const activeTime = elapsed - task.settings.delay;
        if (activeTime >= task.settings.duration) {
            if (task.settings.loop || task.iteration < task.settings.repeat - 1) {
                task.iteration++;
                task.timeStart = time - task.settings.delay;
                requestAnimationUpdate();
            } else {
                Object.assign(task.node.props, task.propsEnd);
                task.node.boundsDirty = true;
                task.node.markChildrenBoundsDirty();
                updateNodeStyles(task.node);
                task.stop();
                i--;
            }
            continue;
        }
        let t = activeTime / task.settings.duration;
        t = applyEasing(task.settings.easing, t);
        for (const prop in task.propsEnd) {
            const start = task.propsStart[prop];
            const end = task.propsEnd[prop];
            task.node.props[prop] = interpolateProp(prop, start, end, t);
        }
        updateNodeStyles(task.node);
    }
    requestAnimationUpdate();
}

var AnimationController = class {
    constructor(node, props, rawSettings) {
        var _rawSettings$duration, _rawSettings$delay, _rawSettings$easing, _rawSettings$loop, _rawSettings$repeat, _rawSettings$adaptive;
        this.node = void 0;
        this.state = "paused";
        this.stopPromise = null;
        this.stopResolve = null;
        this.propsStart = {};
        this.propsEnd = {};
        this.timeStart = performance.now();
        this.timeEnd = void 0;
        this.settings = void 0;
        this.iteration = 0;
        this.pausedTime = null;
        this.node = node;
        this.settings = {
            duration: (_rawSettings$duration = rawSettings.duration) !== null && _rawSettings$duration !== void 0 ? _rawSettings$duration : 300,
            delay: (_rawSettings$delay = rawSettings.delay) !== null && _rawSettings$delay !== void 0 ? _rawSettings$delay : 0,
            easing: (_rawSettings$easing = rawSettings.easing) !== null && _rawSettings$easing !== void 0 ? _rawSettings$easing : "linear",
            loop: (_rawSettings$loop = rawSettings.loop) !== null && _rawSettings$loop !== void 0 ? _rawSettings$loop : false,
            repeat: (_rawSettings$repeat = rawSettings.repeat) !== null && _rawSettings$repeat !== void 0 ? _rawSettings$repeat : 1,
            stopMethod: false,
            adaptiveDuration: (_rawSettings$adaptive = rawSettings.adaptiveDuration) !== null && _rawSettings$adaptive !== void 0 ? _rawSettings$adaptive : false
        };
        this.timeEnd = this.timeStart + this.settings.delay + this.settings.duration;
        for (const [prop, value] of Object.entries(props)) if (value != null && typeof value === "number") {
            this.propsStart[prop] = node.props[prop];
            this.propsEnd[prop] = value;
        }
        animationTasks.push(this);
    }
    start() {
        if (this.pausedTime != null) {
            this.timeStart += performance.now() - this.pausedTime;
            this.pausedTime = null;
        } else this.timeStart = performance.now();
        this.state = "running";
        requestAnimationUpdate();
        return this;
    }
    pause() {
        this.pausedTime = performance.now();
        this.state = "paused";
        return this;
    }
    stop() {
        const index = animationTasks.indexOf(this);
        if (index !== -1) animationTasks.splice(index, 1);
        this.state = "stopped";
        if (this.stopResolve) {
            this.stopResolve();
            this.stopResolve = null;
            this.stopPromise = null;
        }
        return this;
    }
    restore() {
        return this;
    }
    waitUntilStopped() {
        var _this$stopPromise;
        (_this$stopPromise = this.stopPromise) !== null && _this$stopPromise !== void 0 || (this.stopPromise = new Promise(resolve => {
            this.stopResolve = resolve;
        }));
        return this.stopPromise;
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
    if (parent instanceof DOMNode) elMap.get(parent).appendChild(node.div); else {
        var _node$div$parentNode;
        (_node$div$parentNode = node.div.parentNode) == null || _node$div$parentNode.removeChild(node.div);
    }
}

function buildTransformCSS(props) {
    const transforms = [];
    const {x: x, y: y} = props;
    const hasMountX = props.mountX != null && props.mountX !== 0;
    const hasMountY = props.mountY != null && props.mountY !== 0;
    if (x !== 0) transforms.push(`translateX(${x}px)`);
    if (hasMountX) transforms.push(`translateX(${-props.mountX * 100}%)`);
    if (y !== 0) transforms.push(`translateY(${y}px)`);
    if (hasMountY) transforms.push(`translateY(${-props.mountY * 100}%)`);
    if (props.rotation !== 0) transforms.push(`rotate(${props.rotation}rad)`);
    if (props.scale !== 1 && props.scale != null) transforms.push(`scale(${props.scale})`); else {
        if (props.scaleX !== 1) transforms.push(`scaleX(${props.scaleX})`);
        if (props.scaleY !== 1) transforms.push(`scaleY(${props.scaleY})`);
    }
    return transforms.join(" ");
}

function updateTransformOnly(node) {
    const transform = buildTransformCSS(node.props);
    const s = node.div.style;
    if (transform.length > 0) s.transform = `${transform}`; else s.transform = "";
    updateRenderStateIfNeeded(node);
}

function updateRenderStateIfNeeded(node) {
    if (!(node instanceof DOMNode) || node === node.stage.root) return;
    const hasTextureSrc = nodeHasTextureSource(node);
    if (hasTextureSrc && node.boundsDirty) {
        const next = computeRenderStateForNode(node);
        if (next != null) node.updateRenderState(next);
        node.boundsDirty = false;
    } else if (!hasTextureSrc) node.boundsDirty = false;
}

function applyLegacyObjectFit(node, img, srcPos) {
    var _node$props$textureOp;
    const resizeMode = (_node$props$textureOp = node.props.textureOptions) == null ? void 0 : _node$props$textureOp.resizeMode;
    computeLegacyObjectFit(node, img, resizeMode, (resizeMode == null ? void 0 : resizeMode.type) !== "contain" && (resizeMode == null ? void 0 : resizeMode.clipX) ? resizeMode == null ? void 0 : resizeMode.clipX : .5, (resizeMode == null ? void 0 : resizeMode.type) !== "contain" && (resizeMode == null ? void 0 : resizeMode.clipY) ? resizeMode == null ? void 0 : resizeMode.clipY : .5, srcPos, supportsObjectFit, supportsObjectPosition);
}

function updateNodeStyles(node) {
    const {props: props} = node;
    let style = `position: absolute; z-index: ${props.zIndex};`;
    if (props.alpha !== 1) style += `opacity: ${props.alpha};`;
    if (props.clipping) style += `overflow: hidden;`;
    {
        const transform = buildTransformCSS(props);
        if (transform.length > 0) style += `transform: ${transform};`;
    }
    if (node instanceof DOMText) {
        const textProps = node.props;
        if (textProps.color != null && textProps.color !== 0) style += `color: ${colorToRgba(textProps.color)};`;
        if (textProps.fontFamily) style += `font-family: ${textProps.fontFamily};`;
        if (textProps.fontSize) style += `font-size: ${textProps.fontSize}px;`;
        if (textProps.fontStyle !== "normal") style += `font-style: ${textProps.fontStyle};`;
        if (textProps.fontWeight !== "normal") style += `font-weight: ${textProps.fontWeight};`;
        if (textProps.fontStretch && textProps.fontStretch !== "normal") style += `font-stretch: ${textProps.fontStretch};`;
        if (textProps.lineHeight) style += `line-height: ${textProps.lineHeight}px;`;
        if (textProps.letterSpacing) style += `letter-spacing: ${textProps.letterSpacing}px;`;
        if (textProps.textAlign !== "left") style += `text-align: ${textProps.textAlign};`;
        let maxLines = textProps.maxLines || Infinity;
        switch (textProps.contain) {
          case "width":
            if (textProps.maxWidth && textProps.maxWidth > 0) {
                if (node.textAlign === "center") style += `width: ${textProps.maxWidth}px;`; else style += `max-width: ${textProps.maxWidth}px;`;
                style += `overflow: hidden;`;
            } else style += `width: 100%;`;
            break;

          case "both":
            {
                const lineHeight = getNodeLineHeight(textProps);
                const widthConstraint = textProps.maxWidth && textProps.maxWidth > 0 ? `${textProps.maxWidth}px` : `100%`;
                let height = (textProps.maxHeight && textProps.maxHeight > 0 ? textProps.maxHeight : props.h) || 0;
                if (height > 0) {
                    const maxLinesByHeight = Math.max(1, Math.floor(height / lineHeight));
                    maxLines = Math.min(maxLines, maxLinesByHeight);
                    height = Math.max(lineHeight, maxLines * lineHeight);
                } else {
                    maxLines = Number.isFinite(maxLines) ? Math.max(1, maxLines) : 1;
                    height = maxLines * lineHeight;
                }
                style += `width: ${widthConstraint}; height: ${height}px; overflow: hidden;`;
                break;
            }

          case "none":
            style += `width: -webkit-max-content;`;
            style += `width: max-content;`;
            break;
        }
        style += `white-space: pre-wrap;`;
        if (maxLines !== Infinity) style += `display: -webkit-box;\n        overflow: hidden;\n        -webkit-line-clamp: ${maxLines};\n        line-clamp: ${maxLines};\n        -webkit-box-orient: vertical;`;
        if (textProps.offsetY != null && textProps.offsetY !== 0) style += `margin-top: ${textProps.offsetY}px;`;
        if (textProps.wordBreak) {
            const wb = textProps.wordBreak;
            if (wb !== "normal") if (wb === "break-all") style += `word-break: break-all;`; else if (wb === "keep-all") style += `word-break: keep-all;`; else if (wb === "break-word") style += `word-wrap: break-word; overflow-wrap: break-word;`; else style += `overflow-wrap: break-word;`;
        }
    } else {
        var _props$shader;
        if (props.w !== 0) style += `width: ${props.w < 0 ? 0 : props.w}px;`;
        if (props.h !== 0) style += `height: ${props.h}px;`;
        const vGradient = props.colorBottom !== props.colorTop ? `linear-gradient(to bottom, ${colorToRgba(props.colorTop)}, ${colorToRgba(props.colorBottom)})` : null;
        const hGradient = props.colorLeft !== props.colorRight ? `linear-gradient(to right, ${colorToRgba(props.colorLeft)}, ${colorToRgba(props.colorRight)})` : null;
        const gradient = vGradient && hGradient ? `${vGradient}, ${hGradient}` : vGradient || hGradient;
        let srcImg = null;
        let srcPos = null;
        let rawImgSrc = null;
        if (props.texture != null && props.texture.type === TextureType.subTexture) {
            const texture = props.texture;
            srcPos = texture.props;
            rawImgSrc = texture.props.texture.props.src;
        } else if (props.src) rawImgSrc = props.src;
        if (rawImgSrc) srcImg = `url(${rawImgSrc})`;
        let bgStyle = "";
        let borderStyle = "";
        let radiusStyle = "";
        let maskStyle = "";
        let needsBackgroundLayer = false;
        let imgStyle = "";
        let hasDivBgTint = false;
        let hasTint = false;
        if (rawImgSrc) {
            var _props$textureOptions;
            hasTint = props.color !== 4294967295 && props.color !== 0;
            if (hasTint) {
                bgStyle += `background-color: ${colorToRgba(props.color)};`;
                if (srcImg) {
                    maskStyle += `mask-image: ${srcImg};`;
                    if (srcPos !== null) maskStyle += `mask-position: -${srcPos.x}px -${srcPos.y}px;`; else maskStyle += `mask-size: 100% 100%;`;
                    hasDivBgTint = true;
                }
            } else {
                if (gradient) maskStyle += `mask-image: ${gradient};`;
                if (props.placeholderColor !== 0) bgStyle += `background-color: ${colorToRgba(props.placeholderColor)};`;
            }
            const imgStyleParts = [ "position: absolute", "top: 0", "left: 0", "right: 0", "bottom: 0", "display: block", "pointer-events: none", `opacity: ${node.imageLoading ? 0 : 1}`, "transition: opacity 100ms linear" ];
            if ((_props$textureOptions = props.textureOptions.resizeMode) == null ? void 0 : _props$textureOptions.type) {
                var _resizeMode$clipX, _resizeMode$clipY;
                const resizeMode = props.textureOptions.resizeMode;
                imgStyleParts.push("width: 100%");
                imgStyleParts.push("height: 100%");
                imgStyleParts.push(`object-fit: ${resizeMode.type}`);
                const clipX = (_resizeMode$clipX = resizeMode.clipX) !== null && _resizeMode$clipX !== void 0 ? _resizeMode$clipX : .5;
                const clipY = (_resizeMode$clipY = resizeMode.clipY) !== null && _resizeMode$clipY !== void 0 ? _resizeMode$clipY : .5;
                imgStyleParts.push(`object-position: ${clipX * 100}% ${clipY * 100}%`);
            } else if (srcPos !== null) {
                imgStyleParts.push("width: auto");
                imgStyleParts.push("height: auto");
                imgStyleParts.push("object-fit: none");
                imgStyleParts.push(`object-position: -${srcPos.x}px -${srcPos.y}px`);
            } else if (props.w && !props.h) {
                imgStyleParts.push("width: 100%");
                imgStyleParts.push("height: auto");
            } else if (props.h && !props.w) {
                imgStyleParts.push("width: auto");
                imgStyleParts.push("height: 100%");
            } else {
                imgStyleParts.push("width: 100%");
                imgStyleParts.push("height: 100%");
                imgStyleParts.push("object-fit: fill");
            }
            if (hasTint) if (supportsMixBlendMode) imgStyleParts.push("mix-blend-mode: multiply"); else imgStyleParts.push("opacity: 1");
            imgStyle = imgStyleParts.join("; ") + ";";
        } else if (gradient) {
            bgStyle += `background-image: ${gradient};`;
            bgStyle += `background-repeat: no-repeat;`;
            bgStyle += `background-size: 100% 100%;`;
        } else if (props.color !== 0) bgStyle += `background-color: ${colorToRgba(props.color)};`;
        if (((_props$shader = props.shader) == null ? void 0 : _props$shader.props) != null) {
            var _shaderProps$borderG, _shaderProps$borderA;
            const shaderProps = props.shader.props;
            const borderWidth = shaderProps["border-w"];
            const borderColor = shaderProps["border-color"];
            const borderGap = (_shaderProps$borderG = shaderProps["border-gap"]) !== null && _shaderProps$borderG !== void 0 ? _shaderProps$borderG : 0;
            const borderAlign = (_shaderProps$borderA = shaderProps["border-align"]) !== null && _shaderProps$borderA !== void 0 ? _shaderProps$borderA : "inside";
            const radius = shaderProps["radius"];
            const borderWidthIsNumber = typeof borderWidth === "number";
            const borderWidthIsArray = Array.isArray(borderWidth);
            if ((borderWidthIsNumber && borderWidth !== 0 || borderWidthIsArray && borderWidth.some(w => typeof w === "number" && w !== 0)) && typeof borderColor === "number" && borderColor !== 0) {
                const rgbaColor = colorToRgba(borderColor);
                if (borderWidthIsNumber) {
                    let insideWidth = 0;
                    let outsideWidth = 0;
                    if (borderAlign === "inside") insideWidth = borderWidth; else if (borderAlign === "center") {
                        insideWidth = borderWidth / 2;
                        outsideWidth = borderWidth / 2;
                    } else outsideWidth = borderWidth;
                    outsideWidth += borderGap;
                    insideWidth -= borderGap;
                    if (insideWidth < 0) {
                        outsideWidth += insideWidth;
                        insideWidth = 0;
                    }
                    if (outsideWidth < 0) {
                        insideWidth += outsideWidth;
                        outsideWidth = 0;
                    }
                    const shadows = [];
                    if (outsideWidth > 0) shadows.push(`0 0 0 ${outsideWidth}px ${rgbaColor}`);
                    if (insideWidth > 0) shadows.push(`inset 0 0 0 ${insideWidth}px ${rgbaColor}`);
                    if (shadows.length > 0) borderStyle += `box-shadow: ${shadows.join(", ")};`;
                } else if (borderWidthIsArray) {
                    var _shaderProps$borderT, _shaderProps$borderR, _shaderProps$borderB, _shaderProps$borderL;
                    const widths = [ (_shaderProps$borderT = shaderProps["border-top"]) !== null && _shaderProps$borderT !== void 0 ? _shaderProps$borderT : borderWidth[0], (_shaderProps$borderR = shaderProps["border-right"]) !== null && _shaderProps$borderR !== void 0 ? _shaderProps$borderR : borderWidth[1], (_shaderProps$borderB = shaderProps["border-bottom"]) !== null && _shaderProps$borderB !== void 0 ? _shaderProps$borderB : borderWidth[2], (_shaderProps$borderL = shaderProps["border-left"]) !== null && _shaderProps$borderL !== void 0 ? _shaderProps$borderL : borderWidth[3] ];
                    const sides = [ "top", "right", "bottom", "left" ];
                    for (let i = 0; i < sides.length; i++) {
                        const width = widths[i];
                        if (typeof width === "number" && width !== 0) borderStyle += `border-${sides[i]}: ${width}px solid ${rgbaColor};`;
                    }
                }
            }
            if (typeof radius === "number" && radius > 0) radiusStyle += `border-radius: ${radius}px;`; else if (Array.isArray(radius) && radius.length === 4) radiusStyle += `border-radius: ${radius[0]}px ${radius[1]}px ${radius[2]}px ${radius[3]}px;`;
            if ("radial" in shaderProps) {
                const rg = shaderProps.radial;
                const colors = Array.isArray(rg == null ? void 0 : rg.colors) ? rg.colors : [];
                const stops = Array.isArray(rg == null ? void 0 : rg.stops) ? rg.stops : void 0;
                const pivot = Array.isArray(rg == null ? void 0 : rg.pivot) ? rg.pivot : [ .5, .5 ];
                const width = typeof (rg == null ? void 0 : rg.w) === "number" ? rg.w : props.w || 0;
                const height = typeof (rg == null ? void 0 : rg.h) === "number" ? rg.h : width;
                if (colors.length > 0) {
                    const gradientStops = buildGradientStops(colors, stops);
                    if (gradientStops) if (colors.length === 1) if (srcImg || gradient) maskStyle += `mask-image: linear-gradient(${gradientStops});`; else bgStyle += `background-color: ${colorToRgba(colors[0])};`; else {
                        var _pivot$, _pivot$2;
                        const isEllipse = width > 0 && height > 0 && width !== height;
                        const pivotX = ((_pivot$ = pivot[0]) !== null && _pivot$ !== void 0 ? _pivot$ : .5) * 100;
                        const pivotY = ((_pivot$2 = pivot[1]) !== null && _pivot$2 !== void 0 ? _pivot$2 : .5) * 100;
                        let sizePart = "";
                        if (width > 0 && height > 0) if (!isEllipse && width === height) sizePart = `${Math.round(width)}px`; else sizePart = `${Math.round(width)}px ${Math.round(height)}px`; else sizePart = "closest-side";
                        const radialGradient = `radial-gradient(${isEllipse ? "ellipse" : "circle"} ${sizePart} at ${pivotX.toFixed(2)}% ${pivotY.toFixed(2)}%, ${gradientStops})`;
                        if (srcImg || gradient) maskStyle += `mask-image: ${radialGradient};`; else {
                            bgStyle += `background-image: ${radialGradient};`;
                            bgStyle += `background-repeat: no-repeat;`;
                            bgStyle += `background-size: 100% 100%;`;
                        }
                    }
                }
            }
            if ("linear" in shaderProps) {
                const lg = shaderProps.linear;
                const colors = Array.isArray(lg == null ? void 0 : lg.colors) ? lg.colors : [];
                const stops = Array.isArray(lg == null ? void 0 : lg.stops) ? lg.stops : void 0;
                const angleRad = typeof (lg == null ? void 0 : lg.angle) === "number" ? lg.angle : 0;
                if (colors.length > 0) {
                    const gradientStops = buildGradientStops(colors, stops);
                    if (gradientStops) if (colors.length === 1) if (srcImg || gradient) maskStyle += `mask-image: linear-gradient(${gradientStops});`; else bgStyle += `background-color: ${colorToRgba(colors[0])};`; else {
                        const linearGradient = `linear-gradient(${(180 * (angleRad / Math.PI - 1)).toFixed(2)}deg, ${gradientStops})`;
                        if (srcImg || gradient) maskStyle += `mask-image: ${linearGradient};`; else {
                            bgStyle += `background-image: ${linearGradient};`;
                            bgStyle += `background-repeat: no-repeat;`;
                            bgStyle += `background-size: 100% 100%;`;
                        }
                    }
                }
            }
        }
        if (maskStyle !== "") {
            if (!supportsStandardMask && supportsWebkitMask) maskStyle = maskStyle.replace(/mask-/g, "-webkit-mask-"); else if (!supportsCssMask) maskStyle = "";
            if (maskStyle !== "") needsBackgroundLayer = true;
        }
        if (!needsBackgroundLayer && rawImgSrc) needsBackgroundLayer = hasTint || !!gradient || srcPos !== null || radiusStyle !== "" || bgStyle !== "";
        style += radiusStyle;
        if (needsBackgroundLayer) {
            if (node.divBg == null) {
                node.divBg = document.createElement("div");
                node.div.insertBefore(node.divBg, node.div.firstChild);
            } else if (node.divBg.parentElement !== node.div) node.div.insertBefore(node.divBg, node.div.firstChild);
            if (rawImgSrc != null && srcPos != null && !!node.imgEl && node.imgEl.complete && node.imgEl.dataset.rawSrc === rawImgSrc) node.imageLoading = true;
            let bgLayerStyle = "position: absolute; top:0; left:0; right:0; bottom:0; z-index: -1; pointer-events: none;";
            if ((srcPos !== null || radiusStyle !== "") && !hasDivBgTint) bgLayerStyle += "overflow: hidden;";
            if (bgStyle) bgLayerStyle += bgStyle;
            if (maskStyle) bgLayerStyle += maskStyle;
            if (hasDivBgTint && srcPos != null && node.imageLoading) bgLayerStyle += "opacity: 0;";
            node.divBg.setAttribute("style", bgLayerStyle + radiusStyle);
            if (rawImgSrc) {
                if (!node.imgEl) {
                    node.imgEl = document.createElement("img");
                    node.imgEl.alt = "";
                    node.imgEl.setAttribute("aria-hidden", "true");
                    node.imgEl.setAttribute("loading", "lazy");
                    node.imgEl.removeAttribute("src");
                    node.imgEl.addEventListener("load", () => {
                        const payload = {
                            type: "texture",
                            dimensions: {
                                w: node.imgEl.naturalWidth,
                                h: node.imgEl.naturalHeight
                            }
                        };
                        node.imgEl.style.display = "";
                        applySubTextureScaling(node, node.imgEl, node.lazyImageSubTextureProps);
                        if (!node.lazyImageSubTextureProps) applyLegacyObjectFit(node, node.imgEl, null);
                        if (node.imgEl) {
                            node.imageLoading = false;
                            node.imgEl.style.opacity = "1";
                        }
                        node.showBackgroundLayer();
                        node.emit("loaded", payload);
                    });
                    node.imgEl.addEventListener("error", () => {
                        var _node$imgEl;
                        node.imageLoading = false;
                        node.showBackgroundLayer();
                        if (node.imgEl) {
                            node.imgEl.removeAttribute("src");
                            node.imgEl.style.display = "none";
                            node.imgEl.removeAttribute("data-rawSrc");
                        }
                        const failedSrc = ((_node$imgEl = node.imgEl) == null ? void 0 : _node$imgEl.dataset.pendingSrc) || node.lazyImagePendingSrc || "";
                        const payload = {
                            type: "texture",
                            error: new Error(`Failed to load image: ${failedSrc}`)
                        };
                        node.emit("failed", payload);
                    });
                }
                node.lazyImagePendingSrc = rawImgSrc;
                node.lazyImageSubTextureProps = srcPos;
                node.imgEl.dataset.pendingSrc = rawImgSrc;
                if (node.imgEl.parentElement !== node.divBg) node.divBg.appendChild(node.imgEl);
                node.imgEl.setAttribute("style", imgStyle + radiusStyle);
                if (hasDivBgTint) node.imgEl.style.visibility = "hidden";
                if (isRenderStateInBounds(node.renderState)) node.applyPendingImageSrc(); else if (!node.imgEl.dataset.rawSrc) node.imgEl.removeAttribute("src");
                if (srcPos && node.imgEl.complete && node.imgEl.dataset.rawSrc === rawImgSrc) {
                    applySubTextureScaling(node, node.imgEl, srcPos);
                    if (node.imageLoading) {
                        node.imageLoading = false;
                        node.imgEl.style.opacity = "1";
                        node.showBackgroundLayer();
                    }
                }
                if (!srcPos && node.imgEl.complete && (!supportsObjectFit || !supportsObjectPosition) && node.imgEl.dataset.rawSrc === rawImgSrc) applyLegacyObjectFit(node, node.imgEl, srcPos);
            } else {
                node.lazyImagePendingSrc = null;
                node.lazyImageSubTextureProps = null;
                if (node.imgEl) {
                    node.imgEl.remove();
                    node.imgEl = void 0;
                }
            }
        } else if (rawImgSrc) {
            if (node.divBg) {
                node.divBg.remove();
                node.divBg = void 0;
            }
            if (srcPos != null && !!node.imgEl && node.imgEl.complete && node.imgEl.dataset.rawSrc === rawImgSrc) node.imageLoading = true;
            if (!node.imgEl) {
                node.imgEl = document.createElement("img");
                node.imgEl.alt = "";
                node.imgEl.setAttribute("aria-hidden", "true");
                node.imgEl.setAttribute("loading", "lazy");
                node.imgEl.removeAttribute("src");
                node.imgEl.addEventListener("load", () => {
                    const payload = {
                        type: "texture",
                        dimensions: {
                            w: node.imgEl.naturalWidth,
                            h: node.imgEl.naturalHeight
                        }
                    };
                    node.imgEl.style.display = "";
                    applySubTextureScaling(node, node.imgEl, node.lazyImageSubTextureProps);
                    if (!node.lazyImageSubTextureProps) applyLegacyObjectFit(node, node.imgEl, null);
                    if (node.imgEl) {
                        node.imageLoading = false;
                        node.imgEl.style.opacity = "1";
                    }
                    node.emit("loaded", payload);
                });
                node.imgEl.addEventListener("error", () => {
                    var _node$imgEl2;
                    node.imageLoading = false;
                    if (node.imgEl) {
                        node.imgEl.removeAttribute("src");
                        node.imgEl.style.display = "none";
                        node.imgEl.removeAttribute("data-rawSrc");
                    }
                    const failedSrc = ((_node$imgEl2 = node.imgEl) == null ? void 0 : _node$imgEl2.dataset.pendingSrc) || node.lazyImagePendingSrc || "";
                    const payload = {
                        type: "texture",
                        error: new Error(`Failed to load image: ${failedSrc}`)
                    };
                    node.emit("failed", payload);
                });
            }
            node.lazyImagePendingSrc = rawImgSrc;
            node.lazyImageSubTextureProps = srcPos;
            node.imgEl.dataset.pendingSrc = rawImgSrc;
            if (node.imgEl.parentElement !== node.div) node.div.appendChild(node.imgEl);
            node.imgEl.setAttribute("style", imgStyle + radiusStyle);
            if (isRenderStateInBounds(node.renderState)) node.applyPendingImageSrc(); else if (!node.imgEl.dataset.rawSrc) node.imgEl.removeAttribute("src");
            if (srcPos && node.imgEl.complete && node.imgEl.dataset.rawSrc === rawImgSrc) {
                applySubTextureScaling(node, node.imgEl, srcPos);
                if (node.imageLoading) {
                    node.imageLoading = false;
                    node.imgEl.style.opacity = "1";
                }
            }
            if (!srcPos && node.imgEl.complete && (!supportsObjectFit || !supportsObjectPosition) && node.imgEl.dataset.rawSrc === rawImgSrc) applyLegacyObjectFit(node, node.imgEl, srcPos);
        } else {
            node.lazyImagePendingSrc = null;
            node.lazyImageSubTextureProps = null;
            if (node.imgEl) {
                node.imgEl.remove();
                node.imgEl = void 0;
            }
            if (node.divBg) {
                node.divBg.remove();
                node.divBg = void 0;
            }
            style += bgStyle;
        }
        if (needsBackgroundLayer && maskStyle !== "") {
            if (node.divBorder == null) {
                node.divBorder = document.createElement("div");
                node.div.appendChild(node.divBorder);
            }
        } else if (node.divBorder) {
            node.divBorder.remove();
            node.divBorder = void 0;
        }
        if (node.divBorder == null) style += borderStyle; else {
            let borderLayerStyle = "position: absolute; top:0; left:0; right:0; bottom:0; z-index: -1; pointer-events: none;";
            borderLayerStyle += borderStyle;
            node.divBorder.setAttribute("style", borderLayerStyle + radiusStyle);
        }
    }
    const newStyle = compactString(style);
    if (node._lastStyleStr !== newStyle) {
        node._lastStyleStr = newStyle;
        node.div.setAttribute("style", newStyle);
    }
    updateRenderStateIfNeeded(node);
}

var textNodesToMeasure = new Set;

var containTextNodes = new Set;

var fontLoadingListenerSetup = false;

function getElSize(node) {
    var _Config$rendererOptio, _Config$rendererOptio2;
    const rawRect = node.div.getBoundingClientRect();
    const dpr = (_Config$rendererOptio = (_Config$rendererOptio2 = Config.rendererOptions) == null ? void 0 : _Config$rendererOptio2.deviceLogicalPixelRatio) !== null && _Config$rendererOptio !== void 0 ? _Config$rendererOptio : 1;
    let width = rawRect.width / dpr;
    let height = rawRect.height / dpr;
    for (;;) {
        if (node.props.scale != null && node.props.scale !== 1) {
            width /= node.props.scale;
            height /= node.props.scale;
        } else {
            width /= node.props.scaleX;
            height /= node.props.scaleY;
        }
        if (node.parent instanceof DOMNode) node = node.parent; else break;
    }
    return {
        width: width,
        height: height
    };
}

function updateDOMTextSize(node, emitLoaded = true) {
    let size;
    let dimensionsChanged = false;
    switch (node.contain) {
      case "width":
        size = getElSize(node);
        if (node.props.w !== size.width) {
            node.w = size.width;
            dimensionsChanged = true;
        }
        if (node.props.h !== size.height) {
            node.h = size.height;
            dimensionsChanged = true;
        }
        break;

      case "none":
        size = getElSize(node);
        if (node.props.h !== size.height || node.props.w !== size.width) {
            node.w = size.width;
            node.h = size.height;
            dimensionsChanged = true;
        }
        break;
    }
    if (emitLoaded && (!node.loaded || dimensionsChanged)) {
        const payload = {
            type: "text",
            dimensions: {
                w: node.w,
                h: node.h
            }
        };
        node.emit("loaded", payload);
        node.loaded = true;
    }
}

function updateDOMTextMeasurements() {
    textNodesToMeasure.forEach(node => updateDOMTextSize(node));
    textNodesToMeasure.clear();
}

function shouldTrackContainTextNode(node) {
    return node.contain === "width" || node.contain === "none";
}

function syncContainTextNodeTracking(node) {
    if (shouldTrackContainTextNode(node)) containTextNodes.add(node); else containTextNodes.delete(node);
}

function scheduleContainTextNodesMeasurement() {
    if (containTextNodes.size === 0) return;
    containTextNodes.forEach(node => {
        if (node.div.isConnected) textNodesToMeasure.add(node);
    });
    if (textNodesToMeasure.size > 0) setTimeout(updateDOMTextMeasurements);
}

function setupFontLoadingListeners() {
    if (fontLoadingListenerSetup) return;
    if (typeof document === "undefined" || !document.fonts) return;
    const fonts = document.fonts;
    if (typeof fonts.addEventListener === "function") fonts.addEventListener("loadingdone", scheduleContainTextNodesMeasurement);
    fontLoadingListenerSetup = true;
}

function scheduleUpdateDOMTextMeasurement(node) {
    setupFontLoadingListeners();
    if (textNodesToMeasure.size === 0) if (typeof document !== "undefined" && "fonts" in document) {
        const fonts = document.fonts;
        if (fonts.status === "loaded") setTimeout(updateDOMTextMeasurements); else if (fonts.ready != null && typeof fonts.ready.then === "function") fonts.ready.then(updateDOMTextMeasurements); else setTimeout(updateDOMTextMeasurements, 500);
    } else setTimeout(updateDOMTextMeasurements, 500);
    textNodesToMeasure.add(node);
}

function updateNodeData(node) {
    const data = node.data;
    for (const key in data) {
        const keyValue = data[key];
        if (keyValue === void 0) node.div.removeAttribute("data-" + key); else node.div.setAttribute("data-" + key, String(keyValue));
    }
}

function resolveNodeDefaults(props) {
    var _props$color, _props$x, _props$y, _props$w, _props$h, _props$alpha, _props$ignoreParentAl, _props$autosize, _props$boundsMargin, _props$clipping, _props$colorTop, _props$colorBottom, _props$colorLeft, _props$colorRight, _ref, _ref2, _props$colorBl, _ref3, _ref4, _props$colorBr, _ref5, _ref6, _props$colorTl, _ref7, _ref8, _props$colorTr, _props$zIndex, _props$parent, _props$texture, _props$textureOptions2, _props$shader2, _props$src, _props$scale, _ref9, _props$scaleX, _ref10, _props$scaleY, _props$mount, _ref11, _props$mountX, _ref12, _props$mountY, _props$pivot, _ref13, _props$pivotX, _ref14, _props$pivotY, _props$rotation, _props$rtt, _props$placeholderCol;
    const color = (_props$color = props.color) !== null && _props$color !== void 0 ? _props$color : 0;
    return {
        x: (_props$x = props.x) !== null && _props$x !== void 0 ? _props$x : 0,
        y: (_props$y = props.y) !== null && _props$y !== void 0 ? _props$y : 0,
        w: (_props$w = props.w) !== null && _props$w !== void 0 ? _props$w : 0,
        h: (_props$h = props.h) !== null && _props$h !== void 0 ? _props$h : 0,
        alpha: (_props$alpha = props.alpha) !== null && _props$alpha !== void 0 ? _props$alpha : 1,
        ignoreParentAlpha: (_props$ignoreParentAl = props.ignoreParentAlpha) !== null && _props$ignoreParentAl !== void 0 ? _props$ignoreParentAl : false,
        autosize: (_props$autosize = props.autosize) !== null && _props$autosize !== void 0 ? _props$autosize : false,
        boundsMargin: (_props$boundsMargin = props.boundsMargin) !== null && _props$boundsMargin !== void 0 ? _props$boundsMargin : null,
        clipping: (_props$clipping = props.clipping) !== null && _props$clipping !== void 0 ? _props$clipping : false,
        color: color,
        colorTop: (_props$colorTop = props.colorTop) !== null && _props$colorTop !== void 0 ? _props$colorTop : color,
        colorBottom: (_props$colorBottom = props.colorBottom) !== null && _props$colorBottom !== void 0 ? _props$colorBottom : color,
        colorLeft: (_props$colorLeft = props.colorLeft) !== null && _props$colorLeft !== void 0 ? _props$colorLeft : color,
        colorRight: (_props$colorRight = props.colorRight) !== null && _props$colorRight !== void 0 ? _props$colorRight : color,
        colorBl: (_ref = (_ref2 = (_props$colorBl = props.colorBl) !== null && _props$colorBl !== void 0 ? _props$colorBl : props.colorBottom) !== null && _ref2 !== void 0 ? _ref2 : props.colorLeft) !== null && _ref !== void 0 ? _ref : color,
        colorBr: (_ref3 = (_ref4 = (_props$colorBr = props.colorBr) !== null && _props$colorBr !== void 0 ? _props$colorBr : props.colorBottom) !== null && _ref4 !== void 0 ? _ref4 : props.colorRight) !== null && _ref3 !== void 0 ? _ref3 : color,
        colorTl: (_ref5 = (_ref6 = (_props$colorTl = props.colorTl) !== null && _props$colorTl !== void 0 ? _props$colorTl : props.colorTop) !== null && _ref6 !== void 0 ? _ref6 : props.colorLeft) !== null && _ref5 !== void 0 ? _ref5 : color,
        colorTr: (_ref7 = (_ref8 = (_props$colorTr = props.colorTr) !== null && _props$colorTr !== void 0 ? _props$colorTr : props.colorTop) !== null && _ref8 !== void 0 ? _ref8 : props.colorRight) !== null && _ref7 !== void 0 ? _ref7 : color,
        zIndex: (_props$zIndex = props.zIndex) !== null && _props$zIndex !== void 0 ? _props$zIndex : 0,
        parent: (_props$parent = props.parent) !== null && _props$parent !== void 0 ? _props$parent : null,
        texture: (_props$texture = props.texture) !== null && _props$texture !== void 0 ? _props$texture : null,
        textureOptions: (_props$textureOptions2 = props.textureOptions) !== null && _props$textureOptions2 !== void 0 ? _props$textureOptions2 : {},
        shader: (_props$shader2 = props.shader) !== null && _props$shader2 !== void 0 ? _props$shader2 : defaultShader,
        src: (_props$src = props.src) !== null && _props$src !== void 0 ? _props$src : null,
        srcHeight: props.srcHeight,
        srcWidth: props.srcWidth,
        srcX: props.srcX,
        srcY: props.srcY,
        scale: (_props$scale = props.scale) !== null && _props$scale !== void 0 ? _props$scale : null,
        scaleX: (_ref9 = (_props$scaleX = props.scaleX) !== null && _props$scaleX !== void 0 ? _props$scaleX : props.scale) !== null && _ref9 !== void 0 ? _ref9 : 1,
        scaleY: (_ref10 = (_props$scaleY = props.scaleY) !== null && _props$scaleY !== void 0 ? _props$scaleY : props.scale) !== null && _ref10 !== void 0 ? _ref10 : 1,
        mount: (_props$mount = props.mount) !== null && _props$mount !== void 0 ? _props$mount : 0,
        mountX: (_ref11 = (_props$mountX = props.mountX) !== null && _props$mountX !== void 0 ? _props$mountX : props.mount) !== null && _ref11 !== void 0 ? _ref11 : 0,
        mountY: (_ref12 = (_props$mountY = props.mountY) !== null && _props$mountY !== void 0 ? _props$mountY : props.mount) !== null && _ref12 !== void 0 ? _ref12 : 0,
        pivot: (_props$pivot = props.pivot) !== null && _props$pivot !== void 0 ? _props$pivot : .5,
        pivotX: (_ref13 = (_props$pivotX = props.pivotX) !== null && _props$pivotX !== void 0 ? _props$pivotX : props.pivot) !== null && _ref13 !== void 0 ? _ref13 : .5,
        pivotY: (_ref14 = (_props$pivotY = props.pivotY) !== null && _props$pivotY !== void 0 ? _props$pivotY : props.pivot) !== null && _ref14 !== void 0 ? _ref14 : .5,
        rotation: (_props$rotation = props.rotation) !== null && _props$rotation !== void 0 ? _props$rotation : 0,
        rtt: (_props$rtt = props.rtt) !== null && _props$rtt !== void 0 ? _props$rtt : false,
        placeholderColor: (_props$placeholderCol = props.placeholderColor) !== null && _props$placeholderCol !== void 0 ? _props$placeholderCol : 0,
        data: {},
        imageType: props.imageType
    };
}

function resolveTextNodeDefaults(props) {
    var _props$text, _props$textRendererOv, _props$fontSize, _props$fontFamily, _props$fontStyle, _props$fontWeight, _props$forceLoad, _props$textAlign, _props$contain, _props$offsetY, _props$letterSpacing, _props$lineHeight, _props$maxLines, _props$maxWidth, _props$maxHeight, _props$verticalAlign, _props$overflowSuffix, _props$wordBreak;
    return {
        ...resolveNodeDefaults(props),
        text: (_props$text = props.text) !== null && _props$text !== void 0 ? _props$text : "",
        textRendererOverride: (_props$textRendererOv = props.textRendererOverride) !== null && _props$textRendererOv !== void 0 ? _props$textRendererOv : null,
        fontSize: (_props$fontSize = props.fontSize) !== null && _props$fontSize !== void 0 ? _props$fontSize : 16,
        fontFamily: (_props$fontFamily = props.fontFamily) !== null && _props$fontFamily !== void 0 ? _props$fontFamily : "sans-serif",
        fontStyle: (_props$fontStyle = props.fontStyle) !== null && _props$fontStyle !== void 0 ? _props$fontStyle : "normal",
        fontWeight: (_props$fontWeight = props.fontWeight) !== null && _props$fontWeight !== void 0 ? _props$fontWeight : "normal",
        forceLoad: (_props$forceLoad = props.forceLoad) !== null && _props$forceLoad !== void 0 ? _props$forceLoad : false,
        textAlign: (_props$textAlign = props.textAlign) !== null && _props$textAlign !== void 0 ? _props$textAlign : "left",
        contain: (_props$contain = props.contain) !== null && _props$contain !== void 0 ? _props$contain : "none",
        offsetY: (_props$offsetY = props.offsetY) !== null && _props$offsetY !== void 0 ? _props$offsetY : 0,
        letterSpacing: (_props$letterSpacing = props.letterSpacing) !== null && _props$letterSpacing !== void 0 ? _props$letterSpacing : 0,
        lineHeight: (_props$lineHeight = props.lineHeight) !== null && _props$lineHeight !== void 0 ? _props$lineHeight : 0,
        maxLines: (_props$maxLines = props.maxLines) !== null && _props$maxLines !== void 0 ? _props$maxLines : 0,
        maxWidth: (_props$maxWidth = props.maxWidth) !== null && _props$maxWidth !== void 0 ? _props$maxWidth : 0,
        maxHeight: (_props$maxHeight = props.maxHeight) !== null && _props$maxHeight !== void 0 ? _props$maxHeight : 0,
        verticalAlign: (_props$verticalAlign = props.verticalAlign) !== null && _props$verticalAlign !== void 0 ? _props$verticalAlign : "middle",
        overflowSuffix: (_props$overflowSuffix = props.overflowSuffix) !== null && _props$overflowSuffix !== void 0 ? _props$overflowSuffix : "...",
        wordBreak: (_props$wordBreak = props.wordBreak) !== null && _props$wordBreak !== void 0 ? _props$wordBreak : "overflow"
    };
}

var defaultShader = {
    shaderType: "",
    props: void 0
};

var lastNodeId = 0;

var CoreNodeRenderStateMap = new Map([ [ 0, "init" ], [ 2, "outOfBounds" ], [ 4, "inBounds" ], [ 8, "inViewport" ] ]);

var DOMNode = class DOMNode extends EventEmitter {
    constructor(stage, props) {
        super();
        this.stage = void 0;
        this.props = void 0;
        this.div = document.createElement("div");
        this.divBg = void 0;
        this.divBorder = void 0;
        this.imgEl = void 0;
        this.imageLoading = false;
        this.lazyImagePendingSrc = null;
        this.lazyImageSubTextureProps = null;
        this.boundsDirty = true;
        this.children = new Set;
        this._lastStyleStr = "";
        this.id = ++lastNodeId;
        this.renderState = 0;
        this.preventCleanup = true;
        this.animate = animate;
        this.stage = stage;
        this.props = props;
        this.div._node = this;
        this.div.setAttribute("data-id", String(this.id));
        elMap.set(this, this.div);
        const parent = this.props.parent;
        if (parent instanceof DOMNode) parent.children.add(this);
        updateNodeParent(this);
        updateNodeStyles(this);
        updateNodeData(this);
    }
    destroy() {
        var _this$div$parentNode;
        elMap.delete(this);
        const parent = this.props.parent;
        if (parent instanceof DOMNode) parent.children.delete(this);
        (_this$div$parentNode = this.div.parentNode) == null || _this$div$parentNode.removeChild(this.div);
    }
    get parent() {
        return this.props.parent;
    }
    set parent(value) {
        if (this.props.parent === value) return;
        const prevParent = this.props.parent;
        if (prevParent instanceof DOMNode) {
            prevParent.children.delete(this);
            prevParent.markChildrenBoundsDirty();
        }
        this.props.parent = value;
        if (value instanceof DOMNode) {
            value.children.add(this);
            value.markChildrenBoundsDirty();
        }
        this.boundsDirty = true;
        this.markChildrenBoundsDirty();
        updateNodeParent(this);
    }
    markChildrenBoundsDirty() {
        for (const child of this.children) {
            child.boundsDirty = true;
            if (child !== child.stage.root) {
                if (nodeHasTextureSource(child)) {
                    const nextState = computeRenderStateForNode(child);
                    if (nextState != null) child.updateRenderState(nextState);
                }
                child.boundsDirty = false;
            }
            child.markChildrenBoundsDirty();
        }
    }
    updateRenderState(renderState) {
        if (renderState === this.renderState) return;
        const previous = this.renderState;
        this.renderState = renderState;
        const event = CoreNodeRenderStateMap.get(renderState);
        if (isRenderStateInBounds(renderState)) this.applyPendingImageSrc();
        if (event && event !== "init") this.emit(event, {
            previous: previous,
            current: renderState
        });
        if (this.imgEl) this.imgEl.dataset.state = event;
    }
    showBackgroundLayer() {
        if (this.divBg) this.divBg.style.opacity = "1";
    }
    hideMaskedBackgroundLayer() {
        if (this.divBg && (this.divBg.style.maskImage || this.divBg.style.webkitMaskImage)) this.divBg.style.opacity = "0";
    }
    applyPendingImageSrc() {
        if (!this.imgEl) return;
        const pendingSrc = this.lazyImagePendingSrc;
        if (!pendingSrc) return;
        if (this.imgEl.dataset.rawSrc === pendingSrc) return;
        this.imageLoading = true;
        this.imgEl.style.opacity = "0";
        this.hideMaskedBackgroundLayer();
        this.imgEl.style.display = "";
        this.imgEl.dataset.pendingSrc = pendingSrc;
        if (pendingSrc.startsWith("data:")) this.imgEl.removeAttribute("crossorigin"); else this.imgEl.crossOrigin = "anonymous";
        this.imgEl.src = pendingSrc;
        this.imgEl.dataset.rawSrc = pendingSrc;
        this.imgEl.dataset.pendingSrc = "";
    }
    get x() {
        return this.props.x;
    }
    set x(v) {
        if (this.props.x === v) return;
        this.props.x = v;
        this.boundsDirty = true;
        this.markChildrenBoundsDirty();
        updateTransformOnly(this);
    }
    get y() {
        return this.props.y;
    }
    set y(v) {
        if (this.props.y === v) return;
        this.props.y = v;
        this.boundsDirty = true;
        this.markChildrenBoundsDirty();
        updateTransformOnly(this);
    }
    get w() {
        return this.props.w;
    }
    set w(v) {
        if (this.props.w === v) return;
        this.props.w = v;
        this.boundsDirty = true;
        this.markChildrenBoundsDirty();
        updateNodeStyles(this);
    }
    get h() {
        return this.props.h;
    }
    set h(v) {
        if (this.props.h === v) return;
        this.props.h = v;
        this.boundsDirty = true;
        this.markChildrenBoundsDirty();
        updateNodeStyles(this);
    }
    get width() {
        return this.props.w;
    }
    set width(v) {
        if (this.props.w === v) return;
        this.props.w = v;
        this.boundsDirty = true;
        this.markChildrenBoundsDirty();
        updateNodeStyles(this);
    }
    get height() {
        return this.props.h;
    }
    set height(v) {
        if (this.props.h === v) return;
        this.props.h = v;
        this.boundsDirty = true;
        this.markChildrenBoundsDirty();
        updateNodeStyles(this);
    }
    get alpha() {
        return this.props.alpha;
    }
    set alpha(v) {
        this.props.alpha = v;
        updateNodeStyles(this);
    }
    get autosize() {
        return this.props.autosize;
    }
    set autosize(v) {
        this.props.autosize = v;
        updateNodeStyles(this);
    }
    get clipping() {
        return this.props.clipping;
    }
    set clipping(v) {
        this.props.clipping = v;
        updateNodeStyles(this);
    }
    get color() {
        return this.props.color;
    }
    set color(v) {
        this.props.color = v;
        updateNodeStyles(this);
    }
    get colorTop() {
        return this.props.colorTop;
    }
    set colorTop(v) {
        this.props.colorTop = v;
        updateNodeStyles(this);
    }
    get colorBottom() {
        return this.props.colorBottom;
    }
    set colorBottom(v) {
        this.props.colorBottom = v;
        updateNodeStyles(this);
    }
    get colorLeft() {
        return this.props.colorLeft;
    }
    set colorLeft(v) {
        this.props.colorLeft = v;
        updateNodeStyles(this);
    }
    get colorRight() {
        return this.props.colorRight;
    }
    set colorRight(v) {
        this.props.colorRight = v;
        updateNodeStyles(this);
    }
    get colorTl() {
        return this.props.colorTl;
    }
    set colorTl(v) {
        this.props.colorTl = v;
        updateNodeStyles(this);
    }
    get colorTr() {
        return this.props.colorTr;
    }
    set colorTr(v) {
        this.props.colorTr = v;
        updateNodeStyles(this);
    }
    get colorBr() {
        return this.props.colorBr;
    }
    set colorBr(v) {
        this.props.colorBr = v;
        updateNodeStyles(this);
    }
    get colorBl() {
        return this.props.colorBl;
    }
    set colorBl(v) {
        this.props.colorBl = v;
        updateNodeStyles(this);
    }
    get zIndex() {
        return this.props.zIndex;
    }
    set zIndex(v) {
        if (this.props.zIndex === v) return;
        this.props.zIndex = Math.ceil(v);
        updateNodeStyles(this);
    }
    get texture() {
        return this.props.texture;
    }
    set texture(v) {
        if (this.props.texture === v) return;
        this.props.texture = v;
        this.boundsDirty = true;
        updateNodeStyles(this);
    }
    get textureOptions() {
        return this.props.textureOptions;
    }
    set textureOptions(v) {
        this.props.textureOptions = v;
        updateNodeStyles(this);
    }
    get src() {
        return this.props.src;
    }
    set src(v) {
        if (this.props.src === v) return;
        this.props.src = v;
        this.boundsDirty = true;
        updateNodeStyles(this);
    }
    get scale() {
        var _this$props$scale;
        return (_this$props$scale = this.props.scale) !== null && _this$props$scale !== void 0 ? _this$props$scale : 1;
    }
    set scale(v) {
        if (this.props.scale === v) return;
        this.props.scale = v;
        this.boundsDirty = true;
        this.markChildrenBoundsDirty();
        updateTransformOnly(this);
    }
    get scaleX() {
        return this.props.scaleX;
    }
    set scaleX(v) {
        if (this.props.scaleX === v) return;
        this.props.scaleX = v;
        this.boundsDirty = true;
        this.markChildrenBoundsDirty();
        updateTransformOnly(this);
    }
    get scaleY() {
        return this.props.scaleY;
    }
    set scaleY(v) {
        if (this.props.scaleY === v) return;
        this.props.scaleY = v;
        this.boundsDirty = true;
        this.markChildrenBoundsDirty();
        updateTransformOnly(this);
    }
    get mount() {
        return this.props.mount;
    }
    set mount(v) {
        if (this.props.mount === v) return;
        this.props.mount = v;
        this.boundsDirty = true;
        this.markChildrenBoundsDirty();
        updateTransformOnly(this);
    }
    get mountX() {
        return this.props.mountX;
    }
    set mountX(v) {
        if (this.props.mountX === v) return;
        this.props.mountX = v;
        this.boundsDirty = true;
        this.markChildrenBoundsDirty();
        updateTransformOnly(this);
    }
    get mountY() {
        return this.props.mountY;
    }
    set mountY(v) {
        if (this.props.mountY === v) return;
        this.props.mountY = v;
        this.boundsDirty = true;
        this.markChildrenBoundsDirty();
        updateTransformOnly(this);
    }
    get pivot() {
        return this.props.pivot;
    }
    set pivot(v) {
        if (this.props.pivot === v) return;
        this.props.pivot = v;
        this.boundsDirty = true;
        this.markChildrenBoundsDirty();
        updateNodeStyles(this);
    }
    get pivotX() {
        return this.props.pivotX;
    }
    set pivotX(v) {
        if (this.props.pivotX === v) return;
        this.props.pivotX = v;
        this.boundsDirty = true;
        this.markChildrenBoundsDirty();
        updateNodeStyles(this);
    }
    get pivotY() {
        return this.props.pivotY;
    }
    set pivotY(v) {
        if (this.props.pivotY === v) return;
        this.props.pivotY = v;
        this.boundsDirty = true;
        this.markChildrenBoundsDirty();
        updateNodeStyles(this);
    }
    get rotation() {
        return this.props.rotation;
    }
    set rotation(v) {
        if (this.props.rotation === v) return;
        this.props.rotation = v;
        this.boundsDirty = true;
        this.markChildrenBoundsDirty();
        updateTransformOnly(this);
    }
    get rtt() {
        return this.props.rtt;
    }
    set rtt(v) {
        this.props.rtt = v;
        updateNodeStyles(this);
    }
    get shader() {
        return this.props.shader;
    }
    set shader(v) {
        this.props.shader = v;
        updateNodeStyles(this);
    }
    get data() {
        return this.props.data;
    }
    set data(v) {
        this.props.data = v;
        updateNodeData(this);
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
        this.props.boundsMargin = value;
        this.boundsDirty = true;
        this.markChildrenBoundsDirty();
    }
    get ignoreParentAlpha() {
        return this.props.ignoreParentAlpha;
    }
    set ignoreParentAlpha(v) {
        this.props.ignoreParentAlpha = v;
        updateNodeStyles(this);
    }
    get placeholderColor() {
        return this.props.placeholderColor;
    }
    set placeholderColor(v) {
        this.props.placeholderColor = v;
        updateNodeStyles(this);
    }
    get absX() {
        const parent = this.props.parent;
        return this.x + -this.w * this.mountX + (parent instanceof DOMNode ? parent.absX : 0);
    }
    get absY() {
        const parent = this.props.parent;
        return this.y + -this.h * this.mountY + (parent instanceof DOMNode ? parent.absY : 0);
    }
};

var DOMText = class extends DOMNode {
    constructor(stage, props) {
        super(stage, props);
        this.props = void 0;
        this.loaded = false;
        this.props = props;
        this.div.innerText = props.text;
        updateNodeStyles(this);
        updateDOMTextSize(this, false);
        syncContainTextNodeTracking(this);
        scheduleUpdateDOMTextMeasurement(this);
    }
    destroy() {
        textNodesToMeasure.delete(this);
        containTextNodes.delete(this);
        super.destroy();
    }
    get text() {
        return this.props.text;
    }
    set text(v) {
        if (this.props.text === v) return;
        this.props.text = v;
        this.div.innerText = v;
        scheduleUpdateDOMTextMeasurement(this);
    }
    get fontFamily() {
        return this.props.fontFamily;
    }
    set fontFamily(v) {
        if (this.props.fontFamily === v) return;
        this.props.fontFamily = v;
        updateNodeStyles(this);
        scheduleUpdateDOMTextMeasurement(this);
    }
    get fontSize() {
        return this.props.fontSize;
    }
    set fontSize(v) {
        if (this.props.fontSize === v) return;
        this.props.fontSize = v;
        updateNodeStyles(this);
        scheduleUpdateDOMTextMeasurement(this);
    }
    get fontStyle() {
        return this.props.fontStyle;
    }
    set fontStyle(v) {
        if (this.props.fontStyle === v) return;
        this.props.fontStyle = v;
        updateNodeStyles(this);
        scheduleUpdateDOMTextMeasurement(this);
    }
    get fontWeight() {
        return this.props.fontWeight;
    }
    set fontWeight(v) {
        if (this.props.fontWeight === v) return;
        this.props.fontWeight = v;
        updateNodeStyles(this);
        scheduleUpdateDOMTextMeasurement(this);
    }
    get fontStretch() {
        return this.props.fontStretch;
    }
    set fontStretch(v) {
        if (this.props.fontStretch === v) return;
        this.props.fontStretch = v;
        updateNodeStyles(this);
        scheduleUpdateDOMTextMeasurement(this);
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
        if (this.props.lineHeight === v) return;
        this.props.lineHeight = v;
        updateNodeStyles(this);
        scheduleUpdateDOMTextMeasurement(this);
    }
    get maxWidth() {
        return this.props.maxWidth;
    }
    set maxWidth(v) {
        if (this.props.maxWidth === v) return;
        this.props.maxWidth = v;
        updateNodeStyles(this);
        scheduleUpdateDOMTextMeasurement(this);
    }
    get maxHeight() {
        return this.props.maxHeight;
    }
    set maxHeight(v) {
        if (this.props.maxHeight === v) return;
        this.props.maxHeight = v;
        updateNodeStyles(this);
        scheduleUpdateDOMTextMeasurement(this);
    }
    get letterSpacing() {
        return this.props.letterSpacing;
    }
    set letterSpacing(v) {
        if (this.props.letterSpacing === v) return;
        this.props.letterSpacing = v;
        updateNodeStyles(this);
        scheduleUpdateDOMTextMeasurement(this);
    }
    get textAlign() {
        return this.props.textAlign;
    }
    set textAlign(v) {
        if (this.props.textAlign === v) return;
        this.props.textAlign = v;
        updateNodeStyles(this);
    }
    get overflowSuffix() {
        return this.props.overflowSuffix;
    }
    set overflowSuffix(v) {
        if (this.props.overflowSuffix === v) return;
        this.props.overflowSuffix = v;
        updateNodeStyles(this);
    }
    get maxLines() {
        return this.props.maxLines;
    }
    set maxLines(v) {
        if (this.props.maxLines === v) return;
        this.props.maxLines = v;
        updateNodeStyles(this);
        scheduleUpdateDOMTextMeasurement(this);
    }
    get contain() {
        return this.props.contain;
    }
    set contain(v) {
        if (this.props.contain === v) return;
        this.props.contain = v;
        syncContainTextNodeTracking(this);
        updateNodeStyles(this);
        scheduleUpdateDOMTextMeasurement(this);
    }
    get verticalAlign() {
        return this.props.verticalAlign;
    }
    set verticalAlign(v) {
        this.props.verticalAlign = v;
        updateNodeStyles(this);
    }
    get textRendererOverride() {
        return this.props.textRendererOverride;
    }
    set textRendererOverride(v) {
        this.props.textRendererOverride = v;
        updateNodeStyles(this);
    }
    get offsetY() {
        return this.props.offsetY;
    }
    set offsetY(v) {
        this.props.offsetY = v;
        updateNodeStyles(this);
    }
    get wordBreak() {
        return this.props.wordBreak;
    }
    set wordBreak(v) {
        this.props.wordBreak = v;
        updateNodeStyles(this);
    }
};

function updateRootPosition() {
    var _settings$deviceLogic, _settings$appHeight, _settings$appWidth;
    const {canvas: canvas, settings: settings} = this;
    const rect = canvas.getBoundingClientRect();
    const top = document.documentElement.scrollTop + rect.top;
    const left = document.documentElement.scrollLeft + rect.left;
    const dpr = (_settings$deviceLogic = settings.deviceLogicalPixelRatio) !== null && _settings$deviceLogic !== void 0 ? _settings$deviceLogic : 1;
    const height = Math.ceil((_settings$appHeight = settings.appHeight) !== null && _settings$appHeight !== void 0 ? _settings$appHeight : 1080 / dpr);
    const width = Math.ceil((_settings$appWidth = settings.appWidth) !== null && _settings$appWidth !== void 0 ? _settings$appWidth : 1920 / dpr);
    this.root.div.style.left = `${left}px`;
    this.root.div.style.top = `${top}px`;
    this.root.div.style.width = `${width}px`;
    this.root.div.style.height = `${height}px`;
    this.root.div.style.position = "absolute";
    this.root.div.style.transformOrigin = "0 0 0";
    this.root.div.style.transform = `scale(${dpr}, ${dpr})`;
    this.root.div.style.overflow = "hidden";
}

var DOMRendererMain = class {
    constructor(settings, rawTarget) {
        var _settings$appWidth2, _settings$appHeight2;
        this.settings = void 0;
        this.root = void 0;
        this.canvas = void 0;
        this.stage = void 0;
        this.eventListeners = new Map;
        this.settings = settings;
        let target;
        if (typeof rawTarget === "string") {
            const result = document.getElementById(rawTarget);
            if (result instanceof HTMLElement) target = result; else throw new Error(`Target #${rawTarget} not found`);
        } else target = rawTarget;
        const canvas = document.body.appendChild(document.createElement("canvas"));
        canvas.style.position = "absolute";
        canvas.style.top = "0";
        canvas.style.left = "0";
        canvas.style.width = "100vw";
        canvas.style.height = "100vh";
        this.canvas = canvas;
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
        };
        this.root = new DOMNode(this.stage, resolveNodeDefaults({
            w: (_settings$appWidth2 = settings.appWidth) !== null && _settings$appWidth2 !== void 0 ? _settings$appWidth2 : 1920,
            h: (_settings$appHeight2 = settings.appHeight) !== null && _settings$appHeight2 !== void 0 ? _settings$appHeight2 : 1080,
            shader: defaultShader,
            zIndex: 1
        }));
        this.stage.root = this.root;
        target.appendChild(this.root.div);
        if (Config.fontSettings.fontFamily) this.root.div.style.fontFamily = Config.fontSettings.fontFamily;
        if (Config.fontSettings.fontSize) this.root.div.style.fontSize = Config.fontSettings.fontSize + "px";
        if (Config.fontSettings.lineHeight) this.root.div.style.lineHeight = Config.fontSettings.lineHeight + "px"; else this.root.div.style.lineHeight = "1.2";
        if (Config.fontSettings.fontWeight) if (typeof Config.fontSettings.fontWeight === "number") this.root.div.style.fontWeight = Config.fontSettings.fontWeight + "px"; else this.root.div.style.fontWeight = Config.fontSettings.fontWeight;
        updateRootPosition.call(this);
        new MutationObserver(updateRootPosition.bind(this)).observe(this.canvas, {
            attributes: true
        });
        new ResizeObserver(updateRootPosition.bind(this)).observe(this.canvas);
        window.addEventListener("resize", updateRootPosition.bind(this));
    }
    removeAllListeners() {
        if (this.eventListeners.size === 0) return;
        this.eventListeners.forEach(listeners => listeners.clear());
        this.eventListeners.clear();
    }
    once(event, listener) {
        const wrappedListener = (target, data) => {
            this.off(event, wrappedListener);
            listener(target, data);
        };
        this.on(event, wrappedListener);
    }
    on(name, callback) {
        let listeners = this.eventListeners.get(name);
        if (!listeners) {
            listeners = new Set;
            this.eventListeners.set(name, listeners);
        }
        listeners.add(callback);
    }
    off(event, listener) {
        const listeners = this.eventListeners.get(event);
        if (listeners) {
            listeners.delete(listener);
            if (listeners.size === 0) this.eventListeners.delete(event);
        }
    }
    emit(event, targetOrData, maybeData) {
        const listeners = this.eventListeners.get(event);
        if (!listeners || listeners.size === 0) return;
        const hasExplicitTarget = arguments.length === 3;
        const target = hasExplicitTarget ? targetOrData : this.root;
        const data = hasExplicitTarget ? maybeData : targetOrData;
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
        return new DOMText(this.stage, resolveTextNodeDefaults(props));
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
            break;
        }
        return {
            type: type,
            props: props
        };
    }
};

function loadFontToDom(font) {
    if (typeof document === "undefined" || !("fonts" in document) || typeof FontFace === "undefined" || !font.fontUrl) return;
    const fontSet = document.fonts;
    const names = Array.isArray(font.fontFamily) ? font.fontFamily : [ font.fontFamily ];
    for (let i = 0; i < names.length; i++) {
        var _fontSet$add;
        const fontFace = new FontFace(names[i], `url(${font.fontUrl})`);
        (_fontSet$add = fontSet.add) == null || _fontSet$add.call(fontSet, fontFace);
        fontFace.load().then(scheduleContainTextNodesMeasurement).catch(() => {});
    }
}

var renderer$1;

function startLightningRenderer(options, rootId = "app") {
    renderer$1 = DOM_RENDERING && Config.domRendererEnabled ? new DOMRendererMain(options, rootId) : new RendererMain(options, rootId);
    flushPendingFonts();
    return renderer$1;
}

var pendingFontLoads = [];

function attachFonts(fonts) {
    const enableDomRenderer = DOM_RENDERING && Config.domRendererEnabled;
    const hasCanvas = !enableDomRenderer && "textRenderers" in renderer$1.stage && !!renderer$1.stage.textRenderers.canvas;
    return Promise.all(fonts.map(font => {
        if (renderer$1.stage.renderer.mode === "webgl" && "type" in font && (font.type === "msdf" || font.type === "ssdf")) return renderer$1.stage.loadFont("sdf", font);
        if ("fontUrl" in font) {
            if (enableDomRenderer) loadFontToDom(font); else if (hasCanvas) return renderer$1.stage.loadFont("canvas", font);
        }
    }));
}

function mayUseSdf() {
    var _Config$rendererOptio;
    const engines = (_Config$rendererOptio = Config.rendererOptions) == null ? void 0 : _Config$rendererOptio.fontEngines;
    if (engines === void 0 || engines.length === 0) return true;
    return engines.some(engine => engine.type === "sdf");
}

function flushPendingFonts() {
    if (pendingFontLoads.length === 0) return;
    const queued = pendingFontLoads.splice(0, pendingFontLoads.length);
    for (let i = 0; i < queued.length; i++) {
        const pending = queued[i];
        attachFonts(pending.fonts).then(() => pending.resolve(), pending.reject);
    }
}

async function loadFonts(fonts) {
    if (renderer$1 !== void 0) {
        await attachFonts(fonts);
        return;
    }
    const enableDomRenderer = DOM_RENDERING && Config.domRendererEnabled;
    const preferSdf = mayUseSdf();
    const deferred = [];
    for (let i = 0; i < fonts.length; i++) {
        const font = fonts[i];
        if (enableDomRenderer) {
            if ("fontUrl" in font) loadFontToDom(font);
            continue;
        }
        prefetchFont(preferSdf ? font : {
            ...font,
            type: "canvas"
        });
        deferred.push(font);
    }
    if (deferred.length === 0) return;
    await new Promise((resolve, reject) => {
        pendingFontLoads.push({
            fonts: deferred,
            resolve: resolve,
            reject: reject
        });
    });
}

var States = class extends Array {
    constructor(callback, initialState = {}) {
        var _super = (..._args) => (super(..._args), this.onChange = void 0, this);
        if (isArray(initialState)) _super(...initialState); else if (isString(initialState)) _super(initialState); else _super(...Object.entries(initialState).filter(([_key, value]) => value).map(([key]) => key));
        this.onChange = callback;
        return this;
    }
    has(state) {
        return this.indexOf(state) >= 0 || this.indexOf(`$${state}`) >= 0;
    }
    is(state) {
        return this.indexOf(state) >= 0;
    }
    add(state) {
        if (this.has(state)) return;
        this.push(state);
        this.onChange();
    }
    toggle(state, force) {
        if (force === true) this.add(state); else if (force === false) this.remove(state); else if (this.has(state)) this.remove(state); else this.add(state);
    }
    merge(newStates) {
        if (isArray(newStates)) {
            this.length = 0;
            this.push(...newStates);
        } else if (isString(newStates)) {
            this.length = 0;
            this.push(newStates);
        } else for (const state in newStates) if (newStates[state]) {
            if (!this.has(state)) this.push(state);
        } else {
            const stateIndexToRemove = this.indexOf(state);
            if (stateIndexToRemove >= 0) this.splice(stateIndexToRemove, 1);
        }
        return this;
    }
    remove(state) {
        const stateIndexToRemove = this.indexOf(state);
        if (stateIndexToRemove >= 0) {
            this.splice(stateIndexToRemove, 1);
            this.onChange();
        }
    }
};

function getArrayValue(val, index, defaultValue = 0) {
    var _result;
    if (val === void 0) return defaultValue;
    if (typeof val === "number") return val;
    const len = val.length;
    let result;
    if (len === 2) result = index % 2 === 0 ? val[0] : val[1]; else if (len === 3) result = index === 0 ? val[0] : index === 2 ? val[2] : val[1]; else result = val[index];
    return (_result = result) !== null && _result !== void 0 ? _result : defaultValue;
}

function flexLayout_default(node) {
    var _node$paddingTop, _node$paddingRight, _node$paddingBottom, _node$paddingLeft;
    const direction = node.flexDirection || "row";
    const isRow = direction === "row" || direction === "row-reverse";
    const isReverse = direction === "row-reverse" || direction === "column-reverse";
    const dimension = isRow ? "width" : "height";
    const crossDimension = isRow ? "height" : "width";
    const nodePadding = node.padding;
    const paddingTop = (_node$paddingTop = node.paddingTop) !== null && _node$paddingTop !== void 0 ? _node$paddingTop : getArrayValue(nodePadding, 0);
    const paddingRight = (_node$paddingRight = node.paddingRight) !== null && _node$paddingRight !== void 0 ? _node$paddingRight : getArrayValue(nodePadding, 1);
    const paddingBottom = (_node$paddingBottom = node.paddingBottom) !== null && _node$paddingBottom !== void 0 ? _node$paddingBottom : getArrayValue(nodePadding, 2);
    const paddingLeft = (_node$paddingLeft = node.paddingLeft) !== null && _node$paddingLeft !== void 0 ? _node$paddingLeft : getArrayValue(nodePadding, 3);
    const paddingStart = isRow ? paddingLeft : paddingTop;
    const paddingEnd = isRow ? paddingRight : paddingBottom;
    const paddingCrossStart = isRow ? paddingTop : paddingLeft;
    const paddingCrossEnd = isRow ? paddingBottom : paddingRight;
    const nodePaddingTotal = paddingStart + paddingEnd;
    const minDimension = isRow ? "minWidth" : "minHeight";
    const crossMinDimension = isRow ? "minHeight" : "minWidth";
    const children = node.children;
    const numChildren = children.length;
    if (numChildren === 0) return false;
    const processableChildrenIndices = [];
    let hasOrder = false;
    let totalFlexGrow = 0;
    let totalFlexShrink = 0;
    for (let i = 0; i < numChildren; i++) {
        const c = children[i];
        if (isElementText(c) && c.text && !(c.width || c.height)) return false;
        if (isTextNode(c) || c.flexItem === false) continue;
        if (c.flexOrder !== void 0) hasOrder = true;
        const flexGrow = c.flexGrow;
        if (flexGrow !== void 0 && flexGrow > 0) totalFlexGrow += flexGrow;
        const flexShrink = c.flexShrink;
        if (flexShrink !== void 0 && flexShrink > 0) totalFlexShrink += flexShrink;
        if (c[minDimension] && (c[dimension] || 0) < c[minDimension]) c[dimension] = c[minDimension];
        if (c[crossMinDimension] && (c[crossDimension] || 0) < c[crossMinDimension]) c[crossDimension] = c[crossMinDimension];
        processableChildrenIndices.push(i);
    }
    if (hasOrder) processableChildrenIndices.sort((aIdx, bIdx) => {
        const a = children[aIdx];
        const b = children[bIdx];
        return (a.flexOrder || 0) - (b.flexOrder || 0);
    });
    if (isReverse || node.direction === "rtl") processableChildrenIndices.reverse();
    const numProcessedChildren = processableChildrenIndices.length;
    if (numProcessedChildren === 0) return false;
    const prop = isRow ? "x" : "y";
    const crossProp = isRow ? "y" : "x";
    const containerSize = Math.max(node[dimension] || 0, node[minDimension] || 0, 0);
    let containerCrossSize = Math.max(node[crossDimension] || 0, node[crossMinDimension] || 0, 0);
    const isWrapReverse = node.flexWrap === "wrap-reverse";
    const gap = node.gap || 0;
    const justify = node.justifyContent || "flexStart";
    const align = node.alignItems || (node.flexWrap ? "flexStart" : void 0);
    let containerUpdated = false;
    const childMainSizes = new Float32Array(numProcessedChildren);
    const childMarginStarts = new Float32Array(numProcessedChildren);
    const childMarginEnds = new Float32Array(numProcessedChildren);
    const childTotalMainSizes = new Float32Array(numProcessedChildren);
    const childCrossSizes = new Float32Array(numProcessedChildren);
    const childMarginCrossStarts = new Float32Array(numProcessedChildren);
    const childMarginCrossEnds = new Float32Array(numProcessedChildren);
    let sumOfFlexBaseSizesWithMargins = 0;
    for (let idx = 0; idx < numProcessedChildren; idx++) {
        const c = children[processableChildrenIndices[idx]];
        const marginArray = c.margin;
        const flexBasis = c.flexBasis;
        const isBasisAuto = flexBasis === void 0 || flexBasis === "auto";
        const computedBasis = isBasisAuto ? c[dimension] || 0 : flexBasis;
        const baseMainSize = isBasisAuto ? computedBasis : Math.max(computedBasis, c[minDimension] || 0);
        const marginStart = isRow ? c.marginLeft || getArrayValue(marginArray, 3) : c.marginTop || getArrayValue(marginArray, 0);
        const marginEnd = isRow ? c.marginRight || getArrayValue(marginArray, 1) : c.marginBottom || getArrayValue(marginArray, 2);
        const marginCrossStart = isRow ? c.marginTop || getArrayValue(marginArray, 0) : c.marginLeft || getArrayValue(marginArray, 3);
        const marginCrossEnd = isRow ? c.marginBottom || getArrayValue(marginArray, 2) : c.marginRight || getArrayValue(marginArray, 1);
        childMainSizes[idx] = baseMainSize;
        childMarginStarts[idx] = marginStart;
        childMarginEnds[idx] = marginEnd;
        childTotalMainSizes[idx] = baseMainSize + marginStart + marginEnd;
        childCrossSizes[idx] = c[crossDimension] || 0;
        childMarginCrossStarts[idx] = marginCrossStart;
        childMarginCrossEnds[idx] = marginCrossEnd;
        sumOfFlexBaseSizesWithMargins += childTotalMainSizes[idx];
    }
    if ((totalFlexGrow > 0 || totalFlexShrink > 0) && numProcessedChildren > 1) {
        node.flexBoundary = node.flexBoundary || "fixed";
        const totalGapSpace = numProcessedChildren > 0 ? gap * (numProcessedChildren - 1) : 0;
        const availableSpace = containerSize - sumOfFlexBaseSizesWithMargins - totalGapSpace;
        if (availableSpace > 0 && totalFlexGrow > 0) {
            for (let idx = 0; idx < numProcessedChildren; idx++) {
                const c = children[processableChildrenIndices[idx]];
                const flexGrowValue = c.flexGrow || 0;
                if (flexGrowValue > 0) {
                    const shareOfSpace = flexGrowValue / totalFlexGrow * availableSpace;
                    const newMainSize = childMainSizes[idx] + shareOfSpace;
                    c[dimension] = newMainSize;
                    childMainSizes[idx] = newMainSize;
                    childTotalMainSizes[idx] = newMainSize + childMarginStarts[idx] + childMarginEnds[idx];
                }
            }
            node._containsFlexGrow = node._containsFlexGrow ? null : true;
        } else if (availableSpace < 0 && totalFlexShrink > 0) {
            let totalScaledShrinkFactor = 0;
            for (let idx = 0; idx < numProcessedChildren; idx++) {
                const flexShrinkValue = children[processableChildrenIndices[idx]].flexShrink || 0;
                totalScaledShrinkFactor += flexShrinkValue * childMainSizes[idx];
            }
            if (totalScaledShrinkFactor > 0) for (let idx = 0; idx < numProcessedChildren; idx++) {
                const c = children[processableChildrenIndices[idx]];
                const flexShrinkValue = c.flexShrink || 0;
                if (flexShrinkValue > 0) {
                    const sizeReduction = flexShrinkValue * childMainSizes[idx] / totalScaledShrinkFactor * Math.abs(availableSpace);
                    let newMainSize = childMainSizes[idx] - sizeReduction;
                    const minBound = c[minDimension] || 0;
                    if (newMainSize < minBound) newMainSize = minBound;
                    c[dimension] = newMainSize;
                    childMainSizes[idx] = newMainSize;
                    childTotalMainSizes[idx] = newMainSize + childMarginStarts[idx] + childMarginEnds[idx];
                }
            }
            node._containsFlexGrow = node._containsFlexGrow ? null : true;
        } else if (node._containsFlexGrow) node._containsFlexGrow = null;
    }
    let totalItemSize = 0;
    if (justify === "center" || justify === "spaceBetween" || justify === "spaceEvenly" || justify === "spaceAround") for (let idx = 0; idx < numProcessedChildren; idx++) totalItemSize += childTotalMainSizes[idx];
    const doCrossAlign = containerCrossSize ? (c, idx, crossCurrentPos = 0) => {
        const alignSelf = c.alignSelf || align;
        if (!alignSelf) return;
        if (alignSelf === "flexStart") c[crossProp] = crossCurrentPos + childMarginCrossStarts[idx]; else if (alignSelf === "center") c[crossProp] = crossCurrentPos + (containerCrossSize - childCrossSizes[idx]) / 2 + childMarginCrossStarts[idx]; else if (alignSelf === "flexEnd") c[crossProp] = crossCurrentPos + containerCrossSize - childCrossSizes[idx] - childMarginCrossEnds[idx];
    } : (_c, _idx, _crossCurrentPos = 0) => {};
    if (isRow && node._calcHeight && !node.flexCrossBoundary) {
        let maxHeight = 0;
        for (let idx = 0; idx < numProcessedChildren; idx++) if (childCrossSizes[idx] > maxHeight) maxHeight = childCrossSizes[idx];
        const newHeight = maxHeight || node.height;
        if (newHeight !== node.height) {
            containerUpdated = true;
            node.height = containerCrossSize = newHeight;
        }
    }
    let currentPos = paddingStart;
    if (justify === "flexStart") {
        if (node.flexWrap === "wrap") {
            var _node$columnGap, _node$rowGap;
            const childCrossSizeVar = numProcessedChildren > 0 ? childCrossSizes[0] : containerCrossSize;
            let crossCurrentPos = isWrapReverse ? containerCrossSize - paddingCrossEnd - childCrossSizeVar : paddingCrossStart;
            const crossGap = isRow ? (_node$columnGap = node.columnGap) !== null && _node$columnGap !== void 0 ? _node$columnGap : gap : (_node$rowGap = node.rowGap) !== null && _node$rowGap !== void 0 ? _node$rowGap : gap;
            for (let idx = 0; idx < numProcessedChildren; idx++) {
                const c = children[processableChildrenIndices[idx]];
                if (currentPos + childTotalMainSizes[idx] > containerSize && currentPos > paddingStart) {
                    currentPos = paddingStart;
                    crossCurrentPos += isWrapReverse ? -(childCrossSizeVar + crossGap) : childCrossSizeVar + crossGap;
                }
                c[prop] = currentPos + childMarginStarts[idx];
                currentPos += childTotalMainSizes[idx] + gap;
                doCrossAlign(c, idx, crossCurrentPos);
            }
            const finalCrossSize = isWrapReverse ? containerCrossSize - crossCurrentPos + paddingCrossStart : crossCurrentPos + childCrossSizeVar + paddingCrossEnd;
            if (node[crossDimension] !== finalCrossSize) {
                node[`preFlex${crossDimension}`] = node[crossDimension];
                node[crossDimension] = finalCrossSize;
                containerUpdated = true;
            }
        } else for (let idx = 0; idx < numProcessedChildren; idx++) {
            const c = children[processableChildrenIndices[idx]];
            c[prop] = currentPos + childMarginStarts[idx];
            currentPos += childTotalMainSizes[idx] + gap;
            doCrossAlign(c, idx, paddingCrossStart);
        }
        if (node.flexBoundary !== "fixed" && node.flexWrap !== "wrap") {
            let calculatedSize = currentPos - gap + paddingEnd;
            const minSize = node[minDimension] || 0;
            if (calculatedSize < minSize) calculatedSize = minSize;
            if (calculatedSize !== (node[dimension] || 0)) {
                node[`preFlex${dimension}`] = containerSize;
                node[dimension] = calculatedSize;
                return true;
            }
        }
    } else if (justify === "flexEnd") {
        currentPos = containerSize - paddingEnd;
        for (let idx = numProcessedChildren - 1; idx >= 0; idx--) {
            const c = children[processableChildrenIndices[idx]];
            c[prop] = currentPos - childMainSizes[idx] - childMarginEnds[idx];
            currentPos -= childTotalMainSizes[idx] + gap;
            doCrossAlign(c, idx, paddingCrossStart);
        }
    } else if (justify === "center") {
        currentPos = (containerSize - (totalItemSize + gap * (numProcessedChildren - 1))) / 2 + paddingStart;
        for (let idx = 0; idx < numProcessedChildren; idx++) {
            const c = children[processableChildrenIndices[idx]];
            c[prop] = currentPos + childMarginStarts[idx];
            currentPos += childTotalMainSizes[idx] + gap;
            doCrossAlign(c, idx, paddingCrossStart);
        }
    } else if (justify === "spaceBetween") {
        const spaceBetween = numProcessedChildren > 1 ? (containerSize - totalItemSize - nodePaddingTotal) / (numProcessedChildren - 1) : 0;
        currentPos = paddingStart;
        for (let idx = 0; idx < numProcessedChildren; idx++) {
            const c = children[processableChildrenIndices[idx]];
            c[prop] = currentPos + childMarginStarts[idx];
            currentPos += childTotalMainSizes[idx] + spaceBetween;
            doCrossAlign(c, idx, paddingCrossStart);
        }
    } else if (justify === "spaceAround") {
        const spaceAround = numProcessedChildren > 0 ? (containerSize - totalItemSize - nodePaddingTotal) / numProcessedChildren : 0;
        currentPos = paddingStart + spaceAround / 2;
        for (let idx = 0; idx < numProcessedChildren; idx++) {
            const c = children[processableChildrenIndices[idx]];
            c[prop] = currentPos + childMarginStarts[idx];
            currentPos += childTotalMainSizes[idx] + spaceAround;
            doCrossAlign(c, idx, paddingCrossStart);
        }
    } else if (justify === "spaceEvenly") {
        const spaceEvenly = (containerSize - totalItemSize - nodePaddingTotal) / (numProcessedChildren + 1);
        currentPos = spaceEvenly + paddingStart;
        for (let idx = 0; idx < numProcessedChildren; idx++) {
            const c = children[processableChildrenIndices[idx]];
            c[prop] = currentPos + childMarginStarts[idx];
            currentPos += childTotalMainSizes[idx] + spaceEvenly;
            doCrossAlign(c, idx, paddingCrossStart);
        }
    }
    return containerUpdated;
}

var _signalWrapper = cb => cb();

var keyMapEntries = {
    ArrowLeft: "Left",
    ArrowRight: "Right",
    ArrowUp: "Up",
    ArrowDown: "Down",
    Enter: "Enter",
    l: "Last",
    " ": "Space",
    Backspace: "Back",
    Escape: "Escape"
};

var keyOf = e => e.key || e.keyCode;

var flattenKeyMap = (keyMap, targetMap) => {
    const newTargetMap = targetMap;
    for (const [key, value] of Object.entries(keyMap)) if (Array.isArray(value)) value.forEach(v => {
        newTargetMap[v] = key;
    }); else if (value === null) delete newTargetMap[key]; else newTargetMap[value] = key;
    return newTargetMap;
};

var needFocusDebugStyles = true;

var addFocusDebug = (prevFocusPath, newFocusPath) => {
    if (needFocusDebugStyles) {
        const style = document.createElement("style");
        style.type = "text/css";
        style.innerHTML = `\n      [data-focus="3"] {\n        border: 2px solid rgba(255, 33, 33, 0.2);\n        border-radius: 5px;\n        transition: border-color 0.3s ease;\n      }\n\n      [data-focus="2"] {\n        border: 2px solid rgba(255, 33, 33, 0.4);\n        border-radius: 5px;\n        transition: border-color 0.3s ease;\n      }\n\n      [data-focus="1"] {\n        border: 4px solid rgba(255, 33, 33, 0.9);\n        border-radius: 5px;\n        transition: border-color 0.5s ease;\n      }\n    `;
        document.head.appendChild(style);
        needFocusDebugStyles = false;
    }
    prevFocusPath.forEach(elm => {
        elm.data = {
            ...elm.data,
            focus: void 0
        };
    });
    newFocusPath.forEach((elm, i) => {
        elm.data = {
            ...elm.data,
            focus: i + 1
        };
    });
};

var MAX_FOCUS_HISTORY = 50;

var focusHistory = [];

var elementFocusData = new WeakMap;

var _pendingHistoryKey = {
    keyPressed: void 0,
    mappedKey: void 0
};

var getElementLabel = elm => {
    var _elm$id, _ref;
    if (!elm) return "None";
    const id = (_elm$id = elm.id) !== null && _elm$id !== void 0 ? _elm$id : elm._id;
    return (_ref = id !== null && id !== void 0 ? id : elm.componentName) !== null && _ref !== void 0 ? _ref : "Unknown";
};

var recordFocusHistory = (next, prev) => {
    if (false && Config.focusHistoryDebug > 0) {
        var _existing$focusCount;
        const now = performance.now();
        const existing = elementFocusData.get(next);
        elementFocusData.set(next, {
            focusCount: ((_existing$focusCount = existing == null ? void 0 : existing.focusCount) !== null && _existing$focusCount !== void 0 ? _existing$focusCount : 0) + 1,
            lastFocusedAt: now
        });
        const entry = {
            timestamp: now,
            keyPressed: _pendingHistoryKey.keyPressed,
            mappedKey: _pendingHistoryKey.mappedKey,
            prev: prev,
            next: next
        };
        focusHistory.push(entry);
        if (focusHistory.length > MAX_FOCUS_HISTORY) focusHistory.shift();
        printFocusHistory(Config.focusHistoryDebug);
    }
};

if (false) console.log("DEBUG: Last focus target stored in $f, use inspect($f) to jump to it in the Elements panel. Enable with Config.focusHistoryDebug = n");

var printFocusHistory = count => {
    const entries = focusHistory.slice(-count);
    console.table(entries.map(e => {
        var _ref2, _e$mappedKey;
        return {
            prev: getElementLabel(e.prev),
            key: (_ref2 = (_e$mappedKey = e.mappedKey) !== null && _e$mappedKey !== void 0 ? _e$mappedKey : e.keyPressed) !== null && _ref2 !== void 0 ? _ref2 : "—",
            next: getElementLabel(e.next),
            nextElm: e.next,
            nextDiv: e.next.lng.div
        };
    }));
    const lastEntry = entries[entries.length - 1];
    if (lastEntry) {
        var _lastEntry$next$lng;
        const lastElm = (_lastEntry$next$lng = lastEntry.next.lng) == null ? void 0 : _lastEntry$next$lng.div;
        if (lastElm) window.$f = lastElm;
    }
};

var setActiveElementCore = elm => {
    const prev = activeElement();
    if (elm === prev) return;
    updateFocusPath(elm, prev);
    recordFocusHistory(elm, prev);
    _pendingHistoryKey = {
        keyPressed: void 0,
        mappedKey: void 0
    };
    Config.setActiveElement(elm);
};

var [focusPath, setFocusPath] = createSignal([]);

var updateFocusPath = (currentFocusedElm, prevFocusedElm) => {
    let current = currentFocusedElm;
    const fp = [];
    const fpSet = new Set;
    while (current) {
        if (!current.states.has(Config.focusStateKey) || current === currentFocusedElm) {
            var _current$onFocus, _current$onFocusChang;
            current.states.add(Config.focusStateKey);
            (_current$onFocus = current.onFocus) == null || _current$onFocus.call(current, currentFocusedElm, prevFocusedElm, current);
            (_current$onFocusChang = current.onFocusChanged) == null || _current$onFocusChang.call(current, true, currentFocusedElm, prevFocusedElm, current);
        }
        fp.push(current);
        fpSet.add(current);
        current = current.parent;
    }
    const prevFp = focusPath();
    prevFp.forEach(elm => {
        if (!fpSet.has(elm)) {
            var _elm$onBlur, _elm$onFocusChanged;
            elm.states.remove(Config.focusStateKey);
            (_elm$onBlur = elm.onBlur) == null || _elm$onBlur.call(elm, currentFocusedElm, prevFocusedElm, elm);
            (_elm$onFocusChanged = elm.onFocusChanged) == null || _elm$onFocusChanged.call(elm, false, currentFocusedElm, prevFocusedElm, elm);
        }
    });
    if (Config.focusDebug) addFocusDebug(prevFp, fp);
    _signalWrapper(() => setFocusPath(fp));
};

var lastGlobalKeyPressTime = 0;

var lastInputKey;

var isElementThrottled = (elm, sameKey, currentTime) => elm.throttleInput !== void 0 && sameKey && elm._lastAnyKeyPressTime !== void 0 && currentTime - elm._lastAnyKeyPressTime < elm.throttleInput;

var runCapturePhase = (fp, e, mappedEvent, isUp, sameKey, currentTime) => {
    const finalFocusElm = fp[0];
    const captureEvent = `onCapture${mappedEvent || e.key}${isUp ? "Release" : ""}`;
    const captureKey = isUp ? "onCaptureKeyRelease" : "onCaptureKey";
    for (let i = fp.length - 1; i >= 0; i--) {
        const elm = fp[i];
        if (isElementThrottled(elm, sameKey, currentTime)) return true;
        const captureHandler = elm[captureEvent] || elm[captureKey];
        if (isFunction(captureHandler) && captureHandler.call(elm, e, elm, finalFocusElm, mappedEvent) === true) {
            elm._lastAnyKeyPressTime = currentTime;
            return true;
        }
    }
    return false;
};

var runBubblePhase = (fp, e, mappedEvent, isUp, sameKey, currentTime) => {
    const finalFocusElm = fp[0];
    const eventHandlerKey = mappedEvent ? isUp ? `on${mappedEvent}Release` : `on${mappedEvent}` : void 0;
    const fallbackHandlerKey = isUp ? void 0 : "onKeyPress";
    let lastHandlerSeen;
    for (let i = 0; i < fp.length; i++) {
        const elm = fp[i];
        if (isElementThrottled(elm, sameKey, currentTime)) return {
            handled: true,
            lastHandlerSeen: lastHandlerSeen
        };
        let handled = false;
        if (eventHandlerKey) {
            const eventHandler = elm[eventHandlerKey];
            if (isFunction(eventHandler)) {
                lastHandlerSeen = elm;
                handled = eventHandler.call(elm, e, elm, finalFocusElm) === true;
            }
        }
        if (!handled && fallbackHandlerKey) {
            const fallbackHandler = elm[fallbackHandlerKey];
            if (isFunction(fallbackHandler)) {
                lastHandlerSeen = elm;
                handled = fallbackHandler.call(elm, e, mappedEvent, elm, finalFocusElm) === true;
            }
        }
        if (handled) {
            elm._lastAnyKeyPressTime = currentTime;
            return {
                handled: true,
                lastHandlerSeen: lastHandlerSeen
            };
        }
    }
    return {
        handled: false,
        lastHandlerSeen: lastHandlerSeen
    };
};

var propagateKeyPress = (e, mappedEvent, isUp = false) => {
    const currentTime = performance.now();
    const key = keyOf(e);
    const sameKey = lastInputKey === key;
    lastInputKey = key;
    if (!isUp && Config.throttleInput) {
        if (sameKey && currentTime - lastGlobalKeyPressTime < Config.throttleInput) {
            if (false && Config.keyDebug) console.log(`Keypress throttled by global Config.throttleInput: ${Config.throttleInput}ms`);
            return false;
        }
        lastGlobalKeyPressTime = currentTime;
    }
    if (!isUp) _pendingHistoryKey = {
        keyPressed: key,
        mappedKey: mappedEvent
    };
    const fp = focusPath();
    if (fp.length === 0) return false;
    if (runCapturePhase(fp, e, mappedEvent, isUp, sameKey, currentTime)) return true;
    const {handled: handled, lastHandlerSeen: lastHandlerSeen} = runBubblePhase(fp, e, mappedEvent, isUp, sameKey, currentTime);
    if (handled) return true;
    if (false && Config.keyDebug && !isUp) {
        const detail = `key="${e.key}", mappedEvent=${mappedEvent}, isUp=${isUp}`;
        if (lastHandlerSeen) console.log(`Keypress bubbled, ${detail}`, lastHandlerSeen); else console.log(`No event handler available for keypress: ${detail}`);
    }
    return false;
};

var UNIDENTIFIED = "Unidentified";

var keyIdentities = keyOrEvent => {
    if (typeof keyOrEvent !== "object") return [ keyOrEvent ];
    const ids = [];
    if (keyOrEvent.key && keyOrEvent.key !== UNIDENTIFIED) ids.push(keyOrEvent.key);
    if (keyOrEvent.keyCode) ids.push(keyOrEvent.keyCode);
    return ids;
};

var suppressedKeys = new Map;

var findSuppression = ids => {
    for (const id of ids) {
        const found = suppressedKeys.get(id);
        if (found) return found;
    }
};

var liftSuppression = ids => {
    var _found$onRelease;
    const found = findSuppression(ids);
    if (!found) return;
    for (const id of found.ids) suppressedKeys.delete(id);
    (_found$onRelease = found.onRelease) == null || _found$onRelease.call(found);
};

var handleKeyEvents = (keydown, keyup) => {
    if (keydown) {
        const ids = keyIdentities(keydown);
        if (keydown.repeat) {
            if (findSuppression(ids)) return;
        } else liftSuppression(ids);
        propagateKeyPress(keydown, keyMapEntries[keydown.key] || keyMapEntries[keydown.keyCode]);
    } else if (keyup) {
        liftSuppression(keyIdentities(keyup));
        propagateKeyPress(keyup, keyMapEntries[keyup.key] || keyMapEntries[keyup.keyCode], true);
    }
};

var useFocusManager = userKeyMap => {
    if (userKeyMap) flattenKeyMap(userKeyMap, keyMapEntries);
    const owner = getOwner();
    const ownerContext = cb => {
        runWithOwner(owner, cb);
    };
    _signalWrapper = ownerContext;
    Config.setActiveElement = elm => ownerContext(() => setActiveElement(elm));
    const keyPressHandler = event => ownerContext(() => handleKeyEvents(event, void 0));
    const keyUpHandler = event => ownerContext(() => handleKeyEvents(void 0, event));
    document.addEventListener("keydown", keyPressHandler);
    document.addEventListener("keyup", keyUpHandler);
    onCleanup(() => {
        document.removeEventListener("keydown", keyPressHandler);
        document.removeEventListener("keyup", keyUpHandler);
        suppressedKeys.clear();
    });
};

var installed = false;

function findDeepestAtPosition(root, x, y) {
    var _Config$rendererOptio;
    const precision = ((_Config$rendererOptio = Config.rendererOptions) == null ? void 0 : _Config$rendererOptio.deviceLogicalPixelRatio) || 1;
    const px = x / precision;
    const py = y / precision;
    let current = root;
    while (true) {
        let best;
        let bestZ = -Infinity;
        for (const child of current.children) {
            var _child$zIndex;
            if (!isElementNode(child) || child.alpha === 0) continue;
            const cx = child.lng.absX || 0;
            const cy = child.lng.absY || 0;
            const cw = child.width || 0;
            const ch = child.height || 0;
            if (px < cx || px > cx + cw || py < cy || py > cy + ch) continue;
            const z = (_child$zIndex = child.zIndex) !== null && _child$zIndex !== void 0 ? _child$zIndex : -1;
            if (z >= bestZ) {
                bestZ = z;
                best = child;
            }
        }
        if (!best) return current;
        current = best;
    }
}

function handleClick(event) {
    if (!event.altKey) return;
    let target = event.target;
    while (target && !target.element) target = target.parentElement;
    const hit = target == null ? void 0 : target.element;
    if (!hit) return;
    let root = hit;
    while (root.parent) root = root.parent;
    const el = findDeepestAtPosition(root, event.clientX, event.clientY);
    event.preventDefault();
    event.stopPropagation();
    const lng = el.lng;
    const label = el.componentName || el._type;
    const loc = el.componentLocation ? ` @ ${el.componentLocation}` : "";
    console.log(`%c[SolidTV Inspector] %c${label}${loc}`, "color: magenta; font-weight: bold;", "color: inherit; font-weight: normal;", {
        element: el,
        div: lng.div,
        lng: lng,
        states: el._states ? Array.from(el._states) : [],
        position: {
            x: lng == null ? void 0 : lng.x,
            y: lng == null ? void 0 : lng.y,
            w: lng == null ? void 0 : lng.w,
            h: lng == null ? void 0 : lng.h
        },
        parent: el.parent,
        children: el.children
    });
    globalThis.$el = el;
    console.log("Pinned to $el — try $el.parent, $el.setFocus()");
}

function initClickInspector() {
    if (installed || !false || typeof document === "undefined") return;
    installed = true;
    document.addEventListener("click", handleClick, true);
}

var calculateFlex = flexLayout_default;

var postMutationQueued = false;

var nextActiveElement = null;

var deferredFocusElement = null;

var layoutQueue = new Set;

var elementDeleteQueue = [];

function enqueueDelete(node, n) {
    if (node._queueDelete === void 0) {
        node._queueDelete = n;
        if (elementDeleteQueue.push(node) === 1) schedulePostMutation();
    } else node._queueDelete += n;
}

function schedulePostMutation() {
    if (postMutationQueued) return;
    postMutationQueued = true;
    if ("reprocessUpdates" in renderer$1.stage && renderer$1.stage.reprocessUpdates) renderer$1.stage.reprocessUpdates(runPostMutation);
    queueMicrotask(runPostMutation);
}

function flushDeletes() {
    if (elementDeleteQueue.length === 0) return;
    for (const el of elementDeleteQueue) {
        var _el$_queueDelete;
        if (((_el$_queueDelete = el._queueDelete) !== null && _el$_queueDelete !== void 0 ? _el$_queueDelete : 0) < 0) el.destroy();
        el._queueDelete = void 0;
    }
    elementDeleteQueue.length = 0;
}

function flushLayout() {
    while (layoutQueue.size > 0) {
        const queue = [ ...layoutQueue ];
        layoutQueue.clear();
        for (let i = queue.length - 1; i >= 0; i--) queue[i].updateLayout();
    }
}

function flushFocus() {
    if (deferredFocusElement !== null) {
        const el = deferredFocusElement;
        deferredFocusElement = null;
        el.setFocus();
    } else if (nextActiveElement !== null) {
        const element = nextActiveElement;
        nextActiveElement = null;
        setActiveElementCore(element);
    }
}

var postMutationTiming = {
    calls: 0,
    total: 0,
    max: 0,
    deleteTotal: 0,
    deleteMax: 0,
    layoutTotal: 0,
    layoutMax: 0,
    focusTotal: 0,
    focusMax: 0
};

function resetPostMutationTiming() {
    const t = postMutationTiming;
    t.calls = 0;
    t.total = 0;
    t.max = 0;
    t.deleteTotal = 0;
    t.deleteMax = 0;
    t.layoutTotal = 0;
    t.layoutMax = 0;
    t.focusTotal = 0;
    t.focusMax = 0;
}

function runPostMutation() {
    postMutationQueued = false;
    if (Config.postMutationDebug) {
        runPostMutationTimed();
        return;
    }
    flushDeletes();
    flushLayout();
    flushFocus();
}

function runPostMutationTimed() {
    const start = performance.now();
    flushDeletes();
    const afterDelete = performance.now();
    flushLayout();
    const afterLayout = performance.now();
    flushFocus();
    const end = performance.now();
    const deleteTime = afterDelete - start;
    const layoutTime = afterLayout - afterDelete;
    const focusTime = end - afterLayout;
    const totalTime = end - start;
    const t = postMutationTiming;
    t.calls++;
    t.total += totalTime;
    t.deleteTotal += deleteTime;
    t.layoutTotal += layoutTime;
    t.focusTotal += focusTime;
    if (totalTime > t.max) t.max = totalTime;
    if (deleteTime > t.deleteMax) t.deleteMax = deleteTime;
    if (layoutTime > t.layoutMax) t.layoutMax = layoutTime;
    if (focusTime > t.focusMax) t.focusMax = focusTime;
}

function addToLayoutQueue(node) {
    layoutQueue.add(node);
    schedulePostMutation();
}

var _fontTemplate;

var _fontFamilyIdx = -1;

var _fontFamilyWithWeight;

function buildFontTemplate() {
    const tpl = [];
    const fs = Config.fontSettings;
    if (fs) for (const key in fs) {
        if (key === "fontFamily") {
            _fontFamilyIdx = tpl.length;
            _fontFamilyWithWeight = `${fs.fontFamily}${fs.fontWeight || ""}`;
        }
        tpl.push([ key, fs[key] ]);
    }
    _fontTemplate = tpl;
}

var EFFECT_SHADER_KEYS = [ "border", "borderTop", "borderRight", "borderBottom", "borderLeft", "shadow" ];

var parseAndAssignShaderProps = (prefix, obj, props = {}) => {
    if (!obj) return;
    const side = {
        borderBottom: "bottom",
        borderLeft: "left",
        borderRight: "right",
        borderTop: "top"
    }[prefix];
    const actualPrefix = side ? "border" : prefix;
    props[actualPrefix] = obj;
    Object.entries(obj).forEach(([key, value]) => {
        let transformedKey = key === "width" ? "w" : key;
        if (side && transformedKey === "w") transformedKey = side;
        props[`${actualPrefix}-${transformedKey}`] = value;
    });
};

function convertToShader(_node, v) {
    let type = "rounded";
    if (v.border) type += "WithBorder";
    if (v.shadow) type += "WithShadow";
    return renderer$1.createShader(type, v);
}

function getPropertyAlias(name) {
    if (name === "w") return "width";
    if (name === "h") return "height";
    return name;
}

var LightningRendererNumberProps = [ "alpha", "color", "colorTop", "colorRight", "colorLeft", "colorBottom", "colorTl", "colorTr", "colorBl", "colorBr", "h", "fontSize", "lineHeight", "mount", "mountX", "mountY", "pivot", "pivotX", "pivotY", "rotation", "scale", "scaleX", "scaleY", "w", "worldX", "worldY", "x", "y", "zIndex", "zIndexLocked" ];

var LightningRendererNonAnimatingProps = [ "absX", "absY", "autosize", "clipping", "contain", "componentName", "componentLocation", "data", "destroyed", "forceLoad", "fontStretch", "fontStyle", "group", "ignoreParentAlpha", "imageType", "letterSpacing", "maxHeight", "maxLines", "maxWidth", "offsetY", "overflowSuffix", "placeholderColor", "preventCleanup", "rtt", "scrollable", "scrollY", "srcHeight", "srcWidth", "srcX", "srcY", "strictBounds", "text", "textAlign", "textBaseline", "textOverflow", "texture", "textureOptions", "textRendererOverride", "verticalAlign", "wordBreak", "wordWrap" ];

initClickInspector();

var ElementNode = class {
    constructor(name) {
        this._type = name === "text" ? NodeType.TextNode : NodeType.Element;
        this.rendered = false;
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
        };
        this.children = [];
        this._queueDelete = void 0;
        this._animationQueue = void 0;
        this._animationQueueSettings = void 0;
        this._animationRunning = void 0;
        this._animationSettings = void 0;
        this._autofocus = void 0;
        this._calcWidth = void 0;
        this._calcHeight = void 0;
        this._containsFlexGrow = void 0;
        this._hasRenderedChildren = void 0;
        this._effects = void 0;
        this._fontFamily = void 0;
        this._fontWeight = void 0;
        this._id = void 0;
        this._parent = void 0;
        this._states = void 0;
        this._style = void 0;
        this._theme = void 0;
        this._lastAnyKeyPressTime = void 0;
        this._undoStyles = void 0;
        this._display = void 0;
        this._onLayout = void 0;
        this._requiresLayout = false;
    }
    get effects() {
        return this.lng.shader;
    }
    _writeShaderTarget(target) {
        if (this.rendered) {
            if (!this.lng.shader) this.lng.shader = Config.convertToShader(this, target); else if (isDomRendererActive()) this.lng.shader = this.lng.shader;
        } else this.lng.shader = target;
    }
    set effects(v) {
        var _this$lng$shader;
        if (!SHADERS_ENABLED) return;
        let target = this.lng.shader || {};
        if ((_this$lng$shader = this.lng.shader) == null ? void 0 : _this$lng$shader.props) target = this.lng.shader.props;
        if (v.rounded) target.radius = v.rounded.radius;
        if (v.borderRadius) target.radius = v.borderRadius;
        for (const k of EFFECT_SHADER_KEYS) if (v[k]) parseAndAssignShaderProps(k, v[k], target);
        this._writeShaderTarget(target);
    }
    set id(id) {
        this._id = id;
        if (Config.rendererOptions && "inspector" in Config.rendererOptions && Config.rendererOptions.inspector) this.data = {
            ...this.data,
            testId: id
        };
    }
    get id() {
        return this._id;
    }
    get parent() {
        return this._parent;
    }
    set parent(p) {
        this._parent = p;
        if (this.rendered && (p == null ? void 0 : p.rendered)) {
            var _p$lng;
            this.lng.parent = (_p$lng = p.lng) !== null && _p$lng !== void 0 ? _p$lng : null;
        }
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
        const weight = (_ref = Config.fontWeightAlias && Config.fontWeightAlias[v]) !== null && _ref !== void 0 ? _ref : v;
        this.lng.fontFamily = `${this.fontFamily || ((_Config$fontSettings = Config.fontSettings) == null ? void 0 : _Config$fontSettings.fontFamily)}${weight}`;
    }
    get fontWeight() {
        return this._fontWeight;
    }
    set fontFamily(v) {
        this._fontFamily = v;
        this.lng.fontFamily = v;
    }
    get fontFamily() {
        return this._fontFamily;
    }
    insertChild(node, beforeNode) {
        if (node.parent) {
            node.parent.removeChild(node);
            if (!this.rendered) this._hasRenderedChildren = true;
        }
        node.parent = this;
        if (beforeNode) {
            spliceItem(this.children, node, 1);
            if (spliceItem(this.children, beforeNode, 0, node) > -1) return;
        }
        this.children.push(node);
    }
    removeChild(node) {
        if (spliceItem(this.children, node, 1) > -1) {
            if (isElementNode(node) && node.onRemove) node.onRemove.call(node, node);
            if (this.requiresLayout()) addToLayoutQueue(this);
        }
    }
    get selectedNode() {
        const selectedIndex = this.selected || 0;
        for (let i = selectedIndex; i < this.children.length; i++) {
            const element = this.children[i];
            if (isElementNode(element)) {
                this.selected = i;
                return element;
            }
        }
    }
    set shader(shaderProps) {
        this.lng.shader = isArray(shaderProps) ? renderer$1.createShader(...shaderProps) : shaderProps;
    }
    _sendToLightningAnimatable(name, value) {
        if (this.rendered && this.transition && Config.animationsEnabled && (this.transition === true || this.transition[name] || this.transition[getPropertyAlias(name)])) {
            const animationSettings = this.transition === true || this.transition[name] === true ? void 0 : this.transition[name] || this.transition[getPropertyAlias(name)];
            if (!("animateProp" in this.lng)) {
                const animationController = this.animate({
                    [name]: value
                }, animationSettings);
                this._fireAnimationEvents(name, value, animationSettings);
                return animationController.start();
            }
            const result = this.lng.animateProp(name, value, animationSettings || this.animationSettings || {});
            this._fireAnimationEvents(name, value, animationSettings);
            return result;
        }
        this.lng[name] = value;
    }
    _fireAnimationEvents(name, value, animationSettings) {
        if (!this.onAnimation) return;
        const settings = animationSettings || this.animationSettings;
        const {animating: animating, stopped: stopped} = this.onAnimation;
        if (animating) animating.call(this, name, value);
        if (stopped) {
            var _settings$duration, _settings$delay;
            const total = ((_settings$duration = settings == null ? void 0 : settings.duration) !== null && _settings$duration !== void 0 ? _settings$duration : 0) + ((_settings$delay = settings == null ? void 0 : settings.delay) !== null && _settings$delay !== void 0 ? _settings$delay : 0);
            setTimeout(() => stopped.call(this, name, value), total);
        }
    }
    animate(props, animationSettings) {
        if (false) assertTruthy(this.rendered, "Node must be rendered before animating");
        return this.lng.animate(props, animationSettings || this.animationSettings || {});
    }
    chain(props, animationSettings) {
        if (this._animationRunning) {
            this._animationQueue = [];
            this._animationRunning = false;
        }
        if (animationSettings) this._animationQueueSettings = animationSettings; else if (!this._animationQueueSettings) this._animationQueueSettings = animationSettings || this.animationSettings;
        animationSettings = animationSettings || this._animationQueueSettings;
        this._animationQueue = this._animationQueue || [];
        this._animationQueue.push({
            props: props,
            animationSettings: animationSettings
        });
        return this;
    }
    async start() {
        let animation = this._animationQueue.shift();
        while (animation) {
            this._animationRunning = true;
            await this.animate(animation.props, animation.animationSettings).start().waitUntilStopped();
            animation = this._animationQueue.shift();
        }
        this._animationRunning = false;
        this._animationQueueSettings = void 0;
    }
    emit(event, ...args) {
        let current = this;
        const capitalizedEvent = `on${event.charAt(0).toUpperCase()}${event.slice(1)}`;
        while (current) {
            const handler = current[capitalizedEvent];
            if (isFunction(handler)) {
                if (handler.call(current, this, ...args) === true) return true;
            }
            current = current.parent;
        }
        return false;
    }
    setFocus() {
        if (this.rendered) {
            if (this.forwardFocus !== void 0) if (isFunction(this.forwardFocus)) {
                if (this.forwardFocus.call(this, this) !== false) return;
            } else {
                const focusedIndex = typeof this.forwardFocus === "number" ? this.forwardFocus : null;
                const nodes = this.children;
                if (focusedIndex !== null && focusedIndex < nodes.length) {
                    const child = nodes[focusedIndex];
                    isElementNode(child) && child.setFocus();
                    return;
                }
            }
            nextActiveElement = this;
            schedulePostMutation();
        } else this._autofocus = true;
    }
    _layoutOnLoad() {
        this.lng.on("loaded", () => {
            schedulePostMutation();
            this.parent.updateLayout();
        });
    }
    getText() {
        const len = this.children.length;
        if (len === 1) return this.children[0].text;
        if (len === 0) return "";
        let result = "";
        for (let i = 0; i < len; i++) result += this.children[i].text;
        return result;
    }
    destroy() {
        if (this.onDestroy) {
            const destroyPromise = this.onDestroy(this);
            if (destroyPromise instanceof Promise) destroyPromise.then(() => this._destroy()); else this._destroy();
        } else this._destroy();
    }
    _destroy() {
        if (isINode(this.lng)) this.lng.destroy();
    }
    set style(style) {
        if (false && this._style) console.warn("Style already set: https://solid-tv.github.io/solid/#/essentials/styling?id=style-patterns-to-avoid");
        if (Config.lockStyles && this._style) return;
        if (!style) return;
        this._style = style;
        for (const key in this._style) if (this[key] === void 0) this[key] = this._style[key];
    }
    get style() {
        return this._style || {};
    }
    set theme(styles) {
        if (!styles) return;
        this._theme = styles;
        for (const key in styles) this[key] = styles[key];
    }
    get theme() {
        this._theme = this._theme || {};
        return this._theme;
    }
    get hasChildren() {
        return this.children.length > 0;
    }
    set src(src) {
        if (typeof src === "string") {
            this.lng.src = src;
            if (!this.color && this.rendered) this.color = 4294967295;
        } else this.color = 0;
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
        this._states = this._states ? this._states.merge(states) : new States(this._stateChanged.bind(this), states);
        if (this.rendered) this._stateChanged();
    }
    get states() {
        this._states = this._states || new States(this._stateChanged.bind(this));
        return this._states;
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
        return this.alpha === 0;
    }
    get preserve() {
        return this._queueDelete === 0;
    }
    set preserve(v) {
        this._queueDelete = v ? 0 : void 0;
    }
    set autofocus(val) {
        this._autofocus = val;
        if (val) {
            deferredFocusElement = this;
            schedulePostMutation();
        }
    }
    get autofocus() {
        return this._autofocus;
    }
    get display() {
        return this._display;
    }
    set display(v) {
        this._display = v;
        this._requiresLayout = v === "flex" || this._onLayout !== void 0;
    }
    get onLayout() {
        return this._onLayout;
    }
    set onLayout(fn) {
        this._onLayout = fn;
        this._requiresLayout = this._display === "flex" || fn !== void 0;
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
            if (false) log("Layout: ", this);
            if (this.display === "flex" && this.flexGrow && this.width === 0) return;
            const flexChanged = this.display === "flex" && calculateFlex(this);
            layoutQueue.delete(this);
            const onLayoutChanged = isFunction(this.onLayout) && this.onLayout.call(this, this);
            if ((flexChanged || onLayoutChanged) && this.parent) addToLayoutQueue(this.parent);
            if (this._containsFlexGrow === true) this.children.forEach(c => {
                if (c.display === "flex" && isElementNode(c)) {
                    calculateFlex(c);
                    isFunction(c.onLayout) && c.onLayout.call(c, c);
                    addToLayoutQueue(this);
                }
            });
        }
    }
    _stateChanged() {
        if (false) log("State Changed: ", this, this.states);
        if (false) {
            var _this$lng;
            const div = (_this$lng = this.lng) == null ? void 0 : _this$lng.div;
            if (div) if (this.states.length > 0) div.dataset.states = this.states.join(" "); else delete div.dataset.states;
        }
        if (this.forwardStates) {
            const states = this.states.slice();
            this.children.forEach(c => {
                c.states = states;
            });
        }
        const states = this.states;
        if (this._undoStyles || keyExists(this, states)) {
            let stylesToUndo;
            if (this._undoStyles && this._undoStyles.length) {
                stylesToUndo = {};
                this._undoStyles.forEach(styleKey => {
                    let fallbackValue = this.theme[styleKey];
                    if (fallbackValue === void 0) fallbackValue = this.style[styleKey];
                    if (false) {
                        if (fallbackValue === void 0) console.warn("fallback style key not found: ", styleKey);
                    }
                    stylesToUndo[styleKey] = fallbackValue;
                });
            }
            const numStates = states.length;
            if (numStates === 0) {
                Object.assign(this, stylesToUndo);
                this._undoStyles = [];
                return;
            }
            let newStyles;
            if (numStates === 1) {
                newStyles = this[states[0]];
                newStyles = stylesToUndo ? {
                    ...stylesToUndo,
                    ...newStyles
                } : newStyles;
            } else {
                let sortedStates = states;
                const stateOrder = this.stateOrder || Config.stateOrder;
                if (stateOrder && stateOrder.length > 0) sortedStates = states.slice().sort((a, b) => {
                    const aIdx = stateOrder.indexOf(a);
                    const bIdx = stateOrder.indexOf(b);
                    if (aIdx !== -1 && bIdx === -1) return 1;
                    if (aIdx === -1 && bIdx !== -1) return -1;
                    return aIdx - bIdx;
                });
                newStyles = sortedStates.reduce((acc, state) => {
                    const styles = this[state];
                    return styles ? {
                        ...acc,
                        ...styles
                    } : acc;
                }, stylesToUndo || {});
            }
            if (newStyles) {
                this._undoStyles = Object.keys(newStyles);
                if (newStyles.transition !== void 0) this.transition = newStyles.transition;
                Object.assign(this, newStyles);
            } else this._undoStyles = [];
        }
    }
    render(topNode) {
        var _this$onCreate, _this$onRender2, _node$lng;
        const node = this;
        const parent = this.parent;
        if (!parent) {
            console.warn("Parent not set - no node created for: ", this);
            return;
        }
        if (!parent.rendered) {
            console.warn("Parent not rendered yet: ", this);
            return;
        }
        if (parent.requiresLayout()) layoutQueue.add(parent);
        if (this.rendered) {
            var _this$onRender;
            (_this$onRender = this.onRender) == null || _this$onRender.call(this, this);
            return;
        }
        if (this._states) this._stateChanged();
        const props = node.lng;
        const parentWidth = parent.w || 0;
        const parentHeight = parent.h || 0;
        props.x = props.x || 0;
        props.y = props.y || 0;
        props.parent = parent.lng;
        if (this.right || this.right === 0) {
            props.x = parentWidth - this.right;
            props.mountX = 1;
        }
        if (this.bottom || this.bottom === 0) {
            props.y = parentHeight - this.bottom;
            props.mountY = 1;
        }
        if (this.center) this.centerX = this.centerY = true;
        if (this.centerX) {
            props.x += parentWidth / 2;
            props.mountX = .5;
        }
        if (this.centerY) {
            props.y += parentHeight / 2;
            props.mountY = .5;
        }
        if (isElementText(node)) {
            const textProps = props;
            if (_fontTemplate === void 0) buildFontTemplate();
            const tpl = _fontTemplate;
            if (tpl.length > 0) {
                const familyIdx = _fontFamilyIdx;
                const familyWithWeight = textProps["fontWeight"] === void 0 ? _fontFamilyWithWeight : void 0;
                for (let i = 0; i < tpl.length; i++) {
                    const entry = tpl[i];
                    const key = entry[0];
                    if (textProps[key] === void 0) textProps[key] = i === familyIdx && familyWithWeight !== void 0 ? familyWithWeight : entry[1];
                }
            }
            textProps.text = textProps.text || node.getText();
            if (textProps.textAlign && !textProps.contain) console.warn("Text align requires contain: ", node.getText());
            if (textProps.contain) {
                if (textProps.contain === "both") {
                    var _textProps$maxWidth, _textProps$maxHeight;
                    textProps.maxWidth = (_textProps$maxWidth = textProps.maxWidth) !== null && _textProps$maxWidth !== void 0 ? _textProps$maxWidth : textProps.w;
                    textProps.maxHeight = (_textProps$maxHeight = textProps.maxHeight) !== null && _textProps$maxHeight !== void 0 ? _textProps$maxHeight : textProps.h;
                } else if (textProps.contain === "width") {
                    var _textProps$maxWidth2;
                    textProps.maxWidth = (_textProps$maxWidth2 = textProps.maxWidth) !== null && _textProps$maxWidth2 !== void 0 ? _textProps$maxWidth2 : textProps.w;
                }
                if (!textProps.h && !textProps.maxHeight) {
                    var _textProps$maxLines;
                    textProps.maxLines = (_textProps$maxLines = textProps.maxLines) !== null && _textProps$maxLines !== void 0 ? _textProps$maxLines : 99;
                }
                if (!textProps.maxWidth) textProps.maxWidth = parentWidth - textProps.x - (textProps.marginRight || 0);
                if (textProps.contain === "both" && !textProps.maxHeight) textProps.maxHeight = parentHeight - textProps.y - (textProps.marginBottom || 0); else if (textProps.maxLines === 1) textProps.maxHeight = textProps.maxHeight || textProps.lineHeight || textProps.fontSize;
            }
            if (SHADERS_ENABLED && props.shader && !("shaderType" in props.shader)) props.shader = Config.convertToShader(node, props.shader);
            if (false) log("Rendering: ", this, props);
            node.lng = renderer$1.createTextNode(props);
            if (parent.requiresLayout()) {
                if (!textProps.maxWidth || !textProps.maxHeight) node._layoutOnLoad();
            }
        } else {
            if (!props.texture) {
                if (isNaN(props.w)) {
                    let flexFitsWidth = false;
                    if (node.display === "flex") {
                        const flexDirection = node.flexDirection || "row";
                        flexFitsWidth = (flexDirection === "row" || flexDirection === "row-reverse") && node.flexBoundary !== "fixed";
                        if (false && flexFitsWidth) {
                            if ([ "center", "flex-end", "space-between", "space-around", "space-evenly" ].includes(node.justifyContent)) console.warn(`justifyContent '${node.justifyContent}' requires an explicit width on the flex container; without one it shrinks to fit its children and has no free space to distribute: `, this);
                        }
                    }
                    if (node.flexGrow || flexFitsWidth) props.w = 0; else props.w = parentWidth - props.x;
                    node._calcWidth = true;
                }
                if (isNaN(props.h)) {
                    props.h = parentHeight - props.y;
                    node._calcHeight = true;
                }
                if (props.rtt && !props.color) props.color = 4294967295;
                if (!props.color && !props.src) props.color = 0;
            }
            if (SHADERS_ENABLED && props.shader && !("shaderType" in props.shader)) props.shader = Config.convertToShader(node, props.shader);
            if (false) log("Rendering: ", this, props);
            node.lng = renderer$1.createNode(props);
            if (node._hasRenderedChildren) {
                node._hasRenderedChildren = false;
                for (const child of node.children) if (isElementNode(child) && isINode(child.lng)) child.lng.parent = node.lng;
            }
        }
        node.rendered = true;
        if (false) node._rendererProps = props;
        if (node.autosize && parent.requiresLayout()) node._layoutOnLoad();
        (_this$onCreate = this.onCreate) == null || _this$onCreate.call(this, this);
        (_this$onRender2 = this.onRender) == null || _this$onRender2.call(this, this);
        if (node.onEvent) {
            for (const [name, handler] of Object.entries(node.onEvent)) if (typeof node.lng.on === "function") node.lng.on(name, (_inode, data) => handler.call(node, node, data));
        }
        const div = (_node$lng = node.lng) == null ? void 0 : _node$lng.div;
        if (false && div) {
            div.element = node;
            if (node._states && node._states.length > 0) div.dataset.states = node._states.join(" ");
        }
        if (node._type === NodeType.Element) {
            const numChildren = node.children.length;
            for (let i = 0; i < numChildren; i++) {
                const c = node.children[i];
                if (false) assertTruthy(c, "Child is undefined");
                if (isElementNode(c)) c.render();
            }
        }
        if (topNode) schedulePostMutation();
        if (node._autofocus) node.setFocus();
    }
};

for (const key of LightningRendererNumberProps) Object.defineProperty(ElementNode.prototype, key, {
    get() {
        return this.lng[key];
    },
    set(v) {
        this._sendToLightningAnimatable(key, v);
    }
});

for (const key of LightningRendererNonAnimatingProps) Object.defineProperty(ElementNode.prototype, key, {
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
            let target = this.lng.shader || {};
            this._effects = this._effects || {};
            this._effects[key] = value;
            let animationSettings;
            if ((_this$lng$shader2 = this.lng.shader) == null ? void 0 : _this$lng$shader2.props) {
                target = this.lng.shader.props;
                const transitionKey = key === "rounded" ? "borderRadius" : key;
                if (this.transition && (this.transition === true || this.transition[transitionKey])) {
                    target = {};
                    animationSettings = this.transition === true || this.transition[transitionKey] === true ? void 0 : this.transition[transitionKey];
                }
            }
            if (key === "rounded" || typeof value === "number") target.radius = value; else parseAndAssignShaderProps(key, value, target);
            this._writeShaderTarget(target);
            if (animationSettings) this.animate({
                shaderProps: target
            }, animationSettings).start();
        },
        get() {
            var _this$_effects;
            return (_this$_effects = this._effects) == null ? void 0 : _this$_effects[key];
        }
    };
}

if (false) ElementNode.prototype.lngTree = function() {
    return logRenderTree(this);
};

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
        if (marker !== void 0 && !initial) initial = [];
        if (typeof accessor !== "function") return insertExpression(parent, accessor, initial, marker);
        createRenderEffect(current => insertExpression(parent, accessor(), current, marker), initial);
    }
    function insertExpression(parent, value, current, marker, unwrapArray) {
        while (typeof current === "function") current = current();
        if (value === current) return current;
        const t = typeof value, multi = marker !== void 0;
        if (t === "string" || t === "number") {
            if (t === "number") value = value.toString();
            if (multi) {
                let node = current[0];
                if (node && isTextNode(node)) replaceText(node, value); else node = createTextNode(value);
                current = cleanChildren(parent, current, marker, node);
            } else if (current !== "" && typeof current === "string") replaceText(getFirstChild(parent), current = value); else {
                cleanChildren(parent, current, marker, createTextNode(value));
                current = value;
            }
        } else if (value == null || t === "boolean") current = cleanChildren(parent, current, marker); else if (t === "function") {
            createRenderEffect(() => {
                let v = value();
                while (typeof v === "function") v = v();
                current = insertExpression(parent, v, current, marker);
            });
            return () => current;
        } else if (Array.isArray(value)) {
            const array = [];
            if (normalizeIncomingArray(array, value, unwrapArray)) {
                createRenderEffect(() => current = insertExpression(parent, array, current, marker, true));
                return () => current;
            }
            if (array.length === 0) {
                const replacement = cleanChildren(parent, current, marker);
                if (multi) return current = replacement;
            } else if (Array.isArray(current)) if (current.length === 0) appendNodes(parent, array, marker); else reconcileArrays(parent, current, array); else if (current == null || current === "") appendNodes(parent, array); else reconcileArrays(parent, multi && current || [ getFirstChild(parent) ], array);
            current = array;
        } else {
            if (Array.isArray(current)) {
                if (multi) return current = cleanChildren(parent, current, marker, value);
                cleanChildren(parent, current, null, value);
            } else if (current == null || current === "" || !getFirstChild(parent)) insertNode(parent, value); else replaceNode(parent, value, getFirstChild(parent));
            current = value;
        }
        return current;
    }
    function normalizeIncomingArray(normalized, array, unwrap) {
        let dynamic = false;
        for (let i = 0, len = array.length; i < len; i++) {
            let item = array[i], t;
            if (item == null || item === true || item === false) ; else if (Array.isArray(item)) dynamic = normalizeIncomingArray(normalized, item) || dynamic; else if ((t = typeof item) === "string" || t === "number") normalized.push(createTextNode(item)); else if (t === "function") if (unwrap) {
                while (typeof item === "function") item = item();
                dynamic = normalizeIncomingArray(normalized, Array.isArray(item) ? item : [ item ]) || dynamic;
            } else {
                normalized.push(item);
                dynamic = true;
            } else normalized.push(item);
        }
        return dynamic;
    }
    function reconcileArrays(parentNode, a, b) {
        let bLength = b.length, aEnd = a.length, bEnd = bLength, aStart = 0, bStart = 0, after = getNextSibling(a[aEnd - 1]), map = null;
        while (aStart < aEnd || bStart < bEnd) {
            if (a[aStart] === b[bStart]) {
                aStart++;
                bStart++;
                continue;
            }
            while (a[aEnd - 1] === b[bEnd - 1]) {
                aEnd--;
                bEnd--;
            }
            if (aEnd === aStart) {
                const node = bEnd < bLength ? bStart ? getNextSibling(b[bStart - 1]) : b[bEnd - bStart] : after;
                while (bStart < bEnd) insertNode(parentNode, b[bStart++], node);
            } else if (bEnd === bStart) while (aStart < aEnd) {
                if (!map || !map.has(a[aStart])) removeNode(parentNode, a[aStart]);
                aStart++;
            } else if (a[aStart] === b[bEnd - 1] && b[bStart] === a[aEnd - 1]) {
                const node = getNextSibling(a[--aEnd]);
                insertNode(parentNode, b[bStart++], getNextSibling(a[aStart++]));
                insertNode(parentNode, b[--bEnd], node);
                a[aEnd] = b[bEnd];
            } else {
                if (!map) {
                    map = new Map;
                    let i = bStart;
                    while (i < bEnd) map.set(b[i], i++);
                }
                const index = map.get(a[aStart]);
                if (index != null) if (bStart < index && index < bEnd) {
                    let i = aStart, sequence = 1, t;
                    while (++i < aEnd && i < bEnd) {
                        if ((t = map.get(a[i])) == null || t !== index + sequence) break;
                        sequence++;
                    }
                    if (sequence > index - bStart) {
                        const node = a[aStart];
                        while (bStart < index) insertNode(parentNode, b[bStart++], node);
                    } else replaceNode(parentNode, b[bStart++], a[aStart++]);
                } else aStart++; else removeNode(parentNode, a[aStart++]);
            }
        }
    }
    function cleanChildren(parent, current, marker, replacement) {
        if (marker === void 0) {
            let removed;
            while (removed = getFirstChild(parent)) removeNode(parent, removed);
            replacement && insertNode(parent, replacement);
            return "";
        }
        const node = replacement || createTextNode("");
        if (current.length) {
            let inserted = false;
            for (let i = current.length - 1; i >= 0; i--) {
                const el = current[i];
                if (node !== el) {
                    const isParent = getParentNode(el) === parent;
                    if (!inserted && !i) isParent ? replaceNode(parent, node, el) : insertNode(parent, node, marker); else isParent && removeNode(parent, el);
                } else inserted = true;
            }
        } else insertNode(parent, node, marker);
        return [ node ];
    }
    function appendNodes(parent, array, marker) {
        for (let i = 0, len = array.length; i < len; i++) insertNode(parent, array[i], marker);
    }
    function replaceNode(parent, newNode, oldNode) {
        insertNode(parent, newNode, oldNode);
        removeNode(parent, oldNode);
    }
    function spreadExpression(node, props, prevProps = {}, skipChildren) {
        props || (props = {});
        if (!skipChildren) createRenderEffect(() => prevProps.children = insertExpression(node, props.children, prevProps.children));
        createRenderEffect(() => props.ref && props.ref(node));
        createRenderEffect(() => {
            for (const prop in props) {
                if (prop === "children" || prop === "ref") continue;
                const value = props[prop];
                if (value === prevProps[prop]) continue;
                setProperty(node, prop, value, prevProps[prop]);
                prevProps[prop] = value;
            }
        });
        return prevProps;
    }
    return {
        render(code, element) {
            let disposer;
            createRoot(dispose => {
                disposer = dispose;
                insert(element, code());
            });
            return disposer;
        },
        insert: insert,
        spread(node, accessor, skipChildren) {
            if (typeof accessor === "function") createRenderEffect(current => spreadExpression(node, accessor(), current, skipChildren)); else spreadExpression(node, accessor, void 0, skipChildren);
        },
        createElement: createElement,
        createTextNode: createTextNode,
        insertNode: insertNode,
        setProp(node, name, value, prev) {
            setProperty(node, name, value, prev);
            return value;
        },
        mergeProps: mergeProps,
        effect: createRenderEffect,
        memo: memo$1,
        createComponent: createComponent$1,
        use(fn, element, arg) {
            return untrack(() => fn(element, arg));
        }
    };
}

function createRenderer$2(options) {
    const renderer = createRenderer$1(options);
    renderer.mergeProps = mergeProps;
    return renderer;
}

var solidOpts_default = {
    createElement(name) {
        return new ElementNode(name);
    },
    createTextNode(text) {
        return new TextNode(text);
    },
    replaceText(node, value) {
        log("Replace Text: ", node, value);
        node.text = value;
        const parent = node.parent;
        assertTruthy(parent);
        parent.text = parent.getText();
    },
    setProperty(node, name, value) {
        node[name] = value;
    },
    insertNode(parent, node, anchor) {
        log("INSERT: ", parent, node, anchor);
        const prevParent = node.parent;
        parent.insertChild(node, anchor);
        if (node instanceof ElementNode) {
            if (node.parent.rendered) node.render(true);
            if (prevParent !== void 0) enqueueDelete(node, 1);
        } else if (isElementText(parent)) parent.text = parent.getText();
    },
    isTextNode(node) {
        return isElementText(node);
    },
    removeNode(parent, node) {
        log("REMOVE: ", parent, node);
        parent.removeChild(node);
        if (node instanceof ElementNode) enqueueDelete(node, -1); else if (isElementText(parent)) parent.text = parent.getText();
    },
    getParentNode(node) {
        return node.parent;
    },
    getFirstChild(node) {
        return node.children[0];
    },
    getNextSibling(node) {
        const children = node.parent.children || [];
        const index = children.indexOf(node) + 1;
        if (index < children.length) return children[index];
    }
};

var solidRenderer = createRenderer$2(solidOpts_default);

var renderer;

var rootNode = solidOpts_default.createElement("App");

var render = function(code) {
    return solidRenderer.render(code, rootNode);
};

function createRenderer(rendererOptions, node) {
    renderer = startLightningRenderer(rendererOptions || Config.rendererOptions, node || "app");
    rootNode.lng = renderer.root;
    rootNode.rendered = true;
    renderer.on("idle", () => {
        tasksEnabled = true;
        processTasks();
    });
    return {
        renderer: renderer,
        rootNode: rootNode,
        render: render
    };
}

var {effect: effect, memo: memo, createComponent: createComponent, createElement: createElement, createTextNode: createTextNode, insertNode: insertNode, insert: insert, spread: spread, setProp: setProp, use: use} = solidRenderer;

var taskQueue = [];

var tasksEnabled = false;

createRoot(() => {
    createRenderEffect(() => {
        activeElement();
        tasksEnabled = false;
    });
});

function scheduleTask(callback, priority = "low") {
    if (priority === "high") taskQueue.unshift(callback); else taskQueue.push(callback);
    processTasks();
}

function processTasks() {
    if (tasksEnabled && taskQueue.length) setTimeout(() => {
        const task = taskQueue.shift();
        if (task) {
            task();
            processTasks();
        }
    }, Config.taskDelay || 50);
}

function Dynamic(props) {
    const [p, others] = splitProps(props, [ "component" ]);
    const cached = createMemo(() => p.component);
    return createMemo(() => {
        const component = cached();
        switch (typeof component) {
          case "function":
            return untrack(() => component(others));

          case "string":
            {
                const el = createElement(component);
                el.componentName = component;
                spread(el, others);
                return el;
            }

          default:
            break;
        }
    });
}

var View = props => {
    const el = createElement("node");
    spread(el, props, false);
    return el;
};

var Text = props => {
    const el = createElement("text");
    spread(el, props, false);
    return el;
};

export { on as $, activeElement as A, createWebGLContext as At, createComponent$1 as B, renderer$1 as C, calcFactoredRadiusArray as Ct, isFunction as D, TextureType as Dt, isFocused as E, getNormalizedRgbaComponents as Et, Show as F, createRenderEffect as G, createContext as H, Suspense as I, createSelector as J, createResource as K, Switch as L, For as M, Index as N, isInteger as O, DIRTY_QUAD_BUFFER as Ot, Match as P, mergeProps as Q, batch as R, loadFonts as S, isHTMLImageElement as St, isElementNode as T, compareRect as Tt, createEffect as U, createComputed as V, createMemo as W, getListener as X, createSignal as Y, getOwner as Z, ElementNode as _, MAX_QUAD_BUFFER_SIZE as _t, createElement as a, startTransition as at, focusPath as b, createIndexBuffer as bt, effect as c, takeCanvasPrefetch as ct, memo as d, mapTextLayout as dt, onCleanup as et, rootNode as f, normalizeFontMetrics as ft, use as g, MAX_QUADS as gt, spread as h, UpdateType as ht, createComponent as i, sharedConfig as it, $TRACK as j, Config as k, assertTruthy as kt, insert as l, takeSdfPrefetch as lt, setProp as m, uploadCompressedTexture as mt, Text as n, resetErrorBoundaries as nt, createRenderer as o, untrack as ot, scheduleTask as p, CoreShaderNode as pt, createRoot as q, View as r, runWithOwner as rt, createTextNode as s, useContext as st, Dynamic as t, onMount as tt, insertNode as u, defaultFontMetrics as ut, postMutationTiming as v, UNIT_TEXTURE_COORDS as vt, hasFocus as w, clampUnit as wt, useFocusManager as x, createTextureCoords as xt, resetPostMutationTiming as y, WORDS_PER_QUAD as yt, children as z };