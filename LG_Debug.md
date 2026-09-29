# LG Web App Debugging Report: TMDB Data & Image Loading Issues

This document outlines the root causes and solutions for the issues encountered while running the Solid TV demo application on the LG WebOS TV (`LGWhite` device, model `24LM520S-WU`, WebOS SDK 3.8.0).

---

## 1. SolidJS Fallback Path Crash (Strict Mode Error)

### Root Cause
Older Smart TV browsers (such as Chromium 38/53 on webOS 3.x) do not natively support ES6 `Proxy` features. When `Proxy` is not present, `solid-js` (v1.9.9) runs a fallback path for merging properties (`mergeProps`). 
This fallback path executes the following routine:
1. It retrieves all properties of the source object (including getters and function methods) via `Object.getOwnPropertyNames(source)`.
2. When the source is a SolidJS memo (which is under the hood a strict-mode function) or an `arguments` object, `Object.getOwnPropertyNames` returns internal strict-mode properties: `'caller'`, `'callee'`, and `'arguments'`.
3. The fallback path then calls `Object.getOwnPropertyDescriptor(source, key)` for each property. 
4. Attempting to query descriptors for `'caller'`, `'callee'`, or `'arguments'` on strict-mode functions or arguments objects immediately throws:
   > `TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them`

This unhandled promise rejection crashed the router's location state construction on startup, preventing the application's view components from rendering.

### Solution
We globally intercepted `Object.getOwnPropertyNames` at the start of the app entry point in `src/index.tsx`:

```typescript
// Patch Object.getOwnPropertyNames to prevent strict mode errors in solid-js mergeProps
(function() {
  const originalGetOwnPropertyNames = Object.getOwnPropertyNames;
  Object.getOwnPropertyNames = function(obj) {
    const names = originalGetOwnPropertyNames(obj);
    if (obj && (typeof obj === 'function' || Object.prototype.toString.call(obj) === '[object Arguments]')) {
      return names.filter(function(name) {
        return name !== 'caller' && name !== 'callee' && name !== 'arguments';
      });
    }
    return names;
  };
})();
```
This safely filters out forbidden strict-mode keys before `solid-js` tries to query their descriptors.

---

## 2. Image Loading Failure (`net::ERR_INSECURE_RESPONSE`)

### Root Cause
After fixing the JavaScript runtime crash, the application successfully loaded the route and queried metadata from the TMDB API (`https://api.themoviedb.org`). However, all requests to load poster and backdrop assets from the secure TMDB image server (`https://image.tmdb.org/...`) failed with:
   > `net::ERR_INSECURE_RESPONSE`

