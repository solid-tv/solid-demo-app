import { a as createElement, h as spread, l as insert, m as setProp, q as createSignal, s as createTextNode, u as insertNode } from "./render-B5QjUuTk.js";

import { t as mergeProps } from "./mergeProps-BRc28Ucx.js";

var fpsStyle = {
    color: 255,
    height: 216,
    width: 330,
    x: 1900,
    y: 6,
    mountX: 1,
    alpha: 1,
    zIndex: 100
};

var fpsLabel = {
    x: 10,
    fontSize: 20,
    textColor: 4143380223
};

var fpsValue = {
    fontSize: 22,
    textColor: 4143380223
};

var [fps, setFps] = createSignal(0);

var [avgFps, setAvgFps] = createSignal(0);

var [minFps, setMinFps] = createSignal(99);

var [maxFps, setMaxFps] = createSignal(0);

var [quads, setQuads] = createSignal(0);

var [criticalThresholdSignal, setCriticalThresholdSignal] = createSignal("");

var [targetThresholdSignal, setTargetThresholdSignal] = createSignal("");

var [renderableMemUsedSignal, setRenderableMemUsedSignal] = createSignal("");

var [memUsedSignal, setMemUsedSignal] = createSignal("");

var [renderableTexturesLoadedSignal, setRenderableTexturesLoadedSignal] = createSignal(0);

var [loadedTexturesSignal, setLoadedTexturesSignal] = createSignal(0);

var [renderOps, setRenderOps] = createSignal(0);

var count = 0;

var totalFps = 0;

var infoFontSize = 14;

var resetCounter = () => {
    totalFps = 0;
    count = 0;
    setMinFps(99);
};

function bytesToMb(bytes) {
    return (bytes / 1024 / 1024).toFixed(2) + " Mb";
}

var calcFps = fps => {
    if (!fps) return;
    setFps(fps);
    setMinFps(prev => Math.min(fps, prev));
    setMaxFps(prev => Math.max(fps, prev));
    totalFps += fps;
    count++;
    setAvgFps(Math.round(totalFps / count));
};

function updateMemoryInfo(stage) {
    const memInfo = stage.txMemManager.getMemoryInfo();
    setCriticalThresholdSignal(bytesToMb(memInfo.criticalThreshold));
    setTargetThresholdSignal(bytesToMb(memInfo.targetThreshold));
    setRenderableMemUsedSignal(bytesToMb(memInfo.renderableMemUsed));
    setMemUsedSignal(bytesToMb(memInfo.memUsed));
    setRenderableTexturesLoadedSignal(memInfo.renderableTexturesLoaded);
    setLoadedTexturesSignal(memInfo.loadedTextures);
}

var frameCount = 0;

function setupFPS(root) {
    root.renderer.on("fpsUpdate", (target, fpsData) => {
        const fps = typeof fpsData === "number" ? fpsData : fpsData.fps;
        if (fps > 5) {
            calcFps(fps);
            if (frameCount % 10 === 0) {
                updateMemoryInfo(target.stage);
                frameCount = 0;
            }
            frameCount++;
        }
    });
    root.renderer.on("renderUpdate", (target, quadsData) => {
        setQuads(quadsData.quads);
        setRenderOps(quadsData.renderOps);
    });
}

