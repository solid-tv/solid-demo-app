import { A as For, D as Config, I as batch, N as Show, O as activeElement, Q as onCleanup, V as createEffect, Z as on, a as createElement, c as effect, d as memo, g as use, i as createComponent, l as insert, m as setProp, q as createSignal, s as createTextNode, u as insertNode, x as renderer } from "./render-RHsi_cL1.js";

import { n as LazyRow, t as LazyColumn } from "./Lazy-CE4stdmC.js";

import { n as resetCounter } from "./FPSCounter-DzngLbRw.js";

import { t as ContentBlock } from "./ContentBlock-BvXoenWN.js";

import { n as useFocusStack } from "./createFocusStack-Cz8mk92M.js";

import { c as TitleRow, i as Hero, t as AssetPanel } from "./components-5RPSAnbK.js";

import { r as styles_default } from "./styles-BcDKugwt.js";

import { n as setGlobalBackground } from "./state-DfqXE9aC.js";

import { t as debounce } from "./dist-C8QKmvmB.js";

var TOTAL_CYCLES = 2;

var NAV_DELAY_MS = 300;

var FRAME_TIME_SPLIT_MS = 32;

var FRAME_TIME_FINE_MS = 1;

var FRAME_TIME_COARSE_MS = 8;

var FRAME_TIME_BUCKET_COUNT = 45;

function getImageWorkersCount() {
    try {
        var _root$stage, _root$settings, _Config$rendererOptio;
        if (typeof window !== "undefined") {
            const param = new URLSearchParams(window.location.search).get("numImageWorkers");
            if (param !== null) {
                const parsed = parseInt(param, 10);
                if (!isNaN(parsed)) return parsed;
            }
        }
        const root = renderer;
        if ((root == null || (_root$stage = root.stage) == null || (_root$stage = _root$stage.options) == null ? void 0 : _root$stage.numImageWorkers) !== void 0) return root.stage.options.numImageWorkers;
        if ((root == null || (_root$settings = root.settings) == null ? void 0 : _root$settings.numImageWorkers) !== void 0) return root.settings.numImageWorkers;
        if ((Config == null || (_Config$rendererOptio = Config.rendererOptions) == null ? void 0 : _Config$rendererOptio.numImageWorkers) !== void 0) return Config.rendererOptions.numImageWorkers;
    } catch (e) {}
    return typeof window !== "undefined" && window.createImageBitmap ? 1 : 0;
}

function getTextureProcessingTimeLimit() {
    try {
        var _root$stage2, _root$settings2, _Config$rendererOptio2;
        if (typeof window !== "undefined") {
            const param = new URLSearchParams(window.location.search).get("textureProcessingTimeLimit");
            if (param !== null) {
                const parsed = parseFloat(param);
                if (!isNaN(parsed)) return parsed;
            }
        }
        const root = renderer;
        if ((root == null || (_root$stage2 = root.stage) == null || (_root$stage2 = _root$stage2.options) == null ? void 0 : _root$stage2.textureProcessingTimeLimit) !== void 0) return root.stage.options.textureProcessingTimeLimit;
        if ((root == null || (_root$settings2 = root.settings) == null ? void 0 : _root$settings2.textureProcessingTimeLimit) !== void 0) return root.settings.textureProcessingTimeLimit;
        if ((Config == null || (_Config$rendererOptio2 = Config.rendererOptions) == null ? void 0 : _Config$rendererOptio2.textureProcessingTimeLimit) !== void 0) return Config.rendererOptions.textureProcessingTimeLimit;
    } catch (e) {}
    return 4;
}

function getDeviceCores() {
    try {
        if (typeof navigator !== "undefined" && typeof navigator.hardwareConcurrency === "number" && navigator.hardwareConcurrency > 0) return `${navigator.hardwareConcurrency} cores`;
    } catch (e) {}
    return "cores ?";
}

function getPixelRatios() {
    let logical = typeof window !== "undefined" ? window.innerHeight / 1080 : 1;
    let physical = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
    const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
    try {
        var _root$stage3, _Config$rendererOptio3, _root$stage4, _Config$rendererOptio4;
        const root = renderer;
        if ((root == null || (_root$stage3 = root.stage) == null || (_root$stage3 = _root$stage3.options) == null ? void 0 : _root$stage3.deviceLogicalPixelRatio) !== void 0) logical = root.stage.options.deviceLogicalPixelRatio; else if ((Config == null || (_Config$rendererOptio3 = Config.rendererOptions) == null ? void 0 : _Config$rendererOptio3.deviceLogicalPixelRatio) !== void 0) logical = Config.rendererOptions.deviceLogicalPixelRatio;
        if ((root == null || (_root$stage4 = root.stage) == null || (_root$stage4 = _root$stage4.options) == null ? void 0 : _root$stage4.devicePhysicalPixelRatio) !== void 0) physical = root.stage.options.devicePhysicalPixelRatio; else if ((Config == null || (_Config$rendererOptio4 = Config.rendererOptions) == null ? void 0 : _Config$rendererOptio4.devicePhysicalPixelRatio) !== void 0) physical = Config.rendererOptions.devicePhysicalPixelRatio;
    } catch (e) {}
    return {
        logical: logical,
        physical: physical,
        dpr: dpr
    };
}

function createZeroArray(length) {
    const arr = new Array(length);
    for (let i = 0; i < length; i++) arr[i] = 0;
    return arr;
}

function frameTimeBucketLowerBound(index) {
    return index < FRAME_TIME_SPLIT_MS ? index * FRAME_TIME_FINE_MS : FRAME_TIME_SPLIT_MS + (index - FRAME_TIME_SPLIT_MS) * FRAME_TIME_COARSE_MS;
}

function percentileMs(buckets, fraction) {
    if (!buckets || buckets.length === 0) return 0;
    let total = 0;
    for (let i = 0; i < buckets.length; i++) total += buckets[i] || 0;
    if (total === 0) return 0;
    const target = total * fraction;
    let seen = 0;
    for (let i = 0; i < buckets.length; i++) {
        seen += buckets[i] || 0;
        if (seen >= target) return frameTimeBucketLowerBound(i);
    }
    return frameTimeBucketLowerBound(buckets.length - 1);
}

