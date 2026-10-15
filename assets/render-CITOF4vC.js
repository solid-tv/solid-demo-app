var normalizeBoundsMargin$1 = value => {
    if (!0 === Array.isArray(value)) {
        const arr = value;
        return [ arr[0] || 0, arr[1] || 0, arr[2] || 0, arr[3] || 0 ];
    }
    const m = value || 0;
    return [ m, m, m, m ];
};

function frameTimeBucketLowerBound(index) {
    return index < 32 ? 1 * index : 32 + 8 * (index - 32);
}

function frameTimeBucketIndex(ms) {
    return ms < 32 ? ms < 0 ? 0 : Math.floor(ms) : ms >= 128 ? 44 : 32 + Math.floor((ms - 32) / 8);
}

var TextureErrorCode, EventEmitter = class {
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
        if (index < 0) return;
        const next = [];
        for (let i = 0; i < listeners.length; i++) i !== index && next.push(listeners[i]);
        map[event] = next;
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
        if (void 0 === listeners) return;
        const len = listeners.length;
        for (let i = 0; i < len; i++) listeners[i](this, data);
    }
    hasListener(event) {
        const map = this.eventListeners;
        if (null === map) return !1;
        const listeners = map[event];
        return void 0 !== listeners && listeners.length > 0;
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

!function(TextureErrorCode) {
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
        const isCode = Object.prototype.hasOwnProperty.call(defaultMessages, codeOrMessage), code = isCode ? codeOrMessage : void 0;
        let message;
        message = isCode && code ? null != maybeMessage ? maybeMessage : defaultMessages[code] : String(codeOrMessage), 
        super(message), this.name = "TextureError", code && (this.code = code);
    }
};

function isTextureError(err) {
    return err instanceof TextureError || "object" == typeof err && null !== err && "TextureError" === err.name && "string" == typeof err.code;
}

function visibilityOf(state) {
    return (49152 & state) >>> 14;
}

function withVisibility(state, vis) {
    return (-49153 & state | vis << 14) >>> 0;
}

function renderStateOf(vis) {
    return 0 === vis ? 0 : 1 << vis;
}

var retryDelay = failures => 1e3 / 60 * (1 << Math.min(failures - 1, 10)), IdQueue = class {
    constructor() {
        this.ids = new Int32Array(64), this.head = 0, this.count = 0;
    }
    push(id) {
        let ids = this.ids;
        if (this.count === ids.length) {
            const grown = new Int32Array(2 * ids.length);
            for (let i = 0; i < this.count; i++) grown[i] = ids[(this.head + i) % ids.length];
            this.ids = ids = grown, this.head = 0;
        }
        ids[(this.head + this.count) % ids.length] = id, this.count++;
    }
    first() {
        return this.ids[this.head];
    }
    shift() {
        const id = this.ids[this.head];
        return this.head = (this.head + 1) % this.ids.length, this.count--, id;
    }
};

function growU8$1(a, n) {
    const b = new Uint8Array(n);
    return void 0 !== a && b.set(a), b;
}

function growI32$3(a, n) {
    const b = new Int32Array(n);
    return void 0 !== a && b.set(a), b;
}

function growF64$2(a, n) {
    const b = new Float64Array(n);
    return void 0 !== a && b.set(a), b;
}

function growSide$1(a, n) {
    for (let i = a.length; i < n; i++) a.push(null);
}

function closeData(data) {
    null !== data && "object" == typeof data && "function" == typeof data.close && data.close();
}

var TextureType, TextureStore = class {
    constructor(nodes) {
        this.capacity = 0, this.lruHead = -1, this.orphanHead = -1, this.props = [], this.keys = [], 
        this.data = [], this.errors = [], this.subs = [], this.handles = [], this.cache = new Map, 
        this.pending = 0, this.maxRetries = 5, this.loadedCount = 0, this.loadedBytes = 0, 
        this.wantedCount = 0, this.wantedBytes = 0, this.frame = 0, this.now = () => 0, 
        this.time = 0, this.sink = null, this.onUploaded = () => {}, this.onFailed = () => {}, 
        this.onFreed = () => {}, this.onHeld = () => {}, this.onQueued = () => {}, this.schedule = null, 
        this.requestFrame = () => {}, this.viewQueue = new IdQueue, this.marginQueue = new IdQueue, 
        this.generatedQueue = new IdQueue, this.uploadQueue = new IdQueue, this.freeHead = -1, 
        this.nodes = nodes, this.resize(64), this.freeHead = this.nextFree[0];
    }
    resize(capacity) {
        const old = this.capacity;
        this.state = growU8$1(this.state, capacity), this.kind = growU8$1(this.kind, capacity), 
        this.flags = growU8$1(this.flags, capacity), this.w = growF64$2(this.w, capacity), 
        this.h = growF64$2(this.h, capacity), this.u2 = growF64$2(this.u2, capacity), this.v2 = growF64$2(this.v2, capacity), 
        this.refCount = growI32$3(this.refCount, capacity), this.wantCount = growI32$3(this.wantCount, capacity), 
        this.retryCount = growI32$3(this.retryCount, capacity), this.maxRetryCount = growI32$3(this.maxRetryCount, capacity), 
        this.retryToken = growI32$3(this.retryToken, capacity), this.bytes = growF64$2(this.bytes, capacity), 
        this.createdAt = growF64$2(this.createdAt, capacity), this.gen = growI32$3(this.gen, capacity), 
        this.lruPrev = growI32$3(this.lruPrev, capacity), this.lruNext = growI32$3(this.lruNext, capacity), 
        this.orphanPrev = growI32$3(this.orphanPrev, capacity), this.orphanNext = growI32$3(this.orphanNext, capacity), 
        this.parent = growI32$3(this.parent, capacity), this.ownerHead = growI32$3(this.ownerHead, capacity), 
        this.nextFree = growI32$3(this.nextFree, capacity), growSide$1(this.props, capacity), 
        growSide$1(this.keys, capacity), growSide$1(this.data, capacity), growSide$1(this.errors, capacity), 
        growSide$1(this.subs, capacity), growSide$1(this.handles, capacity);
        for (let i = old; i < capacity - 1; i++) this.nextFree[i] = i + 1;
        this.nextFree[capacity - 1] = this.freeHead, this.freeHead = old, this.capacity = capacity;
    }
    create(kind, props, key, parent = -1) {
        -1 === this.freeHead && this.resize(2 * this.capacity);
        const rec = this.freeHead;
        this.freeHead = this.nextFree[rec], this.state[rec] = 0, this.kind[rec] = kind, 
        this.flags[rec] = 0, this.w[rec] = 0, this.h[rec] = 0, this.u2[rec] = 1, this.v2[rec] = 1, 
        this.refCount[rec] = 0, this.wantCount[rec] = 0, this.retryCount[rec] = 0, this.bytes[rec] = 0, 
        this.createdAt[rec] = this.time;
        const max = props.maxRetryCount;
        if (this.maxRetryCount[rec] = void 0 === max ? this.maxRetries : max, this.parent[rec] = parent, 
        this.ownerHead[rec] = -1, this.props[rec] = props, this.keys[rec] = key, this.handles[rec] = null, 
        this.listAppend(rec, 128), null !== key && this.cache.set(key, rec), -1 !== parent) {
            this.ref(parent);
            let subs = this.subs[parent];
            null === subs && (subs = this.subs[parent] = []), subs.push(rec);
        }
        return rec;
    }
    pixelsOf(rec) {
        return 3 === this.kind[rec] ? this.parent[rec] : rec;
    }
    ref(rec) {
        const n = this.refCount[rec] + 1;
        this.refCount[rec] = n, 1 === n && this.listRemove(rec, 128);
    }
    unref(rec) {
        const n = this.refCount[rec] - 1;
        this.refCount[rec] = n, 0 === n && this.listAppend(rec, 128);
    }
    want(rec, viewport) {
        const n = this.wantCount[rec] + 1;
        this.wantCount[rec] = n;
        const state = this.state[rec];
        1 === n && 4 === state && (this.listRemove(rec, 64), this.wantedCount++, this.wantedBytes += this.bytes[rec]), 
        0 === state || 6 === state ? (this.setPending(rec, 1, !0), this.enqueue(rec, viewport)) : 1 === state && !0 === viewport && this.enqueue(rec, !0);
    }
    unwant(rec) {
        const n = this.wantCount[rec] - 1;
        this.wantCount[rec] = n, 0 === n && 4 === this.state[rec] && (this.wantedCount--, 
        this.wantedBytes -= this.bytes[rec], this.enterLru(rec));
    }
    setPreventCleanup(rec, on) {
        const flags = this.flags[rec];
        if (!0 === on) return this.flags[rec] = 1 | flags, void this.listRemove(rec, 64);
        1 & flags && (this.flags[rec] = -2 & flags, 0 === this.wantCount[rec] && 4 === this.state[rec] && this.enterLru(rec));
    }
    enterLru(rec) {
        1 === this.kind[rec] || 1 & this.flags[rec] || this.listAppend(rec, 64);
    }
    promote(rec) {
        1 === this.state[rec] && this.enqueue(rec, !0);
    }
    enqueue(rec, viewport) {
        const flags = this.flags[rec];
        0 === this.kind[rec] ? !0 === viewport ? 4 & flags || (this.flags[rec] = 4 | flags, 
        this.viewQueue.push(rec)) : 8 & flags || (this.flags[rec] = 8 | flags, this.marginQueue.push(rec)) : 4 & flags || (this.flags[rec] = 4 | flags, 
        this.generatedQueue.push(rec));
    }
    nextGenerated() {
        const queue = this.generatedQueue;
        for (;queue.count > 0; ) {
            const rec = queue.shift();
            if (this.flags[rec] = -5 & this.flags[rec], 1 === this.state[rec]) {
                if (0 !== this.wantCount[rec]) return this.state[rec] = 2, rec;
                this.setPending(rec, 0, !1);
            }
        }
        return -1;
    }
    nextQueued() {
        for (;;) {
            let rec, view = !1;
            if (this.viewQueue.count > 0) rec = this.viewQueue.shift(), this.flags[rec] = -5 & this.flags[rec], 
            view = !0; else {
                if (!(this.marginQueue.count > 0)) return -1;
                rec = this.marginQueue.shift(), this.flags[rec] = -9 & this.flags[rec];
            }
            if (1 !== this.state[rec]) continue;
            if (0 === this.wantCount[rec]) {
                this.setPending(rec, 0, !1);
                continue;
            }
            this.state[rec] = 2;
            const flags = this.flags[rec];
            return this.flags[rec] = !0 === view ? 32 | flags : -33 & flags, rec;
        }
    }
    decoded(rec, data, w, h, glPremultiply) {
        if (2 !== this.state[rec]) return void closeData(data);
        if (this.w[rec] = w, this.h[rec] = h, 0 === this.wantCount[rec]) return closeData(data), 
        void this.setPending(rec, 0, !1);
        this.data[rec] = data;
        const flags = -3 & this.flags[rec];
        this.flags[rec] = !0 === glPremultiply ? 2 | flags : flags, this.state[rec] = 3, 
        this.uploadQueue.push(rec), this.requestFrame();
    }
    failed(rec, error) {
        if (2 !== this.state[rec]) return;
        this.errors[rec] = error;
        const failures = this.retryCount[rec] + 1;
        this.retryCount[rec] = failures;
        const schedule = this.schedule;
        if (failures <= this.maxRetryCount[rec] && null !== schedule) {
            this.setPending(rec, 5, !0);
            const token = this.retryToken[rec] + 1;
            return this.retryToken[rec] = token, schedule(() => {
                this.retry(rec, token);
            }, retryDelay(failures)), void this.onFailed(rec, !1);
        }
        this.setPending(rec, 5, !1), this.onFailed(rec, !0);
    }
    uploadFailed(rec, error) {
        closeData(this.data[rec]), this.data[rec] = null, this.errors[rec] = error, this.setPending(rec, 5, !1), 
        this.onFailed(rec, !0);
    }
    failedForGood(rec) {
        return 5 === this.state[rec] && !(16 & this.flags[rec]);
    }
    retry(rec, token) {
        this.retryToken[rec] === token && 5 === this.state[rec] && (this.errors[rec] = null, 
        0 !== this.wantCount[rec] ? (this.state[rec] = 1, this.enqueue(rec, !!(32 & this.flags[rec])), 
        this.onQueued()) : this.setPending(rec, 0, !1));
    }
    peekDecoded() {
        const queue = this.uploadQueue;
        for (;queue.count > 0; ) {
            const rec = queue.first();
            if (3 === this.state[rec]) {
                if (0 !== this.wantCount[rec]) return rec;
                queue.shift(), closeData(this.data[rec]), this.data[rec] = null, this.setPending(rec, 0, !1);
            } else queue.shift();
        }
        return -1;
    }
    releaseUnwantedDecoded() {
        const queue = this.uploadQueue;
        for (let n = queue.count; n > 0; n--) {
            const rec = queue.shift();
            3 === this.state[rec] && (0 !== this.wantCount[rec] ? (this.onHeld(rec), queue.push(rec)) : (closeData(this.data[rec]), 
            this.data[rec] = null, this.setPending(rec, 0, !1)));
        }
        return queue.count;
    }
    nextDecoded() {
        const rec = this.peekDecoded();
        return -1 !== rec && this.uploadQueue.shift(), rec;
    }
    rotateDecoded() {
        const queue = this.uploadQueue;
        queue.push(queue.shift());
    }
    get decodedCount() {
        return this.uploadQueue.count;
    }
    uploaded(rec, bytes) {
        closeData(this.data[rec]), this.data[rec] = null, this.bytes[rec] = bytes, this.loadedCount++, 
        this.loadedBytes += bytes, this.wantedCount++, this.wantedBytes += bytes, this.setPending(rec, 4, !1), 
        this.onUploaded(rec);
    }
    free(rec) {
        this.dropGpu(rec), this.state[rec] = 6, this.onFreed(rec);
    }
    destroy(rec) {
        this.dropGpu(rec), this.listRemove(rec, 128);
        const key = this.keys[rec];
        null !== key && this.cache.get(key) === rec && this.cache.delete(key), closeData(this.data[rec]);
        const parent = this.parent[rec];
        if (-1 !== parent) {
            const subs = this.subs[parent];
            subs.splice(subs.indexOf(rec), 1), this.unref(parent);
        }
        const handle = this.handles[rec];
        null !== handle && (handle.id = -1), this.data[rec] = null, this.props[rec] = null, 
        this.keys[rec] = null, this.errors[rec] = null, this.subs[rec] = null, this.handles[rec] = null, 
        this.state[rec] = 0, this.flags[rec] = 0, this.retryToken[rec] = this.retryToken[rec] + 1, 
        this.gen[rec] = this.gen[rec] + 1, this.nextFree[rec] = this.freeHead, this.freeHead = rec;
    }
    dropGpu(rec) {
        if (4 !== this.state[rec]) return;
        null !== this.sink && this.sink.deleteTexture(rec);
        const bytes = this.bytes[rec];
        this.loadedCount--, this.loadedBytes -= bytes, this.wantCount[rec] > 0 && (this.wantedCount--, 
        this.wantedBytes -= bytes), this.bytes[rec] = 0, this.listRemove(rec, 64);
    }
    listAppend(rec, list) {
        const flags = this.flags[rec];
        if (0 !== (flags & list)) return;
        this.flags[rec] = flags | list;
        const lru = 64 === list, prev = !0 === lru ? this.lruPrev : this.orphanPrev, next = !0 === lru ? this.lruNext : this.orphanNext, head = !0 === lru ? this.lruHead : this.orphanHead;
        if (next[rec] = -1, -1 === head) return prev[rec] = rec, void (!0 === lru ? this.lruHead = rec : this.orphanHead = rec);
        const tail = prev[head];
        next[tail] = rec, prev[rec] = tail, prev[head] = rec;
    }
    listRemove(rec, list) {
        const flags = this.flags[rec];
        if (0 === (flags & list)) return;
        this.flags[rec] = flags & ~list;
        const lru = 64 === list, prev = !0 === lru ? this.lruPrev : this.orphanPrev, next = !0 === lru ? this.lruNext : this.orphanNext, head = !0 === lru ? this.lruHead : this.orphanHead, after = next[rec];
        if (rec === head) return -1 !== after && (prev[after] = prev[rec]), void (!0 === lru ? this.lruHead = after : this.orphanHead = after);
        const before = prev[rec];
        next[before] = after, -1 === after ? prev[head] = before : prev[after] = before;
    }
    addOwner(rec, id) {
        const s = this.nodes, head = this.ownerHead[rec];
        s.i32[32 * id + 22] = -1, s.i32[32 * id + 21] = head, -1 !== head && (s.i32[32 * head + 22] = id), 
        this.ownerHead[rec] = id;
    }
    removeOwner(rec, id) {
        const s = this.nodes, prev = s.i32[32 * id + 22], next = s.i32[32 * id + 21];
        -1 === prev ? this.ownerHead[rec] = next : s.i32[32 * prev + 21] = next, -1 !== next && (s.i32[32 * next + 22] = prev), 
        s.i32[32 * id + 22] = -1, s.i32[32 * id + 21] = -1;
    }
    setPending(rec, state, pending) {
        this.state[rec] = state;
        const flags = this.flags[rec];
        pending !== !!(16 & flags) && (this.flags[rec] = !0 === pending ? 16 | flags : -17 & flags, 
        this.pending += !0 === pending ? 1 : -1);
    }
};

!function(TextureType) {
    TextureType[TextureType.generic = 0] = "generic", TextureType[TextureType.color = 1] = "color", 
    TextureType[TextureType.image = 2] = "image", TextureType[TextureType.noise = 3] = "noise", 
    TextureType[TextureType.subTexture = 4] = "subTexture";
}(TextureType || (TextureType = {}));

var TEXTURE_STATE_NAMES = [ "initial", "loading", "loading", "fetched", "loaded", "failed", "freed" ], Texture = class extends EventEmitter {
    constructor(store, id, type, props) {
        super(), this._keep = !1, this.store = store, this.id = id, this._gen = store.gen[id], 
        this.type = type, this.props = props;
    }
    get state() {
        const id = liveRecord(this.store, this);
        return -1 === id ? "freed" : TEXTURE_STATE_NAMES[this.store.state[id]];
    }
    get dimensions() {
        const store = this.store, id = liveRecord(store, this);
        return -1 === id || 4 !== store.state[id] ? null : {
            w: store.w[id],
            h: store.h[id]
        };
    }
    get error() {
        const id = liveRecord(this.store, this);
        return -1 === id ? null : this.store.errors[id];
    }
    get preventCleanup() {
        const id = liveRecord(this.store, this);
        return -1 === id ? this._keep : !!(1 & this.store.flags[id]);
    }
    set preventCleanup(v) {
        this._keep = v;
        const id = liveRecord(this.store, this);
        -1 !== id && this.store.setPreventCleanup(id, v);
    }
};

function liveRecord(store, handle) {
    const id = handle.id;
    return -1 !== id && store.gen[id] === handle._gen ? id : -1;
}

var ImageTexture = class extends Texture {};

var SubTexture = class extends Texture {
    get parentTexture() {
        return this.props.texture;
    }
    get state() {
        return this.props.texture.state;
    }
    get dimensions() {
        const p = this.props;
        return "loaded" === p.texture.state ? {
            w: p.w,
            h: p.h
        } : null;
    }
    get error() {
        return this.props.texture.error;
    }
    get preventCleanup() {
        return this.props.texture.preventCleanup;
    }
    set preventCleanup(v) {
        this.props.texture.preventCleanup = v;
    }
}, ColorTexture = class extends Texture {
    get color() {
        return this.props.color;
    }
}, NoiseTexture = class extends Texture {};

function imageKey(src, key, premultiplyAlpha, sx, sy, sw, sh) {
    const id = null != key && "" !== key ? key : src;
    if ("string" != typeof id) return null;
    let out = `ImageTexture,${id},${null == premultiplyAlpha || premultiplyAlpha}`;
    return null != sw && null != sh && (out += `,${null != sx ? sx : ""},${null != sy ? sy : ""},${0 === sw ? "" : sw},${0 === sh ? "" : sh}`), 
    out;
}

function recordFor(store, type, props) {
    let kind = 0, key = null;
    if (type === TextureType.subTexture) {
        const parent = props.texture;
        return store.create(3, props, null, textureRecord(store, parent));
    }
    if (type === TextureType.image) {
        const p = props;
        key = imageKey(p.src, p.key, p.premultiplyAlpha, p.sx, p.sy, p.sw, p.sh);
    } else if (type === TextureType.color) kind = 1, key = `ColorTexture,${props.color}`; else {
        kind = 2;
        const p = props;
        key = void 0 === p.cacheId ? null : `NoiseTexture,${p.w},${p.h},${p.cacheId}`;
    }
    const cached = null === key ? void 0 : store.cache.get(key);
    return void 0 !== cached ? cached : store.create(kind, type === TextureType.image ? function(store, p) {
        var _p$src, _p$premultiplyAlpha, _p$key, _p$type, _p$w, _p$h, _p$sx, _p$sy, _p$sw, _p$sh, _p$maxRetryCount;
        return {
            src: null !== (_p$src = p.src) && void 0 !== _p$src ? _p$src : "",
            premultiplyAlpha: null === (_p$premultiplyAlpha = p.premultiplyAlpha) || void 0 === _p$premultiplyAlpha || _p$premultiplyAlpha,
            key: null !== (_p$key = p.key) && void 0 !== _p$key ? _p$key : null,
            type: null !== (_p$type = p.type) && void 0 !== _p$type ? _p$type : null,
            w: null !== (_p$w = p.w) && void 0 !== _p$w ? _p$w : null,
            h: null !== (_p$h = p.h) && void 0 !== _p$h ? _p$h : null,
            sx: null !== (_p$sx = p.sx) && void 0 !== _p$sx ? _p$sx : null,
            sy: null !== (_p$sy = p.sy) && void 0 !== _p$sy ? _p$sy : null,
            sw: null !== (_p$sw = p.sw) && void 0 !== _p$sw ? _p$sw : null,
            sh: null !== (_p$sh = p.sh) && void 0 !== _p$sh ? _p$sh : null,
            maxRetryCount: null !== (_p$maxRetryCount = p.maxRetryCount) && void 0 !== _p$maxRetryCount ? _p$maxRetryCount : store.maxRetries
        };
    }(store, props) : props, key);
}

function textureRecord(store, handle) {
    const id = liveRecord(store, handle);
    return -1 === id ? function(store, handle) {
        const rec = recordFor(store, handle.type, handle.props);
        handle.id = rec, handle._gen = store.gen[rec], null === store.handles[rec] && (store.handles[rec] = handle);
        !0 === handle._keep && store.setPreventCleanup(rec, !0);
        return rec;
    }(store, handle) : id;
}

function createTexture(store, type, props) {
    let textureType, resolved;
    if (store.time = store.now(), "ImageTexture" === type) textureType = TextureType.image, 
    resolved = props; else if ("SubTexture" === type) {
        var _p$x, _p$y, _p$w2, _p$h2;
        const p = props;
        textureType = TextureType.subTexture;
        let parent = p.texture, x = null !== (_p$x = p.x) && void 0 !== _p$x ? _p$x : 0, y = null !== (_p$y = p.y) && void 0 !== _p$y ? _p$y : 0;
        if (parent.type === TextureType.subTexture) {
            const region = parent.props;
            x += region.x, y += region.y, parent = region.texture;
        }
        resolved = {
            texture: parent,
            x: x,
            y: y,
            w: null !== (_p$w2 = p.w) && void 0 !== _p$w2 ? _p$w2 : 0,
            h: null !== (_p$h2 = p.h) && void 0 !== _p$h2 ? _p$h2 : 0
        };
    } else if ("ColorTexture" === type) {
        var _props$color;
        textureType = TextureType.color;
        const color = null !== (_props$color = props.color) && void 0 !== _props$color ? _props$color : 0;
        resolved = {
            color: 0 === color ? 4294967295 : color
        };
    } else {
        if ("NoiseTexture" !== type) throw new TextureError(TextureErrorCode.TEXTURE_TYPE_NOT_REGISTERED, `Texture type "${String(type)}" is not registered`);
        {
            var _p$w3, _p$h3;
            const p = props;
            textureType = TextureType.noise, resolved = {
                w: null !== (_p$w3 = p.w) && void 0 !== _p$w3 ? _p$w3 : 128,
                h: null !== (_p$h3 = p.h) && void 0 !== _p$h3 ? _p$h3 : 128,
                cacheId: p.cacheId
            };
        }
    }
    const rec = recordFor(store, textureType, resolved);
    let handle = store.handles[rec];
    return null === handle && (handle = new (textureType === TextureType.image ? ImageTexture : textureType === TextureType.subTexture ? SubTexture : textureType === TextureType.color ? ColorTexture : NoiseTexture)(store, rec, textureType, store.props[rec]), 
    store.handles[rec] = handle), handle;
}

var ENABLE_INSPECTOR = "undefined" != typeof __enableInspector__ && __enableInspector__, EMIT_BOUNDS_EVENTS = "undefined" != typeof __emitBoundsEvents__ && __emitBoundsEvents__;

function growI32$2(a, n) {
    const b = new Int32Array(n);
    return void 0 !== a && b.set(a), b;
}

function growSide(a, n) {
    for (let i = a.length; i < n; i++) a.push(null);
}

var same = (a, b) => a === b || !0 === Number.isNaN(a) && !0 === Number.isNaN(b), NodeStore = class {
    constructor(capacity = 1024) {
        this.capacity = 0, this.liveCount = 0, this.generation = 0, this.handles = [], this.shaderRefs = [], 
        this.textureRefs = [], this.srcs = [], this.textureOptions = [], this.clipMargins = [], 
        this.extras = [], this.data = [], this.animations = [], this.params = [], this.texts = [], 
        this.childArrays = [], this.preloads = new Int32Array(16), this.preloadCount = 0, 
        this.anyDirty = !1, this.onDirty = null, this.writes = 0, this.deferFree = !1, this.freeHead = -1, 
        this.nextUid = 1, this.quarantineHead = -1, this.quarantineTail = -1, this.resize(capacity < 1 ? 1 : capacity);
    }
    resize(capacity) {
        const old = this.capacity;
        this.f64 = function(a, n) {
            const b = new Float64Array(n);
            return void 0 !== a && b.set(a), b;
        }(this.f64, 32 * capacity);
        const buffer = new ArrayBuffer(32 * capacity * 4), i32 = new Int32Array(buffer);
        void 0 !== this.i32 && i32.set(this.i32), this.i32 = i32, this.u32 = new Uint32Array(buffer), 
        this.f32 = new Float32Array(buffer), this.prev = growI32$2(this.prev, capacity), 
        this.next = growI32$2(this.next, capacity), growSide(this.handles, capacity), growSide(this.shaderRefs, capacity), 
        growSide(this.textureRefs, capacity), growSide(this.srcs, capacity), growSide(this.textureOptions, capacity), 
        growSide(this.clipMargins, capacity), growSide(this.extras, capacity), growSide(this.data, capacity), 
        growSide(this.animations, capacity), growSide(this.params, capacity), growSide(this.texts, capacity), 
        growSide(this.childArrays, capacity);
        for (let i = old; i < capacity - 1; i++) i32[32 * i + 27] = i + 1;
        i32[32 * (capacity - 1) + 27] = this.freeHead, this.freeHead = old, this.capacity = capacity, 
        this.generation++;
    }
    alloc() {
        -1 === this.freeHead && this.resize(2 * this.capacity);
        const id = this.freeHead, i32 = this.i32, u32 = this.u32, f32 = this.f32, o = 32 * id;
        this.freeHead = i32[o + 27], this.liveCount++, u32[o + 0] = 207, u32[o + 1] = 0, 
        i32[o + 2] = this.nextUid++, i32[o + 3] = -1, i32[o + 4] = -1, i32[o + 5] = -1, 
        this.prev[id] = -1, this.next[id] = -1, i32[o + 6] = 0, u32[o + 11] = 0, u32[o + 12] = 4294967295, 
        i32[o + 13] = 0, i32[o + 14] = -1, u32[o + 15] = 4294967295, u32[o + 16] = 4294967295, 
        u32[o + 17] = 4294967295, u32[o + 18] = 4294967295, u32[o + 19] = 0, i32[o + 20] = -1, 
        i32[o + 21] = -1, i32[o + 22] = -1, f32[o + 23] = 0, f32[o + 24] = 0, f32[o + 25] = 1, 
        f32[o + 26] = 1;
        const f = this.f64, p = 32 * id;
        return f[p + 0] = 0, f[p + 1] = 0, f[p + 2] = 0, f[p + 3] = 0, f[p + 4] = 1, f[p + 5] = 0, 
        f[p + 14] = 0, f[p + 15] = 0, f[p + 16] = 0, f[p + 17] = 0, f[p + 18] = 1, f[p + 19] = 1, 
        f[p + 20] = 1, f[p + 21] = 0, f[p + 22] = 0, f[p + 23] = 0, f[p + 24] = .5, f[p + 25] = .5, 
        id;
    }
    queuePreload(id) {
        const state = this.u32[32 * id + 1];
        if (2097152 & state) return;
        this.u32[32 * id + 1] = 2097152 | state;
        const n = this.preloadCount;
        if (n === this.preloads.length) {
            const grown = new Int32Array(2 * n);
            grown.set(this.preloads), this.preloads = grown;
        }
        this.preloads[n] = id, this.preloadCount = n + 1;
    }
    free(id) {
        const i32 = this.i32, u32 = this.u32, o = 32 * id;
        if (i32[o + 2] = 0, u32[o + 0] = 0, u32[o + 1] = 0, i32[o + 3] = -1, i32[o + 4] = -1, 
        i32[o + 5] = -1, this.prev[id] = -1, this.next[id] = -1, this.handles[id] = null, 
        this.shaderRefs[id] = null, this.textureRefs[id] = null, this.srcs[id] = null, this.textureOptions[id] = null, 
        this.clipMargins[id] = null, this.extras[id] = null, this.data[id] = null, this.animations[id] = null, 
        this.params[id] = null, this.texts[id] = null, this.childArrays[id] = null, this.liveCount--, 
        !0 === this.deferFree) return -1 === this.quarantineHead && (this.quarantineTail = id), 
        i32[o + 27] = this.quarantineHead, void (this.quarantineHead = id);
        i32[o + 27] = this.freeHead, this.freeHead = id;
    }
    endDeferFree() {
        this.deferFree = !1;
        const head = this.quarantineHead;
        -1 !== head && (this.i32[32 * this.quarantineTail + 27] = this.freeHead, this.freeHead = head, 
        this.quarantineHead = -1, this.quarantineTail = -1);
    }
    markDirty(id, bits) {
        if (-1 === id) return;
        const u32 = this.u32, i32 = this.i32, o = 32 * id;
        u32[o + 0] = u32[o + 0] | bits, this.writes++;
        let p = i32[o + 3];
        for (;-1 !== p; ) {
            const q = 32 * p, d = u32[q + 0];
            if (512 & d) break;
            u32[q + 0] = 512 | d, p = i32[q + 3];
        }
        if (!1 === this.anyDirty) {
            this.anyDirty = !0;
            const onDirty = this.onDirty;
            null !== onDirty && onDirty();
        }
    }
    appendChild(parent, child) {
        const f64 = this.f64, prev = this.prev, z = f64[32 * child + 5];
        let after = this.i32[32 * parent + 5];
        for (;-1 !== after && f64[32 * after + 5] > z; ) after = prev[after];
        this.insertAfter(parent, child, after);
    }
    insertBefore(parent, child, before) {
        if (-1 === before) return void this.appendChild(parent, child);
        const f64 = this.f64, prev = this.prev, next = this.next, z = f64[32 * child + 5];
        let after = prev[before];
        for (;-1 !== after && f64[32 * after + 5] > z; ) after = prev[after];
        let following = -1 === after ? this.i32[32 * parent + 4] : next[after];
        for (;-1 !== following && f64[32 * following + 5] < z; ) after = following, following = next[following];
        this.insertAfter(parent, child, after);
    }
    insertAfter(parent, child, after) {
        this.childArrays[parent] = null;
        const i32 = this.i32, prevs = this.prev, nexts = this.next, p = 32 * parent;
        i32[32 * child + 3] = parent, prevs[child] = after;
        const next = -1 === after ? i32[p + 4] : nexts[after];
        nexts[child] = next, -1 === after ? i32[p + 4] = child : nexts[after] = child, -1 === next ? i32[p + 5] = child : prevs[next] = child;
    }
    unlink(child) {
        const i32 = this.i32, c = 32 * child, parent = i32[c + 3];
        if (-1 === parent) return;
        this.childArrays[parent] = null;
        const prevs = this.prev, nexts = this.next, p = 32 * parent, prev = prevs[child], next = nexts[child];
        -1 === prev ? i32[p + 4] = next : nexts[prev] = next, -1 === next ? i32[p + 5] = prev : prevs[next] = prev, 
        i32[c + 3] = -1, prevs[child] = -1, nexts[child] = -1;
    }
    applySize(id, w, h) {
        const f64 = this.f64, o = 32 * id;
        f64[o + 0] === w && f64[o + 1] === h || (f64[o + 0] = w, f64[o + 1] = h, this.markDirty(id, 33));
    }
    applySizeInVisit(id, w, h) {
        const f64 = this.f64, o = 32 * id;
        return !0 === same(f64[o + 0], w) && !0 === same(f64[o + 1], h) ? 0 : (f64[o + 0] = w, 
        f64[o + 1] = h, 33);
    }
    setZIndex(child, z) {
        !1 === Number.isFinite(z) && (z = 0);
        const zi = 32 * child + 5;
        if (this.f64[zi] === z) return;
        const parent = this.i32[32 * child + 3];
        -1 !== parent ? (this.unlink(child), this.f64[zi] = z, this.appendChild(parent, child), 
        this.markDirty(child, 0)) : this.f64[zi] = z;
    }
}, hasOwn$1 = Object.prototype.hasOwnProperty, makeCurve = (kind, xa, xb, xc, ya, yb, yc) => ({
    kind: kind,
    xa: xa,
    xb: xb,
    xc: xc,
    ya: ya,
    yb: yb,
    yc: yc
}), bezierCurve = (a, b, c, d) => {
    const xc = 3 * a, xb = 3 * (c - a) - xc, yc = 3 * b, yb = 3 * (d - b) - yc;
    return makeCurve(1, 1 - xc - xb, xb, xc, 1 - yc - yb, yb, yc);
}, curves = {
    linear: makeCurve(0, 0, 0, 0, 0, 0, 0),
    "step-start": makeCurve(2, 0, 0, 0, 0, 0, 0),
    "step-end": makeCurve(3, 0, 0, 0, 0, 0, 0),
    ease: bezierCurve(.25, .1, .25, 1),
    "ease-in": bezierCurve(.42, 0, 1, 1),
    "ease-out": bezierCurve(0, 0, .58, 1),
    "ease-in-out": bezierCurve(.42, 0, .58, 1),
    "ease-in-sine": bezierCurve(.12, 0, .39, 0),
    "ease-out-sine": bezierCurve(.61, 1, .88, 1),
    "ease-in-out-sine": bezierCurve(.37, 0, .63, 1),
    "ease-in-cubic": bezierCurve(.32, 0, .67, 0),
    "ease-out-cubic": bezierCurve(.33, 1, .68, 1),
    "ease-in-out-cubic": bezierCurve(.65, 0, .35, 1),
    "ease-in-circ": bezierCurve(.55, 0, 1, .45),
    "ease-out-circ": bezierCurve(0, .55, .45, 1),
    "ease-in-out-circ": bezierCurve(.85, 0, .15, 1),
    "ease-in-back": bezierCurve(.36, 0, .66, -.56),
    "ease-out-back": bezierCurve(.34, 1.56, .64, 1),
    "ease-in-out-back": bezierCurve(.68, -.6, .32, 1.6)
}, beziers = new Map, resolveEasing = str => {
    if (!0 === hasOwn$1.call(curves, str)) return curves[str];
    if (0 === str.indexOf("cubic-bezier")) {
        const entry = (str => {
            let entry = beziers.get(str);
            if (void 0 !== entry) return entry;
            const match = str.match(/-?\d*\.?\d+/g);
            return null === match || match.length < 4 ? (console.warn("Unknown cubic-bezier timing: " + str), 
            null) : (beziers.size >= 32 && beziers.delete(beziers.keys().next().value), entry = {
                curve: bezierCurve(parseFloat(match[0]), parseFloat(match[1]), parseFloat(match[2]), parseFloat(match[3])),
                timing: null
            }, beziers.set(str, entry), entry);
        })(str);
        return null === entry ? null : entry.curve;
    }
    return console.warn("Unknown timing function: " + str), null;
};

function premultiplyColorABGR(rgba, alpha) {
    const a = (255 & rgba) / 255 * alpha;
    return (255 * a << 24 | (rgba >>> 8 & 255) * a << 16 | (rgba >>> 16 & 255) * a << 8 | (rgba >>> 24) * a) >>> 0;
}

function clampByte(value) {
    return value < 0 ? 0 : value > 255 ? 255 : value;
}

function mergeColorProgress(rgba1, rgba2, p) {
    const r1 = rgba1 >>> 24, g1 = rgba1 >>> 16 & 255, b1 = rgba1 >>> 8 & 255, a1 = 255 & rgba1, r2 = rgba2 >>> 24, g2 = rgba2 >>> 16 & 255, b2 = rgba2 >>> 8 & 255, a2 = 255 & rgba2, q = 1 - p;
    return (clampByte(Math.round(r2 * p + r1 * q)) << 24 | clampByte(Math.round(g2 * p + g1 * q)) << 16 | clampByte(Math.round(b2 * p + b1 * q)) << 8 | clampByte(Math.round(a2 * p + a1 * q))) >>> 0;
}

var f64Track = (field, bits) => ({
    array: "f64",
    stride: 32,
    field: field,
    bits: bits
}), colorTrack = field => ({
    array: "u32",
    stride: 32,
    field: field,
    bits: 4
}), FAST = {
    x: f64Track(16, 1),
    y: f64Track(17, 1),
    w: f64Track(0, 33),
    h: f64Track(1, 33),
    alpha: f64Track(18, 2),
    scaleX: f64Track(19, 1),
    scaleY: f64Track(20, 1),
    rotation: f64Track(21, 1),
    mountX: f64Track(22, 1),
    mountY: f64Track(23, 1),
    pivotX: f64Track(24, 1),
    pivotY: f64Track(25, 1),
    colorTl: colorTrack(15),
    colorTr: colorTrack(16),
    colorBl: colorTrack(17),
    colorBr: colorTrack(18)
}, GROUPS = {
    scale: [ "scaleX", "scaleY" ],
    mount: [ "mountX", "mountY" ],
    pivot: [ "pivotX", "pivotY" ],
    color: [ "colorTl", "colorTr", "colorBl", "colorBr" ],
    colorTop: [ "colorTl", "colorTr" ],
    colorBottom: [ "colorBl", "colorBr" ],
    colorLeft: [ "colorTl", "colorBl" ],
    colorRight: [ "colorTr", "colorBr" ]
}, noWaiter = () => {};

function shaderPropsOf(node) {
    const shader = node.shader;
    if (null === shader) return null;
    const props = shader.props;
    return null == props ? null : props;
}

function definedCount(sp) {
    let n = 0;
    for (const k in sp) void 0 !== sp[k] && n++;
    return n;
}

function colorPropsOf(shader) {
    const rec = shader._rec;
    if (null == rec) return null;
    const colors = rec.colors;
    return void 0 === colors ? null : colors;
}

var Animation = class {
    constructor(manager, node, props, settings) {
        var _settings$duration, _settings$delay, _settings$loop, _settings$repeat, _settings$repeatDelay, _settings$stopMethod, _settings$easing, _settings$adaptiveDur;
        this.state = "stopped", this.progress = 0, this.reversed = !1, this.easeKind = 4, 
        this.xa = 0, this.xb = 0, this.xc = 0, this.ya = 0, this.yb = 0, this.yc = 0, this.eased = 0, 
        this.lastRunTime = 0, this.index = -1, this.stepFrame = -1, this.firstStep = !1, 
        this.rawStarts = null, this.rawTargets = null, this.stoppedResolve = null, this.stoppedPromise = null, 
        this.manager = manager, this.node = node, this.duration = null !== (_settings$duration = settings.duration) && void 0 !== _settings$duration ? _settings$duration : 0, 
        this.delay = null !== (_settings$delay = settings.delay) && void 0 !== _settings$delay ? _settings$delay : 0, 
        this.delayFor = this.delay, this.loop = null !== (_settings$loop = settings.loop) && void 0 !== _settings$loop && _settings$loop, 
        this.repeat = null !== (_settings$repeat = settings.repeat) && void 0 !== _settings$repeat ? _settings$repeat : 0, 
        this.repeatDelay = null !== (_settings$repeatDelay = settings.repeatDelay) && void 0 !== _settings$repeatDelay ? _settings$repeatDelay : 0, 
        this.repeatsTotal = (this.repeat > 1 ? this.repeat : 1) - 1, this.repeatsLeft = this.repeatsTotal, 
        this.stopMethod = null !== (_settings$stopMethod = settings.stopMethod) && void 0 !== _settings$stopMethod && _settings$stopMethod, 
        this.reverses = "reverse" === this.stopMethod;
        const easing = null !== (_settings$easing = settings.easing) && void 0 !== _settings$easing ? _settings$easing : "linear";
        "string" == typeof easing ? (this.timing = null, this.setBuiltInEasing(easing)) : this.timing = easing;
        const adaptiveDuration = null !== (_settings$adaptiveDur = settings.adaptiveDuration) && void 0 !== _settings$adaptiveDur && _settings$adaptiveDur;
        this.lastRunTime = !0 === adaptiveDuration ? manager.clock() : 0;
        const current = shaderPropsOf(node);
        let count = 0, shaderCount = 0;
        for (const key in props) {
            if ("shaderProps" === key) {
                null !== current && (shaderCount = definedCount(props[key])), count += shaderCount;
                continue;
            }
            const group = GROUPS[key];
            count += void 0 === group ? 1 : group.length;
        }
        this.count = count, this.starts = new Float64Array(count), this.targets = new Float64Array(count), 
        this.ints = new Uint16Array(4 * count), this.refs = new Array(4 * count), this.shaderTracks = 0 === shaderCount ? null : new Uint8Array(count);
        let i = 0;
        const store = node.renderer.nodes;
        this.gen = store.generation;
        const isText = -1 !== node.id && !!(128 & store.u32[32 * node.id + 1]);
        for (const key in props) {
            if ("shaderProps" === key) {
                null !== current && (i = this.fillShaderTracks(i, current, props[key], colorPropsOf(node.shader)));
                continue;
            }
            const value = props[key], group = GROUPS[key];
            if (void 0 === group) this.fillTrack(i++, store, key, value, isText); else for (let g = 0; g < group.length; g++) this.fillTrack(i++, store, group[g], value, isText);
        }
    }
    setBuiltInEasing(name) {
        const curve = resolveEasing(name);
        null !== curve ? (this.easeKind = curve.kind, this.xa = curve.xa, this.xb = curve.xb, 
        this.xc = curve.xc, this.ya = curve.ya, this.yb = curve.yb, this.yc = curve.yc) : this.easeKind = 0;
    }
    fillTrack(i, store, key, value, isText) {
        const fast = FAST[key];
        if (!0 == (void 0 !== fast && !(!0 === isText && ("w" === key || "h" === key)))) {
            const arr = store[fast.array], o = 4 * i, ints = this.ints, refs = this.refs;
            return refs[o + 0] = arr, refs[o + 1] = fast.array, refs[o + 2] = null, refs[o + 3] = null, 
            ints[o + 1] = fast.stride, ints[o + 2] = fast.field, ints[o + 0] = fast.bits, ints[o + 3] = -1 !== key.indexOf("color") ? 1 : 0, 
            this.starts[i] = arr[this.node.id * fast.stride + fast.field] || 0, void (this.targets[i] = value);
        }
        const target = this.node;
        this.setSetterTrack(i, target, key, target[key] || 0, value);
    }
    fillShaderTracks(i, current, sp, colorProps) {
        let at = i;
        for (const k in sp) {
            const value = sp[k];
            if (void 0 === value) continue;
            const start = current[k];
            "number" == typeof value ? (this.shaderTracks[at] = 1, this.setSetterTrack(at, null, k, (!0 === Array.isArray(start) ? start[0] : start) || 0, value), 
            null !== colorProps && -1 !== colorProps.indexOf(k) && (this.ints[4 * at + 3] = 1), 
            at++) : (this.shaderTracks[at] = 2, this.setRawTrack(at++, k, start, value));
        }
        return at;
    }
    setRawTrack(i, key, start, target) {
        null === this.rawStarts && (this.rawStarts = new Array(this.count), this.rawTargets = new Array(this.count)), 
        this.rawStarts[i] = !0 === Array.isArray(start) ? start.slice() : start, this.rawTargets[i] = target, 
        this.setSetterTrack(i, null, key, 0, 0);
    }
    setSetterTrack(i, target, key, start, value) {
        const o = 4 * i, refs = this.refs;
        refs[o + 0] = null, refs[o + 1] = null, refs[o + 2] = target, refs[o + 3] = key, 
        this.ints[o + 0] = 0, this.ints[o + 3] = -1 !== key.indexOf("color") ? 1 : 0, this.starts[i] = start, 
        this.targets[i] = value;
    }
    start() {
        return "running" !== this.state && "scheduled" !== this.state && (null === this.stoppedResolve && (this.stoppedResolve = noWaiter), 
        this.manager.register(this), this.state = "scheduled", this.firstStep = !0), this;
    }
    stop() {
        this.manager.unregister(this);
        const resolve = this.stoppedResolve;
        return this.stoppedResolve = null, this.stoppedPromise = null, this.progress = 0, 
        this.delayFor = this.delay, this.repeatsLeft = this.repeatsTotal, !0 === this.reversed && this.reverse(), 
        this.stopMethod = !0 === this.reverses && "reverse", this.state = "stopped", null !== resolve && resolve(), 
        this;
    }
    pause() {
        return this.manager.unregister(this), this.state = "paused", this;
    }
    restore() {
        return this.stop(), this.eased = 0, this.write(), this;
    }
    waitUntilStopped() {
        return null === this.stoppedResolve ? Promise.resolve() : (null === this.stoppedPromise && (this.stoppedPromise = new Promise(resolve => {
            this.stoppedResolve = resolve;
        })), this.stoppedPromise);
    }
    rebind(store) {
        if (store.generation === this.gen) return;
        const end = 4 * this.count, refs = this.refs;
        for (let o = 0; o < end; o += 4) {
            const name = refs[o + 1];
            null !== name && (refs[o + 0] = store[name]);
        }
        this.gen = store.generation;
    }
    retarget(target) {
        this.rebind(this.node.renderer.nodes);
        const id = this.node.id, n = this.count, ints = this.ints, refs = this.refs;
        for (let i = 0; i < n; i++) {
            const o = 4 * i, arr = refs[o + 0], object = refs[o + 2];
            null !== arr ? this.starts[i] = arr[id * ints[o + 1] + ints[o + 2]] || 0 : null !== object && (this.starts[i] = object[refs[o + 3]] || 0), 
            this.targets[i] = target;
        }
        this.reversed = !1, this.stopMethod = !0 === this.reverses && "reverse", this.repeatsLeft = this.repeatsTotal, 
        this.firstStep = !0;
    }
    step(dt) {
        let remaining = dt;
        if (!0 === this.firstStep) {
            this.firstStep = !1;
            const max = this.manager.maxFirstStep;
            remaining > max && (remaining = max);
        }
        if (this.delayFor > 0) {
            if (this.delayFor -= remaining, this.delayFor >= 0) return;
            remaining = -this.delayFor, this.delayFor = 0;
        }
        "scheduled" === this.state && (this.state = "running");
        const duration = this.duration;
        0 === duration ? this.progress = 1 : this.progress += remaining / duration;
        let finished = !1;
        if (this.progress >= 1 && (!0 === this.loop ? (this.progress = this.progress % 1, 
        this.delayFor = this.delay, "reverse" === this.stopMethod && this.reverse()) : (this.progress = 1, 
        finished = !0)), 0 === this.easeKind ? this.eased = this.progress : this.ease(), 
        this.write(), !1 !== finished) return "reverse" === this.stopMethod ? (this.reverse(), 
        this.progress = 0, void (this.delayFor = this.delay)) : this.repeatsLeft > 0 ? (this.repeatsLeft--, 
        this.progress = 0, this.delayFor = this.repeatDelay, void (!0 === this.reverses && (this.reverse(), 
        this.stopMethod = "reverse"))) : void this.stop();
    }
    ease() {
        const kind = this.easeKind, time = this.progress;
        if (4 === kind) return void (this.eased = this.timing(time));
        if (2 === kind) return void (this.eased = 1);
        if (3 === kind) return void (this.eased = 1 === time ? 1 : 0);
        if (time >= 1) return void (this.eased = 1);
        if (time <= 0) return void (this.eased = 0);
        const xa = this.xa, xb = this.xb, xc = this.xc;
        let t = .5, solved = !1;
        for (let it = 0; it < 20; it++) {
            const dx = time - t * (t * (t * xa + xb) + xc);
            if (dx > -1e-8 && dx < 1e-8) {
                solved = !0;
                break;
            }
            const slope = t * (t * (3 * xa) + 2 * xb) + xc;
            if (slope > -1e-10 && slope < 1e-10) break;
            t += dx / slope;
        }
        if (!1 === solved) {
            let lo = 0, hi = 1;
            for (let it = 0; it < 20; it++) {
                t = .5 * (lo + hi);
                const dx = time - t * (t * (t * xa + xb) + xc);
                if (dx > -1e-8 && dx < 1e-8) break;
                dx < 0 ? hi = t : lo = t;
            }
        }
        this.eased = t * (t * (t * this.ya + this.yb) + this.yc);
    }
    write() {
        if (-1 === this.node.id) return;
        const store = this.node.renderer.nodes;
        this.rebind(store);
        const progress = this.progress, eased = this.eased, id = this.node.id, n = this.count, starts = this.starts, targets = this.targets, ints = this.ints, refs = this.refs, shaderTracks = this.shaderTracks, shaderProps = null === shaderTracks ? null : shaderPropsOf(this.node);
        let bitsOr = 0;
        for (let i = 0; i < n; i++) {
            const o = 4 * i, shaderTrack = null === shaderTracks ? 0 : shaderTracks[i];
            if (2 === shaderTrack) {
                null === shaderProps || 1 !== progress && 0 !== progress || (shaderProps[refs[o + 3]] = 1 === progress ? this.rawTargets[i] : this.rawStarts[i]);
                continue;
            }
            const start = starts[i], target = targets[i];
            let v;
            v = 1 === progress ? target : 0 === progress ? start : 1 === ints[o + 3] ? mergeColorProgress(start, target, eased) : start + (target - start) * eased;
            const arr = refs[o + 0];
            null !== arr ? (arr[id * ints[o + 1] + ints[o + 2]] = v, bitsOr |= ints[o + 0]) : 1 === shaderTrack ? null !== shaderProps && (shaderProps[refs[o + 3]] = v) : refs[o + 2][refs[o + 3]] = v;
        }
        0 !== bitsOr && store.markDirty(id, bitsOr);
    }
    reverse() {
        const n = this.count;
        for (let i = 0; i < n; i++) {
            const t = this.starts[i];
            this.starts[i] = this.targets[i], this.targets[i] = t;
        }
        const rawStarts = this.rawStarts;
        if (null !== rawStarts) {
            const rawTargets = this.rawTargets;
            for (let i = 0; i < n; i++) {
                const t = rawStarts[i];
                rawStarts[i] = rawTargets[i], rawTargets[i] = t;
            }
        }
        this.reversed = !this.reversed, !1 === this.loop && (this.stopMethod = !1);
    }
}, EMPTY_TEXTURE_OPTIONS = Object.freeze({});

function setF(n, field, v, bits) {
    const id = n.id;
    if (-1 === id) return;
    const s = n.renderer.nodes, f64 = s.f64, i = 32 * id + field;
    f64[i] !== v && (f64[i] = v, s.markDirty(id, bits));
}

function setC(n, field, v) {
    const id = n.id;
    if (-1 === id) return;
    const uv = v >>> 0, s = n.renderer.nodes, u32 = s.u32, i = 32 * id + field;
    u32[i] !== uv && (u32[i] = uv, s.markDirty(id, 4));
}

function textureDirty(n, id, bits) {
    const s = n.renderer.nodes;
    s.markDirty(id, bits), 2048 & s.u32[32 * id + 1] && s.queuePreload(id);
}

function extrasOf(n, create) {
    const id = n.id;
    if (-1 === id) return null;
    const s = n.renderer.nodes;
    let e = s.extras[id];
    return null === e && !0 === create && (e = {
        srcX: void 0,
        srcY: void 0,
        srcWidth: void 0,
        srcHeight: void 0,
        imageType: void 0,
        componentName: void 0,
        componentLocation: void 0
    }, s.extras[id] = e), e;
}

var Node = class extends EventEmitter {
    constructor(renderer, id) {
        super(), this.renderer = renderer, this.id = id, this._uid = renderer.nodes.i32[32 * id + 2], 
        renderer.nodes.handles[id] = this;
    }
    get uid() {
        return this._uid;
    }
    get destroyed() {
        return -1 === this.id;
    }
    get stage() {
        return this.renderer;
    }
    get x() {
        return this.renderer.nodes.f64[32 * this.id + 16];
    }
    set x(v) {
        setF(this, 16, v, 1);
    }
    get y() {
        return this.renderer.nodes.f64[32 * this.id + 17];
    }
    set y(v) {
        setF(this, 17, v, 1);
    }
    get w() {
        return this.renderer.nodes.f64[32 * this.id + 0];
    }
    set w(v) {
        setF(this, 0, v, 33);
    }
    get h() {
        return this.renderer.nodes.f64[32 * this.id + 1];
    }
    set h(v) {
        setF(this, 1, v, 33);
    }
    get width() {
        return this.w;
    }
    get height() {
        return this.h;
    }
    get alpha() {
        return this.renderer.nodes.f64[32 * this.id + 18];
    }
    set alpha(v) {
        setF(this, 18, v, 2);
    }
    get rotation() {
        return this.renderer.nodes.f64[32 * this.id + 21];
    }
    set rotation(v) {
        setF(this, 21, v, 1);
    }
    get scaleX() {
        return this.renderer.nodes.f64[32 * this.id + 19];
    }
    set scaleX(v) {
        setF(this, 19, v, 1);
    }
    get scaleY() {
        return this.renderer.nodes.f64[32 * this.id + 20];
    }
    set scaleY(v) {
        setF(this, 20, v, 1);
    }
    get scale() {
        return this.renderer.nodes.f64[32 * this.id + 19];
    }
    set scale(v) {
        null !== v && (this.scaleX = v, this.scaleY = v);
    }
    get mountX() {
        return this.renderer.nodes.f64[32 * this.id + 22];
    }
    set mountX(v) {
        setF(this, 22, v, 1);
    }
    get mountY() {
        return this.renderer.nodes.f64[32 * this.id + 23];
    }
    set mountY(v) {
        setF(this, 23, v, 1);
    }
    get mount() {
        return this.mountX;
    }
    set mount(v) {
        this.mountX = v, this.mountY = v;
    }
    get pivotX() {
        return this.renderer.nodes.f64[32 * this.id + 24];
    }
    set pivotX(v) {
        setF(this, 24, v, 1);
    }
    get pivotY() {
        return this.renderer.nodes.f64[32 * this.id + 25];
    }
    set pivotY(v) {
        setF(this, 25, v, 1);
    }
    get pivot() {
        return this.pivotX;
    }
    set pivot(v) {
        this.pivotX = v, this.pivotY = v;
    }
    get color() {
        return this.renderer.nodes.u32[32 * this.id + 15];
    }
    set color(v) {
        setC(this, 15, v), setC(this, 16, v), setC(this, 17, v), setC(this, 18, v);
    }
    get colorTop() {
        return this.renderer.nodes.u32[32 * this.id + 15];
    }
    set colorTop(v) {
        setC(this, 15, v), setC(this, 16, v);
    }
    get colorBottom() {
        return this.renderer.nodes.u32[32 * this.id + 17];
    }
    set colorBottom(v) {
        setC(this, 17, v), setC(this, 18, v);
    }
    get colorLeft() {
        return this.renderer.nodes.u32[32 * this.id + 15];
    }
    set colorLeft(v) {
        setC(this, 15, v), setC(this, 17, v);
    }
    get colorRight() {
        return this.renderer.nodes.u32[32 * this.id + 16];
    }
    set colorRight(v) {
        setC(this, 16, v), setC(this, 18, v);
    }
    get colorTl() {
        return this.renderer.nodes.u32[32 * this.id + 15];
    }
    set colorTl(v) {
        setC(this, 15, v);
    }
    get colorTr() {
        return this.renderer.nodes.u32[32 * this.id + 16];
    }
    set colorTr(v) {
        setC(this, 16, v);
    }
    get colorBl() {
        return this.renderer.nodes.u32[32 * this.id + 17];
    }
    set colorBl(v) {
        setC(this, 17, v);
    }
    get colorBr() {
        return this.renderer.nodes.u32[32 * this.id + 18];
    }
    set colorBr(v) {
        setC(this, 18, v);
    }
    get placeholderColor() {
        return this.renderer.nodes.u32[32 * this.id + 19];
    }
    set placeholderColor(v) {
        const id = this.id, s = this.renderer.nodes;
        if (-1 === id) return;
        const uv = v >>> 0;
        s.u32[32 * id + 19] !== uv && (s.u32[32 * id + 19] = uv, s.markDirty(id, 68));
    }
    get zIndex() {
        return this.renderer.nodes.f64[32 * this.id + 5];
    }
    set zIndex(v) {
        -1 !== this.id && this.renderer.nodes.setZIndex(this.id, v);
    }
    get parent() {
        const id = this.id;
        if (-1 === id) return null;
        const s = this.renderer.nodes, p = s.i32[32 * id + 3];
        return -1 === p ? null : s.handles[p];
    }
    set parent(p) {
        const id = this.id;
        if (-1 === id) return;
        const s = this.renderer.nodes, old = s.i32[32 * id + 3], next = null === p ? -1 : p.id;
        old !== next && (-1 !== old && (s.unlink(id), s.markDirty(old, 0)), -1 !== next && s.appendChild(next, id), 
        s.markDirty(id, 192));
    }
    insertBefore(child, before) {
        const id = this.id, c = child.id;
        if (-1 === id || -1 === c) return;
        const s = this.renderer.nodes;
        let b = null === before ? -1 : before.id;
        b === c && (b = s.next[c]), -1 !== b && s.i32[32 * b + 3] !== id && (b = -1);
        const old = s.i32[32 * c + 3];
        s.unlink(c), s.insertBefore(id, c, b), old !== id ? (s.markDirty(old, 0), s.markDirty(c, 192)) : s.markDirty(c, 0);
    }
    get children() {
        const id = this.id;
        if (-1 === id) return [];
        const s = this.renderer.nodes, cached = s.childArrays[id];
        if (null !== cached) return cached;
        const out = [];
        let c = s.i32[32 * id + 4];
        for (;-1 !== c; ) out.push(s.handles[c]), c = s.next[c];
        return s.childArrays[id] = out, out;
    }
    get clipping() {
        const id = this.id;
        if (-1 === id) return !1;
        const s = this.renderer.nodes, margins = s.clipMargins[id];
        return null !== margins ? margins : !!(4 & s.u32[32 * id + 1]);
    }
    set clipping(v) {
        const id = this.id;
        if (-1 === id) return;
        const s = this.renderer.nodes, clips = !1 !== v, margins = !0 === Array.isArray(v) ? v : null, state = s.u32[32 * id + 1];
        !!(4 & state) === clips && s.clipMargins[id] === margins || (s.u32[32 * id + 1] = !0 === clips ? 4 | state : -5 & state, 
        s.clipMargins[id] = margins, s.markDirty(id, 8));
    }
    get ignoreParentAlpha() {
        return !!(512 & this.renderer.nodes.u32[32 * this.id + 1]);
    }
    set ignoreParentAlpha(v) {
        !function(n, bit, on, dirty) {
            const id = n.id;
            if (-1 === id) return;
            const s = n.renderer.nodes, state = s.u32[32 * id + 1], next = !0 === on ? state | bit : state & ~bit;
            next !== state && (s.u32[32 * id + 1] = next, s.markDirty(id, dirty));
        }(this, 512, v, 2);
    }
    get autosize() {
        return !!(1024 & this.renderer.nodes.u32[32 * this.id + 1]);
    }
    set autosize(v) {
        const id = this.id;
        if (-1 === id) return;
        const on = !0 === v, s = this.renderer.nodes, state = s.u32[32 * id + 1];
        !!(1024 & state) !== on && (s.u32[32 * id + 1] = !0 === on ? 4195328 | state : -4195329 & state, 
        s.markDirty(id, 16));
    }
    get data() {
        const id = this.id;
        if (-1 === id) return null;
        const s = this.renderer.nodes;
        let d = s.data[id];
        return null === d && (d = {}, s.data[id] = d), d;
    }
    set data(v) {
        void 0 === v && (v = null), -1 !== this.id && (this.renderer.nodes.data[this.id] = v);
    }
    get src() {
        const id = this.id;
        return -1 === id ? null : this.renderer.nodes.srcs[id];
    }
    set src(v) {
        void 0 === v && (v = null);
        const id = this.id, s = this.renderer.nodes;
        -1 !== id && s.srcs[id] !== v && (s.srcs[id] = v, null === v || "" === v ? (s.textureRefs[id] = null, 
        s.u32[32 * id + 1] = -1048577 & s.u32[32 * id + 1]) : s.u32[32 * id + 1] = 1048576 | s.u32[32 * id + 1], 
        textureDirty(this, id, 16));
    }
    get texture() {
        const id = this.id;
        return -1 === id ? null : this.renderer.nodes.textureRefs[id];
    }
    set texture(v) {
        void 0 === v && (v = null);
        const id = this.id;
        if (-1 === id) return;
        const s = this.renderer.nodes, state = s.u32[32 * id + 1];
        (s.textureRefs[id] !== v || 1048576 & state) && (s.textureRefs[id] = v, s.u32[32 * id + 1] = -1048577 & state, 
        textureDirty(this, id, 16));
    }
    get textureOptions() {
        const id = this.id;
        if (-1 === id) return EMPTY_TEXTURE_OPTIONS;
        const v = this.renderer.nodes.textureOptions[id];
        return null === v ? EMPTY_TEXTURE_OPTIONS : v;
    }
    set textureOptions(v) {
        void 0 === v && (v = null);
        const id = this.id;
        if (-1 === id) return;
        const s = this.renderer.nodes;
        s.textureOptions[id] = v;
        const old = s.u32[32 * id + 1];
        let state = -6145 & old;
        if (null !== v) {
            !0 === v.preload && (state |= 2048);
            const mode = v.resizeMode;
            null != mode && "contain" === mode.type && (state |= 4096);
        }
        s.u32[32 * id + 1] = state, s.markDirty(id, 4096 & (old | state) ? 17 : 16), 2048 & (old | state) && s.queuePreload(id);
    }
    get srcX() {
        const e = extrasOf(this, !1);
        return null === e ? void 0 : e.srcX;
    }
    set srcX(v) {
        const id = this.id;
        if (-1 === id) return;
        const e = extrasOf(this, !1);
        null !== e && e.srcX === v || null === e && void 0 === v || (extrasOf(this, !0).srcX = v, 
        textureDirty(this, id, 16));
    }
    get srcY() {
        const e = extrasOf(this, !1);
        return null === e ? void 0 : e.srcY;
    }
    set srcY(v) {
        const id = this.id;
        if (-1 === id) return;
        const e = extrasOf(this, !1);
        null !== e && e.srcY === v || null === e && void 0 === v || (extrasOf(this, !0).srcY = v, 
        textureDirty(this, id, 16));
    }
    get srcWidth() {
        const e = extrasOf(this, !1);
        return null === e ? void 0 : e.srcWidth;
    }
    set srcWidth(v) {
        const id = this.id;
        if (-1 === id) return;
        const e = extrasOf(this, !1);
        null !== e && e.srcWidth === v || null === e && void 0 === v || (extrasOf(this, !0).srcWidth = v, 
        textureDirty(this, id, 16));
    }
    get srcHeight() {
        const e = extrasOf(this, !1);
        return null === e ? void 0 : e.srcHeight;
    }
    set srcHeight(v) {
        const id = this.id;
        if (-1 === id) return;
        const e = extrasOf(this, !1);
        null !== e && e.srcHeight === v || null === e && void 0 === v || (extrasOf(this, !0).srcHeight = v, 
        textureDirty(this, id, 16));
    }
    get imageType() {
        const e = extrasOf(this, !1);
        return null === e || void 0 === e.imageType ? null : e.imageType;
    }
    set imageType(v) {
        const id = this.id;
        if (-1 === id) return;
        const e = extrasOf(this, !1);
        null !== e && e.imageType === v || null === e && void 0 === v || (extrasOf(this, !0).imageType = v, 
        textureDirty(this, id, 16));
    }
    get componentName() {
        const e = extrasOf(this, !1);
        return null === e ? void 0 : e.componentName;
    }
    set componentName(v) {
        if (-1 === this.id) return;
        const e = extrasOf(this, !1);
        null !== e && e.componentName === v || null === e && void 0 === v || (extrasOf(this, !0).componentName = v);
    }
    get componentLocation() {
        const e = extrasOf(this, !1);
        return null === e ? void 0 : e.componentLocation;
    }
    set componentLocation(v) {
        if (-1 === this.id) return;
        const e = extrasOf(this, !1);
        null !== e && e.componentLocation === v || null === e && void 0 === v || (extrasOf(this, !0).componentLocation = v);
    }
    get shader() {
        const id = this.id;
        return -1 === id ? null : this.renderer.nodes.shaderRefs[id];
    }
    set shader(v) {
        void 0 === v && (v = null);
        const id = this.id, s = this.renderer.nodes;
        -1 !== id && s.shaderRefs[id] !== v && (s.shaderRefs[id] = v, s.markDirty(id, 96));
    }
    get absX() {
        const id = this.id;
        if (-1 === id) return 0;
        const s = this.renderer.nodes, own = s.f64[32 * id + 16] - s.f64[32 * id + 0] * s.f64[32 * id + 22], p = this.parent;
        return own + (null === p ? 0 : p.absX || s.f64[32 * p.id + 2] || 0);
    }
    get absY() {
        const id = this.id;
        if (-1 === id) return 0;
        const s = this.renderer.nodes, own = s.f64[32 * id + 17] - s.f64[32 * id + 1] * s.f64[32 * id + 23], p = this.parent;
        return own + (null === p ? 0 : p.absY || s.f64[32 * p.id + 3] || 0);
    }
    get renderState() {
        const id = this.id;
        return -1 === id ? 0 : renderStateOf(visibilityOf(this.renderer.nodes.u32[32 * id + 1]));
    }
    get clippingRect() {
        const id = this.id, rec = -1 === id ? 0 : this.renderer.nodes.i32[32 * id + 6];
        if (0 === rec) return {
            valid: !1,
            x: 0,
            y: 0,
            w: 0,
            h: 0
        };
        const c = this.renderer.clips;
        return {
            valid: 1 === c.valid[rec],
            x: c.x[rec],
            y: c.y[rec],
            w: c.w[rec],
            h: c.h[rec]
        };
    }
    animate(props, settings = {}) {
        return new Animation(this.renderer.animationManager, this, props, settings);
    }
    animateProp(name, value, settings = {}) {
        const id = this.id, s = this.renderer.nodes;
        let map = -1 === id ? null : s.animations[id];
        null === map && (map = {}, -1 !== id && (s.animations[id] = map));
        const existing = map[name];
        if (void 0 !== existing) {
            if (existing.settings === settings) {
                const c = existing.controller;
                if (c.retarget(value), c.progress = 0, !0 === settings.adaptiveDuration) {
                    var _settings$duration;
                    const now = this.renderer.animationManager.clock(), rawElapsed = now - c.lastRunTime, elapsed = rawElapsed < 0 ? 0 : rawElapsed;
                    c.lastRunTime = now;
                    const duration = null !== (_settings$duration = settings.duration) && void 0 !== _settings$duration ? _settings$duration : c.duration;
                    c.duration = elapsed < duration ? elapsed : duration;
                }
                return c.start();
            }
            existing.controller.stop();
        }
        const controller = new Animation(this.renderer.animationManager, this, {
            [name]: value
        }, settings);
        return map[name] = {
            controller: controller,
            settings: settings
        }, controller.start();
    }
    destroy() {
        -1 !== this.id && this.renderer.destroyNode(this);
    }
}, TextState = class {
    constructor() {
        this.text = "", this.fontFamily = "sans-serif", this.fontSize = 16, this.fontStyle = "normal", 
        this.lineHeight = 1.2, this.textAlign = "left", this.verticalAlign = "top", this.contain = "none", 
        this.maxWidth = 0, this.maxHeight = 0, this.maxLines = 0, this.overflowSuffix = "...", 
        this.wordBreak = "break-word", this.letterSpacing = 0, this.offsetY = 0, this.forceLoad = !1, 
        this.layout = null, this.font = null, this.stale = !0, this.waiting = null, this.forced = !1, 
        this.boxW = 0, this.boxH = 0, this.boxX = 0, this.boxY = 0;
    }
}, DEFAULTS = new TextState;

function stateOf(n) {
    const id = n.id;
    return -1 === id ? DEFAULTS : n.renderer.nodes.texts[id];
}

function writable(n) {
    const id = n.id;
    return -1 === id ? null : n.renderer.nodes.texts[id];
}

function relayout(n, t) {
    t.stale = !0, n.renderer.nodes.markDirty(n.id, 256);
}

function rebox(n) {
    n.renderer.nodes.markDirty(n.id, 256);
}

var TextNode$1 = class extends Node {
    constructor(renderer, id) {
        super(renderer, id);
    }
    get w() {
        return this.renderer.nodes.f64[32 * this.id + 0];
    }
    set w(v) {
        this.maxWidth = v;
    }
    get h() {
        return this.renderer.nodes.f64[32 * this.id + 1];
    }
    set h(v) {
        this.maxHeight = v;
    }
    get text() {
        return stateOf(this).text;
    }
    set text(v) {
        const t = writable(this);
        void 0 === v && (v = ""), null !== t && t.text !== v && (t.text = v, relayout(this, t));
    }
    get fontFamily() {
        return stateOf(this).fontFamily;
    }
    set fontFamily(v) {
        const t = writable(this);
        void 0 === v && (v = "sans-serif"), null !== t && t.fontFamily !== v && (t.fontFamily = v, 
        relayout(this, t));
    }
    get fontSize() {
        return stateOf(this).fontSize;
    }
    set fontSize(v) {
        const t = writable(this);
        void 0 === v && (v = 16), null !== t && t.fontSize !== v && (t.fontSize = v, relayout(this, t));
    }
    get fontStyle() {
        return stateOf(this).fontStyle;
    }
    set fontStyle(v) {
        const t = writable(this);
        void 0 === v && (v = "normal"), null !== t && t.fontStyle !== v && (t.fontStyle = v, 
        relayout(this, t));
    }
    get lineHeight() {
        return stateOf(this).lineHeight;
    }
    set lineHeight(v) {
        const t = writable(this);
        void 0 === v && (v = 1.2), null !== t && t.lineHeight !== v && (t.lineHeight = v, 
        relayout(this, t));
    }
    get textAlign() {
        return stateOf(this).textAlign;
    }
    set textAlign(v) {
        const t = writable(this);
        void 0 === v && (v = "left"), null !== t && t.textAlign !== v && (t.textAlign = v, 
        relayout(this, t));
    }
    get maxWidth() {
        return stateOf(this).maxWidth;
    }
    set maxWidth(v) {
        const t = writable(this);
        void 0 === v && (v = 0), null !== t && t.maxWidth !== v && (t.maxWidth = v, relayout(this, t));
    }
    get maxHeight() {
        return stateOf(this).maxHeight;
    }
    set maxHeight(v) {
        const t = writable(this);
        void 0 === v && (v = 0), null !== t && t.maxHeight !== v && (t.maxHeight = v, relayout(this, t));
    }
    get maxLines() {
        return stateOf(this).maxLines;
    }
    set maxLines(v) {
        const t = writable(this);
        void 0 === v && (v = 0), null !== t && t.maxLines !== v && (t.maxLines = v, relayout(this, t));
    }
    get overflowSuffix() {
        return stateOf(this).overflowSuffix;
    }
    set overflowSuffix(v) {
        const t = writable(this);
        void 0 === v && (v = "..."), null !== t && t.overflowSuffix !== v && (t.overflowSuffix = v, 
        relayout(this, t));
    }
    get wordBreak() {
        return stateOf(this).wordBreak;
    }
    set wordBreak(v) {
        const t = writable(this);
        void 0 === v && (v = "break-word"), null !== t && t.wordBreak !== v && (t.wordBreak = v, 
        relayout(this, t));
    }
    get letterSpacing() {
        return stateOf(this).letterSpacing;
    }
    set letterSpacing(v) {
        const t = writable(this);
        void 0 === v && (v = 0), null !== t && t.letterSpacing !== v && (t.letterSpacing = v, 
        relayout(this, t));
    }
    get contain() {
        return stateOf(this).contain;
    }
    set contain(v) {
        const t = writable(this);
        void 0 === v && (v = "none"), null !== t && t.contain !== v && (t.contain = v, rebox(this));
    }
    get verticalAlign() {
        return stateOf(this).verticalAlign;
    }
    set verticalAlign(v) {
        const t = writable(this);
        void 0 === v && (v = "top"), null !== t && t.verticalAlign !== v && (t.verticalAlign = v, 
        rebox(this));
    }
    get offsetY() {
        return stateOf(this).offsetY;
    }
    set offsetY(v) {
        const t = writable(this);
        void 0 === v && (v = 0), null !== t && t.offsetY !== v && (t.offsetY = v, rebox(this));
    }
    get forceLoad() {
        return stateOf(this).forceLoad;
    }
    set forceLoad(v) {
        const t = writable(this), on = !0 === v;
        null !== t && t.forceLoad !== on && (t.forceLoad = on, this.renderer.textNodes.force(this.id, on), 
        !0 === on && rebox(this));
    }
    measure() {
        const id = this.id;
        return -1 !== id && this.renderer.textNodes.measure(id);
    }
}, orNumber = (v, d) => 0 === v || !0 === Number.isNaN(v) ? d : v, orString = (v, d) => "" === v ? d : v;

function setSize(n, field, v) {
    const id = n.id, s = n.renderer.nodes, i = 32 * id + field;
    s.f64[i] !== v && (s.f64[i] = v, s.markDirty(id, 33));
}

function setTextProp(t, key, value) {
    switch (key) {
      case "text":
        t.text = value;
        break;

      case "fontFamily":
        t.fontFamily = orString(value, "sans-serif");
        break;

      case "fontSize":
        t.fontSize = orNumber(value, 16);
        break;

      case "fontStyle":
        t.fontStyle = orString(value, "normal");
        break;

      case "lineHeight":
        t.lineHeight = orNumber(value, 1.2);
        break;

      case "textAlign":
        t.textAlign = orString(value, "left");
        break;

      case "verticalAlign":
        t.verticalAlign = orString(value, "top");
        break;

      case "contain":
        t.contain = orString(value, "none");
        break;

      case "maxWidth":
        t.maxWidth = orNumber(value, 0);
        break;

      case "maxHeight":
        t.maxHeight = orNumber(value, 0);
        break;

      case "maxLines":
        t.maxLines = orNumber(value, 0);
        break;

      case "overflowSuffix":
        t.overflowSuffix = orString(value, "...");
        break;

      case "wordBreak":
        t.wordBreak = orString(value, "break-word");
        break;

      case "letterSpacing":
        t.letterSpacing = orNumber(value, 0);
        break;

      case "offsetY":
        t.offsetY = orNumber(value, 0);
    }
}

var scratch = new Int32Array(256), depth = 0;

function growF64(a, n) {
    const b = new Float64Array(n);
    return void 0 !== a && b.set(a), b;
}

function growI32$1(a, n) {
    const b = new Int32Array(n);
    return void 0 !== a && b.set(a), b;
}

var ClipStore = class {
    constructor(capacity = 64) {
        this.capacity = 0, this.freeHead = -1, this.resize(capacity < 2 ? 2 : capacity);
    }
    resize(capacity) {
        const old = this.capacity;
        this.x = growF64(this.x, capacity), this.y = growF64(this.y, capacity), this.w = growF64(this.w, capacity), 
        this.h = growF64(this.h, capacity), this.sx = growI32$1(this.sx, capacity), this.sy = growI32$1(this.sy, capacity), 
        this.sw = growI32$1(this.sw, capacity), this.sh = growI32$1(this.sh, capacity), 
        this.valid = function(a, n) {
            const b = new Uint8Array(n);
            return void 0 !== a && b.set(a), b;
        }(this.valid, capacity), this.owner = growI32$1(this.owner, capacity), this.nextFree = growI32$1(this.nextFree, capacity);
        const first = 0 === old ? 1 : old;
        for (let i = first; i < capacity - 1; i++) this.nextFree[i] = i + 1;
        this.nextFree[capacity - 1] = this.freeHead, this.freeHead = first;
        for (let i = first; i < capacity; i++) this.owner[i] = -1;
        0 === old && (this.owner[0] = -1), this.capacity = capacity;
    }
    alloc(owner) {
        -1 === this.freeHead && this.resize(2 * this.capacity);
        const id = this.freeHead;
        return this.freeHead = this.nextFree[id], this.valid[id] = 0, this.owner[id] = owner, 
        id;
    }
    free(id) {
        this.valid[id] = 0, this.owner[id] = -1, this.nextFree[id] = this.freeHead, this.freeHead = id;
    }
    set(id, x, y, w, h, pixelRatio, canvasH) {
        this.x[id] = x, this.y[id] = y, this.w[id] = w, this.h[id] = h, this.valid[id] = 1, 
        this.updateScissor(id, pixelRatio, canvasH);
    }
    invalidate(id) {
        this.valid[id] = 0;
    }
    intersect(id, other, pixelRatio, canvasH) {
        const ax = this.x[id], ay = this.y[id], bx = this.x[other], by = this.y[other], x = ax > bx ? ax : bx, y = ay > by ? ay : by, ar = ax + this.w[id], br = bx + this.w[other], ab = ay + this.h[id], bb = by + this.h[other], w = (ar < br ? ar : br) - x, h = (ab < bb ? ab : bb) - y;
        w > 0 && h > 0 ? (this.x[id] = x, this.y[id] = y, this.w[id] = w, this.h[id] = h) : (this.x[id] = 0, 
        this.y[id] = 0, this.w[id] = 0, this.h[id] = 0), this.updateScissor(id, pixelRatio, canvasH);
    }
    updateScissor(id, pixelRatio, canvasH) {
        const sh = Math.round(this.h[id] * pixelRatio);
        this.sx[id] = Math.round(this.x[id] * pixelRatio), this.sw[id] = Math.round(this.w[id] * pixelRatio), 
        this.sh[id] = sh, this.sy[id] = Math.round(canvasH - sh - this.y[id] * pixelRatio);
    }
};

var ScenePass = class {
    constructor(nodes, clips, view, stream, ops, hooks, flush) {
        this.visited = 0, this.updated = 0, this.emitted = 0, this.textEmitted = 0, this.stack = new Int32Array(1024), 
        this.maskStack = new Uint32Array(1024), this.sweepStack = new Int32Array(1024), 
        this.pendingText = new Int32Array(64), this.pendingCount = 0, this.nodes = nodes, 
        this.clips = clips, this.view = view, this.stream = stream, this.ops = ops, this.hooks = hooks, 
        this.flush = flush;
    }
    get writesDuringPass() {
        return this.nodes.writes;
    }
    get quads() {
        return this.emitted - this.textEmitted;
    }
    run(root) {
        const s = this.nodes;
        if (this.visited = 0, this.updated = 0, this.emitted = 0, this.textEmitted = 0, 
        this.pendingCount = 0, s.writes = 0, s.anyDirty = !1, -1 === root) return;
        s.deferFree = !0;
        let stack = this.stack, masks = this.maskStack;
        stack[0] = root, masks[0] = 0;
        let sp = 1;
        for (;sp > 0; ) {
            sp--;
            const id = stack[sp], o = 32 * id;
            if (0 === s.i32[o + 2]) continue;
            const inherit = masks[sp];
            this.visited++;
            let childMask = this.visit(id, inherit);
            if (childMask < 0) continue;
            let c = s.i32[o + 5];
            if (-1 === c) continue;
            const u32 = s.u32, state = u32[o + 1];
            8192 & state && (childMask = 7, u32[o + 1] = -8193 & state);
            const prev = s.prev;
            for (;-1 !== c; ) sp === stack.length && (this.growStack(), stack = this.stack, 
            masks = this.maskStack), stack[sp] = c, masks[sp] = childMask, sp++, c = prev[c];
        }
        this.flushText(), s.endDeferFree();
    }
    growStack() {
        const n = 2 * this.stack.length, stack = new Int32Array(n);
        stack.set(this.stack);
        const masks = new Uint32Array(n);
        masks.set(this.maskStack), this.stack = stack, this.maskStack = masks;
    }
    growSweepStack() {
        const stack = new Int32Array(2 * this.sweepStack.length);
        stack.set(this.sweepStack), this.sweepStack = stack;
    }
    visit(id, inherit) {
        const s = this.nodes, o = 32 * id, fo = 32 * id;
        let d = s.u32[o + 0], state = s.u32[o + 1];
        if (0 === d && 0 === inherit) return (49152 & state) >>> 14 == 1 || 0 === s.f64[fo + 4] ? -1 : (8 & state && this.emit(id, state), 
        0);
        s.u32[o + 0] = 0, this.updated++;
        const parent = s.i32[o + 3];
        128 & d && (inherit = 7);
        let pending = 0, parked = 0;
        if (256 & d) {
            const raised = this.hooks.layoutText(id);
            if (0 === s.i32[o + 2]) return -1;
            raised < 0 ? pending |= 256 : d |= 64 | raised, state = s.u32[o + 1];
        }
        32 & d && (d |= 64);
        let childMask = 0, needVis = !1;
        if ((1 & d || 1 & inherit) && (!function(s, id, parent) {
            const f = s.f64, u32 = s.u32, o = 32 * id, io = 32 * id, w = f[o + 0], h = f[o + 1], rotation = f[o + 21], sx = f[o + 19], sy = f[o + 20];
            let state = u32[io + 1];
            const contain = 4096 == (4224 & state) && f[o + 14] > 0 && f[o + 15] > 0, transformed = 0 !== rotation || 1 !== sx || 1 !== sy, simple = !1 === transformed && !1 === contain;
            let mw = w, mh = h, box = null;
            67108864 & state && (box = s.texts[id], mw = box.boxW, mh = box.boxH);
            let tx = f[o + 16] - f[o + 22] * mw, ty = f[o + 17] - f[o + 23] * mh, la = 1, lb = 0, lc = 0, ld = 1;
            if (!0 === transformed) {
                const px = f[o + 24] * mw, py = f[o + 25] * mh;
                let cos = 1, sin = 0;
                0 !== rotation && (cos = Math.cos(rotation), sin = Math.sin(rotation)), la = cos * sx, 
                lb = (0 - sin) * sy, lc = sin * sx, ld = cos * sy, tx = la * -px + lb * -py + (tx + px), 
                ty = lc * -px + ld * -py + (ty + py);
            }
            if (!0 === contain) {
                const mode = s.textureOptions[id].resizeMode, tw = f[o + 14], th = f[o + 15];
                let ex = 0, ey = 0, rsx = 1, rsy = 1;
                if (tw / th > w / h) {
                    var _mode$y;
                    const scaledTxHeight = th * (w / tw);
                    ey = (h - scaledTxHeight) * (null !== (_mode$y = mode.y) && void 0 !== _mode$y ? _mode$y : .5), 
                    rsy = scaledTxHeight / h;
                } else {
                    var _mode$x;
                    const scaledTxWidth = tw * (h / th);
                    ex = (w - scaledTxWidth) * (null !== (_mode$x = mode.x) && void 0 !== _mode$x ? _mode$x : .5), 
                    rsx = scaledTxWidth / w;
                }
                tx = la * ex + lb * ey + tx, ty = lc * ex + ld * ey + ty, la *= rsx, lb *= rsy, 
                lc *= rsx, ld *= rsy;
            }
            if (null !== box) {
                const bx = box.boxX, by = box.boxY;
                tx = la * bx + lb * by + tx, ty = lc * bx + ld * by + ty;
            }
            const wasWorldTranslate = !!(2 & state), parentTranslate = -1 === parent || !!(2 & u32[32 * parent + 1]), po = 32 * parent;
            let wa, wb, wc, wd, wtx, wty, writeLinear;
            if (!0 === simple && !0 === parentTranslate) wa = 1, wb = 0, wc = 0, wd = 1, -1 === parent ? (wtx = tx, 
            wty = ty) : (wtx = f[po + 2] + tx, wty = f[po + 3] + ty), state |= 2, writeLinear = !1 === wasWorldTranslate; else {
                let pa = 1, pb = 0, pc = 0, pd = 1, ptx = 0, pty = 0;
                -1 !== parent && (pa = f[po + 6], pb = f[po + 8], pc = f[po + 9], pd = f[po + 7], 
                ptx = f[po + 2], pty = f[po + 3]), 1 === la && 1 === ld && 0 === lb && 0 === lc ? (wa = pa, 
                wb = pb, wc = pc, wd = pd) : (wa = pa * la + pb * lc, wb = pa * lb + pb * ld, wc = pc * la + pd * lc, 
                wd = pc * lb + pd * ld), wtx = pa * tx + pb * ty + ptx, wty = pc * tx + pd * ty + pty, 
                state &= -3, writeLinear = !0;
            }
            if (!0 === writeLinear && (f[o + 6] = wa, f[o + 8] = wb, f[o + 9] = wc, f[o + 7] = wd), 
            f[o + 2] = wtx, f[o + 3] = wty, 0 === wb && 0 === wc) f[o + 10] = wtx, f[o + 11] = wty, 
            f[o + 12] = wtx + w * wa, f[o + 13] = wty + h * wd; else {
                const x2 = wtx + w * wa, y2 = wty + w * wc, x3 = x2 + h * wb, y3 = y2 + h * wd, x4 = wtx + h * wb, y4 = wty + h * wd;
                f[o + 10] = Math.min(wtx, x2, x3, x4), f[o + 11] = Math.min(wty, y2, y3, y4), f[o + 12] = Math.max(wtx, x2, x3, x4), 
                f[o + 13] = Math.max(wty, y2, y3, y4);
            }
            !0 === simple ? state |= 1 : state &= -2, u32[io + 1] = state;
        }(s, id, parent), state = s.u32[o + 1], childMask |= 1, needVis = !0), 2 & d || 2 & inherit) {
            const a = s.f64[fo + 18];
            let wa = -1 === parent || 512 & state ? a : s.f64[32 * parent + 4] * a;
            wa < 0 ? wa = 0 : wa > 1 && (wa = 1);
            const prev = s.f64[fo + 4];
            wa !== prev && (s.f64[fo + 4] = wa, childMask |= 2, d |= 4, 0 === wa != (0 === prev) && (d |= 64));
        }
        const clips = !!(4 & state);
        (8 & d || 4 & inherit || !0 === clips && 1 & childMask) && (this.updateClip(id, parent, clips), 
        childMask |= 4, needVis = !0);
        let vis = (49152 & state) >>> 14, next = vis;
        if (!0 !== needVis && 0 !== vis || (next = this.classify(id, parent)), next !== vis) {
            if (1 !== next && 16 & d && (state |= 65536), s.u32[o + 1] = withVisibility(state, next), 
            this.hooks.onVisibility(id, vis, next), 1 === next && 0 !== s.i32[o + 2] && this.sweepOut(id), 
            0 === s.i32[o + 2]) return -1;
            state = s.u32[o + 1], vis = next, d |= 64, 1 !== next && 196608 & state && (65536 & state && (d |= 16), 
            131072 & state && (d |= 32), state &= -196609, s.u32[o + 1] = state);
        }
        const hidden = 0 === s.f64[fo + 4];
        if (!1 === hidden && 25165824 & state && (state &= -25165825, !0 === EMIT_BOUNDS_EVENTS && (d |= 64), 
        1 !== vis && 16 & d && (state |= 65536), s.u32[o + 1] = state, 1 !== vis)) {
            if (this.hooks.onShown(id), 0 === s.i32[o + 2]) return -1;
            state = s.u32[o + 1], 65536 & state && (d |= 16, state &= -65537, s.u32[o + 1] = state);
        }
        if (16 & d) if (1 === vis) parked |= 65536; else {
            if (d |= 68, this.hooks.resolveTexture(id), 0 === s.i32[o + 2]) return -1;
            state = s.u32[o + 1];
        }
        if (32 & d) if (1 === vis) parked |= 131072; else {
            if (this.hooks.packShader(id), 0 === s.i32[o + 2]) return -1;
            state = s.u32[o + 1];
        }
        if (4 & d) {
            const before = state;
            state = this.premultiply(id, state), 96 & (before ^ state) && (d |= 64);
        }
        if (64 & d) {
            const before = state;
            if (state = this.deriveRenderable(id, state, vis), !0 === EMIT_BOUNDS_EVENTS && 8 & (before ^ state)) {
                if (s.u32[o + 1] = state, this.hooks.onRenderable(id, !!(8 & state)), 0 === s.i32[o + 2]) return -1;
                state = s.u32[o + 1];
            }
        }
        if (!0 === hidden && !(8388608 & state)) {
            if (s.u32[o + 1] = state | parked | 8388608, this.sweepHidden(id), 0 === s.i32[o + 2]) return -1;
            state = s.u32[o + 1];
        }
        return 1 === vis || !0 === hidden ? (s.u32[o + 1] = state | parked | 8192, s.u32[o + 0] = s.u32[o + 0] | 512 & d | pending, 
        -1) : (s.u32[o + 1] = state, s.u32[o + 0] = s.u32[o + 0] | pending, 8 & state && this.emit(id, state), 
        childMask);
    }
    sweepOut(root) {
        const s = this.nodes;
        let stack = this.sweepStack;
        stack[0] = root;
        let sp = 1;
        for (;sp > 0; ) {
            sp--;
            const id = stack[sp], o = 32 * id;
            if (id !== root && !1 === this.markOut(id)) continue;
            let c = s.i32[o + 5];
            for (;-1 !== c; ) sp === stack.length && (this.growSweepStack(), stack = this.sweepStack), 
            stack[sp] = c, sp++, c = s.prev[c];
        }
    }
    sweepHidden(root) {
        const s = this.nodes;
        let stack = this.sweepStack;
        stack[0] = root;
        let sp = 1;
        for (;sp > 0; ) {
            sp--;
            const id = stack[sp], o = 32 * id;
            if (0 === s.i32[o + 2]) continue;
            const state = s.u32[o + 1], vis = (49152 & state) >>> 14;
            if (1 === vis) continue;
            if (id !== root && 8388608 & state) continue;
            0 === vis || 16777216 & state || !0 !== this.hooks.onHidden(id) || 0 === s.i32[o + 2] || (s.u32[o + 1] = 16777216 | s.u32[o + 1]);
            let c = s.i32[o + 5];
            for (;-1 !== c; ) sp === stack.length && (this.growSweepStack(), stack = this.sweepStack), 
            stack[sp] = c, sp++, c = s.prev[c];
        }
    }
    markOut(id) {
        const s = this.nodes, o = 32 * id;
        if (0 === s.i32[o + 2]) return !1;
        const state = s.u32[o + 1], prev = (49152 & state) >>> 14;
        return 1 !== prev && (s.u32[o + 1] = withVisibility(-9 & state, 1), this.hooks.onVisibility(id, prev, 1), 
        !0 === EMIT_BOUNDS_EVENTS && 8 & state && 0 !== s.i32[o + 2] && this.hooks.onRenderable(id, !1), 
        !0);
    }
    updateClip(id, parent, clips) {
        const s = this.nodes, c = this.clips, i32 = s.i32, f64 = s.f64, fo = 32 * id, ci = 32 * id + 6, parentClip = -1 === parent ? 0 : i32[32 * parent + 6], rotated = 0 !== f64[fo + 8] || 0 !== f64[fo + 9];
        let rec = i32[ci];
        const owned = 0 !== rec && c.owner[rec] === id;
        if (!1 === clips || !0 === rotated) return !0 === owned && c.free(rec), void (i32[ci] = parentClip);
        !1 === owned && (rec = c.alloc(id), i32[ci] = rec);
        let mT = 0, mR = 0, mB = 0, mL = 0;
        const margins = s.clipMargins[id];
        null !== margins && (mT = margins[0], mR = margins[1], mB = margins[2], mL = margins[3]);
        const view = this.view;
        c.set(rec, f64[fo + 2] - mL, f64[fo + 3] - mT, f64[fo + 0] * f64[fo + 6] + mL + mR, f64[fo + 1] * f64[fo + 7] + mT + mB, view.pixelRatio, view.canvasH), 
        0 !== parentClip && 1 === c.valid[parentClip] && c.intersect(rec, parentClip, view.pixelRatio, view.canvasH);
    }
    classify(id, parent) {
        const s = this.nodes, c = this.clips, view = this.view;
        let x1 = 0, y1 = 0, x2 = view.w, y2 = view.h;
        const rec = s.i32[32 * id + 6], f64 = s.f64, fo = 32 * id;
        if (0 !== rec && 1 === c.valid[rec]) {
            const cx = c.x[rec], cy = c.y[rec];
            cx > x1 && (x1 = cx), cy > y1 && (y1 = cy);
            const cr = cx + c.w[rec], cb = cy + c.h[rec];
            cr < x2 && (x2 = cr), cb < y2 && (y2 = cb);
        }
        const bx0 = f64[fo + 10], by0 = f64[fo + 11], bx1 = f64[fo + 12], by1 = f64[fo + 13];
        if (bx0 <= x2 && bx1 >= x1 && by0 <= y2 && by1 >= y1) return 3;
        const m = view.margin;
        return bx0 <= x2 + m[1] && bx1 >= x1 - m[3] && by0 <= y2 + m[2] && by1 >= y1 - m[0] ? 2 : -1 === parent || 0 !== f64[fo + 0] && 0 !== f64[fo + 1] ? 1 : (49152 & s.u32[32 * parent + 1]) >>> 14;
    }
    premultiply(id, state) {
        const s = this.nodes, u32 = s.u32, o = 32 * id, alpha = s.f64[32 * id + 4], tl = u32[o + 15], tr = u32[o + 16], bl = u32[o + 17], br = u32[o + 18];
        if (!0 == (0 !== u32[o + 19] && -1 !== s.i32[o + 14] && !(144 & state))) {
            const m = premultiplyColorABGR(u32[o + 19], alpha);
            u32[o + 7] = m, u32[o + 8] = m, u32[o + 9] = m, u32[o + 10] = m, state |= 32;
        } else {
            const m = premultiplyColorABGR(tl, alpha);
            u32[o + 7] = m, tl === tr && tl === bl && tl === br ? (u32[o + 8] = m, u32[o + 9] = m, 
            u32[o + 10] = m) : (u32[o + 8] = premultiplyColorABGR(tr, alpha), u32[o + 9] = premultiplyColorABGR(bl, alpha), 
            u32[o + 10] = premultiplyColorABGR(br, alpha)), state &= -33;
        }
        return 0 !== (tl | tr | bl | br) ? state |= 64 : state &= -65, state;
    }
    deriveRenderable(id, state, vis) {
        const s = this.nodes, fo = 32 * id;
        let r = !1;
        return 3 === vis && s.f64[fo + 4] > 0 && (r = 128 & state ? !!(33554432 & state) : -1 !== s.i32[32 * id + 14] ? !!(48 & state) : (!!(64 & state) || null !== s.shaderRefs[id]) && 0 !== s.f64[fo + 0] && 0 !== s.f64[fo + 1]), 
        !0 === r ? 8 | state : -9 & state;
    }
    emit(id, state) {
        const s = this.nodes;
        if (128 & state) return this.queueText(id), void this.emitted++;
        const fo = 32 * id, o = 32 * id;
        if (this.pendingCount > 0 && 0 !== s.f64[fo + 5] && (this.flushText(), 0 === s.i32[o + 2])) return;
        const stream = this.stream;
        !0 === stream.isFull && this.flush();
        const f64 = s.f64, u32 = s.u32, i32 = s.i32, quad = stream.quadCount, w = f64[fo + 0], h = f64[fo + 1], tx = f64[fo + 2], ty = f64[fo + 3];
        let x1, y1, x2, y2, x3, y3;
        if (2 & state) x1 = tx + w, y1 = ty, x2 = tx, y2 = ty + h, x3 = x1, y3 = y2; else {
            const a = f64[fo + 6], b = f64[fo + 8], c = f64[fo + 9], d = f64[fo + 7];
            x1 = tx + w * a, y1 = ty + w * c, x2 = tx + h * b, y2 = ty + h * d, x3 = x1 + h * b, 
            y3 = y1 + h * d;
        }
        const uv0 = u32[o + 11], uv1 = u32[o + 12], uvTR = (4294901760 & uv0 | 65535 & uv1) >>> 0, uvBL = (4294901760 & uv1 | 65535 & uv0) >>> 0, f = stream.f32, u = stream.u32, i = stream.cursor;
        f[i] = tx, f[i + 1] = ty, u[i + 2] = uv0, u[i + 3] = u32[o + 7], f[i + 4] = 0, f[i + 5] = x1, 
        f[i + 6] = y1, u[i + 7] = uvTR, u[i + 8] = u32[o + 8], f[i + 9] = 0, f[i + 10] = x2, 
        f[i + 11] = y2, u[i + 12] = uvBL, u[i + 13] = u32[o + 9], f[i + 14] = 0, f[i + 15] = x3, 
        f[i + 16] = y3, u[i + 17] = uv1, u[i + 18] = u32[o + 10], f[i + 19] = 0, stream.cursor = i + 20;
        const ops = this.ops, last = ops.length - 1, program = i32[o + 13], params = s.params[id], record = i32[o + 14], texture = 32 & state || -1 === record ? 0 : record, clip = i32[o + 6], match = !(256 & state) || last < 0 || ops.program[last] !== program || ops.params[last] !== params || ops.texture[last] !== texture || ops.clip[last] !== clip || this.hooks.perOpMatch(id, ops.node[last]);
        ops.add(program, params, texture, clip, id, quad, match), this.emitted++;
    }
    queueText(id) {
        const n = this.pendingCount;
        if (n === this.pendingText.length) {
            const grown = new Int32Array(2 * n);
            grown.set(this.pendingText), this.pendingText = grown;
        }
        this.pendingText[n] = id, this.pendingCount = n + 1;
    }
    flushText() {
        const s = this.nodes, hooks = this.hooks, queue = this.pendingText, n = this.pendingCount;
        this.pendingCount = 0, this.textEmitted += n;
        for (let i = 0; i < n; i++) {
            const id = queue[i];
            0 !== s.i32[32 * id + 2] && hooks.emitText(id);
        }
    }
}, VertexStream = class {
    constructor(capacityQuads) {
        this.cursor = 0, this.capacityQuads = capacityQuads, this.buffer = new ArrayBuffer(20 * capacityQuads * 4), 
        this.f32 = new Float32Array(this.buffer), this.u32 = new Uint32Array(this.buffer);
    }
    get quadCount() {
        return this.cursor / 20;
    }
    get isFull() {
        return this.cursor >= this.f32.length;
    }
    reset() {
        this.cursor = 0;
    }
};

function growI32(a, n) {
    const b = new Int32Array(n);
    return b.set(a), b;
}

var OpList = class {
    constructor(capacity = 256) {
        this.length = 0, capacity = capacity < 1 ? 1 : capacity, this.program = new Int32Array(capacity), 
        this.texture = new Int32Array(capacity), this.clip = new Int32Array(capacity), this.node = new Int32Array(capacity), 
        this.start = new Int32Array(capacity), this.count = new Int32Array(capacity), this.params = [];
        for (let i = 0; i < capacity; i++) this.params.push(null);
    }
    add(program, params, texture, clip, node, quad, perOpMatch) {
        const i = this.length - 1;
        if (i >= 0 && !0 === perOpMatch && this.start[i] + this.count[i] === quad && this.program[i] === program && this.params[i] === params && this.texture[i] === texture && this.clip[i] === clip) return void (this.count[i] = this.count[i] + 1);
        const n = this.length;
        n === this.program.length && this.grow(), this.program[n] = program, this.params[n] = params, 
        this.texture[n] = texture, this.clip[n] = clip, this.node[n] = node, this.start[n] = quad, 
        this.count[n] = 1, this.length = n + 1;
    }
    addRun(program, params, texture, clip, node, quad, count) {
        const i = this.length - 1;
        if (i >= 0 && this.start[i] + this.count[i] === quad && this.program[i] === program && this.params[i] === params && this.texture[i] === texture && this.clip[i] === clip) return void (this.count[i] = this.count[i] + count);
        const n = this.length;
        n === this.program.length && this.grow(), this.program[n] = program, this.params[n] = params, 
        this.texture[n] = texture, this.clip[n] = clip, this.node[n] = node, this.start[n] = quad, 
        this.count[n] = count, this.length = n + 1;
    }
    reset() {
        const params = this.params;
        for (let i = 0, n = this.length; i < n; i++) params[i] = null;
        this.length = 0;
    }
    grow() {
        const n = 2 * this.program.length;
        this.program = growI32(this.program, n), this.texture = growI32(this.texture, n), 
        this.clip = growI32(this.clip, n), this.node = growI32(this.node, n), this.start = growI32(this.start, n), 
        this.count = growI32(this.count, n);
        for (let i = this.params.length; i < n; i++) this.params.push(null);
    }
}, AnimationManager = class {
    constructor() {
        this.active = [], this.now = 0, this.maxFirstStep = 1 / 0, this.clock = () => this.now, 
        this.onActive = null, this.frame = 0;
    }
    get hasActive() {
        return this.active.length > 0;
    }
    register(a) {
        -1 === a.index && (a.index = this.active.length, this.active.push(a), null !== this.onActive && this.onActive());
    }
    unregister(a) {
        const i = a.index;
        if (-1 === i) return;
        const active = this.active, last = active.pop();
        last !== a && (active[i] = last, last.index = i), a.index = -1;
    }
    step(dt) {
        this.frame++;
        const frame = this.frame, active = this.active;
        for (let i = active.length - 1; i >= 0; i--) {
            const a = active[i];
            void 0 !== a && (-1 !== a.node.id ? a.stepFrame !== frame && (a.stepFrame = frame, 
            a.step(dt)) : a.stop());
        }
    }
}, FrameEvents = class {
    constructor() {
        this.holding = !1, this.schedule = null, this.onError = null, this.targets = [], 
        this.names = [], this.data = [], this.head = 0, this.tail = 0, this.flushing = !1, 
        this.scheduled = !1, this.destroyed = !1, this.scheduledFlush = () => {
            this.scheduled = !1, this.flush();
        };
    }
    get count() {
        return this.tail - this.head;
    }
    queue(target, name, data) {
        if (!0 === this.destroyed) return;
        const i = this.tail;
        i === this.targets.length ? (this.targets.push(target), this.names.push(name), this.data.push(data)) : (this.targets[i] = target, 
        this.names[i] = name, this.data[i] = data), this.tail = i + 1, !1 === this.holding && !1 === this.flushing && !1 === this.scheduled && null !== this.schedule && (this.scheduled = !0, 
        this.schedule(this.scheduledFlush));
    }
    flush() {
        if (this.head !== this.tail && !0 !== this.flushing && !0 !== this.holding) {
            this.flushing = !0;
            try {
                this.drain();
            } finally {
                this.flushing = !1;
            }
        }
    }
    drain() {
        const end = this.tail, targets = this.targets, names = this.names, data = this.data;
        for (;this.head < end; ) {
            const i = this.head;
            this.head = i + 1;
            const target = targets[i], payload = data[i];
            if (targets[i] = null, data[i] = null, this.deliver(target, names[i], payload), 
            !0 === this.destroyed) return;
        }
        const tail = this.tail;
        let w = 0;
        for (let r = end; r < tail; r++) targets[w] = targets[r], names[w] = names[r], data[w] = data[r], 
        targets[r] = null, data[r] = null, w++;
        this.head = 0, this.tail = w;
    }
    deliver(target, name, data) {
        const onError = this.onError;
        if (null !== onError) try {
            target.emit(name, data);
        } catch (error) {
            onError(error);
        } else target.emit(name, data);
    }
    destroy() {
        this.destroyed = !0, this.schedule = null;
        const targets = this.targets, data = this.data;
        for (let i = this.head; i < this.tail; i++) targets[i] = null, data[i] = null;
        this.head = 0, this.tail = 0;
    }
};

var clampUnit = value => value < 0 ? 0 : value > 1 ? 1 : value;

var quantizeUv = n => {
    const i = 65535 * n + .5 | 0;
    return i < 0 ? 0 : i > 65535 ? 65535 : i;
};

var TextureNodes = class {
    constructor(store, events) {
        this.rect = new Float64Array(4), this.dimW = 0, this.dimH = 0, this.store = store, 
        this.nodes = store.nodes, this.events = events, store.onUploaded = rec => this.notify(rec, !0), 
        store.onFreed = rec => this.freed(rec), store.onHeld = rec => this.held(rec), store.onFailed = (rec, final) => {
            !0 === final ? this.notify(rec, !1) : this.failedHandles(rec);
        };
    }
    resolveTexture(id) {
        const s = this.nodes, src = this.sourceOf(id);
        src !== s.i32[32 * id + 20] && this.switchSource(id, src);
        const state = s.u32[32 * id + 1];
        -1 === src || 262144 & state || !this.shown(id, state) || this.addWants(id, 3 === visibilityOf(state)), 
        this.refresh(id);
    }
    onVisibility(id, prev, next) {
        const s = this.nodes, store = this.store, wasIn = prev >= 2, isIn = next >= 2, state = s.u32[32 * id + 1];
        if (wasIn === isIn) {
            const src = s.i32[32 * id + 20];
            return void (3 === next && 262144 & state && -1 !== src && store.promote(store.pixelsOf(src)));
        }
        !1 !== isIn ? -1 !== s.i32[32 * id + 20] && (this.back(id), 327680 & state || !this.shown(id, state) || this.addWants(id, 3 === next)) : 262144 & state && this.dropWants(id);
    }
    onHidden(id) {
        const s = this.nodes;
        return 262144 & s.u32[32 * id + 1] && this.dropWants(id), -1 !== s.i32[32 * id + 20];
    }
    onShown(id) {
        const s = this.nodes, state = s.u32[32 * id + 1];
        262144 & state || -1 === s.i32[32 * id + 20] || (this.back(id), 65536 & state || this.addWants(id, 3 === visibilityOf(state)));
    }
    back(id) {
        const s = this.nodes, store = this.store, shown = s.i32[32 * id + 14];
        if (-1 === shown || 4 === store.state[shown]) return;
        const pixels = store.pixelsOf(s.i32[32 * id + 20]);
        shown !== pixels && this.show(id, pixels);
        const state = s.u32[32 * id + 1];
        16 & state && (s.u32[32 * id + 1] = 65536 | state);
    }
    onResize(id) {
        const s = this.nodes, shown = s.i32[32 * id + 14];
        if (-1 === shown) return;
        const options = s.textureOptions[id];
        if (null === options) return;
        const mode = options.resizeMode;
        null != mode && "cover" === mode.type && 4 === this.store.state[shown] && this.packShown(id);
    }
    subTextureCreated(rec) {
        const store = this.store, handle = store.handles[rec], parent = store.parent[rec], state = store.state[parent];
        4 === state ? (this.measure(rec), this.events.queue(handle, "loaded", {
            w: this.dimW,
            h: this.dimH
        })) : 5 === state ? this.events.queue(handle, "failed", store.errors[parent]) : 6 === state && this.events.queue(handle, "freed", null);
    }
    release(id) {
        this.switchSource(id, -1);
        const s = this.nodes;
        s.u32[32 * id + 1] = -786433 & s.u32[32 * id + 1];
    }
    drainPreloads() {
        const s = this.nodes, store = this.store;
        for (let i = 0; i < s.preloadCount; i++) {
            const id = s.preloads[i];
            if (s.u32[32 * id + 1] = -2097153 & s.u32[32 * id + 1], 0 === s.i32[32 * id + 2]) continue;
            const state = s.u32[32 * id + 1];
            if (2048 & state) {
                const src = this.sourceOf(id);
                src !== s.i32[32 * id + 20] && (this.switchSource(id, src), this.sizeCacheHit(id, src)), 
                -1 === src || 524288 & s.u32[32 * id + 1] || (s.u32[32 * id + 1] = 524288 | s.u32[32 * id + 1], 
                store.want(store.pixelsOf(src), !1));
            } else if (524288 & state) {
                s.u32[32 * id + 1] = -524289 & state;
                const src = s.i32[32 * id + 20];
                -1 !== src && store.unwant(store.pixelsOf(src));
            }
        }
        s.preloadCount = 0;
    }
    sizeCacheHit(id, src) {
        const store = this.store, shown = this.nodes.i32[32 * id + 14];
        -1 !== src && shown === store.pixelsOf(src) && 4 === store.state[shown] && (this.applyTexSize(id), 
        this.applyAutosize(id));
    }
    sourceOf(id) {
        var _e$srcX, _e$srcY, _e$srcWidth, _e$srcHeight, _e$imageType;
        const s = this.nodes;
        if (!(1048576 & s.u32[32 * id + 1])) {
            const ref = s.textureRefs[id];
            return null === ref ? -1 : textureRecord(this.store, ref);
        }
        const src = s.srcs[id], e = s.extras[id], sx = null === e ? null : null !== (_e$srcX = e.srcX) && void 0 !== _e$srcX ? _e$srcX : null, sy = null === e ? null : null !== (_e$srcY = e.srcY) && void 0 !== _e$srcY ? _e$srcY : null, sw = null === e ? null : null !== (_e$srcWidth = e.srcWidth) && void 0 !== _e$srcWidth ? _e$srcWidth : null, sh = null === e ? null : null !== (_e$srcHeight = e.srcHeight) && void 0 !== _e$srcHeight ? _e$srcHeight : null, type = null === e ? null : null !== (_e$imageType = e.imageType) && void 0 !== _e$imageType ? _e$imageType : null, store = this.store, current = s.i32[32 * id + 20];
        if (-1 !== current && 0 === store.kind[current]) {
            var _p$sx, _p$sy, _p$sw, _p$sh, _p$type;
            const p = store.props[current];
            if (p.src === src && !1 !== p.premultiplyAlpha && (void 0 === p.key || null === p.key || "" === p.key) && (null !== (_p$sx = p.sx) && void 0 !== _p$sx ? _p$sx : null) === sx && (null !== (_p$sy = p.sy) && void 0 !== _p$sy ? _p$sy : null) === sy && (null !== (_p$sw = p.sw) && void 0 !== _p$sw ? _p$sw : null) === sw && (null !== (_p$sh = p.sh) && void 0 !== _p$sh ? _p$sh : null) === sh && (null !== (_p$type = p.type) && void 0 !== _p$type ? _p$type : null) === type) return current;
        }
        const key = imageKey(src, null, !0, sx, sy, sw, sh);
        if (null !== key) {
            const cached = store.cache.get(key);
            if (void 0 !== cached) return cached;
        }
        const props = {
            src: src,
            premultiplyAlpha: !0,
            key: null,
            type: type,
            w: s.f64[32 * id + 0],
            h: s.f64[32 * id + 1],
            sx: sx,
            sy: sy,
            sw: sw,
            sh: sh,
            maxRetryCount: store.maxRetries
        };
        return store.create(0, props, key);
    }
    switchSource(id, rec) {
        const s = this.nodes, store = this.store, state = s.u32[32 * id + 1], wants = !!(262144 & state), preload = !!(524288 & state), old = s.i32[32 * id + 20];
        if (-1 !== old) {
            store.removeOwner(old, id), store.unref(old);
            const pixels = store.pixelsOf(old);
            !0 === wants && store.unwant(pixels), !0 === preload && store.unwant(pixels);
        }
        if (s.i32[32 * id + 20] = rec, -1 === rec) return void this.show(id, -1);
        store.addOwner(rec, id), store.ref(rec);
        const pixels = store.pixelsOf(rec), options = s.textureOptions[id];
        null !== options && !0 === options.preventCleanup && (store.setPreventCleanup(rec, !0), 
        pixels !== rec && store.setPreventCleanup(pixels, !0)), !0 === wants && store.want(pixels, 3 === visibilityOf(state)), 
        !0 === preload && store.want(pixels, !1);
        const shown = s.i32[32 * id + 14], uploaded = 4 === store.state[pixels], failed = store.failedForGood(pixels);
        -1 !== shown && shown !== pixels && 4 === store.state[shown] && !1 === uploaded && !1 === failed || (this.show(id, pixels), 
        !0 === uploaded ? (s.u32[32 * id + 1] = 4194304 | s.u32[32 * id + 1], this.loaded(id, rec)) : !0 === failed && this.failedNode(id, pixels));
    }
    show(id, rec) {
        const s = this.nodes, store = this.store, old = s.i32[32 * id + 14];
        if (old === rec) return;
        const state = s.u32[32 * id + 1], wants = !!(262144 & state);
        -1 !== old && (store.unref(old), !0 === wants && store.unwant(old)), s.i32[32 * id + 14] = rec, 
        -1 !== rec && (store.ref(rec), !0 === wants && store.want(rec, 3 === visibilityOf(state)));
    }
    shown(id, state) {
        return !(16777216 & state) && 0 !== this.nodes.f64[32 * id + 4];
    }
    addWants(id, viewport) {
        const s = this.nodes, store = this.store;
        s.u32[32 * id + 1] = 262144 | s.u32[32 * id + 1];
        const shown = s.i32[32 * id + 14];
        -1 !== shown && store.want(shown, viewport);
        const src = s.i32[32 * id + 20];
        -1 !== src && store.want(store.pixelsOf(src), viewport);
    }
    dropWants(id) {
        const s = this.nodes, store = this.store;
        s.u32[32 * id + 1] = -262145 & s.u32[32 * id + 1];
        const shown = s.i32[32 * id + 14];
        -1 !== shown && store.unwant(shown);
        const src = s.i32[32 * id + 20];
        -1 !== src && store.unwant(store.pixelsOf(src));
    }
    refresh(id) {
        const s = this.nodes, store = this.store, shown = s.i32[32 * id + 14], writes = s.writes;
        if (-1 === shown || 4 !== store.state[shown]) {
            s.u32[32 * id + 1] = -17 & s.u32[32 * id + 1];
            const sizeless = -1 === shown || 0 === store.w[shown];
            return !0 === sizeless && (s.u32[32 * id + 11] = 0, s.u32[32 * id + 12] = 4294967295, 
            s.f32[32 * id + 23] = 0, s.f32[32 * id + 24] = 0, s.f32[32 * id + 25] = 1, s.f32[32 * id + 26] = 1), 
            void (!0 === sizeless && 0 !== s.f64[32 * id + 14] && (s.f64[32 * id + 14] = 0, 
            s.f64[32 * id + 15] = 0, 4096 & s.u32[32 * id + 1] && (s.markDirty(id, 1), this.sizedInWalk(id, writes))));
        }
        if (store.pixelsOf(s.i32[32 * id + 20]) === shown) {
            const contain = this.applyTexSize(id), autosize = this.applyAutosize(id);
            if (!0 === contain || !0 === autosize) return s.u32[32 * id + 1] = -17 & s.u32[32 * id + 1], 
            s.markDirty(id, 16), void this.sizedInWalk(id, writes);
        }
        this.packShown(id), s.u32[32 * id + 1] = 16 | s.u32[32 * id + 1];
    }
    sizedInWalk(id, writes) {
        const s = this.nodes;
        3 !== visibilityOf(s.u32[32 * id + 1]) && -1 === s.i32[32 * id + 4] && (s.writes = writes);
    }
    applyTexSize(id) {
        const s = this.nodes;
        this.measure(s.i32[32 * id + 20]);
        const w = this.dimW, h = this.dimH;
        return (s.f64[32 * id + 14] !== w || s.f64[32 * id + 15] !== h) && (s.f64[32 * id + 14] = w, 
        s.f64[32 * id + 15] = h, !!(4096 & s.u32[32 * id + 1]) && (s.markDirty(id, 1), !0));
    }
    applyAutosize(id) {
        const s = this.nodes, state = s.u32[32 * id + 1];
        if (!(4194304 & state)) return !1;
        if (s.u32[32 * id + 1] = -4194305 & state, 1024 != (1152 & state)) return !1;
        this.measure(s.i32[32 * id + 20]);
        const w = this.dimW, h = this.dimH;
        return (s.f64[32 * id + 0] !== w || s.f64[32 * id + 1] !== h) && (s.applySize(id, w, h), 
        !0);
    }
    measure(rec) {
        const store = this.store;
        if (3 === store.kind[rec]) {
            const region = store.props[rec];
            return this.dimW = region.w, void (this.dimH = region.h);
        }
        this.dimW = store.w[rec], this.dimH = store.h[rec];
    }
    packShown(id) {
        const s = this.nodes, store = this.store, src = s.i32[32 * id + 20], shown = s.i32[32 * id + 14];
        store.pixelsOf(src) === shown ? this.packUv(id, src) : null === store.subs[shown] && this.packUv(id, shown);
    }
    packUv(id, rec) {
        const s = this.nodes, store = this.store, shown = s.i32[32 * id + 14], sub = 3 === store.kind[rec] ? store.props[rec] : null;
        this.measure(rec), function(out, x1, y1, x2, y2, sub, parentW, parentH, options, w, h, dimW, dimH) {
            if (null !== sub && (x1 = sub.x / parentW, y1 = sub.y / parentH, x2 = x1 + sub.w / parentW, 
            y2 = y1 + sub.h / parentH), null !== options) {
                const mode = options.resizeMode;
                if (null != mode && "cover" === mode.type) {
                    const scaleX = w / dimW, scaleY = h / dimH, scale = Math.max(scaleX, scaleY), precision = 1 / scale;
                    if (scaleX < scale) {
                        var _mode$clipX;
                        const desiredSize = precision * w;
                        x2 = (x1 = (1 - desiredSize / dimW) * clampUnit(null !== (_mode$clipX = mode.clipX) && void 0 !== _mode$clipX ? _mode$clipX : .5)) + desiredSize / dimW;
                    }
                    if (scaleY < scale) {
                        var _mode$clipY;
                        const desiredSize = precision * h;
                        y2 = (y1 = (1 - desiredSize / dimH) * clampUnit(null !== (_mode$clipY = mode.clipY) && void 0 !== _mode$clipY ? _mode$clipY : .5)) + desiredSize / dimH;
                    }
                }
                if (!0 === options.flipX) {
                    const t = x1;
                    x1 = x2, x2 = t;
                }
                if (!0 === options.flipY) {
                    const t = y1;
                    y1 = y2, y2 = t;
                }
            }
            out[0] = x1, out[1] = y1, out[2] = x2, out[3] = y2;
        }(this.rect, 0, 0, store.u2[shown], store.v2[shown], sub, store.w[shown], store.h[shown], s.textureOptions[id], s.f64[32 * id + 0], s.f64[32 * id + 1], this.dimW, this.dimH);
        const rect = this.rect, o = 32 * id;
        !function(out, i0, i1, rect) {
            out[i0] = (quantizeUv(rect[1]) << 16 | quantizeUv(rect[0])) >>> 0, out[i1] = (quantizeUv(rect[3]) << 16 | quantizeUv(rect[2])) >>> 0;
        }(s.u32, o + 11, o + 12, rect);
        const f32 = s.f32;
        f32[o + 23] = rect[0], f32[o + 24] = rect[1], f32[o + 25] = rect[2], f32[o + 26] = rect[3];
    }
    notify(rec, ok) {
        const store = this.store;
        this.notifyOwners(rec, rec, ok);
        const subs = store.subs[rec];
        if (null !== subs) for (let i = 0; i < subs.length; i++) this.notifyOwners(subs[i], rec, ok);
    }
    freed(rec) {
        const store = this.store;
        this.freedOwners(rec);
        const subs = store.subs[rec];
        if (null !== subs) for (let i = 0; i < subs.length; i++) this.freedOwners(subs[i]);
    }
    freedOwners(listRec) {
        const s = this.nodes, store = this.store, handle = store.handles[listRec];
        null !== handle && this.events.queue(handle, "freed", null);
        let id = store.ownerHead[listRec];
        for (;-1 !== id; ) {
            s.markDirty(id, 16);
            const node = s.handles[id];
            !0 === node.hasListener("freed") && this.events.queue(node, "freed", {
                type: "texture"
            }), id = s.i32[32 * id + 21];
        }
    }
    held(rec) {
        const store = this.store;
        this.releaseShown(rec, rec);
        const subs = store.subs[rec];
        if (null !== subs) for (let i = 0; i < subs.length; i++) this.releaseShown(subs[i], rec);
    }
    releaseShown(listRec, pixels) {
        const s = this.nodes;
        let id = this.store.ownerHead[listRec];
        for (;-1 !== id; ) {
            const shown = s.i32[32 * id + 14];
            -1 !== shown && shown !== pixels && (this.show(id, pixels), s.markDirty(id, 16)), 
            id = s.i32[32 * id + 21];
        }
    }
    failedHandles(rec) {
        const store = this.store, error = store.errors[rec], handle = store.handles[rec];
        null !== handle && this.events.queue(handle, "failed", error);
        const subs = store.subs[rec];
        if (null !== subs) for (let i = 0; i < subs.length; i++) {
            const sub = store.handles[subs[i]];
            null !== sub && this.events.queue(sub, "failed", error);
        }
    }
    notifyOwners(listRec, pixels, ok) {
        const s = this.nodes, store = this.store, handle = store.handles[listRec];
        null !== handle && (!0 === ok ? (this.measure(listRec), this.events.queue(handle, "loaded", {
            w: this.dimW,
            h: this.dimH
        })) : this.events.queue(handle, "failed", store.errors[pixels]));
        let id = store.ownerHead[listRec];
        for (;-1 !== id; ) {
            const next = s.i32[32 * id + 21];
            this.show(id, pixels), s.markDirty(id, 16), !0 === ok ? (s.u32[32 * id + 1] = 4194304 | s.u32[32 * id + 1], 
            this.applyTexSize(id), this.applyAutosize(id), this.loaded(id, listRec)) : this.failedNode(id, pixels), 
            id = next;
        }
    }
    loaded(id, rec) {
        const node = this.nodes.handles[id];
        !1 !== node.hasListener("loaded") && (this.measure(rec), this.dimW > 1 && this.dimH > 1 && this.events.queue(node, "loaded", {
            type: "texture",
            dimensions: {
                w: this.dimW,
                h: this.dimH
            }
        }));
    }
    failedNode(id, pixels) {
        const node = this.nodes.handles[id];
        !0 === node.hasListener("failed") && this.events.queue(node, "failed", {
            type: "texture",
            error: this.store.errors[pixels]
        });
    }
}, GlContext = class {
    constructor(gl, webgl2, disableVao, width, height) {
        this.program = null, this.vao = null, this.texture = null, this.arrayBuffer = null, 
        this.scissorOn = !1, this.sx = 0, this.sy = 0, this.premultiply = !1, this.clearRgba = 0, 
        this.gl = gl, this.isWebGl2 = webgl2, this.vaoExt = !1 === webgl2 && !1 === disableVao ? gl.getExtension("OES_vertex_array_object") : null, 
        this.canUseVao = !1 === disableVao && (!0 === webgl2 || null !== this.vaoExt), this.sw = gl.drawingBufferWidth, 
        this.sh = gl.drawingBufferHeight, gl.viewport(0, 0, width, height), gl.enable(3042), 
        gl.blendFunc(1, 771);
    }
    useProgram(program) {
        this.program !== program && (this.program = program, this.gl.useProgram(program));
    }
    bindVao(vao) {
        this.vao !== vao && (this.vao = vao, null !== this.vaoExt ? this.vaoExt.bindVertexArrayOES(vao) : this.gl.bindVertexArray(vao));
    }
    createVao() {
        return null !== this.vaoExt ? this.vaoExt.createVertexArrayOES() : this.gl.createVertexArray();
    }
    attribPointer(buffer, index, size, type, normalized, stride, offset) {
        this.bindArrayBuffer(buffer), this.gl.vertexAttribPointer(index, size, type, normalized, stride, offset);
    }
    enableAttribs(mask) {
        for (let i = 0; mask >>> i !== 0; i++) 1 == (mask >>> i & 1) && this.gl.enableVertexAttribArray(i);
    }
    bindIndexBuffer(buffer) {
        this.gl.bindBuffer(34963, buffer);
    }
    createBuffer() {
        return this.gl.createBuffer();
    }
    staticBuffer(target, data) {
        const buffer = this.createBuffer();
        return 34962 === target ? this.bindArrayBuffer(buffer) : this.gl.bindBuffer(target, buffer), 
        this.gl.bufferData(target, data, 35044), buffer;
    }
    uploadVertices(buffer, data) {
        this.bindArrayBuffer(buffer), this.gl.bufferData(34962, data, 35048);
    }
    bindTexture(texture) {
        this.texture !== texture && (this.texture = texture, this.gl.bindTexture(3553, texture));
    }
    createTexture(minFilter) {
        const gl = this.gl, texture = gl.createTexture();
        return this.bindTexture(texture), gl.texParameteri(3553, 10241, minFilter), gl.texParameteri(3553, 10242, 33071), 
        gl.texParameteri(3553, 10243, 33071), texture;
    }
    texImage(texture, source, w, h, premultiply) {
        const gl = this.gl;
        this.bindTexture(texture), this.premultiply !== premultiply && (this.premultiply = premultiply, 
        gl.pixelStorei(37441, premultiply)), !0 === ArrayBuffer.isView(source) ? gl.texImage2D(3553, 0, 6408, w, h, 0, 6408, 5121, source) : gl.texImage2D(3553, 0, 6408, 6408, 5121, source);
    }
    extension(name) {
        return this.gl.getExtension(name);
    }
    compressedTexImage(texture, level, format, w, h, data) {
        this.bindTexture(texture), this.gl.compressedTexImage2D(3553, level, format, w, h, 0, data);
    }
    deleteTexture(texture) {
        this.texture === texture && (this.texture = null), this.gl.deleteTexture(texture);
    }
    compile(vertex, fragment, attributes) {
        const gl = this.gl, program = gl.createProgram(), vertexShader = this.shader(35633, vertex), fragmentShader = this.shader(35632, fragment);
        gl.attachShader(program, vertexShader), gl.attachShader(program, fragmentShader);
        for (let i = 0; i < attributes.length; i++) gl.bindAttribLocation(program, i, attributes[i]);
        if (gl.linkProgram(program), !0 !== gl.getProgramParameter(program, 35714)) throw new Error(`Program link failed: ${gl.getProgramInfoLog(program)}\nVertex shader: ${gl.getShaderInfoLog(vertexShader)}\nFragment shader: ${gl.getShaderInfoLog(fragmentShader)}`);
        return program;
    }
    uniformLocation(program, name) {
        return this.gl.getUniformLocation(program, name);
    }
    uniform4fv(location, value) {
        this.gl.uniform4fv(location, value);
    }
    uniform1f(location, x) {
        this.gl.uniform1f(location, x);
    }
    uniform2f(location, x, y) {
        this.gl.uniform2f(location, x, y);
    }
    uniform4f(location, x, y, z, w) {
        this.gl.uniform4f(location, x, y, z, w);
    }
    uniformv(kind, location, data) {
        const gl = this.gl;
        switch (kind) {
          case 1:
            gl.uniform1fv(location, data);
            break;

          case 2:
            gl.uniform2fv(location, data);
            break;

          case 3:
            gl.uniform3fv(location, data);
            break;

          case 4:
            gl.uniform4fv(location, data);
            break;

          case 5:
            gl.uniform1iv(location, data);
            break;

          case 6:
            gl.uniform2iv(location, data);
            break;

          case 7:
            gl.uniform3iv(location, data);
            break;

          case 8:
            gl.uniform4iv(location, data);
            break;

          case 9:
            gl.uniformMatrix2fv(location, !1, data);
            break;

          case 10:
            gl.uniformMatrix3fv(location, !1, data);
            break;

          case 11:
            gl.uniformMatrix4fv(location, !1, data);
        }
    }
    isLost() {
        return this.gl.isContextLost();
    }
    scissorTest(on) {
        this.scissorOn !== on && (this.scissorOn = on, !0 === on ? this.gl.enable(3089) : this.gl.disable(3089));
    }
    scissor(x, y, w, h) {
        x === this.sx && y === this.sy && w === this.sw && h === this.sh || (this.sx = x, 
        this.sy = y, this.sw = w, this.sh = h, this.gl.scissor(x, y, w, h));
    }
    clearColor(rgba) {
        const v = rgba >>> 0;
        v !== this.clearRgba && (this.clearRgba = v, this.gl.clearColor((v >>> 24) / 255, (v >>> 16 & 255) / 255, (v >>> 8 & 255) / 255, (255 & v) / 255));
    }
    clear() {
        this.gl.clear(16384);
    }
    drawQuads(start, count) {
        this.gl.drawElements(4, 6 * count, 5123, 12 * start);
    }
    parameter(name) {
        return this.gl.getParameter(name);
    }
    outOfMemory() {
        const gl = this.gl;
        let oom = !1;
        for (let i = 0; i < 8; i++) {
            const error = gl.getError();
            if (0 === error) break;
            1285 === error && (oom = !0);
        }
        return oom;
    }
    lose() {
        const ext = this.gl.getExtension("WEBGL_lose_context");
        null !== ext && ext.loseContext();
    }
    bindArrayBuffer(buffer) {
        this.arrayBuffer !== buffer && (this.arrayBuffer = buffer, this.gl.bindBuffer(34962, buffer));
    }
    shader(type, source) {
        const gl = this.gl, shader = gl.createShader(type);
        return gl.shaderSource(shader, source), gl.compileShader(shader), shader;
    }
};

var ATTRIBUTES = [ "a_position", "a_textureCoords", "a_color", "a_extra", "a_nodeCoords", "a_textureTexels" ], SYSTEM_UNIFORMS = [ "u_alpha", "u_time", "u_nodeTransform", "u_uvRect", "u_dimensions", "u_resolution", "u_pixelRatio" ], UniformTable = class {
    constructor() {
        this.names = [], this.kinds = [], this.offsets = [], this.sizes = [], this.scratch = [], 
        this.length = 0, this.direct = !1, this.warned = !1;
    }
    indexOf(name) {
        return this.names.indexOf(name);
    }
    add(name, kind, size) {
        const e = this.names.length;
        return this.names.push(name), this.kinds.push(kind), this.offsets.push(this.length), 
        this.sizes.push(size), this.scratch.push(kind >= 5 && kind <= 8 ? new Int32Array(size) : new Float32Array(size)), 
        this.length += size, this.direct = 0 === e && "u_params" === name && 4 === kind, 
        e;
    }
}, Program = class {
    constructor(ctx, vertex, fragment, name) {
        this.system = [], this.lastParams = null, this.perOp = null, this.table = null, 
        this.locations = [], this.nodes = null, this.time = null, this.alpha = NaN, this.t = NaN, 
        this.ta = NaN, this.tb = NaN, this.tc = NaN, this.td = NaN, this.ux1 = NaN, this.uy1 = NaN, 
        this.ux2 = NaN, this.uy2 = NaN, this.w = NaN, this.h = NaN, this.name = name, this.ctx = ctx;
        const handle = ctx.compile(vertex, fragment, ATTRIBUTES);
        this.handle = handle, this.params = ctx.uniformLocation(handle, "u_params");
        let systemMask = 0;
        for (let i = 0; i < SYSTEM_UNIFORMS.length; i++) {
            const location = ctx.uniformLocation(handle, SYSTEM_UNIFORMS[i]);
            this.system.push(location), null !== location && (systemMask |= 1 << i);
        }
        this.systemMask = systemMask;
    }
    bindSystem(nodes, time) {
        this.nodes = nodes, this.time = time, 31 & this.systemMask && (this.perOp = node => {
            this.uploadSystem(node);
        });
    }
    uploadTable(block) {
        const table = this.table, ctx = this.ctx, names = table.names, length = block.length, n = names.length;
        for (let e = 0; e < n; e++) {
            let location = this.locations[e];
            if (void 0 === location && (location = ctx.uniformLocation(this.handle, names[e]), 
            this.locations[e] = location), null === location) continue;
            const offset = table.offsets[e], size = table.sizes[e], scratch = table.scratch[e];
            for (let k = 0; k < size; k++) {
                const at = offset + k;
                scratch[k] = at < length ? block[at] : 0;
            }
            ctx.uniformv(table.kinds[e], location, scratch);
        }
    }
    uploadSystem(node) {
        const s = this.nodes, fo = 32 * node, io = 32 * node, ctx = this.ctx, system = this.system, alpha = system[0];
        if (null !== alpha) {
            const a = s.f64[fo + 4];
            a !== this.alpha && (this.alpha = a, ctx.uniform1f(alpha, a));
        }
        const transform = system[2];
        if (null !== transform) {
            const a = s.f64[fo + 6], b = s.f64[fo + 8], c = s.f64[fo + 9], d = s.f64[fo + 7];
            a === this.ta && b === this.tb && c === this.tc && d === this.td || (this.ta = a, 
            this.tb = b, this.tc = c, this.td = d, ctx.uniform4f(transform, a, c, b, d));
        }
        const uvRect = system[3];
        if (null !== uvRect) {
            const x1 = s.f32[io + 23], y1 = s.f32[io + 24], x2 = s.f32[io + 25], y2 = s.f32[io + 26];
            x1 === this.ux1 && y1 === this.uy1 && x2 === this.ux2 && y2 === this.uy2 || (this.ux1 = x1, 
            this.uy1 = y1, this.ux2 = x2, this.uy2 = y2, ctx.uniform4f(uvRect, x1, y1, x2, y2));
        }
        const dimensions = system[4];
        if (null !== dimensions) {
            const w = s.f64[fo + 0], h = s.f64[fo + 1];
            w === this.w && h === this.h || (this.w = w, this.h = h, ctx.uniform2f(dimensions, w, h));
        }
        const time = system[1], timeOf = this.time;
        if (null !== time && null !== timeOf) {
            const t = timeOf(node);
            t !== this.t && (this.t = t, ctx.uniform1f(time, t));
        }
    }
}, PRECISION = "#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif\n", glslFloat = value => !0 === Number.isInteger(value) ? value.toFixed(1) : String(value), viewportGlsl = (pixelRatio, w, h) => `#define PIXEL_RATIO ${glslFloat(pixelRatio)}\n#define RESOLUTION vec2(${glslFloat(w)}, ${glslFloat(h)})\nvec4 pxToClip(vec2 px){return vec4((px*PIXEL_RATIO/RESOLUTION*2.0-1.0)*vec2(1.0,-1.0),0.0,1.0);}\n`, defaultVertex = (viewport, declarations, assignments) => "#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif\nattribute vec2 a_position;attribute vec2 a_textureCoords;attribute vec4 a_color;attribute vec2 a_nodeCoords;\n" + viewport + "varying vec4 v_color;varying vec2 v_textureCoords;\n" + declarations + "\nvoid main(){v_color=a_color;v_textureCoords=a_textureCoords;\n" + assignments + "\ngl_Position=pxToClip(a_position);}", edgeWidthDefine = pixelRatio => `#define EDGE_WIDTH ${(1 / pixelRatio).toFixed(8)}\n#define INV_EDGE_WIDTH ${pixelRatio.toFixed(8)}\n`, rampScale = (e0, e1) => {
    const span = e1 - e0;
    return span < .000244140625 && span > -.000244140625 ? 4096 : 1 / span;
}, rgbaRow = (u, i, color) => {
    u.row(i, (color >>> 24) / 255, (color >>> 16 & 255) / 255, (color >>> 8 & 255) / 255, (255 & color) / 255);
}, paramsGlsl = rows => {
    let glsl = `uniform vec4 u_params[${rows.length}];\n`;
    for (let i = 0; i < rows.length; i++) glsl += `#define ${rows[i]} u_params[${i}]\n`;
    return glsl;
}, SHADER = Symbol("shader"), ShaderNode = class {
    constructor(registry, rec, values, slot) {
        this._head = -1, this._key = null, this._rederive = !1, this._registry = registry, 
        this._rec = rec, this.shaderType = rec.type, this.values = values, this._slot = slot;
        const props = Object.create(rec.proto);
        props[SHADER] = this, this._props = props;
    }
    get props() {
        return this._props;
    }
    set props(props) {
        const facade = this._props;
        for (const key in props) facade[key] = props[key];
    }
    _changed(variant) {
        this._key = null, !0 === variant && (this._rederive = !0), this._registry.markUsers(this);
    }
}, UniformWriter = class {
    constructor(pixelRatio) {
        this.noAlpha = !1, this.rows = new Float32Array(64), this.rowCount = 0, this.names = [], 
        this.kinds = [], this.values = [], this.pixelRatio = pixelRatio;
    }
    row(i, x, y, z, w) {
        let rows = this.rows;
        const at = 4 * i;
        if (at + 4 > rows.length) {
            const grown = new Float32Array(8 * (i + 1));
            grown.set(rows), rows = grown, this.rows = grown;
        }
        rows[at] = x, rows[at + 1] = y, rows[at + 2] = z, rows[at + 3] = w, i >= this.rowCount && (this.rowCount = i + 1);
    }
    f1(name, x) {
        this.named(name, 1, [ x ]);
    }
    f2(name, x, y) {
        this.named(name, 2, [ x, y ]);
    }
    f3(name, x, y, z) {
        this.named(name, 3, [ x, y, z ]);
    }
    f4(name, x, y, z, w) {
        this.named(name, 4, [ x, y, z, w ]);
    }
    fv(name, n, values) {
        this.named(name, 1 + n - 1, values);
    }
    iv(name, n, values) {
        this.named(name, 5 + n - 1, values);
    }
    mat(name, n, values) {
        this.named(name, 9 + n - 2, values);
    }
    rgba(name, color) {
        var rgba;
        this.named(name, 4, [ ((rgba = color) >>> 24) / 255, (rgba >>> 16 & 255) / 255, (rgba >>> 8 & 255) / 255, (255 & rgba) / 255 ]);
    }
    alphaUnused() {
        this.noAlpha = !0;
    }
    finish(table) {
        const rowCount = this.rowCount;
        rowCount > 0 && -1 === table.indexOf("u_params") && table.add("u_params", 4, 4 * rowCount);
        const names = this.names, values = this.values;
        for (let i = 0; i < names.length; i++) -1 === table.indexOf(names[i]) && table.add(names[i], this.kinds[i], values[i].length);
        const block = new Float32Array(table.length);
        rowCount > 0 && copy(table, block, table.indexOf("u_params"), this.rows, 4 * rowCount);
        for (let i = 0; i < names.length; i++) {
            const v = values[i];
            copy(table, block, table.indexOf(names[i]), v, v.length);
        }
        return this.reset(), block;
    }
    reset() {
        const rows = this.rows, n = 4 * this.rowCount;
        for (let i = 0; i < n; i++) rows[i] = 0;
        this.rowCount = 0, this.noAlpha = !1, this.names.length = 0, this.kinds.length = 0, 
        this.values.length = 0;
    }
    named(name, kind, values) {
        const i = this.names.indexOf(name);
        if (-1 === i) return this.names.push(name), this.kinds.push(kind), void this.values.push(values);
        this.kinds[i] = kind, this.values[i] = values;
    }
};

function copy(table, block, e, values, count) {
    const offset = table.offsets[e], size = table.sizes[e];
    let n = count;
    count > size && (n = size, !1 === table.warned && (table.warned = !0, console.warn(`Shader uniform ${table.names[e]} holds ${size} values, the size of its first pack; ${count} were written and the rest is dropped`)));
    for (let k = 0; k < n; k++) block[offset + k] = values[k];
}

var UpdateContext = class {
    constructor(pixelRatio) {
        this.props = null, this.u = null, this.stage = {
            pixelRatio: pixelRatio
        };
    }
    uniform1f(name, x) {
        this.u.f1(name, x);
    }
    uniform2f(name, x, y) {
        this.u.f2(name, x, y);
    }
    uniform3f(name, x, y, z) {
        this.u.f3(name, x, y, z);
    }
    uniform4f(name, x, y, z, w) {
        this.u.f4(name, x, y, z, w);
    }
    uniform2fa(name, v) {
        this.u.fv(name, 2, v);
    }
    uniform3fa(name, v) {
        this.u.fv(name, 3, v);
    }
    uniform4fa(name, v) {
        this.u.fv(name, 4, v);
    }
    uniform1fv(name, v) {
        this.u.fv(name, 1, v);
    }
    uniform2fv(name, v) {
        this.u.fv(name, 2, v);
    }
    uniform3fv(name, v) {
        this.u.fv(name, 3, v);
    }
    uniform4fv(name, v) {
        this.u.fv(name, 4, v);
    }
    uniform1i(name, x) {
        this.u.iv(name, 1, [ x ]);
    }
    uniform2i(name, x, y) {
        this.u.iv(name, 2, [ x, y ]);
    }
    uniform3i(name, x, y, z) {
        this.u.iv(name, 3, [ x, y, z ]);
    }
    uniform4i(name, x, y, z, w) {
        this.u.iv(name, 4, [ x, y, z, w ]);
    }
    uniform1iv(name, v) {
        this.u.iv(name, 1, v);
    }
    uniform2iv(name, v) {
        this.u.iv(name, 2, v);
    }
    uniform3iv(name, v) {
        this.u.iv(name, 3, v);
    }
    uniform4iv(name, v) {
        this.u.iv(name, 4, v);
    }
    uniformMatrix2fv(name, v) {
        this.u.mat(name, 2, v);
    }
    uniformMatrix3fv(name, v) {
        this.u.mat(name, 3, v);
    }
    uniformMatrix4fv(name, v) {
        this.u.mat(name, 4, v);
    }
    uniformRGBA(name, color) {
        this.u.rgba(name, color);
    }
}, isAdvanced = config => null !== config && "object" == typeof config && void 0 !== config.default, copyOf = value => !0 === Array.isArray(value) ? value.slice() : value, keyOf = (props, keyed, w, h) => 2 === keyed ? props + w + "," + h : props, ShaderRegistry = class {
    constructor(nodes, owner, pixelRatio, host) {
        this.onLost = null, this.timed = !1, this.onError = null, this.byName = Object.create(null), 
        this.records = new Map, this.order = [], this.warmed = 0, this.cache = new Map, 
        this.entries = new Map, this.masks = [ 0 ], this.batches = [ null ], this.idle = 0, 
        this.packedNoAlpha = !1, this.users = [], this.next = new Int32Array(0), this.prev = new Int32Array(0), 
        this.failedSlots = [], this.failedTimes = [], this.thrown = !1, this.thrownError = null, 
        this.thrownName = "", this.nodes = nodes, this.owner = owner, this.pixelRatio = pixelRatio, 
        this.host = host, this.writer = new UniformWriter(pixelRatio);
    }
    get blockCount() {
        return this.cache.size;
    }
    register(name, type) {
        if (void 0 !== this.byName[name]) return void console.warn(`Shader type ${name} is already registered`);
        let rec = this.records.get(type);
        void 0 === rec && (rec = this.record(name, type), this.records.set(type, rec), this.order.push(rec)), 
        this.byName[name] = rec;
    }
    warmNext() {
        const order = this.order;
        for (;this.warmed < order.length; ) {
            const shader = this.defaults(order[this.warmed++]);
            if (null !== shader && -1 === shader._slot.id) return this.compile(shader, !1), 
            !0;
        }
        return !1;
    }
    create(name, props) {
        const rec = this.byName[name];
        if (void 0 === rec) return console.warn(`Shader type ${name} is not registered`), 
        null;
        const given = void 0 === props ? {} : props, values = {}, names = rec.names, configs = rec.configs;
        for (let i = 0; i < names.length; i++) {
            const key = names[i], config = configs[i], value = given[key];
            !1 === isAdvanced(config) ? values[key] = copyOf(void 0 !== value ? value : config) : void 0 !== config.resolve ? values[key] = config.resolve(value, values) : values[key] = copyOf(void 0 !== value ? value : config.default);
        }
        const aliases = rec.aliases;
        for (let i = 0; i < aliases.length; i++) {
            const value = given[aliases[i]];
            void 0 !== value && rec.aliasConfigs[i].set(value, values);
        }
        const variant = null === rec.variant ? "" : rec.variant(values);
        return new ShaderNode(this, rec, values, this.slot(rec, variant));
    }
    pack(id) {
        const s = this.nodes, ref = s.shaderRefs[id], shader = null !== ref && ref._registry === this ? ref : null, users = this.users;
        if (null === shader && (id >= users.length || null === users[id])) return;
        if (this.ensure(id), users[id] !== shader && (this.detach(id), null !== shader && this.attach(shader, id)), 
        null === shader) return void this.unset(id);
        let props = shader._key;
        const fresh = null === props;
        null === props && (!0 === shader._rederive && (shader._rederive = !1, this.rederive(shader)), 
        props = this.propsKey(shader), shader._key = props);
        const slot = shader._slot;
        if (-1 === slot.id && this.compile(shader, !0), 0 === slot.id) return void this.unset(id);
        const w = s.f64[32 * id + 0], h = s.f64[32 * id + 1], keyed = slot.keyed, current = s.params[id];
        if (null !== current && !0 === this.holds(current, props, keyed, w, h)) return;
        let block = null;
        if (0 !== keyed && (block = this.cached(shader, fresh, keyed, w, h), null === block)) {
            const packed = shader._key;
            if (block = null === shader._rec.pack ? new Float32Array(0) : this.packBlock(shader, w, h), 
            0 === s.i32[32 * id + 2]) return;
            if (null === block) return void this.unset(id);
            this.add(block, packed, keyed, w, h, null !== shader._rec.pack && this.packedNoAlpha);
        }
        this.unref(current);
        let noAlpha = !1;
        if (null !== block) {
            const entry = this.entries.get(block);
            0 === entry.refs && this.idle--, entry.refs++, noAlpha = entry.noAlpha;
        }
        s.params[id] = block;
        const program = slot.id;
        s.i32[32 * id + 13] = program;
        let state = s.u32[32 * id + 1];
        state = 13 & this.masks[program] || null !== this.batches[program] ? 256 | state : -257 & state, 
        s.u32[32 * id + 1] = !0 === noAlpha ? 134217728 | state : -134217729 & state;
    }
    perOpMatch(id, opNode) {
        const s = this.nodes, program = s.i32[32 * id + 13];
        if (s.i32[32 * opNode + 13] !== program) return !0;
        const canBatch = this.batches[program];
        if (null !== canBatch) return canBatch(s.handles[id], s.handles[opNode]);
        const mask = this.masks[program];
        return !(1 & mask && s.f64[32 * id + 4] !== s.f64[32 * opNode + 4] && !(134217728 & s.u32[32 * id + 1])) && ((!(4 & mask) || s.f64[32 * id + 6] === s.f64[32 * opNode + 6] && s.f64[32 * id + 8] === s.f64[32 * opNode + 8] && s.f64[32 * id + 9] === s.f64[32 * opNode + 9] && s.f64[32 * id + 7] === s.f64[32 * opNode + 7]) && (!(8 & mask) || s.f32[32 * id + 23] === s.f32[32 * opNode + 23] && s.f32[32 * id + 24] === s.f32[32 * opNode + 24] && s.f32[32 * id + 25] === s.f32[32 * opNode + 25] && s.f32[32 * id + 26] === s.f32[32 * opNode + 26]));
    }
    release(id) {
        id < this.users.length && (this.detach(id), this.unset(id));
    }
    markUsers(shader) {
        const nodes = this.nodes, next = this.next;
        let id = shader._head;
        for (;-1 !== id; ) nodes.markDirty(id, 32), id = next[id];
    }
    trim() {
        const failedSlots = this.failedSlots;
        for (let i = 0; i < failedSlots.length; i++) failedSlots[i].packFailed = !1;
        failedSlots.length = 0;
        const failedTimes = this.failedTimes;
        for (let i = 0; i < failedTimes.length; i++) failedTimes[i].timeThrew = !1;
        failedTimes.length = 0, this.dropIdle();
    }
    dropIdle() {
        const cache = this.cache, entries = this.entries;
        entries.forEach((entry, block) => {
            0 === entry.refs && (entries.delete(block), cache.delete(entry.key));
        }), this.idle = 0;
    }
    reportErrors() {
        if (!1 === this.thrown) return;
        this.thrown = !1;
        const error = this.thrownError;
        this.thrownError = null;
        const onError = this.onError;
        null !== onError ? onError(error) : console.error(`Shader ${this.thrownName} time function threw`, error);
    }
    program(vertex, fragment, failure, name) {
        try {
            return this.host.register(vertex, fragment, null, new UniformTable, null, name);
        } catch (error) {
            return null === failure ? -1 : (this.failed(failure, error), 0);
        }
    }
    record(name, type) {
        var _type$props, _type$pack, _ref, _type$variant, _type$variantProps;
        const names = [], configs = [], aliases = [], aliasConfigs = [], colors = [], props = null !== (_type$props = type.props) && void 0 !== _type$props ? _type$props : {};
        for (const key in props) {
            const config = props[key];
            !0 === isAdvanced(config) && !0 === config.color && colors.push(key), !0 !== isAdvanced(config) || void 0 === config.set ? (names.push(key), 
            configs.push(config)) : (aliases.push(key), aliasConfigs.push(config));
        }
        let pack = null !== (_type$pack = type.pack) && void 0 !== _type$pack ? _type$pack : null;
        const update = type.update;
        if (null === pack && void 0 !== update) {
            const context = new UpdateContext(this.pixelRatio), node = {
                w: 0,
                h: 0,
                width: 0,
                height: 0
            };
            pack = (values, w, h, u) => {
                context.props = values, context.u = u, node.w = w, node.width = w, node.h = h, node.height = h, 
                update.call(context, node);
            };
        }
        const variant = null !== (_ref = null !== (_type$variant = type.variant) && void 0 !== _type$variant ? _type$variant : type.getCacheMarkers) && void 0 !== _ref ? _ref : null, variantProps = null === variant ? null : null !== (_type$variantProps = type.variantProps) && void 0 !== _type$variantProps ? _type$variantProps : null, time = type.time, owner = this.owner;
        let timeOf = null;
        return !0 === time ? timeOf = () => this.drawn(owner.elapsedTime) : "function" == typeof time && (timeOf = node => {
            const shader = this.users[node];
            return this.drawn(null == shader ? null : this.evaluate(time, shader));
        }), {
            id: this.records.size,
            name: name,
            type: type,
            names: names,
            configs: configs,
            aliases: aliases,
            aliasConfigs: aliasConfigs,
            colors: colors,
            proto: facadeProto(names, configs, aliases, aliasConfigs, variantProps),
            slots: Object.create(null),
            pack: pack,
            variant: variant,
            timeOf: timeOf,
            variants: 0,
            variantThrew: !1,
            timeThrew: !1
        };
    }
    holds(block, props, keyed, w, h) {
        const entry = this.entries.get(block);
        return entry.props === props && (2 !== keyed || entry.w === w && entry.h === h);
    }
    cached(shader, fresh, keyed, w, h) {
        const cache = this.cache, key = shader._key, block = cache.get(keyOf(key, keyed, w, h));
        if (void 0 !== block) return block;
        if (!0 === fresh) return null;
        const props = this.propsKey(shader);
        if (props === key) return null;
        shader._key = props;
        const rebuilt = cache.get(keyOf(props, keyed, w, h));
        return void 0 === rebuilt ? null : rebuilt;
    }
    add(block, props, keyed, w, h, noAlpha) {
        this.idle > 256 && this.dropIdle();
        const key = keyOf(props, keyed, w, h);
        this.cache.set(key, block), this.entries.set(block, {
            key: key,
            props: props,
            w: w,
            h: h,
            noAlpha: noAlpha,
            refs: 0
        }), this.idle++;
    }
    propsKey(shader) {
        const rec = shader._rec, values = shader.values, names = rec.names;
        let key = rec.id + "|" + shader._slot.variant;
        for (let i = 0; i < names.length; i++) {
            const value = values[names[i]];
            key += "|" + (!0 === Array.isArray(value) ? value.join(",") : String(value));
        }
        return key + "|";
    }
    compile(shader, report) {
        const slot = shader._slot, rec = shader._rec, type = rec.type, host = this.host, ratio = this.pixelRatio, context = {
            pixelRatio: ratio,
            viewport: host.viewport,
            stage: {
                pixelRatio: ratio
            }
        }, values = shader.values;
        try {
            var _type$webgl1Extension, _type$canBatch;
            const vertex = void 0 === type.vertex ? defaultVertex(host.viewport, "varying vec2 v_nodeCoords;", "v_nodeCoords=a_nodeCoords;") : "string" == typeof type.vertex ? type.vertex : type.vertex(context, values), fragment = "string" == typeof type.fragment ? type.fragment : type.fragment(context, values), id = host.register(vertex, fragment, null !== (_type$webgl1Extension = type.webgl1Extensions) && void 0 !== _type$webgl1Extension ? _type$webgl1Extension : null, slot.table, rec.timeOf, "" === slot.variant ? rec.name : rec.name + ":" + slot.variant), masks = this.masks, batches = this.batches;
            for (;masks.length <= id; ) masks.push(0), batches.push(null);
            const mask = host.systemMask(id);
            masks[id] = mask, batches[id] = null !== (_type$canBatch = type.canBatch) && void 0 !== _type$canBatch ? _type$canBatch : null, 
            slot.keyed = null !== rec.pack || 16 & mask ? 2 : 2 & mask && "function" == typeof type.time ? 1 : 0, 
            slot.id = id;
        } catch (error) {
            if (!1 === report) return;
            slot.id = 0, this.failed(`Shader ${rec.name} failed to compile; its nodes draw without it`, error);
        }
    }
    defaults(rec) {
        try {
            return this.create(rec.name);
        } catch (error) {
            return null;
        }
    }
    packBlock(shader, w, h) {
        const slot = shader._slot;
        if (!0 === slot.packFailed) return null;
        const u = this.writer;
        try {
            shader._rec.pack(shader.values, w, h, u);
        } catch (error) {
            return u.reset(), slot.packFailed = !0, this.failedSlots.push(slot), console.error(`Shader ${shader._rec.name} failed to pack; its nodes draw without it`, error), 
            null;
        }
        return this.packedNoAlpha = u.noAlpha, u.finish(slot.table);
    }
    slot(rec, variant) {
        let slot = rec.slots[variant];
        return void 0 === slot && (slot = {
            id: -1,
            variant: variant,
            table: new UniformTable,
            keyed: 0,
            packFailed: !1
        }, rec.slots[variant] = slot, rec.variants++, 17 === rec.variants && console.warn(`Shader ${rec.name} has more than 16 variants: each compiles a program of its own`)), 
        slot;
    }
    rederive(shader) {
        const rec = shader._rec;
        let variant;
        try {
            variant = rec.variant(shader.values);
        } catch (error) {
            return void (!1 === rec.variantThrew && (rec.variantThrew = !0, console.error(`Shader ${rec.name} variant threw; its nodes keep their program`, error)));
        }
        variant !== shader._slot.variant && (shader._slot = this.slot(rec, variant));
    }
    drawn(t) {
        return "number" != typeof t ? 0 : (t == t && (this.timed = !0), t);
    }
    evaluate(time, shader) {
        try {
            return time(this.owner, shader.values);
        } catch (error) {
            const rec = shader._rec;
            return !1 === this.thrown && !1 === rec.timeThrew && (rec.timeThrew = !0, this.failedTimes.push(rec), 
            this.thrown = !0, this.thrownError = error, this.thrownName = rec.name), null;
        }
    }
    failed(message, error) {
        if (!0 === this.host.isLost()) {
            const onLost = this.onLost;
            return void (null !== onLost && onLost());
        }
        console.error(message, error);
    }
    unset(id) {
        const s = this.nodes;
        this.unref(s.params[id]), s.params[id] = null, s.i32[32 * id + 13] = 0, s.u32[32 * id + 1] = -134217985 & s.u32[32 * id + 1];
    }
    unref(block) {
        if (null === block) return;
        const entry = this.entries.get(block);
        entry.refs--, 0 === entry.refs && this.idle++;
    }
    ensure(id) {
        const users = this.users;
        if (id < users.length) return;
        const n = this.nodes.capacity;
        for (;users.length < n; ) users.push(null);
        const old = this.next.length, next = new Int32Array(n);
        next.set(this.next);
        const prev = new Int32Array(n);
        prev.set(this.prev);
        for (let i = old; i < n; i++) next[i] = -1, prev[i] = -1;
        this.next = next, this.prev = prev;
    }
    attach(shader, id) {
        const head = shader._head;
        this.users[id] = shader, this.next[id] = head, this.prev[id] = -1, -1 !== head && (this.prev[head] = id), 
        shader._head = id;
    }
    detach(id) {
        const shader = this.users[id];
        if (null === shader) return;
        const next = this.next, prev = this.prev, p = prev[id], n = next[id];
        -1 !== p ? next[p] = n : shader._head = n, -1 !== n && (prev[n] = p), next[id] = -1, 
        prev[id] = -1, this.users[id] = null;
    }
};

function facadeProto(names, configs, aliases, aliasConfigs, variantProps) {
    const proto = {};
    for (let i = 0; i < names.length; i++) {
        const name = names[i], config = configs[i], resolver = !0 === isAdvanced(config) && void 0 !== config.resolve ? config : null, variant = null !== variantProps && -1 !== variantProps.indexOf(name);
        Object.defineProperty(proto, name, {
            enumerable: !0,
            get() {
                const shader = this[SHADER];
                return void 0 === shader ? void 0 : shader.values[name];
            },
            set(v) {
                const shader = this[SHADER], values = shader.values, value = null === resolver ? v : resolver.resolve(v, values);
                (value !== values[name] || null !== value && "object" == typeof value) && (values[name] = value, 
                shader._changed(variant));
            }
        });
    }
    for (let i = 0; i < aliases.length; i++) {
        const config = aliasConfigs[i];
        Object.defineProperty(proto, aliases[i], {
            enumerable: !0,
            get() {
                const shader = this[SHADER];
                return void 0 === shader || void 0 === config.get ? void 0 : config.get(shader.values);
            },
            set(v) {
                const shader = this[SHADER];
                config.set(v, shader.values), shader._changed(!1);
            }
        });
    }
    return proto;
}

function assertTruthy(condition, message) {
}

var PROTOCOL_REGEX = /^(blob|data|file|ftps?|https?):/, IS_FILE_PROTOCOL = "undefined" != typeof self && "file:" === self.location.protocol;

function convertUrlToAbsolute(url) {
    const hasProtocol = PROTOCOL_REGEX.test(url);
    if (!0 === IS_FILE_PROTOCOL && !1 === hasProtocol) {
        const path = self.location.pathname.split("/");
        path.pop();
        const baseUrl = self.location.protocol + "//" + path.join("/");
        return "." === url.charAt(0) && (url = url.slice(1)), "/" === url.charAt(0) && (url = url.slice(1)), 
        baseUrl + "/" + url;
    }
    return !0 === hasProtocol || "undefined" == typeof self ? url : new URL(url, self.location.href).href;
}

function isBase64Image(src) {
    return 0 === src.lastIndexOf("data:", 0);
}

var Platform = class {
    resolveSettings(settings) {
        return settings;
    }
    hidden() {
        return !1;
    }
    present(_canvas) {}
}, WebPlatform = class extends Platform {
    constructor() {
        super(...arguments), this.presented = !1;
    }
    createCanvas() {
        return document.createElement("canvas");
    }
    getElementById(id) {
        return document.getElementById(id);
    }
    sizeCanvas(canvas, width, height, logicalWidth, logicalHeight) {
        canvas.width = width, canvas.height = height;
        const style = canvas.style;
        null != style && (style.width = `${logicalWidth}px`, style.height = `${logicalHeight}px`);
    }
    requestAnimationFrame(callback) {
        return requestAnimationFrame(callback);
    }
    cancelAnimationFrame(handle) {
        cancelAnimationFrame(handle);
    }
    setTimeout(callback, ms) {
        setTimeout(callback, ms);
    }
    hidden() {
        return "undefined" != typeof document && !0 === document.hidden;
    }
    present(canvas) {
        const style = canvas.style;
        if (null == style) return;
        const presented = !1 === this.presented;
        this.presented = presented, style.opacity = !0 === presented ? "0.999" : "1";
    }
    now() {
        return performance.now();
    }
    createImageBitmap(source, sxOrOptions, sy, sw, sh, options) {
        return "function" != typeof createImageBitmap ? Promise.reject(new Error("createImageBitmap is not supported")) : void 0 === sxOrOptions ? createImageBitmap(source) : "number" == typeof sxOrOptions ? createImageBitmap(source, sxOrOptions, sy, sw, sh, options) : createImageBitmap(source, sxOrOptions);
    }
    createImage() {
        return new Image;
    }
    fetch(url, responseType) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest;
            xhr.responseType = responseType, xhr.onreadystatechange = () => {
                if (4 !== xhr.readyState) return;
                const status = xhr.status;
                status >= 200 && status < 300 || 0 === status && null !== xhr.response ? resolve(xhr.response) : reject(new Error(0 === status ? `Network error or timeout loading ${url}` : `HTTP ${status} ${xhr.statusText} loading ${url}`));
            }, xhr.open("GET", url, !0), xhr.timeout = 3e4, xhr.send(null);
        });
    }
    createWorker(source) {
        if ("undefined" == typeof Worker) return null;
        const url = URL.createObjectURL(new Blob([ source ], {
            type: "application/javascript"
        }));
        let worker = null;
        try {
            worker = new Worker(url);
        } catch (e) {
            worker = null;
        }
        return URL.revokeObjectURL(url), worker;
    }
}, pool = new Map, orNull = promise => promise.then(value => value, () => null), isObject$1 = value => null !== value && "object" == typeof value;

function normalizeSdfData(response) {
    let data = response;
    if ("string" == typeof data) try {
        data = JSON.parse(data);
    } catch (e) {
        return null;
    }
    if (!1 === isObject$1(data)) return null;
    const font = data;
    return !0 === isObject$1(font.chars) && !0 === isObject$1(font.common) && !0 === isObject$1(font.info) && !0 === isObject$1(font.distanceField) ? font : null;
}

function startRequest(fetch, url, type) {
    try {
        return fetch(convertUrlToAbsolute(url), type);
    } catch (error) {
        return Promise.reject(error);
    }
}

function prefetchFont(options) {
    const family = options.fontFamily, primary = !0 === Array.isArray(family) ? family[0] : family;
    if (void 0 === primary || "canvas" === options.type || void 0 === options.atlasDataUrl || !0 === pool.has(primary)) return;
    const Host = null, platform = null !== Host ? new Host : new WebPlatform, fetch = (url, type) => platform.fetch(url, type), atlasUrl = options.atlasUrl;
    pool.set(primary, {
        data: orNull(startRequest(fetch, options.atlasDataUrl, "json")).then(normalizeSdfData),
        atlas: void 0 !== atlasUrl ? orNull(startRequest(fetch, atlasUrl, "blob")).then(blob => null !== blob && "object" == typeof blob ? blob : null) : Promise.resolve(null)
    });
}

function clearFontPrefetch() {
    pool.clear();
}

var texelUnits = n => Math.round(32768 * n), GlyphRecord = class {
    constructor(glyph, kernColumn, kern, invAtlasWidth, invAtlasHeight) {
        this.xadvance = glyph.xadvance, this.xoffset = glyph.xoffset, this.yoffset = glyph.yoffset, 
        this.width = glyph.width, this.height = glyph.height;
        const u = glyph.x * invAtlasWidth, v = glyph.y * invAtlasHeight, u2 = texelUnits(u + glyph.width * invAtlasWidth), v2 = texelUnits(v + glyph.height * invAtlasHeight), u1 = texelUnits(u), v1 = texelUnits(v);
        this.uvTopLeft = (v1 << 16 | u1) >>> 0, this.uvTopRight = (v1 << 16 | u2) >>> 0, 
        this.uvBottomLeft = (v2 << 16 | u1) >>> 0, this.uvBottomRight = (v2 << 16 | u2) >>> 0, 
        this.kernColumn = kernColumn, this.kern = kern;
    }
}, EMPTY_PAGE = [];

for (let i = 0; i < 256; i++) EMPTY_PAGE.push(null);

var DEFAULT_METRICS = {
    ascender: 800,
    descender: -200,
    lineGap: 200,
    unitsPerEm: 1e3
}, isInvisible = code => 8204 === code || 8205 === code || 65279 === code || 173 === code || 8288 === code;

function astralOf(font, code) {
    const glyph = font.astral.get(code);
    return void 0 !== glyph ? glyph : null;
}

function measureText(text, font, letterSpacing) {
    return measureRange(text, 0, text.length, font, letterSpacing);
}

function measureRange(text, start, end, font, letterSpacing) {
    const pages = font.pages;
    if (end - start === 1) {
        const code = text.charCodeAt(start);
        if (8203 === code || !0 === isInvisible(code)) return 0;
        let glyph = pages[code >> 8][255 & code];
        return null === glyph && (glyph = font.fallback, null === glyph) ? 0 : glyph.xadvance + letterSpacing;
    }
    const kernAmounts = font.kernAmounts;
    let width = 0, prev = -1;
    for (let i = start; i < end; i++) {
        let glyph, code = text.charCodeAt(i);
        if (code >= 55296 && code <= 56319 && i + 1 < end) {
            const lo = text.charCodeAt(i + 1);
            lo >= 56320 && lo <= 57343 && (code = 1024 * (code - 55296) + (lo - 56320) + 65536);
        }
        if (code > 65535) i++, glyph = astralOf(font, code); else {
            if (code >= 173 && (8203 === code || !0 === isInvisible(code))) continue;
            glyph = pages[code >> 8][255 & code];
        }
        if (null === glyph && (glyph = font.fallback, null === glyph)) continue;
        let advance = glyph.xadvance;
        if (-1 !== prev) {
            const row = glyph.kern;
            if (null !== row) {
                const pair = row[prev];
                0 !== pair && (advance += kernAmounts[pair]);
            }
        }
        width += advance + letterSpacing, prev = glyph.kernColumn;
    }
    return width;
}

var FontRecord = class {
    constructor(id, names, options) {
        this.font = null, this.atlas = null, this.rec = -1, this.ready = !1, this.error = null, 
        this.failures = 0, this.onLoaded = null, this.onFailed = null, this.id = id, this.names = names, 
        this.atlasUrl = options.atlasUrl, this.atlasDataUrl = options.atlasDataUrl, this.metrics = options.metrics, 
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve, this.reject = reject;
        });
    }
}, FontRegistry = class {
    constructor(textures) {
        this.fetch = null, this.schedule = null, this.onChange = null, this.pending = 0, 
        this.byName = new Map, this.nextId = 1, this.destroyed = !1, this.textures = textures;
    }
    get(name) {
        return this.byName.get(name);
    }
    load(options) {
        const family = options.fontFamily, names = "string" == typeof family ? [ family ] : family.slice(), aliases = options.aliases;
        if (void 0 !== aliases) for (let i = 0; i < aliases.length; i++) names.push(aliases[i]);
        const primary = names[0], prefetched = function(name) {
            const prefetched = pool.get(name);
            return void 0 !== prefetched && pool.delete(name), prefetched;
        }(primary), byName = this.byName, existing = byName.get(primary);
        if (void 0 !== existing) return existing.promise;
        const own = [], font = new FontRecord(this.nextId++, own, options);
        for (let i = 0; i < names.length; i++) {
            const name = names[i];
            !1 === byName.has(name) && (byName.set(name, font), own.push(name));
        }
        return this.pending++, this.fetchData(font, prefetched), font.promise;
    }
    destroy() {
        this.destroyed = !0, this.byName.clear(), this.pending = 0;
    }
    stale() {
        return this.destroyed;
    }
    fetchData(font, prefetched) {
        (void 0 === prefetched ? this.request(font) : prefetched.data.then(d => null !== d ? d : this.request(font))).then(d => function(name, data, metrics) {
            var _data$kernings;
            const kernings = {}, pairs = null !== (_data$kernings = data.kernings) && void 0 !== _data$kernings ? _data$kernings : [], columns = new Map;
            for (let i = 0; i < pairs.length; i++) {
                const pair = pairs[i];
                let firsts = kernings[pair.second];
                void 0 === firsts && (firsts = {}, kernings[pair.second] = firsts), firsts[pair.first] = pair.amount, 
                !1 === columns.has(pair.first) && columns.set(pair.first, columns.size);
            }
            const kernAmounts = new Float64Array(pairs.length + 1), rows = new Map;
            for (let i = 0; i < pairs.length; i++) {
                const pair = pairs[i];
                let row = rows.get(pair.second);
                void 0 === row && (row = pairs.length < 65536 ? new Uint16Array(columns.size) : new Uint32Array(columns.size), 
                rows.set(pair.second, row)), kernAmounts[i + 1] = pair.amount, row[columns.get(pair.first)] = void 0 === pair.amount ? 0 : i + 1;
            }
            const glyphs = new Map, pages = [];
            for (let i = 0; i < 256; i++) pages.push(EMPTY_PAGE);
            const astral = new Map, invAtlasWidth = 1 / data.common.scaleW, invAtlasHeight = 1 / data.common.scaleH, chars = data.chars;
            for (let i = 0; i < chars.length; i++) {
                const glyph = chars[i], id = glyph.id;
                if (glyphs.set(id, glyph), "number" != typeof id || id < 0 || Math.floor(id) !== id) continue;
                const column = columns.get(id), row = rows.get(id), record = new GlyphRecord(glyph, void 0 === column || 0 === id ? -1 : column, void 0 === row ? null : row, invAtlasWidth, invAtlasHeight);
                if (id >= 65536) {
                    astral.set(id, record);
                    continue;
                }
                let page = pages[id >> 8];
                page === EMPTY_PAGE && (page = EMPTY_PAGE.slice(), pages[id >> 8] = page), page[255 & id] = record;
            }
            let m = null != metrics ? metrics : data.lightningMetrics;
            void 0 === m && (console.warn(`Font metrics not found for SDF font ${name}. Make sure you are using the latest version of the Lightning 3 msdf-generator tool to generate your SDF fonts. Using default metrics.`), 
            m = DEFAULT_METRICS);
            const resolved = {
                ascender: m.ascender,
                descender: m.descender,
                lineGap: m.lineGap,
                unitsPerEm: m.unitsPerEm,
                capHeight: m.capHeight,
                xHeight: m.xHeight
            }, base = data.common.base, size = data.info.size;
            if (void 0 === resolved.capHeight) {
                const cap = glyphs.get(72);
                void 0 !== cap && (resolved.capHeight = (base - cap.yoffset) / size * m.unitsPerEm);
            }
            if (void 0 === resolved.xHeight) {
                const x = glyphs.get(120);
                void 0 !== x && (resolved.xHeight = (base - x.yoffset) / size * m.unitsPerEm);
            }
            return {
                data: data,
                glyphs: glyphs,
                kernings: kernings,
                metrics: resolved,
                sizes: new Map,
                pages: pages,
                astral: astral,
                fallback: pages[0][32],
                kernAmounts: kernAmounts
            };
        }(font.names[0], d, font.metrics)).then(parsed => {
            this.dataArrived(font, parsed, prefetched);
        }, error => {
            this.dataFailed(font, error);
        });
    }
    request(font) {
        const fetch = this.fetch;
        return null === fetch ? Promise.reject(new Error(`No fetch to load the SDF font ${font.names[0]} with`)) : startRequest(fetch, font.atlasDataUrl, "json").then(response => {
            const data = normalizeSdfData(response);
            if (null === data) throw new Error("Invalid SDF font data format");
            return data;
        });
    }
    dataFailed(font, error) {
        if (!0 === this.stale()) return;
        const failures = font.failures + 1;
        font.failures = failures;
        const schedule = this.schedule;
        failures > 3 || null === schedule ? this.fail(font, error) : (console.warn(`SDF font "${font.names[0]}" failed to load (attempt ${failures} of 4), retrying.`, error), 
        schedule(() => {
            !1 === this.stale() && this.fetchData(font, void 0);
        }, retryDelay(failures)));
    }
    dataArrived(font, parsed, prefetched) {
        !0 !== this.stale() && (font.font = parsed, this.changed(font), void 0 !== prefetched ? prefetched.atlas.then(blob => {
            !1 === this.stale() && this.makeAtlas(font, blob);
        }) : this.makeAtlas(font, null));
    }
    makeAtlas(font, blob) {
        const store = this.textures, atlas = createTexture(store, "ImageTexture", null !== blob ? {
            src: blob,
            key: font.atlasUrl,
            premultiplyAlpha: !1,
            maxRetryCount: 0
        } : {
            src: font.atlasUrl,
            key: font.atlasUrl,
            premultiplyAlpha: !1
        }), rec = atlas.id;
        if (font.atlas = atlas, font.rec = rec, store.ref(rec), store.want(rec, !0), 1 === store.state[rec] && store.onQueued(), 
        atlas.preventCleanup = !0, 4 === store.state[rec]) return void this.atlasArrived(font);
        var _store$errors$rec;
        if (!0 === store.failedForGood(rec)) return void this.atlasFailed(font, null !== (_store$errors$rec = store.errors[rec]) && void 0 !== _store$errors$rec ? _store$errors$rec : new Error("Atlas failed"));
        const onLoaded = () => {
            this.atlasArrived(font);
        }, onFailed = (_target, error) => {
            !0 === store.failedForGood(rec) && this.atlasFailed(font, error);
        };
        font.onLoaded = onLoaded, font.onFailed = onFailed, atlas.on("loaded", onLoaded), 
        atlas.on("failed", onFailed);
    }
    atlasArrived(font) {
        this.unlisten(font), !0 !== this.stale() && (font.ready = !0, this.pending--, font.resolve(), 
        this.changed(font));
    }
    atlasFailed(font, error) {
        if (this.unlisten(font), !0 === this.stale()) return;
        const store = this.textures, rec = font.rec, fromImage = "string" != typeof store.props[rec].src;
        if (store.unwant(rec), store.unref(rec), !1 == (0 !== store.refCount[rec] || 2 === store.state[rec])) store.destroy(rec); else if (!0 === fromImage) {
            const key = store.keys[rec];
            store.cache.get(key) === rec && store.cache.delete(key);
        }
        font.atlas = null, font.rec = -1, !1 !== fromImage ? this.makeAtlas(font, null) : this.fail(font, error);
    }
    fail(font, error) {
        const names = font.names;
        for (let i = 0; i < names.length; i++) this.byName.get(names[i]) === font && this.byName.delete(names[i]);
        this.pending--, font.error = error, console.error(`Failed to load SDF font: ${names[0]}`, error), 
        font.reject(error), this.changed(font);
    }
    unlisten(font) {
        const atlas = font.atlas;
        null !== atlas && null !== font.onLoaded && (atlas.off("loaded", font.onLoaded), 
        atlas.off("failed", font.onFailed), font.onLoaded = null, font.onFailed = null);
    }
    changed(font) {
        const onChange = this.onChange;
        null !== onChange && onChange(font);
    }
};

function layoutLines(measureText, measureRange, metrics, text, textAlign, font, lineHeight, overflowSuffix, wordBreak, letterSpacing, maxLines, maxWidth, maxHeight, baselineMode) {
    const bareLineHeight = metrics.ascender - metrics.descender + metrics.lineGap, lineHeightPx = lineHeight <= 3 ? lineHeight * bareLineHeight : lineHeight;
    let effectiveMaxLines = maxLines;
    if (maxHeight > 0) {
        let maxFromHeight = Math.floor(maxHeight / lineHeightPx);
        maxFromHeight < 1 && (maxFromHeight = 1), (0 === effectiveMaxLines || maxFromHeight < effectiveMaxLines) && (effectiveMaxLines = maxFromHeight);
    }
    const wrapped = maxWidth > 0 ? function(measureText, measureRange, text, font, maxWidth, letterSpacing, overflowSuffix, wordBreak, maxLines) {
        const wrappedLines = [], spaceWidth = measureText(" ", font, letterSpacing), overflowWidth = measureText(overflowSuffix, font, letterSpacing);
        let remainingLines = maxLines > 0 ? maxLines : 1e3, hasRemainingText = !0;
        const hasMaxLines = maxLines > 0;
        let start = 0;
        for (;;) {
            let end = text.indexOf("\n", start);
            const isLast = -1 === end;
            if (!0 === isLast && (end = text.length), end > start ? (remainingLines = wrapRange(measureText, measureRange, text, start, end, font, maxWidth, letterSpacing, spaceWidth, overflowSuffix, overflowWidth, wordBreak, remainingLines, wrappedLines), 
            hasRemainingText = !0) : (wrappedLines.push([ "", 0, !1, 0, 0 ]), hasRemainingText = !1 === isLast), 
            remainingLines--, !0 === hasMaxLines && remainingLines <= 0) {
                const lastLine = wrappedLines[wrappedLines.length - 1];
                if (!1 === isLast && !1 === lastLine[2]) {
                    const truncated = truncateLineEnd(measureText, font, letterSpacing, lastLine[0], lastLine[1], "", maxWidth, overflowSuffix, overflowWidth);
                    lastLine[0] = truncated[0], lastLine[1] = truncated[1], lastLine[2] = !0;
                }
                break;
            }
            if (!0 === isLast) break;
            start = end + 1;
        }
        return [ wrappedLines, remainingLines, hasRemainingText ];
    }(measureText, measureRange, text, font, maxWidth, letterSpacing, overflowSuffix, wordBreak, effectiveMaxLines) : function(measureText, lines, font, letterSpacing, maxLines) {
        const measuredLines = [];
        let remainingLines = maxLines > 0 ? maxLines : lines.length, i = 0;
        for (;remainingLines > 0 && i < lines.length; ) {
            const line = lines[i];
            if (i++, remainingLines--, void 0 === line) continue;
            const width = measureText(line, font, letterSpacing);
            measuredLines.push([ line, width, !1, 0, 0 ]);
        }
        return [ measuredLines, remainingLines, maxLines > 0 && lines.length - measuredLines.length > 0 ];
    }(measureText, text.split("\n"), font, letterSpacing, effectiveMaxLines), lines = wrapped[0], effectiveLineAmount = lines.length;
    let effectiveMaxWidth = 0;
    if (0 !== letterSpacing) for (let i = 0; i < effectiveLineAmount; i++) {
        const line = lines[i];
        0 === line[1] && 0 === measureText(line[0], font, 0) || (line[1] -= letterSpacing);
    }
    if (effectiveLineAmount > 0) {
        effectiveMaxWidth = lines[0][1];
        for (let i = 1; i < effectiveLineAmount; i++) effectiveMaxWidth = Math.max(effectiveMaxWidth, lines[i][1]);
    }
    if ("left" !== textAlign) for (let i = 0; i < effectiveLineAmount; i++) {
        const line = lines[i], w = line[1];
        line[3] = "right" === textAlign ? effectiveMaxWidth - w : (effectiveMaxWidth - w) / 2;
    }
    const effectiveMaxHeight = effectiveLineAmount * lineHeightPx;
    let firstBaselineY;
    firstBaselineY = "cap" === baselineMode ? .5 * (lineHeightPx + metrics.capHeight) : "x" === baselineMode ? .5 * (lineHeightPx + metrics.xHeight) : "linebox" === baselineMode ? .5 * (lineHeightPx - bareLineHeight) + metrics.ascender : .5 * (lineHeightPx + .5 * (metrics.capHeight + metrics.xHeight));
    for (let i = 0; i < effectiveLineAmount; i++) lines[i][4] = firstBaselineY + lineHeightPx * i;
    return [ lines, wrapped[1], wrapped[2], bareLineHeight, lineHeightPx, effectiveMaxWidth, effectiveMaxHeight ];
}

var separators = [];

function wrapRange(measureText, measureRange, text, lineStart, lineEnd, font, maxWidth, letterSpacing, spaceWidth, overflowSuffix, overflowWidth, wordBreak, remainingLines, wrappedLines) {
    const wrapFn = function(wordBreak) {
        return "break-all" === wordBreak ? breakAll : "overflow" === wordBreak ? overflow : breakWord;
    }(wordBreak);
    let next = lineStart, scan = lineStart;
    for (;scan < lineEnd; ) {
        const c = text.charCodeAt(scan);
        if (32 !== c && 8203 !== c) break;
        scan++;
    }
    let found = 0, used = 0, lineFrom = lineStart, lineTo = lineStart, lineText = null, currentLineWidth = 0, pendingFrom = -1, pendingTo = 0, pendingWidth = 0, pendingMeasured = !1;
    for (;(-1 !== pendingFrom || -1 !== next) && remainingLines > 0; ) {
        let wordFrom, wordTo, wordWidth;
        if (-1 !== pendingFrom) wordFrom = pendingFrom, wordTo = pendingTo, pendingFrom = -1, 
        wordWidth = !0 === pendingMeasured ? pendingWidth : measureRange(text, wordFrom, wordTo, font, letterSpacing); else {
            for (wordFrom = next, wordTo = scan; wordTo < lineEnd; ) {
                const c = text.charCodeAt(wordTo);
                if (32 === c || 8203 === c) break;
                wordTo++;
            }
            if (wordTo === lineEnd) next = -1; else {
                let sepTo = wordTo + 1;
                for (;sepTo < lineEnd; ) {
                    const c = text.charCodeAt(sepTo);
                    if (32 !== c && 8203 !== c) break;
                    sepTo++;
                }
                separators[2 * found] = wordTo, separators[2 * found + 1] = sepTo, found++, next = sepTo, 
                scan = sepTo;
            }
            wordWidth = measureRange(text, wordFrom, wordTo, font, letterSpacing);
        }
        if (0 === currentLineWidth) {
            if (wordWidth > maxWidth == !1) {
                wordWidth + spaceWidth >= maxWidth ? (remainingLines--, wrappedLines.push([ text.substring(wordFrom, wordTo), wordWidth, !1, 0, 0 ])) : (lineFrom = wordFrom, 
                lineTo = wordTo, lineText = null, currentLineWidth = wordWidth);
                continue;
            }
            const isLastLine = 0 === --remainingLines, word = text.substring(wordFrom, wordTo), cut = !0 === isLastLine ? truncateWord(measureText, word, wordWidth, maxWidth, font, letterSpacing, overflowSuffix, overflowWidth) : splitWord(measureText, word, wordWidth, maxWidth, font, letterSpacing);
            let head = cut[0], headWidth = cut[2], truncated = isLastLine;
            const rest = cut[1].length;
            rest > 0 && head.length > 0 ? (pendingFrom = wordTo - rest, pendingTo = wordTo, 
            pendingMeasured = !1) : rest > 0 && (remainingLines = 0, truncated = !0, head = overflowSuffix.length > 0 ? overflowSuffix : cut[1].charAt(0), 
            headWidth = overflowSuffix.length > 0 ? overflowWidth : measureText(head, font, letterSpacing)), 
            wrappedLines.push([ head, headWidth, truncated, 0, 0 ]);
            continue;
        }
        let sepFrom = 0, sepTo = 0;
        used < found && (sepFrom = separators[2 * used], sepTo = separators[2 * used + 1]), 
        used++;
        const isSpace = sepTo - sepFrom === 1 && 32 === text.charCodeAt(sepFrom), effectiveSpaceWidth = !0 === isSpace ? spaceWidth : sepTo > sepFrom ? measureRange(text, sepFrom, sepTo, font, letterSpacing) : 0, totalWidth = currentLineWidth + effectiveSpaceWidth + wordWidth;
        if (totalWidth <= maxWidth) {
            if (null === lineText && effectiveSpaceWidth > 0 && sepFrom === lineTo && sepTo === wordFrom ? lineTo = wordTo : lineText = (null === lineText ? text.substring(lineFrom, lineTo) : lineText) + (effectiveSpaceWidth > 0 ? text.substring(sepFrom, sepTo) : "") + text.substring(wordFrom, wordTo), 
            currentLineWidth = totalWidth, totalWidth < maxWidth) continue;
            remainingLines--, wrappedLines.push([ null === lineText ? text.substring(lineFrom, lineTo) : lineText, currentLineWidth, !1, 0, 0 ]), 
            lineText = "", currentLineWidth = 0;
            continue;
        }
        remainingLines--;
        const wrapped = wrapFn(measureText, text.substring(wordFrom, wordTo), wordWidth, font, letterSpacing, wrappedLines, null === lineText ? text.substring(lineFrom, lineTo) : lineText, currentLineWidth, remainingLines, "", maxWidth, !0 === isSpace ? " " : text.substring(sepFrom, sepTo), spaceWidth, overflowSuffix, overflowWidth);
        lineText = wrapped[0], currentLineWidth = wrapped[1];
        const rest = wrapped[2].length;
        rest > 0 && remainingLines > 0 && (pendingFrom = wordTo - rest, pendingTo = wordTo, 
        pendingMeasured = rest === wordTo - wordFrom, pendingWidth = wordWidth);
    }
    return currentLineWidth > 0 && remainingLines > 0 && wrappedLines.push([ null === lineText ? text.substring(lineFrom, lineTo) : lineText, currentLineWidth, !1, 0, 0 ]), 
    remainingLines;
}

function overflow(measureText, word, wordWidth, font, letterSpacing, wrappedLines, currentLine, currentLineWidth, remainingLines, remainingWord, maxWidth, space, spaceWidth, overflowSuffix, overflowWidth) {
    return currentLine += space + word, currentLineWidth += spaceWidth + wordWidth, 
    0 === remainingLines && (currentLine += overflowSuffix, currentLineWidth += overflowWidth), 
    wrappedLines.push([ currentLine, currentLineWidth, !0, 0, 0 ]), [ "", 0, "" ];
}

function breakWord(measureText, word, wordWidth, font, letterSpacing, wrappedLines, currentLine, currentLineWidth, remainingLines, remainingWord, maxWidth, space, spaceWidth, overflowSuffix, overflowWidth) {
    if (remainingWord = word, 0 === remainingLines) {
        const truncated = truncateLineEnd(measureText, font, letterSpacing, currentLine, currentLineWidth, remainingWord, maxWidth, overflowSuffix, overflowWidth);
        currentLine = truncated[0], currentLineWidth = truncated[1], remainingWord = truncated[2], 
        wrappedLines.push([ currentLine, currentLineWidth, !0, 0, 0 ]);
    } else wrappedLines.push([ currentLine, currentLineWidth, !1, 0, 0 ]), currentLine = "", 
    currentLineWidth = 0;
    return [ currentLine, currentLineWidth, remainingWord ];
}

function breakAll(measureText, word, wordWidth, font, letterSpacing, wrappedLines, currentLine, currentLineWidth, remainingLines, remainingWord, maxWidth, space, spaceWidth, overflowSuffix, overflowWidth) {
    let remainingSpace = maxWidth - currentLineWidth;
    currentLineWidth > 0 && (remainingSpace -= spaceWidth);
    const truncate = 0 === remainingLines, cut = truncate ? truncateWord(measureText, word, wordWidth, remainingSpace, font, letterSpacing, overflowSuffix, overflowWidth) : splitWord(measureText, word, wordWidth, remainingSpace, font, letterSpacing);
    return currentLine += space + cut[0], currentLineWidth += spaceWidth + cut[2], wrappedLines.push([ currentLine, currentLineWidth, truncate, 0, 0 ]), 
    [ "", 0, cut[1] ];
}

function truncateLineEnd(measureText, font, letterSpacing, currentLine, currentLineWidth, remainingWord, maxWidth, overflowSuffix, overflowWidth) {
    if (currentLineWidth + overflowWidth <= maxWidth) return [ currentLine += overflowSuffix, currentLineWidth += overflowWidth, remainingWord = "" ];
    let truncated = !1;
    for (let i = currentLine.length - 1; i > 0; i--) {
        if ((currentLineWidth -= measureText(currentLine.charAt(i), font, letterSpacing)) + overflowWidth <= maxWidth) {
            currentLineWidth += overflowWidth, remainingWord = (currentLine = currentLine.substring(0, i) + overflowSuffix).substring(i) + " " + remainingWord, 
            truncated = !0;
            break;
        }
    }
    return !1 === truncated && (currentLineWidth = overflowWidth, remainingWord = currentLine = overflowSuffix), 
    [ currentLine, currentLineWidth, remainingWord ];
}

function truncateWord(measureText, word, wordWidth, maxWidth, font, letterSpacing, overflowSuffix, overflowWidth) {
    const targetWidth = maxWidth - overflowWidth;
    if (targetWidth <= 0) return [ "", word, 0 ];
    if (wordWidth - targetWidth < wordWidth / 2 == !1) {
        let currentWidth = wordWidth;
        for (let i = word.length - 1; i > 0; i--) {
            if (currentWidth -= measureText(word.charAt(i), font, letterSpacing), currentWidth <= targetWidth) {
                const remainingWord = word.substring(i);
                return [ word.substring(0, i) + overflowSuffix, remainingWord, currentWidth + overflowWidth ];
            }
        }
        return [ overflowSuffix, word, overflowWidth ];
    }
    let currentWidth = 0;
    for (let i = 0; i < word.length; i++) {
        const charWidth = measureText(word.charAt(i), font, letterSpacing);
        if (currentWidth + charWidth > targetWidth) {
            const remainingWord = word.substring(i);
            return [ word.substring(0, i) + overflowSuffix, remainingWord, currentWidth + overflowWidth ];
        }
        currentWidth += charWidth;
    }
    return [ word + overflowSuffix, "", wordWidth + overflowWidth ];
}

function splitWord(measureText, word, wordWidth, maxWidth, font, letterSpacing) {
    if (maxWidth <= 0) return [ "", word, 0 ];
    if (wordWidth - maxWidth < wordWidth / 2 == !1) {
        let currentWidth = wordWidth;
        for (let i = word.length - 1; i > 0; i--) {
            if (currentWidth -= measureText(word.charAt(i), font, letterSpacing), currentWidth <= maxWidth) {
                const remainingWord = word.substring(i);
                return [ word.substring(0, i), remainingWord, currentWidth ];
            }
        }
        return [ "", word, 0 ];
    }
    let currentWidth = 0;
    for (let i = 0; i < word.length; i++) {
        const charWidth = measureText(word.charAt(i), font, letterSpacing);
        if (currentWidth + charWidth > maxWidth) {
            const remainingWord = word.substring(i);
            return [ word.substring(0, i), remainingWord, currentWidth ];
        }
        currentWidth += charWidth;
    }
    return [ word, "", wordWidth ];
}

function layoutText(props, font, baselineMode) {
    const data = font.data, fontScale = props.fontSize / data.info.size;
    if (0 === props.text.length) {
        const empty = new ArrayBuffer(0);
        return {
            f32: new Float32Array(empty),
            u32: new Uint32Array(empty),
            glyphCount: 0,
            width: 0,
            height: 0,
            fontScale: fontScale,
            lineHeight: 0,
            distanceRange: fontScale * data.distanceField.distanceRange
        };
    }
    const atlasBase = data.common.base, letterSpacing = props.letterSpacing / fontScale, layout = layoutLines(measureText, measureRange, function(font, fontSize) {
        const sizes = font.sizes;
        let m = sizes.get(fontSize);
        return void 0 === m && (sizes.size >= 64 && sizes.delete(sizes.keys().next().value), 
        m = function(metrics, fontSize) {
            const scale = fontSize / metrics.unitsPerEm, capHeight = void 0 !== metrics.capHeight ? metrics.capHeight : .7 * metrics.ascender, xHeight = void 0 !== metrics.xHeight ? metrics.xHeight : .5 * metrics.ascender;
            return {
                ascender: metrics.ascender * scale,
                descender: metrics.descender * scale,
                lineGap: metrics.lineGap * scale,
                capHeight: capHeight * scale,
                xHeight: xHeight * scale
            };
        }(font.metrics, fontSize), sizes.set(fontSize, m)), m;
    }(font, props.fontSize), props.text, props.textAlign, font, props.lineHeight, props.overflowSuffix, props.wordBreak, letterSpacing, props.maxLines, props.maxWidth / fontScale, props.maxHeight, baselineMode), lines = layout[0];
    let maxGlyphs = 0;
    for (let i = 0; i < lines.length; i++) maxGlyphs += lines[i][0].length;
    const buffer = new ArrayBuffer(8 * maxGlyphs * 4), f32 = new Float32Array(buffer), u32 = new Uint32Array(buffer), pages = font.pages, fallback = font.fallback, kernAmounts = font.kernAmounts;
    let o = 0, glyphCount = 0;
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i], textLine = line[0], n = textLine.length;
        let prev = -1, x = line[3];
        const baseline = line[4] / fontScale;
        for (let j = 0; j < n; j++) {
            let glyph, code = textLine.charCodeAt(j);
            if (code >= 55296 && code <= 56319 && j + 1 < n) {
                const lo = textLine.charCodeAt(j + 1);
                lo >= 56320 && lo <= 57343 && (code = 1024 * (code - 55296) + (lo - 56320) + 65536);
            }
            if (code > 65535) j++, glyph = astralOf(font, code); else {
                if (code >= 173 && (8203 === code || !0 === isInvisible(code))) continue;
                glyph = pages[code >> 8][255 & code];
            }
            if (null !== glyph || (glyph = fallback, null !== glyph)) {
                if (-1 !== prev) {
                    const row = glyph.kern;
                    if (null !== row) {
                        const pair = row[prev];
                        0 !== pair && (x += kernAmounts[pair]);
                    }
                }
                0 !== glyph.width && 0 !== glyph.height ? (f32[o] = x + glyph.xoffset, f32[o + 1] = baseline + glyph.yoffset - atlasBase, 
                f32[o + 2] = glyph.width, f32[o + 3] = glyph.height, u32[o + 4] = glyph.uvTopLeft, 
                u32[o + 5] = glyph.uvTopRight, u32[o + 6] = glyph.uvBottomLeft, u32[o + 7] = glyph.uvBottomRight, 
                o += 8, glyphCount++, x += glyph.xadvance + letterSpacing, prev = glyph.kernColumn) : (x += glyph.xadvance + letterSpacing, 
                prev = glyph.kernColumn);
            }
        }
    }
    return {
        f32: f32,
        u32: u32,
        glyphCount: glyphCount,
        width: layout[5] * fontScale,
        height: layout[6],
        fontScale: fontScale,
        lineHeight: layout[4],
        distanceRange: fontScale * data.distanceField.distanceRange
    };
}

var LayoutEntry = class {
    constructor(font, p, layout, next, stamp) {
        this.font = font, this.text = p.text, this.fontSize = p.fontSize, this.fontStyle = p.fontStyle, 
        this.letterSpacing = p.letterSpacing, this.lineHeight = p.lineHeight, this.maxWidth = p.maxWidth, 
        this.maxHeight = p.maxHeight, this.maxLines = p.maxLines, this.textAlign = p.textAlign, 
        this.wordBreak = p.wordBreak, this.overflowSuffix = p.overflowSuffix, this.layout = layout, 
        this.next = next, this.stamp = stamp;
    }
}, LayoutCache = class {
    constructor(max) {
        this.fonts = new Map, this.entries = [], this.clock = 0, this.max = max;
    }
    get size() {
        return this.entries.length;
    }
    get(font, p) {
        const texts = this.fonts.get(font);
        if (void 0 === texts) return;
        let e = texts.get(p.text);
        for (;null != e; ) {
            if (e.fontSize === p.fontSize && e.maxWidth === p.maxWidth && e.maxLines === p.maxLines && e.maxHeight === p.maxHeight && e.lineHeight === p.lineHeight && e.letterSpacing === p.letterSpacing && e.textAlign === p.textAlign && e.wordBreak === p.wordBreak && e.overflowSuffix === p.overflowSuffix && e.fontStyle === p.fontStyle) return e.stamp = ++this.clock, 
            e.layout;
            e = e.next;
        }
    }
    set(font, p, layout) {
        const fonts = this.fonts;
        let texts = fonts.get(font);
        void 0 === texts && (texts = new Map, fonts.set(font, texts));
        const text = p.text, head = texts.get(text), e = new LayoutEntry(font, p, layout, void 0 === head ? null : head, ++this.clock);
        texts.set(text, e), this.entries.push(e), this.trim();
    }
    trim() {
        const max = this.max > 0 ? this.max : 0;
        for (;this.entries.length > max; ) this.evictOldest();
    }
    evictOldest() {
        const entries = this.entries, last = entries.length - 1;
        let oldest = 0, stamp = entries[0].stamp;
        for (let i = 1; i <= last; i++) {
            const s = entries[i].stamp;
            s < stamp && (stamp = s, oldest = i);
        }
        const e = entries[oldest];
        entries[oldest] = entries[last], entries.pop();
        const fonts = this.fonts, texts = fonts.get(e.font), text = e.text;
        let prev = texts.get(text);
        if (prev === e) return null !== e.next ? void texts.set(text, e.next) : (texts.delete(text), 
        void (0 === texts.size && fonts.delete(e.font)));
        for (;prev.next !== e; ) prev = prev.next;
        prev.next = e.next;
    }
}, TextNodes = class {
    constructor(nodes, fonts, loadedEvents, events, cacheSize, baselineMode, idleLayouts) {
        this.waiting = new Map, this.forced = [], this.nodes = nodes, this.fonts = fonts, 
        this.loadedEvents = loadedEvents, this.events = events, this.cache = new LayoutCache(cacheSize), 
        this.baselineMode = baselineMode, this.idleLayouts = idleLayouts, fonts.onChange = font => this.fontChanged(font);
    }
    layoutText(id) {
        const s = this.nodes, t = s.texts[id], name = t.fontFamily;
        null !== t.waiting && t.waiting !== name && this.unpark(id, t);
        const font = this.fonts.get(name);
        if (void 0 === font || null === font.font) return t.layout = null, t.font = null, 
        s.u32[32 * id + 1] = -33554433 & s.u32[32 * id + 1], this.park(id, t, name), 0;
        let raised = 0, layout = t.layout;
        !0 !== t.stale && null !== layout && t.font === font || (layout = this.lay(id, t, font, font.font), 
        raised = s.applySizeInVisit(id, layout.width, layout.height)), raised |= this.place(id, t, layout);
        const state = s.u32[32 * id + 1];
        return !1 === font.ready ? (s.u32[32 * id + 1] = -33554433 & state, this.park(id, t, name), 
        raised) : (s.u32[32 * id + 1] = layout.glyphCount > 0 ? 33554432 | state : -33554433 & state, 
        raised);
    }
    measure(id) {
        const s = this.nodes, t = s.texts[id], font = this.fonts.get(t.fontFamily);
        if (void 0 === font || null === font.font) return !1;
        if (!1 === t.stale && null !== t.layout && t.font === font) return !0;
        const layout = this.lay(id, t, font, font.font);
        return s.applySize(id, layout.width, layout.height), s.markDirty(id, 256), !0;
    }
    lay(id, t, font, sdf) {
        t.stale = !1, t.font = font;
        const layout = this.cached(font, sdf, t);
        t.layout = layout;
        const node = this.nodes.handles[id];
        return !0 === node.hasListener("loaded") && this.loadedEvents.queue(node, "loaded", {
            type: "text",
            dimensions: {
                w: layout.width,
                h: layout.height
            }
        }), layout;
    }
    measureAhead(t) {
        const font = this.fonts.get(t.fontFamily);
        return void 0 === font || null === font.font ? null : this.cached(font, font.font, t);
    }
    layoutAhead() {
        const budget = this.idleLayouts;
        if (budget <= 0) return 0;
        const s = this.nodes, u32 = s.u32, texts = s.texts, cache = this.cache;
        let made = 0;
        for (let id = 0; id < texts.length && made < budget; id++) {
            const t = texts[id];
            if (null === t || !(256 & u32[32 * id + 0])) continue;
            const font = this.fonts.get(t.fontFamily);
            void 0 !== font && null !== font.font && (!1 === t.stale && null !== t.layout && t.font === font || void 0 === cache.get(font.id, t) && (cache.set(font.id, t, layoutText(t, font.font, this.baselineMode)), 
            made++));
        }
        return made;
    }
    cached(font, sdf, t) {
        const cache = this.cache;
        let layout = cache.get(font.id, t);
        return void 0 === layout && (layout = layoutText(t, sdf, this.baselineMode), cache.set(font.id, t, layout)), 
        layout;
    }
    drainForced() {
        const s = this.nodes, forced = this.forced;
        for (let i = 0; i < forced.length; i++) {
            const id = forced[i], d = s.u32[32 * id + 0];
            if (!(256 & d)) continue;
            s.u32[32 * id + 0] = -257 & d | 64;
            const raised = this.layoutText(id);
            0 !== raised && s.markDirty(id, raised);
        }
    }
    force(id, on) {
        const t = this.nodes.texts[id];
        if (t.forced === on) return;
        t.forced = on;
        const forced = this.forced;
        if (!0 === on) return void forced.push(id);
        const i = forced.indexOf(id);
        forced[i] = forced[forced.length - 1], forced.pop();
    }
    release(id) {
        const t = this.nodes.texts[id];
        null !== t && (null !== t.waiting && this.unpark(id, t), !0 === t.forced && this.force(id, !1));
    }
    trim() {
        this.cache.trim();
    }
    place(id, t, layout) {
        const s = this.nodes, w = s.f64[32 * id + 0], h = s.f64[32 * id + 1], contain = t.contain, maxWidth = t.maxWidth, maxHeight = t.maxHeight, inWidth = ("width" === contain || "both" === contain) && maxWidth > 0, boxW = !0 === inWidth ? maxWidth : w, boxH = !0 === (("height" === contain || "both" === contain) && maxHeight > 0) ? maxHeight : h;
        let x = 0;
        !0 === inWidth && ("right" === t.textAlign ? x = maxWidth - w : "center" === t.textAlign && (x = .5 * (maxWidth - w)));
        let y = 0;
        const slack = (maxHeight > 0 ? maxHeight : h) - layout.height;
        slack > 0 && ("bottom" === t.verticalAlign ? y = slack : "middle" === t.verticalAlign && (y = .5 * slack)), 
        y += t.offsetY;
        const boxed = !1 === same(boxW, w) || !1 === same(boxH, h) || !1 === same(x, 0) || !1 === same(y, 0), state = s.u32[32 * id + 1];
        return boxed === !!(67108864 & state) && (!1 === boxed || !0 === same(t.boxW, boxW) && !0 === same(t.boxH, boxH) && !0 === same(t.boxX, x) && !0 === same(t.boxY, y)) ? 0 : (t.boxW = boxW, 
        t.boxH = boxH, t.boxX = x, t.boxY = y, s.u32[32 * id + 1] = !0 === boxed ? 67108864 | state : -67108865 & state, 
        1);
    }
    park(id, t, name) {
        if (t.waiting === name) return;
        let list = this.waiting.get(name);
        void 0 === list && (list = [], this.waiting.set(name, list)), list.push(id), t.waiting = name;
    }
    unpark(id, t) {
        const name = t.waiting;
        t.waiting = null;
        const list = this.waiting.get(name);
        if (void 0 === list) return;
        const i = list.indexOf(id);
        -1 !== i && (list[i] = list[list.length - 1], list.pop()), 0 === list.length && this.waiting.delete(name);
    }
    fontChanged(font) {
        const s = this.nodes, error = font.error, ready = font.ready, names = font.names;
        for (let i = 0; i < names.length; i++) {
            const name = names[i], list = this.waiting.get(name);
            if (void 0 !== list) if (null === error) {
                !0 === ready && this.waiting.delete(name);
                for (let j = 0; j < list.length; j++) {
                    const id = list[j];
                    !0 === ready && (s.texts[id].waiting = null), s.markDirty(id, 256);
                }
            } else this.tellFailed(list, error, names);
        }
    }
    tellFailed(list, error, names) {
        const s = this.nodes;
        for (let i = 0; i < list.length; i++) {
            const id = list[i], node = s.handles[id];
            !1 !== node.hasListener("failed") && -1 !== names.indexOf(s.texts[id].fontFamily) && (this.events.queue(node, "failed", {
                type: "text",
                error: error
            }), s.markDirty(id, 0));
        }
    }
}, sdfVertex = viewport => PRECISION + "attribute vec2 a_position;attribute highp vec2 a_textureTexels;attribute vec4 a_color;attribute float a_extra;\n" + viewport + "varying vec4 v_color;varying vec2 v_textureCoords;varying float v_range;\nvoid main(){v_color=a_color;v_textureCoords=a_textureTexels*(1.0/32768.0);v_range=a_extra*PIXEL_RATIO;gl_Position=pxToClip(a_position);}", SDF_FRAGMENT = PRECISION + "uniform sampler2D u_texture;varying vec4 v_color;varying vec2 v_textureCoords;varying float v_range;\nfloat median(float r,float g,float b){return clamp(b,min(r,g),max(r,g));}\nvoid main(){vec3 s=texture2D(u_texture,v_textureCoords).rgb;float d=v_range*(median(s.r,s.g,s.b)-0.5);gl_FragColor=v_color*clamp(d+0.5,0.0,1.0);}", TextEmitter = class {
    constructor(nodes, stream, ops, shaders, flush) {
        this.program = -1, this.warmed = !1, this.nodes = nodes, this.stream = stream, this.ops = ops, 
        this.shaders = shaders, this.flush = flush;
    }
    warm() {
        return !0 !== this.warmed && -1 === this.program && (this.warmed = !0, this.program = this.shaders.program(sdfVertex(this.shaders.host.viewport), SDF_FRAGMENT, null, "Sdf"), 
        !0);
    }
    emitText(id) {
        let program = this.program;
        if (-1 === program && (program = this.shaders.program(sdfVertex(this.shaders.host.viewport), SDF_FRAGMENT, "The SDF text program failed to compile; text does not draw", "Sdf"), 
        this.program = program), 0 === program) return;
        const s = this.nodes, o = 32 * id, fo = 32 * id, t = s.texts[id], layout = t.layout, texture = t.font.rec, clip = s.i32[o + 6], color = 0 === s.u32[o + 15] ? premultiplyColorABGR(4294967295, s.f64[fo + 4]) : s.u32[o + 7], extra = layout.distanceRange, fs = layout.fontScale, tx = s.f64[fo + 2], ty = s.f64[fo + 3], translate = !!(2 & s.u32[o + 1]), m0 = s.f64[fo + 6] * fs, m1 = s.f64[fo + 9] * fs, m3 = s.f64[fo + 8] * fs, m4 = s.f64[fo + 7] * fs, g = layout.f32, gu = layout.u32, n = layout.glyphCount, stream = this.stream, ops = this.ops, f = stream.f32, u = stream.u32, end = f.length;
        let w = stream.cursor, first = stream.quadCount, run = 0;
        for (let i = 0; i < n; i++) {
            w >= end && (stream.cursor = w, run > 0 && ops.addRun(program, null, texture, clip, id, first, run), 
            this.flush(), w = 0, first = 0, run = 0);
            const o = 8 * i, gx1 = g[o], gy1 = g[o + 1], gx2 = gx1 + g[o + 2], gy2 = gy1 + g[o + 3];
            let x0, y0, x1, y1, x2, y2, x3, y3;
            !0 === translate ? (x0 = fs * gx1 + tx, x1 = fs * gx2 + tx, y0 = fs * gy1 + ty, 
            y2 = fs * gy2 + ty, x2 = x0, x3 = x1, y1 = y0, y3 = y2) : (x0 = m0 * gx1 + m3 * gy1 + tx, 
            y0 = m1 * gx1 + m4 * gy1 + ty, x1 = m0 * gx2 + m3 * gy1 + tx, y1 = m1 * gx2 + m4 * gy1 + ty, 
            x2 = m0 * gx1 + m3 * gy2 + tx, y2 = m1 * gx1 + m4 * gy2 + ty, x3 = m0 * gx2 + m3 * gy2 + tx, 
            y3 = m1 * gx2 + m4 * gy2 + ty), f[w] = x0, f[w + 1] = y0, u[w + 2] = gu[o + 4], 
            u[w + 3] = color, f[w + 4] = extra, f[w + 5] = x1, f[w + 6] = y1, u[w + 7] = gu[o + 5], 
            u[w + 8] = color, f[w + 9] = extra, f[w + 10] = x2, f[w + 11] = y2, u[w + 12] = gu[o + 6], 
            u[w + 13] = color, f[w + 14] = extra, f[w + 15] = x3, f[w + 16] = y3, u[w + 17] = gu[o + 7], 
            u[w + 18] = color, f[w + 19] = extra, w += 20, run++;
        }
        stream.cursor = w, run > 0 && ops.addRun(program, null, texture, clip, id, first, run);
    }
}, CORE_DEFAULTS = {
    appWidth: 1920,
    appHeight: 1080,
    boundsMargin: [ 100, 100, 450, 50 ],
    deviceLogicalPixelRatio: 1,
    devicePhysicalPixelRatio: 1,
    quadBufferSize: 16383,
    textLayoutCacheSize: 250,
    idleTextLayouts: 8,
    textBaselineMode: "optical"
};

function resolveQuadBufferSize(value) {
    const quads = Math.floor(null != value ? value : CORE_DEFAULTS.quadBufferSize);
    return quads >= 1 == !1 ? 1 : quads > 16383 ? 16383 : quads;
}

function noop$1() {}

var RendererCore = class extends EventEmitter {
    constructor(settings = {}) {
        var _settings$appWidth, _settings$appHeight, _settings$boundsMargi, _settings$deviceLogic, _settings$devicePhysi, _settings$textLayoutC, _settings$idleTextLay, _settings$textBaselin;
        super(), this.elapsedTime = 0, this.deltaTime = 0, this.lastFrameTime = 0, this.currentFrameTime = 0, 
        this.frameRequested = !1, this.updateIterations = 0, this.flushes = 0, this.flushedOps = 0, 
        this.onFlush = null, this.postUpdate = null, this.renderRequested = !1;
        const resolved = {
            appWidth: null !== (_settings$appWidth = settings.appWidth) && void 0 !== _settings$appWidth ? _settings$appWidth : CORE_DEFAULTS.appWidth,
            appHeight: null !== (_settings$appHeight = settings.appHeight) && void 0 !== _settings$appHeight ? _settings$appHeight : CORE_DEFAULTS.appHeight,
            boundsMargin: normalizeBoundsMargin$1(null !== (_settings$boundsMargi = settings.boundsMargin) && void 0 !== _settings$boundsMargi ? _settings$boundsMargi : CORE_DEFAULTS.boundsMargin),
            deviceLogicalPixelRatio: null !== (_settings$deviceLogic = settings.deviceLogicalPixelRatio) && void 0 !== _settings$deviceLogic ? _settings$deviceLogic : CORE_DEFAULTS.deviceLogicalPixelRatio,
            devicePhysicalPixelRatio: null !== (_settings$devicePhysi = settings.devicePhysicalPixelRatio) && void 0 !== _settings$devicePhysi ? _settings$devicePhysi : CORE_DEFAULTS.devicePhysicalPixelRatio,
            quadBufferSize: resolveQuadBufferSize(settings.quadBufferSize),
            textLayoutCacheSize: null !== (_settings$textLayoutC = settings.textLayoutCacheSize) && void 0 !== _settings$textLayoutC ? _settings$textLayoutC : CORE_DEFAULTS.textLayoutCacheSize,
            idleTextLayouts: null !== (_settings$idleTextLay = settings.idleTextLayouts) && void 0 !== _settings$idleTextLay ? _settings$idleTextLay : CORE_DEFAULTS.idleTextLayouts,
            textBaselineMode: null !== (_settings$textBaselin = settings.textBaselineMode) && void 0 !== _settings$textBaselin ? _settings$textBaselin : CORE_DEFAULTS.textBaselineMode
        };
        this.settings = resolved;
        const pixelRatio = resolved.deviceLogicalPixelRatio * resolved.devicePhysicalPixelRatio;
        this.view = {
            w: resolved.appWidth,
            h: resolved.appHeight,
            margin: normalizeBoundsMargin$1(resolved.boundsMargin),
            pixelRatio: pixelRatio,
            canvasH: Math.round(resolved.appHeight * pixelRatio)
        }, this.nodes = new NodeStore, this.clips = new ClipStore, this.animationManager = new AnimationManager, 
        this.stream = new VertexStream(resolved.quadBufferSize), this.ops = new OpList, 
        this.hooks = {
            resolveTexture() {},
            packShader() {},
            layoutText: () => -1,
            emitText() {},
            onVisibility() {},
            onHidden: () => !1,
            onShown() {},
            perOpMatch: () => !0,
            onRenderable() {}
        }, this.events = new FrameEvents;
        const textures = new TextureStore(this.nodes), textureNodes = new TextureNodes(textures, this.events);
        this.textures = textures, this.textureNodes = textureNodes, textures.requestFrame = () => this.requestRender(), 
        this.hooks.resolveTexture = id => textureNodes.resolveTexture(id), this.hooks.onVisibility = (id, prev, next) => textureNodes.onVisibility(id, prev, next), 
        this.hooks.onHidden = id => textureNodes.onHidden(id), this.hooks.onShown = id => textureNodes.onShown(id), 
        !0 === EMIT_BOUNDS_EVENTS && function(hooks, nodes, events) {
            const visibility = hooks.onVisibility;
            hooks.onVisibility = (id, prev, next) => {
                let name;
                if (visibility(id, prev, next), 3 === next) name = "inViewport"; else {
                    if (3 !== prev) return;
                    name = "outOfViewport";
                }
                const node = nodes.handles[id];
                if (null === node || !1 === node.hasListener(name)) return;
                const payload = {
                    previous: renderStateOf(prev),
                    current: renderStateOf(next)
                };
                events.queue(node, name, payload);
            };
            const tell = (id, renderable) => {
                const node = nodes.handles[id];
                if (null === node || !1 === node.hasListener("renderable")) return;
                const payload = {
                    type: "renderable",
                    isRenderable: renderable
                };
                events.queue(node, "renderable", payload);
            };
            hooks.onRenderable = tell;
            const hidden = hooks.onHidden;
            hooks.onHidden = id => {
                const wants = hidden(id), state = nodes.u32[32 * id + 1];
                return 8 & state ? (tell(id, !1), nodes.u32[32 * id + 1] = -9 & state, !0) : wants;
            };
        }(this.hooks, this.nodes, this.events);
        const shaders = new ShaderRegistry(this.nodes, this, pixelRatio, function(viewport) {
            const masks = [ 0 ];
            return {
                viewport: viewport,
                register(vertex, fragment) {
                    let mask = 0;
                    for (let i = 0; i < SYSTEM_UNIFORMS.length; i++) {
                        const name = SYSTEM_UNIFORMS[i];
                        -1 === vertex.indexOf(name) && -1 === fragment.indexOf(name) || (mask |= 1 << i);
                    }
                    return masks.push(mask), masks.length - 1;
                },
                systemMask: program => masks[program],
                isLost: () => !1
            };
        }(viewportGlsl(pixelRatio, Math.round(resolved.appWidth * pixelRatio), this.view.canvasH)));
        this.shaders = shaders, this.hooks.packShader = id => {
            textureNodes.onResize(id), shaders.pack(id);
        }, this.hooks.perOpMatch = (id, opNode) => shaders.perOpMatch(id, opNode);
        const fonts = new FontRegistry(textures);
        this.fonts = fonts, this.textEvents = new FrameEvents;
        const textNodes = new TextNodes(this.nodes, fonts, this.textEvents, this.events, resolved.textLayoutCacheSize, resolved.textBaselineMode, resolved.idleTextLayouts);
        this.textNodes = textNodes, this.hooks.layoutText = id => textNodes.layoutText(id), 
        this.scene = new ScenePass(this.nodes, this.clips, this.view, this.stream, this.ops, this.hooks, () => this.flush());
        const emitter = new TextEmitter(this.nodes, this.stream, this.ops, shaders, this.scene.flush);
        this.emitter = emitter, this.hooks.emitText = id => emitter.emitText(id), this.nodes.onDirty = () => {
            this.frameRequested = !0, this.onFrameRequest();
        }, this.animationManager.onActive = () => this.requestRender(), this.root = this.createNodeInternal({
            w: resolved.appWidth,
            h: resolved.appHeight,
            color: 0
        });
    }
    get stage() {
        return this;
    }
    createNodeInternal(props) {
        const node = new Node(this, this.nodes.alloc());
        return function(node, props) {
            void 0 !== props.color && null !== props.color && (node.color = props.color), void 0 !== props.colorLeft && null !== props.colorLeft && (node.colorLeft = props.colorLeft), 
            void 0 !== props.colorRight && null !== props.colorRight && (node.colorRight = props.colorRight), 
            void 0 !== props.colorTop && null !== props.colorTop && (node.colorTop = props.colorTop), 
            void 0 !== props.colorBottom && null !== props.colorBottom && (node.colorBottom = props.colorBottom), 
            void 0 !== props.scale && null !== props.scale && (node.scale = props.scale), void 0 !== props.mount && null !== props.mount && (node.mount = props.mount), 
            void 0 !== props.pivot && null !== props.pivot && (node.pivot = props.pivot);
            const bag = props;
            for (const key in bag) {
                const value = bag[key];
                if (null != value) switch (key) {
                  case "x":
                    node.x = value;
                    break;

                  case "y":
                    node.y = value;
                    break;

                  case "w":
                    node.w = value;
                    break;

                  case "h":
                    node.h = value;
                    break;

                  case "alpha":
                    node.alpha = value;
                    break;

                  case "colorTl":
                    node.colorTl = value;
                    break;

                  case "colorTr":
                    node.colorTr = value;
                    break;

                  case "colorBl":
                    node.colorBl = value;
                    break;

                  case "colorBr":
                    node.colorBr = value;
                    break;

                  case "scaleX":
                    node.scaleX = value;
                    break;

                  case "scaleY":
                    node.scaleY = value;
                    break;

                  case "rotation":
                    node.rotation = value;
                    break;

                  case "mountX":
                    node.mountX = value;
                    break;

                  case "mountY":
                    node.mountY = value;
                    break;

                  case "pivotX":
                    node.pivotX = value;
                    break;

                  case "pivotY":
                    node.pivotY = value;
                    break;

                  case "zIndex":
                    node.zIndex = value;
                    break;

                  case "clipping":
                    node.clipping = value;
                    break;

                  case "ignoreParentAlpha":
                    node.ignoreParentAlpha = value;
                    break;

                  case "placeholderColor":
                    node.placeholderColor = value;
                    break;

                  case "autosize":
                    node.autosize = value;
                    break;

                  case "data":
                    node.data = value;
                    break;

                  case "src":
                  default:
                    break;

                  case "srcX":
                    node.srcX = value;
                    break;

                  case "srcY":
                    node.srcY = value;
                    break;

                  case "srcWidth":
                    node.srcWidth = value;
                    break;

                  case "srcHeight":
                    node.srcHeight = value;
                    break;

                  case "imageType":
                    node.imageType = value;
                    break;

                  case "textureOptions":
                    node.textureOptions = value;
                    break;

                  case "texture":
                    node.texture = value;
                    break;

                  case "shader":
                    node.shader = value;
                    break;

                  case "componentName":
                    node.componentName = value;
                    break;

                  case "componentLocation":
                    node.componentLocation = value;
                }
            }
            void 0 !== props.src && null !== props.src && (node.src = props.src), void 0 !== props.parent && null !== props.parent && (node.parent = props.parent);
        }(node, props), node;
    }
    createNode(props = {}) {
        return this.createNodeInternal(props);
    }
    createTextNode(props = {}) {
        const s = this.nodes, id = s.alloc();
        s.u32[32 * id + 1] = 128, s.texts[id] = new TextState, s.u32[32 * id + 0] = 256 | s.u32[32 * id + 0];
        const node = new TextNode$1(this, id);
        return function(node, props) {
            const t = node.renderer.nodes.texts[node.id];
            void 0 !== props.color && null !== props.color && (node.color = props.color), void 0 !== props.colorLeft && null !== props.colorLeft && (node.colorLeft = props.colorLeft), 
            void 0 !== props.colorRight && null !== props.colorRight && (node.colorRight = props.colorRight), 
            void 0 !== props.colorTop && null !== props.colorTop && (node.colorTop = props.colorTop), 
            void 0 !== props.colorBottom && null !== props.colorBottom && (node.colorBottom = props.colorBottom), 
            void 0 !== props.scale && null !== props.scale && (node.scale = props.scale), void 0 !== props.mount && null !== props.mount && (node.mount = props.mount), 
            void 0 !== props.pivot && null !== props.pivot && (node.pivot = props.pivot);
            const bag = props;
            for (const key in bag) {
                const value = bag[key];
                if (null != value) switch (key) {
                  case "forceLoad":
                    node.forceLoad = !0 === value;
                    break;

                  case "w":
                    setSize(node, 0, value);
                    break;

                  case "h":
                    setSize(node, 1, value);
                    break;

                  case "x":
                    node.x = value;
                    break;

                  case "y":
                    node.y = value;
                    break;

                  case "alpha":
                    node.alpha = value;
                    break;

                  case "colorTl":
                    node.colorTl = value;
                    break;

                  case "colorTr":
                    node.colorTr = value;
                    break;

                  case "colorBl":
                    node.colorBl = value;
                    break;

                  case "colorBr":
                    node.colorBr = value;
                    break;

                  case "scaleX":
                    node.scaleX = value;
                    break;

                  case "scaleY":
                    node.scaleY = value;
                    break;

                  case "rotation":
                    node.rotation = value;
                    break;

                  case "mountX":
                    node.mountX = value;
                    break;

                  case "mountY":
                    node.mountY = value;
                    break;

                  case "pivotX":
                    node.pivotX = value;
                    break;

                  case "pivotY":
                    node.pivotY = value;
                    break;

                  case "zIndex":
                    node.zIndex = value;
                    break;

                  case "clipping":
                    node.clipping = value;
                    break;

                  case "ignoreParentAlpha":
                    node.ignoreParentAlpha = value;
                    break;

                  case "placeholderColor":
                    node.placeholderColor = value;
                    break;

                  case "autosize":
                    node.autosize = value;
                    break;

                  case "data":
                    node.data = value;
                    break;

                  case "srcX":
                    node.srcX = value;
                    break;

                  case "srcY":
                    node.srcY = value;
                    break;

                  case "srcWidth":
                    node.srcWidth = value;
                    break;

                  case "srcHeight":
                    node.srcHeight = value;
                    break;

                  case "imageType":
                    node.imageType = value;
                    break;

                  case "textureOptions":
                    node.textureOptions = value;
                    break;

                  case "texture":
                    node.texture = value;
                    break;

                  case "shader":
                    node.shader = value;
                    break;

                  case "componentName":
                    node.componentName = value;
                    break;

                  case "componentLocation":
                    node.componentLocation = value;
                    break;

                  default:
                    setTextProp(t, key, value);
                }
            }
            void 0 !== props.src && null !== props.src && (node.src = props.src), void 0 !== props.parent && null !== props.parent && (node.parent = props.parent);
        }(node, props), node;
    }
    measureText(props) {
        const layout = this.textNodes.measureAhead(function(props) {
            const t = new TextState, bag = props;
            for (const key in bag) {
                const value = bag[key];
                null != value && setTextProp(t, key, value);
            }
            return t;
        }(props));
        return null === layout ? null : {
            w: layout.width,
            h: layout.height
        };
    }
    loadFont(typeOrOptions, options) {
        return "string" != typeof typeOrOptions ? this.fonts.load(typeOrOptions) : "sdf" === typeOrOptions ? this.fonts.load(options) : Promise.reject(new Error("canvas" === typeOrOptions ? "Canvas fonts are not supported: v2 renders SDF text only" : `Font handler for renderer type '${typeOrOptions}' not found. Available types: sdf`));
    }
    get pendingFonts() {
        return this.fonts.pending;
    }
    destroyNode(node) {
        const isRoot = node === this.root;
        !function(owner, root) {
            const s = owner.nodes;
            if (-1 === root) return;
            const parent = s.i32[32 * root + 3];
            s.unlink(root), -1 !== parent && s.markDirty(parent, 0);
            const reentrant = depth > 0;
            let list = !0 === reentrant ? new Int32Array(256) : scratch;
            depth++;
            let count = 0;
            list[count++] = root;
            let read = 0;
            for (;read < count; ) {
                const id = list[read++];
                let c = s.i32[32 * id + 4];
                for (;-1 !== c; ) {
                    if (count === list.length) {
                        const bigger = new Int32Array(2 * list.length);
                        bigger.set(list), list = bigger, !1 === reentrant && (scratch = list);
                    }
                    list[count++] = c, c = s.next[c];
                }
                const handle = s.handles[id];
                null !== handle && (handle.removeAllListeners(), handle.id = -1);
            }
            for (let i = 0; i < count; i++) {
                const id = list[i];
                void 0 !== owner.releaseNode && owner.releaseNode(id);
                const anims = s.animations[id];
                if (null !== anims) for (const key in anims) anims[key].controller.stop();
                s.free(id);
            }
            depth--;
        }(this, node.id), !0 === isRoot && this.requestRender();
    }
    releaseNode(id) {
        const rec = this.nodes.i32[32 * id + 6];
        0 !== rec && this.clips.owner[rec] === id && this.clips.free(rec), this.textureNodes.release(id), 
        this.shaders.release(id), this.textNodes.release(id);
    }
    registerShaderType(name, type) {
        this.shaders.register(name, type);
    }
    warmNext() {
        return !0 === this.emitter.warm() || !0 === this.shaders.warmNext();
    }
    createShader(name, props) {
        return this.shaders.create(name, props);
    }
    createTexture(type, props) {
        const texture = createTexture(this.textures, type, props);
        return "SubTexture" === type && this.textureNodes.subTextureCreated(texture.id), 
        texture;
    }
    get pendingTextures() {
        return this.textures.pending;
    }
    requestRender() {
        this.frameRequested = !0, this.renderRequested = !0, this.onFrameRequest();
    }
    onFrameRequest() {}
    reprocessUpdates(cb) {
        void 0 !== cb ? this.postUpdate = cb : null === this.postUpdate && (this.postUpdate = noop$1), 
        this.frameRequested = !0, this.onFrameRequest();
    }
    step(dt) {
        this.animationManager.step(dt);
    }
    update() {
        if (!0 === this.root.destroyed) return this.stream.reset(), this.ops.reset(), this.scene.visited = 0, 
        this.scene.updated = 0, this.scene.emitted = 0, this.scene.textEmitted = 0, this.updateIterations = 0, 
        this.flushes = 0, this.flushedOps = 0, void (this.frameRequested = !1);
        let iterations = 0;
        this.flushes = 0, this.flushedOps = 0, this.renderRequested = !1;
        do {
            this.textureNodes.drainPreloads(), this.textNodes.drainForced(), this.stream.reset(), 
            this.ops.reset(), this.scene.run(this.root.id), this.textEvents.flush();
            const cb = this.postUpdate;
            null !== cb && (this.postUpdate = null, cb()), iterations++;
        } while ((this.scene.writesDuringPass > 0 || null !== this.postUpdate) && iterations < 3 && 0 === this.flushes);
        this.updateIterations = iterations, !1 === this.renderRequested && !1 === this.nodes.anyDirty && null === this.postUpdate && (this.frameRequested = !1);
    }
    flush() {
        this.flushes++, this.flushedOps += this.ops.length;
        const handler = this.onFlush;
        null !== handler && handler(this.stream, this.ops), this.stream.reset(), this.ops.reset();
    }
}, DEFAULT_FRAGMENT = PRECISION + "uniform sampler2D u_texture;varying vec4 v_color;varying vec2 v_textureCoords;\nvoid main(){gl_FragColor=v_color*texture2D(u_texture,v_textureCoords);}", ContextSpy = class {
    constructor() {
        this.data = {};
    }
    reset() {
        this.data = {};
    }
    wrap(target) {
        const source = target, out = {};
        for (const key in source) {
            const value = source[key];
            out[key] = "function" == typeof value ? this.counted(key, target, value) : value;
        }
        return out;
    }
    counted(name, target, fn) {
        return (...args) => {
            var _data$name;
            const data = this.data;
            data[name] = (null !== (_data$name = data[name]) && void 0 !== _data$name ? _data$name : 0) + 1;
            const result = fn.apply(target, args);
            return "getExtension" === name && null !== result && "object" == typeof result ? this.wrap(result) : result;
        };
    }
};

var BLOCK_4x4x8 = {
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
}, PVR_TO_GL = {
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
}, ASTC_TO_GL = {
    "4x4": 37808,
    "5x5": 37809,
    "6x6": 37810,
    "8x8": 37811,
    "10x10": 37812,
    "12x12": 37813
}, KTX_IDENTIFIER = [ 171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10 ];

function loadCompressedTexture(platform, url) {
    return platform.fetch(url, "arraybuffer").then(buffer => {
        if (buffer.byteLength < 16) throw new Error(`Failed to load compressed texture from ${url}: file too small (${buffer.byteLength} bytes)`);
        const view = new DataView(buffer), magic = view.getUint32(0, !0);
        let data;
        if (55727696 === magic) data = function(view) {
            const pixelFormat = view.getUint32(8, !0), format = PVR_TO_GL[pixelFormat];
            if (void 0 === format) throw new Error(`Unsupported PVR pixel format: 0x${pixelFormat.toString(16)}`);
            const h = view.getInt32(24, !0), w = view.getInt32(28, !0);
            if (0 === w || 0 === h) throw new Error(`Invalid PVR texture dimensions: ${w}x${h}`);
            const levels = view.getInt32(44, !0);
            if (levels < 1) throw new Error("PVR texture has no mipmap levels");
            const buffer = view.buffer;
            let offset = 52 + view.getUint32(48, !0);
            if (offset > buffer.byteLength) throw new Error("Invalid PVR file: metadata exceeds file size");
            const block = blockInfoMap[format], mipmaps = [];
            for (let i = 0; i < levels; i++) {
                const lw = Math.max(1, w >> i), lh = Math.max(1, h >> i), size = pixelFormat <= 3 ? pvrtcMipSize(lw, lh, pixelFormat <= 1 ? 2 : 4) : Math.ceil(lw / block.width) * Math.ceil(lh / block.height) * block.bytes;
                mipmaps.push(buffer.slice(offset, offset + size)), offset += size;
            }
            return {
                blockInfo: block,
                glInternalFormat: format,
                mipmaps: mipmaps,
                w: w,
                h: h,
                type: "pvr"
            };
        }(view); else if (1554098963 === magic) data = function(view) {
            const blockX = view.getUint8(4), blockY = view.getUint8(5), w = readUint24(view, 7), h = readUint24(view, 10);
            if (0 === w || 0 === h) throw new Error(`Invalid ASTC texture dimensions: ${w}x${h}`);
            const expected = Math.ceil(w / blockX) * Math.ceil(h / blockY) * 16;
            if (expected !== view.byteLength - 16) throw new Error(`Invalid ASTC texture data size: expected ${expected}, got ${view.byteLength - 16}`);
            const format = ASTC_TO_GL[`${blockX}x${blockY}`];
            if (void 0 === format) throw new Error(`Unsupported ASTC block size: ${blockX}x${blockY}`);
            return {
                blockInfo: blockInfoMap[format],
                glInternalFormat: format,
                mipmaps: [ view.buffer.slice(16) ],
                w: w,
                h: h,
                type: "astc"
            };
        }(view); else {
            for (let i = 0; i < KTX_IDENTIFIER.length; i++) if (view.getUint8(i) !== KTX_IDENTIFIER[i]) throw new Error(`Failed to load compressed texture from ${url}: unrecognized format`);
            data = function(view) {
                const endianness = view.getUint32(12, !0), little = 67305985 === endianness;
                if (!1 === little && 16909060 !== endianness) throw new Error("Invalid KTX endianness value");
                const glType = view.getUint32(16, little), glFormat = view.getUint32(24, little);
                if (0 !== glType || 0 !== glFormat) throw new Error(`KTX texture is not compressed (glType: ${glType}, glFormat: ${glFormat})`);
                const format = view.getUint32(28, little);
                if (void 0 === blockInfoMap[format]) throw new Error(`Unsupported KTX compressed texture format: 0x${format.toString(16)}`);
                const w = view.getUint32(36, little), h = view.getUint32(40, little);
                if (0 === w || 0 === h) throw new Error(`Invalid KTX texture dimensions: ${w}x${h}`);
                const levels = view.getUint32(56, little);
                if (0 === levels) throw new Error("KTX texture has no mipmap levels");
                const buffer = view.buffer;
                let offset = 64 + view.getUint32(60, little);
                if (offset > view.byteLength) throw new Error("Invalid KTX file: key/value data exceeds file size");
                const mipmaps = [];
                for (let i = 0; i < levels; i++) {
                    const size = view.getUint32(offset, little);
                    offset += 4, mipmaps.push(buffer.slice(offset, offset + size)), offset += size, 
                    offset % 4 != 0 && (offset += 4 - offset % 4);
                }
                return {
                    blockInfo: blockInfoMap[format],
                    glInternalFormat: format,
                    mipmaps: mipmaps,
                    w: w,
                    h: h,
                    type: "ktx"
                };
            }(view);
        }
        return {
            data: data,
            w: data.w,
            h: data.h,
            premultiply: !1
        };
    });
}

function readUint24(view, offset) {
    return view.getUint8(offset) + (view.getUint8(offset + 1) << 8) + (view.getUint8(offset + 2) << 16);
}

function pvrtcMipSize(w, h, bpp) {
    return Math.max(w, 2 === bpp ? 16 : 8) * Math.max(h, 8) * bpp / 8;
}

var EXT_ASTC = [ "WEBGL_compressed_texture_astc" ], EXT_S3TC = [ "WEBGL_compressed_texture_s3tc" ], EXT_ETC1 = [ "WEBGL_compressed_texture_etc1" ], EXT_ETC = [ "WEBGL_compressed_texture_etc" ], EXT_PVRTC = [ "WEBGL_compressed_texture_pvrtc", "WEBKIT_WEBGL_compressed_texture_pvrtc" ], EXT_NONE = [];

function enableCompressedFormat(ctx, format) {
    const names = function(format) {
        return format >= 37808 && format <= 37845 ? EXT_ASTC : format >= 33776 && format <= 33779 ? EXT_S3TC : 36196 === format ? EXT_ETC1 : format >= 37492 && format <= 37497 ? EXT_ETC : format >= 35840 && format <= 35843 ? EXT_PVRTC : EXT_NONE;
    }(format);
    if (0 === names.length) return !0;
    for (let i = 0; i < names.length; i++) if (null !== ctx.extension(names[i])) return !0;
    return !1;
}

function mipmapped(data) {
    const block = data.blockInfo;
    return data.mipmaps.length > 1 && data.mipmaps.length === function(w, h) {
        if (w & w - 1 || h & h - 1) return 0;
        let levels = 1;
        for (let size = Math.max(w, h); size > 1; size >>= 1) levels++;
        return levels;
    }(data.w, data.h) && ("ktx" !== data.type || data.w % block.width === 0 && data.h % block.height === 0);
}

var GlBackend = class {
    constructor(canvas, settings) {
        var _ctx$parameter;
        this.programs = [], this.onContextLost = null, this.textures = [], this.cleared = !1, 
        this.views = [], this.viewSource = null, this.canvas = canvas;
        const spy = !0 === settings.enableContextSpy ? new ContextSpy : null;
        this.spy = spy;
        const ctx = function(canvas, forceWebGL2, powerPreference, disableVao, spy) {
            const attributes = {
                alpha: !0,
                antialias: !1,
                depth: !1,
                stencil: !1,
                desynchronized: !1,
                powerPreference: powerPreference,
                premultipliedAlpha: !0,
                preserveDrawingBuffer: !1
            };
            let gl = canvas.getContext(!0 === forceWebGL2 ? "webgl2" : "webgl", attributes);
            if (null === gl && (gl = canvas.getContext("experimental-webgl", attributes)), null === gl) throw new Error("Unable to create WebGL context");
            if (!0 === gl.isContextLost()) throw new Error("WebGL context is lost: a canvas whose context was lost cannot host a new Renderer, use a fresh canvas");
            const webgl2 = "function" == typeof gl.createVertexArray;
            return null !== spy && (gl = spy.wrap(gl)), new GlContext(gl, webgl2, disableVao, canvas.width, canvas.height);
        }(canvas, settings.forceWebGL2, settings.powerPreference, settings.disableVertexArrayObject, spy);
        this.ctx = ctx, ctx.clearColor(settings.clearColor), this.maxTextureSize = null !== (_ctx$parameter = ctx.parameter(3379)) && void 0 !== _ctx$parameter ? _ctx$parameter : 0, 
        this.viewport = viewportGlsl(settings.pixelRatio, canvas.width, canvas.height), 
        this.pixelRatio = settings.pixelRatio;
        const quads = settings.quadBufferSize, indices = new Uint16Array(6 * quads);
        for (let i = 0, v = 0; i < indices.length; i += 6, v += 4) indices[i] = v, indices[i + 1] = v + 1, 
        indices[i + 2] = v + 2, indices[i + 3] = v + 2, indices[i + 4] = v + 1, indices[i + 5] = v + 3;
        this.indices = ctx.staticBuffer(34963, indices);
        const corners = new Uint8Array(16 * quads);
        for (let i = 0; i < corners.length; i += 16) corners[i + 4] = 255, corners[i + 9] = 255, 
        corners[i + 12] = 255, corners[i + 13] = 255;
        if (this.nodeCoords = ctx.staticBuffer(34962, corners), this.vbo = ctx.createBuffer(), 
        !0 === ctx.canUseVao) {
            const vao = ctx.createVao();
            null !== vao && (ctx.bindVao(vao), ctx.bindIndexBuffer(this.indices));
        }
        this.point(), ctx.enableAttribs(63), this.uploadTexture(0, new Uint8Array([ 255, 255, 255, 255 ]), 1, 1, !1), 
        this.white = this.textures[0], this.registerProgram(defaultVertex(this.viewport, "", ""), DEFAULT_FRAGMENT, null, "Default"), 
        this.lost = () => {
            const onContextLost = this.onContextLost;
            null !== onContextLost && onContextLost();
        }, canvas.addEventListener("webglcontextlost", this.lost);
    }
    beginFrame() {
        this.cleared = !1;
    }
    draw(stream, ops, clips) {
        const ctx = this.ctx;
        !1 === this.cleared && (this.cleared = !0, ctx.scissorTest(!1), ctx.clear());
        const n = ops.length;
        if (0 === n) return;
        ctx.uploadVertices(this.vbo, this.uploadView(stream));
        const programs = this.programs, textures = this.textures, white = this.white, opProgram = ops.program, opTexture = ops.texture, opParams = ops.params, opNode = ops.node, opClip = ops.clip, opStart = ops.start, opCount = ops.count;
        for (let i = 0; i < n; i++) {
            var _textures$opTexture$i;
            const program = programs[opProgram[i]];
            ctx.useProgram(program.handle), ctx.bindTexture(null !== (_textures$opTexture$i = textures[opTexture[i]]) && void 0 !== _textures$opTexture$i ? _textures$opTexture$i : white);
            const params = opParams[i];
            if (null !== params && params !== program.lastParams) {
                program.lastParams = params;
                const table = program.table;
                null === table || !0 === table.direct ? ctx.uniform4fv(program.params, params) : program.uploadTable(params);
            }
            const perOp = program.perOp;
            null !== perOp && perOp(opNode[i]);
            const clip = opClip[i];
            0 !== clip && 1 === clips.valid[clip] ? (ctx.scissorTest(!0), ctx.scissor(clips.sx[clip], clips.sy[clip], clips.sw[clip], clips.sh[clip])) : ctx.scissorTest(!1), 
            ctx.drawQuads(opStart[i], opCount[i]);
        }
    }
    registerProgram(vertex, fragment, extensions = null, name = "") {
        const ctx = this.ctx;
        if (null !== extensions) for (let i = 0; i < extensions.length; i++) if (null === ctx.extension(extensions[i])) throw new Error(`WebGL extension ${extensions[i]} is not available`);
        const program = new Program(ctx, vertex, fragment, name), resolution = program.system[5], ratio = program.system[6];
        null === resolution && null === ratio || (ctx.useProgram(program.handle), null !== resolution && ctx.uniform2f(resolution, this.canvas.width, this.canvas.height), 
        null !== ratio && ctx.uniform1f(ratio, this.pixelRatio));
        const programs = this.programs;
        return programs.push(program), programs.length - 1;
    }
    uploadTexture(id, source, w, h, premultiply) {
        var _textures$id;
        const textures = this.textures;
        for (;textures.length <= id; ) textures.push(null);
        let texture = null !== (_textures$id = textures[id]) && void 0 !== _textures$id ? _textures$id : null;
        null === texture && (texture = this.ctx.createTexture(9729), textures[id] = texture), 
        this.ctx.texImage(texture, source, w, h, premultiply);
    }
    uploadCompressed(id, data) {
        var _textures$id2;
        const ctx = this.ctx;
        if (!1 === enableCompressedFormat(ctx, data.glInternalFormat)) return !1;
        const textures = this.textures;
        for (;textures.length <= id; ) textures.push(null);
        const mip = mipmapped(data);
        let texture = null !== (_textures$id2 = textures[id]) && void 0 !== _textures$id2 ? _textures$id2 : null;
        return null === texture && (texture = ctx.createTexture(!0 === mip ? 9987 : 9729), 
        textures[id] = texture), function(ctx, texture, data, mip) {
            const mipmaps = data.mipmaps, block = data.blockInfo, levels = !0 === mip ? mipmaps.length : 1;
            let w = data.w, h = data.h;
            for (let i = 0; i < levels; i++) {
                let bytes = new Uint8Array(mipmaps[i]), uploadW = w, uploadH = h;
                if ("ktx" === data.type) {
                    const blocksW = Math.ceil(w / block.width), blocksH = Math.ceil(h / block.height);
                    0 === i && (uploadW = blocksW * block.width, uploadH = blocksH * block.height);
                    const expected = blocksW * blocksH * block.bytes;
                    if (bytes.byteLength < expected) {
                        const padded = new Uint8Array(expected);
                        padded.set(bytes), bytes = padded;
                    }
                }
                ctx.compressedTexImage(texture, i, data.glInternalFormat, uploadW, uploadH, bytes), 
                w = Math.max(1, w >> 1), h = Math.max(1, h >> 1);
            }
        }(ctx, texture, data, mip), !0;
    }
    deleteTexture(id) {
        var _this$textures$id;
        const texture = null !== (_this$textures$id = this.textures[id]) && void 0 !== _this$textures$id ? _this$textures$id : null;
        null !== texture && (this.ctx.deleteTexture(texture), this.textures[id] = null);
    }
    outOfMemory() {
        return this.ctx.outOfMemory();
    }
    setClearColor(rgba) {
        this.ctx.clearColor(rgba);
    }
    getCapabilities() {
        var _ctx$parameter2, _ctx$parameter3;
        const ctx = this.ctx;
        return {
            renderMode: "webgl",
            webGlVersion: !0 === ctx.isWebGl2 ? 2 : 1,
            vertexArrayObject: ctx.canUseVao,
            maxTextureSize: null !== (_ctx$parameter2 = ctx.parameter(3379)) && void 0 !== _ctx$parameter2 ? _ctx$parameter2 : 0,
            maxTextureUnits: null !== (_ctx$parameter3 = ctx.parameter(34930)) && void 0 !== _ctx$parameter3 ? _ctx$parameter3 : 0
        };
    }
    destroy() {
        this.canvas.removeEventListener("webglcontextlost", this.lost), this.ctx.lose();
    }
    uploadView(stream) {
        var _views$bucket;
        stream.buffer !== this.viewSource && (this.viewSource = stream.buffer, this.views = []);
        const bucket = Math.ceil(stream.quadCount / 64), views = this.views;
        for (;views.length <= bucket; ) views.push(null);
        let view = null !== (_views$bucket = views[bucket]) && void 0 !== _views$bucket ? _views$bucket : null;
        if (null === view) {
            const quads = 64 * bucket, capacity = stream.capacityQuads;
            view = new Float32Array(stream.buffer, 0, 20 * (quads < capacity ? quads : capacity)), 
            views[bucket] = view;
        }
        return view;
    }
    point() {
        const ctx = this.ctx, vbo = this.vbo;
        ctx.attribPointer(vbo, 0, 2, 5126, !1, 20, 0), ctx.attribPointer(vbo, 1, 2, 5123, !0, 20, 8), 
        ctx.attribPointer(vbo, 2, 4, 5121, !0, 20, 12), ctx.attribPointer(vbo, 3, 1, 5126, !1, 20, 16), 
        ctx.attribPointer(this.nodeCoords, 4, 2, 5121, !0, 4, 0), ctx.attribPointer(vbo, 5, 2, 5123, !1, 20, 8);
    }
}, FrameLoop = class {
    constructor(platform, host) {
        this.targetFrameTime = 0, this.wakeFallbackDelay = 0, this.paused = !1, this.stopped = !1, 
        this.pauseRequested = !1, this.pauseImmediate = !1, this.pending = !1, this.inFrame = !1, 
        this.handle = -1, this.framed = !1, this.fallbacks = 0, this.fallbackHandle = -1, 
        this.asleep = !0, this.maintenanceQueued = !1, this.grid = 0, this.last = -1, this.platform = platform, 
        this.host = host, this.run = time => {
            this.enter(time, !0);
        }, this.request = () => {
            if (!0 === this.stopped) return;
            const handle = this.platform.requestAnimationFrame(this.run);
            this.handle = handle, !1 === this.framed && this.armFallback(handle);
        }, this.fallback = () => {
            this.fallbacks--;
            const handle = this.fallbackHandle;
            this.fallbacks > 0 || this.handle !== handle || (this.platform.cancelAnimationFrame(handle), 
            this.enter(0, !1));
        }, this.maintain = () => {
            this.maintenanceQueued = !1, !0 === this.asleep && !1 === this.stopped && this.host.maintain();
        };
    }
    enter(time, framed) {
        this.pending = !1, this.handle = -1, this.framed = framed;
        const t = time > 0 ? time : this.platform.now();
        try {
            this.tick(t);
        } catch (error) {
            return this.inFrame = !1, !0 === this.host.needsFrame() ? this.schedule() : this.last = -1, 
            !1 === this.pending && (this.framed = !1), void this.host.error(error);
        }
        !1 === this.pending && (this.framed = !1);
    }
    armFallback(handle) {
        const delay = this.wakeFallbackDelay;
        delay <= 0 || !0 === this.platform.hidden() || (this.fallbackHandle = handle, this.fallbacks++, 
        this.platform.setTimeout(this.fallback, delay));
    }
    schedule() {
        !0 !== this.pending && !0 !== this.inFrame && !0 !== this.paused && !0 !== this.stopped && (this.pending = !0, 
        this.request());
    }
    pause(immediate) {
        this.pauseRequested = !0, this.pauseImmediate = immediate, this.schedule();
    }
    resume() {
        return this.pauseRequested = !1, this.pauseImmediate = !1, !1 !== this.paused && (this.paused = !1, 
        this.last = -1, !0);
    }
    stop() {
        this.stopped = !0, this.pending = !1;
        const handle = this.handle;
        -1 !== handle && (this.handle = -1, this.platform.cancelAnimationFrame(handle));
    }
    tick(time) {
        if (!0 === this.stopped || !0 === this.paused) return;
        const host = this.host;
        if (!0 === this.pauseRequested && !0 === this.pauseImmediate) return this.paused = !0, 
        void host.paused();
        if (!0 === host.needsFrame()) {
            const target = this.targetFrameTime;
            if (target > 0) {
                const elapsed = time - this.grid;
                if (elapsed < target - 2 && (this.last < 0 || time - this.last < target - 4)) return void this.wait(target - elapsed);
                const snapped = this.last < 0 ? time : time + 2 - (elapsed + 2) % target;
                this.grid = snapped > time ? time : snapped;
            } else this.grid = time;
            const last = this.last;
            this.last = time, this.asleep = !1;
            const nominal = target > 0 ? target : 16.666666666666668;
            if (this.inFrame = !0, host.frame(time, last < 0 ? nominal : time - last, nominal), 
            this.inFrame = !1, !0 === this.stopped) return;
        }
        if (!0 === this.pauseRequested && !1 === host.animating()) return this.paused = !0, 
        void host.paused();
        !0 !== host.needsFrame() ? !1 === this.asleep && (this.asleep = !0, this.last = -1, 
        !1 === this.maintenanceQueued && (this.maintenanceQueued = !0, this.platform.setTimeout(this.maintain, 0)), 
        host.idle()) : this.schedule();
    }
    wait(ms) {
        this.pending = !0, ms > 4 ? this.platform.setTimeout(this.request, ms - 4) : this.request();
    }
}, FrameSnapper = class {
    constructor() {
        this.period = 0, this.remainder = 0, this.woken = 0;
    }
    step(dt) {
        const period = this.period;
        if (0 === period) return dt;
        const time = this.remainder + dt, frames = Math.floor(time / period + .25), woken = this.woken;
        if (woken < 2 && (this.woken = woken + 1), frames < 0) return this.remainder = 0, 
        0;
        if (1 === woken && time < period) return this.remainder = 0, period;
        let remainder = time - frames * period;
        return remainder > .1 ? remainder -= .1 : remainder < -.1 ? remainder += .1 : remainder = 0, 
        this.remainder = remainder, frames * period;
    }
    reset() {
        this.remainder = 0, this.woken = 0;
    }
};

function decodes(decode) {
    let pending;
    try {
        pending = decode();
    } catch (e) {
        return Promise.resolve(!1);
    }
    return pending.then(bitmap => {
        var _bitmap$close2;
        return null == (_bitmap$close2 = bitmap.close) || _bitmap$close2.call(bitmap), !0;
    }).catch(() => !1);
}

var STRAIGHT_ALPHA_TEST_PNG = new Uint8Array([ 137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, 0, 1, 0, 0, 0, 1, 8, 6, 0, 0, 0, 31, 21, 196, 137, 0, 0, 0, 13, 73, 68, 65, 84, 120, 156, 99, 248, 207, 192, 208, 0, 0, 4, 129, 1, 128, 44, 85, 206, 176, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130 ]);

function detectPremultiplyAlphaHonored(platform) {
    let decoded;
    try {
        const blob = new Blob([ STRAIGHT_ALPHA_TEST_PNG ], {
            type: "image/png"
        });
        decoded = platform.createImageBitmap(blob, {
            premultiplyAlpha: "premultiply",
            colorSpaceConversion: "none",
            imageOrientation: "none"
        });
    } catch (e) {
        return Promise.resolve(null);
    }
    return decoded.then(bitmap => function(platform, bitmap) {
        const canvas = platform.createCanvas();
        canvas.width = 1, canvas.height = 1;
        let gl = canvas.getContext("webgl");
        null === gl && (gl = canvas.getContext("experimental-webgl"));
        if (null === gl) {
            var _bitmap$close3;
            return null == (_bitmap$close3 = bitmap.close) || _bitmap$close3.call(bitmap), null;
        }
        try {
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
            return gl.deleteFramebuffer(fb), gl.deleteTexture(tex), result;
        } finally {
            var _bitmap$close4, _gl$getExtension;
            null == (_bitmap$close4 = bitmap.close) || _bitmap$close4.call(bitmap), null == (_gl$getExtension = gl.getExtension("WEBGL_lose_context")) || _gl$getExtension.loseContext();
        }
    }(platform, bitmap), () => null);
}

function decodeImageBlob(create, createThis, blob, premultiplyAlpha, sx, sy, sw, sh, supportsOptions, supportsFull, premultiplyHonored) {
    var withAlphaChannel = null != premultiplyAlpha ? premultiplyAlpha : -1 !== blob.type.indexOf("image/png"), useGlPremultiply = !0 === withAlphaChannel && !1 === premultiplyHonored, options = {
        premultiplyAlpha: !0 === withAlphaChannel && !1 === useGlPremultiply ? "premultiply" : "none",
        colorSpaceConversion: "none",
        imageOrientation: "none"
    };
    return (!0 === supportsFull && null !== sw && null !== sh ? create.call(createThis, blob, null === sx ? 0 : sx, null === sy ? 0 : sy, sw, sh, options) : !1 === supportsOptions && !1 === supportsFull ? create.call(createThis, blob) : create.call(createThis, blob, options)).then(function(data) {
        return {
            data: data,
            premultiplyAlpha: useGlPremultiply
        };
    });
}

function createImageWorker(decode) {
    var supportsOptions = !1, supportsFull = !1, premultiplyHonored = !1, timeout = 0, scope = self;
    scope.onmessage = function(event) {
        var request = event.data;
        if (!0 === request.init) return supportsOptions = request.supportsOptions, supportsFull = request.supportsFull, 
        premultiplyHonored = request.premultiplyHonored, void (timeout = request.timeout);
        var id = request.id, src = request.src;
        try {
            var xhr = new XMLHttpRequest;
            xhr.open("GET", src, !0), xhr.responseType = "blob", xhr.timeout = timeout, xhr.onload = function() {
                200 === xhr.status || 0 === xhr.status ? decode(createImageBitmap, void 0, xhr.response, request.premultiplyAlpha, request.sx, request.sy, request.sw, request.sh, supportsOptions, supportsFull, premultiplyHonored).then(function(result) {
                    scope.postMessage({
                        id: id,
                        data: result
                    }, [ result.data ]);
                }, function(error) {
                    scope.postMessage({
                        id: id,
                        error: error.message
                    });
                }) : scope.postMessage({
                    id: id,
                    error: "Image loading failed. HTTP status code: " + xhr.status + ". URL: " + src
                });
            }, xhr.onerror = function() {
                scope.postMessage({
                    id: id,
                    error: "Network error occurred while trying to fetch the image."
                });
            }, xhr.ontimeout = function() {
                scope.postMessage({
                    id: id,
                    error: "Image loading timed out after " + timeout + " ms. URL: " + src
                });
            }, xhr.send();
        } catch (e) {
            scope.postMessage({
                id: id,
                error: String(e instanceof Error ? e.message : e)
            });
        }
    };
}

function imageWorkerSource() {
    return `(${createImageWorker.toString()})(${decodeImageBlob.toString()})`.replace('"use strict";', "");
}

var ImageWorkerManager = class {
    constructor(platform, support) {
        this.crashed = !1, this.onUnavailable = null, this.pending = new Map, this.nextId = 0;
        const worker = platform.createWorker(imageWorkerSource());
        if (this.worker = worker, this.available = null !== worker, null === worker) return;
        worker.onmessage = event => {
            this.reply(event.data);
        };
        const crash = event => {
            this.crash(event);
        };
        worker.onerror = crash, worker.onmessageerror = crash, worker.postMessage({
            init: !0,
            supportsOptions: support.options,
            supportsFull: support.full,
            premultiplyHonored: support.premultiplyHonored,
            timeout: 3e4
        });
    }
    getImage(src, premultiplyAlpha, sx, sy, sw, sh) {
        const worker = this.worker;
        return null === worker ? Promise.reject(new Error("No image worker available")) : new Promise((resolve, reject) => {
            const id = this.nextId++;
            this.pending.set(id, [ resolve, reject ]), worker.postMessage({
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
    get inFlight() {
        return this.pending.size;
    }
    destroy() {
        const worker = this.worker;
        this.worker = null, this.available = !1, null !== worker && worker.terminate(), 
        this.rejectAll("Image worker destroyed");
    }
    reply(message) {
        const id = message.id, settle = this.pending.get(id);
        if (void 0 === settle) return;
        this.pending.delete(id);
        const error = message.error;
        void 0 !== error ? settle[1](new Error(error)) : settle[0](message.data);
    }
    crash(event) {
        const text = null == event ? void 0 : event.message;
        this.rejectAll("string" == typeof text && "" !== text ? text : "Image worker encountered an unrecoverable error");
        const worker = this.worker;
        null !== worker && (this.worker = null, this.available = !1, this.crashed = !0, 
        worker.terminate(), null !== this.onUnavailable && this.onUnavailable());
    }
    rejectAll(message) {
        const pending = this.pending;
        pending.forEach(settle => {
            settle[1](new Error(message));
        }), pending.clear();
    }
};

function failAfterTimeout(platform, img, reject, message) {
    const timeout = {
        img: img,
        reject: reject
    };
    return platform.setTimeout(() => {
        !function(timeout, message) {
            const img = timeout.img, reject = timeout.reject;
            if (null === img || null === reject) return;
            settled(timeout), img.onload = null, img.onerror = null, img.src = "", reject(new Error(message));
        }(timeout, message);
    }, 3e4), timeout;
}

function settled(timeout) {
    null !== timeout && (timeout.img = null, timeout.reject = null);
}

function firstSize(a, b, c, last) {
    return null !== a && a > 0 ? a : null !== b && b > 0 ? b : c > 0 ? c : last;
}

function freeCanvas(canvas) {
    canvas.width = 0, canvas.height = 0;
}

var toLoaded = decoded => ({
    data: decoded.data,
    w: decoded.data.width,
    h: decoded.data.height,
    premultiply: decoded.premultiplyAlpha
});

function loadImage(ctx, props) {
    var _props$premultiplyAlp;
    const src = props.src, premultiply = null === (_props$premultiplyAlp = props.premultiplyAlpha) || void 0 === _props$premultiplyAlp || _props$premultiplyAlp;
    if (null == src || "" === src) return Promise.reject(new TextureError(TextureErrorCode.TEXTURE_DATA_NULL));
    if ("function" == typeof src) {
        const data = src();
        return null === data ? Promise.reject(new TextureError(TextureErrorCode.TEXTURE_DATA_NULL)) : Promise.resolve(imageData(data, premultiply));
    }
    return "string" != typeof src ? "undefined" != typeof Blob && src instanceof Blob ? decodeBlob(ctx, src, props, premultiply) : Promise.resolve(imageData(src, premultiply)) : function(ctx, src, props, premultiply) {
        var _props$type;
        const base64 = isBase64Image(src), url = !0 === base64 ? src : convertUrlToAbsolute(src), type = null !== (_props$type = props.type) && void 0 !== _props$type ? _props$type : null;
        var _props$w, _props$h, _props$sx, _props$sy, _props$sw, _props$sh;
        if ("regular" !== type && ("svg" === type || !0 === function(url) {
            return /\.(svg)(\?.*)?$/.test(url);
        }(src))) return function(ctx, url, width, height, sx, sy, sw, sh) {
            const platform = ctx.platform, img = platform.createImage(), remote = !1 === isBase64Image(url);
            return !0 === remote && (img.crossOrigin = "anonymous"), new Promise((resolve, reject) => {
                const timeout = !0 === remote ? failAfterTimeout(platform, img, reject, `SVG loading timed out: ${url}`) : null;
                img.onload = () => {
                    settled(timeout), resolve();
                }, img.onerror = () => {
                    settled(timeout), reject(new Error(`SVG loading failed: ${url}`));
                }, img.src = url;
            }).then(() => {
                const targetW = firstSize(width, sw, img.naturalWidth, img.width), targetH = firstSize(height, sh, img.naturalHeight, img.height), ratio = ctx.pixelRatio > 1 ? ctx.pixelRatio : 1, w = Math.max(1, Math.ceil(targetW * ratio)), h = Math.max(1, Math.ceil(targetH * ratio)), canvas = platform.createCanvas();
                canvas.width = w, canvas.height = h;
                const c2d = canvas.getContext("2d");
                null !== sw && null !== sh ? c2d.drawImage(img, null != sx ? sx : 0, null != sy ? sy : 0, sw, sh, 0, 0, w, h) : c2d.drawImage(img, 0, 0, w, h);
                const imageData = () => {
                    const data = c2d.getImageData(0, 0, w, h);
                    return freeCanvas(canvas), {
                        data: data,
                        w: w,
                        h: h,
                        premultiply: !0
                    };
                };
                return null === ctx.support ? imageData() : platform.createImageBitmap(canvas).then(bitmap => (freeCanvas(canvas), 
                {
                    data: bitmap,
                    w: w,
                    h: h,
                    premultiply: !1
                }), imageData);
            });
        }(ctx, url, null !== (_props$w = props.w) && void 0 !== _props$w ? _props$w : null, null !== (_props$h = props.h) && void 0 !== _props$h ? _props$h : null, null !== (_props$sx = props.sx) && void 0 !== _props$sx ? _props$sx : null, null !== (_props$sy = props.sy) && void 0 !== _props$sy ? _props$sy : null, null !== (_props$sw = props.sw) && void 0 !== _props$sw ? _props$sw : null, null !== (_props$sh = props.sh) && void 0 !== _props$sh ? _props$sh : null);
        if ("regular" !== type && ("compressed" === type || !0 === function(src) {
            return /\.(ktx|pvr)$/.test(src);
        }(src))) return loadCompressedTexture(ctx.platform, url);
        if (null === ctx.support) return loadElement(ctx.platform, url, premultiply);
        const worker = ctx.worker;
        var _props$sx2, _props$sy2, _props$sw2, _props$sh2;
        return !1 === base64 && null !== worker ? worker.getImage(url, premultiply, null !== (_props$sx2 = props.sx) && void 0 !== _props$sx2 ? _props$sx2 : null, null !== (_props$sy2 = props.sy) && void 0 !== _props$sy2 ? _props$sy2 : null, null !== (_props$sw2 = props.sw) && void 0 !== _props$sw2 ? _props$sw2 : null, null !== (_props$sh2 = props.sh) && void 0 !== _props$sh2 ? _props$sh2 : null).then(toLoaded, error => {
            if (!0 === worker.crashed) return fetchAndDecode(ctx, url, props, premultiply);
            throw error;
        }) : !0 === base64 ? decodeBlob(ctx, function(dataURI) {
            const match = (dataURI = dataURI.replace(/^data:/, "")).match(/image\/[^;]+/), type = null === match ? "" : match[0], byteCharacters = atob(dataURI.replace(/^[^,]+,/, "")), bytes = new Uint8Array(byteCharacters.length);
            for (let i = 0; i < bytes.length; i++) bytes[i] = byteCharacters.charCodeAt(i);
            return new Blob([ bytes ], {
                type: type
            });
        }(src), props, premultiply) : fetchAndDecode(ctx, url, props, premultiply);
    }(ctx, src, props, premultiply);
}

var imageData = (data, premultiply) => ({
    data: data,
    w: data.width,
    h: data.height,
    premultiply: premultiply
});

function fetchAndDecode(ctx, url, props, premultiply) {
    return ctx.platform.fetch(url, "blob").then(b => decodeBlob(ctx, b, props, premultiply));
}

function decodeBlob(ctx, blob, props, premultiply) {
    var _props$sx3, _props$sy3, _props$sw3, _props$sh3;
    const support = ctx.support;
    if (null === support) return loadElement(ctx.platform, blob, premultiply);
    const platform = ctx.platform;
    return decodeImageBlob(platform.createImageBitmap, platform, blob, premultiply, null !== (_props$sx3 = props.sx) && void 0 !== _props$sx3 ? _props$sx3 : null, null !== (_props$sy3 = props.sy) && void 0 !== _props$sy3 ? _props$sy3 : null, null !== (_props$sw3 = props.sw) && void 0 !== _props$sw3 ? _props$sw3 : null, null !== (_props$sh3 = props.sh) && void 0 !== _props$sh3 ? _props$sh3 : null, support.options, support.full, support.premultiplyHonored).then(toLoaded);
}

function loadElement(platform, src, premultiply) {
    const img = platform.createImage(), remote = "string" == typeof src && !1 === isBase64Image(src);
    !0 === remote && (img.crossOrigin = "anonymous");
    const name = "string" == typeof src ? src : "a Blob", loading = new Promise((resolve, reject) => {
        const timeout = !0 === remote ? failAfterTimeout(platform, img, reject, `Image loading timed out for ${name}`) : null;
        img.onload = () => {
            settled(timeout), resolve();
        }, img.onerror = () => {
            settled(timeout), reject(new Error(`Image loading failed for ${name}`));
        };
    });
    let objectUrl = null;
    return "string" == typeof src ? img.src = src : (objectUrl = URL.createObjectURL(src), 
    img.src = objectUrl), loading.then(() => (revoke(objectUrl), {
        data: img,
        w: img.width,
        h: img.height,
        premultiply: premultiply
    }), error => {
        throw revoke(objectUrl), error;
    });
}

function revoke(objectUrl) {
    null !== objectUrl && URL.revokeObjectURL(objectUrl);
}

var warned = 0;

function warnOnce(warning, message) {
    0 === (warned & warning) && (warned |= warning, console.warn(message));
}

function tryNoise(w, h) {
    try {
        return function(w, h) {
            const size = w * h * 4, pixels = new Uint8ClampedArray(size);
            for (let i = 0; i < size; i += 4) {
                const v = Math.floor(256 * Math.random());
                pixels[i] = v, pixels[i + 1] = v, pixels[i + 2] = v, pixels[i + 3] = 255;
            }
            return new ImageData(pixels, w, h);
        }(w, h);
    } catch (error) {
        return error instanceof Error ? error : new Error(String(error));
    }
}

var Loader = class {
    constructor(platform, store, settings) {
        this.ready = !1, this.inFlight = 0, this.ctx = null, this.destroyed = !1, this.onLoaded = (rec, loaded) => {
            this.inFlight--, !0 !== this.destroyed ? (this.store.decoded(rec, loaded.data, loaded.w, loaded.h, loaded.premultiply), 
            this.dispatch()) : closeData(loaded.data);
        }, this.onFailed = (rec, error) => {
            this.inFlight--, this.store.failed(rec, error instanceof Error ? error : new Error(String(error))), 
            this.dispatch();
        }, this.workerLost = () => {
            const ctx = this.ctx;
            null !== ctx && (ctx.worker = null), this.dispatch();
        }, this.platform = platform, this.store = store, this.settings = settings;
        const mode = settings.createImageBitmapSupport;
        if ("auto" === mode) (function(platform) {
            const pngBinaryData = new Uint8Array([ 137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, 0, 1, 0, 0, 0, 1, 1, 3, 0, 0, 0, 37, 219, 86, 202, 0, 0, 0, 3, 80, 76, 84, 69, 0, 0, 0, 167, 122, 61, 218, 0, 0, 0, 1, 116, 82, 78, 83, 0, 64, 230, 216, 102, 0, 0, 0, 10, 73, 68, 65, 84, 8, 215, 99, 96, 0, 0, 0, 2, 0, 1, 226, 33, 188, 51, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130 ]), support = {
                basic: !1,
                options: !1,
                full: !1,
                premultiplyHonored: null
            };
            let blob, basic;
            try {
                blob = new Blob([ pngBinaryData ], {
                    type: "image/png"
                }), basic = platform.createImageBitmap(blob);
            } catch (e) {
                return Promise.reject(e);
            }
            return basic.then(bitmap => {
                var _bitmap$close;
                return null == (_bitmap$close = bitmap.close) || _bitmap$close.call(bitmap), support.basic = !0, 
                decodes(() => platform.createImageBitmap(blob, {
                    premultiplyAlpha: "none"
                }));
            }).then(options => (support.options = options, decodes(() => platform.createImageBitmap(blob, 0, 0, 1, 1, {
                premultiplyAlpha: "none"
            })))).then(full => (support.full = full, support));
        })(platform).then(support => this.resolvePremultiply(support), () => this.init(null)); else {
            const support = {
                basic: "basic" === mode,
                options: "options" === mode,
                full: "full" === mode,
                premultiplyHonored: null
            };
            Promise.resolve().then(() => this.resolvePremultiply(support));
        }
    }
    dispatch() {
        if (!0 === this.destroyed) return;
        const store = this.store;
        let rec = store.nextGenerated();
        for (;-1 !== rec; ) this.generate(rec), rec = store.nextGenerated();
        const ctx = this.ctx;
        if (null === ctx) return;
        const limit = this.settings.imageDecodeConcurrency;
        for (;limit <= 0 || this.inFlight < limit; ) {
            if (rec = store.nextQueued(), -1 === rec) return;
            this.start(ctx, rec);
        }
    }
    destroy() {
        this.destroyed = !0;
        const ctx = this.ctx;
        null !== ctx && null !== ctx.worker && ctx.worker.destroy(), this.ctx = null;
    }
    start(ctx, rec) {
        this.inFlight++;
        const props = this.store.props[rec];
        new Promise(resolve => {
            resolve(loadImage(ctx, props));
        }).then(loaded => this.onLoaded(rec, loaded), error => this.onFailed(rec, error));
    }
    generate(rec) {
        const store = this.store;
        if (1 === store.kind[rec]) return void store.decoded(rec, function(color) {
            const pixel = new Uint8Array(4);
            return 4294967295 === color ? (pixel[0] = 255, pixel[1] = 255, pixel[2] = 255, pixel[3] = 255, 
            pixel) : (pixel[0] = color >> 16 & 255, pixel[1] = color >> 8 & 255, pixel[2] = 255 & color, 
            pixel[3] = color >>> 24 & 255, pixel);
        }(store.props[rec].color), 1, 1, !0);
        const p = store.props[rec], pixels = tryNoise(p.w, p.h);
        pixels instanceof Error ? store.failed(rec, pixels) : store.decoded(rec, pixels, p.w, p.h, !1);
    }
    resolvePremultiply(support) {
        if (!0 === this.destroyed) return;
        const honored = this.settings.premultiplyAlphaHonored;
        if ("auto" !== honored) return support.premultiplyHonored = honored, void this.init(support);
        !1 !== support.options || !1 !== support.full ? detectPremultiplyAlphaHonored(this.platform).then(result => {
            support.premultiplyHonored = result, this.init(support);
        }, () => this.init(support)) : this.init(support);
    }
    init(support) {
        if (!0 === this.destroyed) return;
        const usable = null !== support && (!0 === support.basic || !0 === support.options || !0 === support.full);
        let worker = null;
        !0 === usable && this.settings.numImageWorkers > 0 && (worker = new ImageWorkerManager(this.platform, support), 
        !1 === worker.available ? worker = null : worker.onUnavailable = this.workerLost), 
        null !== support && !1 === support.premultiplyHonored && warnOnce(4, '[Lightning] createImageBitmap premultiplyAlpha:"premultiply" is not honored on this device: WebGL premultiplies images on upload instead.'), 
        !1 === usable && warnOnce(1, "[Lightning] createImageBitmap is not supported on this browser. ImageTexture will be slower."), 
        null === worker && warnOnce(2, "[Lightning] Image worker count is 0 or workers are not supported on this browser. Image loading will be slower."), 
        this.ctx = {
            platform: this.platform,
            support: !0 === usable ? support : null,
            worker: worker,
            pixelRatio: this.settings.pixelRatio
        }, this.ready = !0, this.dispatch();
    }
};

var Uploader = class {
    constructor(store, sink, now, requestFrame, memory = null) {
        this.waited = 0, this.store = store, this.sink = sink, this.now = now, this.requestFrame = requestFrame, 
        this.memory = memory;
        const max = sink.maxTextureSize;
        this.maxSize = max > 0 ? max : 1 / 0;
    }
    held() {
        const memory = this.memory;
        return null !== memory && !1 !== memory.blocked && (this.store.releaseUnwantedDecoded() > 0 && memory.waitForRoom(), 
        !0);
    }
    run(animating, timeLimit) {
        const store = this.store;
        if (0 === store.decodedCount) return 0;
        if (!0 === this.held()) return 0 === store.decodedCount && (this.waited = 0), 0;
        let uploaded = 0;
        if (!0 === animating) uploaded = this.runAnimating(); else {
            const start = this.now();
            for (;!(uploaded > 0 && !0 === this.held()); ) {
                const rec = store.nextDecoded();
                if (-1 === rec) break;
                if (this.upload(rec), uploaded++, this.now() - start >= timeLimit) break;
            }
        }
        return 0 === store.decodedCount ? this.waited = 0 : this.requestFrame(), uploaded;
    }
    destroy() {
        const store = this.store;
        let rec = store.nextDecoded();
        for (;-1 !== rec; ) closeData(store.data[rec]), store.data[rec] = null, rec = store.nextDecoded();
    }
    runAnimating() {
        const store = this.store, holdLarge = this.waited < 30;
        let held = 0, rec = store.peekDecoded();
        for (;-1 !== rec && !0 === holdLarge && store.w[rec] * store.h[rec] > 5e5; ) store.rotateDecoded(), 
        held++, rec = held < store.decodedCount ? store.peekDecoded() : -1;
        return held > 0 && this.waited++, -1 === rec ? 0 : (store.nextDecoded(), this.upload(rec), 
        1);
    }
    upload(rec) {
        const store = this.store, data = store.data[rec], w = store.w[rec], h = store.h[rec], max = this.maxSize;
        if (w > max || h > max) return void store.uploadFailed(rec, new TextureError(TextureErrorCode.TEXTURE_UPLOAD_FAILED, `Texture ${w}x${h} exceeds the maximum texture size of this device (${max})`));
        if (w * h > 5e5 && (this.waited = 0), void 0 !== data.mipmaps) return void this.uploadCompressed(rec, data);
        const error = function(sink, id, source, w, h, premultiply) {
            try {
                return sink.uploadTexture(id, source, w, h, premultiply), null;
            } catch (error) {
                return error instanceof Error ? error : new Error(String(error));
            }
        }(this.sink, rec, data, w, h, !!(2 & store.flags[rec]));
        null === error ? (store.uploaded(rec, function(data, w, h) {
            return !0 === ArrayBuffer.isView(data) ? w * h * 4 : w * h * 4 * 1.1;
        }(data, w, h)), null !== this.memory && this.memory.checkCritical()) : this.failUpload(rec, error);
    }
    failUpload(rec, error) {
        this.sink.deleteTexture(rec), this.store.uploadFailed(rec, error);
    }
    uploadCompressed(rec, data) {
        const store = this.store, error = function(sink, id, data) {
            let supported;
            try {
                supported = sink.uploadCompressed(id, data);
            } catch (error) {
                return error instanceof Error ? error : new Error(String(error));
            }
            return !0 === supported ? null : new TextureError(TextureErrorCode.TEXTURE_UPLOAD_FAILED, `Compressed texture format 0x${data.glInternalFormat.toString(16)} is not supported by this device`);
        }(this.sink, rec, data);
        if (null === error) {
            if ("ktx" === data.type) {
                const block = data.blockInfo;
                store.u2[rec] = data.w / (Math.ceil(data.w / block.width) * block.width), store.v2[rec] = data.h / (Math.ceil(data.h / block.height) * block.height);
            }
            store.uploaded(rec, data.mipmaps[0].byteLength), null !== this.memory && this.memory.checkCritical();
        } else this.failUpload(rec, error);
    }
}, MemoryManager = class {
    constructor(store, events, target, settings) {
        this.criticalThreshold = 0, this.targetThreshold = 0, this.cleanupInterval = 0, 
        this.baselineMemoryAllocation = 0, this.doNotExceedCriticalThreshold = !1, this.debugLogging = !1, 
        this.criticalCleanupRequested = !1, this.schedule = null, this.requestFrame = () => {}, 
        this.lastCleanup = -1 / 0, this.idleQueued = !1, this.idleFrame = 0, this.roomQueued = !1, 
        this.destroyed = !1, this.warned = !1, this.idleCheck = () => {
            this.idleQueued = !1, !1 === this.destroyed && this.store.frame === this.idleFrame && this.maintain();
        }, this.roomCheck = () => {
            this.roomQueued = !1, !0 !== this.destroyed && !1 !== this.blocked && (this.cleanup(!1), 
            !0 === this.blocked && this.store.releaseUnwantedDecoded() > 0 && this.waitForRoom());
        }, this.store = store, this.events = events, this.target = target, this.updateSettings(settings);
    }
    get memUsed() {
        return this.baselineMemoryAllocation + this.store.loadedBytes;
    }
    updateSettings(settings) {
        const held = this.blocked;
        this.criticalThreshold = Math.round(settings.criticalThreshold), this.baselineMemoryAllocation = Math.round(settings.baselineMemoryAllocation);
        const level = Math.max(0, Math.min(1, settings.targetThresholdLevel));
        this.targetThreshold = Math.max(Math.round(settings.criticalThreshold * level), this.baselineMemoryAllocation), 
        this.cleanupInterval = settings.cleanupInterval, this.doNotExceedCriticalThreshold = settings.doNotExceedCriticalThreshold, 
        this.debugLogging = settings.debugLogging, !0 === held && !1 === settings.doNotExceedCriticalThreshold && this.store.decodedCount > 0 && this.requestFrame();
    }
    checkCritical() {
        this.criticalThreshold > 0 && this.memUsed > this.criticalThreshold && (this.criticalCleanupRequested = !0);
    }
    get blocked() {
        return !0 === this.doNotExceedCriticalThreshold && !0 === this.criticalCleanupRequested;
    }
    destroy() {
        this.destroyed = !0, this.schedule = null;
    }
    waitForRoom() {
        !0 !== this.roomQueued && null !== this.schedule && (this.roomQueued = !0, this.schedule(this.roomCheck, 2e3));
    }
    maintain() {
        const now = this.store.now(), above = this.criticalThreshold > 0 && this.memUsed > this.targetThreshold, wait = this.cleanupInterval - (now - this.lastCleanup);
        !0 === this.criticalCleanupRequested || !0 === above && wait <= 0 ? this.clean(!1, now) : (this.evictOrphans(now), 
        !1 !== above && wait <= 2147483647 != !1 && (this.idleFrame = this.store.frame, 
        !1 === this.idleQueued && null !== this.schedule && (this.idleQueued = !0, this.schedule(this.idleCheck, wait))));
    }
    cleanup(full = !1) {
        this.clean(full, this.store.now());
    }
    cleanupAt(time) {
        this.clean(!1, time);
    }
    handleOutOfMemory() {
        this.events.queue(this.target, "outOfMemory", {
            memUsed: this.memUsed,
            criticalThreshold: this.criticalThreshold
        }), this.criticalCleanupRequested = !0;
    }
    info() {
        const store = this.store;
        return {
            criticalThreshold: this.criticalThreshold,
            targetThreshold: this.targetThreshold,
            renderableMemUsed: this.baselineMemoryAllocation + store.wantedBytes,
            memUsed: this.memUsed,
            renderableTexturesLoaded: store.wantedCount,
            loadedTextures: store.loadedCount,
            baselineMemoryAllocation: this.baselineMemoryAllocation
        };
    }
    clean(full, now) {
        const target = this.target, critical = this.criticalCleanupRequested;
        if (this.lastCleanup = now, !0 === critical && !0 === target.hasListener("criticalCleanup") && this.events.queue(target, "criticalCleanup", {
            memUsed: this.memUsed,
            criticalThreshold: this.criticalThreshold
        }), this.freeUnwanted(full, now), this.evictOrphans(now), this.criticalThreshold > 0 && this.memUsed >= this.criticalThreshold) return !0 === target.hasListener("criticalCleanupFailed") && this.events.queue(target, "criticalCleanupFailed", {
            memUsed: this.memUsed,
            criticalThreshold: this.criticalThreshold
        }), void (!0 === this.debugLogging && !1 === this.warned && (this.warned = !0, console.warn(`[TextureMemory] above the critical threshold after cleanup: ${this.memUsed}`)));
        this.warned = !1;
        const held = !0 === this.blocked && this.store.decodedCount > 0;
        this.criticalCleanupRequested = !1, !0 === held && this.requestFrame();
    }
    freeUnwanted(full, now) {
        if (!1 === full && this.criticalThreshold <= 0) return;
        const store = this.store;
        let rec = store.lruHead;
        for (;-1 !== rec && (!0 === full || this.memUsed >= this.targetThreshold); ) {
            const next = store.lruNext[rec];
            now - store.createdAt[rec] >= 2e3 && store.free(rec), rec = next;
        }
    }
    evictOrphans(now) {
        const store = this.store;
        let rec = store.orphanHead;
        for (;-1 !== rec; ) {
            const next = store.orphanNext[rec], state = store.state[rec], handle = store.handles[rec];
            0 !== state && 6 !== state && !0 !== store.failedForGood(rec) || 0 !== store.wantCount[rec] || 1 & store.flags[rec] || !(now - store.createdAt[rec] >= 2e3) || null !== handle && !1 !== handle.hasListeners() || store.destroy(rec), 
            rec = next;
        }
    }
}, Telemetry = class {
    constructor(target, events, clock, spy, interval, start) {
        this.segment = "", this.lastTickRendered = !1, this.beat = 0, this.halted = !1, 
        this.stopped = !1, this.heartbeat = token => {
            if (token !== this.beat || !0 === this.stopped) return;
            const now = this.clock.now();
            now - this.sampleStart >= this.interval && this.close(now), this.arm(now);
        }, this.sampleFrames = 0, this.sampleElapsed = 0, this.renderedFrames = 0, this.idleTicks = 0, 
        this.buckets = new Uint32Array(45), this.maxFrameTime = 0, this.animatedFrames = 0, 
        this.animatedElapsed = 0, this.animatedBuckets = new Uint32Array(45), this.animatedMaxFrameTime = 0, 
        this.animationSum = 0, this.maxAnimations = 0, this.uploadFrames = 0, this.updateMs = 0, 
        this.renderMs = 0, this.uploadMs = 0, this.maxUpdateMs = 0, this.maxRenderMs = 0, 
        this.maxUploadMs = 0, this.uploadedTextures = 0, this.maxUploadQueue = 0, this.quads = 0, 
        this.renderOps = 0, this.reportedQuads = 0, this.reportedOps = 0, this.target = target, 
        this.events = events, this.clock = clock, this.spy = spy, this.interval = interval, 
        this.sampleStart = start;
    }
    drawn(updateMs, renderMs, quads, renderOps, activeAnimations) {
        this.updateMs += updateMs, this.renderMs += renderMs, updateMs > this.maxUpdateMs && (this.maxUpdateMs = updateMs), 
        renderMs > this.maxRenderMs && (this.maxRenderMs = renderMs), this.animationSum += activeAnimations, 
        activeAnimations > this.maxAnimations && (this.maxAnimations = activeAnimations), 
        this.quads = quads, this.renderOps = renderOps;
    }
    uploaded(queued, uploaded, ms) {
        this.uploadFrames++, this.uploadedTextures += uploaded, this.uploadMs += ms, ms > this.maxUploadMs && (this.maxUploadMs = ms), 
        queued > this.maxUploadQueue && (this.maxUploadQueue = queued);
    }
    tick(time, dt, rendered, animating) {
        this.beat++, !0 === rendered ? (this.renderedFrames++, !0 === this.lastTickRendered && this.pair(dt, animating)) : this.idleTicks++, 
        this.lastTickRendered = rendered, time - this.sampleStart >= this.interval && this.close(time), 
        !0 === rendered && this.renderInfo();
    }
    idle(time) {
        this.lastTickRendered = !1, this.halted = !1, this.arm(time);
    }
    halt() {
        this.halted = !0, this.beat++;
    }
    relabel(label, time) {
        label !== this.segment && ((this.renderedFrames > 0 || this.idleTicks > 0) && this.close(time), 
        this.segment = label);
    }
    restart(interval, time) {
        this.interval = interval, this.reset(), this.sampleStart = time, this.arm(time);
    }
    stop() {
        this.stopped = !0;
    }
    pair(dt, animating) {
        this.sampleFrames++, this.sampleElapsed += dt;
        const bucket = frameTimeBucketIndex(dt), buckets = this.buckets;
        if (buckets[bucket] = buckets[bucket] + 1, dt > this.maxFrameTime && (this.maxFrameTime = dt), 
        !1 === animating) return;
        this.animatedFrames++, this.animatedElapsed += dt;
        const animated = this.animatedBuckets;
        animated[bucket] = animated[bucket] + 1, dt > this.animatedMaxFrameTime && (this.animatedMaxFrameTime = dt);
    }
    arm(time) {
        if (!0 === this.halted) return;
        const token = ++this.beat, wait = this.sampleStart + this.interval - time;
        this.clock.setTimeout(() => this.heartbeat(token), wait > 0 ? Math.min(wait, 6e4) : 0);
    }
    close(time) {
        !0 === this.target.hasListener("fpsUpdate") && this.events.queue(this.target, "fpsUpdate", this.payload());
        const spy = this.spy;
        null !== spy && spy.reset(), this.reset(), this.sampleStart = time;
    }
    payload() {
        const frameTimeBuckets = new Array(45), animatedFrameTimeBuckets = new Array(45);
        for (let i = 0; i < 45; i++) frameTimeBuckets[i] = this.buckets[i], animatedFrameTimeBuckets[i] = this.animatedBuckets[i];
        const renderedFrames = this.renderedFrames, spy = this.spy;
        return {
            fps: this.sampleElapsed > 0 ? Math.round(1e3 * this.sampleFrames / this.sampleElapsed) : 0,
            sampledFrames: this.sampleFrames,
            renderedFrames: renderedFrames,
            idleTicks: this.idleTicks,
            renderedMs: this.sampleElapsed,
            frameTimeBuckets: frameTimeBuckets,
            maxFrameTime: this.maxFrameTime,
            animatedFps: this.animatedElapsed > 0 ? Math.round(1e3 * this.animatedFrames / this.animatedElapsed) : 0,
            animatedFrames: this.animatedFrames,
            animatedMs: this.animatedElapsed,
            animatedFrameTimeBuckets: animatedFrameTimeBuckets,
            animatedMaxFrameTime: this.animatedMaxFrameTime,
            segment: this.segment,
            meanActiveAnimations: renderedFrames > 0 ? this.animationSum / renderedFrames : 0,
            maxActiveAnimations: this.maxAnimations,
            updateMs: this.updateMs,
            renderMs: this.renderMs,
            uploadMs: this.uploadMs,
            maxUpdateMs: this.maxUpdateMs,
            maxRenderMs: this.maxRenderMs,
            maxUploadMs: this.maxUploadMs,
            uploadFrames: this.uploadFrames,
            uploadedTextures: this.uploadedTextures,
            maxUploadQueueSize: this.maxUploadQueue,
            contextSpyData: null !== spy ? spy.data : null,
            renderOps: this.renderOps,
            quads: this.quads
        };
    }
    renderInfo() {
        const quads = this.quads, ops = this.renderOps;
        if ((0 !== quads && quads !== this.reportedQuads || 0 !== ops && ops !== this.reportedOps) && (this.reportedQuads = quads, 
        this.reportedOps = ops, !0 === this.target.hasListener("renderUpdate"))) {
            const payload = {
                quads: quads,
                renderOps: ops
            };
            this.events.queue(this.target, "renderUpdate", payload);
        }
    }
    reset() {
        this.sampleFrames = 0, this.sampleElapsed = 0, this.renderedFrames = 0, this.idleTicks = 0, 
        this.maxFrameTime = 0, this.animatedFrames = 0, this.animatedElapsed = 0, this.animatedMaxFrameTime = 0, 
        this.animationSum = 0, this.maxAnimations = 0, this.uploadFrames = 0, this.updateMs = 0, 
        this.renderMs = 0, this.uploadMs = 0, this.maxUpdateMs = 0, this.maxRenderMs = 0, 
        this.maxUploadMs = 0, this.uploadedTextures = 0, this.maxUploadQueue = 0;
        const buckets = this.buckets, animatedBuckets = this.animatedBuckets;
        for (let i = 0; i < 45; i++) buckets[i] = 0, animatedBuckets[i] = 0;
    }
}, positive = (value, fallback) => void 0 !== value && value > 0 ? value : fallback, runtimeSettings = {
    clearColor: {
        resolve: v => null != v ? v : 0,
        effect: 1
    },
    targetFPS: {
        resolve: v => void 0 !== v && v > 0 ? v : 0,
        effect: 2
    },
    animationSnapRate: {
        resolve: v => positive(v, 0),
        effect: 128
    },
    boundsMargin: {
        resolve: v => normalizeBoundsMargin$1(null != v ? v : CORE_DEFAULTS.boundsMargin),
        effect: 4
    },
    textureMemory: {
        resolve: (value, current) => {
            var _ref, _v$criticalThreshold, _ref2, _v$targetThresholdLev, _ref3, _v$cleanupInterval, _ref4, _v$debugLogging, _ref5, _v$baselineMemoryAllo, _ref6, _v$doNotExceedCritica;
            const v = null != value ? value : {}, c = null != current ? current : {};
            return {
                criticalThreshold: null !== (_ref = null !== (_v$criticalThreshold = v.criticalThreshold) && void 0 !== _v$criticalThreshold ? _v$criticalThreshold : c.criticalThreshold) && void 0 !== _ref ? _ref : 2e8,
                targetThresholdLevel: null !== (_ref2 = null !== (_v$targetThresholdLev = v.targetThresholdLevel) && void 0 !== _v$targetThresholdLev ? _v$targetThresholdLev : c.targetThresholdLevel) && void 0 !== _ref2 ? _ref2 : .8,
                cleanupInterval: null !== (_ref3 = null !== (_v$cleanupInterval = v.cleanupInterval) && void 0 !== _v$cleanupInterval ? _v$cleanupInterval : c.cleanupInterval) && void 0 !== _ref3 ? _ref3 : 5e3,
                debugLogging: null !== (_ref4 = null !== (_v$debugLogging = v.debugLogging) && void 0 !== _v$debugLogging ? _v$debugLogging : c.debugLogging) && void 0 !== _ref4 && _ref4,
                baselineMemoryAllocation: null !== (_ref5 = null !== (_v$baselineMemoryAllo = v.baselineMemoryAllocation) && void 0 !== _v$baselineMemoryAllo ? _v$baselineMemoryAllo : c.baselineMemoryAllocation) && void 0 !== _ref5 ? _ref5 : 26e6,
                doNotExceedCriticalThreshold: null !== (_ref6 = null !== (_v$doNotExceedCritica = v.doNotExceedCriticalThreshold) && void 0 !== _v$doNotExceedCritica ? _v$doNotExceedCritica : c.doNotExceedCriticalThreshold) && void 0 !== _ref6 && _ref6
            };
        },
        effect: 8
    },
    fpsUpdateInterval: {
        resolve: v => positive(v, 0),
        effect: 16
    },
    textureProcessingTimeLimit: {
        resolve: v => positive(v, 25),
        effect: 0
    },
    inspector: {
        resolve: v => null != v && v,
        effect: 32
    },
    inspectorOptions: {
        resolve: v => null != v ? v : {},
        effect: 64
    }
}, initial = (key, value) => runtimeSettings[key].resolve(value, void 0), noop = () => {};

var hasOwn = Object.prototype.hasOwnProperty, frameTime = fps => fps > 0 ? 1e3 / fps : 0;

function reportListenerError(handleLoopError, platform, error) {
    try {
        handleLoopError(error);
    } catch (rethrown) {
        platform.setTimeout(() => {
            throw rethrown;
        }, 0);
    }
}

var Renderer = class extends RendererCore {
    constructor(settings = {}, target) {
        var _settings$platform, _input$canvas;
        const Host = null !== (_settings$platform = settings.platform) && void 0 !== _settings$platform ? _settings$platform : null, platform = null !== Host ? new Host : new WebPlatform, input = platform.resolveSettings(settings), canvas = null !== (_input$canvas = input.canvas) && void 0 !== _input$canvas ? _input$canvas : platform.createCanvas(), s = function(s, canvas) {
            var _s$platform, _s$textLayoutCacheSiz, _s$idleTextLayouts, _s$textBaselineMode, _s$imageDecodeConcurr, _s$createImageBitmapS, _s$premultiplyAlphaHo, _s$maxRetryCount, _s$enableContextSpy, _s$forceWebGL, _s$disableVertexArray, _s$powerPreference, _s$handleLoopError, _s$presentOnIdle;
            return {
                appWidth: positive(s.appWidth, CORE_DEFAULTS.appWidth),
                appHeight: positive(s.appHeight, CORE_DEFAULTS.appHeight),
                deviceLogicalPixelRatio: positive(s.deviceLogicalPixelRatio, CORE_DEFAULTS.deviceLogicalPixelRatio),
                devicePhysicalPixelRatio: positive(s.devicePhysicalPixelRatio, positive("undefined" != typeof window ? window.devicePixelRatio : void 0, CORE_DEFAULTS.devicePhysicalPixelRatio)),
                quadBufferSize: resolveQuadBufferSize(s.quadBufferSize),
                canvas: canvas,
                platform: null !== (_s$platform = s.platform) && void 0 !== _s$platform ? _s$platform : null,
                clearColor: initial("clearColor", s.clearColor),
                targetFPS: initial("targetFPS", s.targetFPS),
                animationSnapRate: initial("animationSnapRate", s.animationSnapRate),
                boundsMargin: initial("boundsMargin", s.boundsMargin),
                textureMemory: initial("textureMemory", s.textureMemory),
                fpsUpdateInterval: initial("fpsUpdateInterval", s.fpsUpdateInterval),
                textureProcessingTimeLimit: initial("textureProcessingTimeLimit", s.textureProcessingTimeLimit),
                inspector: initial("inspector", s.inspector),
                inspectorOptions: initial("inspectorOptions", s.inspectorOptions),
                textLayoutCacheSize: null !== (_s$textLayoutCacheSiz = s.textLayoutCacheSize) && void 0 !== _s$textLayoutCacheSiz ? _s$textLayoutCacheSiz : CORE_DEFAULTS.textLayoutCacheSize,
                idleTextLayouts: null !== (_s$idleTextLayouts = s.idleTextLayouts) && void 0 !== _s$idleTextLayouts ? _s$idleTextLayouts : CORE_DEFAULTS.idleTextLayouts,
                textBaselineMode: null !== (_s$textBaselineMode = s.textBaselineMode) && void 0 !== _s$textBaselineMode ? _s$textBaselineMode : CORE_DEFAULTS.textBaselineMode,
                numImageWorkers: void 0 === s.numImageWorkers ? 1 : Math.min(s.numImageWorkers, 1),
                imageDecodeConcurrency: null !== (_s$imageDecodeConcurr = s.imageDecodeConcurrency) && void 0 !== _s$imageDecodeConcurr ? _s$imageDecodeConcurr : 14,
                createImageBitmapSupport: null !== (_s$createImageBitmapS = s.createImageBitmapSupport) && void 0 !== _s$createImageBitmapS ? _s$createImageBitmapS : "auto",
                premultiplyAlphaHonored: null === (_s$premultiplyAlphaHo = s.premultiplyAlphaHonored) || void 0 === _s$premultiplyAlphaHo || _s$premultiplyAlphaHo,
                maxRetryCount: null !== (_s$maxRetryCount = s.maxRetryCount) && void 0 !== _s$maxRetryCount ? _s$maxRetryCount : 5,
                enableContextSpy: null !== (_s$enableContextSpy = s.enableContextSpy) && void 0 !== _s$enableContextSpy && _s$enableContextSpy,
                forceWebGL2: null !== (_s$forceWebGL = s.forceWebGL2) && void 0 !== _s$forceWebGL && _s$forceWebGL,
                disableVertexArrayObject: null !== (_s$disableVertexArray = s.disableVertexArrayObject) && void 0 !== _s$disableVertexArray && _s$disableVertexArray,
                powerPreference: null !== (_s$powerPreference = s.powerPreference) && void 0 !== _s$powerPreference ? _s$powerPreference : "default",
                handleLoopError: null !== (_s$handleLoopError = s.handleLoopError) && void 0 !== _s$handleLoopError ? _s$handleLoopError : noop,
                wakeFallbackDelay: void 0 === s.wakeFallbackDelay ? 50 : s.wakeFallbackDelay > 0 ? s.wakeFallbackDelay : 0,
                presentOnIdle: null !== (_s$presentOnIdle = s.presentOnIdle) && void 0 !== _s$presentOnIdle && _s$presentOnIdle
            };
        }(input, canvas);
        super(s), this.snapper = new FrameSnapper, this.destroyed = !1, this.uploadRequested = !1, 
        this.telemetry = null, this.segment = "", this.inspector = null, this.settings = s, 
        this.platform = platform, this.canvas = canvas, this.ownsCanvas = canvas !== input.canvas;
        const logicalW = s.appWidth * s.deviceLogicalPixelRatio, logicalH = s.appHeight * s.deviceLogicalPixelRatio;
        platform.sizeCanvas(canvas, logicalW * s.devicePhysicalPixelRatio, logicalH * s.devicePhysicalPixelRatio, logicalW, logicalH), 
        this.view.canvasH = canvas.height;
        const backend = new GlBackend(canvas, {
            forceWebGL2: s.forceWebGL2,
            disableVertexArrayObject: s.disableVertexArrayObject,
            powerPreference: s.powerPreference,
            enableContextSpy: s.enableContextSpy,
            clearColor: s.clearColor,
            pixelRatio: this.view.pixelRatio,
            quadBufferSize: s.quadBufferSize
        });
        this.backend = backend, this.startTime = platform.now();
        const nodes = this.nodes, shaders = this.shaders;
        shaders.host = {
            viewport: backend.viewport,
            register: (vertex, fragment, extensions, table, time, name) => {
                const id = backend.registerProgram(vertex, fragment, extensions, name), program = backend.programs[id];
                return program.table = table, program.bindSystem(nodes, time), id;
            },
            systemMask: program => backend.programs[program].systemMask,
            isLost: () => backend.ctx.isLost()
        }, shaders.onLost = () => {
            platform.setTimeout(() => {
                const onContextLost = backend.onContextLost;
                !1 === this.destroyed && null !== onContextLost && onContextLost();
            }, 0);
        }, shaders.onError = error => {
            reportListenerError(s.handleLoopError, platform, error);
        }, this.onFlush = (stream, ops) => {
            backend.draw(stream, ops, this.clips);
        };
        const textures = this.textures;
        textures.maxRetries = s.maxRetryCount, textures.now = () => platform.now(), textures.sink = backend;
        const uploadFrame = () => {
            this.uploadRequested = !0, this.onFrameRequest();
        };
        textures.requestFrame = uploadFrame;
        const memory = new MemoryManager(textures, this.events, this, s.textureMemory);
        this.memory = memory, memory.schedule = (callback, ms) => {
            platform.setTimeout(callback, ms);
        }, memory.requestFrame = () => {
            this.requestRender();
        }, this.loader = new Loader(platform, this.textures, {
            numImageWorkers: s.numImageWorkers,
            imageDecodeConcurrency: s.imageDecodeConcurrency,
            createImageBitmapSupport: s.createImageBitmapSupport,
            premultiplyAlphaHonored: s.premultiplyAlphaHonored,
            pixelRatio: this.view.pixelRatio
        }), this.textures.schedule = (callback, ms) => {
            platform.setTimeout(callback, ms);
        }, this.textures.onQueued = () => {
            this.loader.dispatch();
        }, this.uploader = new Uploader(textures, backend, () => platform.now(), uploadFrame, memory), 
        this.animationManager.clock = () => platform.now(), this.events.schedule = callback => {
            platform.setTimeout(callback, 0);
        }, this.events.onError = error => {
            reportListenerError(s.handleLoopError, platform, error);
        }, this.textEvents.onError = error => {
            reportListenerError(s.handleLoopError, platform, error);
        }, this.fonts.fetch = (url, type) => platform.fetch(url, type), this.fonts.schedule = (callback, ms) => {
            platform.setTimeout(callback, ms);
        };
        const loop = new FrameLoop(platform, {
            needsFrame: () => !0 === this.frameRequested || !0 === this.animationManager.hasActive || !0 === this.uploadRequested,
            animating: () => this.animationManager.hasActive,
            frame: (time, dt, nominal) => {
                this.frame(time, dt, nominal);
            },
            idle: () => {
                this.snapper.reset();
                const telemetry = this.telemetry;
                null !== telemetry && telemetry.idle(this.currentFrameTime), !0 === s.presentOnIdle && platform.present(canvas), 
                this.emit("idle");
            },
            paused: () => {
                this.snapper.reset();
                const telemetry = this.telemetry;
                null !== telemetry && telemetry.halt();
            },
            maintain: () => {
                this.maintain();
            },
            error: error => {
                this.events.holding = !1, s.handleLoopError(error);
            }
        });
        if (loop.targetFrameTime = frameTime(s.targetFPS), this.snapper.period = frameTime(s.animationSnapRate), 
        loop.wakeFallbackDelay = s.wakeFallbackDelay, this.loop = loop, backend.onContextLost = () => {
            backend.onContextLost = null, loop.stop();
            const telemetry = this.telemetry;
            null !== telemetry && (telemetry.stop(), this.telemetry = null), this.emit("contextLost");
        }, null != target && "" !== target) {
            const element = "string" == typeof target ? platform.getElementById(target) : target;
            if (null === element) throw new Error("Could not find target element");
            element.appendChild(canvas);
        } else if (!0 === this.ownsCanvas) throw new Error("New canvas element could not be appended to undefined target");
        !0 === ENABLE_INSPECTOR && this.applyInspector(!1), this.applyTelemetry(), loop.schedule();
        const warm = () => {
            !0 !== this.destroyed && !0 !== backend.ctx.isLost() && !0 === this.warmNext() && platform.setTimeout(warm, 0);
        };
        platform.setTimeout(warm, 0);
    }
    onFrameRequest() {
        const loop = this.loop;
        void 0 !== loop && loop.schedule();
    }
    frame(time, dt, nominal) {
        if (this.animationManager.now = time, this.animationManager.maxFirstStep = nominal, 
        this.lastFrameTime = this.currentFrameTime, this.currentFrameTime = time, this.deltaTime = dt, 
        this.elapsedTime = time - this.startTime, !0 === this.hasListener("frameTick") && this.emit("frameTick", {
            time: time,
            delta: dt
        }), !0 === this.destroyed) return;
        const animating = this.animationManager.hasActive;
        this.step(this.snapper.step(dt));
        const events = this.events, telemetry = this.telemetry, platform = this.platform;
        if (!1 === this.frameRequested) {
            if (this.uploadRequested = !1, events.holding = !0, this.textures.decodedCount > 0) {
                const start = null !== telemetry ? platform.now() : 0;
                this.upload(animating, telemetry, start), !0 === this.memory.criticalCleanupRequested && this.memory.cleanupAt(time);
            }
            return null !== telemetry && telemetry === this.telemetry && telemetry.tick(time, dt, !1, animating), 
            events.holding = !1, void events.flush();
        }
        const backend = this.backend;
        backend.beginFrame();
        const textures = this.textures;
        textures.frame++, textures.time = time, events.holding = !0;
        let updateStart = 0;
        if (null !== telemetry && (updateStart = platform.now()), this.update(), !0 === this.destroyed) return void (events.holding = !1);
        let drawStart = 0;
        if (null !== telemetry && (drawStart = platform.now()), backend.draw(this.stream, this.ops, this.clips), 
        !0 === this.destroyed) return void (events.holding = !1);
        const shaders = this.shaders;
        !0 === shaders.timed && (shaders.timed = !1, this.requestRender()), this.loader.dispatch(), 
        this.uploadRequested = !1;
        let drawEnd = 0;
        if (null !== telemetry && (drawEnd = platform.now(), telemetry.drawn(drawStart - updateStart, drawEnd - drawStart, this.scene.quads, this.flushedOps + this.ops.length, this.animationManager.active.length)), 
        this.upload(animating, telemetry, drawEnd), !0 === this.memory.criticalCleanupRequested && this.memory.cleanupAt(time), 
        null !== telemetry && telemetry === this.telemetry && telemetry.tick(time, dt, !0, animating), 
        events.holding = !1, shaders.reportErrors(), events.flush(), !0 === ENABLE_INSPECTOR) {
            const inspector = this.inspector;
            null !== inspector && inspector.frame();
        }
    }
    applyInspector(optionsChanged) {
        if (!1 === ENABLE_INSPECTOR) return;
        const Class = this.settings.inspector, current = this.inspector;
        if (null !== current && current.constructor === Class && !1 === optionsChanged) return;
        if (null !== current && (current.destroy(), this.inspector = null), !1 === Class) return;
        const inspector = new Class(this.canvas, this.settings);
        inspector.attach(this), this.inspector = inspector;
    }
    upload(animating, telemetry, start) {
        const limit = this.settings.textureProcessingTimeLimit, queued = this.textures.decodedCount;
        if (null === telemetry || 0 === queued) return void this.uploader.run(animating, limit);
        const uploaded = this.uploader.run(animating, limit);
        telemetry.uploaded(queued, uploaded, this.platform.now() - start);
    }
    applyTelemetry() {
        if (!0 === this.loop.stopped) return;
        const interval = this.settings.fpsUpdateInterval, current = this.telemetry;
        if (interval <= 0) return void (null !== current && (current.stop(), this.telemetry = null));
        const now = this.platform.now();
        if (null !== current) return void (current.interval !== interval && current.restart(interval, now));
        const telemetry = new Telemetry(this, this.events, this.platform, this.backend.spy, interval, now);
        telemetry.segment = this.segment, !0 === this.loop.paused ? telemetry.halt() : telemetry.idle(now), 
        this.telemetry = telemetry;
    }
    setTelemetrySegment(label) {
        if (label === this.segment) return;
        const telemetry = this.telemetry;
        null !== telemetry && telemetry.relabel(label, this.platform.now()), this.segment = label;
    }
    maintain() {
        const events = this.events;
        events.holding = !0, !0 === this.backend.outOfMemory() && this.memory.handleOutOfMemory(), 
        this.memory.maintain(), this.shaders.trim(), this.textNodes.trim(), this.textNodes.layoutAhead(), 
        events.holding = !1, events.flush();
    }
    memoryInfo() {
        return this.memory.info();
    }
    cleanup(full) {
        const events = this.events, held = events.holding;
        events.holding = !0, this.memory.cleanup(!0 === full), events.holding = held, events.flush();
    }
    rerender() {
        this.requestRender();
    }
    getCapabilities() {
        return this.backend.getCapabilities();
    }
    setOptions(options) {
        if (!0 === this.destroyed) return;
        const s = this.settings;
        let effects = 0;
        for (const key in options) {
            if (!1 === hasOwn.call(runtimeSettings, key)) continue;
            const k = key, setting = runtimeSettings[k];
            s[k] = setting.resolve(options[k], s[k]), effects |= setting.effect;
        }
        1 & effects && (this.backend.setClearColor(s.clearColor), this.requestRender()), 
        2 & effects && (this.loop.targetFrameTime = frameTime(s.targetFPS)), 128 & effects && (this.snapper.period = frameTime(s.animationSnapRate), 
        this.snapper.reset()), 8 & effects && (this.memory.updateSettings(s.textureMemory), 
        this.cleanup(!1)), 16 & effects && this.applyTelemetry(), !0 === ENABLE_INSPECTOR && 96 & effects && this.applyInspector(!!(64 & effects)), 
        4 & effects && (this.view.margin = normalizeBoundsMargin$1(s.boundsMargin), this.nodes.markDirty(this.root.id, 128));
    }
    pause(options) {
        this.loop.pause(void 0 !== options && !0 === options.immediate);
    }
    resume() {
        if (!0 === this.loop.resume()) {
            const telemetry = this.telemetry;
            null !== telemetry && telemetry.idle(this.platform.now()), this.requestRender();
        }
    }
    get isPaused() {
        return this.loop.paused;
    }
    destroy() {
        if (!0 === this.destroyed) return;
        this.destroyed = !0, this.loop.stop();
        const telemetry = this.telemetry;
        null !== telemetry && (telemetry.stop(), this.telemetry = null), !0 === ENABLE_INSPECTOR && null !== this.inspector && (this.inspector.destroy(), 
        this.inspector = null), this.shaders.onLost = null, this.events.destroy(), this.textEvents.destroy(), 
        this.fonts.destroy(), this.memory.destroy(), this.textures.schedule = null, this.loader.destroy(), 
        this.uploader.destroy(), this.root.destroy(), this.backend.destroy();
        const parent = this.canvas.parentNode;
        !0 === this.ownsCanvas && null != parent && parent.removeChild(this.canvas), this.removeAllListeners();
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

function mergeProps(...sources) {
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
    preventDefaultOnHandledKeys: !1,
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
    const targetW = node.props.w || regionW, targetH = node.props.h || regionH, naturalW = img.naturalWidth || regionW, naturalH = img.naturalHeight || regionH, scaleX = targetW / regionW, scaleY = targetH / regionH;
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
    var _stageRoot$props$w, _stageRoot$props$h, _node$props$w, _node$props$h;
    const stageRoot = node.stage.root;
    if (!stageRoot || stageRoot === node) return null;
    const rootWidth = null !== (_stageRoot$props$w = stageRoot.props.w) && void 0 !== _stageRoot$props$w ? _stageRoot$props$w : 0, rootHeight = null !== (_stageRoot$props$h = stageRoot.props.h) && void 0 !== _stageRoot$props$h ? _stageRoot$props$h : 0;
    if (rootWidth <= 0 || rootHeight <= 0) return 4;
    const rootLeft = stageRoot.absX, rootTop = stageRoot.absY, rootRight = rootLeft + rootWidth, rootBottom = rootTop + rootHeight, margin = function(margin) {
        if (null == margin) return [ 0, 0, 0, 0 ];
        if (!1 === Array.isArray(margin)) {
            const m = margin || 0;
            return [ m, m, m, m ];
        }
        const arr = margin;
        return [ arr[0] || 0, arr[1] || 0, arr[2] || 0, arr[3] || 0 ];
    }(node.stage.renderer.boundsMargin), width = null !== (_node$props$w = node.props.w) && void 0 !== _node$props$w ? _node$props$w : 0, height = null !== (_node$props$h = node.props.h) && void 0 !== _node$props$h ? _node$props$h : 0, left = node.absX, top = node.absY, right = left + width, bottom = top + height, expandedLeft = rootLeft - margin[3], expandedTop = rootTop - margin[0], expandedRight = rootRight + margin[1], expandedBottom = rootBottom + margin[2];
    return right >= expandedLeft && left <= expandedRight && bottom >= expandedTop && top <= expandedBottom ? right >= rootLeft && left <= rootRight && bottom >= rootTop && top <= rootBottom ? 8 : 4 : 2;
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
        var _rawSettings$duration, _rawSettings$delay, _rawSettings$easing, _rawSettings$loop, _rawSettings$repeat, _rawSettings$repeatDe, _rawSettings$adaptive;
        this.node = void 0, this.state = "paused", this.stopPromise = null, this.stopResolve = null, 
        this.propsStart = {}, this.propsEnd = {}, this.timeStart = performance.now(), this.timeEnd = void 0, 
        this.settings = void 0, this.iteration = 0, this.pausedTime = null, this.node = node, 
        this.settings = {
            duration: null !== (_rawSettings$duration = rawSettings.duration) && void 0 !== _rawSettings$duration ? _rawSettings$duration : 300,
            delay: null !== (_rawSettings$delay = rawSettings.delay) && void 0 !== _rawSettings$delay ? _rawSettings$delay : 0,
            easing: null !== (_rawSettings$easing = rawSettings.easing) && void 0 !== _rawSettings$easing ? _rawSettings$easing : "linear",
            loop: null !== (_rawSettings$loop = rawSettings.loop) && void 0 !== _rawSettings$loop && _rawSettings$loop,
            repeat: null !== (_rawSettings$repeat = rawSettings.repeat) && void 0 !== _rawSettings$repeat ? _rawSettings$repeat : 1,
            repeatDelay: null !== (_rawSettings$repeatDe = rawSettings.repeatDelay) && void 0 !== _rawSettings$repeatDe ? _rawSettings$repeatDe : 0,
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
        } else "string" == typeof props.src && (rawImgSrc = props.src);
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
            null === srcPos && "" === radiusStyle || hasDivBgTint || (bgLayerStyle += "overflow: hidden;"), 
            bgStyle && (bgLayerStyle += bgStyle), maskStyle && (bgLayerStyle += maskStyle), 
            hasDivBgTint && null != srcPos && node.imageLoading && (bgLayerStyle += "opacity: 0;"), 
            node.divBg.setAttribute("style", bgLayerStyle + radiusStyle), rawImgSrc ? (node.imgEl || (node.imgEl = document.createElement("img"), 
            node.imgEl.alt = "", node.imgEl.setAttribute("aria-hidden", "true"), node.imgEl.setAttribute("loading", "lazy"), 
            node.imgEl.removeAttribute("src"), node.imgEl.addEventListener("load", () => {
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
        node.imgEl.setAttribute("aria-hidden", "true"), node.imgEl.setAttribute("loading", "lazy"), 
        node.imgEl.removeAttribute("src"), node.imgEl.addEventListener("load", () => {
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
    var _props$color, _props$x, _props$y, _props$w, _props$h, _props$alpha, _props$ignoreParentAl, _props$autosize, _props$clipping, _props$colorTop, _props$colorBottom, _props$colorLeft, _props$colorRight, _ref, _ref2, _props$colorBl, _ref3, _ref4, _props$colorBr, _ref5, _ref6, _props$colorTl, _ref7, _ref8, _props$colorTr, _props$zIndex, _props$parent, _props$texture, _props$textureOptions2, _props$shader2, _props$src, _props$scale, _ref9, _props$scaleX, _ref10, _props$scaleY, _props$mount, _ref11, _props$mountX, _ref12, _props$mountY, _props$pivot, _ref13, _props$pivotX, _ref14, _props$pivotY, _props$rotation, _props$placeholderCol;
    const color = null !== (_props$color = props.color) && void 0 !== _props$color ? _props$color : 0;
    return {
        x: null !== (_props$x = props.x) && void 0 !== _props$x ? _props$x : 0,
        y: null !== (_props$y = props.y) && void 0 !== _props$y ? _props$y : 0,
        w: null !== (_props$w = props.w) && void 0 !== _props$w ? _props$w : 0,
        h: null !== (_props$h = props.h) && void 0 !== _props$h ? _props$h : 0,
        alpha: null !== (_props$alpha = props.alpha) && void 0 !== _props$alpha ? _props$alpha : 1,
        ignoreParentAlpha: null !== (_props$ignoreParentAl = props.ignoreParentAlpha) && void 0 !== _props$ignoreParentAl && _props$ignoreParentAl,
        autosize: null !== (_props$autosize = props.autosize) && void 0 !== _props$autosize && _props$autosize,
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
        this.preventCleanup = !0, this.destroyed = !1, this.animate = animate, this.stage = stage, 
        this.props = props, this.div._node = this, this.div.setAttribute("data-id", String(this.id)), 
        elMap.set(this, this.div);
        const parent = this.props.parent;
        parent instanceof DOMNode && parent.children.add(this), updateNodeParent(this), 
        updateNodeStyles(this), updateNodeData(this);
    }
    destroy() {
        var _this$div$parentNode;
        this.markDestroyed(), elMap.delete(this);
        const parent = this.props.parent;
        parent instanceof DOMNode && parent.children.delete(this), null == (_this$div$parentNode = this.div.parentNode) || _this$div$parentNode.removeChild(this.div);
    }
    markDestroyed() {
        this.destroyed = !0;
        for (const child of this.children) child.markDestroyed();
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
        this.renderState = renderState, isRenderStateInBounds(renderState) && this.applyPendingImageSrc(), 
        8 === renderState ? this.emit("inViewport", {
            previous: previous,
            current: renderState
        }) : 8 === previous && this.emit("outOfViewport", {
            previous: previous,
            current: renderState
        }), this.imgEl && (this.imgEl.dataset.state = CoreNodeRenderStateMap.get(renderState));
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
        this.imgEl.dataset.pendingSrc = pendingSrc, pendingSrc.startsWith("data:") ? this.imgEl.removeAttribute("crossorigin") : this.imgEl.crossOrigin = "anonymous", 
        this.imgEl.src = pendingSrc, this.imgEl.dataset.rawSrc = pendingSrc, this.imgEl.dataset.pendingSrc = "");
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
            var _props$text, _props$fontSize, _props$fontFamily, _props$fontStyle, _props$fontWeight, _props$forceLoad, _props$textAlign, _props$contain, _props$offsetY, _props$letterSpacing, _props$lineHeight, _props$maxLines, _props$maxWidth, _props$maxHeight, _props$verticalAlign, _props$overflowSuffix, _props$wordBreak;
            return {
                ...resolveNodeDefaults(props),
                text: null !== (_props$text = props.text) && void 0 !== _props$text ? _props$text : "",
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
        }
        return {
            type: type,
            props: props
        };
    }
};

function loadFontToDom(font) {
    if ("undefined" == typeof document || !("fonts" in document) || "undefined" == typeof FontFace || !font.fontUrl) return;
    const fontSet = document.fonts, names = Array.isArray(font.fontFamily) ? font.fontFamily : [ font.fontFamily ];
    for (let i = 0; i < names.length; i++) {
        var _fontSet$add;
        const fontFace = new FontFace(names[i], `url(${font.fontUrl})`);
        null == (_fontSet$add = fontSet.add) || _fontSet$add.call(fontSet, fontFace), fontFace.load().then(scheduleContainTextNodesMeasurement).catch(() => {});
    }
}

function startLightningRenderer(options, rootId = "app") {
    return renderer$1 = DOM_RENDERING && Config.domRendererEnabled ? new DOMRendererMain(options, rootId) : new Renderer(options, rootId), 
    function() {
        if (0 === pendingFontLoads.length) return;
        const queued = pendingFontLoads.splice(0, pendingFontLoads.length);
        for (let i = 0; i < queued.length; i++) {
            const pending = queued[i];
            attachFonts(pending.fonts).then(() => pending.resolve(), pending.reject);
        }
    }(), renderer$1;
}

var pendingFontLoads = [];

function attachFonts(fonts) {
    const enableDomRenderer = DOM_RENDERING && Config.domRendererEnabled;
    return Promise.all(fonts.map(font => {
        if (!enableDomRenderer && "type" in font && ("msdf" === font.type || "ssdf" === font.type)) return renderer$1.stage.loadFont("sdf", font);
        "fontUrl" in font && enableDomRenderer && loadFontToDom(font);
    }));
}

async function loadFonts(fonts) {
    if (void 0 !== renderer$1) return void (await attachFonts(fonts));
    const enableDomRenderer = DOM_RENDERING && Config.domRendererEnabled, deferred = [];
    for (let i = 0; i < fonts.length; i++) {
        const font = fonts[i];
        enableDomRenderer ? "fontUrl" in font && loadFontToDom(font) : (prefetchFont(font), 
        deferred.push(font));
    }
    0 !== deferred.length && await new Promise((resolve, reject) => {
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
        if (isArray(initialState)) {
            _super();
            const n = initialState.length;
            for (let i = 0; i < n; i++) this[i] = initialState[i];
        } else isString(initialState) ? _super(initialState) : _super(...Object.entries(initialState).filter(([_key, value]) => value).map(([key]) => key));
        return this.onChange = callback, this;
    }
    has(state) {
        return this.indexOf(state) >= 0 || 36 !== state.charCodeAt(0) && this.indexOf("$" + state) >= 0;
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
        if (newStates === this) this.length = 0; else if (isArray(newStates)) {
            const n = newStates.length;
            for (let i = 0; i < n; i++) this[i] = newStates[i];
            this.length = n;
        } else if (isString(newStates)) this.length = 0, this.push(newStates); else for (const state in newStates) if (newStates[state]) this.has(state) || this.push(state); else {
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
}, mappedHandlerNames = new Map, unmappedHandlerNames = new Map, needFocusDebugStyles = !0, _pendingHistoryKey = {
    keyPressed: void 0,
    mappedKey: void 0
};

var lastInputKey, _dispatchEvent, [focusPath, setFocusPath] = createSignal([]), updateFocusPath = (currentFocusedElm, prevFocusedElm) => {
    let current = currentFocusedElm;
    const fp = [];
    for (;current; ) {
        var _current$onFocus, _current$onFocusChang;
        if (!current.states.has(Config.focusStateKey) || current === currentFocusedElm) current.states.add(Config.focusStateKey), 
        null == (_current$onFocus = current.onFocus) || _current$onFocus.call(current, currentFocusedElm, prevFocusedElm, current), 
        null == (_current$onFocusChang = current.onFocusChanged) || _current$onFocusChang.call(current, !0, currentFocusedElm, prevFocusedElm, current);
        fp.push(current), current = current.parent;
    }
    const prevFp = focusPath();
    for (let i = 0; i < prevFp.length; i++) {
        const elm = prevFp[i];
        var _elm$onBlur, _elm$onFocusChanged;
        if (-1 === fp.indexOf(elm)) elm.states.remove(Config.focusStateKey), null == (_elm$onBlur = elm.onBlur) || _elm$onBlur.call(elm, currentFocusedElm, prevFocusedElm, elm), 
        null == (_elm$onFocusChanged = elm.onFocusChanged) || _elm$onFocusChanged.call(elm, !1, currentFocusedElm, prevFocusedElm, elm);
    }
    Config.focusDebug && ((prevFocusPath, newFocusPath) => {
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
}, lastGlobalKeyPressTime = 0, isElementThrottled = (elm, sameKey, currentTime) => void 0 !== elm.throttleInput && sameKey && void 0 !== elm._lastAnyKeyPressTime && currentTime - elm._lastAnyKeyPressTime < elm.throttleInput, propagateKeyPress = (e, mappedEvent, isUp = !1) => {
    const currentTime = performance.now(), key = e.key || e.keyCode, sameKey = lastInputKey === key;
    if (lastInputKey = key, !isUp && Config.throttleInput) {
        if (sameKey && currentTime - lastGlobalKeyPressTime < Config.throttleInput) return !0;
        lastGlobalKeyPressTime = currentTime;
    }
    isUp || (_pendingHistoryKey.keyPressed = key, _pendingHistoryKey.mappedKey = mappedEvent);
    const fp = focusPath();
    if (0 === fp.length) return !1;
    const keyBase = mappedEvent || e.key, names = mappedEvent ? mappedHandlerNames : unmappedHandlerNames;
    let handlerNames = names.get(keyBase);
    void 0 === handlerNames && (handlerNames = {
        on: mappedEvent ? "on" + keyBase : void 0,
        onRelease: mappedEvent ? "on" + keyBase + "Release" : void 0,
        onCapture: "onCapture" + keyBase,
        onCaptureRelease: "onCapture" + keyBase + "Release"
    }, names.set(keyBase, handlerNames));
    let finalFocusElm = fp[0];
    const captureEvent = isUp ? handlerNames.onCaptureRelease : handlerNames.onCapture, captureKey = isUp ? "onCaptureKeyRelease" : "onCaptureKey";
    for (let i = fp.length - 1; i >= 0; i--) {
        const elm = fp[i];
        if (isElementThrottled(elm, sameKey, currentTime)) return !0;
        const captureHandler = elm[captureEvent] || elm[captureKey];
        if (isFunction(captureHandler) && !0 === captureHandler.call(elm, e, elm, finalFocusElm, mappedEvent)) return elm._lastAnyKeyPressTime = currentTime, 
        !0;
    }
    finalFocusElm = fp[0];
    const eventHandlerKey = isUp ? handlerNames.onRelease : handlerNames.on;
    let lastHandlerSeen;
    for (let i = 0; i < fp.length; i++) {
        const elm = fp[i];
        if (isElementThrottled(elm, sameKey, currentTime)) return !0;
        let handled = !1;
        if (eventHandlerKey) {
            const eventHandler = elm[eventHandlerKey];
            isFunction(eventHandler) && (lastHandlerSeen = elm, handled = !0 === eventHandler.call(elm, e, elm, finalFocusElm));
        }
        if (!handled && !isUp) {
            const fallbackHandler = elm.onKeyPress;
            isFunction(fallbackHandler) && (lastHandlerSeen = elm, handled = !0 === fallbackHandler.call(elm, e, mappedEvent, elm, finalFocusElm));
        }
        if (handled) return elm._lastAnyKeyPressTime = currentTime, !0;
    }
    return !1;
}, keyNameId = e => e.key && "Unidentified" !== e.key ? e.key : void 0, keyCodeId = e => e.keyCode ? e.keyCode : void 0, suppressedKeys = new Map, findSuppression = (name, code) => {
    let found;
    return void 0 !== name && (found = suppressedKeys.get(name)), void 0 === found && void 0 !== code && (found = suppressedKeys.get(code)), 
    found;
}, liftSuppression = found => {
    var _found$onRelease;
    if (!found) return;
    const ids = found.ids;
    for (let i = 0; i < ids.length; i++) suppressedKeys.delete(ids[i]);
    null == (_found$onRelease = found.onRelease) || _found$onRelease.call(found);
}, handleKeyEvents = (keydown, keyup) => {
    if (keydown) {
        const name = keyNameId(keydown), code = keyCodeId(keydown);
        if (keydown.repeat) {
            if (findSuppression(name, code)) return !0;
        } else liftSuppression(findSuppression(name, code));
        return propagateKeyPress(keydown, keyMapEntries[keydown.key] || keyMapEntries[keydown.keyCode]);
    }
    return !!keyup && (liftSuppression(findSuppression(keyNameId(keyup), keyCodeId(keyup))), 
    propagateKeyPress(keyup, keyMapEntries[keyup.key] || keyMapEntries[keyup.keyCode], !0));
}, dispatchKeyDown = () => {
    const event = _dispatchEvent;
    var _event$preventDefault;
    (_dispatchEvent = void 0, handleKeyEvents(event, void 0) && Config.preventDefaultOnHandledKeys) && (null == (_event$preventDefault = event.preventDefault) || _event$preventDefault.call(event));
}, dispatchKeyUp = () => {
    const event = _dispatchEvent;
    var _event$preventDefault2;
    (_dispatchEvent = void 0, handleKeyEvents(void 0, event) && Config.preventDefaultOnHandledKeys) && (null == (_event$preventDefault2 = event.preventDefault) || _event$preventDefault2.call(event));
}, useFocusManager = (userKeyMap, target) => {
    userKeyMap && ((keyMap, targetMap) => {
        const newTargetMap = targetMap;
        for (const [key, value] of Object.entries(keyMap)) Array.isArray(value) ? value.forEach(v => {
            newTargetMap[v] = key;
        }) : null === value ? delete newTargetMap[key] : newTargetMap[value] = key;
    })(userKeyMap, keyMapEntries);
    const eventTarget = void 0 !== target && isFunction(target.addEventListener) ? target : document, owner = getOwner(), ownerContext = cb => {
        runWithOwner(owner, cb);
    };
    _signalWrapper = ownerContext, Config.setActiveElement = elm => ownerContext(() => setActiveElement(elm));
    const keyPressHandler = event => {
        _dispatchEvent = event, runWithOwner(owner, dispatchKeyDown);
    }, keyUpHandler = event => {
        _dispatchEvent = event, runWithOwner(owner, dispatchKeyUp);
    };
    eventTarget.addEventListener("keydown", keyPressHandler), eventTarget.addEventListener("keyup", keyUpHandler), 
    onCleanup(() => {
        eventTarget.removeEventListener("keydown", keyPressHandler), eventTarget.removeEventListener("keyup", keyUpHandler), 
        suppressedKeys.clear();
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
            elm !== prev && (updateFocusPath(elm, prev), _pendingHistoryKey.keyPressed = void 0, 
            _pendingHistoryKey.mappedKey = void 0, Config.setActiveElement(elm));
        })(element);
    }
}

function addToLayoutQueue(node) {
    layoutQueue.add(node), schedulePostMutation();
}

function removeItem(arr, item) {
    const index = arr.indexOf(item);
    if (index > -1) {
        const last = arr.length - 1;
        for (let i = index; i < last; i++) arr[i] = arr[i + 1];
        arr.pop();
    }
    return index;
}

var _fontFamilyWithWeight, _fontFamilyIdx = -1;

var EFFECT_SHADER_KEYS = [ "border", "borderTop", "borderRight", "borderBottom", "borderLeft", "shadow" ], hasOwnProperty = Object.prototype.hasOwnProperty, borderSideMap = {
    borderBottom: "bottom",
    borderLeft: "left",
    borderRight: "right",
    borderTop: "top"
}, shaderPropNames = Object.create(null), parseAndAssignShaderProps = (prefix, obj, props = {}) => {
    if (!obj) return;
    const side = borderSideMap[prefix], actualPrefix = side ? "border" : prefix;
    let names = shaderPropNames[prefix];
    void 0 === names && (names = Object.create(null), shaderPropNames[prefix] = names), 
    props[actualPrefix] = obj;
    for (const key in obj) {
        if (!hasOwnProperty.call(obj, key)) continue;
        let name = names[key];
        if (void 0 === name) {
            let transformedKey = "width" === key ? "w" : key;
            side && "w" === transformedKey && (transformedKey = side), name = actualPrefix + "-" + transformedKey, 
            names[key] = name;
        }
        props[name] = obj[key];
    }
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
        var _Config$rendererOptio;
        this._id = id, (null == (_Config$rendererOptio = Config.rendererOptions) ? void 0 : _Config$rendererOptio.inspector) && (this.data = {
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
        if (node.parent && (node.parent.removeChild(node), this.rendered || (this._hasRenderedChildren = !0)), 
        node.parent = this, beforeNode) {
            const children = this.children;
            removeItem(children, node);
            const index = children.indexOf(beforeNode);
            if (index > -1) {
                for (let i = children.length; i > index; i--) children[i] = children[i - 1];
                return void (children[index] = node);
            }
        }
        this.children.push(node);
    }
    removeChild(node) {
        removeItem(this.children, node) > -1 && (isElementNode(node) && node.onRemove && node.onRemove.call(node, node), 
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
        return this.rendered ? this.lng.animate(props, animationSettings || this.animationSettings || {}) : {
            start: () => {}
        };
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
        if (void 0 !== this._undoStyles && this._undoStyles.length > 0 || function(obj, keys) {
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
                        flexFitsWidth = ("row" === flexDirection || "row-reverse" === flexDirection) && "fixed" !== node.flexBoundary, 
                        flexFitsWidth && void 0 !== node.justifyContent && "flexStart" !== node.justifyContent && void 0 === node.flexBoundary && (flexFitsWidth = !1);
                    }
                    node.flexGrow || flexFitsWidth ? props.w = 0 : props.w = parentWidth - props.x, 
                    node._calcWidth = !0;
                }
                isNaN(props.h) && (props.h = parentHeight - props.y, node._calcHeight = !0), props.color || props.src || (props.color = 0);
            }
            if (SHADERS_ENABLED && props.shader && !("shaderType" in props.shader) && (props.shader = Config.convertToShader(node, props.shader)), 
            node.lng = renderer$1.createNode(props), node._hasRenderedChildren) {
                node._hasRenderedChildren = !1;
                for (const child of node.children) isElementNode(child) && isINode(child.lng) && (child.lng.parent = node.lng);
            }
        }
        if (node.rendered = !0, node.autosize && parent.requiresLayout() && node._layoutOnLoad(), 
        null == (_this$onCreate = this.onCreate) || _this$onCreate.call(this, this), null == (_this$onRender2 = this.onRender) || _this$onRender2.call(this, this), 
        node.onEvent) {
            const onEvent = node.onEvent;
            for (const name in onEvent) {
                if (!hasOwnProperty.call(onEvent, name)) continue;
                const handler = onEvent[name];
                "function" == typeof node.lng.on && node.lng.on(name, (_inode, data) => handler.call(node, node, data));
            }
        }
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

for (const key of [ "absX", "absY", "autosize", "clipping", "contain", "componentName", "componentLocation", "data", "destroyed", "forceLoad", "fontStretch", "fontStyle", "group", "ignoreParentAlpha", "imageType", "letterSpacing", "maxHeight", "maxLines", "maxWidth", "offsetY", "overflowSuffix", "placeholderColor", "preventCleanup", "scrollable", "scrollY", "srcHeight", "srcWidth", "srcX", "srcY", "strictBounds", "text", "textAlign", "textBaseline", "textOverflow", "texture", "textureOptions", "textRendererOverride", "verticalAlign", "wordBreak", "wordWrap" ]) Object.defineProperty(ElementNode.prototype, key, {
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
        mergeProps: mergeProps,
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
    return renderer.mergeProps = mergeProps, renderer;
}(solidOpts_default), rootNode = solidOpts_default.createElement("App"), render = function(code) {
    return solidRenderer.render(code, rootNode);
};

function createRenderer(rendererOptions, node) {
    return renderer = startLightningRenderer(rendererOptions || Config.rendererOptions, node || "app"), 
    rootNode.lng = renderer.root, rootNode.rendered = !0, renderer.on("idle", () => {
        tasksEnabled = !0, processTasks();
    }), {
        renderer: renderer,
        rootNode: rootNode,
        render: render
    };
}

var {effect: effect, memo: memo, createComponent: createComponent, createElement: createElement, createTextNode: createTextNode, insertNode: insertNode, insert: insert, spread: spread, setProp: setProp, use: use} = solidRenderer, taskQueue = [], tasksEnabled = !1;

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

export { onMount as $, For as A, frameTimeBucketLowerBound as At, createContext as B, isElementNode as C, Texture as Ct, Config as D, isTextureError as Dt, isInteger as E, TextureErrorCode as Et, Switch as F, createRoot as G, createMemo as H, batch as I, getListener as J, createSelector as K, children as L, Match as M, Show as N, activeElement as O, EventEmitter as Ot, Suspense as P, onCleanup as Q, createComponent$1 as R, hasFocus as S, SubTexture as St, isFunction as T, TextureError as Tt, createRenderEffect as U, createEffect as V, createResource as W, mergeProps as X, getOwner as Y, on as Z, ElementNode as _, TextNode$1 as _t, createElement as a, useContext as at, loadFonts as b, ImageTexture as bt, effect as c, clearFontPrefetch as ct, memo as d, PRECISION as dt, resetErrorBoundaries as et, rootNode as f, defaultVertex as ft, use as g, rgbaRow as gt, spread as h, rampScale as ht, createComponent as i, untrack as it, Index as j, normalizeBoundsMargin$1 as jt, $TRACK as k, frameTimeBucketIndex as kt, insert as l, prefetchFont as lt, setProp as m, paramsGlsl as mt, Text as n, sharedConfig as nt, createRenderer as o, Renderer as ot, scheduleTask as p, edgeWidthDefine as pt, createSignal as q, View as r, startTransition as rt, createTextNode as s, RendererCore as st, Dynamic as t, runWithOwner as tt, insertNode as u, assertTruthy as ut, focusPath as v, Node as vt, isFocused as w, TextureType as wt, renderer$1 as x, NoiseTexture as xt, useFocusManager as y, ColorTexture as yt, createComputed as z };