var FPSCounter = props => (() => {
    var _el$ = createElement("view"), _el$2 = createElement("view"), _el$3 = createElement("text"), _el$5 = createElement("text"), _el$6 = createElement("view"), _el$7 = createElement("text"), _el$9 = createElement("text"), _el$0 = createElement("view"), _el$1 = createElement("text"), _el$11 = createElement("text"), _el$12 = createElement("view"), _el$13 = createElement("text"), _el$15 = createElement("text"), _el$16 = createElement("view"), _el$17 = createElement("view"), _el$18 = createElement("text"), _el$20 = createElement("text"), _el$21 = createElement("view"), _el$22 = createElement("text"), _el$24 = createElement("text"), _el$25 = createElement("view"), _el$26 = createElement("text"), _el$28 = createElement("text"), _el$29 = createElement("view"), _el$30 = createElement("text"), _el$32 = createElement("text"), _el$33 = createElement("view"), _el$34 = createElement("text"), _el$36 = createElement("text"), _el$37 = createElement("view"), _el$38 = createElement("text"), _el$40 = createElement("text"), _el$41 = createElement("view"), _el$42 = createElement("text"), _el$44 = createElement("text"), _el$45 = createElement("view"), _el$46 = createElement("text"), _el$48 = createElement("text");
    insertNode(_el$, _el$2);
    insertNode(_el$, _el$6);
    insertNode(_el$, _el$0);
    insertNode(_el$, _el$12);
    insertNode(_el$, _el$16);
    spread(_el$, mergeProps(props, {
        style: fpsStyle
    }), true);
    insertNode(_el$2, _el$3);
    insertNode(_el$2, _el$5);
    setProp(_el$2, "y", 6);
    insertNode(_el$3, createTextNode(`FPS:`));
    setProp(_el$3, "style", fpsLabel);
    setProp(_el$5, "style", fpsValue);
    setProp(_el$5, "x", 90);
    insert(_el$5, () => fps().toString());
    insertNode(_el$6, _el$7);
    insertNode(_el$6, _el$9);
    setProp(_el$6, "y", 6);
    setProp(_el$6, "x", 160);
    insertNode(_el$7, createTextNode(`AVG:`));
    setProp(_el$7, "style", fpsLabel);
    setProp(_el$9, "style", fpsValue);
    setProp(_el$9, "x", 100);
    insert(_el$9, () => avgFps().toString());
    insertNode(_el$0, _el$1);
    insertNode(_el$0, _el$11);
    setProp(_el$0, "x", 0);
    setProp(_el$0, "y", 26);
    insertNode(_el$1, createTextNode(`MIN:`));
    setProp(_el$1, "style", fpsLabel);
    setProp(_el$11, "style", fpsValue);
    setProp(_el$11, "x", 90);
    insert(_el$11, () => minFps().toString());
    insertNode(_el$12, _el$13);
    insertNode(_el$12, _el$15);
    setProp(_el$12, "x", 160);
    setProp(_el$12, "y", 26);
    insertNode(_el$13, createTextNode(`MAX:`));
    setProp(_el$13, "style", fpsLabel);
    setProp(_el$15, "style", fpsValue);
    setProp(_el$15, "x", 100);
    insert(_el$15, () => maxFps().toString());
    insertNode(_el$16, _el$17);
    insertNode(_el$16, _el$21);
    insertNode(_el$16, _el$25);
    insertNode(_el$16, _el$29);
    insertNode(_el$16, _el$33);
    insertNode(_el$16, _el$37);
    insertNode(_el$16, _el$41);
    insertNode(_el$16, _el$45);
    setProp(_el$16, "display", "flex");
    setProp(_el$16, "flexDirection", "column");
    setProp(_el$16, "y", 58);
    setProp(_el$16, "gap", 4);
    insertNode(_el$17, _el$18);
    insertNode(_el$17, _el$20);
    setProp(_el$17, "height", infoFontSize);
    insertNode(_el$18, createTextNode(`criticalThreshold:`));
    setProp(_el$18, "fontSize", infoFontSize);
    setProp(_el$18, "style", fpsLabel);
    setProp(_el$20, "fontSize", infoFontSize);
    setProp(_el$20, "style", fpsLabel);
    setProp(_el$20, "x", 230);
    insert(_el$20, criticalThresholdSignal);
    insertNode(_el$21, _el$22);
    insertNode(_el$21, _el$24);
    setProp(_el$21, "height", infoFontSize);
    insertNode(_el$22, createTextNode(`targetThreshold:`));
    setProp(_el$22, "fontSize", infoFontSize);
    setProp(_el$22, "style", fpsLabel);
    setProp(_el$24, "fontSize", infoFontSize);
    setProp(_el$24, "style", fpsLabel);
    setProp(_el$24, "x", 230);
    insert(_el$24, targetThresholdSignal);
    insertNode(_el$25, _el$26);
    insertNode(_el$25, _el$28);
    setProp(_el$25, "height", infoFontSize);
    insertNode(_el$26, createTextNode(`renderableMemUsed:`));
    setProp(_el$26, "fontSize", infoFontSize);
    setProp(_el$26, "style", fpsLabel);
    setProp(_el$28, "fontSize", infoFontSize);
    setProp(_el$28, "style", fpsLabel);
    setProp(_el$28, "x", 230);
    insert(_el$28, renderableMemUsedSignal);
    insertNode(_el$29, _el$30);
    insertNode(_el$29, _el$32);
    setProp(_el$29, "height", infoFontSize);
    insertNode(_el$30, createTextNode(`memUsed:`));
    setProp(_el$30, "fontSize", infoFontSize);
    setProp(_el$30, "style", fpsLabel);
    setProp(_el$32, "fontSize", infoFontSize);
    setProp(_el$32, "style", fpsLabel);
    setProp(_el$32, "x", 230);
    insert(_el$32, memUsedSignal);
    insertNode(_el$33, _el$34);
    insertNode(_el$33, _el$36);
    setProp(_el$33, "height", infoFontSize);
    insertNode(_el$34, createTextNode(`Textures In Memory:`));
    setProp(_el$34, "fontSize", infoFontSize);
    setProp(_el$34, "style", fpsLabel);
    setProp(_el$36, "fontSize", infoFontSize);
    setProp(_el$36, "style", fpsLabel);
    setProp(_el$36, "x", 230);
    insert(_el$36, () => loadedTexturesSignal().toString());
    insertNode(_el$37, _el$38);
    insertNode(_el$37, _el$40);
    setProp(_el$37, "height", infoFontSize);
    insertNode(_el$38, createTextNode(`Textures On Screen:`));
    setProp(_el$38, "fontSize", infoFontSize);
    setProp(_el$38, "style", fpsLabel);
    setProp(_el$40, "fontSize", infoFontSize);
    setProp(_el$40, "style", fpsLabel);
    setProp(_el$40, "x", 230);
    insert(_el$40, () => renderableTexturesLoadedSignal().toString());
    insertNode(_el$41, _el$42);
    insertNode(_el$41, _el$44);
    setProp(_el$41, "height", infoFontSize);
    insertNode(_el$42, createTextNode(`Quads:`));
    setProp(_el$42, "fontSize", infoFontSize);
    setProp(_el$42, "style", fpsLabel);
    setProp(_el$44, "fontSize", infoFontSize);
    setProp(_el$44, "style", fpsLabel);
    setProp(_el$44, "x", 230);
    insert(_el$44, () => quads().toString());
    insertNode(_el$45, _el$46);
    insertNode(_el$45, _el$48);
    setProp(_el$45, "height", infoFontSize);
    insertNode(_el$46, createTextNode(`Draws:`));
    setProp(_el$46, "fontSize", infoFontSize);
    setProp(_el$46, "style", fpsLabel);
    setProp(_el$48, "fontSize", infoFontSize);
    setProp(_el$48, "style", fpsLabel);
    setProp(_el$48, "x", 230);
    insert(_el$48, () => renderOps().toString());
    return _el$;
})();

export { resetCounter as n, setupFPS as r, FPSCounter as t };