var Benchmark = props => {
    let cancelled = false;
    onCleanup(() => {
        cancelled = true;
    });
    const [heroContent, setHeroContent] = createSignal({});
    const [openPanel, setOpenPanel] = createSignal(false);
    const {storeFocus: storeFocus, restoreFocus: restoreFocus} = useFocusStack();
    let contentBlock, solidLogo, firstRun = true;
    let columnRef;
    let relaunchBtnRef;
    const bundleType = typeof window !== "undefined" && window.bundleType ? String(window.bundleType) : "unknown";
    const [benchmarkStatus, setBenchmarkStatus] = createSignal("Waiting for data...");
    const [benchmarkRunning, setBenchmarkRunning] = createSignal(false);
    const [benchmarkDone, setBenchmarkDone] = createSignal(false);
    const [dataLoaded, setDataLoaded] = createSignal(false);
    const [renderTime, setRenderTime] = createSignal(null);
    const [capabilities, setCapabilities] = createSignal(null);
    const [perfStats, setPerfStats] = createSignal(null);
    const [drawStats, setDrawStats] = createSignal(null);
    const [contextSpy, setContextSpy] = createSignal(null);
    let fpsValues = [];
    let animatedFpsValues = [];
    let cumulativeAllBuckets = createZeroArray(FRAME_TIME_BUCKET_COUNT);
    let cumulativeAnimBuckets = createZeroArray(FRAME_TIME_BUCKET_COUNT);
    let totalRenderedFrames = 0;
    let totalRenderedMs = 0;
    let totalIdleTicks = 0;
    let totalAnimatedFrames = 0;
    let totalAnimatedMs = 0;
    let worstMaxFrameTime = 0;
    let worstAnimatedMaxFrameTime = 0;
    let totalUpdateMs = 0;
    let totalRenderMs = 0;
    let totalUploadMs = 0;
    let worstMaxUpdateMs = 0;
    let worstMaxRenderMs = 0;
    let worstMaxUploadMs = 0;
    let totalUploadedTextures = 0;
    let totalUploadFrames = 0;
    let worstMaxUploadQueueSize = 0;
    let activeAnimationsSamples = [];
    let worstMaxActiveAnimations = 0;
    let maxRenderOps = 0;
    let maxQuads = 0;
    let totalKeyDispatchMs = 0;
    let worstKeyDispatchMs = 0;
    let keyDispatchCount = 0;
    let keyPressSamples = [];
    let lastContextSpy = null;
    let fpsListenerAttached = false;
    function safeFetchCapabilities() {
        try {
            const root = renderer;
            if (root && typeof root.getCapabilities === "function" && !capabilities()) {
                const caps = root.getCapabilities();
                if (caps) setCapabilities(caps);
            }
        } catch (e) {
            console.warn("Unable to fetch capabilities:", e);
        }
    }
    function attachFpsListener() {
        if (fpsListenerAttached) return;
        const root = renderer;
        if (!root || typeof root.on !== "function") return;
        fpsListenerAttached = true;
        safeFetchCapabilities();
        root.on("fpsUpdate", (_target, fpsData) => {
            const fps = typeof fpsData === "number" ? fpsData : fpsData == null ? void 0 : fpsData.fps;
            if ((fpsData == null ? void 0 : fpsData.capabilities) && !capabilities()) setCapabilities(fpsData.capabilities);
            if (typeof fps === "number" && fps > 5 && benchmarkRunning()) {
                fpsValues.push(fps);
                if (typeof fpsData === "object" && fpsData !== null) {
                    const payload = fpsData;
                    if (typeof payload.animatedFps === "number" && payload.animatedFrames > 0) animatedFpsValues.push(payload.animatedFps);
                    if (Array.isArray(payload.frameTimeBuckets)) for (let i = 0; i < Math.min(payload.frameTimeBuckets.length, cumulativeAllBuckets.length); i++) cumulativeAllBuckets[i] += payload.frameTimeBuckets[i] || 0;
                    if (Array.isArray(payload.animatedFrameTimeBuckets)) for (let i = 0; i < Math.min(payload.animatedFrameTimeBuckets.length, cumulativeAnimBuckets.length); i++) cumulativeAnimBuckets[i] += payload.animatedFrameTimeBuckets[i] || 0;
                    totalRenderedFrames += payload.renderedFrames || 0;
                    totalRenderedMs += payload.renderedMs || 0;
                    totalIdleTicks += payload.idleTicks || 0;
                    totalAnimatedFrames += payload.animatedFrames || 0;
                    totalAnimatedMs += payload.animatedMs || 0;
                    if (typeof payload.maxFrameTime === "number") worstMaxFrameTime = Math.max(worstMaxFrameTime, payload.maxFrameTime);
                    if (typeof payload.animatedMaxFrameTime === "number") worstAnimatedMaxFrameTime = Math.max(worstAnimatedMaxFrameTime, payload.animatedMaxFrameTime);
                    totalUpdateMs += payload.updateMs || 0;
                    totalRenderMs += payload.renderMs || 0;
                    totalUploadMs += payload.uploadMs || 0;
                    if (typeof payload.maxUpdateMs === "number") worstMaxUpdateMs = Math.max(worstMaxUpdateMs, payload.maxUpdateMs);
                    if (typeof payload.maxRenderMs === "number") worstMaxRenderMs = Math.max(worstMaxRenderMs, payload.maxRenderMs);
                    if (typeof payload.maxUploadMs === "number") worstMaxUploadMs = Math.max(worstMaxUploadMs, payload.maxUploadMs);
                    totalUploadedTextures += payload.uploadedTextures || 0;
                    totalUploadFrames += payload.uploadFrames || 0;
                    if (typeof payload.maxUploadQueueSize === "number") worstMaxUploadQueueSize = Math.max(worstMaxUploadQueueSize, payload.maxUploadQueueSize);
                    if (typeof payload.meanActiveAnimations === "number") activeAnimationsSamples.push(payload.meanActiveAnimations);
                    if (typeof payload.maxActiveAnimations === "number") worstMaxActiveAnimations = Math.max(worstMaxActiveAnimations, payload.maxActiveAnimations);
                    if (typeof payload.renderOps === "number") maxRenderOps = Math.max(maxRenderOps, payload.renderOps);
                    if (typeof payload.quads === "number") maxQuads = Math.max(maxQuads, payload.quads);
                    if (payload.contextSpyData) lastContextSpy = payload.contextSpyData;
                }
            }
        });
    }
    function simulateKeyDown(key, cycle, index) {
        try {
            const event = document.createEvent("Event");
            event.initEvent("keydown", true, true);
            Object.defineProperty(event, "key", {
                value: key,
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(event, "code", {
                value: key === "ArrowDown" ? "ArrowDown" : "ArrowUp",
                enumerable: true,
                configurable: true
            });
            const dispatchStart = performance.now();
            document.dispatchEvent(event);
            const dispatchMs = performance.now() - dispatchStart;
            totalKeyDispatchMs += dispatchMs;
            keyDispatchCount++;
            if (dispatchMs > worstKeyDispatchMs) worstKeyDispatchMs = dispatchMs;
            keyPressSamples.push({
                press: keyDispatchCount,
                cycle: cycle,
                direction: key === "ArrowDown" ? "down" : "up",
                index: index,
                ms: dispatchMs
            });
        } catch (e) {
            console.error("Failed to simulate key down:", e);
        }
    }
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function runBenchmark() {
        var _props$data, _currentCaps$webGlVer, _currentCaps$vertexAr;
        resetCounter();
        const totalRows = ((_props$data = props.data) == null || (_props$data = _props$data.rows) == null ? void 0 : _props$data.length) || 0;
        if (totalRows === 0) {
            setBenchmarkStatus("No rows to benchmark");
            return;
        }
        fpsValues = [];
        animatedFpsValues = [];
        cumulativeAllBuckets = createZeroArray(FRAME_TIME_BUCKET_COUNT);
        cumulativeAnimBuckets = createZeroArray(FRAME_TIME_BUCKET_COUNT);
        totalRenderedFrames = 0;
        totalRenderedMs = 0;
        totalIdleTicks = 0;
        totalAnimatedFrames = 0;
        totalAnimatedMs = 0;
        worstMaxFrameTime = 0;
        worstAnimatedMaxFrameTime = 0;
        totalUpdateMs = 0;
        totalRenderMs = 0;
        totalUploadMs = 0;
        worstMaxUpdateMs = 0;
        worstMaxRenderMs = 0;
        worstMaxUploadMs = 0;
        totalUploadedTextures = 0;
        totalUploadFrames = 0;
        worstMaxUploadQueueSize = 0;
        activeAnimationsSamples = [];
        worstMaxActiveAnimations = 0;
        maxRenderOps = 0;
        maxQuads = 0;
        totalKeyDispatchMs = 0;
        worstKeyDispatchMs = 0;
        keyDispatchCount = 0;
        keyPressSamples = [];
        lastContextSpy = null;
        setPerfStats(null);
        setDrawStats(null);
        setContextSpy(null);
        setBenchmarkRunning(true);
        setBenchmarkDone(false);
        attachFpsListener();
        setBenchmarkStatus("Starting benchmark...");
        await sleep(1500);
        for (let cycle = 0; cycle < TOTAL_CYCLES; cycle++) {
            if (cancelled) return;
            for (let i = 0; i < totalRows - 1; i++) {
                if (cancelled) return;
                setBenchmarkStatus(`Cycle ${cycle + 1}/${TOTAL_CYCLES} - Down ${i + 1}/${totalRows - 1}`);
                simulateKeyDown("ArrowDown", cycle + 1, i + 1);
                await sleep(NAV_DELAY_MS);
            }
            if (cancelled) return;
            for (let i = 0; i < totalRows - 1; i++) {
                if (cancelled) return;
                setBenchmarkStatus(`Cycle ${cycle + 1}/${TOTAL_CYCLES} - Up ${i + 1}/${totalRows - 1}`);
                simulateKeyDown("ArrowUp", cycle + 1, i + 1);
                await sleep(NAV_DELAY_MS);
            }
        }
        if (cancelled) return;
        const avgAnimatedFps = totalAnimatedMs > 0 && totalAnimatedFrames > 0 ? totalAnimatedFrames / (totalAnimatedMs / 1e3) : animatedFpsValues.length > 0 ? animatedFpsValues.reduce((a, b) => a + b, 0) / animatedFpsValues.length : 0;
        const avgFps = totalRenderedMs > 0 && totalRenderedFrames > 0 ? totalRenderedFrames / (totalRenderedMs / 1e3) : fpsValues.length > 0 ? fpsValues.reduce((a, b) => a + b, 0) / fpsValues.length : 0;
        const minFps = fpsValues.length > 0 ? Math.min.apply(null, fpsValues) : 0;
        const maxFps = fpsValues.length > 0 ? Math.max.apply(null, fpsValues) : 0;
        const animP95 = percentileMs(cumulativeAnimBuckets, .95);
        const animP99 = percentileMs(cumulativeAnimBuckets, .99);
        const allP95 = percentileMs(cumulativeAllBuckets, .95);
        const allP99 = percentileMs(cumulativeAllBuckets, .99);
        const avgActiveAnims = activeAnimationsSamples.length > 0 ? activeAnimationsSamples.reduce((a, b) => a + b, 0) / activeAnimationsSamples.length : 0;
        const meanUploadCost = totalUploadedTextures > 0 ? totalUploadMs / totalUploadedTextures : 0;
        const meanKeyDispatch = keyDispatchCount > 0 ? totalKeyDispatchMs / keyDispatchCount : 0;
        const worstKeyPresses = keyPressSamples.slice().sort((a, b) => b.ms - a.ms).slice(0, 5);
        const calculatedStats = {
            avgFps: avgFps,
            minFps: minFps,
            maxFps: maxFps,
            totalRenderedFrames: totalRenderedFrames,
            totalRenderedMs: totalRenderedMs,
            totalIdleTicks: totalIdleTicks,
            avgAnimatedFps: avgAnimatedFps,
            totalAnimatedFrames: totalAnimatedFrames,
            totalAnimatedMs: totalAnimatedMs,
            animP95: animP95,
            animP99: animP99,
            animMaxFrameTime: worstAnimatedMaxFrameTime,
            p95: allP95,
            p99: allP99,
            maxFrameTime: worstMaxFrameTime,
            totalUpdateMs: totalUpdateMs,
            totalRenderMs: totalRenderMs,
            totalUploadMs: totalUploadMs,
            maxUpdateMs: worstMaxUpdateMs,
            maxRenderMs: worstMaxRenderMs,
            maxUploadMs: worstMaxUploadMs,
            uploadedTextures: totalUploadedTextures,
            uploadFrames: totalUploadFrames,
            meanUploadCostMs: meanUploadCost,
            maxUploadQueueSize: worstMaxUploadQueueSize,
            avgActiveAnimations: avgActiveAnims,
            maxActiveAnimations: worstMaxActiveAnimations,
            renderOps: maxRenderOps,
            quads: maxQuads,
            keyPresses: keyDispatchCount,
            totalKeyDispatchMs: totalKeyDispatchMs,
            maxKeyDispatchMs: worstKeyDispatchMs,
            meanKeyDispatchMs: meanKeyDispatch,
            worstKeyPresses: worstKeyPresses
        };
        safeFetchCapabilities();
        const currentCaps = capabilities();
        const benchmarkResultsJson = {
            benchmark: {
                bundleType: bundleType,
                initialRenderTimeMs: renderTime() !== null ? parseFloat(renderTime().toFixed(2)) : null,
                totalCycles: TOTAL_CYCLES,
                navDelayMs: NAV_DELAY_MS
            },
            frameRateAndSmoothness: {
                avgAnimatedFps: parseFloat(calculatedStats.avgAnimatedFps.toFixed(2)),
                animP95Ms: calculatedStats.animP95,
                animP99Ms: calculatedStats.animP99,
                animMaxFrameTimeMs: parseFloat(calculatedStats.animMaxFrameTime.toFixed(2)),
                totalAnimatedFrames: calculatedStats.totalAnimatedFrames,
                totalAnimatedMs: parseFloat(calculatedStats.totalAnimatedMs.toFixed(2)),
                overallRenderedFps: parseFloat(calculatedStats.avgFps.toFixed(2)),
                minFps: parseFloat(calculatedStats.minFps.toFixed(2)),
                maxFps: parseFloat(calculatedStats.maxFps.toFixed(2)),
                allP95Ms: calculatedStats.p95,
                allP99Ms: calculatedStats.p99,
                allMaxFrameTimeMs: parseFloat(calculatedStats.maxFrameTime.toFixed(2)),
                totalRenderedFrames: calculatedStats.totalRenderedFrames,
                totalRenderedMs: parseFloat(calculatedStats.totalRenderedMs.toFixed(2)),
                totalIdleTicks: calculatedStats.totalIdleTicks
            },
            frameWorkSplit: {
                totalUpdateMs: parseFloat(calculatedStats.totalUpdateMs.toFixed(2)),
                maxUpdateMs: parseFloat(calculatedStats.maxUpdateMs.toFixed(2)),
                totalRenderMs: parseFloat(calculatedStats.totalRenderMs.toFixed(2)),
                maxRenderMs: parseFloat(calculatedStats.maxRenderMs.toFixed(2)),
                totalUploadMs: parseFloat(calculatedStats.totalUploadMs.toFixed(2)),
                maxUploadMs: parseFloat(calculatedStats.maxUploadMs.toFixed(2))
            },
            inputDispatch: {
                keyPresses: calculatedStats.keyPresses,
                totalMs: parseFloat(calculatedStats.totalKeyDispatchMs.toFixed(2)),
                maxMs: parseFloat(calculatedStats.maxKeyDispatchMs.toFixed(2)),
                meanMs: parseFloat(calculatedStats.meanKeyDispatchMs.toFixed(2)),
                worstPresses: calculatedStats.worstKeyPresses.map(sample => ({
                    press: sample.press,
                    cycle: sample.cycle,
                    direction: sample.direction,
                    index: sample.index,
                    ms: parseFloat(sample.ms.toFixed(2))
                }))
            },
            assetsAnimationsGeometry: {
                drawCalls: calculatedStats.renderOps,
                quads: calculatedStats.quads,
                uploadedTextures: calculatedStats.uploadedTextures,
                uploadFrames: calculatedStats.uploadFrames,
                meanUploadCostMs: parseFloat(calculatedStats.meanUploadCostMs.toFixed(2)),
                maxUploadQueueSize: calculatedStats.maxUploadQueueSize,
                avgActiveAnimations: parseFloat(calculatedStats.avgActiveAnimations.toFixed(2)),
                maxActiveAnimations: calculatedStats.maxActiveAnimations
            },
            glCallsPerInterval: lastContextSpy || null,
            rendererCapabilities: currentCaps ? {
                renderMode: currentCaps.renderMode,
                webGlVersion: (_currentCaps$webGlVer = currentCaps.webGlVersion) !== null && _currentCaps$webGlVer !== void 0 ? _currentCaps$webGlVer : null,
                vertexArrayObject: (_currentCaps$vertexAr = currentCaps.vertexArrayObject) !== null && _currentCaps$vertexAr !== void 0 ? _currentCaps$vertexAr : null,
                maxTextureSize: currentCaps.maxTextureSize,
                maxTextureUnits: currentCaps.maxTextureUnits,
                pixelRatio: {
                    physical: parseFloat(getPixelRatios().physical.toFixed(2)),
                    logical: parseFloat(getPixelRatios().logical.toFixed(2)),
                    windowDpr: parseFloat(getPixelRatios().dpr.toFixed(2))
                },
                textureProcessingTimeLimitMs: getTextureProcessingTimeLimit(),
                imageWorkers: getImageWorkersCount(),
                deviceCores: getDeviceCores()
            } : {
                pixelRatio: {
                    physical: parseFloat(getPixelRatios().physical.toFixed(2)),
                    logical: parseFloat(getPixelRatios().logical.toFixed(2)),
                    windowDpr: parseFloat(getPixelRatios().dpr.toFixed(2))
                },
                textureProcessingTimeLimitMs: getTextureProcessingTimeLimit(),
                imageWorkers: getImageWorkersCount(),
                deviceCores: getDeviceCores()
            }
        };
        console.log("=== BENCHMARK PERFORMANCE RESULTS (JSON) ===");
        console.log(JSON.stringify(benchmarkResultsJson, null, 2));
        batch(() => {
            setPerfStats(calculatedStats);
            setDrawStats({
                renderOps: maxRenderOps,
                quads: maxQuads
            });
            setContextSpy(lastContextSpy);
            setBenchmarkDone(true);
            setBenchmarkRunning(false);
        });
        setTimeout(() => {
            if (relaunchBtnRef && typeof relaunchBtnRef.focus === "function") relaunchBtnRef.focus();
        }, 100);
        if (fpsValues.length > 0 || totalRenderedFrames > 0) {
            const animRateStr = avgAnimatedFps > 0 ? `${avgAnimatedFps.toFixed(1)} FPS` : `${avgFps.toFixed(1)} FPS`;
            setBenchmarkStatus(`Anim: ${animRateStr} (p95: ${animP95}ms, max: ${worstAnimatedMaxFrameTime.toFixed(0)}ms) | All: ${avgFps.toFixed(1)} FPS`);
        } else setBenchmarkStatus("Done - No FPS samples collected");
    }
    createEffect(() => {
        var _props$data2, _rows$;
        const rows = (_props$data2 = props.data) == null ? void 0 : _props$data2.rows;
        if (!rows || rows.length === 0) return;
        const firstItems = ((_rows$ = rows[0]) == null ? void 0 : _rows$.items) ? rows[0].items() : null;
        if (firstItems && firstItems.length > 0) {
            if (!dataLoaded()) {
                const startTime = performance.now();
                setDataLoaded(true);
                if (renderer && typeof renderer.on === "function") renderer.on("idle", () => {
                    if (renderTime() === null) setRenderTime(performance.now() - startTime);
                });
            }
            if (!benchmarkDone() && !benchmarkRunning()) {
                attachFpsListener();
                const timeoutId = setTimeout(() => {
                    if (!cancelled) runBenchmark();
                }, 2e3);
                onCleanup(() => clearTimeout(timeoutId));
            }
        }
    });
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
    const overlayBgStyle = {
        width: 700,
        height: 140,
        color: 204,
        borderRadius: 12
    };
    const overlayTitleStyle = {
        fontFamily: "Roboto",
        fontSize: 28,
        color: 4294967295,
        lineHeight: 34
    };
    const overlayStatusStyle = {
        fontFamily: "Roboto",
        fontSize: 22,
        lineHeight: 28
    };
    const resultsBgStyle = {
        color: 245,
        borderRadius: 12
    };
    const OVERLAY_WIDTH = 700;
    const ROW_H = 26;
    const resultsHeaderStyle = {
        fontFamily: "Roboto",
        fontSize: 16,
        lineHeight: 22,
        color: 14221311
    };
    const resultsLabelStyle = {
        fontFamily: "Roboto",
        fontSize: 17,
        lineHeight: 24,
        color: 2661195519
    };
    const resultsValueStyle = {
        fontFamily: "Roboto",
        fontSize: 17,
        lineHeight: 24,
        color: 4294967295
    };
    const ResultRow = rowProps => (() => {
        var _el$ = createElement("view"), _el$2 = createElement("text"), _el$3 = createElement("text");
        insertNode(_el$, _el$2);
        insertNode(_el$, _el$3);
        setProp(_el$2, "x", 28);
        setProp(_el$2, "style", resultsLabelStyle);
        insert(_el$2, () => rowProps.label);
        setProp(_el$3, "x", 350);
        setProp(_el$3, "style", resultsValueStyle);
        insert(_el$3, () => rowProps.value);
        effect(_$p => setProp(_el$, "y", rowProps.y, _$p));
        return _el$;
    })();
    const SectionHeader = headerProps => (() => {
        var _el$4 = createElement("view"), _el$5 = createElement("text");
        insertNode(_el$4, _el$5);
        setProp(_el$5, "x", 28);
        setProp(_el$5, "style", resultsHeaderStyle);
        insert(_el$5, () => headerProps.title);
        effect(_$p => setProp(_el$4, "y", headerProps.y, _$p));
        return _el$4;
    })();
    const SectionDivider = divProps => (() => {
        var _el$6 = createElement("view");
        setProp(_el$6, "width", OVERLAY_WIDTH - 56);
        setProp(_el$6, "height", 1);
        setProp(_el$6, "x", 28);
        setProp(_el$6, "color", 4294967074);
        effect(_$p => setProp(_el$6, "y", divProps.y, _$p));
        return _el$6;
    })();
    const webGlLabel = caps => {
        var _caps$webGlVersion;
        return caps.renderMode === "webgl" ? `WebGL ${(_caps$webGlVersion = caps.webGlVersion) !== null && _caps$webGlVersion !== void 0 ? _caps$webGlVersion : "?"}` : "Canvas2D";
    };
    const glEntries = () => {
        const spy = contextSpy();
        if (!spy) return [];
        const entries = [];
        for (const key in spy) if (Object.prototype.hasOwnProperty.call(spy, key)) entries.push([ key, spy[key] || 0 ]);
        return entries.sort((a, b) => b[1] - a[1]);
    };
    const relaunchBtnStyle = {
        width: 320,
        height: 44,
        color: 858993663,
        borderRadius: 8,
        $focus: {
            color: 14221311
        }
    };
    const relaunchBtnTextStyle = {
        fontFamily: "Roboto",
        fontSize: 18,
        lineHeight: 24,
        color: 4294967295,
        $focus: {
            color: 255
        }
    };
    const SEC_GL_Y = 486;
    const glStartY = 512;
    const glRowsCount = () => glEntries().length;
    const glRowsHeight = () => glRowsCount() > 0 ? glRowsCount() * ROW_H : ROW_H;
    const dividerCapsY = () => glStartY + glRowsHeight() + 6;
    const secCapsY = () => dividerCapsY() + 10;
    const capsStartY = () => secCapsY() + 26;
    const relaunchBtnY = () => capsStartY() + 8 * ROW_H + 16;
    const overlayHeight = () => relaunchBtnY() + 44 + 18;
    return createComponent(Show, {
        get when() {
            return dataLoaded();
        },
        get fallback() {
            return (() => {
                var _el$25 = createElement("text");
                insertNode(_el$25, createTextNode(`Loading Data...`));
                setProp(_el$25, "x", 960);
                setProp(_el$25, "y", 540);
                setProp(_el$25, "fontSize", 40);
                setProp(_el$25, "color", 4294967295);
                setProp(_el$25, "mount", .5);
                return _el$25;
            })();
        },
        get children() {
            var _el$7 = createElement("view"), _el$8 = createElement("view"), _el$9 = createElement("text"), _el$1 = createElement("view"), _el$10 = createElement("view"), _el$11 = createElement("text"), _el$13 = createElement("view"), _el$14 = createElement("text"), _el$16 = createElement("text"), _el$17 = createElement("text"), _el$18 = createElement("text");
            insertNode(_el$7, _el$8);
            insertNode(_el$7, _el$13);
            setProp(_el$7, "forwardFocus", 2);
            insertNode(_el$8, _el$9);
            insertNode(_el$8, _el$1);
            insertNode(_el$8, _el$10);
            insertNode(_el$8, _el$11);
            var _ref$ = solidLogo;
            typeof _ref$ === "function" ? use(_ref$, _el$8) : solidLogo = _el$8;
            setProp(_el$8, "width", 300);
            setProp(_el$8, "height", 150);
            setProp(_el$8, "x", 162);
            setProp(_el$8, "y", 80);
            setProp(_el$8, "zIndex", 105);
            insertNode(_el$9, createTextNode(`Built With:`));
            setProp(_el$9, "x", 80);
            setProp(_el$9, "fontSize", 28);
            setProp(_el$9, "color", 4143380121);
            setProp(_el$1, "y", 32);
            setProp(_el$1, "src", "./assets/solidWord.png");
            setProp(_el$1, "width", 280);
            setProp(_el$1, "height", 52);
            setProp(_el$10, "x", 0);
            setProp(_el$10, "y", 110);
            setProp(_el$10, "src", "./assets/tmdb.png");
            setProp(_el$10, "width", 80);
            setProp(_el$10, "height", 41);
            insertNode(_el$11, createTextNode(`This product uses the TMDB API but is not endorsed or certified by TMDB.`));
            setProp(_el$11, "x", 90);
            setProp(_el$11, "y", 110);
            setProp(_el$11, "contain", "width");
            setProp(_el$11, "width", 160);
            setProp(_el$11, "fontSize", 12);
            setProp(_el$11, "color", 4143380121);
            insert(_el$7, createComponent(ContentBlock, {
                ref(r$) {
                    var _ref$2 = contentBlock;
                    typeof _ref$2 === "function" ? _ref$2(r$) : contentBlock = r$;
                },
                y: 300,
                x: 162,
                get content() {
                    return heroContent();
                }
            }), _el$13);
            insert(_el$7, createComponent(LazyColumn, {
                ref(r$) {
                    var _ref$3 = columnRef;
                    typeof _ref$3 === "function" ? _ref$3(r$) : columnRef = r$;
                },
                y: 500,
                upCount: 3,
                get each() {
                    var _props$data3;
                    return ((_props$data3 = props.data) == null ? void 0 : _props$data3.rows) || [];
                },
                id: "BenchmarkColumn",
                onSelectedChanged: onRowChanged,
                onEnter: () => setOpenPanel(true),
                get autofocus() {
                    return memo(() => {
                        var _props$data4;
                        return !!((_props$data4 = props.data) == null || (_props$data4 = _props$data4.rows) == null || (_props$data4 = _props$data4[0]) == null ? void 0 : _props$data4.items);
                    })() ? props.data.rows[0].items() : void 0;
                },
                gap: 40,
                throttleInput: 250,
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
            }), _el$13);
            insertNode(_el$13, _el$14);
            insertNode(_el$13, _el$16);
            insertNode(_el$13, _el$17);
            insertNode(_el$13, _el$18);
            setProp(_el$13, "x", 610);
            setProp(_el$13, "y", 20);
            setProp(_el$13, "zIndex", 200);
            setProp(_el$13, "style", overlayBgStyle);
            insertNode(_el$14, createTextNode(`Benchmark (version: ###)`));
            setProp(_el$14, "x", 20);
            setProp(_el$14, "y", 16);
            setProp(_el$14, "style", overlayTitleStyle);
            setProp(_el$16, "x", 360);
            setProp(_el$16, "y", 20);
            setProp(_el$16, "width", 320);
            setProp(_el$16, "contain", "width");
            setProp(_el$16, "textAlign", "right");
            setProp(_el$16, "fontSize", 24);
            insert(_el$16, bundleType);
            setProp(_el$17, "x", 20);
            setProp(_el$17, "y", 54);
            setProp(_el$17, "contain", "width");
            setProp(_el$17, "width", 660);
            setProp(_el$17, "style", overlayStatusStyle);
            insert(_el$17, benchmarkStatus);
            setProp(_el$18, "x", 20);
            setProp(_el$18, "y", 92);
            setProp(_el$18, "style", overlayStatusStyle);
            setProp(_el$18, "color", 16746751);
            insert(_el$18, (() => {
                var _c$ = memo(() => renderTime() !== null);
                return () => {
                    var _renderTime;
                    return _c$() ? `Initial Render: ${(_renderTime = renderTime()) == null ? void 0 : _renderTime.toFixed(2)}ms` : "Rendering...";
                };
            })());
            insert(_el$7, createComponent(Show, {
                get when() {
                    return benchmarkDone();
                },
                get children() {
                    var _el$19 = createElement("view"), _el$20 = createElement("text"), _el$22 = createElement("view"), _el$23 = createElement("text");
                    insertNode(_el$19, _el$20);
                    insertNode(_el$19, _el$22);
                    setProp(_el$19, "x", 610);
                    setProp(_el$19, "y", 175);
                    setProp(_el$19, "zIndex", 8e3);
                    setProp(_el$19, "width", OVERLAY_WIDTH);
                    setProp(_el$19, "style", resultsBgStyle);
                    insertNode(_el$20, createTextNode(`Performance Breakdown`));
                    setProp(_el$20, "x", 28);
                    setProp(_el$20, "y", 14);
                    setProp(_el$20, "style", overlayTitleStyle);
                    insert(_el$19, createComponent(SectionHeader, {
                        y: 50,
                        title: "FRAME RATE & SMOOTHNESS"
                    }), _el$22);
                    insert(_el$19, createComponent(ResultRow, {
                        y: 74,
                        label: "Animated FPS",
                        get value() {
                            return memo(() => !!perfStats())() ? `${perfStats().avgAnimatedFps.toFixed(1)} FPS` : "—";
                        }
                    }), _el$22);
                    insert(_el$19, createComponent(ResultRow, {
                        y: 100,
                        label: "Anim p95 / p99",
                        get value() {
                            return memo(() => !!perfStats())() ? `${perfStats().animP95}ms / ${perfStats().animP99}ms` : "—";
                        }
                    }), _el$22);
                    insert(_el$19, createComponent(ResultRow, {
                        y: 126,
                        label: "Worst Anim Frame",
                        get value() {
                            return memo(() => !!perfStats())() ? `${perfStats().animMaxFrameTime.toFixed(1)}ms` : "—";
                        }
                    }), _el$22);
                    insert(_el$19, createComponent(ResultRow, {
                        y: 152,
                        label: "Overall Rendered FPS",
                        get value() {
                            return memo(() => !!perfStats())() ? `${perfStats().avgFps.toFixed(1)} FPS (${perfStats().totalRenderedFrames}f)` : "—";
                        }
                    }), _el$22);
                    insert(_el$19, createComponent(ResultRow, {
                        y: 178,
                        label: "All p95 / p99 / Max",
                        get value() {
                            return memo(() => !!perfStats())() ? `${perfStats().p95}ms / ${perfStats().p99}ms / ${perfStats().maxFrameTime.toFixed(1)}ms` : "—";
                        }
                    }), _el$22);
                    insert(_el$19, createComponent(ResultRow, {
                        y: 204,
                        label: "Frames / Idle Polls",
                        get value() {
                            return memo(() => !!perfStats())() ? `${perfStats().totalRenderedFrames} drew / ${perfStats().totalIdleTicks} idle` : "—";
                        }
                    }), _el$22);
                    insert(_el$19, createComponent(SectionDivider, {
                        y: 232
                    }), _el$22);
                    insert(_el$19, createComponent(SectionHeader, {
                        y: 242,
                        title: "FRAME WORK SPLIT (INTERVAL / PEAK)"
                    }), _el$22);
                    insert(_el$19, createComponent(ResultRow, {
                        y: 266,
                        label: "Scene Update (upd)",
                        get value() {
                            return memo(() => !!perfStats())() ? `${perfStats().totalUpdateMs.toFixed(1)}ms total | ${perfStats().maxUpdateMs.toFixed(1)}ms peak` : "—";
                        }
                    }), _el$22);
                    insert(_el$19, createComponent(ResultRow, {
                        y: 292,
                        label: "Render Pass (rnd)",
                        get value() {
                            return memo(() => !!perfStats())() ? `${perfStats().totalRenderMs.toFixed(1)}ms total | ${perfStats().maxRenderMs.toFixed(1)}ms peak` : "—";
                        }
                    }), _el$22);
                    insert(_el$19, createComponent(ResultRow, {
                        y: 318,
                        label: "Texture Upload (upl)",
                        get value() {
                            return memo(() => !!perfStats())() ? `${perfStats().totalUploadMs.toFixed(1)}ms total | ${perfStats().maxUploadMs.toFixed(1)}ms peak` : "—";
                        }
                    }), _el$22);
                    insert(_el$19, createComponent(SectionDivider, {
                        y: 346
                    }), _el$22);
                    insert(_el$19, createComponent(SectionHeader, {
                        y: 356,
                        title: "ASSETS, ANIMATIONS & GEOMETRY"
                    }), _el$22);
                    insert(_el$19, createComponent(ResultRow, {
                        y: 380,
                        label: "Draw Calls / Quads",
                        get value() {
                            return memo(() => !!drawStats())() ? `${drawStats().renderOps} draws / ${drawStats().quads} quads` : "—";
                        }
                    }), _el$22);
                    insert(_el$19, createComponent(ResultRow, {
                        y: 406,
                        label: "Texture Uploads",
                        get value() {
                            return memo(() => !!perfStats())() ? `${perfStats().uploadedTextures} tex / ${perfStats().uploadFrames}f (${perfStats().meanUploadCostMs.toFixed(1)}ms avg)` : "—";
                        }
                    }), _el$22);
                    insert(_el$19, createComponent(ResultRow, {
                        y: 432,
                        label: "Upload Queue Peak",
                        get value() {
                            return memo(() => !!perfStats())() ? `q <= ${perfStats().maxUploadQueueSize}` : "—";
                        }
                    }), _el$22);
                    insert(_el$19, createComponent(ResultRow, {
                        y: 458,
                        label: "Active Animations",
                        get value() {
                            return memo(() => !!perfStats())() ? `${perfStats().avgActiveAnimations.toFixed(1)} avg | ${perfStats().maxActiveAnimations} peak` : "—";
                        }
                    }), _el$22);
                    insert(_el$19, createComponent(SectionDivider, {
                        y: 486
                    }), _el$22);
                    insert(_el$19, createComponent(SectionHeader, {
                        y: SEC_GL_Y,
                        title: "GL CALLS / INTERVAL"
                    }), _el$22);
                    insert(_el$19, createComponent(Show, {
                        get when() {
                            return glEntries().length > 0;
                        },
                        get fallback() {
                            return (() => {
                                var _el$27 = createElement("text");
                                insertNode(_el$27, createTextNode(`off (?contextSpy=true)`));
                                setProp(_el$27, "x", 350);
                                setProp(_el$27, "y", SEC_GL_Y);
                                setProp(_el$27, "style", resultsValueStyle);
                                return _el$27;
                            })();
                        },
                        get children() {
                            return createComponent(For, {
                                get each() {
                                    return glEntries();
                                },
                                children: ([name, count], i) => createComponent(ResultRow, {
                                    get y() {
                                        return glStartY + i() * ROW_H;
                                    },
                                    label: name,
                                    value: `${count}`
                                })
                            });
                        }
                    }), _el$22);
                    insert(_el$19, createComponent(SectionDivider, {
                        get y() {
                            return dividerCapsY();
                        }
                    }), _el$22);
                    insert(_el$19, createComponent(SectionHeader, {
                        get y() {
                            return secCapsY();
                        },
                        title: "RENDERER CAPABILITIES"
                    }), _el$22);
                    insert(_el$19, createComponent(Show, {
                        get when() {
                            return capabilities();
                        },
                        get fallback() {
                            return (() => {
                                var _el$29 = createElement("text");
                                insertNode(_el$29, createTextNode(`Capabilities unavailable`));
                                setProp(_el$29, "x", 28);
                                setProp(_el$29, "style", resultsLabelStyle);
                                effect(_$p => setProp(_el$29, "y", capsStartY(), _$p));
                                return _el$29;
                            })();
                        },
                        get children() {
                            return [ createComponent(ResultRow, {
                                get y() {
                                    return capsStartY();
                                },
                                label: "Render Mode",
                                get value() {
                                    return capabilities().renderMode;
                                }
                            }), createComponent(ResultRow, {
                                get y() {
                                    return capsStartY() + ROW_H;
                                },
                                label: "WebGL Version",
                                get value() {
                                    return webGlLabel(capabilities());
                                }
                            }), createComponent(ResultRow, {
                                get y() {
                                    return capsStartY() + 2 * ROW_H;
                                },
                                label: "Vertex Array Obj (VAO)",
                                get value() {
                                    return capabilities().vertexArrayObject ? "Enabled (on)" : "Disabled (off)";
                                }
                            }), createComponent(ResultRow, {
                                get y() {
                                    return capsStartY() + 3 * ROW_H;
                                },
                                label: "Max Texture Size",
                                get value() {
                                    return `${capabilities().maxTextureSize}px`;
                                }
                            }), createComponent(ResultRow, {
                                get y() {
                                    return capsStartY() + 4 * ROW_H;
                                },
                                label: "Max Texture Units",
                                get value() {
                                    return `${capabilities().maxTextureUnits} units`;
                                }
                            }), createComponent(ResultRow, {
                                get y() {
                                    return capsStartY() + 5 * ROW_H;
                                },
                                label: "Pixel Ratio (Phys / Log)",
                                get value() {
                                    return `${getPixelRatios().physical.toFixed(2)}x / ${getPixelRatios().logical.toFixed(2)}x`;
                                }
                            }), createComponent(ResultRow, {
                                get y() {
                                    return capsStartY() + 6 * ROW_H;
                                },
                                label: "Image Workers",
                                get value() {
                                    return `${getImageWorkersCount()} (${getDeviceCores()})`;
                                }
                            }), createComponent(ResultRow, {
                                get y() {
                                    return capsStartY() + 7 * ROW_H;
                                },
                                label: "Tex Process Limit",
                                get value() {
                                    return `${getTextureProcessingTimeLimit()}ms`;
                                }
                            }) ];
                        }
                    }), _el$22);
                    insertNode(_el$22, _el$23);
                    var _ref$4 = relaunchBtnRef;
                    typeof _ref$4 === "function" ? use(_ref$4, _el$22) : relaunchBtnRef = _el$22;
                    setProp(_el$22, "x", (OVERLAY_WIDTH - 320) / 2);
                    setProp(_el$22, "style", relaunchBtnStyle);
                    setProp(_el$22, "forwardStates", true);
                    setProp(_el$22, "autofocus", true);
                    setProp(_el$22, "onEnter", () => {
                        document.location.reload();
                        return true;
                    });
                    insertNode(_el$23, createTextNode(`Relaunch Benchmark`));
                    setProp(_el$23, "x", 160);
                    setProp(_el$23, "y", 22);
                    setProp(_el$23, "mount", .5);
                    setProp(_el$23, "style", relaunchBtnTextStyle);
                    effect(_p$ => {
                        var _v$ = overlayHeight(), _v$2 = relaunchBtnY();
                        _v$ !== _p$.e && (_p$.e = setProp(_el$19, "height", _v$, _p$.e));
                        _v$2 !== _p$.t && (_p$.t = setProp(_el$22, "y", _v$2, _p$.t));
                        return _p$;
                    }, {
                        e: void 0,
                        t: void 0
                    });
                    return _el$19;
                }
            }), null);
            insert(_el$7, createComponent(AssetPanel, {
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
            effect(_p$ => {
                var _v$3 = bundleType.indexOf("LEGACY") !== -1 ? 4291559679 : 16746751, _v$4 = benchmarkDone() ? 16746751 : benchmarkRunning() ? 4291559679 : 2863311615;
                _v$3 !== _p$.e && (_p$.e = setProp(_el$16, "color", _v$3, _p$.e));
                _v$4 !== _p$.t && (_p$.t = setProp(_el$17, "color", _v$4, _p$.t));
                return _p$;
            }, {
                e: void 0,
                t: void 0
            });
            return _el$7;
        }
    });
};

export { Benchmark as default };
//# sourceMappingURL=Benchmark-Wh0FbHSP.js.map