Older Smart TVs lack updated root certificate stores (e.g. they fail to recognize newer Let's Encrypt or Cloudflare TLS certificates / chains used by modern content delivery networks), causing the TV's browser engine to reject the SSL handshakes.

### Solution
We modified the TMDB API configuration module in `src/api/index.ts` to retrieve images using the non-SSL endpoint (`base_url` instead of `secure_base_url`):

```diff
 function loadConfig() {
   return _get("/configuration").then((data) => {
     tmdbConfig = data;
-    baseImageUrl = data.images?.secure_base_url;
+    // Fallback to HTTP base_url to prevent net::ERR_INSECURE_RESPONSE on older TV browsers
+    baseImageUrl = data.images?.base_url || data.images?.secure_base_url;
     return data;
   });
 }
```

By requesting assets via `http://image.tmdb.org/t/p/...`, we bypassed the SSL validation check, allowing images to load and render successfully.

---

## 3. CoreTextNode color Setter Crash (Babel ES5 constantSuper Assumption)

### Root Cause
In `vite.config.js`, the Babel legacy compiler was configured with the following assumption:
```javascript
constantSuper: true
```
This optimization instructs Babel to drop `_get` / `_superPropGet` helper methods on ES6 class `super` calls. Under ES5 targets, this assumption incorrectly compiles the TypeScript statement `super.color = value` (inside `@solidtv/renderer`'s `CoreTextNode`) to `this.color = value`.
Because this statement runs inside `CoreTextNode.prototype.color`'s setter, calling `this.color = value` caused the setter to invoke itself recursively, throwing:
   > `Uncaught RangeError: Maximum call stack size exceeded`

This stack overflow was triggered whenever a text node's color property was set, which happens extensively when rendering the list of Demo Tiles on the **Examples** page, crashing the application.

### Solution
We configured `constantSuper: false` in `vite.config.js`:
```diff
       assumptions: {
         setPublicClassFields: true,
         privateFieldsAsProperties: true,
-        constantSuper: true,
+        constantSuper: false, // ensures super.color calls compile to _superPropGet helpers instead of recursive assignments
         noClassCalls: true,
         noDocumentAll: true
       }
```
This instructs Babel to compile `super.color = value` correctly to ES5 helper functions that lookup the parent's setter prototype, resolving the crash at build time without requiring any runtime patches in the codebase.

---

---

## 6. Image Loading & Concurrency Optimizations for Main Thread

### Root Cause
Older Smart TV browsers (like Chrome 38/53 on webOS 3.x) do not support `createImageBitmap`, which forces the renderer to perform image decoding synchronously on the main thread during texture upload (`texImage2D`). 
If the framework attempts to spawn image Web Workers (the default configuration is `4` workers), these workers remain idle/non-functional because they cannot access modern image decode mechanisms in the worker context, consuming unnecessary overhead. Additionally, bursts of concurrent image requests block the UI thread, causing massive frame drop stutters.

### Solution
We configured dynamic main-thread image loading optimizations in [src/index.tsx](file:///Users/chief/Documents/Code/Lightning/solid-demo-app/src/index.tsx#L187-L188):
1. **Disable Workers**: Set `numImageWorkers = 0` dynamically if `window.createImageBitmap` is unsupported, avoiding worker instantiation overhead.
2. **Limit Concurrency**: Capped `imageDecodeConcurrency` at `2` (down from `4`) on legacy browsers to pace main-thread image decodes and keep the render loop active.

---

## 7. Summary & Checklist for Other Clients

When porting or testing the application on other smart TV platforms (e.g. webOS 4+, Tizen, Playstation, etc.), perform the following checks:

### 1. JavaScript Runtime & Proxy Compatibility
* **Check**: Does the client browser engine natively support ES6 `Proxy`? (Check if `window.Proxy` is defined).
* **Fix**: If unsupported, ensure the global `Object.getOwnPropertyNames` patch in [src/index.tsx](file:///Users/chief/Documents/Code/Lightning/solid-demo-app/src/index.tsx#L8-L19) is active. This prevents strict-mode errors in SolidJS's `mergeProps` fallback route copy routines.

### 2. TLS & Root Certificate Expiry (`net::ERR_INSECURE_RESPONSE`)
* **Check**: Do HTTPS image URLs (e.g. from Cloudflare, modern CDNs) fail to load with certificate handshaking errors?
* **Fix**: Force non-SSL endpoints (HTTP) for media assets in [src/api/index.ts](file:///Users/chief/Documents/Code/Lightning/solid-demo-app/src/api/index.ts#L50-L51).

### 3. ES5 Getter/Setter Transpilation Bug
* **Check**: Does navigating to pages with multiple text elements (e.g. Examples, Lists) cause `RangeError: Maximum call stack size exceeded` in `CoreTextNode`?
* **Fix**: Ensure that `constantSuper` is set to `false` in `vite.config.js` ([vite.config.js](file:///Users/chief/Documents/Code/Lightning/solid-demo-app/vite.config.js#L94)). This ensures Babel compiles class `super` setter delegates correctly for ES5 targets.

### 4. Remote Control Directional Navigation Mappings
* **Check**: Does pressing the Left arrow button on the remote move focus to the right or fail to trigger parent/drawer navigation in `VirtualGrid`?
* **Fix**: Check `e.key` strings returned by the browser. If the browser returns legacy names (e.g. `"Left"` instead of `"ArrowLeft"`), the global event normalizer in [src/index.tsx](file:///Users/chief/Documents/Code/Lightning/solid-demo-app/src/index.tsx#L21-L43) must be enabled.

### 5. Automated Key Navigation (Benchmarks/Testing)
* **Check**: Do automated key simulation loops fail to navigate?
* **Fix**: Check if `new KeyboardEvent` constructor throws an `Illegal constructor` error. If so, replace with `document.createEvent("Event")` and `Object.defineProperty` in [src/pages/Benchmark.tsx](file:///Users/chief/Documents/Code/Lightning/solid-demo-app/src/pages/Benchmark.tsx#L95-L105).

### 6. Image Loading Overhead
* **Check**: Does the app experience major frame rate stutters when loading rows of images?
* **Fix**: Check if `createImageBitmap` is supported. If false, disable image workers and set `imageDecodeConcurrency` to `2` to throttle main-thread rendering loop blockages.

---

## Summary of Modified Files
*   [vite.config.js](file:///Users/chief/Documents/Code/Lightning/solid-demo-app/vite.config.js) — Disabled `constantSuper` compiler assumption.
*   [src/index.tsx](file:///Users/chief/Documents/Code/Lightning/solid-demo-app/src/index.tsx) — Added strict-mode property filter patch, legacy event key normalizer, and main-thread image loading optimizations.
*   [src/api/index.ts](file:///Users/chief/Documents/Code/Lightning/solid-demo-app/src/api/index.ts) — Dynamic HTTP base URL fallback configuration.
*   [src/api/tmdbData.ts](file:///Users/chief/Documents/Code/Lightning/solid-demo-app/src/api/tmdbData.ts) — Promise logs wrapper for API transparency.
*   [src/api/providers/browse.ts](file:///Users/chief/Documents/Code/Lightning/solid-demo-app/src/api/providers/browse.ts) — Promise catch blocks to prevent uncaught rejections.
*   [src/pages/Benchmark.tsx](file:///Users/chief/Documents/Code/Lightning/solid-demo-app/src/pages/Benchmark.tsx) — Replaced standard constructor key simulation with backwards-compatible initEvent.

---

## 5. Benchmark Automation Key Simulation Failure (KeyboardEvent Constructor on Legacy Chrome)

### Root Cause
In `src/pages/Benchmark.tsx`, automated key navigation for the benchmarking routine was implemented via the standard ES6 constructor:
```javascript
new KeyboardEvent("keydown", { ... })
```
Older browser engines (like Chrome 38) do not support the KeyboardEvent constructor, throwing an `Illegal constructor` type error or creating a non-functional event instance where key properties are read-only and/or cannot be set. This caused the benchmark automation to fail silently without navigating.

### Solution
We replaced `new KeyboardEvent(...)` with the widely supported DOM Level 3 initialization method, followed by `Object.defineProperty` to configure the event properties on the dispatched event target:

```typescript
  function simulateKeyDown(key: string) {
    try {
      const event = document.createEvent("Event");
      event.initEvent("keydown", true, true);
      Object.defineProperty(event, "key", { value: key, enumerable: true, configurable: true });
      Object.defineProperty(event, "code", { value: key === "ArrowDown" ? "ArrowDown" : "ArrowUp", enumerable: true, configurable: true });
      document.dispatchEvent(event);
    } catch (e) {
      console.error("Failed to simulate key down:", e);
    }
  }
```
This ensures key simulations are successfully generated and dispatched on both legacy Smart TVs and modern desktop environments.

---

## 4. VirtualGrid Left Navigation Error (Legacy Key Event Names)

### Root Cause
Under `@solidtv/solid/primitives` (specifically the navigation helper `navigableHandleNavigation`), grid selection movement is resolved by checking:
```javascript
export const navigableHandleNavigation = function (e) {
    return moveSelection(this, e.key === 'ArrowUp' || e.key === 'ArrowLeft' ? -1 : 1);
};
```
Older browser engines (like Chromium 38/53 on webOS 3.x) return legacy string values for directional keys, where the Left arrow key is identified as `"Left"`, NOT `"ArrowLeft"`. 
Because the check `e.key === 'ArrowLeft'` returned `false`, the helper defaulted to `1` (which signifies moving the selection to the **Right**). As a result, pressing the **Left** button on the TV remote moved focus to the right.

### Solution
We registered a global capturing event listener on window level inside `src/index.tsx` to intercept all key events early and normalize legacy key names (`Left`, `Right`, `Up`, `Down`) to their standard Arrow equivalents:

```typescript
// Normalize legacy arrow keys to standardized values for third-party navigation libraries
(function() {
  const keyMap = {
    'Left': 'ArrowLeft',
    'Right': 'ArrowRight',
    'Up': 'ArrowUp',
    'Down': 'ArrowDown'
  };
  function normalizeKey(e) {
    if (e && keyMap[e.key]) {
      try {
        Object.defineProperty(e, 'key', {
          value: keyMap[e.key],
          configurable: true,
          writable: true,
          enumerable: true
        });
      } catch (err) {}
    }
  }
  window.addEventListener('keydown', normalizeKey, true);
  window.addEventListener('keyup', normalizeKey, true);
})();
```
This intercepts events before the framework or `VirtualGrid` listeners receive them, ensuring legacy browsers always present standard key strings, correcting the left direction navigation.

---

## 8. Remote Control Back Button (`Back` / `GoBack` / `461`) Navigation Failure

### Root Cause
1. On LG webOS TVs, pressing the BACK button on the remote control dispatches a `KeyboardEvent` with key string `"Back"` or `"GoBack"` and `keyCode` `461`.
2. In `src/pages/App.tsx`, `useFocusManager(...)` was invoked with a custom `userKeyMap` that defined `Back: ["b"]`. Because `useFocusManager` flattens its arguments into the framework's global key map, this wiped out `Config.keyMap.Back` configuration from `src/index.tsx`, overriding `Back` to ONLY accept the `'b'` key.
3. Consequently, when key code `461` or string `"Back"` arrived from the remote control, `@solidtv/solid` looked up `keyMapEntries["Back"]` and `keyMapEntries[461]`, received `undefined`, and failed to trigger `onBack` handlers (`<view onBack={() => navigate(-1)} />`).

### Solution
1. Updated `useFocusManager` in `src/pages/App.tsx` to include all back button keys:
```typescript
Back: ["Back", "GoBack", "b", 461, 10009, "Escape", 27]
```
2. Added `'GoBack': 'Back'` to the global capture-phase event normalizer in `src/index.tsx`.
3. Updated `Config.keyMap.Back` in `src/index.tsx` to include `"Back"`, `"GoBack"`, and `461